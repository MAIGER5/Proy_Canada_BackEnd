const { Contact } = require('../../db');

const newContactController = async (name, company, phone, mail, country, mensaje)=>{

  try {
    const contactNew = await Contact.create({name, company, phone, mail, country, mensaje})
    return contactNew;
  } catch (error) {
    console.error("Error creating contact:", error);
    throw new Error("Error creating contact"); // Lanza un error con un mensaje claro
  }


};

module.exports = newContactController;