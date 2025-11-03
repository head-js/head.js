/* @head.js/snippet-modernizr 0.5.2 */
!function(){function e(e){n.then(e)}var r,t,n=(r=["webp","http2"],t=r.map((function(e){return new Promise((function(r){
Modernizr.on(e,r)}))})),Promise.race([Promise.all(t),new Promise((function(e){setTimeout((function(){return e("timeout")
}),1e3)}))])).then((function(){var r={"es6/promieses":"promises","es6/arrow":"arrow",
"es6/rest-parameters":"restparameters","es6/spread-array":"spreadarray","es7/spread-object":"spreadobject",
"img/webp/lossless":"webp.lossless","img/webp/alpha":"webp.alpha","img/webp/animation":"webp.animation",
"extra/http2":"http2"},t={};return Object.keys(r).forEach((function(e){var n,s,a;t[e]=(n=Modernizr,
void 0===(a=r[e].split(".").reduce((function(e,r){return e?e[r]:void 0}),n))?s:a)})),Object.assign(e,t),t}))
;head("modernizr",e)}();
