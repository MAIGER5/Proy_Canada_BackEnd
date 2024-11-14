const { Router } = require('express');
const newEmployeeHandler = require('../../handlers/newEmployeeHandler');
const validateEmployee = require('../../middleware/validateEmployeeMiddleware');


const postEmployeeRoute = Router()

postEmployeeRoute.post('/', validateEmployee, newEmployeeHandler)
postEmployeeRoute.get('/', )

module.exports = postEmployeeRoute