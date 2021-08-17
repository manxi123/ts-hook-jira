import { useAuth } from "context/auth-context";
import { ProjectListScreen } from "screens/project-list";

/*
 * @Author: your name
 * @Date: 2021-08-16 11:18:37
 * @LastEditTime: 2021-08-17 11:11:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /jira/src/unauthenticated-app.tsx
 */
export const AuthenticatedApp = () => {
  const { logout } = useAuth();
  return (
    <div>
      <button onClick={logout}>退出登录</button>
      <ProjectListScreen />
    </div>
  );
};
