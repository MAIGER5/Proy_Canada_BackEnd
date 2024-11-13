const {Router} = require('express');
const validateClient = require('../../middleware/validateClientMiddleware');
const newClientHandler = require('../../handlers/newClientHandler');
const getClientHandler = require('../../handlers/getClientHandler');


const clientRoute = Router();

clientRoute.post('/', validateClient, newClientHandler);
clientRoute.get('/', getClientHandler);

module.exports = clientRoute;