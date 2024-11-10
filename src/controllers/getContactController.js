const { Contact } = require('../../db');

const getContactController = async ()=>{
  const response = await Contact.findAll();
  return response;
}

module.exports = getContactController;