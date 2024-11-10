const { User } = require('../../db');

const registerUserController = async ( name, phone, mail, password1, password2 ) =>{
  const usersNew = await User.create({ name, phone, mail, password1, password2 })
};

module.exports = registerUserController;