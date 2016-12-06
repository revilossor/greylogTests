var express = require('express');
var app = express();
var port = 8080;
var GreylogComms = require('./greylog/GreylogComms');
var greylogger = new GreylogComms();

app.use('/', (req, res) => {
  console.log('hit');
  greylogger.sendMessage('hit test endpoint');
  res.json({some:"data"});
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
