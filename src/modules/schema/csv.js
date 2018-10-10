const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Csv = new Schema({
    logradouro: { type: String, required: true },
    numero: { type: String, required: true },
    bairro: { type: String, required: true },
    municipio: { type: String, required: true },
    estado: { type: String, required: true },
    cep: { type: String, required: true },
    location: {type: [Number], index: '2d'},
    tp_negocio: { type: String, required: true },
    preco: { type: String, required: true },
    data: { type: Date, required: true }
})

module.exports = mongoose.model('Csv', Csv)