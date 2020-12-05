const db = require("../db/index")
const jwt = require('jsonwebtoken')
const config = require('../config')

exports.logUser = (req, res) => {
    const userinfo = req.body;
    const sql = "select * from my_admin where username = ?";
    db.query(sql, userinfo.username, (err, results) => {
        if (err) return res.send({
            status: 1,
            message: "error",
          });
        // 执行 SQL 语句成功，但是查询到数据条数不等于 1
        if (results.length !== 1 || results[0].password !== userinfo.password) return res.cc('登录失败！');
        const user = {
            ...results[0],
            password: ''
        }
        const tokenStr = jwt.sign(user, config.jwtSecretKey, {
            expiresIn: config.expiresIn, // token 有效期为 10 个小时
        });
        res.send({
            status: 0,
            message: '登录成功！',
            // 为了方便客户端使用 Token，在服务器端直接拼接上 Bearer 的前缀
            token: 'Bearer ' + tokenStr,
        })
    })
}