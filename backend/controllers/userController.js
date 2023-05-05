// Import required modules
const Models = require("../models");
const bcrypt = require('bcryptjs')

// Function to get all users
const getUser = (req, res) => {
    // Find all users in the User model
    Models.User.findAll({}).then(function (data) {
        // Send the data as response
        res.send({ result: 200, data: data })
    }).catch(err => {
        // If there is an error, throw it
        throw err
    })
}

// Function to get a user by ID
const getUserID = (req, res) => {
    // Find the user with the given ID in the User model
    Models.User.findAll({where: { id: req.params.id }}).then(function (data) {
        // Send the data as response
        res.send({ result: 200, data: data })
    }).catch(err => {
        // If there is an error, throw it
        throw err
    })
}

// Function to create a new user
const createUser = async(data, res) => {
    // Hash the user's password
    data.password = await bcrypt.hash(data.password, 10);
    // Create a new user in the User model
    Models.User.create(data).then(function (data) {
        // Send the data as response
        res.send({ result: 200, data: data })
    }).catch(err => {
        // If there is an error, throw it
        throw err
    })
}

// Function to update a user
const updateUser = (req, res) => {
    // Update the user with the given ID in the User model
    Models.User.update(req.body, {
        where: {
            id: req.params.id
        }
    }).then(function (data) {
        // Send the data as response
        res.send({ result: 200, data: data })
    }).catch(err => {
        // If there is an error, throw it
        throw err
    })
}

// Function to delete a user
const deleteUser = (req, res) => {
    // Delete the user with the given ID from the User model
    Models.User.destroy({
        where: { id: req.params.id }
    }).then(function (data) {
        // Send the data as response
        res.send({ result: 200, data: data })
    }).catch(err => {
        // If there is an error, throw it
        throw err
    })
}

// Function to login a user
const loginUser = (req, res) => {
    // Find the user with the given email in the User model
    Models.User.findOne({where: { email: req.body.email }}).then(async function (user) {
        // If the user exists and the password is correct, send the user data as response
        if (user && (await bcrypt.compare(req.body.password, user.password))) {
             res.send({ result: 200, data: user })
        } else {
            // If the user does not exist or the password is incorrect, send an error response
            res.send({ result: 400, data: "Invalid User" });
        }
    }).catch(err => {
        // If there is an error, throw it
        throw err
    })
}

// Export all functions as module
module.exports = {
    getUser, getUserID, createUser, updateUser, deleteUser, loginUser, 
}
