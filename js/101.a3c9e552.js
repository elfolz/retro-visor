"use strict";(globalThis["webpackChunkRetro_visor"]=globalThis["webpackChunkRetro_visor"]||[]).push([[101],{1618:(t,e,n)=>{n.d(e,{BH:()=>c,L:()=>a,LL:()=>w,ZR:()=>m,b$:()=>p,eu:()=>y,hl:()=>d,m9:()=>L,ne:()=>k,pd:()=>D,ru:()=>f,tV:()=>h,uI:()=>l,vZ:()=>I,w1:()=>g,xO:()=>C,xb:()=>S,z$:()=>u,zI:()=>v,zd:()=>O});n(1703),n(2801);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const i=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=63&r|128):55296===(64512&r)&&i+1<t.length&&56320===(64512&t.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&t.charCodeAt(++i)),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=63&r|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=63&r|128)}return e},r=function(t){const e=[];let n=0,i=0;while(n<t.length){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){const s=t[n++],o=t[n++],a=t[n++],h=((7&r)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;e[i++]=String.fromCharCode(55296+(h>>10)),e[i++]=String.fromCharCode(56320+(1023&h))}else{const s=t[n++],o=t[n++];e[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return e.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<t.length;r+=3){const e=t[r],s=r+1<t.length,o=s?t[r+1]:0,a=r+2<t.length,h=a?t[r+2]:0,c=e>>2,u=(3&e)<<4|o>>4;let l=(15&o)<<2|h>>6,f=63&h;a||(f=64,s||(l=64)),i.push(n[c],n[u],n[l],n[f])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(i(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):r(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<t.length;){const e=n[t.charAt(r++)],s=r<t.length,o=s?n[t.charAt(r)]:0;++r;const a=r<t.length,h=a?n[t.charAt(r)]:64;++r;const c=r<t.length,u=c?n[t.charAt(r)]:64;if(++r,null==e||null==o||null==h||null==u)throw Error();const l=e<<2|o>>4;if(i.push(l),64!==h){const t=o<<4&240|h>>2;if(i.push(t),64!==u){const t=h<<6&192|u;i.push(t)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},o=function(t){const e=i(t);return s.encodeByteArray(e,!0)},a=function(t){return o(t).replace(/\./g,"")},h=function(t){try{return s.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class c{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function u(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function l(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(u())}function f(){const t="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof t&&void 0!==t.id}function p(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function g(){const t=u();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function d(){return"object"===typeof indexedDB}function y(){return new Promise(((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var t;e((null===(t=r.error)||void 0===t?void 0:t.message)||"")}}catch(n){e(n)}}))}function v(){return!("undefined"===typeof navigator||!navigator.cookieEnabled)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const b="FirebaseError";class m extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=b,Object.setPrototypeOf(this,m.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,w.prototype.create)}}class w{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},i=`${this.service}/${t}`,r=this.errors[t],s=r?E(r,n):"Error",o=`${this.serviceName}: ${s} (${i}).`,a=new m(i,o,n);return a}}function E(t,e){return t.replace(T,((t,n)=>{const i=e[n];return null!=i?String(i):`<${n}?>`}))}const T=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function I(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const n=t[r],s=e[r];if(A(n)&&A(s)){if(!I(n,s))return!1}else if(n!==s)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function A(t){return null!==t&&"object"===typeof t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach((t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))})):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function O(t){const e={},n=t.replace(/^\?/,"").split("&");return n.forEach((t=>{if(t){const[n,i]=t.split("=");e[decodeURIComponent(n)]=decodeURIComponent(i)}})),e}function D(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(t,e){const n=new _(t,e);return n.subscribe.bind(n)}class _{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((()=>{t(this)})).catch((t=>{this.error(t)}))}next(t){this.forEachObserver((e=>{e.next(t)}))}error(t){this.forEachObserver((e=>{e.error(t)})),this.close(t)}complete(){this.forEachObserver((t=>{t.complete()})),this.close()}subscribe(t,e,n){let i;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");i=j(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===i.next&&(i.next=R),void 0===i.error&&(i.error=R),void 0===i.complete&&(i.complete=R);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(t){}})),this.observers.push(i),r}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function j(t,e){if("object"!==typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"===typeof t[n])return!0;return!1}function R(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function L(t){return t&&t._delegate?t._delegate:t}},4673:(t,e,n)=>{n(1703),n(8675),n(3105),n(3462),n(3824),n(7380),n(1118);var i,r="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{},s={},o=o||{},a=r||self;function h(){}function c(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function u(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function l(t){return Object.prototype.hasOwnProperty.call(t,f)&&t[f]||(t[f]=++p)}var f="closure_uid_"+(1e9*Math.random()>>>0),p=0;function g(t,e,n){return t.call.apply(t.bind,arguments)}function d(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function y(t,e,n){return y=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?g:d,y.apply(null,arguments)}function v(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function b(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,i){for(var r=Array(arguments.length-2),s=2;s<arguments.length;s++)r[s-2]=arguments[s];return e.prototype[n].apply(t,r)}}function m(){this.s=this.s,this.o=this.o}var w=0,E={};m.prototype.s=!1,m.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=w)){var t=l(this);delete E[t]}},m.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const T=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},S=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const i=t.length,r="string"===typeof t?t.split(""):t;for(let s=0;s<i;s++)s in r&&e.call(n,r[s],s,t)};function I(t){t:{var e=Wn;const n=t.length,i="string"===typeof t?t.split(""):t;for(let r=0;r<n;r++)if(r in i&&e.call(void 0,i[r],r,t)){e=r;break t}e=-1}return 0>e?null:"string"===typeof t?t.charAt(e):t[e]}function A(t){return Array.prototype.concat.apply([],arguments)}function C(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function O(t){return/^[\s\xa0]*$/.test(t)}var D,k=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function _(t,e){return-1!=t.indexOf(e)}function j(t,e){return t<e?-1:t>e?1:0}t:{var R=a.navigator;if(R){var L=R.userAgent;if(L){D=L;break t}}D=""}function M(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function x(t){const e={};for(const n in t)e[n]=t[n];return e}var P="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function B(t,e){let n,i;for(let r=1;r<arguments.length;r++){for(n in i=arguments[r],i)t[n]=i[n];for(let e=0;e<P.length;e++)n=P[e],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function N(t){return N[" "](t),t}function H(t){var e=Z;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}N[" "]=h;var K,F=_(D,"Opera"),W=_(D,"Trident")||_(D,"MSIE"),U=_(D,"Edge"),X=U||W,V=_(D,"Gecko")&&!(_(D.toLowerCase(),"webkit")&&!_(D,"Edge"))&&!(_(D,"Trident")||_(D,"MSIE"))&&!_(D,"Edge"),$=_(D.toLowerCase(),"webkit")&&!_(D,"Edge");function G(){var t=a.document;return t?t.documentMode:void 0}t:{var Y="",J=function(){var t=D;return V?/rv:([^\);]+)(\)|;)/.exec(t):U?/Edge\/([\d\.]+)/.exec(t):W?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):$?/WebKit\/(\S+)/.exec(t):F?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(J&&(Y=J?J[1]:""),W){var q=G();if(null!=q&&q>parseFloat(Y)){K=String(q);break t}}K=Y}var z,Z={};function Q(){return H((function(){let t=0;const e=k(String(K)).split("."),n=k("9").split("."),i=Math.max(e.length,n.length);for(let o=0;0==t&&o<i;o++){var r=e[o]||"",s=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==r[0].length&&0==s[0].length)break;t=j(0==r[1].length?0:parseInt(r[1],10),0==s[1].length?0:parseInt(s[1],10))||j(0==r[2].length,0==s[2].length)||j(r[2],s[2]),r=r[3],s=s[3]}while(0==t)}return 0<=t}))}if(a.document&&W){var tt=G();z=tt||(parseInt(K,10)||void 0)}else z=void 0;var et=z,nt=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{a.addEventListener("test",h,e),a.removeEventListener("test",h,e)}catch(n){}return t}();function it(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function rt(t,e){if(it.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(V){t:{try{N(e.nodeName);var r=!0;break t}catch(s){}r=!1}r||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:st[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&rt.Z.h.call(this)}}it.prototype.h=function(){this.defaultPrevented=!0},b(rt,it);var st={2:"touch",3:"pen",4:"mouse"};rt.prototype.h=function(){rt.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ot="closure_listenable_"+(1e6*Math.random()|0),at=0;function ht(t,e,n,i,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.ia=r,this.key=++at,this.ca=this.fa=!1}function ct(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function ut(t){this.src=t,this.g={},this.h=0}function lt(t,e){var n=e.type;if(n in t.g){var i,r=t.g[n],s=T(r,e);(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(ct(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function ft(t,e,n,i){for(var r=0;r<t.length;++r){var s=t[r];if(!s.ca&&s.listener==e&&s.capture==!!n&&s.ia==i)return r}return-1}ut.prototype.add=function(t,e,n,i,r){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=ft(t,e,i,r);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new ht(e,this.src,s,!!i,r),e.fa=n,t.push(e)),e};var pt="closure_lm_"+(1e6*Math.random()|0),gt={};function dt(t,e,n,i,r){if(i&&i.once)return bt(t,e,n,i,r);if(Array.isArray(e)){for(var s=0;s<e.length;s++)dt(t,e[s],n,i,r);return null}return n=At(n),t&&t[ot]?t.N(e,n,u(i)?!!i.capture:!!i,r):yt(t,e,n,!1,i,r)}function yt(t,e,n,i,r,s){if(!e)throw Error("Invalid event type");var o=u(r)?!!r.capture:!!r,a=St(t);if(a||(t[pt]=a=new ut(t)),n=a.add(e,n,i,o,s),n.proxy)return n;if(i=vt(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)nt||(r=o),void 0===r&&(r=!1),t.addEventListener(e.toString(),i,r);else if(t.attachEvent)t.attachEvent(Et(e.toString()),i);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(i)}return n}function vt(){function t(n){return e.call(t.src,t.listener,n)}var e=Tt;return t}function bt(t,e,n,i,r){if(Array.isArray(e)){for(var s=0;s<e.length;s++)bt(t,e[s],n,i,r);return null}return n=At(n),t&&t[ot]?t.O(e,n,u(i)?!!i.capture:!!i,r):yt(t,e,n,!0,i,r)}function mt(t,e,n,i,r){if(Array.isArray(e))for(var s=0;s<e.length;s++)mt(t,e[s],n,i,r);else i=u(i)?!!i.capture:!!i,n=At(n),t&&t[ot]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=ft(s,n,i,r),-1<n&&(ct(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete t.g[e],t.h--)))):t&&(t=St(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ft(e,n,i,r)),(n=-1<t?e[t]:null)&&wt(n))}function wt(t){if("number"!==typeof t&&t&&!t.ca){var e=t.src;if(e&&e[ot])lt(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(Et(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=St(e))?(lt(n,t),0==n.h&&(n.src=null,e[pt]=null)):ct(t)}}}function Et(t){return t in gt?gt[t]:gt[t]="on"+t}function Tt(t,e){if(t.ca)t=!0;else{e=new rt(e,this);var n=t.listener,i=t.ia||t.src;t.fa&&wt(t),t=n.call(i,e)}return t}function St(t){return t=t[pt],t instanceof ut?t:null}var It="__closure_events_fn_"+(1e9*Math.random()>>>0);function At(t){return"function"===typeof t?t:(t[It]||(t[It]=function(e){return t.handleEvent(e)}),t[It])}function Ct(){m.call(this),this.i=new ut(this),this.P=this,this.I=null}function Ot(t,e){var n,i=t.I;if(i)for(n=[];i;i=i.I)n.push(i);if(t=t.P,i=e.type||e,"string"===typeof e)e=new it(e,t);else if(e instanceof it)e.target=e.target||t;else{var r=e;e=new it(i,t),B(e,r)}if(r=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];r=Dt(o,i,!0,e)&&r}if(o=e.g=t,r=Dt(o,i,!0,e)&&r,r=Dt(o,i,!1,e)&&r,n)for(s=0;s<n.length;s++)o=e.g=n[s],r=Dt(o,i,!1,e)&&r}function Dt(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,h=o.ia||o.src;o.fa&&lt(t.i,o),r=!1!==a.call(h,i)&&r}}return r&&!i.defaultPrevented}b(Ct,m),Ct.prototype[ot]=!0,Ct.prototype.removeEventListener=function(t,e,n,i){mt(this,t,e,n,i)},Ct.prototype.M=function(){if(Ct.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],i=0;i<n.length;i++)ct(n[i]);delete e.g[t],e.h--}}this.I=null},Ct.prototype.N=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)},Ct.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};var kt=a.JSON.stringify;function _t(){var t=Ht;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class jt{constructor(){this.h=this.g=null}add(t,e){const n=Lt.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var Rt,Lt=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new Mt),(t=>t.reset()));class Mt{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function xt(t){a.setTimeout((()=>{throw t}),0)}function Pt(t,e){Rt||Bt(),Nt||(Rt(),Nt=!0),Ht.add(t,e)}function Bt(){var t=a.Promise.resolve(void 0);Rt=function(){t.then(Kt)}}var Nt=!1,Ht=new jt;function Kt(){for(var t;t=_t();){try{t.h.call(t.g)}catch(n){xt(n)}var e=Lt;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Nt=!1}function Ft(t,e){Ct.call(this),this.h=t||1,this.g=e||a,this.j=y(this.kb,this),this.l=Date.now()}function Wt(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function Ut(t,e,n){if("function"===typeof t)n&&(t=y(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=y(t.handleEvent,t)}return 2147483647<Number(e)?-1:a.setTimeout(t,e||0)}function Xt(t){t.g=Ut((()=>{t.g=null,t.i&&(t.i=!1,Xt(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}b(Ft,Ct),i=Ft.prototype,i.da=!1,i.S=null,i.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Ot(this,"tick"),this.da&&(Wt(this),this.start()))}},i.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},i.M=function(){Ft.Z.M.call(this),Wt(this),delete this.g};class Vt extends m{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Xt(this)}M(){super.M(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function $t(t){m.call(this),this.h=t,this.g={}}b($t,m);var Gt=[];function Yt(t,e,n,i){Array.isArray(n)||(n&&(Gt[0]=n.toString()),n=Gt);for(var r=0;r<n.length;r++){var s=dt(e,n[r],i||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Jt(t){M(t.g,(function(t,e){this.g.hasOwnProperty(e)&&wt(t)}),t),t.g={}}function qt(){this.g=!0}function zt(t,e,n,i,r,s){t.info((function(){if(t.g)if(s)for(var o="",a=s.split("&"),h=0;h<a.length;h++){var c=a[h].split("=");if(1<c.length){var u=c[0];c=c[1];var l=u.split("_");o=2<=l.length&&"type"==l[1]?o+(u+"=")+c+"&":o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+e+"\n"+n+"\n"+o}))}function Zt(t,e,n,i,r,s,o){t.info((function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+e+"\n"+n+"\n"+s+" "+o}))}function Qt(t,e,n,i){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+ee(t,n)+(i?" "+i:"")}))}function te(t,e){t.info((function(){return"TIMEOUT: "+e}))}function ee(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<r.length;o++)r[o]=""}}}return kt(n)}catch(a){return e}}$t.prototype.M=function(){$t.Z.M.call(this),Jt(this)},$t.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},qt.prototype.Aa=function(){this.g=!1},qt.prototype.info=function(){};var ne={},ie=null;function re(){return ie=ie||new Ct}function se(t){it.call(this,ne.Ma,t)}function oe(t){const e=re();Ot(e,new se(e,t))}function ae(t,e){it.call(this,ne.STAT_EVENT,t),this.stat=e}function he(t){const e=re();Ot(e,new ae(e,t))}function ce(t,e){it.call(this,ne.Na,t),this.size=e}function ue(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return a.setTimeout((function(){t()}),e)}ne.Ma="serverreachability",b(se,it),ne.STAT_EVENT="statevent",b(ae,it),ne.Na="timingevent",b(ce,it);var le={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},fe={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function pe(){}function ge(t){return t.h||(t.h=t.i())}function de(){}pe.prototype.h=null;var ye,ve={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function be(){it.call(this,"d")}function me(){it.call(this,"c")}function we(){}function Ee(t,e,n,i){this.l=t,this.j=e,this.m=n,this.X=i||1,this.V=new $t(this),this.P=Se,t=X?125:void 0,this.W=new Ft(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Te}function Te(){this.i=null,this.g="",this.h=!1}b(be,it),b(me,it),b(we,pe),we.prototype.g=function(){return new XMLHttpRequest},we.prototype.i=function(){return{}},ye=new we;var Se=45e3,Ie={},Ae={};function Ce(t,e,n){t.K=1,t.v=ze(Ve(e)),t.s=n,t.U=!0,Oe(t,null)}function Oe(t,e){t.F=Date.now(),je(t),t.A=Ve(t.v);var n=t.A,i=t.X;Array.isArray(i)||(i=[String(i)]),pn(n.h,"t",i),t.C=0,n=t.l.H,t.h=new Te,t.g=mi(t.l,n?e:null,!t.s),0<t.O&&(t.L=new Vt(y(t.Ia,t,t.g),t.O)),Yt(t.V,t.g,"readystatechange",t.gb),e=t.H?x(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),oe(1),zt(t.j,t.u,t.A,t.m,t.X,t.s)}function De(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function ke(t,e,n){let i,r=!0;for(;!t.I&&t.C<n.length;){if(i=_e(t,n),i==Ae){4==e&&(t.o=4,he(14),r=!1),Qt(t.j,t.m,null,"[Incomplete Response]");break}if(i==Ie){t.o=4,he(15),Qt(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}Qt(t.j,t.m,i,null),Pe(t,i)}De(t)&&i!=Ae&&i!=Ie&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,he(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),li(e),e.L=!0,he(11))):(Qt(t.j,t.m,n,"[Invalid Chunked Response]"),xe(t),Me(t))}function _e(t,e){var n=t.C,i=e.indexOf("\n",n);return-1==i?Ae:(n=Number(e.substring(n,i)),isNaN(n)?Ie:(i+=1,i+n>e.length?Ae:(e=e.substr(i,n),t.C=i+n,e)))}function je(t){t.Y=Date.now()+t.P,Re(t,t.P)}function Re(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=ue(y(t.eb,t),e)}function Le(t){t.B&&(a.clearTimeout(t.B),t.B=null)}function Me(t){0==t.l.G||t.I||gi(t.l,t)}function xe(t){Le(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,Wt(t.W),Jt(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Pe(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||En(n.i,t)))if(n.I=t.N,!t.J&&En(n.i,t)&&3==n.G){try{var i=n.Ca.g.parse(e)}catch(c){i=null}if(Array.isArray(i)&&3==i.length){var r=i;if(0==r[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;pi(n),ei(n)}ui(n),he(18)}}else n.ta=r[1],0<n.ta-n.U&&37500>r[2]&&n.N&&0==n.A&&!n.v&&(n.v=ue(y(n.ab,n),6e3));if(1>=wn(n.i)&&n.ka){try{n.ka()}catch(c){}n.ka=void 0}}else yi(n,11)}else if((t.J||n.g==t)&&pi(n),!O(e))for(r=n.Ca.g.parse(e),e=0;e<r.length;e++){let c=r[e];if(n.U=c[0],c=c[1],2==n.G)if("c"==c[0]){n.J=c[1],n.la=c[2];const e=c[3];null!=e&&(n.ma=e,n.h.info("VER="+n.ma));const r=c[4];null!=r&&(n.za=r,n.h.info("SVER="+n.za));const u=c[5];null!=u&&"number"===typeof u&&0<u&&(i=1.5*u,n.K=i,n.h.info("backChannelRequestTimeoutMs_="+i)),i=n;const l=t.g;if(l){const t=l.g?l.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=i.i;!s.g&&(_(t,"spdy")||_(t,"quic")||_(t,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(Tn(s,s.h),s.h=null))}if(i.D){const t=l.g?l.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(i.sa=t,qe(i.F,i.D,t))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),i=n;var o=t;if(i.oa=bi(i,i.H?i.la:null,i.W),o.J){Sn(i.i,o);var a=o,h=i.K;h&&a.setTimeout(h),a.B&&(Le(a),je(a)),i.g=o}else ci(i);0<n.l.length&&ri(n)}else"stop"!=c[0]&&"close"!=c[0]||yi(n,7);else 3==n.G&&("stop"==c[0]||"close"==c[0]?"stop"==c[0]?yi(n,7):ti(n):"noop"!=c[0]&&n.j&&n.j.wa(c),n.A=0)}oe(4)}catch(c){}}function Be(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"===typeof t)return t.split("");if(c(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}for(i in e=[],n=0,t)e[n++]=t[i];return e}function Ne(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(c(t)||"string"===typeof t)S(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var n=t.T();else if(t.R&&"function"==typeof t.R)n=void 0;else if(c(t)||"string"===typeof t){n=[];for(var i=t.length,r=0;r<i;r++)n.push(r)}else for(r in n=[],i=0,t)n[i++]=r;i=Be(t),r=i.length;for(var s=0;s<r;s++)e.call(void 0,i[s],n&&n[s],t)}}function He(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var i=0;i<n;i+=2)this.set(arguments[i],arguments[i+1])}else if(t)if(t instanceof He)for(n=t.T(),i=0;i<n.length;i++)this.set(n[i],t.get(n[i]));else for(i in t)this.set(i,t[i])}function Ke(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var i=t.g[e];Fe(t.h,i)&&(t.g[n++]=i),e++}t.g.length=n}if(t.i!=t.g.length){var r={};for(n=e=0;e<t.g.length;)i=t.g[e],Fe(r,i)||(t.g[n++]=i,r[i]=1),e++;t.g.length=n}}function Fe(t,e){return Object.prototype.hasOwnProperty.call(t,e)}i=Ee.prototype,i.setTimeout=function(t){this.P=t},i.gb=function(t){t=t.target;const e=this.L;e&&3==Yn(t)?e.l():this.Ia(t)},i.Ia=function(t){try{if(t==this.g)t:{const l=Yn(this.g);var e=this.g.Da();const f=this.g.ba();if(!(3>l)&&(3!=l||X||this.g&&(this.h.h||this.g.ga()||Jn(this.g)))){this.I||4!=l||7==e||oe(8==e||0>=f?3:2),Le(this);var n=this.g.ba();this.N=n;e:if(De(this)){var i=Jn(this.g);t="";var r=i.length,s=4==Yn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){xe(this),Me(this);var o="";break e}this.h.i=new a.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:s&&e==r-1});i.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,Zt(this.j,this.u,this.A,this.m,this.X,l,n),this.i){if(this.$&&!this.J){e:{if(this.g){var h,c=this.g;if((h=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!O(h)){var u=h;break e}}u=null}if(!(n=u)){this.i=!1,this.o=3,he(12),xe(this),Me(this);break t}Qt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Pe(this,n)}this.U?(ke(this,l,o),X&&this.i&&3==l&&(Yt(this.V,this.W,"tick",this.fb),this.W.start())):(Qt(this.j,this.m,o,null),Pe(this,o)),4==l&&xe(this),this.i&&!this.I&&(4==l?gi(this.l,this):(this.i=!1,je(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,he(12)):(this.o=0,he(13)),xe(this),Me(this)}}}catch(l){}},i.fb=function(){if(this.g){var t=Yn(this.g),e=this.g.ga();this.C<e.length&&(Le(this),ke(this,t,e),this.i&&4!=t&&je(this))}},i.cancel=function(){this.I=!0,xe(this)},i.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(te(this.j,this.A),2!=this.K&&(oe(3),he(17)),xe(this),this.o=2,Me(this)):Re(this,this.Y-t)},i=He.prototype,i.R=function(){Ke(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},i.T=function(){return Ke(this),this.g.concat()},i.get=function(t,e){return Fe(this.h,t)?this.h[t]:e},i.set=function(t,e){Fe(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},i.forEach=function(t,e){for(var n=this.T(),i=0;i<n.length;i++){var r=n[i],s=this.get(r);t.call(e,s,r,this)}};var We=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Ue(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),r=null;if(0<=i){var s=t[n].substring(0,i);r=t[n].substring(i+1)}else s=t[n];e(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Xe(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Xe){this.g=void 0!==e?e:t.g,$e(this,t.j),this.s=t.s,Ge(this,t.i),Ye(this,t.m),this.l=t.l,e=t.h;var n=new cn;n.i=e.i,e.g&&(n.g=new He(e.g),n.h=e.h),Je(this,n),this.o=t.o}else t&&(n=String(t).match(We))?(this.g=!!e,$e(this,n[1]||"",!0),this.s=tn(n[2]||""),Ge(this,n[3]||"",!0),Ye(this,n[4]),this.l=tn(n[5]||"",!0),Je(this,n[6]||"",!0),this.o=tn(n[7]||"")):(this.g=!!e,this.h=new cn(null,this.g))}function Ve(t){return new Xe(t)}function $e(t,e,n){t.j=n?tn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ge(t,e,n){t.i=n?tn(e,!0):e}function Ye(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Je(t,e,n){e instanceof cn?(t.h=e,dn(t.h,t.g)):(n||(e=en(e,an)),t.h=new cn(e,t.g))}function qe(t,e,n){t.h.set(e,n)}function ze(t){return qe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ze(t){return t instanceof Xe?Ve(t):new Xe(t,void 0)}function Qe(t,e,n,i){var r=new Xe(null,void 0);return t&&$e(r,t),e&&Ge(r,e),n&&Ye(r,n),i&&(r.l=i),r}function tn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function en(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,nn),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function nn(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}Xe.prototype.toString=function(){var t=[],e=this.j;e&&t.push(en(e,rn,!0),":");var n=this.i;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(en(e,rn,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&t.push("/"),t.push(en(n,"/"==n.charAt(0)?on:sn,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",en(n,hn)),t.join("")};var rn=/[#\/\?@]/g,sn=/[#\?:]/g,on=/[#\?]/g,an=/[#\?@]/g,hn=/#/g;function cn(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function un(t){t.g||(t.g=new He,t.h=0,t.i&&Ue(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function ln(t,e){un(t),e=gn(t,e),Fe(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,Fe(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Ke(t)))}function fn(t,e){return un(t),e=gn(t,e),Fe(t.g.h,e)}function pn(t,e,n){ln(t,e),0<n.length&&(t.i=null,t.g.set(gn(t,e),C(n)),t.h+=n.length)}function gn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function dn(t,e){e&&!t.j&&(un(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(ln(this,e),pn(this,n,t))}),t)),t.j=e}i=cn.prototype,i.add=function(t,e){un(this),this.i=null,t=gn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},i.forEach=function(t,e){un(this),this.g.forEach((function(n,i){S(n,(function(n){t.call(e,n,i,this)}),this)}),this)},i.T=function(){un(this);for(var t=this.g.R(),e=this.g.T(),n=[],i=0;i<e.length;i++)for(var r=t[i],s=0;s<r.length;s++)n.push(e[i]);return n},i.R=function(t){un(this);var e=[];if("string"===typeof t)fn(this,t)&&(e=A(e,this.g.get(gn(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=A(e,t[n])}return e},i.set=function(t,e){return un(this),this.i=null,t=gn(this,t),fn(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},i.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e},i.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var i=e[n],r=encodeURIComponent(String(i));i=this.R(i);for(var s=0;s<i.length;s++){var o=r;""!==i[s]&&(o+="="+encodeURIComponent(String(i[s]))),t.push(o)}}return this.i=t.join("&")};var yn=class{constructor(t,e){this.h=t,this.g=e}};function vn(t){this.l=t||bn,a.PerformanceNavigationTiming?(t=a.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(a.g&&a.g.Ea&&a.g.Ea()&&a.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var bn=10;function mn(t){return!!t.h||!!t.g&&t.g.size>=t.j}function wn(t){return t.h?1:t.g?t.g.size:0}function En(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function Tn(t,e){t.g?t.g.add(e):t.h=e}function Sn(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function In(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return C(t.i)}function An(){}function Cn(){this.g=new An}function On(t,e,n){const i=n||"";try{Ne(t,(function(t,n){let r=t;u(t)&&(r=kt(t)),e.push(i+n+"="+encodeURIComponent(r))}))}catch(r){throw e.push(i+"type="+encodeURIComponent("_badmap")),r}}function Dn(t,e){const n=new qt;if(a.Image){const i=new Image;i.onload=v(kn,n,i,"TestLoadImage: loaded",!0,e),i.onerror=v(kn,n,i,"TestLoadImage: error",!1,e),i.onabort=v(kn,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=v(kn,n,i,"TestLoadImage: timeout",!1,e),a.setTimeout((function(){i.ontimeout&&i.ontimeout()}),1e4),i.src=t}else e(!1)}function kn(t,e,n,i,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(i)}catch(s){}}function _n(t){this.l=t.$b||null,this.j=t.ib||!1}function jn(t,e){Ct.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Rn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}vn.prototype.cancel=function(){if(this.i=In(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},An.prototype.stringify=function(t){return a.JSON.stringify(t,void 0)},An.prototype.parse=function(t){return a.JSON.parse(t,void 0)},b(_n,pe),_n.prototype.g=function(){return new jn(this.l,this.j)},_n.prototype.i=function(t){return function(){return t}}({}),b(jn,Ct);var Rn=0;function Ln(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function Mn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,xn(t)}function xn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}i=jn.prototype,i.open=function(t,e){if(this.readyState!=Rn)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,xn(this)},i.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||a).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},i.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Mn(this)),this.readyState=Rn},i.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,xn(this)),this.g&&(this.readyState=3,xn(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if("undefined"!==typeof a.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Ln(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},i.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Mn(this):xn(this),3==this.readyState&&Ln(this)}},i.Ua=function(t){this.g&&(this.response=this.responseText=t,Mn(this))},i.Ta=function(t){this.g&&(this.response=t,Mn(this))},i.ha=function(){this.g&&Mn(this)},i.setRequestHeader=function(t,e){this.v.append(t,e)},i.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(jn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var Pn=a.JSON.parse;function Bn(t){Ct.call(this),this.headers=new He,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Nn,this.K=this.L=!1}b(Bn,Ct);var Nn="",Hn=/^https?$/i,Kn=["POST","PUT"];function Fn(t){return W&&Q()&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function Wn(t){return"content-type"==t.toLowerCase()}function Un(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Xn(t),$n(t)}function Xn(t){t.D||(t.D=!0,Ot(t,"complete"),Ot(t,"error"))}function Vn(t){if(t.h&&"undefined"!=typeof o&&(!t.C[1]||4!=Yn(t)||2!=t.ba()))if(t.v&&4==Yn(t))Ut(t.Fa,0,t);else if(Ot(t,"readystatechange"),4==Yn(t)){t.h=!1;try{const o=t.ba();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var i;if(i=0===o){var r=String(t.H).match(We)[1]||null;if(!r&&a.self&&a.self.location){var s=a.self.location.protocol;r=s.substr(0,s.length-1)}i=!Hn.test(r?r.toLowerCase():"")}n=i}if(n)Ot(t,"complete"),Ot(t,"success");else{t.m=6;try{var h=2<Yn(t)?t.g.statusText:""}catch(c){h=""}t.j=h+" ["+t.ba()+"]",Xn(t)}}finally{$n(t)}}}function $n(t,e){if(t.g){Gn(t);const i=t.g,r=t.C[0]?h:null;t.g=null,t.C=null,e||Ot(t,"ready");try{i.onreadystatechange=r}catch(n){}}}function Gn(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(a.clearTimeout(t.A),t.A=null)}function Yn(t){return t.g?t.g.readyState:0}function Jn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Nn:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(e){return null}}function qn(t){let e="";return M(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function zn(t,e,n){t:{for(i in n){var i=!1;break t}i=!0}i||(n=qn(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):qe(t,e,n))}function Zn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Qn(t){this.za=0,this.l=[],this.h=new qt,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Zn("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Zn("baseRetryDelayMs",5e3,t),this.$a=Zn("retryDelaySeedMs",1e4,t),this.Ya=Zn("forwardChannelMaxRetries",2,t),this.ra=Zn("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new vn(t&&t.concurrentRequestLimit),this.Ca=new Cn,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function ti(t){if(ni(t),3==t.G){var e=t.V++,n=Ve(t.F);qe(n,"SID",t.J),qe(n,"RID",e),qe(n,"TYPE","terminate"),ai(t,n),e=new Ee(t,t.h,e,void 0),e.K=2,e.v=ze(Ve(n)),n=!1,a.navigator&&a.navigator.sendBeacon&&(n=a.navigator.sendBeacon(e.v.toString(),"")),!n&&a.Image&&((new Image).src=e.v,n=!0),n||(e.g=mi(e.l,null),e.g.ea(e.v)),e.F=Date.now(),je(e)}vi(t)}function ei(t){t.g&&(li(t),t.g.cancel(),t.g=null)}function ni(t){ei(t),t.u&&(a.clearTimeout(t.u),t.u=null),pi(t),t.i.cancel(),t.m&&("number"===typeof t.m&&a.clearTimeout(t.m),t.m=null)}function ii(t,e){t.l.push(new yn(t.Za++,e)),3==t.G&&ri(t)}function ri(t){mn(t.i)||t.m||(t.m=!0,Pt(t.Ha,t),t.C=0)}function si(t,e){return!(wn(t.i)>=t.i.j-(t.m?1:0))&&(t.m?(t.l=e.D.concat(t.l),!0):!(1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya))&&(t.m=ue(y(t.Ha,t,e),di(t,t.C)),t.C++,!0))}function oi(t,e){var n;n=e?e.m:t.V++;const i=Ve(t.F);qe(i,"SID",t.J),qe(i,"RID",n),qe(i,"AID",t.U),ai(t,i),t.o&&t.s&&zn(i,t.o,t.s),n=new Ee(t,t.h,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=hi(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Tn(t.i,n),Ce(n,i,e)}function ai(t,e){t.j&&Ne({},(function(t,n){qe(e,n,t)}))}function hi(t,e,n){n=Math.min(t.l.length,n);var i=t.j?y(t.j.Oa,t.j,t):null;t:{var r=t.l;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=r[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let o=!0;for(let a=0;a<n;a++){let n=r[a].h;const h=r[a].g;if(n-=e,0>n)e=Math.max(0,r[a].h-100),o=!1;else try{On(h,t,"req"+n+"_")}catch(s){i&&i(h)}}if(o){i=t.join("&");break t}}}return t=t.l.splice(0,n),e.D=t,i}function ci(t){t.g||t.u||(t.Y=1,Pt(t.Ga,t),t.A=0)}function ui(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=ue(y(t.Ga,t),di(t,t.A)),t.A++,!0)}function li(t){null!=t.B&&(a.clearTimeout(t.B),t.B=null)}function fi(t){t.g=new Ee(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=Ve(t.oa);qe(e,"RID","rpc"),qe(e,"SID",t.J),qe(e,"CI",t.N?"0":"1"),qe(e,"AID",t.U),ai(t,e),qe(e,"TYPE","xmlhttp"),t.o&&t.s&&zn(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=ze(Ve(e)),n.s=null,n.U=!0,Oe(n,t)}function pi(t){null!=t.v&&(a.clearTimeout(t.v),t.v=null)}function gi(t,e){var n=null;if(t.g==e){pi(t),li(t),t.g=null;var i=2}else{if(!En(t.i,e))return;n=e.D,Sn(t.i,e),i=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==i){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;i=re(),Ot(i,new ce(i,n,e,r)),ri(t)}else ci(t);else if(r=e.o,3==r||0==r&&0<t.I||!(1==i&&si(t,e)||2==i&&ui(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:yi(t,5);break;case 4:yi(t,10);break;case 3:yi(t,6);break;default:yi(t,2)}}function di(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function yi(t,e){if(t.h.info("Error code "+e),2==e){var n=null;t.j&&(n=null);var i=y(t.jb,t);n||(n=new Xe("//www.google.com/images/cleardot.gif"),a.location&&"http"==a.location.protocol||$e(n,"https"),ze(n)),Dn(n.toString(),i)}else he(2);t.G=0,t.j&&t.j.va(e),vi(t),ni(t)}function vi(t){t.G=0,t.I=-1,t.j&&(0==In(t.i).length&&0==t.l.length||(t.i.i.length=0,C(t.l),t.l.length=0),t.j.ua())}function bi(t,e,n){let i=Ze(n);if(""!=i.i)e&&Ge(i,e+"."+i.i),Ye(i,i.m);else{const t=a.location;i=Qe(t.protocol,e?e+"."+t.hostname:t.hostname,+t.port,n)}return t.aa&&M(t.aa,(function(t,e){qe(i,e,t)})),e=t.D,n=t.sa,e&&n&&qe(i,e,n),qe(i,"VER",t.ma),ai(t,i),i}function mi(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Bn(new _n({ib:!0})):new Bn(t.qa),e.L=t.H,e}function wi(){}function Ei(){if(W&&!(10<=Number(et)))throw Error("Environmental error: no available transport.")}function Ti(t,e){Ct.call(this),this.g=new Qn(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!O(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!O(e)&&(this.g.D=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ai(this)}function Si(t){be.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Ii(){me.call(this),this.status=1}function Ai(t){this.g=t}i=Bn.prototype,i.ea=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():ye.g(),this.C=this.u?ge(this.u):ge(ye),this.g.onreadystatechange=y(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){return void Un(this,s)}t=n||"";const r=new He(this.headers);i&&Ne(i,(function(t,e){r.set(e,t)})),i=I(r.T()),n=a.FormData&&t instanceof a.FormData,!(0<=T(Kn,e))||i||n||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r.forEach((function(t,e){this.g.setRequestHeader(e,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Gn(this),0<this.B&&((this.K=Fn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=y(this.pa,this)):this.A=Ut(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Un(this,s)}},i.pa=function(){"undefined"!=typeof o&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ot(this,"timeout"),this.abort(8))},i.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ot(this,"complete"),Ot(this,"abort"),$n(this))},i.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),$n(this,!0)),Bn.Z.M.call(this)},i.Fa=function(){this.s||(this.F||this.v||this.l?Vn(this):this.cb())},i.cb=function(){Vn(this)},i.ba=function(){try{return 2<Yn(this)?this.g.status:-1}catch(t){return-1}},i.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},i.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Pn(e)}},i.Da=function(){return this.m},i.La=function(){return"string"===typeof this.j?this.j:String(this.j)},i=Qn.prototype,i.ma=8,i.G=1,i.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(e){}},i.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const r=new Ee(this,this.h,t,void 0);let s=this.s;if(this.P&&(s?(s=x(s),B(s,this.P)):s=this.P),null===this.o&&(r.H=s),this.ja)t:{for(var e=0,n=0;n<this.l.length;n++){var i=this.l[n];if(i="__data__"in i.g&&(i=i.g.__data__,"string"===typeof i)?i.length:void 0,void 0===i)break;if(e+=i,4096<e){e=n;break t}if(4096===e||n===this.l.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=hi(this,r,e),n=Ve(this.F),qe(n,"RID",t),qe(n,"CVER",22),this.D&&qe(n,"X-HTTP-Session-Id",this.D),ai(this,n),this.o&&s&&zn(n,this.o,s),Tn(this.i,r),this.Ra&&qe(n,"TYPE","init"),this.ja?(qe(n,"$req",e),qe(n,"SID","null"),r.$=!0,Ce(r,n,null)):Ce(r,n,e),this.G=2}}else 3==this.G&&(t?oi(this,t):0==this.l.length||mn(this.i)||oi(this))},i.Ga=function(){if(this.u=null,fi(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=ue(y(this.bb,this),t)}},i.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,he(10),ei(this),fi(this))},i.ab=function(){null!=this.v&&(this.v=null,ei(this),ui(this),he(19))},i.jb=function(t){t?(this.h.info("Successfully pinged google.com"),he(2)):(this.h.info("Failed to ping google.com"),he(1))},i=wi.prototype,i.xa=function(){},i.wa=function(){},i.va=function(){},i.ua=function(){},i.Oa=function(){},Ei.prototype.g=function(t,e){return new Ti(t,e)},b(Ti,Ct),Ti.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Pt(y(t.hb,t,e))),he(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=bi(t,null,t.W),ri(t)},Ti.prototype.close=function(){ti(this.g)},Ti.prototype.u=function(t){if("string"===typeof t){var e={};e.__data__=t,ii(this.g,e)}else this.v?(e={},e.__data__=kt(t),ii(this.g,e)):ii(this.g,t)},Ti.prototype.M=function(){this.g.j=null,delete this.j,ti(this.g),delete this.g,Ti.Z.M.call(this)},b(Si,be),b(Ii,me),b(Ai,wi),Ai.prototype.xa=function(){Ot(this.g,"a")},Ai.prototype.wa=function(t){Ot(this.g,new Si(t))},Ai.prototype.va=function(t){Ot(this.g,new Ii(t))},Ai.prototype.ua=function(){Ot(this.g,"b")},Ei.prototype.createWebChannel=Ei.prototype.g,Ti.prototype.send=Ti.prototype.u,Ti.prototype.open=Ti.prototype.m,Ti.prototype.close=Ti.prototype.close,le.NO_ERROR=0,le.TIMEOUT=8,le.HTTP_ERROR=6,fe.COMPLETE="complete",de.EventType=ve,ve.OPEN="a",ve.CLOSE="b",ve.ERROR="c",ve.MESSAGE="d",Ct.prototype.listen=Ct.prototype.N,Bn.prototype.listenOnce=Bn.prototype.O,Bn.prototype.getLastError=Bn.prototype.La,Bn.prototype.getLastErrorCode=Bn.prototype.Da,Bn.prototype.getStatus=Bn.prototype.ba,Bn.prototype.getResponseJson=Bn.prototype.Qa,Bn.prototype.getResponseText=Bn.prototype.ga,Bn.prototype.send=Bn.prototype.ea;s.createWebChannelTransport=function(){return new Ei},s.getStatEventTarget=function(){return re()},s.ErrorCode=le,s.EventType=fe,s.Event=ne,s.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},s.FetchXmlHttpFactory=_n,s.WebChannel=de,s.XhrIo=Bn},6911:(t,e,n)=>{n.d(e,{KL:()=>yt});n(8675),n(3105),n(3462),n(3824),n(7380),n(1118),n(2801),n(1703),n(5229);var i=n(7805),r=n(1748),s=n(1618),o=n(5659);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const a="/firebase-messaging-sw.js",h="/firebase-cloud-messaging-push-scope",c="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",u="https://fcmregistrations.googleapis.com/v1",l="google.c.a.c_id",f="google.c.a.c_l",p="google.c.a.ts",g="google.c.a.e";var d,y;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function v(t){const e=new Uint8Array(t),n=btoa(String.fromCharCode(...e));return n.replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function b(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),i=atob(n),r=new Uint8Array(i.length);for(let s=0;s<i.length;++s)r[s]=i.charCodeAt(s);return r}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(t){t[t["DATA_MESSAGE"]=1]="DATA_MESSAGE",t[t["DISPLAY_NOTIFICATION"]=3]="DISPLAY_NOTIFICATION"})(d||(d={})),function(t){t["PUSH_RECEIVED"]="push-received",t["NOTIFICATION_CLICKED"]="notification-clicked"}(y||(y={}));const m="fcm_token_details_db",w=5,E="fcm_token_object_Store";async function T(t){if("databases"in indexedDB){const t=await indexedDB.databases(),e=t.map((t=>t.name));if(!e.includes(m))return null}let e=null;const n=await(0,r.X3)(m,w,{upgrade:async(n,i,r,s)=>{var o;if(i<2)return;if(!n.objectStoreNames.contains(E))return;const a=s.objectStore(E),h=await a.index("fcmSenderId").get(t);if(await a.clear(),h)if(2===i){const t=h;if(!t.auth||!t.p256dh||!t.endpoint)return;e={token:t.fcmToken,createTime:null!==(o=t.createTime)&&void 0!==o?o:Date.now(),subscriptionOptions:{auth:t.auth,p256dh:t.p256dh,endpoint:t.endpoint,swScope:t.swScope,vapidKey:"string"===typeof t.vapidKey?t.vapidKey:v(t.vapidKey)}}}else if(3===i){const t=h;e={token:t.fcmToken,createTime:t.createTime,subscriptionOptions:{auth:v(t.auth),p256dh:v(t.p256dh),endpoint:t.endpoint,swScope:t.swScope,vapidKey:v(t.vapidKey)}}}else if(4===i){const t=h;e={token:t.fcmToken,createTime:t.createTime,subscriptionOptions:{auth:v(t.auth),p256dh:v(t.p256dh),endpoint:t.endpoint,swScope:t.swScope,vapidKey:v(t.vapidKey)}}}}});return n.close(),await(0,r.Lj)(m),await(0,r.Lj)("fcm_vapid_details_db"),await(0,r.Lj)("undefined"),S(e)?e:null}function S(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return"number"===typeof t.createTime&&t.createTime>0&&"string"===typeof t.token&&t.token.length>0&&"string"===typeof e.auth&&e.auth.length>0&&"string"===typeof e.p256dh&&e.p256dh.length>0&&"string"===typeof e.endpoint&&e.endpoint.length>0&&"string"===typeof e.swScope&&e.swScope.length>0&&"string"===typeof e.vapidKey&&e.vapidKey.length>0}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I="firebase-messaging-database",A=1,C="firebase-messaging-store";let O=null;function D(){return O||(O=(0,r.X3)(I,A,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(C)}}})),O}async function k(t){const e=R(t),n=await D(),i=await n.transaction(C).objectStore(C).get(e);if(i)return i;{const e=await T(t.appConfig.senderId);if(e)return await _(t,e),e}}async function _(t,e){const n=R(t),i=await D(),r=i.transaction(C,"readwrite");return await r.objectStore(C).put(e,n),await r.done,e}async function j(t){const e=R(t),n=await D(),i=n.transaction(C,"readwrite");await i.objectStore(C).delete(e),await i.done}function R({appConfig:t}){return t.appId}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["only-available-in-window"]:"This method is available in a Window context.",["only-available-in-sw"]:"This method is available in a service worker context.",["permission-default"]:"The notification permission was not granted and dismissed instead.",["permission-blocked"]:"The notification permission was not granted and blocked instead.",["unsupported-browser"]:"This browser doesn't support the API's required to use the Firebase SDK.",["indexed-db-unsupported"]:"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)",["failed-service-worker-registration"]:"We are unable to register the default service worker. {$browserErrorMessage}",["token-subscribe-failed"]:"A problem occurred while subscribing the user to FCM: {$errorInfo}",["token-subscribe-no-token"]:"FCM returned no token when subscribing the user to push.",["token-unsubscribe-failed"]:"A problem occurred while unsubscribing the user from FCM: {$errorInfo}",["token-update-failed"]:"A problem occurred while updating the user from FCM: {$errorInfo}",["token-update-no-token"]:"FCM returned no token when updating the user to push.",["use-sw-after-get-token"]:"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",["invalid-sw-registration"]:"The input to useServiceWorker() must be a ServiceWorkerRegistration.",["invalid-bg-handler"]:"The input to setBackgroundMessageHandler() must be a function.",["invalid-vapid-key"]:"The public VAPID key must be a string.",["use-vapid-key-after-get-token"]:"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},M=new s.LL("messaging","Messaging",L);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function x(t,e){const n=await H(t),i=K(e),r={method:"POST",headers:n,body:JSON.stringify(i)};let s;try{const e=await fetch(N(t.appConfig),r);s=await e.json()}catch(o){throw M.create("token-subscribe-failed",{errorInfo:o})}if(s.error){const t=s.error.message;throw M.create("token-subscribe-failed",{errorInfo:t})}if(!s.token)throw M.create("token-subscribe-no-token");return s.token}async function P(t,e){const n=await H(t),i=K(e.subscriptionOptions),r={method:"PATCH",headers:n,body:JSON.stringify(i)};let s;try{const n=await fetch(`${N(t.appConfig)}/${e.token}`,r);s=await n.json()}catch(o){throw M.create("token-update-failed",{errorInfo:o})}if(s.error){const t=s.error.message;throw M.create("token-update-failed",{errorInfo:t})}if(!s.token)throw M.create("token-update-no-token");return s.token}async function B(t,e){const n=await H(t),i={method:"DELETE",headers:n};try{const n=await fetch(`${N(t.appConfig)}/${e}`,i),r=await n.json();if(r.error){const t=r.error.message;throw M.create("token-unsubscribe-failed",{errorInfo:t})}}catch(r){throw M.create("token-unsubscribe-failed",{errorInfo:r})}}function N({projectId:t}){return`${u}/projects/${t}/registrations`}async function H({appConfig:t,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function K({p256dh:t,auth:e,endpoint:n,vapidKey:i}){const r={web:{endpoint:n,auth:e,p256dh:t}};return i!==c&&(r.web.applicationPubKey=i),r}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F=6048e5;async function W(t){const e=await $(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:v(e.getKey("auth")),p256dh:v(e.getKey("p256dh"))},i=await k(t.firebaseDependencies);if(i){if(G(i.subscriptionOptions,n))return Date.now()>=i.createTime+F?X(t,{token:i.token,createTime:Date.now(),subscriptionOptions:n}):i.token;try{await B(t.firebaseDependencies,i.token)}catch(r){console.warn(r)}return V(t.firebaseDependencies,n)}return V(t.firebaseDependencies,n)}async function U(t){const e=await k(t.firebaseDependencies);e&&(await B(t.firebaseDependencies,e.token),await j(t.firebaseDependencies));const n=await t.swRegistration.pushManager.getSubscription();return!n||n.unsubscribe()}async function X(t,e){try{const n=await P(t.firebaseDependencies,e),i=Object.assign(Object.assign({},e),{token:n,createTime:Date.now()});return await _(t.firebaseDependencies,i),n}catch(n){throw await U(t),n}}async function V(t,e){const n=await x(t,e),i={token:n,createTime:Date.now(),subscriptionOptions:e};return await _(t,i),i.token}async function $(t,e){const n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:b(e)})}function G(t,e){const n=e.vapidKey===t.vapidKey,i=e.endpoint===t.endpoint,r=e.auth===t.auth,s=e.p256dh===t.p256dh;return n&&i&&r&&s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return J(e,t),q(e,t),z(e,t),e}function J(t,e){if(!e.notification)return;t.notification={};const n=e.notification.title;n&&(t.notification.title=n);const i=e.notification.body;i&&(t.notification.body=i);const r=e.notification.image;r&&(t.notification.image=r)}function q(t,e){e.data&&(t.data=e.data)}function z(t,e){var n,i,r,s,o;if(!e.fcmOptions&&!(null===(n=e.notification)||void 0===n?void 0:n.click_action))return;t.fcmOptions={};const a=null!==(r=null===(i=e.fcmOptions)||void 0===i?void 0:i.link)&&void 0!==r?r:null===(s=e.notification)||void 0===s?void 0:s.click_action;a&&(t.fcmOptions.link=a);const h=null===(o=e.fcmOptions)||void 0===o?void 0:o.analytics_label;h&&(t.fcmOptions.analyticsLabel=h)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(t){return"object"===typeof t&&!!t&&l in t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(t,e){const n=[];for(let i=0;i<t.length;i++)n.push(t.charAt(i)),i<e.length&&n.push(e.charAt(i));return n.join("")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(t){if(!t||!t.options)throw et("App Configuration Object");if(!t.name)throw et("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(const i of e)if(!n[i])throw et(i);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function et(t){return M.create("missing-app-config-values",{valueName:t})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Q("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o"),Q("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");class nt{constructor(t,e,n){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const i=tt(t);this.firebaseDependencies={app:t,appConfig:i,installations:e,analyticsProvider:n}}_delete(){return Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function it(t){var e;try{t.swRegistration=await navigator.serviceWorker.register(a,{scope:h}),t.swRegistration.update().catch((()=>{}))}catch(n){throw M.create("failed-service-worker-registration",{browserErrorMessage:null===(e=n)||void 0===e?void 0:e.message})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rt(t,e){if(e||t.swRegistration||await it(t),e||!t.swRegistration){if(!(e instanceof ServiceWorkerRegistration))throw M.create("invalid-sw-registration");t.swRegistration=e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function st(t,e){e?t.vapidKey=e:t.vapidKey||(t.vapidKey=c)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ot(t,e){if(!navigator)throw M.create("only-available-in-window");if("default"===Notification.permission&&await Notification.requestPermission(),"granted"!==Notification.permission)throw M.create("permission-blocked");return await st(t,null===e||void 0===e?void 0:e.vapidKey),await rt(t,null===e||void 0===e?void 0:e.serviceWorkerRegistration),W(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function at(t,e,n){const i=ht(e),r=await t.firebaseDependencies.analyticsProvider.get();r.logEvent(i,{message_id:n[l],message_name:n[f],message_time:n[p],message_device_time:Math.floor(Date.now()/1e3)})}function ht(t){switch(t){case y.NOTIFICATION_CLICKED:return"notification_open";case y.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ct(t,e){const n=e.data;if(!n.isFirebaseMessaging)return;t.onMessageHandler&&n.messageType===y.PUSH_RECEIVED&&("function"===typeof t.onMessageHandler?t.onMessageHandler(Y(n)):t.onMessageHandler.next(Y(n)));const i=n.data;Z(i)&&"1"===i[g]&&await at(t,n.messageType,i)}const ut="@firebase/messaging",lt="0.9.14",ft=t=>{const e=new nt(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",(t=>ct(e,t))),e},pt=t=>{const e=t.getProvider("messaging").getImmediate(),n={getToken:t=>ot(e,t)};return n};function gt(){(0,o.Xd)(new i.wA("messaging",ft,"PUBLIC")),(0,o.Xd)(new i.wA("messaging-internal",pt,"PRIVATE")),(0,o.KN)(ut,lt),(0,o.KN)(ut,lt,"esm2017")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dt(){try{await(0,s.eu)()}catch(t){return!1}return"undefined"!==typeof window&&(0,s.hl)()&&(0,s.zI)()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function yt(t=(0,o.Mq)()){return dt().then((t=>{if(!t)throw M.create("unsupported-browser")}),(t=>{throw M.create("indexed-db-unsupported")})),(0,o.qX)((0,s.m9)(t),"messaging").getImmediate()}gt()},7366:(t,e,n)=>{n.d(e,{Yd:()=>c,in:()=>r});n(1703);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i=[];var r;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(r||(r={}));const s={debug:r.DEBUG,verbose:r.VERBOSE,info:r.INFO,warn:r.WARN,error:r.ERROR,silent:r.SILENT},o=r.INFO,a={[r.DEBUG]:"log",[r.VERBOSE]:"log",[r.INFO]:"info",[r.WARN]:"warn",[r.ERROR]:"error"},h=(t,e,...n)=>{if(e<t.logLevel)return;const i=(new Date).toISOString(),r=a[e];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[r](`[${i}]  ${t.name}:`,...n)};class c{constructor(t){this.name=t,this._logLevel=o,this._logHandler=h,this._userLogHandler=null,i.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in r))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?s[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,r.DEBUG,...t),this._logHandler(this,r.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,r.VERBOSE,...t),this._logHandler(this,r.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,r.INFO,...t),this._logHandler(this,r.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,r.WARN,...t),this._logHandler(this,r.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,r.ERROR,...t),this._logHandler(this,r.ERROR,...t)}}},1748:(t,e,n)=>{n.d(e,{Lj:()=>T,X3:()=>E});n(2801);const i=(t,e)=>e.some((e=>t instanceof e));let r,s;function o(){return r||(r=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function a(){return s||(s=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,c=new WeakMap,u=new WeakMap,l=new WeakMap,f=new WeakMap;function p(t){const e=new Promise(((e,n)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",s)},r=()=>{e(m(t.result)),i()},s=()=>{n(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",s)}));return e.then((e=>{e instanceof IDBCursor&&h.set(e,t)})).catch((()=>{})),f.set(e,t),e}function g(t){if(c.has(t))return;const e=new Promise(((e,n)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",s),t.removeEventListener("abort",s)},r=()=>{e(),i()},s=()=>{n(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",s),t.addEventListener("abort",s)}));c.set(t,e)}let d={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return c.get(t);if("objectStoreNames"===e)return t.objectStoreNames||u.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return m(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t}};function y(t){d=t(d)}function v(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?a().includes(t)?function(...e){return t.apply(w(this),e),m(h.get(this))}:function(...e){return m(t.apply(w(this),e))}:function(e,...n){const i=t.call(w(this),e,...n);return u.set(i,e.sort?e.sort():[e]),m(i)}}function b(t){return"function"===typeof t?v(t):(t instanceof IDBTransaction&&g(t),i(t,o())?new Proxy(t,d):t)}function m(t){if(t instanceof IDBRequest)return p(t);if(l.has(t))return l.get(t);const e=b(t);return e!==t&&(l.set(t,e),f.set(e,t)),e}const w=t=>f.get(t);function E(t,e,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(t,e),a=m(o);return i&&o.addEventListener("upgradeneeded",(t=>{i(m(o.result),t.oldVersion,t.newVersion,m(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((t=>{s&&t.addEventListener("close",(()=>s())),r&&t.addEventListener("versionchange",(()=>r()))})).catch((()=>{})),a}function T(t,{blocked:e}={}){const n=indexedDB.deleteDatabase(t);return e&&n.addEventListener("blocked",(()=>e())),m(n).then((()=>{}))}const S=["get","getKey","getAll","getAllKeys","count"],I=["put","add","delete","clear"],A=new Map;function C(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!==typeof e)return;if(A.get(e))return A.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=I.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!r&&!S.includes(n))return;const s=async function(t,...e){const s=this.transaction(t,r?"readwrite":"readonly");let o=s.store;return i&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),r&&s.done]))[0]};return A.set(e,s),s}y((t=>({...t,get:(e,n,i)=>C(e,n)||t.get(e,n,i),has:(e,n)=>!!C(e,n)||t.has(e,n)})))}}]);