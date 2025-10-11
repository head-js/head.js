import { expect } from 'chai';
import { UAParser } from '../src/ua-parser-js/main/ua-parser';


describe('UAParser', function () {
  it('iOS App', function () {
    const ua = 'Mozilla/5.0 (iPhone; CPU iPhone OS 18_6_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148/1.7.0/com.jinyinzi.yxh';
    const res = UAParser(ua);
    // console.log(res);

    expect(res.os.name).to.be.eq('iOS');
    expect(res.os.version).to.be.eq('18.6.2');
    
    expect(res.browser.name).to.be.eq('WebKit');
    expect(res.browser.version).to.be.eq('605.1.15');
    expect(res.browser.major).to.be.eq('605');

    expect(res.engine.name).to.be.eq('WebKit');
    expect(res.engine.version).to.be.eq('605.1.15');
  });

  it('Android App', function () {
    const ua = 'Mozilla/5.0 (Linux; Android 15; PJH110 Build/SP1A.210812.016; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/134.0.6998.135 Mobile Safari/537.36/1.8.0/com.jinyinzi.yxh';
    const res = UAParser(ua);
    // console.log(res);

    expect(res.os.name).to.be.eq('Android');
    expect(res.os.version).to.be.eq('15');
    
    expect(res.browser.name).to.be.eq('Chrome WebView');
    expect(res.browser.version).to.be.eq('134.0.6998.135');
    expect(res.browser.major).to.be.eq('134');

    expect(res.engine.name).to.be.eq('Blink');
    expect(res.engine.version).to.be.eq('134.0.6998.135');
  });

  it('iOS Wechat', function () {
    const ua = 'Mozilla/5.0 (iPhone; CPU iPhone OS 18_7_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.61(0x18003d39) NetType/4G Language/zh_TW';
    const res = UAParser(ua);
    // console.log(res);

    expect(res.os.name).to.be.eq('iOS');
    expect(res.os.version).to.be.eq('18.7.1');
    
    expect(res.browser.name).to.be.eq('WeChat');
    expect(res.browser.version).to.be.eq('8.0.61');
    expect(res.browser.major).to.be.eq('8');

    expect(res.engine.name).to.be.eq('WebKit');
    expect(res.engine.version).to.be.eq('605.1.15');
  });

  it('Android Wechat', function () {
    const ua = 'Mozilla/5.0 (Linux; Android 13; 21091116C Build/TP1A.220624.014; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/138.0.7204.180 Mobile Safari/537.36 XWEB/1380215 MMWEBSDK/20250804 MMWEBID/4088 MicroMessenger/8.0.63.2920(0x28003F3C) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64';
    const res = UAParser(ua);
    // console.log(res);

    expect(res.device.vendor).to.be.eq('Xiaomi');
    expect(res.device.type).to.be.eq('mobile');
    expect(res.device.model).to.be.eq('21091116C');

    expect(res.os.name).to.be.eq('Android');
    expect(res.os.version).to.be.eq('13');
    
    expect(res.browser.name).to.be.eq('WeChat');
    expect(res.browser.version).to.be.eq('8.0.63.2920');
    expect(res.browser.major).to.be.eq('8');

    expect(res.engine.name).to.be.eq('Blink');
    expect(res.engine.version).to.be.eq('138.0.7204.180');
  });

  it('OpenHarmony Wechat', function () {
    const ua = 'Mozilla/5.0 (Phone; OpenHarmony 5.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36 ArkWeb/4.1.6.1 Mobile MicroMessenger/8.0.10.41(0xf3100a29) Weixin NetType/WIFI Language/zh_HK MMWEBID/2907 MMWEBSDK/202508070004 XWEB/1140319';
    const res = UAParser(ua);
    // console.log(res);

    expect(res.device.type).to.be.eq('mobile');

    expect(res.os.name).to.be.eq('OpenHarmony');
    expect(res.os.version).to.be.eq('5.0');
    
    expect(res.browser.name).to.be.eq('WeChat');
    expect(res.browser.version).to.be.eq('8.0.10.41');
    expect(res.browser.major).to.be.eq('8');

    expect(res.engine.name).to.be.eq('ArkWeb');
    expect(res.engine.version).to.be.eq('4.1.6.1');
  });

  it('iOS Safari', function () {
    const ua = 'Mozilla/5.0 (iPhone; CPU iPhone OS 18_7_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.7 Mobile/15E148 Safari/604.1';
    const res = UAParser(ua);
    // console.log(res);

    expect(res.device.type).to.be.eq('mobile');
    expect(res.device.vendor).to.be.eq('Apple');
    expect(res.device.model).to.be.eq('iPhone');

    expect(res.os.name).to.be.eq('iOS');
    expect(res.os.version).to.be.eq('18.7.1');
    
    expect(res.browser.name).to.be.eq('Mobile Safari');
    expect(res.browser.version).to.be.eq('18.7');
    expect(res.browser.major).to.be.eq('18');

    expect(res.engine.name).to.be.eq('WebKit');
    expect(res.engine.version).to.be.eq('605.1.15');
  });

  it('Xiaomi Browser', function () {
    const ua = 'Mozilla/5.0 (Linux; U; Android 13; zh-cn; 21091116C Build/TP1A.220624.014) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.7049.79 Mobile Safari/537.36 XiaoMi/MiuiBrowser/20.4.140928';
    const res = UAParser(ua);
    // console.log(res);

    expect(res.device.type).to.be.eq('mobile');
    expect(res.device.vendor).to.be.eq('Xiaomi');
    expect(res.device.model).to.be.eq('21091116C');

    expect(res.os.name).to.be.eq('Android');
    expect(res.os.version).to.be.eq('13');
    
    expect(res.browser.name).to.be.eq('MIUI Browser');
    expect(res.browser.version).to.be.eq('20.4.140928');
    expect(res.browser.major).to.be.eq('20');

    expect(res.engine.name).to.be.eq('Blink');
    expect(res.engine.version).to.be.eq('135.0.7049.79');
  });

  it('Huawei Browser', function () {
    const ua = 'Mozilla/5.0 (Phone; OpenHarmony 5.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36 ArkWeb/4.1.6.1 Mobile HuaweiBrowser/5.1.9.301';
    const res = UAParser(ua);
    // console.log(res);

    expect(res.device.type).to.be.eq('mobile');

    expect(res.os.name).to.be.eq('OpenHarmony');
    expect(res.os.version).to.be.eq('5.0');
    
    expect(res.browser.name).to.be.eq('Huawei Browser');
    expect(res.browser.version).to.be.eq('5.1.9.301');
    expect(res.browser.major).to.be.eq('5');

    expect(res.engine.name).to.be.eq('ArkWeb');
    expect(res.engine.version).to.be.eq('4.1.6.1');
  });
});
