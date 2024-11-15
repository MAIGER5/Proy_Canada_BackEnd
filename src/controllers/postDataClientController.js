const bcrypt = require('bcrypt');
const { Client } = require('../../db');

const postDataClientController = async (clientData) => {
  if (clientData && Array.isArray(clientData)) {
    for (const ele of clientData) {
      const password = await bcrypt.hash(ele.password, 10);
      await Client.create({
        company: ele.company,
        contacto: ele.contacto,
        nit: ele.nit,
        mail: ele.mail,
        phone: ele.phone,
        ciudad: ele.ciudad,
        password,
      });
    }
  }
};

module.exports = postDataClientController;

//TAMBIEN PUEDO USAR MAP EMPLEANDO EL PROMISE.ALL Problema con map en operaciones asíncronas
//Asincronía y ejecución en paralelo: map no espera las promesas de forma secuencial; es decir, inicia todas las ejecuciones asíncronas a la vez, lo cual puede ser un problema si necesitas manejar los elementos en serie (de uno en uno, esperando a que cada uno termine antes de pasar al siguiente). Esto se vuelve especialmente relevante si tienes que respetar el orden o evitar problemas de concurrencia en la base de datos.
//Uso de await en map: Aunque puedes usar await dentro del map, los resultados de cada promesa no se resuelven hasta que todas terminan, lo que es confuso si necesitas un flujo controlado o un manejo secuencial.
// /Alternativa con Promise.all Si deseas ejecutar todas las operaciones en paralelo y no te importa el orden, puedes usar map combinado con Promise.all:

// const bcrypt = require('bcrypt');
// const { Client } = require('../../db');

// const postDataClientController = async (clientData) => {
//   if (clientData && Array.isArray(clientData)) {
//     await Promise.all(clientData.map(async (ele) => {
//       const password = await bcrypt.hash(ele.password, 10);
//       return Client.create({
//         company: ele.company,
//         contacto: ele.contacto,
//         nit: ele.nit,
//         mail: ele.mail,
//         phone: ele.phone,
//         ciudad: ele.ciudad,
//         password,
//       });
//     }));
//   }
// };

// module.exports = postDataClientController;
