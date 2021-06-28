/*
 * @Author: jiangshasha
 * @Date: 2021-06-26 17:57:20
 * @LastEditTime: 2021-06-28 15:16:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /jira/src/utils/index.js
 */

import { useEffect, useState } from "react";

// !!将值转换成布尔值
export const isFlasy = (value) => (value === 0 ? false : !value);

export const cleanObject = (object) => {
  const result = { ...object };

  Object.keys(result).forEach((key) => {
    const value = object[key];

    if (isFlasy(value)) {
      delete result[key];
    }
  });

  return result;
};

export const useMount = (callback) => {
  useEffect(() => {
    callback();
  }, []);
};

// 防抖，只执行最后一次操作
export const debounce = (func, delay) => {
  let timeout;
  return (...param) => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      func(...param);
    }, delay);
  };
};

// 自定义Hook防抖
export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValye] = useState(value);

  // 在每次value变化之后，设置一个定时器
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValye(value);
    }, delay);

    // 每次在上一个useEffect执行完以后才运行
    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debouncedValue;
};
