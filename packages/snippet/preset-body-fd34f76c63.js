/* @head.js/snippet-emitter 0.4.0 */
this.head=this.head||{},this.head.emitter=function(){"use strict";function t(t,n){n=n||0
;for(var e=t.length-n,r=new Array(e);e--;)r[e]=t[e+n];return r}function n(){return this._events=Object.create(null),this
}n.prototype.$on=function(t,n){var e=this;return(e._events[t]||(e._events[t]=[])).push(n),e},
n.prototype.$once=function(t,n){var e=this;function r(){e.$off(t,r),n.apply(e,arguments)}return r.fn=n,e.$on(t,r),e},
n.prototype.$off=function(t,n){var e=this;if(!arguments.length)return e._events=Object.create(null),e
;var r,i=e._events[t];if(!i)return e;if(!n)return e._events[t]=null,e
;for(var o=i.length;o--;)if((r=i[o])===n||r.fn===n){i.splice(o,1);break}return e},n.prototype.$emit=function(n){
var e=this,r=e._events[n];if(r){r=r.length>1?t(r):r;for(var i=t(arguments,1),o=0,f=r.length;o<f;o+=1)r[o].apply(e,i)}
return e};var e=new n;return e.on=e.$on.bind(e),e.once=e.$once.bind(e),e.off=e.$off.bind(e),e.emit=e.$emit.bind(e),e}();
/* @head.js/snippet-require 0.4.0 */
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
/* @head.js/snippet-bridge 0.4.0 */
this.head=this.head||{},this.head.bridge=function(){"use strict";function t(t,i){return function(t){
if(Array.isArray(t))return t}(t)||function(t,e){
var i=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=i){
var r,n,s,o,l=[],a=!0,h=!1;try{if(s=(i=i.call(t)).next,0===e){if(Object(i)!==i)return;a=!1
}else for(;!(a=(r=s.call(i)).done)&&(l.push(r.value),l.length!==e);a=!0);}catch(t){h=!0,n=t}finally{try{
if(!a&&null!=i.return&&(o=i.return(),Object(o)!==o))return}finally{if(h)throw n}}return l}}(t,i)||function(t,i){
if(!t)return;if("string"==typeof t)return e(t,i);var r=Object.prototype.toString.call(t).slice(8,-1)
;"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t)
;if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(t,i)}(t,i)||function(){
throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
}()}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}
function i(){this.registered={},this.initialized={},this.resolved={}}return i.prototype._resolve=function(e){
for(var i=t(e.split("@"),2),r=i[0],n=i[1],s=void 0===n?"_":n,o=this.initialized[r][s],l=this.resolved[r].shift();l;)l(o),
l=this.resolved[r].shift()},i.prototype.register=function(e,i){var r=t(e.split("@"),2),n=r[0],s=r[1],o=void 0===s?"_":s
;this.registered[n]?this.registered[n][o]||console.warn("".concat(n,"@").concat(Object.keys(this.registered[n]).join(",")," detected. @").concat(o," will not register.")):(this.registered[n]=this.registered[n]||{},
this.registered[n][o]=this.registered[n][o]||[],this.initialized[n]=this.initialized[n]||{},this.initialized[n][o]=null,
this.resolved[n]=this.resolved[n]||[],i((t=>{t.then?(this.initialized[n][o]={__promis3r3fhack__:t},
"_"!==o&&(this.initialized[n]._={__promis3r3fhack__:t})):(this.initialized[n][o]=t,"_"!==o&&(this.initialized[n]._=t)),
this._resolve(e)})))},i.prototype._ready=function(e){var i=t(e.split("@"),2),r=i[0],n=i[1],s=void 0===n?"_":n
;return new Promise(((t,e)=>{if(this.initialized[r]){var i=this.initialized[r][s]
;i?t(i):(console.warn("only the 1st ".concat(r,"@").concat(Object.keys(this.initialized[r]).join(",")," will register and resolve.")),
t(this.initialized[r]._))}else this.resolved[r].push(t)}))},i.prototype.ready=function(t){
for(var e=[],i=0;i<t.length;i+=1)e.push(this._ready(t[i]));return Promise.all(e).then((t=>{
for(var e=[],i=0;i<t.length;i+=1){var r=t[i];r.__promis3r3fhack__?e.push(r.__promis3r3fhack__):e.push(r)}
return Promise.resolve(e)}))},i.prototype.require=function(t,e,i){window.head.require(e,(()=>{this.register(t,i)}))},
new i}();