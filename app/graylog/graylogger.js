var winston = require('winston');

winston.add(winston.transports.File, { filename: './log/app.log' });

module.exports = {
  send:(content) => {
    winston.info('not sent content is : ' + JSON.stringify(content));
  }
};
