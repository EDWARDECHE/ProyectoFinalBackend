const { Baterias } = require('../models/Baterias')

const validarID = async(req, res, next) =>{
    try {
        const item = await Baterias.findById(req.params.id)
        if( item !== null){
        next()
        }

    } catch (error) {
        res.status(500).json({msg: "El formato del id es incorrecto"})
    }
}

module.exports = { validarID }



