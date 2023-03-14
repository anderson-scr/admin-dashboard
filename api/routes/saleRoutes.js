const router = require("express").Router();
const controller = require("../controller/saleController");

router.get("/listAll", controller.listAll);

module.exports = router;