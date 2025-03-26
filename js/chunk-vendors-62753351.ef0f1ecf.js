"use strict";(self["webpackChunkstudent1"]=self["webpackChunkstudent1"]||[]).push([[341],{251:function(t,n,e){e.d(n,{$:function(){return h}});var r=e(57260),o=e(15441),s=e(28189),i=e(45119),a=e(62302);function u(t){let n;return n=0===t.rank||1===t.rank?(0,a.t)(t,[1,1,1,t.size]):2===t.rank?(0,a.t)(t,[1,1,t.shape[0],t.shape[1]]):3===t.rank?(0,a.t)(t,[1,t.shape[0],t.shape[1],t.shape[2]]):t,n}var c=e(70929);
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
function l(t,n,e,c,l,h){null==h&&(h=.001);const f=(0,s.YT)(t,"x","batchNorm"),d=(0,s.YT)(n,"mean","batchNorm"),p=(0,s.YT)(e,"variance","batchNorm");let m,g;null!=l&&(m=(0,s.YT)(l,"scale","batchNorm")),null!=c&&(g=(0,s.YT)(c,"offset","batchNorm")),i.vA(d.rank===p.rank,(()=>"Batch normalization gradient requires mean and variance to have equal ranks.")),i.vA(null==g||d.rank===g.rank,(()=>"Batch normalization gradient requires mean and offset to have equal ranks.")),i.vA(null==m||d.rank===m.rank,(()=>"Batch normalization gradient requires mean and scale to have equal ranks."));const v=u(f),y={x:v,scale:m,offset:g,mean:d,variance:p},w={varianceEpsilon:h},b=r.T2.runKernel(o.i5,y,w);return(0,a.t)(b,f.shape)}const h=(0,c.op)({batchNorm_:l})},448:function(t,n,e){e.d(n,{r:function(){return s}});var r=e(21722),o=e(45119);
/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
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
function s(t,n="float32",e){return n=n||"float32",o.SA(t),new r.yl(t,n,e)}},919:function(t,n,e){e.d(n,{e:function(){return h}});var r=e(30565),o=e(28189),s=e(89359),i=e(13020),a=e(70929),u=e(12151),c=e(55537);
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
function l(t,n){let e=(0,o.YT)(t,"a","div"),a=(0,o.YT)(n,"b","div");[e,a]=(0,r.makeTypesMatch)(e,a);const l=(0,s.y)(e,a),h=(0,c.P)(l),f=(0,i.L)(a,h);return(0,u._)(f,h,l)}const h=(0,a.op)({divNoNan_:l})},1902:function(t,n,e){e.d(n,{x:function(){return u}});var r=e(57260),o=e(15441),s=e(28189),i=e(70929);
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
function a(t){const n=(0,s.YT)(t,"input","real"),e={input:n};return r.T2.runKernel(o.LR,e)}const u=(0,i.op)({real_:a})},1986:function(t,n,e){e.d(n,{iS:function(){return L}});var r,o=e(64243),s=e(7391);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 *
 * =============================================================================
 */
function i(t,n){return a(t,n)}function a(t,n,e=new Map,r=new Set){if(null==t)return null;if("function"===typeof Blob&&t instanceof Blob)return t.slice();if(r.has(t))throw new Error("Circular references are not supported.");if(e.has(t))return e.get(t);const o=n(t);if(o.recurse&&null!==o.value)throw new Error("A deep map function may not return both a value and recurse=true.");if(o.recurse){if(h(t)){const o=Array.isArray(t)?[]:{};r.add(t);for(const s in t){const i=t[s],u=a(i,n,e,r);o[s]=u}return r.delete(t),t.__proto__&&(o.__proto__=t.__proto__),o}throw new Error(`Can't recurse into non-iterable type: ${t}`)}return e.set(t,o.value),o.value}function u(t,n=l){return c(t,n)}function c(t,n,e=new Set){const r=t[0];if(e.has(r))throw new Error("Circular references are not supported.");const o=n(t);if(o.recurse&&null!==o.value)throw new Error("A deep zip function may not return both a value and recurse=true.");if(o.recurse){if(h(r)){const o=Array.isArray(r)?[]:{};e.add(r);for(const s in r){const r=t.map((t=>t[s])),i=c(r,n,e);o[s]=i}return e.delete(r),o}throw new Error(`Can't recurse into non-iterable type: ${r}`)}return o.value}function l(t){return null===t?null:h(t[0])?{value:null,recurse:!0}:{value:t,recurse:!1}}function h(t){let n=!1;if(o.env().get("IS_BROWSER"))n=t instanceof TextDecoder;else{const{StringDecoder:r}=e(80551);n=t instanceof r}return null!=t&&!ArrayBuffer.isView(t)&&(Array.isArray(t)||"object"===typeof t&&!(t instanceof o.Tensor)&&!(t instanceof Promise)&&!n)}function f(t){return null==t||d(t)||Array.isArray(t)||"object"===typeof t&&t instanceof o.Tensor||o.util.isTypedArray(t)}function d(t){return null===t||"object"!==typeof t&&"function"!==typeof t}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 *
 * =============================================================================
 */
function p(t){return i(t,m)}function m(t){return t instanceof o.Tensor?{value:t.clone(),recurse:!1}:h(t)?{value:null,recurse:!0}:{value:t,recurse:!1}}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 *
 * =============================================================================
 */
class g{constructor(t){if(this.capacity=t,this.begin=0,this.end=0,null==t)throw new RangeError("Can't create a ring buffer of unknown capacity.");if(t<1)throw new RangeError("Can't create ring buffer of capacity < 1.");this.data=new Array(t),this.doubledCapacity=2*t}wrap(t){while(t<0)t+=this.doubledCapacity;return t%this.doubledCapacity}get(t){if(t<0)throw new RangeError("Can't get item at a negative index.");return this.data[t%this.capacity]}set(t,n){if(t<0)throw new RangeError("Can't set item at a negative index.");this.data[t%this.capacity]=n}length(){let t=this.end-this.begin;return t<0&&(t=this.doubledCapacity+t),t}isFull(){return this.length()===this.capacity}isEmpty(){return 0===this.length()}push(t){if(this.isFull())throw new RangeError("Ring buffer is full.");this.set(this.end,t),this.end=this.wrap(this.end+1)}pushAll(t){for(const n of t)this.push(n)}pop(){if(this.isEmpty())throw new RangeError("Ring buffer is empty.");this.end=this.wrap(this.end-1);const t=this.get(this.end);return this.set(this.end,void 0),t}unshift(t){if(this.isFull())throw new RangeError("Ring buffer is full.");this.begin=this.wrap(this.begin-1),this.set(this.begin,t)}shift(){if(this.isEmpty())throw new RangeError("Ring buffer is empty.");const t=this.get(this.begin);return this.set(this.begin,void 0),this.begin=this.wrap(this.begin+1),t}shuffleExcise(t){if(this.isEmpty())throw new RangeError("Ring buffer is empty.");const n=this.wrap(this.begin+t),e=this.get(n);return this.set(n,this.pop()),e}}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 *
 * =============================================================================
 */
class v extends g{constructor(){super(v.INITIAL_CAPACITY)}isFull(){return!1}push(t){super.isFull()&&this.expand(),super.push(t)}unshift(t){super.isFull()&&this.expand(),super.unshift(t)}expand(){const t=2*this.capacity,n=new Array(t),e=this.length();for(let r=0;r<e;r++)n[r]=this.get(this.wrap(this.begin+r));this.data=n,this.capacity=t,this.doubledCapacity=2*this.capacity,this.begin=0,this.end=e}}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 *
 * =============================================================================
 */
function y(t){return new T(t)}function w(t){return new x(t)}function b(t,n){return new R(t,n)}v.INITIAL_CAPACITY=32;class k{async toArray(){const t=[];let n=await this.next();while(!n.done)t.push(n.value),n=await this.next();return t}async toArrayForTest(){const t=this.prefetch(100),n=[];let e=await t.next();while(!e.done)n.push(e.value),e=await t.next();return n}async resolveFully(){let t=await this.next();while(!t.done)t=await this.next()}async resolveWhile(t){let n=await this.next(),e=t(n.value);while(!n.done&&e)n=await this.next(),e=t(n.value)}handleErrors(t){return new D(this,t)}filter(t){return new I(this,t)}map(t){return new N(this,t)}mapAsync(t){return new M(this,t)}serialMapAsync(t){return new M(this,t).serial()}flatmap(t){return new F(this,t)}async forEachAsync(t){return this.map(t).resolveFully()}async serialForEach(t){return this.serialMapAsync(t).resolveWhile((t=>!0===t))}rowMajorBatch(t,n=!0){return new $(this,t,n)}columnMajorBatch(t,n=!0,e=l){const r=this.rowMajorBatch(t,n);return r.map((t=>u(t,e)))}concatenate(t,n){return new R(y([this,t]),n)}take(t){return t<0||null==t?this:new S(this,t)}skip(t){return t<0||null==t?this:new E(this,t)}prefetch(t){return new B(this,t)}shuffle(t,n){return new Y(this,t,n)}serial(){return new A(this)}}class T extends k{constructor(t){super(),this.items=t,this.trav=0}summary(){return`Array of ${this.items.length} items`}async next(){if(this.trav>=this.items.length)return{value:null,done:!0};const t=this.items[this.trav];return this.trav++,{value:p(t),done:!1}}}class x extends k{constructor(t){super(),this.nextFn=t}summary(){return"Function call"}async next(){try{return this.nextFn()}catch(t){throw t.message=`Error thrown while iterating through a dataset: ${t.message}`,t}}}class A extends k{constructor(t){super(),this.upstream=t,this.lastRead=Promise.resolve({value:null,done:!1})}summary(){return`${this.upstream.summary()} -> Serial`}async next(){return this.lastRead=this.lastRead.then((()=>this.serialNext())),this.lastRead}async serialNext(){return this.upstream.next()}}class E extends k{constructor(t,n){super(),this.upstream=t,this.maxCount=n,this.count=0,this.lastRead=Promise.resolve({value:null,done:!1})}summary(){return`${this.upstream.summary()} -> Skip`}async next(){return this.lastRead=this.lastRead.then((()=>this.serialNext())),this.lastRead}async serialNext(){while(this.count++<this.maxCount){const t=await this.upstream.next();if(t.done)return t;o.dispose(t.value)}return this.upstream.next()}}class S extends k{constructor(t,n){super(),this.upstream=t,this.maxCount=n,this.count=0}summary(){return`${this.upstream.summary()} -> Take`}async next(){return this.count++>=this.maxCount?{value:null,done:!0}:this.upstream.next()}}class $ extends k{constructor(t,n,e=!0){super(),this.upstream=t,this.batchSize=n,this.enableSmallLastBatch=e,this.lastRead=Promise.resolve({value:null,done:!1})}summary(){return`${this.upstream.summary()} -> RowMajorBatch`}async next(){return this.lastRead=this.lastRead.then((()=>this.serialNext())),this.lastRead}async serialNext(){const t=[];while(t.length<this.batchSize){const n=await this.upstream.next();if(n.done)return this.enableSmallLastBatch&&t.length>0?{value:t,done:!1}:{value:null,done:!0};t.push(n.value)}return{value:t,done:!1}}}class I extends k{constructor(t,n){super(),this.upstream=t,this.predicate=n,this.lastRead=Promise.resolve({value:null,done:!1})}summary(){return`${this.upstream.summary()} -> Filter`}async next(){return this.lastRead=this.lastRead.then((()=>this.serialNext())),this.lastRead}async serialNext(){while(1){const t=await this.upstream.next();if(t.done||this.predicate(t.value))return t;o.dispose(t.value)}}}class N extends k{constructor(t,n){super(),this.upstream=t,this.transform=n}summary(){return`${this.upstream.summary()} -> Map`}async next(){const t=await this.upstream.next();if(t.done)return{value:null,done:!0};const n=o.tensor_util.getTensorsInContainer(t.value),e=this.transform(t.value),r=o.tensor_util.getTensorsInContainer(e);for(const s of n)o.tensor_util.isTensorInList(s,r)||s.dispose();return{value:e,done:!1}}}class D extends k{constructor(t,n){super(),this.upstream=t,this.handler=n,this.count=0,this.lastRead=Promise.resolve({value:null,done:!1})}summary(){return`${this.upstream.summary()} -> handleErrors`}async next(){return this.lastRead=this.lastRead.then((()=>this.serialNext())),this.lastRead}async serialNext(){while(1)try{return await this.upstream.next()}catch(t){if(!this.handler(t))return{value:null,done:!0}}}}class M extends k{constructor(t,n){super(),this.upstream=t,this.transform=n}summary(){return`${this.upstream.summary()} -> AsyncMap`}async next(){const t=await this.upstream.next();if(t.done)return{value:null,done:!0};const n=o.tensor_util.getTensorsInContainer(t.value),e=await this.transform(t.value),r=o.tensor_util.getTensorsInContainer(e);for(const s of n)o.tensor_util.isTensorInList(s,r)||s.dispose();return{value:e,done:!1}}}class _ extends k{constructor(){super(),this.outputQueue=new v,this.lastRead=Promise.resolve({value:null,done:!1})}async next(){return this.lastRead=this.lastRead.then((()=>this.serialNext())),this.lastRead}async serialNext(){while(0===this.outputQueue.length())if(!await this.pump())return{value:null,done:!0};return{value:this.outputQueue.shift(),done:!1}}}class F extends _{constructor(t,n){super(),this.upstream=t,this.transform=n}summary(){return`${this.upstream.summary()} -> Flatmap`}async pump(){const t=await this.upstream.next();if(t.done)return!1;const n=o.tensor_util.getTensorsInContainer(t.value),e=this.transform(t.value),r=o.tensor_util.getTensorsInContainer(e);this.outputQueue.pushAll(e);for(const s of n)o.tensor_util.isTensorInList(s,r)||s.dispose();return!0}}class R extends k{constructor(t,n){super(),this.baseErrorHandler=n,this.lastRead=null,this.iterator=null,this.moreIterators=t}summary(){const t="TODO: fill in upstream of chained summaries";return`${t} -> Chained`}async next(){return this.lastRead=this.readFromChain(this.lastRead),this.lastRead}async readFromChain(t){if(await t,null==this.iterator){const t=await this.moreIterators.next();if(t.done)return{value:null,done:!0};this.iterator=t.value,null!=this.baseErrorHandler&&(this.iterator=this.iterator.handleErrors(this.baseErrorHandler))}const n=await this.iterator.next();return n.done?(this.iterator=null,this.readFromChain(t)):n}}(function(t){t[t["FAIL"]=0]="FAIL",t[t["SHORTEST"]=1]="SHORTEST",t[t["LONGEST"]=2]="LONGEST"})(r||(r={}));class B extends k{constructor(t,n){super(),this.upstream=t,this.bufferSize=n,this.buffer=new g(n)}summary(){return`${this.upstream.summary()} -> Prefetch`}refill(){while(!this.buffer.isFull()){const t=this.upstream.next();this.buffer.push(t)}}next(){return this.refill(),this.buffer.shift()}}class Y extends B{constructor(t,n,e){super(t,n),this.upstream=t,this.windowSize=n,this.upstreamExhausted=!1,this.random=s.alea(e||o.util.now().toString()),this.lastRead=Promise.resolve({value:null,done:!1})}async next(){return this.lastRead=this.lastRead.then((()=>this.serialNext())),this.lastRead}randomInt(t){return Math.floor(this.random()*t)}chooseIndex(){return this.randomInt(this.buffer.length())}async serialNext(){this.upstreamExhausted||this.refill();while(!this.buffer.isEmpty()){const t=this.chooseIndex(),n=await this.buffer.shuffleExcise(t);if(!n.done)return this.refill(),n;this.upstreamExhausted=!0}return{value:null,done:!0}}}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 *
 * =============================================================================
 */
class P{constructor(){this.size=null}batch(t,n=!0){const e=this;let r;return o.util.assert(t>0,(()=>`batchSize needs to be positive, but it is\n      ${t}`)),r=this.size===1/0||null==this.size?this.size:n?Math.ceil(this.size/t):Math.floor(this.size/t),C((async()=>(await e.iterator()).columnMajorBatch(t,n,z)),r)}concatenate(t){const n=this;let e;return e=this.size===1/0||t.size===1/0?1/0:null!=this.size&&null!=t.size?this.size+t.size:null,C((async()=>(await n.iterator()).concatenate(await t.iterator())),e)}filter(t){const n=this;let e;return e=this.size===1/0?1/0:null,C((async()=>(await n.iterator()).filter((n=>o.tidy((()=>t(n)))))),e)}async forEachAsync(t){return(await this.iterator()).forEachAsync(t)}map(t){const n=this;return C((async()=>(await n.iterator()).map((n=>o.tidy((()=>t(n)))))),this.size)}mapAsync(t){const n=this;return C((async()=>(await n.iterator()).mapAsync(t)),this.size)}prefetch(t){if(null==t)throw new RangeError("`Dataset.prefetch()` requires bufferSize to be specified.");const n=this;return C((async()=>(await n.iterator()).prefetch(t)),this.size)}repeat(t){const n=this;let e;return e=null!=this.size&&t>0?this.size*t:0===t?0:null!=this.size&&(void 0===t||t<0)?1/0:null,C((async()=>{const e=w((async()=>({value:await n.iterator(),done:!1})));return b(e.take(t))}),e)}skip(t){const n=this;let e;return e=null!=this.size&&t>=0&&this.size>=t?this.size-t:null!=this.size&&(this.size<t||void 0===t||t<0)?0:null,C((async()=>(await n.iterator()).skip(t)),e)}shuffle(t,n,e=!0){if(null==t||t<0)throw null==this.size?new RangeError("`Dataset.shuffle()` requires bufferSize to be specified."):new RangeError(`\`Dataset.shuffle()\` requires bufferSize to be specified.  If your data fits in main memory (for regular JS objects), and/or GPU memory (for \`tf.Tensor\`s), consider setting bufferSize to the dataset size (${this.size} elements)`);const r=this,i=s.alea(n||o.util.now().toString());return C((async()=>{let n=i.int32();return e&&(n+=i.int32()),(await r.iterator()).shuffle(t,n.toString())}),this.size)}take(t){const n=this;let e;return e=null!=this.size&&this.size>t?t:null!=this.size&&this.size<=t?this.size:null,C((async()=>(await n.iterator()).take(t)),e)}async toArray(){if(this.size===1/0)throw new Error("Can not convert infinite data stream to array.");return(await this.iterator()).toArray()}async toArrayForTest(){if(this.size===1/0)throw new Error("Can not convert infinite data stream to array.");return(await this.iterator()).toArrayForTest()}}function C(t,n=null){return new class extends P{constructor(){super(...arguments),this.size=n}async iterator(){return t()}}}function z(t){if(null===t)return null;const n=t[0];if(f(n)){const n=O(t);return{value:n,recurse:!1}}return{value:null,recurse:!0}}function O(t){if(0===t.length)throw new Error("Can't make a batch of zero elements.");return t[0]instanceof o.Tensor?o.stack(t):o.tensor(t)}P.MAX_BUFFER_SIZE=1e4;
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 *
 * =============================================================================
 */
Symbol("out"),Symbol("field"),Symbol("quote"),Symbol("quoteafterquote"),Symbol("quoteinquote");
/** @license See the LICENSE file. */
const L="3.18.0"},3701:function(t,n,e){e.d(n,{k:function(){return l}});var r=e(28189),o=e(45119),s=e(28794),i=e(47195),a=e(70929),u=e(62302);function c(t,n,e,a,c="NWC",l=1,h){const f=(0,r.YT)(t,"x","conv1d"),d=(0,r.YT)(n,"filter","conv1d");let p=f,m=!1;2===f.rank&&(m=!0,p=(0,u.t)(f,[1,f.shape[0],f.shape[1]])),o.vA(3===p.rank,(()=>`Error in conv1d: input must be rank 3, but got rank ${p.rank}.`)),o.vA(3===d.rank,(()=>`Error in conv1d: filter must be rank 3, but got rank ${d.rank}.`)),i.s_("conv1d",a,h),o.vA(p.shape[2]===d.shape[1],(()=>`Error in conv1d: depth of input (${p.shape[2]}) must match input depth for filter ${d.shape[1]}.`)),o.vA(i.G0(e,l),(()=>`Error in conv1D: Either stride or dilation must be 1. Got stride ${e} and dilation '${l}'`)),o.vA("NWC"===c,(()=>`Error in conv1d: got dataFormat of ${c} but only NWC is currently supported.`));const g=(0,u.t)(d,[1,d.shape[0],d.shape[1],d.shape[2]]),v=(0,u.t)(p,[p.shape[0],1,p.shape[1],p.shape[2]]),y=[1,e],w=[1,l],b="NHWC",k=(0,s.X)(v,g,y,a,b,w,h);return m?(0,u.t)(k,[k.shape[2],k.shape[3]]):(0,u.t)(k,[k.shape[0],k.shape[2],k.shape[3]])}const l=(0,a.op)({conv1d_:c})},4888:function(t,n,e){e.d(n,{t:function(){return u}});var r=e(57260),o=e(15441),s=e(28189),i=e(70929);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
function a(t){const n=(0,s.YT)(t,"x","abs");if("complex64"===n.dtype){const t={x:n};return r.T2.runKernel(o.$z,t)}{const t={x:n};return r.T2.runKernel(o.lj,t)}}const u=(0,i.op)({abs_:a})},5932:function(t,n,e){e.d(n,{r:function(){return u}});var r=e(28189),o=e(45119),s=e(70929),i=e(62302);
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
function a(t,n){const e=(0,r.YT)(t,"x","squeeze");return(0,i.t)(e,(0,o.gx)(e.shape,n).newShape)}const u=(0,s.op)({squeeze_:a})},6300:function(t,n,e){e.d(n,{y:function(){return u}});var r=e(57260),o=e(15441),s=e(28189),i=e(70929);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
function a(t){const n=(0,s.YT)(t,"x","isNaN"),e={x:n};return r.T2.runKernel(o.iP,e)}const u=(0,i.op)({isNaN_:a})},7703:function(t,n,e){e.d(n,{m:function(){return p}});var r=e(57260),o=e(35287),s=e(15441),i=e(28189),a=e(45119),u=e(37148),c=e(35040),l=e(96522),h=e(70929),f=e(1902);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
function d(t,n,e){const h=(0,i.YT)(t,"x","transpose");if(null==n&&(n=h.shape.map(((t,n)=>n)).reverse()),a.vA(h.rank===n.length,(()=>`Error in transpose: rank of input ${h.rank} must match length of perm ${n}.`)),n.forEach((t=>{a.vA(t>=0&&t<h.rank,(()=>"All entries in 'perm' must be between 0 and "+(h.rank-1)+` but got ${n}`))})),h.rank<=1)return h.clone();const d={x:h},p={perm:n};return"complex64"===h.dtype?(0,o.DZ)((()=>{let t=(0,f.x)(h),n=(0,c.n)(h);return t=r.T2.runKernel(s.wx,{x:t},p),n=r.T2.runKernel(s.wx,{x:n},p),e&&(n=(0,l.H)(n)),(0,u.f)(t,n)})):r.T2.runKernel(s.wx,d,p)}const p=(0,h.op)({transpose_:d})},8631:function(t,n,e){e.d(n,{o:function(){return u}});var r=e(57260),o=e(15441),s=e(28189),i=e(70929);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
function a(t){const n=(0,s.YT)(t,"x","exp"),e={x:n};return r.T2.runKernel(o.ox,e)}const u=(0,i.op)({exp_:a})},8710:function(t,n,e){e.d(n,{U:function(){return c}});var r=e(57260),o=e(15441),s=e(28189),i=e(45119),a=e(70929);
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
function u(t,n=0){const e=(0,s.YT)(t,"x","expandDims","string_or_numeric");i.vA(n<=e.rank,(()=>"Axis must be <= rank of the tensor"));const a={input:e},u={dim:n};return r.T2.runKernel(o.yb,a,u)}const c=(0,a.op)({expandDims_:u})},8775:function(t,n,e){e.d(n,{z:function(){return g}});var r=e(45119),o=e(37148),s=e(25030),i=e(35040),a=e(70929),u=e(1902),c=e(62302),l=e(17986),h=e(66512),f=e(42855),d=e(55537),p=e(41361);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
function m(t,n){(0,r.vA)("float32"===t.dtype,(()=>`The dtype for rfft() must be real value but got ${t.dtype}`));let e=t.shape[t.shape.length-1];const a=t.size/e;let m;if(null!=n&&n<e){const r=t.shape.map((t=>0)),o=t.shape.map((t=>t));o[t.shape.length-1]=n,m=(0,l.d)(t,r,o),e=n}else if(null!=n&&n>e){const r=t.shape.map((t=>t));r[t.shape.length-1]=n-e,m=(0,s.x)([t,(0,f.U)(r)],t.shape.length-1),e=n}else m=t;const g=(0,d.P)(m),v=(0,c.t)((0,o.f)(m,g),[a,e]),y=(0,p.h)(v),w=Math.floor(e/2)+1,b=(0,u.x)(y),k=(0,i.n)(y),T=(0,h.l)(b,[w,e-w],b.shape.length-1),x=(0,h.l)(k,[w,e-w],k.shape.length-1),A=m.shape.slice();return A[m.shape.length-1]=w,(0,c.t)((0,o.f)(T[0],x[0]),A)}const g=(0,a.op)({rfft_:m})},9258:function(t,n,e){e.d(n,{l:function(){return c}});var r=e(57260),o=e(15441),s=e(30565),i=e(28189),a=e(70929);
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
function u(t,n){let e=(0,i.YT)(t,"a","mul"),a=(0,i.YT)(n,"b","mul");[e,a]=(0,s.makeTypesMatch)(e,a);const u={a:e,b:a};return r.T2.runKernel(o.xu,u)}const c=(0,a.op)({mul_:u})},9879:function(t,n,e){e.d(n,{z:function(){return c}});var r=e(57260),o=e(15441),s=e(28189),i=e(62198),a=e(70929);
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
function u(t,n){const e=(0,s.YT)(t,"a","logicalOr","bool"),a=(0,s.YT)(n,"b","logicalOr","bool");(0,i.assertAndGetBroadcastShape)(e.shape,a.shape);const u={a:e,b:a};return r.T2.runKernel(o.LX,u)}const c=(0,a.op)({logicalOr_:u})},10302:function(t,n,e){e.d(n,{L:function(){return u}});var r=e(57260),o=e(15441),s=e(28189),i=e(70929);
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function a(t,n=0,e=!1,i=!1){const a=(0,s.YT)(t,"x","cumprod"),u={x:a},c={axis:n,exclusive:e,reverse:i};return r.T2.runKernel(o.jj,u,c)}const u=(0,i.op)({cumprod_:a})},10676:function(t,n,e){e.d(n,{G:function(){return h}});var r=e(57260),o=e(15441),s=e(28189),i=e(45119),a=e(47195),u=e(70929),c=e(62302);
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
function l(t,n,e,u,l="NHWC",h=[1,1],f){const d=(0,s.YT)(t,"x","depthwiseConv2d","float32"),p=(0,s.YT)(n,"filter","depthwiseConv2d","float32");let m=d,g=!1;3===d.rank&&(g=!0,m=(0,c.t)(d,[1,d.shape[0],d.shape[1],d.shape[2]])),i.vA(4===m.rank,(()=>`Error in depthwiseConv2d: input must be rank 4, but got rank ${m.rank}.`)),i.vA(4===p.rank,(()=>`Error in depthwiseConv2d: filter must be rank 4, but got rank ${p.rank}.`)),i.vA(m.shape[3]===p.shape[2],(()=>`Error in depthwiseConv2d: number of input channels (${m.shape[3]}) must match the inChannels dimension in filter ${p.shape[2]}.`)),a.s_("depthwiseConv2d",u,f);const v={x:m,filter:p},y={strides:e,pad:u,dataFormat:l,dilations:h,dimRoundingMode:f},w=r.T2.runKernel(o.tG,v,y);return g?(0,c.t)(w,[w.shape[1],w.shape[2],w.shape[3]]):w}const h=(0,u.op)({depthwiseConv2d_:l})},10700:function(t,n,e){e.d(n,{P:function(){return u}});var r=e(57260),o=e(15441),s=e(28189),i=e(70929);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
function a(t,n=0){const e=(0,s.YT)(t,"x","step"),i={x:e},a={alpha:n};return r.T2.runKernel(o.pn,i,a)}const u=(0,i.op)({step_:a})},10776:function(t,n,e){e.d(n,{e:function(){return c}});var r=e(57260),o=e(15441),s=e(28189),i=e(45119),a=e(70929);
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
function u(t,n,e){const a=(0,s.YT)(t,"x","spaceToBatchND");i.vA(a.rank>=1+n.length,(()=>`input rank ${a.rank} should be > than [blockShape] ${n.length}`)),i.vA(e.length===n.length,(()=>`paddings.shape[0] ${e.length} must be equal to [blockShape] ${n.length}`)),i.vA(a.shape.reduce(((t,r,o)=>o>0&&o<=n.length?t&&(r+e[o-1][0]+e[o-1][1])%n[o-1]===0:t),!0),(()=>`input spatial dimensions ${a.shape.slice(1)} with paddings ${e.toString()} must be divisible by blockShapes ${n.toString()}`));const u={x:a},c={blockShape:n,paddings:e};return r.T2.runKernel(o.A8,u,c)}const c=(0,a.op)({spaceToBatchND_:u})},10897:function(t,n,e){e.d(n,{F:function(){return u}});var r=e(57260),o=e(15441),s=e(28189),i=e(70929);
/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
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
function a(t,n=0){const e=(0,s.YT)(t,"x","argMax"),i={x:e},a={axis:n};return r.T2.runKernel(o.Jp,i,a)}const u=(0,i.op)({argMax_:a})},11760:function(t,n,e){e.d(n,{M:function(){return u}});var r=e(57260),o=e(15441),s=e(28189),i=e(70929);
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
function a(t,n,e=1,i=0){if(n<2)throw new Error(`Error in oneHot: depth must be >=2, but it is ${n}`);const a=(0,s.YT)(t,"indices","oneHot","int32"),u={indices:a},c={depth:n,onValue:e,offValue:i};return r.T2.runKernel(o.ur,u,c)}const u=(0,i.op)({oneHot_:a})},12015:function(t,n,e){e.d(n,{K:function(){return u}});var r=e(57260),o=e(15441),s=e(28189),i=e(70929);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
function a(t){const n=(0,s.YT)(t,"x","log1p"),e={x:n};return r.T2.runKernel(o.Cg,e)}const u=(0,i.op)({log1p_:a})},12151:function(t,n,e){e.d(n,{_:function(){return l}});var r=e(57260),o=e(15441),s=e(28189),i=e(63567),a=e(62198),u=e(70929);
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
function c(t,n,e){const u=(0,s.YT)(n,"a","where"),c=(0,s.YT)(e,"b","where"),l=(0,s.YT)(t,"condition","where","bool"),h=(0,a.assertAndGetBroadcastShape)((0,a.assertAndGetBroadcastShape)(l.shape,u.shape),c.shape),f=(0,i.h)(l,h),d=(0,i.h)(u,h),p=(0,i.h)(c,h),m={condition:f,t:d,e:p};return r.T2.runKernel(o.l6,m)}const l=(0,u.op)({where_:c})},12307:function(t,n,e){e.d(n,{Q:function(){return u}});var r=e(57260),o=e(15441),s=e(28189),i=e(70929);
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
function a(t,n=null,e=!1){const i=(0,s.YT)(t,"x","all","bool"),a={x:i},u={axis:n,keepDims:e};return r.T2.runKernel(o.u8,a,u)}const u=(0,i.op)({all_:a})},12611:function(t,n,e){e.d(n,{i:function(){return u}});var r=e(57260),o=e(15441),s=e(28189),i=e(70929);
/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
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
function a(t,n=null,e=!1){const i=(0,s.YT)(t,"x","mean"),a={x:i},u={axis:n,keepDims:e};return r.T2.runKernel(o.g5,a,u)}const u=(0,i.op)({mean_:a})},12644:function(t,n,e){e.d(n,{B:function(){return h}});var r=e(57260),o=e(15441),s=e(30565),i=e(28189),a=e(62198),u=e(29809),c=e(70929);
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
function l(t,n){let e=(0,i.YT)(t,"a","minimum"),c=(0,i.YT)(n,"b","minimum");[e,c]=(0,s.makeTypesMatch)(e,c),"bool"===e.dtype&&(e=(0,u.w)(e,"int32"),c=(0,u.w)(c,"int32")),(0,a.assertAndGetBroadcastShape)(e.shape,c.shape);const l={a:e,b:c};return r.T2.runKernel(o.LG,l)}const h=(0,c.op)({minimum_:l})},12804:function(t,n,e){e.d(n,{H:function(){return u}});var r=e(57260),o=e(15441),s=e(28189),i=e(70929);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
function a(t){const n=(0,s.YT)(t,"x","acos"),e={x:n};return r.T2.runKernel(o.Vv,e)}const u=(0,i.op)({acos_:a})},13020:function(t,n,e){e.d(n,{L:function(){return l}});var r=e(57260),o=e(15441),s=e(30565),i=e(28189),a=e(62198),u=e(70929);
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
function c(t,n){let e=(0,i.YT)(t,"a","equal","string_or_numeric"),u=(0,i.YT)(n,"b","equal","string_or_numeric");[e,u]=(0,s.makeTypesMatch)(e,u),(0,a.assertAndGetBroadcastShape)(e.shape,u.shape);const c={a:e,b:u};return r.T2.runKernel(o.BR,c)}const l=(0,u.op)({equal_:c})},13108:function(t,n,e){e.d(n,{K:function(){return u}});var r=e(57260),o=e(15441),s=e(45119),i=e(70929);
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
function a(t){(0,s.vA)("complex64"===t.dtype,(()=>`The dtype for tf.spectral.ifft() must be complex64 but got ${t.dtype}.`));const n={input:t};return r.T2.runKernel(o.OA,n)}const u=(0,i.op)({ifft_:a})},13330:function(t,n,e){e.d(n,{V:function(){return m}});var r=e(28189),o=e(45119),s=e(37523),i=e(21078),a=e(8631),u=e(44010),c=e(41938),l=e(70929),h=e(62302),f=e(77126),d=e(83791);
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
function p(t,n=null,e=!1){const l=(0,r.YT)(t,"x","logSumExp"),p=(0,o.Y6)(n,l.shape),m=(0,c.T)(l,p,!0),g=(0,f.j)(l,m),v=(0,a.o)(g),y=(0,d.c)(v,p),w=(0,u.R)(y),b=(0,s.W)((0,h.t)(m,w.shape),w);if(e){const t=(0,i.SM)(b.shape,p);return(0,h.t)(b,t)}return b}const m=(0,l.op)({logSumExp_:p})},13337:function(t,n,e){e.d(n,{D:function(){return l}});var r=e(57260),o=e(15441),s=e(30565),i=e(28189),a=e(62198),u=e(70929);
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
function c(t,n){let e=(0,i.YT)(t,"a","greaterEqual","string_or_numeric"),u=(0,i.YT)(n,"b","greaterEqual","string_or_numeric");[e,u]=(0,s.makeTypesMatch)(e,u),(0,a.assertAndGetBroadcastShape)(e.shape,u.shape);const c={a:e,b:u};return r.T2.runKernel(o.lL,c)}const l=(0,u.op)({greaterEqual_:c})},13789:function(t,n,e){e.d(n,{n:function(){return c}});var r=e(57260),o=e(15441),s=e(28189),i=e(62198),a=e(70929);
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
function u(t,n){const e=(0,s.YT)(t,"a","logicalAnd","bool"),a=(0,s.YT)(n,"b","logicalAnd","bool");(0,i.assertAndGetBroadcastShape)(e.shape,a.shape);const u={a:e,b:a};return r.T2.runKernel(o.RU,u)}const c=(0,a.op)({logicalAnd_:u})},14349:function(t,n,e){e.d(n,{e:function(){return h}});var r=e(57260),o=e(15441),s=e(28189),i=e(45119),a=e(47195),u=e(70929),c=e(62302);
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
function l(t,n=[1,1,1],e,u,l,h="NDHWC"){const f=(0,s.YT)(t,"x","maxPool3d");let d=f,p=!1;4===f.rank&&(p=!0,d=(0,c.t)(f,[1,f.shape[0],f.shape[1],f.shape[2],f.shape[3]])),i.vA(5===d.rank,(()=>`Error in maxPool3d: x must be rank 5 but got rank ${d.rank}.`)),i.vA("NDHWC"===h,(()=>`Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of ${h}`)),(0,a.s_)("maxPool3d",u,l);const m={x:d},g={filterSize:n,strides:e,pad:u,dimRoundingMode:l,dataFormat:h},v=r.T2.runKernel(o.yS,m,g);return p?(0,c.t)(v,[v.shape[1],v.shape[2],v.shape[3],v.shape[4]]):v}const h=(0,u.op)({maxPool3d_:l})},15149:function(t,n,e){e.d(n,{GJ:function(){return s},uI:function(){return i}});
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
const r=1e-7,o=1e-4;class s{constructor(t,n){this.backend=t,this.dataMover=n,this.data=new WeakMap,this.dataIdsCount=0}get(t){return this.data.has(t)||this.dataMover.moveData(this.backend,t),this.data.get(t)}set(t,n){this.dataIdsCount++,this.data.set(t,n)}has(t){return this.data.has(t)}delete(t){return this.dataIdsCount--,this.data.delete(t)}numDataIds(){return this.dataIdsCount}}class i{refCount(t){return a("refCount")}incRef(t){return a("incRef")}timerAvailable(){return!0}time(t){return a("time")}read(t){return a("read")}readSync(t){return a("readSync")}readToGPU(t,n){return a("readToGPU")}numDataIds(){return a("numDataIds")}disposeData(t,n){return a("disposeData")}write(t,n,e){return a("write")}move(t,n,e,r,o){return a("move")}memory(){return a("memory")}floatPrecision(){return a("floatPrecision")}epsilon(){return 32===this.floatPrecision()?r:o}dispose(){return a("dispose")}}function a(t){throw new Error(`'${t}' not yet implemented or not found in the registry. This kernel may not be supported by the tfjs backend you have chosen`)}},15441:function(t,n,e){e.d(n,{$d:function(){return M},$j:function(){return Hn},$z:function(){return D},A1:function(){return B},A8:function(){return Bn},BK:function(){return ce},BL:function(){return Ut},BR:function(){return rt},Bl:function(){return Yn},Bo:function(){return zn},Bx:function(){return ct},C8:function(){return Cn},Cg:function(){return It},Cw:function(){return Et},D7:function(){return bn},Dd:function(){return Kn},Dr:function(){return le},Dv:function(){return Ln},E3:function(){return kt},Ek:function(){return a},El:function(){return ht},Ew:function(){return ee},FA:function(){return Qn},FC:function(){return yn},FS:function(){return c},Fi:function(){return _n},Ik:function(){return T},J3:function(){return Nn},Ji:function(){return $n},Jp:function(){return l},K2:function(){return Pn},KX:function(){return S},L6:function(){return On},LB:function(){return A},LD:function(){return Pt},LG:function(){return jt},LR:function(){return hn},LW:function(){return nn},LX:function(){return Mt},M3:function(){return $t},M6:function(){return Wn},MR:function(){return G},Mn:function(){return z},N4:function(){return x},Nc:function(){return un},O4:function(){return pt},OA:function(){return yt},OD:function(){return on},OM:function(){return i},OR:function(){return H},P:function(){return tt},PH:function(){return s},P_:function(){return wn},Pb:function(){return Vn},Q6:function(){return ln},QD:function(){return $},QK:function(){return f},Qg:function(){return J},R2:function(){return pn},RM:function(){return se},RU:function(){return Nt},RX:function(){return zt},SD:function(){return Qt},SQ:function(){return ut},T7:function(){return fe},TB:function(){return Jn},TL:function(){return Gt},TM:function(){return W},TO:function(){return Tn},To:function(){return Bt},Ty:function(){return p},Uc:function(){return jn},VA:function(){return Yt},VC:function(){return y},Vv:function(){return o},WT:function(){return Ht},Wu:function(){return Rn},X$:function(){return q},X0:function(){return xt},XQ:function(){return gn},Xh:function(){return mt},YA:function(){return qn},YV:function(){return Dn},Zg:function(){return lt},Zl:function(){return Jt},_s:function(){return et},aA:function(){return he},aw:function(){return ue},bC:function(){return sn},bP:function(){return Z},cH:function(){return Lt},cS:function(){return w},dF:function(){return Fn},dL:function(){return te},dX:function(){return re},dv:function(){return wt},e0:function(){return tn},ep:function(){return d},fQ:function(){return it},fU:function(){return dn},g5:function(){return Kt},gC:function(){return P},gI:function(){return bt},hV:function(){return kn},hg:function(){return vn},ho:function(){return v},hq:function(){return In},hu:function(){return fn},i5:function(){return ft},iG:function(){return Y},iP:function(){return Tt},iW:function(){return Un},iu:function(){return Xn},jA:function(){return k},jM:function(){return Rt},jO:function(){return mn},jf:function(){return R},jg:function(){return Gn},jj:function(){return O},jx:function(){return V},kd:function(){return cn},l0:function(){return Zt},l6:function(){return En},lL:function(){return gt},lN:function(){return Wt},lj:function(){return r},lx:function(){return g},lz:function(){return vt},mI:function(){return At},mM:function(){return rn},mn:function(){return St},mx:function(){return dt},nV:function(){return U},nY:function(){return L},nZ:function(){return Dt},oF:function(){return Zn},ox:function(){return ot},p2:function(){return _},pJ:function(){return xn},pP:function(){return oe},p_:function(){return h},pk:function(){return X},pn:function(){return ae},pr:function(){return N},py:function(){return an},rF:function(){return F},rG:function(){return at},rs:function(){return nt},sD:function(){return Q},t2:function(){return C},t3:function(){return Ct},tG:function(){return j},u$:function(){return Sn},u8:function(){return u},uW:function(){return An},ur:function(){return en},v:function(){return I},vI:function(){return Mn},vj:function(){return E},wN:function(){return K},ww:function(){return b},wx:function(){return ne},x7:function(){return qt},xJ:function(){return ie},xu:function(){return Vt},yP:function(){return Ft},yS:function(){return Ot},yb:function(){return st},yl:function(){return Xt},zP:function(){return m},zf:function(){return _t}});const r="Abs",o="Acos",s="Acosh",i="Add",a="AddN",u="All",c="Any",l="ArgMax",h="ArgMin",f="Asin",d="Asinh",p="Atan",m="Atanh",g="Atan2",v="AvgPool",y="AvgPoolGrad",w="AvgPool3D",b="AvgPool3DGrad",k="BatchMatMul",T="BatchToSpaceND",x="Bincount",A="BroadcastTo",E="BroadcastArgs",S="Cast",$="Ceil",I="ClipByValue",N="Complex",D="ComplexAbs",M="Concat",_="Conv2D",F="Conv2DBackpropFilter",R="Conv2DBackpropInput",B="Conv3D",Y="Conv3DBackpropFilterV2",P="Conv3DBackpropInputV2",C="Cos",z="Cosh",O="Cumprod",L="Cumsum",G="CropAndResize",K="DenseBincount",W="DepthToSpace",j="DepthwiseConv2dNative",q="DepthwiseConv2dNativeBackpropFilter",U="DepthwiseConv2dNativeBackpropInput",H="Diag",V="Dilation2D",Z="Dilation2DBackpropInput",X="Dilation2DBackpropFilter",Q="RealDiv",J="Einsum",tt="Elu",nt="EluGrad",et="Erf",rt="Equal",ot="Exp",st="ExpandDims",it="Expm1",at="FFT",ut="Fill",ct="FlipLeftRight",lt="Floor",ht="FloorDiv",ft="FusedBatchNorm",dt="GatherV2",pt="GatherNd",mt="Greater",gt="GreaterEqual",vt="Identity",yt="IFFT",wt="Imag",bt="IsFinite",kt="IsInf",Tt="IsNan",xt="LeakyRelu",At="Less",Et="LessEqual",St="LinSpace",$t="Log",It="Log1p",Nt="LogicalAnd",Dt="LogicalNot",Mt="LogicalOr",_t="LogSoftmax",Ft="LowerBound",Rt="LRN",Bt="LRNGrad",Yt="Max",Pt="Maximum",Ct="MaxPool",zt="MaxPoolGrad",Ot="MaxPool3D",Lt="MaxPool3DGrad",Gt="MaxPoolWithArgmax",Kt="Mean",Wt="Min",jt="Minimum",qt="MirrorPad",Ut="Mod",Ht="Multinomial",Vt="Multiply",Zt="Neg",Xt="NotEqual",Qt="NonMaxSuppressionV3",Jt="NonMaxSuppressionV4",tn="NonMaxSuppressionV5",nn="OnesLike",en="OneHot",rn="Pack",on="PadV2",sn="Pool",an="Pow",un="Prelu",cn="Prod",ln="Range",hn="Real",fn="Reciprocal",dn="Relu",pn="Reshape",mn="ResizeNearestNeighbor",gn="ResizeNearestNeighborGrad",vn="ResizeBilinear",yn="ResizeBilinearGrad",wn="Relu6",bn="Reverse",kn="Round",Tn="Rsqrt",xn="ScatterNd",An="SearchSorted",En="Select",Sn="Selu",$n="Slice",In="Sin",Nn="Sinh",Dn="Sign",Mn="Sigmoid",_n="Softplus",Fn="Sqrt",Rn="Sum",Bn="SpaceToBatchND",Yn="SplitV",Pn="Softmax",Cn="SparseFillEmptyRows",zn="SparseReshape",On="SparseSegmentMean",Ln="SparseSegmentSum",Gn="SparseToDense",Kn="SquaredDifference",Wn="Square",jn="StridedSlice",qn="StringNGrams",Un="StringSplit",Hn="StringToHashBucketFast",Vn="Sub",Zn="Tan",Xn="Tanh",Qn="Tile",Jn="TopK",te="Transform",ne="Transpose",ee="Unique",re="Unpack",oe="UnsortedSegmentSum",se="UpperBound",ie="ZerosLike",ae="Step",ue="FromPixels",ce="RotateWithOffset",le="_FusedMatMul",he="FusedConv2D",fe="FusedDepthwiseConv2D"},15606:function(t,n,e){e.d(n,{R:function(){return u}});var r=e(57260),o=e(15441),s=e(28189),i=e(70929);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
function a(t){const n=(0,s.YT)(t,"x","floor","float32"),e={x:n};return r.T2.runKernel(o.Zg,e)}const u=(0,i.op)({floor_:a})},16054:function(t,n,e){e.d(n,{Q:function(){return c}});var r=e(57260),o=e(15441),s=e(28189),i=e(45119),a=e(70929);
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
function u(t){i.vA(Array.isArray(t),(()=>"The argument passed to tf.addN() must be a list of tensors")),i.vA(t.length>=1,(()=>`Must pass at least one tensor to tf.addN(), but got ${t.length}`));const n=t.map(((t,n)=>(0,s.YT)(t,`tensors${n}`,"addN"))),e=n[0];n.forEach((t=>{if(t.dtype!==e.dtype)throw new Error("All tensors passed to tf.addN() must have the same dtype")})),n.forEach((t=>{if(!i.r1(t.shape,e.shape))throw new Error("All tensors passed to tf.addN() must have the same shape")}));const a=n;return r.T2.runKernel(o.Ek,a)}const c=(0,a.op)({addN_:u})},16319:function(t,n,e){e.d(n,{r:function(){return o}});var r=e(79120);
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
 */function o(t,n){return(0,r.s)(t,n,"right")}},17367:function(t,n,e){e.d(n,{R:function(){return u}});var r=e(57260),o=e(15441),s=e(28189),i=e(70929);
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
function a(t,n){const e=(0,s.YT)(t,"s0","broadcastArgs","int32"),i=(0,s.YT)(n,"s1","broadcastArgs","int32");if(1!==e.rank)throw new Error(`broadcastArgs(): first input must be a vector (rank=1). Has rank ${e.rank}`);if(1!==i.rank)throw new Error(`broadcastArgs(): second input must be a vector (rank=1). Has rank ${i.rank}`);const a={s0:e,s1:i};return r.T2.runKernel(o.vj,a)}const u=(0,i.op)({broadcastArgs_:a})},17820:function(t,n,e){e.d(n,{Z:function(){return u}});var r=e(57260),o=e(15441),s=e(28189),i=e(70929);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
function a(t){const n=(0,s.YT)(t,"x","rsqrt","float32"),e={x:n};return r.T2.runKernel(o.TO,e)}const u=(0,i.op)({rsqrt_:a})},17872:function(t,n,e){e.d(n,{d:function(){return m}});var r=e(28189),o=e(45119),s=e(53909),i=e(69772),a=e(47195),u=e(86999),c=e(70929),l=e(62302),h=e(10776);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
function f(t,n,e,c,f,m,g){null==f&&(f=[1,1]),null==m&&(m=1),0===c&&(c="valid");const v=(0,r.YT)(t,"x","maxPool");let y=v,w=!1;3===v.rank&&(w=!0,y=(0,l.t)(v,[1,v.shape[0],v.shape[1],v.shape[2]])),o.vA(a.G0(m,f),(()=>`Error in pool: Either strides or dilations must be 1. Got strides ${m} and dilations '${f}'`));const b=a.E6(y.shape,n,m,f,c),k=[b.dilationHeight,b.dilationWidth];let T;T="same"===c?p([b.filterHeight,b.filterWidth],k):[[0,0],[0,0]];const x=1===k[0]&&1===k[1],[A,E]=d([b.inHeight,b.inWidth],k,T),S=x?c:"valid",$=x?y:(0,h.e)(y,k,A),I="avg"===e?()=>(0,s.$)($,n,m,S,g):()=>(0,u.j)($,n,m,S,g),N=I(),D=x?N:(0,i.G)(N,k,E);return w?(0,l.t)(D,[D.shape[1],D.shape[2],D.shape[3]]):D}function d(t,n,e){const r=e.map((t=>t[0])),o=e.map((t=>t[1])),s=t.concat(r,o),i=n.map(((t,n)=>(t-s[n]%t)%t)),a=o.map(((t,n)=>t+i[n])),u=n.map(((t,n)=>[r[n],a[n]])),c=n.map(((t,n)=>[0,i[n]]));return[u,c]}function p(t,n){const e=t.map(((t,e)=>t+(t-1)*(n[e]-1))),r=e.map((t=>t-1)),o=r.map((t=>Math.floor(t/2))),s=r.map(((t,n)=>t-o[n]));return r.map(((t,n)=>[o[n],s[n]]))}const m=(0,c.op)({pool_:f})},17986:function(t,n,e){e.d(n,{d:function(){return u}});var r=e(57260),o=e(15441),s=e(28189),i=e(70929);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
function a(t,n,e){const i=(0,s.YT)(t,"x","slice","string_or_numeric");if(0===i.rank)throw new Error("Slicing scalar is not possible");const a={x:i},u={begin:n,size:e};return r.T2.runKernel(o.Ji,a,u)}const u=(0,i.op)({slice_:a})},19171:function(t,n,e){e.d(n,{Q:function(){return i}});var r=e(57260),o=e(45119),s=e(31259);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
function i(t,n,e,i){if(null==i&&(i=(0,o.X$)(t)),"complex64"===i)throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if(!(0,o.iu)(t)&&!Array.isArray(t)&&"number"!==typeof t&&"boolean"!==typeof t&&"string"!==typeof t)throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");if(null!=n){(0,o.SA)(n);const t=(0,o.Ze)(n),r=(0,o.Ze)(e);(0,o.vA)(t===r,(()=>`Based on the provided shape, [${n}], the tensor should have ${t} values but has ${r}`));for(let s=0;s<e.length;++s){const t=e[s],r=s!==e.length-1||t!==(0,o.Ze)(n.slice(s));(0,o.vA)(e[s]===n[s]||!r,(()=>`Error creating a new Tensor. Inferred shape (${e}) does not match the provided shape (${n}). `))}}return(0,o.iu)(t)||Array.isArray(t)||(t=[t]),n=n||e,t="string"!==i?(0,s.toTypedArray)(t,i):(0,o.Bq)(t,[],!0),r.T2.makeTensor(t,n,i)}},19870:function(t,n,e){e.d(n,{V:function(){return u}});var r=e(57260),o=e(15441),s=e(28189),i=e(70929);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
function a(t){const n=(0,s.YT)(t,"x","reciprocal"),e={x:n};return r.T2.runKernel(o.hu,e)}const u=(0,i.op)({reciprocal_:a})},19925:function(t,n,e){e.d(n,{r:function(){return l}});var r=e(28189),o=e(62198),s=e(13789),i=e(89881),a=e(9879),u=e(70929);
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
function c(t,n){const e=(0,r.YT)(t,"a","logicalXor","bool"),u=(0,r.YT)(n,"b","logicalXor","bool");return(0,o.assertAndGetBroadcastShape)(e.shape,u.shape),(0,s.n)((0,a.z)(t,n),(0,i.N)((0,s.n)(t,n)))}const l=(0,u.op)({logicalXor_:c})},21078:function(t,n,e){e.d(n,{Em:function(){return c},SM:function(){return a},WC:function(){return u},WH:function(){return o},aF:function(){return s},fK:function(){return h},gx:function(){return l},lb:function(){return i}});var r=e(45119);
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
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
 */function o(t,n){for(let e=0;e<t.length;++e)if(t[t.length-e-1]!==n-1-e)return!1;return!0}function s(t,n,e){const r=t.length+n.length,o=[];let s=0,i=0;for(let a=0;a<r;a++)-1===e.indexOf(a)?o.push(t[s++]):o.push(n[i++]);return o}function i(t,n){const e=[],r=t.length;for(let s=0;s<r;s++)-1===n.indexOf(s)&&e.push(t[s]);const o=n.map((n=>t[n]));return[e,o]}function a(t,n){const e=n.map((t=>1));return s(t,e,n)}function u(t,n,e){r.vA(o(n,e),(()=>`${t} supports only inner-most axes for now. Got axes ${n} and rank-${e} input.`))}function c(t,n){if(o(t,n))return null;const e=[];for(let r=0;r<n;++r)-1===t.indexOf(r)&&e.push(r);return t.forEach((t=>e.push(t))),e}function l(t){return t.map(((t,n)=>[n,t])).sort(((t,n)=>t[1]-n[1])).map((t=>t[0]))}function h(t,n){const e=[];for(let r=n-t;r<n;++r)e.push(r);return e}},21190:function(t,n,e){e.d(n,{r:function(){return u}});var r=e(57260),o=e(15441),s=e(28189),i=e(70929);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
function a(t,n=1,e=!0){const i=(0,s.YT)(t,"x","topk");if(0===i.rank)throw new Error("topk() expects the input to be of rank 1 or higher");const a=i.shape[i.shape.length-1];if(n<0)throw new Error(`'k' passed to topk() must be >= 0 but got ${n}`);if(n>a)throw new Error(`'k' passed to topk() must be <= the last dimension (${a}) but got ${n}`);const u={x:i},c={k:n,sorted:e},[l,h]=r.T2.runKernel(o.TB,u,c);return{values:l,indices:h}}const u=(0,i.op)({topk_:a})},21404:function(t,n,e){e.d(n,{F:function(){return c}});var r=e(57260),o=e(15441),s=e(30565),i=e(28189),a=e(70929);
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
function u(t,n){let e=(0,i.YT)(t,"a","atan2"),a=(0,i.YT)(n,"b","atan2");[e,a]=(0,s.makeTypesMatch)(e,a);const u={a:e,b:a};return r.T2.runKernel(o.lx,u)}const c=(0,a.op)({atan2_:u})},21722:function(t,n,e){e.d(n,{qY:function(){return T},yl:function(){return m},rT:function(){return A},tp:function(){return x},B4:function(){return k},Q5:function(){return b},qP:function(){return w}});var r=e(41743),o=e(45119);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
const s=20,i=3,a=7;function u(t,n,e,r){const s=(0,o.Ur)(n),i=c(t,n,e,s),a=n.length,u=f(t,n,e,s,i),l=["Tensor"];return r&&(l.push(`  dtype: ${e}`),l.push(`  rank: ${a}`),l.push(`  shape: [${n}]`),l.push("  values:")),l.push(u.map((t=>"    "+t)).join("\n")),l.join("\n")}function c(t,n,e,r){const s=(0,o.Ze)(n),i=r[r.length-1],a=new Array(i).fill(0),u=n.length,c="complex64"===e?d(t):t;if(u>1)for(let o=0;o<s/i;o++){const t=o*i;for(let n=0;n<i;n++)a[n]=Math.max(a[n],l(c[t+n],0,e).length)}return a}function l(t,n,e){let r;return r=Array.isArray(t)?`${parseFloat(t[0].toFixed(a))} + ${parseFloat(t[1].toFixed(a))}j`:(0,o.Kg)(t)?`'${t}'`:"bool"===e?h(t):parseFloat(t.toFixed(a)).toString(),(0,o.av)(r,n)}function h(t){return 0===t?"false":"true"}function f(t,n,e,r,o,a=!0){const u="complex64"===e?2:1,c=n[0],p=n.length;if(0===p){if("complex64"===e){const n=d(t);return[l(n[0],0,e)]}return"bool"===e?[h(t[0])]:[t[0].toString()]}if(1===p){if(c>s){const n=i*u;let r=Array.from(t.slice(0,n)),s=Array.from(t.slice((c-i)*u,c*u));return"complex64"===e&&(r=d(r),s=d(s)),["["+r.map(((t,n)=>l(t,o[n],e))).join(", ")+", ..., "+s.map(((t,n)=>l(t,o[c-i+n],e))).join(", ")+"]"]}const n="complex64"===e?d(t):Array.from(t);return["["+n.map(((t,n)=>l(t,o[n],e))).join(", ")+"]"]}const m=n.slice(1),g=r.slice(1),v=r[0]*u,y=[];if(c>s){for(let n=0;n<i;n++){const r=n*v,s=r+v;y.push(...f(t.slice(r,s),m,e,g,o,!1))}y.push("...");for(let n=c-i;n<c;n++){const r=n*v,s=r+v;y.push(...f(t.slice(r,s),m,e,g,o,n===c-1))}}else for(let s=0;s<c;s++){const n=s*v,r=n+v;y.push(...f(t.slice(n,r),m,e,g,o,s===c-1))}const w=2===p?",":"";y[0]="["+y[0]+w;for(let s=1;s<y.length-1;s++)y[s]=" "+y[s]+w;let b=",\n";for(let s=2;s<p;s++)b+="\n";return y[y.length-1]=" "+y[y.length-1]+"]"+(a?"":b),y}function d(t){const n=[];for(let e=0;e<t.length;e+=2)n.push([t[e],t[e+1]]);return n}var p=e(31259);
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
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
class m{constructor(t,n,e){if(this.dtype=n,this.shape=t.slice(),this.size=o.Ze(t),null!=e){const t=e.length;o.vA(t===this.size,(()=>`Length of values '${t}' does not match the size inferred by the shape '${this.size}'.`))}if("complex64"===n)throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=e||o.Ab(n,this.size),this.strides=(0,o.Ur)(t)}set(t,...n){0===n.length&&(n=[0]),o.vA(n.length===this.rank,(()=>`The number of provided coordinates (${n.length}) must match the rank (${this.rank})`));const e=this.locToIndex(n);this.values[e]=t}get(...t){0===t.length&&(t=[0]);let n=0;for(const r of t){if(r<0||r>=this.shape[n]){const n=`Requested out of range element at ${t}.   Buffer shape=${this.shape}`;throw new Error(n)}n++}let e=t[t.length-1];for(let r=0;r<t.length-1;++r)e+=this.strides[r]*t[r];return this.values[e]}locToIndex(t){if(0===this.rank)return 0;if(1===this.rank)return t[0];let n=t[t.length-1];for(let e=0;e<t.length-1;++e)n+=this.strides[e]*t[e];return n}indexToLoc(t){if(0===this.rank)return[];if(1===this.rank)return[t];const n=new Array(this.shape.length);for(let e=0;e<n.length-1;++e)n[e]=Math.floor(t/this.strides[e]),t-=n[e]*this.strides[e];return n[n.length-1]=t,n}get rank(){return this.shape.length}toTensor(){return g().makeTensor(this.values,this.shape,this.dtype)}}let g=null,v=null,y=null;function w(t){g=t}function b(t){v=t}function k(t){y=t}class T{constructor(t,n,e,r){this.kept=!1,this.isDisposedInternal=!1,this.shape=t.slice(),this.dtype=n||"float32",this.size=o.Ze(t),this.strides=(0,o.Ur)(t),this.dataId=e,this.id=r,this.rankType=this.rank<5?this.rank.toString():"higher"}get rank(){return this.shape.length}async buffer(){const t=await this.data();return v.buffer(this.shape,this.dtype,t)}bufferSync(){return v.buffer(this.shape,this.dtype,this.dataSync())}async array(){const t=await this.data();return(0,o.yw)(this.shape,t,"complex64"===this.dtype)}arraySync(){return(0,o.yw)(this.shape,this.dataSync(),"complex64"===this.dtype)}async data(){this.throwIfDisposed();const t=g().read(this.dataId);if("string"===this.dtype){const e=await t;try{return e.map((t=>p.decodeString(t)))}catch(n){throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}}return t}dataToGPU(t){return this.throwIfDisposed(),g().readToGPU(this.dataId,t)}dataSync(){this.throwIfDisposed();const t=g().readSync(this.dataId);if("string"===this.dtype)try{return t.map((t=>p.decodeString(t)))}catch(n){throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}return t}async bytes(){this.throwIfDisposed();const t=await g().read(this.dataId);return"string"===this.dtype?t:new Uint8Array(t.buffer)}dispose(){this.isDisposed||(g().disposeTensor(this),this.isDisposedInternal=!0)}get isDisposed(){return this.isDisposedInternal}throwIfDisposed(){if(this.isDisposed)throw new Error("Tensor is disposed.")}print(t=!1){return v.print(this,t)}clone(){return this.throwIfDisposed(),v.clone(this)}toString(t=!1){const n=this.dataSync();return u(n,this.shape,this.dtype,t)}cast(t){return this.throwIfDisposed(),v.cast(this,t)}variable(t=!0,n,e){return this.throwIfDisposed(),g().makeVariable(this,t,n,e)}}function x(){return(0,r.m)("Tensor",(()=>T))}Object.defineProperty(T,Symbol.hasInstance,{value:t=>!!t&&null!=t.data&&null!=t.dataSync&&null!=t.throwIfDisposed}),x();class A extends T{constructor(t,n,e,r){super(t.shape,t.dtype,t.dataId,r),this.trainable=n,this.name=e}assign(t){if(t.dtype!==this.dtype)throw new Error(`dtype of the new value (${t.dtype}) and previous value (${this.dtype}) must match`);if(!o.r1(t.shape,this.shape))throw new Error(`shape of the new value (${t.shape}) and previous value (${this.shape}) must match`);g().disposeTensor(this),this.dataId=t.dataId,g().incRef(this,null)}dispose(){g().disposeVariable(this),this.isDisposedInternal=!0}}Object.defineProperty(A,Symbol.hasInstance,{value:t=>t instanceof T&&null!=t.assign&&t.assign instanceof Function})},22292:function(t,n,e){e.d(n,{g:function(){return m}});var r=e(37148),o=e(25030),s=e(35040),i=e(9258),a=e(70929),u=e(1902),c=e(62302),l=e(53262),h=e(45702),f=e(17986),d=e(13108);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
function p(t){const n=t.shape[t.shape.length-1],e=t.size/n;let a;if(n<=2){const r=(0,c.t)(t,[e,n]);a=(0,d.K)(r)}else{const p=[e,2*(n-1)],m=(0,c.t)((0,u.x)(t),[e,n]),g=(0,c.t)((0,s.n)(t),[e,n]),v=(0,l.B)((0,f.d)(m,[0,1],[e,n-2]),1),y=(0,i.l)((0,l.B)((0,f.d)(g,[0,1],[e,n-2]),1),(0,h.d)(-1)),w=(0,o.x)([m,v],1),b=(0,o.x)([g,y],1),k=(0,c.t)((0,r.f)(w,b),[p[0],p[1]]);a=(0,d.K)(k)}if(a=(0,u.x)(a),3===t.rank&&0!==t.shape[0]){const n=a,e=t.shape[0];a=(0,c.t)(a,[e,a.shape[0]/e,a.shape[1]]),n.dispose()}return a}const m=(0,a.op)({irfft_:p})},23325:function(t,n,e){e.d(n,{F:function(){return a}});var r=e(21722),o=e(28189),s=e(45119);
/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
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
async function i(t,n){const e=(0,o.YT)(t,"x","setdiff1d"),i=(0,o.YT)(n,"y","setdiff1d");s.vA(e.dtype===i.dtype,(()=>`x and y should have the same dtype, but got x (${e.dtype}) and y (${i.dtype}).`)),s.vA(1===e.rank,(()=>`x should be 1D tensor, but got x (${e.shape}).`)),s.vA(1===i.rank,(()=>`y should be 1D tensor, but got y (${i.shape}).`));const a=await e.data(),u=await i.data(),c=new Set(u);let l=0;for(let r=0;r<a.length;r++)c.has(a[r])||l++;const h=new r.yl([l],e.dtype),f=new r.yl([l],"int32");for(let r=0,o=0;r<a.length;r++)c.has(a[r])||(h.values[o]=a[r],f.values[o]=r,o++);return[h.toTensor(),f.toTensor()]}const a=i},24044:function(t,n,e){e.d(n,{Z:function(){return c}});var r=e(57260),o=e(15441);function s(t,n,e,r){if("int32"!==t.dtype)throw new Error(`tf.sparseToDense() expects the indices to be int32 type, but the dtype was ${t.dtype}.`);if(t.rank>2)throw new Error(`sparseIndices should be a scalar, vector, or matrix, but got shape ${t.shape}.`);const o=t.rank>0?t.shape[0]:1,s=t.rank>1?t.shape[1]:1;if(e.length!==s)throw new Error(`outputShape has incorrect number of elements:, ${e.length}, should be: ${s}.`);const i=n.size;if(0!==n.rank&&(1!==n.rank||i!==o))throw new Error(`sparseValues has incorrect shape ${n.shape}, should be [] or [${o}]`);if(n.dtype!==r.dtype)throw new Error("sparseValues.dtype must match defaultValues.dtype")}var i=e(28189),a=e(70929);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
function u(t,n,e,a=0){const u=(0,i.YT)(t,"sparseIndices","sparseToDense","int32"),c=(0,i.YT)(n,"sparseValues","sparseToDense","string_or_numeric"),l=(0,i.YT)(a,"defaultValue","sparseToDense",c.dtype);s(u,c,e,l);const h={sparseIndices:u,sparseValues:c,defaultValue:l},f={outputShape:e};return r.T2.runKernel(o.jg,h,f)}const c=(0,a.op)({sparseToDense_:u})},25030:function(t,n,e){e.d(n,{x:function(){return l}});var r=e(57260),o=e(15441),s=e(28189),i=e(45119),a=e(70125),u=e(70929);
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
function c(t,n=0){(0,i.vA)(t.length>=1,(()=>"Pass at least one tensor to concat"));const e=(0,s.j1)(t,"tensors","concat","string_or_numeric");if("complex64"===e[0].dtype&&e.forEach((t=>{if("complex64"!==t.dtype)throw new Error(`Cannot concatenate complex64 tensors with a tensor\n          with dtype ${t.dtype}. `)})),1===e.length)return(0,a.o)(e[0]);const u=e,c={axis:n};return r.T2.runKernel(o.$d,u,c)}const l=(0,u.op)({concat_:c})},25248:function(t,n,e){e.d(n,{H:function(){return l}});var r=e(57260),o=e(15441),s=e(45119),i=e(47195),a=e(70929),u=e(62302);
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
function c(t,n,e,a,c,l="NHWC",h){let f=t;3===t.rank&&(f=(0,u.t)(t,[1,t.shape[0],t.shape[1],t.shape[2]]));let d=n;3===d.rank&&(d=(0,u.t)(n,[1,n.shape[0],n.shape[1],n.shape[2]])),s.vA(4===f.rank,(()=>`Error in conv2dDerFilter: input must be rank 4, but got shape ${f.shape}.`)),s.vA(4===d.rank,(()=>`Error in conv2dDerFilter: dy must be rank 4, but got shape ${d.shape}.`)),s.vA(4===e.length,(()=>`Error in conv2dDerFilter: filterShape must be length 4, but got ${e}.`));const p="NHWC"===l?f.shape[3]:f.shape[1],m="NHWC"===l?d.shape[3]:d.shape[1];s.vA(p===e[2],(()=>`Error in conv2dDerFilter: depth of input ${p}) must match input depth in filter (${e[2]}.`)),s.vA(m===e[3],(()=>`Error in conv2dDerFilter: depth of dy (${m}) must match output depth for filter (${e[3]}).`)),i.s_("conv2dDerFilter",c,h);const g={x:f,dy:d},v={strides:a,pad:c,dataFormat:l,dimRoundingMode:h,filterShape:e};return r.T2.runKernel(o.rF,g,v)}const l=(0,a.op)({conv2DBackpropFilter_:c})},25912:function(t,n,e){e.d(n,{L:function(){return u}});var r=e(57260),o=e(15441),s=e(28189),i=e(70929);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
function a(t){const n=(0,s.YT)(t,"x","round"),e={x:n};return r.T2.runKernel(o.hV,e)}const u=(0,i.op)({round_:a})},26170:function(t,n,e){e.r(n),e.d(n,{calculateShapes:function(){return i},validateInput:function(){return s},validateUpdateShape:function(){return o}});var r=e(45119);function o(t,n,e){const r=n.rank>1?n.shape[n.rank-1]:1,o=n.rank>1?n.rank-1:1,s=`Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: ${e.shape}, indices.shape: ${n.shape}, shape: ${t}, sliceDim: ${r}, and batchDim: ${o}.`;if(e.rank<o)throw new Error(s+` update.rank < ${o}. `);if(t.length<r+(e.rank-o))throw new Error(s+` Output shape length < ${r+(e.rank-o)}`);if(e.rank!==o+t.length-r)throw new Error(s+" update.rank != "+(o+t.length-r));for(let i=0;i<o;++i)if(e.shape[i]!==n.shape[i])throw new Error(s+` updates.shape[${i}] (${e.shape[i]}) != indices.shape[${i}] (${n.shape[i]}).`);for(let i=0;i<e.rank-o;++i)if(e.shape[i+o]!==t[i+r])throw new Error(s+` updates.shape[${i+o}] (${e.shape[i+o]}) != shape[${i+o}] (${t[i+o]})`)}function s(t,n,e){if(n.rank<1)throw new Error(`tf.scatterND() expects the indices to be rank 1 or higher, but the rank was ${n.rank}.`);if(t.rank<1)throw new Error(`tf.scatterND() expects the updates to be rank 1 or higher, but the rank was ${t.rank}.`);if("int32"!==n.dtype)throw new Error(`The dtype of 'indices' should be int32, but got dtype: ${n.dtype}`);if(e.length<1)throw new Error(`Output rank must be greater or equal to 1, but got shape: ${e}`);if(0===e.length){if(0===n.size)throw new Error(`Indices specified for empty output. indices shape: ${n.shape}`);if(0===t.size)throw new Error(`Updates specified for empty output. updates shape: ${t.shape}`)}o(e,n,t)}function i(t,n,e){const o=n.shape.length,s=o>1?n.shape[o-1]:1,i=e.length;let a=1;for(let r=s;r<i;++r)a*=e[r];const u=s<1?1:s,c=(0,r.Ze)(n.shape)/u,l=[...(0,r.Ur)(e.slice(0,s)),1],h=(0,r.Ze)(e);return{sliceRank:s,numUpdates:c,sliceSize:a,strides:l,outputSize:h}}},26325:function(t,n,e){e.d(n,{W:function(){return u}});var r=e(57260),o=e(15441),s=e(28189),i=e(70929);
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
function a(t){const n=(0,s.YT)(t,"x","selu"),e={x:n};return r.T2.runKernel(o.u$,e)}const u=(0,i.op)({selu_:a})},26346:function(t,n,e){e.d(n,{V:function(){return u}});var r=e(57260),o=e(15441),s=e(28189),i=e(70929);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
function a(t,n=-1){const e=(0,s.YT)(t,"logits","softmax","float32");if(-1===n&&(n=e.rank-1),n!==e.rank-1)throw Error(`Softmax along a non-last dimension is not yet supported. Logits was rank ${e.rank} and dim was ${n}`);const i={logits:e},a={dim:n};return r.T2.runKernel(o.K2,i,a)}const u=(0,i.op)({softmax_:a})},27084:function(t,n,e){
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
var r;e.d(n,{i:function(){return r}}),function(t){t[t["NONE"]=0]="NONE",t[t["MEAN"]=1]="MEAN",t[t["SUM"]=2]="SUM",t[t["SUM_BY_NONZERO_WEIGHTS"]=3]="SUM_BY_NONZERO_WEIGHTS"}(r||(r={}))},27451:function(t,n,e){e.d(n,{y:function(){return u}});var r=e(57260),o=e(15441),s=e(28189),i=e(70929);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
function a(t){const n=(0,s.YT)(t,"x","cosh","float32"),e={x:n};return r.T2.runKernel(o.Mn,e)}const u=(0,i.op)({cosh_:a})},28189:function(t,n,e){e.d(n,{MZ:function(){return u},YT:function(){return h},j1:function(){return f}});var r=e(57260),o=e(46574),s=e(21722),i=e(45119),a=e(31259);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
function u(t,n){let e=t;if((0,i.iu)(t))return"string"===n?[]:[t.length];if(!Array.isArray(t))return[];const r=[];while(Array.isArray(e)||(0,i.iu)(e)&&"string"!==n)r.push(e.length),e=e[0];return Array.isArray(t)&&(0,o._K)().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")&&c(t,r,[]),r}function c(t,n,e){if(e=e||[],!Array.isArray(t)&&!(0,i.iu)(t))return void(0,i.vA)(0===n.length,(()=>`Element arr[${e.join("][")}] is a primitive, but should be an array/TypedArray of ${n[0]} elements`));(0,i.vA)(n.length>0,(()=>`Element arr[${e.join("][")}] should be a primitive, but is an array of ${t.length} elements`)),(0,i.vA)(t.length===n[0],(()=>`Element arr[${e.join("][")}] should have ${n[0]} elements, but has ${t.length} elements`));const r=n.slice(1);for(let o=0;o<t.length;++o)c(t[o],r,e.concat(o))}function l(t,n,e,r){if("string_or_numeric"!==t){if(null==t)throw new Error("Expected dtype cannot be null.");if("numeric"!==t&&t!==n||"numeric"===t&&"string"===n)throw new Error(`Argument '${e}' passed to '${r}' must be ${t} tensor, but got ${n} tensor`)}}function h(t,n,e,o="numeric"){if(t instanceof s.qY)return l(o,t.dtype,n,e),t;let c=(0,i.X$)(t);if("string"!==c&&["bool","int32","float32"].indexOf(o)>=0&&(c=o),l(o,c,n,e),null==t||!(0,i.iu)(t)&&!Array.isArray(t)&&"number"!==typeof t&&"boolean"!==typeof t&&"string"!==typeof t){const r=null==t?"null":t.constructor.name;throw new Error(`Argument '${n}' passed to '${e}' must be a Tensor or TensorLike, but got '${r}'`)}const h=u(t,c);(0,i.iu)(t)||Array.isArray(t)||(t=[t]);const f=!0,d="string"!==c?(0,a.toTypedArray)(t,c):(0,i.Bq)(t,[],f);return r.T2.makeTensor(d,h,c)}function f(t,n,e,r="numeric"){if(!Array.isArray(t))throw new Error(`Argument ${n} passed to ${e} must be a \`Tensor[]\` or \`TensorLike[]\``);const o=t;return o.map(((t,o)=>h(t,`${n}[${o}]`,e,r)))}},28576:function(t,n,e){e.d(n,{X:function(){return o},j:function(){return r}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
const r=1.7580993408473768,o=1.0507009873554805},28794:function(t,n,e){e.d(n,{X:function(){return h}});var r=e(57260),o=e(15441),s=e(28189),i=e(45119),a=e(47195),u=e(70929),c=e(62302);
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
function l(t,n,e,u,l="NHWC",h=[1,1],f){const d=(0,s.YT)(t,"x","conv2d","float32"),p=(0,s.YT)(n,"filter","conv2d","float32");let m=d,g=!1;3===d.rank&&(g=!0,m=(0,c.t)(d,[1,d.shape[0],d.shape[1],d.shape[2]])),i.vA(4===m.rank,(()=>`Error in conv2d: input must be rank 4, but got rank ${m.rank}.`)),i.vA(4===p.rank,(()=>`Error in conv2d: filter must be rank 4, but got rank ${p.rank}.`)),a.s_("conv2d",u,f);const v="NHWC"===l?m.shape[3]:m.shape[1];i.vA(v===p.shape[2],(()=>`Error in conv2d: depth of input (${v}) must match input depth for filter ${p.shape[2]}.`)),i.vA(a.G0(e,h),(()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${e} and dilations '${h}'`));const y={x:m,filter:p},w={strides:e,pad:u,dataFormat:l,dilations:h,dimRoundingMode:f},b=r.T2.runKernel(o.p2,y,w);return g?(0,c.t)(b,[b.shape[1],b.shape[2],b.shape[3]]):b}const h=(0,u.op)({conv2d_:l})},28968:function(t,n,e){e.d(n,{r:function(){return u}});var r=e(57260),o=e(15441),s=e(28189),i=e(70929);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
function a(t){const n=(0,s.YT)(t,"x","sigmoid","float32"),e={x:n};return r.T2.runKernel(o.vI,e)}const u=(0,i.op)({sigmoid_:a})},29580:function(t,n,e){e.d(n,{r:function(){return u}});var r=e(57260),o=e(15441),s=e(28189),i=e(70929);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
function a(t){const n=(0,s.YT)(t,"x","atan"),e={x:n};return r.T2.runKernel(o.Ty,e)}const u=(0,i.op)({atan_:a})},29809:function(t,n,e){e.d(n,{w:function(){return c}});var r=e(57260),o=e(15441),s=e(28189),i=e(45119),a=e(70929);
/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
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
function u(t,n){const e=(0,s.YT)(t,"x","cast");if(!i.xn(n))throw new Error(`Failed to cast to unknown dtype ${n}`);if("string"===n&&"string"!==e.dtype||"string"!==n&&"string"===e.dtype)throw new Error("Only strings can be casted to strings");const a={x:e},u={dtype:n};return r.T2.runKernel(o.KX,a,u)}const c=(0,a.op)({cast_:u})},30099:function(t,n,e){e.d(n,{N:function(){return g}});var r=e(57260),o=e(31830),s=e(15441),i=e(30565),a=e(28189),u=e(45119),c=e(37523),l=e(62198),h=e(68646),f=e(65703),d=e(70929),p=e(62302);
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
function m({a:t,b:n,transposeA:e=!1,transposeB:d=!1,bias:m,activation:g="linear",preluActivationWeights:v,leakyreluAlpha:y}){if(!1===(0,h.zE)(r.T2.state.gradientDepth,g)){let r=(0,f.N)(t,n,e,d);return null!=m&&(r=(0,c.W)(r,m)),(0,h.f2)(r,g,v,y)}let w=(0,a.YT)(t,"a","fused matMul"),b=(0,a.YT)(n,"b","fused matMul");[w,b]=(0,i.makeTypesMatch)(w,b);const k=e?w.shape[w.rank-2]:w.shape[w.rank-1],T=d?b.shape[b.rank-1]:b.shape[b.rank-2],x=e?w.shape[w.rank-1]:w.shape[w.rank-2],A=d?b.shape[b.rank-2]:b.shape[b.rank-1],E=w.shape.slice(0,-2),S=b.shape.slice(0,-2),$=u.Ze(E),I=u.Ze(S);u.vA(k===T,(()=>`Error in fused matMul: inner shapes (${k}) and (${T}) of Tensors with shapes ${w.shape} and ${b.shape} and transposeA=${e} and transposeB=${d} must match.`));const N=l.assertAndGetBroadcastShape(w.shape.slice(0,-2),b.shape.slice(0,-2)),D=N.concat([x,A]),M=e?(0,p.t)(w,[$,k,x]):(0,p.t)(w,[$,x,k]),_=d?(0,p.t)(b,[I,A,T]):(0,p.t)(b,[I,T,A]);let F,R;null!=m&&(F=(0,a.YT)(m,"bias","fused matMul"),[F]=(0,i.makeTypesMatch)(F,w),l.assertAndGetBroadcastShape(D,F.shape)),null!=v&&(R=(0,a.YT)(v,"prelu weights","fused matMul"));const B=(t,n)=>{const[r,o,s,i]=n,a=(0,h.XB)((0,p.t)(t,s.shape),s,g);let u,c;if(e||d?!e&&d?(u=(0,f.N)(a,o,!1,!1),c=(0,f.N)(a,r,!0,!1)):e&&!d?(u=(0,f.N)(o,a,!1,!0),c=(0,f.N)(r,a,!1,!1)):(u=(0,f.N)(o,a,!0,!0),c=(0,f.N)(a,r,!0,!0)):(u=(0,f.N)(a,o,!1,!0),c=(0,f.N)(r,a,!0,!1)),null!=m){const t=(0,h.Do)(i,a);return[u,c,t]}return[u,c]},Y={a:M,b:_,bias:F,preluActivationWeights:R},P={transposeA:e,transposeB:d,activation:g,leakyreluAlpha:y};if(null==m){const t=(0,o._X)(((t,n,e)=>{const o=r.T2.runKernel(s.Dr,Y,P);return e([t,n,o]),{value:(0,p.t)(o,D),gradFunc:B}}));return t(M,_)}{const t=(0,o._X)(((t,n,e,o)=>{const i=r.T2.runKernel(s.Dr,Y,P);return o([t,n,i,e]),{value:(0,p.t)(i,D),gradFunc:B}}));return t(M,_,F)}}const g=(0,d.op)({fusedMatMul_:m})},30178:function(t,n,e){e.d(n,{P:function(){return h}});var r=e(57260),o=e(15441),s=e(30565),i=e(28189),a=e(62198),u=e(29809),c=e(70929);
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
function l(t,n){let e=(0,i.YT)(t,"a","maximum"),c=(0,i.YT)(n,"b","maximum");[e,c]=(0,s.makeTypesMatch)(e,c),"bool"===e.dtype&&(e=(0,u.w)(e,"int32"),c=(0,u.w)(c,"int32")),(0,a.assertAndGetBroadcastShape)(e.shape,c.shape);const l={a:e,b:c};return r.T2.runKernel(o.LD,l)}const h=(0,c.op)({maximum_:l})},30565:function(t,n,e){e.r(n),e.d(n,{assertTypesMatch:function(){return a},getTensorsInContainer:function(){return c},isTensorInList:function(){return u},makeTypesMatch:function(){return i}});var r=e(21722),o=e(52046),s=e(45119);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
function i(t,n){if(t.dtype===n.dtype)return[t,n];const e=(0,o.Tu)(t.dtype,n.dtype);return[t.cast(e),n.cast(e)]}function a(t,n){(0,s.vA)(t.dtype===n.dtype,(()=>`The dtypes of the first(${t.dtype}) and second(${n.dtype}) input must match`))}function u(t,n){return n.some((n=>n.id===t.id))}function c(t){const n=[],e=new Set;return l(t,n,e),n}function l(t,n,e){if(null==t)return;if(t instanceof r.qY)return void n.push(t);if(!h(t))return;const o=t;for(const r in o){const t=o[r];e.has(t)||(e.add(t),l(t,n,e))}}function h(t){return Array.isArray(t)||"object"===typeof t}},30855:function(t,n,e){e.d(n,{m:function(){return u}});var r=e(57260),o=e(15441),s=e(28189),i=e(70929);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
function a(t){const n=(0,s.YT)(t,"x","ceil","float32"),e={x:n};return r.T2.runKernel(o.QD,e)}const u=(0,i.op)({ceil_:a})},31216:function(t,n,e){e.d(n,{R:function(){return c}});var r=e(57260),o=e(15441),s=e(28189),i=e(45119),a=e(70929);
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
function u(t,n,e="NHWC"){const a=(0,s.YT)(t,"x","depthToSpace","float32"),u="NHWC"===e?a.shape[1]:a.shape[2],c="NHWC"===e?a.shape[2]:a.shape[3],l="NHWC"===e?a.shape[3]:a.shape[1];i.vA(n>1,(()=>`blockSize should be > 1 for depthToSpace, but was: ${n}`)),i.vA(u*n>=0,(()=>`Negative dimension size caused by overflow when multiplying\n    ${u} and ${n}  for depthToSpace with input shape\n    ${a.shape}`)),i.vA(c*n>=0,(()=>`Negative dimension size caused by overflow when multiplying\n    ${c} and ${n} for depthToSpace with input shape\n        ${a.shape}`)),i.vA(l%(n*n)===0,(()=>`Dimension size must be evenly divisible by ${n*n} but is ${l} for depthToSpace with input shape ${a.shape}`));const h={x:a},f={blockSize:n,dataFormat:e};return r.T2.runKernel(o.TM,h,f)}const c=(0,a.op)({depthToSpace_:u})},31259:function(t,n,e){e.r(n),e.d(n,{arraysEqual:function(){return o.r1},assert:function(){return o.vA},assertNonNegativeIntegerDimensions:function(){return o.SA},assertNonNull:function(){return o.HO},assertShapesMatch:function(){return o.O3},bytesFromStringArray:function(){return o.SL},bytesPerElement:function(){return o.jv},checkConversionForErrors:function(){return o.nd},clamp:function(){return o.qE},computeStrides:function(){return o.Ur},createScalarValue:function(){return A},createShuffledIndices:function(){return o.P8},decodeString:function(){return D},distSquared:function(){return o.oO},encodeString:function(){return N},fetch:function(){return I},fingerPrint64:function(){return x},flatten:function(){return o.Bq},getArrayFromDType:function(){return o.Ab},getTypedArrayFromDType:function(){return o.ce},hasEncodingLoss:function(){return o.BE},hexToLong:function(){return u},indexToLoc:function(){return o._k},inferDtype:function(){return o.X$},inferFromImplicitShape:function(){return o.XT},isBoolean:function(){return o.Lm},isFunction:function(){return o.Tn},isInt:function(){return o.E6},isNumber:function(){return o.Et},isPromise:function(){return o.yL},isScalarShape:function(){return o.Sf},isString:function(){return o.Kg},isTypedArray:function(){return o.iu},isValidDtype:function(){return o.xn},locToIndex:function(){return o.sX},makeOnesTypedArray:function(){return o.FZ},makeZerosNestedTypedArray:function(){return o.c7},makeZerosTypedArray:function(){return o.Ty},nearestDivisor:function(){return o.lK},nearestLargerEven:function(){return o.eV},now:function(){return $},parseAxisParam:function(){return o.Y6},randUniform:function(){return o.so},repeatedTry:function(){return o._q},rightPad:function(){return o.av},shuffle:function(){return o.k4},shuffleCombo:function(){return o.a0},sizeFromShape:function(){return o.Ze},sizeToSquarishShape:function(){return o.gS},squeezeShape:function(){return o.gx},sum:function(){return o.cz},swap:function(){return o.wg},tanh:function(){return o.ym},toNestedArray:function(){return o.yw},toTypedArray:function(){return S}});var r=e(46574),o=e(45119),s=e(28570),i=e.n(s);
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
const a=i()||s;function u(t){return a.fromString(t,!0,16)}const c=u("c3a5c85c97cb3127"),l=u("b492b66fbe98f273"),h=u("9ae16a3b2f90404f");function f(t){return t.xor(t.shru(47))}function d(t,n,e){const r=t.slice(n,n+e);return a.fromBytes(Array.from(r),!0,!0)}function p(t,n){return d(t,n,8)}function m(t,n){return d(t,n,4)}function g(t,n){return 0===n?t:t.shru(n).or(t.shl(64-n))}function v(t,n,e=u("9ddfea08eb382d69")){let r=t.xor(n).mul(e);r=r.xor(r.shru(47));let o=n.xor(r).mul(e);return o=o.xor(o.shru(47)),o=o.mul(e),o}function y(t,n,e,r,o,s){o=o.add(t),s=g(s.add(o).add(r),21);const i=o;return o=o.add(n),o=o.add(e),s=s.add(g(o,44)),[o.add(r),s.add(i)]}function w(t,n,e,r){return y(p(t,n),p(t,n+8),p(t,n+16),p(t,n+24),e,r)}function b(t,n=t.length){if(n>=8){const e=h.add(2*n),r=p(t,0).add(h),o=p(t,n-8),s=g(o,37).mul(e).add(r),i=g(r,25).add(o).mul(e);return v(s,i,e)}if(n>=4){const e=h.add(2*n),r=m(t,0);return v(r.shl(3).add(n),m(t,n-4),e)}if(n>0){const e=t[0],r=t[n>>1],o=t[n-1],s=e+(r<<8),i=n+(o<<2);return f(h.mul(s).xor(c.mul(i))).mul(h)}return h}function k(t,n=t.length){const e=h.add(2*n),r=p(t,0).mul(l),o=p(t,8),s=p(t,n-8).mul(e),i=p(t,n-16).mul(h);return v(g(r.add(o),43).add(g(s,30)).add(i),r.add(g(o.add(h),18)).add(s),e)}function T(t,n=t.length){const e=h.add(2*n),r=p(t,0).mul(h),o=p(t,8),s=p(t,n-8).mul(e),i=p(t,n-16).mul(h),a=g(r.add(o),43).add(g(s,30)).add(i),u=v(a,r.add(g(o.add(h),18)).add(s),e),c=p(t,16).mul(e),l=p(t,24),f=a.add(p(t,n-32)).mul(e),d=u.add(p(t,n-24)).mul(e);return v(g(c.add(l),43).add(g(f,30)).add(d),c.add(g(l.add(r),18)).add(f),e)}function x(t,n=t.length){const e=a.fromNumber(81,!0);if(n<=32)return n<=16?b(t,n):k(t,n);if(n<=64)return T(t,n);let r=e,o=e.mul(l).add(113),s=f(o.mul(h).add(113)).mul(h),i=[a.UZERO,a.UZERO],u=[a.UZERO,a.UZERO];r=r.mul(h).add(p(t,0));let d=0;const m=64*(n-1>>6),y=m+(n-1&63)-63;do{r=g(r.add(o).add(i[0]).add(p(t,d+8)),37).mul(l),o=g(o.add(i[1]).add(p(t,d+48)),42).mul(l),r=r.xor(u[1]),o=o.add(i[0]).add(p(t,d+40)),s=g(s.add(u[0]),33).mul(l),i=w(t,d,i[1].mul(l),r.add(u[0])),u=w(t,d+32,s.add(u[1]),o.add(p(t,d+16))),[s,r]=[r,s],d+=64}while(d!==m);const x=l.add(s.and(255).shl(1));return d=y,u[0]=u[0].add(n-1&63),i[0]=i[0].add(u[0]),u[0]=u[0].add(i[0]),r=g(r.add(o).add(i[0]).add(p(t,d+8)),37).mul(x),o=g(o.add(i[1]).add(p(t,d+48)),42).mul(x),r=r.xor(u[1].mul(9)),o=o.add(i[0].mul(9).add(p(t,d+40))),s=g(s.add(u[0]),33).mul(x),i=w(t,d,i[1].mul(x),r.add(u[0])),u=w(t,d+32,s.add(u[1]),o.add(p(t,d+16))),[s,r]=[r,s],v(v(i[0],u[0],x).add(f(o).mul(c)).add(s),v(i[1],u[1],x).add(r),x)}
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
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
function A(t,n){return"string"===n?N(t):S([t],n)}function E(t,n){return t instanceof Float32Array&&"float32"===n||t instanceof Int32Array&&"int32"===n||t instanceof Uint8Array&&"bool"===n}function S(t,n){if("string"===n)throw new Error("Cannot convert a string[] to a TypedArray");if(Array.isArray(t)&&(t=o.Bq(t)),(0,r._K)().getBool("DEBUG")&&o.nd(t,n),E(t,n))return t;if(null==n||"float32"===n||"complex64"===n)return new Float32Array(t);if("int32"===n)return new Int32Array(t);if("bool"===n){const n=new Uint8Array(t.length);for(let e=0;e<n.length;++e)0!==Math.round(t[e])&&(n[e]=1);return n}throw new Error(`Unknown data type ${n}`)}function $(){return(0,r._K)().platform.now()}function I(t,n){return(0,r._K)().platform.fetch(t,n)}function N(t,n="utf-8"){return n=n||"utf-8",(0,r._K)().platform.encode(t,n)}function D(t,n="utf-8"){return n=n||"utf-8",(0,r._K)().platform.decode(t,n)}},31830:function(t,n,e){e.d(n,{Dv:function(){return a},_X:function(){return f},jY:function(){return c},mu:function(){return l},ok:function(){return u},y7:function(){return h}});var r=e(57260),o=e(21722),s=e(28189),i=e(45119);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
function a(t){return i.vA(i.Tn(t),(()=>"The f passed in grad(f) must be a function")),(n,e)=>{const o=(0,s.YT)(n,"x","tf.grad","string_or_numeric"),a=null!=e?(0,s.YT)(e,"dy","tf.grad"):null;return r.T2.tidy((()=>{const{value:n,grads:e}=r.T2.gradients((()=>t(o)),[o],a);return null!=a&&i.O3(n.shape,a.shape,"The shape of dy passed in grad(f)(x, dy) must match the shape returned by f(x)"),d(e),e[0]}))}}function u(t){return i.vA(i.Tn(t),(()=>"The f passed in grads(f) must be a function")),(n,e)=>{i.vA(Array.isArray(n),(()=>"The args passed in grads(f)(args) must be an array of `Tensor`s or `TensorLike`s"));const o=(0,s.j1)(n,"args","tf.grads","string_or_numeric"),a=null!=e?(0,s.YT)(e,"dy","tf.grads"):null;return r.T2.tidy((()=>{const{value:n,grads:e}=r.T2.gradients((()=>t(...o)),o,a);return null!=a&&i.O3(n.shape,a.shape,"The shape of dy passed in grads(f)([x1,...], dy) must match the shape returned by f([x1,...])"),d(e),e}))}}function c(t){return i.vA(i.Tn(t),(()=>"The f passed in valueAndGrad(f) must be a function")),(n,e)=>{i.vA(n instanceof o.qY,(()=>"The x passed in valueAndGrad(f)(x) must be a tensor")),i.vA(null==e||e instanceof o.qY,(()=>"The dy passed in valueAndGrad(f)(x, dy) must be a tensor"));const{grads:s,value:a}=r.T2.gradients((()=>t(n)),[n],e);return d(s),{grad:s[0],value:a}}}function l(t){return i.vA(i.Tn(t),(()=>"The f passed in valueAndGrads(f) must be a function")),(n,e)=>{i.vA(Array.isArray(n)&&n.every((t=>t instanceof o.qY)),(()=>"The args passed in valueAndGrads(f)(args) must be array of tensors")),i.vA(null==e||e instanceof o.qY,(()=>"The dy passed in valueAndGrads(f)(args, dy) must be a tensor"));const s=r.T2.gradients((()=>t(...n)),n,e);return null!=e&&i.O3(s.value.shape,e.shape,"The shape of dy passed in valueAndGrads(f)([x1,...], dy) must match the shape returned by f([x1,...])"),d(s.grads),s}}function h(t,n){i.vA(i.Tn(t),(()=>"The f passed in variableGrads(f) must be a function")),i.vA(null==n||Array.isArray(n)&&n.every((t=>t instanceof o.rT)),(()=>"The varList passed in variableGrads(f, varList) must be an array of variables"));const e=null!=n;if(!e){n=[];for(const t in r.T2.registeredVariables)n.push(r.T2.registeredVariables[t])}const s=e?n.filter((t=>!t.trainable)):null,a=n.length;n=n.filter((t=>t.trainable)),i.vA(n.length>0,(()=>`variableGrads() expects at least one of the input variables to be trainable, but none of the ${a} variables is trainable.`));const u=!0,{value:c,grads:l}=r.T2.gradients(t,n,null,u);i.vA(l.some((t=>null!=t)),(()=>"Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize().")),i.vA(0===c.rank,(()=>`The f passed in variableGrads(f) must return a scalar, but it returned a rank-${c.rank} tensor`));const h={};return n.forEach(((t,n)=>{null!=l[n]&&(h[t.name]=l[n])})),null!=s&&s.forEach((t=>h[t.name]=null)),{value:c,grads:h}}function f(t){return r.T2.customGrad(t)}function d(t){const n=t.filter((t=>null==t)).length;if(n>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that\n    the f you passed encloses all operations that lead from x to y.")}},31895:function(t,n,e){e.d(n,{c:function(){return c}});var r=e(57260),o=e(15441),s=e(45119),i=e(70929),a=e(62302);
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
function u(t,n,e,i,u){s.vA(t.length===n.rank,(()=>`Length of inShape (${t.length}) and rank of dy (${n.rank}) must match`));let c=t,l=n,h=!1;4===n.rank&&(h=!0,l=(0,a.t)(n,[1,n.shape[0],n.shape[1],n.shape[2],n.shape[3]]),c=[1,t[0],t[1],t[2],t[3]]);const f=c[4],d=l.shape[4];s.vA(5===c.length,(()=>`Error in conv3dDerInput: inShape must be length 5, but got length ${c.length}.`)),s.vA(5===l.rank,(()=>`Error in conv3dDerInput: dy must be rank 5, but got rank ${l.rank}`)),s.vA(5===e.rank,(()=>`Error in conv3dDerInput: filter must be rank 5, but got rank ${e.rank}`)),s.vA(f===e.shape[3],(()=>`Error in conv3dDerInput: depth of input (${f}) must match input depth for filter ${e.shape[3]}.`)),s.vA(d===e.shape[4],(()=>`Error in conv3dDerInput: depth of output (${d}) must match output depth for filter ${e.shape[4]}.`));const p={dy:l,filter:e},m={pad:u,strides:i,inputShape:c},g=r.T2.runKernel(o.gC,p,m);return h?(0,a.t)(g,[g.shape[1],g.shape[2],g.shape[3],g.shape[4]]):g}const c=(0,i.op)({conv3DBackpropInput_:u})},33454:function(t,n,e){e.d(n,{E:function(){return u}});var r=e(57260),o=e(15441),s=e(28189),i=e(70929);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
function a(t){const n=(0,s.YT)(t,"x","isInf"),e={x:n};return r.T2.runKernel(o.E3,e)}const u=(0,i.op)({isInf_:a})},33726:function(t,n,e){e.d(n,{F:function(){return u}});var r=e(57260),o=e(15441),s=e(28189),i=e(70929);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
function a(t){const n=(0,s.YT)(t,"x","sin","float32"),e={x:n};return r.T2.runKernel(o.hq,e)}const u=(0,i.op)({sin_:a})},34969:function(t,n,e){e.r(n),e.d(n,{assertParamsValid:function(){return i},computeFlatOffset:function(){return w},computeOutShape:function(){return u},getNormalizedAxes:function(){return f},isSliceContinous:function(){return y},maskToAxes:function(){return a},parseSliceParams:function(){return b},sliceInfo:function(){return k},startForAxis:function(){return g},startIndicesWithElidedDims:function(){return d},stopForAxis:function(){return v},stopIndicesWithElidedDims:function(){return p},stridesForAxis:function(){return m},stridesWithElidedDims:function(){return c}});var r=e(45119);
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
 */const o=-2,s=-1;function i(t,n,e){const o=t.shape.length;r.vA(o===n.length,(()=>`Error in slice${o}D: Length of begin ${n} must match the rank of the array (${o}).`)),r.vA(o===e.length,(()=>`Error in slice${o}D: Length of size ${e} must match the rank of the array (${o}).`));for(let s=0;s<o;++s)r.vA(n[s]+e[s]<=t.shape[s],(()=>`Error in slice${o}D: begin[${s}] + size[${s}] (${n[s]+e[s]}) would overflow input.shape[${s}] (${t.shape[s]})`))}function a(t){const n=[];let e=0;while(t>0)1&t&&n.push(e),t/=2,e++;return n}function u(t,n,e){const r=[];for(let o=0;o<t.length;o++)r[o]=Math.ceil((n[o]-t[o])/e[o]);return r}function c(t,n,e,r){const o=[...t];for(let s=o.length;s<r.length;s++)o.push(1);for(let s=0;s<e;s++)0===s?o[n]=1:(o.splice(n,0,1),o.pop());return o}function l(t,n,e){return e<=t?e:e-(n-1)}function h(t,n){const e=[];for(let r=0;r<t;r++)e.push(n+r);return e}function f(t,n,e,r,o,s,i,a,u){const l=t.length;let h=new Array(l),f=new Array(l),y=new Array(l);if(n.length&&e>0){const u=n[0],l=e+1;h=d(i,u,l,r,t),f=p(a,u,l,o,t),y=c(s,u,l,t)}else for(let c=0;c<l;c++)h[c]=g(i,r,s,t,c,u),f[c]=v(a,o,s,t,c,u),y[c]=m(s,c,u);return{begin:h,end:f,strides:y}}function d(t,n,e,r,o){const s=[...o],i=h(e,n);for(let a=0;a<s.length;a++)if(i.indexOf(a)>-1)s[a]=0;else{const o=l(n,e,a);let i=r[o];t&1<<o&&(i=0),s[a]=i}return s}function p(t,n,e,o,s){const i=[...s],a=h(e,n);for(let r=0;r<i.length;r++)if(a.indexOf(r)>-1)i[r]=Number.MAX_SAFE_INTEGER;else{const s=l(n,e,r);let a=o[s];t&1<<s&&(a=Number.MAX_SAFE_INTEGER),i[r]=a}for(let u=0;u<i.length;u++){const t=s[u];i[u]<0&&(i[u]+=t),i[u]=r.qE(0,i[u],s[u])}return i}function m(t,n,e){let r=t[n];return(e&1<<n||null==r)&&(r=1),r}function g(t,n,e,o,s,i){let a=n[s];const u=e[s]||1;(t&1<<s||i&1<<s||null==a)&&(a=u>0?Number.MIN_SAFE_INTEGER:Number.MAX_SAFE_INTEGER);const c=o[s];return a<0&&(a+=c),a=r.qE(0,a,c-1),a}function v(t,n,e,o,s,i){let a=n[s];const u=e[s]||1;(t&1<<s||i&1<<s||null==a)&&(a=u>0?Number.MAX_SAFE_INTEGER:Number.MIN_SAFE_INTEGER);const c=o[s];return a<0&&(a+=c),a=u>0?r.qE(0,a,c):r.qE(-1,a,c-1),a}function y(t,n,e){let r=e.length;for(let o=0;o<e.length;o++)if(e[o]>1){r=o;break}for(let o=r+1;o<e.length;o++)if(n[o]>0||e[o]!==t[o])return!1;return!0}function w(t,n){let e=t.length>0?t[t.length-1]:1;for(let r=0;r<t.length-1;r++)e+=t[r]*n[r];return e}function b(t,n,e){let o;const s=t.shape.length;let i;return o="number"===typeof n?[n,...new Array(s-1).fill(0)]:n.length<s?n.concat(new Array(s-n.length).fill(0)):n.slice(),o.forEach((t=>{r.vA(-1!==t,(()=>"slice() does not support negative begin indexing."))})),i=null==e?new Array(s).fill(-1):"number"===typeof e?[e,...new Array(s-1).fill(-1)]:e.length<s?e.concat(new Array(s-e.length).fill(-1)):e,i=i.map(((n,e)=>n>=0?n:(r.vA(-1===n,(()=>`Negative size values should be exactly -1 but got ${n} for the slice() size at index ${e}.`)),t.shape[e]-o[e]))),[o,i]}function k(t,n,e,r,s,i,a,u,c){let l;if(null==r?(l=new Array(n.length),l.fill(1)):l=r,null!=a&&0!==(a&a-1))throw new Error("Multiple ellipses in slice is not allowed.");let h=!1;const f={dims:l.length,numAddAxisAfterEllipsis:0,begin:n.slice(),end:e.slice(),strides:l.slice(),beginMask:s,endMask:i,ellipsisMask:a,newAxisMask:u,shrinkAxisMask:c};for(let o=0;o<f.dims;o++)h&&0!==(1<<o&u)&&f.numAddAxisAfterEllipsis++,1<<o&a&&(h=!0);h||(f.ellipsisMask|=1<<f.dims,f.dims++);const d={dims:t.length,beginMask:0,endMask:0,beginValid:!1,endValid:!1};T(f,d);let p=!0,m=!0,g=!0;const v=[],y=[];for(let o=0;o<t.length;++o){if(0===d.strides[o])throw Error(`strides[${o}] must be non-zero`);const n=!!(d.shrinkAxisMask&1<<o),e=t[o];if(-1===e){v.push(n?1:-1);continue}const r=[d.beginMask&1<<o,d.endMask&1<<o],s=[d.strides[o]>0?0:-1,d.strides[o]>0?e:e-1];if(n&&d.strides[o]<=0)throw Error("only stride 1 allowed on non-range indexing.");g=g&&1===d.strides[o];const i=!!(d.beginMask&1<<o&&d.endMask&1<<o);if(d.beginValid&&d.endValid){if(n){const t=d.begin[o]<0?e+d.begin[o]:d.begin[o];if(d.begin[o]=t,d.end[o]=d.begin[o]+1,t<0||t>=e)throw Error(`slice index ${d.begin[o]} of dimension ${o} out of bounds.`)}else d.begin[o]=x(d.begin[o],0,d.strides[o],e,r,s),d.end[o]=x(d.end[o],1,d.strides[o],e,r,s);const t=1===d.strides[o]&&0===d.begin[o]&&d.end[o]===e;p=p&&t,m=m&&(0===o&&1===d.strides[o]||t)}else p=p&&1===d.strides[o]&&i,m=m&&(0===o&&1===d.strides[o]||i);let a,u=!1;if(d.beginValid&&d.endValid?(a=d.end[o]-d.begin[o],u=!0):n?(a=1,u=!0):i&&e>=0&&(a=d.strides[o]<0?-e:e,u=!0),u){let t;t=0===a||a<0!==d.strides[o]<0?0:Math.trunc(a/d.strides[o])+(a%d.strides[o]!==0?1:0),v.push(t)}else v.push(-1)}for(let b=0;b<d.finalShapeGatherIndices.length;++b){const t=d.finalShapeGatherIndices[b];t>=0?y.push(v[t]):t===o&&y.push(1)}const w=y.filter(((t,n)=>d.finalShapeGatherIndices[n]!==o));return{finalShapeSparse:w,finalShape:y,isIdentity:p,sliceDim0:m,isSimpleSlice:g,begin:d.begin,end:d.end,strides:d.strides}}function T(t,n){n.beginMask=0,n.endMask=0,n.shrinkAxisMask=0;let e=0;n.beginValid=null!=t.begin,n.endValid=null!=t.end,n.begin=new Array(n.dims),n.end=new Array(n.dims),n.strides=new Array(n.dims),n.finalShapeGatherIndices=[],n.finalShapeGatherIndicesSparse=[],n.inputShapeGatherIndicesSparse=new Array(n.dims);for(let r=0;r<t.dims;r++)if(1<<r&t.ellipsisMask){const o=Math.min(n.dims-(t.dims-r)+1+t.numAddAxisAfterEllipsis,n.dims);for(;e<o;e++)n.begin[e]=0,n.end[e]=0,n.strides[e]=1,n.beginMask|=1<<e,n.endMask|=1<<e,n.finalShapeGatherIndices.push(e),n.finalShapeGatherIndicesSparse.push(-1),n.inputShapeGatherIndicesSparse[e]=r}else if(1<<r&t.newAxisMask)n.finalShapeGatherIndices.push(o),n.finalShapeGatherIndicesSparse.push(-1);else{if(e===n.begin.length)throw Error(`Index out of range using input dim ${e}; input has only ${n.dims} dims, ${n.begin.length}.`);null!=t.begin&&(n.begin[e]=t.begin[r]),null!=t.end&&(n.end[e]=t.end[r]),n.strides[e]=t.strides[r],t.beginMask&1<<r&&(n.beginMask|=1<<e),t.endMask&1<<r&&(n.endMask|=1<<e),t.shrinkAxisMask&1<<r?(n.finalShapeGatherIndices.push(s),n.finalShapeGatherIndicesSparse.push(-1),n.shrinkAxisMask|=1<<e):(n.finalShapeGatherIndices.push(e),n.finalShapeGatherIndicesSparse.push(r)),n.inputShapeGatherIndicesSparse[e]=r,e++}}function x(t,n,e,r,o,s){if(o[n])return e>0?s[n]:s[n+1&1];{const n=t<0?r+t:t;return n<s[0]?s[0]:n>s[1]?s[1]:n}}},35040:function(t,n,e){e.d(n,{n:function(){return u}});var r=e(57260),o=e(15441),s=e(28189),i=e(70929);
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
function a(t){const n=(0,s.YT)(t,"input","imag"),e={input:n};return r.T2.runKernel(o.dv,e)}const u=(0,i.op)({imag_:a})},35287:function(t,n,e){e.d(n,{AS:function(){return g},DZ:function(){return m},Gc:function(){return b},Hi:function(){return f},Hs:function(){return S},IS:function(){return c},ME:function(){return p},Ok:function(){return $},Sm:function(){return a},W4:function(){return A},aC:function(){return v},fL:function(){return l},gJ:function(){return E},gY:function(){return u},go:function(){return x},jh:function(){return w},jz:function(){return k},kB:function(){return y},m1:function(){return d},rE:function(){return T},rm:function(){return h}});var r=e(57260),o=e(46574),s=e(21722),i=e(30565);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
function a(){(0,o._K)().set("PROD",!0)}function u(){(0,o._K)().set("DEBUG",!0)}function c(){(0,o._K)().set("DEPRECATION_WARNINGS_ENABLED",!1),console.warn("TensorFlow.js deprecation warnings have been disabled.")}function l(t){(0,o._K)().getBool("DEPRECATION_WARNINGS_ENABLED")&&console.warn(t+" You can disable deprecation warnings with tf.disableDeprecationWarnings().")}function h(){r.T2.disposeVariables()}function f(){return r.T2}function d(){return r.T2.memory()}function p(t){return r.T2.profile(t)}function m(t,n){return r.T2.tidy(t,n)}function g(t){const n=(0,i.getTensorsInContainer)(t);n.forEach((t=>t.dispose()))}function v(t){return r.T2.keep(t)}function y(t){return r.T2.time(t)}function w(t){return r.T2.setBackend(t)}function b(){return r.T2.ready()}function k(){return r.T2.backendName}function T(t){r.T2.removeBackend(t)}function x(t){return r.T2.findBackend(t)}function A(t){return r.T2.findBackendFactory(t)}function E(t,n,e=1){return r.T2.registerBackend(t,n,e)}function S(){return r.T2.backend}function $(t,n){(0,o._K)().setPlatform(t,n)}(0,s.B4)(l)},37074:function(t,n,e){e.d(n,{Cf:function(){return m},Op:function(){return l},_5:function(){return u},iP:function(){return d},kr:function(){return f},rY:function(){return p},tA:function(){return h},vQ:function(){return c}});var r=e(46574),o=e(41743),s=e(73673);
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
const i=(0,o.m)("kernelRegistry",(()=>new Map)),a=(0,o.m)("gradRegistry",(()=>new Map));function u(t,n){const e=g(t,n);return i.get(e)}function c(t){return a.get(t)}function l(t){const n=i.entries(),e=[];while(1){const{done:r,value:o}=n.next();if(r)break;const[s,i]=o,[a]=s.split("_");a===t&&e.push(i)}return e}function h(t){const{kernelName:n,backendName:e}=t,r=g(n,e);i.has(r)&&s.i(`The kernel '${n}' for backend '${e}' is already registered`),i.set(r,t)}function f(t){const{kernelName:n}=t;a.has(n)&&(0,r._K)().getBool("DEBUG")&&s.i(`Overriding the gradient for '${n}'`),a.set(n,t)}function d(t,n){const e=g(t,n);if(!i.has(e))throw new Error(`The kernel '${t}' for backend '${n}' is not registered`);i.delete(e)}function p(t){if(!a.has(t))throw new Error(`The gradient '${t}' for backend is not registered`);a.delete(t)}function m(t,n){const e=l(t);e.forEach((t=>{const e=Object.assign({},t,{backendName:n});h(e)}))}function g(t,n){return`${n}_${t}`}},37148:function(t,n,e){e.d(n,{f:function(){return c}});var r=e(57260),o=e(15441),s=e(28189),i=e(45119),a=e(70929);
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
function u(t,n){const e=(0,s.YT)(t,"real","complex"),a=(0,s.YT)(n,"imag","complex");i.O3(e.shape,a.shape,`real and imag shapes, ${e.shape} and ${a.shape}, must match in call to tf.complex().`);const u={real:e,imag:a};return r.T2.runKernel(o.pr,u)}const c=(0,a.op)({complex_:u})},37523:function(t,n,e){e.d(n,{W:function(){return c}});var r=e(57260),o=e(15441),s=e(30565),i=e(28189),a=e(70929);
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
function u(t,n){let e=(0,i.YT)(t,"a","add"),a=(0,i.YT)(n,"b","add");[e,a]=(0,s.makeTypesMatch)(e,a);const u={a:e,b:a};return r.T2.runKernel(o.OM,u)}const c=(0,a.op)({add_:u})},37558:function(t,n,e){e.d(n,{F:function(){return u}});var r=e(57260),o=e(15441),s=e(28189),i=e(70929);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
function a(t){const n=(0,s.YT)(t,"x","acosh"),e={x:n};return r.T2.runKernel(o.PH,e)}const u=(0,i.op)({acosh_:a})},40517:function(t,n,e){e.d(n,{I:function(){return u}});var r=e(57260),o=e(15441),s=e(28189),i=e(70929);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
function a(t){const n=(0,s.YT)(t,"x","expm1"),e={x:n};return r.T2.runKernel(o.fQ,e)}const u=(0,i.op)({expm1_:a})},40758:function(t,n,e){e.d(n,{H:function(){return c}});var r=e(57260),o=e(15441),s=e(28189),i=e(45119),a=e(70929);
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
function u(t,n,e){const a=(0,s.YT)(t,"x","bincount"),u=(0,s.YT)(n,"weights","bincount");i.vA("int32"===a.dtype,(()=>`Error in bincount: input dtype must be int32, but got ${a.dtype}`)),i.vA(e>=0,(()=>`size must be non-negative, but got ${e}.`)),i.vA(u.size===a.size||0===u.size,(()=>`Error in bincount: weights must have the same size as input or0-length, but got input shape: ${a.shape}, weights shape: ${u.shape}.`));const c={x:a,weights:u},l={size:e};return r.T2.runKernel(o.N4,c,l)}const c=(0,a.op)({bincount_:u})},41106:function(t,n,e){e.d(n,{w:function(){return a}});var r=e(28189),o=e(80252),s=e(70929);function i(t,n,e,s,i,a){const u=(0,r.YT)(t,"x","conv2dTranspose"),c=(0,r.YT)(n,"filter","conv2dTranspose");return(0,o.v)(e,u,c,s,i,"NHWC",a)}const a=(0,s.op)({conv2dTranspose_:i})},41361:function(t,n,e){e.d(n,{h:function(){return u}});var r=e(57260),o=e(15441),s=e(45119),i=e(70929);
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
function a(t){(0,s.vA)("complex64"===t.dtype,(()=>`The dtype for tf.spectral.fft() must be complex64 but got ${t.dtype}.`));const n={input:t};return r.T2.runKernel(o.rG,n)}const u=(0,i.op)({fft_:a})},41743:function(t,n,e){
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
let r;function o(){if(null==r){let t;if("undefined"!==typeof window)t=window;else if("undefined"!==typeof e.g)t=e.g;else if("undefined"!==typeof process)t=process;else{if("undefined"===typeof self)throw new Error("Could not find a global object");t=self}r=t}return r}function s(){const t=o();return null==t._tfGlobals&&(t._tfGlobals=new Map),t._tfGlobals}function i(t,n){const e=s();if(e.has(t))return e.get(t);{const r=n();return e.set(t,r),e.get(t)}}e.d(n,{L:function(){return o},m:function(){return i}})},41890:function(t,n,e){e.d(n,{x:function(){return u}});var r=e(57260),o=e(15441),s=e(70929),i=e(62302);
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
function a(t,n,e,s,a,u=[1,1],c){let l=t;3===t.rank&&(l=(0,i.t)(t,[1,t.shape[0],t.shape[1],t.shape[2]]));let h=n;3===h.rank&&(h=(0,i.t)(n,[1,n.shape[0],n.shape[1],n.shape[2]]));const f={x:l,dy:h},d={strides:s,pad:a,dimRoundingMode:c,dilations:u,filterShape:e};return r.T2.runKernel(o.X$,f,d)}const u=(0,s.op)({depthwiseConv2dNativeBackpropFilter_:a})},41938:function(t,n,e){e.d(n,{T:function(){return u}});var r=e(57260),o=e(15441),s=e(28189),i=e(70929);
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
function a(t,n=null,e=!1){const i=(0,s.YT)(t,"x","max"),a={x:i},u={reductionIndices:n,keepDims:e};return r.T2.runKernel(o.VA,a,u)}const u=(0,i.op)({max_:a})},42118:function(t,n,e){e.d(n,{E:function(){return l}});var r=e(57260),o=e(15441),s=e(30565),i=e(28189),a=e(62198),u=e(70929);
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
function c(t,n){let e=(0,i.YT)(t,"a","notEqual","string_or_numeric"),u=(0,i.YT)(n,"b","notEqual","string_or_numeric");[e,u]=(0,s.makeTypesMatch)(e,u),(0,a.assertAndGetBroadcastShape)(e.shape,u.shape);const c={a:e,b:u};return r.T2.runKernel(o.yl,c)}const l=(0,u.op)({notEqual_:c})},42768:function(t,n,e){e.d(n,{$:function(){return i}});var r=e(28189),o=e(45119),s=e(19171);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
function i(t,n,e){if((0,o.HO)(t),null!=n&&3!==n.length)throw new Error("tensor3d() requires shape to have three numbers");const i=(0,r.MZ)(t,e);if(3!==i.length&&1!==i.length)throw new Error("tensor3d() requires values to be number[][][] or flat/TypedArray");if(1===i.length&&null==n)throw new Error("tensor3d() requires shape to be provided when `values` are a flat array");return(0,s.Q)(t,n,i,e)}},42855:function(t,n,e){e.d(n,{U:function(){return i}});var r=e(57260),o=e(45119),s=e(37148);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
function i(t,n="float32"){if("complex64"===n){const n=i(t,"float32"),e=i(t,"float32");return(0,s.f)(n,e)}const e=(0,o.Ty)((0,o.Ze)(t),n);return r.T2.makeTensor(e,t,n)}},42954:function(t,n,e){e.d(n,{b:function(){return l}});var r=e(57260),o=e(15441),s=e(28189),i=e(45119),a=e(70929),u=e(62302);
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
function c(t,n,e=!1,a=!1){const c=(0,s.YT)(t,"images","resizeNearestNeighbor");i.vA(3===c.rank||4===c.rank,(()=>`Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank ${c.rank}.`)),i.vA(2===n.length,(()=>`Error in resizeNearestNeighbor: new shape must 2D, but got shape ${n}.`)),i.vA("float32"===c.dtype||"int32"===c.dtype,(()=>"`images` must have `int32` or `float32` as dtype")),i.vA(!1===a||!1===e,(()=>"Error in resizeNearestNeighbor: If halfPixelCenters is true, alignCorners must be false."));let l=c,h=!1;3===c.rank&&(h=!0,l=(0,u.t)(c,[1,c.shape[0],c.shape[1],c.shape[2]]));const[]=n,f={images:l},d={alignCorners:e,halfPixelCenters:a,size:n},p=r.T2.runKernel(o.jO,f,d);return h?(0,u.t)(p,[p.shape[1],p.shape[2],p.shape[3]]):p}const l=(0,a.op)({resizeNearestNeighbor_:c})},43303:function(t,n,e){
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
function r(t,n,e){const r=o(t,n,e),s=r<0?-(r+1):r;t.splice(s,0,n)}function o(t,n,e){return i(t,n,e||s)}function s(t,n){return t>n?1:t<n?-1:0}function i(t,n,e){let r=0,o=t.length,s=0,i=!1;while(r<o){s=r+(o-r>>>1);const a=e(n,t[s]);a>0?r=s+1:(o=s,i=!a)}return i?r:-r-1}
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
function a(t,n,e,r,o){return l(t,n,e,r,o,0)}function u(t,n,e,r,o,s){return l(t,n,e,r,o,0,!1,s,!0)}function c(t,n,e,r,o,s){return l(t,n,e,r,o,s,!0)}function l(t,n,e,o,s,i,a=!1,u=!1,c=!1){const l=[];for(let r=0;r<n.length;r++)n[r]>s&&l.push({score:n[r],boxIndex:r,suppressBeginIndex:0});l.sort(d);const p=i>0?-.5/i:0,m=[],g=[];while(m.length<e&&l.length>0){const n=l.pop(),{score:e,boxIndex:i,suppressBeginIndex:a}=n;if(e<s)break;let u=!1;for(let r=m.length-1;r>=a;--r){const e=h(t,i,m[r]);if(e>=o){u=!0;break}if(n.score=n.score*f(o,p,e),n.score<=s)break}n.suppressBeginIndex=m.length,u||(n.score===e?(m.push(i),g.push(n.score)):n.score>s&&r(l,n,d))}const v=m.length,y=e-v;u&&y>0&&(m.push(...new Array(y).fill(0)),g.push(...new Array(y).fill(0)));const w={selectedIndices:m};return a&&(w["selectedScores"]=g),c&&(w["validOutputs"]=v),w}function h(t,n,e){const r=t.subarray(4*n,4*n+4),o=t.subarray(4*e,4*e+4),s=Math.min(r[0],r[2]),i=Math.min(r[1],r[3]),a=Math.max(r[0],r[2]),u=Math.max(r[1],r[3]),c=Math.min(o[0],o[2]),l=Math.min(o[1],o[3]),h=Math.max(o[0],o[2]),f=Math.max(o[1],o[3]),d=(a-s)*(u-i),p=(h-c)*(f-l);if(d<=0||p<=0)return 0;const m=Math.max(s,c),g=Math.max(i,l),v=Math.min(a,h),y=Math.min(u,f),w=Math.max(v-m,0)*Math.max(y-g,0);return w/(d+p-w)}function f(t,n,e){const r=Math.exp(n*e*e);return e<=t?r:0}function d(t,n){return t.score-n.score||t.score===n.score&&n.boxIndex-t.boxIndex}e.d(n,{c7:function(){return a},ZS:function(){return u},ut:function(){return c}})},44010:function(t,n,e){e.d(n,{R:function(){return u}});var r=e(57260),o=e(15441),s=e(28189),i=e(70929);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
function a(t){const n=(0,s.YT)(t,"x","log","float32"),e={x:n};return r.T2.runKernel(o.M3,e)}const u=(0,i.op)({log_:a})},44645:function(t,n,e){e.d(n,{y:function(){return s}});var r=e(57260),o=e(15441);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
function s(t,n,e=1,s="float32"){if(0===e)throw new Error("Cannot have a step of zero");const i={start:t,stop:n,step:e,dtype:s};return r.T2.runKernel(o.Q6,{},i)}},44711:function(t,n,e){e.d(n,{v:function(){return l}});var r=e(57260),o=e(15441),s=e(28189),i=e(45119),a=e(70929),u=e(62302);
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
function c(t,n,e=!1,a=!1){const c=(0,s.YT)(t,"images","resizeBilinear");i.vA(3===c.rank||4===c.rank,(()=>`Error in resizeBilinear: x must be rank 3 or 4, but got rank ${c.rank}.`)),i.vA(2===n.length,(()=>`Error in resizeBilinear: new shape must 2D, but got shape ${n}.`)),i.vA(!1===a||!1===e,(()=>"Error in resizeBilinear: If halfPixelCenters is true, alignCorners must be false."));let l=c,h=!1;3===c.rank&&(h=!0,l=(0,u.t)(c,[1,c.shape[0],c.shape[1],c.shape[2]]));const[]=n,f={images:l},d={alignCorners:e,halfPixelCenters:a,size:n},p=r.T2.runKernel(o.hg,f,d);return h?(0,u.t)(p,[p.shape[1],p.shape[2],p.shape[3]]):p}const l=(0,a.op)({resizeBilinear_:c})},44881:function(t,n,e){e.d(n,{p:function(){return i}});var r=e(92596),o=e(70929);
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
function s(t,n=null,e=!1){return(0,r.x)(t,"euclidean",n,e)}const i=(0,o.op)({euclideanNorm_:s})},45119:function(t,n,e){
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
function r(t){let n=t.length,e=0;while(n>0)e=Math.random()*n|0,n--,a(t,n,e)}function o(t,n){if(t.length!==n.length)throw new Error(`Array sizes must match to be shuffled together First array length was ${t.length}Second array length was ${n.length}`);let e=t.length,r=0;while(e>0)r=Math.random()*e|0,e--,a(t,e,r),a(n,e,r)}function s(t,n,e){return Math.max(t,Math.min(n,e))}function i(t){return t%2===0?t:t+1}function a(t,n,e){const r=t[n];t[n]=t[e],t[e]=r}function u(t){let n=0;for(let e=0;e<t.length;e++)n+=t[e];return n}function c(t,n){const e=Math.random();return n*e+(1-e)*t}function l(t,n){let e=0;for(let r=0;r<t.length;r++){const o=Number(t[r])-Number(n[r]);e+=o*o}return e}function h(t,n){if(!t)throw new Error("string"===typeof n?n:n())}function f(t,n,e=""){h(v(t,n),(()=>e+` Shapes ${t} and ${n} must match`))}function d(t){h(null!=t,(()=>"The input to the tensor constructor must be a non-null value."))}function p(t,n=[],e=!1){if(null==n&&(n=[]),Array.isArray(t)||_(t)&&!e)for(let r=0;r<t.length;++r)p(t[r],n,e);else n.push(t);return n}function m(t){if(0===t.length)return 1;let n=t[0];for(let e=1;e<t.length;e++)n*=t[e];return n}function g(t){return 0===t.length}function v(t,n){if(t===n)return!0;if(null==t||null==n)return!1;if(t.length!==n.length)return!1;for(let e=0;e<t.length;e++)if(t[e]!==n[e])return!1;return!0}function y(t){return t%1===0}function w(t){if(null!=Math.tanh)return Math.tanh(t);if(t===1/0)return 1;if(t===-1/0)return-1;{const n=Math.exp(2*t);return(n-1)/(n+1)}}function b(t){const n=Math.ceil(Math.sqrt(t));return[n,Math.ceil(t/n)]}function k(t){const n=new Uint32Array(t);for(let e=0;e<t;++e)n[e]=e;return r(n),n}function T(t,n){return n<=t.length?t:t+" ".repeat(n-t.length)}function x(t,n=t=>0,e){return new Promise(((r,o)=>{let s=0;const i=()=>{if(t())return void r();s++;const a=n(s);null!=e&&s>=e?o():setTimeout(i,a)};i()}))}function A(t,n){let e=1,r=-1;for(let s=0;s<t.length;++s)if(t[s]>=0)e*=t[s];else if(-1===t[s]){if(-1!==r)throw Error(`Shapes can only have 1 implicit size. Found -1 at dim ${r} and dim ${s}`);r=s}else if(t[s]<0)throw Error(`Shapes can not be < 0. Found ${t[s]} at dim ${s}`);if(-1===r){if(n>0&&n!==e)throw Error(`Size(${n}) must match the product of shape ${t}`);return t}if(0===e)throw Error(`Cannot infer the missing size in [${t}] when there are 0 elements`);if(n%e!==0)throw Error(`The implicit shape can't be a fractional number. Got ${n} / ${e}`);const o=t.slice();return o[r]=n/e,o}function E(t,n){const e=n.length;return t=null==t?n.map(((t,n)=>n)):[].concat(t),h(t.every((t=>t>=-e&&t<e)),(()=>`All values in axis param must be in range [-${e}, ${e}) but got axis ${t}`)),h(t.every((t=>y(t))),(()=>`All values in axis param must be integers but got axis ${t}`)),t.map((t=>t<0?e+t:t))}function S(t,n){const e=[],r=[],o=null!=n&&Array.isArray(n)&&0===n.length,s=null==n||o?null:E(n,t).sort();let i=0;for(let a=0;a<t.length;++a){if(null!=s){if(s[i]===a&&1!==t[a])throw new Error(`Can't squeeze axis ${a} since its dim '${t[a]}' is not 1`);(null==s[i]||s[i]>a)&&1===t[a]&&(e.push(t[a]),r.push(a)),s[i]<=a&&i++}1!==t[a]&&(e.push(t[a]),r.push(a))}return{newShape:e,keptDims:r}}function $(t,n){let e=null;if(null==t||"float32"===t)e=new Float32Array(n);else if("int32"===t)e=new Int32Array(n);else{if("bool"!==t)throw new Error(`Unknown data type ${t}`);e=new Uint8Array(n)}return e}function I(t,n){let e=null;if(null==t||"float32"===t)e=new Float32Array(n);else if("int32"===t)e=new Int32Array(n);else if("bool"===t)e=new Uint8Array(n);else{if("string"!==t)throw new Error(`Unknown data type ${t}`);e=new Array(n)}return e}function N(t,n){for(let e=0;e<t.length;e++){const r=t[e];if(isNaN(r)||!isFinite(r))throw Error(`A tensor of type ${n} being uploaded contains ${r}.`)}}function D(t){return"bool"===t||"complex64"===t||"float32"===t||"int32"===t||"string"===t}function M(t,n){return"complex64"!==n&&(("float32"!==n||"complex64"===t)&&(("int32"!==n||"float32"===t||"complex64"===t)&&("bool"!==n||"bool"!==t)))}function _(t){return t instanceof Float32Array||t instanceof Int32Array||t instanceof Uint8Array||t instanceof Uint8ClampedArray}function F(t){if("float32"===t||"int32"===t)return 4;if("complex64"===t)return 8;if("bool"===t)return 1;throw new Error(`Unknown dtype ${t}`)}function R(t){if(null==t)return 0;let n=0;return t.forEach((t=>n+=t.length)),n}function B(t){return"string"===typeof t||t instanceof String}function Y(t){return"boolean"===typeof t}function P(t){return"number"===typeof t}function C(t){return Array.isArray(t)?C(t[0]):t instanceof Float32Array?"float32":t instanceof Int32Array||t instanceof Uint8Array||t instanceof Uint8ClampedArray?"int32":P(t)?"float32":B(t)?"string":Y(t)?"bool":"float32"}function z(t){return!!(t&&t.constructor&&t.call&&t.apply)}function O(t,n){for(let e=n;e<t;++e)if(t%e===0)return e;return t}function L(t){const n=t.length;if(n<2)return[];const e=new Array(n-1);e[n-2]=t[n-1];for(let r=n-3;r>=0;--r)e[r]=e[r+1]*t[r+1];return e}function G(t,n,e,r=!1){const o=new Array;if(1===n.length){const s=n[0]*(r?2:1);for(let n=0;n<s;n++)o[n]=e[t+n]}else{const s=n[0],i=n.slice(1),a=i.reduce(((t,n)=>t*n))*(r?2:1);for(let n=0;n<s;n++)o[n]=G(t+n*a,i,e,r)}return o}function K(t,n,e=!1){if(0===t.length)return n[0];const r=t.reduce(((t,n)=>t*n))*(e?2:1);if(0===r)return[];if(r!==n.length)throw new Error(`[${t}] does not match the input size ${n.length}${e?" for a complex tensor":""}.`);return G(0,t,n,e)}function W(t,n){const e=j(t,n);for(let r=0;r<e.length;r++)e[r]=1;return e}function j(t,n){if(null==n||"float32"===n||"complex64"===n)return new Float32Array(t);if("int32"===n)return new Int32Array(t);if("bool"===n)return new Uint8Array(t);throw new Error(`Unknown data type ${n}`)}function q(t,n){const e=t.reduce(((t,n)=>t*n),1);if(null==n||"float32"===n)return K(t,new Float32Array(e));if("int32"===n)return K(t,new Int32Array(e));if("bool"===n)return K(t,new Uint8Array(e));throw new Error(`Unknown data type ${n}`)}function U(t){t.forEach((n=>{h(Number.isInteger(n)&&n>=0,(()=>`Tensor must have a shape comprised of positive integers but got shape [${t}].`))}))}function H(t,n,e){if(0===n)return 0;if(1===n)return t[0];let r=t[t.length-1];for(let o=0;o<t.length-1;++o)r+=e[o]*t[o];return r}function V(t,n,e){if(0===n)return[];if(1===n)return[t];const r=new Array(n);for(let o=0;o<r.length-1;++o)r[o]=Math.floor(t/e[o]),t-=r[o]*e[o];return r[r.length-1]=t,r}function Z(t){return t&&t.then&&"function"===typeof t.then}e.d(n,{Ab:function(){return I},BE:function(){return M},Bq:function(){return p},E6:function(){return y},Et:function(){return P},FZ:function(){return W},HO:function(){return d},Kg:function(){return B},Lm:function(){return Y},O3:function(){return f},P8:function(){return k},SA:function(){return U},SL:function(){return R},Sf:function(){return g},Tn:function(){return z},Ty:function(){return j},Ur:function(){return L},X$:function(){return C},XT:function(){return A},Y6:function(){return E},Ze:function(){return m},_k:function(){return V},_q:function(){return x},a0:function(){return o},av:function(){return T},c7:function(){return q},ce:function(){return $},cz:function(){return u},eV:function(){return i},gS:function(){return b},gx:function(){return S},iu:function(){return _},jv:function(){return F},k4:function(){return r},lK:function(){return O},nd:function(){return N},oO:function(){return l},qE:function(){return s},r1:function(){return v},sX:function(){return H},so:function(){return c},vA:function(){return h},wg:function(){return a},xn:function(){return D},yL:function(){return Z},ym:function(){return w},yw:function(){return K}})},45243:function(t,n,e){e.d(n,{R:function(){return u}});var r=e(57260),o=e(15441),s=e(28189),i=e(70929);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
function a(t,n,e,i,a=!1){const u=(0,s.YT)(t,"x","maxPoolWithArgmax"),c={x:u},l={filterSize:n,strides:e,pad:i,includeBatchInIndex:a},h=r.T2.runKernel(o.TL,c,l);return{result:h[0],indexes:h[1]}}const u=(0,i.op)({maxPoolWithArgmax_:a})},45702:function(t,n,e){e.d(n,{d:function(){return s}});var r=e(45119),o=e(19171);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
function s(t,n){if(((0,r.iu)(t)&&"string"!==n||Array.isArray(t))&&"complex64"!==n)throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");if("string"===n&&(0,r.iu)(t)&&!(t instanceof Uint8Array))throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`.");const e=[],s=[];return(0,o.Q)(t,e,s,n)}},45793:function(t,n,e){e.d(n,{E:function(){return a}});var r=e(57260),o=e(28189),s=e(70929);
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
function i(t){const n=(0,o.YT)(t,"x","square"),e={};return r.T2.runKernel("Square",{x:n},e)}const a=(0,s.op)({square_:i})},45894:function(t,n,e){e.d(n,{Y:function(){return u}});var r=e(57260),o=e(15441),s=e(28189),i=e(70929);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
function a(t,n,e,i,a=0,u=0,c=0,l=0,h=0){const f=(0,s.YT)(t,"x","stridedSlice","string_or_numeric"),d={x:f},p={begin:n,end:e,strides:i,beginMask:a,endMask:u,ellipsisMask:c,newAxisMask:l,shrinkAxisMask:h};return r.T2.runKernel(o.Uc,d,p)}const u=(0,i.op)({stridedSlice_:a})},46542:function(t,n,e){var r=e(4888),o=e(21722);
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
(0,o.tp)().prototype.abs=function(){return this.throwIfDisposed(),(0,r.t)(this)};var s=e(12804);
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
(0,o.tp)().prototype.acos=function(){return this.throwIfDisposed(),(0,s.H)(this)};var i=e(37558);
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
(0,o.tp)().prototype.acosh=function(){return this.throwIfDisposed(),(0,i.F)(this)};var a=e(37523);
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
(0,o.tp)().prototype.add=function(t){return this.throwIfDisposed(),(0,a.W)(this,t)};var u=e(12307);
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
(0,o.tp)().prototype.all=function(t,n){return this.throwIfDisposed(),(0,u.Q)(this,t,n)};var c=e(89326);
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
(0,o.tp)().prototype.any=function(t,n){return this.throwIfDisposed(),(0,c.b)(this,t,n)};var l=e(10897);
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
(0,o.tp)().prototype.argMax=function(t){return this.throwIfDisposed(),(0,l.F)(this,t)};var h=e(54339);
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
(0,o.tp)().prototype.argMin=function(t){return this.throwIfDisposed(),(0,h.X)(this,t)};var f=e(62302),d=e(45119);
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
(0,o.tp)().prototype.asScalar=function(){return this.throwIfDisposed(),(0,d.vA)(1===this.size,(()=>"The array must have only 1 element.")),(0,f.t)(this,[])};var p=e(29809);
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
(0,o.tp)().prototype.asType=function(t){return this.throwIfDisposed(),(0,p.w)(this,t)},
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
(0,o.tp)().prototype.as1D=function(){return this.throwIfDisposed(),(0,f.t)(this,[this.size])},
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
(0,o.tp)().prototype.as2D=function(t,n){return this.throwIfDisposed(),(0,f.t)(this,[t,n])},
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
(0,o.tp)().prototype.as3D=function(t,n,e){return this.throwIfDisposed(),(0,f.t)(this,[t,n,e])},
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
(0,o.tp)().prototype.as4D=function(t,n,e,r){return this.throwIfDisposed(),(0,f.t)(this,[t,n,e,r])},
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
(0,o.tp)().prototype.as5D=function(t,n,e,r,o){return this.throwIfDisposed(),(0,f.t)(this,[t,n,e,r,o])};var m=e(66841);
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
(0,o.tp)().prototype.asin=function(){return this.throwIfDisposed(),(0,m.q)(this)};var g=e(50269);
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
(0,o.tp)().prototype.asinh=function(){return this.throwIfDisposed(),(0,g.y)(this)};var v=e(29580);
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
(0,o.tp)().prototype.atan=function(){return this.throwIfDisposed(),(0,v.r)(this)};var y=e(21404);
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
(0,o.tp)().prototype.atan2=function(t){return this.throwIfDisposed(),(0,y.F)(this,t)};var w=e(63774);
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
(0,o.tp)().prototype.atanh=function(){return this.throwIfDisposed(),(0,w.r)(this)};var b=e(53909);(0,o.tp)().prototype.avgPool=function(t,n,e,r){return this.throwIfDisposed(),(0,b.$)(this,t,n,e,r)};var k=e(69772);
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
(0,o.tp)().prototype.batchToSpaceND=function(t,n){return this.throwIfDisposed(),(0,k.G)(this,t,n)};var T=e(251);
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
(0,o.tp)().prototype.batchNorm=function(t,n,e,r,o){return this.throwIfDisposed(),(0,T.$)(this,t,n,e,r,o)};var x=e(63567);
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
(0,o.tp)().prototype.broadcastTo=function(t){return this.throwIfDisposed(),(0,x.h)(this,t)},
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
(0,o.tp)().prototype.cast=function(t){return this.throwIfDisposed(),(0,p.w)(this,t)};var A=e(30855);
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
(0,o.tp)().prototype.ceil=function(){return this.throwIfDisposed(),(0,A.m)(this)};var E=e(96928);
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
(0,o.tp)().prototype.clipByValue=function(t,n){return this.throwIfDisposed(),(0,E.z)(this,t,n)};var S=e(25030);
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
(0,o.tp)().prototype.concat=function(t,n){return this.throwIfDisposed(),t instanceof o.qY&&(t=[t]),(0,S.x)([this,...t],n)};var $=e(3701);
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
(0,o.tp)().prototype.conv1d=function(t,n,e,r,o,s){return this.throwIfDisposed(),(0,$.k)(this,t,n,e,r,o,s)};var I=e(41106);
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
(0,o.tp)().prototype.conv2dTranspose=function(t,n,e,r,o){return this.throwIfDisposed(),(0,I.w)(this,t,n,e,r,o)};var N=e(28794);
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
(0,o.tp)().prototype.conv2d=function(t,n,e,r,o,s){return this.throwIfDisposed(),(0,N.X)(this,t,n,e,r,o,s)};var D=e(99907);
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
(0,o.tp)().prototype.cos=function(){return this.throwIfDisposed(),(0,D.g)(this)};var M=e(27451);
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
(0,o.tp)().prototype.cosh=function(){return this.throwIfDisposed(),(0,M.y)(this)};var _=e(10302);
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
(0,o.tp)().prototype.cumprod=function(t,n,e){return this.throwIfDisposed(),(0,_.L)(this,t,n,e)};var F=e(76808);
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
(0,o.tp)().prototype.cumsum=function(t,n,e){return this.throwIfDisposed(),(0,F.r)(this,t,n,e)};var R=e(31216);
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
(0,o.tp)().prototype.depthToSpace=function(t,n){return this.throwIfDisposed(),(0,R.R)(this,t,n)};var B=e(10676);
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
(0,o.tp)().prototype.depthwiseConv2d=function(t,n,e,r,o,s){return this.throwIfDisposed(),(0,B.G)(this,t,n,e,r,o,s)};var Y=e(93002);
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
(0,o.tp)().prototype.dilation2d=function(t,n,e,r,o){return this.throwIfDisposed(),(0,Y.X)(this,t,n,e,r,o)};var P=e(919);
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
(0,o.tp)().prototype.divNoNan=function(t){return this.throwIfDisposed(),(0,P.e)(this,t)};var C=e(89359);
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
(0,o.tp)().prototype.div=function(t){return this.throwIfDisposed(),(0,C.y)(this,t)};var z=e(69759);
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
(0,o.tp)().prototype.dot=function(t){return this.throwIfDisposed(),(0,z.O)(this,t)};var O=e(83416);
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
(0,o.tp)().prototype.elu=function(){return this.throwIfDisposed(),(0,O.P)(this)};var L=e(13020);
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
(0,o.tp)().prototype.equal=function(t){return this.throwIfDisposed(),(0,L.L)(this,t)};var G=e(95207);
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
(0,o.tp)().prototype.erf=function(){return this.throwIfDisposed(),(0,G.Y)(this)};var K=e(44881);
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
(0,o.tp)().prototype.euclideanNorm=function(t,n){return this.throwIfDisposed(),(0,K.p)(this,t,n)};var W=e(8631);
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
(0,o.tp)().prototype.exp=function(){return this.throwIfDisposed(),(0,W.o)(this)};var j=e(8710);
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
(0,o.tp)().prototype.expandDims=function(t){return this.throwIfDisposed(),(0,j.U)(this,t)};var q=e(40517);
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
(0,o.tp)().prototype.expm1=function(){return this.throwIfDisposed(),(0,q.I)(this)};var U=e(41361);
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
(0,o.tp)().prototype.fft=function(){return this.throwIfDisposed(),(0,U.h)(this)},
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
(0,o.tp)().prototype.flatten=function(){return this.throwIfDisposed(),(0,f.t)(this,[this.size])};var H=e(15606);
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
(0,o.tp)().prototype.floor=function(){return this.throwIfDisposed(),(0,H.R)(this)};var V=e(88991);
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
(0,o.tp)().prototype.floorDiv=function(t){return this.throwIfDisposed(),(0,V.w)(this,t)};var Z=e(48229);
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
(0,o.tp)().prototype.gather=function(t,n){return this.throwIfDisposed(),(0,Z.k)(this,t,n)};var X=e(13337);
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
(0,o.tp)().prototype.greaterEqual=function(t){return this.throwIfDisposed(),(0,X.D)(this,t)};var Q=e(62058);
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
(0,o.tp)().prototype.greater=function(t){return this.throwIfDisposed(),(0,Q.r)(this,t)};var J=e(13108);
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
(0,o.tp)().prototype.ifft=function(){return this.throwIfDisposed(),(0,J.K)(this)};var tt=e(22292);
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
(0,o.tp)().prototype.irfft=function(){return this.throwIfDisposed(),(0,tt.g)(this)};var nt=e(68318);
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
(0,o.tp)().prototype.isFinite=function(){return this.throwIfDisposed(),(0,nt.M)(this)};var et=e(33454);
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
(0,o.tp)().prototype.isInf=function(){return this.throwIfDisposed(),(0,et.E)(this)};var rt=e(6300);
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
(0,o.tp)().prototype.isNaN=function(){return this.throwIfDisposed(),(0,rt.y)(this)};var ot=e(66919);
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
(0,o.tp)().prototype.leakyRelu=function(t){return this.throwIfDisposed(),(0,ot.H)(this,t)};var st=e(56508);
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
(0,o.tp)().prototype.lessEqual=function(t){return this.throwIfDisposed(),(0,st.I)(this,t)};var it=e(61303);
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
(0,o.tp)().prototype.less=function(t){return this.throwIfDisposed(),(0,it.M)(this,t)};var at=e(93531);
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
(0,o.tp)().prototype.localResponseNormalization=function(t,n,e,r){return this.throwIfDisposed(),(0,at.K)(this,t,n,e,r)};var ut=e(95645);
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
(0,o.tp)().prototype.logSigmoid=function(){return this.throwIfDisposed(),(0,ut.n)(this)};var ct=e(97991);
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
(0,o.tp)().prototype.logSoftmax=function(t){return this.throwIfDisposed(),(0,ct.H)(this,t)};var lt=e(13330);
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
(0,o.tp)().prototype.logSumExp=function(t,n){return this.throwIfDisposed(),(0,lt.V)(this,t,n)};var ht=e(44010);
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
(0,o.tp)().prototype.log=function(){return this.throwIfDisposed(),(0,ht.R)(this)};var ft=e(12015);
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
(0,o.tp)().prototype.log1p=function(){return this.throwIfDisposed(),(0,ft.K)(this)};var dt=e(13789);
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
(0,o.tp)().prototype.logicalAnd=function(t){return this.throwIfDisposed(),(0,dt.n)(this,t)};var pt=e(89881);
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
(0,o.tp)().prototype.logicalNot=function(){return this.throwIfDisposed(),(0,pt.N)(this)};var mt=e(9879);
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
(0,o.tp)().prototype.logicalOr=function(t){return this.throwIfDisposed(),(0,mt.z)(this,t)};var gt=e(19925);
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
(0,o.tp)().prototype.logicalXor=function(t){return this.throwIfDisposed(),(0,gt.r)(this,t)};var vt=e(65703);
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
(0,o.tp)().prototype.matMul=function(t,n,e){return this.throwIfDisposed(),(0,vt.N)(this,t,n,e)};var yt=e(86999);(0,o.tp)().prototype.maxPool=function(t,n,e,r){return this.throwIfDisposed(),(0,yt.j)(this,t,n,e,r)};var wt=e(41938);
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
(0,o.tp)().prototype.max=function(t,n){return this.throwIfDisposed(),(0,wt.T)(this,t,n)};var bt=e(30178);
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
(0,o.tp)().prototype.maximum=function(t){return this.throwIfDisposed(),(0,bt.P)(this,t)};var kt=e(12611);
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
(0,o.tp)().prototype.mean=function(t,n){return this.throwIfDisposed(),(0,kt.i)(this,t,n)};var Tt=e(57436);
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
(0,o.tp)().prototype.min=function(t,n){return this.throwIfDisposed(),(0,Tt.j)(this,t,n)};var xt=e(12644);
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
(0,o.tp)().prototype.minimum=function(t){return this.throwIfDisposed(),(0,xt.B)(this,t)};var At=e(66567);
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
(0,o.tp)().prototype.mirrorPad=function(t,n){return this.throwIfDisposed(),(0,At.F)(this,t,n)};var Et=e(60152);
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
(0,o.tp)().prototype.mod=function(t){return this.throwIfDisposed(),(0,Et.z)(this,t)};var St=e(9258);
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
(0,o.tp)().prototype.mul=function(t){return this.throwIfDisposed(),(0,St.l)(this,t)};var $t=e(96522);
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
(0,o.tp)().prototype.neg=function(){return this.throwIfDisposed(),(0,$t.H)(this)};var It=e(92596);
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
(0,o.tp)().prototype.norm=function(t,n,e){return this.throwIfDisposed(),(0,It.x)(this,t,n,e)};var Nt=e(42118);
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
(0,o.tp)().prototype.notEqual=function(t){return this.throwIfDisposed(),(0,Nt.E)(this,t)};var Dt=e(11760);
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
(0,o.tp)().prototype.oneHot=function(t,n=1,e=0){return this.throwIfDisposed(),(0,Dt.M)(this,t,n,e)};var Mt=e(69885);
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
(0,o.tp)().prototype.onesLike=function(){return this.throwIfDisposed(),(0,Mt.P)(this)};var _t=e(65661);
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
(0,o.tp)().prototype.pad=function(t,n){return this.throwIfDisposed(),(0,_t.e)(this,t,n)};var Ft=e(17872);(0,o.tp)().prototype.pool=function(t,n,e,r,o,s){return this.throwIfDisposed(),(0,Ft.d)(this,t,n,e,r,o,s)};var Rt=e(98990);
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
(0,o.tp)().prototype.pow=function(t){return this.throwIfDisposed(),(0,Rt.n)(this,t)};var Bt=e(64394);
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
(0,o.tp)().prototype.prelu=function(t){return this.throwIfDisposed(),(0,Bt.N)(this,t)};var Yt=e(67771);
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
(0,o.tp)().prototype.prod=function(t,n){return this.throwIfDisposed(),(0,Yt._)(this,t,n)};var Pt=e(19870);
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
(0,o.tp)().prototype.reciprocal=function(){return this.throwIfDisposed(),(0,Pt.V)(this)};var Ct=e(90112);
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
(0,o.tp)().prototype.relu=function(){return this.throwIfDisposed(),(0,Ct.V)(this)};var zt=e(83732);
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
(0,o.tp)().prototype.relu6=function(){return this.throwIfDisposed(),(0,zt.j)(this)},
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
(0,o.tp)().prototype.reshapeAs=function(t){return this.throwIfDisposed(),(0,f.t)(this,t.shape)},
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
(0,o.tp)().prototype.reshape=function(t){return this.throwIfDisposed(),(0,f.t)(this,t)};var Ot=e(44711);
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
(0,o.tp)().prototype.resizeBilinear=function(t,n,e){return this.throwIfDisposed(),(0,Ot.v)(this,t,n,e)};var Lt=e(42954);
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
(0,o.tp)().prototype.resizeNearestNeighbor=function(t,n,e){return this.throwIfDisposed(),(0,Lt.b)(this,t,n,e)};var Gt=e(53262);
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
(0,o.tp)().prototype.reverse=function(t){return this.throwIfDisposed(),(0,Gt.B)(this,t)};var Kt=e(8775);
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
(0,o.tp)().prototype.rfft=function(){return this.throwIfDisposed(),(0,Kt.z)(this)};var Wt=e(25912);
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
(0,o.tp)().prototype.round=function(){return this.throwIfDisposed(),(0,Wt.L)(this)};var jt=e(17820);
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
(0,o.tp)().prototype.rsqrt=function(){return this.throwIfDisposed(),(0,jt.Z)(this)};var qt=e(26325);
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
(0,o.tp)().prototype.selu=function(){return this.throwIfDisposed(),(0,qt.W)(this)};var Ut=e(89986);
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
(0,o.tp)().prototype.separableConv2d=function(t,n,e,r,o,s){return this.throwIfDisposed(),(0,Ut.w)(this,t,n,e,r,o,s)};var Ht=e(28968);
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
(0,o.tp)().prototype.sigmoid=function(){return this.throwIfDisposed(),(0,Ht.r)(this)};var Vt=e(51115);
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
(0,o.tp)().prototype.sign=function(){return this.throwIfDisposed(),(0,Vt._)(this)};var Zt=e(33726);
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
(0,o.tp)().prototype.sin=function(){return this.throwIfDisposed(),(0,Zt.F)(this)};var Xt=e(58276);
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
(0,o.tp)().prototype.sinh=function(){return this.throwIfDisposed(),(0,Xt.L)(this)};var Qt=e(17986);
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
(0,o.tp)().prototype.slice=function(t,n){return this.throwIfDisposed(),(0,Qt.d)(this,t,n)};var Jt=e(26346);
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
(0,o.tp)().prototype.softmax=function(t){return this.throwIfDisposed(),(0,Jt.V)(this,t)};var tn=e(66030);
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
(0,o.tp)().prototype.softplus=function(){return this.throwIfDisposed(),(0,tn.l)(this)};var nn=e(10776);
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
(0,o.tp)().prototype.spaceToBatchND=function(t,n){return this.throwIfDisposed(),(0,nn.e)(this,t,n)};var en=e(66512);
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
(0,o.tp)().prototype.split=function(t,n){return this.throwIfDisposed(),(0,en.l)(this,t,n)};var rn=e(79348);
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
(0,o.tp)().prototype.sqrt=function(){return this.throwIfDisposed(),(0,rn.R)(this)};var on=e(45793);
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
(0,o.tp)().prototype.square=function(){return this.throwIfDisposed(),(0,on.E)(this)};var sn=e(53427);
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
(0,o.tp)().prototype.squaredDifference=function(t){return this.throwIfDisposed(),(0,sn.P)(this,t)};var an=e(5932);
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
(0,o.tp)().prototype.squeeze=function(t){return this.throwIfDisposed(),(0,an.r)(this,t)};var un=e(54268);
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
(0,o.tp)().prototype.stack=function(t,n){this.throwIfDisposed();const e=t instanceof o.qY?[this,t]:[this,...t];return(0,un.t)(e,n)};var cn=e(10700);
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
(0,o.tp)().prototype.step=function(t){return this.throwIfDisposed(),(0,cn.P)(this,t)};var ln=e(45894);
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
(0,o.tp)().prototype.stridedSlice=function(t,n,e,r,o,s,i,a){return this.throwIfDisposed(),(0,ln.Y)(this,t,n,e,r,o,s,i,a)};var hn=e(77126);
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
(0,o.tp)().prototype.sub=function(t){return this.throwIfDisposed(),(0,hn.j)(this,t)};var fn=e(83791);
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
(0,o.tp)().prototype.sum=function(t,n){return this.throwIfDisposed(),(0,fn.c)(this,t,n)};var dn=e(77823);
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
(0,o.tp)().prototype.tan=function(){return this.throwIfDisposed(),(0,dn.M)(this)};var pn=e(57311);
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
(0,o.tp)().prototype.tanh=function(){return this.throwIfDisposed(),(0,pn.y)(this)};var mn=e(64826);
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
(0,o.tp)().prototype.tile=function(t){return this.throwIfDisposed(),(0,mn.V)(this,t)},
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
(0,o.tp)().prototype.toBool=function(){return this.throwIfDisposed(),(0,p.w)(this,"bool")},
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
(0,o.tp)().prototype.toFloat=function(){return this.throwIfDisposed(),(0,p.w)(this,"float32")},
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
(0,o.tp)().prototype.toInt=function(){return this.throwIfDisposed(),(0,p.w)(this,"int32")};var gn=e(21190);
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
(0,o.tp)().prototype.topk=function(t,n){return this.throwIfDisposed(),(0,gn.r)(this,t,n)};var vn=e(7703);
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
(0,o.tp)().prototype.transpose=function(t){return this.throwIfDisposed(),(0,vn.m)(this,t)};var yn=e(73937);
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
(0,o.tp)().prototype.unique=function(t){return this.throwIfDisposed(),(0,yn.A)(this,t)};var wn=e(97706);
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
(0,o.tp)().prototype.unsortedSegmentSum=function(t,n){return this.throwIfDisposed(),(0,wn.z)(this,t,n)};var bn=e(67261);
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
(0,o.tp)().prototype.unstack=function(t){return this.throwIfDisposed(),(0,bn.K)(this,t)};var kn=e(12151);
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
(0,o.tp)().prototype.where=function(t,n){return this.throwIfDisposed(),(0,kn._)(t,this,n)};var Tn=e(55537);
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
(0,o.tp)().prototype.zerosLike=function(){return this.throwIfDisposed(),(0,Tn.P)(this)}},46545:function(t,n,e){e.d(n,{m:function(){return s}});var r=e(57260),o=e(15441);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
function s(t,n,e){if(e<=0)throw new Error("The number of values should be positive.");const s={start:t,stop:n,num:e};return r.T2.runKernel(o.mn,{},s)}},46574:function(t,n,e){e.d(n,{Km:function(){return l},OH:function(){return s},_K:function(){return c},tj:function(){return h}});var r=e(45119);
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
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
 */const o="tfjsflags";class s{constructor(t){this.global=t,this.flags={},this.flagRegistry={},this.urlFlags={},this.getQueryParams=i,this.populateURLFlags()}setPlatform(t,n){null!=this.platform&&(c().getBool("IS_TEST")||c().getBool("PROD")||console.warn(`Platform ${this.platformName} has already been set. Overwriting the platform with ${t}.`)),this.platformName=t,this.platform=n}registerFlag(t,n,e){if(this.flagRegistry[t]={evaluationFn:n,setHook:e},null!=this.urlFlags[t]){const n=this.urlFlags[t];c().getBool("IS_TEST")||c().getBool("PROD")||console.warn(`Setting feature override from URL ${t}: ${n}.`),this.set(t,n)}}async getAsync(t){return t in this.flags||(this.flags[t]=await this.evaluateFlag(t)),this.flags[t]}get(t){if(t in this.flags)return this.flags[t];const n=this.evaluateFlag(t);if((0,r.yL)(n))throw new Error(`Flag ${t} cannot be synchronously evaluated. Please use getAsync() instead.`);return this.flags[t]=n,this.flags[t]}getNumber(t){return this.get(t)}getBool(t){return this.get(t)}getFlags(){return this.flags}get features(){return this.flags}set(t,n){if(null==this.flagRegistry[t])throw new Error(`Cannot set flag ${t} as it has not been registered.`);this.flags[t]=n,null!=this.flagRegistry[t].setHook&&this.flagRegistry[t].setHook(n)}evaluateFlag(t){if(null==this.flagRegistry[t])throw new Error(`Cannot evaluate flag '${t}': no evaluation function found.`);return this.flagRegistry[t].evaluationFn()}setFlags(t){this.flags=Object.assign({},t)}reset(){this.flags={},this.urlFlags={},this.populateURLFlags()}populateURLFlags(){if("undefined"===typeof this.global||"undefined"===typeof this.global.location||"undefined"===typeof this.global.location.search)return;const t=this.getQueryParams(this.global.location.search);if(o in t){const n=t[o].split(",");n.forEach((t=>{const[n,e]=t.split(":");this.urlFlags[n]=u(n,e)}))}}}function i(t){const n={};return t.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,((t,...e)=>(a(n,e[0],e[1]),e.join("=")))),n}function a(t,n,e){t[decodeURIComponent(n)]=decodeURIComponent(e||"")}function u(t,n){if(n=n.toLowerCase(),"true"===n||"false"===n)return"true"===n;if(""+ +n===n)return+n;throw new Error(`Could not parse value flag value ${n} for flag ${t}.`)}function c(){return l}let l=null;function h(t){l=t}},47195:function(t,n,e){e.d(n,{$Q:function(){return b},Dh:function(){return y},E6:function(){return s},G0:function(){return w},G8:function(){return h},YQ:function(){return o},l5:function(){return i},p$:function(){return u},s_:function(){return k},uf:function(){return a}});var r=e(45119);
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
 */function o(t,n,e,r,o="NHWC",s){const i=t[3],u=[...n,i],c=b(o);return a(t,u,e,s,r,null,null,c)}function s(t,n,e,r,o,s,i="channelsLast"){const[u,c]=f(n);let l;if("channelsLast"===i)l=[u,c,t[3],t[3]];else{if("channelsFirst"!==i)throw new Error(`Unknown dataFormat ${i}`);l=[u,c,t[1],t[1]]}return a(t,l,e,r,o,s,!1,i)}function i(t,n,e,r,o,s,i="NDHWC"){const[a,c,l]=d(n);let h,f;if("NDHWC"===i)f="channelsLast",h=[a,c,l,t[4],t[4]];else{if("NCDHW"!==i)throw new Error(`Unknown dataFormat ${i}`);f="channelsFirst",h=[a,c,l,t[1],t[1]]}return u(t,h,e,r,o,!1,f,s)}function a(t,n,e,r,o,s,i=!1,a="channelsLast"){let[u,c,l,h]=[-1,-1,-1,-1];if("channelsLast"===a)[u,c,l,h]=t;else{if("channelsFirst"!==a)throw new Error(`Unknown dataFormat ${a}`);[u,h,c,l]=t}const[d,g,,v]=n,[y,w]=f(e),[b,k]=f(r),T=p(d,b),x=p(g,k),{padInfo:A,outHeight:E,outWidth:S}=m(o,c,l,y,w,T,x,s,a),$=i?v*h:v;let I;return"channelsFirst"===a?I=[u,$,E,S]:"channelsLast"===a&&(I=[u,E,S,$]),{batchSize:u,dataFormat:a,inHeight:c,inWidth:l,inChannels:h,outHeight:E,outWidth:S,outChannels:$,padInfo:A,strideHeight:y,strideWidth:w,filterHeight:d,filterWidth:g,effectiveFilterHeight:T,effectiveFilterWidth:x,dilationHeight:b,dilationWidth:k,inShape:t,outShape:I,filterShape:n}}function u(t,n,e,r,o,s=!1,i="channelsLast",a){let[u,c,l,h,f]=[-1,-1,-1,-1,-1];if("channelsLast"===i)[u,c,l,h,f]=t;else{if("channelsFirst"!==i)throw new Error(`Unknown dataFormat ${i}`);[u,f,c,l,h]=t}const[m,v,y,,w]=n,[b,k,T]=d(e),[x,A,E]=d(r),S=p(m,x),$=p(v,A),I=p(y,E),{padInfo:N,outDepth:D,outHeight:M,outWidth:_}=g(o,c,l,h,b,k,T,S,$,I,a),F=s?w*f:w;let R;return"channelsFirst"===i?R=[u,F,D,M,_]:"channelsLast"===i&&(R=[u,D,M,_,F]),{batchSize:u,dataFormat:i,inDepth:c,inHeight:l,inWidth:h,inChannels:f,outDepth:D,outHeight:M,outWidth:_,outChannels:F,padInfo:N,strideDepth:b,strideHeight:k,strideWidth:T,filterDepth:m,filterHeight:v,filterWidth:y,effectiveFilterDepth:S,effectiveFilterHeight:$,effectiveFilterWidth:I,dilationDepth:x,dilationHeight:A,dilationWidth:E,inShape:t,outShape:R,filterShape:n}}function c(t,n,e,r,o){null==r&&(r=h(t,n,e));const s=t[0],i=t[1],a=v((s-n+2*r)/e+1,o),u=v((i-n+2*r)/e+1,o);return[a,u]}function l(t,n,e,r,o,s){null==o&&(o=h(t,n,r));const i=t[0],a=t[1],u=t[2],c=v((i-n+2*o)/r+1,s),l=v((a-n+2*o)/r+1,s),f=v((u-n+2*o)/r+1,s);return[c,l,f,e]}function h(t,n,e,r=1){const o=p(n,r);return Math.floor((t[0]*(e-1)-e+o)/2)}function f(t){return"number"===typeof t?[t,t,t]:2===t.length?[t[0],t[1],1]:t}function d(t){return"number"===typeof t?[t,t,t]:t}function p(t,n){return n<=1?t:t+(t-1)*(n-1)}function m(t,n,e,r,o,s,i,a,u){let l,h,f;if("number"===typeof t){const o=0===t?"VALID":"NUMBER";l={top:t,bottom:t,left:t,right:t,type:o};const i=c([n,e],s,r,t,a);h=i[0],f=i[1]}else if("same"===t){h=Math.ceil(n/r),f=Math.ceil(e/o);const t=Math.max(0,(h-1)*r+s-n),a=Math.max(0,(f-1)*o+i-e),u=Math.floor(t/2),c=t-u,d=Math.floor(a/2),p=a-d;l={top:u,bottom:c,left:d,right:p,type:"SAME"}}else if("valid"===t)l={top:0,bottom:0,left:0,right:0,type:"VALID"},h=Math.ceil((n-s+1)/r),f=Math.ceil((e-i+1)/o);else{if("object"!==typeof t)throw Error(`Unknown padding parameter: ${t}`);{const c="channelsLast"===u?t[1][0]:t[2][0],d="channelsLast"===u?t[1][1]:t[2][1],p="channelsLast"===u?t[2][0]:t[3][0],m="channelsLast"===u?t[2][1]:t[3][1],g=0===c&&0===d&&0===p&&0===m?"VALID":"EXPLICIT";l={top:c,bottom:d,left:p,right:m,type:g},h=v((n-s+c+d)/r+1,a),f=v((e-i+p+m)/o+1,a)}}return{padInfo:l,outHeight:h,outWidth:f}}function g(t,n,e,r,o,s,i,a,u,c,h){let f,d,p,m;if("number"===typeof t){const s=0===t?"VALID":"NUMBER";f={top:t,bottom:t,left:t,right:t,front:t,back:t,type:s};const i=l([n,e,r,1],a,1,o,t,h);d=i[0],p=i[1],m=i[2]}else if("same"===t){d=Math.ceil(n/o),p=Math.ceil(e/s),m=Math.ceil(r/i);const t=(d-1)*o+a-n,l=(p-1)*s+u-e,h=(m-1)*i+c-r,g=Math.floor(t/2),v=t-g,y=Math.floor(l/2),w=l-y,b=Math.floor(h/2),k=h-b;f={top:y,bottom:w,left:b,right:k,front:g,back:v,type:"SAME"}}else{if("valid"!==t)throw Error(`Unknown padding parameter: ${t}`);f={top:0,bottom:0,left:0,right:0,front:0,back:0,type:"VALID"},d=Math.ceil((n-a+1)/o),p=Math.ceil((e-u+1)/s),m=Math.ceil((r-c+1)/i)}return{padInfo:f,outDepth:d,outHeight:p,outWidth:m}}function v(t,n){if(!n)return Math.trunc(t);switch(n){case"round":return Math.round(t);case"ceil":return Math.ceil(t);case"floor":return Math.floor(t);default:throw new Error(`Unknown roundingMode ${n}`)}}function y(t){const[n,e,r]=f(t);return 1===n&&1===e&&1===r}function w(t,n){return y(t)||y(n)}function b(t){if("NHWC"===t)return"channelsLast";if("NCHW"===t)return"channelsFirst";throw new Error(`Unknown dataFormat ${t}`)}function k(t,n,e){if(null!=e){if("string"===typeof n)throw Error(`Error in ${t}: pad must be an integer when using dimRoundingMode ${e} but got pad ${n}.`);if("number"===typeof n)r.vA(r.E6(n),(()=>`Error in ${t}: pad must be an integer when using dimRoundingMode ${e} but got pad ${n}.`));else{if("object"!==typeof n)throw Error(`Error in ${t}: Unknown padding parameter: ${n}`);n.forEach((n=>{n.forEach((n=>{r.vA(r.E6(n),(()=>`Error in ${t}: pad must be an integer when using dimRoundingMode ${e} but got pad ${n}.`))}))}))}}}},48229:function(t,n,e){e.d(n,{k:function(){return u}});var r=e(57260),o=e(15441),s=e(28189),i=e(70929);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
function a(t,n,e=0,i=0){const a=(0,s.YT)(t,"x","gather"),u=(0,s.YT)(n,"indices","gather","int32"),c={x:a,indices:u},l={axis:e,batchDims:i};return r.T2.runKernel(o.mx,c,l)}const u=(0,i.op)({gather_:a})},50269:function(t,n,e){e.d(n,{y:function(){return u}});var r=e(57260),o=e(15441),s=e(28189),i=e(70929);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
function a(t){const n=(0,s.YT)(t,"x","asinh"),e={x:n};return r.T2.runKernel(o.ep,e)}const u=(0,i.op)({asinh_:a})},51115:function(t,n,e){e.d(n,{_:function(){return u}});var r=e(57260),o=e(15441),s=e(28189),i=e(70929);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
function a(t){const n=(0,s.YT)(t,"x","sign"),e={x:n};return r.T2.runKernel(o.YV,e)}const u=(0,i.op)({sign_:a})},52046:function(t,n,e){
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
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
var r,o,s,i,a;e.d(n,{Tu:function(){return c},ch:function(){return l},rg:function(){return r}}),function(t){t["R0"]="R0",t["R1"]="R1",t["R2"]="R2",t["R3"]="R3",t["R4"]="R4",t["R5"]="R5",t["R6"]="R6"}(r||(r={})),function(t){t["float32"]="float32",t["int32"]="int32",t["bool"]="int32",t["complex64"]="complex64"}(o||(o={})),function(t){t["float32"]="float32",t["int32"]="int32",t["bool"]="bool",t["complex64"]="complex64"}(s||(s={})),function(t){t["float32"]="float32",t["int32"]="float32",t["bool"]="float32",t["complex64"]="complex64"}(i||(i={})),function(t){t["float32"]="complex64",t["int32"]="complex64",t["bool"]="complex64",t["complex64"]="complex64"}(a||(a={}));const u={float32:i,int32:o,bool:s,complex64:a};function c(t,n){if("string"===t||"string"===n){if("string"===t&&"string"===n)return"string";throw new Error(`Can not upcast ${t} with ${n}`)}return u[t][n]}function l(t){return c(t,"int32")}},53262:function(t,n,e){e.d(n,{B:function(){return u}});var r=e(57260),o=e(15441),s=e(28189),i=e(70929);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
function a(t,n){const e=(0,s.YT)(t,"x","reverse"),i={x:e},a={dims:n};return r.T2.runKernel(o.D7,i,a)}const u=(0,i.op)({reverse_:a})},53427:function(t,n,e){e.d(n,{P:function(){return l}});var r=e(57260),o=e(15441),s=e(30565),i=e(28189),a=e(62198),u=e(70929);
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
function c(t,n){let e=(0,i.YT)(t,"a","squaredDifference"),u=(0,i.YT)(n,"b","squaredDifference");[e,u]=(0,s.makeTypesMatch)(e,u),(0,a.assertAndGetBroadcastShape)(e.shape,u.shape);const c={a:e,b:u},l={};return r.T2.runKernel(o.Dd,c,l)}const l=(0,u.op)({squaredDifference_:c})},53855:function(t,n,e){e.d(n,{s:function(){return f}});var r=e(57260),o=e(15441),s=e(28189),i=e(45119),a=e(47195),u=e(29809),c=e(70929),l=e(62302);
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
function h(t,n,e,c,h,f="NDHWC"){const d=(0,s.YT)(t,"x","avgPool3d","float32");let p=d,m=!1;4===d.rank&&(m=!0,p=(0,l.t)(d,[1,d.shape[0],d.shape[1],d.shape[2],d.shape[3]])),i.vA(5===p.rank,(()=>`Error in avgPool3d: x must be rank 5 but got rank ${p.rank}.`)),i.vA("NDHWC"===f,(()=>`Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of ${f}`)),(0,a.s_)("avgPool3d",c,h);const g={x:p},v={filterSize:n,strides:e,pad:c,dimRoundingMode:h,dataFormat:f};let y=r.T2.runKernel(o.cS,g,v);return y=(0,u.w)(y,p.dtype),m?(0,l.t)(y,[y.shape[1],y.shape[2],y.shape[3],y.shape[4]]):y}const f=(0,c.op)({avgPool3d_:h})},53909:function(t,n,e){e.d(n,{$:function(){return f}});var r=e(57260),o=e(15441),s=e(28189),i=e(45119),a=e(29809),u=e(47195),c=e(70929),l=e(62302);
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
function h(t,n,e,c,h){const f=(0,s.YT)(t,"x","avgPool","float32"),d=1;i.vA(u.G0(e,d),(()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${e} and dilations '${d}'`));let p=f,m=!1;3===f.rank&&(m=!0,p=(0,l.t)(f,[1,f.shape[0],f.shape[1],f.shape[2]])),i.vA(4===p.rank,(()=>`Error in avgPool: x must be rank 4 but got rank ${p.rank}.`)),u.s_("avgPool",c,h);const g={x:p},v={filterSize:n,strides:e,pad:c,dimRoundingMode:h};let y=r.T2.runKernel(o.ho,g,v);return y=(0,a.w)(y,f.dtype),m?(0,l.t)(y,[y.shape[1],y.shape[2],y.shape[3]]):y}const f=(0,c.op)({avgPool_:h})},54268:function(t,n,e){e.d(n,{t:function(){return c}});var r=e(57260),o=e(15441),s=e(28189),i=e(45119),a=e(70929);
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
function u(t,n=0){const e=(0,s.j1)(t,"tensors","stack","string_or_numeric");i.vA(e.length>=1,(()=>"Pass at least one tensor to tf.stack")),e.length>0&&i.vA(n<=e[0].rank,(()=>"Axis must be <= rank of the tensor"));const a=e,u={axis:n};return r.T2.runKernel(o.mM,a,u)}const c=(0,a.op)({stack_:u})},54339:function(t,n,e){e.d(n,{X:function(){return u}});var r=e(57260),o=e(15441),s=e(28189),i=e(70929);
/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
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
function a(t,n=0){const e=(0,s.YT)(t,"x","argMin"),i={x:e},a={axis:n};return r.T2.runKernel(o.p_,i,a)}const u=(0,i.op)({argMin_:a})},54411:function(t,n,e){e.d(n,{Y:function(){return o}});var r=e(448);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function o(t,n){const e=[];for(let r=0;r<n.length;r++)n[r]&&e.push(r);const o=(0,r.r)(t,"int32"),s=(0,r.r)([e.length,t.length],"int32");for(let r=0;r<e.length;r++){const n=o.indexToLoc(e[r]),i=r*t.length;s.values.set(n,i)}return s.toTensor()}},55537:function(t,n,e){e.d(n,{P:function(){return u}});var r=e(57260),o=e(15441),s=e(28189),i=e(70929);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
function a(t){const n=(0,s.YT)(t,"x","zerosLike"),e={x:n};return r.T2.runKernel(o.xJ,e)}const u=(0,i.op)({zerosLike_:a})},55598:function(t,n,e){e.d(n,{S:function(){return u}});var r=e(57260),o=e(15441),s=e(28189),i=e(70929);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
function a(t,n){const e=(0,s.YT)(n,"indices","gatherND","int32"),i=(0,s.YT)(t,"x","gatherND","string_or_numeric"),a={params:i,indices:e};return r.T2.runKernel(o.O4,a)}const u=(0,i.op)({gatherND_:a})},56508:function(t,n,e){e.d(n,{I:function(){return l}});var r=e(57260),o=e(15441),s=e(30565),i=e(28189),a=e(62198),u=e(70929);
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
function c(t,n){let e=(0,i.YT)(t,"a","lessEqual","string_or_numeric"),u=(0,i.YT)(n,"b","lessEqual","string_or_numeric");[e,u]=(0,s.makeTypesMatch)(e,u),(0,a.assertAndGetBroadcastShape)(e.shape,u.shape);const c={a:e,b:u};return r.T2.runKernel(o.Cw,c)}const l=(0,u.op)({lessEqual_:c})},57260:function(t,n,e){e.d(n,{T2:function(){return x},Ye:function(){return T}});var r=e(15149),o=e(46574),s=e(41743),i=e(15441),a=e(37074),u=e(73673),c=e(31259),l=e(45119);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
class h{constructor(t,n){this.backendTimer=t,this.logger=n,null==n&&(this.logger=new d)}profileKernel(t,n,e){let r;const s=()=>{r=e()};let i;const a=c.now();if(this.backendTimer.timerAvailable())i=this.backendTimer.time(s);else{s();for(const t of r)t.dataSync();i=Promise.resolve({kernelMs:c.now()-a})}if((0,o._K)().getBool("CHECK_COMPUTATION_FOR_ERRORS"))for(let o=0;o<r.length;o++){const n=r[o];n.data().then((e=>{f(e,n.dtype,t)}))}const u={kernelName:t,outputs:r,inputs:n,timeMs:i.then((t=>t.kernelMs)),extraInfo:i.then((t=>null!=t.getExtraProfileInfo?t.getExtraProfileInfo():""))};return u}logKernelProfile(t){const{kernelName:n,outputs:e,timeMs:r,inputs:o,extraInfo:s}=t;e.forEach((t=>{Promise.all([t.data(),r,s]).then((e=>{this.logger.logKernelProfile(n,t,e[0],e[1],o,e[2])}))}))}}function f(t,n,e){if("float32"!==n)return!1;for(let r=0;r<t.length;r++){const n=t[r];if(isNaN(n)||!isFinite(n))return console.warn(`Found ${n} in the result of '${e}'`),!0}return!1}class d{logKernelProfile(t,n,e,r,o,s){const i="number"===typeof r?l.av(`${r}ms`,9):r["error"],a=l.av(t,25),u=n.rank,c=n.size,h=l.av(n.shape.toString(),14);let f="";for(const l in o){const t=o[l];if(null!=t){const e=t.shape||n.shape,r=e.length;f+=`${l}: ${r}D ${r>0?e:""} `}}console.log(`%c${a}\t%c${i}\t%c${u}D ${h}\t%c${c}\t%c${f}\t%c${s}`,"font-weight:bold","color:red","color:blue","color: orange","color: green","color: steelblue")}}
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
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
function p(t,n,e){const r={},o={};for(let u=0;u<n.length;u++)r[n[u].id]=!0;for(let u=0;u<t.length;u++){const e=t[u],s=e.inputs;for(const t in s){const i=s[t];let a=!1;for(let t=0;t<n.length;t++)if(r[i.id]){e.outputs.forEach((t=>r[t.id]=!0)),a=!0,o[e.id]=!0;break}if(a)break}}const s={};s[e.id]=!0;const i={};for(let u=t.length-1;u>=0;u--){const n=t[u],e=n.inputs;for(let t=0;t<n.outputs.length;t++)if(s[n.outputs[t].id]){for(const t in e)s[e[t].id]=!0,i[n.id]=!0;break}}const a=[];for(let u=0;u<t.length;u++){const n=t[u];if(o[n.id]&&i[n.id]){const t={};for(const o in n.inputs){const e=n.inputs[o];r[e.id]&&(t[o]=e)}const e=Object.assign({},n);e.inputs=t,e.outputs=n.outputs,a.push(e)}}return a}function m(t,n,e,r){for(let o=n.length-1;o>=0;o--){const s=n[o],i=[];if(s.outputs.forEach((n=>{const e=t[n.id];null!=e?i.push(e):i.push(null)})),null==s.gradient)throw new Error(`Cannot compute gradient: gradient function not found for ${s.kernelName}.`);const a=s.gradient(i);for(const n in s.inputs){if(!(n in a))throw new Error(`Cannot backprop through input ${n}. Available gradients found: ${Object.keys(a)}.`);const o=e((()=>a[n]()));if("float32"!==o.dtype)throw new Error(`Error in gradient for op ${s.kernelName}. The gradient of input ${n} must have 'float32' dtype, but has '${o.dtype}'`);const i=s.inputs[n];if(!l.r1(o.shape,i.shape))throw new Error(`Error in gradient for op ${s.kernelName}. The gradient of input '${n}' has shape '${o.shape}', which does not match the shape of the input '${i.shape}'`);if(null==t[i.id])t[i.id]=o;else{const n=t[i.id];t[i.id]=r(n,o),n.dispose()}}}}var g=e(21722),v=e(30565);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
function y(t){return null!=t.kernelName}class w{constructor(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null,get kernelNames(){return Array.from(new Set(this.kernels.map((t=>t.name))))}}}dispose(){for(const t in this.registeredVariables)this.registeredVariables[t].dispose()}}class b{constructor(t){this.ENV=t,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new w}async ready(){if(null!=this.pendingBackendInit)return this.pendingBackendInit.then((()=>{}));if(null!=this.backendInstance)return;const t=this.getSortedBackends();for(let n=0;n<t.length;n++){const e=t[n],r=await this.initializeBackend(e).success;if(r)return void await this.setBackend(e)}throw new Error("Could not initialize any backends, all backend initializations failed.")}get backend(){if(null!=this.pendingBackendInit)throw new Error(`Backend '${this.backendName}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);if(null==this.backendInstance){const{name:t,asyncInit:n}=this.initializeBackendsAndReturnBest();if(n)throw new Error(`The highest priority backend '${t}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);this.setBackend(t)}return this.backendInstance}backendNames(){return Object.keys(this.registryFactory)}findBackend(t){if(!(t in this.registry)){if(!(t in this.registryFactory))return null;{const{asyncInit:n}=this.initializeBackend(t);if(n)return null}}return this.registry[t]}findBackendFactory(t){return t in this.registryFactory?this.registryFactory[t].factory:null}registerBackend(t,n,e=1){return t in this.registryFactory?(u.i(`${t} backend was already registered. Reusing existing backend factory.`),!1):(this.registryFactory[t]={factory:n,priority:e},!0)}async setBackend(t){if(null==this.registryFactory[t])throw new Error(`Backend name '${t}' not found in registry`);if(this.backendName=t,null==this.registry[t]){this.backendInstance=null;const{success:n,asyncInit:e}=this.initializeBackend(t),r=e?await n:n;if(!r)return!1}return this.backendInstance=this.registry[t],this.setupRegisteredKernels(),this.profiler=new h(this.backendInstance),!0}setupRegisteredKernels(){const t=(0,a.Op)(this.backendName);t.forEach((t=>{null!=t.setupFunc&&t.setupFunc(this.backendInstance)}))}disposeRegisteredKernels(t){const n=(0,a.Op)(t);n.forEach((n=>{null!=n.disposeFunc&&n.disposeFunc(this.registry[t])}))}initializeBackend(t){const n=this.registryFactory[t];if(null==n)throw new Error(`Cannot initialize backend ${t}, no registration found.`);try{const e=n.factory();if(!e||e instanceof r.uI||"function"!==typeof e.then)return this.registry[t]=e,{success:!0,asyncInit:!1};{const n=++this.pendingBackendInitId,r=e.then((e=>!(n<this.pendingBackendInitId)&&(this.registry[t]=e,this.pendingBackendInit=null,!0))).catch((e=>(n<this.pendingBackendInitId||(this.pendingBackendInit=null,u.i(`Initialization of backend ${t} failed`),u.i(e.stack||e.message)),!1)));return this.pendingBackendInit=r,{success:r,asyncInit:!0}}}catch(e){return u.i(`Initialization of backend ${t} failed`),u.i(e.stack||e.message),{success:!1,asyncInit:!1}}}removeBackend(t){if(!(t in this.registryFactory))throw new Error(`${t} backend not found in registry`);this.backendName===t&&null!=this.pendingBackendInit&&this.pendingBackendInitId++,t in this.registry&&(this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t]),delete this.registryFactory[t],this.backendName===t&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)}getSortedBackends(){if(0===Object.keys(this.registryFactory).length)throw new Error("No backend found in registry.");return Object.keys(this.registryFactory).sort(((t,n)=>this.registryFactory[n].priority-this.registryFactory[t].priority))}initializeBackendsAndReturnBest(){const t=this.getSortedBackends();for(let n=0;n<t.length;n++){const e=t[n],{success:r,asyncInit:o}=this.initializeBackend(e);if(o||r)return{name:e,asyncInit:o}}throw new Error("Could not initialize any backends, all backend initializations failed.")}moveData(t,n){const e=this.state.tensorInfo.get(n),r=e.backend,o=this.readSync(n),s=r.refCount(n);r.disposeData(n,!0),e.backend=t,t.move(n,o,e.shape,e.dtype,s),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++}tidy(t,n){let e,r=null;if(null==n){if("function"!==typeof t)throw new Error("Please provide a function to tidy()");n=t}else{if("string"!==typeof t&&!(t instanceof String))throw new Error("When calling with two arguments, the first argument to tidy() must be a string");if("function"!==typeof n)throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");r=t}return this.scopedRun((()=>this.startScope(r)),(()=>this.endScope(e)),(()=>(e=n(),e instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),e)))}scopedRun(t,n,e){t();try{const t=e();return n(),t}catch(r){throw n(),r}}nextTensorId(){return b.nextTensorId++}nextVariableId(){return b.nextVariableId++}clone(t){const n=x.runKernel(i.lz,{x:t}),e={x:t},r=t=>({x:()=>{const n="float32",e={x:t},r={dtype:n};return x.runKernel(i.KX,e,r)}}),o=[];return this.addTapeNode(this.state.activeScope.name,e,[n],r,o,{}),n}runKernel(t,n,e){null==this.backendName&&this.backend;const r=null!=(0,a._5)(t,this.backendName);if(!r)throw new Error(`Kernel '${t}' not registered for backend '${this.backendName}'`);return this.runKernelFunc({kernelName:t,inputs:n,attrs:e})}shouldCheckForMemLeaks(){return this.ENV.getBool("IS_TEST")}checkKernelForMemLeak(t,n,e){const r=this.backend.numDataIds();let o=0;e.forEach((t=>{o+="complex64"===t.dtype?3:1}));const s=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],i=r-n-o-s;if(i>0)throw new Error(`Backend '${this.backendName}' has an internal memory leak (${i} data ids) after running '${t}'`)}runKernelFunc(t){let n,e=[];const r=this.isTapeOn(),o=this.state.numBytes,s=this.state.numTensors;let i,u;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0),null==this.backendName&&this.backend;const c=y(t)?t.kernelName:null!=this.state.activeScope?this.state.activeScope.name:"";if(y(t)){const{kernelName:n,inputs:o,attrs:s}=t;null==this.backendName&&this.backend;const c=(0,a._5)(n,this.backendName);l.vA(null!=c,(()=>`Cannot find registered kernel '${n}' for backend '${this.backendName}'`)),i=()=>{const t=this.backend.numDataIds();u=c.kernelFunc({inputs:o,attrs:s,backend:this.backend});const i=Array.isArray(u)?u:[u];this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(n,t,i);const a=i.map((t=>null!=t.rank?t:this.makeTensorFromTensorInfo(t)));if(r){const t=this.getTensorsForGradient(n,o,a);e=this.saveTensorsForBackwardMode(t)}return a}}else{const{forwardFunc:n}=t,o=t=>{r&&(e=t.map((t=>this.keep(this.clone(t)))))};i=()=>{const t=this.backend.numDataIds();u=this.tidy((()=>n(this.backend,o)));const e=Array.isArray(u)?u:[u];return this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(c,t,e),e}}const{inputs:h,attrs:f}=t,d=y(t)?null:t.backwardsFunc;let p;return this.scopedRun((()=>this.state.kernelDepth++),(()=>this.state.kernelDepth--),(()=>{this.ENV.getBool("DEBUG")||this.state.profiling?(p=this.profiler.profileKernel(c,h,(()=>i())),this.ENV.getBool("DEBUG")&&this.profiler.logKernelProfile(p),n=p.outputs):n=i()})),r&&this.addTapeNode(c,h,n,d,e,f),this.state.profiling&&this.state.activeProfile.kernels.push({name:c,bytesAdded:this.state.numBytes-o,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-s,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(h).map((t=>null!=h[t]?h[t].shape:null)),outputShapes:n.map((t=>t.shape)),kernelTimeMs:p.timeMs,extraInfo:p.extraInfo}),Array.isArray(u)?n:n[0]}saveTensorsForBackwardMode(t){const n=t.map((t=>this.keep(this.clone(t))));return n}getTensorsForGradient(t,n,e){const r=(0,a.vQ)(t);if(null!=r){const t=r.inputsToSave||[],o=r.outputsToSave||[];let s;r.saveAllInputs?(l.vA(Array.isArray(n),(()=>"saveAllInputs is true, expected inputs to be an array.")),s=Object.keys(n).map((t=>n[t]))):s=t.map((t=>n[t]));const i=e.filter(((t,n)=>o[n]));return s.concat(i)}return[]}makeTensor(t,n,e,r){if(null==t)throw new Error("Values passed to engine.makeTensor() are null");e=e||"float32",r=r||this.backend;let o=t;"string"===e&&l.Kg(t[0])&&(o=t.map((t=>c.encodeString(t))));const s=r.write(o,n,e),i=new g.qY(n,e,s,this.nextTensorId());if(this.trackTensor(i,r),"string"===e){const t=this.state.tensorInfo.get(s),n=(0,l.SL)(o);this.state.numBytes+=n-t.bytes,t.bytes=n}return i}makeTensorFromDataId(t,n,e,r){e=e||"float32";const o={dataId:t,shape:n,dtype:e};return this.makeTensorFromTensorInfo(o,r)}makeTensorFromTensorInfo(t,n){const{dataId:e,shape:r,dtype:o}=t,s=new g.qY(r,o,e,this.nextTensorId());return this.trackTensor(s,n),s}makeVariable(t,n=!0,e,r){e=e||this.nextVariableId().toString(),null!=r&&r!==t.dtype&&(t=t.cast(r));const o=new g.rT(t,n,e,this.nextTensorId());if(null!=this.state.registeredVariables[o.name])throw new Error(`Variable with name ${o.name} was already registered`);return this.state.registeredVariables[o.name]=o,this.incRef(o,this.backend),o}trackTensor(t,n){this.state.numTensors++,"string"===t.dtype&&this.state.numStringTensors++;let e=0;"complex64"!==t.dtype&&"string"!==t.dtype&&(e=t.size*l.jv(t.dtype)),this.state.numBytes+=e,this.state.tensorInfo.has(t.dataId)||(this.state.numDataBuffers++,this.state.tensorInfo.set(t.dataId,{backend:n||this.backend,dtype:t.dtype,shape:t.shape,bytes:e})),t instanceof g.rT||this.track(t)}incRef(t,n){this.trackTensor(t,n),this.backend.incRef(t.dataId)}removeDataId(t,n){this.state.tensorInfo.has(t)&&this.state.tensorInfo.get(t).backend===n&&(this.state.tensorInfo.delete(t),this.state.numDataBuffers--)}disposeTensor(t){if(!this.state.tensorInfo.has(t.dataId))return;const n=this.state.tensorInfo.get(t.dataId);if(this.state.numTensors--,"string"===t.dtype&&(this.state.numStringTensors--,this.state.numBytes-=n.bytes),"complex64"!==t.dtype&&"string"!==t.dtype){const n=t.size*l.jv(t.dtype);this.state.numBytes-=n}n.backend.disposeData(t.dataId)&&this.removeDataId(t.dataId,n.backend)}disposeVariables(){for(const t in this.state.registeredVariables){const n=this.state.registeredVariables[t];this.disposeVariable(n)}}disposeVariable(t){this.disposeTensor(t),null!=this.state.registeredVariables[t.name]&&delete this.state.registeredVariables[t.name]}memory(){const t=this.backend.memory();return t.numTensors=this.state.numTensors,t.numDataBuffers=this.state.numDataBuffers,t.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(t.unreliable=!0,null==t.reasons&&(t.reasons=[]),t.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),t}async profile(t){this.state.profiling=!0;const n=this.state.numBytes,e=this.state.numTensors;this.state.activeProfile.kernels=[],this.state.activeProfile.result=await t(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max(...this.state.activeProfile.kernels.map((t=>t.totalBytesSnapshot))),this.state.activeProfile.newBytes=this.state.numBytes-n,this.state.activeProfile.newTensors=this.state.numTensors-e;for(const r of this.state.activeProfile.kernels)r.kernelTimeMs=await r.kernelTimeMs,r.extraInfo=await r.extraInfo;return this.state.activeProfile}isTapeOn(){return this.state.gradientDepth>0&&0===this.state.kernelDepth}addTapeNode(t,n,e,r,o,s){const i={id:this.state.nextTapeNodeId++,kernelName:t,inputs:n,outputs:e,saved:o},u=(0,a.vQ)(t);null!=u&&(r=u.gradFunc),null!=r&&(i.gradient=t=>(t=t.map(((t,n)=>{if(null==t){const t=e[n],r=l.Ty(t.size,t.dtype);return this.makeTensor(r,t.shape,t.dtype)}return t})),r(t.length>1?t:t[0],o,s))),this.state.activeTape.push(i)}keep(t){return t.kept=!0,t}startTape(){0===this.state.gradientDepth&&(this.state.activeTape=[]),this.state.gradientDepth++}endTape(){this.state.gradientDepth--}startScope(t){const n={track:[],name:"unnamed scope",id:this.state.nextScopeId++};t&&(n.name=t),this.state.scopeStack.push(n),this.state.activeScope=n}endScope(t){const n=(0,v.getTensorsInContainer)(t),e=new Set(n.map((t=>t.id)));for(let o=0;o<this.state.activeScope.track.length;o++){const t=this.state.activeScope.track[o];t.kept||e.has(t.id)||t.dispose()}const r=this.state.scopeStack.pop();this.state.activeScope=0===this.state.scopeStack.length?null:this.state.scopeStack[this.state.scopeStack.length-1],n.forEach((t=>{t.kept||t.scopeId!==r.id||this.track(t)}))}gradients(t,n,e,r=!1){if(l.vA(n.length>0,(()=>"gradients() received an empty list of xs.")),null!=e&&"float32"!==e.dtype)throw new Error(`dy must have 'float32' dtype, but has '${e.dtype}'`);const o=this.scopedRun((()=>this.startTape()),(()=>this.endTape()),(()=>this.tidy("forward",t)));l.vA(o instanceof g.qY,(()=>"The result y returned by f() must be a tensor."));const s=p(this.state.activeTape,n,o);if(!r&&0===s.length&&n.length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");return this.tidy("backward",(()=>{const t={};t[o.id]=null==e?k(o.shape):e,m(t,s,(t=>this.tidy(t)),A);const r=n.map((n=>t[n.id]));return 0===this.state.gradientDepth&&(this.state.activeTape.forEach((t=>{for(const n of t.saved)n.dispose()})),this.state.activeTape=null),{value:o,grads:r}}))}customGrad(t){return l.vA(l.Tn(t),(()=>"The f passed in customGrad(f) must be a function.")),(...n)=>{let e;l.vA(n.every((t=>t instanceof g.qY)),(()=>"The args passed in customGrad(f)(x1, x2,...) must all be tensors"));const r={};n.forEach(((t,n)=>{r[n]=t}));const o=(r,o)=>(e=t(...n,o),l.vA(e.value instanceof g.qY,(()=>"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor")),l.vA(l.Tn(e.gradFunc),(()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function.")),e.value),s=(t,r)=>{const o=e.gradFunc(t,r),s=Array.isArray(o)?o:[o];l.vA(s.length===n.length,(()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...).")),l.vA(s.every((t=>t instanceof g.qY)),(()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors."));const i={};return s.forEach(((t,n)=>{i[n]=()=>t})),i};return this.runKernelFunc({forwardFunc:o,backwardsFunc:s,inputs:r})}}readSync(t){const n=this.state.tensorInfo.get(t);return n.backend.readSync(t)}read(t){const n=this.state.tensorInfo.get(t);return n.backend.read(t)}readToGPU(t,n){const e=this.state.tensorInfo.get(t);return e.backend.readToGPU(t,n)}async time(t){const n=(0,c.now)(),e=await this.backend.time(t);return e.wallMs=(0,c.now)()-n,e}track(t){return null!=this.state.activeScope&&(t.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(t)),t}get registeredVariables(){return this.state.registeredVariables}reset(){this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new w;for(const t in this.registry)this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null}}function k(t){const n=(0,l.FZ)((0,l.Ze)(t),"float32");return x.makeTensor(n,t,"float32")}function T(){const t=(0,s.L)();if(null==t._tfengine){const n=new o.OH(t);t._tfengine=new b(n)}return(0,o.tj)(t._tfengine.ENV),(0,g.qP)((()=>t._tfengine)),t._tfengine}b.nextTensorId=0,b.nextVariableId=0;const x=T();function A(t,n){const e={a:t,b:n};return x.runKernel(i.OM,e)}},57311:function(t,n,e){e.d(n,{y:function(){return u}});var r=e(57260),o=e(15441),s=e(28189),i=e(70929);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
function a(t){const n=(0,s.YT)(t,"x","tanh","float32"),e={x:n};return r.T2.runKernel(o.iu,e)}const u=(0,i.op)({tanh_:a})},57436:function(t,n,e){e.d(n,{j:function(){return u}});var r=e(57260),o=e(15441),s=e(28189),i=e(70929);
/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
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
function a(t,n=null,e=!1){const i=(0,s.YT)(t,"x","min"),a={x:i},u={axis:n,keepDims:e};return r.T2.runKernel(o.lN,a,u)}const u=(0,i.op)({min_:a})},58276:function(t,n,e){e.d(n,{L:function(){return u}});var r=e(57260),o=e(15441),s=e(28189),i=e(70929);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
function a(t){const n=(0,s.YT)(t,"x","sinh"),e={x:n};return r.T2.runKernel(o.J3,e)}const u=(0,i.op)({sinh_:a})},60152:function(t,n,e){e.d(n,{z:function(){return c}});var r=e(57260),o=e(15441),s=e(30565),i=e(28189),a=e(70929);
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
function u(t,n){let e=(0,i.YT)(t,"a","mod"),a=(0,i.YT)(n,"b","mod");[e,a]=(0,s.makeTypesMatch)(e,a);const u={a:e,b:a};return r.T2.runKernel(o.BL,u)}const c=(0,a.op)({mod_:u})},61303:function(t,n,e){e.d(n,{M:function(){return l}});var r=e(57260),o=e(15441),s=e(30565),i=e(28189),a=e(62198),u=e(70929);
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
function c(t,n){let e=(0,i.YT)(t,"a","less","string_or_numeric"),u=(0,i.YT)(n,"b","less","string_or_numeric");[e,u]=(0,s.makeTypesMatch)(e,u),(0,a.assertAndGetBroadcastShape)(e.shape,u.shape);const c={a:e,b:u};return r.T2.runKernel(o.mI,c)}const l=(0,u.op)({less_:c})},61411:function(t,n,e){e.d(n,{S:function(){return a}});var r=e(57260),o=e(45119),s=e(37148),i=e(42855);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
function a(t,n="float32"){if("complex64"===n){const n=a(t,"float32"),e=(0,i.U)(t,"float32");return(0,s.f)(n,e)}const e=(0,o.FZ)((0,o.Ze)(t),n);return r.T2.makeTensor(e,t,n)}},62018:function(t,n,e){e.d(n,{t:function(){return i}});var r=e(28189),o=e(45119),s=e(19171);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
function i(t,n){(0,o.HO)(t);const e=(0,r.MZ)(t,n);if(1!==e.length)throw new Error("tensor1d() requires values to be a flat/TypedArray");const i=null;return(0,s.Q)(t,i,e,n)}},62058:function(t,n,e){e.d(n,{r:function(){return l}});var r=e(57260),o=e(15441),s=e(30565),i=e(28189),a=e(62198),u=e(70929);
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
function c(t,n){let e=(0,i.YT)(t,"a","greater","string_or_numeric"),u=(0,i.YT)(n,"b","greater","string_or_numeric");[e,u]=(0,s.makeTypesMatch)(e,u),(0,a.assertAndGetBroadcastShape)(e.shape,u.shape);const c={a:e,b:u};return r.T2.runKernel(o.Xh,c)}const l=(0,u.op)({greater_:c})},62198:function(t,n,e){
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
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
function r(t,n){const e=t.length,r=[];for(let o=0;o<e;o++){const s=e-1-o,i=t[s]||1,a=n[n.length-1-o]||1;a>1&&1===i&&r.unshift(s)}return r}function o(t,n){const e=[];for(let r=0;r<n.length;r++){const o=t[t.length-r-1],s=n.length-r-1,i=n[s];(null==o||1===o&&i>1)&&e.unshift(s)}return e}function s(t,n){const e=[],r=Math.max(t.length,n.length);for(let o=0;o<r;o++){let r=t[t.length-o-1];null==r&&(r=1);let s=n[n.length-o-1];if(null==s&&(s=1),1===r)e.unshift(s);else if(1===s)e.unshift(r);else{if(r!==s){const e=`Operands could not be broadcast together with shapes ${t} and ${n}.`;throw Error(e)}e.unshift(r)}}return e}e.r(n),e.d(n,{assertAndGetBroadcastShape:function(){return s},getBroadcastDims:function(){return r},getReductionAxes:function(){return o}})},62302:function(t,n,e){e.d(n,{t:function(){return u}});var r=e(57260),o=e(15441),s=e(28189),i=e(70929);
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
function a(t,n){const e=(0,s.YT)(t,"x","reshape","string_or_numeric"),i={x:e},a={shape:n};return r.T2.runKernel(o.R2,i,a)}const u=(0,i.op)({reshape_:a})},63208:function(t,n,e){e.d(n,{BTT:function(){return A.B},tnl:function(){return o.t},HQu:function(){return s.H},FqL:function(){return i.F},WQq:function(){return a.W},QiD:function(){return u.Q},Q7R:function(){return c.Q},bzn:function(){return l.b},FLi:function(){return h.F},XRg:function(){return f.X},qRo:function(){return d.q},yHs:function(){return p.y},rYl:function(){return m.r},FPz:function(){return g.F},rfv:function(){return v.r},$jT:function(){return y.$},sub:function(){return w.s},lZX:function(){return N},$v7:function(){return M.$},BFc:function(){return R},kSi:function(){return Y},T5N:function(){return C},GTe:function(){return D.G},HbZ:function(){return z.H},ftb:function(){return gr},ROE:function(){return O.R},hOW:function(){return L.h},ra8:function(){return G.r},wgE:function(){return K.w},mkO:function(){return W.m},zQh:function(){return j.z},o8B:function(){return q.o},faB:function(){return U.f},xWs:function(){return k.x},I1m:function(){return V},RPU:function(){return X},O5O:function(){return J},P1l:function(){return nt},kA9:function(){return et.k},Xtf:function(){return rt.X},wX9:function(){return ot.w},IPL:function(){return st.I},jIJ:function(){return ut},gnS:function(){return ct.g},yIG:function(){return lt.y},_jP:function(){return Dr},Lp0:function(){return ht.L},rCv:function(){return ft.r},aOp:function(){return dt.a},Rj8:function(){return pt.R},Gl3:function(){return mt.G},smy:function(){return wt},X7t:function(){return bt.X},y4m:function(){return kt.y},ek5:function(){return Tt.e},Omf:function(){return xt.O},EZY:function(){return Ir},_3C:function(){return At._},Pqc:function(){return Et.P},FJY:function(){return Nr},LCg:function(){return St.L},Y12:function(){return $t.Y},p4S:function(){return It.p},oNF:function(){return Nt.o},UG6:function(){return Dt.U},IYd:function(){return Mt.I},y5U:function(){return Bt},hVP:function(){return Pe.h},GSj:function(){return Yt.G},RIf:function(){return Pt.R},wh_:function(){return Ct.w},cZk:function(){return r},kgh:function(){return zt.k},SY9:function(){return Er.S},rhj:function(){return Ot.r},DQN:function(){return Lt.D},KGM:function(){return Ce.K},ngS:function(){return Gt.n},Slp:function(){return fs},U4u:function(){return _r},ggX:function(){return ze.g},MIs:function(){return Kt.M},EN4:function(){return Wt.E},yrW:function(){return jt.y},H8d:function(){return qt.H},M7h:function(){return Ut.M},InN:function(){return Ht.I},mPL:function(){return ds},mT8:function(){return Vt.m},Kgs:function(){return Zt.K},Rm2:function(){return Xt.R},Kko:function(){return Qt.K},nqI:function(){return Jt.n},HPB:function(){return tn.H},VZ:function(){return nn.V},n76:function(){return en.n},NSZ:function(){return rn.N},ztW:function(){return on.z},rxB:function(){return sn.r},YYh:function(){return ps},yzS:function(){return an.y},NoW:function(){return T.N},T9B:function(){return un.T},jgi:function(){return cn.j},NYV:function(){return ln.e},RO:function(){return hn.R},PhQ:function(){return fn.P},i2o:function(){return dn.i},OYQ:function(){return gn},jkA:function(){return vn.j},BpO:function(){return yn.B},FFZ:function(){return wn.F},ziu:function(){return bn.z},Clk:function(){return En},CRk:function(){return kr},lKK:function(){return x.l},YDF:function(){return $n},OjQ:function(){return In.O},HZy:function(){return Nn.H},xbf:function(){return yr.x},Ec:function(){return Dn.E},Mw0:function(){return Mn.M},SaS:function(){return pn.S},P61:function(){return _n.P},op:function(){return A.op},X4o:function(){return Rn},eVF:function(){return Bn.e},BZs:function(){return Pn},grY:function(){return zn},XHu:function(){return Ln},WLX:function(){return Kn},dzn:function(){return Wn.d},n7C:function(){return jn.n},NsG:function(){return qn.N},yyV:function(){return Un.y},_eU:function(){return Hn._},_9M:function(){return Zn},pR9:function(){return Jn},FE$:function(){return ne},YeY:function(){return ee.Y},y17:function(){return re.y},xav:function(){return oe.x},VOZ:function(){return se.V},VVh:function(){return ie.V},j__:function(){return ae.j},tQQ:function(){return _t.t},BEg:function(){return ue.B},QD2:function(){return le},LMr:function(){return fe},I2l:function(){return pe},JYU:function(){return ge},z8$:function(){return Oe.z},LIG:function(){return ve.L},Z$r:function(){return ye.Z},d_2:function(){return we.d},NFr:function(){return Tr.N},sZg:function(){return xr.s},WfX:function(){return be.W},wdz:function(){return ke.w},F12:function(){return Te.F},ry7:function(){return E.r},_SZ:function(){return xe._},vPA:function(){return hs},F8e:function(){return Ae.F},L0l:function(){return Ee.L},dik:function(){return S.d},Q$M:function(){return $e},zAd:function(){return Ne},wck:function(){return Me},R0O:function(){return Fe},Vs9:function(){return Re.V},lw0:function(){return Be.l},eDJ:function(){return Ye.e},lMo:function(){return ms},Zhr:function(){return Ar.Z},lOn:function(){return ls},lDo:function(){return Le.l},RZD:function(){return Ge.R},EwI:function(){return Tn.E},Pbu:function(){return Ke.P},r2V:function(){return We.r},t$z:function(){return je.t},PMw:function(){return qe.P},Ym9:function(){return Ue.Y},YjP:function(){return gs},jbE:function(){return xn.j},czq:function(){return He.c},Mlm:function(){return Ve.M},ymU:function(){return $.y},OEK:function(){return Ze.O},tGX:function(){return Xe.t},KtR:function(){return Je},$_$:function(){return tr.$},g9W:function(){return nr},Lpo:function(){return er},yxw:function(){return rr},Vsq:function(){return Ft.V},rfw:function(){return or.r},mgz:function(){return vr.m},efE:function(){return sr.e},AmM:function(){return ir.A},zAU:function(){return ar.z},K$i:function(){return ur.K},rni:function(){return cr.r},bvq:function(){return lr},_M9:function(){return hr._},YJN:function(){return fr.Y},Ul9:function(){return dr.U},POl:function(){return pr.P}});var r={};e.r(r),e.d(r,{conv2d:function(){return Fr.X},depthwiseConv2d:function(){return Rr.G},matMul:function(){return Br.N}});var o=e(4888),s=e(12804),i=e(37558),a=e(37523),u=e(16054),c=e(12307),l=e(89326),h=e(10897),f=e(54339),d=e(66841),p=e(50269),m=e(29580),g=e(21404),v=e(63774),y=e(53909),w=e(53855),b=e(28189),k=e(25030),T=e(65703),x=e(9258),A=e(70929),E=e(28968),S=e(17986),$=e(57311);
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
function I(t,n,e,r,o,s){const i=(0,b.YT)(t,"forgetBias","basicLSTMCell"),u=(0,b.YT)(n,"lstmKernel","basicLSTMCell"),c=(0,b.YT)(e,"lstmBias","basicLSTMCell"),l=(0,b.YT)(r,"data","basicLSTMCell"),h=(0,b.YT)(o,"c","basicLSTMCell"),f=(0,b.YT)(s,"h","basicLSTMCell"),d=(0,k.x)([l,f],1),p=(0,T.N)(d,u),m=(0,a.W)(p,c),g=m.shape[0],v=m.shape[1]/4,y=[g,v],w=(0,S.d)(m,[0,0],y),A=(0,S.d)(m,[0,v],y),I=(0,S.d)(m,[0,2*v],y),N=(0,S.d)(m,[0,3*v],y),D=(0,a.W)((0,x.l)((0,E.r)(w),(0,$.y)(A)),(0,x.l)(h,(0,E.r)((0,a.W)(i,I)))),M=(0,x.l)((0,$.y)(D),(0,E.r)(N));return[D,M]}const N=(0,A.op)({basicLSTMCell_:I});var D=e(69772),M=e(251),_=e(45119);function F(t,n,e,r,o,s){const i=(0,b.YT)(t,"x","batchNorm"),a=(0,b.YT)(n,"mean","batchNorm"),u=(0,b.YT)(e,"variance","batchNorm");let c,l;return null!=o&&(c=(0,b.YT)(o,"scale","batchNorm")),null!=r&&(l=(0,b.YT)(r,"offset","batchNorm")),_.vA(2===i.rank,(()=>`Error in batchNorm2D: x must be rank 2 but got rank ${i.rank}.`)),_.vA(2===a.rank||1===a.rank,(()=>`Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank ${a.rank}.`)),_.vA(2===u.rank||1===u.rank,(()=>`Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank ${u.rank}.`)),null!=c&&_.vA(2===c.rank||1===c.rank,(()=>`Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank ${c.rank}.`)),null!=l&&_.vA(2===l.rank||1===l.rank,(()=>`Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank ${l.rank}.`)),(0,M.$)(i,a,u,l,c,s)}const R=(0,A.op)({batchNorm2d_:F});function B(t,n,e,r,o,s){const i=(0,b.YT)(t,"x","batchNorm"),a=(0,b.YT)(n,"mean","batchNorm"),u=(0,b.YT)(e,"variance","batchNorm");let c,l;return null!=o&&(c=(0,b.YT)(o,"scale","batchNorm")),null!=r&&(l=(0,b.YT)(r,"offset","batchNorm")),_.vA(3===i.rank,(()=>`Error in batchNorm3D: x must be rank 3 but got rank ${i.rank}.`)),_.vA(3===a.rank||1===a.rank,(()=>`Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank ${a.rank}.`)),_.vA(3===u.rank||1===u.rank,(()=>`Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank ${u.rank}.`)),null!=c&&_.vA(3===c.rank||1===c.rank,(()=>`Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank ${c.rank}.`)),null!=l&&_.vA(3===l.rank||1===l.rank,(()=>`Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank ${l.rank}.`)),(0,M.$)(i,a,u,l,c,s)}const Y=(0,A.op)({batchNorm3d_:B});function P(t,n,e,r,o,s){const i=(0,b.YT)(t,"x","batchNorm"),a=(0,b.YT)(n,"mean","batchNorm"),u=(0,b.YT)(e,"variance","batchNorm");let c,l;return null!=o&&(c=(0,b.YT)(o,"scale","batchNorm")),null!=r&&(l=(0,b.YT)(r,"offset","batchNorm")),_.vA(4===i.rank,(()=>`Error in batchNorm4D: x must be rank 4 but got rank ${i.rank}.`)),_.vA(4===a.rank||1===a.rank,(()=>`Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank ${a.rank}.`)),_.vA(4===u.rank||1===u.rank,(()=>`Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank ${u.rank}.`)),null!=c&&_.vA(4===c.rank||1===c.rank,(()=>`Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank ${c.rank}.`)),null!=l&&_.vA(4===l.rank||1===l.rank,(()=>`Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank ${l.rank}.`)),(0,M.$)(i,a,u,l,c,s)}const C=(0,A.op)({batchNorm4d_:P});var z=e(40758),O=e(17367),L=e(63567),G=e(448),K=e(29809),W=e(30855),j=e(96928),q=e(70125),U=e(37148);function H(t){return(0,k.x)(t,0)}const V=(0,A.op)({concat1d_:H});function Z(t,n){return(0,k.x)(t,n)}const X=(0,A.op)({concat2d_:Z});function Q(t,n){return(0,k.x)(t,n)}const J=(0,A.op)({concat3d_:Q});function tt(t,n){return(0,k.x)(t,n)}const nt=(0,A.op)({concat4d_:tt});var et=e(3701),rt=e(28794),ot=e(41106),st=e(90167),it=e(31895);function at(t,n,e,r,o){const s=(0,b.YT)(t,"x","conv3dTranspose"),i=(0,b.YT)(n,"filter","conv3dTranspose");return(0,it.c)(e,s,i,r,o)}const ut=(0,A.op)({conv3dTranspose_:at});var ct=e(99907),lt=e(27451),ht=e(10302),ft=e(76808),dt=e(77974),pt=e(31216),mt=e(10676),gt=e(57260),vt=e(15441);
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
function yt(t){const n=(0,b.YT)(t,"x","diag"),e={x:n};return gt.T2.runKernel(vt.OR,e)}const wt=(0,A.op)({diag_:yt});var bt=e(93002),kt=e(89359),Tt=e(919),xt=e(69759),At=e(79853),Et=e(83416),St=e(13020),$t=e(95207),It=e(44881),Nt=e(8631),Dt=e(8710),Mt=e(40517),_t=e(62302),Ft=e(64826);
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
function Rt(t,n,e,r="float32"){null==n&&(n=t);const o=(0,G.r)([t,n],r),s=t<=n?t:n;for(let a=0;a<s;++a)o.set(1,a,a);const i=(0,_t.t)(o.toTensor(),[t,n]);if(null==e)return i;if(1===e.length)return(0,Ft.V)((0,Dt.U)(i,0),[e[0],1,1]);if(2===e.length)return(0,Ft.V)((0,Dt.U)((0,Dt.U)(i,0),0),[e[0],e[1],1,1]);if(3===e.length)return(0,Ft.V)((0,Dt.U)((0,Dt.U)((0,Dt.U)(i,0),0),0),[e[0],e[1],e[2],1,1]);throw new Error(`eye() currently supports only 1D and 2D batchShapes, but received ${e.length}D.`)}const Bt=(0,A.op)({eye_:Rt});var Yt=e(96111),Pt=e(15606),Ct=e(88991),zt=e(48229),Ot=e(62058),Lt=e(13337),Gt=e(35040),Kt=e(68318),Wt=e(33454),jt=e(6300),qt=e(66919),Ut=e(61303),Ht=e(56508),Vt=e(46545),Zt=e(93531),Xt=e(44010),Qt=e(12015),Jt=e(95645),tn=e(97991),nn=e(13330),en=e(13789),rn=e(89881),on=e(9879),sn=e(19925),an=e(80462),un=e(41938),cn=e(86999),ln=e(14349),hn=e(45243),fn=e(30178),dn=e(12611),pn=e(61411),mn=e(21722);
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
function gn(t,n,{indexing:e="xy"}={}){if("xy"!==e&&"ij"!==e)throw new TypeError(`${e} is not a valid third argument to meshgrid`);if(void 0===t)return[];let r=(0,b.YT)(t,"x","meshgrid",t instanceof mn.qY?t.dtype:"float32");if(void 0===n)return[r];let o=(0,b.YT)(n,"y","meshgrid",n instanceof mn.qY?n.dtype:"float32");const s=(0,_.Ze)(r.shape),i=(0,_.Ze)(o.shape);return"xy"===e?(r=(0,_t.t)(r,[1,-1]),o=(0,_t.t)(o,[-1,1]),[(0,T.N)((0,pn.S)([i,1],r.dtype),r),(0,T.N)(o,(0,pn.S)([1,s],o.dtype))]):(r=(0,_t.t)(r,[-1,1]),o=(0,_t.t)(o,[1,-1]),[(0,T.N)(r,(0,pn.S)([1,i],r.dtype)),(0,T.N)((0,pn.S)([s,1],o.dtype),o)])}var vn=e(57436),yn=e(12644),wn=e(66567),bn=e(60152),kn=e(21078),Tn=e(45793),xn=e(77126);
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
function An(t,n=null,e=!1){t=(0,b.YT)(t,"x","moments");const r=(0,_.Y6)(n,t.shape),o=(0,dn.i)(t,r,e);let s=o.shape;e||(s=(0,kn.SM)(o.shape,r));const i=(0,Tn.E)((0,xn.j)((0,K.w)(t,"float32"),(0,_t.t)(o,s))),a=(0,dn.i)(i,r,e);return{mean:o,variance:a}}const En=(0,A.op)({moments_:An});function Sn(t,n,e,r){const o=(0,b.YT)(n,"data","multiRNNCell"),s=(0,b.j1)(e,"c","multiRNNCell"),i=(0,b.j1)(r,"h","multiRNNCell");let a=o;const u=[];for(let h=0;h<t.length;h++){const n=t[h](a,s[h],i[h]);u.push(n[0]),u.push(n[1]),a=n[1]}const c=[],l=[];for(let h=0;h<u.length;h+=2)c.push(u[h]),l.push(u[h+1]);return[c,l]}const $n=(0,A.op)({multiRNNCell_:Sn});var In=e(71781),Nn=e(96522),Dn=e(42118),Mn=e(11760),_n=e(69885);function Fn(t,n){const e=(0,b.YT)(t,"v1","outerProduct"),r=(0,b.YT)(n,"v2","outerProduct");_.vA(1===e.rank&&1===r.rank,(()=>`Error in outerProduct: inputs must be rank 1, but got ranks ${e.rank} and ${r.rank}.`));const o=(0,_t.t)(e,[-1,1]),s=(0,_t.t)(r,[1,-1]);return(0,T.N)(o,s)}const Rn=(0,A.op)({outerProduct_:Fn});var Bn=e(65661);function Yn(t,n,e=0){return(0,_.vA)(2===n.length,(()=>"Invalid number of paddings. Must be length of 2.")),(0,Bn.e)(t,[n],e)}const Pn=(0,A.op)({pad1d_:Yn});function Cn(t,n,e=0){return(0,_.vA)(2===n.length&&2===n[0].length&&2===n[1].length,(()=>"Invalid number of paddings. Must be length of 2 each.")),(0,Bn.e)(t,n,e)}const zn=(0,A.op)({pad2d_:Cn});function On(t,n,e=0){return(0,_.vA)(3===n.length&&2===n[0].length&&2===n[1].length&&2===n[2].length,(()=>"Invalid number of paddings. Must be length of 2 each.")),(0,Bn.e)(t,n,e)}const Ln=(0,A.op)({pad3d_:On});function Gn(t,n,e=0){return(0,_.vA)(4===n.length&&2===n[0].length&&2===n[1].length&&2===n[2].length&&2===n[3].length,(()=>"Invalid number of paddings. Must be length of 2 each.")),(0,Bn.e)(t,n,e)}const Kn=(0,A.op)({pad4d_:Gn});var Wn=e(17872),jn=e(98990),qn=e(64394),Un=e(75295),Hn=e(67771);
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
function Vn(t,n,e){const r=(0,_.Ze)(t);let o=null;if(null==e||"float32"===e)o=new Float32Array(r);else if("int32"===e)o=new Int32Array(r);else{if("bool"!==e)throw new Error(`Unknown data type ${e}`);o=new Uint8Array(r)}for(let s=0;s<r;s++)o[s]=n();return gt.T2.makeTensor(o,t,e)}const Zn=(0,A.op)({rand_:Vn});var Xn=e(89748);
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
function Qn(t,n,e=1,r="float32",o){if(null==e&&(e=1),null==r&&(r="float32"),"float32"!==r&&"int32"!==r)throw new Error(`Unsupported data type ${r}`);const s=new Xn.XA(n,e,r,o),i=(0,G.r)(t,r);for(let a=0;a<i.values.length;a++)i.values[a]=s.nextValue();return i.toTensor()}const Jn=(0,A.op)({randomGamma_:Qn});
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
function te(t,n=0,e=1,r,o){if(null!=r&&"bool"===r)throw new Error(`Unsupported data type ${r}`);const s=new Xn.ai(n,e,r,!1,o),i=(0,G.r)(t,r);for(let a=0;a<i.values.length;a++)i.values[a]=s.nextValue();return i.toTensor()}const ne=(0,A.op)({randomNormal_:te});var ee=e(79546),re=e(44645),oe=e(1902),se=e(19870),ie=e(90112),ae=e(83732),ue=e(53262);
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
function ce(t){const n=(0,b.YT)(t,"x","reverse");return _.vA(1===n.rank,(()=>`Error in reverse1D: x must be rank 1 but got rank ${n.rank}.`)),(0,ue.B)(n,0)}const le=(0,A.op)({reverse1d_:ce});
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
function he(t,n){const e=(0,b.YT)(t,"x","reverse");return _.vA(2===e.rank,(()=>`Error in reverse2D: x must be rank 2 but got rank ${e.rank}.`)),(0,ue.B)(e,n)}const fe=(0,A.op)({reverse2d_:he});
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
function de(t,n){const e=(0,b.YT)(t,"x","reverse");return _.vA(3===e.rank,(()=>`Error in reverse3D: x must be rank 3 but got rank ${e.rank}.`)),(0,ue.B)(e,n)}const pe=(0,A.op)({reverse3d_:de});
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
function me(t,n){const e=(0,b.YT)(t,"x","reverse");return _.vA(4===e.rank,(()=>`Error in reverse4D: x must be rank 4 but got rank ${e.rank}.`)),(0,ue.B)(e,n)}const ge=(0,A.op)({reverse4d_:me});var ve=e(25912),ye=e(17820),we=e(45702),be=e(26325),ke=e(89986),Te=e(23325),xe=e(51115),Ae=e(33726),Ee=e(58276);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
function Se(t,n,e){const r=(0,b.YT)(t,"x","slice1d");return _.vA(1===r.rank,(()=>`slice1d expects a rank-1 tensor, but got a rank-${r.rank} tensor`)),(0,S.d)(r,[n],[e])}const $e=(0,A.op)({slice1d_:Se});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
function Ie(t,n,e){const r=(0,b.YT)(t,"x","slice2d");return _.vA(2===r.rank,(()=>`slice2d expects a rank-2 tensor, but got a rank-${r.rank} tensor`)),(0,S.d)(r,n,e)}const Ne=(0,A.op)({slice2d_:Ie});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
function De(t,n,e){const r=(0,b.YT)(t,"x","slice3d");return _.vA(3===r.rank,(()=>`slice3d expects a rank-3 tensor, but got a rank-${r.rank} tensor`)),(0,S.d)(r,n,e)}const Me=(0,A.op)({slice3d_:De});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
function _e(t,n,e){const r=(0,b.YT)(t,"x","slice4d");return _.vA(4===r.rank,(()=>`slice4d expects a rank-4 tensor, but got a rank-${r.rank} tensor`)),(0,S.d)(r,n,e)}const Fe=(0,A.op)({slice4d_:_e});var Re=e(26346),Be=e(66030),Ye=e(10776),Pe=e(41361),Ce=e(13108),ze=e(22292),Oe=e(8775),Le=e(66512),Ge=e(79348),Ke=e(53427),We=e(5932),je=e(54268),qe=e(10700),Ue=e(45894),He=e(83791),Ve=e(77823),Ze=e(74027),Xe=e(62018),Qe=e(19171);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
function Je(t,n,e){if((0,_.HO)(t),null!=n&&2!==n.length)throw new Error("tensor2d() requires shape to have two numbers");const r=(0,b.MZ)(t,e);if(2!==r.length&&1!==r.length)throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray");if(1===r.length&&null==n)throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return(0,Qe.Q)(t,n,r,e)}var tr=e(42768);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
function nr(t,n,e){if((0,_.HO)(t),null!=n&&4!==n.length)throw new Error("tensor4d() requires shape to have four numbers");const r=(0,b.MZ)(t,e);if(4!==r.length&&1!==r.length)throw new Error("tensor4d() requires values to be number[][][][] or flat/TypedArray");if(1===r.length&&null==n)throw new Error("tensor4d() requires shape to be provided when `values` are a flat array");return(0,Qe.Q)(t,n,r,e)}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
function er(t,n,e){if((0,_.HO)(t),null!=n&&5!==n.length)throw new Error("tensor5d() requires shape to have five numbers");const r=(0,b.MZ)(t,e);if(5!==r.length&&1!==r.length)throw new Error("tensor5d() requires values to be number[][][][][] or flat/TypedArray");if(1===r.length&&null==n)throw new Error("tensor5d() requires shape to be provided when `values` are a flat array");return(0,Qe.Q)(t,n,r,e)}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
function rr(t,n,e){if((0,_.HO)(t),null!=n&&6!==n.length)throw new Error("tensor6d() requires shape to have six numbers");const r=(0,b.MZ)(t,e);if(6!==r.length&&1!==r.length)throw new Error("tensor6d() requires values to be number[][][][][][] or flat/TypedArray");if(1===r.length&&null==n)throw new Error("tensor6d() requires shape to be provided when `values` are a flat array");return n=n||r,(0,Qe.Q)(t,n,r,e)}var or=e(21190),sr=e(97858),ir=e(73937),ar=e(97706),ur=e(67261),cr=e(16319);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
function lr(t,n=!0,e,r){return gt.T2.makeVariable(t,n,e,r)}var hr=e(12151),fr=e(66652),dr=e(42855),pr=e(55537);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
async function mr(t,n,e){const r=(0,b.YT)(t,"tensor","boolMask"),o=(0,b.YT)(n,"mask","boolMask","bool"),s=null==e?0:e,i=o.rank,a=r.shape;_.vA(i>0,(()=>"mask cannot be scalar")),_.O3(a.slice(s,s+i),o.shape,"mask's shape must match the first K dimensions of tensor's shape,");let u=1;for(let m=s;m<s+i;m++)u*=a[m];const c=a.slice(0,s).concat([u],a.slice(s+i)),l=(0,_t.t)(r,c),h=(0,_t.t)(o,[-1]),f=await(0,fr.Y)(h),d=(0,We.r)(f,[1]),p=(0,zt.k)(l,d,s);return t!==r&&r.dispose(),n!==o&&o.dispose(),d.dispose(),l.dispose(),h.dispose(),f.dispose(),p}const gr=mr;var vr=e(7703),yr=e(92596),wr=e(30565);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
function br(t,n,e,r,o=!0){const s=(0,b.YT)(t,"v","movingAverage"),i=(0,b.YT)(n,"x","movingAverage"),u=(0,b.YT)(e,"decay","movingAverage");(0,wr.assertTypesMatch)(s,i),_.vA(_.r1(s.shape,i.shape),(()=>"Shape mismatch in v and x"));const c=(0,we.d)(1),l=(0,xn.j)(c,u);let h=(0,x.l)((0,xn.j)(i,s),l);if(o){_.vA(null!=r,(()=>"When using zeroDebias: true, step is required."));const t=(0,b.YT)(r,"step","movingAverage");h=(0,kt.y)(h,(0,xn.j)(c,(0,jn.n)(u,t)))}return(0,a.W)(s,h)}const kr=(0,A.op)({movingAverage_:br});var Tr=e(94791),xr=e(79120),Ar=e(24044),Er=e(55598);
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
function Sr(t,n){if(null==n)return t.shape.slice();if(_.r1(t.shape,n))return n;if(t.shape.length===n.length){const e=[];for(let r=0;r<t.shape.length;r++)null==n[r]&&null!=t.shape[r]?e.push(t.shape[r]):e.push(n[r]);return e}return n}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
function $r(t,n,e,r){const o=(0,b.YT)(t,"x","dropout");if(_.vA("float32"===o.dtype,(()=>`x has to be a floating point tensor since it's going to be scaled, but got a ${o.dtype} tensor instead.`)),_.vA(n>=0&&n<1,(()=>`rate must be a float in the range [0, 1), but got ${n}.`)),0===n)return t instanceof mn.qY?o.clone():o;const s=Sr(o,e),i=1-n,u=(0,kt.y)((0,Pt.R)((0,a.W)((0,ee.Y)(s,0,1,"float32",r),i)),i);return(0,x.l)(o,u)}const Ir=(0,A.op)({dropout_:$r});
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
function Nr(t){return Math.floor(Math.pow(2,Math.ceil(Math.log(t)/Math.log(2))))}function Dr(t,n,e){const r=1-t%2,o=new Float32Array(t);for(let s=0;s<t;++s){const i=2*Math.PI*s/(t+r-1);o[s]=n-e*Math.cos(i)}return(0,Xe.t)(o,"float32")}
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
async function Mr(t,n,e=1){const r=(0,b.YT)(t,"predictions","inTopK"),o=(0,b.YT)(n,"targets","inTopK");(0,_.vA)(r.rank>1,(()=>`inTopK() expects the predictions to be of rank 2 or higher, but got ${r.rank}`)),(0,_.vA)(r.rank-1===o.rank,(()=>`predictions rank should be 1 larger than targets rank, but got predictions rank ${r.rank} and targets rank ${o.rank}`)),(0,_.O3)(r.shape.slice(0,r.shape.length-1),o.shape,"predictions's shape should be align with the targets' shape, except the last dimension.");const s=r.shape[r.shape.length-1];(0,_.vA)(e>0&&e<=s,(()=>`'k' passed to inTopK() must be > 0 && <= the predictions last dimension (${s}), but got ${e}`));const i=await r.data(),a=await o.data(),[u,c]=[i.length/s,s],l=(0,_.ce)("bool",u);for(let h=0;h<u;h++){const t=h*c,n=i.subarray(t,t+c),r=[];for(let e=0;e<n.length;e++)r.push({value:n[e],index:e});r.sort(((t,n)=>n.value-t.value)),l[h]=0;for(let o=0;o<e;o++)if(r[o].index===a[h]){l[h]=1;break}}return t!==r&&r.dispose(),n!==o&&o.dispose(),(0,Ze.O)(l,o.shape,"bool")}const _r=Mr;var Fr=e(93502),Rr=e(91624),Br=e(30099);
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
function Yr(t){return Dr(t,.54,.46)}const Pr=(0,A.op)({hammingWindow_:Yr});
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
function Cr(t){return Dr(t,.5,.5)}const zr=(0,A.op)({hannWindow_:Cr});
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
function Or(t,n,e,r=!1,o=0){let s=0;const i=[];while(s+n<=t.size)i.push((0,S.d)(t,s,n)),s+=e;if(r)while(s<t.size){const r=s+n-t.size,a=(0,k.x)([(0,S.d)(t,s,n-r),(0,Yt.G)([r],o)]);i.push(a),s+=e}return 0===i.length?Je([],[0,n]):(0,_t.t)((0,k.x)(i),[i.length,n])}const Lr=(0,A.op)({frame_:Or});
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
function Gr(t,n,e,r,o=zr){null==r&&(r=Nr(n));const s=Lr(t,n,e),i=(0,x.l)(s,o(n));return(0,Oe.z)(i,r)}const Kr=(0,A.op)({stft_:Gr});
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
function Wr(t,n,e,r,o="bilinear",s=0){const i=(0,b.YT)(t,"image","cropAndResize"),a=(0,b.YT)(n,"boxes","cropAndResize","float32"),u=(0,b.YT)(e,"boxInd","cropAndResize","int32"),c=a.shape[0];_.vA(4===i.rank,(()=>`Error in cropAndResize: image must be rank 4,but got rank ${i.rank}.`)),_.vA(2===a.rank&&4===a.shape[1],(()=>`Error in cropAndResize: boxes must be have size [${c},4] but had shape ${a.shape}.`)),_.vA(1===u.rank&&u.shape[0]===c,(()=>`Error in cropAndResize: boxInd must be have size [${c}] but had shape ${a.shape}.`)),_.vA(2===r.length,(()=>`Error in cropAndResize: cropSize must be of length 2, but got length ${r.length}.`)),_.vA(r[0]>=1&&r[1]>=1,(()=>`cropSize must be atleast [1,1], but was ${r}`)),_.vA("bilinear"===o||"nearest"===o,(()=>`method must be bilinear or nearest, but was ${o}`));const l={image:i,boxes:a,boxInd:u},h={method:o,extrapolationValue:s,cropSize:r},f=gt.T2.runKernel(vt.MR,l,h);return f}const jr=(0,A.op)({cropAndResize_:Wr});
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
function qr(t){const n=(0,b.YT)(t,"image","flipLeftRight","float32");_.vA(4===n.rank,(()=>`Error in flipLeftRight: image must be rank 4,but got rank ${n.rank}.`));const e={image:n},r=gt.T2.runKernel(vt.Bx,e,{});return r}const Ur=(0,A.op)({flipLeftRight_:qr});
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
function Hr(t){const n=(0,b.YT)(t,"image","grayscaleToRGB"),e=n.rank-1,r=n.shape[e];_.vA(n.rank>=2,(()=>`Error in grayscaleToRGB: images must be at least rank 2, but got rank ${n.rank}.`)),_.vA(1===r,(()=>`Error in grayscaleToRGB: last dimension of a grayscale image should be size 1, but got size ${r}.`));const o=new Array(n.rank);return o.fill(1,0,e),o[e]=3,(0,Ft.V)(n,o)}const Vr=(0,A.op)({grayscaleToRGB_:Hr});
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
function Zr(t,n,e=0,r=.5){const o=(0,b.YT)(t,"image","rotateWithOffset","float32");_.vA(4===o.rank,(()=>`Error in rotateWithOffset: image must be rank 4,but got rank ${o.rank}.`));const s={image:o},i={radians:n,fillValue:e,center:r},a=gt.T2.runKernel(vt.BK,s,i);return a}const Xr=(0,A.op)({rotateWithOffset_:Zr});
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
function Qr(t,n,e,r,o,s){null==r&&(r=.5),null==o&&(o=Number.NEGATIVE_INFINITY),null==s&&(s=0);const i=t.shape[0];return e=Math.min(e,i),_.vA(0<=r&&r<=1,(()=>`iouThreshold must be in [0, 1], but was '${r}'`)),_.vA(2===t.rank,(()=>`boxes must be a 2D tensor, but was of rank '${t.rank}'`)),_.vA(4===t.shape[1],(()=>`boxes must have 4 columns, but 2nd dimension was ${t.shape[1]}`)),_.vA(1===n.rank,(()=>"scores must be a 1D tensor")),_.vA(n.shape[0]===i,(()=>`scores has incompatible shape with boxes. Expected ${i}, but was ${n.shape[0]}`)),_.vA(0<=s&&s<=1,(()=>`softNmsSigma must be in [0, 1], but was '${s}'`)),{maxOutputSize:e,iouThreshold:r,scoreThreshold:o,softNmsSigma:s}}
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
function Jr(t,n,e,r=.5,o=Number.NEGATIVE_INFINITY){const s=(0,b.YT)(t,"boxes","nonMaxSuppression","float32"),i=(0,b.YT)(n,"scores","nonMaxSuppression","float32"),a=Qr(s,i,e,r,o);e=a.maxOutputSize,r=a.iouThreshold,o=a.scoreThreshold;const u={maxOutputSize:e,iouThreshold:r,scoreThreshold:o};return gt.T2.runKernel(vt.SD,{boxes:s,scores:i},u)}const to=(0,A.op)({nonMaxSuppression_:Jr});var no=e(43303);
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
async function eo(t,n,e,r=.5,o=Number.NEGATIVE_INFINITY){const s=(0,b.YT)(t,"boxes","nonMaxSuppressionAsync"),i=(0,b.YT)(n,"scores","nonMaxSuppressionAsync"),a=Qr(s,i,e,r,o);e=a.maxOutputSize,r=a.iouThreshold,o=a.scoreThreshold;const u=await Promise.all([s.data(),i.data()]),c=u[0],l=u[1],{selectedIndices:h}=(0,no.c7)(c,l,e,r,o);return s!==t&&s.dispose(),i!==n&&i.dispose(),(0,Xe.t)(h,"int32")}const ro=eo;
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
function oo(t,n,e,r=.5,o=Number.NEGATIVE_INFINITY,s=0){const i=(0,b.YT)(t,"boxes","nonMaxSuppression"),a=(0,b.YT)(n,"scores","nonMaxSuppression"),u=Qr(i,a,e,r,o,s);e=u.maxOutputSize,r=u.iouThreshold,o=u.scoreThreshold,s=u.softNmsSigma;const c={boxes:i,scores:a},l={maxOutputSize:e,iouThreshold:r,scoreThreshold:o,softNmsSigma:s},h=gt.T2.runKernel(vt.e0,c,l);return{selectedIndices:h[0],selectedScores:h[1]}}const so=(0,A.op)({nonMaxSuppressionWithScore_:oo});
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
async function io(t,n,e,r=.5,o=Number.NEGATIVE_INFINITY,s=0){const i=(0,b.YT)(t,"boxes","nonMaxSuppressionAsync"),a=(0,b.YT)(n,"scores","nonMaxSuppressionAsync"),u=Qr(i,a,e,r,o,s);e=u.maxOutputSize,r=u.iouThreshold,o=u.scoreThreshold,s=u.softNmsSigma;const c=await Promise.all([i.data(),a.data()]),l=c[0],h=c[1],{selectedIndices:f,selectedScores:d}=(0,no.ut)(l,h,e,r,o,s);return i!==t&&i.dispose(),a!==n&&a.dispose(),{selectedIndices:(0,Xe.t)(f,"int32"),selectedScores:(0,Xe.t)(d)}}const ao=io;
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
function uo(t,n,e,r=.5,o=Number.NEGATIVE_INFINITY,s=!1){const i=(0,b.YT)(t,"boxes","nonMaxSuppression"),a=(0,b.YT)(n,"scores","nonMaxSuppression"),u=Qr(i,a,e,r,o,null),c=u.maxOutputSize,l=u.iouThreshold,h=u.scoreThreshold,f={boxes:i,scores:a},d={maxOutputSize:c,iouThreshold:l,scoreThreshold:h,padToMaxOutputSize:s},p=gt.T2.runKernel(vt.Zl,f,d);return{selectedIndices:p[0],validOutputs:p[1]}}const co=(0,A.op)({nonMaxSuppressionPadded_:uo});
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
async function lo(t,n,e,r=.5,o=Number.NEGATIVE_INFINITY,s=!1){const i=(0,b.YT)(t,"boxes","nonMaxSuppressionAsync"),a=(0,b.YT)(n,"scores","nonMaxSuppressionAsync"),u=Qr(i,a,e,r,o,null),c=u.maxOutputSize,l=u.iouThreshold,h=u.scoreThreshold,[f,d]=await Promise.all([i.data(),a.data()]),{selectedIndices:p,validOutputs:m}=(0,no.ZS)(f,d,c,l,h,s);return i!==t&&i.dispose(),a!==n&&a.dispose(),{selectedIndices:(0,Xe.t)(p,"int32"),validOutputs:(0,we.d)(m,"int32")}}const ho=lo;var fo=e(44711),po=e(42954);
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function mo(t,n="binary",e=!1,r=.5){const o=(0,b.YT)(t,"image","threshold"),s=.2989,i=.587,u=.114,c=o.shape[0]*o.shape[1];let l,h,f,d,p=(0,x.l)((0,Xe.t)([r]),255);if(_.vA(3===o.rank,(()=>`Error in threshold: image must be rank 3,but got rank ${o.rank}.`)),_.vA(3===o.shape[2]||1===o.shape[2],(()=>`Error in threshold: image color channel must be equal to 3 or 1but got ${o.shape[2]}.`)),_.vA("int32"===o.dtype||"float32"===o.dtype,(()=>`Error in dtype: image dtype must be int32 or float32,but got dtype ${o.dtype}.`)),_.vA("otsu"===n||"binary"===n,(()=>`Method must be binary or otsu, but was ${n}`)),3===o.shape[2]){[l,h,f]=(0,Le.l)(o,[1,1,1],-1);const t=(0,x.l)(l,s),n=(0,x.l)(h,i),e=(0,x.l)(f,u);d=(0,a.W)((0,a.W)(t,n),e)}else d=t;if("otsu"===n){const t=(0,z.H)((0,K.w)((0,ve.L)(d),"int32"),(0,Ze.O)([]),256);p=go(t,c)}const m=e?(0,Ht.I)(d,p):(0,Ot.r)(d,p),g=(0,K.w)((0,x.l)(m,255),"int32");return g}function go(t,n){let e,r,o,s,i,u,c=(0,Xe.t)([-1]),l=(0,Xe.t)([0]),h=(0,Xe.t)([0]);for(let f=0;f<t.size-1;f++){e=(0,S.d)(t,0,f+1),r=(0,S.d)(t,f+1),i=(0,kt.y)((0,He.c)(e),n),u=(0,kt.y)((0,He.c)(r),n);const d=(0,He.c)((0,x.l)(e,(0,re.y)(0,e.size)));o=(0,kt.y)(d,(0,He.c)(e));const p=(0,Yt.G)(r.shape,e.size),m=(0,a.W)((0,re.y)(0,r.size),p),g=(0,x.l)(r,m);s=(0,kt.y)((0,He.c)(g),(0,He.c)(r));const v=(0,xn.j)(o,s),y=(0,xn.j)(o,s),w=(0,x.l)(i,u);h=(0,x.l)((0,x.l)(w,v),y);const b=(0,Ot.r)(h,l);l=(0,hr._)(b,h,l),c=(0,hr._)(b,(0,Xe.t)([f]),c)}return c}const vo=(0,A.op)({threshold_:mo});
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
function yo(t,n,e="nearest",r="constant",o=0,s){const i=(0,b.YT)(t,"image","transform","float32"),a=(0,b.YT)(n,"transforms","transform","float32");_.vA(4===i.rank,(()=>`Error in transform: image must be rank 4,but got rank ${i.rank}.`)),_.vA(2===a.rank&&(a.shape[0]===i.shape[0]||1===a.shape[0])&&8===a.shape[1],(()=>"Error in transform: Input transform should be batch x 8 or 1 x 8")),_.vA(null==s||2===s.length,(()=>`Error in transform: outputShape must be [height, width] or null, but got ${s}.`));const u={image:i,transforms:a},c={interpolation:e,fillMode:r,fillValue:o,outputShape:s};return gt.T2.runKernel(vt.dL,u,c)}const wo=(0,A.op)({transform_:yo});
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
function bo(t,n,e){(0,_.vA)(n%1===0,(()=>`bandPart(): numLower must be an integer, got ${n}.`)),(0,_.vA)(e%1===0,(()=>`bandPart(): numUpper must be an integer, got ${e}.`));const r=(0,b.YT)(t,"a","bandPart");(0,_.vA)(r.rank>=2,(()=>`bandPart(): Rank must be at least 2, got ${r.rank}.`));const o=r.shape,[s,i]=r.shape.slice(-2);if(!(n<=s))throw new Error(`bandPart(): numLower (${n}) must not be greater than the number of rows (${s}).`);if(!(e<=i))throw new Error(`bandPart(): numUpper (${e}) must not be greater than the number of columns (${i}).`);n<0&&(n=s),e<0&&(e=i);const a=(0,_t.t)((0,re.y)(0,s,1,"int32"),[-1,1]),u=(0,re.y)(0,i,1,"int32"),c=(0,xn.j)(a,u),l=(0,en.n)((0,Ht.I)(c,(0,we.d)(+n,"int32")),(0,Lt.D)(c,(0,we.d)(-e,"int32"))),h=(0,dr.U)([s,i],r.dtype);return(0,_t.t)((0,je.t)((0,ur.K)((0,_t.t)(r,[-1,s,i])).map((t=>(0,hr._)(l,t,h)))),o)}const ko=(0,A.op)({bandPart_:bo});
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
function To(t){let n;if(Array.isArray(t)){n=!1,(0,_.vA)(null!=t&&t.length>0,(()=>"Gram-Schmidt process: input must not be null, undefined, or empty"));const e=t[0].shape[0];for(let n=1;n<t.length;++n)(0,_.vA)(t[n].shape[0]===e,(()=>`Gram-Schmidt: Non-unique lengths found in the input vectors: (${t[n].shape[0]} vs. ${e})`))}else n=!0,t=(0,Le.l)(t,t.shape[0],0).map((t=>(0,We.r)(t,[0])));(0,_.vA)(t.length<=t[0].shape[0],(()=>`Gram-Schmidt: Number of vectors (${t.length}) exceeds number of dimensions (${t[0].shape[0]}).`));const e=[],r=t;for(let o=0;o<t.length;++o)e.push(gt.T2.tidy((()=>{let t=r[o];if(o>0)for(let n=0;n<o;++n){const r=(0,x.l)((0,He.c)((0,x.l)(e[n],t)),e[n]);t=(0,xn.j)(t,r)}return(0,kt.y)(t,(0,yr.x)(t,"euclidean"))})));return n?(0,je.t)(e,0):e}const xo=(0,A.op)({gramSchmidt_:To});var Ao=e(35287);
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
function Eo(t,n=!1){if((0,_.vA)(t.rank>=2,(()=>`qr() requires input tensor to have a rank >= 2, but got rank ${t.rank}`)),2===t.rank)return So(t,n);{const e=t.shape.slice(0,t.shape.length-2).reduce(((t,n)=>t*n)),r=(0,ur.K)((0,_t.t)(t,[e,t.shape[t.shape.length-2],t.shape[t.shape.length-1]]),0),o=[],s=[];r.forEach((t=>{const[e,r]=So(t,n);o.push(e),s.push(r)}));const i=(0,_t.t)((0,je.t)(o,0),t.shape),a=(0,_t.t)((0,je.t)(s,0),t.shape);return[i,a]}}function So(t,n=!1){return gt.T2.tidy((()=>{(0,_.vA)(2===t.shape.length,(()=>`qr2d() requires a 2D Tensor, but got a ${t.shape.length}D Tensor.`));const e=t.shape[0],r=t.shape[1];let o=Bt(e),s=(0,q.o)(t);const i=Je([[1]],[1,1]);let a=(0,q.o)(i);const u=e>=r?r:e;for(let t=0;t<u;++t){const n=s,u=a,c=o;[a,s,o]=gt.T2.tidy((()=>{const n=(0,S.d)(s,[t,t],[e-t,1]),u=(0,yr.x)(n),c=(0,S.d)(s,[t,t],[1,1]),l=(0,hr._)((0,Ot.r)(c,0),Je([[-1]]),Je([[1]])),h=(0,xn.j)(c,(0,x.l)(l,u)),f=(0,kt.y)(n,h);a=1===f.shape[0]?(0,q.o)(i):(0,k.x)([i,(0,S.d)(f,[1,0],[f.shape[0]-1,f.shape[1]])],0);const d=(0,Nn.H)((0,kt.y)((0,T.N)(l,h),u)),p=(0,S.d)(s,[t,0],[e-t,r]),m=(0,x.l)(d,a),g=(0,vr.m)(a);if(0===t)s=(0,xn.j)(p,(0,T.N)(m,(0,T.N)(g,p)));else{const n=(0,xn.j)(p,(0,T.N)(m,(0,T.N)(g,p)));s=(0,k.x)([(0,S.d)(s,[0,0],[t,r]),n],0)}const v=(0,vr.m)(m),y=(0,S.d)(o,[0,t],[e,o.shape[1]-t]);if(0===t)o=(0,xn.j)(y,(0,T.N)((0,T.N)(y,a),v));else{const n=(0,xn.j)(y,(0,T.N)((0,T.N)(y,a),v));o=(0,k.x)([(0,S.d)(o,[0,0],[e,t]),n],1)}return[a,s,o]})),(0,Ao.AS)([n,u,c])}return!n&&e>r&&(o=(0,S.d)(o,[0,0],[e,r]),s=(0,S.d)(s,[0,0],[r,r])),[o,s]}))}const $o=(0,A.op)({qr_:Eo});var Io=e(27084);function No(t,n,e=Io.i.SUM_BY_NONZERO_WEIGHTS){const r=(0,b.YT)(t,"losses","computeWeightedLoss");let o=null;null!=n&&(o=(0,b.YT)(n,"weights","computeWeightedLoss"));const s=null==o?r:(0,x.l)(r,o);if(e===Io.i.NONE)return s;if(e===Io.i.SUM)return(0,He.c)(s);if(e===Io.i.MEAN){if(null==o)return(0,dn.i)(s);{const t=r.size/o.size,n=(0,kt.y)((0,He.c)(s),(0,He.c)(o));return t>1?(0,kt.y)(n,(0,we.d)(t)):n}}if(e===Io.i.SUM_BY_NONZERO_WEIGHTS){if(null==o)return(0,kt.y)((0,He.c)(s),(0,we.d)(r.size));{const t=(0,x.l)(o,(0,pn.S)(r.shape)),n=(0,K.w)((0,He.c)((0,Dn.E)(t,(0,we.d)(0))),"float32");return(0,kt.y)((0,He.c)(s),n)}}throw Error(`Unknown reduction: ${e}`)}const Do=(0,A.op)({computeWeightedLoss_:No});
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
function Mo(t,n,e,r=Io.i.SUM_BY_NONZERO_WEIGHTS){const s=(0,b.YT)(t,"labels","absoluteDifference"),i=(0,b.YT)(n,"predictions","absoluteDifference");let a=null;null!=e&&(a=(0,b.YT)(e,"weights","absoluteDifference")),(0,_.O3)(s.shape,i.shape,"Error in absoluteDifference: ");const u=(0,o.t)((0,xn.j)(s,i));return Do(u,a,r)}const _o=(0,A.op)({absoluteDifference_:Mo});function Fo(t,n,e,r,o=Io.i.SUM_BY_NONZERO_WEIGHTS){const s=(0,b.YT)(t,"labels","cosineDistance"),i=(0,b.YT)(n,"predictions","cosineDistance");let a=null;null!=r&&(a=(0,b.YT)(r,"weights","cosineDistance")),(0,_.O3)(s.shape,i.shape,"Error in cosineDistance: ");const u=(0,we.d)(1),c=(0,xn.j)(u,(0,He.c)((0,x.l)(s,i),e,!0));return Do(c,a,o)}const Ro=(0,A.op)({cosineDistance_:Fo});function Bo(t,n,e,r=Io.i.SUM_BY_NONZERO_WEIGHTS){let o=(0,b.YT)(t,"labels","hingeLoss");const s=(0,b.YT)(n,"predictions","hingeLoss");let i=null;null!=e&&(i=(0,b.YT)(e,"weights","hingeLoss")),(0,_.O3)(o.shape,s.shape,"Error in hingeLoss: ");const a=(0,we.d)(1);o=(0,xn.j)((0,x.l)((0,we.d)(2),o),a);const u=(0,ie.V)((0,xn.j)(a,(0,x.l)(o,s)));return Do(u,i,r)}const Yo=(0,A.op)({hingeLoss_:Bo});
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
function Po(t,n,e,r=1,s=Io.i.SUM_BY_NONZERO_WEIGHTS){const i=(0,b.YT)(t,"labels","huberLoss"),u=(0,b.YT)(n,"predictions","huberLoss");let c=null;null!=e&&(c=(0,b.YT)(e,"weights","huberLoss")),(0,_.O3)(i.shape,u.shape,"Error in huberLoss: ");const l=(0,we.d)(r),h=(0,o.t)((0,xn.j)(u,i)),f=(0,yn.B)(h,l),d=(0,xn.j)(h,f),p=(0,a.W)((0,x.l)((0,we.d)(.5),(0,Tn.E)(f)),(0,x.l)(l,d));return Do(p,c,s)}const Co=(0,A.op)({huberLoss_:Po});
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
function zo(t,n,e,r=1e-7,o=Io.i.SUM_BY_NONZERO_WEIGHTS){const s=(0,b.YT)(t,"labels","logLoss"),i=(0,b.YT)(n,"predictions","logLoss");let u=null;null!=e&&(u=(0,b.YT)(e,"weights","logLoss")),(0,_.O3)(s.shape,i.shape,"Error in logLoss: ");const c=(0,we.d)(1),l=(0,we.d)(r),h=(0,Nn.H)((0,x.l)(s,(0,Xt.R)((0,a.W)(i,l)))),f=(0,x.l)((0,xn.j)(c,s),(0,Xt.R)((0,a.W)((0,xn.j)(c,i),l))),d=(0,xn.j)(h,f);return Do(d,u,o)}const Oo=(0,A.op)({logLoss_:zo});
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
function Lo(t,n,e,r=Io.i.SUM_BY_NONZERO_WEIGHTS){const o=(0,b.YT)(t,"labels","meanSquaredError"),s=(0,b.YT)(n,"predictions","meanSquaredError");let i=null;null!=e&&(i=(0,b.YT)(e,"weights","meanSquaredError")),(0,_.O3)(o.shape,s.shape,"Error in meanSquaredError: ");const a=(0,Ke.P)(o,s);return Do(a,i,r)}const Go=(0,A.op)({meanSquaredError_:Lo});
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
function Ko(t,n){const e=(0,b.YT)(t,"labels","sigmoidCrossEntropyWithLogits"),r=(0,b.YT)(n,"logits","sigmoidCrossEntropyWithLogits");(0,_.O3)(e.shape,r.shape,"Error in sigmoidCrossEntropyWithLogits: ");const s=(0,ie.V)(r),i=(0,x.l)(r,e),u=(0,Qt.K)((0,Nt.o)((0,Nn.H)((0,o.t)(r))));return(0,a.W)((0,xn.j)(s,i),u)}function Wo(t,n,e,r=0,o=Io.i.SUM_BY_NONZERO_WEIGHTS){let s=(0,b.YT)(t,"multiClassLabels","sigmoidCrossEntropy");const i=(0,b.YT)(n,"logits","sigmoidCrossEntropy");let u=null;if(null!=e&&(u=(0,b.YT)(e,"weights","sigmoidCrossEntropy")),(0,_.O3)(s.shape,i.shape,"Error in sigmoidCrossEntropy: "),r>0){const t=(0,we.d)(r),n=(0,we.d)(1),e=(0,we.d)(.5);s=(0,a.W)((0,x.l)(s,(0,xn.j)(n,t)),(0,x.l)(e,t))}const c=Ko(s,i);return Do(c,u,o)}const jo=(0,A.op)({sigmoidCrossEntropy_:Wo});var qo=e(31830);
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
function Uo(t,n,e=-1){if(-1===e&&(e=n.rank-1),e!==n.rank-1)throw Error(`Softmax cross entropy along a non-last dimension is not yet supported. Labels / logits was rank ${n.rank} and dim was ${e}`);const r=(0,qo._X)(((t,n,r)=>{const o=!0,s=(0,nn.V)(n,[e],o),i=(0,xn.j)((0,K.w)(n,"float32"),s);r([t,i]);const a=(0,Nn.H)((0,x.l)(i,t)),u=(0,He.c)(a,[e]),c=(t,n)=>{const[r,o]=n,s=(0,kn.SM)(t.shape,[e]);return[(0,x.l)((0,_t.t)(t,s),(0,xn.j)((0,K.w)(r,"float32"),(0,Nt.o)(o))),(0,x.l)((0,_t.t)(t,s),(0,xn.j)((0,Nt.o)(o),(0,K.w)(r,"float32")))]};return{value:u,gradFunc:c}}));return r(t,n)}function Ho(t,n,e,r=0,o=Io.i.SUM_BY_NONZERO_WEIGHTS){let s=(0,b.YT)(t,"onehotLabels","softmaxCrossEntropy");const i=(0,b.YT)(n,"logits","softmaxCrossEntropy");let u=null;if(null!=e&&(u=(0,b.YT)(e,"weights","softmaxCrossEntropy")),(0,_.O3)(s.shape,i.shape,"Error in softmaxCrossEntropy: "),r>0){const t=(0,we.d)(r),n=(0,we.d)(1),e=(0,we.d)(s.shape[1]);s=(0,a.W)((0,x.l)(s,(0,xn.j)(n,t)),(0,kt.y)(t,e))}const c=Uo(s,i);return Do(c,u,o)}const Vo=(0,A.op)({softmaxCrossEntropy_:Ho});
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
function Zo(t,n,e,r){const o=(0,b.YT)(t,"indices","sparseFillEmptyRows","int32"),s=(0,b.YT)(n,"values","sparseFillEmptyRows"),i=(0,b.YT)(e,"denseShape","sparseFillEmptyRows","int32"),a=(0,b.YT)(r,"defaultValue","sparseFillEmptyRows",s.dtype);if(2!==o.rank)throw new Error(`Indices should be Tensor2D but received shape\n        ${o.shape}`);if(1!==s.rank)throw new Error(`Values should be Tensor1D but received shape ${s.shape}`);if(1!==i.rank)throw new Error(`Dense shape should be Tensor1D but received shape ${i.shape}`);if(0!==a.rank)throw new Error(`Default value should be a scalar but received shape ${a.shape}`);const u={indices:o,values:s,denseShape:i,defaultValue:a},c=gt.T2.runKernel(vt.C8,u);return{outputIndices:c[0],outputValues:c[1],emptyRowIndicator:c[2],reverseIndexMap:c[3]}}const Xo=(0,A.op)({sparseFillEmptyRows_:Zo});
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
function Qo(t,n,e){const r=(0,b.YT)(t,"inputIndices","sparseReshape","int32"),o=(0,b.YT)(n,"inputShape","sparseReshape","int32"),s=(0,b.YT)(e,"newShape","sparseReshape","int32");if(2!==r.rank)throw new Error(`Input indices should be Tensor2D but received shape\n        ${r.shape}`);if(1!==o.rank)throw new Error(`Input shape should be Tensor1D but received shape ${o.shape}`);if(1!==s.rank)throw new Error(`New shape should be Tensor1D but received shape ${s.shape}`);const i={inputIndices:r,inputShape:o,newShape:s},a=gt.T2.runKernel(vt.Bo,i);return{outputIndices:a[0],outputShape:a[1]}}const Jo=(0,A.op)({sparseReshape_:Qo});
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
function ts(t,n,e){const r=(0,b.YT)(t,"data","sparseSegmentMean"),o=(0,b.YT)(n,"indices","sparseSegmentMean","int32"),s=(0,b.YT)(e,"segmentIds","sparseSegmentMean","int32");if(r.rank<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(1!==o.rank)throw new Error(`Indices should be Tensor1D but received shape\n          ${o.shape}`);if(1!==s.rank)throw new Error(`Segment ids should be Tensor1D but received shape\n          ${s.shape}`);const i={data:r,indices:o,segmentIds:s};return gt.T2.runKernel(vt.L6,i)}const ns=(0,A.op)({sparseSegmentMean_:ts});
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
function es(t,n,e){const r=(0,b.YT)(t,"data","sparseSegmentSum"),o=(0,b.YT)(n,"indices","sparseSegmentSum","int32"),s=(0,b.YT)(e,"segmentIds","sparseSegmentSum","int32");if(r.rank<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(1!==o.rank)throw new Error(`Indices should be Tensor1D but received shape\n         ${o.shape}`);if(1!==s.rank)throw new Error(`Segment ids should be Tensor1D but received shape\n         ${s.shape}`);const i={data:r,indices:o,segmentIds:s};return gt.T2.runKernel(vt.Dv,i)}const rs=(0,A.op)({sparseSegmentSum_:es});
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
function os(t,n,e,r,o,s,i,a){const u=(0,b.YT)(t,"data","stringNGrams","string");if("string"!==u.dtype)throw new Error("Data must be of datatype string");if(1!==u.shape.length)throw new Error(`Data must be a vector, saw: ${u.shape}`);const c=(0,b.YT)(n,"dataSplits","stringNGrams");if("int32"!==c.dtype)throw new Error("Data splits must be of datatype int32");const l={separator:e,nGramWidths:r,leftPad:o,rightPad:s,padWidth:i,preserveShortSequences:a},h={data:u,dataSplits:c},f=gt.T2.runKernel(vt.YA,h,l);return{nGrams:f[0],nGramsSplits:f[1]}}const ss=(0,A.op)({stringNGrams_:os});
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
function is(t,n,e=!0){const r=(0,b.YT)(t,"input","stringSplit","string"),o=(0,b.YT)(n,"delimiter","stringSplit","string");if(1!==r.rank)throw new Error(`Input should be Tensor1D but received shape ${r.shape}`);if(0!==o.rank)throw new Error(`Delimiter should be a scalar but received shape ${o.shape}`);const s={skipEmpty:e},i={input:r,delimiter:o},a=gt.T2.runKernel(vt.iW,i,s);return{indices:a[0],values:a[1],shape:a[2]}}const as=(0,A.op)({stringSplit_:is});
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
function us(t,n){const e=(0,b.YT)(t,"input","stringToHashBucketFast","string"),r={numBuckets:n};if(n<=0)throw new Error("Number of buckets must be at least 1");const o={input:e};return gt.T2.runKernel(vt.$j,o,r)}const cs=(0,A.op)({stringToHashBucketFast_:us}),ls={fft:Pe.h,ifft:Ce.K,rfft:Oe.z,irfft:ze.g},hs={hammingWindow:Pr,hannWindow:zr,frame:Lr,stft:Kr},fs={flipLeftRight:Ur,grayscaleToRGB:Vr,resizeNearestNeighbor:po.b,resizeBilinear:fo.v,rotateWithOffset:Xr,cropAndResize:jr,nonMaxSuppression:to,nonMaxSuppressionAsync:ro,nonMaxSuppressionWithScore:so,nonMaxSuppressionWithScoreAsync:ao,nonMaxSuppressionPadded:co,nonMaxSuppressionPaddedAsync:ho,threshold:vo,transform:wo},ds={bandPart:ko,gramSchmidt:xo,qr:$o},ps={absoluteDifference:_o,computeWeightedLoss:Do,cosineDistance:Ro,hingeLoss:Yo,huberLoss:Co,logLoss:Oo,meanSquaredError:Go,sigmoidCrossEntropy:jo,softmaxCrossEntropy:Vo},ms={sparseFillEmptyRows:Xo,sparseReshape:Jo,sparseSegmentMean:ns,sparseSegmentSum:rs},gs={stringNGrams:ss,stringSplit:as,stringToHashBucketFast:cs}},63567:function(t,n,e){e.d(n,{h:function(){return l}});var r=e(57260),o=e(15441),s=e(28189),i=e(70125),a=e(70929),u=e(62302);
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
function c(t,n){let e=(0,s.YT)(t,"broadcastTo","x");const a=e.shape;if(n.some((t=>!(t>0)||t%1!==0)))throw new Error(`broadcastTo(): Invalid broadcast shape [${n}].`);if(n.length<e.rank)throw new Error(`broadcastTo(): shape.length=${n.length} < input.rank=${e.rank}.`);if(n.length>e.rank){const t=e.shape.slice();while(t.length<n.length)t.unshift(1);e=(0,u.t)(e,t)}const c=e.shape,l=Array.from(n);for(let r=n.length-1;r>=0;r--)if(c[r]===n[r])l[r]=1;else if(1!==e.shape[r])throw new Error(`broadcastTo(): [${a}] cannot be broadcast to [${n}].`);const h=l.map(((t,n)=>t>1?n:-1)).filter((t=>t>=0));if(0===h.length)return(0,i.o)(e);const f={x:e},d={reps:l};return r.T2.runKernel(o.FA,f,d)}const l=(0,a.op)({broadcastTo_:c})},63774:function(t,n,e){e.d(n,{r:function(){return u}});var r=e(57260),o=e(15441),s=e(28189),i=e(70929);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
function a(t){const n=(0,s.YT)(t,"x","atanh"),e={x:n};return r.T2.runKernel(o.zP,e)}const u=(0,i.op)({atanh_:a})},64243:function(t,n,e){e.r(n),e.d(n,{Abs:function(){return bn.lj},Acos:function(){return bn.Vv},Acosh:function(){return bn.PH},AdadeltaOptimizer:function(){return ce},AdagradOptimizer:function(){return he},AdamOptimizer:function(){return pe},AdamaxOptimizer:function(){return ve},Add:function(){return bn.OM},AddN:function(){return bn.Ek},All:function(){return bn.u8},Any:function(){return bn.FS},ArgMax:function(){return bn.Jp},ArgMin:function(){return bn.p_},Asin:function(){return bn.QK},Asinh:function(){return bn.ep},Atan:function(){return bn.Ty},Atan2:function(){return bn.lx},Atanh:function(){return bn.zP},AvgPool:function(){return bn.ho},AvgPool3D:function(){return bn.cS},AvgPool3DGrad:function(){return bn.ww},AvgPoolGrad:function(){return bn.VC},BatchMatMul:function(){return bn.jA},BatchToSpaceND:function(){return bn.Ik},Bincount:function(){return bn.N4},BroadcastArgs:function(){return bn.vj},BroadcastTo:function(){return bn.LB},Cast:function(){return bn.KX},Ceil:function(){return bn.QD},ClipByValue:function(){return bn.v},Complex:function(){return bn.pr},ComplexAbs:function(){return bn.$z},Concat:function(){return bn.$d},Conv2D:function(){return bn.p2},Conv2DBackpropFilter:function(){return bn.rF},Conv2DBackpropInput:function(){return bn.jf},Conv3D:function(){return bn.A1},Conv3DBackpropFilterV2:function(){return bn.iG},Conv3DBackpropInputV2:function(){return bn.gC},Cos:function(){return bn.t2},Cosh:function(){return bn.Mn},CropAndResize:function(){return bn.MR},Cumprod:function(){return bn.jj},Cumsum:function(){return bn.nY},DataStorage:function(){return Fr.GJ},DenseBincount:function(){return bn.wN},DepthToSpace:function(){return bn.TM},DepthwiseConv2dNative:function(){return bn.tG},DepthwiseConv2dNativeBackpropFilter:function(){return bn.X$},DepthwiseConv2dNativeBackpropInput:function(){return bn.nV},Diag:function(){return bn.OR},Dilation2D:function(){return bn.jx},Dilation2DBackpropFilter:function(){return bn.pk},Dilation2DBackpropInput:function(){return bn.bP},ENV:function(){return w.Km},Einsum:function(){return bn.Qg},Elu:function(){return bn.P},EluGrad:function(){return bn.rs},Environment:function(){return w.OH},Equal:function(){return bn.BR},Erf:function(){return bn._s},Exp:function(){return bn.ox},ExpandDims:function(){return bn.yb},Expm1:function(){return bn.fQ},FFT:function(){return bn.rG},Fill:function(){return bn.SQ},FlipLeftRight:function(){return bn.Bx},Floor:function(){return bn.Zg},FloorDiv:function(){return bn.El},FromPixels:function(){return bn.aw},FusedBatchNorm:function(){return bn.i5},FusedConv2D:function(){return bn.aA},FusedDepthwiseConv2D:function(){return bn.T7},GatherNd:function(){return bn.O4},GatherV2:function(){return bn.mx},Greater:function(){return bn.Xh},GreaterEqual:function(){return bn.lL},IFFT:function(){return bn.OA},Identity:function(){return bn.lz},Imag:function(){return bn.dv},IsFinite:function(){return bn.gI},IsInf:function(){return bn.E3},IsNan:function(){return bn.iP},KernelBackend:function(){return Fr.uI},LRN:function(){return bn.jM},LRNGrad:function(){return bn.To},LeakyRelu:function(){return bn.X0},Less:function(){return bn.mI},LessEqual:function(){return bn.Cw},LinSpace:function(){return bn.mn},Log:function(){return bn.M3},Log1p:function(){return bn.Cg},LogSoftmax:function(){return bn.zf},LogicalAnd:function(){return bn.RU},LogicalNot:function(){return bn.nZ},LogicalOr:function(){return bn.LX},LowerBound:function(){return bn.yP},Max:function(){return bn.VA},MaxPool:function(){return bn.t3},MaxPool3D:function(){return bn.yS},MaxPool3DGrad:function(){return bn.cH},MaxPoolGrad:function(){return bn.RX},MaxPoolWithArgmax:function(){return bn.TL},Maximum:function(){return bn.LD},Mean:function(){return bn.g5},Min:function(){return bn.lN},Minimum:function(){return bn.LG},MirrorPad:function(){return bn.x7},Mod:function(){return bn.BL},MomentumOptimizer:function(){return we},Multinomial:function(){return bn.WT},Multiply:function(){return bn.xu},Neg:function(){return bn.l0},NonMaxSuppressionV3:function(){return bn.SD},NonMaxSuppressionV4:function(){return bn.Zl},NonMaxSuppressionV5:function(){return bn.e0},NotEqual:function(){return bn.yl},OP_SCOPE_SUFFIX:function(){return xe.BTT},OneHot:function(){return bn.ur},OnesLike:function(){return bn.LW},Optimizer:function(){return ue},OptimizerConstructors:function(){return ke},Pack:function(){return bn.mM},PadV2:function(){return bn.OD},Pool:function(){return bn.bC},Pow:function(){return bn.py},Prelu:function(){return bn.Nc},Prod:function(){return bn.kd},RMSPropOptimizer:function(){return be},Range:function(){return bn.Q6},Rank:function(){return Te.rg},Real:function(){return bn.LR},RealDiv:function(){return bn.sD},Reciprocal:function(){return bn.hu},Reduction:function(){return Ae.i},Relu:function(){return bn.fU},Relu6:function(){return bn.P_},Reshape:function(){return bn.R2},ResizeBilinear:function(){return bn.hg},ResizeBilinearGrad:function(){return bn.FC},ResizeNearestNeighbor:function(){return bn.jO},ResizeNearestNeighborGrad:function(){return bn.XQ},Reverse:function(){return bn.D7},RotateWithOffset:function(){return bn.BK},Round:function(){return bn.hV},Rsqrt:function(){return bn.TO},SGDOptimizer:function(){return ye},ScatterNd:function(){return bn.pJ},SearchSorted:function(){return bn.uW},Select:function(){return bn.l6},Selu:function(){return bn.u$},Sigmoid:function(){return bn.vI},Sign:function(){return bn.YV},Sin:function(){return bn.hq},Sinh:function(){return bn.J3},Slice:function(){return bn.Ji},Softmax:function(){return bn.K2},Softplus:function(){return bn.Fi},SpaceToBatchND:function(){return bn.A8},SparseFillEmptyRows:function(){return bn.C8},SparseReshape:function(){return bn.Bo},SparseSegmentMean:function(){return bn.L6},SparseSegmentSum:function(){return bn.Dv},SparseToDense:function(){return bn.jg},SplitV:function(){return bn.Bl},Sqrt:function(){return bn.dF},Square:function(){return bn.M6},SquaredDifference:function(){return bn.Dd},Step:function(){return bn.pn},StridedSlice:function(){return bn.Uc},StringNGrams:function(){return bn.YA},StringSplit:function(){return bn.iW},StringToHashBucketFast:function(){return bn.$j},Sub:function(){return bn.Pb},Sum:function(){return bn.Wu},Tan:function(){return bn.oF},Tanh:function(){return bn.iu},Tensor:function(){return Bt.qY},TensorBuffer:function(){return Bt.yl},Tile:function(){return bn.FA},TopK:function(){return bn.TB},Transform:function(){return bn.dL},Transpose:function(){return bn.wx},Unique:function(){return bn.Ew},Unpack:function(){return bn.dX},UnsortedSegmentSum:function(){return bn.pP},UpperBound:function(){return bn.RM},Variable:function(){return Bt.rT},ZerosLike:function(){return bn.xJ},_FusedMatMul:function(){return bn.Dr},abs:function(){return xe.tnl},acos:function(){return xe.HQu},acosh:function(){return xe.FqL},add:function(){return xe.WQq},addN:function(){return xe.QiD},all:function(){return xe.Q7R},any:function(){return xe.bzn},argMax:function(){return xe.FLi},argMin:function(){return xe.XRg},asin:function(){return xe.qRo},asinh:function(){return xe.yHs},atan:function(){return xe.rYl},atan2:function(){return xe.FPz},atanh:function(){return xe.rfv},avgPool:function(){return xe.$jT},avgPool3d:function(){return xe.sub},backend:function(){return Jn.Hs},backend_util:function(){return h},basicLSTMCell:function(){return xe.lZX},batchNorm:function(){return xe.$v7},batchNorm2d:function(){return xe.BFc},batchNorm3d:function(){return xe.kSi},batchNorm4d:function(){return xe.T5N},batchToSpaceND:function(){return xe.GTe},bincount:function(){return xe.HbZ},booleanMaskAsync:function(){return xe.ftb},broadcastArgs:function(){return xe.ROE},broadcastTo:function(){return xe.hOW},broadcast_util:function(){return wn},browser:function(){return i},buffer:function(){return xe.ra8},cast:function(){return xe.wgE},ceil:function(){return xe.mkO},clipByValue:function(){return xe.zQh},clone:function(){return xe.o8B},complex:function(){return xe.faB},concat:function(){return xe.xWs},concat1d:function(){return xe.I1m},concat2d:function(){return xe.RPU},concat3d:function(){return xe.O5O},concat4d:function(){return xe.P1l},conv1d:function(){return xe.kA9},conv2d:function(){return xe.Xtf},conv2dTranspose:function(){return xe.wX9},conv3d:function(){return xe.IPL},conv3dTranspose:function(){return xe.jIJ},copyRegisteredKernels:function(){return kn.Cf},cos:function(){return xe.gnS},cosh:function(){return xe.yIG},cosineWindow:function(){return xe._jP},cumprod:function(){return xe.Lp0},cumsum:function(){return xe.rCv},customGrad:function(){return ie._X},denseBincount:function(){return xe.aOp},deprecationWarn:function(){return Jn.fL},depthToSpace:function(){return xe.Rj8},depthwiseConv2d:function(){return xe.Gl3},device_util:function(){return r},diag:function(){return xe.smy},dilation2d:function(){return xe.X7t},disableDeprecationWarnings:function(){return Jn.IS},dispose:function(){return Jn.AS},disposeVariables:function(){return Jn.rm},div:function(){return xe.y4m},divNoNan:function(){return xe.ek5},dot:function(){return xe.Omf},dropout:function(){return xe.EZY},einsum:function(){return xe._3C},elu:function(){return xe.Pqc},enableDebugMode:function(){return Jn.gY},enableProdMode:function(){return Jn.Sm},enclosingPowerOfTwo:function(){return xe.FJY},engine:function(){return Jn.Hi},env:function(){return w._K},equal:function(){return xe.LCg},erf:function(){return xe.Y12},euclideanNorm:function(){return xe.p4S},exp:function(){return xe.oNF},expandDims:function(){return xe.UG6},expm1:function(){return xe.IYd},eye:function(){return xe.y5U},fft:function(){return xe.hVP},fill:function(){return xe.GSj},findBackend:function(){return Jn.go},findBackendFactory:function(){return Jn.W4},floor:function(){return xe.RIf},floorDiv:function(){return xe.wh_},fused:function(){return xe.cZk},gather:function(){return xe.kgh},gatherND:function(){return xe.SY9},gather_util:function(){return a},getBackend:function(){return Jn.jz},getGradient:function(){return kn.vQ},getKernel:function(){return kn._5},getKernelsForBackend:function(){return kn.Op},grad:function(){return ie.Dv},grads:function(){return ie.ok},greater:function(){return xe.rhj},greaterEqual:function(){return xe.DQN},ifft:function(){return xe.KGM},imag:function(){return xe.ngS},image:function(){return xe.Slp},inTopKAsync:function(){return xe.U4u},io:function(){return o},irfft:function(){return xe.ggX},isFinite:function(){return xe.MIs},isInf:function(){return xe.EN4},isNaN:function(){return xe.yrW},keep:function(){return Jn.aC},kernel_impls:function(){return f},leakyRelu:function(){return xe.H8d},less:function(){return xe.M7h},lessEqual:function(){return xe.InN},linalg:function(){return xe.mPL},linspace:function(){return xe.mT8},localResponseNormalization:function(){return xe.Kgs},log:function(){return xe.Rm2},log1p:function(){return xe.Kko},logSigmoid:function(){return xe.nqI},logSoftmax:function(){return xe.HPB},logSumExp:function(){return xe.VZ},logicalAnd:function(){return xe.n76},logicalNot:function(){return xe.NSZ},logicalOr:function(){return xe.ztW},logicalXor:function(){return xe.rxB},losses:function(){return xe.YYh},lowerBound:function(){return xe.yzS},matMul:function(){return xe.NoW},math:function(){return s},max:function(){return xe.T9B},maxPool:function(){return xe.jgi},maxPool3d:function(){return xe.NYV},maxPoolWithArgmax:function(){return xe.RO},maximum:function(){return xe.PhQ},mean:function(){return xe.i2o},memory:function(){return Jn.m1},meshgrid:function(){return xe.OYQ},min:function(){return xe.jkA},minimum:function(){return xe.BpO},mirrorPad:function(){return xe.FFZ},mod:function(){return xe.ziu},moments:function(){return xe.Clk},movingAverage:function(){return xe.CRk},mul:function(){return xe.lKK},multiRNNCell:function(){return xe.YDF},multinomial:function(){return xe.OjQ},neg:function(){return xe.HZy},nextFrame:function(){return $e},norm:function(){return xe.xbf},notEqual:function(){return xe.Ec},oneHot:function(){return xe.Mw0},ones:function(){return xe.SaS},onesLike:function(){return xe.P61},op:function(){return xe.op},outerProduct:function(){return xe.X4o},pad:function(){return xe.eVF},pad1d:function(){return xe.BZs},pad2d:function(){return xe.grY},pad3d:function(){return xe.XHu},pad4d:function(){return xe.WLX},pool:function(){return xe.dzn},pow:function(){return xe.n7C},prelu:function(){return xe.NsG},print:function(){return xe.yyV},prod:function(){return xe._eU},profile:function(){return Jn.ME},rand:function(){return xe._9M},randomGamma:function(){return xe.pR9},randomNormal:function(){return xe.FE$},randomUniform:function(){return xe.YeY},range:function(){return xe.y17},ready:function(){return Jn.Gc},real:function(){return xe.xav},reciprocal:function(){return xe.VOZ},registerBackend:function(){return Jn.gJ},registerGradient:function(){return kn.kr},registerKernel:function(){return kn.tA},relu:function(){return xe.VVh},relu6:function(){return xe.j__},removeBackend:function(){return Jn.rE},reshape:function(){return xe.tQQ},reverse:function(){return xe.BEg},reverse1d:function(){return xe.QD2},reverse2d:function(){return xe.LMr},reverse3d:function(){return xe.I2l},reverse4d:function(){return xe.JYU},rfft:function(){return xe.z8$},round:function(){return xe.LIG},rsqrt:function(){return xe.Z$r},scalar:function(){return xe.d_2},scatterND:function(){return xe.NFr},scatter_util:function(){return Fn},searchSorted:function(){return xe.sZg},selu:function(){return xe.WfX},separableConv2d:function(){return xe.wdz},serialization:function(){return u},setBackend:function(){return Jn.jh},setPlatform:function(){return Jn.Ok},setdiff1dAsync:function(){return xe.F12},sigmoid:function(){return xe.ry7},sign:function(){return xe._SZ},signal:function(){return xe.vPA},sin:function(){return xe.F8e},sinh:function(){return xe.L0l},slice:function(){return xe.dik},slice1d:function(){return xe.Q$M},slice2d:function(){return xe.zAd},slice3d:function(){return xe.wck},slice4d:function(){return xe.R0O},slice_util:function(){return Rn},softmax:function(){return xe.Vs9},softplus:function(){return xe.lw0},spaceToBatchND:function(){return xe.eDJ},sparse:function(){return xe.lMo},sparseToDense:function(){return xe.Zhr},spectral:function(){return xe.lOn},split:function(){return xe.lDo},sqrt:function(){return xe.RZD},square:function(){return xe.EwI},squaredDifference:function(){return xe.Pbu},squeeze:function(){return xe.r2V},stack:function(){return xe.t$z},step:function(){return xe.PMw},stridedSlice:function(){return xe.Ym9},string:function(){return xe.YjP},sub:function(){return xe.jbE},sum:function(){return xe.czq},sumOutType:function(){return Te.ch},tan:function(){return xe.Mlm},tanh:function(){return xe.ymU},tensor:function(){return xe.OEK},tensor1d:function(){return xe.tGX},tensor2d:function(){return xe.KtR},tensor3d:function(){return xe.$_$},tensor4d:function(){return xe.g9W},tensor5d:function(){return xe.Lpo},tensor6d:function(){return xe.yxw},tensor_util:function(){return Cn},test_util:function(){return c},tidy:function(){return Jn.DZ},tile:function(){return xe.Vsq},time:function(){return Jn.kB},topk:function(){return xe.rfw},train:function(){return Ee},transpose:function(){return xe.mgz},truncatedNormal:function(){return xe.efE},unique:function(){return xe.AmM},unregisterGradient:function(){return kn.rY},unregisterKernel:function(){return kn.iP},unsortedSegmentSum:function(){return xe.zAU},unstack:function(){return xe.K$i},upcastType:function(){return Te.Tu},upperBound:function(){return xe.rni},util:function(){return zn},valueAndGrad:function(){return ie.jY},valueAndGrads:function(){return ie.mu},variable:function(){return xe.bvq},variableGrads:function(){return ie.y7},version_core:function(){return Qn},where:function(){return xe._M9},whereAsync:function(){return xe.YJN},zeros:function(){return xe.Ul9},zerosLike:function(){return xe.POl}});var r={};e.r(r),e.d(r,{isBrowser:function(){return y},isMobile:function(){return v},mockIsMobile:function(){return g}});var o={};e.r(o),e.d(o,{browserFiles:function(){return jt},browserHTTPRequest:function(){return rn},concatenateArrayBuffers:function(){return F},copyModel:function(){return Et},decodeWeights:function(){return $},encodeWeights:function(){return S},fromMemory:function(){return un},fromMemorySync:function(){return cn},getLoadHandlers:function(){return q},getModelArtifactsForJSON:function(){return Y},getModelArtifactsInfoForJSON:function(){return P},getSaveHandlers:function(){return j},http:function(){return en},isHTTPScheme:function(){return tn},listModels:function(){return xt},loadWeights:function(){return Ht},moveModel:function(){return St},registerLoadRouter:function(){return W},registerSaveRouter:function(){return K},removeModel:function(){return At},weightsLoaderFactory:function(){return Vt},withSaveHandler:function(){return ln},withSaveHandlerSync:function(){return hn}});var s={};e.r(s),e.d(s,{confusionMatrix:function(){return yn}});var i={};e.r(i),e.d(i,{fromPixels:function(){return Mn},fromPixelsAsync:function(){return Nn},toPixels:function(){return Dn}});var a={};e.r(a),e.d(a,{prepareAndValidate:function(){return _n}});var u={};e.r(u),e.d(u,{Serializable:function(){return Bn},SerializationMap:function(){return Yn},registerClass:function(){return Pn}});var c={};e.r(c),e.d(c,{TEST_EPSILON_FLOAT16:function(){return Ln},encodeStrings:function(){return Xn},expectArrayBuffersEqual:function(){return Zn},expectArraysClose:function(){return Gn},expectArraysEqual:function(){return qn},expectNumbersClose:function(){return Un},expectPromiseToFail:function(){return jn},expectValuesInRange:function(){return Vn},testEpsilon:function(){return Kn}});var l={};e.r(l),e.d(l,{collectGatherOpShapeInfo:function(){return Ir},computeOutShape:function(){return $r},segOpComputeOptimalWindowSize:function(){return Sr}});var h={};e.r(h),e.d(h,{ERF_A1:function(){return Ke},ERF_A2:function(){return We},ERF_A3:function(){return je},ERF_A4:function(){return qe},ERF_A5:function(){return Ue},ERF_P:function(){return Ge},PARALLELIZE_THRESHOLD:function(){return Fe},SELU_SCALE:function(){return Le.X},SELU_SCALEALPHA:function(){return Le.j},applyActivation:function(){return _e.f2},assertAndGetBroadcastShape:function(){return wn.assertAndGetBroadcastShape},assertAxesAreInnerMostDims:function(){return Ie.WC},assertParamsConsistent:function(){return Ne},assignToTypedArray:function(){return tr},axesAreInnerMostDims:function(){return Ie.WH},calculateShapes:function(){return Fn.calculateShapes},checkEinsumDimSizes:function(){return cr},checkPadOnDimRoundingMode:function(){return Me.s_},combineLocations:function(){return Ie.aF},complexWithEvenIndex:function(){return Xe},complexWithOddIndex:function(){return Qe},computeConv2DInfo:function(){return Me.uf},computeConv3DInfo:function(){return Me.p$},computeDefaultPad:function(){return Me.G8},computeDilation2DInfo:function(){return Me.YQ},computeOptimalWindowSize:function(){return Re},computeOutAndReduceShapes:function(){return Ie.lb},computeOutShape:function(){return De},computePool2DInfo:function(){return Me.E6},computePool3DInfo:function(){return Me.l5},convertConv2DDataFormat:function(){return Me.$Q},decodeEinsumEquation:function(){return ar},eitherStridesOrDilationsAreOne:function(){return Me.G0},expandShapeToKeepDim:function(){return Ie.SM},exponent:function(){return er},exponents:function(){return nr},fromStringArrayToUint8:function(){return Dr},fromUint8ToStringArray:function(){return Nr},getAxesPermutation:function(){return Ie.Em},getBroadcastDims:function(){return wn.getBroadcastDims},getComplexWithIndex:function(){return Je},getEinsumComputePath:function(){return lr},getEinsumPermutation:function(){return ur},getFusedBiasGradient:function(){return _e.Do},getFusedDyActivation:function(){return _e.XB},getImageCenter:function(){return Be},getInnerMostAxes:function(){return Ie.fK},getPermuted:function(){return Pe},getReductionAxes:function(){return wn.getReductionAxes},getReshaped:function(){return Ye},getReshapedPermuted:function(){return Ce},getSliceBeginCoords:function(){return ze},getSliceSize:function(){return Oe},getSparseFillEmptyRowsIndicesDenseShapeMismatch:function(){return pr},getSparseFillEmptyRowsNegativeIndexErrorMessage:function(){return mr},getSparseFillEmptyRowsOutOfRangeIndexErrorMessage:function(){return gr},getSparseReshapeEmptyTensorZeroOutputDimErrorMessage:function(){return wr},getSparseReshapeInputOutputMismatchErrorMessage:function(){return kr},getSparseReshapeInputOutputMultipleErrorMessage:function(){return br},getSparseReshapeMultipleNegativeOneOutputDimErrorMessage:function(){return vr},getSparseReshapeNegativeOutputDimErrorMessage:function(){return yr},getSparseSegmentReductionIndicesOutOfRangeErrorMessage:function(){return Er},getSparseSegmentReductionNegativeSegmentIdsErrorMessage:function(){return Tr},getSparseSegmentReductionNonIncreasingSegmentIdsErrorMessage:function(){return xr},getSparseSegmentReductionSegmentIdOutOfRangeErrorMessage:function(){return Ar},getUndoAxesPermutation:function(){return Ie.gx},isIdentityPermutation:function(){return hr},log:function(){return He.R},mergeRealAndImagArrays:function(){return Ve},prepareAndValidate:function(){return _n},prepareSplitSize:function(){return dr},segment_util:function(){return l},shouldFuse:function(){return _e.zE},slice_util:function(){return Rn},splitRealAndImagArrays:function(){return Ze},tupleValuesAreOne:function(){return Me.Dh},upcastType:function(){return Te.Tu},validateInput:function(){return Fn.validateInput},validateUpdateShape:function(){return Fn.validateUpdateShape},warn:function(){return He.i}});var f={};e.r(f),e.d(f,{nonMaxSuppressionV3Impl:function(){return Mr.c7},nonMaxSuppressionV4Impl:function(){return Mr.ZS},nonMaxSuppressionV5Impl:function(){return Mr.ut},whereImpl:function(){return _r.Y}});var d=e(57260);
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
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
function p(){return"undefined"!==typeof navigator&&null!=navigator}let m;function g(t){m=t}function v(t){if(void 0!==m)return m;if(t||p()){if(t||(t=navigator),"ReactNative"===t.product)return!0;const n=t.userAgent||t.vendor||("undefined"!==typeof window?window.opera:"");if(!n){const n=t;return n.userAgentData&&n.userAgentData.mobile}return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(n)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(n.substr(0,4))}return!1}function y(){return"undefined"!==typeof window&&null!=window.document||"undefined"!==typeof WorkerGlobalScope}var w=e(46574);
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
const b=(0,w._K)();b.registerFlag("DEBUG",(()=>!1),(t=>{t&&console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.")})),b.registerFlag("IS_BROWSER",(()=>y())),b.registerFlag("IS_NODE",(()=>"undefined"!==typeof process&&"undefined"!==typeof process.versions&&"undefined"!==typeof process.versions.node)),b.registerFlag("IS_CHROME",(()=>"undefined"!==typeof navigator&&null!=navigator&&null!=navigator.userAgent&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor))),b.registerFlag("PROD",(()=>!1)),b.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY",(()=>b.getBool("DEBUG"))),b.registerFlag("DEPRECATION_WARNINGS_ENABLED",(()=>!0)),b.registerFlag("IS_TEST",(()=>!1)),b.registerFlag("CHECK_COMPUTATION_FOR_ERRORS",(()=>!0)),b.registerFlag("WRAP_TO_IMAGEBITMAP",(()=>!1)),b.registerFlag("ENGINE_COMPILE_ONLY",(()=>!1));var k=e(37148),T=e(74027),x=e(45119);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
const A={float32:4,float16:2,int32:4,uint16:2,uint8:1,bool:1,complex64:8},E=4;async function S(t,n){const e=[],r=[],o=Array.isArray(t)?t.map((t=>t.name)):Object.keys(t);for(let i=0;i<o.length;++i){const s=o[i],a=Array.isArray(t)?t[i].tensor:t[s];if("float32"!==a.dtype&&"int32"!==a.dtype&&"bool"!==a.dtype&&"string"!==a.dtype&&"complex64"!==a.dtype)throw new Error(`Unsupported dtype in weight '${s}': ${a.dtype}`);const u={name:s,shape:a.shape,dtype:a.dtype};if("string"===a.dtype){const t=new Promise((async t=>{const n=await a.bytes(),e=n.reduce(((t,n)=>t+n.length),0)+E*n.length,r=new Uint8Array(e);let o=0;for(let s=0;s<n.length;s++){const t=n[s],e=new Uint8Array(new Uint32Array([t.length]).buffer);r.set(e,o),o+=E,r.set(t,o),o+=t.length}t(r)}));r.push(t)}else r.push(a.data());null!=n&&(u.group=n),e.push(u)}const s=await Promise.all(r);return{data:I(s),specs:e}}function $(t,n){const e={};let r,o=0;for(const s of n){const n=s.name,i=s.dtype,a=s.shape,u=(0,x.Ze)(a);let c;if("quantization"in s){const e=s.quantization;if("uint8"===e.dtype||"uint16"===e.dtype){if(!("min"in e)||!("scale"in e))throw new Error(`Weight ${s.name} with quantization ${e.dtype} doesn't have corresponding metadata min and scale.`)}else{if("float16"!==e.dtype)throw new Error(`Weight ${s.name} has unknown quantization dtype ${e.dtype}. Supported quantization dtypes are: 'uint8', 'uint16', and 'float16'.`);if("float32"!==i)throw new Error(`Weight ${s.name} is quantized with ${e.dtype} which only supports weights of type float32 not ${i}.`)}const a=A[e.dtype],l=t.slice(o,o+u*a),h="uint8"===e.dtype?new Uint8Array(l):new Uint16Array(l);if("float32"===i)if("uint8"===e.dtype||"uint16"===e.dtype){c=new Float32Array(h.length);for(let t=0;t<h.length;t++){const n=h[t];c[t]=n*e.scale+e.min}}else{if("float16"!==e.dtype)throw new Error(`Unsupported quantization type ${e.dtype} for weight type float32.`);void 0===r&&(r=L()),c=r(h)}else{if("int32"!==i)throw new Error(`Unsupported dtype in weight '${n}': ${i}`);if("uint8"!==e.dtype&&"uint16"!==e.dtype)throw new Error(`Unsupported quantization type ${e.dtype} for weight type int32.`);c=new Int32Array(h.length);for(let t=0;t<h.length;t++){const n=h[t];c[t]=Math.round(n*e.scale+e.min)}}o+=u*a}else if("string"===i){const n=(0,x.Ze)(s.shape);c=[];for(let e=0;e<n;e++){const n=new Uint32Array(t.slice(o,o+E))[0];o+=E;const e=new Uint8Array(t.slice(o,o+n));c.push(e),o+=n}}else{const r=A[i],s=t.slice(o,o+u*r);if("float32"===i)c=new Float32Array(s);else if("int32"===i)c=new Int32Array(s);else if("bool"===i)c=new Uint8Array(s);else{if("complex64"!==i)throw new Error(`Unsupported dtype in weight '${n}': ${i}`);{c=new Float32Array(s);const t=new Float32Array(c.length/2),r=new Float32Array(c.length/2);for(let n=0;n<t.length;n++)t[n]=c[2*n],r[n]=c[2*n+1];const o=(0,T.O)(t,a,"float32"),i=(0,T.O)(r,a,"float32");e[n]=(0,k.f)(o,i),o.dispose(),i.dispose()}}o+=u*r}"complex64"!==i&&(e[n]=(0,T.O)(c,a,i))}return e}function I(t){if(null===t)throw new Error(`Invalid input value: ${JSON.stringify(t)}`);let n=0;const e=[];t.forEach((t=>{if(n+=t.byteLength,e.push(t.byteLength===t.buffer.byteLength?t:new t.constructor(t)),!(t instanceof Float32Array||t instanceof Int32Array||t instanceof Uint8Array))throw new Error(`Unsupported TypedArray subtype: ${t.constructor.name}`)}));const r=new Uint8Array(n);let o=0;return e.forEach((t=>{r.set(new Uint8Array(t.buffer),o),o+=t.byteLength})),r.buffer}const N="undefined"!==typeof Buffer&&("undefined"===typeof Blob||"undefined"===typeof atob||"undefined"===typeof btoa);function D(t){return N?Buffer.byteLength(t):new Blob([t]).size}function M(t){if(N)return Buffer.from(t).toString("base64");const n=new Uint8Array(t);let e="";for(let r=0,o=n.length;r<o;r++)e+=String.fromCharCode(n[r]);return btoa(e)}function _(t){if(N){const n=Buffer.from(t,"base64");return n.buffer.slice(n.byteOffset,n.byteOffset+n.byteLength)}const n=atob(t),e=new Uint8Array(n.length);for(let r=0;r<n.length;++r)e.set([n.charCodeAt(r)],r);return e.buffer}function F(t){if(1===t.length)return t[0];let n=0;t.forEach((t=>{n+=t.byteLength}));const e=new Uint8Array(n);let r=0;return t.forEach((t=>{e.set(new Uint8Array(t),r),r+=t.byteLength})),e.buffer}function R(t){const n="/";t=t.trim();while(t.endsWith(n))t=t.slice(0,t.length-1);const e=t.split(n);return e[e.length-1]}function B(t,n){const e={modelTopology:t.modelTopology,format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,weightsManifest:n};return null!=t.signature&&(e.signature=t.signature),null!=t.userDefinedMetadata&&(e.userDefinedMetadata=t.userDefinedMetadata),null!=t.modelInitializer&&(e.modelInitializer=t.modelInitializer),null!=t.trainingConfig&&(e.trainingConfig=t.trainingConfig),e}async function Y(t,n){const e={modelTopology:t.modelTopology,format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy};if(null!=t.trainingConfig&&(e.trainingConfig=t.trainingConfig),null!=t.weightsManifest){const[r,o]=await n(t.weightsManifest);e.weightSpecs=r,e.weightData=o}return null!=t.signature&&(e.signature=t.signature),null!=t.userDefinedMetadata&&(e.userDefinedMetadata=t.userDefinedMetadata),null!=t.modelInitializer&&(e.modelInitializer=t.modelInitializer),e}function P(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("Expected JSON model topology, received ArrayBuffer.");return{dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:null==t.modelTopology?0:D(JSON.stringify(t.modelTopology)),weightSpecsBytes:null==t.weightSpecs?0:D(JSON.stringify(t.weightSpecs)),weightDataBytes:null==t.weightData?0:t.weightData.byteLength}}function C(){const t=t=>{let n=t<<13,e=0;while(0===(8388608&n))e-=8388608,n<<=1;return n&=-8388609,e+=947912704,n|e},n=new Uint32Array(2048);n[0]=0;for(let e=1;e<1024;e++)n[e]=t(e);for(let e=1024;e<2048;e++)n[e]=939524096+(e-1024<<13);return n}function z(){const t=new Uint32Array(64);t[0]=0,t[31]=1199570944,t[32]=2147483648,t[63]=3347054592;for(let n=1;n<31;n++)t[n]=n<<23;for(let n=33;n<63;n++)t[n]=2147483648+(n-32<<23);return t}function O(){const t=new Uint32Array(64);for(let n=0;n<64;n++)t[n]=1024;return t[0]=t[32]=0,t}function L(){const t=C(),n=z(),e=O();return r=>{const o=new ArrayBuffer(4*r.length),s=new Uint32Array(o);for(let i=0;i<r.length;i++){const o=r[i],a=t[e[o>>10]+(1023&o)]+n[o>>10];s[i]=a}return new Float32Array(o)}}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
class G{constructor(){this.saveRouters=[],this.loadRouters=[]}static getInstance(){return null==G.instance&&(G.instance=new G),G.instance}static registerSaveRouter(t){G.getInstance().saveRouters.push(t)}static registerLoadRouter(t){G.getInstance().loadRouters.push(t)}static getSaveHandlers(t){return G.getHandlers(t,"save")}static getLoadHandlers(t,n){return G.getHandlers(t,"load",n)}static getHandlers(t,n,e){const r=[],o="load"===n?G.getInstance().loadRouters:G.getInstance().saveRouters;return o.forEach((n=>{const o=n(t,e);null!==o&&r.push(o)})),r}}const K=t=>G.registerSaveRouter(t),W=t=>G.registerLoadRouter(t),j=t=>G.getSaveHandlers(t),q=(t,n)=>G.getLoadHandlers(t,n),U="tensorflowjs",H=1,V="models_store",Z="model_info_store";function X(){if(!(0,w._K)().getBool("IS_BROWSER"))throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");const t="undefined"===typeof window?self:window,n=t.indexedDB||t.mozIndexedDB||t.webkitIndexedDB||t.msIndexedDB||t.shimIndexedDB;if(null==n)throw new Error("The current browser does not appear to support IndexedDB.");return n}function Q(t){const n=t.result;n.createObjectStore(V,{keyPath:"modelPath"}),n.createObjectStore(Z,{keyPath:"modelPath"})}class J{constructor(t){if(this.indexedDB=X(),null==t||!t)throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");this.modelPath=t}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");return this.databaseAction(this.modelPath,t)}async load(){return this.databaseAction(this.modelPath)}databaseAction(t,n){return new Promise(((t,e)=>{const r=this.indexedDB.open(U,H);r.onupgradeneeded=()=>Q(r),r.onsuccess=()=>{const o=r.result;if(null==n){const n=o.transaction(V,"readonly"),r=n.objectStore(V),s=r.get(this.modelPath);s.onsuccess=()=>{if(null==s.result)return o.close(),e(new Error(`Cannot find model with path '${this.modelPath}' in IndexedDB.`));t(s.result.modelArtifacts)},s.onerror=t=>(o.close(),e(s.error)),n.oncomplete=()=>o.close()}else{const r=P(n),s=o.transaction(Z,"readwrite");let i=s.objectStore(Z);const a=i.put({modelPath:this.modelPath,modelArtifactsInfo:r});let u;a.onsuccess=()=>{u=o.transaction(V,"readwrite");const a=u.objectStore(V),c=a.put({modelPath:this.modelPath,modelArtifacts:n,modelArtifactsInfo:r});c.onsuccess=()=>t({modelArtifactsInfo:r}),c.onerror=t=>{i=s.objectStore(Z);const n=i.delete(this.modelPath);n.onsuccess=()=>(o.close(),e(c.error)),n.onerror=t=>(o.close(),e(c.error))}},a.onerror=t=>(o.close(),e(a.error)),s.oncomplete=()=>{null==u?o.close():u.oncomplete=()=>o.close()}}},r.onerror=t=>e(r.error)}))}}J.URL_SCHEME="indexeddb://";const tt=t=>(0,w._K)().getBool("IS_BROWSER")&&!Array.isArray(t)&&t.startsWith(J.URL_SCHEME)?nt(t.slice(J.URL_SCHEME.length)):null;function nt(t){return new J(t)}function et(t){return t.startsWith(J.URL_SCHEME)?t.slice(J.URL_SCHEME.length):t}G.registerSaveRouter(tt),G.registerLoadRouter(tt);class rt{constructor(){this.indexedDB=X()}async listModels(){return new Promise(((t,n)=>{const e=this.indexedDB.open(U,H);e.onupgradeneeded=()=>Q(e),e.onsuccess=()=>{const r=e.result,o=r.transaction(Z,"readonly"),s=o.objectStore(Z),i=s.getAll();i.onsuccess=()=>{const n={};for(const t of i.result)n[t.modelPath]=t.modelArtifactsInfo;t(n)},i.onerror=t=>(r.close(),n(i.error)),o.oncomplete=()=>r.close()},e.onerror=t=>n(e.error)}))}async removeModel(t){return t=et(t),new Promise(((n,e)=>{const r=this.indexedDB.open(U,H);r.onupgradeneeded=()=>Q(r),r.onsuccess=()=>{const o=r.result,s=o.transaction(Z,"readwrite"),i=s.objectStore(Z),a=i.get(t);let u;a.onsuccess=()=>{if(null==a.result)return o.close(),e(new Error(`Cannot find model with path '${t}' in IndexedDB.`));{const r=i.delete(t),s=()=>{u=o.transaction(V,"readwrite");const r=u.objectStore(V),s=r.delete(t);s.onsuccess=()=>n(a.result.modelArtifactsInfo),s.onerror=t=>e(a.error)};r.onsuccess=s,r.onerror=t=>(s(),o.close(),e(a.error))}},a.onerror=t=>(o.close(),e(a.error)),s.oncomplete=()=>{null==u?o.close():u.oncomplete=()=>o.close()}},r.onerror=t=>e(r.error)}))}}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
const ot="/",st="tensorflowjs_models",it="info",at="model_topology",ut="weight_specs",ct="weight_data",lt="model_metadata";function ht(t){return{info:[st,t,it].join(ot),topology:[st,t,at].join(ot),weightSpecs:[st,t,ut].join(ot),weightData:[st,t,ct].join(ot),modelMetadata:[st,t,lt].join(ot)}}function ft(t){for(const n of Object.values(t))window.localStorage.removeItem(n)}function dt(t){const n=t.split(ot);if(n.length<3)throw new Error(`Invalid key format: ${t}`);return n.slice(1,n.length-1).join(ot)}function pt(t){return t.startsWith(mt.URL_SCHEME)?t.slice(mt.URL_SCHEME.length):t}class mt{constructor(t){if(!(0,w._K)().getBool("IS_BROWSER")||"undefined"===typeof window||"undefined"===typeof window.localStorage)throw new Error("The current environment does not support local storage.");if(this.LS=window.localStorage,null==t||!t)throw new Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=t,this.keys=ht(this.modelPath)}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");{const e=JSON.stringify(t.modelTopology),r=JSON.stringify(t.weightSpecs),o=P(t);try{this.LS.setItem(this.keys.info,JSON.stringify(o)),this.LS.setItem(this.keys.topology,e),this.LS.setItem(this.keys.weightSpecs,r),this.LS.setItem(this.keys.weightData,M(t.weightData));const n={format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,signature:null!=t.signature?t.signature:void 0,userDefinedMetadata:null!=t.userDefinedMetadata?t.userDefinedMetadata:void 0,modelInitializer:null!=t.modelInitializer?t.modelInitializer:void 0,trainingConfig:null!=t.trainingConfig?t.trainingConfig:void 0};return this.LS.setItem(this.keys.modelMetadata,JSON.stringify(n)),{modelArtifactsInfo:o}}catch(n){throw ft(this.keys),new Error(`Failed to save model '${this.modelPath}' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes=${o.modelTopologyBytes}, weightSpecsBytes=${o.weightSpecsBytes}, weightDataBytes=${o.weightDataBytes}.`)}}}async load(){const t=JSON.parse(this.LS.getItem(this.keys.info));if(null==t)throw new Error(`In local storage, there is no model with name '${this.modelPath}'`);if("JSON"!==t.modelTopologyType)throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");const n={},e=JSON.parse(this.LS.getItem(this.keys.topology));if(null==e)throw new Error(`In local storage, the topology of model '${this.modelPath}' is missing.`);n.modelTopology=e;const r=JSON.parse(this.LS.getItem(this.keys.weightSpecs));if(null==r)throw new Error(`In local storage, the weight specs of model '${this.modelPath}' are missing.`);n.weightSpecs=r;const o=this.LS.getItem(this.keys.modelMetadata);if(null!=o){const t=JSON.parse(o);n.format=t.format,n.generatedBy=t.generatedBy,n.convertedBy=t.convertedBy,null!=t.signature&&(n.signature=t.signature),null!=t.userDefinedMetadata&&(n.userDefinedMetadata=t.userDefinedMetadata),null!=t.modelInitializer&&(n.modelInitializer=t.modelInitializer),null!=t.trainingConfig&&(n.trainingConfig=t.trainingConfig)}const s=this.LS.getItem(this.keys.weightData);if(null==s)throw new Error(`In local storage, the binary weight values of model '${this.modelPath}' are missing.`);return n.weightData=_(s),n}}mt.URL_SCHEME="localstorage://";const gt=t=>(0,w._K)().getBool("IS_BROWSER")&&!Array.isArray(t)&&t.startsWith(mt.URL_SCHEME)?vt(t.slice(mt.URL_SCHEME.length)):null;function vt(t){return new mt(t)}G.registerSaveRouter(gt),G.registerLoadRouter(gt);class yt{constructor(){(0,x.vA)((0,w._K)().getBool("IS_BROWSER"),(()=>"Current environment is not a web browser")),(0,x.vA)("undefined"===typeof window||"undefined"!==typeof window.localStorage,(()=>"Current browser does not appear to support localStorage")),this.LS=window.localStorage}async listModels(){const t={},n=st+ot,e=ot+it;for(let r=0;r<this.LS.length;++r){const o=this.LS.key(r);if(o.startsWith(n)&&o.endsWith(e)){const n=dt(o);t[n]=JSON.parse(this.LS.getItem(o))}}return t}async removeModel(t){t=pt(t);const n=ht(t);if(null==this.LS.getItem(n.info))throw new Error(`Cannot find model at path '${t}'`);const e=JSON.parse(this.LS.getItem(n.info));return ft(n),e}}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
const wt="://";class bt{constructor(){this.managers={}}static getInstance(){return null==bt.instance&&(bt.instance=new bt),bt.instance}static registerManager(t,n){(0,x.vA)(null!=t,(()=>"scheme must not be undefined or null.")),t.endsWith(wt)&&(t=t.slice(0,t.indexOf(wt))),(0,x.vA)(t.length>0,(()=>"scheme must not be an empty string."));const e=bt.getInstance();(0,x.vA)(null==e.managers[t],(()=>`A model store manager is already registered for scheme '${t}'.`)),e.managers[t]=n}static getManager(t){const n=this.getInstance().managers[t];if(null==n)throw new Error(`Cannot find model manager for scheme '${t}'`);return n}static getSchemes(){return Object.keys(this.getInstance().managers)}}function kt(t){if(-1===t.indexOf(wt))throw new Error(`The url string provided does not contain a scheme. Supported schemes are: ${bt.getSchemes().join(",")}`);return{scheme:t.split(wt)[0],path:t.split(wt)[1]}}async function Tt(t,n,e=!1){(0,x.vA)(t!==n,(()=>`Old path and new path are the same: '${t}'`));const r=G.getLoadHandlers(t);(0,x.vA)(r.length>0,(()=>`Copying failed because no load handler is found for source URL ${t}.`)),(0,x.vA)(r.length<2,(()=>`Copying failed because more than one (${r.length}) load handlers for source URL ${t}.`));const o=r[0],s=G.getSaveHandlers(n);(0,x.vA)(s.length>0,(()=>`Copying failed because no save handler is found for destination URL ${n}.`)),(0,x.vA)(s.length<2,(()=>`Copying failed because more than one (${r.length}) save handlers for destination URL ${n}.`));const i=s[0],a=kt(t).scheme,u=kt(t).path,c=a===kt(t).scheme,l=await o.load();e&&c&&await bt.getManager(a).removeModel(u);const h=await i.save(l);return e&&!c&&await bt.getManager(a).removeModel(u),h.modelArtifactsInfo}async function xt(){const t=bt.getSchemes(),n={};for(const e of t){const t=await bt.getManager(e).listModels();for(const r in t){const o=e+wt+r;n[o]=t[r]}}return n}async function At(t){const n=kt(t),e=bt.getManager(n.scheme);return e.removeModel(n.path)}async function Et(t,n){const e=!1;return Tt(t,n,e)}async function St(t,n){const e=!0;return Tt(t,n,e)}
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
class $t{fetch(t,n){return fetch(t,n)}now(){return performance.now()}encode(t,n){if("utf-8"!==n&&"utf8"!==n)throw new Error(`Browser's encoder only supports utf-8, but got ${n}`);return null==this.textEncoder&&(this.textEncoder=new TextEncoder),this.textEncoder.encode(t)}decode(t,n){return new TextDecoder(n).decode(t)}}if((0,w._K)().get("IS_BROWSER")){(0,w._K)().setPlatform("browser",new $t);try{bt.registerManager(mt.URL_SCHEME,new yt)}catch(Rr){}try{bt.registerManager(J.URL_SCHEME,new rt)}catch(Rr){}}
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
const It={importFetch:()=>e(85817)};let Nt;class Dt{constructor(){this.util=e(18590),this.textEncoder=new this.util.TextEncoder}fetch(t,n){return null!=(0,w._K)().global.fetch?(0,w._K)().global.fetch(t,n):(null==Nt&&(Nt=It.importFetch()),Nt(t,n))}now(){const t=process.hrtime();return 1e3*t[0]+t[1]/1e6}encode(t,n){if("utf-8"!==n&&"utf8"!==n)throw new Error(`Node built-in encoder only supports utf-8, but got ${n}`);return this.textEncoder.encode(t)}decode(t,n){return 0===t.length?"":new this.util.TextDecoder(n).decode(t)}}(0,w._K)().get("IS_NODE")&&!(0,w._K)().get("IS_BROWSER")&&(0,w._K)().setPlatform("node",new Dt);var Mt=e(448),_t=e(29809),Ft=e(70125),Rt=e(75295),Bt=e(21722);
/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
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
 * Copyright 2020 Google Inc. All Rights Reserved.
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
(0,d.Ye)();const Yt={buffer:Mt.r,cast:_t.w,clone:Ft.o,print:Rt.y};(0,Bt.Q5)(Yt);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
const Pt="model",Ct=".json",zt=".weights.bin";function Ot(t){return new Promise((t=>setTimeout(t))).then(t)}class Lt{constructor(t){if(!(0,w._K)().getBool("IS_BROWSER"))throw new Error("browserDownloads() cannot proceed because the current environment is not a browser.");t.startsWith(Lt.URL_SCHEME)&&(t=t.slice(Lt.URL_SCHEME.length)),null!=t&&0!==t.length||(t=Pt),this.modelJsonFileName=t+Ct,this.weightDataFileName=t+zt}async save(t){if("undefined"===typeof document)throw new Error("Browser downloads are not supported in this environment since `document` is not present");const n=window.URL.createObjectURL(new Blob([t.weightData],{type:"application/octet-stream"}));if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");{const e=[{paths:["./"+this.weightDataFileName],weights:t.weightSpecs}],r=B(t,e),o=window.URL.createObjectURL(new Blob([JSON.stringify(r)],{type:"application/json"})),s=null==this.modelJsonAnchor?document.createElement("a"):this.modelJsonAnchor;if(s.download=this.modelJsonFileName,s.href=o,await Ot((()=>s.dispatchEvent(new MouseEvent("click")))),null!=t.weightData){const t=null==this.weightDataAnchor?document.createElement("a"):this.weightDataAnchor;t.download=this.weightDataFileName,t.href=n,await Ot((()=>t.dispatchEvent(new MouseEvent("click"))))}return{modelArtifactsInfo:P(t)}}}}Lt.URL_SCHEME="downloads://";class Gt{constructor(t){if(null==t||t.length<1)throw new Error(`When calling browserFiles, at least 1 file is required, but received ${t}`);this.jsonFile=t[0],this.weightsFiles=t.slice(1)}async load(){return new Promise(((t,n)=>{const e=new FileReader;e.onload=e=>{const r=JSON.parse(e.target.result),o=r.modelTopology;if(null==o)return void n(new Error(`modelTopology field is missing from file ${this.jsonFile.name}`));const s=r.weightsManifest;if(null==s)return void n(new Error(`weightManifest field is missing from file ${this.jsonFile.name}`));if(0===this.weightsFiles.length)return void t({modelTopology:o});const i=Y(r,(t=>this.loadWeights(t)));t(i)},e.onerror=t=>n(`Failed to read model topology and weights manifest JSON from file '${this.jsonFile.name}'. BrowserFiles supports loading Keras-style tf.Model artifacts only.`),e.readAsText(this.jsonFile)}))}loadWeights(t){const n=[],e=[];for(const s of t)n.push(...s.weights),e.push(...s.paths);const r=this.checkManifestAndWeightFiles(t),o=e.map((t=>this.loadWeightsFile(t,r[t])));return Promise.all(o).then((t=>[n,F(t)]))}loadWeightsFile(t,n){return new Promise(((e,r)=>{const o=new FileReader;o.onload=t=>{const n=t.target.result;e(n)},o.onerror=n=>r(`Failed to weights data from file of path '${t}'.`),o.readAsArrayBuffer(n)}))}checkManifestAndWeightFiles(t){const n=[],e=this.weightsFiles.map((t=>R(t.name))),r={};for(const o of t)o.paths.forEach((t=>{const o=R(t);if(-1!==n.indexOf(o))throw new Error(`Duplicate file basename found in weights manifest: '${o}'`);if(n.push(o),-1===e.indexOf(o))throw new Error(`Weight file with basename '${o}' is not provided.`);r[t]=this.weightsFiles[e.indexOf(o)]}));if(n.length!==this.weightsFiles.length)throw new Error(`Mismatch in the number of files in weights manifest (${n.length}) and the number of weight files provided (${this.weightsFiles.length}).`);return r}}const Kt=t=>(0,w._K)().getBool("IS_BROWSER")&&!Array.isArray(t)&&t.startsWith(Lt.URL_SCHEME)?Wt(t.slice(Lt.URL_SCHEME.length)):null;function Wt(t="model"){return new Lt(t)}function jt(t){return new Gt(t)}
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
function qt(t,n,e,r){i(t),e=null==e?0:e,r=null==r?1:r,a(e,r);let o=0;const s=s=>(s.then((s=>{const i=e+ ++o/t.length*(r-e);return n(i),s})),s);function i(t){(0,x.vA)(null!=t&&Array.isArray(t)&&t.length>0,(()=>"promises must be a none empty array"))}function a(t,n){(0,x.vA)(t>=0&&t<=1,(()=>`Progress fraction must be in range [0, 1], but got startFraction ${t}`)),(0,x.vA)(n>=0&&n<=1,(()=>`Progress fraction must be in range [0, 1], but got endFraction ${n}`)),(0,x.vA)(n>=t,(()=>`startFraction must be no more than endFraction, but got startFraction ${t} and endFraction ${n}`))}return Promise.all(t.map(s))}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
async function Ut(t,n){null==n&&(n={});const e=null==n.fetchFunc?(0,w._K)().platform.fetch:n.fetchFunc,r=t.map((t=>e(t,n.requestInit,{isBinary:!0}))),o=0,s=.5,i=null==n.onProgress?await Promise.all(r):await qt(r,n.onProgress,o,s),a=i.map((t=>t.arrayBuffer())),u=.5,c=1,l=null==n.onProgress?await Promise.all(a):await qt(a,n.onProgress,u,c);return l}async function Ht(t,n="",e,r){const o=t=>Ut(t,{requestInit:r}),s=Vt(o);return s(t,n,e)}function Vt(t){return async(n,e="",r)=>{const o=n.map((()=>!1)),s={},i=null!=r?r.map((()=>!1)):[],a=[];if(n.forEach(((t,n)=>{let e=0;t.weights.forEach((t=>{const u="quantization"in t?t.quantization.dtype:t.dtype,c=A[u]*x.Ze(t.shape),l=()=>{o[n]=!0,null==s[n]&&(s[n]=[]),s[n].push({manifestEntry:t,groupOffset:e,sizeBytes:c})};null!=r?r.forEach(((n,e)=>{n===t.name&&(l(),i[e]=!0)})):l(),a.push(t.name),e+=c}))})),!i.every((t=>t))){const t=r.filter(((t,n)=>!i[n]));throw new Error(`Could not find weights in manifest with names: ${t.join(", ")}. \nManifest JSON has weights with names: ${a.join(", ")}.`)}const u=o.reduce(((t,n,e)=>(n&&t.push(e),t)),[]),c=[];u.forEach((t=>{n[t].paths.forEach((t=>{const n=e+(e.endsWith("/")?"":"/")+t;c.push(n)}))}));const l=await t(c),h={};let f=0;return u.forEach((t=>{const e=n[t].paths.length;let r=0;for(let n=0;n<e;n++)r+=l[f+n].byteLength;const o=new ArrayBuffer(r),i=new Uint8Array(o);let a=0;for(let n=0;n<e;n++){const t=new Uint8Array(l[f+n]);i.set(t,a),a+=t.byteLength}const u=s[t];u.forEach((t=>{const n=o.slice(t.groupOffset,t.groupOffset+t.sizeBytes),e=$(n,[t.manifestEntry]);for(const r in e)h[r]=e[r]})),f+=e})),h}}G.registerSaveRouter(Kt);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
const Zt="application/octet-stream",Xt="application/json";class Qt{constructor(t,n){if(this.DEFAULT_METHOD="POST",null==n&&(n={}),this.weightPathPrefix=n.weightPathPrefix,this.onProgress=n.onProgress,this.weightUrlConverter=n.weightUrlConverter,null!=n.fetchFunc?((0,x.vA)("function"===typeof n.fetchFunc,(()=>"Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)")),this.fetch=n.fetchFunc):this.fetch=(0,w._K)().platform.fetch,(0,x.vA)(null!=t&&t.length>0,(()=>"URL path for http must not be null, undefined or empty.")),Array.isArray(t)&&(0,x.vA)(2===t.length,(()=>`URL paths for http must have a length of 2, (actual length is ${t.length}).`)),this.path=t,null!=n.requestInit&&null!=n.requestInit.body)throw new Error("requestInit is expected to have no pre-existing body, but has one.");this.requestInit=n.requestInit||{}}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");const n=Object.assign({method:this.DEFAULT_METHOD},this.requestInit);n.body=new FormData;const e=[{paths:["./model.weights.bin"],weights:t.weightSpecs}],r=B(t,e);n.body.append("model.json",new Blob([JSON.stringify(r)],{type:Xt}),"model.json"),null!=t.weightData&&n.body.append("model.weights.bin",new Blob([t.weightData],{type:Zt}),"model.weights.bin");const o=await this.fetch(this.path,n);if(o.ok)return{modelArtifactsInfo:P(t),responses:[o]};throw new Error(`BrowserHTTPRequest.save() failed due to HTTP response status ${o.status}.`)}async load(){const t=await this.fetch(this.path,this.requestInit);if(!t.ok)throw new Error(`Request to ${this.path} failed with status code ${t.status}. Please verify this URL points to the model JSON of the model to load.`);let n;try{n=await t.json()}catch(o){let t=`Failed to parse model JSON of response from ${this.path}.`;throw this.path.endsWith(".pb")?t+=" Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.":t+=" Please make sure the server is serving valid JSON for this request.",new Error(t)}const e=n.modelTopology,r=n.weightsManifest;if(null==e&&null==r)throw new Error(`The JSON from HTTP path ${this.path} contains neither model topology or manifest for weights.`);return Y(n,(t=>this.loadWeights(t)))}async loadWeights(t){const n=Array.isArray(this.path)?this.path[1]:this.path,[e,r]=Jt(n),o=this.weightPathPrefix||e,s=[];for(const c of t)s.push(...c.weights);const i=[],a=[];for(const c of t)for(const t of c.paths)null!=this.weightUrlConverter?a.push(this.weightUrlConverter(t)):i.push(o+t+r);this.weightUrlConverter&&i.push(...await Promise.all(a));const u=await Ut(i,{requestInit:this.requestInit,fetchFunc:this.fetch,onProgress:this.onProgress});return[s,F(u)]}}function Jt(t){const n=t.lastIndexOf("/"),e=t.lastIndexOf("?"),r=t.substring(0,n),o=e>n?t.substring(e):"";return[r+"/",o]}function tn(t){return null!=t.match(Qt.URL_SCHEME_REGEX)}Qt.URL_SCHEME_REGEX=/^https?:\/\//;const nn=(t,n)=>{if("undefined"===typeof fetch&&(null==n||null==n.fetchFunc))return null;{let e=!0;if(e=Array.isArray(t)?t.every((t=>tn(t))):tn(t),e)return en(t,n)}return null};function en(t,n){return new Qt(t,n)}function rn(t,n){return en(t,n)}G.registerSaveRouter(nn),G.registerLoadRouter(nn);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
class on{constructor(t){this.modelArtifacts=t}load(){return this.modelArtifacts}}class sn{constructor(t){this.saveHandler=t}save(t){return this.saveHandler(t)}}class an{constructor(t){t.load&&(this.load=()=>Promise.resolve(t.load())),t.save&&(this.save=n=>Promise.resolve(t.save(n)))}}function un(t,n,e,r){const o=arguments;return new an(cn(...o))}function cn(t,n,e,r){if(1===arguments.length){const n=null!=t.modelTopology||null!=t.weightSpecs;return n?new on(t):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new on({modelTopology:t}))}return console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new on({modelTopology:t,weightSpecs:n,weightData:e,trainingConfig:r})}function ln(t){return new sn(t)}function hn(t){return new sn(t)}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
var fn=e(28189),dn=e(65703),pn=e(11760),mn=e(70929),gn=e(7703);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
function vn(t,n,e){const r=(0,fn.YT)(t,"labels","confusionMatrix"),o=(0,fn.YT)(n,"predictions","confusionMatrix");x.vA(null==e||e>0&&Number.isInteger(e),(()=>`If provided, numClasses must be a positive integer, but got ${e}`)),x.vA(1===r.rank,(()=>`Expected the rank of labels to be 1, but got ${r.rank}`)),x.vA(1===o.rank,(()=>`Expected the rank of predictions to be 1, but got ${o.rank}`)),x.vA(r.shape[0]===o.shape[0],(()=>`Mismatch in the number of examples: ${r.shape[0]} vs. ${o.shape[0]}. Labels and predictions should have the same number of elements.`)),x.vA(e>0&&Number.isInteger(e),(()=>`numClasses is required to be a positive integer, but got ${e}`));const s=(0,pn.M)((0,_t.w)(r,"int32"),e),i=(0,pn.M)((0,_t.w)(o,"int32"),e),a=(0,gn.m)(s),u=(0,dn.N)(a,i);return(0,_t.w)(u,"int32")}const yn=(0,mn.op)({confusionMatrix_:vn});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
var wn=e(62198),bn=e(15441),kn=e(37074),Tn=e(42768);
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
let xn;function An(t,n=3){if(n>4)throw new Error("Cannot construct Tensor with more than 4 channels from pixels.");if(null==t)throw new Error("pixels passed to tf.browser.fromPixels() can not be null");let e=!1,r=!1,o=!1,s=!1,i=!1,a=!1;if(t.data instanceof Uint8Array)e=!0;else if("undefined"!==typeof ImageData&&t instanceof ImageData)r=!0;else if("undefined"!==typeof HTMLVideoElement&&t instanceof HTMLVideoElement)o=!0;else if("undefined"!==typeof HTMLImageElement&&t instanceof HTMLImageElement)s=!0;else if(null!=t.getContext)i=!0;else{if(!("undefined"!==typeof ImageBitmap&&t instanceof ImageBitmap))throw new Error(`pixels passed to tf.browser.fromPixels() must be either an HTMLVideoElement, HTMLImageElement, HTMLCanvasElement, ImageData in browser, or OffscreenCanvas, ImageData in webworker or {data: Uint32Array, width: number, height: number}, but was ${t.constructor.name}`);a=!0}if(o){const n=2;if(o&&t.readyState<n)throw new Error("The video element has not loaded data yet. Please wait for `loadeddata` event on the <video> element.")}const u=(0,kn._5)(bn.aw,d.T2.backendName);if(null!=u){const e={pixels:t},r={numChannels:n};return d.T2.runKernel(bn.aw,e,r)}const[c,l]=o?[t.videoWidth,t.videoHeight]:[t.width,t.height];let h,f;if(i)h=t.getContext("2d").getImageData(0,0,c,l).data;else if(r||e)h=t.data;else if(s||o||a){if(null==xn)if("undefined"===typeof document){if("undefined"===typeof OffscreenCanvas||"undefined"===typeof OffscreenCanvasRenderingContext2D)throw new Error("Cannot parse input in current context. Reason: OffscreenCanvas Context2D rendering is not supported.");xn=new OffscreenCanvas(1,1).getContext("2d")}else xn=document.createElement("canvas").getContext("2d");xn.canvas.width=c,xn.canvas.height=l,xn.drawImage(t,0,0,c,l),h=xn.getImageData(0,0,c,l).data}if(4===n)f=new Int32Array(h);else{const t=c*l;f=new Int32Array(t*n);for(let e=0;e<t;e++)for(let t=0;t<n;++t)f[e*n+t]=h[4*e+t]}const p=[l,c,n];return(0,Tn.$)(f,p,"int32")}function En(t){return null!=t&&t.data instanceof Uint8Array}function Sn(){return"undefined"!==typeof window&&"undefined"!==typeof ImageBitmap&&window.hasOwnProperty("createImageBitmap")}function $n(t){return null!=t&&0!==t.width&&0!==t.height}function In(t){return Sn()&&!(t instanceof ImageBitmap)&&$n(t)&&!En(t)}async function Nn(t,n=3){let e=null;if((0,w._K)().getBool("WRAP_TO_IMAGEBITMAP")&&In(t)){let n;try{n=await createImageBitmap(t,{premultiplyAlpha:"none"})}catch(r){n=null}e=null!=n&&n.width===t.width&&n.height===t.height?n:t}else e=t;return An(e,n)}async function Dn(t,n){let e=(0,fn.YT)(t,"img","toPixels");if(!(t instanceof Bt.qY)){const t=e;e=(0,_t.w)(t,"int32"),t.dispose()}if(2!==e.rank&&3!==e.rank)throw new Error(`toPixels only supports rank 2 or 3 tensors, got rank ${e.rank}.`);const[r,o]=e.shape.slice(0,2),s=2===e.rank?1:e.shape[2];if(s>4||2===s)throw new Error(`toPixels only supports depth of size 1, 3 or 4 but got ${s}`);if("float32"!==e.dtype&&"int32"!==e.dtype)throw new Error(`Unsupported type for toPixels: ${e.dtype}. Please use float32 or int32 tensors.`);const i=await e.data(),a="float32"===e.dtype?255:1,u=new Uint8ClampedArray(o*r*4);for(let c=0;c<r*o;++c){const t=[0,0,0,255];for(let r=0;r<s;r++){const n=i[c*s+r];if("float32"===e.dtype){if(n<0||n>1)throw new Error(`Tensor values for a float32 Tensor must be in the range [0 - 1] but encountered ${n}.`)}else if("int32"===e.dtype&&(n<0||n>255))throw new Error(`Tensor values for a int32 Tensor must be in the range [0 - 255] but encountered ${n}.`);1===s?(t[0]=n*a,t[1]=n*a,t[2]=n*a):t[r]=n*a}const n=4*c;u[n+0]=Math.round(t[0]),u[n+1]=Math.round(t[1]),u[n+2]=Math.round(t[2]),u[n+3]=Math.round(t[3])}if(null!=n){n.width=o,n.height=r;const t=n.getContext("2d"),e=new ImageData(u,o,r);t.putImageData(e,0,0)}return e!==t&&e.dispose(),u}const Mn=(0,mn.op)({fromPixels_:An});function _n(t,n){const e=t.shape.length,r=n.shape.length;if(e<1)throw new Error(`tf.gatherND() expects the input to be rank 1 or higher, but the rank was ${e}.`);if(r<1)throw new Error(`tf.gatherND() expects the indices to be rank 1 or higher, but the rank was ${r}.`);if("int32"!==n.dtype)throw new Error(`tf.gatherND() expects the indices to be int32 type, but the dtype was ${n.dtype}.`);if(n.shape[r-1]>e)throw new Error(`index innermost dimension length must be <= tensor rank; saw: ${n.shape[r-1]} vs. ${e}`);if(0===(0,x.Ze)(t.shape))throw new Error(`Requested more than 0 entries, but input is empty. Input shape: ${t.shape}.`);const o=n.shape,s=o[o.length-1];let i=1;for(let h=0;h<o.length-1;++h)i*=o[h];const a=t.shape,u=o.slice();u.pop();let c=1;for(let h=s;h<e;++h)c*=a[h],u.push(a[h]);const l=[...(0,x.Ur)(t.shape).map((t=>t/c)),1].slice(0,s);return[u,i,c,l]}var Fn=e(26170),Rn=e(34969);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
class Bn{getClassName(){return this.constructor.className}static fromConfig(t,n){return new t(n)}}class Yn{constructor(){this.classNameMap={}}static getMap(){return null==Yn.instance&&(Yn.instance=new Yn),Yn.instance}static register(t){Yn.getMap().classNameMap[t.className]=[t,t.fromConfig]}}function Pn(t){(0,x.vA)(null!=t.className,(()=>"Class being registered does not have the static className property defined.")),(0,x.vA)("string"===typeof t.className,(()=>"className is required to be a string, but got type "+typeof t.className)),(0,x.vA)(t.className.length>0,(()=>"Class being registered has an empty-string as its className, which is disallowed.")),Yn.register(t)}var Cn=e(30565),zn=e(31259);
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
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
const On=.001,Ln=.1;function Gn(t,n,e){return null==e&&(e=Kn()),Wn(t,n,((t,n)=>Hn(t,n,e)))}function Kn(){return 32===d.T2.backend.floatPrecision()?On:Ln}function Wn(t,n,e){let r=!0;if(((0,x.iu)(t)||(0,x.iu)(n))&&(r=!1),(0,x.iu)(t)&&(0,x.iu)(n)&&(r=!0),r){const e=t.constructor.name,r=n.constructor.name;if(e!==r)throw new Error(`Arrays are of different type. Actual: ${e}. Expected: ${r}`)}if(Array.isArray(t)&&Array.isArray(n)){const e=(0,fn.MZ)(t),r=(0,fn.MZ)(n);if(!(0,x.r1)(e,r))throw new Error(`Arrays have different shapes. Actual: [${e}]. Expected: [${r}]`)}const o=(0,x.iu)(t)?t:(0,x.Bq)(t),s=(0,x.iu)(n)?n:(0,x.Bq)(n);if(o.length!==s.length)throw new Error(`Arrays have different lengths actual: ${o.length} vs expected: ${s.length}.\nActual:   ${o}.\nExpected: ${s}.`);for(let i=0;i<s.length;++i){const t=o[i],n=s[i];if(!e(t,n))throw new Error(`Arrays differ: actual[${i}] = ${t}, expected[${i}] = ${n}.\nActual:   ${o}.\nExpected: ${s}.`)}}function jn(t,n){t().then((()=>n.fail()),(()=>n()))}function qn(t,n){const e="string"===typeof n||"number"===typeof n||"boolean"===typeof n?[n]:n;return(0,x.Kg)(t)||(0,x.Kg)(t[0])||(0,x.Kg)(n)||(0,x.Kg)(n[0])?Wn(t,e,((t,n)=>t==n)):Wn(t,n,((t,n)=>Hn(t,n,0)))}function Un(t,n,e){if(null==e&&(e=Kn()),!Hn(t,n,e))throw new Error(`Numbers differ: actual === ${t}, expected === ${n}`)}function Hn(t,n,e){return!isFinite(t)&&!isFinite(n)||!(isNaN(t)||isNaN(n)||Math.abs(t-n)>e)}function Vn(t,n,e){for(let r=0;r<t.length;r++)if(t[r]<n||t[r]>e)throw new Error(`Value out of range:${t[r]} low: ${n}, high: ${e}`)}function Zn(t,n){const e=new Float32Array(t),r=new Float32Array(n);if(e.length!==r.length)throw new Error(`Expected ArrayBuffer to be of length ${r.length}, but it was ${e.length}`);for(let o=0;o<r.length;o++)if(e[o]!==r[o])throw new Error(`Expected ArrayBuffer value at ${o} to be ${r[o]} but got ${e[o]} instead`)}function Xn(t){for(let n=0;n<t.length;n++){const e=t[n];Array.isArray(e)?Xn(e):t[n]=(0,zn.encodeString)(e)}return t}
/** @license See the LICENSE file. */
const Qn="3.18.0";var Jn=e(35287),te=e(37523),ne=e(89359),ee=e(9258),re=e(79348),oe=e(45793),se=e(55537),ie=e(31830),ae=e(45702);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
class ue extends Bn{minimize(t,n=!1,e){const{value:r,grads:o}=this.computeGradients(t,e);if(null!=e){const t=e.map((t=>({name:t.name,tensor:o[t.name]})));this.applyGradients(t)}else this.applyGradients(o);return(0,Jn.AS)(o),n?r:(r.dispose(),null)}get iterations(){return null==this.iterations_&&(this.iterations_=0),this.iterations_}incrementIterations(){this.iterations_=this.iterations+1}computeGradients(t,n){return(0,ie.y7)(t,n)}dispose(){null!=this.iterations_&&(0,Jn.AS)(this.iterations_)}async saveIterations(){return null==this.iterations_&&(this.iterations_=0),{name:"iter",tensor:(0,ae.d)(this.iterations_,"int32")}}async getWeights(){throw new Error("getWeights() is not implemented for this optimizer yet.")}async setWeights(t){throw new Error(`setWeights() is not implemented for this optimizer class ${this.getClassName()}`)}async extractIterations(t){return this.iterations_=(await t[0].tensor.data())[0],t.slice(1)}}Object.defineProperty(ue,Symbol.hasInstance,{value:t=>null!=t.minimize&&null!=t.computeGradients&&null!=t.applyGradients});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
class ce extends ue{constructor(t,n,e=null){super(),this.learningRate=t,this.rho=n,this.epsilon=e,this.accumulatedGrads=[],this.accumulatedUpdates=[],null==e&&(this.epsilon=d.T2.backend.epsilon())}applyGradients(t){const n=Array.isArray(t)?t.map((t=>t.name)):Object.keys(t);n.forEach(((n,e)=>{const r=d.T2.registeredVariables[n],o=!1;null==this.accumulatedGrads[e]&&(this.accumulatedGrads[e]={originalName:`${n}/accum_grad`,variable:(0,Jn.DZ)((()=>(0,se.P)(r).variable(o)))}),null==this.accumulatedUpdates[e]&&(this.accumulatedUpdates[e]={originalName:`${n}/accum_var`,variable:(0,Jn.DZ)((()=>(0,se.P)(r).variable(o)))});const s=Array.isArray(t)?t[e].tensor:t[n];if(null==s)return;const i=this.accumulatedGrads[e].variable,a=this.accumulatedUpdates[e].variable;(0,Jn.DZ)((()=>{const t=(0,te.W)((0,ee.l)(i,this.rho),(0,ee.l)((0,oe.E)(s),1-this.rho)),n=(0,ee.l)((0,ne.y)((0,re.R)((0,te.W)(a,this.epsilon)),(0,re.R)((0,te.W)(i,this.epsilon))),s),e=(0,te.W)((0,ee.l)(a,this.rho),(0,ee.l)((0,oe.E)(n),1-this.rho));i.assign(t),a.assign(e);const o=(0,te.W)((0,ee.l)(n,-this.learningRate),r);r.assign(o)}))})),this.incrementIterations()}dispose(){null!=this.accumulatedUpdates&&((0,Jn.AS)(this.accumulatedGrads.map((t=>t.variable))),(0,Jn.AS)(this.accumulatedUpdates.map((t=>t.variable))))}async getWeights(){const t=[...this.accumulatedGrads,...this.accumulatedUpdates];return[await this.saveIterations()].concat(t.map((t=>({name:t.originalName,tensor:t.variable}))))}async setWeights(t){t=await this.extractIterations(t);const n=t.length/2,e=!1;this.accumulatedGrads=t.slice(0,n).map((t=>({originalName:t.name,variable:t.tensor.variable(e)}))),this.accumulatedUpdates=t.slice(n,2*n).map((t=>({originalName:t.name,variable:t.tensor.variable(e)})))}getConfig(){return{learningRate:this.learningRate,rho:this.rho,epsilon:this.epsilon}}static fromConfig(t,n){return new t(n["learningRate"],n["rho"],n["epsilon"])}}ce.className="Adadelta",Pn(ce);var le=e(96111);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
class he extends ue{constructor(t,n=.1){super(),this.learningRate=t,this.initialAccumulatorValue=n,this.accumulatedGrads=[]}applyGradients(t){const n=Array.isArray(t)?t.map((t=>t.name)):Object.keys(t);n.forEach(((n,e)=>{const r=d.T2.registeredVariables[n];if(null==this.accumulatedGrads[e]){const t=!1;this.accumulatedGrads[e]={originalName:`${n}/accumulator`,variable:(0,Jn.DZ)((()=>(0,le.G)(r.shape,this.initialAccumulatorValue).variable(t)))}}const o=Array.isArray(t)?t[e].tensor:t[n];if(null==o)return;const s=this.accumulatedGrads[e].variable;(0,Jn.DZ)((()=>{const t=(0,te.W)(s,(0,oe.E)(o));s.assign(t);const n=(0,te.W)((0,ee.l)((0,ne.y)(o,(0,re.R)((0,te.W)(t,d.T2.backend.epsilon()))),-this.learningRate),r);r.assign(n)}))})),this.incrementIterations()}dispose(){null!=this.accumulatedGrads&&(0,Jn.AS)(this.accumulatedGrads.map((t=>t.variable)))}async getWeights(){return[await this.saveIterations()].concat(this.accumulatedGrads.map((t=>({name:t.originalName,tensor:t.variable}))))}async setWeights(t){t=await this.extractIterations(t);const n=!1;this.accumulatedGrads=t.map((t=>({originalName:t.name,variable:t.tensor.variable(n)})))}getConfig(){return{learningRate:this.learningRate,initialAccumulatorValue:this.initialAccumulatorValue}}static fromConfig(t,n){return new t(n["learningRate"],n["initialAccumulatorValue"])}}he.className="Adagrad",Pn(he);var fe=e(98990),de=e(77126);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
class pe extends ue{constructor(t,n,e,r=null){super(),this.learningRate=t,this.beta1=n,this.beta2=e,this.epsilon=r,this.accumulatedFirstMoment=[],this.accumulatedSecondMoment=[],(0,Jn.DZ)((()=>{this.accBeta1=(0,ae.d)(n).variable(),this.accBeta2=(0,ae.d)(e).variable()})),null==r&&(this.epsilon=d.T2.backend.epsilon())}applyGradients(t){const n=Array.isArray(t)?t.map((t=>t.name)):Object.keys(t);(0,Jn.DZ)((()=>{const e=(0,de.j)(1,this.accBeta1),r=(0,de.j)(1,this.accBeta2);n.forEach(((n,o)=>{const s=d.T2.registeredVariables[n],i=!1;null==this.accumulatedFirstMoment[o]&&(this.accumulatedFirstMoment[o]={originalName:`${n}/m`,variable:(0,Jn.DZ)((()=>(0,se.P)(s).variable(i)))}),null==this.accumulatedSecondMoment[o]&&(this.accumulatedSecondMoment[o]={originalName:`${n}/v`,variable:(0,Jn.DZ)((()=>(0,se.P)(s).variable(i)))});const a=Array.isArray(t)?t[o].tensor:t[n];if(null==a)return;const u=this.accumulatedFirstMoment[o].variable,c=this.accumulatedSecondMoment[o].variable,l=(0,te.W)((0,ee.l)(u,this.beta1),(0,ee.l)(a,1-this.beta1)),h=(0,te.W)((0,ee.l)(c,this.beta2),(0,ee.l)((0,oe.E)(a),1-this.beta2)),f=(0,ne.y)(l,e),p=(0,ne.y)(h,r);u.assign(l),c.assign(h);const m=(0,te.W)((0,ee.l)((0,ne.y)(f,(0,te.W)((0,re.R)(p),this.epsilon)),-this.learningRate),s);s.assign(m)})),this.accBeta1.assign((0,ee.l)(this.accBeta1,this.beta1)),this.accBeta2.assign((0,ee.l)(this.accBeta2,this.beta2))})),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.accBeta2.dispose(),null!=this.accumulatedFirstMoment&&(0,Jn.AS)(this.accumulatedFirstMoment.map((t=>t.variable))),null!=this.accumulatedSecondMoment&&(0,Jn.AS)(this.accumulatedSecondMoment.map((t=>t.variable)))}async getWeights(){const t=[...this.accumulatedFirstMoment,...this.accumulatedSecondMoment];return[await this.saveIterations()].concat(t.map((t=>({name:t.originalName,tensor:t.variable}))))}async setWeights(t){t=await this.extractIterations(t),(0,Jn.DZ)((()=>{this.accBeta1.assign((0,fe.n)(this.beta1,this.iterations_+1)),this.accBeta2.assign((0,fe.n)(this.beta2,this.iterations_+1))}));const n=t.length/2,e=!1;this.accumulatedFirstMoment=t.slice(0,n).map((t=>({originalName:t.name,variable:t.tensor.variable(e)}))),this.accumulatedSecondMoment=t.slice(n,2*n).map((t=>({originalName:t.name,variable:t.tensor.variable(e)})))}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon}}static fromConfig(t,n){return new t(n["learningRate"],n["beta1"],n["beta2"],n["epsilon"])}}pe.className="Adam",Pn(pe);var me=e(4888),ge=e(30178);
/**
* @license
* Copyright 2018 Google LLC. All Rights Reserved.
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
class ve extends ue{constructor(t,n,e,r=null,o=0){super(),this.learningRate=t,this.beta1=n,this.beta2=e,this.epsilon=r,this.decay=o,this.accumulatedFirstMoment=[],this.accumulatedWeightedInfNorm=[],(0,Jn.DZ)((()=>{this.iteration=(0,ae.d)(0).variable(),this.accBeta1=(0,ae.d)(n).variable()})),null==r&&(this.epsilon=d.T2.backend.epsilon())}applyGradients(t){const n=Array.isArray(t)?t.map((t=>t.name)):Object.keys(t);(0,Jn.DZ)((()=>{const e=(0,de.j)(1,this.accBeta1),r=(0,ne.y)(-this.learningRate,(0,te.W)((0,ee.l)(this.iteration,this.decay),1));n.forEach(((n,o)=>{const s=d.T2.registeredVariables[n],i=!1;null==this.accumulatedFirstMoment[o]&&(this.accumulatedFirstMoment[o]={originalName:`${n}/m`,variable:(0,se.P)(s).variable(i)}),null==this.accumulatedWeightedInfNorm[o]&&(this.accumulatedWeightedInfNorm[o]={originalName:`${n}/v`,variable:(0,se.P)(s).variable(i)});const a=Array.isArray(t)?t[o].tensor:t[n];if(null==a)return;const u=this.accumulatedFirstMoment[o].variable,c=this.accumulatedWeightedInfNorm[o].variable,l=(0,te.W)((0,ee.l)(u,this.beta1),(0,ee.l)(a,1-this.beta1)),h=(0,ee.l)(c,this.beta2),f=(0,me.t)(a),p=(0,ge.P)(h,f);u.assign(l),c.assign(p);const m=(0,te.W)((0,ee.l)((0,ne.y)(r,e),(0,ne.y)(l,(0,te.W)(p,this.epsilon))),s);s.assign(m)})),this.iteration.assign((0,te.W)(this.iteration,1)),this.accBeta1.assign((0,ee.l)(this.accBeta1,this.beta1))})),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.iteration.dispose(),null!=this.accumulatedFirstMoment&&(0,Jn.AS)(this.accumulatedFirstMoment.map((t=>t.variable))),null!=this.accumulatedWeightedInfNorm&&(0,Jn.AS)(this.accumulatedWeightedInfNorm.map((t=>t.variable)))}async getWeights(){throw new Error("getWeights() is not implemented for Adamax yet.")}async setWeights(t){throw new Error("setWeights() is not implemented for Adamax yet.")}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon,decay:this.decay}}static fromConfig(t,n){return new t(n["learningRate"],n["beta1"],n["beta2"],n["epsilon"],n["decay"])}}ve.className="Adamax",Pn(ve);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
class ye extends ue{constructor(t){super(),this.learningRate=t,this.setLearningRate(t)}applyGradients(t){const n=Array.isArray(t)?t.map((t=>t.name)):Object.keys(t);n.forEach(((n,e)=>{const r=Array.isArray(t)?t[e].tensor:t[n];if(null==r)return;const o=d.T2.registeredVariables[n];(0,Jn.DZ)((()=>{const t=(0,te.W)((0,ee.l)(this.c,r),o);o.assign(t)}))})),this.incrementIterations()}setLearningRate(t){this.learningRate=t,null!=this.c&&this.c.dispose(),this.c=(0,Jn.aC)((0,ae.d)(-t))}dispose(){this.c.dispose()}async getWeights(){return[await this.saveIterations()]}async setWeights(t){if(t=await this.extractIterations(t),0!==t.length)throw new Error("SGD optimizer does not have settable weights.")}getConfig(){return{learningRate:this.learningRate}}static fromConfig(t,n){return new t(n["learningRate"])}}ye.className="SGD",Pn(ye);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
class we extends ye{constructor(t,n,e=!1){super(t),this.learningRate=t,this.momentum=n,this.useNesterov=e,this.accumulations=[],this.m=(0,ae.d)(this.momentum)}applyGradients(t){const n=Array.isArray(t)?t.map((t=>t.name)):Object.keys(t);n.forEach(((n,e)=>{const r=d.T2.registeredVariables[n];if(null==this.accumulations[e]){const t=!1;this.accumulations[e]={originalName:`${n}/momentum`,variable:(0,Jn.DZ)((()=>(0,se.P)(r).variable(t)))}}const o=this.accumulations[e].variable,s=Array.isArray(t)?t[e].tensor:t[n];null!=s&&(0,Jn.DZ)((()=>{let t;const n=(0,te.W)((0,ee.l)(this.m,o),s);t=this.useNesterov?(0,te.W)((0,ee.l)(this.c,(0,te.W)(s,(0,ee.l)(n,this.m))),r):(0,te.W)((0,ee.l)(this.c,n),r),o.assign(n),r.assign(t)}))})),this.incrementIterations()}dispose(){this.m.dispose(),null!=this.accumulations&&(0,Jn.AS)(this.accumulations.map((t=>t.variable)))}setMomentum(t){this.momentum=t}async getWeights(){return[await this.saveIterations()].concat(this.accumulations.map((t=>({name:t.originalName,tensor:t.variable}))))}async setWeights(t){t=await this.extractIterations(t);const n=!1;this.accumulations=t.map((t=>({originalName:t.name,variable:t.tensor.variable(n)})))}getConfig(){return{learningRate:this.learningRate,momentum:this.momentum,useNesterov:this.useNesterov}}static fromConfig(t,n){return new t(n["learningRate"],n["momentum"],n["useNesterov"])}}we.className="Momentum",Pn(we);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
class be extends ue{constructor(t,n=.9,e=0,r=null,o=!1){if(super(),this.learningRate=t,this.decay=n,this.momentum=e,this.epsilon=r,this.accumulatedMeanSquares=[],this.accumulatedMoments=[],this.accumulatedMeanGrads=[],this.centered=o,null==r&&(this.epsilon=d.T2.backend.epsilon()),null==t)throw new Error("learningRate for RMSPropOptimizer must be defined.")}applyGradients(t){const n=Array.isArray(t)?t.map((t=>t.name)):Object.keys(t);n.forEach(((n,e)=>{const r=d.T2.registeredVariables[n],o=!1;null==this.accumulatedMeanSquares[e]&&(this.accumulatedMeanSquares[e]={originalName:`${n}/rms`,variable:(0,Jn.DZ)((()=>(0,se.P)(r).variable(o)))}),null==this.accumulatedMoments[e]&&(this.accumulatedMoments[e]={originalName:`${n}/momentum`,variable:(0,Jn.DZ)((()=>(0,se.P)(r).variable(o)))}),null==this.accumulatedMeanGrads[e]&&this.centered&&(this.accumulatedMeanGrads[e]={originalName:`${n}/mg`,variable:(0,Jn.DZ)((()=>(0,se.P)(r).variable(o)))});const s=Array.isArray(t)?t[e].tensor:t[n];if(null==s)return;const i=this.accumulatedMeanSquares[e].variable,a=this.accumulatedMoments[e].variable;(0,Jn.DZ)((()=>{const t=(0,te.W)((0,ee.l)(i,this.decay),(0,ee.l)((0,oe.E)(s),1-this.decay));if(this.centered){const n=this.accumulatedMeanGrads[e].variable,o=(0,te.W)((0,ee.l)(n,this.decay),(0,ee.l)(s,1-this.decay)),u=(0,ne.y)((0,ee.l)(s,this.learningRate),(0,re.R)((0,de.j)(t,(0,te.W)((0,oe.E)(o),this.epsilon)))),c=(0,te.W)((0,ee.l)(a,this.momentum),u);i.assign(t),n.assign(o),a.assign(c);const l=(0,de.j)(r,c);r.assign(l)}else{const t=(0,te.W)((0,ee.l)(i,this.decay),(0,ee.l)((0,oe.E)(s),1-this.decay)),n=(0,te.W)((0,ee.l)(a,this.momentum),(0,ne.y)((0,ee.l)(s,this.learningRate),(0,re.R)((0,te.W)(t,this.epsilon))));i.assign(t),a.assign(n);const e=(0,de.j)(r,n);r.assign(e)}}))})),this.incrementIterations()}dispose(){null!=this.accumulatedMeanSquares&&(0,Jn.AS)(this.accumulatedMeanSquares.map((t=>t.variable))),null!=this.accumulatedMeanGrads&&this.centered&&(0,Jn.AS)(this.accumulatedMeanGrads.map((t=>t.variable))),null!=this.accumulatedMoments&&(0,Jn.AS)(this.accumulatedMoments.map((t=>t.variable)))}async getWeights(){const t=[...this.accumulatedMeanSquares,...this.accumulatedMoments];return this.centered&&t.push(...this.accumulatedMeanGrads),[await this.saveIterations()].concat(t.map((t=>({name:t.originalName,tensor:t.variable}))))}async setWeights(t){t=await this.extractIterations(t);const n=this.centered?t.length/3:t.length/2,e=!1;this.accumulatedMeanSquares=t.slice(0,n).map((t=>({originalName:t.name,variable:t.tensor.variable(e)}))),this.accumulatedMoments=t.slice(n,2*n).map((t=>({originalName:t.name,variable:t.tensor.variable(e)}))),this.centered&&(this.accumulatedMeanGrads=t.slice(2*n,3*n).map((t=>({originalName:t.name,variable:t.tensor.variable(e)}))))}getConfig(){return{learningRate:this.learningRate,decay:this.decay,momentum:this.momentum,epsilon:this.epsilon,centered:this.centered}}static fromConfig(t,n){return new t(n["learningRate"],n["decay"],n["momentum"],n["epsilon"],n["centered"])}}be.className="RMSProp",Pn(be);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
class ke{static sgd(t){return new ye(t)}static momentum(t,n,e=!1){return new we(t,n,e)}static rmsprop(t,n=.9,e=0,r=null,o=!1){return new be(t,n,e,r,o)}static adam(t=.001,n=.9,e=.999,r=null){return new pe(t,n,e,r)}static adadelta(t=.001,n=.95,e=null){return new ce(t,n,e)}static adamax(t=.002,n=.9,e=.999,r=null,o=0){return new ve(t,n,e,r,o)}static adagrad(t,n=.1){return new he(t,n)}}var Te=e(52046),xe=e(63208),Ae=e(27084);const Ee={sgd:ke.sgd,momentum:ke.momentum,adadelta:ke.adadelta,adagrad:ke.adagrad,rmsprop:ke.rmsprop,adamax:ke.adamax,adam:ke.adam},Se=(()=>"undefined"!==typeof requestAnimationFrame?requestAnimationFrame:"undefined"!==typeof setImmediate?setImmediate:t=>t())();function $e(){return new Promise((t=>Se((()=>t()))))}var Ie=e(21078);
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
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
function Ne(t,n){const e=t[0].length;t.forEach(((t,n)=>{x.vA(t.length===e,(()=>`Error in concat${e}D: rank of tensors[${n}] must be the same as the rank of the rest (${e})`))})),x.vA(n>=0&&n<e,(()=>`Error in concat${e}D: axis must be between 0 and ${e-1}.`));const r=t[0];t.forEach(((t,o)=>{for(let s=0;s<e;s++)x.vA(s===n||t[s]===r[s],(()=>`Error in concat${e}D: Shape of tensors[${o}] (${t}) does not match the shape of the rest (${r}) along the non-concatenated axis ${o}.`))}))}function De(t,n){const e=t[0].slice();for(let r=1;r<t.length;r++)e[n]+=t[r][n];return e}var Me=e(47195),_e=e(68646);
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
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
const Fe=30;function Re(t){return t<=Fe?t:(0,x.lK)(t,Math.floor(Math.sqrt(t)))}
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
function Be(t,n,e){const r=e*("number"===typeof t?t:t[0]),o=n*("number"===typeof t?t:t[1]);return[r,o]}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
function Ye(t,n,e,r=!0){let o=[];if(r)o=o.concat(n.slice(0)),o.push(t[0]/e),o=o.concat(t.slice(1));else{o=o.concat(t[0]);const e=n.length;for(let r=0;r<e;++r)o=o.concat([t[r+1]/n[r],n[r]]);o=o.concat(t.slice(e+1))}return o}function Pe(t,n,e=!0){const r=[];if(e){r.push(n);for(let e=n+1;e<t;++e)e<=2*n?(r.push(e),r.push(e-(n+1))):r.push(e)}else{const e=[],o=[];for(let r=1;r<t;++r)r>=2*n+1||r%2===1?o.push(r):e.push(r);r.push(...e),r.push(0),r.push(...o)}return r}function Ce(t,n,e,r=!0){const o=[];r?o.push(t[0]/e):o.push(t[0]*e);for(let s=1;s<t.length;++s)s<=n.length?r?o.push(n[s-1]*t[s]):o.push(t[s]/n[s-1]):o.push(t[s]);return o}function ze(t,n){const e=[0];for(let r=0;r<n;++r)e.push(t[r][0]);return e}function Oe(t,n,e){const r=t.slice(0,1);for(let o=0;o<e;++o)r.push(t[o+1]-n[o][0]-n[o][1]);return r}var Le=e(28576);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
const Ge=.3275911,Ke=.254829592,We=-.284496736,je=1.421413741,qe=-1.453152027,Ue=1.061405429;var He=e(73673);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
function Ve(t,n){if(t.length!==n.length)throw new Error(`Cannot merge real and imag arrays of different lengths. real:${t.length}, imag: ${n.length}.`);const e=new Float32Array(2*t.length);for(let r=0;r<e.length;r+=2)e[r]=t[r/2],e[r+1]=n[r/2];return e}function Ze(t){const n=new Float32Array(t.length/2),e=new Float32Array(t.length/2);for(let r=0;r<t.length;r+=2)n[r/2]=t[r],e[r/2]=t[r+1];return{real:n,imag:e}}function Xe(t){const n=Math.ceil(t.length/4),e=new Float32Array(n),r=new Float32Array(n);for(let o=0;o<t.length;o+=4)e[Math.floor(o/4)]=t[o],r[Math.floor(o/4)]=t[o+1];return{real:e,imag:r}}function Qe(t){const n=Math.floor(t.length/4),e=new Float32Array(n),r=new Float32Array(n);for(let o=2;o<t.length;o+=4)e[Math.floor(o/4)]=t[o],r[Math.floor(o/4)]=t[o+1];return{real:e,imag:r}}function Je(t,n){const e=t[2*n],r=t[2*n+1];return{real:e,imag:r}}function tr(t,n,e,r){t[2*r]=n,t[2*r+1]=e}function nr(t,n){const e=new Float32Array(t/2),r=new Float32Array(t/2);for(let o=0;o<Math.ceil(t/2);o++){const s=(n?2:-2)*Math.PI*(o/t);e[o]=Math.cos(s),r[o]=Math.sin(s)}return{real:e,imag:r}}function er(t,n,e){const r=(e?2:-2)*Math.PI*(t/n),o=Math.cos(r),s=Math.sin(r);return{real:o,imag:s}}
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
const rr="->",or=/->/g,sr=",",ir="...";function ar(t,n){t=t.replace(/\s/g,"");const e=(t.length-t.replace(or,"").length)/rr.length;if(e<1)throw new Error("Equations without an arrow are not supported.");if(e>1)throw new Error(`Equation must contain exactly one arrow ("${rr}").`);const[r,o]=t.split(rr);(0,x.vA)(-1===r.indexOf(ir),(()=>`The ellipsis notation ("${ir}") is not supported yet.`));const s=r.split(sr),i=s.length;if(n!==i)throw new Error(`Expected ${i} input tensors, received ${n}`);if(i>2)throw new Error("Support for more than 2 input tensors is not implemented yet.");const a=[];for(let f=0;f<o.length;++f){const t=o[f];if(!s.some((n=>-1!==n.indexOf(t))))throw new Error(`Output subscripts contain the label ${t} not present in the input subscripts.`);-1===a.indexOf(t)&&a.push(t)}for(let f=0;f<r.length;++f){const t=r[f];-1===a.indexOf(t)&&t!==sr&&a.push(t)}const u=new Array(s.length);for(let f=0;f<i;++f){if(new Set(s[f].split("")).size!==s[f].length)throw new Error(`Found duplicate axes in input component ${s[f]}. Support for duplicate axes in input is not implemented yet.`);u[f]=[];for(let t=0;t<s[f].length;++t)u[f].push(a.indexOf(s[f][t]))}const c=a.length,l=o.length,h=[];for(let f=l;f<c;++f)h.push(f);return{allDims:a,summedDims:h,idDims:u}}function ur(t,n){let e=new Array(t);e.fill(-1);for(let o=0;o<n.length;++o)e[n[o]]=o;const r=[];for(let o=0;o<t;++o)-1===e[o]&&r.push(o);return e=e.filter((t=>-1!==t)),{permutationIndices:e,expandDims:r}}function cr(t,n,e){const r=new Array(t);for(let o=0;o<e.length;++o){const t=e[o].shape;for(let e=0;e<n[o].length;++e)void 0===r[n[o][e]]?r[n[o][e]]=t[e]:(0,x.vA)(r[n[o][e]]===t[e],(()=>`Expected dimension ${r[n[o][e]]} at axis ${e} of input shaped ${JSON.stringify(t)}, but got dimension ${t[e]}`))}}function lr(t,n){const e=t,r=[];let o=0;0===t.length&&e.push(-1),o=t.length+1;for(let i=0;i<o;++i)r.push([]);const s=[];for(let i=0;i<e.length;++i){const t=e[i],o=fr(n,t);for(const n of o)-1===s.indexOf(n)&&(r[i].push(n),s.push(n))}return{path:e,steps:r}}function hr(t){return t.every(((t,n)=>t===n))}function fr(t,n){const e=[];for(let r=0;r<t.length;++r)0!==t[r].length&&-1===t[r].indexOf(n)&&-1!==n||e.push(r);return e}function dr(t,n,e=0){let r=[];if("number"===typeof n)(0,x.vA)(t.shape[e]%n===0,(()=>"Number of splits must evenly divide the axis.")),r=new Array(n).fill(t.shape[e]/n);else{const o=n.reduce(((t,n)=>(-1===n&&(t+=1),t)),0);(0,x.vA)(o<=1,(()=>"There should be only one negative value in split array."));const s=n.indexOf(-1);if(-1!==s){const r=n.reduce(((t,n)=>n>0?t+n:t));n[s]=t.shape[e]-r}(0,x.vA)(t.shape[e]===n.reduce(((t,n)=>t+n)),(()=>"The sum of sizes must match the size of the axis dimension.")),r=n}return r}
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
function pr(t){return`Received SparseTensor with denseShape[0] = 0 but\n  indices.shape[0] = ${t}`}function mr(t,n){return`indices(${t}, 0) is invalid: ${n} < 0`}function gr(t,n,e){return`indices(${t}, 0) is invalid: ${n} >= ${e}`}
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
function vr(t,n){return`only one output dimension may be -1, not both ${t} and ${n}`}function yr(t,n){return`size ${t} must be non-negative, not ${n}`}function wr(){return"reshape cannot infer the missing input size for an empty tensor unless all specified input sizes are non-zero"}function br(t,n){const e=(0,x.Ze)(t),r=(0,x.Ze)(n);return`Input to reshape is a SparseTensor with ${e}\n  dense values, but the requested shape requires a multiple of ${r}. inputShape=${t} outputShape= ${n}`}function kr(t,n){const e=(0,x.Ze)(t),r=(0,x.Ze)(n);return`Input to reshape is a tensor with ${e} dense values, but the requested shape has ${r}. inputShape=${t} outputShape=${n}`}
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
function Tr(){return"segment ids must be >= 0"}function xr(){return"segment ids are not increasing"}function Ar(t,n){return`Segment id ${t} out of range [0, ${n}), possibly because segmentIds input is not sorted.`}function Er(t,n,e){return`Bad: indices[${t}] == ${n} out of range [0, ${e})`}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
function Sr(t,n){let e,r=!1;t<=Fe?(e=t,r=!0):e=(0,x.lK)(t,Math.floor(Math.sqrt(t)));while(!r)e>n||e===t?r=!0:e=(0,x.lK)(t,e+1);return e}function $r(t,n,e){const r=[],o=t.length;for(let s=0;s<o;s++)s!==n?r.push(t[s]):r.push(e);return r}function Ir(t,n,e,r){const o=n.shape.length,s=t.shape.length;if(0!==r&&(r<-o||r>o))throw new Error(`Expect batchDims in the range of [-${o}, ${o}], but got ${r}`);if(r<0&&(r+=o),r>s)throw new Error(`batchDims (${r}) must be less than rank(x) (\n    ${s}).`);if(e<r)throw new Error(`batchDims (${r}) must be less than or equal to axis (${e}).`);for(let h=0;h<r;++h)if(t.shape[h]!==n.shape[h])throw new Error(`x.shape[${h}]: ${t.shape[h]} should be equal to indices.shape[${h}]: ${n.shape[h]}.`);const i=t.shape[e],a=[];let u=1,c=1,l=1;for(let h=0;h<r;++h)a.push(t.shape[h]),u*=t.shape[h];for(let h=r;h<e;h++)a.push(t.shape[h]),c*=t.shape[h];for(let h=r;h<o;h++)a.push(n.shape[h]);for(let h=e+1;h<s;h++)a.push(t.shape[h]),l*=t.shape[h];return{batchSize:u,sliceSize:l,outerSize:c,dimSize:i,outputShape:a}}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
function Nr(t){try{return t.map((t=>(0,zn.decodeString)(t)))}catch(Rr){throw new Error(`Failed to decode encoded string bytes into utf-8, error: ${Rr}`)}}function Dr(t){return t.map((t=>(0,zn.encodeString)(t)))}var Mr=e(43303),_r=e(54411),Fr=e(15149)},64394:function(t,n,e){e.d(n,{N:function(){return u}});var r=e(57260),o=e(15441),s=e(28189),i=e(70929);
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
function a(t,n){const e=(0,s.YT)(t,"x","prelu"),i=(0,s.YT)(n,"alpha","prelu"),a={x:e,alpha:i};return r.T2.runKernel(o.Nc,a)}const u=(0,i.op)({prelu_:a})},64826:function(t,n,e){e.d(n,{V:function(){return c}});var r=e(57260),o=e(15441),s=e(28189),i=e(45119),a=e(70929);
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
function u(t,n){const e=(0,s.YT)(t,"x","tile","string_or_numeric");i.vA(e.rank===n.length,(()=>`Error in transpose: rank of input ${e.rank} must match length of reps ${n}.`));const a={x:e},u={reps:n};return r.T2.runKernel(o.FA,a,u)}const c=(0,a.op)({tile_:u})},65661:function(t,n,e){e.d(n,{e:function(){return u}});var r=e(57260),o=e(15441),s=e(28189),i=e(70929);
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
function a(t,n,e=0){const i=(0,s.YT)(t,"x","pad");if(0===i.rank)throw new Error("pad(scalar) is not defined. Pass non-scalar to pad");const a={paddings:n,constantValue:e},u={x:i};return r.T2.runKernel(o.OD,u,a)}const u=(0,i.op)({pad_:a})},65703:function(t,n,e){e.d(n,{N:function(){return c}});var r=e(57260),o=e(15441),s=e(30565),i=e(28189),a=e(70929);
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
function u(t,n,e=!1,a=!1){let u=(0,i.YT)(t,"a","matMul"),c=(0,i.YT)(n,"b","matMul");[u,c]=(0,s.makeTypesMatch)(u,c);const l={a:u,b:c},h={transposeA:e,transposeB:a};return r.T2.runKernel(o.jA,l,h)}const c=(0,a.op)({matMul_:u})},66030:function(t,n,e){e.d(n,{l:function(){return u}});var r=e(57260),o=e(15441),s=e(28189),i=e(70929);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
function a(t){const n=(0,s.YT)(t,"x","softplus"),e={x:n};return r.T2.runKernel(o.Fi,e)}const u=(0,i.op)({softplus_:a})},66512:function(t,n,e){e.d(n,{l:function(){return u}});var r=e(57260),o=e(15441),s=e(28189),i=e(70929);
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
function a(t,n,e=0){const i=(0,s.YT)(t,"x","split"),a={x:i},u={numOrSizeSplits:n,axis:e};return r.T2.runKernel(o.Bl,a,u)}const u=(0,i.op)({split_:a})},66567:function(t,n,e){e.d(n,{F:function(){return c}});var r=e(57260),o=e(15441),s=e(28189),i=e(45119),a=e(70929);
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
function u(t,n,e){i.vA("reflect"===e||"symmetric"===e,(()=>`Invalid mode. Mode must be either reflect or symmetric. Got ${e}.`));const a=(0,s.YT)(t,"x","mirrorPad");if(0===a.rank)throw new Error("mirrorPad(scalar) is not defined. Pass non-scalar to mirrorPad");i.vA(n.length===a.rank,(()=>`Padding doesn't match input. Must be ${a.rank}. Got ${n.length}.`));const u="reflect"===e?1:0;for(let r=0;r<a.rank;r++)i.vA(2===n[r].length,(()=>"Invalid number of paddings. Must be length of 2 each.")),i.vA(n[r][0]>=0&&n[r][0]<=a.shape[r]-u&&n[r][1]>=0&&n[r][1]<=a.shape[r]-u,(()=>`Padding in dimension ${r} cannot be greater than or equal to ${a.shape[r]-u} or less than 0 for input of shape ${a.shape}`));const c={paddings:n,mode:e},l={x:a};return r.T2.runKernel(o.x7,l,c)}const c=(0,a.op)({mirrorPad_:u})},66652:function(t,n,e){e.d(n,{Y:function(){return i}});var r=e(54411),o=e(28189);
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
async function s(t){const n=(0,o.YT)(t,"condition","whereAsync","bool"),e=await n.data(),s=(0,r.Y)(n.shape,e);return t!==n&&n.dispose(),s}const i=s},66841:function(t,n,e){e.d(n,{q:function(){return u}});var r=e(57260),o=e(15441),s=e(28189),i=e(70929);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
function a(t){const n=(0,s.YT)(t,"x","asin"),e={x:n};return r.T2.runKernel(o.QK,e)}const u=(0,i.op)({asin_:a})},66919:function(t,n,e){e.d(n,{H:function(){return u}});var r=e(57260),o=e(15441),s=e(28189),i=e(70929);
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
function a(t,n=.2){const e=(0,s.YT)(t,"x","leakyRelu"),i={x:e},a={alpha:n};return r.T2.runKernel(o.X0,i,a)}const u=(0,i.op)({leakyRelu_:a})},67261:function(t,n,e){e.d(n,{K:function(){return c}});var r=e(57260),o=e(15441),s=e(28189),i=e(45119),a=e(70929);
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
function u(t,n=0){const e=(0,s.YT)(t,"x","unstack","string_or_numeric");i.vA(n>=-e.shape.length&&n<e.shape.length,(()=>`Axis = ${n} is not in [-${e.shape.length}, ${e.shape.length})`));const a={value:e},u={axis:n};return r.T2.runKernel(o.dX,a,u)}const c=(0,a.op)({unstack_:u})},67771:function(t,n,e){e.d(n,{_:function(){return c}});var r=e(57260),o=e(15441),s=e(28189),i=e(29809),a=e(70929);
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
function u(t,n=null,e=!1){let a=(0,s.YT)(t,"x","prod");"bool"===a.dtype&&(a=(0,i.w)(a,"int32"));const u={x:a},c={axis:n,keepDims:e};return r.T2.runKernel(o.kd,u,c)}const c=(0,a.op)({prod_:u})},68318:function(t,n,e){e.d(n,{M:function(){return u}});var r=e(57260),o=e(15441),s=e(28189),i=e(70929);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
function a(t){const n=(0,s.YT)(t,"x","isFinite"),e={x:n};return r.T2.runKernel(o.gI,e)}const u=(0,i.op)({isFinite_:a})},68646:function(t,n,e){e.d(n,{Do:function(){return m},XB:function(){return p},f2:function(){return g},zE:function(){return v}});var r=e(62198),o=e(83416),s=e(66919),i=e(9258),a=e(64394),u=e(90112),c=e(83732),l=e(62302),h=e(28968),f=e(10700),d=e(83791);
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
function p(t,n,e){if(null==e||"linear"===e)return t;if("relu"===e)return(0,i.l)(t,(0,f.P)(n));throw new Error(`Cannot compute gradient for fused activation ${e}.`)}function m(t,n){let e=n;const o=r.getReductionAxes(t.shape,n.shape);return o.length>0&&(e=(0,d.c)(e,o)),(0,l.t)(e,t.shape)}function g(t,n,e,r){if("linear"===n)return t;if("relu"===n)return(0,u.V)(t);if("elu"===n)return(0,o.P)(t);if("relu6"===n)return(0,c.j)(t);if("prelu"===n)return(0,a.N)(t,e);if("leakyrelu"===n)return(0,s.H)(t,r);if("sigmoid"===n)return(0,h.r)(t);throw new Error(`Unknown fused activation ${n}.`)}const v=(t,n)=>{const e=t>0;return!e||"linear"===n}},69759:function(t,n,e){e.d(n,{O:function(){return c}});var r=e(28189),o=e(45119),s=e(65703),i=e(70929),a=e(62302);
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
function u(t,n){const e=(0,r.YT)(t,"t1","dot"),i=(0,r.YT)(n,"t2","dot");o.vA((1===e.rank||2===e.rank)&&(1===i.rank||2===i.rank),(()=>`Error in dot: inputs must all be rank 1 or 2, but got ranks ${e.rank} and ${i.rank}.`));const u=1===e.rank?e.size:e.shape[1],c=1===i.rank?i.size:i.shape[0];if(o.vA(u===c,(()=>`Error in dot: inner dimensions of inputs must match, but got ${u} and ${c}.`)),1===e.rank&&1===i.rank){const t=(0,a.t)(e,[1,-1]),n=(0,a.t)(i,[-1,1]),r=(0,s.N)(t,n);return(0,a.t)(r,[])}if(1===e.rank&&2===i.rank){const t=(0,a.t)(e,[1,-1]),n=(0,a.t)(i,[i.shape[0],i.shape[1]]),r=(0,s.N)(t,n);return(0,a.t)(r,[r.size])}if(2===e.rank&&1===i.rank){const t=(0,a.t)(i,[-1,1]),n=(0,s.N)(e,t);return(0,a.t)(n,[n.size])}{const t=(0,a.t)(i,[i.shape[0],i.shape[1]]),n=(0,s.N)(e,t);return n}}const c=(0,i.op)({dot_:u})},69772:function(t,n,e){e.d(n,{G:function(){return c}});var r=e(57260),o=e(15441),s=e(28189),i=e(45119),a=e(70929);
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
function u(t,n,e){const a=(0,s.YT)(t,"x","batchToSpaceND"),u=n.reduce(((t,n)=>t*n));i.vA(a.rank>=1+n.length,(()=>`input rank is ${a.rank} but should be > than blockShape.length ${n.length}`)),i.vA(e.length===n.length,(()=>`crops.length is ${e.length} but should be equal to blockShape.length  ${n.length}`)),i.vA(a.shape[0]%u===0,(()=>`input tensor batch is ${a.shape[0]} but is not divisible by the product of the elements of blockShape ${n.join(" * ")} === ${u}`));const c={x:a},l={blockShape:n,crops:e};return r.T2.runKernel(o.Ik,c,l)}const c=(0,a.op)({batchToSpaceND_:u})},69885:function(t,n,e){e.d(n,{P:function(){return u}});var r=e(57260),o=e(15441),s=e(28189),i=e(70929);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
function a(t){const n=(0,s.YT)(t,"x","onesLike"),e={x:n};return r.T2.runKernel(o.LW,e)}const u=(0,i.op)({onesLike_:a})},70125:function(t,n,e){e.d(n,{o:function(){return u}});var r=e(57260),o=e(15441),s=e(28189),i=e(70929);
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
function a(t){const n=(0,s.YT)(t,"x","clone","string_or_numeric"),e={x:n};return r.T2.runKernel(o.lz,e)}const u=(0,i.op)({clone_:a})},70929:function(t,n,e){e.d(n,{B:function(){return s},op:function(){return i}});var r=e(57260),o=e(45119);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
const s="__op";function i(t){const n=Object.keys(t);if(1!==n.length)throw new Error(`Please provide an object with a single key (operation name) mapping to a function. Got an object with ${n.length} keys.`);let e=n[0];const i=t[e];e.endsWith("_")&&(e=e.substring(0,e.length-1)),e+=s;const a=(...t)=>{r.T2.startScope(e);try{const n=i(...t);return(0,o.yL)(n)&&console.error("Cannot return a Promise inside of tidy."),r.T2.endScope(n),n}catch(n){throw r.T2.endScope(null),n}};return Object.defineProperty(a,"name",{value:e,configurable:!0}),a}},71781:function(t,n,e){e.d(n,{O:function(){return c}});var r=e(57260),o=e(15441),s=e(28189),i=e(70929),a=e(62302);
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
function u(t,n,e,i=!1){const u=(0,s.YT)(t,"logits","multinomial"),c=u.size,l=u.rank;if(c<2)throw new Error(`Error in multinomial: you need at least 2 outcomes, but got ${c}.`);if(l>2)throw new Error(`Rank of probabilities must be 1 or 2, but is ${l}`);e=e||Math.random();const h=1===l?(0,a.t)(u,[1,-1]):u,f={logits:h},d={numSamples:n,seed:e,normalized:i},p=r.T2.runKernel(o.WT,f,d);return 1===l?(0,a.t)(p,[p.size]):p}const c=(0,i.op)({multinomial_:u})},72608:function(t,n,e){var r=e(15441),o=e(29809),s=e(9258),i=e(10700);
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
const a={kernelName:r.lj,inputsToSave:["x"],gradFunc:(t,n)=>{const[e]=n;return{x:()=>(0,s.l)(t,(0,i.P)((0,o.w)(e,"float32"),-1))}}};var u=e(89359),c=e(96522),l=e(45702),h=e(79348),f=e(45793),d=e(77126);
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
const p={kernelName:r.Vv,inputsToSave:["x"],gradFunc:(t,n)=>{const[e]=n;return{x:()=>{const n=(0,f.E)((0,o.w)(e,"float32")),r=(0,h.R)((0,d.j)((0,l.d)(1),n));return(0,c.H)((0,u.y)(t,r))}}}},m={kernelName:r.PH,inputsToSave:["x"],gradFunc:(t,n)=>{const[e]=n;return{x:()=>{const n=(0,h.R)((0,d.j)((0,f.E)((0,o.w)(e,"float32")),1));return(0,u.y)(t,n)}}}};var g=e(62198),v=e(62302),y=e(83791);
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
const w={kernelName:r.OM,inputsToSave:["a","b"],gradFunc:(t,n)=>{const[e,r]=n,o=g.assertAndGetBroadcastShape(e.shape,r.shape),s=()=>{let n=t;const r=g.getReductionAxes(e.shape,o);return r.length>0&&(n=(0,y.c)(n,r)),(0,v.t)(n,e.shape)},i=()=>{let n=t;const e=g.getReductionAxes(r.shape,o);return e.length>0&&(n=(0,y.c)(n,e)),(0,v.t)(n,r.shape)};return{a:s,b:i}}},b={kernelName:r.Ek,saveAllInputs:!0,gradFunc:(t,n)=>{const e={};return n.forEach(((n,r)=>{e[r]=()=>t.clone()})),e}};var k=e(55537);
/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
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
const T={kernelName:r.Jp,inputsToSave:["x"],gradFunc:(t,n)=>{const[e]=n;return{x:()=>(0,k.P)(e)}}},x={kernelName:r.p_,inputsToSave:["x"],gradFunc:(t,n)=>{const[e]=n;return{x:()=>(0,k.P)(e)}}},A={kernelName:r.QK,inputsToSave:["x"],gradFunc:(t,n)=>{const[e]=n;return{x:()=>(0,u.y)(t,(0,h.R)((0,d.j)((0,l.d)(1),(0,f.E)((0,o.w)(e,"float32")))))}}};var E=e(37523);
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
const S={kernelName:r.ep,inputsToSave:["x"],gradFunc:(t,n)=>{const[e]=n;return{x:()=>{const n=(0,h.R)((0,E.W)((0,l.d)(1),(0,f.E)((0,o.w)(e,"float32"))));return(0,u.y)(t,n)}}}},$={kernelName:r.lx,inputsToSave:["a","b"],gradFunc:(t,n)=>{const[e,r]=n,o=(0,g.assertAndGetBroadcastShape)(e.shape,r.shape),i=()=>{const n=(0,E.W)((0,f.E)(e),(0,f.E)(r));let i=(0,s.l)(t,(0,u.y)(r,n));const a=(0,g.getReductionAxes)(e.shape,o);return a.length>0&&(i=(0,y.c)(i,a)),(0,v.t)(i,e.shape)},a=()=>{const n=(0,E.W)((0,f.E)(e),(0,f.E)(r));let i=(0,c.H)((0,s.l)(t,(0,u.y)(e,n)));const a=(0,g.getReductionAxes)(r.shape,o);return a.length>0&&(i=(0,y.c)(i,a)),(0,v.t)(i,r.shape)};return{a:i,b:a}}},I={kernelName:r.Ty,inputsToSave:["x"],gradFunc:(t,n)=>{const[e]=n;return{x:()=>(0,u.y)(t,(0,E.W)((0,f.E)((0,o.w)(e,"float32")),1))}}},N={kernelName:r.zP,inputsToSave:["x"],gradFunc:(t,n)=>{const[e]=n;return{x:()=>(0,u.y)(t,(0,d.j)((0,l.d)(1),(0,f.E)((0,o.w)(e,"float32"))))}}};var D=e(57260),M=e(28189),_=e(45119),F=e(47195),R=e(70929);
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
function B(t,n,e,o,s,i){const a=(0,M.YT)(t,"dy","avgPool3dGrad"),u=(0,M.YT)(n,"input","avgPool3dGrad");let c=a,l=u,h=!1;4===u.rank&&(h=!0,c=(0,v.t)(a,[1,a.shape[0],a.shape[1],a.shape[2],a.shape[3]]),l=(0,v.t)(u,[1,u.shape[0],u.shape[1],u.shape[2],u.shape[3]])),_.vA(5===c.rank,(()=>`Error in avgPool3dGrad: dy must be rank 5 but got rank ${c.rank}.`)),_.vA(5===l.rank,(()=>`Error in avgPool3dGrad: input must be rank 5 but got rank ${l.rank}.`)),(0,F.s_)("avgPool3dGrad",s,i);const f={dy:c,input:l},d={filterSize:e,strides:o,pad:s,dimRoundingMode:i},p=D.T2.runKernel(r.ww,f,d);return h?(0,v.t)(p,[p.shape[1],p.shape[2],p.shape[3],p.shape[4]]):p}const Y=(0,R.op)({avgPool3dGrad_:B}),P={kernelName:r.cS,inputsToSave:["x"],gradFunc:(t,n,e)=>{const[r]=n,{filterSize:o,strides:s,pad:i,dimRoundingMode:a}=e;return{x:()=>Y(t,r,o,s,i,a)}}};
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
function C(t,n,e,o,s){const i=(0,M.YT)(t,"dy","avgPoolGrad"),a=(0,M.YT)(n,"input","avgPoolGrad");_.vA(a.rank===i.rank,(()=>`Rank of input (${a.rank}) does not match rank of dy (${i.rank})`));let u=a,c=i,l=!1;3===a.rank&&(l=!0,u=(0,v.t)(a,[1,a.shape[0],a.shape[1],a.shape[2]]),c=(0,v.t)(i,[1,i.shape[0],i.shape[1],i.shape[2]])),_.vA(4===c.rank,(()=>`Error in avgPoolGrad: dy must be rank 4 but got rank ${c.rank}.`)),_.vA(4===u.rank,(()=>`Error in avgPoolGrad: input must be rank 4 but got rank ${u.rank}.`));const h={dy:c,input:u},f={filterSize:e,strides:o,pad:s},d=D.T2.runKernel(r.VC,h,f);return l?(0,v.t)(d,[d.shape[1],d.shape[2],d.shape[3]]):d}const z=(0,R.op)({avgPoolGrad_:C}),O={kernelName:r.ho,inputsToSave:["x"],gradFunc:(t,n,e)=>{const[r]=n,{filterSize:o,strides:s,pad:i}=e;return{x:()=>z(t,r,o,s,i)}}};var L=e(65703);
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
const G={kernelName:r.jA,inputsToSave:["a","b"],gradFunc:(t,n,e)=>{const[r,o]=n,{transposeA:s,transposeB:i}=e;return s||i?!s&&i?{a:()=>(0,L.N)(t,o,!1,!1),b:()=>(0,L.N)(t,r,!0,!1)}:s&&!i?{a:()=>(0,L.N)(o,t,!1,!0),b:()=>(0,L.N)(r,t,!1,!1)}:{a:()=>(0,L.N)(o,t,!0,!0),b:()=>(0,L.N)(t,r,!0,!0)}:{a:()=>(0,L.N)(t,o,!1,!0),b:()=>(0,L.N)(r,t,!0,!1)}}};var K=e(10776);
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
const W={kernelName:r.Ik,gradFunc:(t,n,e)=>{const{blockShape:r,crops:o}=e;return{x:()=>(0,K.e)(t,r,o)}}},j={kernelName:r.LB,gradFunc:(t,n,e)=>{const r=e,o=r.inputShape,s=r.shape,i=Array.from(s);for(let u=o.length-1;u>=0;u--)if(o[u]===s[u])i[u]=1;else if(1!==o[u])throw new Error(`broadcastTo(): [${o}] cannot be broadcast to [${s}].`);const a=[];for(let u=0;u<i.length;u++)i[u]>1&&a.push(u);return{x:()=>(0,y.c)(t,a,!0)}}},q={kernelName:r.KX,gradFunc:t=>({x:()=>t.clone()})},U={kernelName:r.QD,gradFunc:t=>({x:()=>(0,k.P)(t)})};var H=e(13337),V=e(56508),Z=e(13789),X=e(12151);
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
const Q={kernelName:r.v,inputsToSave:["x"],gradFunc:(t,n,e)=>{const[r]=n,{clipValueMin:o,clipValueMax:s}=e;return{x:()=>(0,X._)((0,Z.n)((0,H.D)(r,o),(0,V.I)(r,s)),t,(0,k.P)(t))}}},J={kernelName:r.$z,inputsToSave:["x"],gradFunc:a.gradFunc};var tt=e(66512);
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
const nt={kernelName:r.$d,saveAllInputs:!0,gradFunc:(t,n,e)=>{const r=n.map((t=>t.shape)),{axis:o}=e,s=(0,_.Y6)(o,n[0].shape)[0],i=r.map((t=>t[s])),a=(0,tt.l)(t,i,s);return a.map((t=>()=>t))}};var et=e(25248),rt=e(80252);
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
const ot={kernelName:r.p2,inputsToSave:["x","filter"],gradFunc:(t,n,e)=>{const[r,o]=n,{dilations:s,strides:i,pad:a,dataFormat:u}=e;return _.vA(F.Dh(s),(()=>`Error in gradient of conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${s}'`)),{x:()=>(0,rt.v)(r.shape,t,o,i,a,u),filter:()=>(0,et.H)(r,t,o.shape,i,a,u)}}};var st=e(28794);
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
const it={kernelName:r.jf,inputsToSave:["dy","filter"],gradFunc:(t,n,e)=>{const[r,o]=n,{strides:s,pad:i,dataFormat:a,dimRoundingMode:u}=e;return{dy:()=>(0,st.X)(t,o,s,i,a,1,u),filter:()=>(0,et.H)(t,r,o.shape,s,i,a,u)}}};
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
function at(t,n,e,o,s){let i=t;4===t.rank&&(i=(0,v.t)(t,[1,t.shape[0],t.shape[1],t.shape[2],t.shape[3]]));let a=n;4===a.rank&&(a=(0,v.t)(n,[1,n.shape[0],n.shape[1],n.shape[2],n.shape[3]])),_.vA(5===i.rank,(()=>`Error in conv3dDerFilter: input must be rank 5, but got shape ${i.shape}.`)),_.vA(5===a.rank,(()=>`Error in conv3dDerFilter: dy must be rank 5, but got shape ${a.shape}.`)),_.vA(5===e.length,(()=>`Error in conv3dDerFilter: filterShape must be length 5, but got ${e}.`)),_.vA(i.shape[4]===e[3],(()=>`Error in conv3dDerFilter: depth of input ${i.shape[4]}) must match input depth in filter (${e[3]}.`)),_.vA(a.shape[4]===e[4],(()=>`Error in conv3dDerFilter: depth of dy (${a.shape[4]}) must match output depth for filter (${e[4]}).`));const u={x:i,dy:a},c={strides:o,pad:s,filterShape:e};return D.T2.runKernel(r.iG,u,c)}const ut=(0,R.op)({conv3DBackpropFilter_:at});var ct=e(31895);
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
const lt={kernelName:r.A1,inputsToSave:["x","filter"],gradFunc:(t,n,e)=>{const{dilations:r,strides:o,pad:s}=e;_.vA((0,F.Dh)(r),(()=>`Error in gradient of conv3D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${r}'`));const[i,a]=n;return{x:()=>(0,ct.c)(i.shape,t,a,o,s),filter:()=>ut(i,t,a.shape,o,s)}}};var ht=e(33726);
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
const ft={kernelName:r.t2,inputsToSave:["x"],gradFunc:(t,n)=>{const[e]=n;return{x:()=>(0,s.l)((0,c.H)((0,ht.F)((0,o.w)(e,"float32"))),t)}}};var dt=e(58276);
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
const pt={kernelName:r.Mn,inputsToSave:["x"],gradFunc:(t,n)=>{const[e]=n;return{x:()=>(0,s.l)((0,dt.L)((0,o.w)(e,"float32")),t)}}};var mt=e(21078),gt=e(76808),vt=e(7703);
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
const yt={kernelName:r.nY,inputsToSave:["x"],gradFunc:(t,n,e)=>{const[r]=n,{axis:o,exclusive:s,reverse:i}=e;return{x:()=>{const n=(0,mt.Em)([o],r.rank);let e=(0,gt.r)(t,o,s,!i);return null!=n&&(e=(0,vt.m)(e,n)),e}}}};var wt=e(41890),bt=e(83134);
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
const kt={kernelName:r.tG,inputsToSave:["x","filter"],gradFunc:(t,n,e)=>{const{dilations:r,strides:o,pad:s,dimRoundingMode:i}=e,a=null==r?[1,1]:r;_.vA(F.Dh(a),(()=>`Error in gradient of depthwiseConv2dNative: dilation rates greater than 1 are not yet supported. Got dilations '${a}'`));const[u,c]=n;return _.vA(4===u.rank,(()=>`Error in gradient of depthwiseConv2dNative: input must be rank 4, but got rank ${u.rank}.`)),_.vA(4===c.rank,(()=>`Error in gradient of depthwiseConv2dNative: filter must be rank 4, but got rank ${c.rank}.`)),_.vA(u.shape[3]===c.shape[2],(()=>`Error in gradient of depthwiseConv2d: number of input channels (${u.shape[3]}) must match the inChannels dimension in filter ${c.shape[2]}.`)),_.vA(F.G0(o,a),(()=>`Error in gradient of depthwiseConv2d: Either strides or dilations must be  1. Got strides ${o} and dilations '${a}'.`)),F.s_("depthwiseConv2d",s,i),{x:()=>(0,bt.l)(u.shape,t,c,o,s,a,i),filter:()=>(0,wt.x)(u,t,c.shape,o,s,a,i)}}},Tt={kernelName:r.jx,inputsToSave:["x","filter"],gradFunc:(t,n,e)=>{const[o,s]=n,i={x:o,filter:s,dy:t},a={x:o,filter:s,dy:t};return{x:()=>D.T2.runKernel(r.bP,i,e),filter:()=>D.T2.runKernel(r.pk,a,e)}}},xt={kernelName:r.P,outputsToSave:[!0],gradFunc:(t,n)=>{const[e]=n,o={dy:t,y:e};return{x:()=>D.T2.runKernel(r.rs,o)}}};var At=e(8631);
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
const Et={kernelName:r._s,inputsToSave:["x"],gradFunc:(t,n)=>{const[e]=n,r=(0,s.l)((0,At.o)((0,c.H)((0,f.E)(e))),2/Math.sqrt(Math.PI));return{x:()=>(0,s.l)(t,r)}}},St={kernelName:r.ox,outputsToSave:[!0],gradFunc:(t,n)=>{const[e]=n;return{x:()=>(0,s.l)(t,e)}}},$t={kernelName:r.yb,inputsToSave:["input"],gradFunc:(t,n)=>{const[e]=n;return{input:()=>(0,v.t)(t,e.shape)}}},It={kernelName:r.fQ,inputsToSave:["x"],gradFunc:(t,n)=>{const[e]=n;return{x:()=>(0,s.l)(t,(0,At.o)(e))}}},Nt={kernelName:r.Zg,gradFunc:t=>({x:()=>(0,k.P)(t)})},Dt={kernelName:r.El,inputsToSave:["a","b"],gradFunc:(t,n)=>{const[e,r]=n,i=(0,g.assertAndGetBroadcastShape)(e.shape,r.shape),a=()=>{const n=(0,u.y)(t,(0,o.w)(r,"float32")),s=(0,g.getReductionAxes)(e.shape,i);return s.length>0?(0,v.t)((0,y.c)(n,s),e.shape):n},l=()=>{let n=(0,s.l)(t,(0,o.w)(e,"float32"));const a=(0,g.getReductionAxes)(r.shape,i);a.length>0&&(n=(0,v.t)((0,y.c)(n,a),r.shape));const l=(0,f.E)(r);return(0,c.H)((0,u.y)(n,(0,o.w)(l,"float32")))};return{a:a,b:l}}};var Mt=e(17820),_t=e(64826);
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
const Ft={kernelName:r.i5,inputsToSave:["x","mean","variance","scale"],gradFunc:(t,n,e)=>{const{varianceEpsilon:r}=e,[o,i,a,u]=n,c=null==u?(0,l.d)(1):u,h=(0,g.getReductionAxes)(i.shape,o.shape),f=[];if(1===i.rank){for(let t=0;t<o.shape.length-1;++t)f.push(o.shape[t]);f.push(1)}const p=(0,d.j)(o,i),m=(0,s.l)(t,c),w=(0,Mt.Z)((0,E.W)(a,(0,l.d)(r))),b=(0,s.l)((0,s.l)((0,s.l)(w,w),w),(0,l.d)(-.5)),k=()=>1===i.rank?(0,v.t)((0,s.l)((0,s.l)(t,(0,_t.V)((0,v.t)(w,[1,1,1,i.shape[0]]),f)),c),o.shape):(0,v.t)((0,s.l)((0,s.l)(t,w),c),o.shape),T=()=>{let t=(0,s.l)((0,s.l)(w,(0,l.d)(-1)),m);return 1===i.rank&&(t=(0,y.c)(t,h)),(0,v.t)(t,i.shape)},x=()=>{let t=(0,s.l)((0,s.l)(b,p),m);return 1===i.rank&&(t=(0,y.c)(t,h)),(0,v.t)(t,i.shape)},A=()=>{const n=(0,s.l)(p,w);let e=(0,s.l)(t,n);return 1===i.rank&&(e=(0,y.c)(e,h)),(0,v.t)(e,i.shape)},S=()=>{let n=t;return 1===i.rank&&(n=(0,y.c)(n,h)),(0,v.t)(n,i.shape)};return{x:k,mean:T,variance:x,scale:A,offset:S}}};var Rt=e(97706);
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
const Bt={kernelName:r.mx,inputsToSave:["x","indices"],gradFunc:(t,n,e)=>{const[r,o]=n,{axis:s}=e,i=(0,_.Y6)(s,r.shape)[0],a=()=>{const n=r.shape,e=o.size,a=n.slice(0,i),u=a.length,c=n.slice(s,n.length).slice(1),l=c.length,h=Yt(0,u),f=Yt(u+1,u+1+l),d=Pt([a,[e],c]),p=(0,v.t)(t,d),m=(0,v.t)(o,[e]),g=Pt([[u],h,f]),y=(0,vt.m)(p,g);let w=(0,Rt.z)(y,m,r.shape[i]);const b=(0,mt.gx)(g);return w=(0,vt.m)(w,b),w};return{x:a,indices:()=>o}}};function Yt(t,n){const e=[];for(let r=t;r<n;++r)e.push(r);return e}function Pt(t){const n=[];for(let e=0;e<t.length;++e)for(let r=0;r<t[e].length;++r)n.push(t[e][r]);return n}
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
const Ct={kernelName:r.lL,inputsToSave:["a","b"],gradFunc:(t,n)=>{const[e,r]=n;return{a:()=>(0,k.P)(e),b:()=>(0,k.P)(r)}}},zt={kernelName:r.lz,gradFunc:t=>({x:()=>(0,o.w)(t,"float32")})},Ot={kernelName:r.gI,gradFunc:t=>({x:()=>(0,k.P)(t)})},Lt={kernelName:r.E3,gradFunc:t=>({x:()=>(0,k.P)(t)})},Gt={kernelName:r.iP,gradFunc:t=>({x:()=>(0,k.P)(t)})};var Kt=e(62058);
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
const Wt={kernelName:r.X0,inputsToSave:["x"],gradFunc:(t,n,e)=>{const[r]=n,{alpha:o}=e,i=(0,Kt.r)(r,0);return{x:()=>(0,X._)(i,t,(0,s.l)(t,o))}}},jt={kernelName:r.Cg,inputsToSave:["x"],gradFunc:(t,n)=>{const[e]=n;return{x:()=>(0,u.y)(t,(0,E.W)(e,1))}}},qt={kernelName:r.M3,inputsToSave:["x"],gradFunc:(t,n)=>{const[e]=n;return{x:()=>(0,u.y)(t,(0,o.w)(e,"float32"))}}},Ut={kernelName:r.zf,inputsToSave:[],outputsToSave:[!0],gradFunc:(t,n,e)=>{const[r]=n,{axis:o}=e;return{logits:()=>{const n=!0,e=(0,At.o)(r);return(0,d.j)(t,(0,s.l)((0,y.c)(t,o,n),e))}}}};
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
function Ht(t,n,e,o=5,s=1,i=1,a=.5){const u={x:t,y:n,dy:e},c={depthRadius:o,bias:s,alpha:i,beta:a};return D.T2.runKernel(r.To,u,c)}const Vt=(0,R.op)({localResponseNormalizationBackprop_:Ht}),Zt={kernelName:r.jM,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(t,n,e)=>{const[r,o]=n,{depthRadius:s,bias:i,alpha:a,beta:u}=e;return{x:()=>Vt(r,o,t,s,i,a,u)}}};var Xt=e(13020);
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
function Qt(t,n,e,r){return n.rank<e.rank&&(n=(0,v.t)(n,mt.SM(n.shape,r))),t.rank<e.rank&&(t=(0,v.t)(t,mt.SM(t.shape,r))),{x:()=>{const r=(0,s.l)(t,(0,o.w)((0,Xt.L)(e,n),t.dtype));return r}}}
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
const Jt={kernelName:r.VA,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(t,n,e)=>{const r=e,{reductionIndices:o}=r,s=n[0],i=n[1],a=_.Y6(o,s.shape),u=Qt(t,i,s,a);return{x:()=>u["x"]()}}};var tn=e(61303);
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
const nn={kernelName:r.LD,inputsToSave:["a","b"],gradFunc:(t,n)=>{const[e,r]=n,i=()=>(0,s.l)(t,(0,o.w)((0,H.D)(e,r),"float32")),a=()=>(0,s.l)(t,(0,o.w)((0,tn.M)(e,r),"float32"));return{a:i,b:a}}};
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
function en(t,n,e,o,s,i,a){const u=(0,M.YT)(t,"dy","maxPool3dGrad"),c=(0,M.YT)(n,"input","maxPool3dGrad"),l=(0,M.YT)(e,"output","maxPool3dGrad");let h=u,f=c,d=l,p=!1;4===c.rank&&(p=!0,h=(0,v.t)(u,[1,u.shape[0],u.shape[1],u.shape[2],u.shape[3]]),f=(0,v.t)(c,[1,c.shape[0],c.shape[1],c.shape[2],c.shape[3]]),d=(0,v.t)(l,[1,l.shape[0],l.shape[1],l.shape[2],l.shape[3]])),_.vA(5===h.rank,(()=>`Error in maxPool3dGrad: dy must be rank 5 but got rank ${h.rank}.`)),_.vA(5===f.rank,(()=>`Error in maxPool3dGrad: input must be rank 5 but got rank ${f.rank}.`)),_.vA(5===d.rank,(()=>`Error in maxPool3dGrad: output must be rank 5 but got rank ${d.rank}.`)),(0,F.s_)("maxPool3dGrad",i,a);const m={dy:h,input:f,output:d},g={filterSize:o,strides:s,pad:i,dimRoundingMode:a},y=D.T2.runKernel(r.cH,m,g);return p?(0,v.t)(y,[y.shape[1],y.shape[2],y.shape[3],y.shape[4]]):y}const rn=(0,R.op)({maxPool3dGrad_:en}),on={kernelName:r.yS,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(t,n,e)=>{const[r,o]=n,{filterSize:s,strides:i,pad:a,dimRoundingMode:u}=e;return{x:()=>rn(t,r,o,s,i,a,u)}}};
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
function sn(t,n,e,o,s,i,a){const u=(0,M.YT)(t,"dy","maxPoolGrad"),c=(0,M.YT)(n,"input","maxPoolGrad"),l=(0,M.YT)(e,"output","maxPoolGrad");_.vA(c.rank===u.rank,(()=>`Rank of input (${c.rank}) does not match rank of dy (${u.rank})`)),_.vA(4===u.rank,(()=>`Error in maxPoolGrad: dy must be rank 4 but got rank ${u.rank}.`)),_.vA(4===c.rank,(()=>`Error in maxPoolGrad: input must be rank 4 but got rank ${c.rank}.`)),F.s_("maxPoolGrad",i,a);const h={dy:u,input:c,output:l},f={filterSize:o,strides:s,pad:i,dimRoundingMode:a};return D.T2.runKernel(r.RX,h,f)}const an=(0,R.op)({maxPoolGrad_:sn}),un={kernelName:r.t3,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(t,n,e)=>{const[r,o]=n,{filterSize:s,strides:i,pad:a}=e;return{x:()=>an(t,r,o,s,i,a)}}};var cn=e(61411);
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
const ln={kernelName:r.g5,inputsToSave:["x"],gradFunc:(t,n,e)=>{const[r]=n,{axis:o}=e,i=_.Y6(o,r.shape),a=(0,mt.lb)(r.shape,i),c=a[1],l=_.Ze(c),h=()=>{const n=r.shape.slice();i.forEach((t=>{n[t]=1}));const e=(0,v.t)(t,n),o=(0,u.y)((0,s.l)(e,(0,cn.S)(r.shape,"float32")),l);return o};return{x:h}}},hn={kernelName:r.lN,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(t,n,e)=>{const r=e,{axis:o}=r,[s,i]=n,a=_.Y6(o,s.shape),u=Qt(t,i,s,a);return{x:()=>u["x"]()}}},fn={kernelName:r.LG,inputsToSave:["a","b"],gradFunc:(t,n)=>{const[e,r]=n,i=()=>(0,s.l)(t,(0,o.w)((0,V.I)(e,r),"float32")),a=()=>(0,s.l)(t,(0,o.w)((0,Kt.r)(e,r),"float32"));return{a:i,b:a}}};var dn=e(17986);
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
const pn={kernelName:r.x7,inputsToSave:["x"],gradFunc:(t,n,e)=>{const r=n[0],{paddings:o}=e,s=o.map((t=>t[0]));return{x:()=>(0,dn.d)(t,s,r.shape)}}};var mn=e(15606);
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
const gn={kernelName:r.BL,inputsToSave:["a","b"],gradFunc:(t,n)=>{const[e,r]=n,o=(0,g.assertAndGetBroadcastShape)(e.shape,r.shape),i=()=>{const n=(0,g.getReductionAxes)(e.shape,o);return n.length>0?(0,v.t)((0,y.c)(t,n),e.shape):t},a=()=>{const n=(0,s.l)(t,(0,c.H)((0,mn.R)((0,u.y)(e,r)))),i=(0,g.getReductionAxes)(r.shape,o);return i.length>0?(0,v.t)((0,y.c)(n,i),r.shape):n};return{a:i,b:a}}},vn={kernelName:r.xu,inputsToSave:["a","b"],gradFunc:(t,n)=>{const[e,r]=n,i=(0,g.assertAndGetBroadcastShape)(e.shape,r.shape),a=()=>{const n=(0,s.l)(t,(0,o.w)(r,"float32")),a=(0,g.getReductionAxes)(e.shape,i);return a.length>0?(0,v.t)((0,y.c)(n,a),e.shape):n},u=()=>{const n=(0,s.l)(t,(0,o.w)(e,"float32")),a=(0,g.getReductionAxes)(r.shape,i);return a.length>0?(0,v.t)((0,y.c)(n,a),r.shape):n};return{a:a,b:u}}},yn={kernelName:r.l0,gradFunc:t=>({x:()=>(0,c.H)(t)})};var wn=e(42855);
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
const bn={kernelName:r.ur,inputsToSave:["indices"],gradFunc:(t,n)=>{const e=n[0];return{indices:()=>(0,wn.U)(e.shape,"float32")}}},kn={kernelName:r.LW,gradFunc:t=>({x:()=>(0,k.P)(t)})};var Tn=e(67261);
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
const xn={kernelName:r.mM,saveAllInputs:!0,gradFunc:(t,n,e)=>{const{axis:r}=e,o=(0,Tn.K)(t,r);return o.map((t=>()=>t))}},An={kernelName:r.OD,inputsToSave:["x"],gradFunc:(t,n,e)=>{const r=n[0],{paddings:o}=e,s=o.map((t=>t[0]));return{x:()=>(0,dn.d)(t,s,r.shape)}}};var En=e(44010),Sn=e(98990);
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
const $n={kernelName:r.py,inputsToSave:["a","b"],outputsToSave:[!0],gradFunc:(t,n)=>{const[e,r,i]=n,a=e,u=r,c=g.assertAndGetBroadcastShape(a.shape,u.shape),h=()=>{const n=(0,o.w)(u,"float32");let e=(0,s.l)(t,(0,s.l)(n,(0,Sn.n)(a,(0,d.j)(n,(0,l.d)(1)))));const r=g.getReductionAxes(a.shape,c);return r.length>0&&(e=(0,y.c)(e,r)),(0,v.t)(e,a.shape)},f=()=>{const n=(0,Kt.r)(a,0),e=(0,X._)(n,(0,En.R)(a),(0,k.P)(a));let r=(0,s.l)(t,(0,s.l)(i,e));const o=g.getReductionAxes(u.shape,c);return o.length>0&&(r=(0,y.c)(r,o)),(0,v.t)(r,u.shape)};return{a:h,b:f}}},In={kernelName:r.Nc,inputsToSave:["x","alpha"],gradFunc:(t,n)=>{const[e,r]=n,o=(0,Kt.r)(e,0);return{x:()=>(0,X._)(o,t,(0,s.l)(t,r)),alpha:()=>{let n=(0,X._)(o,(0,k.P)(t),(0,s.l)(t,e));const i=(0,g.getReductionAxes)(r.shape,t.shape);return i.length>0&&(n=(0,y.c)(n,i)),(0,v.t)(n,r.shape)}}}};var Nn=e(10302);
/**
 * @license
 * Copyright 2022 Google Inc. All Rights Reserved.
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
function Dn(t,n,e){const r=t.shape.slice();r[e]=1;const o=(0,v.t)(n,r),i=(0,Nn.L)(t,e,!0,!1),a=(0,Nn.L)(t,e,!0,!0),u=(0,s.l)(i,a);return(0,s.l)(o,u)}function Mn(t,n,e){const r=t.shape.length,o=r-e.length,s=mt.Em(e,r);let i=t;null!=s&&(i=(0,vt.m)(t,s));const a=i.shape.slice(),u=a.splice(r-e.length,e.length),c=u.reduce(((t,n)=>t*n),1);a.push(c);const l=i.reshape(a);let h=Dn(l,n,o);if(h=h.reshape(i.shape),null!=s){const t=mt.gx(s);h=(0,vt.m)(h,t)}return h}const _n={kernelName:r.kd,inputsToSave:["x"],gradFunc:(t,n,e)=>{const[r]=n,{axis:o}=e;let s=[];return s=void 0===o||null===o?r.shape.map(((t,n)=>n)):"number"===typeof o?[o]:o,{x:()=>Mn(r,t,s)}}},Fn={kernelName:r.sD,inputsToSave:["a","b"],gradFunc:(t,n)=>{const[e,r]=n,i=g.assertAndGetBroadcastShape(e.shape,r.shape),a=()=>{const n=(0,u.y)(t,(0,o.w)(r,"float32")),s=g.getReductionAxes(e.shape,i);return s.length>0?(0,v.t)((0,y.c)(n,s),e.shape):n},l=()=>{let n=(0,s.l)(t,(0,o.w)(e,"float32"));const a=g.getReductionAxes(r.shape,i);a.length>0&&(n=(0,v.t)((0,y.c)(n,a),r.shape));const l=(0,f.E)(r);return(0,c.H)((0,u.y)(n,(0,o.w)(l,"float32")))};return{a:a,b:l}}},Rn={kernelName:r.hu,inputsToSave:["x"],gradFunc:(t,n)=>{const[e]=n;return{x:()=>(0,u.y)(t,(0,c.H)((0,f.E)(e)))}}},Bn={kernelName:r.P_,inputsToSave:["x"],gradFunc:(t,n)=>{const[e]=n,r=(0,s.l)((0,V.I)(e,6),(0,i.P)(e));return{x:()=>(0,s.l)(t,(0,o.w)(r,"float32"))}}},Yn={kernelName:r.fU,inputsToSave:["x"],gradFunc:(t,n)=>{const[e]=n;return{x:()=>(0,s.l)(t,(0,o.w)((0,i.P)(e),"float32"))}}},Pn={kernelName:r.R2,inputsToSave:["x"],gradFunc:(t,n)=>{const[e]=n;return{x:()=>(0,v.t)(t,e.shape)}}},Cn={kernelName:r.hg,inputsToSave:["images"],gradFunc:(t,n,e)=>{const[o]=n,s={dy:t,images:o},i=()=>D.T2.runKernel(r.FC,s,e);return{images:i}}},zn={kernelName:r.jO,inputsToSave:["images"],gradFunc:(t,n,e)=>{const[o]=n,s={dy:t,images:o},i=()=>D.T2.runKernel(r.XQ,s,e);return{images:i}}};var On=e(53262);
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
const Ln={kernelName:r.D7,gradFunc:(t,n,e)=>{const{dims:r}=e,o=(0,_.Y6)(r,t.shape);return{x:()=>(0,On.B)(t,o)}}},Gn={kernelName:r.hV,gradFunc:t=>({x:()=>(0,k.P)(t)})},Kn={kernelName:r.TO,inputsToSave:["x"],gradFunc:(t,n)=>{const[e]=n;return{x:()=>(0,c.H)((0,u.y)(t,(0,s.l)((0,Sn.n)(e,1.5),2)))}}};var Wn=e(89881);
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
const jn={kernelName:r.l6,inputsToSave:["condition"],gradFunc:(t,n)=>{const[e]=n;return{condition:()=>(0,o.w)((0,k.P)(e),"float32"),t:()=>(0,s.l)(t,(0,o.w)(e,t.dtype)),e:()=>(0,s.l)(t,(0,o.w)((0,Wn.N)(e),t.dtype))}}};var qn=e(28576);
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
const Un={kernelName:r.u$,inputsToSave:["x"],gradFunc:(t,n)=>{const[e]=n;return{x:()=>{const n=(0,Kt.r)(e,(0,l.d)(0)),r=(0,l.d)(qn.j),i=(0,l.d)(qn.X),a=(0,s.l)(t,i),u=(0,s.l)((0,s.l)(t,r),(0,At.o)((0,o.w)(e,"float32")));return(0,X._)(n,a,u)}}}},Hn={kernelName:r.vI,outputsToSave:[!0],gradFunc:(t,n)=>{const[e]=n;return{x:()=>(0,s.l)(t,(0,s.l)(e,(0,d.j)((0,l.d)(1),e)))}}},Vn={kernelName:r.YV,gradFunc:t=>({x:()=>(0,k.P)(t)})};var Zn=e(99907);
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
const Xn={kernelName:r.hq,inputsToSave:["x"],gradFunc:(t,n)=>{const[e]=n;return{x:()=>(0,s.l)((0,Zn.g)((0,o.w)(e,"float32")),t)}}};var Qn=e(27451);
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
const Jn={kernelName:r.J3,inputsToSave:["x"],gradFunc:(t,n)=>{const[e]=n;return{x:()=>(0,s.l)((0,Qn.y)((0,o.w)(e,"float32")),t)}}};var te=e(65661),ne=e(34969);
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
const ee={kernelName:r.Ji,inputsToSave:["x"],gradFunc:(t,n,e)=>{const[r]=n,{begin:o,size:s}=e,i=r.shape,[a,u]=(0,ne.parseSliceParams)(r,o,s),c=[];for(let l=0;l<t.rank;l++)c.push([a[l],i[l]-a[l]-u[l]]);return{x:()=>(0,te.e)(t,c)}}},re={kernelName:r.K2,outputsToSave:[!0],gradFunc:(t,n,e)=>{const[r]=n,{dim:o}=e,i=!0,a=(0,s.l)(t,r);return{logits:()=>(0,d.j)(a,(0,s.l)((0,y.c)(a,[o],i),r))}}};var oe=e(28968);
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
const se={kernelName:r.Fi,inputsToSave:["x"],gradFunc:(t,n)=>{const[e]=n;return{x:()=>(0,s.l)(t,(0,oe.r)(e))}}};var ie=e(69772);
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
const ae={kernelName:r.A8,gradFunc:(t,n,e)=>{const{blockShape:r,paddings:o}=e;return{x:()=>(0,ie.G)(t,r,o)}}};var ue=e(25030);
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
const ce={kernelName:r.Bl,gradFunc:(t,n,e)=>{const{axis:r}=e;return{x:()=>(0,ue.x)(t,r)}}},le={kernelName:r.dF,inputsToSave:["x"],gradFunc:(t,n)=>{const[e]=n;return{x:()=>(0,u.y)(t,(0,s.l)((0,h.R)((0,o.w)(e,"float32")),2))}}},he={kernelName:r.M6,inputsToSave:["x"],gradFunc:(t,n)=>{const[e]=n;return{x:()=>(0,s.l)(t,(0,s.l)((0,o.w)(e,"float32"),2))}}},fe={kernelName:r.Dd,inputsToSave:["a","b"],gradFunc:(t,n)=>{const[e,r]=n,o=(0,l.d)(2),i=()=>(0,s.l)(t,(0,s.l)(o,(0,d.j)(e,r))),a=()=>(0,s.l)(t,(0,s.l)(o,(0,d.j)(r,e)));return{a:i,b:a}}},de={kernelName:r.pn,gradFunc:t=>({x:()=>(0,k.P)(t)})},pe={kernelName:r.Pb,inputsToSave:["a","b"],gradFunc:(t,n)=>{const[e,r]=n,o=g.assertAndGetBroadcastShape(e.shape,r.shape),s=()=>{let n=t;const r=g.getReductionAxes(e.shape,o);return r.length>0&&(n=(0,y.c)(n,r)),(0,v.t)(n,e.shape)},i=()=>{let n=t;const e=g.getReductionAxes(r.shape,o);return e.length>0&&(n=(0,y.c)(n,e)),(0,v.t)((0,c.H)(n),r.shape)};return{a:s,b:i}}},me={kernelName:r.Wu,inputsToSave:["x"],gradFunc:(t,n,e)=>{const[r]=n,o=r.shape.slice(),{axis:i}=e,a=(0,_.Y6)(i,r.shape);a.forEach((t=>{o[t]=1}));const u=(0,v.t)(t,o),c=(0,s.l)(u,(0,cn.S)(r.shape,"float32"));return{x:()=>c}}},ge={kernelName:r.oF,inputsToSave:["x"],gradFunc:(t,n)=>{const[e]=n;return{x:()=>(0,u.y)(t,(0,f.E)((0,Zn.g)(e)))}}},ve={kernelName:r.iu,outputsToSave:[!0],gradFunc:(t,n)=>{const[e]=n;return{x:()=>(0,s.l)((0,d.j)((0,l.d)(1),(0,f.E)(e)),t)}}},ye={kernelName:r.FA,inputsToSave:["x"],gradFunc:(t,n,e)=>{const[r]=n,{reps:o}=e,s=()=>{let n=(0,k.P)(r);if(1===r.rank)for(let e=0;e<o[0];++e)n=(0,E.W)(n,(0,dn.d)(t,[e*r.shape[0]],[r.shape[0]]));else if(2===r.rank)for(let e=0;e<o[0];++e)for(let s=0;s<o[1];++s)n=(0,E.W)(n,(0,dn.d)(t,[e*r.shape[0],s*r.shape[1]],[r.shape[0],r.shape[1]]));else if(3===r.rank)for(let e=0;e<o[0];++e)for(let s=0;s<o[1];++s)for(let i=0;i<o[2];++i)n=(0,E.W)(n,(0,dn.d)(t,[e*r.shape[0],s*r.shape[1],i*r.shape[2]],[r.shape[0],r.shape[1],r.shape[2]]));else{if(4!==r.rank)throw new Error(`Gradient for tile operation is not implemented for rank-${r.rank} tensors yet.`);for(let e=0;e<o[0];++e)for(let s=0;s<o[1];++s)for(let i=0;i<o[2];++i)for(let a=0;a<o[3];++a)n=(0,E.W)(n,(0,dn.d)(t,[e*r.shape[0],s*r.shape[1],i*r.shape[2],a*r.shape[3]],[r.shape[0],r.shape[1],r.shape[2],r.shape[3]]))}return n};return{x:s}}},we={kernelName:r.wx,gradFunc:(t,n,e)=>{const r=e,{perm:o}=r,s=mt.gx(o);return{x:()=>(0,vt.m)(t,s)}}};var be=e(54268);
/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
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
const ke={kernelName:r.dX,gradFunc:(t,n,e)=>{const r=e,{axis:o}=r;return{value:()=>(0,be.t)(t,o)}}};var Te=e(8710),xe=e(48229),Ae=e(30178);
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
const Ee={kernelName:r.pP,inputsToSave:["segmentIds"],gradFunc:(t,n)=>{const[e]=n,r=()=>Se(t,e);return{x:r}}};function Se(t,n){const e=(0,Ae.P)(n,(0,k.P)(n)),r=(0,xe.k)(t,e);let o=(0,H.D)(n,(0,l.d)(0,"int32"));const s=r.rank-o.rank;for(let a=0;a<s;++a)o=(0,Te.U)(o,a+1);o=(0,Z.n)(o,(0,cn.S)(r.shape,"bool"));const i=(0,k.P)(r);return(0,X._)(o,r,i)}
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
const $e={kernelName:r.xJ,gradFunc:t=>({x:()=>(0,k.P)(t)})};var Ie=e(37074);
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
const Ne=[a,p,m,w,b,T,x,A,S,$,I,N,P,O,G,W,j,q,U,Q,J,nt,it,ot,lt,ft,pt,yt,kt,Tt,Fn,xt,Et,St,$t,It,Dt,Nt,Ft,Bt,Ct,zt,Ot,Lt,Gt,Wt,jt,qt,Ut,Zt,Jt,Jt,nn,on,un,ln,hn,fn,pn,gn,vn,yn,bn,kn,xn,An,An,$n,In,_n,Rn,Bn,Yn,Pn,Cn,zn,Ln,Gn,Kn,jn,Un,Hn,Vn,Xn,Jn,ee,re,se,ae,ae,ce,ce,le,fe,he,de,pe,me,ge,ve,ye,we,ke,Ee,$e];for(const De of Ne)(0,Ie.kr)(De)},73673:function(t,n,e){e.d(n,{R:function(){return s},i:function(){return o}});var r=e(46574);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function o(...t){(0,r._K)().getBool("IS_TEST")||(0,r._K)().getBool("PROD")||console.warn(...t)}function s(...t){(0,r._K)().getBool("IS_TEST")||(0,r._K)().getBool("PROD")||console.log(...t)}},73937:function(t,n,e){e.d(n,{A:function(){return c}});var r=e(57260),o=e(15441),s=e(28189),i=e(45119),a=e(70929);
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
function u(t,n=0){const e=(0,s.YT)(t,"x","unique","string_or_numeric");(0,i.vA)(e.rank>0,(()=>"The input tensor must be at least 1D"));const a={x:e},u={axis:n},[c,l]=r.T2.runKernel(o.Ew,a,u);return{values:c,indices:l}}const c=(0,a.op)({unique_:u})},74027:function(t,n,e){e.d(n,{O:function(){return s}});var r=e(28189),o=e(19171);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
function s(t,n,e){const s=(0,r.MZ)(t,e);return(0,o.Q)(t,n,s,e)}},75295:function(t,n,e){
/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
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
function r(t,n=!1){console.log(t.toString(n))}e.d(n,{y:function(){return r}})},76808:function(t,n,e){e.d(n,{r:function(){return u}});var r=e(57260),o=e(15441),s=e(28189),i=e(70929);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
function a(t,n=0,e=!1,i=!1){const a=(0,s.YT)(t,"x","cumsum"),u={x:a},c={axis:n,exclusive:e,reverse:i};return r.T2.runKernel(o.nY,u,c)}const u=(0,i.op)({cumsum_:a})},77126:function(t,n,e){e.d(n,{j:function(){return c}});var r=e(57260),o=e(15441),s=e(30565),i=e(28189),a=e(70929);
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
function u(t,n){let e=(0,i.YT)(t,"a","sub"),a=(0,i.YT)(n,"b","sub");[e,a]=(0,s.makeTypesMatch)(e,a);const u={a:e,b:a};return r.T2.runKernel(o.Pb,u)}const c=(0,a.op)({sub_:u})},77823:function(t,n,e){e.d(n,{M:function(){return u}});var r=e(57260),o=e(15441),s=e(28189),i=e(70929);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
function a(t){const n=(0,s.YT)(t,"x","tan","float32"),e={x:n};return r.T2.runKernel(o.oF,e)}const u=(0,i.op)({tan_:a})},77974:function(t,n,e){e.d(n,{a:function(){return c}});var r=e(57260),o=e(15441),s=e(28189),i=e(45119),a=e(70929);
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
function u(t,n,e,a=!1){const u=(0,s.YT)(t,"x","denseBincount"),c=(0,s.YT)(n,"weights","denseBincount");i.vA("int32"===u.dtype,(()=>`Error in denseBincount: input dtype must be int32, but got ${u.dtype}`)),i.vA(u.rank<=2,(()=>`Error in denseBincount: input must be at most rank 2, but got rank ${u.rank}.`)),i.vA(e>=0,(()=>`size must be non-negative, but got ${e}.`)),i.vA(c.size===u.size||0===c.size,(()=>`Error in denseBincount: weights must have the same shape as x or 0-length, but got x shape: ${u.shape}, weights shape: ${c.shape}.`));const l={x:u,weights:c},h={size:e,binaryOutput:a};return r.T2.runKernel(o.wN,l,h)}const c=(0,a.op)({denseBincount_:u})},79120:function(t,n,e){e.d(n,{s:function(){return h}});var r=e(57260),o=e(15441),s=e(28189),i=e(45119),a=e(70929),u=e(62302);
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
const c=2147483648;function l(t,n,e="left"){const a=(0,s.YT)(t,"sortedSequence","searchSorted"),l=(0,s.YT)(n,"values","searchSorted"),h=a.shape[a.shape.length-1],f=l.shape[l.shape.length-1],d=(0,u.t)(a,[-1,h]),p=(0,u.t)(l,[-1,f]);if(d.rank<2)throw new Error("Sorted input argument must be at least 2-dimensional");if(d.shape[0]!==p.shape[0])throw new Error("Leading dimension of 'sortedSequence' and 'values' must match.");if((0,i.Ze)(p.shape)>=c)throw new Error(`values tensor size must less than ${c}`);if(d.shape[1]>=c)throw new Error(`trailing dim_size must less than ${c} for int32 output type, was ${d.shape[1]}`);const m={sortedSequence:d,values:p},g={side:e};return r.T2.runKernel(o.uW,m,g)}const h=(0,a.op)({searchSorted_:l})},79348:function(t,n,e){e.d(n,{R:function(){return u}});var r=e(57260),o=e(15441),s=e(28189),i=e(70929);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
function a(t){const n=(0,s.YT)(t,"x","sqrt","float32"),e={x:n};return r.T2.runKernel(o.dF,e)}const u=(0,i.op)({sqrt_:a})},79546:function(t,n,e){e.d(n,{Y:function(){return a}});var r=e(448),o=e(70929),s=e(89748);
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
function i(t,n=0,e=1,o="float32",i){const a=(0,r.r)(t,o),u=new s.yU(n,e,null,i);for(let r=0;r<a.values.length;r++)a.values[r]=u.nextValue();return a.toTensor()}const a=(0,o.op)({randomUniform_:i})},79853:function(t,n,e){e.d(n,{_:function(){return u}});var r=e(57260),o=e(15441),s=e(28189),i=e(70929);
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
function a(t,...n){const e=n.map(((t,n)=>(0,s.YT)(t,`tensors${n}`,"einsum"))),i={equation:t};return r.T2.runKernel(o.Qg,e,i)}const u=(0,i.op)({einsum_:a})},80252:function(t,n,e){e.d(n,{v:function(){return l}});var r=e(57260),o=e(15441),s=e(45119),i=e(47195),a=e(70929),u=e(62302);
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
function c(t,n,e,a,c,l="NHWC",h){s.vA(t.length===n.rank,(()=>`Length of inShape (${t.length}) and rank of dy (${n.rank}) must match`));let f=t,d=n,p=!1;3===n.rank&&(p=!0,d=(0,u.t)(n,[1,n.shape[0],n.shape[1],n.shape[2]]),f=[1,t[0],t[1],t[2]]),s.vA(4===f.length,(()=>`Error in conv2dDerInput: inShape must be length 4, but got length ${f.length}.`)),s.vA(4===d.rank,(()=>`Error in conv2dDerInput: dy must be rank 4, but got rank ${d.rank}`)),s.vA(4===e.rank,(()=>`Error in conv2dDerInput: filter must be rank 4, but got rank ${e.rank}`));const m="NHWC"===l?f[3]:f[1],g="NHWC"===l?d.shape[3]:d.shape[1];s.vA(m===e.shape[2],(()=>`Error in conv2dDerInput: depth of input (${m}) must match input depth for filter ${e.shape[2]}.`)),s.vA(g===e.shape[3],(()=>`Error in conv2dDerInput: depth of output (${g}) must match output depth for filter ${e.shape[3]}.`)),i.s_("conv2dDerInput",c,h);const v={dy:d,filter:e},y={strides:a,pad:c,dataFormat:l,dimRoundingMode:h,inputShape:f},w=r.T2.runKernel(o.jf,v,y);return p?(0,u.t)(w,[w.shape[1],w.shape[2],w.shape[3]]):w}const l=(0,a.op)({conv2DBackpropInput_:c})},80462:function(t,n,e){e.d(n,{y:function(){return o}});var r=e(79120);
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
 */function o(t,n){return(0,r.s)(t,n,"left")}},83134:function(t,n,e){e.d(n,{l:function(){return u}});var r=e(57260),o=e(15441),s=e(70929),i=e(62302);
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
function a(t,n,e,s,a,u=[1,1],c){let l=n,h=!1;3===n.rank&&(h=!0,l=(0,i.t)(n,[1,n.shape[0],n.shape[1],n.shape[2]]));const f={dy:l,filter:e},d={strides:s,pad:a,dimRoundingMode:c,dilations:u,inputShape:t},p=r.T2.runKernel(o.nV,f,d);return h?(0,i.t)(p,[p.shape[1],p.shape[2],p.shape[3]]):p}const u=(0,s.op)({depthwiseConv2dNativeBackpropInput_:a})},83416:function(t,n,e){e.d(n,{P:function(){return u}});var r=e(57260),o=e(15441),s=e(28189),i=e(70929);
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
function a(t){const n=(0,s.YT)(t,"x","elu","float32"),e={x:n};return r.T2.runKernel(o.P,e)}const u=(0,i.op)({elu_:a})},83732:function(t,n,e){e.d(n,{j:function(){return u}});var r=e(57260),o=e(15441),s=e(28189),i=e(70929);
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
function a(t){const n=(0,s.YT)(t,"x","relu6"),e={x:n};return r.T2.runKernel(o.P_,e)}const u=(0,i.op)({relu6_:a})},83791:function(t,n,e){e.d(n,{c:function(){return c}});var r=e(57260),o=e(15441),s=e(28189),i=e(29809),a=e(70929);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
function u(t,n=null,e=!1){let a=(0,s.YT)(t,"x","sum");"bool"===a.dtype&&(a=(0,i.w)(a,"int32"));const u={x:a},c={axis:n,keepDims:e};return r.T2.runKernel(o.Wu,u,c)}const c=(0,a.op)({sum_:u})},86999:function(t,n,e){e.d(n,{j:function(){return h}});var r=e(57260),o=e(15441),s=e(28189),i=e(45119),a=e(47195),u=e(70929),c=e(62302);
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
function l(t,n,e,u,l){const h=(0,s.YT)(t,"x","maxPool"),f=1;let d=h,p=!1;3===h.rank&&(p=!0,d=(0,c.t)(h,[1,h.shape[0],h.shape[1],h.shape[2]])),i.vA(4===d.rank,(()=>`Error in maxPool: input must be rank 4 but got rank ${d.rank}.`)),i.vA(a.G0(e,f),(()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${e} and dilations '${f}'`)),a.s_("maxPool",u,l);const m={x:d},g={filterSize:n,strides:e,pad:u,dimRoundingMode:l},v=r.T2.runKernel(o.t3,m,g);return p?(0,c.t)(v,[v.shape[1],v.shape[2],v.shape[3]]):v}const h=(0,u.op)({maxPool_:l})},88991:function(t,n,e){e.d(n,{w:function(){return c}});var r=e(57260),o=e(15441),s=e(30565),i=e(28189),a=e(70929);
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
function u(t,n){let e=(0,i.YT)(t,"a","floorDiv"),a=(0,i.YT)(n,"b","floorDiv");[e,a]=(0,s.makeTypesMatch)(e,a);const u={a:e,b:a};return r.T2.runKernel(o.El,u)}const c=(0,a.op)({floorDiv_:u})},89326:function(t,n,e){e.d(n,{b:function(){return u}});var r=e(57260),o=e(15441),s=e(28189),i=e(70929);
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
function a(t,n=null,e=!1){const i=(0,s.YT)(t,"x","any","bool"),a={x:i},u={axis:n,keepDims:e};return r.T2.runKernel(o.FS,a,u)}const u=(0,i.op)({any_:a})},89359:function(t,n,e){e.d(n,{y:function(){return l}});var r=e(57260),o=e(15441),s=e(30565),i=e(28189),a=e(88991),u=e(70929);
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
function c(t,n){let e=(0,i.YT)(t,"a","div"),u=(0,i.YT)(n,"b","div");if([e,u]=(0,s.makeTypesMatch)(e,u),"int32"===e.dtype&&"int32"===u.dtype)return(0,a.w)(e,u);const c={a:e,b:u},l={};return r.T2.runKernel(o.sD,c,l)}const l=(0,u.op)({div_:c})},89748:function(t,n,e){e.d(n,{XA:function(){return s},ai:function(){return o},yU:function(){return i}});var r=e(7391);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
class o{constructor(t,n,e,o,s){this.mean=t,this.stdDev=n,this.dtype=e,this.nextVal=NaN,this.truncated=o,this.truncated&&(this.upper=this.mean+2*this.stdDev,this.lower=this.mean-2*this.stdDev);const i=s||Math.random();this.random=r.alea(i.toString())}nextValue(){if(!isNaN(this.nextVal)){const t=this.nextVal;return this.nextVal=NaN,t}let t,n,e=!1;while(!e){let r,o,s;do{r=2*this.random()-1,o=2*this.random()-1,s=r*r+o*o}while(s>=1||0===s);const i=Math.sqrt(-2*Math.log(s)/s);t=this.mean+this.stdDev*r*i,n=this.mean+this.stdDev*o*i,this.truncated&&!this.isValidTruncated(t)||(e=!0)}return this.truncated&&!this.isValidTruncated(n)||(this.nextVal=this.convertValue(n)),this.convertValue(t)}convertValue(t){return null==this.dtype||"float32"===this.dtype?t:Math.round(t)}isValidTruncated(t){return t<=this.upper&&t>=this.lower}}class s{constructor(t,n,e,s){this.alpha=t,this.beta=1/n,this.dtype=e;const i=s||Math.random();this.randu=r.alea(i.toString()),this.randn=new o(0,1,e,!1,this.randu()),this.d=t<1?t+2/3:t-1/3,this.c=1/Math.sqrt(9*this.d)}nextValue(){let t,n,e,r,o,s;while(1){do{r=this.randn.nextValue(),s=1+this.c*r}while(s<=0);if(s*=s*s,t=r*r,n=1-.331*t*t,e=.5*t+this.d*(1-s+Math.log(s)),o=this.randu(),o<n||Math.log(o)<e)break}return s=1/this.beta*this.d*s,this.alpha<1&&(s*=Math.pow(this.randu(),1/this.alpha)),this.convertValue(s)}convertValue(t){return"float32"===this.dtype?t:Math.round(t)}}class i{constructor(t=0,n=1,e,o){if(this.canReturnFloat=()=>null==this.dtype||"float32"===this.dtype,this.min=t,this.range=n-t,this.dtype=e,null==o&&(o=Math.random()),"number"===typeof o&&(o=o.toString()),!this.canReturnFloat()&&this.range<=1)throw new Error(`The difference between ${t} - ${n} <= 1 and dtype is not float`);this.random=r.alea(o)}convertValue(t){return this.canReturnFloat()?t:Math.round(t)}nextValue(){return this.convertValue(this.min+this.range*this.random())}}},89881:function(t,n,e){e.d(n,{N:function(){return u}});var r=e(57260),o=e(15441),s=e(28189),i=e(70929);
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
function a(t){const n=(0,s.YT)(t,"x","logicalNot","bool"),e={x:n};return r.T2.runKernel(o.nZ,e)}const u=(0,i.op)({logicalNot_:a})},89986:function(t,n,e){e.d(n,{w:function(){return l}});var r=e(28189),o=e(45119),s=e(28794),i=e(10676),a=e(70929),u=e(62302);function c(t,n,e,a,c,l=[1,1],h="NHWC"){const f=(0,r.YT)(t,"x","separableConv2d"),d=(0,r.YT)(n,"depthwiseFilter","separableConv2d"),p=(0,r.YT)(e,"pointwiseFilter","separableConv2d");let m=f,g=!1;if(3===f.rank&&(g=!0,m=(0,u.t)(f,[1,f.shape[0],f.shape[1],f.shape[2]])),"NCHW"===h)throw new Error("separableConv2d currently does not support dataFormat NCHW; only NHWC is supported");o.vA(4===m.rank,(()=>`Error in separableConv2d: input must be rank 4, but got rank ${m.rank}.`)),o.vA(4===d.rank,(()=>`Error in separableConv2d: depthwise filter must be rank 4, but got rank ${d.rank}.`)),o.vA(4===p.rank,(()=>`Error in separableConv2d: pointwise filter must be rank 4, but got rank ${d.rank}.`)),o.vA(1===p.shape[0],(()=>`Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got ${p.shape[0]}.`)),o.vA(1===p.shape[1],(()=>`Error in separableConv2d: the second dimension of pointwise filter must be 1, but got ${p.shape[1]}.`));const v=d.shape[2],y=d.shape[3];o.vA(p.shape[2]===v*y,(()=>`Error in separableConv2d: the third dimension of pointwise filter must be ${v*y}, but got ${p.shape[2]}.`));const w=(0,i.G)(m,d,a,c,h,l),b=1,k=(0,s.X)(w,p,b,"valid",h);return g?(0,u.t)(k,[k.shape[1],k.shape[2],k.shape[3]]):k}const l=(0,a.op)({separableConv2d_:c})},90112:function(t,n,e){e.d(n,{V:function(){return u}});var r=e(57260),o=e(15441),s=e(28189),i=e(70929);
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
function a(t){const n=(0,s.YT)(t,"x","relu"),e={x:n};return r.T2.runKernel(o.fU,e)}const u=(0,i.op)({relu_:a})},90167:function(t,n,e){e.d(n,{I:function(){return h}});var r=e(57260),o=e(15441),s=e(28189),i=e(45119),a=e(47195),u=e(70929),c=e(62302);
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
function l(t,n,e,u,l="NDHWC",h=[1,1,1]){const f=(0,s.YT)(t,"x","conv3d"),d=(0,s.YT)(n,"filter","conv3d");let p=f,m=!1;4===f.rank&&(m=!0,p=(0,c.t)(f,[1,f.shape[0],f.shape[1],f.shape[2],f.shape[3]])),i.vA(5===p.rank,(()=>`Error in conv3d: input must be rank 5, but got rank ${p.rank}.`)),i.vA(5===d.rank,(()=>`Error in conv3d: filter must be rank 5, but got rank ${d.rank}.`)),i.vA(p.shape[4]===d.shape[3],(()=>`Error in conv3d: depth of input (${p.shape[4]}) must match input depth for filter ${d.shape[3]}.`)),i.vA((0,a.G0)(e,h),(()=>`Error in conv3D: Either strides or dilations must be 1. Got strides ${e} and dilations '${h}'`)),i.vA("NDHWC"===l,(()=>`Error in conv3d: got dataFormat of ${l} but only NDHWC is currently supported.`));const g={x:p,filter:d},v={strides:e,pad:u,dataFormat:l,dilations:h},y=r.T2.runKernel(o.A1,g,v);return m?(0,c.t)(y,[y.shape[1],y.shape[2],y.shape[3],y.shape[4]]):y}const h=(0,u.op)({conv3d_:l})},91624:function(t,n,e){e.d(n,{G:function(){return w}});var r=e(57260),o=e(31830),s=e(15441),i=e(30565),a=e(28189),u=e(45119),c=e(37523),l=e(62198),h=e(47195),f=e(10676),d=e(41890),p=e(83134),m=e(68646),g=e(70929),v=e(62302);
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
function y({x:t,filter:n,strides:e,pad:g,dataFormat:y="NHWC",dilations:w=[1,1],dimRoundingMode:b,bias:k,activation:T="linear",preluActivationWeights:x,leakyreluAlpha:A}){if(!1===(0,m.zE)(r.T2.state.gradientDepth,T)){let r=(0,f.G)(t,n,e,g,y,w,b);return null!=k&&(r=(0,c.W)(r,k)),(0,m.f2)(r,T,x,A)}const E=(0,a.YT)(t,"x","depthwiseConv2d","float32"),S=(0,a.YT)(n,"filter","depthwiseConv2d","float32");let $=E,I=!1;3===E.rank&&(I=!0,$=(0,v.t)(E,[1,E.shape[0],E.shape[1],E.shape[2]])),u.vA(4===$.rank,(()=>`Error in fused depthwiseConv2d: input must be rank 4, but got rank ${$.rank}.`)),u.vA(4===S.rank,(()=>`Error in fused depthwiseConv2d: filter must be rank 4, but got rank ${S.rank}.`)),u.vA($.shape[3]===S.shape[2],(()=>`Error in fused depthwiseConv2d: number of input channels (${$.shape[3]}) must match the inChannels dimension in filter ${S.shape[2]}.`)),null==w&&(w=[1,1]),u.vA(h.G0(e,w),(()=>`Error in fused depthwiseConv2d: Either strides or dilations must be 1. Got strides ${e} and dilations '${w}'`)),h.s_("fused depthwiseConv2d",g,b);const N=h.uf($.shape,S.shape,e,w,g,b,!0);let D,M;null!=k&&(D=(0,a.YT)(k,"bias","fused conv2d"),[D]=(0,i.makeTypesMatch)(D,E),l.assertAndGetBroadcastShape(N.outShape,D.shape)),null!=x&&(M=(0,a.YT)(x,"prelu weights","fused depthwiseConv2d"));const _=(t,n)=>{u.vA(h.Dh(w),(()=>`Error in gradient of fused depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '${w}'`));const[r,o,s,i]=n,a=(0,m.XB)(t,s,T),c=(0,p.l)(o.shape,a,r,e,g,w,b),l=(0,d.x)(o,a,r.shape,e,g,w,b);if(null!=i){const t=(0,m.Do)(D,a);return[c,l,t]}return[c,l]},F={x:$,filter:S,bias:D,preluActivationWeights:M},R={strides:e,pad:g,dataFormat:y,dilations:w,dimRoundingMode:b,activation:T,leakyreluAlpha:A};if(null==k){const t=(0,o._X)(((t,n,e)=>{let o=r.T2.runKernel(s.T7,F,R);return e([n,t,o]),I&&(o=(0,v.t)(o,[o.shape[1],o.shape[2],o.shape[3]])),{value:o,gradFunc:_}}));return t($,S)}{const t=(0,o._X)(((t,n,e,o)=>{let i=r.T2.runKernel(s.T7,F,R);return o([n,t,i,e]),I&&(i=(0,v.t)(i,[i.shape[1],i.shape[2],i.shape[3]])),{value:i,gradFunc:_}}));return t($,S,D)}}const w=(0,g.op)({fusedDepthwiseConv2d_:y})},92596:function(t,n,e){e.d(n,{x:function(){return y}});var r=e(28189),o=e(45119),s=e(4888),i=e(21078),a=e(41938),u=e(57436),c=e(70929),l=e(98990),h=e(62302),f=e(45702),d=e(79348),p=e(45793),m=e(83791);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
function g(t,n="euclidean",e=null,s=!1){t=(0,r.YT)(t,"x","norm");const a=v(t,n,e);let u=a.shape;if(s){const n=(0,o.Y6)(e,t.shape);u=i.SM(a.shape,n)}return(0,h.t)(a,u)}function v(t,n,e=null){if(0===t.rank)return(0,s.t)(t);if(1!==t.rank&&null===e)return v((0,h.t)(t,[-1]),n,e);if(1===t.rank||"number"===typeof e||Array.isArray(e)&&1===e.length){if(1===n)return(0,m.c)((0,s.t)(t),e);if(n===1/0)return(0,a.T)((0,s.t)(t),e);if(n===-1/0)return(0,u.j)((0,s.t)(t),e);if("euclidean"===n||2===n)return(0,d.R)((0,m.c)((0,l.n)((0,s.t)(t),(0,f.d)(2,"int32")),e));throw new Error(`Error in norm: invalid ord value: ${n}`)}if(Array.isArray(e)&&2===e.length){if(1===n)return(0,a.T)((0,m.c)((0,s.t)(t),e[0]),e[1]-1);if(n===1/0)return(0,a.T)((0,m.c)((0,s.t)(t),e[1]),e[0]);if(n===-1/0)return(0,u.j)((0,m.c)((0,s.t)(t),e[1]),e[0]);if("fro"===n||"euclidean"===n)return(0,d.R)((0,m.c)((0,p.E)(t),e));throw new Error(`Error in norm: invalid ord value: ${n}`)}throw new Error(`Error in norm: invalid axis: ${e}`)}const y=(0,c.op)({norm_:g})},93002:function(t,n,e){e.d(n,{X:function(){return l}});var r=e(57260),o=e(15441),s=e(28189),i=e(45119),a=e(70929),u=e(62302);
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
function c(t,n,e,a,c=[1,1],l="NHWC"){const h=(0,s.YT)(t,"x","dilation2d"),f=(0,s.YT)(n,"filter","dilation2d");i.vA(3===h.rank||4===h.rank,(()=>`Error in dilation2d: input must be rank 3 or 4, but got rank ${h.rank}.`)),i.vA(3===f.rank,(()=>`Error in dilation2d: filter must be rank 3, but got rank ${f.rank}.`)),i.vA("NHWC"===l,(()=>`Error in dilation2d: Only NHWC is currently supported, but got dataFormat of ${l}`));let d=h,p=!1;3===h.rank&&(d=(0,u.t)(h,[1,h.shape[0],h.shape[1],h.shape[2]]),p=!0);const m={x:d,filter:f},g={strides:e,pad:a,dilations:c},v=r.T2.runKernel(o.jx,m,g);return p?(0,u.t)(v,[v.shape[1],v.shape[2],v.shape[3]]):v}const l=(0,a.op)({dilation2d_:c})},93502:function(t,n,e){e.d(n,{X:function(){return w}});var r=e(57260),o=e(31830),s=e(15441),i=e(30565),a=e(28189),u=e(45119),c=e(37523),l=e(62198),h=e(28794),f=e(25248),d=e(80252),p=e(47195),m=e(68646),g=e(70929),v=e(62302);
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
function y({x:t,filter:n,strides:e,pad:g,dataFormat:y="NHWC",dilations:w=[1,1],dimRoundingMode:b,bias:k,activation:T="linear",preluActivationWeights:x,leakyreluAlpha:A}){if(T=T||"linear",!1===(0,m.zE)(r.T2.state.gradientDepth,T)){u.vA("NHWC"===y,(()=>`Error in fused conv2d: got dataFormat of ${y} but only NHWC is currently supported for the case of gradient depth is 0 and the activation is not linear.`));let r=(0,h.X)(t,n,e,g,y,w,b);return null!=k&&(r=(0,c.W)(r,k)),(0,m.f2)(r,T,x,A)}const E=(0,a.YT)(t,"x","conv2d","float32"),S=(0,a.YT)(n,"filter","conv2d","float32");let $=E,I=!1;3===E.rank&&(I=!0,$=(0,v.t)(E,[1,E.shape[0],E.shape[1],E.shape[2]])),u.vA(4===$.rank,(()=>`Error in fused conv2d: input must be rank 4, but got rank ${$.rank}.`)),u.vA(4===S.rank,(()=>`Error in fused conv2d: filter must be rank 4, but got rank ${S.rank}.`)),p.s_("fused conv2d",g,b);const N="NHWC"===y?$.shape[3]:$.shape[1];u.vA(S.shape[2]===N,(()=>`Error in conv2d: depth of input (${N}) must match input depth for filter ${S.shape[2]}.`)),u.vA(p.G0(e,w),(()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${e} and dilations '${w}'`));const D=p.uf($.shape,S.shape,e,w,g,b);let M,_;if(null!=k&&(M=(0,a.YT)(k,"bias","fused conv2d"),[M]=(0,i.makeTypesMatch)(M,E),"NHWC"===y?l.assertAndGetBroadcastShape(D.outShape,M.shape):(u.vA(M.shape.length<=1,(()=>`Error in fused conv2d: only supports scalar or 1-D Tensor bias for NCHW format but got the bias of rank-${M.shape.length}.`)),u.vA(0===M.shape.length||M.shape[0]===D.outChannels||1===M.shape[0],(()=>`Error in fused conv2d: bias shape (${M.shape}) is not compatible with the number of output channels (${D.outChannels})`)))),null!=x){const t=x.shape;if(u.vA(t.length<=1||3===t.length,(()=>`Error in fused conv2d: only supports scalar, 1-D Tensor or 3-D Tensor PReLU activation weights but got a tensor of rank-${t.length}.`)),1===t.length)u.vA(1===t[0]||t[0]===D.outChannels,(()=>`Error in fused conv2d: PReLU activation weights (${t}) is not compatible with the number of output channels (${D.outChannels}).`));else if(3===t.length)try{l.assertAndGetBroadcastShape(t,D.outShape)}catch(Y){const n=`Error in fused conv2d: PReLU activation weights (${t}) is not compatible with the output shape of the conv2d (${D.outShape}).`;throw Error(n)}_=(0,a.YT)(x,"prelu weights","fused conv2d")}const F=(t,n)=>{u.vA("NHWC"===y,(()=>`Error in gradient of fused conv2D: got dataFormat of ${y} but only NHWC is currently supported.`));const[r,o,s,i]=n,a=(0,m.XB)(t,s,T);u.vA(p.Dh(w),(()=>`Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${w}'`));const c=(0,d.v)(o.shape,a,r,e,g),l=(0,f.H)(o,a,r.shape,e,g),h=[c,l];if(null!=i){const t=(0,m.Do)(i,a);h.push(t)}return h},R={x:$,filter:S,bias:M,preluActivationWeights:_},B={strides:e,pad:g,dataFormat:y,dilations:w,dimRoundingMode:b,activation:T,leakyreluAlpha:A};if(null==k){const t=(0,o._X)(((t,n,e)=>{let o=r.T2.runKernel(s.aA,R,B);return e([n,t,o]),I&&(o=(0,v.t)(o,[o.shape[1],o.shape[2],o.shape[3]])),{value:o,gradFunc:F}}));return t($,S)}{const t=(0,o._X)(((t,n,e,o)=>{let i=r.T2.runKernel(s.aA,R,B);return o([n,t,i,e]),I&&(i=(0,v.t)(i,[i.shape[1],i.shape[2],i.shape[3]])),{value:i,gradFunc:F}}));return t($,S,M)}}const w=(0,g.op)({fusedConv2d_:y})},93531:function(t,n,e){e.d(n,{K:function(){return l}});var r=e(57260),o=e(15441),s=e(28189),i=e(45119),a=e(70929),u=e(62302);
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
function c(t,n=5,e=1,a=1,c=.5){const l=(0,s.YT)(t,"x","localResponseNormalization");i.vA(4===l.rank||3===l.rank,(()=>`Error in localResponseNormalization: x must be rank 3 or 4 but got\n               rank ${l.rank}.`)),i.vA(i.E6(n),(()=>`Error in localResponseNormalization: depthRadius must be an integer but got depthRadius ${n}.`));let h=l,f=!1;3===l.rank&&(f=!0,h=(0,u.t)(l,[1,l.shape[0],l.shape[1],l.shape[2]]));const d={x:h},p={depthRadius:n,bias:e,alpha:a,beta:c},m=r.T2.runKernel(o.jM,d,p);return f?(0,u.t)(m,[m.shape[1],m.shape[2],m.shape[3]]):m}const l=(0,a.op)({localResponseNormalization_:c})},94791:function(t,n,e){e.d(n,{N:function(){return c}});var r=e(57260),o=e(15441),s=e(28189),i=e(70929),a=e(26170);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
function u(t,n,e){const i=(0,s.YT)(t,"indices","scatterND","int32"),u=(0,s.YT)(n,"updates","scatterND");a.validateInput(u,i,e);const c={indices:i,updates:u},l={shape:e};return r.T2.runKernel(o.pJ,c,l)}const c=(0,i.op)({scatterND_:u})},95207:function(t,n,e){e.d(n,{Y:function(){return l}});var r=e(57260),o=e(15441),s=e(28189),i=e(45119),a=e(29809),u=e(70929);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
function c(t){let n=(0,s.YT)(t,"x","erf");i.vA("int32"===n.dtype||"float32"===n.dtype,(()=>"Input dtype must be `int32` or `float32`.")),"int32"===n.dtype&&(n=(0,a.w)(n,"float32"));const e={x:n};return r.T2.runKernel(o._s,e)}const l=(0,u.op)({erf_:c})},95645:function(t,n,e){e.d(n,{n:function(){return h}});var r=e(31830),o=e(28189),s=e(9258),i=e(96522),a=e(70929),u=e(28968),c=e(66030);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
function l(t){const n=(0,o.YT)(t,"x","logSigmoid"),e=(0,r._X)((t=>{const n=(0,i.H)((0,c.l)((0,i.H)(t))),e=n=>{const e=(0,s.l)(n,(0,u.r)((0,i.H)(t)));return e};return{value:n,gradFunc:e}}));return e(n)}const h=(0,a.op)({logSigmoid_:l})},96111:function(t,n,e){e.d(n,{G:function(){return s}});var r=e(57260),o=e(15441);
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
function s(t,n,e){const s={shape:t,value:n,dtype:e};return r.T2.runKernel(o.SQ,{},s)}},96522:function(t,n,e){e.d(n,{H:function(){return u}});var r=e(57260),o=e(15441),s=e(28189),i=e(70929);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
function a(t){const n=(0,s.YT)(t,"x","neg"),e={x:n};return r.T2.runKernel(o.l0,e)}const u=(0,i.op)({neg_:a})},96928:function(t,n,e){e.d(n,{z:function(){return c}});var r=e(57260),o=e(15441),s=e(28189),i=e(45119),a=e(70929);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
function u(t,n,e){const a=(0,s.YT)(t,"x","clipByValue");i.vA(n<=e,(()=>`Error in clip: min (${n}) must be less than or equal to max (${e}).`));const u={x:a},c={clipValueMin:n,clipValueMax:e};return r.T2.runKernel(o.v,u,c)}const c=(0,a.op)({clipByValue_:u})},97706:function(t,n,e){e.d(n,{z:function(){return c}});var r=e(57260),o=e(15441),s=e(28189),i=e(45119),a=e(70929);
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
function u(t,n,e){const a=(0,s.YT)(t,"x","unsortedSegmentSum"),u=(0,s.YT)(n,"segmentIds","unsortedSegmentSum","int32");(0,i.vA)((0,i.E6)(e),(()=>"numSegments must be of dtype int"));const c={x:a,segmentIds:u},l={numSegments:e};return r.T2.runKernel(o.pP,c,l)}const c=(0,a.op)({unsortedSegmentSum_:u})},97858:function(t,n,e){e.d(n,{e:function(){return a}});var r=e(448),o=e(70929),s=e(89748);
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
function i(t,n=0,e=1,o,i){if(null!=o&&"bool"===o)throw new Error("Unsupported data type $ { dtype }");const a=new s.ai(n,e,o,!0,i),u=(0,r.r)(t,o);for(let r=0;r<u.values.length;r++)u.values[r]=a.nextValue();return u.toTensor()}const a=(0,o.op)({truncatedNormal_:i})},97991:function(t,n,e){e.d(n,{H:function(){return p}});var r=e(31830),o=e(28189),s=e(29809),i=e(8631),a=e(44010),u=e(41938),c=e(9258),l=e(70929),h=e(77126),f=e(83791);
/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
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
function d(t,n=-1){const e=(0,o.YT)(t,"logits","logSoftmax");if(-1===n&&(n=e.rank-1),n!==e.rank-1)throw Error(`Log Softmax along a non-last dimension is not yet supported. Logits was rank ${e.rank} and axis was ${n}`);const l=(0,r._X)(((t,e)=>{const r=!0,o=(0,u.T)(t,n,!0),l=(0,h.j)(t,o),d=(0,h.j)((0,s.w)(l,"float32"),(0,a.R)((0,f.c)((0,i.o)(l),n,r)));e([d]);const p=(t,e)=>{const[r]=e,o=!0,s=(0,i.o)(r);return(0,h.j)(t,(0,c.l)((0,f.c)(t,n,o),s))};return{value:d,gradFunc:p}}));return l(e)}const p=(0,l.op)({logSoftmax_:d})},98990:function(t,n,e){e.d(n,{n:function(){return c}});var r=e(57260),o=e(15441),s=e(30565),i=e(28189),a=e(70929);
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
function u(t,n){let e=(0,i.YT)(t,"base","pow"),a=(0,i.YT)(n,"exp","pow");[e,a]=(0,s.makeTypesMatch)(e,a);const u={a:e,b:a};return r.T2.runKernel(o.py,u)}const c=(0,a.op)({pow_:u})},99907:function(t,n,e){e.d(n,{g:function(){return u}});var r=e(57260),o=e(15441),s=e(28189),i=e(70929);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
function a(t){const n=(0,s.YT)(t,"x","cos","float32"),e={x:n};return r.T2.runKernel(o.t2,e)}const u=(0,i.op)({cos_:a})}}]);
//# sourceMappingURL=chunk-vendors-62753351.ef0f1ecf.js.map