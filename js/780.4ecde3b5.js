"use strict";(globalThis["webpackChunkRetro_visor"]=globalThis["webpackChunkRetro_visor"]||[]).push([[780],{5843:(t,e,n)=>{n.d(e,{_O:()=>i.N,hJ:()=>i.Q,O4:()=>i.U,c4:()=>i.W,v0:()=>i.n,cx:()=>i.j,F6:()=>i.f});var i=n(8084);n(1618),n(5659),n(7366),n(7805)},4918:(t,e,n)=>{n.d(e,{ad:()=>i.ad});var i=n(4003)},7805:(t,e,n)=>{n.d(e,{H0:()=>u,wA:()=>a});n(1703);var i=n(1618);class a{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
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
 */const s="[DEFAULT]";
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
 */class r{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new i.BH;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),i=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(a){if(i)return null;throw a}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(c(t))try{this.getOrInitializeService({instanceIdentifier:s})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:i});n.resolve(t)}catch(e){}}}}clearInstance(t=s){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=s){return this.instances.has(t)}getOptions(t=s){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[a,s]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(a);n===t&&s.resolve(i)}return i}onInit(t,e){var n;const i=this.normalizeInstanceIdentifier(e),a=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;a.add(t),this.onInitCallbacks.set(i,a);const s=this.instances.get(i);return s&&t(s,i),()=>{a.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const a of n)try{a(t,e)}catch(i){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:o(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(i){}return n||null}normalizeInstanceIdentifier(t=s){return this.component?this.component.multipleInstances?t:s:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function o(t){return t===s?void 0:t}function c(t){return"EAGER"===t.instantiationMode}
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
 */class u{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new r(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},5229:(t,e,n)=>{n(2801),n(8675),n(3105),n(3462),n(3824),n(7380),n(1118);var i=n(5659),a=n(7805),s=n(1618),r=n(1748);const o="@firebase/installations",c="0.5.10",u=1e4,l=`w:${c}`,f="FIS_v2",d="https://firebaseinstallations.googleapis.com/v1",p=36e5,h="installations",g="Installations",m={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},w=new s.LL(h,g,m);function I(t){return t instanceof s.ZR&&t.code.includes("request-failed")}
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
 */function v({projectId:t}){return`${d}/projects/${t}/installations`}function C(t){return{token:t.token,requestStatus:2,expiresIn:T(t.expiresIn),creationTime:Date.now()}}async function y(t,e){const n=await e.json(),i=n.error;return w.create("request-failed",{requestName:t,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function b({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function S(t,{refreshToken:e}){const n=b(t);return n.append("Authorization",O(e)),n}async function k(t){const e=await t();return e.status>=500&&e.status<600?t():e}function T(t){return Number(t.replace("s","000"))}function O(t){return`${f} ${t}`}
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
 */async function P({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const i=v(t),a=b(t),s=e.getImmediate({optional:!0});if(s){const t=await s.getHeartbeatsHeader();t&&a.append("x-firebase-client",t)}const r={fid:n,authVersion:f,appId:t.appId,sdkVersion:l},o={method:"POST",headers:a,body:JSON.stringify(r)},c=await k((()=>fetch(i,o)));if(c.ok){const t=await c.json(),e={fid:t.fid||n,registrationStatus:2,refreshToken:t.refreshToken,authToken:C(t.authToken)};return e}throw await y("Create Installation",c)}
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
 */function z(t){return new Promise((e=>{setTimeout(e,t)}))}
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
 */function j(t){const e=btoa(String.fromCharCode(...t));return e.replace(/\+/g,"-").replace(/\//g,"_")}
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
 */const $=/^[cdef][\w-]{21}$/,A="";function E(){try{const t=new Uint8Array(17),e=self.crypto||self.msCrypto;e.getRandomValues(t),t[0]=112+t[0]%16;const n=q(t);return $.test(n)?n:A}catch(t){return A}}function q(t){const e=j(t);return e.substr(0,22)}
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
 */function D(t){return`${t.appName}!${t.appId}`}
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
 */const M=new Map;function N(t,e){const n=D(t);L(n,e),F(n,e)}function L(t,e){const n=M.get(t);if(n)for(const i of n)i(e)}function F(t,e){const n=_();n&&n.postMessage({key:t,fid:e}),x()}let R=null;function _(){return!R&&"BroadcastChannel"in self&&(R=new BroadcastChannel("[Firebase] FID Change"),R.onmessage=t=>{L(t.data.key,t.data.fid)}),R}function x(){0===M.size&&R&&(R.close(),R=null)}
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
 */const H="firebase-installations-database",K=1,X="firebase-installations-store";let V=null;function B(){return V||(V=(0,r.X3)(H,K,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(X)}}})),V}async function U(t,e){const n=D(t),i=await B(),a=i.transaction(X,"readwrite"),s=a.objectStore(X),r=await s.get(n);return await s.put(e,n),await a.done,r&&r.fid===e.fid||N(t,e.fid),e}async function J(t){const e=D(t),n=await B(),i=n.transaction(X,"readwrite");await i.objectStore(X).delete(e),await i.done}async function G(t,e){const n=D(t),i=await B(),a=i.transaction(X,"readwrite"),s=a.objectStore(X),r=await s.get(n),o=e(r);return void 0===o?await s.delete(n):await s.put(o,n),await a.done,!o||r&&r.fid===o.fid||N(t,o.fid),o}
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
 */async function Z(t){let e;const n=await G(t.appConfig,(n=>{const i=Q(n),a=W(t,i);return e=a.registrationPromise,a.installationEntry}));return n.fid===A?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function Q(t){const e=t||{fid:E(),registrationStatus:0};return nt(e)}function W(t,e){if(0===e.registrationStatus){if(!navigator.onLine){const t=Promise.reject(w.create("app-offline"));return{installationEntry:e,registrationPromise:t}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=Y(t,n);return{installationEntry:n,registrationPromise:i}}return 1===e.registrationStatus?{installationEntry:e,registrationPromise:tt(t)}:{installationEntry:e}}async function Y(t,e){try{const n=await P(t,e);return U(t.appConfig,n)}catch(n){throw I(n)&&409===n.customData.serverCode?await J(t.appConfig):await U(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function tt(t){let e=await et(t.appConfig);while(1===e.registrationStatus)await z(100),e=await et(t.appConfig);if(0===e.registrationStatus){const{installationEntry:e,registrationPromise:n}=await Z(t);return n||e}return e}function et(t){return G(t,(t=>{if(!t)throw w.create("installation-not-found");return nt(t)}))}function nt(t){return it(t)?{fid:t.fid,registrationStatus:0}:t}function it(t){return 1===t.registrationStatus&&t.registrationTime+u<Date.now()}
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
 */async function at({appConfig:t,heartbeatServiceProvider:e},n){const i=st(t,n),a=S(t,n),s=e.getImmediate({optional:!0});if(s){const t=await s.getHeartbeatsHeader();t&&a.append("x-firebase-client",t)}const r={installation:{sdkVersion:l,appId:t.appId}},o={method:"POST",headers:a,body:JSON.stringify(r)},c=await k((()=>fetch(i,o)));if(c.ok){const t=await c.json(),e=C(t);return e}throw await y("Generate Auth Token",c)}function st(t,{fid:e}){return`${v(t)}/${e}/authTokens:generate`}
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
 */async function rt(t,e=!1){let n;const i=await G(t.appConfig,(i=>{if(!lt(i))throw w.create("not-registered");const a=i.authToken;if(!e&&ft(a))return i;if(1===a.requestStatus)return n=ot(t,e),i;{if(!navigator.onLine)throw w.create("app-offline");const e=pt(i);return n=ut(t,e),e}})),a=n?await n:i.authToken;return a}async function ot(t,e){let n=await ct(t.appConfig);while(1===n.authToken.requestStatus)await z(100),n=await ct(t.appConfig);const i=n.authToken;return 0===i.requestStatus?rt(t,e):i}function ct(t){return G(t,(t=>{if(!lt(t))throw w.create("not-registered");const e=t.authToken;return ht(e)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t}))}async function ut(t,e){try{const n=await at(t,e),i=Object.assign(Object.assign({},e),{authToken:n});return await U(t.appConfig,i),n}catch(n){if(!I(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await U(t.appConfig,n)}else await J(t.appConfig);throw n}}function lt(t){return void 0!==t&&2===t.registrationStatus}function ft(t){return 2===t.requestStatus&&!dt(t)}function dt(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+p}function pt(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function ht(t){return 1===t.requestStatus&&t.requestTime+u<Date.now()}
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
 */async function gt(t){const e=t,{installationEntry:n,registrationPromise:i}=await Z(e);return i?i.catch(console.error):rt(e).catch(console.error),n.fid}
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
 */async function mt(t,e=!1){const n=t;await wt(n);const i=await rt(n,e);return i.token}async function wt(t){const{registrationPromise:e}=await Z(t);e&&await e}
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
function It(t){if(!t||!t.options)throw vt("App Configuration");if(!t.name)throw vt("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw vt(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function vt(t){return w.create("missing-app-config-values",{valueName:t})}
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
 */const Ct="installations",yt="installations-internal",bt=t=>{const e=t.getProvider("app").getImmediate(),n=It(e),a=(0,i.qX)(e,"heartbeat"),s={app:e,appConfig:n,heartbeatServiceProvider:a,_delete:()=>Promise.resolve()};return s},St=t=>{const e=t.getProvider("app").getImmediate(),n=(0,i.qX)(e,Ct).getImmediate(),a={getId:()=>gt(n),getToken:t=>mt(n,t)};return a};function kt(){(0,i.Xd)(new a.wA(Ct,bt,"PUBLIC")),(0,i.Xd)(new a.wA(yt,St,"PRIVATE"))}kt(),(0,i.KN)(o,c),(0,i.KN)(o,c,"esm2017")}}]);