var express = require('express');
var app = express();
var port = 8080;
var graylogger = require('./graylog/graylogger');

app.use('/test', (req, res) => {
  graylogger.send({some:"data"});
  res.status(200).json({some:"data"});
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
