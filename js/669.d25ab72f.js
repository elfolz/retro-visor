(globalThis["webpackChunkRetro_visor"]=globalThis["webpackChunkRetro_visor"]||[]).push([[669],{1223:(e,t,r)=>{var a=r(5112),n=r(30),i=r(3070).f,s=a("unscopables"),o=Array.prototype;void 0==o[s]&&i(o,s,{configurable:!0,value:n(null)}),e.exports=function(e){o[s][e]=!0}},5787:(e,t,r)=>{var a=r(7976),n=TypeError;e.exports=function(e,t){if(a(t,e))return e;throw n("Incorrect invocation")}},3678:e=>{e.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},30:(e,t,r)=>{var a,n=r(9670),i=r(6048),s=r(748),o=r(3501),c=r(490),h=r(317),p=r(6200),l=">",f="<",u="prototype",d="script",m=p("IE_PROTO"),b=function(){},g=function(e){return f+d+l+e+f+"/"+d+l},E=function(e){e.write(g("")),e.close();var t=e.parentWindow.Object;return e=null,t},_=function(){var e,t=h("iframe"),r="java"+d+":";return t.style.display="none",c.appendChild(t),t.src=String(r),e=t.contentWindow.document,e.open(),e.write(g("document.F=Object")),e.close(),e.F},v=function(){try{a=new ActiveXObject("htmlfile")}catch(t){}v="undefined"!=typeof document?document.domain&&a?E(a):_():E(a);var e=s.length;while(e--)delete v[u][s[e]];return v()};o[m]=!0,e.exports=Object.create||function(e,t){var r;return null!==e?(b[u]=n(e),r=new b,b[u]=null,r[m]=e):r=v(),void 0===t?r:i.f(r,t)}},6048:(e,t,r)=>{var a=r(9781),n=r(3353),i=r(3070),s=r(9670),o=r(5656),c=r(1956);t.f=a&&!n?Object.defineProperties:function(e,t){s(e);var r,a=o(t),n=c(t),h=n.length,p=0;while(h>p)i.f(e,r=n[p++],a[r]);return e}},1956:(e,t,r)=>{var a=r(6324),n=r(748);e.exports=Object.keys||function(e){return a(e,n)}},2262:(e,t,r)=>{"use strict";var a=r(2109),n=r(7908),i=r(6244),s=r(9303),o=r(1223);a({target:"Array",proto:!0},{at:function(e){var t=n(this),r=i(t),a=s(e),o=a>=0?a:r+a;return o<0||o>=r?void 0:t[o]}}),o("at")},4506:(e,t,r)=>{"use strict";var a=r(2109),n=r(1702),i=r(4488),s=r(9303),o=r(1340),c=r(7293),h=n("".charAt),p=c((function(){return"\ud842"!=="𠮷".at(-2)}));a({target:"String",proto:!0,forced:p},{at:function(e){var t=o(i(this)),r=t.length,a=s(e),n=a>=0?a:r+a;return n<0||n>=r?void 0:h(t,n)}})},2801:(e,t,r)=>{"use strict";var a=r(2109),n=r(5005),i=r(9114),s=r(3070).f,o=r(2597),c=r(5787),h=r(9587),p=r(6277),l=r(3678),f=r(7741),u=r(1913),d="DOMException",m=n("Error"),b=n(d),g=function(){c(this,E);var e=arguments.length,t=p(e<1?void 0:arguments[0]),r=p(e<2?void 0:arguments[1],"Error"),a=new b(t,r),n=m(t);return n.name=d,s(a,"stack",i(1,f(n.stack,1))),h(a,this,g),a},E=g.prototype=b.prototype,_="stack"in m(d),v="stack"in new b(1,2),w=_&&!v;a({global:!0,constructor:!0,forced:u||w},{DOMException:w?g:b});var R=n(d),D=R.prototype;if(D.constructor!==R)for(var I in u||s(D,"constructor",i(1,R)),l)if(o(l,I)){var C=l[I],A=C.s;o(R,A)||s(R,A,i(6,C.c))}},9017:(e,t,r)=>{"use strict";r.d(t,{ZF:()=>a.ZF});var a=r(5659),n="firebase",i="9.8.3";
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
(0,a.KN)(n,i,"app")},5659:(e,t,r)=>{"use strict";r.d(t,{Jn:()=>Y,KN:()=>J,Mq:()=>z,Xd:()=>V,ZF:()=>q,qX:()=>B});var a=r(7805),n=r(7366),i=r(1618),s=r(1748);
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
class o{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(c(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function c(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const h="@firebase/app",p="0.7.26",l=new n.Yd("@firebase/app"),f="@firebase/app-compat",u="@firebase/analytics-compat",d="@firebase/analytics",m="@firebase/app-check-compat",b="@firebase/app-check",g="@firebase/auth",E="@firebase/auth-compat",_="@firebase/database",v="@firebase/database-compat",w="@firebase/functions",R="@firebase/functions-compat",D="@firebase/installations",I="@firebase/installations-compat",C="@firebase/messaging",A="@firebase/messaging-compat",y="@firebase/performance",O="@firebase/performance-compat",N="@firebase/remote-config",S="@firebase/remote-config-compat",T="@firebase/storage",M="@firebase/storage-compat",k="@firebase/firestore",P="@firebase/firestore-compat",$="firebase",j="9.8.3",L="[DEFAULT]",H={[h]:"fire-core",[f]:"fire-core-compat",[d]:"fire-analytics",[u]:"fire-analytics-compat",[b]:"fire-app-check",[m]:"fire-app-check-compat",[g]:"fire-auth",[E]:"fire-auth-compat",[_]:"fire-rtdb",[v]:"fire-rtdb-compat",[w]:"fire-fn",[R]:"fire-fn-compat",[D]:"fire-iid",[I]:"fire-iid-compat",[C]:"fire-fcm",[A]:"fire-fcm-compat",[y]:"fire-perf",[O]:"fire-perf-compat",[N]:"fire-rc",[S]:"fire-rc-compat",[T]:"fire-gcs",[M]:"fire-gcs-compat",[k]:"fire-fst",[P]:"fire-fst-compat","fire-js":"fire-js",[$]:"fire-js-all"},U=new Map,F=new Map;function x(e,t){try{e.container.addComponent(t)}catch(r){l.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,r)}}function V(e){const t=e.name;if(F.has(t))return l.debug(`There were multiple attempts to register component ${t}.`),!1;F.set(t,e);for(const r of U.values())x(r,e);return!0}function B(e,t){const r=e.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),e.container.getProvider(t)}
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
const W={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},X=new i.LL("app","Firebase",W);
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
class Z{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new a.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw X.create("app-deleted",{appName:this._name})}}
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
 */const Y=j;function q(e,t={}){if("object"!==typeof t){const e=t;t={name:e}}const r=Object.assign({name:L,automaticDataCollectionEnabled:!1},t),n=r.name;if("string"!==typeof n||!n)throw X.create("bad-app-name",{appName:String(n)});const s=U.get(n);if(s){if((0,i.vZ)(e,s.options)&&(0,i.vZ)(r,s.config))return s;throw X.create("duplicate-app",{appName:n})}const o=new a.H0(n);for(const a of F.values())o.addComponent(a);const c=new Z(e,r,o);return U.set(n,c),c}function z(e=L){const t=U.get(e);if(!t)throw X.create("no-app",{appName:e});return t}function J(e,t,r){var n;let i=null!==(n=H[e])&&void 0!==n?n:e;r&&(i+=`-${r}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${i}" with version "${t}":`];return s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void l.warn(e.join(" "))}V(new a.wA(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}
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
const K="firebase-heartbeat-database",Q=1,G="firebase-heartbeat-store";let ee=null;function te(){return ee||(ee=(0,s.X3)(K,Q,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(G)}}}).catch((e=>{throw X.create("storage-open",{originalErrorMessage:e.message})}))),ee}async function re(e){var t;try{const t=await te();return t.transaction(G).objectStore(G).get(ne(e))}catch(r){throw X.create("storage-get",{originalErrorMessage:null===(t=r)||void 0===t?void 0:t.message})}}async function ae(e,t){var r;try{const r=await te(),a=r.transaction(G,"readwrite"),n=a.objectStore(G);return await n.put(t,ne(e)),a.done}catch(a){throw X.create("storage-set",{originalErrorMessage:null===(r=a)||void 0===r?void 0:r.message})}}function ne(e){return`${e.name}!${e.options.appId}`}
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
 */const ie=1024,se=2592e6;class oe{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new pe(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),r=ce();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==r&&!this._heartbeatsCache.heartbeats.some((e=>e.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),r=Date.now();return r-t<=se})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=ce(),{heartbeatsToSend:t,unsentEntries:r}=he(this._heartbeatsCache.heartbeats),a=(0,i.L)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}}function ce(){const e=new Date;return e.toISOString().substring(0,10)}function he(e,t=ie){const r=[];let a=e.slice();for(const n of e){const e=r.find((e=>e.agent===n.agent));if(e){if(e.dates.push(n.date),le(r)>t){e.dates.pop();break}}else if(r.push({agent:n.agent,dates:[n.date]}),le(r)>t){r.pop();break}a=a.slice(1)}return{heartbeatsToSend:r,unsentEntries:a}}class pe{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,i.hl)()&&(0,i.eu)().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await re(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const r=await this._canUseIndexedDBPromise;if(r){const r=await this.read();return ae(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const r=await this._canUseIndexedDBPromise;if(r){const r=await this.read();return ae(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}}}function le(e){return(0,i.L)(JSON.stringify({version:2,heartbeats:e})).length}
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
 */function fe(e){V(new a.wA("platform-logger",(e=>new o(e)),"PRIVATE")),V(new a.wA("heartbeat",(e=>new oe(e)),"PRIVATE")),J(h,p,e),J(h,p,"esm2017"),J("fire-js","")}fe("")}}]);