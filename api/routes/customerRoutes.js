const router = require("express").Router();
const controller = require("../controller/customerController");

router.get("/listAll", controller.listAll);

module.exports = router;