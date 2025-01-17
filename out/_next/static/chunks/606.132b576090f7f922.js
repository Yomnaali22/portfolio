(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[606],{8907:(e,t)=>{"use strict";t.Y=function(e,t){return e.split(",").map(function(e){var t=(e=e.trim()).match(r),i=t[1],s=t[2],a=t[3]||"",c={};return c.inverse=!!i&&"not"===i.toLowerCase(),c.type=s?s.toLowerCase():"all",a=a.match(/\([^\)]+\)/g)||[],c.expressions=a.map(function(e){var t=e.match(n),r=t[1].toLowerCase().match(o);return{modifier:r[1],feature:r[2],value:t[2]}}),c}).some(function(e){var r=e.inverse,n="all"===e.type||t.type===e.type;if(n&&r||!(n||r))return!1;var o=e.expressions.every(function(e){var r=e.feature,n=e.modifier,o=e.value,i=t[r];if(!i)return!1;switch(r){case"orientation":case"scan":return i.toLowerCase()===o.toLowerCase();case"width":case"height":case"device-width":case"device-height":o=u(o),i=u(i);break;case"resolution":o=c(o),i=c(i);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":o=a(o),i=a(i);break;case"grid":case"color":case"color-index":case"monochrome":o=parseInt(o,10)||1,i=parseInt(i,10)||0}switch(n){case"min":return i>=o;case"max":return i<=o;default:return i===o}});return o&&!r||!o&&r})};var r=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,n=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,o=/^(?:(min|max)-)?(.+)/,i=/(em|rem|px|cm|mm|in|pt|pc)?$/,s=/(dpi|dpcm|dppx)?$/;function a(e){var t,r=Number(e);return r||(r=(t=e.match(/^(\d+)\s*\/\s*(\d+)$/))[1]/t[2]),r}function c(e){var t=parseFloat(e);switch(String(e).match(s)[1]){case"dpcm":return t/2.54;case"dppx":return 96*t;default:return t}}function u(e){var t=parseFloat(e);switch(String(e).match(i)[1]){case"em":case"rem":return 16*t;case"cm":return 96*t/2.54;case"mm":return 96*t/2.54/10;case"in":return 96*t;case"pt":return 72*t;case"pc":return 72*t/12;default:return t}}},7918:(e,t,r)=>{"use strict";var n=r(8907).Y,o="undefined"!=typeof window?window.matchMedia:null;function i(e,t,r){var i,s=this;function a(e){s.matches=e.matches,s.media=e.media}o&&!r&&(i=o.call(window,e)),i?(this.matches=i.matches,this.media=i.media,i.addListener(a)):(this.matches=n(e,t),this.media=e),this.addListener=function(e){i&&i.addListener(e)},this.removeListener=function(e){i&&i.removeListener(e)},this.dispose=function(){i&&i.removeListener(a)}}e.exports=function(e,t,r){return new i(e,t,r)}},2694:(e,t,r)=>{"use strict";var n=r(6925);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,i,s){if(s!==n){var a=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return r.PropTypes=r,r}},5556:(e,t,r)=>{e.exports=r(2694)()},6925:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},4606:(e,t,r)=>{"use strict";r.r(t),r.d(t,{Context:()=>C,default:()=>S,toQuery:()=>O,useMediaQuery:()=>I});var n=r(6540),o=r(7918),i=r.n(o),s=/[A-Z]/g,a=/^ms-/,c={};function u(e){return"-"+e.toLowerCase()}let l=function(e){if(c.hasOwnProperty(e))return c[e];var t=e.replace(s,u);return c[e]=a.test(t)?"-"+t:t};var m=r(5556),p=r.n(m);let f=p().oneOfType([p().string,p().number]),d={all:p().bool,grid:p().bool,aural:p().bool,braille:p().bool,handheld:p().bool,print:p().bool,projection:p().bool,screen:p().bool,tty:p().bool,tv:p().bool,embossed:p().bool},{type:h,...v}={orientation:p().oneOf(["portrait","landscape"]),scan:p().oneOf(["progressive","interlace"]),aspectRatio:p().string,deviceAspectRatio:p().string,height:f,deviceHeight:f,width:f,deviceWidth:f,color:p().bool,colorIndex:p().bool,monochrome:p().bool,resolution:f,type:Object.keys(d)},b={minAspectRatio:p().string,maxAspectRatio:p().string,minDeviceAspectRatio:p().string,maxDeviceAspectRatio:p().string,minHeight:f,maxHeight:f,minDeviceHeight:f,maxDeviceHeight:f,minWidth:f,maxWidth:f,minDeviceWidth:f,maxDeviceWidth:f,minColor:p().number,maxColor:p().number,minColorIndex:p().number,maxColorIndex:p().number,minMonochrome:p().number,maxMonochrome:p().number,minResolution:f,maxResolution:f,...v};var y={all:{...d,...b}};let g=e=>`not ${e}`,x=(e,t)=>{let r=l(e);return("number"==typeof t&&(t=`${t}px`),!0===t)?r:!1===t?g(r):`(${r}: ${t})`},w=e=>e.join(" and "),O=e=>{let t=[];return Object.keys(y.all).forEach(r=>{let n=e[r];null!=n&&t.push(x(r,n))}),w(t)},C=(0,n.createContext)(void 0),k=e=>e.query||O(e),E=e=>{if(e)return Object.keys(e).reduce((t,r)=>(t[l(r)]=e[r],t),{})},L=()=>{let e=(0,n.useRef)(!1);return(0,n.useEffect)(()=>{e.current=!0},[]),e.current},R=e=>{let t=(0,n.useContext)(C),r=()=>E(e)||E(t),[o,i]=(0,n.useState)(r);return(0,n.useEffect)(()=>{let e=r();!function(e,t){if(e===t)return!0;if(!e||!t)return!1;let r=Object.keys(e),n=Object.keys(t),o=r.length;if(n.length!==o)return!1;for(let n=0;n<o;n++){let o=r[n];if(e[o]!==t[o]||!Object.prototype.hasOwnProperty.call(t,o))return!1}return!0}(o,e)&&i(e)},[e,t]),o},_=e=>{let t=()=>k(e),[r,o]=(0,n.useState)(t);return(0,n.useEffect)(()=>{let e=t();r!==e&&o(e)},[e]),r},T=(e,t)=>{let r=()=>i()(e,t||{},!!t),[o,s]=(0,n.useState)(r),a=L();return(0,n.useEffect)(()=>{if(a){let e=r();return s(e),()=>{e&&e.dispose()}}},[e,t]),o},j=e=>{let[t,r]=(0,n.useState)(e.matches);return(0,n.useEffect)(()=>{let t=e=>{r(e.matches)};return e.addListener(t),r(e.matches),()=>{e.removeListener(t)}},[e]),t},I=(e,t,r)=>{let o=R(t),i=_(e);if(!i)throw Error("Invalid or missing MediaQuery!");let s=T(i,o),a=j(s),c=L();return(0,n.useEffect)(()=>{c&&r&&r(a)},[a]),(0,n.useEffect)(()=>()=>{s&&s.dispose()},[]),a},S=({children:e,device:t,onChange:r,...n})=>{let o=I(n,t,r);return"function"==typeof e?e(o):o?e:null}}}]);