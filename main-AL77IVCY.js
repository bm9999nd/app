import{a as re,b as le,e as me,h as se,m as ce}from"./chunk-4DTLLVVD.js";import{a as K,b as ee,c as te,d as ie,e as ne,f as oe,g as ae}from"./chunk-WTUGVIOV.js";import{b as Z}from"./chunk-YPCO5MT4.js";import{a as N}from"./chunk-PZ6PCNJP.js";import{h as H,i as Y,j as T,o as M}from"./chunk-RPMCEQCV.js";import{$ as y,Ca as u,Ea as c,Ga as J,Ia as E,Na as o,Oa as a,Pa as p,Qa as g,Ra as h,Ta as A,V as x,Xa as _,Ya as d,Za as X,_ as w,_a as G,cb as m,eb as f,gb as O,jb as S,kb as Q,lb as P,mb as I,na as C,pa as W,ua as l,va as b,xa as z}from"./chunk-AXPMFD2G.js";import"./chunk-5FZOKLP6.js";function _e(e,n){if(e&1&&(g(0),o(1,"div")(2,"div"),G(3),a()(),h()),e&2){let i=d();l(),J(i.setStyle()),E("w-100 ",i.classBlock,""),l(),E("p-5 ",i.classContent,"")}}var ve=["*"],D=(()=>{let n=class n{constructor(){this.lib={type:L,bgRepeat:U,bgPos:B,bgSize:V,bgClip:R},this.type=L.title,this.imgRepeat=U.repeat,this.imgPos=B.center,this.imgSize=V.auto,this.imgClip=R.unset}setStyle(){return{"background-image":this.imgUrl==null?"none":`url(${this.imgUrl})`,"background-repeat":this.imgRepeat,"background-position":this.imgPos,"background-size":this.imgSize,"background-clip":this.imgClip,"background-color":"white"}}};n.\u0275fac=function(r){return new(r||n)},n.\u0275cmp=x({type:n,selectors:[["app-block"]],inputs:{type:"type",imgUrl:"imgUrl",imgRepeat:"imgRepeat",imgPos:"imgPos",imgSize:"imgSize",imgClip:"imgClip",classBlock:"classBlock",classContent:"classContent"},standalone:!0,features:[S],ngContentSelectors:ve,decls:1,vars:1,consts:[[4,"ngIf"]],template:function(r,s){r&1&&(X(),u(0,_e,4,8,"ng-container",0)),r&2&&c("ngIf",s.type=="title")},dependencies:[M,T]});let e=n;return e})(),L=function(e){return e.title="title",e}(L||{}),U=function(e){return e.round="round",e.none="none",e.norepeat="no-repeat",e.repeat="repeat",e.repeatX="repeat-x",e.repeatY="repeat-y",e.space="space",e}(U||{}),B=function(e){return e.bottom="bottom",e.center="center",e.left="left",e.right="right",e.top="top",e}(B||{}),V=function(e){return e.auto="auto",e.contain="contain",e.cover="cover",e}(V||{}),R=function(e){return e.borderBox="border-box",e.contentBox="content-box",e.paddingBox="padding-box",e.unset="unset",e}(R||{});function we(e,n){e&1&&(g(0),m(1," Mode: Free "),h())}function ye(e,n){e&1&&(g(0),m(1," Mode: \u{1F4B0}\u{1F911} "),h())}var Ce=()=>["/"],Se=(e,n)=>({"bi-sun-fill":e,"bi-moon-fill":n}),ke=(e,n)=>({"fw-semibold bg-success":e,"fst-italic text-muted":n});function Ee(e,n){if(e&1){let i=A();g(0),o(1,"nav",1)(2,"div",2)(3,"a",3),p(4,"i",4),a(),o(5,"button",5),_("click",function(r){w(i);let s=d();return y(s.toggleTheme.emit(r))}),p(6,"i",6),a()(),o(7,"div",7),m(8),a(),o(9,"div",8)(10,"input",9),_("input",function(r){w(i);let s=d();return y(s.setPaid(r))}),a(),o(11,"label",10),u(12,we,2,0,"ng-container",0)(13,ye,2,0,"ng-container",0),a()()(),h()}if(e&2){let i=d();l(3),c("routerLink",Q(7,Ce)),l(3),c("ngClass",I(8,Se,i.theme=="light",i.theme=="dark")),l(2),f(" ",i.title," "),l(2),c("checked",i.ads.get()),l(),c("ngClass",I(11,ke,i.ads.get(),!i.ads.get())),l(),c("ngIf",!i.ads.get()),l(),c("ngIf",i.ads.get())}}var v=(()=>{let n=class n{constructor(t){this.ads=t,this.toggleTheme=new z}setPaid(t){let r=$(t.target)[0].checked;this.ads.set(r)}};n.\u0275fac=function(r){return new(r||n)(b(N))},n.\u0275cmp=x({type:n,selectors:[["bundle-nav"]],inputs:{title:"title",theme:"theme"},outputs:{toggleTheme:"toggleTheme"},standalone:!0,features:[S],decls:1,vars:1,consts:[[4,"ngIf"],[1,"d-flex","align-items-center","justify-content-between","bg-gradient"],[1,"px-0"],["type","button",1,"btn","btn-lg","border-0","rounded-0","py-0",3,"routerLink"],[1,"bi","bi-house-door-fill"],["type","button",1,"btn","btn-lg","border-0","rounded-0","py-0","blink-2s",3,"click"],[1,"bi",3,"ngClass"],[1,"fw-bold","text-uppercase","text-center"],[1,"text-end","px-0"],["id","paid","type","checkbox","autocomplete","off",1,"btn-check",3,"checked","input"],["for","paid",1,"btn","hover-light","border-0","rounded-0",3,"ngClass"]],template:function(r,s){r&1&&u(0,Ee,14,14,"ng-container",0),r&2&&c("ngIf",s.title!=null&&s.title!="")},dependencies:[ie,M,H,T]});let e=n;return e})();function Ie(e,n){if(e&1){let i=A();g(0),o(1,"input",28),_("ngModelChange",function(r){w(i);let s=d();return y(s.view=r)})("change",function(){w(i);let r=d();return y(r.saveData())}),a(),o(2,"label",29),p(3,"i"),a(),h()}if(e&2){let i=n.$implicit,t=d();l(),c("id",i.name)("value",i)("ngModel",t.view),l(),c("for",i.name),l(),E("bi ",i.icon,"")}}function Te(e,n){if(e&1&&(g(0),o(1,"div",37),p(2,"img",38),a(),o(3,"div",39),m(4),a(),h()),e&2){let i=d().$implicit;l(2),c("src",i.img,C),l(2),f(" ",i.title," ")}}var Me=e=>({"text-truncate":e});function Ae(e,n){if(e&1&&(g(0),o(1,"div",43),m(2),a(),h()),e&2){let i=d(2).$implicit;l(),c("ngClass",P(2,Me,!i.expand)),l(),f(" ",i.info," ")}}function De(e,n){if(e&1){let i=A();g(0),o(1,"div",40),_("mouseenter",function(){w(i);let r=d().$implicit;return y(r.expand=!0)})("mouseout",function(){w(i);let r=d().$implicit;return y(r.expand=!1)}),p(2,"img",41),o(3,"div",42),m(4),a(),u(5,Ae,3,4,"ng-container",35),a(),h()}if(e&2){let i=d().$implicit;l(2),c("src",i.img,C),l(2),f(" ",i.title," "),l(),c("ngIf",i.info!="")}}function je(e,n){e&1&&p(0,"hr",44)}var Fe=e=>({"disabled fst-italic opacity-50":e});function Oe(e,n){if(e&1&&(g(0),o(1,"div",33)(2,"a",34),u(3,Te,5,2,"ng-container",35)(4,De,6,3,"ng-container",35),a(),u(5,je,1,0,"hr",36),a(),h()),e&2){let i=n.$implicit,t=d(2);l(2),c("href",i.ext==null?"/"+i.url:i.ext,C)("ngClass",P(5,Fe,i.disabled)),l(),c("ngIf",t.view.name=="list"),l(),c("ngIf",t.view.name=="card"),l(),c("ngIf",t.view.name=="card")}}var Pe=(e,n)=>({"row mx-0 justify-content-evenly":e,"d-block":n});function He(e,n){if(e&1&&(g(0),o(1,"div",30)(2,"h3",31),m(3),a(),o(4,"div",32),u(5,Oe,6,7,"ng-container",14),a()(),h()),e&2){let i=n.$implicit,t=d();l(3),f(" ",i.title," "),l(),c("ngClass",I(3,Pe,t.view.name=="list",t.view.name=="card")),l(),c("ngForOf",i.items)}}function Ne(e,n){if(e&1&&(g(0),o(1,"a",45),p(2,"img",46),m(3),a(),h()),e&2){let i=n.$implicit;l(),c("href",i.url,C),l(),c("src",i.img,C),l(),f(" ",i.name," ")}}var Le=e=>({"disabled fst-italic":e});function Ue(e,n){if(e&1&&(g(0),o(1,"a",47),p(2,"img",48),m(3),o(4,"span"),m(5),a()(),h()),e&2){let i=n.$implicit;l(),c("href",i.url,C)("ngClass",P(5,Le,i.url==null)),l(),c("src",i.img,C),l(),f(" ",i.title," "),l(2),f("(",i.as,")")}}var Be=(e,n)=>({"bg-success":e,"bg-secondary":n}),j=function(e){return e.blue="bg-gradient text-light bg-primary",e.blue25="bg-gradient text-light bg-primary bg-opacity-25",e.blue50="bg-gradient text-light bg-primary bg-opacity-50",e.blue75="bg-gradient text-light bg-primary bg-opacity-75",e.green="bg-gradient text-light bg-success",e.green25="bg-gradient text-light bg-success bg-opacity-25",e.green50="bg-gradient text-light bg-success bg-opacity-50",e.green75="bg-gradient text-light bg-success bg-opacity-75",e.dark25="bg-gradient text-light bg-dark bg-opacity-25",e.dark50="bg-gradient text-light bg-dark bg-opacity-50",e.dark75="bg-gradient text-light bg-dark bg-opacity-75",e}(j||{});var ge=(()=>{let n=class n{constructor(t,r,s){this.router=t,this.tag=r,this.nav=s,this.items=[],this.images={darkSpark:"https://st4.depositphotos.com/1741969/29457/i/450/depositphotos_294571810-stock-photo-blackground-of-abstract-glitter-lights.jpg",abstractBlue:"https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm0yMjItbWluZC0xNl8xLmpwZw.jpg",unsplashBlue:"https://media.istockphoto.com/id/1169630303/photo/blue-textured-background.webp?b=1&s=170667a&w=0&k=20&c=tI2xFhXqXFqMM0IvxSYY3F7LIwv450h2ch3yD-lZ9HU=",gate:"https://cdn.pixabay.com/photo/2018/08/31/18/21/fantasy-3645269_640.jpg"},this.themes={darkblue:{img:this.images.unsplashBlue,title:j.blue25,desc:j.dark25},gate:{img:this.images.gate,title:j.green50,desc:j.blue25}},this.theme=this.themes.darkblue,this.profiles=[{title:"bm9999nd@gmail.com",url:"mailto: bm9999nd@gmail.com",icon:"bi-google text-danger",img:"https://img.favpng.com/21/2/1/gmail-google-logo-email-computer-icons-png-favpng-WGUQeg40tUKsubAALzrr3WP47.jpg",as:"email"},{title:"bm9999nd",url:"https://www.github.com/bm9999nd",icon:"bi-github text-dark",img:"https://th.bing.com/th?id=ODLS.05409d17-5d83-4701-acc1-90430dd3b02c&w=32&h=32&qlt=90&pcl=1b1a19&o=6&pid=1.2",as:"github"},{title:"Not specified yet!",url:null,icon:"bi-facebook text-primary",img:"https://themayanagari.com/wp-content/uploads/2020/09/Facebook-Logo-Png-Image-Free-Download-4.jpg",as:"facebook"},{title:"Not specified yet!",url:null,icon:"bi-twitter text-info",img:"https://cdn1.iconfinder.com/data/icons/somacro___dpi_social_media_icons_by_vervex-dfjq/500/twitter.png",as:"twitter"}],this.appUsed=[{name:"AutoCAD",url:"https://www.autodesk.com/products/autocad/overview",img:"https://logospng.org/download/autocad/logo-autocad-icone-512.png"},{name:"SketchUp",url:"https://www.sketchup.com/",img:"https://th.bing.com/th/id/OIP.Qt19eYbnWDOE0aPO4aq00gHaHa?pid=ImgDetMain"},{name:"3ds Max",url:"https://www.autodesk.com/products/3ds-max/overview",img:"https://smallimg.pngkey.com/png/small/136-1364732_3dsmax-logo-3d-max-icon-png.png"},{name:"Blender",url:"https://www.blender.org/",img:"https://www.pinclipart.com/picdir/middle/191-1916355_blender-logo-transparent-background-clipart.png"},{name:"Photoshop",url:"https://www.adobe.com/id_id/products/photoshop/online.html",img:"https://th.bing.com/th/id/OIP.OpXtSJT34goTjYEulArbvAAAAA?pid=ImgDetMain"},{name:"MySQL",url:"https://www.mysql.com/",img:"https://www.kindpng.com/picc/m/282-2827422_mysql-logo-png-mysql-png-transparent-png.png"},{name:"Access",url:"https://www.microsoft.com/id-id/microsoft-365/access",img:"https://pluspng.com/img-png/microsoft-access-logo-png-microsoft-access-icon-free-img-as-png-and-ico-microsoft-840x592.jpg"},{name:"Excel",url:"https://www.microsoft.com/en-us/microsoft-365/excel",img:"https://th.bing.com/th/id/OIP.2uEmL7TknMdg3xiSXY1mHwHaEv?pid=ImgDetMain"},{name:"Sheets",url:"https://www.google.com/sheets/about/",img:"https://th.bing.com/th/id/OIP.GtAVDgkGdR5iEF6HmtUsygHaE7?pid=ImgDetMain"},{name:"App Script",url:"https://www.google.com/script/start/",img:"https://cdn-icons-png.flaticon.com/512/5968/5968494.png"},{name:"C#",url:"https://dotnet.microsoft.com/en-us/languages/csharp",img:"https://i.pinimg.com/736x/86/35/be/8635bee5273ef25c88eaf5b80e05ab54.jpg"},{name:"ASP.Net",url:"https://learn.microsoft.com/en-us/aspnet/overview",img:"https://th.bing.com/th/id/OIP.jTi8SWL-eSaGgsVhOtcblwAAAA?pid=ImgDetMain"},{name:"Node.JS",url:"https://nodejs.org/",img:"https://th.bing.com/th/id/OIP.nIOCFID1DJg3iMfAAscpRAHaHa?pid=ImgDetMain"},{name:"Express",url:"http://expressjs.com/",img:"https://img1.pnghut.com/t/1/4/7/5CXD0EnpdZ/expressjs-logo-text-serverside-runtime-system.jpg"},{name:"Electron",url:"https://www.electronjs.org/",img:"https://icon-icons.com/downloadimage.php?id=168222&root=2699/PNG/512/&file=electronjs_logo_icon_168222.png"},{name:"Ionic",url:"https://ionicframework.com/",img:"https://cdn4.iconfinder.com/data/icons/logos-3/512/Ionic_Logo-2-512.png"},{name:"Capacitor Js",url:"https://capacitorjs.com/",img:"https://rxdb.info/files/icons/capacitor.svg"},{name:"Angular",url:"https://angular.io/",img:"https://cdn.iconscout.com/icon/free/png-128/angular-3-226070.png"},{name:"AngularJS",url:"https://angularjs.org/",img:"https://www.shareicon.net/data/256x256/2015/09/03/95034_web_512x512.png"},{name:"Bootstrap",url:"https://getbootstrap.com/",img:"https://th.bing.com/th?id=ODLS.b5a2289b-a495-4805-ab3f-1bb4751f4682&w=32&h=32&qlt=91&pcl=1b1a19&o=6&pid=1.2"},{name:"Github",url:"https://github.com/",img:"https://th.bing.com/th?id=ODLS.05409d17-5d83-4701-acc1-90430dd3b02c&w=32&h=32&qlt=90&pcl=1b1a19&o=6&pid=1.2"},{name:"HTML5",url:"https://html.com/",img:"https://cdn.iconscout.com/icon/free/png-512/html5-10-569380.png"},{name:"Jq",url:"https://jquery.com/",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Logo_jQuery.svg/1200px-Logo_jQuery.svg.png"},{name:"CSS",url:"https://developer.mozilla.org/en-US/docs/Web/CSS",img:"https://th.bing.com/th/id/OIP.jiuXfQfSdjrIoV_6YQ4LNwHaHa?w=191&h=191&c=7&pcl=1b1a19&r=0&o=5&pid=1.7"},{name:"TypeScript",url:"https://www.typescriptlang.org/",img:"https://th.bing.com/th?id=ODLS.ff05fb38-bb9c-4b44-81f4-f3b19c9611b7&w=32&h=32&qlt=90&pcl=1b1a19&o=6&pid=1.2"},{name:"JavaScript",url:"https://www.javascript.com/",img:"https://cdn.freebiesupply.com/logos/thumbs/2x/javascript-logo.png"}],this.viewType=[{name:"list",icon:"bi-list"},{name:"card",icon:"bi-card-image"}],this.storageName="bundle_view",this.loadData()}ngOnInit(){this.router.config.filter(t=>t.title!=null&&t.title.toString().toLowerCase()!="home").forEach(t=>{let r={title:t.title.toString(),items:[]};t.children==null?r.items.push({title:t.title.toString(),url:t.path.toString(),img:t.data.img,info:t.data.info,disabled:t.redirectTo.includes("home")}):t.children.forEach(s=>{let F=s.data.externalUrl,k=s.redirectTo,be=k!=null&&k.includes("home")&&F==null;k==null&&(k=s.path),r.items.push({title:s.title.toString(),url:`${t.path}/${k}`,ext:F,img:s.data.img,info:s.data.info,disabled:be})}),this.items.push(r)})}loadData(){let t=localStorage.getItem(this.storageName);if(t!=null){let r=JSON.parse(t);this.view=this.viewType.find(s=>s.name==r.name)}else this.view=this.viewType[0]}saveData(){let t=JSON.stringify(this.view);localStorage.setItem(this.storageName,t)}};n.\u0275fac=function(r){return new(r||n)(b(te),b(D),b(v))},n.\u0275cmp=x({type:n,selectors:[["app-home"]],standalone:!0,features:[O([{provide:D},{provide:v}]),S],decls:90,vars:20,consts:[["classContent","fade-bg-10s",3,"type","imgUrl","imgSize","imgRepeat","imgPos"],[1,"display-1","mb-5"],[1,"ps-3"],[1,""],[1,"text-light","bg-danger","px-2","rounded"],[1,"ms-3"],[1,"text-end"],[1,"fst-italic"],[1,"fst-italic","bg-blend-multiply","px-3","small","text-opacity-75","text-light"],[1,"bg-warning","text-dark","px-2","rounded","opacity-75"],[1,"px-2","rounded","fw-bold","text-light",3,"ngClass"],[1,"container"],[1,"mb-3","text-center","position-sticky","sticky-top"],[1,"btn-group"],[4,"ngFor","ngForOf"],[1,"d-grid","align-items-center","h-100"],[1,"my-3"],[1,"d-block","justify-content-center","text-center"],[1,"mb-3"],[1,"h5","border","rounded","bg-body-tertiary","px-2","d-inline"],[1,"border","rounded","bg-body-tertiary","px-2","d-inline-grid"],[1,"fw-medium"],[1,"m-1"],[1,"fw-normal","h3"],[1,"h3","fw-normal"],[1,"overflow-auto","text-center"],[1,"d-inline"],[1,"btn-group-vertical"],["name","view","type","radio",1,"btn-check",3,"id","value","ngModel","ngModelChange","change"],[1,"btn","btn-light",3,"for"],[1,"mb-5"],[1,"border","rounded-pill","text-light","bg-secondary","bg-gradient","bg-opacity-75","py-2","px-3"],[3,"ngClass"],[1,"col","m-3","px-0","text-center"],[1,"btn","border-0",3,"href","ngClass"],[4,"ngIf"],["class","my-5",4,"ngIf"],[1,"app-img"],["alt","app-img",1,"rounded",3,"src"],[1,"d-block","text-truncate"],[1,"position-relative","d-grid",3,"mouseenter","mouseout"],["alt","img",1,"img-card",3,"src"],[1,"fs-5","mb-3","type-card-title"],[1,"type-card-info",3,"ngClass"],[1,"my-5"],[1,"btn","btn-sm","btn-outline-light","bg-gradient","border-secondary","align-items-center","m-1",3,"href"],["alt","","width","auto","height","25",3,"src"],[1,"btn","btn-outline-light","bg-gradient","border-secondary",3,"href","ngClass"],["alt","","height","25px","width","auto",3,"src"]],template:function(r,s){r&1&&(o(0,"app-block",0)(1,"div",1)(2,"div"),m(3," ND App`s "),a()(),o(4,"div")(5,"p")(6,"span",2),m(7,"Is"),a(),m(8," a collections of "),o(9,"i",3)(10,"b",4),m(11,"Web Application"),a(),m(12," and "),o(13,"b",4),m(14,"Component's"),a()(),m(15," that could be use or develop for later use. "),a(),o(16,"p")(17,"span",5),m(18,"It"),a(),m(19," don't have any host and domain yet "),o(20,"i"),m(21,"(e.g www)"),a(),m(22,". So any data that is being processed in this app will be saved only to "),o(23,"i")(24,"b"),m(25,"Your Device Local System"),a()(),m(26," and "),o(27,"b"),m(28,"Not Integrated"),a(),m(29," to the online sequence yet. So feel free to try using any modules that had been developed. "),a(),o(30,"p",6)(31,"span",7),m(32,"Cheers.."),a(),o(33,"span"),m(34,"\u{1F37A}\u{1F917}"),a()()(),p(35,"hr"),o(36,"div",8)(37,"div")(38,"b"),m(39,"* Note for - Web Applications"),a()(),o(40,"div"),m(41," -. To simulate between "),o(42,"b",9),m(43,"Paid or Free"),a(),m(44," account test, click the button named "),o(45,"b"),m(46,"[Mode]"),a(),m(47," at the upper right corner. "),a(),o(48,"div"),m(49," -. Current selected mode is : "),o(50,"span",10),m(51),a()()()(),o(52,"div",11),p(53,"br"),o(54,"div",12)(55,"div",13),u(56,Ie,4,7,"ng-container",14),a()(),o(57,"div",15)(58,"div",16),u(59,He,6,6,"ng-container",14),a()(),p(60,"hr"),o(61,"div",17)(62,"div",18)(63,"div"),m(64,"Author"),a(),o(65,"div",19),m(66," Kananda Saputra "),a()(),p(67,"br"),o(68,"div",18)(69,"div"),m(70,"Location"),a(),o(71,"div",20)(72,"div",21),m(73,"Pekanbaru, Riau"),a(),p(74,"hr",22),o(75,"div",23),m(76,"Indonesia"),a()()(),p(77,"br"),o(78,"div",18)(79,"div",24),m(80,"Abilities"),a(),o(81,"div",25)(82,"div",26),u(83,Ne,4,3,"ng-container",14),a()()(),p(84,"br"),o(85,"div",18)(86,"div",24),m(87,"Profiles"),a(),o(88,"div",27),u(89,Ue,6,7,"ng-container",14),a()()()()),r&2&&(c("type",s.tag.lib.type.title)("imgUrl",s.theme.img)("imgSize",s.tag.lib.bgSize.cover)("imgRepeat",s.tag.lib.bgRepeat.repeat)("imgPos",s.tag.lib.bgPos.top),l(2),E("fw-medium d-inline p-4 rounded-4 bg-blend-multiply ",s.theme.title,""),l(2),E("d-grid p-3 rounded-4 bg-blend-multiply ",s.theme.desc,""),l(46),c("ngClass",I(17,Be,s.nav.ads.get(),!s.nav.ads.get())),l(),f(" ",s.nav.ads.get()?"Paid":"Free"," Account "),l(5),c("ngForOf",s.viewType),l(3),c("ngForOf",s.items),l(24),c("ngForOf",s.appUsed),l(6),c("ngForOf",s.profiles))},dependencies:[M,H,Y,T,ce,re,se,le,me,D],styles:[".app-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100px;height:100px}.type-card-title[_ngcontent-%COMP%], .type-card-info[_ngcontent-%COMP%]{background-color:#00000080;color:#faebd7;margin:.5rem;padding:.5rem;position:absolute;border-radius:.5rem}.type-card-title[_ngcontent-%COMP%]{top:0;display:grid}.type-card-info[_ngcontent-%COMP%]{bottom:0;margin-bottom:0;width:-webkit-fill-available}"]});let e=n;return e})();var he=[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",title:"Home",component:ge},{path:"mobile",title:"\u{1F4F1}\u2728 Mobile Applications",children:[{path:"counter",title:"Money Counter",data:{info:"Counter is the app to count your cash money by calculating the quantity of papers and coins.",img:"https://d12oja0ew7x0i8.cloudfront.net/images/Article_Images/ImageForArticle_8088_16644545346588986.jpg",externalUrl:"https://bm9999nd.github.io/mobile/"},redirectTo:"home"}]},{path:"app",title:"\u{1F5A5}\u{1F4BB} Web Applications",children:[{path:"linker",title:"\u{1F517} Linker",data:{info:"Linker is the app like a blog that is commonly used by blogger`s, e-commerce, etc that make thousand of links to distribute for their follower`s.",img:"https://img.freepik.com/free-vector/gradient-logo-with-abstract-shape_23-2148216799.jpg?t=st=1706465125~exp=1706465725~hmac=f5c563b466f699010fa00c9e621b00542a5f3a121f4e9498aa15114f4bb3fcf2"},loadComponent:()=>import("./chunk-Y4XY55GR.js").then(e=>e.AppComponent),loadChildren:()=>import("./chunk-ZGNOTET5.js").then(e=>e.routes)},{path:"scale",title:"\u2696 Weight Scale",data:{info:"Digital weight scale app connector to phone OTG USB jack (on progress).",img:"https://image.jualalatlab.com/s3/productimages/webp/co4477/p1053846/w600-h600/60ba7c61-da69-407c-9136-b2797cbc0ea5.jpg"},loadComponent:()=>import("./chunk-PKLBZ7YQ.js").then(e=>e.AppComponent),loadChildren:()=>import("./chunk-IKE7TGB3.js").then(e=>e.routes)},{path:"blog",title:"\u{1F3AD} Blog",data:{info:"Destined to be Blog HTML writer, but I ain`t sure of what would it becomes later.",img:"https://www.shutterstock.com/image-photo/bloggingblog-concepts-ideas-white-worktable-600nw-1029506242.jpg"},redirectTo:"/home"},{path:"budget",title:"\u{1F5D3} Budgeting",data:{info:"",img:"https://casatraining.id/wp-content/uploads/2020/03/informasi-training-konsep-flexible-budgeting.jpg"},redirectTo:"/home"},{path:"diner",title:"\u2615 Coffee Shop",data:{info:"",img:"https://d1csarkz8obe9u.cloudfront.net/posterpreviews/restaurant-food-menu-template-design-99db239e0b71e79064144853f40f6c8c_screen.jpg?ts=1637048157"},redirectTo:"/home"},{path:"transport",title:"\u{1F69A} Transporter",data:{info:"",img:"https://png.pngtree.com/png-clipart/20221228/original/pngtree-cartoon-yellow-color-truck-png-image_8818392.png"},redirectTo:"/home"},{path:"calculator",title:"\u{1F4AF} Calculator",data:{info:"",img:"https://th.bing.com/th/id/OIP.tDAkPWgBhbuHrPwZG1BoHgHaKG?pid=ImgDetMain"},redirectTo:"/home"}]},{path:"cp",title:"\u{1F9F0}\u26A1 List of Components",children:[{path:"login",title:"\u{1F465} Login",data:{info:"",img:"https://img.freepik.com/free-vector/login-form-design-with-face_23-2147726967.jpg?w=740&t=st=1706465359~exp=1706465959~hmac=2e323bb0d8394f17941bd6461e87bb2fe493d6d1a4a3551daf5c82dec2bc514f"},loadComponent:()=>import("./chunk-SM54P4PJ.js").then(e=>e.UserLoginComponent)},{path:"inventory",title:"\u{1F4E6} Scanner",data:{info:"",img:"https://img.freepik.com/free-vector/set-smartphones-computer-with-code-qr-illustration-design_24877-61337.jpg?w=740&t=st=1706465505~exp=1706466105~hmac=f9bb87b79b62d8a82e8472e55f97b91c2732f28b31d032639bfbe9f1c3bcb8a0"},loadComponent:()=>import("./chunk-6EN5RB6O.js").then(e=>e.BarangTransaksiComponent)},{path:"credit",title:"\u{1F4B0} Credit",data:{info:"",img:"https://th.bing.com/th/id/OIP.CZHen7AD9WhdQ92fzRDmDAAAAA?pid=ImgDetMain"},loadComponent:()=>import("./chunk-JV7QGISN.js").then(e=>e.CalculatorKreditComponent)},{path:"rss-feed",title:"\u{1F4C4} RSS Feed",data:{info:"",img:"https://icons.iconarchive.com/icons/yootheme/social-bookmark/256/social-rss-button-orange-icon.png"},loadComponent:()=>import("./chunk-DTS2UVNN.js").then(e=>e.RssFeedComponent)}]}];var ue={providers:[oe(he,ae(ne)),Z()]};var fe=(()=>{let n=class n{constructor(t,r){this.nav=t,this.element=r,this.title="Bundle",this.theme="light",this.themeStorage="theme",this.loadTheme()}onActive(t){this.setTheme()}setTheme(){let r=this.element.nativeElement.parentElement;r?.setAttribute("data-bs-theme",this.theme)}loadTheme(){let t=localStorage.getItem(this.themeStorage);t!=null&&(this.theme=t)}toggleTheme(){let t="";this.theme=="light"?t="dark":t="light",localStorage.setItem(this.themeStorage,t),this.theme=t,this.setTheme()}};n.\u0275fac=function(r){return new(r||n)(b(v),b(W))},n.\u0275cmp=x({type:n,selectors:[["bundle-root"]],standalone:!0,features:[O([{provide:v},{provide:N}]),S],decls:2,vars:2,consts:[[3,"title","theme","toggleTheme"],[3,"activate"]],template:function(r,s){r&1&&(o(0,"bundle-nav",0),_("toggleTheme",function(){return s.toggleTheme()}),a(),o(1,"router-outlet",1),_("activate",function(k){return s.onActive(k)}),a()),r&2&&c("title",s.title)("theme",s.theme)},dependencies:[v,ee]});let e=n;return e})();K(fe,ue).catch(e=>console.error(e));
