const { Router } = require('express');


const mainRoute = Router()

mainRoute.get("/", (req, res)=>{
    console.log(req.header);
    res.send("esto es una prueba para que Kiki pueda ver")
  })
// mainRouter.use('/product', productRoute)
// mainRouter.use('/client', productClient)

module.exports = mainRoute