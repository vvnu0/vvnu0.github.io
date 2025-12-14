(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}})();function Tc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ps={exports:{}},ml={},ms={exports:{}},b={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ir=Symbol.for("react.element"),Pc=Symbol.for("react.portal"),bc=Symbol.for("react.fragment"),Lc=Symbol.for("react.strict_mode"),Ic=Symbol.for("react.profiler"),Mc=Symbol.for("react.provider"),Dc=Symbol.for("react.context"),Rc=Symbol.for("react.forward_ref"),Oc=Symbol.for("react.suspense"),Ac=Symbol.for("react.memo"),Fc=Symbol.for("react.lazy"),na=Symbol.iterator;function Uc(e){return e===null||typeof e!="object"?null:(e=na&&e[na]||e["@@iterator"],typeof e=="function"?e:null)}var hs={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},gs=Object.assign,vs={};function hn(e,t,n){this.props=e,this.context=t,this.refs=vs,this.updater=n||hs}hn.prototype.isReactComponent={};hn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};hn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ys(){}ys.prototype=hn.prototype;function Ji(e,t,n){this.props=e,this.context=t,this.refs=vs,this.updater=n||hs}var eo=Ji.prototype=new ys;eo.constructor=Ji;gs(eo,hn.prototype);eo.isPureReactComponent=!0;var ra=Array.isArray,xs=Object.prototype.hasOwnProperty,to={current:null},ws={key:!0,ref:!0,__self:!0,__source:!0};function ks(e,t,n){var r,l={},i=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(i=""+t.key),t)xs.call(t,r)&&!ws.hasOwnProperty(r)&&(l[r]=t[r]);var a=arguments.length-2;if(a===1)l.children=n;else if(1<a){for(var s=Array(a),c=0;c<a;c++)s[c]=arguments[c+2];l.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)l[r]===void 0&&(l[r]=a[r]);return{$$typeof:ir,type:e,key:i,ref:o,props:l,_owner:to.current}}function $c(e,t){return{$$typeof:ir,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function no(e){return typeof e=="object"&&e!==null&&e.$$typeof===ir}function Bc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var la=/\/+/g;function bl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Bc(""+e.key):t.toString(36)}function Pr(e,t,n,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case ir:case Pc:o=!0}}if(o)return o=e,l=l(o),e=r===""?"."+bl(o,0):r,ra(l)?(n="",e!=null&&(n=e.replace(la,"$&/")+"/"),Pr(l,t,n,"",function(c){return c})):l!=null&&(no(l)&&(l=$c(l,n+(!l.key||o&&o.key===l.key?"":(""+l.key).replace(la,"$&/")+"/")+e)),t.push(l)),1;if(o=0,r=r===""?".":r+":",ra(e))for(var a=0;a<e.length;a++){i=e[a];var s=r+bl(i,a);o+=Pr(i,t,n,s,l)}else if(s=Uc(e),typeof s=="function")for(e=s.call(e),a=0;!(i=e.next()).done;)i=i.value,s=r+bl(i,a++),o+=Pr(i,t,n,s,l);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function fr(e,t,n){if(e==null)return e;var r=[],l=0;return Pr(e,r,"","",function(i){return t.call(n,i,l++)}),r}function Vc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ce={current:null},br={transition:null},Hc={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:br,ReactCurrentOwner:to};function Ss(){throw Error("act(...) is not supported in production builds of React.")}b.Children={map:fr,forEach:function(e,t,n){fr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return fr(e,function(){t++}),t},toArray:function(e){return fr(e,function(t){return t})||[]},only:function(e){if(!no(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};b.Component=hn;b.Fragment=bc;b.Profiler=Ic;b.PureComponent=Ji;b.StrictMode=Lc;b.Suspense=Oc;b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hc;b.act=Ss;b.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=gs({},e.props),l=e.key,i=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,o=to.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)xs.call(t,s)&&!ws.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var c=0;c<s;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:ir,type:e.type,key:l,ref:i,props:r,_owner:o}};b.createContext=function(e){return e={$$typeof:Dc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Mc,_context:e},e.Consumer=e};b.createElement=ks;b.createFactory=function(e){var t=ks.bind(null,e);return t.type=e,t};b.createRef=function(){return{current:null}};b.forwardRef=function(e){return{$$typeof:Rc,render:e}};b.isValidElement=no;b.lazy=function(e){return{$$typeof:Fc,_payload:{_status:-1,_result:e},_init:Vc}};b.memo=function(e,t){return{$$typeof:Ac,type:e,compare:t===void 0?null:t}};b.startTransition=function(e){var t=br.transition;br.transition={};try{e()}finally{br.transition=t}};b.unstable_act=Ss;b.useCallback=function(e,t){return ce.current.useCallback(e,t)};b.useContext=function(e){return ce.current.useContext(e)};b.useDebugValue=function(){};b.useDeferredValue=function(e){return ce.current.useDeferredValue(e)};b.useEffect=function(e,t){return ce.current.useEffect(e,t)};b.useId=function(){return ce.current.useId()};b.useImperativeHandle=function(e,t,n){return ce.current.useImperativeHandle(e,t,n)};b.useInsertionEffect=function(e,t){return ce.current.useInsertionEffect(e,t)};b.useLayoutEffect=function(e,t){return ce.current.useLayoutEffect(e,t)};b.useMemo=function(e,t){return ce.current.useMemo(e,t)};b.useReducer=function(e,t,n){return ce.current.useReducer(e,t,n)};b.useRef=function(e){return ce.current.useRef(e)};b.useState=function(e){return ce.current.useState(e)};b.useSyncExternalStore=function(e,t,n){return ce.current.useSyncExternalStore(e,t,n)};b.useTransition=function(){return ce.current.useTransition()};b.version="18.3.1";ms.exports=b;var D=ms.exports;const Wc=Tc(D);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qc=D,Kc=Symbol.for("react.element"),Gc=Symbol.for("react.fragment"),Yc=Object.prototype.hasOwnProperty,Xc=Qc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Zc={key:!0,ref:!0,__self:!0,__source:!0};function Ns(e,t,n){var r,l={},i=null,o=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Yc.call(t,r)&&!Zc.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:Kc,type:e,key:i,ref:o,props:l,_owner:Xc.current}}ml.Fragment=Gc;ml.jsx=Ns;ml.jsxs=Ns;ps.exports=ml;var u=ps.exports,ii={},js={exports:{}},Ne={},zs={exports:{}},Es={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(S,_){var T=S.length;S.push(_);e:for(;0<T;){var M=T-1>>>1,W=S[M];if(0<l(W,_))S[M]=_,S[T]=W,T=M;else break e}}function n(S){return S.length===0?null:S[0]}function r(S){if(S.length===0)return null;var _=S[0],T=S.pop();if(T!==_){S[0]=T;e:for(var M=0,W=S.length,Ee=W>>>1;M<Ee;){var fe=2*(M+1)-1,$t=S[fe],Z=fe+1,Et=S[Z];if(0>l($t,T))Z<W&&0>l(Et,$t)?(S[M]=Et,S[Z]=T,M=Z):(S[M]=$t,S[fe]=T,M=fe);else if(Z<W&&0>l(Et,T))S[M]=Et,S[Z]=T,M=Z;else break e}}return _}function l(S,_){var T=S.sortIndex-_.sortIndex;return T!==0?T:S.id-_.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var s=[],c=[],g=1,h=null,m=3,v=!1,w=!1,k=!1,L=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(S){for(var _=n(c);_!==null;){if(_.callback===null)r(c);else if(_.startTime<=S)r(c),_.sortIndex=_.expirationTime,t(s,_);else break;_=n(c)}}function y(S){if(k=!1,p(S),!w)if(n(s)!==null)w=!0,ze(N);else{var _=n(c);_!==null&&Me(y,_.startTime-S)}}function N(S,_){w=!1,k&&(k=!1,f(C),C=-1),v=!0;var T=m;try{for(p(_),h=n(s);h!==null&&(!(h.expirationTime>_)||S&&!ee());){var M=h.callback;if(typeof M=="function"){h.callback=null,m=h.priorityLevel;var W=M(h.expirationTime<=_);_=e.unstable_now(),typeof W=="function"?h.callback=W:h===n(s)&&r(s),p(_)}else r(s);h=n(s)}if(h!==null)var Ee=!0;else{var fe=n(c);fe!==null&&Me(y,fe.startTime-_),Ee=!1}return Ee}finally{h=null,m=T,v=!1}}var z=!1,E=null,C=-1,$=5,P=-1;function ee(){return!(e.unstable_now()-P<$)}function Ie(){if(E!==null){var S=e.unstable_now();P=S;var _=!0;try{_=E(!0,S)}finally{_?Ve():(z=!1,E=null)}}else z=!1}var Ve;if(typeof d=="function")Ve=function(){d(Ie)};else if(typeof MessageChannel<"u"){var xn=new MessageChannel,cr=xn.port2;xn.port1.onmessage=Ie,Ve=function(){cr.postMessage(null)}}else Ve=function(){L(Ie,0)};function ze(S){E=S,z||(z=!0,Ve())}function Me(S,_){C=L(function(){S(e.unstable_now())},_)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(S){S.callback=null},e.unstable_continueExecution=function(){w||v||(w=!0,ze(N))},e.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<S?Math.floor(1e3/S):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(S){switch(m){case 1:case 2:case 3:var _=3;break;default:_=m}var T=m;m=_;try{return S()}finally{m=T}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(S,_){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var T=m;m=S;try{return _()}finally{m=T}},e.unstable_scheduleCallback=function(S,_,T){var M=e.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?M+T:M):T=M,S){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=T+W,S={id:g++,callback:_,priorityLevel:S,startTime:T,expirationTime:W,sortIndex:-1},T>M?(S.sortIndex=T,t(c,S),n(s)===null&&S===n(c)&&(k?(f(C),C=-1):k=!0,Me(y,T-M))):(S.sortIndex=W,t(s,S),w||v||(w=!0,ze(N))),S},e.unstable_shouldYield=ee,e.unstable_wrapCallback=function(S){var _=m;return function(){var T=m;m=_;try{return S.apply(this,arguments)}finally{m=T}}}})(Es);zs.exports=Es;var qc=zs.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jc=D,Se=qc;function x(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Cs=new Set,Bn={};function Ft(e,t){sn(e,t),sn(e+"Capture",t)}function sn(e,t){for(Bn[e]=t,e=0;e<t.length;e++)Cs.add(t[e])}var tt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),oi=Object.prototype.hasOwnProperty,ed=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ia={},oa={};function td(e){return oi.call(oa,e)?!0:oi.call(ia,e)?!1:ed.test(e)?oa[e]=!0:(ia[e]=!0,!1)}function nd(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function rd(e,t,n,r){if(t===null||typeof t>"u"||nd(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function de(e,t,n,r,l,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var re={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){re[e]=new de(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];re[t]=new de(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){re[e]=new de(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){re[e]=new de(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){re[e]=new de(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){re[e]=new de(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){re[e]=new de(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){re[e]=new de(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){re[e]=new de(e,5,!1,e.toLowerCase(),null,!1,!1)});var ro=/[\-:]([a-z])/g;function lo(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ro,lo);re[t]=new de(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ro,lo);re[t]=new de(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ro,lo);re[t]=new de(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){re[e]=new de(e,1,!1,e.toLowerCase(),null,!1,!1)});re.xlinkHref=new de("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){re[e]=new de(e,1,!1,e.toLowerCase(),null,!0,!0)});function io(e,t,n,r){var l=re.hasOwnProperty(t)?re[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(rd(t,n,l,r)&&(n=null),r||l===null?td(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var it=Jc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,pr=Symbol.for("react.element"),Vt=Symbol.for("react.portal"),Ht=Symbol.for("react.fragment"),oo=Symbol.for("react.strict_mode"),ai=Symbol.for("react.profiler"),_s=Symbol.for("react.provider"),Ts=Symbol.for("react.context"),ao=Symbol.for("react.forward_ref"),si=Symbol.for("react.suspense"),ui=Symbol.for("react.suspense_list"),so=Symbol.for("react.memo"),at=Symbol.for("react.lazy"),Ps=Symbol.for("react.offscreen"),aa=Symbol.iterator;function wn(e){return e===null||typeof e!="object"?null:(e=aa&&e[aa]||e["@@iterator"],typeof e=="function"?e:null)}var H=Object.assign,Ll;function _n(e){if(Ll===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ll=t&&t[1]||""}return`
`+Ll+e}var Il=!1;function Ml(e,t){if(!e||Il)return"";Il=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var l=c.stack.split(`
`),i=r.stack.split(`
`),o=l.length-1,a=i.length-1;1<=o&&0<=a&&l[o]!==i[a];)a--;for(;1<=o&&0<=a;o--,a--)if(l[o]!==i[a]){if(o!==1||a!==1)do if(o--,a--,0>a||l[o]!==i[a]){var s=`
`+l[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=o&&0<=a);break}}}finally{Il=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?_n(e):""}function ld(e){switch(e.tag){case 5:return _n(e.type);case 16:return _n("Lazy");case 13:return _n("Suspense");case 19:return _n("SuspenseList");case 0:case 2:case 15:return e=Ml(e.type,!1),e;case 11:return e=Ml(e.type.render,!1),e;case 1:return e=Ml(e.type,!0),e;default:return""}}function ci(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ht:return"Fragment";case Vt:return"Portal";case ai:return"Profiler";case oo:return"StrictMode";case si:return"Suspense";case ui:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ts:return(e.displayName||"Context")+".Consumer";case _s:return(e._context.displayName||"Context")+".Provider";case ao:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case so:return t=e.displayName||null,t!==null?t:ci(e.type)||"Memo";case at:t=e._payload,e=e._init;try{return ci(e(t))}catch{}}return null}function id(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ci(t);case 8:return t===oo?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function kt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function bs(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function od(e){var t=bs(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function mr(e){e._valueTracker||(e._valueTracker=od(e))}function Ls(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=bs(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Vr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function di(e,t){var n=t.checked;return H({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function sa(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=kt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Is(e,t){t=t.checked,t!=null&&io(e,"checked",t,!1)}function fi(e,t){Is(e,t);var n=kt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?pi(e,t.type,n):t.hasOwnProperty("defaultValue")&&pi(e,t.type,kt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ua(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function pi(e,t,n){(t!=="number"||Vr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Tn=Array.isArray;function tn(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+kt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function mi(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(x(91));return H({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ca(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(x(92));if(Tn(n)){if(1<n.length)throw Error(x(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:kt(n)}}function Ms(e,t){var n=kt(t.value),r=kt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function da(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ds(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function hi(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ds(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var hr,Rs=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(hr=hr||document.createElement("div"),hr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=hr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Vn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ln={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ad=["Webkit","ms","Moz","O"];Object.keys(Ln).forEach(function(e){ad.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ln[t]=Ln[e]})});function Os(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ln.hasOwnProperty(e)&&Ln[e]?(""+t).trim():t+"px"}function As(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=Os(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var sd=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function gi(e,t){if(t){if(sd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(x(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(x(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(x(61))}if(t.style!=null&&typeof t.style!="object")throw Error(x(62))}}function vi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var yi=null;function uo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var xi=null,nn=null,rn=null;function fa(e){if(e=sr(e)){if(typeof xi!="function")throw Error(x(280));var t=e.stateNode;t&&(t=xl(t),xi(e.stateNode,e.type,t))}}function Fs(e){nn?rn?rn.push(e):rn=[e]:nn=e}function Us(){if(nn){var e=nn,t=rn;if(rn=nn=null,fa(e),t)for(e=0;e<t.length;e++)fa(t[e])}}function $s(e,t){return e(t)}function Bs(){}var Dl=!1;function Vs(e,t,n){if(Dl)return e(t,n);Dl=!0;try{return $s(e,t,n)}finally{Dl=!1,(nn!==null||rn!==null)&&(Bs(),Us())}}function Hn(e,t){var n=e.stateNode;if(n===null)return null;var r=xl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(x(231,t,typeof n));return n}var wi=!1;if(tt)try{var kn={};Object.defineProperty(kn,"passive",{get:function(){wi=!0}}),window.addEventListener("test",kn,kn),window.removeEventListener("test",kn,kn)}catch{wi=!1}function ud(e,t,n,r,l,i,o,a,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(g){this.onError(g)}}var In=!1,Hr=null,Wr=!1,ki=null,cd={onError:function(e){In=!0,Hr=e}};function dd(e,t,n,r,l,i,o,a,s){In=!1,Hr=null,ud.apply(cd,arguments)}function fd(e,t,n,r,l,i,o,a,s){if(dd.apply(this,arguments),In){if(In){var c=Hr;In=!1,Hr=null}else throw Error(x(198));Wr||(Wr=!0,ki=c)}}function Ut(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Hs(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function pa(e){if(Ut(e)!==e)throw Error(x(188))}function pd(e){var t=e.alternate;if(!t){if(t=Ut(e),t===null)throw Error(x(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return pa(l),e;if(i===r)return pa(l),t;i=i.sibling}throw Error(x(188))}if(n.return!==r.return)n=l,r=i;else{for(var o=!1,a=l.child;a;){if(a===n){o=!0,n=l,r=i;break}if(a===r){o=!0,r=l,n=i;break}a=a.sibling}if(!o){for(a=i.child;a;){if(a===n){o=!0,n=i,r=l;break}if(a===r){o=!0,r=i,n=l;break}a=a.sibling}if(!o)throw Error(x(189))}}if(n.alternate!==r)throw Error(x(190))}if(n.tag!==3)throw Error(x(188));return n.stateNode.current===n?e:t}function Ws(e){return e=pd(e),e!==null?Qs(e):null}function Qs(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Qs(e);if(t!==null)return t;e=e.sibling}return null}var Ks=Se.unstable_scheduleCallback,ma=Se.unstable_cancelCallback,md=Se.unstable_shouldYield,hd=Se.unstable_requestPaint,K=Se.unstable_now,gd=Se.unstable_getCurrentPriorityLevel,co=Se.unstable_ImmediatePriority,Gs=Se.unstable_UserBlockingPriority,Qr=Se.unstable_NormalPriority,vd=Se.unstable_LowPriority,Ys=Se.unstable_IdlePriority,hl=null,Ke=null;function yd(e){if(Ke&&typeof Ke.onCommitFiberRoot=="function")try{Ke.onCommitFiberRoot(hl,e,void 0,(e.current.flags&128)===128)}catch{}}var Ue=Math.clz32?Math.clz32:kd,xd=Math.log,wd=Math.LN2;function kd(e){return e>>>=0,e===0?32:31-(xd(e)/wd|0)|0}var gr=64,vr=4194304;function Pn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Kr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~l;a!==0?r=Pn(a):(i&=o,i!==0&&(r=Pn(i)))}else o=n&~l,o!==0?r=Pn(o):i!==0&&(r=Pn(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ue(t),l=1<<n,r|=e[n],t&=~l;return r}function Sd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Nd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-Ue(i),a=1<<o,s=l[o];s===-1?(!(a&n)||a&r)&&(l[o]=Sd(a,t)):s<=t&&(e.expiredLanes|=a),i&=~a}}function Si(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Xs(){var e=gr;return gr<<=1,!(gr&4194240)&&(gr=64),e}function Rl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function or(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ue(t),e[t]=n}function jd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Ue(n),i=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~i}}function fo(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ue(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var R=0;function Zs(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var qs,po,Js,eu,tu,Ni=!1,yr=[],pt=null,mt=null,ht=null,Wn=new Map,Qn=new Map,ut=[],zd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ha(e,t){switch(e){case"focusin":case"focusout":pt=null;break;case"dragenter":case"dragleave":mt=null;break;case"mouseover":case"mouseout":ht=null;break;case"pointerover":case"pointerout":Wn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qn.delete(t.pointerId)}}function Sn(e,t,n,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=sr(t),t!==null&&po(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Ed(e,t,n,r,l){switch(t){case"focusin":return pt=Sn(pt,e,t,n,r,l),!0;case"dragenter":return mt=Sn(mt,e,t,n,r,l),!0;case"mouseover":return ht=Sn(ht,e,t,n,r,l),!0;case"pointerover":var i=l.pointerId;return Wn.set(i,Sn(Wn.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,Qn.set(i,Sn(Qn.get(i)||null,e,t,n,r,l)),!0}return!1}function nu(e){var t=Tt(e.target);if(t!==null){var n=Ut(t);if(n!==null){if(t=n.tag,t===13){if(t=Hs(n),t!==null){e.blockedOn=t,tu(e.priority,function(){Js(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Lr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ji(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);yi=r,n.target.dispatchEvent(r),yi=null}else return t=sr(n),t!==null&&po(t),e.blockedOn=n,!1;t.shift()}return!0}function ga(e,t,n){Lr(e)&&n.delete(t)}function Cd(){Ni=!1,pt!==null&&Lr(pt)&&(pt=null),mt!==null&&Lr(mt)&&(mt=null),ht!==null&&Lr(ht)&&(ht=null),Wn.forEach(ga),Qn.forEach(ga)}function Nn(e,t){e.blockedOn===t&&(e.blockedOn=null,Ni||(Ni=!0,Se.unstable_scheduleCallback(Se.unstable_NormalPriority,Cd)))}function Kn(e){function t(l){return Nn(l,e)}if(0<yr.length){Nn(yr[0],e);for(var n=1;n<yr.length;n++){var r=yr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(pt!==null&&Nn(pt,e),mt!==null&&Nn(mt,e),ht!==null&&Nn(ht,e),Wn.forEach(t),Qn.forEach(t),n=0;n<ut.length;n++)r=ut[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<ut.length&&(n=ut[0],n.blockedOn===null);)nu(n),n.blockedOn===null&&ut.shift()}var ln=it.ReactCurrentBatchConfig,Gr=!0;function _d(e,t,n,r){var l=R,i=ln.transition;ln.transition=null;try{R=1,mo(e,t,n,r)}finally{R=l,ln.transition=i}}function Td(e,t,n,r){var l=R,i=ln.transition;ln.transition=null;try{R=4,mo(e,t,n,r)}finally{R=l,ln.transition=i}}function mo(e,t,n,r){if(Gr){var l=ji(e,t,n,r);if(l===null)Ql(e,t,r,Yr,n),ha(e,r);else if(Ed(l,e,t,n,r))r.stopPropagation();else if(ha(e,r),t&4&&-1<zd.indexOf(e)){for(;l!==null;){var i=sr(l);if(i!==null&&qs(i),i=ji(e,t,n,r),i===null&&Ql(e,t,r,Yr,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else Ql(e,t,r,null,n)}}var Yr=null;function ji(e,t,n,r){if(Yr=null,e=uo(r),e=Tt(e),e!==null)if(t=Ut(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Hs(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Yr=e,null}function ru(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(gd()){case co:return 1;case Gs:return 4;case Qr:case vd:return 16;case Ys:return 536870912;default:return 16}default:return 16}}var dt=null,ho=null,Ir=null;function lu(){if(Ir)return Ir;var e,t=ho,n=t.length,r,l="value"in dt?dt.value:dt.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===l[i-r];r++);return Ir=l.slice(e,1<r?1-r:void 0)}function Mr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function xr(){return!0}function va(){return!1}function je(e){function t(n,r,l,i,o){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?xr:va,this.isPropagationStopped=va,this}return H(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=xr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=xr)},persist:function(){},isPersistent:xr}),t}var gn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},go=je(gn),ar=H({},gn,{view:0,detail:0}),Pd=je(ar),Ol,Al,jn,gl=H({},ar,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==jn&&(jn&&e.type==="mousemove"?(Ol=e.screenX-jn.screenX,Al=e.screenY-jn.screenY):Al=Ol=0,jn=e),Ol)},movementY:function(e){return"movementY"in e?e.movementY:Al}}),ya=je(gl),bd=H({},gl,{dataTransfer:0}),Ld=je(bd),Id=H({},ar,{relatedTarget:0}),Fl=je(Id),Md=H({},gn,{animationName:0,elapsedTime:0,pseudoElement:0}),Dd=je(Md),Rd=H({},gn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Od=je(Rd),Ad=H({},gn,{data:0}),xa=je(Ad),Fd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ud={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$d={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Bd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=$d[e])?!!t[e]:!1}function vo(){return Bd}var Vd=H({},ar,{key:function(e){if(e.key){var t=Fd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Mr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ud[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vo,charCode:function(e){return e.type==="keypress"?Mr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Mr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Hd=je(Vd),Wd=H({},gl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wa=je(Wd),Qd=H({},ar,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vo}),Kd=je(Qd),Gd=H({},gn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Yd=je(Gd),Xd=H({},gl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Zd=je(Xd),qd=[9,13,27,32],yo=tt&&"CompositionEvent"in window,Mn=null;tt&&"documentMode"in document&&(Mn=document.documentMode);var Jd=tt&&"TextEvent"in window&&!Mn,iu=tt&&(!yo||Mn&&8<Mn&&11>=Mn),ka=" ",Sa=!1;function ou(e,t){switch(e){case"keyup":return qd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function au(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Wt=!1;function ef(e,t){switch(e){case"compositionend":return au(t);case"keypress":return t.which!==32?null:(Sa=!0,ka);case"textInput":return e=t.data,e===ka&&Sa?null:e;default:return null}}function tf(e,t){if(Wt)return e==="compositionend"||!yo&&ou(e,t)?(e=lu(),Ir=ho=dt=null,Wt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return iu&&t.locale!=="ko"?null:t.data;default:return null}}var nf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Na(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!nf[e.type]:t==="textarea"}function su(e,t,n,r){Fs(r),t=Xr(t,"onChange"),0<t.length&&(n=new go("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Dn=null,Gn=null;function rf(e){xu(e,0)}function vl(e){var t=Gt(e);if(Ls(t))return e}function lf(e,t){if(e==="change")return t}var uu=!1;if(tt){var Ul;if(tt){var $l="oninput"in document;if(!$l){var ja=document.createElement("div");ja.setAttribute("oninput","return;"),$l=typeof ja.oninput=="function"}Ul=$l}else Ul=!1;uu=Ul&&(!document.documentMode||9<document.documentMode)}function za(){Dn&&(Dn.detachEvent("onpropertychange",cu),Gn=Dn=null)}function cu(e){if(e.propertyName==="value"&&vl(Gn)){var t=[];su(t,Gn,e,uo(e)),Vs(rf,t)}}function of(e,t,n){e==="focusin"?(za(),Dn=t,Gn=n,Dn.attachEvent("onpropertychange",cu)):e==="focusout"&&za()}function af(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return vl(Gn)}function sf(e,t){if(e==="click")return vl(t)}function uf(e,t){if(e==="input"||e==="change")return vl(t)}function cf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Be=typeof Object.is=="function"?Object.is:cf;function Yn(e,t){if(Be(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!oi.call(t,l)||!Be(e[l],t[l]))return!1}return!0}function Ea(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ca(e,t){var n=Ea(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ea(n)}}function du(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?du(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function fu(){for(var e=window,t=Vr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Vr(e.document)}return t}function xo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function df(e){var t=fu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&du(n.ownerDocument.documentElement,n)){if(r!==null&&xo(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=Ca(n,i);var o=Ca(n,r);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var ff=tt&&"documentMode"in document&&11>=document.documentMode,Qt=null,zi=null,Rn=null,Ei=!1;function _a(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ei||Qt==null||Qt!==Vr(r)||(r=Qt,"selectionStart"in r&&xo(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Rn&&Yn(Rn,r)||(Rn=r,r=Xr(zi,"onSelect"),0<r.length&&(t=new go("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Qt)))}function wr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Kt={animationend:wr("Animation","AnimationEnd"),animationiteration:wr("Animation","AnimationIteration"),animationstart:wr("Animation","AnimationStart"),transitionend:wr("Transition","TransitionEnd")},Bl={},pu={};tt&&(pu=document.createElement("div").style,"AnimationEvent"in window||(delete Kt.animationend.animation,delete Kt.animationiteration.animation,delete Kt.animationstart.animation),"TransitionEvent"in window||delete Kt.transitionend.transition);function yl(e){if(Bl[e])return Bl[e];if(!Kt[e])return e;var t=Kt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in pu)return Bl[e]=t[n];return e}var mu=yl("animationend"),hu=yl("animationiteration"),gu=yl("animationstart"),vu=yl("transitionend"),yu=new Map,Ta="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Nt(e,t){yu.set(e,t),Ft(t,[e])}for(var Vl=0;Vl<Ta.length;Vl++){var Hl=Ta[Vl],pf=Hl.toLowerCase(),mf=Hl[0].toUpperCase()+Hl.slice(1);Nt(pf,"on"+mf)}Nt(mu,"onAnimationEnd");Nt(hu,"onAnimationIteration");Nt(gu,"onAnimationStart");Nt("dblclick","onDoubleClick");Nt("focusin","onFocus");Nt("focusout","onBlur");Nt(vu,"onTransitionEnd");sn("onMouseEnter",["mouseout","mouseover"]);sn("onMouseLeave",["mouseout","mouseover"]);sn("onPointerEnter",["pointerout","pointerover"]);sn("onPointerLeave",["pointerout","pointerover"]);Ft("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ft("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ft("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ft("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ft("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ft("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hf=new Set("cancel close invalid load scroll toggle".split(" ").concat(bn));function Pa(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,fd(r,t,void 0,e),e.currentTarget=null}function xu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],s=a.instance,c=a.currentTarget;if(a=a.listener,s!==i&&l.isPropagationStopped())break e;Pa(l,a,c),i=s}else for(o=0;o<r.length;o++){if(a=r[o],s=a.instance,c=a.currentTarget,a=a.listener,s!==i&&l.isPropagationStopped())break e;Pa(l,a,c),i=s}}}if(Wr)throw e=ki,Wr=!1,ki=null,e}function A(e,t){var n=t[bi];n===void 0&&(n=t[bi]=new Set);var r=e+"__bubble";n.has(r)||(wu(t,e,2,!1),n.add(r))}function Wl(e,t,n){var r=0;t&&(r|=4),wu(n,e,r,t)}var kr="_reactListening"+Math.random().toString(36).slice(2);function Xn(e){if(!e[kr]){e[kr]=!0,Cs.forEach(function(n){n!=="selectionchange"&&(hf.has(n)||Wl(n,!1,e),Wl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[kr]||(t[kr]=!0,Wl("selectionchange",!1,t))}}function wu(e,t,n,r){switch(ru(t)){case 1:var l=_d;break;case 4:l=Td;break;default:l=mo}n=l.bind(null,t,n,e),l=void 0,!wi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Ql(e,t,n,r,l){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===l||a.nodeType===8&&a.parentNode===l)break;if(o===4)for(o=r.return;o!==null;){var s=o.tag;if((s===3||s===4)&&(s=o.stateNode.containerInfo,s===l||s.nodeType===8&&s.parentNode===l))return;o=o.return}for(;a!==null;){if(o=Tt(a),o===null)return;if(s=o.tag,s===5||s===6){r=i=o;continue e}a=a.parentNode}}r=r.return}Vs(function(){var c=i,g=uo(n),h=[];e:{var m=yu.get(e);if(m!==void 0){var v=go,w=e;switch(e){case"keypress":if(Mr(n)===0)break e;case"keydown":case"keyup":v=Hd;break;case"focusin":w="focus",v=Fl;break;case"focusout":w="blur",v=Fl;break;case"beforeblur":case"afterblur":v=Fl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=ya;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Ld;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Kd;break;case mu:case hu:case gu:v=Dd;break;case vu:v=Yd;break;case"scroll":v=Pd;break;case"wheel":v=Zd;break;case"copy":case"cut":case"paste":v=Od;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=wa}var k=(t&4)!==0,L=!k&&e==="scroll",f=k?m!==null?m+"Capture":null:m;k=[];for(var d=c,p;d!==null;){p=d;var y=p.stateNode;if(p.tag===5&&y!==null&&(p=y,f!==null&&(y=Hn(d,f),y!=null&&k.push(Zn(d,y,p)))),L)break;d=d.return}0<k.length&&(m=new v(m,w,null,n,g),h.push({event:m,listeners:k}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",m&&n!==yi&&(w=n.relatedTarget||n.fromElement)&&(Tt(w)||w[nt]))break e;if((v||m)&&(m=g.window===g?g:(m=g.ownerDocument)?m.defaultView||m.parentWindow:window,v?(w=n.relatedTarget||n.toElement,v=c,w=w?Tt(w):null,w!==null&&(L=Ut(w),w!==L||w.tag!==5&&w.tag!==6)&&(w=null)):(v=null,w=c),v!==w)){if(k=ya,y="onMouseLeave",f="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(k=wa,y="onPointerLeave",f="onPointerEnter",d="pointer"),L=v==null?m:Gt(v),p=w==null?m:Gt(w),m=new k(y,d+"leave",v,n,g),m.target=L,m.relatedTarget=p,y=null,Tt(g)===c&&(k=new k(f,d+"enter",w,n,g),k.target=p,k.relatedTarget=L,y=k),L=y,v&&w)t:{for(k=v,f=w,d=0,p=k;p;p=Bt(p))d++;for(p=0,y=f;y;y=Bt(y))p++;for(;0<d-p;)k=Bt(k),d--;for(;0<p-d;)f=Bt(f),p--;for(;d--;){if(k===f||f!==null&&k===f.alternate)break t;k=Bt(k),f=Bt(f)}k=null}else k=null;v!==null&&ba(h,m,v,k,!1),w!==null&&L!==null&&ba(h,L,w,k,!0)}}e:{if(m=c?Gt(c):window,v=m.nodeName&&m.nodeName.toLowerCase(),v==="select"||v==="input"&&m.type==="file")var N=lf;else if(Na(m))if(uu)N=uf;else{N=af;var z=of}else(v=m.nodeName)&&v.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(N=sf);if(N&&(N=N(e,c))){su(h,N,n,g);break e}z&&z(e,m,c),e==="focusout"&&(z=m._wrapperState)&&z.controlled&&m.type==="number"&&pi(m,"number",m.value)}switch(z=c?Gt(c):window,e){case"focusin":(Na(z)||z.contentEditable==="true")&&(Qt=z,zi=c,Rn=null);break;case"focusout":Rn=zi=Qt=null;break;case"mousedown":Ei=!0;break;case"contextmenu":case"mouseup":case"dragend":Ei=!1,_a(h,n,g);break;case"selectionchange":if(ff)break;case"keydown":case"keyup":_a(h,n,g)}var E;if(yo)e:{switch(e){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else Wt?ou(e,n)&&(C="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(iu&&n.locale!=="ko"&&(Wt||C!=="onCompositionStart"?C==="onCompositionEnd"&&Wt&&(E=lu()):(dt=g,ho="value"in dt?dt.value:dt.textContent,Wt=!0)),z=Xr(c,C),0<z.length&&(C=new xa(C,e,null,n,g),h.push({event:C,listeners:z}),E?C.data=E:(E=au(n),E!==null&&(C.data=E)))),(E=Jd?ef(e,n):tf(e,n))&&(c=Xr(c,"onBeforeInput"),0<c.length&&(g=new xa("onBeforeInput","beforeinput",null,n,g),h.push({event:g,listeners:c}),g.data=E))}xu(h,t)})}function Zn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Xr(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=Hn(e,n),i!=null&&r.unshift(Zn(e,i,l)),i=Hn(e,t),i!=null&&r.push(Zn(e,i,l))),e=e.return}return r}function Bt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ba(e,t,n,r,l){for(var i=t._reactName,o=[];n!==null&&n!==r;){var a=n,s=a.alternate,c=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&c!==null&&(a=c,l?(s=Hn(n,i),s!=null&&o.unshift(Zn(n,s,a))):l||(s=Hn(n,i),s!=null&&o.push(Zn(n,s,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var gf=/\r\n?/g,vf=/\u0000|\uFFFD/g;function La(e){return(typeof e=="string"?e:""+e).replace(gf,`
`).replace(vf,"")}function Sr(e,t,n){if(t=La(t),La(e)!==t&&n)throw Error(x(425))}function Zr(){}var Ci=null,_i=null;function Ti(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Pi=typeof setTimeout=="function"?setTimeout:void 0,yf=typeof clearTimeout=="function"?clearTimeout:void 0,Ia=typeof Promise=="function"?Promise:void 0,xf=typeof queueMicrotask=="function"?queueMicrotask:typeof Ia<"u"?function(e){return Ia.resolve(null).then(e).catch(wf)}:Pi;function wf(e){setTimeout(function(){throw e})}function Kl(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Kn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Kn(t)}function gt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ma(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var vn=Math.random().toString(36).slice(2),Qe="__reactFiber$"+vn,qn="__reactProps$"+vn,nt="__reactContainer$"+vn,bi="__reactEvents$"+vn,kf="__reactListeners$"+vn,Sf="__reactHandles$"+vn;function Tt(e){var t=e[Qe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[nt]||n[Qe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ma(e);e!==null;){if(n=e[Qe])return n;e=Ma(e)}return t}e=n,n=e.parentNode}return null}function sr(e){return e=e[Qe]||e[nt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Gt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(x(33))}function xl(e){return e[qn]||null}var Li=[],Yt=-1;function jt(e){return{current:e}}function F(e){0>Yt||(e.current=Li[Yt],Li[Yt]=null,Yt--)}function O(e,t){Yt++,Li[Yt]=e.current,e.current=t}var St={},ae=jt(St),he=jt(!1),Mt=St;function un(e,t){var n=e.type.contextTypes;if(!n)return St;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function ge(e){return e=e.childContextTypes,e!=null}function qr(){F(he),F(ae)}function Da(e,t,n){if(ae.current!==St)throw Error(x(168));O(ae,t),O(he,n)}function ku(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(x(108,id(e)||"Unknown",l));return H({},n,r)}function Jr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||St,Mt=ae.current,O(ae,e),O(he,he.current),!0}function Ra(e,t,n){var r=e.stateNode;if(!r)throw Error(x(169));n?(e=ku(e,t,Mt),r.__reactInternalMemoizedMergedChildContext=e,F(he),F(ae),O(ae,e)):F(he),O(he,n)}var Ze=null,wl=!1,Gl=!1;function Su(e){Ze===null?Ze=[e]:Ze.push(e)}function Nf(e){wl=!0,Su(e)}function zt(){if(!Gl&&Ze!==null){Gl=!0;var e=0,t=R;try{var n=Ze;for(R=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ze=null,wl=!1}catch(l){throw Ze!==null&&(Ze=Ze.slice(e+1)),Ks(co,zt),l}finally{R=t,Gl=!1}}return null}var Xt=[],Zt=0,el=null,tl=0,Ce=[],_e=0,Dt=null,qe=1,Je="";function Ct(e,t){Xt[Zt++]=tl,Xt[Zt++]=el,el=e,tl=t}function Nu(e,t,n){Ce[_e++]=qe,Ce[_e++]=Je,Ce[_e++]=Dt,Dt=e;var r=qe;e=Je;var l=32-Ue(r)-1;r&=~(1<<l),n+=1;var i=32-Ue(t)+l;if(30<i){var o=l-l%5;i=(r&(1<<o)-1).toString(32),r>>=o,l-=o,qe=1<<32-Ue(t)+l|n<<l|r,Je=i+e}else qe=1<<i|n<<l|r,Je=e}function wo(e){e.return!==null&&(Ct(e,1),Nu(e,1,0))}function ko(e){for(;e===el;)el=Xt[--Zt],Xt[Zt]=null,tl=Xt[--Zt],Xt[Zt]=null;for(;e===Dt;)Dt=Ce[--_e],Ce[_e]=null,Je=Ce[--_e],Ce[_e]=null,qe=Ce[--_e],Ce[_e]=null}var ke=null,we=null,U=!1,Ae=null;function ju(e,t){var n=Te(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Oa(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ke=e,we=gt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ke=e,we=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Dt!==null?{id:qe,overflow:Je}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Te(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ke=e,we=null,!0):!1;default:return!1}}function Ii(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Mi(e){if(U){var t=we;if(t){var n=t;if(!Oa(e,t)){if(Ii(e))throw Error(x(418));t=gt(n.nextSibling);var r=ke;t&&Oa(e,t)?ju(r,n):(e.flags=e.flags&-4097|2,U=!1,ke=e)}}else{if(Ii(e))throw Error(x(418));e.flags=e.flags&-4097|2,U=!1,ke=e}}}function Aa(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ke=e}function Nr(e){if(e!==ke)return!1;if(!U)return Aa(e),U=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ti(e.type,e.memoizedProps)),t&&(t=we)){if(Ii(e))throw zu(),Error(x(418));for(;t;)ju(e,t),t=gt(t.nextSibling)}if(Aa(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(x(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){we=gt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}we=null}}else we=ke?gt(e.stateNode.nextSibling):null;return!0}function zu(){for(var e=we;e;)e=gt(e.nextSibling)}function cn(){we=ke=null,U=!1}function So(e){Ae===null?Ae=[e]:Ae.push(e)}var jf=it.ReactCurrentBatchConfig;function zn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(x(309));var r=n.stateNode}if(!r)throw Error(x(147,e));var l=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var a=l.refs;o===null?delete a[i]:a[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(x(284));if(!n._owner)throw Error(x(290,e))}return e}function jr(e,t){throw e=Object.prototype.toString.call(t),Error(x(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Fa(e){var t=e._init;return t(e._payload)}function Eu(e){function t(f,d){if(e){var p=f.deletions;p===null?(f.deletions=[d],f.flags|=16):p.push(d)}}function n(f,d){if(!e)return null;for(;d!==null;)t(f,d),d=d.sibling;return null}function r(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function l(f,d){return f=wt(f,d),f.index=0,f.sibling=null,f}function i(f,d,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<d?(f.flags|=2,d):p):(f.flags|=2,d)):(f.flags|=1048576,d)}function o(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,d,p,y){return d===null||d.tag!==6?(d=ti(p,f.mode,y),d.return=f,d):(d=l(d,p),d.return=f,d)}function s(f,d,p,y){var N=p.type;return N===Ht?g(f,d,p.props.children,y,p.key):d!==null&&(d.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===at&&Fa(N)===d.type)?(y=l(d,p.props),y.ref=zn(f,d,p),y.return=f,y):(y=$r(p.type,p.key,p.props,null,f.mode,y),y.ref=zn(f,d,p),y.return=f,y)}function c(f,d,p,y){return d===null||d.tag!==4||d.stateNode.containerInfo!==p.containerInfo||d.stateNode.implementation!==p.implementation?(d=ni(p,f.mode,y),d.return=f,d):(d=l(d,p.children||[]),d.return=f,d)}function g(f,d,p,y,N){return d===null||d.tag!==7?(d=It(p,f.mode,y,N),d.return=f,d):(d=l(d,p),d.return=f,d)}function h(f,d,p){if(typeof d=="string"&&d!==""||typeof d=="number")return d=ti(""+d,f.mode,p),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case pr:return p=$r(d.type,d.key,d.props,null,f.mode,p),p.ref=zn(f,null,d),p.return=f,p;case Vt:return d=ni(d,f.mode,p),d.return=f,d;case at:var y=d._init;return h(f,y(d._payload),p)}if(Tn(d)||wn(d))return d=It(d,f.mode,p,null),d.return=f,d;jr(f,d)}return null}function m(f,d,p,y){var N=d!==null?d.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return N!==null?null:a(f,d,""+p,y);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case pr:return p.key===N?s(f,d,p,y):null;case Vt:return p.key===N?c(f,d,p,y):null;case at:return N=p._init,m(f,d,N(p._payload),y)}if(Tn(p)||wn(p))return N!==null?null:g(f,d,p,y,null);jr(f,p)}return null}function v(f,d,p,y,N){if(typeof y=="string"&&y!==""||typeof y=="number")return f=f.get(p)||null,a(d,f,""+y,N);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case pr:return f=f.get(y.key===null?p:y.key)||null,s(d,f,y,N);case Vt:return f=f.get(y.key===null?p:y.key)||null,c(d,f,y,N);case at:var z=y._init;return v(f,d,p,z(y._payload),N)}if(Tn(y)||wn(y))return f=f.get(p)||null,g(d,f,y,N,null);jr(d,y)}return null}function w(f,d,p,y){for(var N=null,z=null,E=d,C=d=0,$=null;E!==null&&C<p.length;C++){E.index>C?($=E,E=null):$=E.sibling;var P=m(f,E,p[C],y);if(P===null){E===null&&(E=$);break}e&&E&&P.alternate===null&&t(f,E),d=i(P,d,C),z===null?N=P:z.sibling=P,z=P,E=$}if(C===p.length)return n(f,E),U&&Ct(f,C),N;if(E===null){for(;C<p.length;C++)E=h(f,p[C],y),E!==null&&(d=i(E,d,C),z===null?N=E:z.sibling=E,z=E);return U&&Ct(f,C),N}for(E=r(f,E);C<p.length;C++)$=v(E,f,C,p[C],y),$!==null&&(e&&$.alternate!==null&&E.delete($.key===null?C:$.key),d=i($,d,C),z===null?N=$:z.sibling=$,z=$);return e&&E.forEach(function(ee){return t(f,ee)}),U&&Ct(f,C),N}function k(f,d,p,y){var N=wn(p);if(typeof N!="function")throw Error(x(150));if(p=N.call(p),p==null)throw Error(x(151));for(var z=N=null,E=d,C=d=0,$=null,P=p.next();E!==null&&!P.done;C++,P=p.next()){E.index>C?($=E,E=null):$=E.sibling;var ee=m(f,E,P.value,y);if(ee===null){E===null&&(E=$);break}e&&E&&ee.alternate===null&&t(f,E),d=i(ee,d,C),z===null?N=ee:z.sibling=ee,z=ee,E=$}if(P.done)return n(f,E),U&&Ct(f,C),N;if(E===null){for(;!P.done;C++,P=p.next())P=h(f,P.value,y),P!==null&&(d=i(P,d,C),z===null?N=P:z.sibling=P,z=P);return U&&Ct(f,C),N}for(E=r(f,E);!P.done;C++,P=p.next())P=v(E,f,C,P.value,y),P!==null&&(e&&P.alternate!==null&&E.delete(P.key===null?C:P.key),d=i(P,d,C),z===null?N=P:z.sibling=P,z=P);return e&&E.forEach(function(Ie){return t(f,Ie)}),U&&Ct(f,C),N}function L(f,d,p,y){if(typeof p=="object"&&p!==null&&p.type===Ht&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case pr:e:{for(var N=p.key,z=d;z!==null;){if(z.key===N){if(N=p.type,N===Ht){if(z.tag===7){n(f,z.sibling),d=l(z,p.props.children),d.return=f,f=d;break e}}else if(z.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===at&&Fa(N)===z.type){n(f,z.sibling),d=l(z,p.props),d.ref=zn(f,z,p),d.return=f,f=d;break e}n(f,z);break}else t(f,z);z=z.sibling}p.type===Ht?(d=It(p.props.children,f.mode,y,p.key),d.return=f,f=d):(y=$r(p.type,p.key,p.props,null,f.mode,y),y.ref=zn(f,d,p),y.return=f,f=y)}return o(f);case Vt:e:{for(z=p.key;d!==null;){if(d.key===z)if(d.tag===4&&d.stateNode.containerInfo===p.containerInfo&&d.stateNode.implementation===p.implementation){n(f,d.sibling),d=l(d,p.children||[]),d.return=f,f=d;break e}else{n(f,d);break}else t(f,d);d=d.sibling}d=ni(p,f.mode,y),d.return=f,f=d}return o(f);case at:return z=p._init,L(f,d,z(p._payload),y)}if(Tn(p))return w(f,d,p,y);if(wn(p))return k(f,d,p,y);jr(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,d!==null&&d.tag===6?(n(f,d.sibling),d=l(d,p),d.return=f,f=d):(n(f,d),d=ti(p,f.mode,y),d.return=f,f=d),o(f)):n(f,d)}return L}var dn=Eu(!0),Cu=Eu(!1),nl=jt(null),rl=null,qt=null,No=null;function jo(){No=qt=rl=null}function zo(e){var t=nl.current;F(nl),e._currentValue=t}function Di(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function on(e,t){rl=e,No=qt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(me=!0),e.firstContext=null)}function be(e){var t=e._currentValue;if(No!==e)if(e={context:e,memoizedValue:t,next:null},qt===null){if(rl===null)throw Error(x(308));qt=e,rl.dependencies={lanes:0,firstContext:e}}else qt=qt.next=e;return t}var Pt=null;function Eo(e){Pt===null?Pt=[e]:Pt.push(e)}function _u(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,Eo(t)):(n.next=l.next,l.next=n),t.interleaved=n,rt(e,r)}function rt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var st=!1;function Co(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Tu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function et(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function vt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,I&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,rt(e,n)}return l=r.interleaved,l===null?(t.next=t,Eo(r)):(t.next=l.next,l.next=t),r.interleaved=t,rt(e,n)}function Dr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,fo(e,n)}}function Ua(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ll(e,t,n,r){var l=e.updateQueue;st=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,a=l.shared.pending;if(a!==null){l.shared.pending=null;var s=a,c=s.next;s.next=null,o===null?i=c:o.next=c,o=s;var g=e.alternate;g!==null&&(g=g.updateQueue,a=g.lastBaseUpdate,a!==o&&(a===null?g.firstBaseUpdate=c:a.next=c,g.lastBaseUpdate=s))}if(i!==null){var h=l.baseState;o=0,g=c=s=null,a=i;do{var m=a.lane,v=a.eventTime;if((r&m)===m){g!==null&&(g=g.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=e,k=a;switch(m=t,v=n,k.tag){case 1:if(w=k.payload,typeof w=="function"){h=w.call(v,h,m);break e}h=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=k.payload,m=typeof w=="function"?w.call(v,h,m):w,m==null)break e;h=H({},h,m);break e;case 2:st=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=l.effects,m===null?l.effects=[a]:m.push(a))}else v={eventTime:v,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},g===null?(c=g=v,s=h):g=g.next=v,o|=m;if(a=a.next,a===null){if(a=l.shared.pending,a===null)break;m=a,a=m.next,m.next=null,l.lastBaseUpdate=m,l.shared.pending=null}}while(!0);if(g===null&&(s=h),l.baseState=s,l.firstBaseUpdate=c,l.lastBaseUpdate=g,t=l.shared.interleaved,t!==null){l=t;do o|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);Ot|=o,e.lanes=o,e.memoizedState=h}}function $a(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(x(191,l));l.call(r)}}}var ur={},Ge=jt(ur),Jn=jt(ur),er=jt(ur);function bt(e){if(e===ur)throw Error(x(174));return e}function _o(e,t){switch(O(er,t),O(Jn,e),O(Ge,ur),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:hi(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=hi(t,e)}F(Ge),O(Ge,t)}function fn(){F(Ge),F(Jn),F(er)}function Pu(e){bt(er.current);var t=bt(Ge.current),n=hi(t,e.type);t!==n&&(O(Jn,e),O(Ge,n))}function To(e){Jn.current===e&&(F(Ge),F(Jn))}var B=jt(0);function il(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Yl=[];function Po(){for(var e=0;e<Yl.length;e++)Yl[e]._workInProgressVersionPrimary=null;Yl.length=0}var Rr=it.ReactCurrentDispatcher,Xl=it.ReactCurrentBatchConfig,Rt=0,V=null,Y=null,q=null,ol=!1,On=!1,tr=0,zf=0;function le(){throw Error(x(321))}function bo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Be(e[n],t[n]))return!1;return!0}function Lo(e,t,n,r,l,i){if(Rt=i,V=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Rr.current=e===null||e.memoizedState===null?Tf:Pf,e=n(r,l),On){i=0;do{if(On=!1,tr=0,25<=i)throw Error(x(301));i+=1,q=Y=null,t.updateQueue=null,Rr.current=bf,e=n(r,l)}while(On)}if(Rr.current=al,t=Y!==null&&Y.next!==null,Rt=0,q=Y=V=null,ol=!1,t)throw Error(x(300));return e}function Io(){var e=tr!==0;return tr=0,e}function We(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return q===null?V.memoizedState=q=e:q=q.next=e,q}function Le(){if(Y===null){var e=V.alternate;e=e!==null?e.memoizedState:null}else e=Y.next;var t=q===null?V.memoizedState:q.next;if(t!==null)q=t,Y=e;else{if(e===null)throw Error(x(310));Y=e,e={memoizedState:Y.memoizedState,baseState:Y.baseState,baseQueue:Y.baseQueue,queue:Y.queue,next:null},q===null?V.memoizedState=q=e:q=q.next=e}return q}function nr(e,t){return typeof t=="function"?t(e):t}function Zl(e){var t=Le(),n=t.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=e;var r=Y,l=r.baseQueue,i=n.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}r.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,r=r.baseState;var a=o=null,s=null,c=i;do{var g=c.lane;if((Rt&g)===g)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var h={lane:g,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(a=s=h,o=r):s=s.next=h,V.lanes|=g,Ot|=g}c=c.next}while(c!==null&&c!==i);s===null?o=r:s.next=a,Be(r,t.memoizedState)||(me=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do i=l.lane,V.lanes|=i,Ot|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ql(e){var t=Le(),n=t.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);Be(i,t.memoizedState)||(me=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function bu(){}function Lu(e,t){var n=V,r=Le(),l=t(),i=!Be(r.memoizedState,l);if(i&&(r.memoizedState=l,me=!0),r=r.queue,Mo(Du.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||q!==null&&q.memoizedState.tag&1){if(n.flags|=2048,rr(9,Mu.bind(null,n,r,l,t),void 0,null),J===null)throw Error(x(349));Rt&30||Iu(n,t,l)}return l}function Iu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=V.updateQueue,t===null?(t={lastEffect:null,stores:null},V.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Mu(e,t,n,r){t.value=n,t.getSnapshot=r,Ru(t)&&Ou(e)}function Du(e,t,n){return n(function(){Ru(t)&&Ou(e)})}function Ru(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Be(e,n)}catch{return!0}}function Ou(e){var t=rt(e,1);t!==null&&$e(t,e,1,-1)}function Ba(e){var t=We();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:nr,lastRenderedState:e},t.queue=e,e=e.dispatch=_f.bind(null,V,e),[t.memoizedState,e]}function rr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=V.updateQueue,t===null?(t={lastEffect:null,stores:null},V.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Au(){return Le().memoizedState}function Or(e,t,n,r){var l=We();V.flags|=e,l.memoizedState=rr(1|t,n,void 0,r===void 0?null:r)}function kl(e,t,n,r){var l=Le();r=r===void 0?null:r;var i=void 0;if(Y!==null){var o=Y.memoizedState;if(i=o.destroy,r!==null&&bo(r,o.deps)){l.memoizedState=rr(t,n,i,r);return}}V.flags|=e,l.memoizedState=rr(1|t,n,i,r)}function Va(e,t){return Or(8390656,8,e,t)}function Mo(e,t){return kl(2048,8,e,t)}function Fu(e,t){return kl(4,2,e,t)}function Uu(e,t){return kl(4,4,e,t)}function $u(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Bu(e,t,n){return n=n!=null?n.concat([e]):null,kl(4,4,$u.bind(null,t,e),n)}function Do(){}function Vu(e,t){var n=Le();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&bo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Hu(e,t){var n=Le();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&bo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Wu(e,t,n){return Rt&21?(Be(n,t)||(n=Xs(),V.lanes|=n,Ot|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,me=!0),e.memoizedState=n)}function Ef(e,t){var n=R;R=n!==0&&4>n?n:4,e(!0);var r=Xl.transition;Xl.transition={};try{e(!1),t()}finally{R=n,Xl.transition=r}}function Qu(){return Le().memoizedState}function Cf(e,t,n){var r=xt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ku(e))Gu(t,n);else if(n=_u(e,t,n,r),n!==null){var l=ue();$e(n,e,r,l),Yu(n,t,r)}}function _f(e,t,n){var r=xt(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ku(e))Gu(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,a=i(o,n);if(l.hasEagerState=!0,l.eagerState=a,Be(a,o)){var s=t.interleaved;s===null?(l.next=l,Eo(t)):(l.next=s.next,s.next=l),t.interleaved=l;return}}catch{}finally{}n=_u(e,t,l,r),n!==null&&(l=ue(),$e(n,e,r,l),Yu(n,t,r))}}function Ku(e){var t=e.alternate;return e===V||t!==null&&t===V}function Gu(e,t){On=ol=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Yu(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,fo(e,n)}}var al={readContext:be,useCallback:le,useContext:le,useEffect:le,useImperativeHandle:le,useInsertionEffect:le,useLayoutEffect:le,useMemo:le,useReducer:le,useRef:le,useState:le,useDebugValue:le,useDeferredValue:le,useTransition:le,useMutableSource:le,useSyncExternalStore:le,useId:le,unstable_isNewReconciler:!1},Tf={readContext:be,useCallback:function(e,t){return We().memoizedState=[e,t===void 0?null:t],e},useContext:be,useEffect:Va,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Or(4194308,4,$u.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Or(4194308,4,e,t)},useInsertionEffect:function(e,t){return Or(4,2,e,t)},useMemo:function(e,t){var n=We();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=We();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Cf.bind(null,V,e),[r.memoizedState,e]},useRef:function(e){var t=We();return e={current:e},t.memoizedState=e},useState:Ba,useDebugValue:Do,useDeferredValue:function(e){return We().memoizedState=e},useTransition:function(){var e=Ba(!1),t=e[0];return e=Ef.bind(null,e[1]),We().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=V,l=We();if(U){if(n===void 0)throw Error(x(407));n=n()}else{if(n=t(),J===null)throw Error(x(349));Rt&30||Iu(r,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,Va(Du.bind(null,r,i,e),[e]),r.flags|=2048,rr(9,Mu.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=We(),t=J.identifierPrefix;if(U){var n=Je,r=qe;n=(r&~(1<<32-Ue(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=tr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=zf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Pf={readContext:be,useCallback:Vu,useContext:be,useEffect:Mo,useImperativeHandle:Bu,useInsertionEffect:Fu,useLayoutEffect:Uu,useMemo:Hu,useReducer:Zl,useRef:Au,useState:function(){return Zl(nr)},useDebugValue:Do,useDeferredValue:function(e){var t=Le();return Wu(t,Y.memoizedState,e)},useTransition:function(){var e=Zl(nr)[0],t=Le().memoizedState;return[e,t]},useMutableSource:bu,useSyncExternalStore:Lu,useId:Qu,unstable_isNewReconciler:!1},bf={readContext:be,useCallback:Vu,useContext:be,useEffect:Mo,useImperativeHandle:Bu,useInsertionEffect:Fu,useLayoutEffect:Uu,useMemo:Hu,useReducer:ql,useRef:Au,useState:function(){return ql(nr)},useDebugValue:Do,useDeferredValue:function(e){var t=Le();return Y===null?t.memoizedState=e:Wu(t,Y.memoizedState,e)},useTransition:function(){var e=ql(nr)[0],t=Le().memoizedState;return[e,t]},useMutableSource:bu,useSyncExternalStore:Lu,useId:Qu,unstable_isNewReconciler:!1};function Re(e,t){if(e&&e.defaultProps){t=H({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ri(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:H({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Sl={isMounted:function(e){return(e=e._reactInternals)?Ut(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ue(),l=xt(e),i=et(r,l);i.payload=t,n!=null&&(i.callback=n),t=vt(e,i,l),t!==null&&($e(t,e,l,r),Dr(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ue(),l=xt(e),i=et(r,l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=vt(e,i,l),t!==null&&($e(t,e,l,r),Dr(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ue(),r=xt(e),l=et(n,r);l.tag=2,t!=null&&(l.callback=t),t=vt(e,l,r),t!==null&&($e(t,e,r,n),Dr(t,e,r))}};function Ha(e,t,n,r,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):t.prototype&&t.prototype.isPureReactComponent?!Yn(n,r)||!Yn(l,i):!0}function Xu(e,t,n){var r=!1,l=St,i=t.contextType;return typeof i=="object"&&i!==null?i=be(i):(l=ge(t)?Mt:ae.current,r=t.contextTypes,i=(r=r!=null)?un(e,l):St),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Sl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function Wa(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Sl.enqueueReplaceState(t,t.state,null)}function Oi(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},Co(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=be(i):(i=ge(t)?Mt:ae.current,l.context=un(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Ri(e,t,i,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&Sl.enqueueReplaceState(l,l.state,null),ll(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function pn(e,t){try{var n="",r=t;do n+=ld(r),r=r.return;while(r);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function Jl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ai(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Lf=typeof WeakMap=="function"?WeakMap:Map;function Zu(e,t,n){n=et(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ul||(ul=!0,Gi=r),Ai(e,t)},n}function qu(e,t,n){n=et(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Ai(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Ai(e,t),typeof r!="function"&&(yt===null?yt=new Set([this]):yt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Qa(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Lf;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=Qf.bind(null,e,t,n),t.then(e,e))}function Ka(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ga(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=et(-1,1),t.tag=2,vt(n,t,1))),n.lanes|=1),e)}var If=it.ReactCurrentOwner,me=!1;function se(e,t,n,r){t.child=e===null?Cu(t,null,n,r):dn(t,e.child,n,r)}function Ya(e,t,n,r,l){n=n.render;var i=t.ref;return on(t,l),r=Lo(e,t,n,r,i,l),n=Io(),e!==null&&!me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,lt(e,t,l)):(U&&n&&wo(t),t.flags|=1,se(e,t,r,l),t.child)}function Xa(e,t,n,r,l){if(e===null){var i=n.type;return typeof i=="function"&&!Vo(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Ju(e,t,i,r,l)):(e=$r(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&l)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Yn,n(o,r)&&e.ref===t.ref)return lt(e,t,l)}return t.flags|=1,e=wt(i,r),e.ref=t.ref,e.return=t,t.child=e}function Ju(e,t,n,r,l){if(e!==null){var i=e.memoizedProps;if(Yn(i,r)&&e.ref===t.ref)if(me=!1,t.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(me=!0);else return t.lanes=e.lanes,lt(e,t,l)}return Fi(e,t,n,r,l)}function ec(e,t,n){var r=t.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},O(en,xe),xe|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,O(en,xe),xe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,O(en,xe),xe|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,O(en,xe),xe|=r;return se(e,t,l,n),t.child}function tc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Fi(e,t,n,r,l){var i=ge(n)?Mt:ae.current;return i=un(t,i),on(t,l),n=Lo(e,t,n,r,i,l),r=Io(),e!==null&&!me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,lt(e,t,l)):(U&&r&&wo(t),t.flags|=1,se(e,t,n,l),t.child)}function Za(e,t,n,r,l){if(ge(n)){var i=!0;Jr(t)}else i=!1;if(on(t,l),t.stateNode===null)Ar(e,t),Xu(t,n,r),Oi(t,n,r,l),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var s=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=be(c):(c=ge(n)?Mt:ae.current,c=un(t,c));var g=n.getDerivedStateFromProps,h=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||s!==c)&&Wa(t,o,r,c),st=!1;var m=t.memoizedState;o.state=m,ll(t,r,o,l),s=t.memoizedState,a!==r||m!==s||he.current||st?(typeof g=="function"&&(Ri(t,n,g,r),s=t.memoizedState),(a=st||Ha(t,n,a,r,m,s,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),o.props=r,o.state=s,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Tu(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:Re(t.type,a),o.props=c,h=t.pendingProps,m=o.context,s=n.contextType,typeof s=="object"&&s!==null?s=be(s):(s=ge(n)?Mt:ae.current,s=un(t,s));var v=n.getDerivedStateFromProps;(g=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||m!==s)&&Wa(t,o,r,s),st=!1,m=t.memoizedState,o.state=m,ll(t,r,o,l);var w=t.memoizedState;a!==h||m!==w||he.current||st?(typeof v=="function"&&(Ri(t,n,v,r),w=t.memoizedState),(c=st||Ha(t,n,c,r,m,w,s)||!1)?(g||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,w,s),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,w,s)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),o.props=r,o.state=w,o.context=s,r=c):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Ui(e,t,n,r,i,l)}function Ui(e,t,n,r,l,i){tc(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return l&&Ra(t,n,!1),lt(e,t,i);r=t.stateNode,If.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=dn(t,e.child,null,i),t.child=dn(t,null,a,i)):se(e,t,a,i),t.memoizedState=r.state,l&&Ra(t,n,!0),t.child}function nc(e){var t=e.stateNode;t.pendingContext?Da(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Da(e,t.context,!1),_o(e,t.containerInfo)}function qa(e,t,n,r,l){return cn(),So(l),t.flags|=256,se(e,t,n,r),t.child}var $i={dehydrated:null,treeContext:null,retryLane:0};function Bi(e){return{baseLanes:e,cachePool:null,transitions:null}}function rc(e,t,n){var r=t.pendingProps,l=B.current,i=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(l&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),O(B,l&1),e===null)return Mi(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,i?(r=t.mode,i=t.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=zl(o,r,0,null),e=It(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Bi(n),t.memoizedState=$i,e):Ro(t,o));if(l=e.memoizedState,l!==null&&(a=l.dehydrated,a!==null))return Mf(e,t,o,r,a,l,n);if(i){i=r.fallback,o=t.mode,l=e.child,a=l.sibling;var s={mode:"hidden",children:r.children};return!(o&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=wt(l,s),r.subtreeFlags=l.subtreeFlags&14680064),a!==null?i=wt(a,i):(i=It(i,o,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,o=e.child.memoizedState,o=o===null?Bi(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~n,t.memoizedState=$i,r}return i=e.child,e=i.sibling,r=wt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ro(e,t){return t=zl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function zr(e,t,n,r){return r!==null&&So(r),dn(t,e.child,null,n),e=Ro(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Mf(e,t,n,r,l,i,o){if(n)return t.flags&256?(t.flags&=-257,r=Jl(Error(x(422))),zr(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,l=t.mode,r=zl({mode:"visible",children:r.children},l,0,null),i=It(i,l,o,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&dn(t,e.child,null,o),t.child.memoizedState=Bi(o),t.memoizedState=$i,i);if(!(t.mode&1))return zr(e,t,o,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(x(419)),r=Jl(i,r,void 0),zr(e,t,o,r)}if(a=(o&e.childLanes)!==0,me||a){if(r=J,r!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|o)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,rt(e,l),$e(r,e,l,-1))}return Bo(),r=Jl(Error(x(421))),zr(e,t,o,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Kf.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,we=gt(l.nextSibling),ke=t,U=!0,Ae=null,e!==null&&(Ce[_e++]=qe,Ce[_e++]=Je,Ce[_e++]=Dt,qe=e.id,Je=e.overflow,Dt=t),t=Ro(t,r.children),t.flags|=4096,t)}function Ja(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Di(e.return,t,n)}function ei(e,t,n,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=l)}function lc(e,t,n){var r=t.pendingProps,l=r.revealOrder,i=r.tail;if(se(e,t,r.children,n),r=B.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ja(e,n,t);else if(e.tag===19)Ja(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(O(B,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&il(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),ei(t,!1,l,n,i);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&il(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}ei(t,!0,n,null,i);break;case"together":ei(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ar(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function lt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ot|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(x(153));if(t.child!==null){for(e=t.child,n=wt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=wt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Df(e,t,n){switch(t.tag){case 3:nc(t),cn();break;case 5:Pu(t);break;case 1:ge(t.type)&&Jr(t);break;case 4:_o(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;O(nl,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(O(B,B.current&1),t.flags|=128,null):n&t.child.childLanes?rc(e,t,n):(O(B,B.current&1),e=lt(e,t,n),e!==null?e.sibling:null);O(B,B.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return lc(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),O(B,B.current),r)break;return null;case 22:case 23:return t.lanes=0,ec(e,t,n)}return lt(e,t,n)}var ic,Vi,oc,ac;ic=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Vi=function(){};oc=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,bt(Ge.current);var i=null;switch(n){case"input":l=di(e,l),r=di(e,r),i=[];break;case"select":l=H({},l,{value:void 0}),r=H({},r,{value:void 0}),i=[];break;case"textarea":l=mi(e,l),r=mi(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Zr)}gi(n,r);var o;n=null;for(c in l)if(!r.hasOwnProperty(c)&&l.hasOwnProperty(c)&&l[c]!=null)if(c==="style"){var a=l[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Bn.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var s=r[c];if(a=l!=null?l[c]:void 0,r.hasOwnProperty(c)&&s!==a&&(s!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||s&&s.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in s)s.hasOwnProperty(o)&&a[o]!==s[o]&&(n||(n={}),n[o]=s[o])}else n||(i||(i=[]),i.push(c,n)),n=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(i=i||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Bn.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&A("scroll",e),i||a===s||(i=[])):(i=i||[]).push(c,s))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};ac=function(e,t,n,r){n!==r&&(t.flags|=4)};function En(e,t){if(!U)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ie(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Rf(e,t,n){var r=t.pendingProps;switch(ko(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ie(t),null;case 1:return ge(t.type)&&qr(),ie(t),null;case 3:return r=t.stateNode,fn(),F(he),F(ae),Po(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Nr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ae!==null&&(Zi(Ae),Ae=null))),Vi(e,t),ie(t),null;case 5:To(t);var l=bt(er.current);if(n=t.type,e!==null&&t.stateNode!=null)oc(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(x(166));return ie(t),null}if(e=bt(Ge.current),Nr(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Qe]=t,r[qn]=i,e=(t.mode&1)!==0,n){case"dialog":A("cancel",r),A("close",r);break;case"iframe":case"object":case"embed":A("load",r);break;case"video":case"audio":for(l=0;l<bn.length;l++)A(bn[l],r);break;case"source":A("error",r);break;case"img":case"image":case"link":A("error",r),A("load",r);break;case"details":A("toggle",r);break;case"input":sa(r,i),A("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},A("invalid",r);break;case"textarea":ca(r,i),A("invalid",r)}gi(n,i),l=null;for(var o in i)if(i.hasOwnProperty(o)){var a=i[o];o==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&Sr(r.textContent,a,e),l=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&Sr(r.textContent,a,e),l=["children",""+a]):Bn.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&A("scroll",r)}switch(n){case"input":mr(r),ua(r,i,!0);break;case"textarea":mr(r),da(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Zr)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ds(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Qe]=t,e[qn]=r,ic(e,t,!1,!1),t.stateNode=e;e:{switch(o=vi(n,r),n){case"dialog":A("cancel",e),A("close",e),l=r;break;case"iframe":case"object":case"embed":A("load",e),l=r;break;case"video":case"audio":for(l=0;l<bn.length;l++)A(bn[l],e);l=r;break;case"source":A("error",e),l=r;break;case"img":case"image":case"link":A("error",e),A("load",e),l=r;break;case"details":A("toggle",e),l=r;break;case"input":sa(e,r),l=di(e,r),A("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=H({},r,{value:void 0}),A("invalid",e);break;case"textarea":ca(e,r),l=mi(e,r),A("invalid",e);break;default:l=r}gi(n,l),a=l;for(i in a)if(a.hasOwnProperty(i)){var s=a[i];i==="style"?As(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Rs(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Vn(e,s):typeof s=="number"&&Vn(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Bn.hasOwnProperty(i)?s!=null&&i==="onScroll"&&A("scroll",e):s!=null&&io(e,i,s,o))}switch(n){case"input":mr(e),ua(e,r,!1);break;case"textarea":mr(e),da(e);break;case"option":r.value!=null&&e.setAttribute("value",""+kt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?tn(e,!!r.multiple,i,!1):r.defaultValue!=null&&tn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Zr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ie(t),null;case 6:if(e&&t.stateNode!=null)ac(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(x(166));if(n=bt(er.current),bt(Ge.current),Nr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Qe]=t,(i=r.nodeValue!==n)&&(e=ke,e!==null))switch(e.tag){case 3:Sr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Sr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Qe]=t,t.stateNode=r}return ie(t),null;case 13:if(F(B),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(U&&we!==null&&t.mode&1&&!(t.flags&128))zu(),cn(),t.flags|=98560,i=!1;else if(i=Nr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(x(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(x(317));i[Qe]=t}else cn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ie(t),i=!1}else Ae!==null&&(Zi(Ae),Ae=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||B.current&1?X===0&&(X=3):Bo())),t.updateQueue!==null&&(t.flags|=4),ie(t),null);case 4:return fn(),Vi(e,t),e===null&&Xn(t.stateNode.containerInfo),ie(t),null;case 10:return zo(t.type._context),ie(t),null;case 17:return ge(t.type)&&qr(),ie(t),null;case 19:if(F(B),i=t.memoizedState,i===null)return ie(t),null;if(r=(t.flags&128)!==0,o=i.rendering,o===null)if(r)En(i,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=il(e),o!==null){for(t.flags|=128,En(i,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return O(B,B.current&1|2),t.child}e=e.sibling}i.tail!==null&&K()>mn&&(t.flags|=128,r=!0,En(i,!1),t.lanes=4194304)}else{if(!r)if(e=il(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),En(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!U)return ie(t),null}else 2*K()-i.renderingStartTime>mn&&n!==1073741824&&(t.flags|=128,r=!0,En(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(n=i.last,n!==null?n.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=K(),t.sibling=null,n=B.current,O(B,r?n&1|2:n&1),t):(ie(t),null);case 22:case 23:return $o(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?xe&1073741824&&(ie(t),t.subtreeFlags&6&&(t.flags|=8192)):ie(t),null;case 24:return null;case 25:return null}throw Error(x(156,t.tag))}function Of(e,t){switch(ko(t),t.tag){case 1:return ge(t.type)&&qr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return fn(),F(he),F(ae),Po(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return To(t),null;case 13:if(F(B),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(x(340));cn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return F(B),null;case 4:return fn(),null;case 10:return zo(t.type._context),null;case 22:case 23:return $o(),null;case 24:return null;default:return null}}var Er=!1,oe=!1,Af=typeof WeakSet=="function"?WeakSet:Set,j=null;function Jt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Q(e,t,r)}else n.current=null}function Hi(e,t,n){try{n()}catch(r){Q(e,t,r)}}var es=!1;function Ff(e,t){if(Ci=Gr,e=fu(),xo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,a=-1,s=-1,c=0,g=0,h=e,m=null;t:for(;;){for(var v;h!==n||l!==0&&h.nodeType!==3||(a=o+l),h!==i||r!==0&&h.nodeType!==3||(s=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(v=h.firstChild)!==null;)m=h,h=v;for(;;){if(h===e)break t;if(m===n&&++c===l&&(a=o),m===i&&++g===r&&(s=o),(v=h.nextSibling)!==null)break;h=m,m=h.parentNode}h=v}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(_i={focusedElem:e,selectionRange:n},Gr=!1,j=t;j!==null;)if(t=j,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,j=e;else for(;j!==null;){t=j;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var k=w.memoizedProps,L=w.memoizedState,f=t.stateNode,d=f.getSnapshotBeforeUpdate(t.elementType===t.type?k:Re(t.type,k),L);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(x(163))}}catch(y){Q(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,j=e;break}j=t.return}return w=es,es=!1,w}function An(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&Hi(t,n,i)}l=l.next}while(l!==r)}}function Nl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Wi(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function sc(e){var t=e.alternate;t!==null&&(e.alternate=null,sc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Qe],delete t[qn],delete t[bi],delete t[kf],delete t[Sf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function uc(e){return e.tag===5||e.tag===3||e.tag===4}function ts(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||uc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Qi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Zr));else if(r!==4&&(e=e.child,e!==null))for(Qi(e,t,n),e=e.sibling;e!==null;)Qi(e,t,n),e=e.sibling}function Ki(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ki(e,t,n),e=e.sibling;e!==null;)Ki(e,t,n),e=e.sibling}var te=null,Oe=!1;function ot(e,t,n){for(n=n.child;n!==null;)cc(e,t,n),n=n.sibling}function cc(e,t,n){if(Ke&&typeof Ke.onCommitFiberUnmount=="function")try{Ke.onCommitFiberUnmount(hl,n)}catch{}switch(n.tag){case 5:oe||Jt(n,t);case 6:var r=te,l=Oe;te=null,ot(e,t,n),te=r,Oe=l,te!==null&&(Oe?(e=te,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):te.removeChild(n.stateNode));break;case 18:te!==null&&(Oe?(e=te,n=n.stateNode,e.nodeType===8?Kl(e.parentNode,n):e.nodeType===1&&Kl(e,n),Kn(e)):Kl(te,n.stateNode));break;case 4:r=te,l=Oe,te=n.stateNode.containerInfo,Oe=!0,ot(e,t,n),te=r,Oe=l;break;case 0:case 11:case 14:case 15:if(!oe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Hi(n,t,o),l=l.next}while(l!==r)}ot(e,t,n);break;case 1:if(!oe&&(Jt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Q(n,t,a)}ot(e,t,n);break;case 21:ot(e,t,n);break;case 22:n.mode&1?(oe=(r=oe)||n.memoizedState!==null,ot(e,t,n),oe=r):ot(e,t,n);break;default:ot(e,t,n)}}function ns(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Af),t.forEach(function(r){var l=Gf.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function De(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var i=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:te=a.stateNode,Oe=!1;break e;case 3:te=a.stateNode.containerInfo,Oe=!0;break e;case 4:te=a.stateNode.containerInfo,Oe=!0;break e}a=a.return}if(te===null)throw Error(x(160));cc(i,o,l),te=null,Oe=!1;var s=l.alternate;s!==null&&(s.return=null),l.return=null}catch(c){Q(l,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)dc(t,e),t=t.sibling}function dc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(De(t,e),He(e),r&4){try{An(3,e,e.return),Nl(3,e)}catch(k){Q(e,e.return,k)}try{An(5,e,e.return)}catch(k){Q(e,e.return,k)}}break;case 1:De(t,e),He(e),r&512&&n!==null&&Jt(n,n.return);break;case 5:if(De(t,e),He(e),r&512&&n!==null&&Jt(n,n.return),e.flags&32){var l=e.stateNode;try{Vn(l,"")}catch(k){Q(e,e.return,k)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,o=n!==null?n.memoizedProps:i,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&Is(l,i),vi(a,o);var c=vi(a,i);for(o=0;o<s.length;o+=2){var g=s[o],h=s[o+1];g==="style"?As(l,h):g==="dangerouslySetInnerHTML"?Rs(l,h):g==="children"?Vn(l,h):io(l,g,h,c)}switch(a){case"input":fi(l,i);break;case"textarea":Ms(l,i);break;case"select":var m=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var v=i.value;v!=null?tn(l,!!i.multiple,v,!1):m!==!!i.multiple&&(i.defaultValue!=null?tn(l,!!i.multiple,i.defaultValue,!0):tn(l,!!i.multiple,i.multiple?[]:"",!1))}l[qn]=i}catch(k){Q(e,e.return,k)}}break;case 6:if(De(t,e),He(e),r&4){if(e.stateNode===null)throw Error(x(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(k){Q(e,e.return,k)}}break;case 3:if(De(t,e),He(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Kn(t.containerInfo)}catch(k){Q(e,e.return,k)}break;case 4:De(t,e),He(e);break;case 13:De(t,e),He(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(Fo=K())),r&4&&ns(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(oe=(c=oe)||g,De(t,e),oe=c):De(t,e),He(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!g&&e.mode&1)for(j=e,g=e.child;g!==null;){for(h=j=g;j!==null;){switch(m=j,v=m.child,m.tag){case 0:case 11:case 14:case 15:An(4,m,m.return);break;case 1:Jt(m,m.return);var w=m.stateNode;if(typeof w.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(k){Q(r,n,k)}}break;case 5:Jt(m,m.return);break;case 22:if(m.memoizedState!==null){ls(h);continue}}v!==null?(v.return=m,j=v):ls(h)}g=g.sibling}e:for(g=null,h=e;;){if(h.tag===5){if(g===null){g=h;try{l=h.stateNode,c?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=h.stateNode,s=h.memoizedProps.style,o=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=Os("display",o))}catch(k){Q(e,e.return,k)}}}else if(h.tag===6){if(g===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(k){Q(e,e.return,k)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;g===h&&(g=null),h=h.return}g===h&&(g=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:De(t,e),He(e),r&4&&ns(e);break;case 21:break;default:De(t,e),He(e)}}function He(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(uc(n)){var r=n;break e}n=n.return}throw Error(x(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Vn(l,""),r.flags&=-33);var i=ts(e);Ki(e,i,l);break;case 3:case 4:var o=r.stateNode.containerInfo,a=ts(e);Qi(e,a,o);break;default:throw Error(x(161))}}catch(s){Q(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Uf(e,t,n){j=e,fc(e)}function fc(e,t,n){for(var r=(e.mode&1)!==0;j!==null;){var l=j,i=l.child;if(l.tag===22&&r){var o=l.memoizedState!==null||Er;if(!o){var a=l.alternate,s=a!==null&&a.memoizedState!==null||oe;a=Er;var c=oe;if(Er=o,(oe=s)&&!c)for(j=l;j!==null;)o=j,s=o.child,o.tag===22&&o.memoizedState!==null?is(l):s!==null?(s.return=o,j=s):is(l);for(;i!==null;)j=i,fc(i),i=i.sibling;j=l,Er=a,oe=c}rs(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,j=i):rs(e)}}function rs(e){for(;j!==null;){var t=j;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:oe||Nl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!oe)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Re(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&$a(t,i,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}$a(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var g=c.memoizedState;if(g!==null){var h=g.dehydrated;h!==null&&Kn(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(x(163))}oe||t.flags&512&&Wi(t)}catch(m){Q(t,t.return,m)}}if(t===e){j=null;break}if(n=t.sibling,n!==null){n.return=t.return,j=n;break}j=t.return}}function ls(e){for(;j!==null;){var t=j;if(t===e){j=null;break}var n=t.sibling;if(n!==null){n.return=t.return,j=n;break}j=t.return}}function is(e){for(;j!==null;){var t=j;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Nl(4,t)}catch(s){Q(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(s){Q(t,l,s)}}var i=t.return;try{Wi(t)}catch(s){Q(t,i,s)}break;case 5:var o=t.return;try{Wi(t)}catch(s){Q(t,o,s)}}}catch(s){Q(t,t.return,s)}if(t===e){j=null;break}var a=t.sibling;if(a!==null){a.return=t.return,j=a;break}j=t.return}}var $f=Math.ceil,sl=it.ReactCurrentDispatcher,Oo=it.ReactCurrentOwner,Pe=it.ReactCurrentBatchConfig,I=0,J=null,G=null,ne=0,xe=0,en=jt(0),X=0,lr=null,Ot=0,jl=0,Ao=0,Fn=null,pe=null,Fo=0,mn=1/0,Xe=null,ul=!1,Gi=null,yt=null,Cr=!1,ft=null,cl=0,Un=0,Yi=null,Fr=-1,Ur=0;function ue(){return I&6?K():Fr!==-1?Fr:Fr=K()}function xt(e){return e.mode&1?I&2&&ne!==0?ne&-ne:jf.transition!==null?(Ur===0&&(Ur=Xs()),Ur):(e=R,e!==0||(e=window.event,e=e===void 0?16:ru(e.type)),e):1}function $e(e,t,n,r){if(50<Un)throw Un=0,Yi=null,Error(x(185));or(e,n,r),(!(I&2)||e!==J)&&(e===J&&(!(I&2)&&(jl|=n),X===4&&ct(e,ne)),ve(e,r),n===1&&I===0&&!(t.mode&1)&&(mn=K()+500,wl&&zt()))}function ve(e,t){var n=e.callbackNode;Nd(e,t);var r=Kr(e,e===J?ne:0);if(r===0)n!==null&&ma(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ma(n),t===1)e.tag===0?Nf(os.bind(null,e)):Su(os.bind(null,e)),xf(function(){!(I&6)&&zt()}),n=null;else{switch(Zs(r)){case 1:n=co;break;case 4:n=Gs;break;case 16:n=Qr;break;case 536870912:n=Ys;break;default:n=Qr}n=wc(n,pc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function pc(e,t){if(Fr=-1,Ur=0,I&6)throw Error(x(327));var n=e.callbackNode;if(an()&&e.callbackNode!==n)return null;var r=Kr(e,e===J?ne:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=dl(e,r);else{t=r;var l=I;I|=2;var i=hc();(J!==e||ne!==t)&&(Xe=null,mn=K()+500,Lt(e,t));do try{Hf();break}catch(a){mc(e,a)}while(!0);jo(),sl.current=i,I=l,G!==null?t=0:(J=null,ne=0,t=X)}if(t!==0){if(t===2&&(l=Si(e),l!==0&&(r=l,t=Xi(e,l))),t===1)throw n=lr,Lt(e,0),ct(e,r),ve(e,K()),n;if(t===6)ct(e,r);else{if(l=e.current.alternate,!(r&30)&&!Bf(l)&&(t=dl(e,r),t===2&&(i=Si(e),i!==0&&(r=i,t=Xi(e,i))),t===1))throw n=lr,Lt(e,0),ct(e,r),ve(e,K()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(x(345));case 2:_t(e,pe,Xe);break;case 3:if(ct(e,r),(r&130023424)===r&&(t=Fo+500-K(),10<t)){if(Kr(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){ue(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Pi(_t.bind(null,e,pe,Xe),t);break}_t(e,pe,Xe);break;case 4:if(ct(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var o=31-Ue(r);i=1<<o,o=t[o],o>l&&(l=o),r&=~i}if(r=l,r=K()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*$f(r/1960))-r,10<r){e.timeoutHandle=Pi(_t.bind(null,e,pe,Xe),r);break}_t(e,pe,Xe);break;case 5:_t(e,pe,Xe);break;default:throw Error(x(329))}}}return ve(e,K()),e.callbackNode===n?pc.bind(null,e):null}function Xi(e,t){var n=Fn;return e.current.memoizedState.isDehydrated&&(Lt(e,t).flags|=256),e=dl(e,t),e!==2&&(t=pe,pe=n,t!==null&&Zi(t)),e}function Zi(e){pe===null?pe=e:pe.push.apply(pe,e)}function Bf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!Be(i(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ct(e,t){for(t&=~Ao,t&=~jl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ue(t),r=1<<n;e[n]=-1,t&=~r}}function os(e){if(I&6)throw Error(x(327));an();var t=Kr(e,0);if(!(t&1))return ve(e,K()),null;var n=dl(e,t);if(e.tag!==0&&n===2){var r=Si(e);r!==0&&(t=r,n=Xi(e,r))}if(n===1)throw n=lr,Lt(e,0),ct(e,t),ve(e,K()),n;if(n===6)throw Error(x(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,_t(e,pe,Xe),ve(e,K()),null}function Uo(e,t){var n=I;I|=1;try{return e(t)}finally{I=n,I===0&&(mn=K()+500,wl&&zt())}}function At(e){ft!==null&&ft.tag===0&&!(I&6)&&an();var t=I;I|=1;var n=Pe.transition,r=R;try{if(Pe.transition=null,R=1,e)return e()}finally{R=r,Pe.transition=n,I=t,!(I&6)&&zt()}}function $o(){xe=en.current,F(en)}function Lt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,yf(n)),G!==null)for(n=G.return;n!==null;){var r=n;switch(ko(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&qr();break;case 3:fn(),F(he),F(ae),Po();break;case 5:To(r);break;case 4:fn();break;case 13:F(B);break;case 19:F(B);break;case 10:zo(r.type._context);break;case 22:case 23:$o()}n=n.return}if(J=e,G=e=wt(e.current,null),ne=xe=t,X=0,lr=null,Ao=jl=Ot=0,pe=Fn=null,Pt!==null){for(t=0;t<Pt.length;t++)if(n=Pt[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=l,r.next=o}n.pending=r}Pt=null}return e}function mc(e,t){do{var n=G;try{if(jo(),Rr.current=al,ol){for(var r=V.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}ol=!1}if(Rt=0,q=Y=V=null,On=!1,tr=0,Oo.current=null,n===null||n.return===null){X=1,lr=t,G=null;break}e:{var i=e,o=n.return,a=n,s=t;if(t=ne,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,g=a,h=g.tag;if(!(g.mode&1)&&(h===0||h===11||h===15)){var m=g.alternate;m?(g.updateQueue=m.updateQueue,g.memoizedState=m.memoizedState,g.lanes=m.lanes):(g.updateQueue=null,g.memoizedState=null)}var v=Ka(o);if(v!==null){v.flags&=-257,Ga(v,o,a,i,t),v.mode&1&&Qa(i,c,t),t=v,s=c;var w=t.updateQueue;if(w===null){var k=new Set;k.add(s),t.updateQueue=k}else w.add(s);break e}else{if(!(t&1)){Qa(i,c,t),Bo();break e}s=Error(x(426))}}else if(U&&a.mode&1){var L=Ka(o);if(L!==null){!(L.flags&65536)&&(L.flags|=256),Ga(L,o,a,i,t),So(pn(s,a));break e}}i=s=pn(s,a),X!==4&&(X=2),Fn===null?Fn=[i]:Fn.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=Zu(i,s,t);Ua(i,f);break e;case 1:a=s;var d=i.type,p=i.stateNode;if(!(i.flags&128)&&(typeof d.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(yt===null||!yt.has(p)))){i.flags|=65536,t&=-t,i.lanes|=t;var y=qu(i,a,t);Ua(i,y);break e}}i=i.return}while(i!==null)}vc(n)}catch(N){t=N,G===n&&n!==null&&(G=n=n.return);continue}break}while(!0)}function hc(){var e=sl.current;return sl.current=al,e===null?al:e}function Bo(){(X===0||X===3||X===2)&&(X=4),J===null||!(Ot&268435455)&&!(jl&268435455)||ct(J,ne)}function dl(e,t){var n=I;I|=2;var r=hc();(J!==e||ne!==t)&&(Xe=null,Lt(e,t));do try{Vf();break}catch(l){mc(e,l)}while(!0);if(jo(),I=n,sl.current=r,G!==null)throw Error(x(261));return J=null,ne=0,X}function Vf(){for(;G!==null;)gc(G)}function Hf(){for(;G!==null&&!md();)gc(G)}function gc(e){var t=xc(e.alternate,e,xe);e.memoizedProps=e.pendingProps,t===null?vc(e):G=t,Oo.current=null}function vc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Of(n,t),n!==null){n.flags&=32767,G=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{X=6,G=null;return}}else if(n=Rf(n,t,xe),n!==null){G=n;return}if(t=t.sibling,t!==null){G=t;return}G=t=e}while(t!==null);X===0&&(X=5)}function _t(e,t,n){var r=R,l=Pe.transition;try{Pe.transition=null,R=1,Wf(e,t,n,r)}finally{Pe.transition=l,R=r}return null}function Wf(e,t,n,r){do an();while(ft!==null);if(I&6)throw Error(x(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(x(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(jd(e,i),e===J&&(G=J=null,ne=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Cr||(Cr=!0,wc(Qr,function(){return an(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Pe.transition,Pe.transition=null;var o=R;R=1;var a=I;I|=4,Oo.current=null,Ff(e,n),dc(n,e),df(_i),Gr=!!Ci,_i=Ci=null,e.current=n,Uf(n),hd(),I=a,R=o,Pe.transition=i}else e.current=n;if(Cr&&(Cr=!1,ft=e,cl=l),i=e.pendingLanes,i===0&&(yt=null),yd(n.stateNode),ve(e,K()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(ul)throw ul=!1,e=Gi,Gi=null,e;return cl&1&&e.tag!==0&&an(),i=e.pendingLanes,i&1?e===Yi?Un++:(Un=0,Yi=e):Un=0,zt(),null}function an(){if(ft!==null){var e=Zs(cl),t=Pe.transition,n=R;try{if(Pe.transition=null,R=16>e?16:e,ft===null)var r=!1;else{if(e=ft,ft=null,cl=0,I&6)throw Error(x(331));var l=I;for(I|=4,j=e.current;j!==null;){var i=j,o=i.child;if(j.flags&16){var a=i.deletions;if(a!==null){for(var s=0;s<a.length;s++){var c=a[s];for(j=c;j!==null;){var g=j;switch(g.tag){case 0:case 11:case 15:An(8,g,i)}var h=g.child;if(h!==null)h.return=g,j=h;else for(;j!==null;){g=j;var m=g.sibling,v=g.return;if(sc(g),g===c){j=null;break}if(m!==null){m.return=v,j=m;break}j=v}}}var w=i.alternate;if(w!==null){var k=w.child;if(k!==null){w.child=null;do{var L=k.sibling;k.sibling=null,k=L}while(k!==null)}}j=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,j=o;else e:for(;j!==null;){if(i=j,i.flags&2048)switch(i.tag){case 0:case 11:case 15:An(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,j=f;break e}j=i.return}}var d=e.current;for(j=d;j!==null;){o=j;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,j=p;else e:for(o=d;j!==null;){if(a=j,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Nl(9,a)}}catch(N){Q(a,a.return,N)}if(a===o){j=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,j=y;break e}j=a.return}}if(I=l,zt(),Ke&&typeof Ke.onPostCommitFiberRoot=="function")try{Ke.onPostCommitFiberRoot(hl,e)}catch{}r=!0}return r}finally{R=n,Pe.transition=t}}return!1}function as(e,t,n){t=pn(n,t),t=Zu(e,t,1),e=vt(e,t,1),t=ue(),e!==null&&(or(e,1,t),ve(e,t))}function Q(e,t,n){if(e.tag===3)as(e,e,n);else for(;t!==null;){if(t.tag===3){as(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(yt===null||!yt.has(r))){e=pn(n,e),e=qu(t,e,1),t=vt(t,e,1),e=ue(),t!==null&&(or(t,1,e),ve(t,e));break}}t=t.return}}function Qf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ue(),e.pingedLanes|=e.suspendedLanes&n,J===e&&(ne&n)===n&&(X===4||X===3&&(ne&130023424)===ne&&500>K()-Fo?Lt(e,0):Ao|=n),ve(e,t)}function yc(e,t){t===0&&(e.mode&1?(t=vr,vr<<=1,!(vr&130023424)&&(vr=4194304)):t=1);var n=ue();e=rt(e,t),e!==null&&(or(e,t,n),ve(e,n))}function Kf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),yc(e,n)}function Gf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(x(314))}r!==null&&r.delete(t),yc(e,n)}var xc;xc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||he.current)me=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return me=!1,Df(e,t,n);me=!!(e.flags&131072)}else me=!1,U&&t.flags&1048576&&Nu(t,tl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ar(e,t),e=t.pendingProps;var l=un(t,ae.current);on(t,n),l=Lo(null,t,r,e,l,n);var i=Io();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ge(r)?(i=!0,Jr(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Co(t),l.updater=Sl,t.stateNode=l,l._reactInternals=t,Oi(t,r,e,n),t=Ui(null,t,r,!0,i,n)):(t.tag=0,U&&i&&wo(t),se(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ar(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=Xf(r),e=Re(r,e),l){case 0:t=Fi(null,t,r,e,n);break e;case 1:t=Za(null,t,r,e,n);break e;case 11:t=Ya(null,t,r,e,n);break e;case 14:t=Xa(null,t,r,Re(r.type,e),n);break e}throw Error(x(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Re(r,l),Fi(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Re(r,l),Za(e,t,r,l,n);case 3:e:{if(nc(t),e===null)throw Error(x(387));r=t.pendingProps,i=t.memoizedState,l=i.element,Tu(e,t),ll(t,r,null,n);var o=t.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=pn(Error(x(423)),t),t=qa(e,t,r,n,l);break e}else if(r!==l){l=pn(Error(x(424)),t),t=qa(e,t,r,n,l);break e}else for(we=gt(t.stateNode.containerInfo.firstChild),ke=t,U=!0,Ae=null,n=Cu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(cn(),r===l){t=lt(e,t,n);break e}se(e,t,r,n)}t=t.child}return t;case 5:return Pu(t),e===null&&Mi(t),r=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,o=l.children,Ti(r,l)?o=null:i!==null&&Ti(r,i)&&(t.flags|=32),tc(e,t),se(e,t,o,n),t.child;case 6:return e===null&&Mi(t),null;case 13:return rc(e,t,n);case 4:return _o(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=dn(t,null,r,n):se(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Re(r,l),Ya(e,t,r,l,n);case 7:return se(e,t,t.pendingProps,n),t.child;case 8:return se(e,t,t.pendingProps.children,n),t.child;case 12:return se(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,i=t.memoizedProps,o=l.value,O(nl,r._currentValue),r._currentValue=o,i!==null)if(Be(i.value,o)){if(i.children===l.children&&!he.current){t=lt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){o=i.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=et(-1,n&-n),s.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var g=c.pending;g===null?s.next=s:(s.next=g.next,g.next=s),c.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),Di(i.return,n,t),a.lanes|=n;break}s=s.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(x(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Di(o,n,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}se(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,on(t,n),l=be(l),r=r(l),t.flags|=1,se(e,t,r,n),t.child;case 14:return r=t.type,l=Re(r,t.pendingProps),l=Re(r.type,l),Xa(e,t,r,l,n);case 15:return Ju(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Re(r,l),Ar(e,t),t.tag=1,ge(r)?(e=!0,Jr(t)):e=!1,on(t,n),Xu(t,r,l),Oi(t,r,l,n),Ui(null,t,r,!0,e,n);case 19:return lc(e,t,n);case 22:return ec(e,t,n)}throw Error(x(156,t.tag))};function wc(e,t){return Ks(e,t)}function Yf(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Te(e,t,n,r){return new Yf(e,t,n,r)}function Vo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Xf(e){if(typeof e=="function")return Vo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ao)return 11;if(e===so)return 14}return 2}function wt(e,t){var n=e.alternate;return n===null?(n=Te(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function $r(e,t,n,r,l,i){var o=2;if(r=e,typeof e=="function")Vo(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Ht:return It(n.children,l,i,t);case oo:o=8,l|=8;break;case ai:return e=Te(12,n,t,l|2),e.elementType=ai,e.lanes=i,e;case si:return e=Te(13,n,t,l),e.elementType=si,e.lanes=i,e;case ui:return e=Te(19,n,t,l),e.elementType=ui,e.lanes=i,e;case Ps:return zl(n,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case _s:o=10;break e;case Ts:o=9;break e;case ao:o=11;break e;case so:o=14;break e;case at:o=16,r=null;break e}throw Error(x(130,e==null?e:typeof e,""))}return t=Te(o,n,t,l),t.elementType=e,t.type=r,t.lanes=i,t}function It(e,t,n,r){return e=Te(7,e,r,t),e.lanes=n,e}function zl(e,t,n,r){return e=Te(22,e,r,t),e.elementType=Ps,e.lanes=n,e.stateNode={isHidden:!1},e}function ti(e,t,n){return e=Te(6,e,null,t),e.lanes=n,e}function ni(e,t,n){return t=Te(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Zf(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Rl(0),this.expirationTimes=Rl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Rl(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Ho(e,t,n,r,l,i,o,a,s){return e=new Zf(e,t,n,a,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Te(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Co(i),e}function qf(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Vt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function kc(e){if(!e)return St;e=e._reactInternals;e:{if(Ut(e)!==e||e.tag!==1)throw Error(x(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ge(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(x(171))}if(e.tag===1){var n=e.type;if(ge(n))return ku(e,n,t)}return t}function Sc(e,t,n,r,l,i,o,a,s){return e=Ho(n,r,!0,e,l,i,o,a,s),e.context=kc(null),n=e.current,r=ue(),l=xt(n),i=et(r,l),i.callback=t??null,vt(n,i,l),e.current.lanes=l,or(e,l,r),ve(e,r),e}function El(e,t,n,r){var l=t.current,i=ue(),o=xt(l);return n=kc(n),t.context===null?t.context=n:t.pendingContext=n,t=et(i,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=vt(l,t,o),e!==null&&($e(e,l,o,i),Dr(e,l,o)),o}function fl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ss(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Wo(e,t){ss(e,t),(e=e.alternate)&&ss(e,t)}function Jf(){return null}var Nc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Qo(e){this._internalRoot=e}Cl.prototype.render=Qo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(x(409));El(e,t,null,null)};Cl.prototype.unmount=Qo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;At(function(){El(null,e,null,null)}),t[nt]=null}};function Cl(e){this._internalRoot=e}Cl.prototype.unstable_scheduleHydration=function(e){if(e){var t=eu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ut.length&&t!==0&&t<ut[n].priority;n++);ut.splice(n,0,e),n===0&&nu(e)}};function Ko(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function _l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function us(){}function ep(e,t,n,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var c=fl(o);i.call(c)}}var o=Sc(t,r,e,0,null,!1,!1,"",us);return e._reactRootContainer=o,e[nt]=o.current,Xn(e.nodeType===8?e.parentNode:e),At(),o}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var a=r;r=function(){var c=fl(s);a.call(c)}}var s=Ho(e,0,!1,null,null,!1,!1,"",us);return e._reactRootContainer=s,e[nt]=s.current,Xn(e.nodeType===8?e.parentNode:e),At(function(){El(t,s,n,r)}),s}function Tl(e,t,n,r,l){var i=n._reactRootContainer;if(i){var o=i;if(typeof l=="function"){var a=l;l=function(){var s=fl(o);a.call(s)}}El(t,o,e,l)}else o=ep(n,t,e,l,r);return fl(o)}qs=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Pn(t.pendingLanes);n!==0&&(fo(t,n|1),ve(t,K()),!(I&6)&&(mn=K()+500,zt()))}break;case 13:At(function(){var r=rt(e,1);if(r!==null){var l=ue();$e(r,e,1,l)}}),Wo(e,1)}};po=function(e){if(e.tag===13){var t=rt(e,134217728);if(t!==null){var n=ue();$e(t,e,134217728,n)}Wo(e,134217728)}};Js=function(e){if(e.tag===13){var t=xt(e),n=rt(e,t);if(n!==null){var r=ue();$e(n,e,t,r)}Wo(e,t)}};eu=function(){return R};tu=function(e,t){var n=R;try{return R=e,t()}finally{R=n}};xi=function(e,t,n){switch(t){case"input":if(fi(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=xl(r);if(!l)throw Error(x(90));Ls(r),fi(r,l)}}}break;case"textarea":Ms(e,n);break;case"select":t=n.value,t!=null&&tn(e,!!n.multiple,t,!1)}};$s=Uo;Bs=At;var tp={usingClientEntryPoint:!1,Events:[sr,Gt,xl,Fs,Us,Uo]},Cn={findFiberByHostInstance:Tt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},np={bundleType:Cn.bundleType,version:Cn.version,rendererPackageName:Cn.rendererPackageName,rendererConfig:Cn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:it.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ws(e),e===null?null:e.stateNode},findFiberByHostInstance:Cn.findFiberByHostInstance||Jf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _r=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_r.isDisabled&&_r.supportsFiber)try{hl=_r.inject(np),Ke=_r}catch{}}Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tp;Ne.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ko(t))throw Error(x(200));return qf(e,t,null,n)};Ne.createRoot=function(e,t){if(!Ko(e))throw Error(x(299));var n=!1,r="",l=Nc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Ho(e,1,!1,null,null,n,!1,r,l),e[nt]=t.current,Xn(e.nodeType===8?e.parentNode:e),new Qo(t)};Ne.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(x(188)):(e=Object.keys(e).join(","),Error(x(268,e)));return e=Ws(t),e=e===null?null:e.stateNode,e};Ne.flushSync=function(e){return At(e)};Ne.hydrate=function(e,t,n){if(!_l(t))throw Error(x(200));return Tl(null,e,t,!0,n)};Ne.hydrateRoot=function(e,t,n){if(!Ko(e))throw Error(x(405));var r=n!=null&&n.hydratedSources||null,l=!1,i="",o=Nc;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Sc(t,null,e,1,n??null,l,!1,i,o),e[nt]=t.current,Xn(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new Cl(t)};Ne.render=function(e,t,n){if(!_l(t))throw Error(x(200));return Tl(null,e,t,!1,n)};Ne.unmountComponentAtNode=function(e){if(!_l(e))throw Error(x(40));return e._reactRootContainer?(At(function(){Tl(null,null,e,!1,function(){e._reactRootContainer=null,e[nt]=null})}),!0):!1};Ne.unstable_batchedUpdates=Uo;Ne.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!_l(n))throw Error(x(200));if(e==null||e._reactInternals===void 0)throw Error(x(38));return Tl(e,t,n,!1,r)};Ne.version="18.3.1-next-f1338f8080-20240426";function jc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(jc)}catch(e){console.error(e)}}jc(),js.exports=Ne;var rp=js.exports,cs=rp;ii.createRoot=cs.createRoot,ii.hydrateRoot=cs.hydrateRoot;/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lp=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),zc=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ip={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const op=D.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:l="",children:i,iconNode:o,...a},s)=>D.createElement("svg",{ref:s,...ip,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:zc("lucide",l),...a},[...o.map(([c,g])=>D.createElement(c,g)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ye=(e,t)=>{const n=D.forwardRef(({className:r,...l},i)=>D.createElement(op,{ref:i,iconNode:t,className:zc(`lucide-${lp(e)}`,r),...l}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ap=Ye("Cloud",[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sp=Ye("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const up=Ye("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qi=Ye("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Go=Ye("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cp=Ye("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ec=Ye("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dp=Ye("Monitor",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fp=Ye("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pp=Ye("Youtube",[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]]),ds=6500,Br=3e3,Fe={name:"Vishnu Nair",tagline:"I build reliable systems and developer tools — low-latency services, tidy APIs, and data platforms that ship.",email:"nairvishnumail@gmail.com",socials:{github:"https://github.com/vvnu0",linkedin:"https://linkedin.com/in/vishnunair0/"},introVideo:{src:"/intro-video.mp4",poster:"/intro-poster.jpg"}},mp=[{title:"SharprAI – Real-Time Video Upscaler",description:"Browser extension + cloud pipeline that upscales video segments in near real-time using HLS.",year:2025,stack:["TypeScript","Chrome Ext","AWS","HLS"],image:"https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop",link:"https://github.com/vvnu0/SharprAI",metrics:[8,12,9,14,18,21,19,24,28,33,29,35],outcome:"30% smoother playback at 1.5× bitrate; 200ms median segment latency"},{title:"Cornell Wex - Law Assistant",description:"An AI assistant aiming to improve the Legal Information Institute's (LII) Wex legal dictionary and encyclopedia. Uses RAG to answer questions and improve the quality of the Wex database.",year:2024,stack:["Python","FastAPI","RAG","Postgres"],image:"https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop",link:"https://github.com/yl3698/Hackathon",metrics:[2,4,6,5,9,12,11,15,16,18,22,25],outcome:"Cut advising backlog by ~25% in pilot; NPS +34"},{title:"Redis-Compatible KV Store",description:"In-memory key-value store implementing RESP with a focus on correctness and benchmarks.",year:2024,stack:["C","RESP","Unix Sockets"],image:"https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop",link:"https://docs.google.com/presentation/d/1g30xRxu8NydZxubn_knU5c3w4Xsnj66fYI2gSlSdnoE/edit?slide=id.p#slide=id.p",metrics:[1,3,5,8,13,21,34,29,31,28,36,40],outcome:">1.2M ops/s on M2 — 99p latency under 4ms"},{title:"CardCamel – Terminal Flashcard App",description:"OCaml-powered, terminal-based flashcard app with decks, CSV import, quizzes, and arcade-style study games.",year:2025,stack:["OCaml","Javascript","CSV"],image:"https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=1600&auto=format&fit=crop",link:"https://github.coecis.cornell.edu/ak2488/CS3110_Final_Project?tab=readme-ov-file",videoUrl:"https://www.youtube.com/watch?v=jkB9WCAvKm0",metrics:[3,5,7,10,12,15,18,20,23,25,27,30],outcome:"Keeps studying focused with CLI flashcards, progress tracking, and fast review loops."},{title:"Nasa Research Paper",description:"Analyzes how atmospheric river frequency and associated jet and storm-track changes evolve from past to future climates using NASA GISS-E2.1, GRACE(-FO), and IMERG observations.",year:2024,stack:["ML-ANN, Trees","TensorFlow","Pandas","Matplotlib"],image:"https://images.unsplash.com/photo-1446776811953-b23d57bd21aa",link:"https://docs.google.com/presentation/d/1cfmq9RZVlFw6Qo6D-Tlfabq1SiM15N5T/edit?usp=sharing&ouid=116565074322771346948&rtpof=true&sd=true",metrics:[2,3,4,6,7,9,11,13,15,16,18,20],outcome:"First research on South American glacial melt affecting farmers & West Antartic ice melt."}],hp=[{label:"Resume",href:"/resume.pdf",icon:up},{label:"GitHub",href:Fe.socials.github,icon:Go},{label:"LinkedIn",href:Fe.socials.linkedin,icon:cp},{label:"Email",href:`mailto:${Fe.email}`,icon:Ec}],ri="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition",yn=typeof window<"u"&&typeof document<"u";function $n(e,t){if(yn&&!document.querySelector(`link[data-key="${t}"]`)){const n=document.createElement("link");n.setAttribute("data-key",t),n.rel="stylesheet",n.href=e,document.head.appendChild(n)}}function pl(e,t){return new Promise(n=>{if(!yn||window[t])return n();const r=document.createElement("script");r.src=e,r.async=!0,r.onload=()=>{window[t]=!0,n()},document.body.appendChild(r)})}function gp({text:e,start:t=!1,className:n=""}){const[r,l]=D.useState(e.replace(/[^ ]/g," ")),i=D.useRef(null),o=D.useRef(!1),a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}<>/?|",s=D.useCallback(g=>{const h=performance.now(),m=1800,v=120,w=900;return Array.from({length:g},(k,L)=>h+m+L*v+Math.random()*w)},[]),c=D.useCallback(()=>{if(o.current)return;o.current=!0;const g=e,h=s(g.length),m=v=>{let w=!0,k="";for(let L=0;L<g.length;L++){const f=g[L];if(f===" "){k+=" ";continue}v>=h[L]?k+=f:(w=!1,k+=a[Math.random()*a.length|0])}l(k),w?(l(g),o.current=!1):i.current=requestAnimationFrame(m)};i.current&&cancelAnimationFrame(i.current),i.current=requestAnimationFrame(m)},[e,s,a]);return D.useEffect(()=>(t&&c(),()=>{i.current&&cancelAnimationFrame(i.current)}),[t,c]),u.jsx("span",{className:`cursor-default select-none ${n}`,onMouseEnter:c,onClick:c,"aria-label":e,children:r})}function vp({onDismiss:e,fading:t}){return u.jsxs("div",{className:`fixed inset-0 z-[9999] flex items-center justify-center bg-black intro-overlay ${t?"fade-out":""}`,onClick:e,role:"button",tabIndex:0,onKeyDown:n=>(n.key==="Enter"||n.key===" ")&&e(),"aria-label":"Dismiss intro","data-testid":"intro-overlay",children:[u.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css?family=Lato:300,400,700|Dosis:200,400,600');
        .intro-overlay { opacity: 1; transition: opacity ${Br}ms ease; }
        .intro-overlay.fade-out { opacity: 0; }
        .intro-title {
          font-family: Dosis, sans-serif; font-weight: 200; position: absolute; text-align: center;
          color: #fff; top: 50%; width: 100%; margin-top: -55px; text-transform: uppercase;
          letter-spacing: 1px; transform-style: preserve-3d; transform: translate3d(0,0,0); opacity: 0;
          animation: introAnim 3.2s ease-out forwards 1s;
        }
        .intro-title strong { display: block; font-weight: 400; }
        @keyframes introAnim {
          0% { text-shadow: 0 0 50px #fff; letter-spacing: 80px; opacity: 0; transform: rotateY(-90deg); }
          50% { text-shadow: 0 0 1px #fff; opacity: 0.8; transform: rotateY(0deg); }
          75% { text-shadow: 0 0 1px #fff; opacity: 0.8; transform: rotateY(0deg) translateZ(60px); }
          100% { text-shadow: 0 0 1px #fff; opacity: 0.8; letter-spacing: 8px; transform: rotateY(0deg) translateZ(100px); }
        }
      `}),u.jsxs("h1",{className:"intro-title",children:["Welcome ",u.jsx("strong",{children:"stranger"})]}),u.jsx("p",{className:"pointer-events-none absolute bottom-6 right-6 text-xs text-zinc-300 opacity-80",children:"Press to skip"})]})}function fs({children:e}){return u.jsx("span",{className:"inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/40 dark:supports-[backdrop-filter]:bg-white/5 border-zinc-200 text-zinc-700 dark:border-zinc-800 dark:text-zinc-300",children:e})}function Tr({id:e,title:t,children:n,hint:r}){return u.jsx("section",{id:e,className:"scroll-mt-24 py-16 md:py-24",children:u.jsxs("div",{className:"mx-auto max-w-5xl px-4",children:[u.jsxs("div",{className:"mb-8 flex items-end justify-between gap-4",children:[u.jsx("h2",{className:"text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100",children:t}),r?u.jsx("span",{className:"text-xs text-zinc-500 dark:text-zinc-400",children:r}):null]}),n]})})}function yp({values:e}){const t=D.useMemo(()=>{if(!e||e.length===0)return"";const n=120,r=40,l=2,i=2,o=Math.min(...e),s=Math.max(...e)-o||1,c=e.length;return e.map((g,h)=>{const m=c===1?.5:h/(c-1),v=l+m*(n-2*l),w=(g-o)/s,k=r-i-w*(r-2*i);return`${v},${k}`}).join(" ")},[e]);return t?u.jsx("svg",{width:120,height:40,viewBox:"0 0 120 40","aria-label":"small trend chart",children:u.jsx("polyline",{fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinejoin:"round",strokeLinecap:"round",points:t})}):u.jsx("svg",{width:120,height:40,"aria-label":"flat sparkline",children:u.jsx("line",{x1:2,y1:20,x2:118,y2:20,stroke:"currentColor",strokeWidth:1,strokeOpacity:.3})})}function xp(e){return u.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",...e,children:[u.jsx("rect",{x:"4",y:"3",width:"14",height:"18",rx:"2",ry:"2",fill:"#F4B400"}),u.jsx("rect",{x:"7",y:"8",width:"8",height:"6",rx:"1",ry:"1",fill:"#FDE293"}),u.jsx("rect",{x:"7",y:"15",width:"5",height:"1.5",fill:"#FDE293"})]})}function wp(){const[e,t]=D.useState("frontend"),[n,r]=D.useState(null),l=[{id:"frontend",title:"Frontend & UX",blurb:"Turning ideas into responsive, accessible interfaces that feel fast and predictable.",tech:["React","TypeScript","Tailwind CSS","Vite","Next.js"],icon:dp,accent:"from-sky-500/40 to-cyan-500/20"},{id:"backend",title:"APIs & Services",blurb:"Designing clear APIs and services that stay boring in production: predictable latency, good logs, and simple failure modes.",tech:["Python","FastAPI","Node.js","PostgreSQL","REST / JSON"],icon:sp,accent:"from-emerald-500/35 to-teal-500/20"},{id:"data",title:"Data, ML & Analytics",blurb:"Building data flows and models that are explainable, inspectable, and actually used by downstream features.",tech:["TensorFlow","Pandas","Matplotlib","RAG","GRACE / IMERG datasets"],icon:fp,accent:"from-amber-400/45 to-orange-500/25"},{id:"infra",title:"Infrastructure & Tooling",blurb:"Keeping projects deployable with small, well-scoped bits of infra and automation rather than giant platforms.",tech:["AWS","Docker","GitHub Actions","Nginx","Linux"],icon:ap,accent:"from-indigo-500/40 to-purple-500/25"}],i=l.find(a=>a.id===e)??l[0],o={frontend:[{company:"Coinbase",line:"ATO monitoring dashboard · real-time triage UX · anomaly drill-downs · on-call workflows.",color:"text-sky-400"},{company:"NASA",line:"Interactive scientific dashboards · Plotly Dash · exploratory model validation.",color:"text-emerald-400"},{company:"Strategy of Things",line:"React web app · user journeys · usability-driven frontend design.",color:"text-amber-400"}],backend:[{company:"NumberOne AI",line:"Go REST APIs · LLM safety services · few-shot pipelines · cloud-deployed microservices.",color:"text-indigo-300"},{company:"Coinbase",line:"Fraud review service · low-latency decision pipeline · retrieval + model inference.",color:"text-sky-400"}],data:[{company:"Coinbase",line:"Fraud modeling core · XGBoost + SMOTE · LLM retrieval · production metrics.",color:"text-sky-400"},{company:"Beats by Dre",line:"ETL pipelines · large-scale reviews + commerce data · NLP sentiment models.",color:"text-rose-400"},{company:"NASA",line:"Flood & climate ML · multispectral + SMAP data · statistical modeling.",color:"text-emerald-400"},{company:"MIT",line:"Geospatial forecasting · CNNs for remote sensing · disaster impact prediction.",color:"text-violet-400"}],infra:[{company:"Coinbase",line:"ML orchestration stack · Kafka · Airflow · feature stores · Ray · alerting pipelines.",color:"text-sky-400"},{company:"NumberOne AI",line:"Kubernetes · Docker · GitLab CI/CD · microservices · serverless deployment.",color:"text-indigo-300"},{company:"Beats by Dre",line:"Airflow-backed analytics infra · reproducible, production ETL.",color:"text-rose-400"}]};return u.jsx("section",{"aria-label":"Full-stack experience",className:"mt-16",children:u.jsxs("div",{className:"max-w-5xl",children:[u.jsx("div",{className:"text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400",children:"Stacks I've touched"}),u.jsx("p",{className:"mt-1 text-xs text-zinc-600 dark:text-zinc-400",children:"From frontend to infra. Click a layer of the stack to see where and when I've shipped the most."}),u.jsxs("div",{className:"mt-6 grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]",children:[u.jsxs("div",{className:"relative space-y-3",children:[u.jsx("div",{className:"pointer-events-none absolute inset-x-6 top-3 bottom-6 hidden lg:block",children:u.jsx("div",{className:"mx-auto h-full w-px bg-gradient-to-b from-zinc-700/60 via-zinc-600/40 to-transparent"})}),l.map((a,s)=>{const c=a.id===e,g=a.icon;return u.jsx("button",{type:"button",onClick:()=>t(a.id),className:`group relative w-full rounded-2xl border bg-gradient-to-br p-3 text-left transition duration-300 hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${c?`border-indigo-400/70 shadow-lg shadow-indigo-500/40 ${a.accent}`:"border-zinc-700/70 from-zinc-950/90 to-zinc-900/70"}`,style:{transform:`translateZ(${c?8:0}px) translateY(${c?-4:6*s}px)`},children:u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx("div",{className:`flex h-9 w-9 items-center justify-center rounded-xl border text-zinc-50 ${c?"border-white/80 bg-white/10":"border-zinc-600 bg-zinc-900/80"}`,children:u.jsx(g,{className:"h-4 w-4"})}),u.jsxs("div",{className:"flex flex-1 items-center justify-between gap-3",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-zinc-400",children:[s===0&&"Frontend",s===1&&"Backend",s===2&&"Data & ML",s===3&&"Infra"]}),u.jsx("div",{className:"mt-0.5 text-sm font-medium text-zinc-50",children:a.title})]}),u.jsx("div",{className:`h-8 w-8 rounded-full border text-[0.6rem] font-semibold uppercase tracking-[0.16em] flex items-center justify-center ${c?"border-indigo-300/80 bg-indigo-500/30 text-indigo-50":"border-zinc-600 bg-zinc-900/80 text-zinc-300"}`,children:s+1})]})]})},a.id)})]}),u.jsxs("div",{className:"rounded-2xl border border-zinc-200 bg-white/80 p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/70",children:[u.jsx("div",{className:"text-xs font-semibold uppercase tracking-[0.2em] text-indigo-500",children:i.title}),u.jsx("p",{className:"mt-2 text-sm text-zinc-700 dark:text-zinc-300",children:i.blurb}),u.jsxs("div",{className:"mt-4",children:[u.jsx("div",{className:"text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-zinc-400",children:"Where I've used this: Click the name & learn more!"}),u.jsx("div",{className:"mt-2 flex flex-wrap gap-2 text-xs",children:o[i.id].map(a=>{const s=n&&n.area===i.id&&n.company===a.company;return u.jsx("button",{type:"button",onClick:()=>r(c=>c&&c.area===i.id&&c.company===a.company?null:{area:i.id,company:a.company,line:a.line,color:a.color}),className:`rounded-full border px-2.5 py-1 text-[0.7rem] font-medium transition hover:-translate-y-0.5 hover:shadow-sm ${s?"border-indigo-400 bg-indigo-50 text-indigo-700 dark:border-indigo-400 dark:bg-indigo-500/10 dark:text-indigo-200":"border-zinc-300 text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800"}`,children:u.jsx("span",{className:`underline-offset-2 ${a.color}`,children:a.company})},`${i.id}-${a.company}`)})}),n&&n.area===i.id&&u.jsxs("div",{className:"mt-3 rounded-xl border border-zinc-200 bg-zinc-50/90 p-3 text-[0.7rem] leading-relaxed text-zinc-700 shadow-sm dark:border-zinc-700 dark:bg-zinc-900/90 dark:text-zinc-200",children:[u.jsxs("div",{className:"flex items-center justify-between gap-2",children:[u.jsx("span",{className:`font-semibold ${n.color}`,children:n.company}),u.jsx("button",{type:"button",onClick:()=>r(null),className:"rounded-full px-2 py-0.5 text-[0.65rem] text-zinc-500 hover:bg-zinc-200/80 dark:text-zinc-300 dark:hover:bg-zinc-800",children:"Close"})]}),u.jsx("ul",{className:"mt-2 list-disc space-y-1 pl-4",children:n.line.split("·").map(a=>a.trim()).filter(Boolean).map(a=>u.jsx("li",{children:a},a))})]})]})]})]})]})})}function kp({p:e,onOpenSlides:t,onOpenVideo:n}){const r=e.link.includes("github.com")||e.link.includes("github.coecis.cornell.edu"),l=e.link.includes("docs.google.com/presentation"),i=!!e.videoUrl,o=l?xp:i?pp:r?Go:qi,a=s=>{if(l&&t){s.preventDefault(),t(e.link);return}i&&n&&e.videoUrl&&(s.preventDefault(),n({youtubeUrl:e.videoUrl,githubUrl:e.link,title:e.title}))};return u.jsxs("a",{href:e.link,target:"_blank",rel:"noreferrer noopener",onClick:a,className:"group relative block overflow-hidden rounded-2xl border border-zinc-200 bg-white/70 p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 dark:border-zinc-800 dark:bg-zinc-900/60",children:[u.jsxs("div",{className:"flex gap-4",children:[u.jsx("div",{className:"relative h-24 w-36 shrink-0 overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800",children:u.jsx("img",{src:e.image,alt:`${e.title} thumbnail`,className:"h-full w-full object-cover transition-transform duration-300 group-hover:scale-105",loading:"lazy"})}),u.jsxs("div",{className:"min-w-0 flex-1",children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("h3",{className:"truncate text-base font-semibold text-zinc-900 dark:text-zinc-100",children:e.title}),u.jsx(fs,{children:e.year})]}),u.jsx("p",{className:"mt-1 line-clamp-2 text-sm text-zinc-600 dark:text-zinc-400",children:e.description}),u.jsxs("div",{className:"mt-3 flex items-center justify-between",children:[u.jsx("div",{className:"flex flex-wrap gap-1.5",children:e.stack.map(s=>u.jsx(fs,{children:s},s))}),u.jsx(yp,{values:e.metrics})]}),u.jsx("p",{className:"mt-2 text-xs text-emerald-600 dark:text-emerald-400",children:e.outcome})]})]}),u.jsx(o,{className:"absolute right-3 bottom-3 h-4 w-4 text-zinc-400 transition group-hover:text-zinc-600 dark:text-zinc-500 dark:group-hover:text-zinc-300","aria-hidden":!0})]})}function Sp(){return D.useEffect(()=>{if(!yn)return;$n("https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.4/css/all.min.css","fa5-css");let e=!1,t=null,n=null,r;const l=window;if(l.__vvnu0_music_player_initialized)return;l.__vvnu0_music_player_initialized=!0;const i=async()=>{if(await pl("https://code.jquery.com/jquery-3.7.1.min.js","jquery-3-7-1-loaded"),e)return;const o=window.jQuery||window.$;if(!o)return;const a=o("#player-track"),s=o("#player-bg-artwork"),c=o("#album-name"),g=o("#track-name"),h=o("#album-art"),m=o("#seek-bar-container"),v=o("#seek-bar"),w=o("#track-time"),k=o("#seek-time"),L=o("#s-hover"),f=o("#play-pause-button"),d=o("#current-time"),p=o("#track-length"),y=o("#play-previous"),N=o("#play-next"),z=["Tip Toe","Harvey","Invincible","Sunflower","Mona Lisa"],E=["HYBS - Tip Toe","Her's - Harvey","OneRepublic - Invincible","Post Malone - Sunflower","Val Fritz & Peter Fenn - Mona Lisa"],C=["_1","_2","_3","_4","_5"],$=["https://raw.githubusercontent.com/vvnu0/vvnu0.github.io/main/public/TipToe.mp3","https://raw.githubusercontent.com/vvnu0/vvnu0.github.io/main/public/Harvey.mp3","https://raw.githubusercontent.com/vvnu0/vvnu0.github.io/main/public/Invincible.mp3","https://raw.githubusercontent.com/vvnu0/vvnu0.github.io/main/public/Sunflower.mp3","https://raw.githubusercontent.com/vvnu0/vvnu0.github.io/main/public/MonaLisa.mp3"];let P,ee=f.find("i"),Ie=0,Ve=0,xn,cr=0,ze,Me,S,_,T,M,W=0,Ee,fe=0,$t=!1,Z=-1,Et,Yo,dr;const Xo=()=>{n&&setTimeout(()=>{n&&(n.paused?(a.addClass("active"),h.addClass("active"),Jo(),ee.attr("class","fas fa-pause"),n.play()):(a.removeClass("active"),h.removeClass("active"),clearInterval(t),h.removeClass("buffering"),ee.attr("class","fas fa-play"),n.pause()))},300)},Cc=ye=>{!n||!n.duration||(xn=m.offset(),Ie=ye.clientX-xn.left,Ve=n.duration*(Ie/m.outerWidth()),L.width(Ie),cr=Ve/60,ze=Math.floor(cr),Me=Math.floor(Ve-ze*60),!(ze<0||Me<0)&&(ze<10&&(ze="0"+ze),Me<10&&(Me="0"+Me),isNaN(ze)||isNaN(Me)?k.text("--:--"):k.text(ze+":"+Me),k.css({left:Ie,"margin-left":"-21px"}).fadeIn(0)))},Zo=()=>{L.width(0),k.text("00:00").css({left:"0px","margin-left":"0px"}).fadeOut(0)},_c=()=>{n&&(n.currentTime=Ve,v.width(Ie),Zo())},qo=()=>{!n||!n.duration||(fe=new Date,fe=fe.getTime(),$t||($t=!0,w.addClass("active")),S=Math.floor(n.currentTime/60),_=Math.floor(n.currentTime-S*60),T=Math.floor(n.duration/60),M=Math.floor(n.duration-T*60),W=n.currentTime/n.duration*100,S<10&&(S="0"+S),_<10&&(_="0"+_),T<10&&(T="0"+T),M<10&&(M="0"+M),isNaN(S)||isNaN(_)?d.text("00:00"):d.text(S+":"+_),isNaN(T)||isNaN(M)?p.text("00:00"):p.text(T+":"+M),isNaN(S)||isNaN(_)||isNaN(T)||isNaN(M)?w.removeClass("active"):w.addClass("active"),v.width(W+"%"),W===100&&(ee.attr("class","fa fa-play"),v.width(0),d.text("00:00"),h.removeClass("buffering").removeClass("active"),clearInterval(t)))},Jo=()=>{clearInterval(t),t=setInterval(()=>{fe===0||Ee-fe>1e3?h.addClass("buffering"):h.removeClass("buffering"),Ee=new Date,Ee=Ee.getTime()},100)},Pl=ye=>{var ea,ta;ye===0||ye===1?++Z:--Z,Z>-1&&Z<C.length?(ye===0?ee.attr("class","fa fa-play"):(h.removeClass("buffering"),ee.attr("class","fa fa-pause")),v.width(0),w.removeClass("active"),d.text("00:00"),p.text("00:00"),Et=z[Z],Yo=E[Z],dr=C[Z],n||(n=new Audio),n.src=$[Z],fe=0,Ee=new Date,Ee=Ee.getTime(),ye!==0&&(n.play(),a.addClass("active"),h.addClass("active"),clearInterval(t),Jo()),c.text(Et),g.text(Yo),h.find("img.active").removeClass("active"),"#"+dr&&((ea=document.getElementById(dr))==null||ea.classList.add("active")),P=(ta=document.getElementById(dr))==null?void 0:ta.src,P&&s.css({"background-image":"url("+P+")"})):ye===0||ye===1?--Z:++Z};return(()=>{n=new Audio,Pl(0),n&&(n.loop=!1,f.on("click",Xo),m.on("mousemove",ye=>Cc(ye.originalEvent)),m.on("mouseout",Zo),m.on("click",_c),o(n).on("timeupdate",qo),y.on("click",()=>Pl(-1)),N.on("click",()=>Pl(1)))})(),()=>{var ye;n&&((ye=n.pause)==null||ye.call(n),o(n).off("timeupdate",qo)),f.off("click",Xo),m.off("mousemove"),m.off("mouseout"),m.off("click"),y.off("click"),N.off("click"),clearInterval(t)}};return(async()=>{const o=await i();e?(o&&o(),l.__vvnu0_music_player_initialized=!1):r=o})(),()=>{if(e=!0,clearInterval(t),r)try{r()}catch{}else l.__vvnu0_music_player_initialized=!1}},[]),u.jsxs("div",{className:"relative flex w-full justify-center md:justify-end",children:[u.jsx("style",{children:`
        #player-container {
          width: 430px;
          height: 100px;
          margin: 0 auto;
        }
        #player-bg-artwork,
        #player-bg-layer {
          display: none !important;
        }
        #player {
          position: relative;
          height: 100%;
          z-index: 3;
        }
        #player-track {
          position: absolute;
          top: 0;
          right: 15px;
          left: 15px;
          padding: 13px 22px 10px 184px;
          background-color: #000;
          border-radius: 15px 15px 0 0;
          transition: 0.3s ease top;
          z-index: 1;
        }
        #player-track.active {
          top: -92px;
        }
        #album-name {
          color: #ffffff;
          font-size: 17px;
          font-weight: bold;
        }
        #track-name {
          color: #dddddd;
          font-size: 13px;
          margin: 2px 0 13px 0;
        }
        #track-time {
          height: 12px;
          margin-bottom: 3px;
          overflow: hidden;
        }
        #current-time {
          float: left;
        }
        #track-length {
          float: right;
        }
        #current-time,
        #track-length {
          color: transparent;
          font-size: 11px;
          background-color: #ffe8ee;
          border-radius: 10px;
          transition: 0.3s ease all;
        }
        #track-time.active #current-time,
        #track-time.active #track-length {
          color: #f86d92;
          background-color: transparent;
        }
        #seek-bar-container,
        #seek-bar {
          position: relative;
          height: 4px;
          border-radius: 4px;
        }
        #seek-bar-container {
          background-color: #ffe8ee;
          cursor: pointer;
        }
        #seek-time {
          position: absolute;
          top: -29px;
          color: #fff;
          font-size: 12px;
          white-space: pre;
          padding: 5px 6px;
          border-radius: 4px;
          display: none;
        }
        #s-hover {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          opacity: 0.2;
          z-index: 2;
        }
        #seek-time,
        #s-hover {
          background-color: #3b3d50;
        }
        #seek-bar {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          width: 0;
          background-color: #fd6d94;
          transition: 0.2s ease width;
          z-index: 1;
        }
        #player-content {
          position: relative;
          height: 100%;
          background-color: #000;
          border: 2px solid #fff;
          box-shadow: 0 30px 80px rgba(255, 255, 255, 0.25);
          border-radius: 15px;
          z-index: 2;
        }
        #album-art {
          position: absolute;
          top: -40px;
          width: 115px;
          height: 115px;
          margin-left: 40px;
          transform: rotateZ(0);
          transition: 0.3s ease all;
          box-shadow: 0 0 0 10px #fff;
          border-radius: 50%;
          overflow: hidden;
        }
        #album-art.active {
          top: -60px;
          box-shadow: 0 0 0 4px #fff7f7, 0 30px 50px -15px rgba(255, 255, 255, 0.35);
        }
        #album-art:before {
          content: "";
          position: absolute;
          top: 50%;
          right: 0;
          left: 0;
          width: 20px;
          height: 20px;
          margin: -10px auto 0 auto;
          background-color: #d6dee7;
          border-radius: 50%;
          box-shadow: inset 0 0 0 2px #fff;
          z-index: 2;
        }
        #album-art img {
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          z-index: -1;
        }
        #album-art img.active {
          opacity: 1;
          z-index: 1;
        }
        #album-art.active img.active {
          z-index: 1;
          animation: rotateAlbumArt 3s linear 0s infinite forwards;
        }
        @keyframes rotateAlbumArt {
          0% {
            transform: rotateZ(0);
          }
          100% {
            transform: rotateZ(360deg);
          }
        }
        #buffer-box {
          position: absolute;
          top: 50%;
          right: 0;
          left: 0;
          height: 13px;
          color: #1f1f1f;
          font-size: 13px;
          text-align: center;
          font-weight: bold;
          line-height: 1;
          padding: 6px;
          margin: -12px auto 0 auto;
          background-color: rgba(255, 255, 255, 0.19);
          opacity: 0;
          z-index: 2;
        }
        #album-art img,
        #buffer-box {
          transition: 0.1s linear all;
        }
        #album-art.buffering img {
          opacity: 0.25;
        }
        #album-art.buffering img.active {
          opacity: 0.8;
          filter: blur(2px);
        }
        #album-art.buffering #buffer-box {
          opacity: 1;
        }
        #player-controls {
          width: 250px;
          height: 100%;
          margin: 0 5px 0 141px;
          float: right;
          overflow: hidden;
        }
        .control {
        width: 33.333%;
        float: left;
        padding: 12px 0;

        /* center the button inside each column */
        display: flex;
        justify-content: center;
        align-items: center;
        }

        .button {
        /* make the visual square itself centered and even */
        width: 72px;
        height: 72px;
        padding: 0;
        margin: 0 auto;

        display: flex;
        align-items: center;
        justify-content: center;

        background-color: #111;
        border-radius: 16px;
        cursor: pointer;
        }

        .button i {
        display: block;
        color: #ffffff;
        font-size: 26px;
        line-height: 1;
        text-align: center;
        }
        .button,
        .button i {
          transition: 0.2s ease all;
        }
        .button:hover {
          background-color: #333;
        }
        .button:hover i {
          color: #fff;
        }
      `}),u.jsxs("div",{id:"player-container",children:[u.jsx("div",{id:"player-bg-artwork"}),u.jsx("div",{id:"player-bg-layer"}),u.jsxs("div",{id:"player",children:[u.jsxs("div",{id:"player-track",children:[u.jsx("div",{id:"album-name"}),u.jsx("div",{id:"track-name"}),u.jsxs("div",{id:"track-time",children:[u.jsx("div",{id:"current-time"}),u.jsx("div",{id:"track-length"})]}),u.jsxs("div",{id:"seek-bar-container",children:[u.jsx("div",{id:"seek-time"}),u.jsx("div",{id:"s-hover"}),u.jsx("div",{id:"seek-bar"})]})]}),u.jsxs("div",{id:"player-content",children:[u.jsxs("div",{id:"album-art",children:[u.jsx("img",{src:"https://raw.githubusercontent.com/vvnu0/vvnu0.github.io/main/public/tiptoe.jpeg",className:"active",id:"_1"}),u.jsx("img",{src:"https://raw.githubusercontent.com/vvnu0/vvnu0.github.io/main/public/Harvey.jpg",id:"_2"}),u.jsx("img",{src:"https://raw.githubusercontent.com/vvnu0/vvnu0.github.io/main/public/Invincible.jpg",id:"_3"}),u.jsx("img",{src:"https://raw.githubusercontent.com/vvnu0/vvnu0.github.io/main/public/sunflower.jpeg",id:"_4"}),u.jsx("img",{src:"https://raw.githubusercontent.com/vvnu0/vvnu0.github.io/main/public/MonaLisa.jpeg",id:"_5"}),u.jsx("div",{id:"buffer-box",children:"Buffering ..."})]}),u.jsxs("div",{id:"player-controls",children:[u.jsx("div",{className:"control",children:u.jsx("div",{className:"button",id:"play-previous",children:u.jsx("i",{className:"fas fa-backward"})})}),u.jsx("div",{className:"control",children:u.jsx("div",{className:"button",id:"play-pause-button",children:u.jsx("i",{className:"fas fa-play"})})}),u.jsx("div",{className:"control",children:u.jsx("div",{className:"button",id:"play-next",children:u.jsx("i",{className:"fas fa-forward"})})})]})]})]})]})]})}function Np(){return D.useEffect(()=>{if(!yn)return;$n("https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css","swiper-css"),$n("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;600;800&display=swap","fonts-bebas-inter"),$n("https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700;800&family=IBM+Plex+Sans:wght@600;700&family=Oswald:wght@600;700&family=EB+Garamond:wght@600;700&display=swap","fonts-brand-fallbacks");let e=!1;const t=[];return(async()=>{if(await pl("https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js","swiper-js-loaded"),e)return;const r=window.Swiper;if(!r)return;const l=()=>window.innerWidth>767.9;let i=l()?.0285*window.innerWidth:15;["#horizontal-ticker-rtl","#horizontal-ticker-ltr"].forEach((g,h)=>{const m=document.querySelector(g);if(!m)return;const v=new r(m,{loop:!0,slidesPerView:"auto",spaceBetween:i,speed:8e3,allowTouchMove:!1,autoplay:{delay:0,reverseDirection:h===0,disableOnInteraction:!1}});t.push(v)});const o=()=>{i=l()?.0285*window.innerWidth:15,t.forEach(g=>{g.params.spaceBetween=i,g.update()})};window.addEventListener("resize",o);const a=()=>window.removeEventListener("resize",o);t._cleanupResize=a;const s={amazon:{bg:"#CC7A00",text:"#111111"},coinbase:{bg:"#003BB3",text:"#FFFFFF"},NASA:{bg:"#083071",text:"#FFFFFF"},"MIT Lincoln Lab":{bg:"#EDEDED",text:"#002B52"},"Cornell Data Science":{bg:"#5A2FA0",text:"#000000"},"Beats by Dre":{bg:"#B81831",text:"#000000"},"Millennium Management":{bg:"#0026C2",text:"#000000"},"NumberOne AI":{bg:"#0B1220",text:"#FFFFFF"}},c={"Beats by Dre":"'Abeat by Kai', Zarautz, Opificio, Oswald, Montserrat, Inter, system-ui, -apple-system, 'Segoe UI', Arial, sans-serif",amazon:"'Golger Sans Serif', Montserrat, Inter, system-ui, -apple-system, 'Segoe UI', Arial, sans-serif",coinbase:"'Henderson Sans', 'IBM Plex Sans', Inter, system-ui, -apple-system, 'Segoe UI', Arial, sans-serif",NASA:"'Henderson Sans', 'IBM Plex Sans', Inter, system-ui, -apple-system, 'Segoe UI', Arial, sans-serif","Millennium Management":"'Henderson Sans', 'IBM Plex Sans', Inter, system-ui, -apple-system, 'Segoe UI', Arial, sans-serif","Cornell Data Science":"Palatino, 'Palatino Linotype', 'EB Garamond', 'Times New Roman', serif"};document.querySelectorAll(".horizontal-ticker__slide").forEach(g=>{const h=g.getAttribute("data-company")||"",m=g.querySelector(".logo.alt"),v=g.querySelector(".logo"),w=s[h],k=c[h];m&&w&&(m.style.background=w.bg,m.style.color=w.text),k&&(v&&(v.style.fontFamily=k),m&&(m.style.fontFamily=k))})})(),()=>{var r;e=!0,(r=t._cleanupResize)==null||r.call(t),t.forEach(l=>{var i;return(i=l.destroy)==null?void 0:i.call(l)})}},[]),u.jsxs("section",{className:"not-prose",children:[u.jsx("style",{children:`
        .base-template__wrapper { max-width: 100dvw; padding: 64px 20px 60px; box-sizing: border-box; text-align: center; }
        .base-template__title { font-family: 'Bebas Neue', system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif; font-weight: 400; text-transform: uppercase; letter-spacing: 0.12em; margin: 0 0 10px; font-size: clamp(28px, 6vw, 68px); line-height: 0.95; color: #ffffff; text-shadow: 0 2px 8px rgba(0,0,0,.45); }
        .base-template__text { font-family: Inter, system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif; font-weight: 400; opacity: .9; margin-bottom: 36px; line-height: 1.5; font-size: clamp(14px, 2vw, 22px); letter-spacing: 0.02em; color: rgba(255,255,255,0.88); }
        .swiper { width: 100%; }
        .swiper-wrapper { transition-timing-function: linear !important; }
        .horizontal-ticker { margin: 0 -20px; display: flex; flex-direction: column; row-gap: 2.85vw; }
        @media (max-width: 767.9px){ .horizontal-ticker { row-gap: 15px; } }
        .horizontal-ticker__slide { position: relative; width: 15.625vw; aspect-ratio: 300/205; border-radius: 14px; overflow: hidden; backdrop-filter: blur(50px); display: flex; align-items: center; justify-content: center; box-shadow: 0 10px 30px rgba(0,0,0,.35) inset, 0 1px 0 rgba(255,255,255,.06) inset; }
        @media (max-width: 767.9px){ .horizontal-ticker__slide { width: 240px; aspect-ratio: auto; } }
        .horizontal-ticker__slide .logo, .horizontal-ticker__slide .logo.alt { position: absolute; inset: 0; display: grid; place-items: center; padding: 18px; font-weight: 800; text-align: center; line-height: 1.1; font-size: clamp(16px, 1.35vw, 24px); }
        .horizontal-ticker__slide .logo { opacity: 1; transition: opacity .6s ease-out, transform .6s ease-out; color: #e7e7e7; background: rgba(255,255,255,.04); }
        .horizontal-ticker__slide .logo.alt { opacity: 0; transition: opacity .6s ease-out, transform .6s ease-out; color: #fff; background: linear-gradient(180deg, rgba(255,255,255,.10), rgba(255,255,255,.02)); backdrop-filter: blur(60px); }
        @media (hover:hover) and (pointer:fine){ .horizontal-ticker__slide:hover .logo { opacity: 0; transform: scale(1.02); } .horizontal-ticker__slide:hover .logo.alt { opacity: 1; transform: scale(1.02); } }
      `}),u.jsxs("div",{className:"base-template__wrapper",children:[u.jsx("h2",{className:"base-template__title text-3xl md:text-5xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100",children:"Where I've Innovated"}),u.jsx("div",{className:"base-template__text mx-auto max-w-2xl text-zinc-600 dark:text-zinc-400",children:"Places I've worked and interned."}),u.jsx("div",{className:"base-template__content",children:u.jsxs("div",{className:"horizontal-ticker",children:[u.jsx("div",{id:"horizontal-ticker-rtl",className:"swiper horizontal-ticker__slider",children:u.jsx("div",{className:"swiper-wrapper",children:["amazon","coinbase","Millennium Management","Cornell Data Science","amazon","coinbase","Millennium Management","Cornell Data Science"].map((e,t)=>u.jsxs("div",{className:"swiper-slide horizontal-ticker__slide","data-company":e,children:[u.jsx("span",{className:"logo",children:e}),u.jsx("span",{className:"logo alt",children:e})]},`rtl-${t}-${e}`))})}),u.jsx("div",{id:"horizontal-ticker-ltr",className:"swiper horizontal-ticker__slider",children:u.jsx("div",{className:"swiper-wrapper",children:["Beats by Dre","NumberOne AI","NASA","MIT Lincoln Lab","Beats by Dre","NumberOne AI","NASA","MIT Lincoln Lab"].map((e,t)=>u.jsxs("div",{className:"swiper-slide horizontal-ticker__slide","data-company":e,children:[u.jsx("span",{className:"logo",children:e}),u.jsx("span",{className:"logo alt",children:e})]},`ltr-${t}-${e}`))})})]})})]})]})}function jp(){const e=[{label:"Strategic Thinking",value:95},{label:"Decisiveness",value:90},{label:"Leadership",value:90},{label:"Vision-Driven",value:85},{label:"Efficiency Focused",value:80},{label:"Confidence",value:85},{label:"Adaptability",value:70},{label:"Action Oriented",value:92}],t=[{label:"C++",value:5},{label:"HTML",value:3},{label:"Javascript",value:4},{label:"Node.js",value:3},{label:"SQL",value:4},{label:"Python",value:5},{label:"Java",value:5},{label:"CSS",value:1}];return u.jsxs("div",{children:[u.jsx("style",{children:`
  .radar-root {
    --purple: #000000;
    background-color: var(--purple);
    border-radius: 16px;
    padding: 16px;
  }

  .radar-main {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .radar-block {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .radar-heading {
    font-size: 0.75rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    font-weight: 600;
    color: rgba(248, 250, 252, 0.75);
    padding-left: 2px;
    line-height: 1;
  }
`}),u.jsx("div",{className:"radar-root",children:u.jsxs("div",{className:"radar-main",children:[u.jsxs("div",{className:"radar-block",children:[u.jsx("div",{className:"radar-heading",children:"Personality"}),u.jsx("div",{className:"mt-3 space-y-2",children:e.map(n=>u.jsxs("div",{className:"flex items-center justify-between gap-3 text-[0.7rem] text-slate-100/90",children:[u.jsx("span",{className:"min-w-0 flex-1 truncate pr-2",children:n.label}),u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("div",{className:"h-1.5 w-28 overflow-hidden rounded-full bg-white/10",children:u.jsx("div",{className:"h-full rounded-full bg-pink-400 transition-[width] duration-700 ease-out group-hover:w-[var(--pct)]",style:{width:`${n.value}%`}})}),u.jsx("span",{className:"w-8 text-right text-[0.65rem] text-slate-300",children:n.value})]})]},n.label))})]}),u.jsxs("div",{className:"radar-block mt-6",children:[u.jsx("div",{className:"radar-heading",children:"Skills"}),u.jsx("div",{className:"mt-3 space-y-2",children:t.map(n=>u.jsxs("div",{className:"flex items-center justify-between gap-3 text-[0.7rem] text-slate-100/90",children:[u.jsx("span",{className:"min-w-0 flex-1 truncate pr-2",children:n.label}),u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("div",{className:"h-1.5 w-28 overflow-hidden rounded-full bg-white/10",children:u.jsx("div",{className:"h-full rounded-full bg-sky-400 transition-[width] duration-700 ease-out",style:{width:`${n.value/5*100}%`}})}),u.jsxs("span",{className:"w-6 text-right text-[0.65rem] text-slate-300",children:[n.value,"/5"]})]})]},n.label))})]})]})})]})}function zp(){const e=D.useRef(null);return D.useEffect(()=>{if(!yn||!e.current)return;$n("https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap","geist-font");const t=e.current;t.dataset.theme="dark",t.dataset.syncScrollbar="true",t.dataset.animate="true",t.dataset.snap="true";const n=Math.floor(Math.random()*101),r=Math.floor(900+Math.random()*101);t.style.setProperty("--start",String(n)),t.style.setProperty("--hue",String(n)),t.style.setProperty("--end",String(r));const l=CSS.supports("(animation-timeline: scroll()) and (animation-range: 0% 100%)");let i;return(async()=>{if(l)return;await pl("https://cdn.jsdelivr.net/npm/gsap@3.12.0/dist/gsap.min.js","gsap-3-12"),await pl("https://cdn.jsdelivr.net/npm/gsap@3.12.0/dist/ScrollTrigger.min.js","gsap-st-3-12");const o=window.gsap,a=window.ScrollTrigger;if(!o||!a)return;o.registerPlugin(a);const s=t.querySelectorAll(".aboutfx ul li");s.length&&o.set(s,{opacity:m=>m!==0?.2:1});const c=Array.from(s),g=o.timeline().to(c.slice(1),{opacity:1,stagger:.5}).to(c.slice(0,c.length-1),{opacity:.2,stagger:.5},0);a.create({trigger:c[0],endTrigger:c[c.length-1],start:"center center",end:"center center",animation:g,scrub:.2});const h=o.timeline().fromTo(t,{"--hue":n},{"--hue":r,ease:"none"});a.create({trigger:c[0],endTrigger:c[c.length-1],start:"center center",end:"center center",animation:h,scrub:.2}),o.fromTo(t,{"--chroma":0},{"--chroma":.3,ease:"none",scrollTrigger:{scrub:.2,trigger:c[0],start:"center center+=40",end:"center center"}}),o.fromTo(t,{"--chroma":.3},{"--chroma":0,ease:"none",scrollTrigger:{scrub:.2,trigger:c[c.length-2],start:"center center",end:"center center-=40"}}),i=()=>{var m,v,w;(m=window.ScrollTrigger)==null||m.getAll().forEach(k=>k.kill()),(w=(v=o.globalTimeline)==null?void 0:v.clear)==null||w.call(v)}})(),()=>i==null?void 0:i()},[]),u.jsxs("div",{ref:e,className:"aboutfx not-prose",children:[u.jsx("style",{children:`
    /* ---------- Variables & base (scoped) ---------- */
    .aboutfx { 
    --font-size-min: 14; --font-size-max: 20; --font-ratio-min: 1.1; --font-ratio-max: 1.33; 
    --font-width-min: 375; --font-width-max: 1500;
    --start: 0; --end: 360; --lightness: 65%; --base-chroma: 0.3;
    color-scheme: light dark;
    font-family: 'Geist', system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif;
    }
    .aboutfx[data-theme='light'] { color-scheme: light only; --lightness: 65%; }
    .aboutfx[data-theme='dark'] { color-scheme: dark only; --lightness: 75%; }

    .aboutfx .sr-only { position: absolute; width:1px; height:1px; padding:0; margin:-1px; overflow:hidden; clip:rect(0,0,0,0); white-space:nowrap; border:0; }

    .aboutfx .fluid {
    --fluid-min: calc(var(--font-size-min) * pow(var(--font-ratio-min), var(--font-level, 0)));
    --fluid-max: calc(var(--font-size-max) * pow(var(--font-ratio-max), var(--font-level, 0)));
    --fluid-preferred: calc((var(--fluid-max) - var(--fluid-min)) / (var(--font-width-max) - var(--font-width-min)));
    --fluid-type: clamp((var(--fluid-min) / 16) * 1rem, ((var(--fluid-min) / 16) * 1rem) - (((var(--fluid-preferred) * var(--font-width-min)) / 16) * 1rem) + (var(--fluid-preferred) * 100vi), (var(--fluid-max) / 16) * 1rem);
    font-size: var(--fluid-type);
    }

    /* ---------- Scrollbar sync (scoped) ---------- */
    @property --hue { initial-value: 0; syntax: '<number>'; inherits: false; }
    @property --chroma { initial-value: 0; syntax: '<number>'; inherits: true; }

    .aboutfx[data-sync-scrollbar='true'] {
    scrollbar-color: oklch(var(--lightness) var(--chroma) var(--hue)) #0000;
    }

    @supports (animation-timeline: scroll()) and (animation-range: 0% 100%) {
    .aboutfx[data-sync-scrollbar='true'][data-animate='true'] {
        timeline-scope: --list;
        scrollbar-color: oklch(var(--lightness) var(--chroma, 0) var(--hue)) #0000;
        animation-name: aboutfx-change, aboutfx-chroma-on, aboutfx-chroma-off;
        animation-fill-mode: both;
        animation-timing-function: linear;
        animation-range: entry 50% exit 50%, entry 40% entry 50%, exit 30% exit 40%;
        animation-timeline: --list;
    }
    .aboutfx[data-sync-scrollbar='true'][data-animate='true'] ul { view-timeline: --list; }
    }
    @keyframes aboutfx-change { to { --hue: var(--end); } }
    @keyframes aboutfx-chroma-on { to { --chroma: 0.3; } }
    @keyframes aboutfx-chroma-off { to { --chroma: 0; } }

    /* ---------- Effect layer (scoped) ---------- */
    .aboutfx ul { --step: calc((var(--end) - var(--start)) / (var(--count) - 1)); }
    .aboutfx li:not(:last-of-type) {
    color: oklch(var(--lightness) var(--base-chroma) calc(var(--start) + (var(--step) * var(--i))));
    }

    @supports (animation-timeline: scroll()) and (animation-range: 0% 100%) {
    .aboutfx[data-animate='true'] li {
        opacity: 0.2;
        animation-name: aboutfx-brighten;
        animation-fill-mode: both;
        animation-timing-function: linear;
        animation-range: cover calc(50% - 1lh) calc(50% + 1lh);
        animation-timeline: view();
    }
    .aboutfx[data-animate='true'] li:first-of-type { --start-opacity: 1; }
    .aboutfx[data-animate='true'] li:last-of-type { --brightness: 1; --end-opacity: 1; }

    @keyframes aboutfx-brighten {
        0% { opacity: var(--start-opacity, 0.2); }
        50% { opacity: 1; filter: brightness(var(--brightness, 1.2)); }
        100% { opacity: var(--end-opacity, 0.2); }
    }
    }

    /* ---------- Layout (scoped) ---------- */
    .aboutfx .aboutfx-header { min-height: 40vh; display: grid; place-items: center; width: 100%; padding-inline: 1.5rem; }
    .aboutfx .aboutfx-header h1 { 
    --font-size-min: 24; --font-level: 8; text-wrap: pretty; line-height: 0.8; margin: 0; 
    background: linear-gradient(canvasText 60%, color-mix(in oklch, canvas, canvasText)); 
    -webkit-background-clip: text; background-clip: text; color: #0000;
    }

    .aboutfx .aboutfx-main { width: 100%; }
    .aboutfx .aboutfx-content { 
    --font-level: 6; 
    display: flex; gap: 2.5rem; line-height: 1.25; width: 100%; padding-left: 1.5rem; 
    }
    .aboutfx .aboutfx-content h2 { 
    position: sticky; top: calc(50% - 0.5lh); font-size: inherit; margin: 0; display: inline-block; 
    height: fit-content; font-weight: 600; 
    background: linear-gradient(canvasText 50%, color-mix(in oklch, canvas, canvasText 25%));
    -webkit-background-clip: text; background-clip: text; color: #0000;
    }
    .aboutfx ul { font-weight: 600; padding-inline: 0; margin: 0; list-style-type: none; }
    .aboutfx li:last-of-type { 
    background: linear-gradient(canvasText 50%, color-mix(in oklch, canvas, canvasText 25%));
    -webkit-background-clip: text; background-clip: text; color: #0000; 
    }

    .aboutfx .aboutfx-fin { min-height: 60vh; display: grid; place-items: center; width: 100%; justify-content: center; }

    /* Keep your site's black background visible behind this block */
    .aboutfx { background: transparent; }
        `}),u.jsx("div",{className:"aboutfx-main",children:u.jsxs("section",{className:"aboutfx-content fluid",children:[u.jsxs("h2",{children:[u.jsx("span",{"aria-hidden":"true",children:"I can "}),u.jsx("span",{className:"sr-only",children:"you can ship things."})]}),u.jsx("ul",{"aria-hidden":"true",style:{"--count":22},children:["solve.","build.","inspire.","learn.","ship.","collaborate.","create.","innovate.","optimize.","teach.","visualize.","scale.","do it."].map((t,n)=>u.jsx("li",{style:{"--i":n},children:t},n))})]})})]})}function Ep(){var e,t;return D.useEffect(()=>{if(!yn)return;const n=document.querySelector(".longcat-root");if(!n)return;const r=n.querySelector(".right-eye"),l=n.querySelector(".left-eye"),i=-135,o=a=>{[r,l].forEach(s=>{if(!s)return;const c=s.getBoundingClientRect(),g=c.left+c.width/2,h=c.top+c.height/2,m=a.clientX-g,v=a.clientY-h,k=Math.atan2(v,m)*180/Math.PI+i;s.style.transform=`rotate(${k}deg)`})};return window.addEventListener("mousemove",o),()=>{window.removeEventListener("mousemove",o)}},[]),u.jsxs("div",{className:"longcat-root flex justify-end mt-50",children:[u.jsx("style",{children:`
        .longcat-root {
          /* pulled from your :root block, scoped here */
          --dur: 1s;
          --hair: rgba(232, 232, 232, 1);
          --hairT: rgba(232, 232, 232, 0);
          --hairDark: rgba(209, 209, 209, 1);
          --hairDarkT: rgba(209, 209, 209, 0);
          --hairDarker: rgba(162, 162, 162, 1);
          --ear: rgba(240, 192, 192, 1);
          --earT: rgba(240, 192, 192, 0);
          --mouth: rgba(224, 112, 112, 1);
          --spacer: rgba(162, 162, 162, 1);
          --spacerT: rgba(162, 162, 162, 0);
          --pawPrint: rgba(139, 139, 139, 1);
          --pawPrintT: rgba(139, 139, 139, 0);
          --belly: rgba(197, 197, 197, 1);
          --whisker: rgba(255, 255, 255, 1);
          --whiskerRad: 0.2em;

          position: relative;
          width: 100%;

        margin-top: 0rem;        /* keep cat+video aligned higher in the About section */
        display: flex;
        justify-content: flex-end; /* push content toward the right of the column */
        }

        .longcat-root * {
          box-sizing: border-box;
        }

        .longcat {
        font-size: 0.5em;
        margin-left: auto;   /* push cat to the right */
        margin-right: 0;
        margin-top: -2.5rem;    /* align cat closer to top of section */
        width: 34.5em;
        height: 100%;
        min-height: 24rem;
        transition: height 0.1s ease-out;
        position: relative;
        z-index: 1;

          /* 👇 extra horizontal + vertical nudge */
        margin-right: -35rem;   /* shifts cat further right */
        }

        /* === CAT PIECES (same as your template, just scoped) === */

        .right-ear,
        .left-ear,
        .right-arm,
        .right-paw,
        .head,
        .right-cheek,
        .left-cheek,
        .left-arm,
        .left-paw,
        .tail,
        .tail-outer,
        .tail-outer::after {
          background-color: var(--hair);
        }

        .right-arm,
        .right-paw,
        .right-eye,
        .left-eye,
        .head,
        .right-leg,
        .left-leg {
          border-radius: 50%;
        }

        .right-ear {
          background-image: radial-gradient(
            75% 225% at 25% 100%,
            var(--ear),
            var(--ear) 50%,
            var(--earT) 51%
          );
          border-radius: 4em 4em 0 0 / 16em 16em 0 0;
          width: 2em;
          height: 4em;
          top: 1em;
          left: 11.5em;
          transform: rotate(-40deg);
          position: absolute;
        }

        .left-ear {
          background-image: radial-gradient(
            75% 188% at 50% 100%,
            var(--ear),
            var(--ear) 50%,
            transparent 51%
          );
          border-radius: 8em 8em 0 0 / 16em 16em 0 0;
          width: 3em;
          height: 4em;
          left: 20.5em;
          transform: rotate(30deg);
          position: absolute;
        }

        .right-arm {
          z-index: 3;
          background-image: linear-gradient(
            var(--hairDarkT),
            var(--hairDarkT) 30%,
            var(--hairDark) 31%
          );
          width: 13em;
          height: 4.5em;
          top: 7em;
          left: 3.5em;
          transform: rotate(15deg);
          position: absolute;
        }

        .right-paw {
          z-index: 3;
          background-image:
            radial-gradient(
              2.4em 2.6em at 1.8em 1.3em,
              var(--hairDark),
              var(--hairDark) 50%,
              var(--hairDarkT) 51%
            ),
            radial-gradient(
              2.4em 2.3em at 2.1em 1em,
              var(--spacer),
              var(--spacer) 50%,
              var(--hairDarkT) 51%
            ),
            radial-gradient(
              2.4em 2.6em at 3.8em 1.3em,
              var(--hairDark),
              var(--hairDark) 50%,
              var(--hairDarkT) 51%
            ),
            radial-gradient(
              2.4em 2.4em at 4.1em 1.2em,
              var(--spacer),
              var(--spacer) 50%,
              var(--spacerT) 51%
            ),
            radial-gradient(
              2.4em 2.6em at 4.9em 1.3em,
              var(--hairDark),
              var(--hairDark) 50%,
              var(--hairDarkT) 51%
            ),
            radial-gradient(
              2.4em 2.4em at 5.2em 1.2em,
              var(--spacer),
              var(--spacer) 50%,
              var(--spacerT) 51%
            ),
            linear-gradient(
              var(--hairDark),
              var(--hairDark) 72%,
              var(--hairDarkT) 73%
            );
          border-radius: 3em;
          width: 7.2em;
          height: 3.6em;
          top: 0.8em;
          left: 0;
          transform: rotate(165deg);
          transform-origin: 1.8em 1.8em;
          position: absolute;
        }

        .head {
          z-index: 3;
          background-image:
            radial-gradient(
              2em 2em at 38% 53%,
              var(--hair),
              var(--hair) 50%,
              var(--hairT) 51%
            ),
            radial-gradient(
              95% 80% at 45% 63%,
              var(--hairDark),
              var(--hairDark) 50%,
              var(--hairDarkT) 51%
            );
          width: 12em;
          height: 9em;
          top: 2.8em;
          left: 12em;
          transform: rotate(-5deg);
          position: absolute;
        }

        .right-eye,
        .left-eye {
          background-color: rgb(0, 0, 0);
          box-shadow: 0 0.2em 0 0.2em rgb(160, 160, 80) inset;
          width: 2em;
          height: 2em;
          top: 2.5em;
          transition: transform 0.1s linear;
          transform: rotate(-135deg);
          position: absolute;
        }

        .right-eye {
          left: 1.5em;
        }

        .left-eye {
          left: 5.5em;
        }

        .nose-mouth {
          background-color: var(--mouth);
          background-image:
            radial-gradient(
              0.5em 0.5em at 0.8em 0.7em,
              rgb(0, 0, 0),
              rgb(0, 0, 0) 50%,
              transparent 60%
            ),
            radial-gradient(
              0.5em 0.5em at 1.6em 0.7em,
              rgb(0, 0, 0),
              rgb(0, 0, 0) 50%,
              transparent 60%
            ),
            radial-gradient(
              1.6em 0.1em at 1.2em 2.2em,
              rgb(0, 0, 0),
              rgb(0, 0, 0) 50%,
              transparent 60%
            );
          border-radius: 50% 50% 33% 33%;
          width: 2.5em;
          height: 2.5em;
          top: 4.5em;
          left: 3.2em;
          position: absolute;
        }

        .right-cheek,
        .left-cheek {
          background-color: var(--hairDark);
          background-image:
            radial-gradient(
              var(--whiskerRad) var(--whiskerRad) at 0.6em 0.6em,
              var(--spacer),
              var(--spacer) 50%,
              var(--spacerT) 60%
            ),
            radial-gradient(
              var(--whiskerRad) var(--whiskerRad) at 1.2em 0.3em,
              var(--spacer),
              var(--spacer) 50%,
              var(--spacerT) 60%
            ),
            radial-gradient(
              var(--whiskerRad) var(--whiskerRad) at 1.8em 0.6em,
              var(--spacer),
              var(--spacer) 50%,
              var(--spacerT) 60%
            ),
            radial-gradient(
              var(--whiskerRad) var(--whiskerRad) at 0.6em 1.2em,
              var(--spacer),
              var(--spacer) 50%,
              var(--spacerT) 60%
            ),
            radial-gradient(
              var(--whiskerRad) var(--whiskerRad) at 1.2em 0.9em,
              var(--spacer),
              var(--spacer) 50%,
              var(--spacerT) 60%
            ),
            radial-gradient(
              var(--whiskerRad) var(--whiskerRad) at 1.8em 1.2em,
              var(--spacer),
              var(--spacer) 50%,
              var(--spacerT) 60%
            ),
            radial-gradient(
              var(--whiskerRad) var(--whiskerRad) at 1.2em 1.5em,
              var(--spacer),
              var(--spacer) 50%,
              var(--spacerT) 60%
            );
          border-radius: 50%;
          width: 2.5em;
          height: 2em;
          top: 5em;
          position: absolute;
        }

        .right-cheek {
          left: 2em;
          transform: rotate(-8deg);
        }

        .left-cheek {
          left: 4.4em;
          transform: rotate(8deg);
        }

        .left-arm {
          z-index: 3;
          background-image: linear-gradient(
            var(--hairDarkT),
            var(--hairDarkT) 30%,
            var(--hairDark) 31%
          );
          border-radius: 50%;
          width: 10.5em;
          height: 4.5em;
          top: 6.5em;
          left: 18.9em;
          transform: rotate(40deg);
          position: absolute;
        }

        .left-paw {
          z-index: 3;
          background-image:
            radial-gradient(
              0.6em 0.9em at 20% 60%,
              var(--pawPrint),
              var(--pawPrint) 50%,
              var(--pawPrintT) 55%
            ),
            radial-gradient(
              0.6em 0.9em at 38% 40%,
              var(--pawPrint),
              var(--pawPrint) 50%,
              var(--pawPrintT) 55%
            ),
            radial-gradient(
              0.6em 0.9em at 60% 40%,
              var(--pawPrint),
              var(--pawPrint) 50%,
              var(--pawPrintT) 55%
            ),
            radial-gradient(
              0.6em 0.9em at 80% 60%,
              var(--pawPrint),
              var(--pawPrint) 50%,
              var(--pawPrintT) 55%
            ),
            radial-gradient(
              1.5em 1.5em at 50% 75%,
              var(--pawPrint),
              var(--pawPrint) 50%,
              var(--pawPrintT) 55%
            ),
            radial-gradient(
              87% 87% at 54% 55%,
              var(--hairDark),
              var(--hairDark) 50%,
              var(--pawPrintT) 51%
            );
          border-radius: 3em;
          width: 4.5em;
          height: 4.5em;
          top: 0;
          left: -1em;
          transform: rotate(-50deg);
          position: absolute;
        }

        .whisker {
          border-top: 0.1em solid rgb(255, 255, 255);
          width: 6em;
          height: 0;
          position: absolute;
        }

        .whisker:nth-child(n + 6):nth-child(-n + 10) {
          transform-origin: 100% 0;
        }

        .whisker:nth-child(n + 11):nth-child(-n + 15) {
          transform-origin: 0 0;
        }

        .whisker:nth-child(6) {
          transform: rotate(5deg);
          top: 5.2em;
          left: -2.8em;
        }

        .whisker:nth-child(7) {
          transform: rotate(-3deg);
          top: 5.6em;
          left: -3.4em;
        }

        .whisker:nth-child(8) {
          transform: rotate(-13deg);
          top: 5.9em;
          left: -2.8em;
        }

        .whisker:nth-child(9) {
          transform: rotate(-20deg);
          top: 6.2em;
          left: -3.4em;
        }

        .whisker:nth-child(10) {
          transform: rotate(-29deg);
          top: 6.5em;
          left: -2.7em;
        }

        .whisker:nth-child(11) {
          transform: rotate(5deg);
          top: 5.2em;
          left: 5.7em;
        }

        .whisker:nth-child(12) {
          transform: rotate(7deg);
          top: 5.6em;
          left: 6.2em;
        }

        .whisker:nth-child(13) {
          transform: rotate(12deg);
          top: 5.8em;
          left: 5.6em;
        }

        .whisker:nth-child(14) {
          transform: rotate(18deg);
          top: 6.2em;
          left: 6.2em;
        }

        .whisker:nth-child(15) {
          transform: rotate(21deg);
          top: 6.5em;
          left: 5.5em;
        }

        .torso {
          animation: hang var(--dur) linear infinite alternate;
          background-color: var(--belly);
          border-radius: 2.5em / 16em 16em 2em 2em;
          box-shadow: -0.3em 0 0 2em var(--hairDark) inset;
          top: 8.4em;
          left: 13.5em;
          min-height: 28em;
          height: calc(100% - 32em);
          width: 11.5em;
          position: absolute;
          transform-origin: 5.7em 0;
          transition: height 0.25s ease-out;
        }

        .bottom {
          background-color: var(--belly);
          border-radius: 0 0 8em 8em / 0 0 16em 16em;
          box-shadow: -0.3em -2em 0 2em var(--hairDark) inset;
          top: calc(100% - 2em);
          width: 100%;
          height: 10em;
          position: relative;
        }

        .bottom::after {
          content: "";
          display: block;
          width: 100%;
          height: 6em;
        }

        .tail,
        .tail-outer {
          background-image: linear-gradient(
            var(--hairDarkT),
            var(--hairDarkT) 30%,
            var(--hairDark) 31%
          );
          border-radius: 0 2em 2em 0;
          height: 4em;
          position: absolute;
        }

        .tail {
          animation: wagTail calc(var(--dur) * 2) ease-in infinite alternate;
          width: 10em;
          top: 0;
          left: 50%;
          transform: rotate(30deg);
          transform-origin: 0 2em;
          z-index: -1;
        }

        .tail-outer {
          animation: wagOuterTail calc(var(--dur) * 2) ease-in infinite alternate;
          transform: rotate(-30deg);
          transform-origin: 0 2em;
          width: 8em;
          left: 8em;
        }

        .tail-outer::after {
          background-image: linear-gradient(
            160deg,
            var(--hairDarkT),
            var(--hairDarkT) 40%,
            var(--hairDark) 41%
          );
          border-left: 0.1em solid var(--hairDarker);
          border-radius: 50%;
          content: "";
          display: block;
          margin-left: auto;
          height: 4em;
          width: 4em;
        }

        .right-leg,
        .left-leg,
        .right-lower-leg,
        .left-lower-leg,
        .right-foot,
        .left-foot {
          background-color: var(--hairDark);
          z-index: -2;
          position: absolute;
        }

        .right-leg,
        .left-leg {
          animation: pivotLeg var(--dur) linear infinite alternate;
          top: 2em;
          height: 13em;
          width: 5.5em;
          transform-origin: 2.7em 2.7em;
        }

        .left-leg {
          right: 0;
        }

        .right-lower-leg,
        .left-lower-leg {
          border-radius: 15% 15% 50% 50%;
          top: 73%;
          height: 9em;
          width: 4.4em;
          transform-origin: 2.2em 2.2em;
        }

        .right-lower-leg {
          left: 0.6em;
          transform: rotate(-5deg);
        }

        .left-lower-leg {
          left: 0.3em;
          transform: rotate(5deg);
        }

        .right-foot,
        .left-foot {
          background-image:
            radial-gradient(
              0.3em 1.5em at 25% 93%,
              var(--spacer),
              var(--spacer) 50%,
              transparent 60%
            ),
            radial-gradient(
              0.3em 1.5em at 50% 93%,
              var(--spacer),
              var(--spacer) 50%,
              transparent 60%
            ),
            radial-gradient(
              0.3em 1.5em at 75% 93%,
              var(--spacer),
              var(--spacer) 50%,
              transparent 60%
            );
          border-radius: 2em;
          transform-origin: 1em 1em;
          top: 67%;
          left: 0.5em;
          height: 8.4em;
          width: 3.5em;
        }

        .right-foot {
          transform: rotate(15deg);
        }

        .left-foot {
          transform: rotate(-15deg);
        }

        .barrier {
          width: 100%;
          height: 1.5em;
        }

        @keyframes hang {
          from {
            transform: rotate(0.5deg);
          }
          to {
            transform: rotate(-0.5deg);
          }
        }

        @keyframes pivotLeg {
          from {
            transform: rotate(1.5deg);
          }
          to {
            transform: rotate(-1.5deg);
          }
        }

        @keyframes wagTail {
          from,
          50% {
            transform: rotate(30deg);
          }
          to {
            transform: rotate(20deg);
          }
        }

        @keyframes wagOuterTail {
          from,
          50% {
            transform: rotate(-30deg);
          }
          to {
            transform: rotate(-60deg);
          }
        }

        /* TEMPLATE-STYLE VIDEO, BUT SAFE INSIDE THE COLUMN */
        .longcat-video-wrapper {
        position: absolute;
        top: 2.5rem;           /* align video much closer to top of the section */
        left: 50%;
        transform: translateX(-50%);
        width: min(60vw, 100%);
        max-width: 800px;
        aspect-ratio: 16 / 9;
        overflow: hidden;
        border-radius: 1.5rem;
        z-index: 2;
        }

        .longcat-video-wrapper video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        @media (max-width: 1024px) {
          .longcat {
            font-size: 0.45em;
          }
          .longcat-video-wrapper {
            top: 2.5rem;
            width: 100%;
            max-width: 600px;
          }
        }

      `}),u.jsxs("div",{className:"longcat",children:[u.jsx("div",{className:"right-ear"}),u.jsx("div",{className:"left-ear"}),u.jsx("div",{className:"right-arm",children:u.jsx("div",{className:"right-paw"})}),u.jsx("div",{className:"torso",children:u.jsxs("div",{className:"bottom",children:[u.jsx("div",{className:"tail",children:u.jsx("div",{className:"tail-outer"})}),u.jsx("div",{className:"right-leg",children:u.jsx("div",{className:"right-lower-leg",children:u.jsx("div",{className:"right-foot"})})}),u.jsx("div",{className:"left-leg",children:u.jsx("div",{className:"left-lower-leg",children:u.jsx("div",{className:"left-foot"})})})]})}),u.jsxs("div",{className:"head",children:[u.jsx("div",{className:"right-eye"}),u.jsx("div",{className:"left-eye"}),u.jsx("div",{className:"nose-mouth"}),u.jsx("div",{className:"right-cheek"}),u.jsx("div",{className:"left-cheek"}),Array.from({length:10}).map((n,r)=>u.jsx("div",{className:"whisker"},r))]}),u.jsx("div",{className:"left-arm",children:u.jsx("div",{className:"left-paw"})})]}),u.jsx("div",{className:"longcat-video-wrapper border border-zinc-200 shadow-sm dark:border-zinc-800",children:u.jsx("video",{src:(e=Fe.introVideo)==null?void 0:e.src,poster:(t=Fe.introVideo)==null?void 0:t.poster,controls:!0,playsInline:!0})}),u.jsx("div",{className:"barrier"})]})}const li=[{city:"New York",key:"one",imageUrl:"https://raw.githubusercontent.com/vvnu0/vvnu0.github.io/main/public/new-york.jpg"},{city:"San Francisco & Bay",key:"two",imageUrl:"https://raw.githubusercontent.com/vvnu0/vvnu0.github.io/main/public/san-fran.jpeg"},{city:"Austin",key:"three",imageUrl:"https://raw.githubusercontent.com/vvnu0/vvnu0.github.io/main/public/austin.jpeg"},{city:"Seattle",key:"four",imageUrl:"https://raw.githubusercontent.com/vvnu0/vvnu0.github.io/main/public/seattle.jpg"},{city:"Atlanta",key:"five",imageUrl:"https://raw.githubusercontent.com/vvnu0/vvnu0.github.io/main/public/atlanta.jpg"},{city:"Boston",key:"six",imageUrl:"https://raw.githubusercontent.com/vvnu0/vvnu0.github.io/main/public/boston.jpg"}];function Cp(){const[e,t]=D.useState(0);return D.useEffect(()=>{const n=setInterval(()=>{t(r=>(r+1)%li.length)},5e3);return()=>clearInterval(n)},[]),u.jsxs("div",{className:"mt-16",children:[u.jsx("h3",{className:"text-center text-xl md:text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4",children:"Where I can Work"}),u.jsxs("div",{className:"w-full flex items-center justify-center rounded-2xl bg-black py-6",children:[u.jsx("style",{children:`
          .frame {
            border: 5px solid #fff;
            width: 95%;
            max-width: 2000px;
            height: 300px;
            position: relative;
            overflow: hidden;
            margin: auto;
          }

          .hero-root {
            position: relative;
            width: 100%;
            height: 100%;
          }

          .slide-layer {
            position: absolute;
            inset: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
          }

          .slide-bg {
            position: absolute;
            inset: 0;
            background-size: cover;
            background-position: center;
            transition: opacity 0.8s ease-in-out;
            opacity: 0;
          }

          .slide-bg.is-active {
            opacity: 1;
          }

          .hero-image {
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            max-width: 300px;
            width: 50vw;
            filter: contrast(90%);
            z-index: 5;
            pointer-events: none;
          }

          .city-title {
            position: absolute;
            top: 15%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: clamp(2.8rem, 6vw, 3.5rem);
            letter-spacing: 0.3rem;
            z-index: 6;
            color: transparent;
            background-position: 0 0;
            background-size: 200% auto;
            animation: animated-text 20s linear infinite;
            text-transform: uppercase;
            text-align: center;
            white-space: nowrap;
          }

          @keyframes animated-text {
            100% {
              background-position: 200% 0;
            }
          }

          /* Green-ish texture variant */
          .title-one,
          .title-five {
            -webkit-text-stroke: 1px rgba(16, 104, 31, 0.8);
            text-stroke: 1px rgba(16, 104, 31, 0.8);
            background-image: url("https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/e9d06cb6-2844-49ed-9bde-23d3364b9fa4");
            -webkit-background-clip: text;
            background-clip: text;
          }

          /* White outline texture variant */
          .title-two,
          .title-three,
          .title-four,
          .title-six {
            -webkit-text-stroke: 1px #ffffff;
            text-stroke: 1px #ffffff;
            background-image: url("https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/ba4edde6-822d-437a-88c2-f54392d7a56f");
            -webkit-background-clip: text;
            background-clip: text;
          }

          /* Dark overlay so text stays readable */
          .overlay-shade {
            position: absolute;
            inset: 0;
            background: radial-gradient(circle at center, rgba(0,0,0,0.1), rgba(0,0,0,0.6));
            z-index: 2;
          }
        `}),u.jsx("div",{className:"frame",children:u.jsxs("div",{className:"hero-root",children:[u.jsxs("div",{className:"slide-layer",children:[li.map((n,r)=>u.jsx("div",{className:`slide-bg ${r===e?"is-active":""}`,style:{backgroundImage:`url(${n.imageUrl})`}},n.city)),u.jsx("div",{className:"overlay-shade"}),li.map((n,r)=>{const l=n.key==="one"||n.key==="five"?"title-one":"title-two";return u.jsx("h1",{className:`city-title ${l}`,style:{opacity:r===e?1:0,transition:"opacity 0.5s ease-in-out"},children:n.city},n.city)})]}),u.jsx("img",{className:"hero-image",src:"https://raw.githubusercontent.com/vvnu0/vvnu0.github.io/main/public/me-table.png",alt:"Traveler hero"})]})})]})]})}function _p(){const[e,t]=D.useState(!0),[n,r]=D.useState(!1),[l,i]=D.useState(null),[o,a]=D.useState(null);D.useEffect(()=>{const h=setTimeout(()=>r(!0),ds),m=setTimeout(()=>t(!1),ds+Br);return()=>{clearTimeout(h),clearTimeout(m)}},[]);const s=e?u.jsx(vp,{onDismiss:()=>{n||(r(!0),setTimeout(()=>t(!1),Br))},fading:n}):null,c=l?u.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/70",children:u.jsxs("div",{className:"relative w-full max-w-5xl px-4",children:[u.jsxs("div",{className:"mb-3 flex justify-between items-center text-zinc-100",children:[u.jsx("h2",{className:"text-sm font-medium",children:"Slides preview"}),u.jsxs("div",{className:"flex items-center gap-3 text-xs",children:[u.jsxs("a",{href:l,target:"_blank",rel:"noreferrer noopener",className:"inline-flex items-center gap-1 rounded-full bg-zinc-800/80 px-3 py-1 hover:bg-zinc-700/80",children:[u.jsx(qi,{className:"h-3 w-3"})," Open in new tab"]}),u.jsx("button",{onClick:()=>i(null),className:"rounded-full bg-zinc-800/80 px-3 py-1 hover:bg-zinc-700/80",children:"Close"})]})]}),u.jsx("div",{className:"aspect-video overflow-hidden rounded-2xl bg-black",children:u.jsx("iframe",{src:l,title:"Project slides",className:"h-full w-full border-0",allowFullScreen:!0})})]})}):null,g=o?u.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/70",children:u.jsxs("div",{className:"relative w-full max-w-5xl px-4",children:[u.jsxs("div",{className:"mb-3 flex items-center justify-between text-zinc-100",children:[u.jsx("h2",{className:"text-sm font-medium",children:o.title}),u.jsxs("div",{className:"flex items-center gap-3 text-xs",children:[o.githubUrl&&u.jsxs("a",{href:o.githubUrl,target:"_blank",rel:"noreferrer noopener",className:"inline-flex items-center gap-1 rounded-full bg-zinc-800/80 px-3 py-1 hover:bg-zinc-700/80",children:[u.jsx(Go,{className:"h-3 w-3"})," Open GitHub in new tab"]}),u.jsxs("a",{href:o.youtubeUrl,target:"_blank",rel:"noreferrer noopener",className:"inline-flex items-center gap-1 rounded-full bg-zinc-800/80 px-3 py-1 hover:bg-zinc-700/80",children:[u.jsx(qi,{className:"h-3 w-3"})," Open video in new tab"]}),u.jsx("button",{onClick:()=>a(null),className:"rounded-full bg-zinc-800/80 px-3 py-1 hover:bg-zinc-700/80",children:"Close"})]})]}),u.jsx("div",{className:"aspect-video overflow-hidden rounded-2xl bg-black",children:u.jsx("iframe",{src:o.youtubeUrl.replace("watch?v=","embed/"),title:o.title,className:"h-full w-full border-0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})})]})}):null;return u.jsxs("div",{className:"dark",children:[s,g,c,u.jsx("a",{href:"#content",className:"sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 rounded bg-indigo-600 px-3 py-2 text-white",children:"Skip to content"}),u.jsxs("div",{className:"min-h-dvh bg-black text-zinc-800 transition dark:text-zinc-100",style:{opacity:n||!e?1:0,transition:`opacity ${Br}ms ease`},children:[u.jsx("header",{className:"sticky top-0 z-40 border-b border-zinc-200/70 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-zinc-800/70 dark:bg-zinc-950/50",children:u.jsxs("div",{className:"mx-auto flex h-16 max-w-5xl items-center justify-between px-4",children:[u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx("div",{className:"h-10 w-10 rounded-full border-[2px] border-white shadow-sm bg-center bg-cover",style:{backgroundImage:"url('https://raw.githubusercontent.com/vvnu0/vvnu0.github.io/main/public/pfp.png')",backgroundSize:"130%"},"aria-hidden":!0}),u.jsx("span",{className:"text-sm font-semibold tracking-tight text-zinc-900 dark:text-white",children:Fe.name})]}),u.jsxs("nav",{className:"hidden items-center gap-6 md:flex",children:[u.jsx("a",{className:ri,href:"#about",children:"About"}),u.jsx("a",{className:ri,href:"#projects",children:"Projects"}),u.jsx("a",{className:ri,href:"#contact",children:"Contact"})]})]})}),u.jsxs("main",{id:"content",children:[u.jsx("section",{className:"mx-auto max-w-5xl px-4 py-16 md:py-24",children:u.jsxs("div",{className:"grid items-center gap-10 md:grid-cols-2",children:[u.jsxs("div",{children:[u.jsxs("h1",{className:"text-3xl font-semibold leading-tight tracking-tight md:text-5xl",children:[u.jsx("span",{className:"align-baseline",children:"Soft"}),u.jsx(gp,{text:"ware Engineer",start:n})]}),u.jsx("p",{className:"mt-4 max-w-prose text-zinc-600 dark:text-zinc-400",children:Fe.tagline}),u.jsxs("div",{className:"mt-6 flex flex-wrap items-center gap-3",children:[u.jsxs("a",{href:`mailto:${Fe.email}`,className:"inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md",children:[u.jsx(Ec,{className:"h-4 w-4"})," Email me"]}),hp.filter(h=>h.label!=="Email").map(({label:h,href:m,icon:v})=>u.jsxs("a",{href:m,target:"_blank",rel:"noreferrer noopener",className:"inline-flex items-center gap-2 rounded-xl border border-zinc-300 px-4 py-2 text-sm font-medium shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-zinc-700",children:[u.jsx(v,{className:"h-4 w-4"})," ",h]},h))]}),u.jsx("p",{className:"mt-3 text-xs text-zinc-500 dark:text-zinc-400",children:u.jsx("strong",{children:u.jsx("i",{children:"Actively seeking internships for Summer 2026!"})})})]}),u.jsx(Sp,{})]})}),u.jsx("style",{children:`
  .video-wrapper {
    /* template geometry, but column-safe */
    position: relative;
    width: min(60vw, 100%);
    max-width: 800px;
    aspect-ratio: 16 / 9;
    overflow: hidden;
    border-radius: 1.5rem;
    z-index: 1;
  }

  .video-wrapper video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`}),u.jsx(Tr,{id:"about",title:"About",children:u.jsx(zp,{})}),u.jsxs(Tr,{id:"projects",title:"Projects",hint:"Each card is hyperlinked!",children:[u.jsx("div",{className:"grid gap-5 sm:grid-cols-2",children:mp.map(h=>u.jsx(kp,{p:h,onOpenSlides:m=>i(m),onOpenVideo:m=>a(m)},h.title))}),u.jsxs("div",{className:"mt-10 space-y-4",children:[u.jsx("div",{className:"radar-heading",children:"Example of classes I teach"}),u.jsx("div",{className:"aspect-video overflow-hidden rounded-2xl border border-zinc-200 bg-black/80 shadow-sm dark:border-zinc-800",children:u.jsx("iframe",{src:"https://www.youtube.com/embed/Z6TA-gdgPPw?start=12",title:"Example of classes I teach",className:"h-full w-full border-0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})}),u.jsx("p",{className:"text-sm leading-relaxed text-zinc-500 dark:text-zinc-400",children:"I teach competitive programming and algorithms to high school students through the USACO Guide team and serve as a TA for competitive programming at the university level. We focus on data structures, optimization, heuristic problem solving, and fast I/O patterns, with a strong emphasis on working through real contest problems together. I currently mentor around 20 students; in the past year, 32 have reached USACO Silver within two months and 15 have progressed to Gold within a year."})]}),u.jsx(wp,{})]}),u.jsxs(Tr,{id:"about",title:"About",children:[u.jsxs("div",{className:"mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] items-start",children:[u.jsx(jp,{}),u.jsx(Ep,{})]}),u.jsx(Cp,{})]}),u.jsx(Tr,{id:"contact",title:"Contact",hint:"I read every note",children:u.jsxs("div",{className:"grid gap-6 md:grid-cols-2",children:[u.jsxs("form",{onSubmit:h=>h.preventDefault(),className:"rounded-2xl border border-zinc-200 bg-white/70 p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/60","aria-label":"contact form",children:[u.jsx("label",{className:"block text-sm font-medium text-zinc-700 dark:text-zinc-200",children:"Name"}),u.jsx("input",{className:"mt-1 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm shadow-sm outline-none transition focus:ring-2 focus:ring-indigo-500 dark:border-zinc-700 dark:bg-zinc-950",placeholder:"Ada Lovelace",required:!0}),u.jsx("label",{className:"mt-4 block text-sm font-medium text-zinc-700 dark:text-zinc-200",children:"Email"}),u.jsx("input",{type:"email",className:"mt-1 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm shadow-sm outline-none transition focus:ring-2 focus:ring-indigo-500 dark:border-zinc-700 dark:bg-zinc-950",placeholder:"ada@example.com",required:!0}),u.jsx("label",{className:"mt-4 block text-sm font-medium text-zinc-700 dark:text-zinc-200",children:"Message"}),u.jsx("textarea",{className:"mt-1 h-28 w-full resize-y rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm shadow-sm outline-none transition focus:ring-2 focus:ring-indigo-500 dark:border-zinc-700 dark:bg-zinc-950",placeholder:"Hi! I'd love to collaborate on…",required:!0}),u.jsx("button",{className:"mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md",children:"Send"}),u.jsxs("p",{className:"mt-2 text-xs text-zinc-500 dark:text-zinc-400",children:["Or email me directly at"," ",u.jsx("a",{className:"underline",href:`mailto:${Fe.email}`,children:Fe.email})]})]}),u.jsx("div",{className:"hidden md:block","aria-hidden":!0})]})}),u.jsx(Np,{})]}),u.jsx("footer",{className:"border-t border-zinc-200 py-8 text-center text-sm text-zinc-500 dark:border-zinc-800 dark:text-zinc-400",children:u.jsx("div",{className:"mx-auto max-w-5xl px-4",children:u.jsxs("p",{children:["© ",new Date().getFullYear()," ",Fe.name,". Built with React + Tailwind. Theme-aware, accessible, and deploy-ready."]})})})]})]})}ii.createRoot(document.getElementById("root")).render(u.jsx(Wc.StrictMode,{children:u.jsx(_p,{})}));
