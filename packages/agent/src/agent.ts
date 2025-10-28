import { UAParser, majorize } from './ua-parser-js/main/ua-parser';

const uaparser = UAParser().withFeatureCheck();
// console.log(uaparser);

const engine = {
  name: uaparser.engine.name || '',
  version: uaparser.engine.version || '',
  major: majorize(uaparser.engine.version) || '',
};

if (engine.name === 'Blink') {
  engine.name = 'Chrome';
}

const browser = engine.name
  ? {
    name: engine.name,
    version: engine.version,
    major: engine.major,
  }
  : {
    name: uaparser.browser.name || 'Unknown',
    version: uaparser.browser.version || '',
    major: majorize(uaparser.browser.version) || '',
  };

const agent = {
  device: {
    type: (uaparser.device.type || 'Unknown').toUpperCase(), // TODO: UpperCase first letter
    vendor: uaparser.device.vendor || 'Unknown',
    model: uaparser.device.model || 'Unknown',
  },
  os: {
    name: uaparser.os.name || 'Unknown',
    version: uaparser.os.version || '',
    major: majorize(uaparser.os.version) || '',
  },
  browser: browser, // eslint-disable-line object-shorthand
};

// @ts-ignore
head('agent', agent); // eslint-disable-line no-undef
