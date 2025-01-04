require('dotenv').config();
const { json } = require('sequelize');
const jwt = require('jsonwebtoken');
const { Employee } = require('../../db');

const loginEmployeeController = async (req, res)=>{

  const { mail, password } = req.body;

  try {
    //primero busco el cliente en la tabla cient de la base de datos
    const employee = await Employee.findOne({where:{mail}});
    //si no existe nada la busqueda retorna un error
    if (!employee) {
      return res.status(404).json({ error: `Empleado con correo ${mail} no encontrado` });
    }
    //si se encuentra una coincicendia del cliente entonces vamos verificar el password a travez del motodo validatePassword
    const isMath = await employee.validatePassword(password);
    //si no existe nada la busqueda retorna un error
    if (!isMath) {
      return res.status(401).json({ error: 'Contraseña inválida' });
    }
    if (!process.env.JWT_SECRET) {
      console.error('JWT_SECRET no está definido');
      return res.status(500).json({ error: 'Error interno del servidor' });
    }
    //si el password coincide entonces vamos a generar el token JWT
    const token = jwt.sign(
      {
        idUser:employee.idUser, 
        mail: employee.mail,
        name: employee.name,
      },
      process.env.JWT_SECRET,
      {
        expiresIn:'1h'
      }
    )
    //respondo con el token
    return res.status(200).json({
      token,
      name: employee.name,
      email: employee.mail,
    });
  } catch (error) {
    console.error('Error en loginEmployeetController:', error.message);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
};

module.exports = loginEmployeeController