const db = require("../db/index");

// 添加一级导航
exports.addAsideLv1 = (req, res) => {
  const sql = "insert into my_aside set my_aside_lv1=?";
  db.query(
    sql,
    [req.body.obj.my_aside_lv1]
    ,
    (err, results) => {
      if (err) {
        return res.send({
          status: 1,
          message: "error",
        });
      }
      if (results.affectedRows != 1) {
        return res.send({
          status: 1,
          message: "error",
        });
      }
      res.send({
        status: 0,
        message: "添加一级导航成功！",
        data: results,
      });
    }
  );
};

// 删除一级导航
exports.deleteAsideLv1 = (req, res) => {
  const sql = "delete from my_aside where my_aside_id=?";
  db.query( sql, req.query.id, (err, results) => {
      if (err) {
        return res.send({
          status: 1,
          message: "error",
        });
      }
      if (results.affectedRows != 1) {
        return res.send({
          status: 1,
          message: "error",
        });
      }
      res.send({
        status: 0,
        message: "删除一级导航成功！",
        data: results,
      });
    }
  );
};

// 获取侧边栏二级导航数据
exports.getAsideLv2Info = (req, res) => {
  const sql = 'select my_aside_lv2 from my_aside where my_aside_id=?'
  db.query(sql, req.query.id, (err, results) => {
      // 1. 执行 SQL 语句失败
      if (err) return res.send({
          status: 1,
          message: "error",
        });

      // 2. 执行 SQL 语句成功
      res.send({
          status: 0,
          message: '获取二级导航数据成功！',
          data: results,
      })
  })
}

// 添加二级导航
exports.addAsideLv2 = (req, res) => {
  const sql = `update my_aside set my_aside_lv2=? where my_aside_id=?`;
  db.query(
    sql,
    [req.body.obj.lv2, req.body.obj.id]
    ,
    (err, results) => {
      if (err) {
        return res.send({
          status: 1,
          message: err + "333",
        });
      }
      if (results.affectedRows != 1) {
        return res.send({
          status: 1,
          message: "error444",
        });
      }
      res.send({
        status: 0,
        message: "添加二级导航成功！",
        data: results,
      });
    }
  );
};

// 添加文章path title
exports.addArticlePath = (req, res) => {
  const sql = "insert into my_article set my_path=?,my_title=?,my_author=?";
  db.query(
    sql,
    [req.body.obj1.path, req.body.obj1.title, '解健鑫']
    ,
    (err, results) => {
      if (err) {
        return res.send({
          status: 1,
          message: "error",
        });
      }
      if (results.affectedRows != 1) {
        return res.send({
          status: 1,
          message: "error",
        });
      }
      res.send({
        status: 0,
        message: "添加文章path成功！",
        data: results,
      });
    }
  );
};

// 删除文章path
exports.deleteArticlePath = (req, res) => {
  const sql = "delete from my_article where my_path=?";
  db.query( sql, req.query.path, (err, results) => {
      if (err) {
        return res.send({
          status: 1,
          message: "error",
        });
      }
      if (results.affectedRows != 1) {
        return res.send({
          status: 1,
          message: "error",
        });
      }
      res.send({
        status: 0,
        message: "删除文章path成功！",
        data: results,
      });
    }
  );
};