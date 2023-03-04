const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const { connect } = require('./db/db')

require('dotenv').config

const app = express()

app.use(logger("dev"))
app.use(cors())
app.use(express.json())

const bateriasRouter = require("./routes/baterias")
const SimpsonRouter = require('./routes/apiExterna')



app.use("/instrumentos/", bateriasRouter)
app.use("/Simpson/", SimpsonRouter)


connect();
module.exports = app

