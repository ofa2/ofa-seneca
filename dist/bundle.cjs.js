'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var Seneca = _interopDefault(require('seneca'));
var Promise = _interopDefault(require('bluebird'));

function lift(done) {
  let {
    options
  } = this.config.seneca;
  options.system = options.system || {};
  options.system.close_signals = {};
  this.seneca = Seneca(options);
  process.nextTick(done);
}

function lower(done) {
  let self = this;
  self.seneca.act({
    role: 'seneca',
    cmd: 'shutdown',
    default$: {}
  }, () => {
    self.seneca.close(done);
  });
}

var index = {
  lift: Promise.promisify(lift),
  lower: Promise.promisify(lower)
};

module.exports = index;
//# sourceMappingURL=bundle.cjs.js.map
