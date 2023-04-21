'use strict'

//require the model
const User = require('./user') 
const Mood = require('./mood') 
const Goal = require('./goal')
const Note = require('./note')


 //sync the model
async function init() {
    await User.sync();
    await Mood.sync();
    await Goal.sync();
    await Note.sync();
  
    
  
};

//export the model
init();
module.exports = {
    User,
    Mood,
    Goal,
    Note
};

