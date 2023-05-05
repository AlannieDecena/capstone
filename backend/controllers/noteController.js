// Import the Note model from the models directory
const Models = require("../models");

// Define function to get all notes
const getNote = (req, res) => {
    // Find all notes in the database
    Models.Note.findAll({}).then(function (data) {
        // Send the notes as a response
        res.send({ result: 200, data: data })
    }).catch(err => {
        // If there is an error, throw it
        throw err
    })
}

// Define function to get a specific note by ID
const getNoteID = (req, res) => {
    // Find the note with the specified ID
    Models.Note.findAll({where: { id: req.params.id }}).then(function (data) {
        // Send the note as a response
        res.send({ result: 200, data: data })
    }).catch(err => {
        // If there is an error, throw it
        throw err
    })
}

// Define function to get all notes for a specific user
const getUserNotes = (req, res) => {
    // Find all notes for the specified user
    Models.Note.findAll({where: { userId: req.params.userId }}).then(function (data) {
        // Send the notes as a response
        res.send({ result: 200, data: data })
    }).catch(err => {
        // If there is an error, throw it
        throw err
    })
}

// Define function to create a new note
const createNote = (data, res) => {
    // Create a new note with the specified data
    Models.Note.create(data).then(function (data) {
        // Send the new note as a response
        res.send({ result: 200, data: data })
        // Log the new note to the console
        console.log(data)
    }).catch(err => {
        // If there is an error, throw it
        throw err
    })
}

// Define function to update an existing note
const updateNote = (req, res) => {
    // Update the note with the specified ID with the new data
    Models.Note.update(req.body, {
        where: {
            id:
                req.params.id
        }
    }).then(function (data) {
        // Send the updated note as a response
        res.send({ result: 200, data: data })
    }).catch(err => {
        // If there is an error, throw it
        throw err
    })
}

// Define function to delete an existing note
const deleteNote = (req, res) => {
    // Delete the note with the specified ID
    Models.Note.destroy({
        where: { id: req.params.id }
    }).then(function (data) {
        // Send a success response
        res.send({ result: 200, data: data })
    }).catch(err => {
        // If there is an error, throw it
        throw err
    })
}

// Export all functions so they can be used in other files
module.exports = {
    getNote, getNoteID, createNote, updateNote, deleteNote, getUserNotes
}
