const { json } = require('sequelize');
const getContactController = require("../controllers/getContactController");


const getContactHandler = async (req, res) =>{

  try {
    const response = await getContactController();
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({error: error.message})
  }

}

module.exports = getContactHandler;