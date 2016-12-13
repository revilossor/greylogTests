var winston = require('winston');
require('winston-log2gelf')

winston.add(winston.transports.File, { filename: './log/app.log' });
winston.add(winston.transports.Log2gelf, {
  level: 'info',
  host: 'graylog',
  port: 12201,
  protocol: 'http',
  handleExceptions: true
});

module.exports = {
  send:(content) => {
    winston.info('log : ' + JSON.stringify(content));
  }
};
