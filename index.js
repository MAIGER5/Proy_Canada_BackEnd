const server = require('./app.js');
const { conn } = require('./db.js');


const PORT = 3000;



conn.sync({ force: true }).then(()=>{
    server.listen(PORT, ()=>{
        console.log(`Estoy escuchando en el puerto # ${PORT}`);
        console.log(`Me encuentro en el servidor`)
    })
})