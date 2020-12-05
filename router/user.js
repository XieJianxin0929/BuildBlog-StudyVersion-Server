const express = require("express");
const user_handler = require("../router_handler/user");
const expressJoi = require("@escook/express-joi");
const { reg_login_schema } = require("../schema/user");

const router = express.Router();

router.post("/login", expressJoi(reg_login_schema), user_handler.logUser);

module.exports = router;
