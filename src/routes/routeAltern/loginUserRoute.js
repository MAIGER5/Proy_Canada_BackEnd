const { Router } = require('express');
const loginClientHandler = require('../../handlers/loginClientHandler');
const loginEmployeeHandler = require('../../handlers/loginEmployeeHandler');
const validateLoginClientMiddleware = require('../../middleware/validateLoginClientMiddleware');


const loginUserRoute = Router();

loginUserRoute.post('/employee', validateLoginClientMiddleware, loginEmployeeHandler);
loginUserRoute.post('/client', validateLoginClientMiddleware, loginClientHandler)



module.exports = loginUserRoute