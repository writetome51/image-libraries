!function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function e(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}function n(t,e){return(n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function r(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}();return function(){var n,r=a(t);if(e){var o=a(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return i(this,n)}}function i(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{Keh9:function(t,e,n){"use strict";n.d(e,"a",function(){return c});var r=n("ofXK"),i=n("K9Zg"),a=n("fXoL"),c=function(){var t=function t(){o(this,t)};return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.Ib({type:t}),t.\u0275inj=a.Hb({imports:[[r.b,i.a]]}),t}()},QPyj:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var r=n("pFFK"),i=function(){var t=function t(){o(this,t)};return t.AllImagesComponent="page/:".concat(r.a.pageNumber),t.defaultPath="page/1",t}()},mEd3:function(t,i,a){"use strict";a.r(i),a.d(i,"FullSizeImageViewerModule",function(){return X});var c,u,s=a("H90k"),f=a("ofXK"),l=a("+iAp"),b=a("pFFK"),p=a("ySWE"),m=a("fXoL"),g=a("SrzP"),d=a("jhN1"),h=a("FPQd"),y=a("g2a5"),_=((c=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&n(t,e)}(i,t);var e=r(i);function i(){return o(this,i),e.apply(this,arguments)}return i}(y.a)).\u0275fac=function(t){return v(t||c)},c.\u0275cmp=m.Eb({type:c,selectors:[["full-size-image"]],features:[m.xb],decls:1,vars:2,consts:[[3,"src","alt"]],template:function(t,e){1&t&&m.Lb(0,"img",0),2&t&&m.bc("src",e.data.src,m.jc)("alt",e.data.description)},encapsulation:2}),c),v=m.Rb(_),I=((u=function t(){o(this,t)}).\u0275fac=function(t){return new(t||u)},u.\u0275cmp=m.Eb({type:u,selectors:[["image-name"]],decls:3,vars:0,consts:[["for","image-name","hidden",""],["type","text","id","image-name"]],template:function(t,e){1&t&&(m.Pb(0,"label",0),m.pc(1,"Image Name"),m.Ob(),m.Lb(2,"input",1))},encapsulation:2}),u),w=a("IT79"),O=a("tyNb"),j=function(t){return["/library",t,"page",1]};function P(t,e){if(1&t&&(m.Pb(0,"li"),m.Pb(1,"a",1),m.pc(2),m.Ob(),m.Ob()),2&t){var n=e.$implicit;m.Ab(1),m.bc("routerLink",m.dc(2,j,n.name)),m.Ab(1),m.rc(" ",n.name," ")}}var k,K,E=((K=function(){function t(e){o(this,t),this.__librariesInBrowser=e,this.libraries=[]}return e(t,[{key:"ngOnInit",value:function(){var t=this,e=this.__librariesInBrowser.get();this.libraries=Object(l.a)(function(e){return e._image_ids.includes(t.image._id)},Object.values(e))}}]),t}()).\u0275fac=function(t){return new(t||K)(m.Kb(w.a))},K.\u0275cmp=m.Eb({type:K,selectors:[["belongs-to-libraries"]],inputs:{image:"image"},decls:4,vars:1,consts:[[4,"ngFor","ngForOf"],[3,"routerLink"]],template:function(t,e){1&t&&(m.Pb(0,"p"),m.pc(1,"Belongs to Libraries:"),m.Ob(),m.Pb(2,"ul"),m.oc(3,P,3,4,"li",0),m.Ob()),2&t&&(m.Ab(3),m.bc("ngForOf",e.libraries))},directives:[f.h,O.d],encapsulation:2}),K),L=((k=function(){function t(e,n,r){o(this,t),this.__currentRoute=e,this.__title=n,this.__loadedImagesState=r,this.__title.setTitle(p.a.go(["Image"]))}return e(t,[{key:"getCurrentImage",value:function(){return this.__getImage(this.__currentRoute.params[b.a.imageName])}},{key:"__getImage",value:function(t){return Object(l.a)(function(e){return e.name===t},this.__loadedImagesState.getImages())[0]}}]),t}()).\u0275fac=function(t){return new(t||k)(m.Kb(g.a),m.Kb(d.b),m.Kb(h.a))},k.\u0275cmp=m.Eb({type:k,selectors:[["full-size-image-viewer"]],decls:3,vars:2,consts:[[3,"data"],[3,"image"]],template:function(t,e){1&t&&(m.Lb(0,"full-size-image",0),m.Lb(1,"image-name"),m.Lb(2,"belongs-to-libraries",1)),2&t&&(m.bc("data",e.getCurrentImage()),m.Ab(2),m.bc("image",e.getCurrentImage()))},directives:[_,I,E],encapsulation:2}),k);a("2Vo4"),a("HDdC"),a("XNiG"),a("itXk"),a("eIep"),a("lJxs"),a("IzEk"),a("jtHE"),a("1G5W");var A,F,R,S=((A=function t(){o(this,t)}).\u0275fac=function(t){return new(t||A)},A.\u0275mod=m.Ib({type:A}),A.\u0275inj=m.Hb({}),A),C=a("qLpH"),H=a("K9Zg"),N=a("Keh9"),T=a("QPyj"),z=((R=function(){function t(e,n){o(this,t),this.__router=e,this.__loadedImagesState=n}return e(t,[{key:"canActivate",value:function(){return this.__loadedImagesState.getImages().length>0||(this.__router.navigate(["/"+C.a.AllImagesModule]),!1)}}]),t}()).\u0275fac=function(t){return new(t||R)(m.Tb(O.b),m.Tb(h.a))},R.\u0275prov=m.Gb({token:R,factory:R.\u0275fac,providedIn:"root"}),R),X=((F=function t(){o(this,t)}).\u0275fac=function(t){return new(t||F)},F.\u0275mod=m.Ib({type:F}),F.\u0275inj=m.Hb({imports:[[f.b,S,H.a,O.e.forChild([{path:":".concat(b.a.imageName),component:L,canActivate:[s.a,z]},{path:"",pathMatch:"full",redirectTo:"/".concat(C.a.AllImagesModule,"/").concat(T.a.defaultPath)}]),N.a]]}),F)}}])}();