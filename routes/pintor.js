const exprexx =require("express");
//ruta para los pintores
let pintor = require("../controllers/pintorescontroller.js");
//creamos las rutas
let router = express.router();
router.get("/", pintor.list);
module.exports = router;