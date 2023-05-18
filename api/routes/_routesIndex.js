const router = require("express").Router();
const defaultRoute = "/admin-dashboard/api/";

// Routes
router.use(defaultRoute + "users", require("./userRoutes"));

router.use(defaultRoute + "customers", require("./customerRoutes"));

router.use(defaultRoute + "sales", require("./saleRoutes"));

module.exports = router;