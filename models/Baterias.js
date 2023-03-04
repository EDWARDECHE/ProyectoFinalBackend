    const mongoose = require('mongoose')

const Schema = mongoose.Schema

const schema = new Schema({
    marca:{
        type:String,
        requerid: true
    },
    modelo:{
        type:String,
        requerid: true
    },
    origen:{
        type:String,
        requerid: true
    },
    añoFabricacion:{
        type: Number,
        requerid: true
    },
    precio:{
        type: Number,
        requerid: true
    },
    cantidadStock:{
        type: Number,
        requerid: true
    },
    colores:{
        type: String,
    }
})

const Baterias = mongoose.model("Baterias", schema);
module.exports = { Baterias }



