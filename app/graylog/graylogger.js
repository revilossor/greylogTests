var config = require('./config');

module.exports = {
  send:(content) => {
    console.log('not sent content is : ' + JSON.stringify(content));
  }
};
