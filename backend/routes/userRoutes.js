// Importing the express module which is a Node.js web application framework
const express = require("express");

// Creating an instance of the router object provided by the express module
const router = express.Router();

// Importing the userController module which contains functions to handle HTTP requests related to users
const Controllers = require("../controllers/userController");

// Setting up a GET request for the root endpoint
router.get('/', (req, res) => {
    // Logging a message to the console
    console.log('test');
    // Calling the getUser function from the userController module
    Controllers.getUser(req, res);
});

// Setting up a GET request for an endpoint with a dynamic parameter ":id"
router.get('/:id', (req, res) => {
    // Calling the getUserID function from the userController module, passing in the request and response objects
    Controllers.getUserID(req, res);
});

// Setting up a POST request for the "/create" endpoint
router.post('/create', (req, res) => {
    // Calling the createUser function from the userController module, passing in the request body and response objects
    Controllers.createUser(req.body, res);
});

// Setting up a PUT request for an endpoint with a dynamic parameter ":id"
router.put('/put/:id', (req, res) => {
    // Calling the updateUser function from the userController module, passing in the request and response objects
    Controllers.updateUser(req, res);
});

// Setting up a DELETE request for an endpoint with a dynamic parameter ":id"
router.delete('/delete/:id', (req, res) => {
    // Calling the deleteUser function from the userController module, passing in the request and response objects
    Controllers.deleteUser(req, res);
});

// Setting up a POST request for the "/login" endpoint
router.post('/login', (req, res) => {
    // Calling the loginUser function from the userController module, passing in the request and response objects
    Controllers.loginUser(req, res);
});

// Exporting the router object so that it can be used in other modules
module.exports = router;
