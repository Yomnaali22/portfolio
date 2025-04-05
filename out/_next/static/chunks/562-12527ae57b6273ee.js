(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[562],{625:(e,t,r)=>{"use strict";r.d(t,{pL:()=>c});var n=r(4232),o=Object.defineProperty,l=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,i=(e,t,r)=>l(e,"symbol"!=typeof t?t+"":t,r),u=new Map,s=new WeakMap,a=0,d=void 0,c=class extends n.Component{constructor(e){super(e),i(this,"node",null),i(this,"_unobserveCb",null),i(this,"handleNode",e=>{!this.node||(this.unobserve(),e||this.props.triggerOnce||this.props.skip||this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=e||null,this.observeNode()}),i(this,"handleChange",(e,t)=>{e&&this.props.triggerOnce&&this.unobserve(),"function"==typeof this.props.children&&this.setState({inView:e,entry:t}),this.props.onChange&&this.props.onChange(e,t)}),this.state={inView:!!e.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(e){(e.rootMargin!==this.props.rootMargin||e.root!==this.props.root||e.threshold!==this.props.threshold||e.skip!==this.props.skip||e.trackVisibility!==this.props.trackVisibility||e.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;let{threshold:e,root:t,rootMargin:r,trackVisibility:n,delay:o,fallbackInView:l}=this.props;this._unobserveCb=function(e,t,r={},n=d){if(void 0===window.IntersectionObserver&&void 0!==n){let o=e.getBoundingClientRect();return t(n,{isIntersecting:n,target:e,intersectionRatio:"number"==typeof r.threshold?r.threshold:0,time:0,boundingClientRect:o,intersectionRect:o,rootBounds:o}),()=>{}}let{id:o,observer:l,elements:i}=function(e){let t=Object.keys(e).sort().filter(t=>void 0!==e[t]).map(t=>{var r;return`${t}_${"root"===t?(r=e.root)?(s.has(r)||(a+=1,s.set(r,a.toString())),s.get(r)):"0":e[t]}`}).toString(),r=u.get(t);if(!r){let n;let o=new Map,l=new IntersectionObserver(t=>{t.forEach(t=>{var r;let l=t.isIntersecting&&n.some(e=>t.intersectionRatio>=e);e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=l),null==(r=o.get(t.target))||r.forEach(e=>{e(l,t)})})},e);n=l.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),r={id:t,observer:l,elements:o},u.set(t,r)}return r}(r),c=i.get(e)||[];return i.has(e)||i.set(e,c),c.push(t),l.observe(e),function(){c.splice(c.indexOf(t),1),0===c.length&&(i.delete(e),l.unobserve(e)),0===i.size&&(l.disconnect(),u.delete(o))}}(this.node,this.handleChange,{threshold:e,root:t,rootMargin:r,trackVisibility:n,delay:o},l)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){let{children:e}=this.props;if("function"==typeof e){let{inView:t,entry:r}=this.state;return e({inView:t,entry:r,ref:this.handleNode})}let{as:t,triggerOnce:r,threshold:o,root:l,rootMargin:i,onChange:u,skip:s,trackVisibility:a,delay:d,initialInView:c,fallbackInView:f,...p}=this.props;return n.createElement(t||"div",{ref:this.handleNode,...p},e)}}},1026:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useMergedRef",{enumerable:!0,get:function(){return o}});let n=r(4232);function o(e,t){let r=(0,n.useRef)(null),o=(0,n.useRef)(null);return(0,n.useCallback)(n=>{if(null===n){let e=r.current;e&&(r.current=null,e());let t=o.current;t&&(o.current=null,t())}else e&&(r.current=l(e,n)),t&&(o.current=l(t,n))},[e,t])}function l(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1147:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return u},noSSR:function(){return i}});let n=r(4252);r(7876),r(4232);let o=n._(r(2100));function l(e){return{default:(null==e?void 0:e.default)||e}}function i(e,t){return delete t.webpack,delete t.modules,e(t)}function u(e,t){let r=o.default,n={loading:e=>{let{error:t,isLoading:r,pastDelay:n}=e;return null}};e instanceof Promise?n.loader=()=>e:"function"==typeof e?n.loader=e:"object"==typeof e&&(n={...n,...e});let u=(n={...n,...t}).loader;return(n.loadableGenerated&&(n={...n,...n.loadableGenerated},delete n.loadableGenerated),"boolean"!=typeof n.ssr||n.ssr)?r({...n,loader:()=>null!=u?u().then(l):Promise.resolve(l(()=>null))}):(delete n.webpack,delete n.modules,i(r,n))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1639:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return m}});let n=r(4252),o=r(7876),l=n._(r(4232)),i=r(6658),u=r(1851),s=r(6225),a=r(8407),d=r(2696),c=r(8265),f=r(2343),p=r(8940),h=r(7469),b=r(1026),y=new Set;function _(e,t,r,n){if((0,u.isLocalURL)(t)){if(!n.bypassPrefetchedCheck){let o=t+"%"+r+"%"+(void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0);if(y.has(o))return;y.add(o)}e.prefetch(t,r,n).catch(e=>{})}}function g(e){return"string"==typeof e?e:(0,s.formatUrl)(e)}let m=l.default.forwardRef(function(e,t){let r,n;let{href:s,as:y,children:m,prefetch:v=null,passHref:C,replace:O,shallow:j,scroll:M,locale:k,onClick:w,onMouseEnter:P,onTouchStart:E,legacyBehavior:R=!1,...x}=e;r=m,R&&("string"==typeof r||"number"==typeof r)&&(r=(0,o.jsx)("a",{children:r}));let L=l.default.useContext(c.RouterContext),S=!1!==v,{href:I,as:T}=l.default.useMemo(()=>{if(!L){let e=g(s);return{href:e,as:y?g(y):e}}let[e,t]=(0,i.resolveHref)(L,s,!0);return{href:e,as:y?(0,i.resolveHref)(L,y):t||e}},[L,s,y]),V=l.default.useRef(I),D=l.default.useRef(T);R&&(n=l.default.Children.only(r));let N=R?n&&"object"==typeof n&&n.ref:t,[A,U,K]=(0,f.useIntersection)({rootMargin:"200px"}),B=l.default.useCallback(e=>{(D.current!==T||V.current!==I)&&(K(),D.current=T,V.current=I),A(e)},[T,I,K,A]),G=(0,b.useMergedRef)(B,N);l.default.useEffect(()=>{L&&U&&S&&_(L,I,T,{locale:k})},[T,I,U,k,S,null==L?void 0:L.locale,L]);let H={ref:G,onClick(e){R||"function"!=typeof w||w(e),R&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),L&&!e.defaultPrevented&&!function(e,t,r,n,o,l,i,s){let{nodeName:a}=e.currentTarget;!("A"===a.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!(0,u.isLocalURL)(r)))&&(e.preventDefault(),(()=>{let e=null==i||i;"beforePopState"in t?t[o?"replace":"push"](r,n,{shallow:l,locale:s,scroll:e}):t[o?"replace":"push"](n||r,{scroll:e})})())}(e,L,I,T,O,j,M,k)},onMouseEnter(e){R||"function"!=typeof P||P(e),R&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),L&&_(L,I,T,{locale:k,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart:function(e){R||"function"!=typeof E||E(e),R&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),L&&_(L,I,T,{locale:k,priority:!0,bypassPrefetchedCheck:!0})}};if((0,a.isAbsoluteUrl)(T))H.href=T;else if(!R||C||"a"===n.type&&!("href"in n.props)){let e=void 0!==k?k:null==L?void 0:L.locale;H.href=(null==L?void 0:L.isLocaleDomain)&&(0,p.getDomainLocale)(T,e,null==L?void 0:L.locales,null==L?void 0:L.domainLocales)||(0,h.addBasePath)((0,d.addLocale)(T,e,null==L?void 0:L.defaultLocale))}return R?l.default.cloneElement(n,H):(0,o.jsx)("a",{...x,...H,children:r})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1650:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"LoadableContext",{enumerable:!0,get:function(){return n}});let n=r(4252)._(r(4232)).default.createContext(null)},2100:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return f}});let n=r(4252)._(r(4232)),o=r(1650),l=[],i=[],u=!1;function s(e){let t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then(e=>(r.loading=!1,r.loaded=e,e)).catch(e=>{throw r.loading=!1,r.error=e,e}),r}class a{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state={...this._state,error:this._res.error,loaded:this._res.loaded,loading:this._res.loading,...e},this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function d(e){return function(e,t){let r=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),l=null;function s(){if(!l){let t=new a(e,r);l={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return l.promise()}if(!u){let e=r.webpack?r.webpack():r.modules;e&&i.push(t=>{for(let r of e)if(t.includes(r))return s()})}function d(e,t){!function(){s();let e=n.default.useContext(o.LoadableContext);e&&Array.isArray(r.modules)&&r.modules.forEach(t=>{e(t)})}();let i=n.default.useSyncExternalStore(l.subscribe,l.getCurrentValue,l.getCurrentValue);return n.default.useImperativeHandle(t,()=>({retry:l.retry}),[]),n.default.useMemo(()=>{var t;return i.loading||i.error?n.default.createElement(r.loading,{isLoading:i.loading,pastDelay:i.pastDelay,timedOut:i.timedOut,error:i.error,retry:l.retry}):i.loaded?n.default.createElement((t=i.loaded)&&t.default?t.default:t,e):null},[e,i])}return d.preload=()=>s(),d.displayName="LoadableComponent",n.default.forwardRef(d)}(s,e)}function c(e,t){let r=[];for(;e.length;){let n=e.pop();r.push(n(t))}return Promise.all(r).then(()=>{if(e.length)return c(e,t)})}d.preloadAll=()=>new Promise((e,t)=>{c(l).then(e,t)}),d.preloadReady=e=>(void 0===e&&(e=[]),new Promise(t=>{let r=()=>(u=!0,t());c(i,e).then(r,r)})),window.__NEXT_PRELOADREADY=d.preloadReady;let f=d},2343:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return s}});let n=r(4232),o=r(4754),l="function"==typeof IntersectionObserver,i=new Map,u=[];function s(e){let{rootRef:t,rootMargin:r,disabled:s}=e,a=s||!l,[d,c]=(0,n.useState)(!1),f=(0,n.useRef)(null),p=(0,n.useCallback)(e=>{f.current=e},[]);return(0,n.useEffect)(()=>{if(l){if(a||d)return;let e=f.current;if(e&&e.tagName)return function(e,t,r){let{id:n,observer:o,elements:l}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=u.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=i.get(n)))return t;let o=new Map;return t={id:r,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:o},u.push(r),i.set(r,t),t}(r);return l.set(e,t),o.observe(e),function(){if(l.delete(e),o.unobserve(e),0===l.size){o.disconnect(),i.delete(n);let e=u.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&u.splice(e,1)}}}(e,e=>e&&c(e),{root:null==t?void 0:t.current,rootMargin:r})}else if(!d){let e=(0,o.requestIdleCallback)(()=>c(!0));return()=>(0,o.cancelIdleCallback)(e)}},[a,r,t,d,f.current]),[p,d,(0,n.useCallback)(()=>{c(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8230:(e,t,r)=>{e.exports=r(1639)},8847:(e,t,r)=>{e.exports=r(1147)},8940:(e,t,r)=>{"use strict";function n(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return n}}),r(7810),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)}}]);