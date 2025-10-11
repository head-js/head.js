import { expect } from 'chai';
import { UAParser } from '../src/ua-parser-js/main/ua-parser';

// https://github.com/DataDog/browser-sdk/blob/main/packages/core/src/tools/utils/browserDetection.spec.ts

describe('UAParser Datadog', function () {
  it('MacOS Safari', function () {
    const ua = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Safari/605.1.15';
    const res = UAParser(ua);
    // console.log(res);

    expect(res.os.name).to.be.eq('macOS');
    expect(res.os.version).to.be.eq('10.15.7');
    
    expect(res.browser.name).to.be.eq('Safari');
    expect(res.browser.version).to.be.eq('16.6');
    expect(res.browser.major).to.be.eq('16');

    expect(res.engine.name).to.be.eq('WebKit');
    expect(res.engine.version).to.be.eq('605.1.15');
  });

  it('iOS Safari', function () {
    const ua = 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/20B110 [FBAN/FBIOS;FBDV/iPhone14,5;FBMD/iPhone;FBSN/iOS;FBSV/16.1.2;FBSS/3;FBID/phone;FBLC/en_US;FBOP/5]';
    const res = UAParser(ua);
    // console.log(res);

    expect(res.os.name).to.be.eq('iOS');
    expect(res.os.version).to.be.eq('16.1.2');
    
    // FIXME: Facebook 浏览器识别有问题
    expect(res.browser.name).to.be.eq('Facebook');
    expect(res.browser.version).to.be.undefined;

    expect(res.engine.name).to.be.eq('WebKit');
    expect(res.engine.version).to.be.eq('605.1.15');
  });

  it('MacOS Chrome', function () {
    const ua = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36';
    const res = UAParser(ua);
    // console.log(res);

    expect(res.os.name).to.be.eq('macOS');
    expect(res.os.version).to.be.eq('10.15.7');
    
    expect(res.browser.name).to.be.eq('Chrome');
    expect(res.browser.version).to.be.eq('118.0.0.0');
    expect(res.browser.major).to.be.eq('118');

    expect(res.engine.name).to.be.eq('Blink');
    expect(res.engine.version).to.be.eq('118.0.0.0');
  });

  it('Headless Chrome', function () {
    const ua = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/92.0.4512.0 Safari/537.36';
    const res = UAParser(ua);
    // console.log(res);

    expect(res.os.name).to.be.eq('Linux');
    expect(res.os.version).to.be.undefined;
    
    expect(res.browser.name).to.be.eq('Chrome Headless');
    expect(res.browser.version).to.be.eq('92.0.4512.0');
    expect(res.browser.major).to.be.eq('92');

    expect(res.engine.name).to.be.eq('Blink');
    expect(res.engine.version).to.be.eq('92.0.4512.0');
  });

  it('Windows Edge', function () {
    const ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36 Edg/89.0.774.54';
    const res = UAParser(ua);
    // console.log(res);

    expect(res.os.name).to.be.eq('Windows');
    expect(res.os.version).to.be.eq('10');
    
    expect(res.browser.name).to.be.eq('Edge');
    expect(res.browser.version).to.be.eq('89.0.774.54');
    expect(res.browser.major).to.be.eq('89');

    expect(res.engine.name).to.be.eq('Blink');
    expect(res.engine.version).to.be.eq('89.0.4389.82');
  });
});
