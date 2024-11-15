const { Router } = require('express');
const loginClientHandler = require('../../handlers/loginClientHandler');
const loginEmployeeHandler = require('../../handlers/loginEmployeeHandler');


const loginUserRoute = Router();

loginUserRoute.post('/employee', loginEmployeeHandler);
loginUserRoute.post('/client', loginClientHandler)



module.exports = loginUserRoute