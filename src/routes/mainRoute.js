const { Router } = require('express');


const mainRoute = Router()

mainRoute.get("/", (req, res)=>{
    console,console.log(req.header);
    res.send("hola mundo")
  })
// mainRouter.use('/product', productRoute)
// mainRouter.use('/client', productClient)

module.exports = mainRoute