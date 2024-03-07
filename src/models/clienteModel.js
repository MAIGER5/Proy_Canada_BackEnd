const { DataTypes } = require('sequelize');

module.exports = (sequelize)=> {
    sequelize.define("Client", {
        idClient:{
            type:DataTypes.UUID,
            primaryKey:true,
            toDefaultValue:DataTypes.UUIDV4,
            allowNull:true
        },
        names: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        company: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    })
}