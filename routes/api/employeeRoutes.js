const router = require("express").Router();
// const departmentRoutes = require('./departmentRoutes');
const Employee = require("../../models/Employee");

// router.use("/Employee", EmployeeRoutes);

router.get('/:id', async (req, res) => {
    try {
        const userData = await Employee.findByPk(req.params.id);
        if (!userData) {
            res.status(404).json({ message: "No Employee by that id"});
            return;
        } 
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;