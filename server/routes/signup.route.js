const express = require("express");
const { signUp } = require("../controllers/signup.controller");

const router = express.Router();

router.route("/").get(signUp);

module.exports = router;
