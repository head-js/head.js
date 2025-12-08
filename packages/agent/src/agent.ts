import { UAParser, majorize } from './ua-parser-js/main/ua-parser';

const uaparser = UAParser().withFeatureCheck();
// console.log(uaparser);

const engine = {
  name: uaparser.engine.name || 'Unknown',
  version: uaparser.engine.version || '',
  major: majorize(uaparser.engine.version) || '',
};

const b2owser = {
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
  browser: engine,
  b2owser: b2owser, // eslint-disable-line object-shorthand
};

// @ts-ignore
head('agent', agent); // eslint-disable-line no-undef
