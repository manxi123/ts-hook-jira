/*
 * @Author: your name
 * @Date: 2021-06-25 15:51:25
 * @LastEditTime: 2021-06-29 10:44:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /jira/src/App.tsx
 */
import React from "react";
import "./App.css";
import { ProjectListScreen } from "./screens/project-list/index";
import { LoginScreen } from "./screens/login/index";

function App() {
  return (
    <div className="App">
      {/* <ProjectListScreen /> */}
      <LoginScreen />
    </div>
  );
}

export default App;
