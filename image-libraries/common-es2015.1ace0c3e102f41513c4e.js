(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{TTTp:function(t,a,s){"use strict";s.d(a,"a",(function(){return i}));var e=s("STNu"),r=s("TJMr"),n=s("8Y7J");let i=(()=>{class t extends r.ValidatingPasswordInputService{constructor(){super(),this.data.id="security-answer-input",this.data.propertyToBind="answer",this.data.label="Answer",this.data.isValid=()=>this.data.objectToBind[this.data.propertyToBind].length>=e.a.answerMinLength,this.data.errorMessage=`The security answer must be at least ${e.a.answerMinLength} characters`}}return t.ngInjectableDef=n.Lb({factory:function(){return new t},token:t,providedIn:"root"}),t})()},sU8M:function(t,a,s){"use strict";s.d(a,"a",(function(){return n}));var e=s("TJMr"),r=s("8Y7J");let n=(()=>{class t extends e.ValidatingPasswordInputService{constructor(){super(),this.data.id="password-again-input",this.data.propertyToBind="passwordAgain",this.data.propertyToMatch="password",this.data.label="Password Again",this.data.isValid=()=>this.data.objectToMatch[this.data.propertyToMatch]===this.data.objectToBind[this.data.propertyToBind],this.data.errorMessage="The two password inputs must match"}}return t.ngInjectableDef=r.Lb({factory:function(){return new t},token:t,providedIn:"root"}),t})()}}]);