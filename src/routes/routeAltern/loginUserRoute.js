const { Router } = require('express');
const loginUserHandler = require('../../handlers/loginUserHandler');
const getUserHandler = require('../../handlers/getUserHandler');


const loginUserRoute = Router();

loginUserRoute.post('/', loginUserHandler)
loginUserRoute.get('/', getUserHandler)


module.exports = loginUserRoute