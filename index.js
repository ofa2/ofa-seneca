var seneca = require('seneca')();

module.exports = function (done) {
  var self = this;
  self.seneca = seneca;
  process.nextTick(done);
};