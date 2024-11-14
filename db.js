require('dotenv').config();
const { Sequelize } = require('sequelize');

const {
    DB_USER, 
    DB_PASSWORD, 
    DB_HOST, 
    DB_NAME
} = process.env;

// Cambia la URI de conexión para MySQL o MariaDB
const sequelize = new Sequelize(`mysql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {
    dialect: 'mysql', // o 'mariadb' si usas MariaDB
    logging: false, 
    native: false,
});

// Importa los modelos
const functionClient = require('./src/models/clienteModel');
const functionProduct = require('./src/models/productModel');
const functionUsers = require('./src/models/emplyeeModel');
const functionContact = require('./src/models/contactModel');

functionClient(sequelize);
functionProduct(sequelize);
functionUsers(sequelize);
functionContact(sequelize);

// Prueba la conexión a la base de datos
async function testMySQLConnection() {
  try {
    await sequelize.authenticate();
    console.log('La conexión con MySQL/MariaDB se ha establecido exitosamente.');
  } catch (error) {
    console.error('No se pudo conectar a la base de datos:', error);
  }
}

testMySQLConnection();

module.exports = {
    ...sequelize.models, // Para importar los modelos así: const { Product, User } = require('./db.js');
    conn: sequelize,     // Para importar la conexión { conn } = require('./db.js');
};



// require('dotenv').config();
// const { Sequelize } = require('sequelize');

// const functionClient = require('./src/models/clienteModel');
// const functionProduct = require('./src/models/productModel');
// const functionUsers = require('./src/models/usersModel')
// const functionContact = require('./src/models/contactModel')


// const {
//     DB_USER, 
//     DB_PASSWORD, 
//     DB_HOST, 
//     DB_NAME
// } = process.env;

// const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {
//     logging: false, 
//     native: false,
// });

// functionClient(sequelize);
// functionProduct(sequelize);
// functionUsers(sequelize);
// functionContact(sequelize);



// async function testPostgreSQLConnection() {
//   try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');
//     // Resto de la lógica de tu aplicación
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
// }
   
//   testPostgreSQLConnection();
  
  
//   module.exports = {
//       ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
//       conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
//   };