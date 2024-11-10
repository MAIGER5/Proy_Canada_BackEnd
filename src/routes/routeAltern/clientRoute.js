const {Router} = require('express');
const newClientHandler = require('../../handlers/newClientHandler');
const getClientHandler = require('../../handlers/getClientHandler');


const clientRoute = Router();

clientRoute.post('/', newClientHandler);
clientRoute.get('/', getClientHandler);

module.exports = clientRoute;