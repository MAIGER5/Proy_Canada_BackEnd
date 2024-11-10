const { json } = require('sequelize');
const newContactController = require('../controllers/newContactController');



const newContactHandler = async (req, res)=>{

  const {name, company, phone, mail, country, mensaje} = req.body;

  try {
    const response = await newContactController(name, company, phone, mail, country, mensaje)
    res.status(200).json(response)
  } catch (error) {
    res.status(404).json({error: error.message})
  }
}

module.exports = newContactHandler;