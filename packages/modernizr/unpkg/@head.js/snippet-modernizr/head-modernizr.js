/* @head.js/snippet-modernizr 0.5.3 */
!function(){function e(e){r.then(e)}const r=function(e){const r=e.map((e=>new Promise((r=>{Modernizr.on(e,r)}))))
;return Promise.race([Promise.all(r),new Promise((e=>{setTimeout((()=>e("timeout")),1e3)}))])
}(["webp","http2"]).then((()=>{const r={"es6/promises":"promises","es6/arrow":"arrow",
"es6/rest-parameters":"restparameters","es6/spread-array":"spreadarray","es6/weak-map":"es6collections",
"css/vars":"customproperties","web-worker":"webworkers","es7/spread-object":"spreadobject",
"img/webp/lossless":"webp.lossless","img/webp/alpha":"webp.alpha","img/webp/animation":"webp.animation",
"service-worker":"serviceworker","extra/http2":"http2"},s={};return Object.keys(r).forEach((e=>{s[e]=function(e,r,s){
const o=r.split(".").reduce(((e,r)=>e?e[r]:void 0),e);return void 0===o?s:o}(Modernizr,r[e])})),Object.assign(e,s),s}))
;head("modernizr",e)}();
