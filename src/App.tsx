/*
 * @Author: your name
 * @Date: 2021-06-25 15:51:25
 * @LastEditTime: 2021-08-17 11:20:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /jira/src/App.tsx
 */
import { useAuth } from "context/auth-context";
import React from "react";
import { UnauthenticatedApp } from "unauthenticated-app";
import { AuthenticatedApp } from "authenticated-app";
import "./App.css";

function App() {
  const { user } = useAuth();
  return (
    <div className="App">
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </div>
  );
}

export default App;
