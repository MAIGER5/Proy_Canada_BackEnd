const { json } = require('sequelize');
const loginClientController = require('../controllers/loginClientController');


const loginClientHandler = async (req, res)=>{

  try {
    await loginClientController( req, res );
  } catch (error) {
    console.error('Error en el handler:', error.message);
  }
}


module.exports = loginClientHandler