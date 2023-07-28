function Bridge() {
  this.registered = {};
  this.initialized = {};
  this.resolved = {};
}


Bridge.prototype._resolve = function (n) {
  const [ name, version = '_' ] = n.split('@');
  const instance = this.initialized[name][version];
  let register = this.resolved[name].shift();
  while (register) {
    register(instance);
    register = this.resolved[name].shift();
  }
};


Bridge.prototype.register = function (n, init) {
  const [ name, version = '_' ] = n.split('@');

  if (this.registered[name]) {
    if (!this.registered[name][version]) {
      console.warn(`${name}@${Object.keys(this.registered[name]).join(',')} detected. @${version} will not register.`);
    }
    return;
  }

  this.registered[name] = this.registered[name] || {};
  this.registered[name][version] = this.registered[name][version] || [];

  this.initialized[name] = this.initialized[name] || {};
  this.initialized[name][version] = null;

  this.resolved[name] = this.resolved[name] || [];

  init((instance) => { // args::register
    if (instance.then) {
      this.initialized[name][version] = { __promis3r3fhack__: instance };
      if (version !== '_') {
        this.initialized[name]._ = { __promis3r3fhack__: instance };
      }
    } else {
      this.initialized[name][version] = instance;
      if (version !== '_') {
        this.initialized[name]._ = instance;
      }
    }
    this._resolve(n);
  });
};


Bridge.prototype._initialize = function (n) {
  const [ name, version = '_' ] = n.split('@');
  this.resolved[name] = this.resolved[name] || [];

  return new Promise((resolve, reject) => { // eslint-disable-line no-unused-vars
    const i1 = this.initialized[name];
    if (i1) {
      const instance = this.initialized[name][version];
      if (instance) {
        resolve(instance);
      } else {
        const _ = this.initialized[name]._; // eslint-disable-line prefer-destructuring
        if (_) {
          console.warn(`only the 1st ${name}@${Object.keys(this.initialized[name]).join(',')} will register and resolve.`);
          resolve(_);
        } else {
          this.resolved[name].push(resolve);
        }
      }
    } else {
      this.resolved[name].push(resolve);
    }
  });
};


Bridge.prototype.initialize = function (ns) {
  const proms = [];
  for (let i = 0; i < ns.length; i += 1) {
    proms.push(this._initialize(ns[i]));
  }
  return Promise.all(proms).then((instances) => {
    const normalized = [];
    for (let i = 0; i < instances.length; i += 1) {
      const inst = instances[i];
      if (inst.__promis3r3fhack__) {
        normalized.push(inst.__promis3r3fhack__);
      } else {
        normalized.push(inst);
      }
    }
    return Promise.resolve(normalized);
  });
};


Bridge.prototype.ready = function (n) {
  const [ name, version = '_' ] = n.split('@');

  const i1 = this.initialized[name];
  if (i1) {
    const instance = this.initialized[name][version];
    if (instance) {
      return instance;
    } else {
      const _ = this.initialized[name]._; // eslint-disable-line prefer-destructuring
      if (_) {
        console.warn(`only the 1st ${name}@${Object.keys(this.initialized[name]).join(',')} will register and resolve.`);
        return _;
      } else {
        throw new Error('check docs about `await bridge.initialize`');
      }
    }
  } else {
    throw new Error('check docs about `await bridge.initialize`');
  }
};


Bridge.prototype.require = function (n, assets, init) {
  const { head } = window;

  this.register(n, (register) => {
    head.require(assets, () => {
      init(register);
    });
  });
};


const bridge = new Bridge();


export default bridge;
