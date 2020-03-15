var __extends=this&&this.__extends||function(){var t=function(e,r){t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)if(e.hasOwnProperty(r))t[r]=e[r]};return t(e,r)};return function(e,r){t(e,r);function n(){this.constructor=e}e.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}();var __awaiter=this&&this.__awaiter||function(t,e,r,n){function i(t){return t instanceof r?t:new r((function(e){e(t)}))}return new(r||(r=Promise))((function(r,s){function o(t){try{u(n.next(t))}catch(e){s(e)}}function a(t){try{u(n["throw"](t))}catch(e){s(e)}}function u(t){t.done?r(t.value):i(t.value).then(o,a)}u((n=n.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var r={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},n,i,s,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(t){return function(e){return u([t,e])}}function u(o){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,i&&(s=o[0]&2?i["return"]:o[0]?i["throw"]||((s=i["return"])&&s.call(i),0):i.next)&&!(s=s.call(i,o[1])).done)return s;if(i=0,s)o=[o[0]&2,s.value];switch(o[0]){case 0:case 1:s=o;break;case 4:r.label++;return{value:o[1],done:false};case 5:r.label++;i=o[1];o=[0];continue;case 7:o=r.ops.pop();r.trys.pop();continue;default:if(!(s=r.trys,s=s.length>0&&s[s.length-1])&&(o[0]===6||o[0]===2)){r=0;continue}if(o[0]===3&&(!s||o[1]>s[0]&&o[1]<s[3])){r.label=o[1];break}if(o[0]===6&&r.label<s[1]){r.label=s[1];s=o;break}if(s&&r.label<s[2]){r.label=s[2];r.ops.push(o);break}if(s[2])r.ops.pop();r.trys.pop();continue}o=e.call(t,r)}catch(a){o=[6,a];i=0}finally{n=s=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};System.register(["./p-468ac7e0.system.js"],(function(t){"use strict";var e;return{setters:[function(t){e=t.e}],execute:function(){function r(t){return typeof t==="function"}var n=false;var i={Promise:undefined,set useDeprecatedSynchronousErrorHandling(t){if(t){var e=new Error;console.warn("DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n"+e.stack)}else if(n){console.log("RxJS: Back to a better error behavior. Thank you. <3")}n=t},get useDeprecatedSynchronousErrorHandling(){return n}};function s(t){setTimeout((function(){throw t}),0)}var o={closed:true,next:function(t){},error:function(t){if(i.useDeprecatedSynchronousErrorHandling){throw t}else{s(t)}},complete:function(){}};var a=function(){return Array.isArray||function(t){return t&&typeof t.length==="number"}}();function u(t){return t!==null&&typeof t==="object"}var c=function(){function t(t){Error.call(this);this.message=t?t.length+" errors occurred during unsubscription:\n"+t.map((function(t,e){return e+1+") "+t.toString()})).join("\n  "):"";this.name="UnsubscriptionError";this.errors=t;return this}t.prototype=Object.create(Error.prototype);return t}();var h=c;var l=function(){function t(t){this.closed=false;this._parentOrParents=null;this._subscriptions=null;if(t){this._unsubscribe=t}}t.prototype.unsubscribe=function(){var e;if(this.closed){return}var n=this,i=n._parentOrParents,s=n._unsubscribe,o=n._subscriptions;this.closed=true;this._parentOrParents=null;this._subscriptions=null;if(i instanceof t){i.remove(this)}else if(i!==null){for(var c=0;c<i.length;++c){var l=i[c];l.remove(this)}}if(r(s)){try{s.call(this)}catch(v){e=v instanceof h?f(v.errors):[v]}}if(a(o)){var c=-1;var p=o.length;while(++c<p){var d=o[c];if(u(d)){try{d.unsubscribe()}catch(v){e=e||[];if(v instanceof h){e=e.concat(f(v.errors))}else{e.push(v)}}}}}if(e){throw new h(e)}};t.prototype.add=function(e){var r=e;if(!e){return t.EMPTY}switch(typeof e){case"function":r=new t(e);case"object":if(r===this||r.closed||typeof r.unsubscribe!=="function"){return r}else if(this.closed){r.unsubscribe();return r}else if(!(r instanceof t)){var n=r;r=new t;r._subscriptions=[n]}break;default:{throw new Error("unrecognized teardown "+e+" added to Subscription.")}}var i=r._parentOrParents;if(i===null){r._parentOrParents=this}else if(i instanceof t){if(i===this){return r}r._parentOrParents=[i,this]}else if(i.indexOf(this)===-1){i.push(this)}else{return r}var s=this._subscriptions;if(s===null){this._subscriptions=[r]}else{s.push(r)}return r};t.prototype.remove=function(t){var e=this._subscriptions;if(e){var r=e.indexOf(t);if(r!==-1){e.splice(r,1)}}};return t}();l.EMPTY=function(t){t.closed=true;return t}(new l);function f(t){return t.reduce((function(t,e){return t.concat(e instanceof h?e.errors:e)}),[])}var p=function(){return typeof Symbol==="function"?Symbol("rxSubscriber"):"@@rxSubscriber_"+Math.random()}();var d=function(t){__extends(e,t);function e(r,n,i){var s=t.call(this)||this;s.syncErrorValue=null;s.syncErrorThrown=false;s.syncErrorThrowable=false;s.isStopped=false;switch(arguments.length){case 0:s.destination=o;break;case 1:if(!r){s.destination=o;break}if(typeof r==="object"){if(r instanceof e){s.syncErrorThrowable=r.syncErrorThrowable;s.destination=r;r.add(s)}else{s.syncErrorThrowable=true;s.destination=new v(s,r)}break}default:s.syncErrorThrowable=true;s.destination=new v(s,r,n,i);break}return s}e.prototype[p]=function(){return this};e.create=function(t,r,n){var i=new e(t,r,n);i.syncErrorThrowable=false;return i};e.prototype.next=function(t){if(!this.isStopped){this._next(t)}};e.prototype.error=function(t){if(!this.isStopped){this.isStopped=true;this._error(t)}};e.prototype.complete=function(){if(!this.isStopped){this.isStopped=true;this._complete()}};e.prototype.unsubscribe=function(){if(this.closed){return}this.isStopped=true;t.prototype.unsubscribe.call(this)};e.prototype._next=function(t){this.destination.next(t)};e.prototype._error=function(t){this.destination.error(t);this.unsubscribe()};e.prototype._complete=function(){this.destination.complete();this.unsubscribe()};e.prototype._unsubscribeAndRecycle=function(){var t=this._parentOrParents;this._parentOrParents=null;this.unsubscribe();this.closed=false;this.isStopped=false;this._parentOrParents=t;return this};return e}(l);var v=function(t){__extends(e,t);function e(e,n,i,s){var a=t.call(this)||this;a._parentSubscriber=e;var u;var c=a;if(r(n)){u=n}else if(n){u=n.next;i=n.error;s=n.complete;if(n!==o){c=Object.create(n);if(r(c.unsubscribe)){a.add(c.unsubscribe.bind(c))}c.unsubscribe=a.unsubscribe.bind(a)}}a._context=c;a._next=u;a._error=i;a._complete=s;return a}e.prototype.next=function(t){if(!this.isStopped&&this._next){var e=this._parentSubscriber;if(!i.useDeprecatedSynchronousErrorHandling||!e.syncErrorThrowable){this.__tryOrUnsub(this._next,t)}else if(this.__tryOrSetError(e,this._next,t)){this.unsubscribe()}}};e.prototype.error=function(t){if(!this.isStopped){var e=this._parentSubscriber;var r=i.useDeprecatedSynchronousErrorHandling;if(this._error){if(!r||!e.syncErrorThrowable){this.__tryOrUnsub(this._error,t);this.unsubscribe()}else{this.__tryOrSetError(e,this._error,t);this.unsubscribe()}}else if(!e.syncErrorThrowable){this.unsubscribe();if(r){throw t}s(t)}else{if(r){e.syncErrorValue=t;e.syncErrorThrown=true}else{s(t)}this.unsubscribe()}}};e.prototype.complete=function(){var t=this;if(!this.isStopped){var e=this._parentSubscriber;if(this._complete){var r=function(){return t._complete.call(t._context)};if(!i.useDeprecatedSynchronousErrorHandling||!e.syncErrorThrowable){this.__tryOrUnsub(r);this.unsubscribe()}else{this.__tryOrSetError(e,r);this.unsubscribe()}}else{this.unsubscribe()}}};e.prototype.__tryOrUnsub=function(t,e){try{t.call(this._context,e)}catch(r){this.unsubscribe();if(i.useDeprecatedSynchronousErrorHandling){throw r}else{s(r)}}};e.prototype.__tryOrSetError=function(t,e,r){if(!i.useDeprecatedSynchronousErrorHandling){throw new Error("bad call")}try{e.call(this._context,r)}catch(n){if(i.useDeprecatedSynchronousErrorHandling){t.syncErrorValue=n;t.syncErrorThrown=true;return true}else{s(n);return true}}return false};e.prototype._unsubscribe=function(){var t=this._parentSubscriber;this._context=null;this._parentSubscriber=null;t.unsubscribe()};return e}(d);function g(t){while(t){var e=t.closed,r=t.destination,n=t.isStopped;if(e||n){return false}else if(r&&r instanceof d){t=r}else{t=null}}return true}function _(t,e,r){if(t){if(t instanceof d){return t}if(t[p]){return t[p]()}}if(!t&&!e&&!r){return new d(o)}return new d(t,e,r)}var b=function(){return typeof Symbol==="function"&&Symbol.observable||"@@observable"}();function y(){}function w(t){if(!t){return y}if(t.length===1){return t[0]}return function e(r){return t.reduce((function(t,e){return e(t)}),r)}}var m=function(){function t(t){this._isScalar=false;if(t){this._subscribe=t}}t.prototype.lift=function(e){var r=new t;r.source=this;r.operator=e;return r};t.prototype.subscribe=function(t,e,r){var n=this.operator;var s=_(t,e,r);if(n){s.add(n.call(s,this.source))}else{s.add(this.source||i.useDeprecatedSynchronousErrorHandling&&!s.syncErrorThrowable?this._subscribe(s):this._trySubscribe(s))}if(i.useDeprecatedSynchronousErrorHandling){if(s.syncErrorThrowable){s.syncErrorThrowable=false;if(s.syncErrorThrown){throw s.syncErrorValue}}}return s};t.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(e){if(i.useDeprecatedSynchronousErrorHandling){t.syncErrorThrown=true;t.syncErrorValue=e}if(g(t)){t.error(e)}else{console.warn(e)}}};t.prototype.forEach=function(t,e){var r=this;e=x(e);return new e((function(e,n){var i;i=r.subscribe((function(e){try{t(e)}catch(r){n(r);if(i){i.unsubscribe()}}}),n,e)}))};t.prototype._subscribe=function(t){var e=this.source;return e&&e.subscribe(t)};t.prototype[b]=function(){return this};t.prototype.pipe=function(){var t=[];for(var e=0;e<arguments.length;e++){t[e]=arguments[e]}if(t.length===0){return this}return w(t)(this)};t.prototype.toPromise=function(t){var e=this;t=x(t);return new t((function(t,r){var n;e.subscribe((function(t){return n=t}),(function(t){return r(t)}),(function(){return t(n)}))}))};return t}();m.create=function(t){return new m(t)};function x(t){if(!t){t=Promise}if(!t){throw new Error("no Promise impl found")}return t}var T=function(){function t(){Error.call(this);this.message="object unsubscribed";this.name="ObjectUnsubscribedError";return this}t.prototype=Object.create(Error.prototype);return t}();var S=T;var E=function(t){__extends(e,t);function e(e,r){var n=t.call(this)||this;n.subject=e;n.subscriber=r;n.closed=false;return n}e.prototype.unsubscribe=function(){if(this.closed){return}this.closed=true;var t=this.subject;var e=t.observers;this.subject=null;if(!e||e.length===0||t.isStopped||t.closed){return}var r=e.indexOf(this.subscriber);if(r!==-1){e.splice(r,1)}};return e}(l);var O=function(t){__extends(e,t);function e(e){var r=t.call(this,e)||this;r.destination=e;return r}return e}(d);var P=function(t){__extends(e,t);function e(){var e=t.call(this)||this;e.observers=[];e.closed=false;e.isStopped=false;e.hasError=false;e.thrownError=null;return e}e.prototype[p]=function(){return new O(this)};e.prototype.lift=function(t){var e=new k(this,this);e.operator=t;return e};e.prototype.next=function(t){if(this.closed){throw new S}if(!this.isStopped){var e=this.observers;var r=e.length;var n=e.slice();for(var i=0;i<r;i++){n[i].next(t)}}};e.prototype.error=function(t){if(this.closed){throw new S}this.hasError=true;this.thrownError=t;this.isStopped=true;var e=this.observers;var r=e.length;var n=e.slice();for(var i=0;i<r;i++){n[i].error(t)}this.observers.length=0};e.prototype.complete=function(){if(this.closed){throw new S}this.isStopped=true;var t=this.observers;var e=t.length;var r=t.slice();for(var n=0;n<e;n++){r[n].complete()}this.observers.length=0};e.prototype.unsubscribe=function(){this.isStopped=true;this.closed=true;this.observers=null};e.prototype._trySubscribe=function(e){if(this.closed){throw new S}else{return t.prototype._trySubscribe.call(this,e)}};e.prototype._subscribe=function(t){if(this.closed){throw new S}else if(this.hasError){t.error(this.thrownError);return l.EMPTY}else if(this.isStopped){t.complete();return l.EMPTY}else{this.observers.push(t);return new E(this,t)}};e.prototype.asObservable=function(){var t=new m;t.source=this;return t};return e}(m);P.create=function(t,e){return new k(t,e)};var k=function(t){__extends(e,t);function e(e,r){var n=t.call(this)||this;n.destination=e;n.source=r;return n}e.prototype.next=function(t){var e=this.destination;if(e&&e.next){e.next(t)}};e.prototype.error=function(t){var e=this.destination;if(e&&e.error){this.destination.error(t)}};e.prototype.complete=function(){var t=this.destination;if(t&&t.complete){this.destination.complete()}};e.prototype._subscribe=function(t){var e=this.source;if(e){return this.source.subscribe(t)}else{return l.EMPTY}};return e}(P);var I=function(t){__extends(e,t);function e(e){var r=t.call(this)||this;r._value=e;return r}Object.defineProperty(e.prototype,"value",{get:function(){return this.getValue()},enumerable:true,configurable:true});e.prototype._subscribe=function(e){var r=t.prototype._subscribe.call(this,e);if(r&&!r.closed){e.next(this._value)}return r};e.prototype.getValue=function(){if(this.hasError){throw this.thrownError}else if(this.closed){throw new S}else{return this._value}};e.prototype.next=function(e){t.prototype.next.call(this,this._value=e)};return e}(P);var A=window["Arweave"].init({host:"arweave.net",port:443,protocol:"https",timeout:3e5,logging:false});var j=A.utils;var H=function(){function t(){}t.prototype.get=function(t,e){if(!Object.getOwnPropertyNames(this).includes(t)){throw new Error('Field "'+t+'" is not a property of the Arweave Transaction class.')}if(e&&e.decode==true){if(e&&e.string){return j.b64UrlToString(this[t])}return j.b64UrlToBuffer(this[t])}return this[t]};return t}();var B=function(t){__extends(e,t);function e(e,r,n){if(n===void 0){n=false}var i=t.call(this)||this;i.name=e;i.value=r;return i}return e}(H);var C=function(t){__extends(e,t);function e(e){if(e===void 0){e={}}var r=t.call(this)||this;r.id="";r.last_tx="";r.owner="";r.tags=[];r.target="";r.quantity="0";r.data="";r.reward="0";r.signature="";Object.assign(r,e);if(e.tags){r.tags=e.tags.map((function(t){return new B(t.name,t.value)}))}return r}e.prototype.addTag=function(t,e){this.tags.push(new B(j.stringToB64Url(t),j.stringToB64Url(e)))};e.prototype.toJSON=function(){return{id:this.id,last_tx:this.last_tx,owner:this.owner,tags:this.tags,target:this.target,quantity:this.quantity,data:this.data,reward:this.reward,signature:this.signature}};e.prototype.setSignature=function(t){var e=t.signature,r=t.id;this.signature=e;this.id=r};e.prototype.getSignatureData=function(){var t=this.tags.reduce((function(t,e){return t+e.get("name",{decode:true,string:true})+e.get("value",{decode:true,string:true})}),"");return j.concatBuffers([this.get("owner",{decode:true,string:false}),this.get("target",{decode:true,string:false}),this.get("data",{decode:true,string:false}),j.stringToBuffer(this.quantity),j.stringToBuffer(this.reward),this.get("last_tx",{decode:true,string:false}),j.stringToBuffer(t)])};return e}(H);var N={arql:function(t){return __awaiter(this,void 0,void 0,(function(){var r,n,i;return __generator(this,(function(s){switch(s.label){case 0:s.trys.push([0,2,,3]);return[4,fetch(e.endpoints.carrierPigeonUrl+"/arql",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})];case 1:r=s.sent();n=r.json();return[2,n];case 2:i=s.sent();console.log("carrier piegon: fail on /arql: "+i);return[3,3];case 3:return[2]}}))}))},getTransaction:function(t){return __awaiter(this,void 0,void 0,(function(){var r,n,i;return __generator(this,(function(s){switch(s.label){case 0:s.trys.push([0,3,,4]);return[4,fetch(e.endpoints.carrierPigeonUrl+"/tx/"+t+"?part=all",{method:"GET"})];case 1:r=s.sent();return[4,r.json()];case 2:n=s.sent();return[2,new C(n)];case 3:i=s.sent();console.log("carrier piegon: fail on /tx: "+i);return[3,4];case 4:return[2]}}))}))},getTags:function(t){return __awaiter(this,void 0,void 0,(function(){var r,n,i,s;return __generator(this,(function(o){switch(o.label){case 0:o.trys.push([0,3,,4]);return[4,fetch(e.endpoints.carrierPigeonUrl+"/tx/"+t+"?part=tags",{method:"GET"})];case 1:r=o.sent();return[4,r.json()];case 2:n=o.sent();i=[];n.forEach((function(t){i.push(new B(t.name,t.value))}));return[2,i];case 3:s=o.sent();console.log("carrier piegon: fail on /tx: "+s);return[3,4];case 4:return[2]}}))}))}};function R(t,e){return{op:"equals",expr1:t,expr2:e}}function D(){var t=[];for(var e=0;e<arguments.length;e++){t[e]=arguments[e]}if(t.length==0){throw new Error("0 arguments pass to and()")}if(t.length==1){return t[0]}var r={op:"and",expr1:t.shift(),expr2:t.length>1?D.apply(void 0,t):t[0]};return r}function V(t,e){return e={exports:{}},t(e,e.exports),e.exports}function W(t,e){if(typeof e==="boolean"){e={forever:e}}this._originalTimeouts=JSON.parse(JSON.stringify(t));this._timeouts=t;this._options=e||{};this._maxRetryTime=e&&e.maxRetryTime||Infinity;this._fn=null;this._errors=[];this._attempts=1;this._operationTimeout=null;this._operationTimeoutCb=null;this._timeout=null;this._operationStart=null;if(this._options.forever){this._cachedTimeouts=this._timeouts.slice(0)}}var J=W;W.prototype.reset=function(){this._attempts=1;this._timeouts=this._originalTimeouts};W.prototype.stop=function(){if(this._timeout){clearTimeout(this._timeout)}this._timeouts=[];this._cachedTimeouts=null};W.prototype.retry=function(t){if(this._timeout){clearTimeout(this._timeout)}if(!t){return false}var e=(new Date).getTime();if(t&&e-this._operationStart>=this._maxRetryTime){this._errors.unshift(new Error("RetryOperation timeout occurred"));return false}this._errors.push(t);var r=this._timeouts.shift();if(r===undefined){if(this._cachedTimeouts){this._errors.splice(this._errors.length-1,this._errors.length);this._timeouts=this._cachedTimeouts.slice(0);r=this._timeouts.shift()}else{return false}}var n=this;var i=setTimeout((function(){n._attempts++;if(n._operationTimeoutCb){n._timeout=setTimeout((function(){n._operationTimeoutCb(n._attempts)}),n._operationTimeout);if(n._options.unref){n._timeout.unref()}}n._fn(n._attempts)}),r);if(this._options.unref){i.unref()}return true};W.prototype.attempt=function(t,e){this._fn=t;if(e){if(e.timeout){this._operationTimeout=e.timeout}if(e.cb){this._operationTimeoutCb=e.cb}}var r=this;if(this._operationTimeoutCb){this._timeout=setTimeout((function(){r._operationTimeoutCb()}),r._operationTimeout)}this._operationStart=(new Date).getTime();this._fn(this._attempts)};W.prototype.try=function(t){console.log("Using RetryOperation.try() is deprecated");this.attempt(t)};W.prototype.start=function(t){console.log("Using RetryOperation.start() is deprecated");this.attempt(t)};W.prototype.start=W.prototype.try;W.prototype.errors=function(){return this._errors};W.prototype.attempts=function(){return this._attempts};W.prototype.mainError=function(){if(this._errors.length===0){return null}var t={};var e=null;var r=0;for(var n=0;n<this._errors.length;n++){var i=this._errors[n];var s=i.message;var o=(t[s]||0)+1;t[s]=o;if(o>=r){e=i;r=o}}return e};var U=V((function(t,e){e.operation=function(t){var r=e.timeouts(t);return new J(r,{forever:t&&t.forever,unref:t&&t.unref,maxRetryTime:t&&t.maxRetryTime})};e.timeouts=function(t){if(t instanceof Array){return[].concat(t)}var e={retries:10,factor:2,minTimeout:1*1e3,maxTimeout:Infinity,randomize:false};for(var r in t){e[r]=t[r]}if(e.minTimeout>e.maxTimeout){throw new Error("minTimeout is greater than maxTimeout")}var n=[];for(var i=0;i<e.retries;i++){n.push(this.createTimeout(i,e))}if(t&&t.forever&&!n.length){n.push(this.createTimeout(i,e))}n.sort((function(t,e){return t-e}));return n};e.createTimeout=function(t,e){var r=e.randomize?Math.random()+1:1;var n=Math.round(r*e.minTimeout*Math.pow(e.factor,t));n=Math.min(n,e.maxTimeout);return n};e.wrap=function(t,r,n){if(r instanceof Array){n=r;r=null}if(!n){n=[];for(var i in t){if(typeof t[i]==="function"){n.push(i)}}}for(var s=0;s<n.length;s++){var o=n[s];var a=t[o];t[o]=function n(i){var s=e.operation(r);var o=Array.prototype.slice.call(arguments,1);var a=o.pop();o.push((function(t){if(s.retry(t)){return}if(t){arguments[0]=s.mainError()}a.apply(this,arguments)}));s.attempt((function(){i.apply(t,o)}))}.bind(t,a);t[o].options=r}}}));var $=U;function q(t,e){function r(r,n){var i=e||{};if(!("randomize"in i)){i.randomize=true}var s=$.operation(i);function o(t){n(t||new Error("Aborted"))}function a(t,e){if(t.bail){o(t);return}if(!s.retry(t)){n(s.mainError())}else if(i.onRetry){i.onRetry(t,e)}}function u(e){var n;try{n=t(o,e)}catch(i){a(i,e);return}Promise.resolve(n).then(r).catch((function t(r){a(r,e)}))}s.attempt(u)}return new Promise(r)}var M=q;var z=function(){function t(){this.arweaveSdk=window["Arweave"].init({host:"arweave.net",port:443,protocol:"https",timeout:3e5,logging:false});this._currentWallet={address:"",balance:0,keystore:null,rawJson:""};this._allChannels=[];this._currentChannel={};console.log("ArweaveServiceService constructor");this.getNetworkStatus((function(t){return console.log(t)}));this.currentWallet$=new I(this._currentWallet);this.allChannels$=new I(this._allChannels);this.currentChannel$=new I(this._currentChannel)}Object.defineProperty(t,"defaultInstance",{get:function(){if(t._instance==null){t._instance=new t}return t._instance},enumerable:true,configurable:true});t.prototype.loadWallet=function(t){return __awaiter(this,void 0,void 0,(function(){var e;var r=this;return __generator(this,(function(n){try{e=JSON.parse(t);this.arweaveSdk.wallets.jwkToAddress(e).then((function(t){r.arweaveSdk.wallets.getBalance(t).then((function(n){r._currentWallet={address:t,balance:n,keystore:e,rawJson:JSON.stringify(e,null,2)};r.currentWallet$.next(r._currentWallet);if(n<1e5){console.log("Balance extremely low, app may not work. Visit tokens.arweave.org and get a new wallet + 1.00000 AR in free tokens")}}))}))}catch(i){console.log(JSON.stringify(i,null,2));alert("Not an Arweave wallet file! Visit tokens.arweave.org and get a new wallet + 1.00000 AR in free tokens")}return[2]}))}))};t.prototype.getItemRaw=function(t){return __awaiter(this,void 0,void 0,(function(){var e,r,n,i;return __generator(this,(function(s){switch(s.label){case 0:return[4,this.arweaveSdk.transactions.get(t)];case 1:e=s.sent();r=e.get("data",{decode:true});n={};e.get("tags").forEach((function(t){var e=t.get("name",{decode:true,string:true});var r=t.get("value",{decode:true,string:true});console.log(e+" : "+r);n[e]=r}));i={id:t,data:r,tags:n};return[2,i]}}))}))};t.prototype.getTagsOnly=function(t){return __awaiter(this,void 0,void 0,(function(){var e,r,n;return __generator(this,(function(i){switch(i.label){case 0:e={};return[4,N.getTags(t)];case 1:r=i.sent();r.forEach((function(t){var r=t.get("name",{decode:true,string:true});var n=t.get("value",{decode:true,string:true});console.log(r+" : "+n);e[r]=n}));n={id:t,data:null,tags:e};return[2,n]}}))}))};t.prototype.getItemByTxId=function(t){return __awaiter(this,void 0,void 0,(function(){var e,r,n,i;return __generator(this,(function(s){switch(s.label){case 0:return[4,N.getTransaction(t)];case 1:e=s.sent();r=JSON.parse(e.get("data",{decode:true,string:true}));n={};e.get("tags").forEach((function(t){var e=t.get("name",{decode:true,string:true});var r=t.get("value",{decode:true,string:true});console.log(e+" : "+r);n[e]=r}));i={id:t,data:r,tags:n};return[2,i]}}))}))};t.prototype.getTransactionsByTags=function(t){return __awaiter(this,void 0,void 0,(function(){var e;var r=this;return __generator(this,(function(n){switch(n.label){case 0:e=[];return[4,M((function(){return __awaiter(r,void 0,void 0,(function(){var r;return __generator(this,(function(n){switch(n.label){case 0:r=D.apply(void 0,t.map((function(t){return R(t.name,t.value.toString())})));return[4,N.arql(r)];case 1:e=n.sent();console.log("retrieved "+e.length+" transaction ids matching your query");return[2]}}))}))}),{retries:10})];case 1:n.sent();return[2,e]}}))}))};t.prototype.loginWithWalletString=function(t){var e=this;try{var r=JSON.parse(t);this.arweaveSdk.wallets.jwkToAddress(r).then((function(t){e.arweaveSdk.wallets.getBalance(t).then((function(n){e._currentWallet={address:t,balance:n,keystore:r,rawJson:JSON.stringify(r,null,2)};e.currentWallet$.next(e._currentWallet);if(n<1e5){console.log("Balance extremely low, app may not work. Visit tokens.arweave.org and get a new wallet + 1.00000 AR in free tokens")}}))}))}catch(n){console.log(JSON.stringify(n,null,2));alert("Not an Arweave wallet file! Visit tokens.arweave.org and get a new wallet + 1.00000 AR in free tokens")}};t.prototype.loginWithWalletFile=function(t){var e=this;var r=new FileReader;r.readAsText(t);r.onloadend=function(){e.loginWithWalletString(r.result)}};t.prototype.getNetworkStatus=function(t){this.arweaveSdk.network.getInfo().then((function(e){return t(e)}))};return t}();z._instance=null;var Y=function(){function t(){this.censoredHashtagStrings=[];this.censoredHashtags=[];this.hashtagIndex=[];this.hashtagIndex$=new I([]);this.censoredPostIndex=[];this.censoredPostIndex$=new I([]);this.postTxids=[];this.posts=[];this.posts$=new I([]);this.arweaveService=z.defaultInstance}t.prototype.getPostByTxid=function(t){return __awaiter(this,void 0,void 0,(function(){var e;return __generator(this,(function(r){switch(r.label){case 0:e=this.posts.find((function(e){return e.txid==t}));if(!!e)return[3,2];return[4,this.arweaveService.getTagsOnly(t)];case 1:e=r.sent();r.label=2;case 2:return[2,e]}}))}))};t.prototype.getCensoredPostIndex=function(t,e,r){if(r===void 0){r=false}return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(n){switch(n.label){case 0:if(!(this.censoredPostIndex.length==0||r))return[3,2];return[4,this.generateCensoredPostIndex()];case 1:n.sent();n.label=2;case 2:this.censoredPostIndex$.next(this.censoredPostIndex.slice(t,e+t));return[2]}}))}))};t.prototype.generateCensoredPostIndex=function(){return __awaiter(this,void 0,void 0,(function(){var t,r,n;return __generator(this,(function(i){switch(i.label){case 0:t=[{name:"App-Name",value:"weibot-censored-posts"},{name:"App-Version",value:e.appVersion}];return[4,this.arweaveService.getTransactionsByTags(t)];case 1:r=i.sent();return[4,this.arweaveService.getItemByTxId(r[0])];case 2:n=i.sent();this.censoredPostIndex=n.data.map((function(t){return{txid:t[0],lastUpdate:t[1],censoredType:t[2]}}));return[2]}}))}))};t.prototype.getPostsForCurrentHashtag=function(t,e){return __awaiter(this,void 0,void 0,(function(){var r,n,i;return __generator(this,(function(s){switch(s.label){case 0:r=this.postTxids.slice(t,e+t);n=0;s.label=1;case 1:if(!(n<r.length))return[3,4];return[4,this.arweaveService.getTagsOnly(r[n])];case 2:i=s.sent();this.posts.push(i);s.label=3;case 3:n++;return[3,1];case 4:this.posts$.next(this.posts);return[2]}}))}))};t.prototype.getPostsByHashtag=function(t,e,r){return __awaiter(this,void 0,void 0,(function(){var n,i,s,o,a,u;return __generator(this,(function(c){switch(c.label){case 0:this.posts=[];this.posts$.next(this.posts);n=[{name:"App-Name",value:"weibot-search-weibs"},{name:t,value:1}];i=this;return[4,this.arweaveService.getTransactionsByTags(n)];case 1:i.postTxids=c.sent();s=this.postTxids.slice(e,r+e);if(!(this.censoredPostIndex.length==0))return[3,3];return[4,this.generateCensoredPostIndex];case 2:c.sent();c.label=3;case 3:o=0;c.label=4;case 4:if(!(o<s.length))return[3,7];return[4,this.arweaveService.getTagsOnly(s[o])];case 5:a=c.sent();u=this.censoredPostIndex.filter((function(t){return t.txid==s[o]})).length>0;a.tags["CENSORSHIP"]=u?this.censoredPostIndex.filter((function(t){return t.txid==s[o]}))[0]:null;this.posts.push(a);c.label=6;case 6:o++;return[3,4];case 7:this.posts$.next(this.posts);return[2]}}))}))};t.prototype.getCensoredHashtags=function(t){if(t===void 0){t=false}return __awaiter(this,void 0,void 0,(function(){var r,n,i;return __generator(this,(function(s){switch(s.label){case 0:if(!(this.censoredHashtagStrings.length==0||t))return[3,3];r=[{name:"App-Name",value:"weibot-censored-hashtags"},{name:"App-Version",value:e.appVersion}];return[4,this.arweaveService.getTransactionsByTags(r)];case 1:n=s.sent();return[4,this.arweaveService.getItemByTxId(n[0])];case 2:i=s.sent();this.censoredHashtagStrings=i.data.map((function(t){return t[0]}));this.censoredHashtags=i.data.map((function(t){return{hashtag:t[0],count:t[1],censored:true}})).sort((function(t,e){return e.count-t.count}));s.label=3;case 3:return[2,this.censoredHashtagStrings]}}))}))};t.prototype.getHashtagIndex=function(t,r,n){if(n===void 0){n=false}return __awaiter(this,void 0,void 0,(function(){var i,s,o;var a=this;return __generator(this,(function(u){switch(u.label){case 0:return[4,this.getCensoredHashtags()];case 1:u.sent();if(!(this.hashtagIndex.length==0||n))return[3,4];i=[{name:"App-Name",value:"weibot-search-index"},{name:"App-Version",value:e.appVersion},{name:"Search-Type",value:"hashtag"}];return[4,this.arweaveService.getTransactionsByTags(i)];case 2:s=u.sent();return[4,this.arweaveService.getItemByTxId(s[0])];case 3:o=u.sent();this.hashtagIndex=o.data.map((function(t){return{hashtag:t[0],count:t[1],censored:a.censoredHashtagStrings.includes(t[0])}}));if(this.censoredPostIndex.length==0)this.generateCensoredPostIndex();u.label=4;case 4:this.hashtagIndex$.next(this.hashtagIndex.slice(t,r+t));return[2]}}))}))};return t}();var F=t("W",new Y)}}}));