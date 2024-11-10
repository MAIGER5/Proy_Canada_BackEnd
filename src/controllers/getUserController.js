const { User } = require('../../db')

const getUserController = async ()=>{

    const response = await User.findAll();
    return response;

}

module.exports = getUserController;