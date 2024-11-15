const { json } = require('sequelize');
const loginEmployeeController = require('../controllers/loginEmployeeController');


const loginEmployeeHandler = async (req, res)=>{

  const { mail, password } = req.body;

  try {
    const response = await loginEmployeeController( mail, password );
    res.status(200).json(response)
  } catch (error) {
    res.status(404).json({ error: error.message })
  }
}


module.exports = loginEmployeeHandler