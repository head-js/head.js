'use strict';

var lib = {};

Object.defineProperty(lib, "__esModule", {
  value: true
});
var declare_1 = lib.declare = declare;
lib.declarePreset = void 0;

function declare(builder) {
  return (api, options, dirname) => {
    var _clonedApi2;

    let clonedApi;

    for (const name of Object.keys(apiPolyfills)) {
      var _clonedApi;

      if (api[name]) continue;
      clonedApi = (_clonedApi = clonedApi) != null ? _clonedApi : copyApiObject(api);
      clonedApi[name] = apiPolyfills[name](clonedApi);
    }

    return builder((_clonedApi2 = clonedApi) != null ? _clonedApi2 : api, options || {}, dirname);
  };
}

const declarePreset = declare;
lib.declarePreset = declarePreset;
const apiPolyfills = {
  assertVersion: api => range => {
    throwVersionError(range, api.version);
  },
  targets: () => () => {
    return {};
  },
  assumption: () => () => {
    return undefined;
  }
};

function copyApiObject(api) {
  let proto = null;

  if (typeof api.version === "string" && /^7\./.test(api.version)) {
    proto = Object.getPrototypeOf(api);

    if (proto && (!has(proto, "version") || !has(proto, "transform") || !has(proto, "template") || !has(proto, "types"))) {
      proto = null;
    }
  }

  return Object.assign({}, proto, api);
}

function has(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

function throwVersionError(range, version) {
  if (typeof range === "number") {
    if (!Number.isInteger(range)) {
      throw new Error("Expected string or integer value.");
    }

    range = `^${range}.0.0-0`;
  }

  if (typeof range !== "string") {
    throw new Error("Expected string or integer value.");
  }

  const limit = Error.stackTraceLimit;

  if (typeof limit === "number" && limit < 25) {
    Error.stackTraceLimit = 25;
  }

  let err;

  if (version.slice(0, 2) === "7.") {
    err = new Error(`Requires Babel "^7.0.0-beta.41", but was loaded with "${version}". ` + `You'll need to update your @babel/core version.`);
  } else {
    err = new Error(`Requires Babel "${range}", but was loaded with "${version}". ` + `If you are sure you have a compatible version of @babel/core, ` + `it is likely that something in your build process is loading the ` + `wrong version. Inspect the stack trace of this error to look for ` + `the first entry that doesn't mention "@babel/core" or "babel-core" ` + `to see what is calling Babel.`);
  }

  if (typeof limit === "number") {
    Error.stackTraceLimit = limit;
  }

  throw Object.assign(err, {
    code: "BABEL_VERSION_UNSUPPORTED",
    version,
    range
  });
}

var index = declare_1((api, options) => {
  // eslint-disable-line no-unused-vars
  api.assertVersion(7);
  const {
    types: t
  } = api;

  function _pretty(path, state, object, alias, property, style) {
    if (t.isMemberExpression(path.node.callee) && t.isIdentifier(path.node.callee.object, {
      name: object
    }) && t.isIdentifier(path.node.callee.property, {
      name: alias
    })) {
      const args = path.node.arguments; // console.log(args);

      if (args.length > 0) {
        const pretty = [t.stringLiteral('%c%s'), t.stringLiteral(style)];

        if (!t.isLiteral(args[0])) {
          pretty.push(t.stringLiteral('    '));
        }

        args.forEach(arg => {
          pretty.push(arg);
        });
        path.replaceWith(t.callExpression(t.memberExpression(t.identifier(object), t.identifier(property)), pretty));
        path.skip();
      }
    }
  }

  return {
    name: '@head.js/babel-plugin-console',
    visitor: {
      // Identifier(path, args) { // eslint-disable-line no-unused-vars
      //   const name = path.node.name; // eslint-disable-line prefer-destructuring
      //   console.log('[Identifier]', name);
      // },
      CallExpression(path, state) {
        _pretty(path, state, 'console', 'debug', 'debug', 'background-color: #f0f9ff');

        _pretty(path, state, 'console', 'verbose', 'debug', 'color: #727272');
      }

    }
  };
});

module.exports = index;
