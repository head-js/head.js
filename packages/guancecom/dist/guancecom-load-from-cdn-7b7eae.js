/* @head.js/snippet-guancecom 3.2.24-8 load-from-cdn */
!function(){var e,t,n,r;!function(e,t,n,r,a){var o=e[a]=e[a]||{q:[]
},c=["onReady","init","addAction","addError","setGlobalContext","setGlobalContextProperty","setUser"]
;o.factory=function(t){return function(){var n=Array.prototype.slice.call(arguments);return o.q.push((function(){
var r=e[a];r[t].apply(r,n)})),o}};for(var i=0;i<c.length;i+=1){var s=c[i];o[s]=o.factory(s)}var d=t.createElement(n)
;d.async=1,d.src="{{ __sdk__ }}";var l=t.getElementsByTagName(n)[0];l.parentNode.insertBefore(d,l)
}(window,document,"script",0,"DATAFLUX_RUM"),e=window,n=e[t="DATAFLUX_RUM"],r=(new Date).getTime(),
n.onReady((function(){var a=(new Date).getTime();(n=e[t]).addAction("PRE_START",{action_message:"cost:"+(a-r)+"ms"})}))
}();
