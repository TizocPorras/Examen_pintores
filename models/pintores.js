const mongoose = require("mongoose");
// crear un Schema (base de datos)

let Schema = mongoose.Schema;
//creamos la coleccion
let pintoresSchema = new Schema({
    nombre:{
        type: String,
        required: [true, "Requerimos el nombre"]
    },
    corriente:{
        type: String,
        required:[true, "Requerimos la corriente"]
    },
    nacionalidad:{
        type: String
    },
    pintura:{
        type: String
    },
});

module.exports = mongoose.model(name: "pintores", pintoresSchema);