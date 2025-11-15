/* @head.js/snippet-guancecom 3.2.24-7 init */
!function(){var o,e,r;o=window,e=o.DATAFLUX_RUM,r=o.head.agent,e.setGlobalContext({device:{device:r.device.type,
browser:r.browser.name,browser_version:r.browser.version,browser_version_major:r.browser.major,os:r.os.name,
os_version:r.os.version,os_version_major:r.os.major}}),window.DATAFLUX_RUM.init("{{ __init__ }}")}();
