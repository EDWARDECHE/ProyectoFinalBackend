const express = require('express')
const router = express.Router()
const Controller = require('../controller/apiExternaController')

router.get("/Simpson", Controller.consultaSimpson)

module.exports= router