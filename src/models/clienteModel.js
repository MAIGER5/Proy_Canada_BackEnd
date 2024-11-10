const { DataTypes, Sequelize } = require('sequelize');

module.exports = (Sequelize)=> {
    Sequelize.define("Client", {
        idClient:{
            type:DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            allowNull: true,
          },
        company: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        contacto: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        nit: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        mail: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        ciudad: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    })
}