(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var wh={exports:{}},Qo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r_;function zS(){if(r_)return Qo;r_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:c}}return Qo.Fragment=t,Qo.jsx=i,Qo.jsxs=i,Qo}var o_;function PS(){return o_||(o_=1,wh.exports=zS()),wh.exports}var L=PS(),Dh={exports:{}},oe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l_;function BS(){if(l_)return oe;l_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),x=Symbol.iterator;function y(z){return z===null||typeof z!="object"?null:(z=x&&z[x]||z["@@iterator"],typeof z=="function"?z:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,M={};function v(z,$,xt){this.props=z,this.context=$,this.refs=M,this.updater=xt||E}v.prototype.isReactComponent={},v.prototype.setState=function(z,$){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,$,"setState")},v.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function O(){}O.prototype=v.prototype;function N(z,$,xt){this.props=z,this.context=$,this.refs=M,this.updater=xt||E}var U=N.prototype=new O;U.constructor=N,b(U,v.prototype),U.isPureReactComponent=!0;var X=Array.isArray;function G(){}var P={H:null,A:null,T:null,S:null},k=Object.prototype.hasOwnProperty;function D(z,$,xt){var q=xt.ref;return{$$typeof:r,type:z,key:$,ref:q!==void 0?q:null,props:xt}}function C(z,$){return D(z.type,$,z.props)}function B(z){return typeof z=="object"&&z!==null&&z.$$typeof===r}function ot(z){var $={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(xt){return $[xt]})}var it=/\/+/g;function gt(z,$){return typeof z=="object"&&z!==null&&z.key!=null?ot(""+z.key):$.toString(36)}function mt(z){switch(z.status){case"fulfilled":return z.value;case"rejected":throw z.reason;default:switch(typeof z.status=="string"?z.then(G,G):(z.status="pending",z.then(function($){z.status==="pending"&&(z.status="fulfilled",z.value=$)},function($){z.status==="pending"&&(z.status="rejected",z.reason=$)})),z.status){case"fulfilled":return z.value;case"rejected":throw z.reason}}throw z}function I(z,$,xt,q,ct){var Tt=typeof z;(Tt==="undefined"||Tt==="boolean")&&(z=null);var bt=!1;if(z===null)bt=!0;else switch(Tt){case"bigint":case"string":case"number":bt=!0;break;case"object":switch(z.$$typeof){case r:case t:bt=!0;break;case _:return bt=z._init,I(bt(z._payload),$,xt,q,ct)}}if(bt)return ct=ct(z),bt=q===""?"."+gt(z,0):q,X(ct)?(xt="",bt!=null&&(xt=bt.replace(it,"$&/")+"/"),I(ct,$,xt,"",function(ee){return ee})):ct!=null&&(B(ct)&&(ct=C(ct,xt+(ct.key==null||z&&z.key===ct.key?"":(""+ct.key).replace(it,"$&/")+"/")+bt)),$.push(ct)),1;bt=0;var Ut=q===""?".":q+":";if(X(z))for(var Ft=0;Ft<z.length;Ft++)q=z[Ft],Tt=Ut+gt(q,Ft),bt+=I(q,$,xt,Tt,ct);else if(Ft=y(z),typeof Ft=="function")for(z=Ft.call(z),Ft=0;!(q=z.next()).done;)q=q.value,Tt=Ut+gt(q,Ft++),bt+=I(q,$,xt,Tt,ct);else if(Tt==="object"){if(typeof z.then=="function")return I(mt(z),$,xt,q,ct);throw $=String(z),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.")}return bt}function Q(z,$,xt){if(z==null)return z;var q=[],ct=0;return I(z,q,"","",function(Tt){return $.call(xt,Tt,ct++)}),q}function j(z){if(z._status===-1){var $=z._result;$=$(),$.then(function(xt){(z._status===0||z._status===-1)&&(z._status=1,z._result=xt)},function(xt){(z._status===0||z._status===-1)&&(z._status=2,z._result=xt)}),z._status===-1&&(z._status=0,z._result=$)}if(z._status===1)return z._result.default;throw z._result}var Mt=typeof reportError=="function"?reportError:function(z){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var $=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof z=="object"&&z!==null&&typeof z.message=="string"?String(z.message):String(z),error:z});if(!window.dispatchEvent($))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",z);return}console.error(z)},At={map:Q,forEach:function(z,$,xt){Q(z,function(){$.apply(this,arguments)},xt)},count:function(z){var $=0;return Q(z,function(){$++}),$},toArray:function(z){return Q(z,function($){return $})||[]},only:function(z){if(!B(z))throw Error("React.Children.only expected to receive a single React element child.");return z}};return oe.Activity=g,oe.Children=At,oe.Component=v,oe.Fragment=i,oe.Profiler=l,oe.PureComponent=N,oe.StrictMode=s,oe.Suspense=p,oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,oe.__COMPILER_RUNTIME={__proto__:null,c:function(z){return P.H.useMemoCache(z)}},oe.cache=function(z){return function(){return z.apply(null,arguments)}},oe.cacheSignal=function(){return null},oe.cloneElement=function(z,$,xt){if(z==null)throw Error("The argument must be a React element, but you passed "+z+".");var q=b({},z.props),ct=z.key;if($!=null)for(Tt in $.key!==void 0&&(ct=""+$.key),$)!k.call($,Tt)||Tt==="key"||Tt==="__self"||Tt==="__source"||Tt==="ref"&&$.ref===void 0||(q[Tt]=$[Tt]);var Tt=arguments.length-2;if(Tt===1)q.children=xt;else if(1<Tt){for(var bt=Array(Tt),Ut=0;Ut<Tt;Ut++)bt[Ut]=arguments[Ut+2];q.children=bt}return D(z.type,ct,q)},oe.createContext=function(z){return z={$$typeof:f,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null},z.Provider=z,z.Consumer={$$typeof:c,_context:z},z},oe.createElement=function(z,$,xt){var q,ct={},Tt=null;if($!=null)for(q in $.key!==void 0&&(Tt=""+$.key),$)k.call($,q)&&q!=="key"&&q!=="__self"&&q!=="__source"&&(ct[q]=$[q]);var bt=arguments.length-2;if(bt===1)ct.children=xt;else if(1<bt){for(var Ut=Array(bt),Ft=0;Ft<bt;Ft++)Ut[Ft]=arguments[Ft+2];ct.children=Ut}if(z&&z.defaultProps)for(q in bt=z.defaultProps,bt)ct[q]===void 0&&(ct[q]=bt[q]);return D(z,Tt,ct)},oe.createRef=function(){return{current:null}},oe.forwardRef=function(z){return{$$typeof:d,render:z}},oe.isValidElement=B,oe.lazy=function(z){return{$$typeof:_,_payload:{_status:-1,_result:z},_init:j}},oe.memo=function(z,$){return{$$typeof:m,type:z,compare:$===void 0?null:$}},oe.startTransition=function(z){var $=P.T,xt={};P.T=xt;try{var q=z(),ct=P.S;ct!==null&&ct(xt,q),typeof q=="object"&&q!==null&&typeof q.then=="function"&&q.then(G,Mt)}catch(Tt){Mt(Tt)}finally{$!==null&&xt.types!==null&&($.types=xt.types),P.T=$}},oe.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},oe.use=function(z){return P.H.use(z)},oe.useActionState=function(z,$,xt){return P.H.useActionState(z,$,xt)},oe.useCallback=function(z,$){return P.H.useCallback(z,$)},oe.useContext=function(z){return P.H.useContext(z)},oe.useDebugValue=function(){},oe.useDeferredValue=function(z,$){return P.H.useDeferredValue(z,$)},oe.useEffect=function(z,$){return P.H.useEffect(z,$)},oe.useEffectEvent=function(z){return P.H.useEffectEvent(z)},oe.useId=function(){return P.H.useId()},oe.useImperativeHandle=function(z,$,xt){return P.H.useImperativeHandle(z,$,xt)},oe.useInsertionEffect=function(z,$){return P.H.useInsertionEffect(z,$)},oe.useLayoutEffect=function(z,$){return P.H.useLayoutEffect(z,$)},oe.useMemo=function(z,$){return P.H.useMemo(z,$)},oe.useOptimistic=function(z,$){return P.H.useOptimistic(z,$)},oe.useReducer=function(z,$,xt){return P.H.useReducer(z,$,xt)},oe.useRef=function(z){return P.H.useRef(z)},oe.useState=function(z){return P.H.useState(z)},oe.useSyncExternalStore=function(z,$,xt){return P.H.useSyncExternalStore(z,$,xt)},oe.useTransition=function(){return P.H.useTransition()},oe.version="19.2.8",oe}var c_;function ip(){return c_||(c_=1,Dh.exports=BS()),Dh.exports}var Kt=ip(),Uh={exports:{}},Jo={},Lh={exports:{}},Nh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u_;function IS(){return u_||(u_=1,(function(r){function t(I,Q){var j=I.length;I.push(Q);t:for(;0<j;){var Mt=j-1>>>1,At=I[Mt];if(0<l(At,Q))I[Mt]=Q,I[j]=At,j=Mt;else break t}}function i(I){return I.length===0?null:I[0]}function s(I){if(I.length===0)return null;var Q=I[0],j=I.pop();if(j!==Q){I[0]=j;t:for(var Mt=0,At=I.length,z=At>>>1;Mt<z;){var $=2*(Mt+1)-1,xt=I[$],q=$+1,ct=I[q];if(0>l(xt,j))q<At&&0>l(ct,xt)?(I[Mt]=ct,I[q]=j,Mt=q):(I[Mt]=xt,I[$]=j,Mt=$);else if(q<At&&0>l(ct,j))I[Mt]=ct,I[q]=j,Mt=q;else break t}}return Q}function l(I,Q){var j=I.sortIndex-Q.sortIndex;return j!==0?j:I.id-Q.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,d=f.now();r.unstable_now=function(){return f.now()-d}}var p=[],m=[],_=1,g=null,x=3,y=!1,E=!1,b=!1,M=!1,v=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function U(I){for(var Q=i(m);Q!==null;){if(Q.callback===null)s(m);else if(Q.startTime<=I)s(m),Q.sortIndex=Q.expirationTime,t(p,Q);else break;Q=i(m)}}function X(I){if(b=!1,U(I),!E)if(i(p)!==null)E=!0,G||(G=!0,ot());else{var Q=i(m);Q!==null&&mt(X,Q.startTime-I)}}var G=!1,P=-1,k=5,D=-1;function C(){return M?!0:!(r.unstable_now()-D<k)}function B(){if(M=!1,G){var I=r.unstable_now();D=I;var Q=!0;try{t:{E=!1,b&&(b=!1,O(P),P=-1),y=!0;var j=x;try{e:{for(U(I),g=i(p);g!==null&&!(g.expirationTime>I&&C());){var Mt=g.callback;if(typeof Mt=="function"){g.callback=null,x=g.priorityLevel;var At=Mt(g.expirationTime<=I);if(I=r.unstable_now(),typeof At=="function"){g.callback=At,U(I),Q=!0;break e}g===i(p)&&s(p),U(I)}else s(p);g=i(p)}if(g!==null)Q=!0;else{var z=i(m);z!==null&&mt(X,z.startTime-I),Q=!1}}break t}finally{g=null,x=j,y=!1}Q=void 0}}finally{Q?ot():G=!1}}}var ot;if(typeof N=="function")ot=function(){N(B)};else if(typeof MessageChannel<"u"){var it=new MessageChannel,gt=it.port2;it.port1.onmessage=B,ot=function(){gt.postMessage(null)}}else ot=function(){v(B,0)};function mt(I,Q){P=v(function(){I(r.unstable_now())},Q)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(I){I.callback=null},r.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<I?Math.floor(1e3/I):5},r.unstable_getCurrentPriorityLevel=function(){return x},r.unstable_next=function(I){switch(x){case 1:case 2:case 3:var Q=3;break;default:Q=x}var j=x;x=Q;try{return I()}finally{x=j}},r.unstable_requestPaint=function(){M=!0},r.unstable_runWithPriority=function(I,Q){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var j=x;x=I;try{return Q()}finally{x=j}},r.unstable_scheduleCallback=function(I,Q,j){var Mt=r.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?Mt+j:Mt):j=Mt,I){case 1:var At=-1;break;case 2:At=250;break;case 5:At=1073741823;break;case 4:At=1e4;break;default:At=5e3}return At=j+At,I={id:_++,callback:Q,priorityLevel:I,startTime:j,expirationTime:At,sortIndex:-1},j>Mt?(I.sortIndex=j,t(m,I),i(p)===null&&I===i(m)&&(b?(O(P),P=-1):b=!0,mt(X,j-Mt))):(I.sortIndex=At,t(p,I),E||y||(E=!0,G||(G=!0,ot()))),I},r.unstable_shouldYield=C,r.unstable_wrapCallback=function(I){var Q=x;return function(){var j=x;x=Q;try{return I.apply(this,arguments)}finally{x=j}}}})(Nh)),Nh}var f_;function FS(){return f_||(f_=1,Lh.exports=IS()),Lh.exports}var Oh={exports:{}},On={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h_;function HS(){if(h_)return On;h_=1;var r=ip();function t(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)m+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(p,m,_){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:p,containerInfo:m,implementation:_}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return On.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,On.createPortal=function(p,m){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(t(299));return c(p,m,null,_)},On.flushSync=function(p){var m=f.T,_=s.p;try{if(f.T=null,s.p=2,p)return p()}finally{f.T=m,s.p=_,s.d.f()}},On.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,s.d.C(p,m))},On.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},On.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var _=m.as,g=d(_,m.crossOrigin),x=typeof m.integrity=="string"?m.integrity:void 0,y=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;_==="style"?s.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:g,integrity:x,fetchPriority:y}):_==="script"&&s.d.X(p,{crossOrigin:g,integrity:x,fetchPriority:y,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},On.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var _=d(m.as,m.crossOrigin);s.d.M(p,{crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&s.d.M(p)},On.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var _=m.as,g=d(_,m.crossOrigin);s.d.L(p,_,{crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},On.preloadModule=function(p,m){if(typeof p=="string")if(m){var _=d(m.as,m.crossOrigin);s.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else s.d.m(p)},On.requestFormReset=function(p){s.d.r(p)},On.unstable_batchedUpdates=function(p,m){return p(m)},On.useFormState=function(p,m,_){return f.H.useFormState(p,m,_)},On.useFormStatus=function(){return f.H.useHostTransitionStatus()},On.version="19.2.8",On}var d_;function GS(){if(d_)return Oh.exports;d_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Oh.exports=HS(),Oh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p_;function VS(){if(p_)return Jo;p_=1;var r=FS(),t=ip(),i=GS();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(c(e)!==e)throw Error(s(188))}function m(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var h=u.alternate;if(h===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===a)return p(u),e;if(h===o)return p(u),n;h=h.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=h;else{for(var S=!1,A=u.child;A;){if(A===a){S=!0,a=u,o=h;break}if(A===o){S=!0,o=u,a=h;break}A=A.sibling}if(!S){for(A=h.child;A;){if(A===a){S=!0,a=h,o=u;break}if(A===o){S=!0,o=h,a=u;break}A=A.sibling}if(!S)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function _(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=_(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,x=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),O=Symbol.for("react.consumer"),N=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),X=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),B=Symbol.iterator;function ot(e){return e===null||typeof e!="object"?null:(e=B&&e[B]||e["@@iterator"],typeof e=="function"?e:null)}var it=Symbol.for("react.client.reference");function gt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===it?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case b:return"Fragment";case v:return"Profiler";case M:return"StrictMode";case X:return"Suspense";case G:return"SuspenseList";case D:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case N:return e.displayName||"Context";case O:return(e._context.displayName||"Context")+".Consumer";case U:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case P:return n=e.displayName||null,n!==null?n:gt(e.type)||"Memo";case k:n=e._payload,e=e._init;try{return gt(e(n))}catch{}}return null}var mt=Array.isArray,I=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j={pending:!1,data:null,method:null,action:null},Mt=[],At=-1;function z(e){return{current:e}}function $(e){0>At||(e.current=Mt[At],Mt[At]=null,At--)}function xt(e,n){At++,Mt[At]=e.current,e.current=n}var q=z(null),ct=z(null),Tt=z(null),bt=z(null);function Ut(e,n){switch(xt(Tt,n),xt(ct,e),xt(q,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?w0(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=w0(n),e=D0(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}$(q),xt(q,e)}function Ft(){$(q),$(ct),$(Tt)}function ee(e){e.memoizedState!==null&&xt(bt,e);var n=q.current,a=D0(n,e.type);n!==a&&(xt(ct,e),xt(q,a))}function Te(e){ct.current===e&&($(q),$(ct)),bt.current===e&&($(bt),Yo._currentValue=j)}var ht,Ct;function F(e){if(ht===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);ht=n&&n[1]||"",Ct=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ht+e+Ct}var Ne=!1;function se(e,n){if(!e||Ne)return"";Ne=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var vt=function(){throw Error()};if(Object.defineProperty(vt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(vt,[])}catch(lt){var at=lt}Reflect.construct(e,[],vt)}else{try{vt.call()}catch(lt){at=lt}e.call(vt.prototype)}}else{try{throw Error()}catch(lt){at=lt}(vt=e())&&typeof vt.catch=="function"&&vt.catch(function(){})}}catch(lt){if(lt&&at&&typeof lt.stack=="string")return[lt.stack,at.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),S=h[0],A=h[1];if(S&&A){var H=S.split(`
`),nt=A.split(`
`);for(u=o=0;o<H.length&&!H[o].includes("DetermineComponentFrameRoot");)o++;for(;u<nt.length&&!nt[u].includes("DetermineComponentFrameRoot");)u++;if(o===H.length||u===nt.length)for(o=H.length-1,u=nt.length-1;1<=o&&0<=u&&H[o]!==nt[u];)u--;for(;1<=o&&0<=u;o--,u--)if(H[o]!==nt[u]){if(o!==1||u!==1)do if(o--,u--,0>u||H[o]!==nt[u]){var dt=`
`+H[o].replace(" at new "," at ");return e.displayName&&dt.includes("<anonymous>")&&(dt=dt.replace("<anonymous>",e.displayName)),dt}while(1<=o&&0<=u);break}}}finally{Ne=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?F(a):""}function re(e,n){switch(e.tag){case 26:case 27:case 5:return F(e.type);case 16:return F("Lazy");case 13:return e.child!==n&&n!==null?F("Suspense Fallback"):F("Suspense");case 19:return F("SuspenseList");case 0:case 15:return se(e.type,!1);case 11:return se(e.type.render,!1);case 1:return se(e.type,!0);case 31:return F("Activity");default:return""}}function jt(e){try{var n="",a=null;do n+=re(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Re=Object.prototype.hasOwnProperty,Yt=r.unstable_scheduleCallback,w=r.unstable_cancelCallback,T=r.unstable_shouldYield,tt=r.unstable_requestPaint,ut=r.unstable_now,yt=r.unstable_getCurrentPriorityLevel,pt=r.unstable_ImmediatePriority,Vt=r.unstable_UserBlockingPriority,wt=r.unstable_NormalPriority,Dt=r.unstable_LowPriority,ge=r.unstable_IdlePriority,Rt=r.log,It=r.unstable_setDisableYieldValue,qt=null,Zt=null;function Bt(e){if(typeof Rt=="function"&&It(e),Zt&&typeof Zt.setStrictMode=="function")try{Zt.setStrictMode(qt,e)}catch{}}var ne=Math.clz32?Math.clz32:W,ce=Math.log,He=Math.LN2;function W(e){return e>>>=0,e===0?32:31-(ce(e)/He|0)|0}var Lt=256,ft=262144,St=4194304;function Nt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ot(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,h=e.suspendedLanes,S=e.pingedLanes;e=e.warmLanes;var A=o&134217727;return A!==0?(o=A&~h,o!==0?u=Nt(o):(S&=A,S!==0?u=Nt(S):a||(a=A&~e,a!==0&&(u=Nt(a))))):(A=o&~h,A!==0?u=Nt(A):S!==0?u=Nt(S):a||(a=o&~e,a!==0&&(u=Nt(a)))),u===0?0:n!==0&&n!==u&&(n&h)===0&&(h=u&-u,a=n&-n,h>=a||h===32&&(a&4194048)!==0)?n:u}function ie(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Qe(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function pn(){var e=St;return St<<=1,(St&62914560)===0&&(St=4194304),e}function Ae(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Tn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Mi(e,n,a,o,u,h){var S=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var A=e.entanglements,H=e.expirationTimes,nt=e.hiddenUpdates;for(a=S&~a;0<a;){var dt=31-ne(a),vt=1<<dt;A[dt]=0,H[dt]=-1;var at=nt[dt];if(at!==null)for(nt[dt]=null,dt=0;dt<at.length;dt++){var lt=at[dt];lt!==null&&(lt.lane&=-536870913)}a&=~vt}o!==0&&so(e,o,0),h!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=h&~(S&~n))}function so(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-ne(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function ro(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-ne(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function Ni(e,n){var a=n&-n;return a=(a&42)!==0?1:as(a),(a&(e.suspendedLanes|n))!==0?0:a}function as(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Gs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function oo(){var e=Q.p;return e!==0?e:(e=window.event,e===void 0?32:$0(e.type))}function ss(e,n){var a=Q.p;try{return Q.p=e,n()}finally{Q.p=a}}var Ei=Math.random().toString(36).slice(2),$e="__reactFiber$"+Ei,An="__reactProps$"+Ei,ji="__reactContainer$"+Ei,lo="__reactEvents$"+Ei,Mu="__reactListeners$"+Ei,Eu="__reactHandles$"+Ei,dl="__reactResources$"+Ei,rs="__reactMarker$"+Ei;function R(e){delete e[$e],delete e[An],delete e[lo],delete e[Mu],delete e[Eu]}function Y(e){var n=e[$e];if(n)return n;for(var a=e.parentNode;a;){if(n=a[ji]||a[$e]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=B0(e);e!==null;){if(a=e[$e])return a;e=B0(e)}return n}e=a,a=e.parentNode}return null}function st(e){if(e=e[$e]||e[ji]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function rt(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function Z(e){var n=e[dl];return n||(n=e[dl]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Et(e){e[rs]=!0}var zt=new Set,Gt={};function Ht(e,n){$t(e,n),$t(e+"Capture",n)}function $t(e,n){for(Gt[e]=n,e=0;e<n.length;e++)zt.add(n[e])}var ae=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Qt={},Se={};function Ce(e){return Re.call(Se,e)?!0:Re.call(Qt,e)?!1:ae.test(e)?Se[e]=!0:(Qt[e]=!0,!1)}function qe(e,n,a){if(Ce(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function We(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function ue(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function Xt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function on(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function we(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,h=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(S){a=""+S,h.call(this,S)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(S){a=""+S},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Bn(e){if(!e._valueTracker){var n=on(e)?"checked":"value";e._valueTracker=we(e,n,""+e[n])}}function Wi(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=on(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function Sn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var os=/[\n"\\]/g;function ve(e){return e.replace(os,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Nn(e,n,a,o,u,h,S,A){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),n!=null?S==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Xt(n)):e.value!==""+Xt(n)&&(e.value=""+Xt(n)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),n!=null?mn(e,S,Xt(n)):a!=null?mn(e,S,Xt(a)):o!=null&&e.removeAttribute("value"),u==null&&h!=null&&(e.defaultChecked=!!h),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+Xt(A):e.removeAttribute("name")}function In(e,n,a,o,u,h,S,A){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.type=h),n!=null||a!=null){if(!(h!=="submit"&&h!=="reset"||n!=null)){Bn(e);return}a=a!=null?""+Xt(a):"",n=n!=null?""+Xt(n):a,A||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=A?e.checked:!!o,e.defaultChecked=!!o,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S),Bn(e)}function mn(e,n,a){n==="number"&&Sn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function an(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+Xt(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Vs(e,n,a){if(n!=null&&(n=""+Xt(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+Xt(a):""}function Oi(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(mt(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=Xt(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),Bn(e)}function ks(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Dx=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ap(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||Dx.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Rp(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Ap(e,u,o)}else for(var h in n)n.hasOwnProperty(h)&&Ap(e,h,n[h])}function bu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ux=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Lx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function pl(e){return Lx.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Yi(){}var Tu=null;function Au(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Xs=null,js=null;function Cp(e){var n=st(e);if(n&&(e=n.stateNode)){var a=e[An]||null;t:switch(e=n.stateNode,n.type){case"input":if(Nn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ve(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[An]||null;if(!u)throw Error(s(90));Nn(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&Wi(o)}break t;case"textarea":Vs(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&an(e,!!a.multiple,n,!1)}}}var Ru=!1;function wp(e,n,a){if(Ru)return e(n,a);Ru=!0;try{var o=e(n);return o}finally{if(Ru=!1,(Xs!==null||js!==null)&&(ec(),Xs&&(n=Xs,e=js,js=Xs=null,Cp(n),e)))for(n=0;n<e.length;n++)Cp(e[n])}}function co(e,n){var a=e.stateNode;if(a===null)return null;var o=a[An]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var qi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Cu=!1;if(qi)try{var uo={};Object.defineProperty(uo,"passive",{get:function(){Cu=!0}}),window.addEventListener("test",uo,uo),window.removeEventListener("test",uo,uo)}catch{Cu=!1}var Sa=null,wu=null,ml=null;function Dp(){if(ml)return ml;var e,n=wu,a=n.length,o,u="value"in Sa?Sa.value:Sa.textContent,h=u.length;for(e=0;e<a&&n[e]===u[e];e++);var S=a-e;for(o=1;o<=S&&n[a-o]===u[h-o];o++);return ml=u.slice(e,1<o?1-o:void 0)}function gl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function _l(){return!0}function Up(){return!1}function kn(e){function n(a,o,u,h,S){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=h,this.target=S,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(a=e[A],this[A]=a?a(h):h[A]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?_l:Up,this.isPropagationStopped=Up,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=_l)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=_l)},persist:function(){},isPersistent:_l}),n}var ls={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vl=kn(ls),fo=g({},ls,{view:0,detail:0}),Nx=kn(fo),Du,Uu,ho,xl=g({},fo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Nu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ho&&(ho&&e.type==="mousemove"?(Du=e.screenX-ho.screenX,Uu=e.screenY-ho.screenY):Uu=Du=0,ho=e),Du)},movementY:function(e){return"movementY"in e?e.movementY:Uu}}),Lp=kn(xl),Ox=g({},xl,{dataTransfer:0}),zx=kn(Ox),Px=g({},fo,{relatedTarget:0}),Lu=kn(Px),Bx=g({},ls,{animationName:0,elapsedTime:0,pseudoElement:0}),Ix=kn(Bx),Fx=g({},ls,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Hx=kn(Fx),Gx=g({},ls,{data:0}),Np=kn(Gx),Vx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Xx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jx(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Xx[e])?!!n[e]:!1}function Nu(){return jx}var Wx=g({},fo,{key:function(e){if(e.key){var n=Vx[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=gl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?kx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Nu,charCode:function(e){return e.type==="keypress"?gl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?gl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Yx=kn(Wx),qx=g({},xl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Op=kn(qx),Zx=g({},fo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Nu}),Kx=kn(Zx),Qx=g({},ls,{propertyName:0,elapsedTime:0,pseudoElement:0}),Jx=kn(Qx),$x=g({},xl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ty=kn($x),ey=g({},ls,{newState:0,oldState:0}),ny=kn(ey),iy=[9,13,27,32],Ou=qi&&"CompositionEvent"in window,po=null;qi&&"documentMode"in document&&(po=document.documentMode);var ay=qi&&"TextEvent"in window&&!po,zp=qi&&(!Ou||po&&8<po&&11>=po),Pp=" ",Bp=!1;function Ip(e,n){switch(e){case"keyup":return iy.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ws=!1;function sy(e,n){switch(e){case"compositionend":return Fp(n);case"keypress":return n.which!==32?null:(Bp=!0,Pp);case"textInput":return e=n.data,e===Pp&&Bp?null:e;default:return null}}function ry(e,n){if(Ws)return e==="compositionend"||!Ou&&Ip(e,n)?(e=Dp(),ml=wu=Sa=null,Ws=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return zp&&n.locale!=="ko"?null:n.data;default:return null}}var oy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!oy[e.type]:n==="textarea"}function Gp(e,n,a,o){Xs?js?js.push(o):js=[o]:Xs=o,n=lc(n,"onChange"),0<n.length&&(a=new vl("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var mo=null,go=null;function ly(e){E0(e,0)}function yl(e){var n=rt(e);if(Wi(n))return e}function Vp(e,n){if(e==="change")return n}var kp=!1;if(qi){var zu;if(qi){var Pu="oninput"in document;if(!Pu){var Xp=document.createElement("div");Xp.setAttribute("oninput","return;"),Pu=typeof Xp.oninput=="function"}zu=Pu}else zu=!1;kp=zu&&(!document.documentMode||9<document.documentMode)}function jp(){mo&&(mo.detachEvent("onpropertychange",Wp),go=mo=null)}function Wp(e){if(e.propertyName==="value"&&yl(go)){var n=[];Gp(n,go,e,Au(e)),wp(ly,n)}}function cy(e,n,a){e==="focusin"?(jp(),mo=n,go=a,mo.attachEvent("onpropertychange",Wp)):e==="focusout"&&jp()}function uy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return yl(go)}function fy(e,n){if(e==="click")return yl(n)}function hy(e,n){if(e==="input"||e==="change")return yl(n)}function dy(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var $n=typeof Object.is=="function"?Object.is:dy;function _o(e,n){if($n(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Re.call(n,u)||!$n(e[u],n[u]))return!1}return!0}function Yp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function qp(e,n){var a=Yp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Yp(a)}}function Zp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Zp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Kp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Sn(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Sn(e.document)}return n}function Bu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var py=qi&&"documentMode"in document&&11>=document.documentMode,Ys=null,Iu=null,vo=null,Fu=!1;function Qp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Fu||Ys==null||Ys!==Sn(o)||(o=Ys,"selectionStart"in o&&Bu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),vo&&_o(vo,o)||(vo=o,o=lc(Iu,"onSelect"),0<o.length&&(n=new vl("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Ys)))}function cs(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var qs={animationend:cs("Animation","AnimationEnd"),animationiteration:cs("Animation","AnimationIteration"),animationstart:cs("Animation","AnimationStart"),transitionrun:cs("Transition","TransitionRun"),transitionstart:cs("Transition","TransitionStart"),transitioncancel:cs("Transition","TransitionCancel"),transitionend:cs("Transition","TransitionEnd")},Hu={},Jp={};qi&&(Jp=document.createElement("div").style,"AnimationEvent"in window||(delete qs.animationend.animation,delete qs.animationiteration.animation,delete qs.animationstart.animation),"TransitionEvent"in window||delete qs.transitionend.transition);function us(e){if(Hu[e])return Hu[e];if(!qs[e])return e;var n=qs[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Jp)return Hu[e]=n[a];return e}var $p=us("animationend"),tm=us("animationiteration"),em=us("animationstart"),my=us("transitionrun"),gy=us("transitionstart"),_y=us("transitioncancel"),nm=us("transitionend"),im=new Map,Gu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Gu.push("scrollEnd");function bi(e,n){im.set(e,n),Ht(n,[e])}var Sl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ui=[],Zs=0,Vu=0;function Ml(){for(var e=Zs,n=Vu=Zs=0;n<e;){var a=ui[n];ui[n++]=null;var o=ui[n];ui[n++]=null;var u=ui[n];ui[n++]=null;var h=ui[n];if(ui[n++]=null,o!==null&&u!==null){var S=o.pending;S===null?u.next=u:(u.next=S.next,S.next=u),o.pending=u}h!==0&&am(a,u,h)}}function El(e,n,a,o){ui[Zs++]=e,ui[Zs++]=n,ui[Zs++]=a,ui[Zs++]=o,Vu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function ku(e,n,a,o){return El(e,n,a,o),bl(e)}function fs(e,n){return El(e,null,null,n),bl(e)}function am(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,h=e.return;h!==null;)h.childLanes|=a,o=h.alternate,o!==null&&(o.childLanes|=a),h.tag===22&&(e=h.stateNode,e===null||e._visibility&1||(u=!0)),e=h,h=h.return;return e.tag===3?(h=e.stateNode,u&&n!==null&&(u=31-ne(a),e=h.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),h):null}function bl(e){if(50<Ho)throw Ho=0,$f=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Ks={};function vy(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ti(e,n,a,o){return new vy(e,n,a,o)}function Xu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Zi(e,n){var a=e.alternate;return a===null?(a=ti(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function sm(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Tl(e,n,a,o,u,h){var S=0;if(o=e,typeof e=="function")Xu(e)&&(S=1);else if(typeof e=="string")S=ES(e,a,q.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case D:return e=ti(31,a,n,u),e.elementType=D,e.lanes=h,e;case b:return hs(a.children,u,h,n);case M:S=8,u|=24;break;case v:return e=ti(12,a,n,u|2),e.elementType=v,e.lanes=h,e;case X:return e=ti(13,a,n,u),e.elementType=X,e.lanes=h,e;case G:return e=ti(19,a,n,u),e.elementType=G,e.lanes=h,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case N:S=10;break t;case O:S=9;break t;case U:S=11;break t;case P:S=14;break t;case k:S=16,o=null;break t}S=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=ti(S,a,n,u),n.elementType=e,n.type=o,n.lanes=h,n}function hs(e,n,a,o){return e=ti(7,e,o,n),e.lanes=a,e}function ju(e,n,a){return e=ti(6,e,null,n),e.lanes=a,e}function rm(e){var n=ti(18,null,null,0);return n.stateNode=e,n}function Wu(e,n,a){return n=ti(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var om=new WeakMap;function fi(e,n){if(typeof e=="object"&&e!==null){var a=om.get(e);return a!==void 0?a:(n={value:e,source:n,stack:jt(n)},om.set(e,n),n)}return{value:e,source:n,stack:jt(n)}}var Qs=[],Js=0,Al=null,xo=0,hi=[],di=0,Ma=null,zi=1,Pi="";function Ki(e,n){Qs[Js++]=xo,Qs[Js++]=Al,Al=e,xo=n}function lm(e,n,a){hi[di++]=zi,hi[di++]=Pi,hi[di++]=Ma,Ma=e;var o=zi;e=Pi;var u=32-ne(o)-1;o&=~(1<<u),a+=1;var h=32-ne(n)+u;if(30<h){var S=u-u%5;h=(o&(1<<S)-1).toString(32),o>>=S,u-=S,zi=1<<32-ne(n)+u|a<<u|o,Pi=h+e}else zi=1<<h|a<<u|o,Pi=e}function Yu(e){e.return!==null&&(Ki(e,1),lm(e,1,0))}function qu(e){for(;e===Al;)Al=Qs[--Js],Qs[Js]=null,xo=Qs[--Js],Qs[Js]=null;for(;e===Ma;)Ma=hi[--di],hi[di]=null,Pi=hi[--di],hi[di]=null,zi=hi[--di],hi[di]=null}function cm(e,n){hi[di++]=zi,hi[di++]=Pi,hi[di++]=Ma,zi=n.id,Pi=n.overflow,Ma=e}var Rn=null,Ze=null,be=!1,Ea=null,pi=!1,Zu=Error(s(519));function ba(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw yo(fi(n,e)),Zu}function um(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[$e]=e,n[An]=o,a){case"dialog":ye("cancel",n),ye("close",n);break;case"iframe":case"object":case"embed":ye("load",n);break;case"video":case"audio":for(a=0;a<Vo.length;a++)ye(Vo[a],n);break;case"source":ye("error",n);break;case"img":case"image":case"link":ye("error",n),ye("load",n);break;case"details":ye("toggle",n);break;case"input":ye("invalid",n),In(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":ye("invalid",n);break;case"textarea":ye("invalid",n),Oi(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||R0(n.textContent,a)?(o.popover!=null&&(ye("beforetoggle",n),ye("toggle",n)),o.onScroll!=null&&ye("scroll",n),o.onScrollEnd!=null&&ye("scrollend",n),o.onClick!=null&&(n.onclick=Yi),n=!0):n=!1,n||ba(e,!0)}function fm(e){for(Rn=e.return;Rn;)switch(Rn.tag){case 5:case 31:case 13:pi=!1;return;case 27:case 3:pi=!0;return;default:Rn=Rn.return}}function $s(e){if(e!==Rn)return!1;if(!be)return fm(e),be=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||ph(e.type,e.memoizedProps)),a=!a),a&&Ze&&ba(e),fm(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ze=P0(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ze=P0(e)}else n===27?(n=Ze,Ia(e.type)?(e=xh,xh=null,Ze=e):Ze=n):Ze=Rn?gi(e.stateNode.nextSibling):null;return!0}function ds(){Ze=Rn=null,be=!1}function Ku(){var e=Ea;return e!==null&&(Yn===null?Yn=e:Yn.push.apply(Yn,e),Ea=null),e}function yo(e){Ea===null?Ea=[e]:Ea.push(e)}var Qu=z(null),ps=null,Qi=null;function Ta(e,n,a){xt(Qu,n._currentValue),n._currentValue=a}function Ji(e){e._currentValue=Qu.current,$(Qu)}function Ju(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function $u(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var h=u.dependencies;if(h!==null){var S=u.child;h=h.firstContext;t:for(;h!==null;){var A=h;h=u;for(var H=0;H<n.length;H++)if(A.context===n[H]){h.lanes|=a,A=h.alternate,A!==null&&(A.lanes|=a),Ju(h.return,a,e),o||(S=null);break t}h=A.next}}else if(u.tag===18){if(S=u.return,S===null)throw Error(s(341));S.lanes|=a,h=S.alternate,h!==null&&(h.lanes|=a),Ju(S,a,e),S=null}else S=u.child;if(S!==null)S.return=u;else for(S=u;S!==null;){if(S===e){S=null;break}if(u=S.sibling,u!==null){u.return=S.return,S=u;break}S=S.return}u=S}}function tr(e,n,a,o){e=null;for(var u=n,h=!1;u!==null;){if(!h){if((u.flags&524288)!==0)h=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var S=u.alternate;if(S===null)throw Error(s(387));if(S=S.memoizedProps,S!==null){var A=u.type;$n(u.pendingProps.value,S.value)||(e!==null?e.push(A):e=[A])}}else if(u===bt.current){if(S=u.alternate,S===null)throw Error(s(387));S.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Yo):e=[Yo])}u=u.return}e!==null&&$u(n,e,a,o),n.flags|=262144}function Rl(e){for(e=e.firstContext;e!==null;){if(!$n(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ms(e){ps=e,Qi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Cn(e){return hm(ps,e)}function Cl(e,n){return ps===null&&ms(e),hm(e,n)}function hm(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Qi===null){if(e===null)throw Error(s(308));Qi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Qi=Qi.next=n;return a}var xy=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},yy=r.unstable_scheduleCallback,Sy=r.unstable_NormalPriority,ln={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function tf(){return{controller:new xy,data:new Map,refCount:0}}function So(e){e.refCount--,e.refCount===0&&yy(Sy,function(){e.controller.abort()})}var Mo=null,ef=0,er=0,nr=null;function My(e,n){if(Mo===null){var a=Mo=[];ef=0,er=sh(),nr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return ef++,n.then(dm,dm),n}function dm(){if(--ef===0&&Mo!==null){nr!==null&&(nr.status="fulfilled");var e=Mo;Mo=null,er=0,nr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Ey(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var pm=I.S;I.S=function(e,n){Qg=ut(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&My(e,n),pm!==null&&pm(e,n)};var gs=z(null);function nf(){var e=gs.current;return e!==null?e:Ye.pooledCache}function wl(e,n){n===null?xt(gs,gs.current):xt(gs,n.pool)}function mm(){var e=nf();return e===null?null:{parent:ln._currentValue,pool:e}}var ir=Error(s(460)),af=Error(s(474)),Dl=Error(s(542)),Ul={then:function(){}};function gm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function _m(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Yi,Yi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,xm(e),e;default:if(typeof n.status=="string")n.then(Yi,Yi);else{if(e=Ye,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,xm(e),e}throw vs=n,ir}}function _s(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(vs=a,ir):a}}var vs=null;function vm(){if(vs===null)throw Error(s(459));var e=vs;return vs=null,e}function xm(e){if(e===ir||e===Dl)throw Error(s(483))}var ar=null,Eo=0;function Ll(e){var n=Eo;return Eo+=1,ar===null&&(ar=[]),_m(ar,e,n)}function bo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Nl(e,n){throw n.$$typeof===x?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function ym(e){function n(K,V){if(e){var et=K.deletions;et===null?(K.deletions=[V],K.flags|=16):et.push(V)}}function a(K,V){if(!e)return null;for(;V!==null;)n(K,V),V=V.sibling;return null}function o(K){for(var V=new Map;K!==null;)K.key!==null?V.set(K.key,K):V.set(K.index,K),K=K.sibling;return V}function u(K,V){return K=Zi(K,V),K.index=0,K.sibling=null,K}function h(K,V,et){return K.index=et,e?(et=K.alternate,et!==null?(et=et.index,et<V?(K.flags|=67108866,V):et):(K.flags|=67108866,V)):(K.flags|=1048576,V)}function S(K){return e&&K.alternate===null&&(K.flags|=67108866),K}function A(K,V,et,_t){return V===null||V.tag!==6?(V=ju(et,K.mode,_t),V.return=K,V):(V=u(V,et),V.return=K,V)}function H(K,V,et,_t){var Jt=et.type;return Jt===b?dt(K,V,et.props.children,_t,et.key):V!==null&&(V.elementType===Jt||typeof Jt=="object"&&Jt!==null&&Jt.$$typeof===k&&_s(Jt)===V.type)?(V=u(V,et.props),bo(V,et),V.return=K,V):(V=Tl(et.type,et.key,et.props,null,K.mode,_t),bo(V,et),V.return=K,V)}function nt(K,V,et,_t){return V===null||V.tag!==4||V.stateNode.containerInfo!==et.containerInfo||V.stateNode.implementation!==et.implementation?(V=Wu(et,K.mode,_t),V.return=K,V):(V=u(V,et.children||[]),V.return=K,V)}function dt(K,V,et,_t,Jt){return V===null||V.tag!==7?(V=hs(et,K.mode,_t,Jt),V.return=K,V):(V=u(V,et),V.return=K,V)}function vt(K,V,et){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=ju(""+V,K.mode,et),V.return=K,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case y:return et=Tl(V.type,V.key,V.props,null,K.mode,et),bo(et,V),et.return=K,et;case E:return V=Wu(V,K.mode,et),V.return=K,V;case k:return V=_s(V),vt(K,V,et)}if(mt(V)||ot(V))return V=hs(V,K.mode,et,null),V.return=K,V;if(typeof V.then=="function")return vt(K,Ll(V),et);if(V.$$typeof===N)return vt(K,Cl(K,V),et);Nl(K,V)}return null}function at(K,V,et,_t){var Jt=V!==null?V.key:null;if(typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint")return Jt!==null?null:A(K,V,""+et,_t);if(typeof et=="object"&&et!==null){switch(et.$$typeof){case y:return et.key===Jt?H(K,V,et,_t):null;case E:return et.key===Jt?nt(K,V,et,_t):null;case k:return et=_s(et),at(K,V,et,_t)}if(mt(et)||ot(et))return Jt!==null?null:dt(K,V,et,_t,null);if(typeof et.then=="function")return at(K,V,Ll(et),_t);if(et.$$typeof===N)return at(K,V,Cl(K,et),_t);Nl(K,et)}return null}function lt(K,V,et,_t,Jt){if(typeof _t=="string"&&_t!==""||typeof _t=="number"||typeof _t=="bigint")return K=K.get(et)||null,A(V,K,""+_t,Jt);if(typeof _t=="object"&&_t!==null){switch(_t.$$typeof){case y:return K=K.get(_t.key===null?et:_t.key)||null,H(V,K,_t,Jt);case E:return K=K.get(_t.key===null?et:_t.key)||null,nt(V,K,_t,Jt);case k:return _t=_s(_t),lt(K,V,et,_t,Jt)}if(mt(_t)||ot(_t))return K=K.get(et)||null,dt(V,K,_t,Jt,null);if(typeof _t.then=="function")return lt(K,V,et,Ll(_t),Jt);if(_t.$$typeof===N)return lt(K,V,et,Cl(V,_t),Jt);Nl(V,_t)}return null}function kt(K,V,et,_t){for(var Jt=null,De=null,Wt=V,he=V=0,Ee=null;Wt!==null&&he<et.length;he++){Wt.index>he?(Ee=Wt,Wt=null):Ee=Wt.sibling;var Ue=at(K,Wt,et[he],_t);if(Ue===null){Wt===null&&(Wt=Ee);break}e&&Wt&&Ue.alternate===null&&n(K,Wt),V=h(Ue,V,he),De===null?Jt=Ue:De.sibling=Ue,De=Ue,Wt=Ee}if(he===et.length)return a(K,Wt),be&&Ki(K,he),Jt;if(Wt===null){for(;he<et.length;he++)Wt=vt(K,et[he],_t),Wt!==null&&(V=h(Wt,V,he),De===null?Jt=Wt:De.sibling=Wt,De=Wt);return be&&Ki(K,he),Jt}for(Wt=o(Wt);he<et.length;he++)Ee=lt(Wt,K,he,et[he],_t),Ee!==null&&(e&&Ee.alternate!==null&&Wt.delete(Ee.key===null?he:Ee.key),V=h(Ee,V,he),De===null?Jt=Ee:De.sibling=Ee,De=Ee);return e&&Wt.forEach(function(ka){return n(K,ka)}),be&&Ki(K,he),Jt}function te(K,V,et,_t){if(et==null)throw Error(s(151));for(var Jt=null,De=null,Wt=V,he=V=0,Ee=null,Ue=et.next();Wt!==null&&!Ue.done;he++,Ue=et.next()){Wt.index>he?(Ee=Wt,Wt=null):Ee=Wt.sibling;var ka=at(K,Wt,Ue.value,_t);if(ka===null){Wt===null&&(Wt=Ee);break}e&&Wt&&ka.alternate===null&&n(K,Wt),V=h(ka,V,he),De===null?Jt=ka:De.sibling=ka,De=ka,Wt=Ee}if(Ue.done)return a(K,Wt),be&&Ki(K,he),Jt;if(Wt===null){for(;!Ue.done;he++,Ue=et.next())Ue=vt(K,Ue.value,_t),Ue!==null&&(V=h(Ue,V,he),De===null?Jt=Ue:De.sibling=Ue,De=Ue);return be&&Ki(K,he),Jt}for(Wt=o(Wt);!Ue.done;he++,Ue=et.next())Ue=lt(Wt,K,he,Ue.value,_t),Ue!==null&&(e&&Ue.alternate!==null&&Wt.delete(Ue.key===null?he:Ue.key),V=h(Ue,V,he),De===null?Jt=Ue:De.sibling=Ue,De=Ue);return e&&Wt.forEach(function(OS){return n(K,OS)}),be&&Ki(K,he),Jt}function ke(K,V,et,_t){if(typeof et=="object"&&et!==null&&et.type===b&&et.key===null&&(et=et.props.children),typeof et=="object"&&et!==null){switch(et.$$typeof){case y:t:{for(var Jt=et.key;V!==null;){if(V.key===Jt){if(Jt=et.type,Jt===b){if(V.tag===7){a(K,V.sibling),_t=u(V,et.props.children),_t.return=K,K=_t;break t}}else if(V.elementType===Jt||typeof Jt=="object"&&Jt!==null&&Jt.$$typeof===k&&_s(Jt)===V.type){a(K,V.sibling),_t=u(V,et.props),bo(_t,et),_t.return=K,K=_t;break t}a(K,V);break}else n(K,V);V=V.sibling}et.type===b?(_t=hs(et.props.children,K.mode,_t,et.key),_t.return=K,K=_t):(_t=Tl(et.type,et.key,et.props,null,K.mode,_t),bo(_t,et),_t.return=K,K=_t)}return S(K);case E:t:{for(Jt=et.key;V!==null;){if(V.key===Jt)if(V.tag===4&&V.stateNode.containerInfo===et.containerInfo&&V.stateNode.implementation===et.implementation){a(K,V.sibling),_t=u(V,et.children||[]),_t.return=K,K=_t;break t}else{a(K,V);break}else n(K,V);V=V.sibling}_t=Wu(et,K.mode,_t),_t.return=K,K=_t}return S(K);case k:return et=_s(et),ke(K,V,et,_t)}if(mt(et))return kt(K,V,et,_t);if(ot(et)){if(Jt=ot(et),typeof Jt!="function")throw Error(s(150));return et=Jt.call(et),te(K,V,et,_t)}if(typeof et.then=="function")return ke(K,V,Ll(et),_t);if(et.$$typeof===N)return ke(K,V,Cl(K,et),_t);Nl(K,et)}return typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint"?(et=""+et,V!==null&&V.tag===6?(a(K,V.sibling),_t=u(V,et),_t.return=K,K=_t):(a(K,V),_t=ju(et,K.mode,_t),_t.return=K,K=_t),S(K)):a(K,V)}return function(K,V,et,_t){try{Eo=0;var Jt=ke(K,V,et,_t);return ar=null,Jt}catch(Wt){if(Wt===ir||Wt===Dl)throw Wt;var De=ti(29,Wt,null,K.mode);return De.lanes=_t,De.return=K,De}finally{}}}var xs=ym(!0),Sm=ym(!1),Aa=!1;function sf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function rf(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ra(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ca(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Oe&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=bl(e),am(e,null,a),n}return El(e,o,n,a),bl(e)}function To(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,ro(e,a)}}function of(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};h===null?u=h=S:h=h.next=S,a=a.next}while(a!==null);h===null?u=h=n:h=h.next=n}else u=h=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var lf=!1;function Ao(){if(lf){var e=nr;if(e!==null)throw e}}function Ro(e,n,a,o){lf=!1;var u=e.updateQueue;Aa=!1;var h=u.firstBaseUpdate,S=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var H=A,nt=H.next;H.next=null,S===null?h=nt:S.next=nt,S=H;var dt=e.alternate;dt!==null&&(dt=dt.updateQueue,A=dt.lastBaseUpdate,A!==S&&(A===null?dt.firstBaseUpdate=nt:A.next=nt,dt.lastBaseUpdate=H))}if(h!==null){var vt=u.baseState;S=0,dt=nt=H=null,A=h;do{var at=A.lane&-536870913,lt=at!==A.lane;if(lt?(Me&at)===at:(o&at)===at){at!==0&&at===er&&(lf=!0),dt!==null&&(dt=dt.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var kt=e,te=A;at=n;var ke=a;switch(te.tag){case 1:if(kt=te.payload,typeof kt=="function"){vt=kt.call(ke,vt,at);break t}vt=kt;break t;case 3:kt.flags=kt.flags&-65537|128;case 0:if(kt=te.payload,at=typeof kt=="function"?kt.call(ke,vt,at):kt,at==null)break t;vt=g({},vt,at);break t;case 2:Aa=!0}}at=A.callback,at!==null&&(e.flags|=64,lt&&(e.flags|=8192),lt=u.callbacks,lt===null?u.callbacks=[at]:lt.push(at))}else lt={lane:at,tag:A.tag,payload:A.payload,callback:A.callback,next:null},dt===null?(nt=dt=lt,H=vt):dt=dt.next=lt,S|=at;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;lt=A,A=lt.next,lt.next=null,u.lastBaseUpdate=lt,u.shared.pending=null}}while(!0);dt===null&&(H=vt),u.baseState=H,u.firstBaseUpdate=nt,u.lastBaseUpdate=dt,h===null&&(u.shared.lanes=0),Na|=S,e.lanes=S,e.memoizedState=vt}}function Mm(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function Em(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Mm(a[e],n)}var sr=z(null),Ol=z(0);function bm(e,n){e=oa,xt(Ol,e),xt(sr,n),oa=e|n.baseLanes}function cf(){xt(Ol,oa),xt(sr,sr.current)}function uf(){oa=Ol.current,$(sr),$(Ol)}var ei=z(null),mi=null;function wa(e){var n=e.alternate;xt(sn,sn.current&1),xt(ei,e),mi===null&&(n===null||sr.current!==null||n.memoizedState!==null)&&(mi=e)}function ff(e){xt(sn,sn.current),xt(ei,e),mi===null&&(mi=e)}function Tm(e){e.tag===22?(xt(sn,sn.current),xt(ei,e),mi===null&&(mi=e)):Da()}function Da(){xt(sn,sn.current),xt(ei,ei.current)}function ni(e){$(ei),mi===e&&(mi=null),$(sn)}var sn=z(0);function zl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||_h(a)||vh(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var $i=0,fe=null,Ge=null,cn=null,Pl=!1,rr=!1,ys=!1,Bl=0,Co=0,or=null,by=0;function tn(){throw Error(s(321))}function hf(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!$n(e[a],n[a]))return!1;return!0}function df(e,n,a,o,u,h){return $i=h,fe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,I.H=e===null||e.memoizedState===null?lg:Cf,ys=!1,h=a(o,u),ys=!1,rr&&(h=Rm(n,a,o,u)),Am(e),h}function Am(e){I.H=Uo;var n=Ge!==null&&Ge.next!==null;if($i=0,cn=Ge=fe=null,Pl=!1,Co=0,or=null,n)throw Error(s(300));e===null||un||(e=e.dependencies,e!==null&&Rl(e)&&(un=!0))}function Rm(e,n,a,o){fe=e;var u=0;do{if(rr&&(or=null),Co=0,rr=!1,25<=u)throw Error(s(301));if(u+=1,cn=Ge=null,e.updateQueue!=null){var h=e.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}I.H=cg,h=n(a,o)}while(rr);return h}function Ty(){var e=I.H,n=e.useState()[0];return n=typeof n.then=="function"?wo(n):n,e=e.useState()[0],(Ge!==null?Ge.memoizedState:null)!==e&&(fe.flags|=1024),n}function pf(){var e=Bl!==0;return Bl=0,e}function mf(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function gf(e){if(Pl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Pl=!1}$i=0,cn=Ge=fe=null,rr=!1,Co=Bl=0,or=null}function Fn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?fe.memoizedState=cn=e:cn=cn.next=e,cn}function rn(){if(Ge===null){var e=fe.alternate;e=e!==null?e.memoizedState:null}else e=Ge.next;var n=cn===null?fe.memoizedState:cn.next;if(n!==null)cn=n,Ge=e;else{if(e===null)throw fe.alternate===null?Error(s(467)):Error(s(310));Ge=e,e={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},cn===null?fe.memoizedState=cn=e:cn=cn.next=e}return cn}function Il(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function wo(e){var n=Co;return Co+=1,or===null&&(or=[]),e=_m(or,e,n),n=fe,(cn===null?n.memoizedState:cn.next)===null&&(n=n.alternate,I.H=n===null||n.memoizedState===null?lg:Cf),e}function Fl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return wo(e);if(e.$$typeof===N)return Cn(e)}throw Error(s(438,String(e)))}function _f(e){var n=null,a=fe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=fe.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Il(),fe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=C;return n.index++,a}function ta(e,n){return typeof n=="function"?n(e):n}function Hl(e){var n=rn();return vf(n,Ge,e)}function vf(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,h=o.pending;if(h!==null){if(u!==null){var S=u.next;u.next=h.next,h.next=S}n.baseQueue=u=h,o.pending=null}if(h=e.baseState,u===null)e.memoizedState=h;else{n=u.next;var A=S=null,H=null,nt=n,dt=!1;do{var vt=nt.lane&-536870913;if(vt!==nt.lane?(Me&vt)===vt:($i&vt)===vt){var at=nt.revertLane;if(at===0)H!==null&&(H=H.next={lane:0,revertLane:0,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null}),vt===er&&(dt=!0);else if(($i&at)===at){nt=nt.next,at===er&&(dt=!0);continue}else vt={lane:0,revertLane:nt.revertLane,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},H===null?(A=H=vt,S=h):H=H.next=vt,fe.lanes|=at,Na|=at;vt=nt.action,ys&&a(h,vt),h=nt.hasEagerState?nt.eagerState:a(h,vt)}else at={lane:vt,revertLane:nt.revertLane,gesture:nt.gesture,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},H===null?(A=H=at,S=h):H=H.next=at,fe.lanes|=vt,Na|=vt;nt=nt.next}while(nt!==null&&nt!==n);if(H===null?S=h:H.next=A,!$n(h,e.memoizedState)&&(un=!0,dt&&(a=nr,a!==null)))throw a;e.memoizedState=h,e.baseState=S,e.baseQueue=H,o.lastRenderedState=h}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function xf(e){var n=rn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,h=n.memoizedState;if(u!==null){a.pending=null;var S=u=u.next;do h=e(h,S.action),S=S.next;while(S!==u);$n(h,n.memoizedState)||(un=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),a.lastRenderedState=h}return[h,o]}function Cm(e,n,a){var o=fe,u=rn(),h=be;if(h){if(a===void 0)throw Error(s(407));a=a()}else a=n();var S=!$n((Ge||u).memoizedState,a);if(S&&(u.memoizedState=a,un=!0),u=u.queue,Mf(Um.bind(null,o,u,e),[e]),u.getSnapshot!==n||S||cn!==null&&cn.memoizedState.tag&1){if(o.flags|=2048,lr(9,{destroy:void 0},Dm.bind(null,o,u,a,n),null),Ye===null)throw Error(s(349));h||($i&127)!==0||wm(o,n,a)}return a}function wm(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=fe.updateQueue,n===null?(n=Il(),fe.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Dm(e,n,a,o){n.value=a,n.getSnapshot=o,Lm(n)&&Nm(e)}function Um(e,n,a){return a(function(){Lm(n)&&Nm(e)})}function Lm(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!$n(e,a)}catch{return!0}}function Nm(e){var n=fs(e,2);n!==null&&qn(n,e,2)}function yf(e){var n=Fn();if(typeof e=="function"){var a=e;if(e=a(),ys){Bt(!0);try{a()}finally{Bt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:e},n}function Om(e,n,a,o){return e.baseState=a,vf(e,Ge,typeof o=="function"?o:ta)}function Ay(e,n,a,o,u){if(kl(e))throw Error(s(485));if(e=n.action,e!==null){var h={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){h.listeners.push(S)}};I.T!==null?a(!0):h.isTransition=!1,o(h),a=n.pending,a===null?(h.next=n.pending=h,zm(n,h)):(h.next=a.next,n.pending=a.next=h)}}function zm(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var h=I.T,S={};I.T=S;try{var A=a(u,o),H=I.S;H!==null&&H(S,A),Pm(e,n,A)}catch(nt){Sf(e,n,nt)}finally{h!==null&&S.types!==null&&(h.types=S.types),I.T=h}}else try{h=a(u,o),Pm(e,n,h)}catch(nt){Sf(e,n,nt)}}function Pm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Bm(e,n,o)},function(o){return Sf(e,n,o)}):Bm(e,n,a)}function Bm(e,n,a){n.status="fulfilled",n.value=a,Im(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,zm(e,a)))}function Sf(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Im(n),n=n.next;while(n!==o)}e.action=null}function Im(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Fm(e,n){return n}function Hm(e,n){if(be){var a=Ye.formState;if(a!==null){t:{var o=fe;if(be){if(Ze){e:{for(var u=Ze,h=pi;u.nodeType!==8;){if(!h){u=null;break e}if(u=gi(u.nextSibling),u===null){u=null;break e}}h=u.data,u=h==="F!"||h==="F"?u:null}if(u){Ze=gi(u.nextSibling),o=u.data==="F!";break t}}ba(o)}o=!1}o&&(n=a[0])}}return a=Fn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fm,lastRenderedState:n},a.queue=o,a=sg.bind(null,fe,o),o.dispatch=a,o=yf(!1),h=Rf.bind(null,fe,!1,o.queue),o=Fn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=Ay.bind(null,fe,u,h,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function Gm(e){var n=rn();return Vm(n,Ge,e)}function Vm(e,n,a){if(n=vf(e,n,Fm)[0],e=Hl(ta)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=wo(n)}catch(S){throw S===ir?Dl:S}else o=n;n=rn();var u=n.queue,h=u.dispatch;return a!==n.memoizedState&&(fe.flags|=2048,lr(9,{destroy:void 0},Ry.bind(null,u,a),null)),[o,h,e]}function Ry(e,n){e.action=n}function km(e){var n=rn(),a=Ge;if(a!==null)return Vm(n,a,e);rn(),n=n.memoizedState,a=rn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function lr(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=fe.updateQueue,n===null&&(n=Il(),fe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function Xm(){return rn().memoizedState}function Gl(e,n,a,o){var u=Fn();fe.flags|=e,u.memoizedState=lr(1|n,{destroy:void 0},a,o===void 0?null:o)}function Vl(e,n,a,o){var u=rn();o=o===void 0?null:o;var h=u.memoizedState.inst;Ge!==null&&o!==null&&hf(o,Ge.memoizedState.deps)?u.memoizedState=lr(n,h,a,o):(fe.flags|=e,u.memoizedState=lr(1|n,h,a,o))}function jm(e,n){Gl(8390656,8,e,n)}function Mf(e,n){Vl(2048,8,e,n)}function Cy(e){fe.flags|=4;var n=fe.updateQueue;if(n===null)n=Il(),fe.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Wm(e){var n=rn().memoizedState;return Cy({ref:n,nextImpl:e}),function(){if((Oe&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Ym(e,n){return Vl(4,2,e,n)}function qm(e,n){return Vl(4,4,e,n)}function Zm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Km(e,n,a){a=a!=null?a.concat([e]):null,Vl(4,4,Zm.bind(null,n,e),a)}function Ef(){}function Qm(e,n){var a=rn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&hf(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function Jm(e,n){var a=rn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&hf(n,o[1]))return o[0];if(o=e(),ys){Bt(!0);try{e()}finally{Bt(!1)}}return a.memoizedState=[o,n],o}function bf(e,n,a){return a===void 0||($i&1073741824)!==0&&(Me&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=$g(),fe.lanes|=e,Na|=e,a)}function $m(e,n,a,o){return $n(a,n)?a:sr.current!==null?(e=bf(e,a,o),$n(e,n)||(un=!0),e):($i&42)===0||($i&1073741824)!==0&&(Me&261930)===0?(un=!0,e.memoizedState=a):(e=$g(),fe.lanes|=e,Na|=e,n)}function tg(e,n,a,o,u){var h=Q.p;Q.p=h!==0&&8>h?h:8;var S=I.T,A={};I.T=A,Rf(e,!1,n,a);try{var H=u(),nt=I.S;if(nt!==null&&nt(A,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var dt=Ey(H,o);Do(e,n,dt,si(e))}else Do(e,n,o,si(e))}catch(vt){Do(e,n,{then:function(){},status:"rejected",reason:vt},si())}finally{Q.p=h,S!==null&&A.types!==null&&(S.types=A.types),I.T=S}}function wy(){}function Tf(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=eg(e).queue;tg(e,u,n,j,a===null?wy:function(){return ng(e),a(o)})}function eg(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:j,baseState:j,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:j},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function ng(e){var n=eg(e);n.next===null&&(n=e.alternate.memoizedState),Do(e,n.next.queue,{},si())}function Af(){return Cn(Yo)}function ig(){return rn().memoizedState}function ag(){return rn().memoizedState}function Dy(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=si();e=Ra(a);var o=Ca(n,e,a);o!==null&&(qn(o,n,a),To(o,n,a)),n={cache:tf()},e.payload=n;return}n=n.return}}function Uy(e,n,a){var o=si();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},kl(e)?rg(n,a):(a=ku(e,n,a,o),a!==null&&(qn(a,e,o),og(a,n,o)))}function sg(e,n,a){var o=si();Do(e,n,a,o)}function Do(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(kl(e))rg(n,u);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var S=n.lastRenderedState,A=h(S,a);if(u.hasEagerState=!0,u.eagerState=A,$n(A,S))return El(e,n,u,0),Ye===null&&Ml(),!1}catch{}finally{}if(a=ku(e,n,u,o),a!==null)return qn(a,e,o),og(a,n,o),!0}return!1}function Rf(e,n,a,o){if(o={lane:2,revertLane:sh(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},kl(e)){if(n)throw Error(s(479))}else n=ku(e,a,o,2),n!==null&&qn(n,e,2)}function kl(e){var n=e.alternate;return e===fe||n!==null&&n===fe}function rg(e,n){rr=Pl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function og(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,ro(e,a)}}var Uo={readContext:Cn,use:Fl,useCallback:tn,useContext:tn,useEffect:tn,useImperativeHandle:tn,useLayoutEffect:tn,useInsertionEffect:tn,useMemo:tn,useReducer:tn,useRef:tn,useState:tn,useDebugValue:tn,useDeferredValue:tn,useTransition:tn,useSyncExternalStore:tn,useId:tn,useHostTransitionStatus:tn,useFormState:tn,useActionState:tn,useOptimistic:tn,useMemoCache:tn,useCacheRefresh:tn};Uo.useEffectEvent=tn;var lg={readContext:Cn,use:Fl,useCallback:function(e,n){return Fn().memoizedState=[e,n===void 0?null:n],e},useContext:Cn,useEffect:jm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Gl(4194308,4,Zm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Gl(4194308,4,e,n)},useInsertionEffect:function(e,n){Gl(4,2,e,n)},useMemo:function(e,n){var a=Fn();n=n===void 0?null:n;var o=e();if(ys){Bt(!0);try{e()}finally{Bt(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Fn();if(a!==void 0){var u=a(n);if(ys){Bt(!0);try{a(n)}finally{Bt(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=Uy.bind(null,fe,e),[o.memoizedState,e]},useRef:function(e){var n=Fn();return e={current:e},n.memoizedState=e},useState:function(e){e=yf(e);var n=e.queue,a=sg.bind(null,fe,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Ef,useDeferredValue:function(e,n){var a=Fn();return bf(a,e,n)},useTransition:function(){var e=yf(!1);return e=tg.bind(null,fe,e.queue,!0,!1),Fn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=fe,u=Fn();if(be){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Ye===null)throw Error(s(349));(Me&127)!==0||wm(o,n,a)}u.memoizedState=a;var h={value:a,getSnapshot:n};return u.queue=h,jm(Um.bind(null,o,h,e),[e]),o.flags|=2048,lr(9,{destroy:void 0},Dm.bind(null,o,h,a,n),null),a},useId:function(){var e=Fn(),n=Ye.identifierPrefix;if(be){var a=Pi,o=zi;a=(o&~(1<<32-ne(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Bl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=by++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Af,useFormState:Hm,useActionState:Hm,useOptimistic:function(e){var n=Fn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Rf.bind(null,fe,!0,a),a.dispatch=n,[e,n]},useMemoCache:_f,useCacheRefresh:function(){return Fn().memoizedState=Dy.bind(null,fe)},useEffectEvent:function(e){var n=Fn(),a={impl:e};return n.memoizedState=a,function(){if((Oe&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Cf={readContext:Cn,use:Fl,useCallback:Qm,useContext:Cn,useEffect:Mf,useImperativeHandle:Km,useInsertionEffect:Ym,useLayoutEffect:qm,useMemo:Jm,useReducer:Hl,useRef:Xm,useState:function(){return Hl(ta)},useDebugValue:Ef,useDeferredValue:function(e,n){var a=rn();return $m(a,Ge.memoizedState,e,n)},useTransition:function(){var e=Hl(ta)[0],n=rn().memoizedState;return[typeof e=="boolean"?e:wo(e),n]},useSyncExternalStore:Cm,useId:ig,useHostTransitionStatus:Af,useFormState:Gm,useActionState:Gm,useOptimistic:function(e,n){var a=rn();return Om(a,Ge,e,n)},useMemoCache:_f,useCacheRefresh:ag};Cf.useEffectEvent=Wm;var cg={readContext:Cn,use:Fl,useCallback:Qm,useContext:Cn,useEffect:Mf,useImperativeHandle:Km,useInsertionEffect:Ym,useLayoutEffect:qm,useMemo:Jm,useReducer:xf,useRef:Xm,useState:function(){return xf(ta)},useDebugValue:Ef,useDeferredValue:function(e,n){var a=rn();return Ge===null?bf(a,e,n):$m(a,Ge.memoizedState,e,n)},useTransition:function(){var e=xf(ta)[0],n=rn().memoizedState;return[typeof e=="boolean"?e:wo(e),n]},useSyncExternalStore:Cm,useId:ig,useHostTransitionStatus:Af,useFormState:km,useActionState:km,useOptimistic:function(e,n){var a=rn();return Ge!==null?Om(a,Ge,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:_f,useCacheRefresh:ag};cg.useEffectEvent=Wm;function wf(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Df={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=si(),u=Ra(o);u.payload=n,a!=null&&(u.callback=a),n=Ca(e,u,o),n!==null&&(qn(n,e,o),To(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=si(),u=Ra(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ca(e,u,o),n!==null&&(qn(n,e,o),To(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=si(),o=Ra(a);o.tag=2,n!=null&&(o.callback=n),n=Ca(e,o,a),n!==null&&(qn(n,e,a),To(n,e,a))}};function ug(e,n,a,o,u,h,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,h,S):n.prototype&&n.prototype.isPureReactComponent?!_o(a,o)||!_o(u,h):!0}function fg(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&Df.enqueueReplaceState(n,n.state,null)}function Ss(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=g({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function hg(e){Sl(e)}function dg(e){console.error(e)}function pg(e){Sl(e)}function Xl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function mg(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Uf(e,n,a){return a=Ra(a),a.tag=3,a.payload={element:null},a.callback=function(){Xl(e,n)},a}function gg(e){return e=Ra(e),e.tag=3,e}function _g(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var h=o.value;e.payload=function(){return u(h)},e.callback=function(){mg(n,a,o)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){mg(n,a,o),typeof u!="function"&&(Oa===null?Oa=new Set([this]):Oa.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function Ly(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&tr(n,a,u,!0),a=ei.current,a!==null){switch(a.tag){case 31:case 13:return mi===null?nc():a.alternate===null&&en===0&&(en=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Ul?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),nh(e,o,u)),!1;case 22:return a.flags|=65536,o===Ul?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),nh(e,o,u)),!1}throw Error(s(435,a.tag))}return nh(e,o,u),nc(),!1}if(be)return n=ei.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Zu&&(e=Error(s(422),{cause:o}),yo(fi(e,a)))):(o!==Zu&&(n=Error(s(423),{cause:o}),yo(fi(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=fi(o,a),u=Uf(e.stateNode,o,u),of(e,u),en!==4&&(en=2)),!1;var h=Error(s(520),{cause:o});if(h=fi(h,a),Fo===null?Fo=[h]:Fo.push(h),en!==4&&(en=2),n===null)return!0;o=fi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=Uf(a.stateNode,o,e),of(a,e),!1;case 1:if(n=a.type,h=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Oa===null||!Oa.has(h))))return a.flags|=65536,u&=-u,a.lanes|=u,u=gg(u),_g(u,e,a,o),of(a,u),!1}a=a.return}while(a!==null);return!1}var Lf=Error(s(461)),un=!1;function wn(e,n,a,o){n.child=e===null?Sm(n,null,a,o):xs(n,e.child,a,o)}function vg(e,n,a,o,u){a=a.render;var h=n.ref;if("ref"in o){var S={};for(var A in o)A!=="ref"&&(S[A]=o[A])}else S=o;return ms(n),o=df(e,n,a,S,h,u),A=pf(),e!==null&&!un?(mf(e,n,u),ea(e,n,u)):(be&&A&&Yu(n),n.flags|=1,wn(e,n,o,u),n.child)}function xg(e,n,a,o,u){if(e===null){var h=a.type;return typeof h=="function"&&!Xu(h)&&h.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=h,yg(e,n,h,o,u)):(e=Tl(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(h=e.child,!Hf(e,u)){var S=h.memoizedProps;if(a=a.compare,a=a!==null?a:_o,a(S,o)&&e.ref===n.ref)return ea(e,n,u)}return n.flags|=1,e=Zi(h,o),e.ref=n.ref,e.return=n,n.child=e}function yg(e,n,a,o,u){if(e!==null){var h=e.memoizedProps;if(_o(h,o)&&e.ref===n.ref)if(un=!1,n.pendingProps=o=h,Hf(e,u))(e.flags&131072)!==0&&(un=!0);else return n.lanes=e.lanes,ea(e,n,u)}return Nf(e,n,a,o,u)}function Sg(e,n,a,o){var u=o.children,h=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(h=h!==null?h.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~h}else o=0,n.child=null;return Mg(e,n,h,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&wl(n,h!==null?h.cachePool:null),h!==null?bm(n,h):cf(),Tm(n);else return o=n.lanes=536870912,Mg(e,n,h!==null?h.baseLanes|a:a,a,o)}else h!==null?(wl(n,h.cachePool),bm(n,h),Da(),n.memoizedState=null):(e!==null&&wl(n,null),cf(),Da());return wn(e,n,u,a),n.child}function Lo(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Mg(e,n,a,o,u){var h=nf();return h=h===null?null:{parent:ln._currentValue,pool:h},n.memoizedState={baseLanes:a,cachePool:h},e!==null&&wl(n,null),cf(),Tm(n),e!==null&&tr(e,n,o,!0),n.childLanes=u,null}function jl(e,n){return n=Yl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Eg(e,n,a){return xs(n,e.child,null,a),e=jl(n,n.pendingProps),e.flags|=2,ni(n),n.memoizedState=null,e}function Ny(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(be){if(o.mode==="hidden")return e=jl(n,o),n.lanes=536870912,Lo(null,e);if(ff(n),(e=Ze)?(e=z0(e,pi),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ma!==null?{id:zi,overflow:Pi}:null,retryLane:536870912,hydrationErrors:null},a=rm(e),a.return=n,n.child=a,Rn=n,Ze=null)):e=null,e===null)throw ba(n);return n.lanes=536870912,null}return jl(n,o)}var h=e.memoizedState;if(h!==null){var S=h.dehydrated;if(ff(n),u)if(n.flags&256)n.flags&=-257,n=Eg(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(un||tr(e,n,a,!1),u=(a&e.childLanes)!==0,un||u){if(o=Ye,o!==null&&(S=Ni(o,a),S!==0&&S!==h.retryLane))throw h.retryLane=S,fs(e,S),qn(o,e,S),Lf;nc(),n=Eg(e,n,a)}else e=h.treeContext,Ze=gi(S.nextSibling),Rn=n,be=!0,Ea=null,pi=!1,e!==null&&cm(n,e),n=jl(n,o),n.flags|=4096;return n}return e=Zi(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Wl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Nf(e,n,a,o,u){return ms(n),a=df(e,n,a,o,void 0,u),o=pf(),e!==null&&!un?(mf(e,n,u),ea(e,n,u)):(be&&o&&Yu(n),n.flags|=1,wn(e,n,a,u),n.child)}function bg(e,n,a,o,u,h){return ms(n),n.updateQueue=null,a=Rm(n,o,a,u),Am(e),o=pf(),e!==null&&!un?(mf(e,n,h),ea(e,n,h)):(be&&o&&Yu(n),n.flags|=1,wn(e,n,a,h),n.child)}function Tg(e,n,a,o,u){if(ms(n),n.stateNode===null){var h=Ks,S=a.contextType;typeof S=="object"&&S!==null&&(h=Cn(S)),h=new a(o,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=Df,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=o,h.state=n.memoizedState,h.refs={},sf(n),S=a.contextType,h.context=typeof S=="object"&&S!==null?Cn(S):Ks,h.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(wf(n,a,S,o),h.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(S=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),S!==h.state&&Df.enqueueReplaceState(h,h.state,null),Ro(n,o,h,u),Ao(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){h=n.stateNode;var A=n.memoizedProps,H=Ss(a,A);h.props=H;var nt=h.context,dt=a.contextType;S=Ks,typeof dt=="object"&&dt!==null&&(S=Cn(dt));var vt=a.getDerivedStateFromProps;dt=typeof vt=="function"||typeof h.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,dt||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(A||nt!==S)&&fg(n,h,o,S),Aa=!1;var at=n.memoizedState;h.state=at,Ro(n,o,h,u),Ao(),nt=n.memoizedState,A||at!==nt||Aa?(typeof vt=="function"&&(wf(n,a,vt,o),nt=n.memoizedState),(H=Aa||ug(n,a,H,o,at,nt,S))?(dt||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=nt),h.props=o,h.state=nt,h.context=S,o=H):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{h=n.stateNode,rf(e,n),S=n.memoizedProps,dt=Ss(a,S),h.props=dt,vt=n.pendingProps,at=h.context,nt=a.contextType,H=Ks,typeof nt=="object"&&nt!==null&&(H=Cn(nt)),A=a.getDerivedStateFromProps,(nt=typeof A=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(S!==vt||at!==H)&&fg(n,h,o,H),Aa=!1,at=n.memoizedState,h.state=at,Ro(n,o,h,u),Ao();var lt=n.memoizedState;S!==vt||at!==lt||Aa||e!==null&&e.dependencies!==null&&Rl(e.dependencies)?(typeof A=="function"&&(wf(n,a,A,o),lt=n.memoizedState),(dt=Aa||ug(n,a,dt,o,at,lt,H)||e!==null&&e.dependencies!==null&&Rl(e.dependencies))?(nt||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,lt,H),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,lt,H)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||S===e.memoizedProps&&at===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&at===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=lt),h.props=o,h.state=lt,h.context=H,o=dt):(typeof h.componentDidUpdate!="function"||S===e.memoizedProps&&at===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&at===e.memoizedState||(n.flags|=1024),o=!1)}return h=o,Wl(e,n),o=(n.flags&128)!==0,h||o?(h=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,e!==null&&o?(n.child=xs(n,e.child,null,u),n.child=xs(n,null,a,u)):wn(e,n,a,u),n.memoizedState=h.state,e=n.child):e=ea(e,n,u),e}function Ag(e,n,a,o){return ds(),n.flags|=256,wn(e,n,a,o),n.child}var Of={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function zf(e){return{baseLanes:e,cachePool:mm()}}function Pf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ai),e}function Rg(e,n,a){var o=n.pendingProps,u=!1,h=(n.flags&128)!==0,S;if((S=h)||(S=e!==null&&e.memoizedState===null?!1:(sn.current&2)!==0),S&&(u=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,e===null){if(be){if(u?wa(n):Da(),(e=Ze)?(e=z0(e,pi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ma!==null?{id:zi,overflow:Pi}:null,retryLane:536870912,hydrationErrors:null},a=rm(e),a.return=n,n.child=a,Rn=n,Ze=null)):e=null,e===null)throw ba(n);return vh(e)?n.lanes=32:n.lanes=536870912,null}var A=o.children;return o=o.fallback,u?(Da(),u=n.mode,A=Yl({mode:"hidden",children:A},u),o=hs(o,u,a,null),A.return=n,o.return=n,A.sibling=o,n.child=A,o=n.child,o.memoizedState=zf(a),o.childLanes=Pf(e,S,a),n.memoizedState=Of,Lo(null,o)):(wa(n),Bf(n,A))}var H=e.memoizedState;if(H!==null&&(A=H.dehydrated,A!==null)){if(h)n.flags&256?(wa(n),n.flags&=-257,n=If(e,n,a)):n.memoizedState!==null?(Da(),n.child=e.child,n.flags|=128,n=null):(Da(),A=o.fallback,u=n.mode,o=Yl({mode:"visible",children:o.children},u),A=hs(A,u,a,null),A.flags|=2,o.return=n,A.return=n,o.sibling=A,n.child=o,xs(n,e.child,null,a),o=n.child,o.memoizedState=zf(a),o.childLanes=Pf(e,S,a),n.memoizedState=Of,n=Lo(null,o));else if(wa(n),vh(A)){if(S=A.nextSibling&&A.nextSibling.dataset,S)var nt=S.dgst;S=nt,o=Error(s(419)),o.stack="",o.digest=S,yo({value:o,source:null,stack:null}),n=If(e,n,a)}else if(un||tr(e,n,a,!1),S=(a&e.childLanes)!==0,un||S){if(S=Ye,S!==null&&(o=Ni(S,a),o!==0&&o!==H.retryLane))throw H.retryLane=o,fs(e,o),qn(S,e,o),Lf;_h(A)||nc(),n=If(e,n,a)}else _h(A)?(n.flags|=192,n.child=e.child,n=null):(e=H.treeContext,Ze=gi(A.nextSibling),Rn=n,be=!0,Ea=null,pi=!1,e!==null&&cm(n,e),n=Bf(n,o.children),n.flags|=4096);return n}return u?(Da(),A=o.fallback,u=n.mode,H=e.child,nt=H.sibling,o=Zi(H,{mode:"hidden",children:o.children}),o.subtreeFlags=H.subtreeFlags&65011712,nt!==null?A=Zi(nt,A):(A=hs(A,u,a,null),A.flags|=2),A.return=n,o.return=n,o.sibling=A,n.child=o,Lo(null,o),o=n.child,A=e.child.memoizedState,A===null?A=zf(a):(u=A.cachePool,u!==null?(H=ln._currentValue,u=u.parent!==H?{parent:H,pool:H}:u):u=mm(),A={baseLanes:A.baseLanes|a,cachePool:u}),o.memoizedState=A,o.childLanes=Pf(e,S,a),n.memoizedState=Of,Lo(e.child,o)):(wa(n),a=e.child,e=a.sibling,a=Zi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(S=n.deletions,S===null?(n.deletions=[e],n.flags|=16):S.push(e)),n.child=a,n.memoizedState=null,a)}function Bf(e,n){return n=Yl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Yl(e,n){return e=ti(22,e,null,n),e.lanes=0,e}function If(e,n,a){return xs(n,e.child,null,a),e=Bf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Cg(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Ju(e.return,n,a)}function Ff(e,n,a,o,u,h){var S=e.memoizedState;S===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:h}:(S.isBackwards=n,S.rendering=null,S.renderingStartTime=0,S.last=o,S.tail=a,S.tailMode=u,S.treeForkCount=h)}function wg(e,n,a){var o=n.pendingProps,u=o.revealOrder,h=o.tail;o=o.children;var S=sn.current,A=(S&2)!==0;if(A?(S=S&1|2,n.flags|=128):S&=1,xt(sn,S),wn(e,n,o,a),o=be?xo:0,!A&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Cg(e,a,n);else if(e.tag===19)Cg(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&zl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Ff(n,!1,u,a,h,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&zl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Ff(n,!0,a,null,h,o);break;case"together":Ff(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ea(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Na|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(tr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=Zi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Zi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Hf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Rl(e)))}function Oy(e,n,a){switch(n.tag){case 3:Ut(n,n.stateNode.containerInfo),Ta(n,ln,e.memoizedState.cache),ds();break;case 27:case 5:ee(n);break;case 4:Ut(n,n.stateNode.containerInfo);break;case 10:Ta(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,ff(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(wa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Rg(e,n,a):(wa(n),e=ea(e,n,a),e!==null?e.sibling:null);wa(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(tr(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return wg(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),xt(sn,sn.current),o)break;return null;case 22:return n.lanes=0,Sg(e,n,a,n.pendingProps);case 24:Ta(n,ln,e.memoizedState.cache)}return ea(e,n,a)}function Dg(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)un=!0;else{if(!Hf(e,a)&&(n.flags&128)===0)return un=!1,Oy(e,n,a);un=(e.flags&131072)!==0}else un=!1,be&&(n.flags&1048576)!==0&&lm(n,xo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=_s(n.elementType),n.type=e,typeof e=="function")Xu(e)?(o=Ss(e,o),n.tag=1,n=Tg(null,n,e,o,a)):(n.tag=0,n=Nf(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===U){n.tag=11,n=vg(null,n,e,o,a);break t}else if(u===P){n.tag=14,n=xg(null,n,e,o,a);break t}}throw n=gt(e)||e,Error(s(306,n,""))}}return n;case 0:return Nf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Ss(o,n.pendingProps),Tg(e,n,o,u,a);case 3:t:{if(Ut(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var h=n.memoizedState;u=h.element,rf(e,n),Ro(n,o,null,a);var S=n.memoizedState;if(o=S.cache,Ta(n,ln,o),o!==h.cache&&$u(n,[ln],a,!0),Ao(),o=S.element,h.isDehydrated)if(h={element:o,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=Ag(e,n,o,a);break t}else if(o!==u){u=fi(Error(s(424)),n),yo(u),n=Ag(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ze=gi(e.firstChild),Rn=n,be=!0,Ea=null,pi=!0,a=Sm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(ds(),o===u){n=ea(e,n,a);break t}wn(e,n,o,a)}n=n.child}return n;case 26:return Wl(e,n),e===null?(a=G0(n.type,null,n.pendingProps,null))?n.memoizedState=a:be||(a=n.type,e=n.pendingProps,o=cc(Tt.current).createElement(a),o[$e]=n,o[An]=e,Dn(o,a,e),Et(o),n.stateNode=o):n.memoizedState=G0(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return ee(n),e===null&&be&&(o=n.stateNode=I0(n.type,n.pendingProps,Tt.current),Rn=n,pi=!0,u=Ze,Ia(n.type)?(xh=u,Ze=gi(o.firstChild)):Ze=u),wn(e,n,n.pendingProps.children,a),Wl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&be&&((u=o=Ze)&&(o=uS(o,n.type,n.pendingProps,pi),o!==null?(n.stateNode=o,Rn=n,Ze=gi(o.firstChild),pi=!1,u=!0):u=!1),u||ba(n)),ee(n),u=n.type,h=n.pendingProps,S=e!==null?e.memoizedProps:null,o=h.children,ph(u,h)?o=null:S!==null&&ph(u,S)&&(n.flags|=32),n.memoizedState!==null&&(u=df(e,n,Ty,null,null,a),Yo._currentValue=u),Wl(e,n),wn(e,n,o,a),n.child;case 6:return e===null&&be&&((e=a=Ze)&&(a=fS(a,n.pendingProps,pi),a!==null?(n.stateNode=a,Rn=n,Ze=null,e=!0):e=!1),e||ba(n)),null;case 13:return Rg(e,n,a);case 4:return Ut(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=xs(n,null,o,a):wn(e,n,o,a),n.child;case 11:return vg(e,n,n.type,n.pendingProps,a);case 7:return wn(e,n,n.pendingProps,a),n.child;case 8:return wn(e,n,n.pendingProps.children,a),n.child;case 12:return wn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Ta(n,n.type,o.value),wn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,ms(n),u=Cn(u),o=o(u),n.flags|=1,wn(e,n,o,a),n.child;case 14:return xg(e,n,n.type,n.pendingProps,a);case 15:return yg(e,n,n.type,n.pendingProps,a);case 19:return wg(e,n,a);case 31:return Ny(e,n,a);case 22:return Sg(e,n,a,n.pendingProps);case 24:return ms(n),o=Cn(ln),e===null?(u=nf(),u===null&&(u=Ye,h=tf(),u.pooledCache=h,h.refCount++,h!==null&&(u.pooledCacheLanes|=a),u=h),n.memoizedState={parent:o,cache:u},sf(n),Ta(n,ln,u)):((e.lanes&a)!==0&&(rf(e,n),Ro(n,null,null,a),Ao()),u=e.memoizedState,h=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ta(n,ln,o)):(o=h.cache,Ta(n,ln,o),o!==u.cache&&$u(n,[ln],a,!0))),wn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function na(e){e.flags|=4}function Gf(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(i0())e.flags|=8192;else throw vs=Ul,af}else e.flags&=-16777217}function Ug(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!W0(n))if(i0())e.flags|=8192;else throw vs=Ul,af}function ql(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?pn():536870912,e.lanes|=n,hr|=n)}function No(e,n){if(!be)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ke(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function zy(e,n,a){var o=n.pendingProps;switch(qu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(n),null;case 1:return Ke(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Ji(ln),Ft(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&($s(n)?na(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Ku())),Ke(n),null;case 26:var u=n.type,h=n.memoizedState;return e===null?(na(n),h!==null?(Ke(n),Ug(n,h)):(Ke(n),Gf(n,u,null,o,a))):h?h!==e.memoizedState?(na(n),Ke(n),Ug(n,h)):(Ke(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&na(n),Ke(n),Gf(n,u,e,o,a)),null;case 27:if(Te(n),a=Tt.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&na(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Ke(n),null}e=q.current,$s(n)?um(n):(e=I0(u,o,a),n.stateNode=e,na(n))}return Ke(n),null;case 5:if(Te(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&na(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Ke(n),null}if(h=q.current,$s(n))um(n);else{var S=cc(Tt.current);switch(h){case 1:h=S.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:h=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":h=S.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":h=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":h=S.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof o.is=="string"?S.createElement("select",{is:o.is}):S.createElement("select"),o.multiple?h.multiple=!0:o.size&&(h.size=o.size);break;default:h=typeof o.is=="string"?S.createElement(u,{is:o.is}):S.createElement(u)}}h[$e]=n,h[An]=o;t:for(S=n.child;S!==null;){if(S.tag===5||S.tag===6)h.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===n)break t;for(;S.sibling===null;){if(S.return===null||S.return===n)break t;S=S.return}S.sibling.return=S.return,S=S.sibling}n.stateNode=h;t:switch(Dn(h,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&na(n)}}return Ke(n),Gf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&na(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=Tt.current,$s(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=Rn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[$e]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||R0(e.nodeValue,a)),e||ba(n,!0)}else e=cc(e).createTextNode(o),e[$e]=n,n.stateNode=e}return Ke(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=$s(n),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[$e]=n}else ds(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),e=!1}else a=Ku(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(ni(n),n):(ni(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Ke(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=$s(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[$e]=n}else ds(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),u=!1}else u=Ku(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ni(n),n):(ni(n),null)}return ni(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),h=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),ql(n,n.updateQueue),Ke(n),null);case 4:return Ft(),e===null&&ch(n.stateNode.containerInfo),Ke(n),null;case 10:return Ji(n.type),Ke(n),null;case 19:if($(sn),o=n.memoizedState,o===null)return Ke(n),null;if(u=(n.flags&128)!==0,h=o.rendering,h===null)if(u)No(o,!1);else{if(en!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(h=zl(e),h!==null){for(n.flags|=128,No(o,!1),e=h.updateQueue,n.updateQueue=e,ql(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)sm(a,e),a=a.sibling;return xt(sn,sn.current&1|2),be&&Ki(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&ut()>$l&&(n.flags|=128,u=!0,No(o,!1),n.lanes=4194304)}else{if(!u)if(e=zl(h),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,ql(n,e),No(o,!0),o.tail===null&&o.tailMode==="hidden"&&!h.alternate&&!be)return Ke(n),null}else 2*ut()-o.renderingStartTime>$l&&a!==536870912&&(n.flags|=128,u=!0,No(o,!1),n.lanes=4194304);o.isBackwards?(h.sibling=n.child,n.child=h):(e=o.last,e!==null?e.sibling=h:n.child=h,o.last=h)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=ut(),e.sibling=null,a=sn.current,xt(sn,u?a&1|2:a&1),be&&Ki(n,o.treeForkCount),e):(Ke(n),null);case 22:case 23:return ni(n),uf(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Ke(n),n.subtreeFlags&6&&(n.flags|=8192)):Ke(n),a=n.updateQueue,a!==null&&ql(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&$(gs),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ji(ln),Ke(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Py(e,n){switch(qu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Ji(ln),Ft(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Te(n),null;case 31:if(n.memoizedState!==null){if(ni(n),n.alternate===null)throw Error(s(340));ds()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(ni(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));ds()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return $(sn),null;case 4:return Ft(),null;case 10:return Ji(n.type),null;case 22:case 23:return ni(n),uf(),e!==null&&$(gs),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Ji(ln),null;case 25:return null;default:return null}}function Lg(e,n){switch(qu(n),n.tag){case 3:Ji(ln),Ft();break;case 26:case 27:case 5:Te(n);break;case 4:Ft();break;case 31:n.memoizedState!==null&&ni(n);break;case 13:ni(n);break;case 19:$(sn);break;case 10:Ji(n.type);break;case 22:case 23:ni(n),uf(),e!==null&&$(gs);break;case 24:Ji(ln)}}function Oo(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var h=a.create,S=a.inst;o=h(),S.destroy=o}a=a.next}while(a!==u)}}catch(A){Be(n,n.return,A)}}function Ua(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var h=u.next;o=h;do{if((o.tag&e)===e){var S=o.inst,A=S.destroy;if(A!==void 0){S.destroy=void 0,u=n;var H=a,nt=A;try{nt()}catch(dt){Be(u,H,dt)}}}o=o.next}while(o!==h)}}catch(dt){Be(n,n.return,dt)}}function Ng(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Em(n,a)}catch(o){Be(e,e.return,o)}}}function Og(e,n,a){a.props=Ss(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Be(e,n,o)}}function zo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Be(e,n,u)}}function Bi(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Be(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Be(e,n,u)}else a.current=null}function zg(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Be(e,e.return,u)}}function Vf(e,n,a){try{var o=e.stateNode;aS(o,e.type,a,n),o[An]=n}catch(u){Be(e,e.return,u)}}function Pg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ia(e.type)||e.tag===4}function kf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Pg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ia(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Xf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Yi));else if(o!==4&&(o===27&&Ia(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Xf(e,n,a),e=e.sibling;e!==null;)Xf(e,n,a),e=e.sibling}function Zl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Ia(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Zl(e,n,a),e=e.sibling;e!==null;)Zl(e,n,a),e=e.sibling}function Bg(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Dn(n,o,a),n[$e]=e,n[An]=a}catch(h){Be(e,e.return,h)}}var ia=!1,fn=!1,jf=!1,Ig=typeof WeakSet=="function"?WeakSet:Set,Mn=null;function By(e,n){if(e=e.containerInfo,hh=gc,e=Kp(e),Bu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,h=o.focusNode;o=o.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break t}var S=0,A=-1,H=-1,nt=0,dt=0,vt=e,at=null;e:for(;;){for(var lt;vt!==a||u!==0&&vt.nodeType!==3||(A=S+u),vt!==h||o!==0&&vt.nodeType!==3||(H=S+o),vt.nodeType===3&&(S+=vt.nodeValue.length),(lt=vt.firstChild)!==null;)at=vt,vt=lt;for(;;){if(vt===e)break e;if(at===a&&++nt===u&&(A=S),at===h&&++dt===o&&(H=S),(lt=vt.nextSibling)!==null)break;vt=at,at=vt.parentNode}vt=lt}a=A===-1||H===-1?null:{start:A,end:H}}else a=null}a=a||{start:0,end:0}}else a=null;for(dh={focusedElem:e,selectionRange:a},gc=!1,Mn=n;Mn!==null;)if(n=Mn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Mn=e;else for(;Mn!==null;){switch(n=Mn,h=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&h!==null){e=void 0,a=n,u=h.memoizedProps,h=h.memoizedState,o=a.stateNode;try{var kt=Ss(a.type,u);e=o.getSnapshotBeforeUpdate(kt,h),o.__reactInternalSnapshotBeforeUpdate=e}catch(te){Be(a,a.return,te)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)gh(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":gh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,Mn=e;break}Mn=n.return}}function Fg(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:sa(e,a),o&4&&Oo(5,a);break;case 1:if(sa(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(S){Be(a,a.return,S)}else{var u=Ss(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(S){Be(a,a.return,S)}}o&64&&Ng(a),o&512&&zo(a,a.return);break;case 3:if(sa(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Em(e,n)}catch(S){Be(a,a.return,S)}}break;case 27:n===null&&o&4&&Bg(a);case 26:case 5:sa(e,a),n===null&&o&4&&zg(a),o&512&&zo(a,a.return);break;case 12:sa(e,a);break;case 31:sa(e,a),o&4&&Vg(e,a);break;case 13:sa(e,a),o&4&&kg(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Wy.bind(null,a),hS(e,a))));break;case 22:if(o=a.memoizedState!==null||ia,!o){n=n!==null&&n.memoizedState!==null||fn,u=ia;var h=fn;ia=o,(fn=n)&&!h?ra(e,a,(a.subtreeFlags&8772)!==0):sa(e,a),ia=u,fn=h}break;case 30:break;default:sa(e,a)}}function Hg(e){var n=e.alternate;n!==null&&(e.alternate=null,Hg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&R(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Je=null,Xn=!1;function aa(e,n,a){for(a=a.child;a!==null;)Gg(e,n,a),a=a.sibling}function Gg(e,n,a){if(Zt&&typeof Zt.onCommitFiberUnmount=="function")try{Zt.onCommitFiberUnmount(qt,a)}catch{}switch(a.tag){case 26:fn||Bi(a,n),aa(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:fn||Bi(a,n);var o=Je,u=Xn;Ia(a.type)&&(Je=a.stateNode,Xn=!1),aa(e,n,a),Xo(a.stateNode),Je=o,Xn=u;break;case 5:fn||Bi(a,n);case 6:if(o=Je,u=Xn,Je=null,aa(e,n,a),Je=o,Xn=u,Je!==null)if(Xn)try{(Je.nodeType===9?Je.body:Je.nodeName==="HTML"?Je.ownerDocument.body:Je).removeChild(a.stateNode)}catch(h){Be(a,n,h)}else try{Je.removeChild(a.stateNode)}catch(h){Be(a,n,h)}break;case 18:Je!==null&&(Xn?(e=Je,N0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),yr(e)):N0(Je,a.stateNode));break;case 4:o=Je,u=Xn,Je=a.stateNode.containerInfo,Xn=!0,aa(e,n,a),Je=o,Xn=u;break;case 0:case 11:case 14:case 15:Ua(2,a,n),fn||Ua(4,a,n),aa(e,n,a);break;case 1:fn||(Bi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Og(a,n,o)),aa(e,n,a);break;case 21:aa(e,n,a);break;case 22:fn=(o=fn)||a.memoizedState!==null,aa(e,n,a),fn=o;break;default:aa(e,n,a)}}function Vg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{yr(e)}catch(a){Be(n,n.return,a)}}}function kg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{yr(e)}catch(a){Be(n,n.return,a)}}function Iy(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Ig),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Ig),n;default:throw Error(s(435,e.tag))}}function Kl(e,n){var a=Iy(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=Yy.bind(null,e,o);o.then(u,u)}})}function jn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],h=e,S=n,A=S;t:for(;A!==null;){switch(A.tag){case 27:if(Ia(A.type)){Je=A.stateNode,Xn=!1;break t}break;case 5:Je=A.stateNode,Xn=!1;break t;case 3:case 4:Je=A.stateNode.containerInfo,Xn=!0;break t}A=A.return}if(Je===null)throw Error(s(160));Gg(h,S,u),Je=null,Xn=!1,h=u.alternate,h!==null&&(h.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Xg(n,e),n=n.sibling}var Ti=null;function Xg(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:jn(n,e),Wn(e),o&4&&(Ua(3,e,e.return),Oo(3,e),Ua(5,e,e.return));break;case 1:jn(n,e),Wn(e),o&512&&(fn||a===null||Bi(a,a.return)),o&64&&ia&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Ti;if(jn(n,e),Wn(e),o&512&&(fn||a===null||Bi(a,a.return)),o&4){var h=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":h=u.getElementsByTagName("title")[0],(!h||h[rs]||h[$e]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=u.createElement(o),u.head.insertBefore(h,u.querySelector("head > title"))),Dn(h,o,a),h[$e]=e,Et(h),o=h;break t;case"link":var S=X0("link","href",u).get(o+(a.href||""));if(S){for(var A=0;A<S.length;A++)if(h=S[A],h.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&h.getAttribute("rel")===(a.rel==null?null:a.rel)&&h.getAttribute("title")===(a.title==null?null:a.title)&&h.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(A,1);break e}}h=u.createElement(o),Dn(h,o,a),u.head.appendChild(h);break;case"meta":if(S=X0("meta","content",u).get(o+(a.content||""))){for(A=0;A<S.length;A++)if(h=S[A],h.getAttribute("content")===(a.content==null?null:""+a.content)&&h.getAttribute("name")===(a.name==null?null:a.name)&&h.getAttribute("property")===(a.property==null?null:a.property)&&h.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&h.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(A,1);break e}}h=u.createElement(o),Dn(h,o,a),u.head.appendChild(h);break;default:throw Error(s(468,o))}h[$e]=e,Et(h),o=h}e.stateNode=o}else j0(u,e.type,e.stateNode);else e.stateNode=k0(u,o,e.memoizedProps);else h!==o?(h===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):h.count--,o===null?j0(u,e.type,e.stateNode):k0(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Vf(e,e.memoizedProps,a.memoizedProps)}break;case 27:jn(n,e),Wn(e),o&512&&(fn||a===null||Bi(a,a.return)),a!==null&&o&4&&Vf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(jn(n,e),Wn(e),o&512&&(fn||a===null||Bi(a,a.return)),e.flags&32){u=e.stateNode;try{ks(u,"")}catch(kt){Be(e,e.return,kt)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,Vf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(jf=!0);break;case 6:if(jn(n,e),Wn(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(kt){Be(e,e.return,kt)}}break;case 3:if(hc=null,u=Ti,Ti=uc(n.containerInfo),jn(n,e),Ti=u,Wn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{yr(n.containerInfo)}catch(kt){Be(e,e.return,kt)}jf&&(jf=!1,jg(e));break;case 4:o=Ti,Ti=uc(e.stateNode.containerInfo),jn(n,e),Wn(e),Ti=o;break;case 12:jn(n,e),Wn(e);break;case 31:jn(n,e),Wn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Kl(e,o)));break;case 13:jn(n,e),Wn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Jl=ut()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Kl(e,o)));break;case 22:u=e.memoizedState!==null;var H=a!==null&&a.memoizedState!==null,nt=ia,dt=fn;if(ia=nt||u,fn=dt||H,jn(n,e),fn=dt,ia=nt,Wn(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||H||ia||fn||Ms(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){H=a=n;try{if(h=H.stateNode,u)S=h.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{A=H.stateNode;var vt=H.memoizedProps.style,at=vt!=null&&vt.hasOwnProperty("display")?vt.display:null;A.style.display=at==null||typeof at=="boolean"?"":(""+at).trim()}}catch(kt){Be(H,H.return,kt)}}}else if(n.tag===6){if(a===null){H=n;try{H.stateNode.nodeValue=u?"":H.memoizedProps}catch(kt){Be(H,H.return,kt)}}}else if(n.tag===18){if(a===null){H=n;try{var lt=H.stateNode;u?O0(lt,!0):O0(H.stateNode,!1)}catch(kt){Be(H,H.return,kt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Kl(e,a))));break;case 19:jn(n,e),Wn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Kl(e,o)));break;case 30:break;case 21:break;default:jn(n,e),Wn(e)}}function Wn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(Pg(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,h=kf(e);Zl(e,h,u);break;case 5:var S=a.stateNode;a.flags&32&&(ks(S,""),a.flags&=-33);var A=kf(e);Zl(e,A,S);break;case 3:case 4:var H=a.stateNode.containerInfo,nt=kf(e);Xf(e,nt,H);break;default:throw Error(s(161))}}catch(dt){Be(e,e.return,dt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function jg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;jg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function sa(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Fg(e,n.alternate,n),n=n.sibling}function Ms(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ua(4,n,n.return),Ms(n);break;case 1:Bi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Og(n,n.return,a),Ms(n);break;case 27:Xo(n.stateNode);case 26:case 5:Bi(n,n.return),Ms(n);break;case 22:n.memoizedState===null&&Ms(n);break;case 30:Ms(n);break;default:Ms(n)}e=e.sibling}}function ra(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,h=n,S=h.flags;switch(h.tag){case 0:case 11:case 15:ra(u,h,a),Oo(4,h);break;case 1:if(ra(u,h,a),o=h,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(nt){Be(o,o.return,nt)}if(o=h,u=o.updateQueue,u!==null){var A=o.stateNode;try{var H=u.shared.hiddenCallbacks;if(H!==null)for(u.shared.hiddenCallbacks=null,u=0;u<H.length;u++)Mm(H[u],A)}catch(nt){Be(o,o.return,nt)}}a&&S&64&&Ng(h),zo(h,h.return);break;case 27:Bg(h);case 26:case 5:ra(u,h,a),a&&o===null&&S&4&&zg(h),zo(h,h.return);break;case 12:ra(u,h,a);break;case 31:ra(u,h,a),a&&S&4&&Vg(u,h);break;case 13:ra(u,h,a),a&&S&4&&kg(u,h);break;case 22:h.memoizedState===null&&ra(u,h,a),zo(h,h.return);break;case 30:break;default:ra(u,h,a)}n=n.sibling}}function Wf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&So(a))}function Yf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&So(e))}function Ai(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Wg(e,n,a,o),n=n.sibling}function Wg(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ai(e,n,a,o),u&2048&&Oo(9,n);break;case 1:Ai(e,n,a,o);break;case 3:Ai(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&So(e)));break;case 12:if(u&2048){Ai(e,n,a,o),e=n.stateNode;try{var h=n.memoizedProps,S=h.id,A=h.onPostCommit;typeof A=="function"&&A(S,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(H){Be(n,n.return,H)}}else Ai(e,n,a,o);break;case 31:Ai(e,n,a,o);break;case 13:Ai(e,n,a,o);break;case 23:break;case 22:h=n.stateNode,S=n.alternate,n.memoizedState!==null?h._visibility&2?Ai(e,n,a,o):Po(e,n):h._visibility&2?Ai(e,n,a,o):(h._visibility|=2,cr(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Wf(S,n);break;case 24:Ai(e,n,a,o),u&2048&&Yf(n.alternate,n);break;default:Ai(e,n,a,o)}}function cr(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var h=e,S=n,A=a,H=o,nt=S.flags;switch(S.tag){case 0:case 11:case 15:cr(h,S,A,H,u),Oo(8,S);break;case 23:break;case 22:var dt=S.stateNode;S.memoizedState!==null?dt._visibility&2?cr(h,S,A,H,u):Po(h,S):(dt._visibility|=2,cr(h,S,A,H,u)),u&&nt&2048&&Wf(S.alternate,S);break;case 24:cr(h,S,A,H,u),u&&nt&2048&&Yf(S.alternate,S);break;default:cr(h,S,A,H,u)}n=n.sibling}}function Po(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:Po(a,o),u&2048&&Wf(o.alternate,o);break;case 24:Po(a,o),u&2048&&Yf(o.alternate,o);break;default:Po(a,o)}n=n.sibling}}var Bo=8192;function ur(e,n,a){if(e.subtreeFlags&Bo)for(e=e.child;e!==null;)Yg(e,n,a),e=e.sibling}function Yg(e,n,a){switch(e.tag){case 26:ur(e,n,a),e.flags&Bo&&e.memoizedState!==null&&bS(a,Ti,e.memoizedState,e.memoizedProps);break;case 5:ur(e,n,a);break;case 3:case 4:var o=Ti;Ti=uc(e.stateNode.containerInfo),ur(e,n,a),Ti=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=Bo,Bo=16777216,ur(e,n,a),Bo=o):ur(e,n,a));break;default:ur(e,n,a)}}function qg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Io(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Mn=o,Kg(o,e)}qg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Zg(e),e=e.sibling}function Zg(e){switch(e.tag){case 0:case 11:case 15:Io(e),e.flags&2048&&Ua(9,e,e.return);break;case 3:Io(e);break;case 12:Io(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Ql(e)):Io(e);break;default:Io(e)}}function Ql(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Mn=o,Kg(o,e)}qg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ua(8,n,n.return),Ql(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Ql(n));break;default:Ql(n)}e=e.sibling}}function Kg(e,n){for(;Mn!==null;){var a=Mn;switch(a.tag){case 0:case 11:case 15:Ua(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:So(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Mn=o;else t:for(a=e;Mn!==null;){o=Mn;var u=o.sibling,h=o.return;if(Hg(o),o===a){Mn=null;break t}if(u!==null){u.return=h,Mn=u;break t}Mn=h}}}var Fy={getCacheForType:function(e){var n=Cn(ln),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Cn(ln).controller.signal}},Hy=typeof WeakMap=="function"?WeakMap:Map,Oe=0,Ye=null,xe=null,Me=0,Pe=0,ii=null,La=!1,fr=!1,qf=!1,oa=0,en=0,Na=0,Es=0,Zf=0,ai=0,hr=0,Fo=null,Yn=null,Kf=!1,Jl=0,Qg=0,$l=1/0,tc=null,Oa=null,gn=0,za=null,dr=null,la=0,Qf=0,Jf=null,Jg=null,Ho=0,$f=null;function si(){return(Oe&2)!==0&&Me!==0?Me&-Me:I.T!==null?sh():oo()}function $g(){if(ai===0)if((Me&536870912)===0||be){var e=ft;ft<<=1,(ft&3932160)===0&&(ft=262144),ai=e}else ai=536870912;return e=ei.current,e!==null&&(e.flags|=32),ai}function qn(e,n,a){(e===Ye&&(Pe===2||Pe===9)||e.cancelPendingCommit!==null)&&(pr(e,0),Pa(e,Me,ai,!1)),Tn(e,a),((Oe&2)===0||e!==Ye)&&(e===Ye&&((Oe&2)===0&&(Es|=a),en===4&&Pa(e,Me,ai,!1)),Ii(e))}function t0(e,n,a){if((Oe&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||ie(e,n),u=o?ky(e,n):eh(e,n,!0),h=o;do{if(u===0){fr&&!o&&Pa(e,n,0,!1);break}else{if(a=e.current.alternate,h&&!Gy(a)){u=eh(e,n,!1),h=!1;continue}if(u===2){if(h=n,e.errorRecoveryDisabledLanes&h)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;t:{var A=e;u=Fo;var H=A.current.memoizedState.isDehydrated;if(H&&(pr(A,S).flags|=256),S=eh(A,S,!1),S!==2){if(qf&&!H){A.errorRecoveryDisabledLanes|=h,Es|=h,u=4;break t}h=Yn,Yn=u,h!==null&&(Yn===null?Yn=h:Yn.push.apply(Yn,h))}u=S}if(h=!1,u!==2)continue}}if(u===1){pr(e,0),Pa(e,n,0,!0);break}t:{switch(o=e,h=u,h){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Pa(o,n,ai,!La);break t;case 2:Yn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Jl+300-ut(),10<u)){if(Pa(o,n,ai,!La),Ot(o,0,!0)!==0)break t;la=n,o.timeoutHandle=U0(e0.bind(null,o,a,Yn,tc,Kf,n,ai,Es,hr,La,h,"Throttled",-0,0),u);break t}e0(o,a,Yn,tc,Kf,n,ai,Es,hr,La,h,null,-0,0)}}break}while(!0);Ii(e)}function e0(e,n,a,o,u,h,S,A,H,nt,dt,vt,at,lt){if(e.timeoutHandle=-1,vt=n.subtreeFlags,vt&8192||(vt&16785408)===16785408){vt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Yi},Yg(n,h,vt);var kt=(h&62914560)===h?Jl-ut():(h&4194048)===h?Qg-ut():0;if(kt=TS(vt,kt),kt!==null){la=h,e.cancelPendingCommit=kt(c0.bind(null,e,n,h,a,o,u,S,A,H,dt,vt,null,at,lt)),Pa(e,h,S,!nt);return}}c0(e,n,h,a,o,u,S,A,H)}function Gy(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],h=u.getSnapshot;u=u.value;try{if(!$n(h(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Pa(e,n,a,o){n&=~Zf,n&=~Es,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var h=31-ne(u),S=1<<h;o[h]=-1,u&=~S}a!==0&&so(e,a,n)}function ec(){return(Oe&6)===0?(Go(0),!1):!0}function th(){if(xe!==null){if(Pe===0)var e=xe.return;else e=xe,Qi=ps=null,gf(e),ar=null,Eo=0,e=xe;for(;e!==null;)Lg(e.alternate,e),e=e.return;xe=null}}function pr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,oS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),la=0,th(),Ye=e,xe=a=Zi(e.current,null),Me=n,Pe=0,ii=null,La=!1,fr=ie(e,n),qf=!1,hr=ai=Zf=Es=Na=en=0,Yn=Fo=null,Kf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-ne(o),h=1<<u;n|=e[u],o&=~h}return oa=n,Ml(),a}function n0(e,n){fe=null,I.H=Uo,n===ir||n===Dl?(n=vm(),Pe=3):n===af?(n=vm(),Pe=4):Pe=n===Lf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ii=n,xe===null&&(en=1,Xl(e,fi(n,e.current)))}function i0(){var e=ei.current;return e===null?!0:(Me&4194048)===Me?mi===null:(Me&62914560)===Me||(Me&536870912)!==0?e===mi:!1}function a0(){var e=I.H;return I.H=Uo,e===null?Uo:e}function s0(){var e=I.A;return I.A=Fy,e}function nc(){en=4,La||(Me&4194048)!==Me&&ei.current!==null||(fr=!0),(Na&134217727)===0&&(Es&134217727)===0||Ye===null||Pa(Ye,Me,ai,!1)}function eh(e,n,a){var o=Oe;Oe|=2;var u=a0(),h=s0();(Ye!==e||Me!==n)&&(tc=null,pr(e,n)),n=!1;var S=en;t:do try{if(Pe!==0&&xe!==null){var A=xe,H=ii;switch(Pe){case 8:th(),S=6;break t;case 3:case 2:case 9:case 6:ei.current===null&&(n=!0);var nt=Pe;if(Pe=0,ii=null,mr(e,A,H,nt),a&&fr){S=0;break t}break;default:nt=Pe,Pe=0,ii=null,mr(e,A,H,nt)}}Vy(),S=en;break}catch(dt){n0(e,dt)}while(!0);return n&&e.shellSuspendCounter++,Qi=ps=null,Oe=o,I.H=u,I.A=h,xe===null&&(Ye=null,Me=0,Ml()),S}function Vy(){for(;xe!==null;)r0(xe)}function ky(e,n){var a=Oe;Oe|=2;var o=a0(),u=s0();Ye!==e||Me!==n?(tc=null,$l=ut()+500,pr(e,n)):fr=ie(e,n);t:do try{if(Pe!==0&&xe!==null){n=xe;var h=ii;e:switch(Pe){case 1:Pe=0,ii=null,mr(e,n,h,1);break;case 2:case 9:if(gm(h)){Pe=0,ii=null,o0(n);break}n=function(){Pe!==2&&Pe!==9||Ye!==e||(Pe=7),Ii(e)},h.then(n,n);break t;case 3:Pe=7;break t;case 4:Pe=5;break t;case 7:gm(h)?(Pe=0,ii=null,o0(n)):(Pe=0,ii=null,mr(e,n,h,7));break;case 5:var S=null;switch(xe.tag){case 26:S=xe.memoizedState;case 5:case 27:var A=xe;if(S?W0(S):A.stateNode.complete){Pe=0,ii=null;var H=A.sibling;if(H!==null)xe=H;else{var nt=A.return;nt!==null?(xe=nt,ic(nt)):xe=null}break e}}Pe=0,ii=null,mr(e,n,h,5);break;case 6:Pe=0,ii=null,mr(e,n,h,6);break;case 8:th(),en=6;break t;default:throw Error(s(462))}}Xy();break}catch(dt){n0(e,dt)}while(!0);return Qi=ps=null,I.H=o,I.A=u,Oe=a,xe!==null?0:(Ye=null,Me=0,Ml(),en)}function Xy(){for(;xe!==null&&!T();)r0(xe)}function r0(e){var n=Dg(e.alternate,e,oa);e.memoizedProps=e.pendingProps,n===null?ic(e):xe=n}function o0(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=bg(a,n,n.pendingProps,n.type,void 0,Me);break;case 11:n=bg(a,n,n.pendingProps,n.type.render,n.ref,Me);break;case 5:gf(n);default:Lg(a,n),n=xe=sm(n,oa),n=Dg(a,n,oa)}e.memoizedProps=e.pendingProps,n===null?ic(e):xe=n}function mr(e,n,a,o){Qi=ps=null,gf(n),ar=null,Eo=0;var u=n.return;try{if(Ly(e,u,n,a,Me)){en=1,Xl(e,fi(a,e.current)),xe=null;return}}catch(h){if(u!==null)throw xe=u,h;en=1,Xl(e,fi(a,e.current)),xe=null;return}n.flags&32768?(be||o===1?e=!0:fr||(Me&536870912)!==0?e=!1:(La=e=!0,(o===2||o===9||o===3||o===6)&&(o=ei.current,o!==null&&o.tag===13&&(o.flags|=16384))),l0(n,e)):ic(n)}function ic(e){var n=e;do{if((n.flags&32768)!==0){l0(n,La);return}e=n.return;var a=zy(n.alternate,n,oa);if(a!==null){xe=a;return}if(n=n.sibling,n!==null){xe=n;return}xe=n=e}while(n!==null);en===0&&(en=5)}function l0(e,n){do{var a=Py(e.alternate,e);if(a!==null){a.flags&=32767,xe=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){xe=e;return}xe=e=a}while(e!==null);en=6,xe=null}function c0(e,n,a,o,u,h,S,A,H){e.cancelPendingCommit=null;do ac();while(gn!==0);if((Oe&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(h=n.lanes|n.childLanes,h|=Vu,Mi(e,a,h,S,A,H),e===Ye&&(xe=Ye=null,Me=0),dr=n,za=e,la=a,Qf=h,Jf=u,Jg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,qy(wt,function(){return p0(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=I.T,I.T=null,u=Q.p,Q.p=2,S=Oe,Oe|=4;try{By(e,n,a)}finally{Oe=S,Q.p=u,I.T=o}}gn=1,u0(),f0(),h0()}}function u0(){if(gn===1){gn=0;var e=za,n=dr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=I.T,I.T=null;var o=Q.p;Q.p=2;var u=Oe;Oe|=4;try{Xg(n,e);var h=dh,S=Kp(e.containerInfo),A=h.focusedElem,H=h.selectionRange;if(S!==A&&A&&A.ownerDocument&&Zp(A.ownerDocument.documentElement,A)){if(H!==null&&Bu(A)){var nt=H.start,dt=H.end;if(dt===void 0&&(dt=nt),"selectionStart"in A)A.selectionStart=nt,A.selectionEnd=Math.min(dt,A.value.length);else{var vt=A.ownerDocument||document,at=vt&&vt.defaultView||window;if(at.getSelection){var lt=at.getSelection(),kt=A.textContent.length,te=Math.min(H.start,kt),ke=H.end===void 0?te:Math.min(H.end,kt);!lt.extend&&te>ke&&(S=ke,ke=te,te=S);var K=qp(A,te),V=qp(A,ke);if(K&&V&&(lt.rangeCount!==1||lt.anchorNode!==K.node||lt.anchorOffset!==K.offset||lt.focusNode!==V.node||lt.focusOffset!==V.offset)){var et=vt.createRange();et.setStart(K.node,K.offset),lt.removeAllRanges(),te>ke?(lt.addRange(et),lt.extend(V.node,V.offset)):(et.setEnd(V.node,V.offset),lt.addRange(et))}}}}for(vt=[],lt=A;lt=lt.parentNode;)lt.nodeType===1&&vt.push({element:lt,left:lt.scrollLeft,top:lt.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<vt.length;A++){var _t=vt[A];_t.element.scrollLeft=_t.left,_t.element.scrollTop=_t.top}}gc=!!hh,dh=hh=null}finally{Oe=u,Q.p=o,I.T=a}}e.current=n,gn=2}}function f0(){if(gn===2){gn=0;var e=za,n=dr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=I.T,I.T=null;var o=Q.p;Q.p=2;var u=Oe;Oe|=4;try{Fg(e,n.alternate,n)}finally{Oe=u,Q.p=o,I.T=a}}gn=3}}function h0(){if(gn===4||gn===3){gn=0,tt();var e=za,n=dr,a=la,o=Jg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?gn=5:(gn=0,dr=za=null,d0(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Oa=null),Gs(a),n=n.stateNode,Zt&&typeof Zt.onCommitFiberRoot=="function")try{Zt.onCommitFiberRoot(qt,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=I.T,u=Q.p,Q.p=2,I.T=null;try{for(var h=e.onRecoverableError,S=0;S<o.length;S++){var A=o[S];h(A.value,{componentStack:A.stack})}}finally{I.T=n,Q.p=u}}(la&3)!==0&&ac(),Ii(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===$f?Ho++:(Ho=0,$f=e):Ho=0,Go(0)}}function d0(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,So(n)))}function ac(){return u0(),f0(),h0(),p0()}function p0(){if(gn!==5)return!1;var e=za,n=Qf;Qf=0;var a=Gs(la),o=I.T,u=Q.p;try{Q.p=32>a?32:a,I.T=null,a=Jf,Jf=null;var h=za,S=la;if(gn=0,dr=za=null,la=0,(Oe&6)!==0)throw Error(s(331));var A=Oe;if(Oe|=4,Zg(h.current),Wg(h,h.current,S,a),Oe=A,Go(0,!1),Zt&&typeof Zt.onPostCommitFiberRoot=="function")try{Zt.onPostCommitFiberRoot(qt,h)}catch{}return!0}finally{Q.p=u,I.T=o,d0(e,n)}}function m0(e,n,a){n=fi(a,n),n=Uf(e.stateNode,n,2),e=Ca(e,n,2),e!==null&&(Tn(e,2),Ii(e))}function Be(e,n,a){if(e.tag===3)m0(e,e,a);else for(;n!==null;){if(n.tag===3){m0(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Oa===null||!Oa.has(o))){e=fi(a,e),a=gg(2),o=Ca(n,a,2),o!==null&&(_g(a,o,n,e),Tn(o,2),Ii(o));break}}n=n.return}}function nh(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new Hy;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(qf=!0,u.add(a),e=jy.bind(null,e,n,a),n.then(e,e))}function jy(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ye===e&&(Me&a)===a&&(en===4||en===3&&(Me&62914560)===Me&&300>ut()-Jl?(Oe&2)===0&&pr(e,0):Zf|=a,hr===Me&&(hr=0)),Ii(e)}function g0(e,n){n===0&&(n=pn()),e=fs(e,n),e!==null&&(Tn(e,n),Ii(e))}function Wy(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),g0(e,a)}function Yy(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),g0(e,a)}function qy(e,n){return Yt(e,n)}var sc=null,gr=null,ih=!1,rc=!1,ah=!1,Ba=0;function Ii(e){e!==gr&&e.next===null&&(gr===null?sc=gr=e:gr=gr.next=e),rc=!0,ih||(ih=!0,Ky())}function Go(e,n){if(!ah&&rc){ah=!0;do for(var a=!1,o=sc;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var h=0;else{var S=o.suspendedLanes,A=o.pingedLanes;h=(1<<31-ne(42|e)+1)-1,h&=u&~(S&~A),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(a=!0,y0(o,h))}else h=Me,h=Ot(o,o===Ye?h:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(h&3)===0||ie(o,h)||(a=!0,y0(o,h));o=o.next}while(a);ah=!1}}function Zy(){_0()}function _0(){rc=ih=!1;var e=0;Ba!==0&&rS()&&(e=Ba);for(var n=ut(),a=null,o=sc;o!==null;){var u=o.next,h=v0(o,n);h===0?(o.next=null,a===null?sc=u:a.next=u,u===null&&(gr=a)):(a=o,(e!==0||(h&3)!==0)&&(rc=!0)),o=u}gn!==0&&gn!==5||Go(e),Ba!==0&&(Ba=0)}function v0(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,h=e.pendingLanes&-62914561;0<h;){var S=31-ne(h),A=1<<S,H=u[S];H===-1?((A&a)===0||(A&o)!==0)&&(u[S]=Qe(A,n)):H<=n&&(e.expiredLanes|=A),h&=~A}if(n=Ye,a=Me,a=Ot(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Pe===2||Pe===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&w(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||ie(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&w(o),Gs(a)){case 2:case 8:a=Vt;break;case 32:a=wt;break;case 268435456:a=ge;break;default:a=wt}return o=x0.bind(null,e),a=Yt(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&w(o),e.callbackPriority=2,e.callbackNode=null,2}function x0(e,n){if(gn!==0&&gn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(ac()&&e.callbackNode!==a)return null;var o=Me;return o=Ot(e,e===Ye?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(t0(e,o,n),v0(e,ut()),e.callbackNode!=null&&e.callbackNode===a?x0.bind(null,e):null)}function y0(e,n){if(ac())return null;t0(e,n,!0)}function Ky(){lS(function(){(Oe&6)!==0?Yt(pt,Zy):_0()})}function sh(){if(Ba===0){var e=er;e===0&&(e=Lt,Lt<<=1,(Lt&261888)===0&&(Lt=256)),Ba=e}return Ba}function S0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:pl(""+e)}function M0(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function Qy(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var h=S0((u[An]||null).action),S=o.submitter;S&&(n=(n=S[An]||null)?S0(n.formAction):S.getAttribute("formAction"),n!==null&&(h=n,S=null));var A=new vl("action","action",null,o,u);e.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Ba!==0){var H=S?M0(u,S):new FormData(u);Tf(a,{pending:!0,data:H,method:u.method,action:h},null,H)}}else typeof h=="function"&&(A.preventDefault(),H=S?M0(u,S):new FormData(u),Tf(a,{pending:!0,data:H,method:u.method,action:h},h,H))},currentTarget:u}]})}}for(var rh=0;rh<Gu.length;rh++){var oh=Gu[rh],Jy=oh.toLowerCase(),$y=oh[0].toUpperCase()+oh.slice(1);bi(Jy,"on"+$y)}bi($p,"onAnimationEnd"),bi(tm,"onAnimationIteration"),bi(em,"onAnimationStart"),bi("dblclick","onDoubleClick"),bi("focusin","onFocus"),bi("focusout","onBlur"),bi(my,"onTransitionRun"),bi(gy,"onTransitionStart"),bi(_y,"onTransitionCancel"),bi(nm,"onTransitionEnd"),$t("onMouseEnter",["mouseout","mouseover"]),$t("onMouseLeave",["mouseout","mouseover"]),$t("onPointerEnter",["pointerout","pointerover"]),$t("onPointerLeave",["pointerout","pointerover"]),Ht("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ht("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ht("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ht("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ht("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ht("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),tS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Vo));function E0(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var h=void 0;if(n)for(var S=o.length-1;0<=S;S--){var A=o[S],H=A.instance,nt=A.currentTarget;if(A=A.listener,H!==h&&u.isPropagationStopped())break t;h=A,u.currentTarget=nt;try{h(u)}catch(dt){Sl(dt)}u.currentTarget=null,h=H}else for(S=0;S<o.length;S++){if(A=o[S],H=A.instance,nt=A.currentTarget,A=A.listener,H!==h&&u.isPropagationStopped())break t;h=A,u.currentTarget=nt;try{h(u)}catch(dt){Sl(dt)}u.currentTarget=null,h=H}}}}function ye(e,n){var a=n[lo];a===void 0&&(a=n[lo]=new Set);var o=e+"__bubble";a.has(o)||(b0(n,e,2,!1),a.add(o))}function lh(e,n,a){var o=0;n&&(o|=4),b0(a,e,o,n)}var oc="_reactListening"+Math.random().toString(36).slice(2);function ch(e){if(!e[oc]){e[oc]=!0,zt.forEach(function(a){a!=="selectionchange"&&(tS.has(a)||lh(a,!1,e),lh(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[oc]||(n[oc]=!0,lh("selectionchange",!1,n))}}function b0(e,n,a,o){switch($0(n)){case 2:var u=CS;break;case 8:u=wS;break;default:u=bh}a=u.bind(null,n,a,e),u=void 0,!Cu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function uh(e,n,a,o,u){var h=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var S=o.tag;if(S===3||S===4){var A=o.stateNode.containerInfo;if(A===u)break;if(S===4)for(S=o.return;S!==null;){var H=S.tag;if((H===3||H===4)&&S.stateNode.containerInfo===u)return;S=S.return}for(;A!==null;){if(S=Y(A),S===null)return;if(H=S.tag,H===5||H===6||H===26||H===27){o=h=S;continue t}A=A.parentNode}}o=o.return}wp(function(){var nt=h,dt=Au(a),vt=[];t:{var at=im.get(e);if(at!==void 0){var lt=vl,kt=e;switch(e){case"keypress":if(gl(a)===0)break t;case"keydown":case"keyup":lt=Yx;break;case"focusin":kt="focus",lt=Lu;break;case"focusout":kt="blur",lt=Lu;break;case"beforeblur":case"afterblur":lt=Lu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":lt=Lp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":lt=zx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":lt=Kx;break;case $p:case tm:case em:lt=Ix;break;case nm:lt=Jx;break;case"scroll":case"scrollend":lt=Nx;break;case"wheel":lt=ty;break;case"copy":case"cut":case"paste":lt=Hx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":lt=Op;break;case"toggle":case"beforetoggle":lt=ny}var te=(n&4)!==0,ke=!te&&(e==="scroll"||e==="scrollend"),K=te?at!==null?at+"Capture":null:at;te=[];for(var V=nt,et;V!==null;){var _t=V;if(et=_t.stateNode,_t=_t.tag,_t!==5&&_t!==26&&_t!==27||et===null||K===null||(_t=co(V,K),_t!=null&&te.push(ko(V,_t,et))),ke)break;V=V.return}0<te.length&&(at=new lt(at,kt,null,a,dt),vt.push({event:at,listeners:te}))}}if((n&7)===0){t:{if(at=e==="mouseover"||e==="pointerover",lt=e==="mouseout"||e==="pointerout",at&&a!==Tu&&(kt=a.relatedTarget||a.fromElement)&&(Y(kt)||kt[ji]))break t;if((lt||at)&&(at=dt.window===dt?dt:(at=dt.ownerDocument)?at.defaultView||at.parentWindow:window,lt?(kt=a.relatedTarget||a.toElement,lt=nt,kt=kt?Y(kt):null,kt!==null&&(ke=c(kt),te=kt.tag,kt!==ke||te!==5&&te!==27&&te!==6)&&(kt=null)):(lt=null,kt=nt),lt!==kt)){if(te=Lp,_t="onMouseLeave",K="onMouseEnter",V="mouse",(e==="pointerout"||e==="pointerover")&&(te=Op,_t="onPointerLeave",K="onPointerEnter",V="pointer"),ke=lt==null?at:rt(lt),et=kt==null?at:rt(kt),at=new te(_t,V+"leave",lt,a,dt),at.target=ke,at.relatedTarget=et,_t=null,Y(dt)===nt&&(te=new te(K,V+"enter",kt,a,dt),te.target=et,te.relatedTarget=ke,_t=te),ke=_t,lt&&kt)e:{for(te=eS,K=lt,V=kt,et=0,_t=K;_t;_t=te(_t))et++;_t=0;for(var Jt=V;Jt;Jt=te(Jt))_t++;for(;0<et-_t;)K=te(K),et--;for(;0<_t-et;)V=te(V),_t--;for(;et--;){if(K===V||V!==null&&K===V.alternate){te=K;break e}K=te(K),V=te(V)}te=null}else te=null;lt!==null&&T0(vt,at,lt,te,!1),kt!==null&&ke!==null&&T0(vt,ke,kt,te,!0)}}t:{if(at=nt?rt(nt):window,lt=at.nodeName&&at.nodeName.toLowerCase(),lt==="select"||lt==="input"&&at.type==="file")var De=Vp;else if(Hp(at))if(kp)De=hy;else{De=uy;var Wt=cy}else lt=at.nodeName,!lt||lt.toLowerCase()!=="input"||at.type!=="checkbox"&&at.type!=="radio"?nt&&bu(nt.elementType)&&(De=Vp):De=fy;if(De&&(De=De(e,nt))){Gp(vt,De,a,dt);break t}Wt&&Wt(e,at,nt),e==="focusout"&&nt&&at.type==="number"&&nt.memoizedProps.value!=null&&mn(at,"number",at.value)}switch(Wt=nt?rt(nt):window,e){case"focusin":(Hp(Wt)||Wt.contentEditable==="true")&&(Ys=Wt,Iu=nt,vo=null);break;case"focusout":vo=Iu=Ys=null;break;case"mousedown":Fu=!0;break;case"contextmenu":case"mouseup":case"dragend":Fu=!1,Qp(vt,a,dt);break;case"selectionchange":if(py)break;case"keydown":case"keyup":Qp(vt,a,dt)}var he;if(Ou)t:{switch(e){case"compositionstart":var Ee="onCompositionStart";break t;case"compositionend":Ee="onCompositionEnd";break t;case"compositionupdate":Ee="onCompositionUpdate";break t}Ee=void 0}else Ws?Ip(e,a)&&(Ee="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Ee="onCompositionStart");Ee&&(zp&&a.locale!=="ko"&&(Ws||Ee!=="onCompositionStart"?Ee==="onCompositionEnd"&&Ws&&(he=Dp()):(Sa=dt,wu="value"in Sa?Sa.value:Sa.textContent,Ws=!0)),Wt=lc(nt,Ee),0<Wt.length&&(Ee=new Np(Ee,e,null,a,dt),vt.push({event:Ee,listeners:Wt}),he?Ee.data=he:(he=Fp(a),he!==null&&(Ee.data=he)))),(he=ay?sy(e,a):ry(e,a))&&(Ee=lc(nt,"onBeforeInput"),0<Ee.length&&(Wt=new Np("onBeforeInput","beforeinput",null,a,dt),vt.push({event:Wt,listeners:Ee}),Wt.data=he)),Qy(vt,e,nt,a,dt)}E0(vt,n)})}function ko(e,n,a){return{instance:e,listener:n,currentTarget:a}}function lc(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,h=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||h===null||(u=co(e,a),u!=null&&o.unshift(ko(e,u,h)),u=co(e,n),u!=null&&o.push(ko(e,u,h))),e.tag===3)return o;e=e.return}return[]}function eS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function T0(e,n,a,o,u){for(var h=n._reactName,S=[];a!==null&&a!==o;){var A=a,H=A.alternate,nt=A.stateNode;if(A=A.tag,H!==null&&H===o)break;A!==5&&A!==26&&A!==27||nt===null||(H=nt,u?(nt=co(a,h),nt!=null&&S.unshift(ko(a,nt,H))):u||(nt=co(a,h),nt!=null&&S.push(ko(a,nt,H)))),a=a.return}S.length!==0&&e.push({event:n,listeners:S})}var nS=/\r\n?/g,iS=/\u0000|\uFFFD/g;function A0(e){return(typeof e=="string"?e:""+e).replace(nS,`
`).replace(iS,"")}function R0(e,n){return n=A0(n),A0(e)===n}function Ve(e,n,a,o,u,h){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||ks(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&ks(e,""+o);break;case"className":We(e,"class",o);break;case"tabIndex":We(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":We(e,a,o);break;case"style":Rp(e,o,h);break;case"data":if(n!=="object"){We(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=pl(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(a==="formAction"?(n!=="input"&&Ve(e,n,"name",u.name,u,null),Ve(e,n,"formEncType",u.formEncType,u,null),Ve(e,n,"formMethod",u.formMethod,u,null),Ve(e,n,"formTarget",u.formTarget,u,null)):(Ve(e,n,"encType",u.encType,u,null),Ve(e,n,"method",u.method,u,null),Ve(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=pl(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Yi);break;case"onScroll":o!=null&&ye("scroll",e);break;case"onScrollEnd":o!=null&&ye("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=pl(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":ye("beforetoggle",e),ye("toggle",e),qe(e,"popover",o);break;case"xlinkActuate":ue(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":ue(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":ue(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":ue(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":ue(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":ue(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":ue(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":ue(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":ue(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":qe(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Ux.get(a)||a,qe(e,a,o))}}function fh(e,n,a,o,u,h){switch(a){case"style":Rp(e,o,h);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?ks(e,o):(typeof o=="number"||typeof o=="bigint")&&ks(e,""+o);break;case"onScroll":o!=null&&ye("scroll",e);break;case"onScrollEnd":o!=null&&ye("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Yi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Gt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),h=e[An]||null,h=h!=null?h[a]:null,typeof h=="function"&&e.removeEventListener(n,h,u),typeof o=="function")){typeof h!="function"&&h!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):qe(e,a,o)}}}function Dn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ye("error",e),ye("load",e);var o=!1,u=!1,h;for(h in a)if(a.hasOwnProperty(h)){var S=a[h];if(S!=null)switch(h){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ve(e,n,h,S,a,null)}}u&&Ve(e,n,"srcSet",a.srcSet,a,null),o&&Ve(e,n,"src",a.src,a,null);return;case"input":ye("invalid",e);var A=h=S=u=null,H=null,nt=null;for(o in a)if(a.hasOwnProperty(o)){var dt=a[o];if(dt!=null)switch(o){case"name":u=dt;break;case"type":S=dt;break;case"checked":H=dt;break;case"defaultChecked":nt=dt;break;case"value":h=dt;break;case"defaultValue":A=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(s(137,n));break;default:Ve(e,n,o,dt,a,null)}}In(e,h,A,H,nt,S,u,!1);return;case"select":ye("invalid",e),o=S=h=null;for(u in a)if(a.hasOwnProperty(u)&&(A=a[u],A!=null))switch(u){case"value":h=A;break;case"defaultValue":S=A;break;case"multiple":o=A;default:Ve(e,n,u,A,a,null)}n=h,a=S,e.multiple=!!o,n!=null?an(e,!!o,n,!1):a!=null&&an(e,!!o,a,!0);return;case"textarea":ye("invalid",e),h=u=o=null;for(S in a)if(a.hasOwnProperty(S)&&(A=a[S],A!=null))switch(S){case"value":o=A;break;case"defaultValue":u=A;break;case"children":h=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:Ve(e,n,S,A,a,null)}Oi(e,o,u,h);return;case"option":for(H in a)if(a.hasOwnProperty(H)&&(o=a[H],o!=null))switch(H){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Ve(e,n,H,o,a,null)}return;case"dialog":ye("beforetoggle",e),ye("toggle",e),ye("cancel",e),ye("close",e);break;case"iframe":case"object":ye("load",e);break;case"video":case"audio":for(o=0;o<Vo.length;o++)ye(Vo[o],e);break;case"image":ye("error",e),ye("load",e);break;case"details":ye("toggle",e);break;case"embed":case"source":case"link":ye("error",e),ye("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(nt in a)if(a.hasOwnProperty(nt)&&(o=a[nt],o!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ve(e,n,nt,o,a,null)}return;default:if(bu(n)){for(dt in a)a.hasOwnProperty(dt)&&(o=a[dt],o!==void 0&&fh(e,n,dt,o,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(o=a[A],o!=null&&Ve(e,n,A,o,a,null))}function aS(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,h=null,S=null,A=null,H=null,nt=null,dt=null;for(lt in a){var vt=a[lt];if(a.hasOwnProperty(lt)&&vt!=null)switch(lt){case"checked":break;case"value":break;case"defaultValue":H=vt;default:o.hasOwnProperty(lt)||Ve(e,n,lt,null,o,vt)}}for(var at in o){var lt=o[at];if(vt=a[at],o.hasOwnProperty(at)&&(lt!=null||vt!=null))switch(at){case"type":h=lt;break;case"name":u=lt;break;case"checked":nt=lt;break;case"defaultChecked":dt=lt;break;case"value":S=lt;break;case"defaultValue":A=lt;break;case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(s(137,n));break;default:lt!==vt&&Ve(e,n,at,lt,o,vt)}}Nn(e,S,A,H,nt,dt,h,u);return;case"select":lt=S=A=at=null;for(h in a)if(H=a[h],a.hasOwnProperty(h)&&H!=null)switch(h){case"value":break;case"multiple":lt=H;default:o.hasOwnProperty(h)||Ve(e,n,h,null,o,H)}for(u in o)if(h=o[u],H=a[u],o.hasOwnProperty(u)&&(h!=null||H!=null))switch(u){case"value":at=h;break;case"defaultValue":A=h;break;case"multiple":S=h;default:h!==H&&Ve(e,n,u,h,o,H)}n=A,a=S,o=lt,at!=null?an(e,!!a,at,!1):!!o!=!!a&&(n!=null?an(e,!!a,n,!0):an(e,!!a,a?[]:"",!1));return;case"textarea":lt=at=null;for(A in a)if(u=a[A],a.hasOwnProperty(A)&&u!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Ve(e,n,A,null,o,u)}for(S in o)if(u=o[S],h=a[S],o.hasOwnProperty(S)&&(u!=null||h!=null))switch(S){case"value":at=u;break;case"defaultValue":lt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==h&&Ve(e,n,S,u,o,h)}Vs(e,at,lt);return;case"option":for(var kt in a)if(at=a[kt],a.hasOwnProperty(kt)&&at!=null&&!o.hasOwnProperty(kt))switch(kt){case"selected":e.selected=!1;break;default:Ve(e,n,kt,null,o,at)}for(H in o)if(at=o[H],lt=a[H],o.hasOwnProperty(H)&&at!==lt&&(at!=null||lt!=null))switch(H){case"selected":e.selected=at&&typeof at!="function"&&typeof at!="symbol";break;default:Ve(e,n,H,at,o,lt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var te in a)at=a[te],a.hasOwnProperty(te)&&at!=null&&!o.hasOwnProperty(te)&&Ve(e,n,te,null,o,at);for(nt in o)if(at=o[nt],lt=a[nt],o.hasOwnProperty(nt)&&at!==lt&&(at!=null||lt!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":if(at!=null)throw Error(s(137,n));break;default:Ve(e,n,nt,at,o,lt)}return;default:if(bu(n)){for(var ke in a)at=a[ke],a.hasOwnProperty(ke)&&at!==void 0&&!o.hasOwnProperty(ke)&&fh(e,n,ke,void 0,o,at);for(dt in o)at=o[dt],lt=a[dt],!o.hasOwnProperty(dt)||at===lt||at===void 0&&lt===void 0||fh(e,n,dt,at,o,lt);return}}for(var K in a)at=a[K],a.hasOwnProperty(K)&&at!=null&&!o.hasOwnProperty(K)&&Ve(e,n,K,null,o,at);for(vt in o)at=o[vt],lt=a[vt],!o.hasOwnProperty(vt)||at===lt||at==null&&lt==null||Ve(e,n,vt,at,o,lt)}function C0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function sS(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],h=u.transferSize,S=u.initiatorType,A=u.duration;if(h&&A&&C0(S)){for(S=0,A=u.responseEnd,o+=1;o<a.length;o++){var H=a[o],nt=H.startTime;if(nt>A)break;var dt=H.transferSize,vt=H.initiatorType;dt&&C0(vt)&&(H=H.responseEnd,S+=dt*(H<A?1:(A-nt)/(H-nt)))}if(--o,n+=8*(h+S)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var hh=null,dh=null;function cc(e){return e.nodeType===9?e:e.ownerDocument}function w0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function D0(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function ph(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var mh=null;function rS(){var e=window.event;return e&&e.type==="popstate"?e===mh?!1:(mh=e,!0):(mh=null,!1)}var U0=typeof setTimeout=="function"?setTimeout:void 0,oS=typeof clearTimeout=="function"?clearTimeout:void 0,L0=typeof Promise=="function"?Promise:void 0,lS=typeof queueMicrotask=="function"?queueMicrotask:typeof L0<"u"?function(e){return L0.resolve(null).then(e).catch(cS)}:U0;function cS(e){setTimeout(function(){throw e})}function Ia(e){return e==="head"}function N0(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),yr(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Xo(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Xo(a);for(var h=a.firstChild;h;){var S=h.nextSibling,A=h.nodeName;h[rs]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&h.rel.toLowerCase()==="stylesheet"||a.removeChild(h),h=S}}else a==="body"&&Xo(e.ownerDocument.body);a=u}while(a);yr(n)}function O0(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function gh(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":gh(a),R(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function uS(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[rs])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(h=e.getAttribute("rel"),h==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(h!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(h=e.getAttribute("src"),(h!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&h&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var h=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===h)return e}else return e;if(e=gi(e.nextSibling),e===null)break}return null}function fS(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=gi(e.nextSibling),e===null))return null;return e}function z0(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=gi(e.nextSibling),e===null))return null;return e}function _h(e){return e.data==="$?"||e.data==="$~"}function vh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function hS(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function gi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var xh=null;function P0(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return gi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function B0(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function I0(e,n,a){switch(n=cc(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Xo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);R(e)}var _i=new Map,F0=new Set;function uc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ca=Q.d;Q.d={f:dS,r:pS,D:mS,C:gS,L:_S,m:vS,X:yS,S:xS,M:SS};function dS(){var e=ca.f(),n=ec();return e||n}function pS(e){var n=st(e);n!==null&&n.tag===5&&n.type==="form"?ng(n):ca.r(e)}var _r=typeof document>"u"?null:document;function H0(e,n,a){var o=_r;if(o&&typeof n=="string"&&n){var u=ve(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),F0.has(u)||(F0.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Dn(n,"link",e),Et(n),o.head.appendChild(n)))}}function mS(e){ca.D(e),H0("dns-prefetch",e,null)}function gS(e,n){ca.C(e,n),H0("preconnect",e,n)}function _S(e,n,a){ca.L(e,n,a);var o=_r;if(o&&e&&n){var u='link[rel="preload"][as="'+ve(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+ve(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+ve(a.imageSizes)+'"]')):u+='[href="'+ve(e)+'"]';var h=u;switch(n){case"style":h=vr(e);break;case"script":h=xr(e)}_i.has(h)||(e=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),_i.set(h,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(jo(h))||n==="script"&&o.querySelector(Wo(h))||(n=o.createElement("link"),Dn(n,"link",e),Et(n),o.head.appendChild(n)))}}function vS(e,n){ca.m(e,n);var a=_r;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+ve(o)+'"][href="'+ve(e)+'"]',h=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=xr(e)}if(!_i.has(h)&&(e=g({rel:"modulepreload",href:e},n),_i.set(h,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Wo(h)))return}o=a.createElement("link"),Dn(o,"link",e),Et(o),a.head.appendChild(o)}}}function xS(e,n,a){ca.S(e,n,a);var o=_r;if(o&&e){var u=Z(o).hoistableStyles,h=vr(e);n=n||"default";var S=u.get(h);if(!S){var A={loading:0,preload:null};if(S=o.querySelector(jo(h)))A.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},a),(a=_i.get(h))&&yh(e,a);var H=S=o.createElement("link");Et(H),Dn(H,"link",e),H._p=new Promise(function(nt,dt){H.onload=nt,H.onerror=dt}),H.addEventListener("load",function(){A.loading|=1}),H.addEventListener("error",function(){A.loading|=2}),A.loading|=4,fc(S,n,o)}S={type:"stylesheet",instance:S,count:1,state:A},u.set(h,S)}}}function yS(e,n){ca.X(e,n);var a=_r;if(a&&e){var o=Z(a).hoistableScripts,u=xr(e),h=o.get(u);h||(h=a.querySelector(Wo(u)),h||(e=g({src:e,async:!0},n),(n=_i.get(u))&&Sh(e,n),h=a.createElement("script"),Et(h),Dn(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function SS(e,n){ca.M(e,n);var a=_r;if(a&&e){var o=Z(a).hoistableScripts,u=xr(e),h=o.get(u);h||(h=a.querySelector(Wo(u)),h||(e=g({src:e,async:!0,type:"module"},n),(n=_i.get(u))&&Sh(e,n),h=a.createElement("script"),Et(h),Dn(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function G0(e,n,a,o){var u=(u=Tt.current)?uc(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=vr(a.href),a=Z(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=vr(a.href);var h=Z(u).hoistableStyles,S=h.get(e);if(S||(u=u.ownerDocument||u,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(e,S),(h=u.querySelector(jo(e)))&&!h._p&&(S.instance=h,S.state.loading=5),_i.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},_i.set(e,a),h||MS(u,e,a,S.state))),n&&o===null)throw Error(s(528,""));return S}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=xr(a),a=Z(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function vr(e){return'href="'+ve(e)+'"'}function jo(e){return'link[rel="stylesheet"]['+e+"]"}function V0(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function MS(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Dn(n,"link",a),Et(n),e.head.appendChild(n))}function xr(e){return'[src="'+ve(e)+'"]'}function Wo(e){return"script[async]"+e}function k0(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+ve(a.href)+'"]');if(o)return n.instance=o,Et(o),o;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),Et(o),Dn(o,"style",u),fc(o,a.precedence,e),n.instance=o;case"stylesheet":u=vr(a.href);var h=e.querySelector(jo(u));if(h)return n.state.loading|=4,n.instance=h,Et(h),h;o=V0(a),(u=_i.get(u))&&yh(o,u),h=(e.ownerDocument||e).createElement("link"),Et(h);var S=h;return S._p=new Promise(function(A,H){S.onload=A,S.onerror=H}),Dn(h,"link",o),n.state.loading|=4,fc(h,a.precedence,e),n.instance=h;case"script":return h=xr(a.src),(u=e.querySelector(Wo(h)))?(n.instance=u,Et(u),u):(o=a,(u=_i.get(h))&&(o=g({},a),Sh(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),Et(u),Dn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,fc(o,a.precedence,e));return n.instance}function fc(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,h=u,S=0;S<o.length;S++){var A=o[S];if(A.dataset.precedence===n)h=A;else if(h!==u)break}h?h.parentNode.insertBefore(e,h.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function yh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Sh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var hc=null;function X0(e,n,a){if(hc===null){var o=new Map,u=hc=new Map;u.set(a,o)}else u=hc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var h=a[u];if(!(h[rs]||h[$e]||e==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var S=h.getAttribute(n)||"";S=e+S;var A=o.get(S);A?A.push(h):o.set(S,[h])}}return o}function j0(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function ES(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function W0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function bS(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=vr(o.href),h=n.querySelector(jo(u));if(h){n=h._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=dc.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=h,Et(h);return}h=n.ownerDocument||n,o=V0(o),(u=_i.get(u))&&yh(o,u),h=h.createElement("link"),Et(h);var S=h;S._p=new Promise(function(A,H){S.onload=A,S.onerror=H}),Dn(h,"link",o),a.instance=h}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=dc.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Mh=0;function TS(e,n){return e.stylesheets&&e.count===0&&mc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&mc(e,e.stylesheets),e.unsuspend){var h=e.unsuspend;e.unsuspend=null,h()}},6e4+n);0<e.imgBytes&&Mh===0&&(Mh=62500*sS());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&mc(e,e.stylesheets),e.unsuspend)){var h=e.unsuspend;e.unsuspend=null,h()}},(e.imgBytes>Mh?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function dc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)mc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var pc=null;function mc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,pc=new Map,n.forEach(AS,e),pc=null,dc.call(e))}function AS(e,n){if(!(n.state.loading&4)){var a=pc.get(e);if(a)var o=a.get(null);else{a=new Map,pc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<u.length;h++){var S=u[h];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),o=S)}o&&a.set(null,o)}u=n.instance,S=u.getAttribute("data-precedence"),h=a.get(S)||o,h===o&&a.set(null,u),a.set(S,u),this.count++,o=dc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),h?h.parentNode.insertBefore(u,h.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Yo={$$typeof:N,Provider:null,Consumer:null,_currentValue:j,_currentValue2:j,_threadCount:0};function RS(e,n,a,o,u,h,S,A,H){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ae(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ae(0),this.hiddenUpdates=Ae(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=h,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=H,this.incompleteTransitions=new Map}function Y0(e,n,a,o,u,h,S,A,H,nt,dt,vt){return e=new RS(e,n,a,S,H,nt,dt,vt,A),n=1,h===!0&&(n|=24),h=ti(3,null,null,n),e.current=h,h.stateNode=e,n=tf(),n.refCount++,e.pooledCache=n,n.refCount++,h.memoizedState={element:o,isDehydrated:a,cache:n},sf(h),e}function q0(e){return e?(e=Ks,e):Ks}function Z0(e,n,a,o,u,h){u=q0(u),o.context===null?o.context=u:o.pendingContext=u,o=Ra(n),o.payload={element:a},h=h===void 0?null:h,h!==null&&(o.callback=h),a=Ca(e,o,n),a!==null&&(qn(a,e,n),To(a,e,n))}function K0(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Eh(e,n){K0(e,n),(e=e.alternate)&&K0(e,n)}function Q0(e){if(e.tag===13||e.tag===31){var n=fs(e,67108864);n!==null&&qn(n,e,67108864),Eh(e,67108864)}}function J0(e){if(e.tag===13||e.tag===31){var n=si();n=as(n);var a=fs(e,n);a!==null&&qn(a,e,n),Eh(e,n)}}var gc=!0;function CS(e,n,a,o){var u=I.T;I.T=null;var h=Q.p;try{Q.p=2,bh(e,n,a,o)}finally{Q.p=h,I.T=u}}function wS(e,n,a,o){var u=I.T;I.T=null;var h=Q.p;try{Q.p=8,bh(e,n,a,o)}finally{Q.p=h,I.T=u}}function bh(e,n,a,o){if(gc){var u=Th(o);if(u===null)uh(e,n,o,_c,a),t_(e,o);else if(US(u,e,n,a,o))o.stopPropagation();else if(t_(e,o),n&4&&-1<DS.indexOf(e)){for(;u!==null;){var h=st(u);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var S=Nt(h.pendingLanes);if(S!==0){var A=h;for(A.pendingLanes|=2,A.entangledLanes|=2;S;){var H=1<<31-ne(S);A.entanglements[1]|=H,S&=~H}Ii(h),(Oe&6)===0&&($l=ut()+500,Go(0))}}break;case 31:case 13:A=fs(h,2),A!==null&&qn(A,h,2),ec(),Eh(h,2)}if(h=Th(o),h===null&&uh(e,n,o,_c,a),h===u)break;u=h}u!==null&&o.stopPropagation()}else uh(e,n,o,null,a)}}function Th(e){return e=Au(e),Ah(e)}var _c=null;function Ah(e){if(_c=null,e=Y(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=f(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return _c=e,null}function $0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(yt()){case pt:return 2;case Vt:return 8;case wt:case Dt:return 32;case ge:return 268435456;default:return 32}default:return 32}}var Rh=!1,Fa=null,Ha=null,Ga=null,qo=new Map,Zo=new Map,Va=[],DS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function t_(e,n){switch(e){case"focusin":case"focusout":Fa=null;break;case"dragenter":case"dragleave":Ha=null;break;case"mouseover":case"mouseout":Ga=null;break;case"pointerover":case"pointerout":qo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zo.delete(n.pointerId)}}function Ko(e,n,a,o,u,h){return e===null||e.nativeEvent!==h?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:h,targetContainers:[u]},n!==null&&(n=st(n),n!==null&&Q0(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function US(e,n,a,o,u){switch(n){case"focusin":return Fa=Ko(Fa,e,n,a,o,u),!0;case"dragenter":return Ha=Ko(Ha,e,n,a,o,u),!0;case"mouseover":return Ga=Ko(Ga,e,n,a,o,u),!0;case"pointerover":var h=u.pointerId;return qo.set(h,Ko(qo.get(h)||null,e,n,a,o,u)),!0;case"gotpointercapture":return h=u.pointerId,Zo.set(h,Ko(Zo.get(h)||null,e,n,a,o,u)),!0}return!1}function e_(e){var n=Y(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){e.blockedOn=n,ss(e.priority,function(){J0(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,ss(e.priority,function(){J0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function vc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Th(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Tu=o,a.target.dispatchEvent(o),Tu=null}else return n=st(a),n!==null&&Q0(n),e.blockedOn=a,!1;n.shift()}return!0}function n_(e,n,a){vc(e)&&a.delete(n)}function LS(){Rh=!1,Fa!==null&&vc(Fa)&&(Fa=null),Ha!==null&&vc(Ha)&&(Ha=null),Ga!==null&&vc(Ga)&&(Ga=null),qo.forEach(n_),Zo.forEach(n_)}function xc(e,n){e.blockedOn===n&&(e.blockedOn=null,Rh||(Rh=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,LS)))}var yc=null;function i_(e){yc!==e&&(yc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){yc===e&&(yc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(Ah(o||a)===null)continue;break}var h=st(a);h!==null&&(e.splice(n,3),n-=3,Tf(h,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function yr(e){function n(H){return xc(H,e)}Fa!==null&&xc(Fa,e),Ha!==null&&xc(Ha,e),Ga!==null&&xc(Ga,e),qo.forEach(n),Zo.forEach(n);for(var a=0;a<Va.length;a++){var o=Va[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Va.length&&(a=Va[0],a.blockedOn===null);)e_(a),a.blockedOn===null&&Va.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],h=a[o+1],S=u[An]||null;if(typeof h=="function")S||i_(a);else if(S){var A=null;if(h&&h.hasAttribute("formAction")){if(u=h,S=h[An]||null)A=S.formAction;else if(Ah(u)!==null)continue}else A=S.action;typeof A=="function"?a[o+1]=A:(a.splice(o,3),o-=3),i_(a)}}}function a_(){function e(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(S){return u=S})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Ch(e){this._internalRoot=e}Sc.prototype.render=Ch.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=si();Z0(a,o,e,n,null,null)},Sc.prototype.unmount=Ch.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Z0(e.current,2,null,e,null,null),ec(),n[ji]=null}};function Sc(e){this._internalRoot=e}Sc.prototype.unstable_scheduleHydration=function(e){if(e){var n=oo();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Va.length&&n!==0&&n<Va[a].priority;a++);Va.splice(a,0,e),a===0&&e_(e)}};var s_=t.version;if(s_!=="19.2.8")throw Error(s(527,s_,"19.2.8"));Q.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=m(n),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var NS={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Mc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mc.isDisabled&&Mc.supportsFiber)try{qt=Mc.inject(NS),Zt=Mc}catch{}}return Jo.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=hg,h=dg,S=pg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError)),n=Y0(e,1,!1,null,null,a,o,null,u,h,S,a_),e[ji]=n.current,ch(e),new Ch(n)},Jo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",h=hg,S=dg,A=pg,H=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(H=a.formState)),n=Y0(e,1,!0,n,a??null,o,u,H,h,S,A,a_),n.context=q0(null),a=n.current,o=si(),o=as(o),u=Ra(o),u.callback=null,Ca(a,u,o),a=o,n.current.lanes=a,Tn(n,a),Ii(n),e[ji]=n.current,ch(e),new Sc(n)},Jo.version="19.2.8",Jo}var m_;function kS(){if(m_)return Uh.exports;m_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Uh.exports=VS(),Uh.exports}var XS=kS();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jS=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Pv=(...r)=>r.filter((t,i,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===i).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var WS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YS=Kt.forwardRef(({color:r="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:c,iconNode:f,...d},p)=>Kt.createElement("svg",{ref:p,...WS,width:t,height:t,stroke:r,strokeWidth:s?Number(i)*24/Number(t):i,className:Pv("lucide",l),...d},[...f.map(([m,_])=>Kt.createElement(m,_)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yn=(r,t)=>{const i=Kt.forwardRef(({className:s,...l},c)=>Kt.createElement(YS,{ref:c,iconNode:t,className:Pv(`lucide-${jS(r)}`,s),...l}));return i.displayName=`${r}`,i};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qS=yn("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZS=yn("Brush",[["path",{d:"m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08",key:"1styjt"}],["path",{d:"M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z",key:"z0l1mu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g_=yn("CircleHelp",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KS=yn("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QS=yn("Eraser",[["path",{d:"m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21",key:"182aya"}],["path",{d:"M22 21H7",key:"t4ddhn"}],["path",{d:"m5 11 9 9",key:"1mo9qw"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bv=yn("FileDown",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M12 18v-6",key:"17g6i2"}],["path",{d:"m9 15 3 3 3-3",key:"1npd3o"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JS=yn("Focus",[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $S=yn("FolderOpen",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eu=yn("Gamepad2",[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tM=yn("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iv=yn("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eM=yn("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nM=yn("Redo2",[["path",{d:"m15 14 5-5-5-5",key:"12vg1m"}],["path",{d:"M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13",key:"6uklza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iM=yn("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ap=yn("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fv=yn("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aM=yn("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sM=yn("Undo2",[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",key:"f3b9sd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rM=yn("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const sp="171",va={ROTATE:0,DOLLY:1,PAN:2},Ir={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},oM=0,__=1,lM=2,Hv=1,Gv=2,ga=3,es=0,Qn=1,Hi=2,Ja=0,Hr=1,v_=2,x_=3,y_=4,cM=5,Us=100,uM=101,fM=102,hM=103,dM=104,pM=200,mM=201,gM=202,_M=203,pd=204,md=205,vM=206,xM=207,yM=208,SM=209,MM=210,EM=211,bM=212,TM=213,AM=214,gd=0,_d=1,vd=2,jr=3,xd=4,yd=5,Sd=6,Md=7,Vv=0,RM=1,CM=2,$a=0,wM=1,DM=2,UM=3,LM=4,NM=5,OM=6,zM=7,kv=300,Wr=301,Yr=302,Ed=303,bd=304,_u=306,Td=1e3,Ns=1001,Ad=1002,ci=1003,PM=1004,Ec=1005,Gi=1006,zh=1007,Os=1008,ya=1009,Xv=1010,jv=1011,cl=1012,rp=1013,zs=1014,Vi=1015,hl=1016,op=1017,lp=1018,qr=1020,Wv=35902,Yv=1021,qv=1022,Ui=1023,Zv=1024,Kv=1025,Gr=1026,Zr=1027,cp=1028,up=1029,Qv=1030,fp=1031,hp=1033,nu=33776,iu=33777,au=33778,su=33779,Rd=35840,Cd=35841,wd=35842,Dd=35843,Ud=36196,Ld=37492,Nd=37496,Od=37808,zd=37809,Pd=37810,Bd=37811,Id=37812,Fd=37813,Hd=37814,Gd=37815,Vd=37816,kd=37817,Xd=37818,jd=37819,Wd=37820,Yd=37821,ru=36492,qd=36494,Zd=36495,Jv=36283,Kd=36284,Qd=36285,Jd=36286,BM=3200,IM=3201,$v=0,FM=1,Qa="",li="srgb",Kr="srgb-linear",fu="linear",Xe="srgb",Sr=7680,S_=519,HM=512,GM=513,VM=514,tx=515,kM=516,XM=517,jM=518,WM=519,M_=35044,E_=35048,b_="300 es",_a=2e3,hu=2001;class Fs{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){if(this._listeners===void 0)return!1;const s=this._listeners;return s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){if(this._listeners===void 0)return;const l=this._listeners[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const s=this._listeners[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,t);t.target=null}}}const zn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let T_=1234567;const Vr=Math.PI/180,ul=180/Math.PI;function $r(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(zn[r&255]+zn[r>>8&255]+zn[r>>16&255]+zn[r>>24&255]+"-"+zn[t&255]+zn[t>>8&255]+"-"+zn[t>>16&15|64]+zn[t>>24&255]+"-"+zn[i&63|128]+zn[i>>8&255]+"-"+zn[i>>16&255]+zn[i>>24&255]+zn[s&255]+zn[s>>8&255]+zn[s>>16&255]+zn[s>>24&255]).toLowerCase()}function _e(r,t,i){return Math.max(t,Math.min(i,r))}function dp(r,t){return(r%t+t)%t}function YM(r,t,i,s,l){return s+(r-t)*(l-s)/(i-t)}function qM(r,t,i){return r!==t?(i-r)/(t-r):0}function ll(r,t,i){return(1-i)*r+i*t}function ZM(r,t,i,s){return ll(r,t,1-Math.exp(-i*s))}function KM(r,t=1){return t-Math.abs(dp(r,t*2)-t)}function QM(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*(3-2*r))}function JM(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*r*(r*(r*6-15)+10))}function $M(r,t){return r+Math.floor(Math.random()*(t-r+1))}function t1(r,t){return r+Math.random()*(t-r)}function e1(r){return r*(.5-Math.random())}function n1(r){r!==void 0&&(T_=r);let t=T_+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function i1(r){return r*Vr}function a1(r){return r*ul}function s1(r){return(r&r-1)===0&&r!==0}function r1(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function o1(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function l1(r,t,i,s,l){const c=Math.cos,f=Math.sin,d=c(i/2),p=f(i/2),m=c((t+s)/2),_=f((t+s)/2),g=c((t-s)/2),x=f((t-s)/2),y=c((s-t)/2),E=f((s-t)/2);switch(l){case"XYX":r.set(d*_,p*g,p*x,d*m);break;case"YZY":r.set(p*x,d*_,p*g,d*m);break;case"ZXZ":r.set(p*g,p*x,d*_,d*m);break;case"XZX":r.set(d*_,p*E,p*y,d*m);break;case"YXY":r.set(p*y,d*_,p*E,d*m);break;case"ZYZ":r.set(p*E,p*y,d*_,d*m);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Pr(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Hn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const ex={DEG2RAD:Vr,RAD2DEG:ul,generateUUID:$r,clamp:_e,euclideanModulo:dp,mapLinear:YM,inverseLerp:qM,lerp:ll,damp:ZM,pingpong:KM,smoothstep:QM,smootherstep:JM,randInt:$M,randFloat:t1,randFloatSpread:e1,seededRandom:n1,degToRad:i1,radToDeg:a1,isPowerOfTwo:s1,ceilPowerOfTwo:r1,floorPowerOfTwo:o1,setQuaternionFromProperEuler:l1,normalize:Hn,denormalize:Pr};class le{constructor(t=0,i=0){le.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=_e(this.x,t.x,i.x),this.y=_e(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=_e(this.x,t,i),this.y=_e(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(_e(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(_e(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,f=this.y-t.y;return this.x=c*s-f*l+t.x,this.y=c*l+f*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class de{constructor(t,i,s,l,c,f,d,p,m){de.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,d,p,m)}set(t,i,s,l,c,f,d,p,m){const _=this.elements;return _[0]=t,_[1]=l,_[2]=d,_[3]=i,_[4]=c,_[5]=p,_[6]=s,_[7]=f,_[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],d=s[3],p=s[6],m=s[1],_=s[4],g=s[7],x=s[2],y=s[5],E=s[8],b=l[0],M=l[3],v=l[6],O=l[1],N=l[4],U=l[7],X=l[2],G=l[5],P=l[8];return c[0]=f*b+d*O+p*X,c[3]=f*M+d*N+p*G,c[6]=f*v+d*U+p*P,c[1]=m*b+_*O+g*X,c[4]=m*M+_*N+g*G,c[7]=m*v+_*U+g*P,c[2]=x*b+y*O+E*X,c[5]=x*M+y*N+E*G,c[8]=x*v+y*U+E*P,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],d=t[5],p=t[6],m=t[7],_=t[8];return i*f*_-i*d*m-s*c*_+s*d*p+l*c*m-l*f*p}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],d=t[5],p=t[6],m=t[7],_=t[8],g=_*f-d*m,x=d*p-_*c,y=m*c-f*p,E=i*g+s*x+l*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/E;return t[0]=g*b,t[1]=(l*m-_*s)*b,t[2]=(d*s-l*f)*b,t[3]=x*b,t[4]=(_*i-l*p)*b,t[5]=(l*c-d*i)*b,t[6]=y*b,t[7]=(s*p-m*i)*b,t[8]=(f*i-s*c)*b,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,f,d){const p=Math.cos(c),m=Math.sin(c);return this.set(s*p,s*m,-s*(p*f+m*d)+f+t,-l*m,l*p,-l*(-m*f+p*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(Ph.makeScale(t,i)),this}rotate(t){return this.premultiply(Ph.makeRotation(-t)),this}translate(t,i){return this.premultiply(Ph.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ph=new de;function nx(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function du(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function c1(){const r=du("canvas");return r.style.display="block",r}const A_={};function Br(r){r in A_||(A_[r]=!0,console.warn(r))}function u1(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}function f1(r){const t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function h1(r){const t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const R_=new de().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),C_=new de().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function d1(){const r={enabled:!0,workingColorSpace:Kr,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Xe&&(l.r=xa(l.r),l.g=xa(l.g),l.b=xa(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Xe&&(l.r=kr(l.r),l.g=kr(l.g),l.b=kr(l.b))),l},fromWorkingColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},toWorkingColorSpace:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Qa?fu:this.spaces[l].transfer},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Kr]:{primaries:t,whitePoint:s,transfer:fu,toXYZ:R_,fromXYZ:C_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:li},outputColorSpaceConfig:{drawingBufferColorSpace:li}},[li]:{primaries:t,whitePoint:s,transfer:Xe,toXYZ:R_,fromXYZ:C_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:li}}}),r}const Le=d1();function xa(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function kr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Mr;class p1{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Mr===void 0&&(Mr=du("canvas")),Mr.width=t.width,Mr.height=t.height;const s=Mr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Mr}return i.width>2048||i.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),i.toDataURL("image/jpeg",.6)):i.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=du("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=xa(c[f]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(xa(i[s]/255)*255):i[s]=xa(i[s]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let m1=0;class ix{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:m1++}),this.uuid=$r(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,d=l.length;f<d;f++)l[f].isDataTexture?c.push(Bh(l[f].image)):c.push(Bh(l[f]))}else c=Bh(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function Bh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?p1.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let g1=0;class Vn extends Fs{constructor(t=Vn.DEFAULT_IMAGE,i=Vn.DEFAULT_MAPPING,s=Ns,l=Ns,c=Gi,f=Os,d=Ui,p=ya,m=Vn.DEFAULT_ANISOTROPY,_=Qa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:g1++}),this.uuid=$r(),this.name="",this.source=new ix(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new de,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==kv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Td:t.x=t.x-Math.floor(t.x);break;case Ns:t.x=t.x<0?0:1;break;case Ad:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Td:t.y=t.y-Math.floor(t.y);break;case Ns:t.y=t.y<0?0:1;break;case Ad:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Vn.DEFAULT_IMAGE=null;Vn.DEFAULT_MAPPING=kv;Vn.DEFAULT_ANISOTROPY=1;class nn{constructor(t=0,i=0,s=0,l=1){nn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,f=t.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const p=t.elements,m=p[0],_=p[4],g=p[8],x=p[1],y=p[5],E=p[9],b=p[2],M=p[6],v=p[10];if(Math.abs(_-x)<.01&&Math.abs(g-b)<.01&&Math.abs(E-M)<.01){if(Math.abs(_+x)<.1&&Math.abs(g+b)<.1&&Math.abs(E+M)<.1&&Math.abs(m+y+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const N=(m+1)/2,U=(y+1)/2,X=(v+1)/2,G=(_+x)/4,P=(g+b)/4,k=(E+M)/4;return N>U&&N>X?N<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(N),l=G/s,c=P/s):U>X?U<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(U),s=G/l,c=k/l):X<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(X),s=P/c,l=k/c),this.set(s,l,c,i),this}let O=Math.sqrt((M-E)*(M-E)+(g-b)*(g-b)+(x-_)*(x-_));return Math.abs(O)<.001&&(O=1),this.x=(M-E)/O,this.y=(g-b)/O,this.z=(x-_)/O,this.w=Math.acos((m+y+v-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=_e(this.x,t.x,i.x),this.y=_e(this.y,t.y,i.y),this.z=_e(this.z,t.z,i.z),this.w=_e(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=_e(this.x,t,i),this.y=_e(this.y,t,i),this.z=_e(this.z,t,i),this.w=_e(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(_e(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _1 extends Fs{constructor(t=1,i=1,s={}){super(),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=1,this.scissor=new nn(0,0,t,i),this.scissorTest=!1,this.viewport=new nn(0,0,t,i);const l={width:t,height:i,depth:1};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},s);const c=new Vn(l,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);c.flipY=!1,c.generateMipmaps=s.generateMipmaps,c.internalFormat=s.internalFormat,this.textures=[];const f=s.count;for(let d=0;d<f;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this.depthTexture=s.depthTexture,this.samples=s.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let s=0,l=t.textures.length;s<l;s++)this.textures[s]=t.textures[s].clone(),this.textures[s].isRenderTargetTexture=!0;const i=Object.assign({},t.texture.image);return this.texture.source=new ix(i),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ps extends _1{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class ax extends Vn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=ci,this.minFilter=ci,this.wrapR=Ns,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class v1 extends Vn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=ci,this.minFilter=ci,this.wrapR=Ns,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bs{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,f,d){let p=s[l+0],m=s[l+1],_=s[l+2],g=s[l+3];const x=c[f+0],y=c[f+1],E=c[f+2],b=c[f+3];if(d===0){t[i+0]=p,t[i+1]=m,t[i+2]=_,t[i+3]=g;return}if(d===1){t[i+0]=x,t[i+1]=y,t[i+2]=E,t[i+3]=b;return}if(g!==b||p!==x||m!==y||_!==E){let M=1-d;const v=p*x+m*y+_*E+g*b,O=v>=0?1:-1,N=1-v*v;if(N>Number.EPSILON){const X=Math.sqrt(N),G=Math.atan2(X,v*O);M=Math.sin(M*G)/X,d=Math.sin(d*G)/X}const U=d*O;if(p=p*M+x*U,m=m*M+y*U,_=_*M+E*U,g=g*M+b*U,M===1-d){const X=1/Math.sqrt(p*p+m*m+_*_+g*g);p*=X,m*=X,_*=X,g*=X}}t[i]=p,t[i+1]=m,t[i+2]=_,t[i+3]=g}static multiplyQuaternionsFlat(t,i,s,l,c,f){const d=s[l],p=s[l+1],m=s[l+2],_=s[l+3],g=c[f],x=c[f+1],y=c[f+2],E=c[f+3];return t[i]=d*E+_*g+p*y-m*x,t[i+1]=p*E+_*x+m*g-d*y,t[i+2]=m*E+_*y+d*x-p*g,t[i+3]=_*E-d*g-p*x-m*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,f=t._order,d=Math.cos,p=Math.sin,m=d(s/2),_=d(l/2),g=d(c/2),x=p(s/2),y=p(l/2),E=p(c/2);switch(f){case"XYZ":this._x=x*_*g+m*y*E,this._y=m*y*g-x*_*E,this._z=m*_*E+x*y*g,this._w=m*_*g-x*y*E;break;case"YXZ":this._x=x*_*g+m*y*E,this._y=m*y*g-x*_*E,this._z=m*_*E-x*y*g,this._w=m*_*g+x*y*E;break;case"ZXY":this._x=x*_*g-m*y*E,this._y=m*y*g+x*_*E,this._z=m*_*E+x*y*g,this._w=m*_*g-x*y*E;break;case"ZYX":this._x=x*_*g-m*y*E,this._y=m*y*g+x*_*E,this._z=m*_*E-x*y*g,this._w=m*_*g+x*y*E;break;case"YZX":this._x=x*_*g+m*y*E,this._y=m*y*g+x*_*E,this._z=m*_*E-x*y*g,this._w=m*_*g-x*y*E;break;case"XZY":this._x=x*_*g-m*y*E,this._y=m*y*g-x*_*E,this._z=m*_*E+x*y*g,this._w=m*_*g+x*y*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],f=i[1],d=i[5],p=i[9],m=i[2],_=i[6],g=i[10],x=s+d+g;if(x>0){const y=.5/Math.sqrt(x+1);this._w=.25/y,this._x=(_-p)*y,this._y=(c-m)*y,this._z=(f-l)*y}else if(s>d&&s>g){const y=2*Math.sqrt(1+s-d-g);this._w=(_-p)/y,this._x=.25*y,this._y=(l+f)/y,this._z=(c+m)/y}else if(d>g){const y=2*Math.sqrt(1+d-s-g);this._w=(c-m)/y,this._x=(l+f)/y,this._y=.25*y,this._z=(p+_)/y}else{const y=2*Math.sqrt(1+g-s-d);this._w=(f-l)/y,this._x=(c+m)/y,this._y=(p+_)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<Number.EPSILON?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(_e(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,f=t._w,d=i._x,p=i._y,m=i._z,_=i._w;return this._x=s*_+f*d+l*m-c*p,this._y=l*_+f*p+c*d-s*m,this._z=c*_+f*m+s*p-l*d,this._w=f*_-s*d-l*p-c*m,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const s=this._x,l=this._y,c=this._z,f=this._w;let d=f*t._w+s*t._x+l*t._y+c*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=f,this._x=s,this._y=l,this._z=c,this;const p=1-d*d;if(p<=Number.EPSILON){const y=1-i;return this._w=y*f+i*this._w,this._x=y*s+i*this._x,this._y=y*l+i*this._y,this._z=y*c+i*this._z,this.normalize(),this}const m=Math.sqrt(p),_=Math.atan2(m,d),g=Math.sin((1-i)*_)/m,x=Math.sin(i*_)/m;return this._w=f*g+this._w*x,this._x=s*g+this._x*x,this._y=l*g+this._y*x,this._z=c*g+this._z*x,this._onChangeCallback(),this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class J{constructor(t=0,i=0,s=0){J.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(w_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(w_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,f=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,f=t.y,d=t.z,p=t.w,m=2*(f*l-d*s),_=2*(d*i-c*l),g=2*(c*s-f*i);return this.x=i+p*m+f*g-d*_,this.y=s+p*_+d*m-c*g,this.z=l+p*g+c*_-f*m,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=_e(this.x,t.x,i.x),this.y=_e(this.y,t.y,i.y),this.z=_e(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=_e(this.x,t,i),this.y=_e(this.y,t,i),this.z=_e(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(_e(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,f=i.x,d=i.y,p=i.z;return this.x=l*p-c*d,this.y=c*f-s*p,this.z=s*d-l*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Ih.copy(this).projectOnVector(t),this.sub(Ih)}reflect(t){return this.sub(Ih.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(_e(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ih=new J,w_=new Bs;class Hs{constructor(t=new J(1/0,1/0,1/0),i=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Ri.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Ri.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Ri.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,d=c.count;f<d;f++)t.isMesh===!0?t.getVertexPosition(f,Ri):Ri.fromBufferAttribute(c,f),Ri.applyMatrix4(t.matrixWorld),this.expandByPoint(Ri);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),bc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),bc.copy(s.boundingBox)),bc.applyMatrix4(t.matrixWorld),this.union(bc)}const l=t.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ri),Ri.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter($o),Tc.subVectors(this.max,$o),Er.subVectors(t.a,$o),br.subVectors(t.b,$o),Tr.subVectors(t.c,$o),Xa.subVectors(br,Er),ja.subVectors(Tr,br),bs.subVectors(Er,Tr);let i=[0,-Xa.z,Xa.y,0,-ja.z,ja.y,0,-bs.z,bs.y,Xa.z,0,-Xa.x,ja.z,0,-ja.x,bs.z,0,-bs.x,-Xa.y,Xa.x,0,-ja.y,ja.x,0,-bs.y,bs.x,0];return!Fh(i,Er,br,Tr,Tc)||(i=[1,0,0,0,1,0,0,0,1],!Fh(i,Er,br,Tr,Tc))?!1:(Ac.crossVectors(Xa,ja),i=[Ac.x,Ac.y,Ac.z],Fh(i,Er,br,Tr,Tc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ri).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ri).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ua[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ua[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ua[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ua[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ua[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ua[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ua[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ua[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ua),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ua=[new J,new J,new J,new J,new J,new J,new J,new J],Ri=new J,bc=new Hs,Er=new J,br=new J,Tr=new J,Xa=new J,ja=new J,bs=new J,$o=new J,Tc=new J,Ac=new J,Ts=new J;function Fh(r,t,i,s,l){for(let c=0,f=r.length-3;c<=f;c+=3){Ts.fromArray(r,c);const d=l.x*Math.abs(Ts.x)+l.y*Math.abs(Ts.y)+l.z*Math.abs(Ts.z),p=t.dot(Ts),m=i.dot(Ts),_=s.dot(Ts);if(Math.max(-Math.max(p,m,_),Math.min(p,m,_))>d)return!1}return!0}const x1=new Hs,tl=new J,Hh=new J;class to{constructor(t=new J,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):x1.setFromPoints(t).getCenter(s);let l=0;for(let c=0,f=t.length;c<f;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;tl.subVectors(t,this.center);const i=tl.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(tl,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Hh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(tl.copy(t.center).add(Hh)),this.expandByPoint(tl.copy(t.center).sub(Hh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const fa=new J,Gh=new J,Rc=new J,Wa=new J,Vh=new J,Cc=new J,kh=new J;class vu{constructor(t=new J,i=new J(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,fa)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=fa.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(fa.copy(this.origin).addScaledVector(this.direction,i),fa.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){Gh.copy(t).add(i).multiplyScalar(.5),Rc.copy(i).sub(t).normalize(),Wa.copy(this.origin).sub(Gh);const c=t.distanceTo(i)*.5,f=-this.direction.dot(Rc),d=Wa.dot(this.direction),p=-Wa.dot(Rc),m=Wa.lengthSq(),_=Math.abs(1-f*f);let g,x,y,E;if(_>0)if(g=f*p-d,x=f*d-p,E=c*_,g>=0)if(x>=-E)if(x<=E){const b=1/_;g*=b,x*=b,y=g*(g+f*x+2*d)+x*(f*g+x+2*p)+m}else x=c,g=Math.max(0,-(f*x+d)),y=-g*g+x*(x+2*p)+m;else x=-c,g=Math.max(0,-(f*x+d)),y=-g*g+x*(x+2*p)+m;else x<=-E?(g=Math.max(0,-(-f*c+d)),x=g>0?-c:Math.min(Math.max(-c,-p),c),y=-g*g+x*(x+2*p)+m):x<=E?(g=0,x=Math.min(Math.max(-c,-p),c),y=x*(x+2*p)+m):(g=Math.max(0,-(f*c+d)),x=g>0?c:Math.min(Math.max(-c,-p),c),y=-g*g+x*(x+2*p)+m);else x=f>0?-c:c,g=Math.max(0,-(f*x+d)),y=-g*g+x*(x+2*p)+m;return s&&s.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(Gh).addScaledVector(Rc,x),y}intersectSphere(t,i){fa.subVectors(t.center,this.origin);const s=fa.dot(this.direction),l=fa.dot(fa)-s*s,c=t.radius*t.radius;if(l>c)return null;const f=Math.sqrt(c-l),d=s-f,p=s+f;return p<0?null:d<0?this.at(p,i):this.at(d,i)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,f,d,p;const m=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,x=this.origin;return m>=0?(s=(t.min.x-x.x)*m,l=(t.max.x-x.x)*m):(s=(t.max.x-x.x)*m,l=(t.min.x-x.x)*m),_>=0?(c=(t.min.y-x.y)*_,f=(t.max.y-x.y)*_):(c=(t.max.y-x.y)*_,f=(t.min.y-x.y)*_),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),g>=0?(d=(t.min.z-x.z)*g,p=(t.max.z-x.z)*g):(d=(t.max.z-x.z)*g,p=(t.min.z-x.z)*g),s>p||d>l)||((d>s||s!==s)&&(s=d),(p<l||l!==l)&&(l=p),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,fa)!==null}intersectTriangle(t,i,s,l,c){Vh.subVectors(i,t),Cc.subVectors(s,t),kh.crossVectors(Vh,Cc);let f=this.direction.dot(kh),d;if(f>0){if(l)return null;d=1}else if(f<0)d=-1,f=-f;else return null;Wa.subVectors(this.origin,t);const p=d*this.direction.dot(Cc.crossVectors(Wa,Cc));if(p<0)return null;const m=d*this.direction.dot(Vh.cross(Wa));if(m<0||p+m>f)return null;const _=-d*Wa.dot(kh);return _<0?null:this.at(_/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Fe{constructor(t,i,s,l,c,f,d,p,m,_,g,x,y,E,b,M){Fe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,d,p,m,_,g,x,y,E,b,M)}set(t,i,s,l,c,f,d,p,m,_,g,x,y,E,b,M){const v=this.elements;return v[0]=t,v[4]=i,v[8]=s,v[12]=l,v[1]=c,v[5]=f,v[9]=d,v[13]=p,v[2]=m,v[6]=_,v[10]=g,v[14]=x,v[3]=y,v[7]=E,v[11]=b,v[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Fe().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,s=t.elements,l=1/Ar.setFromMatrixColumn(t,0).length(),c=1/Ar.setFromMatrixColumn(t,1).length(),f=1/Ar.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,f=Math.cos(s),d=Math.sin(s),p=Math.cos(l),m=Math.sin(l),_=Math.cos(c),g=Math.sin(c);if(t.order==="XYZ"){const x=f*_,y=f*g,E=d*_,b=d*g;i[0]=p*_,i[4]=-p*g,i[8]=m,i[1]=y+E*m,i[5]=x-b*m,i[9]=-d*p,i[2]=b-x*m,i[6]=E+y*m,i[10]=f*p}else if(t.order==="YXZ"){const x=p*_,y=p*g,E=m*_,b=m*g;i[0]=x+b*d,i[4]=E*d-y,i[8]=f*m,i[1]=f*g,i[5]=f*_,i[9]=-d,i[2]=y*d-E,i[6]=b+x*d,i[10]=f*p}else if(t.order==="ZXY"){const x=p*_,y=p*g,E=m*_,b=m*g;i[0]=x-b*d,i[4]=-f*g,i[8]=E+y*d,i[1]=y+E*d,i[5]=f*_,i[9]=b-x*d,i[2]=-f*m,i[6]=d,i[10]=f*p}else if(t.order==="ZYX"){const x=f*_,y=f*g,E=d*_,b=d*g;i[0]=p*_,i[4]=E*m-y,i[8]=x*m+b,i[1]=p*g,i[5]=b*m+x,i[9]=y*m-E,i[2]=-m,i[6]=d*p,i[10]=f*p}else if(t.order==="YZX"){const x=f*p,y=f*m,E=d*p,b=d*m;i[0]=p*_,i[4]=b-x*g,i[8]=E*g+y,i[1]=g,i[5]=f*_,i[9]=-d*_,i[2]=-m*_,i[6]=y*g+E,i[10]=x-b*g}else if(t.order==="XZY"){const x=f*p,y=f*m,E=d*p,b=d*m;i[0]=p*_,i[4]=-g,i[8]=m*_,i[1]=x*g+b,i[5]=f*_,i[9]=y*g-E,i[2]=E*g-y,i[6]=d*_,i[10]=b*g+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(y1,t,S1)}lookAt(t,i,s){const l=this.elements;return ri.subVectors(t,i),ri.lengthSq()===0&&(ri.z=1),ri.normalize(),Ya.crossVectors(s,ri),Ya.lengthSq()===0&&(Math.abs(s.z)===1?ri.x+=1e-4:ri.z+=1e-4,ri.normalize(),Ya.crossVectors(s,ri)),Ya.normalize(),wc.crossVectors(ri,Ya),l[0]=Ya.x,l[4]=wc.x,l[8]=ri.x,l[1]=Ya.y,l[5]=wc.y,l[9]=ri.y,l[2]=Ya.z,l[6]=wc.z,l[10]=ri.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],d=s[4],p=s[8],m=s[12],_=s[1],g=s[5],x=s[9],y=s[13],E=s[2],b=s[6],M=s[10],v=s[14],O=s[3],N=s[7],U=s[11],X=s[15],G=l[0],P=l[4],k=l[8],D=l[12],C=l[1],B=l[5],ot=l[9],it=l[13],gt=l[2],mt=l[6],I=l[10],Q=l[14],j=l[3],Mt=l[7],At=l[11],z=l[15];return c[0]=f*G+d*C+p*gt+m*j,c[4]=f*P+d*B+p*mt+m*Mt,c[8]=f*k+d*ot+p*I+m*At,c[12]=f*D+d*it+p*Q+m*z,c[1]=_*G+g*C+x*gt+y*j,c[5]=_*P+g*B+x*mt+y*Mt,c[9]=_*k+g*ot+x*I+y*At,c[13]=_*D+g*it+x*Q+y*z,c[2]=E*G+b*C+M*gt+v*j,c[6]=E*P+b*B+M*mt+v*Mt,c[10]=E*k+b*ot+M*I+v*At,c[14]=E*D+b*it+M*Q+v*z,c[3]=O*G+N*C+U*gt+X*j,c[7]=O*P+N*B+U*mt+X*Mt,c[11]=O*k+N*ot+U*I+X*At,c[15]=O*D+N*it+U*Q+X*z,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],f=t[1],d=t[5],p=t[9],m=t[13],_=t[2],g=t[6],x=t[10],y=t[14],E=t[3],b=t[7],M=t[11],v=t[15];return E*(+c*p*g-l*m*g-c*d*x+s*m*x+l*d*y-s*p*y)+b*(+i*p*y-i*m*x+c*f*x-l*f*y+l*m*_-c*p*_)+M*(+i*m*g-i*d*y-c*f*g+s*f*y+c*d*_-s*m*_)+v*(-l*d*_-i*p*g+i*d*x+l*f*g-s*f*x+s*p*_)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],d=t[5],p=t[6],m=t[7],_=t[8],g=t[9],x=t[10],y=t[11],E=t[12],b=t[13],M=t[14],v=t[15],O=g*M*m-b*x*m+b*p*y-d*M*y-g*p*v+d*x*v,N=E*x*m-_*M*m-E*p*y+f*M*y+_*p*v-f*x*v,U=_*b*m-E*g*m+E*d*y-f*b*y-_*d*v+f*g*v,X=E*g*p-_*b*p-E*d*x+f*b*x+_*d*M-f*g*M,G=i*O+s*N+l*U+c*X;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/G;return t[0]=O*P,t[1]=(b*x*c-g*M*c-b*l*y+s*M*y+g*l*v-s*x*v)*P,t[2]=(d*M*c-b*p*c+b*l*m-s*M*m-d*l*v+s*p*v)*P,t[3]=(g*p*c-d*x*c-g*l*m+s*x*m+d*l*y-s*p*y)*P,t[4]=N*P,t[5]=(_*M*c-E*x*c+E*l*y-i*M*y-_*l*v+i*x*v)*P,t[6]=(E*p*c-f*M*c-E*l*m+i*M*m+f*l*v-i*p*v)*P,t[7]=(f*x*c-_*p*c+_*l*m-i*x*m-f*l*y+i*p*y)*P,t[8]=U*P,t[9]=(E*g*c-_*b*c-E*s*y+i*b*y+_*s*v-i*g*v)*P,t[10]=(f*b*c-E*d*c+E*s*m-i*b*m-f*s*v+i*d*v)*P,t[11]=(_*d*c-f*g*c-_*s*m+i*g*m+f*s*y-i*d*y)*P,t[12]=X*P,t[13]=(_*b*l-E*g*l+E*s*x-i*b*x-_*s*M+i*g*M)*P,t[14]=(E*d*l-f*b*l-E*s*p+i*b*p+f*s*M-i*d*M)*P,t[15]=(f*g*l-_*d*l+_*s*p-i*g*p-f*s*x+i*d*x)*P,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,f=t.x,d=t.y,p=t.z,m=c*f,_=c*d;return this.set(m*f+s,m*d-l*p,m*p+l*d,0,m*d+l*p,_*d+s,_*p-l*f,0,m*p-l*d,_*p+l*f,c*p*p+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,f){return this.set(1,s,c,0,t,1,f,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,f=i._y,d=i._z,p=i._w,m=c+c,_=f+f,g=d+d,x=c*m,y=c*_,E=c*g,b=f*_,M=f*g,v=d*g,O=p*m,N=p*_,U=p*g,X=s.x,G=s.y,P=s.z;return l[0]=(1-(b+v))*X,l[1]=(y+U)*X,l[2]=(E-N)*X,l[3]=0,l[4]=(y-U)*G,l[5]=(1-(x+v))*G,l[6]=(M+O)*G,l[7]=0,l[8]=(E+N)*P,l[9]=(M-O)*P,l[10]=(1-(x+b))*P,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;let c=Ar.set(l[0],l[1],l[2]).length();const f=Ar.set(l[4],l[5],l[6]).length(),d=Ar.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],Ci.copy(this);const m=1/c,_=1/f,g=1/d;return Ci.elements[0]*=m,Ci.elements[1]*=m,Ci.elements[2]*=m,Ci.elements[4]*=_,Ci.elements[5]*=_,Ci.elements[6]*=_,Ci.elements[8]*=g,Ci.elements[9]*=g,Ci.elements[10]*=g,i.setFromRotationMatrix(Ci),s.x=c,s.y=f,s.z=d,this}makePerspective(t,i,s,l,c,f,d=_a){const p=this.elements,m=2*c/(i-t),_=2*c/(s-l),g=(i+t)/(i-t),x=(s+l)/(s-l);let y,E;if(d===_a)y=-(f+c)/(f-c),E=-2*f*c/(f-c);else if(d===hu)y=-f/(f-c),E=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=m,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=_,p[9]=x,p[13]=0,p[2]=0,p[6]=0,p[10]=y,p[14]=E,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,c,f,d=_a){const p=this.elements,m=1/(i-t),_=1/(s-l),g=1/(f-c),x=(i+t)*m,y=(s+l)*_;let E,b;if(d===_a)E=(f+c)*g,b=-2*g;else if(d===hu)E=c*g,b=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-x,p[1]=0,p[5]=2*_,p[9]=0,p[13]=-y,p[2]=0,p[6]=0,p[10]=b,p[14]=-E,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const Ar=new J,Ci=new Fe,y1=new J(0,0,0),S1=new J(1,1,1),Ya=new J,wc=new J,ri=new J,D_=new Fe,U_=new Bs;class Xi{constructor(t=0,i=0,s=0,l=Xi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],f=l[4],d=l[8],p=l[1],m=l[5],_=l[9],g=l[2],x=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(_e(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,y),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-_e(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(_e(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-_e(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(x,y),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(_e(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,m),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-_e(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-_,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return D_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(D_,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return U_.setFromEuler(this),this.setFromQuaternion(U_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xi.DEFAULT_ORDER="XYZ";class pp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let M1=0;const L_=new J,Rr=new Bs,ha=new Fe,Dc=new J,el=new J,E1=new J,b1=new Bs,N_=new J(1,0,0),O_=new J(0,1,0),z_=new J(0,0,1),P_={type:"added"},T1={type:"removed"},Cr={type:"childadded",child:null},Xh={type:"childremoved",child:null};class bn extends Fs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:M1++}),this.uuid=$r(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bn.DEFAULT_UP.clone();const t=new J,i=new Xi,s=new Bs,l=new J(1,1,1);function c(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Fe},normalMatrix:{value:new de}}),this.matrix=new Fe,this.matrixWorld=new Fe,this.matrixAutoUpdate=bn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Rr.setFromAxisAngle(t,i),this.quaternion.multiply(Rr),this}rotateOnWorldAxis(t,i){return Rr.setFromAxisAngle(t,i),this.quaternion.premultiply(Rr),this}rotateX(t){return this.rotateOnAxis(N_,t)}rotateY(t){return this.rotateOnAxis(O_,t)}rotateZ(t){return this.rotateOnAxis(z_,t)}translateOnAxis(t,i){return L_.copy(t).applyQuaternion(this.quaternion),this.position.add(L_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(N_,t)}translateY(t){return this.translateOnAxis(O_,t)}translateZ(t){return this.translateOnAxis(z_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ha.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?Dc.copy(t):Dc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),el.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ha.lookAt(el,Dc,this.up):ha.lookAt(Dc,el,this.up),this.quaternion.setFromRotationMatrix(ha),l&&(ha.extractRotation(l.matrixWorld),Rr.setFromRotationMatrix(ha),this.quaternion.premultiply(Rr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(P_),Cr.child=t,this.dispatchEvent(Cr),Cr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(T1),Xh.child=t,this.dispatchEvent(Xh),Xh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ha.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ha.multiply(t.parent.matrixWorld)),t.applyMatrix4(ha),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(P_),Cr.child=t,this.dispatchEvent(Cr),Cr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(el,t,E1),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(el,b1,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function c(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,_=p.length;m<_;m++){const g=p[m];c(t.shapes,g)}else c(t.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(c(t.materials,this.material[p]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];l.animations.push(c(t.animations,p))}}if(i){const d=f(t.geometries),p=f(t.materials),m=f(t.textures),_=f(t.images),g=f(t.shapes),x=f(t.skeletons),y=f(t.animations),E=f(t.nodes);d.length>0&&(s.geometries=d),p.length>0&&(s.materials=p),m.length>0&&(s.textures=m),_.length>0&&(s.images=_),g.length>0&&(s.shapes=g),x.length>0&&(s.skeletons=x),y.length>0&&(s.animations=y),E.length>0&&(s.nodes=E)}return s.object=l,s;function f(d){const p=[];for(const m in d){const _=d[m];delete _.metadata,p.push(_)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}bn.DEFAULT_UP=new J(0,1,0);bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const wi=new J,da=new J,jh=new J,pa=new J,wr=new J,Dr=new J,B_=new J,Wh=new J,Yh=new J,qh=new J,Zh=new nn,Kh=new nn,Qh=new nn;class Si{constructor(t=new J,i=new J,s=new J){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),wi.subVectors(t,i),l.cross(wi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){wi.subVectors(l,i),da.subVectors(s,i),jh.subVectors(t,i);const f=wi.dot(wi),d=wi.dot(da),p=wi.dot(jh),m=da.dot(da),_=da.dot(jh),g=f*m-d*d;if(g===0)return c.set(0,0,0),null;const x=1/g,y=(m*p-d*_)*x,E=(f*_-d*p)*x;return c.set(1-y-E,E,y)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,pa)===null?!1:pa.x>=0&&pa.y>=0&&pa.x+pa.y<=1}static getInterpolation(t,i,s,l,c,f,d,p){return this.getBarycoord(t,i,s,l,pa)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,pa.x),p.addScaledVector(f,pa.y),p.addScaledVector(d,pa.z),p)}static getInterpolatedAttribute(t,i,s,l,c,f){return Zh.setScalar(0),Kh.setScalar(0),Qh.setScalar(0),Zh.fromBufferAttribute(t,i),Kh.fromBufferAttribute(t,s),Qh.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(Zh,c.x),f.addScaledVector(Kh,c.y),f.addScaledVector(Qh,c.z),f}static isFrontFacing(t,i,s,l){return wi.subVectors(s,i),da.subVectors(t,i),wi.cross(da).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return wi.subVectors(this.c,this.b),da.subVectors(this.a,this.b),wi.cross(da).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Si.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Si.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return Si.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return Si.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Si.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let f,d;wr.subVectors(l,s),Dr.subVectors(c,s),Wh.subVectors(t,s);const p=wr.dot(Wh),m=Dr.dot(Wh);if(p<=0&&m<=0)return i.copy(s);Yh.subVectors(t,l);const _=wr.dot(Yh),g=Dr.dot(Yh);if(_>=0&&g<=_)return i.copy(l);const x=p*g-_*m;if(x<=0&&p>=0&&_<=0)return f=p/(p-_),i.copy(s).addScaledVector(wr,f);qh.subVectors(t,c);const y=wr.dot(qh),E=Dr.dot(qh);if(E>=0&&y<=E)return i.copy(c);const b=y*m-p*E;if(b<=0&&m>=0&&E<=0)return d=m/(m-E),i.copy(s).addScaledVector(Dr,d);const M=_*E-y*g;if(M<=0&&g-_>=0&&y-E>=0)return B_.subVectors(c,l),d=(g-_)/(g-_+(y-E)),i.copy(l).addScaledVector(B_,d);const v=1/(M+b+x);return f=b*v,d=x*v,i.copy(s).addScaledVector(wr,f).addScaledVector(Dr,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const sx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qa={h:0,s:0,l:0},Uc={h:0,s:0,l:0};function Jh(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class me{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=li){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Le.toWorkingColorSpace(this,i),this}setRGB(t,i,s,l=Le.workingColorSpace){return this.r=t,this.g=i,this.b=s,Le.toWorkingColorSpace(this,l),this}setHSL(t,i,s,l=Le.workingColorSpace){if(t=dp(t,1),i=_e(i,0,1),s=_e(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,f=2*s-c;this.r=Jh(f,c,t+1/3),this.g=Jh(f,c,t),this.b=Jh(f,c,t-1/3)}return Le.toWorkingColorSpace(this,l),this}setStyle(t,i=li){function s(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=l[1],d=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=li){const s=sx[t.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=xa(t.r),this.g=xa(t.g),this.b=xa(t.b),this}copyLinearToSRGB(t){return this.r=kr(t.r),this.g=kr(t.g),this.b=kr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=li){return Le.fromWorkingColorSpace(Pn.copy(this),t),Math.round(_e(Pn.r*255,0,255))*65536+Math.round(_e(Pn.g*255,0,255))*256+Math.round(_e(Pn.b*255,0,255))}getHexString(t=li){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Le.workingColorSpace){Le.fromWorkingColorSpace(Pn.copy(this),i);const s=Pn.r,l=Pn.g,c=Pn.b,f=Math.max(s,l,c),d=Math.min(s,l,c);let p,m;const _=(d+f)/2;if(d===f)p=0,m=0;else{const g=f-d;switch(m=_<=.5?g/(f+d):g/(2-f-d),f){case s:p=(l-c)/g+(l<c?6:0);break;case l:p=(c-s)/g+2;break;case c:p=(s-l)/g+4;break}p/=6}return t.h=p,t.s=m,t.l=_,t}getRGB(t,i=Le.workingColorSpace){return Le.fromWorkingColorSpace(Pn.copy(this),i),t.r=Pn.r,t.g=Pn.g,t.b=Pn.b,t}getStyle(t=li){Le.fromWorkingColorSpace(Pn.copy(this),t);const i=Pn.r,s=Pn.g,l=Pn.b;return t!==li?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(qa),this.setHSL(qa.h+t,qa.s+i,qa.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(qa),t.getHSL(Uc);const s=ll(qa.h,Uc.h,i),l=ll(qa.s,Uc.s,i),c=ll(qa.l,Uc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pn=new me;me.NAMES=sx;let A1=0;class eo extends Fs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:A1++}),this.uuid=$r(),this.name="",this.type="Material",this.blending=Hr,this.side=es,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pd,this.blendDst=md,this.blendEquation=Us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new me(0,0,0),this.blendAlpha=0,this.depthFunc=jr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=S_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Sr,this.stencilZFail=Sr,this.stencilZPass=Sr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Hr&&(s.blending=this.blending),this.side!==es&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==pd&&(s.blendSrc=this.blendSrc),this.blendDst!==md&&(s.blendDst=this.blendDst),this.blendEquation!==Us&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==jr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==S_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Sr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Sr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Sr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const d in c){const p=c[d];delete p.metadata,f.push(p)}return f}if(i){const c=l(t.textures),f=l(t.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class mp extends eo{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xi,this.combine=Vv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const hn=new J,Lc=new le;class Li{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=M_,this.updateRanges=[],this.gpuType=Vi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Lc.fromBufferAttribute(this,i),Lc.applyMatrix3(t),this.setXY(i,Lc.x,Lc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix3(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix4(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.applyNormalMatrix(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.transformDirection(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Pr(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Hn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Pr(i,this.array)),i}setX(t,i){return this.normalized&&(i=Hn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Pr(i,this.array)),i}setY(t,i){return this.normalized&&(i=Hn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Pr(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Hn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Pr(i,this.array)),i}setW(t,i){return this.normalized&&(i=Hn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Hn(i,this.array),s=Hn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Hn(i,this.array),s=Hn(s,this.array),l=Hn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=Hn(i,this.array),s=Hn(s,this.array),l=Hn(l,this.array),c=Hn(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==M_&&(t.usage=this.usage),t}}class rx extends Li{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class ox extends Li{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class Ln extends Li{constructor(t,i,s){super(new Float32Array(t),i,s)}}let R1=0;const vi=new Fe,$h=new bn,Ur=new J,oi=new Hs,nl=new Hs,En=new J;class Jn extends Fs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:R1++}),this.uuid=$r(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(nx(t)?ox:rx)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new de().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return vi.makeRotationFromQuaternion(t),this.applyMatrix4(vi),this}rotateX(t){return vi.makeRotationX(t),this.applyMatrix4(vi),this}rotateY(t){return vi.makeRotationY(t),this.applyMatrix4(vi),this}rotateZ(t){return vi.makeRotationZ(t),this.applyMatrix4(vi),this}translate(t,i,s){return vi.makeTranslation(t,i,s),this.applyMatrix4(vi),this}scale(t,i,s){return vi.makeScale(t,i,s),this.applyMatrix4(vi),this}lookAt(t){return $h.lookAt(t),$h.updateMatrix(),this.applyMatrix4($h.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ur).negate(),this.translate(Ur.x,Ur.y,Ur.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const f=t[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Ln(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hs);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];oi.setFromBufferAttribute(c),this.morphTargetsRelative?(En.addVectors(this.boundingBox.min,oi.min),this.boundingBox.expandByPoint(En),En.addVectors(this.boundingBox.max,oi.max),this.boundingBox.expandByPoint(En)):(this.boundingBox.expandByPoint(oi.min),this.boundingBox.expandByPoint(oi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new to);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(t){const s=this.boundingSphere.center;if(oi.setFromBufferAttribute(t),i)for(let c=0,f=i.length;c<f;c++){const d=i[c];nl.setFromBufferAttribute(d),this.morphTargetsRelative?(En.addVectors(oi.min,nl.min),oi.expandByPoint(En),En.addVectors(oi.max,nl.max),oi.expandByPoint(En)):(oi.expandByPoint(nl.min),oi.expandByPoint(nl.max))}oi.getCenter(s);let l=0;for(let c=0,f=t.count;c<f;c++)En.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(En));if(i)for(let c=0,f=i.length;c<f;c++){const d=i[c],p=this.morphTargetsRelative;for(let m=0,_=d.count;m<_;m++)En.fromBufferAttribute(d,m),p&&(Ur.fromBufferAttribute(t,m),En.add(Ur)),l=Math.max(l,s.distanceToSquared(En))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Li(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),d=[],p=[];for(let k=0;k<s.count;k++)d[k]=new J,p[k]=new J;const m=new J,_=new J,g=new J,x=new le,y=new le,E=new le,b=new J,M=new J;function v(k,D,C){m.fromBufferAttribute(s,k),_.fromBufferAttribute(s,D),g.fromBufferAttribute(s,C),x.fromBufferAttribute(c,k),y.fromBufferAttribute(c,D),E.fromBufferAttribute(c,C),_.sub(m),g.sub(m),y.sub(x),E.sub(x);const B=1/(y.x*E.y-E.x*y.y);isFinite(B)&&(b.copy(_).multiplyScalar(E.y).addScaledVector(g,-y.y).multiplyScalar(B),M.copy(g).multiplyScalar(y.x).addScaledVector(_,-E.x).multiplyScalar(B),d[k].add(b),d[D].add(b),d[C].add(b),p[k].add(M),p[D].add(M),p[C].add(M))}let O=this.groups;O.length===0&&(O=[{start:0,count:t.count}]);for(let k=0,D=O.length;k<D;++k){const C=O[k],B=C.start,ot=C.count;for(let it=B,gt=B+ot;it<gt;it+=3)v(t.getX(it+0),t.getX(it+1),t.getX(it+2))}const N=new J,U=new J,X=new J,G=new J;function P(k){X.fromBufferAttribute(l,k),G.copy(X);const D=d[k];N.copy(D),N.sub(X.multiplyScalar(X.dot(D))).normalize(),U.crossVectors(G,D);const B=U.dot(p[k])<0?-1:1;f.setXYZW(k,N.x,N.y,N.z,B)}for(let k=0,D=O.length;k<D;++k){const C=O[k],B=C.start,ot=C.count;for(let it=B,gt=B+ot;it<gt;it+=3)P(t.getX(it+0)),P(t.getX(it+1)),P(t.getX(it+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Li(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let x=0,y=s.count;x<y;x++)s.setXYZ(x,0,0,0);const l=new J,c=new J,f=new J,d=new J,p=new J,m=new J,_=new J,g=new J;if(t)for(let x=0,y=t.count;x<y;x+=3){const E=t.getX(x+0),b=t.getX(x+1),M=t.getX(x+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,b),f.fromBufferAttribute(i,M),_.subVectors(f,c),g.subVectors(l,c),_.cross(g),d.fromBufferAttribute(s,E),p.fromBufferAttribute(s,b),m.fromBufferAttribute(s,M),d.add(_),p.add(_),m.add(_),s.setXYZ(E,d.x,d.y,d.z),s.setXYZ(b,p.x,p.y,p.z),s.setXYZ(M,m.x,m.y,m.z)}else for(let x=0,y=i.count;x<y;x+=3)l.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),f.fromBufferAttribute(i,x+2),_.subVectors(f,c),g.subVectors(l,c),_.cross(g),s.setXYZ(x+0,_.x,_.y,_.z),s.setXYZ(x+1,_.x,_.y,_.z),s.setXYZ(x+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)En.fromBufferAttribute(t,i),En.normalize(),t.setXYZ(i,En.x,En.y,En.z)}toNonIndexed(){function t(d,p){const m=d.array,_=d.itemSize,g=d.normalized,x=new m.constructor(p.length*_);let y=0,E=0;for(let b=0,M=p.length;b<M;b++){d.isInterleavedBufferAttribute?y=p[b]*d.data.stride+d.offset:y=p[b]*_;for(let v=0;v<_;v++)x[E++]=m[y++]}return new Li(x,_,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Jn,s=this.index.array,l=this.attributes;for(const d in l){const p=l[d],m=t(p,s);i.setAttribute(d,m)}const c=this.morphAttributes;for(const d in c){const p=[],m=c[d];for(let _=0,g=m.length;_<g;_++){const x=m[_],y=t(x,s);p.push(y)}i.morphAttributes[d]=p}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,p=f.length;d<p;d++){const m=f[d];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(t[m]=p[m]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const p in s){const m=s[p];t.data.attributes[p]=m.toJSON(t.data)}const l={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],_=[];for(let g=0,x=m.length;g<x;g++){const y=m[g];_.push(y.toJSON(t.data))}_.length>0&&(l[p]=_,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone(i));const l=t.attributes;for(const m in l){const _=l[m];this.setAttribute(m,_.clone(i))}const c=t.morphAttributes;for(const m in c){const _=[],g=c[m];for(let x=0,y=g.length;x<y;x++)_.push(g[x].clone(i));this.morphAttributes[m]=_}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let m=0,_=f.length;m<_;m++){const g=f[m];this.addGroup(g.start,g.count,g.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const I_=new Fe,As=new vu,Nc=new to,F_=new J,Oc=new J,zc=new J,Pc=new J,td=new J,Bc=new J,H_=new J,Ic=new J;class Kn extends bn{constructor(t=new Jn,i=new mp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){Bc.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const _=d[p],g=c[p];_!==0&&(td.fromBufferAttribute(g,t),f?Bc.addScaledVector(td,_):Bc.addScaledVector(td.sub(i),_))}i.add(Bc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Nc.copy(s.boundingSphere),Nc.applyMatrix4(c),As.copy(t.ray).recast(t.near),!(Nc.containsPoint(As.origin)===!1&&(As.intersectSphere(Nc,F_)===null||As.origin.distanceToSquared(F_)>(t.far-t.near)**2))&&(I_.copy(c).invert(),As.copy(t.ray).applyMatrix4(I_),!(s.boundingBox!==null&&As.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,As)))}_computeIntersections(t,i,s){let l;const c=this.geometry,f=this.material,d=c.index,p=c.attributes.position,m=c.attributes.uv,_=c.attributes.uv1,g=c.attributes.normal,x=c.groups,y=c.drawRange;if(d!==null)if(Array.isArray(f))for(let E=0,b=x.length;E<b;E++){const M=x[E],v=f[M.materialIndex],O=Math.max(M.start,y.start),N=Math.min(d.count,Math.min(M.start+M.count,y.start+y.count));for(let U=O,X=N;U<X;U+=3){const G=d.getX(U),P=d.getX(U+1),k=d.getX(U+2);l=Fc(this,v,t,s,m,_,g,G,P,k),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,y.start),b=Math.min(d.count,y.start+y.count);for(let M=E,v=b;M<v;M+=3){const O=d.getX(M),N=d.getX(M+1),U=d.getX(M+2);l=Fc(this,f,t,s,m,_,g,O,N,U),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(f))for(let E=0,b=x.length;E<b;E++){const M=x[E],v=f[M.materialIndex],O=Math.max(M.start,y.start),N=Math.min(p.count,Math.min(M.start+M.count,y.start+y.count));for(let U=O,X=N;U<X;U+=3){const G=U,P=U+1,k=U+2;l=Fc(this,v,t,s,m,_,g,G,P,k),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,y.start),b=Math.min(p.count,y.start+y.count);for(let M=E,v=b;M<v;M+=3){const O=M,N=M+1,U=M+2;l=Fc(this,f,t,s,m,_,g,O,N,U),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function C1(r,t,i,s,l,c,f,d){let p;if(t.side===Qn?p=s.intersectTriangle(f,c,l,!0,d):p=s.intersectTriangle(l,c,f,t.side===es,d),p===null)return null;Ic.copy(d),Ic.applyMatrix4(r.matrixWorld);const m=i.ray.origin.distanceTo(Ic);return m<i.near||m>i.far?null:{distance:m,point:Ic.clone(),object:r}}function Fc(r,t,i,s,l,c,f,d,p,m){r.getVertexPosition(d,Oc),r.getVertexPosition(p,zc),r.getVertexPosition(m,Pc);const _=C1(r,t,i,s,Oc,zc,Pc,H_);if(_){const g=new J;Si.getBarycoord(H_,Oc,zc,Pc,g),l&&(_.uv=Si.getInterpolatedAttribute(l,d,p,m,g,new le)),c&&(_.uv1=Si.getInterpolatedAttribute(c,d,p,m,g,new le)),f&&(_.normal=Si.getInterpolatedAttribute(f,d,p,m,g,new J),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const x={a:d,b:p,c:m,normal:new J,materialIndex:0};Si.getNormal(Oc,zc,Pc,x.normal),_.face=x,_.barycoord=g}return _}class ts extends Jn{constructor(t=1,i=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const d=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const p=[],m=[],_=[],g=[];let x=0,y=0;E("z","y","x",-1,-1,s,i,t,f,c,0),E("z","y","x",1,-1,s,i,-t,f,c,1),E("x","z","y",1,1,t,s,i,l,f,2),E("x","z","y",1,-1,t,s,-i,l,f,3),E("x","y","z",1,-1,t,i,s,l,c,4),E("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(p),this.setAttribute("position",new Ln(m,3)),this.setAttribute("normal",new Ln(_,3)),this.setAttribute("uv",new Ln(g,2));function E(b,M,v,O,N,U,X,G,P,k,D){const C=U/P,B=X/k,ot=U/2,it=X/2,gt=G/2,mt=P+1,I=k+1;let Q=0,j=0;const Mt=new J;for(let At=0;At<I;At++){const z=At*B-it;for(let $=0;$<mt;$++){const xt=$*C-ot;Mt[b]=xt*O,Mt[M]=z*N,Mt[v]=gt,m.push(Mt.x,Mt.y,Mt.z),Mt[b]=0,Mt[M]=0,Mt[v]=G>0?1:-1,_.push(Mt.x,Mt.y,Mt.z),g.push($/P),g.push(1-At/k),Q+=1}}for(let At=0;At<k;At++)for(let z=0;z<P;z++){const $=x+z+mt*At,xt=x+z+mt*(At+1),q=x+(z+1)+mt*(At+1),ct=x+(z+1)+mt*At;p.push($,xt,ct),p.push(xt,q,ct),j+=6}d.addGroup(y,j,D),y+=j,x+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ts(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Qr(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Gn(r){const t={};for(let i=0;i<r.length;i++){const s=Qr(r[i]);for(const l in s)t[l]=s[l]}return t}function w1(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function lx(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Le.workingColorSpace}const D1={clone:Qr,merge:Gn};var U1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,L1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ns extends eo{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=U1,this.fragmentShader=L1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Qr(t.uniforms),this.uniformsGroups=w1(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class cx extends bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Fe,this.projectionMatrix=new Fe,this.projectionMatrixInverse=new Fe,this.coordinateSystem=_a}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Za=new J,G_=new le,V_=new le;class yi extends cx{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=ul*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Vr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ul*2*Math.atan(Math.tan(Vr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){Za.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Za.x,Za.y).multiplyScalar(-t/Za.z),Za.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Za.x,Za.y).multiplyScalar(-t/Za.z)}getViewSize(t,i){return this.getViewBounds(t,G_,V_),i.subVectors(V_,G_)}setViewOffset(t,i,s,l,c,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Vr*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const p=f.fullWidth,m=f.fullHeight;c+=f.offsetX*l/p,i-=f.offsetY*s/m,l*=f.width/p,s*=f.height/m}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Lr=-90,Nr=1;class N1 extends bn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new yi(Lr,Nr,t,i);l.layers=this.layers,this.add(l);const c=new yi(Lr,Nr,t,i);c.layers=this.layers,this.add(c);const f=new yi(Lr,Nr,t,i);f.layers=this.layers,this.add(f);const d=new yi(Lr,Nr,t,i);d.layers=this.layers,this.add(d);const p=new yi(Lr,Nr,t,i);p.layers=this.layers,this.add(p);const m=new yi(Lr,Nr,t,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,f,d,p]=i;for(const m of i)this.remove(m);if(t===_a)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===hu)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const m of i)this.add(m),m.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,d,p,m,_]=this.children,g=t.getRenderTarget(),x=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const b=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,c),t.setRenderTarget(s,1,l),t.render(i,f),t.setRenderTarget(s,2,l),t.render(i,d),t.setRenderTarget(s,3,l),t.render(i,p),t.setRenderTarget(s,4,l),t.render(i,m),s.texture.generateMipmaps=b,t.setRenderTarget(s,5,l),t.render(i,_),t.setRenderTarget(g,x,y),t.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class ux extends Vn{constructor(t,i,s,l,c,f,d,p,m,_){t=t!==void 0?t:[],i=i!==void 0?i:Wr,super(t,i,s,l,c,f,d,p,m,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class O1 extends Ps{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new ux(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Gi}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new ts(5,5,5),c=new ns({name:"CubemapFromEquirect",uniforms:Qr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Qn,blending:Ja});c.uniforms.tEquirect.value=i;const f=new Kn(l,c),d=i.minFilter;return i.minFilter===Os&&(i.minFilter=Gi),new N1(1,10,this).update(t,f),i.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(t,i,s,l){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,s,l);t.setRenderTarget(c)}}class gp{constructor(t,i=1,s=1e3){this.isFog=!0,this.name="",this.color=new me(t),this.near=i,this.far=s}clone(){return new gp(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class z1 extends bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xi,this.environmentIntensity=1,this.environmentRotation=new Xi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class P1 extends Vn{constructor(t=null,i=1,s=1,l,c,f,d,p,m=ci,_=ci,g,x){super(null,f,d,p,m,_,l,c,g,x),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class k_ extends Li{constructor(t,i,s,l=1){super(t,i,s),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=l}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Or=new Fe,X_=new Fe,Hc=[],j_=new Hs,B1=new Fe,il=new Kn,al=new to;class Gc extends Kn{constructor(t,i,s){super(t,i),this.isInstancedMesh=!0,this.instanceMatrix=new k_(new Float32Array(s*16),16),this.instanceColor=null,this.morphTexture=null,this.count=s,this.boundingBox=null,this.boundingSphere=null;for(let l=0;l<s;l++)this.setMatrixAt(l,B1)}computeBoundingBox(){const t=this.geometry,i=this.count;this.boundingBox===null&&(this.boundingBox=new Hs),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,Or),j_.copy(t.boundingBox).applyMatrix4(Or),this.boundingBox.union(j_)}computeBoundingSphere(){const t=this.geometry,i=this.count;this.boundingSphere===null&&(this.boundingSphere=new to),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,Or),al.copy(t.boundingSphere).applyMatrix4(Or),this.boundingSphere.union(al)}copy(t,i){return super.copy(t,i),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,i){i.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,i){i.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,i){const s=i.morphTargetInfluences,l=this.morphTexture.source.data.data,c=s.length+1,f=t*c+1;for(let d=0;d<s.length;d++)s[d]=l[f+d]}raycast(t,i){const s=this.matrixWorld,l=this.count;if(il.geometry=this.geometry,il.material=this.material,il.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),al.copy(this.boundingSphere),al.applyMatrix4(s),t.ray.intersectsSphere(al)!==!1))for(let c=0;c<l;c++){this.getMatrixAt(c,Or),X_.multiplyMatrices(s,Or),il.matrixWorld=X_,il.raycast(t,Hc);for(let f=0,d=Hc.length;f<d;f++){const p=Hc[f];p.instanceId=c,p.object=this,i.push(p)}Hc.length=0}}setColorAt(t,i){this.instanceColor===null&&(this.instanceColor=new k_(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),i.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,i){i.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,i){const s=i.morphTargetInfluences,l=s.length+1;this.morphTexture===null&&(this.morphTexture=new P1(new Float32Array(l*this.count),l,this.count,cp,Vi));const c=this.morphTexture.source.data.data;let f=0;for(let m=0;m<s.length;m++)f+=s[m];const d=this.geometry.morphTargetsRelative?1:1-f,p=l*t;c[p]=d,c.set(s,p+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const ed=new J,I1=new J,F1=new de;class Ka{constructor(t=new J(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=ed.subVectors(s,i).cross(I1.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(ed),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||F1.getNormalMatrix(t),l=this.coplanarPoint(ed).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Rs=new to,Vc=new J;class _p{constructor(t=new Ka,i=new Ka,s=new Ka,l=new Ka,c=new Ka,f=new Ka){this.planes=[t,i,s,l,c,f]}set(t,i,s,l,c,f){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(f),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=_a){const s=this.planes,l=t.elements,c=l[0],f=l[1],d=l[2],p=l[3],m=l[4],_=l[5],g=l[6],x=l[7],y=l[8],E=l[9],b=l[10],M=l[11],v=l[12],O=l[13],N=l[14],U=l[15];if(s[0].setComponents(p-c,x-m,M-y,U-v).normalize(),s[1].setComponents(p+c,x+m,M+y,U+v).normalize(),s[2].setComponents(p+f,x+_,M+E,U+O).normalize(),s[3].setComponents(p-f,x-_,M-E,U-O).normalize(),s[4].setComponents(p-d,x-g,M-b,U-N).normalize(),i===_a)s[5].setComponents(p+d,x+g,M+b,U+N).normalize();else if(i===hu)s[5].setComponents(d,g,b,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Rs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Rs.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Rs)}intersectsSprite(t){return Rs.center.set(0,0,0),Rs.radius=.7071067811865476,Rs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Rs)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Vc.x=l.normal.x>0?t.max.x:t.min.x,Vc.y=l.normal.y>0?t.max.y:t.min.y,Vc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Vc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class xu extends eo{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new me(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const pu=new J,mu=new J,W_=new Fe,sl=new vu,kc=new to,nd=new J,Y_=new J;class H1 extends bn{constructor(t=new Jn,i=new xu){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)pu.fromBufferAttribute(i,l-1),mu.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=pu.distanceTo(mu);t.setAttribute("lineDistance",new Ln(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),kc.copy(s.boundingSphere),kc.applyMatrix4(l),kc.radius+=c,t.ray.intersectsSphere(kc)===!1)return;W_.copy(l).invert(),sl.copy(t.ray).applyMatrix4(W_);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=this.isLineSegments?2:1,_=s.index,x=s.attributes.position;if(_!==null){const y=Math.max(0,f.start),E=Math.min(_.count,f.start+f.count);for(let b=y,M=E-1;b<M;b+=m){const v=_.getX(b),O=_.getX(b+1),N=Xc(this,t,sl,p,v,O);N&&i.push(N)}if(this.isLineLoop){const b=_.getX(E-1),M=_.getX(y),v=Xc(this,t,sl,p,b,M);v&&i.push(v)}}else{const y=Math.max(0,f.start),E=Math.min(x.count,f.start+f.count);for(let b=y,M=E-1;b<M;b+=m){const v=Xc(this,t,sl,p,b,b+1);v&&i.push(v)}if(this.isLineLoop){const b=Xc(this,t,sl,p,E-1,y);b&&i.push(b)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function Xc(r,t,i,s,l,c){const f=r.geometry.attributes.position;if(pu.fromBufferAttribute(f,l),mu.fromBufferAttribute(f,c),i.distanceSqToSegment(pu,mu,nd,Y_)>s)return;nd.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(nd);if(!(p<t.near||p>t.far))return{distance:p,point:Y_.clone().applyMatrix4(r.matrixWorld),index:l,face:null,faceIndex:null,barycoord:null,object:r}}const q_=new J,Z_=new J;class vp extends H1{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)q_.fromBufferAttribute(i,l),Z_.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+q_.distanceTo(Z_);t.setAttribute("lineDistance",new Ln(s,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class jc extends bn{constructor(){super(),this.isGroup=!0,this.type="Group"}}class fx extends Vn{constructor(t,i,s,l,c,f,d,p,m,_=Gr){if(_!==Gr&&_!==Zr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&_===Gr&&(s=zs),s===void 0&&_===Zr&&(s=qr),super(null,l,c,f,d,p,_,s,m),this.isDepthTexture=!0,this.image={width:t,height:i},this.magFilter=d!==void 0?d:ci,this.minFilter=p!==void 0?p:ci,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}const Wc=new J,Yc=new J,id=new J,qc=new Si;class G1 extends Jn{constructor(t=null,i=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:i},t!==null){const l=Math.pow(10,4),c=Math.cos(Vr*i),f=t.getIndex(),d=t.getAttribute("position"),p=f?f.count:d.count,m=[0,0,0],_=["a","b","c"],g=new Array(3),x={},y=[];for(let E=0;E<p;E+=3){f?(m[0]=f.getX(E),m[1]=f.getX(E+1),m[2]=f.getX(E+2)):(m[0]=E,m[1]=E+1,m[2]=E+2);const{a:b,b:M,c:v}=qc;if(b.fromBufferAttribute(d,m[0]),M.fromBufferAttribute(d,m[1]),v.fromBufferAttribute(d,m[2]),qc.getNormal(id),g[0]=`${Math.round(b.x*l)},${Math.round(b.y*l)},${Math.round(b.z*l)}`,g[1]=`${Math.round(M.x*l)},${Math.round(M.y*l)},${Math.round(M.z*l)}`,g[2]=`${Math.round(v.x*l)},${Math.round(v.y*l)},${Math.round(v.z*l)}`,!(g[0]===g[1]||g[1]===g[2]||g[2]===g[0]))for(let O=0;O<3;O++){const N=(O+1)%3,U=g[O],X=g[N],G=qc[_[O]],P=qc[_[N]],k=`${U}_${X}`,D=`${X}_${U}`;D in x&&x[D]?(id.dot(x[D].normal)<=c&&(y.push(G.x,G.y,G.z),y.push(P.x,P.y,P.z)),x[D]=null):k in x||(x[k]={index0:m[O],index1:m[N],normal:id.clone()})}}for(const E in x)if(x[E]){const{index0:b,index1:M}=x[E];Wc.fromBufferAttribute(d,b),Yc.fromBufferAttribute(d,M),y.push(Wc.x,Wc.y,Wc.z),y.push(Yc.x,Yc.y,Yc.z)}this.setAttribute("position",new Ln(y,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Jr extends Jn{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,f=i/2,d=Math.floor(s),p=Math.floor(l),m=d+1,_=p+1,g=t/d,x=i/p,y=[],E=[],b=[],M=[];for(let v=0;v<_;v++){const O=v*x-f;for(let N=0;N<m;N++){const U=N*g-c;E.push(U,-O,0),b.push(0,0,1),M.push(N/d),M.push(1-v/p)}}for(let v=0;v<p;v++)for(let O=0;O<d;O++){const N=O+m*v,U=O+m*(v+1),X=O+1+m*(v+1),G=O+1+m*v;y.push(N,U,G),y.push(U,X,G)}this.setIndex(y),this.setAttribute("position",new Ln(E,3)),this.setAttribute("normal",new Ln(b,3)),this.setAttribute("uv",new Ln(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jr(t.width,t.height,t.widthSegments,t.heightSegments)}}class Zc extends eo{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new me(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$v,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class V1 extends eo{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=BM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class k1 extends eo{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class hx extends bn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new me(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}class X1 extends hx{constructor(t,i,s){super(t,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(bn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new me(i)}copy(t,i){return super.copy(t,i),this.groundColor.copy(t.groundColor),this}}const ad=new Fe,K_=new J,Q_=new J;class j1{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new le(512,512),this.map=null,this.mapPass=null,this.matrix=new Fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _p,this._frameExtents=new le(1,1),this._viewportCount=1,this._viewports=[new nn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;K_.setFromMatrixPosition(t.matrixWorld),i.position.copy(K_),Q_.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(Q_),i.updateMatrixWorld(),ad.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ad),s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(ad)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class dx extends cx{constructor(t=-1,i=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,f=s+t,d=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,f=c+m*this.view.width,d-=_*this.view.offsetY,p=d-_*this.view.height}this.projectionMatrix.makeOrthographic(c,f,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class W1 extends j1{constructor(){super(new dx(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Y1 extends hx{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bn.DEFAULT_UP),this.updateMatrix(),this.target=new bn,this.shadow=new W1}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class q1 extends yi{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}const J_=new Fe;class Z1{constructor(t,i,s=0,l=1/0){this.ray=new vu(t,i),this.near=s,this.far=l,this.camera=null,this.layers=new pp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):console.error("THREE.Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return J_.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(J_),this}intersectObject(t,i=!0,s=[]){return $d(t,this,s,i),s.sort($_),s}intersectObjects(t,i=!0,s=[]){for(let l=0,c=t.length;l<c;l++)$d(t[l],this,s,i);return s.sort($_),s}}function $_(r,t){return r.distance-t.distance}function $d(r,t,i,s){let l=!0;if(r.layers.test(t.layers)&&r.raycast(t,i)===!1&&(l=!1),l===!0&&s===!0){const c=r.children;for(let f=0,d=c.length;f<d;f++)$d(c[f],t,i,!0)}}class tp{constructor(t=1,i=0,s=0){return this.radius=t,this.phi=i,this.theta=s,this}set(t,i,s){return this.radius=t,this.phi=i,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=_e(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,s){return this.radius=Math.sqrt(t*t+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(_e(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class K1 extends vp{constructor(t=10,i=10,s=4473924,l=8947848){s=new me(s),l=new me(l);const c=i/2,f=t/i,d=t/2,p=[],m=[];for(let x=0,y=0,E=-d;x<=i;x++,E+=f){p.push(-d,0,E,d,0,E),p.push(E,0,-d,E,0,d);const b=x===c?s:l;b.toArray(m,y),y+=3,b.toArray(m,y),y+=3,b.toArray(m,y),y+=3,b.toArray(m,y),y+=3}const _=new Jn;_.setAttribute("position",new Ln(p,3)),_.setAttribute("color",new Ln(m,3));const g=new xu({vertexColors:!0,toneMapped:!1});super(_,g),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Q1 extends vp{constructor(t=1){const i=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],s=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],l=new Jn;l.setAttribute("position",new Ln(i,3)),l.setAttribute("color",new Ln(s,3));const c=new xu({vertexColors:!0,toneMapped:!1});super(l,c),this.type="AxesHelper"}setColors(t,i,s){const l=new me,c=this.geometry.attributes.color.array;return l.set(t),l.toArray(c,0),l.toArray(c,3),l.set(i),l.toArray(c,6),l.toArray(c,9),l.set(s),l.toArray(c,12),l.toArray(c,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class J1 extends Fs{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function tv(r,t,i,s){const l=$1(s);switch(i){case Yv:return r*t;case Zv:return r*t;case Kv:return r*t*2;case cp:return r*t/l.components*l.byteLength;case up:return r*t/l.components*l.byteLength;case Qv:return r*t*2/l.components*l.byteLength;case fp:return r*t*2/l.components*l.byteLength;case qv:return r*t*3/l.components*l.byteLength;case Ui:return r*t*4/l.components*l.byteLength;case hp:return r*t*4/l.components*l.byteLength;case nu:case iu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case au:case su:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Cd:case Dd:return Math.max(r,16)*Math.max(t,8)/4;case Rd:case wd:return Math.max(r,8)*Math.max(t,8)/2;case Ud:case Ld:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Nd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Od:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case zd:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Pd:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Bd:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Id:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Fd:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Hd:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Gd:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Vd:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case kd:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Xd:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case jd:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Wd:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Yd:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case ru:case qd:case Zd:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Jv:case Kd:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Qd:case Jd:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function $1(r){switch(r){case ya:case Xv:return{byteLength:1,components:1};case cl:case jv:case hl:return{byteLength:2,components:1};case op:case lp:return{byteLength:2,components:4};case zs:case rp:case Vi:return{byteLength:4,components:1};case Wv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sp);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function px(){let r=null,t=!1,i=null,s=null;function l(c,f){i(c,f),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function tE(r){const t=new WeakMap;function i(d,p){const m=d.array,_=d.usage,g=m.byteLength,x=r.createBuffer();r.bindBuffer(p,x),r.bufferData(p,m,_),d.onUploadCallback();let y;if(m instanceof Float32Array)y=r.FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?y=r.HALF_FLOAT:y=r.UNSIGNED_SHORT;else if(m instanceof Int16Array)y=r.SHORT;else if(m instanceof Uint32Array)y=r.UNSIGNED_INT;else if(m instanceof Int32Array)y=r.INT;else if(m instanceof Int8Array)y=r.BYTE;else if(m instanceof Uint8Array)y=r.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)y=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:y,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:g}}function s(d,p,m){const _=p.array,g=p.updateRanges;if(r.bindBuffer(m,d),g.length===0)r.bufferSubData(m,0,_);else{g.sort((y,E)=>y.start-E.start);let x=0;for(let y=1;y<g.length;y++){const E=g[x],b=g[y];b.start<=E.start+E.count+1?E.count=Math.max(E.count,b.start+b.count-E.start):(++x,g[x]=b)}g.length=x+1;for(let y=0,E=g.length;y<E;y++){const b=g[y];r.bufferSubData(m,b.start*_.BYTES_PER_ELEMENT,_,b.start,b.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=t.get(d);p&&(r.deleteBuffer(p.buffer),t.delete(d))}function f(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=t.get(d);(!_||_.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=t.get(d);if(m===void 0)t.set(d,i(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(m.buffer,d,p),m.version=d.version}}return{get:l,remove:c,update:f}}var eE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nE=`#ifdef USE_ALPHAHASH
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
#endif`,iE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,aE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,rE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,oE=`#ifdef USE_AOMAP
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
#endif`,lE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cE=`#ifdef USE_BATCHING
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
#endif`,uE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,fE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,pE=`#ifdef USE_IRIDESCENCE
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
#endif`,mE=`#ifdef USE_BUMPMAP
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
#endif`,gE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,_E=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,SE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ME=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,EE=`#if defined( USE_COLOR_ALPHA )
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
#endif`,bE=`#define PI 3.141592653589793
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
} // validated`,TE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,AE=`vec3 transformedNormal = objectNormal;
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
#endif`,RE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,CE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,DE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,UE="gl_FragColor = linearToOutputTexel( gl_FragColor );",LE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,NE=`#ifdef USE_ENVMAP
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
#endif`,OE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zE=`#ifdef USE_ENVMAP
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
#endif`,PE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,BE=`#ifdef USE_ENVMAP
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
#endif`,IE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,FE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,HE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,GE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,VE=`#ifdef USE_GRADIENTMAP
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
}`,kE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,XE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,WE=`uniform bool receiveShadow;
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
#endif`,YE=`#ifdef USE_ENVMAP
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
#endif`,qE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ZE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,KE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,QE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,JE=`PhysicalMaterial material;
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
#endif`,$E=`struct PhysicalMaterial {
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
}`,tb=`
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
#endif`,eb=`#if defined( RE_IndirectDiffuse )
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
#endif`,nb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ib=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ab=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sb=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rb=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ob=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ub=`#if defined( USE_POINTS_UV )
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
#endif`,fb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,db=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gb=`#ifdef USE_MORPHTARGETS
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
#endif`,_b=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,xb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,yb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Eb=`#ifdef USE_NORMALMAP
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
#endif`,bb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Tb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ab=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Db=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ub=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Lb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Nb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ob=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Pb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ib=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Fb=`float getShadowMask() {
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
}`,Hb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gb=`#ifdef USE_SKINNING
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
#endif`,Vb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kb=`#ifdef USE_SKINNING
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
#endif`,Xb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Yb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,qb=`#ifdef USE_TRANSMISSION
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
#endif`,Zb=`#ifdef USE_TRANSMISSION
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
#endif`,Kb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$b=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const tT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,eT=`uniform sampler2D t2D;
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
}`,nT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,aT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rT=`#include <common>
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
}`,oT=`#if DEPTH_PACKING == 3200
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
}`,lT=`#define DISTANCE
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
}`,cT=`#define DISTANCE
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
}`,uT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hT=`uniform float scale;
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
}`,dT=`uniform vec3 diffuse;
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
}`,pT=`#include <common>
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
}`,mT=`uniform vec3 diffuse;
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
}`,gT=`#define LAMBERT
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
}`,_T=`#define LAMBERT
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
}`,vT=`#define MATCAP
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
}`,xT=`#define MATCAP
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
}`,yT=`#define NORMAL
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
}`,ST=`#define NORMAL
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
}`,MT=`#define PHONG
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
}`,ET=`#define PHONG
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
}`,bT=`#define STANDARD
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
}`,TT=`#define STANDARD
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
}`,AT=`#define TOON
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
}`,RT=`#define TOON
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
}`,CT=`uniform float size;
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
}`,wT=`uniform vec3 diffuse;
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
}`,DT=`#include <common>
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
}`,UT=`uniform vec3 color;
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
}`,LT=`uniform float rotation;
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
}`,NT=`uniform vec3 diffuse;
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
}`,pe={alphahash_fragment:eE,alphahash_pars_fragment:nE,alphamap_fragment:iE,alphamap_pars_fragment:aE,alphatest_fragment:sE,alphatest_pars_fragment:rE,aomap_fragment:oE,aomap_pars_fragment:lE,batching_pars_vertex:cE,batching_vertex:uE,begin_vertex:fE,beginnormal_vertex:hE,bsdfs:dE,iridescence_fragment:pE,bumpmap_pars_fragment:mE,clipping_planes_fragment:gE,clipping_planes_pars_fragment:_E,clipping_planes_pars_vertex:vE,clipping_planes_vertex:xE,color_fragment:yE,color_pars_fragment:SE,color_pars_vertex:ME,color_vertex:EE,common:bE,cube_uv_reflection_fragment:TE,defaultnormal_vertex:AE,displacementmap_pars_vertex:RE,displacementmap_vertex:CE,emissivemap_fragment:wE,emissivemap_pars_fragment:DE,colorspace_fragment:UE,colorspace_pars_fragment:LE,envmap_fragment:NE,envmap_common_pars_fragment:OE,envmap_pars_fragment:zE,envmap_pars_vertex:PE,envmap_physical_pars_fragment:YE,envmap_vertex:BE,fog_vertex:IE,fog_pars_vertex:FE,fog_fragment:HE,fog_pars_fragment:GE,gradientmap_pars_fragment:VE,lightmap_pars_fragment:kE,lights_lambert_fragment:XE,lights_lambert_pars_fragment:jE,lights_pars_begin:WE,lights_toon_fragment:qE,lights_toon_pars_fragment:ZE,lights_phong_fragment:KE,lights_phong_pars_fragment:QE,lights_physical_fragment:JE,lights_physical_pars_fragment:$E,lights_fragment_begin:tb,lights_fragment_maps:eb,lights_fragment_end:nb,logdepthbuf_fragment:ib,logdepthbuf_pars_fragment:ab,logdepthbuf_pars_vertex:sb,logdepthbuf_vertex:rb,map_fragment:ob,map_pars_fragment:lb,map_particle_fragment:cb,map_particle_pars_fragment:ub,metalnessmap_fragment:fb,metalnessmap_pars_fragment:hb,morphinstance_vertex:db,morphcolor_vertex:pb,morphnormal_vertex:mb,morphtarget_pars_vertex:gb,morphtarget_vertex:_b,normal_fragment_begin:vb,normal_fragment_maps:xb,normal_pars_fragment:yb,normal_pars_vertex:Sb,normal_vertex:Mb,normalmap_pars_fragment:Eb,clearcoat_normal_fragment_begin:bb,clearcoat_normal_fragment_maps:Tb,clearcoat_pars_fragment:Ab,iridescence_pars_fragment:Rb,opaque_fragment:Cb,packing:wb,premultiplied_alpha_fragment:Db,project_vertex:Ub,dithering_fragment:Lb,dithering_pars_fragment:Nb,roughnessmap_fragment:Ob,roughnessmap_pars_fragment:zb,shadowmap_pars_fragment:Pb,shadowmap_pars_vertex:Bb,shadowmap_vertex:Ib,shadowmask_pars_fragment:Fb,skinbase_vertex:Hb,skinning_pars_vertex:Gb,skinning_vertex:Vb,skinnormal_vertex:kb,specularmap_fragment:Xb,specularmap_pars_fragment:jb,tonemapping_fragment:Wb,tonemapping_pars_fragment:Yb,transmission_fragment:qb,transmission_pars_fragment:Zb,uv_pars_fragment:Kb,uv_pars_vertex:Qb,uv_vertex:Jb,worldpos_vertex:$b,background_vert:tT,background_frag:eT,backgroundCube_vert:nT,backgroundCube_frag:iT,cube_vert:aT,cube_frag:sT,depth_vert:rT,depth_frag:oT,distanceRGBA_vert:lT,distanceRGBA_frag:cT,equirect_vert:uT,equirect_frag:fT,linedashed_vert:hT,linedashed_frag:dT,meshbasic_vert:pT,meshbasic_frag:mT,meshlambert_vert:gT,meshlambert_frag:_T,meshmatcap_vert:vT,meshmatcap_frag:xT,meshnormal_vert:yT,meshnormal_frag:ST,meshphong_vert:MT,meshphong_frag:ET,meshphysical_vert:bT,meshphysical_frag:TT,meshtoon_vert:AT,meshtoon_frag:RT,points_vert:CT,points_frag:wT,shadow_vert:DT,shadow_frag:UT,sprite_vert:LT,sprite_frag:NT},Pt={common:{diffuse:{value:new me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new de}},envmap:{envMap:{value:null},envMapRotation:{value:new de},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new de}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new de}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new de},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new de},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new de},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new de}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new de}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new de}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0},uvTransform:{value:new de}},sprite:{diffuse:{value:new me(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}}},Fi={basic:{uniforms:Gn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.fog]),vertexShader:pe.meshbasic_vert,fragmentShader:pe.meshbasic_frag},lambert:{uniforms:Gn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new me(0)}}]),vertexShader:pe.meshlambert_vert,fragmentShader:pe.meshlambert_frag},phong:{uniforms:Gn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new me(0)},specular:{value:new me(1118481)},shininess:{value:30}}]),vertexShader:pe.meshphong_vert,fragmentShader:pe.meshphong_frag},standard:{uniforms:Gn([Pt.common,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.roughnessmap,Pt.metalnessmap,Pt.fog,Pt.lights,{emissive:{value:new me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag},toon:{uniforms:Gn([Pt.common,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.gradientmap,Pt.fog,Pt.lights,{emissive:{value:new me(0)}}]),vertexShader:pe.meshtoon_vert,fragmentShader:pe.meshtoon_frag},matcap:{uniforms:Gn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,{matcap:{value:null}}]),vertexShader:pe.meshmatcap_vert,fragmentShader:pe.meshmatcap_frag},points:{uniforms:Gn([Pt.points,Pt.fog]),vertexShader:pe.points_vert,fragmentShader:pe.points_frag},dashed:{uniforms:Gn([Pt.common,Pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pe.linedashed_vert,fragmentShader:pe.linedashed_frag},depth:{uniforms:Gn([Pt.common,Pt.displacementmap]),vertexShader:pe.depth_vert,fragmentShader:pe.depth_frag},normal:{uniforms:Gn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,{opacity:{value:1}}]),vertexShader:pe.meshnormal_vert,fragmentShader:pe.meshnormal_frag},sprite:{uniforms:Gn([Pt.sprite,Pt.fog]),vertexShader:pe.sprite_vert,fragmentShader:pe.sprite_frag},background:{uniforms:{uvTransform:{value:new de},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pe.background_vert,fragmentShader:pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new de}},vertexShader:pe.backgroundCube_vert,fragmentShader:pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pe.cube_vert,fragmentShader:pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pe.equirect_vert,fragmentShader:pe.equirect_frag},distanceRGBA:{uniforms:Gn([Pt.common,Pt.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pe.distanceRGBA_vert,fragmentShader:pe.distanceRGBA_frag},shadow:{uniforms:Gn([Pt.lights,Pt.fog,{color:{value:new me(0)},opacity:{value:1}}]),vertexShader:pe.shadow_vert,fragmentShader:pe.shadow_frag}};Fi.physical={uniforms:Gn([Fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new de},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new de},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new de},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new de},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new de},sheen:{value:0},sheenColor:{value:new me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new de},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new de},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new de},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new de},attenuationDistance:{value:0},attenuationColor:{value:new me(0)},specularColor:{value:new me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new de},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new de},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new de}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag};const Kc={r:0,b:0,g:0},Cs=new Xi,OT=new Fe;function zT(r,t,i,s,l,c,f){const d=new me(0);let p=c===!0?0:1,m,_,g=null,x=0,y=null;function E(N){let U=N.isScene===!0?N.background:null;return U&&U.isTexture&&(U=(N.backgroundBlurriness>0?i:t).get(U)),U}function b(N){let U=!1;const X=E(N);X===null?v(d,p):X&&X.isColor&&(v(X,1),U=!0);const G=r.xr.getEnvironmentBlendMode();G==="additive"?s.buffers.color.setClear(0,0,0,1,f):G==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,f),(r.autoClear||U)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function M(N,U){const X=E(U);X&&(X.isCubeTexture||X.mapping===_u)?(_===void 0&&(_=new Kn(new ts(1,1,1),new ns({name:"BackgroundCubeMaterial",uniforms:Qr(Fi.backgroundCube.uniforms),vertexShader:Fi.backgroundCube.vertexShader,fragmentShader:Fi.backgroundCube.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(G,P,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),Cs.copy(U.backgroundRotation),Cs.x*=-1,Cs.y*=-1,Cs.z*=-1,X.isCubeTexture&&X.isRenderTargetTexture===!1&&(Cs.y*=-1,Cs.z*=-1),_.material.uniforms.envMap.value=X,_.material.uniforms.flipEnvMap.value=X.isCubeTexture&&X.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(OT.makeRotationFromEuler(Cs)),_.material.toneMapped=Le.getTransfer(X.colorSpace)!==Xe,(g!==X||x!==X.version||y!==r.toneMapping)&&(_.material.needsUpdate=!0,g=X,x=X.version,y=r.toneMapping),_.layers.enableAll(),N.unshift(_,_.geometry,_.material,0,0,null)):X&&X.isTexture&&(m===void 0&&(m=new Kn(new Jr(2,2),new ns({name:"BackgroundMaterial",uniforms:Qr(Fi.background.uniforms),vertexShader:Fi.background.vertexShader,fragmentShader:Fi.background.fragmentShader,side:es,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=X,m.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,m.material.toneMapped=Le.getTransfer(X.colorSpace)!==Xe,X.matrixAutoUpdate===!0&&X.updateMatrix(),m.material.uniforms.uvTransform.value.copy(X.matrix),(g!==X||x!==X.version||y!==r.toneMapping)&&(m.material.needsUpdate=!0,g=X,x=X.version,y=r.toneMapping),m.layers.enableAll(),N.unshift(m,m.geometry,m.material,0,0,null))}function v(N,U){N.getRGB(Kc,lx(r)),s.buffers.color.setClear(Kc.r,Kc.g,Kc.b,U,f)}function O(){_!==void 0&&(_.geometry.dispose(),_.material.dispose()),m!==void 0&&(m.geometry.dispose(),m.material.dispose())}return{getClearColor:function(){return d},setClearColor:function(N,U=1){d.set(N),p=U,v(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(N){p=N,v(d,p)},render:b,addToRenderList:M,dispose:O}}function PT(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=x(null);let c=l,f=!1;function d(C,B,ot,it,gt){let mt=!1;const I=g(it,ot,B);c!==I&&(c=I,m(c.object)),mt=y(C,it,ot,gt),mt&&E(C,it,ot,gt),gt!==null&&t.update(gt,r.ELEMENT_ARRAY_BUFFER),(mt||f)&&(f=!1,U(C,B,ot,it),gt!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(gt).buffer))}function p(){return r.createVertexArray()}function m(C){return r.bindVertexArray(C)}function _(C){return r.deleteVertexArray(C)}function g(C,B,ot){const it=ot.wireframe===!0;let gt=s[C.id];gt===void 0&&(gt={},s[C.id]=gt);let mt=gt[B.id];mt===void 0&&(mt={},gt[B.id]=mt);let I=mt[it];return I===void 0&&(I=x(p()),mt[it]=I),I}function x(C){const B=[],ot=[],it=[];for(let gt=0;gt<i;gt++)B[gt]=0,ot[gt]=0,it[gt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:ot,attributeDivisors:it,object:C,attributes:{},index:null}}function y(C,B,ot,it){const gt=c.attributes,mt=B.attributes;let I=0;const Q=ot.getAttributes();for(const j in Q)if(Q[j].location>=0){const At=gt[j];let z=mt[j];if(z===void 0&&(j==="instanceMatrix"&&C.instanceMatrix&&(z=C.instanceMatrix),j==="instanceColor"&&C.instanceColor&&(z=C.instanceColor)),At===void 0||At.attribute!==z||z&&At.data!==z.data)return!0;I++}return c.attributesNum!==I||c.index!==it}function E(C,B,ot,it){const gt={},mt=B.attributes;let I=0;const Q=ot.getAttributes();for(const j in Q)if(Q[j].location>=0){let At=mt[j];At===void 0&&(j==="instanceMatrix"&&C.instanceMatrix&&(At=C.instanceMatrix),j==="instanceColor"&&C.instanceColor&&(At=C.instanceColor));const z={};z.attribute=At,At&&At.data&&(z.data=At.data),gt[j]=z,I++}c.attributes=gt,c.attributesNum=I,c.index=it}function b(){const C=c.newAttributes;for(let B=0,ot=C.length;B<ot;B++)C[B]=0}function M(C){v(C,0)}function v(C,B){const ot=c.newAttributes,it=c.enabledAttributes,gt=c.attributeDivisors;ot[C]=1,it[C]===0&&(r.enableVertexAttribArray(C),it[C]=1),gt[C]!==B&&(r.vertexAttribDivisor(C,B),gt[C]=B)}function O(){const C=c.newAttributes,B=c.enabledAttributes;for(let ot=0,it=B.length;ot<it;ot++)B[ot]!==C[ot]&&(r.disableVertexAttribArray(ot),B[ot]=0)}function N(C,B,ot,it,gt,mt,I){I===!0?r.vertexAttribIPointer(C,B,ot,gt,mt):r.vertexAttribPointer(C,B,ot,it,gt,mt)}function U(C,B,ot,it){b();const gt=it.attributes,mt=ot.getAttributes(),I=B.defaultAttributeValues;for(const Q in mt){const j=mt[Q];if(j.location>=0){let Mt=gt[Q];if(Mt===void 0&&(Q==="instanceMatrix"&&C.instanceMatrix&&(Mt=C.instanceMatrix),Q==="instanceColor"&&C.instanceColor&&(Mt=C.instanceColor)),Mt!==void 0){const At=Mt.normalized,z=Mt.itemSize,$=t.get(Mt);if($===void 0)continue;const xt=$.buffer,q=$.type,ct=$.bytesPerElement,Tt=q===r.INT||q===r.UNSIGNED_INT||Mt.gpuType===rp;if(Mt.isInterleavedBufferAttribute){const bt=Mt.data,Ut=bt.stride,Ft=Mt.offset;if(bt.isInstancedInterleavedBuffer){for(let ee=0;ee<j.locationSize;ee++)v(j.location+ee,bt.meshPerAttribute);C.isInstancedMesh!==!0&&it._maxInstanceCount===void 0&&(it._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let ee=0;ee<j.locationSize;ee++)M(j.location+ee);r.bindBuffer(r.ARRAY_BUFFER,xt);for(let ee=0;ee<j.locationSize;ee++)N(j.location+ee,z/j.locationSize,q,At,Ut*ct,(Ft+z/j.locationSize*ee)*ct,Tt)}else{if(Mt.isInstancedBufferAttribute){for(let bt=0;bt<j.locationSize;bt++)v(j.location+bt,Mt.meshPerAttribute);C.isInstancedMesh!==!0&&it._maxInstanceCount===void 0&&(it._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let bt=0;bt<j.locationSize;bt++)M(j.location+bt);r.bindBuffer(r.ARRAY_BUFFER,xt);for(let bt=0;bt<j.locationSize;bt++)N(j.location+bt,z/j.locationSize,q,At,z*ct,z/j.locationSize*bt*ct,Tt)}}else if(I!==void 0){const At=I[Q];if(At!==void 0)switch(At.length){case 2:r.vertexAttrib2fv(j.location,At);break;case 3:r.vertexAttrib3fv(j.location,At);break;case 4:r.vertexAttrib4fv(j.location,At);break;default:r.vertexAttrib1fv(j.location,At)}}}}O()}function X(){k();for(const C in s){const B=s[C];for(const ot in B){const it=B[ot];for(const gt in it)_(it[gt].object),delete it[gt];delete B[ot]}delete s[C]}}function G(C){if(s[C.id]===void 0)return;const B=s[C.id];for(const ot in B){const it=B[ot];for(const gt in it)_(it[gt].object),delete it[gt];delete B[ot]}delete s[C.id]}function P(C){for(const B in s){const ot=s[B];if(ot[C.id]===void 0)continue;const it=ot[C.id];for(const gt in it)_(it[gt].object),delete it[gt];delete ot[C.id]}}function k(){D(),f=!0,c!==l&&(c=l,m(c.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:k,resetDefaultState:D,dispose:X,releaseStatesOfGeometry:G,releaseStatesOfProgram:P,initAttributes:b,enableAttribute:M,disableUnusedAttributes:O}}function BT(r,t,i){let s;function l(m){s=m}function c(m,_){r.drawArrays(s,m,_),i.update(_,s,1)}function f(m,_,g){g!==0&&(r.drawArraysInstanced(s,m,_,g),i.update(_,s,g))}function d(m,_,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,_,0,g);let y=0;for(let E=0;E<g;E++)y+=_[E];i.update(y,s,1)}function p(m,_,g,x){if(g===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let E=0;E<m.length;E++)f(m[E],_[E],x[E]);else{y.multiDrawArraysInstancedWEBGL(s,m,0,_,0,x,0,g);let E=0;for(let b=0;b<g;b++)E+=_[b]*x[b];i.update(E,s,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function IT(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(P){return!(P!==Ui&&s.convert(P)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(P){const k=P===hl&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==ya&&s.convert(P)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Vi&&!k)}function p(P){if(P==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const _=p(m);_!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",_,"instead."),m=_);const g=i.logarithmicDepthBuffer===!0,x=i.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),y=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),O=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),N=r.getParameter(r.MAX_VARYING_VECTORS),U=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),X=E>0,G=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:f,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:g,reverseDepthBuffer:x,maxTextures:y,maxVertexTextures:E,maxTextureSize:b,maxCubemapSize:M,maxAttributes:v,maxVertexUniforms:O,maxVaryings:N,maxFragmentUniforms:U,vertexTextures:X,maxSamples:G}}function FT(r){const t=this;let i=null,s=0,l=!1,c=!1;const f=new Ka,d=new de,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(g,x){const y=g.length!==0||x||s!==0||l;return l=x,s=g.length,y},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,x){i=_(g,x,0)},this.setState=function(g,x,y){const E=g.clippingPlanes,b=g.clipIntersection,M=g.clipShadows,v=r.get(g);if(!l||E===null||E.length===0||c&&!M)c?_(null):m();else{const O=c?0:s,N=O*4;let U=v.clippingState||null;p.value=U,U=_(E,x,N,y);for(let X=0;X!==N;++X)U[X]=i[X];v.clippingState=U,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=O}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function _(g,x,y,E){const b=g!==null?g.length:0;let M=null;if(b!==0){if(M=p.value,E!==!0||M===null){const v=y+b*4,O=x.matrixWorldInverse;d.getNormalMatrix(O),(M===null||M.length<v)&&(M=new Float32Array(v));for(let N=0,U=y;N!==b;++N,U+=4)f.copy(g[N]).applyMatrix4(O,d),f.normal.toArray(M,U),M[U+3]=f.constant}p.value=M,p.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,M}}function HT(r){let t=new WeakMap;function i(f,d){return d===Ed?f.mapping=Wr:d===bd&&(f.mapping=Yr),f}function s(f){if(f&&f.isTexture){const d=f.mapping;if(d===Ed||d===bd)if(t.has(f)){const p=t.get(f).texture;return i(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const m=new O1(p.height);return m.fromEquirectangularTexture(r,f),t.set(f,m),f.addEventListener("dispose",l),i(m.texture,f.mapping)}else return null}}return f}function l(f){const d=f.target;d.removeEventListener("dispose",l);const p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function c(){t=new WeakMap}return{get:s,dispose:c}}const Fr=4,ev=[.125,.215,.35,.446,.526,.582],Ls=20,sd=new dx,nv=new me;let rd=null,od=0,ld=0,cd=!1;const Ds=(1+Math.sqrt(5))/2,zr=1/Ds,iv=[new J(-Ds,zr,0),new J(Ds,zr,0),new J(-zr,0,Ds),new J(zr,0,Ds),new J(0,Ds,-zr),new J(0,Ds,zr),new J(-1,1,-1),new J(1,1,-1),new J(-1,1,1),new J(1,1,1)];class av{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,s=.1,l=100){rd=this._renderer.getRenderTarget(),od=this._renderer.getActiveCubeFace(),ld=this._renderer.getActiveMipmapLevel(),cd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,s,l,c),i>0&&this._blur(c,0,0,i),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ov(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(rd,od,ld),this._renderer.xr.enabled=cd,t.scissorTest=!1,Qc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Wr||t.mapping===Yr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),rd=this._renderer.getRenderTarget(),od=this._renderer.getActiveCubeFace(),ld=this._renderer.getActiveMipmapLevel(),cd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Gi,minFilter:Gi,generateMipmaps:!1,type:hl,format:Ui,colorSpace:Kr,depthBuffer:!1},l=sv(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sv(t,i,s);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=GT(c)),this._blurMaterial=VT(c,t,i)}return l}_compileMaterial(t){const i=new Kn(this._lodPlanes[0],t);this._renderer.compile(i,sd)}_sceneToCubeUV(t,i,s,l){const d=new yi(90,1,i,s),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],_=this._renderer,g=_.autoClear,x=_.toneMapping;_.getClearColor(nv),_.toneMapping=$a,_.autoClear=!1;const y=new mp({name:"PMREM.Background",side:Qn,depthWrite:!1,depthTest:!1}),E=new Kn(new ts,y);let b=!1;const M=t.background;M?M.isColor&&(y.color.copy(M),t.background=null,b=!0):(y.color.copy(nv),b=!0);for(let v=0;v<6;v++){const O=v%3;O===0?(d.up.set(0,p[v],0),d.lookAt(m[v],0,0)):O===1?(d.up.set(0,0,p[v]),d.lookAt(0,m[v],0)):(d.up.set(0,p[v],0),d.lookAt(0,0,m[v]));const N=this._cubeSize;Qc(l,O*N,v>2?N:0,N,N),_.setRenderTarget(l),b&&_.render(E,d),_.render(t,d)}E.geometry.dispose(),E.material.dispose(),_.toneMapping=x,_.autoClear=g,t.background=M}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Wr||t.mapping===Yr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=ov()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rv());const c=l?this._cubemapMaterial:this._equirectMaterial,f=new Kn(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=t;const p=this._cubeSize;Qc(i,0,0,3*p,2*p),s.setRenderTarget(i),s.render(f,sd)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const f=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=iv[(l-c-1)%iv.length];this._blur(t,c-1,c,f,d)}i.autoClear=s}_blur(t,i,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,s,l,"latitudinal",c),this._halfBlur(f,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,f,d){const p=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,g=new Kn(this._lodPlanes[l],m),x=m.uniforms,y=this._sizeLods[s]-1,E=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*Ls-1),b=c/E,M=isFinite(c)?1+Math.floor(_*b):Ls;M>Ls&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Ls}`);const v=[];let O=0;for(let P=0;P<Ls;++P){const k=P/b,D=Math.exp(-k*k/2);v.push(D),P===0?O+=D:P<M&&(O+=2*D)}for(let P=0;P<v.length;P++)v[P]=v[P]/O;x.envMap.value=t.texture,x.samples.value=M,x.weights.value=v,x.latitudinal.value=f==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:N}=this;x.dTheta.value=E,x.mipInt.value=N-s;const U=this._sizeLods[l],X=3*U*(l>N-Fr?l-N+Fr:0),G=4*(this._cubeSize-U);Qc(i,X,G,3*U,2*U),p.setRenderTarget(i),p.render(g,sd)}}function GT(r){const t=[],i=[],s=[];let l=r;const c=r-Fr+1+ev.length;for(let f=0;f<c;f++){const d=Math.pow(2,l);i.push(d);let p=1/d;f>r-Fr?p=ev[f-r+Fr-1]:f===0&&(p=0),s.push(p);const m=1/(d-2),_=-m,g=1+m,x=[_,_,g,_,g,g,_,_,g,g,_,g],y=6,E=6,b=3,M=2,v=1,O=new Float32Array(b*E*y),N=new Float32Array(M*E*y),U=new Float32Array(v*E*y);for(let G=0;G<y;G++){const P=G%3*2/3-1,k=G>2?0:-1,D=[P,k,0,P+2/3,k,0,P+2/3,k+1,0,P,k,0,P+2/3,k+1,0,P,k+1,0];O.set(D,b*E*G),N.set(x,M*E*G);const C=[G,G,G,G,G,G];U.set(C,v*E*G)}const X=new Jn;X.setAttribute("position",new Li(O,b)),X.setAttribute("uv",new Li(N,M)),X.setAttribute("faceIndex",new Li(U,v)),t.push(X),l>Fr&&l--}return{lodPlanes:t,sizeLods:i,sigmas:s}}function sv(r,t,i){const s=new Ps(r,t,i);return s.texture.mapping=_u,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Qc(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function VT(r,t,i){const s=new Float32Array(Ls),l=new J(0,1,0);return new ns({name:"SphericalGaussianBlur",defines:{n:Ls,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:xp(),fragmentShader:`

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
		`,blending:Ja,depthTest:!1,depthWrite:!1})}function rv(){return new ns({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xp(),fragmentShader:`

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
		`,blending:Ja,depthTest:!1,depthWrite:!1})}function ov(){return new ns({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ja,depthTest:!1,depthWrite:!1})}function xp(){return`

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
	`}function kT(r){let t=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const p=d.mapping,m=p===Ed||p===bd,_=p===Wr||p===Yr;if(m||_){let g=t.get(d);const x=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new av(r)),g=m?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{const y=d.image;return m&&y&&y.height>0||_&&y&&l(y)?(i===null&&(i=new av(r)),g=m?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",c),g.texture):null}}}return d}function l(d){let p=0;const m=6;for(let _=0;_<m;_++)d[_]!==void 0&&p++;return p===m}function c(d){const p=d.target;p.removeEventListener("dispose",c);const m=t.get(p);m!==void 0&&(t.delete(p),m.dispose())}function f(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function XT(r){const t={};function i(s){if(t[s]!==void 0)return t[s];let l;switch(s){case"WEBGL_depth_texture":l=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=r.getExtension(s)}return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Br("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function jT(r,t,i,s){const l={},c=new WeakMap;function f(g){const x=g.target;x.index!==null&&t.remove(x.index);for(const E in x.attributes)t.remove(x.attributes[E]);x.removeEventListener("dispose",f),delete l[x.id];const y=c.get(x);y&&(t.remove(y),c.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(g,x){return l[x.id]===!0||(x.addEventListener("dispose",f),l[x.id]=!0,i.memory.geometries++),x}function p(g){const x=g.attributes;for(const y in x)t.update(x[y],r.ARRAY_BUFFER)}function m(g){const x=[],y=g.index,E=g.attributes.position;let b=0;if(y!==null){const O=y.array;b=y.version;for(let N=0,U=O.length;N<U;N+=3){const X=O[N+0],G=O[N+1],P=O[N+2];x.push(X,G,G,P,P,X)}}else if(E!==void 0){const O=E.array;b=E.version;for(let N=0,U=O.length/3-1;N<U;N+=3){const X=N+0,G=N+1,P=N+2;x.push(X,G,G,P,P,X)}}else return;const M=new(nx(x)?ox:rx)(x,1);M.version=b;const v=c.get(g);v&&t.remove(v),c.set(g,M)}function _(g){const x=c.get(g);if(x){const y=g.index;y!==null&&x.version<y.version&&m(g)}else m(g);return c.get(g)}return{get:d,update:p,getWireframeAttribute:_}}function WT(r,t,i){let s;function l(x){s=x}let c,f;function d(x){c=x.type,f=x.bytesPerElement}function p(x,y){r.drawElements(s,y,c,x*f),i.update(y,s,1)}function m(x,y,E){E!==0&&(r.drawElementsInstanced(s,y,c,x*f,E),i.update(y,s,E))}function _(x,y,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,y,0,c,x,0,E);let M=0;for(let v=0;v<E;v++)M+=y[v];i.update(M,s,1)}function g(x,y,E,b){if(E===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let v=0;v<x.length;v++)m(x[v]/f,y[v],b[v]);else{M.multiDrawElementsInstancedWEBGL(s,y,0,c,x,0,b,0,E);let v=0;for(let O=0;O<E;O++)v+=y[O]*b[O];i.update(v,s,1)}}this.setMode=l,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=_,this.renderMultiDrawInstances=g}function YT(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,d){switch(i.calls++,f){case r.TRIANGLES:i.triangles+=d*(c/3);break;case r.LINES:i.lines+=d*(c/2);break;case r.LINE_STRIP:i.lines+=d*(c-1);break;case r.LINE_LOOP:i.lines+=d*c;break;case r.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function qT(r,t,i){const s=new WeakMap,l=new nn;function c(f,d,p){const m=f.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=_!==void 0?_.length:0;let x=s.get(d);if(x===void 0||x.count!==g){let C=function(){k.dispose(),s.delete(d),d.removeEventListener("dispose",C)};var y=C;x!==void 0&&x.texture.dispose();const E=d.morphAttributes.position!==void 0,b=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,v=d.morphAttributes.position||[],O=d.morphAttributes.normal||[],N=d.morphAttributes.color||[];let U=0;E===!0&&(U=1),b===!0&&(U=2),M===!0&&(U=3);let X=d.attributes.position.count*U,G=1;X>t.maxTextureSize&&(G=Math.ceil(X/t.maxTextureSize),X=t.maxTextureSize);const P=new Float32Array(X*G*4*g),k=new ax(P,X,G,g);k.type=Vi,k.needsUpdate=!0;const D=U*4;for(let B=0;B<g;B++){const ot=v[B],it=O[B],gt=N[B],mt=X*G*4*B;for(let I=0;I<ot.count;I++){const Q=I*D;E===!0&&(l.fromBufferAttribute(ot,I),P[mt+Q+0]=l.x,P[mt+Q+1]=l.y,P[mt+Q+2]=l.z,P[mt+Q+3]=0),b===!0&&(l.fromBufferAttribute(it,I),P[mt+Q+4]=l.x,P[mt+Q+5]=l.y,P[mt+Q+6]=l.z,P[mt+Q+7]=0),M===!0&&(l.fromBufferAttribute(gt,I),P[mt+Q+8]=l.x,P[mt+Q+9]=l.y,P[mt+Q+10]=l.z,P[mt+Q+11]=gt.itemSize===4?l.w:1)}}x={count:g,texture:k,size:new le(X,G)},s.set(d,x),d.addEventListener("dispose",C)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)p.getUniforms().setValue(r,"morphTexture",f.morphTexture,i);else{let E=0;for(let M=0;M<m.length;M++)E+=m[M];const b=d.morphTargetsRelative?1:1-E;p.getUniforms().setValue(r,"morphTargetBaseInfluence",b),p.getUniforms().setValue(r,"morphTargetInfluences",m)}p.getUniforms().setValue(r,"morphTargetsTexture",x.texture,i),p.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}return{update:c}}function ZT(r,t,i,s){let l=new WeakMap;function c(p){const m=s.render.frame,_=p.geometry,g=t.get(p,_);if(l.get(g)!==m&&(t.update(g),l.set(g,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),l.get(p)!==m&&(i.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,r.ARRAY_BUFFER),l.set(p,m))),p.isSkinnedMesh){const x=p.skeleton;l.get(x)!==m&&(x.update(),l.set(x,m))}return g}function f(){l=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:c,dispose:f}}const mx=new Vn,lv=new fx(1,1),gx=new ax,_x=new v1,vx=new ux,cv=[],uv=[],fv=new Float32Array(16),hv=new Float32Array(9),dv=new Float32Array(4);function no(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=cv[l];if(c===void 0&&(c=new Float32Array(l),cv[l]=c),t!==0){s.toArray(c,0);for(let f=1,d=0;f!==t;++f)d+=i,r[f].toArray(c,d)}return c}function vn(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function xn(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function yu(r,t){let i=uv[t];i===void 0&&(i=new Int32Array(t),uv[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function KT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function QT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(vn(i,t))return;r.uniform2fv(this.addr,t),xn(i,t)}}function JT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(vn(i,t))return;r.uniform3fv(this.addr,t),xn(i,t)}}function $T(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(vn(i,t))return;r.uniform4fv(this.addr,t),xn(i,t)}}function tA(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(vn(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),xn(i,t)}else{if(vn(i,s))return;dv.set(s),r.uniformMatrix2fv(this.addr,!1,dv),xn(i,s)}}function eA(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(vn(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),xn(i,t)}else{if(vn(i,s))return;hv.set(s),r.uniformMatrix3fv(this.addr,!1,hv),xn(i,s)}}function nA(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(vn(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),xn(i,t)}else{if(vn(i,s))return;fv.set(s),r.uniformMatrix4fv(this.addr,!1,fv),xn(i,s)}}function iA(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function aA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(vn(i,t))return;r.uniform2iv(this.addr,t),xn(i,t)}}function sA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(vn(i,t))return;r.uniform3iv(this.addr,t),xn(i,t)}}function rA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(vn(i,t))return;r.uniform4iv(this.addr,t),xn(i,t)}}function oA(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function lA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(vn(i,t))return;r.uniform2uiv(this.addr,t),xn(i,t)}}function cA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(vn(i,t))return;r.uniform3uiv(this.addr,t),xn(i,t)}}function uA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(vn(i,t))return;r.uniform4uiv(this.addr,t),xn(i,t)}}function fA(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(lv.compareFunction=tx,c=lv):c=mx,i.setTexture2D(t||c,l)}function hA(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||_x,l)}function dA(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||vx,l)}function pA(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||gx,l)}function mA(r){switch(r){case 5126:return KT;case 35664:return QT;case 35665:return JT;case 35666:return $T;case 35674:return tA;case 35675:return eA;case 35676:return nA;case 5124:case 35670:return iA;case 35667:case 35671:return aA;case 35668:case 35672:return sA;case 35669:case 35673:return rA;case 5125:return oA;case 36294:return lA;case 36295:return cA;case 36296:return uA;case 35678:case 36198:case 36298:case 36306:case 35682:return fA;case 35679:case 36299:case 36307:return hA;case 35680:case 36300:case 36308:case 36293:return dA;case 36289:case 36303:case 36311:case 36292:return pA}}function gA(r,t){r.uniform1fv(this.addr,t)}function _A(r,t){const i=no(t,this.size,2);r.uniform2fv(this.addr,i)}function vA(r,t){const i=no(t,this.size,3);r.uniform3fv(this.addr,i)}function xA(r,t){const i=no(t,this.size,4);r.uniform4fv(this.addr,i)}function yA(r,t){const i=no(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function SA(r,t){const i=no(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function MA(r,t){const i=no(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function EA(r,t){r.uniform1iv(this.addr,t)}function bA(r,t){r.uniform2iv(this.addr,t)}function TA(r,t){r.uniform3iv(this.addr,t)}function AA(r,t){r.uniform4iv(this.addr,t)}function RA(r,t){r.uniform1uiv(this.addr,t)}function CA(r,t){r.uniform2uiv(this.addr,t)}function wA(r,t){r.uniform3uiv(this.addr,t)}function DA(r,t){r.uniform4uiv(this.addr,t)}function UA(r,t,i){const s=this.cache,l=t.length,c=yu(i,l);vn(s,c)||(r.uniform1iv(this.addr,c),xn(s,c));for(let f=0;f!==l;++f)i.setTexture2D(t[f]||mx,c[f])}function LA(r,t,i){const s=this.cache,l=t.length,c=yu(i,l);vn(s,c)||(r.uniform1iv(this.addr,c),xn(s,c));for(let f=0;f!==l;++f)i.setTexture3D(t[f]||_x,c[f])}function NA(r,t,i){const s=this.cache,l=t.length,c=yu(i,l);vn(s,c)||(r.uniform1iv(this.addr,c),xn(s,c));for(let f=0;f!==l;++f)i.setTextureCube(t[f]||vx,c[f])}function OA(r,t,i){const s=this.cache,l=t.length,c=yu(i,l);vn(s,c)||(r.uniform1iv(this.addr,c),xn(s,c));for(let f=0;f!==l;++f)i.setTexture2DArray(t[f]||gx,c[f])}function zA(r){switch(r){case 5126:return gA;case 35664:return _A;case 35665:return vA;case 35666:return xA;case 35674:return yA;case 35675:return SA;case 35676:return MA;case 5124:case 35670:return EA;case 35667:case 35671:return bA;case 35668:case 35672:return TA;case 35669:case 35673:return AA;case 5125:return RA;case 36294:return CA;case 36295:return wA;case 36296:return DA;case 35678:case 36198:case 36298:case 36306:case 35682:return UA;case 35679:case 36299:case 36307:return LA;case 35680:case 36300:case 36308:case 36293:return NA;case 36289:case 36303:case 36311:case 36292:return OA}}class PA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=mA(i.type)}}class BA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=zA(i.type)}}class IA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const d=l[c];d.setValue(t,i[d.id],s)}}}const ud=/(\w+)(\])?(\[|\.)?/g;function pv(r,t){r.seq.push(t),r.map[t.id]=t}function FA(r,t,i){const s=r.name,l=s.length;for(ud.lastIndex=0;;){const c=ud.exec(s),f=ud.lastIndex;let d=c[1];const p=c[2]==="]",m=c[3];if(p&&(d=d|0),m===void 0||m==="["&&f+2===l){pv(i,m===void 0?new PA(d,r,t):new BA(d,r,t));break}else{let g=i.map[d];g===void 0&&(g=new IA(d),pv(i,g)),i=g}}}class ou{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const c=t.getActiveUniform(i,l),f=t.getUniformLocation(i,c.name);FA(c,f,this)}}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,f=i.length;c!==f;++c){const d=i[c],p=s[d.id];p.needsUpdate!==!1&&d.setValue(t,p.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const f=t[l];f.id in i&&s.push(f)}return s}}function mv(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const HA=37297;let GA=0;function VA(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let f=l;f<c;f++){const d=f+1;s.push(`${d===t?">":" "} ${d}: ${i[f]}`)}return s.join(`
`)}const gv=new de;function kA(r){Le._getMatrix(gv,Le.workingColorSpace,r);const t=`mat3( ${gv.elements.map(i=>i.toFixed(4))} )`;switch(Le.getTransfer(r)){case fu:return[t,"LinearTransferOETF"];case Xe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function _v(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),l=r.getShaderInfoLog(t).trim();if(s&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const f=parseInt(c[1]);return i.toUpperCase()+`

`+l+`

`+VA(r.getShaderSource(t),f)}else return l}function XA(r,t){const i=kA(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function jA(r,t){let i;switch(t){case wM:i="Linear";break;case DM:i="Reinhard";break;case UM:i="Cineon";break;case LM:i="ACESFilmic";break;case OM:i="AgX";break;case zM:i="Neutral";break;case NM:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Jc=new J;function WA(){Le.getLuminanceCoefficients(Jc);const r=Jc.x.toFixed(4),t=Jc.y.toFixed(4),i=Jc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function YA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ol).join(`
`)}function qA(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function ZA(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),f=c.name;let d=1;c.type===r.FLOAT_MAT2&&(d=2),c.type===r.FLOAT_MAT3&&(d=3),c.type===r.FLOAT_MAT4&&(d=4),i[f]={type:c.type,location:r.getAttribLocation(t,f),locationSize:d}}return i}function ol(r){return r!==""}function vv(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function xv(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const KA=/^[ \t]*#include +<([\w\d./]+)>/gm;function ep(r){return r.replace(KA,JA)}const QA=new Map;function JA(r,t){let i=pe[t];if(i===void 0){const s=QA.get(t);if(s!==void 0)i=pe[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return ep(i)}const $A=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yv(r){return r.replace($A,t2)}function t2(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Sv(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}function e2(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Hv?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===Gv?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ga&&(t="SHADOWMAP_TYPE_VSM"),t}function n2(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Wr:case Yr:t="ENVMAP_TYPE_CUBE";break;case _u:t="ENVMAP_TYPE_CUBE_UV";break}return t}function i2(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Yr:t="ENVMAP_MODE_REFRACTION";break}return t}function a2(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Vv:t="ENVMAP_BLENDING_MULTIPLY";break;case RM:t="ENVMAP_BLENDING_MIX";break;case CM:t="ENVMAP_BLENDING_ADD";break}return t}function s2(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function r2(r,t,i,s){const l=r.getContext(),c=i.defines;let f=i.vertexShader,d=i.fragmentShader;const p=e2(i),m=n2(i),_=i2(i),g=a2(i),x=s2(i),y=YA(i),E=qA(c),b=l.createProgram();let M,v,O=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(ol).join(`
`),M.length>0&&(M+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(ol).join(`
`),v.length>0&&(v+=`
`)):(M=[Sv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ol).join(`
`),v=[Sv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+_:"",i.envMap?"#define "+g:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==$a?"#define TONE_MAPPING":"",i.toneMapping!==$a?pe.tonemapping_pars_fragment:"",i.toneMapping!==$a?jA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",pe.colorspace_pars_fragment,XA("linearToOutputTexel",i.outputColorSpace),WA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(ol).join(`
`)),f=ep(f),f=vv(f,i),f=xv(f,i),d=ep(d),d=vv(d,i),d=xv(d,i),f=yv(f),d=yv(d),i.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,v=["#define varying in",i.glslVersion===b_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===b_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const N=O+M+f,U=O+v+d,X=mv(l,l.VERTEX_SHADER,N),G=mv(l,l.FRAGMENT_SHADER,U);l.attachShader(b,X),l.attachShader(b,G),i.index0AttributeName!==void 0?l.bindAttribLocation(b,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(b,0,"position"),l.linkProgram(b);function P(B){if(r.debug.checkShaderErrors){const ot=l.getProgramInfoLog(b).trim(),it=l.getShaderInfoLog(X).trim(),gt=l.getShaderInfoLog(G).trim();let mt=!0,I=!0;if(l.getProgramParameter(b,l.LINK_STATUS)===!1)if(mt=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,b,X,G);else{const Q=_v(l,X,"vertex"),j=_v(l,G,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(b,l.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+ot+`
`+Q+`
`+j)}else ot!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ot):(it===""||gt==="")&&(I=!1);I&&(B.diagnostics={runnable:mt,programLog:ot,vertexShader:{log:it,prefix:M},fragmentShader:{log:gt,prefix:v}})}l.deleteShader(X),l.deleteShader(G),k=new ou(l,b),D=ZA(l,b)}let k;this.getUniforms=function(){return k===void 0&&P(this),k};let D;this.getAttributes=function(){return D===void 0&&P(this),D};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(b,HA)),C},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(b),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=GA++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=X,this.fragmentShader=G,this}let o2=0;class l2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new c2(t),i.set(t,s)),s}}class c2{constructor(t){this.id=o2++,this.code=t,this.usedTimes=0}}function u2(r,t,i,s,l,c,f){const d=new pp,p=new l2,m=new Set,_=[],g=l.logarithmicDepthBuffer,x=l.vertexTextures;let y=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(D){return m.add(D),D===0?"uv":`uv${D}`}function M(D,C,B,ot,it){const gt=ot.fog,mt=it.geometry,I=D.isMeshStandardMaterial?ot.environment:null,Q=(D.isMeshStandardMaterial?i:t).get(D.envMap||I),j=Q&&Q.mapping===_u?Q.image.height:null,Mt=E[D.type];D.precision!==null&&(y=l.getMaxPrecision(D.precision),y!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",y,"instead."));const At=mt.morphAttributes.position||mt.morphAttributes.normal||mt.morphAttributes.color,z=At!==void 0?At.length:0;let $=0;mt.morphAttributes.position!==void 0&&($=1),mt.morphAttributes.normal!==void 0&&($=2),mt.morphAttributes.color!==void 0&&($=3);let xt,q,ct,Tt;if(Mt){const Ae=Fi[Mt];xt=Ae.vertexShader,q=Ae.fragmentShader}else xt=D.vertexShader,q=D.fragmentShader,p.update(D),ct=p.getVertexShaderID(D),Tt=p.getFragmentShaderID(D);const bt=r.getRenderTarget(),Ut=r.state.buffers.depth.getReversed(),Ft=it.isInstancedMesh===!0,ee=it.isBatchedMesh===!0,Te=!!D.map,ht=!!D.matcap,Ct=!!Q,F=!!D.aoMap,Ne=!!D.lightMap,se=!!D.bumpMap,re=!!D.normalMap,jt=!!D.displacementMap,Re=!!D.emissiveMap,Yt=!!D.metalnessMap,w=!!D.roughnessMap,T=D.anisotropy>0,tt=D.clearcoat>0,ut=D.dispersion>0,yt=D.iridescence>0,pt=D.sheen>0,Vt=D.transmission>0,wt=T&&!!D.anisotropyMap,Dt=tt&&!!D.clearcoatMap,ge=tt&&!!D.clearcoatNormalMap,Rt=tt&&!!D.clearcoatRoughnessMap,It=yt&&!!D.iridescenceMap,qt=yt&&!!D.iridescenceThicknessMap,Zt=pt&&!!D.sheenColorMap,Bt=pt&&!!D.sheenRoughnessMap,ne=!!D.specularMap,ce=!!D.specularColorMap,He=!!D.specularIntensityMap,W=Vt&&!!D.transmissionMap,Lt=Vt&&!!D.thicknessMap,ft=!!D.gradientMap,St=!!D.alphaMap,Nt=D.alphaTest>0,Ot=!!D.alphaHash,ie=!!D.extensions;let Qe=$a;D.toneMapped&&(bt===null||bt.isXRRenderTarget===!0)&&(Qe=r.toneMapping);const pn={shaderID:Mt,shaderType:D.type,shaderName:D.name,vertexShader:xt,fragmentShader:q,defines:D.defines,customVertexShaderID:ct,customFragmentShaderID:Tt,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:y,batching:ee,batchingColor:ee&&it._colorsTexture!==null,instancing:Ft,instancingColor:Ft&&it.instanceColor!==null,instancingMorph:Ft&&it.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:bt===null?r.outputColorSpace:bt.isXRRenderTarget===!0?bt.texture.colorSpace:Kr,alphaToCoverage:!!D.alphaToCoverage,map:Te,matcap:ht,envMap:Ct,envMapMode:Ct&&Q.mapping,envMapCubeUVHeight:j,aoMap:F,lightMap:Ne,bumpMap:se,normalMap:re,displacementMap:x&&jt,emissiveMap:Re,normalMapObjectSpace:re&&D.normalMapType===FM,normalMapTangentSpace:re&&D.normalMapType===$v,metalnessMap:Yt,roughnessMap:w,anisotropy:T,anisotropyMap:wt,clearcoat:tt,clearcoatMap:Dt,clearcoatNormalMap:ge,clearcoatRoughnessMap:Rt,dispersion:ut,iridescence:yt,iridescenceMap:It,iridescenceThicknessMap:qt,sheen:pt,sheenColorMap:Zt,sheenRoughnessMap:Bt,specularMap:ne,specularColorMap:ce,specularIntensityMap:He,transmission:Vt,transmissionMap:W,thicknessMap:Lt,gradientMap:ft,opaque:D.transparent===!1&&D.blending===Hr&&D.alphaToCoverage===!1,alphaMap:St,alphaTest:Nt,alphaHash:Ot,combine:D.combine,mapUv:Te&&b(D.map.channel),aoMapUv:F&&b(D.aoMap.channel),lightMapUv:Ne&&b(D.lightMap.channel),bumpMapUv:se&&b(D.bumpMap.channel),normalMapUv:re&&b(D.normalMap.channel),displacementMapUv:jt&&b(D.displacementMap.channel),emissiveMapUv:Re&&b(D.emissiveMap.channel),metalnessMapUv:Yt&&b(D.metalnessMap.channel),roughnessMapUv:w&&b(D.roughnessMap.channel),anisotropyMapUv:wt&&b(D.anisotropyMap.channel),clearcoatMapUv:Dt&&b(D.clearcoatMap.channel),clearcoatNormalMapUv:ge&&b(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Rt&&b(D.clearcoatRoughnessMap.channel),iridescenceMapUv:It&&b(D.iridescenceMap.channel),iridescenceThicknessMapUv:qt&&b(D.iridescenceThicknessMap.channel),sheenColorMapUv:Zt&&b(D.sheenColorMap.channel),sheenRoughnessMapUv:Bt&&b(D.sheenRoughnessMap.channel),specularMapUv:ne&&b(D.specularMap.channel),specularColorMapUv:ce&&b(D.specularColorMap.channel),specularIntensityMapUv:He&&b(D.specularIntensityMap.channel),transmissionMapUv:W&&b(D.transmissionMap.channel),thicknessMapUv:Lt&&b(D.thicknessMap.channel),alphaMapUv:St&&b(D.alphaMap.channel),vertexTangents:!!mt.attributes.tangent&&(re||T),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!mt.attributes.color&&mt.attributes.color.itemSize===4,pointsUvs:it.isPoints===!0&&!!mt.attributes.uv&&(Te||St),fog:!!gt,useFog:D.fog===!0,fogExp2:!!gt&&gt.isFogExp2,flatShading:D.flatShading===!0,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:g,reverseDepthBuffer:Ut,skinning:it.isSkinnedMesh===!0,morphTargets:mt.morphAttributes.position!==void 0,morphNormals:mt.morphAttributes.normal!==void 0,morphColors:mt.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:$,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:D.dithering,shadowMapEnabled:r.shadowMap.enabled&&B.length>0,shadowMapType:r.shadowMap.type,toneMapping:Qe,decodeVideoTexture:Te&&D.map.isVideoTexture===!0&&Le.getTransfer(D.map.colorSpace)===Xe,decodeVideoTextureEmissive:Re&&D.emissiveMap.isVideoTexture===!0&&Le.getTransfer(D.emissiveMap.colorSpace)===Xe,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===Hi,flipSided:D.side===Qn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:ie&&D.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ie&&D.extensions.multiDraw===!0||ee)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return pn.vertexUv1s=m.has(1),pn.vertexUv2s=m.has(2),pn.vertexUv3s=m.has(3),m.clear(),pn}function v(D){const C=[];if(D.shaderID?C.push(D.shaderID):(C.push(D.customVertexShaderID),C.push(D.customFragmentShaderID)),D.defines!==void 0)for(const B in D.defines)C.push(B),C.push(D.defines[B]);return D.isRawShaderMaterial===!1&&(O(C,D),N(C,D),C.push(r.outputColorSpace)),C.push(D.customProgramCacheKey),C.join()}function O(D,C){D.push(C.precision),D.push(C.outputColorSpace),D.push(C.envMapMode),D.push(C.envMapCubeUVHeight),D.push(C.mapUv),D.push(C.alphaMapUv),D.push(C.lightMapUv),D.push(C.aoMapUv),D.push(C.bumpMapUv),D.push(C.normalMapUv),D.push(C.displacementMapUv),D.push(C.emissiveMapUv),D.push(C.metalnessMapUv),D.push(C.roughnessMapUv),D.push(C.anisotropyMapUv),D.push(C.clearcoatMapUv),D.push(C.clearcoatNormalMapUv),D.push(C.clearcoatRoughnessMapUv),D.push(C.iridescenceMapUv),D.push(C.iridescenceThicknessMapUv),D.push(C.sheenColorMapUv),D.push(C.sheenRoughnessMapUv),D.push(C.specularMapUv),D.push(C.specularColorMapUv),D.push(C.specularIntensityMapUv),D.push(C.transmissionMapUv),D.push(C.thicknessMapUv),D.push(C.combine),D.push(C.fogExp2),D.push(C.sizeAttenuation),D.push(C.morphTargetsCount),D.push(C.morphAttributeCount),D.push(C.numDirLights),D.push(C.numPointLights),D.push(C.numSpotLights),D.push(C.numSpotLightMaps),D.push(C.numHemiLights),D.push(C.numRectAreaLights),D.push(C.numDirLightShadows),D.push(C.numPointLightShadows),D.push(C.numSpotLightShadows),D.push(C.numSpotLightShadowsWithMaps),D.push(C.numLightProbes),D.push(C.shadowMapType),D.push(C.toneMapping),D.push(C.numClippingPlanes),D.push(C.numClipIntersection),D.push(C.depthPacking)}function N(D,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),D.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reverseDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),D.push(d.mask)}function U(D){const C=E[D.type];let B;if(C){const ot=Fi[C];B=D1.clone(ot.uniforms)}else B=D.uniforms;return B}function X(D,C){let B;for(let ot=0,it=_.length;ot<it;ot++){const gt=_[ot];if(gt.cacheKey===C){B=gt,++B.usedTimes;break}}return B===void 0&&(B=new r2(r,C,D,c),_.push(B)),B}function G(D){if(--D.usedTimes===0){const C=_.indexOf(D);_[C]=_[_.length-1],_.pop(),D.destroy()}}function P(D){p.remove(D)}function k(){p.dispose()}return{getParameters:M,getProgramCacheKey:v,getUniforms:U,acquireProgram:X,releaseProgram:G,releaseShaderCache:P,programs:_,dispose:k}}function f2(){let r=new WeakMap;function t(f){return r.has(f)}function i(f){let d=r.get(f);return d===void 0&&(d={},r.set(f,d)),d}function s(f){r.delete(f)}function l(f,d,p){r.get(f)[d]=p}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function h2(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Mv(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Ev(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function f(g,x,y,E,b,M){let v=r[t];return v===void 0?(v={id:g.id,object:g,geometry:x,material:y,groupOrder:E,renderOrder:g.renderOrder,z:b,group:M},r[t]=v):(v.id=g.id,v.object=g,v.geometry=x,v.material=y,v.groupOrder=E,v.renderOrder=g.renderOrder,v.z=b,v.group=M),t++,v}function d(g,x,y,E,b,M){const v=f(g,x,y,E,b,M);y.transmission>0?s.push(v):y.transparent===!0?l.push(v):i.push(v)}function p(g,x,y,E,b,M){const v=f(g,x,y,E,b,M);y.transmission>0?s.unshift(v):y.transparent===!0?l.unshift(v):i.unshift(v)}function m(g,x){i.length>1&&i.sort(g||h2),s.length>1&&s.sort(x||Mv),l.length>1&&l.sort(x||Mv)}function _(){for(let g=t,x=r.length;g<x;g++){const y=r[g];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:d,unshift:p,finish:_,sort:m}}function d2(){let r=new WeakMap;function t(s,l){const c=r.get(s);let f;return c===void 0?(f=new Ev,r.set(s,[f])):l>=c.length?(f=new Ev,c.push(f)):f=c[l],f}function i(){r=new WeakMap}return{get:t,dispose:i}}function p2(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new J,color:new me};break;case"SpotLight":i={position:new J,direction:new J,color:new me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new J,color:new me,distance:0,decay:0};break;case"HemisphereLight":i={direction:new J,skyColor:new me,groundColor:new me};break;case"RectAreaLight":i={color:new me,position:new J,halfWidth:new J,halfHeight:new J};break}return r[t.id]=i,i}}}function m2(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let g2=0;function _2(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function v2(r){const t=new p2,i=m2(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)s.probe.push(new J);const l=new J,c=new Fe,f=new Fe;function d(m){let _=0,g=0,x=0;for(let D=0;D<9;D++)s.probe[D].set(0,0,0);let y=0,E=0,b=0,M=0,v=0,O=0,N=0,U=0,X=0,G=0,P=0;m.sort(_2);for(let D=0,C=m.length;D<C;D++){const B=m[D],ot=B.color,it=B.intensity,gt=B.distance,mt=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)_+=ot.r*it,g+=ot.g*it,x+=ot.b*it;else if(B.isLightProbe){for(let I=0;I<9;I++)s.probe[I].addScaledVector(B.sh.coefficients[I],it);P++}else if(B.isDirectionalLight){const I=t.get(B);if(I.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const Q=B.shadow,j=i.get(B);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize=Q.mapSize,s.directionalShadow[y]=j,s.directionalShadowMap[y]=mt,s.directionalShadowMatrix[y]=B.shadow.matrix,O++}s.directional[y]=I,y++}else if(B.isSpotLight){const I=t.get(B);I.position.setFromMatrixPosition(B.matrixWorld),I.color.copy(ot).multiplyScalar(it),I.distance=gt,I.coneCos=Math.cos(B.angle),I.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),I.decay=B.decay,s.spot[b]=I;const Q=B.shadow;if(B.map&&(s.spotLightMap[X]=B.map,X++,Q.updateMatrices(B),B.castShadow&&G++),s.spotLightMatrix[b]=Q.matrix,B.castShadow){const j=i.get(B);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize=Q.mapSize,s.spotShadow[b]=j,s.spotShadowMap[b]=mt,U++}b++}else if(B.isRectAreaLight){const I=t.get(B);I.color.copy(ot).multiplyScalar(it),I.halfWidth.set(B.width*.5,0,0),I.halfHeight.set(0,B.height*.5,0),s.rectArea[M]=I,M++}else if(B.isPointLight){const I=t.get(B);if(I.color.copy(B.color).multiplyScalar(B.intensity),I.distance=B.distance,I.decay=B.decay,B.castShadow){const Q=B.shadow,j=i.get(B);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize=Q.mapSize,j.shadowCameraNear=Q.camera.near,j.shadowCameraFar=Q.camera.far,s.pointShadow[E]=j,s.pointShadowMap[E]=mt,s.pointShadowMatrix[E]=B.shadow.matrix,N++}s.point[E]=I,E++}else if(B.isHemisphereLight){const I=t.get(B);I.skyColor.copy(B.color).multiplyScalar(it),I.groundColor.copy(B.groundColor).multiplyScalar(it),s.hemi[v]=I,v++}}M>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Pt.LTC_FLOAT_1,s.rectAreaLTC2=Pt.LTC_FLOAT_2):(s.rectAreaLTC1=Pt.LTC_HALF_1,s.rectAreaLTC2=Pt.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=g,s.ambient[2]=x;const k=s.hash;(k.directionalLength!==y||k.pointLength!==E||k.spotLength!==b||k.rectAreaLength!==M||k.hemiLength!==v||k.numDirectionalShadows!==O||k.numPointShadows!==N||k.numSpotShadows!==U||k.numSpotMaps!==X||k.numLightProbes!==P)&&(s.directional.length=y,s.spot.length=b,s.rectArea.length=M,s.point.length=E,s.hemi.length=v,s.directionalShadow.length=O,s.directionalShadowMap.length=O,s.pointShadow.length=N,s.pointShadowMap.length=N,s.spotShadow.length=U,s.spotShadowMap.length=U,s.directionalShadowMatrix.length=O,s.pointShadowMatrix.length=N,s.spotLightMatrix.length=U+X-G,s.spotLightMap.length=X,s.numSpotLightShadowsWithMaps=G,s.numLightProbes=P,k.directionalLength=y,k.pointLength=E,k.spotLength=b,k.rectAreaLength=M,k.hemiLength=v,k.numDirectionalShadows=O,k.numPointShadows=N,k.numSpotShadows=U,k.numSpotMaps=X,k.numLightProbes=P,s.version=g2++)}function p(m,_){let g=0,x=0,y=0,E=0,b=0;const M=_.matrixWorldInverse;for(let v=0,O=m.length;v<O;v++){const N=m[v];if(N.isDirectionalLight){const U=s.directional[g];U.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(M),g++}else if(N.isSpotLight){const U=s.spot[y];U.position.setFromMatrixPosition(N.matrixWorld),U.position.applyMatrix4(M),U.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(M),y++}else if(N.isRectAreaLight){const U=s.rectArea[E];U.position.setFromMatrixPosition(N.matrixWorld),U.position.applyMatrix4(M),f.identity(),c.copy(N.matrixWorld),c.premultiply(M),f.extractRotation(c),U.halfWidth.set(N.width*.5,0,0),U.halfHeight.set(0,N.height*.5,0),U.halfWidth.applyMatrix4(f),U.halfHeight.applyMatrix4(f),E++}else if(N.isPointLight){const U=s.point[x];U.position.setFromMatrixPosition(N.matrixWorld),U.position.applyMatrix4(M),x++}else if(N.isHemisphereLight){const U=s.hemi[b];U.direction.setFromMatrixPosition(N.matrixWorld),U.direction.transformDirection(M),b++}}}return{setup:d,setupView:p,state:s}}function bv(r){const t=new v2(r),i=[],s=[];function l(_){m.camera=_,i.length=0,s.length=0}function c(_){i.push(_)}function f(_){s.push(_)}function d(){t.setup(i)}function p(_){t.setupView(i,_)}const m={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:m,setupLights:d,setupLightsView:p,pushLight:c,pushShadow:f}}function x2(r){let t=new WeakMap;function i(l,c=0){const f=t.get(l);let d;return f===void 0?(d=new bv(r),t.set(l,[d])):c>=f.length?(d=new bv(r),f.push(d)):d=f[c],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const y2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,S2=`uniform sampler2D shadow_pass;
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
}`;function M2(r,t,i){let s=new _p;const l=new le,c=new le,f=new nn,d=new V1({depthPacking:IM}),p=new k1,m={},_=i.maxTextureSize,g={[es]:Qn,[Qn]:es,[Hi]:Hi},x=new ns({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:y2,fragmentShader:S2}),y=x.clone();y.defines.HORIZONTAL_PASS=1;const E=new Jn;E.setAttribute("position",new Li(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Kn(E,x),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hv;let v=this.type;this.render=function(G,P,k){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||G.length===0)return;const D=r.getRenderTarget(),C=r.getActiveCubeFace(),B=r.getActiveMipmapLevel(),ot=r.state;ot.setBlending(Ja),ot.buffers.color.setClear(1,1,1,1),ot.buffers.depth.setTest(!0),ot.setScissorTest(!1);const it=v!==ga&&this.type===ga,gt=v===ga&&this.type!==ga;for(let mt=0,I=G.length;mt<I;mt++){const Q=G[mt],j=Q.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;l.copy(j.mapSize);const Mt=j.getFrameExtents();if(l.multiply(Mt),c.copy(j.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/Mt.x),l.x=c.x*Mt.x,j.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/Mt.y),l.y=c.y*Mt.y,j.mapSize.y=c.y)),j.map===null||it===!0||gt===!0){const z=this.type!==ga?{minFilter:ci,magFilter:ci}:{};j.map!==null&&j.map.dispose(),j.map=new Ps(l.x,l.y,z),j.map.texture.name=Q.name+".shadowMap",j.camera.updateProjectionMatrix()}r.setRenderTarget(j.map),r.clear();const At=j.getViewportCount();for(let z=0;z<At;z++){const $=j.getViewport(z);f.set(c.x*$.x,c.y*$.y,c.x*$.z,c.y*$.w),ot.viewport(f),j.updateMatrices(Q,z),s=j.getFrustum(),U(P,k,j.camera,Q,this.type)}j.isPointLightShadow!==!0&&this.type===ga&&O(j,k),j.needsUpdate=!1}v=this.type,M.needsUpdate=!1,r.setRenderTarget(D,C,B)};function O(G,P){const k=t.update(b);x.defines.VSM_SAMPLES!==G.blurSamples&&(x.defines.VSM_SAMPLES=G.blurSamples,y.defines.VSM_SAMPLES=G.blurSamples,x.needsUpdate=!0,y.needsUpdate=!0),G.mapPass===null&&(G.mapPass=new Ps(l.x,l.y)),x.uniforms.shadow_pass.value=G.map.texture,x.uniforms.resolution.value=G.mapSize,x.uniforms.radius.value=G.radius,r.setRenderTarget(G.mapPass),r.clear(),r.renderBufferDirect(P,null,k,x,b,null),y.uniforms.shadow_pass.value=G.mapPass.texture,y.uniforms.resolution.value=G.mapSize,y.uniforms.radius.value=G.radius,r.setRenderTarget(G.map),r.clear(),r.renderBufferDirect(P,null,k,y,b,null)}function N(G,P,k,D){let C=null;const B=k.isPointLight===!0?G.customDistanceMaterial:G.customDepthMaterial;if(B!==void 0)C=B;else if(C=k.isPointLight===!0?p:d,r.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const ot=C.uuid,it=P.uuid;let gt=m[ot];gt===void 0&&(gt={},m[ot]=gt);let mt=gt[it];mt===void 0&&(mt=C.clone(),gt[it]=mt,P.addEventListener("dispose",X)),C=mt}if(C.visible=P.visible,C.wireframe=P.wireframe,D===ga?C.side=P.shadowSide!==null?P.shadowSide:P.side:C.side=P.shadowSide!==null?P.shadowSide:g[P.side],C.alphaMap=P.alphaMap,C.alphaTest=P.alphaTest,C.map=P.map,C.clipShadows=P.clipShadows,C.clippingPlanes=P.clippingPlanes,C.clipIntersection=P.clipIntersection,C.displacementMap=P.displacementMap,C.displacementScale=P.displacementScale,C.displacementBias=P.displacementBias,C.wireframeLinewidth=P.wireframeLinewidth,C.linewidth=P.linewidth,k.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const ot=r.properties.get(C);ot.light=k}return C}function U(G,P,k,D,C){if(G.visible===!1)return;if(G.layers.test(P.layers)&&(G.isMesh||G.isLine||G.isPoints)&&(G.castShadow||G.receiveShadow&&C===ga)&&(!G.frustumCulled||s.intersectsObject(G))){G.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,G.matrixWorld);const it=t.update(G),gt=G.material;if(Array.isArray(gt)){const mt=it.groups;for(let I=0,Q=mt.length;I<Q;I++){const j=mt[I],Mt=gt[j.materialIndex];if(Mt&&Mt.visible){const At=N(G,Mt,D,C);G.onBeforeShadow(r,G,P,k,it,At,j),r.renderBufferDirect(k,null,it,At,G,j),G.onAfterShadow(r,G,P,k,it,At,j)}}}else if(gt.visible){const mt=N(G,gt,D,C);G.onBeforeShadow(r,G,P,k,it,mt,null),r.renderBufferDirect(k,null,it,mt,G,null),G.onAfterShadow(r,G,P,k,it,mt,null)}}const ot=G.children;for(let it=0,gt=ot.length;it<gt;it++)U(ot[it],P,k,D,C)}function X(G){G.target.removeEventListener("dispose",X);for(const k in m){const D=m[k],C=G.target.uuid;C in D&&(D[C].dispose(),delete D[C])}}}const E2={[gd]:_d,[vd]:Sd,[xd]:Md,[jr]:yd,[_d]:gd,[Sd]:vd,[Md]:xd,[yd]:jr};function b2(r,t){function i(){let W=!1;const Lt=new nn;let ft=null;const St=new nn(0,0,0,0);return{setMask:function(Nt){ft!==Nt&&!W&&(r.colorMask(Nt,Nt,Nt,Nt),ft=Nt)},setLocked:function(Nt){W=Nt},setClear:function(Nt,Ot,ie,Qe,pn){pn===!0&&(Nt*=Qe,Ot*=Qe,ie*=Qe),Lt.set(Nt,Ot,ie,Qe),St.equals(Lt)===!1&&(r.clearColor(Nt,Ot,ie,Qe),St.copy(Lt))},reset:function(){W=!1,ft=null,St.set(-1,0,0,0)}}}function s(){let W=!1,Lt=!1,ft=null,St=null,Nt=null;return{setReversed:function(Ot){if(Lt!==Ot){const ie=t.get("EXT_clip_control");Lt?ie.clipControlEXT(ie.LOWER_LEFT_EXT,ie.ZERO_TO_ONE_EXT):ie.clipControlEXT(ie.LOWER_LEFT_EXT,ie.NEGATIVE_ONE_TO_ONE_EXT);const Qe=Nt;Nt=null,this.setClear(Qe)}Lt=Ot},getReversed:function(){return Lt},setTest:function(Ot){Ot?bt(r.DEPTH_TEST):Ut(r.DEPTH_TEST)},setMask:function(Ot){ft!==Ot&&!W&&(r.depthMask(Ot),ft=Ot)},setFunc:function(Ot){if(Lt&&(Ot=E2[Ot]),St!==Ot){switch(Ot){case gd:r.depthFunc(r.NEVER);break;case _d:r.depthFunc(r.ALWAYS);break;case vd:r.depthFunc(r.LESS);break;case jr:r.depthFunc(r.LEQUAL);break;case xd:r.depthFunc(r.EQUAL);break;case yd:r.depthFunc(r.GEQUAL);break;case Sd:r.depthFunc(r.GREATER);break;case Md:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}St=Ot}},setLocked:function(Ot){W=Ot},setClear:function(Ot){Nt!==Ot&&(Lt&&(Ot=1-Ot),r.clearDepth(Ot),Nt=Ot)},reset:function(){W=!1,ft=null,St=null,Nt=null,Lt=!1}}}function l(){let W=!1,Lt=null,ft=null,St=null,Nt=null,Ot=null,ie=null,Qe=null,pn=null;return{setTest:function(Ae){W||(Ae?bt(r.STENCIL_TEST):Ut(r.STENCIL_TEST))},setMask:function(Ae){Lt!==Ae&&!W&&(r.stencilMask(Ae),Lt=Ae)},setFunc:function(Ae,Tn,Mi){(ft!==Ae||St!==Tn||Nt!==Mi)&&(r.stencilFunc(Ae,Tn,Mi),ft=Ae,St=Tn,Nt=Mi)},setOp:function(Ae,Tn,Mi){(Ot!==Ae||ie!==Tn||Qe!==Mi)&&(r.stencilOp(Ae,Tn,Mi),Ot=Ae,ie=Tn,Qe=Mi)},setLocked:function(Ae){W=Ae},setClear:function(Ae){pn!==Ae&&(r.clearStencil(Ae),pn=Ae)},reset:function(){W=!1,Lt=null,ft=null,St=null,Nt=null,Ot=null,ie=null,Qe=null,pn=null}}}const c=new i,f=new s,d=new l,p=new WeakMap,m=new WeakMap;let _={},g={},x=new WeakMap,y=[],E=null,b=!1,M=null,v=null,O=null,N=null,U=null,X=null,G=null,P=new me(0,0,0),k=0,D=!1,C=null,B=null,ot=null,it=null,gt=null;const mt=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,Q=0;const j=r.getParameter(r.VERSION);j.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(j)[1]),I=Q>=1):j.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),I=Q>=2);let Mt=null,At={};const z=r.getParameter(r.SCISSOR_BOX),$=r.getParameter(r.VIEWPORT),xt=new nn().fromArray(z),q=new nn().fromArray($);function ct(W,Lt,ft,St){const Nt=new Uint8Array(4),Ot=r.createTexture();r.bindTexture(W,Ot),r.texParameteri(W,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(W,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ie=0;ie<ft;ie++)W===r.TEXTURE_3D||W===r.TEXTURE_2D_ARRAY?r.texImage3D(Lt,0,r.RGBA,1,1,St,0,r.RGBA,r.UNSIGNED_BYTE,Nt):r.texImage2D(Lt+ie,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Nt);return Ot}const Tt={};Tt[r.TEXTURE_2D]=ct(r.TEXTURE_2D,r.TEXTURE_2D,1),Tt[r.TEXTURE_CUBE_MAP]=ct(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Tt[r.TEXTURE_2D_ARRAY]=ct(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Tt[r.TEXTURE_3D]=ct(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),d.setClear(0),bt(r.DEPTH_TEST),f.setFunc(jr),se(!1),re(__),bt(r.CULL_FACE),F(Ja);function bt(W){_[W]!==!0&&(r.enable(W),_[W]=!0)}function Ut(W){_[W]!==!1&&(r.disable(W),_[W]=!1)}function Ft(W,Lt){return g[W]!==Lt?(r.bindFramebuffer(W,Lt),g[W]=Lt,W===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=Lt),W===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=Lt),!0):!1}function ee(W,Lt){let ft=y,St=!1;if(W){ft=x.get(Lt),ft===void 0&&(ft=[],x.set(Lt,ft));const Nt=W.textures;if(ft.length!==Nt.length||ft[0]!==r.COLOR_ATTACHMENT0){for(let Ot=0,ie=Nt.length;Ot<ie;Ot++)ft[Ot]=r.COLOR_ATTACHMENT0+Ot;ft.length=Nt.length,St=!0}}else ft[0]!==r.BACK&&(ft[0]=r.BACK,St=!0);St&&r.drawBuffers(ft)}function Te(W){return E!==W?(r.useProgram(W),E=W,!0):!1}const ht={[Us]:r.FUNC_ADD,[uM]:r.FUNC_SUBTRACT,[fM]:r.FUNC_REVERSE_SUBTRACT};ht[hM]=r.MIN,ht[dM]=r.MAX;const Ct={[pM]:r.ZERO,[mM]:r.ONE,[gM]:r.SRC_COLOR,[pd]:r.SRC_ALPHA,[MM]:r.SRC_ALPHA_SATURATE,[yM]:r.DST_COLOR,[vM]:r.DST_ALPHA,[_M]:r.ONE_MINUS_SRC_COLOR,[md]:r.ONE_MINUS_SRC_ALPHA,[SM]:r.ONE_MINUS_DST_COLOR,[xM]:r.ONE_MINUS_DST_ALPHA,[EM]:r.CONSTANT_COLOR,[bM]:r.ONE_MINUS_CONSTANT_COLOR,[TM]:r.CONSTANT_ALPHA,[AM]:r.ONE_MINUS_CONSTANT_ALPHA};function F(W,Lt,ft,St,Nt,Ot,ie,Qe,pn,Ae){if(W===Ja){b===!0&&(Ut(r.BLEND),b=!1);return}if(b===!1&&(bt(r.BLEND),b=!0),W!==cM){if(W!==M||Ae!==D){if((v!==Us||U!==Us)&&(r.blendEquation(r.FUNC_ADD),v=Us,U=Us),Ae)switch(W){case Hr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case v_:r.blendFunc(r.ONE,r.ONE);break;case x_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case y_:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case Hr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case v_:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case x_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case y_:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}O=null,N=null,X=null,G=null,P.set(0,0,0),k=0,M=W,D=Ae}return}Nt=Nt||Lt,Ot=Ot||ft,ie=ie||St,(Lt!==v||Nt!==U)&&(r.blendEquationSeparate(ht[Lt],ht[Nt]),v=Lt,U=Nt),(ft!==O||St!==N||Ot!==X||ie!==G)&&(r.blendFuncSeparate(Ct[ft],Ct[St],Ct[Ot],Ct[ie]),O=ft,N=St,X=Ot,G=ie),(Qe.equals(P)===!1||pn!==k)&&(r.blendColor(Qe.r,Qe.g,Qe.b,pn),P.copy(Qe),k=pn),M=W,D=!1}function Ne(W,Lt){W.side===Hi?Ut(r.CULL_FACE):bt(r.CULL_FACE);let ft=W.side===Qn;Lt&&(ft=!ft),se(ft),W.blending===Hr&&W.transparent===!1?F(Ja):F(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),f.setFunc(W.depthFunc),f.setTest(W.depthTest),f.setMask(W.depthWrite),c.setMask(W.colorWrite);const St=W.stencilWrite;d.setTest(St),St&&(d.setMask(W.stencilWriteMask),d.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),d.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Re(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?bt(r.SAMPLE_ALPHA_TO_COVERAGE):Ut(r.SAMPLE_ALPHA_TO_COVERAGE)}function se(W){C!==W&&(W?r.frontFace(r.CW):r.frontFace(r.CCW),C=W)}function re(W){W!==oM?(bt(r.CULL_FACE),W!==B&&(W===__?r.cullFace(r.BACK):W===lM?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ut(r.CULL_FACE),B=W}function jt(W){W!==ot&&(I&&r.lineWidth(W),ot=W)}function Re(W,Lt,ft){W?(bt(r.POLYGON_OFFSET_FILL),(it!==Lt||gt!==ft)&&(r.polygonOffset(Lt,ft),it=Lt,gt=ft)):Ut(r.POLYGON_OFFSET_FILL)}function Yt(W){W?bt(r.SCISSOR_TEST):Ut(r.SCISSOR_TEST)}function w(W){W===void 0&&(W=r.TEXTURE0+mt-1),Mt!==W&&(r.activeTexture(W),Mt=W)}function T(W,Lt,ft){ft===void 0&&(Mt===null?ft=r.TEXTURE0+mt-1:ft=Mt);let St=At[ft];St===void 0&&(St={type:void 0,texture:void 0},At[ft]=St),(St.type!==W||St.texture!==Lt)&&(Mt!==ft&&(r.activeTexture(ft),Mt=ft),r.bindTexture(W,Lt||Tt[W]),St.type=W,St.texture=Lt)}function tt(){const W=At[Mt];W!==void 0&&W.type!==void 0&&(r.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function ut(){try{r.compressedTexImage2D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function yt(){try{r.compressedTexImage3D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function pt(){try{r.texSubImage2D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Vt(){try{r.texSubImage3D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function wt(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Dt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ge(){try{r.texStorage2D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Rt(){try{r.texStorage3D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function It(){try{r.texImage2D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function qt(){try{r.texImage3D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Zt(W){xt.equals(W)===!1&&(r.scissor(W.x,W.y,W.z,W.w),xt.copy(W))}function Bt(W){q.equals(W)===!1&&(r.viewport(W.x,W.y,W.z,W.w),q.copy(W))}function ne(W,Lt){let ft=m.get(Lt);ft===void 0&&(ft=new WeakMap,m.set(Lt,ft));let St=ft.get(W);St===void 0&&(St=r.getUniformBlockIndex(Lt,W.name),ft.set(W,St))}function ce(W,Lt){const St=m.get(Lt).get(W);p.get(Lt)!==St&&(r.uniformBlockBinding(Lt,St,W.__bindingPointIndex),p.set(Lt,St))}function He(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),_={},Mt=null,At={},g={},x=new WeakMap,y=[],E=null,b=!1,M=null,v=null,O=null,N=null,U=null,X=null,G=null,P=new me(0,0,0),k=0,D=!1,C=null,B=null,ot=null,it=null,gt=null,xt.set(0,0,r.canvas.width,r.canvas.height),q.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),d.reset()}return{buffers:{color:c,depth:f,stencil:d},enable:bt,disable:Ut,bindFramebuffer:Ft,drawBuffers:ee,useProgram:Te,setBlending:F,setMaterial:Ne,setFlipSided:se,setCullFace:re,setLineWidth:jt,setPolygonOffset:Re,setScissorTest:Yt,activeTexture:w,bindTexture:T,unbindTexture:tt,compressedTexImage2D:ut,compressedTexImage3D:yt,texImage2D:It,texImage3D:qt,updateUBOMapping:ne,uniformBlockBinding:ce,texStorage2D:ge,texStorage3D:Rt,texSubImage2D:pt,texSubImage3D:Vt,compressedTexSubImage2D:wt,compressedTexSubImage3D:Dt,scissor:Zt,viewport:Bt,reset:He}}function T2(r,t,i,s,l,c,f){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new le,_=new WeakMap;let g;const x=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(w,T){return y?new OffscreenCanvas(w,T):du("canvas")}function b(w,T,tt){let ut=1;const yt=Yt(w);if((yt.width>tt||yt.height>tt)&&(ut=tt/Math.max(yt.width,yt.height)),ut<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const pt=Math.floor(ut*yt.width),Vt=Math.floor(ut*yt.height);g===void 0&&(g=E(pt,Vt));const wt=T?E(pt,Vt):g;return wt.width=pt,wt.height=Vt,wt.getContext("2d").drawImage(w,0,0,pt,Vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+yt.width+"x"+yt.height+") to ("+pt+"x"+Vt+")."),wt}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+yt.width+"x"+yt.height+")."),w;return w}function M(w){return w.generateMipmaps}function v(w){r.generateMipmap(w)}function O(w){return w.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?r.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function N(w,T,tt,ut,yt=!1){if(w!==null){if(r[w]!==void 0)return r[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let pt=T;if(T===r.RED&&(tt===r.FLOAT&&(pt=r.R32F),tt===r.HALF_FLOAT&&(pt=r.R16F),tt===r.UNSIGNED_BYTE&&(pt=r.R8)),T===r.RED_INTEGER&&(tt===r.UNSIGNED_BYTE&&(pt=r.R8UI),tt===r.UNSIGNED_SHORT&&(pt=r.R16UI),tt===r.UNSIGNED_INT&&(pt=r.R32UI),tt===r.BYTE&&(pt=r.R8I),tt===r.SHORT&&(pt=r.R16I),tt===r.INT&&(pt=r.R32I)),T===r.RG&&(tt===r.FLOAT&&(pt=r.RG32F),tt===r.HALF_FLOAT&&(pt=r.RG16F),tt===r.UNSIGNED_BYTE&&(pt=r.RG8)),T===r.RG_INTEGER&&(tt===r.UNSIGNED_BYTE&&(pt=r.RG8UI),tt===r.UNSIGNED_SHORT&&(pt=r.RG16UI),tt===r.UNSIGNED_INT&&(pt=r.RG32UI),tt===r.BYTE&&(pt=r.RG8I),tt===r.SHORT&&(pt=r.RG16I),tt===r.INT&&(pt=r.RG32I)),T===r.RGB_INTEGER&&(tt===r.UNSIGNED_BYTE&&(pt=r.RGB8UI),tt===r.UNSIGNED_SHORT&&(pt=r.RGB16UI),tt===r.UNSIGNED_INT&&(pt=r.RGB32UI),tt===r.BYTE&&(pt=r.RGB8I),tt===r.SHORT&&(pt=r.RGB16I),tt===r.INT&&(pt=r.RGB32I)),T===r.RGBA_INTEGER&&(tt===r.UNSIGNED_BYTE&&(pt=r.RGBA8UI),tt===r.UNSIGNED_SHORT&&(pt=r.RGBA16UI),tt===r.UNSIGNED_INT&&(pt=r.RGBA32UI),tt===r.BYTE&&(pt=r.RGBA8I),tt===r.SHORT&&(pt=r.RGBA16I),tt===r.INT&&(pt=r.RGBA32I)),T===r.RGB&&tt===r.UNSIGNED_INT_5_9_9_9_REV&&(pt=r.RGB9_E5),T===r.RGBA){const Vt=yt?fu:Le.getTransfer(ut);tt===r.FLOAT&&(pt=r.RGBA32F),tt===r.HALF_FLOAT&&(pt=r.RGBA16F),tt===r.UNSIGNED_BYTE&&(pt=Vt===Xe?r.SRGB8_ALPHA8:r.RGBA8),tt===r.UNSIGNED_SHORT_4_4_4_4&&(pt=r.RGBA4),tt===r.UNSIGNED_SHORT_5_5_5_1&&(pt=r.RGB5_A1)}return(pt===r.R16F||pt===r.R32F||pt===r.RG16F||pt===r.RG32F||pt===r.RGBA16F||pt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),pt}function U(w,T){let tt;return w?T===null||T===zs||T===qr?tt=r.DEPTH24_STENCIL8:T===Vi?tt=r.DEPTH32F_STENCIL8:T===cl&&(tt=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===zs||T===qr?tt=r.DEPTH_COMPONENT24:T===Vi?tt=r.DEPTH_COMPONENT32F:T===cl&&(tt=r.DEPTH_COMPONENT16),tt}function X(w,T){return M(w)===!0||w.isFramebufferTexture&&w.minFilter!==ci&&w.minFilter!==Gi?Math.log2(Math.max(T.width,T.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?T.mipmaps.length:1}function G(w){const T=w.target;T.removeEventListener("dispose",G),k(T),T.isVideoTexture&&_.delete(T)}function P(w){const T=w.target;T.removeEventListener("dispose",P),C(T)}function k(w){const T=s.get(w);if(T.__webglInit===void 0)return;const tt=w.source,ut=x.get(tt);if(ut){const yt=ut[T.__cacheKey];yt.usedTimes--,yt.usedTimes===0&&D(w),Object.keys(ut).length===0&&x.delete(tt)}s.remove(w)}function D(w){const T=s.get(w);r.deleteTexture(T.__webglTexture);const tt=w.source,ut=x.get(tt);delete ut[T.__cacheKey],f.memory.textures--}function C(w){const T=s.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),s.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let ut=0;ut<6;ut++){if(Array.isArray(T.__webglFramebuffer[ut]))for(let yt=0;yt<T.__webglFramebuffer[ut].length;yt++)r.deleteFramebuffer(T.__webglFramebuffer[ut][yt]);else r.deleteFramebuffer(T.__webglFramebuffer[ut]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[ut])}else{if(Array.isArray(T.__webglFramebuffer))for(let ut=0;ut<T.__webglFramebuffer.length;ut++)r.deleteFramebuffer(T.__webglFramebuffer[ut]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ut=0;ut<T.__webglColorRenderbuffer.length;ut++)T.__webglColorRenderbuffer[ut]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[ut]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const tt=w.textures;for(let ut=0,yt=tt.length;ut<yt;ut++){const pt=s.get(tt[ut]);pt.__webglTexture&&(r.deleteTexture(pt.__webglTexture),f.memory.textures--),s.remove(tt[ut])}s.remove(w)}let B=0;function ot(){B=0}function it(){const w=B;return w>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+l.maxTextures),B+=1,w}function gt(w){const T=[];return T.push(w.wrapS),T.push(w.wrapT),T.push(w.wrapR||0),T.push(w.magFilter),T.push(w.minFilter),T.push(w.anisotropy),T.push(w.internalFormat),T.push(w.format),T.push(w.type),T.push(w.generateMipmaps),T.push(w.premultiplyAlpha),T.push(w.flipY),T.push(w.unpackAlignment),T.push(w.colorSpace),T.join()}function mt(w,T){const tt=s.get(w);if(w.isVideoTexture&&jt(w),w.isRenderTargetTexture===!1&&w.version>0&&tt.__version!==w.version){const ut=w.image;if(ut===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ut.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(tt,w,T);return}}i.bindTexture(r.TEXTURE_2D,tt.__webglTexture,r.TEXTURE0+T)}function I(w,T){const tt=s.get(w);if(w.version>0&&tt.__version!==w.version){q(tt,w,T);return}i.bindTexture(r.TEXTURE_2D_ARRAY,tt.__webglTexture,r.TEXTURE0+T)}function Q(w,T){const tt=s.get(w);if(w.version>0&&tt.__version!==w.version){q(tt,w,T);return}i.bindTexture(r.TEXTURE_3D,tt.__webglTexture,r.TEXTURE0+T)}function j(w,T){const tt=s.get(w);if(w.version>0&&tt.__version!==w.version){ct(tt,w,T);return}i.bindTexture(r.TEXTURE_CUBE_MAP,tt.__webglTexture,r.TEXTURE0+T)}const Mt={[Td]:r.REPEAT,[Ns]:r.CLAMP_TO_EDGE,[Ad]:r.MIRRORED_REPEAT},At={[ci]:r.NEAREST,[PM]:r.NEAREST_MIPMAP_NEAREST,[Ec]:r.NEAREST_MIPMAP_LINEAR,[Gi]:r.LINEAR,[zh]:r.LINEAR_MIPMAP_NEAREST,[Os]:r.LINEAR_MIPMAP_LINEAR},z={[HM]:r.NEVER,[WM]:r.ALWAYS,[GM]:r.LESS,[tx]:r.LEQUAL,[VM]:r.EQUAL,[jM]:r.GEQUAL,[kM]:r.GREATER,[XM]:r.NOTEQUAL};function $(w,T){if(T.type===Vi&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Gi||T.magFilter===zh||T.magFilter===Ec||T.magFilter===Os||T.minFilter===Gi||T.minFilter===zh||T.minFilter===Ec||T.minFilter===Os)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(w,r.TEXTURE_WRAP_S,Mt[T.wrapS]),r.texParameteri(w,r.TEXTURE_WRAP_T,Mt[T.wrapT]),(w===r.TEXTURE_3D||w===r.TEXTURE_2D_ARRAY)&&r.texParameteri(w,r.TEXTURE_WRAP_R,Mt[T.wrapR]),r.texParameteri(w,r.TEXTURE_MAG_FILTER,At[T.magFilter]),r.texParameteri(w,r.TEXTURE_MIN_FILTER,At[T.minFilter]),T.compareFunction&&(r.texParameteri(w,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(w,r.TEXTURE_COMPARE_FUNC,z[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===ci||T.minFilter!==Ec&&T.minFilter!==Os||T.type===Vi&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const tt=t.get("EXT_texture_filter_anisotropic");r.texParameterf(w,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function xt(w,T){let tt=!1;w.__webglInit===void 0&&(w.__webglInit=!0,T.addEventListener("dispose",G));const ut=T.source;let yt=x.get(ut);yt===void 0&&(yt={},x.set(ut,yt));const pt=gt(T);if(pt!==w.__cacheKey){yt[pt]===void 0&&(yt[pt]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,tt=!0),yt[pt].usedTimes++;const Vt=yt[w.__cacheKey];Vt!==void 0&&(yt[w.__cacheKey].usedTimes--,Vt.usedTimes===0&&D(T)),w.__cacheKey=pt,w.__webglTexture=yt[pt].texture}return tt}function q(w,T,tt){let ut=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ut=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ut=r.TEXTURE_3D);const yt=xt(w,T),pt=T.source;i.bindTexture(ut,w.__webglTexture,r.TEXTURE0+tt);const Vt=s.get(pt);if(pt.version!==Vt.__version||yt===!0){i.activeTexture(r.TEXTURE0+tt);const wt=Le.getPrimaries(Le.workingColorSpace),Dt=T.colorSpace===Qa?null:Le.getPrimaries(T.colorSpace),ge=T.colorSpace===Qa||wt===Dt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);let Rt=b(T.image,!1,l.maxTextureSize);Rt=Re(T,Rt);const It=c.convert(T.format,T.colorSpace),qt=c.convert(T.type);let Zt=N(T.internalFormat,It,qt,T.colorSpace,T.isVideoTexture);$(ut,T);let Bt;const ne=T.mipmaps,ce=T.isVideoTexture!==!0,He=Vt.__version===void 0||yt===!0,W=pt.dataReady,Lt=X(T,Rt);if(T.isDepthTexture)Zt=U(T.format===Zr,T.type),He&&(ce?i.texStorage2D(r.TEXTURE_2D,1,Zt,Rt.width,Rt.height):i.texImage2D(r.TEXTURE_2D,0,Zt,Rt.width,Rt.height,0,It,qt,null));else if(T.isDataTexture)if(ne.length>0){ce&&He&&i.texStorage2D(r.TEXTURE_2D,Lt,Zt,ne[0].width,ne[0].height);for(let ft=0,St=ne.length;ft<St;ft++)Bt=ne[ft],ce?W&&i.texSubImage2D(r.TEXTURE_2D,ft,0,0,Bt.width,Bt.height,It,qt,Bt.data):i.texImage2D(r.TEXTURE_2D,ft,Zt,Bt.width,Bt.height,0,It,qt,Bt.data);T.generateMipmaps=!1}else ce?(He&&i.texStorage2D(r.TEXTURE_2D,Lt,Zt,Rt.width,Rt.height),W&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Rt.width,Rt.height,It,qt,Rt.data)):i.texImage2D(r.TEXTURE_2D,0,Zt,Rt.width,Rt.height,0,It,qt,Rt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ce&&He&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Lt,Zt,ne[0].width,ne[0].height,Rt.depth);for(let ft=0,St=ne.length;ft<St;ft++)if(Bt=ne[ft],T.format!==Ui)if(It!==null)if(ce){if(W)if(T.layerUpdates.size>0){const Nt=tv(Bt.width,Bt.height,T.format,T.type);for(const Ot of T.layerUpdates){const ie=Bt.data.subarray(Ot*Nt/Bt.data.BYTES_PER_ELEMENT,(Ot+1)*Nt/Bt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ft,0,0,Ot,Bt.width,Bt.height,1,It,ie)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ft,0,0,0,Bt.width,Bt.height,Rt.depth,It,Bt.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ft,Zt,Bt.width,Bt.height,Rt.depth,0,Bt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ce?W&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,ft,0,0,0,Bt.width,Bt.height,Rt.depth,It,qt,Bt.data):i.texImage3D(r.TEXTURE_2D_ARRAY,ft,Zt,Bt.width,Bt.height,Rt.depth,0,It,qt,Bt.data)}else{ce&&He&&i.texStorage2D(r.TEXTURE_2D,Lt,Zt,ne[0].width,ne[0].height);for(let ft=0,St=ne.length;ft<St;ft++)Bt=ne[ft],T.format!==Ui?It!==null?ce?W&&i.compressedTexSubImage2D(r.TEXTURE_2D,ft,0,0,Bt.width,Bt.height,It,Bt.data):i.compressedTexImage2D(r.TEXTURE_2D,ft,Zt,Bt.width,Bt.height,0,Bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ce?W&&i.texSubImage2D(r.TEXTURE_2D,ft,0,0,Bt.width,Bt.height,It,qt,Bt.data):i.texImage2D(r.TEXTURE_2D,ft,Zt,Bt.width,Bt.height,0,It,qt,Bt.data)}else if(T.isDataArrayTexture)if(ce){if(He&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Lt,Zt,Rt.width,Rt.height,Rt.depth),W)if(T.layerUpdates.size>0){const ft=tv(Rt.width,Rt.height,T.format,T.type);for(const St of T.layerUpdates){const Nt=Rt.data.subarray(St*ft/Rt.data.BYTES_PER_ELEMENT,(St+1)*ft/Rt.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,St,Rt.width,Rt.height,1,It,qt,Nt)}T.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Rt.width,Rt.height,Rt.depth,It,qt,Rt.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Zt,Rt.width,Rt.height,Rt.depth,0,It,qt,Rt.data);else if(T.isData3DTexture)ce?(He&&i.texStorage3D(r.TEXTURE_3D,Lt,Zt,Rt.width,Rt.height,Rt.depth),W&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Rt.width,Rt.height,Rt.depth,It,qt,Rt.data)):i.texImage3D(r.TEXTURE_3D,0,Zt,Rt.width,Rt.height,Rt.depth,0,It,qt,Rt.data);else if(T.isFramebufferTexture){if(He)if(ce)i.texStorage2D(r.TEXTURE_2D,Lt,Zt,Rt.width,Rt.height);else{let ft=Rt.width,St=Rt.height;for(let Nt=0;Nt<Lt;Nt++)i.texImage2D(r.TEXTURE_2D,Nt,Zt,ft,St,0,It,qt,null),ft>>=1,St>>=1}}else if(ne.length>0){if(ce&&He){const ft=Yt(ne[0]);i.texStorage2D(r.TEXTURE_2D,Lt,Zt,ft.width,ft.height)}for(let ft=0,St=ne.length;ft<St;ft++)Bt=ne[ft],ce?W&&i.texSubImage2D(r.TEXTURE_2D,ft,0,0,It,qt,Bt):i.texImage2D(r.TEXTURE_2D,ft,Zt,It,qt,Bt);T.generateMipmaps=!1}else if(ce){if(He){const ft=Yt(Rt);i.texStorage2D(r.TEXTURE_2D,Lt,Zt,ft.width,ft.height)}W&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,It,qt,Rt)}else i.texImage2D(r.TEXTURE_2D,0,Zt,It,qt,Rt);M(T)&&v(ut),Vt.__version=pt.version,T.onUpdate&&T.onUpdate(T)}w.__version=T.version}function ct(w,T,tt){if(T.image.length!==6)return;const ut=xt(w,T),yt=T.source;i.bindTexture(r.TEXTURE_CUBE_MAP,w.__webglTexture,r.TEXTURE0+tt);const pt=s.get(yt);if(yt.version!==pt.__version||ut===!0){i.activeTexture(r.TEXTURE0+tt);const Vt=Le.getPrimaries(Le.workingColorSpace),wt=T.colorSpace===Qa?null:Le.getPrimaries(T.colorSpace),Dt=T.colorSpace===Qa||Vt===wt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Dt);const ge=T.isCompressedTexture||T.image[0].isCompressedTexture,Rt=T.image[0]&&T.image[0].isDataTexture,It=[];for(let St=0;St<6;St++)!ge&&!Rt?It[St]=b(T.image[St],!0,l.maxCubemapSize):It[St]=Rt?T.image[St].image:T.image[St],It[St]=Re(T,It[St]);const qt=It[0],Zt=c.convert(T.format,T.colorSpace),Bt=c.convert(T.type),ne=N(T.internalFormat,Zt,Bt,T.colorSpace),ce=T.isVideoTexture!==!0,He=pt.__version===void 0||ut===!0,W=yt.dataReady;let Lt=X(T,qt);$(r.TEXTURE_CUBE_MAP,T);let ft;if(ge){ce&&He&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Lt,ne,qt.width,qt.height);for(let St=0;St<6;St++){ft=It[St].mipmaps;for(let Nt=0;Nt<ft.length;Nt++){const Ot=ft[Nt];T.format!==Ui?Zt!==null?ce?W&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,Nt,0,0,Ot.width,Ot.height,Zt,Ot.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,Nt,ne,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ce?W&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,Nt,0,0,Ot.width,Ot.height,Zt,Bt,Ot.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,Nt,ne,Ot.width,Ot.height,0,Zt,Bt,Ot.data)}}}else{if(ft=T.mipmaps,ce&&He){ft.length>0&&Lt++;const St=Yt(It[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Lt,ne,St.width,St.height)}for(let St=0;St<6;St++)if(Rt){ce?W&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,It[St].width,It[St].height,Zt,Bt,It[St].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,ne,It[St].width,It[St].height,0,Zt,Bt,It[St].data);for(let Nt=0;Nt<ft.length;Nt++){const ie=ft[Nt].image[St].image;ce?W&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,Nt+1,0,0,ie.width,ie.height,Zt,Bt,ie.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,Nt+1,ne,ie.width,ie.height,0,Zt,Bt,ie.data)}}else{ce?W&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,Zt,Bt,It[St]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,ne,Zt,Bt,It[St]);for(let Nt=0;Nt<ft.length;Nt++){const Ot=ft[Nt];ce?W&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,Nt+1,0,0,Zt,Bt,Ot.image[St]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,Nt+1,ne,Zt,Bt,Ot.image[St])}}}M(T)&&v(r.TEXTURE_CUBE_MAP),pt.__version=yt.version,T.onUpdate&&T.onUpdate(T)}w.__version=T.version}function Tt(w,T,tt,ut,yt,pt){const Vt=c.convert(tt.format,tt.colorSpace),wt=c.convert(tt.type),Dt=N(tt.internalFormat,Vt,wt,tt.colorSpace),ge=s.get(T),Rt=s.get(tt);if(Rt.__renderTarget=T,!ge.__hasExternalTextures){const It=Math.max(1,T.width>>pt),qt=Math.max(1,T.height>>pt);yt===r.TEXTURE_3D||yt===r.TEXTURE_2D_ARRAY?i.texImage3D(yt,pt,Dt,It,qt,T.depth,0,Vt,wt,null):i.texImage2D(yt,pt,Dt,It,qt,0,Vt,wt,null)}i.bindFramebuffer(r.FRAMEBUFFER,w),re(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ut,yt,Rt.__webglTexture,0,se(T)):(yt===r.TEXTURE_2D||yt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&yt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ut,yt,Rt.__webglTexture,pt),i.bindFramebuffer(r.FRAMEBUFFER,null)}function bt(w,T,tt){if(r.bindRenderbuffer(r.RENDERBUFFER,w),T.depthBuffer){const ut=T.depthTexture,yt=ut&&ut.isDepthTexture?ut.type:null,pt=U(T.stencilBuffer,yt),Vt=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,wt=se(T);re(T)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,wt,pt,T.width,T.height):tt?r.renderbufferStorageMultisample(r.RENDERBUFFER,wt,pt,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,pt,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Vt,r.RENDERBUFFER,w)}else{const ut=T.textures;for(let yt=0;yt<ut.length;yt++){const pt=ut[yt],Vt=c.convert(pt.format,pt.colorSpace),wt=c.convert(pt.type),Dt=N(pt.internalFormat,Vt,wt,pt.colorSpace),ge=se(T);tt&&re(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ge,Dt,T.width,T.height):re(T)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ge,Dt,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,Dt,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ut(w,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(r.FRAMEBUFFER,w),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ut=s.get(T.depthTexture);ut.__renderTarget=T,(!ut.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),mt(T.depthTexture,0);const yt=ut.__webglTexture,pt=se(T);if(T.depthTexture.format===Gr)re(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,yt,0,pt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,yt,0);else if(T.depthTexture.format===Zr)re(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,yt,0,pt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,yt,0);else throw new Error("Unknown depthTexture format")}function Ft(w){const T=s.get(w),tt=w.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==w.depthTexture){const ut=w.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ut){const yt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ut.removeEventListener("dispose",yt)};ut.addEventListener("dispose",yt),T.__depthDisposeCallback=yt}T.__boundDepthTexture=ut}if(w.depthTexture&&!T.__autoAllocateDepthBuffer){if(tt)throw new Error("target.depthTexture not supported in Cube render targets");Ut(T.__webglFramebuffer,w)}else if(tt){T.__webglDepthbuffer=[];for(let ut=0;ut<6;ut++)if(i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[ut]),T.__webglDepthbuffer[ut]===void 0)T.__webglDepthbuffer[ut]=r.createRenderbuffer(),bt(T.__webglDepthbuffer[ut],w,!1);else{const yt=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,pt=T.__webglDepthbuffer[ut];r.bindRenderbuffer(r.RENDERBUFFER,pt),r.framebufferRenderbuffer(r.FRAMEBUFFER,yt,r.RENDERBUFFER,pt)}}else if(i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),bt(T.__webglDepthbuffer,w,!1);else{const ut=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,yt=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,yt),r.framebufferRenderbuffer(r.FRAMEBUFFER,ut,r.RENDERBUFFER,yt)}i.bindFramebuffer(r.FRAMEBUFFER,null)}function ee(w,T,tt){const ut=s.get(w);T!==void 0&&Tt(ut.__webglFramebuffer,w,w.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),tt!==void 0&&Ft(w)}function Te(w){const T=w.texture,tt=s.get(w),ut=s.get(T);w.addEventListener("dispose",P);const yt=w.textures,pt=w.isWebGLCubeRenderTarget===!0,Vt=yt.length>1;if(Vt||(ut.__webglTexture===void 0&&(ut.__webglTexture=r.createTexture()),ut.__version=T.version,f.memory.textures++),pt){tt.__webglFramebuffer=[];for(let wt=0;wt<6;wt++)if(T.mipmaps&&T.mipmaps.length>0){tt.__webglFramebuffer[wt]=[];for(let Dt=0;Dt<T.mipmaps.length;Dt++)tt.__webglFramebuffer[wt][Dt]=r.createFramebuffer()}else tt.__webglFramebuffer[wt]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){tt.__webglFramebuffer=[];for(let wt=0;wt<T.mipmaps.length;wt++)tt.__webglFramebuffer[wt]=r.createFramebuffer()}else tt.__webglFramebuffer=r.createFramebuffer();if(Vt)for(let wt=0,Dt=yt.length;wt<Dt;wt++){const ge=s.get(yt[wt]);ge.__webglTexture===void 0&&(ge.__webglTexture=r.createTexture(),f.memory.textures++)}if(w.samples>0&&re(w)===!1){tt.__webglMultisampledFramebuffer=r.createFramebuffer(),tt.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,tt.__webglMultisampledFramebuffer);for(let wt=0;wt<yt.length;wt++){const Dt=yt[wt];tt.__webglColorRenderbuffer[wt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,tt.__webglColorRenderbuffer[wt]);const ge=c.convert(Dt.format,Dt.colorSpace),Rt=c.convert(Dt.type),It=N(Dt.internalFormat,ge,Rt,Dt.colorSpace,w.isXRRenderTarget===!0),qt=se(w);r.renderbufferStorageMultisample(r.RENDERBUFFER,qt,It,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+wt,r.RENDERBUFFER,tt.__webglColorRenderbuffer[wt])}r.bindRenderbuffer(r.RENDERBUFFER,null),w.depthBuffer&&(tt.__webglDepthRenderbuffer=r.createRenderbuffer(),bt(tt.__webglDepthRenderbuffer,w,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(pt){i.bindTexture(r.TEXTURE_CUBE_MAP,ut.__webglTexture),$(r.TEXTURE_CUBE_MAP,T);for(let wt=0;wt<6;wt++)if(T.mipmaps&&T.mipmaps.length>0)for(let Dt=0;Dt<T.mipmaps.length;Dt++)Tt(tt.__webglFramebuffer[wt][Dt],w,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Dt);else Tt(tt.__webglFramebuffer[wt],w,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0);M(T)&&v(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Vt){for(let wt=0,Dt=yt.length;wt<Dt;wt++){const ge=yt[wt],Rt=s.get(ge);i.bindTexture(r.TEXTURE_2D,Rt.__webglTexture),$(r.TEXTURE_2D,ge),Tt(tt.__webglFramebuffer,w,ge,r.COLOR_ATTACHMENT0+wt,r.TEXTURE_2D,0),M(ge)&&v(r.TEXTURE_2D)}i.unbindTexture()}else{let wt=r.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(wt=w.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(wt,ut.__webglTexture),$(wt,T),T.mipmaps&&T.mipmaps.length>0)for(let Dt=0;Dt<T.mipmaps.length;Dt++)Tt(tt.__webglFramebuffer[Dt],w,T,r.COLOR_ATTACHMENT0,wt,Dt);else Tt(tt.__webglFramebuffer,w,T,r.COLOR_ATTACHMENT0,wt,0);M(T)&&v(wt),i.unbindTexture()}w.depthBuffer&&Ft(w)}function ht(w){const T=w.textures;for(let tt=0,ut=T.length;tt<ut;tt++){const yt=T[tt];if(M(yt)){const pt=O(w),Vt=s.get(yt).__webglTexture;i.bindTexture(pt,Vt),v(pt),i.unbindTexture()}}}const Ct=[],F=[];function Ne(w){if(w.samples>0){if(re(w)===!1){const T=w.textures,tt=w.width,ut=w.height;let yt=r.COLOR_BUFFER_BIT;const pt=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Vt=s.get(w),wt=T.length>1;if(wt)for(let Dt=0;Dt<T.length;Dt++)i.bindFramebuffer(r.FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Dt,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Vt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Dt,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Vt.__webglFramebuffer);for(let Dt=0;Dt<T.length;Dt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(yt|=r.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(yt|=r.STENCIL_BUFFER_BIT)),wt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Vt.__webglColorRenderbuffer[Dt]);const ge=s.get(T[Dt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ge,0)}r.blitFramebuffer(0,0,tt,ut,0,0,tt,ut,yt,r.NEAREST),p===!0&&(Ct.length=0,F.length=0,Ct.push(r.COLOR_ATTACHMENT0+Dt),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Ct.push(pt),F.push(pt),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,F)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ct))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),wt)for(let Dt=0;Dt<T.length;Dt++){i.bindFramebuffer(r.FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Dt,r.RENDERBUFFER,Vt.__webglColorRenderbuffer[Dt]);const ge=s.get(T[Dt]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Vt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Dt,r.TEXTURE_2D,ge,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Vt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&p){const T=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function se(w){return Math.min(l.maxSamples,w.samples)}function re(w){const T=s.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function jt(w){const T=f.render.frame;_.get(w)!==T&&(_.set(w,T),w.update())}function Re(w,T){const tt=w.colorSpace,ut=w.format,yt=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||tt!==Kr&&tt!==Qa&&(Le.getTransfer(tt)===Xe?(ut!==Ui||yt!==ya)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",tt)),T}function Yt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(m.width=w.naturalWidth||w.width,m.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(m.width=w.displayWidth,m.height=w.displayHeight):(m.width=w.width,m.height=w.height),m}this.allocateTextureUnit=it,this.resetTextureUnits=ot,this.setTexture2D=mt,this.setTexture2DArray=I,this.setTexture3D=Q,this.setTextureCube=j,this.rebindTextures=ee,this.setupRenderTarget=Te,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=Ne,this.setupDepthRenderbuffer=Ft,this.setupFrameBufferTexture=Tt,this.useMultisampledRTT=re}function A2(r,t){function i(s,l=Qa){let c;const f=Le.getTransfer(l);if(s===ya)return r.UNSIGNED_BYTE;if(s===op)return r.UNSIGNED_SHORT_4_4_4_4;if(s===lp)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Wv)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===Xv)return r.BYTE;if(s===jv)return r.SHORT;if(s===cl)return r.UNSIGNED_SHORT;if(s===rp)return r.INT;if(s===zs)return r.UNSIGNED_INT;if(s===Vi)return r.FLOAT;if(s===hl)return r.HALF_FLOAT;if(s===Yv)return r.ALPHA;if(s===qv)return r.RGB;if(s===Ui)return r.RGBA;if(s===Zv)return r.LUMINANCE;if(s===Kv)return r.LUMINANCE_ALPHA;if(s===Gr)return r.DEPTH_COMPONENT;if(s===Zr)return r.DEPTH_STENCIL;if(s===cp)return r.RED;if(s===up)return r.RED_INTEGER;if(s===Qv)return r.RG;if(s===fp)return r.RG_INTEGER;if(s===hp)return r.RGBA_INTEGER;if(s===nu||s===iu||s===au||s===su)if(f===Xe)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===nu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===iu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===au)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===su)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===nu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===iu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===au)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===su)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Rd||s===Cd||s===wd||s===Dd)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Rd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Cd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===wd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Dd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Ud||s===Ld||s===Nd)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Ud||s===Ld)return f===Xe?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Nd)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Od||s===zd||s===Pd||s===Bd||s===Id||s===Fd||s===Hd||s===Gd||s===Vd||s===kd||s===Xd||s===jd||s===Wd||s===Yd)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Od)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===zd)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Pd)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Bd)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Id)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Fd)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Hd)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Gd)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Vd)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===kd)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Xd)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===jd)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Wd)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Yd)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ru||s===qd||s===Zd)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===ru)return f===Xe?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===qd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Zd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Jv||s===Kd||s===Qd||s===Jd)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===ru)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Kd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Qd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Jd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===qr?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const R2={type:"move"};class fd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,f=null;const d=this._targetRay,p=this._grip,m=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(m&&t.hand){f=!0;for(const b of t.hand.values()){const M=i.getJointPose(b,s),v=this._getHandJoint(m,b);M!==null&&(v.matrix.fromArray(M.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=M.radius),v.visible=M!==null}const _=m.joints["index-finger-tip"],g=m.joints["thumb-tip"],x=_.position.distanceTo(g.position),y=.02,E=.005;m.inputState.pinching&&x>y+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!m.inputState.pinching&&x<=y-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(R2)))}return d!==null&&(d.visible=l!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new jc;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}const C2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,w2=`
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

}`;class D2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i,s){if(this.texture===null){const l=new Vn,c=t.properties.get(l);c.__webglTexture=i.texture,(i.depthNear!=s.depthNear||i.depthFar!=s.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new ns({vertexShader:C2,fragmentShader:w2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Kn(new Jr(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class U2 extends Fs{constructor(t,i){super();const s=this;let l=null,c=1,f=null,d="local-floor",p=1,m=null,_=null,g=null,x=null,y=null,E=null;const b=new D2,M=i.getContextAttributes();let v=null,O=null;const N=[],U=[],X=new le;let G=null;const P=new yi;P.viewport=new nn;const k=new yi;k.viewport=new nn;const D=[P,k],C=new q1;let B=null,ot=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ct=N[q];return ct===void 0&&(ct=new fd,N[q]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function(q){let ct=N[q];return ct===void 0&&(ct=new fd,N[q]=ct),ct.getGripSpace()},this.getHand=function(q){let ct=N[q];return ct===void 0&&(ct=new fd,N[q]=ct),ct.getHandSpace()};function it(q){const ct=U.indexOf(q.inputSource);if(ct===-1)return;const Tt=N[ct];Tt!==void 0&&(Tt.update(q.inputSource,q.frame,m||f),Tt.dispatchEvent({type:q.type,data:q.inputSource}))}function gt(){l.removeEventListener("select",it),l.removeEventListener("selectstart",it),l.removeEventListener("selectend",it),l.removeEventListener("squeeze",it),l.removeEventListener("squeezestart",it),l.removeEventListener("squeezeend",it),l.removeEventListener("end",gt),l.removeEventListener("inputsourceschange",mt);for(let q=0;q<N.length;q++){const ct=U[q];ct!==null&&(U[q]=null,N[q].disconnect(ct))}B=null,ot=null,b.reset(),t.setRenderTarget(v),y=null,x=null,g=null,l=null,O=null,xt.stop(),s.isPresenting=!1,t.setPixelRatio(G),t.setSize(X.width,X.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){c=q,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){d=q,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function(q){m=q},this.getBaseLayer=function(){return x!==null?x:y},this.getBinding=function(){return g},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(q){if(l=q,l!==null){if(v=t.getRenderTarget(),l.addEventListener("select",it),l.addEventListener("selectstart",it),l.addEventListener("selectend",it),l.addEventListener("squeeze",it),l.addEventListener("squeezestart",it),l.addEventListener("squeezeend",it),l.addEventListener("end",gt),l.addEventListener("inputsourceschange",mt),M.xrCompatible!==!0&&await i.makeXRCompatible(),G=t.getPixelRatio(),t.getSize(X),l.renderState.layers===void 0){const ct={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,ct),l.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),O=new Ps(y.framebufferWidth,y.framebufferHeight,{format:Ui,type:ya,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil})}else{let ct=null,Tt=null,bt=null;M.depth&&(bt=M.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,ct=M.stencil?Zr:Gr,Tt=M.stencil?qr:zs);const Ut={colorFormat:i.RGBA8,depthFormat:bt,scaleFactor:c};g=new XRWebGLBinding(l,i),x=g.createProjectionLayer(Ut),l.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),O=new Ps(x.textureWidth,x.textureHeight,{format:Ui,type:ya,depthTexture:new fx(x.textureWidth,x.textureHeight,Tt,void 0,void 0,void 0,void 0,void 0,void 0,ct),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1})}O.isXRRenderTarget=!0,this.setFoveation(p),m=null,f=await l.requestReferenceSpace(d),xt.setContext(l),xt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function mt(q){for(let ct=0;ct<q.removed.length;ct++){const Tt=q.removed[ct],bt=U.indexOf(Tt);bt>=0&&(U[bt]=null,N[bt].disconnect(Tt))}for(let ct=0;ct<q.added.length;ct++){const Tt=q.added[ct];let bt=U.indexOf(Tt);if(bt===-1){for(let Ft=0;Ft<N.length;Ft++)if(Ft>=U.length){U.push(Tt),bt=Ft;break}else if(U[Ft]===null){U[Ft]=Tt,bt=Ft;break}if(bt===-1)break}const Ut=N[bt];Ut&&Ut.connect(Tt)}}const I=new J,Q=new J;function j(q,ct,Tt){I.setFromMatrixPosition(ct.matrixWorld),Q.setFromMatrixPosition(Tt.matrixWorld);const bt=I.distanceTo(Q),Ut=ct.projectionMatrix.elements,Ft=Tt.projectionMatrix.elements,ee=Ut[14]/(Ut[10]-1),Te=Ut[14]/(Ut[10]+1),ht=(Ut[9]+1)/Ut[5],Ct=(Ut[9]-1)/Ut[5],F=(Ut[8]-1)/Ut[0],Ne=(Ft[8]+1)/Ft[0],se=ee*F,re=ee*Ne,jt=bt/(-F+Ne),Re=jt*-F;if(ct.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Re),q.translateZ(jt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Ut[10]===-1)q.projectionMatrix.copy(ct.projectionMatrix),q.projectionMatrixInverse.copy(ct.projectionMatrixInverse);else{const Yt=ee+jt,w=Te+jt,T=se-Re,tt=re+(bt-Re),ut=ht*Te/w*Yt,yt=Ct*Te/w*Yt;q.projectionMatrix.makePerspective(T,tt,ut,yt,Yt,w),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function Mt(q,ct){ct===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ct.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(l===null)return;let ct=q.near,Tt=q.far;b.texture!==null&&(b.depthNear>0&&(ct=b.depthNear),b.depthFar>0&&(Tt=b.depthFar)),C.near=k.near=P.near=ct,C.far=k.far=P.far=Tt,(B!==C.near||ot!==C.far)&&(l.updateRenderState({depthNear:C.near,depthFar:C.far}),B=C.near,ot=C.far),P.layers.mask=q.layers.mask|2,k.layers.mask=q.layers.mask|4,C.layers.mask=P.layers.mask|k.layers.mask;const bt=q.parent,Ut=C.cameras;Mt(C,bt);for(let Ft=0;Ft<Ut.length;Ft++)Mt(Ut[Ft],bt);Ut.length===2?j(C,P,k):C.projectionMatrix.copy(P.projectionMatrix),At(q,C,bt)};function At(q,ct,Tt){Tt===null?q.matrix.copy(ct.matrixWorld):(q.matrix.copy(Tt.matrixWorld),q.matrix.invert(),q.matrix.multiply(ct.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ct.projectionMatrix),q.projectionMatrixInverse.copy(ct.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=ul*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(x===null&&y===null))return p},this.setFoveation=function(q){p=q,x!==null&&(x.fixedFoveation=q),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=q)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(C)};let z=null;function $(q,ct){if(_=ct.getViewerPose(m||f),E=ct,_!==null){const Tt=_.views;y!==null&&(t.setRenderTargetFramebuffer(O,y.framebuffer),t.setRenderTarget(O));let bt=!1;Tt.length!==C.cameras.length&&(C.cameras.length=0,bt=!0);for(let Ft=0;Ft<Tt.length;Ft++){const ee=Tt[Ft];let Te=null;if(y!==null)Te=y.getViewport(ee);else{const Ct=g.getViewSubImage(x,ee);Te=Ct.viewport,Ft===0&&(t.setRenderTargetTextures(O,Ct.colorTexture,x.ignoreDepthValues?void 0:Ct.depthStencilTexture),t.setRenderTarget(O))}let ht=D[Ft];ht===void 0&&(ht=new yi,ht.layers.enable(Ft),ht.viewport=new nn,D[Ft]=ht),ht.matrix.fromArray(ee.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(ee.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(Te.x,Te.y,Te.width,Te.height),Ft===0&&(C.matrix.copy(ht.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),bt===!0&&C.cameras.push(ht)}const Ut=l.enabledFeatures;if(Ut&&Ut.includes("depth-sensing")){const Ft=g.getDepthInformation(Tt[0]);Ft&&Ft.isValid&&Ft.texture&&b.init(t,Ft,l.renderState)}}for(let Tt=0;Tt<N.length;Tt++){const bt=U[Tt],Ut=N[Tt];bt!==null&&Ut!==void 0&&Ut.update(bt,ct,m||f)}z&&z(q,ct),ct.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ct}),E=null}const xt=new px;xt.setAnimationLoop($),this.setAnimationLoop=function(q){z=q},this.dispose=function(){}}}const ws=new Xi,L2=new Fe;function N2(r,t){function i(M,v){M.matrixAutoUpdate===!0&&M.updateMatrix(),v.value.copy(M.matrix)}function s(M,v){v.color.getRGB(M.fogColor.value,lx(r)),v.isFog?(M.fogNear.value=v.near,M.fogFar.value=v.far):v.isFogExp2&&(M.fogDensity.value=v.density)}function l(M,v,O,N,U){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(M,v):v.isMeshToonMaterial?(c(M,v),g(M,v)):v.isMeshPhongMaterial?(c(M,v),_(M,v)):v.isMeshStandardMaterial?(c(M,v),x(M,v),v.isMeshPhysicalMaterial&&y(M,v,U)):v.isMeshMatcapMaterial?(c(M,v),E(M,v)):v.isMeshDepthMaterial?c(M,v):v.isMeshDistanceMaterial?(c(M,v),b(M,v)):v.isMeshNormalMaterial?c(M,v):v.isLineBasicMaterial?(f(M,v),v.isLineDashedMaterial&&d(M,v)):v.isPointsMaterial?p(M,v,O,N):v.isSpriteMaterial?m(M,v):v.isShadowMaterial?(M.color.value.copy(v.color),M.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(M,v){M.opacity.value=v.opacity,v.color&&M.diffuse.value.copy(v.color),v.emissive&&M.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(M.map.value=v.map,i(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.bumpMap&&(M.bumpMap.value=v.bumpMap,i(v.bumpMap,M.bumpMapTransform),M.bumpScale.value=v.bumpScale,v.side===Qn&&(M.bumpScale.value*=-1)),v.normalMap&&(M.normalMap.value=v.normalMap,i(v.normalMap,M.normalMapTransform),M.normalScale.value.copy(v.normalScale),v.side===Qn&&M.normalScale.value.negate()),v.displacementMap&&(M.displacementMap.value=v.displacementMap,i(v.displacementMap,M.displacementMapTransform),M.displacementScale.value=v.displacementScale,M.displacementBias.value=v.displacementBias),v.emissiveMap&&(M.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,M.emissiveMapTransform)),v.specularMap&&(M.specularMap.value=v.specularMap,i(v.specularMap,M.specularMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest);const O=t.get(v),N=O.envMap,U=O.envMapRotation;N&&(M.envMap.value=N,ws.copy(U),ws.x*=-1,ws.y*=-1,ws.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(ws.y*=-1,ws.z*=-1),M.envMapRotation.value.setFromMatrix4(L2.makeRotationFromEuler(ws)),M.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=v.reflectivity,M.ior.value=v.ior,M.refractionRatio.value=v.refractionRatio),v.lightMap&&(M.lightMap.value=v.lightMap,M.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,M.lightMapTransform)),v.aoMap&&(M.aoMap.value=v.aoMap,M.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,M.aoMapTransform))}function f(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,v.map&&(M.map.value=v.map,i(v.map,M.mapTransform))}function d(M,v){M.dashSize.value=v.dashSize,M.totalSize.value=v.dashSize+v.gapSize,M.scale.value=v.scale}function p(M,v,O,N){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.size.value=v.size*O,M.scale.value=N*.5,v.map&&(M.map.value=v.map,i(v.map,M.uvTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function m(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.rotation.value=v.rotation,v.map&&(M.map.value=v.map,i(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function _(M,v){M.specular.value.copy(v.specular),M.shininess.value=Math.max(v.shininess,1e-4)}function g(M,v){v.gradientMap&&(M.gradientMap.value=v.gradientMap)}function x(M,v){M.metalness.value=v.metalness,v.metalnessMap&&(M.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,M.metalnessMapTransform)),M.roughness.value=v.roughness,v.roughnessMap&&(M.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,M.roughnessMapTransform)),v.envMap&&(M.envMapIntensity.value=v.envMapIntensity)}function y(M,v,O){M.ior.value=v.ior,v.sheen>0&&(M.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),M.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(M.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,M.sheenColorMapTransform)),v.sheenRoughnessMap&&(M.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,M.sheenRoughnessMapTransform))),v.clearcoat>0&&(M.clearcoat.value=v.clearcoat,M.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(M.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,M.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(M.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Qn&&M.clearcoatNormalScale.value.negate())),v.dispersion>0&&(M.dispersion.value=v.dispersion),v.iridescence>0&&(M.iridescence.value=v.iridescence,M.iridescenceIOR.value=v.iridescenceIOR,M.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(M.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,M.iridescenceMapTransform)),v.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),v.transmission>0&&(M.transmission.value=v.transmission,M.transmissionSamplerMap.value=O.texture,M.transmissionSamplerSize.value.set(O.width,O.height),v.transmissionMap&&(M.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,M.transmissionMapTransform)),M.thickness.value=v.thickness,v.thicknessMap&&(M.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=v.attenuationDistance,M.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(M.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(M.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=v.specularIntensity,M.specularColor.value.copy(v.specularColor),v.specularColorMap&&(M.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,M.specularColorMapTransform)),v.specularIntensityMap&&(M.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,v){v.matcap&&(M.matcap.value=v.matcap)}function b(M,v){const O=t.get(v).light;M.referencePosition.value.setFromMatrixPosition(O.matrixWorld),M.nearDistance.value=O.shadow.camera.near,M.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function O2(r,t,i,s){let l={},c={},f=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function p(O,N){const U=N.program;s.uniformBlockBinding(O,U)}function m(O,N){let U=l[O.id];U===void 0&&(E(O),U=_(O),l[O.id]=U,O.addEventListener("dispose",M));const X=N.program;s.updateUBOMapping(O,X);const G=t.render.frame;c[O.id]!==G&&(x(O),c[O.id]=G)}function _(O){const N=g();O.__bindingPointIndex=N;const U=r.createBuffer(),X=O.__size,G=O.usage;return r.bindBuffer(r.UNIFORM_BUFFER,U),r.bufferData(r.UNIFORM_BUFFER,X,G),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,N,U),U}function g(){for(let O=0;O<d;O++)if(f.indexOf(O)===-1)return f.push(O),O;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(O){const N=l[O.id],U=O.uniforms,X=O.__cache;r.bindBuffer(r.UNIFORM_BUFFER,N);for(let G=0,P=U.length;G<P;G++){const k=Array.isArray(U[G])?U[G]:[U[G]];for(let D=0,C=k.length;D<C;D++){const B=k[D];if(y(B,G,D,X)===!0){const ot=B.__offset,it=Array.isArray(B.value)?B.value:[B.value];let gt=0;for(let mt=0;mt<it.length;mt++){const I=it[mt],Q=b(I);typeof I=="number"||typeof I=="boolean"?(B.__data[0]=I,r.bufferSubData(r.UNIFORM_BUFFER,ot+gt,B.__data)):I.isMatrix3?(B.__data[0]=I.elements[0],B.__data[1]=I.elements[1],B.__data[2]=I.elements[2],B.__data[3]=0,B.__data[4]=I.elements[3],B.__data[5]=I.elements[4],B.__data[6]=I.elements[5],B.__data[7]=0,B.__data[8]=I.elements[6],B.__data[9]=I.elements[7],B.__data[10]=I.elements[8],B.__data[11]=0):(I.toArray(B.__data,gt),gt+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,ot,B.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function y(O,N,U,X){const G=O.value,P=N+"_"+U;if(X[P]===void 0)return typeof G=="number"||typeof G=="boolean"?X[P]=G:X[P]=G.clone(),!0;{const k=X[P];if(typeof G=="number"||typeof G=="boolean"){if(k!==G)return X[P]=G,!0}else if(k.equals(G)===!1)return k.copy(G),!0}return!1}function E(O){const N=O.uniforms;let U=0;const X=16;for(let P=0,k=N.length;P<k;P++){const D=Array.isArray(N[P])?N[P]:[N[P]];for(let C=0,B=D.length;C<B;C++){const ot=D[C],it=Array.isArray(ot.value)?ot.value:[ot.value];for(let gt=0,mt=it.length;gt<mt;gt++){const I=it[gt],Q=b(I),j=U%X,Mt=j%Q.boundary,At=j+Mt;U+=Mt,At!==0&&X-At<Q.storage&&(U+=X-At),ot.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),ot.__offset=U,U+=Q.storage}}}const G=U%X;return G>0&&(U+=X-G),O.__size=U,O.__cache={},this}function b(O){const N={boundary:0,storage:0};return typeof O=="number"||typeof O=="boolean"?(N.boundary=4,N.storage=4):O.isVector2?(N.boundary=8,N.storage=8):O.isVector3||O.isColor?(N.boundary=16,N.storage=12):O.isVector4?(N.boundary=16,N.storage=16):O.isMatrix3?(N.boundary=48,N.storage=48):O.isMatrix4?(N.boundary=64,N.storage=64):O.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",O),N}function M(O){const N=O.target;N.removeEventListener("dispose",M);const U=f.indexOf(N.__bindingPointIndex);f.splice(U,1),r.deleteBuffer(l[N.id]),delete l[N.id],delete c[N.id]}function v(){for(const O in l)r.deleteBuffer(l[O]);f=[],l={},c={}}return{bind:p,update:m,dispose:v}}class z2{constructor(t={}){const{canvas:i=c1(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1,reverseDepthBuffer:x=!1}=t;this.isWebGLRenderer=!0;let y;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=s.getContextAttributes().alpha}else y=f;const E=new Uint32Array(4),b=new Int32Array(4);let M=null,v=null;const O=[],N=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=li,this.toneMapping=$a,this.toneMappingExposure=1;const U=this;let X=!1,G=0,P=0,k=null,D=-1,C=null;const B=new nn,ot=new nn;let it=null;const gt=new me(0);let mt=0,I=i.width,Q=i.height,j=1,Mt=null,At=null;const z=new nn(0,0,I,Q),$=new nn(0,0,I,Q);let xt=!1;const q=new _p;let ct=!1,Tt=!1;const bt=new Fe,Ut=new Fe,Ft=new J,ee=new nn,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ht=!1;function Ct(){return k===null?j:1}let F=s;function Ne(R,Y){return i.getContext(R,Y)}try{const R={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${sp}`),i.addEventListener("webglcontextlost",St,!1),i.addEventListener("webglcontextrestored",Nt,!1),i.addEventListener("webglcontextcreationerror",Ot,!1),F===null){const Y="webgl2";if(F=Ne(Y,R),F===null)throw Ne(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let se,re,jt,Re,Yt,w,T,tt,ut,yt,pt,Vt,wt,Dt,ge,Rt,It,qt,Zt,Bt,ne,ce,He,W;function Lt(){se=new XT(F),se.init(),ce=new A2(F,se),re=new IT(F,se,t,ce),jt=new b2(F,se),re.reverseDepthBuffer&&x&&jt.buffers.depth.setReversed(!0),Re=new YT(F),Yt=new f2,w=new T2(F,se,jt,Yt,re,ce,Re),T=new HT(U),tt=new kT(U),ut=new tE(F),He=new PT(F,ut),yt=new jT(F,ut,Re,He),pt=new ZT(F,yt,ut,Re),Zt=new qT(F,re,w),Rt=new FT(Yt),Vt=new u2(U,T,tt,se,re,He,Rt),wt=new N2(U,Yt),Dt=new d2,ge=new x2(se),qt=new zT(U,T,tt,jt,pt,y,p),It=new M2(U,pt,re),W=new O2(F,Re,re,jt),Bt=new BT(F,se,Re),ne=new WT(F,se,Re),Re.programs=Vt.programs,U.capabilities=re,U.extensions=se,U.properties=Yt,U.renderLists=Dt,U.shadowMap=It,U.state=jt,U.info=Re}Lt();const ft=new U2(U,F);this.xr=ft,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const R=se.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=se.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(R){R!==void 0&&(j=R,this.setSize(I,Q,!1))},this.getSize=function(R){return R.set(I,Q)},this.setSize=function(R,Y,st=!0){if(ft.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=R,Q=Y,i.width=Math.floor(R*j),i.height=Math.floor(Y*j),st===!0&&(i.style.width=R+"px",i.style.height=Y+"px"),this.setViewport(0,0,R,Y)},this.getDrawingBufferSize=function(R){return R.set(I*j,Q*j).floor()},this.setDrawingBufferSize=function(R,Y,st){I=R,Q=Y,j=st,i.width=Math.floor(R*st),i.height=Math.floor(Y*st),this.setViewport(0,0,R,Y)},this.getCurrentViewport=function(R){return R.copy(B)},this.getViewport=function(R){return R.copy(z)},this.setViewport=function(R,Y,st,rt){R.isVector4?z.set(R.x,R.y,R.z,R.w):z.set(R,Y,st,rt),jt.viewport(B.copy(z).multiplyScalar(j).round())},this.getScissor=function(R){return R.copy($)},this.setScissor=function(R,Y,st,rt){R.isVector4?$.set(R.x,R.y,R.z,R.w):$.set(R,Y,st,rt),jt.scissor(ot.copy($).multiplyScalar(j).round())},this.getScissorTest=function(){return xt},this.setScissorTest=function(R){jt.setScissorTest(xt=R)},this.setOpaqueSort=function(R){Mt=R},this.setTransparentSort=function(R){At=R},this.getClearColor=function(R){return R.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor.apply(qt,arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha.apply(qt,arguments)},this.clear=function(R=!0,Y=!0,st=!0){let rt=0;if(R){let Z=!1;if(k!==null){const Et=k.texture.format;Z=Et===hp||Et===fp||Et===up}if(Z){const Et=k.texture.type,zt=Et===ya||Et===zs||Et===cl||Et===qr||Et===op||Et===lp,Gt=qt.getClearColor(),Ht=qt.getClearAlpha(),$t=Gt.r,ae=Gt.g,Qt=Gt.b;zt?(E[0]=$t,E[1]=ae,E[2]=Qt,E[3]=Ht,F.clearBufferuiv(F.COLOR,0,E)):(b[0]=$t,b[1]=ae,b[2]=Qt,b[3]=Ht,F.clearBufferiv(F.COLOR,0,b))}else rt|=F.COLOR_BUFFER_BIT}Y&&(rt|=F.DEPTH_BUFFER_BIT),st&&(rt|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(rt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",St,!1),i.removeEventListener("webglcontextrestored",Nt,!1),i.removeEventListener("webglcontextcreationerror",Ot,!1),qt.dispose(),Dt.dispose(),ge.dispose(),Yt.dispose(),T.dispose(),tt.dispose(),pt.dispose(),He.dispose(),W.dispose(),Vt.dispose(),ft.dispose(),ft.removeEventListener("sessionstart",so),ft.removeEventListener("sessionend",ro),Ni.stop()};function St(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),X=!0}function Nt(){console.log("THREE.WebGLRenderer: Context Restored."),X=!1;const R=Re.autoReset,Y=It.enabled,st=It.autoUpdate,rt=It.needsUpdate,Z=It.type;Lt(),Re.autoReset=R,It.enabled=Y,It.autoUpdate=st,It.needsUpdate=rt,It.type=Z}function Ot(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ie(R){const Y=R.target;Y.removeEventListener("dispose",ie),Qe(Y)}function Qe(R){pn(R),Yt.remove(R)}function pn(R){const Y=Yt.get(R).programs;Y!==void 0&&(Y.forEach(function(st){Vt.releaseProgram(st)}),R.isShaderMaterial&&Vt.releaseShaderCache(R))}this.renderBufferDirect=function(R,Y,st,rt,Z,Et){Y===null&&(Y=Te);const zt=Z.isMesh&&Z.matrixWorld.determinant()<0,Gt=lo(R,Y,st,rt,Z);jt.setMaterial(rt,zt);let Ht=st.index,$t=1;if(rt.wireframe===!0){if(Ht=yt.getWireframeAttribute(st),Ht===void 0)return;$t=2}const ae=st.drawRange,Qt=st.attributes.position;let Se=ae.start*$t,Ce=(ae.start+ae.count)*$t;Et!==null&&(Se=Math.max(Se,Et.start*$t),Ce=Math.min(Ce,(Et.start+Et.count)*$t)),Ht!==null?(Se=Math.max(Se,0),Ce=Math.min(Ce,Ht.count)):Qt!=null&&(Se=Math.max(Se,0),Ce=Math.min(Ce,Qt.count));const qe=Ce-Se;if(qe<0||qe===1/0)return;He.setup(Z,rt,Gt,st,Ht);let We,ue=Bt;if(Ht!==null&&(We=ut.get(Ht),ue=ne,ue.setIndex(We)),Z.isMesh)rt.wireframe===!0?(jt.setLineWidth(rt.wireframeLinewidth*Ct()),ue.setMode(F.LINES)):ue.setMode(F.TRIANGLES);else if(Z.isLine){let Xt=rt.linewidth;Xt===void 0&&(Xt=1),jt.setLineWidth(Xt*Ct()),Z.isLineSegments?ue.setMode(F.LINES):Z.isLineLoop?ue.setMode(F.LINE_LOOP):ue.setMode(F.LINE_STRIP)}else Z.isPoints?ue.setMode(F.POINTS):Z.isSprite&&ue.setMode(F.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)ue.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(se.get("WEBGL_multi_draw"))ue.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Xt=Z._multiDrawStarts,on=Z._multiDrawCounts,we=Z._multiDrawCount,Bn=Ht?ut.get(Ht).bytesPerElement:1,Wi=Yt.get(rt).currentProgram.getUniforms();for(let Sn=0;Sn<we;Sn++)Wi.setValue(F,"_gl_DrawID",Sn),ue.render(Xt[Sn]/Bn,on[Sn])}else if(Z.isInstancedMesh)ue.renderInstances(Se,qe,Z.count);else if(st.isInstancedBufferGeometry){const Xt=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,on=Math.min(st.instanceCount,Xt);ue.renderInstances(Se,qe,on)}else ue.render(Se,qe)};function Ae(R,Y,st){R.transparent===!0&&R.side===Hi&&R.forceSinglePass===!1?(R.side=Qn,R.needsUpdate=!0,$e(R,Y,st),R.side=es,R.needsUpdate=!0,$e(R,Y,st),R.side=Hi):$e(R,Y,st)}this.compile=function(R,Y,st=null){st===null&&(st=R),v=ge.get(st),v.init(Y),N.push(v),st.traverseVisible(function(Z){Z.isLight&&Z.layers.test(Y.layers)&&(v.pushLight(Z),Z.castShadow&&v.pushShadow(Z))}),R!==st&&R.traverseVisible(function(Z){Z.isLight&&Z.layers.test(Y.layers)&&(v.pushLight(Z),Z.castShadow&&v.pushShadow(Z))}),v.setupLights();const rt=new Set;return R.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Et=Z.material;if(Et)if(Array.isArray(Et))for(let zt=0;zt<Et.length;zt++){const Gt=Et[zt];Ae(Gt,st,Z),rt.add(Gt)}else Ae(Et,st,Z),rt.add(Et)}),N.pop(),v=null,rt},this.compileAsync=function(R,Y,st=null){const rt=this.compile(R,Y,st);return new Promise(Z=>{function Et(){if(rt.forEach(function(zt){Yt.get(zt).currentProgram.isReady()&&rt.delete(zt)}),rt.size===0){Z(R);return}setTimeout(Et,10)}se.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let Tn=null;function Mi(R){Tn&&Tn(R)}function so(){Ni.stop()}function ro(){Ni.start()}const Ni=new px;Ni.setAnimationLoop(Mi),typeof self<"u"&&Ni.setContext(self),this.setAnimationLoop=function(R){Tn=R,ft.setAnimationLoop(R),R===null?Ni.stop():Ni.start()},ft.addEventListener("sessionstart",so),ft.addEventListener("sessionend",ro),this.render=function(R,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(X===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),ft.enabled===!0&&ft.isPresenting===!0&&(ft.cameraAutoUpdate===!0&&ft.updateCamera(Y),Y=ft.getCamera()),R.isScene===!0&&R.onBeforeRender(U,R,Y,k),v=ge.get(R,N.length),v.init(Y),N.push(v),Ut.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),q.setFromProjectionMatrix(Ut),Tt=this.localClippingEnabled,ct=Rt.init(this.clippingPlanes,Tt),M=Dt.get(R,O.length),M.init(),O.push(M),ft.enabled===!0&&ft.isPresenting===!0){const Et=U.xr.getDepthSensingMesh();Et!==null&&as(Et,Y,-1/0,U.sortObjects)}as(R,Y,0,U.sortObjects),M.finish(),U.sortObjects===!0&&M.sort(Mt,At),ht=ft.enabled===!1||ft.isPresenting===!1||ft.hasDepthSensing()===!1,ht&&qt.addToRenderList(M,R),this.info.render.frame++,ct===!0&&Rt.beginShadows();const st=v.state.shadowsArray;It.render(st,R,Y),ct===!0&&Rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const rt=M.opaque,Z=M.transmissive;if(v.setupLights(),Y.isArrayCamera){const Et=Y.cameras;if(Z.length>0)for(let zt=0,Gt=Et.length;zt<Gt;zt++){const Ht=Et[zt];oo(rt,Z,R,Ht)}ht&&qt.render(R);for(let zt=0,Gt=Et.length;zt<Gt;zt++){const Ht=Et[zt];Gs(M,R,Ht,Ht.viewport)}}else Z.length>0&&oo(rt,Z,R,Y),ht&&qt.render(R),Gs(M,R,Y);k!==null&&(w.updateMultisampleRenderTarget(k),w.updateRenderTargetMipmap(k)),R.isScene===!0&&R.onAfterRender(U,R,Y),He.resetDefaultState(),D=-1,C=null,N.pop(),N.length>0?(v=N[N.length-1],ct===!0&&Rt.setGlobalState(U.clippingPlanes,v.state.camera)):v=null,O.pop(),O.length>0?M=O[O.length-1]:M=null};function as(R,Y,st,rt){if(R.visible===!1)return;if(R.layers.test(Y.layers)){if(R.isGroup)st=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Y);else if(R.isLight)v.pushLight(R),R.castShadow&&v.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||q.intersectsSprite(R)){rt&&ee.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ut);const zt=pt.update(R),Gt=R.material;Gt.visible&&M.push(R,zt,Gt,st,ee.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||q.intersectsObject(R))){const zt=pt.update(R),Gt=R.material;if(rt&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),ee.copy(R.boundingSphere.center)):(zt.boundingSphere===null&&zt.computeBoundingSphere(),ee.copy(zt.boundingSphere.center)),ee.applyMatrix4(R.matrixWorld).applyMatrix4(Ut)),Array.isArray(Gt)){const Ht=zt.groups;for(let $t=0,ae=Ht.length;$t<ae;$t++){const Qt=Ht[$t],Se=Gt[Qt.materialIndex];Se&&Se.visible&&M.push(R,zt,Se,st,ee.z,Qt)}}else Gt.visible&&M.push(R,zt,Gt,st,ee.z,null)}}const Et=R.children;for(let zt=0,Gt=Et.length;zt<Gt;zt++)as(Et[zt],Y,st,rt)}function Gs(R,Y,st,rt){const Z=R.opaque,Et=R.transmissive,zt=R.transparent;v.setupLightsView(st),ct===!0&&Rt.setGlobalState(U.clippingPlanes,st),rt&&jt.viewport(B.copy(rt)),Z.length>0&&ss(Z,Y,st),Et.length>0&&ss(Et,Y,st),zt.length>0&&ss(zt,Y,st),jt.buffers.depth.setTest(!0),jt.buffers.depth.setMask(!0),jt.buffers.color.setMask(!0),jt.setPolygonOffset(!1)}function oo(R,Y,st,rt){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[rt.id]===void 0&&(v.state.transmissionRenderTarget[rt.id]=new Ps(1,1,{generateMipmaps:!0,type:se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float")?hl:ya,minFilter:Os,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Le.workingColorSpace}));const Et=v.state.transmissionRenderTarget[rt.id],zt=rt.viewport||B;Et.setSize(zt.z,zt.w);const Gt=U.getRenderTarget();U.setRenderTarget(Et),U.getClearColor(gt),mt=U.getClearAlpha(),mt<1&&U.setClearColor(16777215,.5),U.clear(),ht&&qt.render(st);const Ht=U.toneMapping;U.toneMapping=$a;const $t=rt.viewport;if(rt.viewport!==void 0&&(rt.viewport=void 0),v.setupLightsView(rt),ct===!0&&Rt.setGlobalState(U.clippingPlanes,rt),ss(R,st,rt),w.updateMultisampleRenderTarget(Et),w.updateRenderTargetMipmap(Et),se.has("WEBGL_multisampled_render_to_texture")===!1){let ae=!1;for(let Qt=0,Se=Y.length;Qt<Se;Qt++){const Ce=Y[Qt],qe=Ce.object,We=Ce.geometry,ue=Ce.material,Xt=Ce.group;if(ue.side===Hi&&qe.layers.test(rt.layers)){const on=ue.side;ue.side=Qn,ue.needsUpdate=!0,Ei(qe,st,rt,We,ue,Xt),ue.side=on,ue.needsUpdate=!0,ae=!0}}ae===!0&&(w.updateMultisampleRenderTarget(Et),w.updateRenderTargetMipmap(Et))}U.setRenderTarget(Gt),U.setClearColor(gt,mt),$t!==void 0&&(rt.viewport=$t),U.toneMapping=Ht}function ss(R,Y,st){const rt=Y.isScene===!0?Y.overrideMaterial:null;for(let Z=0,Et=R.length;Z<Et;Z++){const zt=R[Z],Gt=zt.object,Ht=zt.geometry,$t=rt===null?zt.material:rt,ae=zt.group;Gt.layers.test(st.layers)&&Ei(Gt,Y,st,Ht,$t,ae)}}function Ei(R,Y,st,rt,Z,Et){R.onBeforeRender(U,Y,st,rt,Z,Et),R.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Z.onBeforeRender(U,Y,st,rt,R,Et),Z.transparent===!0&&Z.side===Hi&&Z.forceSinglePass===!1?(Z.side=Qn,Z.needsUpdate=!0,U.renderBufferDirect(st,Y,rt,Z,R,Et),Z.side=es,Z.needsUpdate=!0,U.renderBufferDirect(st,Y,rt,Z,R,Et),Z.side=Hi):U.renderBufferDirect(st,Y,rt,Z,R,Et),R.onAfterRender(U,Y,st,rt,Z,Et)}function $e(R,Y,st){Y.isScene!==!0&&(Y=Te);const rt=Yt.get(R),Z=v.state.lights,Et=v.state.shadowsArray,zt=Z.state.version,Gt=Vt.getParameters(R,Z.state,Et,Y,st),Ht=Vt.getProgramCacheKey(Gt);let $t=rt.programs;rt.environment=R.isMeshStandardMaterial?Y.environment:null,rt.fog=Y.fog,rt.envMap=(R.isMeshStandardMaterial?tt:T).get(R.envMap||rt.environment),rt.envMapRotation=rt.environment!==null&&R.envMap===null?Y.environmentRotation:R.envMapRotation,$t===void 0&&(R.addEventListener("dispose",ie),$t=new Map,rt.programs=$t);let ae=$t.get(Ht);if(ae!==void 0){if(rt.currentProgram===ae&&rt.lightsStateVersion===zt)return ji(R,Gt),ae}else Gt.uniforms=Vt.getUniforms(R),R.onBeforeCompile(Gt,U),ae=Vt.acquireProgram(Gt,Ht),$t.set(Ht,ae),rt.uniforms=Gt.uniforms;const Qt=rt.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Qt.clippingPlanes=Rt.uniform),ji(R,Gt),rt.needsLights=Eu(R),rt.lightsStateVersion=zt,rt.needsLights&&(Qt.ambientLightColor.value=Z.state.ambient,Qt.lightProbe.value=Z.state.probe,Qt.directionalLights.value=Z.state.directional,Qt.directionalLightShadows.value=Z.state.directionalShadow,Qt.spotLights.value=Z.state.spot,Qt.spotLightShadows.value=Z.state.spotShadow,Qt.rectAreaLights.value=Z.state.rectArea,Qt.ltc_1.value=Z.state.rectAreaLTC1,Qt.ltc_2.value=Z.state.rectAreaLTC2,Qt.pointLights.value=Z.state.point,Qt.pointLightShadows.value=Z.state.pointShadow,Qt.hemisphereLights.value=Z.state.hemi,Qt.directionalShadowMap.value=Z.state.directionalShadowMap,Qt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Qt.spotShadowMap.value=Z.state.spotShadowMap,Qt.spotLightMatrix.value=Z.state.spotLightMatrix,Qt.spotLightMap.value=Z.state.spotLightMap,Qt.pointShadowMap.value=Z.state.pointShadowMap,Qt.pointShadowMatrix.value=Z.state.pointShadowMatrix),rt.currentProgram=ae,rt.uniformsList=null,ae}function An(R){if(R.uniformsList===null){const Y=R.currentProgram.getUniforms();R.uniformsList=ou.seqWithValue(Y.seq,R.uniforms)}return R.uniformsList}function ji(R,Y){const st=Yt.get(R);st.outputColorSpace=Y.outputColorSpace,st.batching=Y.batching,st.batchingColor=Y.batchingColor,st.instancing=Y.instancing,st.instancingColor=Y.instancingColor,st.instancingMorph=Y.instancingMorph,st.skinning=Y.skinning,st.morphTargets=Y.morphTargets,st.morphNormals=Y.morphNormals,st.morphColors=Y.morphColors,st.morphTargetsCount=Y.morphTargetsCount,st.numClippingPlanes=Y.numClippingPlanes,st.numIntersection=Y.numClipIntersection,st.vertexAlphas=Y.vertexAlphas,st.vertexTangents=Y.vertexTangents,st.toneMapping=Y.toneMapping}function lo(R,Y,st,rt,Z){Y.isScene!==!0&&(Y=Te),w.resetTextureUnits();const Et=Y.fog,zt=rt.isMeshStandardMaterial?Y.environment:null,Gt=k===null?U.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Kr,Ht=(rt.isMeshStandardMaterial?tt:T).get(rt.envMap||zt),$t=rt.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,ae=!!st.attributes.tangent&&(!!rt.normalMap||rt.anisotropy>0),Qt=!!st.morphAttributes.position,Se=!!st.morphAttributes.normal,Ce=!!st.morphAttributes.color;let qe=$a;rt.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(qe=U.toneMapping);const We=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,ue=We!==void 0?We.length:0,Xt=Yt.get(rt),on=v.state.lights;if(ct===!0&&(Tt===!0||R!==C)){const mn=R===C&&rt.id===D;Rt.setState(rt,R,mn)}let we=!1;rt.version===Xt.__version?(Xt.needsLights&&Xt.lightsStateVersion!==on.state.version||Xt.outputColorSpace!==Gt||Z.isBatchedMesh&&Xt.batching===!1||!Z.isBatchedMesh&&Xt.batching===!0||Z.isBatchedMesh&&Xt.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Xt.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Xt.instancing===!1||!Z.isInstancedMesh&&Xt.instancing===!0||Z.isSkinnedMesh&&Xt.skinning===!1||!Z.isSkinnedMesh&&Xt.skinning===!0||Z.isInstancedMesh&&Xt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Xt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Xt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Xt.instancingMorph===!1&&Z.morphTexture!==null||Xt.envMap!==Ht||rt.fog===!0&&Xt.fog!==Et||Xt.numClippingPlanes!==void 0&&(Xt.numClippingPlanes!==Rt.numPlanes||Xt.numIntersection!==Rt.numIntersection)||Xt.vertexAlphas!==$t||Xt.vertexTangents!==ae||Xt.morphTargets!==Qt||Xt.morphNormals!==Se||Xt.morphColors!==Ce||Xt.toneMapping!==qe||Xt.morphTargetsCount!==ue)&&(we=!0):(we=!0,Xt.__version=rt.version);let Bn=Xt.currentProgram;we===!0&&(Bn=$e(rt,Y,Z));let Wi=!1,Sn=!1,os=!1;const ve=Bn.getUniforms(),Nn=Xt.uniforms;if(jt.useProgram(Bn.program)&&(Wi=!0,Sn=!0,os=!0),rt.id!==D&&(D=rt.id,Sn=!0),Wi||C!==R){jt.buffers.depth.getReversed()?(bt.copy(R.projectionMatrix),f1(bt),h1(bt),ve.setValue(F,"projectionMatrix",bt)):ve.setValue(F,"projectionMatrix",R.projectionMatrix),ve.setValue(F,"viewMatrix",R.matrixWorldInverse);const an=ve.map.cameraPosition;an!==void 0&&an.setValue(F,Ft.setFromMatrixPosition(R.matrixWorld)),re.logarithmicDepthBuffer&&ve.setValue(F,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(rt.isMeshPhongMaterial||rt.isMeshToonMaterial||rt.isMeshLambertMaterial||rt.isMeshBasicMaterial||rt.isMeshStandardMaterial||rt.isShaderMaterial)&&ve.setValue(F,"isOrthographic",R.isOrthographicCamera===!0),C!==R&&(C=R,Sn=!0,os=!0)}if(Z.isSkinnedMesh){ve.setOptional(F,Z,"bindMatrix"),ve.setOptional(F,Z,"bindMatrixInverse");const mn=Z.skeleton;mn&&(mn.boneTexture===null&&mn.computeBoneTexture(),ve.setValue(F,"boneTexture",mn.boneTexture,w))}Z.isBatchedMesh&&(ve.setOptional(F,Z,"batchingTexture"),ve.setValue(F,"batchingTexture",Z._matricesTexture,w),ve.setOptional(F,Z,"batchingIdTexture"),ve.setValue(F,"batchingIdTexture",Z._indirectTexture,w),ve.setOptional(F,Z,"batchingColorTexture"),Z._colorsTexture!==null&&ve.setValue(F,"batchingColorTexture",Z._colorsTexture,w));const In=st.morphAttributes;if((In.position!==void 0||In.normal!==void 0||In.color!==void 0)&&Zt.update(Z,st,Bn),(Sn||Xt.receiveShadow!==Z.receiveShadow)&&(Xt.receiveShadow=Z.receiveShadow,ve.setValue(F,"receiveShadow",Z.receiveShadow)),rt.isMeshGouraudMaterial&&rt.envMap!==null&&(Nn.envMap.value=Ht,Nn.flipEnvMap.value=Ht.isCubeTexture&&Ht.isRenderTargetTexture===!1?-1:1),rt.isMeshStandardMaterial&&rt.envMap===null&&Y.environment!==null&&(Nn.envMapIntensity.value=Y.environmentIntensity),Sn&&(ve.setValue(F,"toneMappingExposure",U.toneMappingExposure),Xt.needsLights&&Mu(Nn,os),Et&&rt.fog===!0&&wt.refreshFogUniforms(Nn,Et),wt.refreshMaterialUniforms(Nn,rt,j,Q,v.state.transmissionRenderTarget[R.id]),ou.upload(F,An(Xt),Nn,w)),rt.isShaderMaterial&&rt.uniformsNeedUpdate===!0&&(ou.upload(F,An(Xt),Nn,w),rt.uniformsNeedUpdate=!1),rt.isSpriteMaterial&&ve.setValue(F,"center",Z.center),ve.setValue(F,"modelViewMatrix",Z.modelViewMatrix),ve.setValue(F,"normalMatrix",Z.normalMatrix),ve.setValue(F,"modelMatrix",Z.matrixWorld),rt.isShaderMaterial||rt.isRawShaderMaterial){const mn=rt.uniformsGroups;for(let an=0,Vs=mn.length;an<Vs;an++){const Oi=mn[an];W.update(Oi,Bn),W.bind(Oi,Bn)}}return Bn}function Mu(R,Y){R.ambientLightColor.needsUpdate=Y,R.lightProbe.needsUpdate=Y,R.directionalLights.needsUpdate=Y,R.directionalLightShadows.needsUpdate=Y,R.pointLights.needsUpdate=Y,R.pointLightShadows.needsUpdate=Y,R.spotLights.needsUpdate=Y,R.spotLightShadows.needsUpdate=Y,R.rectAreaLights.needsUpdate=Y,R.hemisphereLights.needsUpdate=Y}function Eu(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(R,Y,st){Yt.get(R.texture).__webglTexture=Y,Yt.get(R.depthTexture).__webglTexture=st;const rt=Yt.get(R);rt.__hasExternalTextures=!0,rt.__autoAllocateDepthBuffer=st===void 0,rt.__autoAllocateDepthBuffer||se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),rt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,Y){const st=Yt.get(R);st.__webglFramebuffer=Y,st.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(R,Y=0,st=0){k=R,G=Y,P=st;let rt=!0,Z=null,Et=!1,zt=!1;if(R){const Ht=Yt.get(R);if(Ht.__useDefaultFramebuffer!==void 0)jt.bindFramebuffer(F.FRAMEBUFFER,null),rt=!1;else if(Ht.__webglFramebuffer===void 0)w.setupRenderTarget(R);else if(Ht.__hasExternalTextures)w.rebindTextures(R,Yt.get(R.texture).__webglTexture,Yt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Qt=R.depthTexture;if(Ht.__boundDepthTexture!==Qt){if(Qt!==null&&Yt.has(Qt)&&(R.width!==Qt.image.width||R.height!==Qt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(R)}}const $t=R.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(zt=!0);const ae=Yt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ae[Y])?Z=ae[Y][st]:Z=ae[Y],Et=!0):R.samples>0&&w.useMultisampledRTT(R)===!1?Z=Yt.get(R).__webglMultisampledFramebuffer:Array.isArray(ae)?Z=ae[st]:Z=ae,B.copy(R.viewport),ot.copy(R.scissor),it=R.scissorTest}else B.copy(z).multiplyScalar(j).floor(),ot.copy($).multiplyScalar(j).floor(),it=xt;if(jt.bindFramebuffer(F.FRAMEBUFFER,Z)&&rt&&jt.drawBuffers(R,Z),jt.viewport(B),jt.scissor(ot),jt.setScissorTest(it),Et){const Ht=Yt.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ht.__webglTexture,st)}else if(zt){const Ht=Yt.get(R.texture),$t=Y||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ht.__webglTexture,st||0,$t)}D=-1},this.readRenderTargetPixels=function(R,Y,st,rt,Z,Et,zt){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Gt=Yt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&zt!==void 0&&(Gt=Gt[zt]),Gt){jt.bindFramebuffer(F.FRAMEBUFFER,Gt);try{const Ht=R.texture,$t=Ht.format,ae=Ht.type;if(!re.textureFormatReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!re.textureTypeReadable(ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=R.width-rt&&st>=0&&st<=R.height-Z&&F.readPixels(Y,st,rt,Z,ce.convert($t),ce.convert(ae),Et)}finally{const Ht=k!==null?Yt.get(k).__webglFramebuffer:null;jt.bindFramebuffer(F.FRAMEBUFFER,Ht)}}},this.readRenderTargetPixelsAsync=async function(R,Y,st,rt,Z,Et,zt){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Gt=Yt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&zt!==void 0&&(Gt=Gt[zt]),Gt){const Ht=R.texture,$t=Ht.format,ae=Ht.type;if(!re.textureFormatReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!re.textureTypeReadable(ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Y>=0&&Y<=R.width-rt&&st>=0&&st<=R.height-Z){jt.bindFramebuffer(F.FRAMEBUFFER,Gt);const Qt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Qt),F.bufferData(F.PIXEL_PACK_BUFFER,Et.byteLength,F.STREAM_READ),F.readPixels(Y,st,rt,Z,ce.convert($t),ce.convert(ae),0);const Se=k!==null?Yt.get(k).__webglFramebuffer:null;jt.bindFramebuffer(F.FRAMEBUFFER,Se);const Ce=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await u1(F,Ce,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Qt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Et),F.deleteBuffer(Qt),F.deleteSync(Ce),Et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,Y=null,st=0){R.isTexture!==!0&&(Br("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Y=arguments[0]||null,R=arguments[1]);const rt=Math.pow(2,-st),Z=Math.floor(R.image.width*rt),Et=Math.floor(R.image.height*rt),zt=Y!==null?Y.x:0,Gt=Y!==null?Y.y:0;w.setTexture2D(R,0),F.copyTexSubImage2D(F.TEXTURE_2D,st,0,0,zt,Gt,Z,Et),jt.unbindTexture()};const dl=F.createFramebuffer(),rs=F.createFramebuffer();this.copyTextureToTexture=function(R,Y,st=null,rt=null,Z=0,Et=null){R.isTexture!==!0&&(Br("WebGLRenderer: copyTextureToTexture function signature has changed."),rt=arguments[0]||null,R=arguments[1],Y=arguments[2],Et=arguments[3]||0,st=null),Et===null&&(Z!==0?(Br("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Et=Z,Z=0):Et=0);let zt,Gt,Ht,$t,ae,Qt,Se,Ce,qe;const We=R.isCompressedTexture?R.mipmaps[Et]:R.image;if(st!==null)zt=st.max.x-st.min.x,Gt=st.max.y-st.min.y,Ht=st.isBox3?st.max.z-st.min.z:1,$t=st.min.x,ae=st.min.y,Qt=st.isBox3?st.min.z:0;else{const In=Math.pow(2,-Z);zt=Math.floor(We.width*In),Gt=Math.floor(We.height*In),R.isDataArrayTexture?Ht=We.depth:R.isData3DTexture?Ht=Math.floor(We.depth*In):Ht=1,$t=0,ae=0,Qt=0}rt!==null?(Se=rt.x,Ce=rt.y,qe=rt.z):(Se=0,Ce=0,qe=0);const ue=ce.convert(Y.format),Xt=ce.convert(Y.type);let on;Y.isData3DTexture?(w.setTexture3D(Y,0),on=F.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(w.setTexture2DArray(Y,0),on=F.TEXTURE_2D_ARRAY):(w.setTexture2D(Y,0),on=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,Y.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,Y.unpackAlignment);const we=F.getParameter(F.UNPACK_ROW_LENGTH),Bn=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Wi=F.getParameter(F.UNPACK_SKIP_PIXELS),Sn=F.getParameter(F.UNPACK_SKIP_ROWS),os=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,We.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,We.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,$t),F.pixelStorei(F.UNPACK_SKIP_ROWS,ae),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Qt);const ve=R.isDataArrayTexture||R.isData3DTexture,Nn=Y.isDataArrayTexture||Y.isData3DTexture;if(R.isDepthTexture){const In=Yt.get(R),mn=Yt.get(Y),an=Yt.get(In.__renderTarget),Vs=Yt.get(mn.__renderTarget);jt.bindFramebuffer(F.READ_FRAMEBUFFER,an.__webglFramebuffer),jt.bindFramebuffer(F.DRAW_FRAMEBUFFER,Vs.__webglFramebuffer);for(let Oi=0;Oi<Ht;Oi++)ve&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Yt.get(R).__webglTexture,Z,Qt+Oi),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Yt.get(Y).__webglTexture,Et,qe+Oi)),F.blitFramebuffer($t,ae,zt,Gt,Se,Ce,zt,Gt,F.DEPTH_BUFFER_BIT,F.NEAREST);jt.bindFramebuffer(F.READ_FRAMEBUFFER,null),jt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(Z!==0||R.isRenderTargetTexture||Yt.has(R)){const In=Yt.get(R),mn=Yt.get(Y);jt.bindFramebuffer(F.READ_FRAMEBUFFER,dl),jt.bindFramebuffer(F.DRAW_FRAMEBUFFER,rs);for(let an=0;an<Ht;an++)ve?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,In.__webglTexture,Z,Qt+an):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,In.__webglTexture,Z),Nn?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,mn.__webglTexture,Et,qe+an):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,mn.__webglTexture,Et),Z!==0?F.blitFramebuffer($t,ae,zt,Gt,Se,Ce,zt,Gt,F.COLOR_BUFFER_BIT,F.NEAREST):Nn?F.copyTexSubImage3D(on,Et,Se,Ce,qe+an,$t,ae,zt,Gt):F.copyTexSubImage2D(on,Et,Se,Ce,$t,ae,zt,Gt);jt.bindFramebuffer(F.READ_FRAMEBUFFER,null),jt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Nn?R.isDataTexture||R.isData3DTexture?F.texSubImage3D(on,Et,Se,Ce,qe,zt,Gt,Ht,ue,Xt,We.data):Y.isCompressedArrayTexture?F.compressedTexSubImage3D(on,Et,Se,Ce,qe,zt,Gt,Ht,ue,We.data):F.texSubImage3D(on,Et,Se,Ce,qe,zt,Gt,Ht,ue,Xt,We):R.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Et,Se,Ce,zt,Gt,ue,Xt,We.data):R.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Et,Se,Ce,We.width,We.height,ue,We.data):F.texSubImage2D(F.TEXTURE_2D,Et,Se,Ce,zt,Gt,ue,Xt,We);F.pixelStorei(F.UNPACK_ROW_LENGTH,we),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Bn),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Wi),F.pixelStorei(F.UNPACK_SKIP_ROWS,Sn),F.pixelStorei(F.UNPACK_SKIP_IMAGES,os),Et===0&&Y.generateMipmaps&&F.generateMipmap(on),jt.unbindTexture()},this.copyTextureToTexture3D=function(R,Y,st=null,rt=null,Z=0){return R.isTexture!==!0&&(Br("WebGLRenderer: copyTextureToTexture3D function signature has changed."),st=arguments[0]||null,rt=arguments[1]||null,R=arguments[2],Y=arguments[3],Z=arguments[4]||0),Br('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,Y,st,rt,Z)},this.initRenderTarget=function(R){Yt.get(R).__webglFramebuffer===void 0&&w.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?w.setTextureCube(R,0):R.isData3DTexture?w.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?w.setTexture2DArray(R,0):w.setTexture2D(R,0),jt.unbindTexture()},this.resetState=function(){G=0,P=0,k=null,jt.reset(),He.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _a}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorspace=Le._getDrawingBufferColorSpace(t),i.unpackColorSpace=Le._getUnpackColorSpace()}}const Tv={type:"change"},yp={type:"start"},xx={type:"end"},$c=new vu,Av=new Ka,P2=Math.cos(70*ex.DEG2RAD),_n=new J,Zn=2*Math.PI,je={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},hd=1e-6;class B2 extends J1{constructor(t,i=null){super(t,i),this.state=je.NONE,this.enabled=!0,this.target=new J,this.cursor=new J,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:va.ROTATE,MIDDLE:va.DOLLY,RIGHT:va.PAN},this.touches={ONE:Ir.ROTATE,TWO:Ir.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new J,this._lastQuaternion=new Bs,this._lastTargetPosition=new J,this._quat=new Bs().setFromUnitVectors(t.up,new J(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new tp,this._sphericalDelta=new tp,this._scale=1,this._panOffset=new J,this._rotateStart=new le,this._rotateEnd=new le,this._rotateDelta=new le,this._panStart=new le,this._panEnd=new le,this._panDelta=new le,this._dollyStart=new le,this._dollyEnd=new le,this._dollyDelta=new le,this._dollyDirection=new J,this._mouse=new le,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=F2.bind(this),this._onPointerDown=I2.bind(this),this._onPointerUp=H2.bind(this),this._onContextMenu=Y2.bind(this),this._onMouseWheel=k2.bind(this),this._onKeyDown=X2.bind(this),this._onTouchStart=j2.bind(this),this._onTouchMove=W2.bind(this),this._onMouseDown=G2.bind(this),this._onMouseMove=V2.bind(this),this._interceptControlDown=q2.bind(this),this._interceptControlUp=Z2.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Tv),this.update(),this.state=je.NONE}update(t=null){const i=this.object.position;_n.copy(i).sub(this.target),_n.applyQuaternion(this._quat),this._spherical.setFromVector3(_n),this.autoRotate&&this.state===je.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=Zn:s>Math.PI&&(s-=Zn),l<-Math.PI?l+=Zn:l>Math.PI&&(l-=Zn),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const f=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=f!=this._spherical.radius}if(_n.setFromSpherical(this._spherical),_n.applyQuaternion(this._quatInverse),i.copy(this.target).add(_n),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let f=null;if(this.object.isPerspectiveCamera){const d=_n.length();f=this._clampDistance(d*this._scale);const p=d-f;this.object.position.addScaledVector(this._dollyDirection,p),this.object.updateMatrixWorld(),c=!!p}else if(this.object.isOrthographicCamera){const d=new J(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const p=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=p!==this.object.zoom;const m=new J(this._mouse.x,this._mouse.y,0);m.unproject(this.object),this.object.position.sub(m).add(d),this.object.updateMatrixWorld(),f=_n.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;f!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(f).add(this.object.position):($c.origin.copy(this.object.position),$c.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot($c.direction))<P2?this.object.lookAt(this.target):(Av.setFromNormalAndCoplanarPoint(this.object.up,this.target),$c.intersectPlane(Av,this.target))))}else if(this.object.isOrthographicCamera){const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),f!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>hd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>hd||this._lastTargetPosition.distanceToSquared(this.target)>hd?(this.dispatchEvent(Tv),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Zn/60*this.autoRotateSpeed*t:Zn/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){_n.setFromMatrixColumn(i,0),_n.multiplyScalar(-t),this._panOffset.add(_n)}_panUp(t,i){this.screenSpacePanning===!0?_n.setFromMatrixColumn(i,1):(_n.setFromMatrixColumn(i,0),_n.crossVectors(this.object.up,_n)),_n.multiplyScalar(t),this._panOffset.add(_n)}_pan(t,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;_n.copy(l).sub(this.target);let c=_n.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/s.clientHeight,this.object.matrix),this._panUp(2*i*c/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=t-s.left,c=i-s.top,f=s.width,d=s.height;this._mouse.x=l/f*2-1,this._mouse.y=-(c/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Zn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Zn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Zn*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Zn*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Zn*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Zn*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),l=.5*(t.pageX+s.x),c=.5*(t.pageY+s.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Zn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Zn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const f=(t.pageX+i.x)*.5,d=(t.pageY+i.y)*.5;this._updateZoomParameters(f,d)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new le,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function I2(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function F2(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function H2(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(xx),this.state=je.NONE;break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function G2(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case va.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=je.DOLLY;break;case va.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=je.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=je.ROTATE}break;case va.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=je.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=je.PAN}break;default:this.state=je.NONE}this.state!==je.NONE&&this.dispatchEvent(yp)}function V2(r){switch(this.state){case je.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case je.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case je.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function k2(r){this.enabled===!1||this.enableZoom===!1||this.state!==je.NONE||(r.preventDefault(),this.dispatchEvent(yp),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(xx))}function X2(r){this.enabled!==!1&&this._handleKeyDown(r)}function j2(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Ir.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=je.TOUCH_ROTATE;break;case Ir.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=je.TOUCH_PAN;break;default:this.state=je.NONE}break;case 2:switch(this.touches.TWO){case Ir.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=je.TOUCH_DOLLY_PAN;break;case Ir.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=je.TOUCH_DOLLY_ROTATE;break;default:this.state=je.NONE}break;default:this.state=je.NONE}this.state!==je.NONE&&this.dispatchEvent(yp)}function W2(r){switch(this._trackPointer(r),this.state){case je.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case je.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case je.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case je.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=je.NONE}}function Y2(r){this.enabled!==!1&&r.preventDefault()}function q2(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Z2(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const ze=({x:r,y:t,z:i})=>`${r},${t},${i}`,gu={gridSize:64,heightLimit:64,selectedColor:"#ff6b6b",gravityMode:!0},ki=[{id:"cube",label:"Cube",hint:"Full block"},{id:"slab-z",label:"Flat slab",hint:"Half-height floors"},{id:"slab-x",label:"Wall slab ↔",hint:"Thin wall along the front"},{id:"slab-y",label:"Wall slab ↕",hint:"Thin wall along the side"},{id:"corner-z",label:"Corner post",hint:"Fill the gap where two thin walls meet"},{id:"corner-x",label:"Corner bar ↔",hint:"Fill a wall-to-floor gap along the front"},{id:"corner-y",label:"Corner bar ↕",hint:"Fill a wall-to-floor gap along the side"}],K2={cube:{x:1,y:1,z:1},"slab-x":{x:.5,y:1,z:1},"slab-y":{x:1,y:.5,z:1},"slab-z":{x:1,y:1,z:.5},"corner-x":{x:1,y:.5,z:.5},"corner-y":{x:.5,y:1,z:.5},"corner-z":{x:.5,y:.5,z:1}},dn=r=>K2[r.shape??"cube"];function Q2(r){const t=ki.find(i=>{const s=dn({shape:i.id});return s.x===r.x&&s.y===r.y&&s.z===r.z});if(!t)throw new Error("Unsupported block dimensions.");return t.id}function yx(r){if(r==="cube")return r;const t=r.startsWith("corner-")?["corner-z","corner-x","corner-y"]:["slab-z","slab-x","slab-y"];return t[(t.indexOf(r)+1)%t.length]}const is=r=>r.some(t=>t.shape&&t.shape!=="cube"||![t.x,t.y,t.z].every(Number.isInteger));function J2(r,t){const i=dn(r),s=dn(t);return["x","y","z"].every(l=>r[l]<t[l]+s[l]-1e-8&&r[l]+i[l]>t[l]+1e-8)}function Sx(r,t,i=64,s=64){const l=dn(t),c=i/2;return ki.some(f=>f.id===(t.shape??"cube"))&&[t.x,t.y,t.z].every(f=>Number.isFinite(f)&&Number.isInteger(f*2))&&t.x>=-c&&t.x+l.x<=c&&t.y>=-c&&t.y+l.y<=c&&t.z>=-s&&t.z+l.z<=s&&!r.some(f=>J2(t,f))}function io(r){const t=new Map;for(const i of r){const s=dn(i);for(let l=0;l<s.x*2;l++)for(let c=0;c<s.y*2;c++)for(let f=0;f<s.z*2;f++){const d={x:i.x*2+l,y:i.y*2+c,z:i.z*2+f,color:i.color};t.set(ze(d),d)}}return[...t.values()]}function Rv(r,t,i,s,l){const c={x:0,y:0,z:0,color:l,...s==="cube"?{}:{shape:s}},f=dn(c),d=r?dn(r):null;for(const p of["x","y","z"])if(r&&i[p])c[p]=i[p]>0?r[p]+d[p]:r[p]-f[p];else if(r){const m=r[p];c[p]=m+Math.floor(Math.max(0,Math.min(d[p]-1e-6,t[p]-m))/f[p])*f[p]}else c[p]=p==="z"?0:Math.floor(t[p]/f[p])*f[p];return c}const Cv=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]];function ao(r){return new Map(r.map(t=>[ze(t),t]))}function Mx(r,t,i=64,s=64){return Sx(r,t,i,s)?[...r,t]:r}function $2(r,t){const i=ze(t);return r.filter(s=>ze(s)!==i)}function Is(r){if(!r.length)return null;const t=r.map(l=>l.x),i=r.map(l=>l.y),s=r.map(l=>l.z);return{min:{x:Math.min(...t),y:Math.min(...i),z:Math.min(...s)},max:{x:Math.max(...r.map(l=>l.x+dn(l).x-1)),y:Math.max(...r.map(l=>l.y+dn(l).y-1)),z:Math.max(...r.map(l=>l.z+dn(l).z-1))}}}const tR=[{id:"bottom",label:"Bottom",hint:"Build plate underneath"},{id:"top",label:"Top",hint:"Turn it upside down"},{id:"left",label:"Left side",hint:"Lay it on its left"},{id:"right",label:"Right side",hint:"Lay it on its right"},{id:"front",label:"Front",hint:"Lay it face-down"},{id:"back",label:"Back",hint:"Lay it on its back"}];function wv(r,t){const{x:i,y:s,z:l,color:c}=r;return t==="top"?{x:i,y:-s,z:-l,color:c}:t==="left"?{x:l,y:s,z:i,color:c}:t==="right"?{x:-l,y:s,z:-i,color:c}:t==="front"?{x:i,y:l,z:s,color:c}:t==="back"?{x:i,y:-l,z:-s,color:c}:{...r}}function Sp(r,t){if(!r.length)return[];const i=is(r),s=r.map(c=>{if(!i)return wv(c,t);const f=dn(c),d=[];for(const g of[0,f.x])for(const x of[0,f.y])for(const y of[0,f.z])d.push(wv({x:c.x+g,y:c.y+x,z:c.z+y,color:c.color},t));const p={x:Math.min(...d.map(g=>g.x)),y:Math.min(...d.map(g=>g.y)),z:Math.min(...d.map(g=>g.z))},m={x:Math.max(...d.map(g=>g.x))-p.x,y:Math.max(...d.map(g=>g.y))-p.y,z:Math.max(...d.map(g=>g.z))-p.z},_=Q2(m);return{...p,color:c.color,..._==="cube"?{}:{shape:_}}}),l=Math.min(...s.map(c=>c.z));return s.map(c=>({...c,z:c.z-l}))}function Mp(r,t=(i=>(i=r[0])==null?void 0:i.color)()??"#5532d5"){if(!r.length)return[];if(is(r))return Mp(io(r),t).map(c=>({...c,x:c.x/2,y:c.y/2,z:c.z/2}));const s=ao(r),l=new Map;for(const c of r)if(c.z>0){const f={x:c.x,y:c.y,z:c.z-1,color:t};s.has(ze(f))||l.set(ze(f),f)}return[...l.values()]}function Ex(r,t){if(t.z<0)return!1;if(t.z===0)return!0;const i=dn(t);for(let s=.25;s<i.x;s+=.5)for(let l=.25;l<i.y;l+=.5)if(!r.some(c=>{const f=dn(c);return Math.abs(c.z+f.z-t.z)<1e-8&&t.x+s>c.x&&t.x+s<c.x+f.x&&t.y+l>c.y&&t.y+l<c.y+f.y}))return!1;return!0}function eR(r,t){return t.z<0?r:Mx(r,t)}function bx(r,t=(i=>(i=r[0])==null?void 0:i.color)()??"#5532d5"){return tR.map(s=>{const l=Sp(r,s.id),c=Mp(l,t),f=is(l),d=ao(f?io(l):l),p=l.filter(_=>{if(_.z===0)return!1;if(!f)return!d.has(ze({x:_.x,y:_.y,z:_.z-1}));const g=dn(_);for(let x=0;x<g.x*2;x++)for(let y=0;y<g.y*2;y++)if(!d.has(ze({x:_.x*2+x,y:_.y*2+y,z:_.z*2-1})))return!0;return!1}).length,m=Is(l);return{...s,blocks:l,missing:c,unsupportedBlocks:p,height:m?m.max.z-m.min.z+1:0}}).sort((s,l)=>s.missing.length-l.missing.length||s.height-l.height||s.label.localeCompare(l.label))}function nR(r){if(is(r)){const s=new Set(r),l=[];for(;s.size;){const c=s.values().next().value;s.delete(c);const f=[c],d=[c];for(;d.length;){const p=d.pop(),m=dn(p);for(const _ of s){if(_.z!==c.z)continue;const g=dn(_),x=(p.x+m.x===_.x||_.x+g.x===p.x)&&p.y<_.y+g.y&&_.y<p.y+m.y,y=(p.y+m.y===_.y||_.y+g.y===p.y)&&p.x<_.x+g.x&&_.x<p.x+m.x;(x||y)&&(s.delete(_),f.push(_),d.push(_))}}l.push(Sp(f,"bottom"))}return l}const t=new Map;for(const s of r){const l=t.get(s.z)??[];l.push(s),t.set(s.z,l)}const i=[];for(const s of[...t.keys()].sort((l,c)=>l-c)){const l=t.get(s),c=ao(l),f=new Set(c.keys());for(;f.size;){const d=f.values().next().value;f.delete(d);const p=[d],m=[];for(;p.length;){const _=c.get(p.pop());m.push({..._,z:0});for(const[g,x]of[[1,0],[-1,0],[0,1],[0,-1]]){const y=ze({x:_.x+g,y:_.y+x,z:s});f.delete(y)&&p.push(y)}}i.push(m)}}return i}function Ep(r){if(is(r))return Ep(io(r)).map(f=>({...f,scale:.5,cell:{...f.cell,x:f.cell.x/2,y:f.cell.y/2,z:f.cell.z/2}}));const t=ao(r),i=Mp(r).map(f=>{const d=iR(f,t),p=d.find(_=>_[0]==="x"),m=d.find(_=>_[0]==="y");return p&&m?{kind:"corner",cell:f,highSides:[p,m]}:{kind:"edge",cell:f,highSide:d[0]??aR(f,r)}}),s=new Map(i.map(f=>[ze(f.cell),f])),l=i.map(f=>{if(f.kind!=="edge")return f;const d=[s.get(ze({x:f.cell.x,y:f.cell.y-1,z:f.cell.z})),s.get(ze({x:f.cell.x,y:f.cell.y+1,z:f.cell.z}))],p=[s.get(ze({x:f.cell.x-1,y:f.cell.y,z:f.cell.z})),s.get(ze({x:f.cell.x+1,y:f.cell.y,z:f.cell.z}))],m=d.find(g=>(g==null?void 0:g.kind)==="edge"&&g.highSide[0]==="x"),_=p.find(g=>(g==null?void 0:g.kind)==="edge"&&g.highSide[0]==="y");return(m==null?void 0:m.kind)==="edge"&&(_==null?void 0:_.kind)==="edge"?{kind:"corner",cell:f.cell,highSides:[m.highSide,_.highSide]}:f}),c=new Map(l.map(f=>[ze(f.cell),f]));return l.map(f=>{if(f.kind!=="edge"||!(f.cell.z===0||t.has(ze({x:f.cell.x,y:f.cell.y,z:f.cell.z-1}))))return f;const d=c.get(ze({x:f.cell.x-1,y:f.cell.y,z:f.cell.z})),p=c.get(ze({x:f.cell.x+1,y:f.cell.y,z:f.cell.z}));if((d==null?void 0:d.kind)==="edge"&&d.highSide==="x-"&&(p==null?void 0:p.kind)==="edge"&&p.highSide==="x+")return{kind:"valley",cell:f.cell,axis:"x"};const m=c.get(ze({x:f.cell.x,y:f.cell.y-1,z:f.cell.z})),_=c.get(ze({x:f.cell.x,y:f.cell.y+1,z:f.cell.z}));return(m==null?void 0:m.kind)==="edge"&&m.highSide==="y-"&&(_==null?void 0:_.kind)==="edge"&&_.highSide==="y+"?{kind:"valley",cell:f.cell,axis:"y"}:f})}function iR(r,t){return[["x-",-1,0],["x+",1,0],["y-",0,-1],["y+",0,1]].filter(([,s,l])=>t.has(ze({x:r.x+s,y:r.y+l,z:r.z}))).map(([s])=>s)}function aR(r,t){const i=t.filter(s=>s.x!==r.x||s.y!==r.y).sort((s,l)=>Math.abs(s.x-r.x)+Math.abs(s.y-r.y)-Math.abs(l.x-r.x)-Math.abs(l.y-r.y))[0];if(i){const s=i.x-r.x,l=i.y-r.y;return Math.abs(s)>=Math.abs(l)?s<0?"x-":"x+":l<0?"y-":"y+"}return"x-"}function sR(r){const t=r==="x-"?[-1,0]:r==="x+"?[1,0]:r==="y-"?[0,-1]:[0,1],i=[-t[0],-t[1]];return{low:i,width:[-i[1],i[0]]}}function Tx(r){const t=i=>r.includes(i);return t("x-")&&t("y-")?0:t("x-")&&t("y+")?Math.PI/2:t("x+")&&t("y+")?Math.PI:-Math.PI/2}const Un={a:0,b:1,x:2,y:3,leftBumper:4,rightBumper:5,leftTrigger:6,rightTrigger:7,view:8,menu:9,leftStick:10,rightStick:11,dpadUp:12,dpadDown:13,dpadLeft:14,dpadRight:15},rR=.18;function tu(r,t=rR){const i=Math.abs(r);return i<=t?0:Math.sign(r)*(i-t)/(1-t)}function oR(r){return!!(r&&(r.pressed||r.value>.5))}function lR(r,t,i){return!!(r[i]&&!t[i])}function cR(r){return r.find(t=>(t==null?void 0:t.connected)&&t.mapping==="standard")??r.find(t=>t==null?void 0:t.connected)??null}function uR(r,t){const i=new Fe,s=new me;t.forEach((l,c)=>{const f=dn(l);i.makeScale(f.x,f.z,f.y),i.setPosition(l.x+f.x/2,l.z+f.z/2,l.y+f.y/2),r.setMatrixAt(c,i),r.setColorAt(c,s.set(l.color))}),r.count=t.length,r.instanceMatrix.needsUpdate=!0,r.instanceColor&&(r.instanceColor.needsUpdate=!0),r.computeBoundingBox(),r.computeBoundingSphere()}const fR=Kt.forwardRef(function(t,i){var x;const s=Kt.useRef(null),l=Kt.useRef(null),c=Kt.useRef(t);c.current=t;const[f,d]=Kt.useState(!1),[p,m]=Kt.useState(!1),[_,g]=Kt.useState(!1);return Kt.useEffect(()=>{const y=s.current;let E;try{E=new z2({antialias:!0,alpha:!1})}catch{d(!0);return}E.setPixelRatio(Math.min(devicePixelRatio,2)),E.shadowMap.enabled=!0,E.shadowMap.type=Gv,E.outputColorSpace=li,y.appendChild(E.domElement),E.domElement.setAttribute("aria-label","3D building workspace"),E.domElement.tabIndex=0;const b=new z1;b.background=new me("#eaf8ff"),b.fog=new gp("#eaf8ff",45,95);const M=new yi(48,1,.1,140);M.position.set(12,11,14);const v=new B2(M,E.domElement);v.enableDamping=!0,v.dampingFactor=.08,v.target.set(0,1.5,0),v.maxDistance=70,v.minDistance=3,v.maxPolarAngle=Math.PI*.95,v.screenSpacePanning=!0,v.mouseButtons={LEFT:va.ROTATE,MIDDLE:va.PAN,RIGHT:va.PAN},b.add(new X1("#ffffff","#9fc4d6",2.25));const O=new Y1("#fff5d6",3.2);O.position.set(10,18,8),O.castShadow=!0,O.shadow.mapSize.set(1024,1024),O.shadow.camera.left=-18,O.shadow.camera.right=18,O.shadow.camera.top=18,O.shadow.camera.bottom=-18,b.add(O);const N=new Kn(new Jr(64,64),new Zc({color:"#f9fdff",roughness:.92}));N.rotation.x=-Math.PI/2,N.receiveShadow=!0,b.add(N);const U=new K1(64,64,"#6d5de7","#c7dbe5");U.position.y=.006,U.material.opacity=.46,U.material.transparent=!0,b.add(U);const X=new Q1(2.4);X.position.set(-31,.03,-31),b.add(X);const G=new Kn(new ts(1,1,1),new Zc({color:"#28c76f",transparent:!0,opacity:.45,depthWrite:!1}));G.visible=!1,b.add(G);const P=new vp(new G1(new ts(1.012,1.012,1.012)),new xu({color:"#ffca3a"}));P.visible=!1,b.add(P);const k=new mp({color:"#ffe275",transparent:!0,opacity:.5,side:Hi,depthWrite:!1}),D=new Kn(new Jr(.98,.98),k);D.visible=!1,b.add(D);const C=new ts(1,1,1),B=new Zc({roughness:.72,metalness:0}),ot=new Gc(C,B,1e4);ot.castShadow=!0,ot.receiveShadow=!0,ot.instanceMatrix.setUsage(E_),b.add(ot);const it=dR(),gt=pR(),mt=mR(),I=new Zc({roughness:.8,metalness:0,flatShading:!0}),Q=new Gc(it,I,4e4),j=new Gc(gt,I,4e4),Mt=new Gc(mt,I,4e4);for(const w of[Q,j,Mt])w.castShadow=!0,w.receiveShadow=!0,w.instanceMatrix.setUsage(E_),w.count=0,b.add(w);const At=new Z1,z=new le;let $=null,xt=null,q=!1,ct="",Tt=[],bt={x:0,y:0};const Ut={scene:b,camera:M,controls:v,renderer:E,blockMesh:ot,blockGeometry:C,blockMaterial:B,supportMesh:Q,supportGeometry:it,cornerSupportMesh:j,cornerSupportGeometry:gt,valleySupportMesh:Mt,valleySupportGeometry:mt,supportMaterial:I,ghost:G,hoverBox:P,face:D,blocks:[],frame:()=>Rx(Ut),setView:w=>gR(Ut,w),nudge:(w,T)=>{const tt=new J().setFromMatrixColumn(M.matrix,0);tt.y=0,tt.normalize();const ut=new J;M.getWorldDirection(ut),ut.y=0,ut.normalize();const yt=tt.multiplyScalar(w).add(ut.multiplyScalar(T));M.position.add(yt),v.target.add(yt)}};l.current=Ut;const Ft=()=>{const w=y.clientWidth,T=y.clientHeight;E.setSize(w,T,!1),M.aspect=w/T,M.updateProjectionMatrix()},ee=new ResizeObserver(Ft);ee.observe(y),Ft();const Te=w=>{var ut;At.setFromCamera(w,M);const T=At.intersectObject(ot,!1);if($=null,T.length&&T[0].instanceId!==void 0){const yt=Ut.blocks[T[0].instanceId];if(yt){const pt=((ut=T[0].face)==null?void 0:ut.normal)??new J(0,1,0),Vt={x:Math.round(pt.x),y:Math.round(pt.z),z:Math.round(pt.y)},wt=T[0].point;return{block:yt,candidate:Rv(yt,{x:wt.x,y:wt.z,z:wt.y},Vt,c.current.shape,c.current.color),normal:Vt}}}const tt=At.intersectObject(N,!1)[0];return tt?{block:null,candidate:Rv(null,{x:tt.point.x,y:tt.point.z,z:0},{x:0,y:0,z:1},c.current.shape,c.current.color),normal:{x:0,y:0,z:1}}:null},ht=w=>{q!==w&&(q=w,g(w))},Ct=w=>{ht(!1);const T=E.domElement.getBoundingClientRect();z.set((w.clientX-T.left)/T.width*2-1,-((w.clientY-T.top)/T.height)*2+1),$=Te(z),Dv(Ut,$,c.current.blocks,c.current.tool,c.current.selected,c.current.gravityMode)},F=w=>{bt={x:w.clientX,y:w.clientY},E.domElement.focus(),Ct(w)},Ne=w=>{if(Ct(w),Math.hypot(w.clientX-bt.x,w.clientY-bt.y)>5||!$)return;const T=c.current;if(w.button===2){$.block&&(T.onSelect($.block),T.onRemove($.block));return}w.button===0&&(T.tool==="add"?(T.onSelect(null),T.onAdd({...$.candidate,color:T.color})):$.block&&(T.onSelect($.block),T.onRemove($.block)))},se=w=>{const T=typeof navigator.getGamepads=="function"?cR(Array.from(navigator.getGamepads())):null,tt=T?`${T.index}:${T.id}`:"";if(tt!==ct&&(ct=tt,Tt=[],m(!!T),c.current.onControllerChange((T==null?void 0:T.id)??null),T||ht(!1)),!T)return;const ut=T.buttons.map(oR),yt=tu(T.axes[0]??0),pt=tu(T.axes[1]??0),Vt=tu(T.axes[2]??0),wt=tu(T.axes[3]??0),Dt=It=>lR(ut,Tt,It),ge=!!(yt||pt||Vt||wt),Rt=ut.some((It,qt)=>It&&!Tt[qt]);if((ge||Rt)&&ht(!0),q&&!c.current.interactionLocked){if((yt||pt)&&_R(Ut,yt,-pt,w*5.2),(Vt||wt)&&vR(Ut,Vt,wt,w*2.25),xt=Te(new le(0,0)),Dv(Ut,xt,c.current.blocks,c.current.tool,c.current.selected,c.current.gravityMode),Dt(Un.leftTrigger)&&xt&&(c.current.onSelect(null),c.current.onAdd({...xt.candidate,color:c.current.color})),Dt(Un.rightTrigger)&&(xt!=null&&xt.block)&&(c.current.onSelect(xt.block),c.current.onRemove(xt.block)),Dt(Un.a)&&Uv(Ut,1),Dt(Un.b)&&Uv(Ut,-1),Dt(Un.leftBumper)&&c.current.onToolChange("remove"),Dt(Un.rightBumper)&&c.current.onToolChange("add"),Dt(Un.x)&&c.current.onUndo(),Dt(Un.y)&&Ut.frame(),Dt(Un.leftStick)){const It=ki.findIndex(qt=>qt.id===c.current.shape);c.current.onShapeChange(ki[(It+1)%ki.length].id)}Dt(Un.rightStick)&&c.current.shape!=="cube"&&c.current.onShapeChange(yx(c.current.shape)),Dt(Un.view)&&Ut.setView("home"),Dt(Un.dpadLeft)&&Ut.nudge(-1,0),Dt(Un.dpadRight)&&Ut.nudge(1,0),Dt(Un.dpadUp)&&Ut.nudge(0,1),Dt(Un.dpadDown)&&Ut.nudge(0,-1)}Dt(Un.menu)&&c.current.onControllerHelp(),c.current.interactionLocked&&Dt(Un.b)&&c.current.onControllerBack(),Tt=ut},re=w=>w.preventDefault();E.domElement.addEventListener("pointermove",Ct),E.domElement.addEventListener("pointerdown",F),E.domElement.addEventListener("pointerup",Ne),E.domElement.addEventListener("contextmenu",re);let jt=0,Re=performance.now();const Yt=(w=performance.now())=>{const T=Math.min((w-Re)/1e3,.05);Re=w,se(T),v.update(),E.render(b,M),jt=requestAnimationFrame(Yt)};return Yt(),()=>{cancelAnimationFrame(jt),ee.disconnect(),v.dispose(),E.dispose(),C.dispose(),B.dispose(),it.dispose(),gt.dispose(),mt.dispose(),I.dispose(),y.removeChild(E.domElement),l.current=null,c.current.onControllerChange(null)}},[]),Kt.useEffect(()=>{const y=l.current;y&&(y.blocks=t.blocks.slice(0,1e4),uR(y.blockMesh,y.blocks))},[t.blocks]),Kt.useEffect(()=>{const y=l.current;y&&hR(y.supportMesh,y.cornerSupportMesh,y.valleySupportMesh,t.gravityMode?t.blocks:[],t.color)},[t.blocks,t.color,t.gravityMode]),Kt.useEffect(()=>{const y=l.current;y&&(y.ghost.visible=!1,y.face.visible=!1,t.selected?(lu(y.hoverBox,t.selected),y.hoverBox.visible=!0):y.hoverBox.visible=!1)},[t.selected,t.shape]),Kt.useImperativeHandle(i,()=>({setView:y=>{var E;return(E=l.current)==null?void 0:E.setView(y)},frame:()=>{var y;return(y=l.current)==null?void 0:y.frame()},nudge:(y,E)=>{var b;return(b=l.current)==null?void 0:b.nudge(y,E)}}),[]),f?L.jsxs("div",{className:"webgl-error",role:"alert",children:[L.jsx("span",{children:"🧊"}),L.jsx("h2",{children:"3D needs a little help"}),L.jsx("p",{children:"Turn on hardware acceleration in your browser, then reload this page."})]}):L.jsxs("div",{className:"canvas-host",ref:s,children:[L.jsxs("div",{className:"canvas-tip",children:[L.jsx("b",{children:_?"LT place · RT break":t.tool==="add"?`Click to add · ${(x=ki.find(y=>y.id===t.shape))==null?void 0:x.label}`:"Click a block to remove"}),L.jsx("span",{children:_?"Sticks move and look · A/B change layer":t.gravityMode?"Gravity Mode on · Red ghosts get an automatic 45° leg":"Drag empty space to look around · Wheel to zoom"})]}),p&&L.jsxs("div",{className:`controller-crosshair ${_?"active":""}`,"aria-hidden":"true",children:[L.jsx("i",{}),L.jsx("i",{}),L.jsx("i",{}),L.jsx("i",{})]})]})});function lu(r,t){const i=dn(t);r.position.set(t.x+i.x/2,t.z+i.z/2,t.y+i.y/2),r.scale.set(i.x,i.z,i.y)}function Dv(r,t,i,s,l,c){if(!t){r.ghost.visible=!1,r.face.visible=!1,l?(lu(r.hoverBox,l),r.hoverBox.visible=!0):r.hoverBox.visible=!1;return}const f=t.candidate,d=dn(f),p=Sx(i,f)&&(!c||Ex(i,f));if(r.ghost.visible=s==="add",r.ghost.scale.set(d.x,d.z,d.y),r.ghost.position.set(f.x+d.x/2,f.z+d.z/2,f.y+d.y/2),r.ghost.material.color.set(p?"#28c76f":"#ef476f"),r.face.visible=!!t.block,t.block){const m=t.block,_=t.normal,g=dn(m);lu(r.hoverBox,m),r.hoverBox.visible=!0,r.face.position.set(m.x+g.x/2+_.x*(g.x/2+.005),m.z+g.z/2+_.z*(g.z/2+.005),m.y+g.y/2+_.y*(g.y/2+.005)),r.face.rotation.set(_.z?Math.PI/2:0,_.x?Math.PI/2:0,0),r.face.scale.set(_.x?g.y:g.x,_.z?g.y:g.z,1)}else l?(lu(r.hoverBox,l),r.hoverBox.visible=!0):r.hoverBox.visible=!1}function hR(r,t,i,s,l){const c=Ep(s),f=c.filter(g=>g.kind==="edge"),d=c.filter(g=>g.kind==="corner"),p=c.filter(g=>g.kind==="valley"),m=new Fe,_={"x-":0,"x+":Math.PI,"y-":-Math.PI/2,"y+":Math.PI/2};f.slice(0,r.instanceMatrix.count).forEach((g,x)=>{m.makeRotationY(_[g.highSide]);const y=g.scale??1;m.scale(new J(y,y,y)),m.setPosition(g.cell.x+y/2,g.cell.z+y/2,g.cell.y+y/2),r.setMatrixAt(x,m)}),d.slice(0,t.instanceMatrix.count).forEach((g,x)=>{m.makeRotationY(Tx(g.highSides));const y=g.scale??1;m.scale(new J(y,y,y)),m.setPosition(g.cell.x+y/2,g.cell.z+y/2,g.cell.y+y/2),t.setMatrixAt(x,m)}),p.slice(0,i.instanceMatrix.count).forEach((g,x)=>{m.makeRotationY(g.axis==="x"?0:Math.PI/2);const y=g.scale??1;m.scale(new J(y,y,y)),m.setPosition(g.cell.x+y/2,g.cell.z+y/2,g.cell.y+y/2),i.setMatrixAt(x,m)});for(const[g,x]of[[r,f.length],[t,d.length],[i,p.length]])g.count=Math.min(x,g.instanceMatrix.count),g.material.color.set(l),g.instanceMatrix.needsUpdate=!0,g.computeBoundingBox(),g.computeBoundingSphere()}function dR(){const r=new Jn;return r.setAttribute("position",new Ln([-.5,-.5,-.5,-.5,.5,-.5,.5,.5,-.5,-.5,-.5,.5,-.5,.5,.5,.5,.5,.5],3)),r.setIndex([0,1,2,3,5,4,0,3,4,0,4,1,1,4,5,1,5,2,0,2,5,0,5,3]),r.computeVertexNormals(),r}function pR(){const r=new Jn;return r.setAttribute("position",new Ln([-.5,-.5,-.5,-.5,.5,-.5,.5,.5,-.5,.5,.5,.5,-.5,.5,.5],3)),r.setIndex([0,1,2,0,2,3,0,3,4,0,4,1,1,3,2,1,4,3]),r.computeVertexNormals(),r}function mR(){const r=new Jn;return r.setAttribute("position",new Ln([0,-.5,-.5,0,-.5,.5,-.5,.5,-.5,-.5,.5,.5,.5,.5,-.5,.5,.5,.5],3)),r.setIndex([2,5,4,2,3,5,0,3,2,0,1,3,0,5,1,0,4,5,0,2,4,1,5,3]),r.computeVertexNormals(),r}function Ax(r){const t=Is(r);return t?new J((t.min.x+t.max.x+1)/2,(t.min.z+t.max.z+1)/2,(t.min.y+t.max.y+1)/2):new J(0,1.5,0)}function Rx(r){const t=Ax(r.blocks),i=Is(r.blocks),s=i?Math.max(i.max.x-i.min.x+1,i.max.y-i.min.y+1,i.max.z-i.min.z+1):5;r.controls.target.copy(t),r.camera.position.copy(t).add(new J(s*1.8,s*1.35,s*1.8)),r.controls.update()}function gR(r,t){if(t==="home"||t==="iso"){Rx(r);return}const i=Ax(r.blocks),s=Is(r.blocks),l=(s?Math.max(s.max.x-s.min.x+1,s.max.y-s.min.y+1,s.max.z-s.min.z+1):5)*2.5,c={front:new J(0,0,l),back:new J(0,0,-l),left:new J(-l,0,0),right:new J(l,0,0),top:new J(0,l,.001)};r.controls.target.copy(i),r.camera.position.copy(i).add(c[t]),r.controls.update()}function _R(r,t,i,s){const l=new J().setFromMatrixColumn(r.camera.matrix,0);l.y=0,l.lengthSq()&&l.normalize();const c=new J;r.camera.getWorldDirection(c),c.y=0,c.lengthSq()&&c.normalize();const f=l.multiplyScalar(t*s).add(c.multiplyScalar(i*s));r.camera.position.add(f),r.controls.target.add(f)}function vR(r,t,i,s){const l=r.camera.position.clone().sub(r.controls.target),c=new tp().setFromVector3(l);c.theta-=t*s,c.phi=ex.clamp(c.phi+i*s,.12,Math.PI*.95),r.camera.position.copy(r.controls.target).add(new J().setFromSpherical(c)),r.camera.lookAt(r.controls.target)}function Uv(r,t){const i=new J(0,t,0);r.camera.position.add(i),r.controls.target.add(i)}function bp(r){if(is(r)){const _=bp(io(r));return{..._,blockCount:r.length,bounds:Is(r),fragileBlocks:0,warnings:_.warnings.filter(g=>!g.includes("thin or delicate"))}}const t=ao(r),i=new Set(t.keys()),s=[];for(;i.size;){const _=i.values().next().value,g=[_];i.delete(_);const x=[];for(;g.length;){const y=g.pop(),E=t.get(y);x.push(E);for(const[b,M,v]of Cv){const O=ze({x:E.x+b,y:E.y+M,z:E.z+v});i.delete(O)&&g.push(O)}}s.push(x)}const l=new Map;s.forEach((_,g)=>_.forEach(x=>l.set(ze(x),g)));const c=r.length?Math.min(...r.map(_=>_.z)):0,f=s.filter(_=>Math.min(..._.map(g=>g.z))>c).length;let d=0;for(const _ of r)for(let g=-1;g<=1;g++)for(let x=-1;x<=1;x++)for(let y=-1;y<=1;y++){if(Math.abs(g)+Math.abs(x)+Math.abs(y)<=1)continue;const b=t.get(ze({x:_.x+g,y:_.y+x,z:_.z+y}));b&&ze(_)<ze(b)&&l.get(ze(_))!==l.get(ze(b))&&d++}const p=r.length<2?0:r.filter(_=>Cv.reduce((g,[x,y,E])=>g+(t.has(ze({x:_.x+x,y:_.y+y,z:_.z+E}))?1:0),0)<=1).length,m=[];return r.length||m.push("Your build is empty. Add a few blocks first!"),s.length>1&&m.push(`Your build has ${s.length} separate groups. They will print as separate pieces.`),f&&m.push(`${f} group${f===1?" is":"s are"} floating above the lowest part.`),d&&m.push("Some blocks touch only at an edge or corner, which can make a weak print."),p>0&&r.length>3&&m.push(`${p} block${p===1?" looks":"s look"} thin or delicate.`),{blockCount:r.length,componentCount:s.length,floatingComponents:f,edgeOrCornerTouches:d,fragileBlocks:p,bounds:Is(r),warnings:m}}const xR=3;function Xr(r,t,i=gu.selectedColor,s=!0,l="cube"){return{format:"block-builder",version:is(t)||l!=="cube"?3:2,name:r.trim()||"My Creation",blocks:t,settings:{...gu,selectedColor:i,gravityMode:s,...l==="cube"?{}:{selectedShape:l}}}}function rl(r){return JSON.stringify(r,null,2)}function Cx(r){let t;try{t=JSON.parse(r)}catch{throw new Error("That file is not valid JSON.")}if(!t||typeof t!="object")throw new Error("That does not look like a Block Builder project.");const i=t;if(i.version===1&&Array.isArray(i.blocks)&&(i.format="block-builder",i.version=2,i.settings=gu),i.format!=="block-builder")throw new Error("That file was not made by Block Builder.");if(i.version!==2&&i.version!==xR)throw new Error("This project uses a version Block Builder cannot open yet.");if(typeof i.name!="string"||!Array.isArray(i.blocks))throw new Error("This project is missing its name or blocks.");if(i.blocks.length>1e4)throw new Error("That project has too many blocks to open safely.");const s=new Set,l=i.blocks.map((f,d)=>{if(!f||typeof f!="object")throw new Error(`Block ${d+1} is not valid.`);const p=f;if(![p.x,p.y,p.z].every(g=>typeof g=="number"&&Number.isFinite(g)&&Number.isInteger(g*(i.version===3?2:1)))||typeof p.color!="string"||!/^#[0-9a-f]{6}$/i.test(p.color))throw new Error(`Block ${d+1} has invalid coordinates or color.`);if(p.shape!==void 0&&(!ki.some(g=>g.id===p.shape)||i.version===2&&p.shape!=="cube"))throw new Error(`Block ${d+1} has an unknown shape.`);const m=`${p.x},${p.y},${p.z}`;if(s.has(m))throw new Error(`Two blocks share the same spot (${m}).`);s.add(m);const _={x:p.x,y:p.y,z:p.z,color:p.color,...p.shape&&p.shape!=="cube"?{shape:p.shape}:{}};for(const g of io([_])){const x=`cell:${g.x},${g.y},${g.z}`;if(s.has(x))throw new Error("Some blocks overlap.");s.add(x)}return _}),c=i.settings;if((c==null?void 0:c.selectedShape)!==void 0&&!ki.some(f=>f.id===c.selectedShape))throw new Error("Unknown selected shape.");return Xr(i.name,l,typeof(c==null?void 0:c.selectedColor)=="string"?c.selectedColor:gu.selectedColor,typeof(c==null?void 0:c.gravityMode)=="boolean"?c.gravityMode:!0,(c==null?void 0:c.selectedShape)??"cube")}function yR(r,t,i="application/json"){const s=URL.createObjectURL(new Blob([r],{type:i})),l=document.createElement("a");l.href=s,l.download=t,l.click(),setTimeout(()=>URL.revokeObjectURL(s),1e3)}function cu(r,t){return r.map(i=>({...i,color:t}))}const Ie=(r,t,i,s)=>({x:r,y:t,z:i,color:s});function SR(){const r="#67d5b5",t=new Map,i=(l,c,f)=>t.set(`${l},${c},${f}`,Ie(l,c,f,r)),s=(l,c,f,d,p,m)=>{for(let _=l;_<=c;_++)for(let g=f;g<=d;g++)for(let x=p;x<=m;x++)i(_,g,x)};return s(-10,9,-7,6,0,0),s(-10,9,6,6,1,8),s(-10,-10,-7,6,1,6),s(9,9,-7,6,1,6),s(-10,9,-7,-7,1,2),s(-10,9,-2,-2,1,3),s(-4,3,-6,-6,1,2),s(-4,-4,-6,-2,1,2),s(3,3,-6,-2,1,2),s(-4,-4,-1,6,1,7),s(3,3,-1,6,1,7),s(-9,-5,1,1,1,4),s(4,8,2,2,1,5),s(-7,-7,-6,-3,1,2),s(6,6,-6,-3,1,2),s(-1,-1,-2,0,1,3),s(-9,-8,5,5,1,7),s(7,8,5,5,1,7),s(-9,-9,4,5,1,7),s(8,8,4,5,1,7),[...t.values()]}function Su(r,t){const i=new Map,s=(c,f,d)=>i.set(`${c},${f},${d}`,Ie(c,f,d,r));return t({add:s,fill:(c,f,d,p,m,_)=>{for(let g=c;g<=f;g++)for(let x=d;x<=p;x++)for(let y=m;y<=_;y++)s(g,x,y)}}),[...i.values()]}function MR(){return Su("#8b5cf6",({add:r,fill:t})=>{t(-8,8,-6,6,0,0),t(-8,8,6,6,1,4),t(-8,-8,-5,5,1,4),t(8,8,-5,5,1,4),t(-8,-1,-6,-6,1,4),t(1,8,-6,-6,1,4);for(const[i,s]of[[-7,-5],[7,-5],[-7,5],[7,5]]){t(i-1,i+1,s-1,s+1,1,7);for(let l=i-1;l<=i+1;l++)for(let c=s-1;c<=s+1;c++)l+c&1&&r(l,c,8);r(i,s,8),r(i,s,9)}t(-3,-3,-2,3,1,6),t(3,3,-2,3,1,6),t(-2,2,-2,-2,1,6),t(-2,2,3,3,1,6);for(let i=-3;i<=3;i++)for(const s of[-2,3])i+s&1&&r(i,s,7);for(let i=-1;i<=2;i++)for(const s of[-3,3])s+i&1&&r(s,i,7);t(-1,1,-3,-3,1,2),t(0,0,-3,-3,3,3),t(-3,-2,-6,-5,1,6),t(2,3,-6,-5,1,6),r(-3,-6,7),r(-2,-6,7),r(2,-6,7),r(3,-6,7),t(-1,1,5,5,1,5),r(-1,5,6),r(1,5,6)})}function ER(){return Su("#3a86ff",({add:r,fill:t})=>{for(let i=-8;i<=8;i++)for(let s=-8;s<=8;s++)i*i+s*s<=64&&r(i,s,0);t(6,8,-1,1,0,0);for(let i=1;i<=17;i++)for(let s=-3;s<=3;s++)for(let l=-3;l<=3;l++)Math.abs(s)+Math.abs(l)<=5&&r(s,l,i);for(let i=18;i<=19;i++)for(let s=-2;s<=2;s++)for(let l=-2;l<=2;l++)Math.abs(s)+Math.abs(l)<=3&&r(s,l,i);t(-1,1,-1,1,20,20);for(const[i,s]of[[0,0],[-1,0],[1,0],[0,-1],[0,1]])r(i,s,21);r(0,0,22);for(let i=1;i<=6;i++){const s=i<=2?6:i<=4?5:4;t(-s,s,-1,1,i,i),t(-1,1,-s,s,i,i)}t(7,8,-1,1,1,21),t(6,8,0,0,1,21),t(6,8,-1,-1,1,2),t(6,8,1,1,1,2);for(const i of[5,10,15,20])t(7,8,-1,1,i,i),t(6,8,0,0,i,i);t(-2,2,-3,-3,11,12),t(-1,1,-3,-3,13,13)})}function bR(){return Su("#ff6b6b",({add:r,fill:t})=>{for(let i=-10;i<=10;i++)for(let s=-6;s<=4;s++){const l=Math.abs(i)<=6&&s>=-3,c=(i+7)*(i+7)/16+(s+1)*(s+1)/36<=1,f=(i-7)*(i-7)/16+(s+1)*(s+1)/36<=1;(l||c||f)&&(r(i,s,0),r(i,s,1))}t(-6,-2,-1,1,2,2),t(-4,-4,-3,3,2,2),r(-4,0,3);for(const[i,s]of[[3,1],[5,1],[4,2],[4,0]])r(i,s,2),r(i,s,3);t(-2,0,-2,0,2,2),t(1,3,-2,0,2,2),r(-1,-1,3),r(2,-1,3),t(-3,3,3,4,2,2),t(-8,-5,3,4,2,2),t(5,8,3,4,2,2),t(-1,1,1,2,2,2),r(0,1,3)})}function TR(){return Su("#536878",({add:r,fill:t})=>{const i=(c,f)=>Math.abs(c)<=14&&Math.abs(f)<=10&&Math.abs(c)+Math.abs(f)<=20;for(let c=-14;c<=14;c++)for(let f=-10;f<=10;f++)i(c,f)&&(r(c,f,0),r(c,f,1));const s=[[1,0],[-1,0],[0,1],[0,-1]];for(let c=-14;c<=14;c++)for(let f=-10;f<=10;f++)i(c,f)&&s.some(([d,p])=>!i(c+d,f+p))&&(f<=-9&&Math.abs(c)<=3||t(c,c,f,f,2,4));for(const[c,f]of[[-11,-7],[11,-7],[-11,7],[11,7]]){t(c-1,c+1,f-1,f+1,2,7),t(c-1,c+1,f-1,f+1,8,8),t(c,c,f,f,9,11);for(const[d,p]of s)r(c+d,f+p,9)}t(-12,-6,-2,5,2,5),t(6,12,-2,5,2,5),t(-11,-7,-1,5,6,7),t(7,11,-1,5,6,7),t(-10,-8,0,4,8,8),t(8,10,0,4,8,8);for(const c of[-12,-6,6,12])t(c,c,-5,-3,2,4);t(-5,5,4,8,2,6),t(-4,4,5,8,7,9),t(-3,3,6,8,10,12),t(-2,2,7,8,13,14),t(-1,1,7,7,15,16),t(0,0,7,7,17,20),r(-1,7,17),r(1,7,17),r(-1,7,18),r(1,7,18),r(-1,7,19),r(1,7,19);const l=[0,1,2,3,4,6,6,5,4,3,2,1];for(let c=0;c<l.length;c++){const f=-9+c,d=l[c];for(let p=-d;p<=d;p++)r(p,f,2)}t(-1,1,-5,-2,3,3),t(0,0,-4,-3,4,4),t(-4,-3,-4,-1,3,3),t(3,4,-4,-1,3,3),r(-3,-2,4),r(3,-2,4),t(-7,-7,-9,-4,2,3),t(7,7,-9,-4,2,3),t(-9,-8,-5,-3,2,3),t(8,9,-5,-3,2,3),t(-5,-5,1,3,2,4),t(5,5,1,3,2,4)})}const Lv=[{name:"Small House",emoji:"🏠",blocks:[...Array.from({length:5},(r,t)=>Array.from({length:4},(i,s)=>Ie(t-2,s-1,0,"#ffd166"))).flat(),...Array.from({length:5},(r,t)=>[Ie(t-2,-1,1,"#ff8c42"),Ie(t-2,2,1,"#ff8c42")]).flat(),...Array.from({length:2},(r,t)=>[Ie(-2,t,1,"#ff8c42"),Ie(2,t,1,"#ff8c42")]).flat(),...Array.from({length:5},(r,t)=>Array.from({length:4},(i,s)=>Ie(t-2,s-1,2,"#d65db1"))).flat()]},{name:"Robot",emoji:"🤖",blocks:[...Array.from({length:3},(r,t)=>Array.from({length:2},(i,s)=>Array.from({length:3},(l,c)=>Ie(t-1,s,c+2,"#67d5b5")))).flat(2),Ie(-1,-1,4,"#8b5cf6"),Ie(1,-1,4,"#8b5cf6"),Ie(-2,0,3,"#ffd166"),Ie(2,0,3,"#ffd166"),Ie(-1,0,1,"#3a86ff"),Ie(1,0,1,"#3a86ff"),Ie(-1,0,0,"#3a86ff"),Ie(1,0,0,"#3a86ff")]},{name:"Bridge",emoji:"🌉",blocks:[...Array.from({length:9},(r,t)=>Ie(t-4,0,2,"#ff8c42")),...Array.from({length:2},(r,t)=>[Ie(-4,0,t,"#5532d5"),Ie(4,0,t,"#5532d5")]).flat(),Ie(-3,0,1,"#ffd166"),Ie(3,0,1,"#ffd166")]},{name:"HI Nameplate",emoji:"🔤",blocks:[...Array.from({length:5},(r,t)=>[Ie(-3,0,t,"#ff6b6b"),Ie(-1,0,t,"#ff6b6b"),Ie(1,0,t,"#3a86ff"),Ie(3,0,t,"#3a86ff")]).flat(),Ie(-2,0,2,"#ff6b6b"),Ie(2,0,0,"#3a86ff"),Ie(2,0,4,"#3a86ff")]},{name:"Mega Desk Organizer",emoji:"✏️",blocks:SR()},{name:"Dragon Castle",emoji:"🏰",blocks:MR()},{name:"Starship Rocket",emoji:"🚀",blocks:ER()},{name:"Mega Game Controller",emoji:"🎮",blocks:bR()},{name:"Starship War Base",emoji:"🛸",blocks:TR()}],AR=[{normal:[1,0,0],neighbor:[1,0,0],corners:[[1,0,0],[1,1,0],[1,1,1],[1,0,1]]},{normal:[-1,0,0],neighbor:[-1,0,0],corners:[[0,0,0],[0,0,1],[0,1,1],[0,1,0]]},{normal:[0,1,0],neighbor:[0,1,0],corners:[[0,1,0],[0,1,1],[1,1,1],[1,1,0]]},{normal:[0,-1,0],neighbor:[0,-1,0],corners:[[0,0,0],[1,0,0],[1,0,1],[0,0,1]]},{normal:[0,0,1],neighbor:[0,0,1],corners:[[0,0,1],[1,0,1],[1,1,1],[0,1,1]]},{normal:[0,0,-1],neighbor:[0,0,-1],corners:[[0,0,0],[0,1,0],[1,1,0],[1,0,0]]}];function dd(r,t){if(!Number.isFinite(t.blockSize)||t.blockSize<1||t.blockSize>50)throw new Error("Block size must be from 1 to 50 mm.");return is(r)?Nv(io(r),{...t,blockSize:t.blockSize/2}):Nv(r,t)}function Nv(r,t){if(!r.length)throw new Error("Add at least one block before exporting.");const i=ao(r),s=Is(r),l=t.centerXY?-(s.min.x+s.max.x+1)/2:0,c=t.centerXY?-(s.min.y+s.max.y+1)/2:0,f=t.placeOnBed?-s.min.z:0,d=[],p=(E,b)=>[(E.x+b[0]+l)*t.blockSize,(E.y+b[1]+c)*t.blockSize,(E.z+b[2]+f)*t.blockSize];for(const E of r)for(const b of AR){const[M,v,O]=b.neighbor;if(i.has(ze({x:E.x+M,y:E.y+v,z:E.z+O})))continue;const N=b.corners.map(U=>p(E,U));fl(d,N,b.normal)}if(t.angledSupports)for(const E of Ep(r))CR(d,E,t.blockSize,l,c,f);const m=LR(d),_=new ArrayBuffer(84+m.length*50),g=new DataView(_),x=new TextEncoder().encode("Block Builder binary STL - exterior voxel faces");new Uint8Array(_,0,Math.min(80,x.length)).set(x.slice(0,80)),g.setUint32(80,m.length,!0);let y=84;for(const E of m){for(const b of E.normal)g.setFloat32(y,b,!0),y+=4;for(const b of E.points)for(const M of b)g.setFloat32(y,M,!0),y+=4;g.setUint16(y,0,!0),y+=2}return{buffer:_,triangles:m.length,dimensions:[(s.max.x-s.min.x+1)*t.blockSize,(s.max.y-s.min.y+1)*t.blockSize,(s.max.z-s.min.z+1)*t.blockSize],components:bp(r).componentCount}}function RR(r,t){const i=URL.createObjectURL(new Blob([r],{type:"model/stl"})),s=document.createElement("a");s.href=i,s.download=t,s.click(),setTimeout(()=>URL.revokeObjectURL(i),1e3)}function CR(r,t,i,s,l,c){if(t.kind==="corner"){DR(r,t,i,s,l,c);return}if(t.kind==="valley"){UR(r,t,i,s,l,c);return}wR(r,t,i,s,l,c)}function wR(r,t,i,s,l,c){const{low:f,width:d}=sR(t.highSide),p=t.cell,_=[[-.5,-.5,-.5],[-.5,-.5,.5],[.5,-.5,.5],[-.5,.5,-.5],[-.5,.5,.5],[.5,.5,.5]].map(([M,v,O])=>[(p.x+.5+M*f[0]+v*d[0]+s)*i,(p.y+.5+M*f[1]+v*d[1]+l)*i,(p.z+.5+O+c)*i]),g=[[0,2,1],[3,4,5],[0,3,5],[0,5,2]],x=(M,v)=>[M[0]-v[0],M[1]-v[1],M[2]-v[2]],y=(M,v)=>[M[1]*v[2]-M[2]*v[1],M[2]*v[0]-M[0]*v[2],M[0]*v[1]-M[1]*v[0]],E=M=>{const v=Math.hypot(...M);return[M[0]/v,M[1]/v,M[2]/v]};for(const[M,v,O]of g){const N=[_[M],_[v],_[O]];r.push({normal:E(y(x(N[1],N[0]),x(N[2],N[0]))),points:N})}const b=t.highSide==="x-"?[-1,0,0]:t.highSide==="x+"?[1,0,0]:t.highSide==="y-"?[0,-1,0]:[0,1,0];fl(r,[_[0],_[1],_[4],_[3]],b),fl(r,[_[1],_[2],_[5],_[4]],[0,0,1])}function DR(r,t,i,s,l,c){const f=t.cell,d=Math.round(Tx(t.highSides)/(Math.PI/2)),m=[[-.5,-.5,-.5],[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5]].map(([E,b,M])=>{const[v,O]=wx(E,b,d);return[(f.x+.5+v+s)*i,(f.y+.5+O+l)*i,(f.z+.5+M+c)*i]}),_=[[0,2,1],[0,3,2],[0,4,3],[0,1,4]],g=(E,b)=>[E[0]-b[0],E[1]-b[1],E[2]-b[2]],x=(E,b)=>[E[1]*b[2]-E[2]*b[1],E[2]*b[0]-E[0]*b[2],E[0]*b[1]-E[1]*b[0]],y=E=>{const b=Math.hypot(...E);return[E[0]/b,E[1]/b,E[2]/b]};for(const[E,b,M]of _){const v=[m[E],m[b],m[M]];r.push({normal:y(x(g(v[1],v[0]),g(v[2],v[0]))),points:v})}fl(r,[m[1],m[2],m[3],m[4]],[0,0,1])}function UR(r,t,i,s,l,c){const f=t.cell,d=t.axis==="x"?0:1,m=[[0,-.5,-.5],[0,.5,-.5],[-.5,-.5,.5],[-.5,.5,.5],[.5,-.5,.5],[.5,.5,.5]].map(([E,b,M])=>{const[v,O]=wx(E,b,d);return[(f.x+.5+v+s)*i,(f.y+.5+O+l)*i,(f.z+.5+M+c)*i]}),_=[[0,2,3],[0,3,1],[0,1,5],[0,5,4],[0,4,2],[1,3,5]],g=(E,b)=>[E[0]-b[0],E[1]-b[1],E[2]-b[2]],x=(E,b)=>[E[1]*b[2]-E[2]*b[1],E[2]*b[0]-E[0]*b[2],E[0]*b[1]-E[1]*b[0]],y=E=>{const b=Math.hypot(...E);return[E[0]/b,E[1]/b,E[2]/b]};for(const[E,b,M]of _){const v=[m[E],m[b],m[M]];r.push({normal:y(x(g(v[1],v[0]),g(v[2],v[0]))),points:v})}fl(r,[m[2],m[4],m[5],m[3]],[0,0,1])}function wx(r,t,i){return i===1?[t,-r]:i===-1?[-t,r]:Math.abs(i)===2?[-r,-t]:[r,t]}function fl(r,t,i){const s=[...t].sort((c,f)=>c[0]-f[0]||c[1]-f[1]||c[2]-f[2]),l=[[s[0],s[1],s[3]],[s[0],s[3],s[2]]];for(const c of l){const f=[c[1][0]-c[0][0],c[1][1]-c[0][1],c[1][2]-c[0][2]],d=[c[2][0]-c[0][0],c[2][1]-c[0][1],c[2][2]-c[0][2]],p=[f[1]*d[2]-f[2]*d[1],f[2]*d[0]-f[0]*d[2],f[0]*d[1]-f[1]*d[0]];p[0]*i[0]+p[1]*i[1]+p[2]*i[2]<0&&([c[1],c[2]]=[c[2],c[1]]),r.push({normal:i,points:c})}}function LR(r){const t=new Map,i=l=>l.map(c=>Object.is(c,-0)?"0":String(c)).join(",");for(const[l,c]of r.entries()){const f=c.points.map(i),d=[...f].sort(),p=f.map(x=>d.indexOf(x));let m=0;for(let x=0;x<p.length;x++)for(let y=x+1;y<p.length;y++)p[x]>p[y]&&m++;const _=d.join("|"),g=t.get(_)??{positive:[],negative:[]};(m%2?g.negative:g.positive).push(l),t.set(_,g)}const s=new Set;for(const l of t.values())for(let c=0;c<Math.min(l.positive.length,l.negative.length);c++)s.add(l.positive[c]),s.add(l.negative[c]);return s.size?r.filter((l,c)=>!s.has(c)):r}const NR=Array.from({length:256},(r,t)=>{let i=t;for(let s=0;s<8;s++)i=i&1?3988292384^i>>>1:i>>>1;return i>>>0});function OR(r){let t=4294967295;for(const i of r)t=NR[(t^i)&255]^t>>>8;return(t^4294967295)>>>0}function Di(r,t,i){r.setUint16(t,i,!0)}function xi(r,t,i){r.setUint32(t,i,!0)}function zR(r){const t=new TextEncoder,i=[],s=[];let l=0;for(const g of r){const x=t.encode(g.name),y=new Uint8Array(g.data),E=OR(y),b=new Uint8Array(30+x.length+y.length),M=new DataView(b.buffer);xi(M,0,67324752),Di(M,4,20),Di(M,6,2048),Di(M,8,0),xi(M,14,E),xi(M,18,y.length),xi(M,22,y.length),Di(M,26,x.length),b.set(x,30),b.set(y,30+x.length),i.push(b);const v=new Uint8Array(46+x.length),O=new DataView(v.buffer);xi(O,0,33639248),Di(O,4,20),Di(O,6,20),Di(O,8,2048),Di(O,10,0),xi(O,16,E),xi(O,20,y.length),xi(O,24,y.length),Di(O,28,x.length),xi(O,42,l),v.set(x,46),s.push(v),l+=b.length}const c=s.reduce((g,x)=>g+x.length,0),f=l+c+22,d=new Uint8Array(f);let p=0;for(const g of i)d.set(g,p),p+=g.length;const m=p;for(const g of s)d.set(g,p),p+=g.length;const _=new DataView(d.buffer,p,22);return xi(_,0,101010256),Di(_,8,r.length),Di(_,10,r.length),xi(_,12,c),xi(_,16,m),d.buffer}function PR(r,t){const i=URL.createObjectURL(new Blob([r],{type:"application/zip"})),s=document.createElement("a");s.href=i,s.download=t,s.click(),setTimeout(()=>URL.revokeObjectURL(i),1e3)}const BR=[{name:"Coral",value:"#ff6b6b"},{name:"Sunshine",value:"#ffd166"},{name:"Mint",value:"#67d5b5"},{name:"Sky",value:"#3a86ff"},{name:"Grape",value:"#8b5cf6"},{name:"Pink",value:"#d65db1"},{name:"Orange",value:"#ff8c42"},{name:"Snow",value:"#f4f7fb"},{name:"Slate",value:"#536878"}],np="block-builder-current-v2",Ov=[{x:-1,y:0,z:0,color:"#ff6b6b"},{x:0,y:0,z:0,color:"#ff6b6b"},{x:1,y:0,z:0,color:"#ff6b6b"},{x:0,y:0,z:1,color:"#ff6b6b"}];function IR(){try{const r=localStorage.getItem(np),t=r?Cx(r):Xr("My Awesome Build",Ov),i=t.settings.selectedColor;return{...t,blocks:cu(t.blocks,i)}}catch{return Xr("My Awesome Build",Ov)}}function FR(){const r=Kt.useMemo(IR,[]),[t,i]=Kt.useState(r.blocks),[s,l]=Kt.useState(r.name),[c,f]=Kt.useState(r.settings.selectedColor),[d,p]=Kt.useState("add"),[m,_]=Kt.useState(r.settings.selectedShape??"cube"),[g,x]=Kt.useState(r.settings.gravityMode),[y,E]=Kt.useState([]),[b,M]=Kt.useState([]),[v,O]=Kt.useState(null),[N,U]=Kt.useState(!1),[X,G]=Kt.useState(null),[P,k]=Kt.useState("Your build is safe in this browser"),[D,C]=Kt.useState(!1),[B,ot]=Kt.useState(null),it=Kt.useRef(null),gt=Kt.useRef(null),mt=Kt.useMemo(()=>Xr(s,t,c,g,m),[s,t,c,g,m]),I=Kt.useMemo(()=>bp(t),[t]),Q=Kt.useMemo(()=>bx(t,c),[t,c]),j=Q[0],Mt=Kt.useCallback(ht=>{ht===t||rl(Xr("",ht))===rl(Xr("",t))||(E(Ct=>[...Ct,t].slice(-100)),M([]),i(ht),U(!0))},[t]),At=Kt.useCallback(ht=>{const Ct=g&&!Ex(t,ht),F=Ct?eR(t,ht):Mx(t,ht);if(F===t){k("That spot already has a block");return}Mt(F),k(Ct?"Block added with a 45° support wedge!":"Block added!")},[t,Mt,g]),z=Kt.useCallback(ht=>{Mt($2(t,ht)),O(null),k("Block removed")},[t,Mt]),$=Kt.useCallback(ht=>{var Ct;_(ht),p("add"),k(`${(Ct=ki.find(F=>F.id===ht))==null?void 0:Ct.label} selected`)},[]),xt=ht=>{if(ht===c)return;const Ct=F=>cu(F,ht);f(ht),i(Ct),E(F=>F.map(Ct)),M(F=>F.map(Ct)),U(!0),p("add"),k("The whole model changed color!")},q=Kt.useCallback(()=>{const ht=y.at(-1);ht&&(M(Ct=>[t,...Ct]),i(ht),E(Ct=>Ct.slice(0,-1)),O(null),U(!0),k("Undid the last change"))},[y,t]),ct=Kt.useCallback(()=>{const ht=b[0];ht&&(E(Ct=>[...Ct,t]),i(ht),M(Ct=>Ct.slice(1)),O(null),U(!0),k("Redid the change"))},[b,t]);Kt.useEffect(()=>{const ht=setTimeout(()=>localStorage.setItem(np,rl(mt)),180);return()=>clearTimeout(ht)},[mt]),Kt.useEffect(()=>{const ht=Ct=>{N&&(Ct.preventDefault(),Ct.returnValue="")};return window.addEventListener("beforeunload",ht),()=>window.removeEventListener("beforeunload",ht)},[N]),Kt.useEffect(()=>{const ht=Ct=>{var jt;const F=Ct.target;if(["INPUT","TEXTAREA","SELECT"].includes(F.tagName))return;if(Ct.key.toLowerCase()==="r"){Ct.preventDefault(),m!=="cube"&&$(yx(m));return}const Ne=Ct.ctrlKey||Ct.metaKey;if(Ne&&Ct.key.toLowerCase()==="z"){Ct.preventDefault(),Ct.shiftKey?ct():q();return}if(Ne&&Ct.key.toLowerCase()==="y"){Ct.preventDefault(),ct();return}if((Ct.key==="Delete"||Ct.key==="Backspace")&&v){Ct.preventDefault(),z(v);return}if(Ct.key==="Escape"){G(null),O(null);return}const re={ArrowLeft:[-1,0],a:[-1,0],ArrowRight:[1,0],d:[1,0],ArrowUp:[0,1],w:[0,1],ArrowDown:[0,-1],s:[0,-1]}[Ct.key];re&&(Ct.preventDefault(),(jt=it.current)==null||jt.nudge(...re))};return window.addEventListener("keydown",ht),()=>window.removeEventListener("keydown",ht)},[ct,q,v,z,m,$]);const Tt=()=>{localStorage.setItem(np,rl(mt)),yR(rl(mt),`${uu(s)}.blocks.json`),U(!1),k("Saved here and downloaded a project file!")},bt=async ht=>{var F;const Ct=(F=ht.target.files)==null?void 0:F[0];if(ht.target.value="",!!Ct&&!(N&&!confirm("Open this file and replace your unsaved changes?")))try{const Ne=Cx(await Ct.text()),se=Ne.settings.selectedColor;l(Ne.name),i(cu(Ne.blocks,se)),f(se),x(Ne.settings.gravityMode),_(Ne.settings.selectedShape??"cube"),E([]),M([]),U(!1),O(null),k(`Opened “${Ne.name}” in one model color`),setTimeout(()=>{var re;return(re=it.current)==null?void 0:re.frame()},50)}catch(Ne){alert(Ne instanceof Error?Ne.message:"We could not open that project.")}},Ut=ht=>{if(N&&!confirm("Load this sample and replace your unsaved changes?"))return;const Ct=Lv[ht];l(Ct.name),i(cu(Ct.blocks,c)),E([]),M([]),O(null),U(!0),k(`${Ct.emoji} ${Ct.name} loaded in your model color!`),setTimeout(()=>{var F;return(F=it.current)==null?void 0:F.frame()},50)},Ft=()=>{t.length&&confirm("Clear every block and start fresh?")&&(Mt([]),O(null),k("All clear — ready for something new!"))},ee=()=>{t.length&&(Mt(j.blocks),O(null),G(null),k(j.missing.length?`Best side chosen with ${j.missing.length} optimized ${j.missing.length===1?"wedge":"wedges"}!`:`Turned onto its ${j.label.toLowerCase()} — no supports needed!`),setTimeout(()=>{var ht;return(ht=it.current)==null?void 0:ht.frame()},50))},Te=()=>{x(ht=>!ht),U(!0),k(g?"Gravity Mode is off":"Gravity Mode is on — no sky blocks!")};return L.jsxs("div",{className:"app-shell",children:[L.jsxs("header",{className:"topbar",children:[L.jsxs("div",{className:"brand",children:[L.jsx("div",{className:"brand-cube","aria-hidden":"true",children:L.jsx(qS,{})}),L.jsxs("div",{children:[L.jsx("h1",{children:"Block Builder"}),L.jsx("span",{children:"Imagine it. Build it. Print it!"})]})]}),L.jsxs("label",{className:"name-field",children:[L.jsx("span",{children:"Project name"}),L.jsx("input",{value:s,maxLength:60,onChange:ht=>{l(ht.target.value),U(!0)},"aria-label":"Project name"})]}),L.jsxs("div",{className:"top-actions",children:[L.jsx(ma,{icon:L.jsx(iM,{}),label:"Save",onClick:Tt}),L.jsx(ma,{icon:L.jsx($S,{}),label:"Open",onClick:()=>{var ht;return(ht=gt.current)==null?void 0:ht.click()}}),L.jsx(ma,{primary:!0,icon:L.jsx(Bv,{}),label:"Export STL",onClick:()=>G("export")}),L.jsx(ma,{icon:L.jsx(g_,{}),label:"Help",onClick:()=>G("help")}),L.jsx("input",{ref:gt,className:"sr-only",type:"file",accept:".json,.blocks.json,application/json",onChange:bt})]})]}),L.jsxs("main",{className:"workspace",children:[L.jsxs("aside",{className:"left-panel","aria-label":"Building tools",children:[L.jsx("h2",{children:"Build tools"}),L.jsxs("div",{className:"tool-stack",children:[L.jsx(zv,{active:d==="add",icon:L.jsx(eM,{}),label:"Add",hint:"Left click",onClick:()=>p("add")}),L.jsx(zv,{active:d==="remove",icon:L.jsx(QS,{}),label:"Remove",hint:"Right click",onClick:()=>p("remove")})]}),L.jsx("div",{className:"divider"}),L.jsx("h2",{children:"Block shape"}),L.jsx("div",{className:"shape-choices",role:"group","aria-label":"Block shape",children:ki.map(ht=>L.jsxs("button",{"aria-pressed":m===ht.id,title:ht.hint,onClick:()=>$(ht.id),children:[L.jsx("span",{className:`shape-icon ${ht.id}`,"aria-hidden":"true"}),L.jsx("b",{children:ht.label})]},ht.id))}),L.jsx("p",{className:"shape-hint",children:"Slabs make thin walls. Corner pieces fill the gaps where slabs meet. Press R to turn a piece."}),L.jsx("div",{className:"divider"}),L.jsx("h2",{children:"Model color"}),L.jsx("p",{className:"palette-note",children:"One color for the whole print"}),L.jsx("div",{className:"swatches",children:BR.map(ht=>L.jsx("button",{className:`swatch ${c===ht.value?"selected":""}`,style:{"--swatch":ht.value},"aria-label":`${ht.name}${c===ht.value?", selected model color":""}`,title:`${ht.name} model`,onClick:()=>xt(ht.value),children:L.jsx("span",{})},ht.value))}),L.jsxs("div",{className:`gravity-card ${g?"active":""}`,children:[L.jsxs("div",{className:"gravity-title",children:[L.jsx(ap,{}),L.jsxs("span",{children:[L.jsx("b",{children:"Gravity Mode"}),L.jsx("small",{children:"Uses optimized 45° wedges"})]}),L.jsx("button",{role:"switch","aria-checked":g,"aria-label":"Toggle Gravity Mode",className:"mini-switch",onClick:Te,children:L.jsx("i",{})})]}),L.jsx("div",{className:`gravity-status ${j.missing.length===0?"safe":"needs-work"}`,children:j.missing.length===0?"✓ A support-free side was found":`${j.missing.length} support ${j.missing.length===1?"wedge":"wedges"} on the best side`}),L.jsxs("button",{className:"gravity-setup",onClick:()=>G("gravity"),children:[L.jsx(Fv,{})," Find best print side"]})]}),L.jsx("div",{className:"divider"}),L.jsx("label",{className:"sample-label",htmlFor:"samples",children:"Try a sample"}),L.jsxs("select",{id:"samples",defaultValue:"",onChange:ht=>{ht.target.value&&Ut(Number(ht.target.value)),ht.target.value=""},children:[L.jsx("option",{value:"",disabled:!0,children:"Choose a creation…"}),Lv.map((ht,Ct)=>L.jsxs("option",{value:Ct,children:[ht.emoji," ",ht.name]},ht.name))]})]}),L.jsxs("section",{className:"stage-wrap",children:[L.jsxs("div",{className:"edit-bar",children:[L.jsx(ma,{icon:L.jsx(sM,{}),label:"Undo",disabled:!y.length,onClick:q}),L.jsx(ma,{icon:L.jsx(nM,{}),label:"Redo",disabled:!b.length,onClick:ct}),L.jsx("span",{className:"edit-separator"}),L.jsx(ma,{icon:L.jsx(tM,{}),label:"Home View",onClick:()=>{var ht;return(ht=it.current)==null?void 0:ht.setView("home")}}),L.jsx(ma,{icon:L.jsx(JS,{}),label:"Frame Model",onClick:()=>{var ht;return(ht=it.current)==null?void 0:ht.frame()}}),L.jsx(ma,{danger:!0,icon:L.jsx(aM,{}),label:"Clear",disabled:!t.length,onClick:Ft}),B&&L.jsxs("span",{className:"controller-badge",title:B,children:[L.jsx(eu,{})," Controller ready"]})]}),L.jsxs("div",{className:"canvas-card",children:[L.jsx(fR,{ref:it,shape:m,onShapeChange:$,blocks:t,tool:d,color:c,gravityMode:g,selected:v,interactionLocked:X!==null,onAdd:At,onRemove:z,onSelect:O,onUndo:q,onToolChange:ht=>{p(ht),k(ht==="add"?"Add tool selected":"Remove tool selected")},onControllerHelp:()=>G(ht=>ht==="help"?null:"help"),onControllerBack:()=>{G(null),O(null)},onControllerChange:ht=>{ot(ht),ht&&k("Xbox controller ready — LT places, RT breaks")}}),L.jsxs("div",{className:"block-counter",children:[L.jsx("strong",{children:t.length.toLocaleString()}),L.jsx("span",{children:t.length===1?"block":"blocks"})]})]}),L.jsxs("div",{className:"status-row",role:"status","aria-live":"polite",children:[L.jsx("span",{className:"autosave-dot"})," ",P,L.jsx("span",{className:"status-spacer"}),B?L.jsxs(L.Fragment,{children:[L.jsx(eu,{})," Minecraft-style controls active"]}):L.jsxs(L.Fragment,{children:[L.jsx("kbd",{children:"Ctrl"})," + ",L.jsx("kbd",{children:"Z"})," undo"]})]})]}),L.jsxs("aside",{className:"right-panel",children:[L.jsx("h2",{children:"Look around"}),L.jsx("p",{className:"panel-copy",children:"Jump to a view, then drag to explore."}),L.jsx("div",{className:"view-grid",children:[["Iso","iso"],["Top","top"],["Front","front"],["Back","back"],["Left","left"],["Right","right"]].map(([ht,Ct])=>L.jsxs("button",{onClick:()=>{var F;return(F=it.current)==null?void 0:F.setView(Ct)},children:[L.jsx("span",{className:`view-icon view-${Ct}`,children:Ct==="iso"?"◆":Ct==="top"?"▦":"⬆"}),ht]},Ct))}),L.jsxs("div",{className:"mouse-card",children:[L.jsx("div",{className:"mouse-icon","aria-hidden":"true",children:"🖱️"}),L.jsxs("div",{children:[L.jsx("b",{children:"Quick moves"}),L.jsx("span",{children:"Drag to orbit"}),L.jsx("span",{children:"Shift + drag to pan"}),L.jsx("span",{children:"Scroll to zoom"})]})]}),L.jsxs("div",{className:`controller-card ${B?"connected":""}`,children:[L.jsx(eu,{}),L.jsxs("div",{children:[L.jsx("b",{children:B?"Controller ready":"Xbox controller"}),L.jsx("span",{children:B?"LT place · RT break":"Connect, then press any button"})]})]}),L.jsxs("button",{className:"help-card",onClick:()=>G("help"),children:[L.jsx(g_,{}),L.jsxs("span",{children:[L.jsx("b",{children:"Need a hand?"}),L.jsx("small",{children:"See all controls"})]}),L.jsx("span",{children:"→"})]})]})]}),X==="help"&&L.jsx(GR,{onClose:()=>G(null)})," ",X==="export"&&L.jsx(VR,{name:s,blocks:t,color:c,gravityMode:g,analysis:I,initialSplit:D,onClose:()=>{G(null),C(!1)}})," ",X==="gravity"&&L.jsx(HR,{scores:Q,best:j,onClose:()=>G(null),onApply:ee,onSplit:()=>{C(!0),G("export")}})]})}function ma({icon:r,label:t,onClick:i,disabled:s,primary:l,danger:c}){return L.jsxs("button",{className:`action-btn ${l?"primary":""} ${c?"danger":""}`,onClick:i,disabled:s,title:t,"aria-label":t,children:[r,L.jsx("span",{children:t})]})}function zv({icon:r,label:t,hint:i,active:s,onClick:l}){return L.jsxs("button",{className:`tool-btn ${s?"active":""}`,"aria-pressed":s,onClick:l,children:[r,L.jsxs("span",{children:[L.jsx("b",{children:t}),L.jsx("small",{children:i})]}),s&&L.jsx("i",{children:"✓"})]})}function Tp({title:r,onClose:t,children:i,wide:s=!1}){return L.jsx("div",{className:"modal-backdrop",role:"presentation",onMouseDown:l=>{l.target===l.currentTarget&&t()},children:L.jsxs("section",{className:`modal ${s?"wide":""}`,role:"dialog","aria-modal":"true","aria-label":r,children:[L.jsxs("header",{children:[L.jsx("h2",{children:r}),L.jsx("button",{className:"close-btn","aria-label":"Close",onClick:t,children:L.jsx(rM,{})})]}),i]})})}function HR({scores:r,best:t,onClose:i,onApply:s,onSplit:l}){return L.jsx(Tp,{title:"Find the best print side",onClose:i,wide:!0,children:L.jsxs("div",{className:"gravity-modal",children:[L.jsxs("div",{className:"gravity-hero",children:[L.jsx(Fv,{}),L.jsxs("div",{children:[L.jsx("b",{children:"We checked all 6 sides!"}),L.jsxs("p",{children:[L.jsx("strong",{children:t.label})," is the best side for the print bed."]})]}),L.jsx("em",{children:t.missing.length===0?"Support-free!":`${t.missing.length} gaps`})]}),L.jsx("div",{className:"orientation-grid",children:r.map((c,f)=>L.jsxs("div",{className:`orientation-score ${f===0?"best":""}`,children:[L.jsx("span",{children:c.id==="bottom"?"↓":c.id==="top"?"↑":c.id==="left"?"←":c.id==="right"?"→":c.id==="front"?"↙":"↗"}),L.jsxs("div",{children:[L.jsxs("b",{children:[c.label,f===0&&L.jsx("em",{children:"Best"})]}),L.jsx("small",{children:c.hint})]}),L.jsx("strong",{children:c.missing.length===0?"✓":c.missing.length})]},c.id))}),t.missing.length>0&&L.jsx("div",{className:"gravity-explain",children:"Gravity Mode fills gaps with broad 45° wedges. Where two directions meet at a corner, one lighter dual-slope support keeps full contact beneath the block without creating a flat overhang. You can also preserve the exact shape by exporting flat pieces."}),L.jsxs("div",{className:"gravity-options",children:[L.jsxs("button",{className:"recommended",onClick:s,children:[L.jsx(ap,{}),L.jsx("b",{children:"Use best side"}),L.jsx("small",{children:t.missing.length?`Rotate and add ${t.missing.length} optimized ${t.missing.length===1?"support":"supports"}`:"Rotate with no supports needed"})]}),L.jsxs("button",{onClick:l,children:[L.jsx(Iv,{}),L.jsx("b",{children:"Split into flat pieces"}),L.jsx("small",{children:"Download a ZIP for gluing"})]})]})]})})}function GR({onClose:r}){const t=[["Left click","Add or remove with your chosen tool"],["Right click","Quickly remove a block"],["Drag / Shift + drag","Orbit / slide the view"],["Wheel / WASD","Zoom / nudge the view"],["Ctrl/Cmd + Z / Y","Undo / redo"],["Delete / Escape","Remove / cancel"],["R","Rotate a slab or corner piece"]],i=[["Left stick","Move across the build"],["Right stick","Look around"],["LT / RT","Place / break block"],["A / B","Move up / down a layer"],["LB / RB","Previous / next build tool"],["D-pad","Nudge one grid space"],["X / Y","Undo / frame model"],["View / Menu","Home view / help"],["Click left stick","Cycle block shapes"],["Click right stick","Rotate the selected piece"]];return L.jsxs(Tp,{title:"Help & controls",onClose:r,wide:!0,children:[L.jsxs("div",{className:"help-intro",children:[L.jsx("span",{children:"👋"}),L.jsxs("div",{children:[L.jsx("b",{children:"You’ve got this!"}),L.jsx("p",{children:"Choose cubes, half-thickness slabs, or corner fillers and a model color, then add blocks in the playground. Every block uses the same color and snaps neatly into place. Keep Gravity Mode on for support-free building."})]})]}),L.jsx("h3",{className:"controls-heading",children:"Mouse & keyboard"}),L.jsx("div",{className:"controls-list",children:t.map(([s,l])=>L.jsxs("div",{children:[L.jsx("kbd",{children:s}),L.jsx("span",{children:l})]},s))}),L.jsxs("h3",{className:"controls-heading controller-heading",children:[L.jsx(eu,{})," Xbox controller · Minecraft style"]}),L.jsx("div",{className:"controls-list controller-controls",children:i.map(([s,l])=>L.jsxs("div",{children:[L.jsx("kbd",{children:s}),L.jsx("span",{children:l})]},s))}),L.jsxs("div",{className:"print-note",children:[L.jsx(ZS,{}),L.jsxs("p",{children:[L.jsx("b",{children:"One color for the whole print"}),L.jsx("br",{}),"The palette previews the whole model in one color. STL does not carry that color, so choose matching filament in Bambu Studio. Slabs are half the block size: a 5 mm block size makes 2.5 mm thick walls."]})]}),L.jsx("button",{className:"big-primary",onClick:r,children:"Let’s build!"})]})}function VR({name:r,blocks:t,color:i,gravityMode:s,analysis:l,initialSplit:c,onClose:f}){const d=Kt.useMemo(()=>bx(t,i),[t,i]),p=d[0],[m,_]=Kt.useState(`${uu(r)}.stl`),[g,x]=Kt.useState(5),[y,E]=Kt.useState(!0),[b,M]=Kt.useState(!0),[v,O]=Kt.useState(!0),[N,U]=Kt.useState(c),[X,G]=Kt.useState(null),P=v?p:d.find(B=>B.id==="bottom"),k=v?p.blocks:Sp(t,"bottom"),D=Kt.useMemo(()=>nR(k),[k]),C=()=>{try{if(N){const B=D.map((gt,mt)=>({name:`${uu(r)}-part-${String(mt+1).padStart(2,"0")}.stl`,data:dd(gt,{blockSize:g,centerXY:y,placeOnBed:!0}).buffer})),ot=`${uu(m.replace(/\\.(stl|zip)$/i,""))||"block-builder"}-flat-pieces.zip`;PR(zR(B),ot);const it=dd(k,{blockSize:g,centerXY:y,placeOnBed:b});G({name:ot,dimensions:it.dimensions,blocks:t.length,components:D.length,split:!0})}else{const B=dd(k,{blockSize:g,centerXY:y,placeOnBed:b,angledSupports:s}),ot=m.toLowerCase().endsWith(".stl")?m:`${m}.stl`;RR(B.buffer,ot),G({name:ot,dimensions:B.dimensions,blocks:t.length,components:B.components,split:!1})}}catch(B){alert(B instanceof Error?B.message:"Export did not work.")}};return L.jsx(Tp,{title:"Export for 3D printing",onClose:f,wide:!0,children:X?L.jsxs("div",{className:"export-success",children:[L.jsx("div",{className:"success-burst",children:"✓"}),L.jsx("h3",{children:X.split?"Your printable pieces are ready!":"Your STL is downloaded!"}),L.jsxs("p",{className:"download-name",children:[L.jsx(KS,{})," ",X.name]}),L.jsxs("div",{className:"result-grid",children:[L.jsxs("div",{children:[L.jsx("b",{children:X.dimensions.map(B=>B.toFixed(1)).join(" × ")}),L.jsx("span",{children:"overall size in millimetres"})]}),L.jsxs("div",{children:[L.jsx("b",{children:X.blocks}),L.jsx("span",{children:"blocks"})]}),L.jsxs("div",{children:[L.jsx("b",{children:X.components}),L.jsx("span",{children:X.split?"flat pieces":"separate pieces"})]})]}),L.jsx("p",{children:X.split?"Unzip the files, print each one flat, then glue the pieces together.":"Open the file in Bambu Studio and choose your filament color."}),L.jsx("button",{className:"big-primary",onClick:f,children:"Done"})]}):L.jsxs("div",{className:"export-form",children:[L.jsxs("div",{className:"export-fields",children:[L.jsxs("label",{children:["File name",L.jsx("input",{value:m,onChange:B=>_(B.target.value)})]}),L.jsxs("label",{children:["Block size ",L.jsx("span",{children:"(millimetres)"}),L.jsxs("div",{className:"number-input",children:[L.jsx("input",{type:"number",min:"1",max:"50",value:g,onChange:B=>x(Math.min(50,Math.max(1,Number(B.target.value))))}),L.jsx("b",{children:"mm"})]})]}),L.jsxs("label",{className:"check-row",children:[L.jsx("input",{type:"checkbox",checked:v,onChange:B=>O(B.target.checked)}),L.jsxs("span",{children:[L.jsx("b",{children:"Use the best print side"}),L.jsxs("small",{children:[p.label,": ",p.missing.length===0?"support-free":`${p.missing.length} support gaps`]})]})]}),L.jsxs("label",{className:"check-row",children:[L.jsx("input",{type:"checkbox",checked:N,onChange:B=>U(B.target.checked)}),L.jsxs("span",{children:[L.jsx("b",{children:"Split into flat printable pieces"}),L.jsxs("small",{children:["Downloads ",D.length," support-free STL files in one ZIP"]})]})]}),L.jsxs("label",{className:"check-row",children:[L.jsx("input",{type:"checkbox",checked:y,onChange:B=>E(B.target.checked)}),L.jsxs("span",{children:[L.jsx("b",{children:"Center on the print bed"}),L.jsx("small",{children:"Places the model around the middle"})]})]}),t.some(B=>B.shape&&B.shape!=="cube")&&L.jsxs("p",{className:"slab-print-note",children:["Slab thickness: ",L.jsxs("b",{children:[g/2," mm"]}),".",g/2<1.2?" Very thin walls—use a larger block size for a stronger print.":""]}),L.jsxs("label",{className:"check-row",children:[L.jsx("input",{type:"checkbox",checked:b,disabled:N,onChange:B=>M(B.target.checked)}),L.jsxs("span",{children:[L.jsx("b",{children:"Place bottom on print bed"}),L.jsx("small",{children:N?"Always on for flat pieces":"Recommended for an easier print"})]})]}),L.jsxs("div",{className:"optimized",children:[L.jsx("span",{children:"★"}),L.jsxs("p",{children:[L.jsx("b",{children:"Optimized printable mesh"}),L.jsx("small",{children:"Hidden faces are removed automatically."})]}),L.jsx("em",{children:"Recommended"})]})]}),L.jsxs("div",{className:"analysis-card",children:[L.jsx("h3",{children:"Gravity & print check"}),L.jsxs("div",{className:"analysis-stats",children:[L.jsxs("span",{children:[L.jsx("b",{children:l.blockCount})," blocks"]}),L.jsxs("span",{children:[L.jsx("b",{children:N?D.length:l.componentCount})," ",N?"files":"groups"]})]}),L.jsxs("div",{className:`gravity-export-status ${P.missing.length===0||N||s?"safe":"warn"}`,children:[L.jsx(ap,{}),L.jsxs("p",{children:[L.jsx("b",{children:N?"Every piece prints flat":P.missing.length===0?`Support-free on its ${P.label.toLowerCase()}`:s?`${P.missing.length} optimized 45° ${P.missing.length===1?"support":"supports"} included`:`${P.missing.length} support gaps remain`}),L.jsx("small",{children:N?"No generated supports needed; glue after printing.":P.missing.length===0?"No generated supports should be needed.":s?"Meeting wedges get a seamless dual-slope connector with full top contact.":"Turn on Gravity Mode, splitting, or return to Gravity Setup."})]})]}),!N&&l.warnings.length?L.jsxs("div",{className:"warnings",children:[l.warnings.map(B=>L.jsxs("p",{children:["⚠️ ",B]},B)),L.jsx("small",{children:"You can still export. Fix anything you want, or print it as it is."})]}):!N&&L.jsxs("div",{className:"all-good",children:[L.jsx("span",{children:"✓"}),L.jsxs("p",{children:[L.jsx("b",{children:"Looks print-ready!"}),L.jsx("small",{children:"All blocks are face-connected."})]})]}),L.jsx("p",{className:"color-note",children:"🎨 One model, one filament color. Choose matching filament in Bambu Studio."})]}),L.jsxs("div",{className:"modal-actions",children:[L.jsx("button",{className:"secondary",onClick:f,children:"Back to build"}),L.jsxs("button",{className:"big-primary",disabled:!t.length,onClick:C,children:[N?L.jsx(Iv,{}):L.jsx(Bv,{})," ",N?`Export ZIP (${D.length} pieces)`:"Export STL"]})]})]})})}function uu(r){return(r.trim()||"block-builder").replace(/[^a-z0-9-_]+/gi,"-").replace(/^-+|-+$/g,"").toLowerCase()}XS.createRoot(document.getElementById("root")).render(L.jsx(Kt.StrictMode,{children:L.jsx(FR,{})}));
