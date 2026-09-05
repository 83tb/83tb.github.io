(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var bh={exports:{}},Yo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q0;function ES(){if(Q0)return Yo;Q0=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:c}}return Yo.Fragment=t,Yo.jsx=i,Yo.jsxs=i,Yo}var J0;function bS(){return J0||(J0=1,bh.exports=ES()),bh.exports}var O=bS(),Th={exports:{}},se={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $0;function TS(){if($0)return se;$0=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),x=Symbol.iterator;function M(N){return N===null||typeof N!="object"?null:(N=x&&N[x]||N["@@iterator"],typeof N=="function"?N:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,S={};function v(N,$,bt){this.props=N,this.context=$,this.refs=S,this.updater=bt||E}v.prototype.isReactComponent={},v.prototype.setState=function(N,$){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,$,"setState")},v.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function z(){}z.prototype=v.prototype;function L(N,$,bt){this.props=N,this.context=$,this.refs=S,this.updater=bt||E}var U=L.prototype=new z;U.constructor=L,b(U,v.prototype),U.isPureReactComponent=!0;var k=Array.isArray;function H(){}var B={H:null,A:null,T:null,S:null},X=Object.prototype.hasOwnProperty;function D(N,$,bt){var q=bt.ref;return{$$typeof:r,type:N,key:$,ref:q!==void 0?q:null,props:bt}}function C(N,$){return D(N.type,$,N.props)}function I(N){return typeof N=="object"&&N!==null&&N.$$typeof===r}function ct(N){var $={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(bt){return $[bt]})}var st=/\/+/g;function _t(N,$){return typeof N=="object"&&N!==null&&N.key!=null?ct(""+N.key):$.toString(36)}function mt(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(H,H):(N.status="pending",N.then(function($){N.status==="pending"&&(N.status="fulfilled",N.value=$)},function($){N.status==="pending"&&(N.status="rejected",N.reason=$)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function P(N,$,bt,q,ut){var Tt=typeof N;(Tt==="undefined"||Tt==="boolean")&&(N=null);var gt=!1;if(N===null)gt=!0;else switch(Tt){case"bigint":case"string":case"number":gt=!0;break;case"object":switch(N.$$typeof){case r:case t:gt=!0;break;case g:return gt=N._init,P(gt(N._payload),$,bt,q,ut)}}if(gt)return ut=ut(N),gt=q===""?"."+_t(N,0):q,k(ut)?(bt="",gt!=null&&(bt=gt.replace(st,"$&/")+"/"),P(ut,$,bt,"",function(Rt){return Rt})):ut!=null&&(I(ut)&&(ut=C(ut,bt+(ut.key==null||N&&N.key===ut.key?"":(""+ut.key).replace(st,"$&/")+"/")+gt)),$.push(ut)),1;gt=0;var It=q===""?".":q+":";if(k(N))for(var ot=0;ot<N.length;ot++)q=N[ot],Tt=It+_t(q,ot),gt+=P(q,$,bt,Tt,ut);else if(ot=M(N),typeof ot=="function")for(N=ot.call(N),ot=0;!(q=N.next()).done;)q=q.value,Tt=It+_t(q,ot++),gt+=P(q,$,bt,Tt,ut);else if(Tt==="object"){if(typeof N.then=="function")return P(mt(N),$,bt,q,ut);throw $=String(N),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.")}return gt}function Y(N,$,bt){if(N==null)return N;var q=[],ut=0;return P(N,q,"","",function(Tt){return $.call(bt,Tt,ut++)}),q}function Z(N){if(N._status===-1){var $=N._result;$=$(),$.then(function(bt){(N._status===0||N._status===-1)&&(N._status=1,N._result=bt)},function(bt){(N._status===0||N._status===-1)&&(N._status=2,N._result=bt)}),N._status===-1&&(N._status=0,N._result=$)}if(N._status===1)return N._result.default;throw N._result}var Mt=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var $=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent($))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},At={map:Y,forEach:function(N,$,bt){Y(N,function(){$.apply(this,arguments)},bt)},count:function(N){var $=0;return Y(N,function(){$++}),$},toArray:function(N){return Y(N,function($){return $})||[]},only:function(N){if(!I(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return se.Activity=_,se.Children=At,se.Component=v,se.Fragment=i,se.Profiler=l,se.PureComponent=L,se.StrictMode=s,se.Suspense=m,se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,se.__COMPILER_RUNTIME={__proto__:null,c:function(N){return B.H.useMemoCache(N)}},se.cache=function(N){return function(){return N.apply(null,arguments)}},se.cacheSignal=function(){return null},se.cloneElement=function(N,$,bt){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var q=b({},N.props),ut=N.key;if($!=null)for(Tt in $.key!==void 0&&(ut=""+$.key),$)!X.call($,Tt)||Tt==="key"||Tt==="__self"||Tt==="__source"||Tt==="ref"&&$.ref===void 0||(q[Tt]=$[Tt]);var Tt=arguments.length-2;if(Tt===1)q.children=bt;else if(1<Tt){for(var gt=Array(Tt),It=0;It<Tt;It++)gt[It]=arguments[It+2];q.children=gt}return D(N.type,ut,q)},se.createContext=function(N){return N={$$typeof:f,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:c,_context:N},N},se.createElement=function(N,$,bt){var q,ut={},Tt=null;if($!=null)for(q in $.key!==void 0&&(Tt=""+$.key),$)X.call($,q)&&q!=="key"&&q!=="__self"&&q!=="__source"&&(ut[q]=$[q]);var gt=arguments.length-2;if(gt===1)ut.children=bt;else if(1<gt){for(var It=Array(gt),ot=0;ot<gt;ot++)It[ot]=arguments[ot+2];ut.children=It}if(N&&N.defaultProps)for(q in gt=N.defaultProps,gt)ut[q]===void 0&&(ut[q]=gt[q]);return D(N,Tt,ut)},se.createRef=function(){return{current:null}},se.forwardRef=function(N){return{$$typeof:d,render:N}},se.isValidElement=I,se.lazy=function(N){return{$$typeof:g,_payload:{_status:-1,_result:N},_init:Z}},se.memo=function(N,$){return{$$typeof:p,type:N,compare:$===void 0?null:$}},se.startTransition=function(N){var $=B.T,bt={};B.T=bt;try{var q=N(),ut=B.S;ut!==null&&ut(bt,q),typeof q=="object"&&q!==null&&typeof q.then=="function"&&q.then(H,Mt)}catch(Tt){Mt(Tt)}finally{$!==null&&bt.types!==null&&($.types=bt.types),B.T=$}},se.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},se.use=function(N){return B.H.use(N)},se.useActionState=function(N,$,bt){return B.H.useActionState(N,$,bt)},se.useCallback=function(N,$){return B.H.useCallback(N,$)},se.useContext=function(N){return B.H.useContext(N)},se.useDebugValue=function(){},se.useDeferredValue=function(N,$){return B.H.useDeferredValue(N,$)},se.useEffect=function(N,$){return B.H.useEffect(N,$)},se.useEffectEvent=function(N){return B.H.useEffectEvent(N)},se.useId=function(){return B.H.useId()},se.useImperativeHandle=function(N,$,bt){return B.H.useImperativeHandle(N,$,bt)},se.useInsertionEffect=function(N,$){return B.H.useInsertionEffect(N,$)},se.useLayoutEffect=function(N,$){return B.H.useLayoutEffect(N,$)},se.useMemo=function(N,$){return B.H.useMemo(N,$)},se.useOptimistic=function(N,$){return B.H.useOptimistic(N,$)},se.useReducer=function(N,$,bt){return B.H.useReducer(N,$,bt)},se.useRef=function(N){return B.H.useRef(N)},se.useState=function(N){return B.H.useState(N)},se.useSyncExternalStore=function(N,$,bt){return B.H.useSyncExternalStore(N,$,bt)},se.useTransition=function(){return B.H.useTransition()},se.version="19.2.8",se}var t_;function Jd(){return t_||(t_=1,Th.exports=TS()),Th.exports}var Qt=Jd(),Ah={exports:{}},qo={},Rh={exports:{}},Ch={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e_;function AS(){return e_||(e_=1,(function(r){function t(P,Y){var Z=P.length;P.push(Y);t:for(;0<Z;){var Mt=Z-1>>>1,At=P[Mt];if(0<l(At,Y))P[Mt]=Y,P[Z]=At,Z=Mt;else break t}}function i(P){return P.length===0?null:P[0]}function s(P){if(P.length===0)return null;var Y=P[0],Z=P.pop();if(Z!==Y){P[0]=Z;t:for(var Mt=0,At=P.length,N=At>>>1;Mt<N;){var $=2*(Mt+1)-1,bt=P[$],q=$+1,ut=P[q];if(0>l(bt,Z))q<At&&0>l(ut,bt)?(P[Mt]=ut,P[q]=Z,Mt=q):(P[Mt]=bt,P[$]=Z,Mt=$);else if(q<At&&0>l(ut,Z))P[Mt]=ut,P[q]=Z,Mt=q;else break t}}return Y}function l(P,Y){var Z=P.sortIndex-Y.sortIndex;return Z!==0?Z:P.id-Y.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,d=f.now();r.unstable_now=function(){return f.now()-d}}var m=[],p=[],g=1,_=null,x=3,M=!1,E=!1,b=!1,S=!1,v=typeof setTimeout=="function"?setTimeout:null,z=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function U(P){for(var Y=i(p);Y!==null;){if(Y.callback===null)s(p);else if(Y.startTime<=P)s(p),Y.sortIndex=Y.expirationTime,t(m,Y);else break;Y=i(p)}}function k(P){if(b=!1,U(P),!E)if(i(m)!==null)E=!0,H||(H=!0,ct());else{var Y=i(p);Y!==null&&mt(k,Y.startTime-P)}}var H=!1,B=-1,X=5,D=-1;function C(){return S?!0:!(r.unstable_now()-D<X)}function I(){if(S=!1,H){var P=r.unstable_now();D=P;var Y=!0;try{t:{E=!1,b&&(b=!1,z(B),B=-1),M=!0;var Z=x;try{e:{for(U(P),_=i(m);_!==null&&!(_.expirationTime>P&&C());){var Mt=_.callback;if(typeof Mt=="function"){_.callback=null,x=_.priorityLevel;var At=Mt(_.expirationTime<=P);if(P=r.unstable_now(),typeof At=="function"){_.callback=At,U(P),Y=!0;break e}_===i(m)&&s(m),U(P)}else s(m);_=i(m)}if(_!==null)Y=!0;else{var N=i(p);N!==null&&mt(k,N.startTime-P),Y=!1}}break t}finally{_=null,x=Z,M=!1}Y=void 0}}finally{Y?ct():H=!1}}}var ct;if(typeof L=="function")ct=function(){L(I)};else if(typeof MessageChannel<"u"){var st=new MessageChannel,_t=st.port2;st.port1.onmessage=I,ct=function(){_t.postMessage(null)}}else ct=function(){v(I,0)};function mt(P,Y){B=v(function(){P(r.unstable_now())},Y)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(P){P.callback=null},r.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<P?Math.floor(1e3/P):5},r.unstable_getCurrentPriorityLevel=function(){return x},r.unstable_next=function(P){switch(x){case 1:case 2:case 3:var Y=3;break;default:Y=x}var Z=x;x=Y;try{return P()}finally{x=Z}},r.unstable_requestPaint=function(){S=!0},r.unstable_runWithPriority=function(P,Y){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var Z=x;x=P;try{return Y()}finally{x=Z}},r.unstable_scheduleCallback=function(P,Y,Z){var Mt=r.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?Mt+Z:Mt):Z=Mt,P){case 1:var At=-1;break;case 2:At=250;break;case 5:At=1073741823;break;case 4:At=1e4;break;default:At=5e3}return At=Z+At,P={id:g++,callback:Y,priorityLevel:P,startTime:Z,expirationTime:At,sortIndex:-1},Z>Mt?(P.sortIndex=Z,t(p,P),i(m)===null&&P===i(p)&&(b?(z(B),B=-1):b=!0,mt(k,Z-Mt))):(P.sortIndex=At,t(m,P),E||M||(E=!0,H||(H=!0,ct()))),P},r.unstable_shouldYield=C,r.unstable_wrapCallback=function(P){var Y=x;return function(){var Z=x;x=Y;try{return P.apply(this,arguments)}finally{x=Z}}}})(Ch)),Ch}var n_;function RS(){return n_||(n_=1,Rh.exports=AS()),Rh.exports}var wh={exports:{}},Ln={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i_;function CS(){if(i_)return Ln;i_=1;var r=Jd();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:p,implementation:g}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Ln.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Ln.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,g)},Ln.flushSync=function(m){var p=f.T,g=s.p;try{if(f.T=null,s.p=2,m)return m()}finally{f.T=p,s.p=g,s.d.f()}},Ln.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Ln.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Ln.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,_=d(g,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:x,fetchPriority:M}):g==="script"&&s.d.X(m,{crossOrigin:_,integrity:x,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Ln.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Ln.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,_=d(g,p.crossOrigin);s.d.L(m,g,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Ln.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Ln.requestFormReset=function(m){s.d.r(m)},Ln.unstable_batchedUpdates=function(m,p){return m(p)},Ln.useFormState=function(m,p,g){return f.H.useFormState(m,p,g)},Ln.useFormStatus=function(){return f.H.useHostTransitionStatus()},Ln.version="19.2.8",Ln}var a_;function wS(){if(a_)return wh.exports;a_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),wh.exports=CS(),wh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s_;function DS(){if(s_)return qo;s_=1;var r=RS(),t=Jd(),i=wS();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var h=u.alternate;if(h===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===a)return m(u),e;if(h===o)return m(u),n;h=h.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=h;else{for(var y=!1,A=u.child;A;){if(A===a){y=!0,a=u,o=h;break}if(A===o){y=!0,o=u,a=h;break}A=A.sibling}if(!y){for(A=h.child;A;){if(A===a){y=!0,a=h,o=u;break}if(A===o){y=!0,o=h,a=u;break}A=A.sibling}if(!y)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function g(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=g(e),n!==null)return n;e=e.sibling}return null}var _=Object.assign,x=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),z=Symbol.for("react.consumer"),L=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),I=Symbol.iterator;function ct(e){return e===null||typeof e!="object"?null:(e=I&&e[I]||e["@@iterator"],typeof e=="function"?e:null)}var st=Symbol.for("react.client.reference");function _t(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===st?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case b:return"Fragment";case v:return"Profiler";case S:return"StrictMode";case k:return"Suspense";case H:return"SuspenseList";case D:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case L:return e.displayName||"Context";case z:return(e._context.displayName||"Context")+".Consumer";case U:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case B:return n=e.displayName||null,n!==null?n:_t(e.type)||"Memo";case X:n=e._payload,e=e._init;try{return _t(e(n))}catch{}}return null}var mt=Array.isArray,P=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z={pending:!1,data:null,method:null,action:null},Mt=[],At=-1;function N(e){return{current:e}}function $(e){0>At||(e.current=Mt[At],Mt[At]=null,At--)}function bt(e,n){At++,Mt[At]=e.current,e.current=n}var q=N(null),ut=N(null),Tt=N(null),gt=N(null);function It(e,n){switch(bt(Tt,n),bt(ut,e),bt(q,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?y0(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=y0(n),e=S0(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}$(q),bt(q,e)}function ot(){$(q),$(ut),$(Tt)}function Rt(e){e.memoizedState!==null&&bt(gt,e);var n=q.current,a=S0(n,e.type);n!==a&&(bt(ut,e),bt(q,a))}function $t(e){ut.current===e&&($(q),$(ut)),gt.current===e&&($(gt),ko._currentValue=Z)}var Jt,Oe;function G(e){if(Jt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Jt=n&&n[1]||"",Oe=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Jt+e+Oe}var nn=!1;function he(e,n){if(!e||nn)return"";nn=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var xt=function(){throw Error()};if(Object.defineProperty(xt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xt,[])}catch(lt){var it=lt}Reflect.construct(e,[],xt)}else{try{xt.call()}catch(lt){it=lt}e.call(xt.prototype)}}else{try{throw Error()}catch(lt){it=lt}(xt=e())&&typeof xt.catch=="function"&&xt.catch(function(){})}}catch(lt){if(lt&&it&&typeof lt.stack=="string")return[lt.stack,it.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),y=h[0],A=h[1];if(y&&A){var F=y.split(`
`),nt=A.split(`
`);for(u=o=0;o<F.length&&!F[o].includes("DetermineComponentFrameRoot");)o++;for(;u<nt.length&&!nt[u].includes("DetermineComponentFrameRoot");)u++;if(o===F.length||u===nt.length)for(o=F.length-1,u=nt.length-1;1<=o&&0<=u&&F[o]!==nt[u];)u--;for(;1<=o&&0<=u;o--,u--)if(F[o]!==nt[u]){if(o!==1||u!==1)do if(o--,u--,0>u||F[o]!==nt[u]){var dt=`
`+F[o].replace(" at new "," at ");return e.displayName&&dt.includes("<anonymous>")&&(dt=dt.replace("<anonymous>",e.displayName)),dt}while(1<=o&&0<=u);break}}}finally{nn=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?G(a):""}function pe(e,n){switch(e.tag){case 26:case 27:case 5:return G(e.type);case 16:return G("Lazy");case 13:return e.child!==n&&n!==null?G("Suspense Fallback"):G("Suspense");case 19:return G("SuspenseList");case 0:case 15:return he(e.type,!1);case 11:return he(e.type.render,!1);case 1:return he(e.type,!0);case 31:return G("Activity");default:return""}}function Wt(e){try{var n="",a=null;do n+=pe(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Re=Object.prototype.hasOwnProperty,Ct=r.unstable_scheduleCallback,w=r.unstable_cancelCallback,T=r.unstable_shouldYield,tt=r.unstable_requestPaint,ft=r.unstable_now,Et=r.unstable_getCurrentPriorityLevel,pt=r.unstable_ImmediatePriority,Xt=r.unstable_UserBlockingPriority,wt=r.unstable_NormalPriority,Ft=r.unstable_LowPriority,ge=r.unstable_IdlePriority,Dt=r.log,Gt=r.unstable_setDisableYieldValue,qt=null,Yt=null;function Pt(e){if(typeof Dt=="function"&&Gt(e),Yt&&typeof Yt.setStrictMode=="function")try{Yt.setStrictMode(qt,e)}catch{}}var ne=Math.clz32?Math.clz32:j,oe=Math.log,Fe=Math.LN2;function j(e){return e>>>=0,e===0?32:31-(oe(e)/Fe|0)|0}var Ut=256,ht=262144,yt=4194304;function Lt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Nt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,h=e.suspendedLanes,y=e.pingedLanes;e=e.warmLanes;var A=o&134217727;return A!==0?(o=A&~h,o!==0?u=Lt(o):(y&=A,y!==0?u=Lt(y):a||(a=A&~e,a!==0&&(u=Lt(a))))):(A=o&~h,A!==0?u=Lt(A):y!==0?u=Lt(y):a||(a=o&~e,a!==0&&(u=Lt(a)))),u===0?0:n!==0&&n!==u&&(n&h)===0&&(h=u&-u,a=n&-n,h>=a||h===32&&(a&4194048)!==0)?n:u}function ie(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Ke(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function dn(){var e=yt;return yt<<=1,(yt&62914560)===0&&(yt=4194304),e}function Ae(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function bn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Si(e,n,a,o,u,h){var y=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var A=e.entanglements,F=e.expirationTimes,nt=e.hiddenUpdates;for(a=y&~a;0<a;){var dt=31-ne(a),xt=1<<dt;A[dt]=0,F[dt]=-1;var it=nt[dt];if(it!==null)for(nt[dt]=null,dt=0;dt<it.length;dt++){var lt=it[dt];lt!==null&&(lt.lane&=-536870913)}a&=~xt}o!==0&&eo(e,o,0),h!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=h&~(y&~n))}function eo(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-ne(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function no(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-ne(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function Li(e,n){var a=n&-n;return a=(a&42)!==0?1:ns(a),(a&(e.suspendedLanes|n))!==0?0:a}function ns(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Is(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function io(){var e=Y.p;return e!==0?e:(e=window.event,e===void 0?32:X0(e.type))}function is(e,n){var a=Y.p;try{return Y.p=e,n()}finally{Y.p=a}}var Mi=Math.random().toString(36).slice(2),Je="__reactFiber$"+Mi,Tn="__reactProps$"+Mi,ki="__reactContainer$"+Mi,ao="__reactEvents$"+Mi,_u="__reactListeners$"+Mi,vu="__reactHandles$"+Mi,cl="__reactResources$"+Mi,as="__reactMarker$"+Mi;function R(e){delete e[Je],delete e[Tn],delete e[ao],delete e[_u],delete e[vu]}function W(e){var n=e[Je];if(n)return n;for(var a=e.parentNode;a;){if(n=a[ki]||a[Je]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=C0(e);e!==null;){if(a=e[Je])return a;e=C0(e)}return n}e=a,a=e.parentNode}return null}function at(e){if(e=e[Je]||e[ki]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function rt(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function K(e){var n=e[cl];return n||(n=e[cl]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function St(e){e[as]=!0}var Ot=new Set,Ht={};function Bt(e,n){te(e,n),te(e+"Capture",n)}function te(e,n){for(Ht[e]=n,e=0;e<n.length;e++)Ot.add(n[e])}var ae=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Zt={},Se={};function Ce(e){return Re.call(Se,e)?!0:Re.call(Zt,e)?!1:ae.test(e)?Se[e]=!0:(Zt[e]=!0,!1)}function Ye(e,n,a){if(Ce(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function je(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function le(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function kt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function on(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function we(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,h=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(y){a=""+y,h.call(this,y)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(y){a=""+y},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function zn(e){if(!e._valueTracker){var n=on(e)?"checked":"value";e._valueTracker=we(e,n,""+e[n])}}function Xi(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=on(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function yn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ss=/[\n"\\]/g;function ve(e){return e.replace(ss,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Un(e,n,a,o,u,h,y,A){e.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.type=y:e.removeAttribute("type"),n!=null?y==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+kt(n)):e.value!==""+kt(n)&&(e.value=""+kt(n)):y!=="submit"&&y!=="reset"||e.removeAttribute("value"),n!=null?pn(e,y,kt(n)):a!=null?pn(e,y,kt(a)):o!=null&&e.removeAttribute("value"),u==null&&h!=null&&(e.defaultChecked=!!h),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+kt(A):e.removeAttribute("name")}function Pn(e,n,a,o,u,h,y,A){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.type=h),n!=null||a!=null){if(!(h!=="submit"&&h!=="reset"||n!=null)){zn(e);return}a=a!=null?""+kt(a):"",n=n!=null?""+kt(n):a,A||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=A?e.checked:!!o,e.defaultChecked=!!o,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(e.name=y),zn(e)}function pn(e,n,a){n==="number"&&yn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function an(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+kt(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Fs(e,n,a){if(n!=null&&(n=""+kt(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+kt(a):""}function Ni(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(mt(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=kt(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),zn(e)}function Hs(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var vx=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function _p(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||vx.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function vp(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&_p(e,u,o)}else for(var h in n)n.hasOwnProperty(h)&&_p(e,h,n[h])}function xu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),yx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ul(e){return yx.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ji(){}var yu=null;function Su(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Gs=null,Vs=null;function xp(e){var n=at(e);if(n&&(e=n.stateNode)){var a=e[Tn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Un(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ve(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[Tn]||null;if(!u)throw Error(s(90));Un(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&Xi(o)}break t;case"textarea":Fs(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&an(e,!!a.multiple,n,!1)}}}var Mu=!1;function yp(e,n,a){if(Mu)return e(n,a);Mu=!0;try{var o=e(n);return o}finally{if(Mu=!1,(Gs!==null||Vs!==null)&&(Ql(),Gs&&(n=Gs,e=Vs,Vs=Gs=null,xp(n),e)))for(n=0;n<e.length;n++)xp(e[n])}}function so(e,n){var a=e.stateNode;if(a===null)return null;var o=a[Tn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Wi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Eu=!1;if(Wi)try{var ro={};Object.defineProperty(ro,"passive",{get:function(){Eu=!0}}),window.addEventListener("test",ro,ro),window.removeEventListener("test",ro,ro)}catch{Eu=!1}var xa=null,bu=null,fl=null;function Sp(){if(fl)return fl;var e,n=bu,a=n.length,o,u="value"in xa?xa.value:xa.textContent,h=u.length;for(e=0;e<a&&n[e]===u[e];e++);var y=a-e;for(o=1;o<=y&&n[a-o]===u[h-o];o++);return fl=u.slice(e,1<o?1-o:void 0)}function hl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function dl(){return!0}function Mp(){return!1}function Vn(e){function n(a,o,u,h,y){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=h,this.target=y,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(a=e[A],this[A]=a?a(h):h[A]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?dl:Mp,this.isPropagationStopped=Mp,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=dl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=dl)},persist:function(){},isPersistent:dl}),n}var rs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pl=Vn(rs),oo=_({},rs,{view:0,detail:0}),Sx=Vn(oo),Tu,Au,lo,ml=_({},oo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==lo&&(lo&&e.type==="mousemove"?(Tu=e.screenX-lo.screenX,Au=e.screenY-lo.screenY):Au=Tu=0,lo=e),Tu)},movementY:function(e){return"movementY"in e?e.movementY:Au}}),Ep=Vn(ml),Mx=_({},ml,{dataTransfer:0}),Ex=Vn(Mx),bx=_({},oo,{relatedTarget:0}),Ru=Vn(bx),Tx=_({},rs,{animationName:0,elapsedTime:0,pseudoElement:0}),Ax=Vn(Tx),Rx=_({},rs,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Cx=Vn(Rx),wx=_({},rs,{data:0}),bp=Vn(wx),Dx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ux={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Lx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Nx(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Lx[e])?!!n[e]:!1}function Cu(){return Nx}var Ox=_({},oo,{key:function(e){if(e.key){var n=Dx[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=hl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ux[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cu,charCode:function(e){return e.type==="keypress"?hl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?hl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),zx=Vn(Ox),Px=_({},ml,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Tp=Vn(Px),Bx=_({},oo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cu}),Ix=Vn(Bx),Fx=_({},rs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Hx=Vn(Fx),Gx=_({},ml,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Vx=Vn(Gx),kx=_({},rs,{newState:0,oldState:0}),Xx=Vn(kx),jx=[9,13,27,32],wu=Wi&&"CompositionEvent"in window,co=null;Wi&&"documentMode"in document&&(co=document.documentMode);var Wx=Wi&&"TextEvent"in window&&!co,Ap=Wi&&(!wu||co&&8<co&&11>=co),Rp=" ",Cp=!1;function wp(e,n){switch(e){case"keyup":return jx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Dp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ks=!1;function Yx(e,n){switch(e){case"compositionend":return Dp(n);case"keypress":return n.which!==32?null:(Cp=!0,Rp);case"textInput":return e=n.data,e===Rp&&Cp?null:e;default:return null}}function qx(e,n){if(ks)return e==="compositionend"||!wu&&wp(e,n)?(e=Sp(),fl=bu=xa=null,ks=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Ap&&n.locale!=="ko"?null:n.data;default:return null}}var Zx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Up(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Zx[e.type]:n==="textarea"}function Lp(e,n,a,o){Gs?Vs?Vs.push(o):Vs=[o]:Gs=o,n=ac(n,"onChange"),0<n.length&&(a=new pl("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var uo=null,fo=null;function Kx(e){p0(e,0)}function gl(e){var n=rt(e);if(Xi(n))return e}function Np(e,n){if(e==="change")return n}var Op=!1;if(Wi){var Du;if(Wi){var Uu="oninput"in document;if(!Uu){var zp=document.createElement("div");zp.setAttribute("oninput","return;"),Uu=typeof zp.oninput=="function"}Du=Uu}else Du=!1;Op=Du&&(!document.documentMode||9<document.documentMode)}function Pp(){uo&&(uo.detachEvent("onpropertychange",Bp),fo=uo=null)}function Bp(e){if(e.propertyName==="value"&&gl(fo)){var n=[];Lp(n,fo,e,Su(e)),yp(Kx,n)}}function Qx(e,n,a){e==="focusin"?(Pp(),uo=n,fo=a,uo.attachEvent("onpropertychange",Bp)):e==="focusout"&&Pp()}function Jx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return gl(fo)}function $x(e,n){if(e==="click")return gl(n)}function ty(e,n){if(e==="input"||e==="change")return gl(n)}function ey(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Jn=typeof Object.is=="function"?Object.is:ey;function ho(e,n){if(Jn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Re.call(n,u)||!Jn(e[u],n[u]))return!1}return!0}function Ip(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Fp(e,n){var a=Ip(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Ip(a)}}function Hp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Hp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Gp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=yn(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=yn(e.document)}return n}function Lu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var ny=Wi&&"documentMode"in document&&11>=document.documentMode,Xs=null,Nu=null,po=null,Ou=!1;function Vp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ou||Xs==null||Xs!==yn(o)||(o=Xs,"selectionStart"in o&&Lu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),po&&ho(po,o)||(po=o,o=ac(Nu,"onSelect"),0<o.length&&(n=new pl("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Xs)))}function os(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var js={animationend:os("Animation","AnimationEnd"),animationiteration:os("Animation","AnimationIteration"),animationstart:os("Animation","AnimationStart"),transitionrun:os("Transition","TransitionRun"),transitionstart:os("Transition","TransitionStart"),transitioncancel:os("Transition","TransitionCancel"),transitionend:os("Transition","TransitionEnd")},zu={},kp={};Wi&&(kp=document.createElement("div").style,"AnimationEvent"in window||(delete js.animationend.animation,delete js.animationiteration.animation,delete js.animationstart.animation),"TransitionEvent"in window||delete js.transitionend.transition);function ls(e){if(zu[e])return zu[e];if(!js[e])return e;var n=js[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in kp)return zu[e]=n[a];return e}var Xp=ls("animationend"),jp=ls("animationiteration"),Wp=ls("animationstart"),iy=ls("transitionrun"),ay=ls("transitionstart"),sy=ls("transitioncancel"),Yp=ls("transitionend"),qp=new Map,Pu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Pu.push("scrollEnd");function Ei(e,n){qp.set(e,n),Bt(n,[e])}var _l=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ci=[],Ws=0,Bu=0;function vl(){for(var e=Ws,n=Bu=Ws=0;n<e;){var a=ci[n];ci[n++]=null;var o=ci[n];ci[n++]=null;var u=ci[n];ci[n++]=null;var h=ci[n];if(ci[n++]=null,o!==null&&u!==null){var y=o.pending;y===null?u.next=u:(u.next=y.next,y.next=u),o.pending=u}h!==0&&Zp(a,u,h)}}function xl(e,n,a,o){ci[Ws++]=e,ci[Ws++]=n,ci[Ws++]=a,ci[Ws++]=o,Bu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Iu(e,n,a,o){return xl(e,n,a,o),yl(e)}function cs(e,n){return xl(e,null,null,n),yl(e)}function Zp(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,h=e.return;h!==null;)h.childLanes|=a,o=h.alternate,o!==null&&(o.childLanes|=a),h.tag===22&&(e=h.stateNode,e===null||e._visibility&1||(u=!0)),e=h,h=h.return;return e.tag===3?(h=e.stateNode,u&&n!==null&&(u=31-ne(a),e=h.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),h):null}function yl(e){if(50<Po)throw Po=0,qf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Ys={};function ry(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $n(e,n,a,o){return new ry(e,n,a,o)}function Fu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Yi(e,n){var a=e.alternate;return a===null?(a=$n(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Kp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Sl(e,n,a,o,u,h){var y=0;if(o=e,typeof e=="function")Fu(e)&&(y=1);else if(typeof e=="string")y=fS(e,a,q.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case D:return e=$n(31,a,n,u),e.elementType=D,e.lanes=h,e;case b:return us(a.children,u,h,n);case S:y=8,u|=24;break;case v:return e=$n(12,a,n,u|2),e.elementType=v,e.lanes=h,e;case k:return e=$n(13,a,n,u),e.elementType=k,e.lanes=h,e;case H:return e=$n(19,a,n,u),e.elementType=H,e.lanes=h,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case L:y=10;break t;case z:y=9;break t;case U:y=11;break t;case B:y=14;break t;case X:y=16,o=null;break t}y=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=$n(y,a,n,u),n.elementType=e,n.type=o,n.lanes=h,n}function us(e,n,a,o){return e=$n(7,e,o,n),e.lanes=a,e}function Hu(e,n,a){return e=$n(6,e,null,n),e.lanes=a,e}function Qp(e){var n=$n(18,null,null,0);return n.stateNode=e,n}function Gu(e,n,a){return n=$n(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Jp=new WeakMap;function ui(e,n){if(typeof e=="object"&&e!==null){var a=Jp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Wt(n)},Jp.set(e,n),n)}return{value:e,source:n,stack:Wt(n)}}var qs=[],Zs=0,Ml=null,mo=0,fi=[],hi=0,ya=null,Oi=1,zi="";function qi(e,n){qs[Zs++]=mo,qs[Zs++]=Ml,Ml=e,mo=n}function $p(e,n,a){fi[hi++]=Oi,fi[hi++]=zi,fi[hi++]=ya,ya=e;var o=Oi;e=zi;var u=32-ne(o)-1;o&=~(1<<u),a+=1;var h=32-ne(n)+u;if(30<h){var y=u-u%5;h=(o&(1<<y)-1).toString(32),o>>=y,u-=y,Oi=1<<32-ne(n)+u|a<<u|o,zi=h+e}else Oi=1<<h|a<<u|o,zi=e}function Vu(e){e.return!==null&&(qi(e,1),$p(e,1,0))}function ku(e){for(;e===Ml;)Ml=qs[--Zs],qs[Zs]=null,mo=qs[--Zs],qs[Zs]=null;for(;e===ya;)ya=fi[--hi],fi[hi]=null,zi=fi[--hi],fi[hi]=null,Oi=fi[--hi],fi[hi]=null}function tm(e,n){fi[hi++]=Oi,fi[hi++]=zi,fi[hi++]=ya,Oi=n.id,zi=n.overflow,ya=e}var An=null,qe=null,be=!1,Sa=null,di=!1,Xu=Error(s(519));function Ma(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw go(ui(n,e)),Xu}function em(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[Je]=e,n[Tn]=o,a){case"dialog":ye("cancel",n),ye("close",n);break;case"iframe":case"object":case"embed":ye("load",n);break;case"video":case"audio":for(a=0;a<Io.length;a++)ye(Io[a],n);break;case"source":ye("error",n);break;case"img":case"image":case"link":ye("error",n),ye("load",n);break;case"details":ye("toggle",n);break;case"input":ye("invalid",n),Pn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":ye("invalid",n);break;case"textarea":ye("invalid",n),Ni(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||v0(n.textContent,a)?(o.popover!=null&&(ye("beforetoggle",n),ye("toggle",n)),o.onScroll!=null&&ye("scroll",n),o.onScrollEnd!=null&&ye("scrollend",n),o.onClick!=null&&(n.onclick=ji),n=!0):n=!1,n||Ma(e,!0)}function nm(e){for(An=e.return;An;)switch(An.tag){case 5:case 31:case 13:di=!1;return;case 27:case 3:di=!0;return;default:An=An.return}}function Ks(e){if(e!==An)return!1;if(!be)return nm(e),be=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||ch(e.type,e.memoizedProps)),a=!a),a&&qe&&Ma(e),nm(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));qe=R0(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));qe=R0(e)}else n===27?(n=qe,Pa(e.type)?(e=ph,ph=null,qe=e):qe=n):qe=An?mi(e.stateNode.nextSibling):null;return!0}function fs(){qe=An=null,be=!1}function ju(){var e=Sa;return e!==null&&(Wn===null?Wn=e:Wn.push.apply(Wn,e),Sa=null),e}function go(e){Sa===null?Sa=[e]:Sa.push(e)}var Wu=N(null),hs=null,Zi=null;function Ea(e,n,a){bt(Wu,n._currentValue),n._currentValue=a}function Ki(e){e._currentValue=Wu.current,$(Wu)}function Yu(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function qu(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var h=u.dependencies;if(h!==null){var y=u.child;h=h.firstContext;t:for(;h!==null;){var A=h;h=u;for(var F=0;F<n.length;F++)if(A.context===n[F]){h.lanes|=a,A=h.alternate,A!==null&&(A.lanes|=a),Yu(h.return,a,e),o||(y=null);break t}h=A.next}}else if(u.tag===18){if(y=u.return,y===null)throw Error(s(341));y.lanes|=a,h=y.alternate,h!==null&&(h.lanes|=a),Yu(y,a,e),y=null}else y=u.child;if(y!==null)y.return=u;else for(y=u;y!==null;){if(y===e){y=null;break}if(u=y.sibling,u!==null){u.return=y.return,y=u;break}y=y.return}u=y}}function Qs(e,n,a,o){e=null;for(var u=n,h=!1;u!==null;){if(!h){if((u.flags&524288)!==0)h=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var y=u.alternate;if(y===null)throw Error(s(387));if(y=y.memoizedProps,y!==null){var A=u.type;Jn(u.pendingProps.value,y.value)||(e!==null?e.push(A):e=[A])}}else if(u===gt.current){if(y=u.alternate,y===null)throw Error(s(387));y.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(ko):e=[ko])}u=u.return}e!==null&&qu(n,e,a,o),n.flags|=262144}function El(e){for(e=e.firstContext;e!==null;){if(!Jn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ds(e){hs=e,Zi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Rn(e){return im(hs,e)}function bl(e,n){return hs===null&&ds(e),im(e,n)}function im(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Zi===null){if(e===null)throw Error(s(308));Zi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Zi=Zi.next=n;return a}var oy=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},ly=r.unstable_scheduleCallback,cy=r.unstable_NormalPriority,ln={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Zu(){return{controller:new oy,data:new Map,refCount:0}}function _o(e){e.refCount--,e.refCount===0&&ly(cy,function(){e.controller.abort()})}var vo=null,Ku=0,Js=0,$s=null;function uy(e,n){if(vo===null){var a=vo=[];Ku=0,Js=th(),$s={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Ku++,n.then(am,am),n}function am(){if(--Ku===0&&vo!==null){$s!==null&&($s.status="fulfilled");var e=vo;vo=null,Js=0,$s=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function fy(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var sm=P.S;P.S=function(e,n){Vg=ft(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&uy(e,n),sm!==null&&sm(e,n)};var ps=N(null);function Qu(){var e=ps.current;return e!==null?e:We.pooledCache}function Tl(e,n){n===null?bt(ps,ps.current):bt(ps,n.pool)}function rm(){var e=Qu();return e===null?null:{parent:ln._currentValue,pool:e}}var tr=Error(s(460)),Ju=Error(s(474)),Al=Error(s(542)),Rl={then:function(){}};function om(e){return e=e.status,e==="fulfilled"||e==="rejected"}function lm(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(ji,ji),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,um(e),e;default:if(typeof n.status=="string")n.then(ji,ji);else{if(e=We,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,um(e),e}throw gs=n,tr}}function ms(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(gs=a,tr):a}}var gs=null;function cm(){if(gs===null)throw Error(s(459));var e=gs;return gs=null,e}function um(e){if(e===tr||e===Al)throw Error(s(483))}var er=null,xo=0;function Cl(e){var n=xo;return xo+=1,er===null&&(er=[]),lm(er,e,n)}function yo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function wl(e,n){throw n.$$typeof===x?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function fm(e){function n(Q,V){if(e){var et=Q.deletions;et===null?(Q.deletions=[V],Q.flags|=16):et.push(V)}}function a(Q,V){if(!e)return null;for(;V!==null;)n(Q,V),V=V.sibling;return null}function o(Q){for(var V=new Map;Q!==null;)Q.key!==null?V.set(Q.key,Q):V.set(Q.index,Q),Q=Q.sibling;return V}function u(Q,V){return Q=Yi(Q,V),Q.index=0,Q.sibling=null,Q}function h(Q,V,et){return Q.index=et,e?(et=Q.alternate,et!==null?(et=et.index,et<V?(Q.flags|=67108866,V):et):(Q.flags|=67108866,V)):(Q.flags|=1048576,V)}function y(Q){return e&&Q.alternate===null&&(Q.flags|=67108866),Q}function A(Q,V,et,vt){return V===null||V.tag!==6?(V=Hu(et,Q.mode,vt),V.return=Q,V):(V=u(V,et),V.return=Q,V)}function F(Q,V,et,vt){var Kt=et.type;return Kt===b?dt(Q,V,et.props.children,vt,et.key):V!==null&&(V.elementType===Kt||typeof Kt=="object"&&Kt!==null&&Kt.$$typeof===X&&ms(Kt)===V.type)?(V=u(V,et.props),yo(V,et),V.return=Q,V):(V=Sl(et.type,et.key,et.props,null,Q.mode,vt),yo(V,et),V.return=Q,V)}function nt(Q,V,et,vt){return V===null||V.tag!==4||V.stateNode.containerInfo!==et.containerInfo||V.stateNode.implementation!==et.implementation?(V=Gu(et,Q.mode,vt),V.return=Q,V):(V=u(V,et.children||[]),V.return=Q,V)}function dt(Q,V,et,vt,Kt){return V===null||V.tag!==7?(V=us(et,Q.mode,vt,Kt),V.return=Q,V):(V=u(V,et),V.return=Q,V)}function xt(Q,V,et){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=Hu(""+V,Q.mode,et),V.return=Q,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case M:return et=Sl(V.type,V.key,V.props,null,Q.mode,et),yo(et,V),et.return=Q,et;case E:return V=Gu(V,Q.mode,et),V.return=Q,V;case X:return V=ms(V),xt(Q,V,et)}if(mt(V)||ct(V))return V=us(V,Q.mode,et,null),V.return=Q,V;if(typeof V.then=="function")return xt(Q,Cl(V),et);if(V.$$typeof===L)return xt(Q,bl(Q,V),et);wl(Q,V)}return null}function it(Q,V,et,vt){var Kt=V!==null?V.key:null;if(typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint")return Kt!==null?null:A(Q,V,""+et,vt);if(typeof et=="object"&&et!==null){switch(et.$$typeof){case M:return et.key===Kt?F(Q,V,et,vt):null;case E:return et.key===Kt?nt(Q,V,et,vt):null;case X:return et=ms(et),it(Q,V,et,vt)}if(mt(et)||ct(et))return Kt!==null?null:dt(Q,V,et,vt,null);if(typeof et.then=="function")return it(Q,V,Cl(et),vt);if(et.$$typeof===L)return it(Q,V,bl(Q,et),vt);wl(Q,et)}return null}function lt(Q,V,et,vt,Kt){if(typeof vt=="string"&&vt!==""||typeof vt=="number"||typeof vt=="bigint")return Q=Q.get(et)||null,A(V,Q,""+vt,Kt);if(typeof vt=="object"&&vt!==null){switch(vt.$$typeof){case M:return Q=Q.get(vt.key===null?et:vt.key)||null,F(V,Q,vt,Kt);case E:return Q=Q.get(vt.key===null?et:vt.key)||null,nt(V,Q,vt,Kt);case X:return vt=ms(vt),lt(Q,V,et,vt,Kt)}if(mt(vt)||ct(vt))return Q=Q.get(et)||null,dt(V,Q,vt,Kt,null);if(typeof vt.then=="function")return lt(Q,V,et,Cl(vt),Kt);if(vt.$$typeof===L)return lt(Q,V,et,bl(V,vt),Kt);wl(V,vt)}return null}function Vt(Q,V,et,vt){for(var Kt=null,De=null,jt=V,ue=V=0,Ee=null;jt!==null&&ue<et.length;ue++){jt.index>ue?(Ee=jt,jt=null):Ee=jt.sibling;var Ue=it(Q,jt,et[ue],vt);if(Ue===null){jt===null&&(jt=Ee);break}e&&jt&&Ue.alternate===null&&n(Q,jt),V=h(Ue,V,ue),De===null?Kt=Ue:De.sibling=Ue,De=Ue,jt=Ee}if(ue===et.length)return a(Q,jt),be&&qi(Q,ue),Kt;if(jt===null){for(;ue<et.length;ue++)jt=xt(Q,et[ue],vt),jt!==null&&(V=h(jt,V,ue),De===null?Kt=jt:De.sibling=jt,De=jt);return be&&qi(Q,ue),Kt}for(jt=o(jt);ue<et.length;ue++)Ee=lt(jt,Q,ue,et[ue],vt),Ee!==null&&(e&&Ee.alternate!==null&&jt.delete(Ee.key===null?ue:Ee.key),V=h(Ee,V,ue),De===null?Kt=Ee:De.sibling=Ee,De=Ee);return e&&jt.forEach(function(Ga){return n(Q,Ga)}),be&&qi(Q,ue),Kt}function ee(Q,V,et,vt){if(et==null)throw Error(s(151));for(var Kt=null,De=null,jt=V,ue=V=0,Ee=null,Ue=et.next();jt!==null&&!Ue.done;ue++,Ue=et.next()){jt.index>ue?(Ee=jt,jt=null):Ee=jt.sibling;var Ga=it(Q,jt,Ue.value,vt);if(Ga===null){jt===null&&(jt=Ee);break}e&&jt&&Ga.alternate===null&&n(Q,jt),V=h(Ga,V,ue),De===null?Kt=Ga:De.sibling=Ga,De=Ga,jt=Ee}if(Ue.done)return a(Q,jt),be&&qi(Q,ue),Kt;if(jt===null){for(;!Ue.done;ue++,Ue=et.next())Ue=xt(Q,Ue.value,vt),Ue!==null&&(V=h(Ue,V,ue),De===null?Kt=Ue:De.sibling=Ue,De=Ue);return be&&qi(Q,ue),Kt}for(jt=o(jt);!Ue.done;ue++,Ue=et.next())Ue=lt(jt,Q,ue,Ue.value,vt),Ue!==null&&(e&&Ue.alternate!==null&&jt.delete(Ue.key===null?ue:Ue.key),V=h(Ue,V,ue),De===null?Kt=Ue:De.sibling=Ue,De=Ue);return e&&jt.forEach(function(MS){return n(Q,MS)}),be&&qi(Q,ue),Kt}function Ve(Q,V,et,vt){if(typeof et=="object"&&et!==null&&et.type===b&&et.key===null&&(et=et.props.children),typeof et=="object"&&et!==null){switch(et.$$typeof){case M:t:{for(var Kt=et.key;V!==null;){if(V.key===Kt){if(Kt=et.type,Kt===b){if(V.tag===7){a(Q,V.sibling),vt=u(V,et.props.children),vt.return=Q,Q=vt;break t}}else if(V.elementType===Kt||typeof Kt=="object"&&Kt!==null&&Kt.$$typeof===X&&ms(Kt)===V.type){a(Q,V.sibling),vt=u(V,et.props),yo(vt,et),vt.return=Q,Q=vt;break t}a(Q,V);break}else n(Q,V);V=V.sibling}et.type===b?(vt=us(et.props.children,Q.mode,vt,et.key),vt.return=Q,Q=vt):(vt=Sl(et.type,et.key,et.props,null,Q.mode,vt),yo(vt,et),vt.return=Q,Q=vt)}return y(Q);case E:t:{for(Kt=et.key;V!==null;){if(V.key===Kt)if(V.tag===4&&V.stateNode.containerInfo===et.containerInfo&&V.stateNode.implementation===et.implementation){a(Q,V.sibling),vt=u(V,et.children||[]),vt.return=Q,Q=vt;break t}else{a(Q,V);break}else n(Q,V);V=V.sibling}vt=Gu(et,Q.mode,vt),vt.return=Q,Q=vt}return y(Q);case X:return et=ms(et),Ve(Q,V,et,vt)}if(mt(et))return Vt(Q,V,et,vt);if(ct(et)){if(Kt=ct(et),typeof Kt!="function")throw Error(s(150));return et=Kt.call(et),ee(Q,V,et,vt)}if(typeof et.then=="function")return Ve(Q,V,Cl(et),vt);if(et.$$typeof===L)return Ve(Q,V,bl(Q,et),vt);wl(Q,et)}return typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint"?(et=""+et,V!==null&&V.tag===6?(a(Q,V.sibling),vt=u(V,et),vt.return=Q,Q=vt):(a(Q,V),vt=Hu(et,Q.mode,vt),vt.return=Q,Q=vt),y(Q)):a(Q,V)}return function(Q,V,et,vt){try{xo=0;var Kt=Ve(Q,V,et,vt);return er=null,Kt}catch(jt){if(jt===tr||jt===Al)throw jt;var De=$n(29,jt,null,Q.mode);return De.lanes=vt,De.return=Q,De}finally{}}}var _s=fm(!0),hm=fm(!1),ba=!1;function $u(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function tf(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ta(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Aa(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ne&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=yl(e),Zp(e,null,a),n}return xl(e,o,n,a),yl(e)}function So(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,no(e,a)}}function ef(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var y={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};h===null?u=h=y:h=h.next=y,a=a.next}while(a!==null);h===null?u=h=n:h=h.next=n}else u=h=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var nf=!1;function Mo(){if(nf){var e=$s;if(e!==null)throw e}}function Eo(e,n,a,o){nf=!1;var u=e.updateQueue;ba=!1;var h=u.firstBaseUpdate,y=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var F=A,nt=F.next;F.next=null,y===null?h=nt:y.next=nt,y=F;var dt=e.alternate;dt!==null&&(dt=dt.updateQueue,A=dt.lastBaseUpdate,A!==y&&(A===null?dt.firstBaseUpdate=nt:A.next=nt,dt.lastBaseUpdate=F))}if(h!==null){var xt=u.baseState;y=0,dt=nt=F=null,A=h;do{var it=A.lane&-536870913,lt=it!==A.lane;if(lt?(Me&it)===it:(o&it)===it){it!==0&&it===Js&&(nf=!0),dt!==null&&(dt=dt.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var Vt=e,ee=A;it=n;var Ve=a;switch(ee.tag){case 1:if(Vt=ee.payload,typeof Vt=="function"){xt=Vt.call(Ve,xt,it);break t}xt=Vt;break t;case 3:Vt.flags=Vt.flags&-65537|128;case 0:if(Vt=ee.payload,it=typeof Vt=="function"?Vt.call(Ve,xt,it):Vt,it==null)break t;xt=_({},xt,it);break t;case 2:ba=!0}}it=A.callback,it!==null&&(e.flags|=64,lt&&(e.flags|=8192),lt=u.callbacks,lt===null?u.callbacks=[it]:lt.push(it))}else lt={lane:it,tag:A.tag,payload:A.payload,callback:A.callback,next:null},dt===null?(nt=dt=lt,F=xt):dt=dt.next=lt,y|=it;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;lt=A,A=lt.next,lt.next=null,u.lastBaseUpdate=lt,u.shared.pending=null}}while(!0);dt===null&&(F=xt),u.baseState=F,u.firstBaseUpdate=nt,u.lastBaseUpdate=dt,h===null&&(u.shared.lanes=0),Ua|=y,e.lanes=y,e.memoizedState=xt}}function dm(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function pm(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)dm(a[e],n)}var nr=N(null),Dl=N(0);function mm(e,n){e=sa,bt(Dl,e),bt(nr,n),sa=e|n.baseLanes}function af(){bt(Dl,sa),bt(nr,nr.current)}function sf(){sa=Dl.current,$(nr),$(Dl)}var ti=N(null),pi=null;function Ra(e){var n=e.alternate;bt(sn,sn.current&1),bt(ti,e),pi===null&&(n===null||nr.current!==null||n.memoizedState!==null)&&(pi=e)}function rf(e){bt(sn,sn.current),bt(ti,e),pi===null&&(pi=e)}function gm(e){e.tag===22?(bt(sn,sn.current),bt(ti,e),pi===null&&(pi=e)):Ca()}function Ca(){bt(sn,sn.current),bt(ti,ti.current)}function ei(e){$(ti),pi===e&&(pi=null),$(sn)}var sn=N(0);function Ul(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||hh(a)||dh(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Qi=0,ce=null,He=null,cn=null,Ll=!1,ir=!1,vs=!1,Nl=0,bo=0,ar=null,hy=0;function $e(){throw Error(s(321))}function of(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Jn(e[a],n[a]))return!1;return!0}function lf(e,n,a,o,u,h){return Qi=h,ce=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,P.H=e===null||e.memoizedState===null?$m:Ef,vs=!1,h=a(o,u),vs=!1,ir&&(h=vm(n,a,o,u)),_m(e),h}function _m(e){P.H=Ro;var n=He!==null&&He.next!==null;if(Qi=0,cn=He=ce=null,Ll=!1,bo=0,ar=null,n)throw Error(s(300));e===null||un||(e=e.dependencies,e!==null&&El(e)&&(un=!0))}function vm(e,n,a,o){ce=e;var u=0;do{if(ir&&(ar=null),bo=0,ir=!1,25<=u)throw Error(s(301));if(u+=1,cn=He=null,e.updateQueue!=null){var h=e.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}P.H=tg,h=n(a,o)}while(ir);return h}function dy(){var e=P.H,n=e.useState()[0];return n=typeof n.then=="function"?To(n):n,e=e.useState()[0],(He!==null?He.memoizedState:null)!==e&&(ce.flags|=1024),n}function cf(){var e=Nl!==0;return Nl=0,e}function uf(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function ff(e){if(Ll){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Ll=!1}Qi=0,cn=He=ce=null,ir=!1,bo=Nl=0,ar=null}function Bn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?ce.memoizedState=cn=e:cn=cn.next=e,cn}function rn(){if(He===null){var e=ce.alternate;e=e!==null?e.memoizedState:null}else e=He.next;var n=cn===null?ce.memoizedState:cn.next;if(n!==null)cn=n,He=e;else{if(e===null)throw ce.alternate===null?Error(s(467)):Error(s(310));He=e,e={memoizedState:He.memoizedState,baseState:He.baseState,baseQueue:He.baseQueue,queue:He.queue,next:null},cn===null?ce.memoizedState=cn=e:cn=cn.next=e}return cn}function Ol(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function To(e){var n=bo;return bo+=1,ar===null&&(ar=[]),e=lm(ar,e,n),n=ce,(cn===null?n.memoizedState:cn.next)===null&&(n=n.alternate,P.H=n===null||n.memoizedState===null?$m:Ef),e}function zl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return To(e);if(e.$$typeof===L)return Rn(e)}throw Error(s(438,String(e)))}function hf(e){var n=null,a=ce.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ce.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Ol(),ce.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=C;return n.index++,a}function Ji(e,n){return typeof n=="function"?n(e):n}function Pl(e){var n=rn();return df(n,He,e)}function df(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,h=o.pending;if(h!==null){if(u!==null){var y=u.next;u.next=h.next,h.next=y}n.baseQueue=u=h,o.pending=null}if(h=e.baseState,u===null)e.memoizedState=h;else{n=u.next;var A=y=null,F=null,nt=n,dt=!1;do{var xt=nt.lane&-536870913;if(xt!==nt.lane?(Me&xt)===xt:(Qi&xt)===xt){var it=nt.revertLane;if(it===0)F!==null&&(F=F.next={lane:0,revertLane:0,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null}),xt===Js&&(dt=!0);else if((Qi&it)===it){nt=nt.next,it===Js&&(dt=!0);continue}else xt={lane:0,revertLane:nt.revertLane,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},F===null?(A=F=xt,y=h):F=F.next=xt,ce.lanes|=it,Ua|=it;xt=nt.action,vs&&a(h,xt),h=nt.hasEagerState?nt.eagerState:a(h,xt)}else it={lane:xt,revertLane:nt.revertLane,gesture:nt.gesture,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},F===null?(A=F=it,y=h):F=F.next=it,ce.lanes|=xt,Ua|=xt;nt=nt.next}while(nt!==null&&nt!==n);if(F===null?y=h:F.next=A,!Jn(h,e.memoizedState)&&(un=!0,dt&&(a=$s,a!==null)))throw a;e.memoizedState=h,e.baseState=y,e.baseQueue=F,o.lastRenderedState=h}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function pf(e){var n=rn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,h=n.memoizedState;if(u!==null){a.pending=null;var y=u=u.next;do h=e(h,y.action),y=y.next;while(y!==u);Jn(h,n.memoizedState)||(un=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),a.lastRenderedState=h}return[h,o]}function xm(e,n,a){var o=ce,u=rn(),h=be;if(h){if(a===void 0)throw Error(s(407));a=a()}else a=n();var y=!Jn((He||u).memoizedState,a);if(y&&(u.memoizedState=a,un=!0),u=u.queue,_f(Mm.bind(null,o,u,e),[e]),u.getSnapshot!==n||y||cn!==null&&cn.memoizedState.tag&1){if(o.flags|=2048,sr(9,{destroy:void 0},Sm.bind(null,o,u,a,n),null),We===null)throw Error(s(349));h||(Qi&127)!==0||ym(o,n,a)}return a}function ym(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ce.updateQueue,n===null?(n=Ol(),ce.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Sm(e,n,a,o){n.value=a,n.getSnapshot=o,Em(n)&&bm(e)}function Mm(e,n,a){return a(function(){Em(n)&&bm(e)})}function Em(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Jn(e,a)}catch{return!0}}function bm(e){var n=cs(e,2);n!==null&&Yn(n,e,2)}function mf(e){var n=Bn();if(typeof e=="function"){var a=e;if(e=a(),vs){Pt(!0);try{a()}finally{Pt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ji,lastRenderedState:e},n}function Tm(e,n,a,o){return e.baseState=a,df(e,He,typeof o=="function"?o:Ji)}function py(e,n,a,o,u){if(Fl(e))throw Error(s(485));if(e=n.action,e!==null){var h={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){h.listeners.push(y)}};P.T!==null?a(!0):h.isTransition=!1,o(h),a=n.pending,a===null?(h.next=n.pending=h,Am(n,h)):(h.next=a.next,n.pending=a.next=h)}}function Am(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var h=P.T,y={};P.T=y;try{var A=a(u,o),F=P.S;F!==null&&F(y,A),Rm(e,n,A)}catch(nt){gf(e,n,nt)}finally{h!==null&&y.types!==null&&(h.types=y.types),P.T=h}}else try{h=a(u,o),Rm(e,n,h)}catch(nt){gf(e,n,nt)}}function Rm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Cm(e,n,o)},function(o){return gf(e,n,o)}):Cm(e,n,a)}function Cm(e,n,a){n.status="fulfilled",n.value=a,wm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Am(e,a)))}function gf(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,wm(n),n=n.next;while(n!==o)}e.action=null}function wm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Dm(e,n){return n}function Um(e,n){if(be){var a=We.formState;if(a!==null){t:{var o=ce;if(be){if(qe){e:{for(var u=qe,h=di;u.nodeType!==8;){if(!h){u=null;break e}if(u=mi(u.nextSibling),u===null){u=null;break e}}h=u.data,u=h==="F!"||h==="F"?u:null}if(u){qe=mi(u.nextSibling),o=u.data==="F!";break t}}Ma(o)}o=!1}o&&(n=a[0])}}return a=Bn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Dm,lastRenderedState:n},a.queue=o,a=Km.bind(null,ce,o),o.dispatch=a,o=mf(!1),h=Mf.bind(null,ce,!1,o.queue),o=Bn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=py.bind(null,ce,u,h,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function Lm(e){var n=rn();return Nm(n,He,e)}function Nm(e,n,a){if(n=df(e,n,Dm)[0],e=Pl(Ji)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=To(n)}catch(y){throw y===tr?Al:y}else o=n;n=rn();var u=n.queue,h=u.dispatch;return a!==n.memoizedState&&(ce.flags|=2048,sr(9,{destroy:void 0},my.bind(null,u,a),null)),[o,h,e]}function my(e,n){e.action=n}function Om(e){var n=rn(),a=He;if(a!==null)return Nm(n,a,e);rn(),n=n.memoizedState,a=rn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function sr(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=ce.updateQueue,n===null&&(n=Ol(),ce.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function zm(){return rn().memoizedState}function Bl(e,n,a,o){var u=Bn();ce.flags|=e,u.memoizedState=sr(1|n,{destroy:void 0},a,o===void 0?null:o)}function Il(e,n,a,o){var u=rn();o=o===void 0?null:o;var h=u.memoizedState.inst;He!==null&&o!==null&&of(o,He.memoizedState.deps)?u.memoizedState=sr(n,h,a,o):(ce.flags|=e,u.memoizedState=sr(1|n,h,a,o))}function Pm(e,n){Bl(8390656,8,e,n)}function _f(e,n){Il(2048,8,e,n)}function gy(e){ce.flags|=4;var n=ce.updateQueue;if(n===null)n=Ol(),ce.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Bm(e){var n=rn().memoizedState;return gy({ref:n,nextImpl:e}),function(){if((Ne&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Im(e,n){return Il(4,2,e,n)}function Fm(e,n){return Il(4,4,e,n)}function Hm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Gm(e,n,a){a=a!=null?a.concat([e]):null,Il(4,4,Hm.bind(null,n,e),a)}function vf(){}function Vm(e,n){var a=rn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&of(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function km(e,n){var a=rn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&of(n,o[1]))return o[0];if(o=e(),vs){Pt(!0);try{e()}finally{Pt(!1)}}return a.memoizedState=[o,n],o}function xf(e,n,a){return a===void 0||(Qi&1073741824)!==0&&(Me&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=Xg(),ce.lanes|=e,Ua|=e,a)}function Xm(e,n,a,o){return Jn(a,n)?a:nr.current!==null?(e=xf(e,a,o),Jn(e,n)||(un=!0),e):(Qi&42)===0||(Qi&1073741824)!==0&&(Me&261930)===0?(un=!0,e.memoizedState=a):(e=Xg(),ce.lanes|=e,Ua|=e,n)}function jm(e,n,a,o,u){var h=Y.p;Y.p=h!==0&&8>h?h:8;var y=P.T,A={};P.T=A,Mf(e,!1,n,a);try{var F=u(),nt=P.S;if(nt!==null&&nt(A,F),F!==null&&typeof F=="object"&&typeof F.then=="function"){var dt=fy(F,o);Ao(e,n,dt,ai(e))}else Ao(e,n,o,ai(e))}catch(xt){Ao(e,n,{then:function(){},status:"rejected",reason:xt},ai())}finally{Y.p=h,y!==null&&A.types!==null&&(y.types=A.types),P.T=y}}function _y(){}function yf(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=Wm(e).queue;jm(e,u,n,Z,a===null?_y:function(){return Ym(e),a(o)})}function Wm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:Z,baseState:Z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ji,lastRenderedState:Z},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ji,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Ym(e){var n=Wm(e);n.next===null&&(n=e.alternate.memoizedState),Ao(e,n.next.queue,{},ai())}function Sf(){return Rn(ko)}function qm(){return rn().memoizedState}function Zm(){return rn().memoizedState}function vy(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=ai();e=Ta(a);var o=Aa(n,e,a);o!==null&&(Yn(o,n,a),So(o,n,a)),n={cache:Zu()},e.payload=n;return}n=n.return}}function xy(e,n,a){var o=ai();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Fl(e)?Qm(n,a):(a=Iu(e,n,a,o),a!==null&&(Yn(a,e,o),Jm(a,n,o)))}function Km(e,n,a){var o=ai();Ao(e,n,a,o)}function Ao(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Fl(e))Qm(n,u);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var y=n.lastRenderedState,A=h(y,a);if(u.hasEagerState=!0,u.eagerState=A,Jn(A,y))return xl(e,n,u,0),We===null&&vl(),!1}catch{}finally{}if(a=Iu(e,n,u,o),a!==null)return Yn(a,e,o),Jm(a,n,o),!0}return!1}function Mf(e,n,a,o){if(o={lane:2,revertLane:th(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Fl(e)){if(n)throw Error(s(479))}else n=Iu(e,a,o,2),n!==null&&Yn(n,e,2)}function Fl(e){var n=e.alternate;return e===ce||n!==null&&n===ce}function Qm(e,n){ir=Ll=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Jm(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,no(e,a)}}var Ro={readContext:Rn,use:zl,useCallback:$e,useContext:$e,useEffect:$e,useImperativeHandle:$e,useLayoutEffect:$e,useInsertionEffect:$e,useMemo:$e,useReducer:$e,useRef:$e,useState:$e,useDebugValue:$e,useDeferredValue:$e,useTransition:$e,useSyncExternalStore:$e,useId:$e,useHostTransitionStatus:$e,useFormState:$e,useActionState:$e,useOptimistic:$e,useMemoCache:$e,useCacheRefresh:$e};Ro.useEffectEvent=$e;var $m={readContext:Rn,use:zl,useCallback:function(e,n){return Bn().memoizedState=[e,n===void 0?null:n],e},useContext:Rn,useEffect:Pm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Bl(4194308,4,Hm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Bl(4194308,4,e,n)},useInsertionEffect:function(e,n){Bl(4,2,e,n)},useMemo:function(e,n){var a=Bn();n=n===void 0?null:n;var o=e();if(vs){Pt(!0);try{e()}finally{Pt(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Bn();if(a!==void 0){var u=a(n);if(vs){Pt(!0);try{a(n)}finally{Pt(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=xy.bind(null,ce,e),[o.memoizedState,e]},useRef:function(e){var n=Bn();return e={current:e},n.memoizedState=e},useState:function(e){e=mf(e);var n=e.queue,a=Km.bind(null,ce,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:vf,useDeferredValue:function(e,n){var a=Bn();return xf(a,e,n)},useTransition:function(){var e=mf(!1);return e=jm.bind(null,ce,e.queue,!0,!1),Bn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=ce,u=Bn();if(be){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),We===null)throw Error(s(349));(Me&127)!==0||ym(o,n,a)}u.memoizedState=a;var h={value:a,getSnapshot:n};return u.queue=h,Pm(Mm.bind(null,o,h,e),[e]),o.flags|=2048,sr(9,{destroy:void 0},Sm.bind(null,o,h,a,n),null),a},useId:function(){var e=Bn(),n=We.identifierPrefix;if(be){var a=zi,o=Oi;a=(o&~(1<<32-ne(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Nl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=hy++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Sf,useFormState:Um,useActionState:Um,useOptimistic:function(e){var n=Bn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Mf.bind(null,ce,!0,a),a.dispatch=n,[e,n]},useMemoCache:hf,useCacheRefresh:function(){return Bn().memoizedState=vy.bind(null,ce)},useEffectEvent:function(e){var n=Bn(),a={impl:e};return n.memoizedState=a,function(){if((Ne&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Ef={readContext:Rn,use:zl,useCallback:Vm,useContext:Rn,useEffect:_f,useImperativeHandle:Gm,useInsertionEffect:Im,useLayoutEffect:Fm,useMemo:km,useReducer:Pl,useRef:zm,useState:function(){return Pl(Ji)},useDebugValue:vf,useDeferredValue:function(e,n){var a=rn();return Xm(a,He.memoizedState,e,n)},useTransition:function(){var e=Pl(Ji)[0],n=rn().memoizedState;return[typeof e=="boolean"?e:To(e),n]},useSyncExternalStore:xm,useId:qm,useHostTransitionStatus:Sf,useFormState:Lm,useActionState:Lm,useOptimistic:function(e,n){var a=rn();return Tm(a,He,e,n)},useMemoCache:hf,useCacheRefresh:Zm};Ef.useEffectEvent=Bm;var tg={readContext:Rn,use:zl,useCallback:Vm,useContext:Rn,useEffect:_f,useImperativeHandle:Gm,useInsertionEffect:Im,useLayoutEffect:Fm,useMemo:km,useReducer:pf,useRef:zm,useState:function(){return pf(Ji)},useDebugValue:vf,useDeferredValue:function(e,n){var a=rn();return He===null?xf(a,e,n):Xm(a,He.memoizedState,e,n)},useTransition:function(){var e=pf(Ji)[0],n=rn().memoizedState;return[typeof e=="boolean"?e:To(e),n]},useSyncExternalStore:xm,useId:qm,useHostTransitionStatus:Sf,useFormState:Om,useActionState:Om,useOptimistic:function(e,n){var a=rn();return He!==null?Tm(a,He,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:hf,useCacheRefresh:Zm};tg.useEffectEvent=Bm;function bf(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:_({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Tf={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=ai(),u=Ta(o);u.payload=n,a!=null&&(u.callback=a),n=Aa(e,u,o),n!==null&&(Yn(n,e,o),So(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=ai(),u=Ta(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Aa(e,u,o),n!==null&&(Yn(n,e,o),So(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=ai(),o=Ta(a);o.tag=2,n!=null&&(o.callback=n),n=Aa(e,o,a),n!==null&&(Yn(n,e,a),So(n,e,a))}};function eg(e,n,a,o,u,h,y){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,h,y):n.prototype&&n.prototype.isPureReactComponent?!ho(a,o)||!ho(u,h):!0}function ng(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&Tf.enqueueReplaceState(n,n.state,null)}function xs(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=_({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function ig(e){_l(e)}function ag(e){console.error(e)}function sg(e){_l(e)}function Hl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function rg(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Af(e,n,a){return a=Ta(a),a.tag=3,a.payload={element:null},a.callback=function(){Hl(e,n)},a}function og(e){return e=Ta(e),e.tag=3,e}function lg(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var h=o.value;e.payload=function(){return u(h)},e.callback=function(){rg(n,a,o)}}var y=a.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(e.callback=function(){rg(n,a,o),typeof u!="function"&&(La===null?La=new Set([this]):La.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function yy(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Qs(n,a,u,!0),a=ti.current,a!==null){switch(a.tag){case 31:case 13:return pi===null?Jl():a.alternate===null&&tn===0&&(tn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Rl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Qf(e,o,u)),!1;case 22:return a.flags|=65536,o===Rl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Qf(e,o,u)),!1}throw Error(s(435,a.tag))}return Qf(e,o,u),Jl(),!1}if(be)return n=ti.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Xu&&(e=Error(s(422),{cause:o}),go(ui(e,a)))):(o!==Xu&&(n=Error(s(423),{cause:o}),go(ui(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=ui(o,a),u=Af(e.stateNode,o,u),ef(e,u),tn!==4&&(tn=2)),!1;var h=Error(s(520),{cause:o});if(h=ui(h,a),zo===null?zo=[h]:zo.push(h),tn!==4&&(tn=2),n===null)return!0;o=ui(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=Af(a.stateNode,o,e),ef(a,e),!1;case 1:if(n=a.type,h=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(La===null||!La.has(h))))return a.flags|=65536,u&=-u,a.lanes|=u,u=og(u),lg(u,e,a,o),ef(a,u),!1}a=a.return}while(a!==null);return!1}var Rf=Error(s(461)),un=!1;function Cn(e,n,a,o){n.child=e===null?hm(n,null,a,o):_s(n,e.child,a,o)}function cg(e,n,a,o,u){a=a.render;var h=n.ref;if("ref"in o){var y={};for(var A in o)A!=="ref"&&(y[A]=o[A])}else y=o;return ds(n),o=lf(e,n,a,y,h,u),A=cf(),e!==null&&!un?(uf(e,n,u),$i(e,n,u)):(be&&A&&Vu(n),n.flags|=1,Cn(e,n,o,u),n.child)}function ug(e,n,a,o,u){if(e===null){var h=a.type;return typeof h=="function"&&!Fu(h)&&h.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=h,fg(e,n,h,o,u)):(e=Sl(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(h=e.child,!zf(e,u)){var y=h.memoizedProps;if(a=a.compare,a=a!==null?a:ho,a(y,o)&&e.ref===n.ref)return $i(e,n,u)}return n.flags|=1,e=Yi(h,o),e.ref=n.ref,e.return=n,n.child=e}function fg(e,n,a,o,u){if(e!==null){var h=e.memoizedProps;if(ho(h,o)&&e.ref===n.ref)if(un=!1,n.pendingProps=o=h,zf(e,u))(e.flags&131072)!==0&&(un=!0);else return n.lanes=e.lanes,$i(e,n,u)}return Cf(e,n,a,o,u)}function hg(e,n,a,o){var u=o.children,h=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(h=h!==null?h.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~h}else o=0,n.child=null;return dg(e,n,h,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Tl(n,h!==null?h.cachePool:null),h!==null?mm(n,h):af(),gm(n);else return o=n.lanes=536870912,dg(e,n,h!==null?h.baseLanes|a:a,a,o)}else h!==null?(Tl(n,h.cachePool),mm(n,h),Ca(),n.memoizedState=null):(e!==null&&Tl(n,null),af(),Ca());return Cn(e,n,u,a),n.child}function Co(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function dg(e,n,a,o,u){var h=Qu();return h=h===null?null:{parent:ln._currentValue,pool:h},n.memoizedState={baseLanes:a,cachePool:h},e!==null&&Tl(n,null),af(),gm(n),e!==null&&Qs(e,n,o,!0),n.childLanes=u,null}function Gl(e,n){return n=kl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function pg(e,n,a){return _s(n,e.child,null,a),e=Gl(n,n.pendingProps),e.flags|=2,ei(n),n.memoizedState=null,e}function Sy(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(be){if(o.mode==="hidden")return e=Gl(n,o),n.lanes=536870912,Co(null,e);if(rf(n),(e=qe)?(e=A0(e,di),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ya!==null?{id:Oi,overflow:zi}:null,retryLane:536870912,hydrationErrors:null},a=Qp(e),a.return=n,n.child=a,An=n,qe=null)):e=null,e===null)throw Ma(n);return n.lanes=536870912,null}return Gl(n,o)}var h=e.memoizedState;if(h!==null){var y=h.dehydrated;if(rf(n),u)if(n.flags&256)n.flags&=-257,n=pg(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(un||Qs(e,n,a,!1),u=(a&e.childLanes)!==0,un||u){if(o=We,o!==null&&(y=Li(o,a),y!==0&&y!==h.retryLane))throw h.retryLane=y,cs(e,y),Yn(o,e,y),Rf;Jl(),n=pg(e,n,a)}else e=h.treeContext,qe=mi(y.nextSibling),An=n,be=!0,Sa=null,di=!1,e!==null&&tm(n,e),n=Gl(n,o),n.flags|=4096;return n}return e=Yi(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Vl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Cf(e,n,a,o,u){return ds(n),a=lf(e,n,a,o,void 0,u),o=cf(),e!==null&&!un?(uf(e,n,u),$i(e,n,u)):(be&&o&&Vu(n),n.flags|=1,Cn(e,n,a,u),n.child)}function mg(e,n,a,o,u,h){return ds(n),n.updateQueue=null,a=vm(n,o,a,u),_m(e),o=cf(),e!==null&&!un?(uf(e,n,h),$i(e,n,h)):(be&&o&&Vu(n),n.flags|=1,Cn(e,n,a,h),n.child)}function gg(e,n,a,o,u){if(ds(n),n.stateNode===null){var h=Ys,y=a.contextType;typeof y=="object"&&y!==null&&(h=Rn(y)),h=new a(o,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=Tf,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=o,h.state=n.memoizedState,h.refs={},$u(n),y=a.contextType,h.context=typeof y=="object"&&y!==null?Rn(y):Ys,h.state=n.memoizedState,y=a.getDerivedStateFromProps,typeof y=="function"&&(bf(n,a,y,o),h.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(y=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),y!==h.state&&Tf.enqueueReplaceState(h,h.state,null),Eo(n,o,h,u),Mo(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){h=n.stateNode;var A=n.memoizedProps,F=xs(a,A);h.props=F;var nt=h.context,dt=a.contextType;y=Ys,typeof dt=="object"&&dt!==null&&(y=Rn(dt));var xt=a.getDerivedStateFromProps;dt=typeof xt=="function"||typeof h.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,dt||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(A||nt!==y)&&ng(n,h,o,y),ba=!1;var it=n.memoizedState;h.state=it,Eo(n,o,h,u),Mo(),nt=n.memoizedState,A||it!==nt||ba?(typeof xt=="function"&&(bf(n,a,xt,o),nt=n.memoizedState),(F=ba||eg(n,a,F,o,it,nt,y))?(dt||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=nt),h.props=o,h.state=nt,h.context=y,o=F):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{h=n.stateNode,tf(e,n),y=n.memoizedProps,dt=xs(a,y),h.props=dt,xt=n.pendingProps,it=h.context,nt=a.contextType,F=Ys,typeof nt=="object"&&nt!==null&&(F=Rn(nt)),A=a.getDerivedStateFromProps,(nt=typeof A=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(y!==xt||it!==F)&&ng(n,h,o,F),ba=!1,it=n.memoizedState,h.state=it,Eo(n,o,h,u),Mo();var lt=n.memoizedState;y!==xt||it!==lt||ba||e!==null&&e.dependencies!==null&&El(e.dependencies)?(typeof A=="function"&&(bf(n,a,A,o),lt=n.memoizedState),(dt=ba||eg(n,a,dt,o,it,lt,F)||e!==null&&e.dependencies!==null&&El(e.dependencies))?(nt||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,lt,F),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,lt,F)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||y===e.memoizedProps&&it===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&it===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=lt),h.props=o,h.state=lt,h.context=F,o=dt):(typeof h.componentDidUpdate!="function"||y===e.memoizedProps&&it===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&it===e.memoizedState||(n.flags|=1024),o=!1)}return h=o,Vl(e,n),o=(n.flags&128)!==0,h||o?(h=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,e!==null&&o?(n.child=_s(n,e.child,null,u),n.child=_s(n,null,a,u)):Cn(e,n,a,u),n.memoizedState=h.state,e=n.child):e=$i(e,n,u),e}function _g(e,n,a,o){return fs(),n.flags|=256,Cn(e,n,a,o),n.child}var wf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Df(e){return{baseLanes:e,cachePool:rm()}}function Uf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ii),e}function vg(e,n,a){var o=n.pendingProps,u=!1,h=(n.flags&128)!==0,y;if((y=h)||(y=e!==null&&e.memoizedState===null?!1:(sn.current&2)!==0),y&&(u=!0,n.flags&=-129),y=(n.flags&32)!==0,n.flags&=-33,e===null){if(be){if(u?Ra(n):Ca(),(e=qe)?(e=A0(e,di),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ya!==null?{id:Oi,overflow:zi}:null,retryLane:536870912,hydrationErrors:null},a=Qp(e),a.return=n,n.child=a,An=n,qe=null)):e=null,e===null)throw Ma(n);return dh(e)?n.lanes=32:n.lanes=536870912,null}var A=o.children;return o=o.fallback,u?(Ca(),u=n.mode,A=kl({mode:"hidden",children:A},u),o=us(o,u,a,null),A.return=n,o.return=n,A.sibling=o,n.child=A,o=n.child,o.memoizedState=Df(a),o.childLanes=Uf(e,y,a),n.memoizedState=wf,Co(null,o)):(Ra(n),Lf(n,A))}var F=e.memoizedState;if(F!==null&&(A=F.dehydrated,A!==null)){if(h)n.flags&256?(Ra(n),n.flags&=-257,n=Nf(e,n,a)):n.memoizedState!==null?(Ca(),n.child=e.child,n.flags|=128,n=null):(Ca(),A=o.fallback,u=n.mode,o=kl({mode:"visible",children:o.children},u),A=us(A,u,a,null),A.flags|=2,o.return=n,A.return=n,o.sibling=A,n.child=o,_s(n,e.child,null,a),o=n.child,o.memoizedState=Df(a),o.childLanes=Uf(e,y,a),n.memoizedState=wf,n=Co(null,o));else if(Ra(n),dh(A)){if(y=A.nextSibling&&A.nextSibling.dataset,y)var nt=y.dgst;y=nt,o=Error(s(419)),o.stack="",o.digest=y,go({value:o,source:null,stack:null}),n=Nf(e,n,a)}else if(un||Qs(e,n,a,!1),y=(a&e.childLanes)!==0,un||y){if(y=We,y!==null&&(o=Li(y,a),o!==0&&o!==F.retryLane))throw F.retryLane=o,cs(e,o),Yn(y,e,o),Rf;hh(A)||Jl(),n=Nf(e,n,a)}else hh(A)?(n.flags|=192,n.child=e.child,n=null):(e=F.treeContext,qe=mi(A.nextSibling),An=n,be=!0,Sa=null,di=!1,e!==null&&tm(n,e),n=Lf(n,o.children),n.flags|=4096);return n}return u?(Ca(),A=o.fallback,u=n.mode,F=e.child,nt=F.sibling,o=Yi(F,{mode:"hidden",children:o.children}),o.subtreeFlags=F.subtreeFlags&65011712,nt!==null?A=Yi(nt,A):(A=us(A,u,a,null),A.flags|=2),A.return=n,o.return=n,o.sibling=A,n.child=o,Co(null,o),o=n.child,A=e.child.memoizedState,A===null?A=Df(a):(u=A.cachePool,u!==null?(F=ln._currentValue,u=u.parent!==F?{parent:F,pool:F}:u):u=rm(),A={baseLanes:A.baseLanes|a,cachePool:u}),o.memoizedState=A,o.childLanes=Uf(e,y,a),n.memoizedState=wf,Co(e.child,o)):(Ra(n),a=e.child,e=a.sibling,a=Yi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(y=n.deletions,y===null?(n.deletions=[e],n.flags|=16):y.push(e)),n.child=a,n.memoizedState=null,a)}function Lf(e,n){return n=kl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function kl(e,n){return e=$n(22,e,null,n),e.lanes=0,e}function Nf(e,n,a){return _s(n,e.child,null,a),e=Lf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function xg(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Yu(e.return,n,a)}function Of(e,n,a,o,u,h){var y=e.memoizedState;y===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:h}:(y.isBackwards=n,y.rendering=null,y.renderingStartTime=0,y.last=o,y.tail=a,y.tailMode=u,y.treeForkCount=h)}function yg(e,n,a){var o=n.pendingProps,u=o.revealOrder,h=o.tail;o=o.children;var y=sn.current,A=(y&2)!==0;if(A?(y=y&1|2,n.flags|=128):y&=1,bt(sn,y),Cn(e,n,o,a),o=be?mo:0,!A&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&xg(e,a,n);else if(e.tag===19)xg(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Ul(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Of(n,!1,u,a,h,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Ul(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Of(n,!0,a,null,h,o);break;case"together":Of(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function $i(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ua|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Qs(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=Yi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Yi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function zf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&El(e)))}function My(e,n,a){switch(n.tag){case 3:It(n,n.stateNode.containerInfo),Ea(n,ln,e.memoizedState.cache),fs();break;case 27:case 5:Rt(n);break;case 4:It(n,n.stateNode.containerInfo);break;case 10:Ea(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,rf(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ra(n),n.flags|=128,null):(a&n.child.childLanes)!==0?vg(e,n,a):(Ra(n),e=$i(e,n,a),e!==null?e.sibling:null);Ra(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Qs(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return yg(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),bt(sn,sn.current),o)break;return null;case 22:return n.lanes=0,hg(e,n,a,n.pendingProps);case 24:Ea(n,ln,e.memoizedState.cache)}return $i(e,n,a)}function Sg(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)un=!0;else{if(!zf(e,a)&&(n.flags&128)===0)return un=!1,My(e,n,a);un=(e.flags&131072)!==0}else un=!1,be&&(n.flags&1048576)!==0&&$p(n,mo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=ms(n.elementType),n.type=e,typeof e=="function")Fu(e)?(o=xs(e,o),n.tag=1,n=gg(null,n,e,o,a)):(n.tag=0,n=Cf(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===U){n.tag=11,n=cg(null,n,e,o,a);break t}else if(u===B){n.tag=14,n=ug(null,n,e,o,a);break t}}throw n=_t(e)||e,Error(s(306,n,""))}}return n;case 0:return Cf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=xs(o,n.pendingProps),gg(e,n,o,u,a);case 3:t:{if(It(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var h=n.memoizedState;u=h.element,tf(e,n),Eo(n,o,null,a);var y=n.memoizedState;if(o=y.cache,Ea(n,ln,o),o!==h.cache&&qu(n,[ln],a,!0),Mo(),o=y.element,h.isDehydrated)if(h={element:o,isDehydrated:!1,cache:y.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=_g(e,n,o,a);break t}else if(o!==u){u=ui(Error(s(424)),n),go(u),n=_g(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(qe=mi(e.firstChild),An=n,be=!0,Sa=null,di=!0,a=hm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(fs(),o===u){n=$i(e,n,a);break t}Cn(e,n,o,a)}n=n.child}return n;case 26:return Vl(e,n),e===null?(a=L0(n.type,null,n.pendingProps,null))?n.memoizedState=a:be||(a=n.type,e=n.pendingProps,o=sc(Tt.current).createElement(a),o[Je]=n,o[Tn]=e,wn(o,a,e),St(o),n.stateNode=o):n.memoizedState=L0(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Rt(n),e===null&&be&&(o=n.stateNode=w0(n.type,n.pendingProps,Tt.current),An=n,di=!0,u=qe,Pa(n.type)?(ph=u,qe=mi(o.firstChild)):qe=u),Cn(e,n,n.pendingProps.children,a),Vl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&be&&((u=o=qe)&&(o=Jy(o,n.type,n.pendingProps,di),o!==null?(n.stateNode=o,An=n,qe=mi(o.firstChild),di=!1,u=!0):u=!1),u||Ma(n)),Rt(n),u=n.type,h=n.pendingProps,y=e!==null?e.memoizedProps:null,o=h.children,ch(u,h)?o=null:y!==null&&ch(u,y)&&(n.flags|=32),n.memoizedState!==null&&(u=lf(e,n,dy,null,null,a),ko._currentValue=u),Vl(e,n),Cn(e,n,o,a),n.child;case 6:return e===null&&be&&((e=a=qe)&&(a=$y(a,n.pendingProps,di),a!==null?(n.stateNode=a,An=n,qe=null,e=!0):e=!1),e||Ma(n)),null;case 13:return vg(e,n,a);case 4:return It(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=_s(n,null,o,a):Cn(e,n,o,a),n.child;case 11:return cg(e,n,n.type,n.pendingProps,a);case 7:return Cn(e,n,n.pendingProps,a),n.child;case 8:return Cn(e,n,n.pendingProps.children,a),n.child;case 12:return Cn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Ea(n,n.type,o.value),Cn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,ds(n),u=Rn(u),o=o(u),n.flags|=1,Cn(e,n,o,a),n.child;case 14:return ug(e,n,n.type,n.pendingProps,a);case 15:return fg(e,n,n.type,n.pendingProps,a);case 19:return yg(e,n,a);case 31:return Sy(e,n,a);case 22:return hg(e,n,a,n.pendingProps);case 24:return ds(n),o=Rn(ln),e===null?(u=Qu(),u===null&&(u=We,h=Zu(),u.pooledCache=h,h.refCount++,h!==null&&(u.pooledCacheLanes|=a),u=h),n.memoizedState={parent:o,cache:u},$u(n),Ea(n,ln,u)):((e.lanes&a)!==0&&(tf(e,n),Eo(n,null,null,a),Mo()),u=e.memoizedState,h=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ea(n,ln,o)):(o=h.cache,Ea(n,ln,o),o!==u.cache&&qu(n,[ln],a,!0))),Cn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ta(e){e.flags|=4}function Pf(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(qg())e.flags|=8192;else throw gs=Rl,Ju}else e.flags&=-16777217}function Mg(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!B0(n))if(qg())e.flags|=8192;else throw gs=Rl,Ju}function Xl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?dn():536870912,e.lanes|=n,cr|=n)}function wo(e,n){if(!be)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ze(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function Ey(e,n,a){var o=n.pendingProps;switch(ku(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(n),null;case 1:return Ze(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Ki(ln),ot(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Ks(n)?ta(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,ju())),Ze(n),null;case 26:var u=n.type,h=n.memoizedState;return e===null?(ta(n),h!==null?(Ze(n),Mg(n,h)):(Ze(n),Pf(n,u,null,o,a))):h?h!==e.memoizedState?(ta(n),Ze(n),Mg(n,h)):(Ze(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&ta(n),Ze(n),Pf(n,u,e,o,a)),null;case 27:if($t(n),a=Tt.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ta(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Ze(n),null}e=q.current,Ks(n)?em(n):(e=w0(u,o,a),n.stateNode=e,ta(n))}return Ze(n),null;case 5:if($t(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ta(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Ze(n),null}if(h=q.current,Ks(n))em(n);else{var y=sc(Tt.current);switch(h){case 1:h=y.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:h=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":h=y.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":h=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":h=y.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof o.is=="string"?y.createElement("select",{is:o.is}):y.createElement("select"),o.multiple?h.multiple=!0:o.size&&(h.size=o.size);break;default:h=typeof o.is=="string"?y.createElement(u,{is:o.is}):y.createElement(u)}}h[Je]=n,h[Tn]=o;t:for(y=n.child;y!==null;){if(y.tag===5||y.tag===6)h.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===n)break t;for(;y.sibling===null;){if(y.return===null||y.return===n)break t;y=y.return}y.sibling.return=y.return,y=y.sibling}n.stateNode=h;t:switch(wn(h,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&ta(n)}}return Ze(n),Pf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&ta(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=Tt.current,Ks(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=An,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[Je]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||v0(e.nodeValue,a)),e||Ma(n,!0)}else e=sc(e).createTextNode(o),e[Je]=n,n.stateNode=e}return Ze(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=Ks(n),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[Je]=n}else fs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ze(n),e=!1}else a=ju(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(ei(n),n):(ei(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Ze(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Ks(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[Je]=n}else fs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ze(n),u=!1}else u=ju(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ei(n),n):(ei(n),null)}return ei(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),h=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Xl(n,n.updateQueue),Ze(n),null);case 4:return ot(),e===null&&ah(n.stateNode.containerInfo),Ze(n),null;case 10:return Ki(n.type),Ze(n),null;case 19:if($(sn),o=n.memoizedState,o===null)return Ze(n),null;if(u=(n.flags&128)!==0,h=o.rendering,h===null)if(u)wo(o,!1);else{if(tn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(h=Ul(e),h!==null){for(n.flags|=128,wo(o,!1),e=h.updateQueue,n.updateQueue=e,Xl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Kp(a,e),a=a.sibling;return bt(sn,sn.current&1|2),be&&qi(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&ft()>Zl&&(n.flags|=128,u=!0,wo(o,!1),n.lanes=4194304)}else{if(!u)if(e=Ul(h),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Xl(n,e),wo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!h.alternate&&!be)return Ze(n),null}else 2*ft()-o.renderingStartTime>Zl&&a!==536870912&&(n.flags|=128,u=!0,wo(o,!1),n.lanes=4194304);o.isBackwards?(h.sibling=n.child,n.child=h):(e=o.last,e!==null?e.sibling=h:n.child=h,o.last=h)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=ft(),e.sibling=null,a=sn.current,bt(sn,u?a&1|2:a&1),be&&qi(n,o.treeForkCount),e):(Ze(n),null);case 22:case 23:return ei(n),sf(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Ze(n),n.subtreeFlags&6&&(n.flags|=8192)):Ze(n),a=n.updateQueue,a!==null&&Xl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&$(ps),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ki(ln),Ze(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function by(e,n){switch(ku(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Ki(ln),ot(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return $t(n),null;case 31:if(n.memoizedState!==null){if(ei(n),n.alternate===null)throw Error(s(340));fs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(ei(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));fs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return $(sn),null;case 4:return ot(),null;case 10:return Ki(n.type),null;case 22:case 23:return ei(n),sf(),e!==null&&$(ps),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Ki(ln),null;case 25:return null;default:return null}}function Eg(e,n){switch(ku(n),n.tag){case 3:Ki(ln),ot();break;case 26:case 27:case 5:$t(n);break;case 4:ot();break;case 31:n.memoizedState!==null&&ei(n);break;case 13:ei(n);break;case 19:$(sn);break;case 10:Ki(n.type);break;case 22:case 23:ei(n),sf(),e!==null&&$(ps);break;case 24:Ki(ln)}}function Do(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var h=a.create,y=a.inst;o=h(),y.destroy=o}a=a.next}while(a!==u)}}catch(A){Pe(n,n.return,A)}}function wa(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var h=u.next;o=h;do{if((o.tag&e)===e){var y=o.inst,A=y.destroy;if(A!==void 0){y.destroy=void 0,u=n;var F=a,nt=A;try{nt()}catch(dt){Pe(u,F,dt)}}}o=o.next}while(o!==h)}}catch(dt){Pe(n,n.return,dt)}}function bg(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{pm(n,a)}catch(o){Pe(e,e.return,o)}}}function Tg(e,n,a){a.props=xs(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Pe(e,n,o)}}function Uo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Pe(e,n,u)}}function Pi(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Pe(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Pe(e,n,u)}else a.current=null}function Ag(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Pe(e,e.return,u)}}function Bf(e,n,a){try{var o=e.stateNode;Wy(o,e.type,a,n),o[Tn]=n}catch(u){Pe(e,e.return,u)}}function Rg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Pa(e.type)||e.tag===4}function If(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Rg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Pa(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ff(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ji));else if(o!==4&&(o===27&&Pa(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Ff(e,n,a),e=e.sibling;e!==null;)Ff(e,n,a),e=e.sibling}function jl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Pa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(jl(e,n,a),e=e.sibling;e!==null;)jl(e,n,a),e=e.sibling}function Cg(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);wn(n,o,a),n[Je]=e,n[Tn]=a}catch(h){Pe(e,e.return,h)}}var ea=!1,fn=!1,Hf=!1,wg=typeof WeakSet=="function"?WeakSet:Set,Sn=null;function Ty(e,n){if(e=e.containerInfo,oh=hc,e=Gp(e),Lu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,h=o.focusNode;o=o.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break t}var y=0,A=-1,F=-1,nt=0,dt=0,xt=e,it=null;e:for(;;){for(var lt;xt!==a||u!==0&&xt.nodeType!==3||(A=y+u),xt!==h||o!==0&&xt.nodeType!==3||(F=y+o),xt.nodeType===3&&(y+=xt.nodeValue.length),(lt=xt.firstChild)!==null;)it=xt,xt=lt;for(;;){if(xt===e)break e;if(it===a&&++nt===u&&(A=y),it===h&&++dt===o&&(F=y),(lt=xt.nextSibling)!==null)break;xt=it,it=xt.parentNode}xt=lt}a=A===-1||F===-1?null:{start:A,end:F}}else a=null}a=a||{start:0,end:0}}else a=null;for(lh={focusedElem:e,selectionRange:a},hc=!1,Sn=n;Sn!==null;)if(n=Sn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Sn=e;else for(;Sn!==null;){switch(n=Sn,h=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&h!==null){e=void 0,a=n,u=h.memoizedProps,h=h.memoizedState,o=a.stateNode;try{var Vt=xs(a.type,u);e=o.getSnapshotBeforeUpdate(Vt,h),o.__reactInternalSnapshotBeforeUpdate=e}catch(ee){Pe(a,a.return,ee)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)fh(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":fh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,Sn=e;break}Sn=n.return}}function Dg(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ia(e,a),o&4&&Do(5,a);break;case 1:if(ia(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(y){Pe(a,a.return,y)}else{var u=xs(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(y){Pe(a,a.return,y)}}o&64&&bg(a),o&512&&Uo(a,a.return);break;case 3:if(ia(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{pm(e,n)}catch(y){Pe(a,a.return,y)}}break;case 27:n===null&&o&4&&Cg(a);case 26:case 5:ia(e,a),n===null&&o&4&&Ag(a),o&512&&Uo(a,a.return);break;case 12:ia(e,a);break;case 31:ia(e,a),o&4&&Ng(e,a);break;case 13:ia(e,a),o&4&&Og(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Oy.bind(null,a),tS(e,a))));break;case 22:if(o=a.memoizedState!==null||ea,!o){n=n!==null&&n.memoizedState!==null||fn,u=ea;var h=fn;ea=o,(fn=n)&&!h?aa(e,a,(a.subtreeFlags&8772)!==0):ia(e,a),ea=u,fn=h}break;case 30:break;default:ia(e,a)}}function Ug(e){var n=e.alternate;n!==null&&(e.alternate=null,Ug(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&R(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Qe=null,kn=!1;function na(e,n,a){for(a=a.child;a!==null;)Lg(e,n,a),a=a.sibling}function Lg(e,n,a){if(Yt&&typeof Yt.onCommitFiberUnmount=="function")try{Yt.onCommitFiberUnmount(qt,a)}catch{}switch(a.tag){case 26:fn||Pi(a,n),na(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:fn||Pi(a,n);var o=Qe,u=kn;Pa(a.type)&&(Qe=a.stateNode,kn=!1),na(e,n,a),Ho(a.stateNode),Qe=o,kn=u;break;case 5:fn||Pi(a,n);case 6:if(o=Qe,u=kn,Qe=null,na(e,n,a),Qe=o,kn=u,Qe!==null)if(kn)try{(Qe.nodeType===9?Qe.body:Qe.nodeName==="HTML"?Qe.ownerDocument.body:Qe).removeChild(a.stateNode)}catch(h){Pe(a,n,h)}else try{Qe.removeChild(a.stateNode)}catch(h){Pe(a,n,h)}break;case 18:Qe!==null&&(kn?(e=Qe,b0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),_r(e)):b0(Qe,a.stateNode));break;case 4:o=Qe,u=kn,Qe=a.stateNode.containerInfo,kn=!0,na(e,n,a),Qe=o,kn=u;break;case 0:case 11:case 14:case 15:wa(2,a,n),fn||wa(4,a,n),na(e,n,a);break;case 1:fn||(Pi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Tg(a,n,o)),na(e,n,a);break;case 21:na(e,n,a);break;case 22:fn=(o=fn)||a.memoizedState!==null,na(e,n,a),fn=o;break;default:na(e,n,a)}}function Ng(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{_r(e)}catch(a){Pe(n,n.return,a)}}}function Og(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{_r(e)}catch(a){Pe(n,n.return,a)}}function Ay(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new wg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new wg),n;default:throw Error(s(435,e.tag))}}function Wl(e,n){var a=Ay(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=zy.bind(null,e,o);o.then(u,u)}})}function Xn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],h=e,y=n,A=y;t:for(;A!==null;){switch(A.tag){case 27:if(Pa(A.type)){Qe=A.stateNode,kn=!1;break t}break;case 5:Qe=A.stateNode,kn=!1;break t;case 3:case 4:Qe=A.stateNode.containerInfo,kn=!0;break t}A=A.return}if(Qe===null)throw Error(s(160));Lg(h,y,u),Qe=null,kn=!1,h=u.alternate,h!==null&&(h.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)zg(n,e),n=n.sibling}var bi=null;function zg(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Xn(n,e),jn(e),o&4&&(wa(3,e,e.return),Do(3,e),wa(5,e,e.return));break;case 1:Xn(n,e),jn(e),o&512&&(fn||a===null||Pi(a,a.return)),o&64&&ea&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=bi;if(Xn(n,e),jn(e),o&512&&(fn||a===null||Pi(a,a.return)),o&4){var h=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":h=u.getElementsByTagName("title")[0],(!h||h[as]||h[Je]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=u.createElement(o),u.head.insertBefore(h,u.querySelector("head > title"))),wn(h,o,a),h[Je]=e,St(h),o=h;break t;case"link":var y=z0("link","href",u).get(o+(a.href||""));if(y){for(var A=0;A<y.length;A++)if(h=y[A],h.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&h.getAttribute("rel")===(a.rel==null?null:a.rel)&&h.getAttribute("title")===(a.title==null?null:a.title)&&h.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){y.splice(A,1);break e}}h=u.createElement(o),wn(h,o,a),u.head.appendChild(h);break;case"meta":if(y=z0("meta","content",u).get(o+(a.content||""))){for(A=0;A<y.length;A++)if(h=y[A],h.getAttribute("content")===(a.content==null?null:""+a.content)&&h.getAttribute("name")===(a.name==null?null:a.name)&&h.getAttribute("property")===(a.property==null?null:a.property)&&h.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&h.getAttribute("charset")===(a.charSet==null?null:a.charSet)){y.splice(A,1);break e}}h=u.createElement(o),wn(h,o,a),u.head.appendChild(h);break;default:throw Error(s(468,o))}h[Je]=e,St(h),o=h}e.stateNode=o}else P0(u,e.type,e.stateNode);else e.stateNode=O0(u,o,e.memoizedProps);else h!==o?(h===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):h.count--,o===null?P0(u,e.type,e.stateNode):O0(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Bf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Xn(n,e),jn(e),o&512&&(fn||a===null||Pi(a,a.return)),a!==null&&o&4&&Bf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Xn(n,e),jn(e),o&512&&(fn||a===null||Pi(a,a.return)),e.flags&32){u=e.stateNode;try{Hs(u,"")}catch(Vt){Pe(e,e.return,Vt)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,Bf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(Hf=!0);break;case 6:if(Xn(n,e),jn(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(Vt){Pe(e,e.return,Vt)}}break;case 3:if(lc=null,u=bi,bi=rc(n.containerInfo),Xn(n,e),bi=u,jn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{_r(n.containerInfo)}catch(Vt){Pe(e,e.return,Vt)}Hf&&(Hf=!1,Pg(e));break;case 4:o=bi,bi=rc(e.stateNode.containerInfo),Xn(n,e),jn(e),bi=o;break;case 12:Xn(n,e),jn(e);break;case 31:Xn(n,e),jn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Wl(e,o)));break;case 13:Xn(n,e),jn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(ql=ft()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Wl(e,o)));break;case 22:u=e.memoizedState!==null;var F=a!==null&&a.memoizedState!==null,nt=ea,dt=fn;if(ea=nt||u,fn=dt||F,Xn(n,e),fn=dt,ea=nt,jn(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||F||ea||fn||ys(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){F=a=n;try{if(h=F.stateNode,u)y=h.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{A=F.stateNode;var xt=F.memoizedProps.style,it=xt!=null&&xt.hasOwnProperty("display")?xt.display:null;A.style.display=it==null||typeof it=="boolean"?"":(""+it).trim()}}catch(Vt){Pe(F,F.return,Vt)}}}else if(n.tag===6){if(a===null){F=n;try{F.stateNode.nodeValue=u?"":F.memoizedProps}catch(Vt){Pe(F,F.return,Vt)}}}else if(n.tag===18){if(a===null){F=n;try{var lt=F.stateNode;u?T0(lt,!0):T0(F.stateNode,!1)}catch(Vt){Pe(F,F.return,Vt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Wl(e,a))));break;case 19:Xn(n,e),jn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Wl(e,o)));break;case 30:break;case 21:break;default:Xn(n,e),jn(e)}}function jn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(Rg(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,h=If(e);jl(e,h,u);break;case 5:var y=a.stateNode;a.flags&32&&(Hs(y,""),a.flags&=-33);var A=If(e);jl(e,A,y);break;case 3:case 4:var F=a.stateNode.containerInfo,nt=If(e);Ff(e,nt,F);break;default:throw Error(s(161))}}catch(dt){Pe(e,e.return,dt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Pg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Pg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ia(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Dg(e,n.alternate,n),n=n.sibling}function ys(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:wa(4,n,n.return),ys(n);break;case 1:Pi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Tg(n,n.return,a),ys(n);break;case 27:Ho(n.stateNode);case 26:case 5:Pi(n,n.return),ys(n);break;case 22:n.memoizedState===null&&ys(n);break;case 30:ys(n);break;default:ys(n)}e=e.sibling}}function aa(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,h=n,y=h.flags;switch(h.tag){case 0:case 11:case 15:aa(u,h,a),Do(4,h);break;case 1:if(aa(u,h,a),o=h,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(nt){Pe(o,o.return,nt)}if(o=h,u=o.updateQueue,u!==null){var A=o.stateNode;try{var F=u.shared.hiddenCallbacks;if(F!==null)for(u.shared.hiddenCallbacks=null,u=0;u<F.length;u++)dm(F[u],A)}catch(nt){Pe(o,o.return,nt)}}a&&y&64&&bg(h),Uo(h,h.return);break;case 27:Cg(h);case 26:case 5:aa(u,h,a),a&&o===null&&y&4&&Ag(h),Uo(h,h.return);break;case 12:aa(u,h,a);break;case 31:aa(u,h,a),a&&y&4&&Ng(u,h);break;case 13:aa(u,h,a),a&&y&4&&Og(u,h);break;case 22:h.memoizedState===null&&aa(u,h,a),Uo(h,h.return);break;case 30:break;default:aa(u,h,a)}n=n.sibling}}function Gf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&_o(a))}function Vf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&_o(e))}function Ti(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Bg(e,n,a,o),n=n.sibling}function Bg(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ti(e,n,a,o),u&2048&&Do(9,n);break;case 1:Ti(e,n,a,o);break;case 3:Ti(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&_o(e)));break;case 12:if(u&2048){Ti(e,n,a,o),e=n.stateNode;try{var h=n.memoizedProps,y=h.id,A=h.onPostCommit;typeof A=="function"&&A(y,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(F){Pe(n,n.return,F)}}else Ti(e,n,a,o);break;case 31:Ti(e,n,a,o);break;case 13:Ti(e,n,a,o);break;case 23:break;case 22:h=n.stateNode,y=n.alternate,n.memoizedState!==null?h._visibility&2?Ti(e,n,a,o):Lo(e,n):h._visibility&2?Ti(e,n,a,o):(h._visibility|=2,rr(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Gf(y,n);break;case 24:Ti(e,n,a,o),u&2048&&Vf(n.alternate,n);break;default:Ti(e,n,a,o)}}function rr(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var h=e,y=n,A=a,F=o,nt=y.flags;switch(y.tag){case 0:case 11:case 15:rr(h,y,A,F,u),Do(8,y);break;case 23:break;case 22:var dt=y.stateNode;y.memoizedState!==null?dt._visibility&2?rr(h,y,A,F,u):Lo(h,y):(dt._visibility|=2,rr(h,y,A,F,u)),u&&nt&2048&&Gf(y.alternate,y);break;case 24:rr(h,y,A,F,u),u&&nt&2048&&Vf(y.alternate,y);break;default:rr(h,y,A,F,u)}n=n.sibling}}function Lo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:Lo(a,o),u&2048&&Gf(o.alternate,o);break;case 24:Lo(a,o),u&2048&&Vf(o.alternate,o);break;default:Lo(a,o)}n=n.sibling}}var No=8192;function or(e,n,a){if(e.subtreeFlags&No)for(e=e.child;e!==null;)Ig(e,n,a),e=e.sibling}function Ig(e,n,a){switch(e.tag){case 26:or(e,n,a),e.flags&No&&e.memoizedState!==null&&hS(a,bi,e.memoizedState,e.memoizedProps);break;case 5:or(e,n,a);break;case 3:case 4:var o=bi;bi=rc(e.stateNode.containerInfo),or(e,n,a),bi=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=No,No=16777216,or(e,n,a),No=o):or(e,n,a));break;default:or(e,n,a)}}function Fg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Oo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Sn=o,Gg(o,e)}Fg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Hg(e),e=e.sibling}function Hg(e){switch(e.tag){case 0:case 11:case 15:Oo(e),e.flags&2048&&wa(9,e,e.return);break;case 3:Oo(e);break;case 12:Oo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Yl(e)):Oo(e);break;default:Oo(e)}}function Yl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Sn=o,Gg(o,e)}Fg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:wa(8,n,n.return),Yl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Yl(n));break;default:Yl(n)}e=e.sibling}}function Gg(e,n){for(;Sn!==null;){var a=Sn;switch(a.tag){case 0:case 11:case 15:wa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:_o(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Sn=o;else t:for(a=e;Sn!==null;){o=Sn;var u=o.sibling,h=o.return;if(Ug(o),o===a){Sn=null;break t}if(u!==null){u.return=h,Sn=u;break t}Sn=h}}}var Ry={getCacheForType:function(e){var n=Rn(ln),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Rn(ln).controller.signal}},Cy=typeof WeakMap=="function"?WeakMap:Map,Ne=0,We=null,xe=null,Me=0,ze=0,ni=null,Da=!1,lr=!1,kf=!1,sa=0,tn=0,Ua=0,Ss=0,Xf=0,ii=0,cr=0,zo=null,Wn=null,jf=!1,ql=0,Vg=0,Zl=1/0,Kl=null,La=null,mn=0,Na=null,ur=null,ra=0,Wf=0,Yf=null,kg=null,Po=0,qf=null;function ai(){return(Ne&2)!==0&&Me!==0?Me&-Me:P.T!==null?th():io()}function Xg(){if(ii===0)if((Me&536870912)===0||be){var e=ht;ht<<=1,(ht&3932160)===0&&(ht=262144),ii=e}else ii=536870912;return e=ti.current,e!==null&&(e.flags|=32),ii}function Yn(e,n,a){(e===We&&(ze===2||ze===9)||e.cancelPendingCommit!==null)&&(fr(e,0),Oa(e,Me,ii,!1)),bn(e,a),((Ne&2)===0||e!==We)&&(e===We&&((Ne&2)===0&&(Ss|=a),tn===4&&Oa(e,Me,ii,!1)),Bi(e))}function jg(e,n,a){if((Ne&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||ie(e,n),u=o?Uy(e,n):Kf(e,n,!0),h=o;do{if(u===0){lr&&!o&&Oa(e,n,0,!1);break}else{if(a=e.current.alternate,h&&!wy(a)){u=Kf(e,n,!1),h=!1;continue}if(u===2){if(h=n,e.errorRecoveryDisabledLanes&h)var y=0;else y=e.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){n=y;t:{var A=e;u=zo;var F=A.current.memoizedState.isDehydrated;if(F&&(fr(A,y).flags|=256),y=Kf(A,y,!1),y!==2){if(kf&&!F){A.errorRecoveryDisabledLanes|=h,Ss|=h,u=4;break t}h=Wn,Wn=u,h!==null&&(Wn===null?Wn=h:Wn.push.apply(Wn,h))}u=y}if(h=!1,u!==2)continue}}if(u===1){fr(e,0),Oa(e,n,0,!0);break}t:{switch(o=e,h=u,h){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Oa(o,n,ii,!Da);break t;case 2:Wn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=ql+300-ft(),10<u)){if(Oa(o,n,ii,!Da),Nt(o,0,!0)!==0)break t;ra=n,o.timeoutHandle=M0(Wg.bind(null,o,a,Wn,Kl,jf,n,ii,Ss,cr,Da,h,"Throttled",-0,0),u);break t}Wg(o,a,Wn,Kl,jf,n,ii,Ss,cr,Da,h,null,-0,0)}}break}while(!0);Bi(e)}function Wg(e,n,a,o,u,h,y,A,F,nt,dt,xt,it,lt){if(e.timeoutHandle=-1,xt=n.subtreeFlags,xt&8192||(xt&16785408)===16785408){xt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ji},Ig(n,h,xt);var Vt=(h&62914560)===h?ql-ft():(h&4194048)===h?Vg-ft():0;if(Vt=dS(xt,Vt),Vt!==null){ra=h,e.cancelPendingCommit=Vt(t0.bind(null,e,n,h,a,o,u,y,A,F,dt,xt,null,it,lt)),Oa(e,h,y,!nt);return}}t0(e,n,h,a,o,u,y,A,F)}function wy(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],h=u.getSnapshot;u=u.value;try{if(!Jn(h(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Oa(e,n,a,o){n&=~Xf,n&=~Ss,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var h=31-ne(u),y=1<<h;o[h]=-1,u&=~y}a!==0&&eo(e,a,n)}function Ql(){return(Ne&6)===0?(Bo(0),!1):!0}function Zf(){if(xe!==null){if(ze===0)var e=xe.return;else e=xe,Zi=hs=null,ff(e),er=null,xo=0,e=xe;for(;e!==null;)Eg(e.alternate,e),e=e.return;xe=null}}function fr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Zy(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ra=0,Zf(),We=e,xe=a=Yi(e.current,null),Me=n,ze=0,ni=null,Da=!1,lr=ie(e,n),kf=!1,cr=ii=Xf=Ss=Ua=tn=0,Wn=zo=null,jf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-ne(o),h=1<<u;n|=e[u],o&=~h}return sa=n,vl(),a}function Yg(e,n){ce=null,P.H=Ro,n===tr||n===Al?(n=cm(),ze=3):n===Ju?(n=cm(),ze=4):ze=n===Rf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ni=n,xe===null&&(tn=1,Hl(e,ui(n,e.current)))}function qg(){var e=ti.current;return e===null?!0:(Me&4194048)===Me?pi===null:(Me&62914560)===Me||(Me&536870912)!==0?e===pi:!1}function Zg(){var e=P.H;return P.H=Ro,e===null?Ro:e}function Kg(){var e=P.A;return P.A=Ry,e}function Jl(){tn=4,Da||(Me&4194048)!==Me&&ti.current!==null||(lr=!0),(Ua&134217727)===0&&(Ss&134217727)===0||We===null||Oa(We,Me,ii,!1)}function Kf(e,n,a){var o=Ne;Ne|=2;var u=Zg(),h=Kg();(We!==e||Me!==n)&&(Kl=null,fr(e,n)),n=!1;var y=tn;t:do try{if(ze!==0&&xe!==null){var A=xe,F=ni;switch(ze){case 8:Zf(),y=6;break t;case 3:case 2:case 9:case 6:ti.current===null&&(n=!0);var nt=ze;if(ze=0,ni=null,hr(e,A,F,nt),a&&lr){y=0;break t}break;default:nt=ze,ze=0,ni=null,hr(e,A,F,nt)}}Dy(),y=tn;break}catch(dt){Yg(e,dt)}while(!0);return n&&e.shellSuspendCounter++,Zi=hs=null,Ne=o,P.H=u,P.A=h,xe===null&&(We=null,Me=0,vl()),y}function Dy(){for(;xe!==null;)Qg(xe)}function Uy(e,n){var a=Ne;Ne|=2;var o=Zg(),u=Kg();We!==e||Me!==n?(Kl=null,Zl=ft()+500,fr(e,n)):lr=ie(e,n);t:do try{if(ze!==0&&xe!==null){n=xe;var h=ni;e:switch(ze){case 1:ze=0,ni=null,hr(e,n,h,1);break;case 2:case 9:if(om(h)){ze=0,ni=null,Jg(n);break}n=function(){ze!==2&&ze!==9||We!==e||(ze=7),Bi(e)},h.then(n,n);break t;case 3:ze=7;break t;case 4:ze=5;break t;case 7:om(h)?(ze=0,ni=null,Jg(n)):(ze=0,ni=null,hr(e,n,h,7));break;case 5:var y=null;switch(xe.tag){case 26:y=xe.memoizedState;case 5:case 27:var A=xe;if(y?B0(y):A.stateNode.complete){ze=0,ni=null;var F=A.sibling;if(F!==null)xe=F;else{var nt=A.return;nt!==null?(xe=nt,$l(nt)):xe=null}break e}}ze=0,ni=null,hr(e,n,h,5);break;case 6:ze=0,ni=null,hr(e,n,h,6);break;case 8:Zf(),tn=6;break t;default:throw Error(s(462))}}Ly();break}catch(dt){Yg(e,dt)}while(!0);return Zi=hs=null,P.H=o,P.A=u,Ne=a,xe!==null?0:(We=null,Me=0,vl(),tn)}function Ly(){for(;xe!==null&&!T();)Qg(xe)}function Qg(e){var n=Sg(e.alternate,e,sa);e.memoizedProps=e.pendingProps,n===null?$l(e):xe=n}function Jg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=mg(a,n,n.pendingProps,n.type,void 0,Me);break;case 11:n=mg(a,n,n.pendingProps,n.type.render,n.ref,Me);break;case 5:ff(n);default:Eg(a,n),n=xe=Kp(n,sa),n=Sg(a,n,sa)}e.memoizedProps=e.pendingProps,n===null?$l(e):xe=n}function hr(e,n,a,o){Zi=hs=null,ff(n),er=null,xo=0;var u=n.return;try{if(yy(e,u,n,a,Me)){tn=1,Hl(e,ui(a,e.current)),xe=null;return}}catch(h){if(u!==null)throw xe=u,h;tn=1,Hl(e,ui(a,e.current)),xe=null;return}n.flags&32768?(be||o===1?e=!0:lr||(Me&536870912)!==0?e=!1:(Da=e=!0,(o===2||o===9||o===3||o===6)&&(o=ti.current,o!==null&&o.tag===13&&(o.flags|=16384))),$g(n,e)):$l(n)}function $l(e){var n=e;do{if((n.flags&32768)!==0){$g(n,Da);return}e=n.return;var a=Ey(n.alternate,n,sa);if(a!==null){xe=a;return}if(n=n.sibling,n!==null){xe=n;return}xe=n=e}while(n!==null);tn===0&&(tn=5)}function $g(e,n){do{var a=by(e.alternate,e);if(a!==null){a.flags&=32767,xe=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){xe=e;return}xe=e=a}while(e!==null);tn=6,xe=null}function t0(e,n,a,o,u,h,y,A,F){e.cancelPendingCommit=null;do tc();while(mn!==0);if((Ne&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(h=n.lanes|n.childLanes,h|=Bu,Si(e,a,h,y,A,F),e===We&&(xe=We=null,Me=0),ur=n,Na=e,ra=a,Wf=h,Yf=u,kg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Py(wt,function(){return s0(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=P.T,P.T=null,u=Y.p,Y.p=2,y=Ne,Ne|=4;try{Ty(e,n,a)}finally{Ne=y,Y.p=u,P.T=o}}mn=1,e0(),n0(),i0()}}function e0(){if(mn===1){mn=0;var e=Na,n=ur,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=P.T,P.T=null;var o=Y.p;Y.p=2;var u=Ne;Ne|=4;try{zg(n,e);var h=lh,y=Gp(e.containerInfo),A=h.focusedElem,F=h.selectionRange;if(y!==A&&A&&A.ownerDocument&&Hp(A.ownerDocument.documentElement,A)){if(F!==null&&Lu(A)){var nt=F.start,dt=F.end;if(dt===void 0&&(dt=nt),"selectionStart"in A)A.selectionStart=nt,A.selectionEnd=Math.min(dt,A.value.length);else{var xt=A.ownerDocument||document,it=xt&&xt.defaultView||window;if(it.getSelection){var lt=it.getSelection(),Vt=A.textContent.length,ee=Math.min(F.start,Vt),Ve=F.end===void 0?ee:Math.min(F.end,Vt);!lt.extend&&ee>Ve&&(y=Ve,Ve=ee,ee=y);var Q=Fp(A,ee),V=Fp(A,Ve);if(Q&&V&&(lt.rangeCount!==1||lt.anchorNode!==Q.node||lt.anchorOffset!==Q.offset||lt.focusNode!==V.node||lt.focusOffset!==V.offset)){var et=xt.createRange();et.setStart(Q.node,Q.offset),lt.removeAllRanges(),ee>Ve?(lt.addRange(et),lt.extend(V.node,V.offset)):(et.setEnd(V.node,V.offset),lt.addRange(et))}}}}for(xt=[],lt=A;lt=lt.parentNode;)lt.nodeType===1&&xt.push({element:lt,left:lt.scrollLeft,top:lt.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<xt.length;A++){var vt=xt[A];vt.element.scrollLeft=vt.left,vt.element.scrollTop=vt.top}}hc=!!oh,lh=oh=null}finally{Ne=u,Y.p=o,P.T=a}}e.current=n,mn=2}}function n0(){if(mn===2){mn=0;var e=Na,n=ur,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=P.T,P.T=null;var o=Y.p;Y.p=2;var u=Ne;Ne|=4;try{Dg(e,n.alternate,n)}finally{Ne=u,Y.p=o,P.T=a}}mn=3}}function i0(){if(mn===4||mn===3){mn=0,tt();var e=Na,n=ur,a=ra,o=kg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?mn=5:(mn=0,ur=Na=null,a0(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(La=null),Is(a),n=n.stateNode,Yt&&typeof Yt.onCommitFiberRoot=="function")try{Yt.onCommitFiberRoot(qt,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=P.T,u=Y.p,Y.p=2,P.T=null;try{for(var h=e.onRecoverableError,y=0;y<o.length;y++){var A=o[y];h(A.value,{componentStack:A.stack})}}finally{P.T=n,Y.p=u}}(ra&3)!==0&&tc(),Bi(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===qf?Po++:(Po=0,qf=e):Po=0,Bo(0)}}function a0(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,_o(n)))}function tc(){return e0(),n0(),i0(),s0()}function s0(){if(mn!==5)return!1;var e=Na,n=Wf;Wf=0;var a=Is(ra),o=P.T,u=Y.p;try{Y.p=32>a?32:a,P.T=null,a=Yf,Yf=null;var h=Na,y=ra;if(mn=0,ur=Na=null,ra=0,(Ne&6)!==0)throw Error(s(331));var A=Ne;if(Ne|=4,Hg(h.current),Bg(h,h.current,y,a),Ne=A,Bo(0,!1),Yt&&typeof Yt.onPostCommitFiberRoot=="function")try{Yt.onPostCommitFiberRoot(qt,h)}catch{}return!0}finally{Y.p=u,P.T=o,a0(e,n)}}function r0(e,n,a){n=ui(a,n),n=Af(e.stateNode,n,2),e=Aa(e,n,2),e!==null&&(bn(e,2),Bi(e))}function Pe(e,n,a){if(e.tag===3)r0(e,e,a);else for(;n!==null;){if(n.tag===3){r0(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(La===null||!La.has(o))){e=ui(a,e),a=og(2),o=Aa(n,a,2),o!==null&&(lg(a,o,n,e),bn(o,2),Bi(o));break}}n=n.return}}function Qf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new Cy;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(kf=!0,u.add(a),e=Ny.bind(null,e,n,a),n.then(e,e))}function Ny(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,We===e&&(Me&a)===a&&(tn===4||tn===3&&(Me&62914560)===Me&&300>ft()-ql?(Ne&2)===0&&fr(e,0):Xf|=a,cr===Me&&(cr=0)),Bi(e)}function o0(e,n){n===0&&(n=dn()),e=cs(e,n),e!==null&&(bn(e,n),Bi(e))}function Oy(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),o0(e,a)}function zy(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),o0(e,a)}function Py(e,n){return Ct(e,n)}var ec=null,dr=null,Jf=!1,nc=!1,$f=!1,za=0;function Bi(e){e!==dr&&e.next===null&&(dr===null?ec=dr=e:dr=dr.next=e),nc=!0,Jf||(Jf=!0,Iy())}function Bo(e,n){if(!$f&&nc){$f=!0;do for(var a=!1,o=ec;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var h=0;else{var y=o.suspendedLanes,A=o.pingedLanes;h=(1<<31-ne(42|e)+1)-1,h&=u&~(y&~A),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(a=!0,f0(o,h))}else h=Me,h=Nt(o,o===We?h:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(h&3)===0||ie(o,h)||(a=!0,f0(o,h));o=o.next}while(a);$f=!1}}function By(){l0()}function l0(){nc=Jf=!1;var e=0;za!==0&&qy()&&(e=za);for(var n=ft(),a=null,o=ec;o!==null;){var u=o.next,h=c0(o,n);h===0?(o.next=null,a===null?ec=u:a.next=u,u===null&&(dr=a)):(a=o,(e!==0||(h&3)!==0)&&(nc=!0)),o=u}mn!==0&&mn!==5||Bo(e),za!==0&&(za=0)}function c0(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,h=e.pendingLanes&-62914561;0<h;){var y=31-ne(h),A=1<<y,F=u[y];F===-1?((A&a)===0||(A&o)!==0)&&(u[y]=Ke(A,n)):F<=n&&(e.expiredLanes|=A),h&=~A}if(n=We,a=Me,a=Nt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(ze===2||ze===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&w(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||ie(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&w(o),Is(a)){case 2:case 8:a=Xt;break;case 32:a=wt;break;case 268435456:a=ge;break;default:a=wt}return o=u0.bind(null,e),a=Ct(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&w(o),e.callbackPriority=2,e.callbackNode=null,2}function u0(e,n){if(mn!==0&&mn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(tc()&&e.callbackNode!==a)return null;var o=Me;return o=Nt(e,e===We?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(jg(e,o,n),c0(e,ft()),e.callbackNode!=null&&e.callbackNode===a?u0.bind(null,e):null)}function f0(e,n){if(tc())return null;jg(e,n,!0)}function Iy(){Ky(function(){(Ne&6)!==0?Ct(pt,By):l0()})}function th(){if(za===0){var e=Js;e===0&&(e=Ut,Ut<<=1,(Ut&261888)===0&&(Ut=256)),za=e}return za}function h0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ul(""+e)}function d0(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function Fy(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var h=h0((u[Tn]||null).action),y=o.submitter;y&&(n=(n=y[Tn]||null)?h0(n.formAction):y.getAttribute("formAction"),n!==null&&(h=n,y=null));var A=new pl("action","action",null,o,u);e.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(za!==0){var F=y?d0(u,y):new FormData(u);yf(a,{pending:!0,data:F,method:u.method,action:h},null,F)}}else typeof h=="function"&&(A.preventDefault(),F=y?d0(u,y):new FormData(u),yf(a,{pending:!0,data:F,method:u.method,action:h},h,F))},currentTarget:u}]})}}for(var eh=0;eh<Pu.length;eh++){var nh=Pu[eh],Hy=nh.toLowerCase(),Gy=nh[0].toUpperCase()+nh.slice(1);Ei(Hy,"on"+Gy)}Ei(Xp,"onAnimationEnd"),Ei(jp,"onAnimationIteration"),Ei(Wp,"onAnimationStart"),Ei("dblclick","onDoubleClick"),Ei("focusin","onFocus"),Ei("focusout","onBlur"),Ei(iy,"onTransitionRun"),Ei(ay,"onTransitionStart"),Ei(sy,"onTransitionCancel"),Ei(Yp,"onTransitionEnd"),te("onMouseEnter",["mouseout","mouseover"]),te("onMouseLeave",["mouseout","mouseover"]),te("onPointerEnter",["pointerout","pointerover"]),te("onPointerLeave",["pointerout","pointerover"]),Bt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Bt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Bt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Bt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Bt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Bt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Io="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Io));function p0(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var h=void 0;if(n)for(var y=o.length-1;0<=y;y--){var A=o[y],F=A.instance,nt=A.currentTarget;if(A=A.listener,F!==h&&u.isPropagationStopped())break t;h=A,u.currentTarget=nt;try{h(u)}catch(dt){_l(dt)}u.currentTarget=null,h=F}else for(y=0;y<o.length;y++){if(A=o[y],F=A.instance,nt=A.currentTarget,A=A.listener,F!==h&&u.isPropagationStopped())break t;h=A,u.currentTarget=nt;try{h(u)}catch(dt){_l(dt)}u.currentTarget=null,h=F}}}}function ye(e,n){var a=n[ao];a===void 0&&(a=n[ao]=new Set);var o=e+"__bubble";a.has(o)||(m0(n,e,2,!1),a.add(o))}function ih(e,n,a){var o=0;n&&(o|=4),m0(a,e,o,n)}var ic="_reactListening"+Math.random().toString(36).slice(2);function ah(e){if(!e[ic]){e[ic]=!0,Ot.forEach(function(a){a!=="selectionchange"&&(Vy.has(a)||ih(a,!1,e),ih(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ic]||(n[ic]=!0,ih("selectionchange",!1,n))}}function m0(e,n,a,o){switch(X0(n)){case 2:var u=gS;break;case 8:u=_S;break;default:u=xh}a=u.bind(null,n,a,e),u=void 0,!Eu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function sh(e,n,a,o,u){var h=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var y=o.tag;if(y===3||y===4){var A=o.stateNode.containerInfo;if(A===u)break;if(y===4)for(y=o.return;y!==null;){var F=y.tag;if((F===3||F===4)&&y.stateNode.containerInfo===u)return;y=y.return}for(;A!==null;){if(y=W(A),y===null)return;if(F=y.tag,F===5||F===6||F===26||F===27){o=h=y;continue t}A=A.parentNode}}o=o.return}yp(function(){var nt=h,dt=Su(a),xt=[];t:{var it=qp.get(e);if(it!==void 0){var lt=pl,Vt=e;switch(e){case"keypress":if(hl(a)===0)break t;case"keydown":case"keyup":lt=zx;break;case"focusin":Vt="focus",lt=Ru;break;case"focusout":Vt="blur",lt=Ru;break;case"beforeblur":case"afterblur":lt=Ru;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":lt=Ep;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":lt=Ex;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":lt=Ix;break;case Xp:case jp:case Wp:lt=Ax;break;case Yp:lt=Hx;break;case"scroll":case"scrollend":lt=Sx;break;case"wheel":lt=Vx;break;case"copy":case"cut":case"paste":lt=Cx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":lt=Tp;break;case"toggle":case"beforetoggle":lt=Xx}var ee=(n&4)!==0,Ve=!ee&&(e==="scroll"||e==="scrollend"),Q=ee?it!==null?it+"Capture":null:it;ee=[];for(var V=nt,et;V!==null;){var vt=V;if(et=vt.stateNode,vt=vt.tag,vt!==5&&vt!==26&&vt!==27||et===null||Q===null||(vt=so(V,Q),vt!=null&&ee.push(Fo(V,vt,et))),Ve)break;V=V.return}0<ee.length&&(it=new lt(it,Vt,null,a,dt),xt.push({event:it,listeners:ee}))}}if((n&7)===0){t:{if(it=e==="mouseover"||e==="pointerover",lt=e==="mouseout"||e==="pointerout",it&&a!==yu&&(Vt=a.relatedTarget||a.fromElement)&&(W(Vt)||Vt[ki]))break t;if((lt||it)&&(it=dt.window===dt?dt:(it=dt.ownerDocument)?it.defaultView||it.parentWindow:window,lt?(Vt=a.relatedTarget||a.toElement,lt=nt,Vt=Vt?W(Vt):null,Vt!==null&&(Ve=c(Vt),ee=Vt.tag,Vt!==Ve||ee!==5&&ee!==27&&ee!==6)&&(Vt=null)):(lt=null,Vt=nt),lt!==Vt)){if(ee=Ep,vt="onMouseLeave",Q="onMouseEnter",V="mouse",(e==="pointerout"||e==="pointerover")&&(ee=Tp,vt="onPointerLeave",Q="onPointerEnter",V="pointer"),Ve=lt==null?it:rt(lt),et=Vt==null?it:rt(Vt),it=new ee(vt,V+"leave",lt,a,dt),it.target=Ve,it.relatedTarget=et,vt=null,W(dt)===nt&&(ee=new ee(Q,V+"enter",Vt,a,dt),ee.target=et,ee.relatedTarget=Ve,vt=ee),Ve=vt,lt&&Vt)e:{for(ee=ky,Q=lt,V=Vt,et=0,vt=Q;vt;vt=ee(vt))et++;vt=0;for(var Kt=V;Kt;Kt=ee(Kt))vt++;for(;0<et-vt;)Q=ee(Q),et--;for(;0<vt-et;)V=ee(V),vt--;for(;et--;){if(Q===V||V!==null&&Q===V.alternate){ee=Q;break e}Q=ee(Q),V=ee(V)}ee=null}else ee=null;lt!==null&&g0(xt,it,lt,ee,!1),Vt!==null&&Ve!==null&&g0(xt,Ve,Vt,ee,!0)}}t:{if(it=nt?rt(nt):window,lt=it.nodeName&&it.nodeName.toLowerCase(),lt==="select"||lt==="input"&&it.type==="file")var De=Np;else if(Up(it))if(Op)De=ty;else{De=Jx;var jt=Qx}else lt=it.nodeName,!lt||lt.toLowerCase()!=="input"||it.type!=="checkbox"&&it.type!=="radio"?nt&&xu(nt.elementType)&&(De=Np):De=$x;if(De&&(De=De(e,nt))){Lp(xt,De,a,dt);break t}jt&&jt(e,it,nt),e==="focusout"&&nt&&it.type==="number"&&nt.memoizedProps.value!=null&&pn(it,"number",it.value)}switch(jt=nt?rt(nt):window,e){case"focusin":(Up(jt)||jt.contentEditable==="true")&&(Xs=jt,Nu=nt,po=null);break;case"focusout":po=Nu=Xs=null;break;case"mousedown":Ou=!0;break;case"contextmenu":case"mouseup":case"dragend":Ou=!1,Vp(xt,a,dt);break;case"selectionchange":if(ny)break;case"keydown":case"keyup":Vp(xt,a,dt)}var ue;if(wu)t:{switch(e){case"compositionstart":var Ee="onCompositionStart";break t;case"compositionend":Ee="onCompositionEnd";break t;case"compositionupdate":Ee="onCompositionUpdate";break t}Ee=void 0}else ks?wp(e,a)&&(Ee="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Ee="onCompositionStart");Ee&&(Ap&&a.locale!=="ko"&&(ks||Ee!=="onCompositionStart"?Ee==="onCompositionEnd"&&ks&&(ue=Sp()):(xa=dt,bu="value"in xa?xa.value:xa.textContent,ks=!0)),jt=ac(nt,Ee),0<jt.length&&(Ee=new bp(Ee,e,null,a,dt),xt.push({event:Ee,listeners:jt}),ue?Ee.data=ue:(ue=Dp(a),ue!==null&&(Ee.data=ue)))),(ue=Wx?Yx(e,a):qx(e,a))&&(Ee=ac(nt,"onBeforeInput"),0<Ee.length&&(jt=new bp("onBeforeInput","beforeinput",null,a,dt),xt.push({event:jt,listeners:Ee}),jt.data=ue)),Fy(xt,e,nt,a,dt)}p0(xt,n)})}function Fo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function ac(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,h=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||h===null||(u=so(e,a),u!=null&&o.unshift(Fo(e,u,h)),u=so(e,n),u!=null&&o.push(Fo(e,u,h))),e.tag===3)return o;e=e.return}return[]}function ky(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function g0(e,n,a,o,u){for(var h=n._reactName,y=[];a!==null&&a!==o;){var A=a,F=A.alternate,nt=A.stateNode;if(A=A.tag,F!==null&&F===o)break;A!==5&&A!==26&&A!==27||nt===null||(F=nt,u?(nt=so(a,h),nt!=null&&y.unshift(Fo(a,nt,F))):u||(nt=so(a,h),nt!=null&&y.push(Fo(a,nt,F)))),a=a.return}y.length!==0&&e.push({event:n,listeners:y})}var Xy=/\r\n?/g,jy=/\u0000|\uFFFD/g;function _0(e){return(typeof e=="string"?e:""+e).replace(Xy,`
`).replace(jy,"")}function v0(e,n){return n=_0(n),_0(e)===n}function Ge(e,n,a,o,u,h){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Hs(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Hs(e,""+o);break;case"className":je(e,"class",o);break;case"tabIndex":je(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":je(e,a,o);break;case"style":vp(e,o,h);break;case"data":if(n!=="object"){je(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=ul(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(a==="formAction"?(n!=="input"&&Ge(e,n,"name",u.name,u,null),Ge(e,n,"formEncType",u.formEncType,u,null),Ge(e,n,"formMethod",u.formMethod,u,null),Ge(e,n,"formTarget",u.formTarget,u,null)):(Ge(e,n,"encType",u.encType,u,null),Ge(e,n,"method",u.method,u,null),Ge(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=ul(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=ji);break;case"onScroll":o!=null&&ye("scroll",e);break;case"onScrollEnd":o!=null&&ye("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=ul(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":ye("beforetoggle",e),ye("toggle",e),Ye(e,"popover",o);break;case"xlinkActuate":le(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":le(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":le(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":le(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":le(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":le(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":le(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":le(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":le(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Ye(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=xx.get(a)||a,Ye(e,a,o))}}function rh(e,n,a,o,u,h){switch(a){case"style":vp(e,o,h);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Hs(e,o):(typeof o=="number"||typeof o=="bigint")&&Hs(e,""+o);break;case"onScroll":o!=null&&ye("scroll",e);break;case"onScrollEnd":o!=null&&ye("scrollend",e);break;case"onClick":o!=null&&(e.onclick=ji);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ht.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),h=e[Tn]||null,h=h!=null?h[a]:null,typeof h=="function"&&e.removeEventListener(n,h,u),typeof o=="function")){typeof h!="function"&&h!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Ye(e,a,o)}}}function wn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ye("error",e),ye("load",e);var o=!1,u=!1,h;for(h in a)if(a.hasOwnProperty(h)){var y=a[h];if(y!=null)switch(h){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ge(e,n,h,y,a,null)}}u&&Ge(e,n,"srcSet",a.srcSet,a,null),o&&Ge(e,n,"src",a.src,a,null);return;case"input":ye("invalid",e);var A=h=y=u=null,F=null,nt=null;for(o in a)if(a.hasOwnProperty(o)){var dt=a[o];if(dt!=null)switch(o){case"name":u=dt;break;case"type":y=dt;break;case"checked":F=dt;break;case"defaultChecked":nt=dt;break;case"value":h=dt;break;case"defaultValue":A=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(s(137,n));break;default:Ge(e,n,o,dt,a,null)}}Pn(e,h,A,F,nt,y,u,!1);return;case"select":ye("invalid",e),o=y=h=null;for(u in a)if(a.hasOwnProperty(u)&&(A=a[u],A!=null))switch(u){case"value":h=A;break;case"defaultValue":y=A;break;case"multiple":o=A;default:Ge(e,n,u,A,a,null)}n=h,a=y,e.multiple=!!o,n!=null?an(e,!!o,n,!1):a!=null&&an(e,!!o,a,!0);return;case"textarea":ye("invalid",e),h=u=o=null;for(y in a)if(a.hasOwnProperty(y)&&(A=a[y],A!=null))switch(y){case"value":o=A;break;case"defaultValue":u=A;break;case"children":h=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:Ge(e,n,y,A,a,null)}Ni(e,o,u,h);return;case"option":for(F in a)if(a.hasOwnProperty(F)&&(o=a[F],o!=null))switch(F){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Ge(e,n,F,o,a,null)}return;case"dialog":ye("beforetoggle",e),ye("toggle",e),ye("cancel",e),ye("close",e);break;case"iframe":case"object":ye("load",e);break;case"video":case"audio":for(o=0;o<Io.length;o++)ye(Io[o],e);break;case"image":ye("error",e),ye("load",e);break;case"details":ye("toggle",e);break;case"embed":case"source":case"link":ye("error",e),ye("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(nt in a)if(a.hasOwnProperty(nt)&&(o=a[nt],o!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ge(e,n,nt,o,a,null)}return;default:if(xu(n)){for(dt in a)a.hasOwnProperty(dt)&&(o=a[dt],o!==void 0&&rh(e,n,dt,o,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(o=a[A],o!=null&&Ge(e,n,A,o,a,null))}function Wy(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,h=null,y=null,A=null,F=null,nt=null,dt=null;for(lt in a){var xt=a[lt];if(a.hasOwnProperty(lt)&&xt!=null)switch(lt){case"checked":break;case"value":break;case"defaultValue":F=xt;default:o.hasOwnProperty(lt)||Ge(e,n,lt,null,o,xt)}}for(var it in o){var lt=o[it];if(xt=a[it],o.hasOwnProperty(it)&&(lt!=null||xt!=null))switch(it){case"type":h=lt;break;case"name":u=lt;break;case"checked":nt=lt;break;case"defaultChecked":dt=lt;break;case"value":y=lt;break;case"defaultValue":A=lt;break;case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(s(137,n));break;default:lt!==xt&&Ge(e,n,it,lt,o,xt)}}Un(e,y,A,F,nt,dt,h,u);return;case"select":lt=y=A=it=null;for(h in a)if(F=a[h],a.hasOwnProperty(h)&&F!=null)switch(h){case"value":break;case"multiple":lt=F;default:o.hasOwnProperty(h)||Ge(e,n,h,null,o,F)}for(u in o)if(h=o[u],F=a[u],o.hasOwnProperty(u)&&(h!=null||F!=null))switch(u){case"value":it=h;break;case"defaultValue":A=h;break;case"multiple":y=h;default:h!==F&&Ge(e,n,u,h,o,F)}n=A,a=y,o=lt,it!=null?an(e,!!a,it,!1):!!o!=!!a&&(n!=null?an(e,!!a,n,!0):an(e,!!a,a?[]:"",!1));return;case"textarea":lt=it=null;for(A in a)if(u=a[A],a.hasOwnProperty(A)&&u!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Ge(e,n,A,null,o,u)}for(y in o)if(u=o[y],h=a[y],o.hasOwnProperty(y)&&(u!=null||h!=null))switch(y){case"value":it=u;break;case"defaultValue":lt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==h&&Ge(e,n,y,u,o,h)}Fs(e,it,lt);return;case"option":for(var Vt in a)if(it=a[Vt],a.hasOwnProperty(Vt)&&it!=null&&!o.hasOwnProperty(Vt))switch(Vt){case"selected":e.selected=!1;break;default:Ge(e,n,Vt,null,o,it)}for(F in o)if(it=o[F],lt=a[F],o.hasOwnProperty(F)&&it!==lt&&(it!=null||lt!=null))switch(F){case"selected":e.selected=it&&typeof it!="function"&&typeof it!="symbol";break;default:Ge(e,n,F,it,o,lt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ee in a)it=a[ee],a.hasOwnProperty(ee)&&it!=null&&!o.hasOwnProperty(ee)&&Ge(e,n,ee,null,o,it);for(nt in o)if(it=o[nt],lt=a[nt],o.hasOwnProperty(nt)&&it!==lt&&(it!=null||lt!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(s(137,n));break;default:Ge(e,n,nt,it,o,lt)}return;default:if(xu(n)){for(var Ve in a)it=a[Ve],a.hasOwnProperty(Ve)&&it!==void 0&&!o.hasOwnProperty(Ve)&&rh(e,n,Ve,void 0,o,it);for(dt in o)it=o[dt],lt=a[dt],!o.hasOwnProperty(dt)||it===lt||it===void 0&&lt===void 0||rh(e,n,dt,it,o,lt);return}}for(var Q in a)it=a[Q],a.hasOwnProperty(Q)&&it!=null&&!o.hasOwnProperty(Q)&&Ge(e,n,Q,null,o,it);for(xt in o)it=o[xt],lt=a[xt],!o.hasOwnProperty(xt)||it===lt||it==null&&lt==null||Ge(e,n,xt,it,o,lt)}function x0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Yy(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],h=u.transferSize,y=u.initiatorType,A=u.duration;if(h&&A&&x0(y)){for(y=0,A=u.responseEnd,o+=1;o<a.length;o++){var F=a[o],nt=F.startTime;if(nt>A)break;var dt=F.transferSize,xt=F.initiatorType;dt&&x0(xt)&&(F=F.responseEnd,y+=dt*(F<A?1:(A-nt)/(F-nt)))}if(--o,n+=8*(h+y)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var oh=null,lh=null;function sc(e){return e.nodeType===9?e:e.ownerDocument}function y0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function S0(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function ch(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var uh=null;function qy(){var e=window.event;return e&&e.type==="popstate"?e===uh?!1:(uh=e,!0):(uh=null,!1)}var M0=typeof setTimeout=="function"?setTimeout:void 0,Zy=typeof clearTimeout=="function"?clearTimeout:void 0,E0=typeof Promise=="function"?Promise:void 0,Ky=typeof queueMicrotask=="function"?queueMicrotask:typeof E0<"u"?function(e){return E0.resolve(null).then(e).catch(Qy)}:M0;function Qy(e){setTimeout(function(){throw e})}function Pa(e){return e==="head"}function b0(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),_r(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Ho(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Ho(a);for(var h=a.firstChild;h;){var y=h.nextSibling,A=h.nodeName;h[as]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&h.rel.toLowerCase()==="stylesheet"||a.removeChild(h),h=y}}else a==="body"&&Ho(e.ownerDocument.body);a=u}while(a);_r(n)}function T0(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function fh(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":fh(a),R(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Jy(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[as])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(h=e.getAttribute("rel"),h==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(h!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(h=e.getAttribute("src"),(h!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&h&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var h=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===h)return e}else return e;if(e=mi(e.nextSibling),e===null)break}return null}function $y(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=mi(e.nextSibling),e===null))return null;return e}function A0(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=mi(e.nextSibling),e===null))return null;return e}function hh(e){return e.data==="$?"||e.data==="$~"}function dh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function tS(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function mi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var ph=null;function R0(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return mi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function C0(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function w0(e,n,a){switch(n=sc(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Ho(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);R(e)}var gi=new Map,D0=new Set;function rc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var oa=Y.d;Y.d={f:eS,r:nS,D:iS,C:aS,L:sS,m:rS,X:lS,S:oS,M:cS};function eS(){var e=oa.f(),n=Ql();return e||n}function nS(e){var n=at(e);n!==null&&n.tag===5&&n.type==="form"?Ym(n):oa.r(e)}var pr=typeof document>"u"?null:document;function U0(e,n,a){var o=pr;if(o&&typeof n=="string"&&n){var u=ve(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),D0.has(u)||(D0.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),wn(n,"link",e),St(n),o.head.appendChild(n)))}}function iS(e){oa.D(e),U0("dns-prefetch",e,null)}function aS(e,n){oa.C(e,n),U0("preconnect",e,n)}function sS(e,n,a){oa.L(e,n,a);var o=pr;if(o&&e&&n){var u='link[rel="preload"][as="'+ve(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+ve(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+ve(a.imageSizes)+'"]')):u+='[href="'+ve(e)+'"]';var h=u;switch(n){case"style":h=mr(e);break;case"script":h=gr(e)}gi.has(h)||(e=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),gi.set(h,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Go(h))||n==="script"&&o.querySelector(Vo(h))||(n=o.createElement("link"),wn(n,"link",e),St(n),o.head.appendChild(n)))}}function rS(e,n){oa.m(e,n);var a=pr;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+ve(o)+'"][href="'+ve(e)+'"]',h=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=gr(e)}if(!gi.has(h)&&(e=_({rel:"modulepreload",href:e},n),gi.set(h,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Vo(h)))return}o=a.createElement("link"),wn(o,"link",e),St(o),a.head.appendChild(o)}}}function oS(e,n,a){oa.S(e,n,a);var o=pr;if(o&&e){var u=K(o).hoistableStyles,h=mr(e);n=n||"default";var y=u.get(h);if(!y){var A={loading:0,preload:null};if(y=o.querySelector(Go(h)))A.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":n},a),(a=gi.get(h))&&mh(e,a);var F=y=o.createElement("link");St(F),wn(F,"link",e),F._p=new Promise(function(nt,dt){F.onload=nt,F.onerror=dt}),F.addEventListener("load",function(){A.loading|=1}),F.addEventListener("error",function(){A.loading|=2}),A.loading|=4,oc(y,n,o)}y={type:"stylesheet",instance:y,count:1,state:A},u.set(h,y)}}}function lS(e,n){oa.X(e,n);var a=pr;if(a&&e){var o=K(a).hoistableScripts,u=gr(e),h=o.get(u);h||(h=a.querySelector(Vo(u)),h||(e=_({src:e,async:!0},n),(n=gi.get(u))&&gh(e,n),h=a.createElement("script"),St(h),wn(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function cS(e,n){oa.M(e,n);var a=pr;if(a&&e){var o=K(a).hoistableScripts,u=gr(e),h=o.get(u);h||(h=a.querySelector(Vo(u)),h||(e=_({src:e,async:!0,type:"module"},n),(n=gi.get(u))&&gh(e,n),h=a.createElement("script"),St(h),wn(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function L0(e,n,a,o){var u=(u=Tt.current)?rc(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=mr(a.href),a=K(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=mr(a.href);var h=K(u).hoistableStyles,y=h.get(e);if(y||(u=u.ownerDocument||u,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(e,y),(h=u.querySelector(Go(e)))&&!h._p&&(y.instance=h,y.state.loading=5),gi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},gi.set(e,a),h||uS(u,e,a,y.state))),n&&o===null)throw Error(s(528,""));return y}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=gr(a),a=K(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function mr(e){return'href="'+ve(e)+'"'}function Go(e){return'link[rel="stylesheet"]['+e+"]"}function N0(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function uS(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),wn(n,"link",a),St(n),e.head.appendChild(n))}function gr(e){return'[src="'+ve(e)+'"]'}function Vo(e){return"script[async]"+e}function O0(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+ve(a.href)+'"]');if(o)return n.instance=o,St(o),o;var u=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),St(o),wn(o,"style",u),oc(o,a.precedence,e),n.instance=o;case"stylesheet":u=mr(a.href);var h=e.querySelector(Go(u));if(h)return n.state.loading|=4,n.instance=h,St(h),h;o=N0(a),(u=gi.get(u))&&mh(o,u),h=(e.ownerDocument||e).createElement("link"),St(h);var y=h;return y._p=new Promise(function(A,F){y.onload=A,y.onerror=F}),wn(h,"link",o),n.state.loading|=4,oc(h,a.precedence,e),n.instance=h;case"script":return h=gr(a.src),(u=e.querySelector(Vo(h)))?(n.instance=u,St(u),u):(o=a,(u=gi.get(h))&&(o=_({},a),gh(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),St(u),wn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,oc(o,a.precedence,e));return n.instance}function oc(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,h=u,y=0;y<o.length;y++){var A=o[y];if(A.dataset.precedence===n)h=A;else if(h!==u)break}h?h.parentNode.insertBefore(e,h.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function mh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function gh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var lc=null;function z0(e,n,a){if(lc===null){var o=new Map,u=lc=new Map;u.set(a,o)}else u=lc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var h=a[u];if(!(h[as]||h[Je]||e==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var y=h.getAttribute(n)||"";y=e+y;var A=o.get(y);A?A.push(h):o.set(y,[h])}}return o}function P0(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function fS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function B0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function hS(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=mr(o.href),h=n.querySelector(Go(u));if(h){n=h._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=cc.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=h,St(h);return}h=n.ownerDocument||n,o=N0(o),(u=gi.get(u))&&mh(o,u),h=h.createElement("link"),St(h);var y=h;y._p=new Promise(function(A,F){y.onload=A,y.onerror=F}),wn(h,"link",o),a.instance=h}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=cc.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var _h=0;function dS(e,n){return e.stylesheets&&e.count===0&&fc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&fc(e,e.stylesheets),e.unsuspend){var h=e.unsuspend;e.unsuspend=null,h()}},6e4+n);0<e.imgBytes&&_h===0&&(_h=62500*Yy());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&fc(e,e.stylesheets),e.unsuspend)){var h=e.unsuspend;e.unsuspend=null,h()}},(e.imgBytes>_h?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function cc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)fc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var uc=null;function fc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,uc=new Map,n.forEach(pS,e),uc=null,cc.call(e))}function pS(e,n){if(!(n.state.loading&4)){var a=uc.get(e);if(a)var o=a.get(null);else{a=new Map,uc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<u.length;h++){var y=u[h];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(a.set(y.dataset.precedence,y),o=y)}o&&a.set(null,o)}u=n.instance,y=u.getAttribute("data-precedence"),h=a.get(y)||o,h===o&&a.set(null,u),a.set(y,u),this.count++,o=cc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),h?h.parentNode.insertBefore(u,h.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var ko={$$typeof:L,Provider:null,Consumer:null,_currentValue:Z,_currentValue2:Z,_threadCount:0};function mS(e,n,a,o,u,h,y,A,F){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ae(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ae(0),this.hiddenUpdates=Ae(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=h,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=F,this.incompleteTransitions=new Map}function I0(e,n,a,o,u,h,y,A,F,nt,dt,xt){return e=new mS(e,n,a,y,F,nt,dt,xt,A),n=1,h===!0&&(n|=24),h=$n(3,null,null,n),e.current=h,h.stateNode=e,n=Zu(),n.refCount++,e.pooledCache=n,n.refCount++,h.memoizedState={element:o,isDehydrated:a,cache:n},$u(h),e}function F0(e){return e?(e=Ys,e):Ys}function H0(e,n,a,o,u,h){u=F0(u),o.context===null?o.context=u:o.pendingContext=u,o=Ta(n),o.payload={element:a},h=h===void 0?null:h,h!==null&&(o.callback=h),a=Aa(e,o,n),a!==null&&(Yn(a,e,n),So(a,e,n))}function G0(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function vh(e,n){G0(e,n),(e=e.alternate)&&G0(e,n)}function V0(e){if(e.tag===13||e.tag===31){var n=cs(e,67108864);n!==null&&Yn(n,e,67108864),vh(e,67108864)}}function k0(e){if(e.tag===13||e.tag===31){var n=ai();n=ns(n);var a=cs(e,n);a!==null&&Yn(a,e,n),vh(e,n)}}var hc=!0;function gS(e,n,a,o){var u=P.T;P.T=null;var h=Y.p;try{Y.p=2,xh(e,n,a,o)}finally{Y.p=h,P.T=u}}function _S(e,n,a,o){var u=P.T;P.T=null;var h=Y.p;try{Y.p=8,xh(e,n,a,o)}finally{Y.p=h,P.T=u}}function xh(e,n,a,o){if(hc){var u=yh(o);if(u===null)sh(e,n,o,dc,a),j0(e,o);else if(xS(u,e,n,a,o))o.stopPropagation();else if(j0(e,o),n&4&&-1<vS.indexOf(e)){for(;u!==null;){var h=at(u);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var y=Lt(h.pendingLanes);if(y!==0){var A=h;for(A.pendingLanes|=2,A.entangledLanes|=2;y;){var F=1<<31-ne(y);A.entanglements[1]|=F,y&=~F}Bi(h),(Ne&6)===0&&(Zl=ft()+500,Bo(0))}}break;case 31:case 13:A=cs(h,2),A!==null&&Yn(A,h,2),Ql(),vh(h,2)}if(h=yh(o),h===null&&sh(e,n,o,dc,a),h===u)break;u=h}u!==null&&o.stopPropagation()}else sh(e,n,o,null,a)}}function yh(e){return e=Su(e),Sh(e)}var dc=null;function Sh(e){if(dc=null,e=W(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=f(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return dc=e,null}function X0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Et()){case pt:return 2;case Xt:return 8;case wt:case Ft:return 32;case ge:return 268435456;default:return 32}default:return 32}}var Mh=!1,Ba=null,Ia=null,Fa=null,Xo=new Map,jo=new Map,Ha=[],vS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function j0(e,n){switch(e){case"focusin":case"focusout":Ba=null;break;case"dragenter":case"dragleave":Ia=null;break;case"mouseover":case"mouseout":Fa=null;break;case"pointerover":case"pointerout":Xo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":jo.delete(n.pointerId)}}function Wo(e,n,a,o,u,h){return e===null||e.nativeEvent!==h?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:h,targetContainers:[u]},n!==null&&(n=at(n),n!==null&&V0(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function xS(e,n,a,o,u){switch(n){case"focusin":return Ba=Wo(Ba,e,n,a,o,u),!0;case"dragenter":return Ia=Wo(Ia,e,n,a,o,u),!0;case"mouseover":return Fa=Wo(Fa,e,n,a,o,u),!0;case"pointerover":var h=u.pointerId;return Xo.set(h,Wo(Xo.get(h)||null,e,n,a,o,u)),!0;case"gotpointercapture":return h=u.pointerId,jo.set(h,Wo(jo.get(h)||null,e,n,a,o,u)),!0}return!1}function W0(e){var n=W(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){e.blockedOn=n,is(e.priority,function(){k0(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,is(e.priority,function(){k0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function pc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=yh(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);yu=o,a.target.dispatchEvent(o),yu=null}else return n=at(a),n!==null&&V0(n),e.blockedOn=a,!1;n.shift()}return!0}function Y0(e,n,a){pc(e)&&a.delete(n)}function yS(){Mh=!1,Ba!==null&&pc(Ba)&&(Ba=null),Ia!==null&&pc(Ia)&&(Ia=null),Fa!==null&&pc(Fa)&&(Fa=null),Xo.forEach(Y0),jo.forEach(Y0)}function mc(e,n){e.blockedOn===n&&(e.blockedOn=null,Mh||(Mh=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,yS)))}var gc=null;function q0(e){gc!==e&&(gc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){gc===e&&(gc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(Sh(o||a)===null)continue;break}var h=at(a);h!==null&&(e.splice(n,3),n-=3,yf(h,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function _r(e){function n(F){return mc(F,e)}Ba!==null&&mc(Ba,e),Ia!==null&&mc(Ia,e),Fa!==null&&mc(Fa,e),Xo.forEach(n),jo.forEach(n);for(var a=0;a<Ha.length;a++){var o=Ha[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Ha.length&&(a=Ha[0],a.blockedOn===null);)W0(a),a.blockedOn===null&&Ha.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],h=a[o+1],y=u[Tn]||null;if(typeof h=="function")y||q0(a);else if(y){var A=null;if(h&&h.hasAttribute("formAction")){if(u=h,y=h[Tn]||null)A=y.formAction;else if(Sh(u)!==null)continue}else A=y.action;typeof A=="function"?a[o+1]=A:(a.splice(o,3),o-=3),q0(a)}}}function Z0(){function e(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(y){return u=y})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Eh(e){this._internalRoot=e}_c.prototype.render=Eh.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=ai();H0(a,o,e,n,null,null)},_c.prototype.unmount=Eh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;H0(e.current,2,null,e,null,null),Ql(),n[ki]=null}};function _c(e){this._internalRoot=e}_c.prototype.unstable_scheduleHydration=function(e){if(e){var n=io();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Ha.length&&n!==0&&n<Ha[a].priority;a++);Ha.splice(a,0,e),a===0&&W0(e)}};var K0=t.version;if(K0!=="19.2.8")throw Error(s(527,K0,"19.2.8"));Y.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var SS={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vc.isDisabled&&vc.supportsFiber)try{qt=vc.inject(SS),Yt=vc}catch{}}return qo.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=ig,h=ag,y=sg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError)),n=I0(e,1,!1,null,null,a,o,null,u,h,y,Z0),e[ki]=n.current,ah(e),new Eh(n)},qo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",h=ig,y=ag,A=sg,F=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(y=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(F=a.formState)),n=I0(e,1,!0,n,a??null,o,u,F,h,y,A,Z0),n.context=F0(null),a=n.current,o=ai(),o=ns(o),u=Ta(o),u.callback=null,Aa(a,u,o),a=o,n.current.lanes=a,bn(n,a),Bi(n),e[ki]=n.current,ah(e),new _c(n)},qo.version="19.2.8",qo}var r_;function US(){if(r_)return Ah.exports;r_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Ah.exports=DS(),Ah.exports}var LS=US();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NS=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),bv=(...r)=>r.filter((t,i,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===i).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var OS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zS=Qt.forwardRef(({color:r="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:c,iconNode:f,...d},m)=>Qt.createElement("svg",{ref:m,...OS,width:t,height:t,stroke:r,strokeWidth:s?Number(i)*24/Number(t):i,className:bv("lucide",l),...d},[...f.map(([p,g])=>Qt.createElement(p,g)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xn=(r,t)=>{const i=Qt.forwardRef(({className:s,...l},c)=>Qt.createElement(zS,{ref:c,iconNode:t,className:bv(`lucide-${NS(r)}`,s),...l}));return i.displayName=`${r}`,i};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PS=xn("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BS=xn("Brush",[["path",{d:"m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08",key:"1styjt"}],["path",{d:"M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z",key:"z0l1mu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o_=xn("CircleHelp",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IS=xn("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FS=xn("Eraser",[["path",{d:"m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21",key:"182aya"}],["path",{d:"M22 21H7",key:"t4ddhn"}],["path",{d:"m5 11 9 9",key:"1mo9qw"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tv=xn("FileDown",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M12 18v-6",key:"17g6i2"}],["path",{d:"m9 15 3 3 3-3",key:"1npd3o"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HS=xn("Focus",[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GS=xn("FolderOpen",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qc=xn("Gamepad2",[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VS=xn("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Av=xn("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kS=xn("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XS=xn("Redo2",[["path",{d:"m15 14 5-5-5-5",key:"12vg1m"}],["path",{d:"M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13",key:"6uklza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jS=xn("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $d=xn("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rv=xn("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WS=xn("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YS=xn("Undo2",[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",key:"f3b9sd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qS=xn("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const tp="171",ga={ROTATE:0,DOLLY:1,PAN:2},zr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ZS=0,l_=1,KS=2,Cv=1,wv=2,pa=3,$a=0,Kn=1,Fi=2,Ka=0,Br=1,c_=2,u_=3,f_=4,QS=5,ws=100,JS=101,$S=102,tM=103,eM=104,nM=200,iM=201,aM=202,sM=203,cd=204,ud=205,rM=206,oM=207,lM=208,cM=209,uM=210,fM=211,hM=212,dM=213,pM=214,fd=0,hd=1,dd=2,Vr=3,pd=4,md=5,gd=6,_d=7,Dv=0,mM=1,gM=2,Qa=0,_M=1,vM=2,xM=3,yM=4,SM=5,MM=6,EM=7,Uv=300,kr=301,Xr=302,vd=303,xd=304,hu=306,yd=1e3,Us=1001,Sd=1002,li=1003,bM=1004,xc=1005,Hi=1006,Dh=1007,Ls=1008,va=1009,Lv=1010,Nv=1011,sl=1012,ep=1013,Ns=1014,Gi=1015,ll=1016,np=1017,ip=1018,jr=1020,Ov=35902,zv=1021,Pv=1022,Di=1023,Bv=1024,Iv=1025,Ir=1026,Wr=1027,ap=1028,sp=1029,Fv=1030,rp=1031,op=1033,Jc=33776,$c=33777,tu=33778,eu=33779,Md=35840,Ed=35841,bd=35842,Td=35843,Ad=36196,Rd=37492,Cd=37496,wd=37808,Dd=37809,Ud=37810,Ld=37811,Nd=37812,Od=37813,zd=37814,Pd=37815,Bd=37816,Id=37817,Fd=37818,Hd=37819,Gd=37820,Vd=37821,nu=36492,kd=36494,Xd=36495,Hv=36283,jd=36284,Wd=36285,Yd=36286,TM=3200,AM=3201,Gv=0,RM=1,Za="",oi="srgb",Yr="srgb-linear",ru="linear",ke="srgb",vr=7680,h_=519,CM=512,wM=513,DM=514,Vv=515,UM=516,LM=517,NM=518,OM=519,d_=35044,p_=35048,m_="300 es",ma=2e3,ou=2001;class Ps{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){if(this._listeners===void 0)return!1;const s=this._listeners;return s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){if(this._listeners===void 0)return;const l=this._listeners[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const s=this._listeners[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,t);t.target=null}}}const Nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let g_=1234567;const Fr=Math.PI/180,rl=180/Math.PI;function Kr(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Nn[r&255]+Nn[r>>8&255]+Nn[r>>16&255]+Nn[r>>24&255]+"-"+Nn[t&255]+Nn[t>>8&255]+"-"+Nn[t>>16&15|64]+Nn[t>>24&255]+"-"+Nn[i&63|128]+Nn[i>>8&255]+"-"+Nn[i>>16&255]+Nn[i>>24&255]+Nn[s&255]+Nn[s>>8&255]+Nn[s>>16&255]+Nn[s>>24&255]).toLowerCase()}function _e(r,t,i){return Math.max(t,Math.min(i,r))}function lp(r,t){return(r%t+t)%t}function zM(r,t,i,s,l){return s+(r-t)*(l-s)/(i-t)}function PM(r,t,i){return r!==t?(i-r)/(t-r):0}function al(r,t,i){return(1-i)*r+i*t}function BM(r,t,i,s){return al(r,t,1-Math.exp(-i*s))}function IM(r,t=1){return t-Math.abs(lp(r,t*2)-t)}function FM(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*(3-2*r))}function HM(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*r*(r*(r*6-15)+10))}function GM(r,t){return r+Math.floor(Math.random()*(t-r+1))}function VM(r,t){return r+Math.random()*(t-r)}function kM(r){return r*(.5-Math.random())}function XM(r){r!==void 0&&(g_=r);let t=g_+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function jM(r){return r*Fr}function WM(r){return r*rl}function YM(r){return(r&r-1)===0&&r!==0}function qM(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function ZM(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function KM(r,t,i,s,l){const c=Math.cos,f=Math.sin,d=c(i/2),m=f(i/2),p=c((t+s)/2),g=f((t+s)/2),_=c((t-s)/2),x=f((t-s)/2),M=c((s-t)/2),E=f((s-t)/2);switch(l){case"XYX":r.set(d*g,m*_,m*x,d*p);break;case"YZY":r.set(m*x,d*g,m*_,d*p);break;case"ZXZ":r.set(m*_,m*x,d*g,d*p);break;case"XZX":r.set(d*g,m*E,m*M,d*p);break;case"YXY":r.set(m*M,d*g,m*E,d*p);break;case"ZYZ":r.set(m*E,m*M,d*g,d*p);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Nr(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Fn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const kv={DEG2RAD:Fr,RAD2DEG:rl,generateUUID:Kr,clamp:_e,euclideanModulo:lp,mapLinear:zM,inverseLerp:PM,lerp:al,damp:BM,pingpong:IM,smoothstep:FM,smootherstep:HM,randInt:GM,randFloat:VM,randFloatSpread:kM,seededRandom:XM,degToRad:jM,radToDeg:WM,isPowerOfTwo:YM,ceilPowerOfTwo:qM,floorPowerOfTwo:ZM,setQuaternionFromProperEuler:KM,normalize:Fn,denormalize:Nr};class re{constructor(t=0,i=0){re.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=_e(this.x,t.x,i.x),this.y=_e(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=_e(this.x,t,i),this.y=_e(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(_e(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(_e(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,f=this.y-t.y;return this.x=c*s-f*l+t.x,this.y=c*l+f*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class fe{constructor(t,i,s,l,c,f,d,m,p){fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,d,m,p)}set(t,i,s,l,c,f,d,m,p){const g=this.elements;return g[0]=t,g[1]=l,g[2]=d,g[3]=i,g[4]=c,g[5]=m,g[6]=s,g[7]=f,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],d=s[3],m=s[6],p=s[1],g=s[4],_=s[7],x=s[2],M=s[5],E=s[8],b=l[0],S=l[3],v=l[6],z=l[1],L=l[4],U=l[7],k=l[2],H=l[5],B=l[8];return c[0]=f*b+d*z+m*k,c[3]=f*S+d*L+m*H,c[6]=f*v+d*U+m*B,c[1]=p*b+g*z+_*k,c[4]=p*S+g*L+_*H,c[7]=p*v+g*U+_*B,c[2]=x*b+M*z+E*k,c[5]=x*S+M*L+E*H,c[8]=x*v+M*U+E*B,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],d=t[5],m=t[6],p=t[7],g=t[8];return i*f*g-i*d*p-s*c*g+s*d*m+l*c*p-l*f*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],d=t[5],m=t[6],p=t[7],g=t[8],_=g*f-d*p,x=d*m-g*c,M=p*c-f*m,E=i*_+s*x+l*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/E;return t[0]=_*b,t[1]=(l*p-g*s)*b,t[2]=(d*s-l*f)*b,t[3]=x*b,t[4]=(g*i-l*m)*b,t[5]=(l*c-d*i)*b,t[6]=M*b,t[7]=(s*m-p*i)*b,t[8]=(f*i-s*c)*b,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,f,d){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*f+p*d)+f+t,-l*p,l*m,-l*(-p*f+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(Uh.makeScale(t,i)),this}rotate(t){return this.premultiply(Uh.makeRotation(-t)),this}translate(t,i){return this.premultiply(Uh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Uh=new fe;function Xv(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function lu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function QM(){const r=lu("canvas");return r.style.display="block",r}const __={};function Or(r){r in __||(__[r]=!0,console.warn(r))}function JM(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}function $M(r){const t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function t1(r){const t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const v_=new fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),x_=new fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function e1(){const r={enabled:!0,workingColorSpace:Yr,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===ke&&(l.r=_a(l.r),l.g=_a(l.g),l.b=_a(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===ke&&(l.r=Hr(l.r),l.g=Hr(l.g),l.b=Hr(l.b))),l},fromWorkingColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},toWorkingColorSpace:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Za?ru:this.spaces[l].transfer},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Yr]:{primaries:t,whitePoint:s,transfer:ru,toXYZ:v_,fromXYZ:x_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:oi},outputColorSpaceConfig:{drawingBufferColorSpace:oi}},[oi]:{primaries:t,whitePoint:s,transfer:ke,toXYZ:v_,fromXYZ:x_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:oi}}}),r}const Le=e1();function _a(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Hr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let xr;class n1{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{xr===void 0&&(xr=lu("canvas")),xr.width=t.width,xr.height=t.height;const s=xr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=xr}return i.width>2048||i.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),i.toDataURL("image/jpeg",.6)):i.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=lu("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=_a(c[f]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(_a(i[s]/255)*255):i[s]=_a(i[s]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let i1=0;class jv{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:i1++}),this.uuid=Kr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,d=l.length;f<d;f++)l[f].isDataTexture?c.push(Lh(l[f].image)):c.push(Lh(l[f]))}else c=Lh(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function Lh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?n1.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let a1=0;class Gn extends Ps{constructor(t=Gn.DEFAULT_IMAGE,i=Gn.DEFAULT_MAPPING,s=Us,l=Us,c=Hi,f=Ls,d=Di,m=va,p=Gn.DEFAULT_ANISOTROPY,g=Za){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:a1++}),this.uuid=Kr(),this.name="",this.source=new jv(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Uv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case yd:t.x=t.x-Math.floor(t.x);break;case Us:t.x=t.x<0?0:1;break;case Sd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case yd:t.y=t.y-Math.floor(t.y);break;case Us:t.y=t.y<0?0:1;break;case Sd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Gn.DEFAULT_IMAGE=null;Gn.DEFAULT_MAPPING=Uv;Gn.DEFAULT_ANISOTROPY=1;class en{constructor(t=0,i=0,s=0,l=1){en.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,f=t.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,p=m[0],g=m[4],_=m[8],x=m[1],M=m[5],E=m[9],b=m[2],S=m[6],v=m[10];if(Math.abs(g-x)<.01&&Math.abs(_-b)<.01&&Math.abs(E-S)<.01){if(Math.abs(g+x)<.1&&Math.abs(_+b)<.1&&Math.abs(E+S)<.1&&Math.abs(p+M+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(p+1)/2,U=(M+1)/2,k=(v+1)/2,H=(g+x)/4,B=(_+b)/4,X=(E+S)/4;return L>U&&L>k?L<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(L),l=H/s,c=B/s):U>k?U<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(U),s=H/l,c=X/l):k<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(k),s=B/c,l=X/c),this.set(s,l,c,i),this}let z=Math.sqrt((S-E)*(S-E)+(_-b)*(_-b)+(x-g)*(x-g));return Math.abs(z)<.001&&(z=1),this.x=(S-E)/z,this.y=(_-b)/z,this.z=(x-g)/z,this.w=Math.acos((p+M+v-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=_e(this.x,t.x,i.x),this.y=_e(this.y,t.y,i.y),this.z=_e(this.z,t.z,i.z),this.w=_e(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=_e(this.x,t,i),this.y=_e(this.y,t,i),this.z=_e(this.z,t,i),this.w=_e(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(_e(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class s1 extends Ps{constructor(t=1,i=1,s={}){super(),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=1,this.scissor=new en(0,0,t,i),this.scissorTest=!1,this.viewport=new en(0,0,t,i);const l={width:t,height:i,depth:1};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Hi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},s);const c=new Gn(l,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);c.flipY=!1,c.generateMipmaps=s.generateMipmaps,c.internalFormat=s.internalFormat,this.textures=[];const f=s.count;for(let d=0;d<f;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this.depthTexture=s.depthTexture,this.samples=s.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let s=0,l=t.textures.length;s<l;s++)this.textures[s]=t.textures[s].clone(),this.textures[s].isRenderTargetTexture=!0;const i=Object.assign({},t.texture.image);return this.texture.source=new jv(i),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Os extends s1{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class Wv extends Gn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=li,this.minFilter=li,this.wrapR=Us,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class r1 extends Gn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=li,this.minFilter=li,this.wrapR=Us,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zs{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,f,d){let m=s[l+0],p=s[l+1],g=s[l+2],_=s[l+3];const x=c[f+0],M=c[f+1],E=c[f+2],b=c[f+3];if(d===0){t[i+0]=m,t[i+1]=p,t[i+2]=g,t[i+3]=_;return}if(d===1){t[i+0]=x,t[i+1]=M,t[i+2]=E,t[i+3]=b;return}if(_!==b||m!==x||p!==M||g!==E){let S=1-d;const v=m*x+p*M+g*E+_*b,z=v>=0?1:-1,L=1-v*v;if(L>Number.EPSILON){const k=Math.sqrt(L),H=Math.atan2(k,v*z);S=Math.sin(S*H)/k,d=Math.sin(d*H)/k}const U=d*z;if(m=m*S+x*U,p=p*S+M*U,g=g*S+E*U,_=_*S+b*U,S===1-d){const k=1/Math.sqrt(m*m+p*p+g*g+_*_);m*=k,p*=k,g*=k,_*=k}}t[i]=m,t[i+1]=p,t[i+2]=g,t[i+3]=_}static multiplyQuaternionsFlat(t,i,s,l,c,f){const d=s[l],m=s[l+1],p=s[l+2],g=s[l+3],_=c[f],x=c[f+1],M=c[f+2],E=c[f+3];return t[i]=d*E+g*_+m*M-p*x,t[i+1]=m*E+g*x+p*_-d*M,t[i+2]=p*E+g*M+d*x-m*_,t[i+3]=g*E-d*_-m*x-p*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,f=t._order,d=Math.cos,m=Math.sin,p=d(s/2),g=d(l/2),_=d(c/2),x=m(s/2),M=m(l/2),E=m(c/2);switch(f){case"XYZ":this._x=x*g*_+p*M*E,this._y=p*M*_-x*g*E,this._z=p*g*E+x*M*_,this._w=p*g*_-x*M*E;break;case"YXZ":this._x=x*g*_+p*M*E,this._y=p*M*_-x*g*E,this._z=p*g*E-x*M*_,this._w=p*g*_+x*M*E;break;case"ZXY":this._x=x*g*_-p*M*E,this._y=p*M*_+x*g*E,this._z=p*g*E+x*M*_,this._w=p*g*_-x*M*E;break;case"ZYX":this._x=x*g*_-p*M*E,this._y=p*M*_+x*g*E,this._z=p*g*E-x*M*_,this._w=p*g*_+x*M*E;break;case"YZX":this._x=x*g*_+p*M*E,this._y=p*M*_+x*g*E,this._z=p*g*E-x*M*_,this._w=p*g*_-x*M*E;break;case"XZY":this._x=x*g*_-p*M*E,this._y=p*M*_-x*g*E,this._z=p*g*E+x*M*_,this._w=p*g*_+x*M*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],f=i[1],d=i[5],m=i[9],p=i[2],g=i[6],_=i[10],x=s+d+_;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(g-m)*M,this._y=(c-p)*M,this._z=(f-l)*M}else if(s>d&&s>_){const M=2*Math.sqrt(1+s-d-_);this._w=(g-m)/M,this._x=.25*M,this._y=(l+f)/M,this._z=(c+p)/M}else if(d>_){const M=2*Math.sqrt(1+d-s-_);this._w=(c-p)/M,this._x=(l+f)/M,this._y=.25*M,this._z=(m+g)/M}else{const M=2*Math.sqrt(1+_-s-d);this._w=(f-l)/M,this._x=(c+p)/M,this._y=(m+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<Number.EPSILON?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(_e(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,f=t._w,d=i._x,m=i._y,p=i._z,g=i._w;return this._x=s*g+f*d+l*p-c*m,this._y=l*g+f*m+c*d-s*p,this._z=c*g+f*p+s*m-l*d,this._w=f*g-s*d-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const s=this._x,l=this._y,c=this._z,f=this._w;let d=f*t._w+s*t._x+l*t._y+c*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=f,this._x=s,this._y=l,this._z=c,this;const m=1-d*d;if(m<=Number.EPSILON){const M=1-i;return this._w=M*f+i*this._w,this._x=M*s+i*this._x,this._y=M*l+i*this._y,this._z=M*c+i*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,d),_=Math.sin((1-i)*g)/p,x=Math.sin(i*g)/p;return this._w=f*_+this._w*x,this._x=s*_+this._x*x,this._y=l*_+this._y*x,this._z=c*_+this._z*x,this._onChangeCallback(),this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class J{constructor(t=0,i=0,s=0){J.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(y_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(y_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,f=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,f=t.y,d=t.z,m=t.w,p=2*(f*l-d*s),g=2*(d*i-c*l),_=2*(c*s-f*i);return this.x=i+m*p+f*_-d*g,this.y=s+m*g+d*p-c*_,this.z=l+m*_+c*g-f*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=_e(this.x,t.x,i.x),this.y=_e(this.y,t.y,i.y),this.z=_e(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=_e(this.x,t,i),this.y=_e(this.y,t,i),this.z=_e(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(_e(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,f=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*f-s*m,this.z=s*d-l*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Nh.copy(this).projectOnVector(t),this.sub(Nh)}reflect(t){return this.sub(Nh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(_e(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Nh=new J,y_=new zs;class Bs{constructor(t=new J(1/0,1/0,1/0),i=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Ai.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Ai.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Ai.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,d=c.count;f<d;f++)t.isMesh===!0?t.getVertexPosition(f,Ai):Ai.fromBufferAttribute(c,f),Ai.applyMatrix4(t.matrixWorld),this.expandByPoint(Ai);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),yc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),yc.copy(s.boundingBox)),yc.applyMatrix4(t.matrixWorld),this.union(yc)}const l=t.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ai),Ai.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Zo),Sc.subVectors(this.max,Zo),yr.subVectors(t.a,Zo),Sr.subVectors(t.b,Zo),Mr.subVectors(t.c,Zo),Va.subVectors(Sr,yr),ka.subVectors(Mr,Sr),Ms.subVectors(yr,Mr);let i=[0,-Va.z,Va.y,0,-ka.z,ka.y,0,-Ms.z,Ms.y,Va.z,0,-Va.x,ka.z,0,-ka.x,Ms.z,0,-Ms.x,-Va.y,Va.x,0,-ka.y,ka.x,0,-Ms.y,Ms.x,0];return!Oh(i,yr,Sr,Mr,Sc)||(i=[1,0,0,0,1,0,0,0,1],!Oh(i,yr,Sr,Mr,Sc))?!1:(Mc.crossVectors(Va,ka),i=[Mc.x,Mc.y,Mc.z],Oh(i,yr,Sr,Mr,Sc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ai).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ai).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(la[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),la[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),la[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),la[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),la[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),la[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),la[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),la[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(la),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const la=[new J,new J,new J,new J,new J,new J,new J,new J],Ai=new J,yc=new Bs,yr=new J,Sr=new J,Mr=new J,Va=new J,ka=new J,Ms=new J,Zo=new J,Sc=new J,Mc=new J,Es=new J;function Oh(r,t,i,s,l){for(let c=0,f=r.length-3;c<=f;c+=3){Es.fromArray(r,c);const d=l.x*Math.abs(Es.x)+l.y*Math.abs(Es.y)+l.z*Math.abs(Es.z),m=t.dot(Es),p=i.dot(Es),g=s.dot(Es);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const o1=new Bs,Ko=new J,zh=new J;class Qr{constructor(t=new J,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):o1.setFromPoints(t).getCenter(s);let l=0;for(let c=0,f=t.length;c<f;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ko.subVectors(t,this.center);const i=Ko.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Ko,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(zh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ko.copy(t.center).add(zh)),this.expandByPoint(Ko.copy(t.center).sub(zh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ca=new J,Ph=new J,Ec=new J,Xa=new J,Bh=new J,bc=new J,Ih=new J;class du{constructor(t=new J,i=new J(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ca)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ca.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ca.copy(this.origin).addScaledVector(this.direction,i),ca.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){Ph.copy(t).add(i).multiplyScalar(.5),Ec.copy(i).sub(t).normalize(),Xa.copy(this.origin).sub(Ph);const c=t.distanceTo(i)*.5,f=-this.direction.dot(Ec),d=Xa.dot(this.direction),m=-Xa.dot(Ec),p=Xa.lengthSq(),g=Math.abs(1-f*f);let _,x,M,E;if(g>0)if(_=f*m-d,x=f*d-m,E=c*g,_>=0)if(x>=-E)if(x<=E){const b=1/g;_*=b,x*=b,M=_*(_+f*x+2*d)+x*(f*_+x+2*m)+p}else x=c,_=Math.max(0,-(f*x+d)),M=-_*_+x*(x+2*m)+p;else x=-c,_=Math.max(0,-(f*x+d)),M=-_*_+x*(x+2*m)+p;else x<=-E?(_=Math.max(0,-(-f*c+d)),x=_>0?-c:Math.min(Math.max(-c,-m),c),M=-_*_+x*(x+2*m)+p):x<=E?(_=0,x=Math.min(Math.max(-c,-m),c),M=x*(x+2*m)+p):(_=Math.max(0,-(f*c+d)),x=_>0?c:Math.min(Math.max(-c,-m),c),M=-_*_+x*(x+2*m)+p);else x=f>0?-c:c,_=Math.max(0,-(f*x+d)),M=-_*_+x*(x+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(Ph).addScaledVector(Ec,x),M}intersectSphere(t,i){ca.subVectors(t.center,this.origin);const s=ca.dot(this.direction),l=ca.dot(ca)-s*s,c=t.radius*t.radius;if(l>c)return null;const f=Math.sqrt(c-l),d=s-f,m=s+f;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,f,d,m;const p=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,x=this.origin;return p>=0?(s=(t.min.x-x.x)*p,l=(t.max.x-x.x)*p):(s=(t.max.x-x.x)*p,l=(t.min.x-x.x)*p),g>=0?(c=(t.min.y-x.y)*g,f=(t.max.y-x.y)*g):(c=(t.max.y-x.y)*g,f=(t.min.y-x.y)*g),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),_>=0?(d=(t.min.z-x.z)*_,m=(t.max.z-x.z)*_):(d=(t.max.z-x.z)*_,m=(t.min.z-x.z)*_),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,ca)!==null}intersectTriangle(t,i,s,l,c){Bh.subVectors(i,t),bc.subVectors(s,t),Ih.crossVectors(Bh,bc);let f=this.direction.dot(Ih),d;if(f>0){if(l)return null;d=1}else if(f<0)d=-1,f=-f;else return null;Xa.subVectors(this.origin,t);const m=d*this.direction.dot(bc.crossVectors(Xa,bc));if(m<0)return null;const p=d*this.direction.dot(Bh.cross(Xa));if(p<0||m+p>f)return null;const g=-d*Xa.dot(Ih);return g<0?null:this.at(g/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ie{constructor(t,i,s,l,c,f,d,m,p,g,_,x,M,E,b,S){Ie.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,d,m,p,g,_,x,M,E,b,S)}set(t,i,s,l,c,f,d,m,p,g,_,x,M,E,b,S){const v=this.elements;return v[0]=t,v[4]=i,v[8]=s,v[12]=l,v[1]=c,v[5]=f,v[9]=d,v[13]=m,v[2]=p,v[6]=g,v[10]=_,v[14]=x,v[3]=M,v[7]=E,v[11]=b,v[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ie().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,s=t.elements,l=1/Er.setFromMatrixColumn(t,0).length(),c=1/Er.setFromMatrixColumn(t,1).length(),f=1/Er.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,f=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),g=Math.cos(c),_=Math.sin(c);if(t.order==="XYZ"){const x=f*g,M=f*_,E=d*g,b=d*_;i[0]=m*g,i[4]=-m*_,i[8]=p,i[1]=M+E*p,i[5]=x-b*p,i[9]=-d*m,i[2]=b-x*p,i[6]=E+M*p,i[10]=f*m}else if(t.order==="YXZ"){const x=m*g,M=m*_,E=p*g,b=p*_;i[0]=x+b*d,i[4]=E*d-M,i[8]=f*p,i[1]=f*_,i[5]=f*g,i[9]=-d,i[2]=M*d-E,i[6]=b+x*d,i[10]=f*m}else if(t.order==="ZXY"){const x=m*g,M=m*_,E=p*g,b=p*_;i[0]=x-b*d,i[4]=-f*_,i[8]=E+M*d,i[1]=M+E*d,i[5]=f*g,i[9]=b-x*d,i[2]=-f*p,i[6]=d,i[10]=f*m}else if(t.order==="ZYX"){const x=f*g,M=f*_,E=d*g,b=d*_;i[0]=m*g,i[4]=E*p-M,i[8]=x*p+b,i[1]=m*_,i[5]=b*p+x,i[9]=M*p-E,i[2]=-p,i[6]=d*m,i[10]=f*m}else if(t.order==="YZX"){const x=f*m,M=f*p,E=d*m,b=d*p;i[0]=m*g,i[4]=b-x*_,i[8]=E*_+M,i[1]=_,i[5]=f*g,i[9]=-d*g,i[2]=-p*g,i[6]=M*_+E,i[10]=x-b*_}else if(t.order==="XZY"){const x=f*m,M=f*p,E=d*m,b=d*p;i[0]=m*g,i[4]=-_,i[8]=p*g,i[1]=x*_+b,i[5]=f*g,i[9]=M*_-E,i[2]=E*_-M,i[6]=d*g,i[10]=b*_+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(l1,t,c1)}lookAt(t,i,s){const l=this.elements;return si.subVectors(t,i),si.lengthSq()===0&&(si.z=1),si.normalize(),ja.crossVectors(s,si),ja.lengthSq()===0&&(Math.abs(s.z)===1?si.x+=1e-4:si.z+=1e-4,si.normalize(),ja.crossVectors(s,si)),ja.normalize(),Tc.crossVectors(si,ja),l[0]=ja.x,l[4]=Tc.x,l[8]=si.x,l[1]=ja.y,l[5]=Tc.y,l[9]=si.y,l[2]=ja.z,l[6]=Tc.z,l[10]=si.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],d=s[4],m=s[8],p=s[12],g=s[1],_=s[5],x=s[9],M=s[13],E=s[2],b=s[6],S=s[10],v=s[14],z=s[3],L=s[7],U=s[11],k=s[15],H=l[0],B=l[4],X=l[8],D=l[12],C=l[1],I=l[5],ct=l[9],st=l[13],_t=l[2],mt=l[6],P=l[10],Y=l[14],Z=l[3],Mt=l[7],At=l[11],N=l[15];return c[0]=f*H+d*C+m*_t+p*Z,c[4]=f*B+d*I+m*mt+p*Mt,c[8]=f*X+d*ct+m*P+p*At,c[12]=f*D+d*st+m*Y+p*N,c[1]=g*H+_*C+x*_t+M*Z,c[5]=g*B+_*I+x*mt+M*Mt,c[9]=g*X+_*ct+x*P+M*At,c[13]=g*D+_*st+x*Y+M*N,c[2]=E*H+b*C+S*_t+v*Z,c[6]=E*B+b*I+S*mt+v*Mt,c[10]=E*X+b*ct+S*P+v*At,c[14]=E*D+b*st+S*Y+v*N,c[3]=z*H+L*C+U*_t+k*Z,c[7]=z*B+L*I+U*mt+k*Mt,c[11]=z*X+L*ct+U*P+k*At,c[15]=z*D+L*st+U*Y+k*N,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],f=t[1],d=t[5],m=t[9],p=t[13],g=t[2],_=t[6],x=t[10],M=t[14],E=t[3],b=t[7],S=t[11],v=t[15];return E*(+c*m*_-l*p*_-c*d*x+s*p*x+l*d*M-s*m*M)+b*(+i*m*M-i*p*x+c*f*x-l*f*M+l*p*g-c*m*g)+S*(+i*p*_-i*d*M-c*f*_+s*f*M+c*d*g-s*p*g)+v*(-l*d*g-i*m*_+i*d*x+l*f*_-s*f*x+s*m*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],d=t[5],m=t[6],p=t[7],g=t[8],_=t[9],x=t[10],M=t[11],E=t[12],b=t[13],S=t[14],v=t[15],z=_*S*p-b*x*p+b*m*M-d*S*M-_*m*v+d*x*v,L=E*x*p-g*S*p-E*m*M+f*S*M+g*m*v-f*x*v,U=g*b*p-E*_*p+E*d*M-f*b*M-g*d*v+f*_*v,k=E*_*m-g*b*m-E*d*x+f*b*x+g*d*S-f*_*S,H=i*z+s*L+l*U+c*k;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/H;return t[0]=z*B,t[1]=(b*x*c-_*S*c-b*l*M+s*S*M+_*l*v-s*x*v)*B,t[2]=(d*S*c-b*m*c+b*l*p-s*S*p-d*l*v+s*m*v)*B,t[3]=(_*m*c-d*x*c-_*l*p+s*x*p+d*l*M-s*m*M)*B,t[4]=L*B,t[5]=(g*S*c-E*x*c+E*l*M-i*S*M-g*l*v+i*x*v)*B,t[6]=(E*m*c-f*S*c-E*l*p+i*S*p+f*l*v-i*m*v)*B,t[7]=(f*x*c-g*m*c+g*l*p-i*x*p-f*l*M+i*m*M)*B,t[8]=U*B,t[9]=(E*_*c-g*b*c-E*s*M+i*b*M+g*s*v-i*_*v)*B,t[10]=(f*b*c-E*d*c+E*s*p-i*b*p-f*s*v+i*d*v)*B,t[11]=(g*d*c-f*_*c-g*s*p+i*_*p+f*s*M-i*d*M)*B,t[12]=k*B,t[13]=(g*b*l-E*_*l+E*s*x-i*b*x-g*s*S+i*_*S)*B,t[14]=(E*d*l-f*b*l-E*s*m+i*b*m+f*s*S-i*d*S)*B,t[15]=(f*_*l-g*d*l+g*s*m-i*_*m-f*s*x+i*d*x)*B,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,f=t.x,d=t.y,m=t.z,p=c*f,g=c*d;return this.set(p*f+s,p*d-l*m,p*m+l*d,0,p*d+l*m,g*d+s,g*m-l*f,0,p*m-l*d,g*m+l*f,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,f){return this.set(1,s,c,0,t,1,f,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,f=i._y,d=i._z,m=i._w,p=c+c,g=f+f,_=d+d,x=c*p,M=c*g,E=c*_,b=f*g,S=f*_,v=d*_,z=m*p,L=m*g,U=m*_,k=s.x,H=s.y,B=s.z;return l[0]=(1-(b+v))*k,l[1]=(M+U)*k,l[2]=(E-L)*k,l[3]=0,l[4]=(M-U)*H,l[5]=(1-(x+v))*H,l[6]=(S+z)*H,l[7]=0,l[8]=(E+L)*B,l[9]=(S-z)*B,l[10]=(1-(x+b))*B,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;let c=Er.set(l[0],l[1],l[2]).length();const f=Er.set(l[4],l[5],l[6]).length(),d=Er.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],Ri.copy(this);const p=1/c,g=1/f,_=1/d;return Ri.elements[0]*=p,Ri.elements[1]*=p,Ri.elements[2]*=p,Ri.elements[4]*=g,Ri.elements[5]*=g,Ri.elements[6]*=g,Ri.elements[8]*=_,Ri.elements[9]*=_,Ri.elements[10]*=_,i.setFromRotationMatrix(Ri),s.x=c,s.y=f,s.z=d,this}makePerspective(t,i,s,l,c,f,d=ma){const m=this.elements,p=2*c/(i-t),g=2*c/(s-l),_=(i+t)/(i-t),x=(s+l)/(s-l);let M,E;if(d===ma)M=-(f+c)/(f-c),E=-2*f*c/(f-c);else if(d===ou)M=-f/(f-c),E=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=p,m[4]=0,m[8]=_,m[12]=0,m[1]=0,m[5]=g,m[9]=x,m[13]=0,m[2]=0,m[6]=0,m[10]=M,m[14]=E,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(t,i,s,l,c,f,d=ma){const m=this.elements,p=1/(i-t),g=1/(s-l),_=1/(f-c),x=(i+t)*p,M=(s+l)*g;let E,b;if(d===ma)E=(f+c)*_,b=-2*_;else if(d===ou)E=c*_,b=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-x,m[1]=0,m[5]=2*g,m[9]=0,m[13]=-M,m[2]=0,m[6]=0,m[10]=b,m[14]=-E,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const Er=new J,Ri=new Ie,l1=new J(0,0,0),c1=new J(1,1,1),ja=new J,Tc=new J,si=new J,S_=new Ie,M_=new zs;class Vi{constructor(t=0,i=0,s=0,l=Vi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],f=l[4],d=l[8],m=l[1],p=l[5],g=l[9],_=l[2],x=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(_e(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-_e(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(_e(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-_,M),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-_e(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(_e(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-_e(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-g,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return S_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(S_,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return M_.setFromEuler(this),this.setFromQuaternion(M_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vi.DEFAULT_ORDER="XYZ";class cp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let u1=0;const E_=new J,br=new zs,ua=new Ie,Ac=new J,Qo=new J,f1=new J,h1=new zs,b_=new J(1,0,0),T_=new J(0,1,0),A_=new J(0,0,1),R_={type:"added"},d1={type:"removed"},Tr={type:"childadded",child:null},Fh={type:"childremoved",child:null};class En extends Ps{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:u1++}),this.uuid=Kr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=En.DEFAULT_UP.clone();const t=new J,i=new Vi,s=new zs,l=new J(1,1,1);function c(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Ie},normalMatrix:{value:new fe}}),this.matrix=new Ie,this.matrixWorld=new Ie,this.matrixAutoUpdate=En.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return br.setFromAxisAngle(t,i),this.quaternion.multiply(br),this}rotateOnWorldAxis(t,i){return br.setFromAxisAngle(t,i),this.quaternion.premultiply(br),this}rotateX(t){return this.rotateOnAxis(b_,t)}rotateY(t){return this.rotateOnAxis(T_,t)}rotateZ(t){return this.rotateOnAxis(A_,t)}translateOnAxis(t,i){return E_.copy(t).applyQuaternion(this.quaternion),this.position.add(E_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(b_,t)}translateY(t){return this.translateOnAxis(T_,t)}translateZ(t){return this.translateOnAxis(A_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ua.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?Ac.copy(t):Ac.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Qo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ua.lookAt(Qo,Ac,this.up):ua.lookAt(Ac,Qo,this.up),this.quaternion.setFromRotationMatrix(ua),l&&(ua.extractRotation(l.matrixWorld),br.setFromRotationMatrix(ua),this.quaternion.premultiply(br.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(R_),Tr.child=t,this.dispatchEvent(Tr),Tr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(d1),Fh.child=t,this.dispatchEvent(Fh),Fh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ua.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ua.multiply(t.parent.matrixWorld)),t.applyMatrix4(ua),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(R_),Tr.child=t,this.dispatchEvent(Tr),Tr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qo,t,f1),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qo,h1,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const _=m[p];c(t.shapes,_)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(t.materials,this.material[m]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(t.animations,m))}}if(i){const d=f(t.geometries),m=f(t.materials),p=f(t.textures),g=f(t.images),_=f(t.shapes),x=f(t.skeletons),M=f(t.animations),E=f(t.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),g.length>0&&(s.images=g),_.length>0&&(s.shapes=_),x.length>0&&(s.skeletons=x),M.length>0&&(s.animations=M),E.length>0&&(s.nodes=E)}return s.object=l,s;function f(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}En.DEFAULT_UP=new J(0,1,0);En.DEFAULT_MATRIX_AUTO_UPDATE=!0;En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ci=new J,fa=new J,Hh=new J,ha=new J,Ar=new J,Rr=new J,C_=new J,Gh=new J,Vh=new J,kh=new J,Xh=new en,jh=new en,Wh=new en;class yi{constructor(t=new J,i=new J,s=new J){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Ci.subVectors(t,i),l.cross(Ci);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Ci.subVectors(l,i),fa.subVectors(s,i),Hh.subVectors(t,i);const f=Ci.dot(Ci),d=Ci.dot(fa),m=Ci.dot(Hh),p=fa.dot(fa),g=fa.dot(Hh),_=f*p-d*d;if(_===0)return c.set(0,0,0),null;const x=1/_,M=(p*m-d*g)*x,E=(f*g-d*m)*x;return c.set(1-M-E,E,M)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,ha)===null?!1:ha.x>=0&&ha.y>=0&&ha.x+ha.y<=1}static getInterpolation(t,i,s,l,c,f,d,m){return this.getBarycoord(t,i,s,l,ha)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ha.x),m.addScaledVector(f,ha.y),m.addScaledVector(d,ha.z),m)}static getInterpolatedAttribute(t,i,s,l,c,f){return Xh.setScalar(0),jh.setScalar(0),Wh.setScalar(0),Xh.fromBufferAttribute(t,i),jh.fromBufferAttribute(t,s),Wh.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(Xh,c.x),f.addScaledVector(jh,c.y),f.addScaledVector(Wh,c.z),f}static isFrontFacing(t,i,s,l){return Ci.subVectors(s,i),fa.subVectors(t,i),Ci.cross(fa).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ci.subVectors(this.c,this.b),fa.subVectors(this.a,this.b),Ci.cross(fa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return yi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return yi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return yi.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return yi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return yi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let f,d;Ar.subVectors(l,s),Rr.subVectors(c,s),Gh.subVectors(t,s);const m=Ar.dot(Gh),p=Rr.dot(Gh);if(m<=0&&p<=0)return i.copy(s);Vh.subVectors(t,l);const g=Ar.dot(Vh),_=Rr.dot(Vh);if(g>=0&&_<=g)return i.copy(l);const x=m*_-g*p;if(x<=0&&m>=0&&g<=0)return f=m/(m-g),i.copy(s).addScaledVector(Ar,f);kh.subVectors(t,c);const M=Ar.dot(kh),E=Rr.dot(kh);if(E>=0&&M<=E)return i.copy(c);const b=M*p-m*E;if(b<=0&&p>=0&&E<=0)return d=p/(p-E),i.copy(s).addScaledVector(Rr,d);const S=g*E-M*_;if(S<=0&&_-g>=0&&M-E>=0)return C_.subVectors(c,l),d=(_-g)/(_-g+(M-E)),i.copy(l).addScaledVector(C_,d);const v=1/(S+b+x);return f=b*v,d=x*v,i.copy(s).addScaledVector(Ar,f).addScaledVector(Rr,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Yv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wa={h:0,s:0,l:0},Rc={h:0,s:0,l:0};function Yh(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class me{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=oi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Le.toWorkingColorSpace(this,i),this}setRGB(t,i,s,l=Le.workingColorSpace){return this.r=t,this.g=i,this.b=s,Le.toWorkingColorSpace(this,l),this}setHSL(t,i,s,l=Le.workingColorSpace){if(t=lp(t,1),i=_e(i,0,1),s=_e(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,f=2*s-c;this.r=Yh(f,c,t+1/3),this.g=Yh(f,c,t),this.b=Yh(f,c,t-1/3)}return Le.toWorkingColorSpace(this,l),this}setStyle(t,i=oi){function s(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=l[1],d=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=oi){const s=Yv[t.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=_a(t.r),this.g=_a(t.g),this.b=_a(t.b),this}copyLinearToSRGB(t){return this.r=Hr(t.r),this.g=Hr(t.g),this.b=Hr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=oi){return Le.fromWorkingColorSpace(On.copy(this),t),Math.round(_e(On.r*255,0,255))*65536+Math.round(_e(On.g*255,0,255))*256+Math.round(_e(On.b*255,0,255))}getHexString(t=oi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Le.workingColorSpace){Le.fromWorkingColorSpace(On.copy(this),i);const s=On.r,l=On.g,c=On.b,f=Math.max(s,l,c),d=Math.min(s,l,c);let m,p;const g=(d+f)/2;if(d===f)m=0,p=0;else{const _=f-d;switch(p=g<=.5?_/(f+d):_/(2-f-d),f){case s:m=(l-c)/_+(l<c?6:0);break;case l:m=(c-s)/_+2;break;case c:m=(s-l)/_+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,i=Le.workingColorSpace){return Le.fromWorkingColorSpace(On.copy(this),i),t.r=On.r,t.g=On.g,t.b=On.b,t}getStyle(t=oi){Le.fromWorkingColorSpace(On.copy(this),t);const i=On.r,s=On.g,l=On.b;return t!==oi?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(Wa),this.setHSL(Wa.h+t,Wa.s+i,Wa.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(Wa),t.getHSL(Rc);const s=al(Wa.h,Rc.h,i),l=al(Wa.s,Rc.s,i),c=al(Wa.l,Rc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const On=new me;me.NAMES=Yv;let p1=0;class Jr extends Ps{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:p1++}),this.uuid=Kr(),this.name="",this.type="Material",this.blending=Br,this.side=$a,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cd,this.blendDst=ud,this.blendEquation=ws,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new me(0,0,0),this.blendAlpha=0,this.depthFunc=Vr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=h_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vr,this.stencilZFail=vr,this.stencilZPass=vr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Br&&(s.blending=this.blending),this.side!==$a&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==cd&&(s.blendSrc=this.blendSrc),this.blendDst!==ud&&(s.blendDst=this.blendDst),this.blendEquation!==ws&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Vr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==h_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==vr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==vr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const d in c){const m=c[d];delete m.metadata,f.push(m)}return f}if(i){const c=l(t.textures),f=l(t.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class up extends Jr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.combine=Dv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const hn=new J,Cc=new re;class Ui{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=d_,this.updateRanges=[],this.gpuType=Gi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Cc.fromBufferAttribute(this,i),Cc.applyMatrix3(t),this.setXY(i,Cc.x,Cc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix3(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix4(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.applyNormalMatrix(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.transformDirection(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Nr(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Fn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Nr(i,this.array)),i}setX(t,i){return this.normalized&&(i=Fn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Nr(i,this.array)),i}setY(t,i){return this.normalized&&(i=Fn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Nr(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Fn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Nr(i,this.array)),i}setW(t,i){return this.normalized&&(i=Fn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Fn(i,this.array),s=Fn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Fn(i,this.array),s=Fn(s,this.array),l=Fn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=Fn(i,this.array),s=Fn(s,this.array),l=Fn(l,this.array),c=Fn(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==d_&&(t.usage=this.usage),t}}class qv extends Ui{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class Zv extends Ui{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class Dn extends Ui{constructor(t,i,s){super(new Float32Array(t),i,s)}}let m1=0;const _i=new Ie,qh=new En,Cr=new J,ri=new Bs,Jo=new Bs,Mn=new J;class Qn extends Ps{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:m1++}),this.uuid=Kr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Xv(t)?Zv:qv)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new fe().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return _i.makeRotationFromQuaternion(t),this.applyMatrix4(_i),this}rotateX(t){return _i.makeRotationX(t),this.applyMatrix4(_i),this}rotateY(t){return _i.makeRotationY(t),this.applyMatrix4(_i),this}rotateZ(t){return _i.makeRotationZ(t),this.applyMatrix4(_i),this}translate(t,i,s){return _i.makeTranslation(t,i,s),this.applyMatrix4(_i),this}scale(t,i,s){return _i.makeScale(t,i,s),this.applyMatrix4(_i),this}lookAt(t){return qh.lookAt(t),qh.updateMatrix(),this.applyMatrix4(qh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cr).negate(),this.translate(Cr.x,Cr.y,Cr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const f=t[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Dn(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bs);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];ri.setFromBufferAttribute(c),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,ri.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,ri.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint(ri.min),this.boundingBox.expandByPoint(ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qr);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(t){const s=this.boundingSphere.center;if(ri.setFromBufferAttribute(t),i)for(let c=0,f=i.length;c<f;c++){const d=i[c];Jo.setFromBufferAttribute(d),this.morphTargetsRelative?(Mn.addVectors(ri.min,Jo.min),ri.expandByPoint(Mn),Mn.addVectors(ri.max,Jo.max),ri.expandByPoint(Mn)):(ri.expandByPoint(Jo.min),ri.expandByPoint(Jo.max))}ri.getCenter(s);let l=0;for(let c=0,f=t.count;c<f;c++)Mn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(Mn));if(i)for(let c=0,f=i.length;c<f;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)Mn.fromBufferAttribute(d,p),m&&(Cr.fromBufferAttribute(t,p),Mn.add(Cr)),l=Math.max(l,s.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ui(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),d=[],m=[];for(let X=0;X<s.count;X++)d[X]=new J,m[X]=new J;const p=new J,g=new J,_=new J,x=new re,M=new re,E=new re,b=new J,S=new J;function v(X,D,C){p.fromBufferAttribute(s,X),g.fromBufferAttribute(s,D),_.fromBufferAttribute(s,C),x.fromBufferAttribute(c,X),M.fromBufferAttribute(c,D),E.fromBufferAttribute(c,C),g.sub(p),_.sub(p),M.sub(x),E.sub(x);const I=1/(M.x*E.y-E.x*M.y);isFinite(I)&&(b.copy(g).multiplyScalar(E.y).addScaledVector(_,-M.y).multiplyScalar(I),S.copy(_).multiplyScalar(M.x).addScaledVector(g,-E.x).multiplyScalar(I),d[X].add(b),d[D].add(b),d[C].add(b),m[X].add(S),m[D].add(S),m[C].add(S))}let z=this.groups;z.length===0&&(z=[{start:0,count:t.count}]);for(let X=0,D=z.length;X<D;++X){const C=z[X],I=C.start,ct=C.count;for(let st=I,_t=I+ct;st<_t;st+=3)v(t.getX(st+0),t.getX(st+1),t.getX(st+2))}const L=new J,U=new J,k=new J,H=new J;function B(X){k.fromBufferAttribute(l,X),H.copy(k);const D=d[X];L.copy(D),L.sub(k.multiplyScalar(k.dot(D))).normalize(),U.crossVectors(H,D);const I=U.dot(m[X])<0?-1:1;f.setXYZW(X,L.x,L.y,L.z,I)}for(let X=0,D=z.length;X<D;++X){const C=z[X],I=C.start,ct=C.count;for(let st=I,_t=I+ct;st<_t;st+=3)B(t.getX(st+0)),B(t.getX(st+1)),B(t.getX(st+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Ui(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let x=0,M=s.count;x<M;x++)s.setXYZ(x,0,0,0);const l=new J,c=new J,f=new J,d=new J,m=new J,p=new J,g=new J,_=new J;if(t)for(let x=0,M=t.count;x<M;x+=3){const E=t.getX(x+0),b=t.getX(x+1),S=t.getX(x+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,b),f.fromBufferAttribute(i,S),g.subVectors(f,c),_.subVectors(l,c),g.cross(_),d.fromBufferAttribute(s,E),m.fromBufferAttribute(s,b),p.fromBufferAttribute(s,S),d.add(g),m.add(g),p.add(g),s.setXYZ(E,d.x,d.y,d.z),s.setXYZ(b,m.x,m.y,m.z),s.setXYZ(S,p.x,p.y,p.z)}else for(let x=0,M=i.count;x<M;x+=3)l.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),f.fromBufferAttribute(i,x+2),g.subVectors(f,c),_.subVectors(l,c),g.cross(_),s.setXYZ(x+0,g.x,g.y,g.z),s.setXYZ(x+1,g.x,g.y,g.z),s.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)Mn.fromBufferAttribute(t,i),Mn.normalize(),t.setXYZ(i,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function t(d,m){const p=d.array,g=d.itemSize,_=d.normalized,x=new p.constructor(m.length*g);let M=0,E=0;for(let b=0,S=m.length;b<S;b++){d.isInterleavedBufferAttribute?M=m[b]*d.data.stride+d.offset:M=m[b]*g;for(let v=0;v<g;v++)x[E++]=p[M++]}return new Ui(x,g,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Qn,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,s);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let g=0,_=p.length;g<_;g++){const x=p[g],M=t(x,s);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,m=f.length;d<m;d++){const p=f[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let _=0,x=p.length;_<x;_++){const M=p[_];g.push(M.toJSON(t.data))}g.length>0&&(l[m]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone(i));const l=t.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const c=t.morphAttributes;for(const p in c){const g=[],_=c[p];for(let x=0,M=_.length;x<M;x++)g.push(_[x].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let p=0,g=f.length;p<g;p++){const _=f[p];this.addGroup(_.start,_.count,_.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const w_=new Ie,bs=new du,wc=new Qr,D_=new J,Dc=new J,Uc=new J,Lc=new J,Zh=new J,Nc=new J,U_=new J,Oc=new J;class Zn extends En{constructor(t=new Qn,i=new up){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){Nc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=d[m],_=c[m];g!==0&&(Zh.fromBufferAttribute(_,t),f?Nc.addScaledVector(Zh,g):Nc.addScaledVector(Zh.sub(i),g))}i.add(Nc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),wc.copy(s.boundingSphere),wc.applyMatrix4(c),bs.copy(t.ray).recast(t.near),!(wc.containsPoint(bs.origin)===!1&&(bs.intersectSphere(wc,D_)===null||bs.origin.distanceToSquared(D_)>(t.far-t.near)**2))&&(w_.copy(c).invert(),bs.copy(t.ray).applyMatrix4(w_),!(s.boundingBox!==null&&bs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,bs)))}_computeIntersections(t,i,s){let l;const c=this.geometry,f=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,x=c.groups,M=c.drawRange;if(d!==null)if(Array.isArray(f))for(let E=0,b=x.length;E<b;E++){const S=x[E],v=f[S.materialIndex],z=Math.max(S.start,M.start),L=Math.min(d.count,Math.min(S.start+S.count,M.start+M.count));for(let U=z,k=L;U<k;U+=3){const H=d.getX(U),B=d.getX(U+1),X=d.getX(U+2);l=zc(this,v,t,s,p,g,_,H,B,X),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),b=Math.min(d.count,M.start+M.count);for(let S=E,v=b;S<v;S+=3){const z=d.getX(S),L=d.getX(S+1),U=d.getX(S+2);l=zc(this,f,t,s,p,g,_,z,L,U),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let E=0,b=x.length;E<b;E++){const S=x[E],v=f[S.materialIndex],z=Math.max(S.start,M.start),L=Math.min(m.count,Math.min(S.start+S.count,M.start+M.count));for(let U=z,k=L;U<k;U+=3){const H=U,B=U+1,X=U+2;l=zc(this,v,t,s,p,g,_,H,B,X),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),b=Math.min(m.count,M.start+M.count);for(let S=E,v=b;S<v;S+=3){const z=S,L=S+1,U=S+2;l=zc(this,f,t,s,p,g,_,z,L,U),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function g1(r,t,i,s,l,c,f,d){let m;if(t.side===Kn?m=s.intersectTriangle(f,c,l,!0,d):m=s.intersectTriangle(l,c,f,t.side===$a,d),m===null)return null;Oc.copy(d),Oc.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(Oc);return p<i.near||p>i.far?null:{distance:p,point:Oc.clone(),object:r}}function zc(r,t,i,s,l,c,f,d,m,p){r.getVertexPosition(d,Dc),r.getVertexPosition(m,Uc),r.getVertexPosition(p,Lc);const g=g1(r,t,i,s,Dc,Uc,Lc,U_);if(g){const _=new J;yi.getBarycoord(U_,Dc,Uc,Lc,_),l&&(g.uv=yi.getInterpolatedAttribute(l,d,m,p,_,new re)),c&&(g.uv1=yi.getInterpolatedAttribute(c,d,m,p,_,new re)),f&&(g.normal=yi.getInterpolatedAttribute(f,d,m,p,_,new J),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const x={a:d,b:m,c:p,normal:new J,materialIndex:0};yi.getNormal(Dc,Uc,Lc,x.normal),g.face=x,g.barycoord=_}return g}class Ja extends Qn{constructor(t=1,i=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const d=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],g=[],_=[];let x=0,M=0;E("z","y","x",-1,-1,s,i,t,f,c,0),E("z","y","x",1,-1,s,i,-t,f,c,1),E("x","z","y",1,1,t,s,i,l,f,2),E("x","z","y",1,-1,t,s,-i,l,f,3),E("x","y","z",1,-1,t,i,s,l,c,4),E("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new Dn(p,3)),this.setAttribute("normal",new Dn(g,3)),this.setAttribute("uv",new Dn(_,2));function E(b,S,v,z,L,U,k,H,B,X,D){const C=U/B,I=k/X,ct=U/2,st=k/2,_t=H/2,mt=B+1,P=X+1;let Y=0,Z=0;const Mt=new J;for(let At=0;At<P;At++){const N=At*I-st;for(let $=0;$<mt;$++){const bt=$*C-ct;Mt[b]=bt*z,Mt[S]=N*L,Mt[v]=_t,p.push(Mt.x,Mt.y,Mt.z),Mt[b]=0,Mt[S]=0,Mt[v]=H>0?1:-1,g.push(Mt.x,Mt.y,Mt.z),_.push($/B),_.push(1-At/X),Y+=1}}for(let At=0;At<X;At++)for(let N=0;N<B;N++){const $=x+N+mt*At,bt=x+N+mt*(At+1),q=x+(N+1)+mt*(At+1),ut=x+(N+1)+mt*At;m.push($,bt,ut),m.push(bt,q,ut),Z+=6}d.addGroup(M,Z,D),M+=Z,x+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ja(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function qr(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Hn(r){const t={};for(let i=0;i<r.length;i++){const s=qr(r[i]);for(const l in s)t[l]=s[l]}return t}function _1(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function Kv(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Le.workingColorSpace}const v1={clone:qr,merge:Hn};var x1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,y1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ts extends Jr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=x1,this.fragmentShader=y1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=qr(t.uniforms),this.uniformsGroups=_1(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class Qv extends En{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ie,this.projectionMatrix=new Ie,this.projectionMatrixInverse=new Ie,this.coordinateSystem=ma}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ya=new J,L_=new re,N_=new re;class xi extends Qv{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=rl*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Fr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return rl*2*Math.atan(Math.tan(Fr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){Ya.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ya.x,Ya.y).multiplyScalar(-t/Ya.z),Ya.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Ya.x,Ya.y).multiplyScalar(-t/Ya.z)}getViewSize(t,i){return this.getViewBounds(t,L_,N_),i.subVectors(N_,L_)}setViewOffset(t,i,s,l,c,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Fr*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*s/p,l*=f.width/m,s*=f.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const wr=-90,Dr=1;class S1 extends En{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new xi(wr,Dr,t,i);l.layers=this.layers,this.add(l);const c=new xi(wr,Dr,t,i);c.layers=this.layers,this.add(c);const f=new xi(wr,Dr,t,i);f.layers=this.layers,this.add(f);const d=new xi(wr,Dr,t,i);d.layers=this.layers,this.add(d);const m=new xi(wr,Dr,t,i);m.layers=this.layers,this.add(m);const p=new xi(wr,Dr,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,f,d,m]=i;for(const p of i)this.remove(p);if(t===ma)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===ou)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,d,m,p,g]=this.children,_=t.getRenderTarget(),x=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const b=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,c),t.setRenderTarget(s,1,l),t.render(i,f),t.setRenderTarget(s,2,l),t.render(i,d),t.setRenderTarget(s,3,l),t.render(i,m),t.setRenderTarget(s,4,l),t.render(i,p),s.texture.generateMipmaps=b,t.setRenderTarget(s,5,l),t.render(i,g),t.setRenderTarget(_,x,M),t.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class Jv extends Gn{constructor(t,i,s,l,c,f,d,m,p,g){t=t!==void 0?t:[],i=i!==void 0?i:kr,super(t,i,s,l,c,f,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class M1 extends Os{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new Jv(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Hi}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Ja(5,5,5),c=new ts({name:"CubemapFromEquirect",uniforms:qr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Kn,blending:Ka});c.uniforms.tEquirect.value=i;const f=new Zn(l,c),d=i.minFilter;return i.minFilter===Ls&&(i.minFilter=Hi),new S1(1,10,this).update(t,f),i.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(t,i,s,l){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,s,l);t.setRenderTarget(c)}}class fp{constructor(t,i=1,s=1e3){this.isFog=!0,this.name="",this.color=new me(t),this.near=i,this.far=s}clone(){return new fp(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class E1 extends En{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vi,this.environmentIntensity=1,this.environmentRotation=new Vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class b1 extends Gn{constructor(t=null,i=1,s=1,l,c,f,d,m,p=li,g=li,_,x){super(null,f,d,m,p,g,l,c,_,x),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class O_ extends Ui{constructor(t,i,s,l=1){super(t,i,s),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=l}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ur=new Ie,z_=new Ie,Pc=[],P_=new Bs,T1=new Ie,$o=new Zn,tl=new Qr;class Bc extends Zn{constructor(t,i,s){super(t,i),this.isInstancedMesh=!0,this.instanceMatrix=new O_(new Float32Array(s*16),16),this.instanceColor=null,this.morphTexture=null,this.count=s,this.boundingBox=null,this.boundingSphere=null;for(let l=0;l<s;l++)this.setMatrixAt(l,T1)}computeBoundingBox(){const t=this.geometry,i=this.count;this.boundingBox===null&&(this.boundingBox=new Bs),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,Ur),P_.copy(t.boundingBox).applyMatrix4(Ur),this.boundingBox.union(P_)}computeBoundingSphere(){const t=this.geometry,i=this.count;this.boundingSphere===null&&(this.boundingSphere=new Qr),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,Ur),tl.copy(t.boundingSphere).applyMatrix4(Ur),this.boundingSphere.union(tl)}copy(t,i){return super.copy(t,i),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,i){i.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,i){i.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,i){const s=i.morphTargetInfluences,l=this.morphTexture.source.data.data,c=s.length+1,f=t*c+1;for(let d=0;d<s.length;d++)s[d]=l[f+d]}raycast(t,i){const s=this.matrixWorld,l=this.count;if($o.geometry=this.geometry,$o.material=this.material,$o.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),tl.copy(this.boundingSphere),tl.applyMatrix4(s),t.ray.intersectsSphere(tl)!==!1))for(let c=0;c<l;c++){this.getMatrixAt(c,Ur),z_.multiplyMatrices(s,Ur),$o.matrixWorld=z_,$o.raycast(t,Pc);for(let f=0,d=Pc.length;f<d;f++){const m=Pc[f];m.instanceId=c,m.object=this,i.push(m)}Pc.length=0}}setColorAt(t,i){this.instanceColor===null&&(this.instanceColor=new O_(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),i.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,i){i.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,i){const s=i.morphTargetInfluences,l=s.length+1;this.morphTexture===null&&(this.morphTexture=new b1(new Float32Array(l*this.count),l,this.count,ap,Gi));const c=this.morphTexture.source.data.data;let f=0;for(let p=0;p<s.length;p++)f+=s[p];const d=this.geometry.morphTargetsRelative?1:1-f,m=l*t;c[m]=d,c.set(s,m+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const Kh=new J,A1=new J,R1=new fe;class qa{constructor(t=new J(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Kh.subVectors(s,i).cross(A1.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(Kh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||R1.getNormalMatrix(t),l=this.coplanarPoint(Kh).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ts=new Qr,Ic=new J;class hp{constructor(t=new qa,i=new qa,s=new qa,l=new qa,c=new qa,f=new qa){this.planes=[t,i,s,l,c,f]}set(t,i,s,l,c,f){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(f),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=ma){const s=this.planes,l=t.elements,c=l[0],f=l[1],d=l[2],m=l[3],p=l[4],g=l[5],_=l[6],x=l[7],M=l[8],E=l[9],b=l[10],S=l[11],v=l[12],z=l[13],L=l[14],U=l[15];if(s[0].setComponents(m-c,x-p,S-M,U-v).normalize(),s[1].setComponents(m+c,x+p,S+M,U+v).normalize(),s[2].setComponents(m+f,x+g,S+E,U+z).normalize(),s[3].setComponents(m-f,x-g,S-E,U-z).normalize(),s[4].setComponents(m-d,x-_,S-b,U-L).normalize(),i===ma)s[5].setComponents(m+d,x+_,S+b,U+L).normalize();else if(i===ou)s[5].setComponents(d,_,b,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ts.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Ts.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ts)}intersectsSprite(t){return Ts.center.set(0,0,0),Ts.radius=.7071067811865476,Ts.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ts)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Ic.x=l.normal.x>0?t.max.x:t.min.x,Ic.y=l.normal.y>0?t.max.y:t.min.y,Ic.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Ic)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class pu extends Jr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new me(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const cu=new J,uu=new J,B_=new Ie,el=new du,Fc=new Qr,Qh=new J,I_=new J;class C1 extends En{constructor(t=new Qn,i=new pu){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)cu.fromBufferAttribute(i,l-1),uu.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=cu.distanceTo(uu);t.setAttribute("lineDistance",new Dn(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Fc.copy(s.boundingSphere),Fc.applyMatrix4(l),Fc.radius+=c,t.ray.intersectsSphere(Fc)===!1)return;B_.copy(l).invert(),el.copy(t.ray).applyMatrix4(B_);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,g=s.index,x=s.attributes.position;if(g!==null){const M=Math.max(0,f.start),E=Math.min(g.count,f.start+f.count);for(let b=M,S=E-1;b<S;b+=p){const v=g.getX(b),z=g.getX(b+1),L=Hc(this,t,el,m,v,z);L&&i.push(L)}if(this.isLineLoop){const b=g.getX(E-1),S=g.getX(M),v=Hc(this,t,el,m,b,S);v&&i.push(v)}}else{const M=Math.max(0,f.start),E=Math.min(x.count,f.start+f.count);for(let b=M,S=E-1;b<S;b+=p){const v=Hc(this,t,el,m,b,b+1);v&&i.push(v)}if(this.isLineLoop){const b=Hc(this,t,el,m,E-1,M);b&&i.push(b)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function Hc(r,t,i,s,l,c){const f=r.geometry.attributes.position;if(cu.fromBufferAttribute(f,l),uu.fromBufferAttribute(f,c),i.distanceSqToSegment(cu,uu,Qh,I_)>s)return;Qh.applyMatrix4(r.matrixWorld);const m=t.ray.origin.distanceTo(Qh);if(!(m<t.near||m>t.far))return{distance:m,point:I_.clone().applyMatrix4(r.matrixWorld),index:l,face:null,faceIndex:null,barycoord:null,object:r}}const F_=new J,H_=new J;class dp extends C1{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)F_.fromBufferAttribute(i,l),H_.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+F_.distanceTo(H_);t.setAttribute("lineDistance",new Dn(s,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Gc extends En{constructor(){super(),this.isGroup=!0,this.type="Group"}}class $v extends Gn{constructor(t,i,s,l,c,f,d,m,p,g=Ir){if(g!==Ir&&g!==Wr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&g===Ir&&(s=Ns),s===void 0&&g===Wr&&(s=jr),super(null,l,c,f,d,m,g,s,p),this.isDepthTexture=!0,this.image={width:t,height:i},this.magFilter=d!==void 0?d:li,this.minFilter=m!==void 0?m:li,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}const Vc=new J,kc=new J,Jh=new J,Xc=new yi;class w1 extends Qn{constructor(t=null,i=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:i},t!==null){const l=Math.pow(10,4),c=Math.cos(Fr*i),f=t.getIndex(),d=t.getAttribute("position"),m=f?f.count:d.count,p=[0,0,0],g=["a","b","c"],_=new Array(3),x={},M=[];for(let E=0;E<m;E+=3){f?(p[0]=f.getX(E),p[1]=f.getX(E+1),p[2]=f.getX(E+2)):(p[0]=E,p[1]=E+1,p[2]=E+2);const{a:b,b:S,c:v}=Xc;if(b.fromBufferAttribute(d,p[0]),S.fromBufferAttribute(d,p[1]),v.fromBufferAttribute(d,p[2]),Xc.getNormal(Jh),_[0]=`${Math.round(b.x*l)},${Math.round(b.y*l)},${Math.round(b.z*l)}`,_[1]=`${Math.round(S.x*l)},${Math.round(S.y*l)},${Math.round(S.z*l)}`,_[2]=`${Math.round(v.x*l)},${Math.round(v.y*l)},${Math.round(v.z*l)}`,!(_[0]===_[1]||_[1]===_[2]||_[2]===_[0]))for(let z=0;z<3;z++){const L=(z+1)%3,U=_[z],k=_[L],H=Xc[g[z]],B=Xc[g[L]],X=`${U}_${k}`,D=`${k}_${U}`;D in x&&x[D]?(Jh.dot(x[D].normal)<=c&&(M.push(H.x,H.y,H.z),M.push(B.x,B.y,B.z)),x[D]=null):X in x||(x[X]={index0:p[z],index1:p[L],normal:Jh.clone()})}}for(const E in x)if(x[E]){const{index0:b,index1:S}=x[E];Vc.fromBufferAttribute(d,b),kc.fromBufferAttribute(d,S),M.push(Vc.x,Vc.y,Vc.z),M.push(kc.x,kc.y,kc.z)}this.setAttribute("position",new Dn(M,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Zr extends Qn{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,f=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,g=m+1,_=t/d,x=i/m,M=[],E=[],b=[],S=[];for(let v=0;v<g;v++){const z=v*x-f;for(let L=0;L<p;L++){const U=L*_-c;E.push(U,-z,0),b.push(0,0,1),S.push(L/d),S.push(1-v/m)}}for(let v=0;v<m;v++)for(let z=0;z<d;z++){const L=z+p*v,U=z+p*(v+1),k=z+1+p*(v+1),H=z+1+p*v;M.push(L,U,H),M.push(U,k,H)}this.setIndex(M),this.setAttribute("position",new Dn(E,3)),this.setAttribute("normal",new Dn(b,3)),this.setAttribute("uv",new Dn(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zr(t.width,t.height,t.widthSegments,t.heightSegments)}}class jc extends Jr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new me(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gv,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class D1 extends Jr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=TM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class U1 extends Jr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class tx extends En{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new me(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}class L1 extends tx{constructor(t,i,s){super(t,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(En.DEFAULT_UP),this.updateMatrix(),this.groundColor=new me(i)}copy(t,i){return super.copy(t,i),this.groundColor.copy(t.groundColor),this}}const $h=new Ie,G_=new J,V_=new J;class N1{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new re(512,512),this.map=null,this.mapPass=null,this.matrix=new Ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hp,this._frameExtents=new re(1,1),this._viewportCount=1,this._viewports=[new en(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;G_.setFromMatrixPosition(t.matrixWorld),i.position.copy(G_),V_.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(V_),i.updateMatrixWorld(),$h.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix($h),s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply($h)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class ex extends Qv{constructor(t=-1,i=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,f=s+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(c,f,d,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class O1 extends N1{constructor(){super(new ex(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class z1 extends tx{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(En.DEFAULT_UP),this.updateMatrix(),this.target=new En,this.shadow=new O1}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class P1 extends xi{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}const k_=new Ie;class B1{constructor(t,i,s=0,l=1/0){this.ray=new du(t,i),this.near=s,this.far=l,this.camera=null,this.layers=new cp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):console.error("THREE.Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return k_.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(k_),this}intersectObject(t,i=!0,s=[]){return qd(t,this,s,i),s.sort(X_),s}intersectObjects(t,i=!0,s=[]){for(let l=0,c=t.length;l<c;l++)qd(t[l],this,s,i);return s.sort(X_),s}}function X_(r,t){return r.distance-t.distance}function qd(r,t,i,s){let l=!0;if(r.layers.test(t.layers)&&r.raycast(t,i)===!1&&(l=!1),l===!0&&s===!0){const c=r.children;for(let f=0,d=c.length;f<d;f++)qd(c[f],t,i,!0)}}class Zd{constructor(t=1,i=0,s=0){return this.radius=t,this.phi=i,this.theta=s,this}set(t,i,s){return this.radius=t,this.phi=i,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=_e(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,s){return this.radius=Math.sqrt(t*t+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(_e(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class I1 extends dp{constructor(t=10,i=10,s=4473924,l=8947848){s=new me(s),l=new me(l);const c=i/2,f=t/i,d=t/2,m=[],p=[];for(let x=0,M=0,E=-d;x<=i;x++,E+=f){m.push(-d,0,E,d,0,E),m.push(E,0,-d,E,0,d);const b=x===c?s:l;b.toArray(p,M),M+=3,b.toArray(p,M),M+=3,b.toArray(p,M),M+=3,b.toArray(p,M),M+=3}const g=new Qn;g.setAttribute("position",new Dn(m,3)),g.setAttribute("color",new Dn(p,3));const _=new pu({vertexColors:!0,toneMapped:!1});super(g,_),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class F1 extends dp{constructor(t=1){const i=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],s=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],l=new Qn;l.setAttribute("position",new Dn(i,3)),l.setAttribute("color",new Dn(s,3));const c=new pu({vertexColors:!0,toneMapped:!1});super(l,c),this.type="AxesHelper"}setColors(t,i,s){const l=new me,c=this.geometry.attributes.color.array;return l.set(t),l.toArray(c,0),l.toArray(c,3),l.set(i),l.toArray(c,6),l.toArray(c,9),l.set(s),l.toArray(c,12),l.toArray(c,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class H1 extends Ps{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function j_(r,t,i,s){const l=G1(s);switch(i){case zv:return r*t;case Bv:return r*t;case Iv:return r*t*2;case ap:return r*t/l.components*l.byteLength;case sp:return r*t/l.components*l.byteLength;case Fv:return r*t*2/l.components*l.byteLength;case rp:return r*t*2/l.components*l.byteLength;case Pv:return r*t*3/l.components*l.byteLength;case Di:return r*t*4/l.components*l.byteLength;case op:return r*t*4/l.components*l.byteLength;case Jc:case $c:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case tu:case eu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ed:case Td:return Math.max(r,16)*Math.max(t,8)/4;case Md:case bd:return Math.max(r,8)*Math.max(t,8)/2;case Ad:case Rd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Cd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case wd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Dd:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Ud:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Ld:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Nd:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Od:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case zd:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Pd:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Bd:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Id:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Fd:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Hd:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Gd:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Vd:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case nu:case kd:case Xd:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Hv:case jd:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Wd:case Yd:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function G1(r){switch(r){case va:case Lv:return{byteLength:1,components:1};case sl:case Nv:case ll:return{byteLength:2,components:1};case np:case ip:return{byteLength:2,components:4};case Ns:case ep:case Gi:return{byteLength:4,components:1};case Ov:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:tp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=tp);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function nx(){let r=null,t=!1,i=null,s=null;function l(c,f){i(c,f),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function V1(r){const t=new WeakMap;function i(d,m){const p=d.array,g=d.usage,_=p.byteLength,x=r.createBuffer();r.bindBuffer(m,x),r.bufferData(m,p,g),d.onUploadCallback();let M;if(p instanceof Float32Array)M=r.FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=r.HALF_FLOAT:M=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=r.SHORT;else if(p instanceof Uint32Array)M=r.UNSIGNED_INT;else if(p instanceof Int32Array)M=r.INT;else if(p instanceof Int8Array)M=r.BYTE;else if(p instanceof Uint8Array)M=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:_}}function s(d,m,p){const g=m.array,_=m.updateRanges;if(r.bindBuffer(p,d),_.length===0)r.bufferSubData(p,0,g);else{_.sort((M,E)=>M.start-E.start);let x=0;for(let M=1;M<_.length;M++){const E=_[x],b=_[M];b.start<=E.start+E.count+1?E.count=Math.max(E.count,b.start+b.count-E.start):(++x,_[x]=b)}_.length=x+1;for(let M=0,E=_.length;M<E;M++){const b=_[M];r.bufferSubData(p,b.start*g.BYTES_PER_ELEMENT,g,b.start,b.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(r.deleteBuffer(m.buffer),t.delete(d))}function f(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=t.get(d);(!g||g.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:f}}var k1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,X1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,j1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,W1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Y1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,q1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Z1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,K1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Q1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,J1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,eE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,nE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,iE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,aE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,sE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,oE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,uE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,fE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,hE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,dE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,pE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,mE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_E=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xE="gl_FragColor = linearToOutputTexel( gl_FragColor );",yE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,SE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ME=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,EE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,bE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,TE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,AE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,RE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,CE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,DE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,UE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,LE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,NE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,OE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,zE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,PE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,BE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,IE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,FE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,HE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,GE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,VE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,kE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,XE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,WE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,YE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ZE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,KE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,QE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,JE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$E=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,eb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,nb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ib=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ab=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,sb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ob=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,lb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ub=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,hb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,db=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_b=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,vb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Mb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Eb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Tb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ab=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Rb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Cb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Db=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ub=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Lb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Nb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ob=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Pb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Bb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ib=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Fb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Hb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Gb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Vb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Zb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Kb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Qb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Jb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$b=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,eT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,iT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,oT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,cT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,uT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,dT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,_T=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,yT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ST=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,de={alphahash_fragment:k1,alphahash_pars_fragment:X1,alphamap_fragment:j1,alphamap_pars_fragment:W1,alphatest_fragment:Y1,alphatest_pars_fragment:q1,aomap_fragment:Z1,aomap_pars_fragment:K1,batching_pars_vertex:Q1,batching_vertex:J1,begin_vertex:$1,beginnormal_vertex:tE,bsdfs:eE,iridescence_fragment:nE,bumpmap_pars_fragment:iE,clipping_planes_fragment:aE,clipping_planes_pars_fragment:sE,clipping_planes_pars_vertex:rE,clipping_planes_vertex:oE,color_fragment:lE,color_pars_fragment:cE,color_pars_vertex:uE,color_vertex:fE,common:hE,cube_uv_reflection_fragment:dE,defaultnormal_vertex:pE,displacementmap_pars_vertex:mE,displacementmap_vertex:gE,emissivemap_fragment:_E,emissivemap_pars_fragment:vE,colorspace_fragment:xE,colorspace_pars_fragment:yE,envmap_fragment:SE,envmap_common_pars_fragment:ME,envmap_pars_fragment:EE,envmap_pars_vertex:bE,envmap_physical_pars_fragment:zE,envmap_vertex:TE,fog_vertex:AE,fog_pars_vertex:RE,fog_fragment:CE,fog_pars_fragment:wE,gradientmap_pars_fragment:DE,lightmap_pars_fragment:UE,lights_lambert_fragment:LE,lights_lambert_pars_fragment:NE,lights_pars_begin:OE,lights_toon_fragment:PE,lights_toon_pars_fragment:BE,lights_phong_fragment:IE,lights_phong_pars_fragment:FE,lights_physical_fragment:HE,lights_physical_pars_fragment:GE,lights_fragment_begin:VE,lights_fragment_maps:kE,lights_fragment_end:XE,logdepthbuf_fragment:jE,logdepthbuf_pars_fragment:WE,logdepthbuf_pars_vertex:YE,logdepthbuf_vertex:qE,map_fragment:ZE,map_pars_fragment:KE,map_particle_fragment:QE,map_particle_pars_fragment:JE,metalnessmap_fragment:$E,metalnessmap_pars_fragment:tb,morphinstance_vertex:eb,morphcolor_vertex:nb,morphnormal_vertex:ib,morphtarget_pars_vertex:ab,morphtarget_vertex:sb,normal_fragment_begin:rb,normal_fragment_maps:ob,normal_pars_fragment:lb,normal_pars_vertex:cb,normal_vertex:ub,normalmap_pars_fragment:fb,clearcoat_normal_fragment_begin:hb,clearcoat_normal_fragment_maps:db,clearcoat_pars_fragment:pb,iridescence_pars_fragment:mb,opaque_fragment:gb,packing:_b,premultiplied_alpha_fragment:vb,project_vertex:xb,dithering_fragment:yb,dithering_pars_fragment:Sb,roughnessmap_fragment:Mb,roughnessmap_pars_fragment:Eb,shadowmap_pars_fragment:bb,shadowmap_pars_vertex:Tb,shadowmap_vertex:Ab,shadowmask_pars_fragment:Rb,skinbase_vertex:Cb,skinning_pars_vertex:wb,skinning_vertex:Db,skinnormal_vertex:Ub,specularmap_fragment:Lb,specularmap_pars_fragment:Nb,tonemapping_fragment:Ob,tonemapping_pars_fragment:zb,transmission_fragment:Pb,transmission_pars_fragment:Bb,uv_pars_fragment:Ib,uv_pars_vertex:Fb,uv_vertex:Hb,worldpos_vertex:Gb,background_vert:Vb,background_frag:kb,backgroundCube_vert:Xb,backgroundCube_frag:jb,cube_vert:Wb,cube_frag:Yb,depth_vert:qb,depth_frag:Zb,distanceRGBA_vert:Kb,distanceRGBA_frag:Qb,equirect_vert:Jb,equirect_frag:$b,linedashed_vert:tT,linedashed_frag:eT,meshbasic_vert:nT,meshbasic_frag:iT,meshlambert_vert:aT,meshlambert_frag:sT,meshmatcap_vert:rT,meshmatcap_frag:oT,meshnormal_vert:lT,meshnormal_frag:cT,meshphong_vert:uT,meshphong_frag:fT,meshphysical_vert:hT,meshphysical_frag:dT,meshtoon_vert:pT,meshtoon_frag:mT,points_vert:gT,points_frag:_T,shadow_vert:vT,shadow_frag:xT,sprite_vert:yT,sprite_frag:ST},zt={common:{diffuse:{value:new me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new fe}},envmap:{envMap:{value:null},envMapRotation:{value:new fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new fe},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0},uvTransform:{value:new fe}},sprite:{diffuse:{value:new me(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}}},Ii={basic:{uniforms:Hn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.fog]),vertexShader:de.meshbasic_vert,fragmentShader:de.meshbasic_frag},lambert:{uniforms:Hn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,zt.lights,{emissive:{value:new me(0)}}]),vertexShader:de.meshlambert_vert,fragmentShader:de.meshlambert_frag},phong:{uniforms:Hn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,zt.lights,{emissive:{value:new me(0)},specular:{value:new me(1118481)},shininess:{value:30}}]),vertexShader:de.meshphong_vert,fragmentShader:de.meshphong_frag},standard:{uniforms:Hn([zt.common,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.roughnessmap,zt.metalnessmap,zt.fog,zt.lights,{emissive:{value:new me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag},toon:{uniforms:Hn([zt.common,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.gradientmap,zt.fog,zt.lights,{emissive:{value:new me(0)}}]),vertexShader:de.meshtoon_vert,fragmentShader:de.meshtoon_frag},matcap:{uniforms:Hn([zt.common,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,{matcap:{value:null}}]),vertexShader:de.meshmatcap_vert,fragmentShader:de.meshmatcap_frag},points:{uniforms:Hn([zt.points,zt.fog]),vertexShader:de.points_vert,fragmentShader:de.points_frag},dashed:{uniforms:Hn([zt.common,zt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:de.linedashed_vert,fragmentShader:de.linedashed_frag},depth:{uniforms:Hn([zt.common,zt.displacementmap]),vertexShader:de.depth_vert,fragmentShader:de.depth_frag},normal:{uniforms:Hn([zt.common,zt.bumpmap,zt.normalmap,zt.displacementmap,{opacity:{value:1}}]),vertexShader:de.meshnormal_vert,fragmentShader:de.meshnormal_frag},sprite:{uniforms:Hn([zt.sprite,zt.fog]),vertexShader:de.sprite_vert,fragmentShader:de.sprite_frag},background:{uniforms:{uvTransform:{value:new fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:de.background_vert,fragmentShader:de.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new fe}},vertexShader:de.backgroundCube_vert,fragmentShader:de.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:de.cube_vert,fragmentShader:de.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:de.equirect_vert,fragmentShader:de.equirect_frag},distanceRGBA:{uniforms:Hn([zt.common,zt.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:de.distanceRGBA_vert,fragmentShader:de.distanceRGBA_frag},shadow:{uniforms:Hn([zt.lights,zt.fog,{color:{value:new me(0)},opacity:{value:1}}]),vertexShader:de.shadow_vert,fragmentShader:de.shadow_frag}};Ii.physical={uniforms:Hn([Ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new fe},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new fe},sheen:{value:0},sheenColor:{value:new me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new fe},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new fe},attenuationDistance:{value:0},attenuationColor:{value:new me(0)},specularColor:{value:new me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new fe},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new fe}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag};const Wc={r:0,b:0,g:0},As=new Vi,MT=new Ie;function ET(r,t,i,s,l,c,f){const d=new me(0);let m=c===!0?0:1,p,g,_=null,x=0,M=null;function E(L){let U=L.isScene===!0?L.background:null;return U&&U.isTexture&&(U=(L.backgroundBlurriness>0?i:t).get(U)),U}function b(L){let U=!1;const k=E(L);k===null?v(d,m):k&&k.isColor&&(v(k,1),U=!0);const H=r.xr.getEnvironmentBlendMode();H==="additive"?s.buffers.color.setClear(0,0,0,1,f):H==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,f),(r.autoClear||U)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function S(L,U){const k=E(U);k&&(k.isCubeTexture||k.mapping===hu)?(g===void 0&&(g=new Zn(new Ja(1,1,1),new ts({name:"BackgroundCubeMaterial",uniforms:qr(Ii.backgroundCube.uniforms),vertexShader:Ii.backgroundCube.vertexShader,fragmentShader:Ii.backgroundCube.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(H,B,X){this.matrixWorld.copyPosition(X.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),As.copy(U.backgroundRotation),As.x*=-1,As.y*=-1,As.z*=-1,k.isCubeTexture&&k.isRenderTargetTexture===!1&&(As.y*=-1,As.z*=-1),g.material.uniforms.envMap.value=k,g.material.uniforms.flipEnvMap.value=k.isCubeTexture&&k.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(MT.makeRotationFromEuler(As)),g.material.toneMapped=Le.getTransfer(k.colorSpace)!==ke,(_!==k||x!==k.version||M!==r.toneMapping)&&(g.material.needsUpdate=!0,_=k,x=k.version,M=r.toneMapping),g.layers.enableAll(),L.unshift(g,g.geometry,g.material,0,0,null)):k&&k.isTexture&&(p===void 0&&(p=new Zn(new Zr(2,2),new ts({name:"BackgroundMaterial",uniforms:qr(Ii.background.uniforms),vertexShader:Ii.background.vertexShader,fragmentShader:Ii.background.fragmentShader,side:$a,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=k,p.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,p.material.toneMapped=Le.getTransfer(k.colorSpace)!==ke,k.matrixAutoUpdate===!0&&k.updateMatrix(),p.material.uniforms.uvTransform.value.copy(k.matrix),(_!==k||x!==k.version||M!==r.toneMapping)&&(p.material.needsUpdate=!0,_=k,x=k.version,M=r.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function v(L,U){L.getRGB(Wc,Kv(r)),s.buffers.color.setClear(Wc.r,Wc.g,Wc.b,U,f)}function z(){g!==void 0&&(g.geometry.dispose(),g.material.dispose()),p!==void 0&&(p.geometry.dispose(),p.material.dispose())}return{getClearColor:function(){return d},setClearColor:function(L,U=1){d.set(L),m=U,v(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(L){m=L,v(d,m)},render:b,addToRenderList:S,dispose:z}}function bT(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=x(null);let c=l,f=!1;function d(C,I,ct,st,_t){let mt=!1;const P=_(st,ct,I);c!==P&&(c=P,p(c.object)),mt=M(C,st,ct,_t),mt&&E(C,st,ct,_t),_t!==null&&t.update(_t,r.ELEMENT_ARRAY_BUFFER),(mt||f)&&(f=!1,U(C,I,ct,st),_t!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(_t).buffer))}function m(){return r.createVertexArray()}function p(C){return r.bindVertexArray(C)}function g(C){return r.deleteVertexArray(C)}function _(C,I,ct){const st=ct.wireframe===!0;let _t=s[C.id];_t===void 0&&(_t={},s[C.id]=_t);let mt=_t[I.id];mt===void 0&&(mt={},_t[I.id]=mt);let P=mt[st];return P===void 0&&(P=x(m()),mt[st]=P),P}function x(C){const I=[],ct=[],st=[];for(let _t=0;_t<i;_t++)I[_t]=0,ct[_t]=0,st[_t]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:ct,attributeDivisors:st,object:C,attributes:{},index:null}}function M(C,I,ct,st){const _t=c.attributes,mt=I.attributes;let P=0;const Y=ct.getAttributes();for(const Z in Y)if(Y[Z].location>=0){const At=_t[Z];let N=mt[Z];if(N===void 0&&(Z==="instanceMatrix"&&C.instanceMatrix&&(N=C.instanceMatrix),Z==="instanceColor"&&C.instanceColor&&(N=C.instanceColor)),At===void 0||At.attribute!==N||N&&At.data!==N.data)return!0;P++}return c.attributesNum!==P||c.index!==st}function E(C,I,ct,st){const _t={},mt=I.attributes;let P=0;const Y=ct.getAttributes();for(const Z in Y)if(Y[Z].location>=0){let At=mt[Z];At===void 0&&(Z==="instanceMatrix"&&C.instanceMatrix&&(At=C.instanceMatrix),Z==="instanceColor"&&C.instanceColor&&(At=C.instanceColor));const N={};N.attribute=At,At&&At.data&&(N.data=At.data),_t[Z]=N,P++}c.attributes=_t,c.attributesNum=P,c.index=st}function b(){const C=c.newAttributes;for(let I=0,ct=C.length;I<ct;I++)C[I]=0}function S(C){v(C,0)}function v(C,I){const ct=c.newAttributes,st=c.enabledAttributes,_t=c.attributeDivisors;ct[C]=1,st[C]===0&&(r.enableVertexAttribArray(C),st[C]=1),_t[C]!==I&&(r.vertexAttribDivisor(C,I),_t[C]=I)}function z(){const C=c.newAttributes,I=c.enabledAttributes;for(let ct=0,st=I.length;ct<st;ct++)I[ct]!==C[ct]&&(r.disableVertexAttribArray(ct),I[ct]=0)}function L(C,I,ct,st,_t,mt,P){P===!0?r.vertexAttribIPointer(C,I,ct,_t,mt):r.vertexAttribPointer(C,I,ct,st,_t,mt)}function U(C,I,ct,st){b();const _t=st.attributes,mt=ct.getAttributes(),P=I.defaultAttributeValues;for(const Y in mt){const Z=mt[Y];if(Z.location>=0){let Mt=_t[Y];if(Mt===void 0&&(Y==="instanceMatrix"&&C.instanceMatrix&&(Mt=C.instanceMatrix),Y==="instanceColor"&&C.instanceColor&&(Mt=C.instanceColor)),Mt!==void 0){const At=Mt.normalized,N=Mt.itemSize,$=t.get(Mt);if($===void 0)continue;const bt=$.buffer,q=$.type,ut=$.bytesPerElement,Tt=q===r.INT||q===r.UNSIGNED_INT||Mt.gpuType===ep;if(Mt.isInterleavedBufferAttribute){const gt=Mt.data,It=gt.stride,ot=Mt.offset;if(gt.isInstancedInterleavedBuffer){for(let Rt=0;Rt<Z.locationSize;Rt++)v(Z.location+Rt,gt.meshPerAttribute);C.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let Rt=0;Rt<Z.locationSize;Rt++)S(Z.location+Rt);r.bindBuffer(r.ARRAY_BUFFER,bt);for(let Rt=0;Rt<Z.locationSize;Rt++)L(Z.location+Rt,N/Z.locationSize,q,At,It*ut,(ot+N/Z.locationSize*Rt)*ut,Tt)}else{if(Mt.isInstancedBufferAttribute){for(let gt=0;gt<Z.locationSize;gt++)v(Z.location+gt,Mt.meshPerAttribute);C.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let gt=0;gt<Z.locationSize;gt++)S(Z.location+gt);r.bindBuffer(r.ARRAY_BUFFER,bt);for(let gt=0;gt<Z.locationSize;gt++)L(Z.location+gt,N/Z.locationSize,q,At,N*ut,N/Z.locationSize*gt*ut,Tt)}}else if(P!==void 0){const At=P[Y];if(At!==void 0)switch(At.length){case 2:r.vertexAttrib2fv(Z.location,At);break;case 3:r.vertexAttrib3fv(Z.location,At);break;case 4:r.vertexAttrib4fv(Z.location,At);break;default:r.vertexAttrib1fv(Z.location,At)}}}}z()}function k(){X();for(const C in s){const I=s[C];for(const ct in I){const st=I[ct];for(const _t in st)g(st[_t].object),delete st[_t];delete I[ct]}delete s[C]}}function H(C){if(s[C.id]===void 0)return;const I=s[C.id];for(const ct in I){const st=I[ct];for(const _t in st)g(st[_t].object),delete st[_t];delete I[ct]}delete s[C.id]}function B(C){for(const I in s){const ct=s[I];if(ct[C.id]===void 0)continue;const st=ct[C.id];for(const _t in st)g(st[_t].object),delete st[_t];delete ct[C.id]}}function X(){D(),f=!0,c!==l&&(c=l,p(c.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:X,resetDefaultState:D,dispose:k,releaseStatesOfGeometry:H,releaseStatesOfProgram:B,initAttributes:b,enableAttribute:S,disableUnusedAttributes:z}}function TT(r,t,i){let s;function l(p){s=p}function c(p,g){r.drawArrays(s,p,g),i.update(g,s,1)}function f(p,g,_){_!==0&&(r.drawArraysInstanced(s,p,g,_),i.update(g,s,_))}function d(p,g,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,g,0,_);let M=0;for(let E=0;E<_;E++)M+=g[E];i.update(M,s,1)}function m(p,g,_,x){if(_===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let E=0;E<p.length;E++)f(p[E],g[E],x[E]);else{M.multiDrawArraysInstancedWEBGL(s,p,0,g,0,x,0,_);let E=0;for(let b=0;b<_;b++)E+=g[b]*x[b];i.update(E,s,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function AT(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const B=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(B){return!(B!==Di&&s.convert(B)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(B){const X=B===ll&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(B!==va&&s.convert(B)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==Gi&&!X)}function m(B){if(B==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const _=i.logarithmicDepthBuffer===!0,x=i.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),M=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_TEXTURE_SIZE),S=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),z=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),L=r.getParameter(r.MAX_VARYING_VECTORS),U=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),k=E>0,H=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:_,reverseDepthBuffer:x,maxTextures:M,maxVertexTextures:E,maxTextureSize:b,maxCubemapSize:S,maxAttributes:v,maxVertexUniforms:z,maxVaryings:L,maxFragmentUniforms:U,vertexTextures:k,maxSamples:H}}function RT(r){const t=this;let i=null,s=0,l=!1,c=!1;const f=new qa,d=new fe,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,x){const M=_.length!==0||x||s!==0||l;return l=x,s=_.length,M},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,x){i=g(_,x,0)},this.setState=function(_,x,M){const E=_.clippingPlanes,b=_.clipIntersection,S=_.clipShadows,v=r.get(_);if(!l||E===null||E.length===0||c&&!S)c?g(null):p();else{const z=c?0:s,L=z*4;let U=v.clippingState||null;m.value=U,U=g(E,x,L,M);for(let k=0;k!==L;++k)U[k]=i[k];v.clippingState=U,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=z}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function g(_,x,M,E){const b=_!==null?_.length:0;let S=null;if(b!==0){if(S=m.value,E!==!0||S===null){const v=M+b*4,z=x.matrixWorldInverse;d.getNormalMatrix(z),(S===null||S.length<v)&&(S=new Float32Array(v));for(let L=0,U=M;L!==b;++L,U+=4)f.copy(_[L]).applyMatrix4(z,d),f.normal.toArray(S,U),S[U+3]=f.constant}m.value=S,m.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,S}}function CT(r){let t=new WeakMap;function i(f,d){return d===vd?f.mapping=kr:d===xd&&(f.mapping=Xr),f}function s(f){if(f&&f.isTexture){const d=f.mapping;if(d===vd||d===xd)if(t.has(f)){const m=t.get(f).texture;return i(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const p=new M1(m.height);return p.fromEquirectangularTexture(r,f),t.set(f,p),f.addEventListener("dispose",l),i(p.texture,f.mapping)}else return null}}return f}function l(f){const d=f.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function c(){t=new WeakMap}return{get:s,dispose:c}}const Pr=4,W_=[.125,.215,.35,.446,.526,.582],Ds=20,td=new ex,Y_=new me;let ed=null,nd=0,id=0,ad=!1;const Cs=(1+Math.sqrt(5))/2,Lr=1/Cs,q_=[new J(-Cs,Lr,0),new J(Cs,Lr,0),new J(-Lr,0,Cs),new J(Lr,0,Cs),new J(0,Cs,-Lr),new J(0,Cs,Lr),new J(-1,1,-1),new J(1,1,-1),new J(-1,1,1),new J(1,1,1)];class Z_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,s=.1,l=100){ed=this._renderer.getRenderTarget(),nd=this._renderer.getActiveCubeFace(),id=this._renderer.getActiveMipmapLevel(),ad=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,s,l,c),i>0&&this._blur(c,0,0,i),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=J_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Q_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ed,nd,id),this._renderer.xr.enabled=ad,t.scissorTest=!1,Yc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===kr||t.mapping===Xr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ed=this._renderer.getRenderTarget(),nd=this._renderer.getActiveCubeFace(),id=this._renderer.getActiveMipmapLevel(),ad=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Hi,minFilter:Hi,generateMipmaps:!1,type:ll,format:Di,colorSpace:Yr,depthBuffer:!1},l=K_(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=K_(t,i,s);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=wT(c)),this._blurMaterial=DT(c,t,i)}return l}_compileMaterial(t){const i=new Zn(this._lodPlanes[0],t);this._renderer.compile(i,td)}_sceneToCubeUV(t,i,s,l){const d=new xi(90,1,i,s),m=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],g=this._renderer,_=g.autoClear,x=g.toneMapping;g.getClearColor(Y_),g.toneMapping=Qa,g.autoClear=!1;const M=new up({name:"PMREM.Background",side:Kn,depthWrite:!1,depthTest:!1}),E=new Zn(new Ja,M);let b=!1;const S=t.background;S?S.isColor&&(M.color.copy(S),t.background=null,b=!0):(M.color.copy(Y_),b=!0);for(let v=0;v<6;v++){const z=v%3;z===0?(d.up.set(0,m[v],0),d.lookAt(p[v],0,0)):z===1?(d.up.set(0,0,m[v]),d.lookAt(0,p[v],0)):(d.up.set(0,m[v],0),d.lookAt(0,0,p[v]));const L=this._cubeSize;Yc(l,z*L,v>2?L:0,L,L),g.setRenderTarget(l),b&&g.render(E,d),g.render(t,d)}E.geometry.dispose(),E.material.dispose(),g.toneMapping=x,g.autoClear=_,t.background=S}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===kr||t.mapping===Xr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=J_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Q_());const c=l?this._cubemapMaterial:this._equirectMaterial,f=new Zn(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=t;const m=this._cubeSize;Yc(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(f,td)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const f=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=q_[(l-c-1)%q_.length];this._blur(t,c-1,c,f,d)}i.autoClear=s}_blur(t,i,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,s,l,"latitudinal",c),this._halfBlur(f,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,f,d){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,_=new Zn(this._lodPlanes[l],p),x=p.uniforms,M=this._sizeLods[s]-1,E=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Ds-1),b=c/E,S=isFinite(c)?1+Math.floor(g*b):Ds;S>Ds&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Ds}`);const v=[];let z=0;for(let B=0;B<Ds;++B){const X=B/b,D=Math.exp(-X*X/2);v.push(D),B===0?z+=D:B<S&&(z+=2*D)}for(let B=0;B<v.length;B++)v[B]=v[B]/z;x.envMap.value=t.texture,x.samples.value=S,x.weights.value=v,x.latitudinal.value=f==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:L}=this;x.dTheta.value=E,x.mipInt.value=L-s;const U=this._sizeLods[l],k=3*U*(l>L-Pr?l-L+Pr:0),H=4*(this._cubeSize-U);Yc(i,k,H,3*U,2*U),m.setRenderTarget(i),m.render(_,td)}}function wT(r){const t=[],i=[],s=[];let l=r;const c=r-Pr+1+W_.length;for(let f=0;f<c;f++){const d=Math.pow(2,l);i.push(d);let m=1/d;f>r-Pr?m=W_[f-r+Pr-1]:f===0&&(m=0),s.push(m);const p=1/(d-2),g=-p,_=1+p,x=[g,g,_,g,_,_,g,g,_,_,g,_],M=6,E=6,b=3,S=2,v=1,z=new Float32Array(b*E*M),L=new Float32Array(S*E*M),U=new Float32Array(v*E*M);for(let H=0;H<M;H++){const B=H%3*2/3-1,X=H>2?0:-1,D=[B,X,0,B+2/3,X,0,B+2/3,X+1,0,B,X,0,B+2/3,X+1,0,B,X+1,0];z.set(D,b*E*H),L.set(x,S*E*H);const C=[H,H,H,H,H,H];U.set(C,v*E*H)}const k=new Qn;k.setAttribute("position",new Ui(z,b)),k.setAttribute("uv",new Ui(L,S)),k.setAttribute("faceIndex",new Ui(U,v)),t.push(k),l>Pr&&l--}return{lodPlanes:t,sizeLods:i,sigmas:s}}function K_(r,t,i){const s=new Os(r,t,i);return s.texture.mapping=hu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Yc(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function DT(r,t,i){const s=new Float32Array(Ds),l=new J(0,1,0);return new ts({name:"SphericalGaussianBlur",defines:{n:Ds,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:pp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ka,depthTest:!1,depthWrite:!1})}function Q_(){return new ts({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ka,depthTest:!1,depthWrite:!1})}function J_(){return new ts({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ka,depthTest:!1,depthWrite:!1})}function pp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function UT(r){let t=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===vd||m===xd,g=m===kr||m===Xr;if(p||g){let _=t.get(d);const x=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new Z_(r)),_=p?i.fromEquirectangular(d,_):i.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),_.texture;if(_!==void 0)return _.texture;{const M=d.image;return p&&M&&M.height>0||g&&M&&l(M)?(i===null&&(i=new Z_(r)),_=p?i.fromEquirectangular(d):i.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),d.addEventListener("dispose",c),_.texture):null}}}return d}function l(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function f(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function LT(r){const t={};function i(s){if(t[s]!==void 0)return t[s];let l;switch(s){case"WEBGL_depth_texture":l=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=r.getExtension(s)}return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Or("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function NT(r,t,i,s){const l={},c=new WeakMap;function f(_){const x=_.target;x.index!==null&&t.remove(x.index);for(const E in x.attributes)t.remove(x.attributes[E]);x.removeEventListener("dispose",f),delete l[x.id];const M=c.get(x);M&&(t.remove(M),c.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(_,x){return l[x.id]===!0||(x.addEventListener("dispose",f),l[x.id]=!0,i.memory.geometries++),x}function m(_){const x=_.attributes;for(const M in x)t.update(x[M],r.ARRAY_BUFFER)}function p(_){const x=[],M=_.index,E=_.attributes.position;let b=0;if(M!==null){const z=M.array;b=M.version;for(let L=0,U=z.length;L<U;L+=3){const k=z[L+0],H=z[L+1],B=z[L+2];x.push(k,H,H,B,B,k)}}else if(E!==void 0){const z=E.array;b=E.version;for(let L=0,U=z.length/3-1;L<U;L+=3){const k=L+0,H=L+1,B=L+2;x.push(k,H,H,B,B,k)}}else return;const S=new(Xv(x)?Zv:qv)(x,1);S.version=b;const v=c.get(_);v&&t.remove(v),c.set(_,S)}function g(_){const x=c.get(_);if(x){const M=_.index;M!==null&&x.version<M.version&&p(_)}else p(_);return c.get(_)}return{get:d,update:m,getWireframeAttribute:g}}function OT(r,t,i){let s;function l(x){s=x}let c,f;function d(x){c=x.type,f=x.bytesPerElement}function m(x,M){r.drawElements(s,M,c,x*f),i.update(M,s,1)}function p(x,M,E){E!==0&&(r.drawElementsInstanced(s,M,c,x*f,E),i.update(M,s,E))}function g(x,M,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,c,x,0,E);let S=0;for(let v=0;v<E;v++)S+=M[v];i.update(S,s,1)}function _(x,M,E,b){if(E===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let v=0;v<x.length;v++)p(x[v]/f,M[v],b[v]);else{S.multiDrawElementsInstancedWEBGL(s,M,0,c,x,0,b,0,E);let v=0;for(let z=0;z<E;z++)v+=M[z]*b[z];i.update(v,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function zT(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,d){switch(i.calls++,f){case r.TRIANGLES:i.triangles+=d*(c/3);break;case r.LINES:i.lines+=d*(c/2);break;case r.LINE_STRIP:i.lines+=d*(c-1);break;case r.LINE_LOOP:i.lines+=d*c;break;case r.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function PT(r,t,i){const s=new WeakMap,l=new en;function c(f,d,m){const p=f.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=g!==void 0?g.length:0;let x=s.get(d);if(x===void 0||x.count!==_){let C=function(){X.dispose(),s.delete(d),d.removeEventListener("dispose",C)};var M=C;x!==void 0&&x.texture.dispose();const E=d.morphAttributes.position!==void 0,b=d.morphAttributes.normal!==void 0,S=d.morphAttributes.color!==void 0,v=d.morphAttributes.position||[],z=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let U=0;E===!0&&(U=1),b===!0&&(U=2),S===!0&&(U=3);let k=d.attributes.position.count*U,H=1;k>t.maxTextureSize&&(H=Math.ceil(k/t.maxTextureSize),k=t.maxTextureSize);const B=new Float32Array(k*H*4*_),X=new Wv(B,k,H,_);X.type=Gi,X.needsUpdate=!0;const D=U*4;for(let I=0;I<_;I++){const ct=v[I],st=z[I],_t=L[I],mt=k*H*4*I;for(let P=0;P<ct.count;P++){const Y=P*D;E===!0&&(l.fromBufferAttribute(ct,P),B[mt+Y+0]=l.x,B[mt+Y+1]=l.y,B[mt+Y+2]=l.z,B[mt+Y+3]=0),b===!0&&(l.fromBufferAttribute(st,P),B[mt+Y+4]=l.x,B[mt+Y+5]=l.y,B[mt+Y+6]=l.z,B[mt+Y+7]=0),S===!0&&(l.fromBufferAttribute(_t,P),B[mt+Y+8]=l.x,B[mt+Y+9]=l.y,B[mt+Y+10]=l.z,B[mt+Y+11]=_t.itemSize===4?l.w:1)}}x={count:_,texture:X,size:new re(k,H)},s.set(d,x),d.addEventListener("dispose",C)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",f.morphTexture,i);else{let E=0;for(let S=0;S<p.length;S++)E+=p[S];const b=d.morphTargetsRelative?1:1-E;m.getUniforms().setValue(r,"morphTargetBaseInfluence",b),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}return{update:c}}function BT(r,t,i,s){let l=new WeakMap;function c(m){const p=s.render.frame,g=m.geometry,_=t.get(m,g);if(l.get(_)!==p&&(t.update(_),l.set(_,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,r.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return _}function f(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:f}}const ix=new Gn,$_=new $v(1,1),ax=new Wv,sx=new r1,rx=new Jv,tv=[],ev=[],nv=new Float32Array(16),iv=new Float32Array(9),av=new Float32Array(4);function $r(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=tv[l];if(c===void 0&&(c=new Float32Array(l),tv[l]=c),t!==0){s.toArray(c,0);for(let f=1,d=0;f!==t;++f)d+=i,r[f].toArray(c,d)}return c}function _n(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function vn(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function mu(r,t){let i=ev[t];i===void 0&&(i=new Int32Array(t),ev[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function IT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function FT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(_n(i,t))return;r.uniform2fv(this.addr,t),vn(i,t)}}function HT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(_n(i,t))return;r.uniform3fv(this.addr,t),vn(i,t)}}function GT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(_n(i,t))return;r.uniform4fv(this.addr,t),vn(i,t)}}function VT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(_n(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),vn(i,t)}else{if(_n(i,s))return;av.set(s),r.uniformMatrix2fv(this.addr,!1,av),vn(i,s)}}function kT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(_n(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),vn(i,t)}else{if(_n(i,s))return;iv.set(s),r.uniformMatrix3fv(this.addr,!1,iv),vn(i,s)}}function XT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(_n(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),vn(i,t)}else{if(_n(i,s))return;nv.set(s),r.uniformMatrix4fv(this.addr,!1,nv),vn(i,s)}}function jT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function WT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(_n(i,t))return;r.uniform2iv(this.addr,t),vn(i,t)}}function YT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(_n(i,t))return;r.uniform3iv(this.addr,t),vn(i,t)}}function qT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(_n(i,t))return;r.uniform4iv(this.addr,t),vn(i,t)}}function ZT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function KT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(_n(i,t))return;r.uniform2uiv(this.addr,t),vn(i,t)}}function QT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(_n(i,t))return;r.uniform3uiv(this.addr,t),vn(i,t)}}function JT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(_n(i,t))return;r.uniform4uiv(this.addr,t),vn(i,t)}}function $T(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?($_.compareFunction=Vv,c=$_):c=ix,i.setTexture2D(t||c,l)}function tA(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||sx,l)}function eA(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||rx,l)}function nA(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||ax,l)}function iA(r){switch(r){case 5126:return IT;case 35664:return FT;case 35665:return HT;case 35666:return GT;case 35674:return VT;case 35675:return kT;case 35676:return XT;case 5124:case 35670:return jT;case 35667:case 35671:return WT;case 35668:case 35672:return YT;case 35669:case 35673:return qT;case 5125:return ZT;case 36294:return KT;case 36295:return QT;case 36296:return JT;case 35678:case 36198:case 36298:case 36306:case 35682:return $T;case 35679:case 36299:case 36307:return tA;case 35680:case 36300:case 36308:case 36293:return eA;case 36289:case 36303:case 36311:case 36292:return nA}}function aA(r,t){r.uniform1fv(this.addr,t)}function sA(r,t){const i=$r(t,this.size,2);r.uniform2fv(this.addr,i)}function rA(r,t){const i=$r(t,this.size,3);r.uniform3fv(this.addr,i)}function oA(r,t){const i=$r(t,this.size,4);r.uniform4fv(this.addr,i)}function lA(r,t){const i=$r(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function cA(r,t){const i=$r(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function uA(r,t){const i=$r(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function fA(r,t){r.uniform1iv(this.addr,t)}function hA(r,t){r.uniform2iv(this.addr,t)}function dA(r,t){r.uniform3iv(this.addr,t)}function pA(r,t){r.uniform4iv(this.addr,t)}function mA(r,t){r.uniform1uiv(this.addr,t)}function gA(r,t){r.uniform2uiv(this.addr,t)}function _A(r,t){r.uniform3uiv(this.addr,t)}function vA(r,t){r.uniform4uiv(this.addr,t)}function xA(r,t,i){const s=this.cache,l=t.length,c=mu(i,l);_n(s,c)||(r.uniform1iv(this.addr,c),vn(s,c));for(let f=0;f!==l;++f)i.setTexture2D(t[f]||ix,c[f])}function yA(r,t,i){const s=this.cache,l=t.length,c=mu(i,l);_n(s,c)||(r.uniform1iv(this.addr,c),vn(s,c));for(let f=0;f!==l;++f)i.setTexture3D(t[f]||sx,c[f])}function SA(r,t,i){const s=this.cache,l=t.length,c=mu(i,l);_n(s,c)||(r.uniform1iv(this.addr,c),vn(s,c));for(let f=0;f!==l;++f)i.setTextureCube(t[f]||rx,c[f])}function MA(r,t,i){const s=this.cache,l=t.length,c=mu(i,l);_n(s,c)||(r.uniform1iv(this.addr,c),vn(s,c));for(let f=0;f!==l;++f)i.setTexture2DArray(t[f]||ax,c[f])}function EA(r){switch(r){case 5126:return aA;case 35664:return sA;case 35665:return rA;case 35666:return oA;case 35674:return lA;case 35675:return cA;case 35676:return uA;case 5124:case 35670:return fA;case 35667:case 35671:return hA;case 35668:case 35672:return dA;case 35669:case 35673:return pA;case 5125:return mA;case 36294:return gA;case 36295:return _A;case 36296:return vA;case 35678:case 36198:case 36298:case 36306:case 35682:return xA;case 35679:case 36299:case 36307:return yA;case 35680:case 36300:case 36308:case 36293:return SA;case 36289:case 36303:case 36311:case 36292:return MA}}class bA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=iA(i.type)}}class TA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=EA(i.type)}}class AA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const d=l[c];d.setValue(t,i[d.id],s)}}}const sd=/(\w+)(\])?(\[|\.)?/g;function sv(r,t){r.seq.push(t),r.map[t.id]=t}function RA(r,t,i){const s=r.name,l=s.length;for(sd.lastIndex=0;;){const c=sd.exec(s),f=sd.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&f+2===l){sv(i,p===void 0?new bA(d,r,t):new TA(d,r,t));break}else{let _=i.map[d];_===void 0&&(_=new AA(d),sv(i,_)),i=_}}}class iu{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const c=t.getActiveUniform(i,l),f=t.getUniformLocation(i,c.name);RA(c,f,this)}}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,f=i.length;c!==f;++c){const d=i[c],m=s[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const f=t[l];f.id in i&&s.push(f)}return s}}function rv(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const CA=37297;let wA=0;function DA(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let f=l;f<c;f++){const d=f+1;s.push(`${d===t?">":" "} ${d}: ${i[f]}`)}return s.join(`
`)}const ov=new fe;function UA(r){Le._getMatrix(ov,Le.workingColorSpace,r);const t=`mat3( ${ov.elements.map(i=>i.toFixed(4))} )`;switch(Le.getTransfer(r)){case ru:return[t,"LinearTransferOETF"];case ke:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function lv(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),l=r.getShaderInfoLog(t).trim();if(s&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const f=parseInt(c[1]);return i.toUpperCase()+`

`+l+`

`+DA(r.getShaderSource(t),f)}else return l}function LA(r,t){const i=UA(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function NA(r,t){let i;switch(t){case _M:i="Linear";break;case vM:i="Reinhard";break;case xM:i="Cineon";break;case yM:i="ACESFilmic";break;case MM:i="AgX";break;case EM:i="Neutral";break;case SM:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const qc=new J;function OA(){Le.getLuminanceCoefficients(qc);const r=qc.x.toFixed(4),t=qc.y.toFixed(4),i=qc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(il).join(`
`)}function PA(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function BA(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),f=c.name;let d=1;c.type===r.FLOAT_MAT2&&(d=2),c.type===r.FLOAT_MAT3&&(d=3),c.type===r.FLOAT_MAT4&&(d=4),i[f]={type:c.type,location:r.getAttribLocation(t,f),locationSize:d}}return i}function il(r){return r!==""}function cv(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function uv(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const IA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kd(r){return r.replace(IA,HA)}const FA=new Map;function HA(r,t){let i=de[t];if(i===void 0){const s=FA.get(t);if(s!==void 0)i=de[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return Kd(i)}const GA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fv(r){return r.replace(GA,VA)}function VA(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function hv(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function kA(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Cv?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===wv?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===pa&&(t="SHADOWMAP_TYPE_VSM"),t}function XA(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case kr:case Xr:t="ENVMAP_TYPE_CUBE";break;case hu:t="ENVMAP_TYPE_CUBE_UV";break}return t}function jA(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Xr:t="ENVMAP_MODE_REFRACTION";break}return t}function WA(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Dv:t="ENVMAP_BLENDING_MULTIPLY";break;case mM:t="ENVMAP_BLENDING_MIX";break;case gM:t="ENVMAP_BLENDING_ADD";break}return t}function YA(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function qA(r,t,i,s){const l=r.getContext(),c=i.defines;let f=i.vertexShader,d=i.fragmentShader;const m=kA(i),p=XA(i),g=jA(i),_=WA(i),x=YA(i),M=zA(i),E=PA(c),b=l.createProgram();let S,v,z=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(il).join(`
`),S.length>0&&(S+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(il).join(`
`),v.length>0&&(v+=`
`)):(S=[hv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(il).join(`
`),v=[hv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+_:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Qa?"#define TONE_MAPPING":"",i.toneMapping!==Qa?de.tonemapping_pars_fragment:"",i.toneMapping!==Qa?NA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",de.colorspace_pars_fragment,LA("linearToOutputTexel",i.outputColorSpace),OA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(il).join(`
`)),f=Kd(f),f=cv(f,i),f=uv(f,i),d=Kd(d),d=cv(d,i),d=uv(d,i),f=fv(f),d=fv(d),i.isRawShaderMaterial!==!0&&(z=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,v=["#define varying in",i.glslVersion===m_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===m_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const L=z+S+f,U=z+v+d,k=rv(l,l.VERTEX_SHADER,L),H=rv(l,l.FRAGMENT_SHADER,U);l.attachShader(b,k),l.attachShader(b,H),i.index0AttributeName!==void 0?l.bindAttribLocation(b,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(b,0,"position"),l.linkProgram(b);function B(I){if(r.debug.checkShaderErrors){const ct=l.getProgramInfoLog(b).trim(),st=l.getShaderInfoLog(k).trim(),_t=l.getShaderInfoLog(H).trim();let mt=!0,P=!0;if(l.getProgramParameter(b,l.LINK_STATUS)===!1)if(mt=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,b,k,H);else{const Y=lv(l,k,"vertex"),Z=lv(l,H,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(b,l.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+ct+`
`+Y+`
`+Z)}else ct!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ct):(st===""||_t==="")&&(P=!1);P&&(I.diagnostics={runnable:mt,programLog:ct,vertexShader:{log:st,prefix:S},fragmentShader:{log:_t,prefix:v}})}l.deleteShader(k),l.deleteShader(H),X=new iu(l,b),D=BA(l,b)}let X;this.getUniforms=function(){return X===void 0&&B(this),X};let D;this.getAttributes=function(){return D===void 0&&B(this),D};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(b,CA)),C},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(b),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=wA++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=k,this.fragmentShader=H,this}let ZA=0;class KA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new QA(t),i.set(t,s)),s}}class QA{constructor(t){this.id=ZA++,this.code=t,this.usedTimes=0}}function JA(r,t,i,s,l,c,f){const d=new cp,m=new KA,p=new Set,g=[],_=l.logarithmicDepthBuffer,x=l.vertexTextures;let M=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(D){return p.add(D),D===0?"uv":`uv${D}`}function S(D,C,I,ct,st){const _t=ct.fog,mt=st.geometry,P=D.isMeshStandardMaterial?ct.environment:null,Y=(D.isMeshStandardMaterial?i:t).get(D.envMap||P),Z=Y&&Y.mapping===hu?Y.image.height:null,Mt=E[D.type];D.precision!==null&&(M=l.getMaxPrecision(D.precision),M!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",M,"instead."));const At=mt.morphAttributes.position||mt.morphAttributes.normal||mt.morphAttributes.color,N=At!==void 0?At.length:0;let $=0;mt.morphAttributes.position!==void 0&&($=1),mt.morphAttributes.normal!==void 0&&($=2),mt.morphAttributes.color!==void 0&&($=3);let bt,q,ut,Tt;if(Mt){const Ae=Ii[Mt];bt=Ae.vertexShader,q=Ae.fragmentShader}else bt=D.vertexShader,q=D.fragmentShader,m.update(D),ut=m.getVertexShaderID(D),Tt=m.getFragmentShaderID(D);const gt=r.getRenderTarget(),It=r.state.buffers.depth.getReversed(),ot=st.isInstancedMesh===!0,Rt=st.isBatchedMesh===!0,$t=!!D.map,Jt=!!D.matcap,Oe=!!Y,G=!!D.aoMap,nn=!!D.lightMap,he=!!D.bumpMap,pe=!!D.normalMap,Wt=!!D.displacementMap,Re=!!D.emissiveMap,Ct=!!D.metalnessMap,w=!!D.roughnessMap,T=D.anisotropy>0,tt=D.clearcoat>0,ft=D.dispersion>0,Et=D.iridescence>0,pt=D.sheen>0,Xt=D.transmission>0,wt=T&&!!D.anisotropyMap,Ft=tt&&!!D.clearcoatMap,ge=tt&&!!D.clearcoatNormalMap,Dt=tt&&!!D.clearcoatRoughnessMap,Gt=Et&&!!D.iridescenceMap,qt=Et&&!!D.iridescenceThicknessMap,Yt=pt&&!!D.sheenColorMap,Pt=pt&&!!D.sheenRoughnessMap,ne=!!D.specularMap,oe=!!D.specularColorMap,Fe=!!D.specularIntensityMap,j=Xt&&!!D.transmissionMap,Ut=Xt&&!!D.thicknessMap,ht=!!D.gradientMap,yt=!!D.alphaMap,Lt=D.alphaTest>0,Nt=!!D.alphaHash,ie=!!D.extensions;let Ke=Qa;D.toneMapped&&(gt===null||gt.isXRRenderTarget===!0)&&(Ke=r.toneMapping);const dn={shaderID:Mt,shaderType:D.type,shaderName:D.name,vertexShader:bt,fragmentShader:q,defines:D.defines,customVertexShaderID:ut,customFragmentShaderID:Tt,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:M,batching:Rt,batchingColor:Rt&&st._colorsTexture!==null,instancing:ot,instancingColor:ot&&st.instanceColor!==null,instancingMorph:ot&&st.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:gt===null?r.outputColorSpace:gt.isXRRenderTarget===!0?gt.texture.colorSpace:Yr,alphaToCoverage:!!D.alphaToCoverage,map:$t,matcap:Jt,envMap:Oe,envMapMode:Oe&&Y.mapping,envMapCubeUVHeight:Z,aoMap:G,lightMap:nn,bumpMap:he,normalMap:pe,displacementMap:x&&Wt,emissiveMap:Re,normalMapObjectSpace:pe&&D.normalMapType===RM,normalMapTangentSpace:pe&&D.normalMapType===Gv,metalnessMap:Ct,roughnessMap:w,anisotropy:T,anisotropyMap:wt,clearcoat:tt,clearcoatMap:Ft,clearcoatNormalMap:ge,clearcoatRoughnessMap:Dt,dispersion:ft,iridescence:Et,iridescenceMap:Gt,iridescenceThicknessMap:qt,sheen:pt,sheenColorMap:Yt,sheenRoughnessMap:Pt,specularMap:ne,specularColorMap:oe,specularIntensityMap:Fe,transmission:Xt,transmissionMap:j,thicknessMap:Ut,gradientMap:ht,opaque:D.transparent===!1&&D.blending===Br&&D.alphaToCoverage===!1,alphaMap:yt,alphaTest:Lt,alphaHash:Nt,combine:D.combine,mapUv:$t&&b(D.map.channel),aoMapUv:G&&b(D.aoMap.channel),lightMapUv:nn&&b(D.lightMap.channel),bumpMapUv:he&&b(D.bumpMap.channel),normalMapUv:pe&&b(D.normalMap.channel),displacementMapUv:Wt&&b(D.displacementMap.channel),emissiveMapUv:Re&&b(D.emissiveMap.channel),metalnessMapUv:Ct&&b(D.metalnessMap.channel),roughnessMapUv:w&&b(D.roughnessMap.channel),anisotropyMapUv:wt&&b(D.anisotropyMap.channel),clearcoatMapUv:Ft&&b(D.clearcoatMap.channel),clearcoatNormalMapUv:ge&&b(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Dt&&b(D.clearcoatRoughnessMap.channel),iridescenceMapUv:Gt&&b(D.iridescenceMap.channel),iridescenceThicknessMapUv:qt&&b(D.iridescenceThicknessMap.channel),sheenColorMapUv:Yt&&b(D.sheenColorMap.channel),sheenRoughnessMapUv:Pt&&b(D.sheenRoughnessMap.channel),specularMapUv:ne&&b(D.specularMap.channel),specularColorMapUv:oe&&b(D.specularColorMap.channel),specularIntensityMapUv:Fe&&b(D.specularIntensityMap.channel),transmissionMapUv:j&&b(D.transmissionMap.channel),thicknessMapUv:Ut&&b(D.thicknessMap.channel),alphaMapUv:yt&&b(D.alphaMap.channel),vertexTangents:!!mt.attributes.tangent&&(pe||T),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!mt.attributes.color&&mt.attributes.color.itemSize===4,pointsUvs:st.isPoints===!0&&!!mt.attributes.uv&&($t||yt),fog:!!_t,useFog:D.fog===!0,fogExp2:!!_t&&_t.isFogExp2,flatShading:D.flatShading===!0,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:It,skinning:st.isSkinnedMesh===!0,morphTargets:mt.morphAttributes.position!==void 0,morphNormals:mt.morphAttributes.normal!==void 0,morphColors:mt.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:$,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:D.dithering,shadowMapEnabled:r.shadowMap.enabled&&I.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ke,decodeVideoTexture:$t&&D.map.isVideoTexture===!0&&Le.getTransfer(D.map.colorSpace)===ke,decodeVideoTextureEmissive:Re&&D.emissiveMap.isVideoTexture===!0&&Le.getTransfer(D.emissiveMap.colorSpace)===ke,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===Fi,flipSided:D.side===Kn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:ie&&D.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ie&&D.extensions.multiDraw===!0||Rt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return dn.vertexUv1s=p.has(1),dn.vertexUv2s=p.has(2),dn.vertexUv3s=p.has(3),p.clear(),dn}function v(D){const C=[];if(D.shaderID?C.push(D.shaderID):(C.push(D.customVertexShaderID),C.push(D.customFragmentShaderID)),D.defines!==void 0)for(const I in D.defines)C.push(I),C.push(D.defines[I]);return D.isRawShaderMaterial===!1&&(z(C,D),L(C,D),C.push(r.outputColorSpace)),C.push(D.customProgramCacheKey),C.join()}function z(D,C){D.push(C.precision),D.push(C.outputColorSpace),D.push(C.envMapMode),D.push(C.envMapCubeUVHeight),D.push(C.mapUv),D.push(C.alphaMapUv),D.push(C.lightMapUv),D.push(C.aoMapUv),D.push(C.bumpMapUv),D.push(C.normalMapUv),D.push(C.displacementMapUv),D.push(C.emissiveMapUv),D.push(C.metalnessMapUv),D.push(C.roughnessMapUv),D.push(C.anisotropyMapUv),D.push(C.clearcoatMapUv),D.push(C.clearcoatNormalMapUv),D.push(C.clearcoatRoughnessMapUv),D.push(C.iridescenceMapUv),D.push(C.iridescenceThicknessMapUv),D.push(C.sheenColorMapUv),D.push(C.sheenRoughnessMapUv),D.push(C.specularMapUv),D.push(C.specularColorMapUv),D.push(C.specularIntensityMapUv),D.push(C.transmissionMapUv),D.push(C.thicknessMapUv),D.push(C.combine),D.push(C.fogExp2),D.push(C.sizeAttenuation),D.push(C.morphTargetsCount),D.push(C.morphAttributeCount),D.push(C.numDirLights),D.push(C.numPointLights),D.push(C.numSpotLights),D.push(C.numSpotLightMaps),D.push(C.numHemiLights),D.push(C.numRectAreaLights),D.push(C.numDirLightShadows),D.push(C.numPointLightShadows),D.push(C.numSpotLightShadows),D.push(C.numSpotLightShadowsWithMaps),D.push(C.numLightProbes),D.push(C.shadowMapType),D.push(C.toneMapping),D.push(C.numClippingPlanes),D.push(C.numClipIntersection),D.push(C.depthPacking)}function L(D,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),D.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reverseDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),D.push(d.mask)}function U(D){const C=E[D.type];let I;if(C){const ct=Ii[C];I=v1.clone(ct.uniforms)}else I=D.uniforms;return I}function k(D,C){let I;for(let ct=0,st=g.length;ct<st;ct++){const _t=g[ct];if(_t.cacheKey===C){I=_t,++I.usedTimes;break}}return I===void 0&&(I=new qA(r,C,D,c),g.push(I)),I}function H(D){if(--D.usedTimes===0){const C=g.indexOf(D);g[C]=g[g.length-1],g.pop(),D.destroy()}}function B(D){m.remove(D)}function X(){m.dispose()}return{getParameters:S,getProgramCacheKey:v,getUniforms:U,acquireProgram:k,releaseProgram:H,releaseShaderCache:B,programs:g,dispose:X}}function $A(){let r=new WeakMap;function t(f){return r.has(f)}function i(f){let d=r.get(f);return d===void 0&&(d={},r.set(f,d)),d}function s(f){r.delete(f)}function l(f,d,m){r.get(f)[d]=m}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function t2(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function dv(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function pv(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function f(_,x,M,E,b,S){let v=r[t];return v===void 0?(v={id:_.id,object:_,geometry:x,material:M,groupOrder:E,renderOrder:_.renderOrder,z:b,group:S},r[t]=v):(v.id=_.id,v.object=_,v.geometry=x,v.material=M,v.groupOrder=E,v.renderOrder=_.renderOrder,v.z=b,v.group=S),t++,v}function d(_,x,M,E,b,S){const v=f(_,x,M,E,b,S);M.transmission>0?s.push(v):M.transparent===!0?l.push(v):i.push(v)}function m(_,x,M,E,b,S){const v=f(_,x,M,E,b,S);M.transmission>0?s.unshift(v):M.transparent===!0?l.unshift(v):i.unshift(v)}function p(_,x){i.length>1&&i.sort(_||t2),s.length>1&&s.sort(x||dv),l.length>1&&l.sort(x||dv)}function g(){for(let _=t,x=r.length;_<x;_++){const M=r[_];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:d,unshift:m,finish:g,sort:p}}function e2(){let r=new WeakMap;function t(s,l){const c=r.get(s);let f;return c===void 0?(f=new pv,r.set(s,[f])):l>=c.length?(f=new pv,c.push(f)):f=c[l],f}function i(){r=new WeakMap}return{get:t,dispose:i}}function n2(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new J,color:new me};break;case"SpotLight":i={position:new J,direction:new J,color:new me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new J,color:new me,distance:0,decay:0};break;case"HemisphereLight":i={direction:new J,skyColor:new me,groundColor:new me};break;case"RectAreaLight":i={color:new me,position:new J,halfWidth:new J,halfHeight:new J};break}return r[t.id]=i,i}}}function i2(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let a2=0;function s2(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function r2(r){const t=new n2,i=i2(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new J);const l=new J,c=new Ie,f=new Ie;function d(p){let g=0,_=0,x=0;for(let D=0;D<9;D++)s.probe[D].set(0,0,0);let M=0,E=0,b=0,S=0,v=0,z=0,L=0,U=0,k=0,H=0,B=0;p.sort(s2);for(let D=0,C=p.length;D<C;D++){const I=p[D],ct=I.color,st=I.intensity,_t=I.distance,mt=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)g+=ct.r*st,_+=ct.g*st,x+=ct.b*st;else if(I.isLightProbe){for(let P=0;P<9;P++)s.probe[P].addScaledVector(I.sh.coefficients[P],st);B++}else if(I.isDirectionalLight){const P=t.get(I);if(P.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const Y=I.shadow,Z=i.get(I);Z.shadowIntensity=Y.intensity,Z.shadowBias=Y.bias,Z.shadowNormalBias=Y.normalBias,Z.shadowRadius=Y.radius,Z.shadowMapSize=Y.mapSize,s.directionalShadow[M]=Z,s.directionalShadowMap[M]=mt,s.directionalShadowMatrix[M]=I.shadow.matrix,z++}s.directional[M]=P,M++}else if(I.isSpotLight){const P=t.get(I);P.position.setFromMatrixPosition(I.matrixWorld),P.color.copy(ct).multiplyScalar(st),P.distance=_t,P.coneCos=Math.cos(I.angle),P.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),P.decay=I.decay,s.spot[b]=P;const Y=I.shadow;if(I.map&&(s.spotLightMap[k]=I.map,k++,Y.updateMatrices(I),I.castShadow&&H++),s.spotLightMatrix[b]=Y.matrix,I.castShadow){const Z=i.get(I);Z.shadowIntensity=Y.intensity,Z.shadowBias=Y.bias,Z.shadowNormalBias=Y.normalBias,Z.shadowRadius=Y.radius,Z.shadowMapSize=Y.mapSize,s.spotShadow[b]=Z,s.spotShadowMap[b]=mt,U++}b++}else if(I.isRectAreaLight){const P=t.get(I);P.color.copy(ct).multiplyScalar(st),P.halfWidth.set(I.width*.5,0,0),P.halfHeight.set(0,I.height*.5,0),s.rectArea[S]=P,S++}else if(I.isPointLight){const P=t.get(I);if(P.color.copy(I.color).multiplyScalar(I.intensity),P.distance=I.distance,P.decay=I.decay,I.castShadow){const Y=I.shadow,Z=i.get(I);Z.shadowIntensity=Y.intensity,Z.shadowBias=Y.bias,Z.shadowNormalBias=Y.normalBias,Z.shadowRadius=Y.radius,Z.shadowMapSize=Y.mapSize,Z.shadowCameraNear=Y.camera.near,Z.shadowCameraFar=Y.camera.far,s.pointShadow[E]=Z,s.pointShadowMap[E]=mt,s.pointShadowMatrix[E]=I.shadow.matrix,L++}s.point[E]=P,E++}else if(I.isHemisphereLight){const P=t.get(I);P.skyColor.copy(I.color).multiplyScalar(st),P.groundColor.copy(I.groundColor).multiplyScalar(st),s.hemi[v]=P,v++}}S>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=zt.LTC_FLOAT_1,s.rectAreaLTC2=zt.LTC_FLOAT_2):(s.rectAreaLTC1=zt.LTC_HALF_1,s.rectAreaLTC2=zt.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=_,s.ambient[2]=x;const X=s.hash;(X.directionalLength!==M||X.pointLength!==E||X.spotLength!==b||X.rectAreaLength!==S||X.hemiLength!==v||X.numDirectionalShadows!==z||X.numPointShadows!==L||X.numSpotShadows!==U||X.numSpotMaps!==k||X.numLightProbes!==B)&&(s.directional.length=M,s.spot.length=b,s.rectArea.length=S,s.point.length=E,s.hemi.length=v,s.directionalShadow.length=z,s.directionalShadowMap.length=z,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=U,s.spotShadowMap.length=U,s.directionalShadowMatrix.length=z,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=U+k-H,s.spotLightMap.length=k,s.numSpotLightShadowsWithMaps=H,s.numLightProbes=B,X.directionalLength=M,X.pointLength=E,X.spotLength=b,X.rectAreaLength=S,X.hemiLength=v,X.numDirectionalShadows=z,X.numPointShadows=L,X.numSpotShadows=U,X.numSpotMaps=k,X.numLightProbes=B,s.version=a2++)}function m(p,g){let _=0,x=0,M=0,E=0,b=0;const S=g.matrixWorldInverse;for(let v=0,z=p.length;v<z;v++){const L=p[v];if(L.isDirectionalLight){const U=s.directional[_];U.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(S),_++}else if(L.isSpotLight){const U=s.spot[M];U.position.setFromMatrixPosition(L.matrixWorld),U.position.applyMatrix4(S),U.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(S),M++}else if(L.isRectAreaLight){const U=s.rectArea[E];U.position.setFromMatrixPosition(L.matrixWorld),U.position.applyMatrix4(S),f.identity(),c.copy(L.matrixWorld),c.premultiply(S),f.extractRotation(c),U.halfWidth.set(L.width*.5,0,0),U.halfHeight.set(0,L.height*.5,0),U.halfWidth.applyMatrix4(f),U.halfHeight.applyMatrix4(f),E++}else if(L.isPointLight){const U=s.point[x];U.position.setFromMatrixPosition(L.matrixWorld),U.position.applyMatrix4(S),x++}else if(L.isHemisphereLight){const U=s.hemi[b];U.direction.setFromMatrixPosition(L.matrixWorld),U.direction.transformDirection(S),b++}}}return{setup:d,setupView:m,state:s}}function mv(r){const t=new r2(r),i=[],s=[];function l(g){p.camera=g,i.length=0,s.length=0}function c(g){i.push(g)}function f(g){s.push(g)}function d(){t.setup(i)}function m(g){t.setupView(i,g)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:f}}function o2(r){let t=new WeakMap;function i(l,c=0){const f=t.get(l);let d;return f===void 0?(d=new mv(r),t.set(l,[d])):c>=f.length?(d=new mv(r),f.push(d)):d=f[c],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const l2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,c2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function u2(r,t,i){let s=new hp;const l=new re,c=new re,f=new en,d=new D1({depthPacking:AM}),m=new U1,p={},g=i.maxTextureSize,_={[$a]:Kn,[Kn]:$a,[Fi]:Fi},x=new ts({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:l2,fragmentShader:c2}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const E=new Qn;E.setAttribute("position",new Ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Zn(E,x),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cv;let v=this.type;this.render=function(H,B,X){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||H.length===0)return;const D=r.getRenderTarget(),C=r.getActiveCubeFace(),I=r.getActiveMipmapLevel(),ct=r.state;ct.setBlending(Ka),ct.buffers.color.setClear(1,1,1,1),ct.buffers.depth.setTest(!0),ct.setScissorTest(!1);const st=v!==pa&&this.type===pa,_t=v===pa&&this.type!==pa;for(let mt=0,P=H.length;mt<P;mt++){const Y=H[mt],Z=Y.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;l.copy(Z.mapSize);const Mt=Z.getFrameExtents();if(l.multiply(Mt),c.copy(Z.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/Mt.x),l.x=c.x*Mt.x,Z.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/Mt.y),l.y=c.y*Mt.y,Z.mapSize.y=c.y)),Z.map===null||st===!0||_t===!0){const N=this.type!==pa?{minFilter:li,magFilter:li}:{};Z.map!==null&&Z.map.dispose(),Z.map=new Os(l.x,l.y,N),Z.map.texture.name=Y.name+".shadowMap",Z.camera.updateProjectionMatrix()}r.setRenderTarget(Z.map),r.clear();const At=Z.getViewportCount();for(let N=0;N<At;N++){const $=Z.getViewport(N);f.set(c.x*$.x,c.y*$.y,c.x*$.z,c.y*$.w),ct.viewport(f),Z.updateMatrices(Y,N),s=Z.getFrustum(),U(B,X,Z.camera,Y,this.type)}Z.isPointLightShadow!==!0&&this.type===pa&&z(Z,X),Z.needsUpdate=!1}v=this.type,S.needsUpdate=!1,r.setRenderTarget(D,C,I)};function z(H,B){const X=t.update(b);x.defines.VSM_SAMPLES!==H.blurSamples&&(x.defines.VSM_SAMPLES=H.blurSamples,M.defines.VSM_SAMPLES=H.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new Os(l.x,l.y)),x.uniforms.shadow_pass.value=H.map.texture,x.uniforms.resolution.value=H.mapSize,x.uniforms.radius.value=H.radius,r.setRenderTarget(H.mapPass),r.clear(),r.renderBufferDirect(B,null,X,x,b,null),M.uniforms.shadow_pass.value=H.mapPass.texture,M.uniforms.resolution.value=H.mapSize,M.uniforms.radius.value=H.radius,r.setRenderTarget(H.map),r.clear(),r.renderBufferDirect(B,null,X,M,b,null)}function L(H,B,X,D){let C=null;const I=X.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(I!==void 0)C=I;else if(C=X.isPointLight===!0?m:d,r.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0){const ct=C.uuid,st=B.uuid;let _t=p[ct];_t===void 0&&(_t={},p[ct]=_t);let mt=_t[st];mt===void 0&&(mt=C.clone(),_t[st]=mt,B.addEventListener("dispose",k)),C=mt}if(C.visible=B.visible,C.wireframe=B.wireframe,D===pa?C.side=B.shadowSide!==null?B.shadowSide:B.side:C.side=B.shadowSide!==null?B.shadowSide:_[B.side],C.alphaMap=B.alphaMap,C.alphaTest=B.alphaTest,C.map=B.map,C.clipShadows=B.clipShadows,C.clippingPlanes=B.clippingPlanes,C.clipIntersection=B.clipIntersection,C.displacementMap=B.displacementMap,C.displacementScale=B.displacementScale,C.displacementBias=B.displacementBias,C.wireframeLinewidth=B.wireframeLinewidth,C.linewidth=B.linewidth,X.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const ct=r.properties.get(C);ct.light=X}return C}function U(H,B,X,D,C){if(H.visible===!1)return;if(H.layers.test(B.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&C===pa)&&(!H.frustumCulled||s.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,H.matrixWorld);const st=t.update(H),_t=H.material;if(Array.isArray(_t)){const mt=st.groups;for(let P=0,Y=mt.length;P<Y;P++){const Z=mt[P],Mt=_t[Z.materialIndex];if(Mt&&Mt.visible){const At=L(H,Mt,D,C);H.onBeforeShadow(r,H,B,X,st,At,Z),r.renderBufferDirect(X,null,st,At,H,Z),H.onAfterShadow(r,H,B,X,st,At,Z)}}}else if(_t.visible){const mt=L(H,_t,D,C);H.onBeforeShadow(r,H,B,X,st,mt,null),r.renderBufferDirect(X,null,st,mt,H,null),H.onAfterShadow(r,H,B,X,st,mt,null)}}const ct=H.children;for(let st=0,_t=ct.length;st<_t;st++)U(ct[st],B,X,D,C)}function k(H){H.target.removeEventListener("dispose",k);for(const X in p){const D=p[X],C=H.target.uuid;C in D&&(D[C].dispose(),delete D[C])}}}const f2={[fd]:hd,[dd]:gd,[pd]:_d,[Vr]:md,[hd]:fd,[gd]:dd,[_d]:pd,[md]:Vr};function h2(r,t){function i(){let j=!1;const Ut=new en;let ht=null;const yt=new en(0,0,0,0);return{setMask:function(Lt){ht!==Lt&&!j&&(r.colorMask(Lt,Lt,Lt,Lt),ht=Lt)},setLocked:function(Lt){j=Lt},setClear:function(Lt,Nt,ie,Ke,dn){dn===!0&&(Lt*=Ke,Nt*=Ke,ie*=Ke),Ut.set(Lt,Nt,ie,Ke),yt.equals(Ut)===!1&&(r.clearColor(Lt,Nt,ie,Ke),yt.copy(Ut))},reset:function(){j=!1,ht=null,yt.set(-1,0,0,0)}}}function s(){let j=!1,Ut=!1,ht=null,yt=null,Lt=null;return{setReversed:function(Nt){if(Ut!==Nt){const ie=t.get("EXT_clip_control");Ut?ie.clipControlEXT(ie.LOWER_LEFT_EXT,ie.ZERO_TO_ONE_EXT):ie.clipControlEXT(ie.LOWER_LEFT_EXT,ie.NEGATIVE_ONE_TO_ONE_EXT);const Ke=Lt;Lt=null,this.setClear(Ke)}Ut=Nt},getReversed:function(){return Ut},setTest:function(Nt){Nt?gt(r.DEPTH_TEST):It(r.DEPTH_TEST)},setMask:function(Nt){ht!==Nt&&!j&&(r.depthMask(Nt),ht=Nt)},setFunc:function(Nt){if(Ut&&(Nt=f2[Nt]),yt!==Nt){switch(Nt){case fd:r.depthFunc(r.NEVER);break;case hd:r.depthFunc(r.ALWAYS);break;case dd:r.depthFunc(r.LESS);break;case Vr:r.depthFunc(r.LEQUAL);break;case pd:r.depthFunc(r.EQUAL);break;case md:r.depthFunc(r.GEQUAL);break;case gd:r.depthFunc(r.GREATER);break;case _d:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}yt=Nt}},setLocked:function(Nt){j=Nt},setClear:function(Nt){Lt!==Nt&&(Ut&&(Nt=1-Nt),r.clearDepth(Nt),Lt=Nt)},reset:function(){j=!1,ht=null,yt=null,Lt=null,Ut=!1}}}function l(){let j=!1,Ut=null,ht=null,yt=null,Lt=null,Nt=null,ie=null,Ke=null,dn=null;return{setTest:function(Ae){j||(Ae?gt(r.STENCIL_TEST):It(r.STENCIL_TEST))},setMask:function(Ae){Ut!==Ae&&!j&&(r.stencilMask(Ae),Ut=Ae)},setFunc:function(Ae,bn,Si){(ht!==Ae||yt!==bn||Lt!==Si)&&(r.stencilFunc(Ae,bn,Si),ht=Ae,yt=bn,Lt=Si)},setOp:function(Ae,bn,Si){(Nt!==Ae||ie!==bn||Ke!==Si)&&(r.stencilOp(Ae,bn,Si),Nt=Ae,ie=bn,Ke=Si)},setLocked:function(Ae){j=Ae},setClear:function(Ae){dn!==Ae&&(r.clearStencil(Ae),dn=Ae)},reset:function(){j=!1,Ut=null,ht=null,yt=null,Lt=null,Nt=null,ie=null,Ke=null,dn=null}}}const c=new i,f=new s,d=new l,m=new WeakMap,p=new WeakMap;let g={},_={},x=new WeakMap,M=[],E=null,b=!1,S=null,v=null,z=null,L=null,U=null,k=null,H=null,B=new me(0,0,0),X=0,D=!1,C=null,I=null,ct=null,st=null,_t=null;const mt=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,Y=0;const Z=r.getParameter(r.VERSION);Z.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(Z)[1]),P=Y>=1):Z.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),P=Y>=2);let Mt=null,At={};const N=r.getParameter(r.SCISSOR_BOX),$=r.getParameter(r.VIEWPORT),bt=new en().fromArray(N),q=new en().fromArray($);function ut(j,Ut,ht,yt){const Lt=new Uint8Array(4),Nt=r.createTexture();r.bindTexture(j,Nt),r.texParameteri(j,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(j,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ie=0;ie<ht;ie++)j===r.TEXTURE_3D||j===r.TEXTURE_2D_ARRAY?r.texImage3D(Ut,0,r.RGBA,1,1,yt,0,r.RGBA,r.UNSIGNED_BYTE,Lt):r.texImage2D(Ut+ie,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Lt);return Nt}const Tt={};Tt[r.TEXTURE_2D]=ut(r.TEXTURE_2D,r.TEXTURE_2D,1),Tt[r.TEXTURE_CUBE_MAP]=ut(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Tt[r.TEXTURE_2D_ARRAY]=ut(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Tt[r.TEXTURE_3D]=ut(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),d.setClear(0),gt(r.DEPTH_TEST),f.setFunc(Vr),he(!1),pe(l_),gt(r.CULL_FACE),G(Ka);function gt(j){g[j]!==!0&&(r.enable(j),g[j]=!0)}function It(j){g[j]!==!1&&(r.disable(j),g[j]=!1)}function ot(j,Ut){return _[j]!==Ut?(r.bindFramebuffer(j,Ut),_[j]=Ut,j===r.DRAW_FRAMEBUFFER&&(_[r.FRAMEBUFFER]=Ut),j===r.FRAMEBUFFER&&(_[r.DRAW_FRAMEBUFFER]=Ut),!0):!1}function Rt(j,Ut){let ht=M,yt=!1;if(j){ht=x.get(Ut),ht===void 0&&(ht=[],x.set(Ut,ht));const Lt=j.textures;if(ht.length!==Lt.length||ht[0]!==r.COLOR_ATTACHMENT0){for(let Nt=0,ie=Lt.length;Nt<ie;Nt++)ht[Nt]=r.COLOR_ATTACHMENT0+Nt;ht.length=Lt.length,yt=!0}}else ht[0]!==r.BACK&&(ht[0]=r.BACK,yt=!0);yt&&r.drawBuffers(ht)}function $t(j){return E!==j?(r.useProgram(j),E=j,!0):!1}const Jt={[ws]:r.FUNC_ADD,[JS]:r.FUNC_SUBTRACT,[$S]:r.FUNC_REVERSE_SUBTRACT};Jt[tM]=r.MIN,Jt[eM]=r.MAX;const Oe={[nM]:r.ZERO,[iM]:r.ONE,[aM]:r.SRC_COLOR,[cd]:r.SRC_ALPHA,[uM]:r.SRC_ALPHA_SATURATE,[lM]:r.DST_COLOR,[rM]:r.DST_ALPHA,[sM]:r.ONE_MINUS_SRC_COLOR,[ud]:r.ONE_MINUS_SRC_ALPHA,[cM]:r.ONE_MINUS_DST_COLOR,[oM]:r.ONE_MINUS_DST_ALPHA,[fM]:r.CONSTANT_COLOR,[hM]:r.ONE_MINUS_CONSTANT_COLOR,[dM]:r.CONSTANT_ALPHA,[pM]:r.ONE_MINUS_CONSTANT_ALPHA};function G(j,Ut,ht,yt,Lt,Nt,ie,Ke,dn,Ae){if(j===Ka){b===!0&&(It(r.BLEND),b=!1);return}if(b===!1&&(gt(r.BLEND),b=!0),j!==QS){if(j!==S||Ae!==D){if((v!==ws||U!==ws)&&(r.blendEquation(r.FUNC_ADD),v=ws,U=ws),Ae)switch(j){case Br:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case c_:r.blendFunc(r.ONE,r.ONE);break;case u_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case f_:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}else switch(j){case Br:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case c_:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case u_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case f_:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}z=null,L=null,k=null,H=null,B.set(0,0,0),X=0,S=j,D=Ae}return}Lt=Lt||Ut,Nt=Nt||ht,ie=ie||yt,(Ut!==v||Lt!==U)&&(r.blendEquationSeparate(Jt[Ut],Jt[Lt]),v=Ut,U=Lt),(ht!==z||yt!==L||Nt!==k||ie!==H)&&(r.blendFuncSeparate(Oe[ht],Oe[yt],Oe[Nt],Oe[ie]),z=ht,L=yt,k=Nt,H=ie),(Ke.equals(B)===!1||dn!==X)&&(r.blendColor(Ke.r,Ke.g,Ke.b,dn),B.copy(Ke),X=dn),S=j,D=!1}function nn(j,Ut){j.side===Fi?It(r.CULL_FACE):gt(r.CULL_FACE);let ht=j.side===Kn;Ut&&(ht=!ht),he(ht),j.blending===Br&&j.transparent===!1?G(Ka):G(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),f.setFunc(j.depthFunc),f.setTest(j.depthTest),f.setMask(j.depthWrite),c.setMask(j.colorWrite);const yt=j.stencilWrite;d.setTest(yt),yt&&(d.setMask(j.stencilWriteMask),d.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),d.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),Re(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?gt(r.SAMPLE_ALPHA_TO_COVERAGE):It(r.SAMPLE_ALPHA_TO_COVERAGE)}function he(j){C!==j&&(j?r.frontFace(r.CW):r.frontFace(r.CCW),C=j)}function pe(j){j!==ZS?(gt(r.CULL_FACE),j!==I&&(j===l_?r.cullFace(r.BACK):j===KS?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):It(r.CULL_FACE),I=j}function Wt(j){j!==ct&&(P&&r.lineWidth(j),ct=j)}function Re(j,Ut,ht){j?(gt(r.POLYGON_OFFSET_FILL),(st!==Ut||_t!==ht)&&(r.polygonOffset(Ut,ht),st=Ut,_t=ht)):It(r.POLYGON_OFFSET_FILL)}function Ct(j){j?gt(r.SCISSOR_TEST):It(r.SCISSOR_TEST)}function w(j){j===void 0&&(j=r.TEXTURE0+mt-1),Mt!==j&&(r.activeTexture(j),Mt=j)}function T(j,Ut,ht){ht===void 0&&(Mt===null?ht=r.TEXTURE0+mt-1:ht=Mt);let yt=At[ht];yt===void 0&&(yt={type:void 0,texture:void 0},At[ht]=yt),(yt.type!==j||yt.texture!==Ut)&&(Mt!==ht&&(r.activeTexture(ht),Mt=ht),r.bindTexture(j,Ut||Tt[j]),yt.type=j,yt.texture=Ut)}function tt(){const j=At[Mt];j!==void 0&&j.type!==void 0&&(r.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function ft(){try{r.compressedTexImage2D.apply(r,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Et(){try{r.compressedTexImage3D.apply(r,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function pt(){try{r.texSubImage2D.apply(r,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Xt(){try{r.texSubImage3D.apply(r,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function wt(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ft(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ge(){try{r.texStorage2D.apply(r,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Dt(){try{r.texStorage3D.apply(r,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Gt(){try{r.texImage2D.apply(r,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function qt(){try{r.texImage3D.apply(r,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Yt(j){bt.equals(j)===!1&&(r.scissor(j.x,j.y,j.z,j.w),bt.copy(j))}function Pt(j){q.equals(j)===!1&&(r.viewport(j.x,j.y,j.z,j.w),q.copy(j))}function ne(j,Ut){let ht=p.get(Ut);ht===void 0&&(ht=new WeakMap,p.set(Ut,ht));let yt=ht.get(j);yt===void 0&&(yt=r.getUniformBlockIndex(Ut,j.name),ht.set(j,yt))}function oe(j,Ut){const yt=p.get(Ut).get(j);m.get(Ut)!==yt&&(r.uniformBlockBinding(Ut,yt,j.__bindingPointIndex),m.set(Ut,yt))}function Fe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},Mt=null,At={},_={},x=new WeakMap,M=[],E=null,b=!1,S=null,v=null,z=null,L=null,U=null,k=null,H=null,B=new me(0,0,0),X=0,D=!1,C=null,I=null,ct=null,st=null,_t=null,bt.set(0,0,r.canvas.width,r.canvas.height),q.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),d.reset()}return{buffers:{color:c,depth:f,stencil:d},enable:gt,disable:It,bindFramebuffer:ot,drawBuffers:Rt,useProgram:$t,setBlending:G,setMaterial:nn,setFlipSided:he,setCullFace:pe,setLineWidth:Wt,setPolygonOffset:Re,setScissorTest:Ct,activeTexture:w,bindTexture:T,unbindTexture:tt,compressedTexImage2D:ft,compressedTexImage3D:Et,texImage2D:Gt,texImage3D:qt,updateUBOMapping:ne,uniformBlockBinding:oe,texStorage2D:ge,texStorage3D:Dt,texSubImage2D:pt,texSubImage3D:Xt,compressedTexSubImage2D:wt,compressedTexSubImage3D:Ft,scissor:Yt,viewport:Pt,reset:Fe}}function d2(r,t,i,s,l,c,f){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new re,g=new WeakMap;let _;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(w,T){return M?new OffscreenCanvas(w,T):lu("canvas")}function b(w,T,tt){let ft=1;const Et=Ct(w);if((Et.width>tt||Et.height>tt)&&(ft=tt/Math.max(Et.width,Et.height)),ft<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const pt=Math.floor(ft*Et.width),Xt=Math.floor(ft*Et.height);_===void 0&&(_=E(pt,Xt));const wt=T?E(pt,Xt):_;return wt.width=pt,wt.height=Xt,wt.getContext("2d").drawImage(w,0,0,pt,Xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Et.width+"x"+Et.height+") to ("+pt+"x"+Xt+")."),wt}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Et.width+"x"+Et.height+")."),w;return w}function S(w){return w.generateMipmaps}function v(w){r.generateMipmap(w)}function z(w){return w.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?r.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function L(w,T,tt,ft,Et=!1){if(w!==null){if(r[w]!==void 0)return r[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let pt=T;if(T===r.RED&&(tt===r.FLOAT&&(pt=r.R32F),tt===r.HALF_FLOAT&&(pt=r.R16F),tt===r.UNSIGNED_BYTE&&(pt=r.R8)),T===r.RED_INTEGER&&(tt===r.UNSIGNED_BYTE&&(pt=r.R8UI),tt===r.UNSIGNED_SHORT&&(pt=r.R16UI),tt===r.UNSIGNED_INT&&(pt=r.R32UI),tt===r.BYTE&&(pt=r.R8I),tt===r.SHORT&&(pt=r.R16I),tt===r.INT&&(pt=r.R32I)),T===r.RG&&(tt===r.FLOAT&&(pt=r.RG32F),tt===r.HALF_FLOAT&&(pt=r.RG16F),tt===r.UNSIGNED_BYTE&&(pt=r.RG8)),T===r.RG_INTEGER&&(tt===r.UNSIGNED_BYTE&&(pt=r.RG8UI),tt===r.UNSIGNED_SHORT&&(pt=r.RG16UI),tt===r.UNSIGNED_INT&&(pt=r.RG32UI),tt===r.BYTE&&(pt=r.RG8I),tt===r.SHORT&&(pt=r.RG16I),tt===r.INT&&(pt=r.RG32I)),T===r.RGB_INTEGER&&(tt===r.UNSIGNED_BYTE&&(pt=r.RGB8UI),tt===r.UNSIGNED_SHORT&&(pt=r.RGB16UI),tt===r.UNSIGNED_INT&&(pt=r.RGB32UI),tt===r.BYTE&&(pt=r.RGB8I),tt===r.SHORT&&(pt=r.RGB16I),tt===r.INT&&(pt=r.RGB32I)),T===r.RGBA_INTEGER&&(tt===r.UNSIGNED_BYTE&&(pt=r.RGBA8UI),tt===r.UNSIGNED_SHORT&&(pt=r.RGBA16UI),tt===r.UNSIGNED_INT&&(pt=r.RGBA32UI),tt===r.BYTE&&(pt=r.RGBA8I),tt===r.SHORT&&(pt=r.RGBA16I),tt===r.INT&&(pt=r.RGBA32I)),T===r.RGB&&tt===r.UNSIGNED_INT_5_9_9_9_REV&&(pt=r.RGB9_E5),T===r.RGBA){const Xt=Et?ru:Le.getTransfer(ft);tt===r.FLOAT&&(pt=r.RGBA32F),tt===r.HALF_FLOAT&&(pt=r.RGBA16F),tt===r.UNSIGNED_BYTE&&(pt=Xt===ke?r.SRGB8_ALPHA8:r.RGBA8),tt===r.UNSIGNED_SHORT_4_4_4_4&&(pt=r.RGBA4),tt===r.UNSIGNED_SHORT_5_5_5_1&&(pt=r.RGB5_A1)}return(pt===r.R16F||pt===r.R32F||pt===r.RG16F||pt===r.RG32F||pt===r.RGBA16F||pt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),pt}function U(w,T){let tt;return w?T===null||T===Ns||T===jr?tt=r.DEPTH24_STENCIL8:T===Gi?tt=r.DEPTH32F_STENCIL8:T===sl&&(tt=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Ns||T===jr?tt=r.DEPTH_COMPONENT24:T===Gi?tt=r.DEPTH_COMPONENT32F:T===sl&&(tt=r.DEPTH_COMPONENT16),tt}function k(w,T){return S(w)===!0||w.isFramebufferTexture&&w.minFilter!==li&&w.minFilter!==Hi?Math.log2(Math.max(T.width,T.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?T.mipmaps.length:1}function H(w){const T=w.target;T.removeEventListener("dispose",H),X(T),T.isVideoTexture&&g.delete(T)}function B(w){const T=w.target;T.removeEventListener("dispose",B),C(T)}function X(w){const T=s.get(w);if(T.__webglInit===void 0)return;const tt=w.source,ft=x.get(tt);if(ft){const Et=ft[T.__cacheKey];Et.usedTimes--,Et.usedTimes===0&&D(w),Object.keys(ft).length===0&&x.delete(tt)}s.remove(w)}function D(w){const T=s.get(w);r.deleteTexture(T.__webglTexture);const tt=w.source,ft=x.get(tt);delete ft[T.__cacheKey],f.memory.textures--}function C(w){const T=s.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),s.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let ft=0;ft<6;ft++){if(Array.isArray(T.__webglFramebuffer[ft]))for(let Et=0;Et<T.__webglFramebuffer[ft].length;Et++)r.deleteFramebuffer(T.__webglFramebuffer[ft][Et]);else r.deleteFramebuffer(T.__webglFramebuffer[ft]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[ft])}else{if(Array.isArray(T.__webglFramebuffer))for(let ft=0;ft<T.__webglFramebuffer.length;ft++)r.deleteFramebuffer(T.__webglFramebuffer[ft]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ft=0;ft<T.__webglColorRenderbuffer.length;ft++)T.__webglColorRenderbuffer[ft]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[ft]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const tt=w.textures;for(let ft=0,Et=tt.length;ft<Et;ft++){const pt=s.get(tt[ft]);pt.__webglTexture&&(r.deleteTexture(pt.__webglTexture),f.memory.textures--),s.remove(tt[ft])}s.remove(w)}let I=0;function ct(){I=0}function st(){const w=I;return w>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+l.maxTextures),I+=1,w}function _t(w){const T=[];return T.push(w.wrapS),T.push(w.wrapT),T.push(w.wrapR||0),T.push(w.magFilter),T.push(w.minFilter),T.push(w.anisotropy),T.push(w.internalFormat),T.push(w.format),T.push(w.type),T.push(w.generateMipmaps),T.push(w.premultiplyAlpha),T.push(w.flipY),T.push(w.unpackAlignment),T.push(w.colorSpace),T.join()}function mt(w,T){const tt=s.get(w);if(w.isVideoTexture&&Wt(w),w.isRenderTargetTexture===!1&&w.version>0&&tt.__version!==w.version){const ft=w.image;if(ft===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ft.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(tt,w,T);return}}i.bindTexture(r.TEXTURE_2D,tt.__webglTexture,r.TEXTURE0+T)}function P(w,T){const tt=s.get(w);if(w.version>0&&tt.__version!==w.version){q(tt,w,T);return}i.bindTexture(r.TEXTURE_2D_ARRAY,tt.__webglTexture,r.TEXTURE0+T)}function Y(w,T){const tt=s.get(w);if(w.version>0&&tt.__version!==w.version){q(tt,w,T);return}i.bindTexture(r.TEXTURE_3D,tt.__webglTexture,r.TEXTURE0+T)}function Z(w,T){const tt=s.get(w);if(w.version>0&&tt.__version!==w.version){ut(tt,w,T);return}i.bindTexture(r.TEXTURE_CUBE_MAP,tt.__webglTexture,r.TEXTURE0+T)}const Mt={[yd]:r.REPEAT,[Us]:r.CLAMP_TO_EDGE,[Sd]:r.MIRRORED_REPEAT},At={[li]:r.NEAREST,[bM]:r.NEAREST_MIPMAP_NEAREST,[xc]:r.NEAREST_MIPMAP_LINEAR,[Hi]:r.LINEAR,[Dh]:r.LINEAR_MIPMAP_NEAREST,[Ls]:r.LINEAR_MIPMAP_LINEAR},N={[CM]:r.NEVER,[OM]:r.ALWAYS,[wM]:r.LESS,[Vv]:r.LEQUAL,[DM]:r.EQUAL,[NM]:r.GEQUAL,[UM]:r.GREATER,[LM]:r.NOTEQUAL};function $(w,T){if(T.type===Gi&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Hi||T.magFilter===Dh||T.magFilter===xc||T.magFilter===Ls||T.minFilter===Hi||T.minFilter===Dh||T.minFilter===xc||T.minFilter===Ls)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(w,r.TEXTURE_WRAP_S,Mt[T.wrapS]),r.texParameteri(w,r.TEXTURE_WRAP_T,Mt[T.wrapT]),(w===r.TEXTURE_3D||w===r.TEXTURE_2D_ARRAY)&&r.texParameteri(w,r.TEXTURE_WRAP_R,Mt[T.wrapR]),r.texParameteri(w,r.TEXTURE_MAG_FILTER,At[T.magFilter]),r.texParameteri(w,r.TEXTURE_MIN_FILTER,At[T.minFilter]),T.compareFunction&&(r.texParameteri(w,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(w,r.TEXTURE_COMPARE_FUNC,N[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===li||T.minFilter!==xc&&T.minFilter!==Ls||T.type===Gi&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const tt=t.get("EXT_texture_filter_anisotropic");r.texParameterf(w,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function bt(w,T){let tt=!1;w.__webglInit===void 0&&(w.__webglInit=!0,T.addEventListener("dispose",H));const ft=T.source;let Et=x.get(ft);Et===void 0&&(Et={},x.set(ft,Et));const pt=_t(T);if(pt!==w.__cacheKey){Et[pt]===void 0&&(Et[pt]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,tt=!0),Et[pt].usedTimes++;const Xt=Et[w.__cacheKey];Xt!==void 0&&(Et[w.__cacheKey].usedTimes--,Xt.usedTimes===0&&D(T)),w.__cacheKey=pt,w.__webglTexture=Et[pt].texture}return tt}function q(w,T,tt){let ft=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ft=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ft=r.TEXTURE_3D);const Et=bt(w,T),pt=T.source;i.bindTexture(ft,w.__webglTexture,r.TEXTURE0+tt);const Xt=s.get(pt);if(pt.version!==Xt.__version||Et===!0){i.activeTexture(r.TEXTURE0+tt);const wt=Le.getPrimaries(Le.workingColorSpace),Ft=T.colorSpace===Za?null:Le.getPrimaries(T.colorSpace),ge=T.colorSpace===Za||wt===Ft?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);let Dt=b(T.image,!1,l.maxTextureSize);Dt=Re(T,Dt);const Gt=c.convert(T.format,T.colorSpace),qt=c.convert(T.type);let Yt=L(T.internalFormat,Gt,qt,T.colorSpace,T.isVideoTexture);$(ft,T);let Pt;const ne=T.mipmaps,oe=T.isVideoTexture!==!0,Fe=Xt.__version===void 0||Et===!0,j=pt.dataReady,Ut=k(T,Dt);if(T.isDepthTexture)Yt=U(T.format===Wr,T.type),Fe&&(oe?i.texStorage2D(r.TEXTURE_2D,1,Yt,Dt.width,Dt.height):i.texImage2D(r.TEXTURE_2D,0,Yt,Dt.width,Dt.height,0,Gt,qt,null));else if(T.isDataTexture)if(ne.length>0){oe&&Fe&&i.texStorage2D(r.TEXTURE_2D,Ut,Yt,ne[0].width,ne[0].height);for(let ht=0,yt=ne.length;ht<yt;ht++)Pt=ne[ht],oe?j&&i.texSubImage2D(r.TEXTURE_2D,ht,0,0,Pt.width,Pt.height,Gt,qt,Pt.data):i.texImage2D(r.TEXTURE_2D,ht,Yt,Pt.width,Pt.height,0,Gt,qt,Pt.data);T.generateMipmaps=!1}else oe?(Fe&&i.texStorage2D(r.TEXTURE_2D,Ut,Yt,Dt.width,Dt.height),j&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Dt.width,Dt.height,Gt,qt,Dt.data)):i.texImage2D(r.TEXTURE_2D,0,Yt,Dt.width,Dt.height,0,Gt,qt,Dt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){oe&&Fe&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ut,Yt,ne[0].width,ne[0].height,Dt.depth);for(let ht=0,yt=ne.length;ht<yt;ht++)if(Pt=ne[ht],T.format!==Di)if(Gt!==null)if(oe){if(j)if(T.layerUpdates.size>0){const Lt=j_(Pt.width,Pt.height,T.format,T.type);for(const Nt of T.layerUpdates){const ie=Pt.data.subarray(Nt*Lt/Pt.data.BYTES_PER_ELEMENT,(Nt+1)*Lt/Pt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ht,0,0,Nt,Pt.width,Pt.height,1,Gt,ie)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ht,0,0,0,Pt.width,Pt.height,Dt.depth,Gt,Pt.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ht,Yt,Pt.width,Pt.height,Dt.depth,0,Pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else oe?j&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,ht,0,0,0,Pt.width,Pt.height,Dt.depth,Gt,qt,Pt.data):i.texImage3D(r.TEXTURE_2D_ARRAY,ht,Yt,Pt.width,Pt.height,Dt.depth,0,Gt,qt,Pt.data)}else{oe&&Fe&&i.texStorage2D(r.TEXTURE_2D,Ut,Yt,ne[0].width,ne[0].height);for(let ht=0,yt=ne.length;ht<yt;ht++)Pt=ne[ht],T.format!==Di?Gt!==null?oe?j&&i.compressedTexSubImage2D(r.TEXTURE_2D,ht,0,0,Pt.width,Pt.height,Gt,Pt.data):i.compressedTexImage2D(r.TEXTURE_2D,ht,Yt,Pt.width,Pt.height,0,Pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):oe?j&&i.texSubImage2D(r.TEXTURE_2D,ht,0,0,Pt.width,Pt.height,Gt,qt,Pt.data):i.texImage2D(r.TEXTURE_2D,ht,Yt,Pt.width,Pt.height,0,Gt,qt,Pt.data)}else if(T.isDataArrayTexture)if(oe){if(Fe&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ut,Yt,Dt.width,Dt.height,Dt.depth),j)if(T.layerUpdates.size>0){const ht=j_(Dt.width,Dt.height,T.format,T.type);for(const yt of T.layerUpdates){const Lt=Dt.data.subarray(yt*ht/Dt.data.BYTES_PER_ELEMENT,(yt+1)*ht/Dt.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,yt,Dt.width,Dt.height,1,Gt,qt,Lt)}T.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Dt.width,Dt.height,Dt.depth,Gt,qt,Dt.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Yt,Dt.width,Dt.height,Dt.depth,0,Gt,qt,Dt.data);else if(T.isData3DTexture)oe?(Fe&&i.texStorage3D(r.TEXTURE_3D,Ut,Yt,Dt.width,Dt.height,Dt.depth),j&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Dt.width,Dt.height,Dt.depth,Gt,qt,Dt.data)):i.texImage3D(r.TEXTURE_3D,0,Yt,Dt.width,Dt.height,Dt.depth,0,Gt,qt,Dt.data);else if(T.isFramebufferTexture){if(Fe)if(oe)i.texStorage2D(r.TEXTURE_2D,Ut,Yt,Dt.width,Dt.height);else{let ht=Dt.width,yt=Dt.height;for(let Lt=0;Lt<Ut;Lt++)i.texImage2D(r.TEXTURE_2D,Lt,Yt,ht,yt,0,Gt,qt,null),ht>>=1,yt>>=1}}else if(ne.length>0){if(oe&&Fe){const ht=Ct(ne[0]);i.texStorage2D(r.TEXTURE_2D,Ut,Yt,ht.width,ht.height)}for(let ht=0,yt=ne.length;ht<yt;ht++)Pt=ne[ht],oe?j&&i.texSubImage2D(r.TEXTURE_2D,ht,0,0,Gt,qt,Pt):i.texImage2D(r.TEXTURE_2D,ht,Yt,Gt,qt,Pt);T.generateMipmaps=!1}else if(oe){if(Fe){const ht=Ct(Dt);i.texStorage2D(r.TEXTURE_2D,Ut,Yt,ht.width,ht.height)}j&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Gt,qt,Dt)}else i.texImage2D(r.TEXTURE_2D,0,Yt,Gt,qt,Dt);S(T)&&v(ft),Xt.__version=pt.version,T.onUpdate&&T.onUpdate(T)}w.__version=T.version}function ut(w,T,tt){if(T.image.length!==6)return;const ft=bt(w,T),Et=T.source;i.bindTexture(r.TEXTURE_CUBE_MAP,w.__webglTexture,r.TEXTURE0+tt);const pt=s.get(Et);if(Et.version!==pt.__version||ft===!0){i.activeTexture(r.TEXTURE0+tt);const Xt=Le.getPrimaries(Le.workingColorSpace),wt=T.colorSpace===Za?null:Le.getPrimaries(T.colorSpace),Ft=T.colorSpace===Za||Xt===wt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ft);const ge=T.isCompressedTexture||T.image[0].isCompressedTexture,Dt=T.image[0]&&T.image[0].isDataTexture,Gt=[];for(let yt=0;yt<6;yt++)!ge&&!Dt?Gt[yt]=b(T.image[yt],!0,l.maxCubemapSize):Gt[yt]=Dt?T.image[yt].image:T.image[yt],Gt[yt]=Re(T,Gt[yt]);const qt=Gt[0],Yt=c.convert(T.format,T.colorSpace),Pt=c.convert(T.type),ne=L(T.internalFormat,Yt,Pt,T.colorSpace),oe=T.isVideoTexture!==!0,Fe=pt.__version===void 0||ft===!0,j=Et.dataReady;let Ut=k(T,qt);$(r.TEXTURE_CUBE_MAP,T);let ht;if(ge){oe&&Fe&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Ut,ne,qt.width,qt.height);for(let yt=0;yt<6;yt++){ht=Gt[yt].mipmaps;for(let Lt=0;Lt<ht.length;Lt++){const Nt=ht[Lt];T.format!==Di?Yt!==null?oe?j&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Lt,0,0,Nt.width,Nt.height,Yt,Nt.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Lt,ne,Nt.width,Nt.height,0,Nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):oe?j&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Lt,0,0,Nt.width,Nt.height,Yt,Pt,Nt.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Lt,ne,Nt.width,Nt.height,0,Yt,Pt,Nt.data)}}}else{if(ht=T.mipmaps,oe&&Fe){ht.length>0&&Ut++;const yt=Ct(Gt[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Ut,ne,yt.width,yt.height)}for(let yt=0;yt<6;yt++)if(Dt){oe?j&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,Gt[yt].width,Gt[yt].height,Yt,Pt,Gt[yt].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,ne,Gt[yt].width,Gt[yt].height,0,Yt,Pt,Gt[yt].data);for(let Lt=0;Lt<ht.length;Lt++){const ie=ht[Lt].image[yt].image;oe?j&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Lt+1,0,0,ie.width,ie.height,Yt,Pt,ie.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Lt+1,ne,ie.width,ie.height,0,Yt,Pt,ie.data)}}else{oe?j&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,Yt,Pt,Gt[yt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,ne,Yt,Pt,Gt[yt]);for(let Lt=0;Lt<ht.length;Lt++){const Nt=ht[Lt];oe?j&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Lt+1,0,0,Yt,Pt,Nt.image[yt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Lt+1,ne,Yt,Pt,Nt.image[yt])}}}S(T)&&v(r.TEXTURE_CUBE_MAP),pt.__version=Et.version,T.onUpdate&&T.onUpdate(T)}w.__version=T.version}function Tt(w,T,tt,ft,Et,pt){const Xt=c.convert(tt.format,tt.colorSpace),wt=c.convert(tt.type),Ft=L(tt.internalFormat,Xt,wt,tt.colorSpace),ge=s.get(T),Dt=s.get(tt);if(Dt.__renderTarget=T,!ge.__hasExternalTextures){const Gt=Math.max(1,T.width>>pt),qt=Math.max(1,T.height>>pt);Et===r.TEXTURE_3D||Et===r.TEXTURE_2D_ARRAY?i.texImage3D(Et,pt,Ft,Gt,qt,T.depth,0,Xt,wt,null):i.texImage2D(Et,pt,Ft,Gt,qt,0,Xt,wt,null)}i.bindFramebuffer(r.FRAMEBUFFER,w),pe(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ft,Et,Dt.__webglTexture,0,he(T)):(Et===r.TEXTURE_2D||Et>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Et<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ft,Et,Dt.__webglTexture,pt),i.bindFramebuffer(r.FRAMEBUFFER,null)}function gt(w,T,tt){if(r.bindRenderbuffer(r.RENDERBUFFER,w),T.depthBuffer){const ft=T.depthTexture,Et=ft&&ft.isDepthTexture?ft.type:null,pt=U(T.stencilBuffer,Et),Xt=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,wt=he(T);pe(T)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,wt,pt,T.width,T.height):tt?r.renderbufferStorageMultisample(r.RENDERBUFFER,wt,pt,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,pt,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Xt,r.RENDERBUFFER,w)}else{const ft=T.textures;for(let Et=0;Et<ft.length;Et++){const pt=ft[Et],Xt=c.convert(pt.format,pt.colorSpace),wt=c.convert(pt.type),Ft=L(pt.internalFormat,Xt,wt,pt.colorSpace),ge=he(T);tt&&pe(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ge,Ft,T.width,T.height):pe(T)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ge,Ft,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,Ft,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function It(w,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(r.FRAMEBUFFER,w),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ft=s.get(T.depthTexture);ft.__renderTarget=T,(!ft.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),mt(T.depthTexture,0);const Et=ft.__webglTexture,pt=he(T);if(T.depthTexture.format===Ir)pe(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Et,0,pt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Et,0);else if(T.depthTexture.format===Wr)pe(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Et,0,pt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Et,0);else throw new Error("Unknown depthTexture format")}function ot(w){const T=s.get(w),tt=w.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==w.depthTexture){const ft=w.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ft){const Et=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ft.removeEventListener("dispose",Et)};ft.addEventListener("dispose",Et),T.__depthDisposeCallback=Et}T.__boundDepthTexture=ft}if(w.depthTexture&&!T.__autoAllocateDepthBuffer){if(tt)throw new Error("target.depthTexture not supported in Cube render targets");It(T.__webglFramebuffer,w)}else if(tt){T.__webglDepthbuffer=[];for(let ft=0;ft<6;ft++)if(i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[ft]),T.__webglDepthbuffer[ft]===void 0)T.__webglDepthbuffer[ft]=r.createRenderbuffer(),gt(T.__webglDepthbuffer[ft],w,!1);else{const Et=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,pt=T.__webglDepthbuffer[ft];r.bindRenderbuffer(r.RENDERBUFFER,pt),r.framebufferRenderbuffer(r.FRAMEBUFFER,Et,r.RENDERBUFFER,pt)}}else if(i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),gt(T.__webglDepthbuffer,w,!1);else{const ft=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Et=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Et),r.framebufferRenderbuffer(r.FRAMEBUFFER,ft,r.RENDERBUFFER,Et)}i.bindFramebuffer(r.FRAMEBUFFER,null)}function Rt(w,T,tt){const ft=s.get(w);T!==void 0&&Tt(ft.__webglFramebuffer,w,w.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),tt!==void 0&&ot(w)}function $t(w){const T=w.texture,tt=s.get(w),ft=s.get(T);w.addEventListener("dispose",B);const Et=w.textures,pt=w.isWebGLCubeRenderTarget===!0,Xt=Et.length>1;if(Xt||(ft.__webglTexture===void 0&&(ft.__webglTexture=r.createTexture()),ft.__version=T.version,f.memory.textures++),pt){tt.__webglFramebuffer=[];for(let wt=0;wt<6;wt++)if(T.mipmaps&&T.mipmaps.length>0){tt.__webglFramebuffer[wt]=[];for(let Ft=0;Ft<T.mipmaps.length;Ft++)tt.__webglFramebuffer[wt][Ft]=r.createFramebuffer()}else tt.__webglFramebuffer[wt]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){tt.__webglFramebuffer=[];for(let wt=0;wt<T.mipmaps.length;wt++)tt.__webglFramebuffer[wt]=r.createFramebuffer()}else tt.__webglFramebuffer=r.createFramebuffer();if(Xt)for(let wt=0,Ft=Et.length;wt<Ft;wt++){const ge=s.get(Et[wt]);ge.__webglTexture===void 0&&(ge.__webglTexture=r.createTexture(),f.memory.textures++)}if(w.samples>0&&pe(w)===!1){tt.__webglMultisampledFramebuffer=r.createFramebuffer(),tt.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,tt.__webglMultisampledFramebuffer);for(let wt=0;wt<Et.length;wt++){const Ft=Et[wt];tt.__webglColorRenderbuffer[wt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,tt.__webglColorRenderbuffer[wt]);const ge=c.convert(Ft.format,Ft.colorSpace),Dt=c.convert(Ft.type),Gt=L(Ft.internalFormat,ge,Dt,Ft.colorSpace,w.isXRRenderTarget===!0),qt=he(w);r.renderbufferStorageMultisample(r.RENDERBUFFER,qt,Gt,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+wt,r.RENDERBUFFER,tt.__webglColorRenderbuffer[wt])}r.bindRenderbuffer(r.RENDERBUFFER,null),w.depthBuffer&&(tt.__webglDepthRenderbuffer=r.createRenderbuffer(),gt(tt.__webglDepthRenderbuffer,w,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(pt){i.bindTexture(r.TEXTURE_CUBE_MAP,ft.__webglTexture),$(r.TEXTURE_CUBE_MAP,T);for(let wt=0;wt<6;wt++)if(T.mipmaps&&T.mipmaps.length>0)for(let Ft=0;Ft<T.mipmaps.length;Ft++)Tt(tt.__webglFramebuffer[wt][Ft],w,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Ft);else Tt(tt.__webglFramebuffer[wt],w,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0);S(T)&&v(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Xt){for(let wt=0,Ft=Et.length;wt<Ft;wt++){const ge=Et[wt],Dt=s.get(ge);i.bindTexture(r.TEXTURE_2D,Dt.__webglTexture),$(r.TEXTURE_2D,ge),Tt(tt.__webglFramebuffer,w,ge,r.COLOR_ATTACHMENT0+wt,r.TEXTURE_2D,0),S(ge)&&v(r.TEXTURE_2D)}i.unbindTexture()}else{let wt=r.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(wt=w.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(wt,ft.__webglTexture),$(wt,T),T.mipmaps&&T.mipmaps.length>0)for(let Ft=0;Ft<T.mipmaps.length;Ft++)Tt(tt.__webglFramebuffer[Ft],w,T,r.COLOR_ATTACHMENT0,wt,Ft);else Tt(tt.__webglFramebuffer,w,T,r.COLOR_ATTACHMENT0,wt,0);S(T)&&v(wt),i.unbindTexture()}w.depthBuffer&&ot(w)}function Jt(w){const T=w.textures;for(let tt=0,ft=T.length;tt<ft;tt++){const Et=T[tt];if(S(Et)){const pt=z(w),Xt=s.get(Et).__webglTexture;i.bindTexture(pt,Xt),v(pt),i.unbindTexture()}}}const Oe=[],G=[];function nn(w){if(w.samples>0){if(pe(w)===!1){const T=w.textures,tt=w.width,ft=w.height;let Et=r.COLOR_BUFFER_BIT;const pt=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Xt=s.get(w),wt=T.length>1;if(wt)for(let Ft=0;Ft<T.length;Ft++)i.bindFramebuffer(r.FRAMEBUFFER,Xt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ft,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Xt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ft,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Xt.__webglMultisampledFramebuffer),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Xt.__webglFramebuffer);for(let Ft=0;Ft<T.length;Ft++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(Et|=r.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(Et|=r.STENCIL_BUFFER_BIT)),wt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Xt.__webglColorRenderbuffer[Ft]);const ge=s.get(T[Ft]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ge,0)}r.blitFramebuffer(0,0,tt,ft,0,0,tt,ft,Et,r.NEAREST),m===!0&&(Oe.length=0,G.length=0,Oe.push(r.COLOR_ATTACHMENT0+Ft),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Oe.push(pt),G.push(pt),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,G)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Oe))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),wt)for(let Ft=0;Ft<T.length;Ft++){i.bindFramebuffer(r.FRAMEBUFFER,Xt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ft,r.RENDERBUFFER,Xt.__webglColorRenderbuffer[Ft]);const ge=s.get(T[Ft]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Xt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ft,r.TEXTURE_2D,ge,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Xt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&m){const T=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function he(w){return Math.min(l.maxSamples,w.samples)}function pe(w){const T=s.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Wt(w){const T=f.render.frame;g.get(w)!==T&&(g.set(w,T),w.update())}function Re(w,T){const tt=w.colorSpace,ft=w.format,Et=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||tt!==Yr&&tt!==Za&&(Le.getTransfer(tt)===ke?(ft!==Di||Et!==va)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",tt)),T}function Ct(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(p.width=w.naturalWidth||w.width,p.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(p.width=w.displayWidth,p.height=w.displayHeight):(p.width=w.width,p.height=w.height),p}this.allocateTextureUnit=st,this.resetTextureUnits=ct,this.setTexture2D=mt,this.setTexture2DArray=P,this.setTexture3D=Y,this.setTextureCube=Z,this.rebindTextures=Rt,this.setupRenderTarget=$t,this.updateRenderTargetMipmap=Jt,this.updateMultisampleRenderTarget=nn,this.setupDepthRenderbuffer=ot,this.setupFrameBufferTexture=Tt,this.useMultisampledRTT=pe}function p2(r,t){function i(s,l=Za){let c;const f=Le.getTransfer(l);if(s===va)return r.UNSIGNED_BYTE;if(s===np)return r.UNSIGNED_SHORT_4_4_4_4;if(s===ip)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Ov)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===Lv)return r.BYTE;if(s===Nv)return r.SHORT;if(s===sl)return r.UNSIGNED_SHORT;if(s===ep)return r.INT;if(s===Ns)return r.UNSIGNED_INT;if(s===Gi)return r.FLOAT;if(s===ll)return r.HALF_FLOAT;if(s===zv)return r.ALPHA;if(s===Pv)return r.RGB;if(s===Di)return r.RGBA;if(s===Bv)return r.LUMINANCE;if(s===Iv)return r.LUMINANCE_ALPHA;if(s===Ir)return r.DEPTH_COMPONENT;if(s===Wr)return r.DEPTH_STENCIL;if(s===ap)return r.RED;if(s===sp)return r.RED_INTEGER;if(s===Fv)return r.RG;if(s===rp)return r.RG_INTEGER;if(s===op)return r.RGBA_INTEGER;if(s===Jc||s===$c||s===tu||s===eu)if(f===ke)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Jc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===$c)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===tu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===eu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Jc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===$c)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===tu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===eu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Md||s===Ed||s===bd||s===Td)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Md)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ed)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===bd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Td)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Ad||s===Rd||s===Cd)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Ad||s===Rd)return f===ke?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Cd)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===wd||s===Dd||s===Ud||s===Ld||s===Nd||s===Od||s===zd||s===Pd||s===Bd||s===Id||s===Fd||s===Hd||s===Gd||s===Vd)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===wd)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Dd)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Ud)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Ld)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Nd)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Od)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===zd)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Pd)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Bd)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Id)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Fd)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Hd)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Gd)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Vd)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===nu||s===kd||s===Xd)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===nu)return f===ke?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===kd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Xd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Hv||s===jd||s===Wd||s===Yd)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===nu)return c.COMPRESSED_RED_RGTC1_EXT;if(s===jd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Wd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Yd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===jr?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const m2={type:"move"};class rd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,f=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){f=!0;for(const b of t.hand.values()){const S=i.getJointPose(b,s),v=this._getHandJoint(p,b);S!==null&&(v.matrix.fromArray(S.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=S.radius),v.visible=S!==null}const g=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],x=g.position.distanceTo(_.position),M=.02,E=.005;p.inputState.pinching&&x>M+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&x<=M-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(m2)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Gc;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}const g2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class v2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i,s){if(this.texture===null){const l=new Gn,c=t.properties.get(l);c.__webglTexture=i.texture,(i.depthNear!=s.depthNear||i.depthFar!=s.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new ts({vertexShader:g2,fragmentShader:_2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Zn(new Zr(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class x2 extends Ps{constructor(t,i){super();const s=this;let l=null,c=1,f=null,d="local-floor",m=1,p=null,g=null,_=null,x=null,M=null,E=null;const b=new v2,S=i.getContextAttributes();let v=null,z=null;const L=[],U=[],k=new re;let H=null;const B=new xi;B.viewport=new en;const X=new xi;X.viewport=new en;const D=[B,X],C=new P1;let I=null,ct=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ut=L[q];return ut===void 0&&(ut=new rd,L[q]=ut),ut.getTargetRaySpace()},this.getControllerGrip=function(q){let ut=L[q];return ut===void 0&&(ut=new rd,L[q]=ut),ut.getGripSpace()},this.getHand=function(q){let ut=L[q];return ut===void 0&&(ut=new rd,L[q]=ut),ut.getHandSpace()};function st(q){const ut=U.indexOf(q.inputSource);if(ut===-1)return;const Tt=L[ut];Tt!==void 0&&(Tt.update(q.inputSource,q.frame,p||f),Tt.dispatchEvent({type:q.type,data:q.inputSource}))}function _t(){l.removeEventListener("select",st),l.removeEventListener("selectstart",st),l.removeEventListener("selectend",st),l.removeEventListener("squeeze",st),l.removeEventListener("squeezestart",st),l.removeEventListener("squeezeend",st),l.removeEventListener("end",_t),l.removeEventListener("inputsourceschange",mt);for(let q=0;q<L.length;q++){const ut=U[q];ut!==null&&(U[q]=null,L[q].disconnect(ut))}I=null,ct=null,b.reset(),t.setRenderTarget(v),M=null,x=null,_=null,l=null,z=null,bt.stop(),s.isPresenting=!1,t.setPixelRatio(H),t.setSize(k.width,k.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){c=q,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){d=q,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(q){p=q},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return _},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(q){if(l=q,l!==null){if(v=t.getRenderTarget(),l.addEventListener("select",st),l.addEventListener("selectstart",st),l.addEventListener("selectend",st),l.addEventListener("squeeze",st),l.addEventListener("squeezestart",st),l.addEventListener("squeezeend",st),l.addEventListener("end",_t),l.addEventListener("inputsourceschange",mt),S.xrCompatible!==!0&&await i.makeXRCompatible(),H=t.getPixelRatio(),t.getSize(k),l.renderState.layers===void 0){const ut={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,ut),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),z=new Os(M.framebufferWidth,M.framebufferHeight,{format:Di,type:va,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil})}else{let ut=null,Tt=null,gt=null;S.depth&&(gt=S.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,ut=S.stencil?Wr:Ir,Tt=S.stencil?jr:Ns);const It={colorFormat:i.RGBA8,depthFormat:gt,scaleFactor:c};_=new XRWebGLBinding(l,i),x=_.createProjectionLayer(It),l.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),z=new Os(x.textureWidth,x.textureHeight,{format:Di,type:va,depthTexture:new $v(x.textureWidth,x.textureHeight,Tt,void 0,void 0,void 0,void 0,void 0,void 0,ut),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1})}z.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(d),bt.setContext(l),bt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function mt(q){for(let ut=0;ut<q.removed.length;ut++){const Tt=q.removed[ut],gt=U.indexOf(Tt);gt>=0&&(U[gt]=null,L[gt].disconnect(Tt))}for(let ut=0;ut<q.added.length;ut++){const Tt=q.added[ut];let gt=U.indexOf(Tt);if(gt===-1){for(let ot=0;ot<L.length;ot++)if(ot>=U.length){U.push(Tt),gt=ot;break}else if(U[ot]===null){U[ot]=Tt,gt=ot;break}if(gt===-1)break}const It=L[gt];It&&It.connect(Tt)}}const P=new J,Y=new J;function Z(q,ut,Tt){P.setFromMatrixPosition(ut.matrixWorld),Y.setFromMatrixPosition(Tt.matrixWorld);const gt=P.distanceTo(Y),It=ut.projectionMatrix.elements,ot=Tt.projectionMatrix.elements,Rt=It[14]/(It[10]-1),$t=It[14]/(It[10]+1),Jt=(It[9]+1)/It[5],Oe=(It[9]-1)/It[5],G=(It[8]-1)/It[0],nn=(ot[8]+1)/ot[0],he=Rt*G,pe=Rt*nn,Wt=gt/(-G+nn),Re=Wt*-G;if(ut.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Re),q.translateZ(Wt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),It[10]===-1)q.projectionMatrix.copy(ut.projectionMatrix),q.projectionMatrixInverse.copy(ut.projectionMatrixInverse);else{const Ct=Rt+Wt,w=$t+Wt,T=he-Re,tt=pe+(gt-Re),ft=Jt*$t/w*Ct,Et=Oe*$t/w*Ct;q.projectionMatrix.makePerspective(T,tt,ft,Et,Ct,w),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function Mt(q,ut){ut===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ut.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(l===null)return;let ut=q.near,Tt=q.far;b.texture!==null&&(b.depthNear>0&&(ut=b.depthNear),b.depthFar>0&&(Tt=b.depthFar)),C.near=X.near=B.near=ut,C.far=X.far=B.far=Tt,(I!==C.near||ct!==C.far)&&(l.updateRenderState({depthNear:C.near,depthFar:C.far}),I=C.near,ct=C.far),B.layers.mask=q.layers.mask|2,X.layers.mask=q.layers.mask|4,C.layers.mask=B.layers.mask|X.layers.mask;const gt=q.parent,It=C.cameras;Mt(C,gt);for(let ot=0;ot<It.length;ot++)Mt(It[ot],gt);It.length===2?Z(C,B,X):C.projectionMatrix.copy(B.projectionMatrix),At(q,C,gt)};function At(q,ut,Tt){Tt===null?q.matrix.copy(ut.matrixWorld):(q.matrix.copy(Tt.matrixWorld),q.matrix.invert(),q.matrix.multiply(ut.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ut.projectionMatrix),q.projectionMatrixInverse.copy(ut.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=rl*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(x===null&&M===null))return m},this.setFoveation=function(q){m=q,x!==null&&(x.fixedFoveation=q),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=q)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(C)};let N=null;function $(q,ut){if(g=ut.getViewerPose(p||f),E=ut,g!==null){const Tt=g.views;M!==null&&(t.setRenderTargetFramebuffer(z,M.framebuffer),t.setRenderTarget(z));let gt=!1;Tt.length!==C.cameras.length&&(C.cameras.length=0,gt=!0);for(let ot=0;ot<Tt.length;ot++){const Rt=Tt[ot];let $t=null;if(M!==null)$t=M.getViewport(Rt);else{const Oe=_.getViewSubImage(x,Rt);$t=Oe.viewport,ot===0&&(t.setRenderTargetTextures(z,Oe.colorTexture,x.ignoreDepthValues?void 0:Oe.depthStencilTexture),t.setRenderTarget(z))}let Jt=D[ot];Jt===void 0&&(Jt=new xi,Jt.layers.enable(ot),Jt.viewport=new en,D[ot]=Jt),Jt.matrix.fromArray(Rt.transform.matrix),Jt.matrix.decompose(Jt.position,Jt.quaternion,Jt.scale),Jt.projectionMatrix.fromArray(Rt.projectionMatrix),Jt.projectionMatrixInverse.copy(Jt.projectionMatrix).invert(),Jt.viewport.set($t.x,$t.y,$t.width,$t.height),ot===0&&(C.matrix.copy(Jt.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),gt===!0&&C.cameras.push(Jt)}const It=l.enabledFeatures;if(It&&It.includes("depth-sensing")){const ot=_.getDepthInformation(Tt[0]);ot&&ot.isValid&&ot.texture&&b.init(t,ot,l.renderState)}}for(let Tt=0;Tt<L.length;Tt++){const gt=U[Tt],It=L[Tt];gt!==null&&It!==void 0&&It.update(gt,ut,p||f)}N&&N(q,ut),ut.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ut}),E=null}const bt=new nx;bt.setAnimationLoop($),this.setAnimationLoop=function(q){N=q},this.dispose=function(){}}}const Rs=new Vi,y2=new Ie;function S2(r,t){function i(S,v){S.matrixAutoUpdate===!0&&S.updateMatrix(),v.value.copy(S.matrix)}function s(S,v){v.color.getRGB(S.fogColor.value,Kv(r)),v.isFog?(S.fogNear.value=v.near,S.fogFar.value=v.far):v.isFogExp2&&(S.fogDensity.value=v.density)}function l(S,v,z,L,U){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(S,v):v.isMeshToonMaterial?(c(S,v),_(S,v)):v.isMeshPhongMaterial?(c(S,v),g(S,v)):v.isMeshStandardMaterial?(c(S,v),x(S,v),v.isMeshPhysicalMaterial&&M(S,v,U)):v.isMeshMatcapMaterial?(c(S,v),E(S,v)):v.isMeshDepthMaterial?c(S,v):v.isMeshDistanceMaterial?(c(S,v),b(S,v)):v.isMeshNormalMaterial?c(S,v):v.isLineBasicMaterial?(f(S,v),v.isLineDashedMaterial&&d(S,v)):v.isPointsMaterial?m(S,v,z,L):v.isSpriteMaterial?p(S,v):v.isShadowMaterial?(S.color.value.copy(v.color),S.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(S,v){S.opacity.value=v.opacity,v.color&&S.diffuse.value.copy(v.color),v.emissive&&S.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(S.map.value=v.map,i(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,i(v.alphaMap,S.alphaMapTransform)),v.bumpMap&&(S.bumpMap.value=v.bumpMap,i(v.bumpMap,S.bumpMapTransform),S.bumpScale.value=v.bumpScale,v.side===Kn&&(S.bumpScale.value*=-1)),v.normalMap&&(S.normalMap.value=v.normalMap,i(v.normalMap,S.normalMapTransform),S.normalScale.value.copy(v.normalScale),v.side===Kn&&S.normalScale.value.negate()),v.displacementMap&&(S.displacementMap.value=v.displacementMap,i(v.displacementMap,S.displacementMapTransform),S.displacementScale.value=v.displacementScale,S.displacementBias.value=v.displacementBias),v.emissiveMap&&(S.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,S.emissiveMapTransform)),v.specularMap&&(S.specularMap.value=v.specularMap,i(v.specularMap,S.specularMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest);const z=t.get(v),L=z.envMap,U=z.envMapRotation;L&&(S.envMap.value=L,Rs.copy(U),Rs.x*=-1,Rs.y*=-1,Rs.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Rs.y*=-1,Rs.z*=-1),S.envMapRotation.value.setFromMatrix4(y2.makeRotationFromEuler(Rs)),S.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=v.reflectivity,S.ior.value=v.ior,S.refractionRatio.value=v.refractionRatio),v.lightMap&&(S.lightMap.value=v.lightMap,S.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,S.lightMapTransform)),v.aoMap&&(S.aoMap.value=v.aoMap,S.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,S.aoMapTransform))}function f(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,v.map&&(S.map.value=v.map,i(v.map,S.mapTransform))}function d(S,v){S.dashSize.value=v.dashSize,S.totalSize.value=v.dashSize+v.gapSize,S.scale.value=v.scale}function m(S,v,z,L){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.size.value=v.size*z,S.scale.value=L*.5,v.map&&(S.map.value=v.map,i(v.map,S.uvTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,i(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function p(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.rotation.value=v.rotation,v.map&&(S.map.value=v.map,i(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,i(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function g(S,v){S.specular.value.copy(v.specular),S.shininess.value=Math.max(v.shininess,1e-4)}function _(S,v){v.gradientMap&&(S.gradientMap.value=v.gradientMap)}function x(S,v){S.metalness.value=v.metalness,v.metalnessMap&&(S.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,S.metalnessMapTransform)),S.roughness.value=v.roughness,v.roughnessMap&&(S.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,S.roughnessMapTransform)),v.envMap&&(S.envMapIntensity.value=v.envMapIntensity)}function M(S,v,z){S.ior.value=v.ior,v.sheen>0&&(S.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),S.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(S.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,S.sheenColorMapTransform)),v.sheenRoughnessMap&&(S.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,S.sheenRoughnessMapTransform))),v.clearcoat>0&&(S.clearcoat.value=v.clearcoat,S.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(S.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,S.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(S.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Kn&&S.clearcoatNormalScale.value.negate())),v.dispersion>0&&(S.dispersion.value=v.dispersion),v.iridescence>0&&(S.iridescence.value=v.iridescence,S.iridescenceIOR.value=v.iridescenceIOR,S.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(S.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,S.iridescenceMapTransform)),v.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),v.transmission>0&&(S.transmission.value=v.transmission,S.transmissionSamplerMap.value=z.texture,S.transmissionSamplerSize.value.set(z.width,z.height),v.transmissionMap&&(S.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,S.transmissionMapTransform)),S.thickness.value=v.thickness,v.thicknessMap&&(S.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=v.attenuationDistance,S.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(S.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(S.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=v.specularIntensity,S.specularColor.value.copy(v.specularColor),v.specularColorMap&&(S.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,S.specularColorMapTransform)),v.specularIntensityMap&&(S.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,v){v.matcap&&(S.matcap.value=v.matcap)}function b(S,v){const z=t.get(v).light;S.referencePosition.value.setFromMatrixPosition(z.matrixWorld),S.nearDistance.value=z.shadow.camera.near,S.farDistance.value=z.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function M2(r,t,i,s){let l={},c={},f=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(z,L){const U=L.program;s.uniformBlockBinding(z,U)}function p(z,L){let U=l[z.id];U===void 0&&(E(z),U=g(z),l[z.id]=U,z.addEventListener("dispose",S));const k=L.program;s.updateUBOMapping(z,k);const H=t.render.frame;c[z.id]!==H&&(x(z),c[z.id]=H)}function g(z){const L=_();z.__bindingPointIndex=L;const U=r.createBuffer(),k=z.__size,H=z.usage;return r.bindBuffer(r.UNIFORM_BUFFER,U),r.bufferData(r.UNIFORM_BUFFER,k,H),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,L,U),U}function _(){for(let z=0;z<d;z++)if(f.indexOf(z)===-1)return f.push(z),z;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(z){const L=l[z.id],U=z.uniforms,k=z.__cache;r.bindBuffer(r.UNIFORM_BUFFER,L);for(let H=0,B=U.length;H<B;H++){const X=Array.isArray(U[H])?U[H]:[U[H]];for(let D=0,C=X.length;D<C;D++){const I=X[D];if(M(I,H,D,k)===!0){const ct=I.__offset,st=Array.isArray(I.value)?I.value:[I.value];let _t=0;for(let mt=0;mt<st.length;mt++){const P=st[mt],Y=b(P);typeof P=="number"||typeof P=="boolean"?(I.__data[0]=P,r.bufferSubData(r.UNIFORM_BUFFER,ct+_t,I.__data)):P.isMatrix3?(I.__data[0]=P.elements[0],I.__data[1]=P.elements[1],I.__data[2]=P.elements[2],I.__data[3]=0,I.__data[4]=P.elements[3],I.__data[5]=P.elements[4],I.__data[6]=P.elements[5],I.__data[7]=0,I.__data[8]=P.elements[6],I.__data[9]=P.elements[7],I.__data[10]=P.elements[8],I.__data[11]=0):(P.toArray(I.__data,_t),_t+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,ct,I.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function M(z,L,U,k){const H=z.value,B=L+"_"+U;if(k[B]===void 0)return typeof H=="number"||typeof H=="boolean"?k[B]=H:k[B]=H.clone(),!0;{const X=k[B];if(typeof H=="number"||typeof H=="boolean"){if(X!==H)return k[B]=H,!0}else if(X.equals(H)===!1)return X.copy(H),!0}return!1}function E(z){const L=z.uniforms;let U=0;const k=16;for(let B=0,X=L.length;B<X;B++){const D=Array.isArray(L[B])?L[B]:[L[B]];for(let C=0,I=D.length;C<I;C++){const ct=D[C],st=Array.isArray(ct.value)?ct.value:[ct.value];for(let _t=0,mt=st.length;_t<mt;_t++){const P=st[_t],Y=b(P),Z=U%k,Mt=Z%Y.boundary,At=Z+Mt;U+=Mt,At!==0&&k-At<Y.storage&&(U+=k-At),ct.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),ct.__offset=U,U+=Y.storage}}}const H=U%k;return H>0&&(U+=k-H),z.__size=U,z.__cache={},this}function b(z){const L={boundary:0,storage:0};return typeof z=="number"||typeof z=="boolean"?(L.boundary=4,L.storage=4):z.isVector2?(L.boundary=8,L.storage=8):z.isVector3||z.isColor?(L.boundary=16,L.storage=12):z.isVector4?(L.boundary=16,L.storage=16):z.isMatrix3?(L.boundary=48,L.storage=48):z.isMatrix4?(L.boundary=64,L.storage=64):z.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",z),L}function S(z){const L=z.target;L.removeEventListener("dispose",S);const U=f.indexOf(L.__bindingPointIndex);f.splice(U,1),r.deleteBuffer(l[L.id]),delete l[L.id],delete c[L.id]}function v(){for(const z in l)r.deleteBuffer(l[z]);f=[],l={},c={}}return{bind:m,update:p,dispose:v}}class E2{constructor(t={}){const{canvas:i=QM(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:x=!1}=t;this.isWebGLRenderer=!0;let M;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=s.getContextAttributes().alpha}else M=f;const E=new Uint32Array(4),b=new Int32Array(4);let S=null,v=null;const z=[],L=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=oi,this.toneMapping=Qa,this.toneMappingExposure=1;const U=this;let k=!1,H=0,B=0,X=null,D=-1,C=null;const I=new en,ct=new en;let st=null;const _t=new me(0);let mt=0,P=i.width,Y=i.height,Z=1,Mt=null,At=null;const N=new en(0,0,P,Y),$=new en(0,0,P,Y);let bt=!1;const q=new hp;let ut=!1,Tt=!1;const gt=new Ie,It=new Ie,ot=new J,Rt=new en,$t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Jt=!1;function Oe(){return X===null?Z:1}let G=s;function nn(R,W){return i.getContext(R,W)}try{const R={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${tp}`),i.addEventListener("webglcontextlost",yt,!1),i.addEventListener("webglcontextrestored",Lt,!1),i.addEventListener("webglcontextcreationerror",Nt,!1),G===null){const W="webgl2";if(G=nn(W,R),G===null)throw nn(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let he,pe,Wt,Re,Ct,w,T,tt,ft,Et,pt,Xt,wt,Ft,ge,Dt,Gt,qt,Yt,Pt,ne,oe,Fe,j;function Ut(){he=new LT(G),he.init(),oe=new p2(G,he),pe=new AT(G,he,t,oe),Wt=new h2(G,he),pe.reverseDepthBuffer&&x&&Wt.buffers.depth.setReversed(!0),Re=new zT(G),Ct=new $A,w=new d2(G,he,Wt,Ct,pe,oe,Re),T=new CT(U),tt=new UT(U),ft=new V1(G),Fe=new bT(G,ft),Et=new NT(G,ft,Re,Fe),pt=new BT(G,Et,ft,Re),Yt=new PT(G,pe,w),Dt=new RT(Ct),Xt=new JA(U,T,tt,he,pe,Fe,Dt),wt=new S2(U,Ct),Ft=new e2,ge=new o2(he),qt=new ET(U,T,tt,Wt,pt,M,m),Gt=new u2(U,pt,pe),j=new M2(G,Re,pe,Wt),Pt=new TT(G,he,Re),ne=new OT(G,he,Re),Re.programs=Xt.programs,U.capabilities=pe,U.extensions=he,U.properties=Ct,U.renderLists=Ft,U.shadowMap=Gt,U.state=Wt,U.info=Re}Ut();const ht=new x2(U,G);this.xr=ht,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const R=he.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=he.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(R){R!==void 0&&(Z=R,this.setSize(P,Y,!1))},this.getSize=function(R){return R.set(P,Y)},this.setSize=function(R,W,at=!0){if(ht.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=R,Y=W,i.width=Math.floor(R*Z),i.height=Math.floor(W*Z),at===!0&&(i.style.width=R+"px",i.style.height=W+"px"),this.setViewport(0,0,R,W)},this.getDrawingBufferSize=function(R){return R.set(P*Z,Y*Z).floor()},this.setDrawingBufferSize=function(R,W,at){P=R,Y=W,Z=at,i.width=Math.floor(R*at),i.height=Math.floor(W*at),this.setViewport(0,0,R,W)},this.getCurrentViewport=function(R){return R.copy(I)},this.getViewport=function(R){return R.copy(N)},this.setViewport=function(R,W,at,rt){R.isVector4?N.set(R.x,R.y,R.z,R.w):N.set(R,W,at,rt),Wt.viewport(I.copy(N).multiplyScalar(Z).round())},this.getScissor=function(R){return R.copy($)},this.setScissor=function(R,W,at,rt){R.isVector4?$.set(R.x,R.y,R.z,R.w):$.set(R,W,at,rt),Wt.scissor(ct.copy($).multiplyScalar(Z).round())},this.getScissorTest=function(){return bt},this.setScissorTest=function(R){Wt.setScissorTest(bt=R)},this.setOpaqueSort=function(R){Mt=R},this.setTransparentSort=function(R){At=R},this.getClearColor=function(R){return R.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor.apply(qt,arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha.apply(qt,arguments)},this.clear=function(R=!0,W=!0,at=!0){let rt=0;if(R){let K=!1;if(X!==null){const St=X.texture.format;K=St===op||St===rp||St===sp}if(K){const St=X.texture.type,Ot=St===va||St===Ns||St===sl||St===jr||St===np||St===ip,Ht=qt.getClearColor(),Bt=qt.getClearAlpha(),te=Ht.r,ae=Ht.g,Zt=Ht.b;Ot?(E[0]=te,E[1]=ae,E[2]=Zt,E[3]=Bt,G.clearBufferuiv(G.COLOR,0,E)):(b[0]=te,b[1]=ae,b[2]=Zt,b[3]=Bt,G.clearBufferiv(G.COLOR,0,b))}else rt|=G.COLOR_BUFFER_BIT}W&&(rt|=G.DEPTH_BUFFER_BIT),at&&(rt|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(rt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",yt,!1),i.removeEventListener("webglcontextrestored",Lt,!1),i.removeEventListener("webglcontextcreationerror",Nt,!1),qt.dispose(),Ft.dispose(),ge.dispose(),Ct.dispose(),T.dispose(),tt.dispose(),pt.dispose(),Fe.dispose(),j.dispose(),Xt.dispose(),ht.dispose(),ht.removeEventListener("sessionstart",eo),ht.removeEventListener("sessionend",no),Li.stop()};function yt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),k=!0}function Lt(){console.log("THREE.WebGLRenderer: Context Restored."),k=!1;const R=Re.autoReset,W=Gt.enabled,at=Gt.autoUpdate,rt=Gt.needsUpdate,K=Gt.type;Ut(),Re.autoReset=R,Gt.enabled=W,Gt.autoUpdate=at,Gt.needsUpdate=rt,Gt.type=K}function Nt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ie(R){const W=R.target;W.removeEventListener("dispose",ie),Ke(W)}function Ke(R){dn(R),Ct.remove(R)}function dn(R){const W=Ct.get(R).programs;W!==void 0&&(W.forEach(function(at){Xt.releaseProgram(at)}),R.isShaderMaterial&&Xt.releaseShaderCache(R))}this.renderBufferDirect=function(R,W,at,rt,K,St){W===null&&(W=$t);const Ot=K.isMesh&&K.matrixWorld.determinant()<0,Ht=ao(R,W,at,rt,K);Wt.setMaterial(rt,Ot);let Bt=at.index,te=1;if(rt.wireframe===!0){if(Bt=Et.getWireframeAttribute(at),Bt===void 0)return;te=2}const ae=at.drawRange,Zt=at.attributes.position;let Se=ae.start*te,Ce=(ae.start+ae.count)*te;St!==null&&(Se=Math.max(Se,St.start*te),Ce=Math.min(Ce,(St.start+St.count)*te)),Bt!==null?(Se=Math.max(Se,0),Ce=Math.min(Ce,Bt.count)):Zt!=null&&(Se=Math.max(Se,0),Ce=Math.min(Ce,Zt.count));const Ye=Ce-Se;if(Ye<0||Ye===1/0)return;Fe.setup(K,rt,Ht,at,Bt);let je,le=Pt;if(Bt!==null&&(je=ft.get(Bt),le=ne,le.setIndex(je)),K.isMesh)rt.wireframe===!0?(Wt.setLineWidth(rt.wireframeLinewidth*Oe()),le.setMode(G.LINES)):le.setMode(G.TRIANGLES);else if(K.isLine){let kt=rt.linewidth;kt===void 0&&(kt=1),Wt.setLineWidth(kt*Oe()),K.isLineSegments?le.setMode(G.LINES):K.isLineLoop?le.setMode(G.LINE_LOOP):le.setMode(G.LINE_STRIP)}else K.isPoints?le.setMode(G.POINTS):K.isSprite&&le.setMode(G.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)le.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(he.get("WEBGL_multi_draw"))le.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const kt=K._multiDrawStarts,on=K._multiDrawCounts,we=K._multiDrawCount,zn=Bt?ft.get(Bt).bytesPerElement:1,Xi=Ct.get(rt).currentProgram.getUniforms();for(let yn=0;yn<we;yn++)Xi.setValue(G,"_gl_DrawID",yn),le.render(kt[yn]/zn,on[yn])}else if(K.isInstancedMesh)le.renderInstances(Se,Ye,K.count);else if(at.isInstancedBufferGeometry){const kt=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,on=Math.min(at.instanceCount,kt);le.renderInstances(Se,Ye,on)}else le.render(Se,Ye)};function Ae(R,W,at){R.transparent===!0&&R.side===Fi&&R.forceSinglePass===!1?(R.side=Kn,R.needsUpdate=!0,Je(R,W,at),R.side=$a,R.needsUpdate=!0,Je(R,W,at),R.side=Fi):Je(R,W,at)}this.compile=function(R,W,at=null){at===null&&(at=R),v=ge.get(at),v.init(W),L.push(v),at.traverseVisible(function(K){K.isLight&&K.layers.test(W.layers)&&(v.pushLight(K),K.castShadow&&v.pushShadow(K))}),R!==at&&R.traverseVisible(function(K){K.isLight&&K.layers.test(W.layers)&&(v.pushLight(K),K.castShadow&&v.pushShadow(K))}),v.setupLights();const rt=new Set;return R.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const St=K.material;if(St)if(Array.isArray(St))for(let Ot=0;Ot<St.length;Ot++){const Ht=St[Ot];Ae(Ht,at,K),rt.add(Ht)}else Ae(St,at,K),rt.add(St)}),L.pop(),v=null,rt},this.compileAsync=function(R,W,at=null){const rt=this.compile(R,W,at);return new Promise(K=>{function St(){if(rt.forEach(function(Ot){Ct.get(Ot).currentProgram.isReady()&&rt.delete(Ot)}),rt.size===0){K(R);return}setTimeout(St,10)}he.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let bn=null;function Si(R){bn&&bn(R)}function eo(){Li.stop()}function no(){Li.start()}const Li=new nx;Li.setAnimationLoop(Si),typeof self<"u"&&Li.setContext(self),this.setAnimationLoop=function(R){bn=R,ht.setAnimationLoop(R),R===null?Li.stop():Li.start()},ht.addEventListener("sessionstart",eo),ht.addEventListener("sessionend",no),this.render=function(R,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),ht.enabled===!0&&ht.isPresenting===!0&&(ht.cameraAutoUpdate===!0&&ht.updateCamera(W),W=ht.getCamera()),R.isScene===!0&&R.onBeforeRender(U,R,W,X),v=ge.get(R,L.length),v.init(W),L.push(v),It.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),q.setFromProjectionMatrix(It),Tt=this.localClippingEnabled,ut=Dt.init(this.clippingPlanes,Tt),S=Ft.get(R,z.length),S.init(),z.push(S),ht.enabled===!0&&ht.isPresenting===!0){const St=U.xr.getDepthSensingMesh();St!==null&&ns(St,W,-1/0,U.sortObjects)}ns(R,W,0,U.sortObjects),S.finish(),U.sortObjects===!0&&S.sort(Mt,At),Jt=ht.enabled===!1||ht.isPresenting===!1||ht.hasDepthSensing()===!1,Jt&&qt.addToRenderList(S,R),this.info.render.frame++,ut===!0&&Dt.beginShadows();const at=v.state.shadowsArray;Gt.render(at,R,W),ut===!0&&Dt.endShadows(),this.info.autoReset===!0&&this.info.reset();const rt=S.opaque,K=S.transmissive;if(v.setupLights(),W.isArrayCamera){const St=W.cameras;if(K.length>0)for(let Ot=0,Ht=St.length;Ot<Ht;Ot++){const Bt=St[Ot];io(rt,K,R,Bt)}Jt&&qt.render(R);for(let Ot=0,Ht=St.length;Ot<Ht;Ot++){const Bt=St[Ot];Is(S,R,Bt,Bt.viewport)}}else K.length>0&&io(rt,K,R,W),Jt&&qt.render(R),Is(S,R,W);X!==null&&(w.updateMultisampleRenderTarget(X),w.updateRenderTargetMipmap(X)),R.isScene===!0&&R.onAfterRender(U,R,W),Fe.resetDefaultState(),D=-1,C=null,L.pop(),L.length>0?(v=L[L.length-1],ut===!0&&Dt.setGlobalState(U.clippingPlanes,v.state.camera)):v=null,z.pop(),z.length>0?S=z[z.length-1]:S=null};function ns(R,W,at,rt){if(R.visible===!1)return;if(R.layers.test(W.layers)){if(R.isGroup)at=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(W);else if(R.isLight)v.pushLight(R),R.castShadow&&v.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||q.intersectsSprite(R)){rt&&Rt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(It);const Ot=pt.update(R),Ht=R.material;Ht.visible&&S.push(R,Ot,Ht,at,Rt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||q.intersectsObject(R))){const Ot=pt.update(R),Ht=R.material;if(rt&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Rt.copy(R.boundingSphere.center)):(Ot.boundingSphere===null&&Ot.computeBoundingSphere(),Rt.copy(Ot.boundingSphere.center)),Rt.applyMatrix4(R.matrixWorld).applyMatrix4(It)),Array.isArray(Ht)){const Bt=Ot.groups;for(let te=0,ae=Bt.length;te<ae;te++){const Zt=Bt[te],Se=Ht[Zt.materialIndex];Se&&Se.visible&&S.push(R,Ot,Se,at,Rt.z,Zt)}}else Ht.visible&&S.push(R,Ot,Ht,at,Rt.z,null)}}const St=R.children;for(let Ot=0,Ht=St.length;Ot<Ht;Ot++)ns(St[Ot],W,at,rt)}function Is(R,W,at,rt){const K=R.opaque,St=R.transmissive,Ot=R.transparent;v.setupLightsView(at),ut===!0&&Dt.setGlobalState(U.clippingPlanes,at),rt&&Wt.viewport(I.copy(rt)),K.length>0&&is(K,W,at),St.length>0&&is(St,W,at),Ot.length>0&&is(Ot,W,at),Wt.buffers.depth.setTest(!0),Wt.buffers.depth.setMask(!0),Wt.buffers.color.setMask(!0),Wt.setPolygonOffset(!1)}function io(R,W,at,rt){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[rt.id]===void 0&&(v.state.transmissionRenderTarget[rt.id]=new Os(1,1,{generateMipmaps:!0,type:he.has("EXT_color_buffer_half_float")||he.has("EXT_color_buffer_float")?ll:va,minFilter:Ls,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Le.workingColorSpace}));const St=v.state.transmissionRenderTarget[rt.id],Ot=rt.viewport||I;St.setSize(Ot.z,Ot.w);const Ht=U.getRenderTarget();U.setRenderTarget(St),U.getClearColor(_t),mt=U.getClearAlpha(),mt<1&&U.setClearColor(16777215,.5),U.clear(),Jt&&qt.render(at);const Bt=U.toneMapping;U.toneMapping=Qa;const te=rt.viewport;if(rt.viewport!==void 0&&(rt.viewport=void 0),v.setupLightsView(rt),ut===!0&&Dt.setGlobalState(U.clippingPlanes,rt),is(R,at,rt),w.updateMultisampleRenderTarget(St),w.updateRenderTargetMipmap(St),he.has("WEBGL_multisampled_render_to_texture")===!1){let ae=!1;for(let Zt=0,Se=W.length;Zt<Se;Zt++){const Ce=W[Zt],Ye=Ce.object,je=Ce.geometry,le=Ce.material,kt=Ce.group;if(le.side===Fi&&Ye.layers.test(rt.layers)){const on=le.side;le.side=Kn,le.needsUpdate=!0,Mi(Ye,at,rt,je,le,kt),le.side=on,le.needsUpdate=!0,ae=!0}}ae===!0&&(w.updateMultisampleRenderTarget(St),w.updateRenderTargetMipmap(St))}U.setRenderTarget(Ht),U.setClearColor(_t,mt),te!==void 0&&(rt.viewport=te),U.toneMapping=Bt}function is(R,W,at){const rt=W.isScene===!0?W.overrideMaterial:null;for(let K=0,St=R.length;K<St;K++){const Ot=R[K],Ht=Ot.object,Bt=Ot.geometry,te=rt===null?Ot.material:rt,ae=Ot.group;Ht.layers.test(at.layers)&&Mi(Ht,W,at,Bt,te,ae)}}function Mi(R,W,at,rt,K,St){R.onBeforeRender(U,W,at,rt,K,St),R.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),K.onBeforeRender(U,W,at,rt,R,St),K.transparent===!0&&K.side===Fi&&K.forceSinglePass===!1?(K.side=Kn,K.needsUpdate=!0,U.renderBufferDirect(at,W,rt,K,R,St),K.side=$a,K.needsUpdate=!0,U.renderBufferDirect(at,W,rt,K,R,St),K.side=Fi):U.renderBufferDirect(at,W,rt,K,R,St),R.onAfterRender(U,W,at,rt,K,St)}function Je(R,W,at){W.isScene!==!0&&(W=$t);const rt=Ct.get(R),K=v.state.lights,St=v.state.shadowsArray,Ot=K.state.version,Ht=Xt.getParameters(R,K.state,St,W,at),Bt=Xt.getProgramCacheKey(Ht);let te=rt.programs;rt.environment=R.isMeshStandardMaterial?W.environment:null,rt.fog=W.fog,rt.envMap=(R.isMeshStandardMaterial?tt:T).get(R.envMap||rt.environment),rt.envMapRotation=rt.environment!==null&&R.envMap===null?W.environmentRotation:R.envMapRotation,te===void 0&&(R.addEventListener("dispose",ie),te=new Map,rt.programs=te);let ae=te.get(Bt);if(ae!==void 0){if(rt.currentProgram===ae&&rt.lightsStateVersion===Ot)return ki(R,Ht),ae}else Ht.uniforms=Xt.getUniforms(R),R.onBeforeCompile(Ht,U),ae=Xt.acquireProgram(Ht,Bt),te.set(Bt,ae),rt.uniforms=Ht.uniforms;const Zt=rt.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Zt.clippingPlanes=Dt.uniform),ki(R,Ht),rt.needsLights=vu(R),rt.lightsStateVersion=Ot,rt.needsLights&&(Zt.ambientLightColor.value=K.state.ambient,Zt.lightProbe.value=K.state.probe,Zt.directionalLights.value=K.state.directional,Zt.directionalLightShadows.value=K.state.directionalShadow,Zt.spotLights.value=K.state.spot,Zt.spotLightShadows.value=K.state.spotShadow,Zt.rectAreaLights.value=K.state.rectArea,Zt.ltc_1.value=K.state.rectAreaLTC1,Zt.ltc_2.value=K.state.rectAreaLTC2,Zt.pointLights.value=K.state.point,Zt.pointLightShadows.value=K.state.pointShadow,Zt.hemisphereLights.value=K.state.hemi,Zt.directionalShadowMap.value=K.state.directionalShadowMap,Zt.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Zt.spotShadowMap.value=K.state.spotShadowMap,Zt.spotLightMatrix.value=K.state.spotLightMatrix,Zt.spotLightMap.value=K.state.spotLightMap,Zt.pointShadowMap.value=K.state.pointShadowMap,Zt.pointShadowMatrix.value=K.state.pointShadowMatrix),rt.currentProgram=ae,rt.uniformsList=null,ae}function Tn(R){if(R.uniformsList===null){const W=R.currentProgram.getUniforms();R.uniformsList=iu.seqWithValue(W.seq,R.uniforms)}return R.uniformsList}function ki(R,W){const at=Ct.get(R);at.outputColorSpace=W.outputColorSpace,at.batching=W.batching,at.batchingColor=W.batchingColor,at.instancing=W.instancing,at.instancingColor=W.instancingColor,at.instancingMorph=W.instancingMorph,at.skinning=W.skinning,at.morphTargets=W.morphTargets,at.morphNormals=W.morphNormals,at.morphColors=W.morphColors,at.morphTargetsCount=W.morphTargetsCount,at.numClippingPlanes=W.numClippingPlanes,at.numIntersection=W.numClipIntersection,at.vertexAlphas=W.vertexAlphas,at.vertexTangents=W.vertexTangents,at.toneMapping=W.toneMapping}function ao(R,W,at,rt,K){W.isScene!==!0&&(W=$t),w.resetTextureUnits();const St=W.fog,Ot=rt.isMeshStandardMaterial?W.environment:null,Ht=X===null?U.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Yr,Bt=(rt.isMeshStandardMaterial?tt:T).get(rt.envMap||Ot),te=rt.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,ae=!!at.attributes.tangent&&(!!rt.normalMap||rt.anisotropy>0),Zt=!!at.morphAttributes.position,Se=!!at.morphAttributes.normal,Ce=!!at.morphAttributes.color;let Ye=Qa;rt.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Ye=U.toneMapping);const je=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,le=je!==void 0?je.length:0,kt=Ct.get(rt),on=v.state.lights;if(ut===!0&&(Tt===!0||R!==C)){const pn=R===C&&rt.id===D;Dt.setState(rt,R,pn)}let we=!1;rt.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==on.state.version||kt.outputColorSpace!==Ht||K.isBatchedMesh&&kt.batching===!1||!K.isBatchedMesh&&kt.batching===!0||K.isBatchedMesh&&kt.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&kt.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&kt.instancing===!1||!K.isInstancedMesh&&kt.instancing===!0||K.isSkinnedMesh&&kt.skinning===!1||!K.isSkinnedMesh&&kt.skinning===!0||K.isInstancedMesh&&kt.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&kt.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&kt.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&kt.instancingMorph===!1&&K.morphTexture!==null||kt.envMap!==Bt||rt.fog===!0&&kt.fog!==St||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==Dt.numPlanes||kt.numIntersection!==Dt.numIntersection)||kt.vertexAlphas!==te||kt.vertexTangents!==ae||kt.morphTargets!==Zt||kt.morphNormals!==Se||kt.morphColors!==Ce||kt.toneMapping!==Ye||kt.morphTargetsCount!==le)&&(we=!0):(we=!0,kt.__version=rt.version);let zn=kt.currentProgram;we===!0&&(zn=Je(rt,W,K));let Xi=!1,yn=!1,ss=!1;const ve=zn.getUniforms(),Un=kt.uniforms;if(Wt.useProgram(zn.program)&&(Xi=!0,yn=!0,ss=!0),rt.id!==D&&(D=rt.id,yn=!0),Xi||C!==R){Wt.buffers.depth.getReversed()?(gt.copy(R.projectionMatrix),$M(gt),t1(gt),ve.setValue(G,"projectionMatrix",gt)):ve.setValue(G,"projectionMatrix",R.projectionMatrix),ve.setValue(G,"viewMatrix",R.matrixWorldInverse);const an=ve.map.cameraPosition;an!==void 0&&an.setValue(G,ot.setFromMatrixPosition(R.matrixWorld)),pe.logarithmicDepthBuffer&&ve.setValue(G,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(rt.isMeshPhongMaterial||rt.isMeshToonMaterial||rt.isMeshLambertMaterial||rt.isMeshBasicMaterial||rt.isMeshStandardMaterial||rt.isShaderMaterial)&&ve.setValue(G,"isOrthographic",R.isOrthographicCamera===!0),C!==R&&(C=R,yn=!0,ss=!0)}if(K.isSkinnedMesh){ve.setOptional(G,K,"bindMatrix"),ve.setOptional(G,K,"bindMatrixInverse");const pn=K.skeleton;pn&&(pn.boneTexture===null&&pn.computeBoneTexture(),ve.setValue(G,"boneTexture",pn.boneTexture,w))}K.isBatchedMesh&&(ve.setOptional(G,K,"batchingTexture"),ve.setValue(G,"batchingTexture",K._matricesTexture,w),ve.setOptional(G,K,"batchingIdTexture"),ve.setValue(G,"batchingIdTexture",K._indirectTexture,w),ve.setOptional(G,K,"batchingColorTexture"),K._colorsTexture!==null&&ve.setValue(G,"batchingColorTexture",K._colorsTexture,w));const Pn=at.morphAttributes;if((Pn.position!==void 0||Pn.normal!==void 0||Pn.color!==void 0)&&Yt.update(K,at,zn),(yn||kt.receiveShadow!==K.receiveShadow)&&(kt.receiveShadow=K.receiveShadow,ve.setValue(G,"receiveShadow",K.receiveShadow)),rt.isMeshGouraudMaterial&&rt.envMap!==null&&(Un.envMap.value=Bt,Un.flipEnvMap.value=Bt.isCubeTexture&&Bt.isRenderTargetTexture===!1?-1:1),rt.isMeshStandardMaterial&&rt.envMap===null&&W.environment!==null&&(Un.envMapIntensity.value=W.environmentIntensity),yn&&(ve.setValue(G,"toneMappingExposure",U.toneMappingExposure),kt.needsLights&&_u(Un,ss),St&&rt.fog===!0&&wt.refreshFogUniforms(Un,St),wt.refreshMaterialUniforms(Un,rt,Z,Y,v.state.transmissionRenderTarget[R.id]),iu.upload(G,Tn(kt),Un,w)),rt.isShaderMaterial&&rt.uniformsNeedUpdate===!0&&(iu.upload(G,Tn(kt),Un,w),rt.uniformsNeedUpdate=!1),rt.isSpriteMaterial&&ve.setValue(G,"center",K.center),ve.setValue(G,"modelViewMatrix",K.modelViewMatrix),ve.setValue(G,"normalMatrix",K.normalMatrix),ve.setValue(G,"modelMatrix",K.matrixWorld),rt.isShaderMaterial||rt.isRawShaderMaterial){const pn=rt.uniformsGroups;for(let an=0,Fs=pn.length;an<Fs;an++){const Ni=pn[an];j.update(Ni,zn),j.bind(Ni,zn)}}return zn}function _u(R,W){R.ambientLightColor.needsUpdate=W,R.lightProbe.needsUpdate=W,R.directionalLights.needsUpdate=W,R.directionalLightShadows.needsUpdate=W,R.pointLights.needsUpdate=W,R.pointLightShadows.needsUpdate=W,R.spotLights.needsUpdate=W,R.spotLightShadows.needsUpdate=W,R.rectAreaLights.needsUpdate=W,R.hemisphereLights.needsUpdate=W}function vu(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(R,W,at){Ct.get(R.texture).__webglTexture=W,Ct.get(R.depthTexture).__webglTexture=at;const rt=Ct.get(R);rt.__hasExternalTextures=!0,rt.__autoAllocateDepthBuffer=at===void 0,rt.__autoAllocateDepthBuffer||he.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),rt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,W){const at=Ct.get(R);at.__webglFramebuffer=W,at.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(R,W=0,at=0){X=R,H=W,B=at;let rt=!0,K=null,St=!1,Ot=!1;if(R){const Bt=Ct.get(R);if(Bt.__useDefaultFramebuffer!==void 0)Wt.bindFramebuffer(G.FRAMEBUFFER,null),rt=!1;else if(Bt.__webglFramebuffer===void 0)w.setupRenderTarget(R);else if(Bt.__hasExternalTextures)w.rebindTextures(R,Ct.get(R.texture).__webglTexture,Ct.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Zt=R.depthTexture;if(Bt.__boundDepthTexture!==Zt){if(Zt!==null&&Ct.has(Zt)&&(R.width!==Zt.image.width||R.height!==Zt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(R)}}const te=R.texture;(te.isData3DTexture||te.isDataArrayTexture||te.isCompressedArrayTexture)&&(Ot=!0);const ae=Ct.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ae[W])?K=ae[W][at]:K=ae[W],St=!0):R.samples>0&&w.useMultisampledRTT(R)===!1?K=Ct.get(R).__webglMultisampledFramebuffer:Array.isArray(ae)?K=ae[at]:K=ae,I.copy(R.viewport),ct.copy(R.scissor),st=R.scissorTest}else I.copy(N).multiplyScalar(Z).floor(),ct.copy($).multiplyScalar(Z).floor(),st=bt;if(Wt.bindFramebuffer(G.FRAMEBUFFER,K)&&rt&&Wt.drawBuffers(R,K),Wt.viewport(I),Wt.scissor(ct),Wt.setScissorTest(st),St){const Bt=Ct.get(R.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+W,Bt.__webglTexture,at)}else if(Ot){const Bt=Ct.get(R.texture),te=W||0;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,Bt.__webglTexture,at||0,te)}D=-1},this.readRenderTargetPixels=function(R,W,at,rt,K,St,Ot){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ht=Ct.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ot!==void 0&&(Ht=Ht[Ot]),Ht){Wt.bindFramebuffer(G.FRAMEBUFFER,Ht);try{const Bt=R.texture,te=Bt.format,ae=Bt.type;if(!pe.textureFormatReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!pe.textureTypeReadable(ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=R.width-rt&&at>=0&&at<=R.height-K&&G.readPixels(W,at,rt,K,oe.convert(te),oe.convert(ae),St)}finally{const Bt=X!==null?Ct.get(X).__webglFramebuffer:null;Wt.bindFramebuffer(G.FRAMEBUFFER,Bt)}}},this.readRenderTargetPixelsAsync=async function(R,W,at,rt,K,St,Ot){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ht=Ct.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ot!==void 0&&(Ht=Ht[Ot]),Ht){const Bt=R.texture,te=Bt.format,ae=Bt.type;if(!pe.textureFormatReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!pe.textureTypeReadable(ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=R.width-rt&&at>=0&&at<=R.height-K){Wt.bindFramebuffer(G.FRAMEBUFFER,Ht);const Zt=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,Zt),G.bufferData(G.PIXEL_PACK_BUFFER,St.byteLength,G.STREAM_READ),G.readPixels(W,at,rt,K,oe.convert(te),oe.convert(ae),0);const Se=X!==null?Ct.get(X).__webglFramebuffer:null;Wt.bindFramebuffer(G.FRAMEBUFFER,Se);const Ce=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await JM(G,Ce,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,Zt),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,St),G.deleteBuffer(Zt),G.deleteSync(Ce),St}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,W=null,at=0){R.isTexture!==!0&&(Or("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,R=arguments[1]);const rt=Math.pow(2,-at),K=Math.floor(R.image.width*rt),St=Math.floor(R.image.height*rt),Ot=W!==null?W.x:0,Ht=W!==null?W.y:0;w.setTexture2D(R,0),G.copyTexSubImage2D(G.TEXTURE_2D,at,0,0,Ot,Ht,K,St),Wt.unbindTexture()};const cl=G.createFramebuffer(),as=G.createFramebuffer();this.copyTextureToTexture=function(R,W,at=null,rt=null,K=0,St=null){R.isTexture!==!0&&(Or("WebGLRenderer: copyTextureToTexture function signature has changed."),rt=arguments[0]||null,R=arguments[1],W=arguments[2],St=arguments[3]||0,at=null),St===null&&(K!==0?(Or("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),St=K,K=0):St=0);let Ot,Ht,Bt,te,ae,Zt,Se,Ce,Ye;const je=R.isCompressedTexture?R.mipmaps[St]:R.image;if(at!==null)Ot=at.max.x-at.min.x,Ht=at.max.y-at.min.y,Bt=at.isBox3?at.max.z-at.min.z:1,te=at.min.x,ae=at.min.y,Zt=at.isBox3?at.min.z:0;else{const Pn=Math.pow(2,-K);Ot=Math.floor(je.width*Pn),Ht=Math.floor(je.height*Pn),R.isDataArrayTexture?Bt=je.depth:R.isData3DTexture?Bt=Math.floor(je.depth*Pn):Bt=1,te=0,ae=0,Zt=0}rt!==null?(Se=rt.x,Ce=rt.y,Ye=rt.z):(Se=0,Ce=0,Ye=0);const le=oe.convert(W.format),kt=oe.convert(W.type);let on;W.isData3DTexture?(w.setTexture3D(W,0),on=G.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(w.setTexture2DArray(W,0),on=G.TEXTURE_2D_ARRAY):(w.setTexture2D(W,0),on=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,W.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,W.unpackAlignment);const we=G.getParameter(G.UNPACK_ROW_LENGTH),zn=G.getParameter(G.UNPACK_IMAGE_HEIGHT),Xi=G.getParameter(G.UNPACK_SKIP_PIXELS),yn=G.getParameter(G.UNPACK_SKIP_ROWS),ss=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,je.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,je.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,te),G.pixelStorei(G.UNPACK_SKIP_ROWS,ae),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Zt);const ve=R.isDataArrayTexture||R.isData3DTexture,Un=W.isDataArrayTexture||W.isData3DTexture;if(R.isDepthTexture){const Pn=Ct.get(R),pn=Ct.get(W),an=Ct.get(Pn.__renderTarget),Fs=Ct.get(pn.__renderTarget);Wt.bindFramebuffer(G.READ_FRAMEBUFFER,an.__webglFramebuffer),Wt.bindFramebuffer(G.DRAW_FRAMEBUFFER,Fs.__webglFramebuffer);for(let Ni=0;Ni<Bt;Ni++)ve&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ct.get(R).__webglTexture,K,Zt+Ni),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ct.get(W).__webglTexture,St,Ye+Ni)),G.blitFramebuffer(te,ae,Ot,Ht,Se,Ce,Ot,Ht,G.DEPTH_BUFFER_BIT,G.NEAREST);Wt.bindFramebuffer(G.READ_FRAMEBUFFER,null),Wt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(K!==0||R.isRenderTargetTexture||Ct.has(R)){const Pn=Ct.get(R),pn=Ct.get(W);Wt.bindFramebuffer(G.READ_FRAMEBUFFER,cl),Wt.bindFramebuffer(G.DRAW_FRAMEBUFFER,as);for(let an=0;an<Bt;an++)ve?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Pn.__webglTexture,K,Zt+an):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Pn.__webglTexture,K),Un?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,pn.__webglTexture,St,Ye+an):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,pn.__webglTexture,St),K!==0?G.blitFramebuffer(te,ae,Ot,Ht,Se,Ce,Ot,Ht,G.COLOR_BUFFER_BIT,G.NEAREST):Un?G.copyTexSubImage3D(on,St,Se,Ce,Ye+an,te,ae,Ot,Ht):G.copyTexSubImage2D(on,St,Se,Ce,te,ae,Ot,Ht);Wt.bindFramebuffer(G.READ_FRAMEBUFFER,null),Wt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Un?R.isDataTexture||R.isData3DTexture?G.texSubImage3D(on,St,Se,Ce,Ye,Ot,Ht,Bt,le,kt,je.data):W.isCompressedArrayTexture?G.compressedTexSubImage3D(on,St,Se,Ce,Ye,Ot,Ht,Bt,le,je.data):G.texSubImage3D(on,St,Se,Ce,Ye,Ot,Ht,Bt,le,kt,je):R.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,St,Se,Ce,Ot,Ht,le,kt,je.data):R.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,St,Se,Ce,je.width,je.height,le,je.data):G.texSubImage2D(G.TEXTURE_2D,St,Se,Ce,Ot,Ht,le,kt,je);G.pixelStorei(G.UNPACK_ROW_LENGTH,we),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,zn),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Xi),G.pixelStorei(G.UNPACK_SKIP_ROWS,yn),G.pixelStorei(G.UNPACK_SKIP_IMAGES,ss),St===0&&W.generateMipmaps&&G.generateMipmap(on),Wt.unbindTexture()},this.copyTextureToTexture3D=function(R,W,at=null,rt=null,K=0){return R.isTexture!==!0&&(Or("WebGLRenderer: copyTextureToTexture3D function signature has changed."),at=arguments[0]||null,rt=arguments[1]||null,R=arguments[2],W=arguments[3],K=arguments[4]||0),Or('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,W,at,rt,K)},this.initRenderTarget=function(R){Ct.get(R).__webglFramebuffer===void 0&&w.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?w.setTextureCube(R,0):R.isData3DTexture?w.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?w.setTexture2DArray(R,0):w.setTexture2D(R,0),Wt.unbindTexture()},this.resetState=function(){H=0,B=0,X=null,Wt.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ma}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorspace=Le._getDrawingBufferColorSpace(t),i.unpackColorSpace=Le._getUnpackColorSpace()}}const gv={type:"change"},mp={type:"start"},ox={type:"end"},Zc=new du,_v=new qa,b2=Math.cos(70*kv.DEG2RAD),gn=new J,qn=2*Math.PI,Xe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},od=1e-6;class T2 extends H1{constructor(t,i=null){super(t,i),this.state=Xe.NONE,this.enabled=!0,this.target=new J,this.cursor=new J,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ga.ROTATE,MIDDLE:ga.DOLLY,RIGHT:ga.PAN},this.touches={ONE:zr.ROTATE,TWO:zr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new J,this._lastQuaternion=new zs,this._lastTargetPosition=new J,this._quat=new zs().setFromUnitVectors(t.up,new J(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Zd,this._sphericalDelta=new Zd,this._scale=1,this._panOffset=new J,this._rotateStart=new re,this._rotateEnd=new re,this._rotateDelta=new re,this._panStart=new re,this._panEnd=new re,this._panDelta=new re,this._dollyStart=new re,this._dollyEnd=new re,this._dollyDelta=new re,this._dollyDirection=new J,this._mouse=new re,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=R2.bind(this),this._onPointerDown=A2.bind(this),this._onPointerUp=C2.bind(this),this._onContextMenu=z2.bind(this),this._onMouseWheel=U2.bind(this),this._onKeyDown=L2.bind(this),this._onTouchStart=N2.bind(this),this._onTouchMove=O2.bind(this),this._onMouseDown=w2.bind(this),this._onMouseMove=D2.bind(this),this._interceptControlDown=P2.bind(this),this._interceptControlUp=B2.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(gv),this.update(),this.state=Xe.NONE}update(t=null){const i=this.object.position;gn.copy(i).sub(this.target),gn.applyQuaternion(this._quat),this._spherical.setFromVector3(gn),this.autoRotate&&this.state===Xe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=qn:s>Math.PI&&(s-=qn),l<-Math.PI?l+=qn:l>Math.PI&&(l-=qn),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const f=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=f!=this._spherical.radius}if(gn.setFromSpherical(this._spherical),gn.applyQuaternion(this._quatInverse),i.copy(this.target).add(gn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let f=null;if(this.object.isPerspectiveCamera){const d=gn.length();f=this._clampDistance(d*this._scale);const m=d-f;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const d=new J(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const p=new J(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),f=gn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;f!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(f).add(this.object.position):(Zc.origin.copy(this.object.position),Zc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Zc.direction))<b2?this.object.lookAt(this.target):(_v.setFromNormalAndCoplanarPoint(this.object.up,this.target),Zc.intersectPlane(_v,this.target))))}else if(this.object.isOrthographicCamera){const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),f!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>od||8*(1-this._lastQuaternion.dot(this.object.quaternion))>od||this._lastTargetPosition.distanceToSquared(this.target)>od?(this.dispatchEvent(gv),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?qn/60*this.autoRotateSpeed*t:qn/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){gn.setFromMatrixColumn(i,0),gn.multiplyScalar(-t),this._panOffset.add(gn)}_panUp(t,i){this.screenSpacePanning===!0?gn.setFromMatrixColumn(i,1):(gn.setFromMatrixColumn(i,0),gn.crossVectors(this.object.up,gn)),gn.multiplyScalar(t),this._panOffset.add(gn)}_pan(t,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;gn.copy(l).sub(this.target);let c=gn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/s.clientHeight,this.object.matrix),this._panUp(2*i*c/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=t-s.left,c=i-s.top,f=s.width,d=s.height;this._mouse.x=l/f*2-1,this._mouse.y=-(c/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(qn*this._rotateDelta.x/i.clientHeight),this._rotateUp(qn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(qn*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-qn*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(qn*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-qn*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),l=.5*(t.pageX+s.x),c=.5*(t.pageY+s.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(qn*this._rotateDelta.x/i.clientHeight),this._rotateUp(qn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const f=(t.pageX+i.x)*.5,d=(t.pageY+i.y)*.5;this._updateZoomParameters(f,d)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new re,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function A2(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function R2(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function C2(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ox),this.state=Xe.NONE;break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function w2(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ga.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=Xe.DOLLY;break;case ga.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Xe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Xe.ROTATE}break;case ga.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Xe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Xe.PAN}break;default:this.state=Xe.NONE}this.state!==Xe.NONE&&this.dispatchEvent(mp)}function D2(r){switch(this.state){case Xe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case Xe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case Xe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function U2(r){this.enabled===!1||this.enableZoom===!1||this.state!==Xe.NONE||(r.preventDefault(),this.dispatchEvent(mp),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(ox))}function L2(r){this.enabled!==!1&&this._handleKeyDown(r)}function N2(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case zr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=Xe.TOUCH_ROTATE;break;case zr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=Xe.TOUCH_PAN;break;default:this.state=Xe.NONE}break;case 2:switch(this.touches.TWO){case zr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=Xe.TOUCH_DOLLY_PAN;break;case zr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=Xe.TOUCH_DOLLY_ROTATE;break;default:this.state=Xe.NONE}break;default:this.state=Xe.NONE}this.state!==Xe.NONE&&this.dispatchEvent(mp)}function O2(r){switch(this._trackPointer(r),this.state){case Xe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case Xe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case Xe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case Xe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=Xe.NONE}}function z2(r){this.enabled!==!1&&r.preventDefault()}function P2(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function B2(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Te=({x:r,y:t,z:i})=>`${r},${t},${i}`,fu={gridSize:64,heightLimit:64,selectedColor:"#ff6b6b",gravityMode:!0},vv=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]];function es(r){return new Map(r.map(t=>[Te(t),t]))}function I2(r,t,i=64,s=64){const l=i/2;return![t.x,t.y,t.z].every(Number.isInteger)||t.x<-l||t.x>=l||t.y<-l||t.y>=l||t.z<-s||t.z>=s||r.some(c=>Te(c)===Te(t))?r:[...r,t]}function F2(r,t){const i=Te(t);return r.filter(s=>Te(s)!==i)}function to(r){if(!r.length)return null;const t=r.map(l=>l.x),i=r.map(l=>l.y),s=r.map(l=>l.z);return{min:{x:Math.min(...t),y:Math.min(...i),z:Math.min(...s)},max:{x:Math.max(...t),y:Math.max(...i),z:Math.max(...s)}}}const H2=[{id:"bottom",label:"Bottom",hint:"Build plate underneath"},{id:"top",label:"Top",hint:"Turn it upside down"},{id:"left",label:"Left side",hint:"Lay it on its left"},{id:"right",label:"Right side",hint:"Lay it on its right"},{id:"front",label:"Front",hint:"Lay it face-down"},{id:"back",label:"Back",hint:"Lay it on its back"}];function G2(r,t){const{x:i,y:s,z:l,color:c}=r;return t==="top"?{x:i,y:-s,z:-l,color:c}:t==="left"?{x:l,y:s,z:i,color:c}:t==="right"?{x:-l,y:s,z:-i,color:c}:t==="front"?{x:i,y:l,z:s,color:c}:t==="back"?{x:i,y:-l,z:-s,color:c}:{...r}}function lx(r,t){if(!r.length)return[];const i=r.map(l=>G2(l,t)),s=Math.min(...i.map(l=>l.z));return i.map(l=>({...l,z:l.z-s}))}function cx(r,t=(i=>(i=r[0])==null?void 0:i.color)()??"#5532d5"){if(!r.length)return[];const s=es(r),l=new Map;for(const c of r)if(c.z>0){const f={x:c.x,y:c.y,z:c.z-1,color:t};s.has(Te(f))||l.set(Te(f),f)}return[...l.values()]}function V2(r,t){return t.z<0?!1:t.z===0||es(r).has(Te({x:t.x,y:t.y,z:t.z-1}))}function k2(r,t){return t.z<0||es(r).has(Te(t))?r:[...r,t]}function ux(r,t=(i=>(i=r[0])==null?void 0:i.color)()??"#5532d5"){return H2.map(s=>{const l=lx(r,s.id),c=cx(l,t),f=es(l),d=l.filter(p=>p.z>0&&!f.has(Te({x:p.x,y:p.y,z:p.z-1}))).length,m=to(l);return{...s,blocks:l,missing:c,unsupportedBlocks:d,height:m?m.max.z-m.min.z+1:0}}).sort((s,l)=>s.missing.length-l.missing.length||s.height-l.height||s.label.localeCompare(l.label))}function X2(r){const t=new Map;for(const s of r){const l=t.get(s.z)??[];l.push(s),t.set(s.z,l)}const i=[];for(const s of[...t.keys()].sort((l,c)=>l-c)){const l=t.get(s),c=es(l),f=new Set(c.keys());for(;f.size;){const d=f.values().next().value;f.delete(d);const m=[d],p=[];for(;m.length;){const g=c.get(m.pop());p.push({...g,z:0});for(const[_,x]of[[1,0],[-1,0],[0,1],[0,-1]]){const M=Te({x:g.x+_,y:g.y+x,z:s});f.delete(M)&&m.push(M)}}i.push(p)}}return i}function fx(r){const t=es(r),i=cx(r).map(f=>{const d=j2(f,t),m=d.find(g=>g[0]==="x"),p=d.find(g=>g[0]==="y");return m&&p?{kind:"corner",cell:f,highSides:[m,p]}:{kind:"edge",cell:f,highSide:d[0]??W2(f,r)}}),s=new Map(i.map(f=>[Te(f.cell),f])),l=i.map(f=>{if(f.kind!=="edge")return f;const d=[s.get(Te({x:f.cell.x,y:f.cell.y-1,z:f.cell.z})),s.get(Te({x:f.cell.x,y:f.cell.y+1,z:f.cell.z}))],m=[s.get(Te({x:f.cell.x-1,y:f.cell.y,z:f.cell.z})),s.get(Te({x:f.cell.x+1,y:f.cell.y,z:f.cell.z}))],p=d.find(_=>(_==null?void 0:_.kind)==="edge"&&_.highSide[0]==="x"),g=m.find(_=>(_==null?void 0:_.kind)==="edge"&&_.highSide[0]==="y");return(p==null?void 0:p.kind)==="edge"&&(g==null?void 0:g.kind)==="edge"?{kind:"corner",cell:f.cell,highSides:[p.highSide,g.highSide]}:f}),c=new Map(l.map(f=>[Te(f.cell),f]));return l.map(f=>{if(f.kind!=="edge"||!(f.cell.z===0||t.has(Te({x:f.cell.x,y:f.cell.y,z:f.cell.z-1}))))return f;const d=c.get(Te({x:f.cell.x-1,y:f.cell.y,z:f.cell.z})),m=c.get(Te({x:f.cell.x+1,y:f.cell.y,z:f.cell.z}));if((d==null?void 0:d.kind)==="edge"&&d.highSide==="x-"&&(m==null?void 0:m.kind)==="edge"&&m.highSide==="x+")return{kind:"valley",cell:f.cell,axis:"x"};const p=c.get(Te({x:f.cell.x,y:f.cell.y-1,z:f.cell.z})),g=c.get(Te({x:f.cell.x,y:f.cell.y+1,z:f.cell.z}));return(p==null?void 0:p.kind)==="edge"&&p.highSide==="y-"&&(g==null?void 0:g.kind)==="edge"&&g.highSide==="y+"?{kind:"valley",cell:f.cell,axis:"y"}:f})}function j2(r,t){return[["x-",-1,0],["x+",1,0],["y-",0,-1],["y+",0,1]].filter(([,s,l])=>t.has(Te({x:r.x+s,y:r.y+l,z:r.z}))).map(([s])=>s)}function W2(r,t){const i=t.filter(s=>s.x!==r.x||s.y!==r.y).sort((s,l)=>Math.abs(s.x-r.x)+Math.abs(s.y-r.y)-Math.abs(l.x-r.x)-Math.abs(l.y-r.y))[0];if(i){const s=i.x-r.x,l=i.y-r.y;return Math.abs(s)>=Math.abs(l)?s<0?"x-":"x+":l<0?"y-":"y+"}return"x-"}function Y2(r){const t=r==="x-"?[-1,0]:r==="x+"?[1,0]:r==="y-"?[0,-1]:[0,1],i=[-t[0],-t[1]];return{low:i,width:[-i[1],i[0]]}}function hx(r){const t=i=>r.includes(i);return t("x-")&&t("y-")?0:t("x-")&&t("y+")?Math.PI/2:t("x+")&&t("y+")?Math.PI:-Math.PI/2}const In={a:0,b:1,x:2,y:3,leftBumper:4,rightBumper:5,leftTrigger:6,rightTrigger:7,view:8,menu:9,dpadUp:12,dpadDown:13,dpadLeft:14,dpadRight:15},q2=.18;function Kc(r,t=q2){const i=Math.abs(r);return i<=t?0:Math.sign(r)*(i-t)/(1-t)}function Z2(r){return!!(r&&(r.pressed||r.value>.5))}function K2(r,t,i){return!!(r[i]&&!t[i])}function Q2(r){return r.find(t=>(t==null?void 0:t.connected)&&t.mapping==="standard")??r.find(t=>t==null?void 0:t.connected)??null}function J2(r,t){const i=new Ie,s=new me;t.forEach((l,c)=>{i.makeTranslation(l.x+.5,l.z+.5,l.y+.5),r.setMatrixAt(c,i),r.setColorAt(c,s.set(l.color))}),r.count=t.length,r.instanceMatrix.needsUpdate=!0,r.instanceColor&&(r.instanceColor.needsUpdate=!0),r.computeBoundingBox(),r.computeBoundingSphere()}const $2=Qt.forwardRef(function(t,i){const s=Qt.useRef(null),l=Qt.useRef(null),c=Qt.useRef(t);c.current=t;const[f,d]=Qt.useState(!1),[m,p]=Qt.useState(!1),[g,_]=Qt.useState(!1);return Qt.useEffect(()=>{const x=s.current;let M;try{M=new E2({antialias:!0,alpha:!1})}catch{d(!0);return}M.setPixelRatio(Math.min(devicePixelRatio,2)),M.shadowMap.enabled=!0,M.shadowMap.type=wv,M.outputColorSpace=oi,x.appendChild(M.domElement),M.domElement.setAttribute("aria-label","3D building workspace"),M.domElement.tabIndex=0;const E=new E1;E.background=new me("#eaf8ff"),E.fog=new fp("#eaf8ff",45,95);const b=new xi(48,1,.1,140);b.position.set(12,11,14);const S=new T2(b,M.domElement);S.enableDamping=!0,S.dampingFactor=.08,S.target.set(0,1.5,0),S.maxDistance=70,S.minDistance=3,S.maxPolarAngle=Math.PI*.95,S.screenSpacePanning=!0,S.mouseButtons={LEFT:ga.ROTATE,MIDDLE:ga.PAN,RIGHT:ga.PAN},E.add(new L1("#ffffff","#9fc4d6",2.25));const v=new z1("#fff5d6",3.2);v.position.set(10,18,8),v.castShadow=!0,v.shadow.mapSize.set(1024,1024),v.shadow.camera.left=-18,v.shadow.camera.right=18,v.shadow.camera.top=18,v.shadow.camera.bottom=-18,E.add(v);const z=new Zn(new Zr(64,64),new jc({color:"#f9fdff",roughness:.92}));z.rotation.x=-Math.PI/2,z.receiveShadow=!0,E.add(z);const L=new I1(64,64,"#6d5de7","#c7dbe5");L.position.y=.006,L.material.opacity=.46,L.material.transparent=!0,E.add(L);const U=new F1(2.4);U.position.set(-31,.03,-31),E.add(U);const k=new Zn(new Ja(1,1,1),new jc({color:"#28c76f",transparent:!0,opacity:.45,depthWrite:!1}));k.visible=!1,E.add(k);const H=new dp(new w1(new Ja(1.012,1.012,1.012)),new pu({color:"#ffca3a"}));H.visible=!1,E.add(H);const B=new up({color:"#ffe275",transparent:!0,opacity:.5,side:Fi,depthWrite:!1}),X=new Zn(new Zr(.98,.98),B);X.visible=!1,E.add(X);const D=new Ja(1,1,1),C=new jc({roughness:.72,metalness:0}),I=new Bc(D,C,1e4);I.castShadow=!0,I.receiveShadow=!0,I.instanceMatrix.setUsage(p_),E.add(I);const ct=eR(),st=nR(),_t=iR(),mt=new jc({roughness:.8,metalness:0,flatShading:!0}),P=new Bc(ct,mt,1e4),Y=new Bc(st,mt,1e4),Z=new Bc(_t,mt,1e4);for(const Ct of[P,Y,Z])Ct.castShadow=!0,Ct.receiveShadow=!0,Ct.instanceMatrix.setUsage(p_),Ct.count=0,E.add(Ct);const Mt=new B1,At=new re;let N=null,$=null,bt=!1,q="",ut=[],Tt={x:0,y:0};const gt={scene:E,camera:b,controls:S,renderer:M,blockMesh:I,blockGeometry:D,blockMaterial:C,supportMesh:P,supportGeometry:ct,cornerSupportMesh:Y,cornerSupportGeometry:st,valleySupportMesh:Z,valleySupportGeometry:_t,supportMaterial:mt,ghost:k,hoverBox:H,face:X,blocks:[],frame:()=>px(gt),setView:Ct=>aR(gt,Ct),nudge:(Ct,w)=>{const T=new J().setFromMatrixColumn(b.matrix,0);T.y=0,T.normalize();const tt=new J;b.getWorldDirection(tt),tt.y=0,tt.normalize();const ft=T.multiplyScalar(Ct).add(tt.multiplyScalar(w));b.position.add(ft),S.target.add(ft)}};l.current=gt;const It=()=>{const Ct=x.clientWidth,w=x.clientHeight;M.setSize(Ct,w,!1),b.aspect=Ct/w,b.updateProjectionMatrix()},ot=new ResizeObserver(It);ot.observe(x),It();const Rt=Ct=>{var tt;Mt.setFromCamera(Ct,b);const w=Mt.intersectObject(I,!1);if(N=null,w.length&&w[0].instanceId!==void 0){const ft=gt.blocks[w[0].instanceId];if(ft){const Et=((tt=w[0].face)==null?void 0:tt.normal)??new J(0,1,0),pt={x:Math.round(Et.x),y:Math.round(Et.z),z:Math.round(Et.y)};return{block:ft,candidate:{x:ft.x+pt.x,y:ft.y+pt.y,z:ft.z+pt.z,color:c.current.color},normal:pt}}}const T=Mt.intersectObject(z,!1)[0];return T?{block:null,candidate:{x:Math.floor(T.point.x),y:Math.floor(T.point.z),z:0,color:c.current.color},normal:{x:0,y:0,z:1}}:null},$t=Ct=>{bt!==Ct&&(bt=Ct,_(Ct))},Jt=Ct=>{$t(!1);const w=M.domElement.getBoundingClientRect();At.set((Ct.clientX-w.left)/w.width*2-1,-((Ct.clientY-w.top)/w.height)*2+1),N=Rt(At),xv(gt,N,c.current.blocks,c.current.tool,c.current.selected,c.current.gravityMode)},Oe=Ct=>{Tt={x:Ct.clientX,y:Ct.clientY},M.domElement.focus(),Jt(Ct)},G=Ct=>{if(Jt(Ct),Math.hypot(Ct.clientX-Tt.x,Ct.clientY-Tt.y)>5||!N)return;const w=c.current;if(Ct.button===2){N.block&&(w.onSelect(N.block),w.onRemove(N.block));return}Ct.button===0&&(w.tool==="add"?(w.onSelect(null),w.onAdd({...N.candidate,color:w.color})):N.block&&(w.onSelect(N.block),w.onRemove(N.block)))},nn=Ct=>{const w=typeof navigator.getGamepads=="function"?Q2(Array.from(navigator.getGamepads())):null,T=w?`${w.index}:${w.id}`:"";if(T!==q&&(q=T,ut=[],p(!!w),c.current.onControllerChange((w==null?void 0:w.id)??null),w||$t(!1)),!w)return;const tt=w.buttons.map(Z2),ft=Kc(w.axes[0]??0),Et=Kc(w.axes[1]??0),pt=Kc(w.axes[2]??0),Xt=Kc(w.axes[3]??0),wt=Dt=>K2(tt,ut,Dt),Ft=!!(ft||Et||pt||Xt),ge=tt.some((Dt,Gt)=>Dt&&!ut[Gt]);(Ft||ge)&&$t(!0),bt&&!c.current.interactionLocked&&((ft||Et)&&sR(gt,ft,-Et,Ct*5.2),(pt||Xt)&&rR(gt,pt,Xt,Ct*2.25),$=Rt(new re(0,0)),xv(gt,$,c.current.blocks,c.current.tool,c.current.selected,c.current.gravityMode),wt(In.leftTrigger)&&$&&(c.current.onSelect(null),c.current.onAdd({...$.candidate,color:c.current.color})),wt(In.rightTrigger)&&($!=null&&$.block)&&(c.current.onSelect($.block),c.current.onRemove($.block)),wt(In.a)&&yv(gt,1),wt(In.b)&&yv(gt,-1),wt(In.leftBumper)&&c.current.onToolChange("remove"),wt(In.rightBumper)&&c.current.onToolChange("add"),wt(In.x)&&c.current.onUndo(),wt(In.y)&&gt.frame(),wt(In.view)&&gt.setView("home"),wt(In.dpadLeft)&&gt.nudge(-1,0),wt(In.dpadRight)&&gt.nudge(1,0),wt(In.dpadUp)&&gt.nudge(0,1),wt(In.dpadDown)&&gt.nudge(0,-1)),wt(In.menu)&&c.current.onControllerHelp(),c.current.interactionLocked&&wt(In.b)&&c.current.onControllerBack(),ut=tt},he=Ct=>Ct.preventDefault();M.domElement.addEventListener("pointermove",Jt),M.domElement.addEventListener("pointerdown",Oe),M.domElement.addEventListener("pointerup",G),M.domElement.addEventListener("contextmenu",he);let pe=0,Wt=performance.now();const Re=(Ct=performance.now())=>{const w=Math.min((Ct-Wt)/1e3,.05);Wt=Ct,nn(w),S.update(),M.render(E,b),pe=requestAnimationFrame(Re)};return Re(),()=>{cancelAnimationFrame(pe),ot.disconnect(),S.dispose(),M.dispose(),D.dispose(),C.dispose(),ct.dispose(),st.dispose(),_t.dispose(),mt.dispose(),x.removeChild(M.domElement),l.current=null,c.current.onControllerChange(null)}},[]),Qt.useEffect(()=>{const x=l.current;x&&(x.blocks=t.blocks.slice(0,1e4),J2(x.blockMesh,x.blocks))},[t.blocks]),Qt.useEffect(()=>{const x=l.current;x&&tR(x.supportMesh,x.cornerSupportMesh,x.valleySupportMesh,t.gravityMode?t.blocks:[],t.color)},[t.blocks,t.color,t.gravityMode]),Qt.useEffect(()=>{const x=l.current;x&&(t.selected?(x.hoverBox.position.set(t.selected.x+.5,t.selected.z+.5,t.selected.y+.5),x.hoverBox.visible=!0):x.hoverBox.visible=!1)},[t.selected]),Qt.useImperativeHandle(i,()=>({setView:x=>{var M;return(M=l.current)==null?void 0:M.setView(x)},frame:()=>{var x;return(x=l.current)==null?void 0:x.frame()},nudge:(x,M)=>{var E;return(E=l.current)==null?void 0:E.nudge(x,M)}}),[]),f?O.jsxs("div",{className:"webgl-error",role:"alert",children:[O.jsx("span",{children:"🧊"}),O.jsx("h2",{children:"3D needs a little help"}),O.jsx("p",{children:"Turn on hardware acceleration in your browser, then reload this page."})]}):O.jsxs("div",{className:"canvas-host",ref:s,children:[O.jsxs("div",{className:"canvas-tip",children:[O.jsx("b",{children:g?"LT place · RT break":t.tool==="add"?"Click to add":"Click a block to remove"}),O.jsx("span",{children:g?"Sticks move and look · A/B change layer":t.gravityMode?"Gravity Mode on · Red ghosts get an automatic 45° leg":"Drag empty space to look around · Wheel to zoom"})]}),m&&O.jsxs("div",{className:`controller-crosshair ${g?"active":""}`,"aria-hidden":"true",children:[O.jsx("i",{}),O.jsx("i",{}),O.jsx("i",{}),O.jsx("i",{})]})]})});function xv(r,t,i,s,l,c){if(!t){r.ghost.visible=!1,r.face.visible=!1,l?(r.hoverBox.position.set(l.x+.5,l.z+.5,l.y+.5),r.hoverBox.visible=!0):r.hoverBox.visible=!1;return}const f=new Set(i.map(Te)),d=t.candidate.z===0||f.has(Te({x:t.candidate.x,y:t.candidate.y,z:t.candidate.z-1})),m=!f.has(Te(t.candidate))&&t.candidate.x>=-32&&t.candidate.x<32&&t.candidate.y>=-32&&t.candidate.y<32&&t.candidate.z>=-64&&t.candidate.z<64&&(!c||d);if(r.ghost.visible=s==="add",r.ghost.position.set(t.candidate.x+.5,t.candidate.z+.5,t.candidate.y+.5),r.ghost.material.color.set(m?"#28c76f":"#ef476f"),r.face.visible=!!t.block,t.block){const p=t.block,g=t.normal;r.hoverBox.position.set(p.x+.5,p.z+.5,p.y+.5),r.hoverBox.visible=!0,r.face.position.set(p.x+.5+g.x*.505,p.z+.5+g.z*.505,p.y+.5+g.y*.505),r.face.rotation.set(g.z?Math.PI/2:0,g.x?Math.PI/2:0,0)}else l?(r.hoverBox.position.set(l.x+.5,l.z+.5,l.y+.5),r.hoverBox.visible=!0):r.hoverBox.visible=!1}function tR(r,t,i,s,l){const c=fx(s),f=c.filter(_=>_.kind==="edge"),d=c.filter(_=>_.kind==="corner"),m=c.filter(_=>_.kind==="valley"),p=new Ie,g={"x-":0,"x+":Math.PI,"y-":-Math.PI/2,"y+":Math.PI/2};f.slice(0,r.instanceMatrix.count).forEach((_,x)=>{p.makeRotationY(g[_.highSide]),p.setPosition(_.cell.x+.5,_.cell.z+.5,_.cell.y+.5),r.setMatrixAt(x,p)}),d.slice(0,t.instanceMatrix.count).forEach((_,x)=>{p.makeRotationY(hx(_.highSides)),p.setPosition(_.cell.x+.5,_.cell.z+.5,_.cell.y+.5),t.setMatrixAt(x,p)}),m.slice(0,i.instanceMatrix.count).forEach((_,x)=>{p.makeRotationY(_.axis==="x"?0:Math.PI/2),p.setPosition(_.cell.x+.5,_.cell.z+.5,_.cell.y+.5),i.setMatrixAt(x,p)});for(const[_,x]of[[r,f.length],[t,d.length],[i,m.length]])_.count=Math.min(x,_.instanceMatrix.count),_.material.color.set(l),_.instanceMatrix.needsUpdate=!0,_.computeBoundingBox(),_.computeBoundingSphere()}function eR(){const r=new Qn;return r.setAttribute("position",new Dn([-.5,-.5,-.5,-.5,.5,-.5,.5,.5,-.5,-.5,-.5,.5,-.5,.5,.5,.5,.5,.5],3)),r.setIndex([0,1,2,3,5,4,0,3,4,0,4,1,1,4,5,1,5,2,0,2,5,0,5,3]),r.computeVertexNormals(),r}function nR(){const r=new Qn;return r.setAttribute("position",new Dn([-.5,-.5,-.5,-.5,.5,-.5,.5,.5,-.5,.5,.5,.5,-.5,.5,.5],3)),r.setIndex([0,1,2,0,2,3,0,3,4,0,4,1,1,3,2,1,4,3]),r.computeVertexNormals(),r}function iR(){const r=new Qn;return r.setAttribute("position",new Dn([0,-.5,-.5,0,-.5,.5,-.5,.5,-.5,-.5,.5,.5,.5,.5,-.5,.5,.5,.5],3)),r.setIndex([2,5,4,2,3,5,0,3,2,0,1,3,0,5,1,0,4,5,0,2,4,1,5,3]),r.computeVertexNormals(),r}function dx(r){const t=to(r);return t?new J((t.min.x+t.max.x+1)/2,(t.min.z+t.max.z+1)/2,(t.min.y+t.max.y+1)/2):new J(0,1.5,0)}function px(r){const t=dx(r.blocks),i=to(r.blocks),s=i?Math.max(i.max.x-i.min.x+1,i.max.y-i.min.y+1,i.max.z-i.min.z+1):5;r.controls.target.copy(t),r.camera.position.copy(t).add(new J(s*1.8,s*1.35,s*1.8)),r.controls.update()}function aR(r,t){if(t==="home"||t==="iso"){px(r);return}const i=dx(r.blocks),s=to(r.blocks),l=(s?Math.max(s.max.x-s.min.x+1,s.max.y-s.min.y+1,s.max.z-s.min.z+1):5)*2.5,c={front:new J(0,0,l),back:new J(0,0,-l),left:new J(-l,0,0),right:new J(l,0,0),top:new J(0,l,.001)};r.controls.target.copy(i),r.camera.position.copy(i).add(c[t]),r.controls.update()}function sR(r,t,i,s){const l=new J().setFromMatrixColumn(r.camera.matrix,0);l.y=0,l.lengthSq()&&l.normalize();const c=new J;r.camera.getWorldDirection(c),c.y=0,c.lengthSq()&&c.normalize();const f=l.multiplyScalar(t*s).add(c.multiplyScalar(i*s));r.camera.position.add(f),r.controls.target.add(f)}function rR(r,t,i,s){const l=r.camera.position.clone().sub(r.controls.target),c=new Zd().setFromVector3(l);c.theta-=t*s,c.phi=kv.clamp(c.phi+i*s,.12,Math.PI*.95),r.camera.position.copy(r.controls.target).add(new J().setFromSpherical(c)),r.camera.lookAt(r.controls.target)}function yv(r,t){const i=new J(0,t,0);r.camera.position.add(i),r.controls.target.add(i)}function mx(r){const t=es(r),i=new Set(t.keys()),s=[];for(;i.size;){const g=i.values().next().value,_=[g];i.delete(g);const x=[];for(;_.length;){const M=_.pop(),E=t.get(M);x.push(E);for(const[b,S,v]of vv){const z=Te({x:E.x+b,y:E.y+S,z:E.z+v});i.delete(z)&&_.push(z)}}s.push(x)}const l=new Map;s.forEach((g,_)=>g.forEach(x=>l.set(Te(x),_)));const c=r.length?Math.min(...r.map(g=>g.z)):0,f=s.filter(g=>Math.min(...g.map(_=>_.z))>c).length;let d=0;for(const g of r)for(let _=-1;_<=1;_++)for(let x=-1;x<=1;x++)for(let M=-1;M<=1;M++){if(Math.abs(_)+Math.abs(x)+Math.abs(M)<=1)continue;const b=t.get(Te({x:g.x+_,y:g.y+x,z:g.z+M}));b&&Te(g)<Te(b)&&l.get(Te(g))!==l.get(Te(b))&&d++}const m=r.length<2?0:r.filter(g=>vv.reduce((_,[x,M,E])=>_+(t.has(Te({x:g.x+x,y:g.y+M,z:g.z+E}))?1:0),0)<=1).length,p=[];return r.length||p.push("Your build is empty. Add a few blocks first!"),s.length>1&&p.push(`Your build has ${s.length} separate groups. They will print as separate pieces.`),f&&p.push(`${f} group${f===1?" is":"s are"} floating above the lowest part.`),d&&p.push("Some blocks touch only at an edge or corner, which can make a weak print."),m>0&&r.length>3&&p.push(`${m} block${m===1?" looks":"s look"} thin or delicate.`),{blockCount:r.length,componentCount:s.length,floatingComponents:f,edgeOrCornerTouches:d,fragileBlocks:m,bounds:to(r),warnings:p}}const oR=2;function Gr(r,t,i=fu.selectedColor,s=!0){return{format:"block-builder",version:2,name:r.trim()||"My Creation",blocks:t,settings:{...fu,selectedColor:i,gravityMode:s}}}function nl(r){return JSON.stringify(r,null,2)}function gx(r){let t;try{t=JSON.parse(r)}catch{throw new Error("That file is not valid JSON.")}if(!t||typeof t!="object")throw new Error("That does not look like a Block Builder project.");const i=t;if(i.version===1&&Array.isArray(i.blocks)&&(i.format="block-builder",i.version=2,i.settings=fu),i.format!=="block-builder")throw new Error("That file was not made by Block Builder.");if(i.version!==oR)throw new Error("This project uses a version Block Builder cannot open yet.");if(typeof i.name!="string"||!Array.isArray(i.blocks))throw new Error("This project is missing its name or blocks.");if(i.blocks.length>1e4)throw new Error("That project has too many blocks to open safely.");const s=new Set,l=i.blocks.map((f,d)=>{if(!f||typeof f!="object")throw new Error(`Block ${d+1} is not valid.`);const m=f;if(![m.x,m.y,m.z].every(Number.isInteger)||typeof m.color!="string"||!/^#[0-9a-f]{6}$/i.test(m.color))throw new Error(`Block ${d+1} has invalid coordinates or color.`);const p=`${m.x},${m.y},${m.z}`;if(s.has(p))throw new Error(`Two blocks share the same spot (${p}).`);return s.add(p),{x:m.x,y:m.y,z:m.z,color:m.color}}),c=i.settings;return Gr(i.name,l,typeof(c==null?void 0:c.selectedColor)=="string"?c.selectedColor:fu.selectedColor,typeof(c==null?void 0:c.gravityMode)=="boolean"?c.gravityMode:!0)}function lR(r,t,i="application/json"){const s=URL.createObjectURL(new Blob([r],{type:i})),l=document.createElement("a");l.href=s,l.download=t,l.click(),setTimeout(()=>URL.revokeObjectURL(s),1e3)}function au(r,t){return r.map(i=>({...i,color:t}))}const Be=(r,t,i,s)=>({x:r,y:t,z:i,color:s});function cR(){const r="#67d5b5",t=new Map,i=(l,c,f)=>t.set(`${l},${c},${f}`,Be(l,c,f,r)),s=(l,c,f,d,m,p)=>{for(let g=l;g<=c;g++)for(let _=f;_<=d;_++)for(let x=m;x<=p;x++)i(g,_,x)};return s(-10,9,-7,6,0,0),s(-10,9,6,6,1,8),s(-10,-10,-7,6,1,6),s(9,9,-7,6,1,6),s(-10,9,-7,-7,1,2),s(-10,9,-2,-2,1,3),s(-4,3,-6,-6,1,2),s(-4,-4,-6,-2,1,2),s(3,3,-6,-2,1,2),s(-4,-4,-1,6,1,7),s(3,3,-1,6,1,7),s(-9,-5,1,1,1,4),s(4,8,2,2,1,5),s(-7,-7,-6,-3,1,2),s(6,6,-6,-3,1,2),s(-1,-1,-2,0,1,3),s(-9,-8,5,5,1,7),s(7,8,5,5,1,7),s(-9,-9,4,5,1,7),s(8,8,4,5,1,7),[...t.values()]}function gu(r,t){const i=new Map,s=(c,f,d)=>i.set(`${c},${f},${d}`,Be(c,f,d,r));return t({add:s,fill:(c,f,d,m,p,g)=>{for(let _=c;_<=f;_++)for(let x=d;x<=m;x++)for(let M=p;M<=g;M++)s(_,x,M)}}),[...i.values()]}function uR(){return gu("#8b5cf6",({add:r,fill:t})=>{t(-8,8,-6,6,0,0),t(-8,8,6,6,1,4),t(-8,-8,-5,5,1,4),t(8,8,-5,5,1,4),t(-8,-1,-6,-6,1,4),t(1,8,-6,-6,1,4);for(const[i,s]of[[-7,-5],[7,-5],[-7,5],[7,5]]){t(i-1,i+1,s-1,s+1,1,7);for(let l=i-1;l<=i+1;l++)for(let c=s-1;c<=s+1;c++)l+c&1&&r(l,c,8);r(i,s,8),r(i,s,9)}t(-3,-3,-2,3,1,6),t(3,3,-2,3,1,6),t(-2,2,-2,-2,1,6),t(-2,2,3,3,1,6);for(let i=-3;i<=3;i++)for(const s of[-2,3])i+s&1&&r(i,s,7);for(let i=-1;i<=2;i++)for(const s of[-3,3])s+i&1&&r(s,i,7);t(-1,1,-3,-3,1,2),t(0,0,-3,-3,3,3),t(-3,-2,-6,-5,1,6),t(2,3,-6,-5,1,6),r(-3,-6,7),r(-2,-6,7),r(2,-6,7),r(3,-6,7),t(-1,1,5,5,1,5),r(-1,5,6),r(1,5,6)})}function fR(){return gu("#3a86ff",({add:r,fill:t})=>{for(let i=-8;i<=8;i++)for(let s=-8;s<=8;s++)i*i+s*s<=64&&r(i,s,0);t(6,8,-1,1,0,0);for(let i=1;i<=17;i++)for(let s=-3;s<=3;s++)for(let l=-3;l<=3;l++)Math.abs(s)+Math.abs(l)<=5&&r(s,l,i);for(let i=18;i<=19;i++)for(let s=-2;s<=2;s++)for(let l=-2;l<=2;l++)Math.abs(s)+Math.abs(l)<=3&&r(s,l,i);t(-1,1,-1,1,20,20);for(const[i,s]of[[0,0],[-1,0],[1,0],[0,-1],[0,1]])r(i,s,21);r(0,0,22);for(let i=1;i<=6;i++){const s=i<=2?6:i<=4?5:4;t(-s,s,-1,1,i,i),t(-1,1,-s,s,i,i)}t(7,8,-1,1,1,21),t(6,8,0,0,1,21),t(6,8,-1,-1,1,2),t(6,8,1,1,1,2);for(const i of[5,10,15,20])t(7,8,-1,1,i,i),t(6,8,0,0,i,i);t(-2,2,-3,-3,11,12),t(-1,1,-3,-3,13,13)})}function hR(){return gu("#ff6b6b",({add:r,fill:t})=>{for(let i=-10;i<=10;i++)for(let s=-6;s<=4;s++){const l=Math.abs(i)<=6&&s>=-3,c=(i+7)*(i+7)/16+(s+1)*(s+1)/36<=1,f=(i-7)*(i-7)/16+(s+1)*(s+1)/36<=1;(l||c||f)&&(r(i,s,0),r(i,s,1))}t(-6,-2,-1,1,2,2),t(-4,-4,-3,3,2,2),r(-4,0,3);for(const[i,s]of[[3,1],[5,1],[4,2],[4,0]])r(i,s,2),r(i,s,3);t(-2,0,-2,0,2,2),t(1,3,-2,0,2,2),r(-1,-1,3),r(2,-1,3),t(-3,3,3,4,2,2),t(-8,-5,3,4,2,2),t(5,8,3,4,2,2),t(-1,1,1,2,2,2),r(0,1,3)})}function dR(){return gu("#536878",({add:r,fill:t})=>{const i=(c,f)=>Math.abs(c)<=14&&Math.abs(f)<=10&&Math.abs(c)+Math.abs(f)<=20;for(let c=-14;c<=14;c++)for(let f=-10;f<=10;f++)i(c,f)&&(r(c,f,0),r(c,f,1));const s=[[1,0],[-1,0],[0,1],[0,-1]];for(let c=-14;c<=14;c++)for(let f=-10;f<=10;f++)i(c,f)&&s.some(([d,m])=>!i(c+d,f+m))&&(f<=-9&&Math.abs(c)<=3||t(c,c,f,f,2,4));for(const[c,f]of[[-11,-7],[11,-7],[-11,7],[11,7]]){t(c-1,c+1,f-1,f+1,2,7),t(c-1,c+1,f-1,f+1,8,8),t(c,c,f,f,9,11);for(const[d,m]of s)r(c+d,f+m,9)}t(-12,-6,-2,5,2,5),t(6,12,-2,5,2,5),t(-11,-7,-1,5,6,7),t(7,11,-1,5,6,7),t(-10,-8,0,4,8,8),t(8,10,0,4,8,8);for(const c of[-12,-6,6,12])t(c,c,-5,-3,2,4);t(-5,5,4,8,2,6),t(-4,4,5,8,7,9),t(-3,3,6,8,10,12),t(-2,2,7,8,13,14),t(-1,1,7,7,15,16),t(0,0,7,7,17,20),r(-1,7,17),r(1,7,17),r(-1,7,18),r(1,7,18),r(-1,7,19),r(1,7,19);const l=[0,1,2,3,4,6,6,5,4,3,2,1];for(let c=0;c<l.length;c++){const f=-9+c,d=l[c];for(let m=-d;m<=d;m++)r(m,f,2)}t(-1,1,-5,-2,3,3),t(0,0,-4,-3,4,4),t(-4,-3,-4,-1,3,3),t(3,4,-4,-1,3,3),r(-3,-2,4),r(3,-2,4),t(-7,-7,-9,-4,2,3),t(7,7,-9,-4,2,3),t(-9,-8,-5,-3,2,3),t(8,9,-5,-3,2,3),t(-5,-5,1,3,2,4),t(5,5,1,3,2,4)})}const Sv=[{name:"Small House",emoji:"🏠",blocks:[...Array.from({length:5},(r,t)=>Array.from({length:4},(i,s)=>Be(t-2,s-1,0,"#ffd166"))).flat(),...Array.from({length:5},(r,t)=>[Be(t-2,-1,1,"#ff8c42"),Be(t-2,2,1,"#ff8c42")]).flat(),...Array.from({length:2},(r,t)=>[Be(-2,t,1,"#ff8c42"),Be(2,t,1,"#ff8c42")]).flat(),...Array.from({length:5},(r,t)=>Array.from({length:4},(i,s)=>Be(t-2,s-1,2,"#d65db1"))).flat()]},{name:"Robot",emoji:"🤖",blocks:[...Array.from({length:3},(r,t)=>Array.from({length:2},(i,s)=>Array.from({length:3},(l,c)=>Be(t-1,s,c+2,"#67d5b5")))).flat(2),Be(-1,-1,4,"#8b5cf6"),Be(1,-1,4,"#8b5cf6"),Be(-2,0,3,"#ffd166"),Be(2,0,3,"#ffd166"),Be(-1,0,1,"#3a86ff"),Be(1,0,1,"#3a86ff"),Be(-1,0,0,"#3a86ff"),Be(1,0,0,"#3a86ff")]},{name:"Bridge",emoji:"🌉",blocks:[...Array.from({length:9},(r,t)=>Be(t-4,0,2,"#ff8c42")),...Array.from({length:2},(r,t)=>[Be(-4,0,t,"#5532d5"),Be(4,0,t,"#5532d5")]).flat(),Be(-3,0,1,"#ffd166"),Be(3,0,1,"#ffd166")]},{name:"HI Nameplate",emoji:"🔤",blocks:[...Array.from({length:5},(r,t)=>[Be(-3,0,t,"#ff6b6b"),Be(-1,0,t,"#ff6b6b"),Be(1,0,t,"#3a86ff"),Be(3,0,t,"#3a86ff")]).flat(),Be(-2,0,2,"#ff6b6b"),Be(2,0,0,"#3a86ff"),Be(2,0,4,"#3a86ff")]},{name:"Mega Desk Organizer",emoji:"✏️",blocks:cR()},{name:"Dragon Castle",emoji:"🏰",blocks:uR()},{name:"Starship Rocket",emoji:"🚀",blocks:fR()},{name:"Mega Game Controller",emoji:"🎮",blocks:hR()},{name:"Starship War Base",emoji:"🛸",blocks:dR()}],pR=[{normal:[1,0,0],neighbor:[1,0,0],corners:[[1,0,0],[1,1,0],[1,1,1],[1,0,1]]},{normal:[-1,0,0],neighbor:[-1,0,0],corners:[[0,0,0],[0,0,1],[0,1,1],[0,1,0]]},{normal:[0,1,0],neighbor:[0,1,0],corners:[[0,1,0],[0,1,1],[1,1,1],[1,1,0]]},{normal:[0,-1,0],neighbor:[0,-1,0],corners:[[0,0,0],[1,0,0],[1,0,1],[0,0,1]]},{normal:[0,0,1],neighbor:[0,0,1],corners:[[0,0,1],[1,0,1],[1,1,1],[0,1,1]]},{normal:[0,0,-1],neighbor:[0,0,-1],corners:[[0,0,0],[0,1,0],[1,1,0],[1,0,0]]}];function ld(r,t){if(!r.length)throw new Error("Add at least one block before exporting.");if(!Number.isFinite(t.blockSize)||t.blockSize<1||t.blockSize>50)throw new Error("Block size must be from 1 to 50 mm.");const i=es(r),s=to(r),l=t.centerXY?-(s.min.x+s.max.x+1)/2:0,c=t.centerXY?-(s.min.y+s.max.y+1)/2:0,f=t.placeOnBed?-s.min.z:0,d=[],m=(E,b)=>[(E.x+b[0]+l)*t.blockSize,(E.y+b[1]+c)*t.blockSize,(E.z+b[2]+f)*t.blockSize];for(const E of r)for(const b of pR){const[S,v,z]=b.neighbor;if(i.has(Te({x:E.x+S,y:E.y+v,z:E.z+z})))continue;const L=b.corners.map(U=>m(E,U));ol(d,L,b.normal)}if(t.angledSupports)for(const E of fx(r))gR(d,E,t.blockSize,l,c,f);const p=yR(d),g=new ArrayBuffer(84+p.length*50),_=new DataView(g),x=new TextEncoder().encode("Block Builder binary STL - exterior voxel faces");new Uint8Array(g,0,Math.min(80,x.length)).set(x.slice(0,80)),_.setUint32(80,p.length,!0);let M=84;for(const E of p){for(const b of E.normal)_.setFloat32(M,b,!0),M+=4;for(const b of E.points)for(const S of b)_.setFloat32(M,S,!0),M+=4;_.setUint16(M,0,!0),M+=2}return{buffer:g,triangles:p.length,dimensions:[(s.max.x-s.min.x+1)*t.blockSize,(s.max.y-s.min.y+1)*t.blockSize,(s.max.z-s.min.z+1)*t.blockSize],components:mx(r).componentCount}}function mR(r,t){const i=URL.createObjectURL(new Blob([r],{type:"model/stl"})),s=document.createElement("a");s.href=i,s.download=t,s.click(),setTimeout(()=>URL.revokeObjectURL(i),1e3)}function gR(r,t,i,s,l,c){if(t.kind==="corner"){vR(r,t,i,s,l,c);return}if(t.kind==="valley"){xR(r,t,i,s,l,c);return}_R(r,t,i,s,l,c)}function _R(r,t,i,s,l,c){const{low:f,width:d}=Y2(t.highSide),m=t.cell,g=[[-.5,-.5,-.5],[-.5,-.5,.5],[.5,-.5,.5],[-.5,.5,-.5],[-.5,.5,.5],[.5,.5,.5]].map(([S,v,z])=>[(m.x+.5+S*f[0]+v*d[0]+s)*i,(m.y+.5+S*f[1]+v*d[1]+l)*i,(m.z+.5+z+c)*i]),_=[[0,2,1],[3,4,5],[0,3,5],[0,5,2]],x=(S,v)=>[S[0]-v[0],S[1]-v[1],S[2]-v[2]],M=(S,v)=>[S[1]*v[2]-S[2]*v[1],S[2]*v[0]-S[0]*v[2],S[0]*v[1]-S[1]*v[0]],E=S=>{const v=Math.hypot(...S);return[S[0]/v,S[1]/v,S[2]/v]};for(const[S,v,z]of _){const L=[g[S],g[v],g[z]];r.push({normal:E(M(x(L[1],L[0]),x(L[2],L[0]))),points:L})}const b=t.highSide==="x-"?[-1,0,0]:t.highSide==="x+"?[1,0,0]:t.highSide==="y-"?[0,-1,0]:[0,1,0];ol(r,[g[0],g[1],g[4],g[3]],b),ol(r,[g[1],g[2],g[5],g[4]],[0,0,1])}function vR(r,t,i,s,l,c){const f=t.cell,d=Math.round(hx(t.highSides)/(Math.PI/2)),p=[[-.5,-.5,-.5],[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5]].map(([E,b,S])=>{const[v,z]=_x(E,b,d);return[(f.x+.5+v+s)*i,(f.y+.5+z+l)*i,(f.z+.5+S+c)*i]}),g=[[0,2,1],[0,3,2],[0,4,3],[0,1,4]],_=(E,b)=>[E[0]-b[0],E[1]-b[1],E[2]-b[2]],x=(E,b)=>[E[1]*b[2]-E[2]*b[1],E[2]*b[0]-E[0]*b[2],E[0]*b[1]-E[1]*b[0]],M=E=>{const b=Math.hypot(...E);return[E[0]/b,E[1]/b,E[2]/b]};for(const[E,b,S]of g){const v=[p[E],p[b],p[S]];r.push({normal:M(x(_(v[1],v[0]),_(v[2],v[0]))),points:v})}ol(r,[p[1],p[2],p[3],p[4]],[0,0,1])}function xR(r,t,i,s,l,c){const f=t.cell,d=t.axis==="x"?0:1,p=[[0,-.5,-.5],[0,.5,-.5],[-.5,-.5,.5],[-.5,.5,.5],[.5,-.5,.5],[.5,.5,.5]].map(([E,b,S])=>{const[v,z]=_x(E,b,d);return[(f.x+.5+v+s)*i,(f.y+.5+z+l)*i,(f.z+.5+S+c)*i]}),g=[[0,2,3],[0,3,1],[0,1,5],[0,5,4],[0,4,2],[1,3,5]],_=(E,b)=>[E[0]-b[0],E[1]-b[1],E[2]-b[2]],x=(E,b)=>[E[1]*b[2]-E[2]*b[1],E[2]*b[0]-E[0]*b[2],E[0]*b[1]-E[1]*b[0]],M=E=>{const b=Math.hypot(...E);return[E[0]/b,E[1]/b,E[2]/b]};for(const[E,b,S]of g){const v=[p[E],p[b],p[S]];r.push({normal:M(x(_(v[1],v[0]),_(v[2],v[0]))),points:v})}ol(r,[p[2],p[4],p[5],p[3]],[0,0,1])}function _x(r,t,i){return i===1?[t,-r]:i===-1?[-t,r]:Math.abs(i)===2?[-r,-t]:[r,t]}function ol(r,t,i){const s=[...t].sort((c,f)=>c[0]-f[0]||c[1]-f[1]||c[2]-f[2]),l=[[s[0],s[1],s[3]],[s[0],s[3],s[2]]];for(const c of l){const f=[c[1][0]-c[0][0],c[1][1]-c[0][1],c[1][2]-c[0][2]],d=[c[2][0]-c[0][0],c[2][1]-c[0][1],c[2][2]-c[0][2]],m=[f[1]*d[2]-f[2]*d[1],f[2]*d[0]-f[0]*d[2],f[0]*d[1]-f[1]*d[0]];m[0]*i[0]+m[1]*i[1]+m[2]*i[2]<0&&([c[1],c[2]]=[c[2],c[1]]),r.push({normal:i,points:c})}}function yR(r){const t=new Map,i=l=>l.map(c=>Object.is(c,-0)?"0":String(c)).join(",");for(const[l,c]of r.entries()){const f=c.points.map(i),d=[...f].sort(),m=f.map(x=>d.indexOf(x));let p=0;for(let x=0;x<m.length;x++)for(let M=x+1;M<m.length;M++)m[x]>m[M]&&p++;const g=d.join("|"),_=t.get(g)??{positive:[],negative:[]};(p%2?_.negative:_.positive).push(l),t.set(g,_)}const s=new Set;for(const l of t.values())for(let c=0;c<Math.min(l.positive.length,l.negative.length);c++)s.add(l.positive[c]),s.add(l.negative[c]);return s.size?r.filter((l,c)=>!s.has(c)):r}const SR=Array.from({length:256},(r,t)=>{let i=t;for(let s=0;s<8;s++)i=i&1?3988292384^i>>>1:i>>>1;return i>>>0});function MR(r){let t=4294967295;for(const i of r)t=SR[(t^i)&255]^t>>>8;return(t^4294967295)>>>0}function wi(r,t,i){r.setUint16(t,i,!0)}function vi(r,t,i){r.setUint32(t,i,!0)}function ER(r){const t=new TextEncoder,i=[],s=[];let l=0;for(const _ of r){const x=t.encode(_.name),M=new Uint8Array(_.data),E=MR(M),b=new Uint8Array(30+x.length+M.length),S=new DataView(b.buffer);vi(S,0,67324752),wi(S,4,20),wi(S,6,2048),wi(S,8,0),vi(S,14,E),vi(S,18,M.length),vi(S,22,M.length),wi(S,26,x.length),b.set(x,30),b.set(M,30+x.length),i.push(b);const v=new Uint8Array(46+x.length),z=new DataView(v.buffer);vi(z,0,33639248),wi(z,4,20),wi(z,6,20),wi(z,8,2048),wi(z,10,0),vi(z,16,E),vi(z,20,M.length),vi(z,24,M.length),wi(z,28,x.length),vi(z,42,l),v.set(x,46),s.push(v),l+=b.length}const c=s.reduce((_,x)=>_+x.length,0),f=l+c+22,d=new Uint8Array(f);let m=0;for(const _ of i)d.set(_,m),m+=_.length;const p=m;for(const _ of s)d.set(_,m),m+=_.length;const g=new DataView(d.buffer,m,22);return vi(g,0,101010256),wi(g,8,r.length),wi(g,10,r.length),vi(g,12,c),vi(g,16,p),d.buffer}function bR(r,t){const i=URL.createObjectURL(new Blob([r],{type:"application/zip"})),s=document.createElement("a");s.href=i,s.download=t,s.click(),setTimeout(()=>URL.revokeObjectURL(i),1e3)}const TR=[{name:"Coral",value:"#ff6b6b"},{name:"Sunshine",value:"#ffd166"},{name:"Mint",value:"#67d5b5"},{name:"Sky",value:"#3a86ff"},{name:"Grape",value:"#8b5cf6"},{name:"Pink",value:"#d65db1"},{name:"Orange",value:"#ff8c42"},{name:"Snow",value:"#f4f7fb"},{name:"Slate",value:"#536878"}],Qd="block-builder-current-v2",Mv=[{x:-1,y:0,z:0,color:"#ff6b6b"},{x:0,y:0,z:0,color:"#ff6b6b"},{x:1,y:0,z:0,color:"#ff6b6b"},{x:0,y:0,z:1,color:"#ff6b6b"}];function AR(){try{const r=localStorage.getItem(Qd),t=r?gx(r):Gr("My Awesome Build",Mv),i=t.settings.selectedColor;return{...t,blocks:au(t.blocks,i)}}catch{return Gr("My Awesome Build",Mv)}}function RR(){const r=Qt.useMemo(AR,[]),[t,i]=Qt.useState(r.blocks),[s,l]=Qt.useState(r.name),[c,f]=Qt.useState(r.settings.selectedColor),[d,m]=Qt.useState("add"),[p,g]=Qt.useState(r.settings.gravityMode),[_,x]=Qt.useState([]),[M,E]=Qt.useState([]),[b,S]=Qt.useState(null),[v,z]=Qt.useState(!1),[L,U]=Qt.useState(null),[k,H]=Qt.useState("Your build is safe in this browser"),[B,X]=Qt.useState(!1),[D,C]=Qt.useState(null),I=Qt.useRef(null),ct=Qt.useRef(null),st=Qt.useMemo(()=>Gr(s,t,c,p),[s,t,c,p]),_t=Qt.useMemo(()=>mx(t),[t]),mt=Qt.useMemo(()=>ux(t,c),[t,c]),P=mt[0],Y=Qt.useCallback(ot=>{ot===t||nl(Gr("",ot))===nl(Gr("",t))||(x(Rt=>[...Rt,t].slice(-100)),E([]),i(ot),z(!0))},[t]),Z=Qt.useCallback(ot=>{const Rt=p&&!V2(t,ot),$t=Rt?k2(t,ot):I2(t,ot);if($t===t){H("That spot already has a block");return}Y($t),H(Rt?"Block added with a 45° support wedge!":"Block added!")},[t,Y,p]),Mt=Qt.useCallback(ot=>{Y(F2(t,ot)),S(null),H("Block removed")},[t,Y]),At=ot=>{if(ot===c)return;const Rt=$t=>au($t,ot);f(ot),i(Rt),x($t=>$t.map(Rt)),E($t=>$t.map(Rt)),z(!0),m("add"),H("The whole model changed color!")},N=Qt.useCallback(()=>{const ot=_.at(-1);ot&&(E(Rt=>[t,...Rt]),i(ot),x(Rt=>Rt.slice(0,-1)),S(null),z(!0),H("Undid the last change"))},[_,t]),$=Qt.useCallback(()=>{const ot=M[0];ot&&(x(Rt=>[...Rt,t]),i(ot),E(Rt=>Rt.slice(1)),S(null),z(!0),H("Redid the change"))},[M,t]);Qt.useEffect(()=>{const ot=setTimeout(()=>localStorage.setItem(Qd,nl(st)),180);return()=>clearTimeout(ot)},[st]),Qt.useEffect(()=>{const ot=Rt=>{v&&(Rt.preventDefault(),Rt.returnValue="")};return window.addEventListener("beforeunload",ot),()=>window.removeEventListener("beforeunload",ot)},[v]),Qt.useEffect(()=>{const ot=Rt=>{var nn;const $t=Rt.target;if(["INPUT","TEXTAREA","SELECT"].includes($t.tagName))return;const Jt=Rt.ctrlKey||Rt.metaKey;if(Jt&&Rt.key.toLowerCase()==="z"){Rt.preventDefault(),Rt.shiftKey?$():N();return}if(Jt&&Rt.key.toLowerCase()==="y"){Rt.preventDefault(),$();return}if((Rt.key==="Delete"||Rt.key==="Backspace")&&b){Rt.preventDefault(),Mt(b);return}if(Rt.key==="Escape"){U(null),S(null);return}const G={ArrowLeft:[-1,0],a:[-1,0],ArrowRight:[1,0],d:[1,0],ArrowUp:[0,1],w:[0,1],ArrowDown:[0,-1],s:[0,-1]}[Rt.key];G&&(Rt.preventDefault(),(nn=I.current)==null||nn.nudge(...G))};return window.addEventListener("keydown",ot),()=>window.removeEventListener("keydown",ot)},[$,N,b,Mt]);const bt=()=>{localStorage.setItem(Qd,nl(st)),lR(nl(st),`${su(s)}.blocks.json`),z(!1),H("Saved here and downloaded a project file!")},q=async ot=>{var $t;const Rt=($t=ot.target.files)==null?void 0:$t[0];if(ot.target.value="",!!Rt&&!(v&&!confirm("Open this file and replace your unsaved changes?")))try{const Jt=gx(await Rt.text()),Oe=Jt.settings.selectedColor;l(Jt.name),i(au(Jt.blocks,Oe)),f(Oe),g(Jt.settings.gravityMode),x([]),E([]),z(!1),S(null),H(`Opened “${Jt.name}” in one model color`),setTimeout(()=>{var G;return(G=I.current)==null?void 0:G.frame()},50)}catch(Jt){alert(Jt instanceof Error?Jt.message:"We could not open that project.")}},ut=ot=>{if(v&&!confirm("Load this sample and replace your unsaved changes?"))return;const Rt=Sv[ot];l(Rt.name),i(au(Rt.blocks,c)),x([]),E([]),S(null),z(!0),H(`${Rt.emoji} ${Rt.name} loaded in your model color!`),setTimeout(()=>{var $t;return($t=I.current)==null?void 0:$t.frame()},50)},Tt=()=>{t.length&&confirm("Clear every block and start fresh?")&&(Y([]),S(null),H("All clear — ready for something new!"))},gt=()=>{t.length&&(Y(P.blocks),S(null),U(null),H(P.missing.length?`Best side chosen with ${P.missing.length} optimized ${P.missing.length===1?"wedge":"wedges"}!`:`Turned onto its ${P.label.toLowerCase()} — no supports needed!`),setTimeout(()=>{var ot;return(ot=I.current)==null?void 0:ot.frame()},50))},It=()=>{g(ot=>!ot),z(!0),H(p?"Gravity Mode is off":"Gravity Mode is on — no sky blocks!")};return O.jsxs("div",{className:"app-shell",children:[O.jsxs("header",{className:"topbar",children:[O.jsxs("div",{className:"brand",children:[O.jsx("div",{className:"brand-cube","aria-hidden":"true",children:O.jsx(PS,{})}),O.jsxs("div",{children:[O.jsx("h1",{children:"Block Builder"}),O.jsx("span",{children:"Imagine it. Build it. Print it!"})]})]}),O.jsxs("label",{className:"name-field",children:[O.jsx("span",{children:"Project name"}),O.jsx("input",{value:s,maxLength:60,onChange:ot=>{l(ot.target.value),z(!0)},"aria-label":"Project name"})]}),O.jsxs("div",{className:"top-actions",children:[O.jsx(da,{icon:O.jsx(jS,{}),label:"Save",onClick:bt}),O.jsx(da,{icon:O.jsx(GS,{}),label:"Open",onClick:()=>{var ot;return(ot=ct.current)==null?void 0:ot.click()}}),O.jsx(da,{primary:!0,icon:O.jsx(Tv,{}),label:"Export STL",onClick:()=>U("export")}),O.jsx(da,{icon:O.jsx(o_,{}),label:"Help",onClick:()=>U("help")}),O.jsx("input",{ref:ct,className:"sr-only",type:"file",accept:".json,.blocks.json,application/json",onChange:q})]})]}),O.jsxs("main",{className:"workspace",children:[O.jsxs("aside",{className:"left-panel","aria-label":"Building tools",children:[O.jsx("h2",{children:"Build tools"}),O.jsxs("div",{className:"tool-stack",children:[O.jsx(Ev,{active:d==="add",icon:O.jsx(kS,{}),label:"Add",hint:"Left click",onClick:()=>m("add")}),O.jsx(Ev,{active:d==="remove",icon:O.jsx(FS,{}),label:"Remove",hint:"Right click",onClick:()=>m("remove")})]}),O.jsx("div",{className:"divider"}),O.jsx("h2",{children:"Model color"}),O.jsx("p",{className:"palette-note",children:"One color for the whole print"}),O.jsx("div",{className:"swatches",children:TR.map(ot=>O.jsx("button",{className:`swatch ${c===ot.value?"selected":""}`,style:{"--swatch":ot.value},"aria-label":`${ot.name}${c===ot.value?", selected model color":""}`,title:`${ot.name} model`,onClick:()=>At(ot.value),children:O.jsx("span",{})},ot.value))}),O.jsxs("div",{className:`gravity-card ${p?"active":""}`,children:[O.jsxs("div",{className:"gravity-title",children:[O.jsx($d,{}),O.jsxs("span",{children:[O.jsx("b",{children:"Gravity Mode"}),O.jsx("small",{children:"Uses optimized 45° wedges"})]}),O.jsx("button",{role:"switch","aria-checked":p,"aria-label":"Toggle Gravity Mode",className:"mini-switch",onClick:It,children:O.jsx("i",{})})]}),O.jsx("div",{className:`gravity-status ${P.missing.length===0?"safe":"needs-work"}`,children:P.missing.length===0?"✓ A support-free side was found":`${P.missing.length} support ${P.missing.length===1?"wedge":"wedges"} on the best side`}),O.jsxs("button",{className:"gravity-setup",onClick:()=>U("gravity"),children:[O.jsx(Rv,{})," Find best print side"]})]}),O.jsx("div",{className:"divider"}),O.jsx("label",{className:"sample-label",htmlFor:"samples",children:"Try a sample"}),O.jsxs("select",{id:"samples",defaultValue:"",onChange:ot=>{ot.target.value&&ut(Number(ot.target.value)),ot.target.value=""},children:[O.jsx("option",{value:"",disabled:!0,children:"Choose a creation…"}),Sv.map((ot,Rt)=>O.jsxs("option",{value:Rt,children:[ot.emoji," ",ot.name]},ot.name))]})]}),O.jsxs("section",{className:"stage-wrap",children:[O.jsxs("div",{className:"edit-bar",children:[O.jsx(da,{icon:O.jsx(YS,{}),label:"Undo",disabled:!_.length,onClick:N}),O.jsx(da,{icon:O.jsx(XS,{}),label:"Redo",disabled:!M.length,onClick:$}),O.jsx("span",{className:"edit-separator"}),O.jsx(da,{icon:O.jsx(VS,{}),label:"Home View",onClick:()=>{var ot;return(ot=I.current)==null?void 0:ot.setView("home")}}),O.jsx(da,{icon:O.jsx(HS,{}),label:"Frame Model",onClick:()=>{var ot;return(ot=I.current)==null?void 0:ot.frame()}}),O.jsx(da,{danger:!0,icon:O.jsx(WS,{}),label:"Clear",disabled:!t.length,onClick:Tt}),D&&O.jsxs("span",{className:"controller-badge",title:D,children:[O.jsx(Qc,{})," Controller ready"]})]}),O.jsxs("div",{className:"canvas-card",children:[O.jsx($2,{ref:I,blocks:t,tool:d,color:c,gravityMode:p,selected:b,interactionLocked:L!==null,onAdd:Z,onRemove:Mt,onSelect:S,onUndo:N,onToolChange:ot=>{m(ot),H(ot==="add"?"Add tool selected":"Remove tool selected")},onControllerHelp:()=>U(ot=>ot==="help"?null:"help"),onControllerBack:()=>{U(null),S(null)},onControllerChange:ot=>{C(ot),ot&&H("Xbox controller ready — LT places, RT breaks")}}),O.jsxs("div",{className:"block-counter",children:[O.jsx("strong",{children:t.length.toLocaleString()}),O.jsx("span",{children:t.length===1?"block":"blocks"})]})]}),O.jsxs("div",{className:"status-row",role:"status","aria-live":"polite",children:[O.jsx("span",{className:"autosave-dot"})," ",k,O.jsx("span",{className:"status-spacer"}),D?O.jsxs(O.Fragment,{children:[O.jsx(Qc,{})," Minecraft-style controls active"]}):O.jsxs(O.Fragment,{children:[O.jsx("kbd",{children:"Ctrl"})," + ",O.jsx("kbd",{children:"Z"})," undo"]})]})]}),O.jsxs("aside",{className:"right-panel",children:[O.jsx("h2",{children:"Look around"}),O.jsx("p",{className:"panel-copy",children:"Jump to a view, then drag to explore."}),O.jsx("div",{className:"view-grid",children:[["Iso","iso"],["Top","top"],["Front","front"],["Back","back"],["Left","left"],["Right","right"]].map(([ot,Rt])=>O.jsxs("button",{onClick:()=>{var $t;return($t=I.current)==null?void 0:$t.setView(Rt)},children:[O.jsx("span",{className:`view-icon view-${Rt}`,children:Rt==="iso"?"◆":Rt==="top"?"▦":"⬆"}),ot]},Rt))}),O.jsxs("div",{className:"mouse-card",children:[O.jsx("div",{className:"mouse-icon","aria-hidden":"true",children:"🖱️"}),O.jsxs("div",{children:[O.jsx("b",{children:"Quick moves"}),O.jsx("span",{children:"Drag to orbit"}),O.jsx("span",{children:"Shift + drag to pan"}),O.jsx("span",{children:"Scroll to zoom"})]})]}),O.jsxs("div",{className:`controller-card ${D?"connected":""}`,children:[O.jsx(Qc,{}),O.jsxs("div",{children:[O.jsx("b",{children:D?"Controller ready":"Xbox controller"}),O.jsx("span",{children:D?"LT place · RT break":"Connect, then press any button"})]})]}),O.jsxs("button",{className:"help-card",onClick:()=>U("help"),children:[O.jsx(o_,{}),O.jsxs("span",{children:[O.jsx("b",{children:"Need a hand?"}),O.jsx("small",{children:"See all controls"})]}),O.jsx("span",{children:"→"})]})]})]}),L==="help"&&O.jsx(wR,{onClose:()=>U(null)})," ",L==="export"&&O.jsx(DR,{name:s,blocks:t,color:c,gravityMode:p,analysis:_t,initialSplit:B,onClose:()=>{U(null),X(!1)}})," ",L==="gravity"&&O.jsx(CR,{scores:mt,best:P,onClose:()=>U(null),onApply:gt,onSplit:()=>{X(!0),U("export")}})]})}function da({icon:r,label:t,onClick:i,disabled:s,primary:l,danger:c}){return O.jsxs("button",{className:`action-btn ${l?"primary":""} ${c?"danger":""}`,onClick:i,disabled:s,title:t,"aria-label":t,children:[r,O.jsx("span",{children:t})]})}function Ev({icon:r,label:t,hint:i,active:s,onClick:l}){return O.jsxs("button",{className:`tool-btn ${s?"active":""}`,"aria-pressed":s,onClick:l,children:[r,O.jsxs("span",{children:[O.jsx("b",{children:t}),O.jsx("small",{children:i})]}),s&&O.jsx("i",{children:"✓"})]})}function gp({title:r,onClose:t,children:i,wide:s=!1}){return O.jsx("div",{className:"modal-backdrop",role:"presentation",onMouseDown:l=>{l.target===l.currentTarget&&t()},children:O.jsxs("section",{className:`modal ${s?"wide":""}`,role:"dialog","aria-modal":"true","aria-label":r,children:[O.jsxs("header",{children:[O.jsx("h2",{children:r}),O.jsx("button",{className:"close-btn","aria-label":"Close",onClick:t,children:O.jsx(qS,{})})]}),i]})})}function CR({scores:r,best:t,onClose:i,onApply:s,onSplit:l}){return O.jsx(gp,{title:"Find the best print side",onClose:i,wide:!0,children:O.jsxs("div",{className:"gravity-modal",children:[O.jsxs("div",{className:"gravity-hero",children:[O.jsx(Rv,{}),O.jsxs("div",{children:[O.jsx("b",{children:"We checked all 6 sides!"}),O.jsxs("p",{children:[O.jsx("strong",{children:t.label})," is the best side for the print bed."]})]}),O.jsx("em",{children:t.missing.length===0?"Support-free!":`${t.missing.length} gaps`})]}),O.jsx("div",{className:"orientation-grid",children:r.map((c,f)=>O.jsxs("div",{className:`orientation-score ${f===0?"best":""}`,children:[O.jsx("span",{children:c.id==="bottom"?"↓":c.id==="top"?"↑":c.id==="left"?"←":c.id==="right"?"→":c.id==="front"?"↙":"↗"}),O.jsxs("div",{children:[O.jsxs("b",{children:[c.label,f===0&&O.jsx("em",{children:"Best"})]}),O.jsx("small",{children:c.hint})]}),O.jsx("strong",{children:c.missing.length===0?"✓":c.missing.length})]},c.id))}),t.missing.length>0&&O.jsx("div",{className:"gravity-explain",children:"Gravity Mode fills gaps with broad 45° wedges. Where two directions meet at a corner, one lighter dual-slope support keeps full contact beneath the block without creating a flat overhang. You can also preserve the exact shape by exporting flat pieces."}),O.jsxs("div",{className:"gravity-options",children:[O.jsxs("button",{className:"recommended",onClick:s,children:[O.jsx($d,{}),O.jsx("b",{children:"Use best side"}),O.jsx("small",{children:t.missing.length?`Rotate and add ${t.missing.length} optimized ${t.missing.length===1?"support":"supports"}`:"Rotate with no supports needed"})]}),O.jsxs("button",{onClick:l,children:[O.jsx(Av,{}),O.jsx("b",{children:"Split into flat pieces"}),O.jsx("small",{children:"Download a ZIP for gluing"})]})]})]})})}function wR({onClose:r}){const t=[["Left click","Add or remove with your chosen tool"],["Right click","Quickly remove a block"],["Drag / Shift + drag","Orbit / slide the view"],["Wheel / WASD","Zoom / nudge the view"],["Ctrl/Cmd + Z / Y","Undo / redo"],["Delete / Escape","Remove / cancel"]],i=[["Left stick","Move across the build"],["Right stick","Look around"],["LT / RT","Place / break block"],["A / B","Move up / down a layer"],["LB / RB","Previous / next build tool"],["D-pad","Nudge one grid space"],["X / Y","Undo / frame model"],["View / Menu","Home view / help"]];return O.jsxs(gp,{title:"Help & controls",onClose:r,wide:!0,children:[O.jsxs("div",{className:"help-intro",children:[O.jsx("span",{children:"👋"}),O.jsxs("div",{children:[O.jsx("b",{children:"You’ve got this!"}),O.jsx("p",{children:"Pick a model color, then add blocks in the playground. Every block uses the same color and snaps neatly into place. Keep Gravity Mode on for support-free building."})]})]}),O.jsx("h3",{className:"controls-heading",children:"Mouse & keyboard"}),O.jsx("div",{className:"controls-list",children:t.map(([s,l])=>O.jsxs("div",{children:[O.jsx("kbd",{children:s}),O.jsx("span",{children:l})]},s))}),O.jsxs("h3",{className:"controls-heading controller-heading",children:[O.jsx(Qc,{})," Xbox controller · Minecraft style"]}),O.jsx("div",{className:"controls-list controller-controls",children:i.map(([s,l])=>O.jsxs("div",{children:[O.jsx("kbd",{children:s}),O.jsx("span",{children:l})]},s))}),O.jsxs("div",{className:"print-note",children:[O.jsx(BS,{}),O.jsxs("p",{children:[O.jsx("b",{children:"One color for the whole print"}),O.jsx("br",{}),"The palette previews the whole model in one color. STL does not carry that color, so choose matching filament in Bambu Studio."]})]}),O.jsx("button",{className:"big-primary",onClick:r,children:"Let’s build!"})]})}function DR({name:r,blocks:t,color:i,gravityMode:s,analysis:l,initialSplit:c,onClose:f}){const d=Qt.useMemo(()=>ux(t,i),[t,i]),m=d[0],[p,g]=Qt.useState(`${su(r)}.stl`),[_,x]=Qt.useState(5),[M,E]=Qt.useState(!0),[b,S]=Qt.useState(!0),[v,z]=Qt.useState(!0),[L,U]=Qt.useState(c),[k,H]=Qt.useState(null),B=v?m:d.find(I=>I.id==="bottom"),X=v?m.blocks:lx(t,"bottom"),D=Qt.useMemo(()=>X2(X),[X]),C=()=>{try{if(L){const I=D.map((_t,mt)=>({name:`${su(r)}-part-${String(mt+1).padStart(2,"0")}.stl`,data:ld(_t,{blockSize:_,centerXY:M,placeOnBed:!0}).buffer})),ct=`${su(p.replace(/\\.(stl|zip)$/i,""))||"block-builder"}-flat-pieces.zip`;bR(ER(I),ct);const st=ld(X,{blockSize:_,centerXY:M,placeOnBed:b});H({name:ct,dimensions:st.dimensions,blocks:t.length,components:D.length,split:!0})}else{const I=ld(X,{blockSize:_,centerXY:M,placeOnBed:b,angledSupports:s}),ct=p.toLowerCase().endsWith(".stl")?p:`${p}.stl`;mR(I.buffer,ct),H({name:ct,dimensions:I.dimensions,blocks:t.length,components:I.components,split:!1})}}catch(I){alert(I instanceof Error?I.message:"Export did not work.")}};return O.jsx(gp,{title:"Export for 3D printing",onClose:f,wide:!0,children:k?O.jsxs("div",{className:"export-success",children:[O.jsx("div",{className:"success-burst",children:"✓"}),O.jsx("h3",{children:k.split?"Your printable pieces are ready!":"Your STL is downloaded!"}),O.jsxs("p",{className:"download-name",children:[O.jsx(IS,{})," ",k.name]}),O.jsxs("div",{className:"result-grid",children:[O.jsxs("div",{children:[O.jsx("b",{children:k.dimensions.map(I=>I.toFixed(1)).join(" × ")}),O.jsx("span",{children:"overall size in millimetres"})]}),O.jsxs("div",{children:[O.jsx("b",{children:k.blocks}),O.jsx("span",{children:"blocks"})]}),O.jsxs("div",{children:[O.jsx("b",{children:k.components}),O.jsx("span",{children:k.split?"flat pieces":"separate pieces"})]})]}),O.jsx("p",{children:k.split?"Unzip the files, print each one flat, then glue the pieces together.":"Open the file in Bambu Studio and choose your filament color."}),O.jsx("button",{className:"big-primary",onClick:f,children:"Done"})]}):O.jsxs("div",{className:"export-form",children:[O.jsxs("div",{className:"export-fields",children:[O.jsxs("label",{children:["File name",O.jsx("input",{value:p,onChange:I=>g(I.target.value)})]}),O.jsxs("label",{children:["Block size ",O.jsx("span",{children:"(millimetres)"}),O.jsxs("div",{className:"number-input",children:[O.jsx("input",{type:"number",min:"1",max:"50",value:_,onChange:I=>x(Math.min(50,Math.max(1,Number(I.target.value))))}),O.jsx("b",{children:"mm"})]})]}),O.jsxs("label",{className:"check-row",children:[O.jsx("input",{type:"checkbox",checked:v,onChange:I=>z(I.target.checked)}),O.jsxs("span",{children:[O.jsx("b",{children:"Use the best print side"}),O.jsxs("small",{children:[m.label,": ",m.missing.length===0?"support-free":`${m.missing.length} support gaps`]})]})]}),O.jsxs("label",{className:"check-row",children:[O.jsx("input",{type:"checkbox",checked:L,onChange:I=>U(I.target.checked)}),O.jsxs("span",{children:[O.jsx("b",{children:"Split into flat printable pieces"}),O.jsxs("small",{children:["Downloads ",D.length," support-free STL files in one ZIP"]})]})]}),O.jsxs("label",{className:"check-row",children:[O.jsx("input",{type:"checkbox",checked:M,onChange:I=>E(I.target.checked)}),O.jsxs("span",{children:[O.jsx("b",{children:"Center on the print bed"}),O.jsx("small",{children:"Places the model around the middle"})]})]}),O.jsxs("label",{className:"check-row",children:[O.jsx("input",{type:"checkbox",checked:b,disabled:L,onChange:I=>S(I.target.checked)}),O.jsxs("span",{children:[O.jsx("b",{children:"Place bottom on print bed"}),O.jsx("small",{children:L?"Always on for flat pieces":"Recommended for an easier print"})]})]}),O.jsxs("div",{className:"optimized",children:[O.jsx("span",{children:"★"}),O.jsxs("p",{children:[O.jsx("b",{children:"Optimized printable mesh"}),O.jsx("small",{children:"Hidden faces are removed automatically."})]}),O.jsx("em",{children:"Recommended"})]})]}),O.jsxs("div",{className:"analysis-card",children:[O.jsx("h3",{children:"Gravity & print check"}),O.jsxs("div",{className:"analysis-stats",children:[O.jsxs("span",{children:[O.jsx("b",{children:l.blockCount})," blocks"]}),O.jsxs("span",{children:[O.jsx("b",{children:L?D.length:l.componentCount})," ",L?"files":"groups"]})]}),O.jsxs("div",{className:`gravity-export-status ${B.missing.length===0||L||s?"safe":"warn"}`,children:[O.jsx($d,{}),O.jsxs("p",{children:[O.jsx("b",{children:L?"Every piece prints flat":B.missing.length===0?`Support-free on its ${B.label.toLowerCase()}`:s?`${B.missing.length} optimized 45° ${B.missing.length===1?"support":"supports"} included`:`${B.missing.length} support gaps remain`}),O.jsx("small",{children:L?"No generated supports needed; glue after printing.":B.missing.length===0?"No generated supports should be needed.":s?"Meeting wedges get a seamless dual-slope connector with full top contact.":"Turn on Gravity Mode, splitting, or return to Gravity Setup."})]})]}),!L&&l.warnings.length?O.jsxs("div",{className:"warnings",children:[l.warnings.map(I=>O.jsxs("p",{children:["⚠️ ",I]},I)),O.jsx("small",{children:"You can still export. Fix anything you want, or print it as it is."})]}):!L&&O.jsxs("div",{className:"all-good",children:[O.jsx("span",{children:"✓"}),O.jsxs("p",{children:[O.jsx("b",{children:"Looks print-ready!"}),O.jsx("small",{children:"All blocks are face-connected."})]})]}),O.jsx("p",{className:"color-note",children:"🎨 One model, one filament color. Choose matching filament in Bambu Studio."})]}),O.jsxs("div",{className:"modal-actions",children:[O.jsx("button",{className:"secondary",onClick:f,children:"Back to build"}),O.jsxs("button",{className:"big-primary",disabled:!t.length,onClick:C,children:[L?O.jsx(Av,{}):O.jsx(Tv,{})," ",L?`Export ZIP (${D.length} pieces)`:"Export STL"]})]})]})})}function su(r){return(r.trim()||"block-builder").replace(/[^a-z0-9-_]+/gi,"-").replace(/^-+|-+$/g,"").toLowerCase()}LS.createRoot(document.getElementById("root")).render(O.jsx(Qt.StrictMode,{children:O.jsx(RR,{})}));
