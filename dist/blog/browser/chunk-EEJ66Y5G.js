import{a as I}from"./chunk-VAAKN2R4.js";import{a as q,b as N,c as O,e as U}from"./chunk-52OEK4LQ.js";import{h as L,k as F}from"./chunk-J7HNJTM4.js";import{$ as u,Ca as d,Fa as y,Ga as x,Ha as M,Ia as w,Ja as T,Ka as o,La as r,Ma as h,Na as f,Ra as s,Sa as p,Ta as m,Va as v,W as E,Za as V,_a as k,aa as _,oa as b,ua as l,va as S}from"./chunk-PCLTPDKT.js";function j(c,g){if(c&1){let t=f();o(0,"button",25),s("click",function(){u(t);let n=p();return _(n.setForm(!0,{},"new"))}),h(1,"i",26),r()}}var B=c=>({"text-muted fst-italic":c});function A(c,g){if(c&1){let t=f();o(0,"div",27)(1,"div",28)(2,"img",29),s("click",function(){u(t);let n=p();return _(n.focus=null)}),r(),o(3,"img",30),s("click",function(){let e=u(t).$implicit,a=p();return _(a.focus=e)}),r()(),o(4,"a",31),m(5),r(),o(6,"div",32)(7,"button",33),s("click",function(){let e=u(t).$implicit,a=p();return _(a.setForm(!0,e,"editor"))}),h(8,"i",34),r(),o(9,"button",35),s("click",function(){let e=u(t).$implicit,a=p();return _(a.setForm(!0,e,"delete"))}),h(10,"i",36),r()()()}if(c&2){let t=g.$implicit,i=p();l(2),d("alt",t.title)("src",t.img,b)("hidden",i.focus!=t),l(),d("alt",t.title)("src",t.img,b),l(),d("href",t.url,b)("ngClass",k(9,B,t.title==null||t.title=="")),l(),v(" ",t.title==null||t.title==""?"Belum ada judul...":t.title," "),l(),d("hidden",!i.onEdit)}}function Q(c,g){if(c&1){let t=f();o(0,"div",5)(1,"div",12)(2,"div"),m(3,"Url/Link"),r(),o(4,"input",37),s("ngModelChange",function(n){u(t);let e=p();return _(e.selected.url=n)})("ngChange",function(){u(t);let n=p();return _(n.urlTarget(n.selected))}),r()(),o(5,"div",12)(6,"div"),m(7,"Title"),r(),o(8,"input",38),s("ngModelChange",function(n){u(t);let e=p();return _(e.selected.title=n)}),r()(),o(9,"div",12)(10,"div"),m(11,"Image"),r(),o(12,"div",7)(13,"div"),m(14,"Upload"),r(),o(15,"input",39),s("ngModelChange",function(n){u(t);let e=p();return _(e.selected.img=n)}),r()(),o(16,"div",7)(17,"div"),m(18,"Atau url"),r(),o(19,"input",38),s("ngModelChange",function(n){u(t);let e=p();return _(e.selected.img=n)}),r()()(),o(20,"div",40),h(21,"img",41),r()(),o(22,"div",5)(23,"div",40),m(24),r()()}if(c&2){let t=p();d("hidden",t.cmd=="delete"),l(4),d("ngModel",t.selected.url),l(4),d("ngModel",t.selected.title),l(7),d("ngModel",t.selected.img),l(4),d("ngModel",t.selected.img),l(2),d("src",t.selected.img,b),l(),d("hidden",t.cmd!="delete"),l(2),v(' Yakin ingin menghapus data "',t.selected.title,'"? ')}}var H=c=>({active:c}),G=(()=>{let g=class g{constructor(i){this.http=i,this.selected=null,this.focus=null,this.cmd=null,this.search="",this.onEdit=!1}ngOnInit(){this.profile={id:1,name:"LinKita",img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjq6HoI0ZBQNOoUNqFc49j7pCX07iLh9lj_YGt1fiNl43v3CqRlkaz0wMaBGQaLDyFdr5OODuOCMhZ2PgB1m8jRPjfamF_5ke-zVTJhKKIiFokJx6TCZsYITzj06wa-DQPoWbhZeh-Dm-_QQHhx-FksgSbQSvU9zHasvvjJaHPykdEzmnw/s1600/images%3Fq=tbn:ANd9GcS-lx1OsbyiybQY4sXMpX6d1mG17TY0SsQxOg&usqp=CAU"},this.data=[{id:1,url:"https://shope.ee/40Hfnm1V42"},{id:2,url:"https://shope.ee/6zvHOq8Uqo"},{id:3,url:"https://shope.ee/3VLQBYrynV"},{id:4,url:"https://shope.ee/B4yNJYdTe"},{id:5,url:"https://shope.ee/7AEikAbZ7B"}],this.data.forEach(i=>{this.urlTarget(i)}),document.querySelector(".container.visually-hidden")?.classList.remove("visually-hidden")}openForm(i=!1){let n=document.querySelector(".modal"),e=new bootstrap.Modal(n,{keyboard:!1});i?e.show():e.hide();let a=document.querySelector("#overlay"),C=document.querySelector(".modal-backdrop");a.appendChild(C)}urlTarget(i){if(i.img!=null&&i.img!="")return;console.log("load url"),this.http.get(i.url,{}).subscribe(e=>{n(e.data)});function n(e){let a=document.createElement(e),C=a.querySelector(".IMAW1w")?.getAttribute("src"),z=a.querySelector(".Bf9ap6")?.innerHTML;i.img==""&&(i.img=C),i.title.replace(/\s/gm,"")==""&&(i.title=z)}}setForm(i=!1,n,e){this.orig=JSON.parse(JSON.stringify(this.data)),e=="new"&&(n={title:"",img:"",url:""}),this.selected=n,this.cmd=e,this.openForm(i)}delItem(){let i=this.data.findIndex(n=>n.id==this.selected.id);this.data.splice(i,1)}saveChanges(){let i=this.data.findIndex(n=>n.id==this.selected.id);this.cmd=="new"&&this.data.push(this.selected)}reset(){this.data=JSON.parse(JSON.stringify(this.orig))}};g.\u0275fac=function(n){return new(n||g)(S(I))},g.\u0275cmp=E({type:g,selectors:[["app-link-creator"]],standalone:!0,features:[V],decls:38,vars:15,consts:[[1,"container","rounded","bg-warning-subtle","p-3","border","border-secondary-subtle","visually-hidden"],[1,"text-center"],[1,"mb-3","d-block"],["type","button",1,"btn","btn-outline-dark",3,"ngClass","click"],[1,"bi","bi-pencil-square"],[3,"hidden"],["alt","","width","auto","height","200px",1,"rounded-circle","border","shadow",3,"src"],[1,"d-block"],[1,"display-1",3,"hidden"],[1,"mt-3","text-center",3,"hidden"],["type","text","placeholder","User Initial",1,"form-control",2,"text-align","center",3,"ngModel","ngModelChange"],[1,"d-grid","justify-content-center"],[1,"mb-3"],[1,"input-group"],["type","search","placeholder","cari link disini...",1,"form-control",3,"ngModel","ngModelChange"],["type","button","class","btn btn-primary"],["data-bs-keyboard","false","tabindex","-1","aria-labelledby","staticBackdropLabel","aria-hidden","true",1,"modal","fade"],[1,"modal-dialog","modal-dialog-centered","modal-dialog-scrollable"],[1,"modal-content","bg-dark-subtle"],[1,"modal-body"],[1,"modal-footer"],["type","button","data-bs-dismiss","modal",1,"btn","btn-secondary",3,"click"],["type","button","data-bs-dismiss","modal",1,"btn","btn-primary",3,"hidden","click"],["type","button","data-bs-dismiss","modal",1,"btn","btn-danger",3,"hidden","click"],["id","overlay"],["type","button",1,"btn","btn-primary",3,"click"],[1,"bi","bi-plus"],[1,"d-flex","align-items-center","mb-3"],[1,"h-100","border","rounded"],["height","200","width","200",1,"rounded","position-absolute",3,"alt","src","hidden","click"],["height","50","width","50",1,"rounded",2,"cursor","all-scroll",3,"alt","src","click"],["target","_blank",1,"text-body","border-bottom","flex-fill","px-2","ms-2",3,"href","ngClass"],[1,"btn-group","h-100",3,"hidden"],["type","button",1,"btn","btn-secondary",3,"click"],[1,"bi","bi-pencil-fill"],["type","button",1,"btn","btn-danger",3,"click"],[1,"bi","bi-eraser-fill"],["type","text",1,"form-control",3,"ngModel","ngModelChange","ngChange"],["type","text",1,"form-control",3,"ngModel","ngModelChange"],["type","file",1,"form-control",3,"ngModel","ngModelChange"],[1,"d-block","text-center"],["alt","","width","100","height","100",1,"rounded",3,"src"],["class","d-flex align-items-center mb-3"]],template:function(n,e){n&1&&(o(0,"div",0)(1,"div",1)(2,"div",2)(3,"button",3),s("click",function(){return e.onEdit=!e.onEdit}),h(4,"i",4),o(5,"span",5),m(6,"Preview"),r(),o(7,"span",5),m(8,"Editor"),r()()(),o(9,"div"),h(10,"img",6),r(),o(11,"div",7)(12,"div",8),m(13),r(),o(14,"div",9)(15,"input",10),s("ngModelChange",function(C){return e.profile.name=C}),r()()()(),h(16,"hr")(17,"br"),o(18,"div",11)(19,"div",12)(20,"div",13)(21,"input",14),s("ngModelChange",function(C){return e.search=C}),r(),y(22,j,2,0,"button",15),r()(),w(23,A,11,11,"div",42,M),r(),o(25,"div",16)(26,"div",17)(27,"div",18)(28,"div",19),y(29,Q,25,8),r(),o(30,"div",20)(31,"button",21),s("click",function(){return e.reset()}),m(32,"Cancel"),r(),o(33,"button",22),s("click",function(){return e.saveChanges()}),m(34," Save changes "),r(),o(35,"button",23),s("click",function(){return e.delItem()}),m(36," Remove "),r()()()()(),h(37,"div",24),r()),n&2&&(l(3),d("ngClass",k(13,H,e.onEdit)),l(2),d("hidden",!e.onEdit),l(2),d("hidden",e.onEdit),l(3),d("src",e.profile.img,b),l(2),d("hidden",e.onEdit),l(),v(" ",e.profile.name==""?"...":e.profile.name," "),l(),d("hidden",!e.onEdit),l(),d("ngModel",e.profile.name),l(6),d("ngModel",e.search),l(),x(22,e.onEdit?22:-1),l(),T(e.data),l(6),x(29,e.selected!=null?29:-1),l(4),d("hidden",e.cmd=="delete"),l(2),d("hidden",e.cmd!="delete"))},dependencies:[F,L,U,q,N,O]});let c=g;return c})();export{G as LinkCreatorComponent};
