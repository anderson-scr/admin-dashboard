const router = require("express").Router();
const controller = require("../controller/customerController");

router.get("/listAll", controller.listAll);

router.get("/monthlyNewCustomers", controller.monthlyNewCustomers)

module.exports = router;