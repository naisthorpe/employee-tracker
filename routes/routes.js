const router = require("express").Router();
const apiRoutes = require("./api/departmentRoutes");

router.use("/api", apiRoutes);

module.exports = router;