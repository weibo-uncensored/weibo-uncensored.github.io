var __awaiter=this&&this.__awaiter||function(t,e,n,i){function r(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,a){function o(t){try{u(i.next(t))}catch(e){a(e)}}function s(t){try{u(i["throw"](t))}catch(e){a(e)}}function u(t){t.done?n(t.value):r(t.value).then(o,s)}u((i=i.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},i,r,a,o;return o={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function s(t){return function(e){return u([t,e])}}function u(o){if(i)throw new TypeError("Generator is already executing.");while(n)try{if(i=1,r&&(a=o[0]&2?r["return"]:o[0]?r["throw"]||((a=r["return"])&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;if(r=0,a)o=[o[0]&2,a.value];switch(o[0]){case 0:case 1:a=o;break;case 4:n.label++;return{value:o[1],done:false};case 5:n.label++;r=o[1];o=[0];continue;case 7:o=n.ops.pop();n.trys.pop();continue;default:if(!(a=n.trys,a=a.length>0&&a[a.length-1])&&(o[0]===6||o[0]===2)){n=0;continue}if(o[0]===3&&(!a||o[1]>a[0]&&o[1]<a[3])){n.label=o[1];break}if(o[0]===6&&n.label<a[1]){n.label=a[1];a=o;break}if(a&&n.label<a[2]){n.label=a[2];n.ops.push(o);break}if(a[2])n.ops.pop();n.trys.pop();continue}o=e.call(t,n)}catch(s){o=[6,s];r=0}finally{i=a=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};System.register(["./p-1fa942a3.system.js","./p-35047b4c.system.js","./p-2294249a.system.js"],(function(t,e){"use strict";var n,i,r,a,o,s,u,h,l,c,d;return{setters:[function(t){n=t.r;i=t.f;r=t.c;a=t.h;o=t.H;s=t.e},function(t){u=t.c;h=t.e;l=t.b},function(t){c=t.c;d=t.h}],execute:function(){var p=t("ion_range",function(){function t(t){var e=this;n(this,t);this.noUpdate=false;this.hasFocus=false;this.ratioA=0;this.ratioB=0;this.debounce=0;this.name="";this.dualKnobs=false;this.min=0;this.max=100;this.pin=false;this.snaps=false;this.step=1;this.ticks=true;this.disabled=false;this.value=0;this.clampBounds=function(t){return u(e.min,t,e.max)};this.ensureValueInBounds=function(t){if(e.dualKnobs){return{lower:e.clampBounds(t.lower),upper:e.clampBounds(t.upper)}}else{return e.clampBounds(t)}};this.handleKeyboard=function(t,n){var i=e.step;i=i>0?i:1;i=i/(e.max-e.min);if(!n){i*=-1}if(t==="A"){e.ratioA=u(0,e.ratioA+i,1)}else{e.ratioB=u(0,e.ratioB+i,1)}e.updateValue()};this.onBlur=function(){if(e.hasFocus){e.hasFocus=false;e.ionBlur.emit();e.emitStyle()}};this.onFocus=function(){if(!e.hasFocus){e.hasFocus=true;e.ionFocus.emit();e.emitStyle()}};this.ionChange=i(this,"ionChange",7);this.ionStyle=i(this,"ionStyle",7);this.ionFocus=i(this,"ionFocus",7);this.ionBlur=i(this,"ionBlur",7)}t.prototype.debounceChanged=function(){this.ionChange=h(this.ionChange,this.debounce)};t.prototype.minChanged=function(){if(!this.noUpdate){this.updateRatio()}};t.prototype.maxChanged=function(){if(!this.noUpdate){this.updateRatio()}};t.prototype.disabledChanged=function(){if(this.gesture){this.gesture.setDisabled(this.disabled)}this.emitStyle()};t.prototype.valueChanged=function(t){if(!this.noUpdate){this.updateRatio()}t=this.ensureValueInBounds(t);this.ionChange.emit({value:t})};t.prototype.connectedCallback=function(){this.updateRatio();this.debounceChanged();this.disabledChanged()};t.prototype.disconnectedCallback=function(){if(this.gesture){this.gesture.destroy();this.gesture=undefined}};t.prototype.componentDidLoad=function(){return __awaiter(this,void 0,void 0,(function(){var t,n;var i=this;return __generator(this,(function(r){switch(r.label){case 0:t=this.rangeSlider;if(!t)return[3,2];n=this;return[4,e.import("./p-3f376874.system.js")];case 1:n.gesture=r.sent().createGesture({el:t,gestureName:"range",gesturePriority:100,threshold:0,onStart:function(t){return i.onStart(t)},onMove:function(t){return i.onMove(t)},onEnd:function(t){return i.onEnd(t)}});this.gesture.setDisabled(this.disabled);r.label=2;case 2:return[2]}}))}))};t.prototype.getValue=function(){var t=this.value||0;if(this.dualKnobs){if(typeof t==="object"){return t}return{lower:0,upper:t}}else{if(typeof t==="object"){return t.upper}return t}};t.prototype.emitStyle=function(){this.ionStyle.emit({interactive:true,"interactive-disabled":this.disabled})};t.prototype.onStart=function(t){var e=this.rect=this.rangeSlider.getBoundingClientRect();var n=t.currentX;var i=u(0,(n-e.left)/e.width,1);if(document.dir==="rtl"){i=1-i}this.pressedKnob=!this.dualKnobs||Math.abs(this.ratioA-i)<Math.abs(this.ratioB-i)?"A":"B";this.setFocus(this.pressedKnob);this.update(n)};t.prototype.onMove=function(t){this.update(t.currentX)};t.prototype.onEnd=function(t){this.update(t.currentX);this.pressedKnob=undefined};t.prototype.update=function(t){var e=this.rect;var n=u(0,(t-e.left)/e.width,1);if(document.dir==="rtl"){n=1-n}if(this.snaps){n=v(b(n,this.min,this.max,this.step),this.min,this.max)}if(this.pressedKnob==="A"){this.ratioA=n}else{this.ratioB=n}this.updateValue()};Object.defineProperty(t.prototype,"valA",{get:function(){return b(this.ratioA,this.min,this.max,this.step)},enumerable:true,configurable:true});Object.defineProperty(t.prototype,"valB",{get:function(){return b(this.ratioB,this.min,this.max,this.step)},enumerable:true,configurable:true});Object.defineProperty(t.prototype,"ratioLower",{get:function(){if(this.dualKnobs){return Math.min(this.ratioA,this.ratioB)}return 0},enumerable:true,configurable:true});Object.defineProperty(t.prototype,"ratioUpper",{get:function(){if(this.dualKnobs){return Math.max(this.ratioA,this.ratioB)}return this.ratioA},enumerable:true,configurable:true});t.prototype.updateRatio=function(){var t=this.getValue();var e=this,n=e.min,i=e.max;if(this.dualKnobs){this.ratioA=v(t.lower,n,i);this.ratioB=v(t.upper,n,i)}else{this.ratioA=v(t,n,i)}};t.prototype.updateValue=function(){this.noUpdate=true;var t=this,e=t.valA,n=t.valB;this.value=!this.dualKnobs?e:{lower:Math.min(e,n),upper:Math.max(e,n)};this.noUpdate=false};t.prototype.setFocus=function(t){if(this.el.shadowRoot){var e=this.el.shadowRoot.querySelector(t==="A"?".range-knob-a":".range-knob-b");if(e){e.focus()}}};t.prototype.render=function(){var t,e;var n=this;var i=this,s=i.min,u=i.max,h=i.step,p=i.el,b=i.handleKeyboard,g=i.pressedKnob,m=i.disabled,y=i.pin,w=i.ratioLower,B=i.ratioUpper;var A=r(this);var x=w*100+"%";var k=100-B*100+"%";var C=document;var K=C.dir==="rtl";var S=K?"right":"left";var j=K?"left":"right";var _=function(t){var e;return e={},e[S]=t[S],e};var F=(t={},t[S]=x,t[j]=k,t);var P=[];if(this.snaps&&this.ticks){for(var M=s;M<=u;M+=h){var O=v(M,s,u);var R={ratio:O,active:O>=w&&O<=B};R[S]=O*100+"%";P.push(R)}}l(true,p,this.name,JSON.stringify(this.getValue()),m);return a(o,{onFocusin:this.onFocus,onFocusout:this.onBlur,class:Object.assign(Object.assign({},c(this.color)),(e={},e[A]=true,e["in-item"]=d("ion-item",p),e["range-disabled"]=m,e["range-pressed"]=g!==undefined,e["range-has-pin"]=y,e))},a("slot",{name:"start"}),a("div",{class:"range-slider",ref:function(t){return n.rangeSlider=t}},P.map((function(t){return a("div",{style:_(t),role:"presentation",class:{"range-tick":true,"range-tick-active":t.active}})})),a("div",{class:"range-bar",role:"presentation"}),a("div",{class:"range-bar range-bar-active",role:"presentation",style:F}),f(K,{knob:"A",pressed:g==="A",value:this.valA,ratio:this.ratioA,pin:y,disabled:m,handleKeyboard:b,min:s,max:u}),this.dualKnobs&&f(K,{knob:"B",pressed:g==="B",value:this.valB,ratio:this.ratioB,pin:y,disabled:m,handleKeyboard:b,min:s,max:u})),a("slot",{name:"end"}))};Object.defineProperty(t.prototype,"el",{get:function(){return s(this)},enumerable:true,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{debounce:["debounceChanged"],min:["minChanged"],max:["maxChanged"],disabled:["disabledChanged"],value:["valueChanged"]}},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return":host{--knob-handle-size:calc(var(--knob-size) * 2);display:-ms-flexbox;display:flex;position:relative;-ms-flex:3;flex:3;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family,inherit);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.range-disabled){pointer-events:none}::slotted(ion-label){-ms-flex:initial;flex:initial}::slotted(ion-icon[slot]){font-size:24px}.range-slider{position:relative;-ms-flex:1;flex:1;width:100%;height:var(--height);contain:size layout style;cursor:-webkit-grab;cursor:grab;-ms-touch-action:pan-y;touch-action:pan-y}:host(.range-pressed) .range-slider{cursor:-webkit-grabbing;cursor:grabbing}.range-pin{position:absolute;background:var(--ion-color-base);color:var(--ion-color-contrast);-webkit-box-sizing:border-box;box-sizing:border-box}.range-knob-handle{left:0;top:calc((var(--height) - var(--knob-handle-size)) / 2);margin-left:calc(0px - var(--knob-handle-size) / 2);position:absolute;width:var(--knob-handle-size);height:var(--knob-handle-size);text-align:center}:host-context([dir=rtl]) .range-knob-handle,[dir=rtl] .range-knob-handle{right:unset;right:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.range-knob-handle{margin-left:unset;-webkit-margin-start:calc(0px - var(--knob-handle-size) / 2);margin-inline-start:calc(0px - var(--knob-handle-size) / 2)}}:host-context([dir=rtl]) .range-knob-handle,[dir=rtl] .range-knob-handle{left:unset}.range-knob-handle:active,.range-knob-handle:focus{outline:none}.range-bar{border-radius:var(--bar-border-radius);left:0;top:calc((var(--height) - var(--bar-height)) / 2);position:absolute;width:100%;height:var(--bar-height);background:var(--bar-background);pointer-events:none}:host-context([dir=rtl]) .range-bar,[dir=rtl] .range-bar{right:unset;right:0;left:unset}.range-knob{border-radius:var(--knob-border-radius);left:calc(50% - var(--knob-size) / 2);top:calc(50% - var(--knob-size) / 2);position:absolute;width:var(--knob-size);height:var(--knob-size);background:var(--knob-background);-webkit-box-shadow:var(--knob-box-shadow);box-shadow:var(--knob-box-shadow);z-index:2;pointer-events:none}:host-context([dir=rtl]) .range-knob,[dir=rtl] .range-knob{right:unset;right:calc(50% - var(--knob-size) / 2);left:unset}:host(.range-pressed) .range-bar-active{will-change:left,right}:host(.in-item){width:100%}:host(.in-item) ::slotted(ion-label){-ms-flex-item-align:center;align-self:center}:host{--knob-border-radius:50%;--knob-background:#fff;--knob-box-shadow:0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02);--knob-size:28px;--bar-height:2px;--bar-background:rgba(var(--ion-text-color-rgb,0,0,0),0.1);--bar-background-active:var(--ion-color-primary,#3880ff);--bar-border-radius:0;--height:42px;padding-left:16px;padding-right:16px;padding-top:8px;padding-bottom:8px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}:host(.ion-color) .range-bar-active,:host(.ion-color) .range-tick-active{background:var(--ion-color-base)}::slotted([slot=start]){margin-left:0;margin-right:16px;margin-top:0;margin-bottom:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted([slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}}::slotted([slot=end]){margin-left:16px;margin-right:0;margin-top:0;margin-bottom:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted([slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0}}:host(.range-has-pin){padding-top:20px}.range-bar-active{bottom:0;width:auto;background:var(--bar-background-active)}.range-tick{margin-left:-1px;border-radius:0;position:absolute;top:18px;width:2px;height:8px;background:rgba(var(--ion-text-color-rgb,0,0,0),.1);pointer-events:none}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.range-tick{margin-left:unset;-webkit-margin-start:-1px;margin-inline-start:-1px}}.range-tick-active{background:var(--bar-background-active)}.range-pin{-webkit-transform:translate3d(0,28px,0) scale(.01);transform:translate3d(0,28px,0) scale(.01);padding-left:8px;padding-right:8px;padding-top:8px;padding-bottom:8px;display:inline-block;position:relative;top:-20px;min-width:28px;-webkit-transition:-webkit-transform .12s ease;transition:-webkit-transform .12s ease;transition:transform .12s ease;transition:transform .12s ease,-webkit-transform .12s ease;background:transparent;color:var(--ion-text-color,#000);font-size:12px;text-align:center}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.range-pin{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}.range-knob-pressed .range-pin{-webkit-transform:translateZ(0) scale(1);transform:translateZ(0) scale(1)}:host(.range-disabled){opacity:.5}"},enumerable:true,configurable:true});return t}());var f=function(t,e){var n=e.knob,i=e.value,r=e.ratio,o=e.min,s=e.max,u=e.disabled,h=e.pressed,l=e.pin,c=e.handleKeyboard;var d=t?"right":"left";var p=function(){var t={};t[d]=r*100+"%";return t};return a("div",{onKeyDown:function(t){var e=t.key;if(e==="ArrowLeft"||e==="ArrowDown"){c(n,false);t.preventDefault();t.stopPropagation()}else if(e==="ArrowRight"||e==="ArrowUp"){c(n,true);t.preventDefault();t.stopPropagation()}},class:{"range-knob-handle":true,"range-knob-a":n==="A","range-knob-b":n==="B","range-knob-pressed":h,"range-knob-min":i===o,"range-knob-max":i===s},style:p(),role:"slider",tabindex:u?-1:0,"aria-valuemin":o,"aria-valuemax":s,"aria-disabled":u?"true":null,"aria-valuenow":i},l&&a("div",{class:"range-pin",role:"presentation"},Math.round(i)),a("div",{class:"range-knob",role:"presentation"}))};var b=function(t,e,n,i){var r=(n-e)*t;if(i>0){r=Math.round(r/i)*i+e}return u(e,r,n)};var v=function(t,e,n){return u(0,(t-e)/(n-e),1)}}}}));