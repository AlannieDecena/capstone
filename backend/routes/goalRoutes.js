
const express = require("express");
const router = express.Router();
const Controllers = require("../controllers/goalController");

router.get('/', (req, res) => {

    Controllers.getGoal(req, res);
})

router.get('/:id', (req, res) => {
    Controllers.getGoalID(req, res);
})

router.post('/create', (req, res) => {
    Controllers.createGoal(req.body, res)
})

router.put('/put/:id', (req, res) => {
   
    Controllers.updateGoal(req, res)
})
router.delete('/delete/:id', (req, res) => {
    Controllers.deleteGoal(req, res)
})


module.exports = router;