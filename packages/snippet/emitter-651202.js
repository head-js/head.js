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
