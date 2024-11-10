const { Router } = require('express');
const registerUserHandler = require('../../handlers/registerUserHandler');


const registerUserRoute = Router()

registerUserRoute.post('/', registerUserHandler)

module.exports = registerUserRoute