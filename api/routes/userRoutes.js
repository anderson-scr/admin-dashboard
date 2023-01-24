const router = require("express").Router();
const controller = require("../controller/userController");

router.post("/login", controller.login);

router.get("/all", controller.all);

module.exports = router;