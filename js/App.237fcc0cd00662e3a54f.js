(()=>{var e,r,n,t,o,d,i,a={374:(e,r,n)=>{document.getElementById("root").classList.add("cloud-tutorials"),window.insights&&window.insights.chrome&&window.insights.chrome.isChrome2||Promise.all([n.e(252),n.e(410),n.e(880),n.e(629),n.e(450)]).then(n.bind(n,8450))}},c={};function s(e){if(c[e])return c[e].exports;var r=c[e]={id:e,loaded:!1,exports:{}},n={id:e,module:r,factory:a[e],require:s};return s.i.forEach((function(e){e(n)})),r=n.module,n.factory.call(r.exports,r,r.exports,n.require),r.loaded=!0,r.exports}s.m=a,s.c=c,s.i=[],s.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return s.d(r,{a:r}),r},s.d=(e,r)=>{for(var n in r)s.o(r,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},s.f={},s.e=e=>Promise.all(Object.keys(s.f).reduce(((r,n)=>(s.f[n](e,r),r)),[])),s.u=e=>"js/"+({196:"OopsPage",252:"rhcsVendor",410:"pfVendor",452:"NoPermissionsPage",807:"SamplePage",880:"reactvendor"}[e]||e)+"."+{184:"f28e71fbad0886f79d3e",196:"c55185f9398140298a3e",252:"048bfaf178ba300035f6",410:"1e1c9d236874e26cf7c5",450:"acdfe281f9b632b7d31c",452:"6c2fd03b8b4d37639e68",529:"bbca677b5d80a8471576",629:"e3c104934cbf5334e4db",807:"f1167dc32d49d69baaa7",880:"54db54b7e685dcd7b964"}[e]+".js",s.hu=e=>e+"."+s.h()+".hot-update.js",s.miniCssF=e=>"css/"+({196:"OopsPage",252:"rhcsVendor",410:"pfVendor",452:"NoPermissionsPage",768:"App",807:"SamplePage",880:"reactvendor"}[e]||e)+"."+{184:"31d6cfe0d16ae931b73c",196:"31d6cfe0d16ae931b73c",252:"31d6cfe0d16ae931b73c",410:"31d6cfe0d16ae931b73c",450:"31d6cfe0d16ae931b73c",452:"31d6cfe0d16ae931b73c",529:"31d6cfe0d16ae931b73c",629:"31d6cfe0d16ae931b73c",807:"31d6cfe0d16ae931b73c",880:"31d6cfe0d16ae931b73c"}[e]+".css",s.hmrF=()=>"App."+s.h()+".hot-update.json",s.h=()=>"c1b67f85f0d1c681faa6",s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),s.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),s.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="cloud-tutorials-frontend:",s.l=(n,t,o,d)=>{if(e[n])e[n].push(t);else{var i,a;if(void 0!==o)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var u=c[l];if(u.getAttribute("src")==n||u.getAttribute("data-webpack")==r+o){i=u;break}}i||(a=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,s.nc&&i.setAttribute("nonce",s.nc),i.setAttribute("data-webpack",r+o),i.src=n),e[n]=[t];var f=(r,t)=>{i.onerror=i.onload=null,clearTimeout(p);var o=e[n];if(delete e[n],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(t))),r)return r(t)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=f.bind(null,i.onerror),i.onload=f.bind(null,i.onload),a&&document.head.appendChild(i)}},s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e,r,n,t,o={},d=s.c,i=[],a=[],c="idle";function l(e){c=e;for(var r=0;r<a.length;r++)a[r].call(null,e)}function u(e){if(0===r.length)return e();var n=r;return r=[],Promise.all(n).then((function(){return u(e)}))}function f(e){if("idle"!==c)throw new Error("check() is only allowed in idle status");return l("check"),s.hmrM().then((function(t){if(!t)return l(m()?"ready":"idle"),null;l("prepare");var o=[];return r=[],n=[],Promise.all(Object.keys(s.hmrC).reduce((function(e,r){return s.hmrC[r](t.c,t.r,t.m,e,n,o),e}),[])).then((function(){return u((function(){return e?h(e):(l("ready"),o)}))}))}))}function p(e){return"ready"!==c?Promise.resolve().then((function(){throw new Error("apply() is only allowed in ready status")})):h(e)}function h(e){e=e||{},m();var r=n.map((function(r){return r(e)}));n=void 0;var o,d=r.map((function(e){return e.error})).filter(Boolean);if(d.length>0)return l("abort"),Promise.resolve().then((function(){throw d[0]}));l("dispose"),r.forEach((function(e){e.dispose&&e.dispose()})),l("apply");var i=function(e){o||(o=e)},a=[];return r.forEach((function(e){if(e.apply){var r=e.apply(i);if(r)for(var n=0;n<r.length;n++)a.push(r[n])}})),o?(l("fail"),Promise.resolve().then((function(){throw o}))):t?h(e).then((function(e){return a.forEach((function(r){e.indexOf(r)<0&&e.push(r)})),e})):(l("idle"),Promise.resolve(a))}function m(){if(t)return n||(n=[]),Object.keys(s.hmrI).forEach((function(e){t.forEach((function(r){s.hmrI[e](r,n)}))})),t=void 0,!0}s.hmrD=o,s.i.push((function(h){var m,v,b,y=h.module,g=function(n,t){var o=d[t];if(!o)return n;var a=function(r){if(o.hot.active){if(d[r]){var a=d[r].parents;-1===a.indexOf(t)&&a.push(t)}else i=[t],e=r;-1===o.children.indexOf(r)&&o.children.push(r)}else console.warn("[HMR] unexpected require("+r+") from disposed module "+t),i=[];return n(r)},s=function(e){return{configurable:!0,enumerable:!0,get:function(){return n[e]},set:function(r){n[e]=r}}};for(var f in n)Object.prototype.hasOwnProperty.call(n,f)&&"e"!==f&&Object.defineProperty(a,f,s(f));return a.e=function(e){return function(e){switch(c){case"ready":return l("prepare"),r.push(e),u((function(){l("ready")})),e;case"prepare":return r.push(e),e;default:return e}}(n.e(e))},a}(h.require,h.id);y.hot=(m=h.id,v=y,b={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:e!==m,_requireSelf:function(){i=v.parents.slice(),e=m,s(m)},active:!0,accept:function(e,r){if(void 0===e)b._selfAccepted=!0;else if("function"==typeof e)b._selfAccepted=e;else if("object"==typeof e&&null!==e)for(var n=0;n<e.length;n++)b._acceptedDependencies[e[n]]=r||function(){};else b._acceptedDependencies[e]=r||function(){}},decline:function(e){if(void 0===e)b._selfDeclined=!0;else if("object"==typeof e&&null!==e)for(var r=0;r<e.length;r++)b._declinedDependencies[e[r]]=!0;else b._declinedDependencies[e]=!0},dispose:function(e){b._disposeHandlers.push(e)},addDisposeHandler:function(e){b._disposeHandlers.push(e)},removeDisposeHandler:function(e){var r=b._disposeHandlers.indexOf(e);r>=0&&b._disposeHandlers.splice(r,1)},invalidate:function(){switch(this._selfInvalidated=!0,c){case"idle":n=[],Object.keys(s.hmrI).forEach((function(e){s.hmrI[e](m,n)})),l("ready");break;case"ready":Object.keys(s.hmrI).forEach((function(e){s.hmrI[e](m,n)}));break;case"prepare":case"check":case"dispose":case"apply":(t=t||[]).push(m)}},check:f,apply:p,status:function(e){if(!e)return c;a.push(e)},addStatusHandler:function(e){a.push(e)},removeStatusHandler:function(e){var r=a.indexOf(e);r>=0&&a.splice(r,1)},data:o[m]},e=void 0,b),y.parents=i,y.children=[],i=[],h.require=g})),s.hmrC={},s.hmrI={}})(),s.p="/beta/apps/cloud-tutorials/",n=(e,r,n,t)=>{var o=document.createElement("link");return o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=d=>{if(o.onerror=o.onload=null,"load"===d.type)n();else{var i=d&&("load"===d.type?"missing":d.type),a=d&&d.target&&d.target.href||r,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=a,o.parentNode.removeChild(o),t(c)}},o.href=r,document.head.appendChild(o),o},t=(e,r)=>{for(var n=document.getElementsByTagName("link"),t=0;t<n.length;t++){var o=(i=n[t]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(o===e||o===r))return i}var d=document.getElementsByTagName("style");for(t=0;t<d.length;t++){var i;if((o=(i=d[t]).getAttribute("data-href"))===e||o===r)return i}},o=[],d=[],i=e=>({dispose:()=>{for(var e=0;e<o.length;e++){var r=o[e];r.parentNode&&r.parentNode.removeChild(r)}o.length=0},apply:()=>{for(var e=0;e<d.length;e++)d[e].rel="stylesheet";d.length=0}}),s.hmrC.miniCss=(e,r,a,c,l,u)=>{l.push(i),e.forEach((e=>{var r=s.miniCssF(e),i=s.p+r;const a=t(r,i);a&&c.push(new Promise(((r,t)=>{var c=n(e,i,(()=>{c.as="style",c.rel="preload",r()}),t);o.push(a),d.push(c)})))}))},(()=>{var e={768:0};s.f.j=(r,n)=>{var t=s.o(e,r)?e[r]:void 0;if(0!==t)if(t)n.push(t[2]);else{var o=new Promise(((n,o)=>{t=e[r]=[n,o]}));n.push(t[2]=o);var d=s.p+s.u(r),i=new Error;s.l(d,(n=>{if(s.o(e,r)&&(0!==(t=e[r])&&(e[r]=void 0),t)){var o=n&&("load"===n.type?"missing":n.type),d=n&&n.target&&n.target.src;i.message="Loading chunk "+r+" failed.\n("+o+": "+d+")",i.name="ChunkLoadError",i.type=o,i.request=d,t[1](i)}}),"chunk-"+r,r)}};var r,n,t,o,d={};function i(e){return new Promise(((r,n)=>{d[e]=r;var t=s.p+s.hu(e),o=new Error;s.l(t,(r=>{if(d[e]){d[e]=void 0;var t=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;o.message="Loading hot update chunk "+e+" failed.\n("+t+": "+i+")",o.name="ChunkLoadError",o.type=t,o.request=i,n(o)}}))}))}function a(d){function i(e){for(var r=[e],n={},t=r.map((function(e){return{chain:[e],id:e}}));t.length>0;){var o=t.pop(),d=o.id,i=o.chain,c=s.c[d];if(c&&(!c.hot._selfAccepted||c.hot._selfInvalidated)){if(c.hot._selfDeclined)return{type:"self-declined",chain:i,moduleId:d};if(c.hot._main)return{type:"unaccepted",chain:i,moduleId:d};for(var l=0;l<c.parents.length;l++){var u=c.parents[l],f=s.c[u];if(f){if(f.hot._declinedDependencies[d])return{type:"declined",chain:i.concat([u]),moduleId:d,parentId:u};-1===r.indexOf(u)&&(f.hot._acceptedDependencies[d]?(n[u]||(n[u]=[]),a(n[u],[d])):(delete n[u],r.push(u),t.push({chain:i.concat([u]),id:u})))}}}}return{type:"accepted",moduleId:e,outdatedModules:r,outdatedDependencies:n}}function a(e,r){for(var n=0;n<r.length;n++){var t=r[n];-1===e.indexOf(t)&&e.push(t)}}s.f&&delete s.f.jsonpHmr,r=void 0;var c={},l=[],u={},f=function(e){console.warn("[HMR] unexpected require("+e.id+") to disposed module")};for(var p in n)if(s.o(n,p)){var h,m=n[p],v=!1,b=!1,y=!1,g="";switch((h=m?i(p):{type:"disposed",moduleId:p}).chain&&(g="\nUpdate propagation: "+h.chain.join(" -> ")),h.type){case"self-declined":d.onDeclined&&d.onDeclined(h),d.ignoreDeclined||(v=new Error("Aborted because of self decline: "+h.moduleId+g));break;case"declined":d.onDeclined&&d.onDeclined(h),d.ignoreDeclined||(v=new Error("Aborted because of declined dependency: "+h.moduleId+" in "+h.parentId+g));break;case"unaccepted":d.onUnaccepted&&d.onUnaccepted(h),d.ignoreUnaccepted||(v=new Error("Aborted because "+p+" is not accepted"+g));break;case"accepted":d.onAccepted&&d.onAccepted(h),b=!0;break;case"disposed":d.onDisposed&&d.onDisposed(h),y=!0;break;default:throw new Error("Unexception type "+h.type)}if(v)return{error:v};if(b)for(p in u[p]=m,a(l,h.outdatedModules),h.outdatedDependencies)s.o(h.outdatedDependencies,p)&&(c[p]||(c[p]=[]),a(c[p],h.outdatedDependencies[p]));y&&(a(l,[h.moduleId]),u[p]=f)}n=void 0;for(var w,E=[],_=0;_<l.length;_++){var k=l[_];s.c[k]&&s.c[k].hot._selfAccepted&&u[k]!==f&&!s.c[k].hot._selfInvalidated&&E.push({module:k,require:s.c[k].hot._requireSelf,errorHandler:s.c[k].hot._selfAccepted})}return{dispose:function(){var r;t.forEach((function(r){delete e[r]})),t=void 0;for(var n,o=l.slice();o.length>0;){var d=o.pop(),i=s.c[d];if(i){var a={},u=i.hot._disposeHandlers;for(_=0;_<u.length;_++)u[_].call(null,a);for(s.hmrD[d]=a,i.hot.active=!1,delete s.c[d],delete c[d],_=0;_<i.children.length;_++){var f=s.c[i.children[_]];f&&(r=f.parents.indexOf(d))>=0&&f.parents.splice(r,1)}}}for(var p in c)if(s.o(c,p)&&(i=s.c[p]))for(w=c[p],_=0;_<w.length;_++)n=w[_],(r=i.children.indexOf(n))>=0&&i.children.splice(r,1)},apply:function(e){for(var r in u)s.o(u,r)&&(s.m[r]=u[r]);for(var n=0;n<o.length;n++)o[n](s);for(var t in c)if(s.o(c,t)){var i=s.c[t];if(i){w=c[t];for(var a=[],f=[],p=0;p<w.length;p++){var h=w[p],m=i.hot._acceptedDependencies[h];if(m){if(-1!==a.indexOf(m))continue;a.push(m),f.push(h)}}for(var v=0;v<a.length;v++)try{a[v].call(null,w)}catch(r){d.onErrored&&d.onErrored({type:"accept-errored",moduleId:t,dependencyId:f[v],error:r}),d.ignoreErrored||e(r)}}}for(var b=0;b<E.length;b++){var y=E[b],g=y.module;try{y.require(g)}catch(r){if("function"==typeof y.errorHandler)try{y.errorHandler(r)}catch(n){d.onErrored&&d.onErrored({type:"self-accept-error-handler-errored",moduleId:g,error:n,originalError:r}),d.ignoreErrored||e(n),e(r)}else d.onErrored&&d.onErrored({type:"self-accept-errored",moduleId:g,error:r}),d.ignoreErrored||e(r)}}return l}}}self.webpackHotUpdatecloud_tutorials_frontend=(e,r,t)=>{for(var i in r)s.o(r,i)&&(n[i]=r[i]);t&&o.push(t),d[e]&&(d[e](),d[e]=void 0)},s.hmrI.jsonp=function(e,r){n||(n={},o=[],t=[],r.push(a)),s.o(n,e)||(n[e]=s.m[e])},s.hmrC.jsonp=function(d,c,l,u,f,p){f.push(a),r={},t=c,n=l.reduce((function(e,r){return e[r]=!1,e}),{}),o=[],d.forEach((function(n){s.o(e,n)&&void 0!==e[n]&&(u.push(i(n)),r[n]=!0)})),s.f&&(s.f.jsonpHmr=function(n,t){r&&!s.o(r,n)&&s.o(e,n)&&void 0!==e[n]&&(t.push(i(n)),r[n]=!0)})},s.hmrM=()=>{if("undefined"==typeof fetch)throw new Error("No browser support: need fetch API");return fetch(s.p+s.hmrF()).then((e=>{if(404!==e.status){if(!e.ok)throw new Error("Failed to fetch update manifest "+e.statusText);return e.json()}}))};var c=(r,n)=>{for(var t,o,[d,i,a]=n,c=0,l=[];c<d.length;c++)o=d[c],s.o(e,o)&&e[o]&&l.push(e[o][0]),e[o]=0;for(t in i)s.o(i,t)&&(s.m[t]=i[t]);for(a&&a(s),r&&r(n);l.length;)l.shift()()},l=self.webpackChunkcloud_tutorials_frontend=self.webpackChunkcloud_tutorials_frontend||[];l.forEach(c.bind(null,0)),l.push=c.bind(null,l.push.bind(l))})(),s(374)})();
//# sourceMappingURL=App.237fcc0cd00662e3a54f.js.map