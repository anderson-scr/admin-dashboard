const router = require("express").Router();
const controller = require("../controller/saleController");

router.get("/listAll", controller.listAll);

router.get("/saleValues", controller.saleValues);

module.exports = router;