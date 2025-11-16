/* @head.js/snippet-modernizr 0.5.3 */
!function(){function e(e){o.then(e)}var r,s,o=(r=["webp","http2"],s=r.map((function(e){return new Promise((function(r){
Modernizr.on(e,r)}))})),Promise.race([Promise.all(s),new Promise((function(e){setTimeout((function(){return e("timeout")
}),1e3)}))])).then((function(){var r={"es6/promieses":"promises","es6/arrow":"arrow",
"es6/rest-parameters":"restparameters","es6/spread-array":"spreadarray","es6/weak-map":"es6collections",
"css/vars":"customproperties","web-worker":"webworkers","es7/spread-object":"spreadobject",
"img/webp/lossless":"webp.lossless","img/webp/alpha":"webp.alpha","img/webp/animation":"webp.animation",
"service-worker":"serviceworker","extra/http2":"http2"},s={};return Object.keys(r).forEach((function(e){var o,t,n
;s[e]=(o=Modernizr,void 0===(n=r[e].split(".").reduce((function(e,r){return e?e[r]:void 0}),o))?t:n)})),
Object.assign(e,s),s}));head("modernizr",e)}();
