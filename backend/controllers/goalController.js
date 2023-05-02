"use strict";
const Models = require("../models");


const getGoal = (req, res) => {
    Models.Goal.findAll({}).then(function (data) {
        res.send({ result: 200, data: data })
    }).catch(err => {
        throw err
    })
}

const getGoalID = (req, res) => {
    Models.Goal.findAll({where: { id: req.params.id }}).then(function (data) {
        res.send({ result: 200, data: data })
    }).catch(err => {
        throw err
    })
}

const createGoal = (data, res) => {
 
    Models.Goal.create(data).then(function (data) {
        res.send({ result: 200, data: data })
    }).catch(err => {
        throw err
    })
}

const userGoalID = (req, res) => {
    Models.Goal.findAll({where: { userId: req.params.id }}).then(function (data) {
        res.send({ result: 200, data: data })
    }).catch(err => {
        throw err
    })
}

const updateGoal = (req, res) => {
   
    Models.Goal.update(req.body, {
        where: {
            id:
                req.params.id
        }
    }).then(function (data) {
        res.send({ result: 200, data: data })
    }).catch(err => {
        throw err
    })
}
const deleteGoal = (req, res) => {
    Models.Goal.destroy({
        where: { id: req.params.id }
    }).then(function (data) {
        res.send({ result: 200, data: data })
    }).catch(err => {
        throw err
    })
}

module.exports = {
    getGoal, getGoalID, createGoal, updateGoal, deleteGoal, userGoalID
}