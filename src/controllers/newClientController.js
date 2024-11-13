const { Client } = require('../../db');


const newClientController = async (company, contacto, nit, mail, phone, ciudad, hashedPassword) => {
  try {

    const password = hashedPassword

    const clientNew = await Client.create({
      company, 
      contacto, 
      nit, mail, 
      phone, 
      ciudad, 
      password
    });
    return clientNew; // Retorna el nuevo cliente si se crea con éxito
  } catch (error) {
    console.error("Error creating client:", error);
    throw new Error("Error creating client"); // Lanza un error con un mensaje claro
  }
};

module.exports = newClientController;
