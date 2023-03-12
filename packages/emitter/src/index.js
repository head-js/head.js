// https://github.com/vuejs/vue/blob/2.6/src/shared/util.js
// http://stackoverflow.com/a/29975135/707580

/**
 * Convert an Array-like object to a real Array.
 */
function toArray(list, start) {
  start = start || 0; // eslint-disable-line no-param-reassign
  let i = list.length - start;
  const ret = new Array(i);
  while (i--) { // eslint-disable-line no-plusplus
    ret[i] = list[i + start];
  }
  return ret;
}

// https://github.com/vuejs/vue/blob/2.6/src/core/instance/events.js
function Vue() {
  const vm = this;
  vm._events = Object.create(null);
  return vm;
}

Vue.prototype.$on = function $on(event, fn) {
  const vm = this;
  (vm._events[event] || (vm._events[event] = [])).push(fn);
  return vm;
};

Vue.prototype.$once = function $once(event, fn) {
  const vm = this;
  function on() {
    vm.$off(event, on);
    fn.apply(vm, arguments); // eslint-disable-line prefer-rest-params
  }
  on.fn = fn;
  vm.$on(event, on);
  return vm;
};

Vue.prototype.$off = function $off(event, fn) {
  const vm = this;
  // all
  if (!arguments.length) {
    vm._events = Object.create(null);
    return vm;
  }
  // specific event
  const cbs = vm._events[event];
  if (!cbs) {
    return vm;
  }
  if (!fn) {
    vm._events[event] = null;
    return vm;
  }
  // specific handler
  let cb;
  let i = cbs.length;
  while (i--) { // eslint-disable-line no-plusplus
    cb = cbs[i];
    if (cb === fn || cb.fn === fn) {
      cbs.splice(i, 1);
      break;
    }
  }
  return vm;
};

Vue.prototype.$emit = function $emit(event) {
  const vm = this;
  let cbs = vm._events[event];
  if (cbs) {
    cbs = cbs.length > 1 ? toArray(cbs) : cbs;
    const args = toArray(arguments, 1); // eslint-disable-line prefer-rest-params
    for (let i = 0, l = cbs.length; i < l; i += 1) {
      cbs[i].apply(vm, args);
    }
  }
  return vm;
};

const $emitter = new Vue();

$emitter.on = $emitter.$on.bind($emitter);
$emitter.once = $emitter.$once.bind($emitter);
$emitter.off = $emitter.$off.bind($emitter);
$emitter.emit = $emitter.$emit.bind($emitter);

export default $emitter;
