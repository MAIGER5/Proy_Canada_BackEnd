const { json } = require('sequelize');
const bcrypt = require('bcrypt')
const newEmployeeController = require('../controllers/newEmployeeController');


const newEmployeeHandler = async (req, res)=>{

  const { name, cedula, mail, phone, password } = req.body;

  try {
    const response = await newEmployeeController( name, cedula, mail, phone, password);
    res.status(200).json(response)
  } catch (error) {
    res.status(404).json({ error: error.message })
  }
}


module.exports = newEmployeeHandler