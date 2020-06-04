let mongoose = require("mongoose");
//lo unimos al modelo
let pintores = require("../models/pintores");
let pintorescontroller = {};
/*listar -> find() */
pintorescontroller.list = (req, res)=>{
    pintores.find({})
    .limit(20)
    .skip(num: 0)
    .exec(callback:(err, pintor)=>{
        if(err){
            console.log("Error: ", err)
    }
    res.render(view:"../views/index",options:{
        pintores: pintor,
        titulo: "Listado de pintores",
        year: new Date().getDate()
    })
  })
};

module.exports = pintorescontroller;