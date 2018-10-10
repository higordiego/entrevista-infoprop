
const { message_500, message_400 } = require('../../error/system')

module.exports.validateCsv = (req, res, next) => {
    try {
        if (req.file) return next()
        res.status(400).json(message_400)
    } catch (err) {
        res.status(500).json(message_500)
    }
}