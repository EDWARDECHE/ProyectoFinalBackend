const express = require('express')
const router = express.Router()
const Controller = require("../controller/bateriasController")
const { validarID } = require('../middleware/validarID')
const { check } = require('express-validator')


router.get("/baterias/vertodo", Controller.verTodasBaterias)
router.get("/baterias/ver/:id",validarID, Controller.verBateria)

router.post("/baterias/crear",[
    check("marca").not().isEmpty().withMessage("La marca de la bateria es requerido"),
    check("modelo").not().isEmpty().withMessage("El modelo de la bateria es requerido"),
    check("origen").not().isEmpty().withMessage("El origen de la bateria es requerido"),
    check("añoFabricacion").not().isEmpty().withMessage("El año de fabración de la bateria es requerido").isLength({min:2,max:2}).withMessage("El año debe ser expresado con 2 digitos"),
    check("precio").not().isEmpty().withMessage("El campo precio de la bateria es requerido").isLength({min:1}).withMessage("El precio tiene que tener un valor"),
    check("cantidadStock").not().isEmpty().withMessage("Es necesario conocer el stock de la bateria"),
    check("colores").not().isEmpty().withMessage("Es necesario conocer el color de la bateria")
], Controller.guardarBateria)


router.put("/baterias/editar/:id",[
    check("marca").not().isEmpty().withMessage("La marca de la bateria es requerido"),
    check("modelo").not().isEmpty().withMessage("El modelo de la bateria es requerido"),
    check("origen").not().isEmpty().withMessage("El origen de la bateria es requerido"),
    check("añoFabricacion").not().isEmpty().withMessage("El año de fabración de la bateria es requerido").isLength({min:2,max:2}).withMessage("El año debe ser expresado con 2 digitos"),
    check("precio").not().isEmpty().withMessage("El campo precio de la bateria es requerido").isLength({min:1}).withMessage("El precio tiene que tener un valor"),
    check("cantidadStock").not().isEmpty().withMessage("Es necesario conocer el stock de la bateria"),
    check("colores").not().isEmpty().withMessage("El necesario conocer el color de la bateria")
], Controller.editarBateria)

router.delete("/baterias/borrar/:id",validarID, Controller.borrarBateria)
router.delete("/baterias/borrar", Controller.borrarTodasLasBaterias)

module.exports= router