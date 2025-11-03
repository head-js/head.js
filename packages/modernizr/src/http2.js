/*!
{
  "name": "http2",
  "property": "http2",
  "caniuse": "http2",
  "tags": ["extra"],
  "polyfills": ["http2"],
  "async": true
}
!*/
/* DOC
Detects support for the HTTP/2.0 Protocol.
*/
define(['Modernizr', 'addTest'], function(Modernizr, addTest) {
  Modernizr.addAsyncTest(function() {
    new PerformanceObserver(function(entries) {
      var res = entries.getEntries().find(r => r.name.includes('T1OjaVFl4dXXa.JOZB-114-114.png'));
      if (res) {
        var proto = res.nextHopProtocol;
        addTest('http2', proto === 'h2');
      } else {
        // entries are asyncly populated
      }
    }).observe({ type: 'resource' });

    fetch('https://img.alicdn.com/tps/i3/T1OjaVFl4dXXa.JOZB-114-114.png?' + Date.now())
      .then(() => {
        // no-op, we handle the result in the PerformanceObserver
      })
      .catch(() => {
        addTest('http2', false);
      });
  });
});
