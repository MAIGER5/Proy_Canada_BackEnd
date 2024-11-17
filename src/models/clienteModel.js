const { DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');

module.exports = (sequelize) => {
  const Client = sequelize.define('Client', {
    idClient: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    company: {
      type: DataTypes.STRING,
    },
    contacto: {
      type: DataTypes.STRING,
    },
    nit: {
      type: DataTypes.STRING,
    },
    mail: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
    },
    ciudad: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,  // O 'false', dependiendo de si es obligatorio
    },
  }, {
    hooks: {
      beforeCreate: async (client) => {
        if (client.password) {
          const salt = await bcrypt.genSalt(10); // Generamos el salt
          client.password = await bcrypt.hash(client.password, salt); // Encriptamos la contraseña antes de crear el cliente
        }
      },
    },
  });

  // Método de instancia para verificar la contraseña
  Client.prototype.validatePassword = async function (password) {
    return await bcrypt.compare(password, this.password); // Compara la contraseña con la almacenada en la base de datos
  };

  return Client;
};