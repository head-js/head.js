/* @head.js/head.js-emitter 0.0.2 */
this.head=this.head||{},this.head.emitter=function(){"use strict";function t(t,n){n=n||0
;for(var e=t.length-n,r=new Array(e);e--;)r[e]=t[e+n];return r}function n(){return this._events=Object.create(null),this
}n.prototype.$on=function(t,n){var e=this;return(e._events[t]||(e._events[t]=[])).push(n),e},
n.prototype.$once=function(t,n){var e=this;function r(){e.$off(t,r),n.apply(e,arguments)}return r.fn=n,e.$on(t,r),e},
n.prototype.$off=function(t,n){var e=this;if(!arguments.length)return e._events=Object.create(null),e
;var r,i=e._events[t];if(!i)return e;if(!n)return e._events[t]=null,e
;for(var o=i.length;o--;)if((r=i[o])===n||r.fn===n){i.splice(o,1);break}return e},n.prototype.$emit=function(n){
var e=this,r=e._events[n];if(r){r=r.length>1?t(r):r;for(var i=t(arguments,1),o=0,f=r.length;o<f;o+=1)r[o].apply(e,i)}
return e};var e=new n;return e.on=e.$on.bind(e),e.once=e.$once.bind(e),e.off=e.$off.bind(e),e.emit=e.$emit.bind(e),e}();
