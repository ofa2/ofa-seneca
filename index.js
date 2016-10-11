var Seneca = require('seneca');

module.exports = function () {
  this.seneca = Seneca(framework.config.seneca.options);
};