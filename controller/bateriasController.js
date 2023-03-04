const { Baterias } = require("../models/Baterias")
const { validationResult } = require('express-validator')



const verTodasBaterias = async(req, res) =>{
    try {
        const baterias = await Baterias.find()
        res.status(200).json(baterias)
    } catch (error) {
        res.status(401).json(error)
    }
}

const verBateria = async(req, res) =>{
    try {
        const bateria = await Baterias.findById(req.params.id)
        res.status(200).json(bateria)
    } catch (error) {
        res.status(401).json(error)
    }
}

const guardarBateria = async(req, res) =>{
    try {
        const err = validationResult(req)
        if (err.isEmpty()) {
            const bateriaNueva = new Baterias(req.body)
            await bateriaNueva.save()
            res.status(201).json({bateriaNueva})
        } else {
            res.status(501).json(err)
        }
        
    } catch (error) {
        res.status(501).json(error)
    }
}

const editarBateria = async(req, res) =>{
    try {
        const err = validationResult(req)
        if (err.isEmpty()) {
            await Baterias.findByIdAndUpdate(req.params.id, req.body)
            res.status(201).json("Se actualizo correctamente la bateria")
        } else {
            res.status(501).json(err)
        }
    } catch (error) {
        res.status(501).json(error)
    }
}

const borrarBateria = async(req, res)=>{
    try {
        await Baterias.findByIdAndDelete(req.params.id)
        res.status(200).json({msg: "La bateria fue eliminada correctamente"})
    } catch (error) {
        res.status(501).json(error)
    }
}

const borrarTodasLasBaterias = async(req, res)=>{
    try {
        await Baterias.deleteMany()
        res.status(200).json({msg: "Todas las baterias fueron eliminadas"})
    } catch (error) {
        res.status(501).json(error)
    }
}

module.exports = { verTodasBaterias, verBateria, guardarBateria, editarBateria, borrarBateria, borrarTodasLasBaterias }

