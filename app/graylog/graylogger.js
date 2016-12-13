var request = require('request');
var config = require('./config');

module.exports = {
  send:(content) => {
    request.post({
      url : `http://${config.host}:${config.port}/gelf`,
      form : content
    }, function(err, res, status) {
      if(err) {
        return console.log('ERROR! : ' + JSON.stringify(err));
      }
      console.log(`response ${JSON.stringify(res)}`);
    });
  }
};
