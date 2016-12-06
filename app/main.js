var express = require('express');
var app = express();
var port = 8080;

app.use('/', (req, res) => {
  console.log('hit');
  res.json({some:"data"});
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
