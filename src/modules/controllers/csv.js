
const Csv = require('../schema/csv')

const { tratmentCsv, saveData, parserObject, parseNumber } = require('../services/csv')

const { message_500, message_200 } = require('../../error/system')

module.exports.importCsv = async (req, res) => {
    try {
        const objectJson = await tratmentCsv(req.file)
        await Promise.all(objectJson.map(saveData(parserObject(parseNumber))))
        res.status(200).json(message_200)
    } catch (err) {
        res.status(500).json(message_500)
    }
}

module.exports.getCsv = async (req, res) => {
    try {
        const csv = await Csv.find({}, {})
        res.status(200).json(csv)
    } catch (err) {
        res.status(500).json(err)
    }
}