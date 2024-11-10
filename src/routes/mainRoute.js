const { Router } = require('express');
const loginUserRoute = require('./routeAltern/loginUserRoute');
const registerUserRoute = require('./routeAltern/registerUserRoute');
const contactRoute = require('./routeAltern/contactRoute');
const clientRoute = require('./routeAltern/clientRoute');


const mainRoute = Router()

mainRoute.use('/login', loginUserRoute)
mainRoute.use('/register', registerUserRoute)
mainRoute.use('/contact', contactRoute)
mainRoute.use('/client', clientRoute)

module.exports = mainRoute