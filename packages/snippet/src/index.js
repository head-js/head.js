import path from 'path';
import fs from 'fs';


const __FILE_HEAD_AGENT = fs.readFileSync(path.join(__dirname, '../agent-0626b0.js'), 'utf-8').trim();
export const HEAD_AGENT = __FILE_HEAD_AGENT;


const __FILE__GUANCECOM_LOAD_FROM_CDN = fs.readFileSync(path.join(__dirname, '../guancecom-load-from-cdn-e59534.js'), 'utf-8').trim();
export function makeGuancecomLoadFromCdn(sdk = 'https://static.guance.com/browser-sdk/v3/dataflux-rum.js') {
  return __FILE__GUANCECOM_LOAD_FROM_CDN.replace('{{ __sdk__ }}', sdk);
}


const __FILE__GUANCECOM_INIT = fs.readFileSync(path.join(__dirname, '../guancecom-init-c00820.js'), 'utf-8').trim();
export function makeGuancecomInit(config = {}) {
  return __FILE__GUANCECOM_INIT.replace('"{{ __init__ }}"', JSON.stringify(config));
}
