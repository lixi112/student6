"use strict";(self["webpackChunkstudent1"]=self["webpackChunkstudent1"]||[]).push([[305],{1802:function(e,t,n){n.d(t,{Fx:function(){return u},px:function(){return o}});var a=n(64243),s=n(45705),r=n(21694);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const o=(0,s.o)((e=>Math.log(e))),i=(0,r.F)(a.Log,o),u={kernelName:a.Log,backendName:"cpu",kernelFunc:i}},2750:function(e,t,n){n.d(t,{w:function(){return s}});var a=n(64243);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function s(e,t,n,s){const r=a.util.parseAxisParam(t,n)[0],o=[1,n[0],1];for(let a=0;a<r;a++)o[0]*=n[a];o[1]=n[r];for(let a=r+1;a<n.length;a++)o[2]*=n[a];const i={},u=new Int32Array(n[r]),c=new a.TensorBuffer(o,s,e),l=[],d=1===o[0]&&1===o[2];for(let a=0;a<n[r];a++){let t;if(d)t=e[a].toString();else{const e=[];for(let t=0;t<o[0];t++)for(let n=0;n<o[2];n++)e.push(c.get(t,a,n));t=e.join(",")}if(void 0!==i[t])u[a]=i[t];else{const e=Object.keys(i).length;i[t]=e,u[a]=e,l.push(a)}}const p=o.slice();p[1]=Object.keys(i).length;const h=new a.TensorBuffer(p,s);l.forEach(((e,t)=>{for(let n=0;n<o[0];n++)for(let a=0;a<o[2];a++)h.set(c.get(n,e,a),n,t,a)}));const f=n.slice();return f[r]=p[1],{outputValues:h.values,outputShape:f,indices:u}}},3087:function(e,t,n){n.d(t,{Q:function(){return u},cu:function(){return o}});var a=n(64243),s=n(8195),r=n(98880);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const o=(0,s.Z)(((e,t)=>e<=t?1:0)),i=(0,r.j)(a.LessEqual,o,null,"bool"),u={kernelName:a.LessEqual,backendName:"cpu",kernelFunc:i}},3759:function(e,t,n){n.d(t,{j:function(){return s}});var a=n(64243);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function s(e,t,n,s){const r=a.util.getTypedArrayFromDType(s,a.util.sizeFromShape(n));for(let a=0;a<r.length;++a){const n=a*t;let s=e[n];for(let a=0;a<t;++a){const t=e[n+a];(Number.isNaN(t)||t>s)&&(s=t)}r[a]=s}return r}},4092:function(e,t,n){n.d(t,{Lt:function(){return u},Zy:function(){return o}});var a=n(64243),s=n(45705),r=n(21694);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const o=(0,s.o)((e=>1/Math.sqrt(e))),i=(0,r.F)(a.Rsqrt,o),u={kernelName:a.Rsqrt,backendName:"cpu",kernelFunc:i}},5744:function(e,t,n){n.d(t,{y:function(){return s}});var a=n(64243);
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function s(e,t,n,s,r,o,i){const u=t[0],c=o[0],l=new Array(c),d=new Array(u),p=t[1];if(0===c){if(0!==u)throw new Error(a.backend_util.getSparseFillEmptyRowsIndicesDenseShapeMismatch(u));const e=a.util.getArrayFromDType(n,0),t=a.util.getArrayFromDType(r,0);return[e,[0,p],t,l,d]}let h=!0,f=0;const m=new Array(c).fill(0);for(let g=0;g<u;++g){const t=e[g*p];if(t<0)throw new Error(a.backend_util.getSparseFillEmptyRowsNegativeIndexErrorMessage(g,t));if(t>=c)throw new Error(a.backend_util.getSparseFillEmptyRowsOutOfRangeIndexErrorMessage(g,t,c));++m[t],h=h&&t>=f,f=t}let k=!0;for(let a=0;a<c;++a){const e=0===m[a];l[a]=e,k=k&&!e,m[a]=Math.max(m[a],1),a>0&&(m[a]+=m[a-1])}if(k&&h){const t=e,n=s;for(let e=0;e<u;++e)d[e]=e;return[t,[u,p],n,l,d]}{const t=m[c-1],o=a.util.getArrayFromDType(n,t*p),h=a.util.getArrayFromDType(r,t),f=new Array(c).fill(0);for(let n=0;n<u;++n){const t=e[n*p],a=f[t],r=(0===t?0:m[t-1])+a;f[t]++;for(let s=0;s<p;++s)o[r*p+s]=e[n*p+s];h[r]=s[n],d[n]=r}for(let e=0;e<c;++e){const t=f[e];if(0===t){const t=0===e?0:m[e-1];o[t*p+0]=e;for(let e=1;e<p;++e)o[t*p+e]=0;h[t]=i}}return[o,[t,p],h,l,d]}}},8195:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(64243);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function s(e){return(t,n,s,r,o)=>{const i=a.backend_util.assertAndGetBroadcastShape(t,n),u=i.length,c=a.util.computeStrides(i),l=a.util.sizeFromShape(i),d=a.util.getTypedArrayFromDType(o,l),p=t.length,h=n.length,f=a.util.computeStrides(t),m=a.util.computeStrides(n),k=a.backend_util.getBroadcastDims(t,i),g=a.backend_util.getBroadcastDims(n,i);if(k.length+g.length===0)for(let a=0;a<d.length;++a)d[a]=e(s[a%s.length],r[a%r.length]);else for(let b=0;b<d.length;++b){const t=a.util.indexToLoc(b,u,c),n=t.slice(-p);k.forEach((e=>n[e]=0));const o=a.util.locToIndex(n,p,f),i=t.slice(-h);g.forEach((e=>i[e]=0));const l=a.util.locToIndex(i,h,m);d[b]=e(s[o],r[l])}return[d,i]}}},11317:function(e,t,n){n.d(t,{U:function(){return r}});var a=n(64243),s=n(89436);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function r(e,t,n="float32"){if("complex64"===n){const n=r(e,t,"float32"),a=r(e,t,"float32");return(0,s.f)({inputs:{real:n,imag:a},backend:e})}const o=a.util.makeZerosTypedArray(a.util.sizeFromShape(t),n);return e.makeTensorInfo(t,n,o)}},13396:function(e,t,n){n.d(t,{_:function(){return s}});var a=n(64243);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function s(e,t,n,s,r){const o=t.length,i=a.util.sizeFromShape(t),u=a.util.computeStrides(t),c=a.util.computeStrides(r),l=a.util.getTypedArrayFromDType(n,a.util.sizeFromShape(r));for(let d=0;d<i;++d){const t=a.util.indexToLoc(d,o,u),n=new Array(t.length);for(let e=0;e<n.length;e++)n[e]=t[s[e]];const r=a.util.locToIndex(n,o,c);l[r]=e[d]}return l}},13713:function(e,t,n){n.d(t,{M:function(){return l},w:function(){return c}});var a=n(64243),s=n(8195),r=n(11317),o=n(89436),i=n(46936),u=n(85806);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function c(e){const{inputs:t,backend:n,attrs:l}=e,{x:d}=t,{dtype:p}=l;if("complex64"===p){if("complex64"===d.dtype)return(0,i.D)({inputs:{x:d},backend:n});const e=(0,r.U)(n,d.shape,d.dtype),t=c({inputs:{x:d},backend:n,attrs:{dtype:"float32"}}),a=(0,o.f)({inputs:{real:t,imag:e},backend:n});return n.disposeIntermediateTensorInfo(e),n.disposeIntermediateTensorInfo(t),a}if("complex64"===d.dtype){const e=(0,u.x)({inputs:{input:d},backend:n}),t=c({inputs:{x:e},backend:n,attrs:{dtype:p}});return n.disposeIntermediateTensorInfo(e),t}if(!a.util.hasEncodingLoss(d.dtype,p)){const e=(0,i.D)({inputs:{x:d},backend:n});return{dataId:e.dataId,shape:e.shape,dtype:p}}if("int32"===p){const e=n.data.get(d.dataId).values,t=Int32Array.from(e);return n.makeTensorInfo(d.shape,"int32",t)}if("bool"===p){const e=n.data.get(d.dataId).values,t=a.util.toTypedArray([0],d.dtype),[r,o]=(0,s.Z)(((e,t)=>e!==t?1:0))(d.shape,[],e,t,"bool");return n.makeTensorInfo(o,"bool",r)}throw new Error(`Error in Cast: failed to cast ${d.dtype} to ${p}`)}const l={kernelName:a.Cast,backendName:"cpu",kernelFunc:c}},14346:function(e,t,n){n.d(t,{rq:function(){return o},xp:function(){return u}});var a=n(64243),s=n(8195),r=n(98880);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const o=(0,s.Z)(((e,t)=>e>t?1:0)),i=(0,r.j)(a.Greater,o,null,"bool"),u={kernelName:a.Greater,backendName:"cpu",kernelFunc:i}},14759:function(e,t,n){n.d(t,{YG:function(){return o},uf:function(){return u}});var a=n(64243),s=n(45705),r=n(21694);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const o=(0,s.o)((e=>Math.ceil(e))),i=(0,r.F)(a.Ceil,o),u={kernelName:a.Ceil,backendName:"cpu",kernelFunc:i}},18566:function(e,t,n){n.d(t,{Zl:function(){return c},dl:function(){return o},jb:function(){return u}});var a=n(64243),s=n(8195),r=n(98880);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const o=(0,s.Z)(((e,t)=>e-t)),i=(0,r.B)(((e,t,n,a)=>({real:e-n,imag:t-a}))),u=(0,r.j)(a.Sub,o,i),c={kernelName:a.Sub,backendName:"cpu",kernelFunc:u}},18892:function(e,t,n){n.d(t,{BF:function(){return x.BF},Dk:function(){return S.Dk},Dw:function(){return $.D},GE:function(){return b.G},GG:function(){return h.G},GK:function(){return R.G},HS:function(){return C.HS},He:function(){return y.He},Nk:function(){return r.N},SP:function(){return P.S},WR:function(){return k.WR},XI:function(){return r.X},YG:function(){return o.YG},Zy:function(){return w.Zy},_B:function(){return F._B},_X:function(){return L._},bu:function(){return A.b},cl:function(){return T.cl},cu:function(){return g.cu},dH:function(){return a.dH},dl:function(){return G.dl},eW:function(){return H.e},f6:function(){return B.f},hE:function(){return N.hE},hH:function(){return i.h},jC:function(){return v.j},l3:function(){return E.l},lg:function(){return m.lg},mx:function(){return s.mx},px:function(){return I.px},qB:function(){return p.q},qy:function(){return M.q},rq:function(){return f.rq},sG:function(){return c.sG},uM:function(){return l.uM},vS:function(){return d.vS},wz:function(){return V.w},x6:function(){return W.x6},xT:function(){return O.x},yH:function(){return _.y},z3:function(){return u.z3},z9:function(){return z.z},zv:function(){return D.zv}});var a=n(62680),s=n(95315),r=n(86995),o=n(14759),i=n(97763),u=n(99292),c=n(66423),l=n(26789),d=n(85526),p=n(57100),h=n(43842),f=n(14346),m=n(86768),k=n(45207),g=n(3087),b=n(64190),I=n(1802),v=n(3759),y=n(66114),N=n(48580),x=n(65646),S=n(37962),T=n(97113),F=n(51675),M=n(52610),w=n(4092),A=n(19095),D=n(64904),C=n(87906),_=n(5744),E=n(95587),z=n(55589),W=n(63252),H=n(67686),R=n(73514),P=n(32948),B=n(45535),G=n(18566),$=n(21671),O=n(53475),L=n(13396),V=n(2750)},19095:function(e,t,n){n.d(t,{b:function(){return s}});var a=n(64243);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function s(e,t,n,s,r,o,i,u,c,l){const d=[s/r,r],p=e.values,h=t.values;if(0===s)return(0,a.buffer)(n,t.dtype);const f=(0,a.buffer)(d,t.dtype);"string"===typeof c||"number"===typeof c?f.values.fill(c):"boolean"===typeof c&&f.values.fill(+c);for(let a=0;a<o;a++){const e=[];let o=0;for(let t=0;t<i;t++){const n=p[a*i+t];e.push(n),o+=n*u[t]}if(o<0||o>=s/r)throw new Error(`Invalid indices: ${e} does not index into ${n}`);for(let n=0;n<r;n++)l?f.values[o*r+n]+=h[a*r+n]:f.values[o*r+n]=0===t.rank?h[0]:h[a*r+n]}return f}},21671:function(e,t,n){n.d(t,{D:function(){return s}});var a=n(64243);
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function s(e,t){const n=new Array(e.rank);for(let a=0;a<n.length;a++)n[a]=e.shape[a]*t[a];const s=(0,a.buffer)(n,e.dtype);for(let a=0;a<s.values.length;++a){const t=s.indexToLoc(a),n=new Array(e.rank);for(let a=0;a<n.length;a++)n[a]=t[a]%e.shape[a];const r=e.locToIndex(n);s.values[a]=e.values[r]}return s}},21694:function(e,t,n){n.d(t,{F:function(){return o},v:function(){return r}});var a=n(64243),s=n(97870);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function r(e,t,n){return({inputs:r,attrs:o,backend:i})=>{const{x:u}=r;if((0,s.C)(u,e),"string"===u.dtype||"string"===n)throw new Error("unaryKernelFunc does not support string input/output");const c=i,l=c.data.get(u.dataId).values,d=a.util.sizeFromShape(u.shape),p=n||u.dtype,h=a.util.getArrayFromDType(p,d);for(let e=0;e<d;++e)h[e]=t(l[e],o);return c.makeTensorInfo(u.shape,p,h)}}function o(e,t,n){return({inputs:a,attrs:r,backend:o})=>{const{x:i}=a;if((0,s.C)(i,e),"string"===i.dtype||"string"===n)throw new Error("unaryKernelFunc does not support string input/output");const u=o,c=u.data.get(i.dataId).values,l=n||i.dtype,d=t(c,l,r);return u.makeTensorInfo(i.shape,l,d)}}},26789:function(e,t,n){n.d(t,{Yp:function(){return u},uM:function(){return o}});var a=n(64243),s=n(45705),r=n(21694);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const o=(0,s.o)((e=>Math.expm1(e))),i=(0,r.F)(a.Expm1,o),u={kernelName:a.Expm1,backendName:"cpu",kernelFunc:i}},32948:function(e,t,n){n.d(t,{S:function(){return r}});var a=n(64243);
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function s(e,t,n,a){if(!e.length)return;if(0===t.length){for(let t=0;t<e.length;++t)a.push(e.subarray(t,t+1));return}if(1===t.length){const s=t[0];let r=e.indexOf(s);while(-1!==r){const t=e.subarray(0,r);n&&0===t.length||a.push(t),e=e.subarray(r+1),r=e.indexOf(s)}return void(n&&0===e.length||a.push(e))}let s=0;for(let r=0;r<e.length+1;r++)if(r===e.length||-1!==t.indexOf(e[r])){const t=e.subarray(s,r);n&&0===t.length||a.push(t),s=r+1}}function r(e,t,n){const r=e.length,o=[];let i=0,u=0;const c=new Array(r);for(let a=0;a<r;++a){const r=o.length;s(e[a],t,n,o);const l=o.length-r;c[a]=l,i+=l,u=Math.max(u,l)}const l=a.util.getArrayFromDType("int32",2*i),d=new Array(i),p=[r,u];let h=0;for(let a=0;a<r;++a)for(let e=0;e<c[a];++e)l[2*h]=a,l[2*h+1]=e,d[h]=o[h],++h;return[l,d,p]}},37962:function(e,t,n){n.d(t,{Dk:function(){return o},hd:function(){return u}});var a=n(64243),s=n(97870),r=n(65646);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function o(e,t,n){const s=a.util.createScalarValue(-1,n);return(0,r.BF)([],t,s,e,n)}function i(e){const{inputs:t,backend:n}=e,{x:a}=t;(0,s.C)(a,"neg");const r=n.data.get(a.dataId).values,[i,u]=o(r,a.shape,a.dtype);return n.makeTensorInfo(u,a.dtype,i)}const u={kernelName:a.Neg,backendName:"cpu",kernelFunc:i}},43842:function(e,t,n){n.d(t,{G:function(){return s}});var a=n(64243);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function s(e,t,n){const s=(0,a.buffer)(n,e.dtype);for(let a=0;a<s.size;++a){const n=s.indexToLoc(a),r=n.slice(),o=r[0],i=r[2],u=t.locToIndex([o,i]);r[2]=t.values[u];const c=e.locToIndex(r);0<=c&&c<e.values.length&&(s.values[a]=e.values[c])}return s}},45207:function(e,t,n){n.d(t,{WR:function(){return o},YW:function(){return u}});var a=n(64243),s=n(8195),r=n(98880);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const o=(0,s.Z)(((e,t)=>e<t?1:0)),i=(0,r.j)(a.Less,o,null,"bool"),u={kernelName:a.Less,backendName:"cpu",kernelFunc:i}},45535:function(e,t,n){n.d(t,{f:function(){return s}});var a=n(64243);
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function s(e,t){const n=a.util.getArrayFromDType("int32",e.length);for(let s=0;s<e.length;++s)n[s]=a.util.fingerPrint64(e[s]).modulo(t).getLowBitsUnsigned();return n}},45705:function(e,t,n){n.d(t,{o:function(){return s}});var a=n(64243);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function s(e){return(t,n,s)=>{const r=a.util.getTypedArrayFromDType(n,t.length);for(let a=0;a<t.length;++a)r[a]=e(t[a],s);return r}}},46425:function(e,t,n){n.d(t,{Um:function(){return i}});var a=n(64243),s=n(97870);
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const r=a.kernel_impls.whereImpl;class o extends a.KernelBackend{constructor(){super(),this.blockSize=48,this.firstUse=!0,this.data=new a.DataStorage(this,(0,a.engine)())}nextDataId(){return o.nextDataId++}write(e,t,n){this.firstUse&&(this.firstUse=!1,(0,a.env)().get("IS_NODE")&&a.backend_util.warn("\n============================\nHi, looks like you are running TensorFlow.js in Node.js. To speed things up dramatically, install our node backend, visit https://github.com/tensorflow/tfjs-node for more details. \n============================"));const s={id:this.nextDataId()};return this.data.set(s,{values:e,dtype:n,refCount:1}),s}makeTensorInfo(e,t,n){let s;if("string"===t&&null!=n&&n.length>0&&a.util.isString(n[0])){const r=n.map((e=>a.util.encodeString(e)));s=this.write(r,e,t)}else s=this.write(n,e,t);return{dataId:s,shape:e,dtype:t}}refCount(e){if(this.data.has(e)){const t=this.data.get(e);return t.refCount}return 0}incRef(e){const t=this.data.get(e);t.refCount++}decRef(e){if(this.data.has(e)){const t=this.data.get(e);t.refCount--}}move(e,t,n,a,s){this.data.set(e,{values:t,dtype:a,refCount:s})}numDataIds(){return this.data.numDataIds()}async read(e){return this.readSync(e)}readSync(e){const{dtype:t,complexTensorInfos:n}=this.data.get(e);if("complex64"===t){const e=this.readSync(n.real.dataId),t=this.readSync(n.imag.dataId);return a.backend_util.mergeRealAndImagArrays(e,t)}return this.data.get(e).values}bufferSync(e){const t=this.readSync(e.dataId);if("string"===e.dtype)try{const n=t.map((e=>a.util.decodeString(e)));return(0,a.buffer)(e.shape,e.dtype,n)}catch(n){throw new Error("Failed to decode encoded string bytes into utf-8")}return(0,a.buffer)(e.shape,e.dtype,t)}makeOutput(e,t,n){return(0,a.engine)().makeTensorFromTensorInfo(this.makeTensorInfo(t,n,e),this)}disposeData(e,t=!1){if(this.data.has(e)){if(this.data.get(e).refCount--,!t&&this.data.get(e).refCount>0)return!1;const{complexTensorInfos:n}=this.data.get(e);null!=n&&(this.disposeData(n.real.dataId,!0),this.disposeData(n.imag.dataId,!0)),this.data.delete(e)}return!0}disposeIntermediateTensorInfo(e){this.disposeData(e.dataId)}async time(e){const t=a.util.now();e();const n=a.util.now()-t;return{kernelMs:n}}memory(){return{unreliable:!0,reasons:["The reported memory is an upper bound. Due to automatic garbage collection, the true allocated memory may be less."]}}where(e){(0,s.C)([e],"where");const t=this.readSync(e.dataId);return r(e.shape,t)}dispose(){}floatPrecision(){return 32}epsilon(){return super.epsilon()}}o.nextDataId=0;
/** @license See the LICENSE file. */
const i="3.18.0";
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
(0,a.registerBackend)("cpu",(()=>new o),1);var u=n(21694);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const c=(0,u.v)(a.Elu,(e=>e>=0?e:Math.exp(e)-1)),l={kernelName:a.Elu,backendName:"cpu",kernelFunc:c};var d=n(46936);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function p(e){const{inputs:t,backend:n,attrs:r}=e,{x:o}=t,{alpha:i}=r;(0,s.C)([o],"leakyRelu");const u=a.util.sizeFromShape(o.shape),c=n.data.get(o.dataId).values,l=a.util.getTypedArrayFromDType("float32",u);for(let a=0;a<c.length;a++)l[a]=c[a]<0?i*c[a]:c[a];return n.makeTensorInfo(o.shape,"float32",l)}const h={kernelName:a.LeakyRelu,backendName:"cpu",kernelFunc:p};var f=n(8195);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const m=(0,f.Z)(((e,t)=>e<0?t*e:e));function k(e){const{inputs:t,backend:n}=e,{x:a,alpha:r}=t;(0,s.C)([a,r],"prelu");const o=n.data.get(a.dataId).values,i=n.data.get(r.dataId).values,[u,c]=m(a.shape,r.shape,o,i,"float32");return n.makeTensorInfo(c,"float32",u)}const g={kernelName:a.Prelu,backendName:"cpu",kernelFunc:k},b=(0,u.v)(a.Relu,(e=>Math.max(0,e))),I={kernelName:a.Relu,backendName:"cpu",kernelFunc:b},v=(0,u.v)(a.Relu6,(e=>Math.min(Math.max(0,e),6))),y={kernelName:a.Relu6,backendName:"cpu",kernelFunc:v};var N=n(64904);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function x(e,t,n,a,s){if("linear"===n)return(0,d.D)({inputs:{x:t},backend:e});if("relu"===n)return b({inputs:{x:t},backend:e});if("elu"===n)return c({inputs:{x:t},backend:e});if("relu6"===n)return v({inputs:{x:t},backend:e});if("prelu"===n)return k({inputs:{x:t,alpha:a},backend:e});if("leakyrelu"===n)return p({inputs:{x:t},backend:e,attrs:{alpha:s}});if("sigmoid"===n)return(0,N.ry)({inputs:{x:t},backend:e});throw new Error(`Activation ${n} has not been implemented for the CPU backend.`)}var S=n(95315);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function T(e){const{inputs:t,backend:n,attrs:s}=e,{x:r}=t,{shape:o}=s,i=a.util.sizeFromShape(r.shape),u=a.util.inferFromImplicitShape(o,i),c=a.util.sizeFromShape(u);a.util.assert(i===c,(()=>`The new shape (${u}) has ${c} elements and the old shape (${r.shape}) has ${i} elements. The new shape and old shape must have the same number of elements.`)),n.incRef(r.dataId);const l=n.data.get(r.dataId);if(null!=l.complexTensorInfos){const e=l.complexTensorInfos.real,t=l.complexTensorInfos.imag;e.shape=u,t.shape=u}return{dataId:r.dataId,shape:u,dtype:r.dtype}}const F={kernelName:a.Reshape,backendName:"cpu",kernelFunc:T};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function M(e){const{inputs:t,backend:n,attrs:r}=e,{a:o,b:i}=t,{transposeA:u,transposeB:c}=r;(0,s.C)([o,i],"matMul");const l=o.shape.length,d=i.shape.length,p=u?o.shape[l-2]:o.shape[l-1],h=c?i.shape[d-1]:i.shape[d-2],f=u?o.shape[l-1]:o.shape[l-2],m=c?i.shape[d-2]:i.shape[d-1],k=o.shape.slice(0,-2),g=i.shape.slice(0,-2),b=a.util.sizeFromShape(k),I=a.util.sizeFromShape(g),v=a.broadcast_util.assertAndGetBroadcastShape(o.shape.slice(0,-2),i.shape.slice(0,-2)),y=v.concat([f,m]);a.util.assert(p===h,(()=>`Error in matMul: inner shapes (${p}) and (${h}) of Tensors with shapes ${o.shape} and ${i.shape} and transposeA=${u} and transposeB=${c} must match.`));const N=u?[b,p,f]:[b,f,p],x=c?[I,m,h]:[I,h,m],S=T({inputs:{x:o},backend:n,attrs:{shape:N}}),F=T({inputs:{x:i},backend:n,attrs:{shape:x}}),M=u?S.shape[1]:S.shape[2],w=u?S.shape[2]:S.shape[1],A=c?F.shape[1]:F.shape[2],D=Math.max(b,I),C=n.data.get(S.dataId).values,_=n.data.get(F.dataId).values,E=a.util.computeStrides(S.shape),z=a.util.computeStrides(F.shape),[W,H,R]=u?[E[0],1,E[1]]:[E[0],E[1],1],[P,B,G]=c?[1,z[1],z[0]]:[z[1],1,z[0]],$=w*A,O=(0,a.buffer)([D,w,A],S.dtype),L=O.values,V=n.blockSize;for(let a=0;a<D;a++)for(let e=0;e<w;e+=V)for(let t=0;t<A;t+=V)for(let n=0;n<M;n+=V){const s=Math.min(e+V,w),r=Math.min(t+V,A),o=Math.min(n+V,M);for(let i=e;i<s;i++)for(let e=t;e<r;e++){let t=0;for(let s=n;s<o;s++){const n=Math.min(a,b-1)*W,r=Math.min(a,I-1)*G,o=C[n+i*H+s*R],u=_[s*P+e*B+r];t+=o*u}L[a*$+(i*A+e)]+=t}}return n.disposeIntermediateTensorInfo(S),n.disposeIntermediateTensorInfo(F),n.makeTensorInfo(y,O.dtype,O.values)}const w={kernelName:a.BatchMatMul,backendName:"cpu",kernelFunc:M};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function A(e){const{inputs:t,backend:n,attrs:a}=e,{a:s,b:r,bias:o,preluActivationWeights:i}=t,{transposeA:u,transposeB:c,activation:l,leakyreluAlpha:d}=a;let p,h,f;const m=[],k=M({inputs:{a:s,b:r},attrs:{transposeA:u,transposeB:c},backend:n});p=k,o&&(h=(0,S.WQ)({inputs:{a:p,b:o},backend:n}),m.push(p),p=h),l&&(f=x(n,p,l,i,d),m.push(p),p=f);for(const g of m)n.disposeIntermediateTensorInfo(g);return p}const D={kernelName:a._FusedMatMul,backendName:"cpu",kernelFunc:A};var C=n(62680);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const _=(0,u.v)(a.Acos,(e=>Math.acos(e))),E={kernelName:a.Acos,backendName:"cpu",kernelFunc:_},z=(0,u.v)(a.Acosh,(e=>Math.acosh(e))),W={kernelName:a.Acosh,backendName:"cpu",kernelFunc:z};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function H(e){const{inputs:t,backend:n}=e,r=t;(0,s.C)(t,"addN");const o=r.map((e=>n.data.get(e.dataId).values)),i=(0,a.buffer)(r[0].shape,r[0].dtype),u=i.values;for(let a=0;a<r.length;a++){const e=o[a];for(let t=0;t<u.length;t++)u[t]+=e[t]}return n.makeTensorInfo(i.shape,i.dtype,i.values)}const R={kernelName:a.AddN,backendName:"cpu",kernelFunc:H};var P=n(85655);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function B(e){const{inputs:t,backend:n,attrs:r}=e,{x:o}=t,{axis:i,keepDims:u}=r;(0,s.C)(o,"all");const c=a.util.parseAxisParam(i,o.shape);let l=c;const d=a.backend_util.getAxesPermutation(l,o.shape.length);let p=o;null!=d&&(p=(0,P.m)({inputs:{x:o},backend:n,attrs:{perm:d}}),l=a.backend_util.getInnerMostAxes(l.length,o.shape.length)),a.backend_util.assertAxesAreInnerMostDims("all",l,p.shape.length);const[h,f]=a.backend_util.computeOutAndReduceShapes(p.shape,l),m=a.util.sizeFromShape(f),k=a.util.makeZerosTypedArray(a.util.sizeFromShape(h),p.dtype),g=n.data.get(p.dataId).values;for(let a=0;a<k.length;++a){const e=a*m;let t=g[e];for(let n=0;n<m;++n){const a=g[e+n];t=t&&a}k[a]=t}null!=d&&n.disposeIntermediateTensorInfo(p);const b=n.makeTensorInfo(h,p.dtype,k);if(u){const e=a.backend_util.expandShapeToKeepDim(h,c),t=T({inputs:{x:b},backend:n,attrs:{shape:e}});return n.disposeIntermediateTensorInfo(b),t}return b}const G={kernelName:a.All,backendName:"cpu",kernelFunc:B};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function $(e){const{inputs:t,backend:n,attrs:r}=e,{x:o}=t,{axis:i,keepDims:u}=r;(0,s.C)(o,"any");const c=a.util.parseAxisParam(i,o.shape);let l=c;const d=a.backend_util.getAxesPermutation(l,o.shape.length);let p=o;null!=d&&(p=(0,P.m)({inputs:{x:o},backend:n,attrs:{perm:d}}),l=a.backend_util.getInnerMostAxes(l.length,o.shape.length)),a.backend_util.assertAxesAreInnerMostDims("any",l,p.shape.length);const[h,f]=a.backend_util.computeOutAndReduceShapes(p.shape,l),m=a.util.sizeFromShape(f),k=a.util.makeZerosTypedArray(a.util.sizeFromShape(h),p.dtype),g=n.data.get(p.dataId).values;for(let a=0;a<k.length;++a){const e=a*m;let t=g[e];for(let n=0;n<m;++n){const a=g[e+n];t=t||a}k[a]=t}null!=d&&n.disposeIntermediateTensorInfo(p);const b=n.makeTensorInfo(h,p.dtype,k);if(u){const e=a.backend_util.expandShapeToKeepDim(h,c),t=T({inputs:{x:b},backend:n,attrs:{shape:e}});return n.disposeIntermediateTensorInfo(b),t}return b}const O={kernelName:a.Any,backendName:"cpu",kernelFunc:$};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function L(e){const{inputs:t,backend:n,attrs:r}=e,{x:o}=t,{axis:i}=r;(0,s.C)(o,"argMax");let u=a.util.parseAxisParam(i,o.shape);const c=a.backend_util.getAxesPermutation(u,o.shape.length);let l=o;const d=[];null!=c&&(l=(0,P.m)({inputs:{x:o},backend:n,attrs:{perm:c}}),d.push(l),u=a.backend_util.getInnerMostAxes(u.length,l.shape.length)),u=[u[0]],a.backend_util.assertAxesAreInnerMostDims("argMax",u,l.shape.length);const[p,h]=a.backend_util.computeOutAndReduceShapes(l.shape,u),f=a.util.sizeFromShape(p),m=a.util.makeZerosTypedArray(f,"int32"),k=a.util.sizeFromShape(h),g=n.data.get(l.dataId).values;for(let a=0;a<m.length;++a){const e=a*k;let t=g[e],n=0;for(let a=0;a<k;++a){const s=g[e+a];s>t&&(t=s,n=a)}m[a]=n}return d.forEach((e=>n.disposeIntermediateTensorInfo(e))),n.makeTensorInfo(p,"int32",m)}const V={kernelName:a.ArgMax,backendName:"cpu",kernelFunc:L};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function q(e){const{inputs:t,backend:n,attrs:r}=e,{x:o}=t,{axis:i}=r;(0,s.C)(o,"argMin");let u=a.util.parseAxisParam(i,o.shape);const c=a.backend_util.getAxesPermutation(u,o.shape.length);let l=o;const d=[];null!=c&&(l=(0,P.m)({inputs:{x:o},backend:n,attrs:{perm:c}}),d.push(l),u=a.backend_util.getInnerMostAxes(u.length,l.shape.length)),u=[u[0]],a.backend_util.assertAxesAreInnerMostDims("argMin",u,l.shape.length);const[p,h]=a.backend_util.computeOutAndReduceShapes(l.shape,u),f=a.util.sizeFromShape(p),m=a.util.makeZerosTypedArray(f,"int32"),k=a.util.sizeFromShape(h),g=n.data.get(l.dataId).values;for(let a=0;a<m.length;++a){const e=a*k;let t=g[e],n=0;for(let a=0;a<k;++a){const s=g[e+a];s<t&&(t=s,n=a)}m[a]=n}return d.forEach((e=>n.disposeIntermediateTensorInfo(e))),n.makeTensorInfo(p,"int32",m)}const Z={kernelName:a.ArgMin,backendName:"cpu",kernelFunc:q},j=(0,u.v)(a.Asin,(e=>Math.asin(e))),U={kernelName:a.Asin,backendName:"cpu",kernelFunc:j},K=(0,u.v)(a.Asinh,(e=>Math.asinh(e))),Y={kernelName:a.Asinh,backendName:"cpu",kernelFunc:K},Q=(0,u.v)(a.Atan,(e=>Math.atan(e))),X={kernelName:a.Atan,backendName:"cpu",kernelFunc:Q};var J=n(98880);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const ee=(0,f.Z)(((e,t)=>Math.atan2(e,t))),te=(0,J.j)(a.Atan2,ee),ne={kernelName:a.Atan2,backendName:"cpu",kernelFunc:te},ae=(0,u.v)(a.Atanh,(e=>Math.atanh(e))),se={kernelName:a.Atanh,backendName:"cpu",kernelFunc:ae};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function re(e,t,n,s,r,o){const i=r.strideHeight,u=r.strideWidth,c=r.dilationHeight,l=r.dilationWidth,d=r.effectiveFilterHeight,p=r.effectiveFilterWidth,h=r.padInfo.top,f=r.padInfo.left,m="max"===o?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,k=(0,a.buffer)(r.outShape,n),g=k.values,b=r.outShape[1]*r.outShape[2]*r.outShape[3],I=r.outShape[2]*r.outShape[3],v=r.outShape[3];for(let a=0;a<r.batchSize;++a){const t=a*b,n=a*s[0];for(let a=0;a<r.inChannels;++a)for(let k=0;k<r.outHeight;++k){const b=k*i-h,y=Math.max(0,b),N=Math.min(r.inHeight,d+b),x=t+k*I;for(let t=0;t<r.outWidth;++t){const i=t*u-f,d=Math.max(0,i),h=Math.min(r.inWidth,p+i);let k=m,b=0,I=0;for(let t=y;t<N;t+=c){const r=n+t*s[1];for(let t=d;t<h;t+=l){const n=r+t*s[2],i=e[n+a];"max"===o&&i>k?k=i:"avg"===o&&(b+=i,I++)}if(isNaN(k))break}const S=x+t*v+a;g[S]="avg"===o?b/I:k}}}return k}function oe(e,t,n,s,r=!1,o=!1){const i=(0,a.buffer)(s.outShape,"int32"),u=s.strideHeight,c=s.strideWidth,l=s.dilationHeight,d=s.dilationWidth,p=s.effectiveFilterHeight,h=s.effectiveFilterWidth,f=s.padInfo.top,m=s.padInfo.left,k=(0,a.buffer)(t,n,e);for(let a=0;a<s.batchSize;++a)for(let e=0;e<s.inChannels;++e)for(let t=0;t<s.outHeight;++t){const n=t*u-f;let g=n;while(g<0)g+=l;const b=Math.min(s.inHeight,p+n);for(let u=0;u<s.outWidth;++u){const p=u*c-m;let f=p;while(f<0)f+=d;const I=Math.min(s.inWidth,h+p);let v=Number.NEGATIVE_INFINITY,y=-1;for(let t=g;t<b;t+=l){const i=t-n;for(let n=f;n<I;n+=d){const u=n-p,c=k.get(a,t,n,e);c>v&&(v=c,y=r?o?((a*s.inHeight+t)*s.inWidth+n)*s.inChannels+e:(t*s.inWidth+n)*s.inChannels+e:i*h+u)}}i.set(y,a,t,u,e)}}return i}function ie(e,t,n,s,r,o){const i=r.strideDepth,u=r.strideHeight,c=r.strideWidth,l=r.dilationDepth,d=r.dilationHeight,p=r.dilationWidth,h=r.effectiveFilterDepth,f=r.effectiveFilterHeight,m=r.effectiveFilterWidth,k=r.padInfo.front,g=r.padInfo.top,b=r.padInfo.left,I="max"===o?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,v=(0,a.buffer)(r.outShape,n),y=v.values,N=r.outShape[1]*r.outShape[2]*r.outShape[3]*r.outShape[4],x=r.outShape[2]*r.outShape[3]*r.outShape[4],S=r.outShape[3]*r.outShape[4],T=r.outShape[4];for(let a=0;a<r.batchSize;++a){const t=a*N,n=a*s[0];for(let a=0;a<r.inChannels;++a)for(let v=0;v<r.outDepth;++v){const N=v*i-k;let F=N;while(F<0)F+=l;const M=Math.min(r.inDepth,h+N),w=t+v*x;for(let t=0;t<r.outHeight;++t){const i=t*u-g;let h=i;while(h<0)h+=d;const k=Math.min(r.inHeight,f+i),v=w+t*S;for(let t=0;t<r.outWidth;++t){const i=t*c-b;let u=i;while(u<0)u+=p;const f=Math.min(r.inWidth,m+i),g=v+t*T;let N=I,x=0,S=0;for(let t=F;t<M;t+=l){const r=n+t*s[1];for(let t=h;t<k;t+=d){const n=r+t*s[2];for(let t=u;t<f;t+=p){const r=n+t*s[3],i=e[r+a];if("max"===o&&i>N?N=i:"avg"===o&&(x+=i,S++),isNaN(N))break}if(isNaN(N))break}if(isNaN(N))break}const w=g+a;y[w]="avg"===o?x/S:N}}}}return v}function ue(e,t){const n=(0,a.buffer)(t.outShape,"int32"),s=t.strideDepth,r=t.strideHeight,o=t.strideWidth,i=t.dilationDepth,u=t.dilationHeight,c=t.dilationWidth,l=t.effectiveFilterDepth,d=t.effectiveFilterHeight,p=t.effectiveFilterWidth,h=t.padInfo.front,f=t.padInfo.top,m=t.padInfo.left;for(let a=0;a<t.batchSize;++a)for(let k=0;k<t.inChannels;++k)for(let g=0;g<t.outDepth;++g){const b=g*s-h;let I=b;while(I<0)I+=i;const v=Math.min(t.inDepth,l+b);for(let s=0;s<t.outHeight;++s){const l=s*r-f;let h=l;while(h<0)h+=u;const y=Math.min(t.inHeight,d+l);for(let r=0;r<t.outWidth;++r){const f=r*o-m;let N=f;while(N<0)N+=c;const x=Math.min(t.inWidth,p+f);let S=Number.NEGATIVE_INFINITY,T=-1;for(let t=I;t<v;t+=i){const n=t-b;for(let s=h;s<y;s+=u){const r=s-l;for(let o=N;o<x;o+=c){const i=o-f,u=e.get(a,t,s,o,k);u>=S&&(S=u,T=n*d*p+r*d+i)}}}n.set(T,a,g,s,r,k)}}}return n}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function ce(e){const{inputs:t,backend:n,attrs:r}=e,{x:o}=t;(0,s.C)(o,"avgPool");const{filterSize:i,strides:u,pad:c,dimRoundingMode:l}=r,p=1;a.util.assert(a.backend_util.eitherStridesOrDilationsAreOne(u,p),(()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${u} and dilations '${p}'`));const h=a.backend_util.computePool2DInfo(o.shape,i,u,p,c,l);let f;if(1===h.filterWidth&&1===h.filterHeight&&a.util.arraysEqual(h.inShape,h.outShape))f=(0,d.D)({inputs:{x:o},backend:n});else{const e=n.data.get(o.dataId).values,t=a.util.computeStrides(o.shape),s=re(e,o.shape,o.dtype,t,h,"avg");f=n.makeTensorInfo(h.outShape,o.dtype,s.values)}return f}const le={kernelName:a.AvgPool,backendName:"cpu",kernelFunc:ce};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function de(e){const{inputs:t,backend:n,attrs:r}=e,{x:o}=t,{filterSize:i,strides:u,pad:c,dimRoundingMode:l,dataFormat:d}=r;(0,s.C)(o,"avgPool3d");const p=a.backend_util.computePool3DInfo(o.shape,i,u,1,c,l,d),h=n.data.get(o.dataId).values,f=ie(h,o.shape,o.dtype,a.util.computeStrides(o.shape),p,"avg");return n.makeTensorInfo(f.shape,"float32",f.values)}const pe={kernelName:a.AvgPool3D,backendName:"cpu",kernelFunc:de};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function he(e){const{inputs:t,backend:n,attrs:r}=e,{dy:o,input:i}=t,{filterSize:u,strides:c,pad:l,dimRoundingMode:d}=r;(0,s.C)([o,i],"avgPool3DGrad");const p=a.backend_util.computePool3DInfo(i.shape,u,c,1,l,d),h=p.strideDepth,f=p.strideHeight,m=p.strideWidth,k=p.filterDepth,g=p.filterHeight,b=p.filterWidth,I=p.dilationDepth,v=p.dilationHeight,y=p.dilationWidth,N=p.effectiveFilterDepth,x=p.effectiveFilterHeight,S=p.effectiveFilterWidth,T=N-1-p.padInfo.front,F=S-1-p.padInfo.left,M=x-1-p.padInfo.top,w=(0,a.buffer)(i.shape,"float32"),A=1/(k*g*b),D=n.bufferSync(o);for(let a=0;a<p.batchSize;++a)for(let e=0;e<p.inChannels;++e)for(let t=0;t<p.inDepth;++t)for(let n=0;n<p.inHeight;++n)for(let s=0;s<p.inWidth;++s){const r=t-T,o=n-M,i=s-F;let u=0;for(let t=0;t<N;t+=I){const n=(r+t)/h;if(!(n<0||n>=p.outDepth||Math.floor(n)!==n))for(let t=0;t<x;t+=v){const s=(o+t)/f;if(!(s<0||s>=p.outHeight||Math.floor(s)!==s))for(let t=0;t<S;t+=y){const r=(i+t)/m;if(r<0||r>=p.outWidth||Math.floor(r)!==r)continue;const o=D.get(a,n,s,r,e);u+=o}}}w.set(u*A,a,t,n,s,e)}return n.makeTensorInfo(w.shape,w.dtype,w.values)}const fe={kernelName:a.AvgPool3DGrad,backendName:"cpu",kernelFunc:he};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function me(e){const{inputs:t,backend:n,attrs:r}=e,{dy:o,input:i}=t,u=i;(0,s.C)([o,i],"avgPoolGrad");const{filterSize:c,strides:l,pad:d}=r,p=a.backend_util.computePool2DInfo(u.shape,c,l,1,d),h=p.strideHeight,f=p.strideWidth,m=p.filterHeight,k=p.filterWidth,g=p.dilationHeight,b=p.dilationWidth,I=p.effectiveFilterHeight,v=p.effectiveFilterWidth,y=v-1-p.padInfo.left,N=I-1-p.padInfo.top,x=(0,a.buffer)(u.shape,"float32"),S=1/(m*k),T=n.data.get(o.dataId).values,F=(0,a.buffer)(o.shape,"float32",T);for(let a=0;a<p.batchSize;++a)for(let e=0;e<p.inChannels;++e)for(let t=0;t<p.inHeight;++t)for(let n=0;n<p.inWidth;++n){const s=t-N,r=n-y;let o=0;for(let t=0;t<I;t+=g){const n=(s+t)/h;if(!(n<0||n>=p.outHeight||Math.floor(n)!==n))for(let t=0;t<v;t+=b){const s=(r+t)/f;if(s<0||s>=p.outWidth||Math.floor(s)!==s)continue;const i=F.get(a,n,s,e);o+=i}}x.set(o*S,a,t,n,e)}return n.makeTensorInfo(x.shape,x.dtype,x.values)}const ke={kernelName:a.AvgPoolGrad,backendName:"cpu",kernelFunc:me};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function ge(e){const{inputs:t,backend:n,attrs:r}=e,{x:o,scale:i,offset:u,mean:c,variance:l}=t;a.util.assert(c.shape.length===l.shape.length,(()=>"Batch normalization gradient requires mean and variance to have equal ranks.")),a.util.assert(null==u||c.shape.length===u.shape.length,(()=>"Batch normalization gradient requires mean and offset to have equal ranks.")),a.util.assert(null==i||c.shape.length===i.shape.length,(()=>"Batch normalization gradient requires mean and scale to have equal ranks.")),(0,s.C)([o,c,l,i,u],"batchNorm");let{varianceEpsilon:d}=r;null==d&&(d=.001);const p=n.data.get(o.dataId).values,h=n.data.get(c.dataId).values,f=n.data.get(l.dataId).values,m=i?n.data.get(i.dataId).values:new Float32Array([1]),k=u?n.data.get(u.dataId).values:new Float32Array([0]),g=new Float32Array(p.length),b=k.length,I=m.length,v=f.length,y=h.length;let N=0,x=0,S=0,T=0;for(let a=0;a<p.length;++a)g[a]=k[N++]+(p[a]-h[x++])*m[S++]/Math.sqrt(f[T++]+d),N>=b&&(N=0),x>=y&&(x=0),S>=I&&(S=0),T>=v&&(T=0);return n.makeTensorInfo(o.shape,o.dtype,g)}const be={kernelName:a.FusedBatchNorm,backendName:"cpu",kernelFunc:ge};var Ie=n(87906);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function ve(e){const{inputs:t,backend:n,attrs:r}=e,{x:o}=t,{blockShape:i,crops:u}=r;(0,s.C)([o],"batchToSpaceND");const c=i.reduce(((e,t)=>e*t)),l=a.backend_util.getReshaped(o.shape,i,c),d=a.backend_util.getPermuted(l.length,i.length),p=a.backend_util.getReshapedPermuted(o.shape,i,c),h=a.backend_util.getSliceBeginCoords(u,i.length),f=a.backend_util.getSliceSize(p,u,i.length),m=T({inputs:{x:o},backend:n,attrs:{shape:l}}),k=(0,P.m)({inputs:{x:m},backend:n,attrs:{perm:d}}),g=T({inputs:{x:k},backend:n,attrs:{shape:p}}),b=(0,Ie.di)({inputs:{x:g},backend:n,attrs:{begin:h,size:f}});return n.disposeIntermediateTensorInfo(m),n.disposeIntermediateTensorInfo(k),n.disposeIntermediateTensorInfo(g),b}const ye={kernelName:a.BatchToSpaceND,backendName:"cpu",kernelFunc:ve};var Ne=n(86995);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function xe(e){const{inputs:t,backend:n,attrs:a}=e,{x:s,weights:r}=t,{size:o}=a,i=n.data.get(s.dataId).values,u=n.data.get(r.dataId).values,c=(0,Ne.X)(i,u,r.dtype,r.shape,o);return n.makeTensorInfo([o],r.dtype,c)}const Se={kernelName:a.Bincount,backendName:"cpu",kernelFunc:xe};
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Te(e){const{inputs:t,backend:n}=e,{s0:s,s1:r}=t,o=n.data.get(s.dataId).values,i=n.data.get(r.dataId).values,u=a.backend_util.assertAndGetBroadcastShape(Array.from(o),Array.from(i));return n.makeTensorInfo([u.length],"int32",Int32Array.from(u))}const Fe={kernelName:a.BroadcastArgs,backendName:"cpu",kernelFunc:Te};var Me=n(13713),we=n(14759);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const Ae=(0,u.v)(a.ClipByValue,((e,t)=>{const n=t;return e>n.clipValueMax?n.clipValueMax:e<n.clipValueMin?n.clipValueMin:e})),De={kernelName:a.ClipByValue,backendName:"cpu",kernelFunc:Ae};var Ce=n(89436);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const _e=e=>{const{x:t}=e.inputs,n=e.backend,s=new Float32Array(a.util.sizeFromShape(t.shape)),r=n.data.get(t.dataId),o=r.complexTensorInfos.real,i=r.complexTensorInfos.imag,u=n.data.get(o.dataId).values,c=n.data.get(i.dataId).values;for(let a=0;a<u.length;a++){const e=u[a],t=c[a];s[a]=Math.hypot(e,t)}return n.makeOutput(s,t.shape,"float32")},Ee={kernelName:a.ComplexAbs,backendName:"cpu",kernelFunc:_e};var ze=n(97763);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function We(e){const{inputs:t,backend:n}=e,{input:a}=t,s=n.data.get(a.dataId).complexTensorInfos.imag,r=n.data.get(s.dataId).values;return n.makeTensorInfo(s.shape,s.dtype,r)}const He={kernelName:a.Imag,backendName:"cpu",kernelFunc:We};var Re=n(85806);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Pe(e){const{inputs:t,backend:n,attrs:s}=e,{axis:r}=s,o=a.util.parseAxisParam(r,t[0].shape)[0];let i=a.backend_util.computeOutShape(t.map((e=>e.shape)),o);if(0===a.util.sizeFromShape(i))return n.makeTensorInfo(i,t[0].dtype,[]);const u=t.filter((e=>a.util.sizeFromShape(e.shape)>0));if(1===u.length)return(0,d.D)({inputs:{x:u[0]},backend:n});const c=u.map((e=>e.shape));if(a.backend_util.assertParamsConsistent(c,o),"complex64"===u[0].dtype){const e=u.map((e=>(0,Re.x)({inputs:{input:e},backend:n}))),t=u.map((e=>We({inputs:{input:e},backend:n}))),a=Pe({inputs:e,backend:n,attrs:{axis:o}}),s=Pe({inputs:t,backend:n,attrs:{axis:o}}),r=(0,Ce.f)({inputs:{real:a,imag:s},backend:n});return e.forEach((e=>n.disposeIntermediateTensorInfo(e))),t.forEach((e=>n.disposeIntermediateTensorInfo(e))),n.disposeIntermediateTensorInfo(a),n.disposeIntermediateTensorInfo(s),r}const l=u.map((e=>{const t=a.util.sizeFromShape(e.shape.slice(o)),s=[-1,t];return T({inputs:{x:e},backend:n,attrs:{shape:s}})})),p=l.map((e=>({vals:n.data.get(e.dataId).values,shape:e.shape})));i=a.backend_util.computeOutShape(l.map((e=>e.shape)),1);const h=1===l[0].shape[0],f=(0,ze.h)(p,i,t[0].dtype,h),m=a.backend_util.computeOutShape(u.map((e=>e.shape)),o),k=n.makeTensorInfo(m,t[0].dtype,f);return l.forEach((e=>n.disposeIntermediateTensorInfo(e))),k}const Be={kernelName:a.Concat,backendName:"cpu",kernelFunc:Pe};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Ge(e){const{inputs:t,backend:n,attrs:r}=e,{x:o,filter:i}=t,{strides:u,pad:c,dataFormat:l,dilations:d,dimRoundingMode:p}=r;(0,s.C)([o,i],"conv2d");const h=a.backend_util.convertConv2DDataFormat(l),f=a.backend_util.computeConv2DInfo(o.shape,i.shape,u,d,c,p,!1,h),m=f.filterHeight,k=f.filterWidth,g=f.dilationHeight,b=f.dilationWidth,I=f.padInfo.left,v=f.padInfo.top,y="channelsLast"===f.dataFormat,N=new a.TensorBuffer(f.outShape,o.dtype),x=a.util.computeStrides(o.shape),S=a.util.computeStrides(i.shape),T=x[0],F=y?x[1]:x[2],M=y?x[2]:1,w=y?1:x[1],A=N.strides[0],D=y?N.strides[1]:N.strides[2],C=y?N.strides[2]:1,_=y?1:N.strides[1],E=n.data.get(o.dataId).values,z=n.data.get(i.dataId).values,W=N.values;for(let a=0;a<f.batchSize;++a){const e=a*T,t=a*A;for(let n=0;n<f.outHeight;++n){const a=t+n*D,s=n*f.strideHeight-v;for(let t=0;t<m;++t){const n=s+t*g;if(n<0||n>=f.inHeight)continue;const r=t*S[0],o=e+n*F;for(let e=0;e<f.outWidth;++e){const t=a+e*C,n=e*f.strideWidth-I;for(let e=0;e<k;++e){const a=n+e*b;if(a<0||a>=f.inWidth)continue;const s=r+e*S[1],i=o+a*M;let u=s;for(let e=0;e<f.inChannels;++e){const n=E[i+e*w];for(let e=0;e<f.outChannels;++e)W[t+e*_]+=n*z[u+e];u+=f.outChannels}}}}}}return n.makeTensorInfo(N.shape,N.dtype,W)}const $e={kernelName:a.Conv2D,backendName:"cpu",kernelFunc:Ge};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Oe(e){const{inputs:t,backend:n,attrs:r}=e,{x:o,dy:i}=t,{strides:u,pad:c,dataFormat:l,dimRoundingMode:d,filterShape:p}=r;(0,s.C)([o,i],"conv2dBackpropFilter");const h=a.backend_util.convertConv2DDataFormat(l),f=a.backend_util.computeConv2DInfo(o.shape,p,u,1,c,d,!1,h),{strideHeight:m,strideWidth:k,filterHeight:g,filterWidth:b}=f,I="channelsLast"===f.dataFormat,v=new a.TensorBuffer(f.filterShape,"float32"),y=f.padInfo.left,N=f.padInfo.top,x=n.data.get(o.dataId).values,S=n.data.get(i.dataId).values,T=new a.TensorBuffer(o.shape,o.dtype,x),F=new a.TensorBuffer(i.shape,i.dtype,S);for(let a=0;a<g;++a){const e=Math.max(0,Math.ceil((N-a)/m)),t=Math.min(f.outHeight,(f.inHeight+N-a)/m);for(let n=0;n<b;++n){const s=Math.max(0,Math.ceil((y-n)/k)),r=Math.min(f.outWidth,(f.inWidth+y-n)/k);for(let o=0;o<f.inChannels;++o)for(let i=0;i<f.outChannels;++i){let u=0;for(let c=0;c<f.batchSize;++c)for(let l=e;l<t;++l){const e=a+l*m-N;for(let t=s;t<r;++t){const a=n+t*k-y;u+=I?T.get(c,e,a,o)*F.get(c,l,t,i):T.get(c,o,e,a)*F.get(c,i,l,t)}}v.set(u,a,n,o,i)}}}return n.makeTensorInfo(v.shape,v.dtype,v.values)}const Le={kernelName:a.Conv2DBackpropFilter,backendName:"cpu",kernelFunc:Oe};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Ve(e){const{inputs:t,backend:n,attrs:r}=e,{dy:o,filter:i}=t,{inputShape:u,strides:c,pad:l,dataFormat:d,dimRoundingMode:p}=r;(0,s.C)([o,i],"conv2dBackpropInput");const h=a.util.computeStrides(i.shape),f=a.util.computeStrides(o.shape);let m=a.backend_util.convertConv2DDataFormat(d);const k=a.backend_util.computeConv2DInfo(u,i.shape,c,1,l,p,!1,m),g=new a.TensorBuffer(k.inShape,"float32"),b=g.values,I=n.data.get(o.dataId).values,v=n.data.get(i.dataId).values,[y,N,x]=h,{batchSize:S,filterHeight:T,filterWidth:F,inChannels:M,inHeight:w,inWidth:A,outChannels:D,outHeight:C,outWidth:_,strideHeight:E,strideWidth:z}=k;m=k.dataFormat;const W=T-1-k.padInfo.top,H=F-1-k.padInfo.left,R="channelsLast"===m,P=g.strides[0],B=R?g.strides[1]:g.strides[2],G=R?g.strides[2]:1,$=R?1:g.strides[1],O=f[0],L=R?f[1]:f[2],V=R?f[2]:1,q=R?1:f[1];for(let a=0;a<S;++a)for(let e=0;e<M;++e)for(let t=0;t<w;++t){const n=t-W,s=Math.max(0,Math.ceil(n/E)),r=Math.min(C,(T+n)/E);for(let o=0;o<A;++o){const i=o-H,u=Math.max(0,Math.ceil(i/z)),c=Math.min(_,(F+i)/z);let l=0;for(let t=s;t<r;++t){const s=t*E-n;for(let n=u;n<c;++n){const r=n*z-i,o=O*a+L*t+V*n,u=y*(T-1-s)+N*(F-1-r)+x*e;for(let e=0;e<D;++e){const t=I[o+q*e],n=v[u+e];l+=t*n}}}const d=P*a+B*t+G*o+$*e;b[d]=l}}return n.makeTensorInfo(g.shape,g.dtype,g.values)}const qe={kernelName:a.Conv2DBackpropInput,backendName:"cpu",kernelFunc:Ve};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Ze(e){const{inputs:t,backend:n,attrs:r}=e,{x:o,filter:i}=t,{strides:u,pad:c,dilations:l}=r;(0,s.C)([o,i],"conv3d");const d=a.backend_util.computeConv3DInfo(o.shape,i.shape,u,l,c),{filterDepth:p,filterHeight:h,filterWidth:f,dilationDepth:m,dilationHeight:k,dilationWidth:g,padInfo:b}=d,I=b.front,v=b.left,y=b.top,N=new a.TensorBuffer(d.outShape,o.dtype),x=n.data.get(o.dataId).values,S=n.data.get(i.dataId).values,T=N.values,F=a.util.computeStrides(o.shape),M=a.util.computeStrides(i.shape);for(let a=0;a<d.batchSize;++a){const e=a*F[0],t=a*N.strides[0];for(let n=0;n<d.outDepth;++n){const a=t+n*N.strides[1],s=n*d.strideDepth-I;for(let t=0;t<p;++t){const n=s+t*m;if(n<0||n>=d.inDepth)continue;const r=t*M[0],o=e+n*F[1];for(let e=0;e<d.outHeight;++e){const t=a+e*N.strides[2],n=e*d.strideHeight-y;for(let e=0;e<h;++e){const a=n+e*k;if(a<0||a>=d.inHeight)continue;const s=r+e*M[1],i=o+a*F[2];for(let e=0;e<d.outWidth;++e){const n=t+e*d.outChannels,a=e*d.strideWidth-v;for(let e=0;e<f;++e){const t=a+e*g;if(t<0||t>=d.inWidth)continue;const r=s+e*M[2],o=i+t*d.inChannels;let u=r;for(let e=0;e<d.inChannels;++e){const t=x[o+e];for(let e=0;e<d.outChannels;++e)T[n+e]+=t*S[u+e];u+=d.outChannels}}}}}}}}return n.makeTensorInfo(N.shape,N.dtype,N.values)}const je={kernelName:a.Conv3D,backendName:"cpu",kernelFunc:Ze};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Ue(e){const{inputs:t,backend:n,attrs:r}=e,{x:o,dy:i}=t,{strides:u,pad:c,filterShape:l}=r;(0,s.C)([o,i],"conv3dBackpropFilterV2");const d=a.util.computeStrides(o.shape),p=a.util.computeStrides(i.shape),h=a.backend_util.computeConv3DInfo(o.shape,l,u,1,c),f=h.strideDepth,m=h.strideHeight,k=h.strideWidth,g=h.filterDepth,b=h.filterHeight,I=h.filterWidth,v=new a.TensorBuffer(h.filterShape,"float32"),y=v.values,[N,x,S,T]=v.strides,F=n.data.get(i.dataId).values,[M,w,A,D]=p,C=n.data.get(o.dataId).values,[_,E,z,W]=d,H=h.padInfo.front,R=h.padInfo.left,P=h.padInfo.top;for(let a=0;a<g;++a){const e=Math.max(0,Math.ceil((H-a)/f)),t=Math.min(h.outDepth,(h.inDepth+H-a)/f),n=a*N;for(let s=0;s<b;++s){const r=Math.max(0,Math.ceil((P-s)/m)),o=Math.min(h.outHeight,(h.inHeight+P-s)/m),i=s*x+n;for(let n=0;n<I;++n){const u=Math.max(0,Math.ceil((R-n)/k)),c=Math.min(h.outWidth,(h.inWidth+R-n)/k),l=n*S+i;for(let i=0;i<h.inChannels;++i){const d=i*T+l;for(let l=0;l<h.outChannels;++l){let p=0;for(let d=0;d<h.batchSize;++d){const h=d*_,g=d*M;for(let d=e;d<t;++d){const e=a+d*f-H,t=e*E+h,b=d*w+g;for(let a=r;a<o;++a){const e=s+a*m-P,r=e*z+t,o=a*A+b;for(let t=u;t<c;++t){const e=n+t*k-R,a=e*W+r,s=t*D+o;p+=C[a+i]*F[s+l]}}}}y[d+l]=p}}}}}return n.makeTensorInfo(v.shape,v.dtype,v.values)}const Ke={kernelName:a.Conv3DBackpropFilterV2,backendName:"cpu",kernelFunc:Ue};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Ye(e){const{inputs:t,backend:n,attrs:r}=e,{dy:o,filter:i}=t,{pad:u,strides:c,inputShape:l}=r;(0,s.C)([o],"conv3dBackpropInputV2");const d=a.util.computeStrides(o.shape),p=a.util.computeStrides(i.shape),h=a.backend_util.computeConv3DInfo(l,i.shape,c,1,u),f=new a.TensorBuffer(h.inShape,"float32"),m=f.values,[k,g,b,I]=f.strides,v=n.data.get(o.dataId).values,[y,N,x,S]=d,T=n.data.get(i.dataId).values,[F,M,w,A]=p,{batchSize:D,filterDepth:C,filterHeight:_,filterWidth:E,inChannels:z,inDepth:W,inHeight:H,inWidth:R,outChannels:P,outDepth:B,outHeight:G,outWidth:$,strideDepth:O,strideHeight:L,strideWidth:V}=h,q=C-1-h.padInfo.front,Z=_-1-h.padInfo.top,j=E-1-h.padInfo.left;for(let a=0;a<D;++a)for(let e=0;e<z;++e)for(let t=0;t<W;++t){const n=t-q,s=Math.max(0,Math.ceil(n/O)),r=Math.min(B,(C+n)/O);for(let o=0;o<H;++o){const i=o-Z,u=Math.max(0,Math.ceil(i/L)),c=Math.min(G,(_+i)/L);for(let l=0;l<R;++l){const d=l-j,p=Math.max(0,Math.ceil(d/V)),h=Math.min($,(E+d)/V);let f=0;for(let t=s;t<r;++t){const s=t*O-n;for(let n=u;n<c;++n){const r=n*L-i;for(let o=p;o<h;++o){const i=o*V-d,u=y*a+N*t+x*n+S*o,c=F*(C-1-s)+M*(_-1-r)+w*(E-1-i)+A*e;for(let e=0;e<P;++e){const t=v[u+e],n=T[c+e];f+=t*n}}}}m[k*a+g*t+b*o+I*l+e]=f}}}return n.makeTensorInfo(f.shape,f.dtype,f.values)}const Qe={kernelName:a.Conv3DBackpropInputV2,backendName:"cpu",kernelFunc:Ye},Xe=(0,u.v)(a.Cos,(e=>Math.cos(e))),Je={kernelName:a.Cos,backendName:"cpu",kernelFunc:Xe},et=(0,u.v)(a.Cosh,(e=>Math.cosh(e))),tt={kernelName:a.Cosh,backendName:"cpu",kernelFunc:et};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function nt(e){const{inputs:t,backend:n,attrs:s}=e,{image:r,boxes:o,boxInd:i}=t,{cropSize:u,method:c,extrapolationValue:l}=s,[d,p,h,f]=r.shape,m=o.shape[0],[k,g]=u,b=(0,a.buffer)([m,k,g,f],"float32"),I=n.data.get(o.dataId).values,v=n.data.get(i.dataId).values,y=n.data.get(r.dataId).values,N=a.util.computeStrides(r.shape),x=a.util.computeStrides(b.shape);for(let a=0;a<m;a++){const e=4*a,t=I[e],n=I[e+1],s=I[e+2],r=I[e+3],o=v[a];if(o>=d)continue;const i=k>1?(s-t)*(p-1)/(k-1):0,u=g>1?(r-n)*(h-1)/(g-1):0;for(let d=0;d<k;d++){const e=k>1?t*(p-1)+d*i:.5*(t+s)*(p-1);if(e<0||e>p-1)for(let t=0;t<g;t++)for(let e=0;e<f;e++){const n=e+t*x[2]+d*x[1]+a*x[0];b.values[n]=l}else if("bilinear"===c){const t=Math.floor(e),s=Math.ceil(e),i=e-t;for(let e=0;e<g;e++){const c=g>1?n*(h-1)+e*u:.5*(n+r)*(h-1);if(c<0||c>h-1){for(let t=0;t<f;t++){const n=t+e*x[2]+d*x[1]+a*x[0];b.values[n]=l}continue}const p=Math.floor(c),m=Math.ceil(c),k=c-p;for(let n=0;n<f;n++){let r=n+p*N[2]+t*N[1]+o*N[0];const u=y[r];r=n+m*N[2]+t*N[1]+o*N[0];const c=y[r];r=n+p*N[2]+s*N[1]+o*N[0];const l=y[r];r=n+m*N[2]+s*N[1]+o*N[0];const h=y[r],f=u+(c-u)*k,g=l+(h-l)*k;r=n+e*x[2]+d*x[1]+a*x[0],b.values[r]=f+(g-f)*i}}}else for(let t=0;t<g;++t){const s=g>1?n*(h-1)+t*u:.5*(n+r)*(h-1);if(s<0||s>h-1){for(let e=0;e<f;e++){const n=e+t*x[2]+d*x[1]+a*x[0];b.values[n]=l}continue}const i=Math.round(s),c=Math.round(e);for(let e=0;e<f;e++){const n=e+i*N[2]+c*N[1]+o*N[0],s=e+t*x[2]+d*x[1]+a*x[0];b.values[s]=y[n]}}}}return n.makeTensorInfo(b.shape,b.dtype,b.values)}const at={kernelName:a.CropAndResize,backendName:"cpu",kernelFunc:nt};
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function st(e){const{inputs:t,backend:n,attrs:r}=e,{x:o}=t,{axis:i,exclusive:u,reverse:c}=r;(0,s.C)(o,"cumprod");const l=a.backend_util.getAxesPermutation([i],o.shape.length);let d=o;null!=l&&(d=(0,P.m)({inputs:{x:o},backend:n,attrs:{perm:l}}));const p=a.backend_util.getInnerMostAxes(1,o.shape.length)[0];if(p!==d.shape.length-1)throw new Error(`backend.cumprod in CPU expects an inner-most axis=${d.shape.length-1} but got axis=${p}`);const h=(0,a.upcastType)(d.dtype,"int32"),f=a.util.makeOnesTypedArray(a.util.sizeFromShape(d.shape),h),m=n.data.get(d.dataId).values,k=d.shape[d.shape.length-1],g=c?(e,t)=>e+k-t-1:(e,t)=>e+t;for(let a=0;a<m.length;a+=k)for(let e=0;e<k;e++){const t=g(a,e);if(0===e)f[t]=u?1:m[t];else{const n=g(a,e-1);f[t]=u?m[n]*f[n]:m[t]*f[n]}}const b=n.makeTensorInfo(d.shape,h,f);if(null!=l){const e=a.backend_util.getUndoAxesPermutation(l),t=(0,P.m)({inputs:{x:b},backend:n,attrs:{perm:e}});return n.disposeIntermediateTensorInfo(b),n.disposeIntermediateTensorInfo(d),t}return b}const rt={kernelName:a.Cumprod,backendName:"cpu",kernelFunc:st};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function ot(e){const{inputs:t,backend:n,attrs:r}=e,{x:o}=t,{axis:i,exclusive:u,reverse:c}=r;(0,s.C)(o,"cumsum");const l=a.backend_util.getAxesPermutation([i],o.shape.length);let d=o;null!=l&&(d=(0,P.m)({inputs:{x:o},backend:n,attrs:{perm:l}}));const p=a.backend_util.getInnerMostAxes(1,o.shape.length)[0];if(p!==d.shape.length-1)throw new Error(`backend.cumsum in CPU expects an inner-most axis=${d.shape.length-1} but got axis=${p}`);const h=(0,a.upcastType)(d.dtype,"int32"),f=a.util.makeZerosTypedArray(a.util.sizeFromShape(d.shape),h),m=n.data.get(d.dataId).values,k=d.shape[d.shape.length-1],g=c?(e,t)=>e+k-t-1:(e,t)=>e+t;for(let a=0;a<m.length;a+=k)for(let e=0;e<k;e++){const t=g(a,e);if(0===e)f[t]=u?0:m[t];else{const n=g(a,e-1);f[t]=u?m[n]+f[n]:m[t]+f[n]}}const b=n.makeTensorInfo(d.shape,h,f);if(null!=l){const e=a.backend_util.getUndoAxesPermutation(l),t=(0,P.m)({inputs:{x:b},backend:n,attrs:{perm:e}});return n.disposeIntermediateTensorInfo(b),n.disposeIntermediateTensorInfo(d),t}return b}const it={kernelName:a.Cumsum,backendName:"cpu",kernelFunc:ot};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function ut(e){const{inputs:t,backend:n,attrs:a}=e,{x:s,weights:r}=t,{size:o,binaryOutput:i}=a;if(1===s.shape.length){const e=n.data.get(s.dataId).values,t=n.data.get(r.dataId).values,a=(0,Ne.X)(e,t,r.dtype,r.shape,o);return n.makeTensorInfo([o],r.dtype,a)}if(2===s.shape.length){const e=n.bufferSync(s),t=n.bufferSync(r),a=(0,Ne.N)(e,t,o,i);return n.makeTensorInfo(a.shape,r.dtype,a.values)}throw new Error(`Error in denseBincount: input must be at most rank 2, but got rank${s.shape.length}.`)}const ct={kernelName:a.DenseBincount,backendName:"cpu",kernelFunc:ut};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function lt(e){const{inputs:t,backend:n,attrs:s}=e,{x:r}=t,{blockSize:o,dataFormat:i}=s;a.util.assert("NHWC"===i,(()=>`Only NHWC dataFormat supported on CPU for depthToSpace. Got ${i}`));const u=r.shape[0],c=r.shape[1],l=r.shape[2],d=r.shape[3],p=c*o,h=l*o,f=d/(o*o),m=n.data.get(r.dataId).values,k=new Float32Array(u*p*h*f);let g=0;for(let a=0;a<u;++a)for(let e=0;e<p;++e){const t=Math.floor(e/o),n=e%o;for(let e=0;e<h;++e){const s=Math.floor(e/o),r=e%o,i=(n*o+r)*f;for(let e=0;e<f;++e){const n=e+i,r=n+d*(s+l*(t+c*a));k[g++]=m[r]}}}return n.makeTensorInfo([u,p,h,f],r.dtype,k)}const dt={kernelName:a.DepthToSpace,backendName:"cpu",kernelFunc:lt};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function pt(e){const{inputs:t,backend:n,attrs:r}=e,{x:o,filter:i}=t,{strides:u,pad:c,dilations:l,dimRoundingMode:d}=r;(0,s.C)([o,i],"depthwiseConv2DNative");const p=a.util.computeStrides(o.shape),h=a.util.computeStrides(i.shape);let f=l;null==f&&(f=[1,1]),a.util.assert(a.backend_util.eitherStridesOrDilationsAreOne(u,f),(()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${u} and dilations '${f}'`));const m=a.backend_util.computeConv2DInfo(o.shape,i.shape,u,f,c,d,!0),{filterHeight:k,filterWidth:g,dilationHeight:b,dilationWidth:I,padInfo:v}=m,y=v.left,N=v.top,x=m.outChannels/m.inChannels,S=new a.TensorBuffer(m.outShape,o.dtype),T=n.data.get(o.dataId).values,F=n.data.get(i.dataId).values,M=S.values;for(let a=0;a<m.batchSize;++a){const e=a*p[0],t=a*S.strides[0];for(let n=0;n<m.outHeight;++n){const a=t+n*S.strides[1],s=n*m.strideHeight-N;for(let t=0;t<k;++t){const n=s+t*b;if(n<0||n>=m.inHeight)continue;const r=t*h[0],o=e+n*p[1];for(let e=0;e<m.outWidth;++e){const t=a+e*S.strides[2],n=e*m.strideWidth-y;for(let e=0;e<g;++e){const a=n+e*I;if(a<0||a>=m.inWidth)continue;const s=r+e*h[1],i=o+a*m.inChannels;let u=t,c=s;for(let e=0;e<m.inChannels;++e){const t=T[i+e];for(let e=0;e<x;++e)M[u+e]+=t*F[c+e];u+=x,c+=x}}}}}}return n.makeTensorInfo(S.shape,S.dtype,S.values)}const ht={kernelName:a.DepthwiseConv2dNative,backendName:"cpu",kernelFunc:pt};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function ft(e){const{inputs:t,backend:n,attrs:r}=e,{x:o,dy:i}=t,{strides:u,dilations:c,pad:l,dimRoundingMode:d,filterShape:p}=r;(0,s.C)([o,i],"depthwiseConv2dNativeBackpropFilter");const h=a.backend_util.computeConv2DInfo(o.shape,p,u,c,l,d,!0),{strideHeight:f,strideWidth:m,filterHeight:k,filterWidth:g}=h,b=new a.TensorBuffer(h.filterShape,"float32"),I=h.padInfo.left,v=h.padInfo.top,y=h.outChannels/h.inChannels,N=n.data.get(o.dataId).values,x=new a.TensorBuffer(o.shape,o.dtype,N),S=n.data.get(i.dataId).values,T=new a.TensorBuffer(i.shape,i.dtype,S);for(let a=0;a<k;++a){const e=Math.max(0,Math.ceil((v-a)/f)),t=Math.min(h.outHeight,(h.inHeight+v-a)/f);for(let n=0;n<g;++n){const s=Math.max(0,Math.ceil((I-n)/m)),r=Math.min(h.outWidth,(h.inWidth+I-n)/m);for(let o=0;o<h.outChannels;++o){const i=Math.trunc(o/y),u=o%y;let c=0;for(let l=0;l<h.batchSize;++l)for(let u=e;u<t;++u){const e=a+u*f-v;for(let t=s;t<r;++t){const a=n+t*m-I;c+=x.get(l,e,a,i)*T.get(l,u,t,o)}}b.set(c,a,n,i,u)}}}return n.makeTensorInfo(b.shape,b.dtype,b.values)}const mt={kernelName:a.DepthwiseConv2dNativeBackpropFilter,backendName:"cpu",kernelFunc:ft};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function kt(e){const{inputs:t,backend:n,attrs:r}=e,{dy:o,filter:i}=t,{strides:u,dilations:c,pad:l,dimRoundingMode:d,inputShape:p}=r;(0,s.C)([o,i],"depthwiseConv2DNativeBackpropInput");const h=a.util.computeStrides(o.shape),f=a.util.computeStrides(i.shape),m=a.backend_util.computeConv2DInfo(p,i.shape,u,c,l,d,!0),k=new a.TensorBuffer(m.inShape,"float32"),g=k.values,[b,I,v]=k.strides,y=n.data.get(o.dataId).values,[N,x,S]=h,T=n.data.get(i.dataId).values,[F,M,w]=f,{batchSize:A,filterHeight:D,filterWidth:C,inChannels:_,inHeight:E,inWidth:z,outChannels:W,outHeight:H,outWidth:R,strideHeight:P,strideWidth:B}=m,G=D-1-m.padInfo.top,$=C-1-m.padInfo.left,O=W/_;for(let a=0;a<A;++a)for(let e=0;e<_;++e)for(let t=0;t<E;++t){const n=t-G,s=Math.max(0,Math.ceil(n/P)),r=Math.min(H,(D+n)/P);for(let o=0;o<z;++o){const i=o-$,u=Math.max(0,Math.ceil(i/B)),c=Math.min(R,(C+i)/B);let l=0;for(let t=s;t<r;++t){const s=t*P-n;for(let n=u;n<c;++n){const r=n*B-i,o=N*a+x*t+S*n,u=F*(D-1-s)+M*(C-1-r)+w*e;for(let t=0;t<O;++t){const n=e*O+t,a=y[o+n],s=T[u+t];l+=a*s}}}g[b*a+I*t+v*o+e]=l}}return n.makeTensorInfo(k.shape,k.dtype,k.values)}const gt={kernelName:a.DepthwiseConv2dNativeBackpropInput,backendName:"cpu",kernelFunc:kt};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function bt(e){const{inputs:t,backend:n}=e,{x:s}=t,r=a.util.sizeFromShape(s.shape),o=n.data.get(s.dataId).values,i=(0,a.buffer)([r,r],s.dtype),u=i.values;for(let a=0;a<o.length;a++)u[a*r+a]=o[a];const c=[...s.shape,...s.shape];return n.makeTensorInfo(c,i.dtype,i.values)}const It={kernelName:a.Diag,backendName:"cpu",kernelFunc:bt},vt={kernelName:a.Dilation2D,backendName:"cpu",kernelFunc:({inputs:e,backend:t,attrs:n})=>{const{x:s,filter:r}=e,{strides:o,pad:i,dilations:u}=n,c=t,l=c.data.get(s.dataId).values,d=s.shape.length,p=c.data.get(r.dataId).values,h=r.shape.length,{batchSize:f,inHeight:m,inWidth:k,inChannels:g,outHeight:b,outWidth:I,padInfo:v,strideHeight:y,strideWidth:N,filterHeight:x,filterWidth:S,dilationHeight:T,dilationWidth:F,outShape:M}=a.backend_util.computeDilation2DInfo(s.shape,r.shape,o,i,"NHWC",u),w=a.util.sizeFromShape(M),A=M.length,D=a.util.getArrayFromDType(s.dtype,w);for(let _=0;_<f;++_)for(let e=0;e<b;++e){const t=e*y-v.top;for(let n=0;n<I;++n){const o=n*N-v.left;for(let i=0;i<g;++i){let u=Number.MIN_SAFE_INTEGER;for(let e=0;e<x;++e){const n=t+e*T;if(n>=0&&n<m)for(let t=0;t<S;++t){const c=o+t*F;if(c>=0&&c<k){const o=a.util.locToIndex([_,n,c,i],d,a.util.computeStrides(s.shape)),f=a.util.locToIndex([e,t,i],h,a.util.computeStrides(r.shape)),m=l[o]+p[f];m>u&&(u=m)}}}const c=a.util.locToIndex([_,e,n,i],A,a.util.computeStrides(M));D[c]=u}}}const C=c.write(a.util.toTypedArray(D,s.dtype),M,s.dtype);return{dataId:C,shape:M,dtype:s.dtype}}},yt={kernelName:a.Dilation2DBackpropFilter,backendName:"cpu",kernelFunc:({inputs:e,backend:t,attrs:n})=>{const{x:s,filter:r,dy:o}=e,{strides:i,pad:u,dilations:c}=n,l=t,d=a.util.toNestedArray(s.shape,l.data.get(s.dataId).values),p=a.util.toNestedArray(r.shape,l.data.get(r.dataId).values),{batchSize:h,inHeight:f,inWidth:m,inChannels:k,outHeight:g,outWidth:b,padInfo:I,strideHeight:v,strideWidth:y,filterHeight:N,filterWidth:x,dilationHeight:S,dilationWidth:T,outShape:F}=a.backend_util.computeDilation2DInfo(s.shape,r.shape,i,u,"NHWC",c);a.util.assert(o.rank===F.length,(()=>`Error in ${a.Dilation2DBackpropFilter}, dy must have the same rank as output ${F.length}, but got ${o.rank}`));const M=a.util.toNestedArray(F,l.data.get(o.dataId).values),w=a.util.makeZerosNestedTypedArray(r.shape,r.dtype);for(let a=0;a<h;++a)for(let e=0;e<g;++e){const t=e*v-I.top;for(let n=0;n<b;++n){const s=n*y-I.left;for(let r=0;r<k;++r){let o=Number.MIN_SAFE_INTEGER,i=0,u=0;for(let e=0;e<N;++e){const n=t+e*S;if(n>=0&&n<f)for(let t=0;t<x;++t){const c=s+t*T;if(c>=0&&c<m){const s=d[a][n][c][r]+p[e][t][r];s>o&&(o=s,i=e,u=t)}}}w[i][u][r]+=M[a][e][n][r]}}}const A=l.write(a.util.toTypedArray(w,s.dtype),r.shape,r.dtype);return{dataId:A,shape:r.shape,dtype:r.dtype}}},Nt={kernelName:a.Dilation2DBackpropInput,backendName:"cpu",kernelFunc:({inputs:e,backend:t,attrs:n})=>{const{x:s,filter:r,dy:o}=e,{strides:i,pad:u,dilations:c}=n,l=t,d=a.util.toNestedArray(s.shape,l.data.get(s.dataId).values),p=a.util.toNestedArray(r.shape,l.data.get(r.dataId).values),{batchSize:h,inHeight:f,inWidth:m,inChannels:k,outHeight:g,outWidth:b,padInfo:I,strideHeight:v,strideWidth:y,filterHeight:N,filterWidth:x,dilationHeight:S,dilationWidth:T,outShape:F}=a.backend_util.computeDilation2DInfo(s.shape,r.shape,i,u,"NHWC",c);a.util.assert(o.rank===F.length,(()=>`Error in ${a.Dilation2DBackpropInput}, dy must have the same rank as output ${F.length}, but got ${o.rank}`));const M=a.util.toNestedArray(F,l.data.get(o.dataId).values),w=a.util.makeZerosNestedTypedArray(s.shape,s.dtype);for(let a=0;a<h;++a)for(let e=0;e<g;++e){const t=e*v-I.top;for(let n=0;n<b;++n){const s=n*y-I.left;for(let r=0;r<k;++r){let o=Number.MIN_SAFE_INTEGER,i=t<0?0:t,u=s<0?0:s;for(let e=0;e<N;++e){const n=t+e*S;if(n>=0&&n<f)for(let t=0;t<x;++t){const c=s+t*T;if(c>=0&&c<m){const s=d[a][n][c][r]+p[e][t][r];s>o&&(o=s,i=n,u=c)}}}w[a][i][u][r]+=M[a][e][n][r]}}}const A=l.write(a.util.toTypedArray(w,s.dtype),s.shape,s.dtype);return{dataId:A,shape:s.shape,dtype:s.dtype}}};var xt=n(65646),St=n(11317);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Tt(e){const{inputs:t,backend:n,attrs:r}=e,{x:o}=t,{axis:i,keepDims:u}=r;let c;(0,s.C)(o,"sum"),c="bool"===o.dtype?(0,Me.w)({inputs:{x:o},backend:n,attrs:{dtype:"int32"}}):(0,d.D)({inputs:{x:o},backend:n});const l=c.shape.length,p=a.util.parseAxisParam(i,c.shape),h=a.backend_util.getAxesPermutation(p,l);let f=p,m=c;null!=h&&(m=(0,P.m)({inputs:{x:c},backend:n,attrs:{perm:h}}),f=a.backend_util.getInnerMostAxes(f.length,l)),a.backend_util.assertAxesAreInnerMostDims("sum",f,m.shape.length);const[k,g]=a.backend_util.computeOutAndReduceShapes(m.shape,f),b=a.backend_util.upcastType(m.dtype,"int32");let I=(0,St.U)(n,k,b);const v=a.util.sizeFromShape(g),y=n.data.get(I.dataId).values,N=n.data.get(m.dataId).values;for(let a=0;a<y.length;++a){const e=a*v;let t=0;for(let n=0;n<v;++n)t+=N[e+n];y[a]=t}if(u){const e=a.backend_util.expandShapeToKeepDim(I.shape,p),t=I;I=T({inputs:{x:I},backend:n,attrs:{shape:e}}),n.disposeIntermediateTensorInfo(t)}return n.disposeIntermediateTensorInfo(c),null!=h&&n.disposeIntermediateTensorInfo(m),I}const Ft={kernelName:a.Sum,backendName:"cpu",kernelFunc:Tt};
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Mt(e){const{inputs:t,backend:n,attrs:s}=e,{equation:r}=s,o=t,{allDims:i,summedDims:u,idDims:c}=a.backend_util.decodeEinsumEquation(r,o.length);a.backend_util.checkEinsumDimSizes(i.length,c,o);const{path:l,steps:d}=a.backend_util.getEinsumComputePath(u,c),p=d.length;let h=null,f=i.length;const m=[];for(let k=0;k<p;++k){for(const e of d[k]){const{permutationIndices:t,expandDims:s}=a.backend_util.getEinsumPermutation(f,c[e]);let r;a.backend_util.isIdentityPermutation(t)?r=o[e]:(r=(0,P.m)({inputs:{x:o[e]},backend:n,attrs:{perm:t}}),m.push(r));const i=r.shape.slice();for(let e=0;e<s.length;++e)i.splice(s[e],0,1);a.util.arraysEqual(r.shape,i)||(r=T({inputs:{x:r},backend:n,attrs:{shape:i}}),m.push(r)),null===h?h=r:(h=(0,xt.lw)({inputs:{a:r,b:h},backend:n}),m.push(h))}k<p-1&&(l[k]>=0&&(h=Tt({inputs:{x:h},backend:n,attrs:{axis:l[k]-(i.length-f),keepDims:!1}}),m.push(h)),f--)}for(const a of m)a!==h&&n.disposeIntermediateTensorInfo(a);return h}const wt={kernelName:a.Einsum,backendName:"cpu",kernelFunc:Mt};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function At(e){const{inputs:t,backend:n}=e,{dy:r,y:o}=t;(0,s.C)([r,o],"eluGrad");const i=new Float32Array(a.util.sizeFromShape(o.shape)),u=n.data.get(o.dataId).values,c=n.data.get(r.dataId).values;for(let a=0;a<u.length;++a){const e=u[a];i[a]=e>=1?c[a]:c[a]*(e+1)}return n.makeTensorInfo(o.shape,"float32",i)}const Dt={kernelName:a.EluGrad,backendName:"cpu",kernelFunc:At};var Ct=n(99292);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const _t=a.backend_util.ERF_P,Et=a.backend_util.ERF_A1,zt=a.backend_util.ERF_A2,Wt=a.backend_util.ERF_A3,Ht=a.backend_util.ERF_A4,Rt=a.backend_util.ERF_A5,Pt=(0,u.v)(a.Erf,(e=>{const t=Math.sign(e),n=Math.abs(e),a=1/(1+_t*n);return t*(1-((((Rt*a+Ht)*a+Wt)*a+zt)*a+Et)*a*Math.exp(-n*n))})),Bt={kernelName:a.Erf,backendName:"cpu",kernelFunc:Pt};var Gt=n(66423);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function $t(e){const{inputs:t,backend:n,attrs:s}=e,{input:r}=t,{dim:o}=s,i=r.shape.length,u=r.shape.slice();let c=o;return o<0&&(a.util.assert(-(i+1)<=o,(()=>`Axis must be in the interval [${-(i+1)}, ${i}]`)),c=i+o+1),u.splice(c,0,1),T({inputs:{x:r},backend:n,attrs:{shape:u}})}const Ot={kernelName:a.ExpandDims,backendName:"cpu",kernelFunc:$t};var Lt=n(26789);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const Vt=(0,f.Z)(((e,t)=>e/t)),qt=(0,J.j)(a.RealDiv,Vt),Zt={kernelName:a.RealDiv,backendName:"cpu",kernelFunc:qt};var jt=n(18566);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Ut(e,t,n){const s=e.shape,r=s[0],o=s[1],i=n.data.get(e.dataId),u=i.complexTensorInfos.real,c=i.complexTensorInfos.imag,l=[r,o],d=a.util.sizeFromShape(l),p=a.util.getTypedArrayFromDType("float32",d),h=a.util.getTypedArrayFromDType("float32",d);for(let g=0;g<r;g++){const e=(0,Ie.di)({inputs:{x:u},backend:n,attrs:{begin:[g,0],size:[1,o]}}),s=(0,Ie.di)({inputs:{x:c},backend:n,attrs:{begin:[g,0],size:[1,o]}}),r=(0,Ce.f)({inputs:{real:e,imag:s},backend:n}),{real:i,imag:l}=Kt(r,t,n),d=a.backend_util.mergeRealAndImagArrays(i,l);for(let t=0;t<o;t++){const e=a.backend_util.getComplexWithIndex(d,t);p[g*o+t]=e.real,h[g*o+t]=e.imag}n.disposeIntermediateTensorInfo(e),n.disposeIntermediateTensorInfo(s),n.disposeIntermediateTensorInfo(r)}const f=n.makeTensorInfo(l,"float32",p),m=n.makeTensorInfo(l,"float32",h),k=(0,Ce.f)({inputs:{real:f,imag:m},backend:n});return n.disposeIntermediateTensorInfo(f),n.disposeIntermediateTensorInfo(m),k}function Kt(e,t,n){const s=a.util.sizeFromShape(e.shape),r=n.data.get(e.dataId),o=n.data.get(r.complexTensorInfos.real.dataId).values,i=n.data.get(r.complexTensorInfos.imag.dataId).values;if(Yt(s)){const r=Qt(o,i,s,t,n),u=[e.shape[0],e.shape[1]];if(t){const e=n.makeTensorInfo(u,"float32",r.real),t=n.makeTensorInfo(u,"float32",r.imag),o=n.makeTensorInfo([],"float32",a.util.createScalarValue(s,"float32")),i=(0,d.D)({inputs:{x:o},backend:n}),c=Zt.kernelFunc({inputs:{a:e,b:o},backend:n}),l=Zt.kernelFunc({inputs:{a:t,b:i},backend:n}),p=n.data.get(c.dataId).values,h=n.data.get(l.dataId).values;return n.disposeIntermediateTensorInfo(e),n.disposeIntermediateTensorInfo(t),n.disposeIntermediateTensorInfo(o),n.disposeIntermediateTensorInfo(i),n.disposeIntermediateTensorInfo(c),n.disposeIntermediateTensorInfo(l),{real:p,imag:h}}return r}{const e=a.backend_util.mergeRealAndImagArrays(o,i),n=Xt(e,s,t);return a.backend_util.splitRealAndImagArrays(n)}}function Yt(e){return 0===(e&e-1)}function Qt(e,t,n,s,r){if(1===n)return{real:e,imag:t};const o=a.backend_util.mergeRealAndImagArrays(e,t),i=n/2,u=a.backend_util.complexWithEvenIndex(o),c=u.real,l=u.imag,d=[c.length],p=r.makeTensorInfo(d,"float32",c),h=r.makeTensorInfo(d,"float32",l),f=(0,Ce.f)({inputs:{real:p,imag:h},backend:r}),m=a.backend_util.complexWithOddIndex(o),k=m.real,g=m.imag,b=[k.length],I=r.makeTensorInfo(b,"float32",k),v=r.makeTensorInfo(b,"float32",g),y=(0,Ce.f)({inputs:{real:I,imag:v},backend:r}),N=Qt(c,l,i,s,r),x=N.real,T=N.imag,F=[x.length],M=r.makeTensorInfo(F,"float32",x),w=r.makeTensorInfo(F,"float32",T),A=(0,Ce.f)({inputs:{real:M,imag:w},backend:r}),D=Qt(k,g,i,s,r),C=D.real,_=D.imag,E=[C.length],z=r.makeTensorInfo(E,"float32",C),W=r.makeTensorInfo(E,"float32",_),H=(0,Ce.f)({inputs:{real:z,imag:W},backend:r}),R=a.backend_util.exponents(n,s),P=[R.real.length],B=r.makeTensorInfo(P,"float32",R.real),G=r.makeTensorInfo(P,"float32",R.imag),$=(0,Ce.f)({inputs:{real:B,imag:G},backend:r}),O=(0,xt.lw)({inputs:{a:$,b:H},backend:r}),L=(0,S.WQ)({inputs:{a:A,b:O},backend:r}),V=(0,jt.jb)({inputs:{a:A,b:O},backend:r}),q=(0,Re.x)({inputs:{input:L},backend:r}),Z=(0,Re.x)({inputs:{input:V},backend:r}),j=We({inputs:{input:L},backend:r}),U=We({inputs:{input:V},backend:r}),K=Pe({inputs:[q,Z],backend:r,attrs:{axis:0}}),Y=Pe({inputs:[j,U],backend:r,attrs:{axis:0}}),Q=r.data.get(K.dataId).values,X=r.data.get(Y.dataId).values;return r.disposeIntermediateTensorInfo(p),r.disposeIntermediateTensorInfo(h),r.disposeIntermediateTensorInfo(f),r.disposeIntermediateTensorInfo(I),r.disposeIntermediateTensorInfo(v),r.disposeIntermediateTensorInfo(y),r.disposeIntermediateTensorInfo(M),r.disposeIntermediateTensorInfo(w),r.disposeIntermediateTensorInfo(A),r.disposeIntermediateTensorInfo(z),r.disposeIntermediateTensorInfo(W),r.disposeIntermediateTensorInfo(H),r.disposeIntermediateTensorInfo(B),r.disposeIntermediateTensorInfo(G),r.disposeIntermediateTensorInfo($),r.disposeIntermediateTensorInfo(O),r.disposeIntermediateTensorInfo(L),r.disposeIntermediateTensorInfo(V),r.disposeIntermediateTensorInfo(q),r.disposeIntermediateTensorInfo(j),r.disposeIntermediateTensorInfo(Z),r.disposeIntermediateTensorInfo(U),r.disposeIntermediateTensorInfo(K),r.disposeIntermediateTensorInfo(Y),{real:Q,imag:X}}function Xt(e,t,n){const s=new Float32Array(2*t);for(let r=0;r<t;r++){let o=0,i=0;for(let s=0;s<t;s++){const u=a.backend_util.exponent(r*s,t,n),c=a.backend_util.getComplexWithIndex(e,s);o+=c.real*u.real-c.imag*u.imag,i+=c.real*u.imag+c.imag*u.real}n&&(o/=t,i/=t),a.backend_util.assignToTypedArray(s,o,i,r)}return s}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Jt(e){const{inputs:t,backend:n}=e,{input:s}=t,r=a.util.sizeFromShape(s.shape),o=s.shape[s.shape.length-1],i=r/o,u=T({inputs:{x:s},backend:n,attrs:{shape:[i,o]}}),c=Ut(u,!1,n),l=T({inputs:{x:c},backend:n,attrs:{shape:s.shape}});return n.disposeIntermediateTensorInfo(u),n.disposeIntermediateTensorInfo(c),l}const en={kernelName:a.FFT,backendName:"cpu",kernelFunc:Jt};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function tn(e){const{backend:t,attrs:n}=e,{shape:s,value:r,dtype:o}=n,i=o||a.util.inferDtype(r),u=a.util.getArrayFromDType(i,a.util.sizeFromShape(s));return an(u,r,i),t.makeTensorInfo(s,i,u)}const nn={kernelName:a.Fill,backendName:"cpu",kernelFunc:tn};function an(e,t,n){e.fill(t)}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const sn={kernelName:a.FlipLeftRight,backendName:"cpu",kernelFunc:({inputs:e,attrs:t,backend:n})=>{const{image:s}=e,r=n,o=a.util.getTypedArrayFromDType(s.dtype,a.util.sizeFromShape(s.shape)),[i,u,c,l]=s.shape,d=r.data.get(s.dataId).values;for(let a=0;a<i;a++){const e=a*c*u*l;for(let t=0;t<u;t++){const n=t*(c*l);for(let t=0;t<c;t++){const a=t*l;for(let s=0;s<l;s++){const r=Math.round(c-t-1),i=e+n+a+s;let u=d[i];if(r>=0&&r<c){const t=r*l,a=e+n+t+s;u=d[a]}o[i]=u}}}}const p=r.write(o,s.shape,s.dtype);return{dataId:p,shape:s.shape,dtype:s.dtype}}};var rn=n(85526);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const on=(0,f.Z)(((e,t)=>Math.floor(e/t))),un=(0,J.j)(a.FloorDiv,on,null,"int32"),cn={kernelName:a.FloorDiv,backendName:"cpu",kernelFunc:un};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function ln(e){const{inputs:t,backend:n,attrs:a}=e,{x:s,filter:r,bias:o,preluActivationWeights:i}=t,{strides:u,pad:c,dataFormat:l,dilations:d,dimRoundingMode:p,activation:h,leakyreluAlpha:f}=a;let m=Ge({inputs:{x:s,filter:r},backend:n,attrs:{strides:u,pad:c,dataFormat:l,dilations:d,dimRoundingMode:p}});if(o){const e=m;if("NCHW"===l&&1===o.shape.length&&1!==o.shape[0]){const e=T({inputs:{x:o},backend:n,attrs:{shape:[o.shape[0],1,1]}});m=(0,S.WQ)({inputs:{a:m,b:e},backend:n}),n.disposeIntermediateTensorInfo(e)}else m=(0,S.WQ)({inputs:{a:m,b:o},backend:n});n.disposeIntermediateTensorInfo(e)}if(h){const e=m;if("NCHW"===l&&"prelu"===h&&1===i.shape.length&&1!==i.shape[0]){const e=T({inputs:{x:i},backend:n,attrs:{shape:[i.shape[0],1,1]}});m=x(n,m,h,e,f),n.disposeIntermediateTensorInfo(e)}else m=x(n,m,h,i,f);n.disposeIntermediateTensorInfo(e)}return m}const dn={kernelName:a.FusedConv2D,backendName:"cpu",kernelFunc:ln};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function pn(e){const{inputs:t,backend:n,attrs:a}=e,{x:s,filter:r,bias:o,preluActivationWeights:i}=t,{strides:u,pad:c,dataFormat:l,dilations:d,dimRoundingMode:p,activation:h,leakyreluAlpha:f}=a;let m=pt({inputs:{x:s,filter:r},backend:n,attrs:{strides:u,pad:c,dataFormat:l,dilations:d,dimRoundingMode:p}});if(o){const e=m;m=(0,S.WQ)({inputs:{a:m,b:o},backend:n}),n.disposeIntermediateTensorInfo(e)}if(h){const e=m;m=x(n,m,h,i,f),n.disposeIntermediateTensorInfo(e)}return m}const hn={kernelName:a.FusedDepthwiseConv2D,backendName:"cpu",kernelFunc:pn};var fn=n(57100);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function mn(e){const{inputs:t,backend:n}=e,{params:s,indices:r}=t,o=a.util.sizeFromShape(s.shape),i=r.shape,u=i[i.length-1],[c,l,d,p]=a.backend_util.prepareAndValidate(s,r);if(0===l)return n.makeTensorInfo(c,s.dtype,[]);const h=n.data.get(r.dataId).values,f=n.bufferSync(s),m=(0,fn.q)(h,f,s.dtype,l,u,d,p,s.shape,o);return n.makeTensorInfo(c,s.dtype,m.values)}const kn={kernelName:a.GatherNd,backendName:"cpu",kernelFunc:mn};var gn=n(43842);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function bn(e){const{inputs:t,backend:n,attrs:r}=e,{x:o,indices:i}=t,{axis:u,batchDims:c}=r;(0,s.C)([o,i],"gatherV2");const l=a.util.parseAxisParam(u,o.shape)[0],d=n.data.get(i.dataId).values,p=o.shape[l];for(let s=0;s<d.length;++s){const e=d[s];a.util.assert(e<=p-1&&e>=0,(()=>`GatherV2: the index value ${e} is not in [0, ${p-1}]`))}let h=c;null==c&&(h=0);const f=a.util.sizeFromShape(i.shape),m=a.backend_util.segment_util.collectGatherOpShapeInfo(o,i,l,h),k=T({inputs:{x:o},backend:n,attrs:{shape:[m.batchSize,m.outerSize,m.dimSize,m.sliceSize]}}),g=T({inputs:{x:i},backend:n,attrs:{shape:[m.batchSize,f/m.batchSize]}}),b=[m.batchSize,m.outerSize,f/m.batchSize,m.sliceSize],I=n.bufferSync(g),v=n.bufferSync(k),y=(0,gn.G)(v,I,b);return n.disposeIntermediateTensorInfo(k),n.disposeIntermediateTensorInfo(g),n.makeTensorInfo(m.outputShape,y.dtype,y.values)}const In={kernelName:a.GatherV2,backendName:"cpu",kernelFunc:bn};var vn=n(14346),yn=n(86768);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Nn(e){const{inputs:t,backend:n}=e,{input:s}=t,r=a.util.sizeFromShape(s.shape),o=s.shape[s.shape.length-1],i=r/o,u=T({inputs:{x:s},backend:n,attrs:{shape:[i,o]}}),c=Ut(u,!0,n),l=T({inputs:{x:c},backend:n,attrs:{shape:s.shape}});return n.disposeIntermediateTensorInfo(u),n.disposeIntermediateTensorInfo(c),l}const xn={kernelName:a.IFFT,backendName:"cpu",kernelFunc:Nn},Sn=(0,u.v)(a.IsFinite,(e=>Number.isFinite(e)?1:0),"bool"),Tn={kernelName:a.IsFinite,backendName:"cpu",kernelFunc:Sn},Fn=(0,u.v)(a.IsInf,(e=>Math.abs(e)===1/0?1:0),"bool"),Mn={kernelName:a.IsInf,backendName:"cpu",kernelFunc:Fn},wn=(0,u.v)(a.IsNan,(e=>Number.isNaN(e)?1:0),"bool"),An={kernelName:a.IsNan,backendName:"cpu",kernelFunc:wn};var Dn=n(45207),Cn=n(3087),_n=n(64190);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function En(e){const{backend:t,attrs:n}=e,{start:a,stop:s,num:r}=n,o=(0,_n.G)(a,s,r);return t.makeTensorInfo([o.length],"float32",o)}const zn={kernelName:a.LinSpace,backendName:"cpu",kernelFunc:En};var Wn=n(1802);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const Hn=(0,u.v)(a.Log1p,(e=>Math.log1p(e))),Rn={kernelName:a.Log1p,backendName:"cpu",kernelFunc:Hn},Pn=(0,f.Z)(((e,t)=>e&&t)),Bn=(0,J.j)(a.LogicalAnd,Pn,null,"bool"),Gn={kernelName:a.LogicalAnd,backendName:"cpu",kernelFunc:Bn},$n=(0,u.v)(a.LogicalNot,(e=>e?0:1),"bool"),On={kernelName:a.LogicalNot,backendName:"cpu",kernelFunc:$n},Ln=(0,f.Z)(((e,t)=>e||t)),Vn=(0,J.j)(a.LogicalOr,Ln,null,"bool"),qn={kernelName:a.LogicalOr,backendName:"cpu",kernelFunc:Vn};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Zn(e){const{inputs:t,backend:n,attrs:r}=e,{x:o}=t,{depthRadius:i,bias:u,alpha:c,beta:l}=r;(0,s.C)(o,"LRN");const d=o.shape[3],p=d-1,h=n.data.get(o.dataId).values,f=a.util.sizeFromShape(o.shape),m=new Float32Array(f);function k(e){const t=e%d;let n=e-t+Math.max(0,t-i);const a=e-t+Math.min(t+i,p);let s=0;for(;n<=a;n++){const e=h[n];s+=e*e}return s}for(let a=0;a<f;a++){const e=k(a),t=h[a]*Math.pow(u+c*e,-l);m[a]=t}return n.makeTensorInfo(o.shape,o.dtype,m)}const jn={kernelName:a.LRN,backendName:"cpu",kernelFunc:Zn};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Un(e){const{inputs:t,backend:n,attrs:r}=e,{x:o,y:i,dy:u}=t,{depthRadius:c,bias:l,alpha:d,beta:p}=r;(0,s.C)(u,"LRNGrad");const h=a.util.sizeFromShape(u.shape),f=u.shape[3],m=n.data.get(u.dataId).values,k=n.data.get(o.dataId).values,g=n.data.get(i.dataId).values,b=new Float32Array(h),I=h;for(let a=0;a<I;a++){const e=a%f,t=a-e+Math.max(0,e-c),n=a-e+Math.min(f,e+c+1);let s=0;for(let a=t;a<n;a++)s+=Math.pow(k[a],2);s=d*s+l;for(let r=t;r<n;r++){let e=-2*d*p*k[r]*g[a]/s;a===r&&(e+=Math.pow(s,-p)),e*=m[a],b[r]+=e}}return n.makeTensorInfo(u.shape,o.dtype,b)}const Kn={kernelName:a.LRNGrad,backendName:"cpu",kernelFunc:Un};var Yn=n(3759),Qn=n(13396);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Xn(e){const{inputs:t,backend:n,attrs:r}=e,{x:o}=t,{reductionIndices:i,keepDims:u}=r,c=n;let l=o.shape;const d=l.length,p=a.util.parseAxisParam(i,l);let h=p;const f=a.backend_util.getAxesPermutation(h,d);let m=c.data.get(o.dataId).values;if(null!=f){const e=new Array(d);for(let t=0;t<e.length;t++)e[t]=l[f[t]];m=(0,Qn._)(m,l,o.dtype,f,e),h=a.backend_util.getInnerMostAxes(h.length,d),l=e}(0,s.C)(o,"max"),a.backend_util.assertAxesAreInnerMostDims("max",h,d);const[k,g]=a.backend_util.computeOutAndReduceShapes(l,h),b=a.util.sizeFromShape(g),I=(0,Yn.j)(m,b,k,o.dtype),v=c.write(I,k,o.dtype);let y=k;if(u){const e=a.backend_util.expandShapeToKeepDim(k,p);y=e}return{dataId:v,shape:y,dtype:o.dtype}}const Jn={kernelName:a.Max,backendName:"cpu",kernelFunc:Xn};var ea=n(66114);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function ta(e){const{inputs:t,backend:n,attrs:r}=e,{x:o}=t;(0,s.C)(o,"maxPool");const{filterSize:i,strides:u,pad:c,dimRoundingMode:l}=r,p=1;a.util.assert(a.backend_util.eitherStridesOrDilationsAreOne(u,p),(()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${u} and dilations '${p}'`));const h=a.backend_util.computePool2DInfo(o.shape,i,u,p,c,l);let f;if(1===h.filterWidth&&1===h.filterHeight&&a.util.arraysEqual(h.inShape,h.outShape))f=(0,d.D)({inputs:{x:o},backend:n});else{const e=n.data.get(o.dataId).values,t=a.util.computeStrides(o.shape),s=re(e,o.shape,o.dtype,t,h,"max");f=n.makeTensorInfo(h.outShape,o.dtype,s.values)}return f}const na={kernelName:a.MaxPool,backendName:"cpu",kernelFunc:ta};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function aa(e){const{inputs:t,backend:n,attrs:r}=e,{x:o}=t,{filterSize:i,strides:u,pad:c,dimRoundingMode:l,dataFormat:d}=r;(0,s.C)(o,"maxPool3d");const p=a.backend_util.computePool3DInfo(o.shape,i,u,1,c,l,d),h=n.data.get(o.dataId).values,f=ie(h,o.shape,o.dtype,a.util.computeStrides(o.shape),p,"max");return n.makeTensorInfo(f.shape,"float32",f.values)}const sa={kernelName:a.MaxPool3D,backendName:"cpu",kernelFunc:aa};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function ra(e){const{inputs:t,backend:n,attrs:r}=e,{dy:o,input:i}=t,{filterSize:u,strides:c,pad:l,dimRoundingMode:d}=r;(0,s.C)([o,i],"maxPool3DGrad");const p=a.backend_util.computePool3DInfo(i.shape,u,c,1,l,d),h=n.bufferSync(i),f=ue(h,p),m=p.strideDepth,k=p.strideHeight,g=p.strideWidth,b=p.dilationDepth,I=p.dilationHeight,v=p.dilationWidth,y=p.effectiveFilterDepth,N=p.effectiveFilterHeight,x=p.effectiveFilterWidth,S=y-1-p.padInfo.front,T=x-1-p.padInfo.left,F=N-1-p.padInfo.top,M=(0,a.buffer)(i.shape,"float32"),w=n.bufferSync(o);for(let a=0;a<p.batchSize;++a)for(let e=0;e<p.inChannels;++e)for(let t=0;t<p.inDepth;++t)for(let n=0;n<p.inHeight;++n)for(let s=0;s<p.inWidth;++s){const r=t-S,o=n-F,i=s-T;let u=0;for(let t=0;t<y;t+=b){const n=(r+t)/m;if(!(n<0||n>=p.outDepth||Math.floor(n)!==n))for(let s=0;s<N;s+=I){const r=(o+s)/k;if(!(r<0||r>=p.outHeight||Math.floor(r)!==r))for(let o=0;o<x;o+=v){const c=(i+o)/g;if(c<0||c>=p.outWidth||Math.floor(c)!==c)continue;const l=y*N*x-1-f.get(a,n,r,c,e),d=t*N*x+s*x+o,h=l===d?1:0;if(0===h)continue;const m=w.get(a,n,r,c,e);u+=m*h}}}M.set(u,a,t,n,s,e)}return n.makeTensorInfo(M.shape,M.dtype,M.values)}const oa={kernelName:a.MaxPool3DGrad,backendName:"cpu",kernelFunc:ra};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function ia(e){const{inputs:t,backend:n,attrs:r}=e,{dy:o,input:i,output:u}=t,c=i;(0,s.C)([i,u],"maxPoolGrad");const{filterSize:l,strides:d,pad:p,dimRoundingMode:h}=r,f=a.backend_util.computePool2DInfo(c.shape,l,d,1,p,h),m=n.data.get(c.dataId).values,k=(0,a.buffer)(f.outShape,c.dtype,oe(m,c.shape,c.dtype,f).values),g=f.strideHeight,b=f.strideWidth,I=f.dilationHeight,v=f.dilationWidth,y=f.effectiveFilterHeight,N=f.effectiveFilterWidth,x=N-1-f.padInfo.left,S=y-1-f.padInfo.top,T=(0,a.buffer)(c.shape,"float32"),F=n.data.get(o.dataId).values,M=(0,a.buffer)(o.shape,"float32",F);for(let a=0;a<f.batchSize;++a)for(let e=0;e<f.inChannels;++e)for(let t=0;t<f.inHeight;++t)for(let n=0;n<f.inWidth;++n){const s=t-S,r=n-x;let o=0;for(let t=0;t<y;t+=I){const n=(s+t)/g;if(!(n<0||n>=f.outHeight||Math.floor(n)!==n))for(let s=0;s<N;s+=v){const i=(r+s)/b;if(i<0||i>=f.outWidth||Math.floor(i)!==i)continue;const u=y*N-1-k.get(a,n,i,e),c=t*N+s,l=u===c?1:0;if(0===l)continue;const d=M.get(a,n,i,e);o+=d*l}}T.set(o,a,t,n,e)}return n.makeTensorInfo(T.shape,T.dtype,T.values)}const ua={kernelName:a.MaxPoolGrad,backendName:"cpu",kernelFunc:ia};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function ca(e,t,n,s,r){const o=a.util.computeStrides(t),i=re(e,t,n,o,r,"max"),u=oe(e,t,n,r,!0,s);return[i.values,u.values]}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const la={kernelName:a.MaxPoolWithArgmax,backendName:"cpu",kernelFunc:({inputs:e,attrs:t,backend:n})=>{const{x:r}=e,{filterSize:o,strides:i,pad:u,includeBatchInIndex:c}=t,l=n;(0,s.C)(r,"MaxPoolWithArgmax");const d=l.data.get(r.dataId).values,p=a.backend_util.computePool2DInfo(r.shape,o,i,[1,1],u),[h,f]=ca(d,r.shape,r.dtype,c,p),m=l.write(h,p.outShape,r.dtype),k=l.write(f,p.outShape,r.dtype);return[{dataId:m,shape:p.outShape,dtype:r.dtype},{dataId:k,shape:p.outShape,dtype:"int32"}]}};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function da(e){const{inputs:t,backend:n,attrs:s}=e,{x:r}=t,{axis:o,keepDims:i}=s,u=a.util.parseAxisParam(o,r.shape),c=a.backend_util.computeOutAndReduceShapes(r.shape,u),l=c[1],d=a.util.sizeFromShape(l),p=[],h=n.makeTensorInfo([],"float32",new Float32Array([d]));p.push(h);const f=(0,Me.w)({inputs:{x:r},backend:n,attrs:{dtype:"float32"}});p.push(f);const m=qt({inputs:{a:f,b:h},backend:n});p.push(m);const k=Tt({inputs:{x:m},backend:n,attrs:{axis:o,keepDims:i}});return p.forEach((e=>n.disposeIntermediateTensorInfo(e))),k}const pa={kernelName:a.Mean,backendName:"cpu",kernelFunc:da};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function ha(e){const{inputs:t,backend:n,attrs:r}=e,{x:o}=t,{axis:i,keepDims:u}=r;(0,s.C)(o,"min");const c=a.util.parseAxisParam(i,o.shape);let l=c;const d=a.backend_util.getAxesPermutation(l,o.shape.length);let p=o;null!=d&&(p=(0,P.m)({inputs:{x:o},backend:n,attrs:{perm:d}}),l=a.backend_util.getInnerMostAxes(l.length,o.shape.length)),a.backend_util.assertAxesAreInnerMostDims("min",l,p.shape.length);const[h,f]=a.backend_util.computeOutAndReduceShapes(p.shape,l),m=a.util.sizeFromShape(f),k=a.util.makeZerosTypedArray(a.util.sizeFromShape(h),p.dtype),g=n.data.get(p.dataId).values;for(let a=0;a<k.length;++a){const e=a*m;let t=g[e];for(let n=0;n<m;++n){const a=g[e+n];(Number.isNaN(a)||a<t)&&(t=a)}k[a]=t}null!=d&&n.disposeIntermediateTensorInfo(p);const b=n.makeTensorInfo(h,p.dtype,k);if(u){const e=a.backend_util.expandShapeToKeepDim(h,c),t=T({inputs:{x:b},backend:n,attrs:{shape:e}});return n.disposeIntermediateTensorInfo(b),t}return b}const fa={kernelName:a.Min,backendName:"cpu",kernelFunc:ha};var ma=n(48580);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function ka(e){const{inputs:t,backend:n,attrs:r}=e,{x:o}=t,{paddings:i,mode:u}=r;(0,s.C)(o,"mirrorPad");const c=i.map(((e,t)=>e[0]+o.shape[t]+e[1])),l=i.map((e=>e[0])),d=i.map(((e,t)=>e[0]+o.shape[t])),p="reflect"===u?0:1,h=n.data.get(o.dataId).values,f=o.shape.length,m=a.util.computeStrides(o.shape),k=a.util.sizeFromShape(c),g=c.length,b=a.util.computeStrides(c),I=a.util.getTypedArrayFromDType(o.dtype,k);for(let s=0;s<k;s++){let e=a.util.indexToLoc(s,g,b);for(let n=0;n<g;n++)e[n]<l[n]?e[n]=2*l[n]-e[n]-p:e[n]>=d[n]&&(e[n]=2*(d[n]-1)-e[n]+p);e=e.map(((e,t)=>e-l[t]));const t=a.util.locToIndex(e,f,m);I[s]=h[t]}const v=n.write(I,c,o.dtype);return{dataId:v,shape:c,dtype:o.dtype}}const ga={kernelName:a.MirrorPad,backendName:"cpu",kernelFunc:ka},ba=(0,f.Z)(((e,t)=>{const n=e%t;return e<0&&t<0||e>=0&&t>=0?n:(n+t)%t})),Ia=(0,J.j)(a.Mod,ba),va={kernelName:a.Mod,backendName:"cpu",kernelFunc:Ia};var ya=n(7391);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Na(e){const{inputs:t,backend:n,attrs:s}=e,{logits:r}=t,{dim:o}=s,i=r.shape.length;let u=o;if(-1===u&&(u=i-1),u!==i-1)throw Error(`Softmax along a non-last dimension is not yet supported. Logits was rank ${i} and dim was ${u}`);const c=a.util.parseAxisParam([u],r.shape),l=Xn({inputs:{x:r},backend:n,attrs:{reductionIndices:c,keepDims:!1}}),d=a.backend_util.expandShapeToKeepDim(l.shape,c),p=T({inputs:{x:l},backend:n,attrs:{shape:d}}),h=(0,jt.jb)({inputs:{a:r,b:p},backend:n}),f=(0,Gt.oN)({inputs:{x:h},backend:n}),m=Tt({inputs:{x:f},backend:n,attrs:{axis:c,keepDims:!1}}),k=T({inputs:{x:m},backend:n,attrs:{shape:d}}),g=qt({inputs:{a:f,b:k},backend:n});return n.disposeIntermediateTensorInfo(l),n.disposeIntermediateTensorInfo(p),n.disposeIntermediateTensorInfo(h),n.disposeIntermediateTensorInfo(f),n.disposeIntermediateTensorInfo(m),n.disposeIntermediateTensorInfo(k),g}const xa={kernelName:a.Softmax,backendName:"cpu",kernelFunc:Na};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Sa(e){const{inputs:t,backend:n,attrs:r}=e,{logits:o}=t,{numSamples:i,seed:u,normalized:c}=r;(0,s.C)(o,"multinomial");const l=c?o:Na({inputs:{logits:o},backend:n,attrs:{dim:-1}}),d=l.shape[0],p=l.shape[1],h=n.data.get(l.dataId).values,f=[d,i],m=a.util.makeZerosTypedArray(a.util.sizeFromShape(f),"int32");for(let a=0;a<d;++a){const e=a*p,t=new Float32Array(p-1);t[0]=h[e];for(let a=1;a<t.length;++a)t[a]=t[a-1]+h[e+a];const n=ya.alea(u.toString()),s=a*i;for(let a=0;a<i;++a){const e=n();m[s+a]=t.length;for(let n=0;n<t.length;n++)if(e<t[n]){m[s+a]=n;break}}}return c||n.disposeIntermediateTensorInfo(l),n.makeTensorInfo(f,"int32",m)}const Ta={kernelName:a.Multinomial,backendName:"cpu",kernelFunc:Sa};var Fa=n(37962);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const Ma=a.kernel_impls.nonMaxSuppressionV3Impl;function wa(e){const{inputs:t,backend:n,attrs:a}=e,{boxes:r,scores:o}=t,{maxOutputSize:i,iouThreshold:u,scoreThreshold:c}=a;(0,s.C)(r,"NonMaxSuppression");const l=n.data.get(r.dataId).values,d=n.data.get(o.dataId).values,{selectedIndices:p}=Ma(l,d,i,u,c);return n.makeTensorInfo([p.length],"int32",new Int32Array(p))}const Aa={kernelName:a.NonMaxSuppressionV3,backendName:"cpu",kernelFunc:wa},Da=a.kernel_impls.nonMaxSuppressionV4Impl;function Ca(e){const{inputs:t,backend:n,attrs:a}=e,{boxes:r,scores:o}=t,{maxOutputSize:i,iouThreshold:u,scoreThreshold:c,padToMaxOutputSize:l}=a;(0,s.C)(r,"NonMaxSuppressionPadded");const d=n.data.get(r.dataId).values,p=n.data.get(o.dataId).values,{selectedIndices:h,validOutputs:f}=Da(d,p,i,u,c,l);return[n.makeTensorInfo([h.length],"int32",new Int32Array(h)),n.makeTensorInfo([],"int32",new Int32Array([f]))]}const _a={kernelName:a.NonMaxSuppressionV4,backendName:"cpu",kernelFunc:Ca},Ea=a.kernel_impls.nonMaxSuppressionV5Impl;function za(e){const{inputs:t,backend:n,attrs:a}=e,{boxes:r,scores:o}=t,{maxOutputSize:i,iouThreshold:u,scoreThreshold:c,softNmsSigma:l}=a;(0,s.C)(r,"NonMaxSuppressionWithScore");const d=n.data.get(r.dataId).values,p=n.data.get(o.dataId).values,h=i,f=u,m=c,k=l,{selectedIndices:g,selectedScores:b}=Ea(d,p,h,f,m,k);return[n.makeTensorInfo([g.length],"int32",new Int32Array(g)),n.makeTensorInfo([b.length],"float32",new Float32Array(b))]}const Wa={kernelName:a.NonMaxSuppressionV5,backendName:"cpu",kernelFunc:za};var Ha=n(97113);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Ra(e){const{inputs:t,backend:n,attrs:r}=e,{indices:o}=t,{depth:i,onValue:u,offValue:c}=r;(0,s.C)(o,"oneHot");const l=a.util.sizeFromShape(o.shape),d=new Float32Array(l*i);d.fill(c);const p=n.data.get(o.dataId).values;for(let a=0;a<l;++a)p[a]>=0&&p[a]<i&&(d[a*i+p[a]]=u);return n.makeTensorInfo([...o.shape,i],"int32",d)}const Pa={kernelName:a.OneHot,backendName:"cpu",kernelFunc:Ra};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Ba(e){const{inputs:t,backend:n}=e,{x:a}=t;if("string"===a.dtype)throw new Error("zerosLike is not supported for string tensors");if("complex64"===a.dtype){const e=(0,Re.x)({inputs:{input:a},backend:n}),t=Ba({inputs:{x:e},backend:n}),s=We({inputs:{input:a},backend:n}),r=Ba({inputs:{x:s},backend:n}),o=(0,Ce.f)({inputs:{real:t,imag:r},backend:n});return n.disposeIntermediateTensorInfo(e),n.disposeIntermediateTensorInfo(t),n.disposeIntermediateTensorInfo(s),n.disposeIntermediateTensorInfo(r),o}return tn({backend:n,attrs:{shape:a.shape,value:0,dtype:a.dtype}})}const Ga={kernelName:a.ZerosLike,backendName:"cpu",kernelFunc:Ba};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function $a(e){const{inputs:t,backend:n}=e,{x:a}=t;if("string"===a.dtype)throw new Error("onesLike is not supported for string tensors");if("complex64"===a.dtype){const e=(0,Re.x)({inputs:{input:a},backend:n}),t=$a({inputs:{x:e},backend:n}),s=We({inputs:{input:a},backend:n}),r=Ba({inputs:{x:s},backend:n}),o=(0,Ce.f)({inputs:{real:t,imag:r},backend:n});return n.disposeIntermediateTensorInfo(e),n.disposeIntermediateTensorInfo(t),n.disposeIntermediateTensorInfo(s),n.disposeIntermediateTensorInfo(r),o}return tn({backend:n,attrs:{shape:a.shape,value:1,dtype:a.dtype}})}const Oa={kernelName:a.OnesLike,backendName:"cpu",kernelFunc:$a};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function La(e){const{inputs:t,backend:n,attrs:s}=e,{axis:r}=s;if(1===t.length)return $t({inputs:{input:t[0]},backend:n,attrs:{dim:r}});const o=t[0].shape,i=t[0].dtype;t.forEach((e=>{a.util.assertShapesMatch(o,e.shape,"All tensors passed to stack must have matching shapes"),a.util.assert(i===e.dtype,(()=>"All tensors passed to stack must have matching dtypes"))}));const u=[],c=t.map((e=>{const t=$t({inputs:{input:e},backend:n,attrs:{dim:r}});return u.push(t),t})),l=Pe({inputs:c,backend:n,attrs:{axis:r}});return u.forEach((e=>n.disposeIntermediateTensorInfo(e))),l}const Va={kernelName:a.Pack,backendName:"cpu",kernelFunc:La};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function qa(e){const{inputs:t,backend:n,attrs:r}=e,{x:o}=t,{paddings:i,constantValue:u}=r;(0,s.C)(o,"pad");const c=i.map(((e,t)=>e[0]+o.shape[t]+e[1])),l=i.map((e=>e[0])),d=n.data.get(o.dataId).values,p=a.util.sizeFromShape(o.shape),h=o.shape.length,f=a.util.computeStrides(o.shape),m=a.util.sizeFromShape(c),k=c.length,g=a.util.computeStrides(c),b=a.util.getTypedArrayFromDType(o.dtype,m);0!==u&&b.fill(u);for(let s=0;s<p;s++){const e=a.util.indexToLoc(s,h,f),t=e.map(((e,t)=>e+l[t])),n=a.util.locToIndex(t,k,g);b[n]=d[s]}const I=n.write(b,c,o.dtype);return{dataId:I,shape:c,dtype:o.dtype}}const Za={kernelName:a.PadV2,backendName:"cpu",kernelFunc:qa},ja=(0,f.Z)(((e,t)=>Math.pow(e,t))),Ua=(0,J.j)(a.Pow,ja),Ka={kernelName:a.Pow,backendName:"cpu",kernelFunc:Ua};var Ya=n(51675),Qa=n(52610);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Xa(e){const{backend:t,attrs:n}=e,{start:a,stop:s,dtype:r,step:o}=n,i=(0,Qa.q)(a,s,o,r);return t.makeTensorInfo([i.length],r,i)}const Ja={kernelName:a.Range,backendName:"cpu",kernelFunc:Xa},es=(0,u.v)(a.Reciprocal,(e=>1/e)),ts={kernelName:a.Reciprocal,backendName:"cpu",kernelFunc:es};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function ns(e){const{inputs:t,backend:n,attrs:r}=e,{images:o}=t,{alignCorners:i,halfPixelCenters:u,size:c}=r;(0,s.C)(o,"resizeBilinear");const l=a.util.computeStrides(o.shape),[d,p]=c,[h,f,m,k]=o.shape,g=n.data.get(o.dataId).values,b=new Float32Array(a.util.sizeFromShape([h,d,p,k])),I=[i&&d>1?f-1:f,i&&p>1?m-1:m],v=[i&&d>1?d-1:d,i&&p>1?p-1:p];let y=0;const N=I[0]/v[0],x=I[1]/v[1];for(let a=0;a<h;a++)for(let e=0;e<d;e++){let t;t=u?N*(e+.5)-.5:N*e;const n=Math.max(0,Math.floor(t)),s=t-n,r=Math.min(f-1,Math.ceil(t)),o=a*l[0]+n*l[1],i=a*l[0]+r*l[1];for(let e=0;e<p;e++){let t;t=u?x*(e+.5)-.5:x*e;const n=Math.max(0,Math.floor(t)),a=t-n,r=Math.min(m-1,Math.ceil(t)),c=o+n*l[2],d=i+n*l[2],p=o+r*l[2],h=i+r*l[2];for(let e=0;e<k;e++){const t=g[c+e],n=g[d+e],r=g[p+e],o=g[h+e],i=t+(r-t)*a,u=n+(o-n)*a,l=i+(u-i)*s;b[y++]=l}}}return n.makeTensorInfo([h,d,p,k],"float32",b)}const as={kernelName:a.ResizeBilinear,backendName:"cpu",kernelFunc:ns};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function ss(e){const{inputs:t,backend:n,attrs:r}=e,{images:o,dy:i}=t,{alignCorners:u}=r;(0,s.C)([i,o],"resizeBilinearGrad");const c=a.util.computeStrides(o.shape),[l,d,p,h]=o.shape,[,f,m]=i.shape,k=new Float32Array(l*d*p*h),g=[u&&f>1?d-1:d,u&&m>1?p-1:p],b=[u&&f>1?f-1:f,u&&m>1?m-1:m],I=g[0]/b[0],v=g[1]/b[1],y=n.data.get(i.dataId).values;let N=0;for(let a=0;a<l;a++){const e=a*c[0];for(let t=0;t<f;t++){const n=t*I,a=Math.floor(n),s=Math.min(Math.ceil(n),d-1),r=e+a*c[1],o=e+s*c[1],i=n-a,u=1-i;for(let e=0;e<m;e++){const t=e*v,n=Math.floor(t),a=Math.min(Math.ceil(t),p-1),s=t-n,l=1-s,d=r+n*c[2],f=r+a*c[2],m=o+n*c[2],g=o+a*c[2],b=u*l,I=u*s,x=i*l,S=i*s;for(let e=0;e<h;e++){const t=y[N++];k[d+e]+=t*b,k[f+e]+=t*I,k[m+e]+=t*x,k[g+e]+=t*S}}}}return n.makeTensorInfo([l,p,d,h],"float32",k)}const rs={kernelName:a.ResizeBilinearGrad,backendName:"cpu",kernelFunc:ss};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function os(e){const{inputs:t,backend:n,attrs:r}=e,{images:o}=t,{alignCorners:i,halfPixelCenters:u,size:c}=r;(0,s.C)(o,"resizeNearestNeighbor");const l=a.util.computeStrides(o.shape),[d,p]=c,[h,f,m,k]=o.shape,g=n.data.get(o.dataId).values,b=new Float32Array(h*d*p*k),I=[i&&d>1?f-1:f,i&&p>1?m-1:m],v=[i&&d>1?d-1:d,i&&p>1?p-1:p],y=I[0]/v[0],N=I[1]/v[1];let x=0;for(let a=0;a<h;a++){const e=a*l[0];for(let t=0;t<d;t++){const n=u?y*(t+.5):y*t;let a=Math.min(f-1,i?Math.round(n):Math.floor(n));u&&(a=Math.max(0,a));const s=e+a*l[1];for(let e=0;e<p;e++){const t=u?N*(e+.5):N*e;let n=Math.min(m-1,i?Math.round(t):Math.floor(t));u&&(n=Math.max(0,n));const a=s+n*l[2];for(let e=0;e<k;e++){const t=g[a+e];b[x++]=t}}}}return n.makeTensorInfo([h,d,p,k],o.dtype,b)}const is={kernelName:a.ResizeNearestNeighbor,backendName:"cpu",kernelFunc:os};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function us(e){const{inputs:t,backend:n,attrs:r}=e,{images:o,dy:i}=t,{alignCorners:u}=r;(0,s.C)([i,o],"resizeNearestNeighborGrad");const c=a.util.computeStrides(o.shape),l=a.util.computeStrides(i.shape),[d,p,h,f]=o.shape,[,m,k]=i.shape,g=new Float32Array(d*p*h*f),b=n.data.get(i.dataId).values,I=[u&&m>1?p-1:p,u&&k>1?h-1:h],v=[u&&m>1?m-1:m,u&&k>1?k-1:k],y=I[0]/v[0],N=I[1]/v[1],x=1/y,S=1/N,T=2*Math.ceil(x)+2,F=2*Math.ceil(S)+2;for(let a=0;a<d;a++){const e=a*c[0];for(let t=0;t<p;t++){const n=e+t*c[1],a=Math.floor(t*x),s=Math.floor(a-T/2);for(let r=0;r<h;r++){const a=n+r*c[2],o=Math.floor(r*S),i=Math.floor(o-F/2);for(let n=0;n<f;n++){let o=0;for(let a=0;a<T;a++){const c=a+s;if(c<0||c>=m)continue;const d=e+c*l[1],f=c*y,g=Math.min(p-1,u?Math.round(f):Math.floor(f));if(t===g)for(let e=0;e<F;e++){const t=e+i;if(t<0||t>=k)continue;const a=d+t*l[2],s=t*N,c=Math.min(h-1,u?Math.round(s):Math.floor(s));r===c&&(o+=b[a+n])}}g[a+n]=o}}}}return n.makeTensorInfo(o.shape,o.dtype,g)}const cs={kernelName:a.ResizeNearestNeighborGrad,backendName:"cpu",kernelFunc:us};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function ls(e){const{inputs:t,backend:n,attrs:r}=e,{x:o}=t,{dims:i}=r;(0,s.C)(o,"reverse");const u=o.shape.length,c=a.util.parseAxisParam(i,o.shape);if(0===u)return(0,d.D)({inputs:{x:o},backend:n});const l=new a.TensorBuffer(o.shape,o.dtype),p=n.bufferSync(o);for(let a=0;a<l.size;a++){const e=l.indexToLoc(a),t=e.slice();c.forEach((e=>t[e]=o.shape[e]-1-t[e])),l.set(p.get(...t),...e)}return n.makeTensorInfo(l.shape,l.dtype,l.values)}const ds={kernelName:a.Reverse,backendName:"cpu",kernelFunc:ls},ps={kernelName:a.RotateWithOffset,backendName:"cpu",kernelFunc:({inputs:e,attrs:t,backend:n})=>{const{image:s}=e,{radians:r,fillValue:o,center:i}=t,u=n,c=a.util.getTypedArrayFromDType(s.dtype,a.util.sizeFromShape(s.shape)),[l,d,p,h]=s.shape,[f,m]=a.backend_util.getImageCenter(i,d,p),k=255,g=Math.sin(r),b=Math.cos(r),I=u.data.get(s.dataId).values;for(let a=0;a<l;a++){const e=a*p*d*h;for(let t=0;t<d;t++){const n=t*(p*h);for(let a=0;a<p;a++){const s=a*h;for(let r=0;r<h;r++){const i=[l,t,a,r],u=i[2],v=i[1];let y=(u-f)*b-(v-m)*g,N=(u-f)*g+(v-m)*b;y=Math.round(y+f),N=Math.round(N+m);let x=o;if("number"!==typeof o&&(x=3===r?k:o[r]),y>=0&&y<p&&N>=0&&N<d){const t=N*(p*h),n=y*h,a=e+t+n+r;x=I[a]}const S=e+n+s+r;c[S]=x}}}}const v=u.write(c,s.shape,s.dtype);return{dataId:v,shape:s.shape,dtype:s.dtype}}},hs=(0,u.v)(a.Round,(e=>{const t=Math.floor(e);return e-t<.5?Math.floor(e):e-t>.5?Math.ceil(e):t%2===0?t:t+1})),fs={kernelName:a.Round,backendName:"cpu",kernelFunc:hs};var ms=n(4092),ks=n(19095);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function gs(e){const{inputs:t,backend:n,attrs:s}=e,{indices:r,updates:o}=t,{shape:i}=s,{sliceRank:u,numUpdates:c,sliceSize:l,strides:d,outputSize:p}=a.backend_util.calculateShapes(o,r,i),h=!0,f=n.bufferSync(r),m=n.bufferSync(o),k=(0,ks.b)(f,m,i,p,l,c,u,d,0,h);return n.makeTensorInfo(i,k.dtype,k.values)}const bs={kernelName:a.ScatterNd,backendName:"cpu",kernelFunc:gs};
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Is(e,t){let n=0,a=e.length,s=0;while(n<a)s=Math.floor((n+a)/2),e[s]<t?n=s+1:a=s;return a}function vs(e,t){let n=0,a=e.length,s=0;while(n<a)s=Math.floor((n+a)/2),e[s]<=t?n=s+1:a=s;return a}function ys(e,t,n,s,r,o){const i=a.util.getArrayFromDType("int32",n*r);for(let a=0;a<n;++a){const n=e.slice(a*s,(a+1)*s),u=a*r;for(let e=0;e<r;++e)i[u+e]="left"===o?Is(n,t[e+u]):vs(n,t[e+u])}return i}
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Ns(e){const{inputs:t,backend:n,attrs:a}=e,{sortedSequence:s,values:r}=t,{side:o}=a,i=n.data.get(s.dataId).values,u=n.data.get(r.dataId).values,c=ys(i,u,s.shape[0],s.shape[1],r.shape[1],o);return n.makeTensorInfo(r.shape,"int32",c)}const xs={kernelName:a.SearchSorted,backendName:"cpu",kernelFunc:Ns};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Ss(e){const{inputs:t,backend:n}=e,{condition:r,t:o,e:i}=t;(0,s.C)([r,o,i],"select");const u=r.shape.length,c=n.data.get(r.dataId).values,l=n.data.get(o.dataId).values,d=n.data.get(i.dataId).values,p=(0,a.upcastType)(o.dtype,i.dtype),h=a.util.makeZerosTypedArray(a.util.sizeFromShape(o.shape),p);let f=0;const m=0===u||u>1||1===o.shape.length?1:a.util.sizeFromShape(o.shape.slice(1));for(let a=0;a<c.length;a++)for(let e=0;e<m;e++)1===c[a]?h[f++]=l[a]:h[f++]=d[a];return n.makeTensorInfo(o.shape,p,h)}const Ts={kernelName:a.Select,backendName:"cpu",kernelFunc:Ss},Fs=a.backend_util.SELU_SCALEALPHA,Ms=a.backend_util.SELU_SCALE,ws=(0,u.v)(a.Selu,(e=>e>=0?Ms*e:Fs*(Math.exp(e)-1))),As={kernelName:a.Selu,backendName:"cpu",kernelFunc:ws},Ds=(0,u.v)(a.Sign,(e=>e<0?-1:e>0?1:0)),Cs={kernelName:a.Sign,backendName:"cpu",kernelFunc:Ds},_s=(0,u.v)(a.Sin,(e=>Math.sin(e))),Es={kernelName:a.Sin,backendName:"cpu",kernelFunc:_s},zs=(0,u.v)(a.Sinh,(e=>Math.sinh(e))),Ws={kernelName:a.Sinh,backendName:"cpu",kernelFunc:zs},Hs=1.1920928955078125e-7,Rs=Math.log(Hs)+2,Ps=(0,u.v)(a.Softplus,(e=>{const t=e>-Rs,n=e<Rs,a=Math.exp(e);let s;return s=n?a:t?e:Math.log(1+a),s})),Bs={kernelName:a.Softplus,backendName:"cpu",kernelFunc:Ps};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Gs(e){const{inputs:t,backend:n,attrs:r}=e,{x:o}=t,{blockShape:i,paddings:u}=r;(0,s.C)([o],"spaceToBatchND");const c=a.util.sizeFromShape(i),l=[[0,0]];l.push(...u);for(let a=1+i.length;a<o.shape.length;++a)l.push([0,0]);const d=Za.kernelFunc({inputs:{x:o},backend:n,attrs:{paddings:l,constantValue:0}}),p=a.backend_util.getReshaped(d.shape,i,c,!1),h=a.backend_util.getPermuted(p.length,i.length,!1),f=a.backend_util.getReshapedPermuted(d.shape,i,c,!1),m={x:d},k={shape:p},g=T({inputs:m,backend:n,attrs:k}),b={x:g},I={perm:h},v=(0,P.m)({inputs:b,backend:n,attrs:I}),y={x:v},N={shape:f},x=T({inputs:y,backend:n,attrs:N});return n.disposeIntermediateTensorInfo(d),n.disposeIntermediateTensorInfo(g),n.disposeIntermediateTensorInfo(v),x}const $s={kernelName:a.SpaceToBatchND,backendName:"cpu",kernelFunc:Gs};var Os=n(5744);
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Ls(e){const{inputs:t,backend:n}=e,{indices:a,values:s,denseShape:r,defaultValue:o}=t;if(1!==r.shape.length)throw new Error(`Dense shape must be a vector, saw:\n        ${r.shape}`);if(2!==a.shape.length)throw new Error(`Indices must be a matrix, saw:\n        ${a.shape}`);if(1!==s.shape.length)throw new Error(`Values must be a vector, saw:\n        ${s.shape}`);if(0!==o.shape.length)throw new Error(`Default value must be a scalar, saw:\n        ${o.shape}`);const i=n.data.get(a.dataId).values,u=n.data.get(s.dataId).values,c=n.data.get(r.dataId).values,l=n.data.get(o.dataId).values[0],[d,p,h,f,m]=(0,Os.y)(i,a.shape,a.dtype,u,s.dtype,c,l);return[n.makeTensorInfo(p,a.dtype,d),n.makeTensorInfo([p[0]],s.dtype,h),n.makeTensorInfo([f.length],"bool",new Uint8Array(f.map((e=>Number(e))))),n.makeTensorInfo([m.length],a.dtype,new Int32Array(m))]}const Vs={kernelName:a.SparseFillEmptyRows,backendName:"cpu",kernelFunc:Ls};var qs=n(95587);
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Zs(e){const{inputs:t,backend:n}=e,{inputIndices:a,inputShape:s,newShape:r}=t;if(2!==a.shape.length)throw new Error(`Input indices should be a matrix but received shape\n        ${a.shape}`);if(1!==s.shape.length)throw new Error(`Input shape should be a vector but received shape\n        ${s.shape}`);if(1!==r.shape.length)throw new Error(`Target shape should be a vector but received shape ${r.shape}`);const o=Array.from(n.data.get(s.dataId).values),i=n.data.get(a.dataId).values,u=Array.from(n.data.get(r.dataId).values),[c,l,d]=(0,qs.l)(i,a.shape,a.dtype,o,u);return[n.makeTensorInfo(l,a.dtype,c),n.makeTensorInfo([d.length],r.dtype,new Int32Array(d))]}const js={kernelName:a.SparseReshape,backendName:"cpu",kernelFunc:Zs};var Us=n(55589);
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Ks(e){const{inputs:t,backend:n}=e,{data:a,indices:s,segmentIds:r}=t;if(a.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(1!==s.shape.length)throw new Error(`Indices should be a vector but received shape\n          ${s.shape}`);if(1!==r.shape.length)throw new Error(`Segment ids should be a vector but received shape\n          ${r.shape}`);if(s.shape[0]!==r.shape[0])throw new Error("segmentIds and indices should have same size.");const o=n.data.get(a.dataId).values,i=n.data.get(s.dataId).values,u=n.data.get(r.dataId).values,[c,l]=(0,Us.z)(o,a.shape,a.dtype,i,u,!0);return n.makeTensorInfo(l,a.dtype,c)}const Ys={kernelName:a.SparseSegmentMean,backendName:"cpu",kernelFunc:Ks};
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Qs(e){const{inputs:t,backend:n}=e,{data:a,indices:s,segmentIds:r}=t;if(a.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(1!==s.shape.length)throw new Error(`Indices should be a vector but received shape\n         ${s.shape}`);if(1!==r.shape.length)throw new Error(`Segment ids should be a vector but received shape\n         ${r.shape}`);if(s.shape[0]!==r.shape[0])throw new Error("segmentIds and indices should have same size.");const o=n.data.get(a.dataId).values,i=n.data.get(s.dataId).values,u=n.data.get(r.dataId).values,[c,l]=(0,Us.z)(o,a.shape,a.dtype,i,u);return n.makeTensorInfo(l,a.dtype,c)}const Xs={kernelName:a.SparseSegmentSum,backendName:"cpu",kernelFunc:Qs};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Js(e){const{inputs:t,backend:n,attrs:s}=e,{sparseIndices:r,sparseValues:o,defaultValue:i}=t,{outputShape:u}=s,{sliceRank:c,numUpdates:l,sliceSize:d,strides:p,outputSize:h}=a.backend_util.calculateShapes(o,r,u),f=!1,m=n.bufferSync(r);let k;switch(o.dtype){case"bool":{const e=n.bufferSync(o),t=Boolean(n.data.get(i.dataId).values[0]);k=(0,ks.b)(m,e,u,h,d,l,c,p,t,f);break}case"float32":{const e=n.bufferSync(o),t=n.data.get(i.dataId).values[0];k=(0,ks.b)(m,e,u,h,d,l,c,p,t,f);break}case"int32":{const e=n.bufferSync(o),t=n.data.get(i.dataId).values[0];k=(0,ks.b)(m,e,u,h,d,l,c,p,t,f);break}case"string":{const e=n.bufferSync(o),t=a.util.decodeString(n.data.get(i.dataId).values[0]);k=(0,ks.b)(m,e,u,h,d,l,c,p,t,f);break}default:throw new Error(`Unsupported type ${o.dtype}`)}return n.makeTensorInfo(u,k.dtype,k.values)}const er={kernelName:a.SparseToDense,backendName:"cpu",kernelFunc:Js};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function tr(e){const{inputs:t,backend:n,attrs:s}=e,{x:r}=t,{numOrSizeSplits:o,axis:i}=s,u=a.util.parseAxisParam(i,r.shape)[0],c=a.backend_util.prepareSplitSize(r,o,u),l=new Array(r.shape.length).fill(0),d=r.shape.slice();return c.map((e=>{const t=[...d];t[u]=e;const a=(0,Ie.di)({inputs:{x:r},backend:n,attrs:{begin:l,size:t}});return l[u]+=e,a}))}const nr={kernelName:a.SplitV,backendName:"cpu",kernelFunc:tr};var ar=n(63252);
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const sr={kernelName:a.Square,backendName:"cpu",kernelFunc:({inputs:e,backend:t})=>{const{x:n}=e,a=t;(0,s.C)(n,"square");const r=a.data.get(n.dataId).values,o=new Float32Array(r.length);for(let s=0;s<r.length;++s){const e=r[s];o[s]=e*e}const i=a.write(o,n.shape,n.dtype);return{dataId:i,shape:n.shape,dtype:n.dtype}}},rr=(0,f.Z)(((e,t)=>{const n=e-t;return n*n})),or=(0,J.j)(a.SquaredDifference,rr),ir={kernelName:a.SquaredDifference,backendName:"cpu",kernelFunc:or},ur=(0,u.v)(a.Step,((e,t)=>{const n=t;return isNaN(e)?NaN:e>0?1:n.alpha})),cr={kernelName:a.Step,backendName:"cpu",kernelFunc:ur};var lr=n(67686);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function dr(e){const{inputs:t,backend:n,attrs:r}=e,{x:o}=t,{begin:i,end:u,strides:c,beginMask:l,endMask:d,ellipsisMask:p,newAxisMask:h,shrinkAxisMask:f}=r;(0,s.C)(o,"stridedSlice");const{finalShapeSparse:m,finalShape:k,isIdentity:g,sliceDim0:b,isSimpleSlice:I,begin:v,end:y,strides:N}=a.slice_util.sliceInfo(o.shape,i,u,c,l,d,p,h,f);let x;if(g)x=T({inputs:{x:o},backend:n,attrs:{shape:k}});else if(b||I){a.util.assert(o.shape.length>=1,(()=>`Input must have rank at least 1, got: ${o.shape.length}`));const e=a.slice_util.computeOutShape(v,y,N),t=(0,Ie.di)({inputs:{x:o},backend:n,attrs:{begin:v,size:e}});x=T({inputs:{x:t},backend:n,attrs:{shape:k}}),n.disposeIntermediateTensorInfo(t)}else{const e=n.bufferSync(o),t=(0,lr.e)(m,e,N,v);x=n.makeTensorInfo(k,t.dtype,t.values)}return x}const pr={kernelName:a.StridedSlice,backendName:"cpu",kernelFunc:dr};var hr=n(73514);
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function fr(e){const{inputs:t,backend:n,attrs:a}=e,{separator:s,nGramWidths:r,leftPad:o,rightPad:i,padWidth:u,preserveShortSequences:c}=a,{data:l,dataSplits:d}=t,p=n.data.get(l.dataId).values,h=n.data.get(d.dataId).values,[f,m]=(0,hr.G)(p,h,s,r,o,i,u,c);return[n.makeTensorInfo([f.length],"string",f),n.makeTensorInfo(d.shape,"int32",m)]}const mr={kernelName:a.StringNGrams,backendName:"cpu",kernelFunc:fr};var kr=n(32948);
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function gr(e){const{inputs:t,backend:n,attrs:a}=e,{skipEmpty:s}=a,{input:r,delimiter:o}=t;if("string"!==r.dtype)throw new Error("Input must be of datatype string");if(1!==r.shape.length)throw new Error(`Input must be a vector, got shape: ${r.shape}`);if(0!==o.shape.length)throw new Error(`Delimiter must be a scalar, got shape: ${o.shape}`);const i=n.data.get(r.dataId).values,u=n.data.get(o.dataId).values[0],[c,l,d]=(0,kr.S)(i,u,s),p=l.length;return[n.makeTensorInfo([p,2],"int32",c),n.makeTensorInfo([p],"string",l),n.makeTensorInfo([2],"int32",new Int32Array(d))]}const br={kernelName:a.StringSplit,backendName:"cpu",kernelFunc:gr};var Ir=n(45535);
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function vr(e){const{inputs:t,backend:n,attrs:a}=e,{numBuckets:s}=a,{input:r}=t;if("string"!==r.dtype)throw new Error("Input must be of datatype string");if(s<=0)throw new Error("Number of buckets must be at least 1");const o=n.data.get(r.dataId).values,i=(0,Ir.f)(o,s);return n.makeTensorInfo(r.shape,"int32",i)}const yr={kernelName:a.StringToHashBucketFast,backendName:"cpu",kernelFunc:vr},Nr=(0,u.v)(a.Tan,(e=>Math.tan(e))),xr={kernelName:a.Tan,backendName:"cpu",kernelFunc:Nr},Sr=(0,u.v)(a.Tanh,(e=>Math.tanh(e))),Tr={kernelName:a.Tanh,backendName:"cpu",kernelFunc:Sr};var Fr=n(21671);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Mr(e){const{inputs:t,backend:n,attrs:a}=e,{x:r}=t,{reps:o}=a;(0,s.C)(r,"tile");const i=(0,Fr.D)(n.bufferSync(r),o);return n.makeTensorInfo(i.shape,i.dtype,i.values)}const wr={kernelName:a.Tile,backendName:"cpu",kernelFunc:Mr};var Ar=n(53475);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Dr(e){const{inputs:t,backend:n,attrs:a}=e,{x:r}=t,{k:o,sorted:i}=a;(0,s.C)(r,"topk");const u=n.data.get(r.dataId).values,[c,l]=(0,Ar.x)(u,r.shape,r.dtype,o,i);return[n.makeTensorInfo(c.shape,c.dtype,c.values),n.makeTensorInfo(l.shape,l.dtype,l.values)]}const Cr={kernelName:a.TopK,backendName:"cpu",kernelFunc:Dr};
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function _r(e){const{inputs:t,attrs:n,backend:s}=e,{image:r,transforms:o}=t,{interpolation:i,fillMode:u,fillValue:c,outputShape:l}=n,[d,p,h,f]=r.shape,[m,k]=null!=l?l:[p,h],g=[d,m,k,f],b=a.util.computeStrides(r.shape),I=b[0],v=b[1],y=b[2],N=a.util.getTypedArrayFromDType(r.dtype,a.util.sizeFromShape(g));N.fill(c);const x=s.data.get(r.dataId).values,S=s.data.get(o.dataId).values;for(let a=0;a<d;++a){const e=1===o.shape[0]?S:S.subarray(8*a,8*a+8);for(let t=0;t<m;++t)for(let n=0;n<k;++n)for(let s=0;s<f;++s){let r;const o=e[6]*n+e[7]*t+1;if(0===o)continue;const l=(e[0]*n+e[1]*t+e[2])/o,d=(e[3]*n+e[4]*t+e[5])/o,f=zr(l,h,u),m=zr(d,p,u);switch(i){case"nearest":r=Gr(x,p,h,I,v,y,a,m,f,s,c);break;case"bilinear":r=$r(x,p,h,I,v,y,a,m,f,s,c);break;default:throw new Error(`Error in Transform: Expect 'nearest' or 'bilinear', but got ${i}`)}const k=a*I+t*v+n*y+s;N[k]=r}return s.makeTensorInfo(g,r.dtype,N)}const T=s.write(N,g,r.dtype);return{dataId:T,shape:r.shape,dtype:r.dtype}}const Er={kernelName:a.Transform,backendName:"cpu",kernelFunc:_r};function zr(e,t,n){switch(n){case"reflect":return Wr(e,t);case"wrap":return Hr(e,t);case"nearest":return Pr(e,t);case"constant":default:return Rr(e,t)}}function Wr(e,t){let n=e;if(n<0)if(t<=1)n=0;else{const e=2*t;n<e&&(n=e*Math.trunc(-n/e)+n),n=n<-t?n+e:-n-1}else if(n>t-1)if(t<=1)n=0;else{const e=2*t;n-=e*Math.trunc(n/e),n>=t&&(n=e-n-1)}return a.util.clamp(0,n,t-1)}function Hr(e,t){let n=e;if(n<0)if(t<=1)n=0;else{const e=t-1;n+=t*(Math.trunc(-n/e)+1)}else if(n>t-1)if(t<=1)n=0;else{const e=t-1;n-=t*Math.trunc(n/e)}return a.util.clamp(0,n,t-1)}function Rr(e,t){return e}function Pr(e,t){return a.util.clamp(0,e,t-1)}function Br(e,t,n,a,s,r,o,i,u,c,l){const d=o*a+i*s+u*r+c;return 0<=i&&i<t&&0<=u&&u<n?e[d]:l}function Gr(e,t,n,a,s,r,o,i,u,c,l){const d=Math.round(i),p=Math.round(u);return Br(e,t,n,a,s,r,o,d,p,c,l)}function $r(e,t,n,a,s,r,o,i,u,c,l){const d=Math.floor(i),p=Math.floor(u),h=d+1,f=p+1,m=(f-u)*Br(e,t,n,a,s,r,o,d,p,c,l)+(u-p)*Br(e,t,n,a,s,r,o,d,f,c,l),k=(f-u)*Br(e,t,n,a,s,r,o,h,p,c,l)+(u-p)*Br(e,t,n,a,s,r,o,h,f,c,l);return(h-i)*m+(i-d)*k}var Or=n(2750);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Lr(e){const{inputs:t,attrs:n,backend:a}=e,{axis:r}=n,{x:o}=t;(0,s.C)(o,"unique");const i=a.data.get(o.dataId).values,{outputValues:u,outputShape:c,indices:l}=(0,Or.w)(i,r,o.shape,o.dtype);return[a.makeTensorInfo(c,o.dtype,u),a.makeTensorInfo([l.length],"int32",l)]}const Vr={kernelName:a.Unique,backendName:"cpu",kernelFunc:Lr};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function qr(e){const{inputs:t,backend:n,attrs:a}=e,{value:s}=t;let{axis:r}=a;r<0&&(r+=s.shape.length);const o=s.shape.length,i=s.shape[r],u=new Array(o-1);let c=0;for(let h=0;h<o;h++)h!==r&&(u[c++]=s.shape[h]);const l=new Array(o).fill(0),d=s.shape.slice();d[r]=1;const p=new Array(i);for(let h=0;h<p.length;h++){l[r]=h;const e=(0,Ie.di)({inputs:{x:s},backend:n,attrs:{begin:l,size:d}});p[h]=T({inputs:{x:e},backend:n,attrs:{shape:u}}),n.disposeIntermediateTensorInfo(e)}return p}const Zr={kernelName:a.Unpack,backendName:"cpu",kernelFunc:qr};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function jr(e){const{inputs:t,backend:n,attrs:r}=e,{x:o,segmentIds:i}=t,{numSegments:u}=r;(0,s.C)(o,"unsortedSegmentSum");const c=o.shape.length,l=i.shape.length,d=[],p=[],h=c-l;let f=i;for(let a=0;a<h;++a){const e=$t({inputs:{input:f},backend:n,attrs:{dim:a+1}});f=e,p.push(e)}for(let s=0;s<u;++s){const e=a.util.createScalarValue(s,"int32"),t=n.makeTensorInfo([],"int32",e),r=(0,Ct.LC)({inputs:{a:t,b:f},backend:n}),i=(0,Me.w)({inputs:{x:r},backend:n,attrs:{dtype:"float32"}}),u=(0,xt.lw)({inputs:{a:i,b:o},backend:n}),c=Tt({inputs:{x:u},backend:n,attrs:{axis:0,keepDims:!1}});d.push(c),p.push(t),p.push(r),p.push(i),p.push(u),p.push(c)}const m=La({inputs:d,backend:n,attrs:{axis:0}});return p.forEach((e=>n.disposeIntermediateTensorInfo(e))),m}const Ur={kernelName:a.UnsortedSegmentSum,backendName:"cpu",kernelFunc:jr},Kr=[D,C.lO,E,W,S.UK,R,G,O,V,Z,U,Y,X,ne,se,le,pe,fe,ke,w,be,ye,Se,Fe,Me.M,we.uf,De,Ce.v,Ee,Be,$e,Le,qe,je,Ke,Qe,Je,tt,at,rt,it,ct,dt,ht,mt,gt,It,vt,yt,Nt,wt,l,Dt,Ct.RY,Bt,Gt.AC,Ot,Lt.Yp,en,nn,sn,rn.Hc,cn,dn,hn,kn,In,vn.xp,yn.VM,d.F,xn,He,Tn,Mn,An,h,Dn.YW,Cn.Q,zn,Wn.Fx,Rn,Gn,On,qn,jn,Kn,Jn,ea.l9,na,sa,oa,ua,la,pa,fa,ma.Nu,ga,va,Ta,xt.tJ,Fa.hd,Aa,_a,Wa,Ha.AL,Pa,Oa,Va,Za,Ka,g,Ya.S3,Ja,Re.r,Zt,ts,I,y,F,as,rs,is,cs,ds,ps,fs,ms.Lt,bs,xs,Ts,As,N.X3,Cs,Es,Ws,Ie.lv,xa,Bs,$s,Vs,js,Ys,Xs,er,nr,ar.Fu,sr,ir,cr,pr,mr,br,yr,jt.Zl,Ft,xr,Tr,wr,Cr,Er,P.W,Vr,Zr,Ur,Ga];for(const Yr of Kr)(0,a.registerKernel)(Yr)},46936:function(e,t,n){n.d(t,{D:function(){return s},F:function(){return r}});var a=n(64243);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function s(e){const{inputs:t,backend:n}=e,{x:a}=t;return n.incRef(a.dataId),{dataId:a.dataId,shape:a.shape,dtype:a.dtype}}const r={kernelName:a.Identity,backendName:"cpu",kernelFunc:s}},48580:function(e,t,n){n.d(t,{Nu:function(){return u},hE:function(){return o}});var a=n(64243),s=n(8195),r=n(98880);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const o=(0,s.Z)(((e,t)=>Math.min(e,t))),i=(0,r.j)(a.Minimum,o),u={kernelName:a.Minimum,backendName:"cpu",kernelFunc:i}},51675:function(e,t,n){n.d(t,{S3:function(){return u},_B:function(){return o}});var a=n(64243),s=n(97870),r=n(85655);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function o(e,t,n,s){const[r,o]=a.backend_util.computeOutAndReduceShapes(e,s),i=(0,a.upcastType)(t,"int32"),u=a.util.makeZerosTypedArray(a.util.sizeFromShape(r),i),c=a.util.sizeFromShape(o);for(let a=0;a<u.length;++a){const e=a*c;let t=1;for(let a=0;a<c;++a)t*=n[e+a];u[a]=t}return{outVals:u,outShape:r,outDtype:i}}function i(e){const{inputs:t,backend:n,attrs:i}=e,{x:u}=t,{axis:c,keepDims:l}=i;(0,s.C)(u,"prod");const d=u.shape.length,p=a.util.parseAxisParam(c,u.shape),h=a.backend_util.getAxesPermutation(p,d);let f=p,m=u;const k=[];null!=h&&(m=(0,r.m)({inputs:{x:u},backend:n,attrs:{perm:h}}),k.push(m),f=a.backend_util.getInnerMostAxes(f.length,d));const g=n.data.get(m.dataId).values,{outVals:b,outShape:I,outDtype:v}=o(m.shape,m.dtype,g,f);let y=I;return l&&(y=a.backend_util.expandShapeToKeepDim(I,p)),k.forEach((e=>n.disposeIntermediateTensorInfo(e))),n.makeTensorInfo(y,v,b)}const u={kernelName:a.Prod,backendName:"cpu",kernelFunc:i}},52610:function(e,t,n){n.d(t,{q:function(){return s}});var a=n(64243);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function s(e,t,n,s){const r=e===t,o=e<t&&n<0,i=t<e&&n>1;if(r||o||i)return a.util.makeZerosTypedArray(0,s);const u=Math.abs(Math.ceil((t-e)/n)),c=a.util.makeZerosTypedArray(u,s);t<e&&1===n&&(n=-1),c[0]=e;for(let a=1;a<c.length;a++)c[a]=c[a-1]+n;return c}},53475:function(e,t,n){n.d(t,{x:function(){return o}});var a=n(64243);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const s=(e,t)=>{const n=t.value-e.value;return 0===n?e.index-t.index:n};function r(e,t,n=0,o=e.length-1){while(o>n){if(o-n>600){const a=o-n+1,s=t-n+1,i=Math.log(a),u=.5*Math.exp(2*i/3),c=.5*Math.sqrt(i*u*(a-u)/a)*Math.sign(s-a/2),l=Math.max(n,Math.floor(t-s*u/a+c)),d=Math.min(o,Math.floor(t+(a-s)*u/a+c));r(e,t,l,d)}const i=e[t];let u=n,c=o;a.util.swap(e,n,t),s(e[o],i)>0&&a.util.swap(e,n,o);while(u<c){a.util.swap(e,u,c),u++,c--;while(s(e[u],i)<0)u+=1;while(s(e[c],i)>0)c-=1}0===s(e[n],i)?a.util.swap(e,n,c):(c+=1,a.util.swap(e,c,o)),c<=t&&(n=c+1),t<=c&&(o=c-1)}}function o(e,t,n,o,i){const u=t[t.length-1],[c,l]=[e.length/u,u],d=a.util.getTypedArrayFromDType(n,c*o),p=a.util.getTypedArrayFromDType("int32",c*o);for(let a=0;a<c;a++){const t=a*l,n=e.subarray(t,t+l);let u=new Array(n.length);n.forEach(((e,t)=>u[t]={value:e,index:t})),o<u.length&&(r(u,o),u=u.slice(0,o)),i&&u.sort(s);const c=a*o,h=d.subarray(c,c+o),f=p.subarray(c,c+o);for(let e=0;e<o;e++)h[e]=u[e].value,f[e]=u[e].index}const h=t.slice();return h[h.length-1]=o,[(0,a.buffer)(h,n,d),(0,a.buffer)(h,"int32",p)]}},55589:function(e,t,n){n.d(t,{z:function(){return s}});var a=n(64243);
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function s(e,t,n,s,r,o=!1,i=0){const u=s.length,c=[t[0],e.length/t[0]],l=c[1],d=u>0?r[u-1]+1:0,p=d;if(p<0)throw new Error(a.backend_util.getSparseSegmentReductionNegativeSegmentIdsErrorMessage());const h=t.slice();h[0]=p;const f=h.reduce(((e,t)=>e*t),1),m=a.util.getArrayFromDType(n,f);if(0===u)return p>0&&m.fill(i),[m,h];if(p<=0)throw new Error(a.backend_util.getSparseSegmentReductionNegativeSegmentIdsErrorMessage());let k=0,g=1,b=0,I=r[k];while(1){let t=0;if(g<u){if(t=r[g],I===t){++g;continue}if(I>=t)throw new Error(a.backend_util.getSparseSegmentReductionNonIncreasingSegmentIdsErrorMessage())}if(I<0||I>=p)throw new Error(a.backend_util.getSparseSegmentReductionSegmentIdOutOfRangeErrorMessage(I,p));I>b&&m.fill(i,b*l,I*l);for(let n=k;n<g;++n){const t=s[n];if(t<0||t>=c[0])throw new Error(a.backend_util.getSparseSegmentReductionIndicesOutOfRangeErrorMessage(n,s[n],c[0]));for(let n=0;n<l;n++)m[I*l+n]+=e[t*l+n]}if(o)for(let e=0;e<l;e++)m[I*l+e]/=g-k;if(k=g,++g,b=I+1,I=t,g>u)break}return b<p&&m.fill(i,b*l,p*l),[m,h]}},57100:function(e,t,n){n.d(t,{q:function(){return s}});var a=n(64243);
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function s(e,t,n,s,r,o,i,u,c){const l=(0,a.buffer)([s,o],n);for(let a=0;a<s;a++){const n=[];let s=0;for(let t=0;t<r;t++){const o=e[a*r+t];s+=o*i[t],n.push(o)}if(s<0||s>=c/o)throw new Error(`Invalid indices: ${n} does not index into ${u}`);for(let e=0;e<o;e++)l.values[a*o+e]=t.get(...t.indexToLoc(s*o+e))}return l}},62680:function(e,t,n){n.d(t,{dH:function(){return r},lO:function(){return i}});var a=n(64243),s=n(97870);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function r(e){const t=new Float32Array(e.length);for(let n=0;n<e.length;++n)t[n]=Math.abs(e[n]);return t}const o=e=>{const{x:t}=e.inputs,n=e.backend;(0,s.C)(t,"abs");let o=new Float32Array(a.util.sizeFromShape(t.shape));const i=n.data.get(t.dataId).values;return o=r(i),n.makeOutput(o,t.shape,t.dtype)},i={kernelName:a.Abs,backendName:"cpu",kernelFunc:o}},63252:function(e,t,n){n.d(t,{Fu:function(){return u},x6:function(){return o}});var a=n(64243),s=n(45705),r=n(21694);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const o=(0,s.o)((e=>Math.sqrt(e))),i=(0,r.v)(a.Sqrt,(e=>Math.sqrt(e))),u={kernelName:a.Sqrt,backendName:"cpu",kernelFunc:i}},64190:function(e,t,n){n.d(t,{G:function(){return s}});var a=n(64243);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function s(e,t,n){const s=(t-e)/(n-1),r=a.util.makeZerosTypedArray(n,"float32");r[0]=e;for(let a=1;a<r.length;a++)r[a]=r[a-1]+s;return r}},64904:function(e,t,n){n.d(t,{X3:function(){return u},ry:function(){return i},zv:function(){return o}});var a=n(64243),s=n(45705),r=n(21694);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const o=(0,s.o)((e=>1/(1+Math.exp(-e)))),i=(0,r.v)(a.Sigmoid,(e=>1/(1+Math.exp(-e)))),u={kernelName:a.Sigmoid,backendName:"cpu",kernelFunc:i}},65646:function(e,t,n){n.d(t,{BF:function(){return o},lw:function(){return u},tJ:function(){return c}});var a=n(64243),s=n(8195),r=n(98880);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const o=(0,s.Z)(((e,t)=>e*t)),i=(0,r.B)(((e,t,n,a)=>({real:e*n-t*a,imag:e*a+t*n}))),u=(0,r.j)(a.Multiply,o,i),c={kernelName:a.Multiply,backendName:"cpu",kernelFunc:u}},66114:function(e,t,n){n.d(t,{He:function(){return o},l9:function(){return u}});var a=n(64243),s=n(8195),r=n(98880);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const o=(0,s.Z)(((e,t)=>Math.max(e,t))),i=(0,r.j)(a.Maximum,o),u={kernelName:a.Maximum,backendName:"cpu",kernelFunc:i}},66423:function(e,t,n){n.d(t,{AC:function(){return u},oN:function(){return i},sG:function(){return o}});var a=n(64243),s=n(45705),r=n(21694);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const o=(0,s.o)((e=>Math.exp(e))),i=(0,r.F)(a.Exp,o,"float32"),u={kernelName:a.Exp,backendName:"cpu",kernelFunc:i}},67686:function(e,t,n){n.d(t,{e:function(){return s}});var a=n(64243);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function s(e,t,n,s){const r=(0,a.buffer)(e,t.dtype);for(let a=0;a<r.size;a++){const e=r.indexToLoc(a),o=new Array(e.length);for(let t=0;t<o.length;t++)o[t]=e[t]*n[t]+s[t];r.set(t.get(...o),...e)}return r}},73514:function(e,t,n){n.d(t,{G:function(){return r}});var a=n(64243);
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class s{constructor(e,t,n,s,r,o){this.separator=a.util.encodeString(e),this.nGramWidths=t,this.leftPad=a.util.encodeString(n),this.rightPad=a.util.encodeString(s),this.padWidth=r,this.preserveShort=o}getPadWidth(e){return Math.min(this.padWidth<0?e-1:this.padWidth,e-1)}getNumNGrams(e,t){const n=this.getPadWidth(t);return Math.max(0,e+2*n-t+1)}createNGrams(e,t,n,a,s,r){for(let o=0;o<s;++o){const i=this.getPadWidth(r),u=Math.max(0,i-o),c=Math.max(0,i-(s-(o+1))),l=r-(u+c),d=t+(u>0?0:o-i);let p=0;p+=u*this.leftPad.length;for(let t=0;t<l;++t)p+=e[d+t].length;p+=c*this.rightPad.length;const h=u+c+l-1;p+=h*this.separator.length,n[a+o]=new Uint8Array(p);const f=n[a+o];let m=0;const k=e=>e.forEach((e=>f[m++]=e));for(let e=0;e<u;++e)k(this.leftPad),k(this.separator);for(let t=0;t<l-1;++t)k(e[d+t]),k(this.separator);if(l>0){k(e[d+l-1]);for(let e=0;e<c;++e)k(this.separator),k(this.rightPad)}else{for(let e=0;e<c-1;++e)k(this.rightPad),k(this.separator);k(this.rightPad)}}}compute(e,t){const n=e.length,s=t.length;if(s>0){let e=t[0];if(0!==e)throw new Error(`First split value must be 0, got ${e}`);for(let a=1;a<s;++a){let s=t[a]>=e;if(s=s&&t[a]<=n,!s)throw new Error(`Invalid split value ${t[a]}, must be in [${e}, ${n}]`);e=t[a]}if(e!==n)throw new Error(`Last split value must be data size. Expected ${n}, got ${e}`)}const r=s-1,o=a.util.getArrayFromDType("int32",s);if(0===n||0===s){const e=new Array(n);for(let t=0;t<=r;++t)o[t]=0;return[e,o]}o[0]=0;for(let a=1;a<=r;++a){const e=t[a]-t[a-1];let n=0;this.nGramWidths.forEach((t=>{n+=this.getNumNGrams(e,t)})),this.preserveShort&&e>0&&0===n&&(n=1),o[a]=o[a-1]+n}const i=new Array(o[r]);for(let a=0;a<r;++a){const n=t[a];let s=o[a];if(this.nGramWidths.forEach((r=>{const o=t[a+1]-t[a],u=this.getNumNGrams(o,r);this.createNGrams(e,n,i,s,u,r),s+=u})),this.preserveShort&&s===o[a]){const r=t[a+1]-t[a];if(0===r)continue;const o=r+2*this.padWidth,u=1;this.createNGrams(e,n,i,s,u,o)}}return[i,o]}}function r(e,t,n,a,r,o,i,u){return new s(n,a,r,o,i,u).compute(e,t)}},85526:function(e,t,n){n.d(t,{Hc:function(){return u},vS:function(){return o}});var a=n(64243),s=n(45705),r=n(21694);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const o=(0,s.o)((e=>Math.floor(e))),i=(0,r.F)(a.Floor,o),u={kernelName:a.Floor,backendName:"cpu",kernelFunc:i}},85655:function(e,t,n){n.d(t,{W:function(){return i},m:function(){return o}});var a=n(64243),s=n(97870),r=n(13396);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function o(e){const{inputs:t,attrs:n,backend:a}=e,{x:o}=t,{perm:i}=n;(0,s.C)(o,"transpose");const u=o.shape.length,c=new Array(u);for(let s=0;s<c.length;s++)c[s]=o.shape[i[s]];const l=a.data.get(o.dataId).values,d=(0,r._)(l,o.shape,o.dtype,i,c),p=a.write(d,c,o.dtype);return{dataId:p,shape:c,dtype:o.dtype}}const i={kernelName:a.Transpose,backendName:"cpu",kernelFunc:o}},85806:function(e,t,n){n.d(t,{r:function(){return r},x:function(){return s}});var a=n(64243);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function s(e){const{inputs:t,backend:n}=e,{input:a}=t,s=n.data.get(a.dataId).complexTensorInfos.real,r=n.data.get(s.dataId).values;return n.makeTensorInfo(s.shape,s.dtype,r)}const r={kernelName:a.Real,backendName:"cpu",kernelFunc:s}},86768:function(e,t,n){n.d(t,{VM:function(){return u},lg:function(){return o}});var a=n(64243),s=n(8195),r=n(98880);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const o=(0,s.Z)(((e,t)=>e>=t?1:0)),i=(0,r.j)(a.GreaterEqual,o,null,"bool"),u={kernelName:a.GreaterEqual,backendName:"cpu",kernelFunc:i}},86995:function(e,t,n){n.d(t,{N:function(){return r},X:function(){return s}});var a=n(64243);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function s(e,t,n,s,r){const o=a.util.sizeFromShape(s),i=a.util.makeZerosTypedArray(r,n);for(let a=0;a<e.length;a++){const n=e[a];if(n<0)throw new Error("Input x must be non-negative!");n>=r||(i[n]+=o>0?t[a]:1)}return i}function r(e,t,n,s=!1){const r=e.shape[0],o=e.shape[1],i=(0,a.buffer)([r,n],t.dtype);for(let a=0;a<r;a++)for(let r=0;r<o;r++){const o=e.get(a,r);if(o<0)throw new Error("Input x must be non-negative!");o>=n||(s?i.set(1,a,o):t.size>0?i.set(i.get(a,o)+t.get(a,r),a,o):i.set(i.get(a,o)+1,a,o))}return i}},87906:function(e,t,n){n.d(t,{HS:function(){return r},di:function(){return o},lv:function(){return i}});var a=n(64243),s=n(97870);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function r(e,t,n,s,r){const o=a.slice_util.isSliceContinous(s,t,n),i=a.util.sizeFromShape(n),u=a.util.computeStrides(s);if(o){const n=a.slice_util.computeFlatOffset(t,u);return"string"===r?e.slice(n,n+i):e.subarray(n,n+i)}const c="string"===r?a.backend_util.fromUint8ToStringArray(e):e,l=(0,a.buffer)(s,r,c),d=(0,a.buffer)(n,r);for(let a=0;a<d.size;++a){const e=d.indexToLoc(a),n=e.map(((e,n)=>e+t[n]));d.set(l.get(...n),...e)}return"string"===r?a.backend_util.fromStringArrayToUint8(d.values):d.values}function o(e){const{inputs:t,backend:n,attrs:o}=e,{x:i}=t,{begin:u,size:c}=o;(0,s.C)(i,"slice");const[l,d]=a.slice_util.parseSliceParams(i,u,c);a.slice_util.assertParamsValid(i,l,d);const p=n.data.get(i.dataId).values,h=r(p,l,d,i.shape,i.dtype);return n.makeTensorInfo(d,i.dtype,h)}const i={kernelName:a.Slice,backendName:"cpu",kernelFunc:o}},89436:function(e,t,n){n.d(t,{f:function(){return s},v:function(){return r}});var a=n(64243);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function s(e){const{inputs:t,backend:n}=e,{real:a,imag:s}=t,r=n.data.get(a.dataId).values,o=n.data.get(s.dataId).values,i=n.makeTensorInfo(a.shape,"complex64"),u=n.data.get(i.dataId);return u.complexTensorInfos={real:n.makeTensorInfo(a.shape,"float32",r),imag:n.makeTensorInfo(s.shape,"float32",o)},i}const r={kernelName:a.Complex,backendName:"cpu",kernelFunc:s}},95315:function(e,t,n){n.d(t,{UK:function(){return c},WQ:function(){return u},mx:function(){return o}});var a=n(64243),s=n(8195),r=n(98880);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const o=(0,s.Z)(((e,t)=>e+t)),i=(0,r.B)(((e,t,n,a)=>({real:e+n,imag:t+a}))),u=(0,r.j)(a.Add,o,i),c={kernelName:a.Add,backendName:"cpu",kernelFunc:u}},95587:function(e,t,n){n.d(t,{l:function(){return s}});var a=n(64243);
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function s(e,t,n,s,r){const o=a.util.sizeFromShape(s),i=t[0],u=r.length,c=[];let l=1,d=-1;for(let g=0;g<u;++g){const e=r[g];if(-1===e){if(-1!==d)throw new Error(a.backend_util.getSparseReshapeMultipleNegativeOneOutputDimErrorMessage(d,g));d=g,c.push(1)}else{if(e<0)throw new Error(a.backend_util.getSparseReshapeNegativeOutputDimErrorMessage(g,e));l*=e,c.push(e)}}if(-1!==d){if(l<=0)throw new Error(a.backend_util.getSparseReshapeEmptyTensorZeroOutputDimErrorMessage());const e=Math.trunc(o/l);if(l*e!==o)throw new Error(a.backend_util.getSparseReshapeInputOutputMultipleErrorMessage(s,c));c[d]=e}const p=a.util.sizeFromShape(c);if(p!==o)throw new Error(a.backend_util.getSparseReshapeInputOutputMismatchErrorMessage(s,c));const h=s.length,f=[];if(h>0){f[h-1]=1;for(let e=h-2;e>=0;--e)f[e]=f[e+1]*s[e+1]}const m=[];if(u>0){m[u-1]=1;for(let e=u-2;e>=0;--e)m[e]=m[e+1]*c[e+1]}const k=a.util.getArrayFromDType(n,i*u);for(let a=0;a<i;++a){let t=0;for(let n=0;n<h;++n)t+=e[a*h+n]*f[n];for(let e=0;e<u;++e)k[a*u+e]=Math.trunc(t/m[e]),t%=m[e]}return[k,[i,u],c]}},97113:function(e,t,n){n.d(t,{AL:function(){return u},cl:function(){return o}});var a=n(64243),s=n(8195),r=n(98880);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const o=(0,s.Z)(((e,t)=>e!==t?1:0)),i=(0,r.j)(a.NotEqual,o,null,"bool"),u={kernelName:a.NotEqual,backendName:"cpu",kernelFunc:i}},97763:function(e,t,n){n.d(t,{h:function(){return s}});var a=n(64243);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function s(e,t,n,s){const r=a.util.getArrayFromDType(n,a.util.sizeFromShape(t));if(s&&"string"!==n){let t=0;e.forEach((e=>{const n=a.util.sizeFromShape(e.shape);r.set(e.vals,t),t+=n}))}else{let s=0;e.forEach((e=>{const o="string"===n?a.backend_util.fromUint8ToStringArray(e.vals):e.vals;let i=0;for(let n=0;n<e.shape[0];++n){const a=n*t[1]+s;for(let t=0;t<e.shape[1];++t)r[a+t]=o[i++]}s+=e.shape[1]}))}return r}},97870:function(e,t,n){n.d(t,{C:function(){return s}});var a=n(64243);
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function s(e,t){Array.isArray(e)||(e=[e]),e.forEach((e=>{null!=e&&a.util.assert("complex64"!==e.dtype,(()=>`${t} does not support complex64 tensors in the CPU backend.`))}))}},98880:function(e,t,n){n.d(t,{B:function(){return u},j:function(){return i}});var a=n(64243),s=n(97870),r=n(13713),o=n(89436);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function i(e,t,n,i){return null==n?({inputs:n,backend:r})=>{const{a:o,b:u}=n,c=r;(0,s.C)([o,u],e);const l=c.data.get(o.dataId).values,d=c.data.get(u.dataId).values,p="string"===o.dtype?a.backend_util.fromUint8ToStringArray(l):l,h="string"===o.dtype?a.backend_util.fromUint8ToStringArray(d):d,f=i||o.dtype,[m,k]=t(o.shape,u.shape,p,h,f);return c.makeTensorInfo(k,f,m)}:({inputs:e,backend:a})=>{const{a:s,b:u}=e,c=a;if("complex64"===s.dtype||"complex64"===u.dtype){const e=(0,r.w)({inputs:{x:s},backend:c,attrs:{dtype:"complex64"}}),t=c.data.get(e.dataId),a=t.complexTensorInfos.real,i=t.complexTensorInfos.imag,l=c.data.get(a.dataId).values,d=c.data.get(i.dataId).values,p=(0,r.w)({inputs:{x:u},backend:c,attrs:{dtype:"complex64"}}),h=c.data.get(p.dataId),f=h.complexTensorInfos.real,m=h.complexTensorInfos.imag,k=c.data.get(f.dataId).values,g=c.data.get(m.dataId).values,[b,I,v]=n(s.shape,u.shape,l,d,k,g),y=c.makeTensorInfo(v,"float32",b),N=c.makeTensorInfo(v,"float32",I),x=(0,o.f)({inputs:{real:y,imag:N},backend:c});return c.disposeIntermediateTensorInfo(e),c.disposeIntermediateTensorInfo(p),c.disposeIntermediateTensorInfo(y),c.disposeIntermediateTensorInfo(N),x}{const e=c.data.get(s.dataId).values,n=c.data.get(u.dataId).values,a=i||s.dtype,[r,o]=t(s.shape,u.shape,e,n,a);return c.makeTensorInfo(o,a,r)}}}function u(e){return(t,n,s,r,o,i)=>{const u=a.backend_util.assertAndGetBroadcastShape(t,n),c=a.util.sizeFromShape(u),l=u.length,d=a.util.computeStrides(u),p=a.util.getTypedArrayFromDType("float32",c),h=a.util.getTypedArrayFromDType("float32",c),f=a.backend_util.getBroadcastDims(t,u),m=a.backend_util.getBroadcastDims(n,u),k=a.backend_util.mergeRealAndImagArrays(s,r),g=a.backend_util.mergeRealAndImagArrays(o,i),b=t.length,I=a.util.computeStrides(t),v=n.length,y=a.util.computeStrides(n);if(f.length+m.length===0)for(let a=0;a<p.length;a++){const t=a%k.length,n=a%g.length,s=e(k[2*t],k[2*t+1],g[2*n],g[2*n+1]);p[a]=s.real,h[a]=s.imag}else for(let N=0;N<p.length;N++){const t=a.util.indexToLoc(N,l,d),n=t.slice(-b);f.forEach((e=>n[e]=0));const s=a.util.locToIndex(n,b,I),r=t.slice(-v);m.forEach((e=>r[e]=0));const o=a.util.locToIndex(r,v,y),i=e(k[2*s],k[2*s+1],g[2*o],g[2*o+1]);p[N]=i.real,h[N]=i.imag}return[p,h,u]}}},99292:function(e,t,n){n.d(t,{LC:function(){return i},RY:function(){return u},z3:function(){return o}});var a=n(64243),s=n(8195),r=n(98880);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const o=(0,s.Z)(((e,t)=>e===t?1:0)),i=(0,r.j)(a.Equal,o,null,"bool"),u={kernelName:a.Equal,backendName:"cpu",kernelFunc:i}}}]);
//# sourceMappingURL=chunk-vendors-2c906ab7.c585fc07.js.map