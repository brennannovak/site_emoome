// If no console.log() exists
window.console||(window.console={log:$.noop,group:$.noop,groupEnd:$.noop,info:$.noop,error:$.noop});window.Modernizr=function(e,t,n){function T(e){f.cssText=e}function N(e,t){return T(prefixes.join(e+";")+(t||""))}function C(e,t){return typeof e===t}function k(e,t){return!!~(""+e).indexOf(t)}function L(e,t){for(var r in e){var i=e[r];if(!k(i,"-")&&f[i]!==n)return t=="pfx"?i:!0}return!1}function A(e,t,r){for(var i in e){var s=t[e[i]];if(s!==n)return r===!1?e[i]:C(s,"function")?s.bind(r||t):s}return!1}function O(e,t,n){var r=e.charAt(0).toUpperCase()+e.slice(1),i=(e+" "+d.join(r+" ")+r).split(" ");if(C(t,"string")||C(t,"undefined"))return L(i,t);i=(e+" "+v.join(r+" ")+r).split(" ");return A(i,t,n)}function M(){i.input=function(n){for(var r=0,i=n.length;r<i;r++)y[n[r]]=n[r]in l;y.list&&(y.list=!!t.createElement("datalist")&&!!e.HTMLDataListElement);return y}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" "));i.inputtypes=function(e){for(var r=0,i,s,u,a=e.length;r<a;r++){l.setAttribute("type",s=e[r]);i=l.type!=="text";if(i){l.value=c;l.style.cssText="position:absolute;visibility:hidden;";if(/^range$/.test(s)&&l.style.WebkitAppearance!==n){o.appendChild(l);u=t.defaultView;i=u.getComputedStyle&&u.getComputedStyle(l,null).WebkitAppearance!=="textfield"&&l.offsetHeight!==0;o.removeChild(l)}else/^(search|tel)$/.test(s)||(/^(url|email)$/.test(s)?i=l.checkValidity&&l.checkValidity()===!1:i=l.value!=c)}g[e[r]]=!!i}return g}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var r="2.6.2",i={},s=!0,o=t.documentElement,u="modernizr",a=t.createElement(u),f=a.style,l=t.createElement("input"),c=":)",h={}.toString,p="Webkit Moz O ms",d=p.split(" "),v=p.toLowerCase().split(" "),m={},g={},y={},b=[],w=b.slice,E,S={}.hasOwnProperty,x;!C(S,"undefined")&&!C(S.call,"undefined")?x=function(e,t){return S.call(e,t)}:x=function(e,t){return t in e&&C(e.constructor.prototype[t],"undefined")};Function.prototype.bind||(Function.prototype.bind=function(t){var n=this;if(typeof n!="function")throw new TypeError;var r=w.call(arguments,1),i=function(){if(this instanceof i){var e=function(){};e.prototype=n.prototype;var s=new e,o=n.apply(s,r.concat(w.call(arguments)));return Object(o)===o?o:s}return n.apply(t,r.concat(w.call(arguments)))};return i});m.geolocation=function(){return"geolocation"in navigator};m.boxshadow=function(){return O("boxShadow")};m.localstorage=function(){try{localStorage.setItem(u,u);localStorage.removeItem(u);return!0}catch(e){return!1}};for(var _ in m)if(x(m,_)){E=_.toLowerCase();i[E]=m[_]();b.push((i[E]?"":"no-")+E)}i.input||M();i.addTest=function(e,t){if(typeof e=="object")for(var r in e)x(e,r)&&i.addTest(r,e[r]);else{e=e.toLowerCase();if(i[e]!==n)return i;t=typeof t=="function"?t():t;typeof s!="undefined"&&s&&(o.className+=" "+(t?"":"no-")+e);i[e]=t}return i};T("");a=l=null;(function(e,t){function l(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;n.innerHTML="x<style>"+t+"</style>";return r.insertBefore(n.lastChild,r.firstChild)}function c(){var e=g.elements;return typeof e=="string"?e.split(" "):e}function h(e){var t=a[e[o]];if(!t){t={};u++;e[o]=u;a[u]=t}return t}function p(e,n,s){n||(n=t);if(f)return n.createElement(e);s||(s=h(n));var o;s.cache[e]?o=s.cache[e].cloneNode():i.test(e)?o=(s.cache[e]=s.createElem(e)).cloneNode():o=s.createElem(e);return o.canHaveChildren&&!r.test(e)?s.frag.appendChild(o):o}function d(e,n){e||(e=t);if(f)return e.createDocumentFragment();n=n||h(e);var r=n.frag.cloneNode(),i=0,s=c(),o=s.length;for(;i<o;i++)r.createElement(s[i]);return r}function v(e,t){if(!t.cache){t.cache={};t.createElem=e.createElement;t.createFrag=e.createDocumentFragment;t.frag=t.createFrag()}e.createElement=function(n){return g.shivMethods?p(n,e,t):t.createElem(n)};e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+c().join().replace(/\w+/g,function(e){t.createElem(e);t.frag.createElement(e);return'c("'+e+'")'})+");return n}")(g,t.frag)}function m(e){e||(e=t);var n=h(e);g.shivCSS&&!s&&!n.hasCSS&&(n.hasCSS=!!l(e,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}"));f||v(e,n);return e}var n=e.html5||{},r=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,i=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,s,o="_html5shiv",u=0,a={},f;(function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>";s="hidden"in e;f=e.childNodes.length==1||function(){t.createElement("a");var e=t.createDocumentFragment();return typeof e.cloneNode=="undefined"||typeof e.createDocumentFragment=="undefined"||typeof e.createElement=="undefined"}()}catch(n){s=!0;f=!0}})();var g={elements:n.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:n.shivCSS!==!1,supportsUnknownElements:f,shivMethods:n.shivMethods!==!1,type:"default",shivDocument:m,createElement:p,createDocumentFragment:d};e.html5=g;m(t)})(this,t);i._version=r;i._domPrefixes=v;i._cssomPrefixes=d;i.testProp=function(e){return L([e])};i.testAllProps=O;o.className=o.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(s?" js "+b.join(" "):"");return i}(this,this.document);(function(e,t,n){function r(e){return"[object Function]"==d.call(e)}function i(e){return"string"==typeof e}function s(){}function o(e){return!e||"loaded"==e||"complete"==e||"uninitialized"==e}function u(){var e=v.shift();m=1,e?e.t?h(function(){("c"==e.t?k.injectCss:k.injectJs)(e.s,0,e.a,e.x,e.e,1)},0):(e(),u()):m=0}function a(e,n,r,i,s,a,f){function l(t){if(!d&&o(c.readyState)&&(w.r=d=1,!m&&u(),c.onload=c.onreadystatechange=null,t)){"img"!=e&&h(function(){b.removeChild(c)},50);for(var r in T[n])T[n].hasOwnProperty(r)&&T[n][r].onload()}}var f=f||k.errorTimeout,c=t.createElement(e),d=0,g=0,w={t:r,s:n,e:s,a:a,x:f};1===T[n]&&(g=1,T[n]=[]),"object"==e?c.data=n:(c.src=n,c.type=e),c.width=c.height="0",c.onerror=c.onload=c.onreadystatechange=function(){l.call(this,g)},v.splice(i,0,w),"img"!=e&&(g||2===T[n]?(b.insertBefore(c,y?null:p),h(l,f)):T[n].push(c))}function f(e,t,n,r,s){return m=0,t=t||"j",i(e)?a("c"==t?E:w,e,t,this.i++,n,r,s):(v.splice(this.i++,0,e),1==v.length&&u()),this}function l(){var e=k;return e.loader={load:f,i:0},e}var c=t.documentElement,h=e.setTimeout,p=t.getElementsByTagName("script")[0],d={}.toString,v=[],m=0,g="MozAppearance"in c.style,y=g&&!!t.createRange().compareNode,b=y?c:p.parentNode,c=e.opera&&"[object Opera]"==d.call(e.opera),c=!!t.attachEvent&&!c,w=g?"object":c?"script":"img",E=c?"script":w,S=Array.isArray||function(e){return"[object Array]"==d.call(e)},x=[],T={},N={timeout:function(e,t){return t.length&&(e.timeout=t[0]),e}},C,k;k=function(e){function t(e){var e=e.split("!"),t=x.length,n=e.pop(),r=e.length,n={url:n,origUrl:n,prefixes:e},i,s,o;for(s=0;s<r;s++)o=e[s].split("="),(i=N[o.shift()])&&(n=i(n,o));for(s=0;s<t;s++)n=x[s](n);return n}function o(e,i,s,o,u){var a=t(e),f=a.autoCallback;a.url.split(".").pop().split("?").shift(),a.bypass||(i&&(i=r(i)?i:i[e]||i[o]||i[e.split("/").pop().split("?")[0]]),a.instead?a.instead(e,i,s,o,u):(T[a.url]?a.noexec=!0:T[a.url]=1,s.load(a.url,a.forceCSS||!a.forceJS&&"css"==a.url.split(".").pop().split("?").shift()?"c":n,a.noexec,a.attrs,a.timeout),(r(i)||r(f))&&s.load(function(){l(),i&&i(a.origUrl,u,o),f&&f(a.origUrl,u,o),T[a.url]=2})))}function u(e,t){function n(e,n){if(e){if(i(e))n||(f=function(){var e=[].slice.call(arguments);l.apply(this,e),c()}),o(e,f,t,0,u);else if(Object(e)===e)for(p in h=function(){var t=0,n;for(n in e)e.hasOwnProperty(n)&&t++;return t}(),e)e.hasOwnProperty(p)&&(!n&&!--h&&(r(f)?f=function(){var e=[].slice.call(arguments);l.apply(this,e),c()}:f[p]=function(e){return function(){var t=[].slice.call(arguments);e&&e.apply(this,t),c()}}(l[p])),o(e[p],f,t,p,u))}else!n&&c()}var u=!!e.test,a=e.load||e.both,f=e.callback||s,l=f,c=e.complete||s,h,p;n(u?e.yep:e.nope,!!a),a&&n(a)}var a,f,c=this.yepnope.loader;if(i(e))o(e,0,c,0);else if(S(e))for(a=0;a<e.length;a++)f=e[a],i(f)?o(f,0,c,0):S(f)?k(f):Object(f)===f&&u(f,c);else Object(e)===e&&u(e,c)},k.addPrefix=function(e,t){N[e]=t},k.addFilter=function(e){x.push(e)},k.errorTimeout=1e4,null==t.readyState&&t.addEventListener&&(t.readyState="loading",t.addEventListener("DOMContentLoaded",C=function(){t.removeEventListener("DOMContentLoaded",C,0),t.readyState="complete"},0)),e.yepnope=l(),e.yepnope.executeStack=u,e.yepnope.injectJs=function(e,n,r,i,a,f){var l=t.createElement("script"),c,d,i=i||k.errorTimeout;l.src=e;for(d in r)l.setAttribute(d,r[d]);n=f?u:n||s,l.onreadystatechange=l.onload=function(){!c&&o(l.readyState)&&(c=1,n(),l.onload=l.onreadystatechange=null)},h(function(){c||(c=1,n(1))},i),a?l.onload():p.parentNode.insertBefore(l,p)},e.yepnope.injectCss=function(e,n,r,i,o,a){var i=t.createElement("link"),f,n=a?u:n||s;i.href=e,i.rel="stylesheet",i.type="text/css";for(f in r)i.setAttribute(f,r[f]);o||(p.parentNode.insertBefore(i,p),h(n,0))}})(this,document);Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};(function(){var e=this,t=e._,n={},r=Array.prototype,i=Object.prototype,s=Function.prototype,o=r.push,u=r.slice,a=r.concat,f=r.unshift,l=i.toString,c=i.hasOwnProperty,h=r.forEach,p=r.map,d=r.reduce,v=r.reduceRight,m=r.filter,g=r.every,y=r.some,b=r.indexOf,w=r.lastIndexOf,E=Array.isArray,S=Object.keys,x=s.bind,T=function(e){if(e instanceof T)return e;if(!(this instanceof T))return new T(e);this._wrapped=e};if(typeof exports!="undefined"){typeof module!="undefined"&&module.exports&&(exports=module.exports=T);exports._=T}else e._=T;T.VERSION="1.4.2";var N=T.each=T.forEach=function(e,t,r){if(e==null)return;if(h&&e.forEach===h)e.forEach(t,r);else if(e.length===+e.length){for(var i=0,s=e.length;i<s;i++)if(t.call(r,e[i],i,e)===n)return}else for(var o in e)if(T.has(e,o)&&t.call(r,e[o],o,e)===n)return};T.map=T.collect=function(e,t,n){var r=[];if(e==null)return r;if(p&&e.map===p)return e.map(t,n);N(e,function(e,i,s){r[r.length]=t.call(n,e,i,s)});return r};T.reduce=T.foldl=T.inject=function(e,t,n,r){var i=arguments.length>2;e==null&&(e=[]);if(d&&e.reduce===d){r&&(t=T.bind(t,r));return i?e.reduce(t,n):e.reduce(t)}N(e,function(e,s,o){if(!i){n=e;i=!0}else n=t.call(r,n,e,s,o)});if(!i)throw new TypeError("Reduce of empty array with no initial value");return n};T.reduceRight=T.foldr=function(e,t,n,r){var i=arguments.length>2;e==null&&(e=[]);if(v&&e.reduceRight===v){r&&(t=T.bind(t,r));return arguments.length>2?e.reduceRight(t,n):e.reduceRight(t)}var s=e.length;if(s!==+s){var o=T.keys(e);s=o.length}N(e,function(u,a,f){a=o?o[--s]:--s;if(!i){n=e[a];i=!0}else n=t.call(r,n,e[a],a,f)});if(!i)throw new TypeError("Reduce of empty array with no initial value");return n};T.find=T.detect=function(e,t,n){var r;C(e,function(e,i,s){if(t.call(n,e,i,s)){r=e;return!0}});return r};T.filter=T.select=function(e,t,n){var r=[];if(e==null)return r;if(m&&e.filter===m)return e.filter(t,n);N(e,function(e,i,s){t.call(n,e,i,s)&&(r[r.length]=e)});return r};T.reject=function(e,t,n){var r=[];if(e==null)return r;N(e,function(e,i,s){t.call(n,e,i,s)||(r[r.length]=e)});return r};T.every=T.all=function(e,t,r){t||(t=T.identity);var i=!0;if(e==null)return i;if(g&&e.every===g)return e.every(t,r);N(e,function(e,s,o){if(!(i=i&&t.call(r,e,s,o)))return n});return!!i};var C=T.some=T.any=function(e,t,r){t||(t=T.identity);var i=!1;if(e==null)return i;if(y&&e.some===y)return e.some(t,r);N(e,function(e,s,o){if(i||(i=t.call(r,e,s,o)))return n});return!!i};T.contains=T.include=function(e,t){var n=!1;if(e==null)return n;if(b&&e.indexOf===b)return e.indexOf(t)!=-1;n=C(e,function(e){return e===t});return n};T.invoke=function(e,t){var n=u.call(arguments,2);return T.map(e,function(e){return(T.isFunction(t)?t:e[t]).apply(e,n)})};T.pluck=function(e,t){return T.map(e,function(e){return e[t]})};T.where=function(e,t){return T.isEmpty(t)?[]:T.filter(e,function(e){for(var n in t)if(t[n]!==e[n])return!1;return!0})};T.max=function(e,t,n){if(!t&&T.isArray(e)&&e[0]===+e[0]&&e.length<65535)return Math.max.apply(Math,e);if(!t&&T.isEmpty(e))return-Infinity;var r={computed:-Infinity};N(e,function(e,i,s){var o=t?t.call(n,e,i,s):e;o>=r.computed&&(r={value:e,computed:o})});return r.value};T.min=function(e,t,n){if(!t&&T.isArray(e)&&e[0]===+e[0]&&e.length<65535)return Math.min.apply(Math,e);if(!t&&T.isEmpty(e))return Infinity;var r={computed:Infinity};N(e,function(e,i,s){var o=t?t.call(n,e,i,s):e;o<r.computed&&(r={value:e,computed:o})});return r.value};T.shuffle=function(e){var t,n=0,r=[];N(e,function(e){t=T.random(n++);r[n-1]=r[t];r[t]=e});return r};var k=function(e){return T.isFunction(e)?e:function(t){return t[e]}};T.sortBy=function(e,t,n){var r=k(t);return T.pluck(T.map(e,function(e,t,i){return{value:e,index:t,criteria:r.call(n,e,t,i)}}).sort(function(e,t){var n=e.criteria,r=t.criteria;if(n!==r){if(n>r||n===void 0)return 1;if(n<r||r===void 0)return-1}return e.index<t.index?-1:1}),"value")};var L=function(e,t,n,r){var i={},s=k(t);N(e,function(t,o){var u=s.call(n,t,o,e);r(i,u,t)});return i};T.groupBy=function(e,t,n){return L(e,t,n,function(e,t,n){(T.has(e,t)?e[t]:e[t]=[]).push(n)})};T.countBy=function(e,t,n){return L(e,t,n,function(e,t,n){T.has(e,t)||(e[t]=0);e[t]++})};T.sortedIndex=function(e,t,n,r){n=n==null?T.identity:k(n);var i=n.call(r,t),s=0,o=e.length;while(s<o){var u=s+o>>>1;n.call(r,e[u])<i?s=u+1:o=u}return s};T.toArray=function(e){return e?e.length===+e.length?u.call(e):T.values(e):[]};T.size=function(e){return e.length===+e.length?e.length:T.keys(e).length};T.first=T.head=T.take=function(e,t,n){return t!=null&&!n?u.call(e,0,t):e[0]};T.initial=function(e,t,n){return u.call(e,0,e.length-(t==null||n?1:t))};T.last=function(e,t,n){return t!=null&&!n?u.call(e,Math.max(e.length-t,0)):e[e.length-1]};T.rest=T.tail=T.drop=function(e,t,n){return u.call(e,t==null||n?1:t)};T.compact=function(e){return T.filter(e,function(e){return!!e})};var A=function(e,t,n){N(e,function(e){T.isArray(e)?t?o.apply(n,e):A(e,t,n):n.push(e)});return n};T.flatten=function(e,t){return A(e,t,[])};T.without=function(e){return T.difference(e,u.call(arguments,1))};T.uniq=T.unique=function(e,t,n,r){var i=n?T.map(e,n,r):e,s=[],o=[];N(i,function(n,r){if(t?!r||o[o.length-1]!==n:!T.contains(o,n)){o.push(n);s.push(e[r])}});return s};T.union=function(){return T.uniq(a.apply(r,arguments))};T.intersection=function(e){var t=u.call(arguments,1);return T.filter(T.uniq(e),function(e){return T.every(t,function(t){return T.indexOf(t,e)>=0})})};T.difference=function(e){var t=a.apply(r,u.call(arguments,1));return T.filter(e,function(e){return!T.contains(t,e)})};T.zip=function(){var e=u.call(arguments),t=T.max(T.pluck(e,"length")),n=new Array(t);for(var r=0;r<t;r++)n[r]=T.pluck(e,""+r);return n};T.object=function(e,t){var n={};for(var r=0,i=e.length;r<i;r++)t?n[e[r]]=t[r]:n[e[r][0]]=e[r][1];return n};T.indexOf=function(e,t,n){if(e==null)return-1;var r=0,i=e.length;if(n){if(typeof n!="number"){r=T.sortedIndex(e,t);return e[r]===t?r:-1}r=n<0?Math.max(0,i+n):n}if(b&&e.indexOf===b)return e.indexOf(t,n);for(;r<i;r++)if(e[r]===t)return r;return-1};T.lastIndexOf=function(e,t,n){if(e==null)return-1;var r=n!=null;if(w&&e.lastIndexOf===w)return r?e.lastIndexOf(t,n):e.lastIndexOf(t);var i=r?n:e.length;while(i--)if(e[i]===t)return i;return-1};T.range=function(e,t,n){if(arguments.length<=1){t=e||0;e=0}n=arguments[2]||1;var r=Math.max(Math.ceil((t-e)/n),0),i=0,s=new Array(r);while(i<r){s[i++]=e;e+=n}return s};var O=function(){};T.bind=function(t,n){var r,i;if(t.bind===x&&x)return x.apply(t,u.call(arguments,1));if(!T.isFunction(t))throw new TypeError;i=u.call(arguments,2);return r=function(){if(this instanceof r){O.prototype=t.prototype;var e=new O,s=t.apply(e,i.concat(u.call(arguments)));return Object(s)===s?s:e}return t.apply(n,i.concat(u.call(arguments)))}};T.bindAll=function(e){var t=u.call(arguments,1);t.length==0&&(t=T.functions(e));N(t,function(t){e[t]=T.bind(e[t],e)});return e};T.memoize=function(e,t){var n={};t||(t=T.identity);return function(){var r=t.apply(this,arguments);return T.has(n,r)?n[r]:n[r]=e.apply(this,arguments)}};T.delay=function(e,t){var n=u.call(arguments,2);return setTimeout(function(){return e.apply(null,n)},t)};T.defer=function(e){return T.delay.apply(T,[e,1].concat(u.call(arguments,1)))};T.throttle=function(e,t){var n,r,i,s,o,u,a=T.debounce(function(){o=s=!1},t);return function(){n=this;r=arguments;var f=function(){i=null;o&&(u=e.apply(n,r));a()};i||(i=setTimeout(f,t));if(s)o=!0;else{s=!0;u=e.apply(n,r)}a();return u}};T.debounce=function(e,t,n){var r,i;return function(){var s=this,o=arguments,u=function(){r=null;n||(i=e.apply(s,o))},a=n&&!r;clearTimeout(r);r=setTimeout(u,t);a&&(i=e.apply(s,o));return i}};T.once=function(e){var t=!1,n;return function(){if(t)return n;t=!0;n=e.apply(this,arguments);e=null;return n}};T.wrap=function(e,t){return function(){var n=[e];o.apply(n,arguments);return t.apply(this,n)}};T.compose=function(){var e=arguments;return function(){var t=arguments;for(var n=e.length-1;n>=0;n--)t=[e[n].apply(this,t)];return t[0]}};T.after=function(e,t){return e<=0?t():function(){if(--e<1)return t.apply(this,arguments)}};T.keys=S||function(e){if(e!==Object(e))throw new TypeError("Invalid object");var t=[];for(var n in e)T.has(e,n)&&(t[t.length]=n);return t};T.values=function(e){var t=[];for(var n in e)T.has(e,n)&&t.push(e[n]);return t};T.pairs=function(e){var t=[];for(var n in e)T.has(e,n)&&t.push([n,e[n]]);return t};T.invert=function(e){var t={};for(var n in e)T.has(e,n)&&(t[e[n]]=n);return t};T.functions=T.methods=function(e){var t=[];for(var n in e)T.isFunction(e[n])&&t.push(n);return t.sort()};T.extend=function(e){N(u.call(arguments,1),function(t){for(var n in t)e[n]=t[n]});return e};T.pick=function(e){var t={},n=a.apply(r,u.call(arguments,1));N(n,function(n){n in e&&(t[n]=e[n])});return t};T.omit=function(e){var t={},n=a.apply(r,u.call(arguments,1));for(var i in e)T.contains(n,i)||(t[i]=e[i]);return t};T.defaults=function(e){N(u.call(arguments,1),function(t){for(var n in t)e[n]==null&&(e[n]=t[n])});return e};T.clone=function(e){return T.isObject(e)?T.isArray(e)?e.slice():T.extend({},e):e};T.tap=function(e,t){t(e);return e};var M=function(e,t,n,r){if(e===t)return e!==0||1/e==1/t;if(e==null||t==null)return e===t;e instanceof T&&(e=e._wrapped);t instanceof T&&(t=t._wrapped);var i=l.call(e);if(i!=l.call(t))return!1;switch(i){case"[object String]":return e==String(t);case"[object Number]":return e!=+e?t!=+t:e==0?1/e==1/t:e==+t;case"[object Date]":case"[object Boolean]":return+e==+t;case"[object RegExp]":return e.source==t.source&&e.global==t.global&&e.multiline==t.multiline&&e.ignoreCase==t.ignoreCase}if(typeof e!="object"||typeof t!="object")return!1;var s=n.length;while(s--)if(n[s]==e)return r[s]==t;n.push(e);r.push(t);var o=0,u=!0;if(i=="[object Array]"){o=e.length;u=o==t.length;if(u)while(o--)if(!(u=M(e[o],t[o],n,r)))break}else{var a=e.constructor,f=t.constructor;if(a!==f&&!(T.isFunction(a)&&a instanceof a&&T.isFunction(f)&&f instanceof f))return!1;for(var c in e)if(T.has(e,c)){o++;if(!(u=T.has(t,c)&&M(e[c],t[c],n,r)))break}if(u){for(c in t)if(T.has(t,c)&&!(o--))break;u=!o}}n.pop();r.pop();return u};T.isEqual=function(e,t){return M(e,t,[],[])};T.isEmpty=function(e){if(e==null)return!0;if(T.isArray(e)||T.isString(e))return e.length===0;for(var t in e)if(T.has(e,t))return!1;return!0};T.isElement=function(e){return!!e&&e.nodeType===1};T.isArray=E||function(e){return l.call(e)=="[object Array]"};T.isObject=function(e){return e===Object(e)};N(["Arguments","Function","String","Number","Date","RegExp"],function(e){T["is"+e]=function(t){return l.call(t)=="[object "+e+"]"}});T.isArguments(arguments)||(T.isArguments=function(e){return!!e&&!!T.has(e,"callee")});typeof /./!="function"&&(T.isFunction=function(e){return typeof e=="function"});T.isFinite=function(e){return T.isNumber(e)&&isFinite(e)};T.isNaN=function(e){return T.isNumber(e)&&e!=+e};T.isBoolean=function(e){return e===!0||e===!1||l.call(e)=="[object Boolean]"};T.isNull=function(e){return e===null};T.isUndefined=function(e){return e===void 0};T.has=function(e,t){return c.call(e,t)};T.noConflict=function(){e._=t;return this};T.identity=function(e){return e};T.times=function(e,t,n){for(var r=0;r<e;r++)t.call(n,r)};T.random=function(e,t){if(t==null){t=e;e=0}return e+(0|Math.random()*(t-e+1))};var _={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"}};_.unescape=T.invert(_.escape);var D={escape:new RegExp("["+T.keys(_.escape).join("")+"]","g"),unescape:new RegExp("("+T.keys(_.unescape).join("|")+")","g")};T.each(["escape","unescape"],function(e){T[e]=function(t){return t==null?"":(""+t).replace(D[e],function(t){return _[e][t]})}});T.result=function(e,t){if(e==null)return null;var n=e[t];return T.isFunction(n)?n.call(e):n};T.mixin=function(e){N(T.functions(e),function(t){var n=T[t]=e[t];T.prototype[t]=function(){var e=[this._wrapped];o.apply(e,arguments);return F.call(this,n.apply(T,e))}})};var P=0;T.uniqueId=function(e){var t=P++;return e?e+t:t};T.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var H=/(.)^/,B={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},j=/\\|'|\r|\n|\t|\u2028|\u2029/g;T.template=function(e,t,n){n=T.defaults({},n,T.templateSettings);var r=new RegExp([(n.escape||H).source,(n.interpolate||H).source,(n.evaluate||H).source].join("|")+"|$","g"),i=0,s="__p+='";e.replace(r,function(t,n,r,o,u){s+=e.slice(i,u).replace(j,function(e){return"\\"+B[e]});s+=n?"'+\n((__t=("+n+"))==null?'':_.escape(__t))+\n'":r?"'+\n((__t=("+r+"))==null?'':__t)+\n'":o?"';\n"+o+"\n__p+='":"";i=u+t.length});s+="';\n";n.variable||(s="with(obj||{}){\n"+s+"}\n");s="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+s+"return __p;\n";try{var o=new Function(n.variable||"obj","_",s)}catch(u){u.source=s;throw u}if(t)return o(t,T);var a=function(e){return o.call(this,e,T)};a.source="function("+(n.variable||"obj")+"){\n"+s+"}";return a};T.chain=function(e){return T(e).chain()};var F=function(e){return this._chain?T(e).chain():e};T.mixin(T);N(["pop","push","reverse","shift","sort","splice","unshift"],function(e){var t=r[e];T.prototype[e]=function(){var n=this._wrapped;t.apply(n,arguments);(e=="shift"||e=="splice")&&n.length===0&&delete n[0];return F.call(this,n)}});N(["concat","join","slice"],function(e){var t=r[e];T.prototype[e]=function(){return F.call(this,t.apply(this._wrapped,arguments))}});T.extend(T.prototype,{chain:function(){this._chain=!0;return this},value:function(){return this._wrapped}})}).call(this);(function(){var e=this,t=e.Backbone,n=Array.prototype.slice,r=Array.prototype.splice,i;typeof exports!="undefined"?i=exports:i=e.Backbone={};i.VERSION="0.9.2";var s=e._;!s&&typeof require!="undefined"&&(s=require("underscore"));var o=e.jQuery||e.Zepto||e.ender;i.setDomLibrary=function(e){o=e};i.noConflict=function(){e.Backbone=t;return this};i.emulateHTTP=!1;i.emulateJSON=!1;var u=/\s+/,a=i.Events={on:function(e,t,n){var r,i,s,o,a;if(!t)return this;e=e.split(u);r=this._callbacks||(this._callbacks={});while(i=e.shift()){a=r[i];s=a?a.tail:{};s.next=o={};s.context=n;s.callback=t;r[i]={tail:o,next:a?a.next:s}}return this},off:function(e,t,n){var r,i,o,a,f,l;if(!(i=this._callbacks))return;if(!(e||t||n)){delete this._callbacks;return this}e=e?e.split(u):s.keys(i);while(r=e.shift()){o=i[r];delete i[r];if(!o||!t&&!n)continue;a=o.tail;while((o=o.next)!==a){f=o.callback;l=o.context;(t&&f!==t||n&&l!==n)&&this.on(r,f,l)}}return this},trigger:function(e){var t,r,i,s,o,a,f;if(!(i=this._callbacks))return this;a=i.all;e=e.split(u);f=n.call(arguments,1);while(t=e.shift()){if(r=i[t]){s=r.tail;while((r=r.next)!==s)r.callback.apply(r.context||this,f)}if(r=a){s=r.tail;o=[t].concat(f);while((r=r.next)!==s)r.callback.apply(r.context||this,o)}}return this}};a.bind=a.on;a.unbind=a.off;var f=i.Model=function(e,t){var n;e||(e={});t&&t.parse&&(e=this.parse(e));if(n=C(this,"defaults"))e=s.extend({},n,e);t&&t.collection&&(this.collection=t.collection);this.attributes={};this._escapedAttributes={};this.cid=s.uniqueId("c");this.changed={};this._silent={};this._pending={};this.set(e,{silent:!0});this.changed={};this._silent={};this._pending={};this._previousAttributes=s.clone(this.attributes);this.initialize.apply(this,arguments)};s.extend(f.prototype,a,{changed:null,_silent:null,_pending:null,idAttribute:"id",initialize:function(){},toJSON:function(e){return s.clone(this.attributes)},get:function(e){return this.attributes[e]},escape:function(e){var t;if(t=this._escapedAttributes[e])return t;var n=this.get(e);return this._escapedAttributes[e]=s.escape(n==null?"":""+n)},has:function(e){return this.get(e)!=null},set:function(e,t,n){var r,i,o;if(s.isObject(e)||e==null){r=e;n=t}else{r={};r[e]=t}n||(n={});if(!r)return this;r instanceof f&&(r=r.attributes);if(n.unset)for(i in r)r[i]=void 0;if(!this._validate(r,n))return!1;this.idAttribute in r&&(this.id=r[this.idAttribute]);var u=n.changes={},a=this.attributes,l=this._escapedAttributes,c=this._previousAttributes||{};for(i in r){o=r[i];if(!s.isEqual(a[i],o)||n.unset&&s.has(a,i)){delete l[i];(n.silent?this._silent:u)[i]=!0}n.unset?delete a[i]:a[i]=o;if(!s.isEqual(c[i],o)||s.has(a,i)!=s.has(c,i)){this.changed[i]=o;n.silent||(this._pending[i]=!0)}else{delete this.changed[i];delete this._pending[i]}}n.silent||this.change(n);return this},unset:function(e,t){(t||(t={})).unset=!0;return this.set(e,null,t)},clear:function(e){(e||(e={})).unset=!0;return this.set(s.clone(this.attributes),e)},fetch:function(e){e=e?s.clone(e):{};var t=this,n=e.success;e.success=function(r,i,s){if(!t.set(t.parse(r,s),e))return!1;n&&n(t,r)};e.error=i.wrapError(e.error,t,e);return(this.sync||i.sync).call(this,"read",this,e)},save:function(e,t,n){var r,o;if(s.isObject(e)||e==null){r=e;n=t}else{r={};r[e]=t}n=n?s.clone(n):{};if(n.wait){if(!this._validate(r,n))return!1;o=s.clone(this.attributes)}var u=s.extend({},n,{silent:!0});if(r&&!this.set(r,n.wait?u:n))return!1;var a=this,f=n.success;n.success=function(e,t,i){var o=a.parse(e,i);if(n.wait){delete n.wait;o=s.extend(r||{},o)}if(!a.set(o,n))return!1;f?f(a,e):a.trigger("sync",a,e,n)};n.error=i.wrapError(n.error,a,n);var l=this.isNew()?"create":"update",c=(this.sync||i.sync).call(this,l,this,n);n.wait&&this.set(o,u);return c},destroy:function(e){e=e?s.clone(e):{};var t=this,n=e.success,r=function(){t.trigger("destroy",t,t.collection,e)};if(this.isNew()){r();return!1}e.success=function(i){e.wait&&r();n?n(t,i):t.trigger("sync",t,i,e)};e.error=i.wrapError(e.error,t,e);var o=(this.sync||i.sync).call(this,"delete",this,e);e.wait||r();return o},url:function(){var e=C(this,"urlRoot")||C(this.collection,"url")||k();return this.isNew()?e:e+(e.charAt(e.length-1)=="/"?"":"/")+encodeURIComponent(this.id)},parse:function(e,t){return e},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return this.id==null},change:function(e){e||(e={});var t=this._changing;this._changing=!0;for(var n in this._silent)this._pending[n]=!0;var r=s.extend({},e.changes,this._silent);this._silent={};for(var n in r)this.trigger("change:"+n,this,this.get(n),e);if(t)return this;while(!s.isEmpty(this._pending)){this._pending={};this.trigger("change",this,e);for(var n in this.changed){if(this._pending[n]||this._silent[n])continue;delete this.changed[n]}this._previousAttributes=s.clone(this.attributes)}this._changing=!1;return this},hasChanged:function(e){return arguments.length?s.has(this.changed,e):!s.isEmpty(this.changed)},changedAttributes:function(e){if(!e)return this.hasChanged()?s.clone(this.changed):!1;var t,n=!1,r=this._previousAttributes;for(var i in e){if(s.isEqual(r[i],t=e[i]))continue;(n||(n={}))[i]=t}return n},previous:function(e){return!arguments.length||!this._previousAttributes?null:this._previousAttributes[e]},previousAttributes:function(){return s.clone(this._previousAttributes)},isValid:function(){return!this.validate(this.attributes)},_validate:function(e,t){if(t.silent||!this.validate)return!0;e=s.extend({},this.attributes,e);var n=this.validate(e,t);if(!n)return!0;t&&t.error?t.error(this,n,t):this.trigger("error",this,n,t);return!1}});var l=i.Collection=function(e,t){t||(t={});t.model&&(this.model=t.model);t.comparator&&(this.comparator=t.comparator);this._reset();this.initialize.apply(this,arguments);e&&this.reset(e,{silent:!0,parse:t.parse})};s.extend(l.prototype,a,{model:f,initialize:function(){},toJSON:function(e){return this.map(function(t){return t.toJSON(e)})},add:function(e,t){var n,i,o,u,a,f,l={},c={},h=[];t||(t={});e=s.isArray(e)?e.slice():[e];for(n=0,o=e.length;n<o;n++){if(!(u=e[n]=this._prepareModel(e[n],t)))throw new Error("Can't add an invalid model to a collection");a=u.cid;f=u.id;if(l[a]||this._byCid[a]||f!=null&&(c[f]||this._byId[f])){h.push(n);continue}l[a]=c[f]=u}n=h.length;while(n--)e.splice(h[n],1);for(n=0,o=e.length;n<o;n++){(u=e[n]).on("all",this._onModelEvent,this);this._byCid[u.cid]=u;u.id!=null&&(this._byId[u.id]=u)}this.length+=o;i=t.at!=null?t.at:this.models.length;r.apply(this.models,[i,0].concat(e));this.comparator&&this.sort({silent:!0});if(t.silent)return this;for(n=0,o=this.models.length;n<o;n++){if(!l[(u=this.models[n]).cid])continue;t.index=n;u.trigger("add",u,this,t)}return this},remove:function(e,t){var n,r,i,o;t||(t={});e=s.isArray(e)?e.slice():[e];for(n=0,r=e.length;n<r;n++){o=this.getByCid(e[n])||this.get(e[n]);if(!o)continue;delete this._byId[o.id];delete this._byCid[o.cid];i=this.indexOf(o);this.models.splice(i,1);this.length--;if(!t.silent){t.index=i;o.trigger("remove",o,this,t)}this._removeReference(o)}return this},push:function(e,t){e=this._prepareModel(e,t);this.add(e,t);return e},pop:function(e){var t=this.at(this.length-1);this.remove(t,e);return t},unshift:function(e,t){e=this._prepareModel(e,t);this.add(e,s.extend({at:0},t));return e},shift:function(e){var t=this.at(0);this.remove(t,e);return t},get:function(e){return e==null?void 0:this._byId[e.id!=null?e.id:e]},getByCid:function(e){return e&&this._byCid[e.cid||e]},at:function(e){return this.models[e]},where:function(e){return s.isEmpty(e)?[]:this.filter(function(t){for(var n in e)if(e[n]!==t.get(n))return!1;return!0})},sort:function(e){e||(e={});if(!this.comparator)throw new Error("Cannot sort a set without a comparator");var t=s.bind(this.comparator,this);this.comparator.length==1?this.models=this.sortBy(t):this.models.sort(t);e.silent||this.trigger("reset",this,e);return this},pluck:function(e){return s.map(this.models,function(t){return t.get(e)})},reset:function(e,t){e||(e=[]);t||(t={});for(var n=0,r=this.models.length;n<r;n++)this._removeReference(this.models[n]);this._reset();this.add(e,s.extend({silent:!0},t));t.silent||this.trigger("reset",this,t);return this},fetch:function(e){e=e?s.clone(e):{};e.parse===undefined&&(e.parse=!0);var t=this,n=e.success;e.success=function(r,i,s){t[e.add?"add":"reset"](t.parse(r,s),e);n&&n(t,r)};e.error=i.wrapError(e.error,t,e);return(this.sync||i.sync).call(this,"read",this,e)},create:function(e,t){var n=this;t=t?s.clone(t):{};e=this._prepareModel(e,t);if(!e)return!1;t.wait||n.add(e,t);var r=t.success;t.success=function(i,s,o){t.wait&&n.add(i,t);r?r(i,s):i.trigger("sync",e,s,t)};e.save(null,t);return e},parse:function(e,t){return e},chain:function(){return s(this.models).chain()},_reset:function(e){this.length=0;this.models=[];this._byId={};this._byCid={}},_prepareModel:function(e,t){t||(t={});if(e instanceof f)e.collection||(e.collection=this);else{var n=e;t.collection=this;e=new this.model(n,t);e._validate(e.attributes,t)||(e=!1)}return e},_removeReference:function(e){this==e.collection&&delete e.collection;e.off("all",this._onModelEvent,this)},_onModelEvent:function(e,t,n,r){if((e=="add"||e=="remove")&&n!=this)return;e=="destroy"&&this.remove(t,r);if(t&&e==="change:"+t.idAttribute){delete this._byId[t.previous(t.idAttribute)];this._byId[t.id]=t}this.trigger.apply(this,arguments)}});var c=["forEach","each","map","reduce","reduceRight","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","max","min","sortBy","sortedIndex","toArray","size","first","initial","rest","last","without","indexOf","shuffle","lastIndexOf","isEmpty","groupBy"];s.each(c,function(e){l.prototype[e]=function(){return s[e].apply(s,[this.models].concat(s.toArray(arguments)))}});var h=i.Router=function(e){e||(e={});e.routes&&(this.routes=e.routes);this._bindRoutes();this.initialize.apply(this,arguments)},p=/:\w+/g,d=/\*\w+/g,v=/[-[\]{}()+?.,\\^$|#\s]/g;s.extend(h.prototype
,a,{initialize:function(){},route:function(e,t,n){i.history||(i.history=new m);s.isRegExp(e)||(e=this._routeToRegExp(e));n||(n=this[t]);i.history.route(e,s.bind(function(r){var s=this._extractParameters(e,r);n&&n.apply(this,s);this.trigger.apply(this,["route:"+t].concat(s));i.history.trigger("route",this,t,s)},this));return this},navigate:function(e,t){i.history.navigate(e,t)},_bindRoutes:function(){if(!this.routes)return;var e=[];for(var t in this.routes)e.unshift([t,this.routes[t]]);for(var n=0,r=e.length;n<r;n++)this.route(e[n][0],e[n][1],this[e[n][1]])},_routeToRegExp:function(e){e=e.replace(v,"\\$&").replace(p,"([^/]+)").replace(d,"(.*?)");return new RegExp("^"+e+"$")},_extractParameters:function(e,t){return e.exec(t).slice(1)}});var m=i.History=function(){this.handlers=[];s.bindAll(this,"checkUrl")},g=/^[#\/]/,y=/msie [\w.]+/;m.started=!1;s.extend(m.prototype,a,{interval:50,getHash:function(e){var t=e?e.location:window.location,n=t.href.match(/#(.*)$/);return n?n[1]:""},getFragment:function(e,t){if(e==null)if(this._hasPushState||t){e=window.location.pathname;var n=window.location.search;n&&(e+=n)}else e=this.getHash();e.indexOf(this.options.root)||(e=e.substr(this.options.root.length));return e.replace(g,"")},start:function(e){if(m.started)throw new Error("Backbone.history has already been started");m.started=!0;this.options=s.extend({},{root:"/"},this.options,e);this._wantsHashChange=this.options.hashChange!==!1;this._wantsPushState=!!this.options.pushState;this._hasPushState=!!(this.options.pushState&&window.history&&window.history.pushState);var t=this.getFragment(),n=document.documentMode,r=y.exec(navigator.userAgent.toLowerCase())&&(!n||n<=7);if(r){this.iframe=o('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow;this.navigate(t)}this._hasPushState?o(window).bind("popstate",this.checkUrl):this._wantsHashChange&&"onhashchange"in window&&!r?o(window).bind("hashchange",this.checkUrl):this._wantsHashChange&&(this._checkUrlInterval=setInterval(this.checkUrl,this.interval));this.fragment=t;var i=window.location,u=i.pathname==this.options.root;if(this._wantsHashChange&&this._wantsPushState&&!this._hasPushState&&!u){this.fragment=this.getFragment(null,!0);window.location.replace(this.options.root+"#"+this.fragment);return!0}if(this._wantsPushState&&this._hasPushState&&u&&i.hash){this.fragment=this.getHash().replace(g,"");window.history.replaceState({},document.title,i.protocol+"//"+i.host+this.options.root+this.fragment)}if(!this.options.silent)return this.loadUrl()},stop:function(){o(window).unbind("popstate",this.checkUrl).unbind("hashchange",this.checkUrl);clearInterval(this._checkUrlInterval);m.started=!1},route:function(e,t){this.handlers.unshift({route:e,callback:t})},checkUrl:function(e){var t=this.getFragment();t==this.fragment&&this.iframe&&(t=this.getFragment(this.getHash(this.iframe)));if(t==this.fragment)return!1;this.iframe&&this.navigate(t);this.loadUrl()||this.loadUrl(this.getHash())},loadUrl:function(e){var t=this.fragment=this.getFragment(e),n=s.any(this.handlers,function(e){if(e.route.test(t)){e.callback(t);return!0}});return n},navigate:function(e,t){if(!m.started)return!1;if(!t||t===!0)t={trigger:t};var n=(e||"").replace(g,"");if(this.fragment==n)return;if(this._hasPushState){n.indexOf(this.options.root)!=0&&(n=this.options.root+n);this.fragment=n;window.history[t.replace?"replaceState":"pushState"]({},document.title,n)}else if(this._wantsHashChange){this.fragment=n;this._updateHash(window.location,n,t.replace);if(this.iframe&&n!=this.getFragment(this.getHash(this.iframe))){t.replace||this.iframe.document.open().close();this._updateHash(this.iframe.location,n,t.replace)}}else window.location.assign(this.options.root+e);t.trigger&&this.loadUrl(e)},_updateHash:function(e,t,n){n?e.replace(e.toString().replace(/(javascript:|#).*$/,"")+"#"+t):e.hash=t}});var b=i.View=function(e){this.cid=s.uniqueId("view");this._configure(e||{});this._ensureElement();this.initialize.apply(this,arguments);this.delegateEvents()},w=/^(\S+)\s*(.*)$/,E=["model","collection","el","id","attributes","className","tagName"];s.extend(b.prototype,a,{tagName:"div",$:function(e){return this.$el.find(e)},initialize:function(){},render:function(){return this},remove:function(){this.$el.remove();return this},make:function(e,t,n){var r=document.createElement(e);t&&o(r).attr(t);n&&o(r).html(n);return r},setElement:function(e,t){this.$el&&this.undelegateEvents();this.$el=e instanceof o?e:o(e);this.el=this.$el[0];t!==!1&&this.delegateEvents();return this},delegateEvents:function(e){if(!e&&!(e=C(this,"events")))return;this.undelegateEvents();for(var t in e){var n=e[t];s.isFunction(n)||(n=this[e[t]]);if(!n)throw new Error('Method "'+e[t]+'" does not exist');var r=t.match(w),i=r[1],o=r[2];n=s.bind(n,this);i+=".delegateEvents"+this.cid;o===""?this.$el.bind(i,n):this.$el.delegate(o,i,n)}},undelegateEvents:function(){this.$el.unbind(".delegateEvents"+this.cid)},_configure:function(e){this.options&&(e=s.extend({},this.options,e));for(var t=0,n=E.length;t<n;t++){var r=E[t];e[r]&&(this[r]=e[r])}this.options=e},_ensureElement:function(){if(!this.el){var e=C(this,"attributes")||{};this.id&&(e.id=this.id);this.className&&(e["class"]=this.className);this.setElement(this.make(this.tagName,e),!1)}else this.setElement(this.el,!1)}});var S=function(e,t){var n=N(this,e,t);n.extend=this.extend;return n};f.extend=l.extend=h.extend=b.extend=S;var x={create:"POST",update:"PUT","delete":"DELETE",read:"GET"};i.sync=function(e,t,n){var r=x[e];n||(n={});var u={type:r,dataType:"json"};n.url||(u.url=C(t,"url")||k());if(!n.data&&t&&(e=="create"||e=="update")){u.contentType="application/json";u.data=JSON.stringify(t.toJSON())}if(i.emulateJSON){u.contentType="application/x-www-form-urlencoded";u.data=u.data?{model:u.data}:{}}if(i.emulateHTTP)if(r==="PUT"||r==="DELETE"){i.emulateJSON&&(u.data._method=r);u.type="POST";u.beforeSend=function(e){e.setRequestHeader("X-HTTP-Method-Override",r)}}u.type!=="GET"&&!i.emulateJSON&&(u.processData=!1);return o.ajax(s.extend(u,n))};i.wrapError=function(e,t,n){return function(r,i){i=r===t?i:r;e?e(t,i,n):t.trigger("error",t,i,n)}};var T=function(){},N=function(e,t,n){var r;t&&t.hasOwnProperty("constructor")?r=t.constructor:r=function(){e.apply(this,arguments)};s.extend(r,e);T.prototype=e.prototype;r.prototype=new T;t&&s.extend(r.prototype,t);n&&s.extend(r,n);r.prototype.constructor=r;r.__super__=e.prototype;return r},C=function(e,t){return!e||!e[t]?null:s.isFunction(e[t])?e[t]():e[t]},k=function(){throw new Error('A "url" property or function must be specified')}}).call(this);