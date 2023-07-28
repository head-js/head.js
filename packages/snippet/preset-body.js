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
/* @head.js/snippet-bridge 0.4.2 */
this.head=this.head||{},this.head.bridge=function(){"use strict";function i(i,e){return function(i){
if(Array.isArray(i))return i}(i)||function(i,t){
var e=null==i?null:"undefined"!=typeof Symbol&&i[Symbol.iterator]||i["@@iterator"];if(null!=e){
var r,n,s,o,a=[],l=!0,h=!1;try{if(s=(e=e.call(i)).next,0===t){if(Object(e)!==e)return;l=!1
}else for(;!(l=(r=s.call(e)).done)&&(a.push(r.value),a.length!==t);l=!0);}catch(i){h=!0,n=i}finally{try{
if(!l&&null!=e.return&&(o=e.return(),Object(o)!==o))return}finally{if(h)throw n}}return a}}(i,e)||function(i,e){
if(!i)return;if("string"==typeof i)return t(i,e);var r=Object.prototype.toString.call(i).slice(8,-1)
;"Object"===r&&i.constructor&&(r=i.constructor.name);if("Map"===r||"Set"===r)return Array.from(i)
;if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(i,e)}(i,e)||function(){
throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
}()}function t(i,t){(null==t||t>i.length)&&(t=i.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=i[e];return r}
function e(){this.registered={},this.initialized={},this.resolved={}}return e.prototype._resolve=function(t){
for(var e=i(t.split("@"),2),r=e[0],n=e[1],s=void 0===n?"_":n,o=this.initialized[r][s],a=this.resolved[r].shift();a;)a(o),
a=this.resolved[r].shift()},e.prototype.register=function(t,e){var r=i(t.split("@"),2),n=r[0],s=r[1],o=void 0===s?"_":s
;this.registered[n]?this.registered[n][o]||console.warn("".concat(n,"@").concat(Object.keys(this.registered[n]).join(",")," detected. @").concat(o," will not register.")):(this.registered[n]=this.registered[n]||{},
this.registered[n][o]=this.registered[n][o]||[],this.initialized[n]=this.initialized[n]||{},this.initialized[n][o]=null,
this.resolved[n]=this.resolved[n]||[],e((i=>{i.then?(this.initialized[n][o]={__promis3r3fhack__:i},
"_"!==o&&(this.initialized[n]._={__promis3r3fhack__:i})):(this.initialized[n][o]=i,"_"!==o&&(this.initialized[n]._=i)),
this._resolve(t)})))},e.prototype._initialize=function(t){var e=i(t.split("@"),2),r=e[0],n=e[1],s=void 0===n?"_":n
;return this.resolved[r]=this.resolved[r]||[],new Promise(((i,t)=>{if(this.initialized[r]){var e=this.initialized[r][s]
;if(e)i(e);else{var n=this.initialized[r]._
;n?(console.warn("only the 1st ".concat(r,"@").concat(Object.keys(this.initialized[r]).join(",")," will register and resolve.")),
i(n)):this.resolved[r].push(i)}}else this.resolved[r].push(i)}))},e.prototype.initialize=function(i){
for(var t=[],e=0;e<i.length;e+=1)t.push(this._initialize(i[e]));return Promise.all(t).then((i=>{
for(var t=[],e=0;e<i.length;e+=1){var r=i[e];r.__promis3r3fhack__?t.push(r.__promis3r3fhack__):t.push(r)}
return Promise.resolve(t)}))},e.prototype.ready=function(t){var e=i(t.split("@"),2),r=e[0],n=e[1],s=void 0===n?"_":n
;if(this.initialized[r]){var o=this.initialized[r][s];if(o)return o;var a=this.initialized[r]._
;if(a)return console.warn("only the 1st ".concat(r,"@").concat(Object.keys(this.initialized[r]).join(",")," will register and resolve.")),
a;throw new Error("check docs about `await bridge.initialize`")}
throw new Error("check docs about `await bridge.initialize`")},e.prototype.require=function(i,t,e){var r=window.head
;this.register(i,(i=>{r.require(t,(()=>{e(i)}))}))},new e}();