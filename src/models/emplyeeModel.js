const  { DataTypes} = require('sequelize');
const bcrypt = require('bcrypt');


module.exports = (sequelize)=>{
  const Employee = sequelize.define('Employee',{
    idUser: {
      type:DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
    },
    cedula: {
      type: DataTypes.STRING,
    },
    mail: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    state: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: true,
    },
  }, {
    hooks: {
      beforeCreate: async (employee) => {
        if (employee.password) {
          const salt = await bcrypt.genSalt(10); // Generamos el salt
          employee.password = await bcrypt.hash(employee.password, salt); // Encriptamos la contraseña antes de crear el cliente
        }
      },
    },
  });

  // Método de instancia para verificar la contraseña
  Employee.prototype.validatePassword = async function (password) {
    return await bcrypt.compare(password, this.password); // Compara la contraseña con la almacenada en la base de datos
  };

  return Employee;
}