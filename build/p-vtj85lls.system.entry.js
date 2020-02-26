var __awaiter=this&&this.__awaiter||function(e,t,n,i){function r(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,o){function s(e){try{u(i.next(e))}catch(t){o(t)}}function a(e){try{u(i["throw"](e))}catch(t){o(t)}}function u(e){e.done?n(e.value):r(e.value).then(s,a)}u((i=i.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},i,r,o,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(e){return function(t){return u([e,t])}}function u(s){if(i)throw new TypeError("Generator is already executing.");while(n)try{if(i=1,r&&(o=s[0]&2?r["return"]:s[0]?r["throw"]||((o=r["return"])&&o.call(r),0):r.next)&&!(o=o.call(r,s[1])).done)return o;if(r=0,o)s=[s[0]&2,o.value];switch(s[0]){case 0:case 1:o=s;break;case 4:n.label++;return{value:s[1],done:false};case 5:n.label++;r=s[1];s=[0];continue;case 7:s=n.ops.pop();n.trys.pop();continue;default:if(!(o=n.trys,o=o.length>0&&o[o.length-1])&&(s[0]===6||s[0]===2)){n=0;continue}if(s[0]===3&&(!o||s[1]>o[0]&&s[1]<o[3])){n.label=s[1];break}if(s[0]===6&&n.label<o[1]){n.label=o[1];o=s;break}if(o&&n.label<o[2]){n.label=o[2];n.ops.push(s);break}if(o[2])n.ops.pop();n.trys.pop();continue}s=t.call(e,n)}catch(a){s=[6,a];r=0}finally{i=o=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};System.register(["./p-1fa942a3.system.js","./p-35047b4c.system.js","./p-2294249a.system.js","./p-d5230e6c.system.js","./p-9bedbd33.system.js"],(function(e){"use strict";var t,n,i,r,o,s,a,u,l,c,h,p,f;return{setters:[function(e){t=e.r;n=e.f;i=e.c;r=e.h;o=e.H;s=e.e},function(e){a=e.f;u=e.b},function(e){l=e.h},function(e){c=e.h;h=e.j;p=e.k},function(e){f=e.w}],execute:function(){var d=e("ion_select",function(){function e(e){var i=this;t(this,e);this.inputId="ion-sel-"+x++;this.didInit=false;this.isExpanded=false;this.disabled=false;this.cancelText="Cancel";this.okText="OK";this.name=this.inputId;this.multiple=false;this.interface="alert";this.interfaceOptions={};this.onClick=function(e){i.setFocus();i.open(e)};this.onFocus=function(){i.ionFocus.emit()};this.onBlur=function(){i.ionBlur.emit()};this.ionChange=n(this,"ionChange",7);this.ionCancel=n(this,"ionCancel",7);this.ionFocus=n(this,"ionFocus",7);this.ionBlur=n(this,"ionBlur",7);this.ionStyle=n(this,"ionStyle",7)}e.prototype.disabledChanged=function(){this.emitStyle()};e.prototype.valueChanged=function(){this.updateOptions();this.emitStyle();if(this.didInit){this.ionChange.emit({value:this.value})}};e.prototype.connectedCallback=function(){return __awaiter(this,void 0,void 0,(function(){var e,e;var t=this;return __generator(this,(function(n){if(this.value===undefined){if(this.multiple){e=this.childOpts.filter((function(e){return e.selected}));this.value=e.map((function(e){return v(e)}))}else{e=this.childOpts.find((function(e){return e.selected}));if(e){this.value=v(e)}}}this.updateOptions();this.updateOverlayOptions();this.emitStyle();this.mutationO=f(this.el,"ion-select-option",(function(){return __awaiter(t,void 0,void 0,(function(){return __generator(this,(function(e){this.updateOptions();this.updateOverlayOptions();return[2]}))}))}));return[2]}))}))};e.prototype.disconnectedCallback=function(){if(this.mutationO){this.mutationO.disconnect();this.mutationO=undefined}};e.prototype.componentDidLoad=function(){this.didInit=true};e.prototype.open=function(e){return __awaiter(this,void 0,void 0,(function(){var t,n;var i=this;return __generator(this,(function(r){switch(r.label){case 0:if(this.disabled||this.isExpanded){return[2,undefined]}n=this;return[4,this.createOverlay(e)];case 1:t=n.overlay=r.sent();this.isExpanded=true;t.onDidDismiss().then((function(){i.overlay=undefined;i.isExpanded=false;i.setFocus()}));return[4,t.present()];case 2:r.sent();return[2,t]}}))}))};e.prototype.createOverlay=function(e){var t=this.interface;if((t==="action-sheet"||t==="popover")&&this.multiple){console.warn('Select interface cannot be "'+t+'" with a multi-value select. Using the "alert" interface instead.');t="alert"}if(t==="popover"&&!e){console.warn('Select interface cannot be a "popover" without passing an event. Using the "alert" interface instead.');t="alert"}if(t==="popover"){return this.openPopover(e)}if(t==="action-sheet"){return this.openActionSheet()}return this.openAlert()};e.prototype.updateOverlayOptions=function(){var e=this.overlay;if(!e){return}var t=this.childOpts;switch(this.interface){case"action-sheet":e.buttons=this.createActionSheetButtons(t);break;case"popover":var n=e.querySelector("ion-select-popover");if(n){n.options=this.createPopoverOptions(t)}break;case"alert":var i=this.multiple?"checkbox":"radio";e.inputs=this.createAlertInputs(t,i);break}};e.prototype.createActionSheetButtons=function(e){var t=this;var n=e.map((function(e){return{role:e.selected?"selected":"",text:e.textContent,handler:function(){t.value=v(e)}}}));n.push({text:this.cancelText,role:"cancel",handler:function(){t.ionCancel.emit()}});return n};e.prototype.createAlertInputs=function(e,t){return e.map((function(e){return{type:t,label:e.textContent,value:v(e),checked:e.selected,disabled:e.disabled}}))};e.prototype.createPopoverOptions=function(e){var t=this;return e.map((function(e){var n=v(e);return{text:e.textContent,value:n,checked:e.selected,disabled:e.disabled,handler:function(){t.value=n;t.close()}}}))};e.prototype.openPopover=function(e){return __awaiter(this,void 0,void 0,(function(){var t,n,r;return __generator(this,(function(o){t=this.interfaceOptions;n=i(this);r=Object.assign(Object.assign({mode:n},t),{component:"ion-select-popover",cssClass:["select-popover",t.cssClass],event:e,componentProps:{header:t.header,subHeader:t.subHeader,message:t.message,value:this.value,options:this.createPopoverOptions(this.childOpts)}});return[2,c.create(r)]}))}))};e.prototype.openActionSheet=function(){return __awaiter(this,void 0,void 0,(function(){var e,t,n;return __generator(this,(function(r){e=i(this);t=this.interfaceOptions;n=Object.assign(Object.assign({mode:e},t),{buttons:this.createActionSheetButtons(this.childOpts),cssClass:["select-action-sheet",t.cssClass]});return[2,h.create(n)]}))}))};e.prototype.openAlert=function(){return __awaiter(this,void 0,void 0,(function(){var e,t,n,r,o,s;var a=this;return __generator(this,(function(u){e=this.getLabel();t=e?e.textContent:null;n=this.interfaceOptions;r=this.multiple?"checkbox":"radio";o=i(this);s=Object.assign(Object.assign({mode:o},n),{header:n.header?n.header:t,inputs:this.createAlertInputs(this.childOpts,r),buttons:[{text:this.cancelText,role:"cancel",handler:function(){a.ionCancel.emit()}},{text:this.okText,handler:function(e){a.value=e}}],cssClass:["select-alert",n.cssClass,this.multiple?"multiple-select-alert":"single-select-alert"]});return[2,p.create(s)]}))}))};e.prototype.close=function(){if(!this.overlay){return Promise.resolve(false)}return this.overlay.dismiss()};e.prototype.updateOptions=function(){var e=true;var t=this,n=t.value,i=t.childOpts,r=t.compareWith,o=t.multiple;for(var s=0,a=i;s<a.length;s++){var u=a[s];var l=v(u);var c=e&&y(n,l,r);u.selected=c;if(c&&!o){e=false}}};e.prototype.getLabel=function(){return a(this.el)};e.prototype.hasValue=function(){return this.getText()!==""};Object.defineProperty(e.prototype,"childOpts",{get:function(){return Array.from(this.el.querySelectorAll("ion-select-option"))},enumerable:true,configurable:true});e.prototype.getText=function(){var e=this.selectedText;if(e!=null&&e!==""){return e}return g(this.childOpts,this.value,this.compareWith)};e.prototype.setFocus=function(){if(this.buttonEl){this.buttonEl.focus()}};e.prototype.emitStyle=function(){this.ionStyle.emit({interactive:true,select:true,"has-placeholder":this.placeholder!=null,"has-value":this.hasValue(),"interactive-disabled":this.disabled,"select-disabled":this.disabled})};e.prototype.render=function(){var e;var t=this;var n=this,s=n.placeholder,c=n.name,h=n.disabled,p=n.isExpanded,f=n.value,d=n.el;var v=i(this);var y=this.inputId+"-lbl";var m=a(d);if(m){m.id=y}var g=false;var O=this.getText();if(O===""&&s!=null){O=s;g=true}u(true,d,c,b(f),h);var x={"select-text":true,"select-placeholder":g};return r(o,{onClick:this.onClick,role:"combobox","aria-haspopup":"dialog","aria-disabled":h?"true":null,"aria-expanded":""+p,"aria-labelledby":y,class:(e={},e[v]=true,e["in-item"]=l("ion-item",d),e["select-disabled"]=h,e)},r("div",{class:x},O),r("div",{class:"select-icon",role:"presentation"},r("div",{class:"select-icon-inner"})),r("button",{type:"button",onFocus:this.onFocus,onBlur:this.onBlur,disabled:h,ref:function(e){return t.buttonEl=e}}))};Object.defineProperty(e.prototype,"el",{get:function(){return s(this)},enumerable:true,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{disabled:["disabledChanged"],placeholder:["disabledChanged"],value:["valueChanged"]}},enumerable:true,configurable:true});Object.defineProperty(e,"style",{get:function(){return":host{padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;font-family:var(--ion-font-family,inherit);overflow:hidden;z-index:2}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.in-item){position:static;max-width:45%}:host(.select-disabled){opacity:.4;pointer-events:none}:host(.ion-focused) button{border:2px solid #5e9ed6}.select-placeholder{color:currentColor;opacity:.33}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}:host-context([dir=rtl]) button,[dir=rtl] button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}.select-icon{position:relative}.select-text{-ms-flex:1;flex:1;min-width:16px;font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.select-icon-inner{left:5px;top:50%;margin-top:-3px;position:absolute;width:0;height:0;border-top:5px solid;border-right:5px solid transparent;border-left:5px solid transparent;color:currentColor;opacity:.33;pointer-events:none}:host-context([dir=rtl]) .select-icon-inner,[dir=rtl] .select-icon-inner{left:unset;right:unset;right:5px}:host{--padding-top:10px;--padding-end:0;--padding-bottom:11px;--padding-start:16px}.select-icon{width:19px;height:19px}"},enumerable:true,configurable:true});return e}());var v=function(e){var t=e.value;return t===undefined?e.textContent||"":t};var b=function(e){if(e==null){return undefined}if(Array.isArray(e)){return e.join(",")}return e.toString()};var y=function(e,t,n){if(e===undefined){return false}if(Array.isArray(e)){return e.some((function(e){return m(e,t,n)}))}else{return m(e,t,n)}};var m=function(e,t,n){if(typeof n==="function"){return n(e,t)}else if(typeof n==="string"){return e[n]===t[n]}else{return e===t}};var g=function(e,t,n){if(t===undefined){return""}if(Array.isArray(t)){return t.map((function(t){return O(e,t,n)})).filter((function(e){return e!==null})).join(", ")}else{return O(e,t,n)||""}};var O=function(e,t,n){var i=e.find((function(e){return m(v(e),t,n)}));return i?i.textContent:null};var x=0}}}));