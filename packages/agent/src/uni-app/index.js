import { getBrowserInfo } from './getBrowserInfo.ts';

const browser = getBrowserInfo();
console.log('[[browser]]', browser);


const agent = {
  ua: browser.ua,

  device: {
    type: browser.deviceType,
    name: browser.deviceModel,
    // model: "iPhone"
    // "deviceOrientation": "portrait",
    // "language": "en-US",
  },

  os: {
    name: browser.osname,
    version: browser.osversion,
    major: 'TODO',
    // "platform": "macos",
    // "system": "macOS 10.15.7",
  },

  browser: {
    name: browser.browserName,
    version: browser.browserVersion,
    major: 'TODO',
  },
};


export default agent;
