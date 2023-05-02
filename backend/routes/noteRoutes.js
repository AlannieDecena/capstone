
const express = require("express");
const router = express.Router();
const Controllers = require("../controllers/noteController");

router.get('/', (req, res) => {

    Controllers.getNote(req, res);
})

router.get('/:id', (req, res) => {
    console.log(req.params.id)
    // Controllers.getNoteID(req, res);
})

router.get('/user/:userId', (req, res) => {
    Controllers.getUserNotes(req, res);
})

router.post('/create', (req, res) => {
    // console.log(req.body.mood)
    Controllers.createNote(req.body, res)
})

router.put('/put/:id', (req, res) => {
   
    Controllers.updateNote(req, res)
})
router.delete('/delete/:id', (req, res) => {
    Controllers.deleteNote(req, res)
})


module.exports = router;