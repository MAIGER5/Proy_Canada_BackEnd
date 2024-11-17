const { Router } = require('express');
const loginUserRoute = require('./routeAltern/loginUserRoute');
const contactRoute = require('./routeAltern/contactRoute');
const clientRoute = require('./routeAltern/clientRoute');
const postEmployeeRoute = require('./routeAltern/postEmployeeRoute');


const mainRoute = Router();


mainRoute.use('/login', loginUserRoute)
mainRoute.use('/employee', postEmployeeRoute)
mainRoute.use('/contact', contactRoute)
mainRoute.use('/client', clientRoute)

module.exports = mainRoute