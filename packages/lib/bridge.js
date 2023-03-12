this.head=this.head||{},this.head.bridge=function(){"use strict";function i(){this.registered={},this.initialized={},
this.resolved={}}return i.prototype._resolve=function(i){
for(var e=this.initialized[i],t=this.resolved[i].shift();t;)t(e),t=this.resolved[i].shift()},
i.prototype.register=function(i,e){var t=this;this.initialized[i]||this.registered[i]||(this.registered[i]=e,
this.initialized[i]=null,this.resolved[i]=this.resolved[i]||[],e((function(e){e.then?t.initialized[i]={
__promis3r3fhack__:e}:t.initialized[i]=e,t._resolve(i)})))},i.prototype._ready=function(i){var e=this
;return new Promise((function(t,r){var s=e.initialized[i];s?t(s):e.resolved[i].push(t)}))},
i.prototype.ready=function(i){for(var e=[],t=0;t<i.length;t+=1)e.push(this._ready(i[t]))
;return Promise.all(e).then((function(i){for(var e=[],t=0;t<i.length;t+=1){var r=i[t]
;r.__promis3r3fhack__?e.push(r.__promis3r3fhack__):e.push(r)}return Promise.resolve(e)}))},new i}();
