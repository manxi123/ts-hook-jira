/*
 * @Author: jiangshasha
 * @Date: 2021-06-29 11:19:31
 * @LastEditTime: 2021-06-29 11:24:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /jira/__json_server_mock__/middleware.js
 */

module.exports = (req, res, next) => {
  if (req.method === "POST" && req.path === "/login") {
    if (req.body.username === "jack" && req.body.password === "123456") {
      return res.status(200).json({
        user: {
          token: "123",
        },
      });
    } else {
      return res.status(400).json({
        message: "用户名或密码错误",
      });
    }
  }

  next();
};
