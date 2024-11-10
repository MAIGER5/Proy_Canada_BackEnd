const  { DataTypes, Sequelize} = require('sequelize');

module.exports = (Sequelize)=>{
  Sequelize.define('User',{
    idUser: {
      type:DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    mail: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    password1: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    password2: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    state: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: true,
    },
    
  })
}