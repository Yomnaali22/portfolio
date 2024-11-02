
		import('node:buffer').then(({ Buffer }) => {
			globalThis.Buffer = Buffer;
		})
		.catch(() => null);

		const __ALSes_PROMISE__ = import('node:async_hooks').then(({ AsyncLocalStorage }) => {
			globalThis.AsyncLocalStorage = AsyncLocalStorage;

			const envAsyncLocalStorage = new AsyncLocalStorage();
			const requestContextAsyncLocalStorage = new AsyncLocalStorage();

			globalThis.process = {
				env: new Proxy(
					{},
					{
						ownKeys: () => Reflect.ownKeys(envAsyncLocalStorage.getStore()),
						getOwnPropertyDescriptor: (_, ...args) =>
							Reflect.getOwnPropertyDescriptor(envAsyncLocalStorage.getStore(), ...args),
						get: (_, property) => Reflect.get(envAsyncLocalStorage.getStore(), property),
						set: (_, property, value) => Reflect.set(envAsyncLocalStorage.getStore(), property, value),
				}),
			};

			globalThis[Symbol.for('__cloudflare-request-context__')] = new Proxy(
				{},
				{
					ownKeys: () => Reflect.ownKeys(requestContextAsyncLocalStorage.getStore()),
					getOwnPropertyDescriptor: (_, ...args) =>
						Reflect.getOwnPropertyDescriptor(requestContextAsyncLocalStorage.getStore(), ...args),
					get: (_, property) => Reflect.get(requestContextAsyncLocalStorage.getStore(), property),
					set: (_, property, value) => Reflect.set(requestContextAsyncLocalStorage.getStore(), property, value),
				}
			);

			return { envAsyncLocalStorage, requestContextAsyncLocalStorage };
		})
		.catch(() => null);
	
