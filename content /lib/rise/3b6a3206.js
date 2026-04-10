(globalThis.wpRiseJsonp=globalThis.wpRiseJsonp||[]).push([["defaultVendors-node_modules_pnpm_articulate_design-system_1_20_0__articulate_design-system-to-dc5273"],{71695(fn){var wo="Expected a function",Mr=NaN,Ba="[object Symbol]",Ao=/^\s+|\s+$/g,Dt=/^[-+]0x[0-9a-f]+$/i,Ie=/^0b[01]+$/i,ur=/^0o[0-7]+$/i,zo=parseInt,ca=typeof globalThis=="object"&&globalThis&&globalThis.Object===Object&&globalThis,Co=typeof self=="object"&&self&&self.Object===Object&&self,So=ca||Co||Function("return this")(),Er=Object.prototype,Ga=Er.toString,_o=Math.max,Nt=Math.min,Ka=function(){return So.Date.now()};function ue(F,kr,na){var Oa,R,Tr,fa,Hr,Ur,Ya=0,To=!1,ia=!1,c=!0;if(typeof F!="function")throw new TypeError(wo);kr=je(kr)||0,Za(na)&&(To=!!na.leading,ia="maxWait"in na,Tr=ia?_o(je(na.maxWait)||0,kr):Tr,c="trailing"in na?!!na.trailing:c);function m(lr){var ma=Oa,Ja=R;return Oa=R=void 0,Ya=lr,fa=F.apply(Ja,ma),fa}function ve(lr){return Ya=lr,Hr=setTimeout(qa,kr),To?m(lr):fa}function Le(lr){var ma=lr-Ur,Ja=lr-Ya,Io=kr-ma;return ia?Nt(Io,Tr-Ja):Io}function ge(lr){var ma=lr-Ur,Ja=lr-Ya;return Ur===void 0||ma>=kr||ma<0||ia&&Ja>=Tr}function qa(){var lr=Ka();if(ge(lr))return Re(lr);Hr=setTimeout(qa,Le(lr))}function Re(lr){return Hr=void 0,c&&Oa?m(lr):(Oa=R=void 0,fa)}function Vt(){Hr!==void 0&&clearTimeout(Hr),Ya=0,Oa=Ur=R=Hr=void 0}function l(){return Hr===void 0?fa:Re(Ka())}function Pe(){var lr=Ka(),ma=ge(lr);if(Oa=arguments,R=this,Ur=lr,ma){if(Hr===void 0)return ve(Ur);if(ia)return Hr=setTimeout(qa,kr),m(Ur)}return Hr===void 0&&(Hr=setTimeout(qa,kr)),fa}return Pe.cancel=Vt,Pe.flush=l,Pe}function Za(F){var kr=typeof F;return!!F&&(kr=="object"||kr=="function")}function Eo(F){return!!F&&typeof F=="object"}function Ft(F){return typeof F=="symbol"||Eo(F)&&Ga.call(F)==Ba}function je(F){if(typeof F=="number")return F;if(Ft(F))return Mr;if(Za(F)){var kr=typeof F.valueOf=="function"?F.valueOf():F;F=Za(kr)?kr+"":kr}if(typeof F!="string")return F===0?F:+F;F=F.replace(Ao,"");var na=Ie.test(F);return na||ur.test(F)?zo(F.slice(2),na?2:8):Dt.test(F)?Mr:+F}fn.exports=ue},27236(fn,wo,Mr){"use strict";Mr.r(wo),Mr.d(wo,{Arc:()=>Wu,ArcAbstractFlexLayouts:()=>kr,ArcAbstractGapSizes:()=>Eo,ArcAbstractIconSizes:()=>Za,ArcAbstractOrientations:()=>na,ArcAbstractPopoverActions:()=>ue,ArcAbstractPopoverModes:()=>Ka,ArcAbstractTextLayouts:()=>F,ArcAbstractTextOverflows:()=>je,ArcAbstractTextSizes:()=>Ft,ArcAvatar:()=>ic,ArcAvatarColors:()=>Pn,ArcAvatarColorsReserved:()=>Gl,ArcAvatarOverflow:()=>Hd,ArcAvatarOverflowSizes:()=>Xl,ArcAvatarPile:()=>As,ArcAvatarPileSizes:()=>Jl,ArcAvatarSizes:()=>Kl,ArcAvatarText:()=>lc,ArcAvatarTextGapSizes:()=>Zl,ArcAvatarTextOverflows:()=>Yl,ArcAvatarTextSizes:()=>ql,ArcBadge:()=>th,ArcBadgeColors:()=>Jd,ArcBadgeContrasts:()=>ah,ArcBadgeCount:()=>ph,ArcBadgeCountColors:()=>Xd,ArcBadgeCountContrasts:()=>uh,ArcBadgeCountShapes:()=>vh,ArcBadgeCountSizes:()=>dh,ArcBadgeCountVariants:()=>hh,ArcBadgeLayouts:()=>rh,ArcBadgeSizes:()=>Qd,ArcBadgeVariants:()=>eh,ArcButton:()=>jr,ArcButtonDeprecatedVariants:()=>bi,ArcButtonHierarchies:()=>vd,ArcButtonLayouts:()=>sd,ArcButtonPopoverActions:()=>gd,ArcButtonSchemes:()=>hd,ArcButtonShadows:()=>ud,ArcButtonShapes:()=>id,ArcButtonSizes:()=>ld,ArcButtonVariants:()=>dd,ArcCheckbox:()=>Ci,ArcCheckboxBar:()=>Eh,ArcCheckboxBarLayouts:()=>Ch,ArcCheckboxBarOption:()=>_h,ArcCheckboxBarSizes:()=>Sh,ArcCheckboxLayouts:()=>kh,ArcCheckboxSizes:()=>wh,ArcCheckboxVariants:()=>Ah,ArcDropdownMenu:()=>Rc,ArcIcon:()=>O,ArcIconText:()=>qr,ArcIconTextVariants:()=>Ws,ArcInputAction:()=>Ii,ArcLabel:()=>ce,ArcLabelContent:()=>ne,ArcLabelLayouts:()=>mh,ArcLink:()=>Gh,ArcLinkVariants:()=>Wh,ArcModal:()=>g0,ArcModalAlert:()=>f0,ArcModalAlertDefaults:()=>Ta,ArcModalAlertVariants:()=>qh,ArcModalBackdropColors:()=>Jh,ArcModalBodyPaddings:()=>Xh,ArcModalCloseReasons:()=>r0,ArcModalCommonDefaults:()=>Pr,ArcModalCommonVariants:()=>Zh,ArcModalConfirm:()=>Oi,ArcModalConfirmDefaults:()=>Ha,ArcModalConfirmVariants:()=>Yh,ArcModalSchemes:()=>Kh,ArcModalSizes:()=>Qh,ArcPopover:()=>ro,ArcPopoverActions:()=>Cs,ArcPopoverAnchors:()=>hc,ArcPopoverBoundaries:()=>uc,ArcPopoverButton:()=>qe,ArcPopoverDefaults:()=>Or,ArcPopoverDensities:()=>Gn,ArcPopoverModes:()=>sc,ArcPopoverSchemes:()=>dc,ArcPopoverVariants:()=>Wn,ArcPopoverVariantsWithOutline:()=>Ss,ArcRadio:()=>Di,ArcRadioBar:()=>A0,ArcRadioBarLayouts:()=>x0,ArcRadioBarOption:()=>w0,ArcRadioBarSizes:()=>k0,ArcRadioLayouts:()=>b0,ArcRadioSizes:()=>$0,ArcSearch:()=>nl,ArcSearchLayouts:()=>uu,ArcSearchSizes:()=>vu,ArcSearchVariants:()=>gu,ArcSelect:()=>Cu,ArcSelectLayouts:()=>bu,ArcSelectSizes:()=>$u,ArcSelectVariants:()=>yu,ArcSwitch:()=>Tu,ArcSwitchLabelPositions:()=>_e,ArcSwitchSizes:()=>Su,ArcSwitchStates:()=>xr,ArcSystemAIGradients:()=>_o,ArcSystemAlignments:()=>Co,ArcSystemColors:()=>Ga,ArcSystemGradients:()=>Nt,ArcSystemHierarchies:()=>zo,ArcSystemLayouts:()=>ca,ArcSystemLineHeights:()=>So,ArcSystemSchemes:()=>Ba,ArcSystemShadows:()=>Ao,ArcSystemShapes:()=>Ie,ArcSystemSizes:()=>Er,ArcSystemSurfaces:()=>Dt,ArcSystemVariants:()=>ur,ArcTextAlignments:()=>Du,ArcTextBodyElements:()=>hl,ArcTextBodySizes:()=>Bu,ArcTextBodyVariants:()=>Ou,ArcTextElements:()=>ul,ArcTextHeadingElements:()=>dl,ArcTextHeadingSizes:()=>Ru,ArcTextHeadingVariants:()=>Mu,ArcTextInput:()=>Ji,ArcTextInputLayouts:()=>K0,ArcTextInputSizes:()=>Z0,ArcTextInputTypes:()=>q0,ArcTextInputVariants:()=>Y0,ArcTextKinds:()=>Iu,ArcTextLineHeights:()=>Nu,ArcTextSchemes:()=>ju,ArcTextSubheadingSizes:()=>Pu,ArcTextTitleSizes:()=>Lu,ArcToast:()=>El,ArcToastDefaults:()=>wl,ArcToastPlacements:()=>kl,ArcToastPopoverActions:()=>Ku,ArcToastPopoverModes:()=>xl,ArcToastProgressBarVariants:()=>Zu,ArcToastSchemes:()=>ml,ArcToastSeverities:()=>bl,ArcToastSizes:()=>$l,ArcToastVariants:()=>yl,ArcTooltip:()=>Ac,ArcTooltipDefaults:()=>sa,SVGLogoArticulate:()=>Qt,SVGLogoProductAI:()=>rc,SVGLogoProductPeek:()=>ac,SVGLogoProductReach:()=>ec,SVGLogoProductReview:()=>oc,SVGLogoProductRise:()=>tc,SVGLogoProductStoryline:()=>cc,SVGLogoProductStudio:()=>nc,StorageType:()=>$o,adoptStyles:()=>V,adoptThemeTokens:()=>Vl,anchorNameRegistry:()=>Ue,assignRef:()=>fa,bindDelegatedEvents:()=>pi,clamp:()=>Hr,createEmptyRect:()=>av,css:()=>l,cssFeatures:()=>gc,didElementRectChange:()=>To,extractTextFromReactNode:()=>Ve,formatAnchorName:()=>pc,getPreferredAnchorForTooltipId:()=>wc,getShadowRootOrDocument:()=>ia,handlePopover:()=>Yn,handleToast:()=>Al,hasNativeAnchorPositioning:()=>vc,isDifferent:()=>Ur,isObject:()=>oi,isSame:()=>Ya,isString:()=>Do,joinArray:()=>He,logError:()=>Ns,logMessage:()=>Ds,logWarning:()=>ci,makeHtmlId:()=>zs,mapDeprecated:()=>Oa,noTailAnchors:()=>Kn,normalizeAnchorName:()=>We,pickFromList:()=>R,pickFromListByKeys:()=>Tr,resolveTailMetrics:()=>Zn,shareAdoptedStyles:()=>Fl,splitString:()=>ti,syncAnchorName:()=>qn,unbindDelegatedEvents:()=>cd,useIsoLayoutEffect:()=>Mo,useStableId:()=>Wr,useStorage:()=>rv});const Ba=["auto","light","dark","inverse"],Ao=["none","sm","md","lg","xl"],Dt=["primary","secondary","inset","raised","floating"],Ie=["circle","square","narrow"],ur=["inherit","common","disabled","neutral","outline","solid","plain","critical","ai","alpha","primary","secondary","tertiary","inverse","critical-primary","critical-secondary","ai-primary","ai-secondary","primary-inverse","secondary-inverse","tertiary-inverse","overlay-light","overlay-dark","brand-black","brand-blue","brand","info","success","warning","error","processing"],zo=["primary","secondary","tertiary","plain","link-style"],ca=["hug","fill","icon","gutter","inline"],Co=["inherit","start","left","justify","center","between","around","evenly","stretch","end","right"],So=["inherit","tight","standard","loose"],Er=["inherit","xxl","xl","lg","md","sm","xs","xxs","custom","fullscreen"],Ga=["blue","orange","mint","red","yellow","green","maroon","purple","neutral","white","black","mono","mono-inverse","overlay-light","overlay-dark","ai","brand"],_o=["ai","ai-50","ai-100","ai-200","ai-300","ai-400","ai-500","ai-600"],Nt=[..._o],Ka=["","auto","manual"],ue=["toggle","show","hide"],Za=["inherit","xl","lg","md","sm","xs"],Eo=["inherit","lg","md","sm"],Ft=["inherit","md","sm"],je=["inherit","wrap","truncate"],F=["gutter","inline"],kr=["hug","fill"],na=["horizontal","vertical"],Oa=(r,a)=>a[r]||r,R=(r,a)=>r.filter(e=>a.includes(e)),Tr=(r,a)=>a.filter(e=>r.includes(e)),fa=(r,a)=>{r&&(typeof r=="function"?r(a):r.current=a)},Hr=(r,a=0,e=100)=>Math.min(Math.max(r,a),e),Ur=(r,a)=>r!==a,Ya=(r,a)=>r===a,To=({a:r,b:a})=>Ur(r?.top,a?.top)||Ur(r?.left,a?.left)||Ur(r?.width,a?.width)||Ur(r?.height,a?.height);function ia(r){if(!(r instanceof Node))return null;const a=r.getRootNode();return a instanceof ShadowRoot||a instanceof Document?a:null}var c=Mr(16881),m=Mr(26372);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ve=globalThis,Le=ve.ShadowRoot&&(ve.ShadyCSS===void 0||ve.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ge=Symbol(),qa=new WeakMap;class Re{constructor(a,e,o){if(this._$cssResult$=!0,o!==ge)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=a,this.t=e}get styleSheet(){let a=this.o;const e=this.t;if(Le&&a===void 0){const o=e!==void 0&&e.length===1;o&&(a=qa.get(e)),a===void 0&&((this.o=a=new CSSStyleSheet).replaceSync(this.cssText),o&&qa.set(e,a))}return a}toString(){return this.cssText}}const Vt=r=>new Re(typeof r=="string"?r:r+"",void 0,ge),l=(r,...a)=>{const e=r.length===1?r[0]:a.reduce(((o,t,i)=>o+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(t)+r[i+1]),r[0]);return new Re(e,r,ge)},Pe=(r,a)=>{if(Le)r.adoptedStyleSheets=a.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const e of a){const o=document.createElement("style"),t=ve.litNonce;t!==void 0&&o.setAttribute("nonce",t),o.textContent=e.cssText,r.appendChild(o)}},lr=Le?r=>r:r=>r instanceof CSSStyleSheet?(a=>{let e="";for(const o of a.cssRules)e+=o.cssText;return Vt(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ma,defineProperty:Ja,getOwnPropertyDescriptor:Io,getOwnPropertyNames:Il,getOwnPropertySymbols:jl,getPrototypeOf:Ll}=Object,jo=globalThis,mn=jo.trustedTypes,Rl=mn?mn.emptyScript:"",Pl=jo.reactiveElementPolyfillSupport,Me=(r,a)=>r,Ht={toAttribute(r,a){switch(a){case Boolean:r=r?Rl:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,a){let e=r;switch(a){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},bn=(r,a)=>!ma(r,a),$n={attribute:!0,type:String,converter:Ht,reflect:!1,useDefault:!1,hasChanged:bn};Symbol.metadata??=Symbol("metadata"),jo.litPropertyMetadata??=new WeakMap;class pe extends HTMLElement{static addInitializer(a){this._$Ei(),(this.l??=[]).push(a)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(a,e=$n){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(a)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(a,e),!e.noAccessor){const o=Symbol(),t=this.getPropertyDescriptor(a,o,e);t!==void 0&&Ja(this.prototype,a,t)}}static getPropertyDescriptor(a,e,o){const{get:t,set:i}=Io(this.prototype,a)??{get(){return this[e]},set(n){this[e]=n}};return{get:t,set(n){const h=t?.call(this);i?.call(this,n),this.requestUpdate(a,h,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(a){return this.elementProperties.get(a)??$n}static _$Ei(){if(this.hasOwnProperty(Me("elementProperties")))return;const a=Ll(this);a.finalize(),a.l!==void 0&&(this.l=[...a.l]),this.elementProperties=new Map(a.elementProperties)}static finalize(){if(this.hasOwnProperty(Me("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Me("properties"))){const e=this.properties,o=[...Il(e),...jl(e)];for(const t of o)this.createProperty(t,e[t])}const a=this[Symbol.metadata];if(a!==null){const e=litPropertyMetadata.get(a);if(e!==void 0)for(const[o,t]of e)this.elementProperties.set(o,t)}this._$Eh=new Map;for(const[e,o]of this.elementProperties){const t=this._$Eu(e,o);t!==void 0&&this._$Eh.set(t,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(a){const e=[];if(Array.isArray(a)){const o=new Set(a.flat(1/0).reverse());for(const t of o)e.unshift(lr(t))}else a!==void 0&&e.push(lr(a));return e}static _$Eu(a,e){const o=e.attribute;return o===!1?void 0:typeof o=="string"?o:typeof a=="string"?a.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((a=>this.enableUpdating=a)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((a=>a(this)))}addController(a){(this._$EO??=new Set).add(a),this.renderRoot!==void 0&&this.isConnected&&a.hostConnected?.()}removeController(a){this._$EO?.delete(a)}_$E_(){const a=new Map,e=this.constructor.elementProperties;for(const o of e.keys())this.hasOwnProperty(o)&&(a.set(o,this[o]),delete this[o]);a.size>0&&(this._$Ep=a)}createRenderRoot(){const a=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Pe(a,this.constructor.elementStyles),a}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((a=>a.hostConnected?.()))}enableUpdating(a){}disconnectedCallback(){this._$EO?.forEach((a=>a.hostDisconnected?.()))}attributeChangedCallback(a,e,o){this._$AK(a,o)}_$ET(a,e){const o=this.constructor.elementProperties.get(a),t=this.constructor._$Eu(a,o);if(t!==void 0&&o.reflect===!0){const i=(o.converter?.toAttribute!==void 0?o.converter:Ht).toAttribute(e,o.type);this._$Em=a,i==null?this.removeAttribute(t):this.setAttribute(t,i),this._$Em=null}}_$AK(a,e){const o=this.constructor,t=o._$Eh.get(a);if(t!==void 0&&this._$Em!==t){const i=o.getPropertyOptions(t),n=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:Ht;this._$Em=t;const h=n.fromAttribute(e,i.type);this[t]=h??this._$Ej?.get(t)??h,this._$Em=null}}requestUpdate(a,e,o){if(a!==void 0){const t=this.constructor,i=this[a];if(o??=t.getPropertyOptions(a),!((o.hasChanged??bn)(i,e)||o.useDefault&&o.reflect&&i===this._$Ej?.get(a)&&!this.hasAttribute(t._$Eu(a,o))))return;this.C(a,e,o)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(a,e,{useDefault:o,reflect:t,wrapped:i},n){o&&!(this._$Ej??=new Map).has(a)&&(this._$Ej.set(a,n??e??this[a]),i!==!0||n!==void 0)||(this._$AL.has(a)||(this.hasUpdated||o||(e=void 0),this._$AL.set(a,e)),t===!0&&this._$Em!==a&&(this._$Eq??=new Set).add(a))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const a=this.scheduleUpdate();return a!=null&&await a,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,i]of this._$Ep)this[t]=i;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[t,i]of o){const{wrapped:n}=i,h=this[t];n!==!0||this._$AL.has(t)||h===void 0||this.C(t,void 0,i,h)}}let a=!1;const e=this._$AL;try{a=this.shouldUpdate(e),a?(this.willUpdate(e),this._$EO?.forEach((o=>o.hostUpdate?.())),this.update(e)):this._$EM()}catch(o){throw a=!1,this._$EM(),o}a&&this._$AE(e)}willUpdate(a){}_$AE(a){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(a)),this.updated(a)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(a){return!0}update(a){this._$Eq&&=this._$Eq.forEach((e=>this._$ET(e,this[e]))),this._$EM()}updated(a){}firstUpdated(a){}}pe.elementStyles=[],pe.shadowRootOptions={mode:"open"},pe[Me("elementProperties")]=new Map,pe[Me("finalized")]=new Map,Pl?.({ReactiveElement:pe}),(jo.reactiveElementVersions??=[]).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ut=globalThis,Lo=Ut.trustedTypes,yn=Lo?Lo.createPolicy("lit-html",{createHTML:r=>r}):void 0,Wt="$lit$",Ca=`lit$${Math.random().toFixed(9).slice(2)}$`,Gt="?"+Ca,Ml=`<${Gt}>`,Xa=document,Be=()=>Xa.createComment(""),Oe=r=>r===null||typeof r!="object"&&typeof r!="function",Kt=Array.isArray,xn=r=>Kt(r)||typeof r?.[Symbol.iterator]=="function",Zt=`[ 	
\f\r]`,De=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,kn=/-->/g,wn=/>/g,Qa=RegExp(`>|${Zt}(?:([^\\s"'>=/]+)(${Zt}*=${Zt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),An=/'/g,zn=/"/g,Cn=/^(?:script|style|textarea|title)$/i,Yt=r=>(a,...e)=>({_$litType$:r,strings:a,values:e}),ov=Yt(1),tv=Yt(2),cv=Yt(3),fe=Symbol.for("lit-noChange"),fr=Symbol.for("lit-nothing"),Sn=new WeakMap,re=Xa.createTreeWalker(Xa,129);function _n(r,a){if(!Kt(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return yn!==void 0?yn.createHTML(a):a}const En=(r,a)=>{const e=r.length-1,o=[];let t,i=a===2?"<svg>":a===3?"<math>":"",n=De;for(let h=0;h<e;h++){const d=r[h];let u,v,p=-1,g=0;for(;g<d.length&&(n.lastIndex=g,v=n.exec(d),v!==null);)g=n.lastIndex,n===De?v[1]==="!--"?n=kn:v[1]!==void 0?n=wn:v[2]!==void 0?(Cn.test(v[2])&&(t=RegExp("</"+v[2],"g")),n=Qa):v[3]!==void 0&&(n=Qa):n===Qa?v[0]===">"?(n=t??De,p=-1):v[1]===void 0?p=-2:(p=n.lastIndex-v[2].length,u=v[1],n=v[3]===void 0?Qa:v[3]==='"'?zn:An):n===zn||n===An?n=Qa:n===kn||n===wn?n=De:(n=Qa,t=void 0);const f=n===Qa&&r[h+1].startsWith("/>")?" ":"";i+=n===De?d+Ml:p>=0?(o.push(u),d.slice(0,p)+Wt+d.slice(p)+Ca+f):d+Ca+(p===-2?h:f)}return[_n(r,i+(r[e]||"<?>")+(a===2?"</svg>":a===3?"</math>":"")),o]};class Ne{constructor({strings:a,_$litType$:e},o){let t;this.parts=[];let i=0,n=0;const h=a.length-1,d=this.parts,[u,v]=En(a,e);if(this.el=Ne.createElement(u,o),re.currentNode=this.el.content,e===2||e===3){const p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(t=re.nextNode())!==null&&d.length<h;){if(t.nodeType===1){if(t.hasAttributes())for(const p of t.getAttributeNames())if(p.endsWith(Wt)){const g=v[n++],f=t.getAttribute(p).split(Ca),x=/([.?@])?(.*)/.exec(g);d.push({type:1,index:i,name:x[2],strings:f,ctor:x[1]==="."?In:x[1]==="?"?jn:x[1]==="@"?Ln:Fe}),t.removeAttribute(p)}else p.startsWith(Ca)&&(d.push({type:6,index:i}),t.removeAttribute(p));if(Cn.test(t.tagName)){const p=t.textContent.split(Ca),g=p.length-1;if(g>0){t.textContent=Lo?Lo.emptyScript:"";for(let f=0;f<g;f++)t.append(p[f],Be()),re.nextNode(),d.push({type:2,index:++i});t.append(p[g],Be())}}}else if(t.nodeType===8)if(t.data===Gt)d.push({type:2,index:i});else{let p=-1;for(;(p=t.data.indexOf(Ca,p+1))!==-1;)d.push({type:7,index:i}),p+=Ca.length-1}i++}}static createElement(a,e){const o=Xa.createElement("template");return o.innerHTML=a,o}}function ae(r,a,e=r,o){if(a===fe)return a;let t=o!==void 0?e._$Co?.[o]:e._$Cl;const i=Oe(a)?void 0:a._$litDirective$;return t?.constructor!==i&&(t?._$AO?.(!1),i===void 0?t=void 0:(t=new i(r),t._$AT(r,e,o)),o!==void 0?(e._$Co??=[])[o]=t:e._$Cl=t),t!==void 0&&(a=ae(r,t._$AS(r,a.values),t,o)),a}class Tn{constructor(a,e){this._$AV=[],this._$AN=void 0,this._$AD=a,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(a){const{el:{content:e},parts:o}=this._$AD,t=(a?.creationScope??Xa).importNode(e,!0);re.currentNode=t;let i=re.nextNode(),n=0,h=0,d=o[0];for(;d!==void 0;){if(n===d.index){let u;d.type===2?u=new me(i,i.nextSibling,this,a):d.type===1?u=new d.ctor(i,d.name,d.strings,this,a):d.type===6&&(u=new Rn(i,this,a)),this._$AV.push(u),d=o[++h]}n!==d?.index&&(i=re.nextNode(),n++)}return re.currentNode=Xa,t}p(a){let e=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(a,o,e),e+=o.strings.length-2):o._$AI(a[e])),e++}}class me{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(a,e,o,t){this.type=2,this._$AH=fr,this._$AN=void 0,this._$AA=a,this._$AB=e,this._$AM=o,this.options=t,this._$Cv=t?.isConnected??!0}get parentNode(){let a=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&a?.nodeType===11&&(a=e.parentNode),a}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(a,e=this){a=ae(this,a,e),Oe(a)?a===fr||a==null||a===""?(this._$AH!==fr&&this._$AR(),this._$AH=fr):a!==this._$AH&&a!==fe&&this._(a):a._$litType$!==void 0?this.$(a):a.nodeType!==void 0?this.T(a):xn(a)?this.k(a):this._(a)}O(a){return this._$AA.parentNode.insertBefore(a,this._$AB)}T(a){this._$AH!==a&&(this._$AR(),this._$AH=this.O(a))}_(a){this._$AH!==fr&&Oe(this._$AH)?this._$AA.nextSibling.data=a:this.T(Xa.createTextNode(a)),this._$AH=a}$(a){const{values:e,_$litType$:o}=a,t=typeof o=="number"?this._$AC(a):(o.el===void 0&&(o.el=Ne.createElement(_n(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===t)this._$AH.p(e);else{const i=new Tn(t,this),n=i.u(this.options);i.p(e),this.T(n),this._$AH=i}}_$AC(a){let e=Sn.get(a.strings);return e===void 0&&Sn.set(a.strings,e=new Ne(a)),e}k(a){Kt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,t=0;for(const i of a)t===e.length?e.push(o=new me(this.O(Be()),this.O(Be()),this,this.options)):o=e[t],o._$AI(i),t++;t<e.length&&(this._$AR(o&&o._$AB.nextSibling,t),e.length=t)}_$AR(a=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);a!==this._$AB;){const o=a.nextSibling;a.remove(),a=o}}setConnected(a){this._$AM===void 0&&(this._$Cv=a,this._$AP?.(a))}}class Fe{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(a,e,o,t,i){this.type=1,this._$AH=fr,this._$AN=void 0,this.element=a,this.name=e,this._$AM=t,this.options=i,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=fr}_$AI(a,e=this,o,t){const i=this.strings;let n=!1;if(i===void 0)a=ae(this,a,e,0),n=!Oe(a)||a!==this._$AH&&a!==fe,n&&(this._$AH=a);else{const h=a;let d,u;for(a=i[0],d=0;d<i.length-1;d++)u=ae(this,h[o+d],e,d),u===fe&&(u=this._$AH[d]),n||=!Oe(u)||u!==this._$AH[d],u===fr?a=fr:a!==fr&&(a+=(u??"")+i[d+1]),this._$AH[d]=u}n&&!t&&this.j(a)}j(a){a===fr?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,a??"")}}class In extends Fe{constructor(){super(...arguments),this.type=3}j(a){this.element[this.name]=a===fr?void 0:a}}class jn extends Fe{constructor(){super(...arguments),this.type=4}j(a){this.element.toggleAttribute(this.name,!!a&&a!==fr)}}class Ln extends Fe{constructor(a,e,o,t,i){super(a,e,o,t,i),this.type=5}_$AI(a,e=this){if((a=ae(this,a,e,0)??fr)===fe)return;const o=this._$AH,t=a===fr&&o!==fr||a.capture!==o.capture||a.once!==o.once||a.passive!==o.passive,i=a!==fr&&(o===fr||t);t&&this.element.removeEventListener(this.name,this,o),i&&this.element.addEventListener(this.name,this,a),this._$AH=a}handleEvent(a){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,a):this._$AH.handleEvent(a)}}class Rn{constructor(a,e,o){this.element=a,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(a){ae(this,a)}}const nv={M:Wt,P:Ca,A:Gt,C:1,L:En,R:Tn,D:xn,V:ae,I:me,H:Fe,N:jn,U:Ln,B:In,F:Rn},Bl=Ut.litHtmlPolyfillSupport;Bl?.(Ne,me),(Ut.litHtmlVersions??=[]).push("3.3.1");const Ol=(r,a,e)=>{const o=e?.renderBefore??a;let t=o._$litPart$;if(t===void 0){const i=e?.renderBefore??null;o._$litPart$=t=new me(a.insertBefore(Be(),i),i,void 0,e??{})}return t._$AI(r),t};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qt=globalThis;class Ro extends pe{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const a=super.createRenderRoot();return this.renderOptions.renderBefore??=a.firstChild,a}update(a){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(a),this._$Do=Ol(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return fe}}Ro._$litElement$=!0,Ro.finalized=!0,qt.litElementHydrateSupport?.({LitElement:Ro});const Dl=qt.litElementPolyfillSupport;Dl?.({LitElement:Ro});const iv={_$AK:(r,a,e)=>{r._$AK(a,e)},_$AL:r=>r._$AL};(qt.litElementVersions??=[]).push("4.2.1");const Nl=`@charset "UTF-8";
@layer arc-theme, arc-components, arc-utils;
@layer arc-theme {
  :root,
  ::backdrop {
    --arc-color-mono-black: #000000;
    --arc-color-mono-white: #ffffff;
    --arc-color-light-neutral-0: #ffffff;
    --arc-color-light-neutral-50: #f7f7f7;
    --arc-color-light-neutral-100: #ededed;
    --arc-color-light-neutral-200: #e6e6e6;
    --arc-color-light-neutral-300: #c6c6c6;
    --arc-color-light-neutral-400: #b0b0b0;
    --arc-color-light-neutral-500: #9b9b9b;
    --arc-color-light-neutral-600: #737373;
    --arc-color-light-neutral-700: #636363;
    --arc-color-light-neutral-800: #4b4b4b;
    --arc-color-light-neutral-900: #212121;
    --arc-color-light-neutral-1000: #000000;
    --arc-color-light-blue-50: #f0fbff;
    --arc-color-light-blue-100: #ddf4fd;
    --arc-color-light-blue-200: #99e4ff;
    --arc-color-light-blue-300: #53d1ff;
    --arc-color-light-blue-400: #00aff0;
    --arc-color-light-blue-500: #0098eb;
    --arc-color-light-blue-600: #0075cf;
    --arc-color-light-blue-700: #0065b2;
    --arc-color-light-blue-800: #005394;
    --arc-color-light-blue-900: #00335b;
    --arc-color-light-purple-50: #f1f0ff;
    --arc-color-light-purple-100: #e9e7fe;
    --arc-color-light-purple-200: #b2a8ff;
    --arc-color-light-purple-300: #9789fa;
    --arc-color-light-purple-400: #8676ff;
    --arc-color-light-purple-500: #7565f1;
    --arc-color-light-purple-600: #4e3bd5;
    --arc-color-light-purple-700: #3120b4;
    --arc-color-light-purple-800: #16068e;
    --arc-color-light-purple-900: #0c0064;
    --arc-color-light-mint-50: #f0fff9;
    --arc-color-light-mint-100: #d9fdef;
    --arc-color-light-mint-200: #9df1d1;
    --arc-color-light-mint-300: #6de3b6;
    --arc-color-light-mint-400: #44bf90;
    --arc-color-light-mint-500: #0f9f68;
    --arc-color-light-mint-600: #008451;
    --arc-color-light-mint-700: #006e44;
    --arc-color-light-mint-800: #005937;
    --arc-color-light-mint-900: #00442a;
    --arc-color-light-orange-50: #fff6f0;
    --arc-color-light-orange-100: #fdeadd;
    --arc-color-light-orange-200: #fac39e;
    --arc-color-light-orange-300: #fd9e5e;
    --arc-color-light-orange-400: #ff6602;
    --arc-color-light-orange-500: #e95d00;
    --arc-color-light-orange-600: #c24e00;
    --arc-color-light-orange-700: #a84300;
    --arc-color-light-orange-800: #933b00;
    --arc-color-light-orange-900: #662900;
    --arc-color-light-maroon-50: #ffeff3;
    --arc-color-light-maroon-100: #fedde5;
    --arc-color-light-maroon-200: #ffa8be;
    --arc-color-light-maroon-300: #fe8fab;
    --arc-color-light-maroon-400: #f27195;
    --arc-color-light-maroon-500: #e05580;
    --arc-color-light-maroon-600: #c73868;
    --arc-color-light-maroon-700: #aa1a53;
    --arc-color-light-maroon-800: #841a42;
    --arc-color-light-maroon-900: #5d132d;
    --arc-color-light-green-50: #f6fff0;
    --arc-color-light-green-100: #e7fdd9;
    --arc-color-light-green-200: #bfeea0;
    --arc-color-light-green-300: #8dd65c;
    --arc-color-light-green-400: #74bb44;
    --arc-color-light-green-500: #57a225;
    --arc-color-light-green-600: #358201;
    --arc-color-light-green-700: #2c6d00;
    --arc-color-light-green-800: #235800;
    --arc-color-light-green-900: #1b4300;
    --arc-color-light-yellow-50: #fffaf0;
    --arc-color-light-yellow-100: #fdf2dd;
    --arc-color-light-yellow-200: #ffdb94;
    --arc-color-light-yellow-300: #ffc960;
    --arc-color-light-yellow-400: #ffb629;
    --arc-color-light-yellow-500: #eb9b00;
    --arc-color-light-yellow-600: #9e6900;
    --arc-color-light-yellow-700: #805400;
    --arc-color-light-yellow-800: #604000;
    --arc-color-light-yellow-900: #3e2900;
    --arc-color-light-red-50: #fff0f0;
    --arc-color-light-red-100: #fde2e2;
    --arc-color-light-red-200: #ff9999;
    --arc-color-light-red-300: #ff6161;
    --arc-color-light-red-400: #ff0000;
    --arc-color-light-red-500: #eb0000;
    --arc-color-light-red-600: #b80000;
    --arc-color-light-red-700: #990000;
    --arc-color-light-red-800: #7a0000;
    --arc-color-light-red-900: #520000;
    --arc-color-dark-neutral-0: #000000;
    --arc-color-dark-neutral-50: #1c1c1c;
    --arc-color-dark-neutral-100: #2a2a2a;
    --arc-color-dark-neutral-200: #3d3d3d;
    --arc-color-dark-neutral-300: #515151;
    --arc-color-dark-neutral-400: #666666;
    --arc-color-dark-neutral-500: #7b7b7b;
    --arc-color-dark-neutral-600: #939393;
    --arc-color-dark-neutral-700: #aeaeae;
    --arc-color-dark-neutral-800: #d0d0d0;
    --arc-color-dark-neutral-900: #ededed;
    --arc-color-dark-neutral-1000: #ffffff;
    --arc-color-dark-blue-50: #002542;
    --arc-color-dark-blue-100: #093a63;
    --arc-color-dark-blue-200: #0f4d7a;
    --arc-color-dark-blue-300: #146192;
    --arc-color-dark-blue-400: #1974aa;
    --arc-color-dark-blue-500: #1e88c7;
    --arc-color-dark-blue-600: #0ca1f7;
    --arc-color-dark-blue-700: #3ab1f5;
    --arc-color-dark-blue-800: #70cbfa;
    --arc-color-dark-blue-900: #b9e6fd;
    --arc-color-dark-purple-50: #161041;
    --arc-color-dark-purple-100: #221c5a;
    --arc-color-dark-purple-200: #2d2773;
    --arc-color-dark-purple-300: #39328c;
    --arc-color-dark-purple-400: #463da6;
    --arc-color-dark-purple-500: #5449c0;
    --arc-color-dark-purple-600: #6556da;
    --arc-color-dark-purple-700: #7a6ef0;
    --arc-color-dark-purple-800: #a193f9;
    --arc-color-dark-purple-900: #d3c9ff;
    --arc-color-dark-mint-50: #04291b;
    --arc-color-dark-mint-100: #0b3425;
    --arc-color-dark-mint-200: #134434;
    --arc-color-dark-mint-300: #1b5444;
    --arc-color-dark-mint-400: #246554;
    --arc-color-dark-mint-500: #2f7766;
    --arc-color-dark-mint-600: #14b290;
    --arc-color-dark-mint-700: #52a895;
    --arc-color-dark-mint-800: #84d0bd;
    --arc-color-dark-mint-900: #d6fff2;
    --arc-color-dark-orange-50: #251104;
    --arc-color-dark-orange-100: #3a1a08;
    --arc-color-dark-orange-200: #50240d;
    --arc-color-dark-orange-300: #672f14;
    --arc-color-dark-orange-400: #7f3c1d;
    --arc-color-dark-orange-500: #984b27;
    --arc-color-dark-orange-600: #d55913;
    --arc-color-dark-orange-700: #d1764d;
    --arc-color-dark-orange-800: #eba883;
    --arc-color-dark-orange-900: #ffdcc9;
    --arc-color-dark-maroon-50: #2a0914;
    --arc-color-dark-maroon-100: #40101f;
    --arc-color-dark-maroon-200: #56162b;
    --arc-color-dark-maroon-300: #6c1e39;
    --arc-color-dark-maroon-400: #822647;
    --arc-color-dark-maroon-500: #993057;
    --arc-color-dark-maroon-600: #b13d69;
    --arc-color-dark-maroon-700: #d05886;
    --arc-color-dark-maroon-800: #e891b5;
    --arc-color-dark-maroon-900: #ffd6e7;
    --arc-color-dark-green-50: #132904;
    --arc-color-dark-green-100: #1b340a;
    --arc-color-dark-green-200: #264411;
    --arc-color-dark-green-300: #31551a;
    --arc-color-dark-green-400: #3e6625;
    --arc-color-dark-green-500: #4c7831;
    --arc-color-dark-green-600: #55a722;
    --arc-color-dark-green-700: #72a65b;
    --arc-color-dark-green-800: #a0d092;
    --arc-color-dark-green-900: #e2fcd9;
    --arc-color-dark-yellow-50: #2e2005;
    --arc-color-dark-yellow-100: #3a2907;
    --arc-color-dark-yellow-200: #51390d;
    --arc-color-dark-yellow-300: #684a14;
    --arc-color-dark-yellow-400: #7f5c1c;
    --arc-color-dark-yellow-500: #976f25;
    --arc-color-dark-yellow-600: #d99d0f;
    --arc-color-dark-yellow-700: #d1a049;
    --arc-color-dark-yellow-800: #eccc86;
    --arc-color-dark-yellow-900: #fff7d9;
    --arc-color-dark-red-50: #250404;
    --arc-color-dark-red-100: #3a0809;
    --arc-color-dark-red-200: #500d0e;
    --arc-color-dark-red-300: #671416;
    --arc-color-dark-red-400: #7e1d1f;
    --arc-color-dark-red-500: #97292b;
    --arc-color-dark-red-600: #d4423f;
    --arc-color-dark-red-700: #d86466;
    --arc-color-dark-red-800: #e88987;
    --arc-color-dark-red-900: #ffd6d6;
    --arc-color-alpha-black-0: rgb(0 0 0 / 0%);
    --arc-color-alpha-black-3: rgb(0 0 0 / 3%);
    --arc-color-alpha-black-5: rgb(0 0 0 / 5%);
    --arc-color-alpha-black-7: rgb(0 0 0 / 7%);
    --arc-color-alpha-black-10: rgb(0 0 0 / 10%);
    --arc-color-alpha-black-15: rgb(0 0 0 / 15%);
    --arc-color-alpha-black-20: rgb(0 0 0 / 20%);
    --arc-color-alpha-black-25: rgb(0 0 0 / 25%);
    --arc-color-alpha-black-30: rgb(0 0 0 / 30%);
    --arc-color-alpha-black-40: rgb(0 0 0 / 40%);
    --arc-color-alpha-black-50: rgb(0 0 0 / 50%);
    --arc-color-alpha-black-60: rgb(0 0 0 / 60%);
    --arc-color-alpha-black-70: rgb(0 0 0 / 70%);
    --arc-color-alpha-black-80: rgb(0 0 0 / 80%);
    --arc-color-alpha-black-90: rgb(0 0 0 / 90%);
    --arc-color-alpha-black-95: rgb(0 0 0 / 95%);
    --arc-color-alpha-black-100: rgb(0 0 0 / 100%);
    --arc-color-alpha-white-0: rgb(255 255 255 / 0%);
    --arc-color-alpha-white-3: rgb(255 255 255 / 3%);
    --arc-color-alpha-white-5: rgb(255 255 255 / 5%);
    --arc-color-alpha-white-7: rgb(255 255 255 / 7%);
    --arc-color-alpha-white-10: rgb(255 255 255 / 10%);
    --arc-color-alpha-white-15: rgb(255 255 255 / 15%);
    --arc-color-alpha-white-20: rgb(255 255 255 / 20%);
    --arc-color-alpha-white-25: rgb(255 255 255 / 25%);
    --arc-color-alpha-white-30: rgb(255 255 255 / 30%);
    --arc-color-alpha-white-40: rgb(255 255 255 / 40%);
    --arc-color-alpha-white-50: rgb(255 255 255 / 50%);
    --arc-color-alpha-white-60: rgb(255 255 255 / 60%);
    --arc-color-alpha-white-70: rgb(255 255 255 / 70%);
    --arc-color-alpha-white-80: rgb(255 255 255 / 80%);
    --arc-color-alpha-white-90: rgb(255 255 255 / 90%);
    --arc-color-alpha-white-95: rgb(255 255 255 / 95%);
    --arc-color-alpha-white-100: rgb(255 255 255 / 100%);
    --arc-gradient-ai-50: linear-gradient(to right top, light-dark(#fbf2ff, #210125), light-dark(#f4fbff, #00223b));
    --arc-gradient-ai-100: linear-gradient(to right top, light-dark(#efccff, #540160), light-dark(#d2f1fe, #02497d));
    --arc-gradient-ai-200: linear-gradient(to right top, light-dark(#9c15ff, #ad44cb), light-dark(#1eb4fb, #169cfe));
    --arc-gradient-ai-300: linear-gradient(to right top, light-dark(#680278, #ad44cb), light-dark(#0179d0, #71bdfe));
    --arc-gradient-ai-400: linear-gradient(to right top, light-dark(#5d3668, #c778de), light-dark(#36648c, #84daff));
    --arc-gradient-ai-500: linear-gradient(to right top, light-dark(#37003f, #e3a7ff), light-dark(#004273, #b7eaff));
    --arc-gradient-ai-600: linear-gradient(to right top, light-dark(#27002c, #f9ebff), light-dark(#012a48, #c2edff));
    --arc-color-overlay-subtle: light-dark(var(--arc-color-alpha-white-70), var(--arc-color-alpha-black-70));
    --arc-color-overlay-stark: light-dark(var(--arc-color-alpha-black-50), var(--arc-color-alpha-black-50));
    --arc-color-shadow-sm: light-dark(var(--arc-color-alpha-black-25), var(--arc-color-alpha-black-60));
    --arc-color-shadow-md: light-dark(var(--arc-color-alpha-black-15), var(--arc-color-alpha-black-50));
    --arc-color-shadow-lg: light-dark(var(--arc-color-alpha-black-15), var(--arc-color-alpha-black-40));
    --arc-color-shadow-xl: light-dark(var(--arc-color-alpha-black-15), var(--arc-color-alpha-black-40));
    --arc-color-bg-primary: light-dark(var(--arc-color-light-neutral-0), var(--arc-color-dark-neutral-100));
    --arc-color-bg-secondary: light-dark(var(--arc-color-alpha-black-5), var(--arc-color-alpha-white-10));
    --arc-color-bg-tertiary: light-dark(var(--arc-color-light-neutral-200), var(--arc-color-dark-neutral-300));
    --arc-color-bg-mono-inverse: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-bg-mono: light-dark(var(--arc-color-light-neutral-0), var(--arc-color-dark-neutral-0));
    --arc-color-bg-disabled: light-dark(var(--arc-color-alpha-black-5), var(--arc-color-alpha-white-15));
    --arc-color-bg-hover-subtle: light-dark(var(--arc-color-alpha-black-3), var(--arc-color-alpha-white-3));
    --arc-color-bg-hover-default: light-dark(var(--arc-color-alpha-black-7), var(--arc-color-alpha-white-15));
    --arc-color-bg-hover-stark: light-dark(var(--arc-color-alpha-black-15), var(--arc-color-alpha-white-30));
    --arc-color-bg-selected-subtle: light-dark(var(--arc-color-light-blue-50), var(--arc-color-dark-blue-50));
    --arc-color-bg-selected-default: light-dark(var(--arc-color-light-blue-100), var(--arc-color-dark-blue-200));
    --arc-color-bg-selected-stark: light-dark(var(--arc-color-light-blue-200), var(--arc-color-dark-blue-400));
    --arc-color-bg-theme-muted: light-dark(var(--arc-color-alpha-black-5), var(--arc-color-alpha-white-5));
    --arc-color-bg-theme-subtle: light-dark(var(--arc-color-alpha-black-10), var(--arc-color-alpha-white-15));
    --arc-color-bg-theme-mid: light-dark(var(--arc-color-light-neutral-500), var(--arc-color-dark-neutral-300));
    --arc-color-bg-theme-stark: light-dark(var(--arc-color-light-neutral-700), var(--arc-color-alpha-white-50));
    --arc-color-bg-theme-heavy: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-bg-success-muted: light-dark(var(--arc-color-light-green-50), var(--arc-color-dark-green-50));
    --arc-color-bg-success-subtle: light-dark(var(--arc-color-light-green-100), var(--arc-color-dark-green-100));
    --arc-color-bg-success-mid: light-dark(var(--arc-color-light-green-400), var(--arc-color-dark-green-400));
    --arc-color-bg-success-stark: light-dark(var(--arc-color-light-green-600), var(--arc-color-dark-green-600));
    --arc-color-bg-success-heavy: light-dark(var(--arc-color-light-green-800), var(--arc-color-dark-green-800));
    --arc-color-bg-warning-muted: light-dark(var(--arc-color-light-yellow-50), var(--arc-color-dark-yellow-50));
    --arc-color-bg-warning-subtle: light-dark(var(--arc-color-light-yellow-100), var(--arc-color-dark-yellow-100));
    --arc-color-bg-warning-mid: light-dark(var(--arc-color-light-yellow-400), var(--arc-color-dark-yellow-400));
    --arc-color-bg-warning-stark: light-dark(var(--arc-color-light-yellow-600), var(--arc-color-dark-yellow-600));
    --arc-color-bg-warning-heavy: light-dark(var(--arc-color-light-yellow-700), var(--arc-color-dark-yellow-700));
    --arc-color-bg-critical-muted: light-dark(var(--arc-color-light-red-50), var(--arc-color-dark-red-50));
    --arc-color-bg-critical-subtle: light-dark(var(--arc-color-light-red-100), var(--arc-color-dark-red-100));
    --arc-color-bg-critical-mid: light-dark(var(--arc-color-light-red-500), var(--arc-color-dark-red-600));
    --arc-color-bg-critical-stark: light-dark(var(--arc-color-light-red-600), var(--arc-color-dark-red-700));
    --arc-color-bg-critical-heavy: light-dark(var(--arc-color-light-red-800), var(--arc-color-dark-red-800));
    --arc-color-bg-info-muted: light-dark(var(--arc-color-light-purple-50), var(--arc-color-dark-purple-50));
    --arc-color-bg-info-subtle: light-dark(var(--arc-color-light-purple-100), var(--arc-color-dark-purple-100));
    --arc-color-bg-info-mid: light-dark(var(--arc-color-light-purple-500), var(--arc-color-dark-purple-500));
    --arc-color-bg-info-stark: light-dark(var(--arc-color-light-purple-600), var(--arc-color-dark-purple-700));
    --arc-color-bg-info-heavy: light-dark(var(--arc-color-light-purple-800), var(--arc-color-dark-purple-800));
    --arc-color-bg-brand-muted: light-dark(var(--arc-color-light-blue-50), var(--arc-color-dark-blue-50));
    --arc-color-bg-brand-subtle: light-dark(var(--arc-color-light-blue-100), var(--arc-color-dark-blue-100));
    --arc-color-bg-brand-mid: light-dark(var(--arc-color-light-blue-500), var(--arc-color-dark-blue-400));
    --arc-color-bg-brand-stark: light-dark(var(--arc-color-light-blue-600), var(--arc-color-dark-blue-600));
    --arc-color-bg-brand-heavy: light-dark(var(--arc-color-light-blue-800), var(--arc-color-dark-blue-800));
    --arc-color-bg-neutral-muted: light-dark(var(--arc-color-alpha-black-7), var(--arc-color-alpha-white-15));
    --arc-color-bg-neutral-subtle: light-dark(var(--arc-color-alpha-black-10), var(--arc-color-alpha-white-25));
    --arc-color-bg-neutral-mid: light-dark(var(--arc-color-light-neutral-300), var(--arc-color-dark-neutral-400));
    --arc-color-bg-neutral-stark: light-dark(var(--arc-color-light-neutral-600), var(--arc-color-dark-neutral-600));
    --arc-color-bg-neutral-heavy: light-dark(var(--arc-color-light-neutral-800), var(--arc-color-dark-neutral-800));
    --arc-color-bg-orange-muted: light-dark(var(--arc-color-light-orange-50), var(--arc-color-dark-orange-50));
    --arc-color-bg-orange-subtle: light-dark(var(--arc-color-light-orange-100), var(--arc-color-dark-orange-100));
    --arc-color-bg-orange-mid: light-dark(var(--arc-color-light-orange-400), var(--arc-color-dark-orange-400));
    --arc-color-bg-orange-stark: light-dark(var(--arc-color-light-orange-600), var(--arc-color-dark-orange-600));
    --arc-color-bg-orange-heavy: light-dark(var(--arc-color-light-orange-800), var(--arc-color-dark-orange-800));
    --arc-color-bg-mint-muted: light-dark(var(--arc-color-light-mint-50), var(--arc-color-dark-mint-50));
    --arc-color-bg-mint-subtle: light-dark(var(--arc-color-light-mint-100), var(--arc-color-dark-mint-100));
    --arc-color-bg-mint-mid: light-dark(var(--arc-color-light-mint-400), var(--arc-color-dark-mint-400));
    --arc-color-bg-mint-stark: light-dark(var(--arc-color-light-mint-600), var(--arc-color-dark-mint-600));
    --arc-color-bg-mint-heavy: light-dark(var(--arc-color-light-mint-800), var(--arc-color-dark-mint-800));
    --arc-color-bg-maroon-muted: light-dark(var(--arc-color-light-maroon-50), var(--arc-color-dark-maroon-50));
    --arc-color-bg-maroon-subtle: light-dark(var(--arc-color-light-maroon-100), var(--arc-color-dark-maroon-100));
    --arc-color-bg-maroon-mid: light-dark(var(--arc-color-light-maroon-400), var(--arc-color-dark-maroon-400));
    --arc-color-bg-maroon-stark: light-dark(var(--arc-color-light-maroon-600), var(--arc-color-dark-maroon-700));
    --arc-color-bg-maroon-heavy: light-dark(var(--arc-color-light-maroon-800), var(--arc-color-dark-maroon-800));
    --arc-color-bg-blue-muted: light-dark(var(--arc-color-light-blue-50), var(--arc-color-dark-blue-50));
    --arc-color-bg-blue-subtle: light-dark(var(--arc-color-light-blue-100), var(--arc-color-dark-blue-100));
    --arc-color-bg-blue-mid: light-dark(var(--arc-color-light-blue-500), var(--arc-color-dark-blue-400));
    --arc-color-bg-blue-stark: light-dark(var(--arc-color-light-blue-600), var(--arc-color-dark-blue-600));
    --arc-color-bg-blue-heavy: light-dark(var(--arc-color-light-blue-800), var(--arc-color-dark-blue-800));
    --arc-color-bg-purple-muted: light-dark(var(--arc-color-light-purple-50), var(--arc-color-dark-purple-50));
    --arc-color-bg-purple-subtle: light-dark(var(--arc-color-light-purple-100), var(--arc-color-dark-purple-100));
    --arc-color-bg-purple-mid: light-dark(var(--arc-color-light-purple-500), var(--arc-color-dark-purple-500));
    --arc-color-bg-purple-stark: light-dark(var(--arc-color-light-purple-600), var(--arc-color-dark-purple-700));
    --arc-color-bg-purple-heavy: light-dark(var(--arc-color-light-purple-800), var(--arc-color-dark-purple-800));
    --arc-color-bg-green-muted: light-dark(var(--arc-color-light-green-50), var(--arc-color-dark-green-50));
    --arc-color-bg-green-subtle: light-dark(var(--arc-color-light-green-100), var(--arc-color-dark-green-100));
    --arc-color-bg-green-mid: light-dark(var(--arc-color-light-green-400), var(--arc-color-dark-green-400));
    --arc-color-bg-green-stark: light-dark(var(--arc-color-light-green-600), var(--arc-color-dark-green-600));
    --arc-color-bg-green-heavy: light-dark(var(--arc-color-light-green-800), var(--arc-color-dark-green-800));
    --arc-color-bg-yellow-muted: light-dark(var(--arc-color-light-yellow-50), var(--arc-color-dark-yellow-50));
    --arc-color-bg-yellow-subtle: light-dark(var(--arc-color-light-yellow-100), var(--arc-color-dark-yellow-100));
    --arc-color-bg-yellow-mid: light-dark(var(--arc-color-light-yellow-400), var(--arc-color-dark-yellow-400));
    --arc-color-bg-yellow-stark: light-dark(var(--arc-color-light-yellow-600), var(--arc-color-dark-yellow-600));
    --arc-color-bg-yellow-heavy: light-dark(var(--arc-color-light-yellow-700), var(--arc-color-dark-yellow-700));
    --arc-color-bg-red-muted: light-dark(var(--arc-color-light-red-50), var(--arc-color-dark-red-50));
    --arc-color-bg-red-subtle: light-dark(var(--arc-color-light-red-100), var(--arc-color-dark-red-100));
    --arc-color-bg-red-mid: light-dark(var(--arc-color-light-red-500), var(--arc-color-dark-red-600));
    --arc-color-bg-red-stark: light-dark(var(--arc-color-light-red-600), var(--arc-color-dark-red-700));
    --arc-color-bg-red-heavy: light-dark(var(--arc-color-light-red-800), var(--arc-color-dark-red-800));
    --arc-color-fg-primary: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-secondary: light-dark(var(--arc-color-light-neutral-700), var(--arc-color-dark-neutral-700));
    --arc-color-fg-on-hover-subtle: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-on-hover-default: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-on-hover-stark: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-disabled: light-dark(var(--arc-color-alpha-black-40), var(--arc-color-alpha-white-40));
    --arc-color-fg-on-selected-subtle: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-on-selected-default: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-on-selected-stark: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-on-theme-muted: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-on-theme-subtle: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-on-theme-mid: light-dark(var(--arc-color-light-neutral-100), var(--arc-color-dark-neutral-800));
    --arc-color-fg-on-theme-stark: light-dark(var(--arc-color-light-neutral-0), var(--arc-color-dark-neutral-0));
    --arc-color-fg-on-theme-heavy: light-dark(var(--arc-color-light-neutral-0), var(--arc-color-dark-neutral-0));
    --arc-color-fg-on-muted: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-on-subtle: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-on-mid: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-on-stark: light-dark(var(--arc-color-light-neutral-0), var(--arc-color-dark-neutral-0));
    --arc-color-fg-on-heavy: light-dark(var(--arc-color-light-neutral-0), var(--arc-color-dark-neutral-0));
    --arc-color-fg-on-mono-inverse: light-dark(var(--arc-color-light-neutral-0), var(--arc-color-dark-neutral-0));
    --arc-color-fg-on-mono: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-success-subtle: light-dark(var(--arc-color-light-green-300), var(--arc-color-dark-green-400));
    --arc-color-fg-success-mid: light-dark(var(--arc-color-light-green-400), var(--arc-color-dark-green-600));
    --arc-color-fg-success-stark: light-dark(var(--arc-color-light-green-600), var(--arc-color-dark-green-800));
    --arc-color-fg-warning-subtle: light-dark(var(--arc-color-light-yellow-300), var(--arc-color-dark-yellow-400));
    --arc-color-fg-warning-mid: light-dark(var(--arc-color-light-yellow-500), var(--arc-color-dark-yellow-600));
    --arc-color-fg-warning-stark: light-dark(var(--arc-color-light-yellow-600), var(--arc-color-dark-yellow-800));
    --arc-color-fg-critical-subtle: light-dark(var(--arc-color-light-red-300), var(--arc-color-dark-red-500));
    --arc-color-fg-critical-mid: light-dark(var(--arc-color-light-red-500), var(--arc-color-dark-red-700));
    --arc-color-fg-critical-stark: light-dark(var(--arc-color-light-red-600), var(--arc-color-dark-red-800));
    --arc-color-fg-info-subtle: light-dark(var(--arc-color-light-purple-300), var(--arc-color-dark-purple-400));
    --arc-color-fg-info-mid: light-dark(var(--arc-color-light-purple-500), var(--arc-color-dark-purple-600));
    --arc-color-fg-info-stark: light-dark(var(--arc-color-light-purple-600), var(--arc-color-dark-purple-800));
    --arc-color-fg-brand-subtle: light-dark(var(--arc-color-light-blue-300), var(--arc-color-dark-blue-400));
    --arc-color-fg-brand-mid: light-dark(var(--arc-color-light-blue-500), var(--arc-color-dark-blue-600));
    --arc-color-fg-brand-stark: light-dark(var(--arc-color-light-blue-600), var(--arc-color-dark-blue-800));
    --arc-color-fg-orange-subtle: light-dark(var(--arc-color-light-orange-300), var(--arc-color-dark-orange-400));
    --arc-color-fg-orange-mid: light-dark(var(--arc-color-light-orange-400), var(--arc-color-dark-orange-600));
    --arc-color-fg-orange-stark: light-dark(var(--arc-color-light-orange-700), var(--arc-color-dark-orange-800));
    --arc-color-fg-mint-subtle: light-dark(var(--arc-color-light-mint-300), var(--arc-color-dark-mint-400));
    --arc-color-fg-mint-mid: light-dark(var(--arc-color-light-mint-500), var(--arc-color-dark-mint-600));
    --arc-color-fg-mint-stark: light-dark(var(--arc-color-light-mint-700), var(--arc-color-dark-mint-800));
    --arc-color-fg-maroon-subtle: light-dark(var(--arc-color-light-maroon-300), var(--arc-color-dark-maroon-400));
    --arc-color-fg-maroon-mid: light-dark(var(--arc-color-light-maroon-500), var(--arc-color-dark-maroon-600));
    --arc-color-fg-maroon-stark: light-dark(var(--arc-color-light-maroon-700), var(--arc-color-dark-maroon-800));
    --arc-color-fg-neutral-subtle: light-dark(var(--arc-color-light-neutral-300), var(--arc-color-dark-neutral-400));
    --arc-color-fg-neutral-mid: light-dark(var(--arc-color-light-neutral-500), var(--arc-color-dark-neutral-600));
    --arc-color-fg-neutral-stark: light-dark(var(--arc-color-light-neutral-700), var(--arc-color-dark-neutral-800));
    --arc-color-fg-blue-subtle: light-dark(var(--arc-color-light-blue-300), var(--arc-color-dark-blue-400));
    --arc-color-fg-blue-mid: light-dark(var(--arc-color-light-blue-500), var(--arc-color-dark-blue-600));
    --arc-color-fg-blue-stark: light-dark(var(--arc-color-light-blue-600), var(--arc-color-dark-blue-800));
    --arc-color-fg-purple-subtle: light-dark(var(--arc-color-light-purple-300), var(--arc-color-dark-purple-400));
    --arc-color-fg-purple-mid: light-dark(var(--arc-color-light-purple-500), var(--arc-color-dark-purple-600));
    --arc-color-fg-purple-stark: light-dark(var(--arc-color-light-purple-600), var(--arc-color-dark-purple-800));
    --arc-color-fg-green-subtle: light-dark(var(--arc-color-light-green-300), var(--arc-color-dark-green-400));
    --arc-color-fg-green-mid: light-dark(var(--arc-color-light-green-400), var(--arc-color-dark-green-600));
    --arc-color-fg-green-stark: light-dark(var(--arc-color-light-green-600), var(--arc-color-dark-green-800));
    --arc-color-fg-yellow-subtle: light-dark(var(--arc-color-light-yellow-300), var(--arc-color-dark-yellow-400));
    --arc-color-fg-yellow-mid: light-dark(var(--arc-color-light-yellow-500), var(--arc-color-dark-yellow-600));
    --arc-color-fg-yellow-stark: light-dark(var(--arc-color-light-yellow-600), var(--arc-color-dark-yellow-800));
    --arc-color-fg-red-subtle: light-dark(var(--arc-color-light-red-300), var(--arc-color-dark-red-500));
    --arc-color-fg-red-mid: light-dark(var(--arc-color-light-red-500), var(--arc-color-dark-red-700));
    --arc-color-fg-red-stark: light-dark(var(--arc-color-light-red-600), var(--arc-color-dark-red-800));
    --arc-color-fg-theme-muted: light-dark(var(--arc-color-alpha-black-10), var(--arc-color-alpha-white-10));
    --arc-color-fg-theme-subtle: light-dark(var(--arc-color-alpha-black-25), var(--arc-color-alpha-white-25));
    --arc-color-fg-theme-mid: light-dark(var(--arc-color-light-neutral-500), var(--arc-color-dark-neutral-300));
    --arc-color-fg-theme-stark: light-dark(var(--arc-color-light-neutral-700), var(--arc-color-alpha-white-50));
    --arc-color-fg-theme-heavy: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-border-muted: light-dark(var(--arc-color-alpha-black-3), var(--arc-color-alpha-white-5));
    --arc-color-border-subtle: light-dark(var(--arc-color-alpha-black-5), var(--arc-color-alpha-white-10));
    --arc-color-border-mid: light-dark(var(--arc-color-alpha-black-15), var(--arc-color-alpha-white-20));
    --arc-color-border-stark: light-dark(var(--arc-color-alpha-black-30), var(--arc-color-alpha-white-30));
    --arc-color-border-on-stark: light-dark(var(--arc-color-light-neutral-500), var(--arc-color-dark-neutral-600));
    --arc-color-border-heavy: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-border-theme-heavy: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-border-selected: light-dark(var(--arc-color-light-blue-500), var(--arc-color-dark-blue-500));
    --arc-color-border-focus: light-dark(var(--arc-color-light-blue-600), var(--arc-color-dark-blue-700));
    --arc-color-border-success-subtle: light-dark(var(--arc-color-light-green-200), var(--arc-color-dark-green-300));
    --arc-color-border-success-mid: light-dark(var(--arc-color-light-green-400), var(--arc-color-dark-green-400));
    --arc-color-border-success-stark: light-dark(var(--arc-color-light-green-600), var(--arc-color-dark-green-600));
    --arc-color-border-warning-subtle: light-dark(var(--arc-color-light-yellow-200), var(--arc-color-dark-yellow-300));
    --arc-color-border-warning-mid: light-dark(var(--arc-color-light-yellow-400), var(--arc-color-dark-yellow-400));
    --arc-color-border-warning-stark: light-dark(var(--arc-color-light-yellow-600), var(--arc-color-dark-yellow-600));
    --arc-color-border-critical-subtle: light-dark(var(--arc-color-light-red-200), var(--arc-color-dark-red-300));
    --arc-color-border-critical-mid: light-dark(var(--arc-color-light-red-500), var(--arc-color-dark-red-500));
    --arc-color-border-critical-stark: light-dark(var(--arc-color-light-red-600), var(--arc-color-dark-red-800));
    --arc-color-border-info-subtle: light-dark(var(--arc-color-light-purple-200), var(--arc-color-dark-purple-300));
    --arc-color-border-info-mid: light-dark(var(--arc-color-light-purple-500), var(--arc-color-dark-purple-500));
    --arc-color-border-info-stark: light-dark(var(--arc-color-light-purple-600), var(--arc-color-dark-purple-600));
    --arc-color-border-brand-subtle: light-dark(var(--arc-color-light-blue-200), var(--arc-color-dark-blue-200));
    --arc-color-border-brand-mid: light-dark(var(--arc-color-light-blue-500), var(--arc-color-dark-blue-600));
    --arc-color-border-brand-stark: light-dark(var(--arc-color-light-blue-600), var(--arc-color-dark-blue-700));
    --arc-color-border-orange-subtle: light-dark(var(--arc-color-light-orange-200), var(--arc-color-dark-orange-200));
    --arc-color-border-orange-mid: light-dark(var(--arc-color-light-orange-400), var(--arc-color-dark-orange-400));
    --arc-color-border-orange-stark: light-dark(var(--arc-color-light-orange-600), var(--arc-color-dark-orange-600));
    --arc-color-border-mint-subtle: light-dark(var(--arc-color-light-mint-200), var(--arc-color-dark-mint-200));
    --arc-color-border-mint-mid: light-dark(var(--arc-color-light-mint-400), var(--arc-color-dark-mint-400));
    --arc-color-border-mint-stark: light-dark(var(--arc-color-light-mint-600), var(--arc-color-dark-mint-600));
    --arc-color-border-maroon-subtle: light-dark(var(--arc-color-light-maroon-200), var(--arc-color-dark-maroon-200));
    --arc-color-border-maroon-mid: light-dark(var(--arc-color-light-maroon-400), var(--arc-color-dark-maroon-400));
    --arc-color-border-maroon-stark: light-dark(var(--arc-color-light-maroon-600), var(--arc-color-dark-maroon-600));
    --arc-color-border-blue-subtle: light-dark(var(--arc-color-light-blue-200), var(--arc-color-dark-blue-200));
    --arc-color-border-blue-mid: light-dark(var(--arc-color-light-blue-500), var(--arc-color-dark-blue-500));
    --arc-color-border-blue-stark: light-dark(var(--arc-color-light-blue-600), var(--arc-color-dark-blue-600));
    --arc-color-border-purple-subtle: light-dark(var(--arc-color-light-purple-200), var(--arc-color-dark-purple-300));
    --arc-color-border-purple-mid: light-dark(var(--arc-color-light-purple-500), var(--arc-color-dark-purple-500));
    --arc-color-border-purple-stark: light-dark(var(--arc-color-light-purple-600), var(--arc-color-dark-purple-600));
    --arc-color-border-green-subtle: light-dark(var(--arc-color-light-green-200), var(--arc-color-dark-green-300));
    --arc-color-border-green-mid: light-dark(var(--arc-color-light-green-400), var(--arc-color-dark-green-400));
    --arc-color-border-green-stark: light-dark(var(--arc-color-light-green-600), var(--arc-color-dark-green-600));
    --arc-color-border-yellow-subtle: light-dark(var(--arc-color-light-yellow-200), var(--arc-color-dark-yellow-300));
    --arc-color-border-yellow-mid: light-dark(var(--arc-color-light-yellow-400), var(--arc-color-dark-yellow-400));
    --arc-color-border-yellow-stark: light-dark(var(--arc-color-light-yellow-600), var(--arc-color-dark-yellow-600));
    --arc-color-border-red-subtle: light-dark(var(--arc-color-light-red-200), var(--arc-color-dark-red-300));
    --arc-color-border-red-mid: light-dark(var(--arc-color-light-red-500), var(--arc-color-dark-red-500));
    --arc-color-border-red-stark: light-dark(var(--arc-color-light-red-600), var(--arc-color-dark-red-800));
    --arc-color-border-disabled: light-dark(var(--arc-color-alpha-black-20), var(--arc-color-alpha-white-20));
    --arc-color-border-theme-subtle: light-dark(var(--arc-color-alpha-black-10), var(--arc-color-alpha-white-15));
    --arc-color-border-theme-mid: light-dark(var(--arc-color-alpha-black-15), var(--arc-color-alpha-white-25));
    --arc-color-border-theme-stark: light-dark(var(--arc-color-light-neutral-700), var(--arc-color-alpha-white-50));
    --arc-color-alpha-muted: light-dark(var(--arc-color-alpha-black-3), var(--arc-color-alpha-white-3));
    --arc-color-alpha-subtle: light-dark(var(--arc-color-alpha-black-7), var(--arc-color-alpha-white-15));
    --arc-color-alpha-mid: light-dark(var(--arc-color-alpha-black-15), var(--arc-color-alpha-white-30));
    --arc-color-alpha-stark: light-dark(var(--arc-color-alpha-black-30), var(--arc-color-alpha-white-60));
    --arc-color-alpha-heavy: light-dark(var(--arc-color-alpha-black-60), var(--arc-color-alpha-white-70));
  }
}
/*
  A NOTE ON USING ARC TOKENS (CSS VARIABLES) --------------------------\u2022

  Tokens with \`--arc-internal-\` prefixes are internal only
    - NOT FOR CONSUMER USE
    - These are System/Internal things and are not intended to be
      access or modified by consumers of the design system.
    - Please reach out to #design-system in Slack for guidance or help,
      or to request something new.


  OVERRIDES, BE CAUTIOUS \u2022 These are available for acute adjustments,
                           but not needed in most cases.
  ---------------------------------------------------------------------\u2022
  --arc-font-size-base          \u2022 Override if your app's \`rem\` size
                                  isn't effectively 16px. For instance,
                                  set to 1 if your \`rem\` is 10px.

  --arc-font-variation-settings \u2022 Research \`font-variation-settings\`
                                  before using this token.

  --arc-font-size-mono          \u2022 Controls size of monospace fonts.
  --arc-line-height-title       \u2022 Various text adjustment overrides...
  --arc-line-height-heading
  --arc-line-height-subheading
  --arc-line-height-body
  --arc-line-height-mono
  --arc-letter-spacing-title
  --arc-letter-spacing-heading
  ---------------------------------------------------------------------\u2022
*/
@layer arc-theme {
  :root,
  ::backdrop {
    --arc-internal-font-size: var(--arc-font-size-base, 0.625);
    --arc-internal-font-body: Inter, system-ui, sans-serif;
    --arc-internal-font-expressive: "GT Walsheim", system-ui, sans-serif;
    --arc-internal-font-mono: "Roboto Mono", monospace;
    --arc-internal-font-size-mono: 0.875em;
    --arc-internal-letter-spacing: -0.015em;
    --arc-internal-font-vs: "opsz" 24;
    --arc-font-family-expressive: var(--arc-internal-font-expressive);
    --arc-font-family-title: var(--arc-internal-font-expressive);
    --arc-font-family-heading: var(--arc-internal-font-expressive);
    --arc-font-family-subheading: var(--arc-internal-font-body);
    --arc-font-family-body: var(--arc-internal-font-body);
    --arc-font-family-mono: var(--arc-internal-font-mono);
    --arc-line-height-tight: 1.2;
    --arc-line-height-standard: 1.4;
    --arc-line-height-loose: 1.6;
    --arc-line-height-title: var(--arc-line-height-tight);
    --arc-line-height-heading: var(--arc-line-height-tight);
    --arc-line-height-subheading: var(--arc-line-height-tight);
    --arc-line-height-body: var(--arc-line-height-standard);
    --arc-line-height-mono: var(--arc-line-height-standard);
    --arc-letter-spacing-heading: var(--arc-internal-letter-spacing);
    --arc-letter-spacing-title: var(--arc-internal-letter-spacing);
    --arc-font-weight-400: 400;
    --arc-font-weight-500: 500;
    --arc-font-weight-600: 600;
    --arc-font-weight-title: var(--arc-font-weight-600);
    --arc-font-weight-heading: var(--arc-font-weight-600);
    --arc-font-weight-subheading: var(--arc-font-weight-600);
    --arc-font-weight-bold: var(--arc-font-weight-600);
    --arc-font-weight-body: var(--arc-font-weight-400);
    --arc-font-weight-normal: var(--arc-font-weight-400);
    --arc-font-size-08: calc(0.8rem * var(--arc-internal-font-size));
    --arc-font-size-10: calc(1rem * var(--arc-internal-font-size));
    --arc-font-size-12: calc(1.2rem * var(--arc-internal-font-size));
    --arc-font-size-14: calc(1.4rem * var(--arc-internal-font-size));
    --arc-font-size-16: calc(1.6rem * var(--arc-internal-font-size));
    --arc-font-size-18: calc(1.8rem * var(--arc-internal-font-size));
    --arc-font-size-20: calc(2rem * var(--arc-internal-font-size));
    --arc-font-size-24: calc(2.4rem * var(--arc-internal-font-size));
    --arc-font-size-28: calc(2.8rem * var(--arc-internal-font-size));
    --arc-font-size-32: calc(3.2rem * var(--arc-internal-font-size));
    --arc-font-size-40: calc(4rem * var(--arc-internal-font-size));
    --arc-font-size-title-lg: var(--arc-font-size-40);
    --arc-font-size-title-md: var(--arc-font-size-32);
    --arc-font-size-title-sm: var(--arc-font-size-28);
    --arc-font-size-heading-lg: var(--arc-font-size-24);
    --arc-font-size-heading-md: var(--arc-font-size-20);
    --arc-font-size-heading-sm: var(--arc-font-size-18);
    --arc-font-size-subheading-lg: var(--arc-font-size-16);
    --arc-font-size-subheading-md: var(--arc-font-size-14);
    --arc-font-size-subheading-sm: var(--arc-font-size-12);
    --arc-font-size-body-lg: var(--arc-font-size-16);
    --arc-font-size-body-md: var(--arc-font-size-14);
    --arc-font-size-body-sm: var(--arc-font-size-12);
    --arc-font-size-body-xs: var(--arc-font-size-10);
    --arc-font-size-mono-lg: var(--arc-font-size-14);
    --arc-font-size-mono-md: var(--arc-font-size-12);
    --arc-font-size-mono-sm: var(--arc-font-size-10);
  }
  [data-arc-theme~=font-family] {
    font-family: var(--arc-font-family-body);
    font-size: var(--arc-font-size-16);
    font-weight: var(--arc-font-weight-body);
    line-height: var(--arc-line-height-body, var(--arc-line-height-standard));
    font-variation-settings: var(--arc-font-variation-settings, var(--arc-internal-font-vs));
  }
  [data-arc-theme~=font-family] :where(h1, h2, h3) {
    font-family: var(--arc-font-family-heading);
    font-weight: var(--arc-font-weight-heading);
    letter-spacing: var(--arc-letter-spacing-heading);
    line-height: var(--arc-internal-line-height, var(--arc-line-height-heading));
  }
  [data-arc-theme~=font-family] :where(h4, h5, h6) {
    font-family: var(--arc-font-family-subheading);
    font-weight: var(--arc-font-weight-subheading);
    line-height: var(--arc-internal-line-height, var(--arc-line-height-subheading));
    font-variation-settings: var(--arc-font-variation-settings, var(--arc-internal-font-vs));
  }
  [data-arc-theme~=font-family] :where(h1) {
    font-size: var(--arc-font-size-24);
  }
  [data-arc-theme~=font-family] :where(h2) {
    font-size: var(--arc-font-size-20);
  }
  [data-arc-theme~=font-family] :where(h3) {
    font-size: var(--arc-font-size-18);
  }
  [data-arc-theme~=font-family] :where(h4) {
    font-size: var(--arc-font-size-16);
  }
  [data-arc-theme~=font-family] :where(h5) {
    font-size: var(--arc-font-size-14);
  }
  [data-arc-theme~=font-family] :where(h6) {
    font-size: var(--arc-font-size-12);
  }
  [data-arc-theme~=font-family] :where(b, strong) {
    font-weight: var(--arc-font-weight-600);
  }
  [data-arc-theme~=font-family] :where(i, em) {
    font-style: italic;
  }
  [data-arc-theme~=font-family] :where(u) {
    text-decoration: underline;
  }
  [data-arc-theme~=font-family] :where(pre, code) {
    font-family: var(--arc-font-family-mono);
    font-size: var(--arc-font-size-mono, var(--arc-internal-font-size-mono));
  }
}
@layer arc-utils {
  .arc-font-title-lg {
    font-size: var(--arc-font-size-40);
  }
  .arc-font-title-md {
    font-size: var(--arc-font-size-32);
  }
  .arc-font-title-sm {
    font-size: var(--arc-font-size-28);
  }
  :is(.arc-font-title, .arc-font-title-lg, .arc-font-title-md, .arc-font-title-sm) {
    font-family: var(--arc-font-family-title);
    font-weight: var(--arc-font-weight-title);
    letter-spacing: var(--arc-letter-spacing-title);
    line-height: var(--arc-internal-line-height, var(--arc-line-height-title));
  }
  .arc-font-heading-lg {
    font-size: var(--arc-font-size-24);
  }
  .arc-font-heading-md {
    font-size: var(--arc-font-size-20);
  }
  .arc-font-heading-sm {
    font-size: var(--arc-font-size-18);
  }
  :is(.arc-font-heading, .arc-font-heading-lg, .arc-font-heading-md, .arc-font-heading-sm) {
    font-family: var(--arc-font-family-heading);
    font-weight: var(--arc-font-weight-heading);
    letter-spacing: var(--arc-letter-spacing-heading);
    line-height: var(--arc-internal-line-height, var(--arc-line-height-heading));
  }
  .arc-font-subheading-lg {
    font-size: var(--arc-font-size-16);
  }
  .arc-font-subheading-md {
    font-size: var(--arc-font-size-14);
  }
  .arc-font-subheading-sm {
    font-size: var(--arc-font-size-12);
  }
  :is(.arc-font-subheading, .arc-font-subheading-lg, .arc-font-subheading-md, .arc-font-subheading-sm) {
    font-family: var(--arc-font-family-subheading);
    font-weight: var(--arc-font-weight-subheading);
    line-height: var(--arc-internal-line-height, var(--arc-line-height-subheading));
    font-variation-settings: var(--arc-font-variation-settings, var(--arc-internal-font-vs));
  }
  .arc-font-body-lg {
    font-size: var(--arc-font-size-16);
  }
  .arc-font-body-md {
    font-size: var(--arc-font-size-14);
  }
  .arc-font-body-sm {
    font-size: var(--arc-font-size-12);
  }
  /** @deprecated - 'xsm' is not a valid size value in our sizing names */
  :is(.arc-font-body-xsm),
  :is(.arc-font-body-xs) {
    font-size: var(--arc-font-size-10);
  }
  /** @deprecated - 'xsm' is not a valid size value in our sizing names */
  :is(.arc-font-body-xsm),
  :is(.arc-font-body, .arc-font-body-lg, .arc-font-body-md, .arc-font-body-sm) {
    font-family: var(--arc-font-family-body);
    line-height: var(--arc-internal-line-height, var(--arc-line-height-body));
    font-variation-settings: var(--arc-font-variation-settings, var(--arc-internal-font-vs));
  }
  .arc-font-mono-lg {
    font-size: var(--arc-font-size-14);
  }
  .arc-font-mono-md {
    font-size: var(--arc-font-size-12);
  }
  .arc-font-mono-sm {
    font-size: var(--arc-font-size-10);
  }
  :is(.arc-font-mono, .arc-font-mono-lg, .arc-font-mono-md, .arc-font-mono-sm) {
    font-family: var(--arc-font-family-mono);
    line-height: var(--arc-internal-line-height, var(--arc-line-height-mono));
  }
  .arc-line-height-loose {
    --arc-internal-line-height: var(--arc-line-height-loose);
    line-height: var(--arc-internal-line-height);
  }
  .arc-line-height-standard {
    --arc-internal-line-height: var(--arc-line-height-standard);
    line-height: var(--arc-internal-line-height);
  }
  .arc-line-height-tight {
    --arc-internal-line-height: var(--arc-line-height-tight);
    line-height: var(--arc-internal-line-height);
  }
}
@layer arc-theme {
  :root,
  ::backdrop {
    --arc-internal-space: 0.8rem * var(--arc-internal-font-size);
    --arc-internal-size: 0.8rem * var(--arc-internal-font-size);
    --arc-space-0: 0;
    --arc-space-0-25: calc(0.25 * var(--arc-internal-space));
    --arc-space-0-5: calc(0.5 * var(--arc-internal-space));
    --arc-space-0-75: calc(0.75 * var(--arc-internal-space));
    --arc-space-1: calc(var(--arc-internal-space));
    --arc-space-1-25: calc(1.25 * var(--arc-internal-space));
    --arc-space-1-5: calc(1.5 * var(--arc-internal-space));
    --arc-space-2: calc(2 * var(--arc-internal-space));
    --arc-space-2-5: calc(2.5 * var(--arc-internal-space));
    --arc-space-3: calc(3 * var(--arc-internal-space));
    --arc-space-4: calc(4 * var(--arc-internal-space));
    --arc-space-5: calc(5 * var(--arc-internal-space));
    --arc-space-6: calc(6 * var(--arc-internal-space));
    --arc-space-7: calc(7 * var(--arc-internal-space));
    --arc-space-8: calc(8 * var(--arc-internal-space));
    --arc-space-9: calc(9 * var(--arc-internal-space));
    --arc-space-10: calc(10 * var(--arc-internal-space));
    --arc-space-11: calc(11 * var(--arc-internal-space));
    --arc-space-12: calc(12 * var(--arc-internal-space));
    --arc-size-0: 0;
    --arc-size-0-25: calc(0.25 * var(--arc-internal-size));
    --arc-size-0-5: calc(0.5 * var(--arc-internal-size));
    --arc-size-0-75: calc(0.75 * var(--arc-internal-size));
    --arc-size-1: calc(var(--arc-internal-size));
    --arc-size-1-25: calc(1.25 * var(--arc-internal-size));
    --arc-size-1-5: calc(1.5 * var(--arc-internal-size));
    --arc-size-1-75: calc(1.75 * var(--arc-internal-size));
    --arc-size-2: calc(2 * var(--arc-internal-size));
    --arc-size-2-25: calc(2.25 * var(--arc-internal-size));
    --arc-size-2-5: calc(2.5 * var(--arc-internal-size));
    --arc-size-2-75: calc(2.75 * var(--arc-internal-size));
    --arc-size-3: calc(3 * var(--arc-internal-size));
    --arc-size-3-25: calc(3.25 * var(--arc-internal-size));
    --arc-size-3-5: calc(3.5 * var(--arc-internal-size));
    --arc-size-3-75: calc(3.75 * var(--arc-internal-size));
    --arc-size-4: calc(4 * var(--arc-internal-size));
    --arc-size-4-25: calc(4.25 * var(--arc-internal-size));
    --arc-size-4-5: calc(4.5 * var(--arc-internal-size));
    --arc-size-4-75: calc(4.75 * var(--arc-internal-size));
    --arc-size-5: calc(5 * var(--arc-internal-size));
    --arc-size-6: calc(6 * var(--arc-internal-size));
    --arc-size-7: calc(7 * var(--arc-internal-size));
    --arc-size-8: calc(8 * var(--arc-internal-size));
    --arc-size-9: calc(9 * var(--arc-internal-size));
    --arc-size-10: calc(10 * var(--arc-internal-size));
    --arc-size-11: calc(11 * var(--arc-internal-size));
    --arc-size-12: calc(12 * var(--arc-internal-size));
    --arc-size-13: calc(13 * var(--arc-internal-size));
    --arc-size-14: calc(14 * var(--arc-internal-size));
    --arc-size-15: calc(15 * var(--arc-internal-size));
    --arc-size-16: calc(16 * var(--arc-internal-size));
    --arc-size-17: calc(17 * var(--arc-internal-size));
    --arc-size-18: calc(18 * var(--arc-internal-size));
    --arc-size-19: calc(19 * var(--arc-internal-size));
    --arc-size-20: calc(20 * var(--arc-internal-size));
    --arc\u2022space\u202216m: min(-16px, -1rem);
    --arc\u2022space\u202214m: min(-14px, -0.875rem);
    --arc\u2022space\u202212m: min(-12px, -0.75rem);
    --arc\u2022space\u202210m: min(-10px, -0.625rem);
    --arc\u2022space\u20228m: min(-8px, -0.5rem);
    --arc\u2022space\u20226m: min(-6px, -0.375rem);
    --arc\u2022space\u20225m: min(-5px, -0.3125rem);
    --arc\u2022space\u20224m: min(-4px, -0.25rem);
    --arc\u2022space\u20223m: min(-3px, -0.1875rem);
    --arc\u2022space\u20222m: min(-2px, -0.125rem);
    --arc\u2022space\u20221m: min(-1px, -0.0625rem);
    --arc\u2022space\u20220: 0px;
    --arc\u2022space\u20221: max(1px, 0.0625rem);
    --arc\u2022space\u20222: max(2px, 0.125rem);
    --arc\u2022space\u20223: max(3px, 0.1875rem);
    --arc\u2022space\u20224: max(4px, 0.25rem);
    --arc\u2022space\u20225: max(5px, 0.3125rem);
    --arc\u2022space\u20226: max(6px, 0.375rem);
    --arc\u2022space\u20228: max(8px, 0.5rem);
    --arc\u2022space\u202210: max(10px, 0.625rem);
    --arc\u2022space\u202212: max(12px, 0.75rem);
    --arc\u2022space\u202214: max(14px, 0.875rem);
    --arc\u2022space\u202216: max(16px, 1rem);
    --arc\u2022space\u202218: max(18px, 1.125rem);
    --arc\u2022space\u202220: max(20px, 1.25rem);
    --arc\u2022space\u202224: max(24px, 1.5rem);
    --arc\u2022space\u202232: max(32px, 2rem);
    --arc\u2022space\u202240: max(40px, 2.5rem);
    --arc\u2022space\u202248: max(48px, 3rem);
    --arc\u2022space\u202256: max(56px, 3.5rem);
    --arc\u2022space\u202264: max(64px, 4rem);
    --arc\u2022space\u202272: max(72px, 4.5rem);
    --arc\u2022space\u202280: max(80px, 5rem);
    --arc\u2022space\u202288: max(88px, 5.5rem);
    --arc\u2022space\u202296: max(96px, 6rem);
    --arc\u2022size\u202216m: min(-16px, -1rem);
    --arc\u2022size\u202212m: min(-12px, -0.75rem);
    --arc\u2022size\u202210m: min(-10px, -0.625rem);
    --arc\u2022size\u20228m: min(-8px, -0.5rem);
    --arc\u2022size\u20226m: min(-6px, -0.375rem);
    --arc\u2022size\u20224m: min(-4px, -0.25rem);
    --arc\u2022size\u20223m: min(-3px, -0.1875rem);
    --arc\u2022size\u20222m: min(-2px, -0.125rem);
    --arc\u2022size\u20221m: min(-1px, -0.0625rem);
    --arc\u2022size\u20220: 0px;
    --arc\u2022size\u20221: max(1px, 0.0625rem);
    --arc\u2022size\u20222: max(2px, 0.125rem);
    --arc\u2022size\u20223: max(3px, 0.1875rem);
    --arc\u2022size\u20224: max(4px, 0.25rem);
    --arc\u2022size\u20225: max(5px, 0.3125rem);
    --arc\u2022size\u20226: max(6px, 0.375rem);
    --arc\u2022size\u20228: max(8px, 0.5rem);
    --arc\u2022size\u202210: max(10px, 0.625rem);
    --arc\u2022size\u202212: max(12px, 0.75rem);
    --arc\u2022size\u202214: max(14px, 0.875rem);
    --arc\u2022size\u202216: max(16px, 1rem);
    --arc\u2022size\u202218: max(18px, 1.125rem);
    --arc\u2022size\u202220: max(20px, 1.25rem);
    --arc\u2022size\u202222: max(22px, 1.375rem);
    --arc\u2022size\u202224: max(24px, 1.5rem);
    --arc\u2022size\u202226: max(26px, 1.625rem);
    --arc\u2022size\u202228: max(28px, 1.75rem);
    --arc\u2022size\u202230: max(30px, 1.875rem);
    --arc\u2022size\u202232: max(32px, 2rem);
    --arc\u2022size\u202234: max(34px, 2.125rem);
    --arc\u2022size\u202236: max(36px, 2.25rem);
    --arc\u2022size\u202238: max(38px, 2.375rem);
    --arc\u2022size\u202240: max(40px, 2.5rem);
    --arc\u2022size\u202242: max(42px, 2.625rem);
    --arc\u2022size\u202244: max(44px, 2.75rem);
    --arc\u2022size\u202246: max(46px, 2.875rem);
    --arc\u2022size\u202248: max(48px, 3rem);
    --arc\u2022size\u202250: max(50px, 3.125rem);
    --arc\u2022size\u202252: max(52px, 3.25rem);
    --arc\u2022size\u202254: max(54px, 3.375rem);
    --arc\u2022size\u202256: max(56px, 3.5rem);
    --arc\u2022size\u202258: max(58px, 3.625rem);
    --arc\u2022size\u202260: max(60px, 3.75rem);
    --arc\u2022size\u202264: max(64px, 4rem);
    --arc\u2022size\u202268: max(68px, 4.25rem);
    --arc\u2022size\u202272: max(72px, 4.5rem);
    --arc\u2022size\u202276: max(76px, 4.75rem);
    --arc\u2022size\u202280: max(80px, 5rem);
    --arc\u2022size\u202288: max(88px, 5.5rem);
    --arc\u2022size\u202296: max(96px, 6rem);
    --arc\u2022size\u2022104: max(104px, 6.5rem);
    --arc\u2022size\u2022112: max(112px, 7rem);
    --arc\u2022size\u2022120: max(120px, 7.5rem);
    --arc\u2022size\u2022128: max(128px, 8rem);
    --arc\u2022size\u2022136: max(136px, 8.5rem);
    --arc\u2022size\u2022144: max(144px, 9rem);
    --arc\u2022size\u2022152: max(152px, 9.5rem);
    --arc\u2022size\u2022160: max(160px, 10rem);
  }
}
@layer arc-theme {
  :root,
  ::backdrop {
    --arc-alpha-0: 0%;
    --arc-alpha-3: 3%;
    --arc-alpha-5: 5%;
    --arc-alpha-10: 10%;
    --arc-alpha-20: 20%;
    --arc-alpha-25: 25%;
    --arc-alpha-30: 30%;
    --arc-alpha-40: 40%;
    --arc-alpha-50: 50%;
    --arc-alpha-60: 60%;
    --arc-alpha-70: 70%;
    --arc-alpha-80: 80%;
    --arc-alpha-90: 90%;
    --arc-alpha-95: 95%;
    --arc-alpha-100: 100%;
    --arc-border-radius-none: 0px;
    --arc-border-radius-sm: max(2px, 0.125em);
    --arc-border-radius-md: max(4px, 0.25em);
    --arc-border-radius-lg: max(8px, 0.5em);
    --arc-border-radius-xl: max(16px, 1em);
    --arc-border-radius-circle: 50%;
    --arc-border-radius-pill: 100vh;
    --arc-border-width-none: 0px;
    --arc-border-width-sm: max(1px, 0.0625em);
    --arc-border-width-md: max(2px, 0.125em);
    --arc-border-width-lg: max(3px, 0.1875em);
    --arc-border-width-xl: max(4px, 0.25em);
    /* dynamic shadow tokens */
    --arc-shadow-none: none;
    --arc-shadow-sm: 0 0 max(4px, 0.25em) 0 var(--arc-color-shadow-sm);
    --arc-shadow-md: 0 max(2px, 0.125em) max(6px, 0.375em) 0 var(--arc-color-shadow-md);
    --arc-shadow-lg: 0 max(4px, 0.25em) max(24px, 1.5em) 0 var(--arc-color-shadow-lg);
    --arc-shadow-xl: 0 max(12px, 0.75em) max(48px, 3em) 0 var(--arc-color-shadow-xl);
    /* static tokens (primitive colors) */
    --arc-shadow-dark-none: none;
    --arc-shadow-dark-sm: 0 0 max(4px, 0.25em) 0 var(--arc-color-alpha-black-60);
    --arc-shadow-dark-md: 0 max(2px, 0.125em) max(6px, 0.375em) 0 var(--arc-color-alpha-black-50);
    --arc-shadow-dark-lg: 0 max(6px, 0.375em) max(24px, 1.5em) 0 var(--arc-color-alpha-black-40);
    --arc-shadow-dark-xl: 0 max(12px, 0.75em) max(48px, 3em) 0 var(--arc-color-alpha-black-40);
    /* surface shadow tokens */
    --arc-surface-raised-shadow: var(--arc-shadow-md);
    --arc-surface-floating-shadow: var(--arc-shadow-lg);
  }
}
@layer arc-utils {
  /* Gradients -----------------------------------------------------\u2022 */
  [arc-gradient] {
    background-clip: text;
    color: transparent;
  }
  [arc-gradient][arc-icon] {
    height: var(--arc-icon-height, auto);
    max-height: var(--arc-icon-max-height, none);
  }
  :is([arc-gradient], [arc-gradient=ai], [arc-gradient=ai-200]) {
    background-image: var(--arc-gradient-ai-200);
  }
  [arc-gradient=ai-50] {
    background-image: var(--arc-gradient-ai-50);
  }
  [arc-gradient=ai-100] {
    background-image: var(--arc-gradient-ai-100);
  }
  [arc-gradient=ai-300] {
    background-image: var(--arc-gradient-ai-300);
  }
  [arc-gradient=ai-400] {
    background-image: var(--arc-gradient-ai-400);
  }
  [arc-gradient=ai-500] {
    background-image: var(--arc-gradient-ai-500);
  }
  [arc-gradient=ai-600] {
    background-image: var(--arc-gradient-ai-600);
  }
  /* Shadows -------------------------------------------------------\u2022 */
  [arc-shadow=sm] {
    box-shadow: var(--arc-shadow-sm);
  }
  [arc-shadow=md] {
    box-shadow: var(--arc-shadow-md);
  }
  [arc-shadow=lg] {
    box-shadow: var(--arc-shadow-lg);
  }
  [arc-shadow=xl] {
    box-shadow: var(--arc-shadow-xl);
  }
  /* Surfaces ------------------------------------------------------\u2022 */
  [arc-surface=primary] {
    color: var(--arc-surface-primary-color, var(--arc-color-fg-primary));
    background: var(--arc-surface-primary-background, var(--arc-color-bg-primary));
  }
  [arc-surface=secondary] {
    color: var(--arc-surface-secondary-color, var(--arc-color-fg-primary));
    background: var(--arc-surface-secondary-background, var(--arc-color-bg-secondary));
  }
  [arc-surface=inset] {
    color: var(--arc-surface-inset-color, var(--arc-color-fg-primary));
    background: var(--arc-surface-inset-background, var(--arc-color-bg-tertiary));
  }
  [arc-surface=raised] {
    color: var(--arc-surface-raised-color, var(--arc-color-fg-primary));
    background: var(--arc-surface-raised-background, var(--arc-color-bg-primary));
    box-shadow: var(--arc-surface-raised-box-shadow, var(--arc-surface-raised-shadow));
    z-index: var(--arc-surface-raised-z-index, 1);
  }
  [arc-surface=floating] {
    color: var(--arc-surface-floating-color, var(--arc-color-fg-primary));
    background: var(--arc-surface-floating-background, var(--arc-color-bg-primary));
    box-shadow: var(--arc-surface-floating-box-shadow, var(--arc-surface-floating-shadow));
    z-index: var(--arc-surface-floating-z-index, 2);
  }
  /* Scheme (proximity via inheritance) ----------------------------\u2022 */
  :root:not([arc-scheme]) {
    --arc\u2022color\u2022scheme: light;
    --arc\u2022color\u2022scheme\u2022inverse: dark;
  }
  [arc-scheme=light] {
    --arc\u2022color\u2022scheme: light;
    --arc\u2022color\u2022scheme\u2022inverse: dark;
  }
  [arc-scheme=dark] {
    --arc\u2022color\u2022scheme: dark;
    --arc\u2022color\u2022scheme\u2022inverse: light;
  }
  [arc-scheme=inverse] {
    --arc\u2022color\u2022scheme: var(--arc\u2022color\u2022scheme\u2022inverse);
  }
  :root:not([arc-scheme]),
  [arc-scheme] {
    color-scheme: var(--arc\u2022color\u2022scheme, light);
  }
}
:root,
::backdrop {
  /* @deprecated background variables - please update all instances */
  --arc-color-alpha-white-03: var(--arc-color-alpha-white-3);
  --arc-color-alpha-white-05: var(--arc-color-alpha-white-5);
  --arc-color-alpha-black-03: var(--arc-color-alpha-black-3);
  --arc-color-alpha-black-05: var(--arc-color-alpha-black-5);
  --arc-color-neutral-000: var(--arc-color-light-neutral-0);
  --arc-color-neutral-050: var(--arc-color-light-neutral-50);
  --arc-color-neutral-100: var(--arc-color-light-neutral-100);
  --arc-color-neutral-200: var(--arc-color-light-neutral-200);
  --arc-color-neutral-300: var(--arc-color-light-neutral-300);
  --arc-color-neutral-400: var(--arc-color-light-neutral-400);
  --arc-color-neutral-500: var(--arc-color-light-neutral-500);
  --arc-color-neutral-600: var(--arc-color-light-neutral-600);
  --arc-color-neutral-700: var(--arc-color-light-neutral-700);
  --arc-color-neutral-800: var(--arc-color-light-neutral-800);
  --arc-color-neutral-900: var(--arc-color-light-neutral-900);
  --arc-color-blue-050: var(--arc-color-light-blue-50);
  --arc-color-blue-100: var(--arc-color-light-blue-100);
  --arc-color-blue-200: var(--arc-color-light-blue-200);
  --arc-color-blue-300: var(--arc-color-light-blue-300);
  --arc-color-blue-400: var(--arc-color-light-blue-400);
  --arc-color-blue-500: var(--arc-color-light-blue-500);
  --arc-color-blue-600: var(--arc-color-light-blue-600);
  --arc-color-blue-700: var(--arc-color-light-blue-700);
  --arc-color-blue-800: var(--arc-color-light-blue-800);
  --arc-color-blue-900: var(--arc-color-light-blue-900);
  --arc-color-purple-050: var(--arc-color-light-purple-50);
  --arc-color-purple-100: var(--arc-color-light-purple-100);
  --arc-color-purple-200: var(--arc-color-light-purple-200);
  --arc-color-purple-300: var(--arc-color-light-purple-300);
  --arc-color-purple-400: var(--arc-color-light-purple-400);
  --arc-color-purple-500: var(--arc-color-light-purple-500);
  --arc-color-purple-600: var(--arc-color-light-purple-600);
  --arc-color-purple-700: var(--arc-color-light-purple-700);
  --arc-color-purple-800: var(--arc-color-light-purple-800);
  --arc-color-purple-900: var(--arc-color-light-purple-900);
  --arc-color-maroon-050: var(--arc-color-light-maroon-50);
  --arc-color-maroon-100: var(--arc-color-light-maroon-100);
  --arc-color-maroon-200: var(--arc-color-light-maroon-200);
  --arc-color-maroon-300: var(--arc-color-light-maroon-300);
  --arc-color-maroon-400: var(--arc-color-light-maroon-400);
  --arc-color-maroon-500: var(--arc-color-light-maroon-500);
  --arc-color-maroon-600: var(--arc-color-light-maroon-600);
  --arc-color-maroon-700: var(--arc-color-light-maroon-700);
  --arc-color-maroon-800: var(--arc-color-light-maroon-800);
  --arc-color-maroon-900: var(--arc-color-light-maroon-900);
  --arc-color-red-050: var(--arc-color-light-red-50);
  --arc-color-red-100: var(--arc-color-light-red-100);
  --arc-color-red-200: var(--arc-color-light-red-200);
  --arc-color-red-300: var(--arc-color-light-red-300);
  --arc-color-red-400: var(--arc-color-light-red-400);
  --arc-color-red-500: var(--arc-color-light-red-500);
  --arc-color-red-600: var(--arc-color-light-red-600);
  --arc-color-red-700: var(--arc-color-light-red-700);
  --arc-color-red-800: var(--arc-color-light-red-800);
  --arc-color-red-900: var(--arc-color-light-red-900);
  --arc-color-orange-050: var(--arc-color-light-orange-50);
  --arc-color-orange-100: var(--arc-color-light-orange-100);
  --arc-color-orange-200: var(--arc-color-light-orange-200);
  --arc-color-orange-300: var(--arc-color-light-orange-300);
  --arc-color-orange-400: var(--arc-color-light-orange-400);
  --arc-color-orange-500: var(--arc-color-light-orange-500);
  --arc-color-orange-600: var(--arc-color-light-orange-600);
  --arc-color-orange-700: var(--arc-color-light-orange-700);
  --arc-color-orange-800: var(--arc-color-light-orange-800);
  --arc-color-orange-900: var(--arc-color-light-orange-900);
  --arc-color-yellow-050: var(--arc-color-light-yellow-50);
  --arc-color-yellow-100: var(--arc-color-light-yellow-100);
  --arc-color-yellow-200: var(--arc-color-light-yellow-200);
  --arc-color-yellow-300: var(--arc-color-light-yellow-300);
  --arc-color-yellow-400: var(--arc-color-light-yellow-400);
  --arc-color-yellow-500: var(--arc-color-light-yellow-500);
  --arc-color-yellow-600: var(--arc-color-light-yellow-600);
  --arc-color-yellow-700: var(--arc-color-light-yellow-700);
  --arc-color-yellow-800: var(--arc-color-light-yellow-800);
  --arc-color-yellow-900: var(--arc-color-light-yellow-900);
  --arc-color-green-050: var(--arc-color-light-green-50);
  --arc-color-green-100: var(--arc-color-light-green-100);
  --arc-color-green-200: var(--arc-color-light-green-200);
  --arc-color-green-300: var(--arc-color-light-green-300);
  --arc-color-green-400: var(--arc-color-light-green-400);
  --arc-color-green-500: var(--arc-color-light-green-500);
  --arc-color-green-600: var(--arc-color-light-green-600);
  --arc-color-green-700: var(--arc-color-light-green-700);
  --arc-color-green-800: var(--arc-color-light-green-800);
  --arc-color-green-900: var(--arc-color-light-green-900);
  --arc-color-mint-050: var(--arc-color-light-mint-50);
  --arc-color-mint-100: var(--arc-color-light-mint-100);
  --arc-color-mint-200: var(--arc-color-light-mint-200);
  --arc-color-mint-300: var(--arc-color-light-mint-300);
  --arc-color-mint-400: var(--arc-color-light-mint-400);
  --arc-color-mint-500: var(--arc-color-light-mint-500);
  --arc-color-mint-600: var(--arc-color-light-mint-600);
  --arc-color-mint-700: var(--arc-color-light-mint-700);
  --arc-color-mint-800: var(--arc-color-light-mint-800);
  --arc-color-mint-900: var(--arc-color-light-mint-900);
  --arc-gradient-ai-050: var(--arc-gradient-ai-50);
  --arc-color-ai-purple-050: #fbf2ff;
  --arc-color-ai-purple-100: #efccff;
  --arc-color-ai-purple-200: #9c15ff;
  --arc-color-ai-purple-300: #680278;
  --arc-color-ai-purple-400: #5d3668;
  --arc-color-ai-purple-500: #37003f;
  --arc-color-ai-purple-600: #27002c;
  --arc-color-ai-blue-050: #f4fbff;
  --arc-color-ai-blue-100: #d2f1fe;
  --arc-color-ai-blue-200: #1eb4fb;
  --arc-color-ai-blue-300: #0179d0;
  --arc-color-ai-blue-400: #36648c;
  --arc-color-ai-blue-500: #004273;
  --arc-color-ai-blue-600: #012a48;
  /* @deprecated background variables - please update all instances */
  --arc-color-background-primary: var(--arc-color-bg-primary);
  --arc-color-background-primary-hover: var(--arc-color-bg-hover-default);
  --arc-color-background-primary-selected-subtle: var(--arc-color-bg-selected-subtle);
  --arc-color-background-primary-selected: var(--arc-color-bg-selected-default);
  --arc-color-background-primary-selected-stark: var(--arc-color-bg-selected-stark);
  --arc-color-background-secondary: var(--arc-color-bg-secondary);
  --arc-color-background-secondary-hover: var(--arc-color-bg-hover-default);
  --arc-color-background-tertiary: var(--arc-color-bg-tertiary);
  --arc-color-background-inverse: var(--arc-color-light-neutral-1000);
  --arc-color-overlay-dark: var(--arc-color-overlay-stark);
  --arc-color-overlay-light: var(--arc-color-overlay-subtle);
  /* @deprecated foreground variables - please update all instances */
  --arc-color-text-primary: var(--arc-color-fg-primary);
  --arc-color-icon-primary: var(--arc-color-fg-primary);
  --arc-color-text-secondary: var(--arc-color-fg-secondary);
  --arc-color-icon-secondary: var(--arc-color-fg-secondary);
  --arc-color-icon-primary-hover: var(--arc-color-fg-hover);
  --arc-color-text-primary-hover: var(--arc-color-fg-hover);
  --arc-color-text-secondary-hover: var(--arc-color-fg-hover-heavy);
  --arc-color-icon-secondary-hover: var(--arc-color-fg-hover-heavy);
  --arc-color-text-disabled: var(--arc-color-fg-disabled);
  --arc-color-icon-disabled: var(--arc-color-fg-disabled);
  --arc-color-text-inverse: var(--arc-color-dark-neutral-1000);
  --arc-color-icon-inverse: var(--arc-color-dark-neutral-1000);
  --arc-color-text-inverse-secondary: var(--arc-color-dark-neutral-700);
  --arc-color-icon-inverse-secondary: var(--arc-color-dark-neutral-700);
  --arc-color-text-inverse-hover: var(--arc-color-dark-neutral-700);
  --arc-color-icon-inverse-hover: var(--arc-color-dark-neutral-700);
  --arc-color-text-inverse-disabled: var(--arc-color-alpha-white-30);
  --arc-color-icon-inverse-disabled: var(--arc-color-alpha-white-30);
  --arc-color-text-info: var(--arc-color-fg-info-stark);
  --arc-color-icon-info: var(--arc-color-fg-info-stark);
  --arc-color-text-brand: var(--arc-color-fg-brand-stark);
  --arc-color-icon-brand: var(--arc-color-fg-brand-mid);
  --arc-color-text-success: var(--arc-color-fg-success-stark);
  --arc-color-icon-success: var(--arc-color-fg-success-stark);
  --arc-color-text-warning: var(--arc-color-fg-warning-stark);
  --arc-color-icon-warning: var(--arc-color-fg-warning-stark);
  --arc-color-text-critical: var(--arc-color-fg-critical-mid);
  --arc-color-icon-critical: var(--arc-color-fg-critical-mid);
  /* @deprecated border variable - please update all instances */
  --arc-color-border-orange: var(--arc-color-border-orange-mid);
  --arc-color-border-mint: var(--arc-color-border-mint-mid);
  --arc-color-border-maroon: var(--arc-color-border-maroon-mid);
  --arc-color-border-standard: var(--arc-color-border-mid);
  --arc-color-border-full: var(--arc-color-border-heavy);
  --arc-color-border-focus-inverse: var(--arc-color-light-blue-300);
  --arc-border-width-standard: var(--arc-border-width-sm);
  /* @deprecated color variables - please update all instances */
  --arc-color-info-light: var(--arc-color-bg-info-muted);
  --arc-color-info-medium: var(--arc-color-bg-info-subtle);
  --arc-color-info-root: var(--arc-color-bg-info-mid);
  --arc-color-info-dark: var(--arc-color-bg-info-stark);
  --arc-color-info-heavy: var(--arc-color-bg-info-heavy);
  --arc-color-border-info: var(--arc-color-border-info-mid);
  --arc-color-brand-light: var(--arc-color-bg-brand-muted);
  --arc-color-brand-medium: var(--arc-color-bg-brand-subtle);
  --arc-color-brand-root: var(--arc-color-bg-brand-mid);
  --arc-color-brand-dark: var(--arc-color-bg-brand-stark);
  --arc-color-brand-heavy: var(--arc-color-bg-brand-heavy);
  --arc-color-border-brand: var(--arc-color-border-brand-mid);
  --arc-color-success-light: var(--arc-color-bg-success-muted);
  --arc-color-success-medium: var(--arc-color-bg-success-subtle);
  --arc-color-success-root: var(--arc-color-bg-success-mid);
  --arc-color-success-dark: var(--arc-color-bg-success-stark);
  --arc-color-success-heavy: var(--arc-color-bg-success-heavy);
  --arc-color-border-success: var(--arc-color-border-success-mid);
  --arc-color-warning-light: var(--arc-color-bg-warning-muted);
  --arc-color-warning-medium: var(--arc-color-bg-warning-subtle);
  --arc-color-warning-root: var(--arc-color-bg-warning-mid);
  --arc-color-warning-dark: var(--arc-color-bg-warning-stark);
  --arc-color-warning-heavy: var(--arc-color-bg-warning-heavy);
  --arc-color-border-warning: var(--arc-color-border-warning-mid);
  --arc-color-critical-light: var(--arc-color-bg-critical-muted);
  --arc-color-critical-medium: var(--arc-color-bg-critical-subtle);
  --arc-color-critical-root: var(--arc-color-bg-critical-mid);
  --arc-color-critical-dark: var(--arc-color-bg-critical-stark);
  --arc-color-critical-heavy: var(--arc-color-bg-critical-heavy);
  --arc-color-border-critical: var(--arc-color-border-critical-mid);
  /** @deprecated - temporary shadow mappings */
  --arc-shadow-light-none: var(--arc-shadow-none);
  --arc-shadow-light-sm: var(--arc-shadow-sm);
  --arc-shadow-light-md: var(--arc-shadow-md);
  --arc-shadow-light-lg: var(--arc-shadow-lg);
  --arc-shadow-light-xl: var(--arc-shadow-xl);
  /** @deprecated - old alpha leading zeros */
  --arc-alpha-03: var(--arc-alpha-3);
  --arc-alpha-05: var(--arc-alpha-5);
}

/*# sourceMappingURL=theme.css.map */
`,Jt={};function V(r,a){if(typeof document<"u"&&a?.styleSheet){const e=Jt[r];Jt[r]=a.styleSheet,document.adoptedStyleSheets=[...document.adoptedStyleSheets.filter(o=>o!==e),a.styleSheet]}}function Fl(r){const a=Object.values(Jt),e=document.adoptedStyleSheets.filter(o=>a.includes(o));if(r.adoptedStyleSheets){const o=e.filter(t=>!r.adoptedStyleSheets.includes(t));r.adoptedStyleSheets=[...r.adoptedStyleSheets,...o]}}function Vl(r){if(typeof CSSStyleSheet<"u"){const a=new CSSStyleSheet;a.replaceSync(Nl),r.adoptedStyleSheets&&(r.adoptedStyleSheets.includes(a)||(r.adoptedStyleSheets=[...r.adoptedStyleSheets,a]))}}const Hl=r=>r?.trim().charAt(0)??void 0,Ul=(r,a)=>{let e=0;const o=Math.min(r.length,50);for(let t=0;t<o;t+=1)e=(e+r.charCodeAt(t))%(a??33);return e},Wl=(r,a,e)=>a?.length?r?.trim()===""?e||a[0]:a[Ul(r,a.length)]||e||a[0]:e,Pn=R(Ga,["blue","orange","mint","red","yellow","green","maroon","purple"]),Gl=R(Ga,["neutral","white","black"]),Po=R(Er,["lg","md","sm","xs"]),Kl=[...Po,"profile-sm","profile-md","profile-lg"],Zl=Eo,Yl=je,ql=Po,Jl=Po,Xl=Po,k=l`--arc•input•mask`,s=l`--arc•size`,b=l`--arc•space`,Z=l`--arc•avatar`,mr=l`${Z}•chars`,Xt=l`

  &[data-size=lg] {
    ${Z}•font•size: var(${s}•16);
    ${Z}•size: 2.5em; /* target: 40px @ 100% */
    ${mr}•1: var(${s}•16);
    ${mr}•2: var(${s}•14);
    ${mr}•3: var(${s}•12);
  }

  &:is([data-size=md], [data-size=inherit], :not([data-size])) { /* @default size */
    ${Z}•font•size: var(${s}•14);
    ${Z}•size: 2.2857142857em; /* target: 32px @ 100% (32 / 14 * 1em) */
    ${mr}•1: var(${s}•14);
    ${mr}•2: var(${s}•12);
    ${mr}•3: var(${s}•10);
  }

  &[data-size=sm] {
    ${Z}•font•size: var(${s}•12);
    ${Z}•size: 2em; /* target: 24px @ 100% */
    ${mr}•1: var(${s}•12);
    ${mr}•2: var(${s}•10);
    ${mr}•3: var(${s}•8);
  }

  &[data-size=xs] {
    ${Z}•font•size: var(${s}•10);
    ${Z}•size: 2em; /* target: 20px @ 100% */
    ${mr}•1: var(${s}•10);
    ${mr}•2: var(${s}•8);
    ${mr}•3: var(${s}•6);
  }

`,Ql=l`

  &[data-size=profile-lg] {
    ${Z}•font•size: var(${s}•40);
    ${Z}•size: 4em;
  }

  &[data-size=profile-md] {
    ${Z}•font•size: var(${s}•32);
    ${Z}•size: 3em;
  }

  &[data-size=profile-sm] {
    ${Z}•font•size: var(${s}•28);
    ${Z}•size: 2.2857142857em; /* target: 64px @ 100% (64 / 28 * 1em) */
  }

`,Mn=l`

  [arc-avatar] {
    ${Z}•font•size: inherit;
    ${Z}•size: inherit;
    ${mr}•1: inherit;
    ${mr}•2: inherit;
    ${mr}•3: inherit;
  }

`,ee=l`${Z}•fg`,Br=l`${Z}•bg`,rs=l`
@layer arc-components {

  [arc-avatar] {
    /* Colors --------------------------------------------------------• */
    ${ee}: var(--arc-avatar-color, var(--arc-color-mono-white));

    &:has([data-color=blue]) { /* @default color */
      ${Br}: var(--arc-color-light-blue-400);
    }
    &:has([data-color=purple]) {
      ${Br}: var(--arc-color-light-purple-400);
    }
    &:has([data-color=red]) {
      ${Br}: var(--arc-color-light-red-400);
    }
    &:has([data-color=yellow]) {
      ${Br}: var(--arc-color-light-yellow-400);
    }
    &:has([data-color=green]) {
      ${Br}: var(--arc-color-light-green-400);
    }
    &:has([data-color=maroon]) {
      ${Br}: var(--arc-color-light-maroon-400);
    }
    &:has([data-color=orange]) {
      ${Br}: var(--arc-color-light-orange-400);
    }
    &:has([data-color=mint]) {
      ${Br}: var(--arc-color-light-mint-400);
    }

    /* RESERVED COLORS -----------------------------------------------• */
    &:has([data-color=black]) {
      ${ee}: light-dark(var(--arc-color-mono-white), var(--arc-color-mono-black));
      ${Br}: light-dark(var(--arc-color-mono-black), var(--arc-color-mono-white));
    }

    &:has([data-color=neutral]) { /* @default anonymous */
      ${ee}: var(--arc-color-fg-secondary);
      ${Br}: var(--arc-color-alpha-subtle);
    }

    &:has([data-color=white]) {
      ${ee}: var(--arc-color-mono-black);
      ${Br}: var(--arc-color-mono-white);
    }

    /* SIZES ---------------------------------------------------------• */
    ${Xt}
    ${Ql}
  }

  /* CORE AVATAR STYLES ----------------------------------------------• */
  [arc-avatar]:not([hidden]) {
    font-size: var(--arc-avatar-font-size, var(${Z}•font•size));

    flex: none;
    align-self: center;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--arc-avatar-size, var(${Z}•size));
    aspect-ratio: 1 / 1;
    line-height: normal;

    text-align: center;
    position: relative;
    overflow: hidden;
    border-radius: var(--arc-border-radius-circle);

    &[data-is-inactive] {
      opacity: var(--arc-alpha-50);
    }

    [data-num-length] {
      --arc-button-font-size: var(${mr}•1);
    }

    [data-num-length='2'] {
      --arc-button-font-size: var(${mr}•2);
    }

    [data-num-length='3'] {
      --arc-button-font-size: var(${mr}•3);
    }


    /* INNER ELEMENTS ------------------------------------------------• */

    [data-element=counter] {
      ${Z}•pointer•events: all;

      /* Inter-Component Communication • ArcButton --------------------• */
      --arc-button-width: 100%;
      --arc-button-height: auto;
      --arc-button-aspect-ratio: 1 /1;
      --arc-button-padding: 0;
      --arc-button-background: var(--arc-avatar-background, var(${Br}));
      --arc-button-color: var(--arc-avatar-color, var(${ee}));

      &:disabled {
        --arc-button-cursor: default;
      }
    }

    [data-element=image] {
      object-fit: cover;

      /* Hides problematic image */
      &:is([data-not-loaded], [data-has-error]) {
        ${Z}•visibility: hidden;
      }

      /* Hides subsequent elements with valid image */
      &:not([data-has-error]) ~ [data-element] {
        ${ee}: transparent;
        ${Br}: none;
      }
    }

    :is(
      [data-element=counter],
      [data-element=initial],
      [data-element=anonymous]
    ) {
      background: var(${Br});
      color: var(${ee});
    }

    :is([data-element=initial]) {
      font-size: var(--arc-avatar-initial-font-size, inherit);
      text-transform: var(--arc-avatar-text-transform, capitalize);
    }

    [data-element] {
      flex: none;
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;

      width: 100%;
      height: 100%;

      border-radius: inherit;
      font-weight: var(--arc-font-weight-600);
      visibility: var(${Z}•visibility, unset);

      transition-duration: 200ms;
      transition-behavior: allow-discrete;
      transition-timing-function: linear;
      transition-property:
        visibility,
        background-color,
        color;

      pointer-events: var(${Z}•pointer•events, none);
      user-select: none;
      -webkit-user-select: none;
    }
  }

}
`,as=({children:r,initial:a,color:e,...o})=>(0,c.jsx)("span",{...o,"data-element":"initial","data-color":e,children:r||a}),es=({isLoaded:r,hasError:a,onLoad:e,onError:o,...t})=>{const i=!r&&""||void 0,n=a&&""||void 0,h=!r||a||void 0;return(0,c.jsx)("img",{...t,hidden:h,"data-element":"image","data-not-loaded":i,"data-has-error":n,onLoad:e,onError:o})},Qt=r=>(0,c.jsx)("svg",{...r,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,c.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.2362 2V4.04215H3.7443V2H16.2362ZM13.8453 11.7538C13.8453 9.47528 12.1743 7.75773 9.96905 7.75773C7.79316 7.75773 6.15147 9.47528 6.15147 11.7538C6.15147 14.0323 7.7899 15.753 9.96905 15.753C12.1775 15.753 13.8453 14.0355 13.8453 11.7569V11.7538ZM9.96905 18C6.29153 18 3.5 15.3213 3.5 11.7538C3.5 8.20209 6.27524 5.50758 9.96905 5.49183C13.6922 5.49183 16.5 8.17057 16.5 11.738V17.6754H13.8485V16.3581C13.8485 16.3581 12.3925 18 9.97231 18H9.96905Z",fill:"var(--arc-color-logo-articulate, #000000)"})}),rc=r=>(0,c.jsxs)("svg",{...r,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:[(0,c.jsx)("defs",{children:(0,c.jsxs)("linearGradient",{id:"ai_gradient",x1:"2",y1:"18",x2:"18",y2:"2",gradientUnits:"userSpaceOnUse",children:[(0,c.jsx)("stop",{stopColor:"var(--arc-color-logo-ai-purple, #9c15ff)"}),(0,c.jsx)("stop",{offset:"1",stopColor:"var(--arc-color-logo-ai-blue, #1eb4fb)"})]})}),(0,c.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.25 10C17.25 14.0041 14.0041 17.25 10 17.25C5.99594 17.25 2.75 14.0041 2.75 10C2.75 5.99594 5.99594 2.75 10 2.75C14.0041 2.75 17.25 5.99594 17.25 10ZM18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM11.8524 12.87V8.17199H12.6444V12.87H11.8524ZM11.8524 7.28999V6.29999H12.6444V7.28999H11.8524ZM6.5 11.511C6.5 11.211 6.584 10.953 6.752 10.737C6.926 10.515 7.163 10.344 7.463 10.224C7.763 10.104 8.111 10.044 8.507 10.044C8.717 10.044 8.939 10.062 9.173 10.098C9.407 10.128 9.614 10.176 9.794 10.242V9.89999C9.794 9.53999 9.686 9.25799 9.47 9.05399C9.254 8.84399 8.948 8.73899 8.552 8.73899C8.294 8.73899 8.045 8.78699 7.805 8.88299C7.571 8.97299 7.322 9.10499 7.058 9.27899L6.77 8.72099C7.076 8.51099 7.382 8.35499 7.688 8.25299C7.994 8.14499 8.312 8.09099 8.642 8.09099C9.242 8.09099 9.716 8.25899 10.064 8.59499C10.412 8.92499 10.586 9.38699 10.586 9.98099V11.97C10.586 12.066 10.604 12.138 10.64 12.186C10.682 12.228 10.748 12.252 10.838 12.258V12.87C10.76 12.882 10.691 12.891 10.631 12.897C10.577 12.903 10.532 12.906 10.496 12.906C10.31 12.906 10.169 12.855 10.073 12.753C9.983 12.651 9.932 12.543 9.92 12.429L9.902 12.132C9.698 12.396 9.431 12.6 9.101 12.744C8.771 12.888 8.444 12.96 8.12 12.96C7.808 12.96 7.529 12.897 7.283 12.771C7.037 12.639 6.845 12.465 6.707 12.249C6.569 12.027 6.5 11.781 6.5 11.511ZM9.56 11.844C9.632 11.76 9.689 11.676 9.731 11.592C9.773 11.502 9.794 11.427 9.794 11.367V10.782C9.608 10.71 9.413 10.656 9.209 10.62C9.005 10.578 8.804 10.557 8.606 10.557C8.204 10.557 7.877 10.638 7.625 10.8C7.379 10.956 7.256 11.172 7.256 11.448C7.256 11.598 7.295 11.745 7.373 11.889C7.457 12.027 7.577 12.141 7.733 12.231C7.895 12.321 8.093 12.366 8.327 12.366C8.573 12.366 8.807 12.318 9.029 12.222C9.251 12.12 9.428 11.994 9.56 11.844Z",fill:"url(#ai_gradient)"})]}),ac=r=>(0,c.jsx)("svg",{...r,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,c.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10 18C5.582 18 2 14.418 2 10C2 5.582 5.582 2 10 2C14.418 2 18 5.582 18 10C18 14.418 14.418 18 10 18ZM10 17.272C14.016 17.272 17.272 14.016 17.272 10C17.272 5.984 14.016 2.728 10 2.728C5.984 2.728 2.728 5.984 2.728 10C2.728 14.016 5.984 17.272 10 17.272ZM11.3493 8.65067L13.3747 7.51C13.4276 7.48023 13.4874 7.46481 13.5481 7.46529C13.6088 7.46576 13.6683 7.48211 13.7207 7.51271C13.7732 7.54331 13.8167 7.58709 13.847 7.63971C13.8772 7.69233 13.8932 7.75196 13.8933 7.81267V12.14C13.8934 12.2014 13.8772 12.2616 13.8464 12.3147C13.8156 12.3678 13.7713 12.4118 13.7181 12.4423C13.6648 12.4727 13.6044 12.4886 13.5431 12.4882C13.4817 12.4878 13.4215 12.4712 13.3687 12.44L11.3433 11.2453C11.2911 11.2146 11.2479 11.1707 11.2178 11.1181C11.1878 11.0655 11.172 11.0059 11.172 10.9453V8.95333C11.172 8.828 11.24 8.712 11.3493 8.65067ZM7.20267 7.46333H9.93867C10.3227 7.46333 10.634 7.77467 10.634 8.15867V11.592C10.634 11.9767 10.3227 12.288 9.93867 12.288H7.202C7.0177 12.288 6.84094 12.2148 6.71056 12.0846C6.58018 11.9543 6.50684 11.7776 6.50667 11.5933V8.16C6.50667 7.77533 6.818 7.464 7.202 7.464L7.20267 7.46333Z",fill:"var(--arc-color-logo-peek, #497add)"})}),ec=r=>(0,c.jsx)("svg",{...r,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,c.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.25 10C17.25 14.0041 14.0041 17.25 10 17.25C5.99594 17.25 2.75 14.0041 2.75 10C2.75 5.99594 5.99594 2.75 10 2.75C14.0041 2.75 17.25 5.99594 17.25 10ZM18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM11.7343 12.569C11.3803 12.569 11.0563 12.506 10.7623 12.38C10.4743 12.248 10.2223 12.071 10.0063 11.849C9.79627 11.621 9.63127 11.36 9.51127 11.066C9.39727 10.772 9.34027 10.46 9.34027 10.13C9.34027 9.68601 9.44227 9.28101 9.64627 8.91501C9.85027 8.54901 10.1323 8.25501 10.4923 8.03301C10.8583 7.81101 11.2753 7.70001 11.7433 7.70001C12.2173 7.70001 12.6283 7.81401 12.9763 8.04201C13.3303 8.26401 13.6033 8.55801 13.7953 8.92401C13.9933 9.28401 14.0923 9.67401 14.0923 10.094C14.0923 10.154 14.0893 10.214 14.0833 10.274C14.0833 10.328 14.0803 10.37 14.0743 10.4H10.1773C10.2013 10.706 10.2853 10.979 10.4293 11.219C10.5793 11.453 10.7713 11.639 11.0053 11.777C11.2393 11.909 11.4913 11.975 11.7613 11.975C12.0493 11.975 12.3193 11.903 12.5713 11.759C12.8293 11.615 13.0063 11.426 13.1023 11.192L13.7863 11.381C13.6843 11.609 13.5313 11.813 13.3273 11.993C13.1293 12.173 12.8923 12.314 12.6163 12.416C12.3463 12.518 12.0523 12.569 11.7343 12.569ZM10.1503 9.85101H13.3543C13.3303 9.54501 13.2433 9.27501 13.0933 9.04101C12.9433 8.80701 12.7513 8.62401 12.5173 8.49201C12.2833 8.36001 12.0253 8.29401 11.7433 8.29401C11.4673 8.29401 11.2123 8.36001 10.9783 8.49201C10.7443 8.62401 10.5523 8.80701 10.4023 9.04101C10.2583 9.27501 10.1743 9.54501 10.1503 9.85101ZM8.984 8.47401C8.588 8.48001 8.237 8.58201 7.931 8.78001C7.631 8.97201 7.418 9.23901 7.292 9.58101V12.479H6.5V7.78101H7.238V8.87001C7.4 8.54601 7.613 8.28501 7.877 8.08701C8.147 7.88301 8.429 7.76901 8.723 7.74501H8.876C8.918 7.74501 8.954 7.74801 8.984 7.75401V8.47401Z",fill:"var(--arc-color-logo-reach, #0081de)"})}),oc=r=>(0,c.jsx)("svg",{...r,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,c.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.25 10C17.25 14.0041 14.0041 17.25 10 17.25C5.99594 17.25 2.75 14.0041 2.75 10C2.75 5.99594 5.99594 2.75 10 2.75C14.0041 2.75 17.25 5.99594 17.25 10ZM18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM9.38402 8.46899C8.98802 8.47499 8.63702 8.57699 8.33102 8.77499C8.03102 8.96699 7.81802 9.23399 7.69202 9.57599V12.474H6.90002V7.77599H7.63802V8.86499C7.80002 8.54099 8.01302 8.27999 8.27702 8.08199C8.54702 7.87799 8.82902 7.76399 9.12302 7.73999H9.27602C9.31802 7.73999 9.35402 7.74299 9.38402 7.74899V8.46899ZM11.5195 12.474L9.67455 7.77599H10.5025L11.9785 11.718L13.4545 7.77599H14.2285L12.3835 12.474H11.5195Z",fill:"var(--arc-color-logo-review, #35b062)"})}),tc=r=>(0,c.jsx)("svg",{...r,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,c.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10 18C5.582 18 2 14.418 2 10C2 5.582 5.582 2 10 2C14.418 2 18 5.582 18 10C18 14.418 14.418 18 10 18ZM10 17.272C14.016 17.272 17.272 14.016 17.272 10C17.272 5.984 14.016 2.728 10 2.728C5.984 2.728 2.728 5.984 2.728 10C2.728 14.016 5.984 17.272 10 17.272ZM9.29467 8.48267C8.90667 8.49467 8.564 8.59467 8.268 8.78267C7.97067 8.97067 7.76067 9.232 7.63733 9.56733V12.406H6.86133V7.804H7.584V8.87067C7.74267 8.55333 7.95133 8.296 8.21067 8.09933C8.46867 7.90267 8.74467 7.79267 9.03867 7.76867H9.18867C9.23 7.76867 9.26533 7.772 9.29467 7.77733V8.48267ZM11.6747 12.494C11.3035 12.4941 10.9347 12.4363 10.5813 12.3227C10.2233 12.208 9.91467 12.042 9.656 11.824L9.99067 11.304C10.2613 11.51 10.532 11.664 10.802 11.7667C11.0727 11.87 11.3573 11.9213 11.6573 11.9213C11.992 11.9213 12.258 11.8547 12.4553 11.7227C12.5492 11.6632 12.6258 11.5803 12.6776 11.482C12.7294 11.3838 12.7546 11.2737 12.7507 11.1627C12.7507 11.0513 12.724 10.956 12.6707 10.876C12.6092 10.7892 12.5278 10.7183 12.4333 10.6693C12.3044 10.6014 12.1682 10.5482 12.0273 10.5107C11.8627 10.464 11.672 10.4133 11.454 10.3607C11.2142 10.3005 10.9763 10.2329 10.7407 10.158C10.566 10.1052 10.3997 10.028 10.2467 9.92867C10.1259 9.85011 10.0285 9.7405 9.96467 9.61133C9.90168 9.46686 9.87162 9.31019 9.87667 9.15267C9.87261 8.94053 9.91923 8.73049 10.0127 8.54C10.104 8.36067 10.2287 8.21133 10.388 8.09067C10.5561 7.96556 10.746 7.87287 10.948 7.81733C11.173 7.7542 11.4057 7.72301 11.6393 7.72467C11.986 7.72467 12.3093 7.78067 12.6093 7.892C12.9093 8.004 13.162 8.15067 13.3673 8.33267L13.0147 8.8C12.824 8.63151 12.6026 8.50136 12.3627 8.41667C12.1249 8.33193 11.8744 8.28864 11.622 8.28867C11.34 8.28867 11.1 8.34867 10.9033 8.46933C10.7067 8.59 10.608 8.78267 10.608 9.04733C10.608 9.15267 10.6273 9.24067 10.6653 9.31133C10.7106 9.38903 10.776 9.45306 10.8547 9.49667C10.9433 9.55 11.056 9.59667 11.1947 9.638C11.3327 9.67867 11.4987 9.72333 11.6927 9.77C11.998 9.84067 12.264 9.91267 12.4907 9.986C12.7167 10.0593 12.9047 10.146 13.0547 10.246C13.2047 10.346 13.316 10.4633 13.3893 10.5993C13.4627 10.734 13.5 10.8987 13.5 11.0927C13.5 11.5213 13.3353 11.8627 13.0067 12.1153C12.6767 12.368 12.2333 12.494 11.6747 12.494Z",fill:"var(--arc-color-logo-rise, #ff6600)"})}),cc=r=>(0,c.jsx)("svg",{...r,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,c.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.25 10C17.25 14.0041 14.0041 17.25 10 17.25C5.99594 17.25 2.75 14.0041 2.75 10C2.75 5.99594 5.99594 2.75 10 2.75C14.0041 2.75 17.25 5.99594 17.25 10ZM18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM11.2815 6.29999H12.0735V11.655C12.0735 11.913 12.1095 12.072 12.1815 12.132C12.2535 12.192 12.3405 12.222 12.4425 12.222C12.5685 12.222 12.6885 12.21 12.8025 12.186C12.9165 12.156 13.0125 12.126 13.0905 12.096L13.2165 12.744C13.0845 12.798 12.9285 12.843 12.7485 12.879C12.5685 12.915 12.4095 12.933 12.2715 12.933C11.9655 12.933 11.7225 12.846 11.5425 12.672C11.3685 12.498 11.2815 12.255 11.2815 11.943V6.29999ZM8.48 12.96C8.09 12.96 7.724 12.897 7.382 12.771C7.04 12.639 6.746 12.444 6.5 12.186L6.806 11.628C7.076 11.88 7.346 12.06 7.616 12.168C7.886 12.276 8.162 12.33 8.444 12.33C8.768 12.33 9.032 12.27 9.236 12.15C9.44 12.024 9.542 11.841 9.542 11.601C9.542 11.427 9.488 11.298 9.38 11.214C9.278 11.13 9.131 11.061 8.939 11.007C8.747 10.947 8.519 10.881 8.255 10.809C7.931 10.713 7.658 10.611 7.436 10.503C7.214 10.395 7.046 10.26 6.932 10.098C6.818 9.93599 6.761 9.73199 6.761 9.48599C6.761 9.18599 6.839 8.93399 6.995 8.72999C7.151 8.51999 7.364 8.36099 7.634 8.25299C7.91 8.14499 8.222 8.09099 8.57 8.09099C8.918 8.09099 9.233 8.14499 9.515 8.25299C9.797 8.36099 10.04 8.51999 10.244 8.72999L9.884 9.27899C9.698 9.08699 9.494 8.94599 9.272 8.85599C9.05 8.75999 8.801 8.71199 8.525 8.71199C8.363 8.71199 8.204 8.73299 8.048 8.77499C7.892 8.81099 7.763 8.87999 7.661 8.98199C7.559 9.07799 7.508 9.21599 7.508 9.39599C7.508 9.54599 7.547 9.66599 7.625 9.75599C7.709 9.83999 7.829 9.91199 7.985 9.97199C8.147 10.032 8.342 10.098 8.57 10.17C8.924 10.272 9.23 10.374 9.488 10.476C9.752 10.578 9.956 10.71 10.1 10.872C10.244 11.034 10.316 11.259 10.316 11.547C10.316 11.991 10.148 12.339 9.812 12.591C9.476 12.837 9.032 12.96 8.48 12.96Z",fill:"var(--arc-color-logo-storyline, #c560b3)"})}),nc=r=>(0,c.jsx)("svg",{...r,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 640",children:(0,c.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M320 576C178.6 576 64 461.4 64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576zM320 87.3C191.5 87.3 87.3 191.5 87.3 320C87.3 448.5 191.5 552.7 320 552.7C448.5 552.7 552.7 448.5 552.7 320C552.7 191.5 448.5 87.3 320 87.3zM267.5 259C278.1 258.9 288.6 260.7 298.5 264.4C307.4 267.6 315.6 272.3 322.8 278.5L311.5 293.5C305.4 288.1 298.3 283.9 290.6 281.2C283 278.5 275 277.1 266.9 277.1C258.8 276.8 250.9 278.9 243.9 282.9C237.6 286.8 233.9 293.9 234.4 301.4C234.3 304.3 234.9 307.2 236.2 309.9C237.7 312.4 239.7 314.4 242.3 315.8C245.7 317.7 249.4 319.3 253.2 320.3C257.6 321.6 262.9 323 269.1 324.5C278.9 326.8 287.4 329.1 294.6 331.4C301 333.3 307 336.1 312.7 339.7C317.1 342.5 320.8 346.4 323.4 351C325.9 355.9 327.1 361.3 326.9 366.8C327.3 379.6 321.4 391.9 311.1 399.5C298.6 408.2 283.7 412.4 268.5 411.6C256.6 411.6 244.8 409.7 233.5 406.1C222.7 402.8 212.6 397.4 203.9 390.2L214.6 373.6C222.5 379.8 231.2 384.7 240.6 388.4C249.3 391.7 258.6 393.4 268 393.3C277 393.8 285.8 391.6 293.5 387C299.6 383.1 303.2 376.3 303 369.1C303.1 365.9 302.2 362.7 300.5 359.9C298.5 357.1 295.9 354.8 292.9 353.3C288.8 351.1 284.4 349.4 279.9 348.2C274.6 346.7 268.5 345.1 261.6 343.4C252.8 341.1 245.1 339 238.7 336.9C233.1 335.2 227.8 332.7 222.9 329.6C219 327.1 215.9 323.6 213.9 319.4C211.9 314.8 210.9 309.8 211.1 304.7C211 297.9 212.5 291.2 215.5 285.1C218.3 279.4 222.4 274.5 227.5 270.7C232.9 266.7 239 263.7 245.4 262C252.6 260 260.1 259 267.5 259zM432.5 401.5C431 402.3 429 403.1 426.6 404.2C424.2 405.3 421.4 406.3 418.3 407.3C415 408.4 411.6 409.2 408.1 409.8C404.3 410.5 400.5 410.8 396.7 410.8C388.3 411 380 408.4 373.3 403.3C366.4 397.6 362.7 388.9 363.4 380L363.4 281L343.4 281L343.4 261.5L363.4 261.5L363.4 212.4L388.2 212.4L388.2 261.5L421.2 261.5L421.2 281L388.2 281L388.2 372.4C388.2 376.9 390.1 381.3 393.6 384.2C396.8 386.7 400.8 388 404.9 387.9C409.5 388 414 387.1 418.3 385.5C421.2 384.4 424 383.2 426.6 381.7z",fill:"var(--arc-color-logo-studio, #dc424a)"})});var os;const ts="fa-width-auto",Bn="fa-fw",cs="arc-fw",On="arc-aw",ns=r=>typeof r=="number"?`calc(${r/10}rem * var(--arc-internal-font-size))`:r,is={"arc-svg logo-articulate":(0,c.jsx)(Qt,{}),"arc-svg product-ai":(0,c.jsx)(rc,{}),"arc-svg product-peek":(0,c.jsx)(ac,{}),"arc-svg product-reach":(0,c.jsx)(ec,{}),"arc-svg product-review":(0,c.jsx)(oc,{}),"arc-svg product-rise":(0,c.jsx)(tc,{}),"arc-svg product-storyline":(0,c.jsx)(cc,{}),"arc-svg product-studio":(0,c.jsx)(nc,{})},dv=r=>r&&r.length>0&&r?.includes("arc-svg")?is[r]:os("span",{className:r}),Dn=r=>{const a=r.includes(ts),e=r.includes(Bn),o=r.includes(cs),t=r.includes(On);return{hasFaAutoWidth:a,hasFaFixedWidth:e,hasArcFixedWidth:o,hasArcAutoWidth:t}},Nn=r=>((0,m.isValidElement)(r)&&r.type===O?r.props.icon:r)??void 0,Fn=r=>{const a=Nn(r);if(typeof a!="string")return a;const{hasFaFixedWidth:e,hasArcFixedWidth:o,hasArcAutoWidth:t}=Dn(a);return!e&&!o&&!t?`${a} ${On}`:a},ls=r=>{const a=Nn(r);if(typeof a!="string")return a;let e=a;const{hasArcFixedWidth:o,hasFaFixedWidth:t}=Dn(e);return o&&!t&&(e=`${e} ${Bn}`),e},ss=l`--arc•icon`,Sa=l`${ss}•fg`,ds=l`
@layer arc-components {

[arc-icon] {
  ${Sa}: currentcolor;

  color: var(--arc-icon-color, var(${Sa}));
  opacity: var(--arc-icon-opacity, 1);

  &:not([hidden]) {
    /* hand-off to actual interior FontAwesome icon node */
    --fa-display: var(--arc-icon-display, inline-flex);
    --fa-line-height: var(--arc-icon-fa-line-height, 1);

    flex: none;
    align-self: var(--arc-icon-align-self, unset);
    display: var(--fa-display);
    align-items: center;
    justify-content: center;
    height: var(--arc-icon-height, 1lh);
    max-height: var(--arc-icon-max-height, 1lh);
  }

  &:has(svg) {
    align-self: var(--arc-icon-svg-align-self, center);

    svg {
      font-size: var(--arc-icon-size, 1em);
      width: 1em;
      height: 1em;
      fill: var(--arc-icon-color, var(${Sa}));
    }
  }

  [class|=fa] {
    font-size: var(--arc-icon-size, 1em);
    align-items: center;
    justify-content: center;

    /* fix for FontAwesome line-height oddities in certain cases */
    line-height: normal !important;

    &[class*='fa-stack-'] {
      font-size: var(--arc-icon-stack-size, inherit);
    }
  }

  /* Explicit opt-in via Arc’s helper class */
  .arc-aw {
    --fa-width: var(--arc-icon-fa-width, auto);
  }
}

/* Some SVG icons are also already styled as [arc-icon] so we need to ignore the nested [arc-icon] styles */
/* [arc-icon]:not([hidden]) > [arc-icon] { display: contents; } */

/* utility icon colorization */
[arc-icon] {
  &[arc-icon-status=brand] {
    ${Sa}: var(--arc-color-fg-brand-mid);
  }

  &[arc-icon-status=info] {
    ${Sa}: var(--arc-color-fg-info-mid);
  }

  &[arc-icon-status=success] {
    ${Sa}: var(--arc-color-fg-success-mid);
  }

  &[arc-icon-status=warning] {
    ${Sa}: var(--arc-color-fg-warning-mid);
  }

  &[arc-icon-status=error] {
    ${Sa}: var(--arc-color-fg-critical-mid);
  }

  &[arc-icon-status=processing] {
    ${Sa}: var(--arc-color-fg-brand-mid);
  }

  &[arc-icon-status] {
    --fa-primary-color: var(--arc-icon-color, currentcolor);
    --fa-secondary-color: color-mix(in srgb, currentcolor 20%, transparent);
    --fa-secondary-opacity: 1;
  }
}

}
`,hs=r=>(0,c.jsx)(O,{...r,icon:"fa-kit fa-articulate arc-aw",color:r?.color||"var(--arc-color-logo-articulate, #000000)","aria-label":r?.["aria-label"]||"Articulate Logo"}),us=r=>(0,c.jsx)(O,{...r,icon:"fa-kit fa-product-badge-ai arc-aw","aria-label":r?.["aria-label"]||"Articulate AI Logo",gradient:r?.gradient||"ai"}),vs=r=>(0,c.jsx)(O,{...r,icon:"fa-kit fa-product-badge-peek arc-aw",color:r?.color||"var(--arc-color-logo-peek, #497add)","aria-label":r?.["aria-label"]||"Articulate Peek Logo"}),gs=r=>(0,c.jsx)(O,{...r,icon:"fa-kit fa-product-badge-reach arc-aw",color:r?.color||"var(--arc-color-logo-reach, #0081de)","aria-label":r?.["aria-label"]||"Articulate Reach Logo"}),ps=r=>(0,c.jsx)(O,{...r,icon:"fa-kit fa-product-badge-review arc-aw",color:r?.color||"var(--arc-color-logo-review, #35b062)","aria-label":r?.["aria-label"]||"Articulate Review Logo"}),fs=r=>(0,c.jsx)(O,{...r,icon:"fa-kit fa-product-badge-rise arc-aw",color:r?.color||"var(--arc-color-logo-rise, #ff6602)","aria-label":r?.["aria-label"]||"Articulate Rise Logo"}),ms=r=>(0,c.jsx)(O,{...r,icon:"fa-kit fa-product-badge-storyline arc-aw",color:r?.color||"var(--arc-color-logo-storyline, #c560b3)","aria-label":r?.["aria-label"]||"Articulate Storyline Logo"}),bs=r=>(0,c.jsx)(O,{...r,icon:"fa-kit fa-product-badge-studio arc-aw",color:r?.color||"var(--arc-color-logo-studio, #dc424a)","aria-label":r?.["aria-label"]||"Articulate Studio Logo"}),O=({children:r,icon:a="fa-regular fa-circle-dashed",color:e,size:o,style:t,gradient:i,...n})=>{const h={...t,"--arc-icon-size":ns(o),"--arc-icon-color":e},d=!!(n["aria-label"]||n["aria-labelledby"]),u=ls(a),v=typeof u=="string"&&u.length>0?(0,c.jsx)("span",{className:u}):u;return(0,c.jsx)("span",{"aria-hidden":!d||void 0,...n,"arc-icon":"",style:h,"arc-gradient":i,children:r||v})};V("ArcIcon",ds),O.Articulate=hs,O.AI=us,O.Peek=vs,O.Reach=gs,O.Review=ps,O.Rise=fs,O.Storyline=ms,O.Studio=bs,O.SVGArticulate=Qt,O.SVGAI=rc,O.SVGPeek=ac,O.SVGReach=ec,O.SVGReview=oc,O.SVGRise=tc,O.SVGStoryline=cc,O.SVGStudio=nc;const $s=({children:r,icon:a,color:e,...o})=>(0,c.jsx)("span",{...o,"data-element":"anonymous","data-color":"neutral",children:r||(0,c.jsx)(O,{icon:a})}),Vn="blue",Hn="neutral",ys="fa-solid fa-user arc-aw",ic=(0,m.forwardRef)(({children:r,size:a,color:e,isActive:o=!0,isAnonymous:t,alt:i,src:n,name:h,email:d,...u},v)=>{const[p,g]=(0,m.useState)(!1),[f,x]=(0,m.useState)(!1),z=B=>{g(!0),x(!1),u.onLoad?.(B)},T=B=>{g(!1),x(!0),u.onError?.(B)},j=Hl(h||d),_=!!j,E=t||(!p||f)&&!_,C=!E&&!!n&&!f||void 0,S=(E&&Hn||void 0)??(e||void 0)??Wl(String(d||h||void 0),Pn,Vn)??Vn,N={src:n,alt:i,isLoaded:p,hasError:f,onLoad:z,onError:T};return(0,m.useEffect)(()=>{E&&g(!1)},[E]),(0,c.jsx)("span",{...u,ref:v,"arc-avatar":"","data-is-inactive":!o||void 0,"data-size":a,"aria-label":(u.title??h??d)||void 0,children:r||(E?(0,c.jsx)($s,{icon:ys,color:Hn}):(0,c.jsxs)(c.Fragment,{children:[C&&(0,c.jsx)(es,{...N}),_&&(0,c.jsx)(as,{initial:j,color:S})]}))})});V("ArcAvatar",rs);const Ar=l`${Z}•text`,oe=l`${Z}•subtext`,be=l`${Z}•gap`,xs=l`
@layer arc-components {

  [arc-avatar-text] {
    ${Ar}•font•size: var(${s}•14);
    ${oe}•font•size: var(${s}•12);
    ${be}: var(${s}•8);

    ${Ar}•overflow: unset;
    ${Ar}•text•overflow: unset;
    ${Ar}•white•space: unset;

    &[data-overflow=truncate] {
      ${Ar}•overflow: hidden;
      ${Ar}•text•overflow: ellipsis;
      ${Ar}•white•space: nowrap;
    }

    &:has([data-size=inherit]) {
      ${Ar}•font•size: 1em;
      ${oe}•font•size: 0.875em;
      ${be}: 0.5em;
    }

    &:has([data-size=lg]) {
      ${Ar}•font•size: var(--arc-font-size-14);
      ${oe}•font•size: var(--arc-font-size-12);
    }

    &:has([data-size=md]) { /* @default size */
      ${Ar}•font•size: var(--arc-font-size-14);
      ${oe}•font•size: var(--arc-font-size-12);
    }

    &:has([data-size=sm]) {
      ${Ar}•font•size: var(--arc-font-size-14);
      ${oe}•font•size: var(--arc-font-size-12);
    }

    &:has([data-size=xs]) {
      ${Ar}•font•size: var(--arc-font-size-12);
      ${oe}•font•size: var(--arc-font-size-12);
      ${be}: var(--arc-space-0-75);
    }

    &[data-gap=lg] { ${be}: var(${s}•12); }
    &[data-gap=sm] { ${be}: var(${s}•4); }
  }

  [arc-avatar-text] {
    font-size: var(--arc-avatar-text-font-size, var(${Ar}•font•size));
    display: inline-flex;
    align-items: center;
    gap: var(${be});
    line-height: normal;
    min-width: 0%; /* @note: allows truncation/ellipsis for [data-element=text] */

    &[is-strong] [data-element=text] {
      font-weight: var(--arc-avatar-text-font-weight, var(--arc-font-weight-bold));

      [data-element=subtext] {
        font-weight: var(--arc-avatar-text-subtext-font-weight, var(--arc-font-weight-normal));
      }
    }

    [data-element=text] {
      flex: 1;
      text-align: start;
    }

    [data-element=subtext] {
      display: var(--arc-avatar-subtext-display, block);
      font-size: var(--arc-avatar-subtext-font-size, var(${oe}•font•size));

      /* 61.2% is the opacity equivalent of the secondary-text color token's gray value. */
      color: var(--arc-avatar-subtext-color, color-mix(in srgb, currentcolor 61.2%, transparent));
    }

    :where([data-element=text], [data-element=subtext]) {
      overflow: var(${Ar}•overflow);
      text-overflow: var(${Ar}•text•overflow);
      white-space: var(${Ar}•white•space);
    }
  }

}
`,ks="Anonymous",lc=({children:r,avatar:a={},subtext:e,size:o,gapSize:t,overflow:i,isStrong:n,...h})=>{const d=a.anonymousName||ks,u=a.name||a.email||a.src,v=a.name||a.email,p=a.isAnonymous||!u,g=r||p?d:v,f=t!=="inherit"?t:void 0,x=i!=="inherit"?i:void 0;return(0,c.jsxs)("span",{...h,"arc-avatar-text":"","data-gap":f,"data-overflow":x,"is-strong":n?"":void 0,children:[(0,c.jsx)(ic,{...a,isAnonymous:p,size:o}),(0,c.jsxs)("span",{"data-element":"text",children:[g,e&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("br",{}),(0,c.jsx)("small",{"data-element":"subtext",children:e})]})]})]})};V("ArcAvatarText",xs);const ws=l`
@layer arc-components {

  [arc-avatar-pile] {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 0;

    ${Xt}
    ${Mn}

    /* Cutout (mask) a portion of subsequent avatars ---------------• */
    [arc-avatar]+[arc-avatar] {
      margin-left: -0.125em;

      /* magic! */
      mask: radial-gradient(
        50% 50% at -43% 50%,
        transparent 110%,
        black 110%
      ) padding-box;
    }

  }

}
`,As=({size:r="md",...a})=>(0,c.jsx)("div",{...a,"arc-avatar-pile":"","data-size":r});V("ArcAvatarPile",ws);const Ve=r=>typeof r=="string"?r:typeof r=="number"?r.toString():Array.isArray(r)?r.map(Ve).join(""):(0,m.isValidElement)(r)?Ve(r.props.children):"",Un={},zs=(r="id")=>{const a=(Un[r]??0)+1;return Un[r]=a,`${r}-${a}`},Wr=(r,a="id")=>{const e=(0,m.useId)();return r??`${a}-${e}`},sc=[...Ka],dc=[...Ba],Cs=[...ue],Wn=R(ur,["common"]),Ss=R(ur,["ai","brand"]),hc=["nw-corner","top-start","top-center","top-end","ne-corner","left-start","right-start","left-center","center","right-center","left-end","right-end","sw-corner","bottom-start","bottom-center","bottom-end","se-corner"],uc=["ignore","flip"],Gn=["compact","comfortable"],He=(r,a=1/0,e=" ")=>[...r].flat(a)?.filter(Boolean)?.join(e),Or={popover:sc[0],anchorAt:hc[13],boundary:uc[0],tryFallbacks:!1,variant:Wn[0],scheme:dc[0],density:Gn[0],isInverse:!1,hasTail:!1,tailSize:8,offset:0},vc=()=>typeof CSS>"u"||typeof CSS.supports!="function"?!1:CSS.supports("position-anchor","--anchor-name"),_s=()=>typeof CSS>"u"||typeof CSS.supports!="function"?!1:CSS.supports("container-type","anchored"),gc={canAnchor:vc(),canAnchoredContainers:_s()},Kn=["center","nw-corner","ne-corner","se-corner","sw-corner"],Zn=({canHaveTail:r,tailSize:a})=>{if(!r)return{cssTailVar:"",floatingTailPx:0};const e=Math.abs(Number(a||Or.tailSize)),o=e>0?e:Or.tailSize;return{cssTailVar:o===Or.tailSize?"":`${o}px`,floatingTailPx:o}},Mo=typeof window>"u"?m.useEffect:m.useLayoutEffect,Yn=(r,a="toggle",e=document)=>{const o=e.getElementById(r);({toggle:()=>o?.togglePopover(),show:()=>o?.showPopover(),hide:()=>o?.hidePopover()})[a]()},Ue=new WeakMap,pc=r=>{const a=String(r??"").trim();if(a==="none")return"none";let e=a.replace(/[^\w-]/g,"-");for(;e.startsWith("-");)e=e.slice(1);for(;e.endsWith("-");)e=e.slice(0,-1);return e?`--${e}`:"--"},We=r=>{const a=pc(r);return a==="none"?null:a},qn=(r,a)=>{const e=We(a);if(!e)return()=>{};let o=Ue.get(r);return o||(o=new Set,Ue.set(r,o)),o.has(e)?()=>{}:(o.add(e),r.style.setProperty("anchor-name",He([...o],1/0,", ")),()=>{const t=Ue.get(r);if(t){if(t.delete(e),t.size===0){Ue.delete(r),r.style.removeProperty("anchor-name");return}r.style.setProperty("anchor-name",He([...t],1/0,", "))}})},Jn=r=>r==="start"||r==="end"?r:"center",Es=r=>{const a=r.split("-")[0];return a==="top"||a==="right"||a==="bottom"||a==="left"?a:null},Xn=r=>{const a=Es(r),e=Jn(r.split("-")[1]);switch(a){case"top":return{block:"start",inline:e};case"bottom":return{block:"end",inline:e};case"left":return{block:e,inline:"start"};case"right":return{block:e,inline:"end"};default:return{block:"center",inline:"center"}}},Qn=(r,a)=>r!=="center"&&a!=="center"&&r!==a,ri=(r,a)=>{const e=Xn(r),o=Xn(a),t=Qn(e.block,o.block),i=Qn(e.inline,o.inline);return t&&i?"flip-block-inline":t?"flip-block":i?"flip-inline":""},Ts={...{"top-start":"top-start","top-end":"top-end","right-start":"right-start","right-end":"right-end","bottom-start":"bottom-start","bottom-end":"bottom-end","left-start":"left-start","left-end":"left-end"},...{"top-center":"top","right-center":"right","bottom-center":"bottom","left-center":"left",center:"bottom","nw-corner":"top-start","ne-corner":"top-end","sw-corner":"bottom-start","se-corner":"bottom-end"}},ai=r=>{r.style.removeProperty("top"),r.style.removeProperty("left"),r.style.removeProperty("position"),r.style.removeProperty("margin"),delete r.dataset.fallbacks},Is=[{test:(r,a,e)=>r==="y"&&a.includes("top")&&e.includes("top"),value:-1},{test:(r,a,e)=>r==="y"&&a.includes("top")&&e.includes("bottom"),value:-1},{test:(r,a,e)=>r==="y"&&a.includes("bottom")&&e.includes("top"),value:1},{test:(r,a,e)=>r==="x"&&a.includes("left")&&e.includes("left"),value:-1},{test:(r,a,e)=>r==="x"&&a.includes("left")&&e.includes("right"),value:-1},{test:(r,a,e)=>r==="x"&&a.includes("right")&&e.includes("left"),value:1}],ei=(r,a,e)=>Is.find(o=>o.test(r,a,e))?.value||0,js=({anchorEl:r,popoverEl:a,anchorAt:e,tryFallbacks:o,offsetPx:t,tailSizePx:i,hasTail:n,isOpen:h})=>{Mo(()=>{if(!(h&&!vc()&&!!r&&!!a)){a&&ai(a);return}const u=r,v=a,p=Ts[e];let g=!0,f;return(async()=>{try{const{autoUpdate:T,computePosition:j,flip:_,offset:E}=await Mr.e("defaultVendors-node_modules_pnpm_floating-ui_dom_1_7_5_node_modules_floating-ui_dom_dist_floa-04d176").then(Mr.bind(Mr,40153));if(!g)return;const C=n?Math.max(0,i)*(Math.sqrt(2)/2):0,S=[E(t)];o&&S.push(_({fallbackStrategy:"bestFit"}));const N=async()=>{try{const B=await j(u,v,{placement:p,strategy:"fixed",middleware:S}),Y=B.x+C*ei("x",B.placement,p),G=B.y+C*ei("y",B.placement,p);if(v.style.left=`${Y}px`,v.style.top=`${G}px`,!n||!o){delete v.dataset.fallbacks;return}const H=ri(p,B.placement);H?v.dataset.fallbacks=H:delete v.dataset.fallbacks}catch{}};f=T(u,v,N),await N()}catch{}})(),()=>{g=!1,f?.(),ai(v)}},[e,r,n,h,t,a,i,o])},Bo=1,$e=2,Ls=[{test:(r,a)=>a.top>=r.bottom+Bo,value:"bottom"},{test:(r,a)=>a.bottom<=r.top-Bo,value:"top"},{test:(r,a)=>a.left>=r.right+Bo,value:"right"},{test:(r,a)=>a.right<=r.left-Bo,value:"left"}],Ge=r=>{delete r.dataset.fallbacks};let fc;const Rs=()=>(fc||(fc=Mr.e("defaultVendors-node_modules_pnpm_floating-ui_dom_1_7_5_node_modules_floating-ui_dom_dist_floa-04d176").then(Mr.bind(Mr,40153))),fc),Oo=r=>({x:r.left+r.width/2,y:r.top+r.height/2}),Ps=(r,a,e,o)=>{const t=Oo(a),i=Oo(e);if(r==="top"||r==="bottom"){const u=Math.abs(o==="rtl"?e.right-a.right:e.left-a.left),v=Math.abs(o==="rtl"?e.left-a.left:e.right-a.right),p=Math.abs(i.x-t.x);return Math.abs(u-v)<=$e&&p<=$e||p+$e<Math.min(u,v)?"center":u<=v?"start":"end"}const n=Math.abs(e.top-a.top),h=Math.abs(e.bottom-a.bottom),d=Math.abs(i.y-t.y);return Math.abs(n-h)<=$e&&d<=$e||d+$e<Math.min(n,h)?"center":n<=h?"start":"end"},Ms=(r,a,e,o)=>{const t=Ls.find(d=>d.test(a,e));let i;if(t)i=t.value;else{const d=Oo(a),u=Oo(e),v=u.y-d.y,p=u.x-d.x,g=Math.min(a.height,e.height)*.1;Math.abs(v)>g?i=v>=0?"bottom":"top":i=p>=0?"right":"left"}if(Jn(r.split("-")[1])==="center")return i;const h=Ps(i,a,e,o);return`${i}-${h}`},Bs=({anchorEl:r,popoverEl:a,anchorAt:e,tryFallbacks:o,isOpen:t,hasTail:i})=>{Mo(()=>{if(!a||!gc.canAnchor)return;if(!i||!o||!t||gc.canAnchoredContainers||!r){Ge(a);return}const n=e;if(n==="center"||n.includes("corner")){Ge(a);return}const h=r,d=a;let u=!0,v;const p=()=>{const f=h.getBoundingClientRect(),x=d.getBoundingClientRect(),z=getComputedStyle(h).direction==="rtl"?"rtl":"ltr",T=Ms(n,f,x,z),j=ri(n,T);n===T?Ge(d):j?d.dataset.fallbacks=j:Ge(d)};return(async()=>{try{const{autoUpdate:x}=await Rs();if(!u)return;v=x(h,d,p),p()}catch{}})(),()=>{u=!1,v?.(),Ge(d)}},[e,r,i,t,a,o])},Do=r=>typeof r=="string",oi=r=>r!==null&&typeof r=="object",ti=(r,a=" ")=>r.split(a).map(e=>e.trim()).filter(Boolean),Os=l`
@layer arc-components {

  [arc-spinner] {
    flex: none;
    display: flex;

    position: var(--arc-spinner-position, relative);
    inset: var(--arc-spinner-inset, 0);
    translate: var(--arc-spinner-translate, 0);
    width: var(--arc-spinner-size, 3em);

    border-radius: var(--arc-border-radius-circle);
    aspect-ratio: 1 / 1;
    pointer-events: none;

    [arc-spinner-circle] {
      fill: none;
      stroke: var(--arc-spinner-circle-color, currentcolor);
      opacity: var(--arc-spinner-circle-opacity, var(--arc-alpha-30));
    }

    [arc-spinner-progress] {
      fill: none;
      stroke: var(--arc-spinner-progress-color, var(--arc-color-fg-brand-mid));
      stroke-dasharray: var(--arc-spinner-progress, 0.3334) 1;
      stroke-dashoffset: 0;
      stroke-linecap: round;
      opacity: var(--arc-spinner-progress-opacity, var(--arc-alpha-100));
      animation: var(--arc-spinner-animation-duration, 743ms) arc-spinner-rotate linear infinite;
      transform-origin: 50% 50%;
    }
  }

  @keyframes arc-spinner-rotate {
    to {
      transform: rotate3d(0, 0, 1, 360deg);
    }
  }
}
`,mc=(0,m.forwardRef)(({progress:r,...a},e)=>(0,c.jsxs)("svg",{...a,ref:e,viewBox:"0 0 100 100","arc-spinner":"",style:{"--arc-spinner-progress":r??""},children:[(0,c.jsx)("circle",{"arc-spinner-circle":"",cx:"50%",cy:"50%",r:"45%",strokeWidth:"12.5%",pathLength:"1"}),(0,c.jsx)("circle",{"arc-spinner-progress":"",cx:"50%",cy:"50%",r:"45%",strokeWidth:"12.5%",pathLength:"1"})]}));mc.displayName="ArcSpinner",V("ArcSpinner",Os);const Ds=(...r)=>console.log(...r),ci=(...r)=>console.warn(...r),Ns=(...r)=>console.error(...r),ye=l`--arc•icon•text`,Ke=l`${ye}•font•size`,ni=l`${ye}•icon`,bc=l`${ye}•text`,ii=l`${ye}•subtext`,la=l`${ye}•fg`,_a=l`${ye}•gap`,Da=l`${ni}•size`,No=l`${ni}•vertical•align`,Ze=l`${bc}•overflow`,Fo=l`${bc}•text•overflow`,Vo=l`${bc}•white•space`,Ho=l`${ii}•font•size`,li=l`${ii}•fg`,Fs=l`

  &[data-variant=inherit] { /* @default 'inherit' • uses font/color props from context */
    ${la}: currentcolor;
  }

  &[data-variant=primary] {
    ${la}: var(--arc-color-fg-primary);
  }

  &[data-variant=secondary] {
    ${la}: var(--arc-color-fg-secondary);
  }

  &[data-variant=inverse] {
    ${la}: var(--arc-color-dark-neutral-1000);
  }

  &[data-variant=brand] {
    ${la}: var(--arc-color-fg-brand-stark);
  }

  &[data-variant=info] {
    ${la}: var(--arc-color-fg-info-stark);
  }

  &[data-variant=success] {
    ${la}: var(--arc-color-fg-success-stark);
  }

  &[data-variant=warning] {
    ${la}: var(--arc-color-fg-warning-stark);
  }

  &[data-variant=critical] {
    ${la}: var(--arc-color-fg-critical-mid);
  }

`,Vs=l`

  /* Overall Text Sizes */

  &[data-size=inherit] { /* @default 'inherit' • uses font/size from context */
    ${Ke}: 1em;
    ${Ho}: 0.75em;
    ${Da}: 1em;
    ${_a}: 0.25em; /* 4px @ 100% */
  }

  &[data-size=md] {
    ${Ke}: var(--arc-font-size-14);
    ${Ho}: var(--arc-font-size-12);
    ${_a}: var(${b}•3);
  }

  &[data-size=sm] {
    ${Ke}: var(--arc-font-size-12);
    ${Ho}: var(--arc-font-size-12);
    ${_a}: var(${b}•3);
  }

  /* Gap Sizes */

  &[data-gap=lg] { ${_a}: var(${b}•12); } /* 12px @ 100% */
  &[data-gap=md] { ${_a}: var(${b}•8); }  /* 8px @ 100% */
  &[data-gap=sm] { ${_a}: var(${b}•3); }  /* 4px @ 100% */

  /* Icon Sizes */

  &[icon-size=xl] { ${Da}: var(${s}•24); }
  &[icon-size=lg] { ${Da}: var(${s}•20); }
  &[icon-size=md] { ${Da}: var(${s}•16); }
  &[icon-size=sm] { ${Da}: var(${s}•14); }
  &[icon-size=xs] { ${Da}: var(${s}•12); }
`,Hs=l`

  /* 61.2% is the opacity equivalent of the secondary-text color token's gray value. */
  ${li}: var(--arc-icon-text-subtext-color, color-mix(in srgb, currentcolor 61.2%, transparent));

  /* ArcIcon */
  --arc-icon-color: var(--arc-icon-text-icon-color, var(${la}));
  --arc-icon-size: var(--arc-icon-text-icon-size, var(${Da}));
  --arc-icon-fa-line-height: normal;
  --arc-icon-align-self: normal;

  &[data-layout=inline] {
    ${Ze}: unset;
    ${Fo}: unset;
    ${Vo}: unset;

    ${No}: calc((var(${Da}) - var(${Ke})) / -2);

    &:has(svg) { ${No}: text-bottom; }
  }

  /* Text Overflows */
  &[data-layout=gutter] {
    ${Ze}: visible;
    ${Fo}: unset;
    ${Vo}: normal;

    &[data-overflow=truncate] {
      ${Ze}: hidden;
      ${Fo}: ellipsis;
      ${Vo}: nowrap;
    }
  }

`,Us=l`
@layer arc-components {

  [arc-icon-text] {
    ${Fs}
    ${Vs}
    ${Hs}
  }

  [arc-icon-text] {
    position: var(--arc-icon-text-position, relative);
    font-size: var(--arc-icon-text-font-size, var(${Ke}));
    color: var(--arc-icon-text-text-color, var(${la}));
    line-height: var(--arc-icon-text-line-height, inherit);

    [data-element=text],
    [data-element=subtext] {
      position: relative;
      hyphens: var(--arc-icon-text-hyphens, auto);
    }

    &[is-strong] [data-element=text] {
      font-weight: var(--arc-icon-text-font-weight, var(--arc-font-weight-bold));

      [data-element=subtext] {
        font-weight: var(--arc-icon-text-subtext-font-weight, var(--arc-font-weight-normal));
      }
    }

    /* @default • gutter layout */
    &[data-layout=gutter] {
      display: inline-flex;
      align-items: var(--arc-icon-text-align-items, first baseline);
      gap: var(--arc-icon-text-gap, var(${_a}));

      /* Truncation Support */
      overflow: var(--arc-icon-text-overflow, var(${Ze}));

      &[is-flipped] { flex-direction: row-reverse; }

      &:not(:has([arc-gradient])) [data-element=icon] { display: contents; }

      [data-element=text] {
        flex: 1;
        min-width: 0%;
      }

      [data-element=subtext] {
        display: var(--arc-icon-text-subtext-display, block);
        line-height: normal;
        font-size: var(--arc-icon-text-subtext-font-size, var(${Ho}));
        color: var(--arc-icon-text-subtext-color, var(${li}));
        padding-block-start: var(--arc-icon-text-subtext-spacing, 0);
      }

      :where([data-element=text], [data-element=subtext]) {
        overflow: var(--arc-icon-text-overflow, var(${Ze}));
        text-overflow: var(--arc-icon-text-text-overflow, var(${Fo}));
        white-space: var(--arc-icon-text-white-space, var(${Vo}));
      }
    }

    &[data-layout=inline] {
      display: inline;

      [data-element=icon] {
        line-height: normal;
        vertical-align: var(--arc-icon-text-icon-vertical-align, var(${No}));
      }

      [data-element=icon] + [data-element=text] { margin-inline-start: var(--arc-icon-text-gap, var(${_a})); }
      [data-element=text]:has(+ [data-element=icon]) { margin-inline-end: var(--arc-icon-text-gap, var(${_a})); }
      [data-element=subtext] { display: contents; }

      &:has(svg) {
        ${No}: text-bottom;
      }
    }
  }
}

`,Ws=R(ur,["inherit","primary","secondary","inverse","brand","info","success","warning","critical"]),qr=({children:r,layout:a="gutter",size:e="inherit",variant:o="inherit",tag:t="span",icon:i,iconTooltip:n,text:h,subtext:d,gradient:u,overflow:v,iconSize:p,gapSize:g,isFlipped:f=!1,isStrong:x=!1,...z})=>{const T=r||h,j=!!i,_=!!T,E=a==="gutter",C=a==="inline",S=j&&(!f||E),N=j&&_&&f&&C,B=!!p&&p!=="inherit",Y=B&&Za.includes(p)?p:void 0,G=B&&!Za.includes(p)?p:void 0,H=g!=="inherit"?g:void 0,dr=v!=="inherit"?v:void 0,K=Fn(i),cr=typeof K=="string"?(0,c.jsx)(O,{icon:K,size:G,gradient:u}):K,ar=n?(0,c.jsx)(Ac,{text:n,children:cr}):cr;return(0,c.jsxs)(t,{...z,"arc-icon-text":"","data-variant":o,"data-layout":a,"data-overflow":dr,"data-size":e,"data-gap":H,"icon-size":Y,"is-flipped":f?"":void 0,"is-strong":x?"":void 0,children:[S&&(0,c.jsx)("span",{"data-element":"icon",children:ar}),_&&(0,c.jsxs)("span",{"data-element":"text",children:[T,!!d&&(E?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("br",{}),(0,c.jsx)("small",{"data-element":"subtext",children:d})]}):(0,c.jsxs)(c.Fragment,{children:[" ",(0,c.jsx)("span",{"data-element":"subtext",children:d})]}))]}),N&&(0,c.jsx)("span",{"data-element":"icon",children:ar})]})};V("ArcIconText",Us);const sa={...Or,popover:sc[2],anchorAt:hc[2],boundary:uc[1],tryFallbacks:!0,scheme:dc[3],offset:4,isStrong:!0,hasTail:!0,isEnabled:!0},Uo=new WeakSet,Gs=100,Ks=100;let $c=!0,yc=null;const Zs=typeof CSS<"u"&&typeof CSS.supports=="function"&&CSS.supports("selector(:focus-visible)"),Ys=r=>r instanceof Element?Zs?r.matches(":focus-visible")===!0:$c:!1,xc=new WeakMap,kc=new WeakMap,Wo=new Set,Go=(r,a)=>{const e=r.get(a);e!=null&&(clearTimeout(e),r.delete(a))},si=(r,a,e,o)=>{const t=window.setTimeout(()=>{o(),r.delete(a)},e);r.set(a,t)},di="[aria-describedby]",qs=r=>typeof r=="object"&&r!==null&&r.hasAttribute?.("popover")===!0,hi=r=>r instanceof HTMLElement&&r.getAttribute("role")==="tooltip"&&qs(r),Js=r=>!!r&&(r.tagName==="LABEL"||r.hasAttribute("arc-label")),Xs=r=>r?.match(/\S+/g)??[],wc=(r,a)=>{const e=ia(a??document.documentElement);if(!e)return null;const o=e.querySelector(`[aria-describedby~="${r}"]`);return o?o.closest("label,[arc-label]")??o:null},Qs=r=>{if(!(r instanceof Element))return null;const a=r.closest?.(di);if(a){const o=a.getAttribute("aria-describedby")??"";if(o)return{anchor:a.closest?.("label,[arc-label]")??a,tooltipId:o}}let e=r;for(;e;){if(Js(e)){const o=e.querySelector?.(di),t=o?.getAttribute?.("aria-describedby")??"";if(o&&t)return{anchor:e,tooltipId:t}}e=e.parentElement}return null},rd=r=>{if(!(r instanceof Element))return null;const a=r.closest?.('[role="tooltip"][popover]')??null;return a instanceof HTMLElement?a:null},ad=r=>r?.id?wc(r.id,r):null,ed=r=>{const a=rd(r),e=Qs(r);if(!e&&a){const d=ad(a);return!d||!a.id?null:{anchor:d,tooltip:a}}if(!e)return null;const{anchor:o,tooltipId:t}=e;if(!t)return null;const i=ia(r);if(!i)return null;const n=Xs(t),h=a??n.map(d=>i.getElementById(d)).find(d=>hi(d))??null;return hi(h)?{anchor:o,tooltip:h}:null},od=(r,a,e)=>{const o=e instanceof Element?e:null;if(!o)return!1;const t=r===o||r.contains(o),i=a===o||a.contains(o);return t||i},ui=r=>{r.isConnected&&(r.showPopover?.(),Wo.add(r))},vi=r=>{r.isConnected&&(r.hidePopover?.(),Wo.delete(r))},td=(r,a)=>{if(Go(kc,r),Go(xc,r),!a){ui(r);return}si(xc,r,Gs,()=>ui(r))},gi=(r,a)=>{if(Go(xc,r),Go(kc,r),!a){vi(r);return}si(kc,r,Ks,()=>vi(r))},Ye=(r,a,e,o)=>{const t=ed(a);if(!t)return;const{anchor:i,tooltip:n}=t;if(r){td(n,o);return}od(i,n,e)||gi(n,o)};let Ko=null,Zo=null,Yo=null,qo=null,Jo=null,Xo=null,xe=null;const pi=r=>{if(!r&&typeof document>"u")return;const a=r?ia(r):document;if(!a||Uo.has(a))return;Xo=o=>{$c=!1,yc=o.target},xe=()=>{yc=null},Ko=o=>Ye(!0,o.target,void 0,!0),Yo=o=>Ye(!1,o.target,o.relatedTarget,!0),Zo=o=>{Ys(o.target)&&Ye(!0,o.target,void 0,!1)},qo=o=>{const t=o.relatedTarget??yc;Ye(!1,o.target,t,!1)},Jo=o=>{o.key==="Tab"&&($c=!0),o.key==="Escape"&&(Wo.size>0&&o.preventDefault(),Ye(!1,o.target,void 0,!1),Wo.forEach(t=>gi(t,!1)))},[["pointerdown",Xo],["pointerup",xe],["pointercancel",xe],["pointerover",Ko],["focusin",Zo],["pointerout",Yo],["focusout",qo],["keydown",Jo]].forEach(([o,t])=>{a.addEventListener(o,t)}),Uo.add(a)},cd=()=>{if(!Uo.has(document)||typeof document>"u")return;[["pointerdown",Xo],["pointerup",xe],["pointercancel",xe],["pointerover",Ko],["focusin",Zo],["pointerout",Yo],["focusout",qo],["keydown",Jo]].forEach(([a,e])=>{e&&document.removeEventListener(a,e)}),Ko=null,Zo=null,Yo=null,qo=null,Jo=null,Xo=null,xe=null,Uo.delete(document)},da=l`--arc•tooltip`,fi=l`${da}•subtext`,mi=l`${da}•slot`,nd=l`
@layer arc-components {
  [arc-tooltip] {
    ${da}•width: max-content;
    ${da}•max•width: 20em;
    ${da}•font•size: var(${s}•12);
    ${da}•padding: var(${b}•10);
    ${fi}•spacing: var(${b}•6);
    ${mi}•margin•top: var(${b}•8);

    /* Communicates to Popover Engine ------------------------------• */
    --arc-popover-border-radius: var(--arc-border-radius-md);
    --arc-popover-min-width: auto; /** Ensure tooltip width is driven by content, not anchor width */
    --arc-popover-width: var(--arc-tooltip-width, var(${da}•width));
    --arc-popover-max-width: var(--arc-tooltip-max-width, var(${da}•max•width));
    --arc-popover-border: var(--arc-tooltip-border, 0);
    --arc-popover-footer-flex-direction: var(--arc-tooltip-footer-flex-direction, row);
    --arc-popover-font-size: var(--arc-tooltip-font-size, var(${da}•font•size));
    --arc-popover-padding: var(--arc-tooltip-padding, var(${da}•padding));

    /* Communicates to IconText ----------------------------------• */
    --arc-icon-text-subtext-font-size: var(--arc-tooltip-subtext-font-size, var(${da}•font•size));
    --arc-icon-text-hyphens: none;
    --arc-icon-text-line-height: var(--arc-line-height-tight);
    --arc-icon-text-subtext-spacing: var(--arc-tooltip-subtext-spacing, var(${fi}•spacing));

    [arc-tooltip-content] + [arc-tooltip-slot-content] {
      margin-top: var(--arc-tooltip-slot-margin-top, var(${mi}•margin•top));
    }
  }
}
`,Ac=(0,m.forwardRef)(({id:r,children:a,slot:e,isEnabled:o=sa.isEnabled,popover:t=sa.popover,variant:i=sa.variant,anchorAt:n=sa.anchorAt,alternateAnchor:h,boundary:d=sa.boundary,tryFallbacks:u=sa.tryFallbacks,hasTail:v=sa.hasTail,offset:p=sa.offset,scheme:g=sa.scheme,isStrong:f=sa.isStrong,text:x,subtext:z,icon:T,isFlipped:j,..._},E)=>{const C=Wr(r,"arc-tooltip"),S=(0,m.useRef)(null);(0,m.useImperativeHandle)(E,()=>S.current);const N=K=>typeof K=="object"&&K!==null&&"tabIndex"in K,B=a,Y=!!h;let G=null;(0,m.isValidElement)(B)?G=o?(0,m.cloneElement)(B,{"aria-describedby":C,...N(B.props)&&B.props.tabIndex!=null?{}:{tabIndex:0}}):B:!Y&&typeof console<"u"&&ci("\u{1F6A8} ArcTooltip \u2022 expects a single ReactElement child as the trigger.");const H=(0,m.useMemo)(()=>()=>wc(C,S.current),[C]),dr=g==="auto"?void 0:g;return(0,m.useEffect)(()=>{if(o)try{pi(S.current)}catch{}},[o]),(0,c.jsxs)(c.Fragment,{children:[G,o&&(0,c.jsxs)(ro,{..._,"arc-tooltip":"",scheme:_?.isInverse?"inverse":dr,role:"tooltip",id:C,ref:S,popover:t,anchorAt:n,tryFallbacks:u||d==="flip",variant:i,hasTail:v,offset:p,hidePopoverButton:!0,alternateAnchor:h??H,tag:_?.tag??"span",contentTag:_?.contentTag??"span",children:[x&&(0,c.jsx)(qr,{"arc-tooltip-content":"",text:x,subtext:z,icon:T,isFlipped:j,isStrong:f,size:"inherit",variant:"inherit"}),e&&(0,c.jsx)("span",{"arc-tooltip-slot-content":"",children:e})]})]})});V("ArcTooltip",nd);const id=R(Ie,["circle","square","narrow"]),ld=R(Er,["xxl","xl","lg","md","sm"]),sd=R(ca,["hug","fill","icon"]),dd=R(ur,["common","ai","critical","alpha"]),hd=[...Ba],ud=[...Ao],bi=R(ur,["primary","secondary","tertiary","critical-primary","critical-secondary","ai-primary","ai-secondary","primary-inverse","secondary-inverse","tertiary-inverse"]),vd=R(zo,["primary","secondary","tertiary","plain","link-style"]),gd=[...ue],pd=l`
:root {
  --arc-button-critical-bg-hover: light-dark(
    color-mix(in srgb, var(--arc-color-light-red-600), transparent 90%),
    color-mix(in srgb, var(--arc-color-dark-red-700), transparent 75%)
  );

  /* common-secondary variant floating button */
  --arc-button-common-secondary-floating-bg: var(--arc-color-bg-primary);
  --arc-button-common-secondary-floating-bg-hover: light-dark(var(--arc-color-light-neutral-100), var(--arc-color-dark-neutral-100));
  --arc-button-common-secondary-floating-bg-active: light-dark(var(--arc-color-light-neutral-200), var(--arc-color-dark-neutral-200));
  --arc-button-common-secondary-floating-bg-processing: var(--arc-color-bg-primary);
  --arc-button-common-secondary-floating-bg-disabled: var(--arc-color-bg-disabled);
  --arc-button-common-secondary-floating-bg-focus: var(--arc-color-bg-primary);

  /* critical-secondary variant floating button */
  --arc-button-critical-secondary-floating-bg: var(--arc-color-bg-primary);
  --arc-button-critical-secondary-floating-bg-hover: var(--arc-color-bg-critical-subtle);
  --arc-button-critical-secondary-floating-bg-active: var(--arc-color-bg-critical-muted);
  --arc-button-critical-secondary-floating-bg-processing: var(--arc-color-bg-primary);
  --arc-button-critical-secondary-floating-bg-disabled: var(--arc-color-bg-disabled);
  --arc-button-critical-secondary-floating-bg-focus: var(--arc-color-bg-primary);

  /* ai-secondary variant floating button */
  --arc-button-ai-secondary-floating-bg-processing: var(--arc-color-bg-primary);
  --arc-button-ai-secondary-floating-bg-disabled: var(--arc-color-bg-disabled);
  --arc-button-ai-secondary-floating-bg-focus: var(--arc-color-bg-primary);
}
`,fd=l`
:root {
  --arc-link-fg-hover-inverse: color-mix(in srgb, var(--arc-color-fg-on-mono-inverse) 68.2%, transparent);
  --arc-link-fg-disabled-inverse: color-mix(in srgb, var(--arc-color-fg-on-mono-inverse) 30%, transparent);
  --arc-link-focus-disabled-inverse: light-dark(var(--arc-color-light-blue-300), var(--arc-color-blue-600));
}
`,md=l`
:root {
  --arc-popover-ai-purple-50: light-dark(#fbf2ff, #210125);
  --arc-popover-ai-purple-200: light-dark(#9c15ff, #ad44cb);
  --arc-popover-ai-blue-50: light-dark(#f4fbff, #00223b);
  --arc-popover-ai-blue-200: light-dark(#1eb4fb, #169cfe);
}
`,y=l`--arc•button`,w=l`${y}•fg`,$=l`${y}•bg`,M=l`${y}•edge`,Ir=l`${y}•border`,ke=l`${y}•outline`,U=l`${y}•spinner`,zr=l`${y}•icon`,bd=l`
  &[data-size=xxl] {
    ${y}•font•size: var(${s}•16);
    ${U}•size: var(${s}•32);
    ${zr}•size: var(${s}•20);
    ${zr}•size•large: var(${s}•24);
    ${y}•height: var(${s}•56);
    ${y}•gap: var(${s}•10);
    ${y}•padding•inline: var(${s}•32);
  }

  &[data-size=xl] {
    ${y}•font•size: var(${s}•14);
    ${U}•size: var(${s}•16);
    ${zr}•size: var(${s}•16);
    ${zr}•size•large: var(${s}•20);
    ${y}•height: var(${s}•48);
    ${y}•gap: var(${s}•8);
    ${y}•padding•inline: var(${s}•32);
  }

  &[data-size=lg] { /** @default */
    ${y}•font•size: var(${s}•14);
    ${U}•size: var(${s}•16);
    ${zr}•size: var(${s}•16);
    ${zr}•size•large: var(${s}•20);
    ${y}•height: var(${s}•40);
    ${y}•gap: var(${s}•8);
    ${y}•padding•inline: var(${s}•20);
  }

  &[data-size=inherit] {
    ${y}•font•size: 1em;
    ${U}•size: 1em;
    ${zr}•size: 1em;
    ${zr}•size•large: 1.25em;
    ${y}•gap: 0.5em;
    ${y}•padding•inline: 1em;
  }

  &[data-size=md] {
    ${y}•font•size: var(${s}•14);
    ${U}•size: var(${s}•16);
    ${zr}•size: var(${s}•14);
    ${zr}•size•large: var(${s}•20);
    ${y}•height: var(${s}•32);
    ${y}•gap: var(${s}•6);
    ${y}•padding•inline: var(${s}•16);
  }

  &[data-size=sm] {
    ${y}•font•size: var(${s}•12);
    ${U}•size: var(${s}•14);
    ${zr}•size: var(${s}•12);
    ${zr}•size•large: var(${s}•14);
    ${y}•height: var(${s}•24);
    ${y}•gap: var(${s}•4);
    ${y}•padding•inline: var(${s}•12);
  }

  /* Custom buttons start out matching [data-size=lg] size */
  &[arc-button=custom] {
    ${y}•font•size: var(${s}•14);
    ${U}•size: var(${s}•16);
    ${zr}•size: var(${s}•16);
    ${zr}•size•large: var(${s}•20);
    ${y}•gap: var(${s}•8);
    ${y}•padding•inline: var(${s}•4); /* results in 24x24 for icon button @ 100% font size */
  }
`,$d=l`
  &[data-layout=hug] {
    ${y}•width: auto;
    ${y}•content•width: fit-content;
  }

  &[data-layout=fill] {
    ${y}•display: flex;
    ${y}•width: 100%;
    ${y}•content•width: 0;
  }

  &[data-layout=icon] {
    ${y}•aspect•ratio: 1 / 1;
    ${y}•flex: none;
    ${y}•min•width: min-content;
    ${y}•max•width: none;
    ${y}•padding•inline: var(${s}•0);

    &[data-shape=narrow] {
      ${y}•aspect•ratio: auto;
      ${y}•padding•inline: var(${s}•2);
    }
  }

`,yd=l`
  &:not([data-variant]) { /** @default - when no variant is set (i.e.: 'custom' buttons) */
    ${w}: inherit;
    ${$}: transparent;
    ${M}: transparent;
    ${w}•disabled: var(--arc-color-fg-disabled);
  }

  /** @default */
  &:is(
    [data-variant=common],
    [data-variant=primary],
    [data-variant=primary-inverse]
  ) {
    ${w}: var(--arc-color-fg-on-theme-heavy);
    ${$}: var(--arc-color-bg-theme-heavy);
    ${M}: transparent;

    ${w}•active: var(--arc-color-fg-on-theme-mid);
    ${w}•processing: var(--arc-color-fg-on-theme-stark);
    ${w}•disabled: var(--arc-color-fg-disabled);

    ${$}•hover: var(--arc-color-bg-theme-stark);
    ${$}•active: var(--arc-color-bg-theme-mid);
    ${$}•processing: var(--arc-color-bg-theme-stark);
    ${$}•disabled: var(--arc-color-bg-disabled);

    ${U}•base•color: var(--arc-color-alpha-white-30);
  }

  &[data-variant=secondary], &[data-variant=secondary-inverse] { /** @default - when icon-only */
    ${w}: var(--arc-color-fg-primary);
    ${M}: var(--arc-color-border-theme-heavy);

    ${w}•active: var(--arc-color-fg-secondary);
    ${w}•processing: var(--arc-color-fg-secondary);
    ${w}•disabled: var(--arc-color-fg-disabled);

    ${M}•active: var(--arc-color-border-theme-mid);
    ${M}•processing: var(--arc-color-border-theme-subtle);
    ${M}•disabled: var(--arc-color-border-disabled);

    &[data-layout=icon] {
      ${M}: var(--arc-color-border-mid);
      ${M}•hover: var(--arc-color-border-stark);
      ${M}•focus: var(--arc-color-border-mid);
    }

    &[data-hierarchy=secondary] {
      ${$}: transparent;
      ${$}•hover: var(--arc-color-bg-neutral-muted);
      ${$}•active: var(--arc-color-bg-neutral-subtle);
      ${$}•processing: transparent;
      ${$}•disabled: transparent;
      ${$}•focus: var(--arc-color-alpha-white-3);
    }
  }

  &[data-variant=secondary]:not([data-hierarchy=secondary]) { /** @deprecated */
    ${$}: var(--arc-color-mono-white);
    ${$}•hover: linear-gradient(var(--arc-color-bg-neutral-muted) 0 0), var(--arc-color-mono-white);
    ${$}•active: linear-gradient(var(--arc-color-bg-neutral-subtle) 0 0), var(--arc-color-mono-white);
    ${$}•processing: var(--arc-color-mono-white);
    ${$}•disabled: var(--arc-color-mono-white);
    ${$}•focus: linear-gradient(var(--arc-color-alpha-white-3) 0 0), var(--arc-color-mono-white);
  }

  &[data-variant=secondary-inverse]:not([data-hierarchy=secondary]) { /** @deprecated */
    ${$}: var(--arc-color-mono-black);
    ${$}•hover: linear-gradient(var(--arc-color-bg-neutral-muted) 0 0), var(--arc-color-mono-black);
    ${$}•active: linear-gradient(var(--arc-color-bg-neutral-subtle) 0 0), var(--arc-color-mono-black);
    ${$}•processing: var(--arc-color-mono-black);
    ${$}•disabled: var(--arc-color-mono-black);
    ${$}•focus: linear-gradient(var(--arc-color-alpha-white-3) 0 0), var(--arc-color-mono-black);
  }

  /* "floating" button mitigation */
  &:is([data-variant=secondary], [data-variant=secondary-inverse])[arc-shadow] {
    ${$}: var(--arc-button-common-secondary-floating-bg);
    ${$}•hover: var(--arc-button-common-secondary-floating-bg-hover);
    ${$}•active: var(--arc-button-common-secondary-floating-bg-active);
    ${$}•processing: var(--arc-button-common-secondary-floating-bg-processing);
    ${$}•disabled: var(--arc-button-common-secondary-floating-bg-disabled);
    ${$}•focus: var(--arc-button-common-secondary-floating-bg-focus);
  }

  &:is(
    [data-variant=tertiary],
    [data-variant=tertiary-inverse]
   ) {
    ${w}: var(--arc-color-fg-primary);
    ${$}: transparent;
    ${M}: transparent;

    ${w}•active: var(--arc-color-fg-secondary);
    ${w}•processing: var(--arc-color-fg-secondary);
    ${w}•disabled: var(--arc-color-fg-disabled);

    ${$}•hover: var(--arc-color-bg-neutral-muted);
    ${$}•focus: var(--arc-color-alpha-white-3);
    ${$}•active: var(--arc-color-bg-neutral-muted);
    ${$}•processing: var(--arc-color-bg-neutral-muted);
  }

  &[data-hierarchy=plain] {
    ${w}: var(--arc-color-fg-primary);
    ${$}: transparent;
    ${M}: transparent;

    ${w}•hover: var(--arc-color-alpha-heavy);
    ${w}•active: var(--arc-color-alpha-heavy);
    ${w}•processing: var(--arc-color-alpha-heavy);
    ${w}•disabled: var(--arc-color-fg-disabled);

    ${$}•hover: transparent;
    ${$}•active: transparent;
    ${$}•processing: transparent;
  }

`,xd=l`
  &[data-variant=ai-primary] {
    ${w}: var(--arc-color-fg-on-theme-stark);
    ${$}: var(--arc-gradient-ai-500) padding-box, var(--arc-gradient-ai-200) border-box;

    ${U}•base•color: var(--arc-color-alpha-white-30);

    ${w}•active: var(--arc-color-fg-neutral-mid);
    ${w}•processing: var(--arc-color-fg-on-theme-heavy);
    ${w}•hover: var(--arc-color-fg-on-theme-heavy);

    ${$}•hover: var(--arc-gradient-ai-400) padding-box, var(--arc-gradient-ai-200) border-box;
    ${$}•active: var(--arc-gradient-ai-600) padding-box, var(--arc-gradient-ai-200) border-box;
    ${$}•processing: var(--arc-gradient-ai-400) padding-box, var(--arc-gradient-ai-100) border-box;
    ${$}•disabled: var(--arc-color-bg-disabled);
  }

  &[data-variant=ai-secondary] {
    ${w}: var(--arc-color-fg-primary);
    ${$}: linear-gradient(var(--arc-color-bg-primary) 0 0) padding-box, var(--arc-gradient-ai-200) border-box;

    ${w}•active: var(--arc-color-fg-neutral-stark);
    ${w}•processing: var(--arc-color-fg-primary);

    ${$}•hover: var(--arc-gradient-ai-50) padding-box, var(--arc-gradient-ai-300) border-box;
    ${$}•active: var(--arc-gradient-ai-50) padding-box, var(--arc-gradient-ai-100) border-box;
    ${$}•processing: var(--arc-gradient-ai-50) padding-box, var(--arc-gradient-ai-100) border-box;
    ${$}•disabled: var(--arc-color-bg-disabled);
    ${$}•focus: var(--arc-color-alpha-white-3);

    /* "floating" button mitigation */
    &[arc-shadow] {
      ${$}•processing: var(--arc-button-ai-secondary-floating-bg-processing);
      ${$}•disabled: var(--arc-button-ai-secondary-floating-bg-disabled);
      ${$}•focus: var(--arc-button-ai-secondary-floating-bg-focus);
    }
  }

  &[data-variant^=ai-] {
    ${M}: transparent;

    ${w}•disabled: var(--arc-color-fg-disabled);
    ${M}•disabled: var(--arc-color-border-disabled);
  }

`,kd=l`
  &[data-variant=alpha-primary] {
    ${w}: var(--arc-color-mono-black);
    ${$}: var(--arc-color-mono-white);
    ${M}: transparent;

    ${w}•focus: var(--arc-color-mono-black);
    ${w}•active: var(--arc-color-alpha-black-60);
    ${w}•processing: var(--arc-color-mono-black);
    ${w}•disabled: var(--arc-color-alpha-black-60);

    ${$}•hover: var(--arc-color-alpha-white-70);
    ${$}•focus: var(--arc-color-mono-white);
    ${$}•active: var(--arc-color-alpha-white-40);
    ${$}•processing: var(--arc-color-alpha-white-40);
    ${$}•disabled: var(--arc-color-alpha-white-15);
  }

  &[data-variant=alpha-secondary] {
    ${w}: var(--arc-color-alpha-white-95);
    ${$}: transparent;
    ${M}: var(--arc-color-alpha-white-80);

    ${w}•active: var(--arc-color-alpha-white-80);
    ${w}•processing: var(--arc-color-alpha-white-95);
    ${w}•disabled: var(--arc-color-alpha-white-50);

    ${$}•hover: var(--arc-color-alpha-white-20);
    ${$}•focus: var(--arc-color-alpha-white-3);
    ${$}•active: var(--arc-color-alpha-white-40);
    ${$}•processing: var(--arc-color-alpha-white-25);
    ${$}•disabled: transparent;

    ${M}•hover: var(--arc-color-alpha-white-100);
    ${M}•focus: var(--arc-color-alpha-white-80);
    ${M}•active: var(--arc-color-alpha-white-50);
    ${M}•processing: transparent;
    ${M}•disabled: var(--arc-color-alpha-white-30);
  }

  &[data-variant=alpha-tertiary] {
    ${w}: var(--arc-color-alpha-white-95);
    ${$}: transparent;
    ${M}: transparent;

    ${w}•active: var(--arc-color-alpha-black-60);
    ${w}•processing: var(--arc-color-alpha-white-95);
    ${w}•disabled: var(--arc-color-alpha-white-50);

    ${$}•hover: var(--arc-color-alpha-white-20);
    ${$}•focus: var(--arc-color-alpha-white-5);
    ${$}•active: var(--arc-color-alpha-white-40);
    ${$}•processing: var(--arc-color-alpha-white-20);
    ${$}•disabled: transparent;
  }

  &:is(
    [data-variant=alpha-plain],
    [data-variant=alpha-link-style]
  ) {
    ${w}: var(--arc-color-alpha-white-95);
    ${$}: transparent;
    ${M}: transparent;

    ${w}•hover: var(--arc-color-alpha-white-60);
    ${w}•active: var(--arc-color-alpha-white-40);
    ${w}•processing: var(--arc-color-alpha-white-95);
    ${w}•disabled: var(--arc-color-alpha-white-30);
  }

  &[data-variant^=alpha-] {
    ${U}•base•color: var(--arc-color-alpha-white-30);
  }
`,wd=l`
  &[data-variant=link-style] {
    ${w}: var(--arc-color-fg-primary);
    ${$}: transparent;
    ${M}: transparent;

    ${w}•hover: var(--arc-color-alpha-heavy);
    ${w}•active: var(--arc-color-alpha-heavy);
    ${w}•processing: var(--arc-color-alpha-heavy);
    ${w}•disabled: var(--arc-color-fg-disabled);
  }
`,Ad=l`
  &[data-variant=critical-primary] {
    ${w}: var(--arc-color-fg-on-stark);
    ${$}: var(--arc-color-bg-critical-stark);
    ${M}: transparent;

    ${w}•active: var(--arc-color-fg-critical-subtle);
    ${w}•processing: var(--arc-color-fg-on-heavy);
    ${w}•disabled: var(--arc-color-fg-disabled);

    ${$}•hover: var(--arc-color-bg-critical-heavy);
    ${$}•active: var(--arc-color-bg-critical-heavy);
    ${$}•processing: var(--arc-color-bg-critical-heavy);
    ${$}•disabled: var(--arc-color-bg-disabled);

    ${U}•base•color: var(--arc-color-alpha-white-30);
  }

  &[data-variant=critical-secondary] {
    ${w}: var(--arc-color-fg-critical-stark);
    ${$}: transparent;
    ${M}: var(--arc-color-border-critical-stark);

    ${w}•active: var(--arc-color-fg-critical-subtle);
    ${w}•processing: var(--arc-color-fg-critical-stark);
    ${w}•disabled: var(--arc-color-fg-disabled);

    ${$}•hover: var(--arc-button-critical-bg-hover);
    ${$}•focus: var(--arc-color-alpha-white-3);
    ${$}•active: var(--arc-color-bg-critical-muted);
    ${$}•disabled: transparent;

    ${M}•active: var(--arc-color-border-critical-subtle);
    ${M}•processing: var(--arc-color-border-critical-stark);
    ${M}•disabled: var(--arc-color-border-disabled);

    /* "floating" button mitigation */
    &[arc-shadow] {
      ${$}: var(--arc-button-critical-secondary-floating-bg);
      ${$}•hover: var(--arc-button-critical-secondary-floating-bg-hover);
      ${$}•active: var(--arc-button-critical-secondary-floating-bg-active);
      ${$}•processing: var(--arc-button-critical-secondary-floating-bg-processing);
      ${$}•disabled: var(--arc-button-critical-secondary-floating-bg-disabled);
      ${$}•focus: var(--arc-button-critical-secondary-floating-bg-focus);
    }
  }

  &[data-variant=critical-tertiary] {
    ${w}: var(--arc-color-fg-critical-stark);
    ${$}: transparent;
    ${M}: transparent;

    ${w}•active: var(--arc-color-fg-critical-subtle);
    ${w}•processing: var(--arc-color-fg-critical-stark);
    ${w}•disabled: var(--arc-color-fg-disabled);

    ${$}•hover: var(--arc-button-critical-bg-hover);
    ${$}•focus: var(--arc-color-alpha-white-3);
    ${$}•active: var(--arc-color-bg-critical-subtle);
    ${$}•processing: var(--arc-color-bg-critical-muted);
    ${$}•disabled: transparent;
  }

  &:is(
    [data-variant=critical-plain],
    [data-variant=critical-link-style]
  ) {
    ${w}: var(--arc-color-fg-critical-stark);
    ${$}: transparent;
    ${M}: transparent;

    ${w}•hover: var(--arc-color-fg-critical-mid);
    ${w}•active: var(--arc-color-fg-critical-subtle);
    ${w}•processing: var(--arc-color-fg-critical-stark);
    ${w}•disabled: var(--arc-color-fg-disabled);
  }

`,zd=l`
  ${y}•color: var(${w});
  ${y}•background: var(${$});
  ${y}•font•weight: var(--arc-font-weight-600);
  ${y}•padding: 0 var(${y}•padding•inline);
  ${y}•content•opacity: 1;
  ${y}•cursor: var(--arc-button-cursor, pointer);
  ${y}•transition: 0.2s ease-out;

  ${Ir}•color: var(${M});
  ${Ir}: var(--arc-border-width-sm) solid var(${Ir}•color, transparent);

  ${ke}: var(--arc-border-width-md) solid var(${ke}•color, transparent);
  ${ke}•offset: var(--arc-border-width-md);

  /* spinner svg style controls */
  ${U}•progress•color: var(--arc-button-progress-color, var(--arc-color-mono-white, currentcolor));
  ${U}•circle•color: var(--arc-button-color, var(${U}•base•color, var(--arc-color-alpha-mid)));
  ${U}•circle•opacity: var(--arc-alpha-100);

  /* CONTEXT OVERRIDES */
  &[arc-button=custom] {
    ${y}•font•weight: normal;
  }

  &[data-variant^=ai-] {
    ${Ir}: var(--arc-border-width-md) solid var(${Ir}•color, transparent);
  }

  &:is(:not([data-shape]), [data-shape=circle]) {
    ${Ir}•radius: var(--arc-border-radius-pill);
  }

  &:is(
    [arc-button=custom],
    [data-layout=icon]:not([data-shape]),
    [data-shape=square],
    [data-shape=narrow]
  ) {
    ${Ir}•radius: var(--arc-border-radius-md);
  }

  &:is(
    [arc-button=custom],
    [data-hierarchy=plain],
    [data-hierarchy=link-style]
  ) {
    ${y}•padding: unset;
    ${y}•height: unset;
  }

  /* border-radius for plain and link-style informs focus state outline radius */
  &:is(
    [data-hierarchy=plain],
    [data-hierarchy=link-style]
  ) {
    ${Ir}•radius: var(--arc-border-radius-sm);
  }

  &[data-hierarchy=link-style] {
    ${y}•font•weight: inherit;
    ${y}•text•decoration: none;

    [arc-button-label] {
      text-decoration: var(--arc-link-text-decoration, underline);
      text-decoration-color: currentcolor;
    }

    [arc-button-icon] {
      text-decoration: none;
    }
  }

  /* Inter-Component Communication ---------------------------------• */

  /** ArcIcon */
  --arc-icon-fa-line-height: 1lh;
  --arc-icon-size: var(${zr}•size);

  &[has-large-icon] {
    --arc-icon-size: var(${zr}•size•large);
  }

  /** ArcSpinner */
  --arc-spinner-size: var(${U}•size);
  --arc-spinner-progress-color: var(${U}•progress•color);
  --arc-spinner-circle-color: var(${U}•circle•color);
  --arc-spinner-circle-opacity: var(${U}•circle•opacity);
  --arc-spinner-position: var(${U}•position, absolute);
  --arc-spinner-inset: var(${U}•inset, 50% auto auto 50%);
  --arc-spinner-translate: var(${U}•translate, -50% -50%);

`,Cd=l`
  &:is(
    [is-processing],
    [is-processing-with-text],
    :has(input)
  ) {
    ${y}•position: relative;
  }

  &[is-disabled] {
    ${y}•color: var(${w}•disabled, var(${w}));
    ${y}•background: var(${$}•disabled, var(${$}));
    ${Ir}•color: var(${M}•disabled, var(${M}));
    ${y}•opacity: var(--arc-button-disabled-opacity, unset);
    ${y}•cursor: var(--arc-button-disabled-cursor, not-allowed);
  }

  &:not(
    [is-disabled],
    [is-processing],
    [is-processing-with-text]
  ) {
    &:where(
      :hover,
      [data-simulate=hover]
    ) {
      ${y}•color: var(${w}•hover, var(${w}));
      ${y}•background: var(${$}•hover, var(${$}));
      ${Ir}•color: var(${M}•hover, var(${M}));
    }

    &:is(
      :active,
      [is-active],
      [data-simulate=active]
    ) {
      ${y}•color: var(${w}•active, var(${w}));
      ${y}•background: var(${$}•active, var(${$}));
      ${Ir}•color: var(${M}•active, var(${M}));
    }
  }

  &[is-processing] {
    ${y}•content•visibility: hidden;
    ${y}•content•opacity: 0;

    /* spinner svg position controls */
    ${U}•position: absolute;
    ${U}•inset: 50% auto auto 50%;
    ${U}•translate: -50% -50%;
  }

  &[is-processing-with-text] {
    ${y}•content•visibility: visible;

    /* spinner svg position controls */
    ${U}•position: relative;
    ${U}•inset: 0;
    ${U}•translate: 0;
    ${U}•size: 1lh;
  }

  &:is(
    [is-processing],
    [is-processing-with-text]
  ) {
    ${y}•opacity: var(--arc-button-processing-opacity, unset);
    ${y}•cursor: var(--arc-button-processing-cursor, default);

    ${y}•color: var(${w}•processing, var(${w}));
    ${y}•background: var(${$}•processing, var(${$}));
    ${Ir}•color: var(${M}•processing, var(${M}));

    &:is(
      [data-variant*=secondary],
      [data-variant*=tertiary],
      [data-hierarchy=plain],
      [data-hierarchy=link-style],
      [arc-scheme=inverse]:not([data-variant*=primary])
    ):not(
      [data-variant^=alpha-]
    ) {
      ${U}•progress•color: var(--arc-color-border-brand-mid);
    }
  }

  &:is(
    :where(:focus, :focus-within):focus-visible,
    [data-simulate=focus]
  ) {
    ${y}•color: var(${w}•focus, var(${w}));
    ${y}•background: var(${$}•focus, var(${$}));
    ${Ir}•color: var(${M}•focus, var(${M}));
    ${ke}•color: var(--arc-button-outline-color, var(--arc-color-border-focus));

    * {
      outline: none;
    }
  }

`,Sd=l`
@layer arc-components {

  /* Shared defaults from _Internal/Components.css.js */
  ${pd}

  :where([arc-button]) {
    /* SIZES -------------------------------------------------------• */
    ${bd}

    /* LAYOUTS -----------------------------------------------------• */
    ${$d}

    /* VARIANTS ----------------------------------------------------• */
    ${yd}
    ${wd}
    ${xd}
    ${kd}
    ${Ad}

    /* CORE VARIABLES ----------------------------------------------• */
    ${zd}
    ${Cd}

    /* CORE STYLES -------------------------------------------------• */
    appearance: none;
    cursor: var(--arc-button-cursor, var(${y}•cursor));
    position: var(--arc-button-position, var(${y}•position, unset));
    transition: var(--arc-button-transition, var(${y}•transition));

    /* FOOTPRINT */

    font: inherit;
    font-weight: var(--arc-button-font-weight, var(${y}•font•weight));
    font-size: var(--arc-button-font-size, var(${y}•font•size, inherit));
    padding: var(--arc-button-padding, var(${y}•padding));

    width: var(--arc-button-width, var(${y}•width, auto));
    min-width: var(--arc-button-min-width, var(${y}•min•width, unset));
    max-width: var(--arc-button-max-width, var(${y}•max•width, 100%));

    height: var(--arc-button-height, var(${y}•height, auto));
    min-height: var(--arc-button-min-height, var(${y}•min•height, unset));
    max-height: var(--arc-button-max-height, var(${y}•max•height, unset));

    aspect-ratio: var(--arc-button-aspect-ratio, var(${y}•aspect•ratio, unset));

    /* VARIANT THEME APPLIED ---------------------------------------• */

    color: var(--arc-button-color, var(${y}•color));
    background: var(--arc-button-background, var(${y}•background));
    border: var(--arc-button-border, var(${Ir}));
    border-radius: var(--arc-button-border-radius, var(${Ir}•radius));

    opacity: var(--arc-button-opacity, 1);

    outline: var(--arc-button-outline, var(${ke}));
    outline-offset: var(--arc-button-outline-offset, var(${ke}•offset));

    &[href] {
      text-decoration: var(--arc-button-text-decoration, none);
    }

    /* shadow concession for buttons not already using 'arc-shadow' util */
    &:not([arc-shadow]) {
      box-shadow: var(--arc-button-box-shadow, unset);
    }

    /* "floating" button mitigation */
    &[arc-shadow] {
      backdrop-filter: blur(0.5em);
    }

    /* INNER-ELEMENTS ----------------------------------------------• */
    [arc-button-content] {
      flex: 1;
      display: flex;
      align-items: var(--arc-button-align-items, center);
      justify-content: var(--arc-button-justify-content, center);
      gap: var(--arc-button-gap, var(${y}•gap));

      opacity: var(--arc-button-content-opacity, var(${y}•content•opacity));
      visibility: var(--arc-button-content-visibility, var(${y}•content•visibility, inherit));
      pointer-events: var(--arc-button-content-pointer-events, none);

      width: var(--arc-button-content-width, var(${y}•content•width, auto));
      max-width: var(--arc-button-content-max-width, 100%);
      overflow: var(--arc-button-content-overflow, visible);

      transition: var(--arc-button-content-transition, var(${y}•transition));

      line-height: normal;
      user-select: none;
    }

    [arc-button-label] {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      max-width: 100%;
      opacity: var(--arc-button-label-opacity, var(${y}•opacity));
      transition: var(--arc-button-label-transition, var(${y}•transition));
    }

    [arc-button-icon] {
      width: 1.25em; /** keeping for fontawesome v6 backward compatibility */
      opacity: var(--arc-button-icon-opacity, var(${y}•opacity));
      transition: var(--arc-button-icon-transition, var(${y}•transition));
    }

    input {
      position: absolute;
      opacity: 0;
      scale: 0.1;
    }
  }

  [arc-button]:not([hidden]) {
    flex: var(--arc-button-flex, unset);
    display: var(--arc-button-display, var(${y}•display, inline-flex));
    align-items: center;
    justify-content: center;
  }

}
`,$i=(0,c.jsx)(mc,{}),jr=(0,m.forwardRef)(({children:r,disabled:a,...e},o)=>{const t=(0,m.useRef)(null),{iconEnd:i,iconStart:n,icon:h,text:d,isActive:u,isDisabled:v,isProcessing:p,isProcessingWithText:g,hasLargeIcon:f,tag:x,href:z,type:T,title:j,layout:_,shape:E,size:C="lg",variant:S="common",hierarchy:N="primary",isInverse:B=!1,scheme:Y="auto",shadow:G,_isCustom:H,...dr}=e,K=x??(z?"a":"button"),cr=K==="button"?T||"button":void 0,ar=_==="icon",Fr=g||p||v||a,hr=dr?.["aria-disabled"]||Fr||void 0,Zr=!ar&&(r||d),rr=g&&$i||n||h,_r=!ar&&(g&&!(n||h)?void 0:i),oa=(p||g&&ar)&&$i,wr=S&&bi.includes(S),Yr=(()=>{if(wr)return S;const Ma=N||"primary";if(S==="ai"){const ev=["primary","secondary"].includes(Ma)?Ma:"primary";return`${S}-${ev}`}return Ma==="link-style"?S==="critical"||S==="alpha"?`${S}-${Ma}`:"link-style":S==="common"?Ma:S==="alpha"||S==="critical"?`${S}-${Ma}`:S})(),Ua=Y==="auto"?void 0:Y,W=Yr?.endsWith("-inverse")?"inverse":void 0,vr=B?"inverse":Ua??W,Vr=G===!0?"lg":G,{tooltip:er,...Ra}=dr,ga=Do(er)?er:void 0,Pa=e.tooltip??ga,pa=!!Pa,xo=Do(Pa)?{text:Pa}:Pa,It=dr["aria-describedby"],se=(0,m.useRef)(void 0),jt=Wr(void 0,"arc-tooltip"),Lt=e.id?`${e.id}-tooltip`:jt;pa&&!se.current&&(se.current=Lt);const Rt=pa?He([It,se.current]):It,{anchorName:vn,style:Pt,popoverTarget:ko,popoverTargetAction:de,...gn}=Ra,Mt=ko?We(String(vn||e?.id)):void 0,Aa=pa?We(String(Lt)):void 0,za=oi(Pt)?Pt:void 0,he=za&&"anchorName"in za&&za.anchorName,Wa=[...(Do(he)?ti(he,", "):[]).map(We),...Mt?[Mt]:[],...Aa?[Aa]:[]],Ot=He(Wa,1/0,", "),pn={...za??{},...Ot?{anchorName:Ot}:{}};let Tl={popoverTarget:ko||void 0,popoverTargetAction:de||void 0};return m.version.startsWith("18")&&(Tl={popovertarget:ko||void 0,popovertargetaction:de||void 0}),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(K,{...gn,...Tl,ref:Ma=>{t.current=Ma,fa(o,Ma)},"arc-button":H?"custom":"","arc-scheme":vr,"arc-shadow":Vr||void 0,disabled:!z&&Fr||void 0,href:z||void 0,title:pa?void 0:j||void 0,type:cr,"data-layout":_,"data-shape":H?void 0:E,"data-size":H?void 0:C,"data-variant":H?void 0:Yr,"data-hierarchy":N||void 0,"has-large-icon":f?"":void 0,"is-active":u?"":void 0,"is-processing":p||g&&ar?"":void 0,"is-processing-with-text":g&&!ar?"":void 0,"is-disabled":Fr||hr?"":void 0,"aria-disabled":hr,"aria-describedby":Rt||void 0,style:pn,children:[(0,c.jsxs)("span",{"arc-button-content":"",children:[rr&&typeof rr=="string"?(0,c.jsx)(O,{"arc-button-icon":"",icon:rr}):rr&&(0,c.jsx)("span",{"arc-button-icon":"",children:rr}),!!Zr&&(0,c.jsx)("span",{"arc-button-label":"",children:Zr}),_r&&typeof _r=="string"?(0,c.jsx)(O,{"arc-button-icon":"",icon:_r}):_r&&(0,c.jsx)("span",{"arc-button-icon":"",children:_r})]}),oa]}),pa&&(0,c.jsx)(Ac,{...xo,id:se.current,alternateAnchor:xo?.alternateAnchor??(()=>t.current),anchorName:Aa})]})});jr.displayName="ArcButton",V("ArcButton",Sd);const qe=(0,m.forwardRef)((r,a)=>(0,c.jsx)(jr,{...r,ref:a,"arc-popover-button":""})),yi=({isInverse:r=!1,isOpen:a,...e})=>(0,c.jsx)(jr,{...e,icon:"fa-regular fa-xmark",text:"Dismiss",layout:"icon",shape:"square",size:"sm",variant:"common",hierarchy:"tertiary",isInverse:r,"arc-popover-dismiss":""}),_d=({children:r,showDivider:a,showDismiss:e,dismissProps:o,tag:t="header",...i})=>(0,c.jsxs)(t,{...i,"arc-popover-header":"","has-divider":a?"":void 0,children:[r,e&&(0,c.jsx)(yi,{...o})]}),Ed=({tag:r="article",...a})=>(0,c.jsx)(r,{...a,"arc-popover-body":""}),Td=({showDivider:r,tag:a="footer",...e})=>(0,c.jsx)(a,{...e,"arc-popover-footer":"","has-divider":r?"":void 0});qe.displayName="ArcPopoverButton";const A=l`--arc-popover`,Cr=l`--arc•popover`,P=l`--arc•trail•mix`,zc=l`${Cr}•radius`,Id=l`${Cr}•content`,Qo=l`${Cr}•outline`,Lr=l`${Cr}•offset`,rt=l`${Cr}•header`,jd=l`${Cr}•body`,Cc=l`${Cr}•divider`,at=l`${Cr}•footer`,ha=l`${Cr}•tail`,q=l`${ha}•top`,J=l`${ha}•left`,Je=l`${ha}•size`,Gr=l`${ha}•x`,Kr=l`${ha}•y`,et=l`${Cr}•padding`,Rr=l`${Cr}•margin`,we=l`${rt}•padding`,Jr=l`${jd}•padding`,ba=l`${at}•padding`,xi=l`${Cr}•fg`,ot=l`${Cr}•bg`,tt=l`${Id}•bg`,ct=l`${ha}•fill•a`,nt=l`${ha}•fill•b`,it=l`${ha}•edge•a`,lt=l`${ha}•edge•b`,Ld=l`

  ${Cr}•fallback: none;
  ${Qo}: var(${A}-outline-size, var(--arc-border-width-md));
  ${zc}: var(${A}-border-radius, var(--arc-border-radius-lg));
  ${Lr}: var(${A}-offset, var(--js•offset, 0px));

  /* space & padding */
  ${et}: var(${b}•14);

  /* tail metrics - starts at defaults for anchor-at='bottom-start' */
  ${P}: 47.5%; /* mix-ratio for tail to match gradient outline for: 'popover[variant=ai]' */
  ${Gr}: var(${A}-tail-x, 1.75em);
  ${Kr}: var(${A}-tail-y, 1.125em);
  ${Je}: 0px;

  &:where([has-tail]) {
    ${Je}: var(${A}-tail-size, var(--js•tail, 8px));

    /* offset calculation magic number - 'sqrt(2) / 2' for half of 45° rotated tailSize */
    ${Lr}: calc(var(${A}-offset, var(--js•offset, 0px)) + var(${Je}) * (sqrt(2) / 2));
  }

  &:has([arc-popover-body]) {
    ${et}: 0;
    &:has([arc-popover-header]:not([has-divider])) { ${Jr}•block•start: 0; }
    &:has([arc-popover-footer]:not([has-divider])) { ${Jr}•block•end: 0; }
  }

`,Rd=l`

  /* default variant: common */
  &[variant] {
    ${xi}: var(--arc-color-fg-primary);
    ${ot}: var(${A}-background, var(--arc-color-bg-mono)) border-box;
    ${tt}: var(${A}-background, var(--arc-color-bg-mono)) padding-box;
    ${ct}: var(${A}-background, var(--arc-color-bg-mono));
    ${nt}: var(${A}-background, var(--arc-color-bg-mono));
    ${it}: var(${A}-background, var(--arc-color-bg-mono));
    ${lt}: var(${A}-background, var(--arc-color-bg-mono));
    ${Cr}•shadow: var(--arc-shadow-lg);
    ${Cc}: var(--arc-border-width-sm) solid var(--arc-color-border-mid);
  }

  &[variant=brand] {
    ${ot}: var(--arc-color-border-brand-mid) border-box;
    ${tt}: var(--arc-color-bg-brand-muted) padding-box;
    ${ct}: var(--arc-color-bg-brand-muted);
    ${nt}: var(--arc-color-bg-brand-muted);
    ${it}: var(--arc-color-border-brand-mid);
    ${lt}: var(--arc-color-border-brand-mid);
  }

  &[variant=ai] {
    ${ot}: var(--arc-gradient-ai-200) border-box;
    ${tt}: var(--arc-gradient-ai-50) padding-box;
    ${ct}: var(${A}-ai-purple-50);
    ${nt}: var(${A}-ai-blue-50);
    ${it}: var(${A}-ai-purple-200);
    ${lt}: var(${A}-ai-blue-200);
  }

`,Pd=l`

  /* default density: compact */
  &:not([density=comfortable]) {
    ${rt}•gap: var(${b}•12);
    ${we}•block: var(${b}•12);
    ${we}•inline: var(${b}•12);

    ${Jr}•block: var(${b}•12);
    ${Jr}•inline: var(${b}•12);

    ${at}•gap: var(${b}•12);
    ${ba}•inline: var(${b}•12);
    ${ba}•block•start: var(${b}•12);
    ${ba}•block•end: var(${b}•12);
  }

  &[density=comfortable] {
    ${rt}•gap: var(${b}•18);
    ${we}•block: var(${b}•16);
    ${we}•inline: var(${b}•20);

    ${Jr}•block: var(${b}•20);
    ${Jr}•inline: var(${b}•20);

    ${at}•gap: var(${b}•18);
    ${ba}•inline: var(${b}•20);
    ${ba}•block•start: var(${b}•16);
    ${ba}•block•end: var(${b}•20);

    &:not(:has([arc-popover-body])) {
      ${et}: var(${b}•20);
    }

    [arc-popover-content] {
      font-size: var(${A}-font-size, var(${s}•14));
    }
  }

`,Xe={TOP:l`
    &[anchor-at*='top-'] {
      ${Rr}: 0 0 var(${Lr}) 0;
      ${q}: 100%;
    }
    &[anchor-at='top-start'] {
      position-area: block-start span-inline-end;
      ${P}: 95%;
      ${J}: calc(0% + var(${Gr}));
    }
    &[anchor-at='top-center'] {
      position-area: block-start;
      ${P}: 75%;
      ${J}: 50%;
    }
    &[anchor-at='top-end'] {
      position-area: block-start span-inline-start;
      ${P}: 53.5%;
      ${J}: calc(100% - var(${Gr}));
    }
  `,RIGHT:l`
    &[anchor-at*='right-'] {
      ${Rr}: 0 0 0 var(${Lr});
      ${J}: 0%;
    }
    &[anchor-at='right-start'] {
      position-area: inline-end span-block-end;
      ${P}: 53.5%;
      ${q}: calc(0% + var(${Kr}));
    }
    &[anchor-at='right-center'] {
      position-area: inline-end;
      ${P}: 75%;
      ${q}: 50%;
    }
    &[anchor-at='right-end'] {
      position-area: inline-end span-block-start;
      ${P}: 95%;
      ${q}: calc(100% - var(${Kr}));
    }
  `,BOTTOM:l`
    &[anchor-at*='bottom-'] {
      ${Rr}: var(${Lr}) 0 0 0;
      ${q}: 0%;
    }
    &[anchor-at='bottom-end'] {
      position-area: block-end span-inline-start;
      ${P}: 5%;
      ${J}: calc(100% - var(${Gr}));
    }
    &[anchor-at='bottom-center'] {
      position-area: block-end;
      ${P}: 25%;
      ${J}: 50%;
    }
    &[anchor-at='bottom-start'] {
      position-area: block-end span-inline-end;
      ${P}: 47.5%;
      ${J}: calc(0% + var(${Gr}));
    }
  `,LEFT:l`
    &[anchor-at*='left-'] {
      ${Rr}: 0 var(${Lr}) 0 0;
      ${J}: 100%;
    }
    &[anchor-at='left-end'] {
      position-area: inline-start span-block-start;
      ${P}: 47.5%;
      ${q}: calc(100% - var(${Kr}));
    }
    &[anchor-at='left-center'] {
      position-area: inline-start;
      ${P}: 25%;
      ${q}: 50%;
    }
    &[anchor-at='left-start'] {
      position-area: inline-start span-block-end;
      ${P}: 5%;
      ${q}: calc(0% + var(${Kr}));
    }
  `,CENTER_AND_CORNERS:l`
    &:is([anchor-at='center'], [anchor-at*='corner']) { ${ha}•display: none; }
    &[anchor-at='center'] { position-area: center center; ${Rr}: 0; }
    &[anchor-at*='corner'] { ${Rr}: var(${Lr}); }
    &[anchor-at='nw-corner'] { position-area: top left; }
    &[anchor-at='ne-corner'] { position-area: top right; }
    &[anchor-at='se-corner'] { position-area: bottom right; }
    &[anchor-at='sw-corner'] { position-area: bottom left; }
  `},Ae={FLIP_BLOCK:l`
    &[anchor-at*='top-'] { ${Rr}: 0 0 var(${Lr}) 0; }
    &[anchor-at='top-start']::before { ${P}: 47.5%; ${q}: 0%; }
    &[anchor-at='top-center']::before { ${P}: 25%; ${q}: 0%; }
    &[anchor-at='top-end']::before { ${P}: 5%; ${q}: 0%; }

    &[anchor-at='right-start']::before { ${P}: 95%; ${q}: calc(100% - var(${Kr})); }
    &[anchor-at='right-end']::before { ${P}: 53.5%; ${q}: calc(0% + var(${Kr})); }

    &[anchor-at*='bottom-'] { ${Rr}: var(${Lr}) 0 0 0; }
    &[anchor-at='bottom-end']::before { ${P}: 53.5%; ${q}: 100%; }
    &[anchor-at='bottom-center']::before { ${P}: 75%; ${q}: 100%; }
    &[anchor-at='bottom-start']::before { ${P}: 95%; ${q}: 100%; }

    &[anchor-at='left-end']::before { ${P}: 5%; ${q}: calc(0% + var(${Kr})); }
    &[anchor-at='left-start']::before { ${P}: 47.5%; ${q}: calc(100% - var(${Kr})); }
  `,FLIP_INLINE:l`
    &[anchor-at='top-start']::before { ${P}: 53.5%; ${J}: calc(100% - var(${Gr})); }
    &[anchor-at='top-end']::before { ${P}: 95%; ${J}: calc(0% + var(${Gr})); }

    &[anchor-at*='right-'] { ${Rr}: 0 var(${Lr}) 0 0; }
    &[anchor-at='right-start']::before { ${P}: 5%; ${J}: 100%; }
    &[anchor-at='right-center']::before { ${P}: 25%; ${J}: 100%; }
    &[anchor-at='right-end']::before { ${P}: 47.5%; ${J}: 100%; }

    &[anchor-at='bottom-end']::before { ${P}: 47.5%; ${J}: calc(0% + var(${Gr})); }
    &[anchor-at='bottom-start']::before { ${P}: 5%; ${J}: calc(100% - var(${Gr})); }

    &[anchor-at*='left-'] { ${Rr}: 0 0 0 var(${Lr}); }
    &[anchor-at='left-end']::before { ${P}: 95%; ${J}: 0%; }
    &[anchor-at='left-center']::before { ${P}: 75%; ${J}: 0%; }
    &[anchor-at='left-start']::before { ${P}: 53.5%; ${J}: 0%; }
  `,FLIP_BLOCK_INLINE:l`
    &[anchor-at*='top-'] { ${Rr}: 0 0 var(${Lr}) 0; }
    &[anchor-at='top-start']::before { ${P}: 5%; ${q}: 0%; ${J}: calc(100% - var(${Gr})); }
    &[anchor-at='top-end']::before { ${P}: 47.5%; ${q}: 0%; ${J}: calc(0% + var(${Gr})); }

    &[anchor-at*='right-'] { ${Rr}: 0 var(${Lr}) 0 0; }
    &[anchor-at='right-start']::before { ${P}: 47.5%; ${q}: calc(100% - var(${Kr})); ${J}: 100%; }
    &[anchor-at='right-end']::before { ${P}: 5%; ${q}: calc(0% + var(${Kr})); ${J}: 100%; }

    &[anchor-at*='bottom-'] { ${Rr}: var(${Lr}) 0 0 0; }
    &[anchor-at='bottom-end']::before { ${P}: 95%; ${q}: 100%; ${J}: calc(0% + var(${Gr})); }
    &[anchor-at='bottom-start']::before { ${P}: 53.5%; ${q}: 100%; ${J}: calc(100% - var(${Gr})); }

    &[anchor-at*='left-'] { ${Rr}: 0 0 0 var(${Lr}); }
    &[anchor-at='left-end']::before { ${P}: 53.5%; ${q}: calc(0% + var(${Kr})); ${J}: 0%; }
    &[anchor-at='left-start']::before { ${P}: 95%; ${q}: calc(100% - var(${Kr})); ${J}: 0%; }
  `},Md=l`
  [arc-popover] {
    position: fixed;
    inset: auto;
    padding: 0;
    margin: var(${Rr});

    container-type: anchored;
    position-anchor: var(${A}-anchor-name, var(--js•anchor));

    ${Xe.TOP}
    ${Xe.RIGHT}
    ${Xe.BOTTOM}
    ${Xe.LEFT}
    ${Xe.CENTER_AND_CORNERS}

    &[try-fallbacks] {
      position-try-fallbacks: flip-block, flip-inline, flip-block flip-inline;
    }
  }

  @supports (container-type: anchored) {
    @container anchored(fallback: flip-block) {
      [arc-popover][try-fallbacks][has-tail] {
        ${Ae.FLIP_BLOCK}
      }
    }

    @container anchored(fallback: flip-inline) {
      [arc-popover][try-fallbacks][has-tail] {
        ${Ae.FLIP_INLINE}
      }
    }

    @container anchored(fallback: flip-block flip-inline) {
      [arc-popover][try-fallbacks][has-tail] {
        ${Ae.FLIP_BLOCK_INLINE}
      }
    }
  }

  /* @note – tail fallback mitigation */
  @supports not (container-type: anchored) {
    /* @note – inline center anchor placement mitigation for Firefox */
    [arc-popover] {
      &[anchor-at='right-center'] {
        position-area: inline-end center;
      }
      &[anchor-at='left-center'] {
        position-area: inline-start center;
      }
    }

    [arc-popover][try-fallbacks][has-tail] {
        &[data-fallbacks='flip-block'] {
          ${Ae.FLIP_BLOCK}
        }
        &[data-fallbacks='flip-inline'] {
          ${Ae.FLIP_INLINE}
        }
        &[data-fallbacks='flip-block-inline'] {
          ${Ae.FLIP_BLOCK_INLINE}
        }
      }
    }
`,te={BACKDROP:l`
    &::backdrop {
      background: var(${A}-backdrop, transparent);
    }
  `,DISMISS:l`
    [arc-popover-dismiss] {
      align-self: var(${A}-dismiss-align-self, auto);
      display: var(${A}-dismiss-display, inline-flex);
      align-items: var(${A}-dismiss-align-items, center);
      justify-content: var(${A}-dismiss-justify-content, center);
      margin: var(${A}-dismiss-margin, var(${b}•6m) var(${b}•0));
    }

    /* Header-less Popover: DismissButton typical starting spot */
    &:where(:not([arc-popover-header])) > [arc-popover-dismiss] {
      --arc-button-position: absolute;
      ${A}-dismiss-margin: 0;
      inset: var(${A}-dismiss-inset, 0.5em 0.5em auto auto);
    }
  `,HEADER:l`
    [arc-popover-header] {
      flex: var(${A}-header-flex, none);
      display: var(${A}-header-display, flex);
      justify-content: var(${A}-header-justify-content, space-between);
      align-items: var(${A}-header-align-items, baseline);
      gap: var(${A}-header-gap, var(${rt}•gap));

      padding: var(${A}-header-padding,
        var(${we}•block)
        var(${we}•inline)
      );

      color: var(${A}-header-color, inherit);
      background: var(${A}-header-background, none);

      &:has([arc-popover-dismiss]) {
        padding-inline-end: var(${b}•12);
      }

      &:where([has-divider]) {
        border-bottom: var(${A}-header-border-bottom, var(${Cc}));
      }
    }
  `,CONTENT:l`
    [arc-popover-content] {
      flex: var(${A}-flex, 1);
      position: relative;
      display: var(${A}-content-display, flex);
      flex-direction: var(${A}-content-flex-direction, column);
      gap: var(${A}-content-gap, 0);

      overflow: var(${A}-overflow, auto);
      overscroll-behavior: var(${A}-overscroll-behavior, contain);

      color: var(${A}-color, var(${xi}));
      padding: var(${A}-padding, var(${et}));
      margin: var(${A}-margin, unset);
      background: var(${A}-content-background, var(${tt}));
      border-radius: calc(var(${zc}) - var(${Qo}));
      border: var(${A}-border, none);

      height: var(${A}-height, auto);
      min-height: var(${A}-min-height, auto);
      max-height: var(${A}-max-height, 65vh);
      resize: var(${A}-resize, none);
      font-size: var(${A}-font-size, var(${s}•12));
    }
  `,BODY:l`
    [arc-popover-body] {
      flex: var(${A}-body-flex, 1);
      display: var(${A}-body-display, block);
      flex-direction: var(${A}-body-flex-direction, unset);

      padding: var(${A}-body-padding,
        var(${Jr}•block•start, var(${Jr}•block))
        var(${Jr}•inline)
        var(${Jr}•block•end, var(${Jr}•block))
        var(${Jr}•inline)
      );
    }
  `,FOOTER:l`
    [arc-popover-footer] {
      flex: var(${A}-footer-flex, none);
      display: var(${A}-footer-display, flex);
      flex-direction: var(${A}-footer-flex-direction, row-reverse);
      justify-content: var(${A}-footer-justify-content, space-between);
      align-items: var(${A}-footer-align-items, center);
      gap: var(${A}-footer-gap, var(${at}•gap));

      padding: var(${A}-footer-padding,
        var(${ba}•block•start)
        var(${ba}•inline)
        var(${ba}•block•end)
        var(${ba}•inline)
      );

      background: var(${A}-footer-background, none);
      color: var(${A}-footer-color, inherit);

      &:where([has-divider]) {
        border-top: var(${A}-footer-border-top, var(${Cc}));
      }
    }
  `,TAIL:l`
    &[has-tail]::before {
      content: '';
      box-sizing: content-box;
      position: absolute;
      display: var(${ha}•display, block);

      inset: auto;
      top: var(${q}, auto);
      left: var(${J}, auto);

      translate: -50% -50%;
      rotate: 45deg;

      width: var(${Je});
      height: var(${Je});
      border-radius: var(${s}•2);

      background: color-mix(in srgb,
        var(${ct}) var(${P}),
        var(${nt}) clamp(0%, 100% - var(${P}), 100%)
      );

      border: var(${Qo}) solid color-mix(in srgb,
        var(${it}) var(${P}),
        var(${lt}) clamp(0%, 100% - var(${P}), 100%)
      );
    }
  `},Bd=l`
  [arc-popover] {
    will-change: opacity;
    overflow: visible; /* For the tail – content overflow is set on '[arc-popover-content]' */

    font-size: var(${s}•16); /* This font-size is intended NOT to be altered; it is locked
                                in as a reset for various popover calculations. The effective
                                popover font size is set on '[arc-popover-content]'. */

    background: var(${A}-background, var(${ot}));
    border: var(${Qo}) solid transparent;
    border-radius: var(${zc});
    box-shadow: var(${A}-shadow, var(${Cr}•shadow));
    width: var(${A}-width, auto);
    height: var(${A}-height, auto);
    min-width: var(${A}-min-width, auto);
    min-height: var(${A}-min-height, auto);
    max-width: var(${A}-max-width, 100vw);
    max-height: var(${A}-max-height, 65vh);

    ${te.BACKDROP}
    ${te.DISMISS}
    ${te.HEADER}
    ${te.CONTENT}
    ${te.BODY}
    ${te.FOOTER}
    ${te.TAIL}
  }
`,Qe={SETUP:Ld,ANCHORS:Md,VARIANTS:Rd,DENSITIES:Pd,ELEMENT:Bd},Od=l`
@layer arc-components {

  /* Shared defaults from _Internal/Components.css.js */
  ${md}

  [arc-popover] {
    ${Qe.SETUP}
    ${Qe.VARIANTS}
    ${Qe.DENSITIES}
  }

  ${Qe.ANCHORS}
  ${Qe.ELEMENT}

  /* POPOVER transition --------------------------------------------• */

  [arc-popover] {
    transition-timing-function: ease-out;
    transition-duration: var(--arc-popover-transition-duration, 240ms);
    transition-property: display allow-discrete, opacity;

    @supports (overlay: auto) {
      transition-behavior: allow-discrete;
      transition-property: display, overlay, opacity;
    }

    opacity: 0;
    &:popover-open { opacity: 1; }

    &::backdrop { transition: inherit; opacity: 0; }
    &:popover-open::backdrop { opacity: 1; }
  }

  @starting-style {
    [arc-popover]:popover-open { opacity: 0; }
    [arc-popover]:popover-open::backdrop { opacity: 0; }
  }
}

`,ki=(0,m.forwardRef)(({children:r,popover:a=Or.popover,anchorAt:e=Or.anchorAt,anchorName:o,anchorProps:t,alternateAnchorId:i,alternateAnchor:n,boundary:h=Or.boundary,tryFallbacks:d=Or.tryFallbacks,density:u=Or.density,variant:v=Or.variant,scheme:p=Or.scheme,isInverse:g,hasTail:f,tailSize:x=Or.tailSize,offset:z=Or.offset,hidePopoverButton:T,headerSlot:j,showHeaderDivider:_,showDismiss:E,dismissProps:C,footerSlot:S,showFooterDivider:N,tag:B="div",contentTag:Y="div",onToggle:G,...H},dr)=>{const K=(0,m.useRef)(null),cr=(0,m.useRef)(null),ar=(0,m.useRef)(null),Fr=(0,m.useRef)(G);(0,m.useImperativeHandle)(dr,()=>cr.current);const[hr,Zr]=(0,m.useState)(!1),rr=(0,m.useMemo)(()=>p==="auto"?void 0:g?"inverse":p,[g,p]),_r=(0,m.useCallback)(()=>{if(typeof document>"u")return K.current??null;const er=ia(K.current)??document;return i?er.getElementById(i):typeof n=="string"?er.getElementById(n):n instanceof HTMLElement?n:typeof n=="function"?n():n&&typeof n=="object"&&"current"in n?n.current:K.current??null},[n,i]),oa=d||h==="flip",wr=!!f&&!Kn.includes(e),Yr=Zn({canHaveTail:wr,tailSize:x}),Ua=(0,m.useMemo)(()=>{const er=o||i||(typeof n=="string"?n:void 0)||t?.id||H.id||void 0;return pc(String(er))},[o,t?.id,H.id,n,i]),ta=(0,m.useMemo)(()=>({popoverTarget:H.id,"aria-haspopup":!0,"aria-controls":H.id,"aria-expanded":hr}),[H.id,hr]),W=(0,m.useMemo)(()=>({isOpen:hr,"aria-label":"Dismiss",...ta,...C}),[C,hr,ta]),vr=(0,m.useMemo)(()=>({ref:K,...ta,...t,tooltip:hr?void 0:t?.tooltip,anchorName:Ua||void 0}),[t,ta,Ua,hr]),Vr=(0,m.useMemo)(()=>({"--js\u2022anchor":vr?.anchorName||"","--js\u2022offset":Number(z)===0?"":`${z}px`,"--js\u2022tail":Yr.cssTailVar}),[vr?.anchorName,z,Yr.cssTailVar]);return Mo(()=>{const er=_r();if(ar.current=er,!!er)return qn(er,vr.anchorName)},[_r,vr.anchorName,hr]),(0,m.useEffect)(()=>{Fr.current=G},[G]),(0,m.useEffect)(()=>{const er=cr.current;if(!er)return;const Ra=ga=>{const{newState:yo}=ga,Pa=yo==="open";Zr(Pa),Pa&&(ar.current=_r()),Fr.current?.(ga)};return er.addEventListener("toggle",Ra),()=>er.removeEventListener("toggle",Ra)},[_r]),js({anchorEl:ar.current,popoverEl:cr.current,anchorAt:e,tryFallbacks:oa,offsetPx:Number(z)||0,tailSizePx:Yr.floatingTailPx,hasTail:wr,isOpen:hr}),Bs({anchorEl:ar.current,popoverEl:cr.current,anchorAt:e,tryFallbacks:oa,hasTail:wr,isOpen:hr}),(0,c.jsxs)(c.Fragment,{children:[!((i||n)&&T)&&(0,c.jsx)(qe,{...vr}),(0,c.jsxs)(B,{...H,ref:cr,"arc-popover":"","arc-scheme":rr,"anchor-at":e,"try-fallbacks":oa?"":void 0,popover:a,variant:v,density:u,"has-tail":wr?"":void 0,role:H.role??"dialog",style:{...H.style,...Vr},children:[(0,c.jsxs)(Y,{"arc-popover-content":"",children:[!!j&&(0,c.jsx)(_d,{showDivider:_,showDismiss:E,dismissProps:W,children:j}),j||S?(0,c.jsx)(Ed,{children:r}):r,!!S&&(0,c.jsx)(Td,{showDivider:N,children:S})]}),E&&!j&&(0,c.jsx)(yi,{...W})]})]})});ki.displayName="ArcPopover";const Sc=ki;Sc.handlePopover=Yn,Sc.Button=qe;const ro=Sc;V("ArcPopover",Od);const Dd=l`
@layer arc-components {

  [arc-avatar-overflow] {
    /* Inter-Component Communication • ArcPopover ------------------• */
    --arc-popover-font-size: var(--arc-font-size-body-md);
    --arc-popover-translate: -100% 0.5em;
    --arc-popover-width: max-content;
    --arc-popover-max-width: 18em;
    --arc-popover-padding: 0;

    /* For Neutral/Anonymous avatars -------------------------------• */
    [data-element=list] {
      margin: 0;
      padding: var(${s}•4) var(${s}•0);
    }

    [data-element=list-item] {
      display: flex;
      align-items: center;
      gap: var(${s}•6);
      padding: var(${s}•4) var(${s}•8);
    }

    ${Xt}
    ${Mn}
  }

}
`,Nd=r=>(0,c.jsx)("ul",{...r,"data-element":"list"}),Fd=r=>(0,c.jsx)("li",{...r,"data-element":"list-item"}),Vd=({count:r,anchorId:a,overflowId:e,shouldShowOverflow:o,...t})=>(0,c.jsx)(ic,{title:`+${r}`,children:(0,c.jsx)(ro.Button,{...t,id:a,popoverTarget:e,text:`+${r}`,variant:"common",hierarchy:"primary",disabled:!o,"data-element":"counter","data-color":"black","data-num-length":r?.toString().length})}),Hd=({children:r,id:a,size:e="sm",overflowCount:o=0,shouldShowOverflow:t=!1,anchorAt:i="bottom-end",tryFallbacks:n=!0,...h})=>{const d=Math.min(o,999),u=Wr(a,"arc-avatar-overflow"),v=(0,m.useMemo)(()=>`${u}-anchor`,[u]),p=(0,m.useMemo)(()=>m.Children.toArray(r),[r]);return(0,c.jsxs)(c.Fragment,{children:[d>0&&(0,c.jsx)(Vd,{count:d,anchorId:v,overflowId:u,shouldShowOverflow:t}),t&&d>0&&(0,c.jsx)(ro,{...h,scheme:"inverse","arc-avatar-overflow":"",id:u,anchorAt:i,tryFallbacks:n,alternateAnchorId:v,hidePopoverButton:!0,variant:"common","data-size":e,children:(0,c.jsx)(Nd,{children:p.map((g,f)=>(0,c.jsx)(Fd,{children:g},f))})})]})};V("ArcAvatarOverflow",Dd);const wi=({fg:r,bg:a})=>l`
  &:has(>[data-color=mono-inverse]) {
    ${r}•high: var(--arc-color-fg-on-mono-inverse);
    ${a}•high: var(--arc-color-bg-mono-inverse);
    ${r}•low: var(--arc-color-fg-on-subtle);
    ${a}•low: var(--arc-color-bg-neutral-subtle);
  }

  &:has(>[data-color=brand]) {
    ${r}•high: var(--arc-color-fg-on-stark);
    ${a}•high: var(--arc-color-bg-brand-stark);
    ${r}•low: var(--arc-color-fg-brand-stark);
    ${a}•low: var(--arc-color-bg-brand-subtle);
  }

  &:has(>[data-color=mono]) {
    ${r}•high: var(--arc-color-fg-on-mono);
    ${a}•high: var(--arc-color-bg-mono);
    ${r}•low: var(--arc-color-fg-on-mono);
    ${a}•low: var(--arc-color-bg-mono);
  }

  &:has(>[data-color=blue]) {
    ${r}•high: var(--arc-color-fg-on-stark);
    ${a}•high: var(--arc-color-bg-blue-stark);
    ${r}•low: var(--arc-color-fg-blue-stark);
    ${a}•low: var(--arc-color-bg-blue-subtle);
  }

  &:has(>[data-color=neutral]) {
    ${r}•high: var(--arc-color-fg-on-heavy);
    ${a}•high: var(--arc-color-bg-neutral-heavy);
    ${r}•low: var(--arc-color-fg-neutral-stark);
    ${a}•low: var(--arc-color-bg-neutral-subtle);
  }

  &:has(>[data-color=purple]) {
    ${r}•high: var(--arc-color-fg-on-stark);
    ${a}•high: var(--arc-color-bg-purple-stark);
    ${r}•low: var(--arc-color-fg-purple-stark);
    ${a}•low: var(--arc-color-bg-purple-subtle);
  }

  &:has(>[data-color=green]) {
    ${r}•high: var(--arc-color-fg-on-stark);
    ${a}•high: var(--arc-color-bg-green-stark);
    ${r}•low: var(--arc-color-fg-green-stark);
    ${a}•low: var(--arc-color-bg-green-subtle);
  }

  &:has(>[data-color=yellow]) {
    ${r}•high: var(--arc-color-fg-on-stark);
    ${a}•high: var(--arc-color-bg-yellow-stark);
    ${r}•low: var(--arc-color-fg-yellow-stark);
    ${a}•low: var(--arc-color-bg-yellow-subtle);
  }

  &:has(>[data-color=red]) {
    ${r}•high: var(--arc-color-fg-on-stark);
    ${a}•high: var(--arc-color-bg-red-stark);
    ${r}•low: var(--arc-color-fg-red-stark);
    ${a}•low: var(--arc-color-bg-red-subtle);
  }

  &:has(>[data-color=maroon]) {
    ${r}•high: var(--arc-color-fg-on-stark);
    ${a}•high: var(--arc-color-bg-maroon-stark);
    ${r}•low: var(--arc-color-fg-maroon-stark);
    ${a}•low: var(--arc-color-bg-maroon-subtle);
  }

  &:has(>[data-color=mint]) {
    ${r}•high: var(--arc-color-fg-on-stark);
    ${a}•high: var(--arc-color-bg-mint-stark);
    ${r}•low: var(--arc-color-fg-mint-stark);
    ${a}•low: var(--arc-color-bg-mint-subtle);
  }

  &:has(>[data-color=orange]) {
    ${r}•high: var(--arc-color-fg-on-stark);
    ${a}•high: var(--arc-color-bg-orange-stark);
    ${r}•low: var(--arc-color-fg-orange-stark);
    ${a}•low: var(--arc-color-bg-orange-subtle);
  }

  &:has(>[data-color=ai]) {
    ${r}•high: var(--arc-color-fg-on-heavy);
    ${a}•high: var(--arc-gradient-ai-300);
    ${r}•low: var(--arc-color-fg-on-subtle);
    ${a}•low: var(--arc-gradient-ai-100);
  }

  &:has(>[data-color=overlay-light]) {
    ${r}•high: var(--arc-color-mono-black);
    ${a}•high: var(--arc-color-alpha-white-80);
    ${r}•low: var(--arc-color-alpha-heavy);
    ${a}•low: var(--arc-color-alpha-white-20);
  }

  &:has(>[data-color=overlay-dark]) {
    ${r}•high: var(--arc-color-mono-white);
    ${a}•high: var(--arc-color-alpha-black-70);
    ${r}•low: var(--arc-color-mono-white);
    ${a}•low: var(--arc-color-alpha-black-40);
  }
`,Ai=({fg:r,bg:a})=>l`
  &:has(>[data-contrast=high]) {
    ${r}: var(${r}•high);
    ${a}: var(${a}•high);
  }

  &:has(>[data-contrast=low]) {
    ${r}: var(${r}•low);
    ${a}: var(${a}•low);
  }
`,I=l`--arc•badge`,_c=l`${I}•fg`,Ec=l`${I}•bg`,Ud=wi({fg:_c,bg:Ec}),Wd=Ai({fg:_c,bg:Ec}),Gd=l`
  &:has(>[data-size=lg]) {
    ${I}•font•size: var(${s}•14);
    ${I}•font•size•caps: var(${s}•12);
    ${I}•size: var(${s}•24);
    ${I}•min•size: var(${s}•30);
    ${I}•padding•inline: var(${s}•8);
    ${I}•border•radius: var(${s}•4);
    ${I}•gap: var(${s}•4);
  }

  &:has(>[data-size=md]) {
    ${I}•font•size: var(${s}•12);
    ${I}•font•size•caps: var(${s}•10);
    ${I}•size: var(${s}•20);
    ${I}•min•size: var(${s}•24);
    ${I}•padding•inline: var(${s}•6);
    ${I}•border•radius: var(${s}•4);
    ${I}•gap: var(${s}•4);
  }

  &:has(>[data-size=sm]) {
    ${I}•font•size: var(${s}•10);
    ${I}•font•size•caps: var(${s}•8);
    ${I}•size: var(${s}•16);
    ${I}•min•size: var(${s}•18);
    ${I}•padding•inline: var(${s}•4);
    ${I}•border•radius: var(${s}•4);
    ${I}•gap: var(${s}•4);
  }

  /** @default • relative equivalent of 'md' at 100% • (16 x 75% = 12) */
  &:has(>[data-size=inherit]) {
    ${I}•font•size: 1em;
    ${I}•font•size•text: 0.75em;
    ${I}•font•size•caps: 0.625em;
    ${I}•size: 1.25em;
    ${I}•min•size: 1.5em;
    ${I}•padding•inline: 0.375em;
    ${I}•border•radius: 0.25em;
    ${I}•gap: 0.25em;
  }
`,Kd=l`
  &:has(>[data-layout=fill]) {
    ${I}•flex: auto; /* same as 1 (1 1 auto) but with clearer intent */
    ${I}•display: flex;
    ${I}•min•width: var(${I}•min•size);

    /* Inter-Component Communication • ArcIconText -------------------• */
    --arc-icon-text-overflow: hidden;
    --arc-icon-text-white-space: nowrap;
    --arc-icon-text-text-overflow: ellipsis;
  }

  &:has(>[data-layout=hug]) {
    ${I}•flex: none; /* same as 0 0 auto but with clearer intent */
    ${I}•display: inline-flex;
    ${I}•min•width: min-content;
  }
`,Zd=l`
@layer arc-components {

  [arc-badge-wrapper] {
    ${Ud}
    ${Wd}
    ${Gd}
    ${Kd}

    /* Inter-Component Communication • ArcIconText -------------------• */
    --arc-icon-text-align-items: center;
    --arc-icon-text-gap: var(${I}•gap);
  }

  /* CORE ------------------------------------------------------------• */

  [arc-badge-wrapper]:not([hidden]) {
    flex: var(--arc-badge-flex, var(${I}•flex, unset));
    align-self: var(--arc-badge-align-self, flex-start);
    display: var(${I}•display, inline-flex);
    align-items: center;
    justify-content: center;
    height: 1lh;
    max-height: 1lh;
    vertical-align: bottom;

    &:has(>[data-is-flexible]) {
      min-width: var(--arc-badge-min-width, var(${I}•min•width));
    }
  }

  [arc-badge] {
    font-size: var(--arc-badge-font-size, var(${I}•font•size));
    font-weight: var(--arc-font-weight-600);

    flex: var(${I}•flex);
    display: var(${I}•display, inline-flex);
    align-items: center;
    justify-content: center;
    height: var(${I}•size);
    padding-inline: var(${I}•padding•inline);

    overflow: hidden;
    white-space: nowrap;
    line-height: 2;

    color: var(--arc-badge-color, var(${_c}));
    background: var(--arc-badge-background, var(${Ec}));
    border-radius: var(${I}•border•radius);
    mix-blend-mode: var(--arc-badge-mix-blend-mode, unset);

    :is([data-element=icon], [data-element=text]) {
      font-size: var(${I}•font•size•text, 1em);
    }

    &[data-is-uppercase] [data-element=text] {
      text-transform: uppercase;
      font-size: var(${I}•font•size•caps);
    }
  }

}
`,zi=["brand","blue","neutral","purple","green","yellow","red","orange","mint","maroon","mono","mono-inverse","ai","overlay-light","overlay-dark"],Yd=["brand",...zi.filter(r=>r!=="brand")],qd=["neutral",...zi.filter(r=>r!=="neutral")],Jd=Tr(Ga,Yd),Xd=Tr(Ga,qd),Qd=Tr(Er,["inherit","lg","md","sm"]),rh=Tr(ca,["hug","fill"]),ah=["high","low"],eh=Tr(ur,["brand-blue","brand-black","neutral","info","success","warning","critical","ai","overlay-light","overlay-dark"]),oh={"brand-blue":"brand","brand-black":"mono-inverse",neutral:"neutral",info:"purple",success:"green",warning:"yellow",critical:"red",ai:"ai","overlay-light":"overlay-light","overlay-dark":"overlay-dark"},th=({children:r,icon:a,text:e,isFlipped:o,isFlexible:t,isUppercase:i,color:n,variant:h,size:d="inherit",layout:u="hug",contrast:v="high",...p})=>{const g=n??oh[h??"brand-blue"],f=r||(0,c.jsx)(qr,{icon:a,text:e,isFlipped:o,layout:"gutter"}),x=u==="fill"&&t;return(0,c.jsx)("span",{...p,"arc-badge-wrapper":"",children:(0,c.jsx)("span",{"arc-badge":"","data-contrast":v,"data-color":g,"data-layout":u,"data-size":d,"data-is-flexible":x?"":void 0,"data-is-uppercase":i?"":void 0,children:f})})};V("ArcBadge",Zd);const nr=l`--arc•badge•count`,Tc=l`${nr}•fg`,Ic=l`${nr}•bg`,ch=wi({fg:Tc,bg:Ic}),nh=Ai({fg:Tc,bg:Ic}),ih=l`
  &:has(>[data-size=lg]) {
    ${nr}•font•size: var(${s}•14);
    ${nr}•size: var(${s}•24);
    ${nr}•padding•inline: var(${s}•4);
  }

  &:has(>[data-size=md]) {
    ${nr}•font•size: var(${s}•12);
    ${nr}•size: var(${s}•20);
    ${nr}•padding•inline: var(${s}•4);
  }

  &:has(>[data-size=sm]) {
    ${nr}•font•size: var(${s}•10);
    ${nr}•size: var(${s}•16);
    ${nr}•padding•inline: var(${s}•4);
  }

  &:has(>[data-size=inherit]) { /** @default • scalable based on 'md' size */
    ${nr}•font•size: 1em;
    ${nr}•font•size•text: 0.75em;
    ${nr}•size: 1.25em;
    ${nr}•padding•inline: 0.25em;
  }
`,lh=l`
  &:has(>[data-shape=square]) {
    ${nr}•border•radius: var(${s}•4);
  }

  &:has(>[data-shape=circle]) {
    ${nr}•border•radius: var(--arc-border-radius-pill);
  }
`,sh=l`
@layer arc-components {

[arc-badge-count-wrapper] {
  ${ch}
  ${nh}
  ${ih}
  ${lh}
}

/* CORE ------------------------------------------------------------• */

[arc-badge-count-wrapper]:not([hidden]) {
  flex: none;
  align-self: var(--arc-badge-count-align-self, flex-start);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 1lh;
  max-height: 1lh;
  vertical-align: bottom;
}

[arc-badge-count] {
  font-size: var(--arc-badge-count-font-size, var(${nr}•font•size));
  font-weight: var(--arc-font-weight-600);

  flex: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: var(${nr}•size);
  min-width: var(${nr}•size);
  padding-inline: var(${nr}•padding•inline);

  white-space: nowrap;
  line-height: normal;

  color: var(--arc-badge-count-color, var(${Tc}));
  background: var(--arc-badge-count-background, var(${Ic}));
  border-radius: var(${nr}•border•radius);
  mix-blend-mode: var(--arc-badge-count-mix-blend-mode, unset);

  [data-element=text] {
    font-size: var(${nr}•font•size•text, 1em);
  }
}

`,dh=Tr(Er,["inherit","lg","md","sm"]),hh=Tr(ur,["neutral","brand","critical","warning","success","inverse"]),uh=["low","high"],vh=Tr(Ie,["square","circle"]),gh={neutral:"neutral",brand:"brand",critical:"red",warning:"yellow",success:"green",inverse:"mono"},ph=({children:r,text:a,color:e,variant:o,contrast:t,size:i="inherit",shape:n="square",...h})=>{const d=r||(0,c.jsx)("span",{"data-element":"text",children:a}),u=e??gh[o??"neutral"],v=o==="critical"?"high":t??"low";return(0,c.jsx)("span",{...h,"arc-badge-count-wrapper":"",children:(0,c.jsx)("span",{"arc-badge-count":"","data-color":u,"data-contrast":v,"data-shape":n,"data-size":i,children:d})})};V("ArcBadgeCount",sh);const Ea=l`--arc•label`,ao=l`${Ea}•cursor`,eo=l`${Ea}•opacity`,fh=l`
@layer arc-components {

  [arc-label] {
    /* Inter-Component Communication -------------------------------• */
    /* also applies to nested ArcLabelContent */
    ${eo}: var(--arc-label-opacity, unset);
    ${eo}•disabled: var(--arc-label-opacity-disabled, var(--arc-alpha-40));

    /* Internal STYLES ---------------------------------------------• */
    ${Ea}•display: var(--arc-label-display, inline-flex);
    ${Ea}•gap: var(--arc-label-gap, var(${s}•8));
    ${Ea}•align•items: var(--arc-label-align-items, baseline);

    ${ao}: var(--arc-label-cursor, pointer);
    ${ao}•disabled: var(--arc-label-cursor-disabled, not-allowed);

    &:has(:disabled) {
      ${ao}: var(${ao}•disabled);
      ${eo}: var(${eo}•disabled);
    }

    &[data-layout=fill] {
      ${Ea}•display: flex;
    }
  }

  /* CORE STYLES ---------------------------------------------------• */
  [arc-label]:not([hidden]) {
    display: var(${Ea}•display);
    align-items: var(${Ea}•align•items);
    gap: var(${Ea}•gap);
    cursor: var(${ao});
  }

}
`,mh=R(ca,["hug","fill"]),ce=({layout:r,...a})=>(0,c.jsx)("label",{...a,"arc-label":"","data-layout":r});V("ArcLabel",fh);const bh=l`
@layer arc-components {

  [arc-label-content] {
    opacity: var(--arc-label-opacity, var(${eo}, unset));
    transition: var(--arc-label-transition, opacity 100ms ease-out);
    user-select: var(--arc-label-user-select, none);
    -webkit-user-select: var(--arc-label-user-select, none);
  }

}
`,ne=r=>(0,c.jsx)("span",{...r,"arc-label-content":""});V("LabelContent",bh);const $h={checkbox:"checkbox",radio:"radio",switch:"radio"},oo=({id:r,indeterminate:a,type:e,onChange:o,...t})=>{const i=e==="checkbox"&&!!a,n=(0,m.useRef)(null),h=Wr(r,`arc-${e}`),d=u=>v=>{if(!(v?.target instanceof HTMLInputElement))return;const p={checked:v?.target.checked,indeterminate:v?.target?.indeterminate,name:v?.target?.name,value:t?.value};u?.(p,v)};return(0,m.useEffect)(()=>{n.current?.type==="checkbox"&&(n.current.indeterminate=!!a)},[a]),(0,c.jsx)("input",{...t,id:h,ref:n,type:$h[e],"arc-input-type":e,"aria-disabled":t?.disabled||void 0,"data-is-disabled":t?.disabled||void 0,"data-is-checked":t?.checked||void 0,"data-is-indeterminate":i||void 0,onChange:d(o)})},yh=l`
@layer arc-components {

  [arc-input-mask] {
    ${k}•border•width: var(--arc-border-width-sm);
    ${k}•border: var(${k}•border•width) solid var(${k}•border•color);

    /* Inter-Component Communication ---------------------------------• */

    /* for: ArcIcon */
    --arc-icon-size: var(${k}•icon•size); /* ArcIcon */

    /* STATES --------------------------------------------------------• */

    &:has(:disabled) {
      ${k}•cursor: not-allowed;
    }

    &:has(:focus:focus-visible) {
      ${k}•outline: var(${k}•border•width) solid var(--arc-color-border-focus);
    }
  }

  /* CORE STYLES -----------------------------------------------------• */

  [arc-input-mask-wrapper] {
    align-self: normal;
    display: flex;
    align-items: center;
    justify-content: center;
    max-height: 1lh;
  }

  [arc-input-mask] {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(${k}•width);
    height: var(${k}•height);
    opacity: var(${k}•opacity, var(--arc-alpha-100));

    color: var(${k}•color, transparent);
    background: var(${k}•background);
    border: var(${k}•border);
    border-radius: var(${k}•border•radius);
    translate: var(${k}•translate, unset);

    outline: var(${k}•outline, none);
    outline-offset: var(${k}•border•width);

    transition-duration: 100ms;
    transition-behavior: allow-discrete;
    transition-timing-function: ease-in-out;
    transition-property:
      opacity,
      background,
      color,
      border-color,
      outline;

    [arc-input-type] {
      flex: none;
      outline: none;
      appearance: none;
      position: absolute;
      inset: calc(var(${k}•border•width) * -1);
      cursor: var(${k}•cursor, pointer);
      margin: 0;
      padding: 0;
      border: 0;
      z-index: var(${k}•z•index, unset);
    }
  }

}
`,st=({type:r,...a})=>(0,c.jsx)("span",{"arc-input-mask-wrapper":"",children:(0,c.jsx)("span",{...a,"arc-input-mask":r})});V("ArcBooleanInputMask",yh);const br=l`--arc•checkbox`,xh=l`
@layer arc-components {

  [arc-checkbox] {
    /* SIZES -------------------------------------------------------• */
    &[data-size=inherit] {
      ${br}•font•size: 1em;
      ${br}•icon•size: 0.625em;
      ${br}•size: 1.125em;
      ${br}•gap: 0.5em;
    }

    &[data-size=md] {
      ${br}•font•size: var(${s}•14);
      ${br}•icon•size: var(${s}•10);
      ${br}•size: var(${s}•18);
      ${br}•gap: var(${s}•8);
    }

    &[data-size=sm] {
      ${br}•font•size: var(${s}•12);
      ${br}•icon•size: var(${s}•10);
      ${br}•size: var(${s}•16);
      ${br}•gap: var(${s}•6);
    }

    /* Inter-Component Communication -------------------------------• */
    /* for: ArcBooleanInputMask */
    ${k}•border•radius: var(${s}•4);
    ${k}•size: var(${br}•size);
    ${k}•icon•size: var(${br}•icon•size);
    ${k}•width: var(${br}•size);
    ${k}•height: var(${br}•size);
    ${k}•translate: 0 var(${s}•1m);•

    /* for: ArcLabel */
    --arc-label-gap: var(${br}•gap);
    --arc-label-align-items: stretch; /* ArcLabel • this allows the mask
                                        to stay inline with the label text
                                        regardless of applied line-height */
  }

  /* CORE STYLES ---------------------------------------------------• */
  [arc-checkbox]:not([hidden]) {
    font-size: var(${br}•font•size);
    display: var(--arc-checkbox-display, inline-flex);
    min-height: 1lh;

    /* UNCHECKED, NOT-DISABLED, +HOVER • default state */
    &:not(:has(:checked, :indeterminate)) {
      ${k}•color: transparent;
      ${k}•border•color: var(--arc-color-border-stark);
      ${k}•background: transparent;

      &:hover {
        ${k}•border•color: var(--arc-color-border-theme-heavy);
        ${k}•background: var(--arc-color-bg-theme-subtle);
      }

      &:has(:disabled) {
        ${k}•border•color: var(--arc-color-border-disabled);
        ${k}•background: var(--arc-color-bg-disabled);
      }
    }

    /* DISABLED */
    &:has(:disabled) {
      color: var(--arc-color-fg-disabled);
    }

    /* PRIMARY, +DISABLED */
    &[data-variant=primary] {
      &:has(:checked, :indeterminate) {
        ${k}•color: var(--arc-color-fg-on-theme-heavy);
        ${k}•border•color: transparent;
        ${k}•background: var(--arc-color-bg-theme-heavy);

        &:not(:has(:disabled)):hover {
          ${k}•color: var(--arc-color-fg-on-theme-stark);
          ${k}•background: var(--arc-color-bg-theme-stark);
        }

        &:has(:disabled) {
          ${k}•color: var(--arc-color-fg-on-theme-mid);
          ${k}•background: var(--arc-color-bg-theme-mid);
        }
      }
    }

    /* SECONDARY, +DISABLED */
    &[data-variant=secondary] {
      &:has(:checked, :indeterminate) {
        ${k}•color: var(--arc-color-fg-theme-heavy);
        ${k}•border•color: var(--arc-color-border-theme-heavy);
        ${k}•background: transparent;

        &:not(:has(:disabled)):hover {
          ${k}•color: var(--arc-color-fg-theme-stark);
          ${k}•border•color: var(--arc-color-border-theme-stark);
        }

        &:has(:disabled) {
          ${k}•color: var(--arc-color-fg-theme-subtle);
          ${k}•border•color: var(--arc-color-border-theme-mid);
        }
      }
    }
  }

}
`,kh=R(ca,["hug","fill"]),wh=R(Er,["inherit","md","sm"]),Ah=R(ur,["primary","secondary"]),Ci=({children:r,label:a,layout:e,size:o="md",variant:t="primary",useMask:i=!0,...n})=>{const{className:h,title:d,...u}=n,v={className:h,title:d},p=r??a,g=(0,c.jsx)(oo,{...u,type:"checkbox"}),f=i&&(0,c.jsxs)(st,{type:"checkbox",children:[g,(0,c.jsx)(O,{icon:u?.indeterminate?"fa-solid fa-minus arc-fw":"fa-solid fa-check arc-fw"})]}),x=!!p&&(0,c.jsxs)(ce,{layout:e,children:[f||g,(0,c.jsx)(ne,{children:p})]});return(0,c.jsx)("span",{...v,"arc-checkbox":"","data-size":o,"data-variant":t,children:x||f||g})};V("ArcCheckbox",xh);const Xr=l`--arc•cb`,ir=l`${Xr}•o`,Qr=l`${ir}•border`,jc=l`${ir}•icon`,Lc=l`${ir}•text`,zh=l`
@layer arc-components {

  [arc-checkbox-bar] {
    ${Xr}•font•size: var(${s}•14);
    ${Xr}•border•radius: var(${s}•6);
    ${Xr}•background: var(--arc-color-alpha-black-0);
    ${Xr}•padding: 0px;
    ${Xr}•gap: var(${s}•2);

    ${ir}•color: var(--arc-color-fg-secondary);
    ${ir}•background: var(--arc-color-alpha-white-0);

    ${Qr}•color: var(--arc-color-alpha-black-0);
    ${Qr}•width: var(${s}•1);
    ${Qr}•radius: var(${s}•6); /* bar-radius minus bar-padding */

    /* SIZES -------------------------------------------------------- */
    &[data-size=lg] { /* @default */
      ${ir}•size: var(${s}•40);
      ${ir}•line•height: var(${s}•38); /* • -2px to account for border-width (top/bottom) */
      ${jc}•padding: var(${s}•8);
      ${Lc}•padding: var(${s}•12);
    }

    &[data-size=md] {
      ${ir}•size: var(${s}•32);
      ${ir}•line•height: var(${s}•30); /* • -2px to account for border-width (top/bottom) */
      ${jc}•padding: var(${s}•6);
      ${Lc}•padding: var(${s}•8);
    }

    /* Inter-Component Communication -------------------------------• */
    --arc-label-align-items: stretch; /* control ArcLabel's vertical footprint;
                                        allows long label text to wrap
                                        without compromising option's
                                        visual border */

    /* LAYOUTS ------------------------------------------------------ */
    &[data-layout=hug] { /* @default */
      ${Xr}•display: inline-flex;
    }

    &[data-layout=fill] {
      ${Xr}•display: flex;
    }
  }

  /* STATES --------------------------------------------------------- */
  [arc-checkbox-bar-option] {
    &:not(:has(:disabled, :checked)) {
      &:hover {
        ${ir}•color: var(--arc-color-fg-on-hover-default);
        ${ir}•background: var(--arc-color-bg-hover-default);
        ${Qr}•color: var(--arc-color-alpha-black-0);
      }
    }

    &:has(:checked) {
      ${ir}•color: var(--arc-color-fg-primary);
      ${ir}•background: var(--arc-color-bg-secondary);
      ${Qr}•color: var(--arc-color-alpha-black-0);
      ${ir}•font•weight: var(--arc-font-weight-500);
    }

    &:has(:disabled) {
      ${ir}•color: var(--arc-color-fg-disabled);
    }

    &:has(:focus-within:focus-visible) {
      ${ir}•outline: var(${Qr}•width) solid var(--arc-color-border-focus);
    }
  }

  /* CORE STYLES ---------------------------------------------------- */
  [arc-checkbox-bar-option] {
    flex: 1 1 auto;
    display: flex;
    position: relative;
  }

  [arc-checkbox-bar]:not([hidden]) {
    font-size: var(--arc-checkbox-bar-font-size, var(${Xr}•font•size));
    display: var(${Xr}•display);
    gap: var(${Xr}•gap);
    background: var(${Xr}•background);
    border-radius: var(${Qr}•radius);
    padding: 0;
    margin: 0;

    [arc-checkbox] {
      flex: 1;
      display: flex;
      justify-content: center;
      border-radius: var(${Qr}•radius);
      outline: var(${ir}•outline, none);
      outline-offset: var(${Qr}•width);
    }

    /* INPUT ELEMENT -----------------------------------------------• */
    [arc-input-type=checkbox] {
      position: absolute;
      appearance: none;
      pointer-events: none;
      opacity: 0;
    }

    /* Inter-Component Communication -------------------------------• */
    [arc-label] {
      flex: 1;
      line-height: var(${ir}•line•height);
      overflow: hidden;
    }

    [arc-label-content] {
      flex: 1;
      display: flex;
      align-items: safe center;
      justify-content: center;

      height: var(${ir}•size);
      min-width: var(${ir}•size);

      border-radius: var(${Qr}•radius);
      border: var(${Qr}•width) solid var(${Qr}•color);
      background: var(${ir}•background);
      color: var(${ir}•color);
      font-weight: var(${ir}•font•weight, unset);

      transition-duration: 200ms;
      transition-timing-function: ease-out;
      transition-property:
        border,
        background,
        color,
        font-weight;

      &:has([data-element=text]) {
        padding: 0 var(${Lc}•padding);
      }

      &:not(:has([data-element=text])) {
        padding: 0 var(${jc}•padding);
      }
    }

    [arc-icon-text] [data-element] {
      min-width: min-content;
      overflow: hidden;
      overflow-wrap: break-word;
    }
  }

}
`,Ch=R(ca,["hug","fill"]),Sh=R(Er,["lg","md"]),_h=({children:r,label:a,icon:e,...o})=>{const t=r||(0,c.jsx)(qr,{icon:e,text:a});return(0,c.jsx)("li",{"arc-checkbox-bar-option":"","data-is-checked":o?.checked||void 0,children:(0,c.jsx)(Ci,{...o,label:t,layout:"fill",useMask:!1})})},Eh=({children:r,size:a="lg",layout:e="hug",...o})=>(0,c.jsx)("ul",{...o,"arc-checkbox-bar":"","data-size":a,"data-layout":e,role:"group",children:r});V("ArcCheckboxBar",zh);const Th=l`--arc•menu`,Na=l`${Th}•item`,Ih=l`
@layer arc-components {

  [arc-menu] {
    ${Na}•gap: var(${s}•8);
    ${Na}•fg: inherit;
    ${Na}•bg: inherit;

    font-size: var(--arc-menu-font-size, var(${s}•14));
    list-style: none;
    line-height: normal;

    display: var(--arc-menu-display, flex);
    flex-direction: var(--arc-menu-flex-direction, column);
    gap: var(--arc-menu-gap, var(${s}•2));
    padding: var(--arc-menu-padding, var(${s}•2));
    margin: var(--arc-menu-margin, 0);

    outline: var(--arc-menu-outline, none);
  }

  [arc-menu-item] {
    position: relative;
    display: var(--arc-menu-item-display, flex);
    flex-direction: var(--arc-menu-item-flex-direction, row);
    justify-content: var(--arc-menu-item-justify-content, space-between);
    align-items: var(--arc-menu-item-align-items, center);
    gap: var(--arc-menu-item-gap, var(${Na}•gap));

    background: var(--arc-menu-item-background, var(${Na}•bg));
    color: var(--arc-menu-item-color, var(${Na}•fg));
    padding: var(--arc-menu-item-padding, var(${s}•0));
    border-radius: var(--arc-menu-item-border-radius, var(--arc-border-radius-md));
    cursor: var(--arc-menu-item-cursor, default);
    outline: var(--arc-menu-item-outline, none);

    transition: var(--arc-menu-item-transition, 120ms ease-out);

    &:has(> [arc-button=custom]:not([is-disabled])):hover {
      ${Na}•bg: var(--arc-color-bg-hover-default);
    }

    /* Communicates to ArcButton */
    > [arc-button=custom] {
      --arc-button-flex: 1;
      --arc-button-font-size: 1em;
      --arc-button-border: none;
      --arc-button-outline-offset: var(${s}•2m);
      --arc-button-gap: var(--arc-menu-item-gap, var(${Na}•gap));
      --arc-button-transition: none;
      --arc-button-opacity: var(--arc-menu-item-opacity, unset);

      :is([arc-button-label], [arc-button-content]) {
        display: contents;
      }
    }
  }

`;var jh;const Lh=r=>[{test:()=>!!r.variant,value:r.variant},{test:()=>!!r.icon&&typeof r.subtext<"u",value:"icon-text-detail"},{test:()=>!!r.icon,value:"icon-text"},{test:()=>!!r.avatar&&typeof r.subtext<"u",value:"user-detail"},{test:()=>!!r.avatar,value:"user"},{test:()=>typeof r.subtext<"u",value:"text-detail"},{test:()=>!0,value:"text"}],Rh={divider:"separator","section-label":"presentation","icon-text-detail":"menuitem","icon-text":"menuitem","user-detail":"menuitem",user:"menuitem","text-detail":"menuitem",text:"menuitem"},ie={layout:"gutter",variant:"inherit",overflow:"truncate",gapSize:"md",size:"md"},Ph=({icon:r,onClick:a,...e})=>({icon:r&&typeof r=="string"?`${r.replace(" fa-fw","")} arc-fw`:r,itemProps:e}),Si=(r,a)=>{const{icon:e,itemProps:o}=Ph(a);switch(r){case"divider":return(0,c.jsx)("hr",{});case"section-label":return(0,c.jsx)(qr,{...o,...ie,icon:e,size:"sm",isStrong:!0});case"icon-text":return(0,c.jsx)(qr,{...o,...ie,icon:e});case"icon-text-detail":return(0,c.jsx)(qr,{...o,...ie,icon:e,isStrong:!0});case"text":return(0,c.jsx)(qr,{...o,...ie});case"text-detail":return(0,c.jsx)(qr,{...o,...ie,subtext:o.subtext??"sub",isStrong:!0});case"user":return(0,c.jsx)(lc,{...o,...ie,size:"sm"});case"user-detail":return(0,c.jsx)(lc,{...o,...ie,size:"md",isStrong:!0});default:return r}},gv=r=>Object.fromEntries(jh.map(a=>[a,Si(a,r)])),Mh=(r,a,e,o)=>{if(o||e==="divider"||!!!(a.href||a.onClick))return;r.currentTarget.closest("[arc-popover]")?.hidePopover?.()},Bh=r=>r?.role??Rh[to(r)]??"menuitem",to=r=>Lh(r)?.find(({test:a})=>a())?.value??"text",_i=r=>a=>Si(r,a),Oh=(r,a,e,o)=>{let t=1,i=r;const n=d=>d>=e?0:d+1,h=d=>d<=0?e:d-1;for(;t<=e;){const d=n(i),u=h(i),v={previous:a==="previous"?u:i,actual:i,next:a==="next"?d:i}[a];if(o(v))return v;i=v,t+=1}return-1},Dh=({items:r,filterText:a,renderItem:e,isVisible:o,keepMenuOpen:t,...i})=>{const n=(0,m.useRef)(null),h=(0,m.useRef)([]),[d,u]=(0,m.useState)(-1),[v,p]=(0,m.useState)(!1);(0,m.useEffect)(()=>{o&&n.current&&(h.current=Array.from(n.current.querySelectorAll("[arc-button=custom]")))},[o,r]);const g=(0,m.useCallback)(C=>h.current[C]||null,[]),f=(0,m.useMemo)(()=>a?r.filter(C=>Object.values(C).some(S=>S===a)):r,[r,a]),x=Math.max(f.length-1,0),z=(0,m.useCallback)((C,S)=>{const N=Oh(C,S,x,g);u(N),g(N)?.focus()},[x,g]),T=(0,m.useCallback)((C,S)=>()=>{!v&&S&&z(C,"actual")},[v,z]),j={ArrowUp:C=>z(C,"previous"),ArrowDown:C=>z(C,"next"),Home:()=>z(0,"actual"),End:()=>z(x,"actual")},_=C=>S=>{Object.keys(j).includes(S.key)&&(p(!0),S.stopPropagation(),S.preventDefault(),j[S.key](C))},E=(0,m.useMemo)(()=>f.map((C,S)=>{const{itemId:N,role:B,keepMenuOpen:Y,...G}=C,H=to(C)||"",dr=B||Bh(C)||"menuitem",K=S===d;return(0,c.jsx)("li",{"arc-menu-item":H,role:dr,onMouseEnter:T(S,!!(C.href||C.onClick)),onClick:cr=>Mh(cr,C,H,Y??t),children:e?.(G,S,{filterText:a,isCurrent:K,itemId:N,role:B,keepMenuOpen:Y??t})},N??S)}),[d,a,f,t,e,T]);return(0,m.useEffect)(()=>{o&&z(-1,"next")},[o,z]),(0,c.jsx)("ul",{...i,ref:n,"arc-menu":"",role:"menu",onKeyDown:_(d),onMouseLeave:()=>u(-1),onMouseMove:()=>p(!1),tabIndex:o?0:-1,children:E})};V("ArcMenu",Ih);const Ei=r=>{const{startSlot:a,endSlot:e,onClick:o,href:t,target:i,containerProps:n,isDisabled:h,"aria-disabled":d,tooltip:u,...v}=r,p=to(v),g=(0,m.useMemo)(()=>_i(p),[p]),f=d??h,x=p==="divider",z=!!(t||o),T=!x,j=T&&a?"":void 0,_=T&&e?"":void 0,E=(0,m.useMemo)(()=>({...n,onClick:o,tooltip:u,href:t,target:i}),[n,o,u,t,i]),C=(0,m.useMemo)(()=>({...n}),[n]);return z?(0,c.jsxs)(jr,{...E,"aria-disabled":f?"true":void 0,isDisabled:!!f,_isCustom:!0,"arc-dropdown-item":p??"","has-start-slot":j,"has-end-slot":_,children:[T&&a,(0,c.jsx)(g,{...v,"is-item-content":"interactive"}),T&&e]}):(0,c.jsxs)("div",{...C,"arc-dropdown-item":p??"","has-start-slot":j,"has-end-slot":_,children:[T&&a,(0,c.jsx)(g,{...v,"is-item-content":"inert"}),T&&e]})},Nh=l`--arc•dropdown`,Fh=l`${Nh}•menu`,Sr=l`${Fh}•item`,Vh=l`
@layer arc-components {

  /* ITEM SETUP ----------------------------------------------------• */

  [arc-dropdown-item] {
    ${Sr}•padding: var(${b}•8) var(${b}•12);
    ${Sr}•min•height: var(${s}•36);
    ${Sr}•gap: var(${b}•8);

    &[arc-dropdown-item=text-detail] {
      ${Sr}•min•height: var(${s}•48);
    }

    &[arc-dropdown-item=section-label] {
      ${Sr}•min•height: var(${s}•32);
    }

    &[arc-dropdown-item=user] {
      ${Sr}•min•height: var(${s}•40);

      &:not([has-start-slot]) {
        ${Sr}•padding: var(${b}•8) var(${b}•12) var(${b}•8) var(${b}•10);
      }
    }

    &[arc-dropdown-item=user-detail] {
      ${Sr}•min•height: var(${s}•48);

      &:not([has-start-slot]) {
        ${Sr}•padding: var(${b}•8) var(${b}•12) var(${b}•8) var(${b}•6);
      }
    }

    &[arc-dropdown-item=divider] {
      ${Sr}•min•height: var(${s}•8);
      ${Sr}•padding: 0;

      hr {
        flex: 1;
        border: var(--arc-border-width-sm) solid var(--arc-color-border-mid);
        height: 0;
        margin: 0;
      }
    }
  }

  /* DROPDOWN ELEMENTS ---------------------------------------------• */

  [arc-dropdown] {
    --arc-popover-width: var(--arc-dropdown-width, auto);
    --arc-popover-min-width: var(--arc-dropdown-min-width, 3em);
    --arc-popover-max-width: var(--arc-dropdown-max-width, 50em);
    --arc-popover-padding: var(--arc-dropdown-padding, 0);

    --arc-menu-item-gap: var(${Sr}•gap);
    --arc-badge-align-self: center;
    --arc-badge-count-align-self: center;
  }

  [arc-dropdown-item] {
    flex: 1;
    display: flex;
    align-items: center;
    gap: var(${Sr}•gap);
    text-align: start;
    min-height: var(${Sr}•min•height);

    &:not([arc-button]) {
      padding: var(${Sr}•padding);
      max-width: 100%;
    }

    &[arc-button] {
      --arc-button-padding: var(${Sr}•padding);
      --arc-button-min-height: var(${s}•40);
    }

    [is-item-content] {
      flex: 1;
    }
  }

}
`,Ti=(0,m.forwardRef)((r,a)=>(0,c.jsx)(qe,{...r,ref:a,"arc-dropdown-menu-button":""})),Rc=r=>{const{items:a,renderItem:e,keepMenuOpen:o,...t}=r,[i,n]=(0,m.useState)(!1),h=(0,m.useCallback)((...u)=>{const[v]=u;return e?.(...u)??(0,c.jsx)(Ei,{...v})},[e]),d=u=>{n(u.newState==="open"),r?.onToggle?.(u)};return(0,c.jsx)(ro,{...t,"arc-dropdown":"",variant:"common",onToggle:d,children:(0,c.jsx)(Dh,{"arc-dropdown-menu":"",items:a??[],renderItem:h,isVisible:i,keepMenuOpen:o})})};Ti.displayName="ArcDropdownButton",Rc.Button=Ti,Rc.Item=Ei,V("ArcDropdownMenu",Vh);const Ii=r=>(0,c.jsx)(jr,{...r,layout:"icon",size:"md",variant:"common",hierarchy:"tertiary"}),dt=l`--arc•link`,$a=l`${dt}•fg`,co=l`${$a}•hover`,no=l`${$a}•disabled`,Pc=l`${dt}•outline`,ji=l`${Pc}•size`,Mc=l`${Pc}•offset`,Hh=l`${dt}•cursor`,io=l`${dt}•focus•color`,Uh=l`
@layer arc-components {
${fd}

[arc-link] {

  /* VARIANTS ------------------------------------------------------• */

  &[data-variant=inherit] { /* @default */
    ${$a}: currentcolor;
    ${co}: color-mix(in srgb, currentcolor, transparent 38.75%);
    ${no}: color-mix(in srgb, currentcolor, transparent 70%);

    ${io}: var(--arc-color-border-focus);
  }

  &[data-variant=primary] {
    ${$a}: var(--arc-color-fg-primary);
    ${co}: var(--arc-color-fg-secondary);
    ${no}: var(--arc-color-fg-disabled);
    ${io}: var(--arc-color-border-focus);
  }

  &[data-variant=secondary] {
    ${$a}: var(--arc-color-fg-secondary);
    ${co}: var(--arc-color-fg-primary);
    ${no}: var(--arc-color-fg-disabled);
    ${io}: var(--arc-color-border-focus);
  }

  /* @deprecated */
  &[data-variant=inverse] {
    ${$a}: var(--arc-color-fg-on-mono-inverse);
    ${co}: var(--arc-link-fg-hover-inverse);
    ${no}: var(--arc-link-fg-disabled-inverse);
    ${io}: var(--arc-link-focus-disabled-inverse);
  }

  & {
    ${ji}: 0.125em; /* 2px */
    ${Mc}: 0.0625em; /* 1px */
  }


  /* STATES --------------------------------------------------------• */

  &:not([data-is-disabled]):hover {
    ${$a}: var(--arc-link-color-hover, var(${co}));
  }

  &:where(:focus, :focus-within):focus-visible {
    ${Pc}: var(${ji}) solid var(--arc-link-color-focus, var(${io}));
    ${Mc}: var(${Mc});

    * {
      outline: none;
    }
  }

  &[data-is-disabled] {
    ${$a}: var(--arc-link-color-disabled, var(${no}));
    ${Hh}: not-allowed;
  }


  & {

    /* Inter-Component Communication -------------------------------• */
    --arc-icon-color: var(--arc-link-color, var(${$a}));  /** ArcIcon color */

  }

}


/* CORE STYLES ------------------------------------------------------ */

[arc-link] {
  color: var(--arc-link-color, var(${$a}));
  border-radius: var(--arc-border-radius-sm); /* for focus outline */
  text-decoration: var(--arc-link-text-decoration, underline);

  [data-element=icon] {
    text-decoration: none;
  }

  [data-element=text] {
    text-decoration: var(--arc-link-text-decoration, underline);
    text-decoration-color: currentcolor;
  }
}

}
`,Wh=R(ur,["inherit","primary","secondary","inverse"]),Gh=({children:r,layout:a="gutter",size:e="inherit",variant:o="inherit",tag:t="a",href:i,icon:n,text:h,overflow:d,iconSize:u,gapSize:v,isFlipped:p,isDisabled:g,...f})=>(0,c.jsx)(t,{...f,href:g?void 0:i,"arc-link":"","data-variant":o,"aria-disabled":g,"data-is-disabled":g?"":void 0,children:r||(0,c.jsx)(qr,{icon:n,text:h,overflow:d,iconSize:u,gapSize:v,size:e,layout:a,isFlipped:p})});V("ArcLink",Uh);const Kh=[...Ba],Zh=R(ur,["common"]),Yh=R(ur,["common","critical"]),qh=R(ur,["common","brand","info","success","warning","error","processing"]),Jh=["auto","dark","light","none"],Xh=["auto","all","top-bottom","left-right","left-right-top","left-right-bottom","top-bottom-left","top-bottom-right","none"],Qh=R(Er,["xl","lg","md","sm","custom","fullscreen"]),r0=["cancel","escape","outside","button:dismiss","button:back","button:primary","button:secondary","button:tertiary","confirm:discard","confirm:cancel"],a0=l`--arc•button•bar`,lo=l`${a0}•axis`,e0=l`
@layer arc-components {

  [arc-button-bar=horizontal] {
    ${lo}: row;

    &[is-flipped] {
      ${lo}: row-reverse;
    }
  }

  [arc-button-bar=vertical] {
    ${lo}: column;

    &[is-flipped] {
      ${lo}: column-reverse;
    }
  }

  [arc-button-bar] {
    flex: var(--arc-button-bar-flex, 1);
    display: var(--arc-button-bar-display, flex);
    flex-direction: var(--arc-button-bar-flex-direction, var(${lo}));
    align-items: var(--arc-button-bar-align-items, center);
    justify-content: var(--arc-button-bar-justify-content, flex-end);
    gap: var(--arc-button-bar-gap, var(--arc-space-1));
    padding: var(--arc-button-bar-padding, 0);
    margin: 0;
  }

}
`,Bc=({children:r,...a})=>{const{Element:e="menu",orientation:o="horizontal",isFlipped:t=!1,...i}=a;return(0,c.jsx)(e,{...i,"arc-button-bar":o,"is-flipped":t?"":void 0,role:i.role??"group",children:r})};V("ArcButtonBar",e0);const Oc=r=>r?.matches(":modal"),Dc=(r,a)=>a.target===r,o0=(r,a)=>a.clientX<r.left||a.clientX>r.right||a.clientY<r.top||a.clientY>r.bottom,so=({modalRef:r,shouldConfirm:a,setIsConfirming:e,onCloseOverride:o=void 0})=>(t,i)=>n=>{if(n?.preventDefault?.(),n?.stopPropagation?.(),!r?.current){i?.(n);return}if(o){o(t,n,r.current),i?.(n);return}if(a&&t!=="confirm:discard"){e?.(!0);return}r.current?.close(t),e?.(!1),i?.(n)},Nc=({modalRef:r,shouldConfirm:a,setIsConfirming:e,onClose:o,onToggle:t})=>{(0,m.useEffect)(()=>{const i=r.current;if(!i)return;const n=d=>{Oc(i)&&Dc(i,d)&&(a?(d.preventDefault(),d.stopPropagation(),e?.(!0)):o?.("outside",d))},h=d=>{Dc(i,d)&&(e?.(!1),o?.(i.returnValue,d),t?.(!1,d))};return i.addEventListener("close",h),i.addEventListener("cancel",n),()=>{i.removeEventListener("close",h),i.removeEventListener("cancel",n)}},[r,a,e,o,t])},Fc=({modalRef:r,isOpen:a,isTopLayer:e})=>{(0,m.useEffect)(()=>{const o=r.current;o&&(a&&!o.open&&(e?o.showModal():o.show()),!a&&o.open&&o.close())},[a,e])},Vc=({modalRef:r,isOpen:a,autoFocusId:e})=>{(0,m.useEffect)(()=>{const o=r.current;if(!o||!e||!a)return;const t=o.querySelector(`#${e}`);if(!t||!(t instanceof HTMLElement))return;const i=setTimeout(()=>{t.focus()},0);return()=>clearTimeout(i)},[r,e,a])},Li=(r,a)=>(typeof r.composedPath=="function"?r.composedPath():[]).includes(a)||r.target instanceof Node&&a.contains(r.target),Ri=({modalRef:r,isOpen:a=!1,closeOnBackdrop:e=!1,attemptCloseModal:o})=>{(0,m.useEffect)(()=>{const t=r.current;if(!t||!a||!e||!Oc(t))return;let i=!1;const n=d=>{i=Li(d,t)},h=d=>{if(i||Li(d,t))return;const u=t.getBoundingClientRect();o0(u,d)&&o("outside")(d)};return document.documentElement?.addEventListener("pointerdown",n,{capture:!0}),document.documentElement?.addEventListener("click",h,{capture:!0}),()=>{document.documentElement?.removeEventListener("pointerdown",n,{capture:!0}),document.documentElement?.removeEventListener("click",h,{capture:!0})}},[r,o,a,e])},Pi=({modalRef:r,isOpen:a=!1,closeOnEsc:e=!1,closedBy:o="closerequest",attemptCloseModal:t})=>{(0,m.useEffect)(()=>{const i=r.current;if(!i||!a||!e||!Oc(i))return;const n=h=>{if(h.key==="Escape"&&Dc(i,h)){if(o==="none"){h.stopPropagation(),h.preventDefault();return}t("escape")(h)}};return document.addEventListener("keydown",n),()=>document.removeEventListener("keydown",n)},[r,t,a,e,o])},Hc=r=>(0,c.jsx)(jr,{"aria-label":"Dismiss",text:"Dismiss",...r,variant:"common",hierarchy:"tertiary",icon:"fa-regular fa-xmark-large fa-fw",layout:"icon",shape:"square",size:"md"}),ht=(0,m.forwardRef)(({inert:r,...a},e)=>(0,c.jsx)("div",{...a,ref:e,"arc-modal-content":"",inert:r}));ht.displayName="ModalContent";const Mi=({showDivider:r,...a})=>(0,c.jsx)("header",{...a,"arc-modal-header":"","has-divider":r?"":void 0}),t0=({glyph:r,variant:a="common"})=>(0,c.jsx)(c.Fragment,{children:r&&(0,c.jsx)(O,{icon:r,"arc-modal-glyph":"","arc-icon-status":a})}),Uc=r=>{const{titleContent:a,TitleElement:e="h2",...o}=r;return(0,c.jsx)(c.Fragment,{children:a&&(0,c.jsx)(e,{...o,"arc-modal-title":"",children:typeof a=="string"?a:(0,c.jsx)(qr,{...a})})})},c0=({message:r,...a})=>(0,c.jsx)(c.Fragment,{children:r&&(0,c.jsx)("p",{...a,"arc-modal-message":"",children:r})}),Wc=({tag:r="section",padding:a,...e})=>(0,c.jsx)(r,{...e,"arc-modal-body":"","data-padding":a==="auto"?void 0:a}),Gc=({showDivider:r,...a})=>(0,c.jsx)("footer",{...a,"arc-modal-footer":"","has-divider":r?"":void 0}),n0=r=>a=>{if(a.key==="Escape"){if(r==="none"){a.stopPropagation(),a.preventDefault();return}return"escape"}},L=l`--arc•modal`,ho=l`${L}•layout`,i0=l`${L}•header`,ut=l`${L}•body`,uo=l`${L}•footer`,Bi=l`${L}•fg`,vt=l`${L}•bg`,ya=l`${L}•backdrop`,Fa=l`${L}•scale`,ze=l`${i0}•padding`,or=l`${ut}•padding`,Va=l`${uo}•padding`,l0=l`
  ${L}•font•size: var(${s}•14);
  ${L}•gap: var(${b}•16);

  ${ho}•rows: auto 1fr auto;
  ${ho}•columns: auto;

  &:not(:has([arc-modal-footer])):has([arc-modal-header]) {
    ${ho}•rows: auto 1fr;
  }

  &:not(:has([arc-modal-header])):has([arc-modal-footer]) {
    ${ho}•rows: 1fr auto;
  }

  &:not(:has([arc-modal-header])):not(:has([arc-modal-footer])) {
    ${ho}•rows: auto;
  }

  ${Bi}: var(--arc-color-fg-primary);
  ${vt}: var(--arc-color-bg-primary);
  ${L}•border: none;
  ${L}•border•radius: var(--arc-border-radius-lg);
  ${L}•divider: var(${s}•1) solid var(--arc-color-border-mid);

  ${L}•max•width: calc(100vw - var(${b}•32));
  ${L}•min•width: unset;
  ${L}•width: auto;

  ${L}•max•height: calc(100vh - var(${b}•32));
  ${L}•min•height: unset;
  ${L}•height: max-content;

  ${Fa}: 1;
  ${Fa}•start: 0.95;

  ${ut}•text•align: unset;
  ${uo}•justify•content: flex-end;

  ${ya}•bg: var(--arc-color-overlay-stark);
  ${ya}•pointer•events: none;
  ${ya}•cursor: default;

  &:where([is-backdrop=light]) {
    ${ya}•bg: var(--arc-color-overlay-subtle);
  }

  &:where([is-backdrop=dark]) {
    ${ya}•bg: var(--arc-color-overlay-stark);
  }

  &:where([is-backdrop=none]) {
    ${ya}•bg: transparent;
  }
`,s0=l`
  &[data-size=sm] {
    ${L}•width: 28em;
  }

  &[data-size=md] {
    ${L}•width: 40em;
  }

  &[data-size=lg] {
    ${L}•width: 50em;
  }

  &[data-size=xl] {
    ${L}•width: 64em;
  }

  &[data-size=custom] {
    ${L}•width: auto;
    ${L}•height: max-content;
  }

  &[data-size=fullscreen] {
    ${L}•width: 100vw;
    ${L}•height: 100vh;
    ${L}•min•width: 100vw;
    ${L}•min•height: 100vh;
    ${L}•max•width: 100vw;
    ${L}•max•height: 100vh;
    ${L}•border•radius: var(--arc-border-radius-none);

    ${Fa}: 1;
    ${Fa}•start: 1.125;
  }
`,d0=l`
  &[is-confirm] {
    ${uo}•justify•content: flex-end;

    &[is-confirm=critical] [arc-modal-title] {
      --arc-icon-text-icon-color: var(--arc-color-fg-critical-mid);
    }
  }

  &[is-alert] {
    ${ut}•text•align: center;
    ${uo}•justify•content: center;

    ${or}•block•start: var(${b}•40);
    ${or}•block•end: var(${b}•20);

    ${Va}•block•start: var(${b}•12);
    ${Va}•block•end: var(${b}•40);

    ${L}•glyph•size: var(${s}•48);

    [arc-modal-spinner] {
      --arc-spinner-circle-opacity: 9.8%; /* 9.8% = neutral-200 on white */
      --arc-spinner-size: var(${L}•glyph•size);
    }

    [arc-modal-glyph] {
      --arc-icon-display: flex;
      --arc-icon-size: var(${L}•glyph•size);
      --arc-icon-height: var(--arc-icon-size);
      --arc-icon-max-height: var(--arc-icon-size);
    }

    [arc-modal-body] {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: var(${b}•12);
    }
  }

  &:not([is-top-layer]) {
    z-index: var(--arc-modal-z-index, 1000);
  }
`,h0=l`
  [arc-modal-content] {
    &:has([arc-modal-header]) {
      ${or}•block•start: var(${b}•10);
    }

    &:has([arc-modal-footer]) {
      ${or}•block•end: var(${b}•10);
    }

    &:has([arc-modal-header][has-divider]) {
      ${ze}•block•end: var(${b}•20);
      ${or}•block•start: var(${b}•20);
    }

    &:has([arc-modal-footer][has-divider]) {
      ${or}•block•end: var(${b}•20);
      ${Va}•block•start: var(${b}•12);
      ${Va}•block•end: var(${b}•12);
    }

    &:has([arc-modal-body][data-padding=top-bottom]) {
      ${or}•inline•start: 0;
      ${or}•inline•end: 0;
    }

    &:has([arc-modal-body][data-padding=left-right]) {
      ${or}•block•start: 0;
      ${or}•block•end: 0;
    }

    &:has([arc-modal-body][data-padding=left-right-top]) {
      ${or}•block•end: 0;
    }

    &:has([arc-modal-body][data-padding=left-right-bottom]) {
      ${or}•block•start: 0;
    }

    &:has([arc-modal-body][data-padding=top-bottom-left]) {
      ${or}•inline•end: 0;
    }

    &:has([arc-modal-body][data-padding=top-bottom-right]) {
      ${or}•inline•start: 0;
    }

    &:has([arc-modal-body][data-padding=all]) {
      ${or}•block•start: var(${b}•20);
      ${or}•inline•end: var(${b}•24);
      ${or}•block•end: var(${b}•20);
      ${or}•inline•start: var(${b}•24);
    }

    &:has([arc-modal-go-back]) {
      ${ze}•inline•start: var(${b}•20);
    }

    ${ze}:
      var(${b}•20)
      var(${b}•24)
      var(${ze}•block•end, var(${b}•10))
      var(${ze}•inline•start, var(${b}•24));

    ${or}:
      var(${or}•block•start, var(${b}•20))
      var(${or}•inline•end, var(${b}•24))
      var(${or}•block•end, var(${b}•20))
      var(${or}•inline•start, var(${b}•24));

    ${Va}:
      var(${Va}•block•start, var(${b}•10))
      var(${b}•24)
      var(${Va}•block•end, var(${b}•20))
      var(${b}•24);

    &:has([arc-modal-body][data-padding=none]) {
      ${or}: 0;
    }
  }
`,u0=l`
  [arc-modal] {
    transition-behavior: allow-discrete, smooth;
    transition-duration: var(--arc-modal-transition-duration, 240ms);
    transition-property: display, opacity, scale;
    transition-timing-function: ease-out;

    &::after {
      transition: inherit;
    }

    &::backdrop {
      transition: inherit;
    }
  }

  @supports (overlay: auto) {
    [arc-modal] {
      transition-behavior: allow-discrete;
      transition-property: display, overlay, opacity, scale;
    }
  }
`,v0=l`
  [arc-modal] {
    opacity: 0;
    scale: var(--arc-modal-scale, var(${Fa}));

    &::after {
      opacity: 0;
    }

    &::backdrop {
      opacity: 0;
    }

    &[open] {
      display: flex;
      flex-direction: column;
      opacity: 1;
    }

    &[open]::after {
      opacity: 1;
    }

    &[open]::backdrop {
      opacity: 1;
    }
  }

  @starting-style {
    [arc-modal][open] {
      opacity: 0;
      scale: var(--arc-modal-scale-start, var(${Fa}•start));
    }

    [arc-modal][open]::after {
      opacity: 0;
    }

    [arc-modal][open]::backdrop {
      opacity: 0;
    }
  }
`,Kc=l`
@layer arc-components {

  /* SETUP ---------------------------------------------------------• */

  [arc-modal] {
    ${l0}
    ${s0}
    ${d0}
    ${h0}
  }

  /* REDUCED MOTION ------------------------------------------------• */

  @media (prefers-reduced-motion: reduce) {
    [arc-modal] {
      ${Fa}: 1;
      ${Fa}•start: 1;
    }
  }

  /* CORE ----------------------------------------------------------• */

  [arc-modal] {
    will-change: opacity, scale;
    contain: layout style paint;

    inset: var(--arc-modal-inset, 0);
    translate: var(--arc-modal-translate, none);
    margin: var(--arc-modal-margin, auto);

    padding: 0;
    color: var(--arc-modal-color, var(${Bi}));
    background: var(--arc-modal-background, var(${vt}));
    border: var(--arc-modal-border, var(${L}•border));
    border-radius: var(--arc-modal-border-radius, var(${L}•border•radius));
    box-shadow: var(--arc-modal-box-shadow, var(--arc-shadow-lg));
    outline: var(--arc-modal-outline, none);

    width: var(--arc-modal-width, var(${L}•width));
    height: var(--arc-modal-height, var(${L}•height));
    min-width: var(--arc-modal-min-width, var(${L}•min•width));
    min-height: var(--arc-modal-min-height, var(${L}•min•height));
    max-width: var(--arc-modal-max-width, var(${L}•max•width));
    max-height: var(--arc-modal-max-height, var(${L}•max•height));

    &::backdrop {
      will-change: opacity;
      contain: layout style paint;

      background: var(--arc-modal-backdrop-background, var(${ya}•bg));
      pointer-events: var(${ya}•pointer•events, none);
      cursor: var(${ya}•cursor, default);
    }

    [arc-modal-content] {
      font-size: var(--arc-modal-font-size, var(${L}•font•size));
      flex: 1 1 min-content;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      position: relative;
      z-index: 1;

      /* Force remove margin from controlled title and message elements */
      :is([arc-modal-title], [arc-modal-message]) { margin: 0 !important; }
    }

    [arc-modal-header] {
      flex: none;
      position: relative;
      z-index: 1;

      display: flex;
      align-items: var(--arc-modal-header-align-items, unset);
      justify-content: space-between;
      gap: var(--arc-modal-header-gap, var(${L}•gap));

      padding: var(${ze});
      background: var(--arc-modal-header-background, var(${vt}));
      max-width: 100%;

      &:where([has-divider]) {
        border-bottom: var(--arc-modal-header-divider, var(${L}•divider));
      }

      :where([header-slot]) {
        display: flex;
        align-items: inherit;
        gap: inherit;
      }

      :where([header-slot=content]) {
        flex: 1;
        align-self: flex-start;
      }

      :where([header-slot=dismiss]) {
        margin: var(${b}•4m) var(${b}•8m) var(${b}•4m) var(${b}•4m);
      }

      :where([header-slot=go-back]) {
        margin: var(${b}•4m) 0 var(${b}•4m) var(${b}•4m);
      }
    }

    [arc-modal-title] {
      --arc-icon-text-gap: var(${b}•8);
      --arc-icon-text-line-height: normal;

      [data-element=subtext] {
        font-family: var(--arc-font-family-body);
        font-weight: var(--arc-font-weight-body);
        font-size: var(--arc-font-size-body-md);
        color: inherit;
        margin-top: var(${b}•4);
      }
    }

    [arc-modal-body] {
      flex: 1;
      padding: var(${or});
      overflow: auto;
      overscroll-behavior: var(--arc-modal-overscroll-behavior, contain);
      min-height: var(--arc-modal-body-min-height, 3em);
      text-align: var(--arc-modal-body-text-align, var(${ut}•text•align));
    }

    [arc-modal-footer] {
      flex: none;
      position: relative;
      z-index: 1;

      display: flex;
      flex-direction: var(--arc-modal-footer-flex-direction, unset);
      align-items: var(--arc-modal-footer-align-items, center);
      justify-content: var(--arc-modal-footer-justify-content, var(${uo}•justify•content));
      gap: var(--arc-modal-footer-gap, var(${L}•gap));

      background: var(--arc-modal-footer-background, var(${vt}));
      padding: var(--arc-modal-footer-padding, var(${Va}));
      max-width: 100%;

      &[has-divider] {
        border-top: var(--arc-modal-footer-divider, var(${L}•divider));
      }

      [footer-slot=content] {
        flex: var(--arc-modal-footer-content-flex, none);
        display: var(--arc-modal-footer-content-display, flex);
        gap: inherit;
      }
    }

    [arc-modal-dismiss] {
      position: var(--arc-modal-dismiss-position, absolute);
      inset: var(--arc-modal-dismiss-inset, var(${b}•16) var(${b}•16) auto auto);
      width: var(--arc-modal-dismiss-width, auto);
      overflow: visible;
      z-index: 2;
    }

    /* Nested confirm modal */
    &:not([is-top-layer]):has([arc-modal][is-confirm][open])::after {
      content: '';
      position: absolute;
      inset: 0;
      background: var(--arc-modal-backdrop-background, var(${ya}•bg));
      z-index: var(--arc-modal-confirm-z-index, 2);
    }

    /* Nested modals */
    [arc-modal] {
      --arc-modal-min-width: var(--arc-modal-nested-min-width, none);
      --arc-modal-min-height: var(--arc-modal-nested-min-height, none);
    }

    [arc-modal][is-alert] {
      --arc-modal-min-width: var(--arc-modal-nested-alert-min-width, none);
      --arc-modal-min-height: var(--arc-modal-nested-alert-min-height, none);
    }

    [arc-modal][is-confirm] {
      --arc-modal-width: var(--arc-modal-confirm-width, 25em);
      --arc-modal-height: var(--arc-modal-confirm-height, max-content);
      --arc-modal-min-width: var(--arc-modal-confirm-min-width, none);
      --arc-modal-min-height: var(--arc-modal-confirm-min-height, none);
      --arc-modal-max-width: var(--arc-modal-confirm-max-width, calc(100% - var(${b}•32)));
      --arc-button-bar-flex: none;

      z-index: var(--arc-modal-confirm-z-index, 3);

      inset: var(--arc-modal-confirm-inset, 0);
      translate: var(--arc-modal-confirm-translate, none);
      margin: var(--arc-modal-confirm-margin, auto);
    }
  }

  ${u0}
  ${v0}
`,Ha={variant:"common",backdropColor:"auto",message:"You have unsaved changes. Discard them?",onCloseOverride:void 0,isTopLayer:!0,isInverse:!1,scheme:"auto"},Oi=({children:r,headerProps:a,bodyProps:e,footerProps:o,...t})=>{const i=(0,m.useRef)(null),{isOpen:n,autoFocusId:h,isTopLayer:d=Ha.isTopLayer,isInverse:u=Ha.isInverse,scheme:v=Ha.scheme,backdropColor:p=Ha.backdropColor,variant:g=Ha.variant,message:f=Ha.message,onCloseOverride:x=Ha.onCloseOverride,onConfirmDiscard:z,onConfirmCancel:T,contentRef:j,..._}=t,{slotStart:E,TitleElement:C,titleContent:S,slotEnd:N,...B}=a||{},{primaryButton:Y,secondaryButton:G,...H}=o||{},dr=!!(S||E||N),K=v==="auto"?void 0:v,cr=!!x,ar=rr=>cr?x?.("confirm:discard",rr,i.current??void 0):z?.("confirm:discard",rr),Fr=rr=>cr?x?.("confirm:cancel",rr,i.current??void 0):T?.("confirm:cancel",rr);Nc({modalRef:i,onClose:x}),Fc({modalRef:i,isOpen:n,isTopLayer:d}),Vc({modalRef:i,isOpen:n,autoFocusId:h});const hr=rr=>{Fr(rr),G?.onClick?.(rr)},Zr=rr=>{ar(rr),Y?.onClick?.(rr)};return(0,c.jsx)("dialog",{..._,ref:i,"arc-modal":"","arc-scheme":u?"inverse":K,"is-confirm":g||"","is-inverse":u?"":void 0,"is-top-layer":d?"":void 0,"is-backdrop":p==="auto"?void 0:p,"data-size":"sm",closedby:"none",onKeyDown:n0("none"),children:(0,c.jsxs)(ht,{ref:j,children:[dr&&(0,c.jsxs)(Mi,{...B,children:[E&&(0,c.jsx)("div",{"header-slot":"start",children:E}),(0,c.jsx)("div",{"header-slot":"content",children:(0,c.jsx)(Uc,{TitleElement:C,titleContent:S})}),N&&(0,c.jsx)("div",{"header-slot":"end",children:N})]}),(0,c.jsx)(Wc,{...e,children:r||f&&(0,c.jsx)("p",{style:{margin:0},children:f})}),(0,c.jsx)(Gc,{...H,children:(0,c.jsxs)(Bc,{children:[(0,c.jsx)(jr,{...G,text:G?.text||"Cancel",variant:"common",hierarchy:"secondary",isInverse:u,onClick:hr}),(0,c.jsx)(jr,{...Y,text:Y?.text||"Discard",variant:g??"common",hierarchy:"primary",isInverse:u,onClick:Zr})]})})]})})};V("ArcModalConfirm",Kc);const Pr={size:"md",variant:"common",backdropColor:"auto",isTopLayer:!0,isInverse:!1,scheme:"auto",showDismiss:!0,closeOnEsc:!0,closeOnBackdrop:!1,hasConfirmFlow:!1,hasUnsavedChanges:!1,onCloseOverride:void 0,bypassConfirmWhen:{didPressEscapeKey:!1,didClickBackdrop:!1,didClickGoBackButton:!1,didClickDismissButton:!1,didClickPrimaryButton:!1,didClickSecondaryButton:!1,didClickTertiaryButton:!1},headerProps:{showDivider:!1},bodyProps:{padding:"auto"},footerProps:{showDivider:!1}},g0=({children:r,confirmProps:a,headerProps:e,bodyProps:o,dismissProps:t,footerProps:i,...n})=>{const h=(0,m.useRef)(null),[d,u]=(0,m.useState)(!1),{isOpen:v,autoFocusId:p,isTopLayer:g=Pr.isTopLayer,isInverse:f=Pr.isInverse,scheme:x=Pr.scheme,backdropColor:z=Pr.backdropColor,hasConfirmFlow:T=Pr.hasConfirmFlow,hasUnsavedChanges:j=Pr.hasUnsavedChanges,onCloseOverride:_=Pr.onCloseOverride,bypassConfirmWhen:E=Pr.bypassConfirmWhen??{},size:C=Pr.size,closeOnBackdrop:S=Pr.closeOnBackdrop,closeOnEsc:N=Pr.closeOnEsc,showDismiss:B=Pr.showDismiss,onActionError:Y,onClose:G,onToggle:H,width:dr,height:K,style:cr,contentRef:ar,...Fr}=n,{showGoBack:hr,goBackProps:Zr,slotStart:rr,TitleElement:_r,titleContent:oa,slotEnd:wr,showDivider:Yr=Pr.headerProps?.showDivider,...Ua}=e??{},{slotStart:ta,primaryButton:W,secondaryButton:vr,tertiaryButton:Vr,showDivider:er=Pr.footerProps?.showDivider,...Ra}=i??{},ga=!!(hr||oa||rr||wr),yo=!!(W||vr||Vr),Pa=!!(yo||ta),pa=!!(T&&j),xo=N?"closerequest":"none",It=x==="auto"?void 0:x,{didPressEscapeKey:se,didClickBackdrop:jt,didClickGoBackButton:Lt,didClickDismissButton:Rt,didClickPrimaryButton:vn,didClickSecondaryButton:Pt,didClickTertiaryButton:ko}=E,de=so({modalRef:h,shouldConfirm:pa,setIsConfirming:u,onCloseOverride:_});Nc({modalRef:h,shouldConfirm:pa,setIsConfirming:u,onClose:G,onToggle:H}),Fc({modalRef:h,isOpen:v,isTopLayer:g}),Vc({modalRef:h,isOpen:v,autoFocusId:p}),Ri({modalRef:h,isOpen:v,closeOnBackdrop:S,attemptCloseModal:jt?so({modalRef:h,shouldConfirm:pa&&!jt,setIsConfirming:u}):de}),Pi({modalRef:h,isOpen:v,closeOnEsc:N,closedBy:xo,attemptCloseModal:se?so({modalRef:h,shouldConfirm:pa&&!se,setIsConfirming:u}):de});const gn=()=>u(!1),Mt=(za,he)=>de(za)(he),Aa=(za,he,Bt)=>async Wa=>{Wa?.preventDefault?.(),Wa?.stopPropagation?.();const Ot=()=>he?so({modalRef:h,shouldConfirm:pa&&!he,setIsConfirming:u})(za,Bt?.onCloseCallback)(Wa):de(za,Bt?.onCloseCallback)(Wa);try{await Bt?.onClick?.(Wa),Ot()}catch(pn){Y?.(pn,{reason:za,event:Wa})}};return(0,c.jsxs)("dialog",{...Fr,ref:h,"arc-modal":"","arc-scheme":f?"inverse":It,"is-inverse":f?"":void 0,"is-top-layer":g?"":void 0,"is-backdrop":z==="auto"?void 0:z,"data-size":C,closedby:xo,style:{"--arc-modal-width":dr??"","--arc-modal-height":K??"",...cr},children:[!ga&&B&&(0,c.jsx)("div",{"arc-modal-dismiss":"",children:(0,c.jsx)(Hc,{...t,isInverse:f,onClick:Aa("button:dismiss",Rt,t)})}),(0,c.jsxs)(ht,{ref:ar,inert:d?"":void 0,children:[ga&&(0,c.jsxs)(Mi,{...Ua,showDivider:Yr,children:[hr&&(0,c.jsx)("div",{"header-slot":"go-back",children:(0,c.jsx)(jr,{"arc-modal-go-back":"",icon:"fa-regular fa-arrow-left fa-fw",text:"Go Back","aria-label":"Go Back",...Zr,layout:"icon",size:"md",variant:"common",hierarchy:"secondary",isInverse:f,onClick:Aa("button:back",Lt,Zr)})}),rr&&(0,c.jsx)("div",{"header-slot":"start",children:rr}),(0,c.jsx)("div",{"header-slot":"content",children:(0,c.jsx)(Uc,{TitleElement:_r,titleContent:oa})}),wr&&(0,c.jsx)("div",{"header-slot":"end",children:wr}),B&&(0,c.jsx)("div",{"header-slot":"dismiss",children:(0,c.jsx)(Hc,{...t,isInverse:f,onClick:Aa("button:dismiss",Rt,t)})})]}),(0,c.jsx)(Wc,{...o,children:r}),Pa&&(0,c.jsxs)(Gc,{...Ra,showDivider:er,children:[ta&&(0,c.jsx)("div",{"footer-slot":"content",children:ta}),yo&&(0,c.jsxs)(Bc,{children:[Vr&&(0,c.jsx)(jr,{...Vr,text:Vr?.text||"Button",isInverse:f,variant:"common",hierarchy:"tertiary",onClick:Aa("button:tertiary",ko,Vr)}),vr&&(0,c.jsx)(jr,{...vr,text:vr?.text||"Cancel",isInverse:f,variant:"common",hierarchy:"secondary",onClick:Aa("button:secondary",Pt,vr)}),W&&(0,c.jsx)(jr,{...W,text:W?.text||"Action",isInverse:f,variant:"common",hierarchy:"primary",onClick:Aa("button:primary",vn,W)})]})]})]}),T&&(0,c.jsx)(Oi,{isOpen:d,isInverse:f,isTopLayer:g,backdropColor:z,...a,onConfirmDiscard:Mt,onConfirmCancel:gn})]})};V("ArcModal",Kc);const Ta={variant:"common",backdropColor:"auto",showDismiss:!0,closeOnBackdrop:!1,closeOnEsc:!0,onCloseOverride:void 0,isTopLayer:!0,isInverse:!1,scheme:"auto"},p0={common:"fa-solid fa-cat-space",brand:"fa-kit fa-articulate",success:"fa-solid fa-badge-check",warning:"fa-solid fa-triangle-exclamation",error:"fa-solid fa-do-not-enter",info:"fa-solid fa-circle-info",processing:(0,c.jsx)(mc,{"arc-modal-spinner":""})},f0=({children:r,dismissProps:a,bodyProps:e,footerProps:o,...t})=>{const i=(0,m.useRef)(null),{isOpen:n,autoFocusId:h,isTopLayer:d=Ta.isTopLayer,isInverse:u=Ta.isInverse,scheme:v=Ta.scheme,backdropColor:p=Ta.backdropColor,closeOnBackdrop:g=Ta.closeOnBackdrop,closeOnEsc:f=Ta.closeOnEsc,variant:x=Ta.variant,icon:z,TitleElement:T,titleContent:j,message:_,showDismiss:E,onCloseOverride:C=Ta.onCloseOverride,onClose:S,onToggle:N,contentRef:B,...Y}=t,{primaryButton:G,...H}=o??{},dr=z||p0[x],K=f?"closerequest":"none",cr=v==="auto"?void 0:v,ar=so({modalRef:i,onCloseOverride:C});return Nc({modalRef:i,onClose:S,onToggle:N}),Fc({modalRef:i,isOpen:n,isTopLayer:d}),Vc({modalRef:i,isOpen:n,autoFocusId:h}),Ri({modalRef:i,isOpen:n,closeOnBackdrop:g,attemptCloseModal:ar}),Pi({modalRef:i,isOpen:n,closeOnEsc:f,closedBy:K,attemptCloseModal:ar}),(0,c.jsxs)("dialog",{...Y,ref:i,"arc-modal":"","arc-scheme":u?"inverse":cr,"is-alert":x||"","is-inverse":u?"":void 0,"is-top-layer":d?"":void 0,"is-backdrop":p==="auto"?void 0:p,"data-size":"sm",closedby:K,children:[E&&(0,c.jsx)("div",{"arc-modal-dismiss":"",children:(0,c.jsx)(Hc,{...a,isInverse:u,onClick:ar("button:dismiss",a?.onClick)})}),(0,c.jsxs)(ht,{ref:B,children:[(0,c.jsx)(Wc,{...e,children:r||(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t0,{glyph:dr,variant:x}),(0,c.jsx)(Uc,{TitleElement:T,titleContent:j}),(0,c.jsx)(c0,{message:_})]})}),(0,c.jsx)(Gc,{...H,children:(0,c.jsx)(Bc,{orientation:"vertical",children:(0,c.jsx)(jr,{...G,text:G?.text||"Close",variant:"common",hierarchy:"primary",isInverse:u,onClick:ar("button:primary",G?.onClick)})})})]})]})};V("ArcModalAlert",Kc);const $r=l`--arc•radio`,m0=l`
@layer arc-components {

  [arc-radio] {
    /* SIZES -------------------------------------------------------• */
    &[data-size=inherit] {
      ${$r}•font•size: 1em;
      ${$r}•icon•size: 0.625em;
      ${$r}•size: 1.125em;
      ${$r}•gap: 0.5em;
    }

    &[data-size=md] {
      ${$r}•font•size: var(${s}•14);
      ${$r}•icon•size: var(${s}•10);
      ${$r}•size: var(${s}•18);
      ${$r}•gap: var(${s}•8);
    }

    &[data-size=sm] {
      ${$r}•font•size: var(${s}•12);
      ${$r}•icon•size: var(${s}•10);
      ${$r}•size: var(${s}•16);
      ${$r}•gap: var(${s}•6);
    }

    /* Inter-Component Communication -------------------------------• */
    /* for: Setup defaults for ArcBooleanInputMask */
    ${k}•border•radius: var(--arc-border-radius-circle);
    ${k}•size: var(${$r}•size);
    ${k}•icon•size: var(${$r}•icon•size);
    ${k}•width: var(${$r}•size);
    ${k}•height: var(${$r}•size);
    ${k}•translate: 0 var(${s}•1m);

    /* for: ArcLabel */
    --arc-label-gap: var(${$r}•gap);
    --arc-label-align-items: stretch; /* ArcLabel • this allows the mask
                                        to stay inline with the label text
                                        regardless of applied line-height */
  }

  /* CORE STYLES ---------------------------------------------------• */
  [arc-radio]:not([hidden]) {
    font-size: var(${$r}•font•size);
    display: var(--arc-radio-display, inline-flex);
    min-height: 1lh;

    /* UNCHECKED, NOT-DISABLED, +HOVER • default state */
    &:not(:has(:checked)) {
      ${k}•color: transparent;
      ${k}•background: transparent;
      ${k}•border•color: var(--arc-color-border-stark);

      &:hover {
        ${k}•background: var(--arc-color-bg-theme-subtle);
        ${k}•border•color: var(--arc-color-border-theme-heavy);
      }

      &:has(:disabled) {
        ${k}•background: var(--arc-color-bg-disabled);
        ${k}•border•color: var(--arc-color-border-disabled);
      }
    }

    /* DISABLED */
    &:has(:disabled) {
      color: var(--arc-color-fg-disabled);
    }

    /* CHECKED, ?NOT-DISABLED+HOVER, ?DISABLED */
    &:has(:checked) {
      ${k}•color: var(--arc-color-fg-on-theme-heavy);
      ${k}•background: var(--arc-color-bg-theme-heavy);
      ${k}•border•color: transparent;

      &:not(:has(:disabled)):hover {
        ${k}•background: var(--arc-color-bg-theme-stark);
      }

      &:has(:disabled) {
        ${k}•color: var(--arc-color-fg-on-theme-mid);
        ${k}•background: var(--arc-color-bg-theme-mid);
      }
    }
  }

}
`,b0=R(ca,["hug","fill"]),$0=R(Er,["inherit","md","sm"]),Di=({children:r,label:a,layout:e,size:o="md",useMask:t=!0,...i})=>{const{className:n,title:h,...d}=i,u={className:n,title:h},v=r??a,p=(0,c.jsx)(oo,{...d,type:"radio"}),g=t&&(0,c.jsxs)(st,{type:"radio",children:[p,(0,c.jsx)(O,{icon:"fa-solid fa-circle-small arc-fw"})]}),f=!!v&&(0,c.jsxs)(ce,{layout:e,children:[g||p,(0,c.jsx)(ne,{children:v})]});return(0,c.jsx)("span",{...u,"arc-radio":"","data-size":o,children:f||g||p})};V("ArcRadio",m0);const Dr=l`--arc•rb`,D=l`${Dr}•o`,y0=l`
@layer arc-components {

  [arc-radio-bar] {
    ${Dr}•font•size: var(${s}•14);
    ${Dr}•border•radius: var(${s}•8);
    ${Dr}•background: var(--arc-color-bg-secondary);
    ${Dr}•padding: var(${s}•4);
    ${Dr}•gap: var(${s}•2);

    ${D}•color: var(--arc-color-fg-secondary);
    ${D}•background: var(--arc-color-alpha-black-0);
    ${D}•border•color: var(--arc-color-alpha-black-0);
    ${D}•border•width: var(${s}•1);
    ${D}•border•radius: var(${s}•4); /* bar-radius minus bar-padding */

    /* SIZES -------------------------------------------------------• */
    &[data-size=lg] { /* @default */
      ${D}•size: var(${s}•32);
      ${D}•line•height: var(${s}•30); /* • -2px to account for border-width (top/bottom) */
      ${D}•icon•padding: var(${s}•8);
      ${D}•text•padding: var(${s}•12);
    }

    &[data-size=md] {
      ${D}•size: var(${s}•24);
      ${D}•line•height: var(${s}•22); /* • -2px to account for border-width (top/bottom) */
      ${D}•icon•padding: var(${s}•6);
      ${D}•text•padding: var(${s}•8);
    }

    /* LAYOUTS -----------------------------------------------------• */
    &[data-layout=hug] { /** @default */
      ${Dr}•display: inline-flex;
    }

    &[data-layout=fill] {
      ${Dr}•display: flex;
    }
  }

  [arc-radio-bar-option] {
    /* Inter-Component Communication -------------------------------• */
    --arc-label-align-items: stretch; /* control ArcLabel's vertical footprint;
                                        allows long label text to wrap
                                        without compromising option's
                                        visual border */


    /* STATES ------------------------------------------------------• */
    &:not(:has(:disabled, :checked)) {
      &:hover {
        ${D}•color: var(--arc-color-fg-on-hover-default);
        ${D}•background: var(--arc-color-bg-hover-default);
        ${D}•border•color: var(--arc-color-border-stark);
      }
    }

    &:has(:checked) {
      ${D}•color: var(--arc-color-mono-black);
      ${D}•background: var(--arc-color-mono-white);
      ${D}•border•color: var(--arc-color-border-stark);
      ${D}•font•weight: var(--arc-font-weight-500);
    }

    &:has(:disabled) {
      ${D}•color: var(--arc-color-fg-disabled);
    }


    &:has(:focus-within:focus-visible) {
      ${D}•outline: var(${D}•border•width) solid var(--arc-color-border-focus);
    }
  }

  /* CORE STYLES ---------------------------------------------------• */
  [arc-radio-bar-option] {
    flex: 1 1 auto;
    display: flex;
    position: relative;
  }

  [arc-radio-bar]:not([hidden]) {
    font-size: var(--arc-radio-bar-font-size, var(${Dr}•font•size));
    display: var(${Dr}•display);
    gap: var(${Dr}•gap);
    border-radius: var(${Dr}•border•radius);
    background: var(${Dr}•background);
    padding: var(${Dr}•padding);
    margin: 0;

    [arc-radio] {
      flex: 1;
      display: flex;
      justify-content: center;
      border-radius: var(${D}•border•radius);
      outline: var(${D}•outline, none);
      outline-offset: var(${D}•border•width);
    }

    /* INPUT ELEMENT -----------------------------------------------• */
    [arc-input-type=radio] {
      position: absolute;
      appearance: none;
      pointer-events: none;
      opacity: 0;
    }

    /* Inter-Component Communication -------------------------------• */
    [arc-label] {
      flex: 1;
      line-height: var(${D}•line•height);
      overflow: hidden;
    }

    [arc-label-content] {
      flex: 1;
      display: flex;
      align-items: safe center;
      justify-content: center;

      height: var(${D}•size);
      min-width: var(${D}•size);

      border-radius: var(${D}•border•radius);
      border: var(${D}•border•width) solid var(${D}•border•color);
      background: var(${D}•background);
      color: var(${D}•color);
      font-weight: var(${D}•font•weight, unset);

      transition-duration: 200ms;
      transition-timing-function: ease-out;
      transition-property:
        border,
        background,
        color,
        font-weight;

      &:has([data-element=text]) {
        padding: 0 var(${D}•text•padding);
      }

      &:not(:has([data-element=text])) {
        padding: 0 var(${D}•icon•padding);
      }
    }

    [arc-icon-text] [data-element] {
      min-width: min-content;
      overflow: hidden;
      overflow-wrap: break-word;
    }
  }

}
`,x0=R(ca,["hug","fill"]),k0=R(Er,["lg","md"]),w0=({children:r,label:a,icon:e,...o})=>{const t=r||(0,c.jsx)(qr,{icon:e,text:a});return(0,c.jsx)("li",{"arc-radio-bar-option":"","data-is-checked":o?.checked||void 0,children:(0,c.jsx)(Di,{...o,label:t,layout:"fill",useMask:!1})})},A0=({children:r,size:a="lg",layout:e="hug",...o})=>(0,c.jsx)("ul",{...o,"arc-radio-bar":"","data-size":a,"data-layout":e,role:"radiogroup",children:r});V("ArcRadioBar",y0);const Ce=r=>(0,c.jsx)(c.Fragment,{children:!!r.children&&(0,c.jsx)("span",{...r})}),z0=r=>(0,c.jsx)(c.Fragment,{children:!!r.children&&(0,c.jsx)("span",{...r})}),Zc=({children:r,...a})=>(0,c.jsx)(c.Fragment,{children:!!r&&(0,c.jsx)(ce,{...a,children:(0,c.jsx)(ne,{children:r})})}),C0=({children:r,layout:a,size:e,variant:o,tag:t="span",...i})=>(0,c.jsx)(t,{...i,"data-layout":a,"data-size":e,"data-variant":o,children:r}),S0=()=>(0,c.jsx)("span",{"input-element":"spacer"}),_0=r=>(0,c.jsx)(Ce,{...r,"input-element":"header"}),E0=r=>(0,c.jsx)(Zc,{...r,"input-element":"header-label"}),T0=r=>(0,c.jsx)(Ce,{...r,"input-element":"header-slot"}),I0=r=>(0,c.jsx)(Ce,{...r,"input-element":"body"}),j0=r=>(0,c.jsx)(Zc,{...r,"input-element":"input-prefix"}),L0=r=>(0,c.jsx)(Zc,{...r,"input-element":"input-suffix"}),R0=r=>(0,c.jsx)(z0,{...r,"input-element":"input-action"}),P0=r=>(0,c.jsx)(Ce,{...r,"input-element":"footer"}),M0=r=>(0,c.jsx)(Ce,{...r,"input-element":"footer-caption"}),B0=r=>(0,c.jsx)(Ce,{...r,"input-element":"footer-slot"}),O0=r=>a=>{if(!(a?.target instanceof HTMLInputElement))return;const e={name:a?.target?.name,value:a?.target?.value};r?.(e,a)},X=l`--arc•input`,Ia=l`${X}•fg`,gt=l`${Ia}•disabled`,pt=l`${Ia}•readonly`,ft=l`${Ia}•invalid`,ra=l`${X}•bg`,mt=l`${ra}•hover`,bt=l`${ra}•disabled`,$t=l`${ra}•readonly`,yt=l`${ra}•invalid`,D0=l`${X}•align`,Ni=l`${D0}•items`,N0=l`${X}•flex`,F0=l`${N0}•direction`,Fi=l`${X}•header`,xt=l`${Fi}•label•color`,Vi=l`${Fi}•slot•color`,Hi=l`${X}•footer`,Yc=l`${Hi}•caption•color`,Ui=l`${Hi}•slot•color`,qc=l`${X}•border`,Jc=l`${qc}•radius`,V0=l`${qc}•width`,aa=l`${qc}•color`,Xc=l`${X}•outline`,Wi=l`${Xc}•size`,Gi=l`${Xc}•offset`,Ki=l`${Xc}•color`,vo=l`${X}•height`,H0=l`${X}•padding`,kt=l`${H0}•inline`,Qc=l`${kt}•end`,Zi=l`${X}•slot`,rn=l`${Zi}•gap`,an=l`${Zi}•font•size`,wt=l`${aa}•hover`,At=l`${aa}•disabled`,en=l`${aa}•readonly`,go=l`${aa}•invalid`,U0=l`${X}•action•max•height`,Yi=l`${X}•gap`,on=l`${X}•font•size`,W0=l`
@layer arc-components {

/* --arc[-internal, -modifier, -computed] • NOT FOR CONSUMER USE ---• */

[arc-input] {

  /* SIZES ---------------------------------------------------------• */

  &[data-size=xl] {
    ${vo}: var(${s}•48);
    ${Qc}: var(${b}•8);
  }

  &:is([data-size=lg], [data-size=inherit]) { /* @default • base size at 100% */
    ${vo}: var(${s}•40);
  }

  &[data-size=md] {
    ${vo}: var(${s}•32);
    ${Jc}: var(${s}•4);
    ${U0}: 80%;
  }

  &:has(select) {
    ${kt}: 0;
    ${Ni}: stretch;
  }

  & {
    /* Defaults -------------------------• */
    ${on}: var(${s}•14);
    ${an}: var(${s}•12);

    ${vo}: var(${s}•40); /* default size */
    ${Yi}: var(${b}•6);
    ${rn}: var(${b}•4);
    ${kt}: var(${b}•12);
    ${Qc}: var(${b}•3);
    ${Jc}: var(${s}•8);
    ${V0}: var(${s}•1);
    ${Wi}: var(${s}•2);
    ${Gi}: var(${s}•1m);

    /* Inter-Component Communication -------------------------------• */

    --arc-label-cursor: var(${X}•cursor, inherit); /* ArcLabel • cursor syncing */

    &[data-size=inherit] {
      ${on}: 0.875em; /* 14px at 100% */
      ${an}: 0.75em; /* 12px at 100% */
    }

    &[data-size=md] {
      /* Inter-Component Communication -------------------------------• */
      --arc-button-border-radius: var(--arc-border-radius-sm);
      --arc-button-outline-offset: 0;
      --arc-button-font-size: 0.8em; /* ArcButton • the input size 'md' needs
                                        a slightly smaller "input-action" button
                                        footprint; there's no direct access to
                                        ArcButton['size'] prop in this context */
    }
  }

  /* VARIANTS ------------------------------------------------------• */

  & {
    ${Ia}: var(--arc-color-fg-primary);
    ${xt}: inherit;
    ${Vi}: var(--arc-color-fg-secondary);
    ${Yc}: var(--arc-color-fg-secondary);
    ${Ui}: var(--arc-color-fg-secondary);

    &[data-variant=outline] { /* @default */
      ${ra}: var(--arc-color-bg-primary);
      ${mt}: var(--arc-color-bg-primary);
      ${aa}: var(--arc-color-border-mid);
      ${wt}: var(--arc-color-border-heavy);

      ${gt}: var(--arc-color-fg-disabled);
      ${bt}: var(--arc-color-bg-secondary);
      ${At}: var(--arc-color-border-mid);

      ${pt}: var(--arc-color-fg-primary);
      ${$t}: var(--arc-color-bg-disabled);
      ${en}: var(--arc-color-border-mid);

      ${ft}: var(--arc-color-fg-critical-mid);
      ${yt}: var(--arc-color-bg-primary);
      ${go}: var(--arc-color-fg-critical-mid);
    }

    &[data-variant=solid] {
      ${ra}: var(--arc-color-bg-secondary);
      ${mt}: var(--arc-color-bg-hover-default);
      ${aa}: transparent;
      ${wt}: var(--arc-color-border-stark);

      ${ft}: var(--arc-color-fg-critical-mid);
      ${yt}: var(--arc-color-bg-critical-muted);
      ${go}: transparent;

      ${gt}: var(--arc-color-fg-disabled);
      ${bt}: var(--arc-color-bg-disabled);
      ${At}: transparent;

      ${pt}: var(--arc-color-fg-primary);
      ${$t}: var(--arc-color-bg-disabled);
      ${go}: var(--arc-color-fg-critical-mid);
    }

    &[data-variant=plain] {
      ${ra}: transparent;
      ${mt}: var(--arc-color-bg-hover-default);
      ${aa}: transparent;
      ${wt}: transparent;

      ${ft}: var(--arc-color-fg-critical-mid);
      ${yt}: transparent;
      ${go}: var(--arc-color-fg-critical-mid);

      ${gt}: var(--arc-color-fg-disabled);
      ${bt}: transparent;
      ${At}: transparent;

      ${pt}: var(--arc-color-fg-primary);
      ${$t}: var(--arc-color-bg-disabled);
      ${en}: transparent;
    }
  }

  /* STATES --------------------------------------------------------• */

  &:not(:has(
    input:read-only,
    input:disabled,
    select[data-readonly],
    select:disabled
  )) {

    &:has(select) {
      ${X}•cursor: pointer;
    }

    &:is(
      :hover,
      [data-simulate=hover]
    ) {
      ${aa}: var(--arc-input-border-color-hover, var(${wt}));
      ${ra}: var(--arc-input-background-hover, var(${mt}));
    }

    &:has([input-element=body]) {
      &:is(
        :focus-within,
        [data-simulate=focus],
        [data-simulate=active],
        :has(:focus, :focus-visible, :active)
      ) {
        ${Ki}: var(--arc-color-border-focus);
      }
    }
  }

  &:has(input:read-only, select[data-readonly]) {
    ${X}•cursor: default;
    ${Ia}: var(${pt});
    ${ra}: var(${$t});
    ${aa}: var(${en});
  }

  &:has(input:disabled, select:disabled) {
    ${X}•cursor: not-allowed;
    ${Ia}: var(${gt});
    ${ra}: var(${bt});
    ${aa}: var(${At});
    ${xt}: var(--arc-color-fg-primary);
  }

  &[data-simulate=invalid],
  &:has(
    input:user-invalid:not(:focus),
    select:user-invalid:not(:focus)
  ) {
    ${ra}: var(${yt});
    ${xt}: var(${Ia});
    ${aa}: var(${go});
    ${Yc}: var(${ft});
  }

  /* LAYOUTS -------------------------------------------------------• */

  &[data-layout=fill] { /* @default */
    ${X}•display: flex;
  }

  &[data-layout=hug] {
    ${X}•display: inline-flex;
  }

  & {
    ${X}•border: var(--arc-border-width-sm) solid var(${aa});
    ${X}•outline: var(${Wi}) solid var(${Ki}, transparent);
  }
}

[arc-input]:not([hidden]) {
  display: var(${X}•display, flex);
  flex-direction: var(${F0}, column);
  gap: var(${rn});
  color: var(--arc-input-color, var(${Ia}));

  :is([input-element=header], [input-element=footer]) {
    display: flex;
    justify-content: space-between;
    font-size: var(--arc-input-slot-font-size, var(${an}));
    gap: var(${rn});
  }

  [input-element=spacer] {
    display: safe flex-end;
  }

  [input-element=header] {
    align-items: safe flex-end;
  }

  [input-element=header-label] {
    flex: 1;
    color: var(--arc-input-header-label-color, var(${xt}));
    font-weight: var(--arc-input-header-label-font-weight, var(--arc-font-weight-600));
  }

  [input-element=header-slot] {
    color: var(--arc-input-header-slot-color, var(${Vi}));
    min-width: var(--arc-input-header-slot-min-width, fit-content);
  }

  [input-element=footer] {
    align-items: baseline;
  }

  [input-element=footer-caption] {
    flex: 1;
    color: var(--arc-input-footer-caption-color, var(${Yc}));
  }

  [input-element=footer-slot] {
    color: var(--arc-input-footer-slot-color, var(${Ui}));
    min-width: var(--arc-input-footer-slot-min-width, fit-content);
  }

  [input-element=body] {
    flex: none;
    display: flex;
    align-items: var(${Ni}, center);
    gap: var(--arc-input-gap, var(${Yi}));
    height: var(${vo});
    font-size: var(${on});

    color: var(--arc-input-color, var(${Ia}));
    background-color: var(--arc-input-background, var(${ra}));
    border: var(--arc-input-border, var(${X}•border));
    border-radius: var(--arc-input-border-radius, var(${Jc}));
    outline: var(${X}•outline, none);
    outline-offset: var(${Gi});

    transition-property: border, background, color, height;
    transition-duration: 200ms;
    transition-timing-function: ease-out;

    cursor: var(${X}•cursor, unset);

    padding-inline: var(--arc-input-padding-inline, var(${kt}));

    &:has([input-element=input-action]) {
      padding-inline-end: var(${Qc});
    }

    input {
      cursor: inherit;
      appearance: none;
      align-self: stretch;
      flex: 1;
      font: inherit;
      color: inherit;
      border: var(--arc-border-width-sm) solid transparent;
      background: transparent;
      padding: 0;
      margin: 0;
      outline: none;
      line-height: normal;
      width: var(--arc-input-width, 100%);
      min-width: var(--arc-input-min-width, 1em);
      max-width: var(--arc-input-max-width, 100%);
      text-align: var(--arc-input-text-align, unset);

      &[arc-input-type=search]::-webkit-search-cancel-button {
        appearance: none;
        display: none;
      }
    }
  }

  [input-element=input-prefix] {
    flex: none;
  }

  [input-element=input-suffix] {
    flex: none;
    opacity: var(--arc-input-suffix-opacity, var(--arc-alpha-40));
  }

  [input-element=input] {
    flex: 1;
    display: flex;
  }

  [input-element=input-action] {
    flex: none;
    cursor: inherit;
    align-self: stretch;
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      max-height: var(${X}•action•max•height, unset);
    }
  }
}

}
`,G0={onChangeHandler:O0,Wrapper:C0,Spacer:S0,Header:_0,HeaderLabel:E0,HeaderSlot:T0,InputBody:I0,InputPrefix:j0,InputSuffix:L0,InputAction:R0,Footer:P0,FooterCaption:M0,FooterSlot:B0};V("ArcInput",W0);const tr=G0,tn=R(ca,["fill","hug"]),cn=R(Er,["inherit","xl","lg","md"]),qi=R(ur,["outline","solid","plain"]),K0=tn,Z0=cn,Y0=R(qi,["outline","solid"]),q0=["text","number","password","email","url"],Ji=(0,m.forwardRef)(({layout:r="hug",size:a="inherit",variant:e="outline",inputProps:o,headerLabel:t,headerSlot:i,inputPrefix:n,inputAction:h,inputSuffix:d,footerCaption:u,footerSlot:v,...p},g)=>{const{id:f,onChange:x,...z}=o,T="arc-search"in p,j=T?"search":z?.type||"text",_=z?.disabled||void 0,E=z?.readOnly||void 0,C=z?.required||void 0,S=!!(t||i),N=!!(u||v);return(0,c.jsxs)(tr.Wrapper,{...p,"arc-text-input":"","arc-input":j,layout:r,size:a,variant:e,children:[S&&(0,c.jsxs)(tr.Header,{children:[(0,c.jsx)(tr.HeaderLabel,{htmlFor:f,children:t}),!!i&&(0,c.jsx)(tr.Spacer,{}),(0,c.jsx)(tr.HeaderSlot,{children:i})]}),(0,c.jsxs)(tr.InputBody,{children:[(0,c.jsx)(tr.InputPrefix,{htmlFor:f,children:n}),(0,c.jsx)("input",{...z,...T?{type:j}:{},ref:g,id:f,"arc-input-type":j,onChange:tr.onChangeHandler(x),"aria-disabled":_,"aria-readonly":E,"aria-required":C}),(0,c.jsx)(tr.InputSuffix,{htmlFor:f,children:d}),(0,c.jsx)(tr.InputAction,{children:h})]}),N&&(0,c.jsxs)(tr.Footer,{children:[(0,c.jsx)(tr.FooterCaption,{children:u}),!!v&&(0,c.jsx)(tr.Spacer,{}),(0,c.jsx)(tr.FooterSlot,{children:v})]})]})});var Xi=Mr(71695),yr,sr,ua,ja;function J0(r=!1){if(typeof r!="boolean")throw new Error("defaultValue must be `true` or `false`");const[a,e]=yr(r),o=sr(()=>{e(!0)},[]),t=sr(()=>{e(!1)},[]),i=sr(()=>{e(n=>!n)},[]);return{value:a,setValue:e,setTrue:o,setFalse:t,toggle:i}}var va=typeof window<"u"?m.useLayoutEffect:m.useEffect;function ea(r,a,e,o){const t=(0,m.useRef)(a);va(()=>{t.current=a},[a]),(0,m.useEffect)(()=>{const i=e?.current??window;if(!(i&&i.addEventListener))return;const n=h=>{t.current(h)};return i.addEventListener(r,n,o),()=>{i.removeEventListener(r,n,o)}},[r,e,o])}function pv(r){ea("click",a=>{r(a)})}function fv(){const[r,a]=yr(null),e=sr(async o=>{if(!navigator?.clipboard)return console.warn("Clipboard not supported"),!1;try{return await navigator.clipboard.writeText(o),a(o),!0}catch(t){return console.warn("Copy failed",t),a(null),!1}},[]);return[r,e]}function X0(r){const[a,e]=yr(r??0),o=sr(()=>{e(n=>n+1)},[]),t=sr(()=>{e(n=>n-1)},[]),i=sr(()=>{e(r??0)},[r]);return{count:a,increment:o,decrement:t,reset:i,setCount:e}}function Q0(r,a){const e=ua(r);va(()=>{e.current=r},[r]),ja(()=>{if(a===null)return;const o=setInterval(()=>{e.current()},a);return()=>{clearInterval(o)}},[a])}function mv({countStart:r,countStop:a=0,intervalMs:e=1e3,isIncrement:o=!1}){const{count:t,increment:i,decrement:n,reset:h}=X0(r),{value:d,setTrue:u,setFalse:v}=J0(!1),p=sr(()=>{v(),h()},[v,h]),g=sr(()=>{if(t===a){v();return}o?i():n()},[t,a,n,i,o,v]);return Q0(g,d?e:null),[t,{startCountdown:u,stopCountdown:v,resetCountdown:p}]}function zt(r){const a=(0,m.useRef)(()=>{throw new Error("Cannot call an event handler while rendering.")});return va(()=>{a.current=r},[r]),(0,m.useCallback)((...e)=>{var o;return(o=a.current)==null?void 0:o.call(a,...e)},[a])}var nn=typeof window>"u";function ln(r,a,e={}){const{initializeWithValue:o=!0}=e,t=(0,m.useCallback)(g=>e.serializer?e.serializer(g):JSON.stringify(g),[e]),i=(0,m.useCallback)(g=>{if(e.deserializer)return e.deserializer(g);if(g==="undefined")return;const f=a instanceof Function?a():a;let x;try{x=JSON.parse(g)}catch(z){return console.error("Error parsing JSON:",z),f}return x},[e,a]),n=(0,m.useCallback)(()=>{const g=a instanceof Function?a():a;if(nn)return g;try{const f=window.localStorage.getItem(r);return f?i(f):g}catch(f){return console.warn(`Error reading localStorage key \u201C${r}\u201D:`,f),g}},[a,r,i]),[h,d]=(0,m.useState)(()=>o?n():a instanceof Function?a():a),u=zt(g=>{nn&&console.warn(`Tried setting localStorage key \u201C${r}\u201D even though environment is not a client`);try{const f=g instanceof Function?g(n()):g;window.localStorage.setItem(r,t(f)),d(f),window.dispatchEvent(new StorageEvent("local-storage",{key:r}))}catch(f){console.warn(`Error setting localStorage key \u201C${r}\u201D:`,f)}}),v=zt(()=>{nn&&console.warn(`Tried removing localStorage key \u201C${r}\u201D even though environment is not a client`);const g=a instanceof Function?a():a;window.localStorage.removeItem(r),d(g),window.dispatchEvent(new StorageEvent("local-storage",{key:r}))});(0,m.useEffect)(()=>{d(n())},[r]);const p=(0,m.useCallback)(g=>{g.key&&g.key!==r||d(n())},[r,n]);return ea("storage",p),ea("local-storage",p),[h,u,v]}var ru=typeof window>"u";function Qi(r,{defaultValue:a=!1,initializeWithValue:e=!0}={}){const o=h=>ru?a:window.matchMedia(h).matches,[t,i]=yr(()=>e?o(r):a);function n(){i(o(r))}return va(()=>{const h=window.matchMedia(r);return n(),h.addListener?h.addListener(n):h.addEventListener("change",n),()=>{h.removeListener?h.removeListener(n):h.removeEventListener("change",n)}},[r]),t}var au="(prefers-color-scheme: dark)",eu="usehooks-ts-dark-mode";function bv(r={}){const{defaultValue:a,localStorageKey:e=eu,initializeWithValue:o=!0}=r,t=Qi(au,{initializeWithValue:o,defaultValue:a}),[i,n]=ln(e,a??t??!1,{initializeWithValue:o});return va(()=>{t!==i&&n(t)},[t]),{isDarkMode:i,toggle:()=>{n(h=>!h)},enable:()=>{n(!0)},disable:()=>{n(!1)},set:h=>{n(h)}}}function rl(r){const a=(0,m.useRef)(r);a.current=r,(0,m.useEffect)(()=>()=>{a.current()},[])}function Ct(r,a=500,e){const o=(0,m.useRef)();rl(()=>{o.current&&o.current.cancel()});const t=(0,m.useMemo)(()=>{const i=Xi(r,a,e),n=(...h)=>i(...h);return n.cancel=()=>{i.cancel()},n.isPending=()=>!!o.current,n.flush=()=>i.flush(),n},[r,a,e]);return(0,m.useEffect)(()=>{o.current=Xi(r,a,e)},[r,a,e]),t}function $v(r,a,e){const o=e?.equalityFn??((u,v)=>u===v),t=r instanceof Function?r():r,[i,n]=yr(t),h=ua(t),d=Ct(n,a,e);return o(h.current,t)||(d(t),h.current=t),[i,d]}function yv(r,a={}){const{preserveTitleOnUnmount:e=!0}=a,o=ua(null);va(()=>{o.current=window.document.title},[]),va(()=>{window.document.title=r},[r]),rl(()=>{!e&&o.current&&(window.document.title=o.current)})}function xv(r){const[a,e]=yr(!1),o=()=>{e(!0)},t=()=>{e(!1)};return ea("mouseenter",o,r),ea("mouseleave",t,r),a}function kv({threshold:r=0,root:a=null,rootMargin:e="0%",freezeOnceVisible:o=!1,initialIsIntersecting:t=!1,onChange:i}={}){var n;const[h,d]=yr(null),[u,v]=yr(()=>({isIntersecting:t,entry:void 0})),p=ua();p.current=i;const g=((n=u.entry)==null?void 0:n.isIntersecting)&&o;ja(()=>{if(!h||!("IntersectionObserver"in window)||g)return;let z;const T=new IntersectionObserver(j=>{const _=Array.isArray(T.thresholds)?T.thresholds:[T.thresholds];j.forEach(E=>{const C=E.isIntersecting&&_.some(S=>E.intersectionRatio>=S);v({isIntersecting:C,entry:E}),p.current&&p.current(C,E),C&&o&&z&&(z(),z=void 0)})},{threshold:r,root:a,rootMargin:e});return T.observe(h),()=>{T.disconnect()}},[h,JSON.stringify(r),a,e,g,o]);const f=ua(null);ja(()=>{var z;!h&&((z=u.entry)!=null&&z.target)&&!o&&!g&&f.current!==u.entry.target&&(f.current=u.entry.target,v({isIntersecting:t,entry:void 0}))},[h,u.entry,o,g,t]);const x=[d,!!u.isIntersecting,u.entry];return x.ref=x[0],x.isIntersecting=x[1],x.entry=x[2],x}function wv(){const[r,a]=yr(!1);return ja(()=>{a(!0)},[]),r}function ou(){const r=ua(!1);return ja(()=>(r.current=!0,()=>{r.current=!1}),[]),sr(()=>r.current,[])}function Av(r=new Map){const[a,e]=yr(new Map(r)),o={set:sr((t,i)=>{e(n=>{const h=new Map(n);return h.set(t,i),h})},[]),setAll:sr(t=>{e(()=>new Map(t))},[]),remove:sr(t=>{e(i=>{const n=new Map(i);return n.delete(t),n})},[]),reset:sr(()=>{e(()=>new Map)},[])};return[a,o]}function zv(r,a,e="mousedown",o={}){ea(e,t=>{const i=t.target;if(!i||!i.isConnected)return;(Array.isArray(r)?r.filter(h=>!!h.current).every(h=>h.current&&!h.current.contains(i)):r.current&&!r.current.contains(i))&&a(t)},void 0,o)}var al=typeof window>"u";function Cv(r,a={}){let{initializeWithValue:e=!0}=a;al&&(e=!1);const o=sr(d=>{if(a.deserializer)return a.deserializer(d);if(d==="undefined")return;let u;try{u=JSON.parse(d)}catch(v){return console.error("Error parsing JSON:",v),null}return u},[a]),t=sr(()=>{if(al)return null;try{const d=window.localStorage.getItem(r);return d?o(d):null}catch(d){return console.warn(`Error reading localStorage key \u201C${r}\u201D:`,d),null}},[r,o]),[i,n]=yr(()=>{if(e)return t()});ja(()=>{n(t())},[r]);const h=sr(d=>{d.key&&d.key!==r||n(t())},[r,t]);return ea("storage",h),ea("local-storage",h),i}var el={width:void 0,height:void 0};function Sv(r){const{ref:a,box:e="content-box"}=r,[{width:o,height:t},i]=yr(el),n=ou(),h=ua({...el}),d=ua(void 0);return d.current=r.onResize,ja(()=>{if(!a.current||typeof window>"u"||!("ResizeObserver"in window))return;const u=new ResizeObserver(([v])=>{const p=e==="border-box"?"borderBoxSize":e==="device-pixel-content-box"?"devicePixelContentBoxSize":"contentBoxSize",g=ol(v,p,"inlineSize"),f=ol(v,p,"blockSize");if(h.current.width!==g||h.current.height!==f){const z={width:g,height:f};h.current.width=g,h.current.height=f,d.current?d.current(z):n()&&i(z)}});return u.observe(a.current,{box:e}),()=>{u.disconnect()}},[e,a,n]),{width:o,height:t}}function ol(r,a,e){return r[a]?Array.isArray(r[a])?r[a][0][e]:r[a][e]:a==="contentBoxSize"?r.contentRect[e==="inlineSize"?"width":"height"]:void 0}var tl=typeof window>"u";function _v(r={}){let{initializeWithValue:a=!0}=r;tl&&(a=!1);const e=()=>{if(!tl)return window.screen},[o,t]=yr(()=>{if(a)return e()}),i=Ct(t,r.debounceDelay);function n(){const h=e(),d=r.debounceDelay?i:t;if(h){const{width:u,height:v,availHeight:p,availWidth:g,colorDepth:f,orientation:x,pixelDepth:z}=h;d({width:u,height:v,availHeight:p,availWidth:g,colorDepth:f,orientation:x,pixelDepth:z})}}return ea("resize",n),va(()=>{n()},[]),o}var St=new Map;function tu(r){const a=document.querySelector(`script[src="${r}"]`),e=a?.getAttribute("data-status");return{node:a,status:e}}function Ev(r,a){const[e,o]=yr(()=>!r||a?.shouldPreventLoad?"idle":typeof window>"u"?"loading":St.get(r)??"loading");return ja(()=>{if(!r||a?.shouldPreventLoad)return;const t=St.get(r);if(t==="ready"||t==="error"){o(t);return}const i=tu(r);let n=i.node;if(n)o(i.status??t??"loading");else{n=document.createElement("script"),n.src=r,n.async=!0,a?.id&&(n.id=a.id),n.setAttribute("data-status","loading"),document.body.appendChild(n);const d=u=>{const v=u.type==="load"?"ready":"error";n?.setAttribute("data-status",v)};n.addEventListener("load",d),n.addEventListener("error",d)}const h=d=>{const u=d.type==="load"?"ready":"error";o(u),St.set(r,u)};return n.addEventListener("load",h),n.addEventListener("error",h),()=>{n&&(n.removeEventListener("load",h),n.removeEventListener("error",h)),n&&a?.removeOnUnmount&&(n.remove(),St.delete(r))}},[r,a?.shouldPreventLoad,a?.removeOnUnmount,a?.id]),e}var cu=typeof window>"u";function Tv(r={}){const{autoLock:a=!0,lockTarget:e,widthReflow:o=!0}=r,[t,i]=yr(!1),n=ua(null),h=ua(null),d=()=>{if(n.current){const{overflow:v,paddingRight:p}=n.current.style;if(h.current={overflow:v,paddingRight:p},o){const g=n.current===document.body?window.innerWidth:n.current.offsetWidth,f=parseInt(window.getComputedStyle(n.current).paddingRight,10)||0,x=g-n.current.scrollWidth;n.current.style.paddingRight=`${x+f}px`}n.current.style.overflow="hidden",i(!0)}},u=()=>{n.current&&h.current&&(n.current.style.overflow=h.current.overflow,o&&(n.current.style.paddingRight=h.current.paddingRight)),i(!1)};return va(()=>{if(!cu)return e&&(n.current=typeof e=="string"?document.querySelector(e):e),n.current||(n.current=document.body),a&&d(),()=>{u()}},[a,e,o]),{isLocked:t,lock:d,unlock:u}}var sn=typeof window>"u";function nu(r,a,e={}){const{initializeWithValue:o=!0}=e,t=(0,m.useCallback)(g=>e.serializer?e.serializer(g):JSON.stringify(g),[e]),i=(0,m.useCallback)(g=>{if(e.deserializer)return e.deserializer(g);if(g==="undefined")return;const f=a instanceof Function?a():a;let x;try{x=JSON.parse(g)}catch(z){return console.error("Error parsing JSON:",z),f}return x},[e,a]),n=(0,m.useCallback)(()=>{const g=a instanceof Function?a():a;if(sn)return g;try{const f=window.sessionStorage.getItem(r);return f?i(f):g}catch(f){return console.warn(`Error reading sessionStorage key \u201C${r}\u201D:`,f),g}},[a,r,i]),[h,d]=(0,m.useState)(()=>o?n():a instanceof Function?a():a),u=zt(g=>{sn&&console.warn(`Tried setting sessionStorage key \u201C${r}\u201D even though environment is not a client`);try{const f=g instanceof Function?g(n()):g;window.sessionStorage.setItem(r,t(f)),d(f),window.dispatchEvent(new StorageEvent("session-storage",{key:r}))}catch(f){console.warn(`Error setting sessionStorage key \u201C${r}\u201D:`,f)}}),v=zt(()=>{sn&&console.warn(`Tried removing sessionStorage key \u201C${r}\u201D even though environment is not a client`);const g=a instanceof Function?a():a;window.sessionStorage.removeItem(r),d(g),window.dispatchEvent(new StorageEvent("session-storage",{key:r}))});(0,m.useEffect)(()=>{d(n())},[r]);const p=(0,m.useCallback)(g=>{g.key&&g.key!==r||d(n())},[r,n]);return ea("storage",p),ea("session-storage",p),[h,u,v]}function Iv(r){const[a,e]=yr(1),o=a+1<=r,t=a-1>0,i=sr(u=>{const v=u instanceof Function?u(a):u;if(v>=1&&v<=r){e(v);return}throw new Error("Step not valid")},[r,a]),n=sr(()=>{o&&e(u=>u+1)},[o]),h=sr(()=>{t&&e(u=>u-1)},[t]),d=sr(()=>{e(1)},[]);return[a,{goToNextStep:n,goToPrevStep:h,canGoToNextStep:o,canGoToPrevStep:t,setStep:i,reset:d}]}var iu="(prefers-color-scheme: dark)",lu="usehooks-ts-ternary-dark-mode";function jv({defaultValue:r="system",localStorageKey:a=lu,initializeWithValue:e=!0}={}){const o=Qi(iu,{initializeWithValue:e}),[t,i]=ln(a,r,{initializeWithValue:e});return{isDarkMode:t==="dark"||t==="system"&&o,ternaryDarkMode:t,setTernaryDarkMode:i,toggleTernaryDarkMode:()=>{const d=["light","system","dark"];i(u=>{const v=(d.indexOf(u)+1)%d.length;return d[v]})}}}function Lv(r,a){const e=ua(r);va(()=>{e.current=r},[r]),ja(()=>{if(!a&&a!==0)return;const o=setTimeout(()=>{e.current()},a);return()=>{clearTimeout(o)}},[a])}function Rv(r){const[a,e]=yr(!!r),o=sr(()=>{e(t=>!t)},[]);return[a,o,e]}var su=typeof window>"u";function Pv(r={}){let{initializeWithValue:a=!0}=r;su&&(a=!1);const[e,o]=yr(()=>a?{width:window.innerWidth,height:window.innerHeight}:{width:void 0,height:void 0}),t=Ct(o,r.debounceDelay);function i(){(r.debounceDelay?t:o)({width:window.innerWidth,height:window.innerHeight})}return ea("resize",i),va(()=>{i()},[]),e}const du=(r,a)=>{const e=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"value")?.set;e?e.call(r,a):r.value=a,r.dispatchEvent(new Event("input",{bubbles:!0}))},hu=({defaultValue:r="",value:a,debounceMs:e,inputElementRef:o,onClear:t,onKeyDown:i,onSearch:n})=>{const h=a!==void 0,d=n!==void 0&&e!==void 0,[u,v]=(0,m.useState)(r),p=h?a??"":u,g=(0,m.useRef)(!1),f=Ct(_=>{n?.(_)},e??0),x=(0,m.useCallback)(()=>{f.cancel()},[f]),z=(0,m.useCallback)(_=>{h||v(_)},[h]);(0,m.useEffect)(()=>x,[x]),(0,m.useEffect)(()=>{if(d){if(!g.current){g.current=!0;return}x(),f(p)}},[x,f,p,d]);const T=(0,m.useCallback)(()=>{x();const _=o.current;if(_){du(_,""),t?.(),_.focus();return}h||v(""),t?.()},[x,o,h,t]),j=(0,m.useCallback)(_=>{i?.(_),!(_.defaultPrevented||_.key!=="Enter"||!n)&&(x(),n(p))},[x,i,n,p]);return{resolvedValue:p,handleValueChange:z,handleClear:T,handleKeyDown:j}},uu=tn,vu=cn,gu=R(qi,["outline","solid"]),cl="Search",pu="Clear search",dn={layout:"hug",size:"inherit",variant:"outline"},fu=({canClear:r,isDisabled:a,onClear:e})=>{if(r)return(0,c.jsx)(Ii,{"aria-label":pu,disabled:a,icon:"fa-regular fa-xmark",onClick:e})},mu=({ariaLabel:r,ariaLabelledBy:a,headerLabel:e})=>r??(!e&&!a?cl:void 0),nl=(0,m.forwardRef)(({debounceMs:r,inputProps:a,layout:e=dn.layout,onClear:o,onSearch:t,size:i=dn.size,variant:n=dn.variant,headerLabel:h,headerSlot:d,footerCaption:u,footerSlot:v,onChange:p,...g},f)=>{const{id:x,value:z,defaultValue:T="",onChange:j,onKeyDown:_,placeholder:E=cl,disabled:C,readOnly:S,required:N,"aria-label":B,"aria-labelledby":Y,...G}=a,H=Wr(x,"arc-search"),dr=(0,m.useRef)(null),{resolvedValue:K,handleValueChange:cr,handleClear:ar,handleKeyDown:Fr}=hu({defaultValue:T,value:z,debounceMs:r,inputElementRef:dr,onClear:o,onKeyDown:_,onSearch:t}),hr=!C&&!S&&K.length>0,Zr=mu({ariaLabel:B,ariaLabelledBy:Y,headerLabel:h}),rr=fu({canClear:hr,isDisabled:C,onClear:ar}),_r=wr=>{dr.current=wr,fa(f,wr)},oa=(wr,Yr)=>{cr(Yr.target.value),j?.(wr,Yr)};return(0,c.jsx)(Ji,{...g,"arc-search":"",layout:e,size:i,variant:n,ref:_r,onChange:p,headerLabel:h,headerSlot:d,inputPrefix:(0,c.jsx)(O,{icon:"fa-regular fa-search"}),inputAction:rr,footerCaption:u,footerSlot:v,inputProps:{...G,id:H,value:K,disabled:C,placeholder:E,readOnly:S,required:N,onChange:oa,onKeyDown:Fr,"aria-disabled":C||void 0,"aria-label":Zr,"aria-labelledby":Y,"aria-readonly":S||void 0,"aria-required":N||void 0}})});nl.displayName="ArcSearch";const bu=tn,$u=cn,yu=R(ur,["outline","solid","plain"]),il=l`--arc•select`,Nr=l`${il}•picker`,ll=l`${Nr}•fg`,sl=l`${Nr}•bg`,hn=l`${il}•option`,_t=l`${hn}•fg`,Et=l`${hn}•bg`,Se=l`${hn}•icon`,xu=l`
  ${ll}: currentcolor;
  ${sl}: var(--arc-color-bg-mono);

  ${Nr}•width: auto;
  ${Nr}•min•width: 3em;
  ${Nr}•border•radius: var(--arc-border-radius-lg);
  ${Nr}•shadow: var(--arc-shadow-lg);

  ${_t}: currentcolor;
  ${Et}: transparent;

  ${Se}•display: none;
  ${Se}•color: var(${_t});
`,ku=l`
  &[data-layout=fill] {
    ${Nr}•width: 100%; /* fallback */
    ${Nr}•width: anchor-size(inline);
  }
`,wu=l`
  [arc-select] ::picker(select) {
    transition-behavior: allow-discrete, smooth;
    transition-duration: var(--arc-select-transition-duration, 240ms);
    transition-property: display, opacity;
    transition-timing-function: ease-out;
  }

  @supports (overlay: auto) {
    [arc-select] ::picker(select) {
      transition-behavior: allow-discrete;
      transition-property: display, overlay, opacity;
    }
  }
`,Au=l`
  [arc-select] {
    ::picker(select) {
      opacity: 0;
    }

    ::picker(select):popover-open {
      opacity: 1;
    }
  }

  @starting-style {
    [arc-select] ::picker(select):popover-open {
      opacity: 0;
    }
  }
`,zu=l`
@layer arc-components {

  /* SETUP ---------------------------------------------------------• */

  [arc-select] {
    ${xu}
    ${ku}
  }

  /* CORE ----------------------------------------------------------• */

  [arc-select] {
    select,
    ::picker(select) {
      appearance: base-select;
    }

    ::picker(select) {
      flex: 1;
      display: var(${Nr}•display, none);
      flex-direction: column;
      gap: var(${b}•4);
      border: none;
      color: var(${ll});
      width: var(--arc-select-picker-width, var(${Nr}•width));
      min-width: var(--arc-select-picker-min-width, var(${Nr}•min•width));
      margin: var(--arc-select-picker-margin, var(${b}•4) 0);
      padding: var(--arc-select-picker-padding, var(${b}•4));
      background: var(--arc-select-picker-background, var(${sl}));
      border-radius: var(--arc-select-picker-border-radius, var(${Nr}•border•radius));
      box-shadow: var(--arc-select-picker-shadow, var(${Nr}•shadow));
    }

    ::picker(select):popover-open {
      ${Nr}•display: flex;
    }

    /* Hide default picker icon */
    ::picker-icon {
      display: none;
    }

    select {
      flex: 1;
      align-items: center;
      font: inherit;
      color: inherit;
      background: transparent;
      border: none;
      padding: 0;
      margin: 0;
      padding-inline: var(${s}•12);
    }

    [arc-select-button] {
      display: flex;
      align-items: center;
      gap: var(${b}•8);
      width: 100%;
    }

    selectedcontent {
      /* Inter-Component Communication -----------------------------• */
      --arc-icon-text-font-weight: normal;
      --arc-icon-text-subtext-display: none;
      --arc-avatar-text-font-weight: normal;
      --arc-avatar-subtext-display: none;
      --arc-avatar-size: var(${s}•24);
      --arc-avatar-initial-font-size: var(${s}•12);

      flex: 1;
      display: flex;
      align-items: center;
      width: 100%;
      min-width: 0;

      [data-element=selected-icon] {
        display: none;
      }
    }

    [arc-select-option] {
      flex: none;
      display: grid;
      grid-template-columns: 1fr auto;
      align-items: center;
      gap: var(${b}•8);
      width: 100%;
      min-width: 0;

      color: var(${_t});
      background: var(--arc-select-option-background, var(${Et}));
      border-radius: var(--arc-select-option-border-radius, var(--arc-border-radius-md));
      padding: var(--arc-select-option-padding, var(${b}•8));

      &::checkmark {
        display: none;
      }

      &:hover {
        ${Et}: var(--arc-color-bg-hover-default);
      }

      &:checked {
        ${Et}: var(--arc-color-bg-selected-default);
        ${Se}•display: flex;
        ${Se}•color: var(--arc-select-option-selected-icon-color, var(${_t}));
      }

      [data-element=selected-icon] {
        display: var(${Se}•display, none);
        color: var(${Se}•color, currentcolor);
      }
    }

    @supports not (appearance: base-select) {
      select {
        appearance: none;
        background: transparent;
        outline: none;

        /* caret */
        background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 11'><polyline points='1 1 10 10 19 1' fill='none' stroke='%23000000' stroke-width='2.5' stroke-linecap='round' /></svg>");
        background-repeat: no-repeat;
        background-size: 0.75em;
        background-origin: padding-box;
        background-position: calc(100% - 1em) center;
        padding-inline-end: 3em;
      }
    }
  }

  ${wu}
  ${Au}

}
`,Cu=(0,m.forwardRef)(({layout:r="hug",size:a="inherit",variant:e="outline",items:o,renderItem:t,headerLabel:i,headerSlot:n,footerCaption:h,footerSlot:d,readOnly:u,id:v,onChange:p,onBlur:g,onFocus:f,onKeyDown:x,onKeyUp:z,onInput:T,onInvalid:j,onClick:_,name:E,value:C,defaultValue:S,required:N,disabled:B,autoComplete:Y,autoFocus:G,form:H,...dr},K)=>{const cr=Wr(v,"arc-select"),ar=e==="plain"&&r==="fill"?"hug":r,Fr=B||void 0,hr=u||void 0,Zr=N||void 0,rr=!!(globalThis?.CSS&&typeof CSS.supports=="function"&&CSS.supports("appearance","base-select")),_r=e!=="plain"&&!!(i||n),oa=e!=="plain"&&!!(h||d),wr=o?.filter(W=>W?.variant!=="divider"&&W?.variant!=="section-label")??[],Yr=W=>{const vr=er=>typeof er=="string"&&er.trim().length>0;return[W?.text,W?.avatar?.name,W?.["aria-label"]].find(vr)??"Anonymous"},Ua=(W,vr)=>{if(t)return t(W,vr);const Vr=to(W),er=_i(Vr),{itemId:Ra,...ga}=W;return er(ga)},ta=hr&&(C!=null||S!=null)?String(C??S):void 0;return(0,c.jsxs)(tr.Wrapper,{...dr,"arc-select":"","arc-input":"select",layout:ar,size:a,variant:e,children:[_r&&(0,c.jsxs)(tr.Header,{children:[(0,c.jsx)(tr.HeaderLabel,{htmlFor:cr,children:i}),!!n&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(tr.Spacer,{}),(0,c.jsx)(tr.HeaderSlot,{children:n})]})]}),(0,c.jsx)(tr.InputBody,{children:(0,c.jsxs)("select",{name:E,value:C,defaultValue:S,required:N,disabled:B,autoComplete:Y,autoFocus:G,form:H,ref:K,id:cr,onChange:p,onBlur:g,onFocus:f,onKeyDown:x,onKeyUp:z,onInput:T,onInvalid:j,onClick:_,"aria-disabled":Fr,"aria-required":Zr,"data-readonly":hr,children:[(0,c.jsxs)("button",{children:[(0,c.jsx)("selectedcontent",{}),(0,c.jsx)("span",{"data-element":"picker-icon","aria-hidden":!0,children:(0,c.jsx)(O,{icon:"fa-regular fa-angle-down arc-fw"})})]}),wr.map((W,vr)=>{const Vr=W["aria-disabled"]===!0||W.disabled===!0,er=String(W?.value??W?.itemId??vr),Ra=to(W),ga=Yr(W);return(0,c.jsx)("option",{value:er,disabled:Vr||ta!==void 0&&er!==ta||void 0,"arc-select-option":"","arc-select-option-role":Ra,children:rr?(0,c.jsxs)(c.Fragment,{children:[Ua(W,vr),(0,c.jsx)("span",{"data-element":"selected-icon","aria-hidden":!0,children:(0,c.jsx)(O,{icon:"fa-regular fa-check arc-fw"})})]}):ga},W.itemId??vr)})]})}),oa&&(0,c.jsxs)(tr.Footer,{children:[(0,c.jsx)(tr.FooterCaption,{children:h}),!!d&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(tr.Spacer,{}),(0,c.jsx)(tr.FooterSlot,{children:d})]})]})]})});V("ArcSelect",zu);const Su=R(Er,["inherit","md","sm"]),xr={On:"on",Off:"off"},_e={Before:"before",After:"after"},_u=({disabled:r,id:a,name:e,size:o="md",value:t,labelOff:i,labelOn:n,onChange:h,...d})=>{const u=Wr(e,"arc-switch-name"),v=Wr(a?`${a}-off`:void 0,"arc-switch-off"),p=Wr(a?`${a}-on`:void 0,"arc-switch-on"),g=_=>{if(_.code==="Space"){_.preventDefault(),_.stopPropagation();const E=t===xr.On?xr.Off:xr.On;h?.({value:E},_)}},f=_=>{const E={on:Ve(n),off:Ve(i)};return E?.on&&E?.off?E[_]:!E?.on&&E?.off?`${E?.off}: ${_}`:E?.on&&!E?.off?`${E?.on}: ${_}`:E[_]},x=(0,c.jsxs)(st,{type:"switch",onKeyDown:g,children:[(0,c.jsx)(oo,{type:"switch",name:u,id:v,value:xr.Off,checked:t===xr.Off,disabled:r,"aria-label":f(xr.Off)?.trim(),onChange:h}),(0,c.jsx)(oo,{type:"switch",name:u,id:p,value:xr.On,checked:t===xr.On,disabled:r,"aria-label":f(xr.On)?.trim(),onChange:h}),(0,c.jsx)("span",{"data-element":"mask"})]}),z=!n&&t===xr.Off?p:v,T=!i&&t===xr.On?v:p,j=!!(n||i)&&(0,c.jsxs)(c.Fragment,{children:[!!i&&(0,c.jsx)(ce,{htmlFor:z,"arc-switch-label":n?xr.Off:"",children:(0,c.jsx)(ne,{children:i})}),x,!!n&&(0,c.jsx)(ce,{htmlFor:T,"arc-switch-label":i?xr.On:"",children:(0,c.jsx)(ne,{children:n})})]});return(0,c.jsx)("span",{...d,"arc-switch":"","data-state":t,"data-size":o,role:"radiogroup",children:j||x})},pr=l`--arc•switch`,Q=l`${pr}•knob`,Eu=l`
@layer arc-components {

  [arc-switch] {
    ${pr}•background: var(--arc-color-alpha-white-100);
    ${Q}•shadow: var(--arc-shadow-md);

    &:has(:disabled) {
      ${pr}•background: var(--arc-color-alpha-white-70);
      ${Q}•shadow: var(--arc-shadow-none);

      [arc-switch-label] {
        --arc-label-cursor: not-allowed;
        --arc-label-opacity: var(--arc-alpha-60);
      }
    }

    /* Uses Neutral-ish Colors */
    &[data-state=off] {
      ${k}•background: var(--arc-color-bg-neutral-subtle);
      ${k}•border•color: var(--arc-color-border-stark);
      ${Q}•border•color: var(--arc-color-border-on-stark);
      ${Q}•color: var(--arc-color-fg-on-heavy);

      &:not(:has(:disabled)):hover {
        ${k}•border•color: var(--arc-color-border-heavy);
        ${Q}•border•color: var(--arc-color-border-heavy);
      }

      &:has(:disabled) {
        ${k}•background: var(--arc-color-bg-disabled);
        ${k}•border•color: var(--arc-color-border-disabled);
        ${Q}•border•color: var(--arc-color-border-on-stark);
        ${Q}•color: var(--arc-color-bg-tertiary);
      }
    }

    /* Uses Theme Colors */
    &[data-state=on] {
      ${k}•background: var(--arc-color-bg-theme-heavy);
      ${k}•border•color: var(--arc-color-border-theme-heavy);
      ${Q}•border•color: var(--arc-color-border-theme-heavy);
      ${Q}•color: var(--arc-color-fg-on-theme-heavy);

      &:not(:has(:disabled)):hover {
        ${k}•opacity: var(--arc-alpha-60);
      }

      &:has(:disabled) {
        ${k}•opacity: var(--arc-alpha-30);
      }
    }

    /* SIZES  ------------------------------------------------------• */
    &[data-size=inherit] {
      ${pr}•font•size: 1em;
      ${pr}•width: 2.5em;
      ${pr}•height: 1.5em;
      ${pr}•gap: 0.5em;
      ${Q}•size: 1.5em;
      ${Q}•x•shift: 0.25em;
    }

    &[data-size=md] { /* @default */
      ${pr}•font•size: var(${s}•14);
      ${pr}•width: var(${s}•40);
      ${pr}•height: var(${s}•24);
      ${pr}•gap: var(${s}•8);
      ${Q}•x•shift: var(${s}•4);
      ${Q}•size: var(${s}•24);
    }

    &[data-size=sm] {
      ${pr}•font•size: var(${s}•12);
      ${pr}•width: var(${s}•30);
      ${pr}•height: var(${s}•14);
      ${pr}•gap: var(${s}•8);
      ${Q}•x•shift: var(${s}•1);
      ${Q}•size: var(${s}•16);
    }

    /* Inter-Component Communication -------------------------------• */
    /* for: Setup defaults for ArcBooleanInputMask */
    ${k}•border•radius: var(--arc-border-radius-pill);
    ${k}•width: var(${pr}•width);
    ${k}•height: var(${pr}•height);
    ${k}•x•shift: var(${Q}•x•shift);
    ${k}•size: var(${Q}•size);

    /* for: ArcLabel */
    --arc-label-align-items: stretch; /* ArcLabel • this allows the mask to
                                                    stay inline with the label text
                                                    regardless of applied line-height */

    /* KNOB PLACEMENT ----------------------------------------------• */
    &[data-state=off] {
      ${Q}•translate: calc(-100% + var(${Q}•x•shift)) -50%;
    }

    &[data-state=on] {
      ${Q}•translate: calc(0% - var(${Q}•x•shift)) -50%;
    }
  }

  /* CORE STYLES ---------------------------------------------------• */
  [arc-switch]:not([hidden]) {
    font-size: var(--arc-switch-font-size, var(${pr}•font•size));
    display: var(--arc-switch-display, inline-flex);
    align-items:  var(--arc-switch-align-items, center);
    gap: var(--arc-switch-gap, var(${pr}•gap));
    user-select: none;

    [arc-switch-label] {
      font-size: inherit;
      hyphens: auto;
    }

    [arc-input-type=switch]:where(:not(:checked)) {
      ${k}•z•index: 1;
    }

    [arc-input-mask-wrapper] {
      height: 1.25em;
    }

    /* the knob */
    [data-element=mask] {
      position: absolute;
      top: 50%;
      left: 50%;
      translate: var(${Q}•translate);

      display: inline-flex;
      width: var(${Q}•size);
      height: var(${Q}•size);

      transition-duration: 100ms;
      transition-behavior: allow-discrete;
      transition-timing-function: ease-in-out;
      transition-property:
        opacity,
        background,
        color,
        border-color,
        outline,
        translate;

      background: var(${Q}•color);
      box-shadow: var(${Q}•shadow);
      border: var(${k}•border•width) solid var(${Q}•border•color);
      border-radius: var(--arc-border-radius-circle);
      pointer-events: none;
    }
  }

}
`,Tu=({disabled:r,id:a,name:e,size:o="md",value:t,label:i,labelPosition:n=_e.After,onChange:h,labelOff:d,labelOn:u,...v})=>{const p=Wr(e,"arc-switch-name"),g=Wr(a,"arc-switch"),f=(T,j)=>{const _=T.checked?xr.On:xr.Off;h?.({...T,value:_},j)};!i&&(u||d)&&(i=u||d,n=u?_e.After:_e.Before);const x=(0,c.jsxs)(st,{type:"checkbox",children:[(0,c.jsx)(oo,{type:"checkbox",name:p,id:g,checked:t===xr.On,disabled:r,role:"switch","aria-checked":t===xr.On,"aria-label":i?void 0:"Toggle switch",tabIndex:0,onChange:f}),(0,c.jsx)("span",{"data-element":"mask","aria-hidden":"true",tabIndex:-1})]}),z=(0,c.jsx)(ce,{htmlFor:g,"arc-switch-label":n,children:(0,c.jsx)(ne,{children:i})});return d&&u?(0,c.jsx)(_u,{...v,disabled:r,id:a,name:e,labelOff:d,labelOn:u,size:o,value:t,onChange:h}):(0,c.jsxs)("span",{...v,"arc-switch":"","data-state":t,"data-size":o,"data-label-position":n,role:"presentation","aria-live":"off",children:[i&&n===_e.Before&&z,x,i&&n===_e.After&&z]})};V("ArcSwitch",Eu);const Iu=["title","heading","subheading","body"],dl=["h1","h2","h3","h4","h5","h6"],hl=["code","div","li","p","pre","span"],ul=[...dl,...hl],ju=[...Ba],Lu=["title-inherit","title-lg","title-md","title-sm"],Ru=["heading-inherit","heading-lg","heading-md","heading-sm"],Pu=["subheading-inherit","subheading-lg","subheading-md","subheading-sm"],Mu=R(ur,["inherit","primary","primary-inverse"]),Bu=["body-inherit","body-lg","body-md","body-sm","body-xs"],Ou=Tr(ur,["inherit","primary","secondary","primary-inverse","secondary-inverse","critical","warning","success","info"]),Du=R(Co,["inherit","start","center","justify","end"]),Nu=R(So,["inherit","loose","standard","tight"]),Fu={h1:"title",h2:"heading",h3:"heading",h4:"subheading",h5:"subheading",h6:"subheading",p:"body",span:"body",div:"body",code:"body",pre:"body",li:"body"},Vu=r=>{const{align:a,lineHeight:e,size:o,variant:t,scheme:i="auto",isMonospace:n,tag:h,...d}=r,u=Fu?.[h]??"body",v=o?.includes("inherit")?o?.split("-")?.[0]:o,p=t?.endsWith("-inverse");let g;return i!=="auto"?g=i:p&&(g=void 0),{...d,"arc-text":v||u,"arc-scheme":g,"data-is-monospace":n?"":void 0,"data-align":a?.includes("inherit")?void 0:a,"data-variant":t?.includes("inherit")?void 0:t,"data-line-height":e?.includes("inherit")?void 0:e}},La=l`--arc•text`,un=l`${La}•font`,Ee=l`${La}•align`,xa=l`${La}fg`,vl=l`${La}•flex`,gl=l`${La}•hyphens`,po=l`${La}•letterspacing`,ka=l`${La}•lineheight`,pl=l`${La}•opacity`,fl=l`${La}•whitespace`,le=l`${un}•family`,gr=l`${un}•size`,Te=l`${un}•weight`,Hu=l`
@layer arc-components {

[arc-text] {
  /* SETUP ---------------------------------------------------------• */
  ${Ee}: unset;
  ${xa}: unset;
  ${vl}: unset;
  ${gl}: auto;
  ${po}: unset;
  ${ka}: unset;
  ${pl}: unset;
  ${fl}: unset;

  ${le}: unset;
  ${gr}: unset;
  ${Te}: unset;

  /* LINE HEIGHT ---------------------------------------------------• */

  &[data-line-height=standard] {
    ${ka}: var(--arc-line-height-standard);
  }

  &[data-line-height=loose] {
    ${ka}: var(--arc-line-height-loose);
  }

  &[data-line-height=tight] {
    ${ka}: var(--arc-line-height-tight);
  }

  /* ALIGNMENT -----------------------------------------------------• */

  &[data-align=start] {
    ${Ee}: start;
  }

  &[data-align=center] {
    ${Ee}: center;
  }

  &[data-align=justify] {
    ${Ee}: justify;
  }

  &[data-align=end] {
    ${Ee}: end;
  }

  /* VARIANTS ------------------------------------------------------• */

  &[data-variant=primary] {
    ${xa}: var(--arc-color-fg-primary);
  }

  /* @deprecated */
  &[data-variant=primary-inverse] {
    ${xa}: var(--arc-color-fg-on-mono-inverse);
  }

  &[data-variant=secondary] {
    ${xa}: var(--arc-color-fg-secondary);
  }

  /* @deprecated - 61.2% is the opacity equivalent of the secondary-text color token's gray value. */
  &[data-variant=secondary-inverse] {
    ${xa}: color-mix(in srgb, var(--arc-color-fg-on-mono-inverse) 61.2%, transparent);
  }

  &[data-variant=critical] {
    ${xa}: var(--arc-color-fg-critical-mid);
  }

  &[data-variant=warning] {
    ${xa}: var(--arc-color-fg-warning-stark);
  }

  &[data-variant=success] {
    ${xa}: var(--arc-color-fg-success-stark);
  }

  &[data-variant=info] {
    ${xa}: var(--arc-color-fg-info-stark);
  }

}

/* FONT PROPERTIES -------------------------------------------------• */

[arc-text^=title] {
  ${le}: var(--arc-font-family-title);
  ${Te}: var(--arc-font-weight-title);
  ${po}: var(--arc-letter-spacing-title);
  ${ka}: var(--arc-line-height-title);

  ${gr}: 2em; /* @default title • 32÷16*1em • same as 'title-md' @ 100% */

  &:where([arc-text*=-lg]) {
    ${gr}: var(--arc-font-size-title-lg);
  }

  &:where([arc-text*=-md]) {
    ${gr}: var(--arc-font-size-title-md);
  }

  &:where([arc-text*=-sm]) {
    ${gr}: var(--arc-font-size-title-sm);
  }
}

[arc-text^=heading] {
  ${le}: var(--arc-font-family-heading);
  ${Te}: var(--arc-font-weight-heading);
  ${po}: var(--arc-letter-spacing-heading);
  ${ka}: var(--arc-line-height-heading);

  ${gr}: 1.25em; /* @default heading • 20÷16*1em • same as 'heading-md' @ 100% */

  &:where([arc-text*=-lg]) {
    ${gr}: var(--arc-font-size-heading-lg);
  }

  &:where([arc-text*=-md]) {
    ${gr}: var(--arc-font-size-heading-md);
  }

  &:where([arc-text*=-sm]) {
    ${gr}: var(--arc-font-size-heading-sm);
  }
}

[arc-text^=subheading] {
  ${le}: var(--arc-font-family-subheading);
  ${Te}: var(--arc-font-weight-subheading);
  ${po}: unset;
  ${ka}: var(--arc-line-height-subheading);

  ${gr}: 0.875em; /* @default subheading • 14÷16*1em • same as 'subheading-md' @ 100% */

  &:where([arc-text*=-lg]) {
    ${gr}: var(--arc-font-size-subheading-lg);
  }

  &:where([arc-text*=-md]) {
    ${gr}: var(--arc-font-size-subheading-md);
  }

  &:where([arc-text*=-sm]) {
    ${gr}: var(--arc-font-size-subheading-sm);
  }
}

[arc-text^=body] {
  ${le}: var(--arc-font-family-body);
  ${Te}: var(--arc-font-weight-body);
  ${ka}: var(--arc-line-height-body);
  ${gr}: 0.875em; /* @default body • 14÷16*1em • same as 'body-md' @ 100% */

  &:where([arc-text*=-lg]) {
    ${gr}: var(--arc-font-size-body-lg);
  }

  &:where([arc-text*=-md]) {
    ${gr}: var(--arc-font-size-body-md);
  }

  &:where([arc-text*=-sm]) {
    ${gr}: var(--arc-font-size-body-sm);
  }

  &:where([arc-text*=-xs]) {
    ${gr}: var(--arc-font-size-body-xs);
  }
}

[arc-text]:where(pre, code) {
  ${gr}: 1em;
}

[arc-text]:where(pre, code, [data-is-monospace]) {
  ${le}: var(--arc-font-family-mono);
  ${ka}: var(--arc-line-height-mono);
}


/* CORE STYLES -----------------------------------------------------• */

[arc-text] {
  /* conveniences for element properties */
  flex: var(--arc-text-flex, var(${vl}));
  hyphens: var(--arc-text-hyphens, var(${gl})); /* not unset as fallback so text-breaks by default */
  opacity: var(--arc-text-opacity, var(${pl}));
  text-align: var(--arc-text-align, var(${Ee}));
  white-space: var(--arc-text-white-space, var(${fl}));

  color: var(--arc-text-color, var(${xa}));

  font-size: var(--arc-text-font-size, var(${gr}));
  font-family: var(--arc-text-font-family, var(${le}));
  font-weight: var(--arc-text-font-weight, var(${Te}));
  line-height: var(--arc-text-line-height, var(${ka}));
  letter-spacing: var(--arc-text-letter-spacing, var(${po}));

  font-variation-settings: var(--arc-font-variation-settings, var(--arc-internal-font-vs));
}

}
`,Uu=r=>(0,m.forwardRef)((a,e)=>(0,m.createElement)(r,{...Vu({...a,tag:r}),ref:e})),Wu=[...ul].reduce((r,a)=>({...r,[a]:Uu(a)}),{});V("Arc",Hu);const Gu=R(ur,["common","ai","critical"]),ml=[...Ba],bl=["default","success","warning","error"],$l=R(Er,["inherit","md"]),yl=R(ur,["common"]),xl=[...Ka],Ku=[...ue],kl=["top-left","top-center","top-right","center","bottom-left","bottom-center","bottom-right"],Zu=Gu.filter(r=>r!=="critical"),wl={size:$l[1],variant:yl[0],scheme:ml[2],popover:xl[2],placement:kl[4],severity:bl[0],showDismiss:!0},Al=(r,a="toggle")=>{const e=document.getElementById(r);({toggle:()=>e?.togglePopover(),show:()=>e?.showPopover(),hide:()=>e?.hidePopover()})[a]()},zl=l`--arc•progress`,Yu=l`${zl}•bar`,qu=l`${zl}•value`,Cl=l`${Yu}•bg`,fo=l`${qu}•bg`,Ju=l`
@layer arc-components {
[arc-progress-bar] {
  ${Cl}: var(--arc-color-alpha-subtle);
  ${fo}: var(--arc-color-bg-brand-stark);

  &[data-variant=ai] {
    /* @note - arc-gradient-ai-200 is not a horizontal gradient, and the light/dark values are not correct for this case */
    ${fo}: linear-gradient(to right, #9c15ff, #1eb4fb);
  }

  &[data-variant=critical] {
    ${fo}: var(--arc-color-bg-critical-mid);
  }
}

[arc-progress-bar] {
  appearance: none;
  width: 100%;
  height: var(${s}•8);

  /* firefox needs these at this level, other browsers can use these too */
  background: var(--arc-progress-bar-background, var(${Cl}));
  border-radius: var(--arc-border-radius-pill);
  border: none;

  /* turn off the default bar background for other browsers */
  &::-webkit-progress-bar { background: none; }

  /* firefox's progress-value bar */
  &::-moz-progress-bar {
    border-radius: var(--arc-border-radius-pill);
    background: var(--arc-progress-bar-value-background, var(${fo}));
  }

  /* all the others' progress-value bar */
  &::-webkit-progress-value {
    border-radius: var(--arc-border-radius-pill);
    background: var(--arc-progress-bar-value-background, var(${fo}));
  }
}

}
`,Xu=({progress:r=0,variant:a="common",...e})=>(0,c.jsxs)("progress",{...e,"arc-progress-bar":"","data-variant":a,value:r,max:e.max||100,"aria-valuenow":r,"aria-valuemax":e.max||100,children:[r,"% "]});V("ArcProgressBar",Ju);const wa=l`--arc•toast`,Tt=l`${wa}•content`,Sl=l`${wa}•color`,_l=l`${wa}•background`,mo=l`${wa}•icon•color`,bo=l`${wa}•transition`,Qu=l`
@layer arc-components {

  [arc-toast] {
    ${Tt}•gap: var(${b}•2);
    ${bo}•duration: 300ms;
    ${mo}: currentcolor;

    /* SIZES -------------------------------------------------------• */
    &[data-size=md] { /* @default */
      ${wa}•font•size: var(${s}•16);
      ${Tt}•font•size: var(${s}•14);
    }

    &[data-size=inherit] {
      ${wa}•font•size: 1em;
      ${Tt}•font•size: 0.875em;
    }

    /* STATES ------------------------------------------------------• */
    &[data-severity=error] {
      ${mo}: var(--arc-color-fg-critical-mid);
    }

    &[data-severity=success] {
      ${mo}: var(--arc-color-fg-success-mid);
    }

    &[data-severity=warning] {
      ${mo}: var(--arc-color-fg-warning-mid);
    }

    /* VARIANTS ----------------------------------------------------• */
    &[data-variant=common] { /* @default */
      ${_l}: var(--arc-color-bg-mono);
      ${Sl}: var(--arc-color-fg-primary);
    }

    /* PLACEMENTS --------------------------------------------------• */
    &[data-placement*=top-] { inset-block-start: var(--arc-toast-inset-block-start, 0); }
    &[data-placement*=bottom-] { inset-block-end: var(--arc-toast-inset-block-end, 0); }
    &[data-placement*=-left] { inset-inline-start: var(--arc-toast-inset-inline-start, 0); }
    &[data-placement*=-right] { inset-inline-end: var(--arc-toast-inset-inline-end, 0); }
    &[data-placement*=-center] { inset-inline-start: var(--arc-toast-inset-inline-start, 50%); translate: -50% 0; }
    &[data-placement=center] { inset: var(--arc-toast-inset, 0); margin: var(--arc-toast-offset, auto); }
  }

  /* CORE STYLES ---------------------------------------------------• */
  [arc-toast] {
    inset: var(--arc-toast-inset, auto);
    margin: var(--arc-toast-offset, var(${b}•16)); /* @note: '-offset' here is legacy variable name */
    align-items: center;

    font-size: var(${wa}•font•size); /* @note: see [arc-toast-content] for actual font-size via the [data-size] attribute */

    color: var(--arc-toast-color, var(${Sl}));
    background-color: var(--arc-toast-background, var(${_l}));
    border-radius: var(--arc-toast-border-radius, var(--arc-border-radius-lg));
    padding: var(--arc-toast-padding, var(${b}•12) var(${b}•12) var(${b}•12) var(${b}•16));
    box-shadow: var(--arc-shadow-lg);
    border: none;

    max-width: var(--arc-toast-max-width, 40em);
    min-width: var(--arc-toast-min-width, 12em);
    min-height: var(--arc-toast-min-height, var(${wa}•min•height, 3.5em));

    &:has([arc-toast-heading] + [arc-toast-subtext]) {
      ${wa}•min•height: 5em;
    }

    [arc-toast-content-grid] {
      flex: 1;
      display: grid;
      grid-template-columns: 1fr auto;
      gap: var(${b}•8) var(${b}•16);
    }

    [arc-toast-body] {
      display: flex;
      align-items: baseline;
      gap: var(${b}•8);
      padding: var(${b}•4) 0; /* vertical padding to align with action button text */
      min-width: 14em;

      p {
        margin: 0;
      }
    }

    [arc-toast-icon] {
      --arc-icon-color: var(--arc-toast-icon-color, var(${mo}));

      height: 1lh;
      padding: 0 var(${b}•2);
    }

    [arc-toast-content] {
      flex: 1;

      font-size: var(--arc-toast-font-size, var(${Tt}•font•size));
      line-height: var(--arc-line-height-loose);
      hyphens: auto;

      display: block;

      &:has([arc-toast-heading] + [arc-toast-subtext]) {
        display: flex;
        flex-direction: column;
        gap: var(${b}•2);
      }
    }

    [arc-toast-actions] {
      align-self: baseline;

      display: flex;
      align-items: center;
      gap: 0.5em;
    }

    [arc-toast-progress-bar] {
      grid-column: 1 / -1;
    }
  }

  /* POPOVER + state -----------------------------------------------• */

  [arc-toast] {
    opacity: 0;
    content-visibility: hidden;
    transition:
      display var(${bo}•duration) allow-discrete,
      overlay var(${bo}•duration) allow-discrete,
      content-visibility var(${bo}•duration) allow-discrete,
      opacity var(${bo}•duration);
  }

  [arc-toast]:popover-open {
    display: flex;
    opacity: 1;
    content-visibility: visible;
  }

  @starting-style {
    [arc-toast]:popover-open {
      opacity: 0;
      content-visibility: hidden;
    }
  }
}
`,El=({id:r,children:a,icon:e,heading:o,subtext:t,dismissProps:i,showDismiss:n=!0,onClose:h,actionSlot:d,size:u="md",variant:v="common",scheme:p=wl.scheme,placement:g="bottom-left",getToastId:f,progressBarProps:x,severity:z,...T})=>{const j=()=>{h?.()},_=p==="auto"?void 0:p,E=!!d||n,C=Wr(r,"arc-toast"),{variant:S,hierarchy:N,...B}=i||{};(0,m.useEffect)(()=>{f?.(C)},[f,C]);const Y=Fn(e);return(0,c.jsx)("div",{...T,"arc-toast":"","arc-scheme":_,"data-size":u,"data-variant":v,"data-placement":g,"data-severity":z||void 0,id:C,children:(0,c.jsxs)("div",{"arc-toast-content-grid":"",children:[(0,c.jsxs)("div",{"arc-toast-body":"",children:[e&&(0,c.jsx)(O,{icon:Y,"arc-toast-icon":""}),(0,c.jsx)("div",{"arc-toast-content":"",children:a||(0,c.jsxs)(c.Fragment,{children:[o&&(0,c.jsx)("header",{"arc-toast-heading":"",children:(0,c.jsx)("strong",{children:o})}),t&&(0,c.jsx)("p",{"arc-toast-subtext":"",children:t})]})})]}),E&&(0,c.jsxs)("div",{"arc-toast-actions":"",children:[d,n&&(0,c.jsx)(jr,{icon:"fa-regular fa-xmark-large",layout:"icon",variant:"common",hierarchy:"tertiary",size:"md",shape:"square","aria-label":"Dismiss",...B,popoverTarget:C,onClick:j})]}),x&&(0,c.jsx)(Xu,{...x,variant:z==="error"?"critical":x.variant,"arc-toast-progress-bar":""})]})})};El.handleToast=Al,V("ArcToast",Qu);var $o;(function(r){r.None="none",r.Persistent="localStorage",r.Temporary="sessionStorage"})($o||($o={}));const rv=(r,a,e)=>{const[o,t]=(0,m.useState)(a),[i,n]=nu(r,a),[h,d]=ln(r,a);return e===$o.Temporary?[i,n]:e===$o.Persistent?[h,d]:[o,t]},av=()=>typeof DOMRect<"u"?new DOMRect:{x:0,y:0,width:0,height:0,top:0,right:0,bottom:0,left:0,toJSON:()=>({x:0,y:0,width:0,height:0,top:0,right:0,bottom:0,left:0})}}}]);
