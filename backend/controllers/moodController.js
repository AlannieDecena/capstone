// Importing necessary models and dependencies
"use strict";
const Models = require("../models");
const {Op} = require('sequelize')

// Retrieves all Mood records and sends them as the response
const getMood = (req, res) => {
    Models.Mood.findAll({}).then(function (data) {
        res.send({ result: 200, data: data })
    }).catch(err => {
        throw err
    })
}

// Retrieves a specific Mood record by ID and sends it as the response
const getMoodID = (req, res) => {
    Models.Mood.findAll({where: { id: req.params.id }}).then(function (data) {
        res.send({ result: 200, data: data })
    }).catch(err => {
        throw err
    })
}

// Creates a new Mood record and sends it as the response
const createMood = (data, res) => {

    Models.Mood.create(data).then(function (data) {
        res.send({ result: 200, data: data })
        console.log(data)
    }).catch(err => {
        throw err
    })
}

// Updates a Mood record and sends it as the response
const updateMood = (req, res) => {
    const newtoday = new Date()
    Models.Mood.findOrCreate(
        {where: {[Op.and] : [ { userId: req.body.userId }, 
        {createdAt:  newtoday}]},
        defaults: req.body

        }).then(function (data) {
        res.send({ result: 200, data: data })
    }).catch(err => {
        throw err
    })
}

// Deletes a Mood record and sends it as the response
const deleteMood = (req, res) => {
    Models.Mood.destroy({
        where: { id: req.params.id }
    }).then(function (data) {
        res.send({ result: 200, data: data })
    }).catch(err => {
        throw err
    })
}

// Retrieves all Mood records for a user for the past 7 days, organizes them by day, and sends them as the response
const weeklymood = (req, res) => {
    const today = new Date() //utc time zone gmt +0
    const sunday = new Date (today.getFullYear(), today.getMonth(), today.getDate()) // gmt +10 localtime zone
    sunday.setDate(sunday.getDate() - sunday.getDay())
   console.log(sunday)

    Models.Mood.findAll({where: {[Op.and] : [ { userId: req.params.id }, {createdAt: {[Op.gte]:  sunday}}]}}).then(function (data) {

        const dailyMood = new Map();
        const todayDay = today.getDay()
        for (let i = 0; i <= todayDay; i++) {
            dailyMood.set(i, 0)
        }
        data.forEach(mood => {
            const moodDay = new Date(mood.createdAt)
            dailyMood.set(moodDay.getDay(), mood.mood)
        })
        console.log(dailyMood.values())
        res.send({ result: 200, data: [...dailyMood.values()]})
    }).catch(err => {
        throw err
    })
}

// Exports all functions for use in other files
module.exports = {
    getMood, getMoodID, createMood, updateMood, deleteMood, weeklymood
}
