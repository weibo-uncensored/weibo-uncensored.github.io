var __awaiter=this&&this.__awaiter||function(t,e,n,i){function o(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,s){function r(t){try{u(i.next(t))}catch(e){s(e)}}function a(t){try{u(i["throw"](t))}catch(e){s(e)}}function u(t){t.done?n(t.value):o(t.value).then(r,a)}u((i=i.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},i,o,s,r;return r={next:a(0),throw:a(1),return:a(2)},typeof Symbol==="function"&&(r[Symbol.iterator]=function(){return this}),r;function a(t){return function(e){return u([t,e])}}function u(r){if(i)throw new TypeError("Generator is already executing.");while(n)try{if(i=1,o&&(s=r[0]&2?o["return"]:r[0]?o["throw"]||((s=o["return"])&&s.call(o),0):o.next)&&!(s=s.call(o,r[1])).done)return s;if(o=0,s)r=[r[0]&2,s.value];switch(r[0]){case 0:case 1:s=r;break;case 4:n.label++;return{value:r[1],done:false};case 5:n.label++;o=r[1];r=[0];continue;case 7:r=n.ops.pop();n.trys.pop();continue;default:if(!(s=n.trys,s=s.length>0&&s[s.length-1])&&(r[0]===6||r[0]===2)){n=0;continue}if(r[0]===3&&(!s||r[1]>s[0]&&r[1]<s[3])){n.label=r[1];break}if(r[0]===6&&n.label<s[1]){n.label=s[1];s=r;break}if(s&&n.label<s[2]){n.label=s[2];n.ops.push(r);break}if(s[2])n.ops.pop();n.trys.pop();continue}r=e.call(t,n)}catch(a){r=[6,a];o=0}finally{i=s=0}if(r[0]&5)throw r[1];return{value:r[0]?r[1]:void 0,done:true}}};System.register(["./p-1fa942a3.system.js","./p-35047b4c.system.js","./p-2294249a.system.js"],(function(t){"use strict";var e,n,i,o,s,r,a,u,h,l;return{setters:[function(t){e=t.r;n=t.f;i=t.j;o=t.c;s=t.h;r=t.H;a=t.e},function(t){u=t.e;h=t.f},function(t){l=t.c}],execute:function(){var c=t("ion_textarea",function(){function t(t){var i=this;e(this,t);this.inputId="ion-input-"+f++;this.didBlurAfterEdit=false;this.hasFocus=false;this.autocapitalize="none";this.autofocus=false;this.clearOnEdit=false;this.debounce=0;this.disabled=false;this.name=this.inputId;this.readonly=false;this.required=false;this.spellcheck=false;this.autoGrow=false;this.value="";this.onInput=function(t){if(i.nativeInput){i.value=i.nativeInput.value}i.emitStyle();i.ionInput.emit(t)};this.onFocus=function(){i.hasFocus=true;i.focusChange();i.ionFocus.emit()};this.onBlur=function(){i.hasFocus=false;i.focusChange();i.ionBlur.emit()};this.onKeyDown=function(){i.checkClearOnEdit()};this.ionChange=n(this,"ionChange",7);this.ionInput=n(this,"ionInput",7);this.ionStyle=n(this,"ionStyle",7);this.ionBlur=n(this,"ionBlur",7);this.ionFocus=n(this,"ionFocus",7)}t.prototype.debounceChanged=function(){this.ionChange=u(this.ionChange,this.debounce)};t.prototype.disabledChanged=function(){this.emitStyle()};t.prototype.valueChanged=function(){var t=this.nativeInput;var e=this.getValue();if(t&&t.value!==e){t.value=e}this.runAutoGrow();this.emitStyle();this.ionChange.emit({value:e})};t.prototype.connectedCallback=function(){this.emitStyle();this.debounceChanged();{this.el.dispatchEvent(new CustomEvent("ionInputDidLoad",{detail:this.el}))}};t.prototype.disconnectedCallback=function(){{document.dispatchEvent(new CustomEvent("ionInputDidUnload",{detail:this.el}))}};t.prototype.componentDidLoad=function(){this.runAutoGrow()};t.prototype.runAutoGrow=function(){var t=this.nativeInput;if(t&&this.autoGrow){i((function(){t.style.height="inherit";t.style.height=t.scrollHeight+"px"}))}};t.prototype.setFocus=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){if(this.nativeInput){this.nativeInput.focus()}return[2]}))}))};t.prototype.getInputElement=function(){return Promise.resolve(this.nativeInput)};t.prototype.emitStyle=function(){this.ionStyle.emit({interactive:true,textarea:true,input:true,"interactive-disabled":this.disabled,"has-placeholder":this.placeholder!=null,"has-value":this.hasValue(),"has-focus":this.hasFocus})};t.prototype.checkClearOnEdit=function(){if(!this.clearOnEdit){return}if(this.didBlurAfterEdit&&this.hasValue()){this.value=""}this.didBlurAfterEdit=false};t.prototype.focusChange=function(){if(this.clearOnEdit&&!this.hasFocus&&this.hasValue()){this.didBlurAfterEdit=true}this.emitStyle()};t.prototype.hasValue=function(){return this.getValue()!==""};t.prototype.getValue=function(){return this.value||""};t.prototype.render=function(){var t;var e=this;var n=o(this);var i=this.getValue();var a=this.inputId+"-lbl";var u=h(this.el);if(u){u.id=a}return s(r,{"aria-disabled":this.disabled?"true":null,class:Object.assign(Object.assign({},l(this.color)),(t={},t[n]=true,t))},s("textarea",{class:"native-textarea",ref:function(t){return e.nativeInput=t},autoCapitalize:this.autocapitalize,autoFocus:this.autofocus,disabled:this.disabled,maxLength:this.maxlength,minLength:this.minlength,name:this.name,placeholder:this.placeholder||"",readOnly:this.readonly,required:this.required,spellCheck:this.spellcheck,cols:this.cols,rows:this.rows,wrap:this.wrap,onInput:this.onInput,onBlur:this.onBlur,onFocus:this.onFocus,onKeyDown:this.onKeyDown},i))};Object.defineProperty(t.prototype,"el",{get:function(){return a(this)},enumerable:true,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{debounce:["debounceChanged"],disabled:["disabledChanged"],value:["valueChanged"]}},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return".sc-ion-textarea-ios-h{--background:initial;--color:initial;--placeholder-color:initial;--placeholder-font-style:initial;--placeholder-font-weight:initial;--placeholder-opacity:.5;--padding-top:0;--padding-end:0;--padding-bottom:0;--border-radius:0;display:block;position:relative;-ms-flex:1;flex:1;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;background:var(--background);color:var(--color);font-family:var(--ion-font-family,inherit);white-space:pre-wrap;z-index:2}.ion-color.sc-ion-textarea-ios-h{background:initial;color:var(--ion-color-base)}ion-item.sc-ion-textarea-ios-h, ion-item .sc-ion-textarea-ios-h{-ms-flex-item-align:baseline;align-self:baseline}ion-item.sc-ion-textarea-ios-h:not(.item-label), ion-item:not(.item-label) .sc-ion-textarea-ios-h{--padding-start:0}.native-textarea.sc-ion-textarea-ios{border-radius:var(--border-radius);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;width:100%;max-width:100%;max-height:100%;border:0;outline:none;background:transparent;-webkit-box-sizing:border-box;box-sizing:border-box;resize:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.native-textarea.sc-ion-textarea-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.native-textarea.sc-ion-textarea-ios::-webkit-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-ios::-moz-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-ios:-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-ios::-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-ios::placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea[disabled].sc-ion-textarea-ios{opacity:.4}.cloned-input.sc-ion-textarea-ios{left:0;top:0;position:absolute;pointer-events:none}[dir=rtl].sc-ion-textarea-ios-h .cloned-input.sc-ion-textarea-ios, [dir=rtl] .sc-ion-textarea-ios-h .cloned-input.sc-ion-textarea-ios, [dir=rtl].sc-ion-textarea-ios .cloned-input.sc-ion-textarea-ios{left:unset;right:unset;right:0}.sc-ion-textarea-ios-h{--padding-top:10px;--padding-end:8px;--padding-bottom:10px;--padding-start:0;font-size:inherit}.item-label-floating.sc-ion-textarea-ios-h, .item-label-floating .sc-ion-textarea-ios-h, .item-label-stacked.sc-ion-textarea-ios-h, .item-label-stacked .sc-ion-textarea-ios-h{--padding-top:8px;--padding-bottom:8px;--padding-start:0px}"},enumerable:true,configurable:true});return t}());var f=0}}}));