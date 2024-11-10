const { json } = require('sequelize');
const registerUserController = require('../controllers/registerUserController');


const registerUserHandler = async (req, res)=>{

  const { name, phone, mail, password1, password2 } = req.body;

  try {
    const response = await registerUserController( name, phone, mail, password1, password2 );
    res.status(200).json(response)
  } catch (error) {
    res.status(404).json({ error: error.message })
  }
}


module.exports = registerUserHandler