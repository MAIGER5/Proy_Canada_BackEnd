const { json } = require('sequelize');
const bcrypt = require('bcrypt')
const newClientController = require('../controllers/newClientController');


const newClientHandler = async (req, res)=>{

  const {company, contacto, nit, mail, phone, ciudad, password} = req.body;

  try { 
    const hashedPassword = await bcrypt.hash(password, 10)
    const response = await newClientController(company, contacto, nit, mail, phone, ciudad, hashedPassword);
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({error: error.message})
  }
}

module.exports = newClientHandler;