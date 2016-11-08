var Seneca = require('seneca');
var Promise = require('bluebird');

function lift (done) {
  var self = this;
  var options = this.config.seneca.options;
  options.system = options.system || {};
  options.system.close_signals = {};
  this.seneca = Seneca(options);
  process.nextTick(done);
};

function lower (done) {
  var self = this;
  self.seneca.act({role: 'seneca', cmd: 'shutdown', 'default$': {}}, function (err) {
    self.seneca.close(done);
  });
}

module.exports = {
  lift: Promise.promisify(lift),
  lower: Promise.promisify(lower)
};