var Seneca = require('seneca');

module.exports = function () {
  var self = this;
  var options = this.config.seneca.options;
  options.system = options.system || {};
  options.system.close_signals = {};

  this.seneca = Seneca(options);
};
