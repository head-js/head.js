/* set agent */
(function (win, api) {
  var h = win[api];
  var a = win['head']['agent']; // eslint-disable-line dot-notation
  h.setGlobalContext({
    device: {
      device: a.device.type,
      device_vendor: a.device.vendor,
      device_model: a.device.model,
      browser: a.browser.name,
      browser_version: a.browser.version,
      browser_version_major: a.browser.major,
      b2owser: a.b2owser.name,
      b2owser_version: a.b2owser.version,
      b2owser_version_major: a.b2owser.major,
      os: a.os.name,
      os_version: a.os.version,
      os_version_major: a.os.major,
    },
  });
  if (a.device.type === 'UNKNOWN') {
    h.addAction('UNKNOW_DEVICE', { action_message: win.navigator.userAgent });
  }
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
