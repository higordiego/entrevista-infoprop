const fs = require('fs')
const multer = require('multer')
const path = require('path')
const crypto = require('crypto')
const storage = multer.diskStorage({
    destination: 'public/csv/',
    filename: function (req, file, cb) {
        crypto.pseudoRandomBytes(16, function (err, raw) {
            if (err) return cb(err)
            cb(null, raw.toString('hex') + path.extname(file.originalname))
        })
    }
})

const upload = multer({ storage: storage })

module.exports = {
    uploadImage: upload,
}