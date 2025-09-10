/* @head.js/snippet-require 0.5.0 */
this.head=this.head||{},this.head.require=function(){const e={};function t(t,n){if(e[t])return void e[t].push(n);let o,r
;const l=document.getElementsByTagName("script");for(let e=0;e<l.length;e+=1){const n=l[e]
;if(n.getAttribute("src")===t){o=n;break}}if(!n)return o;let i;function u(n,r){o.onerror=o.onload=null,clearTimeout(i)
;const l=e[t];if(delete e[t],r&&"load"!==r.type&&o.parentNode&&o.parentNode.removeChild(o),l&&l.forEach((e=>e(r))),
n)return n(r)}o||(r=!0,o=document.createElement("script"),o.timeout=30,o.src=t,o.async=!0),e[t]=[n],
i=setTimeout(u.bind(null,void 0,{type:"timeout",target:o}),3e4),o.onerror=u.bind(null,o.onerror),
o.onload=u.bind(null,o.onload),r&&document.head.appendChild(o)}const n="data-head-require-loading";function o(e,t){
let o,r;const l=document.getElementsByTagName("link");for(let t=0;t<l.length;t+=1){const n=l[t]
;if("stylesheet"===n.rel&&(n.href===e||n.getAttribute("href")===e)){o=n;break}}if(!t)return o;let i;function u(e,r){
if(o.onerror=o.onload=null,o.removeAttribute(n),clearTimeout(i),r&&"load"!==r.type&&o.parentNode.removeChild(o),t(r),
e)return e(r)}return o||(r=!0,o=document.createElement("link"),o.setAttribute(n,1),o.rel="stylesheet",o.href=e),
o.getAttribute(n)?(i=setTimeout(u.bind(null,void 0,{type:"timeout",target:o}),3e4),o.onerror=u.bind(null,o.onerror),
o.onload=u.bind(null,o.onload)):u(void 0,{type:"load",target:o}),r&&document.head.appendChild(o),o}
const r=new RegExp("\\.css");return function(e,n,l){let i,u=0,d=0;function a(e){u-=1,0===u&&0===d&&n()}function c(e){
d-=1,0===u&&0===d&&n()}for(let n=0;n<e.length;n+=1)i=e[n],r.test(i)?(u+=1,o(i,a)):(d+=1,t(i,c))}}();
