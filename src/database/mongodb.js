const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')

const url = process.env.MONGODB_URL

const options = { 
    useNewUrlParser: true,
    useCreateIndex: true,
}

const { logger } = require('../helper/logger')

mongoose.connect(url, options)
mongoose.connection.on('error', (err) => {
    logger.info(`mongoose connection: ${err}`)
})
mongoose.connection.on('reconnected', () => {
    logger.warn('Reconnected to MongoDB')
})

process.on('SIGINT', () => {
    mongoose.connection.close(() => {
        logger.warn('Mongodb: bye : )')
        process.exit(0)
    })
})