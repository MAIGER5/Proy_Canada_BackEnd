require('dotenv').config();
const { json } = require('sequelize');
const jwt = require('jsonwebtoken');
const { Client } = require('../../db');

const loginClientController = async (req, res)=>{

  const { mail, password } = req.body;

  try {
    //primero busco el cliente en la tabla cient de la base de datos
    const client = await Client.findOne({where:{mail}});
    //si no existe nada la busqueda retorna un error
    if (!client) {
      return res.status(404).json({ error: `Cliente con correo ${mail} no encontrado` });
    }
    //si se encuentra una coincicendia del cliente entonces vamos verificar el password a travez del motodo validatePassword
    const isMath = await client.validatePassword(password);
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
        idClient:client.idClient, 
        mail: client.mail
      },
      process.env.JWT_SECRET,
      {
        expiresIn:'1h'
      }
    )
    //respondo con el token
    return res.status(200).json({
      token,
      company: client.company,
      email: client.mail,
    });
  } catch (error) {
    console.error('Error en loginClientController:', error.message);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
};

module.exports = loginClientController