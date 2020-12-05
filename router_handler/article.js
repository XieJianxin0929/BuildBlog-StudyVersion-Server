const db = require('../db/index')

// 获取侧边栏一级导航二级导航数据的处理函数
exports.getArticleInfo = (req, res) => {
    const sql = 'select * from my_article where my_path=?'
    db.query(sql, req.query.path, (err, results) => {
        // 1. 执行 SQL 语句失败
        if (err) return res.send({
            status: 1,
            message: "error",
          });
        // 2. 执行 SQL 语句成功
        res.send({
            status: 0,
            message: '获取文章数据成功！',
            data: results,
        })
    })

}