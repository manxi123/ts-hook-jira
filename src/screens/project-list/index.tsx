/*
 * @Author: your name
 * @Date: 2021-06-26 16:38:15
 * @LastEditTime: 2021-08-17 11:21:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /jira/src/screens/project-list/index.tsx
 */
import React from "react";
import { useState, useEffect } from "react";
import { cleanObject, useDebounce } from "utils";
import { List } from "./list";
import { SearchPannel } from "./search-pannel";
import * as qs from "qs";
import { useHttp } from "utils/http";

const apiUrl = process.env.REACT_APP_API_URL;

export const ProjectListScreen = () => {
  const [list, setList] = useState([]);

  const [param, setParam] = useState({
    name: "",
    personId: "",
  });

  // 使用自定义hook
  const debouncedParam = useDebounce(param, 200);

  const [users, setUsers] = useState([]);

  const client = useHttp();

  useEffect(() => {
    client("projects", { data: cleanObject(debouncedParam) }).then(setList);
  }, [debouncedParam]);

  useEffect(() => {
    client("users").then(setUsers);
  }, []);

  return (
    <div>
      <SearchPannel users={users} param={param} setParam={setParam} />
      <List users={users} list={list} />
    </div>
  );
};
