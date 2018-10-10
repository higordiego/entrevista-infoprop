
module.exports = app => {
    const url = `${process.env.EXPRESS_ROUTE}/csv`
    const { importCsv, getCsv  } = require('../controllers/csv')
    const { validateCsv } = require('../validate/csv')
    const { uploadImage } = require('../../helper/upload')
    
    app.route(url)
        .post(uploadImage.single('csv'), validateCsv, importCsv)
        .get(getCsv)
}