import{r as i,h as t}from"./p-b8715656.js";import{W as e}from"./p-73db3395.js";const o=class{constructor(t){i(this,t),this.offset=0,this.posts=[],this.hashtags=[],this.onlyShowCensored=!1,this.hideViewMore=!1,this.currentSearchTxid=""}componentDidLoad(){e.hashtagIndex$.subscribe(i=>{this.hashtags=[...this.hashtags.concat(i)],console.log(JSON.stringify(i,null,2))}),e.getHashtagIndex(this.offset,50)}toggleCensoredFilter(){this.onlyShowCensored?(this.onlyShowCensored=!1,this.hashtags.length=0,this.offset=0,e.getHashtagIndex(this.offset,50)):(this.onlyShowCensored=!0,this.hashtags=[...e.censoredHashtags])}getNextPage(){this.offset+=50,e.getHashtagIndex(this.offset,50)}handleSearchEvent(i){console.log(JSON.stringify(i));var t=i.target.value.toLowerCase();if(""==t)return this.offset=0,this.hideViewMore=!1,void(this.hashtags=[...e.hashtagIndex.slice(this.offset,50)]);t.startsWith("#")||(t="#"+t);var o=e.hashtagIndex.filter(i=>i.hashtag.startsWith(t)).slice(0,50);this.hideViewMore=!0,this.hashtags=[...o]}render(){return[t("ion-header",null,t("ion-toolbar",{color:"primary"},t("ion-title",null,"Hashtag Archive"))),t("ion-content",{class:"ion-padding"},t("ion-item",null,t("ion-toggle",{slot:"end",onIonChange:i=>{this.toggleCensoredFilter(),i.preventDefault()}}),t("ion-label",null,"Only Show Censored")),t("ion-item",{class:this.onlyShowCensored?"viewMoreHidden":""},t("ion-input",{debounce:200,placeholder:"Type to Search",type:"text",onInput:i=>this.handleSearchEvent(i)})),t("ion-list",null,this.hashtags.map(i=>t("ion-item",null,t("ion-label",null,i.censored?t("ion-chip",{color:"danger"},t("ion-label",null,"CENSORED!")):"",t("ion-router-link",{href:`weibo-viewer/${i.hashtag}/posts`},i.hashtag)),t("ion-badge",{slot:"end"},i.count)))),t("ion-button",{class:this.hashtags.length>0&&!this.hideViewMore&&!this.onlyShowCensored?"":"viewMoreHidden",onClick:i=>(this.getNextPage(),console.log(i),!1),expand:"block",fill:"outline"},"View More..."))]}static get style(){return":host{display:block}.hscroll{width:100%;overflow-y:auto}.min-500{min-width:900px!important;width:100%}.darkred{color:#c00!important}.viewMoreHidden{display:none}"}};export{o as weibo_viewer};