// Import the express module to create a router
const express = require("express");

// Create a router instance for the mood routes
const router = express.Router();

// Import the controllers for the mood routes
const Controllers = require("../controllers/moodController");

// Route to get all moods
router.get('/', (req, res) => {
    Controllers.getMood(req, res);
})

// Route to get a single mood by ID
router.get('/:id', (req, res) => {
    Controllers.getMoodID(req, res);
})

// Route to create a new mood
router.post('/create', (req, res) => {
    console.log(req.body.mood)
    // Controllers.createMood(req.body, res)
})

// Route to delete a mood by ID
router.delete('/delete/:id', (req, res) => {
    Controllers.deleteMood(req, res)
})

// Route to get the weekly mood of a user
router.get('/weeklymood/:id', (req, res) => {
    Controllers.weeklymood(req, res)
})

// Route to update a mood by ID
router.post('/update', (req, res) => {
    Controllers.updateMood(req, res)
})

// Export the router module for use in other files
module.exports = router;
