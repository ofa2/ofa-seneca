import Seneca from 'seneca';
import Promise from 'bluebird';

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

export default index;
//# sourceMappingURL=bundle.esm.js.map
