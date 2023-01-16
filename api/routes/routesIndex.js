const router = require("express").Router();
const defaultRoute = "/AdmDashboardApi/";

// Routes
router.use(defaultRoute + "User", require("./userRoutes"));

module.exports = router;