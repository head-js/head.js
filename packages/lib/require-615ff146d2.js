/* @head.js/head.js-require 0.0.2 */
this.head=this.head||{},this.head.require=function(){"use strict";var e={};function t(t,r){if(e[t])e[t].push(r);else{
for(var n,o,i,a=document.getElementsByTagName("script"),l=0;l<a.length;l+=1){var u=a[l];if(u.getAttribute("src")===t){
n=u;break}}if(!r)return n;n||(o=!0,(n=document.createElement("script")).timeout=30,n.src=t,n.async=!0),e[t]=[r],
i=setTimeout(d.bind(null,void 0,{type:"timeout",target:n}),3e4),n.onerror=d.bind(null,n.onerror),
n.onload=d.bind(null,n.onload),o&&document.head.appendChild(n)}function d(r,o){n.onerror=n.onload=null,clearTimeout(i)
;var a=e[t];if(delete e[t],o&&"load"!==o.type&&n.parentNode&&n.parentNode.removeChild(n),a&&a.forEach((e=>e(o))),
r)return r(o)}}var r="data-head-require-loading";function n(e,t){
for(var n,o,i,a=document.getElementsByTagName("link"),l=0;l<a.length;l+=1){var u=a[l]
;if("stylesheet"===u.rel&&(u.href===e||u.getAttribute("href")===e)){n=u;break}}if(!t)return n;function d(e,o){
if(n.onerror=n.onload=null,n.removeAttribute(r),clearTimeout(i),o&&"load"!==o.type&&n.parentNode.removeChild(n),t(o),
e)return e(o)}return n||(o=!0,(n=document.createElement("link")).setAttribute(r,1),n.rel="stylesheet",n.href=e),
n.getAttribute(r)?(i=setTimeout(d.bind(null,void 0,{type:"timeout",target:n}),3e4),n.onerror=d.bind(null,n.onerror),
n.onload=d.bind(null,n.onload)):d(void 0,{type:"load",target:n}),o&&document.head.appendChild(n),n}
var o=new RegExp("\\.css");return function(e,r,i){var a,l=0,u=0;function d(e){0===(l-=1)&&0===u&&r()}function c(e){u-=1,
0===l&&0===u&&r()}for(var s=0;s<e.length;s+=1)a=e[s],o.test(a)?(l+=1,n(a,d)):(u+=1,t(a,c))}}();
