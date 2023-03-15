const router = require("express").Router();
const controller = __atWork? require("../controller/userController") : require("../mock/controller/userController");

router.post("/login", controller.login);

router.get("/listAll", controller.listAll);

module.exports = router;