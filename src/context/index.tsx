import { AuthProvider } from "./auth-context";
import { ReactNode } from "react";

/*
 * @Author: your name
 * @Date: 2021-06-30 20:14:01
 * @LastEditTime: 2021-07-01 16:57:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /jira/src/context/auth-context.ts
 */
export const AppProviders = ({ children }: { children: ReactNode }) => {
  return <AuthProvider>{children}</AuthProvider>;
};
