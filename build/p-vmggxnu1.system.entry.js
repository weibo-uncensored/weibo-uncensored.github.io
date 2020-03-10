var __awaiter=this&&this.__awaiter||function(e,t,n,r){function s(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function o(e){try{u(r.next(e))}catch(t){i(t)}}function a(e){try{u(r["throw"](e))}catch(t){i(t)}}function u(e){e.done?n(e.value):s(e.value).then(o,a)}u((r=r.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,s,i,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(e){return function(t){return u([e,t])}}function u(o){if(r)throw new TypeError("Generator is already executing.");while(n)try{if(r=1,s&&(i=o[0]&2?s["return"]:o[0]?s["throw"]||((i=s["return"])&&i.call(s),0):s.next)&&!(i=i.call(s,o[1])).done)return i;if(s=0,i)o=[o[0]&2,i.value];switch(o[0]){case 0:case 1:i=o;break;case 4:n.label++;return{value:o[1],done:false};case 5:n.label++;s=o[1];o=[0];continue;case 7:o=n.ops.pop();n.trys.pop();continue;default:if(!(i=n.trys,i=i.length>0&&i[i.length-1])&&(o[0]===6||o[0]===2)){n=0;continue}if(o[0]===3&&(!i||o[1]>i[0]&&o[1]<i[3])){n.label=o[1];break}if(o[0]===6&&n.label<i[1]){n.label=i[1];i=o;break}if(i&&n.label<i[2]){n.label=i[2];n.ops.push(o);break}if(i[2])n.ops.pop();n.trys.pop();continue}o=t.call(e,n)}catch(a){o=[6,a];s=0}finally{r=i=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};System.register(["./p-1fa942a3.system.js","./p-3f376874.system.js","./p-35047b4c.system.js","./p-9c9f2bdf.system.js","./p-65c980d9.system.js","./p-4e1706df.system.js","./p-41e02de2.system.js","./p-a51f0ae4.system.js","./p-01771c8d.system.js"],(function(e){"use strict";var t,n,r,s;return{setters:[function(e){t=e.r;n=e.h},function(){},function(){},function(){},function(){},function(){},function(e){r=e.e},function(){},function(e){s=e.U}],execute:function(){var i=function(){function e(){}e.prototype.submitSuggestions=function(e){return __awaiter(this,void 0,void 0,(function(){var t,n,s,i,o,a;return __generator(this,(function(u){switch(u.label){case 0:u.trys.push([0,3,,4]);if(e.length>r.limits.maxSubmissionLengthInBytes)return[2,{status:"error",error:"Maximum submission length exceeded"}];t=e.split("\n").map((function(e){return e.trim()}));if(t.length==0)return[2,{status:"error",error:"Please enter at least one hashtag or search term to add to the index."}];if(t.length>r.limits.maxItemsPerSubmission)return[2,{status:"error",error:"Please submit fewer than "+r.limits.maxItemsPerSubmission+" items at a time."}];n=[];s={searches:t,urls:n};console.log(JSON.stringify(s));return[4,fetch(r.endpoints.userSuggestionApi,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)})];case 1:i=u.sent();return[4,i.json()];case 2:o=u.sent();console.log(JSON.stringify(o));return[2,{status:"success",response:o}];case 3:a=u.sent();return[2,{status:"error",error:a}];case 4:return[2]}}))}))};return e}();var o=new i;var a=e("user_add_tags",function(){function e(e){t(this,e);this.prompt="Enter Weibo hashtags (e.g. #新型冠状病毒#) or search queries (e.g. 新型冠状病毒) that you would like to be monitored for censorship and regularly archived!";this.submitInProgress=false;this.suggestions=""}e.prototype.submitSuggestions=function(e){return __awaiter(this,void 0,void 0,(function(){var t,n;return __generator(this,(function(r){switch(r.label){case 0:this.submitInProgress=true;r.label=1;case 1:r.trys.push([1,3,,4]);return[4,o.submitSuggestions(this.suggestions)];case 2:t=r.sent();this.submitInProgress=false;if(t.status=="success"){alert("Thank you! Your suggestions have been received and will appear in the index shortly.");s.dismissModal()}else{alert(t.error)}return[3,4];case 3:n=r.sent();alert("Server error. Please try again later.");s.dismissModal();return[3,4];case 4:e.preventDefault();return[2]}}))}))};e.prototype.render=function(){var e=this;return[n("ion-list",null,n("ion-item",null,n("p",null,this.prompt)),n("ion-item",null,n("ion-label",{position:"stacked"},"Enter Topics Below"),n("ion-textarea",{class:"tall",disabled:this.submitInProgress,placeholder:"Enter 1 item per line. Max 1000 lines",onInput:function(t){e.suggestions=t["target"]["value"]}}))),n("div",{class:"ion-padding"},n("ion-button",{disabled:this.submitInProgress,onClick:function(t){e.submitSuggestions(t);t.preventDefault()},expand:"block",type:"submit",class:"ion-no-margin"},"Add Search Terms"))]};Object.defineProperty(e,"style",{get:function(){return":host{display:block}ion-textarea.tall{height:120px}"},enumerable:true,configurable:true});return e}())}}}));