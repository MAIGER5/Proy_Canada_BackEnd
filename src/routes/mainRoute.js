const { Router } = require('express');


const mainRoute = Router()

mainRoute.get("/", (req, res)=>{
    console.log(req.header);
    res.send("ELABORANDO UNA PRUEBA DE SERVIDOR")
  })
// mainRouter.use('/product', productRoute)
// mainRouter.use('/client', productClient)

module.exports = mainRoute