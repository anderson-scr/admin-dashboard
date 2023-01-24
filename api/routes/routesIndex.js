const router = require("express").Router();
const defaultRoute = "/admin-dashboard/api/";

// Routes
router.use(defaultRoute + "user", require("./userRoutes"));

module.exports = router;