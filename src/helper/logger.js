const { 
    createLogger,
    format,
    transports 
} = require('winston')

module.exports.logger = createLogger({
  format: format.combine(
    format.splat(),
    format.simple()
  ),
  transports: [new transports.Console()]
});