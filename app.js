const express = require("express");
const cors = require("cors");
const joi = require("@hapi/joi");
const expressJWT = require("express-jwt");
const config = require("./config");

const asideRouter = require("./router/aside");
const articleRouter = require("./router/article");
const userRouter = require("./router/user");
const editContentRouter = require("./router/editContent");
const editAsidetRouter = require("./router/editAside");

const app = express();
app.use(cors());
app.use("/uploads", express.static("./uploads"));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(
  expressJWT({
    secret: config.jwtSecretKey,
    algorithms: ["HS256"],
  }).unless({
    path: [/^\/myblog\//],
  })
);

// app.use((req, res, next) => {
//   res.cc = function (err, status = 1) {
//     res.send({
//       status,
//       message: err instanceof Error ? err.message : err,
//     });
//   };
//   next();
// });

app.use("/myblog", asideRouter);
app.use("/myblog", articleRouter);
app.use("/myblog", userRouter);
app.use("/quanxian", editContentRouter);
app.use("/quanxian", editAsidetRouter);

app.use(function (err, req, res, next) {
  // 数据验证失败
  if (err instanceof joi.ValidationError)
    return res.send({
      status: 1,
      message: "error111",
    });
  if (err.name === "UnauthorizedError")
    return res.send({
      status: 1,
      message: "身份验证失败",
    });
  // 未知错误
  res.send({
    status: 1,
    message: err + '222',
  });
});

app.listen(80, () => {
  console.log("服务器已启动~");
});
