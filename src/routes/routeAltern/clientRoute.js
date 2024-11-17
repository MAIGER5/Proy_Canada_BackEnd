const {Router} = require('express');
const newClientHandler = require('../../handlers/newClientHandler');
const getClientHandler = require('../../handlers/getClientHandler');
const postDataClientHandler = require('../../handlers/postDataClientHandler');
const validateClientMiddleware = require('../../middleware/validateClientMiddleware');


const clientRoute = Router();

clientRoute.post('/', validateClientMiddleware, newClientHandler);
clientRoute.post('/data', postDataClientHandler);
clientRoute.get('/', getClientHandler);

module.exports = clientRoute;