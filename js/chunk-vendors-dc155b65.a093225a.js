"use strict";(self["webpackChunkstudent1"]=self["webpackChunkstudent1"]||[]).push([[254],{22780:function(e,t,n){n.d(t,{$p:function(){return ka}});var a=n(64243);
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
const r={},s={alpha:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1,depth:!1,stencil:!1,failIfMajorPerformanceCaveat:!0};function o(e,t){r[e]=t}function i(e,t){if(!(e in r)||null!=t){const n=l(e,t);if(null===n)return console.log("Could not get context for WebGL version",e),null;r[e]=n}const n=r[e];return null==n||n.isContextLost()?(delete r[e],i(e)):(n.disable(n.DEPTH_TEST),n.disable(n.STENCIL_TEST),n.disable(n.BLEND),n.disable(n.DITHER),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SAMPLE_COVERAGE),n.enable(n.SCISSOR_TEST),n.enable(n.CULL_FACE),n.cullFace(n.BACK),r[e])}function u(e){if("undefined"!==typeof OffscreenCanvas&&2===e)return new OffscreenCanvas(300,150);if("undefined"!==typeof document)return document.createElement("canvas");throw new Error("Cannot create a canvas in this context")}function l(e,t){if(1!==e&&2!==e)throw new Error("Cannot get WebGL rendering context, WebGL is disabled.");const n=null==t?u(e):t;return n.addEventListener("webglcontextlost",(t=>{t.preventDefault(),delete r[e]}),!1),1===e?n.getContext("webgl",s)||n.getContext("experimental-webgl",s):n.getContext("webgl2",s)}
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
var c,p,d;function h(e,t){return[t,e]}function m(e,t){return e*t}function f(e){const t=a.util.sizeFromShape(e),n=Math.ceil(t/4);return a.util.sizeToSquarishShape(n)}function x(e,t){return[Math.max(1,Math.ceil(t/2)),Math.max(1,Math.ceil(e/2))]}function g(e,t){const[n,a]=x(e,t);return n*a*4}function y(e,t){const n=e;let r,s,o,i,u,l,c,p,d,h;return 2===(0,a.env)().getNumber("WEBGL_VERSION")?(r=n.R32F,s=n.R16F,o=n.RGBA16F,i=n.RGBA32F,u=n.RED,c=4,p=1,d=n.HALF_FLOAT,h=n.FLOAT,l=n.RGBA8):(r=e.RGBA,s=e.RGBA,o=e.RGBA,i=n.RGBA,u=e.RGBA,c=4,p=4,d=null!=t?t.HALF_FLOAT_OES:null,h=e.FLOAT,l=e.RGBA),{internalFormatFloat:r,internalFormatHalfFloat:s,internalFormatPackedHalfFloat:o,internalFormatPackedFloat:i,textureFormatFloat:u,downloadTextureFormat:l,downloadUnpackNumChannels:c,defaultNumChannels:p,textureTypeHalfFloat:d,textureTypeFloat:h}}
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
function b(e,t){const n=t();return(0,a.env)().getBool("DEBUG")&&v(e),n}function v(e){const t=e.getError();if(t!==e.NO_ERROR)throw new Error("WebGL Error: "+$(e,t))}(function(e){e[e["DENSE"]=0]="DENSE",e[e["SHARED_BATCH"]=1]="SHARED_BATCH"})(c||(c={})),function(e){e[e["RENDER"]=0]="RENDER",e[e["UPLOAD"]=1]="UPLOAD",e[e["PIXELS"]=2]="PIXELS",e[e["DOWNLOAD"]=3]="DOWNLOAD"}(p||(p={})),function(e){e[e["UNPACKED_FLOAT16"]=0]="UNPACKED_FLOAT16",e[e["UNPACKED_FLOAT32"]=1]="UNPACKED_FLOAT32",e[e["PACKED_4X1_UNSIGNED_BYTE"]=2]="PACKED_4X1_UNSIGNED_BYTE",e[e["PACKED_2X2_FLOAT32"]=3]="PACKED_2X2_FLOAT32",e[e["PACKED_2X2_FLOAT16"]=4]="PACKED_2X2_FLOAT16"}(d||(d={}));const C=5.96e-8,N=65504;function T(e){return!!((0,a.env)().getBool("WEBGL_RENDER_FLOAT32_ENABLED")||0===e||C<Math.abs(e)&&Math.abs(e)<N)}function $(e,t){switch(t){case e.NO_ERROR:return"NO_ERROR";case e.INVALID_ENUM:return"INVALID_ENUM";case e.INVALID_VALUE:return"INVALID_VALUE";case e.INVALID_OPERATION:return"INVALID_OPERATION";case e.INVALID_FRAMEBUFFER_OPERATION:return"INVALID_FRAMEBUFFER_OPERATION";case e.OUT_OF_MEMORY:return"OUT_OF_MEMORY";case e.CONTEXT_LOST_WEBGL:return"CONTEXT_LOST_WEBGL";default:return`Unknown error code ${t}`}}function S(e,t){return j(e,(()=>e.getExtension(t)),'Extension "'+t+'" not supported on this browser.')}function I(e,t){const n=j(e,(()=>e.createShader(e.VERTEX_SHADER)),"Unable to create vertex WebGLShader.");if(b(e,(()=>e.shaderSource(n,t))),b(e,(()=>e.compileShader(n))),!1===e.getShaderParameter(n,e.COMPILE_STATUS))throw console.log(e.getShaderInfoLog(n)),new Error("Failed to compile vertex shader.");return n}function k(e,t){const n=j(e,(()=>e.createShader(e.FRAGMENT_SHADER)),"Unable to create fragment WebGLShader.");if(b(e,(()=>e.shaderSource(n,t))),b(e,(()=>e.compileShader(n))),(0,a.env)().get("ENGINE_COMPILE_ONLY"))return n;if(!1===e.getShaderParameter(n,e.COMPILE_STATUS))throw R(t,e.getShaderInfoLog(n)),new Error("Failed to compile fragment shader.");return n}const w=/ERROR: [0-9]+:([0-9]+):/g;function R(e,t){const n=w.exec(t);if(null==n)return console.log(`Couldn't parse line number in error: ${t}`),void console.log(e);const r=+n[1],s=e.split("\n"),o=s.length.toString().length+2,i=s.map(((e,t)=>a.util.rightPad((t+1).toString(),o)+e));let u=0;for(let a=0;a<i.length;a++)u=Math.max(i[a].length,u);const l=i.slice(0,r-1),c=i.slice(r-1,r),p=i.slice(r);console.log(l.join("\n")),console.log(t.split("\n")[0]),console.log(`%c ${a.util.rightPad(c[0],u)}`,"border:1px solid red; background-color:#e3d2d2; color:#a61717"),console.log(p.join("\n"))}function E(e){return j(e,(()=>e.createProgram()),"Unable to create WebGLProgram.")}function _(e,t){if(b(e,(()=>e.linkProgram(t))),!(0,a.env)().get("ENGINE_COMPILE_ONLY")&&!1===e.getProgramParameter(t,e.LINK_STATUS))throw console.log(e.getProgramInfoLog(t)),new Error("Failed to link vertex and fragment shaders.")}function O(e,t){if(b(e,(()=>e.validateProgram(t))),!1===e.getProgramParameter(t,e.VALIDATE_STATUS))throw console.log(e.getProgramInfoLog(t)),new Error("Shader program validation failed.")}function A(e,t){const n=j(e,(()=>e.createBuffer()),"Unable to create WebGLBuffer");return b(e,(()=>e.bindBuffer(e.ARRAY_BUFFER,n))),b(e,(()=>e.bufferData(e.ARRAY_BUFFER,t,e.STATIC_DRAW))),n}function F(e,t){const n=j(e,(()=>e.createBuffer()),"Unable to create WebGLBuffer");return b(e,(()=>e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n))),b(e,(()=>e.bufferData(e.ELEMENT_ARRAY_BUFFER,t,e.STATIC_DRAW))),n}function D(e){return j(e,(()=>e.createTexture()),"Unable to create WebGLTexture.")}function L(e,t){const n=(0,a.env)().getNumber("WEBGL_MAX_TEXTURE_SIZE");if(e<=0||t<=0){const n=`[${e}x${t}]`;throw new Error("Requested texture size "+n+" is invalid.")}if(e>n||t>n){const a=`[${e}x${t}]`,r=`[${n}x${n}]`;throw new Error("Requested texture size "+a+" greater than WebGL maximum on this browser / GPU "+r+".")}}function P(e){return j(e,(()=>e.createFramebuffer()),"Unable to create WebGLFramebuffer.")}function V(e,t,n,a,r,s,o){const i=e.getAttribLocation(t,n);return-1!==i&&(b(e,(()=>e.bindBuffer(e.ARRAY_BUFFER,a))),b(e,(()=>e.vertexAttribPointer(i,r,e.FLOAT,!1,s,o))),b(e,(()=>e.enableVertexAttribArray(i))),!0)}function M(e,t,n){q(e,n),b(e,(()=>e.activeTexture(e.TEXTURE0+n))),b(e,(()=>e.bindTexture(e.TEXTURE_2D,t)))}function B(e,t,n){return j(e,(()=>e.getUniformLocation(t,n)),'uniform "'+n+'" not present in program.')}function U(e,t,n){return e.getUniformLocation(t,n)}function W(e,t,n,a){b(e,(()=>M(e,t,a))),b(e,(()=>e.uniform1i(n,a)))}function z(e,t,n){b(e,(()=>e.bindFramebuffer(e.FRAMEBUFFER,n))),b(e,(()=>e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)))}function G(e,t){b(e,(()=>e.bindFramebuffer(e.FRAMEBUFFER,t))),b(e,(()=>e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,null,0)))}function H(e){const t=e.checkFramebufferStatus(e.FRAMEBUFFER);if(t!==e.FRAMEBUFFER_COMPLETE)throw new Error("Error binding framebuffer: "+X(e,t))}function X(e,t){switch(t){case e.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_ATTACHMENT";case e.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT";case e.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:return"FRAMEBUFFER_INCOMPLETE_DIMENSIONS";case e.FRAMEBUFFER_UNSUPPORTED:return"FRAMEBUFFER_UNSUPPORTED";default:return`unknown error ${t}`}}function j(e,t,n){const a=b(e,(()=>t()));if(null==a)throw new Error(n);return a}function q(e,t){const n=e.MAX_COMBINED_TEXTURE_IMAGE_UNITS-1,a=t+e.TEXTURE0;if(a<e.TEXTURE0||a>n){const e=`[gl.TEXTURE0, gl.TEXTURE${n}]`;throw new Error(`textureUnit must be in ${e}.`)}}function K(e,t=2){return a.util.sizeFromShape(e.slice(0,e.length-t))}function Y(e){if(0===e.length)throw Error("Cannot get rows and columns of an empty shape array.");return[e.length>1?e[e.length-2]:1,e[e.length-1]]}function Q(e){let t=[1,1,1];const n=0===e.length||1===e.length&&1===e[0];return n||(t=[K(e),...Y(e)]),t}function Z(e,t=!1){let n=(0,a.env)().getNumber("WEBGL_MAX_TEXTURE_SIZE");if(t&&(n*=2,e=e.map(((t,n)=>n>=e.length-2?a.util.nearestLargerEven(e[n]):e[n])),1===e.length&&(e=[2,e[0]])),2!==e.length){const t=a.util.squeezeShape(e);e=t.newShape}let r=a.util.sizeFromShape(e);if(e.length<=1&&r<=n)return[1,r];if(2===e.length&&e[0]<=n&&e[1]<=n)return e;if(3===e.length&&e[0]*e[1]<=n&&e[2]<=n)return[e[0]*e[1],e[2]];if(3===e.length&&e[0]<=n&&e[1]*e[2]<=n)return[e[0],e[1]*e[2]];if(4===e.length&&e[0]*e[1]*e[2]<=n&&e[3]<=n)return[e[0]*e[1]*e[2],e[3]];if(4===e.length&&e[0]<=n&&e[1]*e[2]*e[3]<=n)return[e[0],e[1]*e[2]*e[3]];if(t){const t=K(e);let n=2,s=2;return e.length&&([n,s]=Y(e)),r=t*(n/2)*(s/2),a.util.sizeToSquarishShape(r).map((e=>2*e))}return a.util.sizeToSquarishShape(r)}function J(e){return e%2===0}function ee(e,t){if(e=e.slice(-2),t=t.slice(-2),a.util.arraysEqual(e,t))return!0;if(!e.length||!t.length)return!0;if(0===e[0]||0===e[1]||0===t[0]||0===t[1])return!0;if(e.length!==t.length){const n=e.slice(-1)[0],a=t.slice(-1)[0];if(n===a)return!0;if(J(n)&&J(a)&&(1===e[0]||1===t[0]))return!0}return e[1]===t[1]&&J(e[0])&&J(t[0])}let te,ne;function ae(e){if(null==te){const t=i(e);te=t.getParameter(t.MAX_TEXTURE_SIZE)}return te}function re(e){if(null==ne){const t=i(e);ne=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS)}return Math.min(16,ne)}function se(e){if(0===e)return 0;let t;const n=i(e);return t=oe(n,"EXT_disjoint_timer_query_webgl2")&&2===e?2:oe(n,"EXT_disjoint_timer_query")?1:0,t}function oe(e,t){const n=e.getExtension(t);return null!=n}function ie(e){try{const t=i(e);if(null!=t)return!0}catch(t){return console.log("Error when getting WebGL context: ",t),!1}return!1}function ue(e){if(0===e)return!1;const t=i(e);if(1===e){if(!oe(t,"OES_texture_float"))return!1}else if(!oe(t,"EXT_color_buffer_float"))return!1;const n=ce(t);return n}function le(e){if(0===e)return!1;const t=i(e);if(1!==e){if(oe(t,"EXT_color_buffer_float"))return ce(t);const e="EXT_color_buffer_half_float";if(oe(t,e)){const n=t.getExtension(e);return pe(t,n)}return!1}if(!oe(t,"OES_texture_float"))return!1;if(!oe(t,"WEBGL_color_buffer_float"))return!1;const n=ce(t);return n}function ce(e){const t=y(e),n=e.createTexture();e.bindTexture(e.TEXTURE_2D,n);const a=1,r=1;e.texImage2D(e.TEXTURE_2D,0,t.internalFormatFloat,a,r,0,t.textureFormatFloat,t.textureTypeFloat,null);const s=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,s),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,n,0);const o=e.checkFramebufferStatus(e.FRAMEBUFFER)===e.FRAMEBUFFER_COMPLETE;return e.bindTexture(e.TEXTURE_2D,null),e.bindFramebuffer(e.FRAMEBUFFER,null),e.deleteTexture(n),e.deleteFramebuffer(s),o}function pe(e,t){const n=y(e,t),a=e.createTexture();e.bindTexture(e.TEXTURE_2D,a);const r=1,s=1;e.texImage2D(e.TEXTURE_2D,0,n.internalFormatHalfFloat,r,s,0,n.textureFormatFloat,n.textureTypeHalfFloat,null);const o=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,o),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,a,0);const i=e.checkFramebufferStatus(e.FRAMEBUFFER)===e.FRAMEBUFFER_COMPLETE;return e.bindTexture(e.TEXTURE_2D,null),e.bindFramebuffer(e.FRAMEBUFFER,null),e.deleteTexture(a),e.deleteFramebuffer(o),i}function de(e){if(2!==e)return!1;const t=i(e),n=null!=t.fenceSync;return n}function he(e,t){Array.isArray(e)||(e=[e]),e.forEach((e=>{null!=e&&a.util.assert("complex64"!==e.dtype,(()=>`${t} does not support complex64 tensors in the WebGL backend.`))}))}
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
const me=(0,a.env)();
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
function fe(){let e,t,n,r,s,o,i,u,l,c;return 2===(0,a.env)().getNumber("WEBGL_VERSION")?(e="#version 300 es",t="in",n="out",r="in",s="texture",o="outputColor",i="out vec4 outputColor;",u="\n      bool isnan_custom(float val) {\n        uint floatToUint = floatBitsToUint(val);\n        return (floatToUint & 0x7fffffffu) > 0x7f800000u;\n      }\n\n      bvec4 isnan_custom(vec4 val) {\n        return bvec4(isnan_custom(val.x),\n          isnan_custom(val.y), isnan_custom(val.z), isnan_custom(val.w));\n      }\n\n      #define isnan(value) isnan_custom(value)\n    ",l="",c="\n      #define round(value) newRound(value)\n      int newRound(float value) {\n        return int(floor(value + 0.5));\n      }\n\n      ivec4 newRound(vec4 value) {\n        return ivec4(floor(value + vec4(0.5)));\n      }\n    "):(e="",t="attribute",n="varying",r="varying",s="texture2D",o="gl_FragColor",i="",u="\n      #define isnan(value) isnan_custom(value)\n      bool isnan_custom(float val) {\n        return (val > 0. || val < 1. || val == 0.) ? false : true;\n      }\n      bvec4 isnan_custom(vec4 val) {\n        return bvec4(isnan(val.x), isnan(val.y), isnan(val.z), isnan(val.w));\n      }\n    ",l="\n      uniform float INFINITY;\n\n      bool isinf(float val) {\n        return abs(val) == INFINITY;\n      }\n      bvec4 isinf(vec4 val) {\n        return equal(abs(val), vec4(INFINITY));\n      }\n    ",c="\n      int round(float value) {\n        return int(floor(value + 0.5));\n      }\n\n      ivec4 round(vec4 value) {\n        return ivec4(floor(value + vec4(0.5)));\n      }\n    "),{version:e,attribute:t,varyingVs:n,varyingFs:r,texture2D:s,output:o,defineOutput:i,defineSpecialNaN:u,defineSpecialInf:l,defineRound:c}}
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
function xe(e,t,n="index"){const r=a.util.computeStrides(t);return r.map(((t,a)=>{const s=`int ${e[a]} = ${n} / ${t}`,o=a===r.length-1?`int ${e[a+1]} = ${n} - ${e[a]} * ${t}`:`index -= ${e[a]} * ${t}`;return`${s}; ${o};`})).join("")}function ge(e,t,n="index"){const r=a.util.computeStrides(t);return r.map(((t,a)=>{const s=`int ${e[a]} = ${n} / outShapeStrides[${a}]`,o=a===r.length-1?`int ${e[a+1]} = ${n} - ${e[a]} * outShapeStrides[${a}]`:`index -= ${e[a]} * outShapeStrides[${a}]`;return`${s}; ${o};`})).join("")}function ye(e,t){const n=e.length,a=e.map((e=>`${t}[${e}]`)),r=new Array(n-1);r[n-2]=a[n-1];for(let s=n-3;s>=0;--s)r[s]=`(${r[s+1]} * ${a[s+1]})`;return r}function be(e,t,n="index"){const a=e.map(((e,t)=>t)),r=ye(a,t);return r.map(((t,a)=>{const s=`int ${e[a]} = ${n} / ${r[a]}`,o=a===r.length-1?`int ${e[a+1]} = ${n} - ${e[a]} * ${r[a]}`:`index -= ${e[a]} * ${r[a]}`;return`${s}; ${o};`})).join("")}function ve(e){const t=a.util.computeStrides(e).map((e=>e.toString()));return`\n  int getFlatIndex(ivec3 coords) {\n    return coords.x * ${t[0]} + coords.y * ${t[1]} + coords.z;\n  }\n`}function Ce(){return"\n  int getFlatIndex(ivec3 coords) {\n    return coords.x * outShapeStrides[0] + coords.y * outShapeStrides[1] + coords.z;\n  }\n"}me.registerFlag("HAS_WEBGL",(()=>me.getNumber("WEBGL_VERSION")>0)),me.registerFlag("WEBGL_VERSION",(()=>ie(2)?2:ie(1)?1:0)),me.registerFlag("WEBGL_CHECK_NUMERICAL_PROBLEMS",(()=>!1)),me.registerFlag("WEBGL_BUFFER_SUPPORTED",(()=>2===me.get("WEBGL_VERSION"))),me.registerFlag("WEBGL_CPU_FORWARD",(()=>!0)),me.registerFlag("WEBGL_FORCE_F16_TEXTURES",(()=>!1)),me.registerFlag("WEBGL_PACK",(()=>me.getBool("HAS_WEBGL"))),me.registerFlag("WEBGL_PACK_NORMALIZATION",(()=>me.getBool("WEBGL_PACK"))),me.registerFlag("WEBGL_PACK_CLIP",(()=>me.getBool("WEBGL_PACK"))),me.registerFlag("WEBGL_PACK_DEPTHWISECONV",(()=>me.getBool("WEBGL_PACK"))),me.registerFlag("WEBGL_PACK_BINARY_OPERATIONS",(()=>me.getBool("WEBGL_PACK"))),me.registerFlag("WEBGL_PACK_UNARY_OPERATIONS",(()=>me.getBool("WEBGL_PACK"))),me.registerFlag("WEBGL_PACK_ARRAY_OPERATIONS",(()=>me.getBool("WEBGL_PACK"))),me.registerFlag("WEBGL_PACK_IMAGE_OPERATIONS",(()=>me.getBool("WEBGL_PACK"))),me.registerFlag("WEBGL_PACK_REDUCE",(()=>me.getBool("WEBGL_PACK"))),me.registerFlag("WEBGL_LAZILY_UNPACK",(()=>me.getBool("WEBGL_PACK"))),me.registerFlag("WEBGL_CONV_IM2COL",(()=>me.getBool("WEBGL_PACK"))),me.registerFlag("WEBGL_MAX_TEXTURE_SIZE",(()=>ae(me.getNumber("WEBGL_VERSION")))),me.registerFlag("WEBGL_MAX_TEXTURES_IN_SHADER",(()=>re(me.getNumber("WEBGL_VERSION")))),me.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION",(()=>{const e=me.getNumber("WEBGL_VERSION");return 0===e?0:se(e)})),me.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE",(()=>me.getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0&&!a.device_util.isMobile())),me.registerFlag("WEBGL_RENDER_FLOAT32_CAPABLE",(()=>ue(me.getNumber("WEBGL_VERSION")))),me.registerFlag("WEBGL_RENDER_FLOAT32_ENABLED",(()=>!me.getBool("WEBGL_FORCE_F16_TEXTURES")&&me.getBool("WEBGL_RENDER_FLOAT32_CAPABLE"))),me.registerFlag("WEBGL_DOWNLOAD_FLOAT_ENABLED",(()=>le(me.getNumber("WEBGL_VERSION")))),me.registerFlag("WEBGL_FENCE_API_ENABLED",(()=>de(me.getNumber("WEBGL_VERSION")))),me.registerFlag("WEBGL_SIZE_UPLOAD_UNIFORM",(()=>{const e=me.getBool("WEBGL_RENDER_FLOAT32_ENABLED");return e?4:0})),me.registerFlag("WEBGL_DELETE_TEXTURE_THRESHOLD",(()=>-1),(e=>{if(e<0&&-1!==e)throw new Error(`WEBGL_DELETE_TEXTURE_THRESHOLD must be -1 (indicating never delete) or at least 0, but got ${e}.`)})),me.registerFlag("WEBGL_FLUSH_THRESHOLD",(()=>a.device_util.isMobile()?1:-1),(e=>{if(e<0&&-1!==e)throw new Error(`WEBGL_FLUSH_THRESHOLD must be -1 (indicating never manual flush) or at least 0, but got ${e}.`)})),me.registerFlag("CPU_HANDOFF_SIZE_THRESHOLD",(()=>128)),me.registerFlag("WEBGL_USE_SHAPES_UNIFORMS",(()=>!1)),me.registerFlag("TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD",(()=>1e5)),me.registerFlag("TOPK_K_CPU_HANDOFF_THRESHOLD",(()=>128));const Ne="\n  const float FLOAT_MAX = 1.70141184e38;\n  const float FLOAT_MIN = 1.17549435e-38;\n\n  lowp vec4 encode_float(highp float v) {\n    if (isnan(v)) {\n      return vec4(255, 255, 255, 255);\n    }\n\n    highp float av = abs(v);\n\n    if(av < FLOAT_MIN) {\n      return vec4(0.0, 0.0, 0.0, 0.0);\n    } else if(v > FLOAT_MAX) {\n      return vec4(0.0, 0.0, 128.0, 127.0) / 255.0;\n    } else if(v < -FLOAT_MAX) {\n      return vec4(0.0, 0.0,  128.0, 255.0) / 255.0;\n    }\n\n    highp vec4 c = vec4(0,0,0,0);\n\n    highp float e = floor(log2(av));\n    highp float m = exp2(fract(log2(av))) - 1.0;\n\n    c[2] = floor(128.0 * m);\n    m -= c[2] / 128.0;\n    c[1] = floor(32768.0 * m);\n    m -= c[1] / 32768.0;\n    c[0] = floor(8388608.0 * m);\n\n    highp float ebias = e + 127.0;\n    c[3] = floor(ebias / 2.0);\n    ebias -= c[3] * 2.0;\n    c[2] += floor(ebias) * 128.0;\n\n    c[3] += 128.0 * step(0.0, -v);\n\n    return c / 255.0;\n  }\n",{getBroadcastDims:Te}=a.backend_util;function $e(e,t,n){const r=[];if(e.forEach((e=>{const t=a.util.sizeFromShape(e.shapeInfo.logicalShape);if(e.shapeInfo.isUniform?r.push(`uniform float ${e.name}${t>1?`[${t}]`:""};`):(r.push(`uniform sampler2D ${e.name};`),r.push(`uniform int offset${e.name};`)),n.enableShapeUniforms){const{uniformShape:t}=dt(n.packedInputs,e.shapeInfo.logicalShape,e.shapeInfo.texShape);switch(t.length){case 1:r.push(`uniform int ${e.name}Shape;`);break;case 2:r.push(`uniform ivec2 ${e.name}Shape;`);break;case 3:r.push(`uniform ivec3 ${e.name}Shape;`);break;case 4:r.push(`uniform ivec4 ${e.name}Shape;`);break;default:break}r.push(`uniform ivec2 ${e.name}TexShape;`)}})),n.enableShapeUniforms){switch(t.logicalShape.length){case 1:r.push("uniform int outShape;");break;case 2:r.push("uniform ivec2 outShape;"),r.push("uniform int outShapeStrides;");break;case 3:r.push("uniform ivec3 outShape;"),r.push("uniform ivec2 outShapeStrides;");break;case 4:r.push("uniform ivec4 outShape;"),r.push("uniform ivec3 outShapeStrides;");break;default:break}r.push("uniform ivec2 outTexShape;")}n.customUniforms&&n.customUniforms.forEach((e=>{r.push(`uniform ${e.type} ${e.name}${e.arrayIndex?`[${e.arrayIndex}]`:""};`)}));const s=r.join("\n"),o=e.map((e=>ke(e,t,n.packedInputs,n.enableShapeUniforms))).join("\n"),i=t.texShape,u=fe(),l=Ee(u);let c,p,d=Ae(u);t.isPacked?(c=we(t.logicalShape,i,n.enableShapeUniforms),p=Oe(u)):(c=Re(t.logicalShape,i,n.enableShapeUniforms),p=_e(u)),n.packedInputs&&(d+=Pe);const h=[d,l,p,s,c,o,n.userCode].join("\n");return h}function Se(e,t=!1){const n=e.shapeInfo.logicalShape;switch(n.length){case 0:return Qe(e,t);case 1:return Je(e,t);case 2:return tt(e,t);case 3:return at(e,t);case 4:return st(e,t);case 5:return ot(e);case 6:return it(e);default:throw new Error(`${n.length}-D input sampling is not yet supported`)}}function Ie(e,t){const n=e.shapeInfo.logicalShape;switch(n.length){case 0:return Ye(e);case 1:return Ze(e,t);case 2:return et(e,t);case 3:return nt(e,t);default:return rt(e,t)}}function ke(e,t,n=!1,a){let r="";r+=n?Ie(e,a):Se(e,a);const s=e.shapeInfo.logicalShape,o=t.logicalShape;return s.length<=o.length&&(r+=n?lt(e,t):ct(e,t)),r}function we(e,t,n){switch(e.length){case 0:return Ve();case 1:return Me(e,t,n);case 2:return je(e,t,n);case 3:return Ue(e,t,n);default:return ze(e,t,n)}}function Re(e,t,n){switch(e.length){case 0:return Ve();case 1:return Be(e,t,n);case 2:return qe(e,t,n);case 3:return We(e,t,n);case 4:return Ge(e,t,n);case 5:return He(e,t);case 6:return Xe(e,t);default:throw new Error(`${e.length}-D output sampling is not yet supported`)}}function Ee(e){return`\n    float sampleTexture(sampler2D textureSampler, vec2 uv) {\n      return ${e.texture2D}(textureSampler, uv).r;\n    }\n  `}function _e(e){return`\n    void setOutput(float val) {\n      ${e.output} = vec4(val, 0, 0, 0);\n    }\n  `}function Oe(e){return`\n    void setOutput(vec4 val) {\n      ${e.output} = val;\n    }\n  `}function Ae(e){const t=`${e.version}\n    precision highp float;\n    precision highp int;\n    precision highp sampler2D;\n    ${e.varyingFs} vec2 resultUV;\n    ${e.defineOutput}\n    const vec2 halfCR = vec2(0.5, 0.5);\n\n    struct ivec5\n    {\n      int x;\n      int y;\n      int z;\n      int w;\n      int u;\n    };\n\n    struct ivec6\n    {\n      int x;\n      int y;\n      int z;\n      int w;\n      int u;\n      int v;\n    };\n\n    uniform float NAN;\n    ${e.defineSpecialNaN}\n    ${e.defineSpecialInf}\n    ${e.defineRound}\n\n    int imod(int x, int y) {\n      return x - y * (x / y);\n    }\n\n    int idiv(int a, int b, float sign) {\n      int res = a / b;\n      int mod = imod(a, b);\n      if (sign < 0. && mod != 0) {\n        res -= 1;\n      }\n      return res;\n    }\n\n    //Based on the work of Dave Hoskins\n    //https://www.shadertoy.com/view/4djSRW\n    #define HASHSCALE1 443.8975\n    float random(float seed){\n      vec2 p = resultUV * seed;\n      vec3 p3  = fract(vec3(p.xyx) * HASHSCALE1);\n      p3 += dot(p3, p3.yzx + 19.19);\n      return fract((p3.x + p3.y) * p3.z);\n    }\n\n    ${Fe}\n    ${De}\n    ${Le}\n  `;return t}const Fe="\nvec2 uvFromFlat(int texNumR, int texNumC, int index) {\n  int texR = index / texNumC;\n  int texC = index - texR * texNumC;\n  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);\n}\nvec2 packedUVfrom1D(int texNumR, int texNumC, int index) {\n  int texelIndex = index / 2;\n  int texR = texelIndex / texNumC;\n  int texC = texelIndex - texR * texNumC;\n  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);\n}\n",De="\nvec2 packedUVfrom2D(int texelsInLogicalRow, int texNumR,\n  int texNumC, int row, int col) {\n  int texelIndex = (row / 2) * texelsInLogicalRow + (col / 2);\n  int texR = texelIndex / texNumC;\n  int texC = texelIndex - texR * texNumC;\n  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);\n}\n",Le="\nvec2 packedUVfrom3D(int texNumR, int texNumC,\n    int texelsInBatch, int texelsInLogicalRow, int b,\n    int row, int col) {\n  int index = b * texelsInBatch + (row / 2) * texelsInLogicalRow + (col / 2);\n  int texR = index / texNumC;\n  int texC = index - texR * texNumC;\n  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);\n}\n",Pe="\n  float getChannel(vec4 frag, vec2 innerDims) {\n    vec2 modCoord = mod(innerDims, 2.);\n    return modCoord.x == 0. ?\n      (modCoord.y == 0. ? frag.r : frag.g) :\n      (modCoord.y == 0. ? frag.b : frag.a);\n  }\n  float getChannel(vec4 frag, int dim) {\n    float modCoord = mod(float(dim), 2.);\n    return modCoord == 0. ? frag.r : frag.g;\n  }\n";function Ve(){return"\n    int getOutputCoords() {\n      return 0;\n    }\n  "}function Me(e,t,n){const a=[Math.ceil(t[0]/2),Math.ceil(t[1]/2)];return 1===a[0]?n?"\n      int getOutputCoords() {\n        return 2 * int(resultUV.x * ceil(float(outTexShape[1]) / 2.0));\n      }\n    ":`\n      int getOutputCoords() {\n        return 2 * int(resultUV.x * ${a[1]}.0);\n      }\n    `:1===a[1]?n?"\n      int getOutputCoords() {\n        return 2 * int(resultUV.y * ceil(float(outTexShape[0]) / 2.0));\n      }\n    ":`\n      int getOutputCoords() {\n        return 2 * int(resultUV.y * ${a[0]}.0);\n      }\n    `:n?"\n    int getOutputCoords() {\n      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(packedTexShape[0], packedTexShape[1]));\n      return 2 * (resTexRC.x * packedTexShape[1] + resTexRC.y);\n    }\n  ":`\n    int getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(${a[0]}, ${a[1]}));\n      return 2 * (resTexRC.x * ${a[1]} + resTexRC.y);\n    }\n  `}function Be(e,t,n){return 1===t[0]?n?"\n      int getOutputCoords() {\n        return int(resultUV.x * float(outTexShape[1]));\n      }\n    ":`\n      int getOutputCoords() {\n        return int(resultUV.x * ${t[1]}.0);\n      }\n    `:1===t[1]?n?"\n      int getOutputCoords() {\n        return int(resultUV.y * float(outTexShape[0]));\n      }\n    ":`\n      int getOutputCoords() {\n        return int(resultUV.y * ${t[0]}.0);\n      }\n    `:n?"\n    int getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(outTexShape[0], outTexShape[1]));\n      return resTexRC.x * outTexShape[1] + resTexRC.y;\n    }\n  ":`\n    int getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(${t[0]}, ${t[1]}));\n      return resTexRC.x * ${t[1]} + resTexRC.y;\n    }\n  `}function Ue(e,t,n){if(n)return"\n    ivec3 getOutputCoords() {\n      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));\n      int texelsInLogicalRow = int(ceil(float(outShape[2]) / 2.0));\n      int texelsInBatch = texelsInLogicalRow * int(ceil(float(outShape[1]) / 2.0));\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(packedTexShape[0], packedTexShape[1]));\n      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;\n\n      int b = index / texelsInBatch;\n      index -= b * texelsInBatch;\n\n      int r = 2 * (index / texelsInLogicalRow);\n      int c = imod(index, texelsInLogicalRow) * 2;\n\n      return ivec3(b, r, c);\n    }\n  ";const a=[Math.ceil(t[0]/2),Math.ceil(t[1]/2)],r=Math.ceil(e[2]/2),s=r*Math.ceil(e[1]/2);return`\n    ivec3 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(${a[0]}, ${a[1]}));\n      int index = resTexRC.x * ${a[1]} + resTexRC.y;\n\n      int b = index / ${s};\n      index -= b * ${s};\n\n      int r = 2 * (index / ${r});\n      int c = imod(index, ${r}) * 2;\n\n      return ivec3(b, r, c);\n    }\n  `}function We(e,t,n){if(n){const t=ge(["r","c","d"],e);return`\n  ivec3 getOutputCoords() {\n    ivec2 resTexRC = ivec2(resultUV.yx *\n                           vec2(outTexShape[0], outTexShape[1]));\n    int index = resTexRC.x * outTexShape[1] + resTexRC.y;\n    ${t}\n    return ivec3(r, c, d);\n  }\n`}const a=xe(["r","c","d"],e);return`\n    ivec3 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(${t[0]}, ${t[1]}));\n      int index = resTexRC.x * ${t[1]} + resTexRC.y;\n      ${a}\n      return ivec3(r, c, d);\n    }\n  `}function ze(e,t,n){if(n)return"\n    ivec4 getOutputCoords() {\n      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(packedTexShape[0], packedTexShape[1]));\n      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;\n\n      int texelsInLogicalRow = int(ceil(float(outShape[3]) / 2.0));\n      int texelsInBatch = texelsInLogicalRow * int(ceil(float(outShape[2]) / 2.0));\n      int texelsInBatchN = texelsInBatch * outShape[1];\n\n      int b2 = index / texelsInBatchN;\n      index -= b2 * texelsInBatchN;\n\n      int b = index / texelsInBatch;\n      index -= b * texelsInBatch;\n\n      int r = 2 * (index / texelsInLogicalRow);\n      int c = imod(index, texelsInLogicalRow) * 2;\n\n      return ivec4(b2, b, r, c);\n    }\n  ";const a=[Math.ceil(t[0]/2),Math.ceil(t[1]/2)],r=Math.ceil(e[e.length-1]/2),s=r*Math.ceil(e[e.length-2]/2);let o=s,i="",u="b, r, c";for(let l=2;l<e.length-1;l++)o*=e[e.length-l-1],i=`\n      int b${l} = index / ${o};\n      index -= b${l} * ${o};\n    `+i,u=`b${l}, `+u;return`\n    ivec${e.length} getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(${a[0]}, ${a[1]}));\n      int index = resTexRC.x * ${a[1]} + resTexRC.y;\n\n      ${i}\n\n      int b = index / ${s};\n      index -= b * ${s};\n\n      int r = 2 * (index / ${r});\n      int c = imod(index, ${r}) * 2;\n\n      return ivec${e.length}(${u});\n    }\n  `}function Ge(e,t,n){if(n){const t=ge(["r","c","d","d2"],e);return`\n    ivec4 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n        vec2(outTexShape[0], outTexShape[1]));\n      int index = resTexRC.x * outTexShape[1] + resTexRC.y;\n      ${t}\n      return ivec4(r, c, d, d2);\n    }\n  `}const a=xe(["r","c","d","d2"],e);return`\n    ivec4 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n        vec2(${t[0]}, ${t[1]}));\n      int index = resTexRC.x * ${t[1]} + resTexRC.y;\n      ${a}\n      return ivec4(r, c, d, d2);\n    }\n  `}function He(e,t){const n=xe(["r","c","d","d2","d3"],e);return`\n    ivec5 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx * vec2(${t[0]},\n                             ${t[1]}));\n\n      int index = resTexRC.x * ${t[1]} + resTexRC.y;\n\n      ${n}\n\n      ivec5 outShape = ivec5(r, c, d, d2, d3);\n      return outShape;\n    }\n  `}function Xe(e,t){const n=xe(["r","c","d","d2","d3","d4"],e);return`\n    ivec6 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n        vec2(${t[0]}, ${t[1]}));\n      int index = resTexRC.x * ${t[1]} + resTexRC.y;\n\n      ${n}\n\n      ivec6 result = ivec6(r, c, d, d2, d3, d4);\n      return result;\n    }\n  `}function je(e,t,n){const r=[Math.ceil(t[0]/2),Math.ceil(t[1]/2)];if(a.util.arraysEqual(e,t))return n?"\n      ivec2 getOutputCoords() {\n        ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));\n        return 2 * ivec2(resultUV.yx * vec2(packedTexShape[0], packedTexShape[1]));\n      }\n    ":`\n      ivec2 getOutputCoords() {\n        return 2 * ivec2(resultUV.yx * vec2(${r[0]}, ${r[1]}));\n      }\n    `;const s=Math.ceil(e[1]/2);return n?"\n    ivec2 getOutputCoords() {\n      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));\n      int texelsInLogicalRow = int(ceil(float(outShape[1]) / 2.0));\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(packedTexShape[0], packedTexShape[1]));\n\n      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;\n      int r = 2 * (index / texelsInLogicalRow);\n      int c = imod(index, texelsInLogicalRow) * 2;\n\n      return ivec2(r, c);\n    }\n  ":`\n    ivec2 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(${r[0]}, ${r[1]}));\n\n      int index = resTexRC.x * ${r[1]} + resTexRC.y;\n      int r = 2 * (index / ${s});\n      int c = imod(index, ${s}) * 2;\n\n      return ivec2(r, c);\n    }\n  `}function qe(e,t,n){return a.util.arraysEqual(e,t)?n?"\n      ivec2 getOutputCoords() {\n        return ivec2(resultUV.yx * vec2(outTexShape[0], outTexShape[1]));\n      }\n    ":`\n      ivec2 getOutputCoords() {\n        return ivec2(resultUV.yx * vec2(${t[0]}, ${t[1]}));\n      }\n    `:1===e[1]?n?"\n      ivec2 getOutputCoords() {\n        ivec2 resTexRC = ivec2(resultUV.yx *\n                               vec2(outTexShape[0], outTexShape[1]));\n        int index = resTexRC.x * outTexShape[1] + resTexRC.y;\n        return ivec2(index, 0);\n      }\n    ":`\n      ivec2 getOutputCoords() {\n        ivec2 resTexRC = ivec2(resultUV.yx *\n                               vec2(${t[0]}, ${t[1]}));\n        int index = resTexRC.x * ${t[1]} + resTexRC.y;\n        return ivec2(index, 0);\n      }\n    `:1===e[0]?n?"\n      ivec2 getOutputCoords() {\n        ivec2 resTexRC = ivec2(resultUV.yx *\n                               vec2(outTexShape[0], outTexShape[1]));\n        int index = resTexRC.x * outTexShape[1] + resTexRC.y;\n        return ivec2(0, index);\n      }\n    ":`\n      ivec2 getOutputCoords() {\n        ivec2 resTexRC = ivec2(resultUV.yx *\n                               vec2(${t[0]}, ${t[1]}));\n        int index = resTexRC.x * ${t[1]} + resTexRC.y;\n        return ivec2(0, index);\n      }\n    `:n?"\n    ivec2 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(outTexShape[0], outTexShape[1]));\n      int index = resTexRC.x * outTexShape[1] + resTexRC.y;\n      int r = index / outShape[1];\n      int c = index - r * outShape[1];\n      return ivec2(r, c);\n    }\n  ":`\n    ivec2 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(${t[0]}, ${t[1]}));\n      int index = resTexRC.x * ${t[1]} + resTexRC.y;\n      int r = index / ${e[1]};\n      int c = index - r * ${e[1]};\n      return ivec2(r, c);\n    }\n  `}function Ke(e){return`offset${e}`}function Ye(e){const t=e.name,n="get"+t.charAt(0).toUpperCase()+t.slice(1),a=fe();return`\n    vec4 ${n}() {\n      return ${a.texture2D}(${t}, halfCR);\n    }\n  `}function Qe(e,t){const n=e.name,a="get"+n.charAt(0).toUpperCase()+n.slice(1);if(e.shapeInfo.isUniform)return`float ${a}() {return ${n};}`;const[r,s]=e.shapeInfo.texShape;if(1===r&&1===s)return`\n      float ${a}() {\n        return sampleTexture(${n}, halfCR);\n      }\n    `;const o=Ke(n);if(t)return`\n    float ${a}() {\n      vec2 uv = uvFromFlat(${n}TexShape[0], ${n}TexShape[1], ${o});\n      return sampleTexture(${n}, uv);\n    }\n  `;const[i,u]=e.shapeInfo.texShape;return`\n    float ${a}() {\n      vec2 uv = uvFromFlat(${i}, ${u}, ${o});\n      return sampleTexture(${n}, uv);\n    }\n  `}function Ze(e,t){const n=e.name,a="get"+n.charAt(0).toUpperCase()+n.slice(1),r=e.shapeInfo.texShape,s=fe();if(t)return`\n    vec4 ${a}(int index) {\n      ivec2 packedTexShape = ivec2(ceil(float(${n}TexShape[0]) / 2.0), ceil(float(${n}TexShape[1]) / 2.0));\n      vec2 uv = packedUVfrom1D(\n        packedTexShape[0], packedTexShape[1], index);\n      return ${s.texture2D}(${n}, uv);\n    }\n  `;const o=[Math.ceil(r[0]/2),Math.ceil(r[1]/2)];return`\n    vec4 ${a}(int index) {\n      vec2 uv = packedUVfrom1D(\n        ${o[0]}, ${o[1]}, index);\n      return ${s.texture2D}(${n}, uv);\n    }\n  `}function Je(e,t){const n=e.name,a="get"+n.charAt(0).toUpperCase()+n.slice(1);if(e.shapeInfo.isUniform)return`\n      float ${a}(int index) {\n        ${ut(e)}\n      }\n    `;const r=e.shapeInfo.texShape,s=r[0],o=r[1];if(1===o&&1===s)return`\n      float ${a}(int index) {\n        return sampleTexture(${n}, halfCR);\n      }\n    `;const i=Ke(n);return 1===o?t?`\n      float ${a}(int index) {\n        vec2 uv = vec2(0.5, (float(index + ${i}) + 0.5) / float(${n}TexShape[0]));\n        return sampleTexture(${n}, uv);\n      }\n    `:`\n      float ${a}(int index) {\n        vec2 uv = vec2(0.5, (float(index + ${i}) + 0.5) / ${s}.0);\n        return sampleTexture(${n}, uv);\n      }\n    `:1===s?t?`\n      float ${a}(int index) {\n        vec2 uv = vec2((float(index + ${i}) + 0.5) / float(${n}TexShape[1]), 0.5);\n        return sampleTexture(${n}, uv);\n      }\n    `:`\n      float ${a}(int index) {\n        vec2 uv = vec2((float(index + ${i}) + 0.5) / ${o}.0, 0.5);\n        return sampleTexture(${n}, uv);\n      }\n    `:t?`\n    float ${a}(int index) {\n      vec2 uv = uvFromFlat(${n}TexShape[0], ${n}TexShape[1], index + ${i});\n      return sampleTexture(${n}, uv);\n    }\n  `:`\n    float ${a}(int index) {\n      vec2 uv = uvFromFlat(${s}, ${o}, index + ${i});\n      return sampleTexture(${n}, uv);\n    }\n  `}function et(e,t){const n=e.shapeInfo.logicalShape,r=e.name,s="get"+r.charAt(0).toUpperCase()+r.slice(1),o=e.shapeInfo.texShape,i=o[0],u=o[1],l=fe();if(null!=o&&a.util.arraysEqual(n,o))return t?`\n      vec4 ${s}(int row, int col) {\n        vec2 uv = (vec2(col, row) + halfCR) / vec2(${r}TexShape[1], ${r}TexShape[0]);\n\n        return ${l.texture2D}(${r}, uv);\n      }\n    `:`\n      vec4 ${s}(int row, int col) {\n        vec2 uv = (vec2(col, row) + halfCR) / vec2(${u}.0, ${i}.0);\n\n        return ${l.texture2D}(${r}, uv);\n      }\n    `;if(t)return`\n    vec4 ${s}(int row, int col) {\n      ivec2 packedTexShape = ivec2(ceil(float(${r}TexShape[0]) / 2.0), ceil(float(${r}TexShape[1]) / 2.0));\n      int valuesPerRow = int(ceil(float(${r}Shape[1]) / 2.0));\n      vec2 uv = packedUVfrom2D(valuesPerRow, packedTexShape[0], packedTexShape[1], row, col);\n      return ${l.texture2D}(${r}, uv);\n    }\n  `;const c=[Math.ceil(o[0]/2),Math.ceil(o[1]/2)],p=Math.ceil(n[1]/2);return`\n    vec4 ${s}(int row, int col) {\n      vec2 uv = packedUVfrom2D(${p}, ${c[0]}, ${c[1]}, row, col);\n      return ${l.texture2D}(${r}, uv);\n    }\n  `}function tt(e,t){const n=e.shapeInfo.logicalShape,r=e.name,s="get"+r.charAt(0).toUpperCase()+r.slice(1),o=e.shapeInfo.texShape;if(null!=o&&a.util.arraysEqual(n,o)){if(t)return`\n      float ${s}(int row, int col) {\n        vec2 uv = (vec2(col, row) + halfCR) / vec2(${r}TexShape[1], ${r}TexShape[0]);\n        return sampleTexture(${r}, uv);\n      }\n    `;const e=o[0],n=o[1];return`\n    float ${s}(int row, int col) {\n      vec2 uv = (vec2(col, row) + halfCR) / vec2(${n}.0, ${e}.0);\n      return sampleTexture(${r}, uv);\n    }\n  `}const{newShape:i,keptDims:u}=a.util.squeezeShape(n),l=i;if(l.length<n.length){const n=ht(e,l),a=["row","col"];return`\n      ${Se(n,t)}\n      float ${s}(int row, int col) {\n        return ${s}(${mt(a,u)});\n      }\n    `}if(e.shapeInfo.isUniform)return`\n      float ${s}(int row, int col) {\n        int index = round(dot(vec2(row, col), vec2(${n[1]}, 1)));\n        ${ut(e)}\n      }\n    `;const c=o[0],p=o[1],d=Ke(r);return 1===p?t?`\n      float ${s}(int row, int col) {\n        float index = dot(vec3(row, col, ${d}), vec3(${r}Shape[1], 1, 1));\n        vec2 uv = vec2(0.5, (index + 0.5) / float(${r}TexShape[0]));\n        return sampleTexture(${r}, uv);\n      }\n    `:`\n    float ${s}(int row, int col) {\n      float index = dot(vec3(row, col, ${d}), vec3(${n[1]}, 1, 1));\n      vec2 uv = vec2(0.5, (index + 0.5) / ${c}.0);\n      return sampleTexture(${r}, uv);\n    }\n  `:1===c?t?`\n      float ${s}(int row, int col) {\n        float index = dot(vec3(row, col, ${d}), vec3(${r}Shape[1], 1, 1));\n        vec2 uv = vec2((index + 0.5) / float(${r}TexShape[1]), 0.5);\n        return sampleTexture(${r}, uv);\n      }\n    `:`\n    float ${s}(int row, int col) {\n      float index = dot(vec3(row, col, ${d}), vec3(${n[1]}, 1, 1));\n      vec2 uv = vec2((index + 0.5) / ${p}.0, 0.5);\n      return sampleTexture(${r}, uv);\n    }\n  `:t?`\n      float ${s}(int row, int col) {\n        // Explicitly use integer operations as dot() only works on floats.\n        int index = row * ${r}Shape[1] + col + ${d};\n        vec2 uv = uvFromFlat(${r}TexShape[0], ${r}TexShape[1], index);\n        return sampleTexture(${r}, uv);\n      }\n    `:`\n  float ${s}(int row, int col) {\n    // Explicitly use integer operations as dot() only works on floats.\n    int index = row * ${n[1]} + col + ${d};\n    vec2 uv = uvFromFlat(${c}, ${p}, index);\n    return sampleTexture(${r}, uv);\n  }\n`}function nt(e,t){const n=e.shapeInfo.logicalShape,a=e.name,r="get"+a.charAt(0).toUpperCase()+a.slice(1),s=e.shapeInfo.texShape,o=[Math.ceil(s[0]/2),Math.ceil(s[1]/2)];if(1===n[0]){const a=n.slice(1),s=[1,2],o=ht(e,a),i=["b","row","col"];return`\n        ${Ie(o,t)}\n        vec4 ${r}(int b, int row, int col) {\n          return ${r}(${mt(i,s)});\n        }\n      `}const i=fe();if(t)return`\n    vec4 ${r}(int b, int row, int col) {\n      ivec2 packedTexShape = ivec2(ceil(float(${a}TexShape[0]) / 2.0), ceil(float(${a}TexShape[1]) / 2.0));\n      int valuesPerRow = int(ceil(float(${a}Shape[2]) / 2.0));\n      int texelsInBatch = valuesPerRow * int(ceil(float(${a}Shape[1]) / 2.0));\n      vec2 uv = packedUVfrom3D(\n        packedTexShape[0], packedTexShape[1], texelsInBatch, valuesPerRow, b, row, col);\n      return ${i.texture2D}(${a}, uv);\n    }\n  `;const u=o[0],l=o[1],c=Math.ceil(n[2]/2),p=c*Math.ceil(n[1]/2);return`\n    vec4 ${r}(int b, int row, int col) {\n      vec2 uv = packedUVfrom3D(\n        ${u}, ${l}, ${p}, ${c}, b, row, col);\n      return ${i.texture2D}(${a}, uv);\n    }\n  `}function at(e,t){const n=e.shapeInfo.logicalShape,r=e.name,s="get"+r.charAt(0).toUpperCase()+r.slice(1),o=n[1]*n[2],i=n[2],{newShape:u,keptDims:l}=a.util.squeezeShape(n),c=u;if(c.length<n.length){const n=ht(e,c),a=["row","col","depth"];return`\n        ${Se(n,t)}\n        float ${s}(int row, int col, int depth) {\n          return ${s}(${mt(a,l)});\n        }\n      `}if(e.shapeInfo.isUniform)return`\n      float ${s}(int row, int col, int depth) {\n        int index = round(dot(vec3(row, col, depth),\n                          vec3(${o}, ${i}, 1)));\n        ${ut(e)}\n      }\n    `;const p=e.shapeInfo.texShape,d=p[0],h=p[1],m=e.shapeInfo.flatOffset;if(h===o&&null==m)return t?`\n      float ${s}(int row, int col, int depth) {\n        int stride1 = ${r}Shape[2];\n        float texR = float(row);\n        float texC = dot(vec2(col, depth), vec2(stride1, 1));\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                   vec2(${r}TexShape[1], ${r}TexShape[0]);\n        return sampleTexture(${r}, uv);\n      }\n    `:`\n        float ${s}(int row, int col, int depth) {\n          float texR = float(row);\n          float texC = dot(vec2(col, depth), vec2(${i}, 1));\n          vec2 uv = (vec2(texC, texR) + halfCR) /\n                     vec2(${h}.0, ${d}.0);\n          return sampleTexture(${r}, uv);\n        }\n      `;if(h===i&&null==m)return t?`\n      float ${s}(int row, int col, int depth) {\n        float texR = dot(vec2(row, col), vec2(${r}Shape[1], 1));\n        float texC = float(depth);\n        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${r}TexShape[1], ${r}TexShape[0]);\n        return sampleTexture(${r}, uv);\n      }\n    `:`\n    float ${s}(int row, int col, int depth) {\n      float texR = dot(vec2(row, col), vec2(${n[1]}, 1));\n      float texC = float(depth);\n      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${h}.0, ${d}.0);\n      return sampleTexture(${r}, uv);\n    }\n  `;const f=Ke(r);return t?`\n    float ${s}(int row, int col, int depth) {\n      // Explicitly use integer operations as dot() only works on floats.\n      int stride0 = ${r}Shape[1] * ${r}Shape[2];\n      int stride1 = ${r}Shape[2];\n      int index = row * ${o} + col * ${i} + depth + ${f};\n      vec2 uv = uvFromFlat(${r}TexShape[0], ${r}TexShape[1], index);\n      return sampleTexture(${r}, uv);\n    }\n    `:`\n      float ${s}(int row, int col, int depth) {\n        // Explicitly use integer operations as dot() only works on floats.\n        int index = row * ${o} + col * ${i} + depth + ${f};\n        vec2 uv = uvFromFlat(${d}, ${h}, index);\n        return sampleTexture(${r}, uv);\n      }\n  `}function rt(e,t){const n=e.name,a="get"+n.charAt(0).toUpperCase()+n.slice(1),r=fe();if(t)return`\n    vec4 ${a}(int b2, int b, int row, int col) {\n      int valuesPerRow = int(ceil(float(${n}Shape[3]) / 2.0));\n      int texelsInBatch = valuesPerRow * int(ceil(float(${n}Shape[2]) / 2.0));\n      int index = b * texelsInBatch + (row / 2) * valuesPerRow + (col / 2);\n      texelsInBatch *= ${n}Shape[1];\n      index = b2 * texelsInBatch + index;\n      ivec2 packedTexShape = ivec2(ceil(float(${n}TexShape[0]) / 2.0), ceil(float(${n}TexShape[1]) / 2.0));\n      int texR = index / packedTexShape[1];\n      int texC = index - texR * packedTexShape[1];\n      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(packedTexShape[1], packedTexShape[0]); return ${r.texture2D}(${n}, uv);\n    }\n  `;const s=e.shapeInfo.logicalShape,o=s.length,i=e.shapeInfo.texShape,u=[Math.ceil(i[0]/2),Math.ceil(i[1]/2)],l=u[0],c=u[1],p=Math.ceil(s[o-1]/2);let d=p*Math.ceil(s[o-2]/2),h="int b, int row, int col",m=`b * ${d} + (row / 2) * ${p} + (col / 2)`;for(let f=2;f<o-1;f++)h=`int b${f}, `+h,d*=s[o-f-1],m=`b${f} * ${d} + `+m;return`\n    vec4 ${a}(${h}) {\n      int index = ${m};\n      int texR = index / ${c};\n      int texC = index - texR * ${c};\n      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${c}, ${l});\n      return ${r.texture2D}(${n}, uv);\n    }\n  `}function st(e,t){const n=e.shapeInfo.logicalShape,r=e.name,s="get"+r.charAt(0).toUpperCase()+r.slice(1),o=n[3],i=n[2]*o,u=n[1]*i,{newShape:l,keptDims:c}=a.util.squeezeShape(n);if(l.length<n.length){const n=ht(e,l),a=["row","col","depth","depth2"];return`\n      ${Se(n,t)}\n      float ${s}(int row, int col, int depth, int depth2) {\n        return ${s}(${mt(a,c)});\n      }\n    `}if(e.shapeInfo.isUniform)return`\n      float ${s}(int row, int col, int depth, int depth2) {\n        int index = round(dot(vec4(row, col, depth, depth2),\n                          vec4(${u}, ${i}, ${o}, 1)));\n        ${ut(e)}\n      }\n    `;const p=e.shapeInfo.flatOffset,d=e.shapeInfo.texShape,h=d[0],m=d[1],f=`int stride2 = ${r}Shape[3];`,x=`int stride1 = ${r}Shape[2] * stride2;`,g=`int stride0 = ${r}Shape[1] * stride1;`;if(m===u&&null==p)return t?`\n      float ${s}(int row, int col, int depth, int depth2) {\n        ${f}\n        ${x}\n        float texR = float(row);\n        float texC =\n            dot(vec3(col, depth, depth2),\n                vec3(stride1, stride2, 1));\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                   vec2(${r}TexShape[1], ${r}TexShape[0]);\n        return sampleTexture(${r}, uv);\n      }\n    `:`\n      float ${s}(int row, int col, int depth, int depth2) {\n        float texR = float(row);\n        float texC =\n            dot(vec3(col, depth, depth2),\n                vec3(${i}, ${o}, 1));\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                   vec2(${m}.0, ${h}.0);\n        return sampleTexture(${r}, uv);\n      }\n    `;if(m===o&&null==p)return t?`\n      float ${s}(int row, int col, int depth, int depth2) {\n        float texR = dot(vec3(row, col, depth),\n                         vec3(${r}Shape[1] * ${r}Shape[2], ${r}Shape[2], 1));\n        float texC = float(depth2);\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                  vec2(${r}TexShape[1], ${r}TexShape[0]);\n        return sampleTexture(${r}, uv);\n      }\n    `:`\n      float ${s}(int row, int col, int depth, int depth2) {\n        float texR = dot(vec3(row, col, depth),\n                         vec3(${n[1]*n[2]}, ${n[2]}, 1));\n        float texC = float(depth2);\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                  vec2(${m}.0, ${h}.0);\n        return sampleTexture(${r}, uv);\n      }\n    `;const y=Ke(r);return t?`\n    float ${s}(int row, int col, int depth, int depth2) {\n      // Explicitly use integer operations as dot() only works on floats.\n      ${f}\n      ${x}\n      ${g}\n      int index = row * stride0 + col * stride1 +\n          depth * stride2 + depth2;\n      vec2 uv = uvFromFlat(${r}TexShape[0], ${r}TexShape[1], index + ${y});\n      return sampleTexture(${r}, uv);\n    }\n  `:`\n    float ${s}(int row, int col, int depth, int depth2) {\n      // Explicitly use integer operations as dot() only works on floats.\n      int index = row * ${u} + col * ${i} +\n          depth * ${o} + depth2;\n      vec2 uv = uvFromFlat(${h}, ${m}, index + ${y});\n      return sampleTexture(${r}, uv);\n    }\n  `}function ot(e){const t=e.shapeInfo.logicalShape,n=e.name,r="get"+n.charAt(0).toUpperCase()+n.slice(1),s=t[4],o=t[3]*s,i=t[2]*o,u=t[1]*i,{newShape:l,keptDims:c}=a.util.squeezeShape(t);if(l.length<t.length){const t=ht(e,l),n=["row","col","depth","depth2","depth3"];return`\n      ${Se(t)}\n      float ${r}(int row, int col, int depth, int depth2, int depth3) {\n        return ${r}(${mt(n,c)});\n      }\n    `}if(e.shapeInfo.isUniform)return`\n      float ${r}(int row, int col, int depth, int depth2, int depth3) {\n        float index = dot(\n          vec4(row, col, depth, depth2),\n          vec4(${u}, ${i}, ${o}, ${s})) +\n          depth3;\n        ${ut(e)}\n      }\n    `;const p=e.shapeInfo.flatOffset,d=e.shapeInfo.texShape,h=d[0],m=d[1];if(m===u&&null==p)return`\n      float ${r}(int row, int col, int depth, int depth2, int depth3) {\n        int texR = row;\n        float texC = dot(vec4(col, depth, depth2, depth3),\n                         vec4(${i}, ${o}, ${s}, 1));\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                   vec2(${m}.0, ${h}.0);\n        return sampleTexture(${n}, uv);\n      }\n    `;if(m===s&&null==p)return`\n      float ${r}(int row, int col, int depth, int depth2, int depth3) {\n        float texR = dot(\n          vec4(row, col, depth, depth2),\n          vec4(${t[1]*t[2]*t[3]},\n               ${t[2]*t[3]}, ${t[3]}, 1));\n        int texC = depth3;\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                  vec2(${m}.0, ${h}.0);\n        return sampleTexture(${n}, uv);\n      }\n    `;const f=Ke(n);return`\n    float ${r}(int row, int col, int depth, int depth2, int depth3) {\n      // Explicitly use integer operations as dot() only works on floats.\n      int index = row * ${u} + col * ${i} + depth * ${o} +\n          depth2 * ${s} + depth3 + ${f};\n      vec2 uv = uvFromFlat(${h}, ${m}, index);\n      return sampleTexture(${n}, uv);\n    }\n  `}function it(e){const t=e.shapeInfo.logicalShape,n=e.name,r="get"+n.charAt(0).toUpperCase()+n.slice(1),{newShape:s,keptDims:o}=a.util.squeezeShape(t);if(s.length<t.length){const t=ht(e,s),n=["row","col","depth","depth2","depth3","depth4"];return`\n      ${Se(t)}\n      float ${r}(int row, int col, int depth,\n                    int depth2, int depth3, int depth4) {\n        return ${r}(${mt(n,o)});\n      }\n    `}const i=t[5],u=t[4]*i,l=t[3]*u,c=t[2]*l,p=t[1]*c;if(e.shapeInfo.isUniform)return`\n      float ${r}(int row, int col, int depth,\n                  int depth2, int depth3, int depth4) {\n        int index = round(dot(\n          vec4(row, col, depth, depth2),\n          vec4(${p}, ${c}, ${l}, ${u})) +\n          dot(\n            vec2(depth3, depth4),\n            vec2(${i}, 1)));\n        ${ut(e)}\n      }\n    `;const d=e.shapeInfo.flatOffset,h=e.shapeInfo.texShape,m=h[0],f=h[1];if(f===p&&null==d)return`\n      float ${r}(int row, int col, int depth,\n                    int depth2, int depth3, int depth4) {\n        int texR = row;\n        float texC = dot(vec4(col, depth, depth2, depth3),\n          vec4(${c}, ${l}, ${u}, ${i})) +\n               float(depth4);\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                   vec2(${f}.0, ${m}.0);\n        return sampleTexture(${n}, uv);\n      }\n    `;if(f===i&&null==d)return`\n      float ${r}(int row, int col, int depth,\n                    int depth2, int depth3, int depth4) {\n        float texR = dot(vec4(row, col, depth, depth2),\n          vec4(${t[1]*t[2]*t[3]*t[4]},\n               ${t[2]*t[3]*t[4]},\n               ${t[3]*t[4]},\n               ${t[4]})) + float(depth3);\n        int texC = depth4;\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                  vec2(${f}.0, ${m}.0);\n        return sampleTexture(${n}, uv);\n      }\n    `;const x=Ke(n);return`\n    float ${r}(int row, int col, int depth,\n                  int depth2, int depth3, int depth4) {\n      // Explicitly use integer operations as dot() only works on floats.\n      int index = row * ${p} + col * ${c} + depth * ${l} +\n          depth2 * ${u} + depth3 * ${i} + depth4 + ${x};\n      vec2 uv = uvFromFlat(${m}, ${f}, index);\n      return sampleTexture(${n}, uv);\n    }\n  `}function ut(e){const t=e.name,n=a.util.sizeFromShape(e.shapeInfo.logicalShape);return n<2?`return ${t};`:`\n    for (int i = 0; i < ${n}; i++) {\n      if (i == index) {\n        return ${t}[i];\n      }\n    }\n  `}function lt(e,t){const n=e.name,r=n.charAt(0).toUpperCase()+n.slice(1),s="get"+r+"AtOutCoords",o=e.shapeInfo.logicalShape.length,i=t.logicalShape.length,u=Te(e.shapeInfo.logicalShape,t.logicalShape),l=pt(i),c=i-o;let p;const d=["x","y","z","w","u","v"];p=0===o?"":i<2&&u.length>=1?"coords = 0;":u.map((e=>`coords.${d[e+c]} = 0;`)).join("\n");let h="";h=i<2&&o>0?"coords":e.shapeInfo.logicalShape.map(((e,t)=>`coords.${d[t+c]}`)).join(", ");let m="return outputValue;";const f=a.util.sizeFromShape(e.shapeInfo.logicalShape),x=1===f,g=a.util.sizeFromShape(t.logicalShape),y=1===g;if(1!==o||x||y){if(x&&!y)m=1===i?"\n        return vec4(outputValue.x, outputValue.x, 0., 0.);\n      ":"\n        return vec4(outputValue.x);\n      ";else if(u.length){const e=o-2,t=o-1;u.indexOf(e)>-1&&u.indexOf(t)>-1?m="return vec4(outputValue.x);":u.indexOf(e)>-1?m="return vec4(outputValue.x, outputValue.y, outputValue.x, outputValue.y);":u.indexOf(t)>-1&&(m="return vec4(outputValue.xx, outputValue.zz);")}}else m="\n      return vec4(outputValue.xy, outputValue.xy);\n    ";return`\n    vec4 ${s}() {\n      ${l} coords = getOutputCoords();\n      ${p}\n      vec4 outputValue = get${r}(${h});\n      ${m}\n    }\n  `}function ct(e,t){const n=e.name,r=n.charAt(0).toUpperCase()+n.slice(1),s="get"+r+"AtOutCoords",o=t.texShape,i=e.shapeInfo.texShape,u=e.shapeInfo.logicalShape.length,l=t.logicalShape.length;if(!e.shapeInfo.isUniform&&u===l&&null==e.shapeInfo.flatOffset&&a.util.arraysEqual(i,o))return`\n      float ${s}() {\n        return sampleTexture(${n}, resultUV);\n      }\n    `;const c=pt(l),p=Te(e.shapeInfo.logicalShape,t.logicalShape),d=l-u;let h;const m=["x","y","z","w","u","v"];h=0===u?"":l<2&&p.length>=1?"coords = 0;":p.map((e=>`coords.${m[e+d]} = 0;`)).join("\n");let f="";return f=l<2&&u>0?"coords":e.shapeInfo.logicalShape.map(((e,t)=>`coords.${m[t+d]}`)).join(", "),`\n    float ${s}() {\n      ${c} coords = getOutputCoords();\n      ${h}\n      return get${r}(${f});\n    }\n  `}function pt(e){if(e<=1)return"int";if(2===e)return"ivec2";if(3===e)return"ivec3";if(4===e)return"ivec4";if(5===e)return"ivec5";if(6===e)return"ivec6";throw Error(`GPU for rank ${e} is not yet supported`)}function dt(e,t,n){const{newShape:r,keptDims:s}=a.util.squeezeShape(t),o=t.length,i=e&&3===o&&1===t[0],u=i?t.slice(1):r,l=!e&&o>1&&!a.util.arraysEqual(t,n)&&r.length<o||i,c=l?u:t;return{useSqueezeShape:l,uniformShape:c,keptDims:s}}function ht(e,t){const n=JSON.parse(JSON.stringify(e));return n.shapeInfo.logicalShape=t,n}function mt(e,t){return t.map((t=>e[t])).join(", ")}
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
function ft(e,t,n,r){const s=n.map(((e,n)=>{const a={logicalShape:e.shape,texShape:e.isUniform?null:e.texData.texShape,isUniform:e.isUniform,isPacked:!e.isUniform&&e.texData.isPacked,flatOffset:null};return null!=e.texData&&null!=e.texData.slice&&e.texData.slice.flatOffset>0&&(a.flatOffset=e.texData.slice.flatOffset),{name:t.variableNames[n],shapeInfo:a}})),o=s.map((e=>e.shapeInfo)),i={logicalShape:r.shape,texShape:r.texData.texShape,isUniform:!1,isPacked:r.texData.isPacked,flatOffset:null},u=$e(s,i,t),l=k(e.gl,u),c=e.createProgram(l);return(0,a.env)().get("ENGINE_COMPILE_ONLY")?{program:t,fragmentShader:l,source:u,webGLProgram:c,inShapeInfos:o,outShapeInfo:i,uniformLocations:null,customUniformLocations:null,infLoc:null,nanLoc:null,inShapesLocations:null,inTexShapesLocations:null,outShapeLocation:null,outShapeStridesLocation:null,outTexShapeLocation:null}:Object.assign({program:t,fragmentShader:l,source:u,webGLProgram:c,inShapeInfos:o,outShapeInfo:i},xt(e,t,c))}function xt(e,t,n){const r={},s={},o={},i=[];let u,l,c,p=null,d=null;d=e.getUniformLocation(n,"NAN",!1),1===(0,a.env)().getNumber("WEBGL_VERSION")&&(p=e.getUniformLocation(n,"INFINITY",!1));const h=!1;for(let a=0;a<t.variableNames.length;a++){const i=t.variableNames[a];r[i]=e.getUniformLocation(n,i,h),r[`offset${i}`]=e.getUniformLocation(n,`offset${i}`,h),t.enableShapeUniforms&&(s[`${i}Shape`]=e.getUniformLocation(n,`${i}Shape`,h),o[`${i}TexShape`]=e.getUniformLocation(n,`${i}TexShape`,h))}return t.enableShapeUniforms&&(u=e.getUniformLocation(n,"outShape",h),c=e.getUniformLocation(n,"outShapeStrides",h),l=e.getUniformLocation(n,"outTexShape",h)),t.customUniforms&&t.customUniforms.forEach(((t,a)=>{i[a]=e.getUniformLocation(n,t.name,h)})),{uniformLocations:r,customUniformLocations:i,infLoc:p,nanLoc:d,inShapesLocations:s,inTexShapesLocations:o,outShapeLocation:u,outShapeStridesLocation:c,outTexShapeLocation:l}}function gt(e,t){if(e.length!==t.length)throw Error(`Binary was compiled with ${e.length} inputs, but was executed with ${t.length} inputs`);e.forEach(((e,n)=>{const r=e.logicalShape,s=t[n],o=s.shape;if(!a.util.arraysEqual(r,o))throw Error(`Binary was compiled with different shapes than the current args. Shapes ${r} and ${o} must match`);if(e.isUniform&&s.isUniform)return;const i=e.texShape,u=s.isUniform?null:s.texData.texShape;if(!a.util.arraysEqual(i,u))throw Error(`Binary was compiled with different texture shapes than the current args. Shape ${i} and ${u} must match`)}))}function yt(e,t,n,r,s){t.program.enableShapeUniforms||(gt(t.inShapeInfos,n),gt([t.outShapeInfo],[r]));const o=r.texData.texture,i=r.texData.texShape;r.texData.isPacked?e.setOutputPackedMatrixTexture(o.texture,i[0],i[1]):e.setOutputMatrixTexture(o.texture,i[0],i[1]),e.setProgram(t.webGLProgram),1===(0,a.env)().getNumber("WEBGL_VERSION")&&null!==t.infLoc&&e.gl.uniform1f(t.infLoc,1/0),null!==t.nanLoc&&e.gl.uniform1f(t.nanLoc,NaN),n.forEach(((n,r)=>{const s=t.program.variableNames[r],o=t.uniformLocations[s],i=t.uniformLocations[`offset${s}`],u=t.inShapesLocations[`${s}Shape`],l=t.inTexShapesLocations[`${s}TexShape`];if(u){const{uniformShape:a}=dt(t.program.packedInputs,n.shape,n.texData.texShape);switch(a.length){case 1:e.gl.uniform1iv(u,new Int32Array(a));break;case 2:e.gl.uniform2iv(u,new Int32Array(a));break;case 3:e.gl.uniform3iv(u,new Int32Array(a));break;case 4:e.gl.uniform4iv(u,new Int32Array(a));break;default:break}}if(l&&e.gl.uniform2i(l,n.texData.texShape[0],n.texData.texShape[1]),null!=o)if(n.isUniform)if(a.util.sizeFromShape(n.shape)<2)e.gl.uniform1f(o,n.uniformValues[0]);else{let t=n.uniformValues;t instanceof Float32Array||(t=new Float32Array(t)),e.gl.uniform1fv(o,t)}else null!=n.texData.slice&&null!=i&&e.gl.uniform1i(i,n.texData.slice.flatOffset),e.setInputMatrixTexture(n.texData.texture.texture,o,r)}));const u=t.outShapeLocation;if(u)switch(r.shape.length){case 1:e.gl.uniform1iv(u,new Int32Array(r.shape));break;case 2:e.gl.uniform2iv(u,new Int32Array(r.shape));break;case 3:e.gl.uniform3iv(u,new Int32Array(r.shape));break;case 4:e.gl.uniform4iv(u,new Int32Array(r.shape));break;default:break}if(t.outShapeStridesLocation){const n=a.util.computeStrides(r.shape);switch(r.shape.length){case 2:e.gl.uniform1iv(t.outShapeStridesLocation,new Int32Array(n));break;case 3:e.gl.uniform2iv(t.outShapeStridesLocation,new Int32Array(n));break;case 4:e.gl.uniform3iv(t.outShapeStridesLocation,new Int32Array(n));break;default:break}}t.outTexShapeLocation&&e.gl.uniform2i(t.outTexShapeLocation,r.texData.texShape[0],r.texData.texShape[1]),t.program.customUniforms&&s&&t.program.customUniforms.forEach(((n,a)=>{const r=t.customUniformLocations[a],o=s[a];if("float"===n.type)e.gl.uniform1fv(r,o);else if("vec2"===n.type)e.gl.uniform2fv(r,o);else if("vec3"===n.type)e.gl.uniform3fv(r,o);else if("vec4"===n.type)e.gl.uniform4fv(r,o);else if("int"===n.type)e.gl.uniform1iv(r,o);else if("ivec2"===n.type)e.gl.uniform2iv(r,o);else if("ivec3"===n.type)e.gl.uniform3iv(r,o);else{if("ivec4"!==n.type)throw Error(`uniform type ${n.type} is not supported yet.`);e.gl.uniform4iv(r,o)}})),e.executeProgram()}function bt(e,t,n){let r="";t.concat(n).forEach((t=>{const s=null!=t.texData&&null!=t.texData.slice&&t.texData.slice.flatOffset>0;if(e.enableShapeUniforms&&!t.isUniform){const o=t.texData.texShape,{useSqueezeShape:i,uniformShape:u,keptDims:l}=dt(e.packedInputs,t.shape,o);let c="",p="",d="";if(1===u.length&&e.packedInputs){const e=[Math.ceil(o[0]/2),Math.ceil(o[1]/2)];c=`${e[0]>1}_${e[1]>1}`}else if(2!==u.length||e.packedInputs){if(u.length>2&&!e.packedInputs){const e=a.util.computeStrides(u);d=`${e[0]===o[1]}_${e[e.length-1]===o[1]}`}}else p=`${u[0]>1}_${u[1]>1}`;const h=t.shape.length,m=2===u.length&&a.util.arraysEqual(t.shape,o),f=1===a.util.sizeFromShape(t.shape),x=a.backend_util.getBroadcastDims(t.shape,n.shape),g=!e.packedInputs&&h===n.shape.length&&a.util.arraysEqual(o,n.texData.texShape),y=e.packedInputs||u.length>2?"":`${o[0]>1}_${o[1]>1}`;r+=`${h}_${g}_${i?l:""}_${u.length}_${f}_${x}_${m}_${c}_${p}_${d}_${y}_${s}`}else{const e=t.isUniform?"uniform":t.texData.texShape;r+=`${t.shape}_${e}_${s}`}}));const s=e.userCode;let o=e.constructor.name;return o+="_"+r+"_"+s+`${(0,a.env)().getNumber("WEBGL_VERSION")}`,o}function vt(e){return(0,a.env)().getBool("WEBGL_USE_SHAPES_UNIFORMS")&&e<=4}
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
class Ct{constructor(e){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outPackingScheme=c.DENSE,this.customUniforms=[{name:"texShape",type:"ivec2"}];const t=fe();this.outputShape=e,this.enableShapeUniforms=vt(this.outputShape.length),this.userCode=`\n      ivec3 outCoordsFromFlatIndex(int index) {\n        ${this.enableShapeUniforms?ge(["r","c","d"],e):xe(["r","c","d"],e)}\n        return ivec3(r, c, d);\n      }\n\n      void main() {\n        ivec2 resTexRC = ivec2(resultUV.yx * vec2(texShape[0], texShape[1]));\n        int index = 4 * (resTexRC.x * texShape[1] + resTexRC.y);\n\n        vec4 result = vec4(0.);\n\n        for (int i=0; i<4; i++) {\n          int flatIndex = index + i;\n          ivec3 rc = outCoordsFromFlatIndex(flatIndex);\n          result[i] = getA(rc.x, rc.y, rc.z);\n        }\n\n        ${t.output} = result;\n      }\n    `}}
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
class Nt{constructor(e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outPackingScheme=c.DENSE,this.customUniforms=[{name:"texShape",type:"ivec2"}];const t=fe();this.outputShape=e,this.enableShapeUniforms=vt(this.outputShape.length),this.userCode=`\n      ivec3 outCoordsFromFlatIndex(int index) {\n        ${this.enableShapeUniforms?ge(["r","c","d"],e):xe(["r","c","d"],e)}\n        return ivec3(r, c, d);\n      }\n\n      void main() {\n        ivec2 resTexRC = ivec2(resultUV.yx * vec2(texShape[0], texShape[1]));\n        int index = 4 * (resTexRC.x * texShape[1] + resTexRC.y);\n\n        vec4 result = vec4(0.);\n\n        for (int i=0; i<4; i++) {\n          int flatIndex = index + i;\n          ivec3 rc = outCoordsFromFlatIndex(flatIndex);\n          result[i] = getChannel(getA(rc.x, rc.y, rc.z), vec2(rc.y, rc.z));\n        }\n\n        ${t.output} = result;\n      }\n    `}}
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
class Tt{constructor(e){this.variableNames=["A"],this.outTexUsage=p.DOWNLOAD;const t=fe();this.outputShape=e,this.userCode=`\n      ${Ne}\n\n      void main() {\n        float x = getAAtOutCoords();\n        ${t.output} = encode_float(x);\n      }\n    `}}
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
class $t{constructor(e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outTexUsage=p.DOWNLOAD;const t=fe();this.outputShape=e,this.userCode=`\n      ${Ne}\n\n      void main() {\n        ivec3 coords = getOutputCoords();\n        float x = getChannel(getAAtOutCoords(), vec2(coords.y, coords.z));\n        ${t.output} = encode_float(x);\n      }\n    `}}
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
class St{constructor(e,t=!1){this.variableNames=["A"],this.customUniforms=[{name:"texShape",type:"ivec2"}];const n=fe();this.outputShape=e,this.enableShapeUniforms=vt(this.outputShape.length);let a="result";t&&(a="floor(result * 255. + 0.5)"),this.userCode=`\n      ${this.enableShapeUniforms?Ce():ve(e)}\n\n      void main() {\n        ivec3 coords = getOutputCoords();\n\n        int flatIndex = getFlatIndex(coords);\n        int offset = imod(flatIndex, 4);\n\n        flatIndex = idiv(flatIndex, 4, 1.);\n\n        int r = flatIndex / texShape[1];\n        int c = imod(flatIndex, texShape[1]);\n        vec2 uv = (vec2(c, r) + halfCR) / vec2(texShape[1], texShape[0]);\n        vec4 values = ${n.texture2D}(A, uv);\n\n        float result;\n\n        if(offset == 0) {\n          result = values[0];\n        } else if(offset == 1) {\n          result = values[1];\n        } else if(offset == 2) {\n          result = values[2];\n        } else {\n          result = values[3];\n        }\n\n        ${n.output} = vec4(${a}, 0., 0., 0.);\n      }\n    `}}
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
class It{constructor(e,t=!1){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.customUniforms=[{name:"texShape",type:"ivec2"}];const n=fe();this.outputShape=e,this.enableShapeUniforms=vt(this.outputShape.length);let a="",r="result";t&&(r="floor(result * 255. + 0.5)");for(let s=0;s<=1;s++)for(let t=0;t<=1;t++){const r=2*s+t;a+=`\n          localCoords = coords;\n          if(localCoords[2] + ${t} < ${this.enableShapeUniforms?"outShape[2]":`${e[2]}`}) {\n          localCoords[2] += ${t};\n          if (localCoords[1] + ${s} < ${this.enableShapeUniforms?"outShape[1]":`${e[1]}`}) {\n            localCoords[1] += ${s};\n\n            flatIndex = getFlatIndex(localCoords);\n            offset = imod(flatIndex, 4);\n\n            flatIndex = idiv(flatIndex, 4, 1.);\n\n            int r = flatIndex / texShape[1];\n            int c = imod(flatIndex, texShape[1]);\n            vec2 uv = (vec2(c, r) + halfCR) / vec2(texShape[1], texShape[0]);\n            values = ${n.texture2D}(A, uv);\n\n            if (offset == 0) {\n              result[${r}] = values[0];\n            } else if (offset == 1) {\n              result[${r}] = values[1];\n            } else if (offset == 2) {\n              result[${r}] = values[2];\n            } else {\n              result[${r}] = values[3];\n            }\n          }\n        }\n        `}this.userCode=`\n        ${this.enableShapeUniforms?Ce():ve(e)}\n\n        void main() {\n          ivec3 coords = getOutputCoords();\n\n          vec4 result = vec4(0.);\n          int flatIndex, r, c, offset;\n          ivec3 localCoords;\n          vec2 uv;\n          vec4 values;\n\n          ${a}\n\n          ${n.output} = ${r};\n        }\n    `}}
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
function kt(e){const t=fe(),n=`${t.version}\n    precision highp float;\n    ${t.attribute} vec3 clipSpacePos;\n    ${t.attribute} vec2 uv;\n    ${t.varyingVs} vec2 resultUV;\n\n    void main() {\n      gl_Position = vec4(clipSpacePos, 1);\n      resultUV = uv;\n    }`;return I(e,n)}function wt(e){const t=new Float32Array([-1,1,0,0,1,-1,-1,0,0,0,1,1,0,1,1,1,-1,0,1,0]);return A(e,t)}function Rt(e){const t=new Uint16Array([0,1,2,2,1,3]);return F(e,t)}function Et(e,t,n,r,s,o){L(t,n);const i=D(e),u=e.TEXTURE_2D;return b(e,(()=>e.bindTexture(u,i))),b(e,(()=>e.texParameteri(u,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE))),b(e,(()=>e.texParameteri(u,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE))),b(e,(()=>e.texParameteri(u,e.TEXTURE_MIN_FILTER,e.NEAREST))),b(e,(()=>e.texParameteri(u,e.TEXTURE_MAG_FILTER,e.NEAREST))),1===(0,a.env)().getNumber("WEBGL_VERSION")?b(e,(()=>e.texImage2D(u,0,r,t,n,0,s,o,null))):b(e,(()=>e.texStorage2D(u,1,r,t,n))),b(e,(()=>e.bindTexture(e.TEXTURE_2D,null))),{texture:i,texShape:[n,t]}}function _t(e){return e.internalFormatFloat}function Ot(e,t,n,a){const[r,s]=h(t,n);return Et(e,r,s,_t(a),a.textureFormatFloat,e.FLOAT)}function At(e){return e.internalFormatHalfFloat}function Ft(e,t,n,a){const[r,s]=h(t,n);return Et(e,r,s,At(a),a.textureFormatFloat,a.textureTypeHalfFloat)}function Dt(e){return e.downloadTextureFormat}function Lt(e,t,n,a){const[r,s]=h(t,n);return Et(e,r,s,Dt(a),e.RGBA,e.UNSIGNED_BYTE)}function Pt(e){return e.internalFormatPackedFloat}function Vt(e,t,n,a){const[r,s]=x(t,n);return Et(e,r,s,Pt(a),e.RGBA,e.FLOAT)}function Mt(e){return e.internalFormatPackedHalfFloat}function Bt(e,t,n,a){const[r,s]=x(t,n);return Et(e,r,s,Mt(a),e.RGBA,a.textureTypeHalfFloat)}function Ut(e,t,n){const a=0,r=12,s=20;b(e,(()=>e.bindBuffer(e.ARRAY_BUFFER,n)));const o=V(e,t,"clipSpacePos",n,3,s,a);return o&&V(e,t,"uv",n,2,s,r)}function Wt(e,t,n,r,s,o){let i,u,l;b(e,(()=>e.bindTexture(e.TEXTURE_2D,t))),s instanceof Uint8Array?(i=new Uint8Array(n*r*4),u=e.UNSIGNED_BYTE,l=e.RGBA):(i=new Float32Array(n*r*4),u=e.FLOAT,l=o.internalFormatPackedFloat),i.set(s),2===(0,a.env)().getNumber("WEBGL_VERSION")?b(e,(()=>e.texSubImage2D(e.TEXTURE_2D,0,0,0,n,r,e.RGBA,u,i))):b(e,(()=>e.texImage2D(e.TEXTURE_2D,0,l,n,r,0,e.RGBA,u,i))),b(e,(()=>e.bindTexture(e.TEXTURE_2D,null)))}function zt(e,t,n){b(e,(()=>e.bindTexture(e.TEXTURE_2D,t))),n.data instanceof Uint8Array?2===(0,a.env)().getNumber("WEBGL_VERSION")?b(e,(()=>e.texSubImage2D(e.TEXTURE_2D,0,0,0,n.width,n.height,e.RGBA,e.UNSIGNED_BYTE,n.data))):b(e,(()=>e.texImage2D(e.TEXTURE_2D,0,e.RGBA,n.width,n.height,0,e.RGBA,e.UNSIGNED_BYTE,n.data))):2===(0,a.env)().getNumber("WEBGL_VERSION")?b(e,(()=>e.texSubImage2D(e.TEXTURE_2D,0,0,0,e.RGBA,e.UNSIGNED_BYTE,n))):b(e,(()=>e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,n))),b(e,(()=>e.bindTexture(e.TEXTURE_2D,null)))}function Gt(e,t,n,a){const r=e.createBuffer();b(e,(()=>e.bindBuffer(e.PIXEL_PACK_BUFFER,r)));const s=4,o=4,i=s*o*t*n;return b(e,(()=>e.bufferData(e.PIXEL_PACK_BUFFER,i,e.STREAM_READ))),b(e,(()=>e.readPixels(0,0,n,t,e.RGBA,e.FLOAT,0))),b(e,(()=>e.bindBuffer(e.PIXEL_PACK_BUFFER,null))),r}function Ht(e,t,n){const a=e,r=new Float32Array(n);return a.bindBuffer(a.PIXEL_PACK_BUFFER,t),a.getBufferSubData(a.PIXEL_PACK_BUFFER,0,r),a.bindBuffer(a.PIXEL_PACK_BUFFER,null),r}function Xt(e,t,n,a){const[r,s]=h(t,n),o=4,i=new Uint8Array(m(t*n,o));return b(e,(()=>e.readPixels(0,0,r,s,a.downloadTextureFormat,e.UNSIGNED_BYTE,i))),new Float32Array(i.buffer)}function jt(e,t,n,a,r,s,o,i){const u=e,l=new Float32Array(g(s,o));return u.bindBuffer(u.PIXEL_PACK_BUFFER,t),u.getBufferSubData(u.PIXEL_PACK_BUFFER,0,l),u.bindBuffer(u.PIXEL_PACK_BUFFER,null),l}function qt(e,t,n){const a=new Float32Array(t*n*4);return b(e,(()=>e.readPixels(0,0,n,t,e.RGBA,e.FLOAT,a))),a}
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
class Kt{constructor(e){this.outputTexture=null,this.program=null,this.disposed=!1,this.vertexAttrsAreBound=!1,this.itemsToPoll=[];const t=(0,a.env)().getNumber("WEBGL_VERSION");null!=e?(this.gl=e,o(t,e)):this.gl=i(t);let n="WEBGL_color_buffer_float";const r="EXT_color_buffer_half_float";if(this.parallelCompilationExtension=this.gl.getExtension("KHR_parallel_shader_compile"),1===(0,a.env)().getNumber("WEBGL_VERSION")){const e="OES_texture_float",t="OES_texture_half_float";if(this.textureFloatExtension=S(this.gl,e),oe(this.gl,t))this.textureHalfFloatExtension=S(this.gl,t);else if((0,a.env)().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support half float textures, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.");if(this.colorBufferFloatExtension=this.gl.getExtension(n),oe(this.gl,r))this.colorBufferHalfFloatExtension=S(this.gl,r);else if((0,a.env)().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support color renderable half floats, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.")}else if(n="EXT_color_buffer_float",oe(this.gl,n))this.colorBufferFloatExtension=this.gl.getExtension(n);else{if(!oe(this.gl,r))throw new Error("GL context does not support color renderable floats");this.colorBufferHalfFloatExtension=this.gl.getExtension(r)}this.vertexBuffer=wt(this.gl),this.indexBuffer=Rt(this.gl),this.framebuffer=P(this.gl),this.textureConfig=y(this.gl,this.textureHalfFloatExtension)}get debug(){return(0,a.env)().getBool("DEBUG")}dispose(){if(this.disposed)return;null!=this.program&&console.warn("Disposing a GPGPUContext that still has a bound WebGLProgram. This is probably a resource leak, delete the program with GPGPUContext.deleteProgram before disposing."),null!=this.outputTexture&&console.warn("Disposing a GPGPUContext that still has a bound output matrix texture.  This is probably a resource leak, delete the output matrix texture with GPGPUContext.deleteMatrixTexture before disposing.");const e=this.gl;b(e,(()=>e.finish())),b(e,(()=>e.bindFramebuffer(e.FRAMEBUFFER,null))),b(e,(()=>e.deleteFramebuffer(this.framebuffer))),b(e,(()=>e.bindBuffer(e.ARRAY_BUFFER,null))),b(e,(()=>e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,null))),b(e,(()=>e.deleteBuffer(this.indexBuffer))),this.disposed=!0}createFloat32MatrixTexture(e,t){return this.throwIfDisposed(),Ot(this.gl,e,t,this.textureConfig)}createFloat16MatrixTexture(e,t){return this.throwIfDisposed(),Ft(this.gl,e,t,this.textureConfig)}createUnsignedBytesMatrixTexture(e,t){return this.throwIfDisposed(),Lt(this.gl,e,t,this.textureConfig)}uploadPixelDataToTexture(e,t){this.throwIfDisposed(),zt(this.gl,e,t)}uploadDenseMatrixToTexture(e,t,n,a){this.throwIfDisposed(),Wt(this.gl,e,t,n,a,this.textureConfig)}createFloat16PackedMatrixTexture(e,t){return this.throwIfDisposed(),Bt(this.gl,e,t,this.textureConfig)}createPackedMatrixTexture(e,t){return this.throwIfDisposed(),Vt(this.gl,e,t,this.textureConfig)}deleteMatrixTexture(e){this.throwIfDisposed(),this.outputTexture===e&&(G(this.gl,this.framebuffer),this.outputTexture=null),b(this.gl,(()=>this.gl.deleteTexture(e)))}downloadByteEncodedFloatMatrixFromOutputTexture(e,t,n){return this.downloadMatrixDriver(e,(()=>Xt(this.gl,t,n,this.textureConfig)))}downloadPackedMatrixFromBuffer(e,t,n,a,r,s){return jt(this.gl,e,t,n,a,r,s,this.textureConfig)}downloadFloat32MatrixFromBuffer(e,t){return Ht(this.gl,e,t)}createBufferFromTexture(e,t,n){this.bindTextureToFrameBuffer(e);const a=Gt(this.gl,t,n,this.textureConfig);return this.unbindTextureToFrameBuffer(),a}createAndWaitForFence(){const e=this.createFence(this.gl);return this.pollFence(e)}createFence(e){let t,n;if((0,a.env)().getBool("WEBGL_FENCE_API_ENABLED")){const a=e,r=a.fenceSync(a.SYNC_GPU_COMMANDS_COMPLETE,0);e.flush(),n=()=>{const e=a.clientWaitSync(r,0,0);return e===a.ALREADY_SIGNALED||e===a.CONDITION_SATISFIED},t=r}else(0,a.env)().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0?(t=this.beginQuery(),this.endQuery(),n=()=>this.isQueryAvailable(t,(0,a.env)().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))):n=()=>!0;return{query:t,isFencePassed:n}}downloadMatrixFromPackedTexture(e,t,n){return this.downloadMatrixDriver(e,(()=>qt(this.gl,t,n)))}createProgram(e){this.throwIfDisposed();const t=this.gl;null==this.vertexShader&&(this.vertexShader=kt(t));const n=E(t);return b(t,(()=>t.attachShader(n,this.vertexShader))),b(t,(()=>t.attachShader(n,e))),_(t,n),this.debug&&O(t,n),this.vertexAttrsAreBound||(this.setProgram(n),this.vertexAttrsAreBound=Ut(t,this.program,this.vertexBuffer)),n}deleteProgram(e){this.throwIfDisposed(),e===this.program&&(this.program=null),null!=e&&b(this.gl,(()=>this.gl.deleteProgram(e)))}setProgram(e){this.throwIfDisposed(),this.program=e,null!=this.program&&this.debug&&O(this.gl,this.program),b(this.gl,(()=>this.gl.useProgram(e)))}getUniformLocation(e,t,n=!0){return this.throwIfDisposed(),n?B(this.gl,e,t):U(this.gl,e,t)}getAttributeLocation(e,t){return this.throwIfDisposed(),b(this.gl,(()=>this.gl.getAttribLocation(e,t)))}getUniformLocationNoThrow(e,t){return this.throwIfDisposed(),this.gl.getUniformLocation(e,t)}setInputMatrixTexture(e,t,n){this.throwIfDisposed(),this.throwIfNoProgram(),W(this.gl,e,t,n)}setOutputMatrixTexture(e,t,n){this.setOutputMatrixTextureDriver(e,n,t)}setOutputPackedMatrixTexture(e,t,n){this.throwIfDisposed();const[a,r]=x(t,n);this.setOutputMatrixTextureDriver(e,a,r)}setOutputMatrixWriteRegion(e,t,n,a){this.setOutputMatrixWriteRegionDriver(n,e,a,t)}setOutputPackedMatrixWriteRegion(e,t,n,a){throw new Error("setOutputPackedMatrixWriteRegion not implemented.")}debugValidate(){null!=this.program&&O(this.gl,this.program),H(this.gl)}executeProgram(){this.throwIfDisposed(),this.throwIfNoProgram();const e=this.gl;this.debug&&this.debugValidate(),b(e,(()=>e.drawElements(e.TRIANGLES,6,e.UNSIGNED_SHORT,0)))}blockUntilAllProgramsCompleted(){this.throwIfDisposed(),b(this.gl,(()=>this.gl.finish()))}getQueryTimerExtension(){return null==this.disjointQueryTimerExtension&&(this.disjointQueryTimerExtension=S(this.gl,2===(0,a.env)().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")?"EXT_disjoint_timer_query_webgl2":"EXT_disjoint_timer_query")),this.disjointQueryTimerExtension}getQueryTimerExtensionWebGL2(){return this.getQueryTimerExtension()}getQueryTimerExtensionWebGL1(){return this.getQueryTimerExtension()}beginQuery(){if(2===(0,a.env)().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")){const e=this.gl,t=this.getQueryTimerExtensionWebGL2(),n=e.createQuery();return e.beginQuery(t.TIME_ELAPSED_EXT,n),n}const e=this.getQueryTimerExtensionWebGL1(),t=e.createQueryEXT();return e.beginQueryEXT(e.TIME_ELAPSED_EXT,t),t}endQuery(){if(2===(0,a.env)().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")){const e=this.gl,t=this.getQueryTimerExtensionWebGL2();return void e.endQuery(t.TIME_ELAPSED_EXT)}const e=this.getQueryTimerExtensionWebGL1();e.endQueryEXT(e.TIME_ELAPSED_EXT)}async waitForQueryAndGetTime(e){return await a.util.repeatedTry((()=>this.disposed||this.isQueryAvailable(e,(0,a.env)().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")))),this.getQueryTime(e,(0,a.env)().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))}getQueryTime(e,t){if(0===t)return null;if(2===t){const t=this.gl,n=t.getQueryParameter(e,t.QUERY_RESULT);return n/1e6}{const t=this.getQueryTimerExtensionWebGL1(),n=t.getQueryObjectEXT(e,t.QUERY_RESULT_EXT);return n/1e6}}isQueryAvailable(e,t){if(0===t)return!0;if(2===t){const t=this.gl,n=this.getQueryTimerExtensionWebGL2(),a=t.getQueryParameter(e,t.QUERY_RESULT_AVAILABLE);return null==this.disjoint&&(this.disjoint=this.gl.getParameter(n.GPU_DISJOINT_EXT)),a&&!this.disjoint}{const t=this.getQueryTimerExtensionWebGL1(),n=t.getQueryObjectEXT(e,t.QUERY_RESULT_AVAILABLE_EXT);return null==this.disjoint&&(this.disjoint=this.gl.getParameter(t.GPU_DISJOINT_EXT)),n&&!this.disjoint}}pollFence(e){return new Promise((t=>{this.addItemToPoll((()=>e.isFencePassed()),(()=>t()))}))}pollItems(){const e=Yt(this.itemsToPoll.map((e=>e.isDoneFn)));for(let t=0;t<=e;++t){const{resolveFn:e}=this.itemsToPoll[t];e()}this.itemsToPoll=this.itemsToPoll.slice(e+1)}addItemToPoll(e,t){this.itemsToPoll.push({isDoneFn:e,resolveFn:t}),this.itemsToPoll.length>1||a.util.repeatedTry((()=>(this.pollItems(),0===this.itemsToPoll.length)))}bindTextureToFrameBuffer(e){this.throwIfDisposed(),z(this.gl,e,this.framebuffer),this.debug&&H(this.gl)}unbindTextureToFrameBuffer(){null!=this.outputTexture?(z(this.gl,this.outputTexture,this.framebuffer),this.debug&&H(this.gl)):G(this.gl,this.framebuffer)}downloadMatrixDriver(e,t){this.bindTextureToFrameBuffer(e);const n=t();return this.unbindTextureToFrameBuffer(),n}setOutputMatrixTextureDriver(e,t,n){this.throwIfDisposed();const a=this.gl;z(a,e,this.framebuffer),this.debug&&H(a),this.outputTexture=e,b(a,(()=>a.viewport(0,0,t,n))),b(a,(()=>a.scissor(0,0,t,n)))}setOutputMatrixWriteRegionDriver(e,t,n,a){this.throwIfDisposed(),b(this.gl,(()=>this.gl.scissor(e,t,n,a)))}throwIfDisposed(){if(this.disposed)throw new Error("Attempted to use disposed GPGPUContext.")}throwIfNoProgram(){if(null==this.program)throw new Error("No GPU program is currently set.")}}function Yt(e){let t=0;for(;t<e.length;++t){const n=e[t]();if(!n)break}return t-1}var Qt=n(18892);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const{mx:Zt,XI:Jt,Nk:en,YG:tn,hH:nn,z3:an,sG:rn,uM:sn,vS:on,qB:un,GG:ln,rq:cn,lg:pn,WR:dn,cu:hn,GE:mn,px:fn,jC:xn,He:gn,hE:yn,BF:bn,Dk:vn,cl:Cn,_B:Nn,qy:Tn,Zy:$n,bu:Sn,zv:In,dH:kn,HS:wn,yH:Rn,l3:En,z9:_n,x6:On,eW:An,GK:Fn,SP:Dn,f6:Ln,dl:Pn,Dw:Vn,xT:Mn,_X:Bn,wz:Un}=Qt;
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
function Wn(e,t){return["x","y","z","w","u","v"].slice(0,t).map((t=>`${e}.${t}`))}function zn(e,t){return 1===t?[e]:Wn(e,t)}function Gn(e,t){if(1===e)return"rc";let n="";for(let a=0;a<e;a++)n+=t[a],a<e-1&&(n+=",");return n}
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
class Hn{constructor(e){if(this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outputShape=e,this.rank=e.length,this.enableShapeUniforms=vt(this.outputShape.length),0===this.rank)this.userCode="\n        void main() {\n          setOutput(vec4(getA(), 0., 0., 0.));\n        }\n      ";else{const e=zn("rc",this.rank),t=pt(this.rank),n=this.getOutOfBoundsCondition(e),a=this.getSetup(e),r=this.getOutput(e);this.userCode=`\n        void main() {\n          ${t} rc = getOutputCoords();\n\n          if(${n}) {\n            setOutput(vec4(0));\n          } else {\n            ${a}\n\n            setOutput(vec4(${r}));\n          }\n        }\n      `}}getSourceCoordsArr(e){const t=[];for(let n=0;n<=1;n++)for(let a=0;a<=1;a++){let r=`${0===n?"r":"rp1"}, ${0===a?"c":"cp1"}`;for(let t=2;t<this.rank;t++)r=`${e[e.length-1-t]},`+r;t.push(r)}return t}getOutOfBoundsCondition(e){if(1===this.rank)return`rc > ${this.enableShapeUniforms?"outShape":this.outputShape[0]}`;let t="";for(let n=this.rank-2;n<this.rank;n++)t+=`${e[n]} >= ${this.enableShapeUniforms?`outShape[${n}]`:this.outputShape[n]}`,n<this.rank-1&&(t+="||");return t}getSetup(e){if(1===this.rank)return"";const t=e.slice(-2),n=this.enableShapeUniforms?`outShape[${this.rank} - 1]`:this.outputShape[this.rank-1],a=this.enableShapeUniforms?`outShape[${this.rank} - 2]`:this.outputShape[this.rank-2];return`\n      int r = ${t[0]};\n      int c = ${t[1]};\n      int rp1 = r + 1;\n      int cp1 = c + 1;\n\n      bool cEdge = cp1 >= ${n};\n      bool rEdge = rp1 >= ${a};\n    `}getOutput(e){const t=this.getSourceCoordsArr(e);if(1===this.rank){const e=this.enableShapeUniforms?"outShape":this.outputShape[0];return`getA(rc), (rc + 1 >= ${e} ? 0. : getA(rc + 1)), 0, 0`}return`getA(${t[0]}),\n            cEdge ? 0. : getA(${t[1]}),\n            rEdge ? 0. : getA(${t[2]}),\n            rEdge || cEdge ? 0. : getA(${t[3]})`}}
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
class Xn{constructor(e,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"inputShape",type:"ivec3"}],this.outputShape=e,this.enableShapeUniforms=vt(this.outputShape.length);let n="";for(let a=0;a<4;a++){let e="thisRC = rc;";a%2===1&&(e+="thisRC.z += 1;"),a>1&&(e+="thisRC.y += 1;"),n+=`\n        ${e}\n        ${a>0?"if(thisRC.y < rows && thisRC.z < cols){":""}\n          int flatIndex = getFlatIndex(thisRC);\n\n          ivec3 inputRC = inputCoordsFromReshapedOutCoords(flatIndex);\n          vec2 inputRCInnerDims = vec2(float(inputRC.y),float(inputRC.z));\n\n          result[${a}] =\n            getChannel(getA(inputRC.x, inputRC.y, inputRC.z), inputRCInnerDims);\n        ${a>0?"}":""}\n      `}this.userCode=`\n      ${jn(t,this.enableShapeUniforms)}\n      ${this.enableShapeUniforms?Ce():ve(e)}\n\n      void main() {\n        ivec3 rc = getOutputCoords();\n\n        vec4 result = vec4(0.);\n\n        ivec3 thisRC;\n        int rows = ${this.enableShapeUniforms?"outShape[1]":e[1]};\n        int cols = ${this.enableShapeUniforms?"outShape[2]":e[2]};\n\n        ${n}\n\n        setOutput(result);\n      }\n    `}}function jn(e,t){const n=t?be(["r","c","d"],"inputShape"):xe(["r","c","d"],e);return`\n    ivec3 inputCoordsFromReshapedOutCoords(int index) {\n      ${n}\n      return ivec3(r, c, d);\n    }\n  `}
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
class qn{constructor(e){this.gpgpu=e,this.numUsedTextures=0,this.numFreeTextures=0,this._numBytesAllocated=0,this._numBytesFree=0,this.freeTextures={},this.logEnabled=!1,this.usedTextures={}}acquireTexture(e,t,n){const a=Jn(t,n),r=ea(e,a,n);r in this.freeTextures||(this.freeTextures[r]=[]),r in this.usedTextures||(this.usedTextures[r]=[]);const s=Yn(e,a,this.gpgpu.gl,this.gpgpu.textureConfig,n);if(this.freeTextures[r].length>0){this.numFreeTextures--,this.numUsedTextures++,this._numBytesFree-=s,this.log();const e=this.freeTextures[r].shift();return this.usedTextures[r].push(e),e}let o;return a===d.PACKED_2X2_FLOAT32?o=this.gpgpu.createPackedMatrixTexture(e[0],e[1]):a===d.PACKED_2X2_FLOAT16?o=this.gpgpu.createFloat16PackedMatrixTexture(e[0],e[1]):a===d.UNPACKED_FLOAT32?o=this.gpgpu.createFloat32MatrixTexture(e[0],e[1]):a===d.UNPACKED_FLOAT16?o=this.gpgpu.createFloat16MatrixTexture(e[0],e[1]):a===d.PACKED_4X1_UNSIGNED_BYTE&&(o=this.gpgpu.createUnsignedBytesMatrixTexture(e[0],e[1])),this.usedTextures[r].push(o),this.numUsedTextures++,this._numBytesAllocated+=s,this.log(),o}releaseTexture(e,t,n,r){if(null==this.freeTextures)return;const s=Jn(n,r),o=ea(t,s,r);o in this.freeTextures||(this.freeTextures[o]=[]);const i=Yn(t,s,this.gpgpu.gl,this.gpgpu.textureConfig,r),u=(0,a.env)().get("WEBGL_DELETE_TEXTURE_THRESHOLD");-1!==u&&this._numBytesAllocated>u?(this.gpgpu.deleteMatrixTexture(e.texture),this._numBytesAllocated-=i):(this.freeTextures[o].push(e),this.numFreeTextures++,this._numBytesFree+=i),this.numUsedTextures--;const l=this.usedTextures[o],c=l.indexOf(e);if(c<0)throw new Error("Cannot release a texture that was never provided by this texture manager");l.splice(c,1),this.log()}log(){if(!this.logEnabled)return;const e=this.numFreeTextures+this.numUsedTextures;console.log("Free/Used",`${this.numFreeTextures} / ${this.numUsedTextures}`,`(${e})`);const t=this._numBytesFree/this._numBytesAllocated;console.log(`Bytes allocated: ${this._numBytesAllocated}`),console.log(`Bytes unused: ${this._numBytesFree} (${Math.round(100*t)}%)`)}get numBytesAllocated(){return this._numBytesAllocated}get numBytesFree(){return this._numBytesFree}getNumUsedTextures(){return this.numUsedTextures}getNumFreeTextures(){return this.numFreeTextures}dispose(){if(null!=this.freeTextures){for(const e in this.freeTextures)this.freeTextures[e].forEach((e=>{this.gpgpu.deleteMatrixTexture(e.texture)}));for(const e in this.usedTextures)this.usedTextures[e].forEach((e=>{this.gpgpu.deleteMatrixTexture(e.texture)}));this.freeTextures=null,this.usedTextures=null,this.numUsedTextures=0,this.numFreeTextures=0,this._numBytesAllocated=0,this._numBytesFree=0}}}function Kn(e,t){const n=e;if(t===n.R32F)return 4;if(t===n.R16F)return 2;if(t===n.RGBA32F)return 16;if(t===e.RGBA)return 16;if(t===n.RGBA16F)return 8;if(t===n.RGBA8)return 4;throw new Error(`Unknown internal format ${t}`)}function Yn(e,t,n,a,r){const s=Qn(t,a);let o;if(r){const[t,n]=x(e[0],e[1]);o=t*n}else{const[t,n]=h(e[0],e[1]);o=t*n}const i=Kn(n,s);return o*i}function Qn(e,t){switch(e){case d.PACKED_2X2_FLOAT32:return Pt(t);case d.PACKED_2X2_FLOAT16:return Mt(t);case d.UNPACKED_FLOAT32:return _t(t);case d.UNPACKED_FLOAT16:return At(t);case d.PACKED_4X1_UNSIGNED_BYTE:return Dt(t);default:throw new Error(`Unknown physical texture type ${e}`)}}function Zn(e){return(0,a.env)().getBool("WEBGL_RENDER_FLOAT32_ENABLED")?e?d.PACKED_2X2_FLOAT32:d.UNPACKED_FLOAT32:e?d.PACKED_2X2_FLOAT16:d.UNPACKED_FLOAT16}function Jn(e,t){if(e===p.UPLOAD)return d.PACKED_2X2_FLOAT32;if(e===p.RENDER||null==e)return Zn(t);if(e===p.DOWNLOAD||e===p.PIXELS)return d.PACKED_4X1_UNSIGNED_BYTE;throw new Error(`Unknown logical texture type ${e}`)}function ea(e,t,n){return`${e[0]}_${e[1]}_${t}_${n}`}
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
class ta{constructor(e,t){this.variableNames=["A"],this.outputShape=e,this.enableShapeUniforms=vt(this.outputShape.length),this.userCode=`\n      float unaryOperation(float x) {\n        ${t}\n      }\n\n      void main() {\n        float x = getAAtOutCoords();\n        float y = unaryOperation(x);\n\n        setOutput(y);\n      }\n    `}}const na="if (isnan(x)) return x;",aa="return x;",ra="return abs(x);";const sa="return (x >= 0.0) ? x : (exp(x) - 1.0);",oa=na+"\n  return (x < 0.0) ? 0.0 : x;\n",ia=na+"\n  return (x < 0.0) ? 0.0 : min(6.0, x);\n",ua="return x;",la="return 1.0 / (1.0 + exp(-1.0 * x));",ca="return x;",pa="\n  vec4 result;\n\n  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);\n  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);\n  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);\n  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);\n\n  return result;\n",da="\n  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));\n  bvec4 isNaN = isnan(x);\n\n  result.r = isNaN.r ? x.r : result.r;\n  result.g = isNaN.g ? x.g : result.g;\n  result.b = isNaN.b ? x.b : result.b;\n  result.a = isNaN.a ? x.a : result.a;\n\n  return result;\n",ha="\n  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));\n  bvec4 isNaN = isnan(x);\n\n  result.r = isNaN.r ? x.r : result.r;\n  result.g = isNaN.g ? x.g : result.g;\n  result.b = isNaN.b ? x.b : result.b;\n  result.a = isNaN.a ? x.a : result.a;\n\n  return result;\n",ma="return 1.0 / (1.0 + exp(-1.0 * x));";class fa{constructor(e,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e,this.enableShapeUniforms=vt(this.outputShape.length),this.userCode=`\n      vec4 unaryOperation(vec4 x) {\n        ${t}\n      }\n\n      void main() {\n        vec4 x = getAAtOutCoords();\n        vec4 y = unaryOperation(x);\n\n        setOutput(y);\n      }\n    `}}
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
class xa{constructor(e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outputShape=e,this.enableShapeUniforms=vt(this.outputShape.length);const t=e.length,n=zn("rc",t),a=pt(t),r=Gn(t,n),s=n.slice(-2),o=t<=1?"rc":`vec2(${s.join(",")})`;this.userCode=`\n      void main() {\n        ${a} rc = getOutputCoords();\n        vec4 packedInput = getA(${r});\n\n        setOutput(getChannel(packedInput, ${o}));\n      }\n    `}}
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
const ga=a.kernel_impls.whereImpl,ya=1e-7,ba=1e-4,va={};function Ca(e){return e in va||(va[e]={}),va[e]}const Na=(0,a.env)().getNumber("CPU_HANDOFF_SIZE_THRESHOLD"),Ta=600;function $a(){return null==(0,a.env)().global.screen?1024:(0,a.env)().global.screen.height*(0,a.env)().global.screen.width*window.devicePixelRatio*Ta/1024/1024}class Sa extends a.KernelBackend{constructor(e){if(super(),this.pendingRead=new WeakMap,this.pendingDisposal=new WeakSet,this.dataRefCount=new WeakMap,this.numBytesInGPU=0,this.uploadWaitMs=0,this.downloadWaitMs=0,this.lastGlFlushTime=0,this.warnedAboutMemory=!1,this.pendingDeletes=0,this.disposed=!1,!(0,a.env)().getBool("HAS_WEBGL"))throw new Error("WebGL is not supported on this device");let t;if(null!=e){if(e instanceof Kt)t=e;else{const n=i((0,a.env)().getNumber("WEBGL_VERSION"),e);t=new Kt(n)}this.binaryCache={},this.gpgpuCreatedLocally=!1}else{const e=i((0,a.env)().getNumber("WEBGL_VERSION"));t=new Kt(e),this.binaryCache=Ca((0,a.env)().getNumber("WEBGL_VERSION")),this.gpgpuCreatedLocally=!0}this.gpgpu=t,this.canvas=this.gpgpu.gl.canvas,this.textureManager=new qn(this.gpgpu),this.numMBBeforeWarning=$a(),this.texData=new a.DataStorage(this,(0,a.engine)())}nextDataId(){return Sa.nextDataId++}numDataIds(){return this.texData.numDataIds()-this.pendingDeletes}write(e,t,n){if(((0,a.env)().getBool("WEBGL_CHECK_NUMERICAL_PROBLEMS")||(0,a.env)().getBool("DEBUG"))&&this.checkNumericalProblems(e),"complex64"===n&&null!=e)throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");const r={id:this.nextDataId()};return this.texData.set(r,{shape:t,dtype:n,values:e,usage:p.UPLOAD,refCount:1}),r}refCount(e){if(this.texData.has(e)){const t=this.texData.get(e);return t.refCount}return 0}incRef(e){const t=this.texData.get(e);t.refCount++}decRef(e){if(this.texData.has(e)){const t=this.texData.get(e);t.refCount--}}move(e,t,n,r,s){if((0,a.env)().getBool("DEBUG")&&this.checkNumericalProblems(t),"complex64"===r)throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");this.texData.set(e,{shape:n,dtype:r,values:t,usage:p.UPLOAD,refCount:s})}disposeIntermediateTensorInfo(e){this.disposeData(e.dataId)}readSync(e){const t=this.texData.get(e),{values:n,dtype:r,complexTensorInfos:s,slice:o,shape:i,isPacked:u}=t;if(null!=o){let t;t=u?new fa(i,ua):new ta(i,ua);const n=this.runWebGLProgram(t,[{dataId:e,shape:i,dtype:r}],r),a=this.readSync(n.dataId);return this.disposeIntermediateTensorInfo(n),a}if(null!=n)return this.convertAndCacheOnCPU(e);if("string"===r)return n;const l=null!=this.activeTimers;let c,p;if(l&&(c=a.util.now()),"complex64"===r){const e=this.readSync(s.real.dataId),t=this.readSync(s.imag.dataId);p=a.backend_util.mergeRealAndImagArrays(e,t)}else p=this.getValuesFromTexture(e);return l&&(this.downloadWaitMs+=a.util.now()-c),this.convertAndCacheOnCPU(e,p)}async read(e){if(this.pendingRead.has(e)){const t=this.pendingRead.get(e);return new Promise((e=>t.push(e)))}const t=this.texData.get(e),{values:n,shape:r,slice:s,dtype:o,complexTensorInfos:i,isPacked:u}=t;if(null!=s){let t;t=u?new fa(r,ua):new ta(r,ua);const n=this.runWebGLProgram(t,[{dataId:e,shape:r,dtype:o}],o),a=this.read(n.dataId);return this.disposeIntermediateTensorInfo(n),a}if(null!=n)return this.convertAndCacheOnCPU(e);if((0,a.env)().getBool("DEBUG")&&!(0,a.env)().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")&&2===(0,a.env)().getNumber("WEBGL_VERSION"))throw new Error("tensor.data() with WEBGL_DOWNLOAD_FLOAT_ENABLED=false and WEBGL_VERSION=2 not yet supported.");let l,c,p=null;if("complex64"!==o&&(0,a.env)().get("WEBGL_BUFFER_SUPPORTED")){l=this.decode(e);const t=this.texData.get(l.dataId);p=this.gpgpu.createBufferFromTexture(t.texture.texture,...f(r))}if(this.pendingRead.set(e,[]),"complex64"!==o&&await this.gpgpu.createAndWaitForFence(),"complex64"===o){const e=await Promise.all([this.read(i.real.dataId),this.read(i.imag.dataId)]),t=e[0],n=e[1];c=a.backend_util.mergeRealAndImagArrays(t,n)}else if(null==p)c=this.getValuesFromTexture(e);else{const e=a.util.sizeFromShape(r);c=this.gpgpu.downloadFloat32MatrixFromBuffer(p,e)}if(null!=l&&this.disposeIntermediateTensorInfo(l),null!=p){const e=this.gpgpu.gl;b(e,(()=>e.deleteBuffer(p)))}const d=this.convertAndCacheOnCPU(e,c),h=this.pendingRead.get(e);return this.pendingRead.delete(e),h.forEach((e=>e(d))),this.pendingDisposal.has(e)&&(this.pendingDisposal.delete(e),this.disposeData(e)&&(0,a.engine)().removeDataId(e,this),this.pendingDeletes--),d}readToGPU(e,t={}){const n=this.texData.get(e),{values:r,shape:s,slice:o,dtype:i,isPacked:u,texture:l}=n;if("complex64"===i)throw new Error("Does not support reading texture for complex64 dtype.");if(null!=o){let n;n=u?new fa(s,ua):new ta(s,ua);const a=this.runWebGLProgram(n,[{dataId:e,shape:s,dtype:i}],i),r=this.readToGPU(a,t);return this.disposeIntermediateTensorInfo(a),r}if(null==l)throw null!=r?new Error("Data is not on GPU but on CPU."):new Error("There is no data on GPU or CPU.");const c=this.decode(e,t.customTexShape),p=(0,a.engine)().makeTensorFromTensorInfo(c),d=this.texData.get(c.dataId);return Object.assign({tensorRef:p},d.texture)}bufferSync(e){const t=this.readSync(e.dataId);if("string"===e.dtype)try{const n=t.map((e=>a.util.decodeString(e)));return(0,a.buffer)(e.shape,e.dtype,n)}catch(n){throw new Error("Failed to decode encoded string bytes into utf-8")}return(0,a.buffer)(e.shape,e.dtype,t)}checkNumericalProblems(e){if(null!=e)for(let t=0;t<e.length;t++){const n=e[t];if(!T(n)){if((0,a.env)().getBool("WEBGL_RENDER_FLOAT32_CAPABLE"))throw Error(`The value ${n} cannot be represented with your current settings. Consider enabling float32 rendering: 'tf.env().set('WEBGL_RENDER_FLOAT32_ENABLED', true);'`);throw Error(`The value ${n} cannot be represented on this device.`)}}}getValuesFromTexture(e){const{shape:t,dtype:n,isPacked:r}=this.texData.get(e),s=a.util.sizeFromShape(t);if((0,a.env)().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")){const n=this.decode(e),a=this.texData.get(n.dataId),r=this.gpgpu.downloadMatrixFromPackedTexture(a.texture.texture,...f(t)).subarray(0,s);return this.disposeIntermediateTensorInfo(n),r}const o=(0,a.env)().getBool("WEBGL_PACK")&&!0===r,i=o?Q(t):t,u=o?new $t(i):new Tt(i),l=this.runWebGLProgram(u,[{shape:i,dtype:n,dataId:e}],"float32"),c=this.texData.get(l.dataId),p=this.gpgpu.downloadByteEncodedFloatMatrixFromOutputTexture(c.texture.texture,c.texShape[0],c.texShape[1]).subarray(0,s);return this.disposeIntermediateTensorInfo(l),p}timerAvailable(){return(0,a.env)().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0}time(e){const t=this.activeTimers,n=[];let r=!1;null==this.programTimersStack?(this.programTimersStack=n,r=!0):this.activeTimers.push(n),this.activeTimers=n,e();const s=a.util.flatten(this.activeTimers.map((e=>e.query))).filter((e=>null!=e)),o=a.util.flatten(this.activeTimers.map((e=>e.name))).filter((e=>null!=e));this.activeTimers=t,r&&(this.programTimersStack=null);const i={uploadWaitMs:this.uploadWaitMs,downloadWaitMs:this.downloadWaitMs,kernelMs:null,wallMs:null};return(async()=>{if((0,a.env)().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0){const e=await Promise.all(s);i["kernelMs"]=a.util.sum(e),i["getExtraProfileInfo"]=()=>e.map(((e,t)=>({name:o[t],ms:e}))).map((e=>`${e.name}: ${e.ms}`)).join(", ")}else i["kernelMs"]={error:"WebGL query timers are not supported in this environment."};return this.uploadWaitMs=0,this.downloadWaitMs=0,i})()}memory(){return{unreliable:!1,numBytesInGPU:this.numBytesInGPU,numBytesInGPUAllocated:this.textureManager.numBytesAllocated,numBytesInGPUFree:this.textureManager.numBytesFree}}startTimer(){return(0,a.env)().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?this.gpgpu.beginQuery():{startMs:a.util.now(),endMs:null}}endTimer(e){return(0,a.env)().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?(this.gpgpu.endQuery(),e):(e.endMs=a.util.now(),e)}async getQueryTime(e){if((0,a.env)().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0)return this.gpgpu.waitForQueryAndGetTime(e);const t=e;return t.endMs-t.startMs}disposeData(e,t=!1){if(this.pendingDisposal.has(e))return!1;if(!this.texData.has(e))return!0;if(t?this.texData.get(e).refCount=0:this.texData.get(e).refCount--,!t&&this.texData.get(e).refCount>0)return!1;if(this.pendingRead.has(e))return this.pendingDisposal.add(e),this.pendingDeletes++,!1;this.releaseGPUData(e);const{complexTensorInfos:n}=this.texData.get(e);return null!=n&&(this.disposeData(n.real.dataId,t),this.disposeData(n.imag.dataId,t)),this.texData.delete(e),!0}releaseGPUData(e){const{texture:t,dtype:n,texShape:a,usage:r,isPacked:s,slice:o}=this.texData.get(e),i=o&&o.origDataId||e,u=this.dataRefCount.get(i);u>1?this.dataRefCount.set(i,u-1):(this.dataRefCount.delete(i),null!=t&&(this.numBytesInGPU-=this.computeBytes(a,n),this.textureManager.releaseTexture(t,a,r,s)));const l=this.texData.get(e);l.texture=null,l.texShape=null,l.isPacked=!1,l.slice=null}getTexture(e){return this.uploadToGPU(e),this.texData.get(e).texture.texture}getDataInfo(e){return this.texData.get(e)}shouldExecuteOnCPU(e,t=Na){return(0,a.env)().getBool("WEBGL_CPU_FORWARD")&&e.every((e=>null==this.texData.get(e.dataId).texture&&a.util.sizeFromShape(e.shape)<t))}getGPGPUContext(){return this.gpgpu}where(e){a.backend_util.warn("tf.where() in webgl locks the UI thread. Call tf.whereAsync() instead");const t=e.dataSync();return ga(e.shape,t)}packedUnaryOp(e,t,n){const r=new fa(e.shape,t),s=this.compileAndRun(r,[e],n);return(0,a.engine)().makeTensorFromTensorInfo(s)}abs(e){if(this.shouldExecuteOnCPU([e])&&"complex64"!==e.dtype){const t=kn(this.texData.get(e.dataId).values);return this.makeOutput(e.shape,e.dtype,t)}if((0,a.env)().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,ra,e.dtype);const t=new ta(e.shape,ra),n=this.compileAndRun(t,[e]);return(0,a.engine)().makeTensorFromTensorInfo(n)}makeTensorInfo(e,t,n){let r;if("string"===t&&null!=n&&n.length>0&&a.util.isString(n[0])){const s=n.map((e=>a.util.encodeString(e)));r=this.write(s,e,t)}else r=this.write(n,e,t);return this.texData.get(r).usage=null,{dataId:r,shape:e,dtype:t}}makeOutput(e,t,n){return(0,a.engine)().makeTensorFromTensorInfo(this.makeTensorInfo(e,t,n),this)}unpackTensor(e){const t=new xa(e.shape);return this.runWebGLProgram(t,[e],e.dtype)}packTensor(e){const t=new Hn(e.shape),n=!0;return this.runWebGLProgram(t,[e],e.dtype,null,n)}packedReshape(e,t){const n=[K(e.shape),...Y(e.shape)],a={dtype:e.dtype,shape:n,dataId:e.dataId},r=[K(t),...Y(t)],s=new Xn(r,n),o=!0,i=[n],u=this.runWebGLProgram(s,[a],e.dtype,i,o);return{dataId:u.dataId,shape:t,dtype:u.dtype}}decode(e,t){const n=this.texData.get(e),{isPacked:r,shape:s,dtype:o}=n;if(null!=t){const e=a.util.sizeFromShape(s),n=t[0]*t[1]*4;a.util.assert(e<=n,(()=>"customTexShape is too small. Row * Column * 4 should be equal or larger than the size of the tensor data."))}const i=Q(s);let u;u=r?new Nt(i):new Ct(i);const l=!0,c=[null!=t?t:f(i)],p=this.runWebGLProgram(u,[{shape:i,dtype:o,dataId:e}],o,c,l,t);return{dtype:o,shape:s,dataId:p.dataId}}runWebGLProgram(e,t,n,r,s=!1,o){const i=this.makeTensorInfo(e.outputShape,n),u=this.texData.get(i.dataId);if(e.packedOutput&&(u.isPacked=!0),e.outPackingScheme===c.DENSE){const t=null!=o?o:f(e.outputShape);u.texShape=t.map((e=>2*e))}if(null!=e.outTexUsage&&(u.usage=e.outTexUsage),0===a.util.sizeFromShape(i.shape))return u.values=a.util.getTypedArrayFromDType(i.dtype,0),i;const l=[],p=t.map((t=>{if("complex64"===t.dtype)throw new Error("GPGPUProgram does not support complex64 input. For complex64 dtypes, please separate the program into real and imaginary parts.");let n=this.texData.get(t.dataId);if(null==n.texture){if(!e.packedInputs&&a.util.sizeFromShape(t.shape)<=(0,a.env)().getNumber("WEBGL_SIZE_UPLOAD_UNIFORM"))return{shape:t.shape,texData:null,isUniform:!0,uniformValues:n.values};e.packedInputs&&(n.isPacked=!0,n.shape=t.shape)}if(this.uploadToGPU(t.dataId),!!n.isPacked!==!!e.packedInputs)t=n.isPacked?this.unpackTensor(t):this.packTensor(t),l.push(t),n=this.texData.get(t.dataId);else if(n.isPacked&&!ee(n.shape,t.shape)){const e=t,a=t.shape;t.shape=n.shape,t=this.packedReshape(t,a),l.push(t),n=this.texData.get(t.dataId),e.shape=a}return{shape:t.shape,texData:n,isUniform:!1}}));this.uploadToGPU(i.dataId);const d={shape:i.shape,texData:u,isUniform:!1},h=bt(e,p,d),m=this.getAndSaveBinary(h,(()=>ft(this.gpgpu,e,p,d))),x=null!=this.activeTimers;let g;x&&(g=this.startTimer()),(0,a.env)().get("ENGINE_COMPILE_ONLY")||yt(this.gpgpu,m,p,d,r),l.forEach((e=>this.disposeIntermediateTensorInfo(e))),x&&(g=this.endTimer(g),this.activeTimers.push({name:e.constructor.name,query:this.getQueryTime(g)}));const y=(0,a.env)().get("WEBGL_FLUSH_THRESHOLD");if(y>0){const e=a.util.now();e-this.lastGlFlushTime>y&&(this.gpgpu.gl.flush(),this.lastGlFlushTime=e)}if(!(0,a.env)().getBool("WEBGL_LAZILY_UNPACK")&&u.isPacked&&!1===s){const e=this.unpackTensor(i);return this.disposeIntermediateTensorInfo(i),e}return i}compileAndRun(e,t,n,a,r=!1){n=n||t[0].dtype;const s=this.runWebGLProgram(e,t,n,a,r);return s}getAndSaveBinary(e,t){return e in this.binaryCache||(this.binaryCache[e]=t()),this.binaryCache[e]}getTextureManager(){return this.textureManager}dispose(){if(!this.disposed){if(!(0,a.env)().getBool("IS_TEST")){const e=Object.keys(this.binaryCache);e.forEach((e=>{this.gpgpu.deleteProgram(this.binaryCache[e].webGLProgram),delete this.binaryCache[e]}))}this.textureManager.dispose(),null!=this.canvas&&"undefined"!==typeof HTMLCanvasElement&&this.canvas instanceof HTMLCanvasElement?this.canvas.remove():this.canvas=null,this.gpgpuCreatedLocally&&(this.gpgpu.program=null,this.gpgpu.dispose()),this.disposed=!0}}floatPrecision(){return null==this.floatPrecisionValue&&(this.floatPrecisionValue=(0,a.tidy)((()=>{if(!(0,a.env)().get("WEBGL_RENDER_FLOAT32_ENABLED")){const e=(0,a.env)().getBool("DEBUG");(0,a.env)().set("DEBUG",!1);const t=this.abs((0,a.scalar)(1e-8)).dataSync()[0];if((0,a.env)().set("DEBUG",e),t>0)return 32}return 16}))),this.floatPrecisionValue}epsilon(){return 32===this.floatPrecision()?ya:ba}uploadToGPU(e){const t=this.texData.get(e),{shape:n,dtype:r,values:s,texture:o,usage:i,isPacked:u}=t;if(null!=o)return;const l=null!=this.activeTimers;let c;l&&(c=a.util.now());let d=t.texShape;if(null==d&&(d=Z(n,u),t.texShape=d),null!=s){const e=Q(n);let o,i=d[1],h=d[0];const m=s instanceof Uint8Array||s instanceof Uint8ClampedArray;!u&&m||([i,h]=x(d[0],d[1])),o=u?new It(e,m):new St(e,m);const f=m?[h,i]:d,g=this.makeTensorInfo(f,r),y=this.texData.get(g.dataId);y.usage=m?p.PIXELS:p.UPLOAD,y.texShape=f,this.gpgpu.uploadDenseMatrixToTexture(this.getTexture(g.dataId),i,h,s);const b=[[h,i]],v=!0,C=this.runWebGLProgram(o,[g],r,b,v),N=this.texData.get(C.dataId);t.texShape=N.texShape,t.isPacked=N.isPacked,t.usage=N.usage,(0,a.env)().get("ENGINE_COMPILE_ONLY")?this.disposeData(C.dataId):(t.texture=N.texture,t.values=null,this.texData.delete(C.dataId)),this.disposeIntermediateTensorInfo(g),l&&(this.uploadWaitMs+=a.util.now()-c)}else{const e=this.acquireTexture(d,i,r,u);t.texture=e}}convertAndCacheOnCPU(e,t){const n=this.texData.get(e),{dtype:a}=n;return this.releaseGPUData(e),null!=t&&(n.values=Ia(t,a)),n.values}acquireTexture(e,t,n,a){if(this.numBytesInGPU+=this.computeBytes(e,n),!this.warnedAboutMemory&&this.numBytesInGPU>1024*this.numMBBeforeWarning*1024){const e=(this.numBytesInGPU/1024/1024).toFixed(2);this.warnedAboutMemory=!0,console.warn(`High memory usage in GPU: ${e} MB, most likely due to a memory leak`)}return this.textureManager.acquireTexture(e,t,a)}computeBytes(e,t){return e[0]*e[1]*a.util.bytesPerElement(t)}checkCompileCompletion(){for(const[,e]of Object.entries(this.binaryCache))this.checkCompletion_(e)}async checkCompileCompletionAsync(){const e=[];if(this.gpgpu.parallelCompilationExtension){for(const[,t]of Object.entries(this.binaryCache))e.push(this.checkCompletionAsync_(t));return Promise.all(e)}for(const[,t]of Object.entries(this.binaryCache)){const n=new Promise((e=>{try{this.checkCompletion_(t),e(!0)}catch(n){throw n}}));e.push(n)}return Promise.all(e)}async checkCompletionAsync_(e){return this.gpgpu.gl.getProgramParameter(e.webGLProgram,this.gpgpu.parallelCompilationExtension.COMPLETION_STATUS_KHR)?this.checkCompletion_(e):(await(0,a.nextFrame)(),this.checkCompletionAsync_(e))}checkCompletion_(e){if(!1===this.gpgpu.gl.getProgramParameter(e.webGLProgram,this.gpgpu.gl.LINK_STATUS)){if(console.log(this.gpgpu.gl.getProgramInfoLog(e.webGLProgram)),!1===this.gpgpu.gl.getShaderParameter(e.fragmentShader,this.gpgpu.gl.COMPILE_STATUS))throw R(e.source,this.gpgpu.gl.getShaderInfoLog(e.fragmentShader)),new Error("Failed to compile fragment shader.");throw new Error("Failed to link vertex and fragment shaders.")}return!0}getUniformLocations(){for(const[,e]of Object.entries(this.binaryCache)){const{uniformLocations:t,customUniformLocations:n,infLoc:a,nanLoc:r,inShapesLocations:s,inTexShapesLocations:o,outShapeLocation:i,outShapeStridesLocation:u,outTexShapeLocation:l}=xt(this.gpgpu,e.program,e.webGLProgram);e.uniformLocations=t,e.customUniformLocations=n,e.infLoc=a,e.nanLoc=r,e.inShapesLocations=s,e.inTexShapesLocations=o,e.outShapeLocation=i,e.outShapeStridesLocation=u,e.outTexShapeLocation=l}}}function Ia(e,t){if("float32"===t||"complex64"===t)return e;if("int32"===t||"bool"===t){const n="int32"===t?new Int32Array(e.length):new Uint8Array(e.length);for(let t=0;t<n.length;++t)n[t]=Math.round(e[t]);return n}throw new Error(`Unknown dtype ${t}`)}Sa.nextDataId=0;
/** @license See the LICENSE file. */
const ka="3.18.0";
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
a.device_util.isBrowser()&&(0,a.registerBackend)("webgl",(()=>new Sa),2);const wa="\n  if (isnan(a)) return a;\n  if (isnan(b)) return b;\n";class Ra{constructor(e,t,n){this.variableNames=["A","B"],this.outputShape=a.backend_util.assertAndGetBroadcastShape(t,n),this.enableShapeUniforms=vt(this.outputShape.length),this.userCode=`\n      float binaryOperation(float a, float b) {\n        ${e}\n      }\n\n      void main() {\n        float a = getAAtOutCoords();\n        float b = getBAtOutCoords();\n        setOutput(binaryOperation(a, b));\n      }\n    `}}
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
const Ea="\n  result.r = isNaN.r > 0. ? NAN : result.r;\n  result.g = isNaN.g > 0. ? NAN : result.g;\n  result.b = isNaN.b > 0. ? NAN : result.b;\n  result.a = isNaN.a > 0. ? NAN : result.a;\n";class _a{constructor(e,t,n,r=!1){this.variableNames=["A","B"],this.supportsBroadcasting=!0,this.packedInputs=!0,this.packedOutput=!0,this.outputShape=a.backend_util.assertAndGetBroadcastShape(t,n);const s=this.outputShape.length;this.enableShapeUniforms=vt(s);let o="";if(r)if(0===s||1===a.util.sizeFromShape(this.outputShape))o="\n          result.y = 0.;\n          result.z = 0.;\n          result.w = 0.;\n        ";else{const e=pt(s);if(o=`\n          ${e} coords = getOutputCoords();\n        `,1===s)this.enableShapeUniforms?o+="\n            result.y = (coords + 1) >= outShape ? 0. : result.y;\n            result.z = 0.;\n            result.w = 0.;\n          ":o+=`\n            result.y = (coords + 1) >= ${this.outputShape[0]} ? 0. : result.y;\n            result.z = 0.;\n            result.w = 0.;\n          `;else{const e=zn("coords",s);this.enableShapeUniforms?o+=`\n            bool nextRowOutOfBounds =\n              (${e[s-2]} + 1) >= outShape[${s} - 2];\n            bool nextColOutOfBounds =\n              (${e[s-1]} + 1) >= outShape[${s} - 1];\n            result.y = nextColOutOfBounds ? 0. : result.y;\n            result.z = nextRowOutOfBounds ? 0. : result.z;\n            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;\n          `:o+=`\n            bool nextRowOutOfBounds =\n              (${e[s-2]} + 1) >= ${this.outputShape[s-2]};\n            bool nextColOutOfBounds =\n              (${e[s-1]} + 1) >= ${this.outputShape[s-1]};\n            result.y = nextColOutOfBounds ? 0. : result.y;\n            result.z = nextRowOutOfBounds ? 0. : result.z;\n            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;\n          `}}this.userCode=`\n      vec4 binaryOperation(vec4 a, vec4 b) {\n        ${e}\n      }\n\n      void main() {\n        vec4 a = getAAtOutCoords();\n        vec4 b = getBAtOutCoords();\n\n        vec4 result = binaryOperation(a, b);\n        ${o}\n\n        setOutput(result);\n      }\n    `}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Oa(e){const{inputs:t,backend:n}=e,{x:a}=t;return n.incRef(a.dataId),{dataId:a.dataId,shape:a.shape,dtype:a.dtype}}const Aa={kernelName:a.Identity,backendName:"webgl",kernelFunc:Oa};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Fa(e){const{inputs:t,backend:n}=e,{real:a,imag:r}=t,s=n.makeTensorInfo(a.shape,"complex64"),o=n.texData.get(s.dataId),i=Oa({inputs:{x:a},backend:n}),u=Oa({inputs:{x:r},backend:n});return o.complexTensorInfos={real:i,imag:u},s}const Da={kernelName:a.Complex,backendName:"webgl",kernelFunc:Fa},La="return (a < 0.) ? b * a : a;",Pa="\n  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));\n  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);\n";function Va(e){const{inputs:t,backend:n,attrs:r}=e,{x:s}=t,{alpha:o}=r,i=n.makeTensorInfo([],"float32",a.util.createScalarValue(o,"float32")),u=(0,a.env)().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new _a(Pa,s.shape,i.shape):new Ra(La,s.shape,i.shape),l=n.runWebGLProgram(u,[s,i],"float32");return n.disposeIntermediateTensorInfo(i),l}const Ma={kernelName:a.LeakyRelu,backendName:"webgl",kernelFunc:Va},Ba="return (a < 0.) ? b * a : a;",Ua="\n  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));\n  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);\n";function Wa(e){const{inputs:t,backend:n}=e,{x:r,alpha:s}=t,o=(0,a.env)().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new _a(Ua,r.shape,s.shape):new Ra(Ba,r.shape,s.shape);return n.runWebGLProgram(o,[r,s],"float32")}const za={kernelName:a.Prelu,backendName:"webgl",kernelFunc:Wa},Ga="if (isnan(x)) return x;",Ha="\n  if (isnan(a)) return a;\n  if (isnan(b)) return b;\n",Xa="\n  result.r = isNaN.r > 0. ? NAN : result.r;\n  result.g = isNaN.g > 0. ? NAN : result.g;\n  result.b = isNaN.b > 0. ? NAN : result.b;\n  result.a = isNaN.a > 0. ? NAN : result.a;\n";function ja({opSnippet:e,packedOpSnippet:t,cpuKernelImpl:n,dtype:r}){return({inputs:s,backend:o})=>{const{x:i}=s,u=o,l=r||i.dtype;if(u.shouldExecuteOnCPU([i])&&null!=n){const e=u.texData.get(i.dataId),t=n(e.values,l);return u.makeTensorInfo(i.shape,l,t)}const c=(0,a.env)().getBool("WEBGL_PACK_UNARY_OPERATIONS")&&null!=t;let p;return p=c?new fa(i.shape,t):new ta(i.shape,e),u.runWebGLProgram(p,[i],l)}}function qa({opSnippet:e,packedOpSnippet:t,checkOutOfBounds:n=!1,supportsComplex:r=!1,cpuKernelImpl:s,dtype:o}){return({inputs:i,backend:u})=>{const{a:l,b:c}=i,p=u;if(r&&"complex64"===l.dtype){const t=p.texData.get(l.dataId),n=p.texData.get(c.dataId),[r,s]=[[t.complexTensorInfos.real,n.complexTensorInfos.real],[t.complexTensorInfos.imag,n.complexTensorInfos.imag]].map((t=>{const[n,r]=t,s={dataId:n.dataId,dtype:n.dtype,shape:l.shape},o={dataId:r.dataId,dtype:r.dtype,shape:c.shape},i=new Ra(e,l.shape,c.shape);return p.runWebGLProgram(i,[s,o],(0,a.upcastType)(n.dtype,r.dtype))})),o=Fa({inputs:{real:r,imag:s},backend:p});return p.disposeIntermediateTensorInfo(r),p.disposeIntermediateTensorInfo(s),o}const d=o||(0,a.upcastType)(l.dtype,c.dtype);if(("string"===l.dtype||"string"===c.dtype||p.shouldExecuteOnCPU([l,c]))&&null!=s){const e=p.texData.get(l.dataId).values,t=p.texData.get(c.dataId).values,n="string"===l.dtype?a.backend_util.fromUint8ToStringArray(e):e,r="string"===l.dtype?a.backend_util.fromUint8ToStringArray(t):t,[o,i]=s(l.shape,c.shape,n,r,d),u=p.makeTensorInfo(i,d),h=p.texData.get(u.dataId);return h.values=o,u}const h=(0,a.env)().getBool("WEBGL_PACK_BINARY_OPERATIONS")&&null!=t;let m;return m=h?new _a(t,l.shape,c.shape,n):new Ra(e,l.shape,c.shape),p.runWebGLProgram(m,[l,c],d)}}function Ka(e,t=!1){if("linear"===e)return t?ca:aa;if("relu"===e)return t?da:oa;if("elu"===e)return t?pa:sa;if("relu6"===e)return t?ha:ia;if("prelu"===e)return t?Ua:Ba;if("leakyrelu"===e)return t?Pa:La;if("sigmoid"===e)return t?ma:la;throw new Error(`Activation ${e} has not been implemented for the WebGL backend.`)}
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
class Ya{constructor(e,t,n,a=!1,r=!1,s=!1,o=null,i=!1,u=!1){this.variableNames=["matrixA","matrixB"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=n,this.enableShapeUniforms=vt(this.outputShape.length);const l=a?e[1]:e[2],c=Math.ceil(l/2),p=a?"i * 2, rc.y":"rc.y, i * 2",d=r?"rc.z, i * 2":"i * 2, rc.z",h=a?["a.xxyy","a.zzww"]:["a.xxzz","a.yyww"],m=r?["b.xzxz","b.ywyw"]:["b.xyxy","b.zwzw"];let f="",x="";o&&(f=i?`vec4 activation(vec4 a) {\n          vec4 b = getPreluActivationWeightsAtOutCoords();\n          ${o}\n        }`:u?`vec4 activation(vec4 a) {\n          vec4 b = getLeakyreluAlphaAtOutCoords();\n          ${o}\n        }`:`vec4 activation(vec4 x) {\n          ${o}\n        }`,x="result = activation(result);");const g=s?"result += getBiasAtOutCoords();":"";s&&this.variableNames.push("bias"),i&&this.variableNames.push("preluActivationWeights"),u&&this.variableNames.push("leakyreluAlpha");let y="rc.x",b="rc.x";e[0]<t[0]?y=`int(min(float(rc.x), ${e[0]-1}.))`:t[0]<e[0]&&(b=`int(min(float(rc.x), ${t[0]-1}.))`),this.userCode=`\n      ${f}\n      // Don't use uniform for sharedDimensionPacked for performance.\n      const float sharedDimension = ${c}.0;\n\n      vec4 dot2x2ARowBCol(ivec3 rc) {\n        vec4 result = vec4(0);\n        for (int i = 0; i < ${c}; i++) {\n          int batchA = ${y};\n          int batchB = ${b};\n          vec4 a = getMatrixA(batchA, ${p});\n          vec4 b = getMatrixB(batchB, ${d});\n\n          // These swizzled products need to be separately added.\n          // See: https://github.com/tensorflow/tfjs/issues/1735\n          result += (${h[0]} * ${m[0]});\n          result += (${h[1]} * ${m[1]});\n        }\n        return result;\n      }\n\n      void main() {\n        ivec3 rc = getOutputCoords();\n        vec4 result = dot2x2ARowBCol(rc);\n\n        ${g}\n\n        ${x}\n\n        setOutput(result);\n      }\n    `}}
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
const Qa={REAL:"return areal * breal - aimag * bimag;",IMAG:"return areal * bimag + aimag * breal;"};class Za{constructor(e,t,n){this.variableNames=["AReal","AImag","BReal","BImag"],this.outputShape=a.backend_util.assertAndGetBroadcastShape(t,n),this.userCode=`\n      float binaryOpComplex(\n          float areal, float aimag, float breal, float bimag) {\n        ${e}\n      }\n\n      void main() {\n        float areal = getARealAtOutCoords();\n        float aimag = getAImagAtOutCoords();\n        float breal = getBRealAtOutCoords();\n        float bimag = getBImagAtOutCoords();\n        setOutput(binaryOpComplex(areal, aimag, breal, bimag));\n      }\n    `}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const Ja="return a * b;";function er(e){const{inputs:t,backend:n}=e,{a:r,b:s}=t,o=a.backend_util.upcastType(r.dtype,s.dtype);if("complex64"===r.dtype){const e=n.texData.get(r.dataId),t=n.texData.get(s.dataId),a=new Za(Qa.REAL,r.shape,s.shape),o=new Za(Qa.IMAG,r.shape,s.shape),i=[{dataId:e.complexTensorInfos.real.dataId,dtype:e.complexTensorInfos.real.dtype,shape:r.shape},{dataId:e.complexTensorInfos.imag.dataId,dtype:e.complexTensorInfos.imag.dtype,shape:r.shape},{dataId:t.complexTensorInfos.real.dataId,dtype:t.complexTensorInfos.real.dtype,shape:s.shape},{dataId:t.complexTensorInfos.imag.dataId,dtype:t.complexTensorInfos.imag.dtype,shape:s.shape}],u=n.runWebGLProgram(a,i,"float32"),l=n.runWebGLProgram(o,i,"float32"),c=Fa({inputs:{real:u,imag:l},backend:n});return n.disposeIntermediateTensorInfo(u),n.disposeIntermediateTensorInfo(l),c}if(n.shouldExecuteOnCPU([r,s])){const e=n.texData.get(r.dataId),t=n.texData.get(s.dataId),[a,i]=bn(r.shape,s.shape,e.values,t.values,o),u=n.makeTensorInfo(i,o),l=n.texData.get(u.dataId);return l.values=a,u}let i;return i=(0,a.env)().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new _a(Ja,r.shape,s.shape):new Ra(Ja,r.shape,s.shape),n.runWebGLProgram(i,[r,s],o)}const tr={kernelName:a.Multiply,backendName:"webgl",kernelFunc:er};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function nr(e,t,n){const a=[K(e.shape),...Y(e.shape)],r={dtype:e.dtype,shape:a,dataId:e.dataId},s=[K(t),...Y(t)],o=new Xn(s,a),i=!0,u=[a],l=n.runWebGLProgram(o,[r],e.dtype,u,i);return{dataId:l.dataId,shape:t,dtype:l.dtype}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function ar(e){const{inputs:t,backend:n,attrs:r}=e,{x:s}=t,{shape:o}=r,i=n,u=a.util.sizeFromShape(s.shape),l=a.util.inferFromImplicitShape(o,u),c=a.util.sizeFromShape(l);a.util.assert(u===c,(()=>`The new shape (${l}) has ${c} elements and the old shape (${s.shape}) has ${u} elements. The new shape and old shape must have the same number of elements.`));const p=i.texData.get(s.dataId);return!p.isPacked||ee(s.shape,l)||null!==p.texture&&ee(p.shape,l)?(i.incRef(s.dataId),{dataId:s.dataId,shape:l,dtype:s.dtype}):nr(s,l,i)}const rr={kernelName:a.Reshape,backendName:"webgl",kernelFunc:ar};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class sr{constructor(e,t){this.variableNames=["x"];const{windowSize:n,batchSize:r,inSize:s,outSize:o}=e;this.outputShape=[r,o];const i=4*Math.floor(n/4),u=n%4;let l="sumValue += dot(values, ones);";if(null!=t){const e=1/t;l=`sumValue += dot(values * ${a.util.isInt(e)?e.toPrecision(2):e}, ones);`}let c="";s%n>0&&(c=`\n        if (inIdx < 0 || inIdx >= ${s}) {\n          return 0.0;\n        }\n      `),this.userCode=`\n      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);\n\n      float getValue(int batch, int inIdx) {\n        ${c}\n        return getX(batch, inIdx);\n      }\n\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int batch = coords[0];\n        int outIdx = coords[1];\n        int inOffset = outIdx * ${n};\n\n        float sumValue = 0.0;\n\n        for (int i = 0; i < ${i}; i += 4) {\n          int inIdx = inOffset + i;\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            getValue(batch, inIdx + 2),\n            getValue(batch, inIdx + 3)\n          );\n\n          ${l}\n        }\n\n        int inIdx = inOffset + ${i};\n        if (${1===u}) {\n          vec4 values = vec4(getValue(batch, inIdx), 0.0, 0.0, 0.0);\n\n          ${l}\n        } else if (${2===u}) {\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1), 0.0, 0.0);\n\n          ${l}\n        } else if (${3===u}) {\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            getValue(batch, inIdx + 2), 0.0);\n\n          ${l}\n        }\n        setOutput(sumValue);\n      }\n    `}}
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
class or{constructor(e,t){this.variableNames=["x"];const{windowSize:n,batchSize:a,inSize:r,outSize:s}=e;this.outputShape=[a,s];let o="0.0",i="";"prod"===t?o="1.0":"min"===t?(o="1.0 / 1e-20",i="min"):"max"===t&&(o="-1.0 / 1e-20",i="max");let u=`${t}(${t}(${t}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;"sum"===t?u="sumValue":"prod"===t?u="prodValue":"all"===t?u="allValue":"any"===t&&(u="anyValue");const l=4*Math.floor(n/4),c=n%4;let p=`\n      if (${"sum"===t}) {\n        sumValue += dot(values, ones);\n      } else if (${"prod"===t}) {\n        vec2 tmp = vec2(values[0], values[1]) * vec2(values[2], values[3]);\n        prodValue *= tmp[0] * tmp[1];\n      } else {\n        minMaxValue = ${i}(values, minMaxValue);\n        if (${"min"===t} || ${"max"===t}) {\n          minMaxValue = ${i}(values, minMaxValue);\n          bvec4 isNaN = isnan(values);\n          if (isNaN.r || isNaN.g || isNaN.b || isNaN.a) {\n            minMaxValue = vec4(NAN);\n          }\n        }\n      }\n    `,d="vec4";"all"===t?(o="1.0",p="\n        bool reducedAllValue = all(values);\n        float floatedReducedAllValue = float(reducedAllValue);\n        allValue = float(allValue >= 1.0 && floatedReducedAllValue >= 1.0);\n      ",d="bvec4"):"any"===t&&(o="0.0",p="\n        bool reducedAnyValue = any(values);\n        float floatedReducedAnyValue = float(reducedAnyValue);\n        anyValue = float(anyValue >= 1.0 || floatedReducedAnyValue >= 1.0);\n      ",d="bvec4");let h="";r%n>0&&(h=`\n        if (inIdx < 0 || inIdx >= ${r}) {\n          return initializationValue;\n        }\n      `),this.userCode=`\n      const float initializationValue = ${o};\n      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);\n\n      float getValue(int batch, int inIdx) {\n        ${h}\n        return getX(batch, inIdx);\n      }\n\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int batch = coords[0];\n        int outIdx = coords[1];\n        int inOffset = outIdx * ${n};\n\n        vec4 minMaxValue = vec4(${o});\n        float prodValue = 1.0;\n        float sumValue = 0.0;\n        float allValue = 1.0;\n        float anyValue = 0.0;\n\n        for (int i = 0; i < ${l}; i += 4) {\n          int inIdx = inOffset + i;\n          ${d} values = ${d}(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            getValue(batch, inIdx + 2),\n            getValue(batch, inIdx + 3)\n          );\n\n          ${p}\n        }\n\n        int inIdx = inOffset + ${l};\n        if (${1===c}) {\n          ${d} values = ${d}(\n            getValue(batch, inIdx),\n            initializationValue,\n            initializationValue,\n            initializationValue\n          );\n\n          ${p}\n        } else if (${2===c}) {\n          ${d} values = ${d}(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            initializationValue,\n            initializationValue\n          );\n\n          ${p}\n        } else if (${3===c}) {\n          ${d} values = ${d}(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            getValue(batch, inIdx + 2),\n            initializationValue\n          );\n\n          ${p}\n        }\n        setOutput(${u});\n      }\n    `}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function ir(e){const t=[];while(0===t.length||1!==t[t.length-1].outSize){const n=t.length?t[t.length-1].outSize:e[1],r=a.backend_util.computeOptimalWindowSize(n);t.push({inSize:n,windowSize:r,outSize:Math.ceil(n/r)})}return t}function ur(e,t,n,a){const r=ir(e.shape);let s=e;for(let o=0;o<r.length;o++){const{inSize:i,windowSize:u,outSize:l}=r[o];let c,p;c="mean"===n?0===o?new sr({windowSize:u,inSize:i,batchSize:e.shape[0],outSize:l},i):new sr({windowSize:u,inSize:i,batchSize:e.shape[0],outSize:l}):new or({windowSize:u,inSize:i,batchSize:e.shape[0],outSize:l},n),p=s,s=a.runWebGLProgram(c,[s],t),p.dataId!==e.dataId&&a.disposeIntermediateTensorInfo(p)}return s}
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
class lr{constructor(e,t){this.variableNames=["A"];const n=new Array(e.length);for(let s=0;s<n.length;s++)n[s]=e[t[s]];this.outputShape=n,this.rank=n.length;const a=pt(this.rank),r=cr(t);this.userCode=`\n    void main() {\n      ${a} resRC = getOutputCoords();\n      setOutput(getA(${r}));\n    }\n    `}}function cr(e){const t=e.length;if(t>6)throw Error(`Transpose for rank ${t} is not yet supported`);const n=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u","resRC.v"],a=new Array(t);for(let r=0;r<e.length;r++)a[e[r]]=n[r];return a.join()}
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
class pr{constructor(e,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0;const n=new Array(e.length);for(let l=0;l<n.length;l++)n[l]=e[t[l]];if(this.outputShape=n,this.rank=n.length,this.rank>6)throw Error(`Packed transpose for rank ${this.rank} is not yet supported.`);const a=pt(this.rank),r=Wn("rc",this.rank),s=new Array(this.rank);for(let l=0;l<t.length;l++)s[t[l]]=r[l];const o=`vec2(${s.slice(-2).join()})`,i=`++${r[this.rank-1]} < ${n[this.rank-1]}`,u=`getChannel(getA(${s.join()}), ${o})`;this.userCode=`\n    void main() {\n      ${a} rc = getOutputCoords();\n      vec4 result = vec4(0.);\n      result[0] = ${u};\n      if(${i}) {\n        result[1] = ${u};\n      }\n      --${r[this.rank-1]};\n      if(++${r[this.rank-2]} < ${n[this.rank-2]}) {\n        result[2] = ${u};\n        if(${i}) {\n          result[3] = ${u};\n        }\n      }\n      setOutput(result);\n    }\n    `}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function dr(e,t,n){const r=(0,a.env)().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new pr(e.shape,t):new lr(e.shape,t);return n.runWebGLProgram(r,[e],e.dtype)}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function hr(e,t,n,r){const s=t,o=e.shape.length,i=a.util.parseAxisParam(s,e.shape);let u=i;const l=a.backend_util.getAxesPermutation(u,o),c=null!=l;let p=e;c&&(p=dr(e,l,r),u=a.backend_util.getInnerMostAxes(u.length,o)),a.backend_util.assertAxesAreInnerMostDims("sum",u,o);const[d,h]=a.backend_util.computeOutAndReduceShapes(p.shape,u);let m=d;n&&(m=a.backend_util.expandShapeToKeepDim(d,i));const f=a.util.sizeFromShape(h),x=a.util.sizeFromShape(e.shape),g=x/f,y=ar({inputs:{x:p},attrs:{shape:[g,f]},backend:r}),b=(0,a.sumOutType)(e.dtype),v=ur(y,b,"sum",r),C=ar({inputs:{x:v},attrs:{shape:m},backend:r});return r.disposeIntermediateTensorInfo(y),r.disposeIntermediateTensorInfo(v),c&&r.disposeIntermediateTensorInfo(p),C}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function mr(e){const{inputs:t,backend:n,attrs:a}=e,{x:r}=t,{axis:s,keepDims:o}=a;return hr(r,s,o,n)}const fr={kernelName:a.Sum,backendName:"webgl",kernelFunc:mr};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function xr(e){const{inputs:t,backend:n,attrs:a}=e,{x:r}=t,{perm:s}=a,o=n,i=r.shape.length,u=new Array(i);for(let c=0;c<u.length;c++)u[c]=r.shape[s[c]];let l;if(o.shouldExecuteOnCPU([r])){const e=o.texData.get(r.dataId),t=e.values,n=Bn(t,r.shape,r.dtype,s,u);l=o.makeTensorInfo(u,r.dtype);const a=o.texData.get(l.dataId);a.values=n}else l=dr(r,s,o);return l}const gr={kernelName:a.Transpose,backendName:"webgl",kernelFunc:xr},yr=1e3;function br({a:e,b:t,transposeA:n,transposeB:r,backend:s,bias:o=null,preluActivationWeights:i=null,leakyreluAlpha:u=0,activation:l=null}){const c=e.shape.length,p=t.shape.length,d=n?e.shape[c-2]:e.shape[c-1],h=r?t.shape[p-1]:t.shape[p-2],m=n?e.shape[c-1]:e.shape[c-2],f=r?t.shape[p-2]:t.shape[p-1],x=e.shape.slice(0,-2),g=t.shape.slice(0,-2),y=a.util.sizeFromShape(x),b=a.util.sizeFromShape(g),v=a.broadcast_util.assertAndGetBroadcastShape(e.shape.slice(0,-2),t.shape.slice(0,-2)),C=v.concat([m,f]);a.util.assert(d===h,(()=>`Error in matMul: inner shapes (${d}) and (${h}) of Tensors with shapes ${e.shape} and ${t.shape} and transposeA=${n} and transposeB=${r} must match.`));const N=n?[y,d,m]:[y,m,d],T=r?[b,f,h]:[b,h,f],$=ar({inputs:{x:e},backend:s,attrs:{shape:N}}),S=ar({inputs:{x:t},backend:s,attrs:{shape:T}}),I=[$,S],k=Math.max(y,b),w=n?$.shape[1]:$.shape[2],R=null!=o,E=null!=i,_="leakyrelu"===l,O=null!=l?Ka(l,!0):null,A=R||E||_||null!=O;let F;if((1===m||1===f)&&w>yr&&!1===A){let e=$,t=S;n&&(e=xr({inputs:{x:$},backend:s,attrs:{perm:[0,2,1]}}),I.push(e)),r&&(t=xr({inputs:{x:S},backend:s,attrs:{perm:[0,2,1]}}),I.push(t));const a=1!==f,o=1===f;let i=e;a&&(i=ar({inputs:{x:e},backend:s,attrs:{shape:[k,w,1]}}),I.push(i));const u=1===f?2:1;let l=t;o&&(l=ar({inputs:{x:t},backend:s,attrs:{shape:[k,1,w]}}),I.push(l));const c=er({inputs:{a:i,b:l},backend:s});F=mr({inputs:{x:c},backend:s,attrs:{axis:u,keepDims:!0}}),I.push(c)}else{const l=(0,a.upcastType)(e.dtype,t.dtype),c=new Ya(N,T,[k,m,f],n,r,R,O,E,_),p=[$,S];if(null!=o&&p.push(o),E&&p.push(i),_){const e=s.makeTensorInfo([],"float32",a.util.createScalarValue(u,"float32"));p.push(e),I.push(e)}F=s.runWebGLProgram(c,p,l)}const D=ar({inputs:{x:F},backend:s,attrs:{shape:C}});I.push(F);for(const a of I)s.disposeIntermediateTensorInfo(a);return D}
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
function vr(e){const{inputs:t,backend:n,attrs:a}=e,{a:r,b:s,bias:o,preluActivationWeights:i}=t,{transposeA:u,transposeB:l,activation:c,leakyreluAlpha:p}=a;return br({a:r,b:s,transposeA:u,transposeB:l,backend:n,bias:o,preluActivationWeights:i,leakyreluAlpha:p,activation:c})}const Cr={kernelName:a._FusedMatMul,backendName:"webgl",kernelFunc:vr},Nr="return abs(x);";function Tr(e){const{inputs:t,backend:n}=e,{x:r}=t;if(n.shouldExecuteOnCPU([r])&&"complex64"!==r.dtype){const e=n.texData.get(r.dataId),t=kn(e.values);return n.makeTensorInfo(r.shape,r.dtype,t)}let s;return s=(0,a.env)().getBool("WEBGL_PACK_UNARY_OPERATIONS")?new fa(r.shape,Nr):new ta(r.shape,Nr),n.runWebGLProgram(s,[r],r.dtype)}const $r={kernelName:a.Abs,backendName:"webgl",kernelFunc:Tr},Sr=na+"\n  if (abs(x) > 1.) {\n    return NAN;\n  }\n  return acos(x);\n",Ir=ja({opSnippet:Sr}),kr={kernelName:a.Acos,backendName:"webgl",kernelFunc:Ir},wr=na+"\n  if (x < 1.0) return NAN;\nreturn log(x + sqrt(x * x - 1.0));",Rr=ja({opSnippet:wr}),Er={kernelName:a.Acosh,backendName:"webgl",kernelFunc:Rr},_r="return a + b;",Or=qa({opSnippet:_r,packedOpSnippet:_r,supportsComplex:!0,cpuKernelImpl:Zt}),Ar={kernelName:a.Add,backendName:"webgl",kernelFunc:Or};
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
class Fr{constructor(e,t){this.outputShape=[],this.outputShape=e,this.variableNames=t.map(((e,t)=>`T${t}`));const n=[];this.variableNames.forEach((e=>{n.push(`float v${e} = get${e}AtOutCoords();`)}));const a=this.variableNames.map((e=>`v${e}`)).join(" + ");this.userCode=`\n      void main() {\n        ${n.join("\n        ")}\n\n        float result = ${a};\n        setOutput(result);\n      }\n    `}}
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
class Dr{constructor(e,t){this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e,this.variableNames=t.map(((e,t)=>`T${t}`));const n=[];this.variableNames.forEach((e=>{n.push(`vec4 v${e} = get${e}AtOutCoords();`)}));const a=this.variableNames.map((e=>`v${e}`)).join(" + ");this.userCode=`\n      void main() {\n        ${n.join("\n        ")}\n\n        vec4 result = ${a};\n        setOutput(result);\n      }\n    `}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Lr(e){const{inputs:t,backend:n}=e,r=t;if(1===r.length)return Oa({inputs:{x:r[0]},backend:n});if(r.length>(0,a.env)().get("WEBGL_MAX_TEXTURES_IN_SHADER")){const e=Math.floor(r.length/2),t=Lr({inputs:r.slice(0,e),backend:n}),a=Lr({inputs:r.slice(e),backend:n});return Lr({inputs:[t,a],backend:n})}const s=r.map((e=>e.dtype)).reduce(((e,t)=>(0,a.upcastType)(e,t))),o=r.map((e=>e.shape)),i=(0,a.env)().getBool("WEBGL_PACK"),u=i?new Dr(r[0].shape,o):new Fr(r[0].shape,o);return n.runWebGLProgram(u,r,s)}const Pr={kernelName:a.AddN,backendName:"webgl",kernelFunc:Lr};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Vr(e){const{inputs:t,backend:n,attrs:r}=e,{x:s}=t,{axis:o,keepDims:i}=r,u=s.shape.length,l=a.util.parseAxisParam(o,s.shape);let c=l;const p=a.backend_util.getAxesPermutation(c,u);let d=s;null!=p&&(d=xr({inputs:{x:s},backend:n,attrs:{perm:p}}),c=a.backend_util.getInnerMostAxes(c.length,u)),a.backend_util.assertAxesAreInnerMostDims("all",c,u);const[h,m]=a.backend_util.computeOutAndReduceShapes(d.shape,c),f=a.util.sizeFromShape(m),x=ar({inputs:{x:d},backend:n,attrs:{shape:[-1,f]}}),g=ur(x,x.dtype,"all",n);let y;if(i){const e=a.backend_util.expandShapeToKeepDim(h,l);y=ar({inputs:{x:g},backend:n,attrs:{shape:e}})}else y=ar({inputs:{x:g},backend:n,attrs:{shape:h}});return n.disposeIntermediateTensorInfo(x),n.disposeIntermediateTensorInfo(g),null!=p&&n.disposeIntermediateTensorInfo(d),y}const Mr={kernelName:a.All,backendName:"webgl",kernelFunc:Vr};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Br(e){const{inputs:t,backend:n,attrs:r}=e,{x:s}=t,{axis:o,keepDims:i}=r,u=s.shape.length,l=a.util.parseAxisParam(o,s.shape);let c=l;const p=a.backend_util.getAxesPermutation(c,u);let d=s;null!=p&&(d=xr({inputs:{x:s},backend:n,attrs:{perm:p}}),c=a.backend_util.getInnerMostAxes(c.length,u)),a.backend_util.assertAxesAreInnerMostDims("any",c,u);const[h,m]=a.backend_util.computeOutAndReduceShapes(d.shape,c),f=a.util.sizeFromShape(m),x=ar({inputs:{x:d},backend:n,attrs:{shape:[-1,f]}}),g=ur(x,x.dtype,"any",n);let y;if(i){const e=a.backend_util.expandShapeToKeepDim(h,l);y=ar({inputs:{x:g},backend:n,attrs:{shape:e}})}else y=ar({inputs:{x:g},backend:n,attrs:{shape:h}});return n.disposeIntermediateTensorInfo(x),n.disposeIntermediateTensorInfo(g),null!=p&&n.disposeIntermediateTensorInfo(d),y}const Ur={kernelName:a.Any,backendName:"webgl",kernelFunc:Br};
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
class Wr{constructor(e,t,n){this.variableNames=["A"];const{windowSize:a,batchSize:r,outSize:s}=e;n||this.variableNames.push("bestIndicesA"),this.outputShape=[r,s];const o="max"===t?">":"<",i=n?"inOffset + i;":"round(getBestIndicesA(batch, inOffset + i));";this.userCode=`\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int batch = coords[0];\n        int outIdx = coords[1];\n        int inOffset = outIdx * ${a};\n\n        int bestIndex = inOffset;\n        float bestValue = getA(batch, bestIndex);\n\n        for (int i = 0; i < ${a}; i++) {\n          int inIdx = ${i};\n          float candidate = getA(batch, inIdx);\n          if (candidate ${o} bestValue) {\n            bestValue = candidate;\n            bestIndex = inIdx;\n          }\n        }\n        setOutput(float(bestIndex));\n      }\n    `}}
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
class zr{constructor(e,t,n,r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,a.util.assert(e.length>2,(()=>`Packed arg${n.charAt(0).toUpperCase()+n.slice(1)} supports only inputs with rank above 2.`));const s=e[e.length-1],o=Math.ceil(s/t);this.outputShape=e.slice(0,-1),o>1&&this.outputShape.push(o),r||this.variableNames.push("bestIndicesA");const i=this.outputShape,u=i.length,l=pt(u),c=zn("coords",u);let p,d;if(1===o){d=u+1;const e=pt(d);p=`\n        ${e} sourceLocR = ${e}(${c.join()}, 0);\n        ++${c[u-1]};\n        ${e} sourceLocG = ${e}(${c.join()}, 0);\n        ++${c[u-2]};\n        ${e} sourceLocA = ${e}(${c.join()}, 0);\n        --${c[u-1]};\n        ${e} sourceLocB = ${e}(${c.join()}, 0);\n        --${c[u-2]};`}else d=u,p=`\n        ${l} sourceLocR = coords;\n        ++${c[u-1]};\n        ${l} sourceLocG = coords;\n        ++${c[u-2]};\n        ${l} sourceLocA = coords;\n        --${c[u-1]};\n        ${l} sourceLocB = coords;\n        --${c[u-2]};`;const h=["x","y","z","w","u","v"].slice(0,d),m="."+h[d-1],f=h.map((e=>"int "+e)),x=zn("sourceLocR",d-1).concat("inIdx.r"),g=zn("sourceLocG",d-1).concat("inIdx.g"),y=zn("sourceLocB",d-1).concat("inIdx.b"),b=zn("sourceLocA",d-1).concat("inIdx.a"),v="max"===n?"greaterThan":"lessThan",C=r?"":`\n          inIdx = round(vec4(getBestIndicesAChannel(${x.join()}),\n                             getBestIndicesAChannel(${g.join()}),\n                             getBestIndicesAChannel(${y.join()}),\n                             getBestIndicesAChannel(${b.join()})));`,N=`vec4(\n            getAChannel(${x.join()}),\n            hasNextCol ? getAChannel(${g.join()}) : 0.,\n            hasNextRow ? getAChannel(${y.join()}) : 0.,\n            hasNextRow && hasNextCol ? getAChannel(${b.join()}) : 0.)`,T=r?"":`\n      float getBestIndicesAChannel(${f.join()}) {\n        return getChannel(getBestIndicesA(${h.join()}),\n                                          vec2(${h.slice(-2).join()}));\n      }`;this.userCode=`\n      float getAChannel(${f.join()}) {\n        return getChannel(getA(${h.join()}),\n                               vec2(${h.slice(-2).join()}));\n      }\n      ${T}\n      void main() {\n        ${l} coords = getOutputCoords();\n        bool hasNextCol = ${c[u-1]} < ${i[u-1]-1};\n        bool hasNextRow = ${c[u-2]} < ${i[u-2]-1};\n        ${p}\n        ivec4 srcIdx = ivec4(sourceLocR${m}, sourceLocG${m},\n          sourceLocB${m}, sourceLocA${m}) * ${t};\n        ivec4 inIdx = srcIdx;\n        vec4 bestIndex = vec4(inIdx);\n        vec4 bestValue = ${N};\n\n        for (int i = 0; i < ${t}; i++) {\n          inIdx = srcIdx;\n          ${C}\n          vec4 candidate = ${N};\n          bvec4 nan = isnan(candidate);\n          bvec4 replace = bvec4(\n            vec4(${v}(candidate, bestValue)) * (vec4(1.0) - vec4(nan)));\n\n          bestValue = vec4(replace.x  ? candidate.x : bestValue.x,\n                           replace.y  ? candidate.y : bestValue.y,\n                           replace.z  ? candidate.z : bestValue.z,\n                           replace.w  ? candidate.w : bestValue.w);\n          bestIndex = mix(bestIndex, vec4(inIdx), vec4(replace));\n          srcIdx++;\n        }\n        setOutput(bestIndex);\n      }\n    `}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Gr(e,t,n,r=null){let s=t.shape[0],o=t.shape[1];null!=r&&(s=r.shape[0],o=r.shape[1]);const i=a.backend_util.computeOptimalWindowSize(o),u={windowSize:i,inSize:o,batchSize:s,outSize:Math.ceil(o/i)},l=new Wr(u,n,null==r),c=[t];null!=r&&c.push(r);const p=e.runWebGLProgram(l,c,"int32");if(1===p.shape[1])return p;const d=Gr(e,t,n,p);return e.disposeIntermediateTensorInfo(p),d}function Hr(e,t,n,r=null){const s=null!=r?r.shape:t.shape,o=s[s.length-1],i=a.backend_util.computeOptimalWindowSize(o),u=new zr(s,i,n,null==r),l=null==r?[t]:[t,r],c=e.runWebGLProgram(u,l,"int32");if(c.shape.length===t.shape.length){const a=Hr(e,t,n,c);return e.disposeIntermediateTensorInfo(c),a}return c}function Xr(e,t,n,r){const s=[n];if(a.backend_util.assertAxesAreInnerMostDims("arg"+r.charAt(0).toUpperCase()+r.slice(1),s,t.shape.length),!(0,a.env)().getBool("WEBGL_PACK_REDUCE")||t.shape.length<=2){const n=[],o=e.texData.get(t.dataId),i=null!==o&&o.isPacked;let u=t;i&&(u=e.unpackTensor(t),n.push(u));const[l,c]=a.backend_util.computeOutAndReduceShapes(u.shape,s),p=a.util.sizeFromShape(c),d=ar({inputs:{x:u},backend:e,attrs:{shape:[-1,p]}});n.push(d);const h=Gr(e,d,r);n.push(h);const m=ar({inputs:{x:h},backend:e,attrs:{shape:l}});return n.forEach((t=>e.disposeIntermediateTensorInfo(t))),m}return Hr(e,t,r)}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function jr(e){const{inputs:t,backend:n,attrs:r}=e,{x:s}=t,{axis:o}=r;let i=a.util.parseAxisParam(o,s.shape);const u=a.backend_util.getAxesPermutation(i,s.shape.length);let l=s;const c=[];null!=u&&(l=xr({inputs:{x:s},backend:n,attrs:{perm:u}}),c.push(l),i=a.backend_util.getInnerMostAxes(i.length,l.shape.length)),a.backend_util.assertAxesAreInnerMostDims("argMax",[i[0]],l.shape.length);const p=Xr(n,l,i[0],"max");return c.forEach((e=>n.disposeIntermediateTensorInfo(e))),p}const qr={kernelName:a.ArgMax,backendName:"webgl",kernelFunc:jr};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Kr(e){const{inputs:t,backend:n,attrs:r}=e,{x:s}=t,{axis:o}=r;let i=a.util.parseAxisParam(o,s.shape);const u=a.backend_util.getAxesPermutation(i,s.shape.length);let l=s;const c=[];null!=u&&(l=xr({inputs:{x:s},backend:n,attrs:{perm:u}}),c.push(l),i=a.backend_util.getInnerMostAxes(i.length,l.shape.length)),a.backend_util.assertAxesAreInnerMostDims("argMin",[i[0]],l.shape.length);const p=Xr(n,l,i[0],"min");return c.forEach((e=>n.disposeIntermediateTensorInfo(e))),p}const Yr={kernelName:a.ArgMin,backendName:"webgl",kernelFunc:Kr},Qr=na+"\n  if (abs(x) > 1.) {\n    return NAN;\n  }\n  return asin(x);\n",Zr=ja({opSnippet:Qr}),Jr={kernelName:a.Asin,backendName:"webgl",kernelFunc:Zr},es=na+"return log(x + sqrt(x * x + 1.0));",ts=ja({opSnippet:es}),ns={kernelName:a.Asinh,backendName:"webgl",kernelFunc:ts},as=na+"\n  return atan(x);\n",rs=ja({opSnippet:as}),ss={kernelName:a.Atan,backendName:"webgl",kernelFunc:rs},os=Ha+"\n  return atan(a, b);\n",is="\n  vec4 result = atan(a, b);\n  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));\n  "+Xa+"\n  return result;\n",us=qa({opSnippet:os,packedOpSnippet:is}),ls={kernelName:a.Atan2,backendName:"webgl",kernelFunc:us},cs=na+"\n  if ((x < -1.0) || (x > 1.0)) return NAN;\nreturn (log(1.0 + x) - log(1.0 - x)) / 2.0;",ps=ja({opSnippet:cs}),ds={kernelName:a.Atanh,backendName:"webgl",kernelFunc:ps};
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
class hs{constructor(e,t,n,a=!1,r=!1){if(this.variableNames=["x"],"avg"===t&&n)throw new Error("Cannot compute positions for average pool.");const s=e.filterWidth,o=e.strideHeight,i=e.strideWidth,u=e.dilationHeight,l=e.dilationWidth,c=e.effectiveFilterHeight,p=e.effectiveFilterWidth,d=e.padInfo.top,h=e.padInfo.left;this.outputShape=e.outShape;const m="avg"===t,f=`((batch  * ${e.inHeight} + xR) * ${e.inWidth} + xC) * ${e.inChannels} + d`,x=`(xR * ${e.inWidth} + xC) * ${e.inChannels} + d`;let g="0.0";if(m||(g="-1.0 / 1e-20"),n){const t=">=";return void(this.userCode=`\n        const ivec2 strides = ivec2(${o}, ${i});\n        const ivec2 pads = ivec2(${d}, ${h});\n\n        void main() {\n          ivec4 coords = getOutputCoords();\n          int batch = coords[0];\n          int d = coords[3];\n\n          ivec2 xRCCorner = coords.yz * strides - pads;\n          int xRCorner = xRCCorner.x;\n          int xCCorner = xRCCorner.y;\n\n          // max/min x(?, ?, d) to get y(yR, yC, d).\n          // ? = to be determined\n          float minMaxValue = 0.0;\n          float minMaxValueFound = 0.0;\n          int minMaxPosition = 0;\n          float avgValue = 0.0;\n\n          for (int wR = 0; wR < ${c};\n              wR += ${u}) {\n            int xR = xRCorner + wR;\n\n            if (xR < 0 || xR >= ${e.inHeight}) {\n              continue;\n            }\n\n            for (int wC = 0; wC < ${p};\n                wC += ${l}) {\n              int xC = xCCorner + wC;\n\n              if (xC < 0 || xC >= ${e.inWidth}) {\n                continue;\n              }\n\n              float value = getX(batch, xR, xC, d);\n\n              // If a min / max value has already been found, use it. If not,\n              // use the current value.\n              float currMinMaxValue = mix(\n                  value, minMaxValue, minMaxValueFound);\n              if (value ${t} currMinMaxValue) {\n                minMaxValue = value;\n                minMaxValueFound = 1.0;\n                minMaxPosition = ${a?r?f:x:`wR * ${p} + wC`};\n              }\n            }\n          }\n          setOutput(float(minMaxPosition));\n        }\n      `)}const y="max";let b=`${t}(${t}(${t}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;"avg"===t&&(b="avgValue / count");const v=4*Math.floor(s/4),C=s%4,N=`\n      if (${m}) {\n        avgValue += dot(values, ones);\n      } else {\n        minMaxValue = ${y}(values, minMaxValue);\n      }\n    `;this.userCode=`\n      const ivec2 strides = ivec2(${o}, ${i});\n      const ivec2 pads = ivec2(${d}, ${h});\n      const float initializationValue = ${g};\n      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);\n\n      float count = 0.0;\n\n      float getValue(int batch, int xR, int xC, int d) {\n        if (xC < 0 || xC >= ${e.inWidth}) {\n          return initializationValue;\n        }\n        count += 1.0;\n        return getX(batch, xR, xC, d);\n      }\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords[0];\n        int d = coords[3];\n\n        ivec2 xRCCorner = coords.yz * strides - pads;\n        int xRCorner = xRCCorner.x;\n        int xCCorner = xRCCorner.y;\n\n        // max/min x(?, ?, d) to get y(yR, yC, d).\n        // ? = to be determined\n        vec4 minMaxValue = vec4(${g});\n        float avgValue = 0.0;\n        count = 0.0;\n\n        for (int wR = 0; wR < ${c};\n            wR += ${u}) {\n          int xR = xRCorner + wR;\n\n          if (xR < 0 || xR >= ${e.inHeight}) {\n            continue;\n          }\n\n          for (int wC = 0; wC < ${v}; wC += 4) {\n            int xC = xCCorner + wC * ${l};\n\n            vec4 values = vec4(\n              getValue(batch, xR, xC, d),\n              getValue(batch, xR, xC + ${l}, d),\n              getValue(batch, xR, xC + 2 * ${l}, d),\n              getValue(batch, xR, xC + 3 * ${l}, d)\n            );\n\n            ${N}\n          }\n\n          int xC = xCCorner + ${v};\n          if (${1===C}) {\n            vec4 values = vec4(\n              getValue(batch, xR, xC, d),\n              initializationValue,\n              initializationValue,\n              initializationValue\n            );\n\n            ${N}\n          } else if (${2===C}) {\n            vec4 values = vec4(\n              getValue(batch, xR, xC, d),\n              getValue(batch, xR, xC + ${l}, d),\n              initializationValue,\n              initializationValue\n            );\n\n            ${N}\n          } else if (${3===C}) {\n            vec4 values = vec4(\n              getValue(batch, xR, xC, d),\n              getValue(batch, xR, xC + ${l}, d),\n              getValue(batch, xR, xC + 2 * ${l}, d),\n              initializationValue\n            );\n\n            ${N}\n          }\n        }\n        setOutput(${b});\n      }\n    `}}class ms{constructor(e,t,n,a=!1,r=!1){if(this.variableNames=["x"],"avg"===t&&n)throw new Error("Cannot compute positions for average pool.");const s=e.filterWidth,o=e.strideDepth,i=e.strideHeight,u=e.strideWidth,l=e.dilationDepth,c=e.dilationHeight,p=e.dilationWidth,d=e.effectiveFilterDepth,h=e.effectiveFilterHeight,m=e.effectiveFilterWidth,f=e.padInfo.front,x=e.padInfo.top,g=e.padInfo.left;this.outputShape=e.outShape;const y="avg"===t;let b="0.0";if(y||(b="-1.0 / 1e-20"),n){const t=">=";return void(this.userCode=`\n        const ivec3 strides =\n            ivec3(${o}, ${i}, ${u});\n        const ivec3 pads = ivec3(${f}, ${x}, ${g});\n\n        void main() {\n          ivec5 coords = getOutputCoords();\n          int batch = coords.x;\n          int ch = coords.u;\n\n          ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;\n          int xDCorner = xCorner.x;\n          int xRCorner = xCorner.y;\n          int xCCorner = xCorner.z;\n\n          // max/min x(?, ?, ?, ch) to get y(yD, yR, yC, ch).\n          // ? = to be determined\n          float minMaxValue = 0.0;\n          float minMaxValueFound = 0.0;\n          int minMaxPosition = 0;\n\n          for (int wD = 0; wD < ${d};\n              wD += ${l}) {\n            int xD = xDCorner + wD;\n\n            if (xD < 0 || xD >= ${e.inDepth}) {\n              continue;\n            }\n\n            for (int wR = 0; wR < ${h};\n                wR += ${c}) {\n              int xR = xRCorner + wR;\n\n              if (xR < 0 || xR >= ${e.inHeight}) {\n                continue;\n              }\n\n              for (int wC = 0; wC < ${m};\n                  wC += ${p}) {\n                int xC = xCCorner + wC;\n\n                if (xC < 0 || xC >= ${e.inWidth}) {\n                  continue;\n                }\n\n                float value = getX(batch, xD, xR, xC, ch);\n\n                // If a min / max value has already been found, use it. If not,\n                // use the current value.\n                float currMinMaxValue = mix(\n                    value, minMaxValue, minMaxValueFound);\n                if (value ${t} currMinMaxValue) {\n                  minMaxValue = value;\n                  minMaxValueFound = 1.0;\n                  minMaxPosition = ${a?r?`(((batch * ${e.inDepth} + xD) * ${e.inHeight} + xR) * ${e.inWidth} + xC) * ${e.inChannels} + ch`:`((xD * ${e.inHeight} + xR) * ${e.inWidth} + xC) * ${e.inChannels} + ch`:`wD * ${h} * ${m} +\n                      wR * ${m} + wC`};\n                }\n              }\n            }\n          }\n          setOutput(float(minMaxPosition));\n        }\n      `)}const v="max";let C=`${t}(${t}(${t}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;"avg"===t&&(C="avgValue / count");const N=4*Math.floor(s/4),T=s%4,$=`\n      if (${y}) {\n        avgValue += dot(values, ones);\n      } else {\n        minMaxValue = ${v}(values, minMaxValue);\n      }\n    `;this.userCode=`\n      const ivec3 strides =\n        ivec3(${o}, ${i}, ${u});\n      const ivec3 pads = ivec3(${f}, ${x}, ${g});\n      const float initializationValue = ${b};\n      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);\n\n      float count = 0.0;\n\n      float getValue(int batch, int xD, int xR, int xC, int ch) {\n        if (xC < 0 || xC >= ${e.inWidth}) {\n          return initializationValue;\n        }\n        count += 1.0;\n        return getX(batch, xD, xR, xC, ch);\n      }\n\n      void main() {\n        ivec5 coords = getOutputCoords();\n        int batch = coords.x;\n        int ch = coords.u;\n\n        ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;\n        int xDCorner = xCorner.x;\n        int xRCorner = xCorner.y;\n        int xCCorner = xCorner.z;\n\n        // max/min x(?, ?, ?, d) to get y(yD, yR, yC, ch).\n        // ? = to be determined\n        vec4 minMaxValue = vec4(${b});\n        float avgValue = 0.0;\n        count = 0.0;\n\n        for (int wD = 0; wD < ${d};\n            wD += ${l}) {\n          int xD = xDCorner + wD;\n\n          if (xD < 0 || xD >= ${e.inDepth}) {\n            continue;\n          }\n\n          for (int wR = 0; wR < ${h};\n            wR += ${c}) {\n            int xR = xRCorner + wR;\n\n            if (xR < 0 || xR >= ${e.inHeight}) {\n              continue;\n            }\n\n            for (int wC = 0; wC < ${N}; wC += 4) {\n              int xC = xCCorner + wC * ${p};\n\n              vec4 values = vec4(\n                getValue(batch, xD, xR, xC, ch),\n                getValue(batch, xD, xR, xC + ${p}, ch),\n                getValue(batch, xD, xR, xC + 2 * ${p}, ch),\n                getValue(batch, xD, xR, xC + 3 * ${p}, ch)\n              );\n\n              ${$}\n            }\n\n            int xC = xCCorner + ${N};\n            if (${1===T}) {\n              vec4 values = vec4(\n                getValue(batch, xD, xR, xC, ch),\n                initializationValue,\n                initializationValue,\n                initializationValue\n              );\n\n              ${$}\n            } else if (${2===T}) {\n              vec4 values = vec4(\n                getValue(batch, xD, xR, xC, ch),\n                getValue(batch, xD, xR, xC + ${p}, ch),\n                initializationValue,\n                initializationValue\n              );\n\n              ${$}\n            } else if (${3===T}) {\n              vec4 values = vec4(\n                getValue(batch, xD, xR, xC, ch),\n                getValue(batch, xD, xR, xC + ${p}, ch),\n                getValue(batch, xD, xR, xC + 2 * ${p}, ch),\n                initializationValue\n              );\n\n              ${$}\n            }\n          }\n          setOutput(${C});\n        }\n      }\n    `}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function fs(e){const{inputs:t,backend:n,attrs:r}=e,{x:s}=t;he(s,"avgPool");const{filterSize:o,strides:i,pad:u,dimRoundingMode:l}=r,c=1;a.util.assert(a.backend_util.eitherStridesOrDilationsAreOne(i,c),(()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${i} and dilations '${c}'`));const p=a.backend_util.computePool2DInfo(s.shape,o,i,c,u,l);if(1===p.filterWidth&&1===p.filterHeight&&a.util.arraysEqual(p.inShape,p.outShape))return Oa({inputs:{x:s},backend:n});const d=new hs(p,"avg",!1);return n.runWebGLProgram(d,[s],"float32")}const xs={kernelName:a.AvgPool,backendName:"webgl",kernelFunc:fs};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function gs(e){const{inputs:t,backend:n,attrs:r}=e,{x:s}=t,{filterSize:o,strides:i,pad:u,dimRoundingMode:l,dataFormat:c}=r,p=[1,1,1],d=a.backend_util.computePool3DInfo(s.shape,o,i,p,u,l,c),h=new ms(d,"avg",!1);return n.runWebGLProgram(h,[s],"float32")}const ys={kernelName:a.AvgPool3D,backendName:"webgl",kernelFunc:gs};
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
class bs{constructor(e){this.variableNames=["dy"],this.outputShape=e.inShape;const t=e.filterHeight,n=e.filterWidth,a=e.strideHeight,r=e.strideWidth,s=e.dilationHeight,o=e.dilationWidth,i=e.effectiveFilterHeight,u=e.effectiveFilterWidth,l=i-1-e.padInfo.top,c=u-1-e.padInfo.left,p=1/(t*n);this.userCode=`\n      const ivec2 pads = ivec2(${l}, ${c});\n      const float avgMultiplier = float(${p});\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n\n        ivec2 dyRCCorner = coords.yz - pads;\n        int dyRCorner = dyRCCorner.x;\n        int dyCCorner = dyRCCorner.y;\n\n        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        for (int wR = 0; wR < ${i};\n            wR += ${s}) {\n          float dyR = float(dyRCorner + wR) / ${a}.0;\n\n          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {\n            continue;\n          }\n          int idyR = int(dyR);\n\n          for (int wC = 0; wC < ${u};\n            wC+= ${o}) {\n            float dyC = float(dyCCorner + wC) / ${r}.0;\n\n            if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||\n                fract(dyC) > 0.0) {\n              continue;\n            }\n            int idyC = int(dyC);\n\n            float dyValue = getDy(b, idyR, idyC, d);\n\n            dotProd += dyValue * avgMultiplier;\n          }\n        }\n        setOutput(dotProd);\n      }\n    `}}class vs{constructor(e){this.variableNames=["dy"],this.outputShape=e.inShape;const t=e.filterDepth,n=e.filterHeight,a=e.filterWidth,r=e.strideDepth,s=e.strideHeight,o=e.strideWidth,i=e.dilationDepth,u=e.dilationHeight,l=e.dilationWidth,c=e.effectiveFilterDepth,p=e.effectiveFilterHeight,d=e.effectiveFilterWidth,h=c-1-e.padInfo.front,m=p-1-e.padInfo.top,f=d-1-e.padInfo.left,x=1/(t*n*a);this.userCode=`\n      const ivec3 pads = ivec3(${h}, ${m}, ${f});\n      const float avgMultiplier = float(${x});\n\n      void main() {\n        ivec5 coords = getOutputCoords();\n        int batch = coords.x;\n        int ch = coords.u;\n\n        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;\n        int dyDCorner = dyCorner.x;\n        int dyRCorner = dyCorner.y;\n        int dyCCorner = dyCorner.z;\n\n        // Convolve dy(?, ?, ?, d) with pos mask(:, :, :, ch) to get\n        // dx(xD, xR, xC, ch).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n\n        for (int wD = 0; wD < ${c};\n            wD += ${i}) {\n          float dyD = float(dyDCorner + wD) / ${r}.0;\n\n          if (dyD < 0.0 || dyD >= ${e.outDepth}.0 || fract(dyD) > 0.0) {\n            continue;\n          }\n          int idyD = int(dyD);\n\n          for (int wR = 0; wR < ${p};\n              wR += ${u}) {\n            float dyR = float(dyRCorner + wR) / ${s}.0;\n\n            if (dyR < 0.0 || dyR >= ${e.outHeight}.0 ||\n                fract(dyR) > 0.0) {\n              continue;\n            }\n            int idyR = int(dyR);\n\n            for (int wC = 0; wC < ${d};\n                wC += ${l}) {\n              float dyC = float(dyCCorner + wC) / ${o}.0;\n\n              if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||\n                  fract(dyC) > 0.0) {\n                continue;\n              }\n              int idyC = int(dyC);\n\n              float dyValue = getDy(batch, idyD, idyR, idyC, ch);\n\n              dotProd += dyValue * avgMultiplier;\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    `}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Cs(e){const{inputs:t,backend:n,attrs:r}=e,{dy:s,input:o}=t,i=o,{filterSize:u,strides:l,pad:c,dimRoundingMode:p}=r,d=[1,1,1],h=a.backend_util.computePool3DInfo(i.shape,u,l,d,c,p),m=new vs(h);return n.runWebGLProgram(m,[s],i.dtype)}const Ns={kernelName:a.AvgPool3DGrad,backendName:"webgl",kernelFunc:Cs};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Ts(e){const{inputs:t,backend:n,attrs:r}=e,{dy:s,input:o}=t,i=o;he([s,o],"avgPoolGrad");const{filterSize:u,strides:l,pad:c}=r,p=a.backend_util.computePool2DInfo(i.shape,u,l,1,c),d=new bs(p);return n.runWebGLProgram(d,[s],i.dtype)}const $s={kernelName:a.AvgPoolGrad,backendName:"webgl",kernelFunc:Ts};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Ss(e){const{inputs:t,backend:n,attrs:a}=e,{a:r,b:s}=t,{transposeA:o,transposeB:i}=a;return br({a:r,b:s,transposeA:o,transposeB:i,backend:n})}const Is={kernelName:a.BatchMatMul,backendName:"webgl",kernelFunc:Ss};
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
class ks{constructor(e,t,n,r,s,o){this.outputShape=[],this.variableNames=["x","mean","variance"],a.backend_util.assertAndGetBroadcastShape(e,t),a.backend_util.assertAndGetBroadcastShape(e,n);let i="0.0";null!=r&&(a.backend_util.assertAndGetBroadcastShape(e,r),this.variableNames.push("offset"),i="getOffsetAtOutCoords()");let u="1.0";null!=s&&(a.backend_util.assertAndGetBroadcastShape(e,s),this.variableNames.push("scale"),u="getScaleAtOutCoords()"),this.outputShape=e,this.userCode=`\n      void main() {\n        float x = getXAtOutCoords();\n        float mean = getMeanAtOutCoords();\n        float variance = getVarianceAtOutCoords();\n        float offset = ${i};\n        float scale = ${u};\n        float inv = scale * inversesqrt(variance + float(${o}));\n        setOutput(dot(vec3(x, -mean, offset), vec3(inv, inv, 1)));\n      }\n    `}}
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
class ws{constructor(e,t,n,r,s,o){this.packedInputs=!0,this.packedOutput=!0,this.variableNames=["x","mean","variance"],a.backend_util.assertAndGetBroadcastShape(e,t),a.backend_util.assertAndGetBroadcastShape(e,n);let i="vec4(0.0)";null!=r&&(a.backend_util.assertAndGetBroadcastShape(e,r),this.variableNames.push("offset"),i="getOffsetAtOutCoords()");let u="vec4(1.0)";null!=s&&(a.backend_util.assertAndGetBroadcastShape(e,s),this.variableNames.push("scale"),u="getScaleAtOutCoords()"),this.outputShape=e,this.userCode=`\n      void main() {\n        vec4 offset = ${i};\n        vec4 scale = ${u};\n\n        vec4 x = getXAtOutCoords();\n        vec4 mean = getMeanAtOutCoords();\n        vec4 variance = getVarianceAtOutCoords();\n\n        vec4 inv = scale * inversesqrt(variance + vec4(${o}));\n\n        setOutput((x - mean) * inv + offset);\n      }\n    `}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const Rs=({inputs:e,backend:t,attrs:n})=>{const{x:r,mean:s,variance:o,offset:i,scale:u}=e;a.util.assert(s.shape.length===o.shape.length,(()=>"Batch normalization gradient requires mean and variance to have equal ranks.")),a.util.assert(null==i||s.shape.length===i.shape.length,(()=>"Batch normalization gradient requires mean and offset to have equal ranks.")),a.util.assert(null==u||s.shape.length===u.shape.length,(()=>"Batch normalization gradient requires mean and scale to have equal ranks."));let{varianceEpsilon:l}=n;null==l&&(l=.001);const c=[r,s,o];let p=null;null!=i&&(p=i.shape,c.push(i));let d=null;null!=u&&(d=u.shape,c.push(u));const h=(0,a.env)().getBool("WEBGL_PACK_NORMALIZATION")?new ws(r.shape,s.shape,o.shape,p,d,l):new ks(r.shape,s.shape,o.shape,p,d,l),m=t.runWebGLProgram(h,c,c[0].dtype);return m},Es={kernelName:a.FusedBatchNorm,backendName:"webgl",kernelFunc:Rs};
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
class _s{constructor(e){this.variableNames=["source"],this.outputShape=e,this.rank=e.length;const t=pt(this.rank);this.customUniforms=[{name:"start",arrayIndex:this.rank,type:"int"}];const n=As(this.rank);let a;const r=e.map(((e,t)=>`sourceLoc.${Os[t]} = start[${t}] + coords.${Os[t]};`));a=`\n        ${t} sourceLoc;\n        ${t} coords = getOutputCoords();\n        ${r.join("\n")}\n      `,this.userCode=`\n      void main() {\n        ${a}\n        setOutput(getSource(${n}));\n      }\n    `}}const Os=["x","y","z","w","u","v"];function As(e){if(1===e)return"sourceLoc";if(e<=6)return Os.slice(0,e).map((e=>"sourceLoc."+e)).join(",");throw Error(`Slicing for rank ${e} is not yet supported`)}
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
class Fs{constructor(e){this.variableNames=["source"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e,this.rank=e.length,this.customUniforms=[{name:"start",arrayIndex:this.rank,type:"int"}];const t=pt(this.rank),n=zn("coords",this.rank),a=zn("sourceLoc",this.rank),r=1===this.rank?"sourceLoc":`vec2(${a.slice(-2).join()})`,s=`getChannel(getSource(${a.join()}), ${r})`,o=`\n      result.x = ${s};\n      if (++${n[this.rank-1]} < ${e[this.rank-1]}) {\n        ++${a[this.rank-1]};\n        result.y = ${s};\n        --${a[this.rank-1]};\n      }\n    `,i=1===this.rank?"":`\n      --${n[this.rank-1]};\n      if (++${n[this.rank-2]} < ${e[this.rank-2]}) {\n        ++${a[this.rank-2]};\n        result.z = ${s};\n        if (++${n[this.rank-1]} < ${e[this.rank-1]}) {\n          ++${a[this.rank-1]};\n          result.w = ${s};\n        }\n      }\n    `,u=this.rank<=4?`sourceLoc = coords +\n            ${t}(${e.map(((e,t)=>`start[${t}]`)).join()});`:e.map(((e,t)=>`${a[t]} = ${n[t]} + start[${t}];`)).join("\n");this.userCode=`\n      void main() {\n        ${t} coords = getOutputCoords();\n        ${t} sourceLoc;\n        ${u}\n        vec4 result = vec4(0.);\n        ${o}\n        ${i}\n        setOutput(result);\n      }\n    `}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Ds(e,t,n,r){const s=r.texData.get(e.dataId),o=r.makeTensorInfo(n,e.dtype),i=r.texData.get(o.dataId);Object.assign(i,s),i.refCount=1,i.shape=n,i.dtype=e.dtype;let u=a.slice_util.computeFlatOffset(t,a.util.computeStrides(e.shape));s.slice&&(u+=s.slice.flatOffset),i.slice={flatOffset:u,origDataId:s.slice&&s.slice.origDataId||e.dataId};const l=r.dataRefCount.get(i.slice.origDataId)||1;return r.dataRefCount.set(i.slice.origDataId,l+1),o}function Ls(e){const{inputs:t,backend:n,attrs:r}=e,{x:s}=t,{begin:o,size:i}=r,[u,l]=a.slice_util.parseSliceParams(s,o,i);if(a.slice_util.assertParamsValid(s,u,l),0===a.util.sizeFromShape(l))return n.makeTensorInfo(l,s.dtype,[]);if(n.shouldExecuteOnCPU([s])||"string"===s.dtype){const e=n.texData.get(s.dataId),t=wn(e.values,u,l,s.shape,s.dtype);return n.makeTensorInfo(l,s.dtype,t)}const{isPacked:c}=n.texData.get(s.dataId),p=a.slice_util.isSliceContinous(s.shape,u,l);if(c||!p){const e=(0,a.env)().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new Fs(l):new _s(l),t=[u];return n.runWebGLProgram(e,[s],s.dtype,t)}return n.uploadToGPU(s.dataId),Ds(s,u,l,n)}const Ps={kernelName:a.Slice,backendName:"webgl",kernelFunc:Ls},Vs=e=>{const{inputs:t,backend:n,attrs:r}=e,{x:s}=t,{blockShape:o,crops:i}=r;a.util.assert(s.shape.length<=4,(()=>"batchToSpaceND for rank > 4 with a WebGL backend not implemented yet"));const u=o.reduce(((e,t)=>e*t)),l=a.backend_util.getReshaped(s.shape,o,u),c=a.backend_util.getPermuted(l.length,o.length),p=a.backend_util.getReshapedPermuted(s.shape,o,u),d=a.backend_util.getSliceBeginCoords(i,o.length),h=a.backend_util.getSliceSize(p,i,o.length),m=[],f=ar({inputs:{x:s},backend:n,attrs:{shape:l}}),x=xr({inputs:{x:f},backend:n,attrs:{perm:c}}),g=ar({inputs:{x:x},backend:n,attrs:{shape:p}}),y=Ls({inputs:{x:g},backend:n,attrs:{begin:d,size:h}});return m.push(f),m.push(x),m.push(g),m.forEach((e=>n.disposeIntermediateTensorInfo(e))),y},Ms={kernelName:a.BatchToSpaceND,backendName:"webgl",kernelFunc:Vs};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Bs(e){const{inputs:t,backend:n,attrs:a}=e,{x:r,weights:s}=t,{size:o}=a,i=n.readSync(r.dataId),u=n.readSync(s.dataId),l=Jt(i,u,s.dtype,s.shape,o);return n.makeTensorInfo([o],s.dtype,l)}const Us={kernelName:a.Bincount,backendName:"webgl",kernelFunc:Bs};
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
function Ws(e){const{inputs:t,backend:n}=e,{s0:r,s1:s}=t,o=n.readSync(r.dataId),i=n.readSync(s.dataId),u=a.backend_util.assertAndGetBroadcastShape(Array.from(o),Array.from(i));return n.makeTensorInfo([u.length],"int32",Int32Array.from(u))}const zs={kernelName:a.BroadcastArgs,backendName:"webgl",kernelFunc:Ws},Gs="return float(a != b);",Hs=qa({opSnippet:Gs,cpuKernelImpl:Cn,dtype:"bool"}),Xs={kernelName:a.NotEqual,backendName:"webgl",kernelFunc:Hs};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function js(e){const{inputs:t,backend:n}=e,{input:a}=t,r=n.texData.get(a.dataId);return Oa({inputs:{x:r.complexTensorInfos.real},backend:n})}const qs={kernelName:a.Real,backendName:"webgl",kernelFunc:js},Ks="return float(int(x));";function Ys(e,t){const n=new ta(e.shape,Ks),a=t.runWebGLProgram(n,[e],"int32");return{dataId:a.dataId,shape:a.shape,dtype:a.dtype}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Qs(e){const{inputs:t,backend:n,attrs:r}=e,{x:s}=t,{dtype:o}=r;if("complex64"===o){if("complex64"===s.dtype)return Oa({inputs:{x:s},backend:n});const e=a.zeros(s.shape),t=Qs({inputs:{x:s},backend:n,attrs:{dtype:"float32"}}),r=Fa({inputs:{real:t,imag:e},backend:n});return e.dispose(),n.disposeIntermediateTensorInfo(t),r}if("complex64"===s.dtype){const e=js({inputs:{input:s},backend:n}),t=Qs({inputs:{x:e},backend:n,attrs:{dtype:o}});return n.disposeIntermediateTensorInfo(e),t}if(!a.util.hasEncodingLoss(s.dtype,o)){const e=Oa({inputs:{x:s},backend:n});return{dataId:e.dataId,shape:e.shape,dtype:o}}if("int32"===o)return Ys(s,n);if("bool"===o){const e=n.makeTensorInfo([],"bool",a.util.getTypedArrayFromDType("bool",1)),t={a:s,b:e},r=Hs({inputs:t,backend:n});return n.disposeIntermediateTensorInfo(e),r}throw new Error(`Error in Cast: failed to cast ${s.dtype} to ${o}`)}const Zs={kernelName:a.Cast,backendName:"webgl",kernelFunc:Qs},Js="return ceil(x);",eo=ja({opSnippet:Js,packedOpSnippet:Js,cpuKernelImpl:tn}),to={kernelName:a.Ceil,backendName:"webgl",kernelFunc:eo};
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
class no{constructor(e){this.variableNames=["A"],this.customUniforms=[{name:"minVal",type:"float"},{name:"maxVal",type:"float"}],this.outputShape=e,this.userCode="\n\n      void main() {\n        float value = getAAtOutCoords();\n        if (isnan(value)) {\n          setOutput(value);\n          return;\n        }\n\n        setOutput(clamp(value, minVal, maxVal));\n      }\n    "}}
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
class ao{constructor(e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"minVal",type:"float"},{name:"maxVal",type:"float"}],this.outputShape=e,this.userCode="\n      void main() {\n        vec4 value = getAAtOutCoords();\n\n        if (any(isnan(value))) {\n          setOutput(value);\n          return;\n        }\n\n        setOutput(clamp(value, vec4(minVal), vec4(maxVal)));\n      }\n    "}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function ro(e){const{inputs:t,backend:n,attrs:r}=e,{x:s}=t,{clipValueMin:o,clipValueMax:i}=r;let u;u=(0,a.env)().getBool("WEBGL_PACK_CLIP")?new ao(s.shape):new no(s.shape);const l=[[o],[i]];return n.runWebGLProgram(u,[s],s.dtype,l)}const so={kernelName:a.ClipByValue,backendName:"webgl",kernelFunc:ro};
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
class oo{constructor(e){this.variableNames=["real","imag"],this.outputShape=e,this.userCode="\n      void main() {\n        float re = abs(getRealAtOutCoords());\n        float im = abs(getImagAtOutCoords());\n        float mx = max(re, im);\n\n        // sadly the length function in glsl is not underflow-safe\n        // (at least not on Intel GPUs). So the safe solution is\n        // to ensure underflow-safety in all cases.\n        setOutput(\n          mx == 0.0 ? 0.0 : mx * length(vec2(1, min(re, im)/mx))\n        );\n      }\n    "}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function io(e,t){return{dataId:t.dataId,dtype:t.dtype,shape:e.shape}}function uo(e){const{inputs:t,backend:n}=e,{x:a}=t,r=n.texData.get(a.dataId),s=new oo(a.shape),o=[io(a,r.complexTensorInfos.real),io(a,r.complexTensorInfos.imag)];return n.runWebGLProgram(s,o,o[0].dtype)}const lo={kernelName:a.ComplexAbs,backendName:"webgl",kernelFunc:uo};
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
class co{constructor(e){this.outputShape=[],this.outputShape=a.backend_util.computeOutShape(e,1),this.variableNames=e.map(((e,t)=>`T${t}`));const t=new Array(e.length-1);t[0]=e[0][1];for(let a=1;a<t.length;a++)t[a]=t[a-1]+e[a][1];const n=[`if (yC < ${t[0]}) setOutput(getT0(yR, yC));`];for(let a=1;a<t.length;a++){const e=t[a-1];n.push(`else if (yC < ${t[a]}) setOutput(getT${a}(yR, yC-${e}));`)}const r=t.length,s=t[t.length-1];n.push(`else setOutput(getT${r}(yR, yC-${s}));`),this.userCode=`\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int yR = coords.x;\n        int yC = coords.y;\n\n        ${n.join("\n        ")}\n      }\n    `}}
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
class po{constructor(e,t){this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[],this.outputShape=a.backend_util.computeOutShape(e,t);const n=this.outputShape,r=n.length,s=pt(r),o=zn("coords",r),i=["x","y","z","w","u","v"].slice(0,r);this.variableNames=e.map(((e,t)=>`T${t}`));const u=new Array(e.length-1);u[0]=e[0][t];for(let a=1;a<u.length;a++)u[a]=u[a-1]+e[a][t];const l=i[t],c=i.slice(-2),p=i.join();let d=`if (${l} < ${u[0]}) {\n        return getChannel(\n            getT0(${p}), vec2(${c.join()}));\n        }`;for(let a=1;a<u.length;a++){const e=u[a-1];d+=`\n        if (${l} < ${u[a]}  && ${l} >= ${u[a-1]}) {\n          return getChannel(\n            getT${a}(${ho(i,l,e)}),\n            vec2(${ho(c,l,e)}));\n        }`}const h=u.length,m=u[u.length-1];d+=`\n        return getChannel(\n          getT${h}(${ho(i,l,m)}),\n          vec2(${ho(c,l,m)}));`,this.userCode=`\n      float getValue(${i.map((e=>"int "+e))}) {\n        ${d}\n      }\n\n      void main() {\n        ${s} coords = getOutputCoords();\n        vec4 result = vec4(getValue(${o}), 0., 0., 0.);\n\n        ${o[r-1]} = ${o[r-1]} + 1;\n        if (${o[r-1]} < ${n[r-1]}) {\n          result.g = getValue(${o});\n        }\n\n        ${o[r-2]} = ${o[r-2]} + 1;\n        if (${o[r-2]} < ${n[r-2]}) {\n          result.a = getValue(${o});\n        }\n\n        ${o[r-1]} = ${o[r-1]} - 1;\n        if (${o[r-2]} < ${n[r-2]} &&\n            ${o[r-1]} < ${n[r-1]}) {\n          result.b = getValue(${o});\n        }\n        setOutput(result);\n      }\n    `}}function ho(e,t,n){const a=e.indexOf(t),r=e.map(((e,t)=>t===a?`${e} - ${n}`:e));return r.join()}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function mo(e){const{inputs:t,backend:n}=e,{input:a}=t,r=n.texData.get(a.dataId);return Oa({inputs:{x:r.complexTensorInfos.imag},backend:n})}const fo={kernelName:a.Imag,backendName:"webgl",kernelFunc:mo};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function xo(e,t,n){const r=e[0].dtype;if("complex64"===r){const a=e.map((e=>js({inputs:{input:e},backend:n}))),r=e.map((e=>mo({inputs:{input:e},backend:n}))),s=xo(a,t,n),o=xo(r,t,n),i=Fa({inputs:{real:s,imag:o},backend:n});return a.forEach((e=>n.disposeIntermediateTensorInfo(e))),r.forEach((e=>n.disposeIntermediateTensorInfo(e))),n.disposeIntermediateTensorInfo(s),n.disposeIntermediateTensorInfo(o),i}let s=n.shouldExecuteOnCPU(e);if("string"===r&&(s=!0),s){const s=e.map((e=>{const r=a.util.sizeFromShape(e.shape.slice(t)),s=[-1,r];return ar({inputs:{x:e},backend:n,attrs:{shape:s}})})),o=s.map((e=>({vals:n.readSync(e.dataId),shape:e.shape}))),i=a.backend_util.computeOutShape(s.map((e=>e.shape)),1),u=1===s[0].shape[0],l=nn(o,i,r,u),c=a.backend_util.computeOutShape(e.map((e=>e.shape)),t),p=n.makeTensorInfo(c,r,l);return s.forEach((e=>n.disposeIntermediateTensorInfo(e))),p}if(e.length>(0,a.env)().getNumber("WEBGL_MAX_TEXTURES_IN_SHADER")){const a=Math.floor(e.length/2),r=xo(e.slice(0,a),t,n),s=xo(e.slice(a),t,n),o=xo([r,s],t,n);return n.disposeIntermediateTensorInfo(r),n.disposeIntermediateTensorInfo(s),o}if((0,a.env)().getBool("WEBGL_PACK_ARRAY_OPERATIONS")&&e[0].shape.length>1){const a=new po(e.map((e=>e.shape)),t);return n.runWebGLProgram(a,e,r)}const{tensors2D:o,outShape:i}=go(e,t,n),u=new co(o.map((e=>e.shape))),l=n.runWebGLProgram(u,o,r);o.forEach((e=>n.disposeIntermediateTensorInfo(e)));const c=ar({inputs:{x:l},attrs:{shape:i},backend:n});return n.disposeIntermediateTensorInfo(l),c}function go(e,t,n){const r=a.backend_util.computeOutShape(e.map((e=>e.shape)),t),s=e.map((e=>ar({inputs:{x:e},attrs:{shape:[-1,a.util.sizeFromShape(e.shape.slice(t))]},backend:n})));return{tensors2D:s,outShape:r}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function yo(e){const{inputs:t,backend:n,attrs:r}=e,{axis:s}=r,o=a.util.parseAxisParam(s,t[0].shape)[0],i=a.backend_util.computeOutShape(t.map((e=>e.shape)),o);if(0===a.util.sizeFromShape(i))return n.makeTensorInfo(i,t[0].dtype,[]);const u=t.filter((e=>a.util.sizeFromShape(e.shape)>0));if(1===u.length)return Oa({inputs:{x:u[0]},backend:n});const l=u.map((e=>e.shape));return a.backend_util.assertParamsConsistent(l,o),xo(u,o,n)}const bo={kernelName:a.Concat,backendName:"webgl",kernelFunc:yo};
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
class vo{constructor(e,t=!1,n=null,a=!1,r=!1){this.variableNames=["x","W"],this.outputShape=e.outShape;const s=e.padInfo.top,o=e.padInfo.left,i=e.strideHeight,u=e.strideWidth,l=e.dilationHeight,c=e.dilationWidth,p=e.filterHeight,d=e.filterWidth,h=4*Math.floor(e.inChannels/4),m=e.inChannels%4,f="channelsLast"===e.dataFormat,x=f?1:2,g=f?2:3,y=f?3:1;let b="",v="";n&&(b=a?`float activation(float a) {\n          float b = getPreluActivationWeightsAtOutCoords();\n          ${n}\n        }`:r?`float activation(float a) {\n          float b = getLeakyreluAlphaAtOutCoords();\n          ${n}\n        }`:`\n          float activation(float x) {\n            ${n}\n          }\n        `,v="result = activation(result);");const C=t?"result += getBiasAtOutCoords();":"";t&&this.variableNames.push("bias"),a&&this.variableNames.push("preluActivationWeights"),r&&this.variableNames.push("leakyreluAlpha"),this.userCode=`\n      ${b}\n\n      const ivec2 strides = ivec2(${i}, ${u});\n      const ivec2 pads = ivec2(${s}, ${o});\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords[0];\n        int d2 = coords[${y}];\n\n        ivec2 xRCCorner =\n            ivec2(coords[${x}], coords[${g}]) * strides - pads;\n        int xRCorner = xRCCorner.x;\n        int xCCorner = xRCCorner.y;\n\n        // Convolve x(?, ?, d1) with w(:, :, d1, d2) to get y(yR, yC, d2).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        for (int wR = 0; wR < ${p}; wR++) {\n          int xR = xRCorner + wR * ${l};\n\n          if (xR < 0 || xR >= ${e.inHeight}) {\n            continue;\n          }\n\n          for (int wC = 0; wC < ${d}; wC++) {\n            int xC = xCCorner + wC * ${c};\n\n            if (xC < 0 || xC >= ${e.inWidth}) {\n              continue;\n            }\n\n            for (int d1 = 0; d1 < ${h}; d1 += 4) {\n              vec4 wValues = vec4(\n                getW(wR, wC, d1, d2),\n                getW(wR, wC, d1 + 1, d2),\n                getW(wR, wC, d1 + 2, d2),\n                getW(wR, wC, d1 + 3, d2)\n              );\n\n              if (${f}) {\n                vec4 xValues = vec4(\n                  getX(batch, xR, xC, d1),\n                  getX(batch, xR, xC, d1 + 1),\n                  getX(batch, xR, xC, d1 + 2),\n                  getX(batch, xR, xC, d1 + 3)\n                );\n                dotProd += dot(xValues, wValues);\n              } else {\n                vec4 xValues = vec4(\n                  getX(batch, d1, xR, xC),\n                  getX(batch, d1 + 1, xR, xC),\n                  getX(batch, d1 + 2, xR, xC),\n                  getX(batch, d1 + 3, xR, xC)\n                );\n                dotProd += dot(xValues, wValues);\n              }\n            }\n\n            if (${1===m}) {\n\n              if (${f}) {\n                dotProd +=\n                    getX(batch, xR, xC, ${h}) *\n                    getW(wR, wC, ${h}, d2);\n              } else {\n                dotProd +=\n                    getX(batch, ${h}, xR, xC) *\n                    getW(wR, wC, ${h}, d2);\n              }\n\n            } else if (${2===m}) {\n              vec2 wValues = vec2(\n                getW(wR, wC, ${h}, d2),\n                getW(wR, wC, ${h} + 1, d2)\n              );\n\n              if (${f}) {\n                vec2 xValues = vec2(\n                  getX(batch, xR, xC, ${h}),\n                  getX(batch, xR, xC, ${h} + 1)\n                );\n                dotProd += dot(xValues, wValues);\n              } else {\n                vec2 xValues = vec2(\n                  getX(batch, ${h}, xR, xC),\n                  getX(batch, ${h} + 1, xR, xC)\n                );\n                dotProd += dot(xValues, wValues);\n              }\n\n            } else if (${3===m}) {\n              vec3 wValues = vec3(\n                getW(wR, wC, ${h}, d2),\n                getW(wR, wC, ${h} + 1, d2),\n                getW(wR, wC, ${h} + 2, d2)\n              );\n\n              if (${f}) {\n                vec3 xValues = vec3(\n                  getX(batch, xR, xC, ${h}),\n                  getX(batch, xR, xC, ${h} + 1),\n                  getX(batch, xR, xC, ${h} + 2)\n                );\n                dotProd += dot(xValues, wValues);\n              } else {\n                vec3 xValues = vec3(\n                  getX(batch, ${h}, xR, xC),\n                  getX(batch, ${h} + 1, xR, xC),\n                  getX(batch, ${h} + 2, xR, xC)\n                );\n                dotProd += dot(xValues, wValues);\n              }\n\n            }\n          }\n        }\n\n        float result = dotProd;\n        ${C}\n        ${v}\n        setOutput(result);\n      }\n    `}}class Co{constructor(e){this.variableNames=["x","W"],this.outputShape=e.outShape;const t=e.padInfo.front,n=e.padInfo.top,a=e.padInfo.left,r=e.strideDepth,s=e.strideHeight,o=e.strideWidth,i=e.dilationDepth,u=e.dilationHeight,l=e.dilationWidth,c=e.filterDepth,p=e.filterHeight,d=e.filterWidth,h=4*Math.floor(e.inChannels/4),m=e.inChannels%4;this.userCode=`\n      const ivec3 strides = ivec3(${r}, ${s}, ${o});\n      const ivec3 pads = ivec3(${t}, ${n}, ${a});\n\n      void main() {\n        ivec5 coords = getOutputCoords();\n        int batch = coords.x;\n        int d2 = coords.u;\n\n        ivec3 xFRCCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;\n        int xFCorner = xFRCCorner.x;\n        int xRCorner = xFRCCorner.y;\n        int xCCorner = xFRCCorner.z;\n\n        // Convolve x(?, ?, ?, d1) with w(:, :, :, d1, d2) to get\n        // y(yF, yR, yC, d2). ? = to be determined. : = across all\n        // values in that axis.\n        float dotProd = 0.0;\n        for (int wF = 0; wF < ${c}; wF++) {\n          int xF = xFCorner + wF * ${i};\n\n          if (xF < 0 || xF >= ${e.inDepth}) {\n            continue;\n          }\n\n          for (int wR = 0; wR < ${p}; wR++) {\n            int xR = xRCorner + wR * ${u};\n\n            if (xR < 0 || xR >= ${e.inHeight}) {\n              continue;\n            }\n\n            for (int wC = 0; wC < ${d}; wC++) {\n              int xC = xCCorner + wC * ${l};\n\n              if (xC < 0 || xC >= ${e.inWidth}) {\n                continue;\n              }\n\n              for (int d1 = 0; d1 < ${h}; d1 += 4) {\n                vec4 xValues = vec4(\n                  getX(batch, xF, xR, xC, d1),\n                  getX(batch, xF, xR, xC, d1 + 1),\n                  getX(batch, xF, xR, xC, d1 + 2),\n                  getX(batch, xF, xR, xC, d1 + 3)\n                );\n                vec4 wValues = vec4(\n                  getW(wF, wR, wC, d1, d2),\n                  getW(wF, wR, wC, d1 + 1, d2),\n                  getW(wF, wR, wC, d1 + 2, d2),\n                  getW(wF, wR, wC, d1 + 3, d2)\n                );\n\n                dotProd += dot(xValues, wValues);\n              }\n\n              if (${1===m}) {\n                dotProd +=\n                  getX(batch, xF, xR, xC, ${h}) *\n                  getW(wF, wR, wC, ${h}, d2);\n              } else if (${2===m}) {\n                vec2 xValues = vec2(\n                  getX(batch, xF, xR, xC, ${h}),\n                  getX(batch, xF, xR, xC, ${h} + 1)\n                );\n                vec2 wValues = vec2(\n                  getW(wF, wR, wC, ${h}, d2),\n                  getW(wF, wR, wC, ${h} + 1, d2)\n                );\n                dotProd += dot(xValues, wValues);\n              } else if (${3===m}) {\n                vec3 xValues = vec3(\n                  getX(batch, xF, xR, xC, ${h}),\n                  getX(batch, xF, xR, xC, ${h} + 1),\n                  getX(batch, xF, xR, xC, ${h} + 2)\n                );\n                vec3 wValues = vec3(\n                  getW(wF, wR, wC, ${h}, d2),\n                  getW(wF, wR, wC, ${h} + 1, d2),\n                  getW(wF, wR, wC, ${h} + 2, d2)\n                );\n                dotProd += dot(xValues, wValues);\n              }\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    `}}
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
class No{constructor(e,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"inputShape",type:"ivec3"},{name:"pad",type:"ivec2"},{name:"stride",type:"ivec2"},{name:"dilation",type:"ivec2"},{name:"inChannels",type:"int"},{name:"itemsPerBlockRow",type:"int"},{name:"outWidth",type:"int"}],this.outputShape=e,this.enableShapeUniforms=vt(this.outputShape.length);const{dataFormat:n}=t,a=fe(),r="channelsLast"===n,s=r?0:1,o=r?1:2,i=this.enableShapeUniforms?"if(blockIndex < outShape[1] && pos < outShape[0]) {":`if(blockIndex < ${e[1]} && pos < ${e[0]}) {`;let u="";for(let l=0;l<=1;l++)for(let e=0;e<=1;e++)u+=`\n          blockIndex = rc.y + ${e};\n          pos = rc.x + ${l};\n\n          ${i}\n            offsetY = int(blockIndex / outWidth) * stride[0] - pad[0];\n            d0 = offsetY + dilation[0] * (pos / itemsPerBlockRow);\n\n            if(d0 < inputShape[${s}] && d0 >= 0) {\n              // Use custom imod instead mod. On Intel GPU, mod may generate\n              // unexpected value.\n              // https://github.com/tensorflow/tfjs/issues/5447\n              offsetX = imod(blockIndex, outWidth) * stride[1] - pad[1];\n              d1 = offsetX + dilation[1] * (imod(pos, itemsPerBlockRow) /\n                  inChannels);\n\n              if(d1 < inputShape[${o}] && d1 >= 0) {\n\n                ch = imod(pos, inChannels);\n\n                if (${r}) {\n                  innerDims = vec2(d1, ch);\n                  result[${2*l+e}] = getChannel(\n                    getA(d0, int(innerDims.x),\n                    int(innerDims.y)), innerDims);\n                } else {\n                  innerDims = vec2(d0, d1);\n                  result[${2*l+e}] = getChannel(\n                    getA(ch, int(innerDims.x),\n                    int(innerDims.y)), innerDims);\n                }\n              }\n            }\n          }\n        `;this.userCode=`\n      void main() {\n        ivec2 rc = getOutputCoords();\n\n        vec4 result = vec4(0);\n\n        int blockIndex, pos, offsetY, d0, offsetX, d1, ch;\n        vec2 innerDims;\n\n        ${u}\n\n        ${a.output} = result;\n      }\n    `}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function To({x:e,filter:t,convInfo:n,backend:r,bias:s=null,preluActivationWeights:o=null,leakyreluAlpha:i=0,activation:u=null}){const l=e.shape,c=r.texData.get(e.dataId),p=n.inChannels,d=l[0]*l[1]*l[2],h=n.outChannels,m="channelsLast"===n.dataFormat,f=!1,x=!1;let g;const y=[];if(null!=o&&!m&&3===o.shape.length){const e=xr({inputs:{x:o},backend:r,attrs:{perm:[1,2,0]}});y.push(e),o=e}const b=(1===d||1===h)&&p>yr,v=!b&&c.isPacked&&m&&null!=c.texture&&l[2]%2!==0&&a.util.arraysEqual(c.shape.slice(-3),l.slice(-3));if(v){const p=l[0]*l[1]*(l[2]+1),d={dataId:e.dataId,shape:[1,p,n.inChannels],dtype:e.dtype},h=c.shape;c.shape=c.shape.slice(),c.shape[c.shape.length-2]++,a.util.assert(ee(c.shape,d.shape),(()=>`packed reshape ${c.shape} to ${d.shape} isn't free`));const m=ar({inputs:{x:t},backend:r,attrs:{shape:[1,n.inChannels,n.outChannels]}});y.push(m);const b=br({a:d,b:m,backend:r,transposeA:f,transposeB:x,bias:s,activation:u,preluActivationWeights:o,leakyreluAlpha:i}),v=r.texData.get(b.dataId);a.util.assert(v.isPacked,(()=>"batchMatMul result is expected to be packed")),c.shape=h,v.shape=n.outShape,g=Oa({inputs:{x:b},backend:r}),g.shape=n.outShape,y.push(b)}else{const a=m?e:xr({inputs:{x:e},backend:r,attrs:{perm:[0,2,3,1]}}),l=a.shape,c=l[0]*l[1]*l[2],p=ar({inputs:{x:a},backend:r,attrs:{shape:[1,c,n.inChannels]}}),d=ar({inputs:{x:t},backend:r,attrs:{shape:[1,n.inChannels,n.outChannels]}}),h=br({a:p,b:d,transposeA:f,transposeB:x,backend:r,bias:s,activation:u,preluActivationWeights:o,leakyreluAlpha:i}),b=[n.batchSize,n.outHeight,n.outWidth,n.outChannels],v=ar({inputs:{x:h},backend:r,attrs:{shape:b}});g=m?v:xr({inputs:{x:v},backend:r,attrs:{perm:[0,3,1,2]}}),m||(y.push(a),y.push(v)),y.push(p),y.push(d),y.push(h)}for(const a of y)r.disposeIntermediateTensorInfo(a);return g}function $o({x:e,filter:t,convInfo:n,backend:r,bias:s=null,preluActivationWeights:o=null,leakyreluAlpha:i=0,activation:u=null}){const{filterWidth:l,filterHeight:c,inChannels:p,outWidth:d,outHeight:h,dataFormat:m}=n,f="channelsLast"===m,x=l*c*p,g=h*d,y=[x,g],b=!0,v=!1,C=[];if(null!=o&&!f&&3===o.shape.length){const e=xr({inputs:{x:o},backend:r,attrs:{perm:[1,2,0]}});C.push(e),o=e}const N=ar({inputs:{x:e},backend:r,attrs:{shape:e.shape.slice(1)}}),T=ar({inputs:{x:t},backend:r,attrs:{shape:[1,x,a.util.sizeFromShape(t.shape)/x]}});C.push(N),C.push(T);const $=new No(y,n),S=[N.shape,[n.padInfo.top,n.padInfo.left],[n.strideHeight,n.strideWidth],[n.dilationHeight,n.dilationWidth],[n.inChannels],[n.filterWidth*n.inChannels],[n.outWidth]],I=r.runWebGLProgram($,[N],"float32",S),k=ar({inputs:{x:I},backend:r,attrs:{shape:[1,y[0],y[1]]}});C.push(I),C.push(k);const w=null!=s,R=null!=o,E="leakyrelu"===u,_=u?Ka(u,!0):null,O=new Ya(k.shape,T.shape,[1,g,n.outChannels],b,v,w,_,R,E),A=[k,T];if(s&&A.push(s),R&&A.push(o),E){const e=r.makeTensorInfo([],"float32",a.util.createScalarValue(i,"float32"));A.push(e),C.push(e)}const F=r.runWebGLProgram(O,A,"float32"),D=[1,h,d,n.outChannels],L=ar({inputs:{x:F},backend:r,attrs:{shape:D}}),P=f?L:xr({inputs:{x:L},backend:r,attrs:{perm:[0,3,1,2]}});f||C.push(L),C.push(F);for(const a of C)r.disposeIntermediateTensorInfo(a);return P}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function So(e){const{inputs:t,backend:n,attrs:r}=e,{x:s,filter:o}=t,{strides:i,pad:u,dataFormat:l,dilations:c,dimRoundingMode:p}=r,d=a.backend_util.convertConv2DDataFormat(l),h=a.backend_util.computeConv2DInfo(s.shape,o.shape,i,c,u,p,!1,d);let m;if(1!==h.filterHeight||1!==h.filterWidth||1!==h.dilationHeight||1!==h.dilationWidth||1!==h.strideHeight||1!==h.strideWidth||"SAME"!==h.padInfo.type&&"VALID"!==h.padInfo.type)if((0,a.env)().getBool("WEBGL_CONV_IM2COL")&&1===s.shape[0])m=$o({x:s,filter:o,convInfo:h,backend:n});else{const e=new vo(h);m=n.runWebGLProgram(e,[s,o],"float32")}else m=To({x:s,filter:o,convInfo:h,backend:n});const f=ar({inputs:{x:m},backend:n,attrs:{shape:h.outShape}});return n.disposeIntermediateTensorInfo(m),f}const Io={kernelName:a.Conv2D,backendName:"webgl",kernelFunc:So};
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
class ko{constructor(e){this.variableNames=["x","dy"],this.outputShape=e.filterShape;const t=e.strideHeight,n=e.strideWidth,a=e.padInfo.top,r=e.padInfo.left,s="channelsLast"===e.dataFormat;this.userCode=`\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int wR = coords.x;\n        int wC = coords.y;\n        int d1 = coords.z;\n        int d2 = coords.w;\n\n        // Convolve x(?, ?, d1) with dy(:, :, d2) to get dw(wR, wC, d1, d2).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n\n        for (int b = 0; b < ${e.batchSize}; b++) {\n          for (int yR = 0; yR < ${e.outHeight}; yR++) {\n            int xR = wR + yR * ${t} - ${a};\n\n            if (xR < 0 || xR >= ${e.inHeight}) {\n              continue;\n            }\n\n            for (int yC = 0; yC < ${e.outWidth}; yC++) {\n              int xC = wC + yC * ${n} - ${r};\n\n              if (xC < 0 || xC >= ${e.inWidth}) {\n                continue;\n              }\n\n              if (${s}) {\n                float dyValue = getDy(b, yR, yC, d2);\n                float xValue = getX(b, xR, xC, d1);\n                dotProd += (xValue * dyValue);\n              } else {\n                float dyValue = getDy(b, d2, yR, yC);\n                float xValue = getX(b, d1, xR, xC);\n                dotProd += (xValue * dyValue);\n              }\n\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    `}}class wo{constructor(e){this.variableNames=["dy","W"],this.outputShape=e.inShape;const t=e.filterHeight,n=e.filterWidth,a=e.strideHeight,r=e.strideWidth,s="channelsLast"===e.dataFormat,o=t-1-e.padInfo.top,i=n-1-e.padInfo.left,u=s?1:2,l=s?2:3,c=s?3:1;this.userCode=`\n      const ivec2 pads = ivec2(${o}, ${i});\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords[0];\n        int d1 = coords[${c}];\n\n        ivec2 dyCorner = ivec2(coords[${u}], coords[${l}]) - pads;\n        int dyRCorner = dyCorner.x;\n        int dyCCorner = dyCorner.y;\n\n        // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        for (int wR = 0; wR < ${t}; wR++) {\n          float dyR = float(dyRCorner + wR) / ${a}.0;\n\n          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {\n            continue;\n          }\n          int idyR = int(dyR);\n\n          int wRPerm = ${t} - 1 - wR;\n\n          for (int wC = 0; wC < ${n}; wC++) {\n            float dyC = float(dyCCorner + wC) / ${r}.0;\n\n            if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||\n                fract(dyC) > 0.0) {\n              continue;\n            }\n            int idyC = int(dyC);\n\n            int wCPerm = ${n} - 1 - wC;\n\n            for (int d2 = 0; d2 < ${e.outChannels}; d2++) {\n\n              if (${s}) {\n                float xValue = getDy(batch, idyR, idyC, d2);\n                float wValue = getW(wRPerm, wCPerm, d1, d2);\n                dotProd += xValue * wValue;\n              } else {\n                float xValue = getDy(batch, d2, idyR, idyC);\n                float wValue = getW(wRPerm, wCPerm, d1, d2);\n                dotProd += xValue * wValue;\n              }\n\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    `}}class Ro{constructor(e){this.variableNames=["x","dy"],this.outputShape=e.filterShape;const t=e.strideDepth,n=e.strideHeight,a=e.strideWidth,r=e.padInfo.front,s=e.padInfo.top,o=e.padInfo.left;this.userCode=`\n      void main() {\n        ivec5 coords = getOutputCoords();\n        int wF = coords.x;\n        int wR = coords.y;\n        int wC = coords.z;\n        int d1 = coords.w;\n        int d2 = coords.u;\n\n        float dotProd = 0.0;\n\n        for (int b = 0; b < ${e.batchSize}; b++) {\n          for (int yF = 0; yF < ${e.outDepth}; yF++) {\n            int xF = wF + yF * ${t} - ${r};\n\n            if (xF < 0 || xF >= ${e.inDepth}) {\n              continue;\n            }\n\n            for (int yR = 0; yR < ${e.outHeight}; yR++) {\n              int xR = wR + yR * ${n} - ${s};\n\n              if (xR < 0 || xR >= ${e.inHeight}) {\n                continue;\n              }\n\n              for (int yC = 0; yC < ${e.outWidth}; yC++) {\n                int xC = wC + yC * ${a} - ${o};\n\n                if (xC < 0 || xC >= ${e.inWidth}) {\n                  continue;\n                }\n\n                float dyValue = getDy(b, yF, yR, yC, d2);\n                float xValue = getX(b, xF, xR, xC, d1);\n                dotProd += (xValue * dyValue);\n              }\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    `}}class Eo{constructor(e){this.variableNames=["dy","W"],this.outputShape=e.inShape;const t=e.filterDepth,n=e.filterHeight,a=e.filterWidth,r=e.strideDepth,s=e.strideHeight,o=e.strideWidth,i=t-1-e.padInfo.front,u=n-1-e.padInfo.top,l=a-1-e.padInfo.left;this.userCode=`\n      const ivec3 pads = ivec3(${i}, ${u}, ${l});\n\n      void main() {\n        ivec5 coords = getOutputCoords();\n        int batch = coords.x;\n        int d1 = coords.u;\n\n\n        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;\n        int dyFCorner = dyCorner.x;\n        int dyRCorner = dyCorner.y;\n        int dyCCorner = dyCorner.z;\n\n        float dotProd = 0.0;\n        for (int wF = 0; wF < ${t}; wF++) {\n          float dyF = float(dyFCorner + wF) / ${r}.0;\n\n          if (dyF < 0.0 || dyF >= ${e.outDepth}.0 || fract(dyF) > 0.0) {\n            continue;\n          }\n          int idyF = int(dyF);\n\n          int wFPerm = ${t} - 1 - wF;\n\n          for (int wR = 0; wR < ${n}; wR++) {\n            float dyR = float(dyRCorner + wR) / ${s}.0;\n\n            if (dyR < 0.0 || dyR >= ${e.outHeight}.0 ||\n              fract(dyR) > 0.0) {\n              continue;\n            }\n            int idyR = int(dyR);\n\n            int wRPerm = ${n} - 1 - wR;\n\n            for (int wC = 0; wC < ${a}; wC++) {\n              float dyC = float(dyCCorner + wC) / ${o}.0;\n\n              if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||\n                  fract(dyC) > 0.0) {\n                continue;\n              }\n              int idyC = int(dyC);\n\n              int wCPerm = ${a} - 1 - wC;\n\n              for (int d2 = 0; d2 < ${e.outChannels}; d2++) {\n                float xValue = getDy(batch, idyF, idyR, idyC, d2);\n                float wValue = getW(wFPerm, wRPerm, wCPerm, d1, d2);\n                dotProd += xValue * wValue;\n              }\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    `}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function _o(e){const{inputs:t,backend:n,attrs:r}=e,{x:s,dy:o}=t,{strides:i,pad:u,dataFormat:l,dimRoundingMode:c,filterShape:p}=r,d=a.backend_util.convertConv2DDataFormat(l),h=a.backend_util.computeConv2DInfo(s.shape,p,i,1,u,c,!1,d),m=new ko(h);return n.runWebGLProgram(m,[s,o],"float32")}const Oo={kernelName:a.Conv2DBackpropFilter,backendName:"webgl",kernelFunc:_o};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Ao(e){const{inputs:t,backend:n,attrs:r}=e,{dy:s,filter:o}=t,{inputShape:i,strides:u,pad:l,dataFormat:c,dimRoundingMode:p}=r,d=a.backend_util.convertConv2DDataFormat(c),h=a.backend_util.computeConv2DInfo(i,o.shape,u,1,l,p,!1,d),m=new wo(h);return n.runWebGLProgram(m,[s,o],"float32")}const Fo={kernelName:a.Conv2DBackpropInput,backendName:"webgl",kernelFunc:Ao};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Do(e){const{inputs:t,backend:n,attrs:r}=e,{x:s,filter:o}=t,{strides:i,pad:u,dilations:l}=r,c=a.backend_util.computeConv3DInfo(s.shape,o.shape,i,l,u),p=new Co(c);return n.runWebGLProgram(p,[s,o],"float32")}const Lo={kernelName:a.Conv3D,backendName:"webgl",kernelFunc:Do};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Po(e){const{inputs:t,backend:n,attrs:r}=e,{x:s,dy:o}=t,{strides:i,pad:u,filterShape:l}=r,c=a.backend_util.computeConv3DInfo(s.shape,l,i,1,u),p=new Ro(c);return n.runWebGLProgram(p,[s,o],"float32")}const Vo={kernelName:a.Conv3DBackpropFilterV2,backendName:"webgl",kernelFunc:Po};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Mo(e){const{inputs:t,backend:n,attrs:r}=e,{dy:s,filter:o}=t,{pad:i,strides:u,inputShape:l}=r,c=a.backend_util.computeConv3DInfo(l,o.shape,u,1,i),p=new Eo(c);return n.runWebGLProgram(p,[s,o],"float32")}const Bo={kernelName:a.Conv3DBackpropInputV2,backendName:"webgl",kernelFunc:Mo},Uo=Ga+"\n  return cos(x);\n",Wo=ja({opSnippet:Uo}),zo={kernelName:a.Cos,backendName:"webgl",kernelFunc:Wo},Go="\n  float e2x = exp(-x);\n  return (e2x + 1.0 / e2x) / 2.0;\n",Ho=ja({opSnippet:Go}),Xo={kernelName:a.Cosh,backendName:"webgl",kernelFunc:Ho};
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
class jo{constructor(e,t,n,a,r){this.variableNames=["Image","Boxes","BoxInd"],this.outputShape=[];const[s,o,i,u]=e,[l]=t,[c,p]=n;this.outputShape=[l,c,p,u];const d="bilinear"===a?1:0,[h,m]=[o-1+".0",i-1+".0"],[f,x,g]=c>1?[""+(o-1)/(c-1),"(y2-y1) * height_ratio",`y1*${h} + float(y)*(height_scale)`]:["0.0","0.0",`0.5 * (y1+y2) * ${h}`],[y,b,v]=p>1?[""+(i-1)/(p-1),"(x2-x1) * width_ratio",`x1*${m} + float(x)*(width_scale)`]:["0.0","0.0",`0.5 * (x1+x2) * ${m}`];this.userCode=`\n      const float height_ratio = float(${f});\n      const float width_ratio = float(${y});\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int y = coords[1];\n        int x = coords[2];\n        int d = coords[3];\n\n        // get box vals\n        float y1 = getBoxes(b,0);\n        float x1 = getBoxes(b,1);\n        float y2 = getBoxes(b,2);\n        float x2 = getBoxes(b,3);\n\n        // get image in batch index\n        int bInd = round(getBoxInd(b));\n        if(bInd < 0 || bInd >= ${s}) {\n          return;\n        }\n\n        float height_scale = ${x};\n        float width_scale = ${b};\n\n        float in_y = ${g};\n        if( in_y < 0.0 || in_y > ${h} ) {\n          setOutput(float(${r}));\n          return;\n        }\n        float in_x = ${v};\n        if( in_x < 0.0 || in_x > ${m} ) {\n          setOutput(float(${r}));\n          return;\n        }\n\n        vec2 sourceFracIndexCR = vec2(in_x,in_y);\n        if(${d} == 1) {\n          // Compute the four integer indices.\n          ivec2 sourceFloorCR = ivec2(sourceFracIndexCR);\n          ivec2 sourceCeilCR = ivec2(ceil(sourceFracIndexCR));\n\n          float topLeft = getImage(b, sourceFloorCR.y, sourceFloorCR.x, d);\n          float bottomLeft = getImage(b, sourceCeilCR.y, sourceFloorCR.x, d);\n          float topRight = getImage(b, sourceFloorCR.y, sourceCeilCR.x, d);\n          float bottomRight = getImage(b, sourceCeilCR.y, sourceCeilCR.x, d);\n\n          vec2 fracCR = sourceFracIndexCR - vec2(sourceFloorCR);\n\n          float top = topLeft + (topRight - topLeft) * fracCR.x;\n          float bottom = bottomLeft + (bottomRight - bottomLeft) * fracCR.x;\n          float newValue = top + (bottom - top) * fracCR.y;\n          setOutput(newValue);\n        } else {\n          // Compute the coordinators of nearest neighbor point.\n          ivec2 sourceNearestCR = ivec2(floor(\n            sourceFracIndexCR + vec2(0.5,0.5)));\n          float newValue = getImage(b, sourceNearestCR.y, sourceNearestCR.x, d);\n          setOutput(newValue);\n        }\n      }\n    `}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const qo=e=>{const{inputs:t,backend:n,attrs:a}=e,{image:r,boxes:s,boxInd:o}=t,{cropSize:i,method:u,extrapolationValue:l}=a,c=new jo(r.shape,s.shape,i,u,l);return n.runWebGLProgram(c,[r,s,o],"float32")},Ko={kernelName:a.CropAndResize,backendName:"webgl",kernelFunc:qo};var Yo;(function(e){e["Prod"]="*",e["Sum"]="+"})(Yo||(Yo={}));class Qo{constructor(e,t,n,a){this.op=e,this.outputShape=t,this.variableNames=["x"],this.customUniforms=[{name:"index",type:"float"}];const r=this.outputShape.length,s=this.op===Yo.Prod?"1.0":"0.0",o=n?s:`getX(${Zo(r,"coords",this.op)})`,i=this.outputShape[this.outputShape.length-1];let u="",l="";n?(u=a?"end != "+(i-1):"end != 0",l=a?"end + 1":"end - 1"):(u=a?`end + pow2 < ${i}`:"end >= pow2",l=a?"end + pow2":"end - pow2"),this.userCode=`\n      void main() {\n        ${pt(r)} coords = getOutputCoords();\n        int end = ${Jo(r,"coords",this.op)};\n        float val = ${o};\n        int pow2 = int(pow(2.0, index));\n        if (${u}) {\n          int idx = ${l};\n          ${Jo(r,"coords",this.op)} = idx;\n          val ${this.op}= getX(${Zo(r,"coords",this.op)});\n        }\n        setOutput(val);\n      }\n    `}}function Zo(e,t,n){if(1===e)return`${t}`;if(2===e)return`${t}.x, ${t}.y`;if(3===e)return`${t}.x, ${t}.y, ${t}.z`;if(4===e)return`${t}.x, ${t}.y, ${t}.z, ${t}.w`;throw new Error(`Cumulative ${n} for rank ${e} is not yet supported`)}function Jo(e,t,n){if(1===e)return`${t}`;if(2===e)return`${t}.y`;if(3===e)return`${t}.z`;if(4===e)return`${t}.w`;throw new Error(`Cumulative ${n} for rank ${e} is not yet supported`)}
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
function ei(e,t,n,r,s,o){const i=t.shape.length,u=a.backend_util.getAxesPermutation([r],i);let l=t;null!=u&&(l=xr({inputs:{x:t},backend:n,attrs:{perm:u}}));const c=a.backend_util.getInnerMostAxes(1,i)[0];if(c!==i-1)throw new Error(`WebGL cumprod shader expects an inner-most axis=${t.shape.length-1} but got axis=${r}`);const p=l.shape[c];let d=Oa({inputs:{x:l},backend:n});for(let a=0;a<=Math.ceil(Math.log2(p))-1;a++){const t=new Qo(e,l.shape,!1,o),r=[[a]],s=d;d=n.runWebGLProgram(t,[d],d.dtype,r),n.disposeIntermediateTensorInfo(s)}if(s){const t=new Qo(e,l.shape,s,o),a=d;d=n.runWebGLProgram(t,[d],d.dtype),n.disposeIntermediateTensorInfo(a)}if(null!=u){const e=a.backend_util.getUndoAxesPermutation(u),t=xr({inputs:{x:d},backend:n,attrs:{perm:e}});return n.disposeIntermediateTensorInfo(d),n.disposeIntermediateTensorInfo(l),t}return d}
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
function ti(e){const{inputs:t,backend:n,attrs:a}=e,{x:r}=t,{axis:s,exclusive:o,reverse:i}=a;return ei(Yo.Prod,r,n,s,o,i)}const ni={kernelName:a.Cumprod,backendName:"webgl",kernelFunc:ti};
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
function ai(e){const{inputs:t,backend:n,attrs:a}=e,{x:r}=t,{axis:s,exclusive:o,reverse:i}=a;return ei(Yo.Sum,r,n,s,o,i)}const ri={kernelName:a.Cumsum,backendName:"webgl",kernelFunc:ai};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function si(e){const{inputs:t,backend:n,attrs:a}=e,{x:r,weights:s}=t,{size:o,binaryOutput:i}=a;if(1===r.shape.length){const e=n.readSync(r.dataId),t=n.readSync(s.dataId),a=Jt(e,t,s.dtype,s.shape,o);return n.makeTensorInfo([o],s.dtype,a)}if(2===r.shape.length){const e=n.bufferSync(r),t=n.bufferSync(s),a=en(e,t,o,i);return n.makeTensorInfo(a.shape,s.dtype,a.values)}throw new Error(`Error in denseBincount: input must be at most rank 2, but got rank${r.shape.length}.`)}const oi={kernelName:a.DenseBincount,backendName:"webgl",kernelFunc:si};
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
class ii{constructor(e,t,n){this.variableNames=["x"],this.outputShape=[],this.outputShape=e,this.blockSize=t,this.dataFormat=n,this.userCode=`\n    void main() {\n      ivec4 coords = getOutputCoords();\n      int b = coords[0];\n      int h = ${this.getHeightCoordString()};\n      int w = ${this.getWidthCoordString()};\n      int d = ${this.getDepthCoordString()};\n\n      int in_h = h / ${t};\n      int offset_h = imod(h, ${t});\n      int in_w = w / ${t};\n      int offset_w = imod(w, ${t});\n      int offset_d = (offset_h * ${t} + offset_w) *\n        ${this.getOutputDepthSize()};\n      int in_d = d + offset_d;\n\n      float result = ${this.getInputSamplingString()};\n      setOutput(result);\n    }\n  `}getHeightCoordString(){return"NHWC"===this.dataFormat?"coords[1]":"coords[2]"}getWidthCoordString(){return"NHWC"===this.dataFormat?"coords[2]":"coords[3]"}getDepthCoordString(){return"NHWC"===this.dataFormat?"coords[3]":"coords[1]"}getOutputDepthSize(){return"NHWC"===this.dataFormat?this.outputShape[3]:this.outputShape[1]}getInputSamplingString(){return"NHWC"===this.dataFormat?"getX(b, in_h, in_w, in_d)":"getX(b, in_d, in_h, in_w)"}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function ui(e){const{inputs:t,backend:n,attrs:a}=e,{x:r}=t,{blockSize:s,dataFormat:o}=a,i=r.shape[0],u="NHWC"===o?r.shape[1]:r.shape[2],l="NHWC"===o?r.shape[2]:r.shape[3],c="NHWC"===o?r.shape[3]:r.shape[1],p=u*s,d=l*s,h=c/(s*s),m="NHWC"===o?[i,p,d,h]:[i,h,p,d],f=new ii(m,s,o);return n.runWebGLProgram(f,[r],r.dtype)}const li={kernelName:a.DepthToSpace,backendName:"webgl",kernelFunc:ui};
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
class ci{constructor(e,t=!1,n=null,a=!1,r=!1){this.variableNames=["x","W"],this.customUniforms=[{name:"pads",type:"ivec2"},{name:"strides",type:"ivec2"},{name:"dilations",type:"ivec2"},{name:"inDims",type:"ivec2"}],this.outputShape=e.outShape,this.enableShapeUniforms=vt(this.outputShape.length);const s=e.filterHeight,o=e.filterWidth,i=e.outChannels/e.inChannels;let u="",l="";n&&(u=a?`float activation(float a) {\n          float b = getPreluActivationWeightsAtOutCoords();\n          ${n}\n        }`:r?`float activation(float a) {\n          float b = getLeakyreluAlphaAtOutCoords();\n          ${n}\n        }`:`\n          float activation(float x) {\n            ${n}\n          }\n        `,l="result = activation(result);");const c=t?"result += getBiasAtOutCoords();":"";t&&this.variableNames.push("bias"),a&&this.variableNames.push("preluActivationWeights"),r&&this.variableNames.push("leakyreluAlpha"),this.userCode=`\n      ${u}\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords.x;\n        ivec2 xRCCorner = coords.yz * strides - pads;\n        int d2 = coords.w;\n        int d1 = d2 / ${i};\n        int q = d2 - d1 * ${i};\n\n        int xRCorner = xRCCorner.x;\n        int xCCorner = xRCCorner.y;\n\n        // Convolve x(?, ?, d1) with w(:, :, d1, q) to get y(yR, yC, d2).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        // TO DO(dsmilkov): Flatten the two for loops and vec4 the operations.\n        for (int wR = 0; wR < ${s}; wR++) {\n          int xR = xRCorner + wR * dilations[0];\n\n          if (xR < 0 || xR >= inDims[0]) {\n            continue;\n          }\n\n          for (int wC = 0; wC < ${o}; wC++) {\n            int xC = xCCorner + wC * dilations[1];\n\n            if (xC < 0 || xC >= inDims[1]) {\n              continue;\n            }\n\n            float xVal = getX(batch, xR, xC, d1);\n            float wVal = getW(wR, wC, d1, q);\n            dotProd += xVal * wVal;\n          }\n        }\n\n        float result = dotProd;\n        ${c}\n        ${l}\n        setOutput(result);\n      }\n    `}}
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
class pi{constructor(e,t=!1,n=null,r=!1,s=!1){this.variableNames=["x","W"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"pads",type:"ivec2"},{name:"strides",type:"ivec2"},{name:"dilations",type:"ivec2"},{name:"inDims",type:"ivec2"}],this.outputShape=e.outShape,this.enableShapeUniforms=vt(this.outputShape.length);const o=e.outChannels/e.inChannels,i=e.padInfo.left,u=e.strideWidth,l=e.dilationWidth,c=e.filterHeight,p=e.filterWidth,d=p;let h="\n      int xR; int xC; int xCOffset;\n      vec4 wTexel; vec4 previous; vec4 final;";for(let a=0;a<p;a++)h+=`\n          vec4 xTexelC${2*a};\n          int xTexelC${2*a}Ready;\n          vec4 xTexelC${2*a+1};\n          int xTexelC${2*a+1}Ready;\n          vec4 xC${a};`;h+=`\n    for (int r = 0; r < ${c}; r++) {\n      `;for(let a=0;a<p;a++)h+=`\n          xTexelC${2*a} = vec4(0.0);\n          xTexelC${2*a}Ready = 0;\n          xTexelC${2*a+1} = vec4(0.0);\n          xTexelC${2*a+1}Ready = 0;\n          xC${a} = vec4(0.0);`;h+="\n        xR = xRCorner + r * dilations[0];\n        if (xR >=0 && xR < inDims[0]) {\n      ";for(let g=0;g<(d+1)/2;g++){const e=2*g;if(h+=`\n          xC = xCCorner + ${e*l};\n          `,1===u){if(e<p&&(i%2===1?(h+=`\n                xCOffset = xC + 1;\n                if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${e}Ready == 0) {\n                  xTexelC${e} = getX(batch, xR, xCOffset, d1);\n\n                  // Need to manually clear unused channels in case\n                  // we're reading from recycled texture.\n                  if (xCOffset + 1 >= inDims[1]) {\n                    xTexelC${e}.zw = vec2(0.0);\n                  }\n                  xTexelC${e}Ready = 1;\n                }\n              `,h+=1===l&&e>0?`\n                xC${e} = vec4(xTexelC${e-2}.zw, xTexelC${e}.xy);\n                `:`\n                  xCOffset = xC + 1 - 2;\n\n                  if (xCOffset >= 0 && xCOffset < inDims[1]) {\n                    previous = getX(batch, xR, xCOffset, d1);\n\n                    // Need to manually clear unused channels in case\n                    // we're reading from recycled texture.\n                    if (xCOffset + 1 >= inDims[1]) {\n                      previous.zw = vec2(0.0);\n                    }\n\n                    xC${e} = vec4(previous.zw, xTexelC${e}.xy);\n                  } else {\n                    xC${e} = vec4(0.0, 0.0, xTexelC${e}.xy);\n                  }\n                  `):h+=`\n                if (xC >= 0 && xC < inDims[1] && xTexelC${e}Ready == 0) {\n                  xTexelC${e} = getX(batch, xR, xC, d1);\n                  if (xC + 1 >= inDims[1]) {\n                    xTexelC${e}.zw = vec2(0.0);\n                  }\n                  xTexelC${e}Ready = 1;\n                }\n\n                xC${e} = xTexelC${e};\n                `,e+1<p)){const t=i%2===0?a.util.nearestLargerEven(l):l;l%2===0&&i%2===1||l%2!==0&&i%2!==1?(h+=`\n                  xCOffset = xC + imod(pads[1], 2) + ${t};\n\n                  if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${e+1}Ready == 0) {\n                    xTexelC${e+1} = getX(batch, xR, xCOffset, d1);\n\n                    // Need to manually clear unused channels in case\n                    // we're reading from recycled texture.\n                    if (xCOffset + 1 >= inDims[1]) {\n                      xTexelC${e+1}.zw = vec2(0.0);\n                    }\n                    xTexelC${e+1}Ready = 1;\n                  }\n                  `,l>1&&(h+=`\n                    xCOffset -= 2;\n                    if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${e}Ready == 0) {\n                      xTexelC${e} = getX(batch, xR, xCOffset, d1);\n                      xTexelC${e}Ready = 1;\n                    }\n                    `),h+=`\n                  xC${e+1} = vec4(xTexelC${e}.zw, xTexelC${e+1}.xy);\n                  `):h+=1===t?`\n                    xC${e+1} = xTexelC${e};\n                    `:`\n                    xCOffset = xC + ${t};\n\n                    if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${e+1}Ready == 0) {\n                      xTexelC${e+1} = getX(batch, xR, xCOffset, d1);\n                      if (xCOffset + 1 >= inDims[1]) {\n                        xTexelC${e+1}.zw = vec2(0.0);\n                      }\n                      xTexelC${e+1}Ready = 1;\n                    }\n\n                    xC${e+1} = xTexelC${e+1};\n                    `}}else e<p&&(i%2===1?(h+=`\n                xCOffset = xC + 1 - strides[1];\n                if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${e}Ready == 0) {\n                  xTexelC${e} = getX(batch, xR, xCOffset, d1);\n                  // Need to manually clear unused channels in case\n                  // we're reading from recycled texture.\n                  if (xCOffset + 1 >= inDims[1]) {\n                    xTexelC${e}.zw = vec2(0.0);\n                  }\n                  xTexelC${e}Ready = 1;\n                }\n\n                if(xC + 1 >= 0 && xC + 1 < inDims[1] && xTexelC${e+1}Ready == 0) {\n                  xTexelC${e+1} = getX(batch, xR, xC + 1, d1);\n                  // Need to manually clear unused channels in case\n                  // we're reading from recycled texture.\n                  if (xC + 2 >= inDims[1]) {\n                    xTexelC${e+1}.zw = vec2(0.0);\n                  }\n                  xTexelC${e+1}Ready = 1;\n                }\n\n                xC${e} = vec4(xTexelC${e}.zw, xTexelC${e+1}.zw);\n              `,e+1<p&&(h+=`\n                  final = vec4(0.0);\n                  xCOffset = xC + 1 + strides[1];\n                  if(xCOffset >= 0 && xCOffset < inDims[1]) {\n                    final = getX(batch, xR, xCOffset, d1);\n                  }\n                  xC${e+1} = vec4(xTexelC${e+1}.xy, final.xy);\n                `)):(h+=`\n                if(xC >= 0 && xC < inDims[1] && xTexelC${e}Ready == 0) {\n                  xTexelC${e} = getX(batch, xR, xC, d1);\n                  if (xC + 1 >= inDims[1]) {\n                    xTexelC${e}.zw = vec2(0.0);\n                  }\n                  xTexelC${e}Ready = 1;\n                }\n\n                xCOffset = xC + strides[1];\n                if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${e+1}Ready == 0) {\n                  xTexelC${e+1} = getX(batch, xR, xCOffset, d1);\n                  if (xCOffset + 1 >= inDims[1]) {\n                    xTexelC${e+1}.zw = vec2(0.);\n                  }\n                  xTexelC${e+1}Ready = 1;\n                }\n\n                xC${e} = vec4(\n                  xTexelC${e}.xy, xTexelC${e+1}.xy);\n              `,e+1<p&&(h+=`\n                  xC${e+1} = vec4(xTexelC${e}.zw, xTexelC${e+1}.zw);\n                `)));e<p&&(h+=`\n            wTexel = getW(r, ${e}, d1, q);\n            dotProd += xC${e} * vec4(wTexel.xz, wTexel.xz);\n          `,e+1<p&&(h+=`\n              wTexel = getW(r, ${e+1}, d1, q);\n              dotProd += xC${e+1} * vec4(wTexel.xz, wTexel.xz);\n            `))}h+="\n    }\n  ",h+="\n      }\n    ";let m="",f="";n&&(m=r?`vec4 activation(vec4 a) {\n          vec4 b = getPreluActivationWeightsAtOutCoords();\n          ${n}\n        }`:s?`vec4 activation(vec4 a) {\n          vec4 b = getLeakyreluAlphaAtOutCoords();\n          ${n}\n        }`:`vec4 activation(vec4 x) {\n          ${n}\n        }`,f="result = activation(result);");const x=t?"result += getBiasAtOutCoords();":"";t&&this.variableNames.push("bias"),r&&this.variableNames.push("preluActivationWeights"),s&&this.variableNames.push("leakyreluAlpha"),this.userCode=`\n      ${m}\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords.x;\n        ivec2 xRCCorner = coords.yz * strides - pads;\n        int d2 = coords.w;\n        int d1 = d2 / ${o};\n        int q = d2 - d1 * ${o};\n        int xRCorner = xRCCorner.x;\n        int xCCorner = xRCCorner.y;\n\n        //intialize dotProd with a small epsilon seems to reduce GPU accuracy loss.\n        vec4 dotProd = vec4(0.000000000000001);\n\n        ${h}\n\n        vec4 result = dotProd - vec4(0.000000000000001);\n        ${x}\n        ${f}\n        setOutput(result);\n      }\n    `}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function di(e){const{inputs:t,backend:n,attrs:r}=e,{x:s,filter:o}=t,{strides:i,pad:u,dilations:l,dimRoundingMode:c}=r;let p=l;null==p&&(p=[1,1]),a.util.assert(a.backend_util.eitherStridesOrDilationsAreOne(i,p),(()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${i} and dilations '${p}'`));const d=a.backend_util.computeConv2DInfo(s.shape,o.shape,i,p,u,c,!0);let h;h=(0,a.env)().getBool("WEBGL_PACK_DEPTHWISECONV")&&d.strideWidth<=2&&d.outChannels/d.inChannels===1?new pi(d):new ci(d);const m=[[d.padInfo.top,d.padInfo.left],[d.strideHeight,d.strideWidth],[d.dilationHeight,d.dilationWidth],[d.inHeight,d.inWidth]];return n.runWebGLProgram(h,[s,o],"float32",m)}const hi={kernelName:a.DepthwiseConv2dNative,backendName:"webgl",kernelFunc:di};
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
class mi{constructor(e){this.variableNames=["x","dy"],this.outputShape=e.filterShape;const t=e.strideHeight,n=e.strideWidth,a=e.padInfo.top,r=e.padInfo.left,s=e.outChannels/e.inChannels;this.userCode=`\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int wR = coords.x;\n        int wC = coords.y;\n        int d1 = coords.z;\n        int dm = coords.w;\n        int d2 = d1 * ${s} + dm;\n\n        float dotProd = 0.0;\n\n        // TO DO: Vec4 over the batch size\n        for (int b = 0; b < ${e.batchSize}; b++) {\n          for (int yR = 0; yR < ${e.outHeight}; yR++) {\n            int xR = wR + yR * ${t} - ${a};\n\n            if (xR < 0 || xR >= ${e.inHeight}) {\n              continue;\n            }\n\n            for (int yC = 0; yC < ${e.outWidth}; yC++) {\n              int xC = wC + yC * ${n} - ${r};\n\n              if (xC < 0 || xC >= ${e.inWidth}) {\n                continue;\n              }\n\n              float dyValue = getDy(b, yR, yC, d2);\n              float xValue = getX(b, xR, xC, d1);\n              dotProd += (xValue * dyValue);\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    `}}class fi{constructor(e){this.variableNames=["dy","W"],this.outputShape=e.inShape;const t=e.filterHeight,n=e.filterWidth,a=e.strideHeight,r=e.strideWidth,s=t-1-e.padInfo.top,o=n-1-e.padInfo.left,i=e.outChannels/e.inChannels;this.userCode=`\n      const ivec2 pads = ivec2(${s}, ${o});\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords[0];\n        int d1 = coords[3];\n        ivec2 dyCorner = coords.yz - pads;\n        int dyRCorner = dyCorner.x;\n        int dyCCorner = dyCorner.y;\n\n        float dotProd = 0.0;\n\n        for (int wR = 0; wR < ${t}; wR++) {\n          float dyR = float(dyRCorner + wR) / ${a}.0;\n\n          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {\n            continue;\n          }\n          int idyR = int(dyR);\n\n          int wRPerm = ${t} - 1 - wR;\n\n          for (int wC = 0; wC < ${n}; wC++) {\n            float dyC = float(dyCCorner + wC) / ${r}.0;\n\n            if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||\n                fract(dyC) > 0.0) {\n              continue;\n            }\n            int idyC = int(dyC);\n\n            int wCPerm = ${n} - 1 - wC;\n\n            // TO DO: Vec4 over the channelMul\n            for (int dm = 0; dm < ${i}; dm++) {\n              int d2 = d1 * ${i} + dm;\n              float xValue = getDy(batch, idyR, idyC, d2);\n              float wValue = getW(wRPerm, wCPerm, d1, dm);\n              dotProd += xValue * wValue;\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    `}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function xi(e){const{inputs:t,backend:n,attrs:r}=e,{x:s,dy:o}=t,{strides:i,dilations:u,pad:l,dimRoundingMode:c,filterShape:p}=r,d=a.backend_util.computeConv2DInfo(s.shape,p,i,u,l,c,!0),h=new mi(d);return n.runWebGLProgram(h,[s,o],"float32")}const gi={kernelName:a.DepthwiseConv2dNativeBackpropFilter,backendName:"webgl",kernelFunc:xi};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function yi(e){const{inputs:t,backend:n,attrs:r}=e,{dy:s,filter:o}=t,{strides:i,dilations:u,pad:l,dimRoundingMode:c,inputShape:p}=r,d=a.backend_util.computeConv2DInfo(p,o.shape,i,u,l,c,!0),h=new fi(d);return n.runWebGLProgram(h,[s,o],"float32")}const bi={kernelName:a.DepthwiseConv2dNativeBackpropInput,backendName:"webgl",kernelFunc:yi};
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
class vi{constructor(e){this.variableNames=["X"],this.outputShape=[e,e],this.userCode="\n      void main() {\n          ivec2 coords = getOutputCoords();\n          float val = coords[0] == coords[1] ? getX(coords[0]) : 0.0;\n          setOutput(val);\n      }\n    "}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Ci(e){const{inputs:t,backend:n}=e,{x:r}=t,s=[...r.shape,...r.shape],o=a.util.sizeFromShape(r.shape),i=ar({inputs:{x:r},backend:n,attrs:{shape:[o]}}),u=new vi(o),l=n.runWebGLProgram(u,[i],i.dtype),c=ar({inputs:{x:l},backend:n,attrs:{shape:s}});return n.disposeIntermediateTensorInfo(i),n.disposeIntermediateTensorInfo(l),c}const Ni={kernelName:a.Diag,backendName:"webgl",kernelFunc:Ci};
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
class Ti{constructor(e){this.variableNames=["x","W"],this.outputShape=e.outShape;const{inHeight:t,inWidth:n,padInfo:a,strideHeight:r,strideWidth:s,filterHeight:o,filterWidth:i,dilationHeight:u,dilationWidth:l}=e,{top:c,left:p}=a;this.userCode=`\n      const ivec2 strides = ivec2(${r}, ${s});\n      const ivec2 pads = ivec2(${c}, ${p});\n      const float neg_infinity = -3.4e38;\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords.x;\n        int d1 = coords.w;\n        ivec2 outTopLeftCorner =\n            coords.yz * strides - pads;\n        int hBeg = outTopLeftCorner.x;\n        int wBeg = outTopLeftCorner.y;\n\n        float curVal = neg_infinity;\n        for (int h = 0; h < ${o}; h++) {\n          int hIn = hBeg + h * ${u};\n\n          if (hIn >= 0 && hIn < ${t}) {\n            for (int w = 0; w < ${i}; w++) {\n              int wIn = wBeg + w * ${l};\n\n              if (wIn >= 0 && wIn < ${n}) {\n                float xVal = getX(batch, hIn, wIn, d1);\n                float wVal = getW(h, w, d1);\n\n                float val = xVal + wVal;\n                if (val > curVal) {\n                  curVal = val;\n                }\n              }\n            }\n          }\n        }\n\n        float result = curVal;\n        setOutput(result);\n      }\n    `}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function $i(e){const{inputs:t,backend:n,attrs:r}=e,{x:s,filter:o}=t,{strides:i,pad:u,dilations:l}=r,c=a.backend_util.computeDilation2DInfo(s.shape,o.shape,i,u,"NHWC",l);let p;const d=new Ti(c);p=n.runWebGLProgram(d,[s,o],"float32");const h=ar({inputs:{x:p},backend:n,attrs:{shape:c.outShape}});return n.disposeIntermediateTensorInfo(p),h}const Si={kernelName:a.Dilation2D,backendName:"webgl",kernelFunc:$i};
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
function Ii(e){const{inputs:t,backend:n,attrs:r}=e,{equation:s}=r,o=t,{allDims:i,summedDims:u,idDims:l}=a.backend_util.decodeEinsumEquation(s,o.length);a.backend_util.checkEinsumDimSizes(i.length,l,o);const{path:c,steps:p}=a.backend_util.getEinsumComputePath(u,l),d=p.length;let h=null,m=i.length;const f=[];for(let x=0;x<d;++x){for(const e of p[x]){const{permutationIndices:t,expandDims:r}=a.backend_util.getEinsumPermutation(m,l[e]);let s;a.backend_util.isIdentityPermutation(t)?s=o[e]:(s=xr({inputs:{x:o[e]},backend:n,attrs:{perm:t}}),f.push(s));const i=s.shape.slice();for(let e=0;e<r.length;++e)i.splice(r[e],0,1);a.util.arraysEqual(s.shape,i)||(s=ar({inputs:{x:s},backend:n,attrs:{shape:i}}),f.push(s)),null===h?h=s:(h=er({inputs:{a:s,b:h},backend:n}),f.push(h))}x<d-1&&(c[x]>=0&&(h=mr({inputs:{x:h},backend:n,attrs:{axis:c[x]-(i.length-m),keepDims:!1}}),f.push(h)),m--)}for(const a of f)a!==h&&n.disposeIntermediateTensorInfo(a);return h}const ki={kernelName:a.Einsum,backendName:"webgl",kernelFunc:Ii},wi="return (x >= 0.0) ? x : (exp(x) - 1.0);",Ri="\n  vec4 result;\n\n  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);\n  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);\n  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);\n  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);\n\n  return result;\n",Ei=ja({opSnippet:wi,packedOpSnippet:Ri}),_i={kernelName:a.Elu,backendName:"webgl",kernelFunc:Ei},Oi="return (b >= 1.0) ? a : a * (b + 1.0);",Ai="\n  vec4 bGTEZero = vec4(greaterThanEqual(b, vec4(0.)));\n  return (bGTEZero * a) + ((vec4(1.0) - bGTEZero) * (a * (b + vec4(1.0))));\n",Fi=e=>{const{inputs:t,backend:n}=e,{dy:r,y:s}=t,o=(0,a.env)().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new _a(Ai,r.shape,s.shape):new Ra(Oi,r.shape,s.shape);return n.runWebGLProgram(o,[r,s],r.dtype)},Di={kernelName:a.EluGrad,backendName:"webgl",kernelFunc:Fi},Li="\n  return vec4(equal(a, b));\n",Pi="return float(a == b);",Vi=qa({opSnippet:Pi,packedOpSnippet:Li,dtype:"bool",cpuKernelImpl:an}),Mi={kernelName:a.Equal,backendName:"webgl",kernelFunc:Vi},Bi=`\n  // Error function is calculated approximately with elementary function.\n  // See "Handbook of Mathematical Functions with Formulas,\n  // Graphs, and Mathematical Tables", Abramowitz and Stegun.\n  float p = ${a.backend_util.ERF_P};\n  float a1 = ${a.backend_util.ERF_A1};\n  float a2 = ${a.backend_util.ERF_A2};\n  float a3 = ${a.backend_util.ERF_A3};\n  float a4 = ${a.backend_util.ERF_A4};\n  float a5 = ${a.backend_util.ERF_A5};\n\n  float sign = sign(x);\n  x = abs(x);\n  float t = 1.0 / (1.0 + p * x);\n  return sign * (1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*exp(-x*x));\n`,Ui=ja({opSnippet:Bi}),Wi={kernelName:a.Erf,backendName:"webgl",kernelFunc:Ui},zi=Ga+"\n  return exp(x);\n",Gi="\n  vec4 result = exp(x);\n  bvec4 isNaN = isnan(x);\n  result.r = isNaN.r ? x.r : result.r;\n  result.g = isNaN.g ? x.g : result.g;\n  result.b = isNaN.b ? x.b : result.b;\n  result.a = isNaN.a ? x.a : result.a;\n\n  return result;\n",Hi=ja({opSnippet:zi,packedOpSnippet:Gi,cpuKernelImpl:rn,dtype:"float32"}),Xi={kernelName:a.Exp,backendName:"webgl",kernelFunc:Hi};
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
function ji(e){const{inputs:t,attrs:n,backend:r}=e,{dim:s}=n,{input:o}=t,i=o.shape.length,u=o.shape.slice();let l=s;return s<0&&(a.util.assert(-(i+1)<=s,(()=>`Axis must be in the interval [${-(i+1)}, ${i}]`)),l=i+s+1),u.splice(l,0,1),ar({inputs:{x:o},backend:r,attrs:{shape:u}})}const qi={kernelName:a.ExpandDims,backendName:"webgl",kernelFunc:ji},Ki="return exp(x) - 1.0;",Yi=ja({opSnippet:Ki,packedOpSnippet:Ki,cpuKernelImpl:sn}),Qi={kernelName:a.Expm1,backendName:"webgl",kernelFunc:Yi};
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
class Zi{constructor(e,t,n){this.variableNames=["real","imag"];const a=t[1];this.outputShape=t;const r=n?`2.0 * ${Math.PI}`:`-2.0 * ${Math.PI}`,s=n?`${a}.0`:"1.0";let o;if("real"===e)o="return real * expR - imag * expI;";else{if("imag"!==e)throw new Error(`FFT component must be either "real" or "imag", got ${e}.`);o="return real * expI + imag * expR;"}this.userCode=`\n      const float exponentMultiplier = ${r};\n\n      float unaryOpComplex(float real, float expR, float imag, float expI) {\n        ${o}\n      }\n\n      float mulMatDFT(int batch, int index) {\n        float indexRatio = float(index) / float(${a});\n        float exponentMultiplierTimesIndexRatio =\n            exponentMultiplier * indexRatio;\n\n        float result = 0.0;\n\n        for (int i = 0; i < ${a}; i++) {\n          // x = (-2|2 * PI / N) * index * i;\n          float x = exponentMultiplierTimesIndexRatio * float(i);\n          float expR = cos(x);\n          float expI = sin(x);\n          float real = getReal(batch, i);\n          float imag = getImag(batch, i);\n\n          result +=\n              unaryOpComplex(real, expR, imag, expI) / ${s};\n        }\n\n        return result;\n      }\n\n      void main() {\n        ivec2 coords = getOutputCoords();\n        setOutput(mulMatDFT(coords[0], coords[1]));\n      }\n    `}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Ji(e,t,n){const r=n.texData.get(e.dataId),s=a.util.sizeFromShape(e.shape),o=e.shape[e.shape.length-1],i=s/o,u=ar({inputs:{x:e},backend:n,attrs:{shape:[i,o]}}),l=u.shape,c=new Zi("real",l,t),p=new Zi("imag",l,t),d=[{dataId:r.complexTensorInfos.real.dataId,dtype:r.complexTensorInfos.real.dtype,shape:l},{dataId:r.complexTensorInfos.imag.dataId,dtype:r.complexTensorInfos.imag.dtype,shape:l}],h=n.runWebGLProgram(c,d,"float32"),m=n.runWebGLProgram(p,d,"float32"),f=Fa({inputs:{real:h,imag:m},backend:n});n.disposeIntermediateTensorInfo(h),n.disposeIntermediateTensorInfo(m);const x=ar({inputs:{x:f},backend:n,attrs:{shape:e.shape}});return n.disposeIntermediateTensorInfo(u),n.disposeIntermediateTensorInfo(f),x}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function eu(e){const{inputs:t,backend:n}=e,{input:a}=t;return Ji(a,!1,n)}const tu={kernelName:a.FFT,backendName:"webgl",kernelFunc:eu};
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
class nu{constructor(e,t){this.outputShape=[],this.customUniforms=[{name:"value",type:"float"}],this.variableNames=["x"],this.outputShape=e,this.userCode="\n      void main() {\n        // Input can be obtained from uniform value.\n        setOutput(value);\n      }\n    "}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function au(e){const{backend:t,attrs:n}=e,{shape:r,value:s}=n;let{dtype:o}=n;if(o=o||a.util.inferDtype(s),"string"===o){const e=a.util.getArrayFromDType(o,a.util.sizeFromShape(r));return e.fill(s),t.makeTensorInfo(r,o,e)}{const e=new nu(r,s),n=[[s]];return t.runWebGLProgram(e,[],o,n)}}const ru={kernelName:a.Fill,backendName:"webgl",kernelFunc:au};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class su{constructor(e){this.variableNames=["Image"],this.outputShape=[];const t=e[2];this.outputShape=e,this.userCode=`\n        void main() {\n          ivec4 coords = getOutputCoords();\n          int x = coords[2];\n\n          int coordX = ${t} - x - 1;\n          float outputValue;\n          if(coordX >= 0 && coordX < ${t}) {\n            outputValue = getImage(coords[0], coords[1], coordX, coords[3]);\n          } else {\n            outputValue = getImage(coords[0], coords[1], coords[2], coords[3]);\n          }\n          setOutput(outputValue);\n        }\n    `}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const ou={kernelName:a.FlipLeftRight,backendName:"webgl",kernelFunc:({inputs:e,backend:t})=>{const{image:n}=e,a=t,r=new su(n.shape),s=a.runWebGLProgram(r,[n],n.dtype);return s}},iu="return floor(x);",uu=ja({opSnippet:iu,packedOpSnippet:iu,cpuKernelImpl:on}),lu={kernelName:a.Floor,backendName:"webgl",kernelFunc:uu},cu="\n  float s = sign(a) * sign(b);\n  int ia = round(a);\n  int ib = round(b);\n  if (ib != 0) {\n    // Windows (D3D) wants guaranteed non-zero int division at compile-time.\n    return float(idiv(ia, ib, s));\n  } else {\n    return NAN;\n  }\n",pu="\n  ivec4 ia = round(a);\n  ivec4 ib = round(b);\n  bvec4 cond = notEqual(ib, ivec4(0));\n  ivec4 result = ivec4(0);\n  vec4 s = sign(a) * sign(b);\n\n  // Windows (D3D) wants guaranteed non-zero int division at compile-time.\n  if (cond[0]) {\n    result[0] = idiv(ia[0], ib[0], s[0]);\n  }\n  if (cond[1]) {\n    result[1] = idiv(ia[1], ib[1], s[1]);\n  }\n  if (cond[2]) {\n    result[2] = idiv(ia[2], ib[2], s[2]);\n  }\n  if (cond[3]) {\n    result[3] = idiv(ia[3], ib[3], s[3]);\n  }\n  return vec4(result);\n",du=qa({opSnippet:cu,packedOpSnippet:pu,dtype:"int32"}),hu={kernelName:a.FloorDiv,backendName:"webgl",kernelFunc:du};
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
class mu{constructor(e){this.variableNames=["A"];const t=fe(),[n,a]=e;this.outputShape=e,this.userCode=`\n      void main() {\n        ivec3 coords = getOutputCoords();\n        int texR = coords[0];\n        int texC = coords[1];\n        int depth = coords[2];\n        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${a}.0, ${n}.0);\n\n        vec4 values = ${t.texture2D}(A, uv);\n        float value;\n        if (depth == 0) {\n          value = values.r;\n        } else if (depth == 1) {\n          value = values.g;\n        } else if (depth == 2) {\n          value = values.b;\n        } else if (depth == 3) {\n          value = values.a;\n        }\n\n        setOutput(floor(value * 255.0 + 0.5));\n      }\n    `}}
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
class fu{constructor(e){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0;const t=fe(),[n,a]=e;this.outputShape=e,this.userCode=`\n      void main() {\n        ivec3 coords = getOutputCoords();\n        int texR = coords[0];\n        int texC = coords[1];\n        int depth = coords[2];\n\n        vec4 result = vec4(0.);\n\n        for(int row=0; row<=1; row++) {\n          for(int col=0; col<=1; col++) {\n            texC = coords[1] + row;\n            depth = coords[2] + col;\n\n            vec2 uv = (vec2(texC, texR) + halfCR) /\n                       vec2(${a}.0, ${n}.0);\n            vec4 values = ${t.texture2D}(A, uv);\n            float value;\n            if (depth == 0) {\n              value = values.r;\n            } else if (depth == 1) {\n              value = values.g;\n            } else if (depth == 2) {\n              value = values.b;\n            } else if (depth == 3) {\n              value = values.a;\n            }\n\n            result[row * 2 + col] = floor(value * 255.0 + 0.5);\n          }\n        }\n\n        ${t.output} = result;\n      }\n    `}}
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
const xu={kernelName:a.FromPixels,backendName:"webgl",kernelFunc:yu};let gu;function yu(e){const{inputs:t,backend:n,attrs:r}=e;let{pixels:s}=t;const{numChannels:o}=r,i="undefined"!==typeof HTMLVideoElement&&s instanceof HTMLVideoElement,u="undefined"!==typeof HTMLImageElement&&s instanceof HTMLImageElement,[l,c]=i?[s.videoWidth,s.videoHeight]:[s.width,s.height],d=[c,l],h=[c,l,o];(u||i)&&(null==gu&&(gu=document.createElement("canvas").getContext("2d")),gu.canvas.width=l,gu.canvas.height=c,gu.drawImage(s,0,0,l,c),s=gu.canvas);const m=n.makeTensorInfo(d,"int32");n.texData.get(m.dataId).usage=p.PIXELS,n.gpgpu.uploadPixelDataToTexture(n.getTexture(m.dataId),s);const f=(0,a.env)().getBool("WEBGL_PACK")?new fu(h):new mu(h),x=n.runWebGLProgram(f,[m],"int32");return n.disposeData(m.dataId),x}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function bu(e){const{inputs:t,backend:n,attrs:r}=e,{x:s,filter:o,bias:i,preluActivationWeights:u}=t,{strides:l,pad:c,dataFormat:p,dilations:d,dimRoundingMode:h,activation:m,leakyreluAlpha:f}=r,x=a.backend_util.convertConv2DDataFormat(p),g=a.backend_util.computeConv2DInfo(s.shape,o.shape,l,d,c,h,!1,x);let y;const b=[];if(1!==g.filterHeight||1!==g.filterWidth||1!==g.dilationHeight||1!==g.dilationWidth||1!==g.strideHeight||1!==g.strideWidth||"SAME"!==g.padInfo.type&&"VALID"!==g.padInfo.type)if((0,a.env)().getBool("WEBGL_CONV_IM2COL")&&1===s.shape[0])y=$o({x:s,filter:o,convInfo:g,backend:n,bias:i,activation:m,preluActivationWeights:u,leakyreluAlpha:f});else{const e=null!=i,t=null!=u,r="leakyrelu"===m,l=m?Ka(m,!1):null,c=new vo(g,e,l,t,r),d=[s,o],h=(e,t)=>{if("NCHW"===t&&1===e.shape.length&&1!==e.shape[0]){const t=ar({inputs:{x:e},backend:n,attrs:{shape:[e.shape[0],1,1]}});return b.push(t),t}return e};if(e&&d.push(h(i,p)),t&&d.push(h(u,p)),r){const e=n.makeTensorInfo([],"float32",a.util.createScalarValue(f,"float32"));d.push(e),b.push(e)}y=n.runWebGLProgram(c,d,"float32")}else y=To({x:s,filter:o,convInfo:g,backend:n,bias:i,activation:m,preluActivationWeights:u,leakyreluAlpha:f});const v=ar({inputs:{x:y},backend:n,attrs:{shape:g.outShape}});return b.push(y),b.forEach((e=>n.disposeIntermediateTensorInfo(e))),v}const vu={kernelName:a.FusedConv2D,backendName:"webgl",kernelFunc:bu};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Cu(e){const{inputs:t,backend:n,attrs:r}=e,{x:s,filter:o,bias:i,preluActivationWeights:u}=t,{strides:l,pad:c,dilations:p,dimRoundingMode:d,activation:h,leakyreluAlpha:m}=r,f=[];let x=p;null==x&&(x=[1,1]),a.util.assert(a.backend_util.eitherStridesOrDilationsAreOne(l,x),(()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${l} and dilations '${x}'`));const g=a.backend_util.computeConv2DInfo(s.shape,o.shape,l,x,c,d,!0),y=(0,a.env)().getBool("WEBGL_PACK_DEPTHWISECONV")&&g.strideWidth<=2&&g.outChannels/g.inChannels===1,b=h?Ka(h,y):null,v=[s,o],C=null!=i,N=null!=u,T="leakyrelu"===h;if(C&&v.push(i),N&&v.push(u),T){const e=n.makeTensorInfo([],"float32",a.util.createScalarValue(m,"float32"));v.push(e),f.push(e)}let $;$=y?new pi(g,C,b,N,T):new ci(g,C,b,N,T);const S=[[g.padInfo.top,g.padInfo.left],[g.strideHeight,g.strideWidth],[g.dilationHeight,g.dilationWidth],[g.inHeight,g.inWidth]],I=n.runWebGLProgram($,v,"float32",S);return f.forEach((e=>n.disposeIntermediateTensorInfo(e))),I}const Nu={kernelName:a.FusedDepthwiseConv2D,backendName:"webgl",kernelFunc:Cu};class Tu{constructor(e,t,n){this.sliceDim=e,this.strides=t,this.variableNames=["x","indices"],this.outputShape=n;const a=pt(t.length),r=pt(n.length),s=this.sliceDim>1?"strides[j]":"strides";this.userCode=`\n        ${a} strides = ${a}(${this.strides});\n         void main() {\n          ${r} coords = getOutputCoords();\n          int flattenIndex = 0;\n          for (int j = 0; j < ${this.sliceDim}; j++) {\n            int index = round(getIndices(coords[0], j));\n            flattenIndex += index * ${s};\n          }\n          setOutput(getX(flattenIndex, coords[1]));\n        }\n      `}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function $u(e){const{inputs:t,backend:n}=e,{params:r,indices:s}=t,o=s.shape,i=o[o.length-1],u=a.util.sizeFromShape(r.shape),[l,c,p,d]=a.backend_util.prepareAndValidate(r,s),h=ar({inputs:{x:s},backend:n,attrs:{shape:[c,i]}}),m=ar({inputs:{x:r},backend:n,attrs:{shape:[a.util.sizeFromShape(r.shape)/p,p]}});if(n.shouldExecuteOnCPU([r,s])||"string"===r.dtype){const e=n.readSync(s.dataId),t=n.bufferSync(r),a=un(e,t,r.dtype,c,i,p,d,r.shape,u);return n.makeTensorInfo(l,r.dtype,a.values)}const f=new Tu(i,d,[c,p]),x=n.runWebGLProgram(f,[m,h],m.dtype),g=ar({inputs:{x:x},backend:n,attrs:{shape:l}});return n.disposeIntermediateTensorInfo(h),n.disposeIntermediateTensorInfo(m),n.disposeIntermediateTensorInfo(x),g}const Su={kernelName:a.GatherNd,backendName:"webgl",kernelFunc:$u};
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
class Iu{constructor(e,t){this.variableNames=["A","indices"],this.outputShape=t,this.rank=t.length;const n=pt(this.rank),a=ku(e,2);this.userCode=`\n      void main() {\n        ${n} resRC = getOutputCoords();\n        int index = int(getIndices(resRC.x, resRC.z));\n        float inBounds = (index >= 0) && (index < ${e[2]}) ? 1.0 : 0.0;\n        setOutput(inBounds * getA(${a}));\n      }\n    `}}function ku(e,t){const n=["resRC.x","resRC.y","resRC.z","resRC.w"],a=[];for(let r=0;r<e.length;r++)2===r?a.push("index"):a.push(`${n[r]}`);return a.join()}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function wu(e){const{inputs:t,backend:n,attrs:r}=e,{x:s,indices:o}=t,{axis:i,batchDims:u}=r,l=a.util.parseAxisParam(i,s.shape)[0];if((0,a.env)().get("DEBUG")){const e=n.readSync(o.dataId),t=s.shape[l];for(let n=0;n<e.length;++n){const r=e[n];a.util.assert(r<=t-1&&r>=0,(()=>`GatherV2: the index value ${r} is not in [0, ${t-1}]`))}}const c=a.backend_util.segment_util.collectGatherOpShapeInfo(s,o,l,u),p=a.util.sizeFromShape(o.shape),d=[],h=ar({inputs:{x:s},backend:n,attrs:{shape:[c.batchSize,c.outerSize,c.dimSize,c.sliceSize]}}),m=ar({inputs:{x:o},backend:n,attrs:{shape:[c.batchSize,p/c.batchSize]}});d.push(h),d.push(m);const f=[c.batchSize,c.outerSize,p/c.batchSize,c.sliceSize];if(n.shouldExecuteOnCPU([s,o])||"string"===s.dtype){const e=n.bufferSync(m),t=n.bufferSync(h),a=ln(t,e,f);return d.forEach((e=>n.disposeIntermediateTensorInfo(e))),n.makeTensorInfo(c.outputShape,a.dtype,a.values)}const x=new Iu(h.shape,f),g=n.runWebGLProgram(x,[h,m],h.dtype);d.push(g);const y=ar({inputs:{x:g},backend:n,attrs:{shape:c.outputShape}});return d.forEach((e=>n.disposeIntermediateTensorInfo(e))),y}const Ru={kernelName:a.GatherV2,backendName:"webgl",kernelFunc:wu},Eu="return float(a > b);",_u="\n  return vec4(greaterThan(a, b));\n",Ou=qa({opSnippet:Eu,packedOpSnippet:_u,cpuKernelImpl:cn,dtype:"bool"}),Au={kernelName:a.Greater,backendName:"webgl",kernelFunc:Ou},Fu="return float(a >= b);",Du="\n  return vec4(greaterThanEqual(a, b));\n",Lu=qa({opSnippet:Fu,packedOpSnippet:Du,dtype:"bool",cpuKernelImpl:pn}),Pu={kernelName:a.GreaterEqual,backendName:"webgl",kernelFunc:Lu};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Vu(e){const{inputs:t,backend:n}=e,{input:a}=t;return Ji(a,!0,n)}const Mu={kernelName:a.IFFT,backendName:"webgl",kernelFunc:Vu},Bu="return float(!isnan(x) && !isinf(x));",Uu=ja({opSnippet:Bu,dtype:"bool"}),Wu={kernelName:a.IsFinite,backendName:"webgl",kernelFunc:Uu},zu="return float(isinf(x));",Gu=ja({opSnippet:zu,dtype:"bool"}),Hu={kernelName:a.IsInf,backendName:"webgl",kernelFunc:Gu},Xu="return float(isnan(x));",ju=ja({opSnippet:Xu,dtype:"bool"}),qu={kernelName:a.IsNan,backendName:"webgl",kernelFunc:ju},Ku="return float(a < b);",Yu="\n  return vec4(lessThan(a, b));\n",Qu=qa({opSnippet:Ku,packedOpSnippet:Yu,cpuKernelImpl:dn,dtype:"bool"}),Zu={kernelName:a.Less,backendName:"webgl",kernelFunc:Qu},Ju="return float(a <= b);",el="\n  return vec4(lessThanEqual(a, b));\n",tl=qa({opSnippet:Ju,packedOpSnippet:el,cpuKernelImpl:hn,dtype:"bool"}),nl={kernelName:a.LessEqual,backendName:"webgl",kernelFunc:tl};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function al(e){const{backend:t,attrs:n}=e,{start:a,stop:r,num:s}=n,o=mn(a,r,s);return t.makeTensorInfo([o.length],"float32",o)}const rl={kernelName:a.LinSpace,backendName:"webgl",kernelFunc:al},sl=Ga+"\n  return x < 0.0 ? 0./0. : log(x);\n",ol="\n  vec4 result = log(x);\n  bvec4 isNaN = isnan(x);\n  result.r = isNaN.r ? x.r : (x.r < 0.0 ? 0./0. : result.r);\n  result.g = isNaN.g ? x.g : (x.g < 0.0 ? 0./0. : result.g);\n  result.b = isNaN.b ? x.b : (x.b < 0.0 ? 0./0. : result.b);\n  result.a = isNaN.a ? x.a : (x.a < 0.0 ? 0./0. : result.a);\n  return result;\n",il=ja({opSnippet:sl,packedOpSnippet:ol,cpuKernelImpl:fn}),ul={kernelName:a.Log,backendName:"webgl",kernelFunc:il},ll=Ga+"\n  return log(1.0 + x);\n",cl=ja({opSnippet:ll}),pl={kernelName:a.Log1p,backendName:"webgl",kernelFunc:cl},dl="return float(a >= 1.0 && b >= 1.0);",hl="\n  return vec4(\n    vec4(greaterThanEqual(a, vec4(1.0))) *\n    vec4(greaterThanEqual(b, vec4(1.0))));\n",ml=qa({opSnippet:dl,packedOpSnippet:hl,dtype:"bool"}),fl={kernelName:a.LogicalAnd,backendName:"webgl",kernelFunc:ml},xl="return float(!(x >= 1.0));",gl=ja({opSnippet:xl}),yl={kernelName:a.LogicalNot,backendName:"webgl",kernelFunc:gl},bl="return float(a >= 1.0 || b >= 1.0);",vl="\n  return min(\n    vec4(greaterThanEqual(a, vec4(1.0))) +\n    vec4(greaterThanEqual(b, vec4(1.0))),\n    vec4(1.0));\n",Cl=qa({opSnippet:bl,packedOpSnippet:vl,dtype:"bool"}),Nl={kernelName:a.LogicalOr,backendName:"webgl",kernelFunc:Cl};
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
class Tl{constructor(e,t,n,a,r){this.variableNames=["x"],this.outputShape=[];const s=t,o=e[3]-1;let i;this.outputShape=e;const u=`float(${n}) + float(${a}) * sum`;i=.5===r?`inversesqrt(${u})`:1===r?`1.0/(${u})`:`exp(log(${u}) * float(-${r}));`,this.userCode=`\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int r = coords[1];\n        int c = coords[2];\n        int d = coords[3];\n        float x = getX(b, r, c, d);\n        float sum = 0.0;\n        for (int j = -${s}; j <= ${s}; j++) {\n          int idx = d + j;\n          if (idx >= 0 && idx <=  ${o}) {\n            float z = getX(b, r, c, idx);\n            sum += z * z;\n          }\n        }\n        float val = x * ${i};\n        setOutput(val);\n      }\n    `}}
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
class $l{constructor(e,t,n,a,r){this.variableNames=["x"],this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0;const s=t,o=e[3]-1;let i;this.outputShape=e;const u=`float(${n}) + float(${a}) * sum`;i=.5===r?`inversesqrt(${u})`:1===r?`1.0/(${u})`:`exp(log(${u}) * float(-${r}));`,this.userCode=`\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords.x;\n        int r = coords.y;\n        int c = coords.z;\n        int d = coords.w;\n\n        bool hasNextCol = d < ${this.outputShape[3]};\n        bool hasNextRow = c < ${this.outputShape[2]};\n\n        vec4 sum = vec4(0.);\n        vec4 xFragAtOutputCoords = getX(b, r, c, d);\n\n        vec4 xAtOutputCoords = vec4(\n          getChannel(xFragAtOutputCoords, vec2(c, d)),\n          hasNextCol ?\n            getChannel(xFragAtOutputCoords, vec2(c, d + 1)) : 0.0,\n          hasNextRow ?\n            getChannel(xFragAtOutputCoords , vec2(c + 1, d)) : 0.0,\n          (hasNextRow && hasNextCol) ?\n            getChannel(xFragAtOutputCoords, vec2(c + 1, d + 1)) : 0.0\n        );\n\n        int firstChannel = d - ${s};\n        vec2 cache = vec2(0.);\n        if(firstChannel >= 0){\n          vec4 firstChannelFrag = getX(b, r, c, firstChannel);\n          cache.x = getChannel(firstChannelFrag, vec2(c, firstChannel));\n            if(hasNextRow){\n              cache.y = getChannel(firstChannelFrag, vec2(c + 1, firstChannel));\n            }\n        }\n\n        ivec2 depth = ivec2(d, d + 1);\n        for (int j = - ${s}; j <= ${s}; j++) {\n          ivec2 idx = depth + j;\n          bvec2 aboveLowerBound = greaterThanEqual(idx, ivec2(0));\n          bvec2 belowUpperBound = lessThanEqual(idx, ivec2(${o}));\n\n          bool depthInRange = aboveLowerBound.x && belowUpperBound.x;\n          bool depthPlusOneInRange = aboveLowerBound.y && belowUpperBound.y;\n\n          if(depthInRange || depthPlusOneInRange){\n            vec4 z = vec4(0.);\n            vec4 xFragAtCurrentDepth;\n            z.xz = cache.xy;\n            if(depthPlusOneInRange && hasNextCol){\n              xFragAtCurrentDepth = idx.y != d ?\n                getX(b, r, c, idx.y) : xFragAtOutputCoords;\n              z.y = getChannel(xFragAtCurrentDepth, vec2(c, idx.y));\n              if(hasNextRow){\n                z.w = getChannel(xFragAtCurrentDepth, vec2(c + 1, idx.y));\n              }\n            }\n            cache.xy = z.yw;\n            sum += z * z;\n          }\n        }\n        vec4 result = xAtOutputCoords * ${i};\n        setOutput(result);\n      }\n    `}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const Sl=e=>{const{inputs:t,backend:n,attrs:r}=e,{x:s}=t,{depthRadius:o,bias:i,alpha:u,beta:l}=r,c=(0,a.env)().getBool("WEBGL_PACK_NORMALIZATION")?new $l(s.shape,o,i,u,l):new Tl(s.shape,o,i,u,l);return n.runWebGLProgram(c,[s],s.dtype)},Il={kernelName:a.LRN,backendName:"webgl",kernelFunc:Sl};
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
class kl{constructor(e,t,n,a,r){this.variableNames=["inputImage","outputImage","dy"],this.outputShape=[],this.outputShape=e,this.depth=e[3],this.depthRadius=t,this.bias=n,this.alpha=a,this.beta=r,this.userCode=`\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int r = coords[1];\n        int c = coords[2];\n\n        float result = 0.0;\n        for (int d = 0; d < ${this.depth}; ++d) {\n          int depthBegin = int(max(0.0, float(d - ${t})));\n          int depthEnd = int(min(float(${this.depth}),\n              float(d + ${t} + 1)));\n\n          const int MIN_DEPTH_BEGIN = 0;\n          const int MAX_DEPTH_END = ${this.depth};\n\n          float norm = 0.0;\n          for (int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k) {\n            if (k < depthBegin){\n              continue;\n            }\n            else if (k >= depthBegin && k < depthEnd) {\n              norm += getInputImage(b, r, c, k) * getInputImage(b, r, c, k);\n            }\n            else {\n              break;\n            }\n          }\n\n          norm = float(${a}) * norm + float(${n});\n\n          for(int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k){\n            if (k < depthBegin){\n              continue;\n            }\n            else if (k >= depthBegin && k < depthEnd){\n              float dyi = -2.0 * float(${a})\n                * float(${r})\n                * getInputImage(b ,r ,c, k) * getOutputImage(b, r, c, d)\n                / norm;\n              if (k == d) {\n                dyi += pow(norm, -1.0 * ${r});\n              }\n              if (k == coords[3]) {\n                dyi *= getDy(b, r, c, d);\n                result += dyi;\n              }\n            }\n            else {\n              break;\n            }\n          }\n      }\n      setOutput(result);\n      }\n    `}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const wl=e=>{const{inputs:t,backend:n,attrs:a}=e,{x:r,y:s,dy:o}=t,{depthRadius:i,bias:u,alpha:l,beta:c}=a,p=new kl(r.shape,i,u,l,c);return n.runWebGLProgram(p,[r,s,o],r.dtype)},Rl={kernelName:a.LRNGrad,backendName:"webgl",kernelFunc:wl};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function El(e,t,n,r){const s=a.util.sizeFromShape(t),o=a.util.sizeFromShape(e.shape),i=o/s,u=ar({inputs:{x:e},attrs:{shape:[i,s]},backend:r}),l=ur(u,e.dtype,"max",r),c=ar({inputs:{x:l},attrs:{shape:n},backend:r});return r.disposeIntermediateTensorInfo(u),r.disposeIntermediateTensorInfo(l),c}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function _l(e){const{inputs:t,backend:n,attrs:r}=e,{x:s}=t,{reductionIndices:o,keepDims:i}=r,u=s.shape.length,l=a.util.parseAxisParam(o,s.shape);let c=l;const p=a.backend_util.getAxesPermutation(c,u),d=null!=p,h=n.shouldExecuteOnCPU([s]);let m=s;if(d){if(h){const e=n.texData.get(m.dataId),t=e.values,a=new Array(u);for(let n=0;n<a.length;n++)a[n]=s.shape[p[n]];const r=Bn(t,s.shape,s.dtype,p,a);m=n.makeTensorInfo(a,s.dtype);const o=n.texData.get(m.dataId);o.values=r}else m=dr(s,p,n);c=a.backend_util.getInnerMostAxes(c.length,u)}a.backend_util.assertAxesAreInnerMostDims("max",c,u);const[f,x]=a.backend_util.computeOutAndReduceShapes(m.shape,c);let g,y=f;if(i&&(y=a.backend_util.expandShapeToKeepDim(f,l)),h){const e=n.texData.get(m.dataId),t=e.values,r=xn(t,a.util.sizeFromShape(x),y,s.dtype);g=n.makeTensorInfo(y,s.dtype);const o=n.texData.get(g.dataId);o.values=r}else g=El(m,x,y,n);return d&&n.disposeIntermediateTensorInfo(m),g}const Ol={kernelName:a.Max,backendName:"webgl",kernelFunc:_l},Al=wa+"\n  return max(a, b);\n",Fl="\n  vec4 result = vec4(max(a, b));\n  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));\n  "+Ea+"\n  return result;\n",Dl=qa({opSnippet:Al,packedOpSnippet:Fl,cpuKernelImpl:gn}),Ll={kernelName:a.Maximum,backendName:"webgl",kernelFunc:Dl};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Pl(e){const{inputs:t,backend:n,attrs:r}=e,{x:s}=t;he(s,"maxPool");const{filterSize:o,strides:i,pad:u,dimRoundingMode:l}=r,c=1;a.util.assert(a.backend_util.eitherStridesOrDilationsAreOne(i,c),(()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${i} and dilations '${c}'`));const p=a.backend_util.computePool2DInfo(s.shape,o,i,c,u,l);if(1===p.filterWidth&&1===p.filterHeight&&a.util.arraysEqual(p.inShape,p.outShape))return Oa({inputs:{x:s},backend:n});const d=new hs(p,"max",!1);return n.runWebGLProgram(d,[s],s.dtype)}const Vl={kernelName:a.MaxPool,backendName:"webgl",kernelFunc:Pl};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Ml(e){const{inputs:t,backend:n,attrs:r}=e,{x:s}=t,{filterSize:o,strides:i,pad:u,dataFormat:l,dimRoundingMode:c}=r,p=[1,1,1],d=a.backend_util.computePool3DInfo(s.shape,o,i,p,u,c,l),h=new ms(d,"max",!1);return n.runWebGLProgram(h,[s],s.dtype)}const Bl={kernelName:a.MaxPool3D,backendName:"webgl",kernelFunc:Ml};
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
class Ul{constructor(e){this.variableNames=["dy","maxPos"],this.outputShape=e.inShape;const t=e.strideHeight,n=e.strideWidth,a=e.dilationHeight,r=e.effectiveFilterHeight,s=e.effectiveFilterWidth,o=r-1-e.padInfo.top,i=s-1-e.padInfo.left,u=r*s-1;this.userCode=`\n      const ivec2 pads = ivec2(${o}, ${i});\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n\n        ivec2 dyRCCorner = coords.yz - pads;\n        int dyRCorner = dyRCCorner.x;\n        int dyCCorner = dyRCCorner.y;\n\n        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        for (int wR = 0; wR < ${r};\n          wR += ${a}) {\n          float dyR = float(dyRCorner + wR) / ${t}.0;\n\n          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {\n            continue;\n          }\n          int idyR = int(dyR);\n\n          for (int wC = 0; wC < ${s}; wC++) {\n            float dyC = float(dyCCorner + wC) / ${n}.0;\n\n            if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||\n                fract(dyC) > 0.0) {\n              continue;\n            }\n            int idyC = int(dyC);\n\n            float dyValue = getDy(b, idyR, idyC, d);\n            int maxPosValue = ${u} - int(getMaxPos(b, idyR, idyC, d));\n\n            // Get the current value, check it against the value from the\n            // position matrix.\n            int curPosValue = wR * ${s} + wC;\n            float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);\n\n            dotProd += dyValue * mask;\n          }\n        }\n        setOutput(dotProd);\n      }\n    `}}class Wl{constructor(e){this.variableNames=["dy","maxPos"],this.outputShape=e.inShape;const t=e.strideDepth,n=e.strideHeight,a=e.strideWidth,r=e.dilationDepth,s=e.dilationHeight,o=e.dilationWidth,i=e.effectiveFilterDepth,u=e.effectiveFilterHeight,l=e.effectiveFilterWidth,c=i-1-e.padInfo.front,p=u-1-e.padInfo.top,d=l-1-e.padInfo.left,h=i*u*l-1;this.userCode=`\n      const ivec3 pads = ivec3(${c}, ${p}, ${d});\n\n      void main() {\n        ivec5 coords = getOutputCoords();\n        int batch = coords.x;\n        int ch = coords.u;\n\n        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;\n        int dyDCorner = dyCorner.x;\n        int dyRCorner = dyCorner.y;\n        int dyCCorner = dyCorner.z;\n\n        // Convolve dy(?, ?, ?, ch) with pos mask(:, :, :, d) to get\n        // dx(xD, xR, xC, ch).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n\n        for (int wD = 0; wD < ${i};\n           wD += ${r}) {\n          float dyD = float(dyDCorner + wD) / ${t}.0;\n\n          if (dyD < 0.0 || dyD >= ${e.outDepth}.0 || fract(dyD) > 0.0) {\n            continue;\n          }\n          int idyD = int(dyD);\n\n          for (int wR = 0; wR < ${u};\n              wR += ${s}) {\n            float dyR = float(dyRCorner + wR) / ${n}.0;\n\n            if (dyR < 0.0 || dyR >= ${e.outHeight}.0 ||\n                fract(dyR) > 0.0) {\n              continue;\n            }\n            int idyR = int(dyR);\n\n            for (int wC = 0; wC < ${l};\n                wC += ${o}) {\n              float dyC = float(dyCCorner + wC) / ${a}.0;\n\n              if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||\n                  fract(dyC) > 0.0) {\n                continue;\n              }\n              int idyC = int(dyC);\n\n              float dyValue = getDy(batch, idyD, idyR, idyC, ch);\n              int maxPosValue = ${h} -\n                  int(getMaxPos(batch, idyD, idyR, idyC, ch));\n\n              // Get the current value, check it against the value from the\n              // position matrix.\n              int curPosValue =\n                  wD * ${u} * ${l} +\n                  wR * ${l} + wC;\n              float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);\n\n              dotProd += dyValue * mask;\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    `}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function zl(e){const{inputs:t,backend:n,attrs:r}=e,{dy:s,input:o}=t,i=o,{filterSize:u,strides:l,pad:c,dimRoundingMode:p}=r,d=[1,1,1],h=a.backend_util.computePool3DInfo(i.shape,u,l,d,c,p),m=new ms(h,"max",!0),f=n.runWebGLProgram(m,[i],i.dtype),x=new Wl(h),g=n.runWebGLProgram(x,[s,f],i.dtype);return n.disposeIntermediateTensorInfo(f),g}const Gl={kernelName:a.MaxPool3DGrad,backendName:"webgl",kernelFunc:zl};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Hl(e){const{inputs:t,backend:n,attrs:r}=e,{dy:s,input:o,output:i}=t,u=o;he([o,i],"maxPoolGrad");const{filterSize:l,strides:c,pad:p,dimRoundingMode:d}=r,h=a.backend_util.computePool2DInfo(u.shape,l,c,1,p,d),m=!0,f=new hs(h,"max",m),x=n.runWebGLProgram(f,[u],u.dtype),g=new Ul(h),y=n.runWebGLProgram(g,[s,x],u.dtype);return n.disposeIntermediateTensorInfo(x),y}const Xl={kernelName:a.MaxPoolGrad,backendName:"webgl",kernelFunc:Hl};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function jl(e,t,n,a){let r=new hs(n,"max",!1);const s=a.runWebGLProgram(r,[e],"float32");r=new hs(n,"max",!0,!0,t);const o=a.runWebGLProgram(r,[e],"float32");return[s,o]}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const ql={kernelName:a.MaxPoolWithArgmax,backendName:"webgl",kernelFunc:({inputs:e,attrs:t,backend:n})=>{const{x:r}=e,{filterSize:s,strides:o,pad:i,includeBatchInIndex:u}=t,l=n;a.util.assert(4===r.shape.length,(()=>`Error in maxPool: input must be rank 4 but got rank ${r.shape.length}.`));const c=[1,1];a.util.assert(a.backend_util.eitherStridesOrDilationsAreOne(o,c),(()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${o} and dilations '${c}'`));const p=a.backend_util.computePool2DInfo(r.shape,s,o,c,i),[d,h]=jl(r,u,p,l);return[d,h]}};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Kl(e,t,n,r){const s=a.util.sizeFromShape(t),o=a.util.sizeFromShape(e.shape),i=o/s,u=ar({inputs:{x:e},attrs:{shape:[i,s]},backend:r}),l=ur(u,"float32","mean",r),c=ar({inputs:{x:l},attrs:{shape:n},backend:r});return r.disposeIntermediateTensorInfo(u),r.disposeIntermediateTensorInfo(l),c}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const Yl={kernelName:a.Mean,backendName:"webgl",kernelFunc:({inputs:e,attrs:t,backend:n})=>{const{x:r}=e,{keepDims:s,axis:o}=t,i=n,u=r.shape.length,l=a.util.parseAxisParam(o,r.shape);let c=l;const p=a.backend_util.getAxesPermutation(c,u),d=null!=p,h=i.shouldExecuteOnCPU([r]),m=[];let f=r;if(d){if(h){const e=i.texData.get(f.dataId),t=e.values,n=new Array(u);for(let o=0;o<n.length;o++)n[o]=r.shape[p[o]];const a=Bn(t,r.shape,r.dtype,p,n);f=i.makeTensorInfo(n,r.dtype);const s=i.texData.get(f.dataId);s.values=a}else f=dr(r,p,i);m.push(f),c=a.backend_util.getInnerMostAxes(c.length,u)}a.backend_util.assertAxesAreInnerMostDims("sum",c,u);const[x,g]=a.backend_util.computeOutAndReduceShapes(f.shape,c);let y=x;s&&(y=a.backend_util.expandShapeToKeepDim(x,l));const b=Kl(f,g,y,i);for(const a of m)i.disposeIntermediateTensorInfo(a);return b}};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Ql(e){const{inputs:t,backend:n,attrs:r}=e,{x:s}=t,{axis:o,keepDims:i}=r,u=s.shape.length,l=a.util.parseAxisParam(o,s.shape);let c=l;const p=a.backend_util.getAxesPermutation(c,u);let d=s;null!=p&&(d=xr({inputs:{x:s},backend:n,attrs:{perm:p}}),c=a.backend_util.getInnerMostAxes(c.length,s.shape.length)),a.backend_util.assertAxesAreInnerMostDims("min",c,u);const[h,m]=a.backend_util.computeOutAndReduceShapes(d.shape,c),f=a.util.sizeFromShape(m),x=ar({inputs:{x:d},backend:n,attrs:{shape:[-1,f]}}),g=ur(x,x.dtype,"min",n);let y;if(i){const e=a.backend_util.expandShapeToKeepDim(h,l);y=ar({inputs:{x:g},backend:n,attrs:{shape:e}})}else y=ar({inputs:{x:g},backend:n,attrs:{shape:h}});return n.disposeIntermediateTensorInfo(x),n.disposeIntermediateTensorInfo(g),null!=p&&n.disposeIntermediateTensorInfo(d),y}const Zl={kernelName:a.Min,backendName:"webgl",kernelFunc:Ql},Jl=wa+"\n  return min(a, b);\n",ec="\n  vec4 result = vec4(min(a, b));\n  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));\n  "+Ea+"\n  return result;\n",tc=qa({opSnippet:Jl,packedOpSnippet:ec,cpuKernelImpl:yn}),nc={kernelName:a.Minimum,backendName:"webgl",kernelFunc:tc};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class ac{constructor(e,t,n){this.variableNames=["x"],this.outputShape=t.map(((t,n)=>t[0]+e[n]+t[1]));const a=e.length,r=pt(a),s=t.map((e=>e[0])).join(","),o=t.map(((t,n)=>t[0]+e[n])).join(","),i=["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,a),u="reflect"===n?0:1;this.userCode=1!==a?`\n      ${r} start = ${r}(${s});\n      ${r} end = ${r}(${o});\n\n      void main() {\n        ${r} outC = getOutputCoords();\n        for (int i = 0; i < ${a}; i++) {\n          if (outC[i] < start[i]) {\n            outC[i] = start[i] * 2 - outC[i] - ${u};\n          } else if(outC[i] >= end[i]) {\n            outC[i] = (end[i] - 1) * 2 - outC[i] + ${u};\n          }\n        }\n        ${r} coords = outC - start;\n        setOutput(getX(${i}));\n      }\n    `:`\n        int start = ${s};\n        int end = ${o};\n\n        void main() {\n          int outC = getOutputCoords();\n          if (outC < start) {\n            outC = start * 2 - outC - ${u};\n          } else if(outC >= end) {\n            outC = (end - 1) * 2 - outC + ${u};\n          }\n          setOutput(getX(outC - start));\n        }\n      `}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class rc{constructor(e,t,n){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t.map(((t,n)=>t[0]+e[n]+t[1]));const a=e.length,r=pt(a),s=t.map((e=>e[0])).join(","),o=t.map(((t,n)=>t[0]+e[n])).join(","),i=zn("rc",a),u=zn("source",a),l=`${i[a-1]} < ${this.outputShape[a-1]}`,c=1===a?"source":`vec2(${u.slice(-2).join()})`,p="reflect"===n?0:1;let d="";if(1===a){const e=`\n        ${r} source = rc;\n        if (source < start) {\n          source = start * 2 - source - ${p};\n        } else if (source >= end) {\n          source = (end - 1) * 2 - source + ${p};\n        }\n        source -= start;\n      `;d=`\n        ${r} rc = outputLoc;\n        ${e}\n        result[0] = getChannel(getX(${u.join()}), ${c});\n        ${i[a-1]} += 1;\n        if(${l}) {\n          ${e}\n          result[1] = getChannel(getX(${u.join()}), ${c});\n        }\n      `}else{const e=`\n        ${r} source = rc;\n        ${r} lt = ${r}(lessThan(source, start));\n        ${r} gte = ${r}(greaterThanEqual(source, end));\n        ${r} orig = 1 - (lt + gte);\n        source = orig * source +\n                lt * (start * 2 - source - ${p}) +\n                gte * ((end - 1) * 2 - source + ${p});\n        source -= start;\n      `;d=`\n        ${r} rc = outputLoc;\n        ${e}\n        result[0] = getChannel(getX(${u.join()}), ${c});\n        ${i[a-1]} += 1;\n        if(${l}) {\n          ${e}\n          result[1] = getChannel(getX(${u.join()}), ${c});\n        }\n        rc = outputLoc;\n        ${i[a-2]} += 1;\n        if(${i[a-2]} < ${this.outputShape[a-2]}) {\n          ${e}\n          result[2] = getChannel(getX(${u.join()}), ${c});\n          ${i[a-1]} += 1;\n          if(${l}) {\n            ${e}\n            result[3] = getChannel(getX(${u.join()}), ${c});\n          }\n        }\n      `}this.userCode=`\n      const ${r} start = ${r}(${s});\n      const ${r} end = ${r}(${o});\n\n      void main() {\n        ${r} outputLoc = getOutputCoords();\n        vec4 result = vec4(0.);\n        ${d}\n        setOutput(result);\n      }\n    `}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const sc=({inputs:e,backend:t,attrs:n})=>{const{x:r}=e,{paddings:s,mode:o}=n,i=(0,a.env)().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new rc(r.shape,s,o):new ac(r.shape,s,o),u=t.runWebGLProgram(i,[r],r.dtype);return u},oc={kernelName:a.MirrorPad,backendName:"webgl",kernelFunc:sc},ic="if (b == 0.0) return NAN;\n  return mod(a, b);",uc="\n  vec4 result = mod(a, b);\n  vec4 isNaN = vec4(equal(b, vec4(0.0)));\n  "+Ea+"\n  return result;\n",lc=qa({opSnippet:ic,packedOpSnippet:uc}),cc={kernelName:a.Mod,backendName:"webgl",kernelFunc:lc};
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
class pc{constructor(e,t,n){this.variableNames=["probs"],this.customUniforms=[{name:"seed",type:"float"}],this.outputShape=[e,n],this.userCode=`\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int batch = coords[0];\n\n        float r = random(seed);\n        float cdf = 0.0;\n\n        for (int i = 0; i < ${t-1}; i++) {\n          cdf += getProbs(batch, i);\n\n          if (r < cdf) {\n            setOutput(float(i));\n            return;\n          }\n        }\n\n        // If no other event happened, last event happened.\n        setOutput(float(${t-1}));\n      }\n    `}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const dc="\nif (a == b) {\n  return 1.0;\n};\nreturn a / b;",hc="\n  // vec4 one = vec4(equal(a, b));\n  // return one + (vec4(1.0) - one) * a / b;\n  vec4 result = a / b;\n  if(a.x == b.x) {\n    result.x = 1.;\n  }\n  if(a.y == b.y) {\n    result.y = 1.;\n  }\n  if(a.z == b.z) {\n    result.z = 1.;\n  }\n  if(a.w == b.w) {\n    result.w = 1.;\n  }\n\n  return result;\n",mc=qa({opSnippet:dc,packedOpSnippet:hc,checkOutOfBounds:!0}),fc={kernelName:a.RealDiv,backendName:"webgl",kernelFunc:mc},xc="return a - b;",gc=qa({opSnippet:xc,packedOpSnippet:xc,supportsComplex:!0,cpuKernelImpl:Pn}),yc={kernelName:a.Sub,backendName:"webgl",kernelFunc:gc};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function bc(e){const{inputs:t,backend:n,attrs:r}=e,{logits:s}=t,{dim:o}=r,i=a.util.parseAxisParam([o],s.shape),u=_l({inputs:{x:s},backend:n,attrs:{reductionIndices:i,keepDims:!1}}),l=a.backend_util.expandShapeToKeepDim(u.shape,i),c=ar({inputs:{x:u},backend:n,attrs:{shape:l}}),p=gc({inputs:{a:s,b:c},backend:n}),d=Hi({inputs:{x:p},backend:n}),h=mr({inputs:{x:d},backend:n,attrs:{axis:i,keepDims:!1}}),m=ar({inputs:{x:h},backend:n,attrs:{shape:l}}),f=mc({inputs:{a:d,b:m},backend:n});return n.disposeIntermediateTensorInfo(u),n.disposeIntermediateTensorInfo(c),n.disposeIntermediateTensorInfo(p),n.disposeIntermediateTensorInfo(d),n.disposeIntermediateTensorInfo(h),n.disposeIntermediateTensorInfo(m),f}const vc={kernelName:a.Softmax,backendName:"webgl",kernelFunc:bc};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Cc(e){const{inputs:t,backend:n,attrs:a}=e,{logits:r}=t,{numSamples:s,seed:o,normalized:i}=a,u=i?r:bc({inputs:{logits:r},backend:n,attrs:{dim:r.shape.length-1}}),l=u.shape[0],c=u.shape[1],p=new pc(l,c,s),d=[[o]],h=n.runWebGLProgram(p,[u],"int32",d);return i||n.disposeIntermediateTensorInfo(u),h}const Nc={kernelName:a.Multinomial,backendName:"webgl",kernelFunc:Cc},Tc=na+"\n  return -x;\n",$c="\n  vec4 result = -x;\n  bvec4 isNaN = isnan(x);\n\n  result.r = isNaN.r ? x.r : result.r;\n  result.g = isNaN.g ? x.g : result.g;\n  result.b = isNaN.b ? x.b : result.b;\n  result.a = isNaN.a ? x.a : result.a;\n\n  return result;\n";function Sc(e){const{inputs:t,backend:n}=e,{x:r}=t;if(n.shouldExecuteOnCPU([r])){const e=n.texData.get(r.dataId),[t,a]=vn(e.values,r.shape,r.dtype);return n.makeTensorInfo(a,r.dtype,t)}let s;return s=(0,a.env)().getBool("WEBGL_PACK_UNARY_OPERATIONS")?new fa(r.shape,$c):new ta(r.shape,Tc),n.runWebGLProgram(s,[r],r.dtype)}const Ic={kernelName:a.Neg,backendName:"webgl",kernelFunc:Sc},kc=a.kernel_impls.nonMaxSuppressionV3Impl;function wc(e){a.backend_util.warn("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");const{inputs:t,backend:n,attrs:r}=e,{boxes:s,scores:o}=t,{maxOutputSize:i,iouThreshold:u,scoreThreshold:l}=r,c=n.readSync(s.dataId),p=n.readSync(o.dataId),{selectedIndices:d}=kc(c,p,i,u,l);return n.makeTensorInfo([d.length],"int32",new Int32Array(d))}const Rc={kernelName:a.NonMaxSuppressionV3,backendName:"webgl",kernelFunc:wc},Ec=a.kernel_impls.nonMaxSuppressionV4Impl;function _c(e){a.backend_util.warn("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");const{inputs:t,backend:n,attrs:r}=e,{boxes:s,scores:o}=t,{maxOutputSize:i,iouThreshold:u,scoreThreshold:l,padToMaxOutputSize:c}=r,p=n.readSync(s.dataId),d=n.readSync(o.dataId),{selectedIndices:h,validOutputs:m}=Ec(p,d,i,u,l,c);return[n.makeTensorInfo([h.length],"int32",new Int32Array(h)),n.makeTensorInfo([],"int32",new Int32Array([m]))]}const Oc={kernelName:a.NonMaxSuppressionV4,backendName:"webgl",kernelFunc:_c},Ac=a.kernel_impls.nonMaxSuppressionV5Impl;function Fc(e){a.backend_util.warn("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");const{inputs:t,backend:n,attrs:r}=e,{boxes:s,scores:o}=t,{maxOutputSize:i,iouThreshold:u,scoreThreshold:l,softNmsSigma:c}=r,p=n.readSync(s.dataId),d=n.readSync(o.dataId),h=i,m=u,f=l,x=c,{selectedIndices:g,selectedScores:y}=Ac(p,d,h,m,f,x);return[n.makeTensorInfo([g.length],"int32",new Int32Array(g)),n.makeTensorInfo([y.length],"float32",new Float32Array(y))]}const Dc={kernelName:a.NonMaxSuppressionV5,backendName:"webgl",kernelFunc:Fc};
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
class Lc{constructor(e,t,n,a){this.variableNames=["indices"],this.outputShape=[e,t],this.userCode=`\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int index = round(getIndices(coords.x));\n        setOutput(mix(float(${a}), float(${n}),\n                      float(index == coords.y)));\n      }\n    `}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const Pc=e=>{const{inputs:t,backend:n,attrs:r}=e,{indices:s}=t,{depth:o,onValue:i,offValue:u}=r,l=a.util.sizeFromShape(s.shape),c=new Lc(l,o,i,u),p=ar({inputs:{x:s},backend:n,attrs:{shape:[l]}}),d=n.runWebGLProgram(c,[p],s.dtype);n.disposeIntermediateTensorInfo(p);const h=[...s.shape,o],m=ar({inputs:{x:d},backend:n,attrs:{shape:h}});return n.disposeIntermediateTensorInfo(d),m},Vc={kernelName:a.OneHot,backendName:"webgl",kernelFunc:Pc};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Mc(e){const{inputs:t,backend:n}=e,{x:a}=t;if("complex64"===a.dtype){const e=js({inputs:{input:a},backend:n}),t=Mc({inputs:{x:e},backend:n}),r=mo({inputs:{input:a},backend:n}),s=Mc({inputs:{x:r},backend:n}),o=Fa({inputs:{real:t,imag:s},backend:n});return n.disposeIntermediateTensorInfo(e),n.disposeIntermediateTensorInfo(t),n.disposeIntermediateTensorInfo(r),n.disposeIntermediateTensorInfo(s),o}return au({attrs:{shape:a.shape,dtype:a.dtype,value:"string"===a.dtype?"":0},backend:n})}const Bc={kernelName:a.ZerosLike,backendName:"webgl",kernelFunc:Mc};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Uc(e){const{inputs:t,backend:n}=e,{x:a}=t;if("string"===a.dtype)throw new Error("onesLike is not supported under string dtype");if("complex64"===a.dtype){const e=js({inputs:{input:a},backend:n}),t=Uc({inputs:{x:e},backend:n}),r=mo({inputs:{input:a},backend:n}),s=Mc({inputs:{x:r},backend:n}),o=Fa({inputs:{real:t,imag:s},backend:n});return n.disposeIntermediateTensorInfo(e),n.disposeIntermediateTensorInfo(t),n.disposeIntermediateTensorInfo(r),n.disposeIntermediateTensorInfo(s),o}return au({attrs:{shape:a.shape,dtype:a.dtype,value:1},backend:n})}const Wc={kernelName:a.OnesLike,backendName:"webgl",kernelFunc:Uc};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function zc(e){const{inputs:t,backend:n,attrs:r}=e,{axis:s}=r;if(1===t.length)return ji({inputs:{input:t[0]},backend:n,attrs:{dim:s}});const o=t[0].shape,i=t[0].dtype;t.forEach((e=>{a.util.assertShapesMatch(o,e.shape,"All tensors passed to stack must have matching shapes"),a.util.assert(i===e.dtype,(()=>"All tensors passed to stack must have matching dtypes"))}));const u=[],l=t.map((e=>{const t=ji({inputs:{input:e},backend:n,attrs:{dim:s}});return u.push(t),t})),c=yo({inputs:l,backend:n,attrs:{axis:s}});return u.forEach((e=>n.disposeIntermediateTensorInfo(e))),c}const Gc={kernelName:a.Pack,backendName:"webgl",kernelFunc:zc};
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
class Hc{constructor(e,t,n){this.variableNames=["x"],this.customUniforms=[{name:"value",type:"float"}],this.outputShape=t.map(((t,n)=>t[0]+e[n]+t[1]));const a=e.length,r=pt(a),s=t.map((e=>e[0])).join(","),o=t.map(((t,n)=>t[0]+e[n])).join(","),i=["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,a);this.userCode=1!==a?`\n      ${r} start = ${r}(${s});\n      ${r} end = ${r}(${o});\n\n      void main() {\n        ${r} outC = getOutputCoords();\n        if (any(lessThan(outC, start)) || any(greaterThanEqual(outC, end))) {\n          setOutput(value);\n        } else {\n          ${r} coords = outC - start;\n          setOutput(getX(${i}));\n        }\n      }\n    `:`\n        int start = ${s};\n        int end = ${o};\n\n        void main() {\n          int outC = getOutputCoords();\n          if (outC < start || outC >= end) {\n            setOutput(value);\n          } else {\n            setOutput(getX(outC - start));\n          }\n        }\n      `}}
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
class Xc{constructor(e,t,n){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"value",type:"float"}],this.outputShape=t.map(((t,n)=>t[0]+e[n]+t[1]));const a=e.length,r=pt(a),s=t.map((e=>e[0])).join(","),o=t.map(((t,n)=>t[0]+e[n])).join(","),i=zn("rc",a),u=zn("source",a),l=`${i[a-1]} < ${this.outputShape[a-1]}`,c=1===a?"source":`vec2(${u.slice(-2).join()})`,p=[`${r} rc = outputLoc;`,`${i[a-1]} += 1;\n       if(${l}) {\n      `,1===a?"":`}\n       rc = outputLoc;\n       ${i[a-2]} += 1;\n       if(${i[a-2]} < ${this.outputShape[a-2]}) {`,1===a?"":`  ${i[a-1]} += 1;\n         if(${l}) {`],d=1===a?"rc < start || rc >= end":"any(lessThan(rc, start)) || any(greaterThanEqual(rc, end))";let h="";for(let m=0,f=1===a?2:4;m<f;m++)h+=`\n        ${p[m]}\n        if (${d}) {\n          result[${m}] = float(value);\n        } else {\n          ${r} source = rc - start;\n          result[${m}] = getChannel(getX(${u.join()}), ${c});\n        }\n      `;h+=1===a?"} ":"}}",this.userCode=`\n      const ${r} start = ${r}(${s});\n      const ${r} end = ${r}(${o});\n\n      void main() {\n        ${r} outputLoc = getOutputCoords();\n        vec4 result = vec4(0.);\n        ${h}\n        setOutput(result);\n      }\n    `}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const jc=e=>{const{inputs:t,backend:n,attrs:r}=e,{x:s}=t,{paddings:o,constantValue:i}=r;if(0===a.util.sizeFromShape(s.shape)){const e=o.map(((e,t)=>e[0]+s.shape[t]+e[1]));return au({backend:n,attrs:{shape:e,value:i,dtype:s.dtype}})}const u=(0,a.env)().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new Xc(s.shape,o,i):new Hc(s.shape,o,i),l=[[i]];return n.runWebGLProgram(u,[s],s.dtype,l)},qc={kernelName:a.PadV2,backendName:"webgl",kernelFunc:jc},Kc="\n  if(a < 0.0 && floor(b) < b){\n    return NAN;\n  }\n  if (b == 0.0) {\n    return 1.0;\n  }\n  return (round(mod(b, 2.0)) != 1) ?\n      pow(abs(a), b) : sign(a) * pow(abs(a), b);\n",Yc="\n  // isModRound1 has 1 for components with round(mod(b, 2.0)) == 1, 0 otherwise.\n  vec4 isModRound1 = vec4(equal(round(mod(b, 2.0)), ivec4(1)));\n  vec4 multiplier = sign(a) * isModRound1 + (vec4(1.0) - isModRound1);\n  vec4 result = multiplier * pow(abs(a), b);\n\n  // Ensure that a^0 = 1, including 0^0 = 1 as this correspond to TF and JS\n  bvec4 isExpZero = equal(b, vec4(0.0));\n  result.r = isExpZero.r ? 1.0 : result.r;\n  result.g = isExpZero.g ? 1.0 : result.g;\n  result.b = isExpZero.b ? 1.0 : result.b;\n  result.a = isExpZero.a ? 1.0 : result.a;\n\n  vec4 isNaN = vec4(lessThan(a, vec4(0.0))) * vec4(lessThan(floor(b), b));\n  "+Ea+"\n  return result;\n",Qc=qa({opSnippet:Kc,packedOpSnippet:Yc}),Zc={kernelName:a.Pow,backendName:"webgl",kernelFunc:Qc};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Jc(e){const{inputs:t,backend:n,attrs:r}=e,{x:s}=t,{axis:o,keepDims:i}=r,u=s.shape.length,l=[],c=a.util.parseAxisParam(o,s.shape);let p=c;const d=a.backend_util.getAxesPermutation(p,u);let h,m=s;if(null!=d&&(m=xr({inputs:{x:s},backend:n,attrs:{perm:d}}),p=a.backend_util.getInnerMostAxes(p.length,u),l.push(m)),a.backend_util.assertAxesAreInnerMostDims("prod",p,u),n.shouldExecuteOnCPU([m])){const e=n.texData.get(m.dataId).values,{outVals:t,outShape:a,outDtype:r}=Nn(m.shape,m.dtype,e,p);h=n.makeTensorInfo(a,r,t)}else{const[e,t]=a.backend_util.computeOutAndReduceShapes(m.shape,p),r=a.util.sizeFromShape(t),o=ar({inputs:{x:m},backend:n,attrs:{shape:[-1,r]}}),i=(0,a.sumOutType)(s.dtype),u=ur(o,i,"prod",n);h=ar({inputs:{x:u},backend:n,attrs:{shape:e}}),l.push(o),l.push(u)}if(i){l.push(h);const e=a.backend_util.expandShapeToKeepDim(h.shape,c);h=ar({inputs:{x:h},backend:n,attrs:{shape:e}})}return l.forEach((e=>n.disposeIntermediateTensorInfo(e))),h}const ep={kernelName:a.Prod,backendName:"webgl",kernelFunc:Jc},tp=e=>{const{backend:t,attrs:n}=e,{start:a,stop:r,step:s,dtype:o}=n,i=Tn(a,r,s,o);return t.makeTensorInfo([i.length],o,i)},np={kernelName:a.Range,backendName:"webgl",kernelFunc:tp},ap="return 1.0 / x;",rp=ja({opSnippet:ap}),sp={kernelName:a.Reciprocal,backendName:"webgl",kernelFunc:rp},op=na+"\n  return (x < 0.0) ? 0.0 : x;\n",ip="\n  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));\n  bvec4 isNaN = isnan(x);\n\n  result.r = isNaN.r ? x.r : result.r;\n  result.g = isNaN.g ? x.g : result.g;\n  result.b = isNaN.b ? x.b : result.b;\n  result.a = isNaN.a ? x.a : result.a;\n\n  return result;\n",up=ja({opSnippet:op,packedOpSnippet:ip}),lp={kernelName:a.Relu,backendName:"webgl",kernelFunc:up},cp=na+"\n  return (x < 0.0) ? 0.0 : min(6.0, x);\n",pp="\n  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));\n  bvec4 isNaN = isnan(x);\n\n  result.r = isNaN.r ? x.r : result.r;\n  result.g = isNaN.g ? x.g : result.g;\n  result.b = isNaN.b ? x.b : result.b;\n  result.a = isNaN.a ? x.a : result.a;\n\n  return result;\n",dp=ja({opSnippet:cp,packedOpSnippet:pp}),hp={kernelName:a.Relu6,backendName:"webgl",kernelFunc:dp};
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
class mp{constructor(e,t,n,a,r){this.variableNames=["A"],this.outputShape=[];const[s,o,i,u]=e;this.outputShape=[s,t,n,u];const l=[a&&t>1?o-1:o,a&&n>1?i-1:i],c=[a&&t>1?t-1:t,a&&n>1?n-1:n];let p;p=r?"(vec2(yRC) + vec2(0.5)) * effectiveInputOverOutputRatioRC - vec2(0.5)":"vec2(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`\n      const vec2 effectiveInputOverOutputRatioRC = vec2(\n          ${l[0]/c[0]},\n          ${l[1]/c[1]});\n      const vec2 inputShapeRC = vec2(${o}.0, ${i}.0);\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        ivec2 yRC = coords.yz;\n\n        // Fractional source index.\n        vec2 sourceFracIndexRC = ${p};\n\n        // Compute the four integer indices.\n        ivec2 sourceFloorRC = ivec2(max(sourceFracIndexRC, vec2(0.0)));\n        ivec2 sourceCeilRC = ivec2(\n          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));\n\n        float topLeft = getA(b, sourceFloorRC.x, sourceFloorRC.y, d);\n        float bottomLeft = getA(b, sourceCeilRC.x, sourceFloorRC.y, d);\n        float topRight = getA(b, sourceFloorRC.x, sourceCeilRC.y, d);\n        float bottomRight = getA(b, sourceCeilRC.x, sourceCeilRC.y, d);\n\n        vec2 fracRC = sourceFracIndexRC - vec2(sourceFloorRC);\n\n        float top = topLeft + (topRight - topLeft) * fracRC.y;\n        float bottom = bottomLeft + (bottomRight - bottomLeft) * fracRC.y;\n        float newValue = top + (bottom - top) * fracRC.x;\n\n        setOutput(newValue);\n      }\n    `}}
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
class fp{constructor(e,t,n,a,r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];const[s,o,i,u]=e;this.outputShape=[s,t,n,u];const l=[a&&t>1?o-1:o,a&&n>1?i-1:i],c=[a&&t>1?t-1:t,a&&n>1?n-1:n];let p;p=r?"(vec3(yRC) + vec3(0.5)) * effectiveInputOverOutputRatioRC - vec3(0.5)":"vec3(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`\n      const vec3 effectiveInputOverOutputRatioRC = vec3(\n          ${l[0]/c[0]},\n          ${l[1]/c[1]},\n          ${l[1]/c[1]});\n      const vec3 inputShapeRC = vec3(${o}.0, ${i}.0,\n                                     ${i}.0);\n\n      float getAValue(int b, int r, int c, int d) {\n        return getChannel(getA(b, r, c, d), vec2(c, d));\n      }\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        // Calculate values for next column in yRC.z.\n        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);\n\n        // Fractional source index.\n        vec3 sourceFracIndexRC = ${p};\n\n        // Compute the four integer indices.\n        ivec3 sourceFloorRC = ivec3(max(sourceFracIndexRC, vec3(0.0)));\n        ivec3 sourceCeilRC = ivec3(\n          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));\n\n        // Should we calculate next column and row elements in 2x2 packed cell.\n        bool hasNextCol = d < ${u-1};\n        bool hasNextRow = coords.z < ${n-1};\n\n        // In parallel, construct four corners for all four components in\n        // packed 2x2 cell.\n        vec4 topLeft = vec4(\n          getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d),\n          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d + 1)\n                     : 0.0,\n          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d)\n                     : 0.0,\n          (hasNextRow && hasNextCol) ?\n            getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d + 1) : 0.0);\n\n        vec4 bottomLeft = vec4(\n          getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d),\n          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d + 1)\n                     : 0.0,\n          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d)\n                     : 0.0,\n          (hasNextRow && hasNextCol) ?\n            getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d + 1) : 0.0);\n\n        vec4 topRight = vec4(\n          getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d),\n          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d + 1)\n                     : 0.0,\n          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d)\n                     : 0.0,\n          (hasNextRow && hasNextCol) ?\n            getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d + 1) : 0.0);\n\n        vec4 bottomRight = vec4(\n          getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d),\n          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d + 1)\n                     : 0.0,\n          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d)\n                     : 0.0,\n          (hasNextRow && hasNextCol) ?\n            getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d + 1) : 0.0);\n\n        vec3 fracRC = sourceFracIndexRC - vec3(sourceFloorRC);\n\n        vec4 top = mix(topLeft, topRight, fracRC.yyzz);\n        vec4 bottom = mix(bottomLeft, bottomRight, fracRC.yyzz);\n        vec4 newValue = mix(top, bottom, fracRC.x);\n\n        setOutput(newValue);\n      }\n    `}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function xp(e){const{inputs:t,backend:n,attrs:r}=e,{images:s}=t,{alignCorners:o,halfPixelCenters:i,size:u}=r,[l,c]=u,p=(0,a.env)().getBool("WEBGL_PACK_IMAGE_OPERATIONS")?new fp(s.shape,l,c,o,i):new mp(s.shape,l,c,o,i);return n.runWebGLProgram(p,[s],"float32")}const gp={kernelName:a.ResizeBilinear,backendName:"webgl",kernelFunc:xp};
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
class yp{constructor(e,t,n){this.variableNames=["dy"],this.outputShape=[],this.outputShape=t;const[,a,r]=t,[,s,o]=e,i=[n&&s>1?a-1:a,n&&o>1?r-1:r],u=[n&&s>1?s-1:s,n&&o>1?o-1:o],l=i[0]/u[0],c=i[1]/u[1],p=1/l,d=1/c,h=2*Math.ceil(p)+2,m=2*Math.ceil(d)+2;this.userCode=`\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        int r = coords[1];\n        int c = coords[2];\n\n        float accumulator = 0.0;\n\n        const float heightScale = float(${l});\n        const float widthScale = float(${c});\n\n        const float invHeightScale = float(${p});\n        const float invWidthScale = float(${d});\n\n        const int winHeight = int(${h});\n        const int winWidth = int(${m});\n\n        // Compute bounds for where in dy we will look\n        float startRLerp = floor(float(r) * invHeightScale);\n        int startDyR = int(startRLerp - float(winHeight / 2));\n\n        float startCLerp = floor(float(c) * invWidthScale);\n        int startDyC = int(startCLerp - float(winWidth / 2));\n\n        // Loop over dy\n        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {\n          int dyR = dyROffset + startDyR;\n\n          // Guard against the window exceeding the bounds of dy\n          if (dyR < 0 || dyR >= ${s}) {\n            continue;\n          }\n\n          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {\n            int dyC = dyCOffset + startDyC;\n\n            // Guard against the window exceeding the bounds of dy\n            if (dyC < 0 || dyC >= ${o}) {\n              continue;\n            }\n\n            float dxR = float(dyR) * heightScale;\n            int topDxRIndex = int(floor(dxR));\n            int bottomDxRIndex = int(min(ceil(dxR), ${a-1}.0));\n            float dxRLerp = dxR - float(topDxRIndex);\n            float inverseDxRLerp = 1.0 - dxRLerp;\n\n            float dxC = float(dyC) * widthScale;\n            int leftDxCIndex = int(floor(dxC));\n            int rightDxCIndex = int(min(ceil(dxC), ${r-1}.0));\n            float dxCLerp = dxC - float(leftDxCIndex);\n            float inverseDxCLerp = 1.0 - dxCLerp;\n\n            if (r == topDxRIndex && c == leftDxCIndex) {\n              // topLeft\n              accumulator +=\n                getDy(b, dyR, dyC, d) * inverseDxRLerp * inverseDxCLerp;\n            }\n\n            if (r == topDxRIndex && c == rightDxCIndex) {\n              // topRight\n              accumulator += getDy(b, dyR, dyC, d) * inverseDxRLerp * dxCLerp;\n            }\n\n            if (r == bottomDxRIndex && c == leftDxCIndex) {\n              // bottomLeft\n              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * inverseDxCLerp;\n            }\n\n            if (r == bottomDxRIndex && c == rightDxCIndex) {\n              // bottomRight\n              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * dxCLerp;\n            }\n          }\n        }\n        // End loop over dy\n\n        setOutput(accumulator);\n      }\n    `}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function bp(e){const{inputs:t,backend:n,attrs:a}=e,{images:r,dy:s}=t,{alignCorners:o}=a,i=new yp(s.shape,r.shape,o);return n.runWebGLProgram(i,[s],s.dtype)}const vp={kernelName:a.ResizeBilinearGrad,backendName:"webgl",kernelFunc:bp};
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
class Cp{constructor(e,t,n,a,r){this.variableNames=["A"],this.outputShape=[];const[s,o,i,u]=e;this.outputShape=[s,t,n,u];const l=[a&&t>1?o-1:o,a&&n>1?i-1:i],c=[a&&t>1?t-1:t,a&&n>1?n-1:n],p=a?"0.5":"0.0";let d;d=r?"max((vec2(yRC) + vec2(0.5)) * effectiveInputOverOutputRatioRC, vec2(0.0))":"vec2(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`\n      const vec2 effectiveInputOverOutputRatioRC = vec2(\n          ${l[0]/c[0]},\n          ${l[1]/c[1]});\n      const vec2 inputShapeRC = vec2(${o}.0, ${i}.0);\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        ivec2 yRC = coords.yz;\n\n        // Fractional source index.\n        vec2 sourceFracIndexRC = ${d};\n\n        // Compute the coordinators of nearest neighbor point.\n        ivec2 sourceNearestRC = ivec2(\n          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + ${p})));\n        float newValue = getA(b, sourceNearestRC.x, sourceNearestRC.y, d);\n\n        setOutput(newValue);\n      }\n    `}}
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
class Np{constructor(e,t,n,a,r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];const[s,o,i,u]=e;this.outputShape=[s,t,n,u];const l=[a&&t>1?o-1:o,a&&n>1?i-1:i],c=[a&&t>1?t-1:t,a&&n>1?n-1:n],p=a?"0.5":"0.0";let d;d=r?"max((vec3(yRC) + vec3(0.5)) * effectiveInputOverOutputRatioRC, vec3(0.0))":"vec3(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`\n      const vec3 effectiveInputOverOutputRatioRC = vec3(\n          ${l[0]/c[0]},\n          ${l[1]/c[1]},\n          ${l[1]/c[1]});\n      const vec3 inputShapeRC = vec3(${o}.0, ${i}.0,\n                                     ${i}.0);\n\n      float getAValue(int b, int r, int c, int d) {\n        return getChannel(getA(b, r, c, d), vec2(c, d));\n      }\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        // Calculate values for next column in yRC.z.\n        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);\n\n        // Fractional source index.\n        vec3 sourceFracIndexRC = ${d};\n\n        // Compute the coordinators of nearest neighbor point.\n        ivec3 sourceNearestRC = ivec3(\n          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + ${p})));\n\n        // Should we calculate next column and row elements in 2x2 packed cell.\n        bool hasNextCol = d < ${u-1};\n        bool hasNextRow = coords.z < ${n-1};\n\n        vec4 newValue = vec4(\n          getAValue(b, sourceNearestRC.x, sourceNearestRC.y, d),\n          hasNextCol ? getAValue(b, sourceNearestRC.x, sourceNearestRC.y, d + 1)\n                     : 0.0,\n          hasNextRow ? getAValue(b, sourceNearestRC.x, sourceNearestRC.z, d)\n                     : 0.0,\n          (hasNextRow && hasNextCol) ?\n            getAValue(b, sourceNearestRC.x, sourceNearestRC.z, d + 1) : 0.0);\n\n        setOutput(newValue);\n      }\n    `}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Tp(e){const{inputs:t,backend:n,attrs:r}=e,{images:s}=t,{alignCorners:o,halfPixelCenters:i,size:u}=r,[l,c]=u,p=(0,a.env)().getBool("WEBGL_PACK_IMAGE_OPERATIONS")?new Np(s.shape,l,c,o,i):new Cp(s.shape,l,c,o,i);return n.runWebGLProgram(p,[s],s.dtype)}const $p={kernelName:a.ResizeNearestNeighbor,backendName:"webgl",kernelFunc:Tp};
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
class Sp{constructor(e,t,n){this.variableNames=["dy"],this.outputShape=[],this.outputShape=t;const[,a,r]=t,[,s,o]=e,i=[n&&s>1?a-1:a,n&&o>1?r-1:r],u=[n&&s>1?s-1:s,n&&o>1?o-1:o],l=i[0]/u[0],c=i[1]/u[1],p=1/l,d=1/c,h=2*Math.ceil(p)+2,m=2*Math.ceil(d)+2;this.userCode=`\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        int r = coords[1];\n        int c = coords[2];\n\n        float accumulator = 0.0;\n\n        const float heightScale = float(${l});\n        const float widthScale = float(${c});\n\n        const float invHeightScale = float(${p});\n        const float invWidthScale = float(${d});\n\n        const int winHeight = int(${h});\n        const int winWidth = int(${m});\n\n        // Compute bounds for where in dy we will look\n        float startRLerp = floor(float(r) * invHeightScale);\n        int startDyR = int(floor(startRLerp - float(winHeight / 2)));\n\n        float startCLerp = floor(float(c) * invWidthScale);\n        int startDyC = int(floor(startCLerp - float(winWidth / 2)));\n\n        // Loop over dy\n        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {\n          int dyR = dyROffset + startDyR;\n\n          // Guard against the window exceeding the bounds of dy\n          if (dyR < 0 || dyR >= ${s}) {\n            continue;\n          }\n\n          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {\n            int dyC = dyCOffset + startDyC;\n\n            // Guard against the window exceeding the bounds of dy\n            if (dyC < 0 || dyC >= ${o}) {\n              continue;\n            }\n\n            float sourceFracRow =\n              float(${i[0]}) *\n                (float(dyR) / float(${u[0]}));\n\n            float sourceFracCol =\n                float(${i[1]}) *\n                  (float(dyC) / float(${u[1]}));\n\n            int sourceNearestRow = int(min(\n                float(int(${a}) - 1),\n                ${n} ? float(round(sourceFracRow)) :\n                                  float(floor(sourceFracRow))));\n\n            int sourceNearestCol = int(min(\n                float(int(${r}) - 1),\n                ${n} ? float(round(sourceFracCol)) :\n                                  float(floor(sourceFracCol))));\n\n            if (r == sourceNearestRow && c == sourceNearestCol) {\n              accumulator += getDy(b, dyR, dyC, d);\n            }\n          }\n        }\n        // End loop over dy\n\n        setOutput(accumulator);\n      }\n    `}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Ip(e){const{inputs:t,backend:n,attrs:a}=e,{images:r,dy:s}=t,{alignCorners:o}=a,i=new Sp(s.shape,r.shape,o);return n.runWebGLProgram(i,[s],s.dtype)}const kp={kernelName:a.ResizeNearestNeighborGrad,backendName:"webgl",kernelFunc:Ip};
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
class wp{constructor(e,t){this.variableNames=["x"];const n=e.length;if(n>4)throw new Error(`WebGL backend: Reverse of rank-${n} tensor is not yet supported`);if(this.outputShape=e,1===n)return void(this.userCode=`\n        void main() {\n          int coord = getOutputCoords();\n          setOutput(getX(${e[0]} - coord - 1));\n        }\n      `);const a=n=>-1!==t.indexOf(n)&&1!==e[n]?`${e[n]} - coords[${n}] - 1`:`coords[${n}]`,r=e.map(((e,t)=>a(t))).join(","),s=pt(n);this.userCode=`\n      void main() {\n        ${s} coords = getOutputCoords();\n        setOutput(getX(${r}));\n      }\n    `}}
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
class Rp{constructor(e,t){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0;const n=e.length;if(n>4)throw new Error(`WebGL backend: Reverse of rank-${n} tensor is not yet supported`);this.outputShape=e;const a=zn("rc",n),r=`${a[n-1]} + 1 < ${this.outputShape[n-1]}`,s=`${a[n-2]} + 1 < ${this.outputShape[n-2]}`,o=pt(n);function i(e){return p(e)}function u(e){return e[n-1]="("+e[n-1]+" + 1)",p(e)}function l(e){return e[n-2]="("+e[n-2]+" + 1)",p(e)}function c(e){return e[n-1]="("+e[n-1]+" + 1)",e[n-2]="("+e[n-2]+" + 1)",p(e)}function p(t){const n=e.map(((e,n)=>d(n,t))),a=n.join(","),r=n.slice(-2).join(",");return`getChannel(getX(${a}), vec2(${r}))`}function d(n,a){return-1!==t.indexOf(n)&&1!==e[n]?`${e[n]} - ${a[n]} - 1`:`${a[n]}`}this.userCode=1===n?`\n        void main(){\n          int rc = getOutputCoords();\n          vec4 result = vec4(0.);\n          result.r = getChannel(getX(${e[0]} - rc - 1),\n            ${e[0]} - rc - 1);\n          if(${r}){\n              result.g = getChannel(getX(${e[0]} - (rc  + 1) - 1),\n                ${e[0]} - (rc  + 1) - 1);\n          }\n          setOutput(result);\n        }\n      `:`\n        void main() {\n          ${o} rc = getOutputCoords();\n          vec4 result = vec4(0.);\n          result.r = ${i(a.slice())};\n          if(${r}){\n            result.g = ${u(a.slice())};\n          }\n          if(${s}) {\n            result.b = ${l(a.slice())};\n            if(${r}) {\n              result.a = ${c(a.slice())};\n            }\n          }\n          setOutput(result);\n        }\n    `}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Ep(e){const{inputs:t,backend:n,attrs:r}=e,{x:s}=t,{dims:o}=r,i=s.shape.length,u=a.util.parseAxisParam(o,s.shape);if(0===i)return Oa({inputs:{x:s},backend:n});const l=(0,a.env)().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new Rp(s.shape,u):new wp(s.shape,u);return n.runWebGLProgram(l,[s],s.dtype)}const _p={kernelName:a.Reverse,backendName:"webgl",kernelFunc:Ep};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Op{constructor(e,t){this.variableNames=["Image"],this.outputShape=[],this.customUniforms=[{name:"params",type:"vec4"}];const n=e[1],a=e[2];this.outputShape=e;let r="";r="number"===typeof t?`float outputValue = ${t.toFixed(2)};`:`\n        vec3 fill = vec3(${t.join(",")});\n        float outputValue = fill[coords[3]];`,this.userCode=`\n        void main() {\n          ivec4 coords = getOutputCoords();\n          int x = coords[2];\n          int y = coords[1];\n          float coordXFloat = (float(x) - params[0]) * params[3] -\n            (float(y) - params[1]) * params[2];\n          float coordYFloat = (float(x) - params[0]) * params[2] +\n            (float(y) - params[1]) * params[3];\n          int coordX = int(round(coordXFloat + params[0]));\n          int coordY = int(round(coordYFloat + params[1]));\n          ${r}\n          if(coordX >= 0 && coordX < ${a} && coordY >= 0 && coordY < ${n}) {\n            outputValue = getImage(coords[0], coordY, coordX, coords[3]);\n          }\n          setOutput(outputValue);\n        }\n    `}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const Ap={kernelName:a.RotateWithOffset,backendName:"webgl",kernelFunc:({inputs:e,attrs:t,backend:n})=>{const{image:r}=e,{radians:s,fillValue:o,center:i}=t,u=n,l=new Op(r.shape,o),[c,p]=a.backend_util.getImageCenter(i,r.shape[1],r.shape[2]),d=[[c,p,Math.sin(s),Math.cos(s)]],h=u.runWebGLProgram(l,[r],r.dtype,d);return h}},Fp="\n  // OpenGL ES does not support round function.\n  // The algorithm is based on banker's rounding.\n  float base = floor(x);\n  if ((x - base) < 0.5) {\n    return floor(x);\n  } else if ((x - base) > 0.5) {\n    return ceil(x);\n  } else {\n    if (mod(base, 2.0) == 0.0) {\n      return base;\n    } else {\n      return base + 1.0;\n    }\n  }\n",Dp=ja({opSnippet:Fp}),Lp={kernelName:a.Round,backendName:"webgl",kernelFunc:Dp},Pp="return inversesqrt(x);",Vp=ja({opSnippet:Pp,cpuKernelImpl:$n}),Mp={kernelName:a.Rsqrt,backendName:"webgl",kernelFunc:Vp};
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
class Bp{constructor(e,t,n,a,r,s,o=!0){this.variableNames=["updates","indices","defaultValue"],this.outputShape=s;const i=pt(r.length),u=pt(s.length);let l="";1===n?l="i":2===n&&(l="i, j");const c=`getIndices(${l})`;let p="";1===a?p="i":2===a&&(p="i, coords[1]");const d=`getUpdates(${p})`,h=t>1?"strides[j]":"strides";this.userCode=`\n        ${i} strides = ${i}(${r});\n\n        void main() {\n          ${u} coords = getOutputCoords();\n          float sum = 0.0;\n          bool found = false;\n          for (int i = 0; i < ${e}; i++) {\n            int flattenedIndex = 0;\n            for (int j = 0; j < ${t}; j++) {\n              int index = round(${c});\n              flattenedIndex += index * ${h};\n            }\n            if (flattenedIndex == coords[0]) {\n              sum += ${d};\n              found = true;\n            }\n          }\n          setOutput(mix(getDefaultValue(), sum, float(found)));\n        }\n      `}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Up(e){const{inputs:t,backend:n,attrs:r}=e,{indices:s,updates:o}=t,{shape:i}=r,{sliceRank:u,numUpdates:l,sliceSize:c,strides:p,outputSize:d}=a.backend_util.calculateShapes(o,s,i),h=[d/c,c];if(0===d)return n.makeTensorInfo(i,s.dtype);const m=ar({inputs:{x:s},backend:n,attrs:{shape:[l,u]}}),f=ar({inputs:{x:o},backend:n,attrs:{shape:[l,c]}}),x=n.makeTensorInfo([],"float32",new Float32Array([0])),g=new Bp(l,u,m.shape.length,f.shape.length,p,h),y=n.runWebGLProgram(g,[f,m,x],f.dtype),b=ar({inputs:{x:y},backend:n,attrs:{shape:i}});return n.disposeIntermediateTensorInfo(m),n.disposeIntermediateTensorInfo(f),n.disposeIntermediateTensorInfo(y),n.disposeIntermediateTensorInfo(x),b}const Wp={kernelName:a.ScatterNd,backendName:"webgl",kernelFunc:Up};
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
class zp{constructor(e,t,n,r){this.variableNames=["sortedSequence","values"],this.customUniforms=[{name:"numInputs",type:"int"}],this.outputShape=[e,n];const s="while (left < right) {",o=`for (int i = 0; i < ${Math.ceil(Math.log2(t+1))}; ++i) { if (left >= right) break;`,i=2===(0,a.env)().getNumber("WEBGL_VERSION")?s:o,u="left"===r?"<":"<=";this.userCode=`\n       int findBound(int batch, float value) {\n         int left = 0;\n         int right = numInputs;\n         int mid;\n         ${i}\n           mid = (left + right) / 2;\n           if (getSortedSequence(batch, mid) ${u} value) {\n             left = mid + 1;\n           } else {\n             right = mid;\n           }\n         }\n         return right;\n       }\n\n       void main() {\n         ivec2 coords = getOutputCoords();\n         int batch = coords[0];\n         int valueIndex = coords[1];\n\n         float value = getValues(batch, valueIndex);\n\n         setOutput(float(findBound(batch, value)));\n       }\n     `}}
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
function Gp(e){const{inputs:t,backend:n,attrs:a}=e,{sortedSequence:r,values:s}=t,{side:o}=a,i=new zp(r.shape[0],r.shape[1],s.shape[1],o),u=[[r.shape[1]]];return n.runWebGLProgram(i,[r,s],"int32",u)}const Hp={kernelName:a.SearchSorted,backendName:"webgl",kernelFunc:Gp};
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
class Xp{constructor(e,t,n){let a,r;if(this.variableNames=["c","a","b"],this.outputShape=t,n>4)throw Error(`Where for rank ${n} is not yet supported`);if(1===n)r="resRC",a="resRC";else{const n=["resRC.x","resRC.y","resRC.z","resRC.w"],s=[],o=[];for(let a=0;a<t.length;a++)o.push(`${n[a]}`),a<e&&s.push(`${n[a]}`);a=s.join(),r=o.join()}const s=pt(n);this.userCode=`\n      void main() {\n        ${s} resRC = getOutputCoords();\n        float cVal = getC(${a});\n        if (cVal >= 1.0) {\n          setOutput(getA(${r}));\n        } else {\n          setOutput(getB(${r}));\n        }\n      }\n    `}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function jp(e){const{inputs:t,backend:n}=e,{condition:r,t:s,e:o}=t,i=new Xp(r.shape.length,s.shape,s.shape.length);return n.runWebGLProgram(i,[r,s,o],(0,a.upcastType)(s.dtype,o.dtype))}const qp={kernelName:a.Select,backendName:"webgl",kernelFunc:jp},Kp=`\n  // Stable and Attracting Fixed Point (0, 1) for Normalized Weights.\n  // see: https://arxiv.org/abs/1706.02515\n  float scaleAlpha = ${a.backend_util.SELU_SCALEALPHA};\n  float scale = ${a.backend_util.SELU_SCALE};\n  return (x >= 0.0) ? scale * x : scaleAlpha * (exp(x) - 1.0);\n`,Yp=ja({opSnippet:Kp}),Qp={kernelName:a.Selu,backendName:"webgl",kernelFunc:Yp},Zp=Ga+"\n  return 1.0 / (1.0 + exp(-1.0 * x));\n",Jp="\n  vec4 result = 1.0 / (1.0 + exp(-1.0 * x));\n  bvec4 isNaN = isnan(x);\n\n  result.r = isNaN.r ? x.r : result.r;\n  result.g = isNaN.g ? x.g : result.g;\n  result.b = isNaN.b ? x.b : result.b;\n  result.a = isNaN.a ? x.a : result.a;\n\n  return result;\n",ed=ja({opSnippet:Zp,packedOpSnippet:Jp,cpuKernelImpl:In}),td={kernelName:a.Sigmoid,backendName:"webgl",kernelFunc:ed},nd="\n  if (isnan(x)) { return 0.0; }\n  return sign(x);\n",ad=ja({opSnippet:nd}),rd={kernelName:a.Sign,backendName:"webgl",kernelFunc:ad},sd=Ga+"\n  return sin(x);\n",od=ja({opSnippet:sd}),id={kernelName:a.Sin,backendName:"webgl",kernelFunc:od},ud="\n  float e2x = exp(x);\n  return (e2x - 1.0 / e2x) / 2.0;\n",ld=ja({opSnippet:ud}),cd={kernelName:a.Sinh,backendName:"webgl",kernelFunc:ld},pd="\n  float epsilon = 1.1920928955078125e-7;\n  float threshold = log(epsilon) + 2.0;\n\n  bool too_large = x > -threshold;\n  bool too_small = x < threshold;\n\n  float result;\n  float exp_x = exp(x);\n\n  if (too_large){\n    result = x;\n  }\n  else if (too_small){\n    result = exp_x;\n  }\n  else{\n    result = log(exp_x + 1.0);\n  }\n  return result;\n",dd=ja({opSnippet:pd}),hd={kernelName:a.Softplus,backendName:"webgl",kernelFunc:dd},md=e=>{const{inputs:t,backend:n,attrs:r}=e,{x:s}=t,{blockShape:o,paddings:i}=r;a.util.assert(s.shape.length<=4,(()=>"spaceToBatchND for rank > 4 with a WebGL backend not implemented yet"));const u=o.reduce(((e,t)=>e*t)),l=[[0,0]];l.push(...i);for(let a=1+o.length;a<s.shape.length;++a)l.push([0,0]);const c=[],p=jc({inputs:{x:s},backend:n,attrs:{paddings:l,constantValue:0}}),d=a.backend_util.getReshaped(p.shape,o,u,!1),h=a.backend_util.getPermuted(d.length,o.length,!1),m=a.backend_util.getReshapedPermuted(p.shape,o,u,!1),f=ar({inputs:{x:p},backend:n,attrs:{shape:d}}),x=xr({inputs:{x:f},backend:n,attrs:{perm:h}}),g=ar({inputs:{x:x},backend:n,attrs:{shape:m}});return c.push(p),c.push(f),c.push(x),c.forEach((e=>n.disposeIntermediateTensorInfo(e))),g},fd={kernelName:a.SpaceToBatchND,backendName:"webgl",kernelFunc:md};
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
function xd(e){const{inputs:t,backend:n}=e,{indices:a,values:r,denseShape:s,defaultValue:o}=t;if(1!==s.shape.length)throw new Error(`Dense shape must be a vector, saw:\n         ${s.shape}`);if(2!==a.shape.length)throw new Error(`Indices must be a matrix, saw:\n         ${a.shape}`);if(1!==r.shape.length)throw new Error(`Values must be a vector, saw:\n         ${r.shape}`);if(0!==o.shape.length)throw new Error(`Default value must be a scalar, saw:\n        ${o.shape}`);const i=n.readSync(a.dataId),u=n.readSync(r.dataId),l=n.readSync(s.dataId),c=n.readSync(o.dataId)[0],[p,d,h,m,f]=Rn(i,a.shape,a.dtype,u,r.dtype,l,c);return[n.makeTensorInfo(d,a.dtype,p),n.makeTensorInfo([d[0]],r.dtype,h),n.makeTensorInfo([m.length],"bool",new Uint8Array(m.map((e=>Number(e))))),n.makeTensorInfo([f.length],a.dtype,new Int32Array(f))]}const gd={kernelName:a.SparseFillEmptyRows,backendName:"webgl",kernelFunc:xd};
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
function yd(e){const{inputs:t,backend:n}=e,{inputIndices:a,inputShape:r,newShape:s}=t;if(2!==a.shape.length)throw new Error(`Input indices should be a matrix but received shape ${a.shape}`);if(1!==r.shape.length)throw new Error(`Input shape should be a vector but received shape ${r.shape}`);if(1!==s.shape.length)throw new Error(`Target shape should be a vector but received shape ${s.shape}`);const o=Array.from(n.readSync(r.dataId)),i=n.readSync(a.dataId),u=Array.from(n.readSync(s.dataId)),[l,c,p]=En(i,a.shape,a.dtype,o,u);return[n.makeTensorInfo(c,a.dtype,l),n.makeTensorInfo([p.length],s.dtype,new Int32Array(p))]}const bd={kernelName:a.SparseReshape,backendName:"webgl",kernelFunc:yd};
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
function vd(e){const{inputs:t,backend:n}=e,{data:a,indices:r,segmentIds:s}=t;if(a.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(1!==r.shape.length)throw new Error(`Indices should be a vector but received shape\n              ${r.shape}`);if(1!==s.shape.length)throw new Error(`Segment ids should be a vector but received shape\n              ${s.shape}`);const o=n.readSync(a.dataId),i=n.readSync(r.dataId),u=n.readSync(s.dataId),[l,c]=_n(o,a.shape,a.dtype,i,u,!0);return n.makeTensorInfo(c,a.dtype,l)}const Cd={kernelName:a.SparseSegmentMean,backendName:"webgl",kernelFunc:vd};
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
function Nd(e){const{inputs:t,backend:n}=e,{data:a,indices:r,segmentIds:s}=t;if(a.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(1!==r.shape.length)throw new Error(`Indices should be a vector but received shape\n             ${r.shape}`);if(1!==s.shape.length)throw new Error(`Segment ids should be a vector but received shape\n             ${s.shape}`);const o=n.readSync(a.dataId),i=n.readSync(r.dataId),u=n.readSync(s.dataId),[l,c]=_n(o,a.shape,a.dtype,i,u);return n.makeTensorInfo(c,a.dtype,l)}const Td={kernelName:a.SparseSegmentSum,backendName:"webgl",kernelFunc:Nd};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function $d(e){const{inputs:t,backend:n,attrs:r}=e,{sparseIndices:s,sparseValues:o,defaultValue:i}=t,{outputShape:u}=r,{sliceRank:l,numUpdates:c,sliceSize:p,strides:d,outputSize:h}=a.backend_util.calculateShapes(o,s,u),m=!1;if("string"===o.dtype){const e=n.bufferSync(s),t=n.bufferSync(o),r=a.util.decodeString(n.readSync(i.dataId)[0]),f=Sn(e,t,u,h,p,c,l,d,r,m);return n.makeTensorInfo(u,f.dtype,f.values)}const f=new Bp(c,l,s.shape.length,o.shape.length,d,[h,1],m),x=n.runWebGLProgram(f,[o,s,i],o.dtype),g=ar({inputs:{x:x},backend:n,attrs:{shape:u}});return n.disposeIntermediateTensorInfo(x),g}const Sd={kernelName:a.SparseToDense,backendName:"webgl",kernelFunc:$d};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Id(e){const{inputs:t,backend:n,attrs:r}=e,{x:s}=t,{numOrSizeSplits:o,axis:i}=r,u=a.util.parseAxisParam(i,s.shape)[0],l=a.backend_util.prepareSplitSize(s,o,u),c=s.shape.length,p=new Array(c).fill(0),d=s.shape.slice();return l.map((e=>{const t=[...d];t[u]=e;const a=Ls({inputs:{x:s},backend:n,attrs:{begin:p,size:t}});return p[u]+=e,a}))}const kd={kernelName:a.SplitV,backendName:"webgl",kernelFunc:Id},wd="return sqrt(x);",Rd=ja({opSnippet:wd,packedOpSnippet:wd,cpuKernelImpl:On}),Ed={kernelName:a.Sqrt,backendName:"webgl",kernelFunc:Rd},_d="return x * x;",Od=ja({opSnippet:_d}),Ad={kernelName:a.Square,backendName:"webgl",kernelFunc:Od},Fd="return (a - b) * (a - b);",Dd=qa({opSnippet:Fd,packedOpSnippet:Fd}),Ld={kernelName:a.SquaredDifference,backendName:"webgl",kernelFunc:Dd};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Pd({inputs:e,attrs:t,backend:n}){const{x:a}=e,r=na+`\n    return x > 0.0 ? 1.0 : float(${t.alpha});\n  `,s=new ta(a.shape,r);return n.runWebGLProgram(s,[a],a.dtype)}const Vd={kernelName:a.Step,backendName:"webgl",kernelFunc:Pd};
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
class Md{constructor(e,t,n){this.variableNames=["x"],this.outputShape=n;const a=n.length,r=pt(n.length),s=pt(n.length);let o="";if(1===a)o="coords * strides + begin";else{let e=0;o=n.map(((t,a)=>(e++,1===n.length?`coords * strides[${a}] + begin[${a}]`:`coords[${e-1}] * strides[${a}] + begin[${a}]`))).join(",")}this.userCode=`\n      ${r} begin = ${r}(${e});\n      ${r} strides = ${r}(${t});\n\n      void main() {\n        ${s} coords = getOutputCoords();\n        setOutput(getX(${o}));\n      }\n    `}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Bd(e){const{inputs:t,backend:n,attrs:r}=e,{x:s}=t,{begin:o,end:i,strides:u,beginMask:l,endMask:c,ellipsisMask:p,newAxisMask:d,shrinkAxisMask:h}=r,{finalShapeSparse:m,finalShape:f,isIdentity:x,sliceDim0:g,isSimpleSlice:y,begin:b,end:v,strides:C}=a.slice_util.sliceInfo(s.shape,o,i,u,l,c,p,d,h);let N;if(x)N=ar({inputs:{x:s},backend:n,attrs:{shape:f}});else if(g||y){a.util.assert(s.shape.length>=1,(()=>`Input must have rank at least 1, got: ${s.shape.length}`));const e=a.slice_util.computeOutShape(b,v,C),t=Ls({inputs:{x:s},backend:n,attrs:{begin:b,size:e}});N=ar({inputs:{x:t},backend:n,attrs:{shape:f}}),n.disposeIntermediateTensorInfo(t)}else{const e=n.shouldExecuteOnCPU([s]);if(e){const e=n.readSync(s.dataId),t=(0,a.buffer)(s.shape,s.dtype,e),r=An(m,t,C,b);N=n.makeTensorInfo(f,s.dtype,r.values)}else{const e=new Md(b,C,m);N=n.runWebGLProgram(e,[s],s.dtype)}}const T=ar({inputs:{x:N},backend:n,attrs:{shape:f}});return n.disposeIntermediateTensorInfo(N),T}const Ud={kernelName:a.StridedSlice,backendName:"webgl",kernelFunc:Bd};
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
function Wd(e){const{inputs:t,backend:n,attrs:a}=e,{separator:r,nGramWidths:s,leftPad:o,rightPad:i,padWidth:u,preserveShortSequences:l}=a,{data:c,dataSplits:p}=t,d=n.readSync(c.dataId),h=n.readSync(p.dataId),[m,f]=Fn(d,h,r,s,o,i,u,l);return[n.makeTensorInfo([m.length],"string",m),n.makeTensorInfo(p.shape,"int32",f)]}const zd={kernelName:a.StringNGrams,backendName:"webgl",kernelFunc:Wd};
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
function Gd(e){const{inputs:t,backend:n,attrs:a}=e,{skipEmpty:r}=a,{input:s,delimiter:o}=t;if("string"!==s.dtype)throw new Error("Input must be of datatype string");if(1!==s.shape.length)throw new Error(`Input must be a vector, got shape: ${s.shape}`);if(0!==o.shape.length)throw new Error(`Delimiter must be a scalar, got shape: ${o.shape}`);const i=n.readSync(s.dataId),u=n.readSync(o.dataId)[0],[l,c,p]=Dn(i,u,r),d=c.length;return[n.makeTensorInfo([d,2],"int32",l),n.makeTensorInfo([d],"string",c),n.makeTensorInfo([2],"int32",new Int32Array(p))]}const Hd={kernelName:a.StringSplit,backendName:"webgl",kernelFunc:Gd};
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
function Xd(e){const{inputs:t,backend:n,attrs:a}=e,{numBuckets:r}=a,{input:s}=t;if("string"!==s.dtype)throw new Error("Input must be of datatype string");if(r<=0)throw new Error("Number of buckets must be at least 1");const o=n.readSync(s.dataId),i=Ln(o,r);return n.makeTensorInfo(s.shape,"int32",i)}const jd={kernelName:a.StringToHashBucketFast,backendName:"webgl",kernelFunc:Xd},qd="return tan(x);",Kd=ja({opSnippet:qd}),Yd={kernelName:a.Tan,backendName:"webgl",kernelFunc:Kd},Qd="\n  float e2x = exp(-2.0 * abs(x));\n  return sign(x) * (1.0 - e2x) / (1.0 + e2x);\n",Zd=ja({opSnippet:Qd}),Jd={kernelName:a.Tanh,backendName:"webgl",kernelFunc:Zd};
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
class eh{constructor(e,t){this.variableNames=["A"];const n=new Array(e.length);for(let s=0;s<n.length;s++)n[s]=e[s]*t[s];this.outputShape=n,this.rank=n.length;const a=pt(this.rank),r=th(e);this.userCode=`\n      void main() {\n        ${a} resRC = getOutputCoords();\n        setOutput(getA(${r}));\n      }\n    `}}function th(e){const t=e.length;if(t>5)throw Error(`Tile for rank ${t} is not yet supported`);if(1===t)return`imod(resRC, ${e[0]})`;const n=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u"],a=[];for(let r=0;r<e.length;r++)a.push(`imod(${n[r]}, ${e[r]})`);return a.join()}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function nh(e){const{inputs:t,backend:n,attrs:r}=e,{x:s}=t,{reps:o}=r;if("string"===s.dtype||s.shape.length>5){const e=n.readSync(s.dataId),t="string"===s.dtype?e.map((e=>a.util.decodeString(e))):e,r=(0,a.buffer)(s.shape,s.dtype,t),i=Vn(r,o);return n.makeTensorInfo(i.shape,i.dtype,i.values)}const i=new eh(s.shape,o),u=n.runWebGLProgram(i,[s],s.dtype);return u}const ah={kernelName:a.Tile,backendName:"webgl",kernelFunc:nh};class rh{constructor(e){this.variableNames=["x","indices"],this.customUniforms=[{name:"n",type:"int"},{name:"firstPass",type:"int"},{name:"negativeInf",type:"float"},{name:"dir",type:"int"},{name:"inc",type:"int"}],this.outputShape=e,this.userCode="\n       void main() {\n         ivec2 coords = getOutputCoords();\n         int batch = coords[0];\n         int elemIdx = coords[1];\n\n         // We compare elements pair-wise within a group of size 2 * inc.\n         // The comparing rule for each group alternates between ascending\n         // and descending. Within each group, we compare each pair at\n         // positions i and i+inc. To decide whether an element at position i\n         // is x0 or x1, we mod it by 2 * inc, if the result is smaller than\n         // inc, it is in the first half of the group, we denote it as x0,\n         // otherwise we denote it as x1.\n         // For example, as shown in the Bitonic top K paper referenced above,\n         // Figure5(a) shows that element[1] is in the\n         // second half of the group when group size is 2, but it is in the\n         // first half of the group when group size is 4.\n\n         bool isFirstInPair = imod(elemIdx, 2 * inc) < inc;\n         int i = isFirstInPair ? elemIdx : elemIdx - inc;\n\n         int i0 = firstPass == 1 ? i : int(getIndices(batch, i));\n         int i1 = firstPass == 1 ? i + inc : int(getIndices(batch, i + inc));\n         float x0 = i0 < n ? getX(batch, i0) : negativeInf;\n         float x1 = i1 < n ? getX(batch, i1) : negativeInf;\n\n         // Denotes which direction indices are in (ascending or descending).\n         bool reverse = imod(elemIdx, 2 * dir) >= dir;\n         bool isGreater = x0 > x1 || (x0 == x1 && i1 > i0);\n         if (reverse == isGreater) { // Elements in opposite order of direction\n           int iTemp = i0;\n           i0 = i1;\n           i1 = iTemp;\n         }\n         if (isFirstInPair) {\n            setOutput(float(i0));\n         } else {\n            setOutput(float(i1));\n         }\n       }\n     "}}class sh{constructor(e){this.variableNames=["x","indices"],this.customUniforms=[{name:"n",type:"int"},{name:"firstPass",type:"int"},{name:"k",type:"int"}],this.outputShape=e,this.userCode="\n    void main() {\n         // Takes max of indices (0, k), (1, k + 1), (2, k + 2) ...\n         ivec2 coords = getOutputCoords();\n         int batch = coords[0];\n         int elemIdx = coords[1];\n\n         // The output size is half of the previous size.\n         // If the previous sequence is | | | | _ _ _ _  | | | |  _ _ _ _ (k=4),\n         // we only need to output the indices at positions |, the indices at\n         // positions _ can be thrown away, see Figure5(b) After Phase 2\n         // (Merge phase) in the Bitonic Top K paper referenced above.\n         // For example, the paper shows we only need to output the orange bars.\n         // The output sequence should look like this | | | | | | | |.\n         // Because the sequence is halved, to map the output index back\n         // to the previous sequence to find the corresponding value,\n         // we need to double the index. When we double the index,\n         // we basically interpolate a position, so 2i looks like\n         // | _ | _ | _ | _ | _ | _ | _. We move the | to the first k position\n         // of each 2k positions by - elemIdx % k. E.g. for output at\n         // index 4,5,6,7, we want to get the corresponding element at\n         // original index 8,9,10,11, for output at index 8,9,10,11,\n         // we want to get the corresponding element at original index\n         // 16,17,18,19, so on and so forth.\n\n         int i = elemIdx < k ? elemIdx : (elemIdx * 2 - imod(elemIdx, k));\n         int i0 = firstPass == 1 ? i : int(getIndices(batch, i));\n         int i1 = firstPass == 1 ? i + k : int(getIndices(batch, i + k));\n\n         float x0 = getX(batch, i0);\n         float x1 = i1 < n ? getX(batch, i1) : x0;\n\n         setOutput(x0 >= x1 ? float(i0) : float(i1));\n       }\n     "}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function oh(e,t){null!==t&&e.disposeIntermediateTensorInfo(t)}function ih(e){let t=1;while(t<e)t*=2;return t}function uh(e){const{inputs:t,backend:n,attrs:r}=e,{x:s}=t,{k:o,sorted:i}=r,u=(0,a.env)().getNumber("TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD"),l=(0,a.env)().getNumber("TOPK_K_CPU_HANDOFF_THRESHOLD"),c=s.shape,p=c[c.length-1];if(n.shouldExecuteOnCPU([s])||p<u||o>l){const e=n.readSync(s.dataId),[t,a]=Mn(e,c,s.dtype,o,i);return[n.makeTensorInfo(t.shape,t.dtype,t.values),n.makeTensorInfo(a.shape,a.dtype,a.values)]}if(0===o)return c[c.length-1]=0,[n.makeTensorInfo(c,s.dtype,[]),n.makeTensorInfo(c,"int32",[])];if(1===p)return[s,au({attrs:{shape:c,dtype:"int32",value:0},backend:n})];const d=n.texData.get(s.dataId),h=null!==d&&d.isPacked,m=h?n.unpackTensor(s):s,f=a.util.sizeFromShape(c),x=f/p,g=ar({inputs:{x:m},attrs:{shape:[x,p]},backend:n});h&&oh(n,m);const y=ih(o),b=ih(p);let v=null;const C=()=>null===v?[g,g]:[g,v],N=(e,t,a)=>{const r=C(),s=new rh(a),o=null===v?1:0,i=[[p],[o],[Number.NEGATIVE_INFINITY],[e],[t]],u=v;v=n.runWebGLProgram(s,r,"int32",i),oh(n,u)};for(let a=1;a<y;a*=2){const e=2*a;for(let t=a;t>=1;t/=2)N(e,t,[x,b])}for(let a=b;a>y;a/=2){const e=C(),t=new sh([x,a/2]),r=null===v?1:0,s=[[p],[r],[y]],o=v;v=n.runWebGLProgram(t,e,"int32",s),oh(n,o);const i=y/2,u=2*i;for(let n=i;n>=1;n/=2)N(u,n,v.shape)}let T=v;v=Ls({inputs:{x:v},backend:n,attrs:{begin:0,size:[x,o]}}),oh(n,T);let $=wu({inputs:{x:g,indices:v},backend:n,attrs:{axis:1,batchDims:1}});oh(n,g);const S=c.slice(0,-1);S.push(o),T=v,v=ar({inputs:{x:v},attrs:{shape:S},backend:n}),oh(n,T);const I=$;return $=ar({inputs:{x:$},attrs:{shape:S},backend:n}),oh(n,I),[$,v]}const lh={kernelName:a.TopK,backendName:"webgl",kernelFunc:uh};
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
class ch{constructor(e,t,n,a,r,s){this.variableNames=["Image","Transforms"],this.outputShape=s;const o="nearest"===n?1:2;let i;switch(a){case"constant":i=1;break;case"reflect":i=2;break;case"wrap":i=3;break;case"nearest":i=4;break;default:i=1;break}this.userCode=`\n            float mapCoord(float outCoord, float len) {\n              float inCoord = outCoord;\n              if(${i} == 2) {\n                if (inCoord < 0.0) {\n                  if (len <= 1.0) {\n                    inCoord = 0.0;\n                  } else {\n                    float sz2 = 2.0 * len;\n                    if (inCoord < sz2) {\n                      inCoord = sz2 * float(int(float(-inCoord / sz2))) +\n                      inCoord;\n                    }\n                    inCoord = inCoord < -len ? inCoord + sz2 : -inCoord - 1.0;\n                  }\n                } else if (inCoord > len - 1.0) {\n                  if (len <= 1.0) {\n                    inCoord = 0.0;\n                  } else {\n                    float sz2 = 2.0 * len;\n                    inCoord -= sz2 * float(int(float(inCoord / sz2)));\n                    if (inCoord >= len) {\n                      inCoord = sz2 - inCoord - 1.0;\n                    }\n                  }\n                }\n                return clamp(inCoord, 0.0, len - 1.0);\n              } else if (${i} == 3) {\n                if (inCoord < 0.0) {\n                  if (len <= 1.0) {\n                    inCoord = 0.0;\n                  } else {\n                    float sz = len - 1.0;\n                    inCoord += len * (float(int(float(-inCoord / sz))) + 1.0);\n                  }\n                } else if (inCoord > len - 1.0) {\n                  if (len <= 1.0) {\n                    inCoord = 0.0;\n                  } else {\n                    float sz = len - 1.0;\n                    inCoord -= len * float(int(float(inCoord / sz)));\n                  }\n                }\n                return clamp(inCoord, 0.0, len - 1.0);\n              } else if (${i} == 4) {\n                return clamp(outCoord, 0.0, len - 1.0);\n              } else {\n                return outCoord;\n              }\n            }\n\n            float readWithFillValue(int batch, int coordY, int coordX,\n              int channel) {\n              float outputValue;\n              if (0 <= coordY && coordY < ${e} && 0 <= coordX && coordX < ${t}) {\n                  outputValue = getImage(batch, coordY, coordX, channel);\n              } else {\n                outputValue = float(${r});\n              }\n              return outputValue;\n            }\n\n            void main() {\n              ivec4 coords = getOutputCoords();\n              float outputValue;\n              int batch = coords[0];\n              int x = coords[2];\n              int y = coords[1];\n              int channel = coords[3];\n              float xf = float(x);\n              float yf = float(y);\n              float a1 = getTransforms(batch, 0);\n              float a2 = getTransforms(batch, 1);\n              float a3 = getTransforms(batch, 2);\n              float b1 = getTransforms(batch, 3);\n              float b2 = getTransforms(batch, 4);\n              float b3 = getTransforms(batch, 5);\n              float c1 = getTransforms(batch, 6);\n              float c2 = getTransforms(batch, 7);\n              float projection = c1 * xf + c2 * yf + 1.0;\n              if (projection == 0.0) {\n                outputValue = float(${r});\n              } else {\n                float inX = (a1 * xf + a2 * yf + a3) / projection;\n                float inY = (b1 * xf + b2 * yf + b3) / projection;\n                float mapX = mapCoord(inX, float(${t}));\n                float mapY = mapCoord(inY, float(${e}));\n\n                if (${o} == 1) {\n                  int coordY = int(round(mapY));\n                  int coordX = int(round(mapX));\n                  outputValue = readWithFillValue(batch, coordY, coordX,\n                    channel);\n                } else {\n                  float yFloor = floor(mapY);\n                  float xFloor = floor(mapX);\n                  float yCeil = yFloor + 1.0;\n                  float xCeil = xFloor + 1.0;\n                  float valueYFloor = (xCeil - mapX) *\n                  readWithFillValue(batch, int(yFloor), int(xFloor), channel) +\n                  (mapX - xFloor) *\n                  readWithFillValue(batch, int(yFloor), int(xCeil), channel);\n                  float valueYCeil = (xCeil - mapX) *\n                  readWithFillValue(batch, int(yCeil), int(xFloor), channel) +\n                  (mapX - xFloor) *\n                  readWithFillValue(batch, int(yCeil), int(xCeil), channel);\n                  outputValue = (yCeil - mapY) * valueYFloor +\n                  (mapY - yFloor) * valueYCeil;\n                }\n              }\n              setOutput(outputValue);\n            }\n        `}}
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
function ph(e){const{inputs:t,backend:n,attrs:a}=e,{image:r,transforms:s}=t,{interpolation:o,fillMode:i,fillValue:u,outputShape:l}=a,[c,p,d,h]=r.shape,[m,f]=null!=l?l:[p,d],x=[c,m,f,h],g=new ch(p,d,o,i,u,x);return n.runWebGLProgram(g,[r,s],"float32")}const dh={kernelName:a.Transform,backendName:"webgl",kernelFunc:ph};
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
function hh(e){const{inputs:t,attrs:n,backend:a}=e,{axis:r}=n,{x:s}=t;he(s,"unique"),console.warn("WARNING: ","UI might be locked temporarily as data is being downloaded");const o=a.readSync(s.dataId),{outputValues:i,outputShape:u,indices:l}=Un(o,r,s.shape,s.dtype);return[a.makeTensorInfo(u,s.dtype,i),a.makeTensorInfo([l.length],"int32",l)]}const mh={kernelName:a.Unique,backendName:"webgl",kernelFunc:hh};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function fh(e){const{inputs:t,backend:n,attrs:a}=e,{value:r}=t;let{axis:s}=a;s<0&&(s+=r.shape.length);const o=r,i=o.shape.length,u=r.shape[s],l=new Array(i-1);let c=0;for(let f=0;f<i;f++)f!==s&&(l[c++]=o.shape[f]);const p=[],d=new Array(i).fill(0),h=o.shape.slice();h[s]=1;const m=new Array(u);for(let f=0;f<m.length;f++){d[s]=f;const e=Ls({inputs:{x:o},backend:n,attrs:{begin:d,size:h}}),t=ar({inputs:{x:e},backend:n,attrs:{shape:l}});m[f]=t,p.push(e)}return p.forEach((e=>n.disposeIntermediateTensorInfo(e))),m}const xh={kernelName:a.Unpack,backendName:"webgl",kernelFunc:fh};
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
class gh{constructor(e,t){this.variableNames=["x","segmentIds"];const n=e.windowSize,a=e.batchSize,r=e.inSize,s=e.numSegments,o=s*Math.ceil(r/n);this.outputShape=[a,o];const i="0.0",u="sumValue",l=4*Math.floor(n/4),c=n%4,p="\n        sumValue += dot(values, segFilter);\n    ";let d="";r%n>0&&(d=`\n        if (inIdx < 0 || inIdx >= ${r}) {\n          return initializationValue;\n        }\n      `);let h="";r%n>0&&(h=`\n        if (inIdx < 0 || inIdx >= ${r}) {\n          return -1.0;\n        }\n      `),this.userCode=`\n      const float initializationValue = ${i};\n\n      float getValue(int batch, int inIdx) {\n        ${d}\n        return getX(batch, inIdx);\n      }\n\n      float getSegmentIdAtIndex(int inIdx) {\n        ${h}\n        return getSegmentIds(inIdx);\n      }\n\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int batch = coords[0];\n        int outIdx = coords[1];\n        int inOffset = int(floor(float(outIdx) / float(\n          ${s})) * float(${n}));\n        int currentSeg = int(mod(float(outIdx), float(${s})));\n\n        float sumValue = 0.0;\n\n        for (int i = 0; i < ${l}; i += 4) {\n          int inIdx = inOffset + i;\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            getValue(batch, inIdx + 2),\n            getValue(batch, inIdx + 3)\n          );\n\n          vec4 segFilter = vec4(\n            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 3)) == currentSeg ? 1 : 0\n          );\n\n          ${p}\n        }\n\n        int inIdx = inOffset + ${l};\n        if (${1===c}) {\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            initializationValue,\n            initializationValue,\n            initializationValue\n          );\n\n          int inIdxSeg = int(getSegmentIdAtIndex(inIdx));\n\n          vec4 segFilter = vec4(\n            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,\n            0,\n            0,\n            0\n          );\n\n          ${p}\n        } else if (${2===c}) {\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            initializationValue,\n            initializationValue\n          );\n\n          vec4 segFilter = vec4(\n            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,\n              0,\n              0\n          );\n\n          ${p}\n        } else if (${3===c}) {\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            getValue(batch, inIdx + 2),\n            initializationValue\n          );\n\n          vec4 segFilter = vec4(\n            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,\n            0\n          );\n\n          ${p}\n        }\n        setOutput(${u});\n      }\n    `}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function yh(e){const{inputs:t,backend:n,attrs:r}=e,{x:s,segmentIds:o}=t,{numSegments:i}=r,u=s.shape.length,l=[];let c=0;const p=a.backend_util.getAxesPermutation([c],u);let d=s;null!=p&&(d=xr({inputs:{x:s},backend:n,attrs:{perm:p}}),l.push(d),c=a.backend_util.getInnerMostAxes(1,u)[0]);const h=a.backend_util.segment_util.computeOutShape(d.shape,c,i),m=a.util.sizeFromShape([d.shape[c]]),f=ar({inputs:{x:d},backend:n,attrs:{shape:[-1,m]}});l.push(f);const x=(0,a.sumOutType)(s.dtype),g=(e,t,r,s,o)=>{const i=e.shape[0],u=e.shape[1],c=a.backend_util.segment_util.segOpComputeOptimalWindowSize(u,o),p={windowSize:c,inSize:u,batchSize:i,numSegments:o},d=new gh(p,t),h=n.compileAndRun(d,[e,r],s);if(l.push(h),h.shape[1]===o)return h;const m=tp({backend:n,attrs:{start:0,stop:o,step:1,dtype:"float32"}}),f=nh({inputs:{x:m},backend:n,attrs:{reps:[u/c]}});l.push(m),l.push(f);const x=g(h,t,f,s,o);return x},y=g(f,"unsortedSegmentSum",o,x,i),b=ar({inputs:{x:y},backend:n,attrs:{shape:h}});let v=b;if(null!=p){l.push(b);const e=a.backend_util.getUndoAxesPermutation(p);v=xr({inputs:{x:v},backend:n,attrs:{perm:e}})}return l.forEach((e=>n.disposeIntermediateTensorInfo(e))),v}const bh={kernelName:a.UnsortedSegmentSum,backendName:"webgl",kernelFunc:yh},vh=[Cr,$r,kr,Er,Ar,Pr,Mr,Ur,qr,Yr,Jr,ns,ss,ls,ds,xs,ys,Ns,$s,Is,Es,Ms,Us,zs,Zs,to,so,Da,lo,bo,Io,Oo,Fo,Lo,Vo,Bo,zo,Xo,Ko,ni,ri,oi,li,hi,gi,bi,Ni,Si,ki,_i,Di,Mi,Wi,Xi,qi,Qi,tu,ru,ou,lu,hu,xu,vu,Nu,Su,Ru,Au,Pu,Aa,Mu,fo,Wu,Hu,qu,Ma,Zu,nl,rl,ul,pl,fl,yl,Nl,Il,Rl,Ol,Ll,Vl,Bl,Gl,Xl,ql,Yl,Zl,nc,oc,cc,Nc,tr,Ic,Rc,Oc,Dc,Xs,Vc,Wc,Gc,qc,Zc,za,ep,np,qs,fc,sp,lp,hp,rr,gp,vp,$p,kp,_p,Ap,Lp,Mp,Wp,Hp,qp,Qp,td,rd,id,cd,Ps,vc,hd,fd,gd,bd,Cd,Td,Sd,kd,Ed,Ad,Ld,Vd,Ud,zd,Hd,jd,yc,fr,Yd,Jd,ah,lh,dh,gr,mh,xh,bh,Bc];for(const Ch of vh)(0,a.registerKernel)(Ch)},92800:function(e,t,n){n.d(t,{ox:function(){return Ka},uW:function(){return Qa}});var a={};n.r(a),n.d(a,{json:function(){return L}});var r={};n.r(r),n.d(r,{json:function(){return P}});var s={};n.r(s),n.d(s,{json:function(){return V}});var o={};n.r(o),n.d(o,{json:function(){return M}});var i={};n.r(i),n.d(i,{json:function(){return B}});var u={};n.r(u),n.d(u,{json:function(){return U}});var l={};n.r(l),n.d(l,{json:function(){return W}});var c={};n.r(c),n.d(c,{json:function(){return z}});var p={};n.r(p),n.d(p,{json:function(){return G}});var d={};n.r(d),n.d(d,{json:function(){return H}});var h={};n.r(h),n.d(h,{json:function(){return X}});var m={};n.r(m),n.d(m,{json:function(){return j}});var f={};n.r(f),n.d(f,{json:function(){return q}});var x={};n.r(x),n.d(x,{json:function(){return K}});var g={};n.r(g),n.d(g,{json:function(){return Y}});var y={};n.r(y),n.d(y,{json:function(){return Q}});var b={};n.r(b),n.d(b,{json:function(){return Z}});var v={};n.r(v),n.d(v,{json:function(){return J}});var C={};n.r(C),n.d(C,{json:function(){return ee}});var N=n(64243);
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
const T=(0,N.env)();
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
 *
 * =============================================================================
 */
var $,S;T.registerFlag("KEEP_INTERMEDIATE_TENSORS",(()=>!1),(e=>{e&&console.warn("Keep intermediate tensors is ON. This will print the values of all intermediate tensors during model inference. Not all models support this mode. For details, check e2e/benchmarks/ model_config.js. This significantly impacts performance.")})),function(e){e[e["DT_INVALID"]=0]="DT_INVALID",e[e["DT_FLOAT"]=1]="DT_FLOAT",e[e["DT_DOUBLE"]=2]="DT_DOUBLE",e[e["DT_INT32"]=3]="DT_INT32",e[e["DT_UINT8"]=4]="DT_UINT8",e[e["DT_INT16"]=5]="DT_INT16",e[e["DT_INT8"]=6]="DT_INT8",e[e["DT_STRING"]=7]="DT_STRING",e[e["DT_COMPLEX64"]=8]="DT_COMPLEX64",e[e["DT_INT64"]=9]="DT_INT64",e[e["DT_BOOL"]=10]="DT_BOOL",e[e["DT_QINT8"]=11]="DT_QINT8",e[e["DT_QUINT8"]=12]="DT_QUINT8",e[e["DT_QINT32"]=13]="DT_QINT32",e[e["DT_BFLOAT16"]=14]="DT_BFLOAT16",e[e["DT_QINT16"]=15]="DT_QINT16",e[e["DT_QUINT16"]=16]="DT_QUINT16",e[e["DT_UINT16"]=17]="DT_UINT16",e[e["DT_COMPLEX128"]=18]="DT_COMPLEX128",e[e["DT_HALF"]=19]="DT_HALF",e[e["DT_RESOURCE"]=20]="DT_RESOURCE",e[e["DT_VARIANT"]=21]="DT_VARIANT",e[e["DT_UINT32"]=22]="DT_UINT32",e[e["DT_UINT64"]=23]="DT_UINT64",e[e["DT_FLOAT_REF"]=101]="DT_FLOAT_REF",e[e["DT_DOUBLE_REF"]=102]="DT_DOUBLE_REF",e[e["DT_INT32_REF"]=103]="DT_INT32_REF",e[e["DT_UINT8_REF"]=104]="DT_UINT8_REF",e[e["DT_INT16_REF"]=105]="DT_INT16_REF",e[e["DT_INT8_REF"]=106]="DT_INT8_REF",e[e["DT_STRING_REF"]=107]="DT_STRING_REF",e[e["DT_COMPLEX64_REF"]=108]="DT_COMPLEX64_REF",e[e["DT_INT64_REF"]=109]="DT_INT64_REF",e[e["DT_BOOL_REF"]=110]="DT_BOOL_REF",e[e["DT_QINT8_REF"]=111]="DT_QINT8_REF",e[e["DT_QUINT8_REF"]=112]="DT_QUINT8_REF",e[e["DT_QINT32_REF"]=113]="DT_QINT32_REF",e[e["DT_BFLOAT16_REF"]=114]="DT_BFLOAT16_REF",e[e["DT_QINT16_REF"]=115]="DT_QINT16_REF",e[e["DT_QUINT16_REF"]=116]="DT_QUINT16_REF",e[e["DT_UINT16_REF"]=117]="DT_UINT16_REF",e[e["DT_COMPLEX128_REF"]=118]="DT_COMPLEX128_REF",e[e["DT_HALF_REF"]=119]="DT_HALF_REF",e[e["DT_RESOURCE_REF"]=120]="DT_RESOURCE_REF",e[e["DT_VARIANT_REF"]=121]="DT_VARIANT_REF",e[e["DT_UINT32_REF"]=122]="DT_UINT32_REF",e[e["DT_UINT64_REF"]=123]="DT_UINT64_REF"}($||($={})),function(e){let t;(function(e){e[e["LEGACY"]=0]="LEGACY",e[e["V1"]=1]="V1",e[e["V2"]=2]="V2"})(t=e.CheckpointFormatVersion||(e.CheckpointFormatVersion={}))}(S||(S={}));
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
const I={};function k(e){return I[e]}
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
function w(e,t,n,a,r){const s=t.inputParams[e];if(s&&void 0!==s.inputIndexStart){const e=s.inputIndexStart,o=0===s.inputIndexEnd?void 0:void 0===s.inputIndexEnd?e+1:s.inputIndexEnd;if("tensor"===s.type)return R(t.inputNames[s.inputIndexStart],n,a,r);if("tensors"===s.type){const s=t.inputNames.slice(e,o);return s.map((e=>R(e,n,a,r)))}const i=R(t.inputNames.slice(e)[0],n,a,r),u=i.dataSync();return"number"===s.type?u[0]:N.util.toNestedArray(i.shape,u)}const o=t.attrParams[e];return o&&o.value}function R(e,t,n,a){const[r,s]=A(e);if(null!=a){const e=a.getHashTableHandleByName(r);if(null!=e)return e}const o=n.currentContextIds.find((e=>!!t[O(r,e)]));return void 0!==o?t[O(r,o)][s]:void 0}function E(e,t,n){return t[O(e,n.currentContextId)]}function _(e,t){const[n,a,r]=A(e);return[O(n,t&&t.currentContextId),a,r]}function O(e,t){return t?`${e}-${t}`:e}function A(e){const t=e.split(":");if(1===t.length)return[e,0,void 0];const n=t[0],a=3===t.length?t[1]:void 0,r=Number(t[t.length-1]);return[n,r,a]}function F(e,t,n){let a=w("pad",e,t,n);if("explicit"===a){a=w("explicitPaddings",e,t,n);const r=[[0,0],[0,0],[0,0],[0,0]];for(let e=0;e<4;e++)r[e][0]=a[2*e],r[e][1]=a[2*e+1];return r}return a}function D(e){return e.kept?e:(0,N.clone)(e)}
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
const L=[{tfOpName:"Add",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AddV2",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AddN",category:"arithmetic",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}]},{tfOpName:"BiasAdd",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"Sub",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"RealDiv",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Div",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"DivNoNan",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"FloorDiv",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Mul",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Maximum",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Minimum",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Pow",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SquaredDifference",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Mod",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"FloorMod",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}],P=[{tfOpName:"Abs",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Acos",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Asin",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atan2",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"y",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Ceil",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ClipByValue",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"clipValueMin",type:"number"},{start:2,name:"clipValueMax",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Complex",category:"basic_math",inputs:[{start:0,name:"real",type:"tensor"},{start:1,name:"imag",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ComplexAbs",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Cos",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Cosh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Elu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Exp",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Floor",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Log",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Imag",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"Tout",name:"outputType",type:"dtype",notSupported:!0}]},{tfOpName:"Neg",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Real",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"Tout",name:"outputType",type:"dtype",notSupported:!0}]},{tfOpName:"Prelu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"alpha",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Relu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Relu6",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Selu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sigmoid",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sin",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sinh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sqrt",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Rsqrt",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Square",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Tan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Tanh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sign",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Round",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Expm1",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Log1p",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Reciprocal",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Softplus",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Asinh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Acosh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atanh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Erf",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Prod",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axes",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool",notSupported:!0},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LeakyRelu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"alpha",name:"alpha",type:"number",defaultValue:.2},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"IsNan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}],V=[{tfOpName:"EmptyTensorList",category:"control",inputs:[{start:0,name:"elementShape",type:"shape"},{start:1,name:"maxNumElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"LoopCond",category:"control",inputs:[{start:0,name:"pred",type:"tensor"}]},{tfOpName:"Switch",category:"control",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"pred",type:"tensor"}]},{tfOpName:"Merge",category:"control",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}]},{tfOpName:"Enter",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"frame_name",name:"frameName",type:"string"},{tfName:"is_constant",name:"isConstant",type:"bool"}]},{tfOpName:"Exit",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"NextIteration",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayV3",category:"control",inputs:[{start:0,name:"size",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"dynamic_size",name:"dynamicSize",type:"bool"},{tfName:"clear_after_read",name:"clearAfterRead",type:"bool"},{tfName:"identical_element_shapes",name:"identicalElementShapes",type:"bool"},{tfName:"tensor_array_name",name:"name",type:"string"}]},{tfOpName:"TensorArrayWriteV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"tensor",type:"tensor"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayReadV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayGatherV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape",name:"elementShape",type:"shape"}]},{tfOpName:"TensorArrayScatterV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"tensor",type:"tensor"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"TensorArrayConcatV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape_except0",name:"elementShapeExcept0",type:"shape",notSupported:!0}]},{tfOpName:"TensorArraySplitV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"tensor",type:"tensor"},{start:2,name:"lengths",type:"number[]"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"TensorArraySizeV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"flowIn",type:"number"}]},{tfOpName:"TensorArrayCloseV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"}]},{tfOpName:"StatelessIf",category:"control",inputs:[{start:0,name:"cond",type:"tensor"},{start:1,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"then_branch",name:"thenBranch",type:"func"},{tfName:"else_branch",name:"elseBranch",type:"func"}]},{tfOpName:"If",category:"control",inputs:[{start:0,name:"cond",type:"tensor"},{start:1,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"then_branch",name:"thenBranch",type:"func"},{tfName:"else_branch",name:"elseBranch",type:"func"}]},{tfOpName:"StatelessWhile",category:"control",inputs:[{start:0,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"cond",name:"cond",type:"func"},{tfName:"body",name:"body",type:"func"}]},{tfOpName:"While",category:"control",inputs:[{start:0,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"cond",name:"cond",type:"func"},{tfName:"body",name:"body",type:"func"}]},{tfOpName:"TensorListScatter",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListScatterV2",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"},{start:3,name:"numElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListGather",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListGetItem",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListSetItem",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"tensor",type:"tensor"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListReserve",category:"control",inputs:[{start:0,name:"elementShape",type:"shape"},{start:1,name:"numElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListFromTensor",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListStack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"},{tfName:"num_elements",name:"numElements",type:"dtype"}]},{tfOpName:"TensorListSplit",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"elementShape",type:"shape"},{start:2,name:"lengths",type:"number[]"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListConcat",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}],attrs:[{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListConcatV2",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}],attrs:[{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListPopBack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListPushBack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"tensor",type:"tensor"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListLength",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}]},{tfOpName:"TensorListResize",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"size",type:"number"}]}],M=[{tfOpName:"AvgPool",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPool",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[],notSupported:!0},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPoolWithArgmax",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"include_batch_in_index",name:"includeBatchInIndex",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AvgPool3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPool3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Conv1D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"stride",name:"stride",type:"number"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NWC"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"dilation",name:"dilation",type:"number",defaultValue:1}]},{tfOpName:"Conv2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"useCudnnOnGpu",name:"useCudnnOnGpu",type:"bool"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"_FusedConv2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"use_cudnn_on_gpu",name:"useCudnnOnGpu",type:"bool",defaultValue:!0},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]",defaultValue:[1,1,1,1]},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:1e-4},{tfName:"leakyrelu_alpha",name:"leakyreluAlpha",type:"number"}]},{tfOpName:"Conv2DBackpropInput",category:"convolution",inputs:[{start:2,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:0,name:"outputShape",type:"number[]"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]",notSupported:!0}]},{tfOpName:"DepthwiseConv2d",category:"convolution",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"DepthwiseConv2dNative",category:"convolution",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"FusedDepthwiseConv2dNative",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]",defaultValue:[1,1,1,1]},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]}]},{tfOpName:"Conv3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"Dilation2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"rates",name:"dilations",type:"number[]"},{tfName:"padding",name:"pad",type:"string"}]}],B=[{tfOpName:"Fill",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"},{start:1,name:"value",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"LinSpace",category:"creation",inputs:[{start:0,name:"start",type:"number"},{start:1,name:"stop",type:"number"},{start:2,name:"num",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"OneHot",category:"creation",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"depth",type:"number"},{start:2,name:"onValue",type:"number",defaultValue:1},{start:3,name:"offValue",type:"number",defaultValue:0}],attrs:[{tfName:"axis",name:"axis",type:"number",notSupported:!0},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Ones",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"OnesLike",category:"creation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"RandomUniform",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"minval",name:"minval",type:"number",defaultValue:0},{tfName:"maxval",name:"maxval",type:"number",defaultValue:1},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"seed",name:"seed",type:"number",defaultValue:0},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"Range",category:"creation",inputs:[{start:0,name:"start",type:"number"},{start:1,name:"stop",type:"number"},{start:2,name:"step",type:"number",defaultValue:0}],attrs:[{tfName:"Tidx",name:"dtype",type:"dtype"}]},{tfOpName:"TruncatedNormal",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"means",name:"mean",type:"number",defaultValue:0},{tfName:"stddev",name:"stdDev",type:"number",defaultValue:1},{tfName:"seed",name:"seed",type:"number"},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"Zeros",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"ZerosLike",category:"creation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"Multinomial",category:"creation",inputs:[{start:0,name:"logits",type:"tensor"},{start:1,name:"numSamples",type:"number"}],attrs:[{tfName:"seed",name:"seed",type:"number"},{tfName:"seed2",name:"seed2",type:"number"},{tfName:"T",name:"dtype",type:"dtype"},{tfName:"output_dtype",name:"output_dtype",type:"dtype"}]}],U=[{tfOpName:"NonMaxSuppressionV2",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"}]},{tfOpName:"NonMaxSuppressionV3",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"}]},{tfOpName:"NonMaxSuppressionV4",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"T_threshold",name:"threshold",type:"dtype",notSupported:!0},{tfName:"pad_to_max_output_size",name:"padToMaxOutputSize",type:"bool"}]},{tfOpName:"NonMaxSuppressionV5",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"},{start:5,name:"softNmsSigma",type:"number"}]},{tfOpName:"Where",category:"dynamic",inputs:[{start:0,name:"condition",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ListDiff",category:"dynamic",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"y",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}],W=[{tfOpName:"LowerBound",category:"evaluation",inputs:[{start:0,name:"sortedSequence",type:"tensor"},{start:1,name:"values",type:"tensor"}]},{tfOpName:"TopKV2",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"k",type:"number"}],attrs:[{tfName:"sorted",name:"sorted",type:"bool"}]},{tfOpName:"UpperBound",category:"evaluation",inputs:[{start:0,name:"sortedSequence",type:"tensor"},{start:1,name:"values",type:"tensor"}]},{tfOpName:"Unique",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"UniqueV2",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]}],z=[{tfOpName:"PlaceholderWithDefault",category:"graph",inputs:[{start:0,name:"default",type:"tensor"}],attrs:[{tfName:"shape",name:"shape",type:"shape"},{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"Placeholder",category:"graph",attrs:[{tfName:"shape",name:"shape",type:"shape"},{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"Const",category:"graph"},{tfOpName:"Identity",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"IdentityN",category:"graph",inputs:[{start:0,end:0,name:"x",type:"tensors"}]},{tfOpName:"Snapshot",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Rank",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Size",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Shape",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"ShapeN",category:"graph",inputs:[{start:0,end:0,name:"x",type:"tensors"}]},{tfOpName:"Print",category:"graph",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"data",type:"tensors"}],attrs:[{tfName:"message",name:"message",type:"string"},{tfName:"first_n",name:"firstN",type:"number",notSupported:!0},{tfName:"summarize",name:"summarize",type:"number",defaultValue:3}]},{tfOpName:"NoOp",category:"graph",inputs:[]},{tfOpName:"StopGradient",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"FakeQuantWithMinMaxVars",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"min",name:"min",type:"number"},{tfName:"max",name:"max",type:"number"}]}],G=[{tfOpName:"HashTable",category:"hash_table",inputs:[],attrs:[{tfName:"shared_name",name:"sharedName",type:"string"},{tfName:"use_node_name_sharing",name:"useNodeNameSharing",type:"bool"},{tfName:"key_dtype",name:"keyDType",type:"dtype"},{tfName:"value_dtype",name:"valueDType",type:"dtype"}]},{tfOpName:"HashTableV2",category:"hash_table",inputs:[],attrs:[{tfName:"shared_name",name:"sharedName",type:"string"},{tfName:"use_node_name_sharing",name:"useNodeNameSharing",type:"bool"},{tfName:"key_dtype",name:"keyDType",type:"dtype"},{tfName:"value_dtype",name:"valueDType",type:"dtype"}]},{tfOpName:"LookupTableImport",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableImportV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableFind",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableFindV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableSize",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"}]},{tfOpName:"LookupTableSizeV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"}]}],H=[{tfOpName:"ResizeBilinear",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"size",type:"number[]"}],attrs:[{tfName:"align_corners",name:"alignCorners",type:"bool"},{tfName:"half_pixel_centers",name:"halfPixelCenters",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ResizeNearestNeighbor",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"size",type:"number[]"}],attrs:[{tfName:"align_corners",name:"alignCorners",type:"bool"},{tfName:"half_pixel_centers",name:"halfPixelCenters",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"CropAndResize",category:"image",inputs:[{start:0,name:"image",type:"tensor"},{start:1,name:"boxes",type:"tensor"},{start:2,name:"boxInd",type:"tensor"},{start:3,name:"cropSize",type:"number[]"}],attrs:[{tfName:"method",name:"method",type:"string"},{tfName:"extrapolation_value",name:"extrapolationValue",type:"number"}]},{tfOpName:"ImageProjectiveTransformV3",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"transforms",type:"tensor"},{start:2,name:"outputShape",type:"number[]"},{start:3,name:"fillValue",type:"number"}],attrs:[{tfName:"interpolation",name:"interpolation",type:"string"},{tfName:"fill_mode",name:"fillMode",type:"string"}]}],X=[{tfOpName:"Equal",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"NotEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Greater",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"GreaterEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Less",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LessEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalAnd",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalNot",category:"logical",inputs:[{start:0,name:"a",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalOr",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Select",category:"logical",inputs:[{start:0,name:"condition",type:"tensor"},{start:1,name:"a",type:"tensor"},{start:2,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SelectV2",category:"logical",inputs:[{start:0,name:"condition",type:"tensor"},{start:1,name:"a",type:"tensor"},{start:2,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}],j=[{tfOpName:"_FusedMatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:1e-4},{tfName:"transpose_a",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"transpose_b",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"transpose_a",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"transpose_b",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"BatchMatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"adj_x",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"adj_y",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"BatchMatMulV2",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"adj_x",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"adj_y",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Transpose",category:"matrices",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"perm",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Einsum",category:"matrices",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}],attrs:[{tfName:"equation",name:"equation",type:"string"},{tfName:"N",name:"n",type:"number",defaultValue:2},{tfName:"T",name:"dtype",type:"dtype"}]}],q=[{tfOpName:"EuclideanNorm",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool",defaultValue:!1}]},{tfOpName:"FusedBatchNorm",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"FusedBatchNormV2",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"FusedBatchNormV3",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"LRN",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"depth_radius",name:"radius",type:"number",defaultValue:5},{tfName:"bias",name:"bias",type:"number",defaultValue:1},{tfName:"alpha",name:"alpha",type:"number",defaultValue:1},{tfName:"beta",name:"beta",type:"number",defaultValue:.5}]},{tfOpName:"Softmax",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"LogSoftmax",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"SparseToDense",category:"normalization",inputs:[{start:0,name:"sparseIndices",type:"tensor"},{start:1,name:"outputShape",type:"number[]"},{start:2,name:"sparseValues",type:"tensor"},{start:3,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"validate_indices",name:"validateIndices",type:"bool",defaultValue:!0,notSupported:!0}]}],K=[{tfOpName:"Bincount",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"size",type:"number"},{start:2,name:"weights",type:"tensor"}]},{tfOpName:"DenseBincount",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"size",type:"number"},{start:2,name:"weights",type:"tensor"}],attrs:[{tfName:"binary_output",name:"binaryOutput",type:"bool"}]},{tfOpName:"Max",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Mean",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Min",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Sum",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"All",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Any",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"ArgMax",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"ArgMin",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"Prod",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Cumprod",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}],attrs:[{tfName:"exclusive",name:"exclusive",type:"bool"},{tfName:"reverse",name:"reverse",type:"bool"}]},{tfOpName:"Cumsum",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}],attrs:[{tfName:"exclusive",name:"exclusive",type:"bool"},{tfName:"reverse",name:"reverse",type:"bool"}]}],Y=[{tfOpName:"ConcatV2",category:"slice_join",inputs:[{start:0,end:-1,name:"tensors",type:"tensors"},{start:-1,name:"axis",type:"number"}],attrs:[{tfName:"N",name:"n",type:"number",defaultValue:2}]},{tfOpName:"Concat",category:"slice_join",inputs:[{start:1,end:0,name:"tensors",type:"tensors"},{start:0,name:"axis",type:"number"}],attrs:[{tfName:"N",name:"n",type:"number",defaultValue:2}]},{tfOpName:"GatherV2",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"axis",type:"number",defaultValue:0}],attrs:[{tfName:"batch_dims",name:"batchDims",type:"number",defaultValue:0}]},{tfOpName:"Gather",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"}],attrs:[{tfName:"validate_indices",name:"validateIndices",type:"bool",notSupported:!0}]},{tfOpName:"Reverse",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"dims",type:"bool[]"}]},{tfOpName:"ReverseV2",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}]},{tfOpName:"Slice",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"begin",type:"number[]"},{start:2,name:"size",type:"number[]"}]},{tfOpName:"StridedSlice",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"begin",type:"number[]"},{start:2,name:"end",type:"number[]"},{start:3,name:"strides",type:"number[]"}],attrs:[{tfName:"begin_mask",name:"beginMask",type:"number",defaultValue:0},{tfName:"end_mask",name:"endMask",type:"number",defaultValue:0},{tfName:"new_axis_mask",name:"newAxisMask",type:"number",defaultValue:0},{tfName:"ellipsis_mask",name:"ellipsisMask",type:"number",defaultValue:0},{tfName:"shrink_axis_mask",name:"shrinkAxisMask",type:"number",defaultValue:0}]},{tfOpName:"Pack",category:"slice_join",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}],attrs:[{tfName:"axis",name:"axis",type:"number",defaultValue:0}]},{tfOpName:"Unpack",category:"slice_join",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"axis",name:"axis",type:"number",defaultValue:0},{tfName:"num",name:"num",type:"number",defaultValue:0,notSupported:!0}]},{tfOpName:"Tile",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"reps",type:"number[]"}]},{tfOpName:"Split",category:"slice_join",inputs:[{start:0,name:"axis",type:"number",defaultValue:0},{start:1,name:"x",type:"tensor"}],attrs:[{tfName:"num_split",name:"numOrSizeSplits",type:"number",defaultValue:1}]},{tfOpName:"SplitV",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"numOrSizeSplits",type:"number[]"},{start:2,name:"axis",type:"number",defaultValue:0}]},{tfOpName:"ScatterNd",category:"slice_join",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"values",type:"tensor"},{start:2,name:"shape",type:"number[]"}]},{tfOpName:"GatherNd",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"}]},{tfOpName:"SparseToDense",category:"slice_join",inputs:[{start:0,name:"sparseIndices",type:"tensor"},{start:1,name:"outputShape",type:"number[]"},{start:2,name:"sparseValues",type:"tensor"},{start:3,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"validate_indices",name:"validateIndices",type:"bool",defaultValue:!1,notSupported:!0}]}],Q=[{tfOpName:"SparseFillEmptyRows",category:"sparse",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"values",type:"tensor"},{start:2,name:"denseShape",type:"tensor"},{start:3,name:"defaultValue",type:"tensor"}]},{tfOpName:"SparseReshape",category:"sparse",inputs:[{start:0,name:"inputIndices",type:"tensor"},{start:1,name:"inputShape",type:"tensor"},{start:2,name:"newShape",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SparseSegmentMean",category:"sparse",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"segmentIds",type:"tensor"}]},{tfOpName:"SparseSegmentSum",category:"sparse",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"segmentIds",type:"tensor"}]}],Z=[{tfOpName:"FFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"IFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"RFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"fft_length",type:"number",notSupported:!0}]},{tfOpName:"IRFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"fft_length",type:"number",notSupported:!0}]}],J=[{tfOpName:"StringNGrams",category:"string",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"dataSplits",type:"tensor"}],attrs:[{tfName:"separator",name:"separator",type:"string"},{tfName:"ngram_widths",name:"nGramWidths",type:"number[]"},{tfName:"left_pad",name:"leftPad",type:"string"},{tfName:"right_pad",name:"rightPad",type:"string"},{tfName:"pad_width",name:"padWidth",type:"number"},{tfName:"preserve_short_sequences",name:"preserveShortSequences",type:"bool"}],outputs:["ngrams","ngrams_splits"]},{tfOpName:"StringSplit",category:"string",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"delimiter",type:"tensor"}],attrs:[{tfName:"skip_empty",name:"skipEmpty",type:"bool"}],outputs:["indices","values","shape"]},{tfOpName:"StringToHashBucketFast",category:"string",inputs:[{start:0,name:"input",type:"tensor"}],attrs:[{tfName:"num_buckets",name:"numBuckets",type:"number"}]}],ee=[{tfOpName:"Cast",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"SrcT",name:"sdtype",type:"dtype",notSupported:!0},{tfName:"DstT",name:"dtype",type:"dtype"}]},{tfOpName:"ExpandDims",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"MirrorPad",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"}],attrs:[{tfName:"mode",name:"mode",type:"string"}]},{tfOpName:"Pad",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"}],attrs:[{tfName:"constant_value",name:"constantValue",type:"number",defaultValue:0}]},{tfOpName:"PadV2",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"},{start:2,name:"constantValue",type:"number",defaultValue:0}]},{tfOpName:"Reshape",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"shape",type:"number[]"}]},{tfOpName:"Squeeze",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"axis",tfDeprecatedName:"squeeze_dims",name:"axis",type:"number[]"}]},{tfOpName:"SpaceToBatchND",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"blockShape",type:"number[]"},{start:2,name:"paddings",type:"number[]"}]},{tfOpName:"BatchToSpaceND",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"blockShape",type:"number[]"},{start:2,name:"crops",type:"number[]"}]},{tfOpName:"DepthToSpace",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"block_size",name:"blockSize",type:"number"},{tfName:"data_format",name:"dataFormat",type:"string"}]},{tfOpName:"BroadcastTo",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"shape",type:"number[]"}],attrs:[]},{tfOpName:"BroadcastArgs",category:"transformation",inputs:[{start:0,name:"s0",type:"tensor"},{start:1,name:"s1",type:"tensor"}],attrs:[]}];
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
class te{static get Instance(){return this._instance||(this._instance=new this)}constructor(){const e=[a,r,s,o,i,u,l,c,p,d,h,m,f,x,g,y,b,v,C],t=[].concat(...e.map((e=>e.json)));this.opMappers=t.reduce(((e,t)=>(e[t.tfOpName]=t,e)),{})}transformGraph(e,t={}){const n=e.node,a=[],r=[],s=[],o=n.reduce(((e,t)=>(e[t.name]=this.mapNode(t),t.op.startsWith("Placeholder")?a.push(e[t.name]):"Const"===t.op?r.push(e[t.name]):null!=t.input&&0!==t.input.length||s.push(e[t.name]),e)),{});let i=[];const u=[];let l={},c={};null!=t&&(l=this.mapSignatureEntries(t.inputs),c=this.mapSignatureEntries(t.outputs));const p=Object.keys(o);p.forEach((e=>{const t=o[e];t.inputNames.forEach(((e,n)=>{const[a,,r]=_(e),s=o[a];if(null!=s.outputs){const e=s.outputs.indexOf(r);if(-1!==e){const r=`${a}:${e}`;t.inputNames[n]=r}}t.inputs.push(s),s.children.push(t)}))})),0===Object.keys(c).length?p.forEach((e=>{const t=o[e];0===t.children.length&&u.push(t)})):Object.keys(c).forEach((e=>{const[t]=_(e),n=o[t];null!=n&&(n.signatureKey=c[e],u.push(n))})),Object.keys(l).length>0?Object.keys(l).forEach((e=>{const[t]=_(e),n=o[t];n&&(n.signatureKey=l[e],i.push(n))})):i=a;let d={};null!=e.library&&null!=e.library.function&&(d=e.library.function.reduce(((e,t)=>(e[t.signature.name]=this.mapFunction(t),e)),{}));const h={nodes:o,inputs:i,outputs:u,weights:r,placeholders:a,signature:t,functions:d};return s.length>0&&(h.initNodes=s),h}mapSignatureEntries(e){return Object.keys(e||{}).reduce(((t,n)=>(t[e[n].name]=n,t)),{})}mapNode(e){const t=k(e.op)||this.opMappers[e.op]||{};null==e.attr&&(e.attr={});const n={name:e.name,op:e.op,category:t.category,inputNames:(e.input||[]).map((e=>e.startsWith("^")?e.slice(1):e)),inputs:[],children:[],inputParams:{},attrParams:{},rawAttrs:e.attr,outputs:t.outputs};return null!=t.inputs&&(n.inputParams=t.inputs.reduce(((e,t)=>(e[t.name]={type:t.type,inputIndexStart:t.start,inputIndexEnd:t.end},e)),{})),null!=t.attrs&&(n.attrParams=t.attrs.reduce(((t,n)=>{const a=n.type;let r;switch(n.type){case"string":r=re(e.attr,n.tfName,n.defaultValue),void 0===r&&n.tfDeprecatedName&&(r=re(e.attr,n.tfDeprecatedName,n.defaultValue));break;case"string[]":r=me(e.attr,n.tfName,n.defaultValue),void 0===r&&n.tfDeprecatedName&&(r=me(e.attr,n.tfDeprecatedName,n.defaultValue));break;case"number":r=oe(e.attr,n.tfName,n.defaultValue||0),void 0===r&&n.tfDeprecatedName&&(r=oe(e.attr,n.tfDeprecatedName,n.defaultValue));break;case"number[]":r=he(e.attr,n.tfName,n.defaultValue),void 0===r&&n.tfDeprecatedName&&(r=he(e.attr,n.tfDeprecatedName,n.defaultValue));break;case"bool":r=se(e.attr,n.tfName,n.defaultValue),void 0===r&&n.tfDeprecatedName&&(r=se(e.attr,n.tfDeprecatedName,n.defaultValue));break;case"bool[]":r=xe(e.attr,n.tfName,n.defaultValue),void 0===r&&n.tfDeprecatedName&&(r=xe(e.attr,n.tfDeprecatedName,n.defaultValue));break;case"shape":r=de(e.attr,n.tfName,n.defaultValue),void 0===r&&n.tfDeprecatedName&&(r=de(e.attr,n.tfDeprecatedName,n.defaultValue));break;case"shape[]":r=fe(e.attr,n.tfName,n.defaultValue),void 0===r&&n.tfDeprecatedName&&(r=fe(e.attr,n.tfDeprecatedName,n.defaultValue));break;case"dtype":r=le(e.attr,n.tfName,n.defaultValue),void 0===r&&n.tfDeprecatedName&&(r=le(e.attr,n.tfDeprecatedName,n.defaultValue));break;case"dtype[]":r=ce(e.attr,n.tfName,n.defaultValue),void 0===r&&n.tfDeprecatedName&&(r=ce(e.attr,n.tfDeprecatedName,n.defaultValue));break;case"func":r=ue(e.attr,n.tfName,n.defaultValue),void 0===r&&n.tfDeprecatedName&&(r=ue(e.attr,n.tfDeprecatedName,n.defaultValue));break;case"tensor":case"tensors":break;default:throw new Error(`Unsupported param type: ${n.type} for op: ${e.op}`)}return t[n.name]={value:r,type:a},t}),{})),n}mapFunction(e){const t=e.nodeDef,n=[],a=[];let r={};null!=t&&(r=t.reduce(((e,t)=>(e[t.name]=this.mapNode(t),"Const"===t.op&&a.push(e[t.name]),e)),{}));const s=[],o=[];e.signature.inputArg.forEach((e=>{const[t]=_(e.name),n={name:t,op:"Placeholder",inputs:[],inputNames:[],category:"graph",inputParams:{},attrParams:{dtype:{value:ie(e.type),type:"dtype"}},children:[]};n.signatureKey=e.name,s.push(n),r[t]=n}));const i=Object.keys(r);i.forEach((e=>{const t=r[e];t.inputNames.forEach(((e,n)=>{const[a,,s]=_(e),o=r[a];if(null!=o.outputs){const e=o.outputs.indexOf(s);if(-1!==e){const r=`${a}:${e}`;t.inputNames[n]=r}}t.inputs.push(o),o.children.push(t)}))}));const u=e.ret;e.signature.outputArg.forEach((e=>{const[t,n]=_(u[e.name]),a=r[t];null!=a&&(a.defaultOutput=n,o.push(a))}));const l=this.mapArgsToSignature(e);return{nodes:r,inputs:s,outputs:o,weights:a,placeholders:n,signature:l}}mapArgsToSignature(e){return{methodName:e.signature.name,inputs:e.signature.inputArg.reduce(((e,t)=>(e[t.name]=this.mapArgToTensorInfo(t),e)),{}),outputs:e.signature.outputArg.reduce(((t,n)=>(t[n.name]=this.mapArgToTensorInfo(n,e.ret),t)),{})}}mapArgToTensorInfo(e,t){let n=e.name;return null!=t&&(n=t[n]),{name:n,dtype:e.type}}}function ne(e){const t=(0,N.env)().global;if("undefined"!==typeof t.atob)return t.atob(e);if("undefined"!==typeof Buffer)return new Buffer(e,"base64").toString();throw new Error("Unable to decode base64 in this environment. Missing built-in atob() or Buffer()")}function ae(e,t){const n=Array.isArray(e)?String.fromCharCode.apply(null,e):ne(e);return t?n:n.toLowerCase()}function re(e,t,n,a=!1){const r=e[t];return null!=r?ae(r.s,a):n}function se(e,t,n){const a=e[t];return a?a.b:n}function oe(e,t,n){const a=e[t]||{},r=null!=a["i"]?a["i"]:null!=a["f"]?a["f"]:n;return"number"===typeof r?r:parseInt(r,10)}function ie(e){switch("string"===typeof e&&(e=$[e]),e){case $.DT_FLOAT:case $.DT_HALF:return"float32";case $.DT_INT32:case $.DT_INT64:case $.DT_INT8:case $.DT_UINT8:return"int32";case $.DT_BOOL:return"bool";case $.DT_DOUBLE:return"float32";case $.DT_STRING:return"string";default:return null}}function ue(e,t,n){const a=e[t];return a&&a.func?a.func.name:n}function le(e,t,n){const a=e[t];return a&&a.type?ie(a.type):n}function ce(e,t,n){const a=e[t];return a&&a.list&&a.list.type?a.list.type.map((e=>ie(e))):n}function pe(e){if(!e.unknownRank)return null!=e.dim?e.dim.map((e=>"number"===typeof e.size?e.size:parseInt(e.size,10))):[]}function de(e,t,n){const a=e[t];return a&&a.shape?pe(a.shape):n}function he(e,t,n){const a=e[t];return a?((a.list.f&&a.list.f.length?a.list.f:a.list.i)||[]).map((e=>"number"===typeof e?e:parseInt(e,10))):n}function me(e,t,n,a=!1){const r=e[t];return r&&r.list&&r.list.s?r.list.s.map((e=>ae(e,a))):n}function fe(e,t,n){const a=e[t];return a&&a.list&&a.list.shape?a.list.shape.map((e=>pe(e))):n}function xe(e,t,n){const a=e[t];return a&&a.list&&a.list.b?a.list.b:n}
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
class ge{constructor(e,t,n){this.node=e,this.tensorMap=t,this.context=n,this.inputs=[],this.attrs={},this.inputs=e.inputNames.map((e=>this.getInput(e))),null!=e.rawAttrs&&(this.attrs=Object.keys(e.rawAttrs).reduce(((e,t)=>(e[t]=this.getAttr(t),e)),{}))}getInput(e){return R(e,this.tensorMap,this.context)}getAttr(e,t){const n=this.node.rawAttrs[e];if(null!=n.tensor)return R(e,this.tensorMap,this.context);if(null!=n.i||null!=n.f)return oe(this.node.rawAttrs,e,t);if(null!=n.s)return re(this.node.rawAttrs,e,t);if(null!=n.b)return se(this.node.rawAttrs,e,t);if(null!=n.shape)return de(this.node.rawAttrs,e,t);if(null!=n.type)return le(this.node.rawAttrs,e,t);if(null!=n.list){if(null!=n.list.i||null!=n.list.f)return he(this.node.rawAttrs,e,t);if(null!=n.list.s)return me(this.node.rawAttrs,e,t);if(null!=n.list.shape)return fe(this.node.rawAttrs,e,t);if(null!=n.list.b)return xe(this.node.rawAttrs,e,t);if(null!=n.list.type)return ce(this.node.rawAttrs,e,t)}return t}}var ye=n(37523),be=n(16054),ve=n(60152),Ce=n(9258),Ne=n(89359),Te=n(919),$e=n(88991),Se=n(77126),Ie=n(12644),ke=n(30178),we=n(98990),Re=n(53427);
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
const Ee=(e,t,n)=>{switch(e.op){case"BiasAdd":case"AddV2":case"Add":return[ye.W(w("a",e,t,n),w("b",e,t,n))];case"AddN":return[be.Q(w("tensors",e,t,n))];case"FloorMod":case"Mod":return[ve.z(w("a",e,t,n),w("b",e,t,n))];case"Mul":return[Ce.l(w("a",e,t,n),w("b",e,t,n))];case"RealDiv":case"Div":return[Ne.y(w("a",e,t,n),w("b",e,t,n))];case"DivNoNan":return[Te.e(w("a",e,t,n),w("b",e,t,n))];case"FloorDiv":return[$e.w(w("a",e,t,n),w("b",e,t,n))];case"Sub":return[Se.j(w("a",e,t,n),w("b",e,t,n))];case"Minimum":return[Ie.B(w("a",e,t,n),w("b",e,t,n))];case"Maximum":return[ke.P(w("a",e,t,n),w("b",e,t,n))];case"Pow":return[we.n(w("a",e,t,n),w("b",e,t,n))];case"SquaredDifference":return[Re.P(w("a",e,t,n),w("b",e,t,n))];default:throw TypeError(`Node type ${e.op} is not implemented`)}};var _e=n(4888),Oe=n(12804),Ae=n(37558),Fe=n(66841),De=n(50269),Le=n(29580),Pe=n(21404),Ve=n(63774),Me=n(30855),Be=n(37148),Ue=n(99907),We=n(27451),ze=n(83416),Ge=n(95207),He=n(8631),Xe=n(40517),je=n(15606),qe=n(44010),Ke=n(12015),Ye=n(35040),Qe=n(96522),Ze=n(19870),Je=n(1902),et=n(90112),tt=n(25912),nt=n(26325),at=n(28968),rt=n(33726),st=n(51115),ot=n(58276),it=n(66030),ut=n(79348),lt=n(45793),ct=n(57311),pt=n(77823),dt=n(96928),ht=n(83732),mt=n(17820),ft=n(67771),xt=n(66919),gt=n(64394),yt=n(6300);
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
const bt=(e,t,n)=>{switch(e.op){case"Abs":case"ComplexAbs":return[_e.t(w("x",e,t,n))];case"Acos":return[Oe.H(w("x",e,t,n))];case"Acosh":return[Ae.F(w("x",e,t,n))];case"Asin":return[Fe.q(w("x",e,t,n))];case"Asinh":return[De.y(w("x",e,t,n))];case"Atan":return[Le.r(w("x",e,t,n))];case"Atan2":return[Pe.F(w("x",e,t,n),w("y",e,t,n))];case"Atanh":return[Ve.r(w("x",e,t,n))];case"Ceil":return[Me.m(w("x",e,t,n))];case"Complex":return[Be.f(w("real",e,t,n),w("imag",e,t,n))];case"Cos":return[Ue.g(w("x",e,t,n))];case"Cosh":return[We.y(w("x",e,t,n))];case"Elu":return[ze.P(w("x",e,t,n))];case"Erf":return[Ge.Y(w("x",e,t,n))];case"Exp":return[He.o(w("x",e,t,n))];case"Expm1":return[Xe.I(w("x",e,t,n))];case"Floor":return[je.R(w("x",e,t,n))];case"Log":return[qe.R(w("x",e,t,n))];case"Log1p":return[Ke.K(w("x",e,t,n))];case"Imag":return[Ye.n(w("x",e,t,n))];case"Neg":return[Qe.H(w("x",e,t,n))];case"Reciprocal":return[Ze.V(w("x",e,t,n))];case"Real":return[Je.x(w("x",e,t,n))];case"Relu":return[et.V(w("x",e,t,n))];case"Round":return[tt.L(w("x",e,t,n))];case"Selu":return[nt.W(w("x",e,t,n))];case"Sigmoid":return[at.r(w("x",e,t,n))];case"Sin":return[rt.F(w("x",e,t,n))];case"Sign":return[st._(w("x",e,t,n))];case"Sinh":return[ot.L(w("x",e,t,n))];case"Softplus":return[it.l(w("x",e,t,n))];case"Sqrt":return[ut.R(w("x",e,t,n))];case"Square":return[lt.E(w("x",e,t,n))];case"Tanh":return[ct.y(w("x",e,t,n))];case"Tan":return[pt.M(w("x",e,t,n))];case"ClipByValue":return[dt.z(w("x",e,t,n),w("clipValueMin",e,t,n),w("clipValueMax",e,t,n))];case"Relu6":return[ht.j(w("x",e,t,n))];case"Rsqrt":return[mt.Z(R(e.inputNames[0],t,n))];case"Prod":return[ft._(w("x",e,t,n),w("axes",e,t,n))];case"LeakyRelu":return[xt.H(w("x",e,t,n),w("alpha",e,t,n))];case"Prelu":return[gt.N(w("x",e,t,n),w("alpha",e,t,n))];case"IsNan":return[yt.y(R(e.inputNames[0],t,n))];default:throw TypeError(`Node type ${e.op} is not implemented`)}};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function vt(e,t,n=""){if("number"!==typeof e&&"number"!==typeof t){N.util.assert(e.length===t.length,(()=>n+` Shapes ${e} and ${t} must match`));for(let a=0;a<e.length;a++){const r=e[a],s=t[a];N.util.assert(r<0||s<0||r===s,(()=>n+` Shapes ${e} and ${t} must match`))}}}function Ct(e){return"number"!==typeof e&&!e.some((e=>e<0))}function Nt(e,t,n){let a=Tt(e,n);const r=!Ct(a);if(r&&0===t.length)throw new Error(`Tried to calculate elements of an empty list with non-fully-defined elementShape: ${a}`);if(r&&t.forEach((e=>{a=Tt(e.shape,a)})),!Ct(a))throw new Error(`Non-fully-defined elementShape: ${a}`);return a}function Tt(e,t){if("number"===typeof e)return t;if("number"===typeof t)return e;if(e.length!==t.length)throw new Error(`Incompatible ranks during merge: ${e} vs. ${t}`);const n=[];for(let a=0;a<e.length;++a){const r=e[a],s=t[a];if(r>=0&&s>=0&&r!==s)throw new Error(`Incompatible shape during merge: ${e} vs. ${t}`);n[a]=r>=0?r:s}return n}
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
class $t{constructor(e,t,n,a,r,s,o){this.name=e,this.dtype=t,this.maxSize=n,this.elementShape=a,this.identicalElementShapes=r,this.dynamicSize=s,this.clearAfterRead=o,this.tensors=[],this.closed_=!1,this.idTensor=(0,N.scalar)(0),(0,N.keep)(this.idTensor)}get id(){return this.idTensor.id}get closed(){return this.closed_}clearAndClose(e){this.tensors.forEach((t=>{null!=e&&e.has(t.tensor.id)||t.tensor.dispose()})),this.tensors=[],this.closed_=!0,this.idTensor.dispose()}size(){return this.tensors.length}read(e){if(this.closed_)throw new Error(`TensorArray ${this.name} has already been closed.`);if(e<0||e>=this.size())throw new Error(`Tried to read from index ${e}, but array size is: ${this.size()}`);const t=this.tensors[e];if(t.cleared)throw new Error(`TensorArray ${this.name}: Could not read index ${e} twice because it was cleared after a previous read (perhaps try setting clear_after_read = false?).`);return this.clearAfterRead&&(t.cleared=!0),t.read=!0,t.tensor}readMany(e){return e.map((e=>this.read(e)))}write(e,t){if(this.closed_)throw new Error(`TensorArray ${this.name} has already been closed.`);if(e<0||!this.dynamicSize&&e>=this.maxSize)throw new Error(`Tried to write to index ${e}, but array is not resizeable and size is: ${this.maxSize}`);const n=this.tensors[e]||{};if(t.dtype!==this.dtype)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${e},\n          because the value dtype is ${t.dtype}, but TensorArray dtype is ${this.dtype}.`);if(0!==this.size()||null!=this.elementShape&&0!==this.elementShape.length||(this.elementShape=t.shape),vt(this.elementShape,t.shape,`TensorArray ${this.name}: Could not write to TensorArray index ${e}.`),n.read)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${e}, because it has already been read.`);if(n.written)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${e}, because it has already been written.`);n.tensor=t,(0,N.keep)(t),n.written=!0,this.tensors[e]=n}writeMany(e,t){if(e.length!==t.length)throw new Error(`TensorArray ${this.name}: could not write multiple tensors,because the index size: ${e.length} is not the same as tensors size: ${t.length}.`);e.forEach(((e,n)=>this.write(e,t[n])))}gather(e,t){if(t&&t!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but gather requested dtype ${t}`);if(e)e=e.slice(0,this.size());else{e=[];for(let t=0;t<this.size();t++)e.push(t)}if(0===e.length)return(0,N.tensor)([],[0].concat(this.elementShape));const n=this.readMany(e);return vt(this.elementShape,n[0].shape,"TensorArray shape mismatch: "),(0,N.stack)(n,0)}concat(e){if(e&&e!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but concat requested dtype ${e}`);if(0===this.size())return(0,N.tensor)([],[0].concat(this.elementShape));const t=[];for(let a=0;a<this.size();a++)t.push(a);const n=this.readMany(t);return vt(this.elementShape,n[0].shape,`TensorArray shape mismatch: tensor array shape (${this.elementShape}) vs first tensor shape (${n[0].shape})`),(0,N.concat)(n,0)}scatter(e,t){if(t.dtype!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but tensor has dtype ${t.dtype}`);if(e.length!==t.shape[0])throw new Error(`Expected len(indices) == tensor.shape[0], but saw: ${e.length} vs. ${t.shape[0]}`);const n=Math.max(...e);if(!this.dynamicSize&&n>=this.maxSize)throw new Error(`Max index must be < array size (${n}  vs. ${this.maxSize})`);this.writeMany(e,(0,N.unstack)(t,0))}split(e,t){if(t.dtype!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but tensor has dtype ${t.dtype}`);let n=0;const a=e.map((e=>(n+=e,n)));if(n!==t.shape[0])throw new Error(`Expected sum of lengths to be equal to\n          tensor.shape[0], but sum of lengths is\n        ${n}, and tensor's shape is: ${t.shape}`);if(!this.dynamicSize&&e.length!==this.maxSize)throw new Error(`TensorArray's size is not equal to the size of lengths (${this.maxSize} vs. ${e.length}), and the TensorArray is not marked as dynamically resizeable`);const r=0===n?0:t.size/n,s=[];(0,N.tidy)((()=>{t=(0,N.reshape)(t,[1,n,r]);for(let n=0;n<e.length;++n){const o=0===n?0:a[n-1],i=[0,o,0],u=[1,e[n],r];s[n]=(0,N.reshape)((0,N.slice)(t,i,u),this.elementShape)}return s}));const o=[];for(let i=0;i<e.length;i++)o[i]=i;this.writeMany(o,s)}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class St{constructor(e,t,n,a=-1){this.tensors=e,this.elementShape=t,this.elementDtype=n,null!=e&&e.forEach((e=>{if(n!==e.dtype)throw new Error(`Invalid data types; op elements ${n}, but list elements ${e.dtype}`);vt(t,e.shape,"TensorList shape mismatch: "),(0,N.keep)(e)})),this.idTensor=(0,N.scalar)(0),this.maxNumElements=a,(0,N.keep)(this.idTensor)}get id(){return this.idTensor.id}copy(){return new St([...this.tensors],this.elementShape,this.elementDtype)}clearAndClose(e){this.tensors.forEach((t=>{null!=e&&e.has(t.id)||t.dispose()})),this.tensors.length=0,this.idTensor.dispose()}size(){return this.tensors.length}stack(e,t,n=-1){if(t!==this.elementDtype)throw new Error(`Invalid data types; op elements ${t}, but list elements ${this.elementDtype}`);if(-1!==n&&this.tensors.length!==n)throw new Error(`Operation expected a list with ${n} elements but got a list with ${this.tensors.length} elements.`);vt(e,this.elementShape,"TensorList shape mismatch: ");const a=Nt(this.elementShape,this.tensors,e);return(0,N.tidy)((()=>{const e=this.tensors.map((e=>(0,N.reshape)(e,a)));return(0,N.stack)(e,0)}))}popBack(e,t){if(t!==this.elementDtype)throw new Error(`Invalid data types; op elements ${t}, but list elements ${this.elementDtype}`);if(0===this.size())throw new Error("Trying to pop from an empty list.");const n=Nt(this.elementShape,this.tensors,e),a=this.tensors.pop();return vt(a.shape,e,"TensorList shape mismatch: "),(0,N.reshape)(a,n)}pushBack(e){if(e.dtype!==this.elementDtype)throw new Error(`Invalid data types; op elements ${e.dtype}, but list elements ${this.elementDtype}`);if(vt(e.shape,this.elementShape,"TensorList shape mismatch: "),this.maxNumElements===this.size())throw new Error("Trying to push element into a full list.");(0,N.keep)(e),this.tensors.push(e)}resize(e){if(e<0)throw new Error(`TensorListResize expects size to be non-negative. Got: ${e}`);if(-1!==this.maxNumElements&&e>this.maxNumElements)throw new Error(`TensorListResize input size ${e} is greater maxNumElement ${this.maxNumElements}.`);const t=new St([],this.elementShape,this.elementDtype,this.maxNumElements);t.tensors.length=e;for(let n=0;n<Math.min(this.tensors.length,e);++n)t.tensors[n]=this.tensors[n];return t}getItem(e,t,n){if(n!==this.elementDtype)throw new Error(`Invalid data types; op elements ${n}, but list elements ${this.elementDtype}`);if(e<0||e>this.tensors.length)throw new Error(`Trying to access element ${e} in a list with ${this.tensors.length} elements.`);if(null==this.tensors[e])throw new Error(`element at index ${e} is null.`);vt(this.tensors[e].shape,t,"TensorList shape mismatch: ");const a=Nt(this.elementShape,this.tensors,t);return(0,N.reshape)(this.tensors[e],a)}setItem(e,t){if(t.dtype!==this.elementDtype)throw new Error(`Invalid data types; op elements ${t.dtype}, but list elements ${this.elementDtype}`);if(e<0||-1!==this.maxNumElements&&e>=this.maxNumElements)throw new Error(`Trying to set element ${e} in a list with max ${this.maxNumElements} elements.`);vt(this.elementShape,t.shape,"TensorList shape mismatch: "),(0,N.keep)(t),this.tensors[e]=t}gather(e,t,n){if(t!==this.elementDtype)throw new Error(`Invalid data types; op elements ${t}, but list elements ${this.elementDtype}`);vt(this.elementShape,n,"TensorList shape mismatch: "),e=e.slice(0,this.size());const a=Nt(this.elementShape,this.tensors,n);return 0===e.length?(0,N.tensor)([],[0].concat(a)):(0,N.tidy)((()=>{const t=e.map((e=>(0,N.reshape)(this.tensors[e],a)));return(0,N.stack)(t,0)}))}concat(e,t){if(e&&e!==this.elementDtype)throw new Error(`TensorList dtype is ${this.elementDtype} but concat requested dtype ${e}`);vt(this.elementShape,t,"TensorList shape mismatch: ");const n=Nt(this.elementShape,this.tensors,t);return 0===this.size()?(0,N.tensor)([],[0].concat(n)):(0,N.tidy)((()=>{const e=this.tensors.map((e=>(0,N.reshape)(e,n)));return(0,N.concat)(e,0)}))}}function It(e,t,n){const a=e.dtype;if(e.shape.length<1)throw new Error(`Tensor must be at least a vector, but saw shape: ${e.shape}`);if(e.dtype!==n)throw new Error(`Invalid data types; op elements ${e.dtype}, but list elements ${n}`);const r=e.shape.slice(1);vt(r,t,"TensorList shape mismatch: ");const s=(0,N.unstack)(e);return new St(s,t,a)}function kt(e,t,n){return new St([],e,t,n)}function wt(e,t,n,a){if(t.length!==e.shape[0])throw new Error(`Expected len(indices) == tensor.shape[0], but saw: ${t.length} vs. ${e.shape[0]}`);const r=Math.max(...t);if(null!=a&&-1!==a&&r>=a)throw new Error(`Max index must be < array size (${r}  vs. ${a})`);const s=new St([],n,e.dtype,a),o=(0,N.unstack)(e,0);return t.forEach(((e,t)=>{s.setItem(e,o[t])})),s}function Rt(e,t,n){let a=0;const r=t.map((e=>(a+=e,a)));if(a!==e.shape[0])throw new Error(`Expected sum of lengths to be equal to\n          tensor.shape[0], but sum of lengths is\n        ${a}, and tensor's shape is: ${e.shape}`);const s=e.shape.slice(1),o=Tt(s,n),i=0===a?0:e.size/a,u=(0,N.tidy)((()=>{const n=[];e=(0,N.reshape)(e,[1,a,i]);for(let a=0;a<t.length;++a){const s=0===a?0:r[a-1],u=[0,s,0],l=[1,t[a],i];n[a]=(0,N.reshape)((0,N.slice)(e,u,l),o)}return e.dispose(),n})),l=new St([],n,e.dtype,t.length);for(let c=0;c<u.length;c++)l.setItem(c,u[c]);return l}
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
const Et=async(e,t,n)=>{switch(e.op){case"If":case"StatelessIf":{const a=w("thenBranch",e,t,n),r=w("elseBranch",e,t,n),s=w("cond",e,t,n),o=w("args",e,t,n),i=await s.data();return i[0]?n.functionMap[a].executeFunctionAsync(o,n.tensorArrayMap,n.tensorListMap):n.functionMap[r].executeFunctionAsync(o,n.tensorArrayMap,n.tensorListMap)}case"While":case"StatelessWhile":{const a=w("body",e,t,n),r=w("cond",e,t,n),s=w("args",e,t,n),o=await n.functionMap[r].executeFunctionAsync(s,n.tensorArrayMap,n.tensorListMap),i=s.map((e=>e.id));let u=await o[0].data();o.forEach((e=>{e.kept||-1!==i.indexOf(e.id)||e.dispose()}));let l=s;while(u[0]){const e=l;l=await n.functionMap[a].executeFunctionAsync(l,n.tensorArrayMap,n.tensorListMap);const t=l.map((e=>e.id));e.forEach((e=>{e.kept||-1!==i.indexOf(e.id)||-1!==t.indexOf(e.id)||e.dispose()}));const s=await n.functionMap[r].executeFunctionAsync(l,n.tensorArrayMap,n.tensorListMap);u=await s[0].data(),s.forEach((e=>{e.kept||-1!==i.indexOf(e.id)||-1!==t.indexOf(e.id)||e.dispose()}))}return l}case"LoopCond":{const a=w("pred",e,t,n);return[D(a)]}case"Switch":{const a=w("pred",e,t,n);let r=w("data",e,t,n);return r.kept||(r=D(r)),(await a.data())[0]?[void 0,r]:[r,void 0]}case"Merge":{const a=e.inputNames.find((e=>void 0!==R(e,t,n)));if(a){const e=R(a,t,n);return[D(e)]}return}case"Enter":{const a=w("frameName",e,t,n),r=w("tensor",e,t,n);return n.enterFrame(a),[D(r)]}case"Exit":{const a=w("tensor",e,t,n);return n.exitFrame(),[D(a)]}case"NextIteration":{const a=w("tensor",e,t,n);return n.nextIteration(),[D(a)]}case"TensorArrayV3":{const a=w("size",e,t,n),r=w("dtype",e,t,n),s=w("elementShape",e,t,n),o=w("dynamicSize",e,t,n),i=w("clearAfterRead",e,t,n),u=w("identicalElementShapes",e,t,n),l=w("name",e,t,n),c=new $t(l,r,a,s,u,o,i);return n.addTensorArray(c),[c.idTensor,(0,N.scalar)(1)]}case"TensorArrayWriteV3":{const a=w("tensorArrayId",e,t,n),r=w("index",e,t,n),s=w("tensor",e,t,n),o=n.getTensorArray(a.id);return o.write(r,s),[o.idTensor]}case"TensorArrayReadV3":{const a=w("tensorArrayId",e,t,n),r=w("index",e,t,n),s=n.getTensorArray(a.id);return[s.read(r)]}case"TensorArrayGatherV3":{const a=w("tensorArrayId",e,t,n),r=w("indices",e,t,n),s=w("dtype",e,t,n),o=n.getTensorArray(a.id);return[o.gather(r,s)]}case"TensorArrayScatterV3":{const a=w("tensorArrayId",e,t,n),r=w("indices",e,t,n),s=w("tensor",e,t,n),o=n.getTensorArray(a.id);return o.scatter(r,s),[o.idTensor]}case"TensorArrayConcatV3":{const a=w("tensorArrayId",e,t,n),r=n.getTensorArray(a.id),s=w("dtype",e,t,n);return[r.concat(s)]}case"TensorArraySplitV3":{const a=w("tensorArrayId",e,t,n),r=w("tensor",e,t,n),s=w("lengths",e,t,n),o=n.getTensorArray(a.id);return o.split(s,r),[o.idTensor]}case"TensorArraySizeV3":{const a=w("tensorArrayId",e,t,n),r=n.getTensorArray(a.id);return[(0,N.scalar)(r.size(),"int32")]}case"TensorArrayCloseV3":{const a=w("tensorArrayId",e,t,n),r=n.getTensorArray(a.id);return r.clearAndClose(),[r.idTensor]}case"TensorListSetItem":{const a=w("tensorListId",e,t,n),r=w("index",e,t,n),s=w("tensor",e,t,n),o=n.getTensorList(a.id);return o.setItem(r,s),[o.idTensor]}case"TensorListGetItem":{const a=w("tensorListId",e,t,n),r=w("index",e,t,n),s=w("elementShape",e,t,n),o=w("elementDType",e,t,n),i=n.getTensorList(a.id);return[i.getItem(r,s,o)]}case"TensorListScatterV2":case"TensorListScatter":{const a=w("indices",e,t,n),r=w("tensor",e,t,n),s=w("elementShape",e,t,n),o=w("numElements",e,t,n),i=wt(r,a,s,o);return n.addTensorList(i),[i.idTensor]}case"TensorListReserve":case"EmptyTensorList":{const a=w("elementShape",e,t,n),r=w("elementDType",e,t,n);let s;s="TensorListReserve"===e.op?"numElements":"maxNumElements";const o=w(s,e,t,n),i=kt(a,r,o);return n.addTensorList(i),[i.idTensor]}case"TensorListGather":{const a=w("tensorListId",e,t,n),r=w("indices",e,t,n),s=w("elementShape",e,t,n),o=w("elementDType",e,t,n),i=n.getTensorList(a.id);return[i.gather(r,o,s)]}case"TensorListStack":{const a=w("tensorListId",e,t,n),r=w("elementShape",e,t,n),s=w("elementDType",e,t,n),o=w("numElements",e,t,n),i=n.getTensorList(a.id);return[i.stack(r,s,o)]}case"TensorListFromTensor":{const a=w("tensor",e,t,n),r=w("elementShape",e,t,n),s=w("elementDType",e,t,n),o=It(a,r,s);return n.addTensorList(o),[o.idTensor]}case"TensorListConcat":case"TensorListConcatV2":{const a=w("tensorListId",e,t,n),r=n.getTensorList(a.id),s=w("dtype",e,t,n),o=w("elementShape",e,t,n);return[r.concat(s,o)]}case"TensorListPushBack":{const a=w("tensorListId",e,t,n),r=w("tensor",e,t,n),s=n.getTensorList(a.id);return s.pushBack(r),[s.idTensor]}case"TensorListPopBack":{const a=w("tensorListId",e,t,n),r=w("elementShape",e,t,n),s=w("elementDType",e,t,n),o=n.getTensorList(a.id);return[o.popBack(r,s)]}case"TensorListSplit":{const a=w("tensor",e,t,n),r=w("elementShape",e,t,n),s=w("lengths",e,t,n),o=Rt(a,s,r);return n.addTensorList(o),[o.idTensor]}case"TensorListLength":{const a=w("tensorListId",e,t,n),r=n.getTensorList(a.id);return[(0,N.scalar)(r.size(),"int32")]}case"TensorListResize":{const a=w("tensorListId",e,t,n),r=w("size",e,t,n),s=n.getTensorList(a.id),o=s.resize(r);return n.addTensorList(o),[o.idTensor]}default:throw TypeError(`Node type ${e.op} is not implemented`)}};var _t=n(3701),Ot=n(28794),At=n(93502),Ft=n(91624),Dt=n(41106),Lt=n(10676),Pt=n(90167),Vt=n(53909),Mt=n(86999),Bt=n(45243),Ut=n(53855),Wt=n(14349),zt=n(93002);
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
function Gt(e,t,n){const[a,r]=w("fusedOps",e,t,n),s="biasadd"===a,o=!s,i="prelu"===r,u="fusedbatchnorm"===a,l=w("numArgs",e,t,n);if(s){if(i&&2!==l)throw new Error("FusedConv2d and DepthwiseConv2d with BiasAdd and Prelu must have two extra arguments: bias and alpha.");if(!i&&s&&1!==l)throw new Error("FusedConv2d and DepthwiseConv2d with BiasAdd must have one extra argument: bias.")}if(u)throw new Error("FusedConv2d and DepthwiseConv2d with FusedBatchNorm is not supported");const c=w("strides",e,t,n),p=F(e,t,n),d=w("dataFormat",e,t,n).toUpperCase(),h=w("dilations",e,t,n);let[m,f]=w("args",e,t,n);o&&(f=m,m=void 0);const x=w("leakyreluAlpha",e,t,n);return{stride:c,pad:p,dataFormat:d,dilations:h,biasArg:m,preluArg:f,activationFunc:r,leakyreluAlpha:x}}const Ht=(e,t,n)=>{switch(e.op){case"Conv1D":{const a=w("stride",e,t,n),r=w("pad",e,t,n),s=w("dataFormat",e,t,n).toUpperCase(),o=w("dilation",e,t,n);return[_t.k(w("x",e,t,n),w("filter",e,t,n),a,r,s,o)]}case"Conv2D":{const a=w("strides",e,t,n),r=F(e,t,n),s=w("dataFormat",e,t,n).toUpperCase(),o=w("dilations",e,t,n);return[Ot.X(w("x",e,t,n),w("filter",e,t,n),[a[1],a[2]],r,s,[o[1],o[2]])]}case"_FusedConv2D":{const{stride:a,pad:r,dataFormat:s,dilations:o,biasArg:i,preluArg:u,activationFunc:l,leakyreluAlpha:c}=Gt(e,t,n);return[At.X({x:w("x",e,t,n),filter:w("filter",e,t,n),strides:[a[1],a[2]],pad:r,dataFormat:s,dilations:[o[1],o[2]],bias:i,activation:l,preluActivationWeights:u,leakyreluAlpha:c})]}case"FusedDepthwiseConv2dNative":{const{stride:a,pad:r,dataFormat:s,dilations:o,biasArg:i,preluArg:u,activationFunc:l,leakyreluAlpha:c}=Gt(e,t,n);return[Ft.G({x:w("x",e,t,n),filter:w("filter",e,t,n),strides:[a[1],a[2]],pad:r,dataFormat:s,dilations:[o[1],o[2]],bias:i,activation:l,preluActivationWeights:u,leakyreluAlpha:c})]}case"Conv2DBackpropInput":case"Conv2dTranspose":{const a=w("outputShape",e,t,n),r=w("strides",e,t,n),s=F(e,t,n);return[Dt.w(w("x",e,t,n),w("filter",e,t,n),a,[r[1],r[2]],s)]}case"DepthwiseConv2dNative":case"DepthwiseConv2d":{const a=w("strides",e,t,n),r=F(e,t,n),s=w("dilations",e,t,n),o=w("dataFormat",e,t,n).toUpperCase();return[Lt.G(w("input",e,t,n),w("filter",e,t,n),[a[1],a[2]],r,o,[s[1],s[2]])]}case"Conv3D":{const a=w("strides",e,t,n),r=w("pad",e,t,n),s=w("dataFormat",e,t,n).toUpperCase(),o=w("dilations",e,t,n);return[Pt.I(w("x",e,t,n),w("filter",e,t,n),[a[1],a[2],a[3]],r,s,[o[1],o[2],o[3]])]}case"AvgPool":{const a=w("strides",e,t,n),r=w("pad",e,t,n),s=w("kernelSize",e,t,n);return[Vt.$(w("x",e,t,n),[s[1],s[2]],[a[1],a[2]],r)]}case"MaxPool":{const a=w("strides",e,t,n),r=w("pad",e,t,n),s=w("kernelSize",e,t,n);return[Mt.j(w("x",e,t,n),[s[1],s[2]],[a[1],a[2]],r)]}case"MaxPoolWithArgmax":{const a=w("strides",e,t,n),r=w("pad",e,t,n),s=w("kernelSize",e,t,n),o=w("includeBatchInIndex",e,t,n),{result:i,indexes:u}=Bt.R(w("x",e,t,n),[s[1],s[2]],[a[1],a[2]],r,o);return[i,u]}case"AvgPool3D":{const a=w("strides",e,t,n),r=w("pad",e,t,n),s=w("kernelSize",e,t,n);return[Ut.s(w("x",e,t,n),[s[1],s[2],s[3]],[a[1],a[2],a[3]],r)]}case"MaxPool3D":{const a=w("strides",e,t,n),r=w("pad",e,t,n),s=w("kernelSize",e,t,n);return[Wt.e(w("x",e,t,n),[s[1],s[2],s[3]],[a[1],a[2],a[3]],r)]}case"Dilation2D":{const a=w("strides",e,t,n),r=w("pad",e,t,n),s=w("dilations",e,t,n),o=a[1],i=a[2],u=s[1],l=s[2];return[zt.X(w("x",e,t,n),w("filter",e,t,n),[o,i],r,[u,l],"NHWC")]}default:throw TypeError(`Node type ${e.op} is not implemented`)}};var Xt=n(96111),jt=n(46545),qt=n(71781),Kt=n(11760),Yt=n(61411),Qt=n(69885),Zt=n(79546),Jt=n(44645),en=n(97858),tn=n(42855),nn=n(55537);
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
const an=(e,t,n)=>{switch(e.op){case"Fill":{const a=w("shape",e,t,n),r=w("dtype",e,t,n),s=w("value",e,t,n);return[Xt.G(a,s,r)]}case"LinSpace":{const a=w("start",e,t,n),r=w("stop",e,t,n),s=w("num",e,t,n);return[jt.m(a,r,s)]}case"Multinomial":{const a=w("logits",e,t,n),r=w("numSamples",e,t,n),s=w("seed",e,t,n);return[qt.O(a,r,s)]}case"OneHot":{const a=w("indices",e,t,n),r=w("depth",e,t,n),s=w("onValue",e,t,n),o=w("offValue",e,t,n);return[Kt.M(a,r,s,o)]}case"Ones":return[Yt.S(w("shape",e,t,n),w("dtype",e,t,n))];case"OnesLike":return[Qt.P(w("x",e,t,n))];case"RandomUniform":return[Zt.Y(w("shape",e,t,n),w("minval",e,t,n),w("maxval",e,t,n),w("dtype",e,t,n))];case"Range":{const a=w("start",e,t,n),r=w("stop",e,t,n),s=w("step",e,t,n);return[Jt.y(a,r,s,w("dtype",e,t,n))]}case"TruncatedNormal":{const a=w("shape",e,t,n),r=w("mean",e,t,n),s=w("stdDev",e,t,n),o=w("seed",e,t,n);return[en.e(a,r,s,w("dtype",e,t,n),o)]}case"Zeros":return[tn.U(w("shape",e,t,n),w("dtype",e,t,n))];case"ZerosLike":return[nn.P(w("x",e,t,n))];default:throw TypeError(`Node type ${e.op} is not implemented`)}};var rn=n(63208),sn=n(29809),on=n(66652),un=n(23325);
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
function ln(e,t,n){const a=w("boxes",e,t,n),r=w("scores",e,t,n),s=w("maxOutputSize",e,t,n),o=w("iouThreshold",e,t,n),i=w("scoreThreshold",e,t,n),u=w("softNmsSigma",e,t,n);return{boxes:a,scores:r,maxOutputSize:s,iouThreshold:o,scoreThreshold:i,softNmsSigma:u}}const cn=async(e,t,n)=>{switch(e.op){case"NonMaxSuppressionV5":{const{boxes:a,scores:r,maxOutputSize:s,iouThreshold:o,scoreThreshold:i,softNmsSigma:u}=ln(e,t,n),l=await rn.Slp.nonMaxSuppressionWithScoreAsync(a,r,s,o,i,u);return[l.selectedIndices,l.selectedScores]}case"NonMaxSuppressionV4":{const{boxes:a,scores:r,maxOutputSize:s,iouThreshold:o,scoreThreshold:i}=ln(e,t,n),u=w("padToMaxOutputSize",e,t,n),l=await rn.Slp.nonMaxSuppressionPaddedAsync(a,r,s,o,i,u);return[l.selectedIndices,l.validOutputs]}case"NonMaxSuppressionV3":case"NonMaxSuppressionV2":{const{boxes:a,scores:r,maxOutputSize:s,iouThreshold:o,scoreThreshold:i}=ln(e,t,n);return[await rn.Slp.nonMaxSuppressionAsync(a,r,s,o,i)]}case"Where":{const a=sn.w(w("condition",e,t,n),"bool"),r=[await on.Y(a)];return a.dispose(),r}case"ListDiff":return un.F(w("x",e,t,n),w("y",e,t,n));default:throw TypeError(`Node type ${e.op} is not implemented`)}};var pn=n(80462),dn=n(21190),hn=n(16319),mn=n(73937);
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
const fn=(e,t,n)=>{switch(e.op){case"LowerBound":{const a=w("sortedSequence",e,t,n),r=w("values",e,t,n);return[pn.y(a,r)]}case"TopKV2":{const a=w("x",e,t,n),r=w("k",e,t,n),s=w("sorted",e,t,n),o=dn.r(a,r,s);return[o.values,o.indices]}case"UpperBound":{const a=w("sortedSequence",e,t,n),r=w("values",e,t,n);return[hn.r(a,r)]}case"Unique":{const a=w("x",e,t,n),r=mn.A(a);return[r.values,r.indices]}case"UniqueV2":{const a=w("x",e,t,n),r=w("axis",e,t,n),s=mn.A(a,r);return[s.values,s.indices]}default:throw TypeError(`Node type ${e.op} is not implemented`)}};var xn=n(62018),gn=n(45702);
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
const yn=(e,t,n)=>{switch(e.op){case"Const":return t[e.name];case"PlaceholderWithDefault":const a=w("default",e,t,n);return[R(e.name,t,n)||a];case"Placeholder":return[R(e.name,t,n)];case"Identity":case"StopGradient":case"FakeQuantWithMinMaxVars":{const a=w("x",e,t,n);return[D(a)]}case"IdentityN":return w("x",e,t,n).map((e=>D(e)));case"Snapshot":const r=w("x",e,t,n);return[D(r)];case"Shape":return[xn.t(w("x",e,t,n).shape,"int32")];case"ShapeN":return w("x",e,t,n).map((e=>xn.t(e.shape)));case"Size":return[gn.d(w("x",e,t,n).size,"int32")];case"Rank":return[gn.d(w("x",e,t,n).rank,"int32")];case"NoOp":return[gn.d(1)];case"Print":const s=w("x",e,t,n),o=w("data",e,t,n),i=w("message",e,t,n),u=w("summarize",e,t,n);console.warn("The graph has a tf.print() operation,usually used for debugging, which slows down performance."),console.log(i);for(let e=0;e<o.length;e++)console.log(Array.prototype.slice.call(o[e].dataSync()).slice(0,u));return[s];default:throw TypeError(`Node type ${e.op} is not implemented`)}};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class bn{constructor(e,t){this.keyDType=e,this.valueDType=t,this.handle=(0,N.scalar)(0),this.tensorMap=new Map,(0,N.keep)(this.handle)}get id(){return this.handle.id}clearAndClose(){this.tensorMap.forEach((e=>e.dispose())),this.tensorMap.clear(),this.handle.dispose()}size(){return this.tensorMap.size}tensorSize(){return gn.d(this.size(),"int32")}async import(e,t){this.checkKeyAndValueTensor(e,t);const n=await e.data();return this.tensorMap.forEach((e=>e.dispose())),this.tensorMap.clear(),(0,N.tidy)((()=>{const e=(0,N.unstack)(t),a=n.length,r=e.length;N.util.assert(a===r,(()=>`The number of elements doesn't match, keys has ${a} elements, the values has ${r} elements.`));for(let t=0;t<a;t++){const a=n[t],r=e[t];(0,N.keep)(r),this.tensorMap.set(a,r)}return this.handle}))}async find(e,t){this.checkKeyAndValueTensor(e,t);const n=await e.data();return(0,N.tidy)((()=>{const e=[];for(let a=0;a<n.length;a++){const r=n[a],s=this.findWithDefault(r,t);e.push(s)}return(0,N.stack)(e)}))}findWithDefault(e,t){const n=this.tensorMap.get(e);return null!=n?n:t}checkKeyAndValueTensor(e,t){if(e.dtype!==this.keyDType)throw new Error(`Expect key dtype ${this.keyDType}, but got ${e.dtype}`);if(t.dtype!==this.valueDType)throw new Error(`Expect value dtype ${this.valueDType}, but got ${t.dtype}`)}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const vn=async(e,t,n,a)=>{switch(e.op){case"HashTable":case"HashTableV2":{const r=w("keyDType",e,t,n),s=w("valueDType",e,t,n),o=new bn(r,s);return a.addHashTable(e.name,o),[o.handle]}case"LookupTableImport":case"LookupTableImportV2":{const r=w("tableHandle",e,t,n,a),s=w("keys",e,t,n),o=w("values",e,t,n),i=a.getHashTableById(r.id);return[await i.import(s,o)]}case"LookupTableFind":case"LookupTableFindV2":{const r=w("tableHandle",e,t,n,a),s=w("keys",e,t,n),o=w("defaultValue",e,t,n),i=a.getHashTableById(r.id);return[await i.find(s,o)]}case"LookupTableSize":case"LookupTableSizeV2":{const r=w("tableHandle",e,t,n,a),s=a.getHashTableById(r.id);return[s.tensorSize()]}default:throw TypeError(`Node type ${e.op} is not implemented`)}},Cn=(e,t,n)=>{switch(e.op){case"ResizeBilinear":{const a=w("images",e,t,n),r=w("size",e,t,n),s=w("alignCorners",e,t,n),o=w("halfPixelCenters",e,t,n);return[rn.Slp.resizeBilinear(a,[r[0],r[1]],s,o)]}case"ResizeNearestNeighbor":{const a=w("images",e,t,n),r=w("size",e,t,n),s=w("alignCorners",e,t,n),o=w("halfPixelCenters",e,t,n);return[rn.Slp.resizeNearestNeighbor(a,[r[0],r[1]],s,o)]}case"CropAndResize":{const a=w("image",e,t,n),r=w("boxes",e,t,n),s=w("boxInd",e,t,n),o=w("cropSize",e,t,n),i=w("method",e,t,n),u=w("extrapolationValue",e,t,n);return[rn.Slp.cropAndResize(a,r,s,o,i,u)]}case"ImageProjectiveTransformV3":{const a=w("images",e,t,n),r=w("transforms",e,t,n),s=w("outputShape",e,t,n),o=w("fillValue",e,t,n),i=w("interpolation",e,t,n),u=w("fillMode",e,t,n);return[rn.Slp.transform(a,r,i.toLowerCase(),u.toLowerCase(),o,s)]}default:throw TypeError(`Node type ${e.op} is not implemented`)}};var Nn=n(13020),Tn=n(42118),$n=n(62058),Sn=n(13337),In=n(61303),kn=n(56508),wn=n(13789),Rn=n(89881),En=n(9879),_n=n(12151);
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
const On=(e,t,n)=>{switch(e.op){case"Equal":return[Nn.L(w("a",e,t,n),w("b",e,t,n))];case"NotEqual":return[Tn.E(w("a",e,t,n),w("b",e,t,n))];case"Greater":return[$n.r(w("a",e,t,n),w("b",e,t,n))];case"GreaterEqual":return[Sn.D(w("a",e,t,n),w("b",e,t,n))];case"Less":return[In.M(w("a",e,t,n),w("b",e,t,n))];case"LessEqual":return[kn.I(w("a",e,t,n),w("b",e,t,n))];case"LogicalAnd":return[wn.n(w("a",e,t,n),w("b",e,t,n))];case"LogicalNot":return[Rn.N(w("a",e,t,n))];case"LogicalOr":return[En.z(w("a",e,t,n),w("b",e,t,n))];case"Select":case"SelectV2":return[_n._(w("condition",e,t,n),w("a",e,t,n),w("b",e,t,n))];default:throw TypeError(`Node type ${e.op} is not implemented`)}};var An=n(65703),Fn=n(79853),Dn=n(7703),Ln=n(30099);
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
const Pn=(e,t,n)=>{switch(e.op){case"BatchMatMul":case"BatchMatMulV2":case"MatMul":return[An.N(w("a",e,t,n),w("b",e,t,n),w("transposeA",e,t,n),w("transposeB",e,t,n))];case"Einsum":return[Fn._(w("equation",e,t,n),...w("tensors",e,t,n))];case"Transpose":return[Dn.m(w("x",e,t,n),w("perm",e,t,n))];case"_FusedMatMul":const[a,r]=w("fusedOps",e,t,n),s="biasadd"===a,o="prelu"===r,i=w("numArgs",e,t,n),u=w("leakyreluAlpha",e,t,n);if(s){if(o&&2!==i)throw new Error("Fused MatMul with BiasAdd and Prelu must have two extra arguments: bias and alpha.");if(!o&&1!==i)throw new Error("Fused MatMul with BiasAdd must have one extra argument: bias.")}const[l,c]=w("args",e,t,n);return[Ln.N({a:w("a",e,t,n),b:w("b",e,t,n),transposeA:w("transposeA",e,t,n),transposeB:w("transposeB",e,t,n),bias:l,activation:r,preluActivationWeights:c,leakyreluAlpha:u})];default:throw TypeError(`Node type ${e.op} is not implemented`)}};var Vn=n(44881),Mn=n(251),Bn=n(93531),Un=n(26346),Wn=n(97991),zn=n(24044);
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
const Gn=(e,t,n)=>{switch(e.op){case"EuclideanNorm":return[Vn.p(w("x",e,t,n),w("axis",e,t,n),w("keepDims",e,t,n))];case"FusedBatchNorm":case"FusedBatchNormV2":return[Mn.$(w("x",e,t,n),w("mean",e,t,n),w("variance",e,t,n),w("offset",e,t,n),w("scale",e,t,n),w("epsilon",e,t,n))];case"FusedBatchNormV3":return[Mn.$(w("x",e,t,n),w("mean",e,t,n),w("variance",e,t,n),w("offset",e,t,n),w("scale",e,t,n),w("epsilon",e,t,n))];case"LRN":return[Bn.K(w("x",e,t,n),w("radius",e,t,n),w("bias",e,t,n),w("alpha",e,t,n),w("beta",e,t,n))];case"Softmax":return[Un.V(w("x",e,t,n))];case"LogSoftmax":return[Wn.H(w("x",e,t,n))];case"SparseToDense":return[zn.Z(w("sparseIndices",e,t,n),w("outputShape",e,t,n),w("sparseValues",e,t,n),w("defaultValue",e,t,n))];default:throw TypeError(`Node type ${e.op} is not implemented`)}};var Hn=n(41938),Xn=n(12611),jn=n(57436),qn=n(83791),Kn=n(12307),Yn=n(89326),Qn=n(10897),Zn=n(54339),Jn=n(10302),ea=n(76808),ta=n(40758),na=n(77974);
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
const aa=(e,t,n)=>{switch(e.op){case"Max":{const a=w("axis",e,t,n),r=w("keepDims",e,t,n);return[Hn.T(w("x",e,t,n),a,r)]}case"Mean":{const a=w("axis",e,t,n),r=w("keepDims",e,t,n);return[Xn.i(w("x",e,t,n),a,r)]}case"Min":{const a=w("axis",e,t,n),r=w("keepDims",e,t,n);return[jn.j(w("x",e,t,n),a,r)]}case"Sum":{const a=w("axis",e,t,n),r=w("keepDims",e,t,n);return[qn.c(w("x",e,t,n),a,r)]}case"All":{const a=w("axis",e,t,n),r=w("keepDims",e,t,n);return[Kn.Q(w("x",e,t,n),a,r)]}case"Any":{const a=w("axis",e,t,n),r=w("keepDims",e,t,n);return[Yn.b(w("x",e,t,n),a,r)]}case"ArgMax":{const a=w("axis",e,t,n);return[Qn.F(w("x",e,t,n),a)]}case"ArgMin":{const a=w("axis",e,t,n);return[Zn.X(w("x",e,t,n),a)]}case"Prod":{const a=w("axis",e,t,n),r=w("keepDims",e,t,n);return[ft._(w("x",e,t,n),a,r)]}case"Cumprod":{const a=w("axis",e,t,n),r=w("exclusive",e,t,n),s=w("reverse",e,t,n);return[Jn.L(w("x",e,t,n),a,r,s)]}case"Cumsum":{const a=w("axis",e,t,n),r=w("exclusive",e,t,n),s=w("reverse",e,t,n);return[ea.r(w("x",e,t,n),a,r,s)]}case"Bincount":const a=w("x",e,t,n),r=w("weights",e,t,n),s=w("size",e,t,n);return[ta.H(a,r,s)];case"DenseBincount":{const a=w("x",e,t,n),r=w("weights",e,t,n),s=w("size",e,t,n),o=w("binaryOutput",e,t,n);return[na.a(a,r,s,o)]}default:throw TypeError(`Node type ${e.op} is not implemented`)}};var ra=n(25030),sa=n(48229),oa=n(53262),ia=n(17986),ua=n(45894),la=n(5932),ca=n(62302),pa=n(54268),da=n(67261),ha=n(64826),ma=n(66512),fa=n(94791),xa=n(55598);
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
const ga=(e,t,n)=>{switch(e.op){case"ConcatV2":case"Concat":{const a=w("n",e,t,n),r=w("axis",e,t,n);let s=w("tensors",e,t,n);return s=s.slice(0,a),[ra.x(s,r)]}case"Gather":{const a=w("x",e,t,n),r=w("indices",e,t,n);return[sa.k(a,sn.w(r,"int32"),0)]}case"GatherV2":{const a=w("axis",e,t,n),r=w("batchDims",e,t,n),s=w("x",e,t,n),o=w("indices",e,t,n);return[sa.k(s,sn.w(o,"int32"),a,r)]}case"Reverse":{const a=w("dims",e,t,n),r=[];for(let e=0;e<a.length;e++)a[e]&&r.push(e);const s=w("x",e,t,n);return[oa.B(s,r)]}case"ReverseV2":{const a=w("axis",e,t,n),r=w("x",e,t,n);return[oa.B(r,a)]}case"Slice":{const a=w("begin",e,t,n),r=w("size",e,t,n);return[ia.d(w("x",e,t,n),a,r)]}case"StridedSlice":{const a=w("begin",e,t,n),r=w("end",e,t,n),s=w("strides",e,t,n),o=w("beginMask",e,t,n),i=w("endMask",e,t,n),u=w("ellipsisMask",e,t,n),l=w("newAxisMask",e,t,n),c=w("shrinkAxisMask",e,t,n),p=w("x",e,t,n);return[ua.Y(p,a,r,s,o,i,u,l,c)]}case"Pack":return(0,N.tidy)((()=>{const a=w("axis",e,t,n),r=w("tensors",e,t,n),s=r[0].shape,o=la.r(r[0]).shape,i=r.map((e=>{const t=N.util.arraysEqual(e.shape,s);if(!t&&!N.util.arraysEqual(la.r(e).shape,o))throw new Error("the input tensors shape does not match");return t?e:ca.t(e,s)}));return[pa.t(i,a)]}));case"Unpack":{const a=w("axis",e,t,n),r=w("tensor",e,t,n);return da.K(r,a)}case"Tile":{const a=w("reps",e,t,n);return[ha.V(w("x",e,t,n),a)]}case"Split":case"SplitV":{const a=w("axis",e,t,n),r=w("numOrSizeSplits",e,t,n),s=w("x",e,t,n);return ma.l(s,r,a)}case"ScatterNd":{const a=w("indices",e,t,n),r=w("values",e,t,n),s=w("shape",e,t,n);return[fa.N(a,r,s)]}case"GatherNd":{const a=w("x",e,t,n),r=w("indices",e,t,n);return[xa.S(a,r)]}case"SparseToDense":{const a=w("sparseIndices",e,t,n),r=w("outputShape",e,t,n),s=w("sparseValues",e,t,n),o=w("defaultValue",e,t,n);return[zn.Z(a,s,r,s.dtype===o.dtype?o:sn.w(o,s.dtype))]}default:throw TypeError(`Node type ${e.op} is not implemented`)}},ya=(e,t,n)=>{switch(e.op){case"SparseFillEmptyRows":{const{outputIndices:a,outputValues:r,emptyRowIndicator:s,reverseIndexMap:o}=rn.lMo.sparseFillEmptyRows(w("indices",e,t,n),w("values",e,t,n),w("denseShape",e,t,n),w("defaultValue",e,t,n));return[a,r,s,o]}case"SparseReshape":{const{outputIndices:a,outputShape:r}=rn.lMo.sparseReshape(w("inputIndices",e,t,n),w("inputShape",e,t,n),w("newShape",e,t,n));return[a,r]}case"SparseSegmentMean":{const a=rn.lMo.sparseSegmentMean(w("data",e,t,n),w("indices",e,t,n),w("segmentIds",e,t,n));return[a]}case"SparseSegmentSum":{const a=rn.lMo.sparseSegmentSum(w("data",e,t,n),w("indices",e,t,n),w("segmentIds",e,t,n));return[a]}default:throw TypeError(`Node type ${e.op} is not implemented`)}};var ba=n(41361),va=n(13108),Ca=n(8775),Na=n(22292);
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
const Ta=(e,t,n)=>{switch(e.op){case"FFT":return[ba.h(w("x",e,t,n))];case"IFFT":return[va.K(w("x",e,t,n))];case"RFFT":return[Ca.z(w("x",e,t,n))];case"IRFFT":return[Na.g(w("x",e,t,n))];default:throw TypeError(`Node type ${e.op} is not implemented`)}},$a=(e,t,n)=>{switch(e.op){case"StringNGrams":{const{nGrams:a,nGramsSplits:r}=rn.YjP.stringNGrams(w("data",e,t,n),w("dataSplits",e,t,n),w("separator",e,t,n),w("nGramWidths",e,t,n),w("leftPad",e,t,n),w("rightPad",e,t,n),w("padWidth",e,t,n),w("preserveShortSequences",e,t,n));return[a,r]}case"StringSplit":{const{indices:a,values:r,shape:s}=rn.YjP.stringSplit(w("input",e,t,n),w("delimiter",e,t,n),w("skipEmpty",e,t,n));return[a,r,s]}case"StringToHashBucketFast":{const a=rn.YjP.stringToHashBucketFast(w("input",e,t,n),w("numBuckets",e,t,n));return[a]}default:throw TypeError(`Node type ${e.op} is not implemented`)}};var Sa=n(8710),Ia=n(66567),ka=n(65661),wa=n(10776),Ra=n(69772),Ea=n(31216),_a=n(63567),Oa=n(17367);
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
const Aa=(e,t,n)=>{switch(e.op){case"Cast":return[sn.w(w("x",e,t,n),w("dtype",e,t,n))];case"ExpandDims":{const a=w("axis",e,t,n);return[Sa.U(w("x",e,t,n),a)]}case"Squeeze":{const a=w("axis",e,t,n);return[la.r(w("x",e,t,n),a)]}case"Reshape":return[ca.t(w("x",e,t,n),w("shape",e,t,n))];case"MirrorPad":return[Ia.F(w("x",e,t,n),w("padding",e,t,n),w("mode",e,t,n))];case"PadV2":case"Pad":return[ka.e(w("x",e,t,n),w("padding",e,t,n),w("constantValue",e,t,n))];case"SpaceToBatchND":{const a=w("blockShape",e,t,n),r=w("paddings",e,t,n);return[wa.e(w("x",e,t,n),a,r)]}case"BatchToSpaceND":{const a=w("blockShape",e,t,n),r=w("crops",e,t,n);return[Ra.G(w("x",e,t,n),a,r)]}case"DepthToSpace":{const a=w("blockSize",e,t,n),r=w("dataFormat",e,t,n).toUpperCase();return[Ea.R(w("x",e,t,n),a,r)]}case"BroadcastTo":return[_a.h(w("x",e,t,n),w("shape",e,t,n))];case"BroadcastArgs":return[Oa.R(w("s0",e,t,n),w("s1",e,t,n))];default:throw TypeError(`Node type ${e.op} is not implemented`)}};
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
function Fa(e,t,n,a){const r=((e,t,n)=>{switch(e.category){case"arithmetic":return N.tidy((()=>Ee(e,t,n)));case"basic_math":return N.tidy((()=>bt(e,t,n)));case"control":return Et(e,t,n);case"convolution":return N.tidy((()=>Ht(e,t,n)));case"creation":return N.tidy((()=>an(e,t,n)));case"dynamic":return cn(e,t,n);case"evaluation":return N.tidy((()=>fn(e,t,n)));case"image":return N.tidy((()=>Cn(e,t,n)));case"graph":return N.tidy((()=>yn(e,t,n)));case"logical":return N.tidy((()=>On(e,t,n)));case"matrices":return N.tidy((()=>Pn(e,t,n)));case"normalization":return N.tidy((()=>Gn(e,t,n)));case"reduction":return N.tidy((()=>aa(e,t,n)));case"slice_join":return N.tidy((()=>ga(e,t,n)));case"sparse":return N.tidy((()=>ya(e,t,n)));case"spectral":return N.tidy((()=>Ta(e,t,n)));case"string":return N.tidy((()=>$a(e,t,n)));case"transformation":return N.tidy((()=>Aa(e,t,n)));case"hash_table":return vn(e,t,n,a);case"custom":const r=k(e.op);if(r&&r.customExecutor)return r.customExecutor(new ge(e,t,n));throw TypeError(`Custom op ${e.op} is not registered.`);default:throw TypeError(`Unknown op '${e.op}'. File an issue at https://github.com/tensorflow/tfjs/issues so we can add it, or register a custom execution with tf.registerOp()`)}})(e,t,n);return N.util.isPromise(r)?r.then((e=>[].concat(e))):[].concat(r)}class Da{constructor(e={},t={},n={},a={}){this.weightMap=e,this.tensorArrayMap=t,this.tensorListMap=n,this.functionMap=a,this.rootContext={id:0,frameName:"",iterationId:0},this.contexts=[this.rootContext],this.lastId=0,this.generateCurrentContextIds()}newFrame(e,t){return{id:e,frameName:t,iterationId:0}}set currentContext(e){this.contexts!==e&&(this.contexts=e,this.generateCurrentContextIds())}get currentContext(){return this.contexts}get currentContextId(){return this._currentContextIds[0]}get currentContextIds(){return this._currentContextIds}generateCurrentContextIds(){const e=[];for(let t=0;t<this.contexts.length-1;t++){const n=this.contexts.slice(0,this.contexts.length-t);e.push(this.contextIdforContexts(n))}e.push(""),this._currentContextIds=e}contextIdforContexts(e){return e?e.map((e=>0===e.id&&0===e.iterationId?"":`${e.frameName}-${e.iterationId}`)).join("/"):""}enterFrame(e){this.contexts&&(this.lastId++,this.contexts=this.contexts.slice(),this.contexts.push(this.newFrame(this.lastId,e)),this._currentContextIds.unshift(this.contextIdforContexts(this.contexts)))}exitFrame(){if(!(this.contexts&&this.contexts.length>1))throw new Error("Cannot exit frame, the context is empty");this.contexts=this.contexts.slice(),this.contexts.splice(-1),this.currentContextIds.shift()}nextIteration(){if(!(this.contexts&&this.contexts.length>0))throw new Error("Cannot increase frame iteration, the context is empty");{this.contexts=this.contexts.slice(),this.lastId++;const e=Object.assign({},this.contexts[this.contexts.length-1]);e.iterationId+=1,e.id=this.lastId,this.contexts.splice(-1,1,e),this._currentContextIds.splice(0,1,this.contextIdforContexts(this.contexts))}}getWeight(e){return this.weightMap[e]}addTensorArray(e){this.tensorArrayMap[e.id]=e}getTensorArray(e){return this.tensorArrayMap[e]}addTensorList(e){this.tensorListMap[e.id]=e}getTensorList(e){return this.tensorListMap[e]}dispose(e){for(const t in this.tensorArrayMap)this.tensorArrayMap[t].clearAndClose(e);for(const t in this.tensorListMap)this.tensorListMap[t].clearAndClose(e)}}
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
function La(e,t,n,a){const r=new Set,s=[];let o=null,i=null;const u=new Set,l=Object.keys(e).map((e=>A(e)[0]));let c=[];null!=a&&(c=a.map((e=>A(e.name)[0])));const p=[...t];while(p.length>0){const e=p.pop();(Ua(e)||Wa(e)||za(e))&&null==o&&(o=e,i=o.children.map((e=>e.name)).filter((e=>r.has(e)))),r.add(e.name),null==n[e.name]&&(-1===l.indexOf(e.name)&&-1===c.indexOf(e.name)&&(0!==e.inputs.length?e.inputs.forEach((e=>{u.has(e.name)||(u.add(e.name),p.push(e))})):s.push(e.name)))}return{inputs:e,outputs:t,usedNodes:r,missingInputs:s,dynamicNode:o,syncInputs:i}}function Pa(e,t,n){const{usedNodes:a,inputs:r}=n,s=[],o=Object.keys(r).map((e=>A(e)[0])).map((t=>e.nodes[t])),i=e.initNodes;o.forEach((e=>{a.has(e.name)&&s.push(e)})),e.weights.forEach((e=>{a.has(e.name)&&s.push(e)})),null!=i&&i.forEach((e=>{a.has(e.name)&&s.push(e)}));const u=new Set,l=[];while(s.length>0){const e=s.pop();u.add(e.name),t[e.name]||l.push(e),e.children.forEach((e=>{!u.has(e.name)&&a.has(e.name)&&e.inputs.every((e=>u.has(e.name)))&&s.push(e)}))}return l}const Va=["Switch","Merge","Enter","Exit","NextIteration","StatelessIf","StatelessWhile","if","While"],Ma=["NonMaxSuppressionV2","NonMaxSuppressionV3","NonMaxSuppressionV5","Where"],Ba=["HashTable","HashTableV2","LookupTableImport","LookupTableImportV2","LookupTableFind","LookupTableFindV2","LookupTableSize","LookupTableSizeV2"];function Ua(e){return Va.indexOf(e.op)>=0}function Wa(e){return Ma.indexOf(e.op)>=0}function za(e){return Ba.indexOf(e.op)>=0}
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
class Ga{constructor(e,t){this.graph=e,this.parent=t,this.compiledMap=new Map,this._weightMap={},this.SEPERATOR=",",this._functions={},this._functionExecutorMap={},this.intermediateTensors={},this.keepTensorForDebug=!1,this._outputs=e.outputs,this._inputs=e.inputs,this._initNodes=e.initNodes,this._signature=e.signature,this._functions=e.functions,null!=e.functions&&Object.keys(e.functions).forEach((t=>{this._functionExecutorMap[t]=new Ga(e.functions[t],this)}))}get weightIds(){return this.parent?this.parent.weightIds:this._weightIds}get functionExecutorMap(){return this.parent?this.parent.functionExecutorMap:this._functionExecutorMap}get weightMap(){return this.parent?this.parent.weightMap:this._weightMap}set weightMap(e){const t=Object.keys(e).map((t=>e[t].map((e=>e.id))));this._weightIds=[].concat(...t),this._weightMap=e}set resourceManager(e){this._resourceManager=e}get inputs(){return this._inputs.map((e=>({name:e.name,shape:e.attrParams["shape"]?e.attrParams["shape"].value:void 0,dtype:e.attrParams["dtype"]?e.attrParams["dtype"].value:void 0})))}get outputs(){return this._outputs.map((e=>({name:e.name,shape:e.attrParams["shape"]?e.attrParams["shape"].value:void 0,dtype:e.attrParams["dtype"]?e.attrParams["dtype"].value:void 0})))}get inputNodes(){return this._inputs.map((e=>e.signatureKey||e.name))}get outputNodes(){return this._outputs.map((e=>{const t=e.signatureKey||e.name;return e.defaultOutput?`${t}:${e.defaultOutput}`:t}))}get functions(){return Object.keys(this._functions).reduce(((e,t)=>(e[t]=this._functions[t].signature,e)),{})}getCompilationKey(e,t){const n=e.map((e=>e.name)).sort(),a=t.map((e=>e.name)).sort();return n.join(this.SEPERATOR)+"--"+a.join(this.SEPERATOR)}compile(e,t){const n=La(e,t,this.weightMap,this._initNodes),{missingInputs:a,dynamicNode:r,syncInputs:s}=n;if(null!=r)throw new Error(`This execution contains the node '${r.name}', which has the dynamic op '${r.op}'. Please use model.executeAsync() instead. Alternatively, to avoid the dynamic ops, specify the inputs [${s}]`);if(a.length>0){const n=t.map((e=>e.name)),r=Object.keys(e);throw new Error(`Cannot compute the outputs [${n}] from the provided inputs [${r}]. Missing the following inputs: [${a}]`)}return Pa(this.graph,this.weightMap,n)}execute(e,t){e=this.mapInputs(e);const n=Object.keys(e).sort();this.checkInputs(e),this.checkInputShapeAndType(e),t=this.mapOutputs(t),this.checkOutputs(t);const a=n.map((e=>this.graph.nodes[A(e)[0]])),r=t.map((e=>A(e)[0]));let s=r.map((e=>this.graph.nodes[e]));this.resetIntermediateTensors(),0===s.length&&(s=this._outputs);const o=this.getCompilationKey(a,s);let i=this.compiledMap.get(o);null==i&&(i=this.compile(e,s),this.compiledMap.set(o,i));const u={},l={};return(0,N.tidy)((()=>{const n=new Da(this.weightMap,u,l,this.functionExecutorMap),a=Object.assign({},this.weightMap);Object.keys(e).forEach((t=>{const[n,r]=A(t),s=[];s[r]=e[t],a[n]=s}));const s=this.getFrozenTensorIds(a),o={};for(let e=0;e<i.length;e++){const t=i[e];if(!a[t.name]){const e=Fa(t,a,n,this._resourceManager);if(N.util.isPromise(e))throw new Error(`The execution of the op '${t.op}' returned a promise. Please use model.executeAsync() instead.`);a[t.name]=e,this.checkTensorForDisposal(t.name,t,a,n,s,r,o)}}return null==this.parent&&n.dispose(s),t.map((e=>R(e,a,n)))}))}getFrozenTensorIds(e){const t=[].concat.apply([],Object.keys(e).map((t=>e[t])).map((e=>e.map((e=>e.id)))));return new Set(t)}checkTensorForDisposal(e,t,n,a,r,s,o){"control"!==t.category&&-1===s.indexOf(e)&&(n[e].forEach((e=>{null!=e&&(o[e.id]=(o[e.id]||0)+t.children.length)})),t.inputs.forEach((e=>{if("control"!==e.category){const s=E(e.name,n,a);null!=s&&s.forEach((e=>{if(e&&!e.kept&&!r.has(e.id)){const n=o[e.id];if(1===n){if(this.keepTensorForDebug){const[n,r]=_(t.name,a);this.intermediateTensors[n]||(this.intermediateTensors[n]=[]),this.intermediateTensors[n][r]=e}else e.dispose();delete o[e.id]}else null!=n&&o[e.id]--}}))}})))}async executeAsync(e,t){return this._executeAsync(e,t)}disposeIntermediateTensors(){this.intermediateTensors&&(Object.keys(this.intermediateTensors).forEach((e=>this.intermediateTensors[e].forEach((e=>e.dispose())))),this.disposeTensorsMap())}disposeTensorsMap(){this.tensorsMap&&Object.keys(this.tensorsMap).forEach((e=>{const t=this.tensorsMap[e];t.forEach((e=>{!e||e.kept||e.isDisposed||this.keepIds.has(e.id)||e.dispose()}))}))}getIntermediateTensors(){return this.tensorsMap}resetIntermediateTensors(){for(const e in this.intermediateTensors)this.intermediateTensors[e].forEach((e=>e.dispose())),delete this.intermediateTensors[e]}async _executeAsync(e,t,n=!1,a={},r={}){n||(e=this.mapInputs(e),this.checkInputs(e),this.checkInputShapeAndType(e),t=this.mapOutputs(t),this.checkOutputs(t));try{this.keepTensorForDebug=(0,N.env)().getBool("KEEP_INTERMEDIATE_TENSORS")}catch(l){console.warn(l.message)}this.resetIntermediateTensors();const s=new Da(this.weightMap,a,r,this.functionExecutorMap);this.tensorsMap=await this.executeWithControlFlow(e,s,t,n);const o=t.map((e=>R(e,this.tensorsMap,s))),i=o.map((e=>e.id)),u=Object.keys(e).map((t=>e[t].id));return this.keepIds=new Set([...i,...u,...this.weightIds]),this.keepTensorForDebug||this.disposeTensorsMap(),null==this.parent&&s.dispose(this.keepIds),o}async executeFunctionAsync(e,t,n){const a=e.reduce(((e,t,n)=>(e[this.inputs[n].name]=t,e)),{});return this._executeAsync(a,this.outputNodes,!0,t,n)}async executeWithControlFlow(e,t,n,a){const r=Object.keys(e),s=r.map((e=>this.graph.nodes[A(e)[0]])),o=n.map((e=>A(e)[0]));let i=o.map((e=>this.graph.nodes[e]));0===i.length&&(i=this._outputs);const{usedNodes:u,missingInputs:l,dynamicNode:c,syncInputs:p}=La(e,i,this.weightMap,this._initNodes),d=[...s,...this.graph.weights,...this._initNodes||[]].map((e=>({node:e,contexts:t.currentContext}))),h=Object.assign({},this.weightMap);Object.keys(e).forEach((t=>{const[n,a]=A(t),r=[];r[a]=e[t],h[n]=r}));const m={},f=this.getFrozenTensorIds(h),x={};while(d.length>0){const e=this.processStack(s,d,t,h,x,f,o,m,u);await Promise.all(e)}null!=c||a||console.warn("This model execution did not contain any nodes with control flow or dynamic output shapes. You can use model.execute() instead.");const g=i.filter((e=>!Ua(e)&&!R(e.name,h,t))).map((e=>e.name));if(g.length>0){let e="";throw null!=c&&(e=`Alternatively, to avoid the dynamic ops, use model.execute() and specify the inputs [${p}]`),new Error(`Cannot compute the outputs [${g}] from the provided inputs [${r}]. Consider providing the following inputs: [${l}]. ${e}`)}return h}processStack(e,t,n,a,r,s,o,i,u){const l=[];while(t.length>0){const e=t.pop();n.currentContext=e.contexts;let c="";if("Enter"===e.node.op&&w("isConstant",e.node,a,n)&&([c]=_(e.node.name,n)),null==a[e.node.name]){const p=Fa(e.node,a,n,this._resourceManager);c||([c]=_(e.node.name,n));const d=n.currentContext;N.util.isPromise(p)?l.push(p.then((l=>(a[c]=l,n.currentContext=d,this.checkTensorForDisposal(c,e.node,a,n,s,o,i),this.processChildNodes(e.node,t,n,a,r,u),l)))):(a[c]=p,this.checkTensorForDisposal(c,e.node,a,n,s,o,i),this.processChildNodes(e.node,t,n,a,r,u))}else this.processChildNodes(e.node,t,n,a,r,u)}return l}processChildNodes(e,t,n,a,r,s){e.children.forEach((e=>{const[o]=_(e.name,n);!r[o]&&s.has(e.name)&&("Merge"===e.op?e.inputNames.some((e=>!!R(e,a,n)))&&(r[o]=!0,t.push({contexts:n.currentContext,node:e})):e.inputNames.every((e=>!!R(e,a,n)))&&(r[o]=!0,t.push({contexts:n.currentContext,node:e})))}))}dispose(){Object.keys(this.weightMap).forEach((e=>this.weightMap[e].forEach((e=>e.dispose()))))}checkInputShapeAndType(e){Object.keys(e).forEach((t=>{const n=e[t],[a]=A(t),r=this.graph.nodes[a];if(r.attrParams["shape"]&&r.attrParams["shape"].value){const e=r.attrParams["shape"].value,t=e.length===n.shape.length&&n.shape.every(((t,n)=>-1===e[n]||e[n]===t));N.util.assert(t,(()=>`The shape of dict['${r.name}'] provided in model.execute(dict) must be [${e}], but was [${n.shape}]`))}r.attrParams["dtype"]&&r.attrParams["dtype"].value&&N.util.assert(n.dtype===r.attrParams["dtype"].value,(()=>`The dtype of dict['${r.name}'] provided in model.execute(dict) must be ${r.attrParams["dtype"].value}, but was ${n.dtype}`))}))}mapInputs(e){const t={};for(const n in e)if(null!=this._signature&&null!=this._signature.inputs&&null!=this._signature.inputs[n]){const a=this._signature.inputs[n];t[a.name]=e[n]}else t[n]=e[n];return t}checkInputs(e){const t=Object.keys(e).filter((e=>{const[t]=A(e);return null==this.graph.nodes[t]}));if(t.length>0)throw new Error(`The dict provided in model.execute(dict) has keys: [${t}] that are not part of graph`)}mapOutputs(e){return e.map((e=>{if(null!=this._signature&&null!=this._signature.outputs&&null!=this._signature.outputs[e]){const t=this._signature.outputs[e];return t.name}return e}),{})}checkOutputs(e){e.forEach((e=>{const[t]=A(e);if(!this.graph.nodes[t])throw new Error(`The output '${e}' is not found in the graph`)}))}}class Ha{constructor(e={},t={}){this.hashTableNameToHandle=e,this.hashTableMap=t}addHashTable(e,t){this.hashTableNameToHandle[e]=t.handle,this.hashTableMap[t.id]=t}getHashTableHandleByName(e){return this.hashTableNameToHandle[e]}getHashTableById(e){return this.hashTableMap[e]}dispose(){for(const e in this.hashTableMap)this.hashTableMap[e].clearAndClose(),delete this.hashTableMap[e];for(const e in this.hashTableNameToHandle)this.hashTableNameToHandle[e].dispose(),delete this.hashTableNameToHandle[e]}}
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
const Xa="?tfjs-format=file",ja="model.json";class qa{constructor(e,t={}){this.modelUrl=e,this.loadOptions=t,this.version="n/a",null==t&&(this.loadOptions={}),this.resourceManager=new Ha}get modelVersion(){return this.version}get inputNodes(){return this.executor.inputNodes}get outputNodes(){return this.executor.outputNodes}get inputs(){return this.executor.inputs}get outputs(){return this.executor.outputs}get weights(){return this.executor.weightMap}get metadata(){return this.artifacts.userDefinedMetadata}get modelSignature(){return this.signature}findIOHandler(){const e=this.modelUrl;if(null!=e.load)this.handler=e;else if(null!=this.loadOptions.requestInit)this.handler=N.io.browserHTTPRequest(e,this.loadOptions);else{const t=N.io.getLoadHandlers(e,this.loadOptions);if(0===t.length)t.push(N.io.browserHTTPRequest(e,this.loadOptions));else if(t.length>1)throw new Error(`Found more than one (${t.length}) load handlers for URL '${[e]}'`);this.handler=t[0]}}load(){if(this.findIOHandler(),null==this.handler.load)throw new Error("Cannot proceed with model loading because the IOHandler provided does not have the `load` method implemented.");const e=this.handler.load();return N.util.isPromise(e)?e.then((e=>this.loadSync(e))):this.loadSync(e)}loadSync(e){this.artifacts=e;const t=this.artifacts.modelTopology;let n;n=null!=this.artifacts.userDefinedMetadata&&null!=this.artifacts.userDefinedMetadata.signature?this.artifacts.userDefinedMetadata.signature:this.artifacts.signature,this.signature=n,this.version=`${t.versions.producer}.${t.versions.minConsumer}`;const a=N.io.decodeWeights(this.artifacts.weightData,this.artifacts.weightSpecs);if(this.executor=new Ga(te.Instance.transformGraph(t,this.signature)),this.executor.weightMap=this.convertTensorMapToTensorsMap(a),this.executor.resourceManager=this.resourceManager,null!=e.modelInitializer&&null!=e.modelInitializer.node){const t=te.Instance.transformGraph(e.modelInitializer);this.initializer=new Ga(t),this.initializer.weightMap=this.executor.weightMap,this.initializer.resourceManager=this.resourceManager,this.initializer.executeAsync({},[])}return!0}async save(e,t){if("string"===typeof e){const t=N.io.getSaveHandlers(e);if(0===t.length)throw new Error(`Cannot find any save handlers for URL '${e}'`);if(t.length>1)throw new Error(`Found more than one (${t.length}) save handlers for URL '${e}'`);e=t[0]}if(null==e.save)throw new Error("GraphModel.save() cannot proceed because the IOHandler provided does not have the `save` attribute defined.");return e.save(this.artifacts)}predict(e,t){return this.execute(e,this.outputNodes)}normalizeInputs(e){if(!(e instanceof N.Tensor)&&!Array.isArray(e))return e;if(e=Array.isArray(e)?e:[e],e.length!==this.inputNodes.length)throw new Error(`Input tensor count mismatch,the graph model has ${this.inputNodes.length} placeholders, while there are ${e.length} input tensors.`);return this.inputNodes.reduce(((t,n,a)=>(t[n]=e[a],t)),{})}normalizeOutputs(e){return e=e||this.outputNodes,Array.isArray(e)?e:[e]}execute(e,t){e=this.normalizeInputs(e),t=this.normalizeOutputs(t);const n=this.executor.execute(e,t);return n.length>1?n:n[0]}async executeAsync(e,t){e=this.normalizeInputs(e),t=this.normalizeOutputs(t);const n=await this.executor.executeAsync(e,t);return n.length>1?n:n[0]}getIntermediateTensors(){return this.executor.getIntermediateTensors()}disposeIntermediateTensors(){this.executor.disposeIntermediateTensors()}convertTensorMapToTensorsMap(e){return Object.keys(e).reduce(((t,n)=>(t[n]=[e[n]],t)),{})}dispose(){this.executor.dispose(),this.initializer&&this.initializer.dispose(),this.resourceManager.dispose()}}async function Ka(e,t={}){if(null==e)throw new Error("modelUrl in loadGraphModel() cannot be null. Please provide a url or an IOHandler that loads the model");null==t&&(t={}),t.fromTFHub&&"string"===typeof e&&(e=Ya(e));const n=new qa(e,t);return await n.load(),n}function Ya(e){return e.endsWith("/")||(e+="/"),`${e}${ja}${Xa}`}
/** @license See the LICENSE file. */
const Qa="3.18.0"}}]);
//# sourceMappingURL=chunk-vendors-dc155b65.a093225a.js.map