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
