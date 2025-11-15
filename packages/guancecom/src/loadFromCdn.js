// ;(function (h, o, u, n, d) {
//   h = h[d] = h[d] || {
//     q: [],
//     onReady: function (c) {
//       h.q.push(c)
//     },
//   }
//   d = o.createElement(u)
//   d.async = 1
//   d.src = n
//   n = o.getElementsByTagName(u)[0]
//   n.parentNode.insertBefore(d, n)
// })(
//   window,
//   document,
//   "script",
//   "https://static.guance.com/browser-sdk/v3/dataflux-rum.js",
//   "DATAFLUX_RUM"
// )


/* load from cdn */
(function (win, doc, tag, url, api) {
  var h = win[api] = win[api] || { // eslint-disable-line no-multi-assign, no-param-reassign
    q: [],
  };

  var methods = ['onReady', 'init', 'addAction', 'addError', 'setGlobalContext', 'setUser'];
  h.factory = function (m) {
    return function () {
      var args = Array.prototype.slice.call(arguments); // eslint-disable-line prefer-rest-params
      h.q.push(function () { // eslint-disable-line prefer-arrow-callback
        var h1 = win[api];
        h1[m].apply(h1, args); // eslint-disable-line prefer-spread
      });
      return h;
    };
  };
  for (var i = 0; i < methods.length; i += 1) {
    var key = methods[i];
    h[key] = h.factory(key);
  }

  var d = doc.createElement(tag);
  d.async = 1;
  d.src = url;
  var n = doc.getElementsByTagName(tag)[0];
  n.parentNode.insertBefore(d, n);
}(
  window,
  document,
  'script',
  '{{ __sdk__ }}',
  'DATAFLUX_RUM',
));


/* pre-start */
(function (win, api) {
  var h = win[api];
  var p = new Date().getTime();
  h.onReady(function () { // eslint-disable-line prefer-arrow-callback
    var s = new Date().getTime();
    h = win[api];
    h.addAction('PRE_START', { 'action_message': 'cost:' + (s - p) + 'ms' }); // eslint-disable-line quote-props, prefer-template
  });
}(
  window,
  'DATAFLUX_RUM',
));
