require('dotenv').config();
const { json } = require('sequelize');
const jwt = require('jsonwebtoken');
const { Client } = require('../../db');

const loginClientController = async (mail, password)=>{
  try {
    //primero busco el cliente en la tabla cient de la base de datos
    const client = await Client.findOne({where:{mail}});
    //si no existe nada la busqueda retorna un error
    if (!client) {
      return {error:`Cliente con mail ${mail} no encontrado`}
    }
    //si se encuentra una coincicendia del cliente entonces vamos verificar el password a travez del motodo validatePassword
    const isMath = await client.validatePassword(password);
    //si no existe nada la busqueda retorna un error
    if (!isMath) {
      return {error:'Contraseña invalida'}
    }
    if (!process.env.JWT_SECRET) {
      console.error('JWT_SECRET is not defined!');
      process.exit(1); // Detener la aplicación si no está definido
    }
    //si el password coincide entonces vamos a generar el token JWT
    const token = jwt.sign(
      {idClient:client.idClient, mail: client.mail},
      process.env.JWT_SECRET,
      {expiresIn:'1h'}
    )
    //respondo con el token
    return {token};
  } catch (error) {
    return { error: error.message };
  }
};

module.exports = loginClientController