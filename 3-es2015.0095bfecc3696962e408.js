(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{5795:function(t,e,r){"use strict";r.d(e,"a",function(){return o});var a=r("fOwj"),n=r("nYfu");function o(t,e,r){return Object(a.a)(t,e,r),Object(n.a)(t,e,r.length),r.splice(t,e)}},"76kx":function(t,e,r){"use strict";r.d(e,"a",function(){return o});var a=r("AytR"),n=r("fXoL");let o=(()=>{class t{constructor(){this.bigSpinner={src:a.a.assets+"gear-200px.gif",width:225,height:225}}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Eb({type:t,selectors:[["big-loading-spinner"]],decls:2,vars:2,consts:[[1,"big-loading-spinner-container"],["alt","Waiting for result",3,"src","width"]],template:function(t,e){1&t&&(n.Pb(0,"div",0),n.Lb(1,"img",1),n.Ob()),2&t&&(n.Ab(1),n.bc("src",e.bigSpinner.src,n.jc)("width",e.bigSpinner.width))},styles:[".big-loading-spinner-container[_ngcontent-%COMP%]{margin:auto;width:600px;z-index:1000}.big-loading-spinner-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:relative;margin:auto}"]}),t})()},H90k:function(t,e,r){"use strict";r.d(e,"a",function(){return i});var a=r("tCSI"),n=r("fXoL"),o=r("ezBO"),s=r("tyNb");let i=(()=>{class t{constructor(t,e){this.__sessionIDInBrowser=t,this.__router=e}canActivate(){return this.__ifSessionIDExists_returnTrue_ifNot_redirectToLoginAndReturnFalse()}__ifSessionIDExists_returnTrue_ifNot_redirectToLoginAndReturnFalse(){return!!Object(a.a)(this.__sessionIDInBrowser.get())||(this.__router.navigate(["/"]),!1)}}return t.\u0275fac=function(e){return new(e||t)(n.Tb(o.a),n.Tb(s.b))},t.\u0275prov=n.Gb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},IRUQ:function(t,e,r){"use strict";r.d(e,"a",function(){return o});var a=r("ofXK"),n=r("fXoL");let o=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.Ib({type:t}),t.\u0275inj=n.Hb({imports:[[a.b]]}),t})()},MrnZ:function(t,e,r){"use strict";r.d(e,"a",function(){return h});var a=r("bW8z"),n=r("fXoL"),o=r("mrSG"),s=r("+m4A"),i=r("7mmc"),u=r("FPQd"),c=r("dmLf"),_=r("UD1H");let d=(()=>{class t extends i.a{constructor(t,e,r){super(e,r),this.__loadedImageState=t}go(t){const e=Object.create(null,{go:{get:()=>super.go}});return Object(o.__awaiter)(this,void 0,void 0,function*(){this.__loadedImageState.setDefault(),t.message.includes(s.a)||(yield e.go.call(this,t))})}}return t.\u0275fac=function(e){return new(e||t)(n.Tb(u.a),n.Tb(c.a),n.Tb(_.a))},t.\u0275prov=n.Gb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),g=(()=>{class t{constructor(t){this.__loadedImagesState=t}go(t){return Object(o.__awaiter)(this,void 0,void 0,function*(){this.__loadedImagesState.set(t)})}}return t.\u0275fac=function(e){return new(e||t)(n.Tb(u.a))},t.\u0275prov=n.Gb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),h=(()=>{class t extends a.a{constructor(t,e){super(t,e)}}return t.\u0275fac=function(e){return new(e||t)(n.Tb(d),n.Tb(g))},t.\u0275prov=n.Gb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},NSO3:function(t,e,r){"use strict";r.d(e,"a",function(){return n});var a=r("rZSF");function n(t,e,r=(()=>{})){!function(t,e,r){for(let a=r.length-1;a>-1;--a)t(r[a],a,r)&&e(0,a,r)}(t,(t,e,n)=>{let o=Object(a.a)(e,n);r(o,e,n)},e)}},OgJp:function(t,e,r){"use strict";r.d(e,"a",function(){return o});var a=r("nEhR"),n=r("fXoL");let o=(()=>{class t extends a.a{constructor(){super(localStorage,"page-size")}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=n.Gb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},OrrL:function(t,e,r){"use strict";r.d(e,"a",function(){return a});class a{constructor(t,e){this.__storeTotal=t,this.__storedTotal=e}set(){this.__storeTotal.go()}get(){return this.__storedTotal.get()}}},VKWq:function(t,e,r){"use strict";r.d(e,"a",function(){return n});var a=r("eh+W");const n=class{static go(t,e=a.a.data){t.setItemsPerLoad(3*a.a.data),t.setItemsPerPage(e),e>a.a.data&&t.setItemsPerLoad(e)}}},ZQWT:function(t,e,r){"use strict";r.d(e,"a",function(){return n});var a=r("ERbj");class n extends a.a{constructor(t,e){super(t,e),this.__getImageRecords=t,this.__interpretGetImageRecordsResult=e}}},bj0Z:function(t,e,r){"use strict";r.d(e,"a",function(){return s});var a=r("mrSG"),n=r("0wL/"),o=r("L8SX");const s=class{static go(t,e,r={reload:!1}){return Object(a.__awaiter)(this,void 0,void 0,function*(){try{yield e.setCurrentPageNumber(t,r),Object(o.a)(n.CurrentPageImagesData.data,e.getCurrentPage())}catch(a){console.log(a.message)}})}}},cc1c:function(t,e,r){"use strict";r.d(e,"a",function(){return p});var a=r("obkU"),n=r("fXoL"),o=r("OgJp"),s=r("w2/s"),i=r("OrrL"),u=r("XI5B"),c=r("oyll");let _=(()=>{class t extends i.a{constructor(t,e){super(t,e)}}return t.\u0275fac=function(e){return new(e||t)(n.Tb(u.a),n.Tb(c.a))},t.\u0275prov=n.Gb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var d=r("ZQWT"),g=r("mrSG"),h=r("ezBO"),f=r("RuhN");let l=(()=>{class t{constructor(t,e){this.__sessionIDInBrowser=t,this.__realmFn=e}go(t){return Object(g.__awaiter)(this,void 0,void 0,function*(){return yield this.__realmFn.call("pub_getUserImagesBatch",{sessionID:this.__sessionIDInBrowser.get(),batchSize:t.size,batchNumber:t.number})})}}return t.\u0275fac=function(e){return new(e||t)(n.Tb(h.a),n.Tb(f.a))},t.\u0275prov=n.Gb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var b=r("MrnZ");let m=(()=>{class t extends d.a{constructor(t,e){super(t,e)}}return t.\u0275fac=function(e){return new(e||t)(n.Tb(l),n.Tb(b.a))},t.\u0275prov=n.Gb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var P=r("FPQd");let I=(()=>{class t extends s.a{constructor(t,e,r){super(t,e,r)}}return t.\u0275fac=function(e){return new(e||t)(n.Tb(_),n.Tb(m),n.Tb(P.a))},t.\u0275prov=n.Gb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),p=(()=>{class t extends a.a{constructor(t,e){super(t,e)}}return t.\u0275fac=function(e){return new(e||t)(n.Tb(o.a),n.Tb(I))},t.\u0275prov=n.Gb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},fQ1K:function(t,e,r){"use strict";r.d(e,"a",function(){return i}),r.d(e,"b",function(){return u});var a=r("rEdB"),n=r("+cAX");function o(t,e){return Object(a.a)(t),Object(n.b)(t)?t:e(t)}function s(t){return(t<0?t-1:t)>>0}function i(t){return o(t,s)}function u(t){return o(t,()=>s(t)+1)}r("0O92")},obkU:function(t,e,r){"use strict";r.d(e,"a",function(){return L});var a=r("mrSG"),n=r("nYfu"),o=r("fOwj");function s(t,e,r){Object(o.a)(t,e,r);let a=r.length;return Object(n.a)(t,e,a),function(t,e,r){let a=r.length;t=s(a,t),e=s(a,e,a);let n=new Array(e-t),o=-1;for(;t<e;)n[++o]=r[t++];return n;function s(t,e,r){return null==e?r||0:e<0?Math.max(t+e,0):Math.min(e,t)}}(t,t+e===0?a:t+e,r)}var i=r("fQ1K");function u(t,e){if(2!==t.length)throw new Error("The range array must have exactly 2 numbers");let[r,a]=t;if(function(t){for(let e=0,r=t.length;e<r;++e)if("number"!=typeof t[e])throw new Error('Input must be of type "number"')}([r,a,e]),r>a)throw new Error("In the range array, the first number must be less than or equal to the second number");return e>=r&&e<=a}var c=r("/1kH"),_=r("4hzD");class d extends _.a{constructor(t=[],e){if(super(t),this.__pageConfigurator=e,!this.__pageConfigurator.setItemsPerPage||!this.__pageConfigurator.getItemsPerPage)throw new Error("__pageConfigurator must have methods setItemsPerPage() and getItemsPerPage()")}getPage(t){return this.__currentPageNumber=t,function(t,e,r){!function(t){let e=n();if(0===e||Object(c.a)(u([1,e],t)))throw new Error("The requested page does not exist")}(t);const a=e*(t-1);return function(t){return t===n()}(t)?function(t){return function(t,e){return s(-t,t,e)}(r.length-t,r)}(a):s(a,e,r);function n(){return Object(i.b)(r.length/e)}}(t,this.__pageConfigurator.getItemsPerPage(),this.data)}getCurrentPageNumber(){return this.__currentPageNumber}getTotalPages(){return Object(i.b)(this.data.length/this.__pageConfigurator.getItemsPerPage())}}class g{constructor(t,e,r){this.__loadPaginator=t,this.__load2pgTranslator=e,this.__pageLoadAccess=r,this.__data=[]}get(){return this.__data}async set(t){t!==this.__number&&await this.__getLoadAndSetPage("getLoadContainingPage",t)}async reset(t){await this.__getLoadAndSetPage("getRefreshedLoadContainingPage",t)}getNumber(){return this.__number}async __getLoadAndSetPage(t,e){let r=await this.__pageLoadAccess[t](e);this.__setPage_fromLoad(r,e),this.__number=e}__setPage_fromLoad(t,e){this.__loadPaginator.data=t,e=this.__load2pgTranslator.getPageNumberOfLoadFromAbsolutePage(e),this.__data=this.__loadPaginator.getPage(e)}}var h=r("tCSI");class f{constructor(t,e){this.__pageInfo=t,this.__loadInfo=e}getLoadNumberOfPage(t){let e=this.__pageInfo.getTotalPages();if(e<1)throw new Error("There is no load to get because the total number of pages is 0");if(Object(c.a)(u([1,e],t)))throw new Error("The requested page does not exist.");return Object(i.b)(t/this.__loadInfo.getPagesPerLoad())}loadContainsPage(t,e){return!Object(h.b)(t)&&t===this.getLoadNumberOfPage(e)}getPageNumberOfLoadFromAbsolutePage(t){let e=this.__loadInfo.getCurrentLoadNumber();if(Object(c.a)(this.loadContainsPage(e,t)))throw new Error("The current load does not contain the requested page");return t-(e-1)*this.__loadInfo.getPagesPerLoad()}}class l{constructor(t,e,r){this.__dataSource=t,this.__loadInfo=e,this.__load2pgTranslator=r}async getLoadContainingPage(t){return this.__currentLoadContainsPage(t)?this.__currentLoad:await this.getRefreshedLoadContainingPage(t)}async getRefreshedLoadContainingPage(t){return this.__setCurrentLoadNumber(this.__load2pgTranslator.getLoadNumberOfPage(t)),this.__currentLoad=await this.__dataSource.getLoad(...this.__getLoadParams()),this.__currentLoad}__currentLoadContainsPage(t){return this.__load2pgTranslator.loadContainsPage(this.__getCurrentLoadNumber(),t)}__getCurrentLoadNumber(){return this.__loadInfo.getCurrentLoadNumber()}__setCurrentLoadNumber(t){this.__loadInfo.setCurrentLoadNumber(t)}__getLoadParams(){return[this.__loadInfo.getCurrentLoadNumber(),this.__loadInfo.getItemsPerLoad(),this.__loadInfo.currentLoadIsLast()]}}var b=r("0O92");class m{constructor(t){this.__pageInfo=t}setItemsPerLoad(t){this.__errorIfValueIsNotOneOrGreater(t,"items per load"),this.__checkValueOf_itemsPerLoad(t)}getItemsPerLoad(){if(Object(h.b)(this.__itemsPerLoad))throw new Error("The 'itemsPerLoad' has no value");return this.__checkValueOf_itemsPerLoad(),this.__itemsPerLoad}setCurrentLoadNumber(t){if(void 0!==t&&Object(c.a)(u([1,this.getTotalLoads()],t)))throw new Error("You cannot set currentLoadNumber to a value outside the range \n\t\t\t\tof totalLoads");this.__currentLoadNumber=t}getCurrentLoadNumber(){return this.__currentLoadNumber}currentLoadIsLast(){return this.getCurrentLoadNumber()===this.getTotalLoads()}getTotalLoads(){return Object(i.b)(this.__pageInfo.getTotalPages()/this.getPagesPerLoad())}getPagesPerLoad(){return this.getItemsPerLoad()/this.__pageInfo.getItemsPerPage()}__errorIfValueIsNotOneOrGreater(t,e){if(Object(b.a)(t),t<1)throw new Error(`The "${e}" must be at least 1.`)}__checkValueOf_itemsPerLoad(t){let e=this.__itemsPerLoad;Object(h.a)(t)&&(this.__itemsPerLoad=t),this.__ensure_itemsPerLoad_isCompatibleWith_itemsPerPage(),e!==this.__itemsPerLoad&&(this.__currentLoadNumber=void 0)}__ensure_itemsPerLoad_isCompatibleWith_itemsPerPage(){let t=this.__pageInfo.getItemsPerPage();if(Object(h.a)(t)){if(this.__itemsPerLoad<t)throw new Error("The items per load cannot be less than items per page");for(;this.__itemsPerLoad%t!=0;)--this.__itemsPerLoad}}}class P{constructor(t){this.__dataSource=t}setItemsPerPage(t){if(Object(b.a)(t),t<1)throw new Error("The number of items per page must be at least 1");this.__itemsPerPage=t}getItemsPerPage(){return this.__itemsPerPage}getTotalPages(){return Object(i.b)(this.__dataSource.dataTotal/this.getItemsPerPage())}}var I=r("VKWq"),p=r("0wL/");class L extends class extends class{constructor(t,e=[]){this.__setup=t,this.__setup(...e)}setItemsPerLoad(t){this.__loadInfo.setItemsPerLoad(t)}getItemsPerLoad(){return this.__loadInfo.getItemsPerLoad()}setItemsPerPage(t){this.__pageInfo.setItemsPerPage(t)}getItemsPerPage(){return this.__pageInfo.getItemsPerPage()}getTotalPages(){return this.__pageInfo.getTotalPages()}async setCurrentPageNumber(t,e={reload:!1}){e.reload?await this.__loadedPage.reset(t):await this.__loadedPage.set(t)}getCurrentPageNumber(){return this.__loadedPage.getNumber()}getCurrentPage(){return this.__loadedPage.get()}}{constructor(t){super(function(t){this.__pageInfo=new P(t),this.__loadInfo=new m(this.__pageInfo),this.__loadedPage=function(t){let e,{dataSource:r,pageInfo:a,loadInfo:n}=t,o=new f(a,n),s=new l(r,n,o);return e=new d([],a),new g(e,o,s)}({dataSource:t,pageInfo:this.__pageInfo,loadInfo:this.__loadInfo})},[t])}}{constructor(t,e){super(e),this.__pageSizeInBrowser=t,this.__dataSource=e,I.a.go(this,this.__pageSizeInBrowser.get())}setCurrentPageNumber(t,e={reload:!1}){const r=Object.create(null,{setCurrentPageNumber:{get:()=>super.setCurrentPageNumber}});return Object(a.__awaiter)(this,void 0,void 0,function*(){(Object(h.b)(this.__dataSource.dataTotal)||e.reload)&&(yield this.__dataSource.set_dataTotal()),t=this.__assurePageDoesntExceedLimit(t),yield r.setCurrentPageNumber.call(this,t,e).catch(()=>{})})}setItemsPerPage(t){super.setItemsPerPage(t),p.LoadConfigurationData.size=this.getItemsPerLoad()}setItemsPerLoad(t){super.setItemsPerLoad(t),p.LoadConfigurationData.size=this.getItemsPerLoad()}__assurePageDoesntExceedLimit(t){const e=this.getTotalPages();return t>e?e:t}}},rZSF:function(t,e,r){"use strict";r.d(e,"a",function(){return n});var a=r("5795");function n(t,e){return Object(a.a)(t,1,e)[0]}},"w2/s":function(t,e,r){"use strict";r.d(e,"a",function(){return i});var a=r("mrSG"),n=r("tHcr"),o=r("WeJg"),s=r("0wL/");class i{constructor(t,e,r){this.__dataTotal=t,this.__setLoadedImages=e,this.__loadedImageState=r}get dataTotal(){return this.__dataTotal.get()}set_dataTotal(){return Object(a.__awaiter)(this,void 0,void 0,function*(){yield this.__dataTotal.set()})}getLoad(t,e,r){return Object(a.__awaiter)(this,void 0,void 0,function*(){return yield o.a.go(()=>Object(a.__awaiter)(this,void 0,void 0,function*(){return s.LoadConfigurationData.number=t,yield this.__setLoadedImages.go(s.LoadConfigurationData),this.__loadedImageState.getImages()}),n.a)})}}}}]);