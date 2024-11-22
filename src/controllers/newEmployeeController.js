const { Employee } = require('../../db');

const newEmployeeController = async ( name, cedula, mail, phone, password) =>{
  try {
    const newEmployee = await Employee.create({ 
      name, 
      cedula, 
      mail, 
      phone, 
      password
    })
    return newEmployee;
  } catch (error) {
    throw new Error("Error creating employee"); // Lanza un error con un mensaje claro
  }
};

module.exports = newEmployeeController;