import{a as j,b as ln,c as os,d as ss,e as as,f as cn,g as ls,h as Dt,i as cs,j as Mt,k as si,l as ze,m as ai,n as tt,o as ae,p as us,q as ds,r as gt,s as un,t as ps,u as hs}from"./chunk-HBSVLUW7.js";import{$ as Do,$a as tn,A as ti,Aa as jo,Ab as ee,B as Je,Ba as Bo,Bb as ue,C as Xi,Ca as zo,Cb as or,D as Co,Da as Ho,E as Eo,Ea as ht,F as To,G as Oe,H as _o,Ha as Vo,Hb as se,I as Z,J as D,Ja as m,Jb as ft,Ka as Jt,L as b,La as Wo,M as V,Ma as qo,N as Ro,Na as en,Nb as Jo,O as k,Oa as ce,Ob as es,P as Zi,Pa as Go,Q as O,Qa as Ko,Qb as At,R as h,Ra as Qo,S as dt,Sa as ii,T as Io,Ta as z,Tb as ts,U as _t,Ua as W,Ub as ns,V as xe,Va as ne,Vb as L,W as Ue,Wb as ri,X as Oo,Xa as q,Xb as is,Y as xo,Ya as R,Yb as oi,Z as Ao,Za as rr,Zb as an,_,_a as Yo,_b as rs,a as g,aa as et,ab as nn,b as oe,ba as Ji,bb as rn,c as mo,cb as G,d as bo,da as er,db as v,e as vo,ea as Ae,eb as on,f as Gi,fa as Te,fb as sn,g as Ki,ga as tr,gb as Ot,h as ge,ha as je,hb as pe,i as Ee,ia as pt,j as Qe,ja as Be,jb as T,k as le,ka as Mo,kb as E,l as S,la as nr,lb as J,m as Yt,ma as No,mb as Me,n as yo,na as De,nb as Ne,o as So,ob as _e,p as N,pa as ir,pb as Xo,q as ei,qa as ko,qb as xt,r as de,ra as Lo,rb as I,s as Xt,sa as ni,sb as ke,t as wo,ta as Po,tb as me,u as Qi,ua as Zt,v as Ze,va as Rt,vb as $,w as ct,wa as It,x as ut,xa as $o,xb as F,y as Yi,ya as Fo,yb as U,z as Tt,za as Uo,zb as Zo}from"./chunk-W2ICWAH2.js";var ui=new k(""),cr=(()=>{class e{_zone;_plugins;_eventNameToPlugin=new Map;constructor(t,n){this._zone=n,t.forEach(r=>{r.manager=this}),this._plugins=t.slice().reverse()}addEventListener(t,n,r,o){return this._findPluginFor(n).addEventListener(t,n,r,o)}getZone(){return this._zone}_findPluginFor(t){let n=this._eventNameToPlugin.get(t);if(n)return n;if(n=this._plugins.find(o=>o.supports(t)),!n)throw new D(5101,!1);return this._eventNameToPlugin.set(t,n),n}static \u0275fac=function(n){return new(n||e)(O(ui),O(Te))};static \u0275prov=b({token:e,factory:e.\u0275fac})}return e})(),dn=class{_doc;constructor(i){this._doc=i}manager},li="ng-app-id";function fs(e){for(let i of e)i.remove()}function gs(e,i){let t=i.createElement("style");return t.textContent=e,t}function Nl(e,i,t,n){let r=e.head?.querySelectorAll(`style[${li}="${i}"],link[${li}="${i}"]`);if(r)for(let o of r)o.removeAttribute(li),o instanceof HTMLLinkElement?n.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&t.set(o.textContent,{usage:0,elements:[o]})}function ar(e,i){let t=i.createElement("link");return t.setAttribute("rel","stylesheet"),t.setAttribute("href",e),t}var ur=(()=>{class e{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;isServer;constructor(t,n,r,o={}){this.doc=t,this.appId=n,this.nonce=r,this.isServer=un(o),Nl(t,n,this.inline,this.external),this.hosts.add(t.head)}addStyles(t,n){for(let r of t)this.addUsage(r,this.inline,gs);n?.forEach(r=>this.addUsage(r,this.external,ar))}removeStyles(t,n){for(let r of t)this.removeUsage(r,this.inline);n?.forEach(r=>this.removeUsage(r,this.external))}addUsage(t,n,r){let o=n.get(t);o?o.usage++:n.set(t,{usage:1,elements:[...this.hosts].map(s=>this.addElement(s,r(t,this.doc)))})}removeUsage(t,n){let r=n.get(t);r&&(r.usage--,r.usage<=0&&(fs(r.elements),n.delete(t)))}ngOnDestroy(){for(let[,{elements:t}]of[...this.inline,...this.external])fs(t);this.hosts.clear()}addHost(t){this.hosts.add(t);for(let[n,{elements:r}]of this.inline)r.push(this.addElement(t,gs(n,this.doc)));for(let[n,{elements:r}]of this.external)r.push(this.addElement(t,ar(n,this.doc)))}removeHost(t){this.hosts.delete(t)}addElement(t,n){return this.nonce&&n.setAttribute("nonce",this.nonce),this.isServer&&n.setAttribute(li,this.appId),t.appendChild(n)}static \u0275fac=function(n){return new(n||e)(O(j),O(nr),O(ir,8),O(De))};static \u0275prov=b({token:e,factory:e.\u0275fac})}return e})(),sr={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},dr=/%COMP%/g;var bs="%COMP%",kl=`_nghost-${bs}`,Ll=`_ngcontent-${bs}`,Pl=!0,$l=new k("",{providedIn:"root",factory:()=>Pl});function Fl(e){return Ll.replace(dr,e)}function Ul(e){return kl.replace(dr,e)}function vs(e,i){return i.map(t=>t.replace(dr,e))}var pr=(()=>{class e{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;platformId;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;platformIsServer;constructor(t,n,r,o,s,a,l,c=null,u=null){this.eventManager=t,this.sharedStylesHost=n,this.appId=r,this.removeStylesOnCompDestroy=o,this.doc=s,this.platformId=a,this.ngZone=l,this.nonce=c,this.tracingService=u,this.platformIsServer=un(a),this.defaultRenderer=new pn(t,s,l,this.platformIsServer,this.tracingService)}createRenderer(t,n){if(!t||!n)return this.defaultRenderer;this.platformIsServer&&n.encapsulation===Zt.ShadowDom&&(n=oe(g({},n),{encapsulation:Zt.Emulated}));let r=this.getOrCreateRenderer(t,n);return r instanceof ci?r.applyToHost(t):r instanceof hn&&r.applyStyles(),r}getOrCreateRenderer(t,n){let r=this.rendererByCompId,o=r.get(n.id);if(!o){let s=this.doc,a=this.ngZone,l=this.eventManager,c=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,d=this.platformIsServer,p=this.tracingService;switch(n.encapsulation){case Zt.Emulated:o=new ci(l,c,n,this.appId,u,s,a,d,p);break;case Zt.ShadowDom:return new lr(l,c,t,n,s,a,this.nonce,d,p);default:o=new hn(l,c,n,u,s,a,d,p);break}r.set(n.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(t){this.rendererByCompId.delete(t)}static \u0275fac=function(n){return new(n||e)(O(cr),O(ur),O(nr),O($l),O(j),O(De),O(Te),O(ir),O(Lo,8))};static \u0275prov=b({token:e,factory:e.\u0275fac})}return e})(),pn=class{eventManager;doc;ngZone;platformIsServer;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(i,t,n,r,o){this.eventManager=i,this.doc=t,this.ngZone=n,this.platformIsServer=r,this.tracingService=o}destroy(){}destroyNode=null;createElement(i,t){return t?this.doc.createElementNS(sr[t]||t,i):this.doc.createElement(i)}createComment(i){return this.doc.createComment(i)}createText(i){return this.doc.createTextNode(i)}appendChild(i,t){(ms(i)?i.content:i).appendChild(t)}insertBefore(i,t,n){i&&(ms(i)?i.content:i).insertBefore(t,n)}removeChild(i,t){t.remove()}selectRootElement(i,t){let n=typeof i=="string"?this.doc.querySelector(i):i;if(!n)throw new D(-5104,!1);return t||(n.textContent=""),n}parentNode(i){return i.parentNode}nextSibling(i){return i.nextSibling}setAttribute(i,t,n,r){if(r){t=r+":"+t;let o=sr[r];o?i.setAttributeNS(o,t,n):i.setAttribute(t,n)}else i.setAttribute(t,n)}removeAttribute(i,t,n){if(n){let r=sr[n];r?i.removeAttributeNS(r,t):i.removeAttribute(`${n}:${t}`)}else i.removeAttribute(t)}addClass(i,t){i.classList.add(t)}removeClass(i,t){i.classList.remove(t)}setStyle(i,t,n,r){r&(Jt.DashCase|Jt.Important)?i.style.setProperty(t,n,r&Jt.Important?"important":""):i.style[t]=n}removeStyle(i,t,n){n&Jt.DashCase?i.style.removeProperty(t):i.style[t]=""}setProperty(i,t,n){i!=null&&(i[t]=n)}setValue(i,t){i.nodeValue=t}listen(i,t,n,r){if(typeof i=="string"&&(i=ln().getGlobalEventTarget(this.doc,i),!i))throw new D(5102,!1);let o=this.decoratePreventDefault(n);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(i,t,o)),this.eventManager.addEventListener(i,t,o,r)}decoratePreventDefault(i){return t=>{if(t==="__ngUnwrap__")return i;(this.platformIsServer?this.ngZone.runGuarded(()=>i(t)):i(t))===!1&&t.preventDefault()}}};function ms(e){return e.tagName==="TEMPLATE"&&e.content!==void 0}var lr=class extends pn{sharedStylesHost;hostEl;shadowRoot;constructor(i,t,n,r,o,s,a,l,c){super(i,o,s,l,c),this.sharedStylesHost=t,this.hostEl=n,this.shadowRoot=n.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let u=r.styles;u=vs(r.id,u);for(let p of u){let f=document.createElement("style");a&&f.setAttribute("nonce",a),f.textContent=p,this.shadowRoot.appendChild(f)}let d=r.getExternalStyles?.();if(d)for(let p of d){let f=ar(p,o);a&&f.setAttribute("nonce",a),this.shadowRoot.appendChild(f)}}nodeOrShadowRoot(i){return i===this.hostEl?this.shadowRoot:i}appendChild(i,t){return super.appendChild(this.nodeOrShadowRoot(i),t)}insertBefore(i,t,n){return super.insertBefore(this.nodeOrShadowRoot(i),t,n)}removeChild(i,t){return super.removeChild(null,t)}parentNode(i){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(i)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},hn=class extends pn{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(i,t,n,r,o,s,a,l,c){super(i,o,s,a,l),this.sharedStylesHost=t,this.removeStylesOnCompDestroy=r;let u=n.styles;this.styles=c?vs(c,u):u,this.styleUrls=n.getExternalStyles?.(c)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},ci=class extends hn{contentAttr;hostAttr;constructor(i,t,n,r,o,s,a,l,c){let u=r+"-"+n.id;super(i,t,n,o,s,a,l,c,u),this.contentAttr=Fl(u),this.hostAttr=Ul(u)}applyToHost(i){this.applyStyles(),this.setAttribute(i,this.hostAttr,"")}createElement(i,t){let n=super.createElement(i,t);return super.setAttribute(n,this.contentAttr,""),n}};var di=class e extends ss{supportsDOMEvents=!0;static makeCurrent(){os(new e)}onAndCancel(i,t,n,r){return i.addEventListener(t,n,r),()=>{i.removeEventListener(t,n,r)}}dispatchEvent(i,t){i.dispatchEvent(t)}remove(i){i.remove()}createElement(i,t){return t=t||this.getDefaultDocument(),t.createElement(i)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(i){return i.nodeType===Node.ELEMENT_NODE}isShadowRoot(i){return i instanceof DocumentFragment}getGlobalEventTarget(i,t){return t==="window"?window:t==="document"?i:t==="body"?i.body:null}getBaseHref(i){let t=Bl();return t==null?null:zl(t)}resetBaseElement(){fn=null}getUserAgent(){return window.navigator.userAgent}getCookie(i){return us(document.cookie,i)}},fn=null;function Bl(){return fn=fn||document.head.querySelector("base"),fn?fn.getAttribute("href"):null}function zl(e){return new URL(e,document.baseURI).pathname}var Hl=(()=>{class e{build(){return new XMLHttpRequest}static \u0275fac=function(n){return new(n||e)};static \u0275prov=b({token:e,factory:e.\u0275fac})}return e})(),Ss=(()=>{class e extends dn{constructor(t){super(t)}supports(t){return!0}addEventListener(t,n,r,o){return t.addEventListener(n,r,o),()=>this.removeEventListener(t,n,r,o)}removeEventListener(t,n,r,o){return t.removeEventListener(n,r,o)}static \u0275fac=function(n){return new(n||e)(O(j))};static \u0275prov=b({token:e,factory:e.\u0275fac})}return e})(),ys=["alt","control","meta","shift"],Vl={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},Wl={alt:e=>e.altKey,control:e=>e.ctrlKey,meta:e=>e.metaKey,shift:e=>e.shiftKey},ws=(()=>{class e extends dn{constructor(t){super(t)}supports(t){return e.parseEventName(t)!=null}addEventListener(t,n,r,o){let s=e.parseEventName(n),a=e.eventCallback(s.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>ln().onAndCancel(t,s.domEventName,a,o))}static parseEventName(t){let n=t.toLowerCase().split("."),r=n.shift();if(n.length===0||!(r==="keydown"||r==="keyup"))return null;let o=e._normalizeKey(n.pop()),s="",a=n.indexOf("code");if(a>-1&&(n.splice(a,1),s="code."),ys.forEach(c=>{let u=n.indexOf(c);u>-1&&(n.splice(u,1),s+=c+".")}),s+=o,n.length!=0||o.length===0)return null;let l={};return l.domEventName=r,l.fullKey=s,l}static matchEventFullKeyCode(t,n){let r=Vl[t.key]||t.key,o="";return n.indexOf("code.")>-1&&(r=t.code,o="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),ys.forEach(s=>{if(s!==r){let a=Wl[s];a(t)&&(o+=s+".")}}),o+=r,o===n)}static eventCallback(t,n,r){return o=>{e.matchEventFullKeyCode(o,t)&&r.runGuarded(()=>n(o))}}static _normalizeKey(t){return t==="esc"?"escape":t}static \u0275fac=function(n){return new(n||e)(O(j))};static \u0275prov=b({token:e,factory:e.\u0275fac})}return e})();function ql(e,i,t){return ts(g({rootComponent:e,platformRef:t?.platformRef},Gl(i)))}function Gl(e){return{appProviders:[...Zl,...e?.providers??[]],platformProviders:Xl}}function Kl(){di.makeCurrent()}function Ql(){return new tr}function Yl(){return Mo(document),document}var Xl=[{provide:De,useValue:ds},{provide:No,useValue:Kl,multi:!0},{provide:j,useFactory:Yl}];var Zl=[{provide:Io,useValue:"root"},{provide:tr,useFactory:Ql},{provide:ui,useClass:Ss,multi:!0,deps:[j]},{provide:ui,useClass:ws,multi:!0,deps:[j]},pr,ur,cr,{provide:qo,useExisting:pr},{provide:ps,useClass:Hl},[]];var gn=class e{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(i){i?typeof i=="string"?this.lazyInit=()=>{this.headers=new Map,i.split(`
`).forEach(t=>{let n=t.indexOf(":");if(n>0){let r=t.slice(0,n),o=t.slice(n+1).trim();this.addHeaderEntry(r,o)}})}:typeof Headers<"u"&&i instanceof Headers?(this.headers=new Map,i.forEach((t,n)=>{this.addHeaderEntry(n,t)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(i).forEach(([t,n])=>{this.setHeaderEntries(t,n)})}:this.headers=new Map}has(i){return this.init(),this.headers.has(i.toLowerCase())}get(i){this.init();let t=this.headers.get(i.toLowerCase());return t&&t.length>0?t[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(i){return this.init(),this.headers.get(i.toLowerCase())||null}append(i,t){return this.clone({name:i,value:t,op:"a"})}set(i,t){return this.clone({name:i,value:t,op:"s"})}delete(i,t){return this.clone({name:i,value:t,op:"d"})}maybeSetNormalizedName(i,t){this.normalizedNames.has(t)||this.normalizedNames.set(t,i)}init(){this.lazyInit&&(this.lazyInit instanceof e?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(i=>this.applyUpdate(i)),this.lazyUpdate=null))}copyFrom(i){i.init(),Array.from(i.headers.keys()).forEach(t=>{this.headers.set(t,i.headers.get(t)),this.normalizedNames.set(t,i.normalizedNames.get(t))})}clone(i){let t=new e;return t.lazyInit=this.lazyInit&&this.lazyInit instanceof e?this.lazyInit:this,t.lazyUpdate=(this.lazyUpdate||[]).concat([i]),t}applyUpdate(i){let t=i.name.toLowerCase();switch(i.op){case"a":case"s":let n=i.value;if(typeof n=="string"&&(n=[n]),n.length===0)return;this.maybeSetNormalizedName(i.name,t);let r=(i.op==="a"?this.headers.get(t):void 0)||[];r.push(...n),this.headers.set(t,r);break;case"d":let o=i.value;if(!o)this.headers.delete(t),this.normalizedNames.delete(t);else{let s=this.headers.get(t);if(!s)return;s=s.filter(a=>o.indexOf(a)===-1),s.length===0?(this.headers.delete(t),this.normalizedNames.delete(t)):this.headers.set(t,s)}break}}addHeaderEntry(i,t){let n=i.toLowerCase();this.maybeSetNormalizedName(i,n),this.headers.has(n)?this.headers.get(n).push(t):this.headers.set(n,[t])}setHeaderEntries(i,t){let n=(Array.isArray(t)?t:[t]).map(o=>o.toString()),r=i.toLowerCase();this.headers.set(r,n),this.maybeSetNormalizedName(i,r)}forEach(i){this.init(),Array.from(this.normalizedNames.keys()).forEach(t=>i(this.normalizedNames.get(t),this.headers.get(t)))}};var Jl="X-Request-URL",ec="text/plain",tc="application/json",Ih=`${tc}, ${ec}, */*`;var fr=function(e){return e[e.Sent=0]="Sent",e[e.UploadProgress=1]="UploadProgress",e[e.ResponseHeader=2]="ResponseHeader",e[e.DownloadProgress=3]="DownloadProgress",e[e.Response=4]="Response",e[e.User=5]="User",e}(fr||{}),hr=class{headers;status;statusText;url;ok;type;constructor(i,t=200,n="OK"){this.headers=i.headers||new gn,this.status=i.status!==void 0?i.status:t,this.statusText=i.statusText||n,this.url=i.url||null,this.ok=this.status>=200&&this.status<300}};var mn=class e extends hr{body;constructor(i={}){super(i),this.body=i.body!==void 0?i.body:null}type=fr.Response;clone(i={}){return new e({body:i.body!==void 0?i.body:this.body,headers:i.headers||this.headers,status:i.status!==void 0?i.status:this.status,statusText:i.statusText||this.statusText,url:i.url||this.url||void 0})}};var Cs=new k("");var Oh=RegExp(`^${Jl}:`,"m");var ic=new k(""),rc="b",oc="h",sc="s",ac="st",lc="u",cc="rt",gr=new k(""),uc=["GET","HEAD"];function dc(e,i){let p=h(gr),{isCacheActive:t}=p,n=mo(p,["isCacheActive"]),{transferCache:r,method:o}=e;if(!t||r===!1||o==="POST"&&!n.includePostRequests&&!r||o!=="POST"&&!uc.includes(o)||!n.includeRequestsWithAuthHeaders&&pc(e)||n.filter?.(e)===!1)return i(e);let s=h(ko);if(h(ic,{optional:!0}))throw new D(2803,!1);let l=e.url,c=hc(e,l),u=s.get(c,null),d=n.includeHeaders;if(typeof r=="object"&&r.includeHeaders&&(d=r.includeHeaders),u){let{[rc]:f,[cc]:y,[oc]:C,[sc]:A,[ac]:H,[lc]:B}=u,re=f;switch(y){case"arraybuffer":re=new TextEncoder().encode(f).buffer;break;case"blob":re=new Blob([f]);break}let fe=new gn(C);return S(new mn({body:re,headers:fe,status:A,statusText:H,url:B}))}return i(e).pipe(Z(f=>{f instanceof mn}))}function pc(e){return e.headers.has("authorization")||e.headers.has("proxy-authorization")}function Es(e){return[...e.keys()].sort().map(i=>`${i}=${e.getAll(i)}`).join("&")}function hc(e,i){let{params:t,method:n,responseType:r}=e,o=Es(t),s=e.serializeBody();s instanceof URLSearchParams?s=Es(s):typeof s!="string"&&(s="");let a=[n,r,i,s,o].join("|"),l=fc(a);return l}function fc(e){let i=0;for(let t of e)i=Math.imul(31,i)+t.charCodeAt(0)<<0;return i+=2147483648,i.toString()}function Ts(e){return[{provide:gr,useFactory:()=>(ni("NgHttpTransferCache"),g({isCacheActive:!0},e))},{provide:Cs,useValue:dc,multi:!0},{provide:nn,multi:!0,useFactory:()=>{let i=h(rn),t=h(gr);return()=>{i.whenStable().then(()=>{t.isCacheActive=!1})}}}]}var _s=(()=>{class e{_doc;constructor(t){this._doc=t}getTitle(){return this._doc.title}setTitle(t){this._doc.title=t||""}static \u0275fac=function(n){return new(n||e)(O(j))};static \u0275prov=b({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var mc=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275prov=b({token:e,factory:function(n){let r=null;return n?r=new(n||e):r=O(bc),r},providedIn:"root"})}return e})(),bc=(()=>{class e extends mc{_doc;constructor(t){super(),this._doc=t}sanitize(t,n){if(n==null)return null;switch(t){case ht.NONE:return n;case ht.HTML:return It(n,"HTML")?Rt(n):Ho(this._doc,String(n)).toString();case ht.STYLE:return It(n,"Style")?Rt(n):n;case ht.SCRIPT:if(It(n,"Script"))return Rt(n);throw new D(5200,!1);case ht.URL:return It(n,"URL")?Rt(n):zo(String(n));case ht.RESOURCE_URL:if(It(n,"ResourceURL"))return Rt(n);throw new D(5201,!1);default:throw new D(5202,!1)}}bypassSecurityTrustHtml(t){return $o(t)}bypassSecurityTrustStyle(t){return Fo(t)}bypassSecurityTrustScript(t){return Uo(t)}bypassSecurityTrustUrl(t){return jo(t)}bypassSecurityTrustResourceUrl(t){return Bo(t)}static \u0275fac=function(n){return new(n||e)(O(j))};static \u0275prov=b({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),mr=function(e){return e[e.NoHttpTransferCache=0]="NoHttpTransferCache",e[e.HttpTransferCacheOptions=1]="HttpTransferCacheOptions",e[e.I18nSupport=2]="I18nSupport",e[e.EventReplay=3]="EventReplay",e[e.IncrementalHydration=4]="IncrementalHydration",e}(mr||{});function hf(...e){let i=[],t=new Set;for(let{\u0275providers:r,\u0275kind:o}of e)t.add(o),r.length&&i.push(r);let n=t.has(mr.HttpTransferCacheOptions);return dt([[],ns(),t.has(mr.NoHttpTransferCache)||n?[]:Ts({}),i])}var w="primary",xn=Symbol("RouteTitle"),wr=class{params;constructor(i){this.params=i||{}}has(i){return Object.prototype.hasOwnProperty.call(this.params,i)}get(i){if(this.has(i)){let t=this.params[i];return Array.isArray(t)?t[0]:t}return null}getAll(i){if(this.has(i)){let t=this.params[i];return Array.isArray(t)?t:[t]}return[]}get keys(){return Object.keys(this.params)}};function vt(e){return new wr(e)}function Ns(e,i,t){let n=t.path.split("/");if(n.length>e.length||t.pathMatch==="full"&&(i.hasChildren()||n.length<e.length))return null;let r={};for(let o=0;o<n.length;o++){let s=n[o],a=e[o];if(s[0]===":")r[s.substring(1)]=a;else if(s!==a.path)return null}return{consumed:e.slice(0,n.length),posParams:r}}function yc(e,i){if(e.length!==i.length)return!1;for(let t=0;t<e.length;++t)if(!He(e[t],i[t]))return!1;return!0}function He(e,i){let t=e?Cr(e):void 0,n=i?Cr(i):void 0;if(!t||!n||t.length!=n.length)return!1;let r;for(let o=0;o<t.length;o++)if(r=t[o],!ks(e[r],i[r]))return!1;return!0}function Cr(e){return[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function ks(e,i){if(Array.isArray(e)&&Array.isArray(i)){if(e.length!==i.length)return!1;let t=[...e].sort(),n=[...i].sort();return t.every((r,o)=>n[o]===r)}else return e===i}function Ls(e){return e.length>0?e[e.length-1]:null}function st(e){return yo(e)?e:Yo(e)?le(Promise.resolve(e)):S(e)}var Sc={exact:$s,subset:Fs},Ps={exact:wc,subset:Cc,ignored:()=>!0};function Rs(e,i,t){return Sc[t.paths](e.root,i.root,t.matrixParams)&&Ps[t.queryParams](e.queryParams,i.queryParams)&&!(t.fragment==="exact"&&e.fragment!==i.fragment)}function wc(e,i){return He(e,i)}function $s(e,i,t){if(!mt(e.segments,i.segments)||!fi(e.segments,i.segments,t)||e.numberOfChildren!==i.numberOfChildren)return!1;for(let n in i.children)if(!e.children[n]||!$s(e.children[n],i.children[n],t))return!1;return!0}function Cc(e,i){return Object.keys(i).length<=Object.keys(e).length&&Object.keys(i).every(t=>ks(e[t],i[t]))}function Fs(e,i,t){return Us(e,i,i.segments,t)}function Us(e,i,t,n){if(e.segments.length>t.length){let r=e.segments.slice(0,t.length);return!(!mt(r,t)||i.hasChildren()||!fi(r,t,n))}else if(e.segments.length===t.length){if(!mt(e.segments,t)||!fi(e.segments,t,n))return!1;for(let r in i.children)if(!e.children[r]||!Fs(e.children[r],i.children[r],n))return!1;return!0}else{let r=t.slice(0,e.segments.length),o=t.slice(e.segments.length);return!mt(e.segments,r)||!fi(e.segments,r,n)||!e.children[w]?!1:Us(e.children[w],i,o,n)}}function fi(e,i,t){return i.every((n,r)=>Ps[t](e[r].parameters,n.parameters))}var We=class{root;queryParams;fragment;_queryParamMap;constructor(i=new x([],{}),t={},n=null){this.root=i,this.queryParams=t,this.fragment=n}get queryParamMap(){return this._queryParamMap??=vt(this.queryParams),this._queryParamMap}toString(){return _c.serialize(this)}},x=class{segments;children;parent=null;constructor(i,t){this.segments=i,this.children=t,Object.values(t).forEach(n=>n.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return gi(this)}},nt=class{path;parameters;_parameterMap;constructor(i,t){this.path=i,this.parameters=t}get parameterMap(){return this._parameterMap??=vt(this.parameters),this._parameterMap}toString(){return Bs(this)}};function Ec(e,i){return mt(e,i)&&e.every((t,n)=>He(t.parameters,i[n].parameters))}function mt(e,i){return e.length!==i.length?!1:e.every((t,n)=>t.path===i[n].path)}function Tc(e,i){let t=[];return Object.entries(e.children).forEach(([n,r])=>{n===w&&(t=t.concat(i(r,n)))}),Object.entries(e.children).forEach(([n,r])=>{n!==w&&(t=t.concat(i(r,n)))}),t}var yt=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275prov=b({token:e,factory:()=>new it,providedIn:"root"})}return e})(),it=class{parse(i){let t=new Tr(i);return new We(t.parseRootSegment(),t.parseQueryParams(),t.parseFragment())}serialize(i){let t=`/${bn(i.root,!0)}`,n=Oc(i.queryParams),r=typeof i.fragment=="string"?`#${Rc(i.fragment)}`:"";return`${t}${n}${r}`}},_c=new it;function gi(e){return e.segments.map(i=>Bs(i)).join("/")}function bn(e,i){if(!e.hasChildren())return gi(e);if(i){let t=e.children[w]?bn(e.children[w],!1):"",n=[];return Object.entries(e.children).forEach(([r,o])=>{r!==w&&n.push(`${r}:${bn(o,!1)}`)}),n.length>0?`${t}(${n.join("//")})`:t}else{let t=Tc(e,(n,r)=>r===w?[bn(e.children[w],!1)]:[`${r}:${bn(n,!1)}`]);return Object.keys(e.children).length===1&&e.children[w]!=null?`${gi(e)}/${t[0]}`:`${gi(e)}/(${t.join("//")})`}}function js(e){return encodeURIComponent(e).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function pi(e){return js(e).replace(/%3B/gi,";")}function Rc(e){return encodeURI(e)}function Er(e){return js(e).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function mi(e){return decodeURIComponent(e)}function Is(e){return mi(e.replace(/\+/g,"%20"))}function Bs(e){return`${Er(e.path)}${Ic(e.parameters)}`}function Ic(e){return Object.entries(e).map(([i,t])=>`;${Er(i)}=${Er(t)}`).join("")}function Oc(e){let i=Object.entries(e).map(([t,n])=>Array.isArray(n)?n.map(r=>`${pi(t)}=${pi(r)}`).join("&"):`${pi(t)}=${pi(n)}`).filter(t=>t);return i.length?`?${i.join("&")}`:""}var xc=/^[^\/()?;#]+/;function br(e){let i=e.match(xc);return i?i[0]:""}var Ac=/^[^\/()?;=#]+/;function Dc(e){let i=e.match(Ac);return i?i[0]:""}var Mc=/^[^=?&#]+/;function Nc(e){let i=e.match(Mc);return i?i[0]:""}var kc=/^[^&#]+/;function Lc(e){let i=e.match(kc);return i?i[0]:""}var Tr=class{url;remaining;constructor(i){this.url=i,this.remaining=i}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new x([],{}):new x([],this.parseChildren())}parseQueryParams(){let i={};if(this.consumeOptional("?"))do this.parseQueryParam(i);while(this.consumeOptional("&"));return i}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(this.remaining==="")return{};this.consumeOptional("/");let i=[];for(this.peekStartsWith("(")||i.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),i.push(this.parseSegment());let t={};this.peekStartsWith("/(")&&(this.capture("/"),t=this.parseParens(!0));let n={};return this.peekStartsWith("(")&&(n=this.parseParens(!1)),(i.length>0||Object.keys(t).length>0)&&(n[w]=new x(i,t)),n}parseSegment(){let i=br(this.remaining);if(i===""&&this.peekStartsWith(";"))throw new D(4009,!1);return this.capture(i),new nt(mi(i),this.parseMatrixParams())}parseMatrixParams(){let i={};for(;this.consumeOptional(";");)this.parseParam(i);return i}parseParam(i){let t=Dc(this.remaining);if(!t)return;this.capture(t);let n="";if(this.consumeOptional("=")){let r=br(this.remaining);r&&(n=r,this.capture(n))}i[mi(t)]=mi(n)}parseQueryParam(i){let t=Nc(this.remaining);if(!t)return;this.capture(t);let n="";if(this.consumeOptional("=")){let s=Lc(this.remaining);s&&(n=s,this.capture(n))}let r=Is(t),o=Is(n);if(i.hasOwnProperty(r)){let s=i[r];Array.isArray(s)||(s=[s],i[r]=s),s.push(o)}else i[r]=o}parseParens(i){let t={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let n=br(this.remaining),r=this.remaining[n.length];if(r!=="/"&&r!==")"&&r!==";")throw new D(4010,!1);let o;n.indexOf(":")>-1?(o=n.slice(0,n.indexOf(":")),this.capture(o),this.capture(":")):i&&(o=w);let s=this.parseChildren();t[o]=Object.keys(s).length===1?s[w]:new x([],s),this.consumeOptional("//")}return t}peekStartsWith(i){return this.remaining.startsWith(i)}consumeOptional(i){return this.peekStartsWith(i)?(this.remaining=this.remaining.substring(i.length),!0):!1}capture(i){if(!this.consumeOptional(i))throw new D(4011,!1)}};function zs(e){return e.segments.length>0?new x([],{[w]:e}):e}function Hs(e){let i={};for(let[n,r]of Object.entries(e.children)){let o=Hs(r);if(n===w&&o.segments.length===0&&o.hasChildren())for(let[s,a]of Object.entries(o.children))i[s]=a;else(o.segments.length>0||o.hasChildren())&&(i[n]=o)}let t=new x(e.segments,i);return Pc(t)}function Pc(e){if(e.numberOfChildren===1&&e.children[w]){let i=e.children[w];return new x(e.segments.concat(i.segments),i.children)}return e}function rt(e){return e instanceof We}function Vs(e,i,t=null,n=null){let r=Ws(e);return qs(r,i,t,n)}function Ws(e){let i;function t(o){let s={};for(let l of o.children){let c=t(l);s[l.outlet]=c}let a=new x(o.url,s);return o===e&&(i=a),a}let n=t(e.root),r=zs(n);return i??r}function qs(e,i,t,n){let r=e;for(;r.parent;)r=r.parent;if(i.length===0)return vr(r,r,r,t,n);let o=$c(i);if(o.toRoot())return vr(r,r,new x([],{}),t,n);let s=Fc(o,r,e),a=s.processChildren?yn(s.segmentGroup,s.index,o.commands):Ks(s.segmentGroup,s.index,o.commands);return vr(r,s.segmentGroup,a,t,n)}function vi(e){return typeof e=="object"&&e!=null&&!e.outlets&&!e.segmentPath}function wn(e){return typeof e=="object"&&e!=null&&e.outlets}function vr(e,i,t,n,r){let o={};n&&Object.entries(n).forEach(([l,c])=>{o[l]=Array.isArray(c)?c.map(u=>`${u}`):`${c}`});let s;e===i?s=t:s=Gs(e,i,t);let a=zs(Hs(s));return new We(a,o,r)}function Gs(e,i,t){let n={};return Object.entries(e.children).forEach(([r,o])=>{o===i?n[r]=t:n[r]=Gs(o,i,t)}),new x(e.segments,n)}var yi=class{isAbsolute;numberOfDoubleDots;commands;constructor(i,t,n){if(this.isAbsolute=i,this.numberOfDoubleDots=t,this.commands=n,i&&n.length>0&&vi(n[0]))throw new D(4003,!1);let r=n.find(wn);if(r&&r!==Ls(n))throw new D(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function $c(e){if(typeof e[0]=="string"&&e.length===1&&e[0]==="/")return new yi(!0,0,e);let i=0,t=!1,n=e.reduce((r,o,s)=>{if(typeof o=="object"&&o!=null){if(o.outlets){let a={};return Object.entries(o.outlets).forEach(([l,c])=>{a[l]=typeof c=="string"?c.split("/"):c}),[...r,{outlets:a}]}if(o.segmentPath)return[...r,o.segmentPath]}return typeof o!="string"?[...r,o]:s===0?(o.split("/").forEach((a,l)=>{l==0&&a==="."||(l==0&&a===""?t=!0:a===".."?i++:a!=""&&r.push(a))}),r):[...r,o]},[]);return new yi(t,i,n)}var Lt=class{segmentGroup;processChildren;index;constructor(i,t,n){this.segmentGroup=i,this.processChildren=t,this.index=n}};function Fc(e,i,t){if(e.isAbsolute)return new Lt(i,!0,0);if(!t)return new Lt(i,!1,NaN);if(t.parent===null)return new Lt(t,!0,0);let n=vi(e.commands[0])?0:1,r=t.segments.length-1+n;return Uc(t,r,e.numberOfDoubleDots)}function Uc(e,i,t){let n=e,r=i,o=t;for(;o>r;){if(o-=r,n=n.parent,!n)throw new D(4005,!1);r=n.segments.length}return new Lt(n,!1,r-o)}function jc(e){return wn(e[0])?e[0].outlets:{[w]:e}}function Ks(e,i,t){if(e??=new x([],{}),e.segments.length===0&&e.hasChildren())return yn(e,i,t);let n=Bc(e,i,t),r=t.slice(n.commandIndex);if(n.match&&n.pathIndex<e.segments.length){let o=new x(e.segments.slice(0,n.pathIndex),{});return o.children[w]=new x(e.segments.slice(n.pathIndex),e.children),yn(o,0,r)}else return n.match&&r.length===0?new x(e.segments,{}):n.match&&!e.hasChildren()?_r(e,i,t):n.match?yn(e,0,r):_r(e,i,t)}function yn(e,i,t){if(t.length===0)return new x(e.segments,{});{let n=jc(t),r={};if(Object.keys(n).some(o=>o!==w)&&e.children[w]&&e.numberOfChildren===1&&e.children[w].segments.length===0){let o=yn(e.children[w],i,t);return new x(e.segments,o.children)}return Object.entries(n).forEach(([o,s])=>{typeof s=="string"&&(s=[s]),s!==null&&(r[o]=Ks(e.children[o],i,s))}),Object.entries(e.children).forEach(([o,s])=>{n[o]===void 0&&(r[o]=s)}),new x(e.segments,r)}}function Bc(e,i,t){let n=0,r=i,o={match:!1,pathIndex:0,commandIndex:0};for(;r<e.segments.length;){if(n>=t.length)return o;let s=e.segments[r],a=t[n];if(wn(a))break;let l=`${a}`,c=n<t.length-1?t[n+1]:null;if(r>0&&l===void 0)break;if(l&&c&&typeof c=="object"&&c.outlets===void 0){if(!xs(l,c,s))return o;n+=2}else{if(!xs(l,{},s))return o;n++}r++}return{match:!0,pathIndex:r,commandIndex:n}}function _r(e,i,t){let n=e.segments.slice(0,i),r=0;for(;r<t.length;){let o=t[r];if(wn(o)){let l=zc(o.outlets);return new x(n,l)}if(r===0&&vi(t[0])){let l=e.segments[i];n.push(new nt(l.path,Os(t[0]))),r++;continue}let s=wn(o)?o.outlets[w]:`${o}`,a=r<t.length-1?t[r+1]:null;s&&a&&vi(a)?(n.push(new nt(s,Os(a))),r+=2):(n.push(new nt(s,{})),r++)}return new x(n,{})}function zc(e){let i={};return Object.entries(e).forEach(([t,n])=>{typeof n=="string"&&(n=[n]),n!==null&&(i[t]=_r(new x([],{}),0,n))}),i}function Os(e){let i={};return Object.entries(e).forEach(([t,n])=>i[t]=`${n}`),i}function xs(e,i,t){return e==t.path&&He(i,t.parameters)}var bi="imperative",X=function(e){return e[e.NavigationStart=0]="NavigationStart",e[e.NavigationEnd=1]="NavigationEnd",e[e.NavigationCancel=2]="NavigationCancel",e[e.NavigationError=3]="NavigationError",e[e.RoutesRecognized=4]="RoutesRecognized",e[e.ResolveStart=5]="ResolveStart",e[e.ResolveEnd=6]="ResolveEnd",e[e.GuardsCheckStart=7]="GuardsCheckStart",e[e.GuardsCheckEnd=8]="GuardsCheckEnd",e[e.RouteConfigLoadStart=9]="RouteConfigLoadStart",e[e.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",e[e.ChildActivationStart=11]="ChildActivationStart",e[e.ChildActivationEnd=12]="ChildActivationEnd",e[e.ActivationStart=13]="ActivationStart",e[e.ActivationEnd=14]="ActivationEnd",e[e.Scroll=15]="Scroll",e[e.NavigationSkipped=16]="NavigationSkipped",e}(X||{}),ve=class{id;url;constructor(i,t){this.id=i,this.url=t}},ot=class extends ve{type=X.NavigationStart;navigationTrigger;restoredState;constructor(i,t,n="imperative",r=null){super(i,t),this.navigationTrigger=n,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},ye=class extends ve{urlAfterRedirects;type=X.NavigationEnd;constructor(i,t,n){super(i,t),this.urlAfterRedirects=n}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},he=function(e){return e[e.Redirect=0]="Redirect",e[e.SupersededByNewNavigation=1]="SupersededByNewNavigation",e[e.NoDataFromResolver=2]="NoDataFromResolver",e[e.GuardRejected=3]="GuardRejected",e}(he||{}),$t=function(e){return e[e.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",e[e.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",e}($t||{}),Ve=class extends ve{reason;code;type=X.NavigationCancel;constructor(i,t,n,r){super(i,t),this.reason=n,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}},qe=class extends ve{reason;code;type=X.NavigationSkipped;constructor(i,t,n,r){super(i,t),this.reason=n,this.code=r}},Ft=class extends ve{error;target;type=X.NavigationError;constructor(i,t,n,r){super(i,t),this.error=n,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},Cn=class extends ve{urlAfterRedirects;state;type=X.RoutesRecognized;constructor(i,t,n,r){super(i,t),this.urlAfterRedirects=n,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Si=class extends ve{urlAfterRedirects;state;type=X.GuardsCheckStart;constructor(i,t,n,r){super(i,t),this.urlAfterRedirects=n,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},wi=class extends ve{urlAfterRedirects;state;shouldActivate;type=X.GuardsCheckEnd;constructor(i,t,n,r,o){super(i,t),this.urlAfterRedirects=n,this.state=r,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},Ci=class extends ve{urlAfterRedirects;state;type=X.ResolveStart;constructor(i,t,n,r){super(i,t),this.urlAfterRedirects=n,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Ei=class extends ve{urlAfterRedirects;state;type=X.ResolveEnd;constructor(i,t,n,r){super(i,t),this.urlAfterRedirects=n,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Ti=class{route;type=X.RouteConfigLoadStart;constructor(i){this.route=i}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},_i=class{route;type=X.RouteConfigLoadEnd;constructor(i){this.route=i}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},Ri=class{snapshot;type=X.ChildActivationStart;constructor(i){this.snapshot=i}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Ii=class{snapshot;type=X.ChildActivationEnd;constructor(i){this.snapshot=i}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Oi=class{snapshot;type=X.ActivationStart;constructor(i){this.snapshot=i}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},xi=class{snapshot;type=X.ActivationEnd;constructor(i){this.snapshot=i}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Ut=class{routerEvent;position;anchor;type=X.Scroll;constructor(i,t,n){this.routerEvent=i,this.position=t,this.anchor=n}toString(){let i=this.position?`${this.position[0]}, ${this.position[1]}`:null;return`Scroll(anchor: '${this.anchor}', position: '${i}')`}},En=class{},jt=class{url;navigationBehaviorOptions;constructor(i,t){this.url=i,this.navigationBehaviorOptions=t}};function Hc(e,i){return e.providers&&!e._injector&&(e._injector=ii(e.providers,i,`Route: ${e.path}`)),e._injector??i}function Le(e){return e.outlet||w}function Vc(e,i){let t=e.filter(n=>Le(n)===i);return t.push(...e.filter(n=>Le(n)!==i)),t}function An(e){if(!e)return null;if(e.routeConfig?._injector)return e.routeConfig._injector;for(let i=e.parent;i;i=i.parent){let t=i.routeConfig;if(t?._loadedInjector)return t._loadedInjector;if(t?._injector)return t._injector}return null}var Ai=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return An(this.route?.snapshot)??this.rootInjector}constructor(i){this.rootInjector=i,this.children=new St(this.rootInjector)}},St=(()=>{class e{rootInjector;contexts=new Map;constructor(t){this.rootInjector=t}onChildOutletCreated(t,n){let r=this.getOrCreateContext(t);r.outlet=n,this.contexts.set(t,r)}onChildOutletDestroyed(t){let n=this.getContext(t);n&&(n.outlet=null,n.attachRef=null)}onOutletDeactivated(){let t=this.contexts;return this.contexts=new Map,t}onOutletReAttached(t){this.contexts=t}getOrCreateContext(t){let n=this.getContext(t);return n||(n=new Ai(this.rootInjector),this.contexts.set(t,n)),n}getContext(t){return this.contexts.get(t)||null}static \u0275fac=function(n){return new(n||e)(O(_t))};static \u0275prov=b({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Di=class{_root;constructor(i){this._root=i}get root(){return this._root.value}parent(i){let t=this.pathFromRoot(i);return t.length>1?t[t.length-2]:null}children(i){let t=Rr(i,this._root);return t?t.children.map(n=>n.value):[]}firstChild(i){let t=Rr(i,this._root);return t&&t.children.length>0?t.children[0].value:null}siblings(i){let t=Ir(i,this._root);return t.length<2?[]:t[t.length-2].children.map(r=>r.value).filter(r=>r!==i)}pathFromRoot(i){return Ir(i,this._root).map(t=>t.value)}};function Rr(e,i){if(e===i.value)return i;for(let t of i.children){let n=Rr(e,t);if(n)return n}return null}function Ir(e,i){if(e===i.value)return[i];for(let t of i.children){let n=Ir(e,t);if(n.length)return n.unshift(i),n}return[]}var be=class{value;children;constructor(i,t){this.value=i,this.children=t}toString(){return`TreeNode(${this.value})`}};function kt(e){let i={};return e&&e.children.forEach(t=>i[t.value.outlet]=t),i}var Tn=class extends Di{snapshot;constructor(i,t){super(i),this.snapshot=t,Lr(this,i)}toString(){return this.snapshot.toString()}};function Qs(e){let i=Wc(e),t=new Ee([new nt("",{})]),n=new Ee({}),r=new Ee({}),o=new Ee({}),s=new Ee(""),a=new Ge(t,n,o,s,r,w,e,i.root);return a.snapshot=i.root,new Tn(new be(a,[]),i)}function Wc(e){let i={},t={},n={},r="",o=new bt([],i,n,r,t,w,e,null,{});return new _n("",new be(o,[]))}var Ge=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(i,t,n,r,o,s,a,l){this.urlSubject=i,this.paramsSubject=t,this.queryParamsSubject=n,this.fragmentSubject=r,this.dataSubject=o,this.outlet=s,this.component=a,this._futureSnapshot=l,this.title=this.dataSubject?.pipe(N(c=>c[xn]))??S(void 0),this.url=i,this.params=t,this.queryParams=n,this.fragment=r,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(N(i=>vt(i))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(N(i=>vt(i))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function Mi(e,i,t="emptyOnly"){let n,{routeConfig:r}=e;return i!==null&&(t==="always"||r?.path===""||!i.component&&!i.routeConfig?.loadComponent)?n={params:g(g({},i.params),e.params),data:g(g({},i.data),e.data),resolve:g(g(g(g({},e.data),i.data),r?.data),e._resolvedData)}:n={params:g({},e.params),data:g({},e.data),resolve:g(g({},e.data),e._resolvedData??{})},r&&Xs(r)&&(n.resolve[xn]=r.title),n}var bt=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;get title(){return this.data?.[xn]}constructor(i,t,n,r,o,s,a,l,c){this.url=i,this.params=t,this.queryParams=n,this.fragment=r,this.data=o,this.outlet=s,this.component=a,this.routeConfig=l,this._resolve=c}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=vt(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=vt(this.queryParams),this._queryParamMap}toString(){let i=this.url.map(n=>n.toString()).join("/"),t=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${i}', path:'${t}')`}},_n=class extends Di{url;constructor(i,t){super(t),this.url=i,Lr(this,t)}toString(){return Ys(this._root)}};function Lr(e,i){i.value._routerState=e,i.children.forEach(t=>Lr(e,t))}function Ys(e){let i=e.children.length>0?` { ${e.children.map(Ys).join(", ")} } `:"";return`${e.value}${i}`}function yr(e){if(e.snapshot){let i=e.snapshot,t=e._futureSnapshot;e.snapshot=t,He(i.queryParams,t.queryParams)||e.queryParamsSubject.next(t.queryParams),i.fragment!==t.fragment&&e.fragmentSubject.next(t.fragment),He(i.params,t.params)||e.paramsSubject.next(t.params),yc(i.url,t.url)||e.urlSubject.next(t.url),He(i.data,t.data)||e.dataSubject.next(t.data)}else e.snapshot=e._futureSnapshot,e.dataSubject.next(e._futureSnapshot.data)}function Or(e,i){let t=He(e.params,i.params)&&Ec(e.url,i.url),n=!e.parent!=!i.parent;return t&&!n&&(!e.parent||Or(e.parent,i.parent))}function Xs(e){return typeof e.title=="string"||e.title===null}var Zs=new k(""),Pr=(()=>{class e{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=w;activateEvents=new Ae;deactivateEvents=new Ae;attachEvents=new Ae;detachEvents=new Ae;routerOutletData=je(void 0);parentContexts=h(St);location=h(Ko);changeDetector=h(At);inputBinder=h(Dn,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(t){if(t.name){let{firstChange:n,previousValue:r}=t.name;if(n)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(t){return this.parentContexts.getContext(t)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let t=this.parentContexts.getContext(this.name);t?.route&&(t.attachRef?this.attach(t.attachRef,t.route):this.activateWith(t.route,t.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new D(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new D(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new D(4012,!1);this.location.detach();let t=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(t.instance),t}attach(t,n){this.activated=t,this._activatedRoute=n,this.location.insert(t.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(t.instance)}deactivate(){if(this.activated){let t=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(t)}}activateWith(t,n){if(this.isActivated)throw new D(4013,!1);this._activatedRoute=t;let r=this.location,s=t.snapshot.component,a=this.parentContexts.getOrCreateContext(this.name).children,l=new xr(t,a,r.injector,this.routerOutletData);this.activated=r.createComponent(s,{index:r.length,injector:l,environmentInjector:n}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(n){return new(n||e)};static \u0275dir=ne({type:e,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[Ue]})}return e})(),xr=class{route;childContexts;parent;outletData;constructor(i,t,n,r){this.route=i,this.childContexts=t,this.parent=n,this.outletData=r}get(i,t){return i===Ge?this.route:i===St?this.childContexts:i===Zs?this.outletData:this.parent.get(i,t)}},Dn=new k(""),$r=(()=>{class e{outletDataSubscriptions=new Map;bindActivatedRouteToOutletComponent(t){this.unsubscribeFromRouteData(t),this.subscribeToRouteData(t)}unsubscribeFromRouteData(t){this.outletDataSubscriptions.get(t)?.unsubscribe(),this.outletDataSubscriptions.delete(t)}subscribeToRouteData(t){let{activatedRoute:n}=t,r=ei([n.queryParams,n.params,n.data]).pipe(Oe(([o,s,a],l)=>(a=g(g(g({},o),s),a),l===0?S(a):Promise.resolve(a)))).subscribe(o=>{if(!t.isActivated||!t.activatedComponentRef||t.activatedRoute!==n||n.component===null){this.unsubscribeFromRouteData(t);return}let s=rs(n.component);if(!s){this.unsubscribeFromRouteData(t);return}for(let{templateName:a}of s.inputs)t.activatedComponentRef.setInput(a,o[a])});this.outletDataSubscriptions.set(t,r)}static \u0275fac=function(n){return new(n||e)};static \u0275prov=b({token:e,factory:e.\u0275fac})}return e})(),Fr=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275cmp=z({type:e,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(n,r){n&1&&J(0,"router-outlet")},dependencies:[Pr],encapsulation:2})}return e})();function Ur(e){let i=e.children&&e.children.map(Ur),t=i?oe(g({},e),{children:i}):g({},e);return!t.component&&!t.loadComponent&&(i||t.loadChildren)&&t.outlet&&t.outlet!==w&&(t.component=Fr),t}function qc(e,i,t){let n=Rn(e,i._root,t?t._root:void 0);return new Tn(n,i)}function Rn(e,i,t){if(t&&e.shouldReuseRoute(i.value,t.value.snapshot)){let n=t.value;n._futureSnapshot=i.value;let r=Gc(e,i,t);return new be(n,r)}else{if(e.shouldAttach(i.value)){let o=e.retrieve(i.value);if(o!==null){let s=o.route;return s.value._futureSnapshot=i.value,s.children=i.children.map(a=>Rn(e,a)),s}}let n=Kc(i.value),r=i.children.map(o=>Rn(e,o));return new be(n,r)}}function Gc(e,i,t){return i.children.map(n=>{for(let r of t.children)if(e.shouldReuseRoute(n.value,r.value.snapshot))return Rn(e,n,r);return Rn(e,n)})}function Kc(e){return new Ge(new Ee(e.url),new Ee(e.params),new Ee(e.queryParams),new Ee(e.fragment),new Ee(e.data),e.outlet,e.component,e)}var Bt=class{redirectTo;navigationBehaviorOptions;constructor(i,t){this.redirectTo=i,this.navigationBehaviorOptions=t}},Js="ngNavigationCancelingError";function Ni(e,i){let{redirectTo:t,navigationBehaviorOptions:n}=rt(i)?{redirectTo:i,navigationBehaviorOptions:void 0}:i,r=ea(!1,he.Redirect);return r.url=t,r.navigationBehaviorOptions=n,r}function ea(e,i){let t=new Error(`NavigationCancelingError: ${e||""}`);return t[Js]=!0,t.cancellationCode=i,t}function Qc(e){return ta(e)&&rt(e.url)}function ta(e){return!!e&&e[Js]}var Yc=(e,i,t,n)=>N(r=>(new Ar(i,r.targetRouterState,r.currentRouterState,t,n).activate(e),r)),Ar=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(i,t,n,r,o){this.routeReuseStrategy=i,this.futureState=t,this.currState=n,this.forwardEvent=r,this.inputBindingEnabled=o}activate(i){let t=this.futureState._root,n=this.currState?this.currState._root:null;this.deactivateChildRoutes(t,n,i),yr(this.futureState.root),this.activateChildRoutes(t,n,i)}deactivateChildRoutes(i,t,n){let r=kt(t);i.children.forEach(o=>{let s=o.value.outlet;this.deactivateRoutes(o,r[s],n),delete r[s]}),Object.values(r).forEach(o=>{this.deactivateRouteAndItsChildren(o,n)})}deactivateRoutes(i,t,n){let r=i.value,o=t?t.value:null;if(r===o)if(r.component){let s=n.getContext(r.outlet);s&&this.deactivateChildRoutes(i,t,s.children)}else this.deactivateChildRoutes(i,t,n);else o&&this.deactivateRouteAndItsChildren(t,n)}deactivateRouteAndItsChildren(i,t){i.value.component&&this.routeReuseStrategy.shouldDetach(i.value.snapshot)?this.detachAndStoreRouteSubtree(i,t):this.deactivateRouteAndOutlet(i,t)}detachAndStoreRouteSubtree(i,t){let n=t.getContext(i.value.outlet),r=n&&i.value.component?n.children:t,o=kt(i);for(let s of Object.values(o))this.deactivateRouteAndItsChildren(s,r);if(n&&n.outlet){let s=n.outlet.detach(),a=n.children.onOutletDeactivated();this.routeReuseStrategy.store(i.value.snapshot,{componentRef:s,route:i,contexts:a})}}deactivateRouteAndOutlet(i,t){let n=t.getContext(i.value.outlet),r=n&&i.value.component?n.children:t,o=kt(i);for(let s of Object.values(o))this.deactivateRouteAndItsChildren(s,r);n&&(n.outlet&&(n.outlet.deactivate(),n.children.onOutletDeactivated()),n.attachRef=null,n.route=null)}activateChildRoutes(i,t,n){let r=kt(t);i.children.forEach(o=>{this.activateRoutes(o,r[o.value.outlet],n),this.forwardEvent(new xi(o.value.snapshot))}),i.children.length&&this.forwardEvent(new Ii(i.value.snapshot))}activateRoutes(i,t,n){let r=i.value,o=t?t.value:null;if(yr(r),r===o)if(r.component){let s=n.getOrCreateContext(r.outlet);this.activateChildRoutes(i,t,s.children)}else this.activateChildRoutes(i,t,n);else if(r.component){let s=n.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let a=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),s.children.onOutletReAttached(a.contexts),s.attachRef=a.componentRef,s.route=a.route.value,s.outlet&&s.outlet.attach(a.componentRef,a.route.value),yr(a.route.value),this.activateChildRoutes(i,null,s.children)}else s.attachRef=null,s.route=r,s.outlet&&s.outlet.activateWith(r,s.injector),this.activateChildRoutes(i,null,s.children)}else this.activateChildRoutes(i,null,n)}},ki=class{path;route;constructor(i){this.path=i,this.route=this.path[this.path.length-1]}},Pt=class{component;route;constructor(i,t){this.component=i,this.route=t}};function Xc(e,i,t){let n=e._root,r=i?i._root:null;return vn(n,r,t,[n.value])}function Zc(e){let i=e.routeConfig?e.routeConfig.canActivateChild:null;return!i||i.length===0?null:{node:e,guards:i}}function Ht(e,i){let t=Symbol(),n=i.get(e,t);return n===t?typeof e=="function"&&!Ro(e)?e:i.get(e):n}function vn(e,i,t,n,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=kt(i);return e.children.forEach(s=>{Jc(s,o[s.value.outlet],t,n.concat([s.value]),r),delete o[s.value.outlet]}),Object.entries(o).forEach(([s,a])=>Sn(a,t.getContext(s),r)),r}function Jc(e,i,t,n,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=e.value,s=i?i.value:null,a=t?t.getContext(e.value.outlet):null;if(s&&o.routeConfig===s.routeConfig){let l=eu(s,o,o.routeConfig.runGuardsAndResolvers);l?r.canActivateChecks.push(new ki(n)):(o.data=s.data,o._resolvedData=s._resolvedData),o.component?vn(e,i,a?a.children:null,n,r):vn(e,i,t,n,r),l&&a&&a.outlet&&a.outlet.isActivated&&r.canDeactivateChecks.push(new Pt(a.outlet.component,s))}else s&&Sn(i,a,r),r.canActivateChecks.push(new ki(n)),o.component?vn(e,null,a?a.children:null,n,r):vn(e,null,t,n,r);return r}function eu(e,i,t){if(typeof t=="function")return t(e,i);switch(t){case"pathParamsChange":return!mt(e.url,i.url);case"pathParamsOrQueryParamsChange":return!mt(e.url,i.url)||!He(e.queryParams,i.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Or(e,i)||!He(e.queryParams,i.queryParams);case"paramsChange":default:return!Or(e,i)}}function Sn(e,i,t){let n=kt(e),r=e.value;Object.entries(n).forEach(([o,s])=>{r.component?i?Sn(s,i.children.getContext(o),t):Sn(s,null,t):Sn(s,i,t)}),r.component?i&&i.outlet&&i.outlet.isActivated?t.canDeactivateChecks.push(new Pt(i.outlet.component,r)):t.canDeactivateChecks.push(new Pt(null,r)):t.canDeactivateChecks.push(new Pt(null,r))}function Mn(e){return typeof e=="function"}function tu(e){return typeof e=="boolean"}function nu(e){return e&&Mn(e.canLoad)}function iu(e){return e&&Mn(e.canActivate)}function ru(e){return e&&Mn(e.canActivateChild)}function ou(e){return e&&Mn(e.canDeactivate)}function su(e){return e&&Mn(e.canMatch)}function na(e){return e instanceof So||e?.name==="EmptyError"}var hi=Symbol("INITIAL_VALUE");function zt(){return Oe(e=>ei(e.map(i=>i.pipe(Tt(1),To(hi)))).pipe(N(i=>{for(let t of i)if(t!==!0){if(t===hi)return hi;if(t===!1||au(t))return t}return!0}),Ze(i=>i!==hi),Tt(1)))}function au(e){return rt(e)||e instanceof Bt}function lu(e,i){return de(t=>{let{targetSnapshot:n,currentSnapshot:r,guards:{canActivateChecks:o,canDeactivateChecks:s}}=t;return s.length===0&&o.length===0?S(oe(g({},t),{guardsResult:!0})):cu(s,n,r,e).pipe(de(a=>a&&tu(a)?uu(n,o,e,i):S(a)),N(a=>oe(g({},t),{guardsResult:a})))})}function cu(e,i,t,n){return le(e).pipe(de(r=>gu(r.component,r.route,t,i,n)),Je(r=>r!==!0,!0))}function uu(e,i,t,n){return le(i).pipe(ut(r=>wo(pu(r.route.parent,n),du(r.route,n),fu(e,r.path,t),hu(e,r.route,t))),Je(r=>r!==!0,!0))}function du(e,i){return e!==null&&i&&i(new Oi(e)),S(!0)}function pu(e,i){return e!==null&&i&&i(new Ri(e)),S(!0)}function hu(e,i,t){let n=i.routeConfig?i.routeConfig.canActivate:null;if(!n||n.length===0)return S(!0);let r=n.map(o=>Qi(()=>{let s=An(i)??t,a=Ht(o,s),l=iu(a)?a.canActivate(i,e):xe(s,()=>a(i,e));return st(l).pipe(Je())}));return S(r).pipe(zt())}function fu(e,i,t){let n=i[i.length-1],o=i.slice(0,i.length-1).reverse().map(s=>Zc(s)).filter(s=>s!==null).map(s=>Qi(()=>{let a=s.guards.map(l=>{let c=An(s.node)??t,u=Ht(l,c),d=ru(u)?u.canActivateChild(n,e):xe(c,()=>u(n,e));return st(d).pipe(Je())});return S(a).pipe(zt())}));return S(o).pipe(zt())}function gu(e,i,t,n,r){let o=i&&i.routeConfig?i.routeConfig.canDeactivate:null;if(!o||o.length===0)return S(!0);let s=o.map(a=>{let l=An(i)??r,c=Ht(a,l),u=ou(c)?c.canDeactivate(e,i,t,n):xe(l,()=>c(e,i,t,n));return st(u).pipe(Je())});return S(s).pipe(zt())}function mu(e,i,t,n){let r=i.canLoad;if(r===void 0||r.length===0)return S(!0);let o=r.map(s=>{let a=Ht(s,e),l=nu(a)?a.canLoad(i,t):xe(e,()=>a(i,t));return st(l)});return S(o).pipe(zt(),ia(n))}function ia(e){return vo(Z(i=>{if(typeof i!="boolean")throw Ni(e,i)}),N(i=>i===!0))}function bu(e,i,t,n){let r=i.canMatch;if(!r||r.length===0)return S(!0);let o=r.map(s=>{let a=Ht(s,e),l=su(a)?a.canMatch(i,t):xe(e,()=>a(i,t));return st(l)});return S(o).pipe(zt(),ia(n))}var In=class{segmentGroup;constructor(i){this.segmentGroup=i||null}},On=class extends Error{urlTree;constructor(i){super(),this.urlTree=i}};function Nt(e){return Yt(new In(e))}function vu(e){return Yt(new D(4e3,!1))}function yu(e){return Yt(ea(!1,he.GuardRejected))}var Dr=class{urlSerializer;urlTree;constructor(i,t){this.urlSerializer=i,this.urlTree=t}lineralizeSegments(i,t){let n=[],r=t.root;for(;;){if(n=n.concat(r.segments),r.numberOfChildren===0)return S(n);if(r.numberOfChildren>1||!r.children[w])return vu(`${i.redirectTo}`);r=r.children[w]}}applyRedirectCommands(i,t,n,r,o){if(typeof t!="string"){let a=t,{queryParams:l,fragment:c,routeConfig:u,url:d,outlet:p,params:f,data:y,title:C}=r,A=xe(o,()=>a({params:f,data:y,queryParams:l,fragment:c,routeConfig:u,url:d,outlet:p,title:C}));if(A instanceof We)throw new On(A);t=A}let s=this.applyRedirectCreateUrlTree(t,this.urlSerializer.parse(t),i,n);if(t[0]==="/")throw new On(s);return s}applyRedirectCreateUrlTree(i,t,n,r){let o=this.createSegmentGroup(i,t.root,n,r);return new We(o,this.createQueryParams(t.queryParams,this.urlTree.queryParams),t.fragment)}createQueryParams(i,t){let n={};return Object.entries(i).forEach(([r,o])=>{if(typeof o=="string"&&o[0]===":"){let a=o.substring(1);n[r]=t[a]}else n[r]=o}),n}createSegmentGroup(i,t,n,r){let o=this.createSegments(i,t.segments,n,r),s={};return Object.entries(t.children).forEach(([a,l])=>{s[a]=this.createSegmentGroup(i,l,n,r)}),new x(o,s)}createSegments(i,t,n,r){return t.map(o=>o.path[0]===":"?this.findPosParam(i,o,r):this.findOrReturn(o,n))}findPosParam(i,t,n){let r=n[t.path.substring(1)];if(!r)throw new D(4001,!1);return r}findOrReturn(i,t){let n=0;for(let r of t){if(r.path===i.path)return t.splice(n),r;n++}return i}},Mr={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function Su(e,i,t,n,r){let o=ra(e,i,t);return o.matched?(n=Hc(i,n),bu(n,i,t,r).pipe(N(s=>s===!0?o:g({},Mr)))):S(o)}function ra(e,i,t){if(i.path==="**")return wu(t);if(i.path==="")return i.pathMatch==="full"&&(e.hasChildren()||t.length>0)?g({},Mr):{matched:!0,consumedSegments:[],remainingSegments:t,parameters:{},positionalParamSegments:{}};let r=(i.matcher||Ns)(t,e,i);if(!r)return g({},Mr);let o={};Object.entries(r.posParams??{}).forEach(([a,l])=>{o[a]=l.path});let s=r.consumed.length>0?g(g({},o),r.consumed[r.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:r.consumed,remainingSegments:t.slice(r.consumed.length),parameters:s,positionalParamSegments:r.posParams??{}}}function wu(e){return{matched:!0,parameters:e.length>0?Ls(e).parameters:{},consumedSegments:e,remainingSegments:[],positionalParamSegments:{}}}function As(e,i,t,n){return t.length>0&&Tu(e,t,n)?{segmentGroup:new x(i,Eu(n,new x(t,e.children))),slicedSegments:[]}:t.length===0&&_u(e,t,n)?{segmentGroup:new x(e.segments,Cu(e,t,n,e.children)),slicedSegments:t}:{segmentGroup:new x(e.segments,e.children),slicedSegments:t}}function Cu(e,i,t,n){let r={};for(let o of t)if(Pi(e,i,o)&&!n[Le(o)]){let s=new x([],{});r[Le(o)]=s}return g(g({},n),r)}function Eu(e,i){let t={};t[w]=i;for(let n of e)if(n.path===""&&Le(n)!==w){let r=new x([],{});t[Le(n)]=r}return t}function Tu(e,i,t){return t.some(n=>Pi(e,i,n)&&Le(n)!==w)}function _u(e,i,t){return t.some(n=>Pi(e,i,n))}function Pi(e,i,t){return(e.hasChildren()||i.length>0)&&t.pathMatch==="full"?!1:t.path===""}function Ru(e,i,t){return i.length===0&&!e.children[t]}var Nr=class{};function Iu(e,i,t,n,r,o,s="emptyOnly"){return new kr(e,i,t,n,r,s,o).recognize()}var Ou=31,kr=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(i,t,n,r,o,s,a){this.injector=i,this.configLoader=t,this.rootComponentType=n,this.config=r,this.urlTree=o,this.paramsInheritanceStrategy=s,this.urlSerializer=a,this.applyRedirects=new Dr(this.urlSerializer,this.urlTree)}noMatchError(i){return new D(4002,`'${i.segmentGroup}'`)}recognize(){let i=As(this.urlTree.root,[],[],this.config).segmentGroup;return this.match(i).pipe(N(({children:t,rootSnapshot:n})=>{let r=new be(n,t),o=new _n("",r),s=Vs(n,[],this.urlTree.queryParams,this.urlTree.fragment);return s.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(s),{state:o,tree:s}}))}match(i){let t=new bt([],Object.freeze({}),Object.freeze(g({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),w,this.rootComponentType,null,{});return this.processSegmentGroup(this.injector,this.config,i,w,t).pipe(N(n=>({children:n,rootSnapshot:t})),ct(n=>{if(n instanceof On)return this.urlTree=n.urlTree,this.match(n.urlTree.root);throw n instanceof In?this.noMatchError(n):n}))}processSegmentGroup(i,t,n,r,o){return n.segments.length===0&&n.hasChildren()?this.processChildren(i,t,n,o):this.processSegment(i,t,n,n.segments,r,!0,o).pipe(N(s=>s instanceof be?[s]:[]))}processChildren(i,t,n,r){let o=[];for(let s of Object.keys(n.children))s==="primary"?o.unshift(s):o.push(s);return le(o).pipe(ut(s=>{let a=n.children[s],l=Vc(t,s);return this.processSegmentGroup(i,l,a,s,r)}),Eo((s,a)=>(s.push(...a),s)),Yi(null),Co(),de(s=>{if(s===null)return Nt(n);let a=oa(s);return xu(a),S(a)}))}processSegment(i,t,n,r,o,s,a){return le(t).pipe(ut(l=>this.processSegmentAgainstRoute(l._injector??i,t,l,n,r,o,s,a).pipe(ct(c=>{if(c instanceof In)return S(null);throw c}))),Je(l=>!!l),ct(l=>{if(na(l))return Ru(n,r,o)?S(new Nr):Nt(n);throw l}))}processSegmentAgainstRoute(i,t,n,r,o,s,a,l){return Le(n)!==s&&(s===w||!Pi(r,o,n))?Nt(r):n.redirectTo===void 0?this.matchSegmentAgainstRoute(i,r,n,o,s,l):this.allowRedirects&&a?this.expandSegmentAgainstRouteUsingRedirect(i,r,t,n,o,s,l):Nt(r)}expandSegmentAgainstRouteUsingRedirect(i,t,n,r,o,s,a){let{matched:l,parameters:c,consumedSegments:u,positionalParamSegments:d,remainingSegments:p}=ra(t,r,o);if(!l)return Nt(t);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>Ou&&(this.allowRedirects=!1));let f=new bt(o,c,Object.freeze(g({},this.urlTree.queryParams)),this.urlTree.fragment,Ds(r),Le(r),r.component??r._loadedComponent??null,r,Ms(r)),y=Mi(f,a,this.paramsInheritanceStrategy);f.params=Object.freeze(y.params),f.data=Object.freeze(y.data);let C=this.applyRedirects.applyRedirectCommands(u,r.redirectTo,d,f,i);return this.applyRedirects.lineralizeSegments(r,C).pipe(de(A=>this.processSegment(i,n,t,A.concat(p),s,!1,a)))}matchSegmentAgainstRoute(i,t,n,r,o,s){let a=Su(t,n,r,i,this.urlSerializer);return n.path==="**"&&(t.children={}),a.pipe(Oe(l=>l.matched?(i=n._injector??i,this.getChildConfig(i,n,r).pipe(Oe(({routes:c})=>{let u=n._loadedInjector??i,{parameters:d,consumedSegments:p,remainingSegments:f}=l,y=new bt(p,d,Object.freeze(g({},this.urlTree.queryParams)),this.urlTree.fragment,Ds(n),Le(n),n.component??n._loadedComponent??null,n,Ms(n)),C=Mi(y,s,this.paramsInheritanceStrategy);y.params=Object.freeze(C.params),y.data=Object.freeze(C.data);let{segmentGroup:A,slicedSegments:H}=As(t,p,f,c);if(H.length===0&&A.hasChildren())return this.processChildren(u,c,A,y).pipe(N(re=>new be(y,re)));if(c.length===0&&H.length===0)return S(new be(y,[]));let B=Le(n)===o;return this.processSegment(u,c,A,H,B?w:o,!0,y).pipe(N(re=>new be(y,re instanceof be?[re]:[])))}))):Nt(t)))}getChildConfig(i,t,n){return t.children?S({routes:t.children,injector:i}):t.loadChildren?t._loadedRoutes!==void 0?S({routes:t._loadedRoutes,injector:t._loadedInjector}):mu(i,t,n,this.urlSerializer).pipe(de(r=>r?this.configLoader.loadChildren(i,t).pipe(Z(o=>{t._loadedRoutes=o.routes,t._loadedInjector=o.injector})):yu(t))):S({routes:[],injector:i})}};function xu(e){e.sort((i,t)=>i.value.outlet===w?-1:t.value.outlet===w?1:i.value.outlet.localeCompare(t.value.outlet))}function Au(e){let i=e.value.routeConfig;return i&&i.path===""}function oa(e){let i=[],t=new Set;for(let n of e){if(!Au(n)){i.push(n);continue}let r=i.find(o=>n.value.routeConfig===o.value.routeConfig);r!==void 0?(r.children.push(...n.children),t.add(r)):i.push(n)}for(let n of t){let r=oa(n.children);i.push(new be(n.value,r))}return i.filter(n=>!t.has(n))}function Ds(e){return e.data||{}}function Ms(e){return e.resolve||{}}function Du(e,i,t,n,r,o){return de(s=>Iu(e,i,t,n,s.extractedUrl,r,o).pipe(N(({state:a,tree:l})=>oe(g({},s),{targetSnapshot:a,urlAfterRedirects:l}))))}function Mu(e,i){return de(t=>{let{targetSnapshot:n,guards:{canActivateChecks:r}}=t;if(!r.length)return S(t);let o=new Set(r.map(l=>l.route)),s=new Set;for(let l of o)if(!s.has(l))for(let c of sa(l))s.add(c);let a=0;return le(s).pipe(ut(l=>o.has(l)?Nu(l,n,e,i):(l.data=Mi(l,l.parent,e).resolve,S(void 0))),Z(()=>a++),Xi(1),de(l=>a===s.size?S(t):Qe))})}function sa(e){let i=e.children.map(t=>sa(t)).flat();return[e,...i]}function Nu(e,i,t,n){let r=e.routeConfig,o=e._resolve;return r?.title!==void 0&&!Xs(r)&&(o[xn]=r.title),ku(o,e,i,n).pipe(N(s=>(e._resolvedData=s,e.data=Mi(e,e.parent,t).resolve,null)))}function ku(e,i,t,n){let r=Cr(e);if(r.length===0)return S({});let o={};return le(r).pipe(de(s=>Lu(e[s],i,t,n).pipe(Je(),Z(a=>{if(a instanceof Bt)throw Ni(new it,a);o[s]=a}))),Xi(1),N(()=>o),ct(s=>na(s)?Qe:Yt(s)))}function Lu(e,i,t,n){let r=An(i)??n,o=Ht(e,r),s=o.resolve?o.resolve(i,t):xe(r,()=>o(i,t));return st(s)}function Sr(e){return Oe(i=>{let t=e(i);return t?le(t).pipe(N(()=>i)):S(i)})}var jr=(()=>{class e{buildTitle(t){let n,r=t.root;for(;r!==void 0;)n=this.getResolvedTitleForRoute(r)??n,r=r.children.find(o=>o.outlet===w);return n}getResolvedTitleForRoute(t){return t.data[xn]}static \u0275fac=function(n){return new(n||e)};static \u0275prov=b({token:e,factory:()=>h(aa),providedIn:"root"})}return e})(),aa=(()=>{class e extends jr{title;constructor(t){super(),this.title=t}updateTitle(t){let n=this.buildTitle(t);n!==void 0&&this.title.setTitle(n)}static \u0275fac=function(n){return new(n||e)(O(_s))};static \u0275prov=b({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),wt=new k("",{providedIn:"root",factory:()=>({})}),Ct=new k(""),$i=(()=>{class e{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=h(es);loadComponent(t){if(this.componentLoaders.get(t))return this.componentLoaders.get(t);if(t._loadedComponent)return S(t._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(t);let n=st(t.loadComponent()).pipe(N(ca),Z(o=>{this.onLoadEndListener&&this.onLoadEndListener(t),t._loadedComponent=o}),ti(()=>{this.componentLoaders.delete(t)})),r=new Ki(n,()=>new ge).pipe(Gi());return this.componentLoaders.set(t,r),r}loadChildren(t,n){if(this.childrenLoaders.get(n))return this.childrenLoaders.get(n);if(n._loadedRoutes)return S({routes:n._loadedRoutes,injector:n._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(n);let o=la(n,this.compiler,t,this.onLoadEndListener).pipe(ti(()=>{this.childrenLoaders.delete(n)})),s=new Ki(o,()=>new ge).pipe(Gi());return this.childrenLoaders.set(n,s),s}static \u0275fac=function(n){return new(n||e)};static \u0275prov=b({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function la(e,i,t,n){return st(e.loadChildren()).pipe(N(ca),de(r=>r instanceof Qo||Array.isArray(r)?S(r):le(i.compileModuleAsync(r))),N(r=>{n&&n(e);let o,s,a=!1;return Array.isArray(r)?(s=r,a=!0):(o=r.create(t).injector,s=o.get(Ct,[],{optional:!0,self:!0}).flat()),{routes:s.map(Ur),injector:o}}))}function Pu(e){return e&&typeof e=="object"&&"default"in e}function ca(e){return Pu(e)?e.default:e}var Fi=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275prov=b({token:e,factory:()=>h($u),providedIn:"root"})}return e})(),$u=(()=>{class e{shouldProcessUrl(t){return!0}extract(t){return t}merge(t,n){return t}static \u0275fac=function(n){return new(n||e)};static \u0275prov=b({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Br=new k(""),zr=new k("");function ua(e,i,t){let n=e.get(zr),r=e.get(j);return e.get(Te).runOutsideAngular(()=>{if(!r.startViewTransition||n.skipNextTransition)return n.skipNextTransition=!1,new Promise(c=>setTimeout(c));let o,s=new Promise(c=>{o=c}),a=r.startViewTransition(()=>(o(),Fu(e))),{onViewTransitionCreated:l}=n;return l&&xe(e,()=>l({transition:a,from:i,to:t})),s})}function Fu(e){return new Promise(i=>{Po({read:()=>setTimeout(i)},{injector:e})})}var Hr=new k(""),Ui=(()=>{class e{currentNavigation=null;currentTransition=null;lastSuccessfulNavigation=null;events=new ge;transitionAbortSubject=new ge;configLoader=h($i);environmentInjector=h(_t);destroyRef=h(Ji);urlSerializer=h(yt);rootContexts=h(St);location=h(Dt);inputBindingEnabled=h(Dn,{optional:!0})!==null;titleStrategy=h(jr);options=h(wt,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=h(Fi);createViewTransition=h(Br,{optional:!0});navigationErrorHandler=h(Hr,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>S(void 0);rootComponentType=null;destroyed=!1;constructor(){let t=r=>this.events.next(new Ti(r)),n=r=>this.events.next(new _i(r));this.configLoader.onLoadEndListener=n,this.configLoader.onLoadStartListener=t,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(t){let n=++this.navigationId;this.transitions?.next(oe(g({},t),{extractedUrl:this.urlHandlingStrategy.extract(t.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:n}))}setupNavigations(t){return this.transitions=new Ee(null),this.transitions.pipe(Ze(n=>n!==null),Oe(n=>{let r=!1,o=!1;return S(n).pipe(Oe(s=>{if(this.navigationId>n.id)return this.cancelNavigationTransition(n,"",he.SupersededByNewNavigation),Qe;this.currentTransition=n,this.currentNavigation={id:s.id,initialUrl:s.rawUrl,extractedUrl:s.extractedUrl,targetBrowserUrl:typeof s.extras.browserUrl=="string"?this.urlSerializer.parse(s.extras.browserUrl):s.extras.browserUrl,trigger:s.source,extras:s.extras,previousNavigation:this.lastSuccessfulNavigation?oe(g({},this.lastSuccessfulNavigation),{previousNavigation:null}):null};let a=!t.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),l=s.extras.onSameUrlNavigation??t.onSameUrlNavigation;if(!a&&l!=="reload"){let c="";return this.events.next(new qe(s.id,this.urlSerializer.serialize(s.rawUrl),c,$t.IgnoredSameUrlNavigation)),s.resolve(!1),Qe}if(this.urlHandlingStrategy.shouldProcessUrl(s.rawUrl))return S(s).pipe(Oe(c=>(this.events.next(new ot(c.id,this.urlSerializer.serialize(c.extractedUrl),c.source,c.restoredState)),c.id!==this.navigationId?Qe:Promise.resolve(c))),Du(this.environmentInjector,this.configLoader,this.rootComponentType,t.config,this.urlSerializer,this.paramsInheritanceStrategy),Z(c=>{n.targetSnapshot=c.targetSnapshot,n.urlAfterRedirects=c.urlAfterRedirects,this.currentNavigation=oe(g({},this.currentNavigation),{finalUrl:c.urlAfterRedirects});let u=new Cn(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);this.events.next(u)}));if(a&&this.urlHandlingStrategy.shouldProcessUrl(s.currentRawUrl)){let{id:c,extractedUrl:u,source:d,restoredState:p,extras:f}=s,y=new ot(c,this.urlSerializer.serialize(u),d,p);this.events.next(y);let C=Qs(this.rootComponentType).snapshot;return this.currentTransition=n=oe(g({},s),{targetSnapshot:C,urlAfterRedirects:u,extras:oe(g({},f),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.finalUrl=u,S(n)}else{let c="";return this.events.next(new qe(s.id,this.urlSerializer.serialize(s.extractedUrl),c,$t.IgnoredByUrlHandlingStrategy)),s.resolve(!1),Qe}}),Z(s=>{let a=new Si(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(a)}),N(s=>(this.currentTransition=n=oe(g({},s),{guards:Xc(s.targetSnapshot,s.currentSnapshot,this.rootContexts)}),n)),lu(this.environmentInjector,s=>this.events.next(s)),Z(s=>{if(n.guardsResult=s.guardsResult,s.guardsResult&&typeof s.guardsResult!="boolean")throw Ni(this.urlSerializer,s.guardsResult);let a=new wi(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot,!!s.guardsResult);this.events.next(a)}),Ze(s=>s.guardsResult?!0:(this.cancelNavigationTransition(s,"",he.GuardRejected),!1)),Sr(s=>{if(s.guards.canActivateChecks.length!==0)return S(s).pipe(Z(a=>{let l=new Ci(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);this.events.next(l)}),Oe(a=>{let l=!1;return S(a).pipe(Mu(this.paramsInheritanceStrategy,this.environmentInjector),Z({next:()=>l=!0,complete:()=>{l||this.cancelNavigationTransition(a,"",he.NoDataFromResolver)}}))}),Z(a=>{let l=new Ei(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);this.events.next(l)}))}),Sr(s=>{let a=l=>{let c=[];l.routeConfig?.loadComponent&&!l.routeConfig._loadedComponent&&c.push(this.configLoader.loadComponent(l.routeConfig).pipe(Z(u=>{l.component=u}),N(()=>{})));for(let u of l.children)c.push(...a(u));return c};return ei(a(s.targetSnapshot.root)).pipe(Yi(null),Tt(1))}),Sr(()=>this.afterPreactivation()),Oe(()=>{let{currentSnapshot:s,targetSnapshot:a}=n,l=this.createViewTransition?.(this.environmentInjector,s.root,a.root);return l?le(l).pipe(N(()=>n)):S(n)}),N(s=>{let a=qc(t.routeReuseStrategy,s.targetSnapshot,s.currentRouterState);return this.currentTransition=n=oe(g({},s),{targetRouterState:a}),this.currentNavigation.targetRouterState=a,n}),Z(()=>{this.events.next(new En)}),Yc(this.rootContexts,t.routeReuseStrategy,s=>this.events.next(s),this.inputBindingEnabled),Tt(1),Z({next:s=>{r=!0,this.lastSuccessfulNavigation=this.currentNavigation,this.events.next(new ye(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects))),this.titleStrategy?.updateTitle(s.targetRouterState.snapshot),s.resolve(!0)},complete:()=>{r=!0}}),_o(this.transitionAbortSubject.pipe(Z(s=>{throw s}))),ti(()=>{!r&&!o&&this.cancelNavigationTransition(n,"",he.SupersededByNewNavigation),this.currentTransition?.id===n.id&&(this.currentNavigation=null,this.currentTransition=null)}),ct(s=>{if(this.destroyed)return n.resolve(!1),Qe;if(o=!0,ta(s))this.events.next(new Ve(n.id,this.urlSerializer.serialize(n.extractedUrl),s.message,s.cancellationCode)),Qc(s)?this.events.next(new jt(s.url,s.navigationBehaviorOptions)):n.resolve(!1);else{let a=new Ft(n.id,this.urlSerializer.serialize(n.extractedUrl),s,n.targetSnapshot??void 0);try{let l=xe(this.environmentInjector,()=>this.navigationErrorHandler?.(a));if(l instanceof Bt){let{message:c,cancellationCode:u}=Ni(this.urlSerializer,l);this.events.next(new Ve(n.id,this.urlSerializer.serialize(n.extractedUrl),c,u)),this.events.next(new jt(l.redirectTo,l.navigationBehaviorOptions))}else throw this.events.next(a),s}catch(l){this.options.resolveNavigationPromiseOnError?n.resolve(!1):n.reject(l)}}return Qe}))}))}cancelNavigationTransition(t,n,r){let o=new Ve(t.id,this.urlSerializer.serialize(t.extractedUrl),n,r);this.events.next(o),t.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let t=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),n=this.currentNavigation?.targetBrowserUrl??this.currentNavigation?.extractedUrl;return t.toString()!==n?.toString()&&!this.currentNavigation?.extras.skipLocationChange}static \u0275fac=function(n){return new(n||e)};static \u0275prov=b({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function Uu(e){return e!==bi}var da=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275prov=b({token:e,factory:()=>h(ju),providedIn:"root"})}return e})(),Li=class{shouldDetach(i){return!1}store(i,t){}shouldAttach(i){return!1}retrieve(i){return null}shouldReuseRoute(i,t){return i.routeConfig===t.routeConfig}},ju=(()=>{class e extends Li{static \u0275fac=(()=>{let t;return function(r){return(t||(t=_(e)))(r||e)}})();static \u0275prov=b({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),pa=(()=>{class e{urlSerializer=h(yt);options=h(wt,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=h(Dt);urlHandlingStrategy=h(Fi);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new We;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:t,initialUrl:n,targetBrowserUrl:r}){let o=t!==void 0?this.urlHandlingStrategy.merge(t,n):n,s=r??o;return s instanceof We?this.urlSerializer.serialize(s):s}commitTransition({targetRouterState:t,finalUrl:n,initialUrl:r}){n&&t?(this.currentUrlTree=n,this.rawUrlTree=this.urlHandlingStrategy.merge(n,r),this.routerState=t):this.rawUrlTree=r}routerState=Qs(null);getRouterState(){return this.routerState}stateMemento=this.createStateMemento();updateStateMemento(){this.stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}resetInternalState({finalUrl:t}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,t??this.rawUrlTree)}static \u0275fac=function(n){return new(n||e)};static \u0275prov=b({token:e,factory:()=>h(Bu),providedIn:"root"})}return e})(),Bu=(()=>{class e extends pa{currentPageId=0;lastSuccessfulId=-1;restoredState(){return this.location.getState()}get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(t){return this.location.subscribe(n=>{n.type==="popstate"&&setTimeout(()=>{t(n.url,n.state,"popstate")})})}handleRouterEvent(t,n){t instanceof ot?this.updateStateMemento():t instanceof qe?this.commitTransition(n):t instanceof Cn?this.urlUpdateStrategy==="eager"&&(n.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(n),n)):t instanceof En?(this.commitTransition(n),this.urlUpdateStrategy==="deferred"&&!n.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(n),n)):t instanceof Ve&&(t.code===he.GuardRejected||t.code===he.NoDataFromResolver)?this.restoreHistory(n):t instanceof Ft?this.restoreHistory(n,!0):t instanceof ye&&(this.lastSuccessfulId=t.id,this.currentPageId=this.browserPageId)}setBrowserUrl(t,{extras:n,id:r}){let{replaceUrl:o,state:s}=n;if(this.location.isCurrentPathEqualTo(t)||o){let a=this.browserPageId,l=g(g({},s),this.generateNgRouterState(r,a));this.location.replaceState(t,"",l)}else{let a=g(g({},s),this.generateNgRouterState(r,this.browserPageId+1));this.location.go(t,"",a)}}restoreHistory(t,n=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,o=this.currentPageId-r;o!==0?this.location.historyGo(o):this.getCurrentUrlTree()===t.finalUrl&&o===0&&(this.resetInternalState(t),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(n&&this.resetInternalState(t),this.resetUrlToCurrentUrlTree())}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(t,n){return this.canceledNavigationResolution==="computed"?{navigationId:t,\u0275routerPageId:n}:{navigationId:t}}static \u0275fac=(()=>{let t;return function(r){return(t||(t=_(e)))(r||e)}})();static \u0275prov=b({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function ji(e,i){e.events.pipe(Ze(t=>t instanceof ye||t instanceof Ve||t instanceof Ft||t instanceof qe),N(t=>t instanceof ye||t instanceof qe?0:(t instanceof Ve?t.code===he.Redirect||t.code===he.SupersededByNewNavigation:!1)?2:1),Ze(t=>t!==2),Tt(1)).subscribe(()=>{i()})}var zu={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},Hu={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"},Se=(()=>{class e{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=h(rr);stateManager=h(pa);options=h(wt,{optional:!0})||{};pendingTasks=h(er);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=h(Ui);urlSerializer=h(yt);location=h(Dt);urlHandlingStrategy=h(Fi);_events=new ge;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=h(da);onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=h(Ct,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!h(Dn,{optional:!0});constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:t=>{this.console.warn(t)}}),this.subscribeToNavigationEvents()}eventsSubscription=new bo;subscribeToNavigationEvents(){let t=this.navigationTransitions.events.subscribe(n=>{try{let r=this.navigationTransitions.currentTransition,o=this.navigationTransitions.currentNavigation;if(r!==null&&o!==null){if(this.stateManager.handleRouterEvent(n,o),n instanceof Ve&&n.code!==he.Redirect&&n.code!==he.SupersededByNewNavigation)this.navigated=!0;else if(n instanceof ye)this.navigated=!0;else if(n instanceof jt){let s=n.navigationBehaviorOptions,a=this.urlHandlingStrategy.merge(n.url,r.currentRawUrl),l=g({browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||Uu(r.source)},s);this.scheduleNavigation(a,bi,null,l,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}Wu(n)&&this._events.next(n)}catch(r){this.navigationTransitions.transitionAbortSubject.next(r)}});this.eventsSubscription.add(t)}resetRootComponentType(t){this.routerState.root.component=t,this.navigationTransitions.rootComponentType=t}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),bi,this.stateManager.restoredState())}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((t,n,r)=>{this.navigateToSyncWithBrowser(t,r,n)})}navigateToSyncWithBrowser(t,n,r){let o={replaceUrl:!0},s=r?.navigationId?r:null;if(r){let l=g({},r);delete l.navigationId,delete l.\u0275routerPageId,Object.keys(l).length!==0&&(o.state=l)}let a=this.parseUrl(t);this.scheduleNavigation(a,n,s,o)}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.navigationTransitions.currentNavigation}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(t){this.config=t.map(Ur),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription&&(this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0),this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(t,n={}){let{relativeTo:r,queryParams:o,fragment:s,queryParamsHandling:a,preserveFragment:l}=n,c=l?this.currentUrlTree.fragment:s,u=null;switch(a??this.options.defaultQueryParamsHandling){case"merge":u=g(g({},this.currentUrlTree.queryParams),o);break;case"preserve":u=this.currentUrlTree.queryParams;break;default:u=o||null}u!==null&&(u=this.removeEmptyProps(u));let d;try{let p=r?r.snapshot:this.routerState.snapshot.root;d=Ws(p)}catch{(typeof t[0]!="string"||t[0][0]!=="/")&&(t=[]),d=this.currentUrlTree.root}return qs(d,t,u,c??null)}navigateByUrl(t,n={skipLocationChange:!1}){let r=rt(t)?t:this.parseUrl(t),o=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(o,bi,null,n)}navigate(t,n={skipLocationChange:!1}){return Vu(t),this.navigateByUrl(this.createUrlTree(t,n),n)}serializeUrl(t){return this.urlSerializer.serialize(t)}parseUrl(t){try{return this.urlSerializer.parse(t)}catch{return this.urlSerializer.parse("/")}}isActive(t,n){let r;if(n===!0?r=g({},zu):n===!1?r=g({},Hu):r=n,rt(t))return Rs(this.currentUrlTree,t,r);let o=this.parseUrl(t);return Rs(this.currentUrlTree,o,r)}removeEmptyProps(t){return Object.entries(t).reduce((n,[r,o])=>(o!=null&&(n[r]=o),n),{})}scheduleNavigation(t,n,r,o,s){if(this.disposed)return Promise.resolve(!1);let a,l,c;s?(a=s.resolve,l=s.reject,c=s.promise):c=new Promise((d,p)=>{a=d,l=p});let u=this.pendingTasks.add();return ji(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(u))}),this.navigationTransitions.handleNavigationRequest({source:n,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:t,extras:o,resolve:a,reject:l,promise:c,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),c.catch(d=>Promise.reject(d))}static \u0275fac=function(n){return new(n||e)};static \u0275prov=b({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function Vu(e){for(let i=0;i<e.length;i++)if(e[i]==null)throw new D(4008,!1)}function Wu(e){return!(e instanceof En)&&!(e instanceof jt)}var Bi=(()=>{class e{router;route;tabIndexAttribute;renderer;el;locationStrategy;href=null;target;queryParams;fragment;queryParamsHandling;state;info;relativeTo;isAnchorElement;subscription;onChanges=new ge;constructor(t,n,r,o,s,a){this.router=t,this.route=n,this.tabIndexAttribute=r,this.renderer=o,this.el=s,this.locationStrategy=a;let l=s.nativeElement.tagName?.toLowerCase();this.isAnchorElement=l==="a"||l==="area",this.isAnchorElement?this.subscription=t.events.subscribe(c=>{c instanceof ye&&this.updateHref()}):this.setTabIndexIfNotOnNativeEl("0")}preserveFragment=!1;skipLocationChange=!1;replaceUrl=!1;setTabIndexIfNotOnNativeEl(t){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",t)}ngOnChanges(t){this.isAnchorElement&&this.updateHref(),this.onChanges.next(this)}routerLinkInput=null;set routerLink(t){t==null?(this.routerLinkInput=null,this.setTabIndexIfNotOnNativeEl(null)):(rt(t)?this.routerLinkInput=t:this.routerLinkInput=Array.isArray(t)?t:[t],this.setTabIndexIfNotOnNativeEl("0"))}onClick(t,n,r,o,s){let a=this.urlTree;if(a===null||this.isAnchorElement&&(t!==0||n||r||o||s||typeof this.target=="string"&&this.target!="_self"))return!0;let l={skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info};return this.router.navigateByUrl(a,l),!this.isAnchorElement}ngOnDestroy(){this.subscription?.unsubscribe()}updateHref(){let t=this.urlTree;this.href=t!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(t)):null;let n=this.href===null?null:Vo(this.href,this.el.nativeElement.tagName.toLowerCase(),"href");this.applyAttributeValue("href",n)}applyAttributeValue(t,n){let r=this.renderer,o=this.el.nativeElement;n!==null?r.setAttribute(o,t,n):r.removeAttribute(o,t)}get urlTree(){return this.routerLinkInput===null?null:rt(this.routerLinkInput)?this.routerLinkInput:this.router.createUrlTree(this.routerLinkInput,{relativeTo:this.relativeTo!==void 0?this.relativeTo:this.route,queryParams:this.queryParams,fragment:this.fragment,queryParamsHandling:this.queryParamsHandling,preserveFragment:this.preserveFragment})}static \u0275fac=function(n){return new(n||e)(ce(Se),ce(Ge),Do("tabindex"),ce(en),ce(pt),ce(cn))};static \u0275dir=ne({type:e,selectors:[["","routerLink",""]],hostVars:1,hostBindings:function(n,r){n&1&&xt("click",function(s){return r.onClick(s.button,s.ctrlKey,s.shiftKey,s.altKey,s.metaKey)}),n&2&&G("target",r.target)},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[2,"preserveFragment","preserveFragment",L],skipLocationChange:[2,"skipLocationChange","skipLocationChange",L],replaceUrl:[2,"replaceUrl","replaceUrl",L],routerLink:"routerLink"},features:[Ue]})}return e})(),qu=(()=>{class e{router;element;renderer;cdr;link;links;classes=[];routerEventsSubscription;linkInputChangesSubscription;_isActive=!1;get isActive(){return this._isActive}routerLinkActiveOptions={exact:!1};ariaCurrentWhenActive;isActiveChange=new Ae;constructor(t,n,r,o,s){this.router=t,this.element=n,this.renderer=r,this.cdr=o,this.link=s,this.routerEventsSubscription=t.events.subscribe(a=>{a instanceof ye&&this.update()})}ngAfterContentInit(){S(this.links.changes,S(null)).pipe(Xt()).subscribe(t=>{this.update(),this.subscribeToEachLinkOnChanges()})}subscribeToEachLinkOnChanges(){this.linkInputChangesSubscription?.unsubscribe();let t=[...this.links.toArray(),this.link].filter(n=>!!n).map(n=>n.onChanges);this.linkInputChangesSubscription=le(t).pipe(Xt()).subscribe(n=>{this._isActive!==this.isLinkActive(this.router)(n)&&this.update()})}set routerLinkActive(t){let n=Array.isArray(t)?t:t.split(" ");this.classes=n.filter(r=>!!r)}ngOnChanges(t){this.update()}ngOnDestroy(){this.routerEventsSubscription.unsubscribe(),this.linkInputChangesSubscription?.unsubscribe()}update(){!this.links||!this.router.navigated||queueMicrotask(()=>{let t=this.hasActiveLinks();this.classes.forEach(n=>{t?this.renderer.addClass(this.element.nativeElement,n):this.renderer.removeClass(this.element.nativeElement,n)}),t&&this.ariaCurrentWhenActive!==void 0?this.renderer.setAttribute(this.element.nativeElement,"aria-current",this.ariaCurrentWhenActive.toString()):this.renderer.removeAttribute(this.element.nativeElement,"aria-current"),this._isActive!==t&&(this._isActive=t,this.cdr.markForCheck(),this.isActiveChange.emit(t))})}isLinkActive(t){let n=Gu(this.routerLinkActiveOptions)?this.routerLinkActiveOptions:this.routerLinkActiveOptions.exact||!1;return r=>{let o=r.urlTree;return o?t.isActive(o,n):!1}}hasActiveLinks(){let t=this.isLinkActive(this.router);return this.link&&t(this.link)||this.links.some(t)}static \u0275fac=function(n){return new(n||e)(ce(Se),ce(pt),ce(en),ce(At),ce(Bi,8))};static \u0275dir=ne({type:e,selectors:[["","routerLinkActive",""]],contentQueries:function(n,r,o){if(n&1&&$(o,Bi,5),n&2){let s;F(s=U())&&(r.links=s)}},inputs:{routerLinkActiveOptions:"routerLinkActiveOptions",ariaCurrentWhenActive:"ariaCurrentWhenActive",routerLinkActive:"routerLinkActive"},outputs:{isActiveChange:"isActiveChange"},exportAs:["routerLinkActive"],features:[Ue]})}return e})();function Gu(e){return!!e.paths}var Nn=class{};var ha=(()=>{class e{router;injector;preloadingStrategy;loader;subscription;constructor(t,n,r,o){this.router=t,this.injector=n,this.preloadingStrategy=r,this.loader=o}setUpPreloading(){this.subscription=this.router.events.pipe(Ze(t=>t instanceof ye),ut(()=>this.preload())).subscribe(()=>{})}preload(){return this.processRoutes(this.injector,this.router.config)}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}processRoutes(t,n){let r=[];for(let o of n){o.providers&&!o._injector&&(o._injector=ii(o.providers,t,`Route: ${o.path}`));let s=o._injector??t,a=o._loadedInjector??s;(o.loadChildren&&!o._loadedRoutes&&o.canLoad===void 0||o.loadComponent&&!o._loadedComponent)&&r.push(this.preloadConfig(s,o)),(o.children||o._loadedRoutes)&&r.push(this.processRoutes(a,o.children??o._loadedRoutes))}return le(r).pipe(Xt())}preloadConfig(t,n){return this.preloadingStrategy.preload(n,()=>{let r;n.loadChildren&&n.canLoad===void 0?r=this.loader.loadChildren(t,n):r=S(null);let o=r.pipe(de(s=>s===null?S(void 0):(n._loadedRoutes=s.routes,n._loadedInjector=s.injector,this.processRoutes(s.injector??t,s.routes))));if(n.loadComponent&&!n._loadedComponent){let s=this.loader.loadComponent(n);return le([o,s]).pipe(Xt())}else return o})}static \u0275fac=function(n){return new(n||e)(O(Se),O(_t),O(Nn),O($i))};static \u0275prov=b({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),fa=new k(""),Ku=(()=>{class e{urlSerializer;transitions;viewportScroller;zone;options;routerEventsSubscription;scrollEventsSubscription;lastId=0;lastSource="imperative";restoredId=0;store={};constructor(t,n,r,o,s={}){this.urlSerializer=t,this.transitions=n,this.viewportScroller=r,this.zone=o,this.options=s,s.scrollPositionRestoration||="disabled",s.anchorScrolling||="disabled"}init(){this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.transitions.events.subscribe(t=>{t instanceof ot?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=t.navigationTrigger,this.restoredId=t.restoredState?t.restoredState.navigationId:0):t instanceof ye?(this.lastId=t.id,this.scheduleScrollEvent(t,this.urlSerializer.parse(t.urlAfterRedirects).fragment)):t instanceof qe&&t.code===$t.IgnoredSameUrlNavigation&&(this.lastSource=void 0,this.restoredId=0,this.scheduleScrollEvent(t,this.urlSerializer.parse(t.url).fragment))})}consumeScrollEvents(){return this.transitions.events.subscribe(t=>{t instanceof Ut&&(t.position?this.options.scrollPositionRestoration==="top"?this.viewportScroller.scrollToPosition([0,0]):this.options.scrollPositionRestoration==="enabled"&&this.viewportScroller.scrollToPosition(t.position):t.anchor&&this.options.anchorScrolling==="enabled"?this.viewportScroller.scrollToAnchor(t.anchor):this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.scrollToPosition([0,0]))})}scheduleScrollEvent(t,n){this.zone.runOutsideAngular(()=>{setTimeout(()=>{this.zone.run(()=>{this.transitions.events.next(new Ut(t,this.lastSource==="popstate"?this.store[this.restoredId]:null,n))})},0)})}ngOnDestroy(){this.routerEventsSubscription?.unsubscribe(),this.scrollEventsSubscription?.unsubscribe()}static \u0275fac=function(n){Go()};static \u0275prov=b({token:e,factory:e.\u0275fac})}return e})();function Qu(e,...i){return dt([{provide:Ct,multi:!0,useValue:e},[],{provide:Ge,useFactory:ga,deps:[Se]},{provide:nn,multi:!0,useFactory:ma},i.map(t=>t.\u0275providers)])}function ga(e){return e.routerState.root}function Ln(e,i){return{\u0275kind:e,\u0275providers:i}}function ma(){let e=h(et);return i=>{let t=e.get(rn);if(i!==t.components[0])return;let n=e.get(Se),r=e.get(ba);e.get(Wr)===1&&n.initialNavigation(),e.get(Sa,null,Zi.Optional)?.setUpPreloading(),e.get(fa,null,Zi.Optional)?.init(),n.resetRootComponentType(t.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var ba=new k("",{factory:()=>new ge}),Wr=new k("",{providedIn:"root",factory:()=>1});function va(){let e=[{provide:Wr,useValue:0},tn(()=>{let i=h(et);return i.get(as,Promise.resolve()).then(()=>new Promise(n=>{let r=i.get(Se),o=i.get(ba);ji(r,()=>{n(!0)}),i.get(Ui).afterPreactivation=()=>(n(!0),o.closed?S(void 0):o),r.initialNavigation()}))})];return Ln(2,e)}function ya(){let e=[tn(()=>{h(Se).setUpLocationChangeListener()}),{provide:Wr,useValue:2}];return Ln(3,e)}var Sa=new k("");function wa(e){return Ln(0,[{provide:Sa,useExisting:ha},{provide:Nn,useExisting:e}])}function Ca(){return Ln(8,[$r,{provide:Dn,useExisting:$r}])}function Ea(e){ni("NgRouterViewTransitions");let i=[{provide:Br,useValue:ua},{provide:zr,useValue:g({skipNextTransition:!!e?.skipInitialTransition},e)}];return Ln(9,i)}var Ta=[Dt,{provide:yt,useClass:it},Se,St,{provide:Ge,useFactory:ga,deps:[Se]},$i,[]],qr=(()=>{class e{constructor(){}static forRoot(t,n){return{ngModule:e,providers:[Ta,[],{provide:Ct,multi:!0,useValue:t},[],n?.errorHandler?{provide:Hr,useValue:n.errorHandler}:[],{provide:wt,useValue:n||{}},n?.useHash?Xu():Zu(),Yu(),n?.preloadingStrategy?wa(n.preloadingStrategy).\u0275providers:[],n?.initialNavigation?Ju(n):[],n?.bindToComponentInputs?Ca().\u0275providers:[],n?.enableViewTransitions?Ea().\u0275providers:[],ed()]}}static forChild(t){return{ngModule:e,providers:[{provide:Ct,multi:!0,useValue:t}]}}static \u0275fac=function(n){return new(n||e)};static \u0275mod=W({type:e});static \u0275inj=V({})}return e})();function Yu(){return{provide:fa,useFactory:()=>{let e=h(hs),i=h(Te),t=h(wt),n=h(Ui),r=h(yt);return t.scrollOffset&&e.setOffset(t.scrollOffset),new Ku(r,n,e,i,t)}}}function Xu(){return{provide:cn,useClass:cs}}function Zu(){return{provide:cn,useClass:ls}}function Ju(e){return[e.initialNavigation==="disabled"?ya().\u0275providers:[],e.initialNavigation==="enabledBlocking"?va().\u0275providers:[]]}var Vr=new k("");function ed(){return[{provide:Vr,useFactory:ma},{provide:nn,multi:!0,useExisting:Vr}]}function _a(e,i){return e?e.classList?e.classList.contains(i):new RegExp("(^| )"+i+"( |$)","gi").test(e.className):!1}function at(e,i){if(e&&i){let t=n=>{_a(e,n)||(e.classList?e.classList.add(n):e.className+=" "+n)};[i].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(t))}}function nd(){return window.innerWidth-document.documentElement.offsetWidth}function Pn(e){for(let i of document?.styleSheets)try{for(let t of i?.cssRules)for(let n of t?.style)if(e.test(n))return{name:n,value:t.style.getPropertyValue(n).trim()}}catch{}return null}function rg(e="p-overflow-hidden"){let i=Pn(/-scrollbar-width$/);i?.name&&document.body.style.setProperty(i.name,nd()+"px"),at(document.body,e)}function Pe(e,i){if(e&&i){let t=n=>{e.classList?e.classList.remove(n):e.className=e.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," ")};[i].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(t))}}function Ra(e){let i={width:0,height:0};return e&&(e.style.visibility="hidden",e.style.display="block",i.width=e.offsetWidth,i.height=e.offsetHeight,e.style.display="none",e.style.visibility="visible"),i}function Ia(){let e=window,i=document,t=i.documentElement,n=i.getElementsByTagName("body")[0],r=e.innerWidth||t.clientWidth||n.clientWidth,o=e.innerHeight||t.clientHeight||n.clientHeight;return{width:r,height:o}}function id(){let e=document.documentElement;return(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}function rd(){let e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)}function og(e,i,t=!0){var n,r,o,s;if(e){let a=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:Ra(e),l=a.height,c=a.width,u=i.offsetHeight,d=i.offsetWidth,p=i.getBoundingClientRect(),f=rd(),y=id(),C=Ia(),A,H,B="top";p.top+u+l>C.height?(A=p.top+f-l,B="bottom",A<0&&(A=f)):A=u+p.top+f,p.left+c>C.width?H=Math.max(0,p.left+y+d-c):H=p.left+y,e.style.top=A+"px",e.style.left=H+"px",e.style.transformOrigin=B,t&&(e.style.marginTop=B==="bottom"?`calc(${(r=(n=Pn(/-anchor-gutter$/))==null?void 0:n.value)!=null?r:"2px"} * -1)`:(s=(o=Pn(/-anchor-gutter$/))==null?void 0:o.value)!=null?s:"")}}function Oa(e,i){if(e instanceof HTMLElement){let t=e.offsetWidth;if(i){let n=getComputedStyle(e);t+=parseFloat(n.marginLeft)+parseFloat(n.marginRight)}return t}return 0}function sg(e,i,t=!0){var n,r,o,s;if(e){let a=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:Ra(e),l=i.offsetHeight,c=i.getBoundingClientRect(),u=Ia(),d,p,f="top";c.top+l+a.height>u.height?(d=-1*a.height,f="bottom",c.top+d<0&&(d=-1*c.top)):d=l,a.width>u.width?p=c.left*-1:c.left+a.width>u.width?p=(c.left+a.width-u.width)*-1:p=0,e.style.top=d+"px",e.style.left=p+"px",e.style.transformOrigin=f,t&&(e.style.marginTop=f==="bottom"?`calc(${(r=(n=Pn(/-anchor-gutter$/))==null?void 0:n.value)!=null?r:"2px"} * -1)`:(s=(o=Pn(/-anchor-gutter$/))==null?void 0:o.value)!=null?s:"")}}function $n(e){return typeof HTMLElement=="object"?e instanceof HTMLElement:e&&typeof e=="object"&&e!==null&&e.nodeType===1&&typeof e.nodeName=="string"}function xa(e){let i=e;return e&&typeof e=="object"&&(e.hasOwnProperty("current")?i=e.current:e.hasOwnProperty("el")&&(e.el.hasOwnProperty("nativeElement")?i=e.el.nativeElement:i=e.el)),$n(i)?i:void 0}function ag(e,i){let t=xa(e);if(t)t.appendChild(i);else throw new Error("Cannot append "+i+" to "+e)}function Gr(e,i={}){if($n(e)){let t=(n,r)=>{var o,s;let a=(o=e?.$attrs)!=null&&o[n]?[(s=e?.$attrs)==null?void 0:s[n]]:[];return[r].flat().reduce((l,c)=>{if(c!=null){let u=typeof c;if(u==="string"||u==="number")l.push(c);else if(u==="object"){let d=Array.isArray(c)?t(n,c):Object.entries(c).map(([p,f])=>n==="style"&&(f||f===0)?`${p.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${f}`:f?p:void 0);l=d.length?l.concat(d.filter(p=>!!p)):l}}return l},a)};Object.entries(i).forEach(([n,r])=>{if(r!=null){let o=n.match(/^on(.+)/);o?e.addEventListener(o[1].toLowerCase(),r):n==="p-bind"||n==="pBind"?Gr(e,r):(r=n==="class"?[...new Set(t("class",r))].join(" ").trim():n==="style"?t("style",r).join(";").trim():r,(e.$attrs=e.$attrs||{})&&(e.$attrs[n]=r),e.setAttribute(n,r))}})}}function lg(e,i){if(e){e.style.opacity="0";let t=+new Date,n="0",r=function(){n=`${+e.style.opacity+(new Date().getTime()-t)/i}`,e.style.opacity=n,t=+new Date,+n<1&&(window.requestAnimationFrame&&requestAnimationFrame(r)||setTimeout(r,16))};r()}}function cg(e,i){return $n(e)?Array.from(e.querySelectorAll(i)):[]}function od(e,i){return $n(e)?e.matches(i)?e:e.querySelector(i):null}function ug(e,i){e&&document.activeElement!==e&&e.focus(i)}function Kr(e){if(e){let i=e.offsetHeight,t=getComputedStyle(e);return i-=parseFloat(t.paddingTop)+parseFloat(t.paddingBottom)+parseFloat(t.borderTopWidth)+parseFloat(t.borderBottomWidth),i}return 0}function Aa(e){if(e){let i=e.getBoundingClientRect();return{top:i.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:i.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}return{top:"auto",left:"auto"}}function Da(e,i){if(e){let t=e.offsetHeight;if(i){let n=getComputedStyle(e);t+=parseFloat(n.marginTop)+parseFloat(n.marginBottom)}return t}return 0}function Qr(e){if(e){let i=e.offsetWidth,t=getComputedStyle(e);return i-=parseFloat(t.paddingLeft)+parseFloat(t.paddingRight)+parseFloat(t.borderLeftWidth)+parseFloat(t.borderRightWidth),i}return 0}function dg(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0}function Ma(e){var i;e&&("remove"in Element.prototype?e.remove():(i=e.parentNode)==null||i.removeChild(e))}function pg(e,i){let t=xa(e);if(t)t.removeChild(i);else throw new Error("Cannot remove "+i+" from "+e)}function Na(e,i="",t){$n(e)&&t!==null&&t!==void 0&&e.setAttribute(i,t)}function ka(){let e=new Map;return{on(i,t){let n=e.get(i);return n?n.push(t):n=[t],e.set(i,n),this},off(i,t){let n=e.get(i);return n&&n.splice(n.indexOf(t)>>>0,1),this},emit(i,t){let n=e.get(i);n&&n.slice().map(r=>{r(t)})},clear(){e.clear()}}}function Ie(e){return e==null||e===""||Array.isArray(e)&&e.length===0||!(e instanceof Date)&&typeof e=="object"&&Object.keys(e).length===0}function Yr(e,i,t=new WeakSet){if(e===i)return!0;if(!e||!i||typeof e!="object"||typeof i!="object"||t.has(e)||t.has(i))return!1;t.add(e).add(i);let n=Array.isArray(e),r=Array.isArray(i),o,s,a;if(n&&r){if(s=e.length,s!=i.length)return!1;for(o=s;o--!==0;)if(!Yr(e[o],i[o],t))return!1;return!0}if(n!=r)return!1;let l=e instanceof Date,c=i instanceof Date;if(l!=c)return!1;if(l&&c)return e.getTime()==i.getTime();let u=e instanceof RegExp,d=i instanceof RegExp;if(u!=d)return!1;if(u&&d)return e.toString()==i.toString();let p=Object.keys(e);if(s=p.length,s!==Object.keys(i).length)return!1;for(o=s;o--!==0;)if(!Object.prototype.hasOwnProperty.call(i,p[o]))return!1;for(o=s;o--!==0;)if(a=p[o],!Yr(e[a],i[a],t))return!1;return!0}function sd(e,i){return Yr(e,i)}function Pa(e){return!!(e&&e.constructor&&e.call&&e.apply)}function P(e){return!Ie(e)}function Xr(e,i){if(!e||!i)return null;try{let t=e[i];if(P(t))return t}catch{}if(Object.keys(e).length){if(Pa(i))return i(e);if(i.indexOf(".")===-1)return e[i];{let t=i.split("."),n=e;for(let r=0,o=t.length;r<o;++r){if(n==null)return null;n=n[t[r]]}return n}}return null}function Zr(e,i,t){return t?Xr(e,t)===Xr(i,t):sd(e,i)}function Ye(e,i=!0){return e instanceof Object&&e.constructor===Object&&(i||Object.keys(e).length!==0)}function Re(e,...i){return Pa(e)?e(...i):e}function lt(e,i=!0){return typeof e=="string"&&(i||e!=="")}function La(e){return lt(e)?e.replace(/(-|_)/g,"").toLowerCase():e}function zi(e,i="",t={}){let n=La(i).split("."),r=n.shift();return r?Ye(e)?zi(Re(e[Object.keys(e).find(o=>La(o)===r)||""],t),n.join("."),t):void 0:Re(e,t)}function Hi(e,i=!0){return Array.isArray(e)&&(i||e.length!==0)}function $a(e){return P(e)&&!isNaN(e)}function we(e,i){if(i){let t=i.test(e);return i.lastIndex=0,t}return!1}function Et(e){return e&&e.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":")}function Vi(e){return lt(e)?e.replace(/(_)/g,"-").replace(/[A-Z]/g,(i,t)=>t===0?i:"-"+i.toLowerCase()).toLowerCase():e}function Jr(e){return lt(e)?e.replace(/[A-Z]/g,(i,t)=>t===0?i:"."+i.toLowerCase()).toLowerCase():e}var Wi={};function Fn(e="pui_id_"){return Wi.hasOwnProperty(e)||(Wi[e]=0),Wi[e]++,`${e}${Wi[e]}`}function ad(){let e=[],i=(s,a,l=999)=>{let c=r(s,a,l),u=c.value+(c.key===s?0:l)+1;return e.push({key:s,value:u}),u},t=s=>{e=e.filter(a=>a.value!==s)},n=(s,a)=>r(s,a).value,r=(s,a,l=0)=>[...e].reverse().find(c=>a?!0:c.key===s)||{key:s,value:l},o=s=>s&&parseInt(s.style.zIndex,10)||0;return{get:o,set:(s,a,l)=>{a&&(a.style.zIndex=String(i(s,!0,l)))},clear:s=>{s&&(t(o(s)),s.style.zIndex="")},getCurrent:s=>n(s,!0)}}var vg=ad();var Fa=["*"];var ie=(()=>{class e{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static IN="in";static LESS_THAN="lt";static LESS_THAN_OR_EQUAL_TO="lte";static GREATER_THAN="gt";static GREATER_THAN_OR_EQUAL_TO="gte";static BETWEEN="between";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static DATE_IS="dateIs";static DATE_IS_NOT="dateIsNot";static DATE_BEFORE="dateBefore";static DATE_AFTER="dateAfter"}return e})();var Mg=(()=>{class e{clickSource=new ge;clickObservable=this.clickSource.asObservable();add(t){t&&this.clickSource.next(t)}static \u0275fac=function(n){return new(n||e)};static \u0275prov=b({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var Ua=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275cmp=z({type:e,selectors:[["p-header"]],standalone:!1,ngContentSelectors:Fa,decls:1,vars:0,template:function(n,r){n&1&&(ke(),me(0))},encapsulation:2})}return e})(),ja=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275cmp=z({type:e,selectors:[["p-footer"]],standalone:!1,ngContentSelectors:Fa,decls:1,vars:0,template:function(n,r){n&1&&(ke(),me(0))},encapsulation:2})}return e})(),Ke=(()=>{class e{template;type;name;constructor(t){this.template=t}getType(){return this.name}static \u0275fac=function(n){return new(n||e)(ce(Wo))};static \u0275dir=ne({type:e,selectors:[["","pTemplate",""]],inputs:{type:"type",name:[0,"pTemplate","name"]}})}return e})(),Q=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=W({type:e});static \u0275inj=V({imports:[ae]})}return e})();var cd=Object.defineProperty,ud=Object.defineProperties,dd=Object.getOwnPropertyDescriptors,qi=Object.getOwnPropertySymbols,Ha=Object.prototype.hasOwnProperty,Va=Object.prototype.propertyIsEnumerable,Ba=(e,i,t)=>i in e?cd(e,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[i]=t,Fe=(e,i)=>{for(var t in i||(i={}))Ha.call(i,t)&&Ba(e,t,i[t]);if(qi)for(var t of qi(i))Va.call(i,t)&&Ba(e,t,i[t]);return e},eo=(e,i)=>ud(e,dd(i)),Xe=(e,i)=>{var t={};for(var n in e)Ha.call(e,n)&&i.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&qi)for(var n of qi(e))i.indexOf(n)<0&&Va.call(e,n)&&(t[n]=e[n]);return t};var pd=ka(),Ce=pd;function za(e,i){Hi(e)?e.push(...i||[]):Ye(e)&&Object.assign(e,i)}function hd(e){return Ye(e)&&e.hasOwnProperty("value")&&e.hasOwnProperty("type")?e.value:e}function fd(e){return e.replaceAll(/ /g,"").replace(/[^\w]/g,"-")}function to(e="",i=""){return fd(`${lt(e,!1)&&lt(i,!1)?`${e}-`:e}${i}`)}function Wa(e="",i=""){return`--${to(e,i)}`}function gd(e=""){let i=(e.match(/{/g)||[]).length,t=(e.match(/}/g)||[]).length;return(i+t)%2!==0}function qa(e,i="",t="",n=[],r){if(lt(e)){let o=/{([^}]*)}/g,s=e.trim();if(gd(s))return;if(we(s,o)){let a=s.replaceAll(o,u=>{let p=u.replace(/{|}/g,"").split(".").filter(f=>!n.some(y=>we(f,y)));return`var(${Wa(t,Vi(p.join("-")))}${P(r)?`, ${r}`:""})`}),l=/(\d+\s+[\+\-\*\/]\s+\d+)/g,c=/var\([^)]+\)/g;return we(a.replace(c,"0"),l)?`calc(${a})`:a}return s}else if($a(e))return e}function md(e,i,t){lt(i,!1)&&e.push(`${i}:${t};`)}function Vt(e,i){return e?`${e}{${i}}`:""}var Wt=(...e)=>bd(M.getTheme(),...e),bd=(e={},i,t,n)=>{if(i){let{variable:r,options:o}=M.defaults||{},{prefix:s,transform:a}=e?.options||o||{},c=we(i,/{([^}]*)}/g)?i:`{${i}}`;return n==="value"||Ie(n)&&a==="strict"?M.getTokenValue(i):qa(c,void 0,s,[r.excludedKeyRegex],t)}return""};function vd(e,i={}){let t=M.defaults.variable,{prefix:n=t.prefix,selector:r=t.selector,excludedKeyRegex:o=t.excludedKeyRegex}=i,s=(c,u="")=>Object.entries(c).reduce((d,[p,f])=>{let y=we(p,o)?to(u):to(u,Vi(p)),C=hd(f);if(Ye(C)){let{variables:A,tokens:H}=s(C,y);za(d.tokens,H),za(d.variables,A)}else d.tokens.push((n?y.replace(`${n}-`,""):y).replaceAll("-",".")),md(d.variables,Wa(y),qa(C,y,n,[o]));return d},{variables:[],tokens:[]}),{variables:a,tokens:l}=s(e,n);return{value:a,tokens:l,declarations:a.join(""),css:Vt(r,a.join(""))}}var $e={regex:{rules:{class:{pattern:/^\.([a-zA-Z][\w-]*)$/,resolve(e){return{type:"class",selector:e,matched:this.pattern.test(e.trim())}}},attr:{pattern:/^\[(.*)\]$/,resolve(e){return{type:"attr",selector:`:root${e}`,matched:this.pattern.test(e.trim())}}},media:{pattern:/^@media (.*)$/,resolve(e){return{type:"media",selector:`${e}{:root{[CSS]}}`,matched:this.pattern.test(e.trim())}}},system:{pattern:/^system$/,resolve(e){return{type:"system",selector:"@media (prefers-color-scheme: dark){:root{[CSS]}}",matched:this.pattern.test(e.trim())}}},custom:{resolve(e){return{type:"custom",selector:e,matched:!0}}}},resolve(e){let i=Object.keys(this.rules).filter(t=>t!=="custom").map(t=>this.rules[t]);return[e].flat().map(t=>{var n;return(n=i.map(r=>r.resolve(t)).find(r=>r.matched))!=null?n:this.rules.custom.resolve(t)})}},_toVariables(e,i){return vd(e,{prefix:i?.prefix})},getCommon({name:e="",theme:i={},params:t,set:n,defaults:r}){var o,s,a,l,c,u,d;let{preset:p,options:f}=i,y,C,A,H,B,re,fe;if(P(p)&&f.transform!=="strict"){let{primitive:Un,semantic:jn,extend:Bn}=p,Gt=jn||{},{colorScheme:zn}=Gt,Hn=Xe(Gt,["colorScheme"]),Vn=Bn||{},{colorScheme:Wn}=Vn,Kt=Xe(Vn,["colorScheme"]),Qt=zn||{},{dark:qn}=Qt,Gn=Xe(Qt,["dark"]),Kn=Wn||{},{dark:Qn}=Kn,Yn=Xe(Kn,["dark"]),Xn=P(Un)?this._toVariables({primitive:Un},f):{},Zn=P(Hn)?this._toVariables({semantic:Hn},f):{},Jn=P(Gn)?this._toVariables({light:Gn},f):{},po=P(qn)?this._toVariables({dark:qn},f):{},ho=P(Kt)?this._toVariables({semantic:Kt},f):{},fo=P(Yn)?this._toVariables({light:Yn},f):{},go=P(Qn)?this._toVariables({dark:Qn},f):{},[gl,ml]=[(o=Xn.declarations)!=null?o:"",Xn.tokens],[bl,vl]=[(s=Zn.declarations)!=null?s:"",Zn.tokens||[]],[yl,Sl]=[(a=Jn.declarations)!=null?a:"",Jn.tokens||[]],[wl,Cl]=[(l=po.declarations)!=null?l:"",po.tokens||[]],[El,Tl]=[(c=ho.declarations)!=null?c:"",ho.tokens||[]],[_l,Rl]=[(u=fo.declarations)!=null?u:"",fo.tokens||[]],[Il,Ol]=[(d=go.declarations)!=null?d:"",go.tokens||[]];y=this.transformCSS(e,gl,"light","variable",f,n,r),C=ml;let xl=this.transformCSS(e,`${bl}${yl}`,"light","variable",f,n,r),Al=this.transformCSS(e,`${wl}`,"dark","variable",f,n,r);A=`${xl}${Al}`,H=[...new Set([...vl,...Sl,...Cl])];let Dl=this.transformCSS(e,`${El}${_l}color-scheme:light`,"light","variable",f,n,r),Ml=this.transformCSS(e,`${Il}color-scheme:dark`,"dark","variable",f,n,r);B=`${Dl}${Ml}`,re=[...new Set([...Tl,...Rl,...Ol])],fe=Re(p.css,{dt:Wt})}return{primitive:{css:y,tokens:C},semantic:{css:A,tokens:H},global:{css:B,tokens:re},style:fe}},getPreset({name:e="",preset:i={},options:t,params:n,set:r,defaults:o,selector:s}){var a,l,c;let u,d,p;if(P(i)&&t.transform!=="strict"){let f=e.replace("-directive",""),y=i,{colorScheme:C,extend:A,css:H}=y,B=Xe(y,["colorScheme","extend","css"]),re=A||{},{colorScheme:fe}=re,Un=Xe(re,["colorScheme"]),jn=C||{},{dark:Bn}=jn,Gt=Xe(jn,["dark"]),zn=fe||{},{dark:Hn}=zn,Vn=Xe(zn,["dark"]),Wn=P(B)?this._toVariables({[f]:Fe(Fe({},B),Un)},t):{},Kt=P(Gt)?this._toVariables({[f]:Fe(Fe({},Gt),Vn)},t):{},Qt=P(Bn)?this._toVariables({[f]:Fe(Fe({},Bn),Hn)},t):{},[qn,Gn]=[(a=Wn.declarations)!=null?a:"",Wn.tokens||[]],[Kn,Qn]=[(l=Kt.declarations)!=null?l:"",Kt.tokens||[]],[Yn,Xn]=[(c=Qt.declarations)!=null?c:"",Qt.tokens||[]],Zn=this.transformCSS(f,`${qn}${Kn}`,"light","variable",t,r,o,s),Jn=this.transformCSS(f,Yn,"dark","variable",t,r,o,s);u=`${Zn}${Jn}`,d=[...new Set([...Gn,...Qn,...Xn])],p=Re(H,{dt:Wt})}return{css:u,tokens:d,style:p}},getPresetC({name:e="",theme:i={},params:t,set:n,defaults:r}){var o;let{preset:s,options:a}=i,l=(o=s?.components)==null?void 0:o[e];return this.getPreset({name:e,preset:l,options:a,params:t,set:n,defaults:r})},getPresetD({name:e="",theme:i={},params:t,set:n,defaults:r}){var o;let s=e.replace("-directive",""),{preset:a,options:l}=i,c=(o=a?.directives)==null?void 0:o[s];return this.getPreset({name:s,preset:c,options:l,params:t,set:n,defaults:r})},applyDarkColorScheme(e){return!(e.darkModeSelector==="none"||e.darkModeSelector===!1)},getColorSchemeOption(e,i){var t;return this.applyDarkColorScheme(e)?this.regex.resolve(e.darkModeSelector===!0?i.options.darkModeSelector:(t=e.darkModeSelector)!=null?t:i.options.darkModeSelector):[]},getLayerOrder(e,i={},t,n){let{cssLayer:r}=i;return r?`@layer ${Re(r.order||"primeui",t)}`:""},getCommonStyleSheet({name:e="",theme:i={},params:t,props:n={},set:r,defaults:o}){let s=this.getCommon({name:e,theme:i,params:t,set:r,defaults:o}),a=Object.entries(n).reduce((l,[c,u])=>l.push(`${c}="${u}"`)&&l,[]).join(" ");return Object.entries(s||{}).reduce((l,[c,u])=>{if(u?.css){let d=Et(u?.css),p=`${c}-variables`;l.push(`<style type="text/css" data-primevue-style-id="${p}" ${a}>${d}</style>`)}return l},[]).join("")},getStyleSheet({name:e="",theme:i={},params:t,props:n={},set:r,defaults:o}){var s;let a={name:e,theme:i,params:t,set:r,defaults:o},l=(s=e.includes("-directive")?this.getPresetD(a):this.getPresetC(a))==null?void 0:s.css,c=Object.entries(n).reduce((u,[d,p])=>u.push(`${d}="${p}"`)&&u,[]).join(" ");return l?`<style type="text/css" data-primevue-style-id="${e}-variables" ${c}>${Et(l)}</style>`:""},createTokens(e={},i,t="",n="",r={}){return Object.entries(e).forEach(([o,s])=>{let a=we(o,i.variable.excludedKeyRegex)?t:t?`${t}.${Jr(o)}`:Jr(o),l=n?`${n}.${o}`:o;Ye(s)?this.createTokens(s,i,a,l,r):(r[a]||(r[a]={paths:[],computed(c,u={}){var d,p;return this.paths.length===1?(d=this.paths[0])==null?void 0:d.computed(this.paths[0].scheme,u.binding):c&&c!=="none"?(p=this.paths.find(f=>f.scheme===c))==null?void 0:p.computed(c,u.binding):this.paths.map(f=>f.computed(f.scheme,u[f.scheme]))}}),r[a].paths.push({path:l,value:s,scheme:l.includes("colorScheme.light")?"light":l.includes("colorScheme.dark")?"dark":"none",computed(c,u={}){let d=/{([^}]*)}/g,p=s;if(u.name=this.path,u.binding||(u.binding={}),we(s,d)){let y=s.trim().replaceAll(d,H=>{var B;let re=H.replace(/{|}/g,""),fe=(B=r[re])==null?void 0:B.computed(c,u);return Hi(fe)&&fe.length===2?`light-dark(${fe[0].value},${fe[1].value})`:fe?.value}),C=/(\d+\w*\s+[\+\-\*\/]\s+\d+\w*)/g,A=/var\([^)]+\)/g;p=we(y.replace(A,"0"),C)?`calc(${y})`:y}return Ie(u.binding)&&delete u.binding,{colorScheme:c,path:this.path,paths:u,value:p.includes("undefined")?void 0:p}}}))}),r},getTokenValue(e,i,t){var n;let o=(l=>l.split(".").filter(u=>!we(u.toLowerCase(),t.variable.excludedKeyRegex)).join("."))(i),s=i.includes("colorScheme.light")?"light":i.includes("colorScheme.dark")?"dark":void 0,a=[(n=e[o])==null?void 0:n.computed(s)].flat().filter(l=>l);return a.length===1?a[0].value:a.reduce((l={},c)=>{let u=c,{colorScheme:d}=u,p=Xe(u,["colorScheme"]);return l[d]=p,l},void 0)},getSelectorRule(e,i,t,n){return t==="class"||t==="attr"?Vt(P(i)?`${e}${i},${e} ${i}`:e,n):Vt(e,P(i)?Vt(i,n):n)},transformCSS(e,i,t,n,r={},o,s,a){if(P(i)){let{cssLayer:l}=r;if(n!=="style"){let c=this.getColorSchemeOption(r,s);i=t==="dark"?c.reduce((u,{type:d,selector:p})=>(P(p)&&(u+=p.includes("[CSS]")?p.replace("[CSS]",i):this.getSelectorRule(p,a,d,i)),u),""):Vt(a??":root",i)}if(l){let c={name:"primeui",order:"primeui"};Ye(l)&&(c.name=Re(l.name,{name:e,type:n})),P(c.name)&&(i=Vt(`@layer ${c.name}`,i),o?.layerNames(c.name))}return i}return""}},M={defaults:{variable:{prefix:"p",selector:":root",excludedKeyRegex:/^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi},options:{prefix:"p",darkModeSelector:"system",cssLayer:!1}},_theme:void 0,_layerNames:new Set,_loadedStyleNames:new Set,_loadingStyles:new Set,_tokens:{},update(e={}){let{theme:i}=e;i&&(this._theme=eo(Fe({},i),{options:Fe(Fe({},this.defaults.options),i.options)}),this._tokens=$e.createTokens(this.preset,this.defaults),this.clearLoadedStyleNames())},get theme(){return this._theme},get preset(){var e;return((e=this.theme)==null?void 0:e.preset)||{}},get options(){var e;return((e=this.theme)==null?void 0:e.options)||{}},get tokens(){return this._tokens},getTheme(){return this.theme},setTheme(e){this.update({theme:e}),Ce.emit("theme:change",e)},getPreset(){return this.preset},setPreset(e){this._theme=eo(Fe({},this.theme),{preset:e}),this._tokens=$e.createTokens(e,this.defaults),this.clearLoadedStyleNames(),Ce.emit("preset:change",e),Ce.emit("theme:change",this.theme)},getOptions(){return this.options},setOptions(e){this._theme=eo(Fe({},this.theme),{options:e}),this.clearLoadedStyleNames(),Ce.emit("options:change",e),Ce.emit("theme:change",this.theme)},getLayerNames(){return[...this._layerNames]},setLayerNames(e){this._layerNames.add(e)},getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(e){return this._loadedStyleNames.has(e)},setLoadedStyleName(e){this._loadedStyleNames.add(e)},deleteLoadedStyleName(e){this._loadedStyleNames.delete(e)},clearLoadedStyleNames(){this._loadedStyleNames.clear()},getTokenValue(e){return $e.getTokenValue(this.tokens,e,this.defaults)},getCommon(e="",i){return $e.getCommon({name:e,theme:this.theme,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getComponent(e="",i){let t={name:e,theme:this.theme,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return $e.getPresetC(t)},getDirective(e="",i){let t={name:e,theme:this.theme,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return $e.getPresetD(t)},getCustomPreset(e="",i,t,n){let r={name:e,preset:i,options:this.options,selector:t,params:n,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return $e.getPreset(r)},getLayerOrderCSS(e=""){return $e.getLayerOrder(e,this.options,{names:this.getLayerNames()},this.defaults)},transformCSS(e="",i,t="style",n){return $e.transformCSS(e,i,n,t,this.options,{layerNames:this.setLayerNames.bind(this)},this.defaults)},getCommonStyleSheet(e="",i,t={}){return $e.getCommonStyleSheet({name:e,theme:this.theme,params:i,props:t,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getStyleSheet(e,i,t={}){return $e.getStyleSheet({name:e,theme:this.theme,params:i,props:t,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},onStyleMounted(e){this._loadingStyles.add(e)},onStyleUpdated(e){this._loadingStyles.add(e)},onStyleLoaded(e,{name:i}){this._loadingStyles.size&&(this._loadingStyles.delete(i),Ce.emit(`theme:${i}:load`,e),!this._loadingStyles.size&&Ce.emit("theme:load"))}};var yd=0,Ga=(()=>{class e{document=h(j);use(t,n={}){let r=!1,o=t,s=null,{immediate:a=!0,manual:l=!1,name:c=`style_${++yd}`,id:u=void 0,media:d=void 0,nonce:p=void 0,first:f=!1,props:y={}}=n;if(this.document){if(s=this.document.querySelector(`style[data-primeng-style-id="${c}"]`)||u&&this.document.getElementById(u)||this.document.createElement("style"),!s.isConnected){o=t,Gr(s,{type:"text/css",media:d,nonce:p});let C=this.document.head;f&&C.firstChild?C.insertBefore(s,C.firstChild):C.appendChild(s),Na(s,"data-primeng-style-id",c)}return s.textContent!==o&&(s.textContent=o),{id:u,name:c,el:s,css:o}}}static \u0275fac=function(n){return new(n||e)};static \u0275prov=b({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var qt={_loadedStyleNames:new Set,getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(e){return this._loadedStyleNames.has(e)},setLoadedStyleName(e){this._loadedStyleNames.add(e)},deleteLoadedStyleName(e){this._loadedStyleNames.delete(e)},clearLoadedStyleNames(){this._loadedStyleNames.clear()}},Sd=({dt:e})=>`
*,
::before,
::after {
    box-sizing: border-box;
}

/* Non ng overlay animations */
.p-connected-overlay {
    opacity: 0;
    transform: scaleY(0.8);
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-visible {
    opacity: 1;
    transform: scaleY(1);
}

.p-connected-overlay-hidden {
    opacity: 0;
    transform: scaleY(1);
    transition: opacity 0.1s linear;
}

/* NG based overlay animations */
.p-connected-overlay-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-connected-overlay-leave-to {
    opacity: 0;
}

.p-connected-overlay-enter-active {
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-leave-active {
    transition: opacity 0.1s linear;
}

/* Toggleable Content */
.p-toggleable-content-enter-from,
.p-toggleable-content-leave-to {
    max-height: 0;
}

.p-toggleable-content-enter-to,
.p-toggleable-content-leave-from {
    max-height: 1000px;
}

.p-toggleable-content-leave-active {
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
}

.p-toggleable-content-enter-active {
    overflow: hidden;
    transition: max-height 1s ease-in-out;
}

.p-disabled,
.p-disabled * {
    cursor: default;
    pointer-events: none;
    user-select: none;
}

.p-disabled,
.p-component:disabled {
    opacity: ${e("disabled.opacity")};
}

.pi {
    font-size: ${e("icon.size")};
}

.p-icon {
    width: ${e("icon.size")};
    height: ${e("icon.size")};
}

.p-unselectable-text {
    user-select: none;
}

.p-overlay-mask {
    background: ${e("mask.background")};
    color: ${e("mask.color")};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-overlay-mask-enter {
    animation: p-overlay-mask-enter-animation ${e("mask.transition.duration")} forwards;
}

.p-overlay-mask-leave {
    animation: p-overlay-mask-leave-animation ${e("mask.transition.duration")} forwards;
}
/* Temporarily disabled, distrupts PrimeNG overlay animations */
/* @keyframes p-overlay-mask-enter-animation {
    from {
        background: transparent;
    }
    to {
        background: ${e("mask.background")};
    }
}
@keyframes p-overlay-mask-leave-animation {
    from {
        background: ${e("mask.background")};
    }
    to {
        background: transparent;
    }
}*/

.p-iconwrapper {
    display: inline-flex;
    justify-content: center;
    align-items: center;
}
`,wd=({dt:e})=>`
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: ${e("scrollbar.width")};
}

/* @todo move to baseiconstyle.ts */

.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,Y=(()=>{class e{name="base";useStyle=h(Ga);theme=void 0;css=void 0;classes={};inlineStyles={};load=(t,n={},r=o=>o)=>{let o=r(Re(t,{dt:Wt}));return o?this.useStyle.use(Et(o),g({name:this.name},n)):{}};loadCSS=(t={})=>this.load(this.css,t);loadTheme=(t={},n="")=>this.load(this.theme,t,(r="")=>M.transformCSS(t.name||this.name,`${r}${n}`));loadGlobalCSS=(t={})=>this.load(wd,t);loadGlobalTheme=(t={},n="")=>this.load(Sd,t,(r="")=>M.transformCSS(t.name||this.name,`${r}${n}`));getCommonTheme=t=>M.getCommon(this.name,t);getComponentTheme=t=>M.getComponent(this.name,t);getDirectiveTheme=t=>M.getDirective(this.name,t);getPresetTheme=(t,n,r)=>M.getCustomPreset(this.name,t,n,r);getLayerOrderThemeCSS=()=>M.getLayerOrderCSS(this.name);getStyleSheet=(t="",n={})=>{if(this.css){let r=Re(this.css,{dt:Wt}),o=Et(`${r}${t}`),s=Object.entries(n).reduce((a,[l,c])=>a.push(`${l}="${c}"`)&&a,[]).join(" ");return`<style type="text/css" data-primeng-style-id="${this.name}" ${s}>${o}</style>`}return""};getCommonThemeStyleSheet=(t,n={})=>M.getCommonStyleSheet(this.name,t,n);getThemeStyleSheet=(t,n={})=>{let r=[M.getStyleSheet(this.name,t,n)];if(this.theme){let o=this.name==="base"?"global-style":`${this.name}-style`,s=Re(this.theme,{dt:Wt}),a=Et(M.transformCSS(o,s)),l=Object.entries(n).reduce((c,[u,d])=>c.push(`${u}="${d}"`)&&c,[]).join(" ");r.push(`<style type="text/css" data-primeng-style-id="${o}" ${l}>${a}</style>`)}return r.join("")};static \u0275fac=function(n){return new(n||e)};static \u0275prov=b({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var Cd=(()=>{class e{theme=Be(void 0);csp=Be({nonce:void 0});isThemeChanged=!1;document=h(j);baseStyle=h(Y);constructor(){an(()=>{Ce.on("theme:change",t=>{is(()=>{this.isThemeChanged=!0,this.theme.set(t)})})}),an(()=>{let t=this.theme();this.document&&t&&(this.isThemeChanged||this.onThemeChange(t),this.isThemeChanged=!1)})}ngOnDestroy(){M.clearLoadedStyleNames(),Ce.clear()}onThemeChange(t){M.setTheme(t),this.document&&this.loadCommonTheme()}loadCommonTheme(){if(this.theme()!=="none"&&!M.isStyleNameLoaded("common")){let{primitive:t,semantic:n,global:r,style:o}=this.baseStyle.getCommonTheme?.()||{},s={nonce:this.csp?.()?.nonce};this.baseStyle.load(t?.css,g({name:"primitive-variables"},s)),this.baseStyle.load(n?.css,g({name:"semantic-variables"},s)),this.baseStyle.load(r?.css,g({name:"global-variables"},s)),this.baseStyle.loadGlobalTheme(g({name:"global-style"},s),o),M.setLoadedStyleName("common")}}setThemeConfig(t){let{theme:n,csp:r}=t||{};n&&this.theme.set(n),r&&this.csp.set(r)}static \u0275fac=function(n){return new(n||e)};static \u0275prov=b({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),io=(()=>{class e extends Cd{ripple=Be(!1);platformId=h(De);inputStyle=Be(null);inputVariant=Be(null);overlayOptions={};csp=Be({nonce:void 0});filterMatchModeOptions={text:[ie.STARTS_WITH,ie.CONTAINS,ie.NOT_CONTAINS,ie.ENDS_WITH,ie.EQUALS,ie.NOT_EQUALS],numeric:[ie.EQUALS,ie.NOT_EQUALS,ie.LESS_THAN,ie.LESS_THAN_OR_EQUAL_TO,ie.GREATER_THAN,ie.GREATER_THAN_OR_EQUAL_TO],date:[ie.DATE_IS,ie.DATE_IS_NOT,ie.DATE_BEFORE,ie.DATE_AFTER]};translation={startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",is:"Is",isNot:"Is not",before:"Before",after:"After",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",upload:"Upload",cancel:"Cancel",pending:"Pending",fileSizeTypes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",dateFormat:"mm/dd/yy",firstDayOfWeek:0,today:"Today",weekHeader:"Wk",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyMessage:"No results found",searchMessage:"Search results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",emptyFilterMessage:"No results found",fileChosenMessage:"Files",noFileChosenMessage:"No file chosen",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation",scrollTop:"Scroll Top",moveTop:"Move Top",moveUp:"Move Up",moveDown:"Move Down",moveBottom:"Move Bottom",moveToTarget:"Move to Target",moveToSource:"Move to Source",moveAllToTarget:"Move All to Target",moveAllToSource:"Move All to Source",pageLabel:"{page}",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",prevPageLabel:"Previous Page",rowsPerPageLabel:"Rows per page",previousPageLabel:"Previous Page",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",selectRow:"Row Selected",unselectRow:"Row Unselected",expandRow:"Row Expanded",collapseRow:"Row Collapsed",showFilterMenu:"Show Filter Menu",hideFilterMenu:"Hide Filter Menu",filterOperator:"Filter Operator",filterConstraint:"Filter Constraint",editRow:"Row Edit",saveEdit:"Save Edit",cancelEdit:"Cancel Edit",listView:"List View",gridView:"Grid View",slide:"Slide",slideNumber:"{slideNumber}",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out",rotateRight:"Rotate Right",rotateLeft:"Rotate Left",listLabel:"Option List",selectColor:"Select a color",removeLabel:"Remove",browseFiles:"Browse Files",maximizeLabel:"Maximize"}};zIndex={modal:1100,overlay:1e3,menu:1e3,tooltip:1100};translationSource=new ge;translationObserver=this.translationSource.asObservable();getTranslation(t){return this.translation[t]}setTranslation(t){this.translation=g(g({},this.translation),t),this.translationSource.next(this.translation)}setConfig(t){let{csp:n,ripple:r,inputStyle:o,inputVariant:s,theme:a,overlayOptions:l,translation:c,filterMatchModeOptions:u}=t||{};n&&this.csp.set(n),r&&this.ripple.set(r),o&&this.inputStyle.set(o),s&&this.inputVariant.set(s),l&&(this.overlayOptions=l),c&&this.setTranslation(c),u&&(this.filterMatchModeOptions=u),a&&this.setThemeConfig({theme:a,csp:n})}static \u0275fac=(()=>{let t;return function(r){return(t||(t=_(e)))(r||e)}})();static \u0275prov=b({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Ed=new k("PRIME_NG_CONFIG");function cm(...e){let i=e?.map(n=>({provide:Ed,useValue:n,multi:!1})),t=tn(()=>{let n=h(io);e?.forEach(r=>n.setConfig(r))});return dt([...i,t])}var Ka=(()=>{class e extends Y{name="common";static \u0275fac=(()=>{let t;return function(r){return(t||(t=_(e)))(r||e)}})();static \u0275prov=b({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),te=(()=>{class e{document=h(j);platformId=h(De);el=h(pt);injector=h(et);cd=h(At);renderer=h(en);config=h(io);baseComponentStyle=h(Ka);baseStyle=h(Y);scopedStyleEl;rootEl;dt;get styleOptions(){return{nonce:this.config?.csp().nonce}}get _name(){return this.constructor.name.replace(/^_/,"").toLowerCase()}get componentStyle(){return this._componentStyle}attrSelector=Fn("pc");themeChangeListeners=[];_getHostInstance(t){if(t)return t?this.hostName?t.name===this.hostName?t:this._getHostInstance(t.parentInstance):t.parentInstance:void 0}_getOptionValue(t,n="",r={}){return zi(t,n,r)}ngOnInit(){this.document&&this._loadStyles()}ngAfterViewInit(){this.rootEl=this.el?.nativeElement,this.rootEl&&this.rootEl?.setAttribute(this.attrSelector,"")}ngOnChanges(t){if(this.document&&!un(this.platformId)){let{dt:n}=t;n&&n.currentValue&&(this._loadScopedThemeStyles(n.currentValue),this._themeChangeListener(()=>this._loadScopedThemeStyles(n.currentValue)))}}ngOnDestroy(){this._unloadScopedThemeStyles(),this.themeChangeListeners.forEach(t=>Ce.off("theme:change",t))}_loadStyles(){let t=()=>{qt.isStyleNameLoaded("base")||(this.baseStyle.loadGlobalCSS(this.styleOptions),qt.setLoadedStyleName("base")),this._loadThemeStyles()};t(),this._themeChangeListener(()=>t())}_loadCoreStyles(){!qt.isStyleNameLoaded("base")&&this._name&&(this.baseComponentStyle.loadCSS(this.styleOptions),this.componentStyle&&this.componentStyle?.loadCSS(this.styleOptions),qt.setLoadedStyleName(this.componentStyle?.name))}_loadThemeStyles(){if(!M.isStyleNameLoaded("common")){let{primitive:t,semantic:n,global:r,style:o}=this.componentStyle?.getCommonTheme?.()||{};this.baseStyle.load(t?.css,g({name:"primitive-variables"},this.styleOptions)),this.baseStyle.load(n?.css,g({name:"semantic-variables"},this.styleOptions)),this.baseStyle.load(r?.css,g({name:"global-variables"},this.styleOptions)),this.baseStyle.loadGlobalTheme(g({name:"global-style"},this.styleOptions),o),M.setLoadedStyleName("common")}if(!M.isStyleNameLoaded(this.componentStyle?.name)&&this.componentStyle?.name){let{css:t,style:n}=this.componentStyle?.getComponentTheme?.()||{};this.componentStyle?.load(t,g({name:`${this.componentStyle?.name}-variables`},this.styleOptions)),this.componentStyle?.loadTheme(g({name:`${this.componentStyle?.name}-style`},this.styleOptions),n),M.setLoadedStyleName(this.componentStyle?.name)}if(!M.isStyleNameLoaded("layer-order")){let t=this.componentStyle?.getLayerOrderThemeCSS?.();this.baseStyle.load(t,g({name:"layer-order",first:!0},this.styleOptions)),M.setLoadedStyleName("layer-order")}this.dt&&(this._loadScopedThemeStyles(this.dt),this._themeChangeListener(()=>this._loadScopedThemeStyles(this.dt)))}_loadScopedThemeStyles(t){let{css:n}=this.componentStyle?.getPresetTheme?.(t,`[${this.attrSelector}]`)||{},r=this.componentStyle?.load(n,g({name:`${this.attrSelector}-${this.componentStyle?.name}`},this.styleOptions));this.scopedStyleEl=r?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(t=()=>{}){qt.clearLoadedStyleNames(),Ce.on("theme:change",t),this.themeChangeListeners.push(t)}cx(t,n){let r=this.parent?this.parent.componentStyle?.classes?.[t]:this.componentStyle?.classes?.[t];return typeof r=="function"?r({instance:this}):typeof r=="string"?r:t}sx(t){let n=this.componentStyle?.inlineStyles?.[t];return typeof n=="function"?n({instance:this}):typeof n=="string"?n:g({},n)}get parent(){return this.parentInstance}static \u0275fac=function(n){return new(n||e)};static \u0275dir=ne({type:e,inputs:{dt:"dt"},features:[se([Ka,Y]),Ue]})}return e})();var Td=["header"],_d=["title"],Rd=["subtitle"],Id=["content"],Od=["footer"],xd=["*",[["p-header"]],[["p-footer"]]],Ad=["*","p-header","p-footer"];function Dd(e,i){e&1&&_e(0)}function Md(e,i){if(e&1&&(T(0,"div",8),me(1,1),R(2,Dd,1,0,"ng-container",6),E()),e&2){let t=I();m(2),v("ngTemplateOutlet",t.headerTemplate||t._headerTemplate)}}function Nd(e,i){if(e&1&&(Me(0),ee(1),Ne()),e&2){let t=I(2);m(),ue(t.header)}}function kd(e,i){e&1&&_e(0)}function Ld(e,i){if(e&1&&(T(0,"div",9),R(1,Nd,2,1,"ng-container",10)(2,kd,1,0,"ng-container",6),E()),e&2){let t=I();m(),v("ngIf",t.header&&!t._titleTemplate&&!t.titleTemplate),m(),v("ngTemplateOutlet",t.titleTemplate||t._titleTemplate)}}function Pd(e,i){if(e&1&&(Me(0),ee(1),Ne()),e&2){let t=I(2);m(),ue(t.subheader)}}function $d(e,i){e&1&&_e(0)}function Fd(e,i){if(e&1&&(T(0,"div",11),R(1,Pd,2,1,"ng-container",10)(2,$d,1,0,"ng-container",6),E()),e&2){let t=I();m(),v("ngIf",t.subheader&&!t._subtitleTemplate&&!t.subtitleTemplate),m(),v("ngTemplateOutlet",t.subtitleTemplate||t._subtitleTemplate)}}function Ud(e,i){e&1&&_e(0)}function jd(e,i){e&1&&_e(0)}function Bd(e,i){if(e&1&&(T(0,"div",12),me(1,2),R(2,jd,1,0,"ng-container",6),E()),e&2){let t=I();m(2),v("ngTemplateOutlet",t.footerTemplate||t._footerTemplate)}}var zd=({dt:e})=>`
.p-card {
    background: ${e("card.background")};
    color: ${e("card.color")};
    box-shadow: ${e("card.shadow")};
    border-radius: ${e("card.border.radius")};
    display: flex;
    flex-direction: column;
}

.p-card-caption {
    display: flex;
    flex-direction: column;
    gap: ${e("card.caption.gap")};
}

.p-card-body {
    padding: ${e("card.body.padding")};
    display: flex;
    flex-direction: column;
    gap: ${e("card.body.gap")};
}

.p-card-title {
    font-size: ${e("card.title.font.size")};
    font-weight: ${e("card.title.font.weight")};
}

.p-card-subtitle {
    color: ${e("card.subtitle.color")};
}
`,Hd={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},Qa=(()=>{class e extends Y{name="card";theme=zd;classes=Hd;static \u0275fac=(()=>{let t;return function(r){return(t||(t=_(e)))(r||e)}})();static \u0275prov=b({token:e,factory:e.\u0275fac})}return e})();var ro=(()=>{class e extends te{header;subheader;set style(t){Zr(this._style(),t)||this._style.set(t)}styleClass;headerFacet;footerFacet;headerTemplate;titleTemplate;subtitleTemplate;contentTemplate;footerTemplate;_headerTemplate;_titleTemplate;_subtitleTemplate;_contentTemplate;_footerTemplate;_style=Be(null);_componentStyle=h(Qa);getBlockableElement(){return this.el.nativeElement.children[0]}templates;ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"header":this._headerTemplate=t.template;break;case"title":this._titleTemplate=t.template;break;case"subtitle":this._subtitleTemplate=t.template;break;case"content":this._contentTemplate=t.template;break;case"footer":this._footerTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}static \u0275fac=(()=>{let t;return function(r){return(t||(t=_(e)))(r||e)}})();static \u0275cmp=z({type:e,selectors:[["p-card"]],contentQueries:function(n,r,o){if(n&1&&($(o,Ua,5),$(o,ja,5),$(o,Td,4),$(o,_d,4),$(o,Rd,4),$(o,Id,4),$(o,Od,4),$(o,Ke,4)),n&2){let s;F(s=U())&&(r.headerFacet=s.first),F(s=U())&&(r.footerFacet=s.first),F(s=U())&&(r.headerTemplate=s.first),F(s=U())&&(r.titleTemplate=s.first),F(s=U())&&(r.subtitleTemplate=s.first),F(s=U())&&(r.contentTemplate=s.first),F(s=U())&&(r.footerTemplate=s.first),F(s=U())&&(r.templates=s)}},inputs:{header:"header",subheader:"subheader",style:"style",styleClass:"styleClass"},features:[se([Qa]),q],ngContentSelectors:Ad,decls:9,vars:10,consts:[[3,"ngClass","ngStyle"],["class","p-card-header",4,"ngIf"],[1,"p-card-body"],["class","p-card-title",4,"ngIf"],["class","p-card-subtitle",4,"ngIf"],[1,"p-card-content"],[4,"ngTemplateOutlet"],["class","p-card-footer",4,"ngIf"],[1,"p-card-header"],[1,"p-card-title"],[4,"ngIf"],[1,"p-card-subtitle"],[1,"p-card-footer"]],template:function(n,r){n&1&&(ke(xd),T(0,"div",0),R(1,Md,3,1,"div",1),T(2,"div",2),R(3,Ld,3,2,"div",3)(4,Fd,3,2,"div",4),T(5,"div",5),me(6),R(7,Ud,1,0,"ng-container",6),E(),R(8,Bd,3,1,"div",7),E()()),n&2&&(pe(r.styleClass),v("ngClass","p-card p-component")("ngStyle",r._style()),G("data-pc-name","card"),m(),v("ngIf",r.headerFacet||r.headerTemplate||r._headerTemplate),m(2),v("ngIf",r.header||r.titleTemplate||r._titleTemplate),m(),v("ngIf",r.subheader||r.subtitleTemplate||r._subtitleTemplate),m(3),v("ngTemplateOutlet",r.contentTemplate||r._contentTemplate),m(),v("ngIf",r.footerFacet||r.footerTemplate||r._footerTemplate))},dependencies:[ae,Mt,ze,tt,ai,Q],encapsulation:2,changeDetection:0})}return e})(),Ya=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=W({type:e});static \u0275inj=V({imports:[ro,Q,Q]})}return e})();var Xa=(()=>{class e extends te{enterClass;leaveClass;root;rootMargin;threshold;once=!0;observer;resetObserver;isObserverActive=!1;animationState;animationEndListener;ngOnInit(){super.ngOnInit(),gt(this.platformId)&&this.renderer.setStyle(this.el.nativeElement,"opacity",this.enterClass?"0":"")}ngAfterViewInit(){super.ngAfterViewInit(),gt(this.platformId)&&this.bindIntersectionObserver()}get options(){return{root:this.root,rootMargin:this.rootMargin,threshold:this.threshold}}bindIntersectionObserver(){this.observer=new IntersectionObserver(([t])=>{this.isObserverActive?t.boundingClientRect.top>0&&(t.isIntersecting?this.enter():this.leave()):t.isIntersecting&&this.enter(),this.isObserverActive=!0},this.options),setTimeout(()=>this.observer.observe(this.el.nativeElement),0),this.resetObserver=new IntersectionObserver(([t])=>{t.boundingClientRect.top>0&&!t.isIntersecting&&(this.el.nativeElement.style.opacity=this.enterClass?"0":"",Pe(this.el.nativeElement,[this.enterClass,this.leaveClass]),this.resetObserver.unobserve(this.el.nativeElement)),this.animationState=void 0},oe(g({},this.options),{threshold:0}))}enter(){this.animationState!=="enter"&&this.enterClass&&(this.el.nativeElement.style.opacity="",Pe(this.el.nativeElement,this.leaveClass),at(this.el.nativeElement,this.enterClass),this.once&&this.unbindIntersectionObserver(),this.bindAnimationEvents(),this.animationState="enter")}leave(){this.animationState!=="leave"&&this.leaveClass&&(this.el.nativeElement.style.opacity=this.enterClass?"0":"",Pe(this.el.nativeElement,this.enterClass),at(this.el.nativeElement,this.leaveClass),this.bindAnimationEvents(),this.animationState="leave")}bindAnimationEvents(){this.animationEndListener||(this.animationEndListener=this.renderer.listen(this.el.nativeElement,"animationend",()=>{Pe(this.el.nativeElement,[this.enterClass,this.leaveClass]),!this.once&&this.resetObserver.observe(this.el.nativeElement),this.unbindAnimationEvents()}))}unbindAnimationEvents(){this.animationEndListener&&(this.animationEndListener(),this.animationEndListener=null)}unbindIntersectionObserver(){this.observer?.unobserve(this.el.nativeElement),this.resetObserver?.unobserve(this.el.nativeElement),this.isObserverActive=!1}ngOnDestroy(){this.unbindAnimationEvents(),this.unbindIntersectionObserver(),super.ngOnDestroy()}static \u0275fac=(()=>{let t;return function(r){return(t||(t=_(e)))(r||e)}})();static \u0275dir=ne({type:e,selectors:[["","pAnimateOnScroll",""]],hostVars:2,hostBindings:function(n,r){n&2&&sn("p-animateonscroll",!0)},inputs:{enterClass:"enterClass",leaveClass:"leaveClass",root:"root",rootMargin:"rootMargin",threshold:[2,"threshold","threshold",ri],once:[2,"once","once",L]},features:[q]})}return e})(),Za=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=W({type:e});static \u0275inj=V({})}return e})();var qd=["icon"],Gd=["*"];function Kd(e,i){if(e&1&&J(0,"span",4),e&2){let t=I(2);v("ngClass",t.icon)}}function Qd(e,i){if(e&1&&(Me(0),R(1,Kd,1,1,"span",3),Ne()),e&2){let t=I();m(),v("ngIf",t.icon)}}function Yd(e,i){}function Xd(e,i){e&1&&R(0,Yd,0,0,"ng-template")}function Zd(e,i){if(e&1&&(T(0,"span",5),R(1,Xd,1,0,null,6),E()),e&2){let t=I();m(),v("ngTemplateOutlet",t.iconTemplate||t._iconTemplate)}}var Jd=({dt:e})=>`
.p-tag {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: ${e("tag.primary.background")};
    color: ${e("tag.primary.color")};
    font-size: ${e("tag.font.size")};
    font-weight: ${e("tag.font.weight")};
    padding: ${e("tag.padding")};
    border-radius: ${e("tag.border.radius")};
    gap: ${e("tag.gap")};
}

.p-tag-icon {
    font-size: ${e("tag.icon.size")};
    width: ${e("tag.icon.size")};
    height:${e("tag.icon.size")};
}

.p-tag-rounded {
    border-radius: ${e("tag.rounded.border.radius")};
}

.p-tag-success {
    background: ${e("tag.success.background")};
    color: ${e("tag.success.color")};
}

.p-tag-info {
    background: ${e("tag.info.background")};
    color: ${e("tag.info.color")};
}

.p-tag-warn {
    background: ${e("tag.warn.background")};
    color: ${e("tag.warn.color")};
}

.p-tag-danger {
    background: ${e("tag.danger.background")};
    color: ${e("tag.danger.color")};
}

.p-tag-secondary {
    background: ${e("tag.secondary.background")};
    color: ${e("tag.secondary.color")};
}

.p-tag-contrast {
    background: ${e("tag.contrast.background")};
    color: ${e("tag.contrast.color")};
}
`,ep={root:({props:e})=>["p-tag p-component",{"p-tag-info":e.severity==="info","p-tag-success":e.severity==="success","p-tag-warn":e.severity==="warn","p-tag-danger":e.severity==="danger","p-tag-secondary":e.severity==="secondary","p-tag-contrast":e.severity==="contrast","p-tag-rounded":e.rounded}],icon:"p-tag-icon",label:"p-tag-label"},Ja=(()=>{class e extends Y{name="tag";theme=Jd;classes=ep;static \u0275fac=(()=>{let t;return function(r){return(t||(t=_(e)))(r||e)}})();static \u0275prov=b({token:e,factory:e.\u0275fac})}return e})();var oo=(()=>{class e extends te{get style(){return this._style}set style(t){this._style=t,this.cd.markForCheck()}styleClass;severity;value;icon;rounded;iconTemplate;templates;_iconTemplate;_style;_componentStyle=h(Ja);ngAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"icon":this._iconTemplate=t.template;break}})}containerClass(){let t="p-tag p-component";return this.severity&&(t+=` p-tag-${this.severity}`),this.rounded&&(t+=" p-tag-rounded"),this.styleClass&&(t+=` ${this.styleClass}`),t}static \u0275fac=(()=>{let t;return function(r){return(t||(t=_(e)))(r||e)}})();static \u0275cmp=z({type:e,selectors:[["p-tag"]],contentQueries:function(n,r,o){if(n&1&&($(o,qd,4),$(o,Ke,4)),n&2){let s;F(s=U())&&(r.iconTemplate=s.first),F(s=U())&&(r.templates=s)}},hostVars:4,hostBindings:function(n,r){n&2&&(Ot(r.style),pe(r.containerClass()))},inputs:{style:"style",styleClass:"styleClass",severity:"severity",value:"value",icon:"icon",rounded:[2,"rounded","rounded",L]},features:[se([Ja]),q],ngContentSelectors:Gd,decls:5,vars:3,consts:[[4,"ngIf"],["class","p-tag-icon",4,"ngIf"],[1,"p-tag-label"],["class","p-tag-icon",3,"ngClass",4,"ngIf"],[1,"p-tag-icon",3,"ngClass"],[1,"p-tag-icon"],[4,"ngTemplateOutlet"]],template:function(n,r){n&1&&(ke(),me(0),R(1,Qd,2,1,"ng-container",0)(2,Zd,2,1,"span",1),T(3,"span",2),ee(4),E()),n&2&&(m(),v("ngIf",!r.iconTemplate&&!r._iconTemplate),m(),v("ngIf",r.iconTemplate||r._iconTemplate),m(2),ue(r.value))},dependencies:[ae,Mt,ze,tt,Q],encapsulation:2,changeDetection:0})}return e})(),el=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=W({type:e});static \u0275inj=V({imports:[oo,Q,Q]})}return e})();var so=(()=>{class e{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(t,n){t&&n&&(t.classList?t.classList.add(n):t.className+=" "+n)}static addMultipleClasses(t,n){if(t&&n)if(t.classList){let r=n.trim().split(" ");for(let o=0;o<r.length;o++)t.classList.add(r[o])}else{let r=n.split(" ");for(let o=0;o<r.length;o++)t.className+=" "+r[o]}}static removeClass(t,n){t&&n&&(t.classList?t.classList.remove(n):t.className=t.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(t,n){t&&n&&[n].flat().filter(Boolean).forEach(r=>r.split(" ").forEach(o=>this.removeClass(t,o)))}static hasClass(t,n){return t&&n?t.classList?t.classList.contains(n):new RegExp("(^| )"+n+"( |$)","gi").test(t.className):!1}static siblings(t){return Array.prototype.filter.call(t.parentNode.children,function(n){return n!==t})}static find(t,n){return Array.from(t.querySelectorAll(n))}static findSingle(t,n){return this.isElement(t)?t.querySelector(n):null}static index(t){let n=t.parentNode.childNodes,r=0;for(var o=0;o<n.length;o++){if(n[o]==t)return r;n[o].nodeType==1&&r++}return-1}static indexWithinGroup(t,n){let r=t.parentNode?t.parentNode.childNodes:[],o=0;for(var s=0;s<r.length;s++){if(r[s]==t)return o;r[s].attributes&&r[s].attributes[n]&&r[s].nodeType==1&&o++}return-1}static appendOverlay(t,n,r="self"){r!=="self"&&t&&n&&this.appendChild(t,n)}static alignOverlay(t,n,r="self",o=!0){t&&n&&(o&&(t.style.minWidth=`${e.getOuterWidth(n)}px`),r==="self"?this.relativePosition(t,n):this.absolutePosition(t,n))}static relativePosition(t,n,r=!0){let o=B=>{if(B)return getComputedStyle(B).getPropertyValue("position")==="relative"?B:o(B.parentElement)},s=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),a=n.offsetHeight,l=n.getBoundingClientRect(),c=this.getWindowScrollTop(),u=this.getWindowScrollLeft(),d=this.getViewport(),f=o(t)?.getBoundingClientRect()||{top:-1*c,left:-1*u},y,C;l.top+a+s.height>d.height?(y=l.top-f.top-s.height,t.style.transformOrigin="bottom",l.top+y<0&&(y=-1*l.top)):(y=a+l.top-f.top,t.style.transformOrigin="top");let A=l.left+s.width-d.width,H=l.left-f.left;s.width>d.width?C=(l.left-f.left)*-1:A>0?C=H-A:C=l.left-f.left,t.style.top=y+"px",t.style.left=C+"px",r&&(t.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static absolutePosition(t,n,r=!0){let o=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),s=o.height,a=o.width,l=n.offsetHeight,c=n.offsetWidth,u=n.getBoundingClientRect(),d=this.getWindowScrollTop(),p=this.getWindowScrollLeft(),f=this.getViewport(),y,C;u.top+l+s>f.height?(y=u.top+d-s,t.style.transformOrigin="bottom",y<0&&(y=d)):(y=l+u.top+d,t.style.transformOrigin="top"),u.left+a>f.width?C=Math.max(0,u.left+p+c-a):C=u.left+p,t.style.top=y+"px",t.style.left=C+"px",r&&(t.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(t,n=[]){return t.parentNode===null?n:this.getParents(t.parentNode,n.concat([t.parentNode]))}static getScrollableParents(t){let n=[];if(t){let r=this.getParents(t),o=/(auto|scroll)/,s=a=>{let l=window.getComputedStyle(a,null);return o.test(l.getPropertyValue("overflow"))||o.test(l.getPropertyValue("overflowX"))||o.test(l.getPropertyValue("overflowY"))};for(let a of r){let l=a.nodeType===1&&a.dataset.scrollselectors;if(l){let c=l.split(",");for(let u of c){let d=this.findSingle(a,u);d&&s(d)&&n.push(d)}}a.nodeType!==9&&s(a)&&n.push(a)}}return n}static getHiddenElementOuterHeight(t){t.style.visibility="hidden",t.style.display="block";let n=t.offsetHeight;return t.style.display="none",t.style.visibility="visible",n}static getHiddenElementOuterWidth(t){t.style.visibility="hidden",t.style.display="block";let n=t.offsetWidth;return t.style.display="none",t.style.visibility="visible",n}static getHiddenElementDimensions(t){let n={};return t.style.visibility="hidden",t.style.display="block",n.width=t.offsetWidth,n.height=t.offsetHeight,t.style.display="none",t.style.visibility="visible",n}static scrollInView(t,n){let r=getComputedStyle(t).getPropertyValue("borderTopWidth"),o=r?parseFloat(r):0,s=getComputedStyle(t).getPropertyValue("paddingTop"),a=s?parseFloat(s):0,l=t.getBoundingClientRect(),u=n.getBoundingClientRect().top+document.body.scrollTop-(l.top+document.body.scrollTop)-o-a,d=t.scrollTop,p=t.clientHeight,f=this.getOuterHeight(n);u<0?t.scrollTop=d+u:u+f>p&&(t.scrollTop=d+u-p+f)}static fadeIn(t,n){t.style.opacity=0;let r=+new Date,o=0,s=function(){o=+t.style.opacity.replace(",",".")+(new Date().getTime()-r)/n,t.style.opacity=o,r=+new Date,+o<1&&(window.requestAnimationFrame&&requestAnimationFrame(s)||setTimeout(s,16))};s()}static fadeOut(t,n){var r=1,o=50,s=n,a=o/s;let l=setInterval(()=>{r=r-a,r<=0&&(r=0,clearInterval(l)),t.style.opacity=r},o)}static getWindowScrollTop(){let t=document.documentElement;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)}static getWindowScrollLeft(){let t=document.documentElement;return(window.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}static matches(t,n){var r=Element.prototype,o=r.matches||r.webkitMatchesSelector||r.mozMatchesSelector||r.msMatchesSelector||function(s){return[].indexOf.call(document.querySelectorAll(s),this)!==-1};return o.call(t,n)}static getOuterWidth(t,n){let r=t.offsetWidth;if(n){let o=getComputedStyle(t);r+=parseFloat(o.marginLeft)+parseFloat(o.marginRight)}return r}static getHorizontalPadding(t){let n=getComputedStyle(t);return parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)}static getHorizontalMargin(t){let n=getComputedStyle(t);return parseFloat(n.marginLeft)+parseFloat(n.marginRight)}static innerWidth(t){let n=t.offsetWidth,r=getComputedStyle(t);return n+=parseFloat(r.paddingLeft)+parseFloat(r.paddingRight),n}static width(t){let n=t.offsetWidth,r=getComputedStyle(t);return n-=parseFloat(r.paddingLeft)+parseFloat(r.paddingRight),n}static getInnerHeight(t){let n=t.offsetHeight,r=getComputedStyle(t);return n+=parseFloat(r.paddingTop)+parseFloat(r.paddingBottom),n}static getOuterHeight(t,n){let r=t.offsetHeight;if(n){let o=getComputedStyle(t);r+=parseFloat(o.marginTop)+parseFloat(o.marginBottom)}return r}static getHeight(t){let n=t.offsetHeight,r=getComputedStyle(t);return n-=parseFloat(r.paddingTop)+parseFloat(r.paddingBottom)+parseFloat(r.borderTopWidth)+parseFloat(r.borderBottomWidth),n}static getWidth(t){let n=t.offsetWidth,r=getComputedStyle(t);return n-=parseFloat(r.paddingLeft)+parseFloat(r.paddingRight)+parseFloat(r.borderLeftWidth)+parseFloat(r.borderRightWidth),n}static getViewport(){let t=window,n=document,r=n.documentElement,o=n.getElementsByTagName("body")[0],s=t.innerWidth||r.clientWidth||o.clientWidth,a=t.innerHeight||r.clientHeight||o.clientHeight;return{width:s,height:a}}static getOffset(t){var n=t.getBoundingClientRect();return{top:n.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:n.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(t,n){let r=t.parentNode;if(!r)throw"Can't replace element";return r.replaceChild(n,t)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var t=window.navigator.userAgent,n=t.indexOf("MSIE ");if(n>0)return!0;var r=t.indexOf("Trident/");if(r>0){var o=t.indexOf("rv:");return!0}var s=t.indexOf("Edge/");return s>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(t,n){if(this.isElement(n))n.appendChild(t);else if(n&&n.el&&n.el.nativeElement)n.el.nativeElement.appendChild(t);else throw"Cannot append "+n+" to "+t}static removeChild(t,n){if(this.isElement(n))n.removeChild(t);else if(n.el&&n.el.nativeElement)n.el.nativeElement.removeChild(t);else throw"Cannot remove "+t+" from "+n}static removeElement(t){"remove"in Element.prototype?t.remove():t.parentNode.removeChild(t)}static isElement(t){return typeof HTMLElement=="object"?t instanceof HTMLElement:t&&typeof t=="object"&&t!==null&&t.nodeType===1&&typeof t.nodeName=="string"}static calculateScrollbarWidth(t){if(t){let n=getComputedStyle(t);return t.offsetWidth-t.clientWidth-parseFloat(n.borderLeftWidth)-parseFloat(n.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let n=document.createElement("div");n.className="p-scrollbar-measure",document.body.appendChild(n);let r=n.offsetWidth-n.clientWidth;return document.body.removeChild(n),this.calculatedScrollbarWidth=r,r}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let t=document.createElement("div");t.className="p-scrollbar-measure",document.body.appendChild(t);let n=t.offsetHeight-t.clientHeight;return document.body.removeChild(t),this.calculatedScrollbarWidth=n,n}static invokeElementMethod(t,n,r){t[n].apply(t,r)}static clearSelection(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let t=this.resolveUserAgent();this.browser={},t.browser&&(this.browser[t.browser]=!0,this.browser.version=t.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let t=navigator.userAgent.toLowerCase(),n=/(chrome)[ \/]([\w.]+)/.exec(t)||/(webkit)[ \/]([\w.]+)/.exec(t)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t)||/(msie) ([\w.]+)/.exec(t)||t.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t)||[];return{browser:n[1]||"",version:n[2]||"0"}}static isInteger(t){return Number.isInteger?Number.isInteger(t):typeof t=="number"&&isFinite(t)&&Math.floor(t)===t}static isHidden(t){return!t||t.offsetParent===null}static isVisible(t){return t&&t.offsetParent!=null}static isExist(t){return t!==null&&typeof t<"u"&&t.nodeName&&t.parentNode}static focus(t,n){t&&document.activeElement!==t&&t.focus(n)}static getFocusableSelectorString(t=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t}`}static getFocusableElements(t,n=""){let r=this.find(t,this.getFocusableSelectorString(n)),o=[];for(let s of r){let a=getComputedStyle(s);this.isVisible(s)&&a.display!="none"&&a.visibility!="hidden"&&o.push(s)}return o}static getFocusableElement(t,n=""){let r=this.findSingle(t,this.getFocusableSelectorString(n));if(r){let o=getComputedStyle(r);if(this.isVisible(r)&&o.display!="none"&&o.visibility!="hidden")return r}return null}static getFirstFocusableElement(t,n=""){let r=this.getFocusableElements(t,n);return r.length>0?r[0]:null}static getLastFocusableElement(t,n){let r=this.getFocusableElements(t,n);return r.length>0?r[r.length-1]:null}static getNextFocusableElement(t,n=!1){let r=e.getFocusableElements(t),o=0;if(r&&r.length>0){let s=r.indexOf(r[0].ownerDocument.activeElement);n?s==-1||s===0?o=r.length-1:o=s-1:s!=-1&&s!==r.length-1&&(o=s+1)}return r[o]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection().toString():document.getSelection?document.getSelection().toString():document.selection?document.selection.createRange().text:null}static getTargetElement(t,n){if(!t)return null;switch(t){case"document":return document;case"window":return window;case"@next":return n?.nextElementSibling;case"@prev":return n?.previousElementSibling;case"@parent":return n?.parentElement;case"@grandparent":return n?.parentElement.parentElement;default:let r=typeof t;if(r==="string")return document.querySelector(t);if(r==="object"&&t.hasOwnProperty("nativeElement"))return this.isExist(t.nativeElement)?t.nativeElement:void 0;let s=(a=>!!(a&&a.constructor&&a.call&&a.apply))(t)?t():t;return s&&s.nodeType===9||this.isExist(s)?s:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(t,n){if(t){let r=t.getAttribute(n);return isNaN(r)?r==="true"||r==="false"?r==="true":r:+r}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(t="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,t)}static unblockBodyScroll(t="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,t)}static createElement(t,n={},...r){if(t){let o=document.createElement(t);return this.setAttributes(o,n),o.append(...r),o}}static setAttribute(t,n="",r){this.isElement(t)&&r!==null&&r!==void 0&&t.setAttribute(n,r)}static setAttributes(t,n={}){if(this.isElement(t)){let r=(o,s)=>{let a=t?.$attrs?.[o]?[t?.$attrs?.[o]]:[];return[s].flat().reduce((l,c)=>{if(c!=null){let u=typeof c;if(u==="string"||u==="number")l.push(c);else if(u==="object"){let d=Array.isArray(c)?r(o,c):Object.entries(c).map(([p,f])=>o==="style"&&(f||f===0)?`${p.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${f}`:f?p:void 0);l=d.length?l.concat(d.filter(p=>!!p)):l}}return l},a)};Object.entries(n).forEach(([o,s])=>{if(s!=null){let a=o.match(/^on(.+)/);a?t.addEventListener(a[1].toLowerCase(),s):o==="pBind"?this.setAttributes(t,s):(s=o==="class"?[...new Set(r("class",s))].join(" ").trim():o==="style"?r("style",s).join(";").trim():s,(t.$attrs=t.$attrs||{})&&(t.$attrs[o]=s),t.setAttribute(o,s))}})}}static isFocusableElement(t,n=""){return this.isElement(t)?t.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n}`):!1}}return e})(),tl=class{element;listener;scrollableParents;constructor(i,t=()=>{}){this.element=i,this.listener=t}bindScrollListener(){this.scrollableParents=so.getScrollableParents(this.element);for(let i=0;i<this.scrollableParents.length;i++)this.scrollableParents[i].addEventListener("scroll",this.listener)}unbindScrollListener(){if(this.scrollableParents)for(let i=0;i<this.scrollableParents.length;i++)this.scrollableParents[i].removeEventListener("scroll",this.listener)}destroy(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}};var nl=(()=>{class e extends te{autofocus=!1;_autofocus=!1;focused=!1;platformId=h(De);document=h(j);host=h(pt);ngAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}ngAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){gt(this.platformId)&&this._autofocus&&setTimeout(()=>{let t=so.getFocusableElements(this.host?.nativeElement);t.length===0&&this.host.nativeElement.focus(),t.length>0&&t[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let t;return function(r){return(t||(t=_(e)))(r||e)}})();static \u0275dir=ne({type:e,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[2,"autofocus","autofocus",L],_autofocus:[0,"pAutoFocus","_autofocus"]},features:[q]})}return e})();var np=({dt:e})=>`
.p-badge {
    display: inline-flex;
    border-radius: ${e("badge.border.radius")};
    justify-content: center;
    padding: ${e("badge.padding")};
    background: ${e("badge.primary.background")};
    color: ${e("badge.primary.color")};
    font-size: ${e("badge.font.size")};
    font-weight: ${e("badge.font.weight")};
    min-width: ${e("badge.min.width")};
    height: ${e("badge.height")};
    line-height: ${e("badge.height")};
}

.p-badge-dot {
    width: ${e("badge.dot.size")};
    min-width: ${e("badge.dot.size")};
    height: ${e("badge.dot.size")};
    border-radius: 50%;
    padding: 0;
}

.p-badge-circle {
    padding: 0;
    border-radius: 50%;
}

.p-badge-secondary {
    background: ${e("badge.secondary.background")};
    color: ${e("badge.secondary.color")};
}

.p-badge-success {
    background: ${e("badge.success.background")};
    color: ${e("badge.success.color")};
}

.p-badge-info {
    background: ${e("badge.info.background")};
    color: ${e("badge.info.color")};
}

.p-badge-warn {
    background: ${e("badge.warn.background")};
    color: ${e("badge.warn.color")};
}

.p-badge-danger {
    background: ${e("badge.danger.background")};
    color: ${e("badge.danger.color")};
}

.p-badge-contrast {
    background: ${e("badge.contrast.background")};
    color: ${e("badge.contrast.color")};
}

.p-badge-sm {
    font-size: ${e("badge.sm.font.size")};
    min-width: ${e("badge.sm.min.width")};
    height: ${e("badge.sm.height")};
    line-height: ${e("badge.sm.height")};
}

.p-badge-lg {
    font-size: ${e("badge.lg.font.size")};
    min-width: ${e("badge.lg.min.width")};
    height: ${e("badge.lg.height")};
    line-height: ${e("badge.lg.height")};
}

.p-badge-xl {
    font-size: ${e("badge.xl.font.size")};
    min-width: ${e("badge.xl.min.width")};
    height: ${e("badge.xl.height")};
    line-height: ${e("badge.xl.height")};
}

/* For PrimeNG (directive)*/

.p-overlay-badge {
    position: relative;
}

.p-overlay-badge > .p-badge {
    position: absolute;
    top: 0;
    inset-inline-end: 0;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
    margin: 0;
}
`,ip={root:({props:e,instance:i})=>["p-badge p-component",{"p-badge-circle":P(e.value)&&String(e.value).length===1,"p-badge-dot":Ie(e.value)&&!i.$slots.default,"p-badge-sm":e.size==="small","p-badge-lg":e.size==="large","p-badge-xl":e.size==="xlarge","p-badge-info":e.severity==="info","p-badge-success":e.severity==="success","p-badge-warn":e.severity==="warn","p-badge-danger":e.severity==="danger","p-badge-secondary":e.severity==="secondary","p-badge-contrast":e.severity==="contrast"}]},il=(()=>{class e extends Y{name="badge";theme=np;classes=ip;static \u0275fac=(()=>{let t;return function(r){return(t||(t=_(e)))(r||e)}})();static \u0275prov=b({token:e,factory:e.\u0275fac})}return e})();var ao=(()=>{class e extends te{styleClass=je();style=je();badgeSize=je();size=je();severity=je();value=je();badgeDisabled=je(!1,{transform:L});_componentStyle=h(il);containerClass=oi(()=>{let t="p-badge p-component";return P(this.value())&&String(this.value()).length===1&&(t+=" p-badge-circle"),this.badgeSize()==="large"?t+=" p-badge-lg":this.badgeSize()==="xlarge"?t+=" p-badge-xl":this.badgeSize()==="small"&&(t+=" p-badge-sm"),Ie(this.value())&&(t+=" p-badge-dot"),this.styleClass()&&(t+=` ${this.styleClass()}`),this.severity()&&(t+=` p-badge-${this.severity()}`),t});static \u0275fac=(()=>{let t;return function(r){return(t||(t=_(e)))(r||e)}})();static \u0275cmp=z({type:e,selectors:[["p-badge"]],hostVars:6,hostBindings:function(n,r){n&2&&(Ot(r.style()),pe(r.containerClass()),on("display",r.badgeDisabled()?"none":null))},inputs:{styleClass:[1,"styleClass"],style:[1,"style"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[se([il]),q],decls:1,vars:1,template:function(n,r){n&1&&ee(0),n&2&&ue(r.value())},dependencies:[ae,Q],encapsulation:2,changeDetection:0})}return e})(),rl=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=W({type:e});static \u0275inj=V({imports:[ao,Q,Q]})}return e})();var op=["*"],sp=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,ap=(()=>{class e extends Y{name="baseicon";inlineStyles=sp;static \u0275fac=(()=>{let t;return function(r){return(t||(t=_(e)))(r||e)}})();static \u0275prov=b({token:e,factory:e.\u0275fac})}return e})();var ol=(()=>{class e extends te{label;spin=!1;styleClass;role;ariaLabel;ariaHidden;ngOnInit(){super.ngOnInit(),this.getAttributes()}getAttributes(){let t=Ie(this.label);this.role=t?void 0:"img",this.ariaLabel=t?void 0:this.label,this.ariaHidden=t}getClassNames(){return`p-icon ${this.styleClass?this.styleClass+" ":""}${this.spin?"p-icon-spin":""}`}static \u0275fac=(()=>{let t;return function(r){return(t||(t=_(e)))(r||e)}})();static \u0275cmp=z({type:e,selectors:[["ng-component"]],hostAttrs:[1,"p-component","p-iconwrapper"],inputs:{label:"label",spin:[2,"spin","spin",L],styleClass:"styleClass"},features:[se([ap]),q],ngContentSelectors:op,decls:1,vars:0,template:function(n,r){n&1&&(ke(),me(0))},encapsulation:2,changeDetection:0})}return e})();var sl=(()=>{class e extends ol{pathId;ngOnInit(){this.pathId="url(#"+Fn()+")"}static \u0275fac=(()=>{let t;return function(r){return(t||(t=_(e)))(r||e)}})();static \u0275cmp=z({type:e,selectors:[["SpinnerIcon"]],features:[q],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,r){n&1&&(Ao(),T(0,"svg",0)(1,"g"),J(2,"path",1),E(),T(3,"defs")(4,"clipPath",2),J(5,"rect",3),E()()()),n&2&&(pe(r.getClassNames()),G("aria-label",r.ariaLabel)("aria-hidden",r.ariaHidden)("role",r.role),m(),G("clip-path",r.pathId),m(3),v("id",r.pathId))},encapsulation:2})}return e})();var lp=({dt:e})=>`
/* For PrimeNG */
.p-ripple {
    overflow: hidden;
    position: relative;
}

.p-ink {
    display: block;
    position: absolute;
    background: ${e("ripple.background")};
    border-radius: 100%;
    transform: scale(0);
}

.p-ink-active {
    animation: ripple 0.4s linear;
}

.p-ripple-disabled .p-ink {
    display: none !important;
}

@keyframes ripple {
    100% {
        opacity: 0;
        transform: scale(2.5);
    }
}
`,cp={root:"p-ink"},al=(()=>{class e extends Y{name="ripple";theme=lp;classes=cp;static \u0275fac=(()=>{let t;return function(r){return(t||(t=_(e)))(r||e)}})();static \u0275prov=b({token:e,factory:e.\u0275fac})}return e})();var ll=(()=>{class e extends te{zone=h(Te);_componentStyle=h(al);animationListener;mouseDownListener;timeout;constructor(){super(),an(()=>{gt(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}ngAfterViewInit(){super.ngAfterViewInit()}onMouseDown(t){let n=this.getInk();if(!n||this.document.defaultView?.getComputedStyle(n,null).display==="none")return;if(Pe(n,"p-ink-active"),!Kr(n)&&!Qr(n)){let a=Math.max(Oa(this.el.nativeElement),Da(this.el.nativeElement));n.style.height=a+"px",n.style.width=a+"px"}let r=Aa(this.el.nativeElement),o=t.pageX-r.left+this.document.body.scrollTop-Qr(n)/2,s=t.pageY-r.top+this.document.body.scrollLeft-Kr(n)/2;this.renderer.setStyle(n,"top",s+"px"),this.renderer.setStyle(n,"left",o+"px"),at(n,"p-ink-active"),this.timeout=setTimeout(()=>{let a=this.getInk();a&&Pe(a,"p-ink-active")},401)}getInk(){let t=this.el.nativeElement.children;for(let n=0;n<t.length;n++)if(typeof t[n].className=="string"&&t[n].className.indexOf("p-ink")!==-1)return t[n];return null}resetInk(){let t=this.getInk();t&&Pe(t,"p-ink-active")}onAnimationEnd(t){this.timeout&&clearTimeout(this.timeout),Pe(t.currentTarget,"p-ink-active")}create(){let t=this.renderer.createElement("span");this.renderer.addClass(t,"p-ink"),this.renderer.appendChild(this.el.nativeElement,t),this.renderer.setAttribute(t,"aria-hidden","true"),this.renderer.setAttribute(t,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(t,"animationend",this.onAnimationEnd.bind(this)))}remove(){let t=this.getInk();t&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,Ma(t))}ngOnDestroy(){this.config&&this.config.ripple()&&this.remove(),super.ngOnDestroy()}static \u0275fac=function(n){return new(n||e)};static \u0275dir=ne({type:e,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[se([al]),q]})}return e})();var up=["content"],dp=["loadingicon"],pp=["icon"],hp=["*"],ul=e=>({class:e});function fp(e,i){e&1&&_e(0)}function gp(e,i){if(e&1&&J(0,"span",8),e&2){let t=I(3);v("ngClass",t.iconClass()),G("aria-hidden",!0)("data-pc-section","loadingicon")}}function mp(e,i){if(e&1&&J(0,"SpinnerIcon",9),e&2){let t=I(3);v("styleClass",t.spinnerIconClass())("spin",!0),G("aria-hidden",!0)("data-pc-section","loadingicon")}}function bp(e,i){if(e&1&&(Me(0),R(1,gp,1,3,"span",6)(2,mp,1,4,"SpinnerIcon",7),Ne()),e&2){let t=I(2);m(),v("ngIf",t.loadingIcon),m(),v("ngIf",!t.loadingIcon)}}function vp(e,i){}function yp(e,i){if(e&1&&R(0,vp,0,0,"ng-template",10),e&2){let t=I(2);v("ngIf",t.loadingIconTemplate||t._loadingIconTemplate)}}function Sp(e,i){if(e&1&&(Me(0),R(1,bp,3,2,"ng-container",2)(2,yp,1,1,null,5),Ne()),e&2){let t=I();m(),v("ngIf",!t.loadingIconTemplate&&!t._loadingIconTemplate),m(),v("ngTemplateOutlet",t.loadingIconTemplate||t._loadingIconTemplate)("ngTemplateOutletContext",ft(3,ul,t.iconClass()))}}function wp(e,i){if(e&1&&J(0,"span",8),e&2){let t=I(2);pe(t.icon),v("ngClass",t.iconClass()),G("data-pc-section","icon")}}function Cp(e,i){}function Ep(e,i){if(e&1&&R(0,Cp,0,0,"ng-template",10),e&2){let t=I(2);v("ngIf",!t.icon&&(t.iconTemplate||t._iconTemplate))}}function Tp(e,i){if(e&1&&(Me(0),R(1,wp,1,4,"span",11)(2,Ep,1,1,null,5),Ne()),e&2){let t=I();m(),v("ngIf",t.icon&&!t.iconTemplate&&!t._iconTemplate),m(),v("ngTemplateOutlet",t.iconTemplate||t._iconTemplate)("ngTemplateOutletContext",ft(3,ul,t.iconClass()))}}function _p(e,i){if(e&1&&(T(0,"span",12),ee(1),E()),e&2){let t=I();G("aria-hidden",t.icon&&!t.label)("data-pc-section","label"),m(),ue(t.label)}}function Rp(e,i){if(e&1&&J(0,"p-badge",13),e&2){let t=I();v("value",t.badge)("severity",t.badgeSeverity)}}var Ip=({dt:e})=>`
.p-button {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: ${e("button.primary.color")};
    background: ${e("button.primary.background")};
    border: 1px solid ${e("button.primary.border.color")};
    padding-block: ${e("button.padding.y")};
    padding-inline: ${e("button.padding.x")};
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background ${e("button.transition.duration")}, color ${e("button.transition.duration")}, border-color ${e("button.transition.duration")},
            outline-color ${e("button.transition.duration")}, box-shadow ${e("button.transition.duration")};
    border-radius: ${e("button.border.radius")};
    outline-color: transparent;
    gap: ${e("button.gap")};
}

.p-button-icon,
.p-button-icon:before,
.p-button-icon:after {
    line-height: inherit;
}

.p-button:disabled {
    cursor: default;
}

.p-button-icon-right {
    order: 1;
}

.p-button-icon-right:dir(rtl) {
    order: -1;
}

.p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
    order: 1;
}

.p-button-icon-bottom {
    order: 2;
}

.p-button-icon-only {
    width: ${e("button.icon.only.width")};
    padding-inline-start: 0;
    padding-inline-end: 0;
    gap: 0;
}

.p-button-icon-only.p-button-rounded {
    border-radius: 50%;
    height: ${e("button.icon.only.width")};
}

.p-button-icon-only .p-button-label {
    visibility: hidden;
    width: 0;
}

.p-button-sm {
    font-size: ${e("button.sm.font.size")};
    padding-block: ${e("button.sm.padding.y")};
    padding-inline: ${e("button.sm.padding.x")};
}

.p-button-sm .p-button-icon {
    font-size: ${e("button.sm.font.size")};
}

.p-button-sm.p-button-icon-only {
    width: ${e("button.sm.icon.only.width")};
}

.p-button-sm.p-button-icon-only.p-button-rounded {
    height: ${e("button.sm.icon.only.width")};
}

.p-button-lg {
    font-size: ${e("button.lg.font.size")};
    padding-block: ${e("button.lg.padding.y")};
    padding-inline: ${e("button.lg.padding.x")};
}

.p-button-lg .p-button-icon {
    font-size: ${e("button.lg.font.size")};
}

.p-button-lg.p-button-icon-only {
    width: ${e("button.lg.icon.only.width")};
}

.p-button-lg.p-button-icon-only.p-button-rounded {
    height: ${e("button.lg.icon.only.width")};
}

.p-button-vertical {
    flex-direction: column;
}

.p-button-label {
    font-weight: ${e("button.label.font.weight")};
}

.p-button-fluid {
    width: 100%;
}

.p-button-fluid.p-button-icon-only {
    width: ${e("button.icon.only.width")};
}

.p-button:not(:disabled):hover {
    background: ${e("button.primary.hover.background")};
    border: 1px solid ${e("button.primary.hover.border.color")};
    color: ${e("button.primary.hover.color")};
}

.p-button:not(:disabled):active {
    background: ${e("button.primary.active.background")};
    border: 1px solid ${e("button.primary.active.border.color")};
    color: ${e("button.primary.active.color")};
}

.p-button:focus-visible {
    box-shadow: ${e("button.primary.focus.ring.shadow")};
    outline: ${e("button.focus.ring.width")} ${e("button.focus.ring.style")} ${e("button.primary.focus.ring.color")};
    outline-offset: ${e("button.focus.ring.offset")};
}

.p-button .p-badge {
    min-width: ${e("button.badge.size")};
    height: ${e("button.badge.size")};
    line-height: ${e("button.badge.size")};
}

.p-button-raised {
    box-shadow: ${e("button.raised.shadow")};
}

.p-button-rounded {
    border-radius: ${e("button.rounded.border.radius")};
}

.p-button-secondary {
    background: ${e("button.secondary.background")};
    border: 1px solid ${e("button.secondary.border.color")};
    color: ${e("button.secondary.color")};
}

.p-button-secondary:not(:disabled):hover {
    background: ${e("button.secondary.hover.background")};
    border: 1px solid ${e("button.secondary.hover.border.color")};
    color: ${e("button.secondary.hover.color")};
}

.p-button-secondary:not(:disabled):active {
    background: ${e("button.secondary.active.background")};
    border: 1px solid ${e("button.secondary.active.border.color")};
    color: ${e("button.secondary.active.color")};
}

.p-button-secondary:focus-visible {
    outline-color: ${e("button.secondary.focus.ring.color")};
    box-shadow: ${e("button.secondary.focus.ring.shadow")};
}

.p-button-success {
    background: ${e("button.success.background")};
    border: 1px solid ${e("button.success.border.color")};
    color: ${e("button.success.color")};
}

.p-button-success:not(:disabled):hover {
    background: ${e("button.success.hover.background")};
    border: 1px solid ${e("button.success.hover.border.color")};
    color: ${e("button.success.hover.color")};
}

.p-button-success:not(:disabled):active {
    background: ${e("button.success.active.background")};
    border: 1px solid ${e("button.success.active.border.color")};
    color: ${e("button.success.active.color")};
}

.p-button-success:focus-visible {
    outline-color: ${e("button.success.focus.ring.color")};
    box-shadow: ${e("button.success.focus.ring.shadow")};
}

.p-button-info {
    background: ${e("button.info.background")};
    border: 1px solid ${e("button.info.border.color")};
    color: ${e("button.info.color")};
}

.p-button-info:not(:disabled):hover {
    background: ${e("button.info.hover.background")};
    border: 1px solid ${e("button.info.hover.border.color")};
    color: ${e("button.info.hover.color")};
}

.p-button-info:not(:disabled):active {
    background: ${e("button.info.active.background")};
    border: 1px solid ${e("button.info.active.border.color")};
    color: ${e("button.info.active.color")};
}

.p-button-info:focus-visible {
    outline-color: ${e("button.info.focus.ring.color")};
    box-shadow: ${e("button.info.focus.ring.shadow")};
}

.p-button-warn {
    background: ${e("button.warn.background")};
    border: 1px solid ${e("button.warn.border.color")};
    color: ${e("button.warn.color")};
}

.p-button-warn:not(:disabled):hover {
    background: ${e("button.warn.hover.background")};
    border: 1px solid ${e("button.warn.hover.border.color")};
    color: ${e("button.warn.hover.color")};
}

.p-button-warn:not(:disabled):active {
    background: ${e("button.warn.active.background")};
    border: 1px solid ${e("button.warn.active.border.color")};
    color: ${e("button.warn.active.color")};
}

.p-button-warn:focus-visible {
    outline-color: ${e("button.warn.focus.ring.color")};
    box-shadow: ${e("button.warn.focus.ring.shadow")};
}

.p-button-help {
    background: ${e("button.help.background")};
    border: 1px solid ${e("button.help.border.color")};
    color: ${e("button.help.color")};
}

.p-button-help:not(:disabled):hover {
    background: ${e("button.help.hover.background")};
    border: 1px solid ${e("button.help.hover.border.color")};
    color: ${e("button.help.hover.color")};
}

.p-button-help:not(:disabled):active {
    background: ${e("button.help.active.background")};
    border: 1px solid ${e("button.help.active.border.color")};
    color: ${e("button.help.active.color")};
}

.p-button-help:focus-visible {
    outline-color: ${e("button.help.focus.ring.color")};
    box-shadow: ${e("button.help.focus.ring.shadow")};
}

.p-button-danger {
    background: ${e("button.danger.background")};
    border: 1px solid ${e("button.danger.border.color")};
    color: ${e("button.danger.color")};
}

.p-button-danger:not(:disabled):hover {
    background: ${e("button.danger.hover.background")};
    border: 1px solid ${e("button.danger.hover.border.color")};
    color: ${e("button.danger.hover.color")};
}

.p-button-danger:not(:disabled):active {
    background: ${e("button.danger.active.background")};
    border: 1px solid ${e("button.danger.active.border.color")};
    color: ${e("button.danger.active.color")};
}

.p-button-danger:focus-visible {
    outline-color: ${e("button.danger.focus.ring.color")};
    box-shadow: ${e("button.danger.focus.ring.shadow")};
}

.p-button-contrast {
    background: ${e("button.contrast.background")};
    border: 1px solid ${e("button.contrast.border.color")};
    color: ${e("button.contrast.color")};
}

.p-button-contrast:not(:disabled):hover {
    background: ${e("button.contrast.hover.background")};
    border: 1px solid ${e("button.contrast.hover.border.color")};
    color: ${e("button.contrast.hover.color")};
}

.p-button-contrast:not(:disabled):active {
    background: ${e("button.contrast.active.background")};
    border: 1px solid ${e("button.contrast.active.border.color")};
    color: ${e("button.contrast.active.color")};
}

.p-button-contrast:focus-visible {
    outline-color: ${e("button.contrast.focus.ring.color")};
    box-shadow: ${e("button.contrast.focus.ring.shadow")};
}

.p-button-outlined {
    background: transparent;
    border-color: ${e("button.outlined.primary.border.color")};
    color: ${e("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):hover {
    background: ${e("button.outlined.primary.hover.background")};
    border-color: ${e("button.outlined.primary.border.color")};
    color: ${e("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):active {
    background: ${e("button.outlined.primary.active.background")};
    border-color: ${e("button.outlined.primary.border.color")};
    color: ${e("button.outlined.primary.color")};
}

.p-button-outlined.p-button-secondary {
    border-color: ${e("button.outlined.secondary.border.color")};
    color: ${e("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):hover {
    background: ${e("button.outlined.secondary.hover.background")};
    border-color: ${e("button.outlined.secondary.border.color")};
    color: ${e("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):active {
    background: ${e("button.outlined.secondary.active.background")};
    border-color: ${e("button.outlined.secondary.border.color")};
    color: ${e("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-success {
    border-color: ${e("button.outlined.success.border.color")};
    color: ${e("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):hover {
    background: ${e("button.outlined.success.hover.background")};
    border-color: ${e("button.outlined.success.border.color")};
    color: ${e("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):active {
    background: ${e("button.outlined.success.active.background")};
    border-color: ${e("button.outlined.success.border.color")};
    color: ${e("button.outlined.success.color")};
}

.p-button-outlined.p-button-info {
    border-color: ${e("button.outlined.info.border.color")};
    color: ${e("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):hover {
    background: ${e("button.outlined.info.hover.background")};
    border-color: ${e("button.outlined.info.border.color")};
    color: ${e("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):active {
    background: ${e("button.outlined.info.active.background")};
    border-color: ${e("button.outlined.info.border.color")};
    color: ${e("button.outlined.info.color")};
}

.p-button-outlined.p-button-warn {
    border-color: ${e("button.outlined.warn.border.color")};
    color: ${e("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):hover {
    background: ${e("button.outlined.warn.hover.background")};
    border-color: ${e("button.outlined.warn.border.color")};
    color: ${e("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):active {
    background: ${e("button.outlined.warn.active.background")};
    border-color: ${e("button.outlined.warn.border.color")};
    color: ${e("button.outlined.warn.color")};
}

.p-button-outlined.p-button-help {
    border-color: ${e("button.outlined.help.border.color")};
    color: ${e("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):hover {
    background: ${e("button.outlined.help.hover.background")};
    border-color: ${e("button.outlined.help.border.color")};
    color: ${e("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):active {
    background: ${e("button.outlined.help.active.background")};
    border-color: ${e("button.outlined.help.border.color")};
    color: ${e("button.outlined.help.color")};
}

.p-button-outlined.p-button-danger {
    border-color: ${e("button.outlined.danger.border.color")};
    color: ${e("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):hover {
    background: ${e("button.outlined.danger.hover.background")};
    border-color: ${e("button.outlined.danger.border.color")};
    color: ${e("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):active {
    background: ${e("button.outlined.danger.active.background")};
    border-color: ${e("button.outlined.danger.border.color")};
    color: ${e("button.outlined.danger.color")};
}

.p-button-outlined.p-button-contrast {
    border-color: ${e("button.outlined.contrast.border.color")};
    color: ${e("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):hover {
    background: ${e("button.outlined.contrast.hover.background")};
    border-color: ${e("button.outlined.contrast.border.color")};
    color: ${e("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):active {
    background: ${e("button.outlined.contrast.active.background")};
    border-color: ${e("button.outlined.contrast.border.color")};
    color: ${e("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-plain {
    border-color: ${e("button.outlined.plain.border.color")};
    color: ${e("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):hover {
    background: ${e("button.outlined.plain.hover.background")};
    border-color: ${e("button.outlined.plain.border.color")};
    color: ${e("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):active {
    background: ${e("button.outlined.plain.active.background")};
    border-color: ${e("button.outlined.plain.border.color")};
    color: ${e("button.outlined.plain.color")};
}

.p-button-text {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.primary.color")};
}

.p-button-text:not(:disabled):hover {
    background: ${e("button.text.primary.hover.background")};
    border-color: transparent;
    color: ${e("button.text.primary.color")};
}

.p-button-text:not(:disabled):active {
    background: ${e("button.text.primary.active.background")};
    border-color: transparent;
    color: ${e("button.text.primary.color")};
}

.p-button-text.p-button-secondary {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):hover {
    background: ${e("button.text.secondary.hover.background")};
    border-color: transparent;
    color: ${e("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):active {
    background: ${e("button.text.secondary.active.background")};
    border-color: transparent;
    color: ${e("button.text.secondary.color")};
}

.p-button-text.p-button-success {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):hover {
    background: ${e("button.text.success.hover.background")};
    border-color: transparent;
    color: ${e("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):active {
    background: ${e("button.text.success.active.background")};
    border-color: transparent;
    color: ${e("button.text.success.color")};
}

.p-button-text.p-button-info {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):hover {
    background: ${e("button.text.info.hover.background")};
    border-color: transparent;
    color: ${e("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):active {
    background: ${e("button.text.info.active.background")};
    border-color: transparent;
    color: ${e("button.text.info.color")};
}

.p-button-text.p-button-warn {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):hover {
    background: ${e("button.text.warn.hover.background")};
    border-color: transparent;
    color: ${e("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):active {
    background: ${e("button.text.warn.active.background")};
    border-color: transparent;
    color: ${e("button.text.warn.color")};
}

.p-button-text.p-button-help {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):hover {
    background: ${e("button.text.help.hover.background")};
    border-color: transparent;
    color: ${e("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):active {
    background: ${e("button.text.help.active.background")};
    border-color: transparent;
    color: ${e("button.text.help.color")};
}

.p-button-text.p-button-danger {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):hover {
    background: ${e("button.text.danger.hover.background")};
    border-color: transparent;
    color: ${e("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):active {
    background: ${e("button.text.danger.active.background")};
    border-color: transparent;
    color: ${e("button.text.danger.color")};
}

.p-button-text.p-button-plain {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):hover {
    background: ${e("button.text.plain.hover.background")};
    border-color: transparent;
    color: ${e("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):active {
    background: ${e("button.text.plain.active.background")};
    border-color: transparent;
    color: ${e("button.text.plain.color")};
}

.p-button-text.p-button-contrast {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):hover {
    background: ${e("button.text.contrast.hover.background")};
    border-color: transparent;
    color: ${e("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):active {
    background: ${e("button.text.contrast.active.background")};
    border-color: transparent;
    color: ${e("button.text.contrast.color")};
}

.p-button-link {
    background: transparent;
    border-color: transparent;
    color: ${e("button.link.color")};
}

.p-button-link:not(:disabled):hover {
    background: transparent;
    border-color: transparent;
    color: ${e("button.link.hover.color")};
}

.p-button-link:not(:disabled):hover .p-button-label {
    text-decoration: underline;
}

.p-button-link:not(:disabled):active {
    background: transparent;
    border-color: transparent;
    color: ${e("button.link.active.color")};
}

/* For PrimeNG */
.p-button-icon-right {
    order: 1;
}

p-button[iconpos='right'] spinnericon {
    order: 1;
}
`,Op={root:({instance:e,props:i})=>["p-button p-component",{"p-button-icon-only":e.hasIcon&&!i.label&&!i.badge,"p-button-vertical":(i.iconPos==="top"||i.iconPos==="bottom")&&i.label,"p-button-loading":i.loading,"p-button-link":i.link,[`p-button-${i.severity}`]:i.severity,"p-button-raised":i.raised,"p-button-rounded":i.rounded,"p-button-text":i.text,"p-button-outlined":i.outlined,"p-button-sm":i.size==="small","p-button-lg":i.size==="large","p-button-plain":i.plain,"p-button-fluid":i.fluid}],loadingIcon:"p-button-loading-icon",icon:({props:e})=>["p-button-icon",{[`p-button-icon-${e.iconPos}`]:e.label}],label:"p-button-label"},cl=(()=>{class e extends Y{name="button";theme=Ip;classes=Op;static \u0275fac=(()=>{let t;return function(r){return(t||(t=_(e)))(r||e)}})();static \u0275prov=b({token:e,factory:e.\u0275fac})}return e})();var lo=(()=>{class e extends te{type="button";iconPos="left";icon;badge;label;disabled;loading=!1;loadingIcon;raised=!1;rounded=!1;text=!1;plain=!1;severity;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;autofocus;fluid;onClick=new Ae;onFocus=new Ae;onBlur=new Ae;contentTemplate;loadingIconTemplate;iconTemplate;_buttonProps;get buttonProps(){return this._buttonProps}set buttonProps(t){this._buttonProps=t,t&&typeof t=="object"&&Object.entries(t).forEach(([n,r])=>this[`_${n}`]!==r&&(this[`_${n}`]=r))}get hasFluid(){let n=this.el.nativeElement.closest("p-fluid");return Ie(this.fluid)?!!n:this.fluid}_componentStyle=h(cl);templates;_contentTemplate;_iconTemplate;_loadingIconTemplate;ngAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"content":this._contentTemplate=t.template;break;case"icon":this._iconTemplate=t.template;break;case"loadingicon":this._loadingIconTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}ngOnChanges(t){super.ngOnChanges(t);let{buttonProps:n}=t;if(n){let r=n.currentValue;for(let o in r)this[o]=r[o]}}spinnerIconClass(){return Object.entries(this.iconClass()).filter(([,t])=>!!t).reduce((t,[n])=>t+` ${n}`,"p-button-loading-icon")}iconClass(){return{[`p-button-loading-icon pi-spin ${this.loadingIcon??""}`]:this.loading,"p-button-icon":!0,"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}}get buttonClass(){return{"p-button p-component":!0,"p-button-icon-only":(this.icon||this.iconTemplate||this._iconTemplate||this.loadingIcon||this.loadingIconTemplate||this._loadingIconTemplate)&&!this.label,"p-button-vertical":(this.iconPos==="top"||this.iconPos==="bottom")&&this.label,"p-button-loading":this.loading,"p-button-loading-label-only":this.loading&&!this.icon&&this.label&&!this.loadingIcon&&this.iconPos==="left","p-button-link":this.link,[`p-button-${this.severity}`]:this.severity,"p-button-raised":this.raised,"p-button-rounded":this.rounded,"p-button-text":this.text||this.variant=="text","p-button-outlined":this.outlined||this.variant=="outlined","p-button-sm":this.size==="small","p-button-lg":this.size==="large","p-button-plain":this.plain,"p-button-fluid":this.hasFluid,[`${this.styleClass}`]:this.styleClass}}static \u0275fac=(()=>{let t;return function(r){return(t||(t=_(e)))(r||e)}})();static \u0275cmp=z({type:e,selectors:[["p-button"]],contentQueries:function(n,r,o){if(n&1&&($(o,up,5),$(o,dp,5),$(o,pp,5),$(o,Ke,4)),n&2){let s;F(s=U())&&(r.contentTemplate=s.first),F(s=U())&&(r.loadingIconTemplate=s.first),F(s=U())&&(r.iconTemplate=s.first),F(s=U())&&(r.templates=s)}},inputs:{type:"type",iconPos:"iconPos",icon:"icon",badge:"badge",label:"label",disabled:[2,"disabled","disabled",L],loading:[2,"loading","loading",L],loadingIcon:"loadingIcon",raised:[2,"raised","raised",L],rounded:[2,"rounded","rounded",L],text:[2,"text","text",L],plain:[2,"plain","plain",L],severity:"severity",outlined:[2,"outlined","outlined",L],link:[2,"link","link",L],tabindex:[2,"tabindex","tabindex",ri],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",autofocus:[2,"autofocus","autofocus",L],fluid:[2,"fluid","fluid",L],buttonProps:"buttonProps"},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[se([cl]),q,Ue],ngContentSelectors:hp,decls:7,vars:14,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","ngClass","pAutoFocus"],[4,"ngTemplateOutlet"],[4,"ngIf"],["class","p-button-label",4,"ngIf"],[3,"value","severity",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ngClass",4,"ngIf"],[3,"styleClass","spin",4,"ngIf"],[3,"ngClass"],[3,"styleClass","spin"],[3,"ngIf"],[3,"class","ngClass",4,"ngIf"],[1,"p-button-label"],[3,"value","severity"]],template:function(n,r){n&1&&(ke(),T(0,"button",0),xt("click",function(s){return r.onClick.emit(s)})("focus",function(s){return r.onFocus.emit(s)})("blur",function(s){return r.onBlur.emit(s)}),me(1),R(2,fp,1,0,"ng-container",1)(3,Sp,3,5,"ng-container",2)(4,Tp,3,5,"ng-container",2)(5,_p,2,3,"span",3)(6,Rp,1,2,"p-badge",4),E()),n&2&&(v("ngStyle",r.style)("disabled",r.disabled||r.loading)("ngClass",r.buttonClass)("pAutoFocus",r.autofocus),G("type",r.type)("aria-label",r.ariaLabel)("data-pc-name","button")("data-pc-section","root")("tabindex",r.tabindex),m(2),v("ngTemplateOutlet",r.contentTemplate||r._contentTemplate),m(),v("ngIf",r.loading),m(),v("ngIf",!r.loading),m(),v("ngIf",!r.contentTemplate&&!r._contentTemplate&&r.label),m(),v("ngIf",!r.contentTemplate&&!r._contentTemplate&&r.badge))},dependencies:[ae,Mt,ze,tt,ai,ll,nl,sl,rl,ao,Q],encapsulation:2,changeDetection:0})}return e})(),dl=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=W({type:e});static \u0275inj=V({imports:[ae,lo,Q,Q]})}return e})();var Ap=["content"],Dp=["opposite"],Mp=["marker"],co=e=>({$implicit:e});function Np(e,i){e&1&&_e(0)}function kp(e,i){e&1&&_e(0)}function Lp(e,i){if(e&1&&(Me(0),R(1,kp,1,0,"ng-container",4),Ne()),e&2){let t=I().$implicit,n=I();m(),v("ngTemplateOutlet",n.markerTemplate||n._markerTemplate)("ngTemplateOutletContext",ft(2,co,t))}}function Pp(e,i){e&1&&J(0,"div",9),e&2&&G("data-pc-section","marker")}function $p(e,i){e&1&&J(0,"div",10)}function Fp(e,i){e&1&&_e(0)}function Up(e,i){if(e&1&&(T(0,"div",2)(1,"div",3),R(2,Np,1,0,"ng-container",4),E(),T(3,"div",5),R(4,Lp,2,4,"ng-container",6)(5,Pp,1,1,"ng-template",null,0,Jo)(7,$p,1,0,"div",7),E(),T(8,"div",8),R(9,Fp,1,0,"ng-container",4),E()()),e&2){let t=i.$implicit,n=i.last,r=Zo(6),o=I();G("data-pc-section","event"),m(),G("data-pc-section","opposite"),m(),v("ngTemplateOutlet",o.oppositeTemplate||o._oppositeTemplate)("ngTemplateOutletContext",ft(11,co,t)),m(),G("data-pc-section","separator"),m(),v("ngIf",o.markerTemplate||o._markerTemplate)("ngIfElse",r),m(3),v("ngIf",!n),m(),G("data-pc-section","content"),m(),v("ngTemplateOutlet",o.contentTemplate||o._contentTemplate)("ngTemplateOutletContext",ft(13,co,t))}}var jp=({dt:e})=>`
.p-timeline {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    direction: ltr;
}

.p-timeline-left .p-timeline-event-opposite {
    text-align: right;
}

.p-timeline-left .p-timeline-event-content {
    text-align: left;
}

.p-timeline-right .p-timeline-event {
    flex-direction: row-reverse;
}

.p-timeline-right .p-timeline-event-opposite {
    text-align: left;
}

.p-timeline-right .p-timeline-event-content {
    text-align: right;
}

.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) {
    flex-direction: row-reverse;
}

.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-opposite {
    text-align: right;
}

.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-content {
    text-align: left;
}

.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-opposite {
    text-align: left;
}

.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-content {
    text-align: right;
}

.p-timeline-vertical .p-timeline-event-opposite,
.p-timeline-vertical .p-timeline-event-content {
    padding: ${e("timeline.vertical.event.content.padding")};
}

.p-timeline-vertical .p-timeline-event-connector {
    width: ${e("timeline.event.connector.size")};
}

.p-timeline-event {
    display: flex;
    position: relative;
    min-height: ${e("timeline.event.min.height")};
}

.p-timeline-event:last-child {
    min-height: 0;
}

.p-timeline-event-opposite {
    flex: 1;
}

.p-timeline-event-content {
    flex: 1;
}

.p-timeline-event-separator {
    flex: 0;
    display: flex;
    align-items: center;
    flex-direction: column;
}

.p-timeline-event-marker {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    align-self: baseline;
    border-width: ${e("timeline.event.marker.border.width")};
    border-style: solid;
    border-color: ${e("timeline.event.marker.border.color")};
    border-radius: ${e("timeline.event.marker.border.radius")};
    width: ${e("timeline.event.marker.size")};
    height: ${e("timeline.event.marker.size")};
    background: ${e("timeline.event.marker.background")};
}

.p-timeline-event-marker::before {
    content: " ";
    border-radius: ${e("timeline.event.marker.content.border.radius")};
    width: ${e("timeline.event.marker.content.size")};
    height:${e("timeline.event.marker.content.size")};
    background: ${e("timeline.event.marker.content.background")};
}

.p-timeline-event-marker::after {
    content: " ";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: ${e("timeline.event.marker.border.radius")};
    box-shadow: ${e("timeline.event.marker.content.inset.shadow")};
}

.p-timeline-event-connector {
    flex-grow: 1;
    background: ${e("timeline.event.connector.color")};
}

.p-timeline-horizontal {
    flex-direction: row;
}

.p-timeline-horizontal .p-timeline-event {
    flex-direction: column;
    flex: 1;
}

.p-timeline-horizontal .p-timeline-event:last-child {
    flex: 0;
}

.p-timeline-horizontal .p-timeline-event-separator {
    flex-direction: row;
}

.p-timeline-horizontal .p-timeline-event-connector {
    width: 100%;
    height: ${e("timeline.event.connector.size")};
}

.p-timeline-horizontal .p-timeline-event-opposite,
.p-timeline-horizontal .p-timeline-event-content {
    padding: ${e("timeline.horizontal.event.content.padding")};
}

.p-timeline-horizontal.p-timeline-alternate .p-timeline-event:nth-child(even) {
    flex-direction: column-reverse;
}

.p-timeline-bottom .p-timeline-event {
    flex-direction: column-reverse;
}
`,Bp={root:({props:e})=>["p-timeline p-component","p-timeline-"+e.align,"p-timeline-"+e.layout],event:"p-timeline-event",eventOpposite:"p-timeline-event-opposite",eventSeparator:"p-timeline-event-separator",eventMarker:"p-timeline-event-marker",eventConnector:"p-timeline-event-connector",eventContent:"p-timeline-event-content"},pl=(()=>{class e extends Y{name="timeline";theme=jp;classes=Bp;static \u0275fac=(()=>{let t;return function(r){return(t||(t=_(e)))(r||e)}})();static \u0275prov=b({token:e,factory:e.\u0275fac})}return e})();var uo=(()=>{class e extends te{value;style;styleClass;align="left";layout="vertical";contentTemplate;oppositeTemplate;markerTemplate;templates;_contentTemplate;_oppositeTemplate;_markerTemplate;_componentStyle=h(pl);get hostClass(){return this.styleClass}getBlockableElement(){return this.el.nativeElement.children[0]}ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"content":this._contentTemplate=t.template;break;case"opposite":this._oppositeTemplate=t.template;break;case"marker":this._markerTemplate=t.template;break}})}static \u0275fac=(()=>{let t;return function(r){return(t||(t=_(e)))(r||e)}})();static \u0275cmp=z({type:e,selectors:[["p-timeline"]],contentQueries:function(n,r,o){if(n&1&&($(o,Ap,4),$(o,Dp,4),$(o,Mp,4),$(o,Ke,4)),n&2){let s;F(s=U())&&(r.contentTemplate=s.first),F(s=U())&&(r.oppositeTemplate=s.first),F(s=U())&&(r.markerTemplate=s.first),F(s=U())&&(r.templates=s)}},hostVars:24,hostBindings:function(n,r){n&2&&(G("data-pc-section","root")("data-pc-name","timeline"),Ot(r.style),pe(r.hostClass),sn("p-timeline",!0)("p-component",!0)("p-timeline-left",r.align==="left")("p-timeline-right",r.align==="right")("p-timeline-top",r.align==="top")("p-timeline-bottom",r.align==="bottom")("p-timeline-alternate",r.align==="alternate")("p-timeline-vertical",r.layout==="vertical")("p-timeline-horizontal",r.layout==="horizontal"))},inputs:{value:"value",style:"style",styleClass:"styleClass",align:"align",layout:"layout"},features:[se([pl]),q],decls:1,vars:1,consts:[["marker",""],["class","p-timeline-event",4,"ngFor","ngForOf"],[1,"p-timeline-event"],[1,"p-timeline-event-opposite"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"p-timeline-event-separator"],[4,"ngIf","ngIfElse"],["class","p-timeline-event-connector",4,"ngIf"],[1,"p-timeline-event-content"],[1,"p-timeline-event-marker"],[1,"p-timeline-event-connector"]],template:function(n,r){n&1&&R(0,Up,10,15,"div",1),n&2&&v("ngForOf",r.value)},dependencies:[ae,si,ze,tt,Q],encapsulation:2,changeDetection:0})}return e})(),hl=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=W({type:e});static \u0275inj=V({imports:[uo,Q,Q]})}return e})();function Hp(e,i){if(e&1&&(T(0,"div",9),J(1,"i",10),E()),e&2){let t=i.$implicit;on("border-color",t.color),m(),pe(t.icon),on("color",t.color)}}function Vp(e,i){if(e&1&&(T(0,"div",13)(1,"div",14),ee(2),E(),J(3,"p-tag",15),E()),e&2){let t=I().$implicit;m(2),ue(t.period),m(),v("value",t.duration)("rounded",!0)}}function Wp(e,i){if(e&1&&(T(0,"li",27),ee(1),E()),e&2){let t=i.$implicit;m(),or(" ",t,"")}}function qp(e,i){if(e&1&&(T(0,"span",28),ee(1),E()),e&2){let t=i.$implicit;m(),or(" ",t," ")}}function Gp(e,i){if(e&1){let t=Xo();T(0,"div",29)(1,"p-button",30),xt("onClick",function(){Oo(t);let r=I(2).$implicit,o=I();return xo(o.navigateToDetail(r.detailRoute))}),E()()}if(e&2){let t=I(2).$implicit;m(),v("label","\u67E5\u770B "+t.company+" \u5C08\u6848\u8A73\u60C5")("outlined",!0)}}function Kp(e,i){if(e&1&&(T(0,"div",16)(1,"h3",17),ee(2),E(),T(3,"h4",18),ee(4),E(),T(5,"div",19)(6,"h5",20),ee(7,"\u3010\u5DE5\u4F5C\u5167\u5BB9\u3011"),E(),T(8,"ul",21),R(9,Wp,2,1,"li",22),E()(),T(10,"div",23)(11,"div",24),R(12,qp,2,1,"span",25),E()(),R(13,Gp,2,2,"div",26),E()),e&2){let t=I().$implicit;m(2),ue(t.title),m(2),ue(t.company),m(5),v("ngForOf",t.responsibilities),m(3),v("ngForOf",t.tags),m(),v("ngIf",t.detailRoute)}}function Qp(e,i){e&1&&(T(0,"p-card",11),R(1,Vp,4,3,"ng-template",12)(2,Kp,14,5,"ng-template",8),E())}var fl=class e{constructor(i){this.router=i}sectionTitle="\u5DE5\u4F5C\u6210\u679C";sectionSubtitle="\u6211\u7684\u8077\u696D\u767C\u5C55\u8ECC\u8DE1\u8207\u5C08\u696D\u6210\u5C31";workExperience=[];navigateToDetail(i){this.router.navigate([i]).then(()=>{window.scrollTo({top:0,behavior:"smooth"})})}static \u0275fac=function(t){return new(t||e)(ce(Se))};static \u0275cmp=z({type:e,selectors:[["app-experience"]],inputs:{sectionTitle:"sectionTitle",sectionSubtitle:"sectionSubtitle",workExperience:"workExperience"},decls:11,vars:3,consts:[["pAnimateOnScroll","","enterClass","animate-enter fade-in-10 slide-in-from-r-8 animate-duration-1000","leaveClass","animate-leave fade-out-0",1,"py-16"],[1,"max-w-6xl","mx-auto","px-4"],[1,"text-center","mb-12"],[1,"text-4xl","font-bold","text-white","mb-4"],[1,"text-gray-300","text-lg"],[1,"space-y-4"],["align","alternate",3,"value"],["pTemplate","marker"],["pTemplate","content"],[1,"w-12","h-12","bg-white","rounded-full","border-4","flex","items-center","justify-center","shadow-lg"],[1,"text-xl"],[1,"mb-4","shadow-lg","bg-white"],["pTemplate","header"],[1,"bg-gradient-to-r","to-indigo-50","p-4","flex","justify-between","items-center","border-b"],[1,"text-md","font-semibold","text-blue-600"],["severity","info",3,"value","rounded"],[1,"text-left"],[1,"text-2xl","font-bold","text-blue-600","mb-2"],[1,"text-lg","font-medium","text-gray-800","mb-4"],[1,"mb-4"],[1,"text-base","font-semibold","text-amber-600","mb-2"],[1,"list-disc","pl-6","space-y-1"],["class","text-gray-700",4,"ngFor","ngForOf"],[1,"mt-3","mb-3"],[1,"flex","flex-wrap","gap-2"],["class",`inline-block px-3 py-1 text-sm bg-blue-100 text-blue-800
                                                                                                                                                                         rounded-full font-medium`,4,"ngFor","ngForOf"],["class","mt-4 pt-4 border-t border-gray-200",4,"ngIf"],[1,"text-gray-700"],[1,"inline-block","px-3","py-1","text-sm","bg-blue-100","text-blue-800","rounded-full","font-medium"],[1,"mt-4","pt-4","border-t","border-gray-200"],["icon","pi pi-external-link","severity","info","size","small",1,"w-full",3,"onClick","label","outlined"]],template:function(t,n){t&1&&(T(0,"section",0)(1,"div",1)(2,"div",2)(3,"h2",3),ee(4),E(),T(5,"p",4),ee(6),E()(),T(7,"div",5)(8,"p-timeline",6),R(9,Hp,2,6,"ng-template",7)(10,Qp,3,0,"ng-template",8),E()()()()),t&2&&(m(4),ue(n.sectionTitle),m(2),ue(n.sectionSubtitle),m(2),v("value",n.workExperience))},dependencies:[ae,si,ze,qr,Ya,ro,Ke,hl,uo,Za,Xa,el,oo,dl,lo],styles:[".p-timeline .p-timeline-event-connector{background-color:#fffc!important}  .p-card{background:#fffffff2!important;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);transition:all .3s ease}  .p-card:hover{transform:translateY(-4px)}"]})};export{pr as a,ql as b,mc as c,hf as d,ye as e,Pr as f,Se as g,Bi as h,qu as i,Qu as j,qr as k,_a as l,rg as m,Ia as n,id as o,rd as p,og as q,Oa as r,sg as s,ag as t,lg as u,cg as v,od as w,ug as x,Da as y,dg as z,pg as A,Fn as B,Mg as C,Ke as D,Q as E,Y as F,cm as G,te as H,ro as I,Ya as J,Xa as K,Za as L,uo as M,hl as N,oo as O,el as P,tl as Q,ao as R,rl as S,ol as T,ll as U,lo as V,dl as W,fl as X};
