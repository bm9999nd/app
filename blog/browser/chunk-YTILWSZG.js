import{a as w,b}from"./chunk-JEFSQTYG.js";import{a as S}from"./chunk-FCDS75D4.js";import"./chunk-2JTN6QI3.js";import{$a as k,Fa as s,Ja as v,Ka as _,La as C,Ma as E,Na as x,Oa as e,Pa as t,Qa as l,U as h,Va as u,Wa as y,_a as r,cb as P,fb as T,oa as f,va as a,wa as g}from"./chunk-LDKPHXX6.js";import"./chunk-5FZOKLP6.js";function U(n,o){if(n&1&&(e(0,"div",1)(1,"div"),r(2),t(),e(3,"div",12)(4,"b"),r(5),t()()()),n&2){let m=o.$implicit;a(2),k(m.key),a(3),k(m.value)}}function I(n,o){n&1&&r(0,"Ganti Gambar Profil")}function L(n,o){n&1&&r(0,"Setup Profil")}function M(n,o){if(n&1&&(e(0,"div",13),l(1,"img",14),t(),e(2,"div",15)(3,"button",16),l(4,"i",17),t(),l(5,"input",18),e(6,"button",19),l(7,"i",20),t(),e(8,"button",21),l(9,"i",11),t()()),n&2){let m=y();a(),s("src",m.user.img,f),a(4),s("value",m.user.img)}}function N(n,o){if(n&1&&(e(0,"div",1)(1,"div"),r(2,"Nama"),t(),l(3,"input",22),t(),e(4,"div",1)(5,"div"),r(6,"Email"),t(),l(7,"input",23),t(),e(8,"div",1)(9,"div"),r(10,"Link"),t(),l(11,"input",24),t()),n&2){let m=y();a(3),s("value",m.user.name),a(4),s("value",m.user.email),a(4),s("value",m.user.link)}}var z=(()=>{let o=class o{constructor(d){this.modal=d,this.modalSet="img"}ngOnInit(){this.reset()}reset(){let d=new w;this.user=d.user}save(){alert("Module penyimpanan data belum dibuat!"),this.modal.close()}userAsList(){let d=[],c=this.user,i={name:"Nama profil/toko anda",email:"Email yang akan digunakan",link:"Alamat URL anda"};for(let p in c)Object.keys(i).includes(p)&&d.push({key:i[p],value:c[p]});return d}};o.\u0275fac=function(c){return new(c||o)(g(b))},o.\u0275cmp=h({type:o,selectors:[["linker-profile"]],standalone:!0,features:[P([{provide:b},{provide:S}]),T],decls:26,vars:4,consts:[[1,"container"],[1,"mb-3"],[1,"img-thumbnail",3,"src","alt"],["type","button",1,"btn","btn-primary","w-100",3,"click"],[1,"text-end"],["type","button",1,"btn","btn-primary",3,"click"],[1,"h3","text-center"],[1,"d-flex","justify-content-around"],["type","button",1,"btn","btn-danger","rounded-circle",3,"click"],[1,"bi","bi-x"],["type","button",1,"btn","btn-success","rounded-circle",3,"click"],[1,"bi","bi-check"],[1,"ps-3"],[1,"text-center"],["alt","",1,"img-thumbnail",3,"src"],[1,"input-group"],["type","button","onclick","$(this).next().val('')",1,"btn","btn-secondary"],[1,"bi","bi-eraser-fill"],["type","url","name","img","placeholder","alamat gambar",1,"form-control",3,"value"],["type","button",1,"btn","btn-light"],[1,"bi","bi-arrow-counterclockwise"],["type","button",1,"btn","btn-primary"],["type","text","placeholder","Nama user/toko",1,"form-control",3,"value"],["type","email","placeholder","Nama user/toko",1,"form-control",3,"value"],["type","url","placeholder","Nama user/toko",1,"form-control",3,"value"],["class","mb-3"]],template:function(c,i){c&1&&(e(0,"div",0),l(1,"app-ads"),e(2,"div",1),l(3,"img",2),e(4,"button",3),u("click",function(){return i.modalSet="img",i.modal.show()}),r(5," Ubah URL Gambar "),t()(),l(6,"app-ads"),e(7,"div",1),E(8,U,6,2,"div",25,C),e(10,"div",4)(11,"button",5),u("click",function(){return i.modalSet="profil",i.modal.show()}),r(12," Ubah Data Profil "),t()()()(),e(13,"app-modal")(14,"div",6),v(15,I,1,0)(16,L,1,0),l(17,"hr"),t(),v(18,M,10,2)(19,N,12,3),l(20,"hr"),e(21,"div",7)(22,"button",8),u("click",function(){return i.reset(),i.modal.close()}),l(23,"i",9),t(),e(24,"button",10),u("click",function(){return i.save()}),l(25,"i",11),t()()()),c&2&&(a(3),s("src",i.user.img,f)("alt",i.user.name),a(5),x(i.userAsList()),a(7),_(15,i.modalSet=="img"?15:i.modalSet=="profil"?16:-1),a(3),_(18,i.modalSet=="img"?18:i.modalSet=="profil"?19:-1))},dependencies:[b,S]});let n=o;return n})();export{z as ProfileComponent};
