import{r as t,h as s,H as a,e}from"./p-b8715656.js";import{a as i}from"./p-8a939906.js";const r=class{constructor(s){t(this,s),this.loaded=!1,this.active=!1}componentWillLoad(){}async setActive(){await this.prepareLazyLoaded(),this.active=!0}prepareLazyLoaded(){if(!this.loaded&&null!=this.component){this.loaded=!0;try{return i(this.delegate,this.el,this.component,["ion-page"])}catch(t){console.error(t)}}return Promise.resolve(void 0)}render(){const{tab:t,active:e,component:i}=this;return s(a,{role:"tabpanel","aria-hidden":e?null:"true","aria-labelledby":`tab-button-${t}`,class:{"ion-page":void 0===i,"tab-hidden":!e}},s("slot",null))}get el(){return e(this)}static get style(){return":host(.tab-hidden){display:none!important}"}};export{r as ion_tab};