const CadastroSchema = require("../models/cadastroSchema");
const mongoose = require("mongoose");

//get All -  depois implementar filtros no get all 

const getAll = async (req, res) =>{
   try {
       const cadastro = await CadastroSchema.find();
       res.status(201).json({
           mensage: "Profissional encontrado com sucesso",
           cadastro
       })
   } catch (error) {
       res.status(500).json({
           message: error.message
       })
   }
    
}

//getById 
const getById = async (req, res) => {
    try {
        const { id } = req.params
        const found = await CadastroSchema.findById(id)
        if (found == undefined || id == " "){
            return res.status(404).json({
                message: "Profissional não encontrado!"
            })
        }
        return res.status(200).json(found)
        
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

//Post
const createCadastro = async (req, res) => {
    try{
    const newCadastro = new CadastroSchema({
        nome: req.body.nome,
        categoria: req.body.categoria,
        registro: req.body.registro,
        especialidade: req.body.especialidade,
        estado: req.body.estado,
        cidade: req.body.cidade,
        telefone: req.body.telefone,
        email: req.body.email,
        atendimentoOnline: req.body.atendimentoOnline,
        atendimentoSocial: req.body.atendimentoSocial,
        _id: new mongoose.Types.ObjectId()
 
        })
 
        const savedCadastro = await newCadastro.save()
        res.status(200).json({
            message: "Cadastro realizado com Sucesso!",
            savedCadastro
        })
    } catch (error){
        res.status(500).json({
            message: error.message
        })
 
    }
}


//put 
const updateCadastroById = async (req, res) => {
    try {
        const findCadastro =  await CadastroSchema.findById(req.params.id)

        if(findCadastro){
            findCadastro.nome = req.body.nome || findCadastro.nome
            findCadastro.categoria = req.body.categoria || findCadastro.categoria
            findCadastro.registro = req.body.registro || findCadastro.registro
            findCadastro.especialidade = req.body.especialidade || findCadastro.especialidade
            findCadastro.estado = req.body.estado || findCadastro.estado
            findCadastro.cidade = req.body.cidade || findCadastro.cidade
            findCadastro.telefone = req.body.telefone || findCadastro.telefone
            findCadastro.email = req.body.email || findCadastro.email
            findCadastro.atendimentoOnline = req.body.atendimentoOnline || findCadastro.atendimentoOnline
            findCadastro.atendimentoSocial = req.body.atendimentoSocial || findCadastro.atendimentoSocial
        }
        const savedCadastro = await findCadastro.save()

        res.status(200).json({
            message:"Cadastro atualizado com sucesso!",
            savedCadastro
        })

    } catch (error) {
       return res.status(404).json({
            message: "cadastro não encontrado"
        })
        
    }
}

const deleteCasdastro = async (req, res) => {
    try {

        const cadastro = await CadastroSchema.findById(req.params.id)
        if (cadastro == null){
            return res.status(404).json ({ message: "cadastro não encontrado!"})
        }
        await cadastro.remove()
        res.status(200).json({mensage: "Cadastro removido com sucesso!"})
    } catch (error) {
        return res.status(500).json({ message: err.messsage})
    }
}










module.exports = {
    getAll, 
    getById,
    createCadastro,
    updateCadastroById,
    deleteCasdastro
    
}
