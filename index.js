const server = require('./app.js');

const PORT = 3000;

server.listen(PORT, ()=>{
    console.log(`Estoy escuchando en el puerto # ${PORT}`);
    console.log(`Me encuentro en el servidor`)
})