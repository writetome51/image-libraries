(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"+3qu":function(t,e,n){"use strict";n.d(e,"a",function(){return b});var r=n("fXoL");let a=(()=>{class t{ngOnDestroy(){this.waiter.waiting=!1}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=r.Fb({type:t,selectors:[["","setWaitingToFalseOnDestroy",""]],inputs:{waiter:"waiter"}}),t})();var i=n("ofXK"),s=n("76kx");function c(t,e){1&t&&r.Lb(0,"big-loading-spinner")}function o(t,e){1&t&&r.Zb(0,0,["*ngIf","!(loadingStatus.waiting)"])}const u=["*"];let b=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Eb({type:t,selectors:[["loading-content-section"]],inputs:{heading:"heading",loadingStatus:"loadingStatus"},ngContentSelectors:u,decls:6,vars:4,consts:[["setWaitingToFalseOnDestroy","",3,"waiter"],[4,"ngIf"]],template:function(t,e){1&t&&(r.ac(),r.Nb(0,0),r.Pb(1,"header"),r.Pb(2,"h2"),r.pc(3),r.Ob(),r.Ob(),r.oc(4,c,1,0,"big-loading-spinner",1),r.oc(5,o,1,0,"ng-content",1),r.Mb()),2&t&&(r.bc("waiter",e.loadingStatus),r.Ab(3),r.qc(e.heading),r.Ab(1),r.bc("ngIf",e.loadingStatus.waiting),r.Ab(1),r.bc("ngIf",!e.loadingStatus.waiting))},directives:[a,i.i,s.a],encapsulation:2}),t})()},"76kx":function(t,e,n){"use strict";n.d(e,"a",function(){return i});var r=n("AytR"),a=n("fXoL");let i=(()=>{class t{constructor(){this.image={src:r.a.assets+"big-loading-spinner.gif",width:200,height:200}}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=a.Eb({type:t,selectors:[["big-loading-spinner"]],decls:2,vars:12,consts:[[1,"big-loading-spinner-container"]],template:function(t,e){1&t&&(a.Pb(0,"div"),a.Lb(1,"div",0),a.Ob()),2&t&&(a.Ab(1),a.nc("position","relative")("margin","auto")("width",e.image.width+"px")("height",e.image.height+"px")("background-image","url("+e.image.src+")")("background-repeat","no-repeat"))},styles:[".big-loading-spinner-container[_ngcontent-%COMP%] {margin: auto;}"]}),t})()},H90k:function(t,e,n){"use strict";n.d(e,"a",function(){return s});var r=n("fXoL"),a=n("Yrwx"),i=n("tyNb");let s=(()=>{class t{constructor(t,e){this.__sessionIDAppearsValid=t,this.__router=e}canActivate(){return this.__ifAssumedLoggedIn_returnTrue_else_redirectToLoginAndReturnFalse()}__ifAssumedLoggedIn_returnTrue_else_redirectToLoginAndReturnFalse(){return!!this.__sessionIDAppearsValid.go()||(this.__router.navigate(["/"]),!1)}}return t.\u0275fac=function(e){return new(e||t)(r.Tb(a.a),r.Tb(i.b))},t.\u0275prov=r.Gb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},IRUQ:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var r=n("ofXK"),a=n("fXoL");let i=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.Ib({type:t}),t.\u0275inj=a.Hb({imports:[[r.b]]}),t})()},ITDZ:function(t,e,n){"use strict";n.r(e),n.d(e,"LibrariesModule",function(){return lt});var r=n("H90k"),a=n("W5s9"),i=n("1K0o"),s=n("ofXK"),c=n("ySWE"),o=n("0wL/");const u={true:!1,setDefault:function(){this.true=!1}},b={data:"",setDefault:function(){this.data=""}};var l=n("tCSI"),d=n("fXoL"),p=n("jhN1"),f=n("Tx7J"),h=n("+3qu"),g=n("/1kH"),m=n("TJMr");let y=(()=>{class t extends m.h{constructor(){super(),this.data.id="search-input",this.data.objectToBind=o.SearchData,this.data.propertyToBind="text",this.data.label="Search"}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=d.Gb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),v=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=d.Ib({type:t}),t.\u0275inj=d.Hb({}),t})(),w=(()=>{class t extends y{constructor(){super(),this.data.id="library-name-"+this.data.id,this.data.label+=" Library Names"}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=d.Gb({token:t,factory:t.\u0275fac,providedIn:v}),t})();var _=n("+iAp"),L=n("IT79");let I=(()=>{class t{constructor(t){this.__librariesInBrowser=t}go(){o.LibraryNameSearchResultsData.data=o.SearchData.text.length?Object(_.a)(this.__test,o.LibraryNamesData.data):void 0}__test(t){return t.includes(o.SearchData.text.toLowerCase())}}return t.\u0275fac=function(e){return new(e||t)(d.Tb(L.a))},t.\u0275prov=d.Gb({token:t,factory:t.\u0275fac,providedIn:v}),t})();var T=n("3Pt+"),O=n("AytR");let N=(()=>{class t{constructor(){this.image={src:O.a.assets+"clear-field-button.png",width:16,height:15}}clearSearch(){o.SearchData.text="",o.LibraryNameSearchResultsData.data=void 0}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=d.Eb({type:t,selectors:[["clear-search-field-button"]],decls:1,vars:14,consts:[["role","button",3,"click"]],template:function(t,e){1&t&&(d.Pb(0,"div",0),d.Wb("click",function(){return e.clearSearch()}),d.Ob()),2&t&&d.nc("display","inline-block")("position","relative")("top","3px")("width",e.image.width+"px")("height",e.image.height+"px")("background-image","url("+e.image.src+")")("background-repeat","no-repeat")},encapsulation:2}),t})(),x=(()=>{class t{constructor(t,e){this.__seachLibrariesInput=t,this.__searchLibraries=e}get input(){return this.__seachLibrariesInput.data}search(){this.__searchLibraries.go()}}return t.\u0275fac=function(e){return new(e||t)(d.Kb(w),d.Kb(I))},t.\u0275cmp=d.Eb({type:t,selectors:[["search-library-names"]],decls:6,vars:9,consts:[[1,"library-name-search-input-container","validating-input-container"],[3,"for","hidden"],["autocomplete","on",1,"validating-input",3,"type","id","name","placeholder","minLength","ngModel","input","ngModelChange"]],template:function(t,e){1&t&&(d.Pb(0,"div"),d.Pb(1,"div",0),d.Pb(2,"label",1),d.pc(3),d.Ob(),d.Pb(4,"input",2),d.Wb("input",function(){return e.search()})("ngModelChange",function(t){return e.input.objectToBind[e.input.propertyToBind]=t}),d.Ob(),d.Lb(5,"clear-search-field-button"),d.Ob(),d.Ob()),2&t&&(d.Ab(2),d.cc("for",e.input.id),d.bc("hidden",e.input.hideLabel),d.Ab(1),d.rc(" ",e.input.label," "),d.Ab(1),d.cc("id",e.input.id),d.bc("type",e.input.__type)("name",e.input.id)("placeholder",e.input.label)("minLength",e.input.minLength)("ngModel",e.input.objectToBind[e.input.propertyToBind]))},directives:[T.a,T.c,T.f,N],styles:["div.library-name-search-input-container[_ngcontent-%COMP%] {\n\t\t\tmargin: 5px auto 10px 30px;\n\t\t}","clear-search-field-button[_ngcontent-%COMP%] {\n\t\t\tposition: relative;\n\t\t\tright: 35px;\n\t\t\tz-index: 1000;\n\t\t}","input[_ngcontent-%COMP%] {margin-left:auto;  margin-right: auto;  padding-right: 30px;}"]}),t})();var k=n("tyNb");const A=function(t){return["/library",t,"page",1]};function S(t,e){if(1&t&&(d.Pb(0,"li"),d.Pb(1,"a",1),d.pc(2),d.Ob(),d.Ob()),2&t){const t=e.$implicit;d.Ab(1),d.bc("routerLink",d.dc(2,A,t)),d.Ab(1),d.qc(t)}}let D=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=d.Eb({type:t,selectors:[["library-links"]],inputs:{labels:"labels"},decls:3,vars:1,consts:[[4,"ngFor","ngForOf"],[3,"routerLink"]],template:function(t,e){1&t&&(d.Pb(0,"div"),d.Pb(1,"ul"),d.oc(2,S,3,4,"li",0),d.Ob(),d.Ob()),2&t&&(d.Ab(2),d.bc("ngForOf",e.labels))},directives:[s.h,k.d],encapsulation:2}),t})();function j(t,e){1&t&&(d.Pb(0,"p"),d.pc(1,"You have no libraries"),d.Ob())}function P(t,e){if(1&t&&(d.Nb(0),d.Lb(1,"search-library-names"),d.Lb(2,"library-links",1),d.Mb()),2&t){const t=d.Yb();d.Ab(2),d.bc("labels",t.names)}}let E=(()=>{class t{constructor(){this.libraryNames=o.LibraryNamesData,this.libNameSearchResults=o.LibraryNameSearchResultsData}get librariesExist(){return this.libraryNames.data&&this.libraryNames.data.length}get librariesDontExist(){return this.libraryNames.data&&Object(g.a)(this.libraryNames.data.length)}get names(){return this.libNameSearchResults.data?this.libNameSearchResults.data:this.libraryNames.data}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=d.Eb({type:t,selectors:[["libraries-viewer"]],decls:2,vars:2,consts:[[4,"ngIf"],[3,"labels"]],template:function(t,e){1&t&&(d.oc(0,j,2,0,"p",0),d.oc(1,P,3,1,"ng-container",0)),2&t&&(d.bc("ngIf",e.librariesDontExist),d.Ab(1),d.bc("ngIf",e.librariesExist))},directives:[s.i,x,D],encapsulation:2}),t})(),B=(()=>{class t{get creatingNewLibrary(){return u.true}set creatingNewLibrary(t){u.true=t}get label(){return this.creatingNewLibrary?"Cancel":"New Library"}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=d.Eb({type:t,selectors:[["new-library-button"]],decls:3,vars:1,consts:[[1,"input-container"],[1,"btn","btn-default",3,"click"]],template:function(t,e){1&t&&(d.Pb(0,"div",0),d.Pb(1,"button",1),d.Wb("click",function(){return e.creatingNewLibrary=!e.creatingNewLibrary}),d.pc(2),d.Ob(),d.Ob()),2&t&&(d.Ab(2),d.rc(" ",e.label," "))},encapsulation:2}),t})(),K=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=d.Ib({type:t}),t.\u0275inj=d.Hb({}),t})();var R=n("ERbj"),C=n("mrSG"),H=n("RuhN"),M=n("ezBO");let G=(()=>{class t{constructor(t,e){this.__realmFn=t,this.__sessionIDInBrowser=e}go(t){return Object(C.__awaiter)(this,void 0,void 0,function*(){return yield this.__realmFn.call("pub_createAndReturnLibrary",{name:t,sessionID:this.__sessionIDInBrowser.get()})})}}return t.\u0275fac=function(e){return new(e||t)(d.Tb(H.a),d.Tb(M.a))},t.\u0275prov=d.Gb({token:t,factory:t.\u0275fac,providedIn:K}),t})();var X=n("bW8z"),F=n("Omw0"),W=n("X0HJ"),J=n("KwsU");let q=(()=>{class t{constructor(t){this.__processGetLibraries=t}go(){return Object(C.__awaiter)(this,void 0,void 0,function*(){W.a.setSuccess("Library created"),u.true=!1,yield this.__refreshLoadedLibraryNames()})}__refreshLoadedLibraryNames(){return Object(C.__awaiter)(this,void 0,void 0,function*(){yield this.__processGetLibraries.go()})}}return t.\u0275fac=function(e){return new(e||t)(d.Tb(J.a))},t.\u0275prov=d.Gb({token:t,factory:t.\u0275fac,providedIn:K}),t})(),Y=(()=>{class t extends X.a{constructor(t,e){super(t,e)}}return t.\u0275fac=function(e){return new(e||t)(d.Tb(F.a),d.Tb(q))},t.\u0275prov=d.Gb({token:t,factory:t.\u0275fac,providedIn:K}),t})(),Q=(()=>{class t extends R.a{constructor(t,e){super(t,e)}}return t.\u0275fac=function(e){return new(e||t)(d.Tb(G),d.Tb(Y))},t.\u0275prov=d.Gb({token:t,factory:t.\u0275fac,providedIn:K}),t})(),Z=(()=>{class t extends m.h{constructor(){super(),this.data.id="library-name-input",this.data.propertyToBind="data",this.data.objectToBind=b,this.data.label="Library Name",this.data.isValid=[()=>0!==this.data.objectToBind[this.data.propertyToBind].length,()=>Object(g.a)(this.data.objectToBind[this.data.propertyToBind].includes(" "))],this.data.errorMessage=["The library name cannot be empty","The library name cannot include spaces"]}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=d.Gb({token:t,factory:t.\u0275fac,providedIn:K}),t})();var z=n("J+9Z");let U=(()=>{class t extends m.b{constructor(t){super(t)}}return t.\u0275fac=function(e){return new(e||t)(d.Kb(Z))},t.\u0275cmp=d.Eb({type:t,selectors:[["new-library-form-input"]],features:[d.xb],decls:1,vars:1,consts:[[3,"data"]],template:function(t,e){1&t&&d.Lb(0,"app-validating-form-input",0),2&t&&d.bc("data",e.input)},directives:[z.a],encapsulation:2}),t})();var V=n("uQJg");let $=(()=>{class t{constructor(t,e){this.process=t,this.libraryNameInput=e}}return t.\u0275fac=function(e){return new(e||t)(d.Kb(Q),d.Kb(Z))},t.\u0275cmp=d.Eb({type:t,selectors:[["new-library-form"]],decls:4,vars:3,consts:[[1,"form-container"],[3,"label","validatingInputs","iDoThis"]],template:function(t,e){1&t&&(d.Pb(0,"div",0),d.Pb(1,"form"),d.Lb(2,"new-library-form-input"),d.Lb(3,"submit-form-button",1),d.Ob(),d.Ob()),2&t&&(d.Ab(3),d.bc("label","Create")("validatingInputs",e.libraryNameInput)("iDoThis",e.process))},directives:[U,V.a],encapsulation:2}),t})();var tt=n("EGrv");const et=function(t){return[t]};function nt(t,e){if(1&t&&d.Lb(0,"new-library-form",3),2&t){const t=d.Yb();d.bc("data",d.dc(1,et,t.newLibraryNameInputText))}}let rt=(()=>{class t{constructor(t){this.heading="Your Libraries",this.newLibraryBeingCreated=u,this.newLibraryNameInputText=b,this.__libraryNames=o.LibraryNamesData,t.setTitle(c.a.go([this.heading]))}set loadingStatus(t){}get loadingStatus(){return{waiting:Object(l.b)(this.__libraryNames.data)}}}return t.\u0275fac=function(e){return new(e||t)(d.Kb(p.b))},t.\u0275cmp=d.Eb({type:t,selectors:[["app-libraries"]],decls:5,vars:3,consts:[["clearAlertsOnDestroy",""],[3,"heading","loadingStatus"],["resetToDefaultOnInit","",3,"data",4,"ngIf"],["resetToDefaultOnInit","",3,"data"]],template:function(t,e){1&t&&(d.Pb(0,"div",0),d.Pb(1,"loading-content-section",1),d.Lb(2,"libraries-viewer"),d.Ob(),d.Lb(3,"new-library-button"),d.oc(4,nt,1,3,"new-library-form",2),d.Ob()),2&t&&(d.Ab(1),d.bc("heading",e.heading)("loadingStatus",e.loadingStatus),d.Ab(3),d.bc("ngIf",e.newLibraryBeingCreated.true))},directives:[f.a,h.a,E,B,s.i,$,tt.a],encapsulation:2}),t})();var at=n("rEd/"),it=n("RNeQ");let st=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=d.Ib({type:t}),t.\u0275inj=d.Hb({imports:[[s.b,T.b,v,it.a]]}),t})(),ct=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=d.Ib({type:t}),t.\u0275inj=d.Hb({imports:[[s.b,i.a,st,k.e]]}),t})();var ot=n("q6+g"),ut=n("Keh9");let bt=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=d.Ib({type:t}),t.\u0275inj=d.Hb({imports:[[s.b,ot.a,ut.a,K]]}),t})(),lt=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=d.Ib({type:t}),t.\u0275inj=d.Hb({imports:[[s.b,a.a,i.a,at.a,bt,ct,k.e.forChild([{path:"",pathMatch:"full",component:rt,canActivate:[r.a]},{path:"**",redirectTo:""}])]]}),t})()},Keh9:function(t,e,n){"use strict";n.d(e,"a",function(){return s});var r=n("ofXK"),a=n("K9Zg"),i=n("fXoL");let s=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.Ib({type:t}),t.\u0275inj=i.Hb({imports:[[r.b,a.a]]}),t})()},"rEd/":function(t,e,n){"use strict";n.d(e,"a",function(){return c});var r=n("ofXK"),a=n("IRUQ"),i=n("fXoL");let s=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.Ib({type:t}),t.\u0275inj=i.Hb({imports:[[r.b]]}),t})(),c=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.Ib({type:t}),t.\u0275inj=i.Hb({imports:[[r.b,a.a,s]]}),t})()}}]);