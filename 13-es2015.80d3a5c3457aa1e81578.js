(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"2RiK":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("EeQB"),a=r("Nplx"),o=r("tATp");function i(){var e=a.getDefaultsFor_SeparatorOptions();return e.order=o.__default_hmsOrder,e.includeTimezoneOffset=!0,e}function s(){var e=a.getDefaultsFor_YearSeparatorOptions();return e.order=o.__default_ymdOrder,e}t.getDateID=function(e){void 0===e&&(e=void 0);var t=o.__getMergedOptions(e,s);return o.__getAssembledIDParts(t,function(){var e=n.getArray_yearMonthDay(t.includeFullYear);return{y:e[0],m:e[1],d:e[2]}})},t.getTimeID=function(e){void 0===e&&(e=void 0);var t=o.__getMergedOptions(e,i);return o.__getAssembledIDParts(t,function(){var e=n.getArray_hoursMinutesSeconds();return{h:e[0],m:e[1],s:e[2]}})+(t.includeTimezoneOffset?o.__getTimezoneOffset():"")},t.getDefaultsFor_getTimeIDOptions=i,t.getDefaultsFor_getDateIDOptions=s},"4GQ/":function(e,t,r){"use strict";function n(e){return 1===String(e).length&&(e="0"+e),e}Object.defineProperty(t,"__esModule",{value:!0}),t.__ensureMoreThanOneDigitForEach=function(e){for(var t=[],r=-1;++r<e.length;)t.push(n(e[r]));return t},t.__ensureMoreThanOneDigit=n},"5vOa":function(e,t,r){"use strict";function n(e){return null==e}Object.defineProperty(t,"__esModule",{value:!0}),t.noValue=n,t.hasValue=function(e){return!n(e)}},"6sro":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.modifyObject=function(e,t){Object.assign(e,t)}},"8gK0":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("2RiK"),a=r("Nplx"),o=r("5vOa"),i=r("6sro");function s(){var e=a.getDefaultsFor_YearSeparatorOptions();e.ymdOrder=n.getDefaultsFor_getDateIDOptions().order;var t=n.getDefaultsFor_getTimeIDOptions();return e.hmsOrder=t.order,e.includeTimezoneOffset=t.includeTimezoneOffset,e}t.getDateTimeID=function(e){void 0===e&&(e=void 0);var t=s();o.hasValue(e)&&i.modifyObject(t,e),t.order=t.ymdOrder;var r=n.getDateID(t);t.order=t.hmsOrder;var a=n.getTimeID(t);return r+t.separator+a},t.getDefaultsFor_getDateTimeIDOptions=s},EeQB:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("Qsxu"),a=r("4GQ/");t.getArray_yearMonthDay=function(e){void 0===e&&(e=!1);var t=new Date,r=[String(t.getFullYear()),String(t.getMonth()+1),String(t.getDate())];return n.not(e)&&(r[0]=r[0].slice(2)),a.__ensureMoreThanOneDigitForEach(r)},t.getArray_hoursMinutesSeconds=function(){var e=new Date,t=[String(e.getHours()),String(e.getMinutes()),String(e.getSeconds())];return a.__ensureMoreThanOneDigitForEach(t)}},FlFK:function(e,t,r){"use strict";r.r(t),r.d(t,"AddImagesModule",function(){return Ie});var n=r("tHcr"),a=r("ySWE"),o=r("fXoL"),i=r("jhN1"),s=r("ofXK"),c=r("76kx"),u=r("mrSG");let l=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.Ib({type:e}),e.\u0275inj=o.Hb({}),e})();var d=r("WeJg"),g=r("8gK0"),f=r("rDaN"),p=r("fQ1K"),_=r("+cAX"),b=r("/1kH");function h([e,t]){if(Object(b.a)(Object(_.b)(e))||Object(b.a)(Object(_.b)(t)))throw new Error("Both items in the range array must be integers");if(e>t)throw new Error("In the range array, the min number must be less than or equal to the max number");let r=t-e+1;return Object(p.a)(Math.random()*r+e)}class m{static go(e){return{name:e.name||Object(g.getDateTimeID)()+"-"+h([1,1e3]),src:e.src,size:e.size||0,description:e.description||"image",tags:e.tags||[],date:e.date,location:e.location||{latitude:void 0,longitude:void 0},rating:e.rating}}}var v=r("0wL/");const O={data:void 0};var y=r("0bMq"),I=r("ezBO"),w=r("RuhN");let T=(()=>{class e{constructor(e,t){this.__sessionIDInBrowser=e,this.__realmFn=t}go(e){return Object(u.__awaiter)(this,void 0,void 0,function*(){return this.__realmFn.call("pub_addImages",{sessionID:this.__sessionIDInBrowser.get(),images:e})})}}return e.\u0275fac=function(t){return new(t||e)(o.Tb(I.a),o.Tb(w.a))},e.\u0275prov=o.Gb({token:e,factory:e.\u0275fac,providedIn:l}),e})();var D=r("bW8z"),j=r("X0HJ"),F=r("+m4A"),A=r("Cz6o"),M=r("7mmc");let P=(()=>{class e extends M.a{go(e){const t=Object.create(null,{go:{get:()=>super.go}});return Object(u.__awaiter)(this,void 0,void 0,function*(){e.message.includes(F.b)?j.a.setError(A.c):e.message.includes(F.e)?j.a.setError(A.b):yield t.go.call(this,e)})}}return e.\u0275fac=function(t){return S(t||e)},e.\u0275prov=o.Gb({token:e,factory:e.\u0275fac,providedIn:l}),e})();const S=o.Rb(P);var E=r("nQvA"),R=r("cc1c"),k=r("bj0Z");let L=(()=>{class e{constructor(e,t){this.__allImagesPaginator=e,this.__setCurrentPageImages=t}go(){return Object(u.__awaiter)(this,void 0,void 0,function*(){yield this.refreshAllImages(),j.a.setSuccess(E.b)})}refreshAllImages(){return Object(u.__awaiter)(this,void 0,void 0,function*(){yield this.__setCurrentPageImages.go(1,this.__allImagesPaginator,{reload:!0})})}}return e.\u0275fac=function(t){return new(t||e)(o.Tb(R.a),o.Tb(k.a))},e.\u0275prov=o.Gb({token:e,factory:e.\u0275fac,providedIn:l}),e})(),N=(()=>{class e extends D.a{constructor(e,t){super(e,t)}}return e.\u0275fac=function(t){return new(t||e)(o.Tb(P),o.Tb(L))},e.\u0275prov=o.Gb({token:e,factory:e.\u0275fac,providedIn:l}),e})(),z=(()=>{class e extends y.a{constructor(e,t){super(e,t)}}return e.\u0275fac=function(t){return new(t||e)(o.Tb(T),o.Tb(N))},e.\u0275prov=o.Gb({token:e,factory:e.\u0275fac,providedIn:l}),e})();var G=r("ERbj"),x=r("5Foj"),B=r("LJC9");let C=(()=>{class e{constructor(e,t){this.__userFileStorage=e,this.__emailInBrowser=t}go(e){return Object(u.__awaiter)(this,void 0,void 0,function*(){O.data=void 0;let t=this.__emailInBrowser.get();return this.__userFileStorage.addFilesAndReturnURLs(e,t)})}}return e.\u0275fac=function(t){return new(t||e)(o.Tb(x.a),o.Tb(B.a))},e.\u0275prov=o.Gb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var K=r("o0Rh");let Q=(()=>{class e{go(e){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=o.Gb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),U=(()=>{class e{go(e){return Object(u.__awaiter)(this,void 0,void 0,function*(){O.data=e})}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=o.Gb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),q=(()=>{class e extends K.a{constructor(e,t){super(e,t)}}return e.\u0275fac=function(t){return new(t||e)(o.Tb(Q),o.Tb(U))},e.\u0275prov=o.Gb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),H=(()=>{class e extends G.a{constructor(e,t){super(e,t)}}return e.\u0275fac=function(t){return new(t||e)(o.Tb(C),o.Tb(q))},e.\u0275prov=o.Gb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),J=(()=>{class e{constructor(e,t){this.__processSaveNewImageRecords=e,this.__processStoreImageFiles=t}go(e){return Object(u.__awaiter)(this,void 0,void 0,function*(){yield d.a.go(()=>Object(u.__awaiter)(this,void 0,void 0,function*(){yield this.__processStoreImageFiles.go(e),v.NewImagesData.data=this.__getNewAppImages(e,O.data),yield this.__processSaveNewImageRecords.go(v.NewImagesData.data)}),n.a)})}__getNewAppImages(e,t){return Object(f.a)(e.length,r=>this.__getAppImage(e[r],t[r]))}__getAppImage(e,t){return m.go({name:e.name,src:t,size:e.size,date:new Date(e.lastModified)})}}return e.\u0275fac=function(t){return new(t||e)(o.Tb(z),o.Tb(H))},e.\u0275prov=o.Gb({token:e,factory:e.\u0275fac,providedIn:l}),e})();var Y=r("E+hl"),V=r("rEdB"),W=r("g3zJ");let X=(()=>{class e{constructor(){this.__byteLimitPerUpload=31457280,this.____legalTypes=["image/jpeg","image/jpg","image/png"]}get __legalTypes(){return Object(f.a)(this.____legalTypes.length,e=>this.____legalTypes[e].split("/")[1])}passes(e){return class{static go(e){return"size",function(e,t,r){return Object(W.a)(e),function(e,t,r){if(null==e)return[];var n=0,a=e.length,o=0;for(void 0===o&&(o=e[0],n=1);n<a;n++)o=t(o,e[n]);return o}(e,(e,t)=>(Object(V.a)(t),((e,t)=>e+t)(e,t)))}(function(e,t){let r=new Array(e),n=-1;for(;++n<e;)r[n]=t(n);return r}((t=e).length,e=>Object(Y.a)("size",t[e])));var t}}.go(e)>this.__byteLimitPerUpload?this.__alertErrorAndReturnFalse("That exceeds the 30 MB limit per upload"):!this.__includesIllegalTypes(e)||this.__alertErrorAndReturnFalse(`The files must be one of these types: ${this.__legalTypes.join(", ")}`)}__alertErrorAndReturnFalse(e){return j.a.setError(e),!1}__includesIllegalTypes(e){for(let t=0,r=e.length;t<r;++t)if(Object(b.a)(this.____legalTypes.includes(e[t].type)))return!0;return!1}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=o.Gb({token:e,factory:e.\u0275fac,providedIn:l}),e})(),Z=(()=>{class e{constructor(e,t){this.__uploadImages=e,this.__requirementsCheck=t}upload(e){return Object(u.__awaiter)(this,void 0,void 0,function*(){this.__requirementsCheck.passes(e)&&(yield this.__uploadImages.go(e))})}}return e.\u0275fac=function(t){return new(t||e)(o.Kb(J),o.Kb(X))},e.\u0275cmp=o.Eb({type:e,selectors:[["upload-images-from-device"]],decls:7,vars:0,consts:[[1,"input-group"],["type","file","multiple","","id","inputGroupFile01",1,"custom-file-input",2,"display","none",3,"change"],["for","inputGroupFile01",1,"custom-file-input","btn","btn-default"]],template:function(e,t){1&e&&(o.Pb(0,"div"),o.Pb(1,"p"),o.pc(2,"Choose images from your own device:"),o.Ob(),o.Pb(3,"div",0),o.Pb(4,"input",1),o.Wb("change",function(e){return t.upload(e.target.files)}),o.Ob(),o.Pb(5,"label",2),o.pc(6," Choose File(s) "),o.Ob(),o.Ob(),o.Ob())},styles:["div.input-group[_ngcontent-%COMP%] {margin: auto;}"]}),e})(),$=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.Ib({type:e}),e.\u0275inj=o.Hb({}),e})(),ee=(()=>{class e{constructor(e){this.__processSaveNewImageRecords=e}go(e){return Object(u.__awaiter)(this,void 0,void 0,function*(){v.NewImagesData.data=[m.go({name:void 0,src:e,size:0})],yield this.__processSaveNewImageRecords.go(v.NewImagesData.data)})}}return e.\u0275fac=function(t){return new(t||e)(o.Tb(z))},e.\u0275prov=o.Gb({token:e,factory:e.\u0275fac,providedIn:$}),e})();var te=r("HgVo"),re=r("TJMr");let ne=(()=>{class e extends re.h{constructor(){super(),this.data.id="image-url-input",this.data.objectToBind=te.a,this.data.propertyToBind="data",this.data.label="Image URL",this.data.isValid=[()=>this.data.objectToBind[this.data.propertyToBind].length>0,()=>Object(b.a)(this.data.objectToBind[this.data.propertyToBind].includes(" "))],this.data.errorMessage=["The url input cannot be empty","The url cannot contain spaces"],this.data.prompt="Or, enter image URL if image is stored elsewhere:"}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=o.Gb({token:e,factory:e.\u0275fac,providedIn:$}),e})();var ae=r("J+9Z");let oe=(()=>{class e extends re.b{constructor(e){super(e)}}return e.\u0275fac=function(t){return new(t||e)(o.Kb(ne))},e.\u0275cmp=o.Eb({type:e,selectors:[["image-url-form-input"]],features:[o.xb],decls:1,vars:1,consts:[[3,"data"]],template:function(e,t){1&e&&o.Lb(0,"app-validating-form-input",0),2&e&&o.bc("data",t.input)},directives:[ae.a],encapsulation:2}),e})();var ie=r("zTi3"),se=r("Tx7J"),ce=r("uQJg");let ue=(()=>{class e{constructor(e,t){this.saveImageURL=e,this.imageURLInput=t}}return e.\u0275fac=function(t){return new(t||e)(o.Kb(ee),o.Kb(ne))},e.\u0275cmp=o.Eb({type:e,selectors:[["enter-image-url"]],decls:2,vars:3,consts:[["clearFormOnInit","","clearAlertsOnDestroy",""],[3,"label","validatingInputs","iDoThis"]],template:function(e,t){1&e&&(o.Lb(0,"image-url-form-input",0),o.Lb(1,"submit-form-button",1)),2&e&&(o.Ab(1),o.bc("label","Save URL")("validatingInputs",t.imageURLInput)("iDoThis",t.saveImageURL))},directives:[oe,ie.a,se.a,ce.a],encapsulation:2}),e})();function le(e,t){1&e&&o.Lb(0,"big-loading-spinner")}function de(e,t){1&e&&(o.Pb(0,"div"),o.Lb(1,"upload-images-from-device"),o.Lb(2,"enter-image-url"),o.Ob())}let ge=(()=>{class e{constructor(e){this.__title=e,this.heading="Add Images",this.instructions="The images can come from your own device or from somewhere\n\t\telse in the web.",this.warning="Do not upload highly sensitive images. They will be accessible at public URLs.",this.__title.setTitle(a.a.go([this.heading]))}get savingNewImages(){return n.a.waiting}}return e.\u0275fac=function(t){return new(t||e)(o.Kb(i.b))},e.\u0275cmp=o.Eb({type:e,selectors:[["add-images"]],decls:10,vars:5,consts:[[1,"warning-text"],[4,"ngIf"]],template:function(e,t){1&e&&(o.Pb(0,"header"),o.Pb(1,"h2"),o.pc(2),o.Ob(),o.Ob(),o.Pb(3,"div"),o.Pb(4,"p"),o.pc(5),o.Ob(),o.Ob(),o.Pb(6,"p",0),o.pc(7),o.Ob(),o.oc(8,le,1,0,"big-loading-spinner",1),o.oc(9,de,3,0,"div",1)),2&e&&(o.Ab(2),o.qc(t.heading),o.Ab(3),o.qc(t.instructions),o.Ab(2),o.qc(t.warning),o.Ab(1),o.bc("ngIf",t.savingNewImages),o.Ab(1),o.bc("ngIf",!t.savingNewImages))},directives:[s.i,c.a,Z,ue],encapsulation:2}),e})();var fe=r("H90k"),pe=r("IRUQ"),_e=r("q6+g"),be=r("C1T0"),he=r("W5s9"),me=r("Keh9");let ve=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.Ib({type:e}),e.\u0275inj=o.Hb({imports:[[s.b,_e.a,be.a,he.a,me.a,$]]}),e})();var Oe=r("3Pt+"),ye=r("tyNb");let Ie=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.Ib({type:e}),e.\u0275inj=o.Hb({imports:[[l,pe.a,s.b,ve,Oe.b,ye.e.forChild([{path:"",pathMatch:"full",component:ge,canActivate:[fe.a]}])]]}),e})()},Nplx:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("QyqC");function a(){return{separator:n.__default_separator,separateEach:n.__default_separateEach}}t.getDefaultsFor_SeparatorOptions=a,t.getDefaultsFor_YearSeparatorOptions=function(){var e=a();return e.includeFullYear=n.__default_includeFullYear,e}},Qsxu:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.not=function(e){return!e}},QyqC:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.__default_separator="-",t.__default_separateEach=!1,t.__default_includeFullYear=!1},tATp:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("6sro"),a=r("5vOa");t.__getAssembledIDParts=function(e,t){if(e.order=e.order.toLowerCase(),3!==e.order.length)throw new Error("Input must be string 3 characters long");var r=e.separateEach?e.separator:"",n=t();return n[e.order[0]]+r+n[e.order[1]]+r+n[e.order[2]]},t.__getTimezoneOffset=function(){var e=(new Date).getTimezoneOffset(),t=e<0?"+":"-",r=String(e/60);return 1===r.split(".")[0].length&&(r="0"+r),t+r},t.__getMergedOptions=function(e,t){var r=t();return a.hasValue(e)&&n.modifyObject(r,e),r},t.__default_ymdOrder="ymd",t.__default_hmsOrder="hms"}}]);