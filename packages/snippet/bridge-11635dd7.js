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
