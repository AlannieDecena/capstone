// Require the express package to create an express application
const express = require("express");

// Import the Controllers module which contains the application's controllers
const Controllers = require('./controllers')

// Create an Express application
const app = express();

// Import the dotenv module to load environment variables from a .env file
require("dotenv").config();

// Import the dbConnect module to connect to the database
let dbConnect = require("./dbConnect");

// Import the cors module to allow Cross-Origin Resource Sharing
const cors = require('cors')

// Parse requests with JSON payloads
app.use(express.json());

// Enable CORS for all routes
app.use(cors());

// Import the userRoutes module which contains the application's user routes
let userRoutes = require('./routes/userRoutes')

// Mount the userRoutes module on the '/user' path
app.use('/user', userRoutes)

// Import the moodRoutes module which contains the application's mood routes
let moodRoutes = require('./routes/moodRoutes')

// Mount the moodRoutes module on the '/mood' path
app.use('/mood', moodRoutes)

// Import the goalRoutes module which contains the application's goal routes
let goalRoutes = require('./routes/goalRoutes')

// Mount the goalRoutes module on the '/goal' path
app.use('/goal', goalRoutes)

// Import the noteRoutes module which contains the application's note routes
let noteRoutes = require('./routes/noteRoutes')

// Mount the noteRoutes module on the '/note' path
app.use('/note', noteRoutes)

// Set the application's port to the value of the PORT environment variable or 8080 if it is not set
const PORT = process.env.PORT || 8080;

// Start the server and listen for incoming requests on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);

    // Call the storeVehicles function in the initialController module
    // Controllers.initialController.storeVehicles()
});
