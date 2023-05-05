// Importing the Express framework and creating a router object
const express = require("express");
const router = express.Router();

// Importing the controller functions from noteController.js
const Controllers = require("../controllers/noteController");

// Defining route handlers for different HTTP requests
router.get('/', (req, res) => {
    // Handling GET requests to retrieve all notes
    Controllers.getNote(req, res);
})

router.get('/:id', (req, res) => {
    // Handling GET requests to retrieve a specific note by ID
    console.log(req.params.id)
    // Controllers.getNoteID(req, res);
})

router.get('/user/:userId', (req, res) => {
    // Handling GET requests to retrieve all notes created by a specific user
    Controllers.getUserNotes(req, res);
})

router.post('/create', (req, res) => {
    // Handling POST requests to create a new note
    // Passing the request body to the createNote function in the noteController
    Controllers.createNote(req.body, res)
})

router.put('/put/:id', (req, res) => {
    // Handling PUT requests to update an existing note by ID
    // Passing the request object to the updateNote function in the noteController
    Controllers.updateNote(req, res)
})

router.delete('/delete/:id', (req, res) => {
    // Handling DELETE requests to delete an existing note by ID
    // Passing the request object to the deleteNote function in the noteController
    Controllers.deleteNote(req, res)
})

// Exporting the router object for use in other files
module.exports = router;
