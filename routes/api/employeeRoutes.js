const router = require("express").Router();
// const departmentRoutes = require('./departmentRoutes');
const Employee = require("../../models/Employee");

// router.use("/Employee", EmployeeRoutes);

class Employee {
    try {
        router.get('/employee', (req, res) => {
            Employee.findAll({
                order: ['job_id'],
            })
        }).then((employeeData) => {
            console.log(employeeData);
            res.json(employeeData);
        });
        /*
        const userData = await Employee.findByPk(req.params.id);
        if (!userData) {
            res.status(404).json({ message: "No Employee by that id"});
            return;
        } 
        */
        res.status(200).json(userData);
    } catch (err) {
        console.log("u messed up");
        res.status(500).json(err);
    }
};

module.exports = router;
module.exports = getAllEmployees;