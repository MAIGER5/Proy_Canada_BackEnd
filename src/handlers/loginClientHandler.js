const { json } = require('sequelize');
const loginClientController = require('../controllers/loginClientController');


const loginClientHandler = async (req, res)=>{

  const { mail, password } = req.body;

  try {
    const response = await loginClientController( mail, password );
    res.status(200).json(response)
  } catch (error) {
    res.status(404).json({ error: error.message })
  }
}


module.exports = loginClientHandler