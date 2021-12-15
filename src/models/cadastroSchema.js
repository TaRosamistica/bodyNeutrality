const mongoose = require("mongoose");

const cadastroSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    nome:{
        type: String,
        required: true
    },
    categoria:{
        type: String,
        required: true
    },
    registro: {
        type: String,
        unique: true  
    },
    especialidade: {
        type: String,
        required: true
    },
    estado: {
        type: String,
        required: true
    },
    cidade: {
        type: String,
        required: true
    },
    telefone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true, 
        unique: true,
        lowercase: true
    },
    atendimentoOnline:{
        type: Boolean,
        required: true
    },
    atendimentoSocial:{
        type: Boolean,
        required: true
    },
    criadoEm: {
        type: Date,
        required:true,
        default: new Date
    }
})

module.exports = mongoose.model("cadastro", cadastroSchema)