import{b as D,d as E}from"./chunk-F7RQ6ZN3.js";import"./chunk-Q5CIWBNO.js";import{a as l}from"./chunk-FCDS75D4.js";import{k as y,q as k}from"./chunk-2JTN6QI3.js";import{Fa as d,Ja as v,Ka as C,Oa as a,Pa as p,Qa as _,U as u,Va as m,_a as s,ab as b,cb as g,fb as h,gb as A,ib as x,va as r,wa as f}from"./chunk-LDKPHXX6.js";import"./chunk-5FZOKLP6.js";function T(t,e){t&1&&s(0,"Mode: Gratis")}function w(t,e){t&1&&s(0,"Mode: \u{1F4B0}\u{1F911}")}var F=()=>["/"],M=(t,e)=>({"fw-semibold text-bg-info":t,"fst-italic text-muted":e}),G=(()=>{let e=class e{constructor(n){this.ads=n}onActivate(n){setTimeout(()=>{this.openApp=n.title},50)}setPaid(n){let o=$(n.target)[0].checked;this.ads.set(o)}};e.\u0275fac=function(o){return new(o||e)(f(l))},e.\u0275cmp=u({type:e,selectors:[["app-container"]],standalone:!0,features:[g([{provide:l}]),h],decls:12,vars:9,consts:[[1,"d-flex","align-items-center","justify-content-between"],[1,"px-0"],["type","button",1,"btn","border-0","rounded-0","hover-light",3,"routerLink"],[1,"bi","bi-arrow-left"],[1,"fw-bold","text-uppercase","text-center"],[1,"text-end","px-0"],["id","paid","type","checkbox","autocomplete","off",1,"btn-check",3,"checked","input"],["for","paid",1,"btn","hover-light","border-0","rounded-0",3,"ngClass"],[3,"activate"]],template:function(o,i){o&1&&(a(0,"nav",0)(1,"div",1)(2,"a",2),_(3,"i",3),p()(),a(4,"div",4),s(5),p(),a(6,"div",5)(7,"input",6),m("input",function(c){return i.setPaid(c)}),p(),a(8,"label",7),v(9,T,1,0)(10,w,1,0),p()()(),a(11,"router-outlet",8),m("activate",function(c){return i.onActivate(c)}),p()),o&2&&(r(2),d("routerLink",A(5,F)),r(3),b(" App : ",i.openApp," "),r(2),d("checked",i.ads.get()),r(),d("ngClass",x(6,M,i.ads.get(),!i.ads.get())),r(),C(9,i.ads.get()?10:9))},dependencies:[D,E,k,y]});let t=e;return t})();export{G as AppContainerComponent};
