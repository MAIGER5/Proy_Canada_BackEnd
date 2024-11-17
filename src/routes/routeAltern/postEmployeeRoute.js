const { Router } = require('express');
const newEmployeeHandler = require('../../handlers/newEmployeeHandler');
const validateEmployeeMiddleware = require('../../middleware/validateEmployeeMiddleware');


const postEmployeeRoute = Router()

postEmployeeRoute.post('/', validateEmployeeMiddleware, newEmployeeHandler)
postEmployeeRoute.get('/', )

module.exports = postEmployeeRoute