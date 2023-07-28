/* @head.js/snippet-require 0.3.0 */
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
/* @head.js/snippet-bridge 0.3.0 */
this.head=this.head||{},this.head.bridge=function(){"use strict";function i(){this.registered={},this.initialized={},
this.resolved={}}return i.prototype._resolve=function(i){
for(var e=this.initialized[i],t=this.resolved[i].shift();t;)t(e),t=this.resolved[i].shift()},
i.prototype.register=function(i,e){this.initialized[i]||this.registered[i]||(this.registered[i]=e,
this.initialized[i]=null,this.resolved[i]=this.resolved[i]||[],e((e=>{e.then?this.initialized[i]={__promis3r3fhack__:e
}:this.initialized[i]=e,this._resolve(i)})))},i.prototype._ready=function(i){return new Promise(((e,t)=>{
var r=this.initialized[i];r?e(r):this.resolved[i].push(e)}))},i.prototype.ready=function(i){
for(var e=[],t=0;t<i.length;t+=1)e.push(this._ready(i[t]));return Promise.all(e).then((i=>{
for(var e=[],t=0;t<i.length;t+=1){var r=i[t];r.__promis3r3fhack__?e.push(r.__promis3r3fhack__):e.push(r)}
return Promise.resolve(e)}))},new i}();
/* @head.js/snippet-emitter 0.3.0 */
this.head=this.head||{},this.head.emitter=function(){"use strict";function t(t,n){n=n||0
;for(var e=t.length-n,r=new Array(e);e--;)r[e]=t[e+n];return r}function n(){return this._events=Object.create(null),this
}n.prototype.$on=function(t,n){var e=this;return(e._events[t]||(e._events[t]=[])).push(n),e},
n.prototype.$once=function(t,n){var e=this;function r(){e.$off(t,r),n.apply(e,arguments)}return r.fn=n,e.$on(t,r),e},
n.prototype.$off=function(t,n){var e=this;if(!arguments.length)return e._events=Object.create(null),e
;var r,i=e._events[t];if(!i)return e;if(!n)return e._events[t]=null,e
;for(var o=i.length;o--;)if((r=i[o])===n||r.fn===n){i.splice(o,1);break}return e},n.prototype.$emit=function(n){
var e=this,r=e._events[n];if(r){r=r.length>1?t(r):r;for(var i=t(arguments,1),o=0,f=r.length;o<f;o+=1)r[o].apply(e,i)}
return e};var e=new n;return e.on=e.$on.bind(e),e.once=e.$once.bind(e),e.off=e.$off.bind(e),e.emit=e.$emit.bind(e),e}();