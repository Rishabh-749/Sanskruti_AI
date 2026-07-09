import{c as Q,r as z,j as Z,s as ee}from"./index-DipfFI9r.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const De=Q("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]),te=z.forwardRef(({className:e,...t},n)=>Z.jsx("textarea",{className:ee("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",e),ref:n,...t}));te.displayName="Textarea";var N;(function(e){e.STRING="string",e.NUMBER="number",e.INTEGER="integer",e.BOOLEAN="boolean",e.ARRAY="array",e.OBJECT="object"})(N||(N={}));/**
 * @license
 * Copyright 2024 Google LLC
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
 */var T;(function(e){e.LANGUAGE_UNSPECIFIED="language_unspecified",e.PYTHON="python"})(T||(T={}));var b;(function(e){e.OUTCOME_UNSPECIFIED="outcome_unspecified",e.OUTCOME_OK="outcome_ok",e.OUTCOME_FAILED="outcome_failed",e.OUTCOME_DEADLINE_EXCEEDED="outcome_deadline_exceeded"})(b||(b={}));/**
 * @license
 * Copyright 2024 Google LLC
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
 */const M=["user","model","function","system"];var x;(function(e){e.HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",e.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",e.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",e.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",e.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT",e.HARM_CATEGORY_CIVIC_INTEGRITY="HARM_CATEGORY_CIVIC_INTEGRITY"})(x||(x={}));var L;(function(e){e.HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",e.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",e.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",e.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",e.BLOCK_NONE="BLOCK_NONE"})(L||(L={}));var D;(function(e){e.HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",e.NEGLIGIBLE="NEGLIGIBLE",e.LOW="LOW",e.MEDIUM="MEDIUM",e.HIGH="HIGH"})(D||(D={}));var G;(function(e){e.BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",e.SAFETY="SAFETY",e.OTHER="OTHER"})(G||(G={}));var I;(function(e){e.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",e.STOP="STOP",e.MAX_TOKENS="MAX_TOKENS",e.SAFETY="SAFETY",e.RECITATION="RECITATION",e.LANGUAGE="LANGUAGE",e.BLOCKLIST="BLOCKLIST",e.PROHIBITED_CONTENT="PROHIBITED_CONTENT",e.SPII="SPII",e.MALFORMED_FUNCTION_CALL="MALFORMED_FUNCTION_CALL",e.OTHER="OTHER"})(I||(I={}));var k;(function(e){e.TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",e.RETRIEVAL_QUERY="RETRIEVAL_QUERY",e.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",e.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",e.CLASSIFICATION="CLASSIFICATION",e.CLUSTERING="CLUSTERING"})(k||(k={}));var U;(function(e){e.MODE_UNSPECIFIED="MODE_UNSPECIFIED",e.AUTO="AUTO",e.ANY="ANY",e.NONE="NONE"})(U||(U={}));var j;(function(e){e.MODE_UNSPECIFIED="MODE_UNSPECIFIED",e.MODE_DYNAMIC="MODE_DYNAMIC"})(j||(j={}));/**
 * @license
 * Copyright 2024 Google LLC
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
 */class u extends Error{constructor(t){super(`[GoogleGenerativeAI Error]: ${t}`)}}class v extends u{constructor(t,n){super(t),this.response=n}}class q extends u{constructor(t,n,s,o){super(t),this.status=n,this.statusText=s,this.errorDetails=o}}class E extends u{}class V extends u{}/**
 * @license
 * Copyright 2024 Google LLC
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
 */const ne="https://generativelanguage.googleapis.com",se="v1beta",oe="0.24.1",ie="genai-js";var p;(function(e){e.GENERATE_CONTENT="generateContent",e.STREAM_GENERATE_CONTENT="streamGenerateContent",e.COUNT_TOKENS="countTokens",e.EMBED_CONTENT="embedContent",e.BATCH_EMBED_CONTENTS="batchEmbedContents"})(p||(p={}));class ae{constructor(t,n,s,o,i){this.model=t,this.task=n,this.apiKey=s,this.stream=o,this.requestOptions=i}toString(){var t,n;const s=((t=this.requestOptions)===null||t===void 0?void 0:t.apiVersion)||se;let i=`${((n=this.requestOptions)===null||n===void 0?void 0:n.baseUrl)||ne}/${s}/${this.model}:${this.task}`;return this.stream&&(i+="?alt=sse"),i}}function re(e){const t=[];return e!=null&&e.apiClient&&t.push(e.apiClient),t.push(`${ie}/${oe}`),t.join(" ")}async function ce(e){var t;const n=new Headers;n.append("Content-Type","application/json"),n.append("x-goog-api-client",re(e.requestOptions)),n.append("x-goog-api-key",e.apiKey);let s=(t=e.requestOptions)===null||t===void 0?void 0:t.customHeaders;if(s){if(!(s instanceof Headers))try{s=new Headers(s)}catch(o){throw new E(`unable to convert customHeaders value ${JSON.stringify(s)} to Headers: ${o.message}`)}for(const[o,i]of s.entries()){if(o==="x-goog-api-key")throw new E(`Cannot set reserved header name ${o}`);if(o==="x-goog-api-client")throw new E(`Header name ${o} can only be set using the apiClient field`);n.append(o,i)}}return n}async function le(e,t,n,s,o,i){const a=new ae(e,t,n,s,i);return{url:a.toString(),fetchOptions:Object.assign(Object.assign({},he(i)),{method:"POST",headers:await ce(a),body:o})}}async function S(e,t,n,s,o,i={},a=fetch){const{url:r,fetchOptions:l}=await le(e,t,n,s,o,i);return de(r,l,a)}async function de(e,t,n=fetch){let s;try{s=await n(e,t)}catch(o){ue(o,e)}return s.ok||await fe(s,e),s}function ue(e,t){let n=e;throw n.name==="AbortError"?(n=new V(`Request aborted when fetching ${t.toString()}: ${e.message}`),n.stack=e.stack):e instanceof q||e instanceof E||(n=new u(`Error fetching from ${t.toString()}: ${e.message}`),n.stack=e.stack),n}async function fe(e,t){let n="",s;try{const o=await e.json();n=o.error.message,o.error.details&&(n+=` ${JSON.stringify(o.error.details)}`,s=o.error.details)}catch{}throw new q(`Error fetching from ${t.toString()}: [${e.status} ${e.statusText}] ${n}`,e.status,e.statusText,s)}function he(e){const t={};if((e==null?void 0:e.signal)!==void 0||(e==null?void 0:e.timeout)>=0){const n=new AbortController;(e==null?void 0:e.timeout)>=0&&setTimeout(()=>n.abort(),e.timeout),e!=null&&e.signal&&e.signal.addEventListener("abort",()=>{n.abort()}),t.signal=n.signal}return t}/**
 * @license
 * Copyright 2024 Google LLC
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
 */function w(e){return e.text=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),A(e.candidates[0]))throw new v(`${g(e)}`,e);return ge(e)}else if(e.promptFeedback)throw new v(`Text not available. ${g(e)}`,e);return""},e.functionCall=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),A(e.candidates[0]))throw new v(`${g(e)}`,e);return console.warn("response.functionCall() is deprecated. Use response.functionCalls() instead."),H(e)[0]}else if(e.promptFeedback)throw new v(`Function call not available. ${g(e)}`,e)},e.functionCalls=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),A(e.candidates[0]))throw new v(`${g(e)}`,e);return H(e)}else if(e.promptFeedback)throw new v(`Function call not available. ${g(e)}`,e)},e}function ge(e){var t,n,s,o;const i=[];if(!((n=(t=e.candidates)===null||t===void 0?void 0:t[0].content)===null||n===void 0)&&n.parts)for(const a of(o=(s=e.candidates)===null||s===void 0?void 0:s[0].content)===null||o===void 0?void 0:o.parts)a.text&&i.push(a.text),a.executableCode&&i.push("\n```"+a.executableCode.language+`
`+a.executableCode.code+"\n```\n"),a.codeExecutionResult&&i.push("\n```\n"+a.codeExecutionResult.output+"\n```\n");return i.length>0?i.join(""):""}function H(e){var t,n,s,o;const i=[];if(!((n=(t=e.candidates)===null||t===void 0?void 0:t[0].content)===null||n===void 0)&&n.parts)for(const a of(o=(s=e.candidates)===null||s===void 0?void 0:s[0].content)===null||o===void 0?void 0:o.parts)a.functionCall&&i.push(a.functionCall);if(i.length>0)return i}const Ee=[I.RECITATION,I.SAFETY,I.LANGUAGE];function A(e){return!!e.finishReason&&Ee.includes(e.finishReason)}function g(e){var t,n,s;let o="";if((!e.candidates||e.candidates.length===0)&&e.promptFeedback)o+="Response was blocked",!((t=e.promptFeedback)===null||t===void 0)&&t.blockReason&&(o+=` due to ${e.promptFeedback.blockReason}`),!((n=e.promptFeedback)===null||n===void 0)&&n.blockReasonMessage&&(o+=`: ${e.promptFeedback.blockReasonMessage}`);else if(!((s=e.candidates)===null||s===void 0)&&s[0]){const i=e.candidates[0];A(i)&&(o+=`Candidate was blocked due to ${i.finishReason}`,i.finishMessage&&(o+=`: ${i.finishMessage}`))}return o}function O(e){return this instanceof O?(this.v=e,this):new O(e)}function pe(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var s=n.apply(e,t||[]),o,i=[];return o={},a("next"),a("throw"),a("return"),o[Symbol.asyncIterator]=function(){return this},o;function a(d){s[d]&&(o[d]=function(c){return new Promise(function(f,m){i.push([d,c,f,m])>1||r(d,c)})})}function r(d,c){try{l(s[d](c))}catch(f){_(i[0][3],f)}}function l(d){d.value instanceof O?Promise.resolve(d.value.v).then(h,C):_(i[0][2],d)}function h(d){r("next",d)}function C(d){r("throw",d)}function _(d,c){d(c),i.shift(),i.length&&r(i[0][0],i[0][1])}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */const F=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;function Ce(e){const t=e.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0})),n=ve(t),[s,o]=n.tee();return{stream:me(s),response:_e(o)}}async function _e(e){const t=[],n=e.getReader();for(;;){const{done:s,value:o}=await n.read();if(s)return w(Ie(t));t.push(o)}}function me(e){return pe(this,arguments,function*(){const n=e.getReader();for(;;){const{value:s,done:o}=yield O(n.read());if(o)break;yield yield O(w(s))}})}function ve(e){const t=e.getReader();return new ReadableStream({start(s){let o="";return i();function i(){return t.read().then(({value:a,done:r})=>{if(r){if(o.trim()){s.error(new u("Failed to parse stream"));return}s.close();return}o+=a;let l=o.match(F),h;for(;l;){try{h=JSON.parse(l[1])}catch{s.error(new u(`Error parsing JSON response: "${l[1]}"`));return}s.enqueue(h),o=o.substring(l[0].length),l=o.match(F)}return i()}).catch(a=>{let r=a;throw r.stack=a.stack,r.name==="AbortError"?r=new V("Request aborted when reading from the stream"):r=new u("Error reading from the stream"),r})}}})}function Ie(e){const t=e[e.length-1],n={promptFeedback:t==null?void 0:t.promptFeedback};for(const s of e){if(s.candidates){let o=0;for(const i of s.candidates)if(n.candidates||(n.candidates=[]),n.candidates[o]||(n.candidates[o]={index:o}),n.candidates[o].citationMetadata=i.citationMetadata,n.candidates[o].groundingMetadata=i.groundingMetadata,n.candidates[o].finishReason=i.finishReason,n.candidates[o].finishMessage=i.finishMessage,n.candidates[o].safetyRatings=i.safetyRatings,i.content&&i.content.parts){n.candidates[o].content||(n.candidates[o].content={role:i.content.role||"user",parts:[]});const a={};for(const r of i.content.parts)r.text&&(a.text=r.text),r.functionCall&&(a.functionCall=r.functionCall),r.executableCode&&(a.executableCode=r.executableCode),r.codeExecutionResult&&(a.codeExecutionResult=r.codeExecutionResult),Object.keys(a).length===0&&(a.text=""),n.candidates[o].content.parts.push(a)}o++}s.usageMetadata&&(n.usageMetadata=s.usageMetadata)}return n}/**
 * @license
 * Copyright 2024 Google LLC
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
 */async function J(e,t,n,s){const o=await S(t,p.STREAM_GENERATE_CONTENT,e,!0,JSON.stringify(n),s);return Ce(o)}async function W(e,t,n,s){const i=await(await S(t,p.GENERATE_CONTENT,e,!1,JSON.stringify(n),s)).json();return{response:w(i)}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */function X(e){if(e!=null){if(typeof e=="string")return{role:"system",parts:[{text:e}]};if(e.text)return{role:"system",parts:[e]};if(e.parts)return e.role?e:{role:"system",parts:e.parts}}}function y(e){let t=[];if(typeof e=="string")t=[{text:e}];else for(const n of e)typeof n=="string"?t.push({text:n}):t.push(n);return Oe(t)}function Oe(e){const t={role:"user",parts:[]},n={role:"function",parts:[]};let s=!1,o=!1;for(const i of e)"functionResponse"in i?(n.parts.push(i),o=!0):(t.parts.push(i),s=!0);if(s&&o)throw new u("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");if(!s&&!o)throw new u("No content is provided for sending chat message.");return s?t:n}function ye(e,t){var n;let s={model:t==null?void 0:t.model,generationConfig:t==null?void 0:t.generationConfig,safetySettings:t==null?void 0:t.safetySettings,tools:t==null?void 0:t.tools,toolConfig:t==null?void 0:t.toolConfig,systemInstruction:t==null?void 0:t.systemInstruction,cachedContent:(n=t==null?void 0:t.cachedContent)===null||n===void 0?void 0:n.name,contents:[]};const o=e.generateContentRequest!=null;if(e.contents){if(o)throw new E("CountTokensRequest must have one of contents or generateContentRequest, not both.");s.contents=e.contents}else if(o)s=Object.assign(Object.assign({},s),e.generateContentRequest);else{const i=y(e);s.contents=[i]}return{generateContentRequest:s}}function $(e){let t;return e.contents?t=e:t={contents:[y(e)]},e.systemInstruction&&(t.systemInstruction=X(e.systemInstruction)),t}function Re(e){return typeof e=="string"||Array.isArray(e)?{content:y(e)}:e}/**
 * @license
 * Copyright 2024 Google LLC
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
 */const Y=["text","inlineData","functionCall","functionResponse","executableCode","codeExecutionResult"],Se={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall","executableCode","codeExecutionResult"],system:["text"]};function Ae(e){let t=!1;for(const n of e){const{role:s,parts:o}=n;if(!t&&s!=="user")throw new u(`First content should be with role 'user', got ${s}`);if(!M.includes(s))throw new u(`Each item should include role field. Got ${s} but valid roles are: ${JSON.stringify(M)}`);if(!Array.isArray(o))throw new u("Content should have 'parts' property with an array of Parts");if(o.length===0)throw new u("Each Content should have at least one part");const i={text:0,inlineData:0,functionCall:0,functionResponse:0,fileData:0,executableCode:0,codeExecutionResult:0};for(const r of o)for(const l of Y)l in r&&(i[l]+=1);const a=Se[s];for(const r of Y)if(!a.includes(r)&&i[r]>0)throw new u(`Content with role '${s}' can't contain '${r}' part`);t=!0}}function K(e){var t;if(e.candidates===void 0||e.candidates.length===0)return!1;const n=(t=e.candidates[0])===null||t===void 0?void 0:t.content;if(n===void 0||n.parts===void 0||n.parts.length===0)return!1;for(const s of n.parts)if(s===void 0||Object.keys(s).length===0||s.text!==void 0&&s.text==="")return!1;return!0}/**
 * @license
 * Copyright 2024 Google LLC
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
 */const B="SILENT_ERROR";class we{constructor(t,n,s,o={}){this.model=n,this.params=s,this._requestOptions=o,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=t,s!=null&&s.history&&(Ae(s.history),this._history=s.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(t,n={}){var s,o,i,a,r,l;await this._sendPromise;const h=y(t),C={safetySettings:(s=this.params)===null||s===void 0?void 0:s.safetySettings,generationConfig:(o=this.params)===null||o===void 0?void 0:o.generationConfig,tools:(i=this.params)===null||i===void 0?void 0:i.tools,toolConfig:(a=this.params)===null||a===void 0?void 0:a.toolConfig,systemInstruction:(r=this.params)===null||r===void 0?void 0:r.systemInstruction,cachedContent:(l=this.params)===null||l===void 0?void 0:l.cachedContent,contents:[...this._history,h]},_=Object.assign(Object.assign({},this._requestOptions),n);let d;return this._sendPromise=this._sendPromise.then(()=>W(this._apiKey,this.model,C,_)).then(c=>{var f;if(K(c.response)){this._history.push(h);const m=Object.assign({parts:[],role:"model"},(f=c.response.candidates)===null||f===void 0?void 0:f[0].content);this._history.push(m)}else{const m=g(c.response);m&&console.warn(`sendMessage() was unsuccessful. ${m}. Inspect response object for details.`)}d=c}).catch(c=>{throw this._sendPromise=Promise.resolve(),c}),await this._sendPromise,d}async sendMessageStream(t,n={}){var s,o,i,a,r,l;await this._sendPromise;const h=y(t),C={safetySettings:(s=this.params)===null||s===void 0?void 0:s.safetySettings,generationConfig:(o=this.params)===null||o===void 0?void 0:o.generationConfig,tools:(i=this.params)===null||i===void 0?void 0:i.tools,toolConfig:(a=this.params)===null||a===void 0?void 0:a.toolConfig,systemInstruction:(r=this.params)===null||r===void 0?void 0:r.systemInstruction,cachedContent:(l=this.params)===null||l===void 0?void 0:l.cachedContent,contents:[...this._history,h]},_=Object.assign(Object.assign({},this._requestOptions),n),d=J(this._apiKey,this.model,C,_);return this._sendPromise=this._sendPromise.then(()=>d).catch(c=>{throw new Error(B)}).then(c=>c.response).then(c=>{if(K(c)){this._history.push(h);const f=Object.assign({},c.candidates[0].content);f.role||(f.role="model"),this._history.push(f)}else{const f=g(c);f&&console.warn(`sendMessageStream() was unsuccessful. ${f}. Inspect response object for details.`)}}).catch(c=>{c.message!==B&&console.error(c)}),d}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */async function Ne(e,t,n,s){return(await S(t,p.COUNT_TOKENS,e,!1,JSON.stringify(n),s)).json()}/**
 * @license
 * Copyright 2024 Google LLC
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
 */async function Te(e,t,n,s){return(await S(t,p.EMBED_CONTENT,e,!1,JSON.stringify(n),s)).json()}async function be(e,t,n,s){const o=n.requests.map(a=>Object.assign(Object.assign({},a),{model:t}));return(await S(t,p.BATCH_EMBED_CONTENTS,e,!1,JSON.stringify({requests:o}),s)).json()}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class P{constructor(t,n,s={}){this.apiKey=t,this._requestOptions=s,n.model.includes("/")?this.model=n.model:this.model=`models/${n.model}`,this.generationConfig=n.generationConfig||{},this.safetySettings=n.safetySettings||[],this.tools=n.tools,this.toolConfig=n.toolConfig,this.systemInstruction=X(n.systemInstruction),this.cachedContent=n.cachedContent}async generateContent(t,n={}){var s;const o=$(t),i=Object.assign(Object.assign({},this._requestOptions),n);return W(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(s=this.cachedContent)===null||s===void 0?void 0:s.name},o),i)}async generateContentStream(t,n={}){var s;const o=$(t),i=Object.assign(Object.assign({},this._requestOptions),n);return J(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(s=this.cachedContent)===null||s===void 0?void 0:s.name},o),i)}startChat(t){var n;return new we(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(n=this.cachedContent)===null||n===void 0?void 0:n.name},t),this._requestOptions)}async countTokens(t,n={}){const s=ye(t,{model:this.model,generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:this.cachedContent}),o=Object.assign(Object.assign({},this._requestOptions),n);return Ne(this.apiKey,this.model,s,o)}async embedContent(t,n={}){const s=Re(t),o=Object.assign(Object.assign({},this._requestOptions),n);return Te(this.apiKey,this.model,s,o)}async batchEmbedContents(t,n={}){const s=Object.assign(Object.assign({},this._requestOptions),n);return be(this.apiKey,this.model,t,s)}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class Me{constructor(t){this.apiKey=t}getGenerativeModel(t,n){if(!t.model)throw new u("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new P(this.apiKey,t,n)}getGenerativeModelFromCachedContent(t,n,s){if(!t.name)throw new E("Cached content must contain a `name` field.");if(!t.model)throw new E("Cached content must contain a `model` field.");const o=["model","systemInstruction"];for(const a of o)if(n!=null&&n[a]&&t[a]&&(n==null?void 0:n[a])!==t[a]){if(a==="model"){const r=n.model.startsWith("models/")?n.model.replace("models/",""):n.model,l=t.model.startsWith("models/")?t.model.replace("models/",""):t.model;if(r===l)continue}throw new E(`Different value for "${a}" specified in modelParams (${n[a]}) and cachedContent (${t[a]})`)}const i=Object.assign(Object.assign({},n),{model:t.model,tools:t.tools,toolConfig:t.toolConfig,systemInstruction:t.systemInstruction,cachedContent:t});return new P(this.apiKey,i,s)}}const xe="AIzaSyBDGcnirKrtsLijAj9PmJ4dYUQAzQrnKxM",R=new Me(xe);async function Ge(e){const t=R.getGenerativeModel({model:"gemini-2.5-flash"}),n=`You are a Vedic Scholar AI.
The user has provided a partial or incorrect shloka or verse in Sanskrit or transliteration.
Your task is to identify the correct complete shloka.

User Input: "${e}"

Return a JSON object with the following fields:
{
  "sanskrit": "The correct complete shloka in Devanagari script",
  "transliteration": "The correct complete shloka in English transliteration",
  "source": "The source scripture (e.g. Bhagavad Gita)",
  "chapter": "Chapter number if applicable (e.g. 2)",
  "verse": "Verse number if applicable (e.g. 47)"
}
Return ONLY valid JSON. Do not include markdown formatting like \`\`\`json.`,o=(await t.generateContent(n)).response.text().replace(/```json/g,"").replace(/```/g,"").trim();return JSON.parse(o)}async function ke(e){const t=`You are a Vedic Scholar AI.
Analyze the following Shloka:
${JSON.stringify(e,null,2)}

Return a JSON object with this exact structure:
{
  "basic": "Simple, beginner-friendly translation and meaning.",
  "deep": "Detailed philosophical meaning and practical application in daily life.",
  "spiritual": "Profound esoteric or spiritual significance."
}
Return ONLY valid JSON.`;try{const o=(await R.getGenerativeModel({model:"gemini-2.5-flash"}).generateContent(t)).response.text().replace(/```json/g,"").replace(/```/g,"").trim(),i=JSON.parse(o);return{id:"custom-"+Date.now(),...e,explanations:i.explanations||i}}catch(n){console.warn("gemini-2.5-flash failed, falling back to gemini-2.0-flash",n);try{const i=(await R.getGenerativeModel({model:"gemini-2.0-flash"}).generateContent(t)).response.text().replace(/```json/g,"").replace(/```/g,"").trim(),a=JSON.parse(i);return{id:"custom-"+Date.now(),...e,explanations:a.explanations||a}}catch{throw new Error("Models are currently overloaded. Please try again in a few moments.")}}}async function Ue(e){const t=`You are a deeply wise, warm, and loving Indian sage (a Vedic scholar). 
The user is asking you a question about Indian culture, spirituality, or ancient traditions.
CRITICAL INSTRUCTIONS:
- Speak as if you are a real, compassionate human talking to a friend. Use a warm, comforting, and deeply spiritual tone.
- If the user asks in Hindi, reply entirely in pure, beautiful Hindi. If they ask in English, reply in English but feel free to naturally include beautiful Sanskrit or Hindi words (like "Namaste", "Dharma", "Karma", "Beta") where appropriate.
- Keep the answer concise (2-4 sentences) so it flows perfectly for Text-to-Speech audio.
- Write with emotion, using natural pauses (using commas or dashes) to make the audio sound deeply human.

User Question: "${e}"`;try{return(await R.getGenerativeModel({model:"gemini-2.5-flash"}).generateContent(t)).response.text().trim()}catch(n){console.warn("gemini-2.5-flash failed, falling back to gemini-2.0-flash",n);try{return(await R.getGenerativeModel({model:"gemini-2.0-flash"}).generateContent(t)).response.text().trim()}catch{throw new Error(n.message||"Models are currently overloaded. Please try again in a few moments.")}}}export{De as S,te as T,Ue as a,ke as e,Ge as r};
