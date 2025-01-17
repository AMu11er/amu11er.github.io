var codeVersion = "0.0.0.0.3";
/*! my jOueryV-1.11.1 */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l="1.11.1",m=function(a,b){return new m.fn.init(a,b)},n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,o=/^-ms-/,p=/-([\da-z])/gi,q=function(a,b){return b.toUpperCase()};m.fn=m.prototype={jquery:l,constructor:m,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=m.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return m.each(this,a,b)},map:function(a){return this.pushStack(m.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},m.extend=m.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||m.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(m.isPlainObject(c)||(b=m.isArray(c)))?(b?(b=!1,f=a&&m.isArray(a)?a:[]):f=a&&m.isPlainObject(a)?a:{},g[d]=m.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},m.extend({expando:"jQuery"+(l+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===m.type(a)},isArray:Array.isArray||function(a){return"array"===m.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!m.isArray(a)&&a-parseFloat(a)>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(k.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&m.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(o,"ms-").replace(p,q)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=r(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(n,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(r(Object(a))?m.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=r(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),m.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||m.guid++,e):void 0},now:function(){return+new Date},support:k}),m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function r(a){var b=a.length,c=m.type(a);return"function"===c||m.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var s=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+-new Date,v=a.document,w=0,x=0,y=gb(),z=gb(),A=gb(),B=function(a,b){return a===b&&(l=!0),0},C="undefined",D=1<<31,E={}.hasOwnProperty,F=[],G=F.pop,H=F.push,I=F.push,J=F.slice,K=F.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},L="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",N="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=N.replace("w","w#"),P="\\["+M+"*("+N+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+O+"))|)"+M+"*\\]",Q=":("+N+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+P+")*)|.*)\\)|)",R=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),S=new RegExp("^"+M+"*,"+M+"*"),T=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),V=new RegExp(Q),W=new RegExp("^"+O+"$"),X={ID:new RegExp("^#("+N+")"),CLASS:new RegExp("^\\.("+N+")"),TAG:new RegExp("^("+N.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+Q),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+L+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{I.apply(F=J.call(v.childNodes),v.childNodes),F[v.childNodes.length].nodeType}catch(eb){I={apply:F.length?function(a,b){H.apply(a,J.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],!a||"string"!=typeof a)return d;if(1!==(k=b.nodeType)&&9!==k)return[];if(p&&!e){if(f=_.exec(a))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return I.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return I.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=9===k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+qb(o[l]);w=ab.test(a)&&ob(b.parentNode)||b,x=o.join(",")}if(x)try{return I.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function gb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function hb(a){return a[u]=!0,a}function ib(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function jb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function kb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||D)-(~a.sourceIndex||D);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function lb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function nb(a){return hb(function(b){return b=+b,hb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function ob(a){return a&&typeof a.getElementsByTagName!==C&&a}c=fb.support={},f=fb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fb.setDocument=function(a){var b,e=a?a.ownerDocument||a:v,g=e.defaultView;return e!==n&&9===e.nodeType&&e.documentElement?(n=e,o=e.documentElement,p=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){m()},!1):g.attachEvent&&g.attachEvent("onunload",function(){m()})),c.attributes=ib(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ib(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(e.getElementsByClassName)&&ib(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=ib(function(a){return o.appendChild(a).id=u,!e.getElementsByName||!e.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==C&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c=typeof a.getAttributeNode!==C&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==C?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==C&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(e.querySelectorAll))&&(ib(function(a){a.innerHTML="<select msallowclip=''><option selected=''></option></select>",a.querySelectorAll("[msallowclip^='']").length&&q.push("[*^$]="+M+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+M+"*(?:value|"+L+")"),a.querySelectorAll(":checked").length||q.push(":checked")}),ib(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+M+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ib(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",Q)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===v&&t(v,a)?-1:b===e||b.ownerDocument===v&&t(v,b)?1:k?K.call(k,a)-K.call(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],i=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:k?K.call(k,a)-K.call(k,b):0;if(f===g)return kb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?kb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},e):n},fb.matches=function(a,b){return fb(a,null,null,b)},fb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fb(b,n,null,[a]).length>0},fb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&E.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fb.selectors={cacheLength:50,createPseudo:hb,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+M+")"+a+"("+M+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==C&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?hb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=K.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:hb(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?hb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:hb(function(a){return function(b){return fb(a,b).length>0}}),contains:hb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:hb(function(a){return W.test(a||"")||fb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:nb(function(){return[0]}),last:nb(function(a,b){return[b-1]}),eq:nb(function(a,b,c){return[0>c?c+b:c]}),even:nb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:nb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:nb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:nb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=lb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=mb(b);function pb(){}pb.prototype=d.filters=d.pseudos,d.setFilters=new pb,g=fb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fb.error(a):z(a,i).slice(0)};function qb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function rb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function sb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function tb(a,b,c){for(var d=0,e=b.length;e>d;d++)fb(a,b[d],c);return c}function ub(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function vb(a,b,c,d,e,f){return d&&!d[u]&&(d=vb(d)),e&&!e[u]&&(e=vb(e,f)),hb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||tb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ub(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ub(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?K.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ub(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):I.apply(g,r)})}function wb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=rb(function(a){return a===b},h,!0),l=rb(function(a){return K.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>i;i++)if(c=d.relative[a[i].type])m=[rb(sb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return vb(i>1&&sb(m),i>1&&qb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&wb(a.slice(i,e)),f>e&&wb(a=a.slice(e)),f>e&&qb(a))}m.push(c)}return sb(m)}function xb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=G.call(i));s=ub(s)}I.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&fb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?hb(f):f}return h=fb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xb(e,d)),f.selector=a}return f},i=fb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&ob(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qb(j),!a)return I.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&ob(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ib(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ib(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||jb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ib(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||jb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ib(function(a){return null==a.getAttribute("disabled")})||jb(L,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fb}(a);m.find=s,m.expr=s.selectors,m.expr[":"]=m.expr.pseudos,m.unique=s.uniqueSort,m.text=s.getText,m.isXMLDoc=s.isXML,m.contains=s.contains;var t=m.expr.match.needsContext,u=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/^.[^:#\[\.,]*$/;function w(a,b,c){if(m.isFunction(b))return m.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return m.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(v.test(b))return m.filter(b,a,c);b=m.filter(b,a)}return m.grep(a,function(a){return m.inArray(a,b)>=0!==c})}m.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?m.find.matchesSelector(d,a)?[d]:[]:m.find.matches(a,m.grep(b,function(a){return 1===a.nodeType}))},m.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(m(a).filter(function(){for(b=0;e>b;b++)if(m.contains(d[b],this))return!0}));for(b=0;e>b;b++)m.find(a,d[b],c);return c=this.pushStack(e>1?m.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(w(this,a||[],!1))},not:function(a){return this.pushStack(w(this,a||[],!0))},is:function(a){return!!w(this,"string"==typeof a&&t.test(a)?m(a):a||[],!1).length}});var x,y=a.document,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=m.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||x).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof m?b[0]:b,m.merge(this,m.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:y,!0)),u.test(c[1])&&m.isPlainObject(b))for(c in b)m.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=y.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return x.find(a);this.length=1,this[0]=d}return this.context=y,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):m.isFunction(a)?"undefined"!=typeof x.ready?x.ready(a):a(m):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),m.makeArray(a,this))};A.prototype=m.fn,x=m(y);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};m.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!m(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),m.fn.extend({has:function(a){var b,c=m(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(m.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=t.test(a)||"string"!=typeof a?m(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&m.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?m.unique(f):f)},index:function(a){return a?"string"==typeof a?m.inArray(this[0],m(a)):m.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(m.unique(m.merge(this.get(),m(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}m.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return m.dir(a,"parentNode")},parentsUntil:function(a,b,c){return m.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return m.dir(a,"nextSibling")},prevAll:function(a){return m.dir(a,"previousSibling")},nextUntil:function(a,b,c){return m.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return m.dir(a,"previousSibling",c)},siblings:function(a){return m.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return m.sibling(a.firstChild)},contents:function(a){return m.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:m.merge([],a.childNodes)}},function(a,b){m.fn[a]=function(c,d){var e=m.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=m.filter(d,e)),this.length>1&&(C[a]||(e=m.unique(e)),B.test(a)&&(e=e.reverse())),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return m.each(a.match(E)||[],function(a,c){b[c]=!0}),b}m.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):m.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){m.each(b,function(b,c){var d=m.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&m.each(arguments,function(a,c){var d;while((d=m.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?m.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},m.extend({Deferred:function(a){var b=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return m.Deferred(function(c){m.each(b,function(b,f){var g=m.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&m.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?m.extend(a,d):d}},e={};return d.pipe=d.then,m.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&m.isFunction(a.promise)?e:0,g=1===f?a:m.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&m.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;m.fn.ready=function(a){return m.ready.promise().done(a),this},m.extend({isReady:!1,readyWait:1,holdReady:function(a){a?m.readyWait++:m.ready(!0)},ready:function(a){if(a===!0?!--m.readyWait:!m.isReady){if(!y.body)return setTimeout(m.ready);m.isReady=!0,a!==!0&&--m.readyWait>0||(H.resolveWith(y,[m]),m.fn.triggerHandler&&(m(y).triggerHandler("ready"),m(y).off("ready")))}}});function I(){y.addEventListener?(y.removeEventListener("DOMContentLoaded",J,!1),a.removeEventListener("load",J,!1)):(y.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))}function J(){(y.addEventListener||"load"===event.type||"complete"===y.readyState)&&(I(),m.ready())}m.ready.promise=function(b){if(!H)if(H=m.Deferred(),"complete"===y.readyState)setTimeout(m.ready);else if(y.addEventListener)y.addEventListener("DOMContentLoaded",J,!1),a.addEventListener("load",J,!1);else{y.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);var c=!1;try{c=null==a.frameElement&&y.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!m.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}I(),m.ready()}}()}return H.promise(b)};var K="undefined",L;for(L in m(k))break;k.ownLast="0"!==L,k.inlineBlockNeedsLayout=!1,m(function(){var a,b,c,d;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",k.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))}),function(){var a=y.createElement("div");if(null==k.deleteExpando){k.deleteExpando=!0;try{delete a.test}catch(b){k.deleteExpando=!1}}a=null}(),m.acceptData=function(a){var b=m.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:M.test(c)?m.parseJSON(c):c}catch(e){}m.data(a,b,c)}else c=void 0}return c}function P(a){var b;for(b in a)if(("data"!==b||!m.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function Q(a,b,d,e){if(m.acceptData(a)){var f,g,h=m.expando,i=a.nodeType,j=i?m.cache:a,k=i?a[h]:a[h]&&h;
if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||m.guid++:h),j[k]||(j[k]=i?{}:{toJSON:m.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=m.extend(j[k],b):j[k].data=m.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[m.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[m.camelCase(b)])):f=g,f}}function R(a,b,c){if(m.acceptData(a)){var d,e,f=a.nodeType,g=f?m.cache:a,h=f?a[m.expando]:m.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){m.isArray(b)?b=b.concat(m.map(b,m.camelCase)):b in d?b=[b]:(b=m.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!P(d):!m.isEmptyObject(d))return}(c||(delete g[h].data,P(g[h])))&&(f?m.cleanData([a],!0):k.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}m.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?m.cache[a[m.expando]]:a[m.expando],!!a&&!P(a)},data:function(a,b,c){return Q(a,b,c)},removeData:function(a,b){return R(a,b)},_data:function(a,b,c){return Q(a,b,c,!0)},_removeData:function(a,b){return R(a,b,!0)}}),m.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=m.data(f),1===f.nodeType&&!m._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=m.camelCase(d.slice(5)),O(f,d,e[d])));m._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){m.data(this,a)}):arguments.length>1?this.each(function(){m.data(this,a,b)}):f?O(f,a,m.data(f,a)):void 0},removeData:function(a){return this.each(function(){m.removeData(this,a)})}}),m.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=m._data(a,b),c&&(!d||m.isArray(c)?d=m._data(a,b,m.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=m.queue(a,b),d=c.length,e=c.shift(),f=m._queueHooks(a,b),g=function(){m.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return m._data(a,c)||m._data(a,c,{empty:m.Callbacks("once memory").add(function(){m._removeData(a,b+"queue"),m._removeData(a,c)})})}}),m.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?m.queue(this[0],a):void 0===b?this:this.each(function(){var c=m.queue(this,a,b);m._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&m.dequeue(this,a)})},dequeue:function(a){return this.each(function(){m.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=m.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=m._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=["Top","Right","Bottom","Left"],U=function(a,b){return a=b||a,"none"===m.css(a,"display")||!m.contains(a.ownerDocument,a)},V=m.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===m.type(c)){e=!0;for(h in c)m.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,m.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(m(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},W=/^(?:checkbox|radio)$/i;!function(){var a=y.createElement("input"),b=y.createElement("div"),c=y.createDocumentFragment();if(b.innerHTML=" <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",k.leadingWhitespace=3===b.firstChild.nodeType,k.tbody=!b.getElementsByTagName("tbody").length,k.htmlSerialize=!!b.getElementsByTagName("link").length,k.html5Clone="<:nav></:nav>"!==y.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),k.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,k.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){k.noCloneEvent=!1}),b.cloneNode(!0).click()),null==k.deleteExpando){k.deleteExpando=!0;try{delete b.test}catch(d){k.deleteExpando=!1}}}(),function(){var b,c,d=y.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(k[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),k[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var X=/^(?:input|select|textarea)$/i,Y=/^key/,Z=/^(?:mouse|pointer|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=/^([^.]*)(?:\.(.+)|)$/;function ab(){return!0}function bb(){return!1}function cb(){try{return y.activeElement}catch(a){}}m.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=m.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof m===K||a&&m.event.triggered===a.type?void 0:m.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(E)||[""],h=b.length;while(h--)f=_.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=m.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=m.event.special[o]||{},l=m.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&m.expr.match.needsContext.test(e),namespace:p.join(".")},i),(n=g[o])||(n=g[o]=[],n.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?n.splice(n.delegateCount++,0,l):n.push(l),m.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m.hasData(a)&&m._data(a);if(r&&(k=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=_.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=m.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,n=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=n.length;while(f--)g=n[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(n.splice(f,1),g.selector&&n.delegateCount--,l.remove&&l.remove.call(a,g));i&&!n.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||m.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)m.event.remove(a,o+b[j],c,d,!0);m.isEmptyObject(k)&&(delete r.handle,m._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,o=[d||y],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||y,3!==d.nodeType&&8!==d.nodeType&&!$.test(p+m.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[m.expando]?b:new m.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:m.makeArray(c,[b]),k=m.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!m.isWindow(d)){for(i=k.delegateType||p,$.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||y)&&o.push(l.defaultView||l.parentWindow||a)}n=0;while((h=o[n++])&&!b.isPropagationStopped())b.type=n>1?i:k.bindType||p,f=(m._data(h,"events")||{})[b.type]&&m._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&m.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&m.acceptData(d)&&g&&d[p]&&!m.isWindow(d)){l=d[g],l&&(d[g]=null),m.event.triggered=p;try{d[p]()}catch(r){}m.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=m.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(m._data(this,"events")||{})[a.type]||[],k=m.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=m.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((m.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?m(c,this).index(i)>=0:m.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[m.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=Z.test(e)?this.mouseHooks:Y.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new m.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||y,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==cb()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===cb()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return m.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return m.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=m.extend(new m.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?m.event.trigger(e,null,b):m.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},m.removeEvent=y.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===K&&(a[d]=null),a.detachEvent(d,c))},m.Event=function(a,b){return this instanceof m.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ab:bb):this.type=a,b&&m.extend(this,b),this.timeStamp=a&&a.timeStamp||m.now(),void(this[m.expando]=!0)):new m.Event(a,b)},m.Event.prototype={isDefaultPrevented:bb,isPropagationStopped:bb,isImmediatePropagationStopped:bb,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ab,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ab,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ab,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){m.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!m.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.submitBubbles||(m.event.special.submit={setup:function(){return m.nodeName(this,"form")?!1:void m.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=m.nodeName(b,"input")||m.nodeName(b,"button")?b.form:void 0;c&&!m._data(c,"submitBubbles")&&(m.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),m._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&m.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return m.nodeName(this,"form")?!1:void m.event.remove(this,"._submit")}}),k.changeBubbles||(m.event.special.change={setup:function(){return X.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(m.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),m.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),m.event.simulate("change",this,a,!0)})),!1):void m.event.add(this,"beforeactivate._change",function(a){var b=a.target;X.test(b.nodeName)&&!m._data(b,"changeBubbles")&&(m.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||m.event.simulate("change",this.parentNode,a,!0)}),m._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return m.event.remove(this,"._change"),!X.test(this.nodeName)}}),k.focusinBubbles||m.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){m.event.simulate(b,a.target,m.event.fix(a),!0)};m.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=m._data(d,b);e||d.addEventListener(a,c,!0),m._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=m._data(d,b)-1;e?m._data(d,b,e):(d.removeEventListener(a,c,!0),m._removeData(d,b))}}}),m.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=bb;else if(!d)return this;return 1===e&&(g=d,d=function(a){return m().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=m.guid++)),this.each(function(){m.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,m(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=bb),this.each(function(){m.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){m.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?m.event.trigger(a,b,c,!0):void 0}});function db(a){var b=eb.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var eb="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",fb=/ jQuery\d+="(?:null|\d+)"/g,gb=new RegExp("<(?:"+eb+")[\\s/>]","i"),hb=/^\s+/,ib=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,jb=/<([\w:]+)/,kb=/<tbody/i,lb=/<|&#?\w+;/,mb=/<(?:script|style|link)/i,nb=/checked\s*(?:[^=]|=\s*.checked.)/i,ob=/^$|\/(?:java|ecma)script/i,pb=/^true\/(.*)/,qb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,rb={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},sb=db(y),tb=sb.appendChild(y.createElement("div"));rb.optgroup=rb.option,rb.tbody=rb.tfoot=rb.colgroup=rb.caption=rb.thead,rb.th=rb.td;function ub(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==K?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==K?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||m.nodeName(d,b)?f.push(d):m.merge(f,ub(d,b));return void 0===b||b&&m.nodeName(a,b)?m.merge([a],f):f}function vb(a){W.test(a.type)&&(a.defaultChecked=a.checked)}function wb(a,b){return m.nodeName(a,"table")&&m.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function xb(a){return a.type=(null!==m.find.attr(a,"type"))+"/"+a.type,a}function yb(a){var b=pb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function zb(a,b){for(var c,d=0;null!=(c=a[d]);d++)m._data(c,"globalEval",!b||m._data(b[d],"globalEval"))}function Ab(a,b){if(1===b.nodeType&&m.hasData(a)){var c,d,e,f=m._data(a),g=m._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)m.event.add(b,c,h[c][d])}g.data&&(g.data=m.extend({},g.data))}}function Bb(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!k.noCloneEvent&&b[m.expando]){e=m._data(b);for(d in e.events)m.removeEvent(b,d,e.handle);b.removeAttribute(m.expando)}"script"===c&&b.text!==a.text?(xb(b).text=a.text,yb(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),k.html5Clone&&a.innerHTML&&!m.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&W.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}m.extend({clone:function(a,b,c){var d,e,f,g,h,i=m.contains(a.ownerDocument,a);if(k.html5Clone||m.isXMLDoc(a)||!gb.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(tb.innerHTML=a.outerHTML,tb.removeChild(f=tb.firstChild)),!(k.noCloneEvent&&k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||m.isXMLDoc(a)))for(d=ub(f),h=ub(a),g=0;null!=(e=h[g]);++g)d[g]&&Bb(e,d[g]);if(b)if(c)for(h=h||ub(a),d=d||ub(f),g=0;null!=(e=h[g]);g++)Ab(e,d[g]);else Ab(a,f);return d=ub(f,"script"),d.length>0&&zb(d,!i&&ub(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,l,n=a.length,o=db(b),p=[],q=0;n>q;q++)if(f=a[q],f||0===f)if("object"===m.type(f))m.merge(p,f.nodeType?[f]:f);else if(lb.test(f)){h=h||o.appendChild(b.createElement("div")),i=(jb.exec(f)||["",""])[1].toLowerCase(),l=rb[i]||rb._default,h.innerHTML=l[1]+f.replace(ib,"<$1></$2>")+l[2],e=l[0];while(e--)h=h.lastChild;if(!k.leadingWhitespace&&hb.test(f)&&p.push(b.createTextNode(hb.exec(f)[0])),!k.tbody){f="table"!==i||kb.test(f)?"<table>"!==l[1]||kb.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)m.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}m.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),k.appendChecked||m.grep(ub(p,"input"),vb),q=0;while(f=p[q++])if((!d||-1===m.inArray(f,d))&&(g=m.contains(f.ownerDocument,f),h=ub(o.appendChild(f),"script"),g&&zb(h),c)){e=0;while(f=h[e++])ob.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=m.expando,j=m.cache,l=k.deleteExpando,n=m.event.special;null!=(d=a[h]);h++)if((b||m.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)n[e]?m.event.remove(d,e):m.removeEvent(d,e,g.handle);j[f]&&(delete j[f],l?delete d[i]:typeof d.removeAttribute!==K?d.removeAttribute(i):d[i]=null,c.push(f))}}}),m.fn.extend({text:function(a){return V(this,function(a){return void 0===a?m.text(this):this.empty().append((this[0]&&this[0].ownerDocument||y).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?m.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||m.cleanData(ub(c)),c.parentNode&&(b&&m.contains(c.ownerDocument,c)&&zb(ub(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&m.cleanData(ub(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&m.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return m.clone(this,a,b)})},html:function(a){return V(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(fb,""):void 0;if(!("string"!=typeof a||mb.test(a)||!k.htmlSerialize&&gb.test(a)||!k.leadingWhitespace&&hb.test(a)||rb[(jb.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(ib,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(m.cleanData(ub(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,m.cleanData(ub(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,n=this,o=l-1,p=a[0],q=m.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&nb.test(p))return this.each(function(c){var d=n.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(i=m.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=m.map(ub(i,"script"),xb),f=g.length;l>j;j++)d=i,j!==o&&(d=m.clone(d,!0,!0),f&&m.merge(g,ub(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,m.map(g,yb),j=0;f>j;j++)d=g[j],ob.test(d.type||"")&&!m._data(d,"globalEval")&&m.contains(h,d)&&(d.src?m._evalUrl&&m._evalUrl(d.src):m.globalEval((d.text||d.textContent||d.innerHTML||"").replace(qb,"")));i=c=null}return this}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){m.fn[a]=function(a){for(var c,d=0,e=[],g=m(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),m(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Cb,Db={};function Eb(b,c){var d,e=m(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:m.css(e[0],"display");return e.detach(),f}function Fb(a){var b=y,c=Db[a];return c||(c=Eb(a,b),"none"!==c&&c||(Cb=(Cb||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Cb[0].contentWindow||Cb[0].contentDocument).document,b.write(),b.close(),c=Eb(a,b),Cb.detach()),Db[a]=c),c}!function(){var a;k.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,d;return c=y.getElementsByTagName("body")[0],c&&c.style?(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(y.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var Gb=/^margin/,Hb=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ib,Jb,Kb=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ib=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||m.contains(a.ownerDocument,a)||(g=m.style(a,b)),Hb.test(g)&&Gb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):y.documentElement.currentStyle&&(Ib=function(a){return a.currentStyle},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Hb.test(g)&&!Kb.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Lb(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h;if(b=y.createElement("div"),b.innerHTML=" <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=d&&d.style){c.cssText="float:left;opacity:.5",k.opacity="0.5"===c.opacity,k.cssFloat=!!c.cssFloat,b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===b.style.backgroundClip,k.boxSizing=""===c.boxSizing||""===c.MozBoxSizing||""===c.WebkitBoxSizing,m.extend(k,{reliableHiddenOffsets:function(){return null==g&&i(),g},boxSizingReliable:function(){return null==f&&i(),f},pixelPosition:function(){return null==e&&i(),e},reliableMarginRight:function(){return null==h&&i(),h}});function i(){var b,c,d,i;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",e=f=!1,h=!0,a.getComputedStyle&&(e="1%"!==(a.getComputedStyle(b,null)||{}).top,f="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,i=b.appendChild(y.createElement("div")),i.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",b.style.width="1px",h=!parseFloat((a.getComputedStyle(i,null)||{}).marginRight)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=b.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",g=0===i[0].offsetHeight,g&&(i[0].style.display="",i[1].style.display="none",g=0===i[0].offsetHeight),c.removeChild(d))}}}(),m.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Mb=/alpha\([^)]*\)/i,Nb=/opacity\s*=\s*([^)]*)/,Ob=/^(none|table(?!-c[ea]).+)/,Pb=new RegExp("^("+S+")(.*)$","i"),Qb=new RegExp("^([+-])=("+S+")","i"),Rb={position:"absolute",visibility:"hidden",display:"block"},Sb={letterSpacing:"0",fontWeight:"400"},Tb=["Webkit","O","Moz","ms"];function Ub(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Tb.length;while(e--)if(b=Tb[e]+c,b in a)return b;return d}function Vb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=m._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&U(d)&&(f[g]=m._data(d,"olddisplay",Fb(d.nodeName)))):(e=U(d),(c&&"none"!==c||!e)&&m._data(d,"olddisplay",e?c:m.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Wb(a,b,c){var d=Pb.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Xb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=m.css(a,c+T[f],!0,e)),d?("content"===c&&(g-=m.css(a,"padding"+T[f],!0,e)),"margin"!==c&&(g-=m.css(a,"border"+T[f]+"Width",!0,e))):(g+=m.css(a,"padding"+T[f],!0,e),"padding"!==c&&(g+=m.css(a,"border"+T[f]+"Width",!0,e)));return g}function Yb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ib(a),g=k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Jb(a,b,f),(0>e||null==e)&&(e=a.style[b]),Hb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Xb(a,b,c||(g?"border":"content"),d,f)+"px"}m.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Jb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":k.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=m.camelCase(b),i=a.style;if(b=m.cssProps[h]||(m.cssProps[h]=Ub(i,h)),g=m.cssHooks[b]||m.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Qb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(m.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||m.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=m.camelCase(b);return b=m.cssProps[h]||(m.cssProps[h]=Ub(a.style,h)),g=m.cssHooks[b]||m.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Jb(a,b,d)),"normal"===f&&b in Sb&&(f=Sb[b]),""===c||c?(e=parseFloat(f),c===!0||m.isNumeric(e)?e||0:f):f}}),m.each(["height","width"],function(a,b){m.cssHooks[b]={get:function(a,c,d){return c?Ob.test(m.css(a,"display"))&&0===a.offsetWidth?m.swap(a,Rb,function(){return Yb(a,b,d)}):Yb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ib(a);return Wb(a,c,d?Xb(a,b,d,k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,e),e):0)}}}),k.opacity||(m.cssHooks.opacity={get:function(a,b){return Nb.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=m.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===m.trim(f.replace(Mb,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Mb.test(f)?f.replace(Mb,e):f+" "+e)}}),m.cssHooks.marginRight=Lb(k.reliableMarginRight,function(a,b){return b?m.swap(a,{display:"inline-block"},Jb,[a,"marginRight"]):void 0}),m.each({margin:"",padding:"",border:"Width"},function(a,b){m.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+T[d]+b]=f[d]||f[d-2]||f[0];return e}},Gb.test(a)||(m.cssHooks[a+b].set=Wb)}),m.fn.extend({css:function(a,b){return V(this,function(a,b,c){var d,e,f={},g=0;if(m.isArray(b)){for(d=Ib(a),e=b.length;e>g;g++)f[b[g]]=m.css(a,b[g],!1,d);return f}return void 0!==c?m.style(a,b,c):m.css(a,b)},a,b,arguments.length>1)},show:function(){return Vb(this,!0)},hide:function(){return Vb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){U(this)?m(this).show():m(this).hide()})}});function Zb(a,b,c,d,e){return new Zb.prototype.init(a,b,c,d,e)}m.Tween=Zb,Zb.prototype={constructor:Zb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(m.cssNumber[c]?"":"px")
},cur:function(){var a=Zb.propHooks[this.prop];return a&&a.get?a.get(this):Zb.propHooks._default.get(this)},run:function(a){var b,c=Zb.propHooks[this.prop];return this.pos=b=this.options.duration?m.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Zb.propHooks._default.set(this),this}},Zb.prototype.init.prototype=Zb.prototype,Zb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=m.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){m.fx.step[a.prop]?m.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[m.cssProps[a.prop]]||m.cssHooks[a.prop])?m.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Zb.propHooks.scrollTop=Zb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},m.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},m.fx=Zb.prototype.init,m.fx.step={};var $b,_b,ac=/^(?:toggle|show|hide)$/,bc=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),cc=/queueHooks$/,dc=[ic],ec={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=bc.exec(b),f=e&&e[3]||(m.cssNumber[a]?"":"px"),g=(m.cssNumber[a]||"px"!==f&&+d)&&bc.exec(m.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,m.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function fc(){return setTimeout(function(){$b=void 0}),$b=m.now()}function gc(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=T[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function hc(a,b,c){for(var d,e=(ec[b]||[]).concat(ec["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ic(a,b,c){var d,e,f,g,h,i,j,l,n=this,o={},p=a.style,q=a.nodeType&&U(a),r=m._data(a,"fxshow");c.queue||(h=m._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,n.always(function(){n.always(function(){h.unqueued--,m.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=m.css(a,"display"),l="none"===j?m._data(a,"olddisplay")||Fb(a.nodeName):j,"inline"===l&&"none"===m.css(a,"float")&&(k.inlineBlockNeedsLayout&&"inline"!==Fb(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",k.shrinkWrapBlocks()||n.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],ac.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||m.style(a,d)}else j=void 0;if(m.isEmptyObject(o))"inline"===("none"===j?Fb(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=m._data(a,"fxshow",{}),f&&(r.hidden=!q),q?m(a).show():n.done(function(){m(a).hide()}),n.done(function(){var b;m._removeData(a,"fxshow");for(b in o)m.style(a,b,o[b])});for(d in o)g=hc(q?r[d]:0,d,n),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function jc(a,b){var c,d,e,f,g;for(c in a)if(d=m.camelCase(c),e=b[d],f=a[c],m.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=m.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kc(a,b,c){var d,e,f=0,g=dc.length,h=m.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=$b||fc(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:m.extend({},b),opts:m.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$b||fc(),duration:c.duration,tweens:[],createTween:function(b,c){var d=m.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jc(k,j.opts.specialEasing);g>f;f++)if(d=dc[f].call(j,a,k,j.opts))return d;return m.map(k,hc,j),m.isFunction(j.opts.start)&&j.opts.start.call(a,j),m.fx.timer(m.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}m.Animation=m.extend(kc,{tweener:function(a,b){m.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],ec[c]=ec[c]||[],ec[c].unshift(b)},prefilter:function(a,b){b?dc.unshift(a):dc.push(a)}}),m.speed=function(a,b,c){var d=a&&"object"==typeof a?m.extend({},a):{complete:c||!c&&b||m.isFunction(a)&&a,duration:a,easing:c&&b||b&&!m.isFunction(b)&&b};return d.duration=m.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in m.fx.speeds?m.fx.speeds[d.duration]:m.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){m.isFunction(d.old)&&d.old.call(this),d.queue&&m.dequeue(this,d.queue)},d},m.fn.extend({fadeTo:function(a,b,c,d){return this.filter(U).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=m.isEmptyObject(a),f=m.speed(b,c,d),g=function(){var b=kc(this,m.extend({},a),f);(e||m._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=m.timers,g=m._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&cc.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&m.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=m._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=m.timers,g=d?d.length:0;for(c.finish=!0,m.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),m.each(["toggle","show","hide"],function(a,b){var c=m.fn[b];m.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gc(b,!0),a,d,e)}}),m.each({slideDown:gc("show"),slideUp:gc("hide"),slideToggle:gc("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){m.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),m.timers=[],m.fx.tick=function(){var a,b=m.timers,c=0;for($b=m.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||m.fx.stop(),$b=void 0},m.fx.timer=function(a){m.timers.push(a),a()?m.fx.start():m.timers.pop()},m.fx.interval=13,m.fx.start=function(){_b||(_b=setInterval(m.fx.tick,m.fx.interval))},m.fx.stop=function(){clearInterval(_b),_b=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(a,b){return a=m.fx?m.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e;b=y.createElement("div"),b.setAttribute("className","t"),b.innerHTML=" <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=y.createElement("select"),e=c.appendChild(y.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",k.getSetAttribute="t"!==b.className,k.style=/top/.test(d.getAttribute("style")),k.hrefNormalized="/a"===d.getAttribute("href"),k.checkOn=!!a.value,k.optSelected=e.selected,k.enctype=!!y.createElement("form").enctype,c.disabled=!0,k.optDisabled=!e.disabled,a=y.createElement("input"),a.setAttribute("value",""),k.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),k.radioValue="t"===a.value}();var lc=/\r/g;m.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=m.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,m(this).val()):a,null==e?e="":"number"==typeof e?e+="":m.isArray(e)&&(e=m.map(e,function(a){return null==a?"":a+""})),b=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=m.valHooks[e.type]||m.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(lc,""):null==c?"":c)}}}),m.extend({valHooks:{option:{get:function(a){var b=m.find.attr(a,"value");return null!=b?b:m.trim(m.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&m.nodeName(c.parentNode,"optgroup"))){if(b=m(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=m.makeArray(b),g=e.length;while(g--)if(d=e[g],m.inArray(m.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(a,b){return m.isArray(b)?a.checked=m.inArray(m(a).val(),b)>=0:void 0}},k.checkOn||(m.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var mc,nc,oc=m.expr.attrHandle,pc=/^(?:checked|selected)$/i,qc=k.getSetAttribute,rc=k.input;m.fn.extend({attr:function(a,b){return V(this,m.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){m.removeAttr(this,a)})}}),m.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===K?m.prop(a,b,c):(1===f&&m.isXMLDoc(a)||(b=b.toLowerCase(),d=m.attrHooks[b]||(m.expr.match.bool.test(b)?nc:mc)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=m.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void m.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=m.propFix[c]||c,m.expr.match.bool.test(c)?rc&&qc||!pc.test(c)?a[d]=!1:a[m.camelCase("default-"+c)]=a[d]=!1:m.attr(a,c,""),a.removeAttribute(qc?c:d)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&m.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),nc={set:function(a,b,c){return b===!1?m.removeAttr(a,c):rc&&qc||!pc.test(c)?a.setAttribute(!qc&&m.propFix[c]||c,c):a[m.camelCase("default-"+c)]=a[c]=!0,c}},m.each(m.expr.match.bool.source.match(/\w+/g),function(a,b){var c=oc[b]||m.find.attr;oc[b]=rc&&qc||!pc.test(b)?function(a,b,d){var e,f;return d||(f=oc[b],oc[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,oc[b]=f),e}:function(a,b,c){return c?void 0:a[m.camelCase("default-"+b)]?b.toLowerCase():null}}),rc&&qc||(m.attrHooks.value={set:function(a,b,c){return m.nodeName(a,"input")?void(a.defaultValue=b):mc&&mc.set(a,b,c)}}),qc||(mc={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},oc.id=oc.name=oc.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},m.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:mc.set},m.attrHooks.contenteditable={set:function(a,b,c){mc.set(a,""===b?!1:b,c)}},m.each(["width","height"],function(a,b){m.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),k.style||(m.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var sc=/^(?:input|select|textarea|button|object)$/i,tc=/^(?:a|area)$/i;m.fn.extend({prop:function(a,b){return V(this,m.prop,a,b,arguments.length>1)},removeProp:function(a){return a=m.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),m.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!m.isXMLDoc(a),f&&(b=m.propFix[b]||b,e=m.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=m.find.attr(a,"tabindex");return b?parseInt(b,10):sc.test(a.nodeName)||tc.test(a.nodeName)&&a.href?0:-1}}}}),k.hrefNormalized||m.each(["href","src"],function(a,b){m.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),k.optSelected||(m.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this}),k.enctype||(m.propFix.enctype="encoding");var uc=/[\t\r\n\f]/g;m.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=m.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?m.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(m.isFunction(a)?function(c){m(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=m(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===K||"boolean"===c)&&(this.className&&m._data(this,"__className__",this.className),this.className=this.className||a===!1?"":m._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(uc," ").indexOf(b)>=0)return!0;return!1}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){m.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),m.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var vc=m.now(),wc=/\?/,xc=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=m.trim(b+"");return e&&!m.trim(e.replace(xc,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():m.error("Invalid JSON: "+b)},m.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+b),c};var yc,zc,Ac=/#.*$/,Bc=/([?&])_=[^&]*/,Cc=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Dc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Ec=/^(?:GET|HEAD)$/,Fc=/^\/\//,Gc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Hc={},Ic={},Jc="*/".concat("*");try{zc=location.href}catch(Kc){zc=y.createElement("a"),zc.href="",zc=zc.href}yc=Gc.exec(zc.toLowerCase())||[];function Lc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(m.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Mc(a,b,c,d){var e={},f=a===Ic;function g(h){var i;return e[h]=!0,m.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Nc(a,b){var c,d,e=m.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&m.extend(!0,a,c),a}function Oc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Pc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:zc,type:"GET",isLocal:Dc.test(yc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Jc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Nc(Nc(a,m.ajaxSettings),b):Nc(m.ajaxSettings,a)},ajaxPrefilter:Lc(Hc),ajaxTransport:Lc(Ic),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=m.ajaxSetup({},b),l=k.context||k,n=k.context&&(l.nodeType||l.jquery)?m(l):m.event,o=m.Deferred(),p=m.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Cc.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||zc)+"").replace(Ac,"").replace(Fc,yc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=m.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(c=Gc.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===yc[1]&&c[2]===yc[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(yc[3]||("http:"===yc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=m.param(k.data,k.traditional)),Mc(Hc,k,b,v),2===t)return v;h=k.global,h&&0===m.active++&&m.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Ec.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(wc.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Bc.test(e)?e.replace(Bc,"$1_="+vc++):e+(wc.test(e)?"&":"?")+"_="+vc++)),k.ifModified&&(m.lastModified[e]&&v.setRequestHeader("If-Modified-Since",m.lastModified[e]),m.etag[e]&&v.setRequestHeader("If-None-Match",m.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Jc+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Mc(Ic,k,b,v)){v.readyState=1,h&&n.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Oc(k,v,c)),u=Pc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(m.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(m.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&n.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(n.trigger("ajaxComplete",[v,k]),--m.active||m.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return m.get(a,b,c,"json")},getScript:function(a,b){return m.get(a,void 0,b,"script")}}),m.each(["get","post"],function(a,b){m[b]=function(a,c,d,e){return m.isFunction(c)&&(e=e||d,d=c,c=void 0),m.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){m.fn[b]=function(a){return this.on(b,a)}}),m._evalUrl=function(a){return m.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},m.fn.extend({wrapAll:function(a){if(m.isFunction(a))return this.each(function(b){m(this).wrapAll(a.call(this,b))});if(this[0]){var b=m(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(m.isFunction(a)?function(b){m(this).wrapInner(a.call(this,b))}:function(){var b=m(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=m.isFunction(a);return this.each(function(c){m(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)}).end()}}),m.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!k.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||m.css(a,"display"))},m.expr.filters.visible=function(a){return!m.expr.filters.hidden(a)};var Qc=/%20/g,Rc=/\[\]$/,Sc=/\r?\n/g,Tc=/^(?:submit|button|image|reset|file)$/i,Uc=/^(?:input|select|textarea|keygen)/i;function Vc(a,b,c,d){var e;if(m.isArray(b))m.each(b,function(b,e){c||Rc.test(a)?d(a,e):Vc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==m.type(b))d(a,b);else for(e in b)Vc(a+"["+e+"]",b[e],c,d)}m.param=function(a,b){var c,d=[],e=function(a,b){b=m.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(a)||a.jquery&&!m.isPlainObject(a))m.each(a,function(){e(this.name,this.value)});else for(c in a)Vc(c,a[c],b,e);return d.join("&").replace(Qc,"+")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=m.prop(this,"elements");return a?m.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!m(this).is(":disabled")&&Uc.test(this.nodeName)&&!Tc.test(a)&&(this.checked||!W.test(a))}).map(function(a,b){var c=m(this).val();return null==c?null:m.isArray(c)?m.map(c,function(a){return{name:b.name,value:a.replace(Sc,"\r\n")}}):{name:b.name,value:c.replace(Sc,"\r\n")}}).get()}}),m.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Zc()||$c()}:Zc;var Wc=0,Xc={},Yc=m.ajaxSettings.xhr();a.ActiveXObject&&m(a).on("unload",function(){for(var a in Xc)Xc[a](void 0,!0)}),k.cors=!!Yc&&"withCredentials"in Yc,Yc=k.ajax=!!Yc,Yc&&m.ajaxTransport(function(a){if(!a.crossDomain||k.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Wc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Xc[g],b=void 0,f.onreadystatechange=m.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Xc[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function Zc(){try{return new a.XMLHttpRequest}catch(b){}}function $c(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return m.globalEval(a),a}}}),m.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),m.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=y.head||m("head")[0]||y.documentElement;return{send:function(d,e){b=y.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var _c=[],ad=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_c.pop()||m.expando+"_"+vc++;return this[a]=!0,a}}),m.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(ad.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&ad.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=m.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(ad,"$1"+e):b.jsonp!==!1&&(b.url+=(wc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||m.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,_c.push(e)),g&&m.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),m.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||y;var d=u.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=m.buildFragment([a],b,e),e&&e.length&&m(e).remove(),m.merge([],d.childNodes))};var bd=m.fn.load;m.fn.load=function(a,b,c){if("string"!=typeof a&&bd)return bd.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=m.trim(a.slice(h,a.length)),a=a.slice(0,h)),m.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&m.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?m("<div>").append(m.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},m.expr.filters.animated=function(a){return m.grep(m.timers,function(b){return a===b.elem}).length};var cd=a.document.documentElement;function dd(a){return m.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}m.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=m.css(a,"position"),l=m(a),n={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=m.css(a,"top"),i=m.css(a,"left"),j=("absolute"===k||"fixed"===k)&&m.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),m.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(n.top=b.top-h.top+g),null!=b.left&&(n.left=b.left-h.left+e),"using"in b?b.using.call(a,n):l.css(n)}},m.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){m.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,m.contains(b,e)?(typeof e.getBoundingClientRect!==K&&(d=e.getBoundingClientRect()),c=dd(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===m.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),m.nodeName(a[0],"html")||(c=a.offset()),c.top+=m.css(a[0],"borderTopWidth",!0),c.left+=m.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-m.css(d,"marginTop",!0),left:b.left-c.left-m.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||cd;while(a&&!m.nodeName(a,"html")&&"static"===m.css(a,"position"))a=a.offsetParent;return a||cd})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);m.fn[a]=function(d){return V(this,function(a,d,e){var f=dd(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?m(f).scrollLeft():e,c?e:m(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),m.each(["top","left"],function(a,b){m.cssHooks[b]=Lb(k.pixelPosition,function(a,c){return c?(c=Jb(a,b),Hb.test(c)?m(a).position()[b]+"px":c):void 0})}),m.each({Height:"height",Width:"width"},function(a,b){m.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){m.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return V(this,function(b,c,d){var e;return m.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?m.css(b,c,g):m.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),m.fn.size=function(){return this.length},m.fn.andSelf=m.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return m});var ed=a.jQuery,fd=a.$;return m.noConflict=function(b){return a.$===m&&(a.$=fd),b&&a.jQuery===m&&(a.jQuery=ed),m},typeof b===K&&(a.jQuery=a.$=m),m});
/* function dessin avatars */


var webfontLibLoaded = false;

function detectIE() {
 var ua = window.navigator.userAgent;
 
 var msie = ua.indexOf('MSIE ');
 if (msie > 0) {
 // IE 10 or older => return version number
 return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
 }
 
 var trident = ua.indexOf('Trident/');
 if (trident > 0) {
 // IE 11 => return version number
 var rv = ua.indexOf('rv:');
 return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
 }
 
 var edge = ua.indexOf('Edge/');
 if (edge > 0) {
 // Edge (IE 12+) => return version number
 return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
 }
 
 // other browser
 return false;
}
function returnSub(e,isFormation) {
 if(e && e.keyCode == 13) {
 sendRecapChatMsg(isFormation);
 }
}
function delDefiMy(idDefi) {
 confirme('Etes vous certain de vouloir supprimer ce défi ? Celui-ci ne sera ensuite plus proposé aux joueurs (mais les défis en cours se termineront)',function () {
 ajax('/workers/delMyDefi.php','id='+idDefi,function (res) {
 alerte(res);
 });
 });
}
function copyText(id) {
 if (!navigator.clipboard) {
 alerte('HTTPS needed');
 return;
 }
 var copyText = document.getElementById(id);
 copyText.select();
 copyText.setSelectionRange(0, 99999); 
 navigator.clipboard.writeText(copyText.value);
 alerte("Copied the text: " + copyText.value);
}
function openPartPubb(self,namePart) {
 $('.puBt').removeClass('btn-info').addClass('btn-default');
 $(self).removeClass('btn-default').addClass('btn-info');
 $('.pubStep').hide();$('.'+namePart).show();
 return false;
}
var cacheAvts = new Array();
function createAvatar(endFunc,avatar,medailles2,annonce,myScore,myuser,annonceTxt,connected,isTourDeJeu,isDonneur,appelC,appelN,noMedals) {
 var allParams = ''+avatar+medailles2.join('')+annonce+myScore+myuser+annonceTxt+connected+isTourDeJeu+isDonneur+appelC+appelN+noMedals;
 if (cacheAvts[allParams] ) {
 //console.log('found avat in cache',myuser);
 endFunc(cacheAvts[allParams]);
 return;
 }
 //console.log('recalc avat',allParams);
 var ie11 = detectIE() ;
 var isIElt11 = ie11>0 && ie11<=11;
 
 var $bgAnnonce = new Array();
 
 $bgAnnonce[0]="EquipierVide2";
 $bgAnnonce[1]="EquipierPrise2";
 $bgAnnonce[2]="EquipierGarde2";
 $bgAnnonce[3]="EquipierGardeSans2";
 $bgAnnonce[4]="EquipierGardeContre2";
 $bgAnnonce[5]="EquipierEquipier2";
 $bgAnnonce[6]="EquipierDefeat2";
 $bgAnnonce[7]="EquipierVictory2";

 var imageObjects = new Array();

 var medailles = new Array();

 ///workers/medailleMin.php?type=IA&idJoueur=0
 var signalFFT = false;
 
 for (var k in medailles2 ) {
 if (medailles2[k]=="FFT")
 signalFFT = true;
 else
 medailles.push('/workers/medailleMin.php?type='+medailles2[k]+'');
 }
 
 var filesToPreload = [
 { id:'LedRouge', path:'/img/Jeu/LedRouge.png' },
 { id:'LedVert', path:'/img/Jeu/LedVert.png' },
 { id:'Donneur', path:'/img/Jeu/Donneur.png' },
 { id:'signalFFT', path:'/Jeu-Tarot-en-ligne/Signalisatipon-FFT4.png' },
 { id:'TourDeJeu', path:'/img/Jeu/TourDeJeu.png' },
 { id:'MaskRondEquipier', path:'/img/Jeu/MaskRondEquipier.png' }
 ];
 if (!avatar) avatar = '/avatars/Nobody2.jpg';
 
 filesToPreload.push({id: avatar,path: avatar});
 if (myScore) filesToPreload.push({id: 'EquipierScoreBig',path: '/img/Jeu/EquipierScoreBig.png'});
 filesToPreload.push({id: "/img/Jeu/"+$bgAnnonce[annonce]+".png",path: "/img/Jeu/"+$bgAnnonce[annonce]+".png"});
 for (var k in medailles ) {
 filesToPreload.push({id: medailles[k],path: medailles[k]});
 }
 
 var showAppelCouleur = false;
 if ( (appelC==1 || appelC==2 || appelC==3 || appelC==4) && (appelN=='V' || appelN=='C' || appelN=='D' || appelN=='R' ) ) {
 filesToPreload.push({id: 'appelNum'+appelN,path: '/images/Couleurs/'+appelN+'.png'});
 filesToPreload.push({id: 'RE'+appelC,path: '/images/Couleurs/RE'+appelC+'.png'});
 showAppelCouleur = true;
 }
 
 var loadedIMG = 0;
 
 var thenn = function () {


 var c;
 var ctx;
 
 c=document.createElement("canvas"); c.width=291; c.height=226;
 ctx=c.getContext("2d");
 window.canvasAvat = c;
 
 var imageObj1 = imageObjects["/img/Jeu/"+$bgAnnonce[annonce]+".png"];
 var imageObj2 = imageObjects[avatar];

 ctx.drawImage(imageObj2, 55, 24, 180, 120);
 ctx.drawImage(imageObj1, 0, 0, 291, 226);
 
 ctx.imageSmoothingEnabled = true;
 ctx.imageSmoothingQuality = "high";
 
 if (signalFFT) {
 var signalFFTobj = imageObjects['signalFFT'];
  ctx.drawImage(signalFFTobj, 0, 0, signalFFTobj.width , signalFFTobj.height , 218-signalFFTobj.width/2, 1, signalFFTobj.width,signalFFTobj.height);
 }
 
 if (!noMedals) {
 for (var k in medailles ) {
  var medailleobj = imageObjects[medailles[k]];
  
  /*var oc = document.createElement('canvas'),
  octx = oc.getContext('2d');
  oc.width = medailleobj.width * 0.5;
  oc.height = medailleobj.height * 0.5;
  octx.drawImage(medailleobj, 0, 0, oc.width, oc.height);
 
  var oc2 = document.createElement('canvas'),
  octx2 = oc2.getContext('2d');
  oc2.width = oc.width * 0.5;
  oc2.height = oc.height * 0.5;
  octx2.drawImage(oc, 0, 0, oc2.width, oc2.height);*/

  var taileM = 42;
  
  ctx.filter = 'blur(0.6px)';
  ctx.drawImage(medailleobj, 0, 0, medailleobj.width , medailleobj.height , 50-medailleobj.width/2, 100-k*38, taileM*medailleobj.width/medailleobj.height, taileM);
 
 }
 }


 webfontLibLoaded = true;
 
 var leftPseudoAVT = 30;
 var led = '';
 if (connected==0) { led = 'LedRouge';leftPseudoAVT = 52; }
 if (connected==1) { led = 'LedVert';leftPseudoAVT = 52; }
 if (led) ctx.drawImage(imageObjects[led], 22, 146, imageObjects[led].width, imageObjects[led].height);
 
 ctx.filter='blur(0px)';
 ctx.font = '24px quicksandregular';
 ctx.fillStyle = "#ffffff";
 ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
 ctx.shadowOffsetX = 0;
 ctx.shadowOffsetY = 0;
 ctx.shadowBlur = 3;
 ctx.textBaseline = 'top';
 ctx.textAlign = "left"; 
 
 
 if (isIElt11)
  ctx.fillText(myuser, leftPseudoAVT, 144);
 else
  ctx.fillText(myuser, leftPseudoAVT, 150);

 if (annonceTxt) {
 if (showAppelCouleur && annonce) {
  if (isIElt11)
   ctx.fillText(annonceTxt, 60, 186);
  else
  ctx.fillText(annonceTxt, 60, 192);
 } else {
  if (isIElt11)
   ctx.fillText(annonceTxt, 30, 186);
  else
  ctx.fillText(annonceTxt, 30, 192);
 }
 }

 var $tTour = 102;
 if (isDonneur) {
 ctx.drawImage(imageObjects['Donneur'], 220, 102, imageObjects['Donneur'].width, imageObjects['Donneur'].height);
 $tTour = 55;
 }

 if (isTourDeJeu) {
 ctx.drawImage(imageObjects['TourDeJeu'], 220 , $tTour, imageObjects['TourDeJeu'].width, imageObjects['TourDeJeu'].height);
 }

 if (showAppelCouleur && annonce) {
 var decTmp = 11;
 ctx.drawImage(imageObjects['MaskRondEquipier'], 236-(236-decTmp) , 181, imageObjects['MaskRondEquipier'].width, imageObjects['MaskRondEquipier'].height);
 ctx.drawImage(imageObjects['appelNum'+appelN+''], 241-(236-decTmp) , 192, imageObjects['appelNum'+appelN+''].width/imageObjects['appelNum'+appelN+''].height*20,20);
 ctx.drawImage(imageObjects['RE'+appelC+''], 257-(236-decTmp) , 192, imageObjects['RE'+appelC+''].width , imageObjects['RE'+appelC+''].height);
 }

 if (myScore) {
 ctx.drawImage(imageObjects['EquipierScoreBig'], 291/2-50 , 1, imageObjects['EquipierScoreBig'].width, imageObjects['EquipierScoreBig'].height);
  ctx.fillStyle = "#000000";
  ctx.textAlign = "center";
  ctx.font = '18px quicksandregular';
  ctx.shadowColor = "rgba(0, 0, 0, 0)";
  if (isIElt11)
  ctx.fillText(myScore, 291/2, 5);
  else
  ctx.fillText(myScore, 291/2, 9);
 }
 
 var img = c.toDataURL("image/png");
 cacheAvts[allParams] = img;
 //console.log('save avat',allParams);
 endFunc(img);
 
 //c.remove();
 };
 

 if (!window.cachedIMGavat)
 window.cachedIMGavat = new Array();
 
 var started = 0;
 for (var i = 0 ; i < filesToPreload.length ; i++) {
 var idIMG = filesToPreload[i].id;
 if (window.cachedIMGavat[idIMG]) {
 imageObjects[idIMG] = window.cachedIMGavat[idIMG];
 } else {
 started++;
 imageObjects[idIMG] = new Image();
 imageObjects[idIMG].src = filesToPreload[i].path;
 imageObjects[idIMG].key = idIMG;
 imageObjects[idIMG].onerror = function(errmsg,t,y,u) {
 if (this.src.length>256) {
 errorLog ('******* err loading '+errmsg+' '+this.key+' this.src '+this.src,this.src);
 console.log('******* err loading '+errmsg+' '+this.key+' this.src '+this.src,errmsg,t,y,u)
 } else {
 if (this.src.split('?').length>1)
 this.src = this.src+'&a'; 
 else
 this.src = this.src+'?a'; 
 }
 };
 imageObjects[idIMG].onload = function() {
 loadedIMG++;
 this.ended = true;
 window.cachedIMGavat[this.key] = this;
 //console.log(loadedIMG,filesToPreload[i],this.key);
 for (var kk in imageObjects) {
 if (!imageObjects[kk].ended) {
 return;
 }
 }
 thenn();
 }
 }
 }
 if (!started) {
 thenn();
 }
}


function seeCreditsMvt() {
 var pw = $('#thePWMvtCredits').val();
 if (pw=='') {
 alerte('Veuillez préciser un mot de passe');
 return;
 }
 ajax('/workers/GetCreditsMvp.php','pw='+pw,function (res) {
 $('#credMvtRes').html(res);
 });
 //ajax('/workers/sendRecapChatMsg.php', 'msg='+msg+'&idPartie='+recapChatMsgIdPartie+'&pliVu='+pliVu, evalRes);
}
function ldWebfont(endF) {
 if (webfontLibLoaded) {
 if (endF) endF();
 } else {
 WebFontConfig = {
  custom:{ families: ['quicksandregular'] },
  fontactive: function(){if (endF) endF();},
 timeout: 60000
 };
 (function(){
 var wf = document.createElement("script");
 wf.src = '/js/webfont.js';
 wf.async = 'true';
 document.head.appendChild(wf);
 })();
 }
}
function toggleSrcO(o) {
 o.toggleClass('bigAvatJoueur');
 var otersrc = o.attr('othersrc');
 var prevsrc = o.attr('src');
 o.attr('othersrc',prevsrc);
 o.attr('src',otersrc);
}
/* autre */
function checkLazyLoads() {
 $('.lazyLoad').each(function () {
 if ($(this).attr('loadedsrc')) {
 $(this).attr('src',$(this).attr('loadedsrc'));
 $(this).attr('loadedsrc',null).css('color','');
 }
 });
}
 
function growBigMsg(idCorres) {
 $('.orderedMP').hide();
 $('.withCorres'+idCorres).show();
 $('.withCorres'+idCorres).addClass('selMPBig');
 $('.biggerMP').toggle();
}
function growSmallMsg(idCorres) {
 $('.orderedMP').show();
 $('.withCorres'+idCorres).removeClass('selMPBig');
 $('.biggerMP').toggle();
}
 
function checkSelectiveLoading() {

 $('.selectiveLoadg').each(function () {
 if ($(this).attr('loadedsrc')) {
 if ( $(this).is(':visible')) {
 $(this).attr('src',$(this).attr('loadedsrc'));
 $(this).attr('loadedsrc',null).css('color','');
 }
 }
 });
}
checkSelectiveLoading();

function webpfeatureResult(feature, hasWebp) {
 var suff = 'jpg';
 if (hasWebp) {
 suff = 'webp';
 }

 var PNGsuff = 'png';
 if (hasWebp) {
 PNGsuff = 'webp';
 }
 clinOeuil = new Image();clinOeuil.src='/Jeu-Tarot-en-ligne/Home/Jeu de tarot gratuitClin.'+PNGsuff;
 clinOeuil2 = new Image();clinOeuil2.src='/Jeu-Tarot-en-ligne/Home/Jeu de Tarot en ligneClin.'+PNGsuff;
 
 $('.webpimages').each(function () {
 if ($(this).attr('normalsrc')) {
 //console.log($(this).attr('normalsrc'),$(this).hasClass('loadInvisible'));
 if ( $(this).is(':visible') || $(this).hasClass('loadInvisible') ) {
 $(this).attr('src',$(this).attr('normalsrc')+'.'+suff);
 $(this).attr('normalsrc',null).css('color','');
 }
 }
 });
}
check_webp_feature('alpha',webpfeatureResult);



function addCSS(url) {
 var fileref=document.createElement("link")
 fileref.setAttribute("rel", "stylesheet")
 fileref.setAttribute("type", "text/css")
 fileref.setAttribute("href", url);
 //document.body.append(fileref);
 document.getElementsByTagName("head")[0].appendChild(fileref)
}

function stickAds(){
 var doc = document.documentElement;
 var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
 if (top>310) {
 var globalH = $('#global').height();
 var hh = top-300;
 if (hh+650>globalH) {
 hh = globalH-650;
 if (hh<0) hh = 0;
 $('#stickyHome').css('position','').css('margin-top',hh+'px');
 return;
 }
 $('#stickyHome').css('margin-top','0px').css('top','4px').css('position','fixed');
 } else {

 $('#stickyHome').css('position','').css('margin-top','0px');
 }
};


function sendRecapChatMsg(isFormation) {
 if (!recapChatMsgIdPartie) return;
 var msg = escape($('#sendChatMsgRecap').val());
 var pliVu = '';
 if (isFormation)
 pliVu = gcookie('recapStep');
 if (!msg) return;
 //confirme('Etes-vous sûr de vouloir envoyer ce message ?',function () {
 ajax('/workers/sendRecapChatMsg.php', 'msg='+msg+'&idPartie='+recapChatMsgIdPartie+'&pliVu='+pliVu, evalRes);
 //});
}
var reloadProXXVC = false;
function reloadRecapChatMsg() {
 if (!recapChatMsgIdPartie) return;
 if (reloadProXXVC) return;
 reloadProXXVC = true;
 ajax('/workers/reloadRecapChatMsg.php', 'idPartie='+recapChatMsgIdPartie, function (text) {
 $('#recapChatContent').html(text);
 //ge('recapChatContent')
 var objDiv = document.getElementById("recapChatContent");
 if (objDiv) objDiv.scrollTop = objDiv.scrollHeight;
 reloadProXXVC = false;
 });
}
var recapChatMsgIdPartie = 0;
function setIdPartieRecapChatMsg(idPartie) {
 if (recapChatMsgIdPartie) {
 recapChatMsgIdPartie = 0;
 closeConnexion();
 }
 recapChatMsgIdPartie = idPartie;
 reloadRecapChatMsg();
}




var TOdefidelayedTO = 0;
function showDefiChoisiDelayed() {
 clearTimeout(TOdefidelayedTO);
 TOdefidelayedTO = setTimeout(showDefiChoisi,1400);
}
function showDefiChoisi(paramsStart) {
 clearTimeout(TOdefidelayedTO);

 var params = new Array();
 if ($('#defiAuteur').val()) {
 params.push('defiAuteur='+$('#defiAuteur').val())
 }
 if ($('#defiTitre').val()) {
 params.push('defiTitre='+$('#defiTitre').val())
 }
 if ($('#defiPosition').val()) {
 params.push('defiPosition='+$('#defiPosition').val())
 }
 if ($('#defiAnnonce').val()) {
 params.push('defiAnnonce='+$('#defiAnnonce').val())
 }
 if ($('#defiParticipations').val()) {
 params.push('defiParticipations='+$('#defiParticipations').val())
 }
 
 showPleaseWait();
 ajax('/workers/listeDefis.php', params.join('&')+'&'+paramsStart, clstCallback);
}
function seeSolutionDefiPremium (idPartie,yourIdPartie) {
 confirme('Attention : vous abandonnez alors votre récompense, êtes-vous sûr ?',function () {
 ajax('/workers/solutionDefis.php', 'idPartie='+idPartie+'&yourIdPartie='+yourIdPartie, evalRes);
 });
}
function giveUpDefiPremium (idDefi) {
 confirme('Attention : vous abandonnez alors votre récompense, êtes-vous sûr ?',function () {
 $('#defiligne'+idDefi).remove();
 ajax('/workers/giveUpDefi.php', 'idDefi='+idDefi, evalRes);
 });
}
function razClst (idUtil) {
 confirme('Attention : ce joueur aura tous ses classements actuels de remis à zéro ?',function () {
 ajax('/workers/resetClstJoueur.php', 'idUtil='+idUtil, evalRes);
 });
}

window.onpopstate = function(event) {
 if (hasAGameStarted) return;
 //console.log(event);return;
 if (event.state && event.state.path) {
 /*if (event.state.forumContent) {
 if ($('#forumRes').length>0) {
 $('#forumRes').html(event.state.forumContent);
 return;
 }
 }*/
 document.location = event.state.path;
 }

 //alert("location: " + document.location + ", state: " + JSON.stringify(event.state));
};

function showErrInfo(errID) {
 $('.errorsLsit .hiddenStep').hide();
 $('#Infos'+errID).toggle();
 jQuery.ajax({
 type: 'POST',
 url: '/workers/moderation/errorInfo.php',
 data: {
  idError:errID
 },
 success: function(txt) {
  $('#InfosDetails'+errID).html(txt);
 }
 });
}
var clinOeuil;// = new Image();clinOeuil.src='/Jeu-Tarot-en-ligne/Home/Jeu de tarot gratuitClin.png';
var clinOeuil2;// = new Image();clinOeuil2.src='/Jeu-Tarot-en-ligne/Home/Jeu de Tarot en ligneClin.png';

function slc() {

 $('#imgClHome').mouseover(function() {
 if (!clinOeuil) return;
 $('#imgClHome').attr('src',clinOeuil.src);
 setTimeout(function () {
 $('#imgClHome').attr('src','/Jeu-Tarot-en-ligne/Home/Jeu de tarot gratuit.png');
 },150);
 });
 $('#imgClHome2').mouseover(function() {
 if (!clinOeuil2) return;
 
 $('#imgClHome2').attr('src',clinOeuil2.src);
 setTimeout(function () {
 $('#imgClHome2').attr('src','/Jeu-Tarot-en-ligne/Home/Jeu de Tarot en ligne.png');
 },150);
 });
}
function pushMergeAccounts() {
 ajax('/workers/partiesEnCours.php', $('#mergeAccounts').serialize(), registerStart);
 
}
var resiZESetHHH = false;

function setJouerHeights () {
 var maxHeight = 0;
 if ($('.itemMJ:visible').length==0) return;
 $('.itemMJ:visible').css('height','');
 if ($(window).width()<600) return;
 $('.itemMJ:visible').each(function () {
 if ($(this).height()>maxHeight)
 maxHeight = $(this).height();
 });
 $('.itemMJ:visible').css('height',maxHeight);
 if (!resiZESetHHH) {
 resiZESetHHH = true;
 $( window ).resize(setJouerHeights);
 }
}
function randomDuplicateDistrib() {

 ajax('/workers/getDuplicateDistribution.php', null, function (res) {
 var tab = res.split('|');
 $('#savedDists').val('');
 $('#nbJoueurs').val(4);
 $('#IDdistribution').val(tab[0]);
 $('#NBdistribution').val(tab[1]);
 $('#numSequence').val(tab[2]);
 $('#preneurDist').val(tab[3]);
 $('#formDistrib').submit();
 });
 return;
}
function resetPrenDistrib() {
 $('#preneurDist').val('');
 $('#savedDists').val('0');
}
function randomDistrib() {

 $('#savedDists').val('0');
 $('#IDdistribution').val('');
 $('#numSequence').val('');
 $('#preneurDist').val('');
 $('#formDistrib').submit();
 return;
}
function changeSavedDist(params) {
 var pp = params.split('_');
 
 var nbJoueurs = pp[0];
 var IDdistribution = pp[1];
 var numSequence = pp[2];
 var NBdistribution = pp[3];
 
 $('#nbJoueurs').val(nbJoueurs);
 $('#IDdistribution').val(IDdistribution);
 $('#numSequence').val(numSequence);
 $('#NBdistribution').val(NBdistribution);
 $('#preneurDist').val('');
 $('#formDistrib').submit();
 return;
}
function nextMelange () {
 $('#savedDists').val('0');
 $('#NBdistribution').val(parseInt($('#NBdistribution').val())+1);
 $('#formDistrib').submit();
 return;
}

function threadMoveToSujet(idSujet,endurl) {
 var idDoublon = $('#threadMoveToSujet').val();
 if (!idDoublon) {
 alerte('Veuillez sélectionner un sujet.');
 return;
 }
 var titreDoublon = $("#threadMoveToSujet option:selected").text();
 confirme('Etes-vous sûr de marquer ce sujet comme doublon du sujet &quot;'+titreDoublon+'&quot; ?',function () {
 jQuery.ajax({
  type: 'POST',
  url: '/workers/moderation/forumMoveThreadToSujet.php',
  data: {
  idDoublon:idDoublon,
  idSujet: idSujet
  },
  success: function(txt) {
  alerte(txt,function () {
  document.location = endurl;
  });
  }
 });
 });
}

function threadMoveToCat(idSujet,endurl) {
 var idCat = $('#threadMoveToCat').val();
 if (!idCat) {
 alerte('Veuillez sélectionner une catégorie.');
 return;
 }
 var titreCat = $("#threadMoveToCat option:selected").text();
 confirme('Etes-vous sûr de déplacer ce sujet dans la catégorie &quot;'+titreCat+'&quot; ?',function () {
 jQuery.ajax({
  type: 'POST',
  url: '/workers/moderation/forumMoveThreadToCat.php',
  data: {
  idCat:idCat,
  idSujet: idSujet
  },
  success: function(txt) {
  alerte(txt,function () {
  document.location = endurl;
  });
  }
 });
 });
}
function changeDroitsSujet(idSujet,endurl) {
 
 var editSujet_droits = $('#editSujet_droits').val();
 var editSujet_droits_edition = $('#editSujet_droits_edition').val();
 
 confirme('Etes-vous sûr de vouloir changer les droits de ce sujet ?',function () {
 jQuery.ajax({ 
  type: 'POST',
  url: '/workers/moderation/forumEditDroits.php',
  data: {
  idSujet: idSujet,
  droitsConsultation: editSujet_droits,
  droitsEdition: editSujet_droits_edition
  },
  success: function(txt) {
  alerte(txt,function () {
  document.location = endurl;
  });
  }
 });
 });
}

function threadClosed(idSujet,endurl) {
 var idStatut = $('#threadStatut').val();
 var titreCat = $("#threadStatut option:selected").text();
 confirme('Etes-vous sûr de vouloir marquer ce sujet comme &quot;'+titreCat+'&quot; ?',function () {
 jQuery.ajax({
  type: 'POST',
  url: '/workers/moderation/forumCloseThread.php',
  data: {
  idSujet: idSujet,
  idStatut: idStatut
  },
  success: function(txt) {
  alerte(txt,function () {
  document.location = endurl;
  });
  }
 });
 });
}
function threadVote(idSujet,endurl) {
 var idStatut = $('#threadVote').val();
 var titreCat = $("#threadVote option:selected").text();
 confirme('Etes-vous sûr de vouloir marquer ce sujet comme &quot;'+titreCat+'&quot; ?',function () {
 jQuery.ajax({
  type: 'POST',
  url: '/workers/moderation/forumVote.php',
  data: {
  idSujet: idSujet,
  idStatut: idStatut
  },
  success: function(txt) {
  alerte(txt,function () {
  document.location = endurl;
  });
  }
 });
 });
}

function threadSensible(idSujet,endurl) {
 var idStatut = $('#threadSensible').val();
 var titreCat = $("#threadSensible option:selected").text();
 confirme('Etes-vous sûr de vouloir marquer ce sujet comme &quot;'+titreCat+'&quot; ?',function () {
 jQuery.ajax({
  type: 'POST',
  url: '/workers/moderation/forumSensibilite.php',
  data: {
  idSujet: idSujet,
  idStatut: idStatut
  },
  success: function(txt) {
  alerte(txt,function () {
  document.location = endurl;
  });
  }
 });
 });
}

function categorieFollow(idCat) {
 $('.followCatBtn').toggle();
 jQuery.ajax({
 type: 'POST',
 url: '/workers/moderation/forumCatFollow.php',
 data: {
  idCat: idCat
 },
 success: function(txt) {
  console.log(txt);
 }
 });
}

function categorieFollowStop(idCat) {
 $('.followCatBtn').toggle();
 jQuery.ajax({
  type: 'POST',
  url: '/workers/moderation/forumCatFollowStop.php',
  data: {
  idCat: idCat
  },
  success: function(txt) {
  console.log(txt);
  }
 });
}

function sujetFollow(idSujet) {
 $('.followSujBtn').toggle();
 jQuery.ajax({
 type: 'POST',
 url: '/workers/moderation/forumSujetFollow.php',
 data: {
  idSujet: idSujet
 },
 success: function(txt) {
  console.log(txt);
 }
 });
}

function sujetFollowStop(idSujet) {
 $('.followSujBtn').toggle();
 jQuery.ajax({
  type: 'POST',
  url: '/workers/moderation/forumSujetFollowStop.php',
  data: {
  idSujet: idSujet
  },
  success: function(txt) {
  console.log(txt);
  }
 });
}

function forumBgShowCat (idCat,obj) {

 if (obj.src.indexOf('OFF')==-1)
 obj.src=obj.src.split('.png').join('OFF.png');
 if ($('#previewCat'+idCat).html()){
 $('#previewCat'+idCat).html('');
 return;
 }
 jQuery.ajax({
 type: 'POST',
 url: '/workers/forum.php',
 data: {
  idCat: idCat
 },
 success: function(txt) {
  $('#previewCat'+idCat).html(txt);
 },
 error: function() {
  if (console && console.error) {
  console.error('JS error report submission failed!');
  }
 }
 });
}

function forumAjaxShowSujet (idSujet,idCat,tsort,titre) {

 $('.qc-cmp-persistent-link').remove();
 var message = 'Veuillez patienter pendant le chargement...';
 $('.infoAll').html('');
 window.scroll(0,0);
 $$('forumRes').innerHTML = '<br /><hr/><h2 class="intro-text text-center">'+message+'</h2><hr/><br /><br />'; 
 $('li.sel').removeClass('sel');
 
 jQuery.ajax({
 type: 'POST',
 url: '/workers/forum.php',
 data: {
  idSujet: idSujet,
  noWorker: 1,
  fromCat : idCat,
  fromSort : tsort
 },
 success: function(txt) {
  $('#forumRes').html(txt);
  showHTMLbuttons();
  if (titre) {
  try {
   var newurl = window.location.protocol + "//" + window.location.host + '/forum-sujet/'+idSujet+'/'+titre;
   window.history.pushState({path:newurl},'',newurl);
  } catch (e) { }
  }
 },
 error: function() {
  if (console && console.error) {
  console.error('JS error report submission failed!');
  }
 }
 });
 return false;
}
function workerForumCB (t) {

 if ($$('forumRes')==null) return;
 $$('forumRes').innerHTML = (t);
 window.scroll(0,0);
 showHTMLbuttons();
}
var TOSEARCHFORUM = 0;
function updateSearchSujetForum() {
 clearTimeout(TOSEARCHFORUM);
 TOSEARCHFORUM = setTimeout(updateSearchSujetForumInt,700);
}
function updateSearchSujetForumInt() {
 //$('.moreSujets').show();
 var ss = $('#searchForumSujet').val();
 //console.log('search '+ss);
 $('table.myWide tr').each(function () {
 if ($(this).attr("search")) {
 //console.log('Line '+$(this).attr("search"));
 if ( $(this).attr("search").toLowerCase().indexOf(ss.toLowerCase())!=-1)
 $(this).show();
 else
 $(this).hide();
 }
 });
}
function showForumPage (page,params,getParams)
{
 $('.qc-cmp-persistent-link').remove();
 var message = 'Veuillez patienter pendant le chargement...';
 $('.infoAll').html('');
 window.scroll(0,0);
 $$('forumRes').innerHTML = '<br /><hr/><h2 class="intro-text text-center">'+message+'</h2><hr/><br /><br />'; 
 $('li.sel').removeClass('sel');
 
 var url = '/workers/'+page+'.php';
 if (getParams) url += '?'+getParams;
 //showPleaseWait();
 ajax(url, params, workerForumCB);
 return false;
}
function forumAjaxShowCat (idCat,sort,titre) {
 $('.qc-cmp-persistent-link').remove();
 var message = 'Veuillez patienter pendant le chargement...';
 $('.infoAll').html('');
 window.scroll(0,0);
 $$('forumRes').innerHTML = '<br /><hr/><h2 class="intro-text text-center">'+message+'</h2><hr/><br /><br />'; 
 $('li.sel').removeClass('sel');
 
 jQuery.ajax({
 type: 'POST',
 url: '/workers/forum.php?sort='+sort,
 data: {
  idCat: idCat,
  noWorker: 1
 },
 success: function(txt) {
  $('#forumRes').html(txt);
  showHTMLbuttons();
  try {
  var newurl = window.location.protocol + "//" + window.location.host + '/forum-cat/'+idCat+'/'+titre;
  window.history.pushState({path:newurl},'',newurl);
  } catch (e) { }
 },
 error: function() {
  if (console && console.error) {
  console.error('JS loadpage failed!');
  }
 }
 });
 return false;
}


function forumBgShowSujet (idSujet,obj) {
 if (obj.src.indexOf('OFF')==-1)
 obj.src=obj.src.split('.png').join('OFF.png');
 
 if ($('#previewSujet'+idSujet).html()){
 $('#previewSujet'+idSujet).html('');
 return;
 }
 jQuery.ajax({
 type: 'POST',
 url: '/workers/forum.php',
 data: {
  idSujet: idSujet
 },
 success: function(txt) {
  $('#previewSujet'+idSujet).html(txt);
 },
 error: function() {
  if (console && console.error) {
  console.error('JS loadpage failed!');
  }
 }
 });
}
/*WebFontConfig = {
 google: { families: [ 'Pathway+Gothic+One', 'Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800' ] }
 };
 (function() {
 var wf = document.createElement('script');
 wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
 '://ajax.googleapis.com/ajax/libs/webfont/1.5.18/webfont.js';
 wf.type = 'text/javascript';
 wf.async = 'true';
 var s = document.getElementsByTagName('script')[0];
 s.parentNode.insertBefore(wf, s);
 })();*/

/*
window.requestAnimFrame = (function(){
 return window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  function( callback ){
  window.setTimeout(callback, 1000 / 60);
  };
})();
var deltaLoop = 50;
var animFrDate = null;
function animloop(){
 var continueAnimating = false;
 var curDatt = new Date().getTime();
 if (animFrDate)
 deltaLoop = curDatt-animFrDate;
 else deltaLoop = 50;
 animFrDate = curDatt;
 if (deltaLoop>1500) deltaLoop = 1500;
 for (var i in myAnimatedProps) {
 var objM = myAnimatedProps[i];
 var animData = objM.data('animData');
 if (animData) {
 var tpsRestant = animData.duration-curDatt+animData.startTime;
 var iterRestantes = Math.floor(tpsRestant/deltaLoop);
 for (var p in animData.props) {
 var destV = parseFloat(animData.props[p]);
 if (iterRestantes<=0) {
 objM.css(p,destV);
 } else {
 var currV = parseFloat(objM.css(p));
 var deltaV = (destV-currV)/iterRestantes;
 var newV = currV+deltaV;
 objM.css(p,newV);
 }
 }
 if (iterRestantes<=0) {
 objM.data('animID',0);
 delete myAnimatedProps[i];
 if (animData.endFunc)
 animData.endFunc();
 } else
 continueAnimating = true;
 } else
 delete myAnimatedProps[i];
 }
 if (continueAnimating)
 requestAnimFrame(animloop);
 else {
 animFrDate = null;
 myAnimatedProps = {};
 }
};
var myAnimatedProps = {};
var cptmyAnimatedProps = 0;

(function( $ ){
 $.fn.myAnimate = function(props,duration,endFunc) {
 var self = $(this);
 if (self.data('animID') ) {
 props = $.extend(self.data('animData').props, props);
 delete myAnimatedProps[self.data('animID')];
 }
 cptmyAnimatedProps++;
 myAnimatedProps[cptmyAnimatedProps]=self;
 self.data('animID',cptmyAnimatedProps);

 var animData = {
 props:props,
 duration:duration,
 endFunc:endFunc,
 startTime:new Date().getTime()
 }
 self.data('animData',animData);
 requestAnimFrame(animloop);
 return this;
 }; 
 })( jQuery );
*/
/*********** fonctions site ******/
var logStrings = [];
function llog(t) {
 logStrings.push({txt:t,ts:new Date()});
 if (typeof console == "undefined") return;
 if (!console) return;
 if (console && console.log) {
 console.log(t);
 }
}

function alertRes (res) {
 if (res!='' && res!='ok' && res!='OK')
 alert(res);
}
var numErrLogged = 0;
var lastErrorType = '';
var lastErrorParam = '';
function errorLog (type, params) {
 if ($('.errorDlg').length>0) return;
 if (numErrLogged>3) return;
 if (type=="Script error.") return;
 if (type=="Script error") return;
 if (type && type.split) {
 if (type.split('adsbygoogle').length>1) return;
 if (type.split('postMessage').length>1) return;
 }
 lastErrorType = type;
 lastErrorParam = params;
 sendErrorLog (type, params);
 if (gcookie('hideErrorDlg')=='1') return;
 return;
 var resHTML = '<form class="feedback_form errorDlg" onsubmit="return false;">';
 resHTML += 'Une erreur est survenue :<br />';
 resHTML += '<pre>'+type+'</pre>';
 resHTML += 'Vous pouvez nous écrire une description du problème et nous soumettre le rapport d\'erreur :<br />';
 resHTML += '<textarea class="form-control" id="rapportErreurTxt"></textarea>';
 resHTML += '<input type="checkbox" onclick="changeRapportNotif(this);" checked="checked"/>Continuer d\'afficher cette fenêtre pour les prochaines erreurs.<br />';
 resHTML += '<input class="btn btn-warning ptobt pbtn" type="button" onclick="parentHide($(this));" value="Fermer"/>';
 resHTML += '<input class="btn btn-success ptobt pbtn" type="button" onclick="sendError();parentHide($(this));" value="Envoyer le rapport"/>';
 
 resHTML += '<br /></form>';
 showBigDialog('Erreur technique',resHTML);
}
function customShare(url) {
 var resHTML = '<form class="feedback_form errorDlg" onsubmit="return false;">'; 
 resHTML += 'Votre partie est disponible à l\'adresse suivante :<br />';
 resHTML += '<textarea class="form-control">'+url+'</textarea>';
 resHTML += '<input class="btn btn-warning ptobt pbtn" type="button" onclick="parentHide($(this));" value="Fermer"/>';
 
 resHTML += '<br /></form>';
 showBigDialog('Partage de partie',resHTML);
}
function changeRapportNotif (obj) {
 if (obj.checked)
 scookie('hideErrorDlg',"");
 else
 scookie('hideErrorDlg',"1");
 gcookie('hideErrorDlg')
}
function copieJoueurInvites(j) {
 scookie('copiedPlayers',j);
}
function sendError () {
 sendErrorLog (lastErrorType, lastErrorParam);
}
var dateStratScrip = new Date().getTime();
var lastExecutedScriptForLogs = '';
function sendErrorLog (type, params) {
 var myParam = {
 userAgent:navigator.userAgent,
 type:type,
 descriptionUtilisateur:escape($('#rapportErreurTxt').val()).split('+').join('%2B'),
 logStrings:logStrings,
 params:params,
 location:window.location.href,
 execTime: Math.floor((new Date().getTime()-dateStratScrip)/1000)+' secondes' ,
 now:new Date(),
 startedAt:new Date(dateStratScrip),
 lastExecutedScriptForLogs:lastExecutedScriptForLogs
 };
 llog(params);
 numErrLogged++;
 
 jQuery.ajax({
 type: 'POST',
 url: '/workers/logErr.php',
 data: {
  type: escape(type),
  params: myParam
 },
 success: function() {
  llog('JS error report successful.');
 },
 error: function() {
  if (console && console.error) {
  console.error('JS error report submission failed!');
  }
 }
 });

 // Prevent firing of default error handler.
 return true;
}
function errorDetected(msg, url, lineNo, columnNo, error) {
 //if (typeof url.indexOf == 'undefined') return;
 if (msg=="Script error.") return true;
 if (url && typeof url.indexOf !== 'undefined') {
 if( url.indexOf('tarot')==-1) return true;
 }
 var stack = null;
 if (error && typeof error.stack !='undefined') stack = error.stack;

 if (stack && stack.toString().indexOf('/main.js')>0) return true;
 if (stack && stack.toString().indexOf('/cookiecmp.js')>0) return true;
 if (stack && stack.toString().indexOf('/cmpui-banner.js')>0) return true;
 
 var params = {
 stack:stack,
 msg:msg,
 url:url,
 lineNo:lineNo,
 columnNo:columnNo,
 error:error,
 lastAjaxRequest:lastAjaxRequest
 }
 errorLog (msg, params)
}
window.onerror = errorDetected;

function evalRes(src) {
 try {
 lastExecutedScriptForLogs = src;
 eval(src);
 } catch (e) {
 /*if (e=='Error: Out of memory') {
 alert('Memoire insufisante');
 return;
 }*/
 var params = {
 type:'evalRes',
 exception:e,
 src:src,
 stackJ:e.stack,
 lastAjaxRequest:lastAjaxRequest
 }
 errorLog (e,params);
 }
}
 
var isIE = navigator.appName.indexOf("Microsoft") != -1;

function CopyToClipboard(obj) {
 
 window.prompt('Valeur',obj.innerText);
}
function contactAngry () {
 var txt=$('#afafafafaf').val().toLowerCase();
 if (txt.indexOf('vous êtes super')!=-1 || txt.indexOf('site génial')!=-1 || txt.indexOf('super site')!=-1 || txt.indexOf('bravo')!=-1 || txt.indexOf('je vous aime')!=-1 || txt.indexOf('amour')!=-1 || txt.indexOf('gentillesse')!=-1 || txt.indexOf('merci')!=-1 || txt.indexOf('félicitations')!=-1) {
 $('#global').html('<b>Vous avez trouvé l\'oeuf de paques !</b><br>Jouez ici a puissance 4 en multijoueur, mais il vous faut inviter un ami !<br><iframe src="http://mini-games.virtual-pet-game.com/fourinline/" style="width:100%;height:600px;"/>');
 $('#afafafafaf').val('');
 return;
 }
 $('#afafafafaf').val('');alerte('Merci.'); 
}
function modeP(p) {
 $('.hiddenStep').hide();
 $('#'+p).show();
}
function signalerUtilMalpoliInt(idUtil,cptBobYY) {
 var txt = $$('raisonMode'+cptBobYY).value;
 var typ = $$('typeMode'+cptBobYY).value;
 if (txt.length>10) {
 ajax('/Contact-organisation-jeu-de-tarot.php', 'ajaxRes=1&contact[dest]='+idUtil+'&contact[message]='+escape(txt).split('+').join('%2B')+'&contact[sujet]='+escape(typ), function (res) {
 alert(res.split('<spanResult/>')[1].split('<p>').join('').split('</p>').join(''));
 if (confirm('Voulez-vous également placer ce joueur dans votre liste noire ?')) {
 ajax('/workers/signalerJoueur.php', 'idUtil='+idUtil+'&raison=Autre', signalementFin);
 }
 });
 } else alert('Message insufisant');
}
function signalerUtilMalpoli(idUtil) {
 window.scroll(0,0);
 var resHTML = '<form class="disableKeyEvents" onsubmit="return false;">';
 resHTML +='<select class="form-control" id="typeMode'+cptBobYY+'">';
 resHTML +='<option value="Un joueur s\'est mal comporté dans le chat">Langage offensant</option>';
 resHTML +='<option value="Biographie ou avatar incorrects">Bio ou Avatar offensant</option>';
 resHTML +='<option value="Un joueur se comporte mal dans le jeu">Anti jeu délibéré</option>';
 resHTML +='<option value="Un joueur triche">Triche</option>';
 resHTML +='</select><br>';
 //resHTML +='<b>Votre message sera transmis aux modérateurs.</b><br>';
 resHTML +='Veuillez saisir une description du problème (pour un problème en jeu, n\'oubliez pas de préciser la manche) :<br>';
 resHTML +='<textarea class="form-control" id="raisonMode'+cptBobYY+'"></textarea>';
 resHTML +='<input class="btn ptobt btn-default pbtn" type="button" value="Envoyer" onclick="signalerUtilMalpoliInt('+idUtil+','+cptBobYY+' );parentHide($(this));$(\'#Massist'+idUtil+'\').remove();" />';
 resHTML +='</form>';
 showBigDialog('Signaler à un modérateur',resHTML);
 cptBobYY++;
 
}
function signalerUtilMalpoliModer(idUtil,reason) {
 var resHTML = '<form class="disableKeyEvents" onsubmit="return false;">';
 //resHTML +='<b>Votre message sera transmis aux modérateurs.</b><br>';
 resHTML +='Veuillez saisir le point du règlement du site qui n\'est pas respecté, ou une explication, ou simplement laisser tel quel le texte par défaut :<br>';
 resHTML +='<input type="hidden" value="'+reason+'" id="typeMode'+cptBobYY+'"/>';
 resHTML +='<textarea class="form-control" id="raisonMode'+cptBobYY+'">Signalement à administrateur, sanction éventuelle</textarea>';
 resHTML +='<input class="btn ptobt btn-default pbtn" type="button" value="Envoyer" onclick="signalerUtilMalpoliIntMode(\''+idUtil+'\','+cptBobYY+' );parentHide($(this));" />';
 resHTML +='</form>';
 showBigDialog('Signaler à Admin',resHTML);
 cptBobYY++;
 
}
function signalerUtilMalpoliIntMode(idUtil,cptBobYY) {
 var txt = $$('raisonMode'+cptBobYY).value;
 var typ = $$('typeMode'+cptBobYY).value;
 $('#Massist'+idUtil.split('&')[0]).remove();
 
 ajax('/Contact-organisation-jeu-de-tarot.php', 'setTraite=1&ajaxRes=1&contact[dest]='+idUtil+'&contact[message]='+escape(txt).split('+').join('%2B')+'&contact[sujet]='+escape(typ), function (res) {
 //alert(res.split('<spanResult/>')[1].split('<p>').join('').split('</p>').join(''));
 });
}
function banPseudo() {
 var pseudo = $('#banpseudo').val();
 if (pseudo=='')
 return alerte('Veuillez saisir un pseudo');
 ajax('/workers/findUser.php', 'pseudo='+pseudo,function(res) {
 if (res.split('-').length<2)
 alerte(res);
 else {
 var tab = res.split('-');
 signalerJoueur (tab[0],pseudo);
 /*$('#searchPseudoID').val(tab[0]);
 var html = '<label>Joueur concerné : '+pseudo+'</label> <br>';
 html += '<img src="/workers/avatar.php?a&idImage='+tab[1]+'"/>';
 $('#searchPseudoBox').html(html);*/
 }
 
 });
 //ajax('/workers/joueur.php', 'part=blacklist&pseudoAdd='+pseudo, clstCallback);
}

function showLogsAccess(baseURL,baseURL2, hosts, ip) {
 $('#AccessLog').html('');
 for (var i in hosts) {
 var ipHost = hosts[i];
 if (typeof ipHost == 'string') {

 ajax('http://'+ipHost+baseURL+ip, '', function (res) {
 if (res.trim()!='') {
  $('#AccessLog').append('<b>Result</b><br>'+res);
 }
 });
 ajax('http://'+ipHost+baseURL2+ip, '', function (res) {
 if (res.trim()!='') {
  $('#AccessLog').append('<b>Result</b><br>'+res);
 }
 });
 }
 }
}
function supprimerCompte(disposeCredits,codeVerif) {
 var al = true;
 if (disposeCredits) {
 al = confirm('ATTENTION : vous disposez encore de crédits sur ce compte. Etes-vous sûr ?');
 if (al!=true) return false;
 }
 if (confirm('Etes-vous sur de vouloir demander la suppression de votre compte ?')) {

 if (confirm('ATTENTION : cette opération est immédiate et définitive, êtes-vous sur ?')) {
 document.location = '/?deleteAccount='+codeVerif+'&pw='+$('#thePWDEL').val();
 }
 }
}
function delCommentModeA(raison, duree, param, succes) {
 ajax('/workers/forumCommentDelete.php', 'idComment='+param+'&reason='+raison, function (res) {
 if (res=='OK')
 document.location.reload();
 else alerte(res);
 }); 
}
function delCommentMode(idComment) {
 banMode('delCommentModeA',0,idComment );
}
function delMyComment(idComment) {
 confirme('Etes vous sûr de vouloir supprimer ce commentaire ?',function () {
 
 ajax('/workers/forumCommentDelete.php', 'idComment='+idComment, function (res) {
 if (res=='OK')
 document.location.reload();
 else alerte(res);
 }); 
 })
}
function commentReponse(idReponse,idEmot) {
 ajax('/workers/forumComment.php', 'idEmot='+idEmot+'&idReponse='+idReponse, function (res) {
 if (res!='OK') {
 $('#emots'+idReponse).html(res);
 }
 });
}
function commentSujet(idSujet,idEmot) {
 ajax('/workers/forumCommentSujet.php', 'idEmot='+idEmot+'&idSujet='+idSujet, function (res) {
 if (res!='OK') {
 $('#emotsSujet'+idSujet).html(res);
 }
 });
}

function commentReponsePersoInt(cptBobYY,idReponse)
{
 var msg = $('#commentReponse'+cptBobYY).val();
 if (msg) {
 msg = escape(msg).split('+').join('%2B');
 ajax('/workers/forumCommentPerso.php', 'msg='+msg+'&idReponse='+idReponse, function (res) {
 document.location.reload();
 }); 
 return true;
 }
 return false;
}
function showBigComment(idReponse) {

 dialogNum++;
 var dlgID = dialogNum+"IF";
 
 var resHTML = '<form onsubmit="return false;">';
 resHTML +='<b>Veuillez saisir votre commentaire.</b><br>';
 //resHTML +='Veuillez saisir la raison de votre décision de modération, en citant des extraits de conversation du joueur :<br>';
 resHTML +='<div class="htmlbutt" idTxt="commentReponse'+dlgID+'"></div>';
 resHTML +='<textarea class="form-control" style="height:500px;" id="commentReponse'+dlgID+'">';
 resHTML +='</textarea>';
 resHTML +='<input class="btn ptobt btn-success pbtn" type="button" value="Envoyer" onclick="if (commentReponsePersoInt(\''+dlgID+'\','+idReponse+')) { $(\'#myDialog'+dlgID+'\').remove(); } else return false;" />';
 resHTML +='<input class="btn ptobt btn-danger pbtn" type="button" value="Fermer" onclick="$(\'#myDialog'+dlgID+'\').remove();" />';
 resHTML +='</form>';
 
 
 var dialog = document.createElement('div');
 dialog.id = 'myDialog'+dlgID;
 dialog.className = 'dialogBox dialogWide';
 dialog.innerHTML = resHTML;
 document.body.appendChild(dialog);
 showHTMLbuttons();
 $('#commentReponse'+dlgID).val($('#commentReponse'+(cptBobYY-1)).val());
 return "myDialog"+dlgID; 
}

function commentReponsePerso(idReponse)
{
 var resHTML = '<form onsubmit="return false;">';
 resHTML +='<b>Veuillez saisir votre commentaire.</b><br>';
 //resHTML +='Veuillez saisir la raison de votre décision de modération, en citant des extraits de conversation du joueur :<br>';
 resHTML +='<div class="htmlbutt" idTxt="commentReponse'+cptBobYY+'"></div>';
 resHTML +='<textarea class="form-control" style="height:150px;" id="commentReponse'+cptBobYY+'">';
 resHTML +='</textarea>';
 resHTML +='<input class="btn ptobt btn-success pbtn" type="button" value="Envoyer" onclick="if (commentReponsePersoInt('+cptBobYY+','+idReponse+')) { parentHide($(this)); } else return false;" />';
 resHTML +='<input class="btn ptobt btn-info pbtn" type="button" value="Agrandir" onclick="showBigComment('+idReponse+');parentHide($(this));" />';
 resHTML +='</form>';
 showBigDialog('Commenter une réponse',resHTML);
 showHTMLbuttons();
 //megaModal(resHTML);
 cptBobYY++;
} 
function sendMessageForum(idSujet,fromCat,fromSort) {
 var txt = $('#postReponse_txt').val();
 if (txt.trim()=='') {
 alerte('Veuillez saisir un message');
 return false;
 } 
 var allowSmileys = '';
 if ($('#enableSmileys').is(':checked')) {
 allowSmileys = '&enableSmileys=1';
 }
 confirme('Etes-vous sûr de vouloir envoyer cette réponse ? Pensez à vous relire.',function () {
 $('#postReponse_btn').hide();
 ajax('/workers/forumReponse.php', 'reponse='+escape(txt).split('+').join('%2B')+'&idSujet='+idSujet+allowSmileys, function (res) {
 if (res!='OK') {
 $('#postReponse_btn').show();
 alerte(res);
 }
 else {
 return forumAjaxShowSujet(idSujet,fromCat,fromSort);
 //document.location = endURL;
 }
 });
 return false;
 });
 return false;
}
function sendSujetForum(idCat) {
 var txt = $('#postSujet_txt').val();
 if (txt.trim()=='') {
 alerte('Veuillez saisir un message');
 return false;
 } 
 var titre = $('#postSujet_titre').val();
 if (titre.trim()=='') {
 alerte('Veuillez saisir un titre');
 return false;
 } 
 var allowSmileys = '';
 if ($('#enableSmileys').is(':checked')) {
 allowSmileys = '&enableSmileys=1';
 }
 var addVal = '';
 if ($('#postSujet_droits').length)
 addVal += '&droitsConsultation='+$('#postSujet_droits').val();
 if ($('#postSujet_droits_edition').length)
 addVal += '&droitsEdition='+$('#postSujet_droits_edition').val();
 
 confirme('Etes-vous sûr de vouloir envoyer ce sujet ? Pensez à vous relire et à ne pas poster un sujet déjà existant sur le forum.',function () {
 confirme('Etes-vous sûr que ce sujet n\'est pas déjà présent sur le forum ?', function () {
 $('#postSujet_btn').hide();
 ajax('/workers/forumSujet.php', 'titre='+escape(titre).split('+').join('%2B')+'&txt='+escape(txt).split('+').join('%2B')+'&idCat='+idCat+addVal+allowSmileys, function (res) {
 if (res!='OK') {
 $('#postSujet_btn').show();
 alerte(res);
 }
 else
 document.location.reload();
 });
 return false;
 });
 });
 return false;
} 
function delReponseA (txt,duree,idReponse,successFn)
{
 if (!successFn) successFn = alertRes;
 ajax('/workers/forumReponseDel.php', 'txt='+txt+'&idReponse='+idReponse, successFn); 
} 
function undelReponse (idReponse)
{
 //if (!successFn) successFn = alertRes;
 ajax('/workers/forumReponseUndel.php', 'idReponse='+idReponse, function () { document.location.reload(); } ); 
} 

function delReponse(idReponse) {
 var self = $(this);
 //banMode(typeBan,duree,idtoban,successFn,defTexte);
 banMode('delReponseA',0,idReponse,function () { document.location.reload(); } );
 /*confirme('Etes-vous sûr de vouloir supprimer cette réponse ? Cette opération ne pourra plus être annulée.', function () {
 
 ajax('/workers/forumReponseDel.php', 'idReponse='+idReponse, function () {
 document.location.reload();
 });
 return false;
 });*/
}
function delSujet(idSujet) {

 confirme('Etes-vous sûr de vouloir supprimer ce sujet ? Cette opération ne pourra plus être annulée.',function () {
 $(this).hide();
 ajax('/workers/forumSujetDel.php', 'idSujet='+idSujet, function () {
 document.location.reload();
 });
 return false;
 });
}
function showGameStep(step) {
 $('.gameStepBt').removeClass('selStep');
 $('.myRec'+step).addClass('selStep');
 $('.histo2nd').hide();
 scookie('recapStep',step);
 $('.etapeJeu').addClass('hiddenStep');
 $('.'+step).removeClass('hiddenStep');
}
function showRecapManche(manche) {
 scookie('recapManche',manche);
 $('.recapMacn').addClass('hiddenManche');
 $('.recapManche'+manche).removeClass('hiddenManche');
}



function cufonRefresh()
{   
}
function cufonRefreshTO()
{
}
function animateId (id,destX,destY) {
 var sizeCard = getPlayedCardSizeHTML();

 var neW = sizeCard.w;
 var neH = sizeCard.h;
 /*if ( $('.cardJeu').length>0) {
 neW = $('.cardJeu').width();
 neH = $('.cardJeu').height();
 }*/
 if (destX!=null && destY!=null)
 $('#'+id.split('.').join('\\.')).animate({
 width:neW,
 height:neH,
 left: destX+'px',
 top: destY+'px'
 }, 600, function() {
 // Animation complete.
 });

 if (destY==null)
 $('#'+id.split('.').join('\\.')).animate({
 left: destX+'px'
 }, 600, function() {
 // Animation complete.
 });

 if (destX==null)
 $('#'+id.split('.').join('\\.')).animate({
 top: destY+'px'
 }, 600, function() {
 // Animation complete.
 });
}
function animateIdHTML2 (id,destX,destY) {
 var sizeCard = getPlayedCardSizeHTML2();

 var neW = sizeCard.w;
 var neH = sizeCard.h;
 /*if ( $('.cardJeu').length>0) {
 neW = $('.cardJeu').width();
 neH = $('.cardJeu').height();
 }*/
 if (destX!=null && destY!=null)
 $('#'+id.split('.').join('\\.')).animate({
 width:neW,
 height:neH,
 left: destX+'px',
 top: destY+'px'
 }, 600, function() {
 // Animation complete.
 });

 if (destY==null)
 $('#'+id.split('.').join('\\.')).animate({
 left: destX+'px'
 }, 600, function() {
 // Animation complete.
 });

 if (destX==null)
 $('#'+id.split('.').join('\\.')).animate({
 top: destY+'px'
 }, 600, function() {
 // Animation complete.
 });
}

function clstCallback(t) 
{
 if ($$('global')==null) return;
 $$('global').innerHTML = (t);
 window.scroll(0,0);
 if ($$('script')!=null) eval($$('script').innerHTML);
 cufonRefresh() ;
}
function showPleaseWait(message) {
 if ($$('global')==null) return;
 $('.qc-cmp-persistent-link').remove();
 if (!message) message = 'Veuillez patienter pendant le chargement...';
 $('.infoAll').html('');
 window.scroll(0,0);
 $$('global').innerHTML = '<br /><hr/><h2 class="intro-text text-center">'+message+'</h2><hr/><br /><br />'; 
 $('li.sel').removeClass('sel');
}
function delBlacklist (id)
{
 ajax('/workers/joueur.php', 'part=blacklist&idDelete='+id, clstCallback);
} 
function renewBlacklist (id)
{
 ajax('/workers/joueur.php', 'part=blacklist&renewBlacklist='+id, clstCallback);
} 


function showOldClst (pageNum)
{
 showPleaseWait();
 ajax('/workers/classementOld.php', 'pageNum='+pageNum, clstCallback);
} 
function showOldClst5 (pageNum)
{
 showPleaseWait();
 ajax('/workers/classementOld.php', 'pageNum='+pageNum+'&nbjq=5', clstCallback);
} 
function showSanctionsList() {
 showWorkerPageCB ('baremeSanctions','','',CBbaremeSanctions);
}
function CBbaremeSanctions(txt) {
 $('#baremeSanctionsList').remove();
 $('#global').prepend(txt);
 $('html, body').stop().animate( { scrollTop: $$('global').offsetTop }, 750 );
}
function showWorkerPageCB (page,params,getParams,CB)
{
 var url = '/workers/'+page+'.php';
 if (getParams) url += '?'+getParams;
 //$(this).hide();
 //showPleaseWait();
 ajax(url, params, CB);
 return false;
}

function showWorkerPage (page,params,getParams)
{
 var url = '/workers/'+page+'.php';
 if (getParams) url += '?'+getParams;
 showPleaseWait();
 ajax(url, params, clstCallback);
 return false;
}
function showWorkerPageOffline (page,getParams)
{
 $('.qc-cmp-persistent-link').remove();
 
 var url = '/workers/'+page+'.php';
 if (getParams) url += '?'+getParams;
 
 $.ajax({
 url: url,
 type:'GET',
 success: function (t) {
 clstCallback(t);
 }
 }); 
 return false;
}

function showWorkerPageBg (page,params,getParams)
{
 var url = '/workers/'+page+'.php';
 if (getParams) url += '?'+getParams;
 //showPleaseWait();
 ajax(url, params, clstCallback);
 return false;
}

function showClstPage (mode,pageNum,params)
{
 showPleaseWait();
 var postVars = 'pageNum='+pageNum+'&modeClassement='+mode;
 if (params)
 postVars += '&'+params;
 ajax('/workers/classement.php', postVars , clstCallback);
}
/*
function showGame(id)
{
 $$('detailPartei').innerHTML = '';
 $$('divJoueurs').innerHTML = '';
 showWorkerPage ('partie','part=3&idPartie='+id);
}*/
/*********** fin fonctions site ******/
        
 

function $$ (id)
{
 return document.getElementById(id);
} 

var Utf8 = {
 
 // public method for url encoding
 encode : function (string) {
 string = string.replace(/\r\n/g,"\n");
 var utftext = "";
 
 for (var n = 0; n < string.length; n++) {
 
  var c = string.charCodeAt(n);
 
  if (c < 128) {
  utftext += String.fromCharCode(c);
  }
  else if((c > 127) && (c < 2048)) {
  utftext += String.fromCharCode((c >> 6) | 192);
  utftext += String.fromCharCode((c & 63) | 128);
  }
  else {
  utftext += String.fromCharCode((c >> 12) | 224);
  utftext += String.fromCharCode(((c >> 6) & 63) | 128);
  utftext += String.fromCharCode((c & 63) | 128);
  }
 
 }
 
 return utftext;
 },
 
 // public method for url decoding
 decode : function (utftext) {
 var string = "";
 var i = 0;
 var c = c1 = c2 = 0;
 
 while ( i < utftext.length ) {
 
  c = utftext.charCodeAt(i);
 
  if (c < 128) {
  string += String.fromCharCode(c);
  i++;
  }
  else if((c > 191) && (c < 224)) {
  c2 = utftext.charCodeAt(i+1);
  string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
  i += 2;
  }
  else {
  c2 = utftext.charCodeAt(i+1);
  c3 = utftext.charCodeAt(i+2);
  string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
  i += 3;
  }
 
 }
 
 return string;
 }
 
}


 
function getFormString( formRef, oAndPass, oTypes, oNames ) {
 //alert('ppp');
 if( oNames ) {
 oNames = new RegExp((( oTypes > 3 )?'\\b(':'^(')+oNames.replace(/([\\\/\[\]\(\)\.\+\*\{\}\?\^\$\|])/g,'\\$1').replace(/,/g,'|')+(( oTypes > 3 )?')\\b':')$'),'');
 var oExclude = oTypes % 2;
 }
 //alert(formRef.elements);
 for( var x = 0, oStr = '', y = false; formRef.elements[x]; x++ ) {
 //alert(formRef.elements[x].type);
 if( formRef.elements[x].type ) {
  if( oNames ) {
  var theAttr = ( oTypes > 3 ) ? formRef.elements[x].className : ( ( oTypes > 1 ) ? formRef.elements[x].id : formRef.elements[x].name );
  if( ( oExclude && theAttr && theAttr.match(oNames) ) || ( !oExclude && !( theAttr && theAttr.match(oNames) ) ) ) { continue; }
  }
  var oE = formRef.elements[x]; var oT = oE.type.toLowerCase();
  if ( oE.name)
  {    
  if( oT == 'hidden' || oT == 'text' || oT == 'textarea' || ( oT == 'password' && oAndPass ) || oT == 'datetime' || oT == 'datetime-local' || oT == 'date' || oT == 'month' || oT == 'week' || oT == 'time' || oT == 'number' || oT == 'range' || oT == 'email' || oT == 'url' ) {
   oStr += ( y ? '&' : '' ) + oE.name+ '=' + escape(oE.value).split('+').join('&#43;');//.replace(/,/g,'%c')
   y = true;
  //alert(oT+oE.value+oE.name);
  } else if( oT == 'radio' ) {
  //alert(oE.name+"-"+oE.checked+"-"+oE.value+"-"+oE.selected);
  if (oE.checked)
   oStr += ( y ? '&' : '' ) + oE.name+ '=' + ( oE.checked ? oE.value : '' );
   y = true;
  } else if( oT == 'checkbox' ) {
  // alert(oE.name+"-"+oE.checked+"-"+oE.value+"-"+oE.selected);
   oStr += ( y ? '&' : '' ) + oE.name+ '=' + ( oE.checked ? oE.value : '' );
   y = true;
  } else if( oT == 'select-one' ) {
   oStr += ( y ? '&' : '' ) + oE.name+ '=' + escape(oE.value);
   y = true;
  } else if( oT == 'select-multiple' ) {
   for( var oO = oE.options, i = 0; oO[i]; i++ ) {
   oStr += ( y ? '&' : '' ) + oE.name+ '=' + ( oO[i].selected ? '1' : '' );
   y = true;
   }
  }
  }
 }
 }
 return oStr;
} 

function echeck(str) {
 var at="@"
 var dot="."
 var lat=str.indexOf(at)
 var lstr=str.length
 var ldot=str.indexOf(dot)
 if (str.indexOf(at)==-1)
 return false;
 if (str.indexOf(at)==-1 || str.indexOf(at)==0 || str.indexOf(at)==lstr)
 return false;
 if (str.indexOf(dot)==-1 || str.indexOf(dot)==0 || str.indexOf(dot)==lstr)
 return false;
 if (str.indexOf(at,(lat+1))!=-1)
 return false;
 if (str.substring(lat-1,lat)==dot || str.substring(lat+1,lat+2)==dot)
 return false;
 if (str.indexOf(dot,(lat+2))==-1)
 return false; 
 if (str.indexOf(" ")!=-1)
 return false;
 if (str.indexOf("yopmail")!=-1)
 return false;
 if (str.indexOf("gmx.fr")!=-1)
 return false;
 return true   
} 
 
function trim(s)
{
 var l=0; var r=s.length -1;
 while(l < s.length && s[l] == ' ')
 { l++; }
 while(r > l && s[r] == ' ')
 { r-=1; }
 return s.substring(l, r+1);
} 



/* ********************************************** LOGS **********************************************/ 
 function log (str)
 {       
 try {if (console) console.log(str);} catch (err) {};
 try {if ($.log) $.log(str);} catch (err) {};
 
 }
 


function showPartie (id )
{
 document.location = '/?idPartie='+id;
} 
function showDonneFixe(idDonneFixe) {
 showWorkerPage ('donneFixe','part=3&idDonneFixe='+idDonneFixe);
}

function imthere()
{
 notifyUserActivity();
 clearTimeout(confirmerPresenceTON);
}

var confirmerPresenceTON;
var confirmerPresenceDate;
var delayConfirmPresence = 15000;

function confirmerPresenceTO()
{
 var d = (new Date()).getTime();
 var perc = (delayConfirmPresence-(d-confirmerPresenceDate))/delayConfirmPresence*100;
 if (perc<0) {
 perc=0;
 rpcNoQueue('etape=end&quitRequest=1');
 $('#imtherebtn').remove();
 } else {

 progress(perc, $('#tempsRestantPres'));
 confirmerPresenceTON = setTimeout(confirmerPresenceTO,100);
 }
}

var nbDelayedAnswers = 0;
function delayedAnswer () {
 nbDelayedAnswers++;
 llog('Timeout joue carte auto');
 
 if (nbDelayedAnswers>1) {
 //alerte('<b>Inactivité prolongée</b><br>Vous allez être déconnecté du jeu pour inactivité prolongée...');
 confirmerPresenceNoPlay()
 }
 //confirmerPresenceTO();
}

function confirmerPresenceNoPlay()
{
 delayConfirmPresence = 4000;
 confirmerPresenceDate = (new Date()).getTime();
 // if (id!=)
 //sendJoueurMessage (txt,idUtil)
 var resHTML = '<form onsubmit="return false;">';
 resHTML +='Vous allez être déconnecté du jeu pour inactivité prolongé...<br />';
 //<button class="btn btn-lg btn-default pbtn" type="submit">Enregistrer</button>
 resHTML +='<div id="tempsRestantPres" class="progressBar"><div>&nbsp;</div></div>';
 resHTML +='<div class="clear" style="margin-top:10px;"></div>';
 resHTML +='<input class="btn ptobt btn-success pbtn" id="imtherebtn" type="button" value="Je suis là !" onclick="imthere();parentHide($(this));" />';
 resHTML +='</form>';
 showDialog('Inactivité prolongée',resHTML);
 confirmerPresenceTO();
}

function confirmerPresence()
{
 delayConfirmPresence = 15000;
 confirmerPresenceDate = (new Date()).getTime();
 // if (id!=)
 //sendJoueurMessage (txt,idUtil)
 var resHTML = '<form onsubmit="return false;">';
 resHTML +='Etes-vous toujours là ?<br />';
 //<button class="btn btn-lg btn-default pbtn" type="submit">Enregistrer</button>
 resHTML +='<div id="tempsRestantPres" class="progressBar"><div>&nbsp;</div></div>';
 resHTML +='<div class="clear" style="margin-top:10px;"></div>';
 resHTML +='<input class="btn ptobt btn-success pbtn" id="imtherebtn" type="button" value="Je suis là !" onclick="imthere();parentHide($(this));" />';
 resHTML +='</form>';
 showDialog('Inactivité prolongée',resHTML);
 confirmerPresenceTO();
}

function delSuspenAdm (id) {

 ajax('/workers/moderation/deleteSuspension.php', 'id='+id, alertRes);
}

var mouseMoved = false;
var decoAuto = 0;
var phaserLoadStarted = false;
var phaserLoadComplete = false;

function decoAutoFn ()
{  
 if ( ($$('Jeu')!=null || phaserLoadComplete) && $$('modeJeuSalon')!=null && $$('modeJeuSalon').value!='CPU' && $$('modeJeuSalon').value!='Formation'
 && $$('modeJeuSalon').value!='CPU5' && $$('modeJeuSalon').value!='CPU3' && $$('modeJeuSalon').value!='CPU6' && $$('modeJeuSalon').value!='Entrainement' 
 && $$('modeJeuSalon').value!='DefiChoisi' && $$('staticMJ')==null )
 {
 if (siQuitAbandon==1 && gameHasStarted) {
 playSound ('Button.mp3?v=2');
 confirmerPresence();
 return;
 } else {
 notifyUserActivity();
 }
 } 
 return;
}
function notifyUserActivity()
{
 clearTimeout(decoAuto); //btnQuitAction();
 decoAuto = setTimeout(decoAutoFn ,160000);
}
 
function doMouseCall() 
{
 //log("move"); 
 notifyUserActivity(); 
 mouseMoved = true;
}
if (document.addEventListener){
 document.addEventListener('click', doMouseCall, false); 
} else if (document.attachEvent){
 document.attachEvent('onclick', doMouseCall);
}

var gameSoundsEnabled = true;
function toggleSound() {
 if (gameSoundsEnabled) {
 $('#muteBtn').css('background-image','url(\'/Jeu-Tarot-en-ligne/Jeu/unmute.png\')');
 gameSoundsEnabled = false;
 scookie('muteMusic',1);
 if (typeof bgAudio=='undefined') return;
 if (typeof bgAudio.volume=='undefined') return;
 bgAudio.volume = 0;
 } else {
 $('#muteBtn').css('background-image','url(\'/Jeu-Tarot-en-ligne/Jeu/mute.png\')');
 gameSoundsEnabled = true;
 scookie('muteMusic',0);
 if (typeof bgAudio=='undefined') return;
 if (typeof bgAudio.volume=='undefined') return;
 tweenBgAudioVolume();
 }
}
function shareForumGame (idpartie) {
 var resHTML = '<form onsubmit="return false;">';
 resHTML +='Veuillez choissir un titre pour la publication :<br />';
 //<button class="btn btn-lg btn-default pbtn" type="submit">Enregistrer</button>
 //resHTML +='<div id="tempsRestantPres" class="progressBar"><div>&nbsp;</div></div>';
 resHTML +='<div class="clear" style="margin-top:10px;"></div>Titre du sujet de conversation : <br>';
 resHTML +='<input class="form-control shorty" type="text" value="Analyse partie" id="titrePublicationPartie" />';
 resHTML +='<div class="clear" style="margin-top:10px;"></div>Texte du sujet de conversation : <br>';
 resHTML +='<textarea class="form-control shorty" id="descPublicationPartie"></textarea>';
 resHTML +='<div class="clear" style="margin-top:10px;"></div>';
 resHTML +='<input class="btn ptobt btn-success pbtn" type="button" value="Publier !" onclick="shareForumGameInt ('+idpartie+')" />';
 resHTML +='</form>';
 showDialog('Publication partie',resHTML);

}
function shareForumGameInt (idpartie) {
 var titre = encodeURI($('#titrePublicationPartie').val());
 var desc = encodeURI($('#descPublicationPartie').val());
 if (titre=='Analyse partie') {
 alerte('Veuillez personnaliser le titre du sujet de conversation.');
 return;
 }
 if (desc=='') {
 alerte('Veuillez personnaliser le texte du sujet de conversation.');
 return;
 }
 confirme('Etes-vous sûr de vouloir publier le déroulement de cette partie sur le forum ? Les pseudos des joueurs et avatars seront anonymisés.',function () {
 ajax('/workers/shareGameForum.php', 'idPartie='+idpartie+'&titre='+titre+'&desc='+desc, function (res) {eval(res);});
 });
}
function getDocWidth() {
 var D = document;
 return Math.max(
 Math.max(D.body.scrollWidth, D.documentElement.scrollWidth),
 Math.max(D.body.offsetWidth, D.documentElement.offsetWidth),
 Math.max(D.body.clientWidth, D.documentElement.clientWidth)
 );
}

function getDocHeight() {
 var D = document;
 return Math.max(
 Math.max(D.body.scrollHeight, D.documentElement.scrollHeight),
 Math.max(D.body.offsetHeight, D.documentElement.offsetHeight),
 Math.max(D.body.clientHeight, D.documentElement.clientHeight)
 );
}
function getWinHeight () {

 var myWidth = 0, myHeight = 0;
 if( typeof( window.innerWidth ) == 'number' ) {
 //Non-IE
 myWidth = window.innerWidth;
 myHeight = window.innerHeight;
 } else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
 //IE 6+ in 'standards compliant mode'
 myWidth = document.documentElement.clientWidth;
 myHeight = document.documentElement.clientHeight;
 } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
 //IE 4 compatible
 myWidth = document.body.clientWidth;
 myHeight = document.body.clientHeight;
 }
 return myHeight;
}
function getWinWidth() {

 var myWidth = 0, myHeight = 0;
 if( typeof( window.innerWidth ) == 'number' ) {
 //Non-IE
 myWidth = window.innerWidth;
 myHeight = window.innerHeight;
 } else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
 //IE 6+ in 'standards compliant mode'
 myWidth = document.documentElement.clientWidth;
 myHeight = document.documentElement.clientHeight;
 } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
 //IE 4 compatible
 myWidth = document.body.clientWidth;
 myHeight = document.body.clientHeight;
 }
 return myWidth;
}

var minW = 1020;
var CheckSizeZoomProcessTO = 0;
var blockedA = [
  {img:'Concours-Tarot.jpg',url:'http://www.concours-tarot.com',title:'Agenda des concours de tarot'},
  {img:'LesPetitesCharo.gif',url:'https://les-petites-charo.blogspot.com',title:'Meubles artisanaux en carton'},
  //{img:'KirelDigital.png',url:'https://www.kirel-digital.com',title:'Agence webmarketing à tours'},
  //{img:'Aloe-Vera',url:'www.facebook.com/Aloe-pour-tous-1007849235978094'},
  {img:'Diplome.jpg',url:'http://www.mon-diplome.fr',title:'Diplomes humoristiques en ligne'},
  {img:'Caisse.jpg',url:'https://caisse.enregistreuse.fr',title:'Logiciel de caisse enregistreuse'},
  //{img:'Virtual-Pet-1.jpg',url:'https://www.virtual-pet-game.com',title:'Jeu de chat et chien'},
  {img:'MonPermis.jpg',url:'http://www.permis-gratuit.fr',title:'Permis humoristiques'},
  {img:'Belote.jpg',url:'https://www.jeu-belote.fr',title:'Jeu de belote gratuit'},
  {img:'Ducale - Jeu de tarot.jpg',url:'https://amzn.to/2L1hYjF',title:'Un jeu de Tarot avec 78 cartes à jouer aux figures et scènes traditionnelles',nofollow:1},
  {img:'Grimaud Expert - Jeu de 78 Cartes.jpg',url:'https://amzn.to/2W3WmJA',title:'Coffret de jeu façon Cuir Noir',nofollow:1},
  {img:'Le jeu de tarot - De l initiation a la competition.jpg',url:'https://amzn.to/2L7b789',title:'Le jeu de tarot de l initiation a la competition',nofollow:1},
  {img:'Le jeu de Tarot Apprendre, progresser, gagner.jpg',url:'https://amzn.to/2zT6Jay',title:'Un livre de Maurice Doury',nofollow:1},
  {img:'Les 100 plus belles donnes de tarot.jpg',url:'https://amzn.to/2W2W9q4',title:'Les 100 plus belles donnes de tarot',nofollow:1},
  {img:'Jeu de tarot Asterix.jpg',url:'https://amzn.to/2L5QVne',title:'Jeu de tarot Astérix',nofollow:1},
  {img:'JeuOptic.jpg',url:'https://amzn.to/3dlYToo',title:'Jeu de tarot Optic',nofollow:1}
  ];
var blockedANum = 0;

function getPubHTML (cpB) {
 var html = '<a target="_blank" ';
 if (cpB.nofollow) {
 html += ' rel="noopener nofollow"';
 } else {
 html += ' rel="noopener"';
 }
 html += ' href="'+cpB.url+'" title="'+cpB.title+'"><img alt="'+cpB.title+'" src="/Pubs/'+cpB.img+'" class="blockeurP"/></a>'
}

function CheckSizeZoom() {
 if (!hasAGameStarted) {

 /*if ( ($('.adsbygoogle:visible').length==0 ) && $('.adsbygoogle').length>0 ) {
 llog( 'Un bloqueur de publicité est présent, ceci peut causer des dysfonctionnements dans le jeu. Si vous souhaitez supprimer les pubs, vous devez disposer de crédits premium et desactiver les publicités dans votre page compte, sinon, désactivez votre bloqueur de publicités en cliquant sur son icone, puis sur le bouton Désactiver.');
 $('.adsbygoogle').each(function (elt) {
 blockedANum = Math.floor(Math.random()*100);
 $(this).removeClass('adsbygoogle');
 var cpB = blockedA[blockedANum%blockedA.length];
 
 $(this).html('<a target="_blank" rel="noopener" href="'+cpB.url+'" title="'+cpB.title+'"><img alt="'+cpB.title+'" src="/Pubs/'+cpB.img+'" class="blockeurP"/></a>');
 $(this).show();
 });
 }*/
 $('.myownads').each(function (elt) {
 blockedANum = Math.floor(Math.random()*100);
 $(this).removeClass('adsbygoogle');
 var cpB = blockedA[blockedANum%blockedA.length];
 $(this).html('<a target="_blank" rel="noopener" href="'+cpB.url+'" title="'+cpB.title+'"><img alt="'+cpB.title+'" src="/Pubs/'+cpB.img+'" class="blockeurP"/></a>');
 $(this).show();
 });
 if (window.__tcfapi != undefined) {
 window.__tcfapi("getTCData", 2, function (tcData, success) {
 if (success) {
  //console.log(tcData);
  if (tcData.gdprApplies) {
  var alltrue = true;
  for (var k in tcData.purpose.consents) {
  if (!tcData.purpose.consents[k]) alltrue = false;
  }
  var allfalse = true;
  for (var k in tcData.vendor.consents) {
  if (tcData.vendor.consents[k]) allfalse = false;
  }
  if (allfalse || !alltrue) {
  llog( 'Publicités de remplacement.');
  
  $('.ylad').each(function (elt) {
  blockedANum = Math.floor(Math.random()*100);
  $(this).removeClass('adsbygoogle');
  var cpB = blockedA[blockedANum%blockedA.length];
  
  $(this).html('<a target="_blank" rel="noopener" href="'+cpB.url+'" title="'+cpB.title+'"><img alt="'+cpB.title+'" src="/Pubs/'+cpB.img+'" class="blockeurP"/></a>');
  $(this).show();
  });
  }
  }
 }
 });
 }
 } else {

 resizeChat();
 clearTimeout(CheckSizeZoomProcessTO);
 CheckSizeZoomProcessTO = setTimeout(onResizeGame,600);
 }
}
function onResizeGame() {

 if ($$('monJeu')!=null && etapeCourante !="Terminee")
 {  
 reorganiseCartes (true);
 }
 return;
}

//document.addEventListener ("mousemove", doMouseCall, false);

setTimeout(doMouseCall,1000);

function showObjShop(cat,id) {
 $('.objshop').hide();
 ajax('/includes/credits.php', 'part='+cat+'&idItemShop='+id, function (res) {
 $('#objShopDetails').html(res);
 });
}
function scookie(name,value)
{
 var expire=new Date();
 expire.setTime(expire.getTime()+60*60*24*30*12*3*1000);
 document.cookie=name+'='+escape(value)+';expires='+expire.toGMTString()+"; path=/";
 return true;
}
function gcookie(name)
{
 if(document.cookie.length>0)
 {
  start=document.cookie.indexOf(name+"=");
  pos = start+name.length+1;
  if(start!=0)
  {
   start=document.cookie.indexOf("; "+name+"=");
   pos = start+name.length+3;
  }
  if(start!=-1)
  {
   start=pos;
   end=document.cookie.indexOf(";",start);
   if(end==-1)
   {
    end=document.cookie.length;
   }
   return unescape(document.cookie.substring(start,end));
  }
 }
 return '';
}
var isCardMasqueActivated = true;
function disableMask(status) {
 if (status)
 isCardMasqueActivated = false;
}
function isMasqueActivated() {
 if ( gcookie("noMasque")== 1) return false;
 return isCardMasqueActivated;
}
function clearMaskCookie() {
 scookie("noMasque", null);
}
function toggleMasque2() {
 if (!$('#toggleMasque').is(':checked'))
 scookie("noMasque", 1);
 else
 scookie("noMasque", null);
 //$.cookie()
}
function signalementFin(txt) {
 if ($$('chat')!=null) rpc('reloadChat=1');
 if ($$('BLTog')!=null) 
 ajax('/workers/joueur.php', 'part=blacklist', clstCallback);
 alert(txt);
 return false;

}
function lnUser (idUtil,raison)
{
 $('.signalement').hide();
 $('.mates'+idUtil+'').hide();
 //$('img#joueur0').attr('src','/workers/avatar.php?a&idImage=-1');
 ajax('/workers/signalerJoueur.php', 'idUtil='+idUtil+'&raison='+escape(raison).split('+').join('%2B'), signalementFin);
}
function goSignalForum (idUtil,idSujet, idReponse, idComment, txt)
{
 ajax('/Contact-organisation-jeu-de-tarot.php', 'ajaxRes=1&contact[dest]='+idUtil+'&contact[message]='+escape(txt).split('+').join('%2B')+'&contact[sujet]='+escape('Un joueur s\'est mal comporté sur le forum')+'&contact[idSujet]='+idSujet+'&contact[idReponse]='+idReponse+'&contact[idCommentaire]='+idComment, function (res) {
 alerte(res.split('<spanResult/>')[1].split('<p>').join('').split('</p>').join(''),function () {
 confirme('Voulez-vous également placer ce joueur dans votre liste noire de forum ?<br>Ce joueur ne pourra plus lire vos publications sur le forum, et vous ne verrez plus les siennes non plus.',function () {
 ajax('/workers/signalerJoueurForum.php', 'idUtil='+idUtil+'&raison=Autre', function (res) {
 alerte(res,function () {
 document.location.reload();
 });
 });
 })
 });
 });
}
function blackListForum(idUtil) {
 confirme('Voulez-vous placer ce joueur dans votre liste noire forum ?<br>Placer un joueur en liste noire forum est sans incidence pour le jeu mais vous permet de ne plus voir les messages de ce joueur sur le forum, le joueur listé ne pourra plus voir vos publications.',function () {
 ajax('/workers/signalerJoueurForum.php', 'idUtil='+idUtil+'&raison=Autre', function (res) {
 alerte(res,function () {
 document.location.reload();
 });
 });
 })
}
function signalerMsgForum (idUtil,idSujet, idReponse, idComment, pseudo,msg)
{
 window.scroll(0,0);
 //if (!successFn) successFn = 'alertRes';
 var resHTML = '<form class="disableKeyEvents" onsubmit="return false;">';
 resHTML +='<b>Signaler le joueur "'+pseudo+'" pour sa participation :</b><br>';//.

 if (msg) resHTML +='<pre>'+msg+'</pre><br>';//.
 //resHTML +='Veuillez saisir la raison de votre décision de modération, en citant des extraits de conversation du joueur :<br>';
 resHTML +='<textarea class="form-control" style="height:150px;" id="raisonSS'+idUtil+'">';
 resHTML +='</textarea>';
 
 resHTML +='<input class="btn ptobt btn-warning pbtn" type="button" value="Annuler" onclick="parentHide($(this));" />';
 resHTML +='<input class="btn ptobt btn-danger pbtn" type="button" value="Envoyer le signalement" onclick="goSignalForum('+idUtil+','+idSujet+','+idReponse+','+idComment+',$$(\'raisonSS'+idUtil+'\').value );parentHide($(this));" />';
 resHTML +='</form>';
 showBigDialog('Signaler une participation illégale de "'+pseudo+'"',resHTML);

 
} 
function signalerJoueur (idUtil,pseudo,raison)
{
 window.scroll(0,0);
 //if (!successFn) successFn = 'alertRes';
 var resHTML = '<form class="disableKeyEvents" onsubmit="return false;">';
 resHTML +='<b>Attention : Vous vous appretez à placer le joueur "'+pseudo+'"dans votre liste noire.</b> Vous ne pourrez plus l\'inviter à jouer, recevoir ses messages, ni lire ses conversations dans le chat. Pour plus de renseignement rendez-vous dans la page règlement. Pour continuer, vous pouvez sélectionner une raison puis valider. <br>';
 //resHTML +='Veuillez saisir la raison de votre décision de modération, en citant des extraits de conversation du joueur :<br>';
 resHTML +='<select class="form-control" id="raisonMode'+cptBobYY+'">';

 resHTML +='<option '+(raison=='Autre'?' selected="selected"':'')+' value="Autre">Autre</option>';
 resHTML +='<option '+(raison=='Insultes'?' selected="selected"':'')+' value="Insultes">Insultes</option>';
 resHTML +='<option '+(raison=='Absences'?' selected="selected"':'')+' value="Absence">Absences de jeu</option>';
 resHTML +='<option '+(raison=='Antijeu'?' selected="selected"':'')+' value="Antijeu">Anti-jeu délibéré</option>';
 resHTML +='<option '+(raison=='Abandon'?' selected="selected"':'')+' value="Abandon">Abandons</option>';
 resHTML +='</select>';
 resHTML +='<input class="btn ptobt btn-warning pbtn" type="button" value="Annuler" onclick="parentHide($(this));" />';
 resHTML +='<input class="btn ptobt btn-danger pbtn" type="button" value="Placer en liste noire" onclick="lnUser('+idUtil+',$$(\'raisonMode'+cptBobYY+'\').value );parentHide($(this));" />';
 resHTML +='</form>';
 showBigDialog('Placer '+pseudo+' en liste noire',resHTML);

 cptBobYY++;
 
} 
function effacerMessages (idUtil)
{
 var raison = confirm('Etes-vous sûr de vouloir effacer les messages de ce joueur ?','');
 if (raison) {
 ajax('/workers/effacerMessages.php', 'idUtil='+idUtil, alertRes);
 $('.correspondance'+idUtil).hide();
 return true;
 }
 return false;
} 
function valideEmail ()
{
 ajax('/workers/validerEmail.php', '', alertRes);
 
} 
function avertirForum(idtoban,successFn,txt)
{
 banMode('avertissementForum',1,idtoban,successFn,txt);
} 
function avertir(idtoban,successFn,txt)
{
 banMode('avertissement',1,idtoban,successFn,txt);
} 
function banBio(duree,idtoban,successFn)
{
 if (duree>0)
 banMode('banBioA',duree,idtoban,successFn);
 else banBioA('',duree,idtoban,successFn);
} 

function banPlayWithPlayer(idtoban)
{
 banMode('banPlayWithA',0,idtoban);
} 
function banPlayWithA (txt,duree,idtoban)
{
 //if (!successFn) successFn = alertRes;
 ajax('/workers/moderation/banPlayWithA.php', 'txt='+txt+'&duree='+duree+'&idtoban='+idtoban+'&withPlayer='+$('#banPlayWith').val() , function (txt) {
 alerte(txt);
 });
} 

function banContact (duree,idtoban)
{
 if (duree>0)
 banMode('banContactA',duree,idtoban);
 else banContactA('',duree,idtoban);
}  
function banIPchat (duree,idtoban,successFn)
{
 if (duree>0)
 banMode('banIPchatA',duree,idtoban,successFn);
 else banIPchatA('',duree,idtoban,successFn);
}  
function banIDchat (duree,idtoban,successFn)
{
 if (duree>0)
 banMode('banIDchatA',duree,idtoban,successFn);
 else banIDchatA('',duree,idtoban,successFn);
}  
function banIDforum (duree,idtoban,successFn)
{
 if (duree>0)
 banMode('banIDforumA',duree,idtoban,successFn);
 else banIDforumA('',duree,idtoban,successFn);
}  
function banIDMP (duree,idtoban,successFn)
{
 if (duree>0)
 banMode('banIDMPA',duree,idtoban,successFn);
 else banIDMPA('',duree,idtoban,successFn);
} 
function banIP (duree,idtoban,successFn)
{
 if (duree>0)
 banMode('banIPA',duree,idtoban,successFn);
 else banIPA('',duree,idtoban,successFn);
} 
function banID (duree,idtoban,successFn)
{
 if (duree>0)
 banMode('banIDA',duree,idtoban,successFn);
 else banIDA('',duree,idtoban,successFn);
} 
function banIDcompet (duree,idtoban,successFn)
{
 if (duree>0)
 banMode('banIDcompetA',duree,idtoban,successFn);
 else banIDcompetA('',duree,idtoban,successFn);
} 
function removeIDformateur (idtoban,successFn)
{
 banMode('removeIDformateurA',0,idtoban,successFn);
} 
function lockaccount (idtoban)
{
 banMode('lockaccountA',0,idtoban);
} 
function delBio (idUtil)
{
 banMode('delBioA',0,idUtil,'');
 //ajax('/workers/moderation/delBio.php', 'idUtil='+idUtil, alertRes); 
} 
function previewResponse(idSujet) {
 var postedRep = escape($('#postReponse_txt').val()).split('+').join('%2B');
 ajax('/workers/forumPreview.php', 'txt='+postedRep+'&idSujet='+idSujet, function (res) {

 $('#previewDiv').html(res);
 $('#previewDiv').show();
 });
}
function previewSujet() {
 var postedRep = escape($('#postSujet_txt').val()).split('+').join('%2B');
 ajax('/workers/forumPreview.php', 'txt='+postedRep, function (res) {

 $('#previewDiv').html(res);
 $('#previewDiv').show();
 });
}
function reasonBanMode(cptBobYY) {
 var res = $$('raisonMode'+cptBobYY).value;
 if ($('#joinRaisonDetailAuto'+cptBobYY).is(':checked')) {
 res += "<br>"+$('#raisonDetAutoMode'+cptBobYY).html();
 }
 return encodeURIComponent(res);
}
function validBanMode(cptBobYY) {
 if ($$('raisonMode'+cptBobYY).value.length<5) {
 alerte('Veuillez saisir une raison claire et détaillée');
 return false;
 }
 return true;
}

function banMode(typeBan,duree,idtoban,successFn,defTexte)
{
 if (!successFn) successFn = 'alertRes';
 var resHTML = '<form onsubmit="return false;">';
 resHTML +='<b>Veuillez saisir la raison de votre décision de modération.</b><br>';
 resHTML +='<a class="button" onclick="showSanctionsList();"><u>Consulter le barème des sanctions</u></a><br><br>';
 //resHTML +='Veuillez saisir la raison de votre décision de modération, en citant des extraits de conversation du joueur :<br>';
 resHTML +='<textarea class="form-control" style="height:150px;" id="raisonMode'+cptBobYY+'">';
 resHTML +='</textarea>';
 if (defTexte) {
 resHTML +='<input type="checkbox" value="1" checked="checked" id="joinRaisonDetailAuto'+cptBobYY+'"/> Joindre ce message généré automatiquement :<br>';
 resHTML +='<div id="raisonDetAutoMode'+cptBobYY+'">';
 resHTML +=defTexte;
 resHTML +='</div>';
 }
 resHTML +='<input class="btn ptobt btn-default pbtn" type="button" value="Envoyer" onclick="if (validBanMode('+cptBobYY+')) { '+typeBan+'(reasonBanMode('+cptBobYY+'),'+duree+',\''+idtoban+'\','+successFn+' );parentHide($(this)); } else return false;" />';
 resHTML +='</form>';
 showBigDialog('Décision de modération',resHTML);
 //megaModal(resHTML);
 cptBobYY++;
} 
function modeRes(idCtc,txt) {
 if (txt.substr(0,9)=='Erreur : ') {
 alert(txt);
 return;
 }
 $('#answ'+idCtc).show();
 $('#actions'+idCtc).hide();
 $('#templates'+idCtc).hide();
 //$('#debSeb'+idCtc).hide();
 if (txt.substr(0,7)=='Bonjour') {
 setANW(txt,idCtc);
 } else {
 $('#anwsTA'+idCtc).val('Bonjour,\r\n'+txt+'\r\nCordialement,\r\nL\'équipe de modération');
 }
} 
function removeIDformateurA (txt,duree,idtoban,successFn)
{
 if (!successFn) successFn = alertRes;
 ajax('/workers/moderation/removeIDformateurA.php', 'txt='+txt+'&idtoban='+idtoban, successFn); 
} 
function giveIDformateur (idtoban)
{
 ajax('/workers/moderation/giveIDformateurA.php', 'idtoban='+idtoban, alertRes); 
} 
function delBioA (txt,duree,idtoban,successFn)
{
 if (!successFn) successFn = alertRes;
 ajax('/workers/moderation/delBio.php', 'txt='+txt+'&idUtil='+idtoban, successFn);
 
} 
function banBioA (txt,duree,idtoban,successFn)
{
 if (!successFn) successFn = alertRes;
 ajax('/workers/moderation/banBio.php', 'txt='+txt+'&duree='+duree+'&idtoban='+idtoban, successFn);
} 
function banContactA (txt,duree,idtoban)
{
 ajax('/workers/moderation/banContact.php', 'txt='+txt+'&duree='+duree+'&idtoban='+idtoban, alertRes);
}  
function banMulticompte (txt,duree,idtoban,successFn)
{
 if (!successFn) successFn = alertRes;
 ajax('/workers/moderation/banMulticompte.php', 'txt='+txt+'&duree='+duree+'&idtoban='+idtoban, successFn); 
} 
function banIPchatA (txt,duree,idtoban,successFn)
{
 if (!successFn) successFn = alertRes;
 ajax('/workers/moderation/banIPchat.php', 'txt='+txt+'&duree='+duree+'&idtoban='+idtoban, successFn); 
}  
function banIDchatA (txt,duree,idtoban,successFn)
{
 if (!successFn) successFn = alertRes;
 ajax('/workers/moderation/banIPchat.php', 'txt='+txt+'&duree='+duree+'&idtoban='+idtoban, successFn); 
}   
function banIDforumA (txt,duree,idtoban,successFn)
{
 if (!successFn) successFn = alertRes;
 ajax('/workers/moderation/banIPforum.php', 'txt='+txt+'&duree='+duree+'&idtoban='+idtoban, successFn); 
}   
function banIDMPA (txt,duree,idtoban,successFn)
{
 if (!successFn) successFn = alertRes;
 ajax('/workers/moderation/banIPMP.php', 'txt='+txt+'&duree='+duree+'&idtoban='+idtoban, successFn); 
}  
function banNothing (idtoban,successFn)
{
 if (!successFn) successFn = alertRes;
 ajax('/workers/moderation/banNothing.php', 'idtoban='+idtoban, successFn); 
}  
function banNothingForum (idtoban,successFn)
{
 if (!successFn) successFn = alertRes;
 ajax('/workers/moderation/banNothingForum.php', 'idtoban='+idtoban, successFn); 
} 
function avertissement (txt,duree,idtoban,successFn)
{
 if (!successFn) successFn = alertRes;
 ajax('/workers/moderation/banavertissement.php', 'txt='+txt+'&duree='+duree+'&idtoban='+idtoban, successFn); 
} 
function avertissementForum (txt,duree,idtoban,successFn)
{
 if (!successFn) successFn = alertRes;
 ajax('/workers/moderation/banavertissement.php', 'isForum=1&txt='+txt+'&duree='+duree+'&idtoban='+idtoban, successFn); 
} 
function banIPA (txt,duree,idtoban,successFn)
{
 if (!successFn) successFn = alertRes;
 ajax('/workers/moderation/banIP.php', 'txt='+txt+'&duree='+duree+'&idtoban='+idtoban, successFn);
} 
function banIDA (txt,duree,idtoban,successFn)
{
 if (!successFn) successFn = alertRes;
 ajax('/workers/moderation/banIP.php', 'txt='+txt+'&duree='+duree+'&idtoban='+idtoban, successFn);
} 
function banIDcompetA (txt,duree,idtoban,successFn)
{
 if (!successFn) successFn = alertRes;
 ajax('/workers/moderation/banIDcompet.php', 'txt='+txt+'&duree='+duree+'&idtoban='+idtoban, successFn);
} 
function lockaccountA (txt,duree,idUtil)
{
 ajax('/workers/moderation/banAccount.php', 'txt='+txt+'&idUtil='+idUtil, alertRes);
} 
function unlockaccount (idUtil)
{
 ajax('/workers/moderation/unbanAccount.php', 'idUtil='+idUtil, alertRes);
} 
function updateNoteA (idUtil)
{
 ajax('/workers/moderation/updateNoteA.php', 'idUtil='+idUtil+'&txt='+$('#notesAdm').val(), alertRes);
} 
function delAvat (idUtil)
{
 ajax('/workers/moderation/delAvat.php', 'idUtil='+idUtil, alertRes);
} 
function delAbandon(idUtil)
{
 ajax('/workers/moderation/delAbandon.php', 'idUtil='+idUtil, alertRes);
} 
function give1credit(idUtil)
{
 ajax('/workers/moderation/givecredit.php', 'idUtil='+idUtil+'&nbCredits=1', alertRes);
} 
function give5credit(idUtil)
{
 ajax('/workers/moderation/givecredit.php', 'idUtil='+idUtil+'&nbCredits=5', alertRes);
} 
function modeActionRes(txt) {
 $('#corpMsg').val(txt);
 modeP('modeActions');
 $('html, body').stop().animate({
 scrollTop: $('#corpMsg').offset().top-40 + 'px'
 }, 'fast');
}
function enableChatUtil(idUtil,fnn)
{
 if (!fnn)
 fnn = alertRes;

 if (confirm('Etes-vous sur de vouloir activer le chat du joueur ? Ceci modifie ses options configurées en page compte pour lui.')) {
 ajax('/workers/moderation/enableChat.php', 'idUtil='+idUtil, fnn);
 }
 return true;
} 
var fnModeCred = null;
function modeGivecreditAmicaux(idUtil,fnn)
{
 fnModeCred = fnn;
 var resHTML = '<form class="feedback_form errorDlg" onsubmit="return false;">';
 resHTML += 'Saisissez le montant des crédits amicaux à offrir :<br />';
 resHTML += '<input type="text" value="1" id="creditsNbre"/><br/>';
 resHTML += '<input class="btn btn-warning ptobt pbtn" type="button" onclick="parentHide($(this));" value="Annuler"/>';
 resHTML += '<input class="btn btn-success ptobt pbtn" type="button" onclick="sendCreditsAmicaux('+idUtil+');parentHide($(this));" value="Offrir des crédits amicaux"/>';
 
 resHTML += '<br /></form>';
 showBigDialog('Offrir des crédits amicaux',resHTML);
} 
function givecreditAmicaux(idUtil,num,fnn)
{
 if (!fnn)
 fnn = alertRes;
 var nbc = num;
 if (!nbc) {
 nbc = prompt('Offrir combien de crédits premium ?');
 if (nbc==null ) return false;
 }
 ajax('/workers/moderation/givecreditAmicaux.php', 'idUtil='+idUtil+'&nbCredits='+nbc, fnn);
 return true;
} 
//modeGivecreditPremium
function sendCreditsAmicaux(idUtil)
{
 var nbc = $('#creditsNbre').val();
 if (!nbc) {
 alert("Valeur incorrecte");
 }
 ajax('/workers/moderation/givecreditAmicaux.php', 'idUtil='+idUtil+'&nbCredits='+nbc, fnModeCred);
} 

function modeGivecredit(idUtil,fnn)
{
 fnModeCred = fnn;
 var resHTML = '<form class="feedback_form errorDlg" onsubmit="return false;">';
 resHTML += 'Saisissez le montant des crédits compétition à offrir :<br />';
 resHTML += '<input type="text" value="1" id="creditsNbre"/><br/>';
 resHTML += '<input class="btn btn-warning ptobt pbtn" type="button" onclick="parentHide($(this));" value="Annuler"/>';
 resHTML += '<input class="btn btn-success ptobt pbtn" type="button" onclick="sendCredits('+idUtil+');parentHide($(this));" value="Offrir des crédits compétition"/>';
 
 resHTML += '<br /></form>';
 showBigDialog('Offrir des crédits compétition',resHTML);
} 
//modeGivecreditPremium
function sendCredits(idUtil)
{
 var nbc = $('#creditsNbre').val();
 if (!nbc) {
 alert("Valeur incorrecte");
 }
 ajax('/workers/moderation/givecredit.php', 'idUtil='+idUtil+'&nbCredits='+nbc, fnModeCred);
} 


function modeGivecreditPremium(idUtil,fnn)
{
 fnModeCred = fnn;
 var resHTML = '<form class="feedback_form errorDlg" onsubmit="return false;">';
 resHTML += 'Saisissez le montant des <b>crédits Premium</b> à offrir :<br />';
 resHTML += '<input type="text" value="1" id="creditsNbre"/><br/>';
 resHTML += '<input class="btn btn-warning ptobt pbtn" type="button" onclick="parentHide($(this));" value="Annuler"/>';
 resHTML += '<input class="btn btn-success ptobt pbtn" type="button" onclick="sendCreditsPremium('+idUtil+');parentHide($(this));" value="Offrir des crédits Premium"/>';
 
 resHTML += '<br /></form>';
 showBigDialog('Offrir des crédits premium',resHTML);
} 
//modeGivecreditPremium
function sendCreditsPremium(idUtil)
{
 var nbc = $('#creditsNbre').val();
 if (!nbc) {
 alert("Valeur incorrecte");
 }
 ajax('/workers/moderation/givecreditPremium.php', 'idUtil='+idUtil+'&nbCredits='+nbc, fnModeCred);
} 

function modeGiveAbandon(idUtil,fnn)
{
 fnModeCred = fnn;
 var resHTML = '<form class="feedback_form errorDlg" onsubmit="return false;">';
 resHTML += 'Saisissez le nombre d\'abandons à retirer du compte :<br />';
 resHTML += '<input type="text" value="1" id="creditsNbre"/><br/>';
 resHTML += '<input class="btn btn-warning ptobt pbtn" type="button" onclick="parentHide($(this));" value="Annuler"/>';
 resHTML += '<input class="btn btn-success ptobt pbtn" type="button" onclick="sendDelAbandon('+idUtil+');parentHide($(this));" value="Retirer les abandons"/>';
 
 resHTML += '<br /></form>';
 showBigDialog('Retirer des abandons',resHTML);
} 
//modeGivecreditPremium
function sendDelAbandon(idUtil)
{
 var nbc = $('#creditsNbre').val();
 if (!nbc) {
 alert("Valeur incorrecte");
 }
 ajax('/workers/moderation/delAbandon.php', 'idUtil='+idUtil+'&nbAbandons='+nbc, fnModeCred);
 //ajax('/workers/moderation/givecreditPremium.php', 'idUtil='+idUtil+'&nbCredits='+nbc, fnModeCred);
} 


function givecredit(idUtil,num,fnn)
{
 
 
 if (!fnn)
 fnn = alertRes;
 var nbc = num;
 if (!nbc) {
 nbc = prompt('Offrir combien de crédits compétition ?');
 if (nbc==null ) return false;
 }
 ajax('/workers/moderation/givecredit.php', 'idUtil='+idUtil+'&nbCredits='+nbc, fnn);
 return true;
} 
function changePseudoJMode(idUtil,fnn)
{
 if (!fnn)
 fnn = alertRes;
 var nbc = prompt('Saisissez le nouveau pseudo :');
 if (!nbc ) return false;
 ajax('/workers/moderation/changePseudo.php', 'idUtil='+idUtil+'&newpseudo='+nbc, fnn);
 return true;
} 
function givecreditPremium(idUtil,num,fnn)
{
 if (!fnn)
 fnn = alertRes;
 var nbc = num;
 if (!nbc) {
 nbc = prompt('Offrir combien de crédits premium ?');
 if (nbc==null ) return false;
 }
 ajax('/workers/moderation/givecreditPremium.php', 'idUtil='+idUtil+'&nbCredits='+nbc, fnn);
 return true;
} 
function grantModerateur(idUtil,num,fnn)
{
 if (!fnn)
 fnn = alertRes;
 
 ajax('/workers/moderation/giveModeration.php', 'idUtil='+idUtil+'&droits=Mode', fnn);
 return true;
} 
function grantConsultant(idUtil,num,fnn)
{
 if (!fnn)
 fnn = alertRes;
 
 ajax('/workers/moderation/giveModeration.php', 'idUtil='+idUtil+'&droits=Consultant', fnn);
 return true;
} 
function grantFormateur(idUtil,num,fnn)
{
 if (!fnn)
 fnn = alertRes;
 
 ajax('/workers/moderation/giveFormateur.php', 'idUtil='+idUtil, fnn);
 return true;
} 
function giveAbandon(idUtil,num,fnn)
{
 if (!fnn)
 fnn = alertRes;
 var nbc = num;
 if (nbc==undefined) {
 nbc = prompt('Combien ?');
 if (nbc==null ) return false;
 }
 ajax('/workers/moderation/delAbandon.php', 'idUtil='+idUtil+'&nbAbandons='+nbc, fnn);
 return true;
} 
function demandeCtcSatisfaction(id,statut)
{
 ajax('/workers/moderation/satisfactionUtilisateur.php', 'id='+id+'&statut='+statut, alertRes);
 $('#demande'+id).remove();
} 
var sentnonResoluDemandeAssist = false;
var nonResoluLastMsg = '';
function nonResoluDemandeAssist()
{
 if ($('#nonResoluTxt').val().trim().length<30) {
 alerte('Minimum 30 caractères');
 return;
 }
 if (sentnonResoluDemandeAssist) return;
 if (nonResoluLastMsg=='') return;
 sentnonResoluDemandeAssist = true;
 ajax('/workers/moderation/satisfactionUtilisateur.php', 'statut=3&id='+$('#nonResoluId').val()+'&txt='+$('#nonResoluTxt').val()+'\r\n'+nonResoluLastMsg+'&sameUser='+$('#nonResoluSameUser').is(':checked'), function () {
 //alert('poi');
 document.location.reload();// = '/Contact-organisation-jeu-de-tarot.php';
 });
} 
function filterDemsA()
{
 if ($('#filterDemsA').is(':checked')) {
 $('.unaffected').show();
 } else {
 $('.unaffected').hide();
 }
} 
function demandeCtcSatisfactionKO(id)
{
 $('.demsA').hide();
 $('.actionBtns').hide();
 $('#demande'+id).show();
 var replyTxt = '';
 replyTxt += '\n\nMessage d\'origine : \n';
 replyTxt += $('#txtMsg'+id).html().split('\n').join('').split('<br>').join('\n');
 if ($('#repMsg'+id).length>0) {
 replyTxt += '\n\n';
 replyTxt += $('#repMsg'+id).html().split('\n').join('').split('<u>').join('').split('</u>').join('').split('<br>').join('\n');
 }
 nonResoluLastMsg = replyTxt;
 $('#firstRetourBtn').hide();
 $('#nonResoluTxt').val('');
 $('#nonResolu').show();
 $('#nonResoluId').val(id);
 window.scroll(0,0);
 /*ajax('/workers/moderation/satisfactionUtilisateur.php', 'id='+id+'&statut='+statut, alertRes);
 $('#demande'+id).remove();*/
} 
function validEditDemandeAssist()
{
 ajax('/workers/moderation/editDemande.php', 'id='+$('#editDemId').val()+'&txt='+$('#editDemTxt').val(), function () {
 document.location = '/Contact-organisation-jeu-de-tarot.php';
 });
} 
function editDemandeAssist(id)
{
 $('.demsA').hide();
 $('#firstRetourBtn').hide();
 $('.actionBtns').hide();
 $('#demande'+id).show();
 $('#editDemTxt').val($('#txtMsg'+id).html().split('\n').join('').split('<br>').join('\n'));
 $('#editDemId').val(id);
 $('#editDemande').show();
 window.scroll(0,0);
} 
function validerEmailJ(idUtil)
{
 ajax('/workers/moderation/validerEmailJ.php', 'idUtil='+idUtil, alertRes);
} 

function dissocierIPs(groupeIP,isSimple,endFunc)
{
 if (!endFunc) endFunc = alertRes;
 if (isSimple)
 ajax('/workers/moderation/dissocierIPs.php?simple=true', 'groupeIP='+groupeIP, endFunc);
 else
 ajax('/workers/moderation/dissocierIPs.php', 'groupeIP='+groupeIP, endFunc);
} 
function dissocierIDs(idUtil,isSimple,endFunc)
{
 if (!endFunc) endFunc = alertRes;
 if (isSimple)
 ajax('/workers/moderation/dissocierIPs.php?simple=true', 'idUtil='+idUtil, endFunc);
 else
 ajax('/workers/moderation/dissocierIPs.php', 'idUtil='+idUtil, endFunc);
} 
function lnForumMode(idUtil)
{
 var optT = 'idUtil='+idUtil+'&dest='+$('#lnForumWith').val();
 ajax('/workers/moderation/lnForum.php', optT, alertRes);
} 
function transfertCredits(idUtil)
{
 var optT = 'idUtil='+idUtil+'&dest='+$('#transfertCreditsTo').val()+'&montant='+$('#transfertCreditsAmount').val();
 ajax('/workers/moderation/transfertCredits.php', optT, alertRes);
} 
function transfertCreditsPremium(idUtil)
{
 var optT = 'idUtil='+idUtil+'&dest='+$('#transfertCreditsPremiumTo').val()+'&montant='+$('#transfertCreditsPremiumAmount').val();
 ajax('/workers/moderation/transfertCreditsPremium.php', optT, alertRes);
} 
function resetPW(idUtil)
{
 ajax('/workers/moderation/resetPW.php', 'idUtil='+idUtil, alertRes);
} 
function annuleModifs(idUtil)
{
 ajax('/workers/moderation/annuleModifs.php', 'idUtil='+idUtil, alertRes);
} 


function resetBanList()
{
 ajax('/workers/resetBanList.php', '', alertRes);
} 


function FBshare(url) { 
 FBLogin(function () {
 FB.ui(
 {
 method: 'share',
 href: url,
 },
 // callback
 function(response) {
 if (response && !response.error_code) {
 //alert('Posting completed.');
 } else {
 //alert('Error while posting.');
 }
 }
 );
 });
}

function FBFreeLifeRequest (fromID) { 
 FBLogin(function () {
 FB.ui({method: 'apprequests',
 message: 'Pourrais-tu m\'envoyer une partie gratuite sur jeu de tarot ? ',
 title: 'Parties de Tournoi gratuites par mes amis'
 }, function(response){
 ajax('/workers/amiInviteFB.php', 'requestID='+response.request+'&amisList='+response.to.join(','), function (txt) { 
 });
 });
 });
}

function FBGameRequest (fromID) { 
 FBLogin(function () {
 FB.ui({method: 'apprequests',
 message: 'Joue avec moi au tarot',
 title: 'Viens jouer à ce jeu'
 }, function(response){
 ajax('/workers/amiInviteFB.php', 'requestID='+response.request+'&amisList='+response.to.join(','), function (txt) { 
 if (txt!="")
 alerte(txt);
 });
 });
 });
}

function FBSearchFriends () {
 FBLogin (function () {
 $('.invFB').hide();
 $('.invFBO').show();
 ajax('/workers/myfriends.php', '', function (txt) { 
 $('#friendsRes').html(txt);
 });
 });
}
var loginStatusNotified = false;

function FBLogin (cb) {
 if (typeof FB == 'undefined') return;
 if (typeof FB.getLoginStatus == 'undefined') return;
 FB.getLoginStatus(function(response) {
 if (response.status === 'connected') {
 if (loginStatusNotified) {
 if (cb!=null) cb();
 $('#invFBL').hide();
 }else {
 $('#invFBL').hide();
 ajax('/workers/FBlogin.php', '', cb);
 loginStatusNotified = true;
 }
 }
 else {
 FB.login(function(){
 $('#invFBL').hide();
 ajax('/workers/FBlogin.php', '', cb);
 loginStatusNotified = true;
 }, {display:'dialog',scope: 'public_profile, email'});//, user_friends
 }
 });
}


function facebookLogout() {

 ajax('/workers/FBlogout.php', '',function() {alerte('Deconnexion effectuée'); });
}


function sendModerateurMess(idUtil)
{
 ajax('/workers/moderation/sendModerateurMess.php', 'idUtil='+idUtil+'&msg='+escape($('#corpMsg').val()).split('+').join('%2B'), alertRes);
} 
/*var currentVisible = 'premiereEtape';
var prevVisible = 'premiereEtape';*/

var openedContactForms = new Array();

function contactBkBtn() {

 var old = openedContactForms.pop();
 
 $('div#'+old).hide();
 var prev = 'premiereEtape';
 if (openedContactForms.length>0)
 prev = openedContactForms[openedContactForms.length-1];
 $('div#'+prev).show();

 $('#searchPseudoBox').hide();
 $('#comptePerdu').hide();
 $('#signalementBug').hide();
 $('#pbMission').hide();
 $('#moderateurInfo').hide();
 $('#consultantInfo').hide();
 $('#moderateurRapport').hide();
 $('#formateurInfos').hide();
}
function ctcTraitementMode() {

 $('#moXS').val("0");
 $('#serviceTraitement').html("Votre message sera envoyé à notre équipe de modérateurs");
}
function ctcTraitementAdmin() {

 $('#moXS').val("1");
 $('#serviceTraitement').html("Votre message sera envoyé à l'équipe d'administration");
}
function selectContactHistoGame(id,titre) {
 var htmlRes = '<b>Partie en rapport avec votre message</b><br>';
 htmlRes += titre;
 htmlRes += '<br><a onclick="showChoixParties();" class="button">Modifier</a>';
 $('#choixParties').html(htmlRes);
 $('#IDpartie').val(id);
}
function selectContactParticipation(idSujet, idMessage, idCommentaire ,titre) {
 var htmlRes = '<b>Participation en rapport avec votre message</b><br>';
 htmlRes += titre;
 htmlRes += '<br><a onclick="showChoixParticipation();" class="button">Modifier</a>';
 $('#choixParticipation').html(htmlRes);
 $('#idSujet').val(idSujet);
 $('#idMessage').val(idMessage);
 $('#idCommentaire').val(idCommentaire);
}
function showChoixParticipation() {
 $('#choixParticipation').show();
 ajax('/workers/participationsRecentes.php', 'idJoueur='+$('#searchPseudoID').val(), function(txt) {
 $('#choixParticipation').html(txt);
 });
}
function selTypeParticipation(obj) {
 console.log($(obj).val());
 if ($(obj).val()==0) {
 $('#idSujet').show();
 $('#idReponse').hide();
 $('#idCommentaire').hide();
 } else if ($(obj).val()==1) {
 $('#idSujet').hide();
 $('#idReponse').show();
 $('#idCommentaire').hide();
 } else if ($(obj).val()==2) {
 $('#idSujet').hide();
 $('#idReponse').hide();
 $('#idCommentaire').show();
 }
}
function showChoixParties() {
 $('#choixParties').show();
 ajax('/workers/partiesRecentes.php', '', function(txt) {
 $('#choixParties').html(txt);
 });
}
function contactFormAnswer(idpart,idlink,textT) {
 var openLink = idlink;
 if (openLink=='pbEnJeu' || openLink=='signalerJoueurPartie') {
 openLink='contactUs';
 showChoixParties();
 } else {
 $('#choixParties').hide();
 }
 $('#choixParticipation').hide();
 $('#searchPseudoBox').hide();
 if (idlink=='signalerJoueurPartie' || idlink=='signalerJoueurForum') {
 openLink='contactUs';
 $('#searchPseudoBox').show();
 }
 if (openLink=='signalerJoueurF') {
 openLink='contactUs';
 $('#searchPseudoBox').show();
 }
 if (openLink=='comptePerdu') {
 openLink='contactUs';
 $('#comptePerdu').show();
 }
 if (openLink=='contactMod') {
 openLink='contactUs';
 ctcTraitementAdmin();
 } else
 ctcTraitementMode();
 if (openLink=='signalementBug') {
 openLink='contactUs';
 $('#signalementBug').show();
 }
 if (openLink=='pbMission') {
 openLink='contactUs';
 $('#pbMission').show();
 }
 if (openLink=='moderateur') {
 openLink='contactUs';
 ctcTraitementAdmin();
 $('#moderateurInfo').show();
 }
 if (openLink=='consultant') {
 openLink='contactUs';
 ctcTraitementAdmin();
 $('#consultantInfo').show();
 }
 if (openLink=='moderateurRapport') {
 openLink='contactUs';
 ctcTraitementAdmin();
 $('#moderateurRapport').show();
 }
 if (openLink=='formateur') {
 openLink='contactUs';
 $('#formateurInfos').show();
 } else {
 $('#formateurInfos').hide();
 }
 $('#sujetContact').val(textT);

 openedContactForms.push(openLink);
 $('div#'+idpart).hide();
 $('div#'+openLink).show();
}
function assignTicket(idctc,idUtil) {
 ajax('/workers/moderation/ticketAssign.php', 'idctc='+idctc+'&idUtil='+idUtil, function(txt) {
 if (txt=='OK') {
 return;
 } else
 alerte(txt);
 });
 $('.CTC'+idctc).remove();
}
function noShowTicket(idctc) {
 var expire=new Date();
 expire.setTime(expire.getTime()+1000*60*60*24*7);
 llog('time',new Date().toGMTString(),'expire',expire.toGMTString());
 document.cookie='noShow['+idctc+']=1;expires='+expire.toGMTString();//+'; path=/support.php';
 
 removeTicket(idctc);
}
function noShowTicket60m(idctc) {
 var expire=new Date();
 expire.setTime(expire.getTime()+1000*60*60*12);
 llog('time',new Date().toGMTString(),'expire',expire.toGMTString());
 document.cookie='noShow['+idctc+']=1;expires='+expire.toGMTString();//+'; path=/support.php';
 
 removeTicket(idctc);
}
function noShowTicketUser(idctc) {
 var expire=new Date();
 expire.setTime(expire.getTime()+1000*60*60*24);
 //llog('time',new Date().toGMTString(),'expire',expire.toGMTString());
 document.cookie='noShowUser['+idctc+']=1;expires='+expire.toGMTString();//+'; path=/support.php';
 
 $('#Massist'+idctc).remove();
}
function getTicket(idctc) {
 $('.getTicket'+idctc).html('Chargement...');
 $('.getTicket'+idctc).attr('disabled','disabled');
 ajax('/workers/moderation/ticketAssign.php', 'idctc='+idctc, function(txt) {
 if (txt=='OK') {
 $('#charge'+idctc).toggle();$('#actions'+idctc).toggle();
 } else {
 $('.getTicket'+idctc).attr('disabled',null);
 $('.getTicket'+idctc).html('Traiter');
 $('#charge'+idctc).hide();
 $('#dataS'+idctc).html(txt);
 }
 },function () {
 $('#assist'+idctc).remove();
 alerte(txt);
 });
}
function getTicketNoOpen(idctc) {
 ajax('/workers/moderation/ticketAssign.php', 'idctc='+idctc, function(txt) {
 //llog(txt);
 if (txt=='OK') {
 
 } else {
 alerte(txt);
 }
 });
 //$('.CTC'+idctc).remove();
}
/*function traiteTicket(idctc) {
 ajax('/workers/moderation/ticketAssign.php', 'idctc='+idctc, function(txt) {
 if (txt=='OK') {
 $('#charge'+idctc).toggle();$('#actions'+idctc).toggle();
 } else {
 $('#charge'+idctc).html(txt);
 }
 },function () {
 $('#assist'+idctc).remove();
 alert(txt);
 });
}*/
function removeTicket(idctc) {
 $('#assist'+idctc).remove();
 if ($('.assistance').length==0) {
 setTimeout(function () {
 document.location = '/support.php';
 },3000);
 return;
 }
 $('.assistance').show();

 updateAFF();
}
function closeTicket(idctc) {
 $('#charge'+idctc).show();$('#actions'+idctc).hide();
 $('.assistance').show();

 updateAFF();
}
function updateAFF() {
 if ( $('#filterDemsA').length==0) return;
 if ($('#filterDemsA').is(':checked') ) {
 $('.unaffected').show();
 } else {
 $('.unaffected').hide();
 }
}
function TRMPerso(idctc,msg) {
 var addQ = '';
 ajax('/workers/moderation/traiteCTC.php', 'idctc='+idctc+'&msg='+escape(msg).split('+').join('%2B')+addQ, function(txt) {
 if (txt!='') 
 alerte(txt);
 });
 $('.CTC'+idctc).remove();
}
function TRM(idctc) {
 var addQ = '';
 if ($('.CTC'+idctc).find('.copyToMode').is(':checked')) {
 addQ = '&copyToMode=1';
 }
 ajax('/workers/moderation/traiteCTC.php', 'idctc='+idctc+'&msg='+escape($('#anwsTA'+idctc).val()).split('+').join('%2B')+addQ, function(txt) {
 if (txt!='') 
 alerte(txt);
 });
 $('.CTC'+idctc).remove();
}
function TRMResolu(idctc) {
 ajax('/workers/moderation/traiteCTC.php', 'resolu=1&idctc='+idctc+'&msg='+escape($('#anwsTA'+idctc).val()).split('+').join('%2B'), function(txt) {
 if (txt!='') 
 alerte(txt);
 });
 $('.CTC'+idctc).remove();
}
function setMoteurJeu(idctc,moteur) {
 ajax('/workers/moderation/setMoteurJeu.php', 'idctc='+idctc+'&moteurJeuSel='+moteur, function(txt) {
 if (txt!='') {
 modeRes(idctc,txt);
 }
 //setANW(txt,idctc);
 });
}
function TRM2(idctc) {
 var addQ = '';
 if ($('.CTC'+idctc).find('.copyToMode').is(':checked')) {
 addQ = '&copyToMode=1';
 }
 ajax('/workers/moderation/traiteCTC.php', 'nontraite=1&idctc='+idctc+'&msg='+escape($('#anwsTA'+idctc).val()).split('+').join('%2B')+addQ, function() {
 });
}
function setANW(txt,idctc) {
 $('#anwsTA'+idctc).val(txt);
}
function setUpContactForm() {
 $('.etapeDemande').hide();
 $('div#premiereEtape').show();
 $('.etapeDemande').each(function () {
 var idpart = $(this).attr('id');
 $(this).find('.btn-lg').each(function () {
 var idlink = $(this).attr('goto');
 if (idlink!=null && idlink!='')
 $(this).click(function () {var gth = $(this).html(); contactFormAnswer(idpart,idlink,gth); }); 
 });
 });
 $('#screenWidth').val($(window).width());
 $('#screenHeight').val($(window).height());
}

function contactFromValide() {
 if ($('#choixParties').is(':visible')) {

 if ($('#IDpartie').val()=='') {
 alerte('Veuillez spécifier une partie');
 return false;
 }
 }
 if ($('#choixParticipation').is(':visible')) {

 if ($('#idSujet').val()=='' && $('#idReponse').val()=='' && $('#idCommentaire').val()=='' ) {
 alerte('Veuillez spécifier une participation');
 return false;
 }
 }
 if ($('#searchPseudoBox').is(':visible')) {

 if ($('#searchPseudoID').val()=='') {
 alerte('Veuillez spécifier un joueur');
 return false;
 }
 }
 if ($('#messageCtc').val()=='') {
 alerte('Veuillez saisir un message');
 return false;
 } else return true;
}



function searchPseudoJ(pseudo) {
 if (pseudo=='')
 return alerte('Veuillez saisir un pseudo');
 ajax('/workers/findUser.php', 'pseudo='+pseudo,function(res) {
 if (res.split('-').length<2)
 alerte(res);
 else {
 var tab = res.split('-');
 $('#searchPseudoID').val(tab[0]);
 var html = '<label>Joueur concerné : '+pseudo+'</label> <br>';
 html += '<img src="/workers/avatar.php?a&idImage='+tab[1]+'"/>';
 $('#searchPseudoBox').html(html);
 
 
 if ($('#sujetContact').val()=="Un joueur s'est mal comporté sur le forum") {
 $('#choixParticipation').show();
 showChoixParticipation();
 }
 }
 
 });
}

function searchPseudoJBan(pseudo) {
 if (pseudo=='')
 return alerte('Veuillez saisir un pseudo');
 ajax('/workers/findUser.php', 'pseudo='+pseudo,function(res) {
 if (res.split('-').length<2)
 alerte(res);
 else {
 var tab = res.split('-');
 $('#searchPseudoIPBan').val(tab[2]);
 var html = '<label>Joueur concerné : '+pseudo+'</label> <br>';
 html += '<img src="/workers/avatar.php?a&idImage='+tab[1]+'"/>';
 $('#searchPseudoBoxBan').html(html);
 $('#actMod').show();
 }
 
 });
}

function searchPseudoJFriend(pseudo) {
 if (pseudo=='')
 return alerte('Veuillez saisir un pseudo');
 ajax('/workers/findUser.php', 'pseudo='+pseudo,function(res) {
 if (res.split('-').length<2)
 alerte(res);
 else {
 var tab = res.split('-');
 $('#searchPseudoIDBan').val(tab[0]);
 var html = '<label>Joueur concerné : '+pseudo+'</label> <br>';
 html += '<img src="/workers/avatar.php?a&idImage='+tab[1]+'"/>';
 $('#searchPseudoBoxFriendV').html(html);
 $('#actMod').show();
 $('#searchPseudoBoxFriend').hide();
 $('#searchPseudoBoxFriendV').show();
 }
 
 });
}
function searchPseudoJForum(id,pseudo) {
 if (pseudo=='')
 return alerte('Veuillez saisir un pseudo');
 ajax('/workers/findUser.php', 'pseudo='+pseudo,function(res) {
 if (res.split('-').length<2)
 alerte(res);
 else {
 var tab = res.split('-');
 $('#searchPseudoIDBan'+id).val(tab[0]);
 var html = '<label>Joueur concerné : '+pseudo+'</label> <br>';
 html += '<img src="/workers/avatar.php?a&idImage='+tab[1]+'"/>';
 $('#searchPseudoBoxFriendV'+id).html(html);
 $('#actMod'+id).show();
 $('#searchPseudoBoxFriend'+id).hide();
 $('#searchPseudoBoxFriendV'+id).show();
 }
 
 });
}
function showNivoMinExplaination() {
 showDialog('Niveau de jeu insuffisant','Votre niveau de jeu est insuffisant.<br>Pour gagner des niveau, il faut accomplir les missions qui vous sont proposées en page Jouer.');
}
var selectedEmotsArray = new Array();

function selEmot(obj) {
 var numClicked = $(obj).attr('numA');
 $('.emotNum'+numClicked).toggleClass("selEmot");//css('opacity',1);
 updateSelIconsSel();
 
 if (selectedEmotsArray.length>=6) {
 ajax('/workers/selectEmot.php?selection='+selectedEmotsArray.join('|'),'', function () {});
 } else {
 if (!$(obj).hasClass("selEmot"))
 alerte('Minimum 6 emoticones');
 }
}

function updateSelIconsSel() {
 selectedEmotsArray = new Array();
 $('.emotCpte').each(function () {
 if ($(this).hasClass('selEmot')) {
 var alreadyExists = false;
 var newNum = $(this).attr('numA');
 for (var it in selectedEmotsArray) {
 if (selectedEmotsArray[it]==newNum)
 alreadyExists = true;
 }
 if (!alreadyExists)
 selectedEmotsArray.push(newNum);
 }
 });
}



var selectedSoundTracksArray = new Array();

function selSoundtrack(obj) {
 var numClicked = $(obj).attr('numA');
 $('.soundtrackNum'+numClicked).toggleClass("selSoundtrack");//css('opacity',1);
 updateSelsoundtracksSel();
 
 if (selectedSoundTracksArray.length>=1) {
 ajax('/workers/selectSoundtrack.php?selection='+selectedSoundTracksArray.join('|'),'', function (txt) { if (txt) eval(txt); });
 } else {
 if (!$(obj).hasClass("selSoundtrack"))
 alerte('Minimum 1 chanson');
 }
}
function updateSelsoundtracksSel() {
 selectedSoundTracksArray = new Array();
 $('.soundTrackCpte').each(function () {
 if ($(this).hasClass('selSoundtrack')) {
 var alreadyExists = false;
 var newNum = $(this).attr('numA');
 for (var it in selectedSoundTracksArray) {
 if (selectedSoundTracksArray[it]==newNum)
 alreadyExists = true;
 }
 if (!alreadyExists)
 selectedSoundTracksArray.push(newNum);
 }
 });
}


function selAv(obj) {
 confirme('Etes-vous sûr de vouloir choisir cette image en tant qu\'avatar ?',function () {
 $('.avatarCpte').css('opacity',0.4);
 $(obj).css('opacity',1);
 ajax('/workers/selectAvatar.php?idImage='+$(obj).attr('numA'),'', function () {
 $('#joueurAvatarB').attr('src','/workers/avatar.php?a&idImage='+$(obj).attr('numA'));
 
 $('.avatarImageNew').each(function () {

 var src = $(this).attr('src');
 if (src) {
 var tmp = src.split('&idImage=');
 var tmp2 = tmp[1].split('&');
 tmp2[0] = $(obj).attr('numA');
 $(this).attr('src',tmp[0]+'&idImage='+tmp2.join('&'));
 }
 });
 });
 });
}
function selDosCartes(obj) {
 $('.DosCartesCpte').css('opacity',0.4);
 $(obj).css('opacity',1);
 ajax('/workers/selectDosCartes.php?idDosCartes='+$(obj).attr('numA'),'',function (res) {if (res) eval(res); });
}
function selMClstGrp(part) {
 $('.clastPart').addClass('hiddenPart');
 $('#partClast'+part).removeClass('hiddenPart');
 $('.btnGrpClst').removeClass('selectedMJ');
 $('#btnCl'+part).addClass('selectedMJ');
}
function selPlat(obj) {
 //if (confirm('Etes-vous sûr de vouloir choisir cette image en tant qu\'image de fond pour le jeu ?')) {

 $('.bgCpte').css('opacity',1);
 $('.bgCpte').css('border','0px');
 $(obj).css('border','1px solid #555');
 $(obj).css('opacity',1);
 
 ajax('/workers/selectPlateau.php?idImage='+$(obj).attr('numA'),'', function () {
 //alert('Choix enregistré');
 //document.location = '/Compte.php?part=compte';
 });
 //}
}
function selCard(obj,v) {
 //if (confirm('Etes-vous sûr de vouloir choisir cette image en tant qu\'image de fond pour le jeu ?')) {
 $('#jeuCartesSel').val(v);
 $('.carteCpte').css('opacity',0.4);
 $('.carteCpte').css('border','0px');
 $(obj).css('border','1px solid #555');
 $(obj).css('opacity',1);
 
 //}
}
function avatConfirm(numNewImage) {
 if (numNewImage!=0)
 $('.avatPreview').attr('src','/workers/avatar.php?a&idImage='+numNewImage);
 $('.avatPreview').attr('display','');
 $('.avatPreview').css('display','');
 $('#previewBio').html( $('#modifBio').val() );
 $('.togValiP').toggle();
}
function newAvatConfirm(image) {
 if (image!='')
 $('.avatPreview').attr('src',image);
 $('.avatPreview').attr('display','');
 $('.avatPreview').css('display','');
 $('#previewBio').html( $('#modifBio').val() );
 $('.togValiP').toggle();
}
var tschavat = 0;
function valideModifPerso(tstamp) {
 if (tschavat==tstamp) return;
 tschavat=tstamp;
 $('#avatVPay').html('Veuillez patienter...');
 if ($('#inputImgPreview').val()!='') {
 ajax('/workers/selectAvatar.php?goProd=1','biographie='+escape($('#modifBio').val()).split('+').join('%2B')+'&avatB64='+$('#inputImgPreview').val(), function () {
 document.location = '/Compte.php?part=compte';
 });
 } else {

 ajax('/workers/selectAvatar.php?goProd=1','biographie='+escape($('#modifBio').val()).split('+').join('%2B'), function () {
 document.location = '/Compte.php?part=compte';
 });
 }
}
function setCarW() {
 var ww = $('.carouselA').width()-104-25;
 //ww = Math.floor(ww/180)*180;
 $('.carouselC').css('width',ww);
 $('.carouselD').css('width',ww);
 $('.carouselDos').css('width',ww);
 $('.carouselEmot').css('width',ww);
}
function setAvatCarousel() {
 $(".carouselA .carouselC").jCarouselLite({
 btnNext: ".nextAvat",
 btnPrev: ".prevAvat",
 visible: 5,
 speed: 300,
 circular:true,
 scroll:2
 });
 $(".carouselA .carouselD").jCarouselLite({
 btnNext: ".nextAvatD",
 btnPrev: ".prevAvatD",
 visible: 5,
 speed: 300,
 circular:true,
 scroll:2
 });
 $(".carouselDos").jCarouselLite({
 btnNext: ".nextAvatDos",
 btnPrev: ".prevAvatDos",
 visible: 5,
 speed: 300,
 circular:true,
 scroll:2
 });
 $(".carouselA .carouselEmot").jCarouselLite({
 btnNext: ".nextEmot",
 btnPrev: ".prevEmot",
 visible: 5,
 speed: 300,
 circular:true,
 scroll:2
 });
 setCarW();
}
function proposerDefi() { 
 confirme('Etes-vous sûr de vouloir proposer ce défi ? Cette action ne peut pas être annulée, veuillez bien relire le titre de votre défi.',function () {
 ajax('/workers/proposerDefi.php', getFormString($$('proposerDefi'),true), function (txt) {
 if (txt=="ok") {
 alerte('Votre défi a bien été proposé à la communauté, vous pouvez voir les résultats dans votre page compte.');
 $('.defiClass').remove();
 } else alerte(txt);
 });
 return false;
 });
}
function renameDefi(idDefi) {
 $('#toggleBestDefisID'+idDefi).hide();
 $('.toggleBestDefis'+idDefi).toggle();
 $('#defiRenameResult'+idDefi).show();
}
function renameDefiGO(idDefi) {
 $('#toggleBestDefisID'+idDefi).show();
 $('.toggleBestDefis'+idDefi).toggle();
 $('#defiRenameResult'+idDefi).hide();
 ajax('/workers/renameDefi.php', 'idDefi='+idDefi+'&newName='+$('#defiRenameVal'+idDefi).val(), function (txt) {
 eval(txt);
 });
}

function renameDefiCancel(idDefi) {
 $('#toggleBestDefisID'+idDefi).show();
 $('.toggleBestDefis'+idDefi).toggle();
 $('#defiRenameResult'+idDefi).hide();
}
function showTentatives(idDefi) {
 var self = this;
 $('#toggleBestDefisID'+idDefi).hide();
 ajax('/workers/showTentatives.php','idDefi='+idDefi, function (res) {
 $('#toggleBestDefisID'+idDefi).show();
 $('.toggleBestDefis'+idDefi).toggle();
 $('#defiScoresResult'+idDefi).html(res);
 });
}
function hideTentatives(idDefi) {
 $('.toggleBestDefis'+idDefi).toggle();
 $('#defiScoresResult'+idDefi).html('');
}


function Joueur(posTable,pseudo,isIA) // Constructor
{
 this.posTable = posTable;
 this.pseudo = pseudo;
 this.isIA = isIA;
 this.cartePosee = '';
 this.ecart = '';
 this.levees = '';
 this.lastouverture = '';
 this.nbCartesAff = 0;
 this.score = 0;
 this.poignee = 0;
}

Joueur.prototype.setCartes = function(cartes)
{
 return this.cartes = cartes;
};



function Partie() // Constructor
{
 this.joueurs = [];
 this.joueurs.push(new Joueur(0,'Vous',false));
 this.joueurs.push(new Joueur(1,'IA 1',true));
 this.joueurs.push(new Joueur(2,'IA 2',true));
 this.joueurs.push(new Joueur(3,'IA 3',true));
 /*for (var i=0;i<$nbJPa;i++)
 this.joueurs.push(new Joueur(i));
 this.joueurs[0].isIA = false;
 this.joueurs[1].isIA = true;
 this.joueurs[2].isIA = true;
 this.joueurs[3].isIA = true;*/
 this.nbCartesJouees = 0;
 this.typeTour = '';
}

Partie.prototype.setCartes = function(cartes)
{
 return this.cartes = cartes;
};


function twoDigits ($d)
{
 if ((''+$d).length==1)
 return "0"+$d;
 else
 return $d;
}
function createCardPile() {
 var $cartes = [];
 for ($i=1;$i<15;$i++)
 $cartes.push("2_Trefle-"+twoDigits($i)+".gif");
 for ($i=1;$i<15;$i++)
 $cartes.push("4_Pique-"+twoDigits($i)+".gif");
 for ($i=1;$i<15;$i++)
 $cartes.push("1_Coeur-"+twoDigits($i)+".gif");
 for ($i=1;$i<15;$i++)
 $cartes.push("3_Carreau-"+twoDigits($i)+".gif");
 for ($i=1;$i<22;$i++)
 $cartes.push("5_Atout-"+twoDigits($i)+".gif");
 $cartes.push("6_Excuse.gif");
 return $cartes;
}
function mainPetitSec($main) {
 var $niAtoutNiExcuse = true;
 var $petitPresent = false;
 for ($i=0;$i<$cartesParJ;$i++) {
 var $carte = $main[$i];
 if ($carte[0]=="5" ) { //echo "atout";
 if ($carte=="5_Atout-01.gif") $petitPresent = true;
 else $niAtoutNiExcuse = false;
 }
 if ($carte=="6_Excuse.gif") $niAtoutNiExcuse = false;
 }
 return $petitPresent && $niAtoutNiExcuse;
}
function mainPetitSecJeu($jeu) {

 
 for ($i=0;$i<$nbJPa;$i++)
 {
 $jeuTmp = $jeu.slice($i*$cartesParJ,$i*$cartesParJ+$cartesParJ);
 if (mainPetitSec($jeuTmp)) return true;
 }
 return false;
}
function shuffleArray(array) {
 for (var i = array.length - 1; i > 0; i--) {
 var j = Math.floor(Math.random() * (i + 1));
 var temp = array[i];
 array[i] = array[j];
 array[j] = temp;
 }
 return array;
}

function getCardNameOL($card)
{
 // 2_Trefle-04.jpg
 //6_Excuse.gif
 var $cardType = $card[0];
 var $cardNum = getCardNumero($card);

 var $arrM = [];
 var $arrC = [];
 $arrM[11] = "un valet";
 $arrM[12] = "un cavalier";
 $arrM[13] = "une dame"; 
 $arrM[14] = "un roi"; 
 $arrC[1]="coeur";
 $arrC[2]="trèfle";
 $arrC[3]="carreau";
 $arrC[4]="pique";
 
 if ( $cardType==6 )
 return "l'excuse";
 if ( $cardType==5 && $cardNum==1 )
 return "le petit"; 
 else if ( $cardType==5 )
 return "le "+parseInt($cardNum)+" d'atout"; 
 else if ( $cardNum==1)
 return "un as de "+$arrC[$cardType];
 else if ( $cardNum>10)
 return $arrM[$cardNum]+" de "+$arrC[$cardType];
 else
 return "un "+parseInt($cardNum)+" de "+$arrC[$cardType];
}


function getCardNumero($c)
{
 if ($c=='') return 0;
 if ($c==undefined) return 0;
 if ($c[0]=="6") return 0;
 var $tabNumCarte = $c.split('-');
 if ($tabNumCarte==undefined) return 0;
 $tabNumCarte = $tabNumCarte[1];
 $tabNumCarte = $tabNumCarte.split('.gif');
 $tabNumCarte = $tabNumCarte[0];
 return parseInt($tabNumCarte);
}

function getPointsCarte($carte)
{
 var pts;
 if ($carte=="") return 0;
 $ty = parseInt($carte[0]);
 $numCa = getCardNumero($carte);
 
 if ( $ty==5 && ($numCa==1 || $numCa==21) ) $pts=4.5;
 else if ( $ty==5) $pts=0.5;
 else if ( $ty<5 && $numCa<11) $pts = 0.5;
 else if ($ty==6) $pts=4.5;
 else if ( $ty<5 && $numCa==11) $pts = 1.5;
 else if ( $ty<5 && $numCa==12) $pts = 2.5;
 else if ( $ty<5 && $numCa==13) $pts = 3.5;
 else if ( $ty<5 && $numCa==14) $pts = 4.5;
 return $pts;
}
function getPointsCarteChelem($carte)
{
 var pts;
 if ($carte=="") return 0;
 $ty = parseInt($carte[0]);
 $numCa = getCardNumero($carte);
 
 if ( $ty==5 && ($numCa==1 || $numCa==21) ) $pts=4.5;
 else if ( $ty==5) $pts=0.5;
 else if ( $ty<5 && $numCa<11) $pts = 0.5;
 else if ($ty==6) $pts=0;
 else if ( $ty<5 && $numCa==11) $pts = 1.5;
 else if ( $ty<5 && $numCa==12) $pts = 2.5;
 else if ( $ty<5 && $numCa==13) $pts = 3.5;
 else if ( $ty<5 && $numCa==14) $pts = 4.5;
 return $pts;
}
function getPointsCarteAnnonce2($carte)
{
 var pts;
 if ($carte=="") return 0;
 $ty = parseInt($carte[0]);
 $numCa = getCardNumero($carte);
 
 if ( $ty==5 && $numCa==21 ) $pts=10;
 else if ( $ty==5 && $numCa==20 ) $pts=5;
 else if ( $ty==5 && $numCa==19 ) $pts=4.5;
 else if ( $ty==5 && $numCa==18 ) $pts=3.5;
 else if ( $ty==5 && $numCa>15 ) $pts=4;
 else if ( $ty==5 && $numCa==1 ) $pts=0;
 else if ( $ty==5) $pts=2;
 else if ( $ty<5 && $numCa<11) $pts = 0;
 else if ($ty==6) $pts=7;
 else if ( $ty<5 && $numCa==11) $pts = 1;
 else if ( $ty<5 && $numCa==12) $pts = 2;
 else if ( $ty<5 && $numCa==13) $pts = 3;
 else if ( $ty<5 && $numCa==14) $pts = 6;
 return $pts;
}
function getPoigneePrime($numCartesP)
{
 switch ($numCartesP)
 {
 //case 5: return 20;
 case 10: return 20;
 case 13: return 30;
 case 15: return 40;
 }
 return 0;
} 
function canIPlayCard($carte,$disposeCouleur,$disposeMeilleurAtout,$disposeAtout,$meilleurAtoutPose) {

 $cardN = getCardNumero($carte);
 if (($carte[0]==partie.typeTour && partie.typeTour!=5) ||
 partie.posTable==0 || 
 ($carte[0]=="5" && partie.typeTour=="5" && (!$disposeMeilleurAtout || $cardN>$meilleurAtoutPose ) ) ||
 ($carte[0]=="5" && !$disposeCouleur && (!$disposeMeilleurAtout || $cardN>$meilleurAtoutPose )) ||
 ($carte[0]=="6") ||
 (!$disposeAtout && !$disposeCouleur) ||
 (!$disposeAtout && partie.typeTour==5) ||
 partie.typeTour==6 )
 return true;
 else return false;
}

function getPointsCarteIA($carte)
{
 var $pts = 0;
 if ($carte=="") return 0;
 $ty = parseInt($carte[0]);
 $numCa = getCardNumero($carte);
 if ( $ty==5 && ($numCa==1 ) ) $pts=5;
 //else if ( $ty==5 && $numCa==21 ) $pts=0.4;
 else if ( $ty==5) $pts=0.5;
 else if ( $ty<5 && $numCa<11) $pts = 0.5;
 else if ($ty==6) $pts=4.5;
 else if ( $ty<5 && $numCa==11) $pts = 1.5;
 else if ( $ty<5 && $numCa==12) $pts = 2.5;
 else if ( $ty<5 && $numCa==13) $pts = 3.5;
 else if ( $ty<5 && $numCa==14) $pts = 4.5;
 return $pts;
}   
function trouveCarteRemplacementExcuse ($jeu)
{
 //$tab = explode("|",$jeu);
 var $minPts = 99;
 var $res = "";
 for (var $i in $jeu)
 {
 var $ptsCa = getPointsCarte($jeu[$i]);
 if ($ptsCa<$minPts)
 {
  $minPts = $ptsCa;
  $res = $jeu[$i];
 }
 }
 return $res;
} 

function getIAChoixAnnonce($jeu,$annonceCourante)
{
 //$annoncesMinPoints = array(40,56,71,81);
 var $scoJ = 0;

 var $nbreAtouts = 0;
 var $disposePetit = false;
 //$coupesFranche = array(1=>true,2=>true,3=>true,4=>true);
 var $disposeRoi = [false,false,false,false,false];//array(1=>false,2=>false,3=>false,4=>false);
 var $disposeDame = [false,false,false,false,false];//array(1=>false,2=>false,3=>false,4=>false);
 var $nbCartesCouleur = [0,0,0,0,0,0];//array(1=>0,2=>0,3=>0,4=>0);
 var $atoutsPossedes = [];
 
 for (var $n in $jeu )
 {
 var $carte = $jeu[$n];
 var $pts = getPointsCarteAnnonce2($carte);
 $scoJ+=$pts;
 var typeC = parseInt($carte[0]);
 if ( typeC<5) {
 $nbCartesCouleur[typeC]++;
 if (getCardNumero($carte)==14)
 $disposeRoi[typeC] = true;
 if (getCardNumero($carte)==13)
 $disposeDame[typeC] = true;
 }
 if ( typeC=="5") {
 $nbreAtouts++;
 var $numAtout = getCardNumero($carte);
 $atoutsPossedes[$numAtout] = 1;
 if ($numAtout==1)
 $disposePetit = true;
 }
 }
 if ($disposePetit) {
 if ($nbreAtouts>=8)
 $scoJ+=8;
 if ($nbreAtouts==7)
 $scoJ+=7;
 if ($nbreAtouts==6)
 $scoJ+=6;
 }
 var $compteLongue = false;
 for ($i=1;$i<5;$i++) {
 if ($disposeRoi[$i] && $disposeDame[$i]) {
 $scoJ+=1;
 }
 if ($nbCartesCouleur[$i]==0) {
 $scoJ+=5;
 }
 if ($nbCartesCouleur[$i]==1) {
 $scoJ+=3;
 }
 if ($nbCartesCouleur[$i]==2) {
 $scoJ+=1;
 }
 if ($nbCartesCouleur[$i]>4 && !$compteLongue) {
 $scoJ+=5+($nbCartesCouleur[$i]-5)*2;
 $compteLongue = true;
 }
 }
 if ($nbreAtouts<=5) return 0;
 //$annoncesMinPoints = array(40,56,71,81);
 var $resuu = 0;
 if ($scoJ>=43)
 $resuu = 1;
 if ($scoJ>=54)
 $resuu = 2;
 if ($scoJ>=67)
 $resuu = 3;
 if ($scoJ>=78)
 $resuu = 4;
 if ($resuu>$annonceCourante) return $resuu;
 return 0;
}


 
function refreeshCartesChienOffline()
{  
 for (key in cartesChien) {
 if (cartesChien[key] && cartesChien.hasOwnProperty(key) && typeof cartesChien[key].id!='undefined') 
 {       
  if ($$(cartesChien[key].id)==null) 
  {
  cartesChien = new Array ();
  refreshChienMsgOffline();
  return;
  }               
 }
 }
 for (key in cartesChien) {
 if (cartesChien[key] && typeof cartesChien[key].id!='undefined') {
 if (cartesChien.hasOwnProperty(key) ) 
  carteSelectionnee(cartesChien[key].id); 
 else
  carteSelectionnable(cartesChien[key].id);
 }
 }
 refreshChienMsgOffline();
 
}
function refreeshCartesPoigneeOffline()
{  
 for (key in cartesPoignee) {
 if (cartesPoignee.hasOwnProperty(key) && typeof cartesPoignee[key].id!='undefined') 
 {       
  if ($$(cartesPoignee[key].id)==null) 
  {
  cartesPoignee = new Array ();
  refreshPoigneeMsgOffline(); 
  return;
  }               
 }
 }
 for (key in cartesPoignee) {
 if (cartesPoignee[key] && typeof cartesPoignee[key].id!='undefined') {
 if (cartesPoignee.hasOwnProperty(key)) 
  carteSelectionnee(cartesPoignee[key].id); 
 else
  carteSelectionnable(cartesPoignee[key].id); 
 }
 }
 refreshPoigneeMsgOffline();
 
}
var poigneeInit = -1;
function initCartesPoigneeOffline (manche) 
{
 if (manche>poigneeInit)
 {
 poigneeInit = manche; 
 return true;
 }
 return false;
}
function refreshChienMsgOffline()
{ 
 var nbCartesChien = 6;
 if (nombreDeJPartie==5) nbCartesChien=3;
 var chienCSize = mySizeOf(cartesChien);
 
 if (chienCSize==nbCartesChien) setMessage('Constitution de l\'écart : ecart valide');
 else if (chienCSize>nbCartesChien) setMessage('Constitution de l\'écart : '+(chienCSize-nbCartesChien)+' carte'+((chienCSize-nbCartesChien)!=1?"s":"")+' en trop');
 else if (chienCSize==0) setMessage('Sélectionnez les cartes qui composeront l\'écart');
 else setMessage('Constitution de l\'écart : Encore '+(nbCartesChien-chienCSize)+' carte'+((nbCartesChien-chienCSize)!=1?"s":"") );
 
 var key;  
 
 if ( chienCSize==nbCartesChien)
 {
 var size = '';
 for (key in cartesChien)
 {       
  if (cartesChien[key] && cartesChien.hasOwnProperty(key)) 
  {
  if (typeof cartesChien[key].id!='undefined') { 
  size+='|'+getCardName(cartesChien[key]); 
  } 
  }
 } 
 size=size.substr(1);

 if ( !selMoteur.actionExists('Valider l\'écart') ) {
  //clearActions();     
  selMoteur.clearActions(true);
  selMoteur.addAction('Valider l\'écart','valideChienOffline(\''+size+'\');','btn-success');
  if (!isChelem)
  selMoteur.addAction('Chelem','chelemOffline();','btn-danger',true);
 }
 }
 else
 {
 selMoteur.clearActions();
 }
}
function refreshPoigneeMsgOffline()
{ 
 var nbCartesPoignee1 = 10;
 var nbCartesPoignee2 = 13;
 var nbCartesPoignee3 = 15;
 var key; 
 /*if (nombreDeJPartie==5) {
 nbCartesPoignee1 = 8;
 nbCartesPoignee2 = 10;
 nbCartesPoignee3 = 13;
 }*/
 var excuseInPoignee = false;
 for (key in cartesPoignee) {
 if (cartesPoignee[key] && cartesPoignee.hasOwnProperty(key))
 {
  if (getCardName(cartesPoignee[key])== '6_Excuse.gif') 
  excuseInPoignee = true;
 }
 }
 if (excuseInPoignee )
 {   
 var cnt = selMoteur.getCards();
 for (key in cnt) {
  if (cnt[key]!=null && cnt[key].id!=null && cnt[key].id.substr(0,6)=='MonJeu' && getCardName(cnt[key]).substr(0,1)=='5' && !cartesPoignee.hasOwnProperty(getCardName(cnt[key])) )
  {
  if ( !selMoteur.actionExists( 'Ne pas annoncer de poignée') || selMoteur.actionExists( 'Valider la poignée') ) {
  //clearActions();     
  selMoteur.clearActions(true);
  setMessage('Annonce de poignée invalide');
  selMoteur.addAction('Ne pas annoncer de poignée','validePoigneeOffline(\'\');','btn-success',true);
  return;
  }
  }
 }
 }
 var poigneeSize = mySizeOf(cartesPoignee);
 if (poigneeSize==nbCartesPoignee1 || poigneeSize==nbCartesPoignee2 || poigneeSize==nbCartesPoignee3) 
 setMessage('Annonce de poignée valide');
 else if (poigneeSize>nbCartesPoignee1) setMessage('Annonce de poignée invalide');
 else if (poigneeSize==0) setMessage('Vous avez la possibilite d\'annoncer une poignée');
 else setMessage('Minimum '+nbCartesPoignee1+' cartes : encore '+(nbCartesPoignee1-poigneeSize)+' carte'+((nbCartesPoignee1-poigneeSize)!=1?"s":"") );
 
 
 if ( poigneeSize==nbCartesPoignee1 || poigneeSize==nbCartesPoignee2 || poigneeSize==nbCartesPoignee3)
 {
 var size = '';
 for (key in cartesPoignee) {
  if (cartesPoignee[key] && cartesPoignee.hasOwnProperty(key))
  {
  if (typeof cartesPoignee[key].id!='undefined') { 
  size+='|'+getCardName(cartesPoignee[key]);
  }
  }
 }
 size=size.substr(1); 
 if ( !selMoteur.actionExists('Valider la poignée')) {//$$('infosJeu').innerHTML.indexOf( 'Valider la poignée</a>')==-1) {     
 selMoteur.clearActions(true);
 selMoteur.addAction('Ne pas annoncer de poignée','validePoigneeOffline(\'\');','btn-warning',true);
 selMoteur.addAction('Valider la poignée','validePoigneeOffline(\''+size+'\');','btn-success');
 }
 }
 //else if ( $$('infosJeu').innerHTML.indexOf( 'Ne pas annoncer de poignée</a>')==-1 || $$('infosJeu').innerHTML.indexOf( 'Valider la poignée</a>')!==-1) 
 else if ( !selMoteur.actionExists('Ne pas annoncer de poignée') || selMoteur.actionExists('Valider la poignée') ) 
 {          
 selMoteur.clearActions(true);
 selMoteur.addAction('Ne pas annoncer de poignée','validePoigneeOffline(\'\');','btn-success',true);
 }
}
 
function carteChienSelectOffline (obj)
{
 //clearSounds();
 if (!cardActionsActivated) return; 
 
 if (obj==null) 
 {
 $.log('Erreur carte chien select obj is null');
 return;
 }    
 var name = getCardName(obj);
 if (name.substr(0,1)=='5')
 {   
 var cnt = selMoteur.getCards();
 for (key in cnt) {
  if (cnt[key] && cnt[key].id!=null && cnt[key].id.substr(0,6)=='MonJeu' 
  && parseInt(cnt[key].style.top)!=0 
  && getCardName(cnt[key]).substr(0,1)!='5' && getCardName(cnt[key]).substr(0,1)!='6' && getCardName(cnt[key]).indexOf("-14.gif")==-1 && !cartesChien.hasOwnProperty(getCardName(cnt[key])) )
  {
  alert('Vous ne pouvez sélectionner un atout que s\'il ne reste plus d\'autres cartes à sélectionner.');
  return;
  }
 }
 }

 lastMO = obj;  
 
 if (!cartesChien.hasOwnProperty(name))//obj.style.top==0 || obj.style.top=='0px')
 {
 carteSelectionnee(obj.id); 
 cartesChien[name] = obj;
 }
 else
 {
 carteSelectionnable(obj.id); 
 delete cartesChien[name];
 }    
 refreshChienMsgOffline();    
}
 
function cartePoigneeSelectOffline (obj)
{
 //clearSounds();
 if (!cardActionsActivated) return; 
 if (!obj) return;
 
 var name = getCardName(obj);
 if (name=='6_Excuse.gif')
 {   
 var cnt = selMoteur.getCards();
 for (key in cnt) {
  if (cnt[key] && cnt[key].id!=null && cnt[key].id.substr(0,6)=='MonJeu' && getCardName(cnt[key]).substr(0,1)=='5' && !cartesPoignee.hasOwnProperty(getCardName(cnt[key])) )
  {
  alert('Vous ne pouvez sélectionner l\'excuse que s\'il ne reste plus d\'atouts à sélectionner.');
  return;
  }
 }
 }

 lastMO = obj;    
 if (!cartesPoignee.hasOwnProperty(name))
 { 
 carteSelectionnee(obj.id);        
 cartesPoignee[name] = obj;
 }
 else
 {
 carteSelectionnable(obj.id);        
 delete cartesPoignee[name];
 }    
 refreshPoigneeMsgOffline(); 
} 


function quitOffline()
{ 
 confirme('ATTENTION : Voulez-vous vraiment quitter la partie ?',function () {
 window.onunload = window.onbeforeunload = null;
 document.location = '/Fin-de-partie.php?modeJeu=Offline'; 
 });
}






var $cartesParJ = 18;
var $cartesChien = 6;
var $nbJPa = 4;
var partie;
var tourDe;


function startCPUOfflineGame() {
 privateStart();

 isOffLineGame = true;
 clearTimeout(CBLadocarteca);
 resDownloaded = true;
 llog('startCPUOfflineGame HighRes has been downloaded');

 partie = new Partie();
 playMusic();
 selMoteur.initEngine(function () {

 llog('startCPUOfflineGame engine init end');
 whoami(0);
 setNoMedals();
 showGameBoard('CPU',0,'4',null,false);
 //return;
 disableMask(0);
 showBackground('blancCasse.png');
 //enableChat();
 window.onunload = closeBrowser;
 
 selMoteur.setUtilisateur(0,'Vous','/images/Avatars/Avatar-01.jpg','',true,'0','0','-99');
 selMoteur.setUtilisateur(1,'IA 1','/images/IAs/IA-7.jpg','',1,'0','0','-1');
 selMoteur.setUtilisateur(2,'IA 2','/images/IAs/IA-5.jpg','',1,'0','0','-1');
 selMoteur.setUtilisateur(3,'IA 3','/images/IAs/IA-4.jpg','',1,'0','0','-1');
 setEtape('Attente');
 partie.donneur = Math.floor(Math.random()*4);
 partie.main = (partie.donneur+1)%4;
 selMoteur.setDonneurPos(partie.donneur);
 partie.annonce = 0;
 partie.etape = 'Annonces';
 partie.posTable = 0;
 selMoteur.setPreneur (-1);


 distributionOffline();
 setTimeout(gameStepAnnonce,2500);
 });
 //gameStepAnnonce();


 
}


function distributionOffline() {
 var $cartes = createCardPile();//.reverse();

 var $cff=0; 
 do {
 $cff++;
 $cartes = shuffleArray($cartes); 
 } while (mainPetitSecJeu($cartes) && $cff<20);
 
 for ($i=0;$i<4;$i++)
 {
 var jeuTmp = $cartes.slice($i*$cartesParJ,$i*$cartesParJ+$cartesParJ);
 partie.joueurs[$i].main = jeuTmp;
 } 
 var $jeuChien = $cartes.slice($nbJPa*$cartesParJ,$nbJPa*$cartesParJ+$cartesChien);
 partie.chien = $jeuChien;

 selMoteur.clearCards();
 for (var i=0;i<$cartesParJ;i++) {
 selMoteur.addCard(partie.joueurs[0].main[i]);
 }
 reorganiseCartes();
}


var $phrasesAnnonces = [];
$phrasesAnnonces[1]="prise";
$phrasesAnnonces[2]="garde";
$phrasesAnnonces[3]="garde sans";
$phrasesAnnonces[4]="garde contre";

/*var $phrasesAnnoncesArt = [];
$phrasesAnnoncesArt[1]="une prise";
$phrasesAnnoncesArt[2]="une garde";
$phrasesAnnoncesArt[3]="une garde sans";
$phrasesAnnoncesArt[4]="une garde contre";*/

function gameStepAnnonce() {

 tourDe = (partie.main+partie.posTable)%$nbJPa;
 selMoteur.setTurn(tourDe);
 if ( partie.joueurs[tourDe].isIA) {
 
 var IAchoice = getIAChoixAnnonce(partie.joueurs[tourDe].main,partie.annonce);
 choixAnnonceOffline(IAchoice,$phrasesAnnonces[IAchoice]);
 /*setPrise (tourDe,'Passe');
 showMessage('IA '+tourDe+' passe');*/
 //clearTO();
 } else {

 selMoteur.clearActions();
 selMoteur.addAction('Passe','choixAnnonceOffline(0,\'Passe\');','btn-success');
 if (partie.annonce<1) selMoteur.addAction('Prise','choixAnnonceOffline(1,\'Prise\');','btn-warning');
 if (partie.annonce<2) selMoteur.addAction('Garde','choixAnnonceOffline(2,\'Garde\');','btn-warning');
 if (partie.annonce<3) selMoteur.addAction('Garde sans','choixAnnonceOffline(3,\'Garde sans\');','btn-danger');
 if (partie.annonce<4) selMoteur.addAction('Garde contre','choixAnnonceOffline(4,\'Garde contre\');','btn-danger');
 selMoteur.addAction('Chelem','chelemOffline();','btn-danger');
 selMoteur.addAction('Redistribuer','redistribuerCPUOffline();','btn-info');
 selMoteur.setTurn(0);
 showMessage('Faites votre annonce');
 }
}

function redistribuerCPUOffline() {
 showMessage("Re-distribution...");
 selMoteur.afficheCartes(JSON.stringify(partie["chien"]),"Cartes qui étaient dans le chien");

 setTimeout(function () {

 for (var ff = 0;ff<4;ff++)
 selMoteur.setPrise (ff,'');
 selMoteur.hideInfoJeu();
 selMoteur.clearCards();
 distributionOffline();
 partie.annonce = 0;
 partie.preneur = -1;
 partie.posTable = 0;
 partie.donneur = (partie.donneur+1)%4;
 partie.main = (partie.donneur+1)%4;
 selMoteur.setDonneurPos(partie.donneur);
 newRound();
 setTimeout(gameStepAnnonce,1000);
 },2000);
}

function choixAnnonceOffline($call,nom) {
 var $partie = partie;
 selMoteur.clearActions();
 if ($call>partie.annonce) {
 partie.annonce = $call;
 partie.preneur = tourDe;
 if (partie.chelem) {
 selMoteur.setPrise (tourDe,nom+' + Chelem');
 if (tourDe==0)
 showMessage('Vous annoncez une '+nom+' + chelem');
 else
 showMessage(partie.joueurs[tourDe].pseudo+' annonce une '+nom+' + chelem');
 
 } else {
 selMoteur.setPrise (tourDe,nom);
 if (tourDe==0)
 showMessage('Vous annoncez une '+nom);
 else
 showMessage(partie.joueurs[tourDe].pseudo+' annonce une '+nom);
 
 }
 } else {
 if (tourDe==0)
 partie.chelem = 0;
 selMoteur.setPrise (tourDe,'Passe');
 if (tourDe==0)
 showMessage('Vous passez');
 else
 showMessage(partie.joueurs[tourDe].pseudo+' passe');
 }

 if ( partie.posTable+1==$nbJPa || $call==4 ) {
 if (partie.annonce==0) {

 showMessage("Aucune annonce : re-distribution...");
 selMoteur.afficheCartes(JSON.stringify(partie["chien"]),"Cartes qui étaient dans le chien");

 
 setTimeout(function () {
 for (var ff = 0;ff<4;ff++)
 selMoteur.setPrise (ff,'');
 if ($$('infosJeuInfo'))
 $$('infosJeuInfo').innerHTML = '';
 distributionOffline();
 partie.posTable = 0;
 partie.donneur = (partie.donneur+1)%4;
 partie.main = (partie.donneur+1)%4;
 selMoteur.setDonneurPos(partie.donneur);
 newRound();
 setTimeout(gameStepAnnonce,1000);
 },3000);
 } else {

 setTimeout(function () {
 selMoteur.setPreneur (partie.preneur,partie.annonce,partie.chelem);
 for (var $i=0;$i<4;$i++)
 {
 var $joueurPartie = partie.joueurs[$i];
 // AJOUTER LE CHIEN DANS LA MAIN DU PRENEUR
 if ($partie["annonce"]==4 && $i==(partie.preneur+1)%$nbJPa)
 {
 $triMain = $joueurPartie["main"];
 partie.joueurs[$i].ecart = $partie["chien"].join('|');
 }
 else if ($partie["annonce"]==3 && $i==partie.preneur)
 {
 $triMain = $joueurPartie["main"];
 partie.joueurs[$i].ecart = $partie["chien"].join('|');
 }
 else if ($partie["annonce"]<3 && $i==partie.preneur)
 $triMain = ($joueurPartie["main"].join('|')+'|'+partie["chien"].join('|')).split('|');//explode("|",$joueurPartie["main"]."|".$partie["chien"]);
 else {
 $triMain = $joueurPartie["main"];
 }
 $triMain.sort();
 partie.joueurs[$i].main = $triMain;
 }

 if ($partie["annonce"]<3)
 {
 if (partie.preneur==0)
 selMoteur.afficheCartes(JSON.stringify($partie["chien"]),"Ce chien intègre votre jeu");
 else
 selMoteur.afficheCartes(JSON.stringify($partie["chien"]),"Ce chien intègre le jeu de "+partie.joueurs[partie.preneur].pseudo);
 }
 
 partie.joueurs[0].main.sort();
 selMoteur.clearCards();
 for (var i=0;i<partie.joueurs[0].main.length;i++) {
 selMoteur.addCard(partie.joueurs[0].main[i]);
 }
 reorganiseCartes();
 
 partie.etape = 'Jeu';
 partie.posTable = 0;
 
 if ($partie["annonce"]<3) {

 if (partie.preneur==0)
 setTimeout(gameStepChien,500);
 else
 setTimeout(gameStepChien,2500);
 } else {

 selMoteur.clearCards();
 for (var i=0;i<$cartesParJ;i++) {
 selMoteur.addCard(partie.joueurs[0].main[i]);
 }
 reorganiseCartes();
 
 if (partie.preneur==0)
 setTimeout(gameStepJeu,700);
 else
 setTimeout(gameStepJeu,2500);
 }
 
 },1500);
 }
 } else {

 partie.posTable++;
 setTimeout(gameStepAnnonce,1000);
 }
}
function gameStepChien() {
 tourDe = partie.preneur;
 selMoteur.setTurn(tourDe);
 if ( partie.joueurs[tourDe].isIA) {


 
 
 
 var $cartesChien = partie.chien;
 var $nbCouleurEnMain = [0,0,0,0,0,0,0,0];
 var $chienjaipetit = false;
 var $cartesChienIAResult = [];
 var $IAcartesChienIA = partie.joueurs[tourDe].main;
 var $listeCartesTombees = [[],[],[],[],[],[],[],[]];
 
 for (var $ib=0;$ib<$cartesChien.length;$ib++)
 {

  for (var $i in $IAcartesChienIA)
  { 
  var $carte = $IAcartesChienIA[$i];
  var typeC = parseInt($carte[0]);
  $listeCartesTombees[typeC][getCardNumero($carte)] = 2; 
  $nbCouleurEnMain[typeC]++; 
  if (getCardNumero($carte)==1 && typeC==5)
   $chienjaipetit = true;
  }
      
  var $meilleurScoreIAChien = -99999; 
  var $meilleurScoreIAChienCarte = "";

  for (var $i in $IAcartesChienIA)
  { 
  var $carte = $IAcartesChienIA[$i];
  
  var $scoreCarteActuelle = 0; 
  var typeC = parseInt($carte[0]);
  
  if ((typeC>4 || getCardNumero($carte)!="14") && $carte!="5_Atout-21.gif" && $carte!="5_Atout-01.gif" && $carte!="6_Excuse.gif") 
  {
   //$typeCJJ = intval(substr($carte,0,1));       
   if (typeC=="5") $scoreCarteActuelle -= 5000;
   if (typeC=="5" && getCardNumero($carte)==1) $scoreCarteActuelle -= 5000;
   if (typeC=="6") $scoreCarteActuelle -= 7000;
   
   if (typeC!=5) {
   $carteMaitresse = true;
   for (var $g=getCardNumero($carte)+1;$g<15;$g++) {
    if ($listeCartesTombees[typeC][$g]!=2)
    $carteMaitresse = false;
   }
   } else
   $carteMaitresse = false;
   
   if ($chienjaipetit) { // si j'ai le petit, coupes franches au max
   if (getPointsCarte($carte)!=5) {
   if ($carteMaitresse)
   $scoreCarteActuelle -= 400;
   else
   $scoreCarteActuelle += (6-getPointsCarte( $carte ))*2;
   
   $scoreCarteActuelle += (20-getCardNumero( $carte ));
   }
   $scoreCarteActuelle += (14-$nbCouleurEnMain[typeC])*20;
   } else if ($nbCouleurEnMain[5]>5) { // fort en atouts, coupe franche, equilibrage
   if (getPointsCarte($carte)!=5) {
   if ($carteMaitresse)
   $scoreCarteActuelle -= 400;
   else
   $scoreCarteActuelle += 3*getPointsCarte( $carte );
   $scoreCarteActuelle += (20-getCardNumero( $carte ));
   }
   if ($nbCouleurEnMain[typeC]<=$cartesChien-$ib)
   $scoreCarteActuelle += (14-$nbCouleurEnMain[typeC])*20*2;
   else
   $scoreCarteActuelle += ($nbCouleurEnMain[typeC])*20;
   } else {
   if (getPointsCarte($carte)!=5) {
   if ($carteMaitresse)
   $scoreCarteActuelle -= 400;
   else
   $scoreCarteActuelle += 3*getPointsCarte( $carte );
   $scoreCarteActuelle += (20-getCardNumero( $carte ));
   }
   $scoreCarteActuelle += ($nbCouleurEnMain[typeC])*20;
   }
   
   if ($scoreCarteActuelle>$meilleurScoreIAChien) 
   {
   $meilleurScoreIAChien = $scoreCarteActuelle;
   $meilleurScoreIAChienCarte = $carte;
   }
  }
  } 
  $cartesChienIAResult.push($meilleurScoreIAChienCarte);
     
  var $cartesChienIA = [];
  for (var $i in $IAcartesChienIA)
  { 
  var $carte = $IAcartesChienIA[$i]; 
  if ($carte!=$meilleurScoreIAChienCarte)
   $cartesChienIA.push( $carte );
  }
  $IAcartesChienIA = $cartesChienIA;
 }
 var $chien = $cartesChienIAResult.join('|');//implode( "|", $cartesChienIAResult); 
 
 valideChienOffline($chien);
 


 } else {
 for (var $i in partie.joueurs[tourDe].main)//$jeuJoueur as $i => $carte)
 {
 var $carte = partie.joueurs[tourDe].main[$i];
 if (($carte[0]>4 || getCardNumero($carte)!="14") && $carte!="5_Atout-21.gif" && $carte!="5_Atout-01.gif" && $carte!="6_Excuse.gif" )
 {
 selMoteur.setCardAction($carte,'carteChienSelectOffline(this);');
 }
 else
 {
 selMoteur.setCardAction($carte,'');
 }
 }
 activateCardActions(true);
 refreeshCartesChienOffline();
 showMessage('Faites votre écart');
 }
}
function valideChienOffline($chien)
{  
 selMoteur.clearActions();
 selMoteur.clearCards ();

 
 var $newMain = [];
 for (var $i in partie.joueurs[tourDe].main)//$jeuJoueur as $i => $carte)
 {
 var $carte = partie.joueurs[tourDe].main[$i];
 if ($chien.indexOf($carte)==-1 && $carte!="")
 {
  $newMain.push($carte);
 }
 }
 
 if (partie["annonce"]<=2 ) {
 partie.joueurs[tourDe].main = $newMain;
 selMoteur.clearCards();
 for (var i=0;i<$cartesParJ;i++) {
 selMoteur.addCard(partie.joueurs[0].main[i]);
 }
 reorganiseCartes();
 }
 
 /* si jamais il y a des atouts dans l ecart */
 var $tabChien = $chien.split("|");
 var $cartesChienAmontrer = [];
 for (var $c in $tabChien)
 {
 var $carteChien = $tabChien[$c];
 if ($carteChien[0]==5)
 {
  $cartesChienAmontrer.push($carteChien);
 }
 }
 if ($cartesChienAmontrer.length>0)
 {
 if (tourDe!=0)
 selMoteur.afficheCartes(JSON.stringify($cartesChienAmontrer),partie.joueurs[tourDe].pseudo+" place les atouts suivants dans son écart");
 //afficheLesCartes($cartesChienAmontrer,partie.joueurs[tourDe].pseudo+" place les atouts suivants dans son écart :" ); 
 }

 
 if (partie["annonce"]<3) {
 partie.joueurs[tourDe].ecart = $chien;
 //partie.ecart = $chien;
 }
 partie.posTable = 0;
 selMoteur.clearActions();
 activateCardActions(false);
 
 
 setTimeout(gameStepJeu,500); 
}
function validePoigneeOffline($poignee)
{       
 clearTO () ;
 selMoteur.clearActions();

 var $nbAtoutsTT = 0;
 var $presExcuse = false;
 for (var $i in partie.joueurs[tourDe].main)
 {
 var $carte = partie.joueurs[tourDe].main[$i];
 if ($carte[0]==5)
  $nbAtoutsTT++;
 }
 var $tabPoignee = $poignee.split("|");
 for (var $ff in $tabPoignee ) {
 var $carte = $tabPoignee[$ff];
 if ($carte[0]==6)
  $presExcuse = true;
 }
 if ($presExcuse && $nbAtoutsTT+1!=$tabPoignee.length ) {
 alert('Invalide');
 $poignee="";
 }
 for (var $ff in $tabPoignee ) {
 var $carte = $tabPoignee[$ff];
 if ( $carte[0]!="5" && $carte[0]!="6" && $carte!="") {
 alert('Invalide2');
 $poignee="";
 }
 }
 if ($poignee=="")
 partie.joueurs[tourDe].poignee = -1;
 else
 {
 selMoteur.afficheCartes(JSON.stringify($tabPoignee),"Vous annoncez une poignée de "+$tabPoignee.length+" atouts");
 partie.joueurs[tourDe].poignee = $tabPoignee.length;
 }
 selMoteur.clearCardsActions (); 
 //rpc('poignee='+poignee);
 setTimeout(gameStepJeu,1000); 
}
function chelemOffline() {
 confirme('Etes-vous sûr de vouloir annoncer un chelem ?',function () {
 partie.chelem = 1;
 selMoteur.removeAction('Chelem');
 if (partie.annonce) {
 selMoteur.setPrise (tourDe,$phrasesAnnonces[partie.annonce]+' + chelem');
  partie.main = partie.preneur;
 } else {
 selMoteur.setPrise (tourDe,'Chelem');
 }
 
 if (tourDe==0)
  showMessage("Vous annoncez un chelem !");
 else
 showMessage(partie.joueurs[tourDe].pseudo+" annonce un chelem !");
 });
}
function joueCarteJou($joueCarte) {
 tourDe = (partie.main+partie.posTable)%$nbJPa;

 if (tourDe==0) {
 joueCarte($joueCarte);
 }
}
function clearCardsActionsClick(except) {
 console.log('clearcardaction');
 
 selMoteur.timeThatRemains(-1,0);
 selMoteur.clearCardsActions ();
 selMoteur.clearMasques();
 return;
}
function joueCarte($joueCarte) {
 var $partie = partie;

 tourDe = (partie.main+partie.posTable)%$nbJPa;
 
 /*if (partie.joueurs[tourDe].isIA)
 showMessage(partie.joueurs[tourDe].pseudo+' joue '+getCardNameOL($joueCarte));
 else*/
 if (!partie.joueurs[tourDe].isIA)
 showMessage('Vous jouez '+getCardNameOL($joueCarte));

 if (!partie.joueurs[tourDe].isIA)
 console.log('joue carte',getCardNameOL($joueCarte));
 
 selMoteur.clearActions();
 clearCardsActionsClick ();
 
 surLeTapis($joueCarte , tourDe); 
 
 if ( partie.posTable==0 || partie.typeTour==6)
 {
 partie.typeTour = $joueCarte[0];
 }
 if ($partie["posTable"]==0)
 partie.joueurs[tourDe].lastouverture = $joueCarte;
 
 partie.joueurs[tourDe].cartePosee = $joueCarte;
 partie.joueurs[tourDe].nbCartesAff++;
 partie.nbCartesJouees++;
 
 
 var delCardPos = -1;
 for (var $i in partie.joueurs[tourDe].main)//$jeuJoueur as $i => $carte)
 {
 var $carte = partie.joueurs[tourDe].main[$i];
 if ($joueCarte==$carte)
 delCardPos = $i;
 }
 if (delCardPos==-1) {
 alert('bug');
 }
 delete partie.joueurs[tourDe].main[delCardPos];
 
 if (partie.posTable<3) {

 partie.posTable++;
 //setTurn((($partie["main"]+$partie["posTable"])%$nbJPa));
 setTimeout(gameStepJeu,500);
 } else {
 var $prenneurPli = 0;
 var $prenneurPliAvec = '';
 
 var $levees = []; 
 var $leveesReel = []; 
 var $tourPetit = false; 
 
 for (var $c in partie.joueurs)
 {
 var $joueurPartie = partie.joueurs[$c];
 $typeCJ = $joueurPartie["cartePosee"][0];
 $leveesReel.push($joueurPartie["cartePosee"]);
 
 if ( $joueurPartie["cartePosee"]=="5_Atout-01.gif" ) $tourPetit = true; 
  
 if ( $joueurPartie["cartePosee"]=="6_Excuse.gif" )
 {
  if ($partie["nbCartesJouees"]+$nbJPa<$cartesParJ*$nbJPa)
  {        
  if ($joueurPartie["levees"]=="")
  {
   $joueurPartie["levees"] ='6_Excuse.gif';
   $carteRemplacement = "**";
   showMessage("L'excuse revient à "+$joueurPartie["pseudo"]);  
  }
  else
  {
   $carteRemplacement = trouveCarteRemplacementExcuse( $joueurPartie["levees"].split('|'));
   $joueurPartie["levees"] =$joueurPartie["levees"].replace($carteRemplacement,"6_Excuse.gif");//str_replace($carteRemplacement,"6_Excuse.gif",$joueurPartie["levees"]);
   showMessage("L'excuse revient à "+$joueurPartie["pseudo"]+" en échange de "+getCardNameOL($carteRemplacement)); 
  }                
  partie.joueurs[$c].levees = $joueurPartie["levees"]; 
  partie.joueurs[$c].cartePosee = $carteRemplacement;
  //$joueurPartie["cartePosee"]=$carteRemplacement;
  }
  else
  { 
  var $isChelemAttaqueOk = true;
  var $isChelemDefenseOk = true;

  for (var $c2 in partie.joueurs)// as $c2 => $j2)
  {
  var $j2 = partie.joueurs[$c2];
  if ($j2.posTable!=$partie.preneur && $j2["levees"].split('|').length>3 ) {
  $isChelemAttaqueOk = false;
  }
  if ($j2.posTable==$partie['preneur'] && $j2["levees"].split('|').length>3 ) {
  $isChelemDefenseOk = false;
  }
  }
  if ( ($joueurPartie['posTable']==$partie['preneur'] || $joueurPartie['posTable']==$partie['idEquipier']) && $isChelemAttaqueOk) {
  } else if ( ($joueurPartie['posTable']!=$partie['preneur'] && $joueurPartie['posTable']!=$partie['idEquipier']) && $isChelemDefenseOk) {
  } else {
  showMessage("L'excuse jouee au dernier tour est perdue..."); 
  } 
  }
 }
 $levees.push($joueurPartie["cartePosee"]);
       
 var $joueurCoupe = ($partie["typeTour"]<5 && $typeCJ==5 );
 if ($joueurCoupe && parseInt($partie["typeTour"])!=0 )
  partie.joueurs[$c][ "coupe"+$partie["typeTour"]]= 1;
  
 if ( $typeCJ==6 && $partie["nbCartesJouees"]+$nbJPa>=$cartesParJ*$nbJPa && 
  ($joueurPartie['posTable']!=$partie['preneur'] && $joueurPartie['posTable']!=$partie['idEquipier']) && $isChelemDefenseOk ) {
  $prenneurPli = $joueurPartie["posTable"];
  $prenneurPliAvec = $joueurPartie["cartePosee"];
  
 } else if ( $typeCJ==6 && $partie["nbCartesJouees"]+$nbJPa>=$cartesParJ*$nbJPa && 
  ($joueurPartie['posTable']==$partie['preneur'] || $joueurPartie['posTable']==$partie['idEquipier']) && $isChelemAttaqueOk ) {

  $prenneurPli = $joueurPartie["posTable"];
  $prenneurPliAvec = $joueurPartie["cartePosee"];
  
 } else if ( $joueurPartie["cartePosee"]>$prenneurPliAvec && ($typeCJ==$partie["typeTour"] || $typeCJ==5) && $typeCJ!=6 )
 {
  $prenneurPli = $joueurPartie["posTable"];
  $prenneurPliAvec = $joueurPartie["cartePosee"];
 }

 } 
 if ($tourPetit) $preneurPetit = $prenneurPli;

 partie.posTable=0;
 partie.main=$prenneurPli;
 partie.typeTour = '';

 /*$partieEnCours->setDataVal( "nbCartesJouees", "++"); 
 $partieEnCours->setDataVal( "main", $prenneurPli);
 $partieEnCours->setDataVal( "typeTour", ''); */

 if (partie.joueurs[$prenneurPli]["levees"]=="6_Excuse.gif")
 {
 // si le joueur a un tour d'avant a recupere l excuse mais na vias pas de cartes a echanger, on rattrappe le coup
 $carteRemplacement = trouveCarteRemplacementExcuse($levees); 
 partie.joueurs[$prenneurPli].levees = $levees.join('|').replace($carteRemplacement,"6_Excuse.gif" );
 for (var $c in partie.joueurs)
 {
  if (partie.joueurs[$c].levees.indexOf('**')!=-1)
  {
  partie.joueurs[$c].levees = partie.joueurs[$c].levees.replace("**",$carteRemplacement);
  }
 }
 }
 else if (partie.joueurs[$prenneurPli]["levees"]=="")
 partie.joueurs[$prenneurPli].levees = $levees.join('|');
 else
 partie.joueurs[$prenneurPli].levees += '|'+$levees.join('|');
 
 for ( var $i in partie.joueurs)
 partie.joueurs[$i].cartePosee = ''; 
 
 var $finTxt = "";
 if ($prenneurPli==0) {
 if ($tourPetit && $partie["nbCartesJouees"]+1>=$cartesParJ*$nbJPa)
  $finTxt = "Vous remportez le petit au bout ! ";
 else
  $finTxt = "Vous remportez le pli"; 
 
 } else {
 if ($tourPetit && $partie["nbCartesJouees"]+1>=$cartesParJ*$nbJPa)
  $finTxt = partie.joueurs[$prenneurPli]["pseudo"]+" remporte le petit au bout ! ";
 else
  $finTxt = partie.joueurs[$prenneurPli]["pseudo"]+" remporte le pli"; 
 
 }
 
 showMessage($finTxt);       
 selMoteur.clearActions();

 
 setTimeout(function () {

 selMoteur.ramassePoignee($prenneurPli);
 setTimeout(function () {
 selMoteur.afficheCartes(JSON.stringify($leveesReel),$finTxt);
 },1000);
 
 if ( $partie["nbCartesJouees"]+1<$cartesParJ*$nbJPa)
 { 
 selMoteur.setTurn($prenneurPli); 
 if ($prenneurPli==0)
 setTimeout(gameStepJeu,400);
 else
 setTimeout(gameStepJeu,2000);
 }
 else
 { 
 

 setTimeout(function () {
 
 $prime = 0;
  
  var $isChelemAttaque = true;
  var $isChelemDefense = true;
  var $scoresP = [0,0,0,0,0,0,0];
  for (var $c in partie.joueurs)
  {
  var $joueurPartie = partie.joueurs[$c];
  var $levessAvecEcart = $joueurPartie["ecart"];
  $levessAvecEcart += ($levessAvecEcart!=""?"|":"")+$joueurPartie["levees"]; 
  
  var $leveesJoueur = $levessAvecEcart.split('|');

  var $scoJ = 0;
  for (var $uu in $leveesJoueur )
  {  
   var $pts = getPointsCarte($leveesJoueur[$uu]);
   $scoJ+=$pts;
  } 
  
  var $scoLevesOnly = 0;
  var $leveesJoueurOnly = $joueurPartie["levees"].split('|');//explode("|",$joueurPartie["levees"]);

  for (var $uu in $leveesJoueurOnly )
   $scoLevesOnly+=getPointsCarteChelem($leveesJoueurOnly[$uu]);
  
  if ($scoLevesOnly>0) {
   if ( $c!=$partie["preneur"] && $c!=$partie["idEquipier"]) {
  $isChelemAttaque = false;
   } else 
   $isChelemDefense = false;
  }
  $scoresP[$c] = $scoJ;            
  if ( $joueurPartie["poignee"]!=0 && $joueurPartie["poignee"]!=-1)
  {
   if ( $partie["maxJoueurs"]!=5)
   $prime += getPoigneePrime($joueurPartie["poignee"]);
   else
   $prime += getPoigneePrime5j($joueurPartie["poignee"]);
  }
  } 

  // CALCUL DU NOMBRE D OUDLERS
  var $nombreOudlers = 0; 

  var $scoreAttaque = $scoresP[$partie["preneur"]];
  
  var $leveesPreneurAvecEcart = partie.joueurs[$partie["preneur"]]["ecart"];
  $leveesPreneurAvecEcart += ($leveesPreneurAvecEcart!=""?"|":"")+partie.joueurs[$partie["preneur"]]["levees"];
  if ( $partie["maxJoueurs"]==5 && $partie["idEquipier"]!=-1) {
  $leveesPreneurAvecEcart += ($leveesPreneurAvecEcart!=""?"|":"")+partie.joueurs[$partie["idEquipier"]]["levees"];
  $scoreAttaque += $scoresP[$partie["idEquipier"]];
  }
  
  var $jeuPreneur = $leveesPreneurAvecEcart.split("|"); 
  for (var $ff in $jeuPreneur ) { 
  var $carte2 = $jeuPreneur[$ff];
  if ($carte2=="6_Excuse.gif" || $carte2=="5_Atout-21.gif" || $carte2=="5_Atout-01.gif") $nombreOudlers++;
  }
  
  var $mult = 1;
  var $objSco = 9999;
  switch ($nombreOudlers)
  {
  case 0:$objSco = 56;break;
  case 1:$objSco = 51;break;
  case 2:$objSco = 41;break;
  case 3:$objSco = 36;break; 
  }
  switch ($partie["annonce"])
  {
  case 1:$mult = 1;break;
  case 2:$mult = 2;break;
  case 3:$mult = 4;break;
  case 4:$mult = 6;break;
  }
      
  $detailCalculSco = "";
  

  if ($partie["annonce"]>2) {
  selMoteur.afficheCartes(JSON.stringify($partie["chien"]),"Cartes qui étaient dans le chien");
  }
  
  var $texteFinPartie = 'Partie contre l\'ordinateur terminée,'; 
  
  $texteFinPartie += "<br>";
    
  var $marquePts = $mult*(25+Math.abs($scoreAttaque-$objSco));
  
  if ($partie["preneur"]==0) {

  if ($partie["maxJoueurs"]==5 ) {
   if ( $partie["idEquipier"]!=-1) 
   $texteFinPartie += "Vous réalisez "+$scoreAttaque+"pts avec "+partie.joueurs[$partie["idEquipier"]]["pseudo"]+"<br>";
   else 
   $texteFinPartie += "Vous réalisez "+$scoreAttaque+"pts<br>";
   
  } else
   $texteFinPartie += "Vous réalisez "+$scoreAttaque+"pts<br>";
  } else {

  if ($partie["maxJoueurs"]==5 ) {
   if ( $partie["idEquipier"]!=-1) 
   $texteFinPartie += partie.joueurs[$partie["preneur"]]["pseudo"]+" réalise "+$scoreAttaque+"pts avec "+partie.joueurs[$partie["idEquipier"]]["pseudo"]+"<br>";
   else 
   $texteFinPartie += partie.joueurs[$partie["preneur"]]["pseudo"]+" réalise "+$scoreAttaque+"pts<br>";
   
  } else
   $texteFinPartie += partie.joueurs[$partie["preneur"]]["pseudo"]+" réalise "+$scoreAttaque+"pts<br>";
  }
                        
  if ( $objSco==$scoreAttaque)
  {
  //$deltaPts = $marquePts;
  $texteFinPartie += "<font style=\"font-weight:bold;\">";
  $texteFinPartie += ($partie["preneur"]==0?"Votre":"Son")+" contrat de "+$objSco+"pts est juste fait ";     
  $texteFinPartie += " avec "+$nombreOudlers+" oudler"+($nombreOudlers>1?"s":"")+" dans ses plis</font><br>"; 
  //$texteFinEntrainement = $texteFinPartie;          
  }
  else if ( $objSco<$scoreAttaque)
  {
  //$deltaPts = $marquePts;
  $texteFinPartie += "<font style=\"font-weight:bold;\">";
  $texteFinPartie += ($partie["preneur"]==0?"Réussite de votre contrat de ":"Et réussit son contrat de ")+$objSco+"pts ";     
  $texteFinPartie += " avec "+$nombreOudlers+" oudler"+($nombreOudlers>1?"s":"")+" dans les plis</font><br>"; 
  //$texteFinEntrainement = $texteFinPartie; 
  $texteFinPartie += "<font style=\"size:16px;\">";          
  $texteFinPartie += "(25pts + "+($scoreAttaque-$objSco)+"pts de gain) x "+$mult+"("+$phrasesAnnonces[$partie["annonce"]]+")<br>";          
  }
  else
  {
  //$deltaPts = -$marquePts;
  $texteFinPartie += "<font style=\"font-weight:bold;\">";
  $texteFinPartie += ($partie["preneur"]==0?"Chute de votre contrat de ":"Et chute son contrat de ")+$objSco+"pts "; 
  $texteFinPartie += " avec "+$nombreOudlers+" oudler"+($nombreOudlers>1?"s":"")+" dans les plis</font><br>"; 
  //$texteFinEntrainement = $texteFinPartie; 
  $texteFinPartie += "<font style=\"size:16px;\">";            
  $texteFinPartie += "(25pts + "+($objSco-$scoreAttaque)+"pts de perte) x "+$mult+"("+$phrasesAnnonces[$partie["annonce"]]+")<br>";         
  } 
  
  if ($prime)
  {
  $marquePts += $prime;
  if ( $objSco<=$scoreAttaque) 
   $texteFinPartie += "Prime pour la poignée annoncée : "+($prime)+"pts<br>";
  else
   $texteFinPartie += "Perte pour la poignée annoncée : "+($prime)+"pts<br>";
  } 
    
  if ($tourPetit )
  {  
  if ( $preneurPetit==$partie["preneur"] || $preneurPetit==$partie["idEquipier"])     
  {   
   $texteFinPartie += "Prime pour le petit au bout : "+($mult*10)+"pts"; 
   $texteFinPartie += "<br>";  
  } 
  else     
  {             
   $texteFinPartie += "La défense réalise le petit au bout : prime de "+($mult*10)+"pts";
   $texteFinPartie += "<br>";  
  }
  }
  if ($partie['chelem'] && $isChelemAttaque) {         
   $texteFinPartie += "Chelem annoncé et réalisé : prime de 400pts";
   $texteFinPartie += "<br>"; 
  if ( $objSco<=$scoreAttaque) 
   $marquePts += 400;
  else
   $marquePts -= 400;
  }
  else if ($partie['chelem'] && !$isChelemAttaque) {         
  $texteFinPartie += "Chelem annoncé mais non réalisé : perte de 200pts";
  $texteFinPartie += "<br>"; 
  if ( $objSco<=$scoreAttaque) 
   $marquePts -= 200;
  else
   $marquePts += 200;
  } else if (!$partie['chelem'] && $isChelemAttaque) {         
  $texteFinPartie += "Chelem non annoncé mais réalisé : prime de 200pts";
  $texteFinPartie += "<br>"; 
  if ( $objSco<=$scoreAttaque) 
   $marquePts += 200;
  else
   $marquePts -= 200;
  }
  if ($isChelemDefense) {        
  $texteFinPartie += "Chelem de la défense : prime de 200pts";
  $texteFinPartie += "<br>"; 
  $marquePts += 200;
  }
  if ( $objSco<=$scoreAttaque) 
  {  
  if ($tourPetit )
  {  
   if ( $preneurPetit==$partie["preneur"] || $preneurPetit==$partie["idEquipier"])     
   {
   $marquePts += $mult*10; 
   } 
   else    
   {
   $marquePts -= $mult*10; 
   }
  }
  $deltaPts = $marquePts;   
  }
  else      
  {
  if ($tourPetit )
  {
   if ( $preneurPetit==$partie["preneur"] || $preneurPetit==$partie["idEquipier"])     
   { 
   $marquePts -= $mult*10; 
   } 
   else     
   { 
   $marquePts += $mult*10; 
   }
  }
  $deltaPts = -$marquePts;  
  } 

  $texteFinPartie += "</font>";
          
  if ( $partie["maxJoueurs"]==5 && $partie["idEquipier"]!=-1) {
  
  if ( $objSco<=$scoreAttaque) {
  $texteFinPartie += partie.joueurs[$partie["preneur"]]["pseudo"]+" marque "+(2*$marquePts)+"pts, ";
  $texteFinPartie += partie.joueurs[$partie["idEquipier"]]["pseudo"]+" marque "+(1*$marquePts)+"pts";
  $texteFinPartie += ", leurs adversaires perdent "+$marquePts+"pts.<br>";
  } else {
  $texteFinPartie += partie.joueurs[$partie["preneur"]]["pseudo"]+" perd "+(2*$marquePts)+"pts, ";
  $texteFinPartie += partie.joueurs[$partie["idEquipier"]]["pseudo"]+" perd "+(1*$marquePts)+"pts";
  $texteFinPartie += ", leurs adversaires gagnent "+$marquePts+"pts.<br>";
  }
  for (var $i=0;$i<$nbJPa;$i++)
  {
  if ($i==$partie["idEquipier"])
  partie.joueurs[$i].score += $deltaPts;//$partieEnCours->joueurs[$i]->setDataVal( "score", $joueursPartie[$i]["score"]+(1*$deltaPts) );
  else if ($i==$partie["preneur"])
  partie.joueurs[$i].score += 2*$deltaPts;//$partieEnCours->joueurs[$i]->setDataVal( "score", $joueursPartie[$i]["score"]+(2*$deltaPts) );
  else
  partie.joueurs[$i].score -= $deltaPts;//$partieEnCours->joueurs[$i]->setDataVal( "score", $joueursPartie[$i]["score"]-$deltaPts );
  }
  } else {
 var $theMult = $nbJPa -1;
 if ($partie["preneur"]==0) {

   if ( $objSco<=$scoreAttaque)
   $texteFinPartie += "Vous marquez "+($theMult*$marquePts)+"pts, vos adversaires perdent "+$marquePts+"pts.";
   else
   $texteFinPartie += "Vous perdez "+($theMult*$marquePts)+"pts, vos adversaires gagnent "+$marquePts+"pts.";
 } else {

   if ( $objSco<=$scoreAttaque)
   $texteFinPartie += ""+partie.joueurs[$partie["preneur"]]["pseudo"]+" marque "+($theMult*$marquePts)+"pts, ses adversaires perdent "+$marquePts+"pts.";
   else
   $texteFinPartie += ""+partie.joueurs[$partie["preneur"]]["pseudo"]+" perd "+($theMult*$marquePts)+"pts, ses adversaires gagnent "+$marquePts+"pts.";
 }
  
  for (var $i=0;$i<$nbJPa;$i++)
  {
  if ($i==$partie["preneur"]) {
  partie.joueurs[$i].score += $theMult*$deltaPts;//$partieEnCours->joueurs[$i]->setDataVal( "score", $joueursPartie[$i]["score"]+($theMult*$deltaPts) );
  } else {
  partie.joueurs[$i].score -= $deltaPts;//$partieEnCours->joueurs[$i]->setDataVal( "score", $joueursPartie[$i]["score"]-$deltaPts );
  }
  }
  }       
  for (var $i=0;$i<$nbJPa;$i++)
  { 
  //partie.joueurs[$i].levees= "";
  //partie.joueurs[$i].nbCartesAff=0;
  //partie.joueur[$i].etape= "Distribution" ;
  partie.joueurs[$i].cartePosee = "" ;    
  } 
  selMoteur.clearTurn();


  for (var $i=0;$i<$nbJPa;$i++)
  {
  if (partie.joueurs[$i].score>0)
  setVictory($i);
  else
  setDefeat($i);
  selMoteur.setScore($i,''+partie.joueurs[$i].score+'pts');

  }

 if (partie.preneur==0)
  selMoteur.afficheCartes(JSON.stringify($leveesPreneurAvecEcart.split("|")),"Vos levées");
 else
  selMoteur.afficheCartes(JSON.stringify($leveesPreneurAvecEcart.split("|")),"Levées de "+partie.joueurs[partie.preneur].pseudo);
  

 selMoteur.showMessagePlateauJeu($texteFinPartie);
  GEN();
  selMoteur.addAction('Fin de partie','closeRecap();','btn-info');
 

 },2000);
 
 
 
 
 
 
 
 
 
 
 
 
 }
 },1500);
 }
}



/**/
var $nbreCartesMinPoignee = 10;
function gameStepJeu() {

 tourDe = (partie.main+partie.posTable)%$nbJPa;
 selMoteur.setTurn(tourDe);
 
 var $nombreAtouts = 0;
 var $disposeAtout = false;
 var $disposeCouleur = false;
 var $disposeMeilleurAtout = false;
 var $etapeDeclarationPoignee = false;
 var $meilleurAtoutPose = 0; 
 
 for (var $i in partie.joueurs) {//=partie.main;$i<partie.main+partie.posTable;$i++) {
 if (partie.joueurs[$i].cartePosee[0]=="5")
 {
  var $tcarAtout = getCardNumero(partie.joueurs[$i].cartePosee);
  if ( $tcarAtout>$meilleurAtoutPose )
  $meilleurAtoutPose = $tcarAtout;
 } 
 } 
 for (var $i in partie.joueurs[tourDe].main)//$jeuJoueur as $i => $carte)
 {
 var $carte = partie.joueurs[tourDe].main[$i];
 if ($carte[0]=="5") { $disposeAtout = true; $nombreAtouts++; }
 if ($carte[0]=="6") { $nombreAtouts++; }
 if ($carte[0]=="5" && getCardNumero($carte)>$meilleurAtoutPose ) $disposeMeilleurAtout = true;
 if ($carte[0]==partie.typeTour) $disposeCouleur = true;
 } 

 //console.log('fin'+$nombreAtouts+$disposeMeilleurAtout);

 if (!partie.joueurs[tourDe].isIA && partie.joueurs[tourDe].poignee==0 && $nombreAtouts>=$nbreCartesMinPoignee && partie["nbCartesJouees"]<$nbJPa ) {

 showMessage('Vous avez la possibilité d\'annoncer une poignée');

 var $nbCartes = 0;

 for (var $i in partie.joueurs[tourDe].main)//$jeuJoueur as $i => $carte)
 {
 var $carte = partie.joueurs[tourDe].main[$i];
  if ($carte[0]=="5" || $carte[0]=="6" ) 
  selMoteur.setCardAction($carte,'cartePoigneeSelectOffline(this);');
  else
  selMoteur.setCardAction($carte,''); 
  
 }
 activateCardActions(true);
 var selDefPoignee = $nbreCartesMinPoignee;

 if ($nombreAtouts>=13)
 selDefPoignee = 13;
 if ($nombreAtouts>=15)
 selDefPoignee = 15;
 
 for (var $i in partie.joueurs[tourDe].main)//$jeuJoueur as $i => $carte)
 {
 var $carte = partie.joueurs[tourDe].main[$i];
  if ($carte[0]=="5" || $carte[0]=="6" ) {
  if ($nbCartes<selDefPoignee ) { 
   $nbCartes++;
   cartePoigneeSelectOffline($$('MonJeu'+$carte));
  } 
  }
 }
 refreeshCartesPoigneeOffline();
 return;
 }
 
 if ( partie.joueurs[tourDe].isIA) {

 var $joueCarte;
 for (var $i in partie.joueurs[tourDe].main)
 {
 var $carte = partie.joueurs[tourDe].main[$i];
 if (canIPlayCard($carte,$disposeCouleur,$disposeMeilleurAtout,$disposeAtout,$meilleurAtoutPose)) {
 $joueCarte = $carte;
 }
 }
 
 
 
 
 
 var $prenneurPli = 0;
 var $prenneurPliAvec = "";
 var $levessAvecEcart = "";
 var $attaqueADejaJoue = false;
 var $attaqueAFiniDeJouer = true;
 var $pointsEnJeu = 0;
 var $isPetitEnJeu = false;
 var $listeCartesTombees;
 var $nbMeilleuresCartes = [0,0,0,0,0,0,0];
 var $nbCouleurEnMain;
 var $cartesTombees = [0,0,0,0,0,0,0,0];

 var $nbcartesTombees = [0,0,0,0,0,0,0,0];
 var $roisTombes = [0,0,0,0,0,0,0,0];
 var $listeCartesTombees = [ [],[],[],[],[],[],[] ];
  
 for (var $i=0;$i<$nbJPa;$i++) { 
 var $typeCJ = partie.joueurs[$i].cartePosee[0];
  if ($typeCJ!="6")
  $pointsEnJeu += getPointsCarte(partie.joueurs[$i].cartePosee); 
 if ($typeCJ==5 && getCardNumero(partie.joueurs[$i].cartePosee)==1)
 $isPetitEnJeu = true;
 if ( partie.joueurs[$i].posTable==partie.preneur) {
  if (partie.joueurs[$i].cartePosee!="")
  $attaqueADejaJoue = true;
  else 
  $attaqueAFiniDeJouer = false; 
 }
 if ( partie.joueurs[$i].cartePosee>$prenneurPliAvec && ($typeCJ==partie.typeTour || $typeCJ==5) && $typeCJ!=6 )
 {
  $prenneurPli = partie.joueurs[$i].posTable;
  $prenneurPliAvec = partie.joueurs[$i].cartePosee;
 }
 $levessAvecEcart = partie.joueurs[$i].levees;
 if ( partie.joueurs[$i].posTable==partie.preneur )
  $levessAvecEcart += ($levessAvecEcart!=""?"|":"")+partie.joueurs[$i].ecart;
 var $cartesDuSonChien = $levessAvecEcart.split('|');//explode("|",$levessAvecEcart); 
      
 for( var $ii in $cartesDuSonChien)
 {
  var $c = $cartesDuSonChien[$ii];
  if ($c!='' && $c!='**') {
  $nbcartesTombees[$c[0]]++;
  $cartesTombees[$c[0]] = $cartesTombees[$c[0]]+1; 
  $listeCartesTombees[$c[0]][getCardNumero($c)] = 1; 
  if (getCardNumero($c)==14) $roisTombes[$c[0]] = 1; 
  } 
 }

 var $nbCoupes = {};
 var $lesCoupes = {};
 
 $nbCoupes["attaque"] = [];
 $nbCoupes["defense"] = [];
 
 $lesCoupes["attaque"] = [];
 $lesCoupes["defense"] = [];
 
 for (var $c=1;$c<5;$c++)
 {
  if (partie.joueurs[$i]["coupe"+$c] ==1 ) 
  {
  if (partie.joueurs[$i]["posTable"]==partie.preneur || partie.joueurs[$i]["posTable"]==partie.idEquipier) {
   $nbCoupes["attaque"][$c]++; 
   $lesCoupes["attaque"][$c] = 1; 
  } else {
   $nbCoupes["defense"][$c]++; 
   $lesCoupes["defense"][$c] = 1; 
  } 
  }
 }               
 }
 var $partie = partie;
 var $jaiLePetit = false;
 var $jeSeraiLAttaque = false;
 var $nbCouleurEnMain = [0,0,0,0,0,0];
 
 for (var $i in partie.joueurs[tourDe].main )
 { 
 var $carte = partie.joueurs[tourDe].main[$i];
 if (getCardNumero($carte)==1 && $carte[0]==5)
 $jaiLePetit = true;
 $nbCouleurEnMain[$carte[0]]++; 
 }
 for (var $n=21;$n>0 && $listeCartesTombees[5][$n]==1;$n--)
 {
 $nbMeilleuresCartes[5]++;
 }
 var $lePetitEstDejaTombe = $listeCartesTombees[5][1]>0;
 //echo "alert('je dispose des ".$nbMeilleuresCartes[4]." meilleures cartes');";
 var $meilleurAtoutPreneur = true;
 if ($prenneurPliAvec[0]!="5")
 $meilleurAtoutPreneur = false;
 if (getCardNumero($prenneurPliAvec)!=(21-$nbMeilleuresCartes[5]))
 $meilleurAtoutPreneur = false;
 
 $preneurPliAttaque = ($prenneurPli==partie.preneur || $prenneurPli==partie.idEquipier);
 $jeSuisLAttaque = (partie.joueurs[tourDe]["posTable"]==partie.preneur || partie.joueurs[tourDe]["posTable"]==partie.idEquipier || $jeSeraiLAttaque);
 $preneurPliDansMonCamp = $jeSuisLAttaque==$preneurPliAttaque;
 var $joueurIADepuisDebut = (partie.joueurs[tourDe]["idUtil"]==-1);


 var $defenseChassePetit = false;
 var $lastOuverturePreneur = '';
 var $carteJouee = '';
 
 if (!$lePetitEstDejaTombe && !$jaiLePetit) {
 for ($i=0;$i<$nbJPa;$i++) {
  if (partie.joueurs[tourDe]["lastouverture"][0]=="5" &&
  partie.joueurs[tourDe]["posTable"]!=partie["preneur"] &&
  partie.joueurs[tourDe]["posTable"]!=partie["idEquipier"] && (getCardNumero(partie.joueurs[tourDe]["lastouverture"])!=21 || $cartesTombees[5]>5) )
  $defenseChassePetit = true;
  if (partie.joueurs[tourDe]["posTable"]==partie["preneur"] )
  $lastOuverturePreneur = partie.joueurs[tourDe]["lastouverture"][0];
 }
 }
 //if ($defenseChassePetit) echo "console.log('la defense chasse');";
 
 $scoreCarteJouee = -99999999;
 for (var $i in partie.joueurs[tourDe].main)
 { 
 var $carte = partie.joueurs[tourDe].main[$i];
 if ( canIPlayCard($carte,$disposeCouleur,$disposeMeilleurAtout,$disposeAtout,$meilleurAtoutPose) ) { 
  
  $scoreCarteActuelle = 1;
  $numCarte = getCardNumero($carte);
  
  $typeCJ = $carte[0]; 
  if ( $carte>$prenneurPliAvec && ($typeCJ==$partie["typeTour"] || $typeCJ==5) && $typeCJ!=6 )
   $cartePreneuse = true;
  else
   $cartePreneuse = false;
   
  if ($jeSuisLAttaque)
  {
   if ( $cartesTombees[$typeCJ]<5 && $numCarte=="14" && $typeCJ<5 && $prenneurPliAvec[0]!="5" && 
   $nbCouleurEnMain[$typeCJ]<6+1.1*$partie["posTable"] && $nbCoupes["defense"][$typeCJ]==0 ) // jouer un roi
   $scoreCarteActuelle=5998; 
   else if ( $cartesTombees[$typeCJ]<=6 && $nbCoupes["defense"][$typeCJ]==0 && 
   $roisTombes[$typeCJ]==1 && $numCarte=="13" && $typeCJ<5 && $prenneurPliAvec[0]!="5" && 
   $nbCouleurEnMain[$typeCJ]<5 ) // && $joueurIADepuisDebut jouer un roi si premier tour de la couleur
   $scoreCarteActuelle=5998; 
   else if ($typeCJ=="5" && $numCarte==1 ) // le petit
   {
   if ($partie["posTable"]>0 && 
   $partie["typeTour"]>0 && 
   $partie["typeTour"]<5 && 
   $cartesTombees[$partie["typeTour"]]<5 && 
   $cartePreneuse)
   { // si je coupe sec une couleur
    $scoreCarteActuelle =9998; //laPlusGrande
   } else if ( $partie["posTable"]>=$nbJPa-1 && ($cartePreneuse || $preneurPliDansMonCamp) )
   { // sauve le petit si dernier a jouer et mon camp maitre
    $scoreCarteActuelle =9998; //laPlusGrande
   }
   else if ( ($prenneurPliAvec=="5_Atout-"+(21-$nbMeilleuresCartes[5])+".gif") && $preneurPliDansMonCamp)
   { // sauve le petit si mon camp maitre avec carte maitresse
    $scoreCarteActuelle = 9998; 
   } else { // sauve le petit si mon camp maitre avec carte maitresse
    $scoreCarteActuelle = -7000; 
   }
   }
   else if ($typeCJ=="6" ) // L'excuse
   {
   if (partie.joueurs[tourDe].main.length<3 )// en jamais jouer son excuse au dernier tour 
    $scoreCarteActuelle=99999;
    else if ( ($jaiLePetit || $lePetitEstDejaTombe || $partie["posTable"]==3 ) && $cartesTombees[$partie["typeTour"]]>2 && ( !$disposeCouleur || $partie["typeTour"]==5 ) && $partie["posTable"]!=0 && $pointsEnJeu/$partie["posTable"]<0.7 ) // || (getPointsCarte($carte)>1 
    $scoreCarteActuelle=9990; // conserver ses atouts si peu de points en jeu
   else 
    $scoreCarteActuelle=-9991; 
   }
   else if ($partie["posTable"]==0)
   {
   $atoutsRestantDansMainsAutresJ = 20-$cartesTombees[5]-$nbCouleurEnMain[5];
   // chasse au petit
   if ( ($nbMeilleuresCartes[5]>4 && $nbCouleurEnMain[5]>8) || 
    ((partie.joueurs[tourDe].main.length-$nbCouleurEnMain[5])<2) || // que de l atout sauf une carte
    (Math.floor($atoutsRestantDansMainsAutresJ/3)<=$nbMeilleuresCartes[5] && !$jaiLePetit && !$lePetitEstDejaTombe ) ) 
   {
    //if (!isset($IAlogOnce)) logIAaction ("Mode engagement d attaque aggressif");
    if ($typeCJ==5) $scoreCarteActuelle +=5000; // atout de preference
    if ($typeCJ==5 && $numCarte==1) $scoreCarteActuelle -=9000; // pas le petit
    if ($typeCJ<5) $scoreCarteActuelle+=100*$nbCoupes["defense"][$typeCJ]; // essayer de faire couper la defense
    if ($typeCJ<5 && $disposeAtout) $scoreCarteActuelle+=parseInt($nbCouleurEnMain[$typeCJ])*50; // essayer de couper
    $scoreCarteActuelle+=$numCarte; // laPlusGrandeDesMoinsDePoints
   }
   else
   {
    //if (!isset($IAlogOnce)) logIAaction ("Mode engagement d attaque normal");
    
    if ($typeCJ==5) {
    if (2*$nbCouleurEnMain[5]>partie.joueurs[tourDe].main.length+2)
    $scoreCarteActuelle +=400;
    else
    $scoreCarteActuelle -=6000;
    } else {/*
    !$jaiLePetit && // pas si j ai le petit
    !$lePetitEstDejaTombe && // si le petit est tombe j evite
    */
    $scoreCarteActuelle+=100*$nbCoupes["defense"][$typeCJ]; // essayer de faire couper la defense
    if ( $cartesTombees[$typeCJ]==0 || $cartesTombees[$typeCJ]>10) { // essayer de ne pas decouvrir une couleur
     if (!$jaiLePetit && // si j ai pas le petit
    !$lePetitEstDejaTombe ) // si le petit est tombe j evite)
     $scoreCarteActuelle-=7000;
    else
     $scoreCarteActuelle-=80; // essayer de ne pas decouvrir une couleur
    }
    if ( $disposeAtout) $scoreCarteActuelle-=$nbCouleurEnMain[$typeCJ]*80; // essayer de couper
    }
    $scoreCarteActuelle+=6000-getPointsCarteIA($carte)*1000-$numCarte; // laPlusPetiteDesMoinsDePoints
   }
   } 
   else if ($typeCJ=="5" ) // atout en attaque
   {
   if ( $cartePreneuse && $partie["posTable"]<3 && ((21-$nbMeilleuresCartes[5])<=$numCarte) && 
   ($isPetitEnJeu || ($pointsEnJeu/($partie["posTable"]+1)>2.5 ) ) )
   {
    //if (!isset($IAlogOnce)) logIAaction ("Mode atout aggressif");
    $scoreCarteActuelle+=1000+$numCarte; //laPlusGrande
   }
   else
   {
    //if (!isset($IAlogOnce)) logIAaction ("Mode atout normal");
    $scoreCarteActuelle+=1000-getPointsCarteIA($carte)*100-$numCarte; //laPlusPetiteDesMoinsDePoints 
   }
   }
   else if ( $cartePreneuse && $partie["posTable"]>=$nbJPa-1)
   { 
   //if (!isset($IAlogOnce)) logIAaction ("Mode victoire pour sur");
   $scoreCarteActuelle+=1000+200+getPointsCarteIA($carte)*100-$numCarte; //laPlusPetiteDesPlusDePoints 
   }
   else if ( $preneurPliDansMonCamp && ( $meilleurAtoutPreneur || $partie["posTable"]>=$nbJPa-1 || ($cartesTombees[$typeCJ]<10 && $prenneurPliAvec[0]=="5" && $typeCJ<5) ) )
   { //$prenneurPliAvec
   //if (!isset($IAlogOnce)) logIAaction ("Mode victoire pour sur");
   $scoreCarteActuelle+=1000+200+getPointsCarteIA($carte)*100-$numCarte; //laPlusPetiteDesPlusDePoints 
   }
   else 
   {
   //if (!isset($IAlogOnce)) logIAaction ("Mode prudence");
   $scoreCarteActuelle+=600-getPointsCarteIA($carte)*100-$numCarte; // laPlusPetiteDesMoinsDePoints
   }
  }
  else // je suis en defense
  {
   $unDefenseurCoupe = false;
   $lAttaqueCoupe = false;  
   if ( $typeCJ<5)
   {
   if ($lesCoupes["attaque"][$typeCJ]==1)
    $lAttaqueCoupe = true;
   if ($lesCoupes["defense"][$typeCJ]==1)
    $unDefenseurCoupe = true; 
   }
   
   //le jeu du roi
   if ( $cartesTombees[$typeCJ]<4 && $numCarte=="14" && $typeCJ<5 && $prenneurPliAvec[0]!="5" && $nbCouleurEnMain[$typeCJ]<3 && $nbCoupes["attaque"][$typeCJ]==0 ) // && $joueurIADepuisDebut jouer un roi si premier tour de la couleur
   $scoreCarteActuelle=4998; 
   //le jeu de la dame
   else if ( $cartesTombees[$typeCJ]<=6 && $nbCoupes["attaque"][$typeCJ]==0 && $roisTombes[$typeCJ]==1 && $numCarte=="13" && $typeCJ<5 && $prenneurPliAvec[0]!="5" && $nbCouleurEnMain[$typeCJ]<3 ) // && $joueurIADepuisDebut jouer un roi si premier tour de la couleur
   $scoreCarteActuelle=2998;
   else if ($typeCJ=="5" && $numCarte==1 ) // petit en defense
   {
   if ( $attaqueAFiniDeJouer && ($cartePreneuse || $preneurPliDansMonCamp) )// || ($unDefenseurCoupe && !$lAttaqueCoupe)
   { // sauve le petit si dernier a jouer et mon camp maitre
    $scoreCarteActuelle =10998; //laPlusGrande
   }
   else if ( ($prenneurPliAvec=="5_Atout-"+(21-$nbMeilleuresCartes[5])+".gif") && $preneurPliDansMonCamp)
   { // sauve le petit si mon camp maitre avec carte maitresse
    $scoreCarteActuelle = 9998; 
   } else { // sauve le petit si mon camp maitre avec carte maitresse
    $scoreCarteActuelle = -7000; 
   }
   }
   else if ($typeCJ=="6" )
   {
   if (partie.joueurs[tourDe].main.length<3 )// en jamais jouer son excuse au dernier tour 
    $scoreCarteActuelle=9999;
    else if ( (!$disposeCouleur || $partie["typeTour"]==5 ) && $partie["posTable"]!=0 && $pointsEnJeu/$partie["posTable"]<0.7 ) // || (getPointsCarte($carte)>1 
    $scoreCarteActuelle=9999; 
   else 
    $scoreCarteActuelle=1; 
   }
   else if ($partie["posTable"]==0) // c est moi qui entame
   { 
   if ($lastOuverturePreneur == $typeCJ)
    $scoreCarteActuelle -=2000;

   for ($i=0;$i<$nbJPa;$i++) {
    if ( partie.joueurs[$i]["posTable"]!=$partie["preneur"] &&
    partie.joueurs[$i]["posTable"]!=$partie["idEquipier"] && 
    partie.joueurs[$i]["lastouverture"][0]==$typeCJ)
    $scoreCarteActuelle +=1500;
   }
    
    
   if ($typeCJ==5) { // entamer a l atout
    $chasserLePetit = false;
    if (!$jaiLePetit && // pas si j ai le petit
    !$lePetitEstDejaTombe && // si le petit est tombe j evite
    ($numCarte==21-$nbMeilleuresCartes[5]) && // j ai le meilleur atout possible
    ($cartesTombees[5]<4 || $cartesTombees[5]+$nbCouleurEnMain[5]>12) &&
    $partie["posTable"]<3 )
    $chasserLePetit = true;
    else {
    if ($defenseChassePetit)
    $chasserLePetit = true;
    }
    if ($chasserLePetit) {
    if ($numCarte==21-$nbMeilleuresCartes[5])
    $scoreCarteActuelle +=8000;
    else {
    if ($attaqueAFiniDeJouer)
    $scoreCarteActuelle +=6000-$numCarte;
    else
    $scoreCarteActuelle +=6000+$numCarte;
    }
    } else {
    $scoreCarteActuelle -=7000;
    }
   }
   if ( $typeCJ<5 ) {

    if ($lePetitEstDejaTombe && (partie.joueurs[tourDe]["posTable"]+1)%$nbJPa!=$partie["preneur"] ) {
    $scoreCarteActuelle+=100*$nbCoupes["attaque"][$typeCJ]; // essayer de faire couper l attaque
    } else {
    $scoreCarteActuelle-=100*$nbCoupes["attaque"][$typeCJ]; // essayer de ne pas faire couper l attaque
    }
    $scoreCarteActuelle-=100*$nbCoupes["defense"][$typeCJ]; // essayer de pas faire couper la defense
    
    
    if ($cartesTombees[$typeCJ]==0) { // decouvrir une couleur
    if ( ($jaiLePetit || $lePetitEstDejaTombe ) && ((partie.joueurs[tourDe]["posTable"]+1)%$nbJPa==$partie["preneur"] || $cartesTombees[5]==0 || (partie.joueurs[tourDe]["posTable"]+2)%$nbJPa==$partie["preneur"] ))
    $scoreCarteActuelle+=1600; // essayer de decouvrir une couleur si on est jsute avant le preneur
    else
    $scoreCarteActuelle-=800; // essayer de ne pas decouvrir une couleur
    }
    if ($jaiLePetit)
    $scoreCarteActuelle+=3000-$nbCouleurEnMain[$typeCJ]*150; // essayer de se faire couper
    else
    $scoreCarteActuelle+=$nbCouleurEnMain[$typeCJ]*15; // essayer de faire couper
    
    if (getPointsCarteIA($carte)>0.5) {
    $scoreCarteActuelle-=300;
    if ($nbCoupes["attaque"][$typeCJ]>0)
    $scoreCarteActuelle-=1000*getPointsCarteIA($carte);
    }
    
   }
   $scoreCarteActuelle+=6000-getPointsCarteIA($carte)*1000-$numCarte; // laPlusPetiteDesMoinsDePoints 
   } 
   else if ( ($cartePreneuse || $preneurPliDansMonCamp || ($unDefenseurCoupe && !$lAttaqueCoupe) ) && ($attaqueAFiniDeJouer || ($meilleurAtoutPreneur && $preneurPliDansMonCamp) ) )     
   { 
   //if (!isset($IAlogOnce)) logIAaction ("Mode victoire pour sur de la defense");
   $scoreCarteActuelle+=1000+200+getPointsCarteIA($carte)*100-$numCarte; //laPlusPetiteDesPlusDePoints 
   }
   else 
   {
   //if (!isset($IAlogOnce)) logIAaction ("Mode prudence de defense");
   $scoreCarteActuelle+=600-getPointsCarteIA($carte)*100-$numCarte; // laPlusPetiteDesMoinsDePoints
   }
  }
  if ( ( $carteJouee=='' || $scoreCarteJouee < $scoreCarteActuelle ) && $carte )
  {
   $scoreCarteJouee=$scoreCarteActuelle;
   $carteJouee = $carte;
  }
 }
 } 
 //logIAaction ("Decision : ".$carteJouee);          
 $joueCarte = $carteJouee; 
 
 
 
 
 
 
 
 
 
 
 
 
 
 joueCarte($joueCarte);

 } else {
 clearCardsActionsClick ();
 showMessage('C\'est à vous de jouer !');
 console.log('set cards actions');
 for (var $i in partie.joueurs[tourDe].main)
 {
 var $carte = partie.joueurs[tourDe].main[$i];
 if (canIPlayCard($carte,$disposeCouleur,$disposeMeilleurAtout,$disposeAtout,$meilleurAtoutPose)) {
 selMoteur.setCardAction($carte,'joueCarteJou(\''+$carte+'\');');
 } else {

 selMoteur.setCardAction($carte,'');
 }
 }
 activateCardActions(true);
 }
}
/*
var cardWidth = 120;
var cardHeight = 220;*/
var cardWidth = 80;
var cardHeight = 147;

var isIE = navigator.appName.indexOf("Microsoft") != -1;


var wsocket;
var connectedToSocket = false;
var startConnexion = false;

var distriHashAreShown = false;

function showDistributionHash(str) {
 if (!distriHashAreShown) return;
 //$('#BTNQUT').attr('title','Code de hachage de distribution : '+str);
 selMoteur.addChatLine('Info distribution#Code de hachage '+str+'#');
}
var messageIntroMasked = false;
function showMessageIntro(txt)
{
 if (messageIntroMasked) return;
 selMoteur.showMessagePlateauJeu(txt);
 selMoteur.introAction();
}
function hideMessageIntro()
{
 if (messageIntroMasked) return;
 selMoteur.clearActions(); 
 selMoteur.clearMessagePlateauJeu();
 messageIntroMasked = true;
}
function setChelem() {
 isChelem = true;
 selMoteur.removeAction('Chelem');
 $('#infosJeu').find('a').last().remove();
 rpc('chelem='+isChelem);
}
var gameAddFriendsButtonsUsed = false;
function removeThisFriendsBtns(ids) {
 gameAddFriendsButtonsUsed = true;
 selMoteur.removeAction("Ajouter ces joueurs à mes amis");
}
function addThisFriendsBtns(actions) {
 if (gameAddFriendsButtonsUsed) return;
 //var listFriendsIds = ids.split('-');
 selMoteur.addAction('Ajouter ces joueurs à mes amis','removeThisFriendsBtns();'+actions );
}

function setEndGameQuitAction(theQuitAction) {
 $('#BTNQUT').attr('onclick',theQuitAction);
 GEN();
}
function batMode() {
 var r=function () { return Math.random()*0.6+0.2;},n=0,d=document,w=window,
 i=d.createElement('img'),
 z=d.createElement('div'),
 zs=z.style,
 a=w.innerWidth*r(),b=w.innerHeight*r();
 zs.position="fixed";
 zs.left=0;
 zs.top=0;
 zs.opacity=0;
 z.appendChild(i);
 z.id = 'batMobile';
 i.src='data:image/gif;base64,R0lGODlhMAAwAJECAAAAAEJCQv///////yH/C05FVFNDQVBFMi4wAwEAAAAh+QQJAQACACwAAAAAMAAwAAACdpSPqcvtD6NcYNpbr4Z5ewV0UvhRohOe5UE+6cq0carCgpzQuM3ut16zvRBAH+/XKQ6PvaQyCFs+mbnWlEq0FrGi15XZJSmxP8OTRj4DyWY1lKdmV8fyLL3eXOPn6D3f6BcoOEhYaHiImKi4yNjo+AgZKTl5WAAAIfkECQEAAgAsAAAAADAAMAAAAnyUj6nL7Q+jdCDWicF9G1vdeWICao05ciUVpkrZIqjLwCdI16s+5wfck+F8JOBiR/zZZAJk0mAsDp/KIHRKvVqb2KxTu/Vdvt/nGFs2V5Bpta3tBcKp8m5WWL/z5PpbtH/0B/iyNGh4iJiouMjY6PgIGSk5SVlpeYmZqVkAACH5BAkBAAIALAAAAAAwADAAAAJhlI+py+0Po5y02ouz3rz7D4biSJbmiabq6gCs4B5AvM7GTKv4buby7vsAbT9gZ4h0JYmZpXO4YEKeVCk0QkVUlw+uYovE8ibgaVBSLm1Pa3W194rL5/S6/Y7P6/f8vp9SAAAh+QQJAQACACwAAAAAMAAwAAACZZSPqcvtD6OctNqLs968+w+G4kiW5omm6ooALeCusAHHclyzQs3rOz9jAXuqIRFlPJ6SQWRSaIQOpUBqtfjEZpfMJqmrHIFtpbGze2ZywWu0aUwWEbfiZvQdD4sXuWUj7gPos1EAACH5BAkBAAIALAAAAAAwADAAAAJrlI+py+0Po5y02ouz3rz7D4ZiCIxUaU4Amjrr+rDg+7ojXTdyh+e7kPP0egjabGg0EIVImHLJa6KaUam1aqVynNNsUvPTQjO/J84cFA3RzlaJO2495TF63Y7P6/f8vv8PGCg4SFhoeIg4UQAAIfkEBQEAAgAsAAAAADAAMAAAAnaUj6nL7Q+jXGDaW6+GeXsFdFL4UaITnuVBPunKtHGqwoKc0LjN7rdes70QQB/v1ykOj72kMghbPpm51pRKtBaxoteV2SUpsT/Dk0Y+A8lmNZSnZlfH8iy93lzj5+g93+gXKDhIWGh4iJiouMjY6PgIGSk5eVgAADs=';
 i.onclick=function(){$(this).remove();$('#global').html('<h1>Joyeux halloween !</h1><p>Bravo ! Vous avez capturé une chauve souris d\'halloween !'); }; 
 d.body.appendChild(z);
 function R(o,m){return Math.max(Math.min(o+(r()-.5)*400,m-50),50)}
 function A(){
 var x=R(a,w.innerWidth),y=R(b,w.innerHeight),
 d=5*Math.sqrt((a-x)*(a-x)+(b-y)*(b-y));
 zs.opacity=n;n=1;
 zs.transition=zs.webkitTransition=d/1e3+'s linear';
 zs.transform=zs.webkitTransform='translate('+x+'px,'+y+'px)';
 i.style.transform=i.style.webkitTransform=(a>x)?'':'scaleX(-1)';
 a=x;b=y;
 if ($$('batMobile')!=null)
 setTimeout(A,d);
 };setTimeout(A,r()*3e3);
};

function cancelCompetitionGame() {
 confirme('ATTENTION : Cette opération comptabilise un abandon pour le joueur qui met actuellement trop longtemps à jouer. Voulez-vous vraiment annuler la partie ?',function () {
 rpc('cancelCompetitionGame=1');
 if (selMoteur) selMoteur.clearActions(); 
 });
}
function closeConnexion() {
 if (!connectedToSocket) return;
 connectedToSocket = false;
 wsocket.close();
 startConnexion = false;
 wsocket = null;
}
function connectToRoom(idRoom) {
 if (startConnexion) return;
 closeConnexionSalon();
 startConnexion = true;
 llog('connectToRoom');
 wsocket = new WebSocket("wss://www.liars-game.com:9443");//ws://www.liars-game.com:8100");
 //wsocket = new WebSocket("ws://localhost:8100");


 wsocket.onopen = function (event) {
 wsocket.send('{ "type":"joinRoom", "content":"'+idRoom+'"}' ); 
 connectedToSocket = true;
 llog('connectedToSocket');
 sendPing ();
 };
 wsocket.onclose = function (evt) {
 llog('closed');
 if (connectedToSocket)
  setTimeout(function() {connectToRoom(idRoom); } , 1000);
 startConnexion = false;
 connectedToSocket = false;
 };

 wsocket.onmessage=function(event) { 
 var message = JSON.parse(event.data);
 switch(message.type) {
 case "text":
 llog(message.content);
 break;
 case "pingRoom":
 getPing ();
 break; 
 }
 };

}
var wsocketSalon;
var connectedToSalonSocket = false;
var startSalonConnexion = false;

function connectToSalon(userid) {
 try {
 connectToSalonInt(userid); 
 } catch (u) {}
}
function closeConnexionSalon() {
 if (!connectedToSalonSocket) return;
 connectedToSalonSocket = false;
 wsocketSalon.close();
 startSalonConnexion = false;
 wsocketSalon = null;
}
function connectToSalonInt(userid) {
 if (startSalonConnexion) return;
 startSalonConnexion = true;
 llog('connectToSalon'+userid);
 wsocketSalon = new WebSocket("wss://www.liars-game.com:9443");//ws://www.liars-game.com:8100");
 //wsocketSalon = new WebSocket("wss://localhost:9443");

 wsocketSalon.onopen = function (event) {
 var joinParams = '{ "type":"joinRoom", "content":"SalonTarot","userid":"'+userid+'"}' 
 wsocketSalon.send(joinParams); 
 //llog(joinParams);
 connectedToSalonSocket = true;
 llog('connectedToSalon');
 sendPing ();
 };
 wsocketSalon.onclose = function (evt) {
 llog('closedSalon');
 if (connectedToSalonSocket)
 setTimeout(function() {connectToSalon(userid); } , 1000);
 startSalonConnexion = false;
 connectedToSalonSocket = false;
 };

 wsocketSalon.onmessage=function(event) { 
 //llog('onmessage');
 var message = JSON.parse(event.data);
 //llog(message);
 switch(message.type) {
 case "pingPlayer":
 llog('pingPlayer',message);
 //llog('pingPlayer');
 refreshSalonExtern();
 break; 
 case "pingRoom":
 refreshSalonExtern();
 break; 
 }
 };

}
function sendSalonGlobalPing () {
 if (connectedToSalonSocket){
 wsocketSalon.send('{ "type":"pingRoom"}' ); 
 llog('sendSalonPing to '+userid);
 }
} 
function sendSalonPing (userid) {
 if (connectedToSalonSocket){
 wsocketSalon.send('{ "type":"pingPlayer","userid":"'+userid+'"}' ); 
 llog('sendSalonPing to '+userid);
 }
} 
function salonClose () {
 if (connectedToSalonSocket){
 connectedToSalonSocket = false;
 wsocketSalon.close(); 
 llog('sendSalon Close ');
 }
} 
var timeOutSleep = 0;

function getPing () {
 if (recapChatMsgIdPartie) {
 reloadRecapChatMsg();
 return;
 }
 if (timeOutSleep)
 nextDelayIsNull=1;
 else
 refreshTO (50,true);
 //getNews();
}
function sendPing () {
 if (connectedToSocket)
 wsocket.send('{ "type":"pingRoom"}' ); 
} 


var currentGameId = 0;
function setCurrentGameId (id,connectWS)
{
 currentGameId = id;
 if (id && connectWS) {
 try {
 connectToRoom(id); 
 } catch (u) {}
 }
} 

function getDistance(obj1, obj2){
 var obj1 = document.getElementById(obj1);
 var obj2 = document.getElementById(obj2);
 var pos1 = getRelativePos(obj1);
 var pos2 = getRelativePos(obj2);
 var dx = pos1.offsetLeft - pos2.offsetLeft;
 var dy = pos1.offsetTop - pos2.offsetTop;
 return {x:dx, y:dy};
}
function getRelativePos(obj){
 var pos = {offsetLeft:0,offsetTop:0};
 while(obj!=null){
 pos.offsetLeft += obj.offsetLeft;
 pos.offsetTop += obj.offsetTop;
 obj = isIE ? obj.parentElement : obj.offsetParent;
 }
 return pos;
}
function getCardJSIMG(cardName) {
 var res = '';
 if (typeof cacheCarteHR!=='undefined') {

 res+=cacheCarteHR[cardName.split('gif').join('png')];
 return imgPresJSprocess(res);
 }
 else if (typeof cacheCarte!=='undefined') {

 res+=cacheCarte[cardName];
 return res;
 }
 else {
 var params = {
 stack:new Error().stack,
 lastAjaxRequest:lastAjaxRequest,
 resLoaded:resLoaded,
 resDownloaded:resDownloaded
 }
 errorLog ('cacheCarteHR undefined', params);
 return res;
 
 }
} 
function imgPresJSprocess(data) {
 /*if (typeof data=='undefined')
 return '';*/
 return 'data:image/png;base64,'+data;
 /*
 var res = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAFwCAYAAAD9tjQyAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvq';
 if (data.substr(0,5)=='iVBOR')
 return 'data:image/png;base64,'+data;
 res+=data;
 return res;*/
}

var nextDelayIsNull = 0;
var newsTO = 0;
function refreshTO (delay,bypassconnect)
{
 clearTO ();
 if (callStack==null || callStack.length==0 ) {
 if (nextDelayIsNull>0) {
  getNews();
  nextDelayIsNull=0;
 }
 else {
  if (connectedToSocket && !bypassconnect)
  newsTO = setTimeout(getNews,500+delay);
  else
  newsTO = setTimeout(getNews,delay);
 }
 }
}
function clearTO ()
{
 clearTimeout(newsTO);
}
function getNews ()
{
 if (dateDebutPartie==null) return;
 clearTO ();
 rpc('etape=inGame');//, '', repStartGame
}


var old,head=0
var old,head=0
var scrNum=new Date().getTime();

var tabAnnonces = new Array ('','Prise','Garde','Garde sans','Garde contre');
var tabAnnoncesCrt = new Array ('','Prise','Garde','Garde Ss.','Garde C.');

/* *************************************** FORM UTIL *************************/
var TOPing;
function setPing(delai)
{
 //log('startPing '+delai);
 clearTimeout(TOPing);
 //TOPing = setTimeout(sendChatMessage,delai);
}





/* *************************************** FONCTIONS DE COMMUNICATION *************************/ 
var gameMode = '';
function setGameMode(gm) {
 if (gm)
 gameMode = gm;
}
var ajaxCallXhr = null;
var callStack = null; 

function rpc(str)
{
 if (ajaxCallXhr!=null)
 {
 if (callStack==null)
 {
  callStack = new Array();
  callStack.push(str);
 }
 else
 {   
  callStack.push(str);
 }
 }
 else
 {
 ajaxCallXhr = rpcParalell(str);
 }
}
var uidG = Math.round(Math.random()*999999);

function rpcParalell(str)
{
 if (gameMode=='') {
 llog('empty gameMode');
 return;
 }
 clearTimeout(TOPing);     
 scrNum++;
 if (currentGameId!=0)
 return ajax('/workers/jeu.php?CV='+codeVersion+'&'+str+'&s='+'scr'+scrNum+'&uidG='+uidG+'&idPartie='+currentGameId+'&gameMode='+gameMode, '', receptionRpc);
 else
 return ajax('/workers/jeu.php?CV='+codeVersion+'&'+str+'&s='+'scr'+scrNum+'&uidG='+uidG+'&gameMode='+gameMode, '', receptionRpc);
}
function rpcNoQueue(str) {

 if (gameMode=='') {
 llog('empty gameMode');
 return;
 }
 scrNum++;
 if (currentGameId!=0)
 return ajax('/workers/jeu.php?CV='+codeVersion+'&'+str+'&s='+'scr'+scrNum+'&uidG='+uidG+'&idPartie='+currentGameId+'&gameMode='+gameMode, '', completeCallback);
 else
 return ajax('/workers/jeu.php?CV='+codeVersion+'&'+str+'&s='+'scr'+scrNum+'&uidG='+uidG+'&gameMode='+gameMode, '', completeCallback);
}

function receptionRpc(t)
{
 if (t=='' || t=='<HTML></HTML') {
 llog('bad res');
 refreshTO (1000);
 return;
 }
 threadProcess(t) ;
}
var dateStartProcessThread = null;
var estimatedLengthProcessThread = 0;

function threadProcess(t)
{
 if (!dateStartProcessThread) dateStartProcessThread = new Date().getTime();
 var sleepTab = t.split('sleep();');
 if (sleepTab.length>1)
 {
 evalRes(sleepTab[0]);
 var rest = t.substr(t.indexOf('sleep();')+8);
 estimatedLengthProcessThread += 500;
 var delayBefEnd = estimatedLengthProcessThread-new Date().getTime()+dateStartProcessThread;
 //llog('delayBefEnd '+delayBefEnd);
 if (delayBefEnd<100) delayBefEnd = 100;
 if (delayBefEnd>1200) delayBefEnd = 1000;
 timeOutSleep = setTimeout( function () { threadProcess(rest);timeOutSleep = 0; } , delayBefEnd);
 
 } else {
 evalRes((t));
 ajaxCallXhr = null;
 dateStartProcessThread = null;
 estimatedLengthProcessThread = 0;
 //delayedInProcessThread = 0;
 
 if (callStack!=null && callStack.length>0 )
 {
  var tmpCallst = callStack.shift();
  rpc(tmpCallst); 
 }
 }
}   
function completeCallback(t)
{
 var sleepTab = t.split('sleep();');
 if (sleepTab.length>1)
 {
 evalRes(sleepTab[0]);
 var rest = t.substr(t.indexOf('sleep();')+8);
 setTimeout( function () { completeCallback(rest); } , 500);
 }
 else
 evalRes((t));
} 

function decodeChatLineObj(txt) {
 //$pseudo,$line,$date,$idUtil
 var tmp = unescape(txt.split('+').join(' ')).split('#');
 return tmp;
}




var currentRegle = 0;
var shouldNavigToRegle = 0;
var TOregles = null;
var dateLastRegle = 0;

function showRegleRobot(num)
{
 return;
 var tmpDate = new Date().getTime();
 if (tmpDate-dateLastRegle<15000) return;
 shouldNavigToRegle = num;
 clearTimeout(TOregles);
 TOregles = setTimeout(TOreglesFn,1500);
}
function TOreglesFn ()
{
 showRegle(shouldNavigToRegle);
}
function showRegle(num)
{
 return;
 //log('showRegle'+num);
 clearTimeout(TOregles);
 if (currentRegle!=num)
 {
 dateLastRegle = new Date().getTime();
 currentRegle=num;
 //scrollToAnchor('content','reglesBtn'+num);
 }
}

function scrollToAnchor(div,anchor)
{
 if (document.getElementById('Jeu')!=null) return;

 $('html, body').stop().animate( { scrollTop: $$(anchor).offsetTop }, 750 );
} 
function sendEmailJoueur(i)
{
 //$("#dialog").dialog();
 var p;
 if (p=prompt('Pour envoyer un email à ce joueur, saisissez un message et validez :',''))
 {
 if (p!=null && p.length>0)
 rpcNoQueue('sendMailMsg='+i+'&sendMailMsgTxt='+p);
 }
 
} 
function showBackground(img)
{ 
 if (techniqueLevelAnim==0 && img=='blancCasse.png' && gamePhaser)
 img = 'FondMarron.png';
 var jeuDiv = $$('backgroundJeu');//Jeu
 $(document.body).css('min-height','100%');
 $(document.body).css('background','url(\'/images/plateau/'+img+'\') repeat fixed bottom left');
 $(document.body).css('-webkit-background-size','cover');
 $(document.body).css('-moz-background-size','cover');
 $(document.body).css('-moz-background-size','cover');
 $(document.body).css('-o-background-size','cover');
 $(document.body).css('background-size','cover');
}
var jeuIsFicheJoueurShown = false;

function unityLoadJoueurDetail(joueurName, imageSrc) {
 if (jeuIsFicheJoueurShown) return;
 
 window.formerScroll = window.scrollY;
 window.scroll(0,0);
 $(document.body).css('overflow-y','scroll');
 $('#webBody').hide();
 jeuIsFicheJoueurShown = true;
 ajax('/workers/joueur.php?joueur='+joueurName+'&minimized=true&otherSrc='+imageSrc, '', unityreceptionRpcJoueurDetails);

}
function unityreceptionRpcJoueurDetails(t)
{
 var divJ = document.createElement('div');
 divJ.id = 'detailJoueur';
 divJ.innerHTML = t;
 divJ.onclick = unityclearJoueurDetails;
 divJ.className = 'button';
 $('#webBody').after(divJ);
 jeuIsFicheJoueurShown = true;

}
function unityclearJoueurDetails()
{

 window.vuplex.postMessage({ type: 'clearDetails' });
 
 var objDelme = $$('detailJoueur');
 if (objDelme!=null)
 {
 $('#webBody').show();
 $('#detailJoueur').remove();

 if (window.formerScroll) {
 window.scroll(0,window.formerScroll);
 window.formerScroll = null;
 }
 }
 jeuIsFicheJoueurShown = false;
} 


function receptionRpcJoueurDetails(t)
{
 window.formerScroll = window.scrollY;
 window.scroll(0,0);
 
 clearJoueurDetails();
 var divJ = document.createElement('div');
 divJ.id = 'detailJoueur';
 divJ.innerHTML = t;
 divJ.onclick = clearJoueurDetails;
 divJ.className = 'button';

 $(document.body).css('overflow-y','scroll');
 
 if ( $$('Jeu') )
 $$('Jeu').appendChild(divJ);
 else {

 $('#webBody').hide();
 $('#webBody').after(divJ);
 }
 jeuIsFicheJoueurShown = true;

}
function clearJoueurDetails()
{
 var objDelme = $$('detailJoueur');
 if (objDelme!=null)
 {
 $('#webBody').show();
 $('#detailJoueur').remove();

 if (window.formerScroll) {
 window.scroll(0,window.formerScroll);
 window.formerScroll = null;
 }
 }
 jeuIsFicheJoueurShown = false;
} 
function showJoueurDetailsMin (pseudo)
{
 return ajax('/workers/joueur.php?joueur='+pseudo+'&minimized=true&webDetail=1', '', receptionRpcJoueurDetails);
} 
function showFriendDetails (pseudo)
{
 return ajax('/workers/joueur.php?joueur='+pseudo+'&minimized=true&webDetail=1&myFriend=true', '', receptionRpcJoueurDetails);
} 
function showJoueurDetails (obj)
{
 if (!$(obj).data("pseudo")) return;
 var pseudoJ = $(obj).data("pseudo");
 var oth = $(obj).data("imgSrc");
 //var oth = $(obj).find('#avatJE img').attr('src');
 var num = $(obj).data("idPos");
 
 if (isOffLineGame) return false;
 notifyUserActivity();
 if (pseudoJ=='' || pseudoJ==null ) return;
 if ( pseudoJ!='Vide' && pseudoJ!='Libre' && pseudoJ!='Masqué') //return false;
 {
 if ( $$('detailJoueur')!=null)
 {
  reorganiseCartes ();
  return clearJoueurDetails();
 }
 else
 {
  playSoundEffect ('Camera_Zoom.mp3',true,0.9);
  return ajax('/workers/joueur.php?joueur='+pseudoJ+'&minimized=true&otherSrc='+oth, '', receptionRpcJoueurDetails);
 }
 }
 else if ( pseudoJ=='Vide')
 {
 clearTO ();
 rpc("addIA="+num);
 $('#divJoueur'+num).data("pseudo","IA");
 }
}


var isLowGraphism = false;
var etesVousLaFn = true;
function setLowGraphisms() {
 $(document.body).addClass('lowRes');
 isLowGraphism = true;
}


function showGameBoard(modeJeu,chatJoueurs,nbJoueurs,etesVousLa,smileyOnly)
{
 etesVousLaFn = etesVousLa;
 $('#batMobile').remove();
 $('#sd-cmp').remove();
 document.title = ""+getGameName(modeJeu)+" en cours...";
 notifyUserActivity();
 nombreDeJPartie = nbJoueurs;
 if (hasAGameStarted) return;
 hasAGameStarted = true;
 salonClose ();
 
 $('.dialogBox').remove();
 $('.ui-dialog').remove();
 $('#prefooter').remove();
 if ($$('homeLink')) $$('homeLink').onclick='return false;';
 $('#navBox').remove();
 $('#logoIMG').remove();
 $('#IDheader').remove();
 $('#IDfooter').remove();
 $(document.body).css('background','#FFF');
 $(document.body).css('overflow-x','hidden');
 $(document.body).css('overflow-y','scroll');
 $(document.body).css('text-align','center');
 $(document.body).addClass('noselect');

 window.onunload = window.onbeforeunload = function(){
 return 'Etes vous sûr de vouloir quitter ?';
 };

 
 selMoteur.createGameBoard(modeJeu,chatJoueurs,nbJoueurs,etesVousLa,smileyOnly);
 $('#cookieChoiceInfo').remove();
 CheckSizeZoom();

}
function selMJ (mj) {
 $('.selectedMJ').removeClass('selectedMJ');
 $('.MJ'+mj).addClass('selectedMJ');
 scookie('memSelMJ2',mj);
 setJouerHeights();
}
var curBouMode = gcookie('memSelPM');
var curBouTypeC = gcookie('memSelCREB');
function selBouti (mj) {
 $('.selectedPM').removeClass('selectedPM');
 curBouMode = mj;
 $('.PM'+curBouMode+'_'+curBouTypeC).addClass('selectedPM');
 $('.BT'+curBouMode).addClass('selectedPM');
 $('.BTT'+curBouTypeC).addClass('selectedPM');
 scookie('memSelPM',mj);
}
function selBoutiCre (mj) {
 if (curBouMode=="") curBouMode = "CB";
 $('.selectedPM').removeClass('selectedPM');
 curBouTypeC = mj;
 $('.PM'+curBouMode+'_'+curBouTypeC).addClass('selectedPM');
 $('.BT'+curBouMode).addClass('selectedPM');
 $('.BTT'+curBouTypeC).addClass('selectedPM');
 scookie('memSelCREB',mj);
}
var siQuitAbandon = 0;
function GSN() {
 if (siQuitAbandon==1) return;
 //notifStart();
 siQuitAbandon = 1;
 $('#BTNQUT').removeClass('btn-success');
 $('#BTNQUT').removeClass('btn-warning');
 $('#BTNQUT').addClass('btn-danger');
}
function GEN() {
 if (siQuitAbandon==2) return;
 siQuitAbandon = 2;
 $('#BTNQUT').addClass('btn-success');
 $('#BTNQUT').removeClass('btn-danger');
 $('#BTNQUT').removeClass('btn-warning');
}
var phaserMedalsDisabled = false;
function setNoMedals () {
 phaserMedalsDisabled = true;
}
var isOffLineGame = false;

function btnQuitAction()
{
 if (isOffLineGame) quitOffline();
 else
 quitGame();
}
function closeBrowser()
{
 rpcNoQueue('etape=end');
 //alert('browserclose'); 
}
function quitGame()
{ 
 if (siQuitAbandon==1) {
 confirme('ATTENTION : Si vous ne terminez pas une partie, il vous sera compté un abandon. Voulez-vous vraiment quitter la partie ?',function () {
 rpcNoQueue('etape=end&quitRequest=1&confirmMessageQuit=1'); 
 });
 } else {
 rpcNoQueue('etape=end&quitRequest=1'); 
 }
}
function endGame()
{ 
 if (ajaxCallXhr!=null) ajaxCallXhr.abort();
 rpcNoQueue('etape=end');
 
 //finalURL='/index.php';
 //new ajax(finalURL, '', repEndGame);
} 
function gameCanceled ()
{  
 if ($$('Jeu')==null) return;
 //log('Un joueur a abandonn');
 alert('Un joueur a abandonné la partie.');
 closeGame () ;
}
function homeAction ()
{ 
 if ($$('modeJeuSalon')!=null) return false;
 return true;
}
function closeGame (IDdistribution)
{  
 window.onunload = window.onbeforeunload = null;

 var gotoLoc = '/Fin-de-partie.php?modeJeu='+$('#modeJeuSalon').val();
 if (IDdistribution) gotoLoc += '&IDdistribution='+IDdistribution;
 document.location = gotoLoc;
 //document.location = '/Fin-de-partie.php?modeJeu='+$('#modeJeuSalon').val();
}
var isReplayedGame = false;
function closeCPUGame (params)
{ 
 window.onunload = window.onbeforeunload = null; 

 if (isReplayedGame)
 document.location = '/Fin-de-partie.php?'+params+'&isR=1';
 else
 document.location = '/Fin-de-partie.php?'+params;
}
var webIDGame = 0;
function setWebIdGame(id) {
 webIDGame = id;
}
function closeRecap(IDdistribution) {
 if (webIDGame==0) return closeGame (IDdistribution);
 window.onunload = window.onbeforeunload = null;

 var gotoLoc = '/Fin-de-partie.php?idPartie='+webIDGame+'&modeJeu='+$('#modeJeuSalon').val();
 if (IDdistribution) gotoLoc += '&IDdistribution='+IDdistribution;
 document.location = gotoLoc;
}
/* *************************************** FONCTIONS DE MISE EN PAGE *************************/
var etatRegles = 'ON';
function switchRegles(destEtat)
{
 if (destEtat==null) 
 {
 if (etatRegles=="ON") destEtat='OFF';
 else destEtat='ON';
 }
 if (destEtat==etatRegles) return;
 if (etatRegles=='ON')
 {
 etatRegles = "OFF";
 $$('content').style.borderBottom = '1px solid #aaaaaa';
 $$('content').style.borderTop = '1px solid #aaaaaa';
 $$('content').innerHTML = $$('content').innerHTML;
 }
 else
 {
 etatRegles = "ON";
 $$('content').style.borderBottom = '0px solid #bbbbbb';
 $$('content').style.borderTop = '0px solid #bbbbbb';     
 }
 
}

function setManche(num) {
 $('#IMGMJB').html(num);
}

function focusChat()
{
 try {
 jb.askForChatMessageToSend();
 } catch (e) { }
 try {
 $('#chatInput').focus();
 } catch (e) { }
} 

var chatEnabled = false;
function enableChat()
{
 chatEnabled = true;
 $('#chat').css('visibility','visible');
} 
function blurAll(){
 $('#chatInputBtn').focus();
 $('#chatInputBtn').blur();
 return;
 var tmp = document.createElement("input");
 tmp.style.display='none';
 document.body.appendChild(tmp);
 tmp.focus();
 document.body.removeChild(tmp);
}
var shouldBlurInputMessageGame = false;
function sendChatMessage(str)
{
 if ( $$('chatInput')==null) return;
 if (!chatEnabled) 
 return alert('Veuillez attendre que la partie soit complète.');
 //clearSounds();
 //clearTO (); 
 notifyUserActivity();
 
 if (str=='')
 { 
 toggleChatD ();  
 return;
 }

 phaserDecalChat = 0;
 
 rpcNoQueue('sendChatMsg='+escape(str).split('+').join('%2B'));
 $$('chatInput').value='';
 
 if (shouldBlurInputMessageGame && (isIos() || isAndroidPhaser()))
 blurAll();
}

function carteSelectInt (obj)
{ 
 carteSelectionnee(obj.id); 
 notifyUserActivity();
 nbDelayedAnswers = 0;
 
 cardActionsActivated = false;
 selMoteur.timeThatRemains(-1,0);

 clearTO () ; 
 rpc('joueCarte='+getCardName(obj));
}

var shalAskForConfirmCardPlay = false;
var shalAskForconfirmationPetit = false;
var advanceCardPlayDisable = false;

function carteSelect (obj,name)
{
 if (!cardActionsActivated) {
 return;
 }
 if (shalAskForConfirmCardPlay || (name=='le petit' && shalAskForconfirmationPetit)) {
 confirme('Etes-vous sûr de vouloir jouer '+name+' ?',function () {
 carteSelectInt (obj);
 });
 } else {
 carteSelectInt (obj);
 }
} 


function surLeTapis(name,opp)
{
 if (cartesSurLeTapis[opp]==null )
 {    
 setTimeout(function () { selMoteur.playOppCard(name,opp); } ,100);
 }
}

function setVictory(num)
{
 selMoteur.setRoleJoueurClass(num,'roleVictoire');
}
function setDefeat(num)
{
 selMoteur.setRoleJoueurClass(num,'roleDefaite');
}
function setEquipier (i) {
 selMoteur.setPriseTxt(i,"Equipier");
 selMoteur.setRoleJoueurClass(i,'roleEquipier');
}

var annonce = ''; 
var queueMsg = new Array(); 
function showMessage (msg)
{
 $('#sd-cmp').remove();
 queueMsg.push(msg); 
 nextMessage();   
}
var msgTimeoutPPalTO = 0;
var dateMsgTimeoutPPal = 0;

function nextMessage()
{
 clearTimeout(msgTimeoutPPalTO);
 var d = new Date();
 if (d.getTime()-dateMsgTimeoutPPal>1000)
 {
 dateMsgTimeoutPPal = d.getTime();
 var msg = queueMsg.shift(); 
 if (annonce=='') 
 {
  selMoteur.setGameMainMsg(msg); 
 }
 else selMoteur.setGameMainMsg(annonce+'<br />'+msg);
 }    
 if(queueMsg.length>0) 
 msgTimeoutPPalTO = setTimeout(nextMessage,1500);
}
function setMessage (msg)
{
 if (annonce=='') 
 {
 selMoteur.setGameMainMsg(msg); 
 }
 else selMoteur.setGameMainMsg(annonce+'<br />'+msg);
} 

var zindexTop = 10; 

/* *************************************** ANIMATION DES CARTES *************************/
var lastMO = null;
var lastTO = null;    
var oppArray = new Array (150+00,385+00,615+00,845+00);
//var oppArray = new Array (150,340,530,730);
//var oppArraySelector = new Array (111,351,575,800);
var lastOpp = 1;
var cardsNum = 0;
var whoamiNum = null;

 
var cartesChien = new Array (); 
var cartesPoignee = new Array (); 

function mySizeOf (obj) {
 var size = 0, key;
 for (key in obj) {
 if (obj[key] && obj.hasOwnProperty(key) && typeof obj[key].id!='undefined') size++;
 }
 return size;
};
function getCardName(obj)
{
 var idObj = obj.alt;//.substr(6);
 return idObj;
} 
function refreeshCartesChien()
{  
 for (key in cartesChien) {
 if (cartesChien[key] && cartesChien.hasOwnProperty(key) && typeof cartesChien[key].id!='undefined') 
 {       
  if (!selMoteur.hasCardHand(key)) 
  {
  cartesChien = new Array (); 
  refreshChienMsg();
  return;
  }               
 }
 }
 for (key in cartesChien) {
 if (cartesChien[key] && typeof cartesChien[key].id!='undefined') {
 if (cartesChien.hasOwnProperty(key) ) 
  carteSelectionnee(cartesChien[key].id); 
 else
  carteSelectionnable(cartesChien[key].id);
 }
 }
 refreshChienMsg();
 
}
/*function refreeshCartesPoignee()
{  
 for (key in cartesPoignee) {
 if (cartesPoignee.hasOwnProperty(key) && typeof cartesPoignee[key].id!='undefined') 
 {       
  //if ($$(cartesPoignee[key].id)==null) 
  if (!selMoteur.hasCardHand(key)) 
  {
  alert('reset'+cartesPoignee[key].id);
  llog(cartesPoignee,cartesPoignee[key].id,key,phaserCards);
  cartesPoignee = new Array ();
  refreshPoigneeMsg(); 
  return;
  }               
 }
 }
 for (key in cartesPoignee) {
 if (cartesPoignee[key] && typeof cartesPoignee[key].id!='undefined') {
 if (cartesPoignee.hasOwnProperty(key)) 
  carteSelectionnee(cartesPoignee[key].id); 
 else
  carteSelectionnable(cartesPoignee[key].id); 
 }
 }
 refreshPoigneeMsg();
 
}*/
var poigneeInit = -1;
function initCartesPoignee (manche) 
{
 if (manche>poigneeInit)
 {
 poigneeInit = manche; 
 cartesPoignee = new Array ();
 return true;
 }
 return false;
}
function refreshChienMsg()
{ 
 var nbCartesChien = 6;
 if (nombreDeJPartie==5) nbCartesChien=3;
 if (nombreDeJPartie==6) nbCartesChien=3;
 var chienCSize = mySizeOf(cartesChien);
 
 if (chienCSize==nbCartesChien) setMessage('Constitution de l\'écart : ecart valide');
 else if (chienCSize>nbCartesChien) setMessage('Constitution de l\'écart : '+(chienCSize-nbCartesChien)+' carte'+((chienCSize-nbCartesChien)!=1?"s":"")+' en trop');
 else if (chienCSize==0) setMessage('Sélectionnez les cartes qui composeront l\'écart');
 else setMessage('Constitution de l\'écart : Encore '+(nbCartesChien-chienCSize)+' carte'+((nbCartesChien-chienCSize)!=1?"s":"") );
 
 var key;  
 
 if ( chienCSize==nbCartesChien)
 {
 var size = '';
 for (key in cartesChien)
 {       
  if (cartesChien[key] && cartesChien.hasOwnProperty(key)) 
  {
  if (typeof cartesChien[key].id!='undefined') { 
  size+='|'+getCardName(cartesChien[key]); 
  } 
  }
 } 
 size=size.substr(1);

 if ( !selMoteur.actionExists('Valider l\'écart') ) {// $$('infosJeu').innerHTML.indexOf( 'Valider l\'écart</a>')==-1) {
  selMoteur.clearActions(true);
  //$$('infosJeu').innerHTML = '';
  selMoteur.addAction('Valider l\'écart','valideChien(\''+size+'\');','btn-success');
  if (!isChelem && !window.nochien)
  selMoteur.addAction('Chelem','chelem();','btn-danger',true);
 }
 }
 else
 {
 selMoteur.clearActions(true);
 }
}

var phaserDecalChat = 0;
function phaserNextChatPage() {
 phaserDecalChat += phaserChatElts.fondChat.height-20;
 if (phaserDecalChat>phaserChatElts.textChat.height-phaserChatElts.fondChat.height)
 phaserDecalChat = phaserChatElts.textChat.height-phaserChatElts.fondChat.height;
 
 reorganiseCartes();
 return;

}
function phaserPrevChatPage() {
 phaserDecalChat -= phaserChatElts.fondChat.height-20;
 if (phaserDecalChat<0)
 phaserDecalChat = 0;
 
 reorganiseCartes();
 return;
 

}
var tmpIscrntPoivalid = false;
function refreshPoigneeMsg()
{ 
 var nbCartesPoignee1 = 10;
 var nbCartesPoignee2 = 13;
 var nbCartesPoignee3 = 15;
 var key; 
 if (nombreDeJPartie==5) {
 nbCartesPoignee1 = 8;
 nbCartesPoignee2 = 10;
 nbCartesPoignee3 = 13;
 }
 if (nombreDeJPartie==3) {
 nbCartesPoignee1 = 13;
 nbCartesPoignee2 = 15;
 nbCartesPoignee3 = 18;
 }
 if (nombreDeJPartie==6) {
 nbCartesPoignee1 = 7;
 nbCartesPoignee2 = 9;
 nbCartesPoignee3 = 11;
 }
 var excuseInPoignee = false;
 for (key in cartesPoignee) {
 if (cartesPoignee[key] && cartesPoignee.hasOwnProperty(key))
 {
  if (getCardName(cartesPoignee[key])== '6_Excuse.gif') 
  excuseInPoignee = true;
 }
 }
 if (excuseInPoignee )
 {   
 var cnt = selMoteur.getCards();
 for (key in cnt) {
 if ( cnt[key] && getCardName(cnt[key]) ) {
  if ( cnt[key] && cnt[key].id!=null && cnt[key].id.substr(0,6)=='MonJeu' && getCardName(cnt[key]).substr(0,1)=='5' && !cartesPoignee.hasOwnProperty(getCardName(cnt[key])) )
  {
  if ( !selMoteur.actionExists( 'Ne pas annoncer de poignée') || selMoteur.actionExists( 'Valider la poignée') ) {
  selMoteur.clearActions(true);
  setMessage('Annonce de poignée invalide - Excuse');
  selMoteur.addAction('Ne pas annoncer de poignée','validePoignee(\'\');','btn-warning',true);
  return;
  } else {
  setMessage('Annonce de poignée invalide - Excuse');
  return;
  }
  }
 }
 }
 }
 var poigneeSize = mySizeOf(cartesPoignee);
 if (poigneeSize==nbCartesPoignee1 || poigneeSize==nbCartesPoignee2 || poigneeSize==nbCartesPoignee3) 
 setMessage('Annonce de poignée valide');
 else if (poigneeSize>nbCartesPoignee1) setMessage('Annonce de poignée invalide');
 else if (poigneeSize==0) setMessage('Vous avez la possibilite d\'annoncer une poignée');
 else setMessage('Minimum '+nbCartesPoignee1+' cartes : encore '+(nbCartesPoignee1-poigneeSize)+' carte'+((nbCartesPoignee1-poigneeSize)!=1?"s":"") );
 
 
 if ( poigneeSize==nbCartesPoignee1 || poigneeSize==nbCartesPoignee2 || poigneeSize==nbCartesPoignee3)
 {
 var size = '';
 for (key in cartesPoignee) {
  if (cartesPoignee[key] && cartesPoignee.hasOwnProperty(key))
  {
  if (typeof cartesPoignee[key].id!='undefined') { 
  size+='|'+getCardName(cartesPoignee[key]);
  }
  }
 }
 size=size.substr(1); 
 if ( !selMoteur.actionExists('Valider la poignée')) {//$$('infosJeu').innerHTML.indexOf( 'Valider la poignée</a>')==-1) {
 selMoteur.clearActions(true);
 selMoteur.addAction('Ne pas annoncer de poignée','validePoignee(\'\');','btn-warning',true);
 selMoteur.addAction('Valider la poignée','validePoignee(\''+size+'\');','btn-success');
 }
 }
 else if ( !selMoteur.actionExists('Ne pas annoncer de poignée') || selMoteur.actionExists('Valider la poignée') ) 
 {         
 selMoteur.clearActions(true);
 selMoteur.addAction('Ne pas annoncer de poignée','validePoignee(\'\');','btn-warning',true);
 }
}
function valideChien(chien)
{       
 clearTO () ;
 selMoteur.clearActions();
 selMoteur.clearCards ();
 selMoteur.clearCardsActions (); 
 cartesChien = new Array ();
 rpc('chien='+chien);
}
function validePoignee(poignee)
{       
 clearTO () ;
 selMoteur.clearActions();
 
 selMoteur.timeThatRemains(-1,0);
 selMoteur.clearCardsActions (); 
 cartesPoignee = new Array ();
 rpc('poignee='+poignee);
}
 
function carteChienSelect (obj)
{
 //clearSounds();
 //console.log('carteChienSelect',obj);
 if (!cardActionsActivated) return; 
 
 if (obj==null) 
 {
 $.log('Erreur carte chien select obj is null');
 return;
 }    
 var name = getCardName(obj);
 if (name.substr(0,1)=='5')
 {   
 var cnt = selMoteur.getCards();
 for (key in cnt) {
  if (cnt[key] && cnt[key].id!=null && cnt[key].id.substr(0,6)=='MonJeu' 
  && getCardName(cnt[key]).substr(0,1)!='5' && getCardName(cnt[key]).substr(0,1)!='6' && getCardName(cnt[key]).indexOf("-14.gif")==-1 && !cartesChien.hasOwnProperty(getCardName(cnt[key])) )
  {
  alerte('Vous ne pouvez sélectionner un atout que s\'il ne reste plus d\'autres cartes à sélectionner.');
  return;
  }
 }
 }

 lastMO = obj;  
 
 if (!cartesChien.hasOwnProperty(name))//obj.style.top==0 || obj.style.top=='0px')
 {
 carteSelectionnee(obj.id); 
 cartesChien[name] = obj;
 playSoundEffect ('Cards 01.mp3',true,1);
 }
 else
 {
 carteSelectionnable(obj.id); 
 delete cartesChien[name];
 playSoundEffect ('Cards 03.mp3',true,1);
 }    
 refreshChienMsg(); 
 //event.stopPropagation();
}
 
function cartePoigneeSelect (obj)
{
 //clearSounds();
 if (!cardActionsActivated) return; 
 
 var name = getCardName(obj);
 if (name=='6_Excuse.gif' && !cartesPoignee.hasOwnProperty('6_Excuse.gif'))
 {   
 var cnt = selMoteur.getCards();
 for (key in cnt) {
  if (cnt[key] && cnt[key].id!=null && cnt[key].id.substr(0,6)=='MonJeu' && getCardName(cnt[key]).substr(0,1)=='5' && !cartesPoignee.hasOwnProperty(getCardName(cnt[key])) )
  {
  alerte('Vous ne pouvez sélectionner l\'excuse que s\'il ne reste plus d\'atouts à sélectionner.');
  return;
  }
 }
 }

 lastMO = obj;    
 if (!cartesPoignee.hasOwnProperty(name))
 { 
 carteSelectionnee(obj.id);        
 cartesPoignee[name] = obj;
 }
 else
 {
 carteSelectionnable(obj.id);        
 delete cartesPoignee[name];
 } 
 
 refreshPoigneeMsg(); 
} 

var cardActionsActivated = false;
function activateCardActions(etat)
{ 
 if ($$('monJeu')) {
 
 var cnt = $$('monJeu').childNodes;
 if (!etat)
 for (key in cnt) { 
 //log('key'+key+'--'+(typeof key)+'-+-'+cnt[key].src+'-+-'+cnt[key].id.substr(0,6) ); 
  if (cnt[key]!=null && cnt[key].id!=null && cnt[key].id.substr(0,6)=='MonJeu')
  carteNeutre (cnt[key].id); 
 } 
 }
 
 //log('activateCardActions : '+etat);
 cardActionsActivated = etat; 
}

function animateToWidth (id,destW,ccW,opt,endf) {
 var newW = destW-ccW;
 var idDest = id.split('.').join('\\.');
 var margL = newW/2;
 var margR = newW/2;
 if (opt=='First') margL = -5;
 if (opt=='Last') margR = -5;
 $('#'+idDest).stop().animate({
 marginLeft: margL,
 marginRight: margR
 }, 600,endf);
 $('#masque'+idDest).stop().animate({
 marginLeft: (-margR-ccW ),
 marginRight: margR
 }, 600);
}
function adaptJeuToWidth (ccW) {
 $('#monJeu').stop().animate({
 'padding-left': ccW+'px',
 'padding-right': ccW+'px'
 }, 600);
}

function trouveEcartCartes (numCarteLigne,windowWidth,ccW,nbLigneCartes)
{ 
 var res = ((windowWidth-ccW)/(numCarteLigne-1));
 if (res>1.2*ccW)
 res = 1.2*ccW;
 if (nbLigneCartes==1)
 res -= 20/numCarteLigne;
 return res;
}

var cardsBestTop = 0;
var TOorganiseCartes = 0;
var phaserTweenProcessing = false;
var phaserTweenNeedsRefresh = false;
var hasResziedWS = true;

function reorganiseCartes (fromResize)
{
 if (fromResize) hasResziedWS = true;
 clearTimeout(TOorganiseCartes);
 TOorganiseCartes = setTimeout(function () {
 if (phaserTweenProcessing) {
 phaserTweenNeedsRefresh = true;
 return;
 }
 selMoteur.reorganiseCartesReal(hasResziedWS);
 hasResziedWS = false;
 },20);
} 

/*
var positionYactif = true;
function desactivePositionnemenetCartesHz()
{
 positionYactif = false;
 cardsBestTop = 0; 
}
function activePositionnemenetCartesHz()
{
 positionYactif = true;
 cardsBestTop = 0; 
}
function setCardOffset(id,cardsBestTop,offset)
{
 if ($$(id)==null) return;
 if (offset==NaN || offset==undefined) offset = 0;
 if ( $('#'+id.split('.').join('\\.')).data('myOffset')==offset && $('#'+id.split('.').join('\\.')).data('cardsBestTop')==cardsBestTop ) return;
 $('#'+id.split('.').join('\\.')).data('myOffset',parseInt(offset));
 $('#'+id.split('.').join('\\.')).data('cardsBestTop',cardsBestTop);
 clearTimeout($('#'+id.split('.').join('\\.')).data('timeout'));
 var timeout = setTimeout(function () { applyCardOffset(id); },200);
 $('#'+id.split('.').join('\\.')).data('timeout',timeout);
}
function getCardOffset(id)
{
 return $('#'+id.split('.').join('\\.')).data('myOffset');
}
function applyCardOffset(id)
{
 if ($$(id)==null) return;
 $('#'+id).animate( { top: $('#'+id.split('.').join('\\.')).data('cardsBestTop')+$('#'+id.split('.').join('\\.')).data('myOffset') }, 600 );
 //var newFx = new Fx.Tween(id, { property: 'top' }).start(parseInt($$(id).style.top), $('#'+id.split('.').join('\\.')).data('cardsBestTop')+$('#'+id.split('.').join('\\.')).data('myOffset') );
}
function refreshCardBestTop(id)
{
 var oldTop = parseInt($$(id).style.marginTop);
 if (!oldTop>0)
 oldTop = 0;

 $('#'+id).animate( { marginTop: cardsBestTop }, 300 );
 $('#masque'+id).animate( { marginTop: cardsBestTop }, 300 );
 //var newFx = new Fx.Tween(id, { property: 'margin-top' }).start(oldTop,cardsBestTop);
 //var newFx2 = new Fx.Tween('masque'+id, { property: 'margin-top' }).start(oldTop,cardsBestTop);

}*/


function carteSelectionnee (id)
{
 selMoteur.addMasque(id,'MasqueB');
}
function carteSelectionnable (id)
{  
 selMoteur.clearMasque(id);         
}
function carteNonSelectionnable (id)
{ 
 if (isMasqueActivated())
 selMoteur.addMasque(id,'MasqueD');
}
function carteNeutre (id)
{ 
 selMoteur.clearMasque(id);
}


var code_evaled;
function eval_global(codetoeval) 
{
 if (window.execScript)
 window.execScript('code_evaled = ' + '(' + codetoeval + ')',''); // execScript doesnét return anything`
 else
 code_evaled = eval(codetoeval);
 return code_evaled;
} 





   
function whoami (num)
{
 whoamiNum = num;
}


function delme ()
{
 for (var i = 0;i<30;i++)
 { 
 }
 setTimeout(moteurStar,100);
 
}
var tabCos = new Array ();
function myCos (num) {
 var newNum = Math.round(num/2/3.14*100)%100;
 if (tabCos[newNum]==null)
 tabCos[newNum] = Math.cos( newNum*2*3.14/100 );
 return tabCos[newNum];
}
function mySin (num) {
 myCos (3.14/2+num);
}

var cptStar = 0;
var waitBeforeStarCreation = 0;
function startWin ()
{
 cptStar++;
 for (var i=0;i<10;i++)
 { 
 var img = $$('star'+i); 
 if (img==null)
 {
  createStar (i);
 }
 else
 {         
  img.style.top = Math.floor(getWinHeight()/2-50+Math.sin(i*3.14*2/10+cptStar/10)*Math.min(150+cptStar*2,200) )+'px';
  img.style.left = Math.floor(getWinWidth()/2-50+myCos(i*3.14*2/10+cptStar/10)*Math.min(150+cptStar*2,200) )+'px'; 
 }
 }
 if (cptStar<100)
 setTimeout(startWin,100);
 else
 {
 for (var i=0;i<10;i++)
 {
  var img = $$('star'+i); 
  if (img!=null)
  {
  document.body.removeChild(img);
  }
 } 
 }

}
function createStar (num)
{
 var img = document.createElement('img');
 img.src = '/Jeu-Tarot-en-ligne/Icones/1321719631_bookmark-new.png';
 img.style.position='absolute';
 img.style.top='-200px';
 img.style.zIndex='50';
 img.style.left = '-400px';//Math.floor(Math.random()*screen.width)+'px';
 //alert(Math.floor(parseInt(img.style.left)));
 img.id = 'star'+num;
 document.body.appendChild(img);
}


function sendJoueurMessage (txt,idUtil)
{  
 ajax('/workers/sendMessageUtil.php', 'txt='+escape(txt)+'&idUtil='+idUtil, sendJoueurMessageResult);
 return false;
} 

function confirme(texte,ifok,ifko) {
 $('.modalW').remove();
 var str = '';
 str += '<div class="modalW">';
 if ($('#webBody').hasClass('themeSombre'))
 str += '<img src="/Jeu-Tarot-en-ligne/LogoHeaderSm.png" class="modalLogo"/><br>';
 else
 str += '<img src="/Jeu-Tarot-en-ligne/Jeu de tarot en ligne.png" class="modalLogo"/><br>';
 str += '<p>'+texte+'</p>';
 str += '<a id="modYes" class="btn btn-warning btn-lg pbtn">Oui</a>';
 str += ' <a id="modNo" class="btn btn-danger btn-lg pbtn">Annuler</a>';
 str += '</div>';
 
 $(document.body).append(str);
 $('#modYes').click(function () {$('.modalW').remove();if (ifok) ifok(); });
 $('#modNo').click(function () {$('.modalW').remove();if (ifko) ifko(); });
}
function alerte(texte,ifok) {
 $('.modalW').remove();
 var str = '';
 str += '<div class="modalW">';
 if ($('#webBody').hasClass('themeSombre'))
 str += '<img src="/Jeu-Tarot-en-ligne/LogoHeaderSm.png" class="modalLogo"/><br>';
 else
 str += '<img src="/Jeu-Tarot-en-ligne/Jeu de tarot en ligne.png" class="modalLogo"/><br>';
 str += '<p>'+texte+'</p>';
 str += '<a id="modYes" class="btn btn-warning btn-lg pbtn">Ok</a>';
 str += '</div>';
 
 $(document.body).append(str);
 $('#modYes').click(function () {$('.modalW').remove();if (ifok) ifok(); });
}
function redistribuerCPU() {
 if (shalAskForConfirmCardPlay) {
 confirme('Etes vous sûr de vouloir redistribuer ?',function () {
 rpc('redistribuer=1');
 });
 } else {
 rpc('redistribuer=1');
 }
}

var isChelem = false;
function choixAnnonce(num,texte)
{
 notifyUserActivity();
 if (num<3 && !shalAskForConfirmCardPlay ) {
 selMoteur.clearActions();
 clearTO ();
 rpc('call='+num+'&chelem='+isChelem);
 } else {
 var phraseConfirm = 'Etes-vous sûr de vouloir annoncer une '+texte+' ?';
 if (texte=='passe') phraseConfirm = 'Etes-vous sûr de vouloir passer ?';
 confirme(phraseConfirm,function () {
 selMoteur.clearActions();
 clearTO ();
 rpc('call='+num+'&chelem='+isChelem);
 });
 /*if (confirm(phraseConfirm)) {
 }*/
 }
}

function triCartes() {
 //selMoteur.removeAction('Passe');
 selMoteur.removeAction('Trier');
 rpc('triCartes=1');
}
function clearCartesChien () {

 lastIntitule = '';
 selMoteur.hideInfoJeu();
}
function sendJoueurMessageResult(html)
{ 
 if (html=='OK')
 {
 if ($$('messageToSend')!=null) 
  $$('messageToSend').value = '';
 }
 else
 alerte(html);
}

function newRound() {
 isChelem = false;
}
function chelem() {
 confirme('Etes-vous sûr de vouloir annoncer un chelem ?',setChelem); 
}
function appelRoi(num)
{
 notifyUserActivity();
 selMoteur.clearActions();
 clearTO ();
 selMoteur.timeThatRemains(-1,0);
 rpc('appel='+num);
}

function setNoEndSound() {
 canPlayAlertSound = -1;
}
var etapeCourante = '';
function setEtape(etape)
{
 etapeCourante = etape;
}

function btnSoundAction()
{
}

var showedDislikeBtns = false;
function showDislikeBtns()
{
 if (showedDislikeBtns) return;
 selMoteur.addAction('Défi intéressant','voteDefiOK();','btn-success');
 selMoteur.addAction('Défi à supprimer','voteDefiKO();','btn-danger');
}
function voteDefiOK()
{
 selMoteur.clearActions();
 showedDislikeBtns = true;
 selMoteur.addAction('Récapitulatifs partie','closeRecap();','btn-info');
 rpcNoQueue('voteOK=1');
}
function voteDefiKO()
{
 if (confirm('Etes-vous sûr de vouloir signaler ce défi ? 50% de votes négatifs entraineront la suppression du défi.')) {
 selMoteur.clearActions();
 showedDislikeBtns = true;
 selMoteur.addAction('Récapitulatifs partie','closeRecap();','btn-info');
 rpcNoQueue('voteKO=1');
 }
}
function defiJouer()
{       
 clearTO () ;
 selMoteur.clearActions();
 rpc('okLU=1');
}
function defiChanger()
{ 
 selMoteur.showMessagePlateauJeu("Chargement d'un nouveau défi...");
 clearTO () ;
 selMoteur.clearActions();
 selMoteur.setPreneur (-1);
 selMoteur.setScore (whoamiNum,'');
 selMoteur.setDonneurPos(-1);
 rpc('changeDefi=1');
}






var emoticons = new Array();
emoticons[':)'] = '0';
emoticons['8)'] = '1';
emoticons['=3'] = '2';
emoticons[':-J'] = '3';
emoticons[':}'] = '4';
emoticons[';]'] = '5';
emoticons[':c'] = '6';
emoticons['XP'] = '7';
emoticons['8D'] = '8';
emoticons[':('] = '9';
emoticons[':D'] = '10';
emoticons[':\')'] = '11';
emoticons[':\'-('] = '12';
emoticons['I-O'] = '13';
emoticons[':\'('] = '14';
emoticons[':))'] = '15';
emoticons[':)))'] = '16';
emoticons[':x'] = '17';
emoticons['=\\'] = '18';
emoticons[':I'] = '19';
emoticons[':O'] = '20';
emoticons[':-,'] = '21';
emoticons[';D'] = '22';
emoticons[':..'] = '23';
emoticons['=/'] = '24';
emoticons['x)'] = '25';
emoticons['X)'] = '26';
emoticons[':['] = '27';
emoticons['8['] = '28';
emoticons['=[['] = '29';
emoticons['XO'] = '30';
emoticons['X-)'] = '31';
emoticons['=-/'] = '32';
emoticons['=II'] = '33';
emoticons[':II'] = '34';
emoticons[':P'] = '35';
emoticons[':I['] = '36';
emoticons['B)'] = '37';
emoticons['8I'] = '38';
emoticons['I)'] = '39';
emoticons['8X'] = '40';
emoticons['8-P'] = '41';
emoticons['I/'] = '42';
emoticons['B))'] = '43';
emoticons['8-I'] = '44';
emoticons['D('] = '45';
emoticons['D\'('] = '46';
emoticons['P)'] = '47';
emoticons['P))'] = '48';
emoticons['Bonjour !'] = '49';
emoticons['Bien joué !'] = '50';
emoticons['Dommage...'] = '51';
emoticons['Bonsoir'] = '52';
emoticons['Bon jeu'] = '53';
emoticons['Merci'] = '54';
emoticons['Aie'] = '55';
emoticons['Super'] = '56';
emoticons['Pas de chance'] = '57';
emoticons['J\'applaudis !'] = '58';
emoticons['C\'est long...'] = '59';
emoticons['Je vous embrasse !'] = '60';
emoticons['Je pleure !'] = '61';
emoticons['Bravo !'] = '62'

function findEmot(i) {
 for (var ii in emoticons) {
 var ic = emoticons[ii];
 if (i==ic) return ii;
 }
 return false;
}
function checkEmot() {
 for (var i=0;i<65;i++) {
 if (!findEmot(i)) alert(i);
 }
 alert('ok');
}
var myEmots = '';
function setMyEmotList(theList) {
 myEmots = theList.split('|');
}

var firstHtmlEmot = '';
var ppEmottt = null;

function toggleEmot() {
 if (!window.isSmileyOnly ) {
 $('#actBtnsJ').toggle();
 if (firstHtmlEmot == '') {
 
 var str = '';
 ppEmottt = $('#chtput');//.parent();//.html('');
 firstHtmlEmot = ppEmottt.html();
 //for (var i = 0;i<49;i++) {
 for (var ii in myEmots) {
 var i = myEmots[ii];
 str += '<img onclick="sendEmot('+i+');" src="/images/Emoticon/Emoticon'+i+'.png?v2" class="emotIcon"/>';
 //pp.append($('<img onclick="sendEmot('+i+');" src="/images/Emoticon/Emoticon'+i+'.png" class="emotIcon"/>'));
 
 }
 ppEmottt.html(str);
 ppEmottt.css('pointer-events','initial');
 ppEmottt.css('background-color','rgba(255,255,255,.2)');
 } else {
 ppEmottt.html(firstHtmlEmot);
 firstHtmlEmot = '';
 ppEmottt.css('pointer-events','');
 ppEmottt.css('background-color','');
 resetChatInputValidationKeys();
 }
 }
}
function readyStart () {
 rpc('readyStart=1');
 selMoteur.clearActions();
}

function sendEmot(i) {
 var emot = findEmot(i);
 rpcNoQueue('sendChatMsg='+escape(emot).split('+').join('%2B'));
 //sendChatMessage(emot);
 toggleEmot();
}
var chatTemporarilyDisabled = false;
var tmpChatDisHtml = '';
function TmpChatDis() {
 if (!chatTemporarilyDisabled) {
 $('#IMGEMOT').hide();
 $('#actBtnsJ').hide();
 tmpChatDisHtml = $('#chtput').html();
 $('#chtput').html('<input id="chatInput" disabled="disabled" value="Chat désactivé pendant la compétition duplicate" type="text">');
 chatTemporarilyDisabled = true;
 //<input id="chatInput" onfocus="showChatD();" maxlength="255" onclick="showChatD();" type="text">
 }
}
function TmpChatEn() {
 if (chatTemporarilyDisabled) {
 $('#IMGEMOT').show();
 $('#actBtnsJ').show();
 $('#chtput').html(tmpChatDisHtml);
 tmpChatDisHtml = '';
 resetChatInputValidationKeys();
 chatTemporarilyDisabled = false;
 }
}
var keyBindAct = false;
function resetChatInputValidationKeys() {
 var chinp = $$("chatInput");
 if (!chinp) return;
 if (keyBindAct) return;
 keyBindAct = true;

 $(document).keydown(function(e) {
 if (chatTemporarilyDisabled) return;
 if ($('.disableKeyEvents:visible').length>0)
 return;
 if (e.keyCode == 27 && selMoteur.hideChat ) { // escape key maps to keycode `27`
 selMoteur.hideChat();
 e.stopPropagation();
 e.preventDefault();
 return false;
 }

 if(e.target.id != 'chatInput') {
 if (e.which==8) {
 var input = $("#chatInput");
 input.val(input.val().substr(0,input.val().length-1));
 e.preventDefault();
 }
 }
 if (e.keyCode == 13) { // return key maps to keycode `13`

 if (!$$("chatInputBtn")) return;
 if (typeof $$("chatInputBtn").click!=='undefined' && $("#chatInput").val()!='' ) {
  
  $$("chatInputBtn").click();
 e.stopPropagation();
 e.preventDefault();
 } else
  focusChat();

 }
 });

 $(document.body).on('keypress', function(e) {
 if (chatTemporarilyDisabled) return;
 if ($('.disableKeyEvents:visible').length>0)
 return;
 if(e.target.id != 'chatInput') {
 // console.log(e.which,e,String.fromCharCode(e.which),String.fromCharCode(e.which).charCodeAt(0));
 var input = $("#chatInput");
 if (e.key=='Backspace') {
  input.val(input.val().substr(0,input.val().length-1));
  e.preventDefault();
 } else {
  if (String.fromCharCode(e.which).charCodeAt(0))
  input.val(input.val()+String.fromCharCode(e.which));
  e.preventDefault();
 }
 }
 });
 
 $$("chatInput").onkeydown = (function(e){ 
 if (chatTemporarilyDisabled) return; 
 var keycode = null;  
 if(window.event) {  
 keycode = window.event.keyCode;  
 }else if(e) {  
 keycode = e.which;  
 } 
 if(keycode == 13){
 if (typeof $$("chatInputBtn").click!=='undefined') {
 
  $$("chatInputBtn").click();
  e.stopPropagation();
  e.preventDefault();
 }
 }
 });
}



/* *************************************** INSCRIPTION *************************/
function showFormationDistrib(endf) {

 ajax('/workers/forms/showFormationDistrib.php', getFormString($$('formationOptions'),true), function (res) {
 $('#distribInfos').html(res);
 if (endf) endf();
 });
}
function showFormationInto(IDdistribution,numSequence,NBdistribution,nbJoueurs,htmlrecipient) {

 ajax('/workers/forms/showFormationDistrib.php', 'IDdistribution='+IDdistribution+'&numSequence='+numSequence+'&NBdistribution='+NBdistribution+'&nbJoueurs='+nbJoueurs, function (res) {
 $('#'+htmlrecipient).html(res);
 });
}
function getDistribFromDefi() {
 if ($('#defiDistrib').val()=="-") {
 $('#IDdistribution').val('');
 $('#numSequence').val(0);
 $('#NBdistribution').val(0);
 $('#distribInfos').html('');
 return;
 } 
 if ($('#defiDistrib').val()=="Choix") {
 formationRandomDistrib();
 $('.choixDistribPerso').show();
 } else {
 var savedDist = $('#defiDistrib').val().split('_');
 if (savedDist.length>1) {

 $('.choixDistribPerso').hide();
 //var infosDistrib = $('#defiDistrib').val().split('-');
 $('#IDdistribution').val(savedDist[1]);
 $('#numSequence').val(savedDist[2]);
 $('#NBdistribution').val(savedDist[3]);
 $('#formationNbJoueurs').val(savedDist[0]);
 } else {

 $('.choixDistribPerso').hide();
 var infosDistrib = $('#defiDistrib').val().split('-');
 $('#IDdistribution').val(infosDistrib[0]);
 $('#numSequence').val(infosDistrib[1]);
 $('#NBdistribution').val(0);
 $('#formationNbJoueurs').val(4);
 }
 }
 showFormationDistrib();
}
function bgLoadDistrib() {
 ajax('/includes/distributions.php', $('#formDistrib').serialize() , function (res) {
 $('#global').html(res);

 var newurl = window.location.protocol + "//" + window.location.host + '/distributions.php?'+$('#formDistrib').serialize();
 window.history.pushState({path:newurl},'',newurl);
 });
 return false;
}
function deleteSavedDistrib(id) {
 ajax('/workers/delDistribFrm.php', 'id='+id , function (res) {
 alerte(res);
 $('#formDistrib').submit();
 });
 return false;
}
function saveDistribFrm() {
 ajax('/workers/saveDistribFrm.php', $('#formDistrib').serialize()+'&'+$('#saveDistribForm').serialize() , function (res) {
 alerte(res);

 $('#formDistrib').submit();
 });
 return false;
}
function changeSavedGroup() {
 if ($('#selGroup').val()=='-1') {
 $('#newgroupe').show();
 $('#groupe').val( '' );
 
 } else {

 $('#newgroupe').hide();
 $('#groupe').val( $('#selGroup').val() );
 }
}
/*function showPlannedFormations() {
 if (!$$('plannedFormations')) return;
 ajax('/workers/showPlannedFormations.php', '', function (res) {
 $('#plannedFormations').html(res);
 });
}*/
function cancelFormation(id) {
 confirme('Etes-vous sûr de vouloir annuler cette formation ?',function () {
 appelInviter ('cancelFormation='+id );
 });
}
function formationNextMelange() {
 $('#NBdistribution').val(parseInt($('#NBdistribution').val())+1);
 showFormationDistrib();
}
function formationDuplicateDistrib() {
 
 ajax('/workers/getDuplicateDistribution.php', null, function (res) {
 var tab = res.split('|');
 $('#IDdistribution').val(tab[0]);
 $('#NBdistribution').val(tab[1]);
 $('#numSequence').val(tab[2]);
 showFormationDistrib(function () {
 $('#resMainJ'+tab[3]).css('color','#f00');
 });
 });
}
function formationRandomDistrib() {
 var ran = Math.ceil(Math.random()*9999999+9999)+''+Math.ceil(Math.random()*9999999+9999)+''+Math.ceil(Math.random()*9999999+9999)+''+Math.ceil(Math.random()*9999999+9999)+''+Math.ceil(Math.random()*9999999+9999);
 $('#IDdistribution').val(ran);
 ran = Math.ceil(Math.random()*9999999+9999);
 $('#NBdistribution').val(ran);
 ran = Math.ceil(Math.random()*9999999+9999);
 $('#numSequence').val(ran);
 showFormationDistrib();
}
function planifieFormation() {
 if ($('#titreFormation').val()=='') {
 alerte('Veuillez préciser un titre pour la formation');
 return;
 }
 if ($('#IDdistribution').val()=='' && $('#numSequence').val()=='' && $('#NBdistribution').val()=='0') {
 alerte('Veuillez choisir une distribution pour la formation');
 return;
 }
 $('#planFormation').hide();
 ajax('/workers/forms/planFormation.php', getFormString($$('formationOptions'),true), eval_global);
}
function changeNbJoueursFormation() {
 var valNbJoueur = $('#formationNbJoueurs').val();
 if (valNbJoueur==4) {
 $('.formation5Opt').hide();
 $('.choixDistribDefi').show();
 showFormationDistrib();
 } else {
 $('#defiDistrib').val("Choix");
 $('.choixDistribPerso').show();
 $('.formation5Opt').show();
 $('.choixDistribDefi').hide();
 formationRandomDistrib();
 }
}

function showReglesPage() {
 $('li.sel').removeClass('sel');
 $('#LIregles').addClass('sel');
 return showWorkerPageOffline ('regles');
}

function startUpload()
{ 
 if ($$('regPseudo')!=null)
 {
 if ( !$$('regPseudo').value.match(/^[a-z0-9 \.\-_éçàèù]+$/i)) { alerte('Caractères invalides dans le pseudo');return false; };
 //if ( $$('regPseudo').value.split(' ').length>1) { alert('Doubles espaces interdits dans le pseudo');return false; };
 if ( $$('regPseudo').value.length>25) { alerte('Longueur max : 25 caractères');return false; };
 
 $$('regPseudo').value = $$('regPseudo').value.trim();
 }
 return true;
} 
function startUploadCreate()
{ 
 if ($$('regPseudo')!=null)
 {
 if ($$('regPseudo').value=='') {
 alerte('Veuillez saisir un pseudo.');
 return false;
 }
 if ( !$$('regPseudo').value.match(/^[a-z0-9 \.\-_éçàèù]+$/i)) { alerte('Caractères invalides dans le pseudo');return false; };
 //if ( $$('regPseudo').value.split(' ').length>1) { alert('Doubles espaces interdits dans le pseudo');return false; };
 if ( $$('regPseudo').value.length>25) { alerte('Longueur max : 25 caractères');return false; };
 
 $$('regPseudo').value = $$('regPseudo').value.trim();
 }
 return sendFormWork('creationCompte');
} 
function giveUpMode () {
 if (confirm('Etes-vous sûr de vouloir abandonner votre statut ?'))
 ajax('/workers/giveUpMode.php', 'ok=true', alertRes);
}
function giveUpFormateur () {
 if (confirm('Etes-vous sûr de vouloir abandonner votre statut de formateur ?'))
 ajax('/workers/giveUpFormateur.php', 'ok=true', alertRes);
}
function giveUpOrganisateur () {
 if (confirm('Etes-vous sûr de vouloir abandonner votre statut d\'organisateur ?'))
 ajax('/workers/giveUpOrganisateur.php', 'ok=true', alertRes);
}
function getOrganisateur () {
 if (confirm('Etes-vous sûr de vouloir devenir organisateur ?'))
 ajax('/workers/getOrganisateur.php', 'ok=true', alertRes);
}
function valPseudoCh() {

 if ($$('pseudoChF')!=null)
 {
 if ( !$$('pseudoChF').value.match(/^[a-z0-9 \.\-_éçàèù]+$/i)) { alerte('Caractères invalides dans le pseudo');return false; };
 //if ( $$('pseudoChF').value.split(' ').length>1) { alert('Doubles espaces interdits dans le pseudo');return false; };
 if ( $$('pseudoChF').value.length>25) { alerte('Longueur max : 25 caractères');return false; };
 
 $$('pseudoChF').value = $$('pseudoChF').value.trim();
 }
 return true;
}
function register()
{          
 ajax('/workers/register.php', getFormString($$('formLogin'),true), registerResult);
 return false;
} 
function recupCompte()
{          
 ajax('/workers/recupCompte.php', getFormString($$('formRecup'),true).split('&#43;').join('%2B'), alertRes);
 return false;
} 
function sendFormWork(formName)
{          
 ajax('/workers/forms/'+formName+'.php', getFormString($$(formName),true).split('&#43;').join('%2B'), eval_global);
 return false;
} 
function registerResult(html)
{      
 if (html=='OK')
 {      
 inscription();
 }
 else
 alert(html);   
}
function stopUpload(success,idAvat)
{
 var result = '';
 if (success == 1){
 $$('IMGAVATCPT').src='/avatars/'+idAvat; 
 }
 else {
 alert('Erreur');
 }
 return true;
}
    
function inscription()
{
 document.location = '/';
} 
var csqerrajax = 0;
var globalAjaxPreventRefresh = 0;
var lastAjaxRequest = [];

function ajax(_url, vars, callbackFunction) {
 var d = new Date();
 globalAjaxPreventRefresh++;
 var url = _url;
 /*if (url.split('?').length>1)
 url = url+'&srcNum='+(d.getTime()+globalAjaxPreventRefresh);
 else
 url = url+'?srcNum='+(d.getTime()+globalAjaxPreventRefresh);*/
 lastAjaxRequest.push({
 startedAt:new Date(),
 url: url,
 type:'POST',
 data:vars});
 if (lastAjaxRequest.length>3)
 lastAjaxRequest.shift();
 return $.ajax({
 url: url,
 type:'POST',
 data:vars,
 success: function (t) {
 if (t!='' && t!='<HTML></HTML>' && t!='<html></html>' ) {
  csqerrajax = 0;
  if (callbackFunction)
  callbackFunction(t);
 } else {
  if (t!='') {
  csqerrajax++;
  if (csqerrajax<5) {

  setTimeout( function () { ajax(url, vars, callbackFunction); },1000);
  } else {
  var params = {
  url:url,
  csqerrajax:csqerrajax,
  vars:vars,
  lastAjaxRequest:lastAjaxRequest,
  receivedRes:t
  };
  errorLog ('Query Result ERROR', params);
  }
  }
 }
 },
 error: function(data) {
 if (data.statusText=='abort') return;
 csqerrajax++;
 if (csqerrajax<60) {

  setTimeout( function () { ajax(url, vars, callbackFunction); },1000);
 } else {
  var params = {
  status:data.statusText,
  url:url,
  vars:vars,
  lastAjaxRequest:lastAjaxRequest
  };
  errorLog ('Erreur de connexion internet', params);
  
 }
 }
 }); 
}
function notifyGameEnd()
{
 setCurrentGameId (0,false);
 dateDebutPartie=null;
} 
var selectedModeJeu;
function registerStart(html)
{ 
 if (dateDebutPartie!=null) return;      
 if (html=='OK')
 {      
 newGame ('Libre4');
 }
 else
 { 
 if (!$$('global')) return;
 $$('global').innerHTML = html;
 if (selectedModeJeu!=null && $$('modeJeuSalon')!=null) {
  $('#staticMJ').find('img.selected').removeClass('selected');
  $('#salonS'+selectedModeJeu).addClass('selected');
  $('#modeJeuSalon').val(selectedModeJeu);
  selectModeTxt(selectedModeJeu);
 }
 
 var cells = $$('global').getElementsByTagName('script');
 for (var i = 0; i < cells.length; i++) {
  eval(cells[i].innerHTML);
  //alert(cells[i].innerHTML);
 } 
 }
}

jQuery.cachedScript = function( url, options ) {
 
 // Allow user to set any option except for dataType, cache, and url
 options = $.extend( options || {}, {
 dataType: "script",
 cache: true,
 url: url
 });
 
 // Use $.ajax() since it is more flexible than $.getScript
 // Return the jqXHR object so we can chain callbacks
 return jQuery.ajax( options );
};

var resLoaded = false;
var resDownloaded = false;
var lowImagesDownloaded = false;
var errLoadImagesHR = 0;
var CBLadocarteca;
var toloadhr = 0;

function errLoadindHR ( script, textStatus ) { 
 clearTimeout(CBLadocarteca);
 
 if (selMoteur.titreMoteur=='Phaser') {
 if (!phaserDownloaded) {

 $.cachedScript( '/js/phaser.min.2.10.0.js?v=2' ).done(function( script, textStatus ) {
 if (!phaserDownloaded) {
 if (Phaser) {
 clearTimeout(CBLadocarteca);
 phaserDownloaded = true;
 llog('Phaser has been downloaded but err');
 checkWaitingStart();
 } else {
 llog('Downloaderror errLoadind Phaser aft err');
 errLoadindHR();
 
 }
 }
 }).error(function () {
 llog('Downloaderror errLoadind Phaser def');
 errLoadindHR();
 });
 }
 
 }
 if (!resDownloaded) {
 $.cachedScript( '/js/images.js' ).done(function( script, textStatus ) {
 if (!lowImagesDownloaded) {
 clearTimeout(CBLadocarteca);
 lowImagesDownloaded = true;
 llog('images.js has been downloaded');
 checkWaitingStart();
 }
 }).error(function () {
 llog('Downloaderror errLoadind images.js');
 errLoadindHR();
 });
 
 if (typeof cacheCarte!=='undefined') {
 clearTimeout(CBLadocarteca);
 resDownloaded = true;
 llog('Using low quality');
 checkWaitingStart();
 } else {
 errLoadImagesHR++;
 if (errLoadImagesHR<4) {
 dPreloadTestBug++;
 resLoaded = false;
 preloadStartGame();
 showPleaseWait("Nouvelle tentative ("+errLoadImagesHR+"/3)..."); 
 //toloadhr = setTimeout(errLoadindHR,1000);
 } else {

 var params = {
 stack:new Error().stack,
 lastAjaxRequest:lastAjaxRequest,
 resLoaded:resLoaded,
 resDownloaded:resDownloaded
 }
 errorLog ('Erreur de telechargement des ressources', params);
 }
 }
 }
}
var phaserDownloaded = false;
var dPreloadTestBug = 2;
function preloadStartGame() {
 if (resLoaded) return true;
 if (typeof $.cachedScript == 'undefined') return;

 if (recapChatMsgIdPartie) {
 recapChatMsgIdPartie = 0;
 closeConnexion();
 }
 
 resLoaded = true;

 if (selMoteur.titreMoteur=='Phaser') {

 $.cachedScript( '/js/phaser.min.2.10.0.js' ).done(function( script, textStatus ) {
 if (!phaserDownloaded) {
 if (Phaser) {
 clearTimeout(CBLadocarteca);
 phaserDownloaded = true;
 llog('Phaser has been downloaded and is ok');
 checkWaitingStart();
 } else {
 llog('Downloaderror Phaser is not defined');
 errLoadindHR();
 
 }
 }
 }).error(function () {
 llog('Downloaderror errLoadind Phaser');
 errLoadindHR();
 });
 } else {
 phaserDownloaded = true;
 }
 
 
 var scriptX = '/js/imagesHR.js?d='+dPreloadTestBug;
 if ($('#modeleJeuCartes').val()==1) {
 scriptX = '/js/images2HR.js?d='+dPreloadTestBug;
 }
 if ($('#modeleJeuCartes').val()==2) {
 scriptX = '/js/images3HR.js?d='+dPreloadTestBug;
 }
 $.cachedScript( scriptX ).done(function( script, textStatus ) {
 if (!resDownloaded) {
 if (typeof cacheCarteHR=='undefined') {
 llog('Download done but cacheCarteHR undefined'+scriptX+textStatus);
 errLoadindHR();
 } else {
 clearTimeout(CBLadocarteca);
 resDownloaded = true;
 llog('HighRes has been downloaded');
 checkWaitingStart();
 }
 }
 }).error(function () {
 llog('Downloaderror errLoadindHR');
 errLoadindHR();
 });
 

 
 
 CBLadocarteca = setTimeout(errLoadindHR,35000);
}

var dateDebutPartie;
var htmlReglesActions;

function startGame(idPartie)
{
 if (window.__tcfapi != undefined) {
 window.__tcfapi("getTCData", 2, function (tcData, success) {
 if (success) {
  //console.log(tcData);
  if (tcData.gdprApplies) {
  var alltrue = true;
  for (var k in tcData.purpose.consents) {
  if (!tcData.purpose.consents[k]) alltrue = false;
  }
  var allfalse = true;
  for (var k in tcData.vendor.consents) {
  if (tcData.vendor.consents[k]) allfalse = false;
  }
  if (allfalse || !alltrue) {
  var mss = '<h2>Acceptation des cookies</h2><p>Ce jeu necéssite l\'utilisation de cookies afin de pouvoir vivre :<br><a class="btn btn-success sptobt" href="javascript:$(\'#sd-cmp\').show();Sddan.cmp.displayUI()">Modifier mes choix de cookies</a><br>';
  mss += '<br>Vous pouvez également désactiver les publicités en page compte en utilisant des crédits premium :<br>';
  mss += '<a class="btn btn-success sptobt" href="/Compte.php?part=compte">Désactiver les publicités pour 5 crédits premium par mois</a><br><br>';
  mss += 'Ultimement, vous pouvez toujours <a href="javascript:startGameInt(\'';
  if (idPartie) mss += idPartie;
  mss += '\')">continuer de bloquer les cookies</a>';
  mss += '</p>'
  $('#global').html(mss);
  llog( 'NO COOKIES.');
  if (window.tcflis!=1) {

  window.tcflis = 1;
  window.__tcfapi("addEventListener", 2, function (tcData, success) {
  if (success) {
   console.log("Listener has been added with ID " + tcData.listenerId);
   console.log("Event status:" + tcData.eventStatus);
   startGame(idPartie);
  }
  }); 
  }
  return;
  } else startGameInt(idPartie);
  } else startGameInt(idPartie)
 } else startGameInt(idPartie)
 });
 } else startGameInt(idPartie)
}
function startGameInt(idPartie)
{

 
 $('#batMobile').remove();
 if (!mouseMoved) return;
 if ($$('global')==null) return;

 if (idPartie)
 llog('Page jouer idPartie '+idPartie);
 else
 llog('Page jouer ');
 preloadStartGame();
 clearTimeout(salonTO);
 showPleaseWait(); 
 
 if (ajaxCallXhr!=null) ajaxCallXhr.abort();
 $('#liJeu').addClass('sel');
 ajax('/workers/partiesEnCours.php', "etape=start", registerStart);
} 
function byPassSupport() {
 if ($$('global')==null) return;
 preloadStartGame();
 clearTimeout(salonTO);
 showPleaseWait(); 
 if (ajaxCallXhr!=null) ajaxCallXhr.abort();
 $('#liJeu').addClass('sel');
 ajax('/workers/partiesEnCours.php', "oksupport=1&etape=start", registerStart);
 
}
function invitFormation (params)
{ 
 preloadStartGame();
 ajax('/workers/inviter.php?formation', params+'&modeJeuSalon=Formation', registerStart); 
} 
function appelInviter (params)
{ 
 if ($$('global')==null) return;

 numSalonRefresh = 0;
 if ($('#modeJeuSalon').val()==undefined) {
 alert('Une erreur est survenue. Si possible, veuillez signaler la manipulation pour reproduire le bug via le formulaire de contact du site.');
 return;
 } 
 numSalonRefresh = 0;
 clearTimeout(salonTO);
 if ($('#modeJeuSalon').val()!='')
 { 
 selectedModeJeu = $('#modeJeuSalon').val(); 
 if (selectedModeJeu=='Perso' || selectedModeJeu=='Organisation') {
  params += '&nbManches='+$('#nbManches').val(); 
  params += '&nbJoueurs='+$('#nbJoueurs').val(); 
  params += '&persoDelaiJeu='+$('#persoDelaiJeu').val();
  params += '&persoPositionJeu='+$('#persoPositionJeu').val(); 
  params += '&persoDistrib='+$('#persoDistrib').val(); 
  params += '&PersoIDdistribution='+$('#PersoIDdistribution').val(); 
  params += '&PersonumSequence='+$('#PersonumSequence').val(); 
  params += '&PersoNBdistribution='+$('#PersoNBdistribution').val(); 
  params += '&persoAnnonceJeu='+$('#persoAnnonceJeu').val(); 
  params += '&persoPreneurJeu='+$('#persoPreneurJeu').val(); 
  params += '&persoAppelRoiJeu='+$('#persoAppelRoiJeu').val(); 
 }
 if ( selectedModeJeu=='Organisation') {
  params += '&idPartieOrganisee='+$('#idPartie').val(); 
  params += '&nomPartieOrganisee='+$('#titleOrganisation').val(); 
 
 }
 ajax('/workers/inviter.php?perso', params+'&modeJeuSalon='+selectedModeJeu, registerStart);  
 }
} 
/* *************************************** PARTIES PERSOS *************************/
function changePersoNbJoueurs () {
 
 if ($('#nbJoueurs').val()==3) {
 $('.persoMin4').hide();
 $('.persoMin5').hide();
 $('.persoMin6').hide();
 } 
 else if ($('#nbJoueurs').val()==4) {
 $('.persoMin4').show();
 $('.persoMin5').hide();
 $('.persoMin6').hide();
 } else if ($('#nbJoueurs').val()==5) {
 $('.persoMin4').show();
 $('.persoMin5').show();
 $('.persoMin6').hide();
 } else {
 $('.persoMin4').show();
 $('.persoMin5').show();
 $('.persoMin6').show();
 }
 if ($('#nbJoueurs').val()==5) {
 $('.perso5Opts').show();
 } else {
 $('.perso5Opts').hide();
 }
 changeDistribForPerso ();
} 
function changePersoAnnonceJeu() {
 if ($('#persoAnnonceJeu').val()==0 || $('#persoDistrib').val()==0 || $('#nbManches').val()>1 ) {
 $('.persoAnnJOpts').hide();
 }
 else 
 {
 $('.persoAnnJOpts').show();
 
 }
}
function changePersoAnnonceJeu2() {
 if ( $('#persoDistrib').val()==0 || $('#nbManches').val()>1 ) {
 $('.persoAnnJOpts2').hide();
 }
 else 
 {
 $('.persoAnnJOpts2').show();
 
 }
}
function changePersoNbManches () {
 
 if ($('#nbManches').val()>1) {
 $('.uneManche').hide();
 } else {
 $('.uneManche').show();
 }
 changeDistribForPerso ();
 /*var nbManches = $('#nbManches').val();
 if (nbManches>1) {
 $('#persoCout').html(nbManches+' parties');
 } else {
 $('#persoCout').html('1 partie');
 
 }*/
} 
function changeDistribForPerso () {
 var savedDist = $('#persoDistrib').val().split('_');
 if (savedDist.length>1 && $('#nbManches').val()==1) {

 $('.choixDistribPersoPerso').hide();
 $('#distribInfosPerso').show();
 
 $('#PersoIDdistribution').val(savedDist[1]);
 $('#PersonumSequence').val(savedDist[2]);
 $('#PersoNBdistribution').val(savedDist[3]);
 $('#nbJoueurs').val(savedDist[0]);
 showPersoDistrib();
 //changePersoNbJoueurs ();
 
 } else {

 if ($('#persoDistrib').val()>0) {
 $('.choixDistribPersoPerso').show();
 $('#distribInfosPerso').show(); 
 } else {
 $('.choixDistribPersoPerso').hide();
 $('#distribInfosPerso').hide();
 $('#persoAnnonceJeu').val(0);
 $('#persoAppelRoiJeu').val(-1);
 }
 persoRandomDistrib();
 }
 changePersoAnnonceJeu2();
} 
function showPersoDistrib() {

 ajax('/workers/forms/showFormationDistrib.php', 'IDdistribution='+$('#PersoIDdistribution').val()+'&numSequence='+$('#PersonumSequence').val()+'&NBdistribution='+$('#PersoNBdistribution').val()+'&nbJoueurs='+$('#nbJoueurs').val(), function (res) {
 $('#distribInfosPerso').html(res);
 });
}

function persoNextMelange() {
 $('#PersoNBdistribution').val(parseInt($('#PersoNBdistribution').val())+1);
 showPersoDistrib();
}

function persoRandomDistrib() {
 var ran = Math.ceil(Math.random()*9999999+9999)+''+Math.ceil(Math.random()*9999999+9999)+''+Math.ceil(Math.random()*9999999+9999)+''+Math.ceil(Math.random()*9999999+9999)+''+Math.ceil(Math.random()*9999999+9999);
 $('#PersoIDdistribution').val(ran);
 ran = Math.ceil(Math.random()*9999999+9999);
 $('#PersoNBdistribution').val(ran);
 ran = Math.ceil(Math.random()*9999999+9999);
 $('#PersonumSequence').val(ran);
 showPersoDistrib();
}

function appelInviterregisterRefreshDynamicInfos (params)
{  
 numSalonRefresh = 0;
 clearTimeout(salonTO);
 if ($('#modeJeuSalon').val()!='')
 { 
 selectedModeJeu = $('#modeJeuSalon').val(); 
 ajax('/workers/inviter.php?refreshDyn', params+'&modeJeuSalon='+selectedModeJeu, registerRefreshDynamicInfos);  
 }
} 

var lastContentD = '';
function registerRefreshDynamicInfos(html_div)
{ 
 if (dateDebutPartie!=null) return; 
 if ($$('dynamicContent')==null) return;
 if (isDisabledRefreshSalon) return;
 var html_divTAB = html_div.split('pçàp');
 var html = html_divTAB[0];
 var chatContent = html_divTAB[1];

 if (lastContentD != chatContent && $("#mechacnt").size()!=0 ) {
 lastContentD = chatContent;
 $$('mechacnt').innerHTML = chatContent;
 $("#mechacnt").scrollTop($("#mechacnt")[0].scrollHeight);
 }
 $$('dynamicContent').innerHTML = html;
 if (selectedModeJeu!=null && $$('modeJeuSalon')!=null) $$('modeJeuSalon').value = selectedModeJeu;
 
 var cells = $$('dynamicContent').getElementsByTagName('script');
 for (var i = 0; i < cells.length; i++) {
 eval(cells[i].innerHTML);
 } 
 if (!$$('modeJeuSalon')) return;
 if ($$('modeJeuSalon').value=='Formation') {
 $('.hideFormation').hide();
 $('.showFormation').show();
 }
 else {
 $('.hideFormation').show();
 $('.showFormation').hide();
 }
}
var isDisabledRefreshSalon = false;

function appelRefreshDynamicInfos (params)
{  
 clearTimeout(salonTO);  
 
 if ($$('modeJeuSalon')!=null)
 { 
 selectedModeJeu = $$('modeJeuSalon').value; 
 if (selectedModeJeu=='Organisation' && $$('idPartie')!=null) params += '&idPartieOrganisee='+$$('idPartie').value; 
 ajax('/workers/inviter.php?appelRefresh', params+'&modeJeuSalon='+$$('modeJeuSalon').value, registerRefreshDynamicInfos);  
 }
 else
 {
 ajax('/workers/inviter.php?appelRefreshNoModejeu', params, registerRefreshDynamicInfos);
 }
}     
var salonTO = 0; 
function quitGameSalon()
{
 if ($$('global')==null) return;  
 clearTimeout(salonTO);
 ajax('/workers/inviter.php', "etape=quitSalon", registerStart); 
} 
var numSalonRefresh = 0;

function toggleRefresh() {
 var isCheckedStopRefresh = $('#stopRefresh').is(':checked');
 clearTimeout(salonTO);
 if (isCheckedStopRefresh) {
 isDisabledRefreshSalon = true;
 }
 else {
 isDisabledRefreshSalon = false;
 refreshStartGameIntern();
 }
}
function refreshStartGame() {
 numSalonRefresh++;
 clearTimeout(salonTO);
 if (isDisabledRefreshSalon) return;
 if (numSalonRefresh<50)
 salonTO = setTimeout(refreshStartGameIntern,15000);
 else {
 document.location = '/?timeout';
 }
}
function refreshStartGameIntern()
{   
 appelRefreshDynamicInfos ("etape=dynamic");
}
function refreshSalonExtern()
{
 numSalonRefresh = 0;
 appelRefreshDynamicInfos ("etape=dynamic");
}
function accepterInvit(idJoueur,modeJeu)
{
 if ($$('global')==null) return;
 numSalonRefresh = 0;
 notifyGameEnd();
 preloadStartGame();
 if (ajaxCallXhr!=null) ajaxCallXhr.abort();     
 //appelInviter ("etape=start&accepterInvit="+idJoueur+'&gameMode='+modeJeu); 
 llog("Accept invit");
 ajax('/workers/inviter.php?accept', "etape=start&accepterInvit="+idJoueur+'&gameMode='+modeJeu, registerStart);     
}
function getGameName(modeJeu) {

 var nomJeu = 'Libre4';
 if (modeJeu=='Tournoi') nomJeu = 'Tournoi classique à 4 joueurs';
 else if (modeJeu=='Tournoi5') nomJeu = 'Tournoi classique à 5 joueurs';
 else if (modeJeu=='Libre4') nomJeu = 'Jeu libre à 4 joueurs';
 else if (modeJeu=='Libre5') nomJeu = 'Jeu libre à 5 joueurs';
 else if (modeJeu=='Amical4') nomJeu = 'Jeu amical à 4 joueurs';
 else if (modeJeu=='Amical5') nomJeu = 'Jeu amical à 5 joueurs';
 else if (modeJeu=='DonneFixe') nomJeu = 'Tournoi duplicate';
 else if (modeJeu=='Competition4') nomJeu = 'Compétition duplicate D2';
 else if (modeJeu=='Competition5') nomJeu = 'Compétition duplicate D1';
 else if (modeJeu=='Master') nomJeu = 'Compétition des Masters';
 else if (modeJeu=='Duplicate4') nomJeu = 'Tournoi duplicate à 4';
 else if (modeJeu=='Duplicate5') nomJeu = 'Tournoi duplicate à 5';
 else if (modeJeu=='TournoiJour4') nomJeu = 'Tournoi quotidien à 4 joueurs';
 else if (modeJeu=='Challenge') nomJeu = 'Compétition Challenge';
 else if (modeJeu=='Challenge0') nomJeu = 'Eliminatoire Challenge';
 else if (modeJeu=='Challenge1') nomJeu = 'Quart de finale Challenge';
 else if (modeJeu=='Challenge2') nomJeu = 'Demi-finale Challenge';
 else if (modeJeu=='Challenge3') nomJeu = 'Finale Challenge';
 else if (modeJeu=='TournoiJour5') nomJeu = 'Tournoi quotidien à 5 joueurs';
 else if (modeJeu=='Premium4') nomJeu = 'Partie premium à 4 joueurs';
 else if (modeJeu=='Premium5') nomJeu = 'Partie premium à 5 joueurs';
 else if (modeJeu=='5joueurs') nomJeu = 'Partie classée à 5 joueurs';
 else if (modeJeu=='CPU') nomJeu = 'Partie contre l\'ordinateur à 4';
 else if (modeJeu=='CPU5') nomJeu = 'Partie contre l\'ordinateur à 5';
 else if (modeJeu=='CPU3') nomJeu = 'Partie contre l\'ordinateur à 3';
 else if (modeJeu=='CPU6') nomJeu = 'Partie contre l\'ordinateur à 6';
 else if (modeJeu=='Entrainement') nomJeu = 'Défi contre l\'ordinateur';
 else if (modeJeu=='DefiChoisi') nomJeu = 'Défi premium';
 else if (modeJeu=='Perso') nomJeu = 'Partie personnalisée';
 else if (modeJeu=='Organisation') nomJeu = 'Partie organisée';
 else if (modeJeu=='Formation') nomJeu = 'Formation';
 return nomJeu;
}
function cancelPremium() {
 confirme('Etes-vous sûr de vouloir terminer cette partie ?',function () {

 rpc('cancelGame=Y');
 });
}
function continueManche() {
 selMoteur.clearActions();
}
function inviteJoueur(idJoueur)
{
 var nomJeu = getGameName( $('#modeJeuSalon').val() );

 var ttl = 'Etes-vous sûr de vouloir inviter ce joueur en '+nomJeu+' ?';
 if ($('#modeJeuSalon').val()=="Organisation") ttl = 'Etes-vous sûr de vouloir ajouter ce joueur à la partie ?<br><b>L\'invitation ne sera pas envoyée.</b>';

 confirme(ttl,function () {
 notifyGameEnd();
 if (ajaxCallXhr!=null) ajaxCallXhr.abort(); 
 llog('Invite joueur');
 appelInviter ("etape=start&inviteJoueur="+idJoueur+'&gameMode='+$('#modeJeuSalon').val() ); 
 });
}
var inteRejouerSent = false;
function rejouerAvec(strJoueurs,paramsPerso) {
 if (inteRejouerSent) return;
 numSalonRefresh = 0;
 preloadStartGame();
 clearTimeout(salonTO);
 if ($('#modeJeuSalon').val()!='' && $('#modeJeuSalon').val()!=undefined)
 { 
 inteRejouerSent = true; 
 llog('rejouerAvec');
 selectedModeJeu = $('#modeJeuSalon').val(); 
 var params = "etape=start&inviteJoueur="+strJoueurs+'&modeJeuSalon='+selectedModeJeu;
 if (selectedModeJeu=='Perso' || selectedModeJeu=='Organisation') {
  params += '&'+paramsPerso; 
 }
 ajax('/workers/inviter.php?rejouerAvec',params , function() { 
  window.onunload = window.onbeforeunload = null;
  document.location = '/Fin-de-partie.php?replay=1&idPartie='+currentGameId+'&modeJeu='+$('#modeJeuSalon').val();
  });
 
 }
}
function sendJoueurPartie(idUtil,fbuid,reqid) {

 ajax('/workers/validePartieOfferte.php', "idUtil="+idUtil+"&fbuid="+fbuid+"&reqid="+reqid, alertRes); 
}
function confirmerCadeauCredits(idUtil,pseudo,fbuid,reqid)
{
 // if (id!=)
 //sendJoueurMessage (txt,idUtil)
 var resHTML = '<form onsubmit="return false;">';
 //resHTML +='Envoyer un message à '+pseudo+'<br />';
 //<button class="btn btn-lg btn-default pbtn" type="submit">Enregistrer</button>
 resHTML +='<input class="btn ptobt btn-default pbtn" type="button" value="Envoyer" onclick="sendJoueurPartie ('+idUtil+','+fbuid+','+reqid+' );parentHide($(this));" />';
 resHTML +='</form>';
 showDialog('Envoyer une partie de Tournoi gratuite à '+pseudo,resHTML);
}
var cptBobYY = 0;
function sendMsgToJoueur(id,pseudo)
{
 // if (id!=)
 //sendJoueurMessage (txt,idUtil)
 var resHTML = '<form onsubmit="return false;">';
 //resHTML +='Envoyer un message à '+pseudo+'<br />';
 resHTML +='<textarea class="form-control" id="messageTo'+cptBobYY+'"></textarea>';
 //<button class="btn btn-lg btn-default pbtn" type="submit">Enregistrer</button>
 resHTML +='<input class="btn ptobt btn-default pbtn" type="button" value="Envoyer" onclick="sendJoueurMessage ($$(\'messageTo'+cptBobYY+'\').value,'+id+' );parentHide($(this));" />';
 resHTML +='</form>';
 showBigDialog('Envoyer un message à '+pseudo,resHTML);
 cptBobYY++;
}
var intviCpt = 0;
function inviteJoueurPseudo()
{
 var resHTML = '<form onsubmit="return false;">'; 
 resHTML +='Saisissez le pseudo du joueur que vous vouhaitez inviter :<br />';
 resHTML +='<input class="form-control" type="text" id="invitPseudo'+intviCpt+'"/><br />';
 resHTML +='<input class="btn ptobt btn-default pbtn" type="button" value="Inviter" onclick="sendJoueurPseudoInvit ($$(\'invitPseudo'+intviCpt+'\').value );parentHide($(this));" />';
 resHTML +='</form>';
 showDialog('Inviter un joueur',resHTML);
 intviCpt++;
 
 return;
 //pseudo,email             
}
var intviMailCpt = 0;
function inviteJoueurEmail()
{
 var resHTML = '<form onsubmit="return false;">'; 
 resHTML +='Saisissez l\'email de l\'ami que vous vouhaitez inviter :<br />';
 resHTML +='<input class="form-control" type="text" id="invitEmail'+intviMailCpt+'"/><br />';
 resHTML +='<input class="btn ptobt btn-default pbtn" type="button" value="Inviter" onclick="sendJoueurPseudoInvit ($$(\'invitEmail'+intviMailCpt+'\').value );parentHide($(this));" />';
 resHTML +='</form>';
 showDialog('Inviter un joueur par email',resHTML);
 intviCpt++;
 
 return;
 //pseudo,email             
}

function ajouteAmi(idUtil)
{
 ajax('/workers/demandeAmis.php', 'idUtil='+idUtil, alerte); 
}
function ajouteAmiBg(idUtil)
{
 ajax('/workers/demandeAmis.php', 'idUtil='+idUtil); 
}
function deleteAmi(idUtil,pseudo,obj)
{
 if (confirm('Etes-vous sûr de vouloir supprimer '+pseudo+' de votre liste d\'amis ?')) {

 //notifyGameEnd();
 if (ajaxCallXhr!=null) ajaxCallXhr.abort(); 
 ajax('/workers/ami_delete.php', 'idUtil='+idUtil, alerte); 
 //$(obj).parent().parent().hide();
 }
}
function deleteAmiNew(idUtil,pseudo)
{
 if (confirm('Etes-vous sûr de vouloir supprimer '+pseudo+' de votre liste d\'amis ?')) {

 //notifyGameEnd();
 if (ajaxCallXhr!=null) ajaxCallXhr.abort(); 
 ajax('/workers/ami_delete.php', 'idUtil='+idUtil, alerte); 
 $('.myFriend'+idUtil).remove();
 }
}
function accepterDemandeAmis (idUtil,codeVerif)
{  
 clearTimeout(salonTO);
 if ($('#modeJeuSalon').length)
 showWorkerPage('inviter','accepterAmi='+idUtil+'&codeVerif='+codeVerif);
 else
 { 
 //if ($('#modeJeuSalon').val()!='')
 //selectedModeJeu = $('#modeJeuSalon').val(); 
 //showWorkerPage('inviter','accepterAmi='+idUtil+'&codeVerif='+codeVerif);
 ajax('/workers/accepterAmi.php', 'accepterAmi='+idUtil+'&codeVerif='+codeVerif, evalRes);  
 }
} 
function showDemandeAmi (idUtil,_dateInvitation,nomJoueur,codeVerif,image)
{
 var resHTML = '<form class="feedback_form mates'+idUtil+'" onsubmit="return false;">';
 resHTML +='<img class="button" onclick="return showFicheJoueurDyn(\''+nomJoueur+'\');" style="width:20%;float:left;margin-right:8px;margin-bottom:6px;" align="left" src="'+image+'"/>';
 resHTML += 'Vous avez été invité en ami par '+nomJoueur+'<br />';
 resHTML += 'Le <b>'+_dateInvitation+'</b><br><br>';
 resHTML += '<input class="btn btn-warning ptobt pbtn" type="button" onclick="parentHide($(this));" value="Refuser"/>';
 resHTML += '<input class="btn btn-success ptobt pbtn" type="button" onclick="parentHide($(this));accepterDemandeAmis('+idUtil+',\''+codeVerif+'\');" value="Accepter"/>';
 resHTML +='<input class="btn btn-danger ptobt pbtn" type="button" value="Liste noire" onclick="signalerJoueur ('+idUtil+',\''+nomJoueur+'\');parentHide($(this));" />';
 
 resHTML += '<br /></form>';
 showDialog('Demande ami de '+nomJoueur,resHTML);
 /*clearTimeout(TOshowInvits);
 TOshowInvits = setTimeout(displayInvits,200);*/
 playSound ('Button.mp3?v=2');
}

function parentHide(obj)
{
 var nbParent = 10;
 while ( !obj.hasClass('dialogBox') && nbParent>0 && obj.parent()) {
 obj = obj.parent();
 }
 if (obj.hasClass('dialogBox') && obj.attr('id'))
 closeDialog(obj.attr('id'))
 /*
 if (obj && obj.parent() && obj.parent().parent())
 closeDialog(obj.parent().parent().attr('id'))*/
}
function sendJoueurPseudoInvit (pseudo) 
{
 if (ajaxCallXhr!=null) ajaxCallXhr.abort(); 
 llog('sendJoueurPseudoInvit');
 appelInviter ("etape=start&inviteJoueurPseudo="+pseudo+'&gameMode='+$('#modeJeuSalon').val());    
}
function sendJoueurEmailInvit (email) 
{
 if (!echeck(email)) return;
 if (ajaxCallXhr!=null) ajaxCallXhr.abort(); 
 llog('sendJoueurEmailInvit');     
 appelInviter ("etape=start&inviteJoueurEmail="+email+'&gameMode='+$('#modeJeuSalon').val()); 
}
var pendingInvitations = new Array();
var TOshowInvits = 0;

function showInvit (_idPartie,_dateInvitation,_msg,_modeJeu,_descP)
{
 pendingInvitations.push( { 
   idPartie:_idPartie,
   dateInvitation:_dateInvitation,
   msg:_msg,
   modeJeu:_modeJeu,
   descP:_descP
   });
 clearTimeout(TOshowInvits);
 TOshowInvits = setTimeout(displayInvits,200);
}
var cptIv = 0;
function displayInvits()
{
 var iterObj;
 var resHTML = '<form onsubmit="return false;">';
 if (pendingInvitations.length>0)
 {
 iterObj = pendingInvitations.shift();
 cptIv++;
 var nomJeu = 'Libre4';
 if (iterObj.modeJeu=='Tournoi') nomJeu = 'Tournoi classique à 4';
 else if (iterObj.modeJeu=='Tournoi5') nomJeu = 'Tournoi classique à 5';
 else if (iterObj.modeJeu=='Libre4') nomJeu = 'Jeu libre à 4';
 else if (iterObj.modeJeu=='Libre5') nomJeu = 'Jeu libre à 5';
 else if (iterObj.modeJeu=='Amical4') nomJeu = 'Jeu amical à 4';
 else if (iterObj.modeJeu=='Amical5') nomJeu = 'Jeu amical à 5';
 else if (iterObj.modeJeu=='DonneFixe') nomJeu = 'Tournoi duplicate';
 else if (iterObj.modeJeu=='Competition4') nomJeu = 'Compétition duplicate Division 1';
 else if (iterObj.modeJeu=='Competition5') nomJeu = 'Compétition duplicate Division 2';
 else if (iterObj.modeJeu=='Master') nomJeu = 'Compétition des Masters';

 else if (iterObj.modeJeu=='Duplicate4') nomJeu = 'Tournoi duplicate à 4';
 else if (iterObj.modeJeu=='Duplicate5') nomJeu = 'Tournoi duplicate à 5';
 else if (iterObj.modeJeu=='Challenge') nomJeu = 'Compétition Challenge';
 else if (iterObj.modeJeu=="Challenge0") nomJeu = "Eliminatoire Challenge";
 else if (iterObj.modeJeu=="Challenge1") nomJeu = "Quart de finale Challenge";
 else if (iterObj.modeJeu=="Challenge2") nomJeu = "Demi-finale Challenge";
 else if (iterObj.modeJeu=="Challenge3") nomJeu = "Finale Challenge";
 else if (iterObj.modeJeu=='TournoiJour4') nomJeu = 'Tournoi quotidien à 4';
 else if (iterObj.modeJeu=='TournoiJour5') nomJeu = 'Tournoi quotidien à 5';
 else if (iterObj.modeJeu=='Premium4') nomJeu = 'Compétition premium à 4';
 else if (iterObj.modeJeu=='Premium5') nomJeu = 'Compétition premium à 5';
 
 else if (iterObj.modeJeu=='Premium') nomJeu = 'Partie classée';
 else if (iterObj.modeJeu=='Perso') nomJeu = 'Partie perso';
 else if (iterObj.modeJeu=='Organisation') nomJeu = 'Partie organisée';
 else if (iterObj.modeJeu=='5joueurs') nomJeu = 'Partie à 5';
 else if (iterObj.modeJeu=='Formation') nomJeu = 'Formation';
 resHTML += '<b>Vous avez été invité à jouer !</b><br>';
 if (iterObj.descP)
  resHTML += ' <i>'+iterObj.descP+'</i><br />';
 resHTML += '<img align="left" class="MJicon" src="/Jeu-Tarot-en-ligne/Gratuit/Salon/'+iterObj.modeJeu+'.png">';
 resHTML += '<b>'+nomJeu+'</b><br />';
 resHTML += 'Le '+iterObj.dateInvitation+'</b><br>Par : <b>'+iterObj.msg+'<br />';
 resHTML += '<input class="btn btn-warning ptobt pbtn" type="button" onclick="parentHide($(this));" value="Refuser"/> ';
 resHTML += '<input class="btn btn-success ptobt pbtn" type="button" onclick="accepterInvit('+iterObj.idPartie+',\''+iterObj.modeJeu+'\');parentHide($(this));" value="Accepter"/><br />';

 resHTML += '</form>';
 showDialog('Invitation de jeu '+cptIv,resHTML);
 clearTimeout(TOshowInvits);
 TOshowInvits = setTimeout(displayInvits,200);
 playSound ('Button.mp3?v=2');
 }
}

var cptBob = 0;
function showMsgJoueur2(from,pseudo,date,msg)
{
 //sendJoueurMessage (txt,idUtil)
 var resHTML = '<form onsubmit="return false;"><u>'+date+'</u><br />'+msg;
 resHTML +='<br /><br />';
 resHTML +='<textarea id="replyTo'+from+'_'+cptBob+'"></textarea>';
 resHTML +='<input class="btn btn-success ptobt pbtn" type="button" value="repondre" onclick="sendJoueurMessage ($$(\'replyTo'+from+'_'+cptBob+'\').value,'+from+' );parentHide($(this));" />';
 resHTML +='</form>';
 showBigDialog('Message de '+pseudo,resHTML);
 cptBob++;
 playSound ('Button.mp3?v=2');
} 
function showMsgJoueur(idFrom,pseudo,date,msg,image)
{
 var from = idFrom;
 //sendJoueurMessage (txt,idUtil)
 var resHTML = '<form class="feedback_form mates'+idFrom+'" onsubmit="return false;">';
 if (idFrom!=-1) {
 resHTML +='<img class="button" onclick="return showFicheJoueurDyn(\''+pseudo+'\');" style="height:68px;float:left;margin-right:8px;" align="left" src="'+image+'"/>';
 resHTML +=''+date+'<br>'+msg+'<br><br />';
 } else {
 resHTML +=''+date+'<br><div style="max-height:300px;overflow:auto;">'+msg+'</div><br><br />'; 
 }
 if (idFrom!=-1) {
 resHTML +='<textarea class="replyTB" id="replyTo'+idFrom+'_'+cptBob+'"></textarea>';
 resHTML +='<input class="btn btn-success ptobt pbtn" type="button" value="Répondre" onclick="sendJoueurMessage ($$(\'replyTo'+from+'_'+cptBob+'\').value,'+from+' );parentHide($(this));" />';
 } else {
 //resHTML +='<a class="btn btn-success ptobt pbtn" href="/Contact-organisation-jeu-de-tarot.php" />Répondre</a>';
 }
 resHTML +='<input class="btn btn-info ptobt pbtn" type="button" value="Fermer" onclick="parentHide($(this));" />';
 if (idFrom!=-1)
 resHTML +='<input class="btn btn-danger ptobt pbtn" type="button" value="Liste noire" onclick="signalerJoueur ('+idFrom+',\''+pseudo+'\');parentHide($(this));" />';
 resHTML +='</form>';
 if (idFrom!=-1) {
 showBigDialog('Message de '+pseudo,resHTML);
 } else {
 showBigDialog('Notification',resHTML);
 }
 cptBob++;
 playSound ('Button.mp3?v=2');
} 

var audioElement = []; 
var previewSound = false;

function setMusicListVisibility() {
 if ($('#toggleSounds').is(":checked") && $('#toggleMusic').is(":checked")) {
 $('#musicList').show();
 } else {
 $('#musicList').hide();
 }
}
function playSoundEffect (soundName,createNew,volume) {
 if (!gameSoundsEnabled) return;
 playSound (soundName,createNew,volume);
}
function playSound (soundName,createNew,volume) {
 if (document.getElementById('soundEnabled')==null) return;
 if (document.getElementById('soundEnabled').value!='1') return;
 if (createNew) {

 var eltAudio = document.createElement('audio');
 eltAudio.setAttribute('src', '/img/Sounds/'+soundName);
 eltAudio.setAttribute('autoplay', 'autoplay');
 if (volume)
 eltAudio.volume = volume; 
 else
 eltAudio.volume = 0.7; 
 eltAudio.addEventListener("load", function() {
 eltAudio.play();
 }, true);
 eltAudio.onended = function(){
 try {
 eltAudio.remove() //Remove when played.
 } catch (e) {}
 };
 return;
 }
 if (audioElement[soundName] == null) {
 audioElement[soundName] = document.createElement('audio');
 audioElement[soundName].setAttribute('src', '/img/Sounds/'+soundName);
 audioElement[soundName].setAttribute('autoplay', 'autoplay');
 audioElement[soundName].addEventListener("load", function() {
 audioElement[soundName].play();
 }, true);
 } else {
 try {
 audioElement[soundName].stop();
 audioElement[soundName].currentTime = 0;
 } catch (e) {};
 try {
 audioElement[soundName].play();
 } catch (e) {}
 }
}
var TOpreviewSoundStop;
function previewSoundStop(soundName) {
 previewSound.volume = 0;
 try {
 previewSound.stop();
 } catch (e) {};
}
function previewSoundFile(soundName) {
 clearTimeout(TOpreviewSoundStop);
 if (previewSound ) {
 try {
 previewSound.stop();
 previewSound.currentTime = 0;
 } catch (e) {};
 } else {
 previewSound = document.createElement('audio');
 }
 previewSound.volume = 1;
 previewSound.autoplay = true;
 previewSound.src = '/img/Sounds/Music/'+soundName+'.mp3';
 previewSound.addEventListener("load", function() {
 previewSound.play();
 }, true);
 TOpreviewSoundStop = setTimeout(previewSoundStop,5000);
}

var bgAudio;
var musicList;
function setMusicList(list) {
 musicList = list;
}
function playMusic(){
 if (document.getElementById('soundEnabled')==null) return;
 if (document.getElementById('soundEnabled').value!='1') return;
 if (!gameSoundsEnabled) return;
 if (!isMusicEnabledGame) return;

 var tabMusic = musicList.split('_');
 var choice = Math.floor(Math.random()*tabMusic.length);
 
 bgAudio = document.createElement('audio');
 bgAudio.style.display = "none";
 bgAudio.src = '/img/Sounds/Music/'+tabMusic[choice]+'.mp3';
 bgAudio.volume = 0; 
 bgAudio.autoplay = true;
 bgAudio.onended = function(){
 try {
 var Newchoice = Math.floor(Math.random()*tabMusic.length);
 bgAudio.src = '/img/Sounds/Music/'+tabMusic[Newchoice]+'.mp3';
 bgAudio.currentTime = 0;
 bgAudio.play();
 } catch (e) {};
 };
 document.body.appendChild(bgAudio);
 tweenBgAudioVolume();

 if (gcookie('muteMusic')=='1') toggleSound();
}
function tweenBgAudioVolume () {
 if (!gameSoundsEnabled) return;
 if (bgAudio.volume>0.3) return;
 
 bgAudio.volume = bgAudio.volume+1/100;
 setTimeout(tweenBgAudioVolume,1000/15);
}
var gameHasStarted = false;
function notifStart() {
 if (gameHasStarted) return;
 gameHasStarted = true;
 //if (canPlayAlertSound == -1)
 playSound ('Button.mp3?v=2');
}
function stopSound() {
 audioElement.pause();
 audioElement = null;
 //$(audioElement).remove();
}
function setNoSound(noSound) {
 if (document.getElementById('soundEnabled')==null) return;
 document.getElementById('soundEnabled').value=noSound;
}
var isMusicEnabledGame = false;
function enableMusicG() {
 isMusicEnabledGame = true;
 playMusic();
}


function seeUtilisateur(pseudo,params)
{
 showPleaseWait();
 ajax('/workers/joueur.php?joueur='+pseudo,params, clstCallback);
 return false;
} 
function showFicheJoueur (pseudo) {
 showPleaseWait();
 ajax('/workers/joueur.php?joueur='+pseudo,'', clstCallback);
 return false;
} 
function showFicheJoueurDyn (pseudo) {

 showPleaseWait();
 ajax('/workers/joueur.php?joueur='+pseudo,'', clstCallback);
}

function showInfoJoueur(from,date,msg)
{
 //sendJoueurMessage (txt,idUtil)
 var resHTML = '<form onsubmit="return false;">'+msg;
 resHTML +='<br /><br />';
 //resHTML +='<textarea id="replyTo'+from+'_'+cptBob+'"></textarea>';
 resHTML +='<input class="btn btn-lg btn-default ptobt pbtn" type="button" value="OK" onclick="parentHide($(this));" />';
 resHTML +='</form>';
 showDialog('Message de jeu - '+date,resHTML);//date+"<br>"+
 cptBob++;
}

function showBigInfoJoueur(from,date,msg)
{
 //sendJoueurMessage (txt,idUtil)
 var resHTML = '<form onsubmit="return false;">'+msg;
 resHTML +='<br /><br />';
 //resHTML +='<textarea id="replyTo'+from+'_'+cptBob+'"></textarea>';
 resHTML +='<input class="btn btn-lg btn-default ptobt pbtn" type="button" value="OK" onclick="parentHide($(this));" />';
 resHTML +='</form>';
 showBigDialog('Message de jeu - '+date,resHTML);//date+"<br>"+
 cptBob++;
}
function cleanID(id) {
 id = id.toUpperCase();
 id = id.replace( /\t/ , "");
 id = id.replace( /\n/ , "");
 id = id.replace( /\r/ , "");
 id = id.replace( /\b/ , "");
 id = id.replace( /\f/ , "");
 return id.replace( /[^a-zA-Z0-9]/ , "");
}

var dialogNum = 0;
var fifodlg = [];
function chkdlg() {
 if (fifodlg.length>0) {
 if ($('.dialogBox:visible').length==0) {
 var ell = fifodlg.shift();
 showDialog(ell.title,ell.html);
 }

 setTimeout(chkdlg,2000);
 }
}
function showWorkerDialog(page,params,title) {
 ajax('/workers/'+page+'.php', params, function (html) {
 showDialog(title,html);
 });
}
function showDialog(title,html)
{
 dialogNum++;
 var dlgID = dialogNum+"IQQ";
 var dialog = document.createElement('div');
 dialog.id = 'myDialog'+dlgID;
 dialog.className = 'dialogBox';
 dialog.innerHTML = html;
 dialog.title = title;
 document.body.appendChild(dialog);
 $("#myDialog"+dlgID).dialog({ autoOpen: false});
 $("#myDialog"+dlgID).dialog('open');
 return "myDialog"+dlgID; 
}
function closeDlgs() {
 $('#infoBB').remove();
 $('.contMain').show();
}
function showBigDialog_testNew(title,html)
{
 $('.contMain').hide();
 $('#infoBB').remove();
 var close = '<img onclick="closeDlgs();" style="float:right;margin-top:4px;" src="/images/Close.png">';
 $('.contMain').before('<div id="infoBB" class="container ccontMain"><div class="row"><div class="box">'+title+close+'<br>'+html+'</div></div></div>');
 return;
}
function showBigDialog(title,html)
{
 //<div class="container ccontMain"><div class="row"><div class="box">dfgdfgdfg
 //</div></div></div>
 dialogNum++;
 var dlgID = dialogNum+"I";
 var dialog = document.createElement('div');
 dialog.id = 'myDialog'+dlgID;
 dialog.className = 'dialogBox';
 dialog.innerHTML = html;
 dialog.title = title;
 document.body.appendChild(dialog);
 var ww = $(window).width();
 if (ww>550) ww=550;
 $("#myDialog"+dlgID).dialog({ dialogClass : "qsdqsdqsd"+dialogNum,autoOpen: false, minWidth:ww+'px', width:'auto'});
 $("#myDialog"+dlgID).dialog('open');
 $('.qsdqsdqsd'+dialogNum).css('min-width',ww+'px');
 return "myDialog"+dlgID; 
}
function closeDialog(id)
{
 $('#'+id).dialog('close');
 $('#'+id).remove();
}
function HTMLbuttonCode(id) {
 var htmlres = '';
 var arrayBtns = [
 {img:'http://js.nicedit.com/nicEditIcons-latest.gif',txt:'<b></b>',addCSS:'background-position: -54px 0px;'},
 {img:'http://js.nicedit.com/nicEditIcons-latest.gif',txt:'<i></i>',addCSS:'background-position: -126px 0px;'},
 {img:'http://js.nicedit.com/nicEditIcons-latest.gif',txt:'<u></u>',addCSS:'background-position: -342px 0px;'},
 {img:'/images/Couleurs/Table.png',txt:'<table>\\r\\n<tr><td>Col 1</td><td>Col 2</td><td>Col 3</td></tr>\\r\\n<tr><td>Col 1</td><td>Col 2</td><td>Col 3</td></tr>\\r\\n</table>'},
 {img:'/images/Couleurs/HTML1.png',txt:'<coeur>'},
 {img:'/images/Couleurs/HTML2.png',txt:'<trefle>'},
 {img:'/images/Couleurs/HTML3.png',txt:'<carreau>'},
 {img:'/images/Couleurs/HTML4.png',txt:'<pique>'},
 ];
 for (var i in arrayBtns) {
 var btn = arrayBtns[i];
 htmlres += '<div onclick="$(\'#'+id+'\').val($(\'#'+id+'\').val()+\''+btn.txt+'\');" style="float: left; margin-top: 2px;" unselectable="on"><div style="width: 20px; height: 20px;" class=" nicEdit-buttonContain" unselectable="on"><div style="background-color: rgb(239, 239, 239); border: 1px solid rgb(239, 239, 239);" class=" nicEdit-button-undefined" unselectable="on"><div style="width: 18px; height: 18px; overflow: hidden; cursor: pointer; background-image: url(&quot;'+btn.img+'&quot;);'+btn.addCSS+'" class=" nicEdit-button" unselectable="on"></div></div></div></div>';
 }
 htmlres += '<div onclick="openFriends(\''+id+'\');" style="float: left; margin-top: 2px;" unselectable="on"><div style="width: 20px; height: 20px;" class=" nicEdit-buttonContain" unselectable="on"><div style="background-color: rgb(239, 239, 239); border: 1px solid rgb(239, 239, 239);" class=" nicEdit-button-undefined" unselectable="on"><div style="width: 18px; height: 18px; overflow: hidden; cursor: pointer; background-image: url(&quot;/images/Couleurs/HTMLPlayer.png&quot;);" class=" nicEdit-button" unselectable="on"></div></div></div></div>';
 return htmlres;
}
function openFriends(id) {

 $('#sear'+id).remove();
 var div = document.createElement('div');
 div.id = 'sear'+id;
 div.innerHTML = 'Chargement...';
 div.className = 'divFriendsForuum';
 $('#'+id).before(div);
 /*$(div).click(function () {
 $(this).remove();
 });*/

 ajax('/workers/friendsListForum.php', 'id='+id, function (html) {
 div.innerHTML =html;//showDialog(title,html);
 });
}
function addJoueurLink(id, pseudo) {
 $('#'+id).val($('#'+id).val()+'@'+pseudo+' ');
}
function showHTMLbuttons() {
 $('div.htmlbutt').each(function () {
 var idtxt = $(this).attr("idTxt");
 var html = HTMLbuttonCode(idtxt);
 $(this).html(html);
 });
 
 /*<div onclick="$('#postSujet_txt').val($('#postSujet_txt').val()+'<b></b>');" style="float: left; margin-top: 2px;" unselectable="on"><div style="width: 20px; height: 20px;" class=" nicEdit-buttonContain" unselectable="on"><div style="background-color: rgb(239, 239, 239); border: 1px solid rgb(239, 239, 239);" class=" nicEdit-button-undefined" unselectable="on"><div style="width: 18px; height: 18px; overflow: hidden; cursor: pointer; background-image: url(&quot;http://js.nicedit.com/nicEditIcons-latest.gif&quot;); background-position: -54px 0px;" class=" nicEdit-button" unselectable="on"></div></div></div></div>
 <div style="float: left; margin-top: 2px;" unselectable="on"><div style="width: 20px; height: 20px;" class=" nicEdit-buttonContain" unselectable="on"><div style="background-color: rgb(239, 239, 239); border: 1px solid rgb(239, 239, 239);" class=" nicEdit-button-undefined" unselectable="on"><div style="width: 18px; height: 18px; overflow: hidden; cursor: pointer; background-image: url(&quot;http://js.nicedit.com/nicEditIcons-latest.gif&quot;); background-position: -126px 0px;" class=" nicEdit-button" unselectable="on"></div></div></div></div>
 <div style="float: left; margin-top: 2px;" unselectable="on"><div style="width: 20px; height: 20px;" class=" nicEdit-buttonContain" unselectable="on"><div style="background-color: rgb(239, 239, 239); border: 1px solid rgb(239, 239, 239);" class=" nicEdit-button-undefined" unselectable="on"><div style="width: 18px; height: 18px; overflow: hidden; cursor: pointer; background-image: url(&quot;http://js.nicedit.com/nicEditIcons-latest.gif&quot;); background-position: -342px 0px;" class=" nicEdit-button" unselectable="on"></div></div></div></div>
 <div style="float: left; margin-top: 2px;" unselectable="on"><div style="width: 20px; height: 20px;" class=" nicEdit-buttonContain" unselectable="on"><div style="background-color: rgb(239, 239, 239); border: 1px solid rgb(239, 239, 239);" class=" nicEdit-button-undefined" unselectable="on"><div style="width: 18px; height: 18px; overflow: hidden; cursor: pointer; background-image: url(&quot;/images/Couleurs/Table.png&quot;); class=" nicEdit-button" unselectable="on"></div></div></div></div>
 <div style="float: left; margin-top: 2px;" unselectable="on"><div style="width: 20px; height: 20px;" class=" nicEdit-buttonContain" unselectable="on"><div style="background-color: rgb(239, 239, 239); border: 1px solid rgb(239, 239, 239);" class=" nicEdit-button-undefined" unselectable="on"><div style="width: 18px; height: 18px; overflow: hidden; cursor: pointer; background-image: url(&quot;/images/Couleurs/HTML1.png&quot;); class=" nicEdit-button" unselectable="on"></div></div></div></div>
 <div style="float: left; margin-top: 2px;" unselectable="on"><div style="width: 20px; height: 20px;" class=" nicEdit-buttonContain" unselectable="on"><div style="background-color: rgb(239, 239, 239); border: 1px solid rgb(239, 239, 239);" class=" nicEdit-button-undefined" unselectable="on"><div style="width: 18px; height: 18px; overflow: hidden; cursor: pointer; background-image: url(&quot;/images/Couleurs/HTML2.png&quot;); class=" nicEdit-button" unselectable="on"></div></div></div></div>
 <div style="float: left; margin-top: 2px;" unselectable="on"><div style="width: 20px; height: 20px;" class=" nicEdit-buttonContain" unselectable="on"><div style="background-color: rgb(239, 239, 239); border: 1px solid rgb(239, 239, 239);" class=" nicEdit-button-undefined" unselectable="on"><div style="width: 18px; height: 18px; overflow: hidden; cursor: pointer; background-image: url(&quot;/images/Couleurs/HTML3.png&quot;); class=" nicEdit-button" unselectable="on"></div></div></div></div>
 <div style="float: left; margin-top: 2px;" unselectable="on"><div style="width: 20px; height: 20px;" class=" nicEdit-buttonContain" unselectable="on"><div style="background-color: rgb(239, 239, 239); border: 1px solid rgb(239, 239, 239);" class=" nicEdit-button-undefined" unselectable="on"><div style="width: 18px; height: 18px; overflow: hidden; cursor: pointer; background-image: url(&quot;/images/Couleurs/HTML4.png&quot;); class=" nicEdit-button" unselectable="on"></div></div></div></div>
*/
 //$('div.htmlbutt').html( htmlres );
}

function privateStart()
{
 if (window.gameInitBeforeStartGame)
 window.gameInitBeforeStartGame();
 clearTimeout(salonTO);
 if (!mouseMoved) return; 
 showPleaseWait("Chargement des ressources"); 
 
 if (ajaxCallXhr!=null) ajaxCallXhr.abort();
 var d = new Date();
 dateDebutPartie = (d.getTime());
 
 clearTimeout(timeOutSleep);
 //clearSounds();
 clearTO () ;
 cartesSurLeTapis = new Array();
 currentGameId = 0;
 
}
function launchGame(idPartie,gameMode)
{ 
 if (idPartie!=null && idPartie!=undefined ) {

 privateStart();
 gamesStarted = function () {
 llog('launchGame '+idPartie);
 setGameMode(gameMode);
  rpc('etape=start&idPartie='+idPartie); 
 }
 checkWaitingStart();
 } 
}
function newGame (modeJeu)
{
 privateStart();
 gamesStarted = function () {
 llog('newGame '+modeJeu);
 setGameMode(modeJeu);
 rpc('etape=start&modeJeu='+modeJeu);
 }
 checkWaitingStart();
} 
function startUnityGame(modeJeu,cookie) {
 window.vuplex.postMessage({ type: 'newGame', modeJeu: modeJeu, cookie:cookie });
}
function unityAvatar() {
 window.vuplex.postMessage({ type: 'openFile' });
}
function unityImageResult(b64i) {
 $('.avatPreview').attr("src","data:image/jpeg;base64,"+b64i);
 $('#inputImgPreview').val(b64i);
 $('.avatPreview').css('max-width','250px');
 $('.avatPreview').css('max-height','150px');
 $('.avatPreview').show();
 $('#avatVPay').show();
 
}
function replayGameNew(modeJeu,params)
{
 //var modeJeu = 'CPU';
 isReplayedGame = true;
 privateStart();
 preloadStartGame();
 gamesStarted = function () {
 llog('Start replay');
 setGameMode(modeJeu);
 rpc('etape=start&modeJeu='+modeJeu+'&'+params);
 }
 checkWaitingStart();
} 
function replayGame(params)
{
 var modeJeu = 'CPU';
 isReplayedGame = true;
 privateStart();
 preloadStartGame();
 gamesStarted = function () {
 llog('Start replay');
 setGameMode(modeJeu);
 rpc('etape=start&modeJeu=CPU&'+params);
 }
 checkWaitingStart();
} 

var gamesStarted = null;

function checkWaitingStart()
{
 if (gamesStarted)
 showPleaseWait("Téléchargement des ressources graphiques..."); 
 if (gamesStarted && resDownloaded && phaserDownloaded) {
 showPleaseWait("Initialisation..."); 
 llog('Call moteur '+selMoteur.titreMoteur+' initengine');
 selMoteur.initEngine(gamesStarted);
 //gamesStarted();
 }
}
function changeOrganisationPartie() {
 var val = $('#idPartie').val();
 if (val!='0') {
 $('#persoOpts').hide();
 $('#titreOptOrg').hide();
 
 } else {
 $('#persoOpts').show();
 $('#titreOptOrg').show();
 }
}
function selectModeTxt(mode) {
 if (mode=='Tournoi')
 $('#h1Invit').html('Inviter des joueurs en Tournoi classique à 4');
 else if (mode=='Tournoi5')
 $('#h1Invit').html('Inviter des joueurs en Tournoi classique à 5');
 else if (mode=='Libre4')
 $('#h1Invit').html('Inviter des joueurs en Jeu libre à 4');
 else if (mode=='Libre5')
 $('#h1Invit').html('Inviter des joueurs en Jeu libre à 5');
 else if (mode=='Amical4')
 $('#h1Invit').html('Inviter des joueurs en Jeu amical à 4');
 else if (mode=='Amical5')
 $('#h1Invit').html('Inviter des joueurs en Jeu amical à 5');
 else if (mode=='Premium4')
 $('#h1Invit').html('Inviter des joueurs en partie premium à 4');
 else if (mode=='Premium5')
 $('#h1Invit').html('Inviter des joueurs en partie premium à 5');
 else if (mode=='5joueurs')
 $('#h1Invit').html('Inviter des joueurs en partie à 5 classée');
 else if (mode=='DonneFixe')
 $('#h1Invit').html('Inviter des joueurs en Tournoi duplicate');
 else if (mode=='Duplicate4')
 $('#h1Invit').html('Inviter des joueurs en duplicate à 4');
 else if (mode=='Duplicate5')
 $('#h1Invit').html('Inviter des joueurs en duplicate à 5');
 else if (mode=='Perso')
 $('#h1Invit').html('Inviter des joueurs en partie perso.');
 else if (mode=='Organisation')
 $('#h1Invit').html('Inviter des joueurs en partie organisée.');
 else if (mode=='Formation')
 $('#h1Invit').html('');
 else
 $('#h1Invit').html('Inviter des joueurs en '+mode);
 
 if (mode=='Perso' || mode=='Organisation') $('#persoOpts').show();
 else $('#persoOpts').hide();
 
 if (mode=='Organisation') $('.organisationOpts').show();
 else $('.organisationOpts').hide();

 if (mode=='Formation') {
 $('#formationOpts').show();
 $('.hideFormation').hide();
 $('.showFormation').show();
 //showPlannedFormations();
 }
 else {
 $('#formationOpts').hide();
 $('.hideFormation').show();
 $('.showFormation').hide();
 }
}
function selectMode(obj,mode) {
 $('#staticMJ').find('.mjSS').removeClass('selectedmjSS');
 $(obj).addClass('selectedmjSS');
 $('#modeJeuSalon').val(mode);
 selectModeTxt(mode);
}

function delErr (id) {
 //if (confirm('sur ?')) {
 
 $('#erreurn'+id).hide();
 ajax('/workers/delErr.php', 'id='+id, alertRes);
 //}
}
 
var timeOutSleep;
function updateResult(t)
{
 eval(t);
}
function loginUpdateResult(t)
{
 if (t=="OK")
 {
 document.location = '/';
 }
 else 
 alert(t);
}

function changeLogin (user,passwd)
{
 ajax('/workers/register.php', "register[pseudo]="+user+"&register[passwd]="+passwd, loginUpdateResult);
 //return ajax('/workers/mobileUpdate.php?'+str+'&s='+'scr'+scrNum, '', receptionRpc);
 //alert('changeLogin'+user+passwd);
}
function updatePseudo (txt)
{
 ajax('/workers/mobileUpdate.php', "register[pseudo]="+txt, updateResult);
 //alert('updatePseudo'+txt);
}
function updateBiographie (txt)
{
 ajax('/workers/mobileUpdate.php', "register[biographie]="+txt, updateResult);
 //alert('updateBiographie'+txt);
}
function updateAvatar (txt)
{
 ajax('/workers/mobileUpdate.php', "register[avatar]="+txt, updateResult);
 //alert('updateAvatar'+txt);
} 
function receiveAndroidUploadResult(res)
{  
 if (res.split('|').length>1)
 {
 var tabRes = res.split('|');
 if (tabRes[0]=="OK")
 {
  updateAvatar(tabRes[1]);
 }
 else
 {
  alert('Erreur : '+tabRes[1]); 
 }
 }
 else
 {
 alert('Erreur : '+res); 
 }
} 
function resetZoom()
{  
 try {            
 jb.resetZoom();
 } catch (e) {} 
} 
function pageLoadComplete()
{  
 try {          
 jb.pageLoadComplete(); 
 } catch (e) {}
} 
function menuIdentifie()
{
 try {          
 jb.menuIdentifie(); 
 } catch (e) {}
} 

function isTouchDevice(){
 try{
 document.createEvent("TouchEvent");
 return true;
 }catch(e){
 return false;
 }
}
function touchScroll(id){
//return;
 if(isTouchDevice()){ //if touch events exist
 var el=document.getElementById(id);
 var scrollStartPosY=0;
 var scrollStartPosX=0;

 document.getElementById(id).addEventListener("touchstart", function(event) {
 scrollStartPosY=el.scrollTop+event.touches[0].pageY;
 scrollStartPosX=el.scrollLeft+event.touches[0].pageX;
 //event.preventDefault(); // Keep this remarked so you can click on buttons and links in the div
 },false);

 document.getElementById(id).addEventListener("touchmove", function(event) {
 // These if statements allow the full page to scroll (not just the div) if they are
 // at the top of the div scroll or the bottom of the div scroll
 // The -5 and +5 below are in case they are trying to scroll the page sideways
 // but their finger moves a few pixels down or up. The event.preventDefault() function
 // will not be called in that case so that the whole page can scroll.
 if ((this.scrollTop < this.scrollHeight-this.offsetHeight &&
  this.scrollTop+event.touches[0].pageY < scrollStartPosY-5) ||
  (this.scrollTop != 0 && this.scrollTop+event.touches[0].pageY > scrollStartPosY+5))
  event.preventDefault(); 
 if ((this.scrollLeft < this.scrollWidth-this.offsetWidth &&
  this.scrollLeft+event.touches[0].pageX < scrollStartPosX-5) ||
  (this.scrollLeft != 0 && this.scrollLeft+event.touches[0].pageX > scrollStartPosX+5))
  event.preventDefault(); 
 el.scrollTop=scrollStartPosY-event.touches[0].pageY;
 el.scrollLeft=scrollStartPosX-event.touches[0].pageX;
 },false);
 }
} 
function touchScrollX(id){
//return;
 if(isTouchDevice()){ //if touch events exist
 var el=document.getElementById(id);
 var scrollStartPosY=0;
 var scrollStartPosX=0;

 document.getElementById(id).addEventListener("touchstart", function(event) {
 scrollStartPosY=0;//el.scrollTop+event.touches[0].pageY;
 scrollStartPosX=el.scrollLeft+event.touches[0].pageX;
 //event.preventDefault(); // Keep this remarked so you can click on buttons and links in the div
 },false);

 document.getElementById(id).addEventListener("touchmove", function(event) {

 if ((this.scrollTop < this.scrollHeight-this.offsetHeight &&
  this.scrollTop+event.touches[0].pageY < scrollStartPosY-5) ||
  (this.scrollTop != 0 && this.scrollTop+event.touches[0].pageY > scrollStartPosY+5))
  event.preventDefault(); 
 if ((this.scrollLeft < this.scrollWidth-this.offsetWidth &&
  this.scrollLeft+event.touches[0].pageX < scrollStartPosX-5) ||
  (this.scrollLeft != 0 && this.scrollLeft+event.touches[0].pageX > scrollStartPosX+5))
  event.preventDefault(); 
 //el.scrollTop=scrollStartPosY-event.touches[0].pageY;
 el.scrollLeft=scrollStartPosX-event.touches[0].pageX;
 },false);
 }
}  

var isZoomed = false; 
function zoomPlateau(firstCard)
{
 if (isZoomed) return;
 isZoomed = true; 
 var scrollLeft = 0; 
 $('#wrapper').css('overflow','hidden');
 //$(document).css('overflow-y','hidden');
 //$('#wrapper').css('overflow-x','auto');
 $('#wrapper').css('margin-top','-194px');
 //alert(getWinHeight ());   
 $('#wrapper').css('width','980');
 $('#wrapper').css('height','470');

 desactivePositionnemenetCartesHz(); 
 $('meta[name=viewport]').attr('content', 'width=50px;height=10px;'); 
 //$('#wrapper').css('height',getWinHeight () ); 
 if ($$(firstCard)!=null) scrollLeft = parseInt($$(firstCard).style.left)-50;
 window.scroll( scrollLeft ,0);

 if ($$('fullscreen_on')!=null) document.body.removeChild($$('fullscreen_on'));
 
 if ($$('fullscreen_off')==null) 
 {
 var cancelZoom = document.createElement('img'); 
 cancelZoom.src = '/Jeu-Tarot-en-ligne/Icones/fullscreen_off.png';
 cancelZoom.id='fullscreen_off';
 cancelZoom.className='followScroll';
 cancelZoom.width='32';
 cancelZoom.height='32';
 cancelZoom.style.position='absolute';
 cancelZoom.style.top='2px';
 cancelZoom.style.left='2px';
 cancelZoom.onclick = unzoomPalteau;
 
 document.body.appendChild(cancelZoom);
 }     
}
function followScroll()
{
 $('.followScroll').css('position','absolute');
 $('.followScroll').css('left',window.scrollX+'px' );
 $('.followScroll').css('top',window.scrollY+'px' );
 for (var i = 0;i<4;i++)
 {
 $('#newOne'+i).css('position','absolute');
 $('#newOne'+i).css('left',(40*i+30+window.scrollX)+'px' );
 $('#newOne'+i).css('top',window.scrollY+'px' );
 }
}
//window.onscroll = followScroll;

function unzoomPalteau ()
{
 isZoomed = false;
 $('#wrapper').css('overflow','');
 $('#wrapper').css('margin-top','0px');
 $('#wrapper').css('height','auto');
 //$('#wrapper').css('width','980');
 //alert('poi');
 activePositionnemenetCartesHz();
 viewport = document.querySelector("meta[name=viewport]");
 viewport.setAttribute('content', 'width=980;');
 //resetZoom();
 CheckSizeZoom();
 window.scroll( 0,100);
 
 if ($$('fullscreen_off')!=null) document.body.removeChild($$('fullscreen_off'));
 if ($$('fullscreen_on')==null) 
 {
 var cancelZoom = document.createElement('img');
 cancelZoom.src = '/Jeu-Tarot-en-ligne/Icones/fullscreen_on.png';
 cancelZoom.id='fullscreen_on';
 cancelZoom.className='followScroll';
 cancelZoom.width='32';
 cancelZoom.height='32';
 cancelZoom.style.position='absolute';
 cancelZoom.style.top='2px';
 cancelZoom.style.left='2px';
 cancelZoom.onclick = zoomPlateau;
 
 document.body.appendChild(cancelZoom);
 }
}


/*!
 * jCarouselLite - v1.1 - 2014-09-28
 * http://www.gmarwaha.com/jquery/jcarousellite/
 * Copyright (c) 2014 Ganeshji Marwaha
 * Licensed MIT (https://github.com/ganeshmax/jcarousellite/blob/master/LICENSE)
*/

!function(a){a.jCarouselLite={version:"1.1"},a.fn.jCarouselLite=function(b){return b=a.extend({},a.fn.jCarouselLite.options,b||{}),this.each(function(){function c(a){return n||(clearTimeout(A),z=a,b.beforeStart&&b.beforeStart.call(this,i()),b.circular?j(a):k(a),m({start:function(){n=!0},done:function(){b.afterEnd&&b.afterEnd.call(this,i()),b.auto&&h(),n=!1}}),b.circular||l()),!1}function d(){if(n=!1,o=b.vertical?"top":"left",p=b.vertical?"height":"width",q=B.find(">ul"),r=q.find(">li"),x=r.size(),w=x<b.visible?x:b.visible,b.circular){var c=r.slice(x-w).clone(),d=r.slice(0,w).clone();q.prepend(c).append(d),b.start+=w}s=a("li",q),y=s.size(),z=b.start}function e(){B.css("visibility","visible"),s.css({overflow:"hidden","float":b.vertical?"none":"left"}),q.css({margin:"0",padding:"0",position:"relative","list-style":"none","z-index":"1"}),B.css({overflow:"hidden",position:"relative","z-index":"2",left:"0px"}),!b.circular&&b.btnPrev&&0==b.start&&a(b.btnPrev).addClass("disabled")}function f(){t=b.vertical?s.outerHeight(!0):s.outerWidth(!0),u=t*y,v=t*w,s.css({width:s.width(),height:s.height()}),q.css(p,u+"px").css(o,-(z*t)),B.css(p,v+"px")}function g(){b.btnPrev&&a(b.btnPrev).click(function(){return c(z-b.scroll)}),b.btnNext&&a(b.btnNext).click(function(){return c(z+b.scroll)}),b.btnGo&&a.each(b.btnGo,function(d,e){a(e).click(function(){return c(b.circular?w+d:d)})}),b.mouseWheel&&B.mousewheel&&B.mousewheel(function(a,d){return c(d>0?z-b.scroll:z+b.scroll)}),b.auto&&h()}function h(){A=setTimeout(function(){c(z+b.scroll)},b.auto)}function i(){return s.slice(z).slice(0,w)}function j(a){var c;a<=b.start-w-1?(c=a+x+b.scroll,q.css(o,-(c*t)+"px"),z=c-b.scroll):a>=y-w+1&&(c=a-x-b.scroll,q.css(o,-(c*t)+"px"),z=c+b.scroll)}function k(a){0>a?z=0:a>y-w&&(z=y-w)}function l(){a(b.btnPrev+","+b.btnNext).removeClass("disabled"),a(z-b.scroll<0&&b.btnPrev||z+b.scroll>y-w&&b.btnNext||[]).addClass("disabled")}function m(c){n=!0,q.animate("left"==o?{left:-(z*t)}:{top:-(z*t)},a.extend({duration:b.speed,easing:b.easing},c))}var n,o,p,q,r,s,t,u,v,w,x,y,z,A,B=a(this);d(),e(),f(),g()})},a.fn.jCarouselLite.options={btnPrev:null,btnNext:null,btnGo:null,mouseWheel:!1,auto:null,speed:200,easing:null,vertical:!1,circular:!0,visible:3,start:0,scroll:1,beforeStart:null,afterEnd:null}}(jQuery);



function rotateImgsHome() {
 if ($('#rotateIMG0').length==0)
 return;
 var sel = 0;
 //llog('hide #rotateIMG'+i);
 for (var i=0;i<4;i++) {
 if (!$('#rotateIMG'+i).hasClass('hideCarsl'))
 sel = i;
 }
 $('#rotateIMG'+sel).addClass('hideCarsl');
 $('#rotateIMG'+(sel+1)%4).removeClass('hideCarsl');
 
 setTimeout(rotateImgsHome,4000);
}
function getNewsUtil() {
 if ($('#offlineMode').length>0) return;
 if (gamesStarted) return;
 ajax('/workers/getNews.php','', function (txt) { if (gamesStarted) return; evalRes(txt); } );
 setTimeout(getNewsUtil,60000);
}


$(window).ready(function() {


 setAvatCarousel();
 CheckSizeZoom();
 $('#divWrap').css('visibility', 'visible');
 $( window ).resize(function() {
 CheckSizeZoom();
 setCarW();
 checkSelectiveLoading();
 });
 if (typeof $('.carousel').carousel != 'undefined')
 $('.carousel').carousel({
 interval: 5000 //the speed
 });
 $(".reviews .carousel").jCarouselLite({
 visible: 1,
 auto: 10000,
 speed: 800
 });

 
 if ($('#rotateIMG1').length>0) {
 setTimeout(rotateImgsHome,5000);
 }
 setTimeout(function () {

 checkLazyLoads();


 /*(function(d, s, id){
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {return;}
  if (typeof d.createElement=='undefined') return;
  js = d.createElement(s); js.id = id; js.async = true;
  js.src = "/js/images.js";
  if (fjs && fjs.parentNode)
  fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'imagesLowRes'));*/
 
 if ($('#rotateIMG0').length==0) { 
 (function(d, s, id){
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {return;}
  if (typeof d.createElement=='undefined') return;
  js = d.createElement(s); js.id = id;js.async = true;
  js.src = "//connect.facebook.net/fr_FR/sdk.js";
  if (fjs && fjs.parentNode)
  fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));
 }
 
 if (document.getElementById('nocookieconsent')==null) {
  setTimeout(function () { $('.infoAll').html('https://www.jeu-tarot-en-ligne.com est un jeu net-assembly, SASU au capital de 1.000 euros dont le siège social est situé  101 rue de Sèvres lot 1665, 75272 Paris cedex 6, 80809654900023 RCS Paris, contact [arobase] net-assembly.com'); },2000);
 }

 
 },2)
});


var moteurHTML = {}
moteurHTML.titreMoteur = 'HTML OLD';
var selMoteur = moteurHTML;

moteurHTML.initEngine = function (endFunc) {
 endFunc();
}

moteurHTML.hasCardHand = function (name)
{ 
 return $$(name)==null;
}

moteurHTML.createGameBoard = function (modeJeu,chatJoueurs,nbJoueurs,etesVousLa,smileyOnly)
{

 var jeuDiv = document.createElement('div');
 jeuDiv.id = 'Jeu';
 
 
 var equipeHTML = '<div id="divJoueurs">';
 
 for (i=0;i<nbJoueurs;i++)
 {
 equipeHTML += '<div class="jeuEquipier'+nbJoueurs+'j divJoueursDiv" onclick="showJoueurDetails(this);" id="divJoueur'+i+'">';
 equipeHTML += '<div class="pseudo'+nbJoueurs+'j pseudoJTxt" id="spanJoueur'+i+'"></div>';
 equipeHTML += '<div class="joueurCnter">'; 
 equipeHTML += '<div class="infJdiv">'; 
 equipeHTML += '<div class="fstLinEq">'; 
 equipeHTML += '</div>'; 
 equipeHTML += '<div class="gradesJ"></div>'; 
 equipeHTML += '<div id="avatJE">';
 equipeHTML += '<img style="width:100%;" id="joueur'+i+'" src="/avatars/Nobody2.jpg">';
 equipeHTML += '</div>';        
 equipeHTML += '</div>';
 equipeHTML += '<div class="clear"></div>';        
 equipeHTML += '</div>';
 
 
 equipeHTML += '<div id="infJE" class="infosJcomp equipierTaille ToproleAnnonce">'; 
 equipeHTML += '<div class="CRA">'; 
 equipeHTML += '<img id="j'+i+'_do" class="donneurIcon iconeStatut" src="/images/icones/donneur.png?v=2" title="Ce joueur est donneur"/>'; 
 equipeHTML += '<span class="appelRoi" title="Couleur d\'atout"></span>';
 equipeHTML += '<span id="j'+i+'_state_0_1" class="absentJoueur iconeStatut" title="Ce joueur est absent"></span>';
 equipeHTML += '<div id="roleJoueur'+i+'" class="roleJoueur"></div>'; 
 equipeHTML += '</div>'; 
 
 equipeHTML += '<span class="scoreJD" id="spanScoreJoueur'+i+'"></span>';  
 equipeHTML += '</div>';      
 equipeHTML += '</div>';  
 }
 equipeHTML += '</div>'; 
 equipeHTML += '<div class="clear"></div>';  
 equipeHTML += '<h1 id="messagePlace"></h1>';  
 equipeHTML += '<div id="tempsRestant" style="display:none" class="progressBar"><div>&nbsp;</div></div>'; 
 equipeHTML += '<div id="monJeu"></div>'; 
 
 equipeHTML += '<div id="infosJeu" >';
 equipeHTML += '<div id="infosJeuActions" >'; 
 equipeHTML += '</div>';
 equipeHTML += '<div id="infosJeuInfo" >'; 
 equipeHTML += '</div>';  
 equipeHTML += '</div>';
 if (chatJoueurs!=0) {
 equipeHTML += getChatHTML('<u>Conversation</u>');
 }
 
 
 equipeHTML += '<div id="bottomGame">';
 
 
 equipeHTML += '<div class="clear"></div>';
 equipeHTML += '<div id="chatBg" style="padding:1px;">'; 
 equipeHTML += '<table style="" id="chatTable">'; 
 equipeHTML += '<tr>'; 
 if (chatJoueurs!=0 && !window.disableEmoticons) {
 equipeHTML += '<td onclick="toggleEmot();" id="IMGEMOT" style="background-image: url(\'/images/Emoticon/Emoticon0.png?v=4\');"></td>'; 
 } 
 equipeHTML += '<td style="padding-left:4px" id="chtput">';  
 
 //equipeHTML += '<tr><td style="padding-left:4px">';  
 
 if (chatJoueurs!=0 ) {
 if (!smileyOnly)
 equipeHTML += '<input id="chatInput" autocomplete="off" onfocus="showChatD();" maxlength="255" onclick="showChatD();" type="text">';
 else
 equipeHTML += '<input id="chatInput" disabled="disabled" value="'+smileyOnly+'" type="text">';
 }
 
 equipeHTML += '</td><td id="actBtnsJ" style="">'; 
 if (chatJoueurs!=0 && !smileyOnly)
 equipeHTML += '<a id="chatInputBtn" class="btn btn-default btn-bottomGame" onclick="sendChatMessage($$(\'chatInput\').value);" href="#">Dire</a>'; 
 equipeHTML += '</td><td id="IMGMJB" title="'+getGameName(modeJeu)+'" style="background-image: url(\'/Jeu-Tarot-en-ligne/Gratuit/Salon/'+modeJeu+'.png?v=3\');">'; 
 if (document.getElementById('soundEnabled') && document.getElementById('soundEnabled').value=='1') {
 equipeHTML += '</td><td id="muteBtn" title="Activer/Désactiver le son" style="background-image: url(\'/Jeu-Tarot-en-ligne/Jeu/mute.png\');">';
 } 
 equipeHTML += '</td><td id="quitTD"><a style="margin-left:4px;margin-right:14px;" id="BTNQUT" class="btn btn-warning btn-bottomGame" onclick="btnQuitAction();" href="#">Quitter</a>';   
 equipeHTML += '</td></tr></table>';   
 
 equipeHTML += '</div>'; 
 equipeHTML += '</div>';
 equipeHTML += '<div class="clear"></div>'; 
 equipeHTML += '<input type="hidden" id="modeJeuSalon" value="'+modeJeu+'"/> ';
 jeuDiv.innerHTML = equipeHTML;
 $('#webBody').html('');
 $('#webBody').append(jeuDiv);
 

 $('#muteBtn').click(toggleSound);
 if (gcookie('muteMusic')=='1') { gameSoundsEnabled=true;toggleSound(); }
 
 var scrollFix = document.createElement('div');
 scrollFix.id = 'scrollFix';
 $('#webBody').append(scrollFix);
 
 if (chatJoueurs!=0 && !smileyOnly) {
 resetChatInputValidationKeys();
 }
 if (smileyOnly===true) {
 toggleEmot();
 window.isSmileyOnly = true;
 $('#IMGEMOT').hide();
 }
 window.scroll(0,0);
}

moteurHTML.introAction = function ()
{ 
}


var tempoChatHTML = '';
moteurHTML.tempoAddChatLine = function (str)
{ 
 tempoChatHTML += "<br />"+decodeChatLineHTML(str);
}

moteurHTML.flushChatLine = function ()
{ 
 if ( $$('chat')==null) return;
 $$('chat').innerHTML += tempoChatHTML;
 tempoChatHTML = ''; 
 $$('chat').scrollTop= $$('chat').scrollHeight;
}


moteurHTML.addChatLine = function (str)
{  
 if (!window.isSmileyOnly) { 
 if ( $$('chat')==null ) return;  
 //log('addChatLine'+str);
 $$('chat').innerHTML += "<br />"+decodeChatLineHTML(str); 
 $$('chat').scrollTop= $$('chat').scrollHeight;
 }
 var obj = decodeChatLineObj(str);
 
 $('.divJoueursDiv').each(function() {
 if ( this && this.id && $(this).find('.pseudoJTxt').html()==obj[0] )
 selMoteur.showMessageJoueur(parseInt(this.id.split('divJoueur').join('')),obj[1]);
 });

 reorganiseCartes ('fromZomm');
}


moteurHTML.addCard = function (name, action)
{
 var srcI = getCardJSIMG(name);

 cardsNum++;
 if (action=='' || action==null )
 $$('monJeu').innerHTML += '<img class="carteMain cardJeu" id="MonJeu'+name+'" alt="'+name+'" onClick="'+action+'" height="'+cardHeight+'" width="'+cardWidth+'" src="'+srcI+'" style="position:relative;top:'+cardsBestTop+'px;margin-left:'+(-cardWidth/2)+'px;margin-right:'+(-cardWidth/2)+'px;">'; 
 else
 $$('monJeu').innerHTML += '<img class="carteMain cardJeu" alt="'+name+'" id="MonJeu'+name+'" onClick="'+action+'" height="'+cardHeight+'" width="'+cardWidth+'" src="'+srcI+'" style="cursor:pointer;position:absolute;top:'+(cardsBestTop)+'px;margin-left:'+(-cardWidth/2)+'px;margin-right:'+(-cardWidth/2)+'px;">'; //+i*20
} 

moteurHTML.getCards = function () {
 return $$('monJeu').childNodes;
}

moteurHTML.setCardAction = function (name, action)
{ 
 
 if ($$('MonJeu'+name)==null)
 return;
 if (action=='' || action==null)
 {
 $$('MonJeu'+name).onclick = null;
 carteNonSelectionnable('MonJeu'+name);
 $($$('MonJeu'+name)).css('cursor','');
 }
 else 
 {
 $$('MonJeu'+name).onclick = new Function(action) ; 
 $($$('MonJeu'+name)).css('cursor','pointer');
 }
} 


var lastUserEmpty = true;

//var medaillesTypes = [ "Duplicate","Premium4","Premium5","Assiduite","Missions","Politesse","Banchat","Abandon"];

moteurHTML.setUtilisateur = function (num,pseudo, avatar,score,connected,messagesJoueurs,grade,idJoueur)
{ 

 if ($$('spanJoueur'+num).innerHTML != pseudo)
 {
 $('#divJoueur'+num+' .gradesJ').html('');
 if (idJoueur>0) {
 if (!phaserMedalsDisabled) {
 var tabMed = grade.split('-');
 for (var o=0;o<tabMed.length;o++) {
 if (tabMed[o]=='FFT')
 $('#divJoueur'+num+' .gradesJ').append( '<img style="opacity:1" class="iconedJ idcoD" src="/Jeu-Tarot-en-ligne/Signalisatipon-FFT4.png"/>');
 else {
 $('#divJoueur'+num+' .gradesJ').append( '<img style="opacity:1" class="iconedJ idcoD" src="/workers/medailleMin.php?type='+tabMed[o]+'&idJoueur='+idJoueur+'&v='+Math.random()+'"/>');
 }
 }
 }
 } else {
 if (idJoueur==-1) {
 if (!phaserMedalsDisabled) {
  $('#divJoueur'+num+' .gradesJ').append( '<img style="opacity:1" class="iconedJ idcoD" src="/workers/medailleMin.php?type=IA&idJoueur=0&v=1"/>');
 }
 }
 else
 $('#divJoueur'+num+' .gradesJ').append( '<img style="opacity:1" class="iconedJ idcoD" src="/workers/medailleMin.php?type=Wait&idJoueur=0&v=1"/>');
 
 }
 // $$('gradeJoueur'+num+'_'+o).src = '/workers/medailleMin.php?type='+tabMed[o]+'&idJoueur='+idJoueur+'&v=1';//'/images/grades/XXX.php?grade='+(grade)+'&v=4';
 if (pseudo!='Vide' && pseudo!='Libre')
 {  
  lastUserEmpty = false;       
  $('#spanJoueur'+num).css('cursor','pointer');
 }
 else
 { 
  lastUserEmpty = true; 
  $('#spanJoueur'+num).css('cursor','');
 }
 }
 if (avatar!='' && avatar!=null)
 {
 $$('joueur'+num).src = ''+avatar; 
 $('#divJoueur'+num+' .joueurCnter').removeClass('roleNobody'); 
 }
 else
 {
 if (pseudo=='Vide' || pseudo=='Libre') {
  $$('joueur'+num).src = '/avatars/Nobody2.jpg'; 
  selMoteur.setRoleJoueurClass(num,'roleNobody');
 }
 else {
  $('#divJoueur'+num+' .joueurCnter').removeClass('roleNobody');
  $$('joueur'+num).src = '/avatars/Unknown.jpg?v=2'; 
 }
 } 
    
       
 if (connected || pseudo=='Vide' || pseudo=='Libre') {
 //$('#spanJoueur'+num).css('color','#43391f');
 $('#j'+num+'_state_0_1').hide();
 }
 else {
 $('#j'+num+'_state_0_1').css('display','inline-block');
 // $('#spanJoueur'+num).css('color','#000'); 
 }     
 
 var d = new Date();

 if (pseudo=="Vide" )
 {
 $$('spanJoueur'+num).innerHTML = pseudo;
 if (d.getTime()>dateDebutPartie+30*1000)
 {
  if ( $$('spanJoueur'+num).innerHTML != 'Ajouter une IA') {
 $('#divJoueur'+num+' .gradesJ').html('<img style="opacity:1" class="iconedJ idcoD" src="/workers/medailleMin.php?type=Add&idJoueur=0&v=1"/>'); 
  $$('spanJoueur'+num).innerHTML = 'Ajouter une IA';
  $('#divJoueur'+num).data("idPos",num);
  $('#divJoueur'+num).data("imgSrc",avatar);
  $('#divJoueur'+num).data("pseudo",pseudo);
  //setScore (num,);
  $('#spanScoreJoueur'+num).css('cursor','pointer');
  }
 }
 else
 {
 if ( $$('spanJoueur'+num).innerHTML != pseudo) {
 $('#divJoueur'+num+' .gradesJ').html('<img style="opacity:1" class="iconedJ idcoD" src="/workers/medailleMin.php?type=Wait&idJoueur=0&v=1"/>'); 
  $$('spanJoueur'+num).innerHTML = pseudo;
  $('#spanScoreJoueur'+num).css('cursor','');
 }
 }
 }
 else
 { 
 $$('spanJoueur'+num).innerHTML = pseudo;
 $('#divJoueur'+num).data("pseudo",pseudo);
 $('#divJoueur'+num).data("imgSrc",avatar);
 /*if ($$('spanScoreJoueur'+num).innerHTML == 'Ajouter une IA' || $$('spanScoreJoueur'+num).innerHTML.substr(0,8) == 'Ajout IA')
  setScore (num,''); */         
 $('#spanScoreJoueur'+num).css('cursor','');
 //$('#spanScoreJoueur'+num).css('color','#000000');
 }
 
 return; 
} 


 
moteurHTML.cartePreselect = function (obj,name) {
 notifyUserActivity();
 if (advanceCardPlayDisable) return;
 if ($$('masque'+obj.id)!=null) {

 rpcNoQueue('prochaineCarte=');
 $('.masqueCarte').remove();
 nextDelayIsNull = 0;
 } else {

 if (shalAskForConfirmCardPlay || (name=='le petit' && shalAskForconfirmationPetit) ) {
 confirme('Etes-vous sûr de vouloir presélectionner '+name+' ?',function () {
  rpcNoQueue('prochaineCarte='+getCardName(obj));
  $('.masqueCarte').remove();
  carteSelectionnee(obj.id); 
  nextDelayIsNull = 1;
 });
 } else {
  rpcNoQueue('prochaineCarte='+getCardName(obj));
  $('.masqueCarte').remove();
  carteSelectionnee(obj.id); 
  nextDelayIsNull = 1;
 }
 
 }
}


   

function getPlayedCardSizeHTML() {
 var cardWidth;
 if ($(window).width()<978 || true) {
 var cardHeight = $('.joueurCnter').outerHeight()+$('.pseudoJTxt').outerHeight()*2;//$('.roleJoueur').offset().top-$('#divJoueur0 .joueurCnter').offset().top;
 cardWidth = cardHeight*70/129;
 if (cardWidth > $('.divJoueursDiv').outerWidth())
 cardWidth = $('.divJoueursDiv').outerWidth();
 } else {
 cardWidth = $('.divJoueursDiv').outerWidth();
 }
 if (cardWidth>100)
 cardWidth = 100;
 if ($(window).width()<600) {

 if (cardWidth<65)
 cardWidth = 65;
 } else {

 if (cardWidth<75)
 cardWidth = 75;
 }

 return {w:cardWidth,h:cardWidth*129/70};
} 


function carteEpos (num) {
 if ($(window).width()<=600) {

 var sizeCard = getPlayedCardSizeHTML();
 var oneWidth = $('#divJoueur0').width();

 var newPos = $('#divJoueur'+num).offset().left-$('#monJeu').offset().left+oneWidth/2-sizeCard.w/2;//;
 return newPos;
 }
 var sizeCard = getPlayedCardSizeHTML();
 var oneWidth = $('#divJoueur0').width();

 var newPos = $('#divJoueur'+num).offset().left-$('#monJeu').offset().left+oneWidth-sizeCard.w-2;//;
 //var newPos = oneWidth+$('#divJoueur0').offset().left-sizeCard.w;//-($('#divJoueur0').width()-$('.joueurCnter').width())/2+1+$('#divJoueur0').offset().left;

 //newPos += oneWidth*num;
 return newPos;//-parseInt($('#monJeu').css('margin-left'));
}


function getCardPlayerTop() {
 var sizeCard = getPlayedCardSizeHTML();
 var topO = $('.joueurCnter').offset().top-$('#monJeu').offset().top-$('.pseudoJTxt').height();
 
 if (sizeCard.h>$('#divJoueur0 .joueurCnter').outerHeight()+$('.pseudoJTxt').height()*2)
 topO -= (sizeCard.h-$('#divJoueur0 .joueurCnter').outerHeight()-$('.pseudoJTxt').height()*2)/2;//;
 
 return topO;
}

function reposPlayedCardsHTML() {
 var topO = getCardPlayerTop();
 $('.cartesTapis').each(function() {
 if (!$(this).hasClass('rammass'))
 animateId (this.id,carteEpos($(this).data('pos')),topO);
 });
}
 
var cartesSurLeTapis = new Array();

moteurHTML.playOppCard = function (name,opp)
{
 var topO = getCardPlayerTop();
 var ccW = 90;
 if ($('.carteMain').width()) 
 ccW = $('.carteMain').width();
 // c'est une carte a moi qui est joue
 if (opp==whoamiNum && $$('MonJeu'+name)!=null)
 {
 $('.masqueCarte').remove();
 //clearCardsActions (); 
 var myPlayedCard = $$('MonJeu'+name);//MonJeu4_Pique-03.gif
 //if (myPlayedCard==null) alert('bug');
 cartesSurLeTapis[whoamiNum] = name;
 myPlayedCard.style.zIndex=zindexTop;
 zindexTop++;          
 myPlayedCard.id = 'newOne'+whoamiNum;
 myPlayedCard.onclick=null;
 $(myPlayedCard).removeClass('carteMain');
 
 $( myPlayedCard ).animate({
  marginLeft: (-ccW/2)+"px",
  marginRight: (-ccW/2)+"px",
  marginTop: (parseInt($( myPlayedCard ).css('margin-top'))-30)+"px"
  },200,function() { 
  var offs = $(myPlayedCard).offset();
  var sty = 'position:absolute;';
  sty += 'top:'+(offs.top+0*parseInt(myPlayedCard.style.marginTop)-$('#monJeu').offset().top)+'px;';
  sty += 'left:'+(offs.left+0*parseInt(myPlayedCard.style.marginLeft)-$('#monJeu').offset().left)+'px;';
  sty += 'margin-left:0px;';
  sty += 'margin-right:0px;';
  sty += 'margin-top:0px;';
  sty += 'z-index:99;';
  myPlayedCard.setAttribute('style',sty);

  animateId (myPlayedCard.id,carteEpos(whoamiNum),topO);

  $(myPlayedCard).data('pos',opp);
  $(myPlayedCard).addClass('cartesTapis');

  reorganiseCartes ();
  } ); 
 lastMO = null;
 playSoundEffect('CardPlaced.mp3',true);
 return;
 }
 if (opp==null) 
 {
 opp=lastOpp;
 lastOpp++;
 if (lastOpp>3) lastOpp=0;
 }
 cartesSurLeTapis[opp] = name; 
 

 var sizeCard = getPlayedCardSizeHTML();

 var img = $$('newOne'+opp);
 if (img==null)
 {
 img = document.createElement("IMG");
 img.src= getCardJSIMG(name);//cacheCarte[name]; 
 img.style.position='absolute';
 img.style.left=carteEpos(opp)+'px';
 img.style.top=topO+'px'; 
 img.width=sizeCard.w; 
 img.height= sizeCard.h;
 //img.height=cardHeight;
 img.id='newOne'+opp;      
 img.alt=name; 
       
 $$('monJeu').appendChild(img);
 
 $(img).data('pos',opp);
 $(img).addClass('cartesTapis');

 } else {
 img.style.left = carteEpos(opp)+"px";
 img.style.top = topO+"px";
 img.style.width = sizeCard.w;
 img.style.height = sizeCard.h;
 
 }  
 
 img.style.zIndex=zindexTop;
 zindexTop++; 
 
 if (Math.random()<0.5)
 playSoundEffect('cards_02.mp3',true);
 else
 playSoundEffect('cards_01.mp3',true);       
}
moteurHTML.setRoleJoueurClass = function (num,className) {

 $('#divJoueur'+num+' .joueurCnter')
 .removeClass('roleVictoire')
 .removeClass('roleDefaite')
 .removeClass('roleAnnonce')
 .removeClass('rolePreneur')
 .removeClass('rolePreneurPrise')
 .removeClass('rolePreneurGarde')
 .removeClass('rolePreneurGardesans')
 .removeClass('rolePreneurGardecontre')
 .removeClass('roleEquipier')
 .removeClass('roleNobody')
 .removeClass('rolePasse')
 .addClass(className);

 $('#divJoueur'+num+' .pseudoJTxt')
 .removeClass('ToproleVictoire')
 .removeClass('ToproleDefaite')
 .removeClass('ToproleAnnonce')
 .removeClass('ToprolePreneur')
 .removeClass('ToprolePreneurPrise')
 .removeClass('ToprolePreneurGarde')
 .removeClass('ToprolePreneurGardesans')
 .removeClass('ToprolePreneurGardecontre')
 .removeClass('ToproleEquipier')
 .removeClass('ToproleNobody')
 .removeClass('ToprolePasse')
 .addClass('Top'+className);

 $('#divJoueur'+num+' .infosJcomp')
 .removeClass('ToproleVictoire')
 .removeClass('ToproleDefaite')
 .removeClass('ToproleAnnonce')
 .removeClass('ToprolePreneur')
 .removeClass('ToprolePreneurPrise')
 .removeClass('ToprolePreneurGarde')
 .removeClass('ToprolePreneurGardesans')
 .removeClass('ToprolePreneurGardecontre')
 .removeClass('ToproleEquipier')
 .removeClass('ToproleNobody')
 .removeClass('ToprolePasse')
 .addClass('Top'+className);
}

moteurHTML.setPrise = function (num,txt) 
{
 if (txt=='Passe')
 selMoteur.setRoleJoueurClass(num,'rolePasse');
 else if (txt!='')
 selMoteur.setRoleJoueurClass(num,'rolePreneur'+txt.split(' ').join(''));
 else
 selMoteur.setRoleJoueurClass(num,'roleAnnonce');
 if (txt!='') {
 /*$('.roleJoueur').css('position','static');
 $('.roleJoueur').css('position','initial');*/
 }
 $$('roleJoueur'+num).innerHTML = txt; 
 resizeChat();
 autoShowCRA();
}

moteurHTML.setPriseTxt = function (num,txt) 
{

 $$('roleJoueur'+num).innerHTML = txt; 
 autoShowCRA();
}

moteurHTML.setPreneur = function (num,annonce,chelem)
{
 var repNbJ = 5;
 if ($('#divJoueur0').hasClass('jeuEquipier4j'))
 repNbJ = 4;
 if ($('#divJoueur0').hasClass('jeuEquipier3j'))
 repNbJ = 3;

 for ( var i=0;i<repNbJ;i++)
 {
 if (num==-1)
 selMoteur.setRoleJoueurClass(i,'roleAnnonce');
 else if (i==num) {
 selMoteur.setRoleJoueurClass(i,'rolePreneur'+tabAnnonces[annonce].split(' ').join(''));
 } else
 selMoteur.setRoleJoueurClass(i,'roleAnnonce');
 
 if (i==num)
 {
 if (chelem) {
  $$('roleJoueur'+i+'').innerHTML = tabAnnoncesCrt[annonce]+' + chelem'; 
 } else     
  $$('roleJoueur'+i+'').innerHTML = tabAnnonces[annonce]; 
 }
 else
 {
  $$('roleJoueur'+i+'').innerHTML = '';
 }
 }
 resizeChat();
 autoShowCRA();
}

moteurHTML.clearPrise = function (i)
{
 $$('roleJoueur'+i+'').innerHTML = '&nbsp;';
}
function autoShowCRA() {
 for (var i=0;i<4;i++) {

 if ($('#divJoueur'+i+' .CRA').width()<10) {
 $('#divJoueur'+i+' .CRA').hide();
 } else {
 $('#divJoueur'+i+' .CRA').show();
 }
 }
}

moteurHTML.setDonneurPos = function (num) {
 for (var k=0;k<6;k++)
 $('#j'+k+'_do').hide();
 $('#j'+num+'_do').css('display','inline-block');
 showCRA();
}
moteurHTML.setScore = function (num,score)
{
 if ($$('spanScoreJoueur'+num).innerHTML != score) {
 $$('spanScoreJoueur'+num).innerHTML = score;
 if (score!='') {
 $('#spanScoreJoueur'+num).show();
 /*$('.infosJcomp').css('position','static');
 $('.infosJcomp').css('position','initial');*/
 } else {

 $('#spanScoreJoueur'+num).hide();
 }
 }
}


var numActions = 0;
 
moteurHTML.clearActions = function (noscroll)
{
 if (numActions!=0) {
 $$('infosJeuActions').innerHTML = '';
 //selMoteur.hideInfoJeu();
 if (!noscroll) $("html, body").stop().animate({ scrollTop: 0 }, 700);
 }
 numActions = 0; 
}
moteurHTML.addAction = function (name,action,myclass,noscroll)
{
 if (selMoteur.actionExists (name))
 return;
 
 if (numActions==0) {
 $('#infosJeu').show();
 $('#infosJeuActions').show();
 $$('infosJeuActions').innerHTML = '';
 showInfoJeu();
 }
 numActions++;
 //if ( $$('infosJeu').innerHTML.indexOf( 'value="'+name+'"')==-1)
 $$('infosJeuActions').innerHTML += '<a class="actionBtn '+myclass+' btn btn-actionGame" onclick="'+action+'">'+name+'</a>';
 
 if (numActions==1) {
 reorganiseCartes ('fromZomm');
 }
 if (!noscroll)
 $("html, body").stop().animate({ scrollTop: $('#infosJeuActions').offset().top+$('#infosJeuActions').outerHeight()+$('#chatBg').outerHeight()-$(window).height() }, 1000);

}

moteurHTML.actionExists = function (name)
{
 return $$('infosJeuActions').innerHTML.indexOf( name+'</a>')!=-1;
}
moteurHTML.removeAction = function (name)
{
 $('#infosJeuActions a').each(function () {
 if ($(this).html()==name) {
 //console.log('found ');
 $(this).remove();
 }
 
 });
 return;
}
var lastTurnSel = null; 
moteurHTML.setTurn = function (num)
{
 if (etapeCourante =="Terminee")
 {
 selMoteur.clearTurn();           
 }
 else
 {
 if ( $$('selecteurTour')!=null) $$('selecteurTour').style.visibility='visible';
 var oneWidth = $('#divJoueur0').width();
 var newPos = $('#divJoueur'+num).offset().left+oneWidth/2-$('#selecteurTour').width()/2;
 if ( $$('selecteurTour')==null)
 {
  var selector = document.createElement('IMG');
  selector.style.position='absolute';
  selector.style.left=parseInt(newPos)+'px';
  //selector.style.position='absolute';
  selector.style.top='0px';
  //selector.style.zIndex='1';
  //selector.style.left=newPos;
  selector.id='selecteurTour';
  if (isLowGraphism)
  selector.src='/Jeu-Tarot-en-ligne/Icones/SelecteurOFF.png?v=2';
  else
  selector.src='/Jeu-Tarot-en-ligne/Icones/Selecteur.png?v=2';
  $$('Jeu').appendChild(selector);
 }
 $('#selecteurTour').stop().animate( { left: newPos,top:$('#webBody').css('margin-top') }, 700 );
 /*$('.shakeVert').removeClass('shakeVert');
 if (num>=0) {
 $('#divJoueur'+num).addClass('shakeVert');
 }*/
 // var newFx = new Fx.Tween('selecteurTour', { property: 'left' }).start(parseInt($$('selecteurTour').style.left), newPos );
 lastTurnSel = num;
 }
} 
moteurHTML.clearTurn = function () 
{
 if ( $$('selecteurTour')!=null) $$('selecteurTour').style.visibility='hidden';
} 



var lastIntitule = '';
var TOaffCART;

moteurHTML.afficheCartes = function (cartes,intitule)
{   
 if (lastIntitule==intitule && intitule.indexOf('taient dans le chien') === -1) return;
 lastIntitule = intitule;
 var tWidth = $(window).width(); 
 var cartesChien = jQuery.parseJSON(cartes);
 var div = document.createElement("DIV");
 $$('infosJeuInfo').innerHTML = '';
 div.id='carteInfos';

 div.innerHTML = '<h4>'+intitule+'</h4>';
 var div2 = document.createElement("DIV");
 div2.id='carteInfosList';      
 div.appendChild(div2); 
 for (i=0;i<cartesChien.length;i++)
 {
 
 img = document.createElement("IMG");
 img.src= getCardJSIMG(cartesChien[i]);
 img.style.position='relative';
 //img.style.marginBottom='0px'; 
 img.className = 'carteAfficheeInfo cardJeu';
 img.width=cardWidth;
 img.height=cardHeight;
 img.id='carteChien'+i;      
 img.alt=cartesChien[i];      
 div2.appendChild(img); 
 }    
 selMoteur.clearActions();   
 $$('infosJeuInfo').appendChild(div); 
 $('#infosJeu').show(); 
 $('#infosJeuInfo').show(); 
 showInfoJeu();
 //showInfoJeu();
 reorganiseCartes ('fromZomm');
 //TOaffCART = setTimeout(masqueInfoJeu,8000);
} 





moteurHTML.clearMessagePlateauJeu = function ()
{
 $$('monJeu').innerHTML = '';
}
moteurHTML.showMessagePlateauJeu = function (txt)
{
 etapeCourante ="Terminee";  
 //$$('monJeu').style.height='auto';
 $$('monJeu').innerHTML = '<p class="txtEndGame">'+txt+'</p>';
 $('#monJeu').css('padding-bottom','0px');
 resizeChat();
}




var delTOTO = 0;
function progress(percent, $element) {
 var progressBarWidth = percent * $element.width() / 100;
 $element.find('div').css('width', progressBarWidth );//.html(percent + "%&nbsp;");
}
var syncTimeDelay = 0;
var syncTimeTS = 0;
var syncTimeTotal = 0;
var syncTimeInterval = 0;

moteurHTML.timeThatRemains = function (delay,totalTime,ignoreTurn)
{
 //log('il reste '+delay+' secondes');
 if (delay==-1 || (lastTurnSel!=whoamiNum && !ignoreTurn) )// 
 { 
 syncTimeDelay = 0;
 syncTimeTS = 0;
 syncTimeTotal = 0;
 clearInterval(syncTimeInterval);

 $('#tempsRestant').hide();

 }
 else
 { 
 var oldDelay = syncTimeDelay-((new Date().getTime()) - syncTimeTS)/1000;
 //console.log('oldDelay',oldDelay);
 //console.log('err',oldDelay-delay);
 syncTimeDelay = delay;
 syncTimeTS = (new Date().getTime());
 syncTimeTotal = totalTime;
 clearInterval(syncTimeInterval);
 syncTimeInterval = setInterval(function () { intervalTimeRemaining(ignoreTurn); },100);
 
 var newWidth = 0;
 if ( delay>2) newWidth = 10+delay*3;
 
 $('#tempsRestant').show();
 progress(delay*100/totalTime, $('#tempsRestant')); 
 }
}
var canPlayAlertSound = 0;

function intervalTimeRemaining(ignoreTurn) {
 var newDelay = syncTimeDelay-((new Date().getTime()) - syncTimeTS)/1000;
 if (newDelay<0 || (lastTurnSel!=whoamiNum && !ignoreTurn) )// 
 { 
 syncTimeDelay = 0;
 syncTimeTS = 0;
 syncTimeTotal = 0;
 clearInterval(syncTimeInterval);

 $('#tempsRestant').hide();
 return;
 }
 if (newDelay<3 && canPlayAlertSound==0) {
 if (gameSoundsEnabled) playSoundEffect ('Heartbeat3.mp3',true,0.9);
 else playSound ('Button.mp3?v=2');//playSound ('Bip.mp3');
 canPlayAlertSound = 1;
 } else if (newDelay>5 && canPlayAlertSound==1 ) {
 canPlayAlertSound = 0;
 }
 progress(newDelay*100/syncTimeTotal, $('#tempsRestant'));
}





moteurHTML.showMessageJoueur = function (idJoueur,message) {
 if (window.disableEmoticons) return;
 var rand = Math.random();
 if (message=="J'applaudis !") playSoundEffect ('Clap_Hands'+Math.floor(rand*5)+'.mp3',true,0.9);
 else if (message=="C'est long...") playSoundEffect ('Yawn'+(2+Math.floor(rand*2))+'.mp3',true,0.9);
 else if (message=="Je vous embrasse !") playSoundEffect ('Kiss '+Math.ceil(rand*3)+'.mp3',true,0.9);
 else if (message=="Je pleure !") playSoundEffect ('Cry_1Cut.mp3',true,0.9);
 
 if (emoticons[message]) {
  // Définir l'URL de l'émoticône en fonction de la valeur de emoticons[message]
  var iconUrl = emoticons[message] > 61 
      ? 'https://amu11er.github.io/emot' + emoticons[message] + '.png'
      : '/images/Emoticon/Emoticon' + emoticons[message] + '.png?v=4';

  // Créer une nouvelle image avec l'URL appropriée
  var newIcon = $('<img class="emotHTML" style="opacity:0;" src="' + iconUrl + '" />');
  $('#divJoueur' + idJoueur).append(newIcon);
}
 
 $( newIcon ).load(function() {
 newIcon.css('margin-left',$('#divJoueur'+idJoueur).width()/2-newIcon.width()/2 );
 newIcon.css('opacity',1 );
 newIcon.animate({'margin-top':100,opacity:0},2500,function () {
 newIcon.remove();
 });
 });

 return;
 }
 
 if (typeof $('#divJoueur'+idJoueur).tooltip == 'undefined') return;
 if ($('#divJoueur'+idJoueur).attr('title') || $('#divJoueur'+idJoueur).attr('data-original-title')) {
 var pop = $('#divJoueur'+idJoueur).data('fifoMsgs');
 if (!pop)
 pop = [];
 if (pop.length<10)
 pop.push(message);
 $('#divJoueur'+idJoueur).data('fifoMsgs',pop);
 return;
 }


 $('#divJoueur'+idJoueur).attr('title', message);
 $('#divJoueur'+idJoueur).attr('data-placement', "bottom");
 $('#divJoueur'+idJoueur).attr('data-original-title', message)
 .tooltip().tooltip('fixTitle').mouseover();

 playSoundEffect ('Female Voice - Psst '+Math.ceil(Math.random()*2)+'.mp3',true,0.5);
 
 clearTimeout($('#divJoueur'+idJoueur).data('TO'));
 var to = setTimeout(function() {
 $('#divJoueur'+idJoueur).mouseout().attr('title', '').attr('data-original-title', '');
 var pop = $('#divJoueur'+idJoueur).data('fifoMsgs');
 if (pop) {
 if (pop.length>0) {
 var m2 = pop.shift();
 $('#divJoueur'+idJoueur).data('fifoMsgs',pop);
 setTimeout(function () {
 selMoteur.showMessageJoueur(idJoueur,m2);
 },200);

 }
 }
 }, 5000);
 $('#divJoueur'+idJoueur).data('TO', to);
}

var nombreDeJPartie = 4;
var hasAGameStarted = false;
var firstInfoJeuShown = false;

function showInfoJeu()
{
 firstInfoJeuShown = true;
 if ($('#chat:visible').length && !$(document.body).hasClass('bigChat')) {
 $('#infosJeuInfo').show();
 $('#infosJeu').show();
 updateHalfChat();
 return;
 }
 $('#infosJeuInfo').show();
 $('#infosJeu').show();
 updateHalfChat();
} 
moteurHTML.hideInfoJeu = function ()
{
 //numActions = 0; 
 $$('infosJeuInfo').innerHTML = '';
 $('#infosJeuInfo').hide();
 updateHalfChat();
} 


function updateHalfChat()
{
 if ($('#chat:visible').length && !$(document.body).hasClass('bigChat') && firstInfoJeuShown ) 
 $(document.body).addClass('halfChat');
 else
 $(document.body).removeClass('halfChat');
} 

function resizeChat() {
 if ($('#chat').length==0) return;
 if ($(document.body).hasClass('bigChat')) {
 if ($('#chat').is(':visible'))
 $('#chatBg').addClass('chatBgOpen');
 else
 $('#chatBg').removeClass('chatBgOpen');
 var delt = parseInt($('#chat').css('padding-top'))+parseInt($('#chat').css('padding-bottom'));
 if ($('#chat')[0].scrollHeight+$('#chatBg').outerHeight()+$('#chatGradient').height()-delt>$(window).height()) {
 $('#chat').height(Math.max($(window).height()-$('#chatBg').outerHeight()-$('#chatGradient').height()-delt,200));
 } else {
 $('#chat').css('height','');
 }
 } else {
 $('#chatBg').removeClass('chatBgOpen');
 if ($(window).width()>600 || !firstInfoJeuShown)
 $('#chat').css('height',Math.max(180,$(window).height()-$('#chat').offset().top-$('#chatBg').outerHeight()-14));
 else
 $('#chat').css('height','');
 }
 if ($('#chat')[0].scrollHeight>$('#chat').outerHeight()) {

 $('#chatGradient').css('padding-right','20px');
 } else {
 $('#chatGradient').css('padding-right','0px');
 
 }
 $$('chat').scrollTop= $$('chat').scrollHeight;
 
}
function showChatD() {
 $('#chat').show();
 $('#chatGradient').show();
 resizeChat();
}
moteurHTML.hideChat = function () {
 if (!$(document.body).hasClass('bigChat')) return;
 $('#chat').hide();
 $('#chatGradient').hide();
 resizeChat();
}
function chatGrad() {
 var equipeHTML='';
 equipeHTML += '<p id="chatGradient" >'; 
 equipeHTML += '<img class="closeChatBtn closingBtnChat" src="/images/icones/Close.png" onclick="selMoteur.hideChat()"/>'; 
 equipeHTML += '<img class="closeChatBtn" src="/images/icones/Bigger.png" onclick="bigChatD()"/>'; 
 equipeHTML += '</p>'; 
 return equipeHTML;
}
function getChatHTML(val) {
 var equipeHTML='<div class="chatContainer">';
 equipeHTML += chatGrad(); 
 equipeHTML += '<p id="chat">'+val+'</p></div>'; 
 return equipeHTML;
}
function bigChatD() {
 var equipeHTML=getChatHTML($('#chat').html());
 
 if ($(document.body).hasClass('bigChat')) {

 $('.chatContainer').remove();
 $('#infosJeu').after($(equipeHTML));
 $(document.body).removeClass('bigChat');
 } else {

 $('.chatContainer').remove();
 $('#bottomGame').prepend($(equipeHTML));
 $(document.body).addClass('bigChat');
 }
 showChatD();
 updateHalfChat();
 resizeChat();
}
function toggleChatD() {
 if ($('#chat').is(':visible')) selMoteur.hideChat();
 else showChatD();
}


moteurHTML.hideCoulApp = function () {
 $('.appelRoi').html('');
 $('.roleJoueur').html('');
 autoShowCRA();
}
function showCRA() {
 $('.CRA').css('position','static');
 $('.CRA').css('position','initial');
 $('.CRA').css('top','0px');
 resizeChat();
 autoShowCRA();
}
moteurHTML.showCoulApp = function (i,coulNum,txtTete) {
 $('.appelRoi').html('');
 $('#divJoueur'+i+' .appelRoi').html('<img src="/images/Couleurs/'+txtTete+'.png?v=3" class="coulPren iconeStatut"><img src="/images/Couleurs/'+coulNum+'.png" class="coulPren iconeStatut">');
 showCRA();
 
}



moteurHTML.clearMasques = function () {
 $('.masqueCarte').remove();
}
moteurHTML.clearMasque = function (id) {
 if ($$('masque'+id)==null) return;
 $$('monJeu').removeChild($$('masque'+id));
}
moteurHTML.addMasque = function (id,masque) {
 selMoteur.clearMasque(id);
 var img = document.createElement('img');
 img.style.cssText= $$(id).style.cssText;
 img.style.marginLeft = (-parseInt($$(id).style.marginRight)-$('#'+id.split('.').join('\\.')).width() )+'px';
 img.style.marginRight = (parseInt($$(id).style.marginRight))+'px';
 img.id = 'masque'+id;
 img.width = $('#'+id.split('.').join('\\.')).width();
 img.height = cardHeight;
 img.src = '/Jeu-Tarot-en-ligne/Masques/'+masque+'.gif';
 img.className='masqueCarte MasqueB cardJeu';
 img.onclick = function () { $('#'+id.split('.').join('\\.')).trigger('click'); };
 
 $('#'+id.split('.').join('\\.')).after(img);
}




moteurHTML.clearCardsActions = function (except)
{
 selMoteur.timeThatRemains(-1,0);
 $('.masqueCarte').remove();
 $('#tempsRestant').hide();
 var cnt = $$('monJeu').childNodes;
 for (key in cnt) {
 if (cnt[key]!=null && cnt[key].id!=null && cnt[key].id!=except && cnt[key].id.substr(0,6)=='MonJeu' ) 
 {    
  carteNeutre(cnt[key].id);
  //cnt[key].style.top = '0px';
  cnt[key].onclick = null;
  cnt[key].onmouseover = null;
 }
 }
 //unzoomPalteau ();
}
moteurHTML.clearCards = function ()
{   
 lastJeuWidth = -1;
 $('#monJeu').css('padding-bottom','');
 //$$('monJeu').style.height='125px';
 selMoteur.timeThatRemains(-1,0);

 
 $$('monJeu').innerHTML = '';
 cardsNum=0;
 //unzoomPalteau ();
 playSoundEffect('Casino Cards.mp3',true);
}



moteurHTML.setGameMainMsg = function (txt) {
 $$('messagePlace').innerHTML = txt; 
}

moteurHTML.reorganiseCartesReal = function (fromResize)
{ 
 //log('reorganiseCartes');
 if ($$('monJeu')==null) return;


 if ($(window).width()*1.2<$(window).height()) {
 $('#webBody').css('margin-top',25);
 } else {
 $('#webBody').css('margin-top','');
 }
 //if (fromResize==null) CheckSizeZoom();

 if (lastTurnSel!==null) 
 selMoteur.setTurn(lastTurnSel);
 

 
 var windowWidth = $("#monJeu").outerWidth()-32;
 var ccW = 90;
 if ($('.carteMain').width()) {

 ccW = $('.carteMain').width();
 var numCartesJeu=0;
 var cnt = $$('monJeu').childNodes;
 for (key in cnt) { 
  if (cnt[key]!=null && cnt[key].id!=null && cnt[key].id.substr(0,6)=='MonJeu')
  numCartesJeu++;
 } 
 
 var cptmp = 0;
 var numCarteLigne = numCartesJeu;
 var nbLigneCartes = 1;
 var spacingCards = trouveEcartCartes (numCarteLigne,windowWidth,ccW,nbLigneCartes);
 while (spacingCards<35) {
 nbLigneCartes++;
 numCarteLigne = Math.ceil(numCartesJeu/nbLigneCartes);
 spacingCards = trouveEcartCartes (numCarteLigne,windowWidth,ccW,nbLigneCartes);

 }
 //llog('ccW'+ccW+'nbLigneCartes'+nbLigneCartes+'spacingCards'+spacingCards+'windowWidth'+windowWidth+'numCartesJeu'+numCartesJeu);
 
 cardsBestTop = 3;
 
 var isfuncsentResiz = false;

 for (key in cnt) {         
  if (cnt[key]!=null && cnt[key].id!=null && cnt[key].id.substr(0,6)=='MonJeu')
  { 
  var opt = '';
  if (cptmp%numCarteLigne == 0) opt = 'First';
  if (cptmp%numCarteLigne == numCarteLigne-1) opt = 'Last';
  if (cptmp == numCartesJeu-1) opt = 'Last';
  var endf = null;
  if (!isfuncsentResiz) {
  isfuncsentResiz = true;
  //console.log('resizeParam');
  endf = function () {resizeChat(); };
  }
  animateToWidth (cnt[key].id,spacingCards,ccW,opt,endf);
  //if (fromResize=='fromZomm') refreshCardBestTop (cnt[key].id);         
  cptmp++; 
  }
 } 
 }
 if (fromResize=='fromZomm') {
 reposPlayedCardsHTML();
 }
}

//var lesCartesVontEtresRamassees = false; 
moteurHTML.ramassePoignee = function (joueur)
{
 //lesCartesVontEtresRamassees = true;
  
 for (var m=0;m<6;m++)
 {
 if ($$('newOne'+m)!=null)
  $$('newOne'+m).id = 'ramasse'+m ;
 }
 cartesSurLeTapis = new Array();
 setTimeout(function () { ramasseCartesHTML2(joueur); },500);
}


var posRamassC = new Array (20,101,222,343);

moteurHTML.cartePoigneeSelectInit = function (cardName) {
 cartePoigneeSelect($$(cardName));
}

function ramasseCartesHTML2 (joueur)
{      
 for (var m=0;m<6;m++)
 { 
 if ($$('ramasse'+m)!=null)
 {
 $('#ramasse'+m).addClass('rammass');
  var obj = getDistance('ramasse'+m,"divJoueur"+joueur); 
  var distx = carteEpos(joueur);
  
  if ($$('ramasse'+m).alt.split('6_Excuse').length<2)
  animateId ('ramasse'+m,distx,null)

  $$('ramasse'+m).style.marginLeft='0px';
  if (m==joueur)
  $$('ramasse'+m).style.zIndex='100';
 }
 }
 playSoundEffect('card move sound.mp3',true);
 setTimeout(function () { finRamasseCartesHTML(joueur); } ,700); 
}
function finRamasseCartesHTML (joueur)
{
 for (var m=0;m<6;m++)
 {
 $('#ramasse'+m).removeClass('rammass');
 if ($$('ramasse'+m)!=null){
 if (typeof dosDesCartes !=='undefined')
  $$('ramasse'+m).src = imgPresJSprocess(dosDesCartes); 
 else if (typeof versoCarteHR !=='undefined')
  $$('ramasse'+m).src = imgPresJSprocess(versoCarteHR); 
 else
  $$('ramasse'+m).src = versoCarte; 
 }
 }    
 setTimeout(function () { finRamasseCartesHTML2(); } ,600); 
}
var cptLeveesCartes = 0;
function finRamasseCartesHTML2 ()
{
 for (var m=0;m<6;m++)
 { 
 if ($$('ramasse'+m)!=null)
 { 
  $$('monJeu').removeChild($$('ramasse'+m));
 }
 } 
 zindexTop = 10;     
 
} 



function decodeChatLineHTML(txt) {
 //$pseudo,$line,$date,$idUtil
 var tmp = unescape(txt.split('+').join(' ')).split('#');
 var res = tmp[0]+": "+tmp[1]+' <font style="font-size:0.9em;opacity:0.5;">'+tmp[2]+'';
 if (tmp[4])
 res += tmp[4];
 res += "</font>";
 return res;
}



var moteurHTML2 = {};
moteurHTML2.titreMoteur = 'HTML NEW';


moteurHTML2.initEngine = function (endFunc) {
 endFunc();
}

moteurHTML2.hasCardHand = function (name)
{ 
 return $$(name)==null;
}

moteurHTML2.createGameBoard = function (modeJeu,chatJoueurs,nbJoueurs,etesVousLa,smileyOnly)
{

 var jeuDiv = document.createElement('div');
 jeuDiv.id = 'Jeu';
 
 
 var equipeHTML = '<div id="divJoueurs">';
 
 for (i=0;i<nbJoueurs;i++)
 {
 equipeHTML += '<div class="jeuEquipier'+nbJoueurs+'j newRond'+nbJoueurs+'j divJoueursDiv newRondEquipier" onclick="showJoueurDetails(this);" id="divJoueur'+i+'">';
 //equipeHTML += '<div class="pseudo'+nbJoueurs+'j pseudoJTxt" id="spanJoueur'+i+'"></div>';
 equipeHTML += '<div class="joueurCnterRond" id="spanJoueur'+i+'">'; 
 //equipeHTML += '<span class="scoreJD" id="spanScoreJoueur'+i+'"></span>'; 
 //equipeHTML += '<div class="infJdiv">'; 
 //equipeHTML += '<div class="fstLinEq">'; 
 //equipeHTML += '</div>'; 
 //equipeHTML += '<div class="gradesJ"></div>'; 
 //equipeHTML += '<div id="avatJE">';
 equipeHTML += '<img class="imgRDeq" id="joueur'+i+'" src="/workers/avatarJeu.php?myuser=Nobody2&annonce=0&connected=1">';
 //equipeHTML += '</div>';        
 //equipeHTML += '</div>';
 //equipeHTML += '<div class="clear"></div>';        
 equipeHTML += '</div>';
 
 /*
 equipeHTML += '<div id="infJE" class="infosJcomp equipierTaille ToproleAnnonce">'; 
 equipeHTML += '<div class="CRA">'; 
 equipeHTML += '<img id="j'+i+'_do" class="donneurIcon iconeStatut" src="/images/icones/donneur.png?v=2" title="Ce joueur est donneur"/>'; 
 equipeHTML += '<span class="appelRoi" title="Couleur d\'atout"></span>';
 equipeHTML += '<span id="j'+i+'_state_0_1" class="absentJoueur iconeStatut" title="Ce joueur est absent"></span>';
 equipeHTML += '<div id="roleJoueur'+i+'" class="roleJoueur"></div>'; 
 equipeHTML += '</div>'; 
  
 equipeHTML += '</div>'; */      
 equipeHTML += '</div>';  
 }
 equipeHTML += '</div>'; 
 equipeHTML += '<div class="clear"></div>';  
 equipeHTML += '<h1 id="messagePlace"></h1>';  
 equipeHTML += '<div id="tempsRestant" style="display:none" class="progressBar"><div>&nbsp;</div></div>'; 
 equipeHTML += '<div id="monJeu"></div>'; 
 
 equipeHTML += '<div id="infosJeu" >';
 equipeHTML += '<div id="infosJeuActions" >'; 
 equipeHTML += '</div>';
 equipeHTML += '<div id="infosJeuInfo" >'; 
 equipeHTML += '</div>'; 
 equipeHTML += '</div>';
 if (chatJoueurs!=0 && !smileyOnly) {
 equipeHTML += getChatHTML('<u>Conversation</u>');
 }
 
 
 equipeHTML += '<div id="bottomGame">';
 
 
 equipeHTML += '<div class="clear"></div>';
 equipeHTML += '<div id="chatBg" style="padding:1px;">'; 
 equipeHTML += '<table style="" id="chatTable">'; 
 equipeHTML += '<tr>'; 
 if (chatJoueurs!=0 && !window.disableEmoticons) {
 equipeHTML += '<td onclick="toggleEmot();" id="IMGEMOT" style="background-image: url(\'/images/Emoticon/Emoticon0.png?v=4\');"></td>'; 
 } 
 equipeHTML += '<td style="padding-left:4px" id="chtput">';  
 
 /*
 equipeHTML += '<table style="" id="chatTable">';  
 equipeHTML += '<tr><td style="padding-left:4px">'; */  

 if (chatJoueurs!=0 ) {
 if (!smileyOnly)
 equipeHTML += '<input id="chatInput" autocomplete="off" onfocus="showChatD();" onclick="showChatD();" maxlength="255" type="text">';
 else
 equipeHTML += '<input id="chatInput" disabled="disabled" value="'+smileyOnly+'" type="text">';
 }
 
 equipeHTML += '</td><td id="actBtnsJ" style="">'; 
 if (chatJoueurs!=0 && !smileyOnly)
 equipeHTML += '<a id="chatInputBtn" class="btn btn-default btn-bottomGame" onclick="sendChatMessage($$(\'chatInput\').value);">Dire</a>'; 
 equipeHTML += '</td><td id="IMGMJB" title="'+getGameName(modeJeu)+'" style="background-image: url(\'/Jeu-Tarot-en-ligne/Gratuit/Salon/'+modeJeu+'.png?v=3\');">'; 
 if (document.getElementById('soundEnabled') && document.getElementById('soundEnabled').value=='1') {
 equipeHTML += '</td><td id="muteBtn" title="Activer/Désactiver le son" style="background-image: url(\'/Jeu-Tarot-en-ligne/Jeu/mute.png\');">';
 } 
 equipeHTML += '</td><td id="quitTD"><a style="margin-left:4px;margin-right:14px;" id="BTNQUT" class="btn btn-warning btn-bottomGame" onclick="btnQuitAction();">Quitter</a>';   
 equipeHTML += '</td></tr></table>';   
 
 equipeHTML += '</div>'; 
 equipeHTML += '</div>';
 equipeHTML += '<div class="clear"></div>'; 
 equipeHTML += '<input type="hidden" id="modeJeuSalon" value="'+modeJeu+'"/> ';
 jeuDiv.innerHTML = equipeHTML;
 $('#webBody').html('');
 $('#webBody').append(jeuDiv);
 
 $('#muteBtn').click(toggleSound);
 if (gcookie('muteMusic')=='1') { gameSoundsEnabled=true;toggleSound(); }

 var scrollFix = document.createElement('div');
 scrollFix.id = 'scrollFix';
 $('#webBody').append(scrollFix);
 
 if (chatJoueurs!=0 && !smileyOnly) {
 resetChatInputValidationKeys();
 }
 if (smileyOnly===true) {
 toggleEmot();
 window.isSmileyOnly = true;
 $('#IMGEMOT').hide();
 }
 window.scroll(0,0);
}


moteurHTML2.introAction = function ()
{ 
}


var tempoChatHTML = '';
moteurHTML2.tempoAddChatLine = function (str)
{ 
 tempoChatHTML += "<br />"+decodeChatLineHTML(str);
}

moteurHTML2.flushChatLine = function ()
{ 
 if ( $$('chat')==null) return;
 $$('chat').innerHTML += tempoChatHTML;
 tempoChatHTML = ''; 
 $$('chat').scrollTop= $$('chat').scrollHeight;
}


moteurHTML2.addChatLine = function (str)
{ 
 if ( $$('chat') ) {

 //log('addChatLine'+str);
 $$('chat').innerHTML += "<br />"+decodeChatLineHTML(str); 
 $$('chat').scrollTop= $$('chat').scrollHeight;
 }
 var obj = decodeChatLineObj(str);
 
 $('.divJoueursDiv').each(function() {
 var numSX = parseInt(this.id.split('divJoueur').join(''));
 if ( this && this.id && $('#spanJoueur'+numSX).data('myuser')==obj[0] )
 selMoteur.showMessageJoueur(numSX,obj[1]);
 });

 reorganiseCartes ();
}


moteurHTML2.addCard = function (name, action)
{
 var srcI = getCardJSIMG(name);
 var sizes = getPlayedCardSizeHTML2();
 //console.log('addcard',sizes);
 cardsNum++;
 if (action=='' || action==null )
 $$('monJeu').innerHTML += '<img class="carteMain cardJeu" id="MonJeu'+name+'" alt="'+name+'" onClick="'+action+'" height="239" width="130" src="'+srcI+'" style="position:relative;top:'+cardsBestTop+'px;margin-left:'+(-cardWidth/2)+'px;margin-right:'+(-cardWidth/2)+'px;">'; 
 else
 $$('monJeu').innerHTML += '<img class="carteMain cardJeu" id="MonJeu'+name+'" alt="'+name+'" onClick="'+action+'" height="239" width="130" src="'+srcI+'" style="cursor:pointer;position:absolute;top:'+(cardsBestTop)+'px;margin-left:'+(-cardWidth/2)+'px;margin-right:'+(-cardWidth/2)+'px;">'; //+i*20
} 

moteurHTML2.getCards = function () {
 return $$('monJeu').childNodes;
}

moteurHTML2.setCardAction = function (name, action)
{ 
 
 if ($$('MonJeu'+name)==null)
 return;
 if (action=='' || action==null)
 {
 $$('MonJeu'+name).onclick = null;
 carteNonSelectionnable('MonJeu'+name);
 $($$('MonJeu'+name)).css('cursor','');
 }
 else 
 {
 $$('MonJeu'+name).onclick = new Function(action) ; 
 $($$('MonJeu'+name)).css('cursor','pointer');
 }
} 


var lastUserEmpty = true;

//var medaillesTypes = [ "Duplicate","Premium4","Premium5","Assiduite","Missions","Politesse","Banchat","Abandon"];
var rndMEED = Math.random();
moteurHTML2.refreshUtilisateur = function (num)
{ 
 ldWebfont();
 var annonce = 0;
 if ($('#spanJoueur'+num).data('annonce'))
 annonce = $('#spanJoueur'+num).data('annonce');

 var appelC = 0;
 if ($('#spanJoueur'+num).data('appelC'))
 appelC = $('#spanJoueur'+num).data('appelC');

 var appelN = 0;
 if ($('#spanJoueur'+num).data('appelN'))
 appelN = $('#spanJoueur'+num).data('appelN');

 var otherInfos = '';
 if ($('#spanJoueur'+num).data('otherInfos'))
 otherInfos = $('#spanJoueur'+num).data('otherInfos');
 
 var connected = 0;
 if ($('#spanJoueur'+num).data('connected'))
 connected = $('#spanJoueur'+num).data('connected');
 
 var myuser = '';
 if ($('#spanJoueur'+num).data('myuser'))
 myuser = $('#spanJoueur'+num).data('myuser');

 var annonceTxt = '';
 if ($('#spanJoueur'+num).data('annonceTxt'))
 annonceTxt = $('#spanJoueur'+num).data('annonceTxt');

 var myScore = '';
 if ($('#spanJoueur'+num).data('myScore'))
 myScore = $('#spanJoueur'+num).data('myScore');
 
 var isDonneur = '0';
 if ($('#spanJoueur'+num).data('isDonneur'))
 isDonneur = $('#spanJoueur'+num).data('isDonneur');
 
 var isTourDeJeu = '0';
 if ($('#spanJoueur'+num).data('isTourDeJeu'))
 isTourDeJeu = $('#spanJoueur'+num).data('isTourDeJeu');
 
 var resSrc = '/workers/avatarJeu.php?size=266&annonce='+annonce+'&myScore='+myScore+'&myuser='+myuser+'&annonceTxt='+annonceTxt+'&appelC='+appelC+'&appelN='+appelN+'&connected='+connected+'&isTourDeJeu='+isTourDeJeu+'&isDonneur='+isDonneur+'&vvv='+(new Date().getTime())+'&'+otherInfos;
 
 var noMedals = '';
 if (phaserMedalsDisabled) {
 resSrc += '&noMedals=1';
 noMedals = 1;
 }
 
 var idJoueur = $('#spanJoueur'+num).data('idJoueur');
 var grade = $('#spanJoueur'+num).data('mygrade');
 var medailles = new Array();
 
 if (idJoueur>0) {
 var tabMed = grade.split('-');
 for (var o=0;o<tabMed.length;o++) {
 if (tabMed[o]=='FFT')
 medailles.push('FFT');
 else if (o<3)
 medailles.push(''+tabMed[o]+'&resizeToHeight=44&idJoueur='+idJoueur+'&v='+rndMEED);
 }
 } else {
 if (idJoueur==-1) {
 if (!phaserMedalsDisabled) {
 medailles.push('IA&resizeToHeight=44&idJoueur=0&v='+rndMEED);
 }
 }
 else if (myuser=='Vide') {
 var d = new Date();
 if (d.getTime()>dateDebutPartie+30*1000)
 medailles.push('Add&resizeToHeight=44&idJoueur=0');
 else
 medailles.push('Wait&resizeToHeight=44&idJoueur=0');
 }
 
 }
 //console.log('createAvatar',num,myuser);

 //endFunc,avatar,annonce,myScore,myuser,annonceTxt,connected,isTourDeJeu,isDonneur,appelC,appelN,noMedals
 createAvatar(function (res) { $('#joueur'+num).attr('src', res ); } , $('#divJoueur'+num).data("imgSrc") ,medailles,annonce, myScore , myuser , annonceTxt ,connected,isTourDeJeu!='0',isDonneur!='0',appelC,appelN,noMedals);
 
 
 //var _img = document.getElementById('id1');
 /*var newImg = new Image;
 newImg.onload = function() {
 //_img.src = this.src;
 $('#joueur'+num).attr('src', resSrc );
 }
 newImg.src = resSrc;*/

}
moteurHTML2.setUtilisateur = function (num,pseudo, avatar,score,connected,messagesJoueurs,grade,idJoueur)
{ 
 $('#spanJoueur'+num).data('otherInfos','noJpeg=1'+'&idUtil='+idJoueur+'&avatar='+avatar );
 if (idJoueur<0 || pseudo=='Vide' || pseudo=='Libre')
 $('#spanJoueur'+num).data('connected',2 );
 else
 $('#spanJoueur'+num).data('connected',(connected?1:0) );
 $('#spanJoueur'+num).data('myuser',pseudo );
 $('#spanJoueur'+num).data('idJoueur',idJoueur );
 $('#spanJoueur'+num).data('mygrade',grade );
 //$(obj).data("imgSrc");
 if (pseudo!='Vide' && pseudo!='Libre')
 {  
 lastUserEmpty = false;       
 $('#spanJoueur'+num).css('cursor','pointer');
 }
 else
 { 
 lastUserEmpty = true; 
 $('#spanJoueur'+num).css('cursor','');
 }

 var d = new Date();

 if (pseudo=="Vide" )
 {
 $('#spanJoueur'+num).data('connected',2 );
 if (d.getTime()>dateDebutPartie+30*1000)
 {
  if ( $('#spanJoueur'+num).data('myuser' ) != 'Ajouter une IA') {

  $('#spanJoueur'+num).data('myuser','Ajouter une IA' );
  $('#divJoueur'+num).data("idPos",num);
  $('#divJoueur'+num).data("imgSrc",avatar);
  $('#divJoueur'+num).data("pseudo",pseudo);
  //setScore (num,);    
  $('#spanJoueur'+num).css('cursor','pointer');
  }
 }
 else
 {
 if ( $('#spanJoueur'+num).data('myuser' ) != pseudo) {
 $('#spanJoueur'+num).data('myuser',pseudo);
 $('#spanJoueur'+num).css('cursor','');
 }
 }
 }
 else
 { 
 //$$('spanJoueur'+num).innerHTML = pseudo;
 $('#divJoueur'+num).data("imgSrc",avatar);
 $('#divJoueur'+num).data("pseudo",pseudo);
 $('#spanJoueur'+num).data('myuser',pseudo );
 }
 moteurHTML2.refreshUtilisateur(num);
 
 return; 
} 


 
moteurHTML2.cartePreselect = function (obj,name) {
 notifyUserActivity();
 if (advanceCardPlayDisable) return;
 if ($$('masque'+obj.id)!=null) {

 rpcNoQueue('prochaineCarte=');
 $('.masqueCarte').remove();
 nextDelayIsNull = 0;
 } else {

 if (shalAskForConfirmCardPlay || (name=='le petit' && shalAskForconfirmationPetit) ) {
 confirme('Etes-vous sûr de vouloir presélectionner '+name+' ?',function () {
  rpcNoQueue('prochaineCarte='+getCardName(obj));
  $('.masqueCarte').remove();
  carteSelectionnee(obj.id); 
  nextDelayIsNull = 1;
 });
 } else {
  rpcNoQueue('prochaineCarte='+getCardName(obj));
  $('.masqueCarte').remove();
  carteSelectionnee(obj.id); 
  nextDelayIsNull = 1;
 }
 
 }
}


   
var cchPlCz;
function getPlayedCardSizeHTML2() {
 if (cchPlCz) return cchPlCz;
 var cardWidth;
 if ($(window).width()<978 || true) {
 var cardHeight = $('.joueurCnterRond').outerHeight();//$('.roleJoueur').offset().top-$('#divJoueur0 .joueurCnterRond').offset().top;
 cardWidth = cardHeight*70/129;
 if (cardWidth > $('.divJoueursDiv').outerWidth())
 cardWidth = $('.divJoueursDiv').outerWidth();
 } else {
 cardWidth = $('.divJoueursDiv').outerWidth();
 }
 if (cardWidth>120)
 cardWidth = 120;
 if ($(window).width()<600) {

 if (cardWidth<65)
 cardWidth = 65;
 } else {

 if (cardWidth<75)
 cardWidth = 75;
 }
 cchPlCz = {w:cardWidth,h:cardWidth*129/70};
 return cchPlCz;
} 


function carteEpos2 (num) {
 if ($(window).width()<=600) {

 var sizeCard = getPlayedCardSizeHTML2();
 var oneWidth = $('#divJoueur0').width();

 var newPos = $('#divJoueur'+num).offset().left-$('#monJeu').offset().left+oneWidth-sizeCard.w-2;//;
 return newPos;
 }
 var sizeCard = getPlayedCardSizeHTML2();
 var oneWidth = $('#divJoueur0').width();

 var newPos = $('#divJoueur'+num).offset().left-$('#monJeu').offset().left+oneWidth-sizeCard.w-2;//;
 //var newPos = oneWidth+$('#divJoueur0').offset().left-sizeCard.w;//-($('#divJoueur0').width()-$('.joueurCnterRond').width())/2+1+$('#divJoueur0').offset().left;

 //newPos += oneWidth*num;
 return newPos;//-parseInt($('#monJeu').css('margin-left'));
}


function getCardPlayerTop2(num) {
 var sizeCard = getPlayedCardSizeHTML2();
 var topO = $('#spanJoueur'+num).offset().top-$('#monJeu').offset().top;
 
 if (sizeCard.h>$('#spanJoueur'+num).outerHeight())
 topO -= (sizeCard.h-$('#spanJoueur'+num).outerHeight() )/2;//;
 
 return topO;
}

function reposPlayedCardsHTML2() {
 $('.cartesTapis').each(function() {
 if (!$(this).hasClass('rammass')) {
 var topO = getCardPlayerTop2( $(this).data('pos') );//$(this).offset().top;//
 animateIdHTML2 (this.id,carteEpos2($(this).data('pos')),topO);
 }
 });
}
 
var cartesSurLeTapis = new Array();

moteurHTML2.playOppCard = function (name,opp)
{
 var topO = getCardPlayerTop2(opp);
 var ccW = getPlayedCardSizeHTML2().w;
 // c'est une carte a moi qui est jouee
 if (opp==whoamiNum && $$('MonJeu'+name)!=null)
 {
 $('.masqueCarte').remove();
 //clearCardsActions (); 
 var myPlayedCard = $$('MonJeu'+name);//MonJeu4_Pique-03.gif
 //if (myPlayedCard==null) alert('bug');
 cartesSurLeTapis[whoamiNum] = name;
 myPlayedCard.style.zIndex=zindexTop;
 zindexTop++;          
 myPlayedCard.id = 'newOne'+whoamiNum;
 myPlayedCard.onclick=null;
 $(myPlayedCard).removeClass('carteMain');
 
 $( myPlayedCard ).animate({
  marginLeft: (-ccW/2)+"px",
  marginRight: (-ccW/2)+"px",
  marginTop: (parseInt($( myPlayedCard ).css('margin-top'))-30)+"px"
  },200,function() { 
  var $monjeu = $('#monJeu');
  var windowWidth = $monjeu.outerWidth()-32;
  var wi = 130,hi=239;
  if (windowWidth<600) {
  wi = 105;
  hi = 239*105/130;
  }
  
  var offs = $(myPlayedCard).offset();
  var sty = 'position:absolute;';
  sty += 'top:'+(offs.top+0*parseInt(myPlayedCard.style.marginTop)-$('#monJeu').offset().top)+'px;';
  sty += 'left:'+(offs.left+0*parseInt(myPlayedCard.style.marginLeft)-$('#monJeu').offset().left)+'px;';
  sty += 'margin-left:0px;';
  sty += 'margin-right:0px;';
  sty += 'margin-top:0px;';
  sty += 'z-index:99;width:'+wi+'px;height:'+hi+'px;';
  myPlayedCard.setAttribute('style',sty);

  animateIdHTML2 (myPlayedCard.id,carteEpos2(whoamiNum),topO);

  $(myPlayedCard).data('pos',opp);
  $(myPlayedCard).addClass('cartesTapis');
 
  reorganiseCartes ();

  playSoundEffect('CardPlaced.mp3',true);
  } ); 
 lastMO = null;
 
 return;
 }
 if (opp==null) 
 {
 opp=lastOpp;
 lastOpp++;
 if (lastOpp>3) lastOpp=0;
 }
 cartesSurLeTapis[opp] = name; 
 

 var sizeCard = getPlayedCardSizeHTML2();

 var img = $$('newOne'+opp);
 if (img==null)
 {
 img = document.createElement("IMG");
 img.src= getCardJSIMG(name);//cacheCarte[name]; 
 img.style.position='absolute';
 img.style.left=carteEpos2(opp)+'px';
 img.style.top=topO+'px'; 
 img.width=sizeCard.w; 
 img.height= sizeCard.h;
 //img.height=cardHeight;
 img.id='newOne'+opp;      
 img.alt=name; 
       
 $$('monJeu').appendChild(img);
 
 $(img).data('pos',opp);
 $(img).addClass('cartesTapis');

 } else {
 img.style.left = carteEpos2(opp)+"px";
 img.style.top = topO+"px";
 img.style.width = sizeCard.w;
 img.style.height = sizeCard.h;
 
 }  
 
 img.style.zIndex=zindexTop;
 zindexTop++; 

 if (Math.random()<0.5)
 playSoundEffect('cards_02.mp3',true);
 else
 playSoundEffect('cards_01.mp3',true);
 
}
moteurHTML2.setRoleJoueurClass = function (num,className) {

 $('#spanJoueur'+num).data('annonce',6);
 switch (className) {
 case 'roleVictoire':
 $('#spanJoueur'+num).data('annonce',7);
 break;
 case 'roleDefaite':
 case 'rolePasse':
 $('#spanJoueur'+num).data('annonce',6);
 break;
 case 'rolePreneur':
 $('#spanJoueur'+num).data('annonce',1);
 break;
 case 'rolePreneurPrise':
 $('#spanJoueur'+num).data('annonce',1);
 break;
 case 'rolePreneurGarde':
 $('#spanJoueur'+num).data('annonce',2);
 break;
 case 'rolePreneurGardesans':
 $('#spanJoueur'+num).data('annonce',3);
 break;
 case 'rolePreneurGardecontre':
 $('#spanJoueur'+num).data('annonce',4);
 break;
 case 'roleEquipier':
 $('#spanJoueur'+num).data('annonce',5);
 break;
 case 'roleNobody':
 case 'roleAnnonce':
 $('#spanJoueur'+num).data('annonce',0);
 break;
 }
 moteurHTML2.refreshUtilisateur(num);
 return;
 
 $('#divJoueur'+num+' .joueurCnterRond')
 .removeClass('roleVictoire')
 .removeClass('roleDefaite')
 .removeClass('roleAnnonce')
 .removeClass('rolePreneur')
 .removeClass('rolePreneurPrise')
 .removeClass('rolePreneurGarde')
 .removeClass('rolePreneurGardesans')
 .removeClass('rolePreneurGardecontre')
 .removeClass('roleEquipier')
 .removeClass('roleNobody')
 .removeClass('rolePasse')
 .addClass(className);

 $('#divJoueur'+num+' .pseudoJTxt')
 .removeClass('ToproleVictoire')
 .removeClass('ToproleDefaite')
 .removeClass('ToproleAnnonce')
 .removeClass('ToprolePreneur')
 .removeClass('ToprolePreneurPrise')
 .removeClass('ToprolePreneurGarde')
 .removeClass('ToprolePreneurGardesans')
 .removeClass('ToprolePreneurGardecontre')
 .removeClass('ToproleEquipier')
 .removeClass('ToproleNobody')
 .removeClass('ToprolePasse')
 .addClass('Top'+className);

 $('#divJoueur'+num+' .infosJcomp')
 .removeClass('ToproleVictoire')
 .removeClass('ToproleDefaite')
 .removeClass('ToproleAnnonce')
 .removeClass('ToprolePreneur')
 .removeClass('ToprolePreneurPrise')
 .removeClass('ToprolePreneurGarde')
 .removeClass('ToprolePreneurGardesans')
 .removeClass('ToprolePreneurGardecontre')
 .removeClass('ToproleEquipier')
 .removeClass('ToproleNobody')
 .removeClass('ToprolePasse')
 .addClass('Top'+className);
}

moteurHTML2.setPrise = function (num,txt) 
{
 if (txt=='Passe')
 selMoteur.setRoleJoueurClass(num,'rolePasse');
 else if (txt!='')
 selMoteur.setRoleJoueurClass(num,'rolePreneur'+txt.split(' ').join(''));
 else
 selMoteur.setRoleJoueurClass(num,'roleAnnonce');
 if (txt!='') {
 /*$('.roleJoueur').css('position','static');
 $('.roleJoueur').css('position','initial');*/
 }
 //$$('roleJoueur'+num).innerHTML = txt; 
 $('#spanJoueur'+num).data('annonceTxt',txt);
 resizeChat();
 autoShowCRA();
 moteurHTML2.refreshUtilisateur(num);
}

moteurHTML2.setPriseTxt = function (num,txt) 
{
 $('#spanJoueur'+num).data('annonceTxt',txt);

 moteurHTML2.refreshUtilisateur(num);
 //$$('roleJoueur'+num).innerHTML = txt; 
}

moteurHTML2.setPreneur = function (num,annonce,chelem)
{
 var repNbJ = 5;
 if ($('#divJoueur0').hasClass('jeuEquipier4j'))
 repNbJ = 4;
 if ($('#divJoueur0').hasClass('jeuEquipier3j'))
 repNbJ = 3;

 /*$('#spanJoueur'+num).data('annonce',annonce);

 moteurHTML2.refreshUtilisateur(num);
 
 return;*/
 for ( var i=0;i<repNbJ;i++)
 {
 if (num==-1) {
 
 $('#spanJoueur'+i).data('annonceTxt','');
 selMoteur.setRoleJoueurClass(i,'roleAnnonce');
 }
 else if (i==num) {
 selMoteur.setRoleJoueurClass(i,'rolePreneur'+tabAnnonces[annonce].split(' ').join(''));
 } else
 selMoteur.setRoleJoueurClass(i,'roleAnnonce');
 
 if (i==num)
 {
 if (chelem) {
 $('#spanJoueur'+i).data('annonceTxt',tabAnnoncesCrt[annonce]+' + chelem');
  //$$('roleJoueur'+i+'').innerHTML = tabAnnoncesCrt[annonce]+' + chelem'; 
 } else {
  //$$('roleJoueur'+i+'').innerHTML = tabAnnonces[annonce]; 
 $('#spanJoueur'+i).data('annonceTxt',tabAnnoncesCrt[annonce]);
 }
 }
 else
 {
 $('#spanJoueur'+i).data('annonceTxt','');
  //$$('roleJoueur'+i+'').innerHTML = '';
 }
 moteurHTML2.refreshUtilisateur(i);
 }
 resizeChat();
 autoShowCRA();
}

moteurHTML2.clearPrise = function (i)
{
 $$('roleJoueur'+i+'').innerHTML = '&nbsp;';
}
function autoShowCRA() {
 for (var i=0;i<4;i++) {

 if ($('#divJoueur'+i+' .CRA').width()<10) {
 $('#divJoueur'+i+' .CRA').hide();
 } else {
 $('#divJoueur'+i+' .CRA').show();
 }
 }
}

moteurHTML2.setDonneurPos = function (num) {

 moteurHTML2.refreshUtilisateur(num);
 for (var k=0;k<6;k++) {

 $('#spanJoueur'+k).data('isDonneur',0);
 }

 $('#spanJoueur'+num).data('isDonneur',1);

 for (var k=0;k<6;k++) {
 if ($('#spanJoueur'+k).length>0)
 moteurHTML2.refreshUtilisateur(k);
 }
}
moteurHTML2.setScore = function (num,score)
{
 $('#spanJoueur'+num).data('myScore',score );
 moteurHTML2.refreshUtilisateur(num);
 /*$('#spanJoueur'+num).data('annonceTxt'
 if ($$('spanScoreJoueur'+num).innerHTML != score) {
 $$('spanScoreJoueur'+num).innerHTML = score;
 if (score!='') {
 $('#spanScoreJoueur'+num).show();
 } else {

 $('#spanScoreJoueur'+num).hide();
 }
 }*/
}


var numActions = 0;
 
moteurHTML2.clearActions = function (noscroll)
{
 if (numActions!=0) {
 $$('infosJeuActions').innerHTML = '';
 //selMoteur.hideInfoJeu();
 if (!noscroll) $("html, body").stop().animate({ scrollTop: 0 }, 700);
 }
 numActions = 0; 
}
moteurHTML2.addAction = function (name,action,myclass,noscroll)
{
 if (numActions>0)
 if (selMoteur.actionExists (name))
 return;
 
 if (numActions==0) {
 $('#infosJeu').show();
 $('#infosJeuActions').show();
 $$('infosJeuActions').innerHTML = '';
 showInfoJeu();
 }
 numActions++;
 //if ( $$('infosJeu').innerHTML.indexOf( 'value="'+name+'"')==-1)
 $$('infosJeuActions').innerHTML += '<a class="actionBtn '+myclass+' btn btn-actionGame" onclick="'+action+'">'+name+'</a>';
 
 if (numActions==1) {
 reorganiseCartes ();
 }
 if (!noscroll)
 $("html, body").stop().animate({ scrollTop: $('#infosJeuActions').offset().top+$('#infosJeuActions').outerHeight()+$('#chatBg').outerHeight()-$(window).height() }, 1000);

}

moteurHTML2.actionExists = function (name)
{
 return $$('infosJeuActions').innerHTML.indexOf( name+'</a>')!=-1;
}
moteurHTML2.removeAction = function (name)
{
 $('#infosJeuActions a').each(function () {
 if ($(this).html()==name) {
 //console.log('found ');
 $(this).remove();
 }
 
 });
 return;
}
var lastTurnSel = null; 
moteurHTML2.setTurn = function (num)
{
 for (var k=0;k<6;k++) {
 if (k==num)
 $('#spanJoueur'+num).data('isTourDeJeu',1);
 else
 $('#spanJoueur'+k).data('isTourDeJeu',0);
 }

 for (var k=0;k<6;k++) {
 if ($('#spanJoueur'+k).length>0)
 moteurHTML2.refreshUtilisateur(k);
 }
 
 
 if (etapeCourante =="Terminee")
 {
 selMoteur.clearTurn();           
 }
 else
 {
 var $selecteurTour = $('#selecteurTour');
 
 if ( $selecteurTour[0]!=null) $selecteurTour[0].style.visibility='visible';
 var oneWidth = $('#divJoueur0').width();
 var newPos = $('#divJoueur'+num).offset().left+oneWidth/2-$selecteurTour.width()/2;
 
 var newPosY;
 if ( $(window).width()>800)
  newPosY = parseInt($('#divJoueur'+num).offset().top-15);
 else
  newPosY = parseInt($('#divJoueur'+num).offset().top-5);
 if ( $selecteurTour[0]==null)
 {
  var selector = document.createElement('IMG');
  selector.style.position='absolute';
  selector.style.left=parseInt(newPos)+'px';
  selector.style.top=newPosY+'px';
  selector.style.zIndex='-1';
  if ( $(window).width()>800)
  selector.style.opacity=0.8;
  else
  selector.style.opacity=0.7;

  selector.id='selecteurTour';
  if (isLowGraphism)
  selector.src='/Jeu-Tarot-en-ligne/Icones/SelecteurOFF.png?v=2';
  else
  selector.src='/Jeu-Tarot-en-ligne/Icones/Selecteur.png?v=2';
  $$('Jeu').appendChild(selector);
 }
 $selecteurTour.stop().animate( { left: newPos,top:newPosY }, 700 );
 
 lastTurnSel = num;
 }
} 
moteurHTML2.clearTurn = function () 
{
 if ( $$('selecteurTour')!=null) $$('selecteurTour').style.visibility='hidden';
} 



var lastIntitule = '';
var TOaffCART;

moteurHTML2.afficheCartes = function (cartes,intitule)
{   
 if (lastIntitule==intitule && intitule.indexOf('taient dans le chien') === -1) return;
 lastIntitule = intitule;
 var tWidth = $(window).width(); 
 var cartesChien = jQuery.parseJSON(cartes);
 var div = document.createElement("DIV");
 $$('infosJeuInfo').innerHTML = '';
 div.id='carteInfos';

 div.innerHTML = '<h4>'+intitule+'</h4>';
 var div2 = document.createElement("DIV");
 div2.id='carteInfosList';      
 div.appendChild(div2); 
 for (i=0;i<cartesChien.length;i++)
 {
 
 img = document.createElement("IMG");
 img.src= getCardJSIMG(cartesChien[i]);
 img.style.position='relative';
 //img.style.marginBottom='0px'; 
 img.className = 'carteAfficheeInfo cardJeu';
 img.width=cardWidth;
 img.height=cardHeight;
 img.id='carteChien'+i;      
 img.alt=cartesChien[i];      
 div2.appendChild(img); 
 }    
 selMoteur.clearActions();   
 $$('infosJeuInfo').appendChild(div); 
 $('#infosJeuInfo').show(); 
 $('#infosJeu').show(); 
 showInfoJeu();
 //showInfoJeu();
 reorganiseCartes ();
 //TOaffCART = setTimeout(masqueInfoJeu,8000);
} 





moteurHTML2.clearMessagePlateauJeu = function ()
{
 cardsNum=0;
 $$('monJeu').innerHTML = '';
 $('#monJeu').css('padding-bottom','0');
 moteurHTML2.jeuPadOK = false;
}
moteurHTML2.showMessagePlateauJeu = function (txt)
{
 cardsNum=0;
 etapeCourante ="Terminee";  
 //$$('monJeu').style.height='auto';
 $$('monJeu').innerHTML = '<p class="txtEndGame">'+txt+'</p>';

 $('#monJeu').css('padding-bottom','0');
 moteurHTML2.jeuPadOK = false;
 resizeChat();
}




var delTOTO = 0;
function progress(percent, $element) {
 var progressBarWidth = percent * $element.width() / 100;
 $element.find('div').css('width', progressBarWidth );//.html(percent + "%&nbsp;");
}
var syncTimeDelay = 0;
var syncTimeTS = 0;
var syncTimeTotal = 0;
var syncTimeInterval = 0;

moteurHTML2.timeThatRemains = function (delay,totalTime,ignoreTurn)
{
 //log('il reste '+delay+'/'+totalTime+' secondes');
 if (delay==-1 || (lastTurnSel!=whoamiNum && !ignoreTurn) )// 
 { 
 syncTimeDelay = 0;
 syncTimeTS = 0;
 syncTimeTotal = 0;
 clearInterval(syncTimeInterval);

 $('#tempsRestant').hide();

 }
 else
 { 
 var oldDelay = syncTimeDelay-((new Date().getTime()) - syncTimeTS)/1000;
 //console.log('oldDelay',oldDelay);
 //console.log('err',oldDelay-delay);
 syncTimeDelay = delay;
 syncTimeTS = (new Date().getTime());
 syncTimeTotal = totalTime;
 clearInterval(syncTimeInterval);
 syncTimeInterval = setInterval(function () { intervalTimeRemaining(ignoreTurn); },100);
 
 var newWidth = 0;
 if ( delay>2) newWidth = 10+delay*3;
 
 $('#tempsRestant').show();
 progress(delay*100/totalTime, $('#tempsRestant'));
 }
}
var canPlayAlertSound = 0;

function intervalTimeRemaining(ignoreTurn) {
 var newDelay = syncTimeDelay-((new Date().getTime()) - syncTimeTS)/1000;
 if (newDelay<0 || (lastTurnSel!=whoamiNum && !ignoreTurn) )// 
 { 
 syncTimeDelay = 0;
 syncTimeTS = 0;
 syncTimeTotal = 0;
 clearInterval(syncTimeInterval);

 $('#tempsRestant').hide();
 return;
 }
 if (newDelay<3 && canPlayAlertSound==0) {
 if (gameSoundsEnabled) playSoundEffect ('Heartbeat3.mp3',true,0.9);
 else playSound ('Button.mp3?v=2');//playSound ('Bip.mp3');
 
 canPlayAlertSound = 1;
 } else if (newDelay>5 && canPlayAlertSound==1 ) {
 canPlayAlertSound = 0;
 }
 progress(newDelay*100/syncTimeTotal, $('#tempsRestant'));
}





moteurHTML2.showMessageJoueur = function (idJoueur,message) {
 if (window.disableEmoticons) return;
 
 var rand = Math.random();
 if (message=="J'applaudis !") playSoundEffect ('Clap_Hands'+Math.floor(rand*5)+'.mp3',true,0.9);
 else if (message=="C'est long...") playSoundEffect ('Yawn'+(2+Math.floor(rand*2))+'.mp3',true,0.9);
 else if (message=="Je vous embrasse !") playSoundEffect ('Kiss '+Math.ceil(rand*3)+'.mp3',true,0.9);
 else if (message=="Je pleure !") playSoundEffect ('Cry_1Cut.mp3',true,0.9);
 
 if (emoticons[message] ) {
 
 var newIcon = $('<img class="emotHTML" style="opacity:0;" src="/images/Emoticon/Emoticon'+emoticons[message]+'.png?v=4" />')
 $('#divJoueur'+idJoueur).append(newIcon);
 $( newIcon ).load(function() {
 newIcon.css('margin-left',$('#divJoueur'+idJoueur).width()/2-newIcon.width()/2);
 newIcon.css('opacity',1 );
 newIcon.animate({'margin-top':100,opacity:0},2500,function () {
 newIcon.remove();
 });
 });

 return;
 }
 if (typeof $('#divJoueur'+idJoueur).tooltip == 'undefined') return;
 if ($('#divJoueur'+idJoueur).attr('title') || $('#divJoueur'+idJoueur).attr('data-original-title')) {
 var pop = $('#divJoueur'+idJoueur).data('fifoMsgs');
 if (!pop)
 pop = [];
 if (pop.length<10)
 pop.push(message);
 $('#divJoueur'+idJoueur).data('fifoMsgs',pop);
 return;
 }
 $('#divJoueur'+idJoueur).attr('title', message);
 $('#divJoueur'+idJoueur).attr('data-placement', "bottom");
 $('#divJoueur'+idJoueur).attr('data-original-title', message)
 .tooltip().tooltip('fixTitle').mouseover();
 
 playSoundEffect ('Female Voice - Psst '+Math.ceil(Math.random()*2)+'.mp3',true,0.5);
 
 clearTimeout($('#divJoueur'+idJoueur).data('TO'));
 var to = setTimeout(function() {
 $('#divJoueur'+idJoueur).mouseout().attr('title', '').attr('data-original-title', '');
 var pop = $('#divJoueur'+idJoueur).data('fifoMsgs');
 if (pop) {
 if (pop.length>0) {
 var m2 = pop.shift();
 $('#divJoueur'+idJoueur).data('fifoMsgs',pop);
 setTimeout(function () {
 selMoteur.showMessageJoueur(idJoueur,m2);
 },200);

 }
 }
 }, 5000);
 $('#divJoueur'+idJoueur).data('TO', to);
}

var nombreDeJPartie = 4;
var hasAGameStarted = false;
var firstInfoJeuShown = false;

function showInfoJeu()
{
 firstInfoJeuShown = true;
 if ($('#chat:visible').length && !$(document.body).hasClass('bigChat')) {
 $('#infosJeuInfo').show();
 $('#infosJeu').show();
 updateHalfChat();
 return;
 }
 $('#infosJeuInfo').show();
 $('#infosJeu').show();
 updateHalfChat();
} 
moteurHTML2.hideInfoJeu = function ()
{
 //numActions = 0; 
 $$('infosJeuInfo').innerHTML = '';
 $('#infosJeuInfo').hide();
 updateHalfChat();
} 



function resizeChat() {
 var $chat = $('#chat');
 if ($chat.length==0) return;
 if ($(document.body).hasClass('bigChat')) {
 if ($chat.is(':visible'))
 $('#chatBg').addClass('chatBgOpen');
 else
 $('#chatBg').removeClass('chatBgOpen');
 var delt = parseInt($chat.css('padding-top'))+parseInt($chat.css('padding-bottom'));
 if ($chat[0].scrollHeight+$('#chatBg').outerHeight()+$('#chatGradient').height()-delt>$(window).height()) {
 $chat.height(Math.max($(window).height()-$('#chatBg').outerHeight()-$('#chatGradient').height()-delt,200));
 } else {
 $chat.css('height','');
 }
 } else {
 $('#chatBg').removeClass('chatBgOpen');
 if ($(window).width()>600 || !firstInfoJeuShown)
 $chat.css('height',Math.max(180,$(window).height()-$chat.offset().top-$('#chatBg').outerHeight()-14));
 else
 $chat.css('height','');
 }
 if ($chat[0].scrollHeight>$chat.outerHeight()) {

 $('#chatGradient').css('padding-right','20px');
 } else {
 $('#chatGradient').css('padding-right','0px');
 
 }
 $chat[0].scrollTop= $chat[0].scrollHeight;
 
}
function showChatD() {
 $('#chat').show();
 $('#chatGradient').show();
 resizeChat();
}
moteurHTML2.hideChat = function () {
 if (!$(document.body).hasClass('bigChat')) return;
 $('#chat').hide();
 $('#chatGradient').hide();
 resizeChat();
}
function chatGrad() {
 var equipeHTML='';
 equipeHTML += '<p id="chatGradient" >'; 
 equipeHTML += '<img class="closeChatBtn closingBtnChat" src="/images/icones/Close.png" onclick="selMoteur.hideChat()"/>'; 
 equipeHTML += '<img class="closeChatBtn" src="/images/icones/Bigger.png" onclick="bigChatD()"/>'; 
 equipeHTML += '</p>'; 
 return equipeHTML;
}
function getChatHTML(val) {
 var equipeHTML='<div class="chatContainer">';
 equipeHTML += chatGrad(); 
 equipeHTML += '<p id="chat">'+val+'</p></div>'; 
 return equipeHTML;
}
function bigChatD() {
 var equipeHTML=getChatHTML($('#chat').html());
 
 if ($(document.body).hasClass('bigChat')) {

 $('.chatContainer').remove();
 $('#infosJeu').after($(equipeHTML));
 $(document.body).removeClass('bigChat');
 } else {

 $('.chatContainer').remove();
 $('#bottomGame').prepend($(equipeHTML));
 $(document.body).addClass('bigChat');
 }
 showChatD();
 updateHalfChat();
 resizeChat();
}
function toggleChatD() {
 if ($('#chat').is(':visible')) selMoteur.hideChat();
 else showChatD();
}


moteurHTML2.hideCoulApp = function () {
 if (idCoulAppH) {

 $('#spanJoueur'+idCoulAppH).data('appelC','');
 $('#spanJoueur'+idCoulAppH).data('appelN','');
 moteurHTML2.refreshUtilisateur(idCoulAppH);
 idCoulAppH = 0;
 }
}
function showCRA() {
 $('.CRA').css('position','static');
 $('.CRA').css('position','initial');
 $('.CRA').css('top','0px');
 resizeChat();
 autoShowCRA();
}
var idCoulAppH;
moteurHTML2.showCoulApp = function (i,coulNum,txtTete) {
 idCoulAppH = i;
 $('#spanJoueur'+i).data('appelC',coulNum);
 $('#spanJoueur'+i).data('appelN',txtTete);
 moteurHTML2.refreshUtilisateur(i);
 //$('.appelRoi').html('');
 //$('#divJoueur'+i+' .appelRoi').html('<img src="/images/Couleurs/'+txtTete+'.png?v=3" class="coulPren iconeStatut"><img src="/images/Couleurs/'+coulNum+'.png" class="coulPren iconeStatut">');
 //showCRA();
 
}



moteurHTML2.clearMasques = function () {
 $('.masqueCarte').remove();
}
moteurHTML2.clearMasque = function (id) {
 if ($$('masque'+id)==null) return;
 $$('monJeu').removeChild($$('masque'+id));
}
moteurHTML2.addMasque = function (id,masque) {
 selMoteur.clearMasque(id);
 var img = document.createElement('img');
 img.style.cssText= $$(id).style.cssText;
 img.style.marginLeft = (-parseInt($$(id).style.marginRight)-$('#'+id.split('.').join('\\.')).width() )+'px';
 img.style.marginRight = (parseInt($$(id).style.marginRight))+'px';
 img.id = 'masque'+id;
 img.width = $('#'+id.split('.').join('\\.')).width();
 img.height = cardHeight;
 img.src = '/Jeu-Tarot-en-ligne/Masques/'+masque+'.gif';
 img.className='masqueCarte MasqueB cardJeu';
 img.onclick = function () { $('#'+id.split('.').join('\\.')).trigger('click'); };
 
 $('#'+id.split('.').join('\\.')).after(img);
}




moteurHTML2.clearCardsActions = function (except)
{
 selMoteur.timeThatRemains(-1,0);
 $('.masqueCarte').remove();
 $('#tempsRestant').hide();
 var cnt = $$('monJeu').childNodes;
 for (key in cnt) {
 if (cnt[key]!=null && cnt[key].id!=null && cnt[key].id!=except && cnt[key].id.substr(0,6)=='MonJeu' ) 
 {    
  carteNeutre(cnt[key].id);
  //cnt[key].style.top = '0px';
  cnt[key].onclick = null;
  cnt[key].onmouseover = null;
 }
 }
 //unzoomPalteau ();
}
moteurHTML2.clearCards = function ()
{   
 lastJeuWidth = -1;
 /*if (moteurHTML2.jeuPadOK) {
 moteurHTML2.jeuPadOK = false;
 $('#monJeu').css('padding-bottom','0');
 }*/
 //$$('monJeu').style.height='125px';
 selMoteur.timeThatRemains(-1,0);

 
 $$('monJeu').innerHTML = '';
 cardsNum=0;
 playSoundEffect('Casino Cards.mp3',true);
 //unzoomPalteau ();
}



moteurHTML2.setGameMainMsg = function (txt) {
 $$('messagePlace').innerHTML = txt; 
}

moteurHTML2.reorganiseCartesReal = function (fromResize)
{ 
 //log('reorganiseCartes');
 if ($$('monJeu')==null) return;

 var $monjeu = $('#monJeu');

 if (!moteurHTML2.jeuPadOK && cardsNum>0) {
 moteurHTML2.jeuPadOK = true;
 $('#monJeu').css('padding-bottom',205);
 } else if (cardsNum==0 && moteurHTML2.jeuPadOK) {

 moteurHTML2.jeuPadOK = false;
 $('#monJeu').css('padding-bottom','0');
 }
 if (fromResize) {
 
 if ($(window).width()*1.2<$(window).height()) {
 $('#webBody').css('margin-top',25);
 } else {
 $('#webBody').css('margin-top',8);
 }
 cchPlCz = null;
 
 }
 /*if (fromResize==null) {
 CheckSizeZoom();
 }*/

 if (lastTurnSel!==null) 
 selMoteur.setTurn(lastTurnSel);
 
 var windowWidth = $monjeu.outerWidth()-32;
 var ccW = 130;
 if (windowWidth<600) ccW = 105;
 if (cardsNum>0) {

 //ccW = $('.carteMain').width();
 var numCartesJeu=0;
 var cnt = $monjeu[0].childNodes;
 for (key in cnt) { 
  if (cnt[key]!=null && cnt[key].id!=null && cnt[key].id.substr(0,6)=='MonJeu')
  numCartesJeu++;
 } 
 
 var cptmp = 0;
 var numCarteLigne = numCartesJeu;
 var nbLigneCartes = 1;
 var spacingCards = trouveEcartCartes (numCarteLigne,windowWidth,ccW,nbLigneCartes);
 while (spacingCards<45 && nbLigneCartes<50) {
 nbLigneCartes++;
 numCarteLigne = Math.ceil(numCartesJeu/nbLigneCartes);
 spacingCards = trouveEcartCartes (numCarteLigne,windowWidth,ccW,nbLigneCartes);
 
 }
 
 cardsBestTop = 3;
 
 var isfuncsentResiz = false;
 
 for (key in cnt) {         
  if (cnt[key]!=null && cnt[key].id!=null && cnt[key].id.substr(0,6)=='MonJeu')
  { 
  var opt = '';
  if (cptmp%numCarteLigne == 0) opt = 'First';
  if (cptmp%numCarteLigne == numCarteLigne-1) opt = 'Last';
  if (cptmp == numCartesJeu-1) opt = 'Last';
  var endf = null;
  if (!isfuncsentResiz) {
  isfuncsentResiz = true;

  endf = function () {resizeChat(); };
  }

  if (windowWidth<600)
  animateToWidthHTML2Small (cnt[key].id,spacingCards,ccW,opt,endf);
  else
  animateToWidthHTML2 (cnt[key].id,spacingCards,ccW,opt,endf);
        
  cptmp++; 
  }
 } 
 }
 if (fromResize) {
 reposPlayedCardsHTML2();
 }
}

function animateToWidthHTML2Small (id,destW,ccW,opt,endf) {
 var sizz = getPlayedCardSizeHTML2();
 var newW = destW-ccW;
 var idDest = id.split('.').join('\\.');
 var margL = newW/2;
 var margR = newW/2;
 if (opt=='First') margL = -5;
 if (opt=='Last') margR = -5;
 $('#'+idDest).stop().animate({
 marginLeft: margL,
 marginRight: margR,
 marginBottom:-145,
 width:105,
 height:193
 }, 600,endf);
 $('#masque'+idDest).stop().animate({
 marginLeft: (-margR-ccW ),
 marginRight: margR,
 marginBottom:-145,
 width:105,
 height:193
 }, 600);
}
function animateToWidthHTML2 (id,destW,ccW,opt,endf) {
 var sizz = getPlayedCardSizeHTML2();
 var newW = destW-ccW;
 var idDest = id.split('.').join('\\.');
 var margL = newW/2;
 var margR = newW/2;
 if (opt=='First') margL = -5;
 if (opt=='Last') margR = -5;
 $('#'+idDest).stop().animate({
 marginLeft: margL,
 marginRight: margR,
 marginBottom:-190,
 width:130,
 height:239
 }, 600,endf);
 $('#masque'+idDest).stop().animate({
 marginLeft: (-margR-ccW ),
 marginRight: margR,
 marginBottom:-190,
 width:130,
 height:239
 }, 600);
}

//var lesCartesVontEtresRamassees = false; 
moteurHTML2.ramassePoignee = function (joueur)
{
 //lesCartesVontEtresRamassees = true;
  
 for (var m=0;m<6;m++)
 {
 if ($$('newOne'+m)!=null)
  $$('newOne'+m).id = 'ramasse'+m ;
 }
 cartesSurLeTapis = new Array();
 setTimeout(function () { ramasseCartes2(joueur); },500);
}


var posRamassC = new Array (20,101,222,343);

moteurHTML2.cartePoigneeSelectInit = function (cardName) {
 cartePoigneeSelect($$(cardName));
}

function ramasseCartes2 (joueur)
{      
 for (var m=0;m<6;m++)
 { 
 if ($$('ramasse'+m)!=null)
 {
  $('#ramasse'+m).addClass('rammass');
  var obj = getDistance('ramasse'+m,"divJoueur"+joueur); 
  var distx = carteEpos2(joueur);
 var topO = getCardPlayerTop2( joueur );//$(this).offset().top;//
  
  if ($$('ramasse'+m).alt.split('6_Excuse').length<2)
  animateIdHTML2 ('ramasse'+m,distx,topO)

  $$('ramasse'+m).style.marginLeft='0px';
  if (m==joueur)
  $$('ramasse'+m).style.zIndex='100';
 }
 }
 playSoundEffect('card move sound.mp3',true);
 setTimeout(function () { finRamasseCartesHTNew(joueur); } ,700); 
}
function finRamasseCartesHTNew (joueur)
{
 for (var m=0;m<6;m++)
 {
 $('#ramasse'+m).removeClass('rammass');
 if ($$('ramasse'+m)!=null){
 
 if (typeof dosDesCartes !=='undefined')
  $$('ramasse'+m).src = imgPresJSprocess(dosDesCartes); 
 else if (typeof versoCarteHR !=='undefined')
  $$('ramasse'+m).src = imgPresJSprocess(versoCarteHR); 
 else
 $$('ramasse'+m).src = versoCarte; 
 }
 }    
 setTimeout(function () { finRamasseCartesHTMLNew(joueur); } ,600); 
}
var cptLeveesCartes = 0;
function finRamasseCartesHTMLNew (joueur)
{
 for (var m=0;m<6;m++)
 { 
 if ($$('ramasse'+m)!=null)
 { 
  $$('monJeu').removeChild($$('ramasse'+m));
 }
 }     

 zindexTop = 10; 
} 


/*
function decodeChatLineHTML(txt) {
 //$pseudo,$line,$date,$idUtil
 var tmp = unescape(txt).split('+').join(' ').split('#');
 return tmp[0]+": "+tmp[1]+' <font style="font-size:0.9em;opacity:0.5;">'+tmp[2]+'</font>';
}
*/


var fontNamePhaser = 'quicksandregular';
var moteurPhaser = {}
var phaserGBShown = false;
moteurPhaser.titreMoteur = 'Phaser';

function setPhaserEngine(modeNum) {
 if (modeNum>1) {

 isTechniqueMode = true;
 techniqueLevelAnim = 100;
 }
 selMoteur = moteurPhaser;
}
function togglePhaserOffMode() {
 if ($('#phaserOffMode').is('checked')) {
 setPhaserEngine(0);
 
 } else {
 selMoteur = moteurHTML;
 }
}
function isAndroidPhaser() {
 var ua = navigator.userAgent.toLowerCase();
 var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
 return isAndroid;
}
function isIos() {
 return /ipad|iphone/gi.test(window.navigator.userAgent);
}


function setWorldDIM() {
 phaserWW_w = $(window).width();

 if (isAndroidPhaser() && window.outerHeight<$(window).height()+80) 
 phaserWW_h = window.outerHeight;
 else
 phaserWW_h = $(window).height();//gamePhaser.world.height;//
}
var phaserWW_w = 800;
var phaserWW_h = 600;

function getWorldW() {
 return phaserWW_w;//$(window).width();//gamePhaser.world.width;//
}

function getWorldH() {
 return phaserWW_h;
}

var phaserModeleCartes = null;
function getModeleCartes() {
 if (phaserModeleCartes===null) {
 phaserModeleCartes = $('#modeleJeuCartes').val();
 return phaserModeleCartes;
 }
 return phaserModeleCartes;
}

function dynamicLoadImage( x, y, url, fallback, key,group) {
 if (phaserMedalsDisabled) return;
 //llog('dynamicLoadImage', x, y, url, fallback, key,group,typeof key);
 if (typeof key === 'undefined' || !key) key = 'dynamicLoad_' + url;
 if (gamePhaser.cache.checkImageKey(key)) {
 var image = gamePhaser.add.image(x, y, key); 
 image.anchor.setTo(0.5,0.5); 
 return image;
 } else {
 var image = gamePhaser.add.image(x, y, fallback); 
 image.anchor.setTo(0.5,0.5); 
 if (group) group.add(image);
 var loader = new Phaser.Loader(gamePhaser);
 loader.image(key, url);
 loader.onFileComplete.addOnce(function (progress, cacheKey, success, totalLoaded, totalFiles) {
 if (success && cacheKey) this.loadTexture(cacheKey);
 }, image);
 loader.start();
 return image;
 }
}
function dynamicLoadImageTo( existing,url) {
 var firstWidth = existing.width;
 var firstHeight = existing.height;
 var key = 'dynamicLoad_' + url;

 if (gamePhaser.cache.checkImageKey(key)) {
 existing.loadTexture(key);
 existing.width = firstWidth;
 existing.height = firstHeight;
 return existing;//gamePhaser.add.image(x, y, key); 
 } else {
 //var image = gamePhaser.add.image(x, y, fallback);
 var loader = new Phaser.Loader(gamePhaser);
 loader.image(key, url);
 loader.onFileComplete.addOnce(function (progress, cacheKey, success, totalLoaded, totalFiles) {
 if (success) {
 //llog('loaded uncached image',cacheKey);
 setTimeout(function () {

 existing.loadTexture(cacheKey);
 existing.width = firstWidth;
 existing.height = firstHeight;

 
 //llog('loaded image texture set',cacheKey);
 });
 } else {
 llog('Erreur chgt avat util');
 }
 }, existing);
 //llog('load uncached image',url);
 loader.start();
 return existing;
 }
}

function createButton (x,y,text,action,myClass) {
 if (!myClass) myClass = 'btn-warning';
 
 var groupBtn = gamePhaser.add.group();
 groupBtn.x = Math.round(x);
 groupBtn.y = y;
 
 var quitButton = gamePhaser.add.button(0,0, myClass+'-border', action, groupBtn );
 quitButton.scale.setTo(0.5, 0.5);
 quitButton.input.priorityID = 2; // higher priority
 groupBtn.add(quitButton);
 
 //llog('createButton',myClass,x,y);
 
 var quitButton = gamePhaser.add.button(9, 0, myClass+'-body', action, groupBtn );
 quitButton.scale.setTo(0.5, 0.5);
 quitButton.input.priorityID = 2; // higher priority
 groupBtn.add(quitButton);
 
 var titleBtn = gamePhaser.add.text(9, Math.round(quitButton.height/2), text, { fontSize: '50px', fill: '#fff',font: fontNamePhaser },groupBtn);
 //titleBtn.resolution = 1;
 titleBtn.anchor.setTo(0,0.5);
 titleBtn.scale.setTo(0.5, 0.5);
 titleBtn.y = quitButton.height/2;
 titleBtn.fontWeight = 'bold';
 
 quitButton.width = titleBtn.width+2;
 //llog('quitButton width',titleBtn.width);

 var quitButton = gamePhaser.add.button(9+quitButton.width+2+9/2, 0, myClass+'-border', action, groupBtn );
 quitButton.scale.setTo(-0.5, 0.5);
 quitButton.input.priorityID = 2; // higher priority
 groupBtn.add(quitButton);
 
 return groupBtn;
}


var gamePhaser;
var phaserSelecteurTour;
var phaserMessagePpal;
var phaserMessagePpalChevronLeft;
var phaserMessagePpalChevronRight;
var dataCardsPhaser = [];
var cardsShallLoad = 0;
var cardsLoaded = 0;
var phaserMaskTimer;


var globTweenTimer;

var groupDesActions;
var groupDesActionsBountons;
var groupSousActions;
var groupCartesAffichess;
var fondActions;
var scotch;
var groupDesCartes;
var phaserTableClassique;
var groupRuban;
var phaserRubanBg;
var phaserRubanBg2;
var phaserRubanBg2Bg;
var phaserRubanBg2Bot;
var phaserRubanBg_s;
var equipiers_pseudos = [];
var equipiers_botTxt = [];
var equipiers_avatars = [];
var equipiers_cadres = [];
var equipiers_leds = [];
var equipiers_scoresImg = [];
var equipiers_scoresTxt = [];
var equipiers_maskrond = [];
/*var equipiers_cadresTop = [];
var equipiers_cadresBot = [];*/
var groupEq = [];

var phaserTimerObject;


var phaserChatElts;

moteurPhaser.initEngine = function (endFunc) {
 if (typeof cacheCarteHR == 'undefined') {
 setTimeout(function () {
 moteurPhaser.initEngine(endFunc);
 },1000);
 return;
 }
 for (var i in cacheCarteHR) {
 cardsShallLoad++;
 var data64 = getCardJSIMG(i);
 dataCardsPhaser[i] = new Image();
 dataCardsPhaser[i].idIT = i;
 dataCardsPhaser[i].onload = function () {
 cardsLoaded++;
 if (cardsLoaded==cardsShallLoad) {
 setTimeout(function () {
  initEngineInt(endFunc);
 },0);
 }
 //gamePhaser.cache.addImage(this.idIT,data64,dataCardsPhaser[this.idIT]);
 };
 dataCardsPhaser[i].src = data64;

 }
 cardsShallLoad++;
 if (typeof dosDesCartes !=='undefined')
 var data64 = imgPresJSprocess(dosDesCartes); 
 else if (typeof versoCarteHR !=='undefined')
 var data64 = imgPresJSprocess(versoCarteHR); 
 else
 var data64 = versoCarte; 

 dataCardsPhaser['Verso'] = new Image();
 dataCardsPhaser['Verso'].idIT = 'Verso';
 dataCardsPhaser['Verso'].onload = function () {
 cardsLoaded++;
 if (cardsLoaded==cardsShallLoad) {
 setTimeout(function () {
 initEngineInt(endFunc);
 },0);
 }
 //gamePhaser.cache.addImage(this.idIT,data64,dataCardsPhaser[this.idIT]);
 };
 dataCardsPhaser['Verso'].src = data64;
}
var loadingSprite;
var currentProgress = 0;

function refreshProgress() {
 if (!loadingSprite) return;
 //llog("File Complete: " + progress + "% - " + totalLoaded + " out of " + totalFiles);
 loadingSprite.text.setText(currentProgress + "%")
 //loadingSprite.masque.x--;
 loadingSprite.masque.clear();
 loadingSprite.masque.beginFill(0xffffff);
 loadingSprite.masque.drawRect(-loadingSprite.logo.width/2, -loadingSprite.logo.height/2, loadingSprite.logo.width*currentProgress/100,loadingSprite.logo.height);
 //loadingSprite.logo.mask = loadingSprite.masque;
}

var createTextCalled = false;
function initEngineInt(endFunc) {
 if (phaserLoadStarted) return;
 phaserLoadStarted = true;
 llog('initEngine');
 $('#webBody').html('');

 
 $(document.body).css('overflow','hidden');
 
 var pixRatio = 1;
 if (window.devicePixelRatio && !isLowGraphism)
 pixRatio = window.devicePixelRatio;
 
 var config = {
 "width": window.innerWidth * pixRatio,//,// * window.devicePixelRatio,//$( window ).width()-20,
 "height": window.innerHeight * pixRatio,//,// * window.devicePixelRatio,//$( window ).height()-20,
 "renderer": Phaser.AUTO,
 "parent": 'webBody',
 transparent:true,
 antialias:true,//!isLowGraphism,
 //"resolution": window.devicePixelRatio,
 "state": { preload: preloadEngine }
 };
 gamePhaser = new Phaser.Game(config);
 
 WebFontConfig = {
 //active: function() { gamePhaser.time.events.add(Phaser.Timer.SECOND, function () {} , this); },//createText
 fontactive : function(familyName, fvd) { gamePhaser.time.events.add(Phaser.Timer.SECOND, function () {
  llog('font active'+familyName+ fvd);
  if (familyName==fontNamePhaser) {
  setTimeout(createText,1000);
  }
 } , this); },//createText
 fontinactive: function(familyName, fvd) {
 llog('Err font font fontinactive'+familyName+ fvd);
  if (familyName==fontNamePhaser) {
  //errorLog('Erreur chargement police de caractere',fvd);
  }
 },
 custom: {
  families: [fontNamePhaser]
  },
 /*google: {
  families: ['Quicksand']//Roboto
 },*/
 timeout: 60000
 
 };
 function checkEventFix() {
 if (createTextCalled) return;
 if ($('html').hasClass( 'wf-active' )) {
 llog("Event fix ");
 createText();
 }
 }

 function checkCreateText() {
 checkEventFix();
 if (!createTextCalled) {
 //errorLog('Erreur chargement police de caractere par timeout 10',"createText not called after 20s - html class : "+$('html').attr('class') );
 createText();
 }
 }
 // This callback is sent the following parameters:
 function fileComplete(progress, cacheKey, success, totalLoaded, totalFiles) {

 if (phaserLoadComplete) return;
 currentProgress = progress;
 refreshProgress();

 }


 function loadComplete() {
 //return;
 llog("Load Complete ");
 if (!loadingSprite) return;
 //text.setText("Load Complete");
 loadingSprite.logo.destroy();
 loadingSprite.logo2.destroy();
 loadingSprite.masque.destroy();
 loadingSprite.text.destroy();
 loadingSprite = null;
 phaserLoadComplete = true;
 
 endFunc();
 }
 function createText() {
 llog('Text loaded engine init ended');
 if (createTextCalled) return;
 createTextCalled = true;
 //gamePhaser.scale.setGameSize($( window ).width() * window.devicePixelRatio, $( window ).height() * window.devicePixelRatio);


 // You can listen for each of these events from Phaser.Loader
 //gamePhaser.load.onLoadStart.add(loadStart, this);
 gamePhaser.load.onFileComplete.add(fileComplete, this);
 gamePhaser.load.onLoadComplete.add(loadComplete, this);

 loadingSprite = {};
 loadingSprite.logo2 = gamePhaser.add.sprite(getWorldW()/2,getWorldH()/2 , 'Logo');
 loadingSprite.logo2.anchor.setTo(0.5,0.5);
 loadingSprite.logo2.alpha=0.2;
 var scaleLogo = 1;
 if (loadingSprite.logo2.width>getWorldW()*0.9)
 scaleLogo = getWorldW()*0.9/loadingSprite.logo2.width;
 
 loadingSprite.logo2.scale.setTo(scaleLogo);
 
 loadingSprite.logo = gamePhaser.add.sprite(getWorldW()/2,getWorldH()/2 , 'Logo');
 loadingSprite.logo.anchor.setTo(0.5,0.5);
 loadingSprite.logo.scale.setTo(scaleLogo);
 

 loadingSprite.masque = gamePhaser.add.graphics(getWorldW()/2,getWorldH()/2);
 
 loadingSprite.masque.beginFill(0xffffff);
 loadingSprite.masque.drawRect(-loadingSprite.logo.width/2, -loadingSprite.logo.height/2, 10,loadingSprite.logo.height);
 loadingSprite.masque.anchor.setTo(0.5,0.5);
 //loadingSprite.masque.x=-loadingSprite.logo.width/2;
 loadingSprite.logo.mask = loadingSprite.masque;
 

 loadingSprite.text = gamePhaser.add.text(getWorldW()/2, getWorldH()/2+loadingSprite.logo.height/2, '0%', { fontSize: '36px', fill: '#fff',font: fontNamePhaser } );
 loadingSprite.text.anchor.setTo(0.5,0);
 loadingSprite.text.setShadow(2, 2, 'rgba(0,0,0,0.5)', 2);

 $( window ).resize(function() {
 setWorldDIM();
 reorganiseCartes ("fromZomm");//
 }); 
 setWorldDIM();
 reorganiseCartes ();//
 
 loadRessources();
 
 }
 function preloadEngine() {
 setWorldDIM();
 llog('Start preloadEngine');
 gamePhaser.stage.disableVisibilityChange = true;
 gamePhaser.load.image('Logo', '/Jeu-Tarot-en-ligne/LogoHeaderSm.png');
 gamePhaser.load.script('webfont', '/js/webfont.js');
 setTimeout(checkCreateText,20000);
 setTimeout(checkEventFix,4000);
 //this._loadingBar = this.add.sprite(this.world.centerX - 100, this.world.centerY, "Logo"); 

 }
 function loadRessources() {
 //gamePhaser.stage.disableVisibilityChange = true;
 gamePhaser.stage.backgroundColor = 0xffffff;

 ///images/logo.png 
 for (var i=1;i<9;i++)
 gamePhaser.load.image('IA-'+i, '/images/IAs/IA-'+i+'.jpg');

 gamePhaser.load.image('FFT', '/Jeu-Tarot-en-ligne/Signalisatipon-FFT4.png');
 
 gamePhaser.load.image('Couleur1', '/images/Couleurs/PhaserB1.png');
 gamePhaser.load.image('Couleur2', '/images/Couleurs/PhaserB2.png');
 gamePhaser.load.image('Couleur3', '/images/Couleurs/PhaserB3.png');
 gamePhaser.load.image('Couleur4', '/images/Couleurs/PhaserB4.png');

 gamePhaser.load.image('AppelC', '/images/Couleurs/WC2.png');
 gamePhaser.load.image('AppelD', '/images/Couleurs/WD2.png');
 gamePhaser.load.image('AppelR', '/images/Couleurs/WR2.png');
 gamePhaser.load.image('AppelV', '/images/Couleurs/WV2.png');

 gamePhaser.load.image('Note', '/img/Jeu/Note.png');
 gamePhaser.load.image('Scotch', '/img/Jeu/Scotch.png');
 
 gamePhaser.load.image('Donneur', '/img/Jeu/Donneur.png');
 gamePhaser.load.image('TourDeJeu', '/img/Jeu/TourDeJeu.png');
 
 gamePhaser.load.image('Avat_Nobody', '/avatars/Nobody2.jpg');
 gamePhaser.load.image('Avat_Unknown', '/avatars/Unknown.jpg');
  
  
 gamePhaser.load.image('Rubans_s', '/Jeu-Tarot-en-ligne/Jeu/Rubans_s.png');
 gamePhaser.load.image('Rubans', '/Jeu-Tarot-en-ligne/Jeu/Rubans.png');
 gamePhaser.load.image('Ruban2', '/img/Jeu/Bandeau.png');
 gamePhaser.load.image('Ruban2Bot', '/img/Jeu/BandeauBot.png');
 gamePhaser.load.image('ChevronLeft', '/img/Jeu/BandeauDeco.png');
 gamePhaser.load.image('ChevronRight', '/img/Jeu/BandeauDeco2.png');
 gamePhaser.load.image('TableClassique', '/img/Jeu/Table1600x1200.png');
 
 gamePhaser.load.image('MasqueB', '/Jeu-Tarot-en-ligne/Masques/MasqueB.gif');
 gamePhaser.load.image('MasqueD', '/Jeu-Tarot-en-ligne/Masques/MasqueD.gif');
 gamePhaser.load.image('Selecteur', '/Jeu-Tarot-en-ligne/Icones/Selecteur.png');

 gamePhaser.load.image('LedVert', '/img/Jeu/LedVert.png');
 gamePhaser.load.image('LedRouge', '/img/Jeu/LedRouge.png');

 gamePhaser.load.image('ReTimerPlein', '/img/Jeu/TimerPlein.png');
 gamePhaser.load.image('ReTimerVide', '/img/Jeu/TimerVide.png');
 gamePhaser.load.image('ChatBot', '/img/Jeu/ChatBot2.png');
 gamePhaser.load.image('ChatMid', '/img/Jeu/ChatMid2.png');
 gamePhaser.load.image('ChatTop', '/img/Jeu/ChatTop2.png');

 gamePhaser.load.image('ChatBot3', '/img/Jeu/ChatBot3.png');
 gamePhaser.load.image('ChatMid3', '/img/Jeu/ChatMid3.png');
 gamePhaser.load.image('ChatTop3', '/img/Jeu/ChatTop3.png');
 
 for (var oo=0;oo<63;oo++)
 gamePhaser.load.image('Emoticon'+oo, '/images/Emoticon/Emoticon'+oo+'.png?v=4');

 gamePhaser.load.image('Accessoire01', '/img/Jeu/Accessoires/Accessoire01.png');
 gamePhaser.load.image('Accessoire02', '/img/Jeu/Accessoires/Accessoire02.png');
 gamePhaser.load.image('Accessoire03', '/img/Jeu/Accessoires/Accessoire03.png');
 gamePhaser.load.image('Accessoire04', '/img/Jeu/Accessoires/Accessoire04.png');
 gamePhaser.load.image('Accessoire05', '/img/Jeu/Accessoires/Accessoire05.png');
 gamePhaser.load.image('Accessoire06', '/img/Jeu/Accessoires/Accessoire06.png');
 gamePhaser.load.image('Accessoire07', '/img/Jeu/Accessoires/Accessoire07.png');
 gamePhaser.load.image('Accessoire08', '/img/Jeu/Accessoires/Accessoire08.png');
 gamePhaser.load.image('Accessoire09', '/img/Jeu/Accessoires/Accessoire09.png');
 gamePhaser.load.image('Accessoire010', '/img/Jeu/Accessoires/Accessoire10.png');
 gamePhaser.load.image('Accessoire011', '/img/Jeu/Accessoires/Accessoire11.png');
 gamePhaser.load.image('Accessoire012', '/img/Jeu/Accessoires/Accessoire12.png');
 
 
 gamePhaser.load.image('CarteOmbre', '/img/Jeu/CarteOmbre.png');
 //gamePhaser.load.image('RoundedCorner', '/img/Jeu/RoundedCorner.png');
 
 gamePhaser.load.image('MaskRondEquipier', '/img/Jeu/MaskRondEquipier.png');
 gamePhaser.load.image('EquipierScore', '/img/Jeu/EquipierScore.png');

 gamePhaser.load.image('iconBigger', '/images/icones/Bigger.png');
 gamePhaser.load.image('iconClose', '/images/icones/Close.png');
 gamePhaser.load.image('iconDown', '/images/icones/down.png');
 
 gamePhaser.load.image('roleNobody', '/img/Jeu/EquipierVide2.png');
 gamePhaser.load.image('roleAnnonce', '/img/Jeu/EquipierVide2.png');
 gamePhaser.load.image('roleEquipier', '/img/Jeu/EquipierEquipier2.png');
 gamePhaser.load.image('rolePreneurPrise', '/img/Jeu/EquipierPrise2.png');
 gamePhaser.load.image('rolePreneurGarde', '/img/Jeu/EquipierGarde2.png');
 gamePhaser.load.image('rolePreneurGardesans', '/img/Jeu/EquipierGardeSans2.png');
 gamePhaser.load.image('rolePreneurGardecontre', '/img/Jeu/EquipierGardeContre2.png');
 gamePhaser.load.image('roleDefaite', '/img/Jeu/EquipierDefeat2.png');
 gamePhaser.load.image('roleVictoire', '/img/Jeu/EquipierVictory2.png');
 
 gamePhaser.load.image('ToproleNobody', '/images/icones/TopCadreVide.png');

 gamePhaser.load.image('btn-warning-border', '/images/Buttons/Btn_Warning_Border.png');
 gamePhaser.load.image('btn-warning-body', '/images/Buttons/Btn_Warning_Body.png');
 
 gamePhaser.load.image('btn-danger-border', '/images/Buttons/Btn_Danger_Border.png');
 gamePhaser.load.image('btn-danger-body', '/images/Buttons/Btn_Danger_Body.png');
 
 gamePhaser.load.image('btn-success-border', '/images/Buttons/Btn_Success_Border.png');
 gamePhaser.load.image('btn-success-body', '/images/Buttons/Btn_Success_Body.png');
 
 gamePhaser.load.image('btn-info-border', '/images/Buttons/Btn_Info_Border.png');
 gamePhaser.load.image('btn-info-body', '/images/Buttons/Btn_Info_Body.png');
 
 gamePhaser.load.image('TimerVide', '/images/icones/TimerVide.png');
 gamePhaser.load.image('TimerPlein', '/images/icones/TimerPlein.png');


 
 if (isLowGraphism)
 gamePhaser.load.image('Selecteur', '/Jeu-Tarot-en-ligne/Icones/SelecteurOFF.png');
 else
 gamePhaser.load.image('Selecteur', '/Jeu-Tarot-en-ligne/Icones/Selecteur.png');
 
 for (var i in cacheCarteHR) {
 var data64 = getCardJSIMG(i);
 gamePhaser.cache.addImage(i,data64,dataCardsPhaser[i]);
 }
 if (typeof dosDesCartes !=='undefined')
 var data64 = imgPresJSprocess(dosDesCartes); 
 else if (typeof versoCarteHR !=='undefined')
 var data64 = imgPresJSprocess(versoCarteHR); 
 else
 var data64 = versoCarte; 
 gamePhaser.cache.addImage('Verso',data64,dataCardsPhaser['Verso']);
 gamePhaser.load.start();
 
 }
}
var MotherEquipierGroup;
function getHeaderHeight() {
 if (phaserRubanBg.alpha>0) return phaserRubanBg.height*groupRuban.scale.y-15;
 if (phaserRubanBg_s.alpha>0) return phaserRubanBg_s.height*groupRuban.scale.y;
 return (phaserRubanBg2Bot.height+phaserRubanBg2Bot.y)*groupRuban.scale.y;
}

function getMainCartesVisibleH() {
 var res = getPlayedCardSize().h;
 if (res>getWorldH()/3)
 res=getWorldH()/3;


 if (!phaserMyTurn) {
 res -= 40;
 if (getWorldW()<500 || getWorldH()<400)
 res -= 40;
 }
 if (res<85)
 res = 85;

 if (getWorldW()<400 && getWorldH()<550)
 return 78;
 if (getWorldH()<400 )
 return 78;
 if (getWorldW()<600 && getWorldH()<630) {
 if (phaserMyTurn)
 res = 90;
 else
 res = 80;
 }
 return res;
 
 
 if (phaserMyTurn) {
 var res = getPlayedCardSize().h;
 if (res>getWorldH()/3)
 res=getWorldH()/3;
 if (res<85)
 res = 85;
 return res;
 }
 if (getWorldW()<400)
 return 95;
 if (getWorldH()<400)
 return 85;
 return 135;
}
function getRubanFontSize() {
 if (getWorldH()<400 && techniqueLevelAnim<50)
 return 45;
 return 58;
}
function getPlateauTxtSize() {

 var msgFontSize = 21;
 if (getWorldW()<800)
 msgFontSize = 20;
 if (getWorldH()<800)
 msgFontSize = 20;
 if (getWorldW()<600)
 msgFontSize = 19;
 if (getWorldW()<500)
 msgFontSize = 18;
 if (getWorldH()<500)
 msgFontSize = 16;
 if (getWorldW()<400)
 msgFontSize = 14;
 return msgFontSize;
}
function getCarteAffW() {
 if (getWorldW()<500)
 return 70;
 if (getWorldH()<500)
 return 70;
 return 100;
}

function getActionAnchor() {
 if (isTechniqueMode) return 0;
 else return 0.5;
}

function geHorizSpacingCards() {
 if (techniqueLevelAnim>50) return 60;
 /*if (getWorldH()<400)
 return 42;*/

 if (getModeleCartes()==2) {
 if (getWorldW()<800 ) {
 return 65;
 }
 if (getWorldW()<1200 ) {
 return 70;
 }
 return 110;
 }
 if (getWorldH()<400)
 return 30;
 if (getWorldW()<500 && getWorldH()<550)
 return 30;
 if (getWorldW()<550)
 return 40;
 return 55;
}
function geVertSpacingCards() {

 if (getModeleCartes()==2) {
 if (getWorldW()<800 ) {
 return 45;
 }
 if (getWorldW()<1200 ) {
 return 60;
 }
 return 65;
 }
 var ecartMinCartesTechnique = 50;
 var ecartMinCartesClassique = 45;
 if (getWorldW()<500 || getWorldH()<400) {
 ecartMinCartesClassique = 40;
 }
 if (getWorldW()<550 && getWorldH()<550)
 ecartMinCartesClassique = 30;
 var ecartMinCartes = techniqueLevelAnim/100*ecartMinCartesTechnique+(100-techniqueLevelAnim)/100*ecartMinCartesClassique;
 return ecartMinCartes;
}

function getPlateauCardSize() {
 var cardWidth0 = 120;
 var cardWidth100 = 150;

 if (!groupEq[0]) return 130;
 
 var cardWidth = cardWidth100*techniqueLevelAnim/100+cardWidth0*(100-techniqueLevelAnim)/100;
 if (cardWidth>groupEq[0].width)
 cardWidth = groupEq[0].width;
 if (cardWidth*129/70>groupEq[0].height)
 cardWidth = groupEq[0].height/129*70;
 if (cardWidth<80)
 cardWidth = 80;
 if (getWorldW()<500)
 cardWidth = 70;
 return {w:cardWidth,h:cardWidth*129/70};
}

//En fait c'est la taille des cartes en main...dsl
function getPlayedCardSize() {
 
 var cardWidth0 = 130;
 var cardWidth100 = getPlateauCardSize().w;

 if (getModeleCartes()==2) { 
 cardWidth0 = 110;
 if (getWorldW()<1200 ) {
 cardWidth0 = 90;
 }
 if (getWorldW()<800 ) {
 cardWidth0 = 60;
 }
 return {w:cardWidth0,h:cardWidth0*129/70};
 }
 if (cardWidth100<100)
 cardWidth100 = 100;
 
 if (getWorldW()<500)
 cardWidth0 = 110;

 if (getWorldH()<500)
 cardWidth0 = 90;
 if (getWorldW()<500 && getWorldH()<550)
 cardWidth0 = 90;
 
 var cardWidth = cardWidth100*techniqueLevelAnim/100+cardWidth0*(100-techniqueLevelAnim)/100;
 //cardWidth = 300;
 return {w:cardWidth,h:cardWidth*129/70};

} 

function getCartesAfficheesWidth() { // DERNIER PLI

 var carteAffW = getCarteAffW();
 var wwi0 = Math.min(800,getWorldW()*80/100);
 var wwi100 = Math.min(carteAffW+(phaserShownCardsPli.cardsList.length-1)*40+6,getWorldW()*50/100);
 if (getWorldW()<500) {
 if (groupEq.length>=5)
 wwi100 = Math.min(carteAffW+40*5+6,carteAffW+(phaserShownCardsPli.cardsList.length-1)*40+6,getWorldW()*50/100);
 else
 wwi100 = Math.min(carteAffW+40*4+6,carteAffW+(phaserShownCardsPli.cardsList.length-1)*40+6,getWorldW()*65/100);
 }
 if (phaserChatElts && getWorldW()>=600) {
 wwi0 = (getWorldW()-20)/2-3;
 }
 if ( getWorldW()<600) {
 wwi0 = getWorldW()-20;
 }
 var wwi = techniqueLevelAnim/100*wwi0+(100-techniqueLevelAnim)/100*wwi100;
 return wwi;
}
function getMessageTexteHeight(hauteurLignesAction) {
 var res = getWorldH()-groupEq[whoamiNum].height*2-10-getHeaderHeight();//groupEq[whoamiNum].goY-groupEq[(whoamiNum+2)%4].goY-groupEq[whoamiNum].height;
 if (phaserActionBtns.length>0) {
 res -= 5+hauteurLignesAction;
 }
 if (res<110)
 res = 110;
 if (res>200)
 res = 200;
 if (res>messagePlateau.textPlateau.height)
 res=messagePlateau.textPlateau.height;
 if (techniqueLevelAnim>0)
 res=messagePlateau.textPlateau.height;
 return res;
}
function getActionsWidth() {

 var actionsWidth0 = Math.min(getWorldW()-groupEq[0].width*2-10,480);
 var actionsWidth100 = Math.min(getWorldW()-20,800);
 /*if (phaserChatElts) {
 actionsWidth100 = (getWorldW()-20)/2-3
 }*/
 var actionsWidth = techniqueLevelAnim==100?actionsWidth100:actionsWidth0;//techniqueLevelAnim/100*actionsWidth100+(100-techniqueLevelAnim)/100*actionsWidth0;
 return actionsWidth;
}
function tweenFond(item,group,x,y,width,height,alpha,radius,endf) {
//return;
 if (!item) return;
 if (item.isTweening) return;
 item.isTweening = true;
 //llog('tweenFond',x+','+y,width+'x'+height,alpha,radius);
 var tww = gamePhaser.add.tween(item);
 tww.to({ x:x,y:y,width:width,height:height,alpha:alpha }, 500, Phaser.Easing.Linear.None, true, 0);

 tww.onComplete.add(function () {
 //llog('recreate fond rounded');
 var oldAlpha = item.alpha;
 item.destroy();
 item = gamePhaser.add.graphics(x,y);
 item.beginFill(0xffffff);
 item.drawRoundedRect(-width/2, 0, width, height,radius);
 item.anchor.setTo(0.5,0); 
 item.alpha = oldAlpha;
 if (group)
 group.add(item);
 if (endf)
 endf(item);
 }, this);
}
function blurredTextInputPhaser() {
 isTextInputFocusedIos=false;
}
function focusedTextInputPhaser() {
 if (isIos()) {
 if (!isTextInputFocusedIos) {
 isTextInputFocusedIos=true;
 }
 }
 showChatPhaserD();
}
moteurPhaser.createGameBoard = function (modeJeu,chatJoueurs,nbJoueurs,etesVousLa,smileyOnly)
{
 setWorldDIM();
 //llog(' * ** * * ** * * ** * * board creation',modeJeu,chatJoueurs,nbJoueurs);
 llog('create Game Board '+nbJoueurs+'players');
 phaserGBShown = true;
 var equipeHTML = '';

 equipeHTML += '<div id="bottomGame">';
 
 
 equipeHTML += '<div class="clear"></div>';
 equipeHTML += '<div id="chatBg" style="padding:1px;">'; 
 equipeHTML += '<table style="" id="chatTable">';  
 equipeHTML += '<tr>'; 
 if (chatJoueurs!=0 && !window.disableEmoticons ) {
 equipeHTML += '<td onclick="toggleEmot();" id="IMGEMOT" style="background-image: url(\'/images/Emoticon/Emoticon0.png?v=4\');"></td>'; 
 } 
 equipeHTML += '<td style="padding-left:4px" id="chtput">';  

 if (chatJoueurs!=0 ) {
 if (!smileyOnly)
 equipeHTML += '<input id="chatInput" autocomplete="off" onclick="focusedTextInputPhaser();" onfocus="focusedTextInputPhaser();" onblur="blurredTextInputPhaser();" maxlength="255" type="text">';
 else
 equipeHTML += '<input id="chatInput" disabled="disabled" value="'+smileyOnly+'" type="text">';
 }
 
 equipeHTML += '</td><td id="actBtnsJ" style="">'; 
 if (chatJoueurs!=0 && !smileyOnly) {
 equipeHTML += '<a id="chatInputBtn" class="btn btn-default btn-bottomGame" onclick="sendChatMessage($$(\'chatInput\').value);" href="#">Dire</a>'; 
 }
 equipeHTML += '</td><td onclick="toggleDisplayMode();" id="IMGMJB" title="'+getGameName(modeJeu)+'" style="background-image: url(\'/Jeu-Tarot-en-ligne/Gratuit/Salon/'+modeJeu+'.png?v=3\');">'; 
 if (document.getElementById('soundEnabled') && document.getElementById('soundEnabled').value=='1') {
 equipeHTML += '</td><td id="muteBtn" title="Activer/Désactiver le son" style="background-image: url(\'/Jeu-Tarot-en-ligne/Jeu/mute.png\');">';
 } 
 equipeHTML += '</td><td id="quitTD"><a style="margin-left:4px;margin-right:14px;" id="BTNQUT" class="btn btn-warning btn-bottomGame" onclick="btnQuitAction();" href="#">Quitter</a>';   
 equipeHTML += '</td></tr></table>';   
 
 equipeHTML += '</div>'; 
 equipeHTML += '</div>';
 equipeHTML += '<div class="clear"></div>'; 
 equipeHTML += '<input type="hidden" id="modeJeuSalon" value="'+modeJeu+'"/> ';
 
 $(document.body).append(equipeHTML);
 

 $('#webBody').css('overflow','hidden');
 $('#webBody').css('height',getWorldH()+'px');


 $('#muteBtn').click(toggleSound);
 if (gcookie('muteMusic')=='1') { gameSoundsEnabled=true;toggleSound(); }
 
 if (chatJoueurs!=0 && !smileyOnly) {
 shouldBlurInputMessageGame = true;

 resetChatInputValidationKeys();

 }
 if (smileyOnly===true) {
 toggleEmot();
 window.isSmileyOnly = true;
 $('#IMGEMOT').hide();
 }
 if (chatJoueurs!=0 ) {

 $('#webBody').click(function () {
 blurAll();
 } );
 }
 window.scroll(0,0);

 var startScrollX = 0,startScrollY = 0;
 var pageScroll=0,pageScrollOffset=0, lastTouchY=0;
 window.startTouchScroll = function(){ 
 $('#webBody canvas').bind('touchmove',function(e){ 
 e.preventDefault(); 
 e.stopPropagation(); 
 var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0]; 
 var elm = $(this).offset(); 
 var maxScroll = $(this).height(); 
 var x = touch.pageX - elm.left; 
 var y = touch.clientY - elm.top; 
 if(lastTouchY!=0){  
 pageScrollOffset = lastTouchY-y;  
 if (pageScroll+pageScrollOffset>$(document).height()-$(window).height()) 
 pageScrollOffset=0;  
 pageScroll += pageScrollOffset;  
 if (pageScroll<0) pageScroll=0; 
 } 
 lastTouchY = y;  
 if(x < $(this).width() && x > 0){  
 if(y < $(this).height() && y > 0){  
 $('html,body').scrollTop(pageScroll);  
 } 
 }
 }); 
 $('#webBody canvas').bind('touchend',function(e){ 
 e.preventDefault();
 e.stopPropagation(); 
 lastTouchY=0; 
 }); 
 $('#webBody canvas').bind('touchstart',function(e){ 
 e.preventDefault(); 
 e.stopPropagation();
 //startScrollX 
 });
 }
 window.startTouchScroll();
 //Phaser.Canvas.setTouchAction(gamePhaser.canvas, "auto"); // disable the default "none"
 //gamePhaser.input.touch.preventDefault = false;
 
 groupCartesAffichess = gamePhaser.add.group();

 phaserTableClassique = gamePhaser.add.sprite(getWorldW()/2,getWorldH() , 'TableClassique');
 phaserTableClassique.anchor.setTo(0.5,0);
 phaserTableClassique.scale.setTo(getWorldW()/phaserTableClassique.width);

 var groupAccessoires = gamePhaser.add.group();

 groupRuban = gamePhaser.add.group();
 groupRuban.y = -100;

 
 
 phaserRubanBg = groupRuban.create(0, 0 , 'Rubans');
 phaserRubanBg.anchor.setTo(0.5,0);
 phaserRubanBg.visible = false;

 phaserRubanBg_s = gamePhaser.add.tileSprite(0, 0, Math.max(getWorldW()*6,15000), 134, 'Rubans_s');
 phaserRubanBg_s.anchor.setTo(0.5,-0.05);


 var rub2WW = Math.max(getWorldW()*6,15000);
 
 phaserRubanBg2Bg = gamePhaser.add.graphics(0,0);
 //phaserRubanBg2Bg.anchor.setTo(0.5,0);
 //phaserRubanBg2Bg.clear();
 phaserRubanBg2Bg.beginFill(0xcc3a2f);//
 phaserRubanBg2Bg.drawRect(-rub2WW/2,0,rub2WW ,60);
 groupRuban.add(phaserRubanBg2Bg);
 
 phaserRubanBg2 = groupRuban.create(0, 0 , 'Ruban2');
 phaserRubanBg2.anchor.setTo(0.5,0);
 phaserRubanBg2.width = rub2WW;

 phaserRubanBg2Bot = groupRuban.create(0, 60 , 'Ruban2Bot');
 phaserRubanBg2Bot.anchor.setTo(0.5,0);
 phaserRubanBg2Bot.width = rub2WW;
 
 phaserMessagePpalChevronLeft = groupRuban.create(0, 56 , 'ChevronLeft');
 phaserMessagePpalChevronRight = groupRuban.create(0, 56 , 'ChevronRight');
 
 groupRuban.add(phaserRubanBg_s);
 
 groupRuban.x = (getWorldW())/2;
 

 phaserSelecteurTour = gamePhaser.add.sprite(getWorldW()/2,15 , 'Selecteur');
 phaserSelecteurTour.anchor.setTo(0.5,1);
 phaserSelecteurTour.scale.setTo( 0.5 );
 phaserSelecteurTour.visible=false;
 
 MotherEquipierGroup = gamePhaser.add.group();
 
 for (var i=0;i<nbJoueurs;i++)
 {
 var accessoire = gamePhaser.add.sprite(50,60 , 'Accessoire0'+Math.floor(1+0+Math.random()*(12)) );
 accessoire.anchor.setTo(0.5,0.5);
 accessoire.scale.setTo(0.7);
 accessoire.angle = Math.random()*40-20;
 groupAccessoires.add(accessoire);
 
 groupEq[i] = gamePhaser.add.group();
 MotherEquipierGroup.add(groupEq[i]);
 groupEq[i].x = getWorldW()/2-290/2;//useless 
 groupEq[i].y = 0;
 groupEq[i].goX = groupEq[i].x;
 groupEq[i].goY = groupEq[i].y;
 groupEq[i].accessoire = accessoire;

 
 equipiers_avatars[i] = gamePhaser.add.button(8+4+40+3, 8+2+4+10, 'Avat_Nobody', actionOnClick);//,0,0,0,groupEq[i] );
 equipiers_avatars[i].input.priorityID = 0; // higher priority
 groupEq[i].add(equipiers_avatars[i]);

 equipiers_avatars[i].scale.setTo(181/equipiers_avatars[i].width);
 
 equipiers_cadres[i] = groupEq[i].create(0, 0 , 'roleNobody');
 
 equipiers_leds[i] = groupEq[i].create(22, 146 , 'LedVert');
 
 equipiers_scoresImg[i] = groupEq[i].create(142, 20 , 'EquipierScore');
 equipiers_scoresImg[i].anchor.setTo(0.5,0.5);
 equipiers_scoresImg[i].visible = false;
 equipiers_scoresTxt[i] = gamePhaser.add.text(142, 21, '0 pts', { fontSize: '16px', fill: '#000',font: fontNamePhaser },groupEq[i]);
 equipiers_scoresTxt[i].anchor.setTo(0.5,0.5);
 equipiers_scoresTxt[i].visible = false;
 
 equipiers_maskrond[i] = groupEq[i].create(10, 180 , 'MaskRondEquipier');
 equipiers_maskrond[i].visible = false;

 

 equipiers_pseudos[i] = gamePhaser.add.text(56, 2, 'Joueur '+(1+i), { fontSize: '22px', fill: '#fff',font: fontNamePhaser },groupEq[i]);
 equipiers_pseudos[i].anchor.setTo(0,0);
 equipiers_pseudos[i].setShadow(2, 2, 'rgba(0,0,0,0.5)', 2);

 equipiers_botTxt[i] = gamePhaser.add.text(0, 24+equipiers_cadres[i].height-30-30, '', { fontSize: '22px', fill: '#fff',font: fontNamePhaser },groupEq[i]);
 equipiers_botTxt[i].anchor.setTo(0,0);
 equipiers_botTxt[i].setShadow(2, 2, 'rgba(0,0,0,0.5)', 2);

 var donneur = groupEq[i].create(238, 120 , 'Donneur');
 donneur.anchor.setTo(0.5,0.5);
 donneur.visible = false;
 donneur.scale.setTo(1);
 
 
 var tourDeJeuE = groupEq[i].create(238, 120 , 'TourDeJeu');
 tourDeJeuE.anchor.setTo(0.5,0.5);
 tourDeJeuE.visible = false;
 tourDeJeuE.scale.setTo(1);
 
 
 var maskPseudo = gamePhaser.add.graphics(2+44+3, 0+146);
 groupEq[i].add(maskPseudo);
 maskPseudo.beginFill(0xffffff);
 maskPseudo.drawRect(0, -24, 216,100);
 equipiers_pseudos[i].mask = maskPseudo;
 equipiers_pseudos[i].donneurIcon = donneur;
 groupEq[i].tourDeJeuE = tourDeJeuE;
 
 $(equipiers_avatars[i]).data("pseudo","Init");
 }
 if (nbJoueurs==6) MotherEquipierGroup.bringToTop(groupEq[4]);
 
 var ratioRub = getWorldW()/2600;
 if (getWorldW()>1300)
 ratioRub = 1/2;
 

 
 
 phaserTimerObject = {};
 var phasergroupTimer = gamePhaser.add.group();
 phaserTimerObject.phasergroupTimer = phasergroupTimer;

 phaserTimerObject.phasertimerVide = phasergroupTimer.create(0, 0 , 'TimerVide');
 phaserTimerObject.phasertimerPlein= phasergroupTimer.create(0, 0 , 'TimerPlein');

 phaserTimerObject.phasertimerVide2 = phasergroupTimer.create(0, -4 , 'ReTimerVide');
 phaserTimerObject.phasertimerPlein2= phasergroupTimer.create(0, -4 , 'ReTimerPlein');
 
 phaserTimerObject.phasertimerVide.scale.setTo(0.5);
 phaserTimerObject.phasertimerPlein.scale.setTo(0.5);
 phaserTimerObject.phasertimerVide.x = -phaserTimerObject.phasertimerVide.width/2;
 phaserTimerObject.phasertimerPlein.x = -phaserTimerObject.phasertimerPlein.width/2;


 phaserTimerObject.phasertimerVide2.scale.setTo(0.5);
 phaserTimerObject.phasertimerPlein2.scale.setTo(0.5);
 phaserTimerObject.phasertimerVide2.x = -phaserTimerObject.phasertimerVide2.width/2;
 phaserTimerObject.phasertimerPlein2.x = -phaserTimerObject.phasertimerPlein2.width/2;

 phaserTimerObject.phaserMaskTimer = gamePhaser.add.graphics(0, 0);
 phasergroupTimer.add(phaserTimerObject.phaserMaskTimer);
 phaserTimerObject.phaserMaskTimer.beginFill(0xffffff);
 phaserTimerObject.phaserMaskTimer.drawRect(-phaserTimerObject.phasertimerVide.width*3/2, 0,phaserTimerObject.phasertimerVide.width, 210);
 phaserTimerObject.phasertimerPlein.mask = phaserTimerObject.phaserMaskTimer;
 phasergroupTimer.visible = false;

 phaserTimerObject.phaserMaskTimer2 = gamePhaser.add.graphics(0, 0);
 phasergroupTimer.add(phaserTimerObject.phaserMaskTimer2);
 phaserTimerObject.phaserMaskTimer2.beginFill(0xffffff);
 phaserTimerObject.phaserMaskTimer2.drawRect(-phaserTimerObject.phasertimerVide2.width*3/2, 0,phaserTimerObject.phasertimerVide2.width, 210);
 phaserTimerObject.phasertimerPlein2.mask = phaserTimerObject.phaserMaskTimer2;
 

 groupDesCartes = gamePhaser.add.group();

 groupSousActions = gamePhaser.add.group();
 groupDesActions = gamePhaser.add.group();
 groupDesActionsBountons = gamePhaser.add.group();
 groupDesActions.add(groupDesActionsBountons);
 

 
 fondActions = groupSousActions.create(getWorldW()/2, getWorldH()/2 , 'Note');
 fondActions.anchor.setTo(0.5,0); 
 fondActions.alpha = 0;
 
 scotch = groupSousActions.create(getWorldW()/2, getWorldH()/2 , 'Scotch');
 scotch.anchor.setTo(0.5,0.5); 
 scotch.alpha = 0;
 
 /*fondActions = gamePhaser.add.graphics(getWorldW()/2,getWorldH()/2);
 fondActions.anchor.setTo(0.5,0);
 fondActions.beginFill(0xffffff);
 fondActions.drawRoundedRect(-15, 0, 30, 10,2);
 fondActions.alpha = 0;
 groupSousActions.add(fondActions);*/
 phaserMessagePpal = gamePhaser.add.text( 0 , 70, ' ', { fontSize: getRubanFontSize()+'px', fill: '#fff',font: fontNamePhaser, wordWrap: true, wordWrapWidth:getWorldW() },groupRuban);//#ffcc43
 phaserMessagePpal.fontWeight = 'bold';
 phaserMessagePpal.anchor.setTo(0.5 ,0.5);
 phaserMessagePpal.setShadow(2, 2, 'rgba(0,0,0,0.5)', 1);


 if (chatJoueurs!=0) {
 var groupChat = gamePhaser.add.group();
 var txtValue = 'Conversation';
 var wwi = Math.min(800,getWorldW()*80/100);
 var fondChat = gamePhaser.add.button(getWorldW()/2,320 , 'ToproleNobody', selMoteur.hideChat );
 fondChat.anchor.setTo(0.5,0);
 fondChat.input.priorityID = 3;
 groupChat.add(fondChat);
 
 var textChat = gamePhaser.add.text(getWorldW()/2, 320, txtValue, { fontSize: '18px', fill: '#444',font: fontNamePhaser, wordWrap: true, wordWrapWidth: wwi });
 textChat.anchor.setTo(0,0);
 textChat.alpha = 0;
 groupChat.add(textChat);
 
 var textChat2 = gamePhaser.add.text(getWorldW()/2, 320, txtValue, { fontSize: '18px', fill: '#fff',font: fontNamePhaser, wordWrap: true, wordWrapWidth: wwi });
 textChat2.anchor.setTo(0,0);
 groupChat.add(textChat2);
 textChat2.setShadow(1, 1, 'rgba(0,0,0,1)', 2 );
 textChat2.alpha = 0;

 var nextBtn = gamePhaser.add.button(getWorldW(),350, 'iconDown', phaserNextChatPage );
 nextBtn.anchor.setTo(1,0);
 nextBtn.angle = 180;
 nextBtn.alpha = 0;
 nextBtn.input.priorityID = 4;
 nextBtn.width = 30;
 nextBtn.height = 30;
 groupChat.add(nextBtn);

 var prevBtn = gamePhaser.add.button(getWorldW(),350, 'iconDown', phaserPrevChatPage );
 //prevBtn.scale.setTo(1,-1);
 prevBtn.alpha = 0;
 prevBtn.anchor.setTo(1,0);
 prevBtn.input.priorityID = 4;
 prevBtn.width = 30;
 prevBtn.height = 30;
 groupChat.add(prevBtn);
 
 
 var closeBtn = gamePhaser.add.button(getWorldW(),320, 'iconClose', selMoteur.hideChat);
 closeBtn.anchor.setTo(1,0);
 closeBtn.width = 30;
 closeBtn.height = 30;
 groupChat.add(closeBtn);
 //groupChat.alpha = 0; 
 //textChat.align = 'center';
 //
 textChat.setTextBounds(0, 0,wwi , 300);
 //textChat.setShadow(1, 1, 'rgba(255,255,255,1)', 1 );
 
 fondChat.width = wwi;
 fondChat.height = textChat.height;
 fondChat.alpha = 0;
 
 phaserChatElts = {
 groupChat:groupChat,
 fondChat:fondChat,
 textChat:textChat,
 textChat2:textChat2,
 closeBtn:closeBtn,
 nextBtn:nextBtn,
 prevBtn:prevBtn
 }
 //equipeHTML += getChatHTML('<u>Conversation</u>');
 } 
 reorganiseCartes ("fromZomm");


 function actionOnClick () {
 //llog(this);
 var self = this;
 if (self.tempDisableJoueurBtn) return;
 self.tempDisableJoueurBtn = 1;
 setTimeout(function () { self.tempDisableJoueurBtn=0; },900);
 //llog('actionOnClick');
 showJoueurDetails (self);
 }

}

function getLevelAnimValue(pos0,pos100) {
 return techniqueLevelAnim/100*pos100+(100-techniqueLevelAnim)/100*pos0;
}
var tempDisableJoueurBtn = 0;

var isTechniqueMode = false;
var techniqueLevelAnim = 0;

function toggleDisplayMode () {
 isTechniqueMode = !isTechniqueMode;
 if (isTechniqueMode) 
 techniqueLevelAnim = 100;
 else
 techniqueLevelAnim = 0;
 selMoteur.reorganiseCartesReal ();
}
var phaserTweenDuration;
var phaserTweenType;
//var horizSpacingCards = 55;
var mainNbLignesPhaser = 0;

var isTextInputFocusedIos = false;
var phaserCurrentJeuIsFicheJoueurShown = false;

moteurPhaser.reorganiseCartesReal = function reorganiseCartesReal (fromResize)
{ 
 var stack = new Error().stack;

 //llog('************************** reorganiseCartesReal fromResize',fromResize,stack);
 phaserTweenNeedsRefresh = false;

 if (loadingSprite) {
 
 var pixRatio = 1;
 if (window.devicePixelRatio && !isLowGraphism)
 pixRatio = window.devicePixelRatio;

 var newScaleW = getWorldW();
 var newScaleH = getWorldH();//$( window ).height();
 
 gamePhaser.scale.setGameSize(newScaleW , newScaleH );


 if (pixRatio!=1) {
 gamePhaser.scale._gameSize.setTo(0, 0, newScaleW * pixRatio, newScaleH * pixRatio);
 gamePhaser.scale.game.renderer.resize(newScaleW*pixRatio,newScaleH*pixRatio);
 gamePhaser.width = newScaleW*pixRatio;
 gamePhaser.height = newScaleH*pixRatio;
 gamePhaser.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
 gamePhaser.world.scale.setTo(pixRatio);
 }
 
 var scaleLogo = 1;
 loadingSprite.logo2.scale.setTo(scaleLogo);
 if (loadingSprite.logo2.width>getWorldW()*0.9)
 scaleLogo = getWorldW()*0.9/loadingSprite.logo2.width;
 
 loadingSprite.logo.scale.setTo(scaleLogo);
 loadingSprite.logo2.scale.setTo(scaleLogo);
 loadingSprite.logo.x = getWorldW()/2;
 loadingSprite.logo.y = getWorldH()/2;
 loadingSprite.logo2.x = getWorldW()/2;
 loadingSprite.logo2.y = getWorldH()/2;
 loadingSprite.masque.x = getWorldW()/2;
 loadingSprite.masque.y = getWorldH()/2;
 loadingSprite.text.x = getWorldW()/2;
 loadingSprite.text.y = getWorldH()/2+loadingSprite.logo.height/2;
 refreshProgress();
 return;
 }
 if (!phaserGBShown) return;
 
 
 if (techniqueLevelAnim==0 || techniqueLevelAnim==100) {
 
 phaserTweenDuration = 400;
 phaserTweenType = Phaser.Easing.Cubic.Out;
 }
 else {
 if (fromResize!='fromTimeout') return;
 phaserTweenDuration = 250;
 phaserTweenType = Phaser.Easing.Linear.None;
 }
 if (!groupEq[0]) {
 reorganiseCartes();
 llog('err groupEq vide');
 //alert('poi'); 
 return;
 }
 if (phaserTweenProcessing) {
 phaserTweenNeedsRefresh = true;
 return;
 }
 phaserTweenProcessing = true;
 
 if (techniqueLevelAnim==100)
 $(document.body).css('overflow-y','scroll');
 else if ( !jeuIsFicheJoueurShown) {
 if (phaserCurrentJeuIsFicheJoueurShown) {
 phaserCurrentJeuIsFicheJoueurShown = false;
 $(document.body).css('overflow','hidden');
 }
 } else {
 if (!phaserCurrentJeuIsFicheJoueurShown) {
 phaserCurrentJeuIsFicheJoueurShown = true;
 $(document.body).css('overflow-y','scroll');
 } 
 }
 
 var windowWidthTechnique = getWorldW()-32;
 var windowWidthClassique = getWorldW()-32;///2;

 var windowWidth = techniqueLevelAnim/100*windowWidthTechnique+(100-techniqueLevelAnim)/100*windowWidthClassique;
 

 /*var ecartMinCartesTechnique = geVertSpacingCards();
 var ecartMinCartesClassique = 45;
 if (getWorldW()<400 || getWorldH()<400) {
 ecartMinCartesClassique = 40;
 }*/

 var ecartMinCartes = geVertSpacingCards();//techniqueLevelAnim/100*ecartMinCartesTechnique+(100-techniqueLevelAnim)/100*ecartMinCartesClassique;
 
 var ccW = getPlayedCardSize().w; 
 
 var numCartesJeu = 0;
 var nbLigneCartes = 1;
 var numCarteLigne = numCartesJeu;
 
 if ( phaserCards.length>0) {
 numCartesJeu=phaserCards.length;

 numCarteLigne = numCartesJeu;

 var spacingCards = trouveEcartCartes (numCarteLigne,windowWidth,ccW,nbLigneCartes);
 while (spacingCards<ecartMinCartes) {
 nbLigneCartes++;
 numCarteLigne = Math.ceil(numCartesJeu/nbLigneCartes);
 spacingCards = trouveEcartCartes (numCarteLigne,windowWidth,ccW,nbLigneCartes);

 }
 }
 mainNbLignesPhaser = nbLigneCartes;
 
 // ********* Equipiers
 var ratioEquipiers = 1;
 var paddingEquipiers;
 if (getWorldW()<700) paddingEquipiers = 10;
 else paddingEquipiers = 28;
 
 var defWidthEquip = 291;
 
 var equipiersWidth = defWidthEquip*groupEq.length+paddingEquipiers*(groupEq.length-1);
 if (getWorldW()<equipiersWidth) {
 ratioEquipiers = getWorldW()/equipiersWidth;
 }
 var rationEquClas = Math.min(1,getWorldW()/5/291,(getWorldH()-140-(nbLigneCartes-1)*geHorizSpacingCards())/2.3/226);
 if (rationEquClas<0.5) rationEquClas = 0.5;
 if (getWorldW()<500 ) rationEquClas = 0.4;
 if ( getWorldH()<500 ) rationEquClas = 0.45;
 if ( getWorldH()<400 ) rationEquClas = 0.4;
 if ( getWorldH()<300 ) rationEquClas = 0.35;

 var aspectRatioMultiL = 1;
 if (getWorldW()<500 ) {
 if (groupEq.length==5 || groupEq.length==6)
 aspectRatioMultiL = 5/3;
 else
 aspectRatioMultiL = 2;
 ratioEquipiers *= aspectRatioMultiL;
 }
 
 ratioEquipiers = getLevelAnimValue(rationEquClas,ratioEquipiers);

 var topRuban = 200*ratioEquipiers+10+20+5;
 var decalTopEquipierTech = 0;
 
 if (topRuban<getPlateauCardSize().h) {
 decalTopEquipierTech = getPlateauCardSize().h-topRuban;
 topRuban=getPlateauCardSize().h;
 }
 
 //var addHeig = 20;
 var scaledHeight;
 for (var i in groupEq) {
 groupEq[i].scale.setTo(ratioEquipiers);
 if (equipiers_pseudos[i]) {
 equipiers_pseudos[i].fontSize = 24;
 equipiers_botTxt[i].fontSize = 24;
 if (!equipiers_maskrond[i].visible )
 equipiers_botTxt[i].x = 26;
 else
 equipiers_botTxt[i].x = 56;

 equipiers_pseudos[i].y = 147;
 scaledHeight = 200;
 }
 }
 var posTechEquip = [];
 var decalEq = (getWorldW()-equipiersWidth*ratioEquipiers)/2;
 if (getWorldW()<500 ) {
 decalEq = (getWorldW()-equipiersWidth*ratioEquipiers/aspectRatioMultiL)/2;
 }

 var distAccessoire = 1;
 if (getWorldW()<600 )
 distAccessoire = 0.5;
 var posEquipierHaut;
 var lastAlpha = 0;
 
 if (getWorldW()<500 ) {
 topRuban += groupEq[0].height-10;
 }
 for (var i in groupEq)
 {
 var widthOne = (defWidthEquip+paddingEquipiers)*ratioEquipiers;
 var posx = widthOne*i+decalEq-getWorldW()/2+groupEq[i].width/2;
 var posy = 20-getWorldH()/2+groupEq[i].height/2-10+decalTopEquipierTech/2;
 if (getWorldW()<500 ) {
 var indexNext = Math.ceil(groupEq.length/2);
 if (i>=indexNext ) {
 if (groupEq.length<=4)
 posx = -(1+indexNext-i)*widthOne+widthOne-getWorldW()/2+groupEq[i].width/2;
 else
 posx = widthOne/2-(1+indexNext-i)*widthOne+widthOne-getWorldW()/2+groupEq[i].width/2;
 posy += groupEq[0].height-15;
 } else {
 /*if (groupEq.length<=4)
 posx += widthOne/2;*/

 if (groupEq.length<=4)
 posx = -widthOne*i+widthOne+decalEq-getWorldW()/2+groupEq[i].width/2;
 else
 posx = -widthOne*i+widthOne*2+decalEq-getWorldW()/2+groupEq[i].width/2;
 posy = 0-getWorldH()/2+groupEq[i].height/2;
 }
 posy +=5;
 }
 var alpha0 = Math.atan2(posy,posx)/Math.PI*180;
 var dist0 = Math.sqrt(Math.pow(posx,2)+Math.pow(posy,2)); 


 var pos100x = 10;
 var pos100y = 0;

 var dist100;
 var alpha100;
 //var deltaAngleStart = 360/4*whoamiNum*Math.PI/2;
 var alphaAccessoire = 0;
 if (techniqueLevelAnim==0 && !playCardStarted )
 alphaAccessoire = 1;
 
 if (getWorldW()<600 )
 groupEq[i].accessoire.scale.setTo(0.3);
 else if (getWorldW()<800 || getWorldH()<700)
 groupEq[i].accessoire.scale.setTo(0.4);
 else
 groupEq[i].accessoire.scale.setTo(0.7);
 
 if (groupEq.length==3) {

 posEquipierHaut = groupEq[i].height;
 if (i==(whoamiNum+2)%3) {

 
 //pos100x = getWorldW()*0.7/2*0.9+groupEq[i].width/2-20;
 pos100x = -getWorldW()/2+groupEq[i].width/2;
 if (pos100x < -getWorldW()/2+groupEq[i].width/2)
 pos100x = -getWorldW()/2+groupEq[i].width/2;
 //pos100y = -30-(nbLigneCartes-1)*20;
 pos100y = -getWorldH()/3+groupEq[i].height/2+60;
 if ( getWorldH()<400 ) {
 pos100y -= 55;
 }
 
 alpha100 = Math.atan2(pos100y,pos100x)/Math.PI*180;
 dist100 = Math.sqrt(Math.pow(pos100x,2)+Math.pow(pos100y,2)); 
 
 var twe = gamePhaser.add.tween(groupEq[i].accessoire);
 twe.to({ 
  alpha:alphaAccessoire,
  x:pos100x+getWorldW()/2+groupEq[i].width/2+(10+groupEq[i].accessoire.width/4)*distAccessoire, 
  y:pos100y+getWorldH()/2+groupEq[i].height/2+groupEq[i].accessoire.height/4*distAccessoire 
 }, phaserTweenDuration, phaserTweenType, true, 0);
 /*
 pos100x = 0;//0.1*getWorldW();
 pos100y = -getWorldH()/2+groupEq[i].height/2+60;
 if ( getWorldH()<400 ) {
 pos100x -= 100;
 pos100y += 20;
 }
 else if ( getWorldW()<800 && phaserShownCardsPli ) {
 pos100x -= 120;
 }
 if (phaserShownCardsPli && pos100x+groupEq[i].width/2.5>getWorldW()/2-getCartesAfficheesWidth()) {
 pos100x = getWorldW()/2-getCartesAfficheesWidth()-groupEq[i].width/2.5;
 }
 if (pos100x<-getWorldW()/2+groupEq[i].width/2+10)
 pos100x = -getWorldW()/2+groupEq[i].width/2+10;
 posEquipierHaut = pos100y+getWorldH()/2;
 if ( getWorldH()<400 ) {
 pos100y -= 55;
 }
 
 alpha100 = Math.atan2(pos100y,pos100x)/Math.PI*180;
 dist100 = Math.sqrt(Math.pow(pos100x,2)+Math.pow(pos100y,2)); 
 
 var twe = gamePhaser.add.tween(groupEq[i].accessoire);
 twe.to({ 
  alpha:alphaAccessoire,
  x:pos100x+groupEq[i].width/2+50*distAccessoire+getWorldW()/2-groupEq[i].accessoire.width/3, 
  y:pos100y+getWorldH()/2+groupEq[i].height/2+groupEq[i].accessoire.height/3*distAccessoire 
 }, phaserTweenDuration, phaserTweenType, true, 0);*/
 
 
 } else if (i==whoamiNum) {
 pos100x = 0;//-0.2*getWorldW()/2;
 pos100y = getWorldH()/2-groupEq[i].height/2-(nbLigneCartes-1)*geHorizSpacingCards()-5;
 if ( phaserCards.length>0) {
 pos100y -= getMainCartesVisibleH();
 } else if (phaserChatElts) {
 if (getWorldW()<800)
 pos100y -= 34;
 else
 pos100y -= 50;
 }
 alpha100 = Math.atan2(pos100y,pos100x)/Math.PI*180;
 dist100 = Math.sqrt(Math.pow(pos100x,2)+Math.pow(pos100y,2)); 

  //groupDesCartes.bringToTop(myPlayedCard);
 MotherEquipierGroup.bringToTop(groupEq[i]);
  
 var twe = gamePhaser.add.tween(groupEq[i].accessoire);
 twe.to({ 
  alpha:alphaAccessoire,
  x:pos100x+groupEq[i].width/2+50*distAccessoire+getWorldW()/2-groupEq[i].accessoire.width/3, 
  y:pos100y+getWorldH()/2+groupEq[i].height/2-10*distAccessoire
 }, phaserTweenDuration, phaserTweenType, true, 0);
 
 
 } else if (i==(whoamiNum+1)%3) {
 pos100x = getWorldW()*0.7/2*0.9+groupEq[i].width/2-20;
 if (pos100x > getWorldW()/2-groupEq[i].width/2)
 pos100x = getWorldW()/2-groupEq[i].width/2;

 pos100y = -getWorldH()/3+groupEq[i].height/2+60;
 if ( getWorldH()<400 ) {
 pos100y -= 55;
 }
 
 alpha100 = Math.atan2(pos100y,pos100x)/Math.PI*180;
 dist100 = Math.sqrt(Math.pow(pos100x,2)+Math.pow(pos100y,2)); 
 
 var twe = gamePhaser.add.tween(groupEq[i].accessoire);
 twe.to({ 
  alpha:alphaAccessoire,
  x:pos100x+getWorldW()/2-groupEq[i].width/2-(10+groupEq[i].accessoire.width/4)*distAccessoire, 
  y:pos100y+getWorldH()/2+groupEq[i].height/2+groupEq[i].accessoire.height/4*distAccessoire 
 }, phaserTweenDuration, phaserTweenType, true, 0);
 
 } else {
 llog('errrrrrrrrrrrrrrrr groupEq ',i);
 }
 
 
 
 
 
 } else if (groupEq.length==4) {
 
 if (i==(whoamiNum+2)%4) {
 pos100x = 0;//0.1*getWorldW();
 pos100y = -getWorldH()/2+groupEq[i].height/2+60;
 if ( getWorldH()<400 ) {
 pos100x -= 100;
 pos100y += 20;
 }
 else if ( getWorldW()<800 && phaserShownCardsPli ) {
 pos100x -= 120;
 }
 if (phaserShownCardsPli && pos100x+groupEq[i].width/2.5>getWorldW()/2-getCartesAfficheesWidth()) {
 pos100x = getWorldW()/2-getCartesAfficheesWidth()-groupEq[i].width/2.5;
 }
 if (pos100x<-getWorldW()/2+groupEq[i].width/2+10)
 pos100x = -getWorldW()/2+groupEq[i].width/2+10;
 posEquipierHaut = pos100y+getWorldH()/2;
 if ( getWorldH()<400 ) {
 pos100y -= 55;
 }
 
 alpha100 = Math.atan2(pos100y,pos100x)/Math.PI*180;
 dist100 = Math.sqrt(Math.pow(pos100x,2)+Math.pow(pos100y,2)); 
 
 var twe = gamePhaser.add.tween(groupEq[i].accessoire);
 twe.to({ 
  alpha:alphaAccessoire,
  x:pos100x+groupEq[i].width/2+50*distAccessoire+getWorldW()/2-groupEq[i].accessoire.width/3, 
  y:pos100y+getWorldH()/2+groupEq[i].height/2+groupEq[i].accessoire.height/3*distAccessoire 
 }, phaserTweenDuration, phaserTweenType, true, 0);
 
 
 } else if (i==(whoamiNum+3)%4) {

 pos100x = -getWorldW()*0.7/2*0.9-groupEq[i].width/2+20;
 if (pos100x < -getWorldW()/2+groupEq[i].width/2)
 pos100x = -getWorldW()/2+groupEq[i].width/2;
 pos100y = -30-(nbLigneCartes-1)*20;
 if ( getWorldH()<400 ) {
 pos100y += 15;
 }
 
 alpha100 = Math.atan2(pos100y,pos100x)/Math.PI*180+360;
 dist100 = Math.sqrt(Math.pow(pos100x,2)+Math.pow(pos100y,2)); 
 
 var twe = gamePhaser.add.tween(groupEq[i].accessoire);
 twe.to({ 
  alpha:alphaAccessoire,
  x:pos100x+getWorldW()/2+groupEq[i].width/2+groupEq[i].accessoire.width/4*distAccessoire, 
  y:pos100y+getWorldH()/2+groupEq[i].height/2+groupEq[i].accessoire.height/4*distAccessoire
 }, phaserTweenDuration, phaserTweenType, true, 0);
 
 
 } else if (i==whoamiNum) {
 pos100x = 0;//-0.2*getWorldW()/2;
 pos100y = getWorldH()/2-groupEq[i].height/2-(nbLigneCartes-1)*geHorizSpacingCards()-5;
 if ( phaserCards.length>0) {
 pos100y -= getMainCartesVisibleH();
 } else if (phaserChatElts) {
 if (getWorldW()<800)
 pos100y -= 34;
 else
 pos100y -= 50;
 }
 alpha100 = Math.atan2(pos100y,pos100x)/Math.PI*180;
 dist100 = Math.sqrt(Math.pow(pos100x,2)+Math.pow(pos100y,2)); 

  //groupDesCartes.bringToTop(myPlayedCard);
 MotherEquipierGroup.bringToTop(groupEq[i]);
  
 var twe = gamePhaser.add.tween(groupEq[i].accessoire);
 twe.to({ 
  alpha:alphaAccessoire,
  x:pos100x+groupEq[i].width/2+50*distAccessoire+getWorldW()/2-groupEq[i].accessoire.width/3, 
  y:pos100y+getWorldH()/2+groupEq[i].height/2-10*distAccessoire
 }, phaserTweenDuration, phaserTweenType, true, 0);
 
 
 } else if (i==(whoamiNum+1)%4) {
 pos100x = getWorldW()*0.7/2*0.9+groupEq[i].width/2-20;
 if (pos100x > getWorldW()/2-groupEq[i].width/2)
 pos100x = getWorldW()/2-groupEq[i].width/2;
 pos100y = -30-(nbLigneCartes-1)*20;
 if ( getWorldH()<400 || getWorldW()<350) {
 pos100y += 15;
 if (phaserShownCardsPli) {
 pos100y = getWorldH()/2-groupEq[i].height/2-(nbLigneCartes-1)*geHorizSpacingCards()-10-getMainCartesVisibleH();
 }
 }
 
 alpha100 = Math.atan2(pos100y,pos100x)/Math.PI*180;
 dist100 = Math.sqrt(Math.pow(pos100x,2)+Math.pow(pos100y,2)); 
 
 var twe = gamePhaser.add.tween(groupEq[i].accessoire);
 twe.to({ 
  alpha:alphaAccessoire,
  x:pos100x+getWorldW()/2-groupEq[i].width/2-(10+groupEq[i].accessoire.width/4)*distAccessoire, 
  y:pos100y+getWorldH()/2+groupEq[i].height/2+groupEq[i].accessoire.height/4*distAccessoire 
 }, phaserTweenDuration, phaserTweenType, true, 0);
 
 } else {
 llog('errrrrrrrrrrrrrrrr groupEq ',i);
 }
 
 
 
 } else if (groupEq.length==5) { //  5 JOUEURS *****************

 
 
 
 if (i==(whoamiNum+3)%5) {
 

 pos100x = -getWorldW()*0.3/2*0.9-groupEq[i].width/2+20;
 pos100y = -getWorldH()/2+groupEq[i].height/2+60;
 if (pos100x < -getWorldW()/2+groupEq[i].width/2)
 pos100x = -getWorldW()/2+groupEq[i].width/2;

 if ( getWorldW()<500 ) {
 pos100y += 20;
 }
 if ( getWorldH()<400 ) {
 pos100y += 20;
 pos100x -= 100;
 }
 else if (getWorldW()<800 && phaserShownCardsPli ) {
 pos100x -= 120;
 }
 if (pos100x<-getWorldW()/2+groupEq[i].width/2)
 pos100x = -getWorldW()/2+groupEq[i].width/2;
 
 
 alpha100 = Math.atan2(pos100y,pos100x)/Math.PI*180;
 dist100 = Math.sqrt(Math.pow(pos100x,2)+Math.pow(pos100y,2)); 
 
 var twe = gamePhaser.add.tween(groupEq[i].accessoire);
 twe.to({ alpha:alphaAccessoire,x:pos100x+getWorldW()/2+groupEq[i].width/2+10+groupEq[i].accessoire.width/2, y:pos100y+getWorldH()/2+35 }, phaserTweenDuration, phaserTweenType, true, 0);
 
 } else if (i==(whoamiNum+4)%5) {
 

 pos100x = -getWorldW()*0.7/2*0.9-groupEq[i].width/2+20;
 if (pos100x < -getWorldW()/2+groupEq[i].width/2)
 pos100x = -getWorldW()/2+groupEq[i].width/2;
 pos100y = -30-(nbLigneCartes-1)*20;
 if ( getWorldH()<400 ) {

 pos100y = getWorldH()/2-groupEq[i].height/2-(nbLigneCartes-1)*geHorizSpacingCards()-10;
 if ( phaserCards.length>0) {
  pos100y -= getMainCartesVisibleH();
 } else if (phaserChatElts) {
  if (getWorldW()<800)
  pos100y -= 34;
  else
  pos100y -= 50;
 }
 pos100y -= 15;
 }
 
 alpha100 = Math.atan2(pos100y,pos100x)/Math.PI*180+360;
 dist100 = Math.sqrt(Math.pow(pos100x,2)+Math.pow(pos100y,2)); 
 
 var twe = gamePhaser.add.tween(groupEq[i].accessoire);
 twe.to({ alpha:alphaAccessoire,x:pos100x+getWorldW()/2+groupEq[i].width/2+groupEq[i].accessoire.width/2, y:pos100y+getWorldH()/2+35 }, phaserTweenDuration, phaserTweenType, true, 0);
 
 
 } else if (i==whoamiNum) {

 pos100x = 0;//-0.2*getWorldW()/2;
 pos100y = getWorldH()/2-groupEq[i].height/2-(nbLigneCartes-1)*geHorizSpacingCards()-10;
 if ( phaserCards.length>0) {
 pos100y -= getMainCartesVisibleH();
 } else if (phaserChatElts) {
 if (getWorldW()<800)
  pos100y -= 34;
 else
  pos100y -= 50;
 }
 alpha100 = Math.atan2(pos100y,pos100x)/Math.PI*180;
 dist100 = Math.sqrt(Math.pow(pos100x,2)+Math.pow(pos100y,2)); 
 
 
 var twe = gamePhaser.add.tween(groupEq[i].accessoire);
 twe.to({ alpha:alphaAccessoire,x:pos100x+90+getWorldW()/2, y:pos100y+getWorldH()/2-groupEq[i].height/3+10-groupEq[i].accessoire.height/3*0 }, phaserTweenDuration, phaserTweenType, true, 0);
 
 } else if (i==(whoamiNum+1)%5) {
 pos100x = getWorldW()*0.7/2*0.9+groupEq[i].width/2-20;
 if (pos100x > getWorldW()/2-groupEq[i].width/2)
 pos100x = getWorldW()/2-groupEq[i].width/2;
 pos100y = -30-(nbLigneCartes-1)*20;
 if ( getWorldH()<400 ) {

 pos100y = getWorldH()/2-groupEq[i].height/2-(nbLigneCartes-1)*geHorizSpacingCards()-10;
 if ( phaserCards.length>0) {
  pos100y -= getMainCartesVisibleH();
 } else if (phaserChatElts) {
  if (getWorldW()<800)
  pos100y -= 34;
  else
  pos100y -= 50;
 }
 pos100y -= 15;
 }
 
 alpha100 = Math.atan2(pos100y,pos100x)/Math.PI*180;
 dist100 = Math.sqrt(Math.pow(pos100x,2)+Math.pow(pos100y,2)); 
 
 var twe = gamePhaser.add.tween(groupEq[i].accessoire);
 twe.to({ alpha:alphaAccessoire,x:pos100x+getWorldW()/2-groupEq[i].width/2-10-groupEq[i].accessoire.width/2, y:pos100y+getWorldH()/2+30 }, phaserTweenDuration, phaserTweenType, true, 0);
 
 } else if (i==(whoamiNum+2)%5) {
 //pos100x = 0;//0.1*getWorldW();
 pos100x = getWorldW()*0.3/2*0.9+groupEq[i].width/2-20;
 pos100y = -getWorldH()/2+groupEq[i].height/2+60;
 if ( getWorldH()<400 ) {
 pos100x -= 100;
 pos100y += 20;
 }
 else if (getWorldW()<800 && phaserShownCardsPli ) {
 pos100x -= 120;
 if (pos100x<-getWorldW()/2+groupEq[i].width/2+30+groupEq[i].width*2/3)
  pos100x = -getWorldW()/2+groupEq[i].width/2+30+groupEq[i].width*2/3;
 }
 if (phaserShownCardsPli && pos100x+groupEq[i].width/3>getWorldW()/2-getCartesAfficheesWidth()) {
 pos100x = getWorldW()/2-getCartesAfficheesWidth()-groupEq[i].width/3;
 }
 posEquipierHaut = pos100y+getWorldH()/2-groupEq[i].height/3;
 if ( getWorldH()<400 ) {
 pos100y -= 20;
 }
 if ( getWorldW()<500 ) {
 pos100y += 20;
 }
 alpha100 = Math.atan2(pos100y,pos100x)/Math.PI*180;
 dist100 = Math.sqrt(Math.pow(pos100x,2)+Math.pow(pos100y,2)); 
 
 var twe = gamePhaser.add.tween(groupEq[i].accessoire);
 twe.to({ alpha:alphaAccessoire,x:pos100x-60+getWorldW()/2, y:pos100y+getWorldH()/2+groupEq[i].height/3+groupEq[i].accessoire.height/3 }, phaserTweenDuration, phaserTweenType, true, 0);
 
 } else {
 llog('errrrrrrrrrrrrrrrr groupEq ',i);
 }
 } else if (groupEq.length==6) { //  5 JOUEURS *****************

 
 
 
 if (i==(whoamiNum+3)%6) {

 pos100x = 0;//0.1*getWorldW();
 pos100y = -getWorldH()/2+groupEq[i].height/2+60;
 if ( getWorldH()<400 ) {
 pos100x -= 100;
 pos100y += 20;
 }
 else if ( getWorldW()<800 && phaserShownCardsPli ) {
 pos100x -= 120;
 }
 if (phaserShownCardsPli && pos100x+groupEq[i].width/2.5>getWorldW()/2-getCartesAfficheesWidth()) {
 pos100x = getWorldW()/2-getCartesAfficheesWidth()-groupEq[i].width/2.5;
 }
 if (pos100x<-getWorldW()/2+groupEq[i].width/2+10)
 pos100x = -getWorldW()/2+groupEq[i].width/2+10;
 posEquipierHaut = pos100y+getWorldH()/2;
 if ( getWorldH()<400 ) {
 pos100y -= 55;
 }
 
 alpha100 = Math.atan2(pos100y,pos100x)/Math.PI*180;
 dist100 = Math.sqrt(Math.pow(pos100x,2)+Math.pow(pos100y,2)); 
 
 var twe = gamePhaser.add.tween(groupEq[i].accessoire);
 twe.to({ 
  alpha:alphaAccessoire,
  x:pos100x+groupEq[i].width/2+50*distAccessoire+getWorldW()/2-groupEq[i].accessoire.width/3, 
  y:pos100y+getWorldH()/2+groupEq[i].height/2+groupEq[i].accessoire.height/3*distAccessoire 
 }, phaserTweenDuration, phaserTweenType, true, 0);
 

 } else if (i==(whoamiNum+4)%6) {

 pos100x = -getWorldW()*0.55/2*0.9-groupEq[i].width/2+20;
 pos100y = -getWorldH()/2+groupEq[i].height/2+130;
 if (pos100x < -getWorldW()/2+groupEq[i].width/2)
 pos100x = -getWorldW()/2+groupEq[i].width/2;

 if ( getWorldW()<500 ) {
 pos100y += 20;
 }
 if ( getWorldH()<400 ) {
 pos100y += 20;
 pos100x -= 100;
 }
 else if (getWorldW()<800 && phaserShownCardsPli ) {
 pos100x -= 120;
 }
 if (pos100x<-getWorldW()/2+groupEq[i].width/2)
 pos100x = -getWorldW()/2+groupEq[i].width/2;
 
 
 alpha100 = Math.atan2(pos100y,pos100x)/Math.PI*180;
 dist100 = Math.sqrt(Math.pow(pos100x,2)+Math.pow(pos100y,2)); 
 
 var twe = gamePhaser.add.tween(groupEq[i].accessoire);
 twe.to({ alpha:alphaAccessoire,x:pos100x+getWorldW()/2+groupEq[i].width/2+10+groupEq[i].accessoire.width/2, y:pos100y+getWorldH()/2+35 }, phaserTweenDuration, phaserTweenType, true, 0);
 
 
 } else if (i==(whoamiNum+5)%6) {
 


 pos100x = -getWorldW()*0.7/2*0.9-groupEq[i].width/2+20;
 if (pos100x < -getWorldW()/2+groupEq[i].width/2)
 pos100x = -getWorldW()/2+groupEq[i].width/2;
 pos100y = -30-(nbLigneCartes-1)*20;
 if ( getWorldH()<400 ) {

 pos100y = getWorldH()/2-groupEq[i].height/2-(nbLigneCartes-1)*geHorizSpacingCards()-10;
 if ( phaserCards.length>0) {
 pos100y -= getMainCartesVisibleH();
 } else if (phaserChatElts) {
 if (getWorldW()<800)
  pos100y -= 34;
 else
  pos100y -= 50;
 }
 pos100y -= 15;
 }
 
 alpha100 = Math.atan2(pos100y,pos100x)/Math.PI*180+360;
 dist100 = Math.sqrt(Math.pow(pos100x,2)+Math.pow(pos100y,2)); 
 
 var twe = gamePhaser.add.tween(groupEq[i].accessoire);
 twe.to({ alpha:alphaAccessoire,x:pos100x+getWorldW()/2+groupEq[i].width/2+groupEq[i].accessoire.width/2, y:pos100y+getWorldH()/2+35 }, phaserTweenDuration, phaserTweenType, true, 0);
 
 /*pos100x = -getWorldW()*0.7/2*0.9-groupEq[i].width/2+20;
 if (pos100x < -getWorldW()/2+groupEq[i].width/2)
 pos100x = -getWorldW()/2+groupEq[i].width/2;
 pos100y = -30-(nbLigneCartes-1)*20;
 if ( getWorldH()<400 ) {

 pos100y = getWorldH()/2-groupEq[i].height/2-(nbLigneCartes-1)*geHorizSpacingCards()-10;
 if ( phaserCards.length>0) {
 pos100y -= getMainCartesVisibleH();
 } else if (phaserChatElts) {
 if (getWorldW()<800)
  pos100y -= 34;
 else
  pos100y -= 50;
 }
 pos100y -= 15;
 }
 
 alpha100 = Math.atan2(pos100y,pos100x)/Math.PI*180+360;
 dist100 = Math.sqrt(Math.pow(pos100x,2)+Math.pow(pos100y,2)); 
 
 var twe = gamePhaser.add.tween(groupEq[i].accessoire);
 twe.to({ alpha:alphaAccessoire,x:pos100x+getWorldW()/2+groupEq[i].width/2+groupEq[i].accessoire.width/2, y:pos100y+getWorldH()/2+35 }, phaserTweenDuration, phaserTweenType, true, 0);
 */
 
 } else if (i==whoamiNum) {

 pos100x = 0;//-0.2*getWorldW()/2;
 pos100y = getWorldH()/2-groupEq[i].height/2-(nbLigneCartes-1)*geHorizSpacingCards()-10;
 if ( phaserCards.length>0) {
 pos100y -= getMainCartesVisibleH();
 } else if (phaserChatElts) {
 if (getWorldW()<800)
 pos100y -= 34;
 else
 pos100y -= 50;
 }
 alpha100 = Math.atan2(pos100y,pos100x)/Math.PI*180;
 dist100 = Math.sqrt(Math.pow(pos100x,2)+Math.pow(pos100y,2)); 
 
 
 var twe = gamePhaser.add.tween(groupEq[i].accessoire);
 twe.to({ alpha:alphaAccessoire,x:pos100x+90+getWorldW()/2, y:pos100y+getWorldH()/2-groupEq[i].height/3+10-groupEq[i].accessoire.height/3*0 }, phaserTweenDuration, phaserTweenType, true, 0);
 
 } else if (i==(whoamiNum+1)%6) {
 pos100x = getWorldW()*0.7/2*0.9+groupEq[i].width/2-20;
 if (pos100x > getWorldW()/2-groupEq[i].width/2)
 pos100x = getWorldW()/2-groupEq[i].width/2;
 pos100y = -30-(nbLigneCartes-1)*20;
 if ( getWorldH()<400 ) {

 pos100y = getWorldH()/2-groupEq[i].height/2-(nbLigneCartes-1)*geHorizSpacingCards()-10;
 if ( phaserCards.length>0) {
 pos100y -= getMainCartesVisibleH();
 } else if (phaserChatElts) {
 if (getWorldW()<800)
  pos100y -= 34;
 else
  pos100y -= 50;
 }
 pos100y -= 15;
 }
 
 alpha100 = Math.atan2(pos100y,pos100x)/Math.PI*180;
 dist100 = Math.sqrt(Math.pow(pos100x,2)+Math.pow(pos100y,2)); 
 
 var twe = gamePhaser.add.tween(groupEq[i].accessoire);
 twe.to({ alpha:alphaAccessoire,x:pos100x+getWorldW()/2-groupEq[i].width/2-10-groupEq[i].accessoire.width/2, y:pos100y+getWorldH()/2+30 }, phaserTweenDuration, phaserTweenType, true, 0);
 
 } else if (i==(whoamiNum+2)%6) {
 //pos100x = 0;//0.1*getWorldW();
 pos100x = getWorldW()*0.55/2*0.9+groupEq[i].width/2-20;
 pos100y = -getWorldH()/2+groupEq[i].height/2+130;
 if ( getWorldH()<400 ) {
 pos100x -= 100;
 pos100y += 20;
 }
 else if (getWorldW()<800 && phaserShownCardsPli ) {
 pos100x -= 120;
 if (pos100x<-getWorldW()/2+groupEq[i].width/2+30+groupEq[i].width*2/3)
 pos100x = -getWorldW()/2+groupEq[i].width/2+30+groupEq[i].width*2/3;
 }
 if (phaserShownCardsPli && pos100x+groupEq[i].width/3>getWorldW()/2-getCartesAfficheesWidth()) {
 pos100x = getWorldW()/2-getCartesAfficheesWidth()-groupEq[i].width/3;
 }
 posEquipierHaut = pos100y+getWorldH()/2-groupEq[i].height/3;
 if ( getWorldH()<400 ) {
 pos100y -= 20;
 }
 if ( getWorldW()<500 ) {
 pos100y += 20;
 }
 alpha100 = Math.atan2(pos100y,pos100x)/Math.PI*180;
 dist100 = Math.sqrt(Math.pow(pos100x,2)+Math.pow(pos100y,2)); 
 
 var twe = gamePhaser.add.tween(groupEq[i].accessoire);
 twe.to({ alpha:alphaAccessoire,x:pos100x-60+getWorldW()/2, y:pos100y+getWorldH()/2+groupEq[i].height/3+groupEq[i].accessoire.height/3 }, phaserTweenDuration, phaserTweenType, true, 0);
 
 } else {
 llog('errrrrrrrrrrrrrrrr groupEq ',i);
 }
 }
 
 if (techniqueLevelAnim>5)
 dist100 = Math.min(getWorldW(),getWorldH()-getMainCartesVisibleH()-(nbLigneCartes-1)*geHorizSpacingCards())/3

 if (i>1) alpha0-=360;
 /*var pos100x = (getWorldW()/2-groupEq[i].width/2)*Math.cos(alpha100*Math.PI/180);
 var pos100y = (getWorldH()-groupEq[i].height*2-200)/2*Math.sin(alpha100*Math.PI/180);
 
 var dist100 = Math.sqrt(Math.pow(pos100x,2)+Math.pow(pos100y,2)); 
 */
 var alphaC = getLevelAnimValue(alpha100,alpha0);//alpha0*techniqueLevelAnim/100+alpha100*(100-techniqueLevelAnim)/100;
 
 
 var distC = getLevelAnimValue(dist100,dist0);//dist0*techniqueLevelAnim/100+dist100*(100-techniqueLevelAnim)/100;
 //groupEq[i].x = getWorldW()/2+distC*Math.cos(alphaC*Math.PI/180)-groupEq[i].width/2;
 //groupEq[i].y = getWorldH()/2+distC*Math.sin(alphaC*Math.PI/180)-groupEq[i].height/2;
 //llog('equipier'+i,'alpha',alpha0,'dist',dist0,posx,posy);
 groupEq[i].goX = getWorldW()/2+distC*Math.cos(alphaC*Math.PI/180)-groupEq[i].width/2;
 groupEq[i].goY = getWorldH()/2+distC*Math.sin(alphaC*Math.PI/180)-groupEq[i].height/2;
 var twe = gamePhaser.add.tween(groupEq[i]);
 twe.to({ 
 x:groupEq[i].goX,
 y:groupEq[i].goY }, phaserTweenDuration, phaserTweenType, true, 0);

 
 
 }
 var transp = getLevelAnimValue(1,0);//techniqueLevelAnim/100*0+(100-techniqueLevelAnim)/100*1;
 var postablex = getWorldW()/2;
 var postabley0 = posEquipierHaut-220*getWorldW()/1600;//-220+70+groupEq[0].height*0.45;
 if (getWorldW()<800) {
 postabley0 -= (800-getWorldW())/4;
 }
 if (getWorldH()<400) {
 postabley0 -= 20;
 }
 var decalYtable = 0;
 if (getWorldW()<600)
 decalYtable = 10;
 if (phaserShownCardsPli)
 decalYtable = 20;
 if (getWorldH()<300) 
 decalYtable += 35;
 if (getWorldW()<300) 
 decalYtable += 20;
 

 if (getWorldW()<600) {
 var tableWidthDTmp = getWorldW();
 if (getWorldH()>postabley+tableWidthDTmp*1200/1600) {
 tableWidthDTmp = (getWorldH()-postabley)*1600/1200;
 }
 
 var scaleTableTmp = tableWidthDTmp/1600;
 //llog('scale table **',scaleTableTmp);
 if (postabley0<getHeaderHeight()+40-220*scaleTableTmp) {
 postabley0=42+40-220*scaleTableTmp;
 }
 }
 
 
 var postabley100 = getWorldH();
 var postabley = getLevelAnimValue(postabley0,postabley100);//techniqueLevelAnim/100*postabley100+(100-techniqueLevelAnim)/100*postabley0;
 //phaserTableClassique.alpha = transp;

 var tableWidthD = getWorldW();
 if (getWorldH()>postabley+tableWidthD*1200/1600) {
 tableWidthD = (getWorldH()-postabley)*1600/1200;
 }
 var tww = gamePhaser.add.tween(phaserTableClassique);
 tww.to({ alpha:transp,x:postablex,y:postabley+decalYtable,width:tableWidthD,height:1200/1600*tableWidthD }, phaserTweenDuration, phaserTweenType, true, 0);

 
 // ********* Ruban
 
 
 var scaleRuban = 1;
 if (getWorldW()<800) {
 scaleRuban = 1/3;
 groupRuban.scale.setTo(scaleRuban);
 phaserRubanBg.visible = false;
 phaserRubanBg_s.visible = true;
 } else {

 scaleRuban = getWorldW()/2600;
 if (getWorldW()>1300)
 scaleRuban = 1/2;
 groupRuban.scale.setTo(scaleRuban);
 
 phaserRubanBg.visible = true;
 phaserRubanBg_s.visible = false;
 }
 //groupRuban.myScale = scaleRuban;

 groupRuban.x = (getWorldW())/2;


 var twr = gamePhaser.add.tween(groupRuban);
 twr.to({ y:topRuban*techniqueLevelAnim/100 }, phaserTweenDuration, phaserTweenType, true, 0);

 var twr = gamePhaser.add.tween(phaserRubanBg);
 twr.to({ alpha:getLevelAnimValue(0,1) }, phaserTweenDuration, phaserTweenType, true, 0);
 var twr = gamePhaser.add.tween(phaserRubanBg_s);
 twr.to({ alpha:getLevelAnimValue(0,1) }, phaserTweenDuration, phaserTweenType, true, 0);
 var twr = gamePhaser.add.tween(phaserRubanBg2);
 twr.to({ alpha:getLevelAnimValue(1,0) }, phaserTweenDuration, phaserTweenType, true, 0);
 var twr = gamePhaser.add.tween(phaserRubanBg2Bot);
 twr.to({ alpha:getLevelAnimValue(1,0) }, phaserTweenDuration, phaserTweenType, true, 0);
 //groupRuban.y = topRuban*techniqueLevelAnim/100;

 var largeurRuban = getWorldW()-40;
 if (techniqueLevelAnim<50) {

 phaserMessagePpal.style.wordWrap = true;
 largeurRuban = largeurRuban/scaleRuban;
 phaserMessagePpal.fontSize = getRubanFontSize();
 phaserMessagePpal.setTextBounds(0, 0,largeurRuban , 100);
 phaserMessagePpal.style.wordWrapWidth = largeurRuban;
 phaserMessagePpal.setText(phaserMessagePpal.text);
 } else {
 phaserMessagePpal.style.wordWrap = false;
 
 }
 
 phaserMessagePpal.y = getLevelAnimValue(65+(phaserMessagePpal.height-71)/2,70) ;
 
 var topR2Pos = Math.max(60,phaserMessagePpal.height-10);
 if (getWorldH()<400 && techniqueLevelAnim<50)
 topR2Pos = Math.max(45,phaserMessagePpal.height-10);
 phaserRubanBg2Bot.y = topR2Pos;
 
 phaserRubanBg2Bg.clear();
 if (techniqueLevelAnim<50) {
 var rub2WW = Math.max(getWorldW()*6,15000);
 phaserRubanBg2Bg.beginFill(0xcc3a2f);
 phaserRubanBg2Bg.drawRect(-rub2WW/2,10,rub2WW ,topR2Pos);
 }

 
 var rubanColor = '#ffcc43';
 if (techniqueLevelAnim<50)
 rubanColor = '#ffffff';
 phaserMessagePpal.fill = rubanColor;
 
 var topTimery = topRuban*techniqueLevelAnim/100+getHeaderHeight()-7;
 if (getWorldW()<800)
 topTimery += 20*techniqueLevelAnim/100;
 else
 topTimery += 10*techniqueLevelAnim/100;
 
 var twr = gamePhaser.add.tween(phaserTimerObject.phasergroupTimer);
 twr.to({ x:getWorldW()/2,y:topTimery }, phaserTweenDuration, phaserTweenType, true, 0);

 var twr = gamePhaser.add.tween(phaserTimerObject.phasertimerVide);
 twr.to({ alpha:getLevelAnimValue(0,1) }, phaserTweenDuration, phaserTweenType, true, 0);

 var twr = gamePhaser.add.tween(phaserTimerObject.phasertimerPlein);
 twr.to({ alpha:getLevelAnimValue(0,1) }, phaserTweenDuration, phaserTweenType, true, 0);

 var twr = gamePhaser.add.tween(phaserTimerObject.phasertimerVide2);
 twr.to({ alpha:getLevelAnimValue(1,0) }, phaserTweenDuration, phaserTweenType, true, 0);

 var twr = gamePhaser.add.tween(phaserTimerObject.phasertimerPlein2);
 twr.to({ alpha:getLevelAnimValue(1,0) }, phaserTweenDuration, phaserTweenType, true, 0);
 

 if (lastTurnSel!==null) 
 selMoteur.setTurn(lastTurnSel);
 

 var ttalHeight = getHeaderHeight()+topRuban+5;//botActions+80;
 
 //gamePhaser.add.tween(groupRuban).to({ y:250 }, 2500, Phaser.Easing.Cubic.Out, true, -1).start();


 
 var topCardTechnique;
 var topCardClassique;
 //var topCard;


 if (phaserChatElts) // decalage du timer si multijoueur
 ttalHeight +=15;

 if ( phaserCards.length>0) {
 var numCartesJeu=phaserCards.length;

 //cardsBestTop = 3;
 
 var isfuncsentResiz = false;

 var okwidth = (numCarteLigne-1)*spacingCards+ccW;
 

 topCardTechnique = ttalHeight+15;//getHeaderHeight()+2;
 ttalHeight += getPlayedCardSize().h+5-geHorizSpacingCards();
 
 /*if (phaserTimerObject.phasergroupTimer.visible)
 topCardTechnique +=10;*/
 
 topCardClassique = getWorldH()-getMainCartesVisibleH()-(nbLigneCartes-1)*geHorizSpacingCards();

 var topCard = techniqueLevelAnim/100*topCardTechnique+(100-techniqueLevelAnim)/100*topCardClassique;
 
 var ecartLignesCartesMain = geHorizSpacingCards();
 topCard -= ecartLignesCartesMain;
 //ttalHeight += topCard;

 var cptmp = 0;
 var subtotalLeft = 0;
 var posxorig = getWorldW()/2-okwidth/2;
 var posx = posxorig;
 //llog('posxorig',posxorig,okwidth,numCarteLigne);
 
 for (var key in phaserCards) { 
 if (cptmp%numCarteLigne == 0) {
  posx = posxorig;//16;
  topCard += ecartLignesCartesMain;
  ttalHeight += ecartLignesCartesMain;
 } 
 var tw = gamePhaser.add.tween(phaserCards[key]);
 tw.to({ x:posx,y:topCard,width:ccW,height:getPlayedCardSize().h }, phaserTweenDuration, phaserTweenType, true, 0);
 //tw.start();
 posx += spacingCards;        
 cptmp++; 
 
 } 
 }
 ttalHeight += 10;


 var topActionsForChat = ttalHeight;

 

 var actionsPosTop0 = ( (posEquipierHaut+groupEq[0].height/2+5) + (groupEq[whoamiNum].goY -5 ) )/2;
 if ( getWorldH()<400 ) actionsPosTop0 -=40;
 
 var actionsPosTop100 = ttalHeight+15;//posEquipierHaut+10;
 //if ( phaserCards.length>0) actionsPosTop100 += getPlayedCardSize().h+5+(nbLigneCartes-1)*geHorizSpacingCards();
 var actionsWidth = getActionsWidth();
 var actionsPosTop = techniqueLevelAnim/100*actionsPosTop100+(100-techniqueLevelAnim)/100*actionsPosTop0;
 
 var anchorPos = techniqueLevelAnim/100*0+(100-techniqueLevelAnim)/100*0.5;
 //phaserActionBtns.anchor.setTo(0.5,anchorPos);

 //llog('actionsPosTop',actionsPosTop);
 /*var actionsX0 = getWorldW()/2;
 var actionsX100 = getWorldW()/2;
 if (phaserChatElts) {
 actionsX100 = getWorldW()/2+actionsWidth100/2+3;
 }
 var actionsX = getLevelAnimValue(actionsX100,actionsX0);*/
 
 var yanchor = getLevelAnimValue(0.5,0);
 var calcHactions = replaceActions (getWorldW()/2,actionsWidth,actionsPosTop,yanchor);
 
 if (calcHactions.message)
 topActionsForChat += calcHactions.message+10;
 
 if (calcHactions.total) {
 ttalHeight += calcHactions.total+10;//getActionListHeight (phaserActionBtns,getWorldW()/2,actionsWidth,actionsPosTop);
 }
 

 if (phaserShownCardsPli ) {


 var carteAffW = getCarteAffW();
 var pcaffAlpha = getLevelAnimValue(0,0.8);

 var pcaffFS0 = 21;
 if (getWorldW()<800)
 pcaffFS0 = 14;
 if (getWorldH()<500)
 pcaffFS0 = 14;
 
 var pcaffFS100 = 16; // attention cest le classique
 if (getWorldW()<500)
 pcaffFS100 = 14; 
 if (getWorldH()<500)
 pcaffFS100 = 14;
 var pcaffFS = techniqueLevelAnim/100*pcaffFS0+(100-techniqueLevelAnim)/100*pcaffFS100;
 
 var pcaffY0 = ttalHeight+10;
 var pcaffY100 = getHeaderHeight()+2; 
 var pcaffY = techniqueLevelAnim/100*pcaffY0+(100-techniqueLevelAnim)/100*pcaffY100;

 var wwi = getCartesAfficheesWidth();
 
 var pcaffX0 = getWorldW()/2;
 if (phaserChatElts && getWorldW()>=600) {
 pcaffX0 = getWorldW()/2+3+wwi/2;
 }
 var pcaffX100 = getWorldW()-wwi/2-2; 
 var pcaffX = techniqueLevelAnim/100*pcaffX0+(100-techniqueLevelAnim)/100*pcaffX100;

 var tw2 = gamePhaser.add.tween(groupCartesAffichess);
 tw2.to({ x:pcaffX,y:pcaffY}, phaserTweenDuration, phaserTweenType, true, 0);
 


 tw2 = gamePhaser.add.tween(phaserShownCardsPli.phaserTxt);
 tw2.to({ x:0,y:0,fontSize:pcaffFS,alpha:getLevelAnimValue(0,1)}, phaserTweenDuration, phaserTweenType, true, 0);

 tw2 = gamePhaser.add.tween(phaserShownCardsPli.phaserTxt2);
 tw2.to({ fontSize:pcaffFS,alpha:getLevelAnimValue(1,0)}, phaserTweenDuration, phaserTweenType, true, 0);

 phaserShownCardsPli.phaserTxt2.setShadow(1, 1, 'rgba(0,0,0,1)', 2 );
 // if (techniqueLevelAnim<50)Shadow(1, 1, 'rgba(0,0,0,1)', 2 );
 //textChat.setShadow(1, 1, 'rgba(255,255,255,1)', 1 );

 var textHeight = pcaffFS+6;

 var ecartCartesAffR = 40;
 if (getWorldW()<600 || getWorldH()<600)
 ecartCartesAffR = getCarteAffW()/2.5;
 
 if (techniqueLevelAnim!=0) {

 for (var g in phaserShownCardsPli.cardsList) {
 tw2 = gamePhaser.add.tween(phaserShownCardsPli.cardsList[g]);
 tw2.to({ 
  x:0-(ecartCartesAffR*(phaserShownCardsPli.cardsList.length-1)+carteAffW)/2+g*ecartCartesAffR,
  y:0+textHeight,
  width:carteAffW,
  height:carteAffW*129/70
  }, phaserTweenDuration, phaserTweenType, true, 0);
 
 }
 } else {
 var arrays = [];
 var workingArray = phaserShownCardsPli.cardsList;
 var nbCartesParLigneEncart = Math.floor((wwi-carteAffW)/ecartCartesAffR)+1;
 while (workingArray.length>nbCartesParLigneEncart) {
 arrays.push(workingArray.slice(0,nbCartesParLigneEncart));
 workingArray = workingArray.slice(nbCartesParLigneEncart);
 }
 arrays.push(workingArray);
 var decalH = 0;
 for (var h in arrays) {
 var tmpArr = arrays[h];
 var tmpcpt = 0;
 for (var g in tmpArr) {
  tw2 = gamePhaser.add.tween(tmpArr[g]);
  tw2.to({ 
  x:0-(ecartCartesAffR*(tmpArr.length-1)+carteAffW)/2+tmpcpt*ecartCartesAffR,
  y:0+textHeight+decalH,
  width:carteAffW,
  height:carteAffW*129/70 
  }, phaserTweenDuration, phaserTweenType, true, 0);
  
  tmpcpt++;
 }
 decalH +=30;
 }
 }
 //phaserShownCardsPli.phaserTxt.setTextBounds(0, 0,wwi0 , 300);


 var roundedRadius = getLevelAnimValue(3,6);
 
 tweenFond(phaserShownCardsPli.phaserFond,phaserShownCardsPli.groupFondCartesAffichess,0,0,wwi,textHeight+carteAffW*129/70+5,pcaffAlpha,roundedRadius,function (r) {phaserShownCardsPli.phaserFond = r; });
 
 var largeurMasque = getLevelAnimValue(wwi*2,wwi);
 
 
 var mask;
 if (phaserShownCardsPli.maskContent) {
 phaserShownCardsPli.maskContent.clear();
 mask = phaserShownCardsPli.maskContent;
 } else {
 mask = gamePhaser.add.graphics(0, 0);
 phaserShownCardsPli.groupDessusFondCartesAffichess.mask = mask;
 phaserShownCardsPli.maskContent = mask;
 groupCartesAffichess.add(mask);
 }
 mask.beginFill(0xffffff);
 mask.drawRect(0-largeurMasque/2+2,0+2, largeurMasque-4,textHeight+239*0.8+10-4);
 
 ttalHeight += textHeight+239*0.8+10+10;
 }
 
 if (getWorldW()<600) {
 topActionsForChat = ttalHeight;
 }
 
 if (phaserChatElts) {

 var widthChat = getWorldW()-20;
 var widthChat2 = getWorldW()-20;
 if ( ( phaserShownCardsPli || phaserActionBtns.length ) && techniqueLevelAnim==100 && getWorldW()>=600) {
 widthChat = (getWorldW()-20)/2-3;
 }
 if ( techniqueLevelAnim==0 && getWorldW()>=600) {
 widthChat2 = (getWorldW()-20)/2-8-groupEq[i].width/2;//123456
 }
 var chatx = widthChat/2+10;
 var chatx2 = widthChat2/2+10;
 var chaty0;
 

 function getHeightWithoutChatLine() {
 var res = getWorldH()-5;
 if (getWorldW()<600) {
 res -=34;
 } else {
 res -=50;
 }
 return res;
 }
 var chatTxtSize = 18;
 /*if (!isPhaserFondChatShown)
 chatTxtSize = 16;*/
 if (getWorldW()<600)
 chatTxtSize = 14;

 var chatTxtSize2 = 16;
 if (getWorldW()<600)
 chatTxtSize2 = 14;
 
 phaserChatElts.textChat.setTextBounds(0, 0,widthChat-6 , 500);
 phaserChatElts.textChat.style.wordWrapWidth = widthChat-6;
 phaserChatElts.textChat.fontSize = chatTxtSize;
 

 phaserChatElts.textChat2.setTextBounds(0, 0,widthChat2-6 , 500);
 phaserChatElts.textChat2.style.wordWrapWidth = widthChat2-6;
 phaserChatElts.textChat2.fontSize = chatTxtSize2;
 
 var height100 = phaserChatElts.textChat.height+6;
 


 if ( (phaserShownCardsPli || phaserActionBtns.length) && techniqueLevelAnim==100 && getWorldW()>=600) {
 height100 = groupCartesAffichess.height;
 if (height100<200) {
 height100 = 200;
 ttalHeight += 100;
 }
 } else if (techniqueLevelAnim==100) {
 if (height100>250)
 height100 = 250;
 ttalHeight += height100+10;
 } else {

 if (height100>getHeightWithoutChatLine() )
 height100 = getHeightWithoutChatLine();
 if (!isPhaserFondChatShown && height100>getHeightWithoutChatLine()/2-groupEq[i].height/2 )
 height100 = getHeightWithoutChatLine()/2-groupEq[i].height/2;
 }
 
 var chatTmpy = getHeightWithoutChatLine()-height100-6;

 /*if (phaserCards.length==0) {
 chaty0 = chatTmpy;
 } else {
 chaty0 = getWorldH()-getMainCartesVisibleH()-(nbLigneCartes-1)*geHorizSpacingCards()-5-height100;//phaserChatElts.textChat.height-5;
 }*/
 chaty0 = chatTmpy;

 var chaty100 = topActionsForChat+10;
 if (chaty100<chatTmpy)
 chaty100=chatTmpy;
 
 var chaty = getLevelAnimValue(chaty0,chaty100);


 var tw2 = gamePhaser.add.tween(phaserChatElts.closeBtn);
 tw2.to({ alpha:getLevelAnimValue(isPhaserFondChatShown?1:0,0)}, phaserTweenDuration, phaserTweenType, true, 0);
 
 var showScrollBtns = false;
 if (phaserChatElts.textChat.height>phaserChatElts.fondChat.height+40 && isPhaserFondChatShown)
 showScrollBtns = true;
 var tw2 = gamePhaser.add.tween(phaserChatElts.nextBtn);
 tw2.to({ alpha:getLevelAnimValue(showScrollBtns?1:0,0)}, phaserTweenDuration, phaserTweenType, true, 0);
 
 var tw2 = gamePhaser.add.tween(phaserChatElts.prevBtn);
 tw2.to({ alpha:getLevelAnimValue(showScrollBtns?1:0,0)}, phaserTweenDuration, phaserTweenType, true, 0);
 
 var posTopTexte = chaty+3;
 if (phaserChatElts.textChat.height+6>height100) {
 posTopTexte -= phaserChatElts.textChat.height+6-height100;
 }
 var posTopTexte2 = getHeightWithoutChatLine()+3-phaserChatElts.textChat2.height;

 if (phaserCards.length>0) {
 posTopTexte2 = getWorldH()-getMainCartesVisibleH()-(nbLigneCartes-1)*geHorizSpacingCards()-5-phaserChatElts.textChat2.height;//phaserChatElts.textChat.height-5;
 }

 posTopTexte2 = getHeaderHeight()+8;//
 
 var alphaText = 1;
 if ( !isPhaserFondChatShown && techniqueLevelAnim==0 )
 alphaText = 0;
 
 var alphaText2 = 1;
 if ( getWorldW()<550 || getWorldH()<450 || isPhaserFondChatShown || techniqueLevelAnim!=0 )
 alphaText2 = 0;
 
 
 var tw2 = gamePhaser.add.tween(phaserChatElts.textChat);
 tw2.to({ x:chatx+3-widthChat/2,y:posTopTexte+phaserDecalChat,alpha:alphaText}, phaserTweenDuration, phaserTweenType, true, 0);

 var tw2 = gamePhaser.add.tween(phaserChatElts.textChat2);
 tw2.to({ x:chatx2+3-widthChat2/2,y:posTopTexte2,alpha:alphaText2}, phaserTweenDuration, phaserTweenType, true, 0);
 
 var tw2 = gamePhaser.add.tween(phaserChatElts.fondChat);
 tw2.to({ alpha:getLevelAnimValue(isPhaserFondChatShown?1:0,1),x:chatx,y:(isPhaserFondChatShown || techniqueLevelAnim==100)?Math.max(0,chaty):getWorldH(),width:widthChat,height:height100 }, phaserTweenDuration, phaserTweenType, true, 0);
 
 
 var tw2 = gamePhaser.add.tween(phaserChatElts.closeBtn);
 tw2.to({ x:chatx+widthChat/2-3,y:Math.max(3,chaty+3)}, phaserTweenDuration, phaserTweenType, true, 0);
 var tw2 = gamePhaser.add.tween(phaserChatElts.nextBtn);
 tw2.to({ x:chatx+widthChat/2-3-30,y:30+30+Math.max(3,chaty+3)}, phaserTweenDuration, phaserTweenType, true, 0);
 var tw2 = gamePhaser.add.tween(phaserChatElts.prevBtn);
 tw2.to({ x:chatx+widthChat/2-3,y:60+Math.max(3,chaty+3)}, phaserTweenDuration, phaserTweenType, true, 0);
 
 phaserChatElts.textChat.setTextBounds(0, 0,widthChat-6 , 500);
 phaserChatElts.textChat.style.wordWrapWidth = widthChat-6;
 //phaserChatElts.textChat.setText(phaserChatElts.textChat.text);

 var mask;
 if (phaserChatElts.maskContent) {
 phaserChatElts.maskContent.clear();
 mask = phaserChatElts.maskContent;
 } else {
 mask = gamePhaser.add.graphics(0, 0);
 phaserChatElts.textChat.mask = mask;
 phaserChatElts.maskContent = mask;
 //phaserChatElts.groupChat.add(mask);
 }
 mask.beginFill(0xffffff);
 mask.drawRect(chatx+3-widthChat/2,Math.max(3,chaty+3), widthChat-6,height100-6);
 
 //ttalHeight += phaserChatElts.fondChat.height+20;
 }
 reposPlayedCards();

 if (techniqueLevelAnim!=100)
 ttalHeight = 0;

 
 if (globTweenTimer && globTweenTimer.onComplete)
 globTweenTimer.onComplete.removeAll();

 globTweenTimer = gamePhaser.add.tween(groupRuban);
 globTweenTimer.to({ alpha:1 }, phaserTweenDuration, phaserTweenType, true, 0);

 /*if (fromResize=='fromZomm') {
 phaserTweenNeedsRefresh = true;
 }*/

 globTweenTimer.onComplete.add(function () {
 phaserTweenProcessing = false; 
 if (phaserTweenNeedsRefresh) {
 phaserTweenNeedsRefresh = false;
 reorganiseCartes ('chained');
 } 
 }, this);
 

 /*if (fromResize=='fromZomm') {
 return;
 }*/

 if (isTextInputFocusedIos) return;
 

 var pixRatio = 1;
 if (window.devicePixelRatio && !isLowGraphism)
 pixRatio = window.devicePixelRatio;

 var newScaleW = getWorldW();// * window.devicePixelRatio;
 var newScaleH = Math.max(getWorldH() -2,Math.floor(ttalHeight)+80);// * window.devicePixelRatio;

 if (techniqueLevelAnim==100) {
 //$('#webBody').css('overflow','hidden');
 $('#webBody').css('height',newScaleH+'px');
 } 
 
 if (gamePhaser.scale.myPrevWidth!=newScaleW || gamePhaser.scale.myPrevHeight!=newScaleH ) {

 //llog('setGameSize',newScaleW, newScaleH,'old is',gamePhaser.scale.myPrevWidth,gamePhaser.scale.myPrevHeight);
 gamePhaser.scale.setGameSize(newScaleW, newScaleH );
 gamePhaser.scale.myPrevWidth = newScaleW;
 gamePhaser.scale.myPrevHeight = newScaleH;
 if (pixRatio!=1) {
 gamePhaser.scale.game.renderer.resize(newScaleW*pixRatio,newScaleH*pixRatio);
 gamePhaser.width = newScaleW*pixRatio;
 gamePhaser.height = newScaleH*pixRatio;
 }

 //Phaser.Canvas.setTouchAction(gamePhaser.canvas, "auto"); // disable the default "none"
 

 }

 //tw2.onComplete.add(function () {selMoteur.reorganiseCartesReal ('fromZomm')}, this);
 
 var endf = null;
 if (false && !isfuncsentResiz) {
 //reposPlayedCards();
 isfuncsentResiz = true;
 //llog('fromZomm');
 reorganiseCartes();

 }
 return;
 
 //

 
 
}


function decodeChatLine(txt) {
 //$pseudo,$line,$date,$idUtil
 var tmp = unescape(txt.split('+').join(' ')).split('&lt;').join('<').split('&gt;').join('>').split('#');
 var res = tmp[0]+" : "+tmp[1]+' '+tmp[2];
 if (tmp[4]) 
 res += tmp[4];
 return res;
}
function decodeChatLineNoDate(txt) {
 //$pseudo,$line,$date,$idUtil
 var tmp = unescape(txt.split('+').join(' ')).split('&lt;').join('<').split('&gt;').join('>').split('#');
 return tmp[0]+" : "+tmp[1];
}


var tempoChat = 'Conversation';
moteurPhaser.tempoAddChatLine = function (str)
{ 
 if (!phaserChatElts) return;
 if (phaserChatElts.textChat.text.length>tempoChat.length)
 tempoChat = phaserChatElts.textChat.text;
 var obj = decodeChatLine(str);
 tempoChat += "\n"+obj;
 tabChatLines.push(decodeChatLineNoDate(str));
 if (tabChatLines.length>4)
 tabChatLines.shift();
}

moteurPhaser.flushChatLine = function ()
{ 
 if (!phaserChatElts) return;
 if (phaserChatElts) {
 var oldText = phaserChatElts.textChat.text;
 phaserChatElts.textChat.setText(tempoChat);
 phaserChatElts.textChat.addColor('#333333', oldText.length+1);
 phaserChatElts.textChat2.setText(tabChatLines.join("\n"));
 tempoChat = ''; 
 reorganiseCartes ();
 }
}




var firstchatlineadded = false;
var tabChatLines = ['Conversation'];

moteurPhaser.addChatLine = function (str)
{
 var obj = decodeChatLineObj(str);
 
 if (!window.isSmileyOnly) {
 if (!phaserChatElts) return; 
 //log('addChatLine'+str);
 firstchatlineadded = true;
 var oldText = phaserChatElts.textChat.text;
 
 if (phaserChatElts) {
 phaserChatElts.textChat.setText(oldText+'\n'+decodeChatLine(str));
 tabChatLines.push(decodeChatLineNoDate(str));
 if (tabChatLines.length>4)
 tabChatLines.shift();
 phaserChatElts.textChat2.setText(tabChatLines.join("\n"));
 }
 }

 
 var indJoueur = 0;
 for ( var i in equipiers_pseudos) {
 if (equipiers_pseudos[i].text==obj[0]) {
 indJoueur = parseInt(i);
 selMoteur.showMessageJoueur(parseInt(i),obj[1].split('&lt;').join('<').split('&gt;').join('>'));
 }
 }

 if (!window.isSmileyOnly) {
 var colors = ['#189300','#d87300','#00a2dd','#b102d8','#001489'];
 phaserChatElts.textChat.addColor(colors[indJoueur], oldText.length);
 //phaserChatElts.textChat.addColor('#888888', oldText.length+obj[0].length+1);
 phaserChatElts.textChat.addColor('#333333', oldText.length+obj[0].length+3);
 phaserChatElts.textChat.addColor('#999999', oldText.length+obj[0].length+3+1+obj[1].length);
 }

 reorganiseCartes ('fromZomm');
}
function phaserClickCard() {
 //llog('click card',this);
 if (this.myAction) {
 if (this.actionDisabled>0)
 return;
 this.actionDisabled = 1;
 var self = this;
 eval(this.myAction);
 setTimeout( function () { self.actionDisabled = 0; },800);
 }
}

var phaserCards = [];
var currPhcardLeft = 0;

moteurPhaser.addCard = function (name, action)
{
 selMoteur.clearMessagePlateauJeu();
 currPhcardLeft+=20;

 var topCard = getWorldH()/2-70;
 if (techniqueLevelAnim<50)
 topCard = getWorldH()+70;
 var spriteOmbre = gamePhaser.add.sprite(-4, -2 , 'CarteOmbre');
 var tmpphcard = gamePhaser.add.button(0 , 0 , name.split('.gif').join('.png'), phaserClickCard );//
 var group = gamePhaser.add.group();
 groupDesCartes.add(group);
 group.x = getWorldW()/2-50;
 group.y = topCard;
 group.cardObj = tmpphcard;
 group.add(spriteOmbre);
 group.add(tmpphcard);
 
 
 group.alt = name;
 group.id = 'MonJeu'+name;
 
 tmpphcard.alt = name;
 tmpphcard.id = 'MonJeu'+name;
 tmpphcard.myAction = action;
 
 var scaleCard = 100/tmpphcard.width;
 tmpphcard.scale.setTo(scaleCard,scaleCard);

 spriteOmbre.width = tmpphcard.width;
 spriteOmbre.height = tmpphcard.height;
 
 phaserCards.push(group);
 
 return;
} 
moteurPhaser.getCards = function () {
 return phaserCards;
}

moteurPhaser.hasCardHand = function (name)
{ 
 for (var i in phaserCards) {
 if (phaserCards[i].alt==name) {
 return true;
 }
 }
 return false;
}

moteurPhaser.setCardAction = function (name, action)
{ 
 //var _name = name.split('.gif').join('.png');
 //llog("setcardaction",name, action);
 for (var i in phaserCards) {
 if (phaserCards[i].alt==name) {
 phaserCards[i].cardObj.actionDisabled = 0;
 if (action=='' || action==null) {
 phaserCards[i].cardObj.myAction = null;
 carteNonSelectionnable('MonJeu'+name);
 }
 else {
 phaserCards[i].cardObj.myAction = action;
 }
 return;
 }
 }
} 



moteurPhaser.clearCardsActions = function ()
{
 selMoteur.timeThatRemains(-1,0);
 for (var i in phaserCards) {
 phaserCards[i].cardObj.myAction = null;
 }
 removeMasques();
}
moteurPhaser.clearCards = function ()
{ 
 for (var i in phaserCards) {
 phaserCards[i].destroy();
 }
 phaserCards = [];
 
 playSoundEffect('Casino Cards.mp3',true);
}


var lastUserEmpty = true;

//var medaillesTypes = [ "Duplicate","Premium4","Premium5","Assiduite","Missions","Politesse","Banchat","Abandon"];
var phaserMedailles = [];

function clearJoueurMedailles(num) {
 //console.log('clearJoueurMedailles',phaserMedailles);
 if (phaserMedailles[num]) {
 for (var f in phaserMedailles[num]) {
 if (phaserMedailles[num][f]) phaserMedailles[num][f].destroy();
 }
 }
 phaserMedailles[num] = new Array();
}

var cpgp = 0;//(1,'IA 2','/images/IAs/IA-6.jpg','',1,'0','0','-1');
moteurPhaser.setUtilisateur = function (num,pseudo, avatar,score,connected,messagesJoueurs,grade,idJoueur)
{ 
 if (avatar!='' && avatar!=null)
 {
 equipiers_pseudos[num].setText(pseudo);// = [];
 dynamicLoadImageTo( equipiers_avatars[num], avatar );
 
 } else if (true) {
 var existing = equipiers_avatars[num];
 var firstWidth = existing.width;
 var firstHeight = existing.height;
 if (pseudo=='Vide' || pseudo=='Libre') {
 existing.loadTexture('Avat_Nobody');
 } else {
 existing.loadTexture('Avat_Unknown'); 
 }
 existing.width = firstWidth;
 existing.height = firstHeight;
 
 }
 var signalFFT = false;
 if ( $(equipiers_avatars[num]).data("pseudo") != pseudo)
 {
 clearJoueurMedailles(num) ;
 if (grade!='0') {

  var medaillesPos = [[50,121],[50,78],[50,38]];
 // $('#divJoueur'+num+' .gradesJ').html('');
 if (idJoueur>0) {
 var tabMed = grade.split('-');
 for (var o=0;o<tabMed.length;o++) {
 if (tabMed[o]=='FFT')
 signalFFT = true;
 else if (o<3) {
 var img = dynamicLoadImage( medaillesPos[o][0], medaillesPos[o][1], '/workers/medailleMin.php?type='+tabMed[o]+'&resizeToHeight=44&idJoueur='+idJoueur+'&v='+Math.random(), null, null,groupEq[num]);
 phaserMedailles[num].push(img);
 }
 }
 } else {
 if (idJoueur==-1) {
  if (!phaserMedalsDisabled) {
  var img = dynamicLoadImage( medaillesPos[0][0], medaillesPos[0][1], '/workers/medailleMin.php?type=IA&resizeToHeight=44&idJoueur=0'+'&v='+Math.random(), null, null,groupEq[num]);
  phaserMedailles[num].push(img);
  }
 }
 else {
  var img = dynamicLoadImage( medaillesPos[0][0], medaillesPos[0][1], '/workers/medailleMin.php?type=Wait&resizeToHeight=44&idJoueur=0'+'&v='+Math.random(), null, null,groupEq[num]);
  phaserMedailles[num].push(img);
 }
 
 }
 }
 }
 console.log('testFFT '+pseudo);
 if (signalFFT) {
 console.log('signalFFT '+pseudo);
 var imageFFT = gamePhaser.add.image(224, 18 ); 
 imageFFT.anchor.setTo(0.5,0.5); 
 groupEq[num].add(imageFFT);
 imageFFT.loadTexture('FFT');
 phaserMedailles[num].push(imageFFT);
 
 }
 $(equipiers_avatars[num]).data("pseudo",pseudo);
 $(equipiers_avatars[num]).data("imgSrc",avatar);
 $(equipiers_avatars[num]).data("signalFFT",signalFFT);
 $(equipiers_avatars[num]).data("idPos",num);
 
    
       
 if (connected || pseudo=='Vide' || pseudo=='Libre') {
 equipiers_leds[num].loadTexture('LedVert');
 }
 else {
 equipiers_leds[num].loadTexture('LedRouge');
 }     
 
 var d = new Date();

 if (pseudo=="Vide" )
 {

 if (d.getTime()>dateDebutPartie+30*1000)
 {
  if ( equipiers_pseudos[num].text != 'Ajouter une IA') {
  equipiers_pseudos[num].setText('Ajouter une IA');
  }
 }
 else
 {
 if ( equipiers_pseudos[num].text != pseudo) {
  equipiers_pseudos[num].setText(pseudo);
 }
 }
 }
 else
 { 
 equipiers_pseudos[num].setText(pseudo);
 }
 
 return; 
} 




moteurPhaser.cartePreselect = function (obj,name) {

 notifyUserActivity();
 if (advanceCardPlayDisable) return;
 if (obj.isPreSelected) {
 obj.isPreSelected = false;
 rpcNoQueue('prochaineCarte=');
 selMoteur.clearMasques();
 nextDelayIsNull = 0;
 } else {
 if (shalAskForConfirmCardPlay || (name=='le petit' && shalAskForconfirmationPetit) ) {
 confirme('Etes-vous sûr de vouloir presélectionner '+name+' ?',function () {
 rpcNoQueue('prochaineCarte='+getCardName(obj));
 obj.isPreSelected = true;
 selMoteur.clearMasques();
  carteSelectionnee(obj.id); 
  nextDelayIsNull = 1;
 });
 } else {
 rpcNoQueue('prochaineCarte='+getCardName(obj));
 selMoteur.clearMasques();
 carteSelectionnee(obj.id); 
 obj.isPreSelected = true;
 nextDelayIsNull = 1;
 }
 }
 return; 
}   

moteurPhaser.cartePoigneeSelectInit = function (cardName) {  
 var cnt = selMoteur.getCards();
 for (key in cnt) {
 if (cnt[key] && cnt[key].id!=null && cnt[key].id==cardName )
 {
  cartePoigneeSelect(cnt[key]);
  return;
 }
 }

}

function cartePosX (num,nodelta) {
 var sizeCard = getPlateauCardSize();
 var oneWidth = groupEq[num].width;

 var delta0 = oneWidth/2-sizeCard.w/2;
 var delta100 = (getWorldW()/2-groupEq[num].goX)/3+(curRndRotC*95423*num)%20-10;
 var delta = delta0*techniqueLevelAnim/100+delta100*(100-techniqueLevelAnim)/100;

 var result = groupEq[num].goX+oneWidth/2-sizeCard.w/2;
 if (!nodelta) result += delta;
 if (result<0) result = 0;
 return result;
 
}
function cartePosY (num,nodelta) {
 var sizeCard = getPlateauCardSize();
 var oneWidth = groupEq[num].height;
 
 var delta0 = 0;
 var delta100 = ( (getWorldH()-mainNbLignesPhaser*geHorizSpacingCards()-50)/2-groupEq[num].goY)/2+(curRndRotC*95423*num)%20-10;
 
 var delta = delta0*techniqueLevelAnim/100+delta100*(100-techniqueLevelAnim)/100;
 var result = groupEq[num].goY+oneWidth/2-sizeCard.h/2;
 if (!nodelta) result += delta;
 if (result<0) result = 0;
 return result;
 
}
var curRndRotC = 1;
function carteRot (num) {
 
 var delta0 = 0;
 var delta100 = (curRndRotC*95423*num)%20-10;
 var delta = delta0*techniqueLevelAnim/100+delta100*(100-techniqueLevelAnim)/100;
 
 return delta;
 
}
function getCardPlayerTopPhaser() {
 return groupEq[0].goY+5;
}
function reposPlayedCards() {
 var ccW = getPlateauCardSize();
 for (var f in cartesSurLeTapis) {
 var tw = gamePhaser.add.tween(cartesSurLeTapis[f]);
 tw.to({ x:cartePosX(f),y:cartePosY(f),angle:carteRot (f),width:ccW.w,height:ccW.h }, 500, Phaser.Easing.Linear.None , true, 0);
 }
 return;
}
 
var cartesSurLeTapis = new Array();

function removeMasques() {
 for (var r in phaserCardsMasques) {
 phaserCardsMasques[r].destroy();
 }
}
var playCardStarted = false;
moteurPhaser.playOppCard = function (name,opp)
{
 playCardStarted = true;
 
 var topO = getCardPlayerTopPhaser();
 var ccW = getPlateauCardSize();
 
 // c'est une carte a moi qui est jouee
 if (opp==whoamiNum )
 {
 removeMasques();

 var myPlayedCard;
 for (var oo in phaserCards) {
  if (phaserCards[oo].alt == name) {
  myPlayedCard = phaserCards[oo];
  phaserCards.splice(oo,1);
  }
 }
 //llog('playoneof min',phaserCards.length);
 if (!myPlayedCard) {
  llog('not found');
  return;
 }
 
 groupDesCartes.bringToTop(myPlayedCard);
 
 myPlayedCard.id = 'newOne'+whoamiNum;
 myPlayedCard.cardObj.myAction=null;

 globTweenTimer.onComplete.removeAll();
 phaserTweenProcessing = true;
 
 var tw = gamePhaser.add.tween(myPlayedCard);
 tw.to({ y:myPlayedCard.y-40 }, 350, Phaser.Easing.Cubic.Out , true, 0);

 var tw2 = gamePhaser.add.tween(myPlayedCard);
 tw2.to({ x:cartePosX (opp),y:cartePosY (opp),angle:carteRot (opp),width:ccW.w,height:ccW.h }, 1000, Phaser.Easing.Cubic.Out);
 tw.chain(tw2);

 //$(myPlayedCard).data('pos',opp);

 tw2.onComplete.add(function () {phaserTweenProcessing = false;reorganiseCartes (); }, this);
 //reorganiseCartes ();
 cartesSurLeTapis[whoamiNum] = myPlayedCard;
 
 lastMO = null;
 playSoundEffect('CardPlaced.mp3',true);
 return;
 }
 if (opp==null) 
 {
 opp=lastOpp;
 lastOpp++;
 if (lastOpp>3) lastOpp=0;
 }
 if (cartesSurLeTapis[opp] && cartesSurLeTapis[opp].alt == name) return;
 

 var sizeCard = ccW;
 var groupPlayedCard = gamePhaser.add.group();
 groupPlayedCard.alt = name;

 var spriteOmbre = gamePhaser.add.sprite(-4, 0 , 'CarteOmbre');
 var tmpphcard = gamePhaser.add.image(0, 0 , name.split('.gif').join('.png') );//
 var scaleCard = sizeCard.w/tmpphcard.width*0.9;
 tmpphcard.scale.setTo(scaleCard);
 
 groupPlayedCard.add(spriteOmbre);
 groupPlayedCard.add(tmpphcard);
 groupPlayedCard.cardObj = tmpphcard;

 groupPlayedCard.x = groupEq[opp].x+groupEq[opp].width/2-tmpphcard.width/2;//cartePosX(opp);
 groupPlayedCard.y = groupEq[opp].y+groupEq[opp].height/2-tmpphcard.height/2;//cartePosY(opp);
 //groupPlayedCard.angle = carteRot(opp);
 //groupPlayedCard.alpha = 0.8;
 spriteOmbre.width = tmpphcard.width;
 spriteOmbre.height = tmpphcard.height;
 
 groupDesCartes.add(groupPlayedCard);
 //phaserCards.push(tmpphcard);
 cartesSurLeTapis[opp] = groupPlayedCard; 
 
 reorganiseCartes ();

 if (Math.random()<0.5)
 playSoundEffect('cards_02.mp3',true);
 else
 playSoundEffect('cards_01.mp3',true);
 
 return;
        
}


var cartesRamasseesPhaser;


moteurPhaser.ramassePoignee = function (joueur)
{
 //lesCartesVontEtresRamassees = true;

 phaserTweenProcessing = true;
 for (var m=0;m<6;m++)
 {
 if (cartesSurLeTapis[m]) {
 if (cartesSurLeTapis[m].alt.split('6_Excuse').length<2) {

  var tw = gamePhaser.add.tween(cartesSurLeTapis[m]);
  tw.to({ x:cartePosX(joueur,true),y:cartePosY(joueur,true),angle:carteRot(joueur) }, 700, Phaser.Easing.Cubic.Out, true, 0);
  if (m==joueur) {

  groupDesCartes.bringToTop(cartesSurLeTapis[m]);
  //gamePhaser.world.bringToTop(cartesSurLeTapis[m]);
  }
 }
 cartesSurLeTapis[m].id = 'ramasse'+m ;
 }
 }
 cartesRamasseesPhaser = cartesSurLeTapis;
 cartesSurLeTapis = new Array();
 playSoundEffect('card move sound.mp3',true);
 setTimeout(function () { finRamasseCartesPhh(joueur);curRndRotC++; },700);
}


function finRamasseCartesPhh (joueur)
{
 for (var m in cartesRamasseesPhaser)
 {
 if (cartesRamasseesPhaser[m]) {
 var manuObj;
 if (cartesRamasseesPhaser[m].cardObj)
 manuObj = cartesRamasseesPhaser[m].cardObj;
 else
 manuObj = cartesRamasseesPhaser[m];
 
 var oldWidth = manuObj.width,oldH=manuObj.height;
 manuObj.loadTexture('Verso');
 var ccW = getPlateauCardSize();
 manuObj.width = oldWidth;
 manuObj.height = oldH;
 //manuObj.scale.setTo(oldWidth/manuObj.width/2);
 }
 } 
 setTimeout(function () { finRamasseCartes2(joueur); } , 600); 
}
/*
 var ccW = getPlateauCardSize();
 for (var f in cartesSurLeTapis) {
 var tw = gamePhaser.add.tween(cartesSurLeTapis[f]);
 tw.to({ x:cartePosX(f),y:cartePosY(f),angle:carteRot (f),width:ccW.w,height:ccW.h }, 500, Phaser.Easing.Linear.None , true, 0);
 }
 return;*/
var cptLeveesCartes = 0;
function finRamasseCartes2 (joueur)
{
 for (var m=0;m<6;m++)
 { 
 if (cartesRamasseesPhaser[m])
 cartesRamasseesPhaser[m].destroy();
 } 
 cartesRamasseesPhaser = []; 
 phaserTweenProcessing = false;
 if (phaserTweenNeedsRefresh) {phaserTweenNeedsRefresh = false;reorganiseCartes ('chained');}    
 
} 
moteurPhaser.setRoleJoueurClass = function (num,className) {

 if (className=='') className='roleAnnonce';
 if (className=='rolePasse') className='roleDefaite';
 if (className=='rolePreneur') className='rolePreneurPrise';

 
 if ( (!couleurAppeleePhaser || couleurAppeleePhaser.appelCouleurI!=num) ) {

 equipiers_botTxt[num].x = 26;
 equipiers_maskrond[num].visible = false; 
 }
 else {

 equipiers_botTxt[num].x = 56;
 equipiers_maskrond[num].visible = true;
 
 }

 //llog('set role joueur texture'+className);
 equipiers_cadres[num].loadTexture(className);

 return;


}


moteurPhaser.setPrise = function (num,txt) 
{
 if (txt=='Passe')
 selMoteur.setRoleJoueurClass(num,'rolePasse');
 else if (txt!='')
 selMoteur.setRoleJoueurClass(num,'rolePreneur');//+txt.split(' ').join('')
 else
 selMoteur.setRoleJoueurClass(num,'roleAnnonce');

 equipiers_botTxt[num].text = txt.toUpperCase();
 
 //resizeChat();
}

moteurPhaser.setPriseTxt = function (num,txt) 
{
 equipiers_botTxt[num].text = txt.toUpperCase();
 
 //resizeChat();
}
moteurPhaser.setPreneur = function (num,annonce,chelem)
{

 for ( var i=0;i<6;i++)
 {

 if (equipiers_botTxt[i]) {

 if (num==-1)
 selMoteur.setRoleJoueurClass(i,'roleAnnonce');
 else if (i==num) {
 selMoteur.setRoleJoueurClass(i,'rolePreneur'+tabAnnonces[annonce].split(' ').join(''));
 } else
 selMoteur.setRoleJoueurClass(i,'roleAnnonce');
 
 if (i==num)
 {
 if (chelem) {
 equipiers_botTxt[i].text = (tabAnnoncesCrt[annonce]+' + chelem').toUpperCase(); 
 } else     
  equipiers_botTxt[i].text = tabAnnonces[annonce].toUpperCase(); 
 }
 else
 {
 equipiers_botTxt[i].text = '';
 }
 }
 }
}

moteurPhaser.clearPrise = function (i)
{
 equipiers_botTxt[i].text = '';
}

moteurPhaser.setDonneurPos = function (num) {

 for (var k=0;k<5;k++) {
 if (equipiers_pseudos[k])
 equipiers_pseudos[k].donneurIcon.visible = false;
 }
 if (num>=0 && equipiers_pseudos[num])
 equipiers_pseudos[num].donneurIcon.visible = true;

 replaceTourDeJeu();
 return;
}
moteurPhaser.setScore = function (num,score)
{
 if (score!='') {

 equipiers_scoresImg[num].visible = true;
 equipiers_scoresTxt[num].visible = true;
 
 equipiers_scoresTxt[num].text = score.split('<b>').join('').split('</b>').join('');
 } else {

 equipiers_scoresImg[num].visible = false;
 equipiers_scoresTxt[num].visible = false;
 }
}


var numActions = 0;
var phaserActionBtns = [];

moteurPhaser.clearActions = function (noscroll)
{
 for (var i in phaserActionBtns) {
 phaserActionBtns[i].destroy();
 }
 phaserActionBtns = [];
 if (numActions!=0) {
 //selMoteur.hideInfoJeu();
 if (!noscroll) $("html, body").stop().animate({ scrollTop: 0 }, 700);
 }
 numActions = 0; 
 reorganiseCartes ('fromZomm');
}
function getActionListHeight (list,x,width,y)
{
 if (getWorldW()<700 || getWorldH()<600 ) {
 for (var i in list) {
 list[i].scale.setTo(2/3);
 }
 } else {

 for (var i in list) {
 if (techniqueLevelAnim)
 list[i].scale.setTo(1);
 else
 list[i].scale.setTo(2/3);
 }
 }
 var ttalW = 0;
 var result = 1;
 var renderedActions = [];
 var remainingActions = [];
 for (var i in list) {
 if (ttalW+list[i].width+4>width && renderedActions.length>0) {
 result++;
 ttalW = list[i].width+4;
 renderedActions = [];
 //remainingActions.push(list[i]);
 } else {
 ttalW += list[i].width+4;
 //renderedActions.push(list[i]);
 }
 }
 var result = result*(list[0].height+4);
 if (messagePlateau) {
 result += getMessageTexteHeight(result)+4;
 }
 return result;
}
function replaceActionList (list,x,width,y)
{
 //var decalTexte = 0;
 /*if (messagePlateau) {
 decalTexte += 110+4;
 }*/
 var nbLignes = 1;
 if (getWorldW()<500 || getWorldH()<500 ) {
 for (var i in list) {
 list[i].scale.setTo(1/2);
 }
 } else if (getWorldW()<700 || getWorldH()<600 ) {
 for (var i in list) {
 list[i].scale.setTo(2/3);
 }
 } else {

 for (var i in list) {
 if (techniqueLevelAnim)
 list[i].scale.setTo(1);
 else
 list[i].scale.setTo(2/3);
 }
 }
 var ttalW = 0;
 var lineWidth = 0;
 var renderedActions = [];
 var remainingActions = [];
 for (var i in list) {
 if (ttalW+list[i].width+4>width && renderedActions.length>0) {
 remainingActions.push(list[i]);
 ttalW = width;
 } else {
 ttalW += list[i].width+4;
 lineWidth += list[i].width+4;
 renderedActions.push(list[i]);
 }
 }
 if (renderedActions.length==0) return 0;
 //llog('replace actions',ttalW);
 var posx = x-width/2+(width-lineWidth)/2;
 for (var i in renderedActions) {
 /*renderedActions[i].x=Math.round(posx);
 renderedActions[i].y=Math.round(y);*/
 
 var tw = gamePhaser.add.tween(renderedActions[i]);
 tw.to({ x:Math.round(posx)+4,y:Math.round(y)+4,alpha:1 }, phaserTweenDuration, phaserTweenType, true, 0);
 
 posx+=renderedActions[i].width+4;
 }
 if (remainingActions.length>0)
 nbLignes += replaceActionList (remainingActions,x,width,y+renderedActions[0].height+4);
 return nbLignes;
}

var phaserActionsHeight = 0;
function replaceActions (x,width,y,yanchor)
{
 if (width<280) width=280;
 if (getWorldH()<400 ) width=Math.min(getWorldW()-20,600);


 var nbLignes;
 if (phaserChatElts && techniqueLevelAnim==100 && getWorldW()>=600) {
 nbLignes = replaceActionList (phaserActionBtns,getWorldW()/2+3-(getWorldW()/2-20-3)/2,getWorldW()/2-20-3,0);
 } else {
 nbLignes = replaceActionList (phaserActionBtns,0,width,0);
 
 }
 
 
 var messageHH = 0;

 var scotchH = scotch.height/2;

 var hhactions = 0;
 
 if (messagePlateau) {
 var tw2 = gamePhaser.add.tween(messagePlateau.textPlateau);
 tw2.to({ fontSize:getPlateauTxtSize(),alpha:1 }, phaserTweenDuration, phaserTweenType, true, 0);
 
 messagePlateau.textPlateau.setTextBounds(0, 0,width-8 , 100);
 messagePlateau.textPlateau.style.wordWrapWidth = width-6;
 messagePlateau.textPlateau.setText(messagePlateau.textPlateau.text);
 }
 
 if (phaserActionBtns.length>0) {
 phaserActionsHeight = nbLignes*(phaserActionBtns[0].height+4);
 if (!messagePlateau) {
 phaserActionsHeight += 35;
 }
 hhactions += phaserActionsHeight;

 }
 if ( techniqueLevelAnim<50) {
 if (messagePlateau) {
 messageHH = getMessageTexteHeight(hhactions);
 }
 if (phaserActionBtns.length>0) {
 var tw = gamePhaser.add.tween(groupDesActionsBountons);
 tw.to({ y:messageHH }, phaserTweenDuration, phaserTweenType, true, 0);
 }
 if (messagePlateau) {
 hhactions += messageHH+4+scotchH;
 }

 var opacity = (hhactions==0)?0:1;
 
 var tw = gamePhaser.add.tween(fondActions);
 tw.to({ x:x+2,y:y-hhactions*yanchor,width:width+4,height:hhactions+30,alpha:opacity }, phaserTweenDuration, phaserTweenType, true, 0);
 
 if (messagePlateau) {
 var tw = gamePhaser.add.tween(messagePlateau.fondPlateau);
 tw.to({ alpha:0 }, phaserTweenDuration, phaserTweenType, true, 0);
 }
 var opacityScotch = opacity;
 if (getWorldW()<600 || getWorldH()<500)
 opacityScotch = 0;
 
 var tw = gamePhaser.add.tween(scotch);
 tw.to({ x:x,y:y-hhactions*yanchor,alpha:opacityScotch }, phaserTweenDuration, phaserTweenType, true, 0);
 
 if (getWorldW()<800)
 scotch.scale.setTo(0.7);
 else
 scotch.scale.setTo(1);
 var tw = gamePhaser.add.tween(groupDesActions);
 tw.to({ x:getWorldW()/2,y:getLevelAnimValue(scotchH,0)+y-hhactions*yanchor }, phaserTweenDuration, phaserTweenType, true, 0);
 }
 else {
 if (messagePlateau) {
 messageHH = 150;
 if ( messageHH>messagePlateau.textPlateau.height)
 messageHH = messagePlateau.textPlateau.height;
 tweenFond(messagePlateau.fondPlateau,messagePlateau.groupFond,0,0,width,messageHH,0.8,6,function (r) {messagePlateau.fondPlateau = r; });
 }
 hhactions += messageHH;

 if (phaserActionBtns.length>0) {
 var tw = gamePhaser.add.tween(groupDesActionsBountons);
 tw.to({ y:messageHH }, phaserTweenDuration, phaserTweenType, true, 0);
 }
 
 var tw = gamePhaser.add.tween(scotch);
 tw.to({ alpha:0 }, phaserTweenDuration, phaserTweenType, true, 0);
 
 var tw = gamePhaser.add.tween(fondActions);
 tw.to({ alpha:0 }, phaserTweenDuration, phaserTweenType, true, 0);
 

 var tw = gamePhaser.add.tween(groupDesActions);
 tw.to({ x:Math.round(getWorldW()/2),y:Math.round(y) }, phaserTweenDuration, phaserTweenType, true, 0);
 }

 //llog('height mask ppal text messageHH',messageHH);
 if (messagePlateau) {
 if (messagePlateau.scroller ) {
 messagePlateau.scroller.maskGraphics.clear();
 messagePlateau.scroller.maskGraphics.beginFill(0xffffff);
 messagePlateau.scroller.maskGraphics.drawRect(0,0,width ,messageHH);//
 messagePlateau.scroller.maskGraphics.y = getLevelAnimValue(scotchH,0)+y-hhactions*yanchor;//getWorldW();
 messagePlateau.scroller.maskGraphics.x = getWorldW()/2-width/2;
 messagePlateau.scroller._h = messageHH;
 }
 }
 return {actions:phaserActionsHeight,total:hhactions,message:messageHH};

}
var TOACTIONS;
moteurPhaser.addAction = function (name,action,myclass,noscroll)
{

 if (selMoteur.actionExists (name))
 return;

 numActions++;

 //llog('addAction',name);
 var actionBtn = createButton (0,40,name.toUpperCase(),function () {
 if (tempDisableJoueurBtn) return;
 tempDisableJoueurBtn = 1; 
 setTimeout(function () {tempDisableJoueurBtn=0;},700);
 eval(action);
 }, myclass);//"btn-warning");
 actionBtn.myName = name;
 actionBtn.x = -actionBtn.width/2;
 if (messagePlateau) {
 actionBtn.y = messagePlateau.textPlateau.height;
 }
 actionBtn.alpha = 0;
 phaserActionBtns.push(actionBtn);
 groupDesActionsBountons.add(actionBtn);
 
 clearTimeout(TOACTIONS);
 TOACTIONS = setTimeout(function () {
 reorganiseCartes ();
 /*if (!noscroll)
 $("html, body").stop().animate({ scrollTop:document.body.scrollHeight }, 1000);*/
 },20);

}

moteurPhaser.actionExists = function (name)
{
 for (var i in phaserActionBtns) {
 if (name==phaserActionBtns[i].myName) {
 return true;
 }
 }
 return false;
}
moteurPhaser.removeAction = function (name)
{
 for (var i in phaserActionBtns) {
 if (name==phaserActionBtns[i].myName) {
 phaserActionBtns[i].destroy();
 phaserActionBtns.splice(i,1);
 //delete phaserActionBtns[i];
 }
 }
 reorganiseCartes ('fromZomm');

 return;
}
function replaceTourDeJeu() {
 for (var i in groupEq) {
 if (equipiers_pseudos[i].donneurIcon.visible) {
 groupEq[i].tourDeJeuE.x = 238;
 groupEq[i].tourDeJeuE.y = 75;
 
 } else {
 groupEq[i].tourDeJeuE.x = 238;
 groupEq[i].tourDeJeuE.y = 120;
 }
 }
}
var lastTurnSel = null; 
var phaserMyTurn = false;
moteurPhaser.setTurn = function (num)
{
 if (whoamiNum==num)
 phaserMyTurn = true;
 else
 phaserMyTurn = false;
 if (!phaserSelecteurTour) return;
 if (etapeCourante =="Terminee")
 {
 selMoteur.clearTurn();           
 }
 else
 {
 // if ( $$('selecteurTour')!=null) $$('selecteurTour').style.visibility='visible';
 for (var i in groupEq) {
 if (i==num) {
  groupEq[i].tourDeJeuE.visible = true;
 
 } else {
  groupEq[i].tourDeJeuE.visible = false;
 
 }
 }
 phaserSelecteurTour.visible = true;
 
 //var oneWidth = $('#divJoueur0').width();
 //var newPos = $('#divJoueur'+num).offset().left+oneWidth/2-$('#selecteurTour').width()/2;
 
 var tw = gamePhaser.add.tween(phaserSelecteurTour);
 tw.to({ x:groupEq[num].goX+groupEq[num].width/2,y:groupEq[num].goY+20+10 }, 500, Phaser.Easing.Cubic.Out, true, 0);
 
 //$('#selecteurTour').stop().animate( { left: newPos,top:$('#webBody').css('margin-top') }, 700 );
 
 // var newFx = new Fx.Tween('selecteurTour', { property: 'left' }).start(parseInt($$('selecteurTour').style.left), newPos );
 lastTurnSel = num;
 }
 replaceTourDeJeu();
} 
moteurPhaser.clearTurn = function () 
{
 phaserSelecteurTour.visible = false;
 for (var i in groupEq) {
 groupEq[i].tourDeJeuE.visible = false;
 }
 //if ( $$('selecteurTour')!=null) $$('selecteurTour').style.visibility='hidden';
} 


moteurPhaser.hideInfoJeu = function ()
{
 if (phaserShownCardsPli) {
 /*
 phaserShownCardsPli.groupDessusFondCartesAffichess.mask = mask;
 phaserShownCardsPli.maskContent = mask;*/
 groupCartesAffichess.remove(phaserShownCardsPli.maskContent);
 
 phaserShownCardsPli.groupDessusFondCartesAffichess.mask = null;
 
 phaserShownCardsPli.groupFondCartesAffichess.destroy();
 if (phaserShownCardsPli.maskContent)
 phaserShownCardsPli.maskContent.destroy();
 phaserShownCardsPli.phaserTxt.destroy();
 phaserShownCardsPli.phaserTxt2.destroy();
 phaserShownCardsPli.phaserFond.destroy();
 for (var i in phaserShownCardsPli.cardsList) {
 phaserShownCardsPli.cardsList[i].destroy();
 }
 phaserShownCardsPli = null;
 }
 return;
} 

var lastIntitule = '';
var TOaffCART;

var phaserShownCardsPli;
var phaserShownCardsInfo;

moteurPhaser.afficheCartes = function (cartes,intitule)
{ 
 if (lastIntitule==intitule && intitule.indexOf('taient dans le chien') === -1) return;
 lastIntitule = intitule;
 
 playCardStarted = true;
 selMoteur.hideInfoJeu();
 var wwi = Math.min(800,getWorldW()*80/100);

 groupCartesAffichess.x = getWorldW()/2;
 groupCartesAffichess.y = getWorldH()+100;
 
 var groupFondCartesAffichess = gamePhaser.add.group();
 groupCartesAffichess.add(groupFondCartesAffichess);
 
 var groupDessusFondCartesAffichess = gamePhaser.add.group();
 groupCartesAffichess.add(groupDessusFondCartesAffichess);
 
 var fondPlateau = gamePhaser.add.sprite(0,0 , 'ToproleNobody'); 
 fondPlateau.anchor.setTo(0.5,0);
 groupFondCartesAffichess.add(fondPlateau);
 if (techniqueLevelAnim<100)
 fondPlateau.alpha = 0;
 
 var textPlateau = gamePhaser.add.text(0,0, intitule, { fontSize: '24px', fill: '#222',font: fontNamePhaser });//, wordWrap: true, wordWrapWidth: wwi
 textPlateau.anchor.setTo(0.5,0);
 //textPlateau.mask = mask;
 textPlateau.alpha = 0;
 groupDessusFondCartesAffichess.add(textPlateau);


 var textPlateau2 = gamePhaser.add.text(0,0, intitule, { fontSize: '24px', fill: '#fff',font: fontNamePhaser });//, wordWrap: true, wordWrapWidth: wwi
 textPlateau2.anchor.setTo(0.5,0);
 //textPlateau.mask = mask;
 textPlateau2.alpha = 0;
 groupDessusFondCartesAffichess.add(textPlateau2);


 phaserShownCardsPli = {};
 phaserShownCardsPli.cardsList = [];
 phaserShownCardsPli.intitule = intitule;
 phaserShownCardsPli.phaserTxt = textPlateau;
 phaserShownCardsPli.phaserTxt2 = textPlateau2;
 phaserShownCardsPli.phaserFond = fondPlateau;
 //phaserShownCardsPli.maskContent = mask;
 phaserShownCardsPli.groupFondCartesAffichess = groupFondCartesAffichess;
 phaserShownCardsPli.groupDessusFondCartesAffichess = groupDessusFondCartesAffichess;

 var cartesChien = jQuery.parseJSON(cartes); 
 for (i=0;i<cartesChien.length;i++)
 {
 var groupC = gamePhaser.add.group();

 groupC.y = 40;

 var spriteOmbre = gamePhaser.add.sprite(-4, -2 , 'CarteOmbre');
 spriteOmbre.scale.setTo(getCarteAffW()/spriteOmbre.width);
 groupC.add(spriteOmbre);
 
 var tmpphcard = gamePhaser.add.image(0 ,0 , cartesChien[i].split('.gif').join('.png') );//
 tmpphcard.scale.setTo(getCarteAffW()/tmpphcard.width);
 groupC.add(tmpphcard);
 
 phaserShownCardsPli.cardsList.push(groupC);
 groupDessusFondCartesAffichess.add(groupC);
 /*if (fondPlateau.height<textPlateau.height+tmpphcard.height) {
 fondPlateau.height = textPlateau.height+tmpphcard.height;
 }*/
 }
 
 selMoteur.clearActions(); 
 reorganiseCartes ('fromZomm');
 
 return; 

} 


var messagePlateau = null;

moteurPhaser.clearMessagePlateauJeu = function ()
{
 if (!messagePlateau) return;
 clearTimeout(mpcancellable);
 if (messagePlateau.scroller) {
 messagePlateau.scroller.stop();
 messagePlateau.scroller.destroy();
 messagePlateau.scroller.maskGraphics.destroy();
 }
 messagePlateau.textPlateau.destroy();
 messagePlateau.fondPlateau.destroy();
 messagePlateau = null;
}
moteurPhaser.introAction = function ()
{
 if (techniqueLevelAnim<100)
 selMoteur.addAction('OK','hideMessageIntro();','btn-success');
}
var mpcancellable;
moteurPhaser.showMessagePlateauJeu = function (txt)
{
 var regex = /(<([^>]+)>)/ig
 , txtValue = txt.split('<br>').join('\n').split('&quot;').join('"').replace(regex, "");
 //var txtValue = $(txt).text();//txt;
 if (messagePlateau) {

 if (txtValue==messagePlateau.textPlateau.text)
 return;
 if (txtValue=='') {
 moteurPhaser.clearMessagePlateauJeu();
 return;
 }
 //llog('existing',messagePlateau);
 messagePlateau.textPlateau.setText(txtValue);
 messagePlateau.textPlateau.alpha = 0;
 reorganiseCartes ();
 return;
 }
 //llog('******** showMessagePlateauJeu');
 selMoteur.clearCards ();
 
 
 var wwi = Math.min(800,getWorldW()*50/100);


 var groupFond = gamePhaser.add.group();
 groupDesActions.add(groupFond);
 
 var fondPlateau = gamePhaser.add.graphics(getWorldW()/2,0);
 fondPlateau.beginFill(0xffffff);
 fondPlateau.drawRoundedRect(getWorldW()/2, getWorldH()/2, 100, 50,0);
 fondPlateau.anchor.setTo(0.5,0); 
 fondPlateau.alpha = 0;
 groupFond.add(fondPlateau);

 
 var textPlateau = gamePhaser.add.text(0, 0, txtValue, { fontSize: getPlateauTxtSize()+'px', fill: '#333',font: fontNamePhaser, wordWrap: true, wordWrapWidth: wwi });
 textPlateau.anchor.setTo(0.5,0);
 textPlateau.align = 'center';
 textPlateau.alpha = 0;
 textPlateau.setTextBounds(0, 0,wwi , 300);
 groupDesActions.add(textPlateau);

 messagePlateau = {
 textPlateau:textPlateau,
 fondPlateau:fondPlateau,
 groupFond:groupFond
 }

 mpcancellable = setTimeout(function () {
 //llog('create scrollable',wwi, getMessageTexteHeight(phaserActionsHeight));
 var scroller = gamePhaser.add.existing(new ScrollableArea(0, 0, wwi, getMessageTexteHeight(phaserActionsHeight),{horizontalScroll :false } ));
 groupDesActions.add(scroller);
 scroller.addChild(textPlateau);
 for (var i in phaserActionBtns) {
 phaserActionBtns[i].y += getMessageTexteHeight(phaserActionsHeight)+4;
 }
 messagePlateau.scroller = scroller;
 scroller.start();
 reorganiseCartes ();
 },200);

 reorganiseCartes ();
 return;
 
 
}




var delTOTO = 0;
function progressPhaser(percent) {

 if (phaserTimerObject.phaserTweenTimer) phaserTimerObject.phaserTweenTimer.stop();
 if (phaserTimerObject.phaserTweenTimer2) phaserTimerObject.phaserTweenTimer2.stop();
 
 phaserTimerObject.phaserTweenTimer = gamePhaser.add.tween(phaserTimerObject.phaserMaskTimer);
 phaserTimerObject.phaserTweenTimer.to({ x:percent/100*phaserTimerObject.phasertimerVide.width}, 200, Phaser.Easing.Linear.None, true, 0);
 

 phaserTimerObject.phaserTweenTimer2 = gamePhaser.add.tween(phaserTimerObject.phaserMaskTimer2);
 phaserTimerObject.phaserTweenTimer2.to({ x:percent/100*phaserTimerObject.phasertimerVide2.width}, 200, Phaser.Easing.Linear.None, true, 0);
 
}
var syncTimeDelay = 0;
var syncTimeTS = 0;
var syncTimeTotal = 0;
var syncTimeInterval = 0;

moteurPhaser.timeThatRemains = function (delay,totalTime,ignoreTurn)
{
 if (!phaserTimerObject.phasergroupTimer) return;
 //log('il reste '+delay+' secondes');
 if (delay==-1 || (lastTurnSel!=whoamiNum && !ignoreTurn) )// 
 { 
 syncTimeDelay = 0;
 syncTimeTS = 0;
 syncTimeTotal = 0;
 clearInterval(syncTimeInterval);

 phaserTimerObject.phasergroupTimer.visible = false;

 }
 else
 { 
 var oldDelay = syncTimeDelay-((new Date().getTime()) - syncTimeTS)/1000;
 //llog('oldDelay',oldDelay);
 //llog('err',oldDelay-delay);
 syncTimeDelay = delay;
 syncTimeTS = (new Date().getTime());
 syncTimeTotal = totalTime;
 clearInterval(syncTimeInterval);
 syncTimeInterval = setInterval(function () { intervalTimeRemainingPhaser(ignoreTurn); },100);
 
 var newWidth = 0;
 if ( delay>2) newWidth = 10+delay*3;

 phaserTimerObject.phasergroupTimer.visible = true;

 progressPhaser(delay*100/totalTime );
 }
}
var canPlayAlertSound = 0;

function intervalTimeRemainingPhaser(ignoreTurn) {
 var newDelay = syncTimeDelay-((new Date().getTime()) - syncTimeTS)/1000;
 if (newDelay<0 || (lastTurnSel!=whoamiNum && !ignoreTurn) )// 
 { 
 syncTimeDelay = 0;
 syncTimeTS = 0;
 syncTimeTotal = 0;
 clearInterval(syncTimeInterval);

 phaserTimerObject.phasergroupTimer.visible = false;
 return;
 }
 if (newDelay<3 && canPlayAlertSound==0) {
 if (gameSoundsEnabled) playSoundEffect ('Heartbeat3.mp3',true,0.9);
 else playSound ('Button.mp3?v=2');//playSound ('Bip.mp3');
 canPlayAlertSound = 1;
 } else if (newDelay>5 && canPlayAlertSound==1 ) {
 canPlayAlertSound = 0;
 }
 progressPhaser(newDelay*100/syncTimeTotal );
}


var chatElts = [];
moteurPhaser.showMessageJoueur = function (numChat,texte) {
 if (window.disableEmoticons) return;
 var rand = Math.random();
 if (texte=="J'applaudis !") playSoundEffect ('Clap_Hands'+Math.floor(rand*5)+'.mp3',true,0.9);
 else if (texte=="C'est long...") playSoundEffect ('Yawn'+(2+Math.floor(rand*2))+'.mp3',true,0.9);
 else if (texte=="Je vous embrasse !") playSoundEffect ('Kiss '+Math.ceil(rand*3)+'.mp3',true,0.9);
 else if (texte=="Je pleure !") playSoundEffect ('Cry_1Cut.mp3',true,0.9);
 

 var groupChat = gamePhaser.add.group();
 var groupOmbre = gamePhaser.add.group();
 groupChat.add(groupOmbre);
 var groupChatFather = gamePhaser.add.group();
 groupChatFather.add(groupChat);
 
 var chatTopH = 12;
 var distOmbrex = 6;
 var distOmbrey = 4;
 var ombreOpacity = 0.5;

 var OMBREchatTop = groupOmbre.create(distOmbrex, distOmbrey , 'ChatTop3');OMBREchatTop.alpha = ombreOpacity;
 var OMBREchatBot2 = groupOmbre.create(distOmbrex, 60+distOmbrey , 'ChatTop3');OMBREchatBot2.alpha = ombreOpacity;
 OMBREchatBot2.scale.setTo(1,-1);
 var OMBREchatTop2 = groupOmbre.create(distOmbrex, chatTopH+distOmbrey , 'ChatBot3');OMBREchatTop2.alpha = ombreOpacity;
 OMBREchatTop2.scale.setTo(1,-1);
 var OMBREchatMid = groupOmbre.create(distOmbrex, chatTopH+distOmbrey , 'ChatMid3');OMBREchatMid.alpha = ombreOpacity;
 var OMBREchatBot = groupOmbre.create(distOmbrex, distOmbrey , 'ChatBot3');OMBREchatBot.alpha = ombreOpacity;
 
 
 var chatTop = groupChat.create(0, 0 , 'ChatTop');
 var chatBot2 = groupChat.create(0, 60 , 'ChatTop');
 chatBot2.scale.setTo(1,-1);
 var chatTop2 = groupChat.create(0, chatTopH , 'ChatBot');
 chatTop2.scale.setTo(1,-1);
 var chatMid = groupChat.create(0, chatTopH , 'ChatMid');
 var chatBot = groupChat.create(0, 0 , 'ChatBot');
 
 
 var style = { font: fontNamePhaser, fontSize: '28px',fill: 'black', align: 'left', wordWrap: true, wordWrapWidth: 365 };
 var textBubble;
 if (emoticons[texte] ) {
 OMBREchatMid.destroy();
 chatMid.destroy();
 OMBREchatTop.destroy();
 OMBREchatTop2.destroy();
 chatTop.destroy();
 chatTop2.destroy();

 OMBREchatBot.destroy();
 OMBREchatBot2.destroy();
 chatBot.destroy();
 chatBot2.destroy();
 
 //if (window.disableEmoticons) return;
 textBubble = groupChat.create(24/4+OMBREchatBot.width/4-150/2, chatTopH, 'Emoticon'+emoticons[texte]);
 
 groupChat.x += 105;
 //textBubble.scale.setTo(1);
 }
 else
 textBubble = gamePhaser.add.text(24/2, chatTopH, texte , style,groupChat);

 var bubMask = gamePhaser.add.graphics(24/2,chatTopH);
 groupChat.add(bubMask);
 
 bubMask.beginFill(0xffffff);
 bubMask.drawRect(0, 0, 365-12,textBubble.height);
 bubMask.anchor.setTo(0.2,0.2);
 textBubble.mask = bubMask;
 


 var hChat = textBubble.height;
 chatMid.height = hChat;
 chatBot.y = Math.floor(hChat+chatTopH);
 chatBot2.y = Math.floor(hChat+chatTopH+chatTopH);
 
 OMBREchatMid.height = hChat;
 OMBREchatBot.y = Math.floor(hChat+chatTopH+distOmbrey);
 OMBREchatBot2.y = Math.floor(hChat+chatTopH+chatTopH+distOmbrey);
 
 var scaleCh = 2/3;
 if (getWorldW()<800 || getWorldH()<600)
 scaleCh = 0.5;
 scaleCh = 100/groupChatFather.height*scaleCh;
 groupChatFather.scale.setTo( scaleCh );
 
 groupChatFather.x = Math.floor(Math.max(0,Math.round(groupEq[numChat].x+groupEq[numChat].width/2-(365+24*2)/2*scaleCh) ));
 if (groupChatFather.x>getWorldW()-(365+24*2)/2*scaleCh )
 groupChatFather.x=Math.floor(getWorldW()-(365+24*2)/2*scaleCh );
 chatElts.push(groupChatFather);
 if (groupEq[numChat].y>getWorldH()/2.1){
 groupChatFather.y = Math.floor(groupEq[numChat].y-5);//-groupEq[numChat].height-15;
 chatTop2.alpha = 0;
 gamePhaser.add.tween(chatBot2).to( { alpha: 1 }, 1000, "Quart.easeOut", true, 0);
 gamePhaser.add.tween(chatBot).to( { alpha: 0 }, 1000, "Quart.easeOut", true, 0);
 OMBREchatTop2.alpha = 0;
 gamePhaser.add.tween(OMBREchatBot2).to( { alpha: ombreOpacity }, 1000, "Quart.easeOut", true, 0);
 gamePhaser.add.tween(OMBREchatBot).to( { alpha: 0 }, 1000, "Quart.easeOut", true, 0);
 }
 else {
 groupChatFather.y = Math.floor(groupEq[numChat].y+groupEq[numChat].height+5);
 chatBot.alpha = 0;
 gamePhaser.add.tween(chatTop2).to( { alpha: 0 }, 1000, "Quart.easeOut", true, 0);
 gamePhaser.add.tween(chatTop).to( { alpha: 1 }, 1000, "Quart.easeOut", true, 0);
 OMBREchatBot.alpha = 0;
 gamePhaser.add.tween(OMBREchatTop2).to( { alpha: 0 }, 1000, "Quart.easeOut", true, 0);
 gamePhaser.add.tween(OMBREchatTop).to( { alpha: ombreOpacity }, 1000, "Quart.easeOut", true, 0);
 }
 
 
 var tw = gamePhaser.add.tween(groupChat);
 if (groupEq[numChat].y>getWorldH()/2.1)
 tw.to({ y:-50 }, 2000, Phaser.Easing.Cubic.Out, true, 0);
 else
 tw.to({ y:50 }, 2000, Phaser.Easing.Cubic.Out, true, 0);

 var twbOmbre = gamePhaser.add.tween(groupOmbre).to( { alpha: 0 }, 300, "Quart.easeOut");
 tw.chain(twbOmbre);
 var twb = gamePhaser.add.tween(groupChat).to( { alpha: 0 }, 1000, "Quart.easeOut");
 twbOmbre.chain(twb);

 playSoundEffect ('Female Voice - Psst '+Math.ceil(Math.random()*2)+'.mp3',true,0.5);
 
 twb.onComplete.add(function () {
 //llog('recreate fond rounded');
 groupChat.destroy();
 groupChatFather.destroy();
 chatTop.destroy();
 chatBot2.destroy();
 chatTop2.destroy();
 chatMid.destroy();
 chatBot.destroy();
 }, this);
 
}






function resizeChat() {
 return;
}
var isPhaserFondChatShown = false;
function showChatPhaserD () {
 if (isPhaserFondChatShown) return;
 isPhaserFondChatShown = true;
 phaserDecalChat = 0;
 reorganiseCartes();
}
moteurPhaser.hideChat = function () {
 if (!isPhaserFondChatShown) return;
 phaserDecalChat = 0;
 isPhaserFondChatShown = false;
 reorganiseCartes();
}

moteurPhaser.hideCoulApp = function () {
 if (couleurAppeleePhaser) {
 equipiers_maskrond[couleurAppeleePhaser.appelCouleurI].visible = false; 
 couleurAppeleePhaser.couleurObj.destroy();
 couleurAppeleePhaser.appelObj.destroy();
 couleurAppeleePhaser = false;
 }
}
function showCRA() {
}
var couleurAppeleePhaser = false;

moteurPhaser.showCoulApp = function (i,coulNum,txtTete) {

 selMoteur.hideCoulApp();
 couleurAppeleePhaser = {};
 
 equipiers_maskrond[i].visible = true; 

 couleurAppeleePhaser.couleurObj = groupEq[i].create(10+20, 180+11 , 'Couleur'+coulNum );
 couleurAppeleePhaser.couleurObj.scale.setTo(20/couleurAppeleePhaser.couleurObj.height);
 couleurAppeleePhaser.appelObj = groupEq[i].create(0, 180+11 , 'Appel'+txtTete );
 couleurAppeleePhaser.appelObj.scale.setTo(couleurAppeleePhaser.couleurObj.height/couleurAppeleePhaser.appelObj.height);
 couleurAppeleePhaser.appelObj.x = 20+10-couleurAppeleePhaser.appelObj.width;
 couleurAppeleePhaser.appelCouleurI = i;
 couleurAppeleePhaser.appelCouleurNum = coulNum;
 couleurAppeleePhaser.appelCouleurTxtTete = txtTete;
 
 //$('.appelRoi').html('');
 //$('#divJoueur'+i+' .appelRoi').html('<img src="/images/Couleurs/'+txtTete+'.png?v=3" class="coulPren iconeStatut"><img src="/images/Couleurs/'+coulNum+'.png" class="coulPren iconeStatut">');
 //showCRA();
 reorganiseCartes();
}


moteurPhaser.clearMasques = function () {
 var cnt = selMoteur.getCards();
 for (key in cnt) {
 if (cnt[key] && cnt[key].id!=null )
 {
 if (cnt[key].myMask)
 cnt[key].myMask.destroy();
 }
 }
}

moteurPhaser.clearMasque = function (id) {
 var cnt = selMoteur.getCards();
 for (key in cnt) {
 if (cnt[key] && cnt[key].id!=null && cnt[key].id==id )
 {
 if (cnt[key].myMask)
 cnt[key].myMask.destroy();
 }
 }
}
var phaserCardsMasques = [];
moteurPhaser.addMasque = function (id,masque) {
 var cnt = selMoteur.getCards();
 selMoteur.clearMasque(id);
 for (key in cnt) {
 if (cnt[key] && cnt[key].id!=null && cnt[key].id==id )
 {
 var msk = gamePhaser.add.image(0,0, masque);
 cnt[key].add(msk);
 //llog('msk',getPlayedCardSize().w,msk.width);
 msk.scale.setTo(cnt[key].cardObj.width/msk.width);
 cnt[key].myMask = msk;
 phaserCardsMasques.push(msk);
 //cartePoigneeSelect(cnt[key]);
 return;
 }
 }
}



moteurPhaser.setGameMainMsg = function (txt) {
 phaserMessagePpal.setText(txt.toUpperCase() );// = [];
 //alert(phaserMessagePpal.width);
 phaserMessagePpalChevronLeft.x = -phaserMessagePpal.width/2-phaserMessagePpalChevronLeft.width-4;
 phaserMessagePpalChevronRight.x = phaserMessagePpal.width/2+4;//+phaserMessagePpalChevronRight.width+2;
 reorganiseCartes();
}


function phaserAnimateToWidth (card,destW,ccW,opt,endf,subtotalLeft) {
 var newW = destW-ccW;
 var idDest = id.split('.').join('\\.');
 var margL = newW/2;
 var margR = newW/2;
 if (opt=='First') margL = -5;
 if (opt=='Last') margR = -5;

 var tw = gamePhaser.add.tween(phaserCards[key]);
 tw.to({ x:posx }, phaserTweenDuration, phaserTweenType, true, 0);

}

/*! jQuery UI - v1.11.4 - 2018-11-17
* http://jqueryui.com
* Includes: core.js, widget.js, mouse.js, position.js, draggable.js, resizable.js, button.js, dialog.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */

(function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)})(function(t){function e(e,s){var n,o,a,r=e.nodeName.toLowerCase();return"area"===r?(n=e.parentNode,o=n.name,e.href&&o&&"map"===n.nodeName.toLowerCase()?(a=t("img[usemap='#"+o+"']")[0],!!a&&i(a)):!1):(/^(input|select|textarea|button|object)$/.test(r)?!e.disabled:"a"===r?e.href||s:s)&&i(e)}function i(e){return t.expr.filters.visible(e)&&!t(e).parents().addBack().filter(function(){return"hidden"===t.css(this,"visibility")}).length}t.ui=t.ui||{},t.extend(t.ui,{version:"1.11.4",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),t.fn.extend({scrollParent:function(e){var i=this.css("position"),s="absolute"===i,n=e?/(auto|scroll|hidden)/:/(auto|scroll)/,o=this.parents().filter(function(){var e=t(this);return s&&"static"===e.css("position")?!1:n.test(e.css("overflow")+e.css("overflow-y")+e.css("overflow-x"))}).eq(0);return"fixed"!==i&&o.length?o:t(this[0].ownerDocument||document)},uniqueId:function(){var t=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++t)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&t(this).removeAttr("id")})}}),t.extend(t.expr[":"],{data:t.expr.createPseudo?t.expr.createPseudo(function(e){return function(i){return!!t.data(i,e)}}):function(e,i,s){return!!t.data(e,s[3])},focusable:function(i){return e(i,!isNaN(t.attr(i,"tabindex")))},tabbable:function(i){var s=t.attr(i,"tabindex"),n=isNaN(s);return(n||s>=0)&&e(i,!n)}}),t("<a>").outerWidth(1).jquery||t.each(["Width","Height"],function(e,i){function s(e,i,s,o){return t.each(n,function(){i-=parseFloat(t.css(e,"padding"+this))||0,s&&(i-=parseFloat(t.css(e,"border"+this+"Width"))||0),o&&(i-=parseFloat(t.css(e,"margin"+this))||0)}),i}var n="Width"===i?["Left","Right"]:["Top","Bottom"],o=i.toLowerCase(),a={innerWidth:t.fn.innerWidth,innerHeight:t.fn.innerHeight,outerWidth:t.fn.outerWidth,outerHeight:t.fn.outerHeight};t.fn["inner"+i]=function(e){return void 0===e?a["inner"+i].call(this):this.each(function(){t(this).css(o,s(this,e)+"px")})},t.fn["outer"+i]=function(e,n){return"number"!=typeof e?a["outer"+i].call(this,e):this.each(function(){t(this).css(o,s(this,e,!0,n)+"px")})}}),t.fn.addBack||(t.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),t("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(t.fn.removeData=function(e){return function(i){return arguments.length?e.call(this,t.camelCase(i)):e.call(this)}}(t.fn.removeData)),t.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),t.fn.extend({focus:function(e){return function(i,s){return"number"==typeof i?this.each(function(){var e=this;setTimeout(function(){t(e).focus(),s&&s.call(e)},i)}):e.apply(this,arguments)}}(t.fn.focus),disableSelection:function(){var t="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.bind(t+".ui-disableSelection",function(t){t.preventDefault()})}}(),enableSelection:function(){return this.unbind(".ui-disableSelection")},zIndex:function(e){if(void 0!==e)return this.css("zIndex",e);if(this.length)for(var i,s,n=t(this[0]);n.length&&n[0]!==document;){if(i=n.css("position"),("absolute"===i||"relative"===i||"fixed"===i)&&(s=parseInt(n.css("zIndex"),10),!isNaN(s)&&0!==s))return s;n=n.parent()}return 0}}),t.ui.plugin={add:function(e,i,s){var n,o=t.ui[e].prototype;for(n in s)o.plugins[n]=o.plugins[n]||[],o.plugins[n].push([i,s[n]])},call:function(t,e,i,s){var n,o=t.plugins[e];if(o&&(s||t.element[0].parentNode&&11!==t.element[0].parentNode.nodeType))for(n=0;o.length>n;n++)t.options[o[n][0]]&&o[n][1].apply(t.element,i)}};var s=0,n=Array.prototype.slice;t.cleanData=function(e){return function(i){var s,n,o;for(o=0;null!=(n=i[o]);o++)try{s=t._data(n,"events"),s&&s.remove&&t(n).triggerHandler("remove")}catch(a){}e(i)}}(t.cleanData),t.widget=function(e,i,s){var n,o,a,r,l={},h=e.split(".")[0];return e=e.split(".")[1],n=h+"-"+e,s||(s=i,i=t.Widget),t.expr[":"][n.toLowerCase()]=function(e){return!!t.data(e,n)},t[h]=t[h]||{},o=t[h][e],a=t[h][e]=function(t,e){return this._createWidget?(arguments.length&&this._createWidget(t,e),void 0):new a(t,e)},t.extend(a,o,{version:s.version,_proto:t.extend({},s),_childConstructors:[]}),r=new i,r.options=t.widget.extend({},r.options),t.each(s,function(e,s){return t.isFunction(s)?(l[e]=function(){var t=function(){return i.prototype[e].apply(this,arguments)},n=function(t){return i.prototype[e].apply(this,t)};return function(){var e,i=this._super,o=this._superApply;return this._super=t,this._superApply=n,e=s.apply(this,arguments),this._super=i,this._superApply=o,e}}(),void 0):(l[e]=s,void 0)}),a.prototype=t.widget.extend(r,{widgetEventPrefix:o?r.widgetEventPrefix||e:e},l,{constructor:a,namespace:h,widgetName:e,widgetFullName:n}),o?(t.each(o._childConstructors,function(e,i){var s=i.prototype;t.widget(s.namespace+"."+s.widgetName,a,i._proto)}),delete o._childConstructors):i._childConstructors.push(a),t.widget.bridge(e,a),a},t.widget.extend=function(e){for(var i,s,o=n.call(arguments,1),a=0,r=o.length;r>a;a++)for(i in o[a])s=o[a][i],o[a].hasOwnProperty(i)&&void 0!==s&&(e[i]=t.isPlainObject(s)?t.isPlainObject(e[i])?t.widget.extend({},e[i],s):t.widget.extend({},s):s);return e},t.widget.bridge=function(e,i){var s=i.prototype.widgetFullName||e;t.fn[e]=function(o){var a="string"==typeof o,r=n.call(arguments,1),l=this;return a?this.each(function(){var i,n=t.data(this,s);return"instance"===o?(l=n,!1):n?t.isFunction(n[o])&&"_"!==o.charAt(0)?(i=n[o].apply(n,r),i!==n&&void 0!==i?(l=i&&i.jquery?l.pushStack(i.get()):i,!1):void 0):t.error("no such method '"+o+"' for "+e+" widget instance"):t.error("cannot call methods on "+e+" prior to initialization; "+"attempted to call method '"+o+"'")}):(r.length&&(o=t.widget.extend.apply(null,[o].concat(r))),this.each(function(){var e=t.data(this,s);e?(e.option(o||{}),e._init&&e._init()):t.data(this,s,new i(o,this))})),l}},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(e,i){i=t(i||this.defaultElement||this)[0],this.element=t(i),this.uuid=s++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=t(),this.hoverable=t(),this.focusable=t(),i!==this&&(t.data(i,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===i&&this.destroy()}}),this.document=t(i.style?i.ownerDocument:i.document||i),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),this.options=t.widget.extend({},this.options,this._getCreateOptions(),e),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:t.noop,_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:t.noop,widget:function(){return this.element},option:function(e,i){var s,n,o,a=e;if(0===arguments.length)return t.widget.extend({},this.options);if("string"==typeof e)if(a={},s=e.split("."),e=s.shift(),s.length){for(n=a[e]=t.widget.extend({},this.options[e]),o=0;s.length-1>o;o++)n[s[o]]=n[s[o]]||{},n=n[s[o]];if(e=s.pop(),1===arguments.length)return void 0===n[e]?null:n[e];n[e]=i}else{if(1===arguments.length)return void 0===this.options[e]?null:this.options[e];a[e]=i}return this._setOptions(a),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return this.options[t]=e,"disabled"===t&&(this.widget().toggleClass(this.widgetFullName+"-disabled",!!e),e&&(this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus"))),this},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_on:function(e,i,s){var n,o=this;"boolean"!=typeof e&&(s=i,i=e,e=!1),s?(i=n=t(i),this.bindings=this.bindings.add(i)):(s=i,i=this.element,n=this.widget()),t.each(s,function(s,a){function r(){return e||o.options.disabled!==!0&&!t(this).hasClass("ui-state-disabled")?("string"==typeof a?o[a]:a).apply(o,arguments):void 0}"string"!=typeof a&&(r.guid=a.guid=a.guid||r.guid||t.guid++);var l=s.match(/^([\w:-]*)\s*(.*)$/),h=l[1]+o.eventNamespace,c=l[2];c?n.delegate(c,h,r):i.bind(h,r)})},_off:function(e,i){i=(i||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.unbind(i).undelegate(i),this.bindings=t(this.bindings.not(e).get()),this.focusable=t(this.focusable.not(e).get()),this.hoverable=t(this.hoverable.not(e).get())},_delay:function(t,e){function i(){return("string"==typeof t?s[t]:t).apply(s,arguments)}var s=this;return setTimeout(i,e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){t(e.currentTarget).addClass("ui-state-hover")},mouseleave:function(e){t(e.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){t(e.currentTarget).addClass("ui-state-focus")},focusout:function(e){t(e.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(e,i,s){var n,o,a=this.options[e];if(s=s||{},i=t.Event(i),i.type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),i.target=this.element[0],o=i.originalEvent)for(n in o)n in i||(i[n]=o[n]);return this.element.trigger(i,s),!(t.isFunction(a)&&a.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},t.each({show:"fadeIn",hide:"fadeOut"},function(e,i){t.Widget.prototype["_"+e]=function(s,n,o){"string"==typeof n&&(n={effect:n});var a,r=n?n===!0||"number"==typeof n?i:n.effect||i:e;n=n||{},"number"==typeof n&&(n={duration:n}),a=!t.isEmptyObject(n),n.complete=o,n.delay&&s.delay(n.delay),a&&t.effects&&t.effects.effect[r]?s[e](n):r!==e&&s[r]?s[r](n.duration,n.easing,o):s.queue(function(i){t(this)[e](),o&&o.call(s[0]),i()})}}),t.widget;var o=!1;t(document).mouseup(function(){o=!1}),t.widget("ui.mouse",{version:"1.11.4",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var e=this;this.element.bind("mousedown."+this.widgetName,function(t){return e._mouseDown(t)}).bind("click."+this.widgetName,function(i){return!0===t.data(i.target,e.widgetName+".preventClickEvent")?(t.removeData(i.target,e.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1):void 0}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(e){if(!o){this._mouseMoved=!1,this._mouseStarted&&this._mouseUp(e),this._mouseDownEvent=e;var i=this,s=1===e.which,n="string"==typeof this.options.cancel&&e.target.nodeName?t(e.target).closest(this.options.cancel).length:!1;return s&&!n&&this._mouseCapture(e)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){i.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(e)&&this._mouseDelayMet(e)&&(this._mouseStarted=this._mouseStart(e)!==!1,!this._mouseStarted)?(e.preventDefault(),!0):(!0===t.data(e.target,this.widgetName+".preventClickEvent")&&t.removeData(e.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(t){return i._mouseMove(t)},this._mouseUpDelegate=function(t){return i._mouseUp(t)},this.document.bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),e.preventDefault(),o=!0,!0)):!0}},_mouseMove:function(e){if(this._mouseMoved){if(t.ui.ie&&(!document.documentMode||9>document.documentMode)&&!e.button)return this._mouseUp(e);if(!e.which)return this._mouseUp(e)}return(e.which||e.button)&&(this._mouseMoved=!0),this._mouseStarted?(this._mouseDrag(e),e.preventDefault()):(this._mouseDistanceMet(e)&&this._mouseDelayMet(e)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,e)!==!1,this._mouseStarted?this._mouseDrag(e):this._mouseUp(e)),!this._mouseStarted)},_mouseUp:function(e){return this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,e.target===this._mouseDownEvent.target&&t.data(e.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(e)),o=!1,!1},_mouseDistanceMet:function(t){return Math.max(Math.abs(this._mouseDownEvent.pageX-t.pageX),Math.abs(this._mouseDownEvent.pageY-t.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}}),function(){function e(t,e,i){return[parseFloat(t[0])*(p.test(t[0])?e/100:1),parseFloat(t[1])*(p.test(t[1])?i/100:1)]}function i(e,i){return parseInt(t.css(e,i),10)||0}function s(e){var i=e[0];return 9===i.nodeType?{width:e.width(),height:e.height(),offset:{top:0,left:0}}:t.isWindow(i)?{width:e.width(),height:e.height(),offset:{top:e.scrollTop(),left:e.scrollLeft()}}:i.preventDefault?{width:0,height:0,offset:{top:i.pageY,left:i.pageX}}:{width:e.outerWidth(),height:e.outerHeight(),offset:e.offset()}}t.ui=t.ui||{};var n,o,a=Math.max,r=Math.abs,l=Math.round,h=/left|center|right/,c=/top|center|bottom/,u=/[\+\-]\d+(\.[\d]+)?%?/,d=/^\w+/,p=/%$/,f=t.fn.position;t.position={scrollbarWidth:function(){if(void 0!==n)return n;var e,i,s=t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),o=s.children()[0];return t("body").append(s),e=o.offsetWidth,s.css("overflow","scroll"),i=o.offsetWidth,e===i&&(i=s[0].clientWidth),s.remove(),n=e-i},getScrollInfo:function(e){var i=e.isWindow||e.isDocument?"":e.element.css("overflow-x"),s=e.isWindow||e.isDocument?"":e.element.css("overflow-y"),n="scroll"===i||"auto"===i&&e.width<e.element[0].scrollWidth,o="scroll"===s||"auto"===s&&e.height<e.element[0].scrollHeight;return{width:o?t.position.scrollbarWidth():0,height:n?t.position.scrollbarWidth():0}},getWithinInfo:function(e){var i=t(e||window),s=t.isWindow(i[0]),n=!!i[0]&&9===i[0].nodeType;return{element:i,isWindow:s,isDocument:n,offset:i.offset()||{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:s||n?i.width():i.outerWidth(),height:s||n?i.height():i.outerHeight()}}},t.fn.position=function(n){if(!n||!n.of)return f.apply(this,arguments);n=t.extend({},n);var p,g,m,_,v,b,y=t(n.of),w=t.position.getWithinInfo(n.within),k=t.position.getScrollInfo(w),x=(n.collision||"flip").split(" "),C={};return b=s(y),y[0].preventDefault&&(n.at="left top"),g=b.width,m=b.height,_=b.offset,v=t.extend({},_),t.each(["my","at"],function(){var t,e,i=(n[this]||"").split(" ");1===i.length&&(i=h.test(i[0])?i.concat(["center"]):c.test(i[0])?["center"].concat(i):["center","center"]),i[0]=h.test(i[0])?i[0]:"center",i[1]=c.test(i[1])?i[1]:"center",t=u.exec(i[0]),e=u.exec(i[1]),C[this]=[t?t[0]:0,e?e[0]:0],n[this]=[d.exec(i[0])[0],d.exec(i[1])[0]]}),1===x.length&&(x[1]=x[0]),"right"===n.at[0]?v.left+=g:"center"===n.at[0]&&(v.left+=g/2),"bottom"===n.at[1]?v.top+=m:"center"===n.at[1]&&(v.top+=m/2),p=e(C.at,g,m),v.left+=p[0],v.top+=p[1],this.each(function(){var s,h,c=t(this),u=c.outerWidth(),d=c.outerHeight(),f=i(this,"marginLeft"),b=i(this,"marginTop"),D=u+f+i(this,"marginRight")+k.width,T=d+b+i(this,"marginBottom")+k.height,I=t.extend({},v),M=e(C.my,c.outerWidth(),c.outerHeight());"right"===n.my[0]?I.left-=u:"center"===n.my[0]&&(I.left-=u/2),"bottom"===n.my[1]?I.top-=d:"center"===n.my[1]&&(I.top-=d/2),I.left+=M[0],I.top+=M[1],o||(I.left=l(I.left),I.top=l(I.top)),s={marginLeft:f,marginTop:b},t.each(["left","top"],function(e,i){t.ui.position[x[e]]&&t.ui.position[x[e]][i](I,{targetWidth:g,targetHeight:m,elemWidth:u,elemHeight:d,collisionPosition:s,collisionWidth:D,collisionHeight:T,offset:[p[0]+M[0],p[1]+M[1]],my:n.my,at:n.at,within:w,elem:c})}),n.using&&(h=function(t){var e=_.left-I.left,i=e+g-u,s=_.top-I.top,o=s+m-d,l={target:{element:y,left:_.left,top:_.top,width:g,height:m},element:{element:c,left:I.left,top:I.top,width:u,height:d},horizontal:0>i?"left":e>0?"right":"center",vertical:0>o?"top":s>0?"bottom":"middle"};u>g&&g>r(e+i)&&(l.horizontal="center"),d>m&&m>r(s+o)&&(l.vertical="middle"),l.important=a(r(e),r(i))>a(r(s),r(o))?"horizontal":"vertical",n.using.call(this,t,l)}),c.offset(t.extend(I,{using:h}))})},t.ui.position={fit:{left:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollLeft:s.offset.left,o=s.width,r=t.left-e.collisionPosition.marginLeft,l=n-r,h=r+e.collisionWidth-o-n;e.collisionWidth>o?l>0&&0>=h?(i=t.left+l+e.collisionWidth-o-n,t.left+=l-i):t.left=h>0&&0>=l?n:l>h?n+o-e.collisionWidth:n:l>0?t.left+=l:h>0?t.left-=h:t.left=a(t.left-r,t.left)},top:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollTop:s.offset.top,o=e.within.height,r=t.top-e.collisionPosition.marginTop,l=n-r,h=r+e.collisionHeight-o-n;e.collisionHeight>o?l>0&&0>=h?(i=t.top+l+e.collisionHeight-o-n,t.top+=l-i):t.top=h>0&&0>=l?n:l>h?n+o-e.collisionHeight:n:l>0?t.top+=l:h>0?t.top-=h:t.top=a(t.top-r,t.top)}},flip:{left:function(t,e){var i,s,n=e.within,o=n.offset.left+n.scrollLeft,a=n.width,l=n.isWindow?n.scrollLeft:n.offset.left,h=t.left-e.collisionPosition.marginLeft,c=h-l,u=h+e.collisionWidth-a-l,d="left"===e.my[0]?-e.elemWidth:"right"===e.my[0]?e.elemWidth:0,p="left"===e.at[0]?e.targetWidth:"right"===e.at[0]?-e.targetWidth:0,f=-2*e.offset[0];0>c?(i=t.left+d+p+f+e.collisionWidth-a-o,(0>i||r(c)>i)&&(t.left+=d+p+f)):u>0&&(s=t.left-e.collisionPosition.marginLeft+d+p+f-l,(s>0||u>r(s))&&(t.left+=d+p+f))},top:function(t,e){var i,s,n=e.within,o=n.offset.top+n.scrollTop,a=n.height,l=n.isWindow?n.scrollTop:n.offset.top,h=t.top-e.collisionPosition.marginTop,c=h-l,u=h+e.collisionHeight-a-l,d="top"===e.my[1],p=d?-e.elemHeight:"bottom"===e.my[1]?e.elemHeight:0,f="top"===e.at[1]?e.targetHeight:"bottom"===e.at[1]?-e.targetHeight:0,g=-2*e.offset[1];0>c?(s=t.top+p+f+g+e.collisionHeight-a-o,(0>s||r(c)>s)&&(t.top+=p+f+g)):u>0&&(i=t.top-e.collisionPosition.marginTop+p+f+g-l,(i>0||u>r(i))&&(t.top+=p+f+g))}},flipfit:{left:function(){t.ui.position.flip.left.apply(this,arguments),t.ui.position.fit.left.apply(this,arguments)},top:function(){t.ui.position.flip.top.apply(this,arguments),t.ui.position.fit.top.apply(this,arguments)}}},function(){var e,i,s,n,a,r=document.getElementsByTagName("body")[0],l=document.createElement("div");e=document.createElement(r?"div":"body"),s={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},r&&t.extend(s,{position:"absolute",left:"-1000px",top:"-1000px"});for(a in s)e.style[a]=s[a];e.appendChild(l),i=r||document.documentElement,i.insertBefore(e,i.firstChild),l.style.cssText="position: absolute; left: 10.7432222px;",n=t(l).offset().left,o=n>10&&11>n,e.innerHTML="",i.removeChild(e)}()}(),t.ui.position,t.widget("ui.draggable",t.ui.mouse,{version:"1.11.4",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"===this.options.helper&&this._setPositionRelative(),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._setHandleClassName(),this._mouseInit()},_setOption:function(t,e){this._super(t,e),"handle"===t&&(this._removeHandleClassName(),this._setHandleClassName())},_destroy:function(){return(this.helper||this.element).is(".ui-draggable-dragging")?(this.destroyOnClear=!0,void 0):(this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._removeHandleClassName(),this._mouseDestroy(),void 0)},_mouseCapture:function(e){var i=this.options;return this._blurActiveElement(e),this.helper||i.disabled||t(e.target).closest(".ui-resizable-handle").length>0?!1:(this.handle=this._getHandle(e),this.handle?(this._blockFrames(i.iframeFix===!0?"iframe":i.iframeFix),!0):!1)},_blockFrames:function(e){this.iframeBlocks=this.document.find(e).map(function(){var e=t(this);return t("<div>").css("position","absolute").appendTo(e.parent()).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).offset(e.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_blurActiveElement:function(e){var i=this.document[0];if(this.handleElement.is(e.target))try{i.activeElement&&"body"!==i.activeElement.nodeName.toLowerCase()&&t(i.activeElement).blur()}catch(s){}},_mouseStart:function(e){var i=this.options;return this.helper=this._createHelper(e),this.helper.addClass("ui-draggable-dragging"),this._cacheHelperProportions(),t.ui.ddmanager&&(t.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(!0),this.offsetParent=this.helper.offsetParent(),this.hasFixedAncestor=this.helper.parents().filter(function(){return"fixed"===t(this).css("position")}).length>0,this.positionAbs=this.element.offset(),this._refreshOffsets(e),this.originalPosition=this.position=this._generatePosition(e,!1),this.originalPageX=e.pageX,this.originalPageY=e.pageY,i.cursorAt&&this._adjustOffsetFromHelper(i.cursorAt),this._setContainment(),this._trigger("start",e)===!1?(this._clear(),!1):(this._cacheHelperProportions(),t.ui.ddmanager&&!i.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e),this._normalizeRightBottom(),this._mouseDrag(e,!0),t.ui.ddmanager&&t.ui.ddmanager.dragStart(this,e),!0)},_refreshOffsets:function(t){this.offset={top:this.positionAbs.top-this.margins.top,left:this.positionAbs.left-this.margins.left,scroll:!1,parent:this._getParentOffset(),relative:this._getRelativeOffset()},this.offset.click={left:t.pageX-this.offset.left,top:t.pageY-this.offset.top}},_mouseDrag:function(e,i){if(this.hasFixedAncestor&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(e,!0),this.positionAbs=this._convertPositionTo("absolute"),!i){var s=this._uiHash();if(this._trigger("drag",e,s)===!1)return this._mouseUp({}),!1;this.position=s.position}return this.helper[0].style.left=this.position.left+"px",this.helper[0].style.top=this.position.top+"px",t.ui.ddmanager&&t.ui.ddmanager.drag(this,e),!1},_mouseStop:function(e){var i=this,s=!1;return t.ui.ddmanager&&!this.options.dropBehaviour&&(s=t.ui.ddmanager.drop(this,e)),this.dropped&&(s=this.dropped,this.dropped=!1),"invalid"===this.options.revert&&!s||"valid"===this.options.revert&&s||this.options.revert===!0||t.isFunction(this.options.revert)&&this.options.revert.call(this.element,s)?t(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){i._trigger("stop",e)!==!1&&i._clear()}):this._trigger("stop",e)!==!1&&this._clear(),!1},_mouseUp:function(e){return this._unblockFrames(),t.ui.ddmanager&&t.ui.ddmanager.dragStop(this,e),this.handleElement.is(e.target)&&this.element.focus(),t.ui.mouse.prototype._mouseUp.call(this,e)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this},_getHandle:function(e){return this.options.handle?!!t(e.target).closest(this.element.find(this.options.handle)).length:!0},_setHandleClassName:function(){this.handleElement=this.options.handle?this.element.find(this.options.handle):this.element,this.handleElement.addClass("ui-draggable-handle")},_removeHandleClassName:function(){this.handleElement.removeClass("ui-draggable-handle")},_createHelper:function(e){var i=this.options,s=t.isFunction(i.helper),n=s?t(i.helper.apply(this.element[0],[e])):"clone"===i.helper?this.element.clone().removeAttr("id"):this.element;return n.parents("body").length||n.appendTo("parent"===i.appendTo?this.element[0].parentNode:i.appendTo),s&&n[0]===this.element[0]&&this._setPositionRelative(),n[0]===this.element[0]||/(fixed|absolute)/.test(n.css("position"))||n.css("position","absolute"),n},_setPositionRelative:function(){/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative")},_adjustOffsetFromHelper:function(e){"string"==typeof e&&(e=e.split(" ")),t.isArray(e)&&(e={left:+e[0],top:+e[1]||0}),"left"in e&&(this.offset.click.left=e.left+this.margins.left),"right"in e&&(this.offset.click.left=this.helperProportions.width-e.right+this.margins.left),"top"in e&&(this.offset.click.top=e.top+this.margins.top),"bottom"in e&&(this.offset.click.top=this.helperProportions.height-e.bottom+this.margins.top)},_isRootNode:function(t){return/(html|body)/i.test(t.tagName)||t===this.document[0]},_getParentOffset:function(){var e=this.offsetParent.offset(),i=this.document[0];return"absolute"===this.cssPosition&&this.scrollParent[0]!==i&&t.contains(this.scrollParent[0],this.offsetParent[0])&&(e.left+=this.scrollParent.scrollLeft(),e.top+=this.scrollParent.scrollTop()),this._isRootNode(this.offsetParent[0])&&(e={top:0,left:0}),{top:e.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:e.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"!==this.cssPosition)return{top:0,left:0};var t=this.element.position(),e=this._isRootNode(this.scrollParent[0]);return{top:t.top-(parseInt(this.helper.css("top"),10)||0)+(e?0:this.scrollParent.scrollTop()),left:t.left-(parseInt(this.helper.css("left"),10)||0)+(e?0:this.scrollParent.scrollLeft())}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var e,i,s,n=this.options,o=this.document[0];return this.relativeContainer=null,n.containment?"window"===n.containment?(this.containment=[t(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,t(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,t(window).scrollLeft()+t(window).width()-this.helperProportions.width-this.margins.left,t(window).scrollTop()+(t(window).height()||o.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],void 0):"document"===n.containment?(this.containment=[0,0,t(o).width()-this.helperProportions.width-this.margins.left,(t(o).height()||o.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],void 0):n.containment.constructor===Array?(this.containment=n.containment,void 0):("parent"===n.containment&&(n.containment=this.helper[0].parentNode),i=t(n.containment),s=i[0],s&&(e=/(scroll|auto)/.test(i.css("overflow")),this.containment=[(parseInt(i.css("borderLeftWidth"),10)||0)+(parseInt(i.css("paddingLeft"),10)||0),(parseInt(i.css("borderTopWidth"),10)||0)+(parseInt(i.css("paddingTop"),10)||0),(e?Math.max(s.scrollWidth,s.offsetWidth):s.offsetWidth)-(parseInt(i.css("borderRightWidth"),10)||0)-(parseInt(i.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(e?Math.max(s.scrollHeight,s.offsetHeight):s.offsetHeight)-(parseInt(i.css("borderBottomWidth"),10)||0)-(parseInt(i.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relativeContainer=i),void 0):(this.containment=null,void 0)},_convertPositionTo:function(t,e){e||(e=this.position);var i="absolute"===t?1:-1,s=this._isRootNode(this.scrollParent[0]);return{top:e.top+this.offset.relative.top*i+this.offset.parent.top*i-("fixed"===this.cssPosition?-this.offset.scroll.top:s?0:this.offset.scroll.top)*i,left:e.left+this.offset.relative.left*i+this.offset.parent.left*i-("fixed"===this.cssPosition?-this.offset.scroll.left:s?0:this.offset.scroll.left)*i}},_generatePosition:function(t,e){var i,s,n,o,a=this.options,r=this._isRootNode(this.scrollParent[0]),l=t.pageX,h=t.pageY;return r&&this.offset.scroll||(this.offset.scroll={top:this.scrollParent.scrollTop(),left:this.scrollParent.scrollLeft()}),e&&(this.containment&&(this.relativeContainer?(s=this.relativeContainer.offset(),i=[this.containment[0]+s.left,this.containment[1]+s.top,this.containment[2]+s.left,this.containment[3]+s.top]):i=this.containment,t.pageX-this.offset.click.left<i[0]&&(l=i[0]+this.offset.click.left),t.pageY-this.offset.click.top<i[1]&&(h=i[1]+this.offset.click.top),t.pageX-this.offset.click.left>i[2]&&(l=i[2]+this.offset.click.left),t.pageY-this.offset.click.top>i[3]&&(h=i[3]+this.offset.click.top)),a.grid&&(n=a.grid[1]?this.originalPageY+Math.round((h-this.originalPageY)/a.grid[1])*a.grid[1]:this.originalPageY,h=i?n-this.offset.click.top>=i[1]||n-this.offset.click.top>i[3]?n:n-this.offset.click.top>=i[1]?n-a.grid[1]:n+a.grid[1]:n,o=a.grid[0]?this.originalPageX+Math.round((l-this.originalPageX)/a.grid[0])*a.grid[0]:this.originalPageX,l=i?o-this.offset.click.left>=i[0]||o-this.offset.click.left>i[2]?o:o-this.offset.click.left>=i[0]?o-a.grid[0]:o+a.grid[0]:o),"y"===a.axis&&(l=this.originalPageX),"x"===a.axis&&(h=this.originalPageY)),{top:h-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.offset.scroll.top:r?0:this.offset.scroll.top),left:l-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.offset.scroll.left:r?0:this.offset.scroll.left)}},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1,this.destroyOnClear&&this.destroy()},_normalizeRightBottom:function(){"y"!==this.options.axis&&"auto"!==this.helper.css("right")&&(this.helper.width(this.helper.width()),this.helper.css("right","auto")),"x"!==this.options.axis&&"auto"!==this.helper.css("bottom")&&(this.helper.height(this.helper.height()),this.helper.css("bottom","auto"))},_trigger:function(e,i,s){return s=s||this._uiHash(),t.ui.plugin.call(this,e,[i,s,this],!0),/^(drag|start|stop)/.test(e)&&(this.positionAbs=this._convertPositionTo("absolute"),s.offset=this.positionAbs),t.Widget.prototype._trigger.call(this,e,i,s)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),t.ui.plugin.add("draggable","connectToSortable",{start:function(e,i,s){var n=t.extend({},i,{item:s.element});s.sortables=[],t(s.options.connectToSortable).each(function(){var i=t(this).sortable("instance");i&&!i.options.disabled&&(s.sortables.push(i),i.refreshPositions(),i._trigger("activate",e,n))})},stop:function(e,i,s){var n=t.extend({},i,{item:s.element});s.cancelHelperRemoval=!1,t.each(s.sortables,function(){var t=this;t.isOver?(t.isOver=0,s.cancelHelperRemoval=!0,t.cancelHelperRemoval=!1,t._storedCSS={position:t.placeholder.css("position"),top:t.placeholder.css("top"),left:t.placeholder.css("left")},t._mouseStop(e),t.options.helper=t.options._helper):(t.cancelHelperRemoval=!0,t._trigger("deactivate",e,n))})},drag:function(e,i,s){t.each(s.sortables,function(){var n=!1,o=this;o.positionAbs=s.positionAbs,o.helperProportions=s.helperProportions,o.offset.click=s.offset.click,o._intersectsWith(o.containerCache)&&(n=!0,t.each(s.sortables,function(){return this.positionAbs=s.positionAbs,this.helperProportions=s.helperProportions,this.offset.click=s.offset.click,this!==o&&this._intersectsWith(this.containerCache)&&t.contains(o.element[0],this.element[0])&&(n=!1),n
})),n?(o.isOver||(o.isOver=1,s._parent=i.helper.parent(),o.currentItem=i.helper.appendTo(o.element).data("ui-sortable-item",!0),o.options._helper=o.options.helper,o.options.helper=function(){return i.helper[0]},e.target=o.currentItem[0],o._mouseCapture(e,!0),o._mouseStart(e,!0,!0),o.offset.click.top=s.offset.click.top,o.offset.click.left=s.offset.click.left,o.offset.parent.left-=s.offset.parent.left-o.offset.parent.left,o.offset.parent.top-=s.offset.parent.top-o.offset.parent.top,s._trigger("toSortable",e),s.dropped=o.element,t.each(s.sortables,function(){this.refreshPositions()}),s.currentItem=s.element,o.fromOutside=s),o.currentItem&&(o._mouseDrag(e),i.position=o.position)):o.isOver&&(o.isOver=0,o.cancelHelperRemoval=!0,o.options._revert=o.options.revert,o.options.revert=!1,o._trigger("out",e,o._uiHash(o)),o._mouseStop(e,!0),o.options.revert=o.options._revert,o.options.helper=o.options._helper,o.placeholder&&o.placeholder.remove(),i.helper.appendTo(s._parent),s._refreshOffsets(e),i.position=s._generatePosition(e,!0),s._trigger("fromSortable",e),s.dropped=!1,t.each(s.sortables,function(){this.refreshPositions()}))})}}),t.ui.plugin.add("draggable","cursor",{start:function(e,i,s){var n=t("body"),o=s.options;n.css("cursor")&&(o._cursor=n.css("cursor")),n.css("cursor",o.cursor)},stop:function(e,i,s){var n=s.options;n._cursor&&t("body").css("cursor",n._cursor)}}),t.ui.plugin.add("draggable","opacity",{start:function(e,i,s){var n=t(i.helper),o=s.options;n.css("opacity")&&(o._opacity=n.css("opacity")),n.css("opacity",o.opacity)},stop:function(e,i,s){var n=s.options;n._opacity&&t(i.helper).css("opacity",n._opacity)}}),t.ui.plugin.add("draggable","scroll",{start:function(t,e,i){i.scrollParentNotHidden||(i.scrollParentNotHidden=i.helper.scrollParent(!1)),i.scrollParentNotHidden[0]!==i.document[0]&&"HTML"!==i.scrollParentNotHidden[0].tagName&&(i.overflowOffset=i.scrollParentNotHidden.offset())},drag:function(e,i,s){var n=s.options,o=!1,a=s.scrollParentNotHidden[0],r=s.document[0];a!==r&&"HTML"!==a.tagName?(n.axis&&"x"===n.axis||(s.overflowOffset.top+a.offsetHeight-e.pageY<n.scrollSensitivity?a.scrollTop=o=a.scrollTop+n.scrollSpeed:e.pageY-s.overflowOffset.top<n.scrollSensitivity&&(a.scrollTop=o=a.scrollTop-n.scrollSpeed)),n.axis&&"y"===n.axis||(s.overflowOffset.left+a.offsetWidth-e.pageX<n.scrollSensitivity?a.scrollLeft=o=a.scrollLeft+n.scrollSpeed:e.pageX-s.overflowOffset.left<n.scrollSensitivity&&(a.scrollLeft=o=a.scrollLeft-n.scrollSpeed))):(n.axis&&"x"===n.axis||(e.pageY-t(r).scrollTop()<n.scrollSensitivity?o=t(r).scrollTop(t(r).scrollTop()-n.scrollSpeed):t(window).height()-(e.pageY-t(r).scrollTop())<n.scrollSensitivity&&(o=t(r).scrollTop(t(r).scrollTop()+n.scrollSpeed))),n.axis&&"y"===n.axis||(e.pageX-t(r).scrollLeft()<n.scrollSensitivity?o=t(r).scrollLeft(t(r).scrollLeft()-n.scrollSpeed):t(window).width()-(e.pageX-t(r).scrollLeft())<n.scrollSensitivity&&(o=t(r).scrollLeft(t(r).scrollLeft()+n.scrollSpeed)))),o!==!1&&t.ui.ddmanager&&!n.dropBehaviour&&t.ui.ddmanager.prepareOffsets(s,e)}}),t.ui.plugin.add("draggable","snap",{start:function(e,i,s){var n=s.options;s.snapElements=[],t(n.snap.constructor!==String?n.snap.items||":data(ui-draggable)":n.snap).each(function(){var e=t(this),i=e.offset();this!==s.element[0]&&s.snapElements.push({item:this,width:e.outerWidth(),height:e.outerHeight(),top:i.top,left:i.left})})},drag:function(e,i,s){var n,o,a,r,l,h,c,u,d,p,f=s.options,g=f.snapTolerance,m=i.offset.left,_=m+s.helperProportions.width,v=i.offset.top,b=v+s.helperProportions.height;for(d=s.snapElements.length-1;d>=0;d--)l=s.snapElements[d].left-s.margins.left,h=l+s.snapElements[d].width,c=s.snapElements[d].top-s.margins.top,u=c+s.snapElements[d].height,l-g>_||m>h+g||c-g>b||v>u+g||!t.contains(s.snapElements[d].item.ownerDocument,s.snapElements[d].item)?(s.snapElements[d].snapping&&s.options.snap.release&&s.options.snap.release.call(s.element,e,t.extend(s._uiHash(),{snapItem:s.snapElements[d].item})),s.snapElements[d].snapping=!1):("inner"!==f.snapMode&&(n=g>=Math.abs(c-b),o=g>=Math.abs(u-v),a=g>=Math.abs(l-_),r=g>=Math.abs(h-m),n&&(i.position.top=s._convertPositionTo("relative",{top:c-s.helperProportions.height,left:0}).top),o&&(i.position.top=s._convertPositionTo("relative",{top:u,left:0}).top),a&&(i.position.left=s._convertPositionTo("relative",{top:0,left:l-s.helperProportions.width}).left),r&&(i.position.left=s._convertPositionTo("relative",{top:0,left:h}).left)),p=n||o||a||r,"outer"!==f.snapMode&&(n=g>=Math.abs(c-v),o=g>=Math.abs(u-b),a=g>=Math.abs(l-m),r=g>=Math.abs(h-_),n&&(i.position.top=s._convertPositionTo("relative",{top:c,left:0}).top),o&&(i.position.top=s._convertPositionTo("relative",{top:u-s.helperProportions.height,left:0}).top),a&&(i.position.left=s._convertPositionTo("relative",{top:0,left:l}).left),r&&(i.position.left=s._convertPositionTo("relative",{top:0,left:h-s.helperProportions.width}).left)),!s.snapElements[d].snapping&&(n||o||a||r||p)&&s.options.snap.snap&&s.options.snap.snap.call(s.element,e,t.extend(s._uiHash(),{snapItem:s.snapElements[d].item})),s.snapElements[d].snapping=n||o||a||r||p)}}),t.ui.plugin.add("draggable","stack",{start:function(e,i,s){var n,o=s.options,a=t.makeArray(t(o.stack)).sort(function(e,i){return(parseInt(t(e).css("zIndex"),10)||0)-(parseInt(t(i).css("zIndex"),10)||0)});a.length&&(n=parseInt(t(a[0]).css("zIndex"),10)||0,t(a).each(function(e){t(this).css("zIndex",n+e)}),this.css("zIndex",n+a.length))}}),t.ui.plugin.add("draggable","zIndex",{start:function(e,i,s){var n=t(i.helper),o=s.options;n.css("zIndex")&&(o._zIndex=n.css("zIndex")),n.css("zIndex",o.zIndex)},stop:function(e,i,s){var n=s.options;n._zIndex&&t(i.helper).css("zIndex",n._zIndex)}}),t.ui.draggable,t.widget("ui.resizable",t.ui.mouse,{version:"1.11.4",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_num:function(t){return parseInt(t,10)||0},_isNumber:function(t){return!isNaN(parseInt(t,10))},_hasScroll:function(e,i){if("hidden"===t(e).css("overflow"))return!1;var s=i&&"left"===i?"scrollLeft":"scrollTop",n=!1;return e[s]>0?!0:(e[s]=1,n=e[s]>0,e[s]=0,n)},_create:function(){var e,i,s,n,o,a=this,r=this.options;if(this.element.addClass("ui-resizable"),t.extend(this,{_aspectRatio:!!r.aspectRatio,aspectRatio:r.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:r.helper||r.ghost||r.animate?r.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i)&&(this.element.wrap(t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.resizable("instance")),this.elementIsWrapper=!0,this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")}),this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0}),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css({margin:this.originalElement.css("margin")}),this._proportionallyResize()),this.handles=r.handles||(t(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se"),this._handles=t(),this.handles.constructor===String)for("all"===this.handles&&(this.handles="n,e,s,w,se,sw,ne,nw"),e=this.handles.split(","),this.handles={},i=0;e.length>i;i++)s=t.trim(e[i]),o="ui-resizable-"+s,n=t("<div class='ui-resizable-handle "+o+"'></div>"),n.css({zIndex:r.zIndex}),"se"===s&&n.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),this.handles[s]=".ui-resizable-"+s,this.element.append(n);this._renderAxis=function(e){var i,s,n,o;e=e||this.element;for(i in this.handles)this.handles[i].constructor===String?this.handles[i]=this.element.children(this.handles[i]).first().show():(this.handles[i].jquery||this.handles[i].nodeType)&&(this.handles[i]=t(this.handles[i]),this._on(this.handles[i],{mousedown:a._mouseDown})),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i)&&(s=t(this.handles[i],this.element),o=/sw|ne|nw|se|n|s/.test(i)?s.outerHeight():s.outerWidth(),n=["padding",/ne|nw|n/.test(i)?"Top":/se|sw|s/.test(i)?"Bottom":/^e$/.test(i)?"Right":"Left"].join(""),e.css(n,o),this._proportionallyResize()),this._handles=this._handles.add(this.handles[i])},this._renderAxis(this.element),this._handles=this._handles.add(this.element.find(".ui-resizable-handle")),this._handles.disableSelection(),this._handles.mouseover(function(){a.resizing||(this.className&&(n=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),a.axis=n&&n[1]?n[1]:"se")}),r.autoHide&&(this._handles.hide(),t(this.element).addClass("ui-resizable-autohide").mouseenter(function(){r.disabled||(t(this).removeClass("ui-resizable-autohide"),a._handles.show())}).mouseleave(function(){r.disabled||a.resizing||(t(this).addClass("ui-resizable-autohide"),a._handles.hide())})),this._mouseInit()},_destroy:function(){this._mouseDestroy();var e,i=function(e){t(e).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};return this.elementIsWrapper&&(i(this.element),e=this.element,this.originalElement.css({position:e.css("position"),width:e.outerWidth(),height:e.outerHeight(),top:e.css("top"),left:e.css("left")}).insertAfter(e),e.remove()),this.originalElement.css("resize",this.originalResizeStyle),i(this.originalElement),this},_mouseCapture:function(e){var i,s,n=!1;for(i in this.handles)s=t(this.handles[i])[0],(s===e.target||t.contains(s,e.target))&&(n=!0);return!this.options.disabled&&n},_mouseStart:function(e){var i,s,n,o=this.options,a=this.element;return this.resizing=!0,this._renderProxy(),i=this._num(this.helper.css("left")),s=this._num(this.helper.css("top")),o.containment&&(i+=t(o.containment).scrollLeft()||0,s+=t(o.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:i,top:s},this.size=this._helper?{width:this.helper.width(),height:this.helper.height()}:{width:a.width(),height:a.height()},this.originalSize=this._helper?{width:a.outerWidth(),height:a.outerHeight()}:{width:a.width(),height:a.height()},this.sizeDiff={width:a.outerWidth()-a.width(),height:a.outerHeight()-a.height()},this.originalPosition={left:i,top:s},this.originalMousePosition={left:e.pageX,top:e.pageY},this.aspectRatio="number"==typeof o.aspectRatio?o.aspectRatio:this.originalSize.width/this.originalSize.height||1,n=t(".ui-resizable-"+this.axis).css("cursor"),t("body").css("cursor","auto"===n?this.axis+"-resize":n),a.addClass("ui-resizable-resizing"),this._propagate("start",e),!0},_mouseDrag:function(e){var i,s,n=this.originalMousePosition,o=this.axis,a=e.pageX-n.left||0,r=e.pageY-n.top||0,l=this._change[o];return this._updatePrevProperties(),l?(i=l.apply(this,[e,a,r]),this._updateVirtualBoundaries(e.shiftKey),(this._aspectRatio||e.shiftKey)&&(i=this._updateRatio(i,e)),i=this._respectSize(i,e),this._updateCache(i),this._propagate("resize",e),s=this._applyChanges(),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),t.isEmptyObject(s)||(this._updatePrevProperties(),this._trigger("resize",e,this.ui()),this._applyChanges()),!1):!1},_mouseStop:function(e){this.resizing=!1;var i,s,n,o,a,r,l,h=this.options,c=this;return this._helper&&(i=this._proportionallyResizeElements,s=i.length&&/textarea/i.test(i[0].nodeName),n=s&&this._hasScroll(i[0],"left")?0:c.sizeDiff.height,o=s?0:c.sizeDiff.width,a={width:c.helper.width()-o,height:c.helper.height()-n},r=parseInt(c.element.css("left"),10)+(c.position.left-c.originalPosition.left)||null,l=parseInt(c.element.css("top"),10)+(c.position.top-c.originalPosition.top)||null,h.animate||this.element.css(t.extend(a,{top:l,left:r})),c.helper.height(c.size.height),c.helper.width(c.size.width),this._helper&&!h.animate&&this._proportionallyResize()),t("body").css("cursor","auto"),this.element.removeClass("ui-resizable-resizing"),this._propagate("stop",e),this._helper&&this.helper.remove(),!1},_updatePrevProperties:function(){this.prevPosition={top:this.position.top,left:this.position.left},this.prevSize={width:this.size.width,height:this.size.height}},_applyChanges:function(){var t={};return this.position.top!==this.prevPosition.top&&(t.top=this.position.top+"px"),this.position.left!==this.prevPosition.left&&(t.left=this.position.left+"px"),this.size.width!==this.prevSize.width&&(t.width=this.size.width+"px"),this.size.height!==this.prevSize.height&&(t.height=this.size.height+"px"),this.helper.css(t),t},_updateVirtualBoundaries:function(t){var e,i,s,n,o,a=this.options;o={minWidth:this._isNumber(a.minWidth)?a.minWidth:0,maxWidth:this._isNumber(a.maxWidth)?a.maxWidth:1/0,minHeight:this._isNumber(a.minHeight)?a.minHeight:0,maxHeight:this._isNumber(a.maxHeight)?a.maxHeight:1/0},(this._aspectRatio||t)&&(e=o.minHeight*this.aspectRatio,s=o.minWidth/this.aspectRatio,i=o.maxHeight*this.aspectRatio,n=o.maxWidth/this.aspectRatio,e>o.minWidth&&(o.minWidth=e),s>o.minHeight&&(o.minHeight=s),o.maxWidth>i&&(o.maxWidth=i),o.maxHeight>n&&(o.maxHeight=n)),this._vBoundaries=o},_updateCache:function(t){this.offset=this.helper.offset(),this._isNumber(t.left)&&(this.position.left=t.left),this._isNumber(t.top)&&(this.position.top=t.top),this._isNumber(t.height)&&(this.size.height=t.height),this._isNumber(t.width)&&(this.size.width=t.width)},_updateRatio:function(t){var e=this.position,i=this.size,s=this.axis;return this._isNumber(t.height)?t.width=t.height*this.aspectRatio:this._isNumber(t.width)&&(t.height=t.width/this.aspectRatio),"sw"===s&&(t.left=e.left+(i.width-t.width),t.top=null),"nw"===s&&(t.top=e.top+(i.height-t.height),t.left=e.left+(i.width-t.width)),t},_respectSize:function(t){var e=this._vBoundaries,i=this.axis,s=this._isNumber(t.width)&&e.maxWidth&&e.maxWidth<t.width,n=this._isNumber(t.height)&&e.maxHeight&&e.maxHeight<t.height,o=this._isNumber(t.width)&&e.minWidth&&e.minWidth>t.width,a=this._isNumber(t.height)&&e.minHeight&&e.minHeight>t.height,r=this.originalPosition.left+this.originalSize.width,l=this.position.top+this.size.height,h=/sw|nw|w/.test(i),c=/nw|ne|n/.test(i);return o&&(t.width=e.minWidth),a&&(t.height=e.minHeight),s&&(t.width=e.maxWidth),n&&(t.height=e.maxHeight),o&&h&&(t.left=r-e.minWidth),s&&h&&(t.left=r-e.maxWidth),a&&c&&(t.top=l-e.minHeight),n&&c&&(t.top=l-e.maxHeight),t.width||t.height||t.left||!t.top?t.width||t.height||t.top||!t.left||(t.left=null):t.top=null,t},_getPaddingPlusBorderDimensions:function(t){for(var e=0,i=[],s=[t.css("borderTopWidth"),t.css("borderRightWidth"),t.css("borderBottomWidth"),t.css("borderLeftWidth")],n=[t.css("paddingTop"),t.css("paddingRight"),t.css("paddingBottom"),t.css("paddingLeft")];4>e;e++)i[e]=parseInt(s[e],10)||0,i[e]+=parseInt(n[e],10)||0;return{height:i[0]+i[2],width:i[1]+i[3]}},_proportionallyResize:function(){if(this._proportionallyResizeElements.length)for(var t,e=0,i=this.helper||this.element;this._proportionallyResizeElements.length>e;e++)t=this._proportionallyResizeElements[e],this.outerDimensions||(this.outerDimensions=this._getPaddingPlusBorderDimensions(t)),t.css({height:i.height()-this.outerDimensions.height||0,width:i.width()-this.outerDimensions.width||0})},_renderProxy:function(){var e=this.element,i=this.options;this.elementOffset=e.offset(),this._helper?(this.helper=this.helper||t("<div style='overflow:hidden;'></div>"),this.helper.addClass(this._helper).css({width:this.element.outerWidth()-1,height:this.element.outerHeight()-1,position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++i.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element},_change:{e:function(t,e){return{width:this.originalSize.width+e}},w:function(t,e){var i=this.originalSize,s=this.originalPosition;return{left:s.left+e,width:i.width-e}},n:function(t,e,i){var s=this.originalSize,n=this.originalPosition;return{top:n.top+i,height:s.height-i}},s:function(t,e,i){return{height:this.originalSize.height+i}},se:function(e,i,s){return t.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[e,i,s]))},sw:function(e,i,s){return t.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[e,i,s]))},ne:function(e,i,s){return t.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[e,i,s]))},nw:function(e,i,s){return t.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[e,i,s]))}},_propagate:function(e,i){t.ui.plugin.call(this,e,[i,this.ui()]),"resize"!==e&&this._trigger(e,i,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),t.ui.plugin.add("resizable","animate",{stop:function(e){var i=t(this).resizable("instance"),s=i.options,n=i._proportionallyResizeElements,o=n.length&&/textarea/i.test(n[0].nodeName),a=o&&i._hasScroll(n[0],"left")?0:i.sizeDiff.height,r=o?0:i.sizeDiff.width,l={width:i.size.width-r,height:i.size.height-a},h=parseInt(i.element.css("left"),10)+(i.position.left-i.originalPosition.left)||null,c=parseInt(i.element.css("top"),10)+(i.position.top-i.originalPosition.top)||null;i.element.animate(t.extend(l,c&&h?{top:c,left:h}:{}),{duration:s.animateDuration,easing:s.animateEasing,step:function(){var s={width:parseInt(i.element.css("width"),10),height:parseInt(i.element.css("height"),10),top:parseInt(i.element.css("top"),10),left:parseInt(i.element.css("left"),10)};n&&n.length&&t(n[0]).css({width:s.width,height:s.height}),i._updateCache(s),i._propagate("resize",e)}})}}),t.ui.plugin.add("resizable","containment",{start:function(){var e,i,s,n,o,a,r,l=t(this).resizable("instance"),h=l.options,c=l.element,u=h.containment,d=u instanceof t?u.get(0):/parent/.test(u)?c.parent().get(0):u;d&&(l.containerElement=t(d),/document/.test(u)||u===document?(l.containerOffset={left:0,top:0},l.containerPosition={left:0,top:0},l.parentData={element:t(document),left:0,top:0,width:t(document).width(),height:t(document).height()||document.body.parentNode.scrollHeight}):(e=t(d),i=[],t(["Top","Right","Left","Bottom"]).each(function(t,s){i[t]=l._num(e.css("padding"+s))}),l.containerOffset=e.offset(),l.containerPosition=e.position(),l.containerSize={height:e.innerHeight()-i[3],width:e.innerWidth()-i[1]},s=l.containerOffset,n=l.containerSize.height,o=l.containerSize.width,a=l._hasScroll(d,"left")?d.scrollWidth:o,r=l._hasScroll(d)?d.scrollHeight:n,l.parentData={element:d,left:s.left,top:s.top,width:a,height:r}))},resize:function(e){var i,s,n,o,a=t(this).resizable("instance"),r=a.options,l=a.containerOffset,h=a.position,c=a._aspectRatio||e.shiftKey,u={top:0,left:0},d=a.containerElement,p=!0;d[0]!==document&&/static/.test(d.css("position"))&&(u=l),h.left<(a._helper?l.left:0)&&(a.size.width=a.size.width+(a._helper?a.position.left-l.left:a.position.left-u.left),c&&(a.size.height=a.size.width/a.aspectRatio,p=!1),a.position.left=r.helper?l.left:0),h.top<(a._helper?l.top:0)&&(a.size.height=a.size.height+(a._helper?a.position.top-l.top:a.position.top),c&&(a.size.width=a.size.height*a.aspectRatio,p=!1),a.position.top=a._helper?l.top:0),n=a.containerElement.get(0)===a.element.parent().get(0),o=/relative|absolute/.test(a.containerElement.css("position")),n&&o?(a.offset.left=a.parentData.left+a.position.left,a.offset.top=a.parentData.top+a.position.top):(a.offset.left=a.element.offset().left,a.offset.top=a.element.offset().top),i=Math.abs(a.sizeDiff.width+(a._helper?a.offset.left-u.left:a.offset.left-l.left)),s=Math.abs(a.sizeDiff.height+(a._helper?a.offset.top-u.top:a.offset.top-l.top)),i+a.size.width>=a.parentData.width&&(a.size.width=a.parentData.width-i,c&&(a.size.height=a.size.width/a.aspectRatio,p=!1)),s+a.size.height>=a.parentData.height&&(a.size.height=a.parentData.height-s,c&&(a.size.width=a.size.height*a.aspectRatio,p=!1)),p||(a.position.left=a.prevPosition.left,a.position.top=a.prevPosition.top,a.size.width=a.prevSize.width,a.size.height=a.prevSize.height)},stop:function(){var e=t(this).resizable("instance"),i=e.options,s=e.containerOffset,n=e.containerPosition,o=e.containerElement,a=t(e.helper),r=a.offset(),l=a.outerWidth()-e.sizeDiff.width,h=a.outerHeight()-e.sizeDiff.height;e._helper&&!i.animate&&/relative/.test(o.css("position"))&&t(this).css({left:r.left-n.left-s.left,width:l,height:h}),e._helper&&!i.animate&&/static/.test(o.css("position"))&&t(this).css({left:r.left-n.left-s.left,width:l,height:h})}}),t.ui.plugin.add("resizable","alsoResize",{start:function(){var e=t(this).resizable("instance"),i=e.options;t(i.alsoResize).each(function(){var e=t(this);e.data("ui-resizable-alsoresize",{width:parseInt(e.width(),10),height:parseInt(e.height(),10),left:parseInt(e.css("left"),10),top:parseInt(e.css("top"),10)})})},resize:function(e,i){var s=t(this).resizable("instance"),n=s.options,o=s.originalSize,a=s.originalPosition,r={height:s.size.height-o.height||0,width:s.size.width-o.width||0,top:s.position.top-a.top||0,left:s.position.left-a.left||0};t(n.alsoResize).each(function(){var e=t(this),s=t(this).data("ui-resizable-alsoresize"),n={},o=e.parents(i.originalElement[0]).length?["width","height"]:["width","height","top","left"];t.each(o,function(t,e){var i=(s[e]||0)+(r[e]||0);i&&i>=0&&(n[e]=i||null)}),e.css(n)})},stop:function(){t(this).removeData("resizable-alsoresize")}}),t.ui.plugin.add("resizable","ghost",{start:function(){var e=t(this).resizable("instance"),i=e.options,s=e.size;e.ghost=e.originalElement.clone(),e.ghost.css({opacity:.25,display:"block",position:"relative",height:s.height,width:s.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass("string"==typeof i.ghost?i.ghost:""),e.ghost.appendTo(e.helper)},resize:function(){var e=t(this).resizable("instance");e.ghost&&e.ghost.css({position:"relative",height:e.size.height,width:e.size.width})},stop:function(){var e=t(this).resizable("instance");e.ghost&&e.helper&&e.helper.get(0).removeChild(e.ghost.get(0))}}),t.ui.plugin.add("resizable","grid",{resize:function(){var e,i=t(this).resizable("instance"),s=i.options,n=i.size,o=i.originalSize,a=i.originalPosition,r=i.axis,l="number"==typeof s.grid?[s.grid,s.grid]:s.grid,h=l[0]||1,c=l[1]||1,u=Math.round((n.width-o.width)/h)*h,d=Math.round((n.height-o.height)/c)*c,p=o.width+u,f=o.height+d,g=s.maxWidth&&p>s.maxWidth,m=s.maxHeight&&f>s.maxHeight,_=s.minWidth&&s.minWidth>p,v=s.minHeight&&s.minHeight>f;s.grid=l,_&&(p+=h),v&&(f+=c),g&&(p-=h),m&&(f-=c),/^(se|s|e)$/.test(r)?(i.size.width=p,i.size.height=f):/^(ne)$/.test(r)?(i.size.width=p,i.size.height=f,i.position.top=a.top-d):/^(sw)$/.test(r)?(i.size.width=p,i.size.height=f,i.position.left=a.left-u):((0>=f-c||0>=p-h)&&(e=i._getPaddingPlusBorderDimensions(this)),f-c>0?(i.size.height=f,i.position.top=a.top-d):(f=c-e.height,i.size.height=f,i.position.top=a.top+o.height-f),p-h>0?(i.size.width=p,i.position.left=a.left-u):(p=h-e.width,i.size.width=p,i.position.left=a.left+o.width-p))}}),t.ui.resizable;var a,r="ui-button ui-widget ui-state-default ui-corner-all",l="ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",h=function(){var e=t(this);setTimeout(function(){e.find(":ui-button").button("refresh")},1)},c=function(e){var i=e.name,s=e.form,n=t([]);return i&&(i=i.replace(/'/g,"\\'"),n=s?t(s).find("[name='"+i+"'][type=radio]"):t("[name='"+i+"'][type=radio]",e.ownerDocument).filter(function(){return!this.form})),n};t.widget("ui.button",{version:"1.11.4",defaultElement:"<button>",options:{disabled:null,text:!0,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset"+this.eventNamespace).bind("reset"+this.eventNamespace,h),"boolean"!=typeof this.options.disabled?this.options.disabled=!!this.element.prop("disabled"):this.element.prop("disabled",this.options.disabled),this._determineButtonType(),this.hasTitle=!!this.buttonElement.attr("title");var e=this,i=this.options,s="checkbox"===this.type||"radio"===this.type,n=s?"":"ui-state-active";null===i.label&&(i.label="input"===this.type?this.buttonElement.val():this.buttonElement.html()),this._hoverable(this.buttonElement),this.buttonElement.addClass(r).attr("role","button").bind("mouseenter"+this.eventNamespace,function(){i.disabled||this===a&&t(this).addClass("ui-state-active")}).bind("mouseleave"+this.eventNamespace,function(){i.disabled||t(this).removeClass(n)}).bind("click"+this.eventNamespace,function(t){i.disabled&&(t.preventDefault(),t.stopImmediatePropagation())}),this._on({focus:function(){this.buttonElement.addClass("ui-state-focus")},blur:function(){this.buttonElement.removeClass("ui-state-focus")}}),s&&this.element.bind("change"+this.eventNamespace,function(){e.refresh()}),"checkbox"===this.type?this.buttonElement.bind("click"+this.eventNamespace,function(){return i.disabled?!1:void 0}):"radio"===this.type?this.buttonElement.bind("click"+this.eventNamespace,function(){if(i.disabled)return!1;t(this).addClass("ui-state-active"),e.buttonElement.attr("aria-pressed","true");var s=e.element[0];c(s).not(s).map(function(){return t(this).button("widget")[0]}).removeClass("ui-state-active").attr("aria-pressed","false")}):(this.buttonElement.bind("mousedown"+this.eventNamespace,function(){return i.disabled?!1:(t(this).addClass("ui-state-active"),a=this,e.document.one("mouseup",function(){a=null}),void 0)}).bind("mouseup"+this.eventNamespace,function(){return i.disabled?!1:(t(this).removeClass("ui-state-active"),void 0)}).bind("keydown"+this.eventNamespace,function(e){return i.disabled?!1:((e.keyCode===t.ui.keyCode.SPACE||e.keyCode===t.ui.keyCode.ENTER)&&t(this).addClass("ui-state-active"),void 0)}).bind("keyup"+this.eventNamespace+" blur"+this.eventNamespace,function(){t(this).removeClass("ui-state-active")}),this.buttonElement.is("a")&&this.buttonElement.keyup(function(e){e.keyCode===t.ui.keyCode.SPACE&&t(this).click()})),this._setOption("disabled",i.disabled),this._resetButton()},_determineButtonType:function(){var t,e,i;this.type=this.element.is("[type=checkbox]")?"checkbox":this.element.is("[type=radio]")?"radio":this.element.is("input")?"input":"button","checkbox"===this.type||"radio"===this.type?(t=this.element.parents().last(),e="label[for='"+this.element.attr("id")+"']",this.buttonElement=t.find(e),this.buttonElement.length||(t=t.length?t.siblings():this.element.siblings(),this.buttonElement=t.filter(e),this.buttonElement.length||(this.buttonElement=t.find(e))),this.element.addClass("ui-helper-hidden-accessible"),i=this.element.is(":checked"),i&&this.buttonElement.addClass("ui-state-active"),this.buttonElement.prop("aria-pressed",i)):this.buttonElement=this.element},widget:function(){return this.buttonElement},_destroy:function(){this.element.removeClass("ui-helper-hidden-accessible"),this.buttonElement.removeClass(r+" ui-state-active "+l).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()),this.hasTitle||this.buttonElement.removeAttr("title")},_setOption:function(t,e){return this._super(t,e),"disabled"===t?(this.widget().toggleClass("ui-state-disabled",!!e),this.element.prop("disabled",!!e),e&&("checkbox"===this.type||"radio"===this.type?this.buttonElement.removeClass("ui-state-focus"):this.buttonElement.removeClass("ui-state-focus ui-state-active")),void 0):(this._resetButton(),void 0)},refresh:function(){var e=this.element.is("input, button")?this.element.is(":disabled"):this.element.hasClass("ui-button-disabled");e!==this.options.disabled&&this._setOption("disabled",e),"radio"===this.type?c(this.element[0]).each(function(){t(this).is(":checked")?t(this).button("widget").addClass("ui-state-active").attr("aria-pressed","true"):t(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")}):"checkbox"===this.type&&(this.element.is(":checked")?this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true"):this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false"))},_resetButton:function(){if("input"===this.type)return this.options.label&&this.element.val(this.options.label),void 0;var e=this.buttonElement.removeClass(l),i=t("<span></span>",this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(e.empty()).text(),s=this.options.icons,n=s.primary&&s.secondary,o=[];s.primary||s.secondary?(this.options.text&&o.push("ui-button-text-icon"+(n?"s":s.primary?"-primary":"-secondary")),s.primary&&e.prepend("<span class='ui-button-icon-primary ui-icon "+s.primary+"'></span>"),s.secondary&&e.append("<span class='ui-button-icon-secondary ui-icon "+s.secondary+"'></span>"),this.options.text||(o.push(n?"ui-button-icons-only":"ui-button-icon-only"),this.hasTitle||e.attr("title",t.trim(i)))):o.push("ui-button-text-only"),e.addClass(o.join(" "))}}),t.widget("ui.buttonset",{version:"1.11.4",options:{items:"button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"},_create:function(){this.element.addClass("ui-buttonset")},_init:function(){this.refresh()},_setOption:function(t,e){"disabled"===t&&this.buttons.button("option",t,e),this._super(t,e)},refresh:function(){var e="rtl"===this.element.css("direction"),i=this.element.find(this.options.items),s=i.filter(":ui-button");i.not(":ui-button").button(),s.button("refresh"),this.buttons=i.map(function(){return t(this).button("widget")[0]}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(e?"ui-corner-right":"ui-corner-left").end().filter(":last").addClass(e?"ui-corner-left":"ui-corner-right").end().end()},_destroy:function(){this.element.removeClass("ui-buttonset"),this.buttons.map(function(){return t(this).button("widget")[0]}).removeClass("ui-corner-left ui-corner-right").end().button("destroy")}}),t.ui.button,t.widget("ui.dialog",{version:"1.11.4",options:{appendTo:"body",autoOpen:!0,buttons:[],closeOnEscape:!0,closeText:"Close",dialogClass:"",draggable:!0,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",of:window,collision:"fit",using:function(e){var i=t(this).css(e).offset().top;0>i&&t(this).css("top",e.top-i)}},resizable:!0,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},sizeRelatedOptions:{buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},resizableRelatedOptions:{maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height},this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)},this.originalTitle=this.element.attr("title"),this.options.title=this.options.title||this.originalTitle,this._createWrapper(),this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog),this._createTitlebar(),this._createButtonPane(),this.options.draggable&&t.fn.draggable&&this._makeDraggable(),this.options.resizable&&t.fn.resizable&&this._makeResizable(),this._isOpen=!1,this._trackFocus()
},_init:function(){this.options.autoOpen&&this.open()},_appendTo:function(){var e=this.options.appendTo;return e&&(e.jquery||e.nodeType)?t(e):this.document.find(e||"body").eq(0)},_destroy:function(){var t,e=this.originalPosition;this._untrackInstance(),this._destroyOverlay(),this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(),this.uiDialog.stop(!0,!0).remove(),this.originalTitle&&this.element.attr("title",this.originalTitle),t=e.parent.children().eq(e.index),t.length&&t[0]!==this.element[0]?t.before(this.element):e.parent.append(this.element)},widget:function(){return this.uiDialog},disable:t.noop,enable:t.noop,close:function(e){var i,s=this;if(this._isOpen&&this._trigger("beforeClose",e)!==!1){if(this._isOpen=!1,this._focusedElement=null,this._destroyOverlay(),this._untrackInstance(),!this.opener.filter(":focusable").focus().length)try{i=this.document[0].activeElement,i&&"body"!==i.nodeName.toLowerCase()&&t(i).blur()}catch(n){}this._hide(this.uiDialog,this.options.hide,function(){s._trigger("close",e)})}},isOpen:function(){return this._isOpen},moveToTop:function(){this._moveToTop()},_moveToTop:function(e,i){var s=!1,n=this.uiDialog.siblings(".ui-front:visible").map(function(){return+t(this).css("z-index")}).get(),o=Math.max.apply(null,n);return o>=+this.uiDialog.css("z-index")&&(this.uiDialog.css("z-index",o+1),s=!0),s&&!i&&this._trigger("focus",e),s},open:function(){var e=this;return this._isOpen?(this._moveToTop()&&this._focusTabbable(),void 0):(this._isOpen=!0,this.opener=t(this.document[0].activeElement),this._size(),this._position(),this._createOverlay(),this._moveToTop(null,!0),this.overlay&&this.overlay.css("z-index",this.uiDialog.css("z-index")-1),this._show(this.uiDialog,this.options.show,function(){e._focusTabbable(),e._trigger("focus")}),this._makeFocusTarget(),this._trigger("open"),void 0)},_focusTabbable:function(){var t=this._focusedElement;t||(t=this.element.find("[autofocus]")),t.length||(t=this.element.find(":tabbable")),t.length||(t=this.uiDialogButtonPane.find(":tabbable")),t.length||(t=this.uiDialogTitlebarClose.filter(":tabbable")),t.length||(t=this.uiDialog),t.eq(0).focus()},_keepFocus:function(e){function i(){var e=this.document[0].activeElement,i=this.uiDialog[0]===e||t.contains(this.uiDialog[0],e);i||this._focusTabbable()}e.preventDefault(),i.call(this),this._delay(i)},_createWrapper:function(){this.uiDialog=t("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front "+this.options.dialogClass).hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo()),this._on(this.uiDialog,{keydown:function(e){if(this.options.closeOnEscape&&!e.isDefaultPrevented()&&e.keyCode&&e.keyCode===t.ui.keyCode.ESCAPE)return e.preventDefault(),this.close(e),void 0;if(e.keyCode===t.ui.keyCode.TAB&&!e.isDefaultPrevented()){var i=this.uiDialog.find(":tabbable"),s=i.filter(":first"),n=i.filter(":last");e.target!==n[0]&&e.target!==this.uiDialog[0]||e.shiftKey?e.target!==s[0]&&e.target!==this.uiDialog[0]||!e.shiftKey||(this._delay(function(){n.focus()}),e.preventDefault()):(this._delay(function(){s.focus()}),e.preventDefault())}},mousedown:function(t){this._moveToTop(t)&&this._focusTabbable()}}),this.element.find("[aria-describedby]").length||this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})},_createTitlebar:function(){var e;this.uiDialogTitlebar=t("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog),this._on(this.uiDialogTitlebar,{mousedown:function(e){t(e.target).closest(".ui-dialog-titlebar-close")||this.uiDialog.focus()}}),this.uiDialogTitlebarClose=t("<button type='button'></button>").button({label:this.options.closeText,icons:{primary:"ui-icon-closethick"},text:!1}).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar),this._on(this.uiDialogTitlebarClose,{click:function(t){t.preventDefault(),this.close(t)}}),e=t("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar),this._title(e),this.uiDialog.attr({"aria-labelledby":e.attr("id")})},_title:function(t){this.options.title||t.html("&#160;"),t.text(this.options.title)},_createButtonPane:function(){this.uiDialogButtonPane=t("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),this.uiButtonSet=t("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane),this._createButtons()},_createButtons:function(){var e=this,i=this.options.buttons;return this.uiDialogButtonPane.remove(),this.uiButtonSet.empty(),t.isEmptyObject(i)||t.isArray(i)&&!i.length?(this.uiDialog.removeClass("ui-dialog-buttons"),void 0):(t.each(i,function(i,s){var n,o;s=t.isFunction(s)?{click:s,text:i}:s,s=t.extend({type:"button"},s),n=s.click,s.click=function(){n.apply(e.element[0],arguments)},o={icons:s.icons,text:s.showText},delete s.icons,delete s.showText,t("<button></button>",s).button(o).appendTo(e.uiButtonSet)}),this.uiDialog.addClass("ui-dialog-buttons"),this.uiDialogButtonPane.appendTo(this.uiDialog),void 0)},_makeDraggable:function(){function e(t){return{position:t.position,offset:t.offset}}var i=this,s=this.options;this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(s,n){t(this).addClass("ui-dialog-dragging"),i._blockFrames(),i._trigger("dragStart",s,e(n))},drag:function(t,s){i._trigger("drag",t,e(s))},stop:function(n,o){var a=o.offset.left-i.document.scrollLeft(),r=o.offset.top-i.document.scrollTop();s.position={my:"left top",at:"left"+(a>=0?"+":"")+a+" "+"top"+(r>=0?"+":"")+r,of:i.window},t(this).removeClass("ui-dialog-dragging"),i._unblockFrames(),i._trigger("dragStop",n,e(o))}})},_makeResizable:function(){function e(t){return{originalPosition:t.originalPosition,originalSize:t.originalSize,position:t.position,size:t.size}}var i=this,s=this.options,n=s.resizable,o=this.uiDialog.css("position"),a="string"==typeof n?n:"n,e,s,w,se,sw,ne,nw";this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:s.maxWidth,maxHeight:s.maxHeight,minWidth:s.minWidth,minHeight:this._minHeight(),handles:a,start:function(s,n){t(this).addClass("ui-dialog-resizing"),i._blockFrames(),i._trigger("resizeStart",s,e(n))},resize:function(t,s){i._trigger("resize",t,e(s))},stop:function(n,o){var a=i.uiDialog.offset(),r=a.left-i.document.scrollLeft(),l=a.top-i.document.scrollTop();s.height=i.uiDialog.height(),s.width=i.uiDialog.width(),s.position={my:"left top",at:"left"+(r>=0?"+":"")+r+" "+"top"+(l>=0?"+":"")+l,of:i.window},t(this).removeClass("ui-dialog-resizing"),i._unblockFrames(),i._trigger("resizeStop",n,e(o))}}).css("position",o)},_trackFocus:function(){this._on(this.widget(),{focusin:function(e){this._makeFocusTarget(),this._focusedElement=t(e.target)}})},_makeFocusTarget:function(){this._untrackInstance(),this._trackingInstances().unshift(this)},_untrackInstance:function(){var e=this._trackingInstances(),i=t.inArray(this,e);-1!==i&&e.splice(i,1)},_trackingInstances:function(){var t=this.document.data("ui-dialog-instances");return t||(t=[],this.document.data("ui-dialog-instances",t)),t},_minHeight:function(){var t=this.options;return"auto"===t.height?t.minHeight:Math.min(t.minHeight,t.height)},_position:function(){var t=this.uiDialog.is(":visible");t||this.uiDialog.show(),this.uiDialog.position(this.options.position),t||this.uiDialog.hide()},_setOptions:function(e){var i=this,s=!1,n={};t.each(e,function(t,e){i._setOption(t,e),t in i.sizeRelatedOptions&&(s=!0),t in i.resizableRelatedOptions&&(n[t]=e)}),s&&(this._size(),this._position()),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option",n)},_setOption:function(t,e){var i,s,n=this.uiDialog;"dialogClass"===t&&n.removeClass(this.options.dialogClass).addClass(e),"disabled"!==t&&(this._super(t,e),"appendTo"===t&&this.uiDialog.appendTo(this._appendTo()),"buttons"===t&&this._createButtons(),"closeText"===t&&this.uiDialogTitlebarClose.button({label:""+e}),"draggable"===t&&(i=n.is(":data(ui-draggable)"),i&&!e&&n.draggable("destroy"),!i&&e&&this._makeDraggable()),"position"===t&&this._position(),"resizable"===t&&(s=n.is(":data(ui-resizable)"),s&&!e&&n.resizable("destroy"),s&&"string"==typeof e&&n.resizable("option","handles",e),s||e===!1||this._makeResizable()),"title"===t&&this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))},_size:function(){var t,e,i,s=this.options;this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0}),s.minWidth>s.width&&(s.width=s.minWidth),t=this.uiDialog.css({height:"auto",width:s.width}).outerHeight(),e=Math.max(0,s.minHeight-t),i="number"==typeof s.maxHeight?Math.max(0,s.maxHeight-t):"none","auto"===s.height?this.element.css({minHeight:e,maxHeight:i,height:"auto"}):this.element.height(Math.max(0,s.height-t)),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map(function(){var e=t(this);return t("<div>").css({position:"absolute",width:e.outerWidth(),height:e.outerHeight()}).appendTo(e.parent()).offset(e.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_allowInteraction:function(e){return t(e.target).closest(".ui-dialog").length?!0:!!t(e.target).closest(".ui-datepicker").length},_createOverlay:function(){if(this.options.modal){var e=!0;this._delay(function(){e=!1}),this.document.data("ui-dialog-overlays")||this._on(this.document,{focusin:function(t){e||this._allowInteraction(t)||(t.preventDefault(),this._trackingInstances()[0]._focusTabbable())}}),this.overlay=t("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()),this._on(this.overlay,{mousedown:"_keepFocus"}),this.document.data("ui-dialog-overlays",(this.document.data("ui-dialog-overlays")||0)+1)}},_destroyOverlay:function(){if(this.options.modal&&this.overlay){var t=this.document.data("ui-dialog-overlays")-1;t?this.document.data("ui-dialog-overlays",t):this.document.unbind("focusin").removeData("ui-dialog-overlays"),this.overlay.remove(),this.overlay=null}}})});
/*!
 * Bootstrap v3.3.4 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.4",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a(f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.4",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")&&(c.prop("checked")&&this.$element.hasClass("active")?a=!1:b.find(".active").removeClass("active")),a&&c.prop("checked",!this.$element.hasClass("active")).trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active"));a&&this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),c.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.4",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));return a>this.$items.length-1||0>a?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.4",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){b&&3===b.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=c(d),f={relatedTarget:this};e.hasClass("open")&&(e.trigger(b=a.Event("hide.bs.dropdown",f)),b.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger("hidden.bs.dropdown",f)))}))}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.4",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger("shown.bs.dropdown",h)}return!1}},g.prototype.keydown=function(b){if(/(38|40|27|32)/.test(b.which)&&!/input|textarea/i.test(b.target.tagName)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var e=c(d),g=e.hasClass("open");if(!g&&27!=b.which||g&&27==b.which)return 27==b.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find('[role="menu"]'+h+', [role="listbox"]'+h);if(i.length){var j=i.index(b.target);38==b.which&&j>0&&j--,40==b.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="menu"]',g.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="listbox"]',g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.4",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in").attr("aria-hidden",!1),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a('<div class="modal-backdrop '+e+'" />').appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.init("tooltip",a,b)};c.VERSION="3.3.4",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(this.options.viewport.selector||this.options.viewport),this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c&&c.$tip&&c.$tip.is(":visible")?void(c.hoverState="in"):(c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.options.container?a(this.options.container):this.$element.parent(),p=this.getPosition(o);h="bottom"==h&&k.bottom+m>p.bottom?"top":"top"==h&&k.top-m<p.top?"bottom":"right"==h&&k.right+l>p.width?"left":"left"==h&&k.left-l<p.left?"right":h,f.removeClass(n).addClass(h)}var q=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(q,h);var r=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",r).emulateTransitionEnd(c.TRANSITION_DURATION):r()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top=b.top+g,b.left=b.left+h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);return this.$element.trigger(g),g.isDefaultPrevented()?void 0:(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=d?{top:0,left:0}:b.offset(),g={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},h=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,g,h,f)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.width&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type)})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.4",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.4",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.4",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){
var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.4",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return c>e?"top":!1;if("bottom"==this.affixed)return null!=c?e+this.unpin<=f.top?!1:"bottom":a-d>=e+g?!1:"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&c>=e?"top":null!=d&&i+j>=a-d?"bottom":!1},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=a(document.body).height();"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);

if (window.impJSloaded) {window.impJSloaded();}
