var Seneca = require('seneca');

module.exports = function () {
  this.seneca = Seneca(this.config.seneca.options);
};
