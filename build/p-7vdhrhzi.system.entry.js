var __spreadArrays=this&&this.__spreadArrays||function(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;for(var s=Array(t),o=0,e=0;e<n;e++)for(var i=arguments[e],r=0,a=i.length;r<a;r++,o++)s[o]=i[r];return s};System.register(["./p-1fa942a3.system.js","./p-73f91672.system.js"],(function(t){"use strict";var e,n,s;return{setters:[function(t){e=t.r;n=t.h},function(t){s=t.W}],execute:function(){var o=25;var i=t("weibo_viewer",function(){function t(t){e(this,t);this.offset=0;this.posts=[];this.hashtags=[];this.currentSearchTxid=""}t.prototype.componentDidLoad=function(){var t=this;s.hashtags$.subscribe((function(e){console.log(JSON.stringify(e));var n=e.filter((function(t){return!t.tags["No-Results"]})).map((function(t){return{reads:t.data.reads,discuss:t.data.discuss,query:t.tags["Search-Query"],txid:t.id}}));t.hashtags=__spreadArrays(n)}));s.getHashtags(this.offset,o)};t.prototype.getNextPage=function(){this.offset+=o;s.getHashtags(this.offset,o)};t.prototype.render=function(){var t=this;return[n("ion-header",null,n("ion-toolbar",{color:"primary"},n("ion-title",null,"Sensitive Hashtags"))),n("ion-content",{class:"ion-padding"},n("p",null,"The following Weibo hashtags are known to be targets of censorship, shadow-banning, and/or are likely to be associated with content that the CCP does not want you to know about. For each hashtag, we archive the latest content from Weibo before it is taken down. Click any hashtag to browse the content in it's original form."),n("div",{class:"chinese-text"},n("ion-searchbar",null),n("ion-grid",null,n("ion-row",null,n("ion-col",{size:"4"},n("b",null,"Query")),n("ion-col",{size:"4"},n("b",null,"Views")),n("ion-col",{size:"4"},n("b",null,"Discussions"))),this.hashtags.map((function(t){return n("ion-row",null,n("ion-col",{size:"4"},n("ion-router-link",{href:"weibo-viewer/"+t.txid+"/posts"},t.query)),n("ion-col",{size:"4"},t.reads),n("ion-col",{size:"4"},t.discuss))}))),n("ion-button",{class:this.hashtags.length>0?"":"viewMoreHidden",onClick:function(e){t.getNextPage();console.log(e);return false},expand:"block",fill:"outline"},"View More...")))]};Object.defineProperty(t,"style",{get:function(){return":host{display:block}.hscroll{width:100%;overflow-y:auto}.min-500{min-width:900px!important;width:100%}.chinese-text{font-size:10px}.darkred{color:#c00!important}.viewMoreHidden{display:none}"},enumerable:true,configurable:true});return t}())}}}));