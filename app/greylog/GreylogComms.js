module.exports = class GreylogComms {
  constructor() {
    this.request = require('request');
    this.config = require('./config');
  }
  sendMessage(message) {
    this.request.post({
      url : `http://${this.config.host}:${this.config.port}/gelf`,
      json : {"message":message}
    });
  }
};
