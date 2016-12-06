module.exports = class GreylogComms {
  constructor() {
    var Gelf = require('gelf');
    this._gelf = new Gelf(require('./config'));
  }
  sendMessage(message) {
    this._gelf.emit('gelf.log', message);
  }
  sendData(data) {
    this._gelf.emit('gelf.log', data);
  }
};
