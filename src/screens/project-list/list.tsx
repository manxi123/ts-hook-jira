/*
 * @Author: jiangshahsa
 * @Date: 2021-06-26 16:39:13
 * @LastEditTime: 2021-06-28 16:00:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /jira/src/screens/project-list/list.tsx
 */
import React from "react";
import { User } from "./search-pannel";

interface Project {
  id: string;
  name: string;
  personId: string;
  pin: boolean;
  organization: string;
}

interface ListProps {
  list: Project[];
  users: User[];
}

export const List = ({ list, users }: ListProps) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>名称</th>
            <th>负责人</th>
          </tr>
        </thead>
        <tbody>
          {list.map((project) => (
            <tr key={project.id}>
              <td>{project.name}</td>
              <td>
                {users.find((user) => user.id === project.personId)?.name ||
                  "未知"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
