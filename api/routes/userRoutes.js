const router = require("express").Router();
const controller = require("../controller/userController");

router.post("/Login", controller.login);

router.get("/All", controller.all);

module.exports = router;