
const csv_to_json = require('csvtojson')
const { message_500 } = require('../../error/system')

const Csv = require('../schema/csv')

module.exports.tratmentCsv = fileCsv => {
    try {
        return csv_to_json().fromFile(fileCsv.path)
    } catch (err) {
        return Promise.reject(message_500)
    }
}

module.exports.saveData = (parser) => data  => {
    return Csv.create(parser(data))
}

module.exports.parseNumber = number => Number(number.replace(',', '.'))

module.exports.parserObject = parseNumber => object  => {
    return {
        logradouro: object.logradouro,
        numero: object.numero,
        bairro: object.bairro,
        municipio: object.municipio,
        estado: object.estado,
        cep: object.cep,
        location: [parseNumber(object.lat), parseNumber(object.lng)],
        tp_negocio: object.negocio,
        preco: object.valor_anuncio,
        data: object.data_atualizacao_anuncio
    }
}

