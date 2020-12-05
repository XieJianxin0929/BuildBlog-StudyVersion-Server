const express = require("express")
const aside_handler = require('../router_handler/aside')

const router = express.Router()

router.get("/getAsideInfo", aside_handler.getAsideInfo)


module.exports = router