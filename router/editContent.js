const express = require("express")
const editContent_handler = require('../router_handler/editContent')

const router = express.Router()

router.get("/getCascaderInfo", editContent_handler.getCascaderInfo)
router.post("/editArticleInfo", editContent_handler.editArticleInfo)


module.exports = router