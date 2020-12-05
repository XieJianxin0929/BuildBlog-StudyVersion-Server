const db = require("../db/index");

// 联级选择器数据
exports.getCascaderInfo = (req, res) => {
  const sql = "select * from my_aside";
  db.query(sql, (err, results) => {
    // 1. 执行 SQL 语句失败
    if (err)
      return res.send({
        status: 1,
        message: "error",
      });
    // 2. 执行 SQL 语句成功

    res.send({
      status: 0,
      message: "获取文章数据成功！",
      data: results,
    });
  });
};

// 修改文章内容
exports.editArticleInfo = (req, res) => {
  const sql = `update my_article set my_title=?,my_author=?,my_time=?,my_content=? where my_path=?`;
  db.query(sql,[req.body.obj.my_title,req.body.obj.my_author,req.body.obj.my_time.slice(0,10),req.body.obj.my_content, req.body.obj.my_path],(err, results) => {
      // 执行 SQL 语句失败
      if (err)
        return res.send({
          status: 1,
          message: err,
        });

      // 执行 SQL 语句成功，但影响行数不为 1
      if (results.affectedRows !== 1)
        return res.send({
          status: 1,
          message: "修改文章失败",
        });

      // 修改用户信息成功
      res.send({
        status: 0,
        message: "修改文章成功！",
        data: results,
      });
    }
  );
};
