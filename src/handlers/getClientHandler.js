const { json } = require('sequelize');
const getClientController = require('../controllers/getClientController');


const getClientHandler = async (req, res)=>{

  try {
    const response = await getClientController();
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({error: error.message});
  }
}

module.exports = getClientHandler;