const mongoose = require('mongoose');

const simpsonSchema = new mongoose.Schema({
    nome:{
        type: String,
        require: true,
        lowercase: true
    },
    caracteristica:{
        type: String,
        require: true,
        lowercase: true
    },
    genero:{
        type: String,
        require: true,
        lowercase: true
    },
    imagem:{
        type: String,
        require: true
    }
})

module.exports = mongoose.model("Simpson", simpsonSchema)