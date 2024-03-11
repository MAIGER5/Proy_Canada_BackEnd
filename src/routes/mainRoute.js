const { Router } = require('express');


const mainRoute = Router()

mainRoute.get("/", (req, res)=>{
    console.log(req.header);
    res.send("  QUISIERA LEVANTARTE A BESOIS")
  })
// mainRouter.use('/product', productRoute)
// mainRouter.use('/client', productClient)

module.exports = mainRoute