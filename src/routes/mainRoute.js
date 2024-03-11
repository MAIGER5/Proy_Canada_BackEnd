const { Router } = require('express');


const mainRoute = Router()

mainRoute.get("/", (req, res)=>{
    console.log(req.header);
    res.send(" VOY A SER EL MEJOR")
})
mainRoute.get("/about", (req, res)=>{
    console.log(req.header);
    res.send("  quiero comerte KIKI")
})
// mainRouter.use('/product', productRoute)
// mainRouter.use('/client', productClient)

module.exports = mainRoute