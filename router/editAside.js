const express = require("express")
const editAside_handler = require('../router_handler/editAside')

const router = express.Router()

router.post("/addAsideLv1", editAside_handler.addAsideLv1)
router.get("/deleteAsideLv1", editAside_handler.deleteAsideLv1)
router.get("/getAsideLv2Info", editAside_handler.getAsideLv2Info)
router.post("/addAsideLv2", editAside_handler.addAsideLv2)
router.post("/addArticlePath", editAside_handler.addArticlePath)
router.get("/deleteArticlePath", editAside_handler.deleteArticlePath)



module.exports = router