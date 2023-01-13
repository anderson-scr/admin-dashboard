const router = require("express").Router();
const defaultRoute = "Admin-dashboard-api/v1.0.0/";

// Routes
router.use(defaultRoute + "User", require("./userRoutes"));
module.exports = router;