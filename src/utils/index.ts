/*
 * @Author: jiangshasha
 * @Date: 2021-06-26 17:57:20
 * @LastEditTime: 2021-06-28 16:05:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /jira/src/utils/index.js
 */

import { useEffect, useState } from "react";

// !!将值转换成布尔值
export const isFlasy = (value: any) => (value === 0 ? false : !value);

export const cleanObject = (object: object) => {
  const result = { ...object };

  Object.keys(result).forEach((key) => {
    // @ts-ignore
    const value = object[key];

    if (isFlasy(value)) {
      // @ts-ignore
      delete result[key];
    }
  });

  return result;
};

export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
  }, []);
};

// 防抖，只执行最后一次操作
// export const debounce = (func, delay) => {
//   let timeout;
//   return (...param) => {
//     if (timeout) {
//       clearTimeout(timeout);
//     }
//     timeout = setTimeout(() => {
//       func(...param);
//     }, delay);
//   };
// };

// 自定义Hook防抖
export const useDebounce = (value: any, delay?: number) => {
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
