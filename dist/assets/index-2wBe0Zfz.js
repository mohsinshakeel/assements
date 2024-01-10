var ht=Object.defineProperty;var ct=(o,t,e)=>t in o?ht(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var M=(o,t,e)=>(ct(o,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const I=globalThis,F=I.ShadowRoot&&(I.ShadyCSS===void 0||I.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,V=Symbol(),Y=new WeakMap;let it=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==V)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(F&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=Y.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Y.set(e,t))}return t}toString(){return this.cssText}};const dt=o=>new it(typeof o=="string"?o:o+"",void 0,V),pt=(o,...t)=>{const e=o.length===1?o[0]:t.reduce((i,s,r)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+o[r+1],o[0]);return new it(e,o,V)},ut=(o,t)=>{if(F)o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const i=document.createElement("style"),s=I.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,o.appendChild(i)}},J=F?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return dt(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ft,defineProperty:mt,getOwnPropertyDescriptor:$t,getOwnPropertyNames:gt,getOwnPropertySymbols:_t,getPrototypeOf:yt}=Object,$=globalThis,Z=$.trustedTypes,At=Z?Z.emptyScript:"",U=$.reactiveElementPolyfillSupport,w=(o,t)=>o,D={toAttribute(o,t){switch(t){case Boolean:o=o?At:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},st=(o,t)=>!ft(o,t),Q={attribute:!0,type:String,converter:D,reflect:!1,hasChanged:st};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),$.litPropertyMetadata??($.litPropertyMetadata=new WeakMap);class A extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Q){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);s!==void 0&&mt(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:r}=$t(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get(){return s==null?void 0:s.call(this)},set(n){const h=s==null?void 0:s.call(this);r.call(this,n),this.requestUpdate(t,h,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Q}static _$Ei(){if(this.hasOwnProperty(w("elementProperties")))return;const t=yt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(w("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(w("properties"))){const e=this.properties,i=[...gt(e),..._t(e)];for(const s of i)this.createProperty(s,e[s])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[i,s]of e)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const s=this._$Eu(e,i);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(J(s))}else t!==void 0&&e.push(J(t));return e}static _$Eu(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$Eg=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$ES(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$E_??(this._$E_=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$E_)==null||e.delete(t)}_$ES(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ut(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$E_)==null||t.forEach(e=>{var i;return(i=e.hostConnected)==null?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$E_)==null||t.forEach(e=>{var i;return(i=e.hostDisconnected)==null?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e){var r;const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(s!==void 0&&i.reflect===!0){const n=(((r=i.converter)==null?void 0:r.toAttribute)!==void 0?i.converter:D).toAttribute(e,i.type);this._$Em=t,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(t,e){var r;const i=this.constructor,s=i._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const n=i.getPropertyOptions(s),h=typeof n.converter=="function"?{fromAttribute:n.converter}:((r=n.converter)==null?void 0:r.fromAttribute)!==void 0?n.converter:D;this._$Em=s,this[s]=h.fromAttribute(e,n.type),this._$Em=null}}requestUpdate(t,e,i){if(t!==void 0){if(i??(i=this.constructor.getPropertyOptions(t)),!(i.hasChanged??st)(this[t],e))return;this.C(t,e,i)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$Em!==t&&(this._$ET??(this._$ET=new Set)).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[r,n]of this._$Ep)this[r]=n;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[r,n]of s)n.wrapped!==!0||this._$AL.has(r)||this[r]===void 0||this.C(r,this[r],n)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(i=this._$E_)==null||i.forEach(s=>{var r;return(r=s.hostUpdate)==null?void 0:r.call(s)}),this.update(e)):this._$Ej()}catch(s){throw t=!1,this._$Ej(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$E_)==null||e.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ej(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$ET&&(this._$ET=this._$ET.forEach(e=>this._$EO(e,this[e]))),this._$Ej()}updated(t){}firstUpdated(t){}}A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[w("elementProperties")]=new Map,A[w("finalized")]=new Map,U==null||U({ReactiveElement:A}),($.reactiveElementVersions??($.reactiveElementVersions=[])).push("2.0.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const E=globalThis,R=E.trustedTypes,G=R?R.createPolicy("lit-html",{createHTML:o=>o}):void 0,ot="$lit$",m=`lit$${(Math.random()+"").slice(9)}$`,rt="?"+m,bt=`<${rt}>`,y=document,C=()=>y.createComment(""),N=o=>o===null||typeof o!="object"&&typeof o!="function",nt=Array.isArray,vt=o=>nt(o)||typeof(o==null?void 0:o[Symbol.iterator])=="function",H=`[ 	
\f\r]`,S=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,q=/-->/g,B=/>/g,g=RegExp(`>|${H}(?:([^\\s"'>=/]+)(${H}*=${H}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),X=/'/g,K=/"/g,at=/^(?:script|style|textarea|title)$/i,St=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),L=St(1),b=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),tt=new WeakMap,_=y.createTreeWalker(y,129);function lt(o,t){if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return G!==void 0?G.createHTML(t):t}const wt=(o,t)=>{const e=o.length-1,i=[];let s,r=t===2?"<svg>":"",n=S;for(let h=0;h<e;h++){const a=o[h];let c,p,l=-1,u=0;for(;u<a.length&&(n.lastIndex=u,p=n.exec(a),p!==null);)u=n.lastIndex,n===S?p[1]==="!--"?n=q:p[1]!==void 0?n=B:p[2]!==void 0?(at.test(p[2])&&(s=RegExp("</"+p[2],"g")),n=g):p[3]!==void 0&&(n=g):n===g?p[0]===">"?(n=s??S,l=-1):p[1]===void 0?l=-2:(l=n.lastIndex-p[2].length,c=p[1],n=p[3]===void 0?g:p[3]==='"'?K:X):n===K||n===X?n=g:n===q||n===B?n=S:(n=g,s=void 0);const f=n===g&&o[h+1].startsWith("/>")?" ":"";r+=n===S?a+bt:l>=0?(i.push(c),a.slice(0,l)+ot+a.slice(l)+m+f):a+m+(l===-2?h:f)}return[lt(o,r+(o[e]||"<?>")+(t===2?"</svg>":"")),i]};class T{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,n=0;const h=t.length-1,a=this.parts,[c,p]=wt(t,e);if(this.el=T.createElement(c,i),_.currentNode=this.el.content,e===2){const l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(s=_.nextNode())!==null&&a.length<h;){if(s.nodeType===1){if(s.hasAttributes())for(const l of s.getAttributeNames())if(l.endsWith(ot)){const u=p[n++],f=s.getAttribute(l).split(m),P=/([.?@])?(.*)/.exec(u);a.push({type:1,index:r,name:P[2],strings:f,ctor:P[1]==="."?xt:P[1]==="?"?Ct:P[1]==="@"?Nt:k}),s.removeAttribute(l)}else l.startsWith(m)&&(a.push({type:6,index:r}),s.removeAttribute(l));if(at.test(s.tagName)){const l=s.textContent.split(m),u=l.length-1;if(u>0){s.textContent=R?R.emptyScript:"";for(let f=0;f<u;f++)s.append(l[f],C()),_.nextNode(),a.push({type:2,index:++r});s.append(l[u],C())}}}else if(s.nodeType===8)if(s.data===rt)a.push({type:2,index:r});else{let l=-1;for(;(l=s.data.indexOf(m,l+1))!==-1;)a.push({type:7,index:r}),l+=m.length-1}r++}}static createElement(t,e){const i=y.createElement("template");return i.innerHTML=t,i}}function v(o,t,e=o,i){var n,h;if(t===b)return t;let s=i!==void 0?(n=e._$Co)==null?void 0:n[i]:e._$Cl;const r=N(t)?void 0:t._$litDirective$;return(s==null?void 0:s.constructor)!==r&&((h=s==null?void 0:s._$AO)==null||h.call(s,!1),r===void 0?s=void 0:(s=new r(o),s._$AT(o,e,i)),i!==void 0?(e._$Co??(e._$Co=[]))[i]=s:e._$Cl=s),s!==void 0&&(t=v(o,s._$AS(o,t.values),s,i)),t}class Et{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=((t==null?void 0:t.creationScope)??y).importNode(e,!0);_.currentNode=s;let r=_.nextNode(),n=0,h=0,a=i[0];for(;a!==void 0;){if(n===a.index){let c;a.type===2?c=new O(r,r.nextSibling,this,t):a.type===1?c=new a.ctor(r,a.name,a.strings,this,t):a.type===6&&(c=new Tt(r,this,t)),this._$AV.push(c),a=i[++h]}n!==(a==null?void 0:a.index)&&(r=_.nextNode(),n++)}return _.currentNode=y,s}p(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class O{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=v(this,t,e),N(t)?t===d||t==null||t===""?(this._$AH!==d&&this._$AR(),this._$AH=d):t!==this._$AH&&t!==b&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):vt(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==d&&N(this._$AH)?this._$AA.nextSibling.data=t:this.$(y.createTextNode(t)),this._$AH=t}g(t){var r;const{values:e,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=T.createElement(lt(i.h,i.h[0]),this.options)),i);if(((r=this._$AH)==null?void 0:r._$AD)===s)this._$AH.p(e);else{const n=new Et(s,this),h=n.u(this.options);n.p(e),this.$(h),this._$AH=n}}_$AC(t){let e=tt.get(t.strings);return e===void 0&&tt.set(t.strings,e=new T(t)),e}T(t){nt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const r of t)s===e.length?e.push(i=new O(this.k(C()),this.k(C()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class k{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,r){this.type=1,this._$AH=d,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=d}_$AI(t,e=this,i,s){const r=this.strings;let n=!1;if(r===void 0)t=v(this,t,e,0),n=!N(t)||t!==this._$AH&&t!==b,n&&(this._$AH=t);else{const h=t;let a,c;for(t=r[0],a=0;a<r.length-1;a++)c=v(this,h[i+a],e,a),c===b&&(c=this._$AH[a]),n||(n=!N(c)||c!==this._$AH[a]),c===d?t=d:t!==d&&(t+=(c??"")+r[a+1]),this._$AH[a]=c}n&&!s&&this.O(t)}O(t){t===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class xt extends k{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===d?void 0:t}}class Ct extends k{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==d)}}class Nt extends k{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){if((t=v(this,t,e,0)??d)===b)return;const i=this._$AH,s=t===d&&i!==d||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==d&&(i===d||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Tt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){v(this,t)}}const j=E.litHtmlPolyfillSupport;j==null||j(T,O),(E.litHtmlVersions??(E.litHtmlVersions=[])).push("3.1.1");const Ot=(o,t,e)=>{const i=(e==null?void 0:e.renderBefore)??t;let s=i._$litPart$;if(s===void 0){const r=(e==null?void 0:e.renderBefore)??null;i._$litPart$=s=new O(t.insertBefore(C(),r),r,void 0,e??{})}return s._$AI(o),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class x extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Ot(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return b}}var et;x._$litElement$=!0,x.finalized=!0,(et=globalThis.litElementHydrateSupport)==null||et.call(globalThis,{LitElement:x});const z=globalThis.litElementPolyfillSupport;z==null||z({LitElement:x});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.3");class W extends x{constructor(){super(),this.states=["NY","CA","FL"],this.affiliations={NY:["L100","L102","L105"],CA:["C31","C1","C3"],FL:["R-Retiree 1","R-Retiree 2"]},this.selectedState="",this.selectedAffiliation="",this.firstName="",this.lastName="",this.email=""}render(){return L`
      <div class="form-container">
      <form @submit="${this._handleSubmit}">
        <div>
          <label for="firstName">First Name:</label>
          <input id="firstName" type="text" .value="${this.firstName}" @input="${this._handleInput}">
        </div>
  
        <div>
          <label for="lastName">Last Name:</label>
          <input id="lastName" type="text" .value="${this.lastName}" @input="${this._handleInput}">
        </div>
  
        <div>
        <label for="state">State:</label>
        <select id="state" @change="${this._handleStateChange}">
          <option value="">Select State</option>
          ${this.states.map(t=>L`<option value="${t}">${t}</option>`)}
        </select>
      </div>
  
      <div>
      <label for="affiliation">Affiliation:</label>
      <select id="affiliation" ?disabled="${!this.selectedState}" @change="${this._handleAffiliationChange}">
        <option value="">Select Affiliation</option>
        ${(this.affiliations[this.selectedState]||[]).map(t=>L`<option value="${t}">${t}</option>`)}
      </select>
    </div>
  
        <div>
          <label for="email">Email:</label>
          <input
            id="email"
            type="email"
            .value="${this.email}"
            @input="${this._handleInput}"
            aria-describedby="emailError"
            pattern=".+@\\S+\\.com"
            title="Please include an '@' in the email address 'example@domain.com'"
            required
          >
 
        </div>
        <div id="emailError" style="color: red; display: none;">
        Please include an '@' in the email address'
      </div>
        
        <button 
        @click="${this._handleRegister}"
        ?disabled="${!this._isFormValid()}">Register</button>
        </form>
      </div>
    `}_isFormValid(){return this.firstName.trim()!==""&&this.lastName.trim()!==""&&this.selectedState.trim()!==""&&this.selectedAffiliation.trim()!==""&&/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email)}_handleInput(t){const{id:e,value:i}=t.target;if(this[e]=i,this.requestUpdate(),e==="email"){const s=this.shadowRoot.getElementById("email"),r=this.shadowRoot.getElementById("emailError");/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(i)?(r.style.display="none",s.setCustomValidity("")):(r.style.display="block",s.setCustomValidity("Please include an '@' in the email address 'example@domain.com'"))}}_handleStateChange(t){this.selectedState=t.target.value,this.selectedAffiliation="",this.requestUpdate()}_handleAffiliationChange(t){this.selectedAffiliation=t.target.value,this.requestUpdate()}async connectedCallback(){super.connectedCallback(),await this.fetchStatesAndAffiliations()}async fetchStatesAndAffiliations(){try{const t=await fetch("STATES_API_ENDPOINT");if(console.log(t,"logs"),!t.ok)throw new Error(`HTTP error! Status: ${t.status}`);this.states=await t.json();const e=await fetch("AFFILIATIONS_API_ENDPOINT");if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);this.affiliations=await e.json()}catch(t){console.error("Failed to fetch states or affiliations",t)}}_handleSubmit(t){t.preventDefault();const e={name:this.firstName+this.lastName,state_id:this.selectedState,affilate_id:this.selectedAffiliation,email:this.email};console.log("form data",e),this._submitDataToApi(e)}async _submitDataToApi(t){try{const i=await fetch("https://jp1ri8tlx0.execute-api.us-east-1.amazonaws.com/dev/register",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer eyJraWQiOiJERTJ2cE0zcmRic1BRN3lySUI5VjZJOGlXQ2VTdVdQOGRpblFWZ0YxelFVPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJjZTE0OWVjMS1lN2YzLTRhNzUtYTA0NS0yZmU5YTBmOTRmYzkiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tXC91cy1lYXN0LTFfcEh0RkxIVFVUIiwiY29nbml0bzp1c2VybmFtZSI6Im1vaHNpbiIsIm9yaWdpbl9qdGkiOiJhMGFmMzIxOC03MWFkLTQ2YTktODE1ZC05ZjkzYThjNzRmOGIiLCJhdWQiOiIyczkxYWs1ZmhjNTJpY21qdmlmNDNncmppdiIsImV2ZW50X2lkIjoiODZjOTgwYjYtNDQ4Zi00YjUzLTkwYzQtNzBiNmQ3OTE5YmNmIiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE3MDQ5MTY5OTIsImV4cCI6MTcwNTAwMzM5MSwiaWF0IjoxNzA0OTE2OTkyLCJqdGkiOiIwZmNlOGIwMS1hNmQwLTQxNDYtODZlNi1kYTg5Y2RjODRiOWYiLCJlbWFpbCI6Im1vaHNpbmFsaXNoYWtlZWw5OEBnbWFpbC5jb20ifQ.STa8kGLavl7LcGHjy30OQ2TKt6NtvcJGnY_kGGtgwuLWF-bjkHTzG3VTcTOan4R3sJ-C8B9jFfv_1qH-Co8USqwndYQEZ3w8D3GK2rs-nSDWcDXxJWydgSibA4VcTspGQRDMVJtKCkqxDKZSuDlL6_Q4ebh4Ly9fVHUqiQn5PxVYRg9DNHMMpPpkjXOFaP9IZsSs4Sbbm1X-uRucJaPIgeQ5T9uj59SRqoq7CnqGmRjE2jvIFHKMCQ6Y2zMaV2_EI8e2hoaCOmcWAjmKNpR4xQcFsoS95mHhGSh9wNiiTJr8Nem8oSOOjPMw0PUJGpI6ymGqyVIQZMgsCtfGRJdvuw"},body:JSON.stringify(t)});if(!i.ok)throw new Error(`HTTP error! Status: ${i.status}`);const s=await i.json();console.log("Submission successful",s),alert("Your Account has been submitted to AFSCME for review.")}catch(e){console.error("Submission failed",e)}}}M(W,"styles",pt`
    :host {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background-color:antiquewhite
    }
    .form-container {
        /* Add your styles here */
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        // max-width: 400px; /* Or any other width */
        width:50%
        margin: auto; /* To center the form on the page */
        padding: 20px;
        box-shadow: 0 0 10px rgba(0,0,0,0.1); /* Optional: for a slight shadow */
        background-color: #fff; /* Optional: if you want a different background */
        border-radius: 8px; /* Optional: for rounded corners */
      }
      
    /* Container styles */
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-bottom: 10px;
    }

    /* Label styles */
    label {
      margin-bottom: 5px;
      min-width: 100px;
    }

    /* Input styles */
    input, select {
        width: 650px; /* for example, set a fixed width */
        padding: 8px;
        border: 1px solid #ccc; /* Standardize border */
        border-radius: 4px; /* Optional: if you want rounded corners */
        box-sizing: border-box; /* This ensures padding doesn't affect the final size */
        min-height: 40px; /* Optional: if you want a specific height */
      }

    /* Button styles */
    button {
        background-color: #4caf50; /* Normal background color */
        width: 650px; 
        color: white;
        padding: 10px 15px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        margin-left: 112px;
        transition: background-color 0.3s; /* Smooth transition for hover effect */
      }
      
      button:hover {
        background-color: #45a049; /* Darker green on hover */
      }
      
      button:disabled {
        background-color: #9e9e9e; /* Faded color when disabled */
        cursor: not-allowed; /* Change cursor to indicate the button is disabled */
        opacity: 0.7; /* Make the button look faded */
      }

    /* Media query for responsiveness */
    @media (min-width: 600px) {
      div {
        flex-direction: row;
        align-items: center;
      }

      label {
        margin-right: 10px;
        margin-bottom: 0;
      }

      input, select {
        margin-bottom: 0;
      }
      
    }
    @media (max-width: 600px) {
        div {
          flex-direction: row;
          align-items: center;
        }
  
        label {
          margin-right: 10px;
          margin-bottom: 0;
        }
  
        input, select {
          margin-bottom: 0;
        }
        button {
            background-color: #4caf50;
            width: 300px; 
            color: white;
            padding: 10px 15px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            // margin-left:112px;
          }
        
      }
  `),M(W,"properties",{states:{type:Array},affiliations:{type:Array},selectedState:{type:String},selectedAffiliation:{type:String},firstName:{type:String},lastName:{type:String},email:{type:String}});customElements.define("registration-form",W);
