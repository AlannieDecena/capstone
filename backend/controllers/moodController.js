"use strict";
const Models = require("../models");


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
    
    Models.Mood.update(req.body, {
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
const deleteMood = (req, res) => {
    Models.Mood.destroy({
        where: { id: req.params.id }
    }).then(function (data) {
        res.send({ result: 200, data: data })
    }).catch(err => {
        throw err
    })
}

module.exports = {
    getMood, getMoodID, createMood, updateMood, deleteMood
}