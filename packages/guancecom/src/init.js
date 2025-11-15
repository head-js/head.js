/* set agent */
(function (win, api) {
  var h = win[api];
  var a = win['head']['agent']; // eslint-disable-line dot-notation
  h.setGlobalContext({
    device: {
      device: a.device.type,
      browser: a.browser.name,
      browser_version: a.browser.version,
      browser_version_major: a.browser.major,
      os: a.os.name,
      os_version: a.os.version,
      os_version_major: a.os.major,
    },
  });
}(
  window,
  'DATAFLUX_RUM',
));


/* init */
(function (win, api) {
  var h = win[api];
  h.init('{{ __init__ }}');
}(
  window,
  'DATAFLUX_RUM',
));
