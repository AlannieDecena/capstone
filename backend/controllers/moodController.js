"use strict";
const Models = require("../models");
const {Op} = require('sequelize')


const getMood = (req, res) => {
    Models.Mood.findAll({}).then(function (data) {
        res.send({ result: 200, data: data })
    }).catch(err => {
        throw err
    })
}

const getMoodID = (req, res) => {
    Models.Mood.findAll({where: { id: req.params.id }}).then(function (data) {
        res.send({ result: 200, data: data })
    }).catch(err => {
        throw err
    })
}

const createMood = (data, res) => {
    
    Models.Mood.create(data).then(function (data) {
        res.send({ result: 200, data: data })
        console.log(data)
    }).catch(err => {
        throw err
    })
}

const updateMood = (req, res) => {
    // console.log(req.body.mood)
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
const deleteMood = (req, res) => {
    Models.Mood.destroy({
        where: { id: req.params.id }
    }).then(function (data) {
        res.send({ result: 200, data: data })
    }).catch(err => {
        throw err
    })
}

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
module.exports = {
    getMood, getMoodID, createMood, updateMood, deleteMood, weeklymood
}