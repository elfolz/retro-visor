(globalThis["webpackChunkRetro_visor"]=globalThis["webpackChunkRetro_visor"]||[]).push([[94],{2262:(e,t,a)=>{"use strict";var r=a(2109),n=a(7908),i=a(6244),s=a(9303),o=a(1223);r({target:"Array",proto:!0},{at:function(e){var t=n(this),a=i(t),r=s(e),o=r>=0?r:a+r;return o<0||o>=a?void 0:t[o]}}),o("at")},4506:(e,t,a)=>{"use strict";var r=a(2109),n=a(1702),i=a(4488),s=a(9303),o=a(1340),c=a(7293),h=n("".charAt),p=c((function(){return"\ud842"!=="𠮷".at(-2)}));r({target:"String",proto:!0,forced:p},{at:function(e){var t=o(i(this)),a=t.length,r=s(e),n=r>=0?r:a+r;return n<0||n>=a?void 0:h(t,n)}})},8675:(e,t,a)=>{"use strict";var r=a(260),n=a(6244),i=a(9303),s=r.aTypedArray,o=r.exportTypedArrayMethod;o("at",(function(e){var t=s(this),a=n(t),r=i(e),o=r>=0?r:a+r;return o<0||o>=a?void 0:t[o]}))},3105:(e,t,a)=>{"use strict";var r=a(260),n=a(1285),i=a(4599),s=a(648),o=a(6916),c=a(1702),h=a(7293),p=r.aTypedArray,f=r.exportTypedArrayMethod,u=c("".slice),l=h((function(){var e=0;return new Int8Array(2).fill({valueOf:function(){return e++}}),1!==e}));f("fill",(function(e){var t=arguments.length;p(this);var a="Big"===u(s(this),0,3)?i(e):+e;return o(n,this,a,t>1?arguments[1]:void 0,t>2?arguments[2]:void 0)}),l)},2958:(e,t,a)=>{"use strict";var r=a(260),n=a(712).findLastIndex,i=r.aTypedArray,s=r.exportTypedArrayMethod;s("findLastIndex",(function(e){return n(i(this),e,arguments.length>1?arguments[1]:void 0)}))},3408:(e,t,a)=>{"use strict";var r=a(260),n=a(712).findLast,i=r.aTypedArray,s=r.exportTypedArrayMethod;s("findLast",(function(e){return n(i(this),e,arguments.length>1?arguments[1]:void 0)}))},3462:(e,t,a)=>{"use strict";var r=a(7854),n=a(6916),i=a(260),s=a(6244),o=a(4590),c=a(7908),h=a(7293),p=r.RangeError,f=r.Int8Array,u=f&&f.prototype,l=u&&u.set,d=i.aTypedArray,g=i.exportTypedArrayMethod,b=!h((function(){var e=new Uint8ClampedArray(2);return n(l,e,{length:1,0:3},1),3!==e[1]})),m=b&&i.NATIVE_ARRAY_BUFFER_VIEWS&&h((function(){var e=new f(2);return e.set(1),e.set("2",1),0!==e[0]||2!==e[1]}));g("set",(function(e){d(this);var t=o(arguments.length>1?arguments[1]:void 0,1),a=c(e);if(b)return n(l,this,a,t);var r=this.length,i=s(a),h=0;if(i+t>r)throw p("Wrong length");while(h<i)this[t+h]=a[h++]}),!b||m)},3824:(e,t,a)=>{"use strict";var r=a(7854),n=a(1702),i=a(7293),s=a(9662),o=a(4362),c=a(260),h=a(8886),p=a(256),f=a(7392),u=a(8008),l=c.aTypedArray,d=c.exportTypedArrayMethod,g=r.Uint16Array,b=g&&n(g.prototype.sort),m=!!b&&!(i((function(){b(new g(2),null)}))&&i((function(){b(new g(2),{})}))),v=!!b&&!i((function(){if(f)return f<74;if(h)return h<67;if(p)return!0;if(u)return u<602;var e,t,a=new g(516),r=Array(516);for(e=0;e<516;e++)t=e%4,a[e]=515-e,r[e]=e-2*t+3;for(b(a,(function(e,t){return(e/4|0)-(t/4|0)})),e=0;e<516;e++)if(a[e]!==r[e])return!0})),w=function(e){return function(t,a){return void 0!==e?+e(t,a)||0:a!==a?-1:t!==t?1:0===t&&0===a?1/t>0&&1/a<0?1:-1:t>a}};d("sort",(function(e){return void 0!==e&&s(e),v?b(this,e):o(l(this),w(e))}),!v||m)},1118:(e,t,a)=>{a(2958)},7380:(e,t,a)=>{a(3408)},2801:(e,t,a)=>{"use strict";var r=a(2109),n=a(5005),i=a(9114),s=a(3070).f,o=a(2597),c=a(5787),h=a(9587),p=a(6277),f=a(3678),u=a(7741),l=a(1913),d="DOMException",g=n("Error"),b=n(d),m=function(){c(this,v);var e=arguments.length,t=p(e<1?void 0:arguments[0]),a=p(e<2?void 0:arguments[1],"Error"),r=new b(t,a),n=g(t);return n.name=d,s(r,"stack",i(1,u(n.stack,1))),h(r,this,m),r},v=m.prototype=b.prototype,w="stack"in g(d),y="stack"in new b(1,2),_=w&&!y;r({global:!0,constructor:!0,forced:l||_},{DOMException:_?m:b});var C=n(d),D=C.prototype;if(D.constructor!==C)for(var A in l||s(D,"constructor",i(1,C)),f)if(o(f,A)){var E=f[A],I=E.s;o(C,I)||s(C,I,i(6,E.c))}},9017:(e,t,a)=>{"use strict";a.d(t,{ZF:()=>r.ZF});var r=a(5659),n="firebase",i="9.8.3";
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
(0,r.KN)(n,i,"app")},5659:(e,t,a)=>{"use strict";a.d(t,{Jn:()=>q,KN:()=>Y,Mq:()=>W,Xd:()=>B,ZF:()=>K,qX:()=>V});var r=a(7805),n=a(7366),i=a(1618),s=a(1748);
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
class o{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(c(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function c(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const h="@firebase/app",p="0.7.26",f=new n.Yd("@firebase/app"),u="@firebase/app-compat",l="@firebase/analytics-compat",d="@firebase/analytics",g="@firebase/app-check-compat",b="@firebase/app-check",m="@firebase/auth",v="@firebase/auth-compat",w="@firebase/database",y="@firebase/database-compat",_="@firebase/functions",C="@firebase/functions-compat",D="@firebase/installations",A="@firebase/installations-compat",E="@firebase/messaging",I="@firebase/messaging-compat",S="@firebase/performance",k="@firebase/performance-compat",$="@firebase/remote-config",T="@firebase/remote-config-compat",M="@firebase/storage",x="@firebase/storage-compat",N="@firebase/firestore",O="@firebase/firestore-compat",P="firebase",F="9.8.3",j="[DEFAULT]",H={[h]:"fire-core",[u]:"fire-core-compat",[d]:"fire-analytics",[l]:"fire-analytics-compat",[b]:"fire-app-check",[g]:"fire-app-check-compat",[m]:"fire-auth",[v]:"fire-auth-compat",[w]:"fire-rtdb",[y]:"fire-rtdb-compat",[_]:"fire-fn",[C]:"fire-fn-compat",[D]:"fire-iid",[A]:"fire-iid-compat",[E]:"fire-fcm",[I]:"fire-fcm-compat",[S]:"fire-perf",[k]:"fire-perf-compat",[$]:"fire-rc",[T]:"fire-rc-compat",[M]:"fire-gcs",[x]:"fire-gcs-compat",[N]:"fire-fst",[O]:"fire-fst-compat","fire-js":"fire-js",[P]:"fire-js-all"},L=new Map,R=new Map;function U(e,t){try{e.container.addComponent(t)}catch(a){f.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,a)}}function B(e){const t=e.name;if(R.has(t))return f.debug(`There were multiple attempts to register component ${t}.`),!1;R.set(t,e);for(const a of L.values())U(a,e);return!0}function V(e,t){const a=e.container.getProvider("heartbeat").getImmediate({optional:!0});return a&&a.triggerHeartbeat(),e.container.getProvider(t)}
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
const Z={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},J=new i.LL("app","Firebase",Z);
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
class X{constructor(e,t,a){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=a,this.container.addComponent(new r.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw J.create("app-deleted",{appName:this._name})}}
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
 */const q=F;function K(e,t={}){if("object"!==typeof t){const e=t;t={name:e}}const a=Object.assign({name:j,automaticDataCollectionEnabled:!1},t),n=a.name;if("string"!==typeof n||!n)throw J.create("bad-app-name",{appName:String(n)});const s=L.get(n);if(s){if((0,i.vZ)(e,s.options)&&(0,i.vZ)(a,s.config))return s;throw J.create("duplicate-app",{appName:n})}const o=new r.H0(n);for(const r of R.values())o.addComponent(r);const c=new X(e,a,o);return L.set(n,c),c}function W(e=j){const t=L.get(e);if(!t)throw J.create("no-app",{appName:e});return t}function Y(e,t,a){var n;let i=null!==(n=H[e])&&void 0!==n?n:e;a&&(i+=`-${a}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${i}" with version "${t}":`];return s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void f.warn(e.join(" "))}B(new r.wA(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}
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
const z="firebase-heartbeat-database",G=1,Q="firebase-heartbeat-store";let ee=null;function te(){return ee||(ee=(0,s.X3)(z,G,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Q)}}}).catch((e=>{throw J.create("storage-open",{originalErrorMessage:e.message})}))),ee}async function ae(e){var t;try{const t=await te();return t.transaction(Q).objectStore(Q).get(ne(e))}catch(a){throw J.create("storage-get",{originalErrorMessage:null===(t=a)||void 0===t?void 0:t.message})}}async function re(e,t){var a;try{const a=await te(),r=a.transaction(Q,"readwrite"),n=r.objectStore(Q);return await n.put(t,ne(e)),r.done}catch(r){throw J.create("storage-set",{originalErrorMessage:null===(a=r)||void 0===a?void 0:a.message})}}function ne(e){return`${e.name}!${e.options.appId}`}
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
 */const ie=1024,se=2592e6;class oe{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new pe(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),a=ce();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==a&&!this._heartbeatsCache.heartbeats.some((e=>e.date===a)))return this._heartbeatsCache.heartbeats.push({date:a,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),a=Date.now();return a-t<=se})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=ce(),{heartbeatsToSend:t,unsentEntries:a}=he(this._heartbeatsCache.heartbeats),r=(0,i.L)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function ce(){const e=new Date;return e.toISOString().substring(0,10)}function he(e,t=ie){const a=[];let r=e.slice();for(const n of e){const e=a.find((e=>e.agent===n.agent));if(e){if(e.dates.push(n.date),fe(a)>t){e.dates.pop();break}}else if(a.push({agent:n.agent,dates:[n.date]}),fe(a)>t){a.pop();break}r=r.slice(1)}return{heartbeatsToSend:a,unsentEntries:r}}class pe{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,i.hl)()&&(0,i.eu)().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await ae(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const a=await this._canUseIndexedDBPromise;if(a){const a=await this.read();return re(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:a.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const a=await this._canUseIndexedDBPromise;if(a){const a=await this.read();return re(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...e.heartbeats]})}}}function fe(e){return(0,i.L)(JSON.stringify({version:2,heartbeats:e})).length}
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
 */function ue(e){B(new r.wA("platform-logger",(e=>new o(e)),"PRIVATE")),B(new r.wA("heartbeat",(e=>new oe(e)),"PRIVATE")),Y(h,p,e),Y(h,p,"esm2017"),Y("fire-js","")}ue("")}}]);