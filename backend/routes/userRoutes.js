
const express = require("express");
const router = express.Router();
const Controllers = require("../controllers/userController");

router.get('/', (req, res) => {
console.log('test')
    Controllers.getUser(req, res);
})

router.get('/:id', (req, res) => {
    Controllers.getUserID(req, res);
})

router.post('/create', (req, res) => {
    // console.log(req.body.email)
    Controllers.createUser(req.body, res)
})

router.put('/put/:id', (req, res) => {
   
    Controllers.updateUser(req, res)
})
router.delete('/delete/:id', (req, res) => {
    Controllers.deleteUser(req, res)
})

router.post('/login', (req, res) => {
    Controllers.loginUser(req, res)
})


module.exports = router;