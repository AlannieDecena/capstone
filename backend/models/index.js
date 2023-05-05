'use strict';

// Import the model files
const User = require('./user'); 
const Mood = require('./mood'); 
const Goal = require('./goal');
const Note = require('./note');

// Asynchronous function to synchronize the models with the database
async function init() {
    await User.sync();
    await Mood.sync();
    await Goal.sync();
    await Note.sync();
};

// Call the init function to synchronize the models and export the model files
init();
module.exports = {
    User,
    Mood,
    Goal,
    Note
};
