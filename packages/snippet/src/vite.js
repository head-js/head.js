import * as cheerio from 'cheerio/slim'; // eslint-disable-line import/no-unresolved
import { HEAD_INIT, HEAD_AGENT, makeGuancecomLoadFromCdn, makeGuancecomInit } from './index';


function _transform(code, hs, bs) {
  const $ = cheerio.load(code);

  function processHeads(heads) {
    if (heads.length === 0) return;

    const firstScript = $('head script').first();

    if (firstScript.length > 0) {
      heads.forEach((headContent) => {
        firstScript.before(`${headContent}\n`);
      });
    } else {
      heads.forEach((headContent) => {
        $('head').append(`\n${headContent}`);
      });
    }
  }

  function processBodys(bodys) {
    if (bodys.length === 0) return;

    const firstScript = $('body script').first();

    if (firstScript.length > 0) {
      bodys.forEach((bodyContent) => {
        firstScript.before(`${bodyContent}\n`);
      });
    } else {
      bodys.forEach((bodyContent) => {
        $('body').prepend(`\n${bodyContent}`);
      });
    }
  }

  processHeads(hs);
  processBodys(bs);

  return $.html();
}


export function makeTransformHtml(sdk, clientToken, applicationId, version, env, options) { // eslint-disable-line import/prefer-default-export
  const heads = [
    '<script id="head-init">\n' + HEAD_INIT + '\n</script>', // eslint-disable-line prefer-template
    '<script id="guancecom-load-from-cdn">\n' + makeGuancecomLoadFromCdn(sdk) + '\n</script>', // eslint-disable-line prefer-template
  ];

  const opts = {
    site: 'https://rum-openway.guance.com',
    clientToken,
    applicationId,
    version,
    env,
    service: 'browser',
    sessionSampleRate: 100,
    sessionOnErrorSampleRate: 100,
    sessionReplaySampleRate: 0,
    sessionReplayOnErrorSampleRate: 0,
    telemetrySampleRate: 0,
    trackUserInteractions: false,
    compressIntakeRequests: false,
    remoteConfiguration: false,
    ...options,
  };

  const bodys = [
    '<script id="head-agent">\n' + HEAD_AGENT + '\n</script>', // eslint-disable-line prefer-template
    '<script id="guancecom-init">\n' + makeGuancecomInit(opts) + '\n</script>', // eslint-disable-line prefer-template
  ];

  return function transformHtml(html) {
    return _transform(html, heads, bodys);
  };
}
