'use strict';

// require('core-js/modules/es.string.trim.js');
// require('core-js/modules/es.regexp.exec.js');
// require('core-js/modules/es.string.replace.js');
var path = require('path');
var fs = require('fs');

const __FILE_HEAD_INIT = fs.readFileSync(path.join(__dirname, '../init-74bd0b.js'), 'utf-8').trim();

const HEAD_INIT = __FILE_HEAD_INIT;

const __FILE_HEAD_AGENT = fs.readFileSync(path.join(__dirname, '../agent-100907.js'), 'utf-8').trim();

const HEAD_AGENT = __FILE_HEAD_AGENT;

const __FILE__GUANCECOM_LOAD_FROM_CDN = fs.readFileSync(path.join(__dirname, '../guancecom-load-from-cdn-d0c7f1.js'), 'utf-8').trim();

function makeGuancecomLoadFromCdn(sdk = 'https://static.guance.com/browser-sdk/v3/dataflux-rum.js') {
  return __FILE__GUANCECOM_LOAD_FROM_CDN.replace('{{ __sdk__ }}', sdk);
}

const __FILE__GUANCECOM_INIT = fs.readFileSync(path.join(__dirname, '../guancecom-init-a45739.js'), 'utf-8').trim();

function makeGuancecomInit(config = {}) {
  return __FILE__GUANCECOM_INIT.replace('"{{ __init__ }}"', JSON.stringify(config));
}

exports.HEAD_AGENT = HEAD_AGENT;
exports.HEAD_INIT = HEAD_INIT;
exports.makeGuancecomInit = makeGuancecomInit;
exports.makeGuancecomLoadFromCdn = makeGuancecomLoadFromCdn;
