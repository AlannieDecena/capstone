// Import the Express library
const express = require("express");
// Create a new router object
const router = express.Router();
// Import the goalController module
const Controllers = require("../controllers/goalController");

// Handle GET requests to the root URL 
router.get('/', (req, res) => {
    // Call the getGoal function from the goalController module
    Controllers.getGoal(req, res);
})

// Handle GET requests to URLs with an ID parameter
router.get('/:id', (req, res) => {
    // Call the getGoalID function from the goalController module
    Controllers.getGoalID(req, res);
})

// Handle POST requests to the /create endpoint 
router.post('/create', (req, res) => {
    // Call the createGoal function from the goalController module
    Controllers.createGoal(req.body, res)
})

// Handle PUT requests to URLs with an ID parameter
router.put('/put/:id', (req, res) => {
    // Call the updateGoal function from the goalController module
    Controllers.updateGoal(req, res)
})

// Handle DELETE requests to URLs with an ID parameter
router.delete('/delete/:id', (req, res) => {
    // Call the deleteGoal function from the goalController module
    Controllers.deleteGoal(req, res)
})

// Handle GET requests to URLs with a user ID parameter
router.get('/user/:id', (req, res) => {
    // Call the userGoalID function from the goalController module
    Controllers.userGoalID(req, res);
})

// Export the router object so it can be used in other modules
module.exports = router;
