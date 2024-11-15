const { json } = require('sequelize');
const postDataClientController = require('../controllers/postDataClientController');


const postDataClientHandler = async (req, res) =>{
  const clientData = req.body
  try {
    const response = await postDataClientController(clientData);
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ error: error.message })
  }
}

module.exports = postDataClientHandler;