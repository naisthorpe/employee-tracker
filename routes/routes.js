const router = require("express").Router();
const departmentRoute = require("./api/departmentRoutes");
const jobsRoute = require("./api/jobRoutes");
const employeeRoute = require("./api/employeeRoutes");

router.use("/api/department", departmentRoute);
router.use("/api/jobs", jobsRoute);
router.use("/api/employee", employeeRoute);

module.exports = router;