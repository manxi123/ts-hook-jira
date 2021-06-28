/*
 * @Author: your name
 * @Date: 2021-06-26 17:57:20
 * @LastEditTime: 2021-06-26 18:10:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /jira/src/utils/index.js
 */

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
