const router = require("express").Router();
const controller = __atWork? require("../controller/customerController") : require("../mock/controller/customerController");

router.get("/listAll", controller.listAll);

router.get("/monthlyNewCustomers", controller.monthlyNewCustomers)

module.exports = router;