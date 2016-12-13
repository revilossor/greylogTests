var express = require('express');
var app = express();
var port = 8080;
var graylogger = require('./graylog/graylogger');
var gelf = require('./graylog/gelf');

app.use('/test', (req, res) => {
  var gelfy = gelf.get(req);

  console.log('gelf to send is : ' + JSON.stringify(gelfy));

  graylogger.send(gelf);

  res.status(200).json({some:"data"});
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
