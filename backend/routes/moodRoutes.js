
const express = require("express");
const router = express.Router();
const Controllers = require("../controllers/moodController");

router.get('/', (req, res) => {

    Controllers.getMood(req, res);
})

router.get('/:id', (req, res) => {
    Controllers.getMoodID(req, res);
})

router.post('/create', (req, res) => {
    // console.log(req.body.mood)
    Controllers.createMood(req.body, res)
})

// router.put('/put/:id', (req, res) => {
   
//     Controllers.updateMood(req, res)
// })
router.delete('/delete/:id', (req, res) => {
    Controllers.deleteMood(req, res)
})

router.get('/weeklymood/:id', (req, res) => {
    Controllers.weeklymood(req, res)
})

router.post('/update', (req, res) => {
    // console.log(req.body.mood)
    Controllers.updateMood(req.body, res)
})

module.exports = router;