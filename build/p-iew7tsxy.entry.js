import{r as t,c as s,h as i,H as e,f as h,e as n}from"./p-b8715656.js";import{e as o,f as a,b as r}from"./p-3e9c62cb.js";import{c as l,o as c,h as d}from"./p-f1a4df63.js";import{c as u}from"./p-7a02f09d.js";const g=class{constructor(s){t(this,s)}render(){const t=s(this);return i(e,{class:Object.assign(Object.assign({},l(this.color)),{[t]:!0})},i("slot",null))}static get style(){return":host{--background:var(--ion-color-primary,#3880ff);--color:var(--ion-color-primary-contrast,#fff);--padding-end:8px;--padding-bottom:3px;--padding-start:8px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:inline-block;min-width:10px;background:var(--background);color:var(--color);font-family:var(--ion-font-family,inherit);font-size:13px;font-weight:700;line-height:1;text-align:center;white-space:nowrap;contain:content;vertical-align:baseline}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(:empty){display:none}:host{--padding-top:3px;--padding-end:4px;--padding-bottom:4px;--padding-start:4px;border-radius:4px}"}},b=class{constructor(s){t(this,s),this.translucent=!1}render(){const t=s(this),h=this.translucent;return i(e,{role:"contentinfo",class:{[t]:!0,[`footer-${t}`]:!0,"footer-translucent":h,[`footer-translucent-${t}`]:h}})}static get style(){return"ion-footer{display:block;position:relative;-ms-flex-order:1;order:1;width:100%;z-index:10}ion-footer ion-toolbar:last-child{padding-bottom:var(--ion-safe-area-bottom,0)}.footer-md:before{left:0;top:-2px;bottom:auto;background-position:left 0 top 0;position:absolute;width:100%;height:2px;background-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAHBAMAAADzDtBxAAAAD1BMVEUAAAAAAAAAAAAAAAAAAABPDueNAAAABXRSTlMUCS0gBIh/TXEAAAAaSURBVAjXYxCEAgY4UIICBmMogMsgFLtAAQCNSwXZKOdPxgAAAABJRU5ErkJggg==\");background-repeat:repeat-x;content:\"\"}:host-context([dir=rtl]) .footer-md:before,[dir=rtl] .footer-md:before{left:unset;right:unset;right:0;background-position:right 0 top 0}.footer-md[no-border]:before{display:none}"}},p=class{constructor(s){t(this,s),this.inputId=`ion-input-${C++}`,this.didBlurAfterEdit=!1,this.hasFocus=!1,this.autocapitalize="off",this.autocomplete="off",this.autocorrect="off",this.autofocus=!1,this.clearInput=!1,this.debounce=0,this.disabled=!1,this.name=this.inputId,this.readonly=!1,this.required=!1,this.spellcheck=!1,this.type="text",this.value="",this.onInput=t=>{const s=t.target;s&&(this.value=s.value||""),this.ionInput.emit(t)},this.onBlur=()=>{this.hasFocus=!1,this.focusChanged(),this.emitStyle(),this.ionBlur.emit()},this.onFocus=()=>{this.hasFocus=!0,this.focusChanged(),this.emitStyle(),this.ionFocus.emit()},this.onKeydown=()=>{this.shouldClearOnEdit()&&(this.didBlurAfterEdit&&this.hasValue()&&this.clearTextInput(),this.didBlurAfterEdit=!1)},this.clearTextInput=t=>{this.clearInput&&!this.readonly&&!this.disabled&&t&&(t.preventDefault(),t.stopPropagation()),this.value="",this.nativeInput&&(this.nativeInput.value="")},this.ionInput=h(this,"ionInput",7),this.ionChange=h(this,"ionChange",7),this.ionBlur=h(this,"ionBlur",7),this.ionFocus=h(this,"ionFocus",7),this.ionInputDidLoad=h(this,"ionInputDidLoad",7),this.ionInputDidUnload=h(this,"ionInputDidUnload",7),this.ionStyle=h(this,"ionStyle",7)}debounceChanged(){this.ionChange=o(this.ionChange,this.debounce)}disabledChanged(){this.emitStyle()}valueChanged(){this.emitStyle(),this.ionChange.emit({value:this.value})}connectedCallback(){this.emitStyle(),this.debounceChanged(),this.el.dispatchEvent(new CustomEvent("ionInputDidLoad",{detail:this.el}))}disconnectedCallback(){document.dispatchEvent(new CustomEvent("ionInputDidUnload",{detail:this.el}))}async setFocus(){this.nativeInput&&this.nativeInput.focus()}getInputElement(){return Promise.resolve(this.nativeInput)}shouldClearOnEdit(){const{type:t,clearOnEdit:s}=this;return void 0===s?"password"===t:s}getValue(){return this.value||""}emitStyle(){this.ionStyle.emit({interactive:!0,input:!0,"has-placeholder":null!=this.placeholder,"has-value":this.hasValue(),"has-focus":this.hasFocus,"interactive-disabled":this.disabled})}focusChanged(){!this.hasFocus&&this.shouldClearOnEdit()&&this.hasValue()&&(this.didBlurAfterEdit=!0)}hasValue(){return this.getValue().length>0}render(){const t=s(this),h=this.getValue(),n=this.inputId+"-lbl",o=a(this.el);return o&&(o.id=n),i(e,{"aria-disabled":this.disabled?"true":null,class:Object.assign(Object.assign({},l(this.color)),{[t]:!0,"has-value":this.hasValue(),"has-focus":this.hasFocus})},i("input",{class:"native-input",ref:t=>this.nativeInput=t,"aria-labelledby":n,disabled:this.disabled,accept:this.accept,autoCapitalize:this.autocapitalize,autoComplete:this.autocomplete,autoCorrect:this.autocorrect,autoFocus:this.autofocus,inputMode:this.inputmode,min:this.min,max:this.max,minLength:this.minlength,maxLength:this.maxlength,multiple:this.multiple,name:this.name,pattern:this.pattern,placeholder:this.placeholder||"",readOnly:this.readonly,required:this.required,spellCheck:this.spellcheck,step:this.step,size:this.size,type:this.type,value:h,onInput:this.onInput,onBlur:this.onBlur,onFocus:this.onFocus,onKeyDown:this.onKeydown}),this.clearInput&&!this.readonly&&!this.disabled&&i("button",{type:"button",class:"input-clear-icon",tabindex:"-1",onTouchStart:this.clearTextInput,onMouseDown:this.clearTextInput}))}get el(){return n(this)}static get watchers(){return{debounce:["debounceChanged"],disabled:["disabledChanged"],value:["valueChanged"]}}static get style(){return".sc-ion-input-md-h{--placeholder-color:initial;--placeholder-font-style:initial;--placeholder-font-weight:initial;--placeholder-opacity:.5;--padding-top:0;--padding-bottom:0;--padding-start:0;--background:transparent;--color:initial;display:-ms-flexbox;display:flex;position:relative;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;width:100%;padding:0!important;background:var(--background);color:var(--color);font-family:var(--ion-font-family,inherit);z-index:2}ion-item.sc-ion-input-md-h:not(.item-label), ion-item:not(.item-label) .sc-ion-input-md-h{--padding-start:0}.ion-color.sc-ion-input-md-h{color:var(--ion-color-base)}.native-input.sc-ion-input-md{border-radius:var(--border-radius);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:inline-block;-ms-flex:1;flex:1;width:100%;max-width:100%;max-height:100%;border:0;outline:none;background:transparent;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.native-input.sc-ion-input-md{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.native-input.sc-ion-input-md::-webkit-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-md::-moz-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-md:-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-md::-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-md::placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-md:-webkit-autofill{background-color:transparent}.native-input.sc-ion-input-md:invalid{-webkit-box-shadow:none;box-shadow:none}.native-input.sc-ion-input-md::-ms-clear{display:none}.native-input[disabled].sc-ion-input-md{opacity:.4}.cloned-input.sc-ion-input-md{left:0;top:0;position:absolute;pointer-events:none}[dir=rtl].sc-ion-input-md-h .cloned-input.sc-ion-input-md, [dir=rtl] .sc-ion-input-md-h .cloned-input.sc-ion-input-md, [dir=rtl].sc-ion-input-md .cloned-input.sc-ion-input-md{left:unset;right:unset;right:0}.input-clear-icon.sc-ion-input-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;background-position:50%;border:0;outline:none;background-color:transparent;background-repeat:no-repeat;visibility:hidden;-webkit-appearance:none;-moz-appearance:none;appearance:none}.has-focus.has-value.sc-ion-input-md-h .input-clear-icon.sc-ion-input-md{visibility:visible}.has-focus.sc-ion-input-md-h{pointer-events:none}.has-focus.sc-ion-input-md-h a.sc-ion-input-md, .has-focus.sc-ion-input-md-h button.sc-ion-input-md, .has-focus.sc-ion-input-md-h input.sc-ion-input-md{pointer-events:auto}.sc-ion-input-md-h{--padding-top:10px;--padding-end:0;--padding-bottom:10px;--padding-start:8px;font-size:inherit}.item-label-floating.sc-ion-input-md-h, .item-label-floating .sc-ion-input-md-h, .item-label-stacked.sc-ion-input-md-h, .item-label-stacked .sc-ion-input-md-h{--padding-top:8px;--padding-bottom:8px;--padding-start:0}.input-clear-icon.sc-ion-input-md{background-image:url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns=\'http://www.w3.org/2000/svg\'%20viewBox=\'0%200%20512%20512\'><polygon%20fill=\'var(--ion-color-step-600,%20%23666666)\'%20points=\'405,136.798%20375.202,107%20256,226.202%20136.798,107%20107,136.798%20226.202,256%20107,375.202%20136.798,405%20256,285.798%20375.202,405%20405,375.202%20285.798,256\'/></svg>\");width:30px;height:30px;background-size:22px}"}};let C=0;const f=class{constructor(s){t(this,s),this.routerDirection="forward",this.onClick=t=>{c(this.href,t,this.routerDirection)}}render(){const t=s(this),h={href:this.href,rel:this.rel,target:this.target};return i(e,{onClick:this.onClick,class:Object.assign(Object.assign({},l(this.color)),{[t]:!0,"ion-activatable":!0})},i("a",Object.assign({},h),i("slot",null)))}static get style(){return":host{--background:transparent;--color:var(--ion-color-primary,#3880ff);background:var(--background);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}a{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit}"}},m=class{constructor(s){t(this,s),this.inputId=`ion-tg-${v++}`,this.lastDrag=0,this.activated=!1,this.name=this.inputId,this.checked=!1,this.disabled=!1,this.value="on",this.onClick=()=>{this.lastDrag+300<Date.now()&&(this.checked=!this.checked)},this.onFocus=()=>{this.ionFocus.emit()},this.onBlur=()=>{this.ionBlur.emit()},this.ionChange=h(this,"ionChange",7),this.ionFocus=h(this,"ionFocus",7),this.ionBlur=h(this,"ionBlur",7),this.ionStyle=h(this,"ionStyle",7)}checkedChanged(t){this.ionChange.emit({checked:t,value:this.value})}disabledChanged(){this.emitStyle(),this.gesture&&this.gesture.setDisabled(this.disabled)}async connectedCallback(){this.gesture=(await __sc_import_app("./p-316cddd3.js")).createGesture({el:this.el,gestureName:"toggle",gesturePriority:100,threshold:5,passive:!1,onStart:()=>this.onStart(),onMove:t=>this.onMove(t),onEnd:t=>this.onEnd(t)}),this.disabledChanged()}disconnectedCallback(){this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}componentWillLoad(){this.emitStyle()}emitStyle(){this.ionStyle.emit({"interactive-disabled":this.disabled})}onStart(){this.activated=!0,this.setFocus()}onMove(t){E(document,this.checked,t.deltaX,-10)&&(this.checked=!this.checked,u())}onEnd(t){this.activated=!1,this.lastDrag=Date.now(),t.event.preventDefault(),t.event.stopImmediatePropagation()}getValue(){return this.value||""}setFocus(){this.buttonEl&&this.buttonEl.focus()}render(){const{inputId:t,disabled:h,checked:n,activated:o,color:c,el:u}=this,g=s(this),b=t+"-lbl",p=a(u),C=this.getValue();return p&&(p.id=b),r(!0,u,this.name,n?C:"",h),i(e,{onClick:this.onClick,role:"checkbox","aria-disabled":h?"true":null,"aria-checked":`${n}`,"aria-labelledby":b,class:Object.assign(Object.assign({},l(c)),{[g]:!0,"in-item":d("ion-item",u),"toggle-activated":o,"toggle-checked":n,"toggle-disabled":h,interactive:!0})},i("div",{class:"toggle-icon"},i("div",{class:"toggle-inner"})),i("button",{type:"button",onFocus:this.onFocus,onBlur:this.onBlur,disabled:h,ref:t=>this.buttonEl=t}))}get el(){return n(this)}static get watchers(){return{checked:["checkedChanged"],disabled:["disabledChanged"]}}static get style(){return":host{-webkit-box-sizing:content-box!important;box-sizing:content-box!important;display:inline-block;outline:none;contain:content;cursor:pointer;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.ion-focused) input{border:2px solid #5e9ed6}:host(.toggle-disabled){pointer-events:none}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}:host-context([dir=rtl]) button,[dir=rtl] button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}:host{--background:rgba(var(--ion-text-color-rgb,0,0,0),0.3);--background-checked:rgba(var(--ion-color-primary-rgb,56,128,255),0.5);--handle-background:#fff;--handle-background-checked:var(--ion-color-primary,#3880ff);padding-left:12px;padding-right:12px;padding-top:12px;padding-bottom:12px;-webkit-box-sizing:content-box;box-sizing:content-box;position:relative;width:36px;height:14px;contain:strict}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px}}:host(.ion-color.toggle-checked) .toggle-icon{background:rgba(var(--ion-color-base-rgb),.5)}:host(.ion-color.toggle-checked) .toggle-inner{background:var(--ion-color-base)}.toggle-icon{border-radius:14px;display:block;position:relative;width:100%;height:100%;-webkit-transition:background-color .16s;transition:background-color .16s;background:var(--background);pointer-events:none}.toggle-inner{left:0;top:-3px;border-radius:50%;position:absolute;width:20px;height:20px;-webkit-transition-duration:.16s;transition-duration:.16s;-webkit-transition-property:background-color,-webkit-transform;transition-property:background-color,-webkit-transform;transition-property:transform,background-color;transition-property:transform,background-color,-webkit-transform;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);background:var(--handle-background);-webkit-box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);will-change:transform,background-color;contain:strict}:host-context([dir=rtl]) .toggle-inner,[dir=rtl] .toggle-inner{left:unset;right:unset;right:0}:host(.toggle-checked) .toggle-icon{background:var(--background-checked)}:host(.toggle-checked) .toggle-inner{-webkit-transform:translate3d(16px,0,0);transform:translate3d(16px,0,0);background:var(--handle-background-checked)}:host-context([dir=rtl]).toggle-checked .toggle-inner,:host-context([dir=rtl]):host(.toggle-checked) .toggle-inner{-webkit-transform:translate3d(calc(-1 * 16px),0,0);transform:translate3d(calc(-1 * 16px),0,0)}:host(.toggle-disabled){opacity:.3}:host(.in-item[slot]){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:16px;padding-right:0;padding-top:12px;padding-bottom:12px;cursor:pointer}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.in-item[slot]){padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:0;padding-inline-end:0}}:host(.in-item[slot=start]){padding-left:2px;padding-right:18px;padding-top:12px;padding-bottom:12px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.in-item[slot=start]){padding-left:unset;padding-right:unset;-webkit-padding-start:2px;padding-inline-start:2px;-webkit-padding-end:18px;padding-inline-end:18px}}"}},E=(t,s,i,e)=>{const h="rtl"===t.dir;return s?!h&&e>i||h&&-e<i:!h&&-e<i||h&&e>i};let v=0;export{g as ion_badge,b as ion_footer,p as ion_input,f as ion_router_link,m as ion_toggle};