var __awaiter=this&&this.__awaiter||function(e,n,t,r){function i(e){return e instanceof t?e:new t((function(n){n(e)}))}return new(t||(t=Promise))((function(t,a){function o(e){try{u(r.next(e))}catch(n){a(n)}}function s(e){try{u(r["throw"](e))}catch(n){a(n)}}function u(e){e.done?t(e.value):i(e.value).then(o,s)}u((r=r.apply(e,n||[])).next())}))};var __generator=this&&this.__generator||function(e,n){var t={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},r,i,a,o;return o={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function s(e){return function(n){return u([e,n])}}function u(o){if(r)throw new TypeError("Generator is already executing.");while(t)try{if(r=1,i&&(a=o[0]&2?i["return"]:o[0]?i["throw"]||((a=i["return"])&&a.call(i),0):i.next)&&!(a=a.call(i,o[1])).done)return a;if(i=0,a)o=[o[0]&2,a.value];switch(o[0]){case 0:case 1:a=o;break;case 4:t.label++;return{value:o[1],done:false};case 5:t.label++;i=o[1];o=[0];continue;case 7:o=t.ops.pop();t.trys.pop();continue;default:if(!(a=t.trys,a=a.length>0&&a[a.length-1])&&(o[0]===6||o[0]===2)){t=0;continue}if(o[0]===3&&(!a||o[1]>a[0]&&o[1]<a[3])){t.label=o[1];break}if(o[0]===6&&t.label<a[1]){t.label=a[1];a=o;break}if(a&&t.label<a[2]){t.label=a[2];t.ops.push(o);break}if(a[2])t.ops.pop();t.trys.pop();continue}o=n.call(e,t)}catch(s){o=[6,s];i=0}finally{r=a=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};System.register(["./p-1fa942a3.system.js","./p-4e1706df.system.js"],(function(e,n){"use strict";var t,r,i,a,o;return{setters:[function(e){t=e.w},function(e){r=e.a;i=e.c;a=e.d;o=e.b}],execute:function(){var s=this;var u=function(){return n.import("./p-d228d513.system.js")};var c=function(){return n.import("./p-72e9bbba.system.js")};var l=e("t",(function(e){return new Promise((function(n,r){t((function(){f(e);d(e).then((function(t){if(t.animation){t.animation.destroy()}v(e);n(t)}),(function(n){v(e);r(n)}))}))}))}));var f=function(e){var n=e.enteringEl;var t=e.leavingEl;L(n,t,e.direction);if(e.showGoBack){n.classList.add("can-go-back")}else{n.classList.remove("can-go-back")}C(n,false);if(t){C(t,false)}};var d=function(e){return __awaiter(s,void 0,void 0,(function(){var n,t;return __generator(this,(function(r){switch(r.label){case 0:return[4,p(e)];case 1:n=r.sent();t=n?h(n,e):b(e);return[2,t]}}))}))};var v=function(e){var n=e.enteringEl;var t=e.leavingEl;n.classList.remove("ion-page-invisible");if(t!==undefined){t.classList.remove("ion-page-invisible")}};var p=function(e){return __awaiter(s,void 0,void 0,(function(){var n,t;return __generator(this,(function(r){switch(r.label){case 0:if(!e.leavingEl||!e.animated||e.duration===0){return[2,undefined]}if(e.animationBuilder){return[2,e.animationBuilder]}if(!(e.mode==="ios"))return[3,2];return[4,u()];case 1:t=r.sent().iosTransitionAnimation;return[3,4];case 2:return[4,c()];case 3:t=r.sent().mdTransitionAnimation;r.label=4;case 4:n=t;return[2,n]}}))}))};var h=function(e,t){return __awaiter(s,void 0,void 0,(function(){var r,i,a,o;return __generator(this,(function(s){switch(s.label){case 0:return[4,m(t,true)];case 1:s.sent();s.label=2;case 2:s.trys.push([2,5,,6]);return[4,n.import("./p-6d75dbc3.system.js")];case 3:i=s.sent();return[4,i.create(e,t.baseEl,t)];case 4:r=s.sent();return[3,6];case 5:a=s.sent();r=e(t.baseEl,t);return[3,6];case 6:w(t.enteringEl,t.leavingEl);return[4,_(r,t)];case 7:o=s.sent();if(t.progressCallback){t.progressCallback(undefined)}if(o){y(t.enteringEl,t.leavingEl)}return[2,{hasCompleted:o,animation:r}]}}))}))};var b=function(e){return __awaiter(s,void 0,void 0,(function(){var n,t;return __generator(this,(function(r){switch(r.label){case 0:n=e.enteringEl;t=e.leavingEl;return[4,m(e,false)];case 1:r.sent();w(n,t);y(n,t);return[2,{hasCompleted:true}]}}))}))};var m=function(e,n){return __awaiter(s,void 0,void 0,(function(){var t,r;return __generator(this,(function(i){switch(i.label){case 0:t=e.deepWait!==undefined?e.deepWait:n;r=t?[x(e.enteringEl),x(e.leavingEl)]:[k(e.enteringEl),k(e.leavingEl)];return[4,Promise.all(r)];case 1:i.sent();return[4,g(e.viewIsReady,e.enteringEl)];case 2:i.sent();return[2]}}))}))};var g=function(e,n){return __awaiter(s,void 0,void 0,(function(){return __generator(this,(function(t){switch(t.label){case 0:if(!e)return[3,2];return[4,e(n)];case 1:t.sent();t.label=2;case 2:return[2]}}))}))};var _=function(e,n){var t=n.progressCallback;var r=new Promise((function(n){e.onFinish((function(t){if(typeof t==="number"){n(t===1)}else if(e.hasCompleted!==undefined){n(e.hasCompleted)}}))}));if(t){e.progressStart(true);t(e)}else{e.play()}return r};var w=function(e,n){E(n,r);E(e,i)};var y=function(e,n){E(e,a);E(n,o)};var E=e("l",(function(e,n){if(e){var t=new CustomEvent(n,{bubbles:false,cancelable:false});e.dispatchEvent(t)}}));var k=function(e){if(e&&e.componentOnReady){return e.componentOnReady()}return Promise.resolve()};var x=e("d",(function(e){return __awaiter(s,void 0,void 0,(function(){var n,t;return __generator(this,(function(r){switch(r.label){case 0:n=e;if(!n)return[3,4];if(!(n.componentOnReady!=null))return[3,2];return[4,n.componentOnReady()];case 1:t=r.sent();if(t!=null){return[2]}r.label=2;case 2:return[4,Promise.all(Array.from(n.children).map(x))];case 3:r.sent();r.label=4;case 4:return[2]}}))}))}));var C=e("s",(function(e,n){if(n){e.setAttribute("aria-hidden","true");e.classList.add("ion-page-hidden")}else{e.hidden=false;e.removeAttribute("aria-hidden");e.classList.remove("ion-page-hidden")}}));var L=function(e,n,t){if(e!==undefined){e.style.zIndex=t==="back"?"99":"101"}if(n!==undefined){n.style.zIndex="100"}};var P=e("g",(function(e){if(e.classList.contains("ion-page")){return e}var n=e.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs");if(n){return n}return e}))}}}));