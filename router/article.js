const express = require("express")
const article_handler = require('../router_handler/article')

const router = express.Router()

router.get("/getArticleInfo", article_handler.getArticleInfo)


module.exports = router