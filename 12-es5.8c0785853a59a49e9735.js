!function(){function t(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&n(t,e)}function n(t,e){return(n=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,e)}function e(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}();return function(){var e,a=i(t);if(n){var o=i(this).constructor;e=Reflect.construct(a,arguments,o)}else e=a.apply(this,arguments);return r(this,e)}}function r(t,n){return!n||"object"!=typeof n&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function i(t){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function a(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function o(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(t,n,e){return n&&o(t.prototype,n),e&&o(t,e),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"+3qu":function(t,n,e){"use strict";e.d(n,"a",function(){return p});var r,i=e("fXoL"),o=((r=function(){function t(){a(this,t)}return c(t,[{key:"ngOnDestroy",value:function(){this.waiter.waiting=!1}}]),t}()).\u0275fac=function(t){return new(t||r)},r.\u0275dir=i.Fb({type:r,selectors:[["","setWaitingToFalseOnDestroy",""]],inputs:{waiter:"waiter"}}),r),u=e("ofXK"),s=e("76kx");function b(t,n){1&t&&i.Lb(0,"big-loading-spinner")}function f(t,n){1&t&&i.Zb(0,0,["*ngIf","!(loadingStatus.waiting)"])}var l,d=["*"],p=((l=function t(){a(this,t)}).\u0275fac=function(t){return new(t||l)},l.\u0275cmp=i.Eb({type:l,selectors:[["loading-content-section"]],inputs:{heading:"heading",loadingStatus:"loadingStatus"},ngContentSelectors:d,decls:6,vars:4,consts:[["setWaitingToFalseOnDestroy","",3,"waiter"],[4,"ngIf"]],template:function(t,n){1&t&&(i.ac(),i.Nb(0,0),i.Pb(1,"header"),i.Pb(2,"h2"),i.pc(3),i.Ob(),i.Ob(),i.oc(4,b,1,0,"big-loading-spinner",1),i.oc(5,f,1,0,"ng-content",1),i.Mb()),2&t&&(i.bc("waiter",n.loadingStatus),i.Ab(3),i.qc(n.heading),i.Ab(1),i.bc("ngIf",n.loadingStatus.waiting),i.Ab(1),i.bc("ngIf",!n.loadingStatus.waiting))},directives:[o,u.i,s.a],encapsulation:2}),l)},"76kx":function(t,n,e){"use strict";e.d(n,"a",function(){return o});var r=e("AytR"),i=e("fXoL"),o=function(){var t=function t(){a(this,t),this.image={src:r.a.assets+"big-loading-spinner.gif",width:200,height:200}};return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=i.Eb({type:t,selectors:[["big-loading-spinner"]],decls:2,vars:12,consts:[[1,"big-loading-spinner-container"]],template:function(t,n){1&t&&(i.Pb(0,"div"),i.Lb(1,"div",0),i.Ob()),2&t&&(i.Ab(1),i.nc("position","relative")("margin","auto")("width",n.image.width+"px")("height",n.image.height+"px")("background-image","url("+n.image.src+")")("background-repeat","no-repeat"))},styles:[".big-loading-spinner-container[_ngcontent-%COMP%] {margin: auto;}"]}),t}()},H90k:function(t,n,e){"use strict";e.d(n,"a",function(){return u});var r=e("fXoL"),i=e("Yrwx"),o=e("tyNb"),u=function(){var t=function(){function t(n,e){a(this,t),this.__sessionIDAppearsValid=n,this.__router=e}return c(t,[{key:"canActivate",value:function(){return this.__ifAssumedLoggedIn_returnTrue_else_redirectToLoginAndReturnFalse()}},{key:"__ifAssumedLoggedIn_returnTrue_else_redirectToLoginAndReturnFalse",value:function(){return!!this.__sessionIDAppearsValid.go()||(this.__router.navigate(["/"]),!1)}}]),t}();return t.\u0275fac=function(n){return new(n||t)(r.Tb(i.a),r.Tb(o.b))},t.\u0275prov=r.Gb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},IRUQ:function(t,n,e){"use strict";e.d(n,"a",function(){return o});var r=e("ofXK"),i=e("fXoL"),o=function(){var t=function t(){a(this,t)};return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=i.Ib({type:t}),t.\u0275inj=i.Hb({imports:[[r.b]]}),t}()},ITDZ:function(n,r,i){"use strict";i.r(r),i.d(r,"LibrariesModule",function(){return Dt});var o,u,s,b,f,l,d=i("H90k"),p=i("W5s9"),h=i("C1T0"),g=i("ofXK"),y=i("ySWE"),m=i("0wL/"),v=i("VKW3"),w=i("tCSI"),_=i("fXoL"),L=i("jhN1"),I=i("Tx7J"),O=i("+3qu"),k={data:void 0},T=i("/1kH"),j=i("UAv1"),x=i("TJMr"),N=((s=function(n){t(i,n);var r=e(i);function i(){var t;return a(this,i),(t=r.call(this)).data.id="search-input",t.data.objectToBind=j.a,t.data.propertyToBind="text",t.data.label="Search",t}return i}(x.h)).\u0275fac=function(t){return new(t||s)},s.\u0275prov=_.Gb({token:s,factory:s.\u0275fac,providedIn:"root"}),s),A=((u=function t(){a(this,t)}).\u0275fac=function(t){return new(t||u)},u.\u0275mod=_.Ib({type:u}),u.\u0275inj=_.Hb({}),u),P=((o=function(n){t(i,n);var r=e(i);function i(){var t;return a(this,i),(t=r.call(this)).data.id="library-name-"+t.data.id,t.data.label+=" Library Names",t}return i}(N)).\u0275fac=function(t){return new(t||o)},o.\u0275prov=_.Gb({token:o,factory:o.\u0275fac,providedIn:A}),o),R=i("+iAp"),S=i("IT79"),E=((b=function(){function t(n){a(this,t),this.__librariesInBrowser=n}return c(t,[{key:"go",value:function(){k.data=j.a.text.length?Object(R.a)(this.__test,m.LibraryNamesData.data):void 0}},{key:"__test",value:function(t){return t.includes(j.a.text.toLowerCase())}}]),t}()).\u0275fac=function(t){return new(t||b)(_.Tb(S.a))},b.\u0275prov=_.Gb({token:b,factory:b.\u0275fac,providedIn:A}),b),B=i("3Pt+"),C=i("AytR"),D=((l=function(){function t(){a(this,t),this.image={src:C.a.assets+"clear-field-button.png",width:16,height:15}}return c(t,[{key:"clearSearch",value:function(){j.a.text="",k.data=void 0}}]),t}()).\u0275fac=function(t){return new(t||l)},l.\u0275cmp=_.Eb({type:l,selectors:[["clear-field-button"]],decls:1,vars:14,consts:[["role","button",3,"click"]],template:function(t,n){1&t&&(_.Pb(0,"div",0),_.Wb("click",function(){return n.clearSearch()}),_.Ob()),2&t&&_.nc("display","inline-block")("position","relative")("top","3px")("width",n.image.width+"px")("height",n.image.height+"px")("background-image","url("+n.image.src+")")("background-repeat","no-repeat")},encapsulation:2}),l),K=((f=function(){function t(n,e){a(this,t),this.__seachLibrariesInput=n,this.__searchLibraries=e}return c(t,[{key:"input",get:function(){return this.__seachLibrariesInput.data}},{key:"search",value:function(){this.__searchLibraries.go()}}]),t}()).\u0275fac=function(t){return new(t||f)(_.Kb(P),_.Kb(E))},f.\u0275cmp=_.Eb({type:f,selectors:[["search-library-names"]],decls:6,vars:9,consts:[[1,"library-name-search-input-container","validating-input-container"],[3,"for","hidden"],["autocomplete","on",1,"validating-input",3,"type","id","name","placeholder","minLength","ngModel","input","ngModelChange"]],template:function(t,n){1&t&&(_.Pb(0,"div"),_.Pb(1,"div",0),_.Pb(2,"label",1),_.pc(3),_.Ob(),_.Pb(4,"input",2),_.Wb("input",function(){return n.search()})("ngModelChange",function(t){return n.input.objectToBind[n.input.propertyToBind]=t}),_.Ob(),_.Lb(5,"clear-field-button"),_.Ob(),_.Ob()),2&t&&(_.Ab(2),_.cc("for",n.input.id),_.bc("hidden",n.input.hideLabel),_.Ab(1),_.rc(" ",n.input.label," "),_.Ab(1),_.cc("id",n.input.id),_.bc("type",n.input.__type)("name",n.input.id)("placeholder",n.input.label)("minLength",n.input.minLength)("ngModel",n.input.objectToBind[n.input.propertyToBind]))},directives:[B.a,B.c,B.f,D],styles:["div.library-name-search-input-container[_ngcontent-%COMP%] {\n\t\t\tmargin: 5px auto 10px 30px;\n\t\t}","clear-field-button[_ngcontent-%COMP%] {\n\t\t\tposition: relative;  right: 35px; z-index: 1000;\n\t\t}","input[_ngcontent-%COMP%] {margin-left:auto;  margin-right: auto;  padding-right: 30px;}"]}),f),H=i("zTi3"),M=i("tyNb"),F=function(t){return["/library",t,"page",1]};function X(t,n){if(1&t&&(_.Pb(0,"li"),_.Pb(1,"a",1),_.pc(2),_.Ob(),_.Ob()),2&t){var e=n.$implicit;_.Ab(1),_.bc("routerLink",_.dc(2,F,e)),_.Ab(1),_.qc(e)}}var G,W=((G=function t(){a(this,t)}).\u0275fac=function(t){return new(t||G)},G.\u0275cmp=_.Eb({type:G,selectors:[["library-links"]],inputs:{labels:"labels"},decls:3,vars:1,consts:[[4,"ngFor","ngForOf"],[3,"routerLink"]],template:function(t,n){1&t&&(_.Pb(0,"div"),_.Pb(1,"ul"),_.oc(2,X,3,4,"li",0),_.Ob(),_.Ob()),2&t&&(_.Ab(2),_.bc("ngForOf",n.labels))},directives:[g.h,M.d],encapsulation:2}),G);function J(t,n){1&t&&(_.Pb(0,"p"),_.pc(1,"You have no libraries"),_.Ob())}function q(t,n){if(1&t&&(_.Nb(0),_.Lb(1,"search-library-names",1),_.Lb(2,"library-links",2),_.Mb()),2&t){var e=_.Yb();_.Ab(2),_.bc("labels",e.names)}}var z,Q,U,V,Y,Z,$,tt,nt,et,rt=((U=function(){function t(){a(this,t),this.libraryNames=m.LibraryNamesData,this.libNameSearchResults=k}return c(t,[{key:"librariesExist",get:function(){return this.libraryNames.data&&this.libraryNames.data.length}},{key:"librariesDontExist",get:function(){return this.libraryNames.data&&Object(T.a)(this.libraryNames.data.length)}},{key:"names",get:function(){return this.libNameSearchResults.data?this.libNameSearchResults.data:this.libraryNames.data}}]),t}()).\u0275fac=function(t){return new(t||U)},U.\u0275cmp=_.Eb({type:U,selectors:[["libraries-viewer"]],decls:2,vars:2,consts:[[4,"ngIf"],["clearFormOnInit",""],[3,"labels"]],template:function(t,n){1&t&&(_.oc(0,J,2,0,"p",0),_.oc(1,q,3,1,"ng-container",0)),2&t&&(_.bc("ngIf",n.librariesDontExist),_.Ab(1),_.bc("ngIf",n.librariesExist))},directives:[g.i,K,H.a,W],encapsulation:2}),U),it=((Q=function(){function t(){a(this,t)}return c(t,[{key:"creatingNewLibrary",get:function(){return v.a.beingCreated},set:function(t){v.a.beingCreated=t}},{key:"label",get:function(){return this.creatingNewLibrary?"Cancel":"New Library"}}]),t}()).\u0275fac=function(t){return new(t||Q)},Q.\u0275cmp=_.Eb({type:Q,selectors:[["new-library-button"]],decls:3,vars:1,consts:[[1,"input-container"],[1,"btn","btn-default",3,"click"]],template:function(t,n){1&t&&(_.Pb(0,"div",0),_.Pb(1,"button",1),_.Wb("click",function(){return n.creatingNewLibrary=!n.creatingNewLibrary}),_.pc(2),_.Ob(),_.Ob()),2&t&&(_.Ab(2),_.rc(" ",n.label," "))},encapsulation:2}),Q),at=((z=function t(){a(this,t)}).\u0275fac=function(t){return new(t||z)},z.\u0275mod=_.Ib({type:z}),z.\u0275inj=_.Hb({}),z),ot=i("ERbj"),ct=i("mrSG"),ut=i("RuhN"),st=i("ezBO"),bt=((V=function(){function t(n,e){a(this,t),this.__realmFn=n,this.__sessionIDInBrowser=e}return c(t,[{key:"go",value:function(t){return Object(ct.__awaiter)(this,void 0,void 0,regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.__realmFn.call("pub_createAndReturnLibrary",{name:t,sessionID:this.__sessionIDInBrowser.get()});case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}},n,this)}))}}]),t}()).\u0275fac=function(t){return new(t||V)(_.Tb(ut.a),_.Tb(st.a))},V.\u0275prov=_.Gb({token:V,factory:V.\u0275fac,providedIn:at}),V),ft=i("bW8z"),lt=i("Omw0"),dt=i("X0HJ"),pt=i("KwsU"),ht=((tt=function(){function t(n){a(this,t),this.__processGetLibraries=n}return c(t,[{key:"go",value:function(){return Object(ct.__awaiter)(this,void 0,void 0,regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return dt.a.setSuccess("Library created"),v.a.beingCreated=!1,t.next=4,this.__refreshLoadedLibraryNames();case 4:case"end":return t.stop()}},t,this)}))}},{key:"__refreshLoadedLibraryNames",value:function(){return Object(ct.__awaiter)(this,void 0,void 0,regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.__processGetLibraries.go();case 2:case"end":return t.stop()}},t,this)}))}}]),t}()).\u0275fac=function(t){return new(t||tt)(_.Tb(pt.a))},tt.\u0275prov=_.Gb({token:tt,factory:tt.\u0275fac,providedIn:at}),tt),gt=(($=function(n){t(i,n);var r=e(i);function i(t,n){return a(this,i),r.call(this,t,n)}return i}(ft.a)).\u0275fac=function(t){return new(t||$)(_.Tb(lt.a),_.Tb(ht))},$.\u0275prov=_.Gb({token:$,factory:$.\u0275fac,providedIn:at}),$),yt=((Z=function(n){t(i,n);var r=e(i);function i(t,n){return a(this,i),r.call(this,t,n)}return i}(ot.a)).\u0275fac=function(t){return new(t||Z)(_.Tb(bt),_.Tb(gt))},Z.\u0275prov=_.Gb({token:Z,factory:Z.\u0275fac,providedIn:at}),Z),mt=((Y=function(n){t(i,n);var r=e(i);function i(){var t;return a(this,i),(t=r.call(this)).data.id="library-name-input",t.data.propertyToBind="name",t.data.objectToBind=v.a,t.data.label="Library Name",t.data.isValid=[function(){return 0!==t.data.objectToBind[t.data.propertyToBind].length},function(){return Object(T.a)(t.data.objectToBind[t.data.propertyToBind].includes(" "))}],t.data.errorMessage=["The library name cannot be empty","The library name cannot include spaces"],t}return i}(x.h)).\u0275fac=function(t){return new(t||Y)},Y.\u0275prov=_.Gb({token:Y,factory:Y.\u0275fac,providedIn:at}),Y),vt=i("J+9Z"),wt=((nt=function(n){t(i,n);var r=e(i);function i(t){return a(this,i),r.call(this,t)}return i}(x.b)).\u0275fac=function(t){return new(t||nt)(_.Kb(mt))},nt.\u0275cmp=_.Eb({type:nt,selectors:[["new-library-form-input"]],features:[_.xb],decls:1,vars:1,consts:[[3,"data"]],template:function(t,n){1&t&&_.Lb(0,"app-validating-form-input",0),2&t&&_.bc("data",n.input)},directives:[vt.a],encapsulation:2}),nt),_t=i("uQJg"),Lt=((et=function t(n,e){a(this,t),this.process=n,this.libraryNameInput=e}).\u0275fac=function(t){return new(t||et)(_.Kb(yt),_.Kb(mt))},et.\u0275cmp=_.Eb({type:et,selectors:[["new-library-form"]],decls:4,vars:3,consts:[[1,"form-container"],[3,"label","validatingInputs","iDoThis"]],template:function(t,n){1&t&&(_.Pb(0,"div",0),_.Pb(1,"form"),_.Lb(2,"new-library-form-input"),_.Lb(3,"submit-form-button",1),_.Ob(),_.Ob()),2&t&&(_.Ab(3),_.bc("label","Create")("validatingInputs",n.libraryNameInput)("iDoThis",n.process))},directives:[wt,_t.a],encapsulation:2}),et);function It(t,n){1&t&&_.Lb(0,"new-library-form",3)}var Ot,kt,Tt,jt,xt,Nt=((Ot=function(){function t(n){a(this,t),this.heading="Your Libraries",this.newLibrary=v.a,this.__libraryNames=m.LibraryNamesData,n.setTitle(y.a.go([this.heading]))}return c(t,[{key:"loadingStatus",get:function(){return{waiting:Object(w.b)(this.__libraryNames.data)}},set:function(t){}}]),t}()).\u0275fac=function(t){return new(t||Ot)(_.Kb(L.b))},Ot.\u0275cmp=_.Eb({type:Ot,selectors:[["app-libraries"]],decls:5,vars:3,consts:[["clearAlertsOnDestroy",""],[3,"heading","loadingStatus"],["clearFormOnInit","",4,"ngIf"],["clearFormOnInit",""]],template:function(t,n){1&t&&(_.Pb(0,"div",0),_.Pb(1,"loading-content-section",1),_.Lb(2,"libraries-viewer"),_.Ob(),_.Lb(3,"new-library-button"),_.oc(4,It,1,0,"new-library-form",2),_.Ob()),2&t&&(_.Ab(1),_.bc("heading",n.heading)("loadingStatus",n.loadingStatus),_.Ab(3),_.bc("ngIf",n.newLibrary.beingCreated))},directives:[I.a,O.a,rt,it,g.i,Lt,H.a],encapsulation:2}),Ot),At=i("rEd/"),Pt=i("RNeQ"),Rt=((Tt=function t(){a(this,t)}).\u0275fac=function(t){return new(t||Tt)},Tt.\u0275mod=_.Ib({type:Tt}),Tt.\u0275inj=_.Hb({imports:[[g.b,B.b,A,Pt.a]]}),Tt),St=((kt=function t(){a(this,t)}).\u0275fac=function(t){return new(t||kt)},kt.\u0275mod=_.Ib({type:kt}),kt.\u0275inj=_.Hb({imports:[[g.b,h.a,Rt,M.e]]}),kt),Et=i("q6+g"),Bt=i("Keh9"),Ct=((xt=function t(){a(this,t)}).\u0275fac=function(t){return new(t||xt)},xt.\u0275mod=_.Ib({type:xt}),xt.\u0275inj=_.Hb({imports:[[g.b,Et.a,Bt.a,at]]}),xt),Dt=((jt=function t(){a(this,t)}).\u0275fac=function(t){return new(t||jt)},jt.\u0275mod=_.Ib({type:jt}),jt.\u0275inj=_.Hb({imports:[[g.b,p.a,h.a,At.a,Ct,St,M.e.forChild([{path:"",pathMatch:"full",component:Nt,canActivate:[d.a]},{path:"**",redirectTo:""}])]]}),jt)},Keh9:function(t,n,e){"use strict";e.d(n,"a",function(){return c});var r=e("ofXK"),i=e("K9Zg"),o=e("fXoL"),c=function(){var t=function t(){a(this,t)};return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=o.Ib({type:t}),t.\u0275inj=o.Hb({imports:[[r.b,i.a]]}),t}()},"rEd/":function(t,n,e){"use strict";e.d(n,"a",function(){return b});var r,i,o=e("ofXK"),c=e("IRUQ"),u=e("fXoL"),s=((i=function t(){a(this,t)}).\u0275fac=function(t){return new(t||i)},i.\u0275mod=u.Ib({type:i}),i.\u0275inj=u.Hb({imports:[[o.b]]}),i),b=((r=function t(){a(this,t)}).\u0275fac=function(t){return new(t||r)},r.\u0275mod=u.Ib({type:r}),r.\u0275inj=u.Hb({imports:[[o.b,c.a,s]]}),r)}}])}();