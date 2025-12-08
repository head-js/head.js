/* @head.js/snippet-guancecom 3.2.24-10 init */
!function(){var e,o,r;e=window,o=e.DATAFLUX_RUM,r=e.head.agent,o.setGlobalContext({device:{device:r.device.type,
device_vendor:r.device.vendor,device_model:r.device.model,browser:r.browser.name,browser_version:r.browser.version,
browser_version_major:r.browser.major,b2owser:r.b2owser.name,b2owser_version:r.b2owser.version,
b2owser_version_major:r.b2owser.major,os:r.os.name,os_version:r.os.version,os_version_major:r.os.major}}),
"UNKNOWN"===r.device.type&&o.addAction("UNKNOW_DEVICE",{action_message:e.navigator.userAgent}),
window.DATAFLUX_RUM.init("{{ __init__ }}")}();