var se=Object.create;var U=Object.defineProperty;var re=Object.getOwnPropertyDescriptor;var ae=Object.getOwnPropertyNames;var ne=Object.getPrototypeOf,ie=Object.prototype.hasOwnProperty;var T=(e,t)=>()=>(e&&(t=e(e=0)),t);var V=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var oe=(e,t,r,s)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of ae(t))!ie.call(e,n)&&n!==r&&U(e,n,{get:()=>t[n],enumerable:!(s=re(t,n))||s.enumerable});return e};var F=(e,t,r)=>(r=e!=null?se(ne(e)):{},oe(t||!e||!e.__esModule?U(r,"default",{value:e,enumerable:!0}):r,e));var g,l=T(()=>{g={collectedLocales:[]}});var f,u=T(()=>{f={version:3,routes:{none:[{src:"^/_next/__private/trace$",dest:"/404",status:404,continue:!0},{src:"^/404/?$",status:404,continue:!0},{src:"^(?:/((?:[^/]+?)(?:/(?:[^/]+?))*))/$",headers:{Location:"/$1"},status:308}],filesystem:[{src:"^/_next/data/(.*)$",dest:"/_next/data/$1",check:!0},{src:"^/_next/data/(.*)$",status:404}],miss:[{src:"^/_next/static/(?:[^/]+/pages|pages|chunks|runtime|css|image|media)/.+$",status:404,check:!0,dest:"$0"}],rewrite:[],resource:[{src:"^/.*$",status:404}],hit:[{src:"^/_next/static/(?:[^/]+/pages|pages|chunks|runtime|css|image|media|xnd5O8pwoie6Frwa7NG5m)/.+$",headers:{"cache-control":"public,max-age=31536000,immutable"},continue:!0,important:!0}],error:[{status:404,src:"^.*$",dest:"/404"}]},images:{domains:[],sizes:[640,750,828,1080,1200,1920,2048,3840,16,32,48,64,96,128,256,384],remotePatterns:[],minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment"},overrides:{"404.html":{path:"404",contentType:"text/html; charset=utf-8"},"index.html":{path:"index",contentType:"text/html; charset=utf-8"}},framework:{version:"15.0.1"},crons:[]}});var m,h=T(()=>{m={"/404.html":{type:"override",path:"/404.html",headers:{"content-type":"text/html; charset=utf-8"}},"/_next/static/chunks/framework-516982be4eea35ea.js":{type:"static"},"/_next/static/chunks/main-6292f927cd63e2cb.js":{type:"static"},"/_next/static/chunks/pages/_app-0d507208cd05a6f9.js":{type:"static"},"/_next/static/chunks/pages/_error-8c2b6ff87cd513a2.js":{type:"static"},"/_next/static/chunks/pages/index-c99684afdd0ba5e0.js":{type:"static"},"/_next/static/chunks/polyfills-42372ed130431b0a.js":{type:"static"},"/_next/static/chunks/webpack-59041051e025bed2.js":{type:"static"},"/_next/static/css/f66a596540e21bae.css":{type:"static"},"/_next/static/xnd5O8pwoie6Frwa7NG5m/_buildManifest.js":{type:"static"},"/_next/static/xnd5O8pwoie6Frwa7NG5m/_ssgManifest.js":{type:"static"},"/index.html":{type:"override",path:"/index.html",headers:{"content-type":"text/html; charset=utf-8"}},"/404":{type:"override",path:"/404.html",headers:{"content-type":"text/html; charset=utf-8"}},"/index":{type:"override",path:"/index.html",headers:{"content-type":"text/html; charset=utf-8"}},"/":{type:"override",path:"/index.html",headers:{"content-type":"text/html; charset=utf-8"}}}});var q=V((Ge,$)=>{"use strict";l();u();h();function x(e,t){e=String(e||"").trim();let r=e,s,n="";if(/^[^a-zA-Z\\\s]/.test(e)){s=e[0];let o=e.lastIndexOf(s);n+=e.substring(o+1),e=e.substring(1,o)}let a=0;return e=ue(e,o=>{if(/^\(\?[P<']/.test(o)){let c=/^\(\?P?[<']([^>']+)[>']/.exec(o);if(!c)throw new Error(`Failed to extract named captures from ${JSON.stringify(o)}`);let d=o.substring(c[0].length,o.length-1);return t&&(t[a]=c[1]),a++,`(${d})`}return o.substring(0,3)==="(?:"||a++,o}),e=e.replace(/\[:([^:]+):\]/g,(o,c)=>x.characterClasses[c]||o),new x.PCRE(e,n,r,n,s)}function ue(e,t){let r=0,s=0,n=!1;for(let i=0;i<e.length;i++){let a=e[i];if(n){n=!1;continue}switch(a){case"(":s===0&&(r=i),s++;break;case")":if(s>0&&(s--,s===0)){let o=i+1,c=r===0?"":e.substring(0,r),d=e.substring(o),p=String(t(e.substring(r,o)));e=c+p+d,i=r}break;case"\\":n=!0;break;default:break}}return e}(function(e){class t extends RegExp{constructor(s,n,i,a,o){super(s,n),this.pcrePattern=i,this.pcreFlags=a,this.delimiter=o}}e.PCRE=t,e.characterClasses={alnum:"[A-Za-z0-9]",word:"[A-Za-z0-9_]",alpha:"[A-Za-z]",blank:"[ \\t]",cntrl:"[\\x00-\\x1F\\x7F]",digit:"\\d",graph:"[\\x21-\\x7E]",lower:"[a-z]",print:"[\\x20-\\x7E]",punct:"[\\]\\[!\"#$%&'()*+,./:;<=>?@\\\\^_`{|}~-]",space:"\\s",upper:"[A-Z]",xdigit:"[A-Fa-f0-9]"}})(x||(x={}));x.prototype=x.PCRE.prototype;$.exports=x});var X=V(N=>{"use strict";l();u();h();N.parse=ve;N.serialize=be;var Pe=Object.prototype.toString,k=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function ve(e,t){if(typeof e!="string")throw new TypeError("argument str must be a string");for(var r={},s=t||{},n=s.decode||Se,i=0;i<e.length;){var a=e.indexOf("=",i);if(a===-1)break;var o=e.indexOf(";",i);if(o===-1)o=e.length;else if(o<a){i=e.lastIndexOf(";",a-1)+1;continue}var c=e.slice(i,a).trim();if(r[c]===void 0){var d=e.slice(a+1,o).trim();d.charCodeAt(0)===34&&(d=d.slice(1,-1)),r[c]=Ee(d,n)}i=o+1}return r}function be(e,t,r){var s=r||{},n=s.encode||_e;if(typeof n!="function")throw new TypeError("option encode is invalid");if(!k.test(e))throw new TypeError("argument name is invalid");var i=n(t);if(i&&!k.test(i))throw new TypeError("argument val is invalid");var a=e+"="+i;if(s.maxAge!=null){var o=s.maxAge-0;if(isNaN(o)||!isFinite(o))throw new TypeError("option maxAge is invalid");a+="; Max-Age="+Math.floor(o)}if(s.domain){if(!k.test(s.domain))throw new TypeError("option domain is invalid");a+="; Domain="+s.domain}if(s.path){if(!k.test(s.path))throw new TypeError("option path is invalid");a+="; Path="+s.path}if(s.expires){var c=s.expires;if(!Ce(c)||isNaN(c.valueOf()))throw new TypeError("option expires is invalid");a+="; Expires="+c.toUTCString()}if(s.httpOnly&&(a+="; HttpOnly"),s.secure&&(a+="; Secure"),s.priority){var d=typeof s.priority=="string"?s.priority.toLowerCase():s.priority;switch(d){case"low":a+="; Priority=Low";break;case"medium":a+="; Priority=Medium";break;case"high":a+="; Priority=High";break;default:throw new TypeError("option priority is invalid")}}if(s.sameSite){var p=typeof s.sameSite=="string"?s.sameSite.toLowerCase():s.sameSite;switch(p){case!0:a+="; SameSite=Strict";break;case"lax":a+="; SameSite=Lax";break;case"strict":a+="; SameSite=Strict";break;case"none":a+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return a}function Se(e){return e.indexOf("%")!==-1?decodeURIComponent(e):e}function _e(e){return encodeURIComponent(e)}function Ce(e){return Pe.call(e)==="[object Date]"||e instanceof Date}function Ee(e,t){try{return t(e)}catch{return e}}});l();u();h();l();u();h();l();u();h();var v="INTERNAL_SUSPENSE_CACHE_HOSTNAME.local";l();u();h();l();u();h();l();u();h();l();u();h();var D=F(q());function C(e,t,r){if(t==null)return{match:null,captureGroupKeys:[]};let s=r?"":"i",n=[];return{match:(0,D.default)(`%${e}%${s}`,n).exec(t),captureGroupKeys:n}}function b(e,t,r,{namedOnly:s}={}){return e.replace(/\$([a-zA-Z0-9_]+)/g,(n,i)=>{let a=r.indexOf(i);return s&&a===-1?n:(a===-1?t[parseInt(i,10)]:t[a+1])||""})}function L(e,{url:t,cookies:r,headers:s,routeDest:n}){switch(e.type){case"host":return{valid:t.hostname===e.value};case"header":return e.value!==void 0?I(e.value,s.get(e.key),n):{valid:s.has(e.key)};case"cookie":{let i=r[e.key];return i&&e.value!==void 0?I(e.value,i,n):{valid:i!==void 0}}case"query":return e.value!==void 0?I(e.value,t.searchParams.get(e.key),n):{valid:t.searchParams.has(e.key)}}}function I(e,t,r){let{match:s,captureGroupKeys:n}=C(e,t);return r&&s&&n.length?{valid:!!s,newRouteDest:b(r,s,n,{namedOnly:!0})}:{valid:!!s}}l();u();h();function j(e){let t=new Headers(e.headers);return e.cf&&(t.set("x-vercel-ip-city",encodeURIComponent(e.cf.city)),t.set("x-vercel-ip-country",e.cf.country),t.set("x-vercel-ip-country-region",e.cf.regionCode),t.set("x-vercel-ip-latitude",e.cf.latitude),t.set("x-vercel-ip-longitude",e.cf.longitude)),t.set("x-vercel-sc-host",v),new Request(e,{headers:t})}l();u();h();function R(e,t,r){let s=t instanceof Headers?t.entries():Object.entries(t);for(let[n,i]of s){let a=n.toLowerCase(),o=r?.match?b(i,r.match,r.captureGroupKeys):i;a==="set-cookie"?e.append(a,o):e.set(a,o)}}function S(e){return/^https?:\/\//.test(e)}function w(e,t){for(let[r,s]of t.entries()){let n=/^nxtP(.+)$/.exec(r),i=/^nxtI(.+)$/.exec(r);n?.[1]?(e.set(r,s),e.set(n[1],s)):i?.[1]?e.set(i[1],s.replace(/(\(\.+\))+/,"")):(!e.has(r)||!!s&&!e.getAll(r).includes(s))&&e.append(r,s)}}function A(e,t){let r=new URL(t,e.url);return w(r.searchParams,new URL(e.url).searchParams),r.pathname=r.pathname.replace(/\/index.html$/,"/").replace(/\.html$/,""),new Request(r,e)}function _(e){return new Response(e.body,e)}function O(e){return e.split(",").map(t=>{let[r,s]=t.split(";"),n=parseFloat((s??"q=1").replace(/q *= */gi,""));return[r.trim(),isNaN(n)?1:n]}).sort((t,r)=>r[1]-t[1]).map(([t])=>t==="*"||t===""?[]:t).flat()}l();u();h();function H(e){switch(e){case"none":return"filesystem";case"filesystem":return"rewrite";case"rewrite":return"resource";case"resource":return"miss";default:return"miss"}}async function E(e,{request:t,assetsFetcher:r,ctx:s},{path:n,searchParams:i}){let a,o=new URL(t.url);w(o.searchParams,i);let c=new Request(o,t);try{switch(e?.type){case"function":case"middleware":{let d=await import(e.entrypoint);try{a=await d.default(c,s)}catch(p){let y=p;throw y.name==="TypeError"&&y.message.endsWith("default is not a function")?new Error(`An error occurred while evaluating the target edge function (${e.entrypoint})`):p}break}case"override":{a=_(await r.fetch(A(c,e.path??n))),e.headers&&R(a.headers,e.headers);break}case"static":{a=await r.fetch(A(c,n));break}default:a=new Response("Not Found",{status:404})}}catch(d){return console.error(d),new Response("Internal Server Error",{status:500})}return _(a)}function B(e,t){let r="^//?(?:",s=")/(.*)$";return!e.startsWith(r)||!e.endsWith(s)?!1:e.slice(r.length,-s.length).split("|").every(i=>t.has(i))}l();u();h();function he(e,{protocol:t,hostname:r,port:s,pathname:n}){return!(t&&e.protocol.replace(/:$/,"")!==t||!new RegExp(r).test(e.hostname)||s&&!new RegExp(s).test(e.port)||n&&!new RegExp(n).test(e.pathname))}function de(e,t){if(e.method!=="GET")return;let{origin:r,searchParams:s}=new URL(e.url),n=s.get("url"),i=Number.parseInt(s.get("w")??"",10),a=Number.parseInt(s.get("q")??"75",10);if(!n||Number.isNaN(i)||Number.isNaN(a)||!t?.sizes?.includes(i)||a<0||a>100)return;let o=new URL(n,r);if(o.pathname.endsWith(".svg")&&!t?.dangerouslyAllowSVG)return;let c=n.startsWith("//"),d=n.startsWith("/")&&!c;if(!d&&!t?.domains?.includes(o.hostname)&&!t?.remotePatterns?.find(P=>he(o,P)))return;let p=e.headers.get("Accept")??"",y=t?.formats?.find(P=>p.includes(P))?.replace("image/","");return{isRelative:d,imageUrl:o,options:{width:i,quality:a,format:y}}}function pe(e,t,r){let s=new Headers;if(r?.contentSecurityPolicy&&s.set("Content-Security-Policy",r.contentSecurityPolicy),r?.contentDispositionType){let i=t.pathname.split("/").pop(),a=i?`${r.contentDispositionType}; filename="${i}"`:r.contentDispositionType;s.set("Content-Disposition",a)}e.headers.has("Cache-Control")||s.set("Cache-Control",`public, max-age=${r?.minimumCacheTTL??60}`);let n=_(e);return R(n.headers,s),n}async function G(e,{buildOutput:t,assetsFetcher:r,imagesConfig:s}){let n=de(e,s);if(!n)return new Response("Invalid image resizing request",{status:400});let{isRelative:i,imageUrl:a}=n,c=await(i&&a.pathname in t?r.fetch.bind(r):fetch)(a);return pe(c,a,s)}l();u();h();l();u();h();var fe="x-vercel-cache-tags",me="x-next-cache-soft-tags",ge=Symbol.for("__cloudflare-request-context__");async function z(e){let t=`https://${v}/v1/suspense-cache/`;if(!e.url.startsWith(t))return null;try{let r=new URL(e.url),s=await ye();if(r.pathname==="/v1/suspense-cache/revalidate"){let i=r.searchParams.get("tags")?.split(",")??[];for(let a of i)await s.revalidateTag(a);return new Response(null,{status:200})}let n=r.pathname.replace("/v1/suspense-cache/","");if(!n.length)return new Response("Invalid cache key",{status:400});switch(e.method){case"GET":{let i=K(e,me),a=await s.get(n,{softTags:i});return a?new Response(JSON.stringify(a.value),{status:200,headers:{"Content-Type":"application/json","x-vercel-cache-state":"fresh",age:`${(Date.now()-(a.lastModified??Date.now()))/1e3}`}}):new Response(null,{status:404})}case"POST":{let i=globalThis[ge],a=async()=>{let o=await e.json();o.data.tags===void 0&&(o.tags??=K(e,fe)??[]),await s.set(n,o)};return i?i.ctx.waitUntil(a()):await a(),new Response(null,{status:200})}default:return new Response(null,{status:405})}}catch(r){return console.error(r),new Response("Error handling cache request",{status:500})}}async function ye(){return process.env.__NEXT_ON_PAGES__KV_SUSPENSE_CACHE?W("kv"):W("cache-api")}async function W(e){let t=await import(`./__next-on-pages-dist__/cache/${e}.js`);return new t.default}function K(e,t){return e.headers.get(t)?.split(",")?.filter(Boolean)}function Z(){globalThis[J]||(Re(),globalThis[J]=!0)}function Re(){let e=globalThis.fetch;globalThis.fetch=async(...t)=>{let r=new Request(...t),s=await we(r);return s||(s=await z(r),s)?s:(xe(r),e(r))}}async function we(e){if(e.url.startsWith("blob:"))try{let r=(await import(`./__next-on-pages-dist__/assets/${new URL(e.url).pathname}.bin`)).default,s={async arrayBuffer(){return r},get body(){return new ReadableStream({start(n){let i=Buffer.from(r);n.enqueue(i),n.close()}})},async text(){return Buffer.from(r).toString()},async json(){let n=Buffer.from(r);return JSON.stringify(n.toString())},async blob(){return new Blob(r)}};return s.clone=()=>({...s}),s}catch{}return null}function xe(e){e.headers.has("user-agent")||e.headers.set("user-agent","Next.js Middleware")}var J=Symbol.for("next-on-pages fetch patch");l();u();h();var Q=F(X());var M=class{constructor(t,r,s,n,i){this.routes=t;this.output=r;this.reqCtx=s;this.url=new URL(s.request.url),this.cookies=(0,Q.parse)(s.request.headers.get("cookie")||""),this.path=this.url.pathname||"/",this.headers={normal:new Headers,important:new Headers},this.searchParams=new URLSearchParams,w(this.searchParams,this.url.searchParams),this.checkPhaseCounter=0,this.middlewareInvoked=[],this.wildcardMatch=i?.find(a=>a.domain===this.url.hostname),this.locales=new Set(n.collectedLocales)}url;cookies;wildcardMatch;path;status;headers;searchParams;body;checkPhaseCounter;middlewareInvoked;locales;checkRouteMatch(t,{checkStatus:r,checkIntercept:s}){let n=C(t.src,this.path,t.caseSensitive);if(!n.match||t.methods&&!t.methods.map(a=>a.toUpperCase()).includes(this.reqCtx.request.method.toUpperCase()))return;let i={url:this.url,cookies:this.cookies,headers:this.reqCtx.request.headers,routeDest:t.dest};if(!t.has?.find(a=>{let o=L(a,i);return o.newRouteDest&&(i.routeDest=o.newRouteDest),!o.valid})&&!t.missing?.find(a=>L(a,i).valid)&&!(r&&t.status!==this.status)){if(s&&t.dest){let a=/\/(\(\.+\))+/,o=a.test(t.dest),c=a.test(this.path);if(o&&!c)return}return{routeMatch:n,routeDest:i.routeDest}}}processMiddlewareResp(t){let r="x-middleware-override-headers",s=t.headers.get(r);if(s){let c=new Set(s.split(",").map(d=>d.trim()));for(let d of c.keys()){let p=`x-middleware-request-${d}`,y=t.headers.get(p);this.reqCtx.request.headers.get(d)!==y&&(y?this.reqCtx.request.headers.set(d,y):this.reqCtx.request.headers.delete(d)),t.headers.delete(p)}t.headers.delete(r)}let n="x-middleware-rewrite",i=t.headers.get(n);if(i){let c=new URL(i,this.url),d=this.url.hostname!==c.hostname;this.path=d?`${c}`:c.pathname,w(this.searchParams,c.searchParams),t.headers.delete(n)}let a="x-middleware-next";t.headers.get(a)?t.headers.delete(a):!i&&!t.headers.has("location")?(this.body=t.body,this.status=t.status):t.headers.has("location")&&t.status>=300&&t.status<400&&(this.status=t.status),R(this.reqCtx.request.headers,t.headers),R(this.headers.normal,t.headers),this.headers.middlewareLocation=t.headers.get("location")}async runRouteMiddleware(t){if(!t)return!0;let r=t&&this.output[t];if(!r||r.type!=="middleware")return this.status=500,!1;let s=await E(r,this.reqCtx,{path:this.path,searchParams:this.searchParams,headers:this.headers,status:this.status});return this.middlewareInvoked.push(t),s.status===500?(this.status=s.status,!1):(this.processMiddlewareResp(s),!0)}applyRouteOverrides(t){!t.override||(this.status=void 0,this.headers.normal=new Headers,this.headers.important=new Headers)}applyRouteHeaders(t,r,s){!t.headers||(R(this.headers.normal,t.headers,{match:r,captureGroupKeys:s}),t.important&&R(this.headers.important,t.headers,{match:r,captureGroupKeys:s}))}applyRouteStatus(t){!t.status||(this.status=t.status)}applyRouteDest(t,r,s){if(!t.dest)return this.path;let n=this.path,i=t.dest;this.wildcardMatch&&/\$wildcard/.test(i)&&(i=i.replace(/\$wildcard/g,this.wildcardMatch.value)),this.path=b(i,r,s);let a=/\/index\.rsc$/i.test(this.path),o=/^\/(?:index)?$/i.test(n),c=/^\/__index\.prefetch\.rsc$/i.test(n);a&&!o&&!c&&(this.path=n);let d=/\.rsc$/i.test(this.path),p=/\.prefetch\.rsc$/i.test(this.path),y=this.path in this.output;d&&!p&&!y&&(this.path=this.path.replace(/\.rsc/i,""));let P=new URL(this.path,this.url);return w(this.searchParams,P.searchParams),S(this.path)||(this.path=P.pathname),n}applyLocaleRedirects(t){if(!t.locale?.redirect||!/^\^(.)*$/.test(t.src)&&t.src!==this.path||this.headers.normal.has("location"))return;let{locale:{redirect:s,cookie:n}}=t,i=n&&this.cookies[n],a=O(i??""),o=O(this.reqCtx.request.headers.get("accept-language")??""),p=[...a,...o].map(y=>s[y]).filter(Boolean)[0];if(p){!this.path.startsWith(p)&&(this.headers.normal.set("location",p),this.status=307);return}}getLocaleFriendlyRoute(t,r){return!this.locales||r!=="miss"?t:B(t.src,this.locales)?{...t,src:t.src.replace(/\/\(\.\*\)\$$/,"(?:/(.*))?$")}:t}async checkRoute(t,r){let s=this.getLocaleFriendlyRoute(r,t),{routeMatch:n,routeDest:i}=this.checkRouteMatch(s,{checkStatus:t==="error",checkIntercept:t==="rewrite"})??{},a={...s,dest:i};if(!n?.match||a.middlewarePath&&this.middlewareInvoked.includes(a.middlewarePath))return"skip";let{match:o,captureGroupKeys:c}=n;if(this.applyRouteOverrides(a),this.applyLocaleRedirects(a),!await this.runRouteMiddleware(a.middlewarePath))return"error";if(this.body!==void 0||this.headers.middlewareLocation)return"done";this.applyRouteHeaders(a,o,c),this.applyRouteStatus(a);let p=this.applyRouteDest(a,o,c);if(a.check&&!S(this.path))if(p===this.path){if(t!=="miss")return this.checkPhase(H(t));this.status=404}else if(t==="miss"){if(!(this.path in this.output)&&!(this.path.replace(/\/$/,"")in this.output))return this.checkPhase("filesystem");this.status===404&&(this.status=void 0)}else return this.checkPhase("none");return!a.continue||a.status&&a.status>=300&&a.status<=399?"done":"next"}async checkPhase(t){if(this.checkPhaseCounter++>=50)return console.error(`Routing encountered an infinite loop while checking ${this.url.pathname}`),this.status=500,"error";this.middlewareInvoked=[];let r=!0;for(let i of this.routes[t]){let a=await this.checkRoute(t,i);if(a==="error")return"error";if(a==="done"){r=!1;break}}if(t==="hit"||S(this.path)||this.headers.normal.has("location")||!!this.body)return"done";if(t==="none")for(let i of this.locales){let a=new RegExp(`/${i}(/.*)`),c=this.path.match(a)?.[1];if(c&&c in this.output){this.path=c;break}}let s=this.path in this.output;if(!s&&this.path.endsWith("/")){let i=this.path.replace(/\/$/,"");s=i in this.output,s&&(this.path=i)}if(t==="miss"&&!s){let i=!this.status||this.status<400;this.status=i?404:this.status}let n="miss";return s||t==="miss"||t==="error"?n="hit":r&&(n=H(t)),this.checkPhase(n)}async run(t="none"){this.checkPhaseCounter=0;let r=await this.checkPhase(t);return this.headers.normal.has("location")&&(!this.status||this.status<300||this.status>=400)&&(this.status=307),r}};async function Y(e,t,r,s){let n=new M(t.routes,r,e,s,t.wildcard),i=await ee(n);return ke(e,i,r)}async function ee(e,t="none",r=!1){return await e.run(t)==="error"||!r&&e.status&&e.status>=400?ee(e,"error",!0):{path:e.path,status:e.status,headers:e.headers,searchParams:e.searchParams,body:e.body}}async function ke(e,{path:t="/404",status:r,headers:s,searchParams:n,body:i},a){let o=s.normal.get("location");if(o){if(o!==s.middlewareLocation){let p=[...n.keys()].length?`?${n.toString()}`:"";s.normal.set("location",`${o??"/"}${p}`)}return new Response(null,{status:r,headers:s.normal})}let c;if(i!==void 0)c=new Response(i,{status:r});else if(S(t)){let p=new URL(t);w(p.searchParams,n),c=await fetch(p,e.request)}else c=await E(a[t],e,{path:t,status:r,headers:s,searchParams:n});let d=s.normal;return R(d,c.headers),R(d,s.important),c=new Response(c.body,{...c,status:r||c.status,headers:d}),c}l();u();h();function te(){globalThis.__nextOnPagesRoutesIsolation??={_map:new Map,getProxyFor:Me}}function Me(e){let t=globalThis.__nextOnPagesRoutesIsolation._map.get(e);if(t)return t;let r=Te();return globalThis.__nextOnPagesRoutesIsolation._map.set(e,r),r}function Te(){let e=new Map;return new Proxy(globalThis,{get:(t,r)=>e.has(r)?e.get(r):Reflect.get(globalThis,r),set:(t,r,s)=>Ie.has(r)?Reflect.set(globalThis,r,s):(e.set(r,s),!0)})}var Ie=new Set(["_nextOriginalFetch","fetch","__incrementalCache"]);var ms={async fetch(e,t,r){te(),Z();let s=await __ALSes_PROMISE__;if(!s){let a=new URL(e.url),o=await t.ASSETS.fetch(`${a.protocol}//${a.host}/cdn-cgi/errors/no-nodejs_compat.html`),c=o.ok?o.body:"Error: Could not access built-in Node.js modules. Please make sure that your Cloudflare Pages project has the 'nodejs_compat' compatibility flag set.";return new Response(c,{status:503})}let{envAsyncLocalStorage:n,requestContextAsyncLocalStorage:i}=s;return n.run({...t,NODE_ENV:"production",SUSPENSE_CACHE_URL:v},async()=>i.run({env:t,ctx:r,cf:e.cf},async()=>{if(new URL(e.url).pathname.startsWith("/_next/image"))return G(e,{buildOutput:m,assetsFetcher:t.ASSETS,imagesConfig:f.images});let o=j(e);return Y({request:o,ctx:r,assetsFetcher:t.ASSETS},f,m,g)}))}};export{ms as default};
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
