System.register(["./p-1fa942a3.system.js","./p-64d1a452.system.js","./p-a2a72620.system.js","./p-4e1706df.system.js","./p-9c3fae20.system.js"],(function(a){"use strict";var e,t;return{setters:[function(){},function(){},function(a){e=a.c},function(){},function(a){t=a.g}],execute:function(){var n=a("mdTransitionAnimation",(function(a,n){var i="40px";var r="0px";var o=n.direction==="back";var s=n.enteringEl;var c=n.leavingEl;var f=t(s);var u=f.querySelector("ion-toolbar");var d=e();d.addElement(f).fill("both").beforeRemoveClass("ion-page-invisible");if(o){d.duration(n.duration||200).easing("cubic-bezier(0.47,0,0.745,0.715)")}else{d.duration(n.duration||280).easing("cubic-bezier(0.36,0.66,0.04,1)").fromTo("transform","translateY("+i+")","translateY("+r+")").fromTo("opacity",.01,1)}if(u){var m=e();m.addElement(u);d.addAnimation(m)}if(c&&o){d.duration(n.duration||200).easing("cubic-bezier(0.47,0,0.745,0.715)");var l=e();l.addElement(t(c)).afterStyles({display:"none"}).fromTo("transform","translateY("+r+")","translateY("+i+")").fromTo("opacity",1,0);d.addAnimation(l)}return d}))}}}));