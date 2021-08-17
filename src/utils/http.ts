/*
 * @Author: your name
 * @Date: 2021-08-16 15:12:22
 * @LastEditTime: 2021-08-16 17:59:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /jira/src/utils/http.ts
 */
import qs from "qs";
import * as auth from "auth-provider";
import { useAuth } from "context/auth-context";

const apiUrl = process.env.REACT_APP_API_URL;

interface Config extends RequestInit {
  data?: object;
  token?: string;
}

export const http = async (
  endPoint: string,
  { data, token, headers, ...customConfig }: Config = {}
) => {
  const config = {
    method: "GET",
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
      "Content-type": data ? "application/json" : "",
    },
    ...customConfig,
  };

  if (config.method.toUpperCase() === "GET") {
    endPoint += `?${qs.stringify(data)}`;
  } else {
    config.body = JSON.stringify(data || {});
  }

  // axios和fetch的表现不一样，axios可以直接在返回状态为2XX的时候抛出异常
  return window
    .fetch(`${apiUrl}/${endPoint}`, config)
    .then(async (response) => {
      if (response.status === 401) {
        await auth.logout();
        window.location.reload();
        return Promise.reject({ message: "请重新登录" });
      }
      const data = await response.json();
      if (response.ok) {
        return data;
      } else {
        return Promise.reject(data);
      }
    });
};

export const useHttp = () => {
  const { user } = useAuth();
  // utility type 的用法：用泛型给它传入一个其他类型，然后utility type对这个类型进行某种操作
  return (...[endPoint, config]: Parameters<typeof http>) =>
    http(endPoint, { ...config, token: user?.token });
};
