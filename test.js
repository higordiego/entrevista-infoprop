const csvFilePath = './import.csv'
const csv = require('csvtojson')
csv()
    .fromFile(csvFilePath)
    .then((jsonObj) => console.log(jsonObj[0]))
    .catch(err => console.log(err))