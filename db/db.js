const mongoose = require('mongoose')
require("dotenv").config()

const connect = async() =>{
    try {
        await mongoose.connect(process.env.MONGO_CNN)
        console.log("Se conecto con exito a la base de datos")
    } catch (error) {
        console.log("Problemas al conectar con la base de datos")
    }
}

module.exports = { connect }

