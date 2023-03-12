function Bridge() {
  this.registered = {};
  this.initialized = {};
  this.resolved = {};
}


Bridge.prototype._resolve = function (n) {
  const instance = this.initialized[n];
  let resolve = this.resolved[n].shift();
  while (resolve) {
    resolve(instance);
    resolve = this.resolved[n].shift();
  }
};


Bridge.prototype.register = function (n, init) {
  if (this.initialized[n] || this.registered[n]) { return; }
  this.registered[n] = init;
  this.initialized[n] = null;
  this.resolved[n] = this.resolved[n] || [];

  init((instance) => {
    if (instance.then) {
      this.initialized[n] = { __promis3r3fhack__: instance };
    } else {
      this.initialized[n] = instance;
    }
    this._resolve(n);
  });
};


Bridge.prototype._ready = function (n) {
  return new Promise((resolve, reject) => { // eslint-disable-line no-unused-vars
    const d = this.initialized[n];
    if (d) {
      resolve(d);
    } else {
      this.resolved[n].push(resolve);
    }
  });
};


Bridge.prototype.ready = function (deps) {
  const proms = [];
  for (let i = 0; i < deps.length; i += 1) {
    proms.push(this._ready(deps[i]));
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


const bridge = new Bridge();


export default bridge;
