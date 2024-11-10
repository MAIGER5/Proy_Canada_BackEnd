const {Client} = require('../../db');


const getClientController = async ()=>{

  try {
    const response = await Client.findAll();
    return response;  
  } catch (error) {
    console.error("Error getting client:", error);
    throw new Error("Error getting client"); // Lanza un error con un mensaje claro
  }
}

module.exports = getClientController;