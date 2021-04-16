const router = require("express").Router();
const Job = require("../../models/Job");


router.get('/:id', async (req, res) => {
    try {
        const userData = await Job.findByPk(req.params.id);
        if (!userData) {
            res.status(404).json({ message: "No Job by that id"});
            return;
        } 
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;