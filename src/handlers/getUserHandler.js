const { json } = require('sequelize');
const getUserController = require("../controllers/getUserController")


const getUserHandler = async (req, res) => {

  try {
    const response = await getUserController();
    res.status(200).json(response)
  } catch (error) {
    res.status(404).json({error: error.message})
  }

}

module.exports = getUserHandler