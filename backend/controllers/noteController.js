"use strict";
const Models = require("../models");


const getNote = (req, res) => {
    Models.Note.findAll({}).then(function (data) {
        res.send({ result: 200, data: data })
    }).catch(err => {
        throw err
    })
}

const getNoteID = (req, res) => {
    Models.Note.findAll({where: { id: req.params.id }}).then(function (data) {
        res.send({ result: 200, data: data })
    }).catch(err => {
        throw err
    })
}

const createNote = (data, res) => {
    
    Models.Note.create(data).then(function (data) {
        res.send({ result: 200, data: data })
        console.log(data)
    }).catch(err => {
        throw err
    })
}

const updateNote = (req, res) => {
    
    Models.Note.update(req.body, {
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
const deleteNote = (req, res) => {
    Models.Note.destroy({
        where: { id: req.params.id }
    }).then(function (data) {
        res.send({ result: 200, data: data })
    }).catch(err => {
        throw err
    })
}

module.exports = {
    getNote, getNoteID, createNote, updateNote, deleteNote
}