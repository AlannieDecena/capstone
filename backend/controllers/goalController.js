"use strict";
// Importing the models module
const Models = require("../models");

// Function to get all goals
const getGoal = (req, res) => {
    // Finding all goals in the database
    Models.Goal.findAll({}).then(function (data) {
        // Sending the goals as a response
        res.send({ result: 200, data: data })
    }).catch(err => {
        // Throwing an error if there's an issue finding the goals
        throw err
    })
}

// Function to get a specific goal by ID
const getGoalID = (req, res) => {
    // Finding a goal in the database based on the ID passed in the request parameters
    Models.Goal.findAll({where: { id: req.params.id }}).then(function (data) {
        // Sending the goal as a response
        res.send({ result: 200, data: data })
    }).catch(err => {
        // Throwing an error if there's an issue finding the goal
        throw err
    })
}

// Function to create a new goal
const createGoal = (data, res) => {
    // Creating a new goal in the database with the data passed in
    Models.Goal.create(data).then(function (data) {
        // Sending the newly created goal as a response
        res.send({ result: 200, data: data })
    }).catch(err => {
        // Throwing an error if there's an issue creating the goal
        throw err
    })
}

// Function to get all goals belonging to a specific user
const userGoalID = (req, res) => {
    // Finding all goals in the database that belong to the user passed in the request parameters
    Models.Goal.findAll({where: { userId: req.params.id }}).then(function (data) {
        // Sending the goals as a response
        res.send({ result: 200, data: data })
    }).catch(err => {
        // Throwing an error if there's an issue finding the goals
        throw err
    })
}

// Function to update a specific goal
const updateGoal = (req, res) => {

    // Updating the goal in the database with the data passed in the request body, where the ID matches the ID passed in the request parameters
    Models.Goal.update(req.body, {
        where: {
            id:
                req.params.id
        }
    }).then(function (data) {
        // Sending the updated goal as a response
        res.send({ result: 200, data: data })
    }).catch(err => {
        // Throwing an error if there's an issue updating the goal
        throw err
    })
}

// Function to delete a specific goal
const deleteGoal = (req, res) => {
    // Deleting the goal in the database where the ID matches the ID passed in the request parameters
    Models.Goal.destroy({
        where: { id: req.params.id }
    }).then(function (data) {
        // Sending a success message as a response
        res.send({ result: 200, data: data })
    }).catch(err => {
        // Throwing an error if there's an issue deleting the goal
        throw err
    })
}

module.exports = {
    getGoal, getGoalID, createGoal, updateGoal, deleteGoal, userGoalID
}
