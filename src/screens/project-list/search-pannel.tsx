/*
 * @Author: jiangshasha
 * @Date: 2021-06-26 16:40:04
 * @LastEditTime: 2021-06-28 15:58:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /jira/src/screens/project-list/search-pannel.tsx
 */
import { useState } from "react";
import React from "react";

interface searchPannelProps {
  users: User[];
  param: {
    name: string;
    personId: string;
  };
  setParam: (param: searchPannelProps["param"]) => void;
}

export interface User {
  id: string;
  name: string;
  email: string;
  title: string;
  organization: string;
}

export const SearchPannel = ({ param, users, setParam }: searchPannelProps) => {
  return (
    <form>
      <input
        type="text"
        value={param.name}
        onChange={(evt) => {
          setParam({
            ...param,
            name: evt.target.value,
          });
        }}
      />
      <select
        value={param.personId}
        onChange={(evt) => {
          setParam({
            ...param,
            personId: evt.target.value,
          });
        }}
      >
        <option value={""}>负责人</option>
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
    </form>
  );
};
