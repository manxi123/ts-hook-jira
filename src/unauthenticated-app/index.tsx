import { useState } from "react";
import { LoginScreen } from "./login";
import { RegisterScreen } from "./register";

/*
 * @Author: your name
 * @Date: 2021-08-16 11:19:36
 * @LastEditTime: 2021-08-16 11:52:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /jira/src/unauthenticated-app/index.tsx
 */
export const UnauthenticatedApp = () => {
  const [isRegister, setIsRegister] = useState(false);
  return (
    <div>
      {isRegister ? <LoginScreen /> : <RegisterScreen />}
      <button onClick={() => setIsRegister(!isRegister)}>
        切换到{isRegister ? "登录" : "注册"}页面
      </button>
    </div>
  );
};
