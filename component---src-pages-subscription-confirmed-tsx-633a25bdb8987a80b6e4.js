/*! For license information please see component---src-pages-subscription-confirmed-tsx-633a25bdb8987a80b6e4.js.LICENSE.txt */
"use strict";(self.webpackChunkreveality_website=self.webpackChunkreveality_website||[]).push([[798],{6505:function(e,t){t.Q=function(e,t){if("string"!=typeof e)throw new TypeError("argument str must be a string");for(var i={},o=t||{},a=e.split(n),c=o.decode||r,p=0;p<a.length;p++){var u=a[p],l=u.indexOf("=");if(!(l<0)){var f=u.substr(0,l).trim(),h=u.substr(++l,u.length).trim();'"'==h[0]&&(h=h.slice(1,-1)),null==i[f]&&(i[f]=s(h,c))}}return i},t.q=function(e,t,r){var n=r||{},s=n.encode||i;if("function"!=typeof s)throw new TypeError("option encode is invalid");if(!o.test(e))throw new TypeError("argument name is invalid");var a=s(t);if(a&&!o.test(a))throw new TypeError("argument val is invalid");var c=e+"="+a;if(null!=n.maxAge){var p=n.maxAge-0;if(isNaN(p)||!isFinite(p))throw new TypeError("option maxAge is invalid");c+="; Max-Age="+Math.floor(p)}if(n.domain){if(!o.test(n.domain))throw new TypeError("option domain is invalid");c+="; Domain="+n.domain}if(n.path){if(!o.test(n.path))throw new TypeError("option path is invalid");c+="; Path="+n.path}if(n.expires){if("function"!=typeof n.expires.toUTCString)throw new TypeError("option expires is invalid");c+="; Expires="+n.expires.toUTCString()}n.httpOnly&&(c+="; HttpOnly");n.secure&&(c+="; Secure");if(n.sameSite){switch("string"==typeof n.sameSite?n.sameSite.toLowerCase():n.sameSite){case!0:c+="; SameSite=Strict";break;case"lax":c+="; SameSite=Lax";break;case"strict":c+="; SameSite=Strict";break;case"none":c+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return c};var r=decodeURIComponent,i=encodeURIComponent,n=/; */,o=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function s(e,t){try{return t(e)}catch(r){return e}}},2197:function(e,t,r){r.d(t,{Z:function(){return s}});var i=r(6505);function n(e,t){void 0===t&&(t={});var r=function(e){if(e&&"j"===e[0]&&":"===e[1])return e.substr(2);return e}(e);if(function(e,t){return void 0===t&&(t=!e||"{"!==e[0]&&"["!==e[0]&&'"'!==e[0]),!t}(r,t.doNotParse))try{return JSON.parse(r)}catch(i){}return e}var o=function(){return(o=Object.assign||function(e){for(var t,r=1,i=arguments.length;r<i;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},s=function(){function e(e,t){var r=this;this.changeListeners=[],this.HAS_DOCUMENT_COOKIE=!1,this.cookies=function(e,t){return"string"==typeof e?i.Q(e,t):"object"==typeof e&&null!==e?e:{}}(e,t),new Promise((function(){r.HAS_DOCUMENT_COOKIE="object"==typeof document&&"string"==typeof document.cookie})).catch((function(){}))}return e.prototype._updateBrowserValues=function(e){this.HAS_DOCUMENT_COOKIE&&(this.cookies=i.Q(document.cookie,e))},e.prototype._emitChange=function(e){for(var t=0;t<this.changeListeners.length;++t)this.changeListeners[t](e)},e.prototype.get=function(e,t,r){return void 0===t&&(t={}),this._updateBrowserValues(r),n(this.cookies[e],t)},e.prototype.getAll=function(e,t){void 0===e&&(e={}),this._updateBrowserValues(t);var r={};for(var i in this.cookies)r[i]=n(this.cookies[i],e);return r},e.prototype.set=function(e,t,r){var n;"object"==typeof t&&(t=JSON.stringify(t)),this.cookies=o(o({},this.cookies),((n={})[e]=t,n)),this.HAS_DOCUMENT_COOKIE&&(document.cookie=i.q(e,t,r)),this._emitChange({name:e,value:t,options:r})},e.prototype.remove=function(e,t){var r=t=o(o({},t),{expires:new Date(1970,1,1,0,0,1),maxAge:0});this.cookies=o({},this.cookies),delete this.cookies[e],this.HAS_DOCUMENT_COOKIE&&(document.cookie=i.q(e,"",r)),this._emitChange({name:e,value:void 0,options:t})},e.prototype.addChangeListener=function(e){this.changeListeners.push(e)},e.prototype.removeChangeListener=function(e){var t=this.changeListeners.indexOf(e);t>=0&&this.changeListeners.splice(t,1)},e}()},3385:function(e,t,r){r.r(t),r.d(t,{default:function(){return v}});var i=r(5167),n=(r(7294),r(5444)),o=r(8388),s=r(8229),a=r(9910),c=r(2197),p=r(3431);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var f={display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",minHeight:"80vh"},h={fontSize:"2em",color:"#34393A"},d={color:"#34393A",fontSize:"1em"},m={name:"1dvcxr3",styles:"padding:1rem"},g={name:"1dvcxr3",styles:"padding:1rem"};function v(e){e.data;var t=e.pageContext.langCode,r=e.location,i=a.qQ[t],u=(new c.Z).get("subEmail");return console.log("subMail",u),(0,p.tZ)(o.Z,{language:t,location:l({},r)},(0,p.tZ)(s.Z,{title:i.seoTitle,langCode:t}),(0,p.tZ)("div",{css:f},(0,p.tZ)("h1",{css:h},i.divTitle),(0,p.tZ)("p",{css:d},i.divSubtitle),(0,p.tZ)("div",{css:m},(0,p.tZ)(n.Link,{to:"https://airtable.com/shrzx2UHeHLxztADT"},i.formProblemFallback)),(0,p.tZ)("script",{src:"https://static.airtable.com/js/embed/embed_snippet_v1.js"}),(0,p.tZ)("iframe",{class:"airtable-embed airtable-dynamic-height",src:"https://airtable.com/embed/shrzx2UHeHLxztADT?backgroundColor=purple&prefill_personMail="+(u||""),frameborder:"0",onmousewheel:"",width:"100%",height:"904px",style:{background:"transparent",border:"1px solid #ccc"}}),(0,p.tZ)("div",{css:g},(0,p.tZ)(n.Link,{to:"https://airtable.com/shrzx2UHeHLxztADT"},i.formProblemFallback))))}}}]);
//# sourceMappingURL=component---src-pages-subscription-confirmed-tsx-633a25bdb8987a80b6e4.js.map