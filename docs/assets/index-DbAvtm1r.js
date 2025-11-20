(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}})();function Cc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var fs={exports:{}},pl={},ds={exports:{}},I={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ir=Symbol.for("react.element"),jc=Symbol.for("react.portal"),Tc=Symbol.for("react.fragment"),Pc=Symbol.for("react.strict_mode"),Lc=Symbol.for("react.profiler"),Ic=Symbol.for("react.provider"),Mc=Symbol.for("react.context"),Rc=Symbol.for("react.forward_ref"),Dc=Symbol.for("react.suspense"),Oc=Symbol.for("react.memo"),Fc=Symbol.for("react.lazy"),qo=Symbol.iterator;function Ac(e){return e===null||typeof e!="object"?null:(e=qo&&e[qo]||e["@@iterator"],typeof e=="function"?e:null)}var ps={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ms=Object.assign,hs={};function gn(e,t,n){this.props=e,this.context=t,this.refs=hs,this.updater=n||ps}gn.prototype.isReactComponent={};gn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};gn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function gs(){}gs.prototype=gn.prototype;function Zi(e,t,n){this.props=e,this.context=t,this.refs=hs,this.updater=n||ps}var Ji=Zi.prototype=new gs;Ji.constructor=Zi;ms(Ji,gn.prototype);Ji.isPureReactComponent=!0;var ea=Array.isArray,vs=Object.prototype.hasOwnProperty,qi={current:null},ys={key:!0,ref:!0,__self:!0,__source:!0};function ws(e,t,n){var r,l={},i=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(i=""+t.key),t)vs.call(t,r)&&!ys.hasOwnProperty(r)&&(l[r]=t[r]);var a=arguments.length-2;if(a===1)l.children=n;else if(1<a){for(var s=Array(a),c=0;c<a;c++)s[c]=arguments[c+2];l.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)l[r]===void 0&&(l[r]=a[r]);return{$$typeof:ir,type:e,key:i,ref:o,props:l,_owner:qi.current}}function Uc(e,t){return{$$typeof:ir,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function eo(e){return typeof e=="object"&&e!==null&&e.$$typeof===ir}function $c(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ta=/\/+/g;function Pl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?$c(""+e.key):t.toString(36)}function Pr(e,t,n,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case ir:case jc:o=!0}}if(o)return o=e,l=l(o),e=r===""?"."+Pl(o,0):r,ea(l)?(n="",e!=null&&(n=e.replace(ta,"$&/")+"/"),Pr(l,t,n,"",function(c){return c})):l!=null&&(eo(l)&&(l=Uc(l,n+(!l.key||o&&o.key===l.key?"":(""+l.key).replace(ta,"$&/")+"/")+e)),t.push(l)),1;if(o=0,r=r===""?".":r+":",ea(e))for(var a=0;a<e.length;a++){i=e[a];var s=r+Pl(i,a);o+=Pr(i,t,n,s,l)}else if(s=Ac(e),typeof s=="function")for(e=s.call(e),a=0;!(i=e.next()).done;)i=i.value,s=r+Pl(i,a++),o+=Pr(i,t,n,s,l);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function pr(e,t,n){if(e==null)return e;var r=[],l=0;return Pr(e,r,"","",function(i){return t.call(n,i,l++)}),r}function Bc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ce={current:null},Lr={transition:null},Vc={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:Lr,ReactCurrentOwner:qi};function xs(){throw Error("act(...) is not supported in production builds of React.")}I.Children={map:pr,forEach:function(e,t,n){pr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return pr(e,function(){t++}),t},toArray:function(e){return pr(e,function(t){return t})||[]},only:function(e){if(!eo(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};I.Component=gn;I.Fragment=Tc;I.Profiler=Lc;I.PureComponent=Zi;I.StrictMode=Pc;I.Suspense=Dc;I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Vc;I.act=xs;I.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ms({},e.props),l=e.key,i=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,o=qi.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)vs.call(t,s)&&!ys.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var c=0;c<s;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:ir,type:e.type,key:l,ref:i,props:r,_owner:o}};I.createContext=function(e){return e={$$typeof:Mc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Ic,_context:e},e.Consumer=e};I.createElement=ws;I.createFactory=function(e){var t=ws.bind(null,e);return t.type=e,t};I.createRef=function(){return{current:null}};I.forwardRef=function(e){return{$$typeof:Rc,render:e}};I.isValidElement=eo;I.lazy=function(e){return{$$typeof:Fc,_payload:{_status:-1,_result:e},_init:Bc}};I.memo=function(e,t){return{$$typeof:Oc,type:e,compare:t===void 0?null:t}};I.startTransition=function(e){var t=Lr.transition;Lr.transition={};try{e()}finally{Lr.transition=t}};I.unstable_act=xs;I.useCallback=function(e,t){return ce.current.useCallback(e,t)};I.useContext=function(e){return ce.current.useContext(e)};I.useDebugValue=function(){};I.useDeferredValue=function(e){return ce.current.useDeferredValue(e)};I.useEffect=function(e,t){return ce.current.useEffect(e,t)};I.useId=function(){return ce.current.useId()};I.useImperativeHandle=function(e,t,n){return ce.current.useImperativeHandle(e,t,n)};I.useInsertionEffect=function(e,t){return ce.current.useInsertionEffect(e,t)};I.useLayoutEffect=function(e,t){return ce.current.useLayoutEffect(e,t)};I.useMemo=function(e,t){return ce.current.useMemo(e,t)};I.useReducer=function(e,t,n){return ce.current.useReducer(e,t,n)};I.useRef=function(e){return ce.current.useRef(e)};I.useState=function(e){return ce.current.useState(e)};I.useSyncExternalStore=function(e,t,n){return ce.current.useSyncExternalStore(e,t,n)};I.useTransition=function(){return ce.current.useTransition()};I.version="18.3.1";ds.exports=I;var U=ds.exports;const Hc=Cc(U);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wc=U,Qc=Symbol.for("react.element"),bc=Symbol.for("react.fragment"),Kc=Object.prototype.hasOwnProperty,Yc=Wc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Gc={key:!0,ref:!0,__self:!0,__source:!0};function ks(e,t,n){var r,l={},i=null,o=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Kc.call(t,r)&&!Gc.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:Qc,type:e,key:i,ref:o,props:l,_owner:Yc.current}}pl.Fragment=bc;pl.jsx=ks;pl.jsxs=ks;fs.exports=pl;var d=fs.exports,li={},Ss={exports:{}},Ee={},Es={exports:{}},Ns={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(S,j){var T=S.length;S.push(j);e:for(;0<T;){var R=T-1>>>1,Q=S[R];if(0<l(Q,j))S[R]=j,S[T]=Q,T=R;else break e}}function n(S){return S.length===0?null:S[0]}function r(S){if(S.length===0)return null;var j=S[0],T=S.pop();if(T!==j){S[0]=T;e:for(var R=0,Q=S.length,ze=Q>>>1;R<ze;){var de=2*(R+1)-1,Bt=S[de],Z=de+1,_t=S[Z];if(0>l(Bt,T))Z<Q&&0>l(_t,Bt)?(S[R]=_t,S[Z]=T,R=Z):(S[R]=Bt,S[de]=T,R=de);else if(Z<Q&&0>l(_t,T))S[R]=_t,S[Z]=T,R=Z;else break e}}return j}function l(S,j){var T=S.sortIndex-j.sortIndex;return T!==0?T:S.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var s=[],c=[],g=1,h=null,m=3,v=!1,x=!1,w=!1,L=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(S){for(var j=n(c);j!==null;){if(j.callback===null)r(c);else if(j.startTime<=S)r(c),j.sortIndex=j.expirationTime,t(s,j);else break;j=n(c)}}function y(S){if(w=!1,p(S),!x)if(n(s)!==null)x=!0,_e(E);else{var j=n(c);j!==null&&Re(y,j.startTime-S)}}function E(S,j){x=!1,w&&(w=!1,f(C),C=-1),v=!0;var T=m;try{for(p(j),h=n(s);h!==null&&(!(h.expirationTime>j)||S&&!ee());){var R=h.callback;if(typeof R=="function"){h.callback=null,m=h.priorityLevel;var Q=R(h.expirationTime<=j);j=e.unstable_now(),typeof Q=="function"?h.callback=Q:h===n(s)&&r(s),p(j)}else r(s);h=n(s)}if(h!==null)var ze=!0;else{var de=n(c);de!==null&&Re(y,de.startTime-j),ze=!1}return ze}finally{h=null,m=T,v=!1}}var z=!1,_=null,C=-1,B=5,P=-1;function ee(){return!(e.unstable_now()-P<B)}function Me(){if(_!==null){var S=e.unstable_now();P=S;var j=!0;try{j=_(!0,S)}finally{j?He():(z=!1,_=null)}}else z=!1}var He;if(typeof u=="function")He=function(){u(Me)};else if(typeof MessageChannel<"u"){var wn=new MessageChannel,fr=wn.port2;wn.port1.onmessage=Me,He=function(){fr.postMessage(null)}}else He=function(){L(Me,0)};function _e(S){_=S,z||(z=!0,He())}function Re(S,j){C=L(function(){S(e.unstable_now())},j)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(S){S.callback=null},e.unstable_continueExecution=function(){x||v||(x=!0,_e(E))},e.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<S?Math.floor(1e3/S):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(S){switch(m){case 1:case 2:case 3:var j=3;break;default:j=m}var T=m;m=j;try{return S()}finally{m=T}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(S,j){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var T=m;m=S;try{return j()}finally{m=T}},e.unstable_scheduleCallback=function(S,j,T){var R=e.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?R+T:R):T=R,S){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=T+Q,S={id:g++,callback:j,priorityLevel:S,startTime:T,expirationTime:Q,sortIndex:-1},T>R?(S.sortIndex=T,t(c,S),n(s)===null&&S===n(c)&&(w?(f(C),C=-1):w=!0,Re(y,T-R))):(S.sortIndex=Q,t(s,S),x||v||(x=!0,_e(E))),S},e.unstable_shouldYield=ee,e.unstable_wrapCallback=function(S){var j=m;return function(){var T=m;m=j;try{return S.apply(this,arguments)}finally{m=T}}}})(Ns);Es.exports=Ns;var Xc=Es.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zc=U,Se=Xc;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var _s=new Set,Bn={};function At(e,t){un(e,t),un(e+"Capture",t)}function un(e,t){for(Bn[e]=t,e=0;e<t.length;e++)_s.add(t[e])}var et=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ii=Object.prototype.hasOwnProperty,Jc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,na={},ra={};function qc(e){return ii.call(ra,e)?!0:ii.call(na,e)?!1:Jc.test(e)?ra[e]=!0:(na[e]=!0,!1)}function ef(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function tf(e,t,n,r){if(t===null||typeof t>"u"||ef(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function fe(e,t,n,r,l,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var re={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){re[e]=new fe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];re[t]=new fe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){re[e]=new fe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){re[e]=new fe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){re[e]=new fe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){re[e]=new fe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){re[e]=new fe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){re[e]=new fe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){re[e]=new fe(e,5,!1,e.toLowerCase(),null,!1,!1)});var to=/[\-:]([a-z])/g;function no(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(to,no);re[t]=new fe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(to,no);re[t]=new fe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(to,no);re[t]=new fe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){re[e]=new fe(e,1,!1,e.toLowerCase(),null,!1,!1)});re.xlinkHref=new fe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){re[e]=new fe(e,1,!1,e.toLowerCase(),null,!0,!0)});function ro(e,t,n,r){var l=re.hasOwnProperty(t)?re[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(tf(t,n,l,r)&&(n=null),r||l===null?qc(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var lt=Zc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,mr=Symbol.for("react.element"),Ht=Symbol.for("react.portal"),Wt=Symbol.for("react.fragment"),lo=Symbol.for("react.strict_mode"),oi=Symbol.for("react.profiler"),zs=Symbol.for("react.provider"),Cs=Symbol.for("react.context"),io=Symbol.for("react.forward_ref"),ai=Symbol.for("react.suspense"),si=Symbol.for("react.suspense_list"),oo=Symbol.for("react.memo"),ot=Symbol.for("react.lazy"),js=Symbol.for("react.offscreen"),la=Symbol.iterator;function xn(e){return e===null||typeof e!="object"?null:(e=la&&e[la]||e["@@iterator"],typeof e=="function"?e:null)}var W=Object.assign,Ll;function jn(e){if(Ll===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ll=t&&t[1]||""}return`
`+Ll+e}var Il=!1;function Ml(e,t){if(!e||Il)return"";Il=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var l=c.stack.split(`
`),i=r.stack.split(`
`),o=l.length-1,a=i.length-1;1<=o&&0<=a&&l[o]!==i[a];)a--;for(;1<=o&&0<=a;o--,a--)if(l[o]!==i[a]){if(o!==1||a!==1)do if(o--,a--,0>a||l[o]!==i[a]){var s=`
`+l[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=o&&0<=a);break}}}finally{Il=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?jn(e):""}function nf(e){switch(e.tag){case 5:return jn(e.type);case 16:return jn("Lazy");case 13:return jn("Suspense");case 19:return jn("SuspenseList");case 0:case 2:case 15:return e=Ml(e.type,!1),e;case 11:return e=Ml(e.type.render,!1),e;case 1:return e=Ml(e.type,!0),e;default:return""}}function ui(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Wt:return"Fragment";case Ht:return"Portal";case oi:return"Profiler";case lo:return"StrictMode";case ai:return"Suspense";case si:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Cs:return(e.displayName||"Context")+".Consumer";case zs:return(e._context.displayName||"Context")+".Provider";case io:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case oo:return t=e.displayName||null,t!==null?t:ui(e.type)||"Memo";case ot:t=e._payload,e=e._init;try{return ui(e(t))}catch{}}return null}function rf(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ui(t);case 8:return t===lo?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function xt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ts(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function lf(e){var t=Ts(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function hr(e){e._valueTracker||(e._valueTracker=lf(e))}function Ps(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ts(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Hr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ci(e,t){var n=t.checked;return W({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ia(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=xt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ls(e,t){t=t.checked,t!=null&&ro(e,"checked",t,!1)}function fi(e,t){Ls(e,t);var n=xt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?di(e,t.type,n):t.hasOwnProperty("defaultValue")&&di(e,t.type,xt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function oa(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function di(e,t,n){(t!=="number"||Hr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Tn=Array.isArray;function tn(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+xt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function pi(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return W({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function aa(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(k(92));if(Tn(n)){if(1<n.length)throw Error(k(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:xt(n)}}function Is(e,t){var n=xt(t.value),r=xt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function sa(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ms(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function mi(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ms(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var gr,Rs=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(gr=gr||document.createElement("div"),gr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=gr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Vn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var In={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},of=["Webkit","ms","Moz","O"];Object.keys(In).forEach(function(e){of.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),In[t]=In[e]})});function Ds(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||In.hasOwnProperty(e)&&In[e]?(""+t).trim():t+"px"}function Os(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=Ds(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var af=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function hi(e,t){if(t){if(af[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function gi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vi=null;function ao(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var yi=null,nn=null,rn=null;function ua(e){if(e=sr(e)){if(typeof yi!="function")throw Error(k(280));var t=e.stateNode;t&&(t=yl(t),yi(e.stateNode,e.type,t))}}function Fs(e){nn?rn?rn.push(e):rn=[e]:nn=e}function As(){if(nn){var e=nn,t=rn;if(rn=nn=null,ua(e),t)for(e=0;e<t.length;e++)ua(t[e])}}function Us(e,t){return e(t)}function $s(){}var Rl=!1;function Bs(e,t,n){if(Rl)return e(t,n);Rl=!0;try{return Us(e,t,n)}finally{Rl=!1,(nn!==null||rn!==null)&&($s(),As())}}function Hn(e,t){var n=e.stateNode;if(n===null)return null;var r=yl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(k(231,t,typeof n));return n}var wi=!1;if(et)try{var kn={};Object.defineProperty(kn,"passive",{get:function(){wi=!0}}),window.addEventListener("test",kn,kn),window.removeEventListener("test",kn,kn)}catch{wi=!1}function sf(e,t,n,r,l,i,o,a,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(g){this.onError(g)}}var Mn=!1,Wr=null,Qr=!1,xi=null,uf={onError:function(e){Mn=!0,Wr=e}};function cf(e,t,n,r,l,i,o,a,s){Mn=!1,Wr=null,sf.apply(uf,arguments)}function ff(e,t,n,r,l,i,o,a,s){if(cf.apply(this,arguments),Mn){if(Mn){var c=Wr;Mn=!1,Wr=null}else throw Error(k(198));Qr||(Qr=!0,xi=c)}}function Ut(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Vs(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ca(e){if(Ut(e)!==e)throw Error(k(188))}function df(e){var t=e.alternate;if(!t){if(t=Ut(e),t===null)throw Error(k(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return ca(l),e;if(i===r)return ca(l),t;i=i.sibling}throw Error(k(188))}if(n.return!==r.return)n=l,r=i;else{for(var o=!1,a=l.child;a;){if(a===n){o=!0,n=l,r=i;break}if(a===r){o=!0,r=l,n=i;break}a=a.sibling}if(!o){for(a=i.child;a;){if(a===n){o=!0,n=i,r=l;break}if(a===r){o=!0,r=i,n=l;break}a=a.sibling}if(!o)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?e:t}function Hs(e){return e=df(e),e!==null?Ws(e):null}function Ws(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ws(e);if(t!==null)return t;e=e.sibling}return null}var Qs=Se.unstable_scheduleCallback,fa=Se.unstable_cancelCallback,pf=Se.unstable_shouldYield,mf=Se.unstable_requestPaint,K=Se.unstable_now,hf=Se.unstable_getCurrentPriorityLevel,so=Se.unstable_ImmediatePriority,bs=Se.unstable_UserBlockingPriority,br=Se.unstable_NormalPriority,gf=Se.unstable_LowPriority,Ks=Se.unstable_IdlePriority,ml=null,Ke=null;function vf(e){if(Ke&&typeof Ke.onCommitFiberRoot=="function")try{Ke.onCommitFiberRoot(ml,e,void 0,(e.current.flags&128)===128)}catch{}}var $e=Math.clz32?Math.clz32:xf,yf=Math.log,wf=Math.LN2;function xf(e){return e>>>=0,e===0?32:31-(yf(e)/wf|0)|0}var vr=64,yr=4194304;function Pn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Kr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~l;a!==0?r=Pn(a):(i&=o,i!==0&&(r=Pn(i)))}else o=n&~l,o!==0?r=Pn(o):i!==0&&(r=Pn(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-$e(t),l=1<<n,r|=e[n],t&=~l;return r}function kf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Sf(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-$e(i),a=1<<o,s=l[o];s===-1?(!(a&n)||a&r)&&(l[o]=kf(a,t)):s<=t&&(e.expiredLanes|=a),i&=~a}}function ki(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ys(){var e=vr;return vr<<=1,!(vr&4194240)&&(vr=64),e}function Dl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function or(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-$e(t),e[t]=n}function Ef(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-$e(n),i=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~i}}function uo(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-$e(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var D=0;function Gs(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Xs,co,Zs,Js,qs,Si=!1,wr=[],dt=null,pt=null,mt=null,Wn=new Map,Qn=new Map,st=[],Nf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function da(e,t){switch(e){case"focusin":case"focusout":dt=null;break;case"dragenter":case"dragleave":pt=null;break;case"mouseover":case"mouseout":mt=null;break;case"pointerover":case"pointerout":Wn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qn.delete(t.pointerId)}}function Sn(e,t,n,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=sr(t),t!==null&&co(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function _f(e,t,n,r,l){switch(t){case"focusin":return dt=Sn(dt,e,t,n,r,l),!0;case"dragenter":return pt=Sn(pt,e,t,n,r,l),!0;case"mouseover":return mt=Sn(mt,e,t,n,r,l),!0;case"pointerover":var i=l.pointerId;return Wn.set(i,Sn(Wn.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,Qn.set(i,Sn(Qn.get(i)||null,e,t,n,r,l)),!0}return!1}function eu(e){var t=jt(e.target);if(t!==null){var n=Ut(t);if(n!==null){if(t=n.tag,t===13){if(t=Vs(n),t!==null){e.blockedOn=t,qs(e.priority,function(){Zs(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ir(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ei(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);vi=r,n.target.dispatchEvent(r),vi=null}else return t=sr(n),t!==null&&co(t),e.blockedOn=n,!1;t.shift()}return!0}function pa(e,t,n){Ir(e)&&n.delete(t)}function zf(){Si=!1,dt!==null&&Ir(dt)&&(dt=null),pt!==null&&Ir(pt)&&(pt=null),mt!==null&&Ir(mt)&&(mt=null),Wn.forEach(pa),Qn.forEach(pa)}function En(e,t){e.blockedOn===t&&(e.blockedOn=null,Si||(Si=!0,Se.unstable_scheduleCallback(Se.unstable_NormalPriority,zf)))}function bn(e){function t(l){return En(l,e)}if(0<wr.length){En(wr[0],e);for(var n=1;n<wr.length;n++){var r=wr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(dt!==null&&En(dt,e),pt!==null&&En(pt,e),mt!==null&&En(mt,e),Wn.forEach(t),Qn.forEach(t),n=0;n<st.length;n++)r=st[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<st.length&&(n=st[0],n.blockedOn===null);)eu(n),n.blockedOn===null&&st.shift()}var ln=lt.ReactCurrentBatchConfig,Yr=!0;function Cf(e,t,n,r){var l=D,i=ln.transition;ln.transition=null;try{D=1,fo(e,t,n,r)}finally{D=l,ln.transition=i}}function jf(e,t,n,r){var l=D,i=ln.transition;ln.transition=null;try{D=4,fo(e,t,n,r)}finally{D=l,ln.transition=i}}function fo(e,t,n,r){if(Yr){var l=Ei(e,t,n,r);if(l===null)Ql(e,t,r,Gr,n),da(e,r);else if(_f(l,e,t,n,r))r.stopPropagation();else if(da(e,r),t&4&&-1<Nf.indexOf(e)){for(;l!==null;){var i=sr(l);if(i!==null&&Xs(i),i=Ei(e,t,n,r),i===null&&Ql(e,t,r,Gr,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else Ql(e,t,r,null,n)}}var Gr=null;function Ei(e,t,n,r){if(Gr=null,e=ao(r),e=jt(e),e!==null)if(t=Ut(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Vs(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Gr=e,null}function tu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(hf()){case so:return 1;case bs:return 4;case br:case gf:return 16;case Ks:return 536870912;default:return 16}default:return 16}}var ct=null,po=null,Mr=null;function nu(){if(Mr)return Mr;var e,t=po,n=t.length,r,l="value"in ct?ct.value:ct.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===l[i-r];r++);return Mr=l.slice(e,1<r?1-r:void 0)}function Rr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function xr(){return!0}function ma(){return!1}function Ne(e){function t(n,r,l,i,o){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?xr:ma,this.isPropagationStopped=ma,this}return W(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=xr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=xr)},persist:function(){},isPersistent:xr}),t}var vn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},mo=Ne(vn),ar=W({},vn,{view:0,detail:0}),Tf=Ne(ar),Ol,Fl,Nn,hl=W({},ar,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ho,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Nn&&(Nn&&e.type==="mousemove"?(Ol=e.screenX-Nn.screenX,Fl=e.screenY-Nn.screenY):Fl=Ol=0,Nn=e),Ol)},movementY:function(e){return"movementY"in e?e.movementY:Fl}}),ha=Ne(hl),Pf=W({},hl,{dataTransfer:0}),Lf=Ne(Pf),If=W({},ar,{relatedTarget:0}),Al=Ne(If),Mf=W({},vn,{animationName:0,elapsedTime:0,pseudoElement:0}),Rf=Ne(Mf),Df=W({},vn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Of=Ne(Df),Ff=W({},vn,{data:0}),ga=Ne(Ff),Af={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Uf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$f={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Bf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=$f[e])?!!t[e]:!1}function ho(){return Bf}var Vf=W({},ar,{key:function(e){if(e.key){var t=Af[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Rr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Uf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ho,charCode:function(e){return e.type==="keypress"?Rr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Rr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Hf=Ne(Vf),Wf=W({},hl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),va=Ne(Wf),Qf=W({},ar,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ho}),bf=Ne(Qf),Kf=W({},vn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Yf=Ne(Kf),Gf=W({},hl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Xf=Ne(Gf),Zf=[9,13,27,32],go=et&&"CompositionEvent"in window,Rn=null;et&&"documentMode"in document&&(Rn=document.documentMode);var Jf=et&&"TextEvent"in window&&!Rn,ru=et&&(!go||Rn&&8<Rn&&11>=Rn),ya=" ",wa=!1;function lu(e,t){switch(e){case"keyup":return Zf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function iu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Qt=!1;function qf(e,t){switch(e){case"compositionend":return iu(t);case"keypress":return t.which!==32?null:(wa=!0,ya);case"textInput":return e=t.data,e===ya&&wa?null:e;default:return null}}function ed(e,t){if(Qt)return e==="compositionend"||!go&&lu(e,t)?(e=nu(),Mr=po=ct=null,Qt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ru&&t.locale!=="ko"?null:t.data;default:return null}}var td={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!td[e.type]:t==="textarea"}function ou(e,t,n,r){Fs(r),t=Xr(t,"onChange"),0<t.length&&(n=new mo("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Dn=null,Kn=null;function nd(e){vu(e,0)}function gl(e){var t=Yt(e);if(Ps(t))return e}function rd(e,t){if(e==="change")return t}var au=!1;if(et){var Ul;if(et){var $l="oninput"in document;if(!$l){var ka=document.createElement("div");ka.setAttribute("oninput","return;"),$l=typeof ka.oninput=="function"}Ul=$l}else Ul=!1;au=Ul&&(!document.documentMode||9<document.documentMode)}function Sa(){Dn&&(Dn.detachEvent("onpropertychange",su),Kn=Dn=null)}function su(e){if(e.propertyName==="value"&&gl(Kn)){var t=[];ou(t,Kn,e,ao(e)),Bs(nd,t)}}function ld(e,t,n){e==="focusin"?(Sa(),Dn=t,Kn=n,Dn.attachEvent("onpropertychange",su)):e==="focusout"&&Sa()}function id(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return gl(Kn)}function od(e,t){if(e==="click")return gl(t)}function ad(e,t){if(e==="input"||e==="change")return gl(t)}function sd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ve=typeof Object.is=="function"?Object.is:sd;function Yn(e,t){if(Ve(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!ii.call(t,l)||!Ve(e[l],t[l]))return!1}return!0}function Ea(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Na(e,t){var n=Ea(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ea(n)}}function uu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?uu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function cu(){for(var e=window,t=Hr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Hr(e.document)}return t}function vo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function ud(e){var t=cu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&uu(n.ownerDocument.documentElement,n)){if(r!==null&&vo(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=Na(n,i);var o=Na(n,r);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var cd=et&&"documentMode"in document&&11>=document.documentMode,bt=null,Ni=null,On=null,_i=!1;function _a(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;_i||bt==null||bt!==Hr(r)||(r=bt,"selectionStart"in r&&vo(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),On&&Yn(On,r)||(On=r,r=Xr(Ni,"onSelect"),0<r.length&&(t=new mo("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=bt)))}function kr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Kt={animationend:kr("Animation","AnimationEnd"),animationiteration:kr("Animation","AnimationIteration"),animationstart:kr("Animation","AnimationStart"),transitionend:kr("Transition","TransitionEnd")},Bl={},fu={};et&&(fu=document.createElement("div").style,"AnimationEvent"in window||(delete Kt.animationend.animation,delete Kt.animationiteration.animation,delete Kt.animationstart.animation),"TransitionEvent"in window||delete Kt.transitionend.transition);function vl(e){if(Bl[e])return Bl[e];if(!Kt[e])return e;var t=Kt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in fu)return Bl[e]=t[n];return e}var du=vl("animationend"),pu=vl("animationiteration"),mu=vl("animationstart"),hu=vl("transitionend"),gu=new Map,za="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function St(e,t){gu.set(e,t),At(t,[e])}for(var Vl=0;Vl<za.length;Vl++){var Hl=za[Vl],fd=Hl.toLowerCase(),dd=Hl[0].toUpperCase()+Hl.slice(1);St(fd,"on"+dd)}St(du,"onAnimationEnd");St(pu,"onAnimationIteration");St(mu,"onAnimationStart");St("dblclick","onDoubleClick");St("focusin","onFocus");St("focusout","onBlur");St(hu,"onTransitionEnd");un("onMouseEnter",["mouseout","mouseover"]);un("onMouseLeave",["mouseout","mouseover"]);un("onPointerEnter",["pointerout","pointerover"]);un("onPointerLeave",["pointerout","pointerover"]);At("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));At("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));At("onBeforeInput",["compositionend","keypress","textInput","paste"]);At("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));At("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));At("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ln="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pd=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ln));function Ca(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,ff(r,t,void 0,e),e.currentTarget=null}function vu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],s=a.instance,c=a.currentTarget;if(a=a.listener,s!==i&&l.isPropagationStopped())break e;Ca(l,a,c),i=s}else for(o=0;o<r.length;o++){if(a=r[o],s=a.instance,c=a.currentTarget,a=a.listener,s!==i&&l.isPropagationStopped())break e;Ca(l,a,c),i=s}}}if(Qr)throw e=xi,Qr=!1,xi=null,e}function F(e,t){var n=t[Pi];n===void 0&&(n=t[Pi]=new Set);var r=e+"__bubble";n.has(r)||(yu(t,e,2,!1),n.add(r))}function Wl(e,t,n){var r=0;t&&(r|=4),yu(n,e,r,t)}var Sr="_reactListening"+Math.random().toString(36).slice(2);function Gn(e){if(!e[Sr]){e[Sr]=!0,_s.forEach(function(n){n!=="selectionchange"&&(pd.has(n)||Wl(n,!1,e),Wl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Sr]||(t[Sr]=!0,Wl("selectionchange",!1,t))}}function yu(e,t,n,r){switch(tu(t)){case 1:var l=Cf;break;case 4:l=jf;break;default:l=fo}n=l.bind(null,t,n,e),l=void 0,!wi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Ql(e,t,n,r,l){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===l||a.nodeType===8&&a.parentNode===l)break;if(o===4)for(o=r.return;o!==null;){var s=o.tag;if((s===3||s===4)&&(s=o.stateNode.containerInfo,s===l||s.nodeType===8&&s.parentNode===l))return;o=o.return}for(;a!==null;){if(o=jt(a),o===null)return;if(s=o.tag,s===5||s===6){r=i=o;continue e}a=a.parentNode}}r=r.return}Bs(function(){var c=i,g=ao(n),h=[];e:{var m=gu.get(e);if(m!==void 0){var v=mo,x=e;switch(e){case"keypress":if(Rr(n)===0)break e;case"keydown":case"keyup":v=Hf;break;case"focusin":x="focus",v=Al;break;case"focusout":x="blur",v=Al;break;case"beforeblur":case"afterblur":v=Al;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=ha;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Lf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=bf;break;case du:case pu:case mu:v=Rf;break;case hu:v=Yf;break;case"scroll":v=Tf;break;case"wheel":v=Xf;break;case"copy":case"cut":case"paste":v=Of;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=va}var w=(t&4)!==0,L=!w&&e==="scroll",f=w?m!==null?m+"Capture":null:m;w=[];for(var u=c,p;u!==null;){p=u;var y=p.stateNode;if(p.tag===5&&y!==null&&(p=y,f!==null&&(y=Hn(u,f),y!=null&&w.push(Xn(u,y,p)))),L)break;u=u.return}0<w.length&&(m=new v(m,x,null,n,g),h.push({event:m,listeners:w}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",m&&n!==vi&&(x=n.relatedTarget||n.fromElement)&&(jt(x)||x[tt]))break e;if((v||m)&&(m=g.window===g?g:(m=g.ownerDocument)?m.defaultView||m.parentWindow:window,v?(x=n.relatedTarget||n.toElement,v=c,x=x?jt(x):null,x!==null&&(L=Ut(x),x!==L||x.tag!==5&&x.tag!==6)&&(x=null)):(v=null,x=c),v!==x)){if(w=ha,y="onMouseLeave",f="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(w=va,y="onPointerLeave",f="onPointerEnter",u="pointer"),L=v==null?m:Yt(v),p=x==null?m:Yt(x),m=new w(y,u+"leave",v,n,g),m.target=L,m.relatedTarget=p,y=null,jt(g)===c&&(w=new w(f,u+"enter",x,n,g),w.target=p,w.relatedTarget=L,y=w),L=y,v&&x)t:{for(w=v,f=x,u=0,p=w;p;p=Vt(p))u++;for(p=0,y=f;y;y=Vt(y))p++;for(;0<u-p;)w=Vt(w),u--;for(;0<p-u;)f=Vt(f),p--;for(;u--;){if(w===f||f!==null&&w===f.alternate)break t;w=Vt(w),f=Vt(f)}w=null}else w=null;v!==null&&ja(h,m,v,w,!1),x!==null&&L!==null&&ja(h,L,x,w,!0)}}e:{if(m=c?Yt(c):window,v=m.nodeName&&m.nodeName.toLowerCase(),v==="select"||v==="input"&&m.type==="file")var E=rd;else if(xa(m))if(au)E=ad;else{E=id;var z=ld}else(v=m.nodeName)&&v.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(E=od);if(E&&(E=E(e,c))){ou(h,E,n,g);break e}z&&z(e,m,c),e==="focusout"&&(z=m._wrapperState)&&z.controlled&&m.type==="number"&&di(m,"number",m.value)}switch(z=c?Yt(c):window,e){case"focusin":(xa(z)||z.contentEditable==="true")&&(bt=z,Ni=c,On=null);break;case"focusout":On=Ni=bt=null;break;case"mousedown":_i=!0;break;case"contextmenu":case"mouseup":case"dragend":_i=!1,_a(h,n,g);break;case"selectionchange":if(cd)break;case"keydown":case"keyup":_a(h,n,g)}var _;if(go)e:{switch(e){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else Qt?lu(e,n)&&(C="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(ru&&n.locale!=="ko"&&(Qt||C!=="onCompositionStart"?C==="onCompositionEnd"&&Qt&&(_=nu()):(ct=g,po="value"in ct?ct.value:ct.textContent,Qt=!0)),z=Xr(c,C),0<z.length&&(C=new ga(C,e,null,n,g),h.push({event:C,listeners:z}),_?C.data=_:(_=iu(n),_!==null&&(C.data=_)))),(_=Jf?qf(e,n):ed(e,n))&&(c=Xr(c,"onBeforeInput"),0<c.length&&(g=new ga("onBeforeInput","beforeinput",null,n,g),h.push({event:g,listeners:c}),g.data=_))}vu(h,t)})}function Xn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Xr(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=Hn(e,n),i!=null&&r.unshift(Xn(e,i,l)),i=Hn(e,t),i!=null&&r.push(Xn(e,i,l))),e=e.return}return r}function Vt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ja(e,t,n,r,l){for(var i=t._reactName,o=[];n!==null&&n!==r;){var a=n,s=a.alternate,c=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&c!==null&&(a=c,l?(s=Hn(n,i),s!=null&&o.unshift(Xn(n,s,a))):l||(s=Hn(n,i),s!=null&&o.push(Xn(n,s,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var md=/\r\n?/g,hd=/\u0000|\uFFFD/g;function Ta(e){return(typeof e=="string"?e:""+e).replace(md,`
`).replace(hd,"")}function Er(e,t,n){if(t=Ta(t),Ta(e)!==t&&n)throw Error(k(425))}function Zr(){}var zi=null,Ci=null;function ji(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ti=typeof setTimeout=="function"?setTimeout:void 0,gd=typeof clearTimeout=="function"?clearTimeout:void 0,Pa=typeof Promise=="function"?Promise:void 0,vd=typeof queueMicrotask=="function"?queueMicrotask:typeof Pa<"u"?function(e){return Pa.resolve(null).then(e).catch(yd)}:Ti;function yd(e){setTimeout(function(){throw e})}function bl(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),bn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);bn(t)}function ht(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function La(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var yn=Math.random().toString(36).slice(2),be="__reactFiber$"+yn,Zn="__reactProps$"+yn,tt="__reactContainer$"+yn,Pi="__reactEvents$"+yn,wd="__reactListeners$"+yn,xd="__reactHandles$"+yn;function jt(e){var t=e[be];if(t)return t;for(var n=e.parentNode;n;){if(t=n[tt]||n[be]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=La(e);e!==null;){if(n=e[be])return n;e=La(e)}return t}e=n,n=e.parentNode}return null}function sr(e){return e=e[be]||e[tt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Yt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function yl(e){return e[Zn]||null}var Li=[],Gt=-1;function Et(e){return{current:e}}function A(e){0>Gt||(e.current=Li[Gt],Li[Gt]=null,Gt--)}function O(e,t){Gt++,Li[Gt]=e.current,e.current=t}var kt={},ae=Et(kt),he=Et(!1),Mt=kt;function cn(e,t){var n=e.type.contextTypes;if(!n)return kt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function ge(e){return e=e.childContextTypes,e!=null}function Jr(){A(he),A(ae)}function Ia(e,t,n){if(ae.current!==kt)throw Error(k(168));O(ae,t),O(he,n)}function wu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(k(108,rf(e)||"Unknown",l));return W({},n,r)}function qr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||kt,Mt=ae.current,O(ae,e),O(he,he.current),!0}function Ma(e,t,n){var r=e.stateNode;if(!r)throw Error(k(169));n?(e=wu(e,t,Mt),r.__reactInternalMemoizedMergedChildContext=e,A(he),A(ae),O(ae,e)):A(he),O(he,n)}var Xe=null,wl=!1,Kl=!1;function xu(e){Xe===null?Xe=[e]:Xe.push(e)}function kd(e){wl=!0,xu(e)}function Nt(){if(!Kl&&Xe!==null){Kl=!0;var e=0,t=D;try{var n=Xe;for(D=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Xe=null,wl=!1}catch(l){throw Xe!==null&&(Xe=Xe.slice(e+1)),Qs(so,Nt),l}finally{D=t,Kl=!1}}return null}var Xt=[],Zt=0,el=null,tl=0,Ce=[],je=0,Rt=null,Ze=1,Je="";function zt(e,t){Xt[Zt++]=tl,Xt[Zt++]=el,el=e,tl=t}function ku(e,t,n){Ce[je++]=Ze,Ce[je++]=Je,Ce[je++]=Rt,Rt=e;var r=Ze;e=Je;var l=32-$e(r)-1;r&=~(1<<l),n+=1;var i=32-$e(t)+l;if(30<i){var o=l-l%5;i=(r&(1<<o)-1).toString(32),r>>=o,l-=o,Ze=1<<32-$e(t)+l|n<<l|r,Je=i+e}else Ze=1<<i|n<<l|r,Je=e}function yo(e){e.return!==null&&(zt(e,1),ku(e,1,0))}function wo(e){for(;e===el;)el=Xt[--Zt],Xt[Zt]=null,tl=Xt[--Zt],Xt[Zt]=null;for(;e===Rt;)Rt=Ce[--je],Ce[je]=null,Je=Ce[--je],Ce[je]=null,Ze=Ce[--je],Ce[je]=null}var ke=null,xe=null,$=!1,Ae=null;function Su(e,t){var n=Te(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ra(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ke=e,xe=ht(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ke=e,xe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Rt!==null?{id:Ze,overflow:Je}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Te(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ke=e,xe=null,!0):!1;default:return!1}}function Ii(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Mi(e){if($){var t=xe;if(t){var n=t;if(!Ra(e,t)){if(Ii(e))throw Error(k(418));t=ht(n.nextSibling);var r=ke;t&&Ra(e,t)?Su(r,n):(e.flags=e.flags&-4097|2,$=!1,ke=e)}}else{if(Ii(e))throw Error(k(418));e.flags=e.flags&-4097|2,$=!1,ke=e}}}function Da(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ke=e}function Nr(e){if(e!==ke)return!1;if(!$)return Da(e),$=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ji(e.type,e.memoizedProps)),t&&(t=xe)){if(Ii(e))throw Eu(),Error(k(418));for(;t;)Su(e,t),t=ht(t.nextSibling)}if(Da(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){xe=ht(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}xe=null}}else xe=ke?ht(e.stateNode.nextSibling):null;return!0}function Eu(){for(var e=xe;e;)e=ht(e.nextSibling)}function fn(){xe=ke=null,$=!1}function xo(e){Ae===null?Ae=[e]:Ae.push(e)}var Sd=lt.ReactCurrentBatchConfig;function _n(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,e));var l=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var a=l.refs;o===null?delete a[i]:a[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,e))}return e}function _r(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Oa(e){var t=e._init;return t(e._payload)}function Nu(e){function t(f,u){if(e){var p=f.deletions;p===null?(f.deletions=[u],f.flags|=16):p.push(u)}}function n(f,u){if(!e)return null;for(;u!==null;)t(f,u),u=u.sibling;return null}function r(f,u){for(f=new Map;u!==null;)u.key!==null?f.set(u.key,u):f.set(u.index,u),u=u.sibling;return f}function l(f,u){return f=wt(f,u),f.index=0,f.sibling=null,f}function i(f,u,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<u?(f.flags|=2,u):p):(f.flags|=2,u)):(f.flags|=1048576,u)}function o(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,u,p,y){return u===null||u.tag!==6?(u=ei(p,f.mode,y),u.return=f,u):(u=l(u,p),u.return=f,u)}function s(f,u,p,y){var E=p.type;return E===Wt?g(f,u,p.props.children,y,p.key):u!==null&&(u.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===ot&&Oa(E)===u.type)?(y=l(u,p.props),y.ref=_n(f,u,p),y.return=f,y):(y=Br(p.type,p.key,p.props,null,f.mode,y),y.ref=_n(f,u,p),y.return=f,y)}function c(f,u,p,y){return u===null||u.tag!==4||u.stateNode.containerInfo!==p.containerInfo||u.stateNode.implementation!==p.implementation?(u=ti(p,f.mode,y),u.return=f,u):(u=l(u,p.children||[]),u.return=f,u)}function g(f,u,p,y,E){return u===null||u.tag!==7?(u=It(p,f.mode,y,E),u.return=f,u):(u=l(u,p),u.return=f,u)}function h(f,u,p){if(typeof u=="string"&&u!==""||typeof u=="number")return u=ei(""+u,f.mode,p),u.return=f,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case mr:return p=Br(u.type,u.key,u.props,null,f.mode,p),p.ref=_n(f,null,u),p.return=f,p;case Ht:return u=ti(u,f.mode,p),u.return=f,u;case ot:var y=u._init;return h(f,y(u._payload),p)}if(Tn(u)||xn(u))return u=It(u,f.mode,p,null),u.return=f,u;_r(f,u)}return null}function m(f,u,p,y){var E=u!==null?u.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return E!==null?null:a(f,u,""+p,y);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case mr:return p.key===E?s(f,u,p,y):null;case Ht:return p.key===E?c(f,u,p,y):null;case ot:return E=p._init,m(f,u,E(p._payload),y)}if(Tn(p)||xn(p))return E!==null?null:g(f,u,p,y,null);_r(f,p)}return null}function v(f,u,p,y,E){if(typeof y=="string"&&y!==""||typeof y=="number")return f=f.get(p)||null,a(u,f,""+y,E);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case mr:return f=f.get(y.key===null?p:y.key)||null,s(u,f,y,E);case Ht:return f=f.get(y.key===null?p:y.key)||null,c(u,f,y,E);case ot:var z=y._init;return v(f,u,p,z(y._payload),E)}if(Tn(y)||xn(y))return f=f.get(p)||null,g(u,f,y,E,null);_r(u,y)}return null}function x(f,u,p,y){for(var E=null,z=null,_=u,C=u=0,B=null;_!==null&&C<p.length;C++){_.index>C?(B=_,_=null):B=_.sibling;var P=m(f,_,p[C],y);if(P===null){_===null&&(_=B);break}e&&_&&P.alternate===null&&t(f,_),u=i(P,u,C),z===null?E=P:z.sibling=P,z=P,_=B}if(C===p.length)return n(f,_),$&&zt(f,C),E;if(_===null){for(;C<p.length;C++)_=h(f,p[C],y),_!==null&&(u=i(_,u,C),z===null?E=_:z.sibling=_,z=_);return $&&zt(f,C),E}for(_=r(f,_);C<p.length;C++)B=v(_,f,C,p[C],y),B!==null&&(e&&B.alternate!==null&&_.delete(B.key===null?C:B.key),u=i(B,u,C),z===null?E=B:z.sibling=B,z=B);return e&&_.forEach(function(ee){return t(f,ee)}),$&&zt(f,C),E}function w(f,u,p,y){var E=xn(p);if(typeof E!="function")throw Error(k(150));if(p=E.call(p),p==null)throw Error(k(151));for(var z=E=null,_=u,C=u=0,B=null,P=p.next();_!==null&&!P.done;C++,P=p.next()){_.index>C?(B=_,_=null):B=_.sibling;var ee=m(f,_,P.value,y);if(ee===null){_===null&&(_=B);break}e&&_&&ee.alternate===null&&t(f,_),u=i(ee,u,C),z===null?E=ee:z.sibling=ee,z=ee,_=B}if(P.done)return n(f,_),$&&zt(f,C),E;if(_===null){for(;!P.done;C++,P=p.next())P=h(f,P.value,y),P!==null&&(u=i(P,u,C),z===null?E=P:z.sibling=P,z=P);return $&&zt(f,C),E}for(_=r(f,_);!P.done;C++,P=p.next())P=v(_,f,C,P.value,y),P!==null&&(e&&P.alternate!==null&&_.delete(P.key===null?C:P.key),u=i(P,u,C),z===null?E=P:z.sibling=P,z=P);return e&&_.forEach(function(Me){return t(f,Me)}),$&&zt(f,C),E}function L(f,u,p,y){if(typeof p=="object"&&p!==null&&p.type===Wt&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case mr:e:{for(var E=p.key,z=u;z!==null;){if(z.key===E){if(E=p.type,E===Wt){if(z.tag===7){n(f,z.sibling),u=l(z,p.props.children),u.return=f,f=u;break e}}else if(z.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===ot&&Oa(E)===z.type){n(f,z.sibling),u=l(z,p.props),u.ref=_n(f,z,p),u.return=f,f=u;break e}n(f,z);break}else t(f,z);z=z.sibling}p.type===Wt?(u=It(p.props.children,f.mode,y,p.key),u.return=f,f=u):(y=Br(p.type,p.key,p.props,null,f.mode,y),y.ref=_n(f,u,p),y.return=f,f=y)}return o(f);case Ht:e:{for(z=p.key;u!==null;){if(u.key===z)if(u.tag===4&&u.stateNode.containerInfo===p.containerInfo&&u.stateNode.implementation===p.implementation){n(f,u.sibling),u=l(u,p.children||[]),u.return=f,f=u;break e}else{n(f,u);break}else t(f,u);u=u.sibling}u=ti(p,f.mode,y),u.return=f,f=u}return o(f);case ot:return z=p._init,L(f,u,z(p._payload),y)}if(Tn(p))return x(f,u,p,y);if(xn(p))return w(f,u,p,y);_r(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,u!==null&&u.tag===6?(n(f,u.sibling),u=l(u,p),u.return=f,f=u):(n(f,u),u=ei(p,f.mode,y),u.return=f,f=u),o(f)):n(f,u)}return L}var dn=Nu(!0),_u=Nu(!1),nl=Et(null),rl=null,Jt=null,ko=null;function So(){ko=Jt=rl=null}function Eo(e){var t=nl.current;A(nl),e._currentValue=t}function Ri(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function on(e,t){rl=e,ko=Jt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(me=!0),e.firstContext=null)}function Le(e){var t=e._currentValue;if(ko!==e)if(e={context:e,memoizedValue:t,next:null},Jt===null){if(rl===null)throw Error(k(308));Jt=e,rl.dependencies={lanes:0,firstContext:e}}else Jt=Jt.next=e;return t}var Tt=null;function No(e){Tt===null?Tt=[e]:Tt.push(e)}function zu(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,No(t)):(n.next=l.next,l.next=n),t.interleaved=n,nt(e,r)}function nt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var at=!1;function _o(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Cu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function qe(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function gt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,M&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,nt(e,n)}return l=r.interleaved,l===null?(t.next=t,No(r)):(t.next=l.next,l.next=t),r.interleaved=t,nt(e,n)}function Dr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,uo(e,n)}}function Fa(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ll(e,t,n,r){var l=e.updateQueue;at=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,a=l.shared.pending;if(a!==null){l.shared.pending=null;var s=a,c=s.next;s.next=null,o===null?i=c:o.next=c,o=s;var g=e.alternate;g!==null&&(g=g.updateQueue,a=g.lastBaseUpdate,a!==o&&(a===null?g.firstBaseUpdate=c:a.next=c,g.lastBaseUpdate=s))}if(i!==null){var h=l.baseState;o=0,g=c=s=null,a=i;do{var m=a.lane,v=a.eventTime;if((r&m)===m){g!==null&&(g=g.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=e,w=a;switch(m=t,v=n,w.tag){case 1:if(x=w.payload,typeof x=="function"){h=x.call(v,h,m);break e}h=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=w.payload,m=typeof x=="function"?x.call(v,h,m):x,m==null)break e;h=W({},h,m);break e;case 2:at=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=l.effects,m===null?l.effects=[a]:m.push(a))}else v={eventTime:v,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},g===null?(c=g=v,s=h):g=g.next=v,o|=m;if(a=a.next,a===null){if(a=l.shared.pending,a===null)break;m=a,a=m.next,m.next=null,l.lastBaseUpdate=m,l.shared.pending=null}}while(!0);if(g===null&&(s=h),l.baseState=s,l.firstBaseUpdate=c,l.lastBaseUpdate=g,t=l.shared.interleaved,t!==null){l=t;do o|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);Ot|=o,e.lanes=o,e.memoizedState=h}}function Aa(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(k(191,l));l.call(r)}}}var ur={},Ye=Et(ur),Jn=Et(ur),qn=Et(ur);function Pt(e){if(e===ur)throw Error(k(174));return e}function zo(e,t){switch(O(qn,t),O(Jn,e),O(Ye,ur),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:mi(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=mi(t,e)}A(Ye),O(Ye,t)}function pn(){A(Ye),A(Jn),A(qn)}function ju(e){Pt(qn.current);var t=Pt(Ye.current),n=mi(t,e.type);t!==n&&(O(Jn,e),O(Ye,n))}function Co(e){Jn.current===e&&(A(Ye),A(Jn))}var V=Et(0);function il(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Yl=[];function jo(){for(var e=0;e<Yl.length;e++)Yl[e]._workInProgressVersionPrimary=null;Yl.length=0}var Or=lt.ReactCurrentDispatcher,Gl=lt.ReactCurrentBatchConfig,Dt=0,H=null,G=null,J=null,ol=!1,Fn=!1,er=0,Ed=0;function le(){throw Error(k(321))}function To(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ve(e[n],t[n]))return!1;return!0}function Po(e,t,n,r,l,i){if(Dt=i,H=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Or.current=e===null||e.memoizedState===null?Cd:jd,e=n(r,l),Fn){i=0;do{if(Fn=!1,er=0,25<=i)throw Error(k(301));i+=1,J=G=null,t.updateQueue=null,Or.current=Td,e=n(r,l)}while(Fn)}if(Or.current=al,t=G!==null&&G.next!==null,Dt=0,J=G=H=null,ol=!1,t)throw Error(k(300));return e}function Lo(){var e=er!==0;return er=0,e}function Qe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return J===null?H.memoizedState=J=e:J=J.next=e,J}function Ie(){if(G===null){var e=H.alternate;e=e!==null?e.memoizedState:null}else e=G.next;var t=J===null?H.memoizedState:J.next;if(t!==null)J=t,G=e;else{if(e===null)throw Error(k(310));G=e,e={memoizedState:G.memoizedState,baseState:G.baseState,baseQueue:G.baseQueue,queue:G.queue,next:null},J===null?H.memoizedState=J=e:J=J.next=e}return J}function tr(e,t){return typeof t=="function"?t(e):t}function Xl(e){var t=Ie(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=G,l=r.baseQueue,i=n.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}r.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,r=r.baseState;var a=o=null,s=null,c=i;do{var g=c.lane;if((Dt&g)===g)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var h={lane:g,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(a=s=h,o=r):s=s.next=h,H.lanes|=g,Ot|=g}c=c.next}while(c!==null&&c!==i);s===null?o=r:s.next=a,Ve(r,t.memoizedState)||(me=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do i=l.lane,H.lanes|=i,Ot|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Zl(e){var t=Ie(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);Ve(i,t.memoizedState)||(me=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Tu(){}function Pu(e,t){var n=H,r=Ie(),l=t(),i=!Ve(r.memoizedState,l);if(i&&(r.memoizedState=l,me=!0),r=r.queue,Io(Mu.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||J!==null&&J.memoizedState.tag&1){if(n.flags|=2048,nr(9,Iu.bind(null,n,r,l,t),void 0,null),q===null)throw Error(k(349));Dt&30||Lu(n,t,l)}return l}function Lu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Iu(e,t,n,r){t.value=n,t.getSnapshot=r,Ru(t)&&Du(e)}function Mu(e,t,n){return n(function(){Ru(t)&&Du(e)})}function Ru(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ve(e,n)}catch{return!0}}function Du(e){var t=nt(e,1);t!==null&&Be(t,e,1,-1)}function Ua(e){var t=Qe();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:tr,lastRenderedState:e},t.queue=e,e=e.dispatch=zd.bind(null,H,e),[t.memoizedState,e]}function nr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Ou(){return Ie().memoizedState}function Fr(e,t,n,r){var l=Qe();H.flags|=e,l.memoizedState=nr(1|t,n,void 0,r===void 0?null:r)}function xl(e,t,n,r){var l=Ie();r=r===void 0?null:r;var i=void 0;if(G!==null){var o=G.memoizedState;if(i=o.destroy,r!==null&&To(r,o.deps)){l.memoizedState=nr(t,n,i,r);return}}H.flags|=e,l.memoizedState=nr(1|t,n,i,r)}function $a(e,t){return Fr(8390656,8,e,t)}function Io(e,t){return xl(2048,8,e,t)}function Fu(e,t){return xl(4,2,e,t)}function Au(e,t){return xl(4,4,e,t)}function Uu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function $u(e,t,n){return n=n!=null?n.concat([e]):null,xl(4,4,Uu.bind(null,t,e),n)}function Mo(){}function Bu(e,t){var n=Ie();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&To(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Vu(e,t){var n=Ie();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&To(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Hu(e,t,n){return Dt&21?(Ve(n,t)||(n=Ys(),H.lanes|=n,Ot|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,me=!0),e.memoizedState=n)}function Nd(e,t){var n=D;D=n!==0&&4>n?n:4,e(!0);var r=Gl.transition;Gl.transition={};try{e(!1),t()}finally{D=n,Gl.transition=r}}function Wu(){return Ie().memoizedState}function _d(e,t,n){var r=yt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Qu(e))bu(t,n);else if(n=zu(e,t,n,r),n!==null){var l=ue();Be(n,e,r,l),Ku(n,t,r)}}function zd(e,t,n){var r=yt(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Qu(e))bu(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,a=i(o,n);if(l.hasEagerState=!0,l.eagerState=a,Ve(a,o)){var s=t.interleaved;s===null?(l.next=l,No(t)):(l.next=s.next,s.next=l),t.interleaved=l;return}}catch{}finally{}n=zu(e,t,l,r),n!==null&&(l=ue(),Be(n,e,r,l),Ku(n,t,r))}}function Qu(e){var t=e.alternate;return e===H||t!==null&&t===H}function bu(e,t){Fn=ol=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ku(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,uo(e,n)}}var al={readContext:Le,useCallback:le,useContext:le,useEffect:le,useImperativeHandle:le,useInsertionEffect:le,useLayoutEffect:le,useMemo:le,useReducer:le,useRef:le,useState:le,useDebugValue:le,useDeferredValue:le,useTransition:le,useMutableSource:le,useSyncExternalStore:le,useId:le,unstable_isNewReconciler:!1},Cd={readContext:Le,useCallback:function(e,t){return Qe().memoizedState=[e,t===void 0?null:t],e},useContext:Le,useEffect:$a,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Fr(4194308,4,Uu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Fr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Fr(4,2,e,t)},useMemo:function(e,t){var n=Qe();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Qe();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=_d.bind(null,H,e),[r.memoizedState,e]},useRef:function(e){var t=Qe();return e={current:e},t.memoizedState=e},useState:Ua,useDebugValue:Mo,useDeferredValue:function(e){return Qe().memoizedState=e},useTransition:function(){var e=Ua(!1),t=e[0];return e=Nd.bind(null,e[1]),Qe().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=H,l=Qe();if($){if(n===void 0)throw Error(k(407));n=n()}else{if(n=t(),q===null)throw Error(k(349));Dt&30||Lu(r,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,$a(Mu.bind(null,r,i,e),[e]),r.flags|=2048,nr(9,Iu.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Qe(),t=q.identifierPrefix;if($){var n=Je,r=Ze;n=(r&~(1<<32-$e(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=er++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Ed++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},jd={readContext:Le,useCallback:Bu,useContext:Le,useEffect:Io,useImperativeHandle:$u,useInsertionEffect:Fu,useLayoutEffect:Au,useMemo:Vu,useReducer:Xl,useRef:Ou,useState:function(){return Xl(tr)},useDebugValue:Mo,useDeferredValue:function(e){var t=Ie();return Hu(t,G.memoizedState,e)},useTransition:function(){var e=Xl(tr)[0],t=Ie().memoizedState;return[e,t]},useMutableSource:Tu,useSyncExternalStore:Pu,useId:Wu,unstable_isNewReconciler:!1},Td={readContext:Le,useCallback:Bu,useContext:Le,useEffect:Io,useImperativeHandle:$u,useInsertionEffect:Fu,useLayoutEffect:Au,useMemo:Vu,useReducer:Zl,useRef:Ou,useState:function(){return Zl(tr)},useDebugValue:Mo,useDeferredValue:function(e){var t=Ie();return G===null?t.memoizedState=e:Hu(t,G.memoizedState,e)},useTransition:function(){var e=Zl(tr)[0],t=Ie().memoizedState;return[e,t]},useMutableSource:Tu,useSyncExternalStore:Pu,useId:Wu,unstable_isNewReconciler:!1};function Oe(e,t){if(e&&e.defaultProps){t=W({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Di(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:W({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var kl={isMounted:function(e){return(e=e._reactInternals)?Ut(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ue(),l=yt(e),i=qe(r,l);i.payload=t,n!=null&&(i.callback=n),t=gt(e,i,l),t!==null&&(Be(t,e,l,r),Dr(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ue(),l=yt(e),i=qe(r,l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=gt(e,i,l),t!==null&&(Be(t,e,l,r),Dr(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ue(),r=yt(e),l=qe(n,r);l.tag=2,t!=null&&(l.callback=t),t=gt(e,l,r),t!==null&&(Be(t,e,r,n),Dr(t,e,r))}};function Ba(e,t,n,r,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):t.prototype&&t.prototype.isPureReactComponent?!Yn(n,r)||!Yn(l,i):!0}function Yu(e,t,n){var r=!1,l=kt,i=t.contextType;return typeof i=="object"&&i!==null?i=Le(i):(l=ge(t)?Mt:ae.current,r=t.contextTypes,i=(r=r!=null)?cn(e,l):kt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=kl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function Va(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&kl.enqueueReplaceState(t,t.state,null)}function Oi(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},_o(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=Le(i):(i=ge(t)?Mt:ae.current,l.context=cn(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Di(e,t,i,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&kl.enqueueReplaceState(l,l.state,null),ll(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function mn(e,t){try{var n="",r=t;do n+=nf(r),r=r.return;while(r);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function Jl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Fi(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Pd=typeof WeakMap=="function"?WeakMap:Map;function Gu(e,t,n){n=qe(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ul||(ul=!0,Ki=r),Fi(e,t)},n}function Xu(e,t,n){n=qe(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Fi(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Fi(e,t),typeof r!="function"&&(vt===null?vt=new Set([this]):vt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Ha(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Pd;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=Wd.bind(null,e,t,n),t.then(e,e))}function Wa(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Qa(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=qe(-1,1),t.tag=2,gt(n,t,1))),n.lanes|=1),e)}var Ld=lt.ReactCurrentOwner,me=!1;function se(e,t,n,r){t.child=e===null?_u(t,null,n,r):dn(t,e.child,n,r)}function ba(e,t,n,r,l){n=n.render;var i=t.ref;return on(t,l),r=Po(e,t,n,r,i,l),n=Lo(),e!==null&&!me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,rt(e,t,l)):($&&n&&yo(t),t.flags|=1,se(e,t,r,l),t.child)}function Ka(e,t,n,r,l){if(e===null){var i=n.type;return typeof i=="function"&&!Bo(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Zu(e,t,i,r,l)):(e=Br(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&l)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Yn,n(o,r)&&e.ref===t.ref)return rt(e,t,l)}return t.flags|=1,e=wt(i,r),e.ref=t.ref,e.return=t,t.child=e}function Zu(e,t,n,r,l){if(e!==null){var i=e.memoizedProps;if(Yn(i,r)&&e.ref===t.ref)if(me=!1,t.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(me=!0);else return t.lanes=e.lanes,rt(e,t,l)}return Ai(e,t,n,r,l)}function Ju(e,t,n){var r=t.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},O(en,we),we|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,O(en,we),we|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,O(en,we),we|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,O(en,we),we|=r;return se(e,t,l,n),t.child}function qu(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ai(e,t,n,r,l){var i=ge(n)?Mt:ae.current;return i=cn(t,i),on(t,l),n=Po(e,t,n,r,i,l),r=Lo(),e!==null&&!me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,rt(e,t,l)):($&&r&&yo(t),t.flags|=1,se(e,t,n,l),t.child)}function Ya(e,t,n,r,l){if(ge(n)){var i=!0;qr(t)}else i=!1;if(on(t,l),t.stateNode===null)Ar(e,t),Yu(t,n,r),Oi(t,n,r,l),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var s=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Le(c):(c=ge(n)?Mt:ae.current,c=cn(t,c));var g=n.getDerivedStateFromProps,h=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||s!==c)&&Va(t,o,r,c),at=!1;var m=t.memoizedState;o.state=m,ll(t,r,o,l),s=t.memoizedState,a!==r||m!==s||he.current||at?(typeof g=="function"&&(Di(t,n,g,r),s=t.memoizedState),(a=at||Ba(t,n,a,r,m,s,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),o.props=r,o.state=s,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Cu(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:Oe(t.type,a),o.props=c,h=t.pendingProps,m=o.context,s=n.contextType,typeof s=="object"&&s!==null?s=Le(s):(s=ge(n)?Mt:ae.current,s=cn(t,s));var v=n.getDerivedStateFromProps;(g=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||m!==s)&&Va(t,o,r,s),at=!1,m=t.memoizedState,o.state=m,ll(t,r,o,l);var x=t.memoizedState;a!==h||m!==x||he.current||at?(typeof v=="function"&&(Di(t,n,v,r),x=t.memoizedState),(c=at||Ba(t,n,c,r,m,x,s)||!1)?(g||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,x,s),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,x,s)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),o.props=r,o.state=x,o.context=s,r=c):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Ui(e,t,n,r,i,l)}function Ui(e,t,n,r,l,i){qu(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return l&&Ma(t,n,!1),rt(e,t,i);r=t.stateNode,Ld.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=dn(t,e.child,null,i),t.child=dn(t,null,a,i)):se(e,t,a,i),t.memoizedState=r.state,l&&Ma(t,n,!0),t.child}function ec(e){var t=e.stateNode;t.pendingContext?Ia(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ia(e,t.context,!1),zo(e,t.containerInfo)}function Ga(e,t,n,r,l){return fn(),xo(l),t.flags|=256,se(e,t,n,r),t.child}var $i={dehydrated:null,treeContext:null,retryLane:0};function Bi(e){return{baseLanes:e,cachePool:null,transitions:null}}function tc(e,t,n){var r=t.pendingProps,l=V.current,i=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(l&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),O(V,l&1),e===null)return Mi(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,i?(r=t.mode,i=t.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Nl(o,r,0,null),e=It(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Bi(n),t.memoizedState=$i,e):Ro(t,o));if(l=e.memoizedState,l!==null&&(a=l.dehydrated,a!==null))return Id(e,t,o,r,a,l,n);if(i){i=r.fallback,o=t.mode,l=e.child,a=l.sibling;var s={mode:"hidden",children:r.children};return!(o&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=wt(l,s),r.subtreeFlags=l.subtreeFlags&14680064),a!==null?i=wt(a,i):(i=It(i,o,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,o=e.child.memoizedState,o=o===null?Bi(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~n,t.memoizedState=$i,r}return i=e.child,e=i.sibling,r=wt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ro(e,t){return t=Nl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function zr(e,t,n,r){return r!==null&&xo(r),dn(t,e.child,null,n),e=Ro(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Id(e,t,n,r,l,i,o){if(n)return t.flags&256?(t.flags&=-257,r=Jl(Error(k(422))),zr(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,l=t.mode,r=Nl({mode:"visible",children:r.children},l,0,null),i=It(i,l,o,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&dn(t,e.child,null,o),t.child.memoizedState=Bi(o),t.memoizedState=$i,i);if(!(t.mode&1))return zr(e,t,o,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(k(419)),r=Jl(i,r,void 0),zr(e,t,o,r)}if(a=(o&e.childLanes)!==0,me||a){if(r=q,r!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|o)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,nt(e,l),Be(r,e,l,-1))}return $o(),r=Jl(Error(k(421))),zr(e,t,o,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Qd.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,xe=ht(l.nextSibling),ke=t,$=!0,Ae=null,e!==null&&(Ce[je++]=Ze,Ce[je++]=Je,Ce[je++]=Rt,Ze=e.id,Je=e.overflow,Rt=t),t=Ro(t,r.children),t.flags|=4096,t)}function Xa(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ri(e.return,t,n)}function ql(e,t,n,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=l)}function nc(e,t,n){var r=t.pendingProps,l=r.revealOrder,i=r.tail;if(se(e,t,r.children,n),r=V.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Xa(e,n,t);else if(e.tag===19)Xa(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(O(V,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&il(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),ql(t,!1,l,n,i);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&il(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}ql(t,!0,n,null,i);break;case"together":ql(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ar(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function rt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ot|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,n=wt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=wt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Md(e,t,n){switch(t.tag){case 3:ec(t),fn();break;case 5:ju(t);break;case 1:ge(t.type)&&qr(t);break;case 4:zo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;O(nl,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(O(V,V.current&1),t.flags|=128,null):n&t.child.childLanes?tc(e,t,n):(O(V,V.current&1),e=rt(e,t,n),e!==null?e.sibling:null);O(V,V.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return nc(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),O(V,V.current),r)break;return null;case 22:case 23:return t.lanes=0,Ju(e,t,n)}return rt(e,t,n)}var rc,Vi,lc,ic;rc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Vi=function(){};lc=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,Pt(Ye.current);var i=null;switch(n){case"input":l=ci(e,l),r=ci(e,r),i=[];break;case"select":l=W({},l,{value:void 0}),r=W({},r,{value:void 0}),i=[];break;case"textarea":l=pi(e,l),r=pi(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Zr)}hi(n,r);var o;n=null;for(c in l)if(!r.hasOwnProperty(c)&&l.hasOwnProperty(c)&&l[c]!=null)if(c==="style"){var a=l[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Bn.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var s=r[c];if(a=l!=null?l[c]:void 0,r.hasOwnProperty(c)&&s!==a&&(s!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||s&&s.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in s)s.hasOwnProperty(o)&&a[o]!==s[o]&&(n||(n={}),n[o]=s[o])}else n||(i||(i=[]),i.push(c,n)),n=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(i=i||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Bn.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&F("scroll",e),i||a===s||(i=[])):(i=i||[]).push(c,s))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};ic=function(e,t,n,r){n!==r&&(t.flags|=4)};function zn(e,t){if(!$)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ie(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Rd(e,t,n){var r=t.pendingProps;switch(wo(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ie(t),null;case 1:return ge(t.type)&&Jr(),ie(t),null;case 3:return r=t.stateNode,pn(),A(he),A(ae),jo(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Nr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ae!==null&&(Xi(Ae),Ae=null))),Vi(e,t),ie(t),null;case 5:Co(t);var l=Pt(qn.current);if(n=t.type,e!==null&&t.stateNode!=null)lc(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(k(166));return ie(t),null}if(e=Pt(Ye.current),Nr(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[be]=t,r[Zn]=i,e=(t.mode&1)!==0,n){case"dialog":F("cancel",r),F("close",r);break;case"iframe":case"object":case"embed":F("load",r);break;case"video":case"audio":for(l=0;l<Ln.length;l++)F(Ln[l],r);break;case"source":F("error",r);break;case"img":case"image":case"link":F("error",r),F("load",r);break;case"details":F("toggle",r);break;case"input":ia(r,i),F("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},F("invalid",r);break;case"textarea":aa(r,i),F("invalid",r)}hi(n,i),l=null;for(var o in i)if(i.hasOwnProperty(o)){var a=i[o];o==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&Er(r.textContent,a,e),l=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&Er(r.textContent,a,e),l=["children",""+a]):Bn.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&F("scroll",r)}switch(n){case"input":hr(r),oa(r,i,!0);break;case"textarea":hr(r),sa(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Zr)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ms(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[be]=t,e[Zn]=r,rc(e,t,!1,!1),t.stateNode=e;e:{switch(o=gi(n,r),n){case"dialog":F("cancel",e),F("close",e),l=r;break;case"iframe":case"object":case"embed":F("load",e),l=r;break;case"video":case"audio":for(l=0;l<Ln.length;l++)F(Ln[l],e);l=r;break;case"source":F("error",e),l=r;break;case"img":case"image":case"link":F("error",e),F("load",e),l=r;break;case"details":F("toggle",e),l=r;break;case"input":ia(e,r),l=ci(e,r),F("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=W({},r,{value:void 0}),F("invalid",e);break;case"textarea":aa(e,r),l=pi(e,r),F("invalid",e);break;default:l=r}hi(n,l),a=l;for(i in a)if(a.hasOwnProperty(i)){var s=a[i];i==="style"?Os(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Rs(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Vn(e,s):typeof s=="number"&&Vn(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Bn.hasOwnProperty(i)?s!=null&&i==="onScroll"&&F("scroll",e):s!=null&&ro(e,i,s,o))}switch(n){case"input":hr(e),oa(e,r,!1);break;case"textarea":hr(e),sa(e);break;case"option":r.value!=null&&e.setAttribute("value",""+xt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?tn(e,!!r.multiple,i,!1):r.defaultValue!=null&&tn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Zr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ie(t),null;case 6:if(e&&t.stateNode!=null)ic(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(k(166));if(n=Pt(qn.current),Pt(Ye.current),Nr(t)){if(r=t.stateNode,n=t.memoizedProps,r[be]=t,(i=r.nodeValue!==n)&&(e=ke,e!==null))switch(e.tag){case 3:Er(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Er(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[be]=t,t.stateNode=r}return ie(t),null;case 13:if(A(V),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if($&&xe!==null&&t.mode&1&&!(t.flags&128))Eu(),fn(),t.flags|=98560,i=!1;else if(i=Nr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(k(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(k(317));i[be]=t}else fn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ie(t),i=!1}else Ae!==null&&(Xi(Ae),Ae=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||V.current&1?X===0&&(X=3):$o())),t.updateQueue!==null&&(t.flags|=4),ie(t),null);case 4:return pn(),Vi(e,t),e===null&&Gn(t.stateNode.containerInfo),ie(t),null;case 10:return Eo(t.type._context),ie(t),null;case 17:return ge(t.type)&&Jr(),ie(t),null;case 19:if(A(V),i=t.memoizedState,i===null)return ie(t),null;if(r=(t.flags&128)!==0,o=i.rendering,o===null)if(r)zn(i,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=il(e),o!==null){for(t.flags|=128,zn(i,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return O(V,V.current&1|2),t.child}e=e.sibling}i.tail!==null&&K()>hn&&(t.flags|=128,r=!0,zn(i,!1),t.lanes=4194304)}else{if(!r)if(e=il(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),zn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!$)return ie(t),null}else 2*K()-i.renderingStartTime>hn&&n!==1073741824&&(t.flags|=128,r=!0,zn(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(n=i.last,n!==null?n.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=K(),t.sibling=null,n=V.current,O(V,r?n&1|2:n&1),t):(ie(t),null);case 22:case 23:return Uo(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?we&1073741824&&(ie(t),t.subtreeFlags&6&&(t.flags|=8192)):ie(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function Dd(e,t){switch(wo(t),t.tag){case 1:return ge(t.type)&&Jr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return pn(),A(he),A(ae),jo(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Co(t),null;case 13:if(A(V),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));fn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return A(V),null;case 4:return pn(),null;case 10:return Eo(t.type._context),null;case 22:case 23:return Uo(),null;case 24:return null;default:return null}}var Cr=!1,oe=!1,Od=typeof WeakSet=="function"?WeakSet:Set,N=null;function qt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){b(e,t,r)}else n.current=null}function Hi(e,t,n){try{n()}catch(r){b(e,t,r)}}var Za=!1;function Fd(e,t){if(zi=Yr,e=cu(),vo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,a=-1,s=-1,c=0,g=0,h=e,m=null;t:for(;;){for(var v;h!==n||l!==0&&h.nodeType!==3||(a=o+l),h!==i||r!==0&&h.nodeType!==3||(s=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(v=h.firstChild)!==null;)m=h,h=v;for(;;){if(h===e)break t;if(m===n&&++c===l&&(a=o),m===i&&++g===r&&(s=o),(v=h.nextSibling)!==null)break;h=m,m=h.parentNode}h=v}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ci={focusedElem:e,selectionRange:n},Yr=!1,N=t;N!==null;)if(t=N,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,N=e;else for(;N!==null;){t=N;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var w=x.memoizedProps,L=x.memoizedState,f=t.stateNode,u=f.getSnapshotBeforeUpdate(t.elementType===t.type?w:Oe(t.type,w),L);f.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(y){b(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,N=e;break}N=t.return}return x=Za,Za=!1,x}function An(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&Hi(t,n,i)}l=l.next}while(l!==r)}}function Sl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Wi(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function oc(e){var t=e.alternate;t!==null&&(e.alternate=null,oc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[be],delete t[Zn],delete t[Pi],delete t[wd],delete t[xd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ac(e){return e.tag===5||e.tag===3||e.tag===4}function Ja(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ac(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Qi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Zr));else if(r!==4&&(e=e.child,e!==null))for(Qi(e,t,n),e=e.sibling;e!==null;)Qi(e,t,n),e=e.sibling}function bi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(bi(e,t,n),e=e.sibling;e!==null;)bi(e,t,n),e=e.sibling}var te=null,Fe=!1;function it(e,t,n){for(n=n.child;n!==null;)sc(e,t,n),n=n.sibling}function sc(e,t,n){if(Ke&&typeof Ke.onCommitFiberUnmount=="function")try{Ke.onCommitFiberUnmount(ml,n)}catch{}switch(n.tag){case 5:oe||qt(n,t);case 6:var r=te,l=Fe;te=null,it(e,t,n),te=r,Fe=l,te!==null&&(Fe?(e=te,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):te.removeChild(n.stateNode));break;case 18:te!==null&&(Fe?(e=te,n=n.stateNode,e.nodeType===8?bl(e.parentNode,n):e.nodeType===1&&bl(e,n),bn(e)):bl(te,n.stateNode));break;case 4:r=te,l=Fe,te=n.stateNode.containerInfo,Fe=!0,it(e,t,n),te=r,Fe=l;break;case 0:case 11:case 14:case 15:if(!oe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Hi(n,t,o),l=l.next}while(l!==r)}it(e,t,n);break;case 1:if(!oe&&(qt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){b(n,t,a)}it(e,t,n);break;case 21:it(e,t,n);break;case 22:n.mode&1?(oe=(r=oe)||n.memoizedState!==null,it(e,t,n),oe=r):it(e,t,n);break;default:it(e,t,n)}}function qa(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Od),t.forEach(function(r){var l=bd.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function De(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var i=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:te=a.stateNode,Fe=!1;break e;case 3:te=a.stateNode.containerInfo,Fe=!0;break e;case 4:te=a.stateNode.containerInfo,Fe=!0;break e}a=a.return}if(te===null)throw Error(k(160));sc(i,o,l),te=null,Fe=!1;var s=l.alternate;s!==null&&(s.return=null),l.return=null}catch(c){b(l,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)uc(t,e),t=t.sibling}function uc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(De(t,e),We(e),r&4){try{An(3,e,e.return),Sl(3,e)}catch(w){b(e,e.return,w)}try{An(5,e,e.return)}catch(w){b(e,e.return,w)}}break;case 1:De(t,e),We(e),r&512&&n!==null&&qt(n,n.return);break;case 5:if(De(t,e),We(e),r&512&&n!==null&&qt(n,n.return),e.flags&32){var l=e.stateNode;try{Vn(l,"")}catch(w){b(e,e.return,w)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,o=n!==null?n.memoizedProps:i,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&Ls(l,i),gi(a,o);var c=gi(a,i);for(o=0;o<s.length;o+=2){var g=s[o],h=s[o+1];g==="style"?Os(l,h):g==="dangerouslySetInnerHTML"?Rs(l,h):g==="children"?Vn(l,h):ro(l,g,h,c)}switch(a){case"input":fi(l,i);break;case"textarea":Is(l,i);break;case"select":var m=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var v=i.value;v!=null?tn(l,!!i.multiple,v,!1):m!==!!i.multiple&&(i.defaultValue!=null?tn(l,!!i.multiple,i.defaultValue,!0):tn(l,!!i.multiple,i.multiple?[]:"",!1))}l[Zn]=i}catch(w){b(e,e.return,w)}}break;case 6:if(De(t,e),We(e),r&4){if(e.stateNode===null)throw Error(k(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(w){b(e,e.return,w)}}break;case 3:if(De(t,e),We(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{bn(t.containerInfo)}catch(w){b(e,e.return,w)}break;case 4:De(t,e),We(e);break;case 13:De(t,e),We(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(Fo=K())),r&4&&qa(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(oe=(c=oe)||g,De(t,e),oe=c):De(t,e),We(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!g&&e.mode&1)for(N=e,g=e.child;g!==null;){for(h=N=g;N!==null;){switch(m=N,v=m.child,m.tag){case 0:case 11:case 14:case 15:An(4,m,m.return);break;case 1:qt(m,m.return);var x=m.stateNode;if(typeof x.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(w){b(r,n,w)}}break;case 5:qt(m,m.return);break;case 22:if(m.memoizedState!==null){ts(h);continue}}v!==null?(v.return=m,N=v):ts(h)}g=g.sibling}e:for(g=null,h=e;;){if(h.tag===5){if(g===null){g=h;try{l=h.stateNode,c?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=h.stateNode,s=h.memoizedProps.style,o=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=Ds("display",o))}catch(w){b(e,e.return,w)}}}else if(h.tag===6){if(g===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(w){b(e,e.return,w)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;g===h&&(g=null),h=h.return}g===h&&(g=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:De(t,e),We(e),r&4&&qa(e);break;case 21:break;default:De(t,e),We(e)}}function We(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(ac(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Vn(l,""),r.flags&=-33);var i=Ja(e);bi(e,i,l);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Ja(e);Qi(e,a,o);break;default:throw Error(k(161))}}catch(s){b(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ad(e,t,n){N=e,cc(e)}function cc(e,t,n){for(var r=(e.mode&1)!==0;N!==null;){var l=N,i=l.child;if(l.tag===22&&r){var o=l.memoizedState!==null||Cr;if(!o){var a=l.alternate,s=a!==null&&a.memoizedState!==null||oe;a=Cr;var c=oe;if(Cr=o,(oe=s)&&!c)for(N=l;N!==null;)o=N,s=o.child,o.tag===22&&o.memoizedState!==null?ns(l):s!==null?(s.return=o,N=s):ns(l);for(;i!==null;)N=i,cc(i),i=i.sibling;N=l,Cr=a,oe=c}es(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,N=i):es(e)}}function es(e){for(;N!==null;){var t=N;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:oe||Sl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!oe)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Oe(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Aa(t,i,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Aa(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var g=c.memoizedState;if(g!==null){var h=g.dehydrated;h!==null&&bn(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}oe||t.flags&512&&Wi(t)}catch(m){b(t,t.return,m)}}if(t===e){N=null;break}if(n=t.sibling,n!==null){n.return=t.return,N=n;break}N=t.return}}function ts(e){for(;N!==null;){var t=N;if(t===e){N=null;break}var n=t.sibling;if(n!==null){n.return=t.return,N=n;break}N=t.return}}function ns(e){for(;N!==null;){var t=N;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Sl(4,t)}catch(s){b(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(s){b(t,l,s)}}var i=t.return;try{Wi(t)}catch(s){b(t,i,s)}break;case 5:var o=t.return;try{Wi(t)}catch(s){b(t,o,s)}}}catch(s){b(t,t.return,s)}if(t===e){N=null;break}var a=t.sibling;if(a!==null){a.return=t.return,N=a;break}N=t.return}}var Ud=Math.ceil,sl=lt.ReactCurrentDispatcher,Do=lt.ReactCurrentOwner,Pe=lt.ReactCurrentBatchConfig,M=0,q=null,Y=null,ne=0,we=0,en=Et(0),X=0,rr=null,Ot=0,El=0,Oo=0,Un=null,pe=null,Fo=0,hn=1/0,Ge=null,ul=!1,Ki=null,vt=null,jr=!1,ft=null,cl=0,$n=0,Yi=null,Ur=-1,$r=0;function ue(){return M&6?K():Ur!==-1?Ur:Ur=K()}function yt(e){return e.mode&1?M&2&&ne!==0?ne&-ne:Sd.transition!==null?($r===0&&($r=Ys()),$r):(e=D,e!==0||(e=window.event,e=e===void 0?16:tu(e.type)),e):1}function Be(e,t,n,r){if(50<$n)throw $n=0,Yi=null,Error(k(185));or(e,n,r),(!(M&2)||e!==q)&&(e===q&&(!(M&2)&&(El|=n),X===4&&ut(e,ne)),ve(e,r),n===1&&M===0&&!(t.mode&1)&&(hn=K()+500,wl&&Nt()))}function ve(e,t){var n=e.callbackNode;Sf(e,t);var r=Kr(e,e===q?ne:0);if(r===0)n!==null&&fa(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&fa(n),t===1)e.tag===0?kd(rs.bind(null,e)):xu(rs.bind(null,e)),vd(function(){!(M&6)&&Nt()}),n=null;else{switch(Gs(r)){case 1:n=so;break;case 4:n=bs;break;case 16:n=br;break;case 536870912:n=Ks;break;default:n=br}n=yc(n,fc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function fc(e,t){if(Ur=-1,$r=0,M&6)throw Error(k(327));var n=e.callbackNode;if(an()&&e.callbackNode!==n)return null;var r=Kr(e,e===q?ne:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=fl(e,r);else{t=r;var l=M;M|=2;var i=pc();(q!==e||ne!==t)&&(Ge=null,hn=K()+500,Lt(e,t));do try{Vd();break}catch(a){dc(e,a)}while(!0);So(),sl.current=i,M=l,Y!==null?t=0:(q=null,ne=0,t=X)}if(t!==0){if(t===2&&(l=ki(e),l!==0&&(r=l,t=Gi(e,l))),t===1)throw n=rr,Lt(e,0),ut(e,r),ve(e,K()),n;if(t===6)ut(e,r);else{if(l=e.current.alternate,!(r&30)&&!$d(l)&&(t=fl(e,r),t===2&&(i=ki(e),i!==0&&(r=i,t=Gi(e,i))),t===1))throw n=rr,Lt(e,0),ut(e,r),ve(e,K()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(k(345));case 2:Ct(e,pe,Ge);break;case 3:if(ut(e,r),(r&130023424)===r&&(t=Fo+500-K(),10<t)){if(Kr(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){ue(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Ti(Ct.bind(null,e,pe,Ge),t);break}Ct(e,pe,Ge);break;case 4:if(ut(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var o=31-$e(r);i=1<<o,o=t[o],o>l&&(l=o),r&=~i}if(r=l,r=K()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Ud(r/1960))-r,10<r){e.timeoutHandle=Ti(Ct.bind(null,e,pe,Ge),r);break}Ct(e,pe,Ge);break;case 5:Ct(e,pe,Ge);break;default:throw Error(k(329))}}}return ve(e,K()),e.callbackNode===n?fc.bind(null,e):null}function Gi(e,t){var n=Un;return e.current.memoizedState.isDehydrated&&(Lt(e,t).flags|=256),e=fl(e,t),e!==2&&(t=pe,pe=n,t!==null&&Xi(t)),e}function Xi(e){pe===null?pe=e:pe.push.apply(pe,e)}function $d(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!Ve(i(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ut(e,t){for(t&=~Oo,t&=~El,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-$e(t),r=1<<n;e[n]=-1,t&=~r}}function rs(e){if(M&6)throw Error(k(327));an();var t=Kr(e,0);if(!(t&1))return ve(e,K()),null;var n=fl(e,t);if(e.tag!==0&&n===2){var r=ki(e);r!==0&&(t=r,n=Gi(e,r))}if(n===1)throw n=rr,Lt(e,0),ut(e,t),ve(e,K()),n;if(n===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ct(e,pe,Ge),ve(e,K()),null}function Ao(e,t){var n=M;M|=1;try{return e(t)}finally{M=n,M===0&&(hn=K()+500,wl&&Nt())}}function Ft(e){ft!==null&&ft.tag===0&&!(M&6)&&an();var t=M;M|=1;var n=Pe.transition,r=D;try{if(Pe.transition=null,D=1,e)return e()}finally{D=r,Pe.transition=n,M=t,!(M&6)&&Nt()}}function Uo(){we=en.current,A(en)}function Lt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,gd(n)),Y!==null)for(n=Y.return;n!==null;){var r=n;switch(wo(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Jr();break;case 3:pn(),A(he),A(ae),jo();break;case 5:Co(r);break;case 4:pn();break;case 13:A(V);break;case 19:A(V);break;case 10:Eo(r.type._context);break;case 22:case 23:Uo()}n=n.return}if(q=e,Y=e=wt(e.current,null),ne=we=t,X=0,rr=null,Oo=El=Ot=0,pe=Un=null,Tt!==null){for(t=0;t<Tt.length;t++)if(n=Tt[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=l,r.next=o}n.pending=r}Tt=null}return e}function dc(e,t){do{var n=Y;try{if(So(),Or.current=al,ol){for(var r=H.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}ol=!1}if(Dt=0,J=G=H=null,Fn=!1,er=0,Do.current=null,n===null||n.return===null){X=1,rr=t,Y=null;break}e:{var i=e,o=n.return,a=n,s=t;if(t=ne,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,g=a,h=g.tag;if(!(g.mode&1)&&(h===0||h===11||h===15)){var m=g.alternate;m?(g.updateQueue=m.updateQueue,g.memoizedState=m.memoizedState,g.lanes=m.lanes):(g.updateQueue=null,g.memoizedState=null)}var v=Wa(o);if(v!==null){v.flags&=-257,Qa(v,o,a,i,t),v.mode&1&&Ha(i,c,t),t=v,s=c;var x=t.updateQueue;if(x===null){var w=new Set;w.add(s),t.updateQueue=w}else x.add(s);break e}else{if(!(t&1)){Ha(i,c,t),$o();break e}s=Error(k(426))}}else if($&&a.mode&1){var L=Wa(o);if(L!==null){!(L.flags&65536)&&(L.flags|=256),Qa(L,o,a,i,t),xo(mn(s,a));break e}}i=s=mn(s,a),X!==4&&(X=2),Un===null?Un=[i]:Un.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=Gu(i,s,t);Fa(i,f);break e;case 1:a=s;var u=i.type,p=i.stateNode;if(!(i.flags&128)&&(typeof u.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(vt===null||!vt.has(p)))){i.flags|=65536,t&=-t,i.lanes|=t;var y=Xu(i,a,t);Fa(i,y);break e}}i=i.return}while(i!==null)}hc(n)}catch(E){t=E,Y===n&&n!==null&&(Y=n=n.return);continue}break}while(!0)}function pc(){var e=sl.current;return sl.current=al,e===null?al:e}function $o(){(X===0||X===3||X===2)&&(X=4),q===null||!(Ot&268435455)&&!(El&268435455)||ut(q,ne)}function fl(e,t){var n=M;M|=2;var r=pc();(q!==e||ne!==t)&&(Ge=null,Lt(e,t));do try{Bd();break}catch(l){dc(e,l)}while(!0);if(So(),M=n,sl.current=r,Y!==null)throw Error(k(261));return q=null,ne=0,X}function Bd(){for(;Y!==null;)mc(Y)}function Vd(){for(;Y!==null&&!pf();)mc(Y)}function mc(e){var t=vc(e.alternate,e,we);e.memoizedProps=e.pendingProps,t===null?hc(e):Y=t,Do.current=null}function hc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Dd(n,t),n!==null){n.flags&=32767,Y=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{X=6,Y=null;return}}else if(n=Rd(n,t,we),n!==null){Y=n;return}if(t=t.sibling,t!==null){Y=t;return}Y=t=e}while(t!==null);X===0&&(X=5)}function Ct(e,t,n){var r=D,l=Pe.transition;try{Pe.transition=null,D=1,Hd(e,t,n,r)}finally{Pe.transition=l,D=r}return null}function Hd(e,t,n,r){do an();while(ft!==null);if(M&6)throw Error(k(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Ef(e,i),e===q&&(Y=q=null,ne=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||jr||(jr=!0,yc(br,function(){return an(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Pe.transition,Pe.transition=null;var o=D;D=1;var a=M;M|=4,Do.current=null,Fd(e,n),uc(n,e),ud(Ci),Yr=!!zi,Ci=zi=null,e.current=n,Ad(n),mf(),M=a,D=o,Pe.transition=i}else e.current=n;if(jr&&(jr=!1,ft=e,cl=l),i=e.pendingLanes,i===0&&(vt=null),vf(n.stateNode),ve(e,K()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(ul)throw ul=!1,e=Ki,Ki=null,e;return cl&1&&e.tag!==0&&an(),i=e.pendingLanes,i&1?e===Yi?$n++:($n=0,Yi=e):$n=0,Nt(),null}function an(){if(ft!==null){var e=Gs(cl),t=Pe.transition,n=D;try{if(Pe.transition=null,D=16>e?16:e,ft===null)var r=!1;else{if(e=ft,ft=null,cl=0,M&6)throw Error(k(331));var l=M;for(M|=4,N=e.current;N!==null;){var i=N,o=i.child;if(N.flags&16){var a=i.deletions;if(a!==null){for(var s=0;s<a.length;s++){var c=a[s];for(N=c;N!==null;){var g=N;switch(g.tag){case 0:case 11:case 15:An(8,g,i)}var h=g.child;if(h!==null)h.return=g,N=h;else for(;N!==null;){g=N;var m=g.sibling,v=g.return;if(oc(g),g===c){N=null;break}if(m!==null){m.return=v,N=m;break}N=v}}}var x=i.alternate;if(x!==null){var w=x.child;if(w!==null){x.child=null;do{var L=w.sibling;w.sibling=null,w=L}while(w!==null)}}N=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,N=o;else e:for(;N!==null;){if(i=N,i.flags&2048)switch(i.tag){case 0:case 11:case 15:An(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,N=f;break e}N=i.return}}var u=e.current;for(N=u;N!==null;){o=N;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,N=p;else e:for(o=u;N!==null;){if(a=N,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Sl(9,a)}}catch(E){b(a,a.return,E)}if(a===o){N=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,N=y;break e}N=a.return}}if(M=l,Nt(),Ke&&typeof Ke.onPostCommitFiberRoot=="function")try{Ke.onPostCommitFiberRoot(ml,e)}catch{}r=!0}return r}finally{D=n,Pe.transition=t}}return!1}function ls(e,t,n){t=mn(n,t),t=Gu(e,t,1),e=gt(e,t,1),t=ue(),e!==null&&(or(e,1,t),ve(e,t))}function b(e,t,n){if(e.tag===3)ls(e,e,n);else for(;t!==null;){if(t.tag===3){ls(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(vt===null||!vt.has(r))){e=mn(n,e),e=Xu(t,e,1),t=gt(t,e,1),e=ue(),t!==null&&(or(t,1,e),ve(t,e));break}}t=t.return}}function Wd(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ue(),e.pingedLanes|=e.suspendedLanes&n,q===e&&(ne&n)===n&&(X===4||X===3&&(ne&130023424)===ne&&500>K()-Fo?Lt(e,0):Oo|=n),ve(e,t)}function gc(e,t){t===0&&(e.mode&1?(t=yr,yr<<=1,!(yr&130023424)&&(yr=4194304)):t=1);var n=ue();e=nt(e,t),e!==null&&(or(e,t,n),ve(e,n))}function Qd(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),gc(e,n)}function bd(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(t),gc(e,n)}var vc;vc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||he.current)me=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return me=!1,Md(e,t,n);me=!!(e.flags&131072)}else me=!1,$&&t.flags&1048576&&ku(t,tl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ar(e,t),e=t.pendingProps;var l=cn(t,ae.current);on(t,n),l=Po(null,t,r,e,l,n);var i=Lo();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ge(r)?(i=!0,qr(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,_o(t),l.updater=kl,t.stateNode=l,l._reactInternals=t,Oi(t,r,e,n),t=Ui(null,t,r,!0,i,n)):(t.tag=0,$&&i&&yo(t),se(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ar(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=Yd(r),e=Oe(r,e),l){case 0:t=Ai(null,t,r,e,n);break e;case 1:t=Ya(null,t,r,e,n);break e;case 11:t=ba(null,t,r,e,n);break e;case 14:t=Ka(null,t,r,Oe(r.type,e),n);break e}throw Error(k(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Oe(r,l),Ai(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Oe(r,l),Ya(e,t,r,l,n);case 3:e:{if(ec(t),e===null)throw Error(k(387));r=t.pendingProps,i=t.memoizedState,l=i.element,Cu(e,t),ll(t,r,null,n);var o=t.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=mn(Error(k(423)),t),t=Ga(e,t,r,n,l);break e}else if(r!==l){l=mn(Error(k(424)),t),t=Ga(e,t,r,n,l);break e}else for(xe=ht(t.stateNode.containerInfo.firstChild),ke=t,$=!0,Ae=null,n=_u(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(fn(),r===l){t=rt(e,t,n);break e}se(e,t,r,n)}t=t.child}return t;case 5:return ju(t),e===null&&Mi(t),r=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,o=l.children,ji(r,l)?o=null:i!==null&&ji(r,i)&&(t.flags|=32),qu(e,t),se(e,t,o,n),t.child;case 6:return e===null&&Mi(t),null;case 13:return tc(e,t,n);case 4:return zo(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=dn(t,null,r,n):se(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Oe(r,l),ba(e,t,r,l,n);case 7:return se(e,t,t.pendingProps,n),t.child;case 8:return se(e,t,t.pendingProps.children,n),t.child;case 12:return se(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,i=t.memoizedProps,o=l.value,O(nl,r._currentValue),r._currentValue=o,i!==null)if(Ve(i.value,o)){if(i.children===l.children&&!he.current){t=rt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){o=i.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=qe(-1,n&-n),s.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var g=c.pending;g===null?s.next=s:(s.next=g.next,g.next=s),c.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),Ri(i.return,n,t),a.lanes|=n;break}s=s.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(k(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Ri(o,n,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}se(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,on(t,n),l=Le(l),r=r(l),t.flags|=1,se(e,t,r,n),t.child;case 14:return r=t.type,l=Oe(r,t.pendingProps),l=Oe(r.type,l),Ka(e,t,r,l,n);case 15:return Zu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Oe(r,l),Ar(e,t),t.tag=1,ge(r)?(e=!0,qr(t)):e=!1,on(t,n),Yu(t,r,l),Oi(t,r,l,n),Ui(null,t,r,!0,e,n);case 19:return nc(e,t,n);case 22:return Ju(e,t,n)}throw Error(k(156,t.tag))};function yc(e,t){return Qs(e,t)}function Kd(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Te(e,t,n,r){return new Kd(e,t,n,r)}function Bo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Yd(e){if(typeof e=="function")return Bo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===io)return 11;if(e===oo)return 14}return 2}function wt(e,t){var n=e.alternate;return n===null?(n=Te(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Br(e,t,n,r,l,i){var o=2;if(r=e,typeof e=="function")Bo(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Wt:return It(n.children,l,i,t);case lo:o=8,l|=8;break;case oi:return e=Te(12,n,t,l|2),e.elementType=oi,e.lanes=i,e;case ai:return e=Te(13,n,t,l),e.elementType=ai,e.lanes=i,e;case si:return e=Te(19,n,t,l),e.elementType=si,e.lanes=i,e;case js:return Nl(n,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case zs:o=10;break e;case Cs:o=9;break e;case io:o=11;break e;case oo:o=14;break e;case ot:o=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=Te(o,n,t,l),t.elementType=e,t.type=r,t.lanes=i,t}function It(e,t,n,r){return e=Te(7,e,r,t),e.lanes=n,e}function Nl(e,t,n,r){return e=Te(22,e,r,t),e.elementType=js,e.lanes=n,e.stateNode={isHidden:!1},e}function ei(e,t,n){return e=Te(6,e,null,t),e.lanes=n,e}function ti(e,t,n){return t=Te(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Gd(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Dl(0),this.expirationTimes=Dl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Dl(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Vo(e,t,n,r,l,i,o,a,s){return e=new Gd(e,t,n,a,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Te(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},_o(i),e}function Xd(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ht,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function wc(e){if(!e)return kt;e=e._reactInternals;e:{if(Ut(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ge(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var n=e.type;if(ge(n))return wu(e,n,t)}return t}function xc(e,t,n,r,l,i,o,a,s){return e=Vo(n,r,!0,e,l,i,o,a,s),e.context=wc(null),n=e.current,r=ue(),l=yt(n),i=qe(r,l),i.callback=t??null,gt(n,i,l),e.current.lanes=l,or(e,l,r),ve(e,r),e}function _l(e,t,n,r){var l=t.current,i=ue(),o=yt(l);return n=wc(n),t.context===null?t.context=n:t.pendingContext=n,t=qe(i,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=gt(l,t,o),e!==null&&(Be(e,l,o,i),Dr(e,l,o)),o}function dl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function is(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ho(e,t){is(e,t),(e=e.alternate)&&is(e,t)}function Zd(){return null}var kc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Wo(e){this._internalRoot=e}zl.prototype.render=Wo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));_l(e,t,null,null)};zl.prototype.unmount=Wo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ft(function(){_l(null,e,null,null)}),t[tt]=null}};function zl(e){this._internalRoot=e}zl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Js();e={blockedOn:null,target:e,priority:t};for(var n=0;n<st.length&&t!==0&&t<st[n].priority;n++);st.splice(n,0,e),n===0&&eu(e)}};function Qo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Cl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function os(){}function Jd(e,t,n,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var c=dl(o);i.call(c)}}var o=xc(t,r,e,0,null,!1,!1,"",os);return e._reactRootContainer=o,e[tt]=o.current,Gn(e.nodeType===8?e.parentNode:e),Ft(),o}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var a=r;r=function(){var c=dl(s);a.call(c)}}var s=Vo(e,0,!1,null,null,!1,!1,"",os);return e._reactRootContainer=s,e[tt]=s.current,Gn(e.nodeType===8?e.parentNode:e),Ft(function(){_l(t,s,n,r)}),s}function jl(e,t,n,r,l){var i=n._reactRootContainer;if(i){var o=i;if(typeof l=="function"){var a=l;l=function(){var s=dl(o);a.call(s)}}_l(t,o,e,l)}else o=Jd(n,t,e,l,r);return dl(o)}Xs=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Pn(t.pendingLanes);n!==0&&(uo(t,n|1),ve(t,K()),!(M&6)&&(hn=K()+500,Nt()))}break;case 13:Ft(function(){var r=nt(e,1);if(r!==null){var l=ue();Be(r,e,1,l)}}),Ho(e,1)}};co=function(e){if(e.tag===13){var t=nt(e,134217728);if(t!==null){var n=ue();Be(t,e,134217728,n)}Ho(e,134217728)}};Zs=function(e){if(e.tag===13){var t=yt(e),n=nt(e,t);if(n!==null){var r=ue();Be(n,e,t,r)}Ho(e,t)}};Js=function(){return D};qs=function(e,t){var n=D;try{return D=e,t()}finally{D=n}};yi=function(e,t,n){switch(t){case"input":if(fi(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=yl(r);if(!l)throw Error(k(90));Ps(r),fi(r,l)}}}break;case"textarea":Is(e,n);break;case"select":t=n.value,t!=null&&tn(e,!!n.multiple,t,!1)}};Us=Ao;$s=Ft;var qd={usingClientEntryPoint:!1,Events:[sr,Yt,yl,Fs,As,Ao]},Cn={findFiberByHostInstance:jt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ep={bundleType:Cn.bundleType,version:Cn.version,rendererPackageName:Cn.rendererPackageName,rendererConfig:Cn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:lt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Hs(e),e===null?null:e.stateNode},findFiberByHostInstance:Cn.findFiberByHostInstance||Zd,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Tr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Tr.isDisabled&&Tr.supportsFiber)try{ml=Tr.inject(ep),Ke=Tr}catch{}}Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qd;Ee.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Qo(t))throw Error(k(200));return Xd(e,t,null,n)};Ee.createRoot=function(e,t){if(!Qo(e))throw Error(k(299));var n=!1,r="",l=kc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Vo(e,1,!1,null,null,n,!1,r,l),e[tt]=t.current,Gn(e.nodeType===8?e.parentNode:e),new Wo(t)};Ee.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=Hs(t),e=e===null?null:e.stateNode,e};Ee.flushSync=function(e){return Ft(e)};Ee.hydrate=function(e,t,n){if(!Cl(t))throw Error(k(200));return jl(null,e,t,!0,n)};Ee.hydrateRoot=function(e,t,n){if(!Qo(e))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,l=!1,i="",o=kc;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=xc(t,null,e,1,n??null,l,!1,i,o),e[tt]=t.current,Gn(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new zl(t)};Ee.render=function(e,t,n){if(!Cl(t))throw Error(k(200));return jl(null,e,t,!1,n)};Ee.unmountComponentAtNode=function(e){if(!Cl(e))throw Error(k(40));return e._reactRootContainer?(Ft(function(){jl(null,null,e,!1,function(){e._reactRootContainer=null,e[tt]=null})}),!0):!1};Ee.unstable_batchedUpdates=Ao;Ee.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Cl(n))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return jl(e,t,n,!1,r)};Ee.version="18.3.1-next-f1338f8080-20240426";function Sc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Sc)}catch(e){console.error(e)}}Sc(),Ss.exports=Ee;var tp=Ss.exports,as=tp;li.createRoot=as.createRoot,li.hydrateRoot=as.hydrateRoot;/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const np=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Ec=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var rp={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lp=U.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:l="",children:i,iconNode:o,...a},s)=>U.createElement("svg",{ref:s,...rp,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:Ec("lucide",l),...a},[...o.map(([c,g])=>U.createElement(c,g)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cr=(e,t)=>{const n=U.forwardRef(({className:r,...l},i)=>U.createElement(lp,{ref:i,iconNode:t,className:Ec(`lucide-${np(e)}`,r),...l}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ip=cr("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const op=cr("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ap=cr("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sp=cr("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nc=cr("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]),ss=6500,Vr=3e3,Ue={name:"Vishnu Nair",tagline:"I build reliable systems and developer tools — low-latency services, tidy APIs, and data platforms that ship.",email:"nairvishnumail@gmail.com",socials:{github:"https://github.com/vvnu0",linkedin:"https://linkedin.com/in/vishnunair0/"},introVideo:{src:"/WIN_20251019_18_31_08_Pro.mp4",poster:"/intro-poster.jpg"}},up=[{title:"SharprAI – Real-Time Video Upscaler",description:"Browser extension + cloud pipeline that upscales video segments in near real-time using HLS.",year:2025,stack:["TypeScript","Chrome Ext","AWS","HLS"],image:"https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop",link:"https://github.com/vvnu0",metrics:[8,12,9,14,18,21,19,24,28,33,29,35],outcome:"30% smoother playback at 1.5× bitrate; 200ms median segment latency"},{title:"LLM Guidance Counselor",description:"An AI assistant that suggests clubs, courses, and scholarships for first-gen students.",year:2024,stack:["Python","FastAPI","RAG","Postgres"],image:"https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop",link:"https://github.com/vvnu0",metrics:[2,4,6,5,9,12,11,15,16,18,22,25],outcome:"Cut advising backlog by ~25% in pilot; NPS +34"},{title:"Redis-Compatible KV Store",description:"In-memory key-value store implementing RESP with a focus on correctness and benchmarks.",year:2024,stack:["C","RESP","Unix Sockets"],image:"https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop",link:"https://github.com/vvnu0",metrics:[1,3,5,8,13,21,34,29,31,28,36,40],outcome:">1.2M ops/s on M2 — 99p latency under 4ms"}],us=[{label:"Resume",href:"/resume.pdf",icon:ip},{label:"GitHub",href:Ue.socials.github,icon:ap},{label:"LinkedIn",href:Ue.socials.linkedin,icon:sp},{label:"Email",href:`mailto:${Ue.email}`,icon:Nc}],ni="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition",$t=typeof window<"u"&&typeof document<"u";function sn(e,t){if($t&&!document.querySelector(`link[data-key="${t}"]`)){const n=document.createElement("link");n.setAttribute("data-key",t),n.rel="stylesheet",n.href=e,document.head.appendChild(n)}}function lr(e,t){return new Promise(n=>{if(!$t||window[t])return n();const r=document.createElement("script");r.src=e,r.async=!0,r.onload=()=>{window[t]=!0,n()},document.body.appendChild(r)})}function cp({text:e,start:t=!1,className:n=""}){const[r,l]=U.useState(e.replace(/[^ ]/g," ")),i=U.useRef(null),o=U.useRef(!1),a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}<>/?|",s=U.useCallback(g=>{const h=performance.now(),m=1800,v=120,x=900;return Array.from({length:g},(w,L)=>h+m+L*v+Math.random()*x)},[]),c=U.useCallback(()=>{if(o.current)return;o.current=!0;const g=e,h=s(g.length),m=v=>{let x=!0,w="";for(let L=0;L<g.length;L++){const f=g[L];if(f===" "){w+=" ";continue}v>=h[L]?w+=f:(x=!1,w+=a[Math.random()*a.length|0])}l(w),x?(l(g),o.current=!1):i.current=requestAnimationFrame(m)};i.current&&cancelAnimationFrame(i.current),i.current=requestAnimationFrame(m)},[e,s,a]);return U.useEffect(()=>(t&&c(),()=>{i.current&&cancelAnimationFrame(i.current)}),[t,c]),d.jsx("span",{className:`cursor-default select-none ${n}`,onMouseEnter:c,onClick:c,"aria-label":e,children:r})}function fp({onDismiss:e,fading:t}){return d.jsxs("div",{className:`fixed inset-0 z-[9999] flex items-center justify-center bg-black intro-overlay ${t?"fade-out":""}`,onClick:e,role:"button",tabIndex:0,onKeyDown:n=>(n.key==="Enter"||n.key===" ")&&e(),"aria-label":"Dismiss intro","data-testid":"intro-overlay",children:[d.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css?family=Lato:300,400,700|Dosis:200,400,600');
        .intro-overlay { opacity: 1; transition: opacity ${Vr}ms ease; }
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
      `}),d.jsxs("h1",{className:"intro-title",children:["Welcome ",d.jsx("strong",{children:"stranger"})]})]})}function cs({children:e}){return d.jsx("span",{className:"inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/40 dark:supports-[backdrop-filter]:bg-white/5 border-zinc-200 text-zinc-700 dark:border-zinc-800 dark:text-zinc-300",children:e})}function ri({id:e,title:t,children:n,hint:r}){return d.jsx("section",{id:e,className:"scroll-mt-24 py-16 md:py-24",children:d.jsxs("div",{className:"mx-auto max-w-5xl px-4",children:[d.jsxs("div",{className:"mb-8 flex items-end justify-between gap-4",children:[d.jsx("h2",{className:"text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100",children:t}),r?d.jsx("span",{className:"text-xs text-zinc-500 dark:text-zinc-400",children:r}):null]}),n]})})}function dp({values:e}){const t=U.useMemo(()=>{if(!e||e.length===0)return"";const n=120,r=40,l=2,i=2,o=Math.min(...e),s=Math.max(...e)-o||1,c=e.length;return e.map((g,h)=>{const m=c===1?.5:h/(c-1),v=l+m*(n-2*l),x=(g-o)/s,w=r-i-x*(r-2*i);return`${v},${w}`}).join(" ")},[e]);return t?d.jsx("svg",{width:120,height:40,viewBox:"0 0 120 40","aria-label":"small trend chart",children:d.jsx("polyline",{fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinejoin:"round",strokeLinecap:"round",points:t})}):d.jsx("svg",{width:120,height:40,"aria-label":"flat sparkline",children:d.jsx("line",{x1:2,y1:20,x2:118,y2:20,stroke:"currentColor",strokeWidth:1,strokeOpacity:.3})})}function pp({p:e}){return d.jsxs("a",{href:e.link,target:"_blank",rel:"noreferrer noopener",className:"group relative block overflow-hidden rounded-2xl border border-zinc-200 bg-white/70 p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 dark:border-zinc-800 dark:bg-zinc-900/60",children:[d.jsxs("div",{className:"flex gap-4",children:[d.jsx("div",{className:"relative h-24 w-36 shrink-0 overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800",children:d.jsx("img",{src:e.image,alt:`${e.title} thumbnail`,className:"h-full w-full object-cover transition-transform duration-300 group-hover:scale-105",loading:"lazy"})}),d.jsxs("div",{className:"min-w-0 flex-1",children:[d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx("h3",{className:"truncate text-base font-semibold text-zinc-900 dark:text-zinc-100",children:e.title}),d.jsx(cs,{children:e.year})]}),d.jsx("p",{className:"mt-1 line-clamp-2 text-sm text-zinc-600 dark:text-zinc-400",children:e.description}),d.jsxs("div",{className:"mt-3 flex items-center justify-between",children:[d.jsx("div",{className:"flex flex-wrap gap-1.5",children:e.stack.map(t=>d.jsx(cs,{children:t},t))}),d.jsx(dp,{values:e.metrics})]}),d.jsx("p",{className:"mt-2 text-xs text-emerald-600 dark:text-emerald-400",children:e.outcome})]})]}),d.jsx(op,{className:"absolute right-3 top-3 h-4 w-4 text-zinc-400 transition group-hover:text-zinc-600 dark:text-zinc-500 dark:group-hover:text-zinc-300","aria-hidden":!0})]})}function mp(){return U.useEffect(()=>{if(!$t)return;sn("https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.4/css/all.min.css","fa5-css");let e=!1,t=null,n=null,r;const l=window;if(l.__vvnu0_music_player_initialized)return;l.__vvnu0_music_player_initialized=!0;const i=async()=>{if(await lr("https://code.jquery.com/jquery-3.7.1.min.js","jquery-3-7-1-loaded"),e)return;const o=window.jQuery||window.$;if(!o)return;const a=o("#player-track"),s=o("#player-bg-artwork"),c=o("#album-name"),g=o("#track-name"),h=o("#album-art"),m=o("#seek-bar-container"),v=o("#seek-bar"),x=o("#track-time"),w=o("#seek-time"),L=o("#s-hover"),f=o("#play-pause-button"),u=o("#current-time"),p=o("#track-length"),y=o("#play-previous"),E=o("#play-next"),z=["Tip Toe","Harvey","Invincible","Sunflower","Mona Lisa"],_=["HYBS - Tip Toe","Her's - Harvey","OneRepublic - Invincible","Post Malone - Sunflower","Val Fritz & Peter Fenn - Mona Lisa"],C=["_1","_2","_3","_4","_5"],B=["https://raw.githubusercontent.com/vvnu0/vvnu0.github.io/main/public/TipToe.mp3","https://raw.githubusercontent.com/vvnu0/vvnu0.github.io/main/public/Harvey.mp3","https://raw.githubusercontent.com/vvnu0/vvnu0.github.io/main/public/Invincible.mp3","https://raw.githubusercontent.com/vvnu0/vvnu0.github.io/main/public/Sunflower.mp3","https://raw.githubusercontent.com/vvnu0/vvnu0.github.io/main/public/MonaLisa.mp3"];let P,ee=f.find("i"),Me=0,He=0,wn,fr=0,_e,Re,S,j,T,R,Q=0,ze,de=0,Bt=!1,Z=-1,_t,bo,dr;const Ko=()=>{n&&setTimeout(()=>{n&&(n.paused?(a.addClass("active"),h.addClass("active"),Xo(),ee.attr("class","fas fa-pause"),n.play()):(a.removeClass("active"),h.removeClass("active"),clearInterval(t),h.removeClass("buffering"),ee.attr("class","fas fa-play"),n.pause()))},300)},_c=ye=>{!n||!n.duration||(wn=m.offset(),Me=ye.clientX-wn.left,He=n.duration*(Me/m.outerWidth()),L.width(Me),fr=He/60,_e=Math.floor(fr),Re=Math.floor(He-_e*60),!(_e<0||Re<0)&&(_e<10&&(_e="0"+_e),Re<10&&(Re="0"+Re),isNaN(_e)||isNaN(Re)?w.text("--:--"):w.text(_e+":"+Re),w.css({left:Me,"margin-left":"-21px"}).fadeIn(0)))},Yo=()=>{L.width(0),w.text("00:00").css({left:"0px","margin-left":"0px"}).fadeOut(0)},zc=()=>{n&&(n.currentTime=He,v.width(Me),Yo())},Go=()=>{!n||!n.duration||(de=new Date,de=de.getTime(),Bt||(Bt=!0,x.addClass("active")),S=Math.floor(n.currentTime/60),j=Math.floor(n.currentTime-S*60),T=Math.floor(n.duration/60),R=Math.floor(n.duration-T*60),Q=n.currentTime/n.duration*100,S<10&&(S="0"+S),j<10&&(j="0"+j),T<10&&(T="0"+T),R<10&&(R="0"+R),isNaN(S)||isNaN(j)?u.text("00:00"):u.text(S+":"+j),isNaN(T)||isNaN(R)?p.text("00:00"):p.text(T+":"+R),isNaN(S)||isNaN(j)||isNaN(T)||isNaN(R)?x.removeClass("active"):x.addClass("active"),v.width(Q+"%"),Q===100&&(ee.attr("class","fa fa-play"),v.width(0),u.text("00:00"),h.removeClass("buffering").removeClass("active"),clearInterval(t)))},Xo=()=>{clearInterval(t),t=setInterval(()=>{de===0||ze-de>1e3?h.addClass("buffering"):h.removeClass("buffering"),ze=new Date,ze=ze.getTime()},100)},Tl=ye=>{var Zo,Jo;ye===0||ye===1?++Z:--Z,Z>-1&&Z<C.length?(ye===0?ee.attr("class","fa fa-play"):(h.removeClass("buffering"),ee.attr("class","fa fa-pause")),v.width(0),x.removeClass("active"),u.text("00:00"),p.text("00:00"),_t=z[Z],bo=_[Z],dr=C[Z],n||(n=new Audio),n.src=B[Z],de=0,ze=new Date,ze=ze.getTime(),ye!==0&&(n.play(),a.addClass("active"),h.addClass("active"),clearInterval(t),Xo()),c.text(_t),g.text(bo),h.find("img.active").removeClass("active"),"#"+dr&&((Zo=document.getElementById(dr))==null||Zo.classList.add("active")),P=(Jo=document.getElementById(dr))==null?void 0:Jo.src,P&&s.css({"background-image":"url("+P+")"})):ye===0||ye===1?--Z:++Z};return(()=>{n=new Audio,Tl(0),n&&(n.loop=!1,f.on("click",Ko),m.on("mousemove",ye=>_c(ye.originalEvent)),m.on("mouseout",Yo),m.on("click",zc),o(n).on("timeupdate",Go),y.on("click",()=>Tl(-1)),E.on("click",()=>Tl(1)))})(),()=>{var ye;n&&((ye=n.pause)==null||ye.call(n),o(n).off("timeupdate",Go)),f.off("click",Ko),m.off("mousemove"),m.off("mouseout"),m.off("click"),y.off("click"),E.off("click"),clearInterval(t)}};return(async()=>{const o=await i();e?(o&&o(),l.__vvnu0_music_player_initialized=!1):r=o})(),()=>{if(e=!0,clearInterval(t),r)try{r()}catch{}else l.__vvnu0_music_player_initialized=!1}},[]),d.jsxs("div",{className:"relative flex w-full justify-center md:justify-end",children:[d.jsx("style",{children:`
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
      `}),d.jsxs("div",{id:"player-container",children:[d.jsx("div",{id:"player-bg-artwork"}),d.jsx("div",{id:"player-bg-layer"}),d.jsxs("div",{id:"player",children:[d.jsxs("div",{id:"player-track",children:[d.jsx("div",{id:"album-name"}),d.jsx("div",{id:"track-name"}),d.jsxs("div",{id:"track-time",children:[d.jsx("div",{id:"current-time"}),d.jsx("div",{id:"track-length"})]}),d.jsxs("div",{id:"seek-bar-container",children:[d.jsx("div",{id:"seek-time"}),d.jsx("div",{id:"s-hover"}),d.jsx("div",{id:"seek-bar"})]})]}),d.jsxs("div",{id:"player-content",children:[d.jsxs("div",{id:"album-art",children:[d.jsx("img",{src:"https://raw.githubusercontent.com/vvnu0/vvnu0.github.io/main/public/tiptoe.jpeg",className:"active",id:"_1"}),d.jsx("img",{src:"https://raw.githubusercontent.com/vvnu0/vvnu0.github.io/main/public/Harvey.jpg",id:"_2"}),d.jsx("img",{src:"https://raw.githubusercontent.com/vvnu0/vvnu0.github.io/main/public/Invincible.jpg",id:"_3"}),d.jsx("img",{src:"https://raw.githubusercontent.com/vvnu0/vvnu0.github.io/main/public/sunflower.jpeg",id:"_4"}),d.jsx("img",{src:"https://raw.githubusercontent.com/vvnu0/vvnu0.github.io/main/public/MonaLisa.jpeg",id:"_5"}),d.jsx("div",{id:"buffer-box",children:"Buffering ..."})]}),d.jsxs("div",{id:"player-controls",children:[d.jsx("div",{className:"control",children:d.jsx("div",{className:"button",id:"play-previous",children:d.jsx("i",{className:"fas fa-backward"})})}),d.jsx("div",{className:"control",children:d.jsx("div",{className:"button",id:"play-pause-button",children:d.jsx("i",{className:"fas fa-play"})})}),d.jsx("div",{className:"control",children:d.jsx("div",{className:"button",id:"play-next",children:d.jsx("i",{className:"fas fa-forward"})})})]})]})]})]})]})}function hp(){return U.useEffect(()=>{if(!$t)return;sn("https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css","swiper-css"),sn("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;600;800&display=swap","fonts-bebas-inter"),sn("https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700;800&family=IBM+Plex+Sans:wght@600;700&family=Oswald:wght@600;700&family=EB+Garamond:wght@600;700&display=swap","fonts-brand-fallbacks");let e=!1;const t=[];return(async()=>{if(await lr("https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js","swiper-js-loaded"),e)return;const r=window.Swiper;if(!r)return;const l=()=>window.innerWidth>767.9;let i=l()?.0285*window.innerWidth:15;["#horizontal-ticker-rtl","#horizontal-ticker-ltr"].forEach((g,h)=>{const m=document.querySelector(g);if(!m)return;const v=new r(m,{loop:!0,slidesPerView:"auto",spaceBetween:i,speed:8e3,allowTouchMove:!1,autoplay:{delay:0,reverseDirection:h===0,disableOnInteraction:!1}});t.push(v)});const o=()=>{i=l()?.0285*window.innerWidth:15,t.forEach(g=>{g.params.spaceBetween=i,g.update()})};window.addEventListener("resize",o);const a=()=>window.removeEventListener("resize",o);t._cleanupResize=a;const s={amazon:{bg:"#CC7A00",text:"#111111"},coinbase:{bg:"#003BB3",text:"#FFFFFF"},NASA:{bg:"#083071",text:"#FFFFFF"},"MIT Lincoln Lab":{bg:"#EDEDED",text:"#002B52"},"Cornell Data Science":{bg:"#5A2FA0",text:"#000000"},"Beats by Dre":{bg:"#B81831",text:"#000000"},"Millennium Management":{bg:"#000000",text:"#0026C2"},"NumberOne AI":{bg:"#0B1220",text:"#FFFFFF"}},c={"Beats by Dre":"'Abeat by Kai', Zarautz, Opificio, Oswald, Montserrat, Inter, system-ui, -apple-system, 'Segoe UI', Arial, sans-serif",amazon:"'Golger Sans Serif', Montserrat, Inter, system-ui, -apple-system, 'Segoe UI', Arial, sans-serif",coinbase:"'Henderson Sans', 'IBM Plex Sans', Inter, system-ui, -apple-system, 'Segoe UI', Arial, sans-serif",NASA:"'Henderson Sans', 'IBM Plex Sans', Inter, system-ui, -apple-system, 'Segoe UI', Arial, sans-serif","Millennium Management":"'Henderson Sans', 'IBM Plex Sans', Inter, system-ui, -apple-system, 'Segoe UI', Arial, sans-serif","Cornell Data Science":"Palatino, 'Palatino Linotype', 'EB Garamond', 'Times New Roman', serif"};document.querySelectorAll(".horizontal-ticker__slide").forEach(g=>{const h=g.getAttribute("data-company")||"",m=g.querySelector(".logo.alt"),v=g.querySelector(".logo"),x=s[h],w=c[h];m&&x&&(m.style.background=x.bg,m.style.color=x.text),w&&(v&&(v.style.fontFamily=w),m&&(m.style.fontFamily=w))})})(),()=>{var r;e=!0,(r=t._cleanupResize)==null||r.call(t),t.forEach(l=>{var i;return(i=l.destroy)==null?void 0:i.call(l)})}},[]),d.jsxs("section",{className:"not-prose",children:[d.jsx("style",{children:`
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
      `}),d.jsxs("div",{className:"base-template__wrapper",children:[d.jsx("h2",{className:"base-template__title text-3xl md:text-5xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100",children:"Where I've Innovated"}),d.jsx("div",{className:"base-template__text mx-auto max-w-2xl text-zinc-600 dark:text-zinc-400",children:"Places I've worked and interned."}),d.jsx("div",{className:"base-template__content",children:d.jsxs("div",{className:"horizontal-ticker",children:[d.jsx("div",{id:"horizontal-ticker-rtl",className:"swiper horizontal-ticker__slider",children:d.jsx("div",{className:"swiper-wrapper",children:["amazon","coinbase","Millennium Management","Cornell Data Science","amazon","coinbase","Millennium Management","Cornell Data Science"].map((e,t)=>d.jsxs("div",{className:"swiper-slide horizontal-ticker__slide","data-company":e,children:[d.jsx("span",{className:"logo",children:e}),d.jsx("span",{className:"logo alt",children:e})]},`rtl-${t}-${e}`))})}),d.jsx("div",{id:"horizontal-ticker-ltr",className:"swiper horizontal-ticker__slider",children:d.jsx("div",{className:"swiper-wrapper",children:["Beats by Dre","NumberOne AI","NASA","MIT Lincoln Lab","Beats by Dre","NumberOne AI","NASA","MIT Lincoln Lab"].map((e,t)=>d.jsxs("div",{className:"swiper-slide horizontal-ticker__slide","data-company":e,children:[d.jsx("span",{className:"logo",children:e}),d.jsx("span",{className:"logo alt",children:e})]},`ltr-${t}-${e}`))})})]})})]})]})}function gp(){return U.useEffect(()=>{if(!$t)return;sn("https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap","nunito-font");let e=!1;return(async()=>{if(await lr("https://cdn.zingchart.com/zingchart.min.js","zingchart-lib-loaded"),e)return;const t=window,n=t.zingchart,r=t.ZC;if(!n||!r)return;r.LICENSE=["7b185ca19b4be2cba68fdcd369c663a9"];const l="#fff",i="transparent",o="#C3A9C6",a="#53688B",s=["Intellect","Emotional Stability","Assertiveness","Sociable","Dutifulness","Self-Confidence","Sensitivity","Distrust","Imagination","Reserve","Anxiety","Complexity","Self-reliance","Orderliness","Emotionality","Warmth"],c=[100,90,65,80,80,85,80,45,90,10,20,95,55,60,10,80],g=["C++","HTML","Javascript","Node.js","SQL","Python","Java","CSS"],h=[5,3,4,3,4,5,5,1];function m(f,u,p,y){return{type:"radar",globals:{fontFamily:"Nunito"},backgroundColor:i,gui:{contextMenu:{visible:!1},logo:{visible:!1}},logo:{visible:!1},legend:{visible:!1},plot:{aspect:"area",alphaArea:.6},scaleK:{labels:f,item:{fontColor:l},guide:{lineStyle:"solid",lineColor:l,backgroundColor:i},tick:{lineColor:l}},scaleV:{minValue:u,maxValue:p,step:y,item:{visible:!1},guide:{lineStyle:"solid",lineColor:l,backgroundColor:i}}}}const v=m(s,0,100,20);v.series=[{values:c,backgroundColor:o,lineColor:o}];const x=m(g,0,5,1);x.series=[{values:h,backgroundColor:a,lineColor:a}],n.render({id:"chartOne",data:v,height:"100%",width:"100%"}),n.render({id:"chartTwo",data:x,height:"100%",width:"100%"});function w(f,u){f?console.log("✓",u):console.error("Test failed:",u)}function L(f,u,p,y,E,z){n.bind(f,"complete",function(){try{w(u.title===void 0,f+": No title configured"),w(u.legend&&u.legend.visible===!1,f+": Legend hidden"),w(Array.isArray(u.series)&&u.series.length===1,f+": One series"),w(u.series[0].lineColor===p,f+": Correct color");const _=document.getElementById(f);w(!!_&&_.children.length>0,f+": Container populated"),w(u.scaleV.minValue===E&&u.scaleV.maxValue===z,f+": Axis range"),w(u.scaleK.labels.length===y&&u.series[0].values.length===y,f+": Labels/values length")}catch(_){console.error(f+" assertion error:",_)}})}L("chartOne",v,o,16,0,100),L("chartTwo",x,a,8,0,5)})(),()=>{e=!0;const n=window.zingchart;if(n&&typeof n.exec=="function")try{n.exec("chartOne","destroy"),n.exec("chartTwo","destroy")}catch{}}},[]),d.jsxs("div",{children:[d.jsx("style",{children:`
  .radar-root {
    --purple: #000000;
    background-color: var(--purple);
    border-radius: 16px;
    padding: 16px;
  }

  .radar-main {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .radar-block {
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .radar-heading {
    font-size: 0.75rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    font-weight: 600;
    color: rgba(248, 250, 252, 0.75);
    padding-left: 2px;
    line-height: 1;
    margin-bottom: -2px;
  }

  /* Skills header only */
  .radar-block:last-of-type .radar-heading {
    margin-bottom: -50px;
  }

  .radar-section {
    width: 100%;
    height: 420px;
  }

  @media (max-width: 750px) {
    .radar-section {
      height: 360px;
    }
  }
`}),d.jsx("div",{className:"radar-root",children:d.jsxs("div",{className:"radar-main",children:[d.jsxs("div",{className:"radar-block",children:[d.jsx("div",{className:"radar-heading",children:"Personality"}),d.jsx("section",{id:"chartOne",className:"radar-section",role:"img","aria-label":"Radar chart with 16 personality traits (pink)"})]}),d.jsxs("div",{className:"radar-block",children:[d.jsx("div",{className:"radar-heading",children:"Skills"}),d.jsx("section",{id:"chartTwo",className:"radar-section",role:"img","aria-label":"Radar chart with 8 tech skills scored 1–5 (dark blue)"})]})]})})]})}function vp(){const e=U.useRef(null);return U.useEffect(()=>{if(!$t||!e.current)return;sn("https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap","geist-font");const t=e.current;t.dataset.theme="dark",t.dataset.syncScrollbar="true",t.dataset.animate="true",t.dataset.snap="true";const n=Math.floor(Math.random()*101),r=Math.floor(900+Math.random()*101);t.style.setProperty("--start",String(n)),t.style.setProperty("--hue",String(n)),t.style.setProperty("--end",String(r));const l=CSS.supports("(animation-timeline: scroll()) and (animation-range: 0% 100%)");let i;return(async()=>{if(l)return;await lr("https://cdn.jsdelivr.net/npm/gsap@3.12.0/dist/gsap.min.js","gsap-3-12"),await lr("https://cdn.jsdelivr.net/npm/gsap@3.12.0/dist/ScrollTrigger.min.js","gsap-st-3-12");const o=window.gsap,a=window.ScrollTrigger;if(!o||!a)return;o.registerPlugin(a);const s=t.querySelectorAll(".aboutfx ul li");s.length&&o.set(s,{opacity:m=>m!==0?.2:1});const c=Array.from(s),g=o.timeline().to(c.slice(1),{opacity:1,stagger:.5}).to(c.slice(0,c.length-1),{opacity:.2,stagger:.5},0);a.create({trigger:c[0],endTrigger:c[c.length-1],start:"center center",end:"center center",animation:g,scrub:.2});const h=o.timeline().fromTo(t,{"--hue":n},{"--hue":r,ease:"none"});a.create({trigger:c[0],endTrigger:c[c.length-1],start:"center center",end:"center center",animation:h,scrub:.2}),o.fromTo(t,{"--chroma":0},{"--chroma":.3,ease:"none",scrollTrigger:{scrub:.2,trigger:c[0],start:"center center+=40",end:"center center"}}),o.fromTo(t,{"--chroma":.3},{"--chroma":0,ease:"none",scrollTrigger:{scrub:.2,trigger:c[c.length-2],start:"center center",end:"center center-=40"}}),i=()=>{var m,v,x;(m=window.ScrollTrigger)==null||m.getAll().forEach(w=>w.kill()),(x=(v=o.globalTimeline)==null?void 0:v.clear)==null||x.call(v)}})(),()=>i==null?void 0:i()},[]),d.jsxs("div",{ref:e,className:"aboutfx not-prose",children:[d.jsx("style",{children:`
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
        `}),d.jsx("div",{className:"aboutfx-main",children:d.jsxs("section",{className:"aboutfx-content fluid",children:[d.jsxs("h2",{children:[d.jsx("span",{"aria-hidden":"true",children:"I can "}),d.jsx("span",{className:"sr-only",children:"you can ship things."})]}),d.jsx("ul",{"aria-hidden":"true",style:{"--count":22},children:["solve.","build.","inspire.","learn.","ship.","collaborate.","create.","innovate.","optimize.","teach.","visualize.","scale.","do it."].map((t,n)=>d.jsx("li",{style:{"--i":n},children:t},n))})]})})]})}function yp(){var e,t;return U.useEffect(()=>{if(!$t)return;const n=document.querySelector(".longcat-root");if(!n)return;const r=n.querySelector(".right-eye"),l=n.querySelector(".left-eye"),i=-135,o=a=>{[r,l].forEach(s=>{if(!s)return;const c=s.getBoundingClientRect(),g=c.left+c.width/2,h=c.top+c.height/2,m=a.clientX-g,v=a.clientY-h,w=Math.atan2(v,m)*180/Math.PI+i;s.style.transform=`rotate(${w}deg)`})};return window.addEventListener("mousemove",o),()=>{window.removeEventListener("mousemove",o)}},[]),d.jsxs("div",{className:"longcat-root flex justify-end mt-50",children:[d.jsx("style",{children:`
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

        margin-top: 11rem;        /* push cat+video down in the About section */
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
        margin-top: 2.5rem;  /* also nudge it lower inside the block */
        width: 34.5em;
        height: 100%;
        min-height: 24rem;
        transition: height 0.1s ease-out;
        position: relative;
        z-index: 1;

          /* 👇 extra horizontal + vertical nudge */
        margin-right: -35rem;   /* shifts cat further right */
        margin-top: 2.5rem;  
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
        top: 18vh;           /* was 11.5vh – lower on screen */
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
            top: 12vh;
            width: 100%;
            max-width: 600px;
          }
        }

      `}),d.jsxs("div",{className:"longcat",children:[d.jsx("div",{className:"right-ear"}),d.jsx("div",{className:"left-ear"}),d.jsx("div",{className:"right-arm",children:d.jsx("div",{className:"right-paw"})}),d.jsx("div",{className:"torso",children:d.jsxs("div",{className:"bottom",children:[d.jsx("div",{className:"tail",children:d.jsx("div",{className:"tail-outer"})}),d.jsx("div",{className:"right-leg",children:d.jsx("div",{className:"right-lower-leg",children:d.jsx("div",{className:"right-foot"})})}),d.jsx("div",{className:"left-leg",children:d.jsx("div",{className:"left-lower-leg",children:d.jsx("div",{className:"left-foot"})})})]})}),d.jsxs("div",{className:"head",children:[d.jsx("div",{className:"right-eye"}),d.jsx("div",{className:"left-eye"}),d.jsx("div",{className:"nose-mouth"}),d.jsx("div",{className:"right-cheek"}),d.jsx("div",{className:"left-cheek"}),Array.from({length:10}).map((n,r)=>d.jsx("div",{className:"whisker"},r))]}),d.jsx("div",{className:"left-arm",children:d.jsx("div",{className:"left-paw"})})]}),d.jsx("div",{className:"longcat-video-wrapper border border-zinc-200 shadow-sm dark:border-zinc-800",children:d.jsx("video",{src:(e=Ue.introVideo)==null?void 0:e.src,poster:(t=Ue.introVideo)==null?void 0:t.poster,controls:!0,playsInline:!0})}),d.jsx("div",{className:"barrier"})]})}function wp(){const[e,t]=U.useState(!0),[n,r]=U.useState(!1);U.useEffect(()=>{const i=setTimeout(()=>r(!0),ss),o=setTimeout(()=>t(!1),ss+Vr);return()=>{clearTimeout(i),clearTimeout(o)}},[]);const l=e?d.jsx(fp,{onDismiss:()=>{n||(r(!0),setTimeout(()=>t(!1),Vr))},fading:n}):null;return d.jsxs("div",{className:"dark",children:[l,d.jsx("a",{href:"#content",className:"sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 rounded bg-indigo-600 px-3 py-2 text-white",children:"Skip to content"}),d.jsxs("div",{className:"min-h-dvh bg-black text-zinc-800 transition dark:text-zinc-100",style:{opacity:n||!e?1:0,transition:`opacity ${Vr}ms ease`},children:[d.jsx("header",{className:"sticky top-0 z-40 border-b border-zinc-200/70 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-zinc-800/70 dark:bg-zinc-950/50",children:d.jsxs("div",{className:"mx-auto flex h-16 max-w-5xl items-center justify-between px-4",children:[d.jsxs("div",{className:"flex items-center gap-3",children:[d.jsx("div",{className:"h-8 w-8 rounded-xl bg-gradient-to-tr from-indigo-500 to-fuchsia-500","aria-hidden":!0}),d.jsx("span",{className:"text-sm font-semibold tracking-tight text-zinc-900 dark:text-white",children:Ue.name})]}),d.jsxs("nav",{className:"hidden items-center gap-6 md:flex",children:[d.jsx("a",{className:ni,href:"#about",children:"About"}),d.jsx("a",{className:ni,href:"#projects",children:"Projects"}),d.jsx("a",{className:ni,href:"#contact",children:"Contact"}),d.jsx("a",{className:"rounded-xl border border-zinc-300 px-3 py-1.5 text-sm font-medium shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-zinc-700",href:us[0].href,target:"_blank",rel:"noreferrer noopener",children:"Resume"})]})]})}),d.jsxs("main",{id:"content",children:[d.jsx("section",{className:"mx-auto max-w-5xl px-4 py-16 md:py-24",children:d.jsxs("div",{className:"grid items-center gap-10 md:grid-cols-2",children:[d.jsxs("div",{children:[d.jsxs("h1",{className:"text-3xl font-semibold leading-tight tracking-tight md:text-5xl",children:[d.jsx("span",{className:"align-baseline",children:"Soft"}),d.jsx(cp,{text:"ware Engineer",start:n})]}),d.jsx("p",{className:"mt-4 max-w-prose text-zinc-600 dark:text-zinc-400",children:Ue.tagline}),d.jsxs("div",{className:"mt-6 flex flex-wrap items-center gap-3",children:[d.jsxs("a",{href:`mailto:${Ue.email}`,className:"inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md",children:[d.jsx(Nc,{className:"h-4 w-4"})," Email me"]}),us.filter(i=>i.label!=="Email").map(({label:i,href:o,icon:a})=>d.jsxs("a",{href:o,target:"_blank",rel:"noreferrer noopener",className:"inline-flex items-center gap-2 rounded-xl border border-zinc-300 px-4 py-2 text-sm font-medium shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-zinc-700",children:[d.jsx(a,{className:"h-4 w-4"})," ",i]},i))]}),d.jsx("p",{className:"mt-3 text-xs text-zinc-500 dark:text-zinc-400",children:"Actively seeking internships for Summer 2026!"})]}),d.jsx(mp,{})]})}),d.jsx("style",{children:`
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
`}),d.jsxs(ri,{id:"about",title:"About",hint:"Who I am + what I do",children:[d.jsx(vp,{}),d.jsxs("div",{className:"mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] items-start",children:[d.jsx(gp,{}),d.jsx(yp,{})]})]}),d.jsx(ri,{id:"projects",title:"Projects",hint:"Case studies → outcomes",children:d.jsx("div",{className:"grid gap-5 sm:grid-cols-2",children:up.map(i=>d.jsx(pp,{p:i},i.title))})}),d.jsx(ri,{id:"contact",title:"Contact",hint:"I read every note",children:d.jsxs("div",{className:"grid gap-6 md:grid-cols-2",children:[d.jsxs("form",{onSubmit:i=>i.preventDefault(),className:"rounded-2xl border border-zinc-200 bg-white/70 p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/60","aria-label":"contact form",children:[d.jsx("label",{className:"block text-sm font-medium text-zinc-700 dark:text-zinc-200",children:"Name"}),d.jsx("input",{className:"mt-1 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm shadow-sm outline-none transition focus:ring-2 focus:ring-indigo-500 dark:border-zinc-700 dark:bg-zinc-950",placeholder:"Ada Lovelace",required:!0}),d.jsx("label",{className:"mt-4 block text-sm font-medium text-zinc-700 dark:text-zinc-200",children:"Email"}),d.jsx("input",{type:"email",className:"mt-1 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm shadow-sm outline-none transition focus:ring-2 focus:ring-indigo-500 dark:border-zinc-700 dark:bg-zinc-950",placeholder:"ada@example.com",required:!0}),d.jsx("label",{className:"mt-4 block text-sm font-medium text-zinc-700 dark:text-zinc-200",children:"Message"}),d.jsx("textarea",{className:"mt-1 h-28 w-full resize-y rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm shadow-sm outline-none transition focus:ring-2 focus:ring-indigo-500 dark:border-zinc-700 dark:bg-zinc-950",placeholder:"Hi! I'd love to collaborate on…",required:!0}),d.jsx("button",{className:"mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md",children:"Send"}),d.jsxs("p",{className:"mt-2 text-xs text-zinc-500 dark:text-zinc-400",children:["Or email me directly at"," ",d.jsx("a",{className:"underline",href:`mailto:${Ue.email}`,children:Ue.email})]})]}),d.jsx("div",{className:"hidden md:block","aria-hidden":!0})]})}),d.jsx(hp,{})]}),d.jsx("footer",{className:"border-t border-zinc-200 py-8 text-center text-sm text-zinc-500 dark:border-zinc-800 dark:text-zinc-400",children:d.jsx("div",{className:"mx-auto max-w-5xl px-4",children:d.jsxs("p",{children:["© ",new Date().getFullYear()," ",Ue.name,". Built with React + Tailwind. Theme-aware, accessible, and deploy-ready."]})})})]})]})}li.createRoot(document.getElementById("root")).render(d.jsx(Hc.StrictMode,{children:d.jsx(wp,{})}));
