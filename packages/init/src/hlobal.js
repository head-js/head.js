// https://github.com/DataDog/browser-sdk/blob/main/packages/core/src/tools/globalObject.ts

function getGlobalObject() {
  if (typeof globalThis === 'object') { // eslint-disable-line no-undef
    return globalThis; // eslint-disable-line no-undef
  }
  Object.defineProperty(Object.prototype, '__hlobal_temp__', { // eslint-disable-line no-extend-native
    get() {
      return this;
    },
    configurable: true,
  });
  let globalObject = __hlobal_temp__; // eslint-disable-line camelcase, no-undef
  delete Object.prototype.__hlobal_temp__;
  if (typeof globalObject !== 'object') {
    // on safari __hlobal_temp__ is available on window but not globally
    // fallback on other browser globals check
    if (typeof self === 'object') { // eslint-disable-line no-restricted-globals
      globalObject = self; // eslint-disable-line no-restricted-globals
    } else if (typeof window === 'object') {
      globalObject = window;
    } else {
      globalObject = {};
    }
  }
  return globalObject;
}

const __hlobal__ = getGlobalObject();
export default __hlobal__;
