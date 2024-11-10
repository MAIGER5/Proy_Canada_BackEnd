const { Router } = require('express');
const newContactHandler = require('../../handlers/newContactHandler');
const getContactHandler = require('../../handlers/getContactHandler');

const contactRoute = Router();

contactRoute.post('/', newContactHandler);
contactRoute.get('/', getContactHandler);

module.exports = contactRoute;