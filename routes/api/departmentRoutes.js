const router = require("express").Router();
// const departmentRoutes = require('./departmentRoutes');
const Department = require("../../models/Department");

// router.use("/department", departmentRoutes);

router.get('/:id', async (req, res) => {
    try {
        const userData = await Department.findByPk(req.params.id);
        if (!userData) {
            res.status(404).json({ message: "No department by that id"});
            return;
        } 
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;