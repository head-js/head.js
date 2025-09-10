/* @head.js/snippet-emitter 0.5.0 */
this.head=this.head||{},this.head.emitter=function(){function t(t,n){n=n||0;let e=t.length-n;const o=new Array(e)
;for(;e--;)o[e]=t[e+n];return o}function n(){return this._events=Object.create(null),this}n.prototype.$on=function(t,n){
const e=this;return(e._events[t]||(e._events[t]=[])).push(n),e},n.prototype.$once=function(t,n){const e=this
;function o(){e.$off(t,o),n.apply(e,arguments)}return o.fn=n,e.$on(t,o),e},n.prototype.$off=function(t,n){const e=this
;if(!arguments.length)return e._events=Object.create(null),e;const o=e._events[t];if(!o)return e
;if(!n)return e._events[t]=null,e;let r,i=o.length;for(;i--;)if(r=o[i],r===n||r.fn===n){o.splice(i,1);break}return e},
n.prototype.$emit=function(n){const e=this;let o=e._events[n];if(o){o=o.length>1?t(o):o;const n=t(arguments,1)
;for(let t=0,r=o.length;t<r;t+=1)o[t].apply(e,n)}return e};const e=new n;return e.on=e.$on.bind(e),
e.once=e.$once.bind(e),e.off=e.$off.bind(e),e.emit=e.$emit.bind(e),e}();
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
/* @head.js/snippet-bridge 0.5.0 */
this.head=this.head||{},this.head.bridge=function(){function i(){this.registered={},this.initialized={},this.resolved={}
}i.prototype._resolve=function(i){const[t,e="_"]=i.split("@"),s=this.initialized[t][e];let r=this.resolved[t].shift()
;for(;r;)r(s),r=this.resolved[t].shift()},i.prototype.register=function(i,t){const[e,s="_"]=i.split("@")
;this.registered[e]?this.registered[e][s]||console.warn("".concat(e,"@").concat(Object.keys(this.registered[e]).join(",")," detected. @").concat(s," will not register.")):(this.registered[e]=this.registered[e]||{},
this.registered[e][s]=this.registered[e][s]||[],this.initialized[e]=this.initialized[e]||{},this.initialized[e][s]=null,
this.resolved[e]=this.resolved[e]||[],t((t=>{t.then?(this.initialized[e][s]={__promis3r3fhack__:t},
"_"!==s&&(this.initialized[e]._={__promis3r3fhack__:t})):(this.initialized[e][s]=t,"_"!==s&&(this.initialized[e]._=t)),
this._resolve(i)})))},i.prototype._initialize=function(i){const[t,e="_"]=i.split("@")
;return this.resolved[t]=this.resolved[t]||[],new Promise(((i,s)=>{if(this.initialized[t]){
const s=this.initialized[t][e];if(s)i(s);else{const e=this.initialized[t]._
;e?(console.warn("only the 1st ".concat(t,"@").concat(Object.keys(this.initialized[t]).join(",")," will register and resolve.")),
i(e)):this.resolved[t].push(i)}}else this.resolved[t].push(i)}))},i.prototype.initialize=function(i){const t=[]
;for(let e=0;e<i.length;e+=1)t.push(this._initialize(i[e]));return Promise.all(t).then((i=>{const t=[]
;for(let e=0;e<i.length;e+=1){const s=i[e];s.__promis3r3fhack__?t.push(s.__promis3r3fhack__):t.push(s)}
return Promise.resolve(t)}))},i.prototype.ready=function(i){const[t,e="_"]=i.split("@");if(this.initialized[t]){
const i=this.initialized[t][e];if(i)return i;{const i=this.initialized[t]._
;if(i)return console.warn("only the 1st ".concat(t,"@").concat(Object.keys(this.initialized[t]).join(",")," will register and resolve.")),
i;throw new Error("check docs about ~await bridge.initialize~")}}
throw new Error("check docs about ~await bridge.initialize~")},i.prototype.require=function(i,t,e){const{head:s}=window
;this.register(i,(i=>{s.require(t,(()=>{e(i)}))}))};return new i}();