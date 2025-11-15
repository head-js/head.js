/* @head.js/snippet-guancecom 3.2.24-7 load-from-cdn */
!function(){var e,t,n,a;!function(e,t,n,a,r){var o=e[r]=e[r]||{q:[]
},c=["onReady","init","addAction","addError","setGlobalContext","setUser"];o.factory=function(t){return function(){
var n=Array.prototype.slice.call(arguments);return o.q.push((function(){var a=e[r];a[t].apply(a,n)})),o}}
;for(var i=0;i<c.length;i+=1){var s=c[i];o[s]=o.factory(s)}var d=t.createElement(n);d.async=1,d.src="{{ __sdk__ }}"
;var f=t.getElementsByTagName(n)[0];f.parentNode.insertBefore(d,f)}(window,document,"script",0,"DATAFLUX_RUM"),e=window,
n=e[t="DATAFLUX_RUM"],a=(new Date).getTime(),n.onReady((function(){var r=(new Date).getTime()
;(n=e[t]).addAction("PRE_START",{action_message:"cost:"+(r-a)+"ms"})}))}();
