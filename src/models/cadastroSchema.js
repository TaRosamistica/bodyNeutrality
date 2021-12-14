const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    categoria:{
        type: String,
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
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true, 
        unique: true
    },
    atendimentoSocial:{
        type: String,
        required: true
        
    },
    criadoEm: {
        type: Date,
        required:true,
        default: new Date
    }
})

const Users = mongoose.model("User", usersSchema)

module.exports = Users