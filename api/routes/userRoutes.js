const router = require("express").Router();
const controller = require("../controller/userController");

router.get("/Login", controller.login);

module.exports = router;