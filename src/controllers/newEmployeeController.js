const { Employee } = require('../../db');

const newEmployeeController = async ( name, cedula, mail, phone, hashedPassword) =>{
  try {
    const password = hashedPassword
    const usersNew = await Employee.create({ 
      name, 
      cedula, 
      mail, 
      phone, 
      password
    })
    return usersNew;
  } catch (error) {
    throw new Error("Error creating employee"); // Lanza un error con un mensaje claro
  }
};

module.exports = newEmployeeController;