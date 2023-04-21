const express = require("express");
// const Controllers = require("./controllers");
const Controllers = require('./controllers')
const app = express();
require("dotenv").config();
let dbConnect = require("./dbConnect");
const cors = require('cors')

// parse requests of content-type -application/json
app.use(express.json());
app.use(cors());

let userRoutes = require('./routes/userRoutes')
app.use('/user', userRoutes)

let moodRoutes = require('./routes/moodRoutes')
app.use('/mood', moodRoutes)

let goalRoutes = require('./routes/goalRoutes')
app.use('/goal', goalRoutes)

let noteRoutes = require('./routes/noteRoutes')
app.use('/note', noteRoutes)

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
console.log(`Server is running onport ${PORT}.`);

// Controllers.initialController.storeVehicles()


});
