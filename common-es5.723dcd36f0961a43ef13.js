!function(){function t(e,n,r){return(t=d()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var i=new(Function.bind.apply(t,r));return n&&c(i,n.prototype),i}).apply(null,arguments)}function e(t){return function(t){if(Array.isArray(t))return n(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function r(t,e,n){return(r="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=h(t)););return t}(t,e);if(r){var i=Object.getOwnPropertyDescriptor(r,e);return i.get?i.get.call(n):i.value}})(t,e,n||t)}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e)}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t){var e=d();return function(){var n,r=h(t);if(e){var i=h(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return f(this,n)}}function f(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?l(t):e}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function d(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}function h(t){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"+nN0":function(t,e,n){"use strict";n.d(e,"a",function(){return d});var r,i=n("mrSG"),o=n("TJMr"),c=n("pQSM"),f=Object(c.a)(function(t,e){var n=e[0];if(t instanceof o.d)t.data.objectToBind=n,t.data.propertyToMatch&&(t.data.objectToMatch=n);else for(var r=0,i=t.data.length;r<i;++r){var u=t.data[r];u.objectToBind=n,u.propertyToMatch&&(u.objectToMatch=n)}}),l=n("rtuT"),d=(r=function(t){a(n,t);var e=s(n);function n(){return u(this,n),e.apply(this,arguments)}return n}(o.e),r=Object(i.__decorate)([f(l.a)],r))},"1G5W":function(t,e,n){"use strict";n.d(e,"a",function(){return i});var r=n("zx2A");function i(t){return function(e){return e.lift(new c(t))}}var c=function(){function t(e){u(this,t),this.notifier=e}return o(t,[{key:"call",value:function(t,e){var n=new f(t),i=Object(r.c)(this.notifier,new r.a(n));return i&&!n.seenValue?(n.add(i),e.subscribe(n)):n}}]),t}(),f=function(t){a(n,t);var e=s(n);function n(t){var r;return u(this,n),(r=e.call(this,t)).seenValue=!1,r}return o(n,[{key:"notifyNext",value:function(){this.seenValue=!0,this.complete()}},{key:"notifyComplete",value:function(){}}]),n}(r.b)},C1T0:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var r=n("ofXK"),i=n("fXoL"),o=function(){var t=function t(){u(this,t)};return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.Ib({type:t}),t.\u0275inj=i.Hb({imports:[[r.b]]}),t}()},CsoN:function(t,e,n){"use strict";n.d(e,"a",function(){return c});var r=n("fXoL"),i=n("ezBO"),a=n("LJC9"),c=function(){var t=function(){function t(e,n){u(this,t),this.__sessionIDInBrowser=e,this.__emailInBrowser=n}return o(t,[{key:"go",value:function(t){delete t._id,delete t.password,delete t.securityQuestion,this.__sessionIDInBrowser.set(t.sessionID),this.__emailInBrowser.set(t.email)}}]),t}();return t.\u0275fac=function(e){return new(e||t)(r.Tb(i.a),r.Tb(a.a))},t.\u0275prov=r.Gb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},DKVB:function(t,e,n){"use strict";n.d(e,"a",function(){return c});var r=n("ogG4"),i=n("TJMr"),o=n("fXoL"),c=function(){var t=function(t){a(n,t);var e=s(n);function n(){var t;return u(this,n),(t=e.call(this)).data.id="password-input",t.data.propertyToBind="password",t.data.label="Password",t.data.isValid=function(){return t.data.objectToBind[t.data.propertyToBind].length>=r.a.passwordMinLength},t.data.errorMessage="The password must be at least ".concat(r.a.passwordMinLength," characters"),t}return n}(i.g);return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=o.Gb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},FGOd:function(t,e,n){"use strict";n.d(e,"a",function(){return f});var r=n("mrSG"),i=n("dQk9"),a=n("fXoL"),c=n("CsoN"),s=n("eQ77"),f=function(){var t=function(){function t(e,n){u(this,t),this.__runTasksAfterGettingUser=e,this.__redirectToLoggedInHome=n}return o(t,[{key:"go",value:function(t){return Object(r.__awaiter)(this,void 0,void 0,regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return i.a.received=!1,this.__runTasksAfterGettingUser.go(t),e.next=4,this.__redirectToLoggedInHome.go();case 4:case"end":return e.stop()}},e,this)}))}}]),t}();return t.\u0275fac=function(e){return new(e||t)(a.Tb(c.a),a.Tb(s.a))},t.\u0275prov=a.Gb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},HgVo:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r={data:""}},Omw0:function(t,e,n){"use strict";n.d(e,"a",function(){return p});var i=n("mrSG"),c=n("X0HJ"),f=n("7mmc"),l=n("+m4A"),d=n("Cz6o"),v=n("fXoL"),p=function(){var t=function(t){a(n,t);var e=s(n);function n(){return u(this,n),e.apply(this,arguments)}return o(n,[{key:"go",value:function(t){var e=this,o=Object.create(null,{go:{get:function(){return r(h(n.prototype),"go",e)}}});return Object(i.__awaiter)(this,void 0,void 0,regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.message.includes(l.b)){e.next=4;break}c.a.setError(d.e),e.next=6;break;case 4:return e.next=6,o.go.call(this,t);case 6:case"end":return e.stop()}},e,this)}))}}]),n}(f.a);return t.\u0275fac=function(e){return y(e||t)},t.\u0275prov=v.Gb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}(),y=v.Rb(p)},Tx7J:function(t,e,n){"use strict";n.d(e,"a",function(){return a});var r=n("X0HJ"),i=n("fXoL"),a=function(){var t=function(){function t(){u(this,t)}return o(t,[{key:"ngOnDestroy",value:function(){r.a.clearAll()}}]),t}();return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=i.Fb({type:t,selectors:[["","clearAlertsOnDestroy",""]]}),t}()},UAv1:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r=function(){var t=function t(){u(this,t)};return t.by="",t.text="",t}()},VKW3:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r={beingCreated:!1,name:""}},VleJ:function(t,e,n){"use strict";n.d(e,"a",function(){return f});var r=n("bW8z"),i=n("fXoL"),o=n("7mmc"),c=n("FGOd"),f=function(){var t=function(t){a(n,t);var e=s(n);function n(t,r){return u(this,n),e.call(this,t,r)}return n}(r.a);return t.\u0275fac=function(e){return new(e||t)(i.Tb(o.a),i.Tb(c.a))},t.\u0275prov=i.Gb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},W5s9:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var r=n("ofXK"),i=n("fXoL"),o=function(){var t=function t(){u(this,t)};return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.Ib({type:t}),t.\u0275inj=i.Hb({imports:[[r.b]]}),t}()},dQk9:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r={received:!1}},eQ77:function(t,e,n){"use strict";n.d(e,"a",function(){return s});var r=n("mrSG"),i=n("qLpH"),a=n("fXoL"),c=n("tyNb"),s=function(){var t=function(){function t(e){u(this,t),this.__router=e}return o(t,[{key:"go",value:function(){return Object(r.__awaiter)(this,void 0,void 0,regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.__router.navigate(["/".concat(i.a.LibrariesModule)]);case 2:case"end":return t.stop()}},t,this)}))}}]),t}();return t.\u0275fac=function(e){return new(e||t)(a.Tb(c.b))},t.\u0275prov=a.Gb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},"eV/C":function(t,e,n){"use strict";n.d(e,"a",function(){return l});var r=n("g2a5"),i=n("fXoL"),o=n("ofXK"),c=n("J+9Z");function f(t,e){1&t&&i.Lb(0,"app-validating-form-input",1),2&t&&i.bc("data",e.$implicit)}var l=function(){var t=function(t){a(n,t);var e=s(n);function n(){return u(this,n),e.apply(this,arguments)}return n}(r.a);return t.\u0275fac=function(e){return d(e||t)},t.\u0275cmp=i.Eb({type:t,selectors:[["app-validating-form-inputs"]],features:[i.xb],decls:1,vars:1,consts:[[3,"data",4,"ngFor","ngForOf"],[3,"data"]],template:function(t,e){1&t&&i.oc(0,f,1,1,"app-validating-form-input",0),2&t&&i.bc("ngForOf",e.data)},directives:[o.h,c.a],encapsulation:2}),t}(),d=i.Rb(l)},gfUY:function(t,e,n){"use strict";n.d(e,"a",function(){return f});var r=n("ogG4"),i=n("TJMr"),o=n("/1kH"),c=n("fXoL"),f=function(){var t=function(t){a(n,t);var e=s(n);function n(){var t;return u(this,n),(t=e.call(this)).data.id="email-input",t.data.propertyToBind="email",t.data.label="Email",t.data.isValid=[function(){return t.data.objectToBind[t.data.propertyToBind].length>=r.a.emailMinLength},function(){return Object(o.a)(t.data.objectToBind[t.data.propertyToBind].includes(" "))}],t.data.errorMessage=["The email must have ".concat(r.a.emailMinLength," or more characters"),"The email must not include spaces"],t}return n}(i.h);return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=c.Gb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},jtHE:function(t,e,n){"use strict";n.d(e,"a",function(){return x});var i,c=n("XNiG"),f=n("quSY"),d=function(t){a(n,t);var e=s(n);function n(t,r){var i;return u(this,n),(i=e.call(this,t,r)).scheduler=t,i.work=r,i}return o(n,[{key:"schedule",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return e>0?r(h(n.prototype),"schedule",this).call(this,t,e):(this.delay=e,this.state=t,this.scheduler.flush(this),this)}},{key:"execute",value:function(t,e){return e>0||this.closed?r(h(n.prototype),"execute",this).call(this,t,e):this._execute(t,e)}},{key:"requestAsyncId",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return null!==i&&i>0||null===i&&this.delay>0?r(h(n.prototype),"requestAsyncId",this).call(this,t,e,i):t.flush(this)}}]),n}(function(t){a(n,t);var e=s(n);function n(t,r){var i;return u(this,n),(i=e.call(this,t,r)).scheduler=t,i.work=r,i.pending=!1,i}return o(n,[{key:"schedule",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(this.closed)return this;this.state=t;var n=this.id,r=this.scheduler;return null!=n&&(this.id=this.recycleAsyncId(r,n,e)),this.pending=!0,this.delay=e,this.id=this.id||this.requestAsyncId(r,this.id,e),this}},{key:"requestAsyncId",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return setInterval(t.flush.bind(t,this),n)}},{key:"recycleAsyncId",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;if(null!==n&&this.delay===n&&!1===this.pending)return e;clearInterval(e)}},{key:"execute",value:function(t,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var n=this._execute(t,e);if(n)return n;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}},{key:"_execute",value:function(t,e){var n,r=!1;try{this.work(t)}catch(i){r=!0,n=!!i&&i||new Error(i)}if(r)return this.unsubscribe(),n}},{key:"_unsubscribe",value:function(){var t=this.id,e=this.scheduler,n=e.actions,r=n.indexOf(this);this.work=null,this.state=null,this.pending=!1,this.scheduler=null,-1!==r&&n.splice(r,1),null!=t&&(this.id=this.recycleAsyncId(e,t,null)),this.delay=null}}]),n}(function(t){a(n,t);var e=s(n);function n(t,r){return u(this,n),e.call(this)}return o(n,[{key:"schedule",value:function(t){return this}}]),n}(f.a))),v=function(){var t=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.now;u(this,t),this.SchedulerAction=e,this.now=n}return o(t,[{key:"schedule",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2?arguments[2]:void 0;return new this.SchedulerAction(this,t).schedule(n,e)}}]),t}();return t.now=function(){return Date.now()},t}(),p=new(function(t){a(n,t);var e=s(n);function n(){return u(this,n),e.apply(this,arguments)}return n}(function(t){a(n,t);var e=s(n);function n(t){var r,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:v.now;return u(this,n),(r=e.call(this,t,function(){return n.delegate&&n.delegate!==l(r)?n.delegate.now():i()})).actions=[],r.active=!1,r.scheduled=void 0,r}return o(n,[{key:"schedule",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2?arguments[2]:void 0;return n.delegate&&n.delegate!==this?n.delegate.schedule(t,e,i):r(h(n.prototype),"schedule",this).call(this,t,e,i)}},{key:"flush",value:function(t){var e=this.actions;if(this.active)e.push(t);else{var n;this.active=!0;do{if(n=t.execute(t.state,t.delay))break}while(t=e.shift());if(this.active=!1,n){for(;t=e.shift();)t.unsubscribe();throw n}}}}]),n}(v)))(d),y=n("7o/Q"),b=n("EY2u"),g=n("LRne"),w=n("HDdC"),m=((i=function(){function t(e,n,r){u(this,t),this.kind=e,this.value=n,this.error=r,this.hasValue="N"===e}return o(t,[{key:"observe",value:function(t){switch(this.kind){case"N":return t.next&&t.next(this.value);case"E":return t.error&&t.error(this.error);case"C":return t.complete&&t.complete()}}},{key:"do",value:function(t,e,n){switch(this.kind){case"N":return t&&t(this.value);case"E":return e&&e(this.error);case"C":return n&&n()}}},{key:"accept",value:function(t,e,n){return t&&"function"==typeof t.next?this.observe(t):this.do(t,e,n)}},{key:"toObservable",value:function(){switch(this.kind){case"N":return Object(g.a)(this.value);case"E":return t=this.error,new w.a(function(e){return e.error(t)});case"C":return Object(b.b)()}var t;throw new Error("unexpected notification kind value")}}],[{key:"createNext",value:function(e){return void 0!==e?new t("N",e):t.undefinedValueNotification}},{key:"createError",value:function(e){return new t("E",void 0,e)}},{key:"createComplete",value:function(){return t.completeNotification}}]),t}()).completeNotification=new i("C"),i.undefinedValueNotification=new i("N",void 0),i),T=function(t){a(n,t);var e=s(n);function n(t,r){var i,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return u(this,n),(i=e.call(this,t)).scheduler=r,i.delay=o,i}return o(n,[{key:"scheduleMessage",value:function(t){this.destination.add(this.scheduler.schedule(n.dispatch,this.delay,new k(t,this.destination)))}},{key:"_next",value:function(t){this.scheduleMessage(m.createNext(t))}},{key:"_error",value:function(t){this.scheduleMessage(m.createError(t)),this.unsubscribe()}},{key:"_complete",value:function(){this.scheduleMessage(m.createComplete()),this.unsubscribe()}}],[{key:"dispatch",value:function(t){var e=t.notification,n=t.destination;e.observe(n),this.unsubscribe()}}]),n}(y.a),k=function t(e,n){u(this,t),this.notification=e,this.destination=n},_=n("9ppp"),I=n("Ylt2"),x=function(t){a(n,t);var e=s(n);function n(){var t,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Number.POSITIVE_INFINITY,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Number.POSITIVE_INFINITY,o=arguments.length>2?arguments[2]:void 0;return u(this,n),(t=e.call(this)).scheduler=o,t._events=[],t._infiniteTimeWindow=!1,t._bufferSize=r<1?1:r,t._windowTime=i<1?1:i,i===Number.POSITIVE_INFINITY?(t._infiniteTimeWindow=!0,t.next=t.nextInfiniteTimeWindow):t.next=t.nextTimeWindow,t}return o(n,[{key:"nextInfiniteTimeWindow",value:function(t){if(!this.isStopped){var e=this._events;e.push(t),e.length>this._bufferSize&&e.shift()}r(h(n.prototype),"next",this).call(this,t)}},{key:"nextTimeWindow",value:function(t){this.isStopped||(this._events.push(new O(this._getNow(),t)),this._trimBufferThenGetEvents()),r(h(n.prototype),"next",this).call(this,t)}},{key:"_subscribe",value:function(t){var e,n=this._infiniteTimeWindow,r=n?this._events:this._trimBufferThenGetEvents(),i=this.scheduler,o=r.length;if(this.closed)throw new _.a;if(this.isStopped||this.hasError?e=f.a.EMPTY:(this.observers.push(t),e=new I.a(this,t)),i&&t.add(t=new T(t,i)),n)for(var u=0;u<o&&!t.closed;u++)t.next(r[u]);else for(var a=0;a<o&&!t.closed;a++)t.next(r[a].value);return this.hasError?t.error(this.thrownError):this.isStopped&&t.complete(),e}},{key:"_getNow",value:function(){return(this.scheduler||p).now()}},{key:"_trimBufferThenGetEvents",value:function(){for(var t=this._getNow(),e=this._bufferSize,n=this._windowTime,r=this._events,i=r.length,o=0;o<i&&!(t-r[o].time<n);)o++;return i>e&&(o=Math.max(o,i-e)),o>0&&r.splice(0,o),r}}]),n}(c.a),O=function t(e,n){u(this,t),this.time=e,this.value=n}},k60E:function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return i});var r="Since this demo doesn't use SSL, do not use a password that is truly secret.",i=r.split("password").join("password or security question")},mZWV:function(t,e,n){"use strict";n.d(e,"a",function(){return c});var r=n("fXoL"),i=n("Yrwx"),a=n("eQ77"),c=function(){var t=function(){function t(e,n){u(this,t),this.__sessionIDAppearsValid=e,this.__redirectToLoggedInHome=n}return o(t,[{key:"canActivate",value:function(){return!this.__sessionIDAppearsValid.go()||(this.__redirectToLoggedInHome.go(),!1)}}]),t}();return t.\u0275fac=function(e){return new(e||t)(r.Tb(i.a),r.Tb(a.a))},t.\u0275prov=r.Gb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},nQvA:function(t,e,n){"use strict";n.d(e,"c",function(){return r}),n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o});var r="User record deleted. Now deleting image files...",i="User's image files deleted",o="New images saved"},ogG4:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r=function(){var t=function t(){u(this,t)};return t.passwordMinLength=6,t.emailMinLength=6,t.questionMinLength=9,t.answerMinLength=3,t}()},pQSM:function(n,r,i){"use strict";function o(n){return function(){for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return function(r){var o=r,u=function(){for(var r=arguments.length,u=new Array(r),a=0;a<r;a++)u[a]=arguments[a];var c=function(n,r){var i=function(){return t(n,e(r))};return i.prototype=n.prototype,t(i,e(r))}(o,u);n(c,i);var s=Object.create(o.prototype);return Object.assign(s,c),s};return u.prototype=o.prototype,u}}}i.d(r,"a",function(){return o})},rDaN:function(t,e,n){"use strict";function r(t,e){for(var n=new Array(t),r=0;r<t;++r)n[r]=e(r,n);return n}n.d(e,"a",function(){return r})},uQJg:function(t,e,n){"use strict";n.d(e,"a",function(){return h});var r=n("mrSG"),i=n("X0HJ"),c=n("X4VM"),f=n("VoJJ"),l=n("fXoL"),d=n("UFUm"),h=function(){var t=function(t){a(n,t);var e=s(n);function n(){var t;return u(this,n),(t=e.call(this)).label="Submit",t}return o(n,[{key:"iDoThis",set:function(t){var e=this,n=t.go;this._iDoThis={go:function(){return Object(r.__awaiter)(e,void 0,void 0,regeneratorRuntime.mark(function e(){var r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.validatingInputs.isValid()){e.next=6;break}return r=this.validatingInputs.getValue(),e.next=4,n.apply(t,Object(f.a)(r)?r:[r]);case 4:e.next=7;break;case 6:i.a.setError(this.validatingInputs.error);case 7:case"end":return e.stop()}},e,this)}))}}}}]),n}(c.a);return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=l.Eb({type:t,selectors:[["submit-form-button"]],inputs:{label:"label",validatingInputs:"validatingInputs",iDoThis:"iDoThis"},features:[l.xb],decls:2,vars:3,consts:[[3,"type","context"]],template:function(t,e){1&t&&(l.Pb(0,"execute-function-button",0),l.pc(1),l.Ob()),2&t&&(l.bc("type","submit")("context",e),l.Ab(1),l.rc(" ",e.label," "))},directives:[d.a],encapsulation:2}),t}()},xyI9:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var r=n("TJMr"),i=n("fXoL"),o=function(){var t=function(t){a(n,t);var e=s(n);function n(){var t;return u(this,n),(t=e.call(this)).data.id="password-again-input",t.data.propertyToBind="passwordAgain",t.data.propertyToMatch="password",t.data.label="Password Again",t.data.isValid=function(){return t.data.objectToMatch[t.data.propertyToMatch]===t.data.objectToBind[t.data.propertyToBind]},t.data.errorMessage="The two password inputs must match",t}return n}(r.g);return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=i.Gb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},zFfO:function(t,e,n){"use strict";n.d(e,"a",function(){return c});var r=n("ogG4"),i=n("TJMr"),o=n("fXoL"),c=function(){var t=function(t){a(n,t);var e=s(n);function n(){var t;return u(this,n),(t=e.call(this)).data.id="security-answer-input",t.data.propertyToBind="answer",t.data.label="Answer",t.data.isValid=function(){return t.data.objectToBind[t.data.propertyToBind].length>=r.a.answerMinLength},t.data.errorMessage="The security answer must be at least ".concat(r.a.answerMinLength," characters"),t}return n}(i.g);return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=o.Gb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},zTi3:function(t,e,n){"use strict";n.d(e,"a",function(){return a});n("rtuT"),n("HgVo"),n("VKW3"),n("UAv1");var r,i=n("fXoL"),a=((r=function(){function t(){u(this,t)}return o(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||r)},r.\u0275dir=i.Fb({type:r,selectors:[["","clearFormOnInit",""]]}),r)}}])}();