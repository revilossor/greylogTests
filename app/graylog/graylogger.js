var request = require('request');
var config = require('./config');

module.exports = {
  send:(content) => {
    request.post({
      url : `http://${config.host}:${config.port}/gelf`,
      form : {
        short_message:'from app',
        host:'example.org',
        facility:'test',
        _foo:'bar'
      }
    }, function(err, res, status) {
      if(err) {
        return console.log('ERROR! : ' + JSON.stringify(err));
      }
      console.log(`response ${JSON.stringify(res)}`);
    });
  }
};
