const { json } = require('sequelize');
const loginUserController = require('../controllers/loginUserController');


const loginUserHandler = async (req, res)=>{

  const { mail, password } = req.body;

  try {
    const response = await loginUserController( mail, password );
    res.status(200).json(response)
  } catch (error) {
    res.status(404).json({ error: error.message })
  }
}


module.exports = loginUserHandler