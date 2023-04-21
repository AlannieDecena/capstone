"use strict";
const Models = require("../models");
const bcrypt = require('bcryptjs')


const getUser = (req, res) => {
    Models.User.findAll({}).then(function (data) {
        res.send({ result: 200, data: data })
    }).catch(err => {
        throw err
    })
}

const getUserID = (req, res) => {
    Models.User.findAll({where: { id: req.params.id }}).then(function (data) {
        res.send({ result: 200, data: data })
    }).catch(err => {
        throw err
    })
}

const createUser = async(data, res) => {
    data.password = await bcrypt.hash(data.password, 10);
    Models.User.create(data).then(function (data) {
        res.send({ result: 200, data: data })
    }).catch(err => {
        throw err
    })
}

const updateUser = (req, res) => {
   
    Models.User.update(req.body, {
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
const deleteUser = (req, res) => {
    Models.User.destroy({
        where: { id: req.params.id }
    }).then(function (data) {
        res.send({ result: 200, data: data })
    }).catch(err => {
        throw err
    })
}

const loginUser = (req, res) => {
    Models.User.findOne({where: { email: req.body.email }}).then(async function (user) {
        if (user && (await bcrypt.compare(req.body.password, user.password))) {
             res.send({ result: 200, data: user })
        } else res.send({ result: 400, data: "Invalid User" });
    }).catch(err => {
        throw err
    })
}


module.exports = {
    getUser, getUserID, createUser, updateUser, deleteUser, loginUser, 
}