import{Ba as j,J as me,K as Fe,M as O,N as Ce,Q as x,R as P,S as N,U as Ee,Ua as S,Va as m,W as we,X as $,Y as ee,Z as Ae,ab as ie,pa as te,ra as ne,sa as ye,va as y,vb as re,xa as Se}from"./chunk-7BJCQ2YH.js";var Te=null;function se(){return Te}function Fn(e){Te??=e}var ve=class{},Pe=new x(""),ke=(()=>{let t=class t{historyGo(n){throw new Error("")}};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=O({token:t,factory:()=>N(Ge),providedIn:"platform"});let e=t;return e})();var Ge=(()=>{let t=class t extends ke{constructor(){super(),this._doc=N(Pe),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return se().getBaseHref(this._doc)}onPopState(n){let i=se().getGlobalEventTarget(this._doc,"window");return i.addEventListener("popstate",n,!1),()=>i.removeEventListener("popstate",n)}onHashChange(n){let i=se().getGlobalEventTarget(this._doc,"window");return i.addEventListener("hashchange",n,!1),()=>i.removeEventListener("hashchange",n)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(n){this._location.pathname=n}pushState(n,i,r){this._history.pushState(n,i,r)}replaceState(n,i,r){this._history.replaceState(n,i,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(n=0){this._history.go(n)}getState(){return this._history.state}};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=O({token:t,factory:()=>new t,providedIn:"platform"});let e=t;return e})();function xe(e,t){if(e.length==0)return t;if(t.length==0)return e;let s=0;return e.endsWith("/")&&s++,t.startsWith("/")&&s++,s==2?e+t.substring(1):s==1?e+t:e+"/"+t}function be(e){let t=e.match(/#|\?|$/),s=t&&t.index||e.length,n=s-(e[s-1]==="/"?1:0);return e.slice(0,n)+e.slice(s)}function R(e){return e&&e[0]!=="?"?"?"+e:e}var De=(()=>{let t=class t{historyGo(n){throw new Error("")}};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=O({token:t,factory:()=>N(He),providedIn:"root"});let e=t;return e})(),Ve=new x(""),He=(()=>{let t=class t extends De{constructor(n,i){super(),this._platformLocation=n,this._removeListenerFns=[],this._baseHref=i??this._platformLocation.getBaseHrefFromDOM()??N(Pe).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(n){this._removeListenerFns.push(this._platformLocation.onPopState(n),this._platformLocation.onHashChange(n))}getBaseHref(){return this._baseHref}prepareExternalUrl(n){return xe(this._baseHref,n)}path(n=!1){let i=this._platformLocation.pathname+R(this._platformLocation.search),r=this._platformLocation.hash;return r&&n?`${i}${r}`:i}pushState(n,i,r,u){let o=this.prepareExternalUrl(r+R(u));this._platformLocation.pushState(n,i,o)}replaceState(n,i,r,u){let o=this.prepareExternalUrl(r+R(u));this._platformLocation.replaceState(n,i,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(n=0){this._platformLocation.historyGo?.(n)}};t.\u0275fac=function(i){return new(i||t)(P(ke),P(Ve,8))},t.\u0275prov=O({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var Ye=(()=>{let t=class t{constructor(n){this._subject=new Se,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=n;let i=this._locationStrategy.getBaseHref();this._basePath=Ke(be(_e(i))),this._locationStrategy.onPopState(r=>{this._subject.emit({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(n=!1){return this.normalize(this._locationStrategy.path(n))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(n,i=""){return this.path()==this.normalize(n+R(i))}normalize(n){return t.stripTrailingSlash(We(this._basePath,_e(n)))}prepareExternalUrl(n){return n&&n[0]!=="/"&&(n="/"+n),this._locationStrategy.prepareExternalUrl(n)}go(n,i="",r=null){this._locationStrategy.pushState(r,"",n,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(n+R(i)),r)}replaceState(n,i="",r=null){this._locationStrategy.replaceState(r,"",n,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(n+R(i)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(n=0){this._locationStrategy.historyGo?.(n)}onUrlChange(n){return this._urlChangeListeners.push(n),this._urlChangeSubscription??=this.subscribe(i=>{this._notifyUrlChangeListeners(i.url,i.state)}),()=>{let i=this._urlChangeListeners.indexOf(n);this._urlChangeListeners.splice(i,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(n="",i){this._urlChangeListeners.forEach(r=>r(n,i))}subscribe(n,i,r){return this._subject.subscribe({next:n,error:i,complete:r})}};t.normalizeQueryParams=R,t.joinWithSlash=xe,t.stripTrailingSlash=be,t.\u0275fac=function(i){return new(i||t)(P(De))},t.\u0275prov=O({token:t,factory:()=>Ze(),providedIn:"root"});let e=t;return e})();function Ze(){return new Ye(P(De))}function We(e,t){if(!e||!t.startsWith(e))return t;let s=t.substring(e.length);return s===""||["/",";","?","#"].includes(s[0])?s:t}function _e(e){return e.replace(/\/index.html$/,"")}function Ke(e){if(new RegExp("^(https?:)?//").test(e)){let[,s]=e.split(/\/\/[^\/]+/);return s}return e}var Ne=function(e){return e[e.Decimal=0]="Decimal",e[e.Percent=1]="Percent",e[e.Currency=2]="Currency",e[e.Scientific=3]="Scientific",e}(Ne||{});var w=function(e){return e[e.Format=0]="Format",e[e.Standalone=1]="Standalone",e}(w||{}),f=function(e){return e[e.Narrow=0]="Narrow",e[e.Abbreviated=1]="Abbreviated",e[e.Wide=2]="Wide",e[e.Short=3]="Short",e}(f||{}),v=function(e){return e[e.Short=0]="Short",e[e.Medium=1]="Medium",e[e.Long=2]="Long",e[e.Full=3]="Full",e}(v||{}),A=function(e){return e[e.Decimal=0]="Decimal",e[e.Group=1]="Group",e[e.List=2]="List",e[e.PercentSign=3]="PercentSign",e[e.PlusSign=4]="PlusSign",e[e.MinusSign=5]="MinusSign",e[e.Exponential=6]="Exponential",e[e.SuperscriptingExponent=7]="SuperscriptingExponent",e[e.PerMille=8]="PerMille",e[e.Infinity=9]="Infinity",e[e.NaN=10]="NaN",e[e.TimeSeparator=11]="TimeSeparator",e[e.CurrencyDecimal=12]="CurrencyDecimal",e[e.CurrencyGroup=13]="CurrencyGroup",e}(A||{});function Xe(e){return S(e)[m.LocaleId]}function qe(e,t,s){let n=S(e),i=[n[m.DayPeriodsFormat],n[m.DayPeriodsStandalone]],r=b(i,t);return b(r,s)}function Je(e,t,s){let n=S(e),i=[n[m.DaysFormat],n[m.DaysStandalone]],r=b(i,t);return b(r,s)}function Qe(e,t,s){let n=S(e),i=[n[m.MonthsFormat],n[m.MonthsStandalone]],r=b(i,t);return b(r,s)}function et(e,t){let n=S(e)[m.Eras];return b(n,t)}function G(e,t){let s=S(e);return b(s[m.DateFormat],t)}function V(e,t){let s=S(e);return b(s[m.TimeFormat],t)}function H(e,t){let n=S(e)[m.DateTimeFormat];return b(n,t)}function M(e,t){let s=S(e),n=s[m.NumberSymbols][t];if(typeof n>"u"){if(t===A.CurrencyDecimal)return s[m.NumberSymbols][A.Decimal];if(t===A.CurrencyGroup)return s[m.NumberSymbols][A.Group]}return n}function tt(e,t){return S(e)[m.NumberFormats][t]}function $e(e){if(!e[m.ExtraData])throw new Error(`Missing extra locale data for the locale "${e[m.LocaleId]}". Use "registerLocaleData" to load new data. See the "I18n guide" on angular.io to know more.`)}function nt(e){let t=S(e);return $e(t),(t[m.ExtraData][2]||[]).map(n=>typeof n=="string"?ue(n):[ue(n[0]),ue(n[1])])}function it(e,t,s){let n=S(e);$e(n);let i=[n[m.ExtraData][0],n[m.ExtraData][1]],r=b(i,t)||[];return b(r,s)||[]}function b(e,t){for(let s=t;s>-1;s--)if(typeof e[s]<"u")return e[s];throw new Error("Locale data API: locale data undefined")}function ue(e){let[t,s]=e.split(":");return{hours:+t,minutes:+s}}var rt=/^(\d{4,})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,Y={},st=/((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/,B=function(e){return e[e.Short=0]="Short",e[e.ShortGMT=1]="ShortGMT",e[e.Long=2]="Long",e[e.Extended=3]="Extended",e}(B||{}),d=function(e){return e[e.FullYear=0]="FullYear",e[e.Month=1]="Month",e[e.Date=2]="Date",e[e.Hours=3]="Hours",e[e.Minutes=4]="Minutes",e[e.Seconds=5]="Seconds",e[e.FractionalSeconds=6]="FractionalSeconds",e[e.Day=7]="Day",e}(d||{}),c=function(e){return e[e.DayPeriods=0]="DayPeriods",e[e.Days=1]="Days",e[e.Months=2]="Months",e[e.Eras=3]="Eras",e}(c||{});function ut(e,t,s,n){let i=gt(e);t=I(s,t)||t;let u=[],o;for(;t;)if(o=st.exec(t),o){u=u.concat(o.slice(1));let g=u.pop();if(!g)break;t=g}else{u.push(t);break}let l=i.getTimezoneOffset();n&&(l=ze(n,l),i=Dt(i,n,!0));let D="";return u.forEach(g=>{let a=ft(g);D+=a?a(i,s,l):g==="''"?"'":g.replace(/(^'|'$)/g,"").replace(/''/g,"'")}),D}function q(e,t,s){let n=new Date(0);return n.setFullYear(e,t,s),n.setHours(0,0,0),n}function I(e,t){let s=Xe(e);if(Y[s]??={},Y[s][t])return Y[s][t];let n="";switch(t){case"shortDate":n=G(e,v.Short);break;case"mediumDate":n=G(e,v.Medium);break;case"longDate":n=G(e,v.Long);break;case"fullDate":n=G(e,v.Full);break;case"shortTime":n=V(e,v.Short);break;case"mediumTime":n=V(e,v.Medium);break;case"longTime":n=V(e,v.Long);break;case"fullTime":n=V(e,v.Full);break;case"short":let i=I(e,"shortTime"),r=I(e,"shortDate");n=Z(H(e,v.Short),[i,r]);break;case"medium":let u=I(e,"mediumTime"),o=I(e,"mediumDate");n=Z(H(e,v.Medium),[u,o]);break;case"long":let l=I(e,"longTime"),D=I(e,"longDate");n=Z(H(e,v.Long),[l,D]);break;case"full":let g=I(e,"fullTime"),a=I(e,"fullDate");n=Z(H(e,v.Full),[g,a]);break}return n&&(Y[s][t]=n),n}function Z(e,t){return t&&(e=e.replace(/\{([^}]+)}/g,function(s,n){return t!=null&&n in t?t[n]:s})),e}function _(e,t,s="-",n,i){let r="";(e<0||i&&e<=0)&&(i?e=-e+1:(e=-e,r=s));let u=String(e);for(;u.length<t;)u="0"+u;return n&&(u=u.slice(u.length-t)),r+u}function ot(e,t){return _(e,3).substring(0,t)}function F(e,t,s=0,n=!1,i=!1){return function(r,u){let o=at(e,r);if((s>0||o>-s)&&(o+=s),e===d.Hours)o===0&&s===-12&&(o=12);else if(e===d.FractionalSeconds)return ot(o,t);let l=M(u,A.MinusSign);return _(o,t,l,n,i)}}function at(e,t){switch(e){case d.FullYear:return t.getFullYear();case d.Month:return t.getMonth();case d.Date:return t.getDate();case d.Hours:return t.getHours();case d.Minutes:return t.getMinutes();case d.Seconds:return t.getSeconds();case d.FractionalSeconds:return t.getMilliseconds();case d.Day:return t.getDay();default:throw new Error(`Unknown DateType value "${e}".`)}}function h(e,t,s=w.Format,n=!1){return function(i,r){return ct(i,r,e,t,s,n)}}function ct(e,t,s,n,i,r){switch(s){case c.Months:return Qe(t,i,n)[e.getMonth()];case c.Days:return Je(t,i,n)[e.getDay()];case c.DayPeriods:let u=e.getHours(),o=e.getMinutes();if(r){let D=nt(t),g=it(t,i,n),a=D.findIndex(C=>{if(Array.isArray(C)){let[p,E]=C,k=u>=p.hours&&o>=p.minutes,L=u<E.hours||u===E.hours&&o<E.minutes;if(p.hours<E.hours){if(k&&L)return!0}else if(k||L)return!0}else if(C.hours===u&&C.minutes===o)return!0;return!1});if(a!==-1)return g[a]}return qe(t,i,n)[u<12?0:1];case c.Eras:return et(t,n)[e.getFullYear()<=0?0:1];default:let l=s;throw new Error(`unexpected translation type ${l}`)}}function W(e){return function(t,s,n){let i=-1*n,r=M(s,A.MinusSign),u=i>0?Math.floor(i/60):Math.ceil(i/60);switch(e){case B.Short:return(i>=0?"+":"")+_(u,2,r)+_(Math.abs(i%60),2,r);case B.ShortGMT:return"GMT"+(i>=0?"+":"")+_(u,1,r);case B.Long:return"GMT"+(i>=0?"+":"")+_(u,2,r)+":"+_(Math.abs(i%60),2,r);case B.Extended:return n===0?"Z":(i>=0?"+":"")+_(u,2,r)+":"+_(Math.abs(i%60),2,r);default:throw new Error(`Unknown zone width "${e}"`)}}}var dt=0,X=4;function lt(e){let t=q(e,dt,1).getDay();return q(e,0,1+(t<=X?X:X+7)-t)}function Ue(e){let t=e.getDay(),s=t===0?-3:X-t;return q(e.getFullYear(),e.getMonth(),e.getDate()+s)}function oe(e,t=!1){return function(s,n){let i;if(t){let r=new Date(s.getFullYear(),s.getMonth(),1).getDay()-1,u=s.getDate();i=1+Math.floor((u+r)/7)}else{let r=Ue(s),u=lt(r.getFullYear()),o=r.getTime()-u.getTime();i=1+Math.round(o/6048e5)}return _(i,e,M(n,A.MinusSign))}}function K(e,t=!1){return function(s,n){let r=Ue(s).getFullYear();return _(r,e,M(n,A.MinusSign),t)}}var ae={};function ft(e){if(ae[e])return ae[e];let t;switch(e){case"G":case"GG":case"GGG":t=h(c.Eras,f.Abbreviated);break;case"GGGG":t=h(c.Eras,f.Wide);break;case"GGGGG":t=h(c.Eras,f.Narrow);break;case"y":t=F(d.FullYear,1,0,!1,!0);break;case"yy":t=F(d.FullYear,2,0,!0,!0);break;case"yyy":t=F(d.FullYear,3,0,!1,!0);break;case"yyyy":t=F(d.FullYear,4,0,!1,!0);break;case"Y":t=K(1);break;case"YY":t=K(2,!0);break;case"YYY":t=K(3);break;case"YYYY":t=K(4);break;case"M":case"L":t=F(d.Month,1,1);break;case"MM":case"LL":t=F(d.Month,2,1);break;case"MMM":t=h(c.Months,f.Abbreviated);break;case"MMMM":t=h(c.Months,f.Wide);break;case"MMMMM":t=h(c.Months,f.Narrow);break;case"LLL":t=h(c.Months,f.Abbreviated,w.Standalone);break;case"LLLL":t=h(c.Months,f.Wide,w.Standalone);break;case"LLLLL":t=h(c.Months,f.Narrow,w.Standalone);break;case"w":t=oe(1);break;case"ww":t=oe(2);break;case"W":t=oe(1,!0);break;case"d":t=F(d.Date,1);break;case"dd":t=F(d.Date,2);break;case"c":case"cc":t=F(d.Day,1);break;case"ccc":t=h(c.Days,f.Abbreviated,w.Standalone);break;case"cccc":t=h(c.Days,f.Wide,w.Standalone);break;case"ccccc":t=h(c.Days,f.Narrow,w.Standalone);break;case"cccccc":t=h(c.Days,f.Short,w.Standalone);break;case"E":case"EE":case"EEE":t=h(c.Days,f.Abbreviated);break;case"EEEE":t=h(c.Days,f.Wide);break;case"EEEEE":t=h(c.Days,f.Narrow);break;case"EEEEEE":t=h(c.Days,f.Short);break;case"a":case"aa":case"aaa":t=h(c.DayPeriods,f.Abbreviated);break;case"aaaa":t=h(c.DayPeriods,f.Wide);break;case"aaaaa":t=h(c.DayPeriods,f.Narrow);break;case"b":case"bb":case"bbb":t=h(c.DayPeriods,f.Abbreviated,w.Standalone,!0);break;case"bbbb":t=h(c.DayPeriods,f.Wide,w.Standalone,!0);break;case"bbbbb":t=h(c.DayPeriods,f.Narrow,w.Standalone,!0);break;case"B":case"BB":case"BBB":t=h(c.DayPeriods,f.Abbreviated,w.Format,!0);break;case"BBBB":t=h(c.DayPeriods,f.Wide,w.Format,!0);break;case"BBBBB":t=h(c.DayPeriods,f.Narrow,w.Format,!0);break;case"h":t=F(d.Hours,1,-12);break;case"hh":t=F(d.Hours,2,-12);break;case"H":t=F(d.Hours,1);break;case"HH":t=F(d.Hours,2);break;case"m":t=F(d.Minutes,1);break;case"mm":t=F(d.Minutes,2);break;case"s":t=F(d.Seconds,1);break;case"ss":t=F(d.Seconds,2);break;case"S":t=F(d.FractionalSeconds,1);break;case"SS":t=F(d.FractionalSeconds,2);break;case"SSS":t=F(d.FractionalSeconds,3);break;case"Z":case"ZZ":case"ZZZ":t=W(B.Short);break;case"ZZZZZ":t=W(B.Extended);break;case"O":case"OO":case"OOO":case"z":case"zz":case"zzz":t=W(B.ShortGMT);break;case"OOOO":case"ZZZZ":case"zzzz":t=W(B.Long);break;default:return null}return ae[e]=t,t}function ze(e,t){e=e.replace(/:/g,"");let s=Date.parse("Jan 01, 1970 00:00:00 "+e)/6e4;return isNaN(s)?t:s}function ht(e,t){return e=new Date(e.getTime()),e.setMinutes(e.getMinutes()+t),e}function Dt(e,t,s){let n=s?-1:1,i=e.getTimezoneOffset(),r=ze(t,i);return ht(e,n*(r-i))}function gt(e){if(Ie(e))return e;if(typeof e=="number"&&!isNaN(e))return new Date(e);if(typeof e=="string"){if(e=e.trim(),/^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(e)){let[i,r=1,u=1]=e.split("-").map(o=>+o);return q(i,r-1,u)}let s=parseFloat(e);if(!isNaN(e-s))return new Date(s);let n;if(n=e.match(rt))return pt(n)}let t=new Date(e);if(!Ie(t))throw new Error(`Unable to convert "${e}" into a date`);return t}function pt(e){let t=new Date(0),s=0,n=0,i=e[8]?t.setUTCFullYear:t.setFullYear,r=e[8]?t.setUTCHours:t.setHours;e[9]&&(s=Number(e[9]+e[10]),n=Number(e[9]+e[11])),i.call(t,Number(e[1]),Number(e[2])-1,Number(e[3]));let u=Number(e[4]||0)-s,o=Number(e[5]||0)-n,l=Number(e[6]||0),D=Math.floor(parseFloat("0."+(e[7]||0))*1e3);return r.call(t,u,o,l,D),t}function Ie(e){return e instanceof Date&&!isNaN(e.valueOf())}var mt=/^(\d+)?\.((\d+)(-(\d+))?)?$/,Me=22,J=".",U="0",Ft=";",Ct=",",ce="#";function Et(e,t,s,n,i,r,u=!1){let o="",l=!1;if(!isFinite(e))o=M(s,A.Infinity);else{let D=St(e);u&&(D=yt(D));let g=t.minInt,a=t.minFrac,C=t.maxFrac;if(r){let T=r.match(mt);if(T===null)throw new Error(`${r} is not a valid digit info`);let ge=T[1],Q=T[3],pe=T[5];ge!=null&&(g=de(ge)),Q!=null&&(a=de(Q)),pe!=null?C=de(pe):Q!=null&&a>C&&(C=a)}vt(D,a,C);let p=D.digits,E=D.integerLen,k=D.exponent,L=[];for(l=p.every(T=>!T);E<g;E++)p.unshift(0);for(;E<0;E++)p.unshift(0);E>0?L=p.splice(E,p.length):(L=p,p=[0]);let z=[];for(p.length>=t.lgSize&&z.unshift(p.splice(-t.lgSize,p.length).join(""));p.length>t.gSize;)z.unshift(p.splice(-t.gSize,p.length).join(""));p.length&&z.unshift(p.join("")),o=z.join(M(s,n)),L.length&&(o+=M(s,i)+L.join("")),k&&(o+=M(s,A.Exponential)+"+"+k)}return e<0&&!l?o=t.negPre+o+t.negSuf:o=t.posPre+o+t.posSuf,o}function wt(e,t,s){let n=tt(t,Ne.Decimal),i=At(n,M(t,A.MinusSign));return Et(e,i,t,A.Group,A.Decimal,s)}function At(e,t="-"){let s={minInt:1,minFrac:0,maxFrac:0,posPre:"",posSuf:"",negPre:"",negSuf:"",gSize:0,lgSize:0},n=e.split(Ft),i=n[0],r=n[1],u=i.indexOf(J)!==-1?i.split(J):[i.substring(0,i.lastIndexOf(U)+1),i.substring(i.lastIndexOf(U)+1)],o=u[0],l=u[1]||"";s.posPre=o.substring(0,o.indexOf(ce));for(let g=0;g<l.length;g++){let a=l.charAt(g);a===U?s.minFrac=s.maxFrac=g+1:a===ce?s.maxFrac=g+1:s.posSuf+=a}let D=o.split(Ct);if(s.gSize=D[1]?D[1].length:0,s.lgSize=D[2]||D[1]?(D[2]||D[1]).length:0,r){let g=i.length-s.posPre.length-s.posSuf.length,a=r.indexOf(ce);s.negPre=r.substring(0,a).replace(/'/g,""),s.negSuf=r.slice(a+g).replace(/'/g,"")}else s.negPre=t+s.posPre,s.negSuf=s.posSuf;return s}function yt(e){if(e.digits[0]===0)return e;let t=e.digits.length-e.integerLen;return e.exponent?e.exponent+=2:(t===0?e.digits.push(0,0):t===1&&e.digits.push(0),e.integerLen+=2),e}function St(e){let t=Math.abs(e)+"",s=0,n,i,r,u,o;for((i=t.indexOf(J))>-1&&(t=t.replace(J,"")),(r=t.search(/e/i))>0?(i<0&&(i=r),i+=+t.slice(r+1),t=t.substring(0,r)):i<0&&(i=t.length),r=0;t.charAt(r)===U;r++);if(r===(o=t.length))n=[0],i=1;else{for(o--;t.charAt(o)===U;)o--;for(i-=r,n=[],u=0;r<=o;r++,u++)n[u]=Number(t.charAt(r))}return i>Me&&(n=n.splice(0,Me-1),s=i-1,i=1),{digits:n,exponent:s,integerLen:i}}function vt(e,t,s){if(t>s)throw new Error(`The minimum number of digits after fraction (${t}) is higher than the maximum (${s}).`);let n=e.digits,i=n.length-e.integerLen,r=Math.min(Math.max(t,i),s),u=r+e.integerLen,o=n[u];if(u>0){n.splice(Math.max(e.integerLen,u));for(let a=u;a<n.length;a++)n[a]=0}else{i=Math.max(0,i),e.integerLen=1,n.length=Math.max(1,u=r+1),n[0]=0;for(let a=1;a<u;a++)n[a]=0}if(o>=5)if(u-1<0){for(let a=0;a>u;a--)n.unshift(0),e.integerLen++;n.unshift(1),e.integerLen++}else n[u-1]++;for(;i<Math.max(0,r);i++)n.push(0);let l=r!==0,D=t+e.integerLen,g=n.reduceRight(function(a,C,p,E){return C=C+a,E[p]=C<10?C:C-10,l&&(E[p]===0&&p>=D?E.pop():l=!1),C>=10?1:0},0);g&&(n.unshift(g),e.integerLen++)}function de(e){let t=parseInt(e);if(isNaN(t))throw new Error("Invalid integer literal when parsing "+e);return t}function Cn(e,t){t=encodeURIComponent(t);for(let s of e.split(";")){let n=s.indexOf("="),[i,r]=n==-1?[s,""]:[s.slice(0,n),s.slice(n+1)];if(i.trim()===t)return decodeURIComponent(r)}return null}var le=/\s+/,Be=[],En=(()=>{let t=class t{constructor(n,i){this._ngEl=n,this._renderer=i,this.initialClasses=Be,this.stateMap=new Map}set klass(n){this.initialClasses=n!=null?n.trim().split(le):Be}set ngClass(n){this.rawClass=typeof n=="string"?n.trim().split(le):n}ngDoCheck(){for(let i of this.initialClasses)this._updateState(i,!0);let n=this.rawClass;if(Array.isArray(n)||n instanceof Set)for(let i of n)this._updateState(i,!0);else if(n!=null)for(let i of Object.keys(n))this._updateState(i,!!n[i]);this._applyStateDiff()}_updateState(n,i){let r=this.stateMap.get(n);r!==void 0?(r.enabled!==i&&(r.changed=!0,r.enabled=i),r.touched=!0):this.stateMap.set(n,{enabled:i,changed:!0,touched:!0})}_applyStateDiff(){for(let n of this.stateMap){let i=n[0],r=n[1];r.changed?(this._toggleClass(i,r.enabled),r.changed=!1):r.touched||(r.enabled&&this._toggleClass(i,!1),this.stateMap.delete(i)),r.touched=!1}}_toggleClass(n,i){n=n.trim(),n.length>0&&n.split(le).forEach(r=>{i?this._renderer.addClass(this._ngEl.nativeElement,r):this._renderer.removeClass(this._ngEl.nativeElement,r)})}};t.\u0275fac=function(i){return new(i||t)(y(te),y(ne))},t.\u0275dir=$({type:t,selectors:[["","ngClass",""]],inputs:{klass:[Ee.None,"class","klass"],ngClass:"ngClass"},standalone:!0});let e=t;return e})();var fe=class{constructor(t,s,n,i){this.$implicit=t,this.ngForOf=s,this.index=n,this.count=i}get first(){return this.index===0}get last(){return this.index===this.count-1}get even(){return this.index%2===0}get odd(){return!this.even}},wn=(()=>{let t=class t{set ngForOf(n){this._ngForOf=n,this._ngForOfDirty=!0}set ngForTrackBy(n){this._trackByFn=n}get ngForTrackBy(){return this._trackByFn}constructor(n,i,r){this._viewContainer=n,this._template=i,this._differs=r,this._ngForOf=null,this._ngForOfDirty=!0,this._differ=null}set ngForTemplate(n){n&&(this._template=n)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;let n=this._ngForOf;if(!this._differ&&n)if(0)try{}catch{}else this._differ=this._differs.find(n).create(this.ngForTrackBy)}if(this._differ){let n=this._differ.diff(this._ngForOf);n&&this._applyChanges(n)}}_applyChanges(n){let i=this._viewContainer;n.forEachOperation((r,u,o)=>{if(r.previousIndex==null)i.createEmbeddedView(this._template,new fe(r.item,this._ngForOf,-1,-1),o===null?void 0:o);else if(o==null)i.remove(u===null?void 0:u);else if(u!==null){let l=i.get(u);i.move(l,o),Le(l,r)}});for(let r=0,u=i.length;r<u;r++){let l=i.get(r).context;l.index=r,l.count=u,l.ngForOf=this._ngForOf}n.forEachIdentityChange(r=>{let u=i.get(r.currentIndex);Le(u,r)})}static ngTemplateContextGuard(n,i){return!0}};t.\u0275fac=function(i){return new(i||t)(y(j),y(ie),y(ye))},t.\u0275dir=$({type:t,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"},standalone:!0});let e=t;return e})();function Le(e,t){e.context.$implicit=t.item}var An=(()=>{let t=class t{constructor(n,i){this._viewContainer=n,this._context=new he,this._thenTemplateRef=null,this._elseTemplateRef=null,this._thenViewRef=null,this._elseViewRef=null,this._thenTemplateRef=i}set ngIf(n){this._context.$implicit=this._context.ngIf=n,this._updateView()}set ngIfThen(n){Oe("ngIfThen",n),this._thenTemplateRef=n,this._thenViewRef=null,this._updateView()}set ngIfElse(n){Oe("ngIfElse",n),this._elseTemplateRef=n,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngTemplateContextGuard(n,i){return!0}};t.\u0275fac=function(i){return new(i||t)(y(j),y(ie))},t.\u0275dir=$({type:t,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"},standalone:!0});let e=t;return e})(),he=class{constructor(){this.$implicit=null,this.ngIf=null}};function Oe(e,t){if(!!!(!t||t.createEmbeddedView))throw new Error(`${e} must be a TemplateRef, but received '${Fe(t)}'.`)}var yn=(()=>{let t=class t{constructor(n){this._viewContainerRef=n,this._viewRef=null,this.ngTemplateOutletContext=null,this.ngTemplateOutlet=null,this.ngTemplateOutletInjector=null}ngOnChanges(n){if(this._shouldRecreateView(n)){let i=this._viewContainerRef;if(this._viewRef&&i.remove(i.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let r=this._createContextForwardProxy();this._viewRef=i.createEmbeddedView(this.ngTemplateOutlet,r,{injector:this.ngTemplateOutletInjector??void 0})}}_shouldRecreateView(n){return!!n.ngTemplateOutlet||!!n.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(n,i,r)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,i,r):!1,get:(n,i,r)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,i,r)}})}};t.\u0275fac=function(i){return new(i||t)(y(j))},t.\u0275dir=$({type:t,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},standalone:!0,features:[Ae]});let e=t;return e})();function je(e,t){return new me(2100,!1)}var bt="mediumDate",_t=new x(""),It=new x(""),Sn=(()=>{let t=class t{constructor(n,i,r){this.locale=n,this.defaultTimezone=i,this.defaultOptions=r}transform(n,i,r,u){if(n==null||n===""||n!==n)return null;try{let o=i??this.defaultOptions?.dateFormat??bt,l=r??this.defaultOptions?.timezone??this.defaultTimezone??void 0;return ut(n,o,u||this.locale,l)}catch(o){throw je(t,o.message)}}};t.\u0275fac=function(i){return new(i||t)(y(re,16),y(_t,24),y(It,24))},t.\u0275pipe=ee({name:"date",type:t,pure:!0,standalone:!0});let e=t;return e})();var vn=(()=>{let t=class t{constructor(n){this._locale=n}transform(n,i,r){if(!Mt(n))return null;r||=this._locale;try{let u=Bt(n);return wt(u,r,i)}catch(u){throw je(t,u.message)}}};t.\u0275fac=function(i){return new(i||t)(y(re,16))},t.\u0275pipe=ee({name:"number",type:t,pure:!0,standalone:!0});let e=t;return e})();function Mt(e){return!(e==null||e===""||e!==e)}function Bt(e){if(typeof e=="string"&&!isNaN(Number(e)-parseFloat(e)))return Number(e);if(typeof e!="number")throw new Error(`${e} is not a number`);return e}var bn=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=we({type:t}),t.\u0275inj=Ce({});let e=t;return e})(),_n="browser",Lt="server";function In(e){return e===Lt}var Re=class{};export{se as a,Fn as b,ve as c,Pe as d,De as e,Ye as f,Cn as g,En as h,wn as i,An as j,yn as k,Sn as l,vn as m,bn as n,_n as o,In as p,Re as q};
