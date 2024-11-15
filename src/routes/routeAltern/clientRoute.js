const {Router} = require('express');
const validateClient = require('../../middleware/validateClientMiddleware');
const newClientHandler = require('../../handlers/newClientHandler');
const getClientHandler = require('../../handlers/getClientHandler');
const postDataClientHandler = require('../../handlers/postDataClientHandler');


const clientRoute = Router();

clientRoute.post('/', validateClient, newClientHandler);
clientRoute.post('/data', postDataClientHandler);
clientRoute.get('/', getClientHandler);

module.exports = clientRoute;