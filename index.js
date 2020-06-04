//importar dependencias
const express = require("express");
const hbs = require("hbs");
const mongoose = require("mongoose");
// constante para el valor del puerto
const PUERTO = process.env.PORT || 3000;

//empleamos las rutas
let pintoresrouter = require("./routes/pintor");

//sitio web y hbs
const app = express();
app.set("view engine", "hbs");
hbs.registerPartials(directory:__dirname + "/views/partials");
app.use(express.static(__dirname + "/public"));

//le decimos la ruta a express
app.use(fn:"/", pintoresrouter);

/*La conexion en mongo */
mongoose.Promise = global.Promise;
const cadena = "mongodb+srv://Profe:tizoc14@cluster0-gwwpl.mongodb.net/curso?retryWrites=true&w=majority"
mongoose.connect(cadena, options{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log("Conexion establecida :)");
})
.catch(err=> console.log(err));
/*arrancamos el servidor web */
app.listen(PUERTO, ()=>{
    console.log("Escuchando el puerto...");
});