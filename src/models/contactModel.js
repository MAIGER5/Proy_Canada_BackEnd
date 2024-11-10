const  { DataTypes, Sequelize} = require('sequelize');

module.exports = (Sequelize)=>{
  Sequelize.define('Contact',{
    idContact: {
      type:DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    company: {
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
    country: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    mensaje: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    
  })
}