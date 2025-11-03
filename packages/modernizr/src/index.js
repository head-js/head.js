function $ready(asyncFeatures) {
  const p = asyncFeatures.map((f) => new Promise((resolve) => {
    Modernizr.on(f, resolve);
  }));

  return Promise.race([
    Promise.all(p),
    new Promise((resolve) => {
      setTimeout(() => resolve('timeout'), 1000);
    }),
  ]);
}

function modernizr(ready) {
  r.then(ready); // eslint-disable-line no-use-before-define
}


const r = $ready(['webp', 'http2']).then(() => {
  // vanilla.js/lodash/get.js
  function $get(obj, path, defaultValue) {
    const val = path.split('.').reduce((o, key) => (o ? o[key] : undefined), obj);
    return val === undefined ? defaultValue : val;
  }

  const FEATURES = {
    // BASELINE
    'es6/promieses': 'promises',
    'es6/arrow': 'arrow',
    'es6/rest-parameters': 'restparameters',
    'es6/spread-array': 'spreadarray',
    // OPTIMISTIC
    'es7/spread-object': 'spreadobject',
    'img/webp/lossless': 'webp.lossless',
    'img/webp/alpha': 'webp.alpha',
    'img/webp/animation': 'webp.animation',
    'extra/http2': 'http2',
  };

  const result = {};
  Object.keys(FEATURES).forEach((f) => {
    result[f] = $get(Modernizr, FEATURES[f]);
  });

  Object.assign(modernizr, result);

  return result;
});


head('modernizr', modernizr);
