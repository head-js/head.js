/* @head.js/snippet-guancecom 3.2.24-10 load-from-cdn */
!function(){var e,t,n,r;!function(e,t,n,r,a){var o=e[a]=e[a]||{q:[]
},i=["onReady","init","addAction","addError","setGlobalContext","setGlobalContextProperty","setUser"]
;o.factory=function(t){return function(){
var n=Array.prototype.slice.call(arguments),r=0===t.indexOf("set")?"unshift":"push";return o.q[r]((function(){var r=e[a]
;r[t].apply(r,n)})),o}};for(var c=0;c<i.length;c+=1){var s=i[c];o[s]=o.factory(s)}var d=t.createElement(n);d.async=1,
d.src="{{ __sdk__ }}";var f=t.getElementsByTagName(n)[0];f.parentNode.insertBefore(d,f)
}(window,document,"script",0,"DATAFLUX_RUM"),e=window,n=e[t="DATAFLUX_RUM"],r=(new Date).getTime(),
n.onReady((function(){var a=(new Date).getTime();(n=e[t]).addAction("PRE_START",{action_message:"cost:"+(a-r)+"ms"})}))
}();
