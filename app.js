require('dotenv').load()

const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const path = require('path')

const { logger } = require('./src/helper/logger')

require('./src/database/mongodb')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(morgan('combined'))


require('./src/modules/routes/csv')(app)

const port = process.env.EXPRESS_PORT || 3000

app.get('/', (_, res) => res.sendFile(path.join(__dirname, './public', 'index.html')))

app.listen(port, logger.info(`server start url http://localhost:${port}`))