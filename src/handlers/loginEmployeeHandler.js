const { json } = require('sequelize');
const loginEmployeeController = require('../controllers/loginEmployeeController');


const loginEmployeeHandler = async (req, res)=>{

  try {
    await loginEmployeeController( req, res );
  } catch (error) {
    console.error('Error en el handler:', error.message);
  }
}


module.exports = loginEmployeeHandler