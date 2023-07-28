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
