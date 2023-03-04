const axios = require("axios")

const consultaSimpson = async (req, res) =>{
    try {
        const resultado = await axios.get("https://api.sampleapis.com/simpsons/characters")
        res.json({
            response: resultado.data,
            status: resultado.status
        })
    } catch (error) {
        res.json({
            response: error.response.data,
            status: error.response.status
        })
    }
}

module.exports={consultaSimpson}