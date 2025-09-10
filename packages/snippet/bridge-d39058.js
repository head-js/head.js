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
