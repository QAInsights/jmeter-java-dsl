(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{364:function(t,e,n){"use strict";n.d(e,"d",(function(){return i})),n.d(e,"a",(function(){return s})),n.d(e,"i",(function(){return a})),n.d(e,"f",(function(){return u})),n.d(e,"g",(function(){return c})),n.d(e,"h",(function(){return l})),n.d(e,"b",(function(){return p})),n.d(e,"e",(function(){return h})),n.d(e,"k",(function(){return f})),n.d(e,"l",(function(){return d})),n.d(e,"c",(function(){return v})),n.d(e,"j",(function(){return m}));n(20),n(38),n(365),n(124),n(212),n(209),n(70),n(48),n(6),n(72),n(37),n(73),n(47);var i=/#.*$/,r=/\.(md|html)$/,s=/\/$/,a=/^[a-z]+:/i;function o(t){return decodeURI(t).replace(i,"").replace(r,"")}function u(t){return a.test(t)}function c(t){return/^mailto:/.test(t)}function l(t){return/^tel:/.test(t)}function p(t){if(u(t))return t;var e=t.match(i),n=e?e[0]:"",r=o(t);return s.test(r)?t:r+".html"+n}function h(t,e){var n=decodeURIComponent(t.hash),r=function(t){var e=t.match(i);if(e)return e[0]}(e);return(!r||n===r)&&o(t.path)===o(e)}function f(t,e,n){if(u(e))return{type:"external",path:e};n&&(e=function(t,e,n){var i=t.charAt(0);if("/"===i)return t;if("?"===i||"#"===i)return e+t;var r=e.split("/");n&&r[r.length-1]||r.pop();for(var s=t.replace(/^\//,"").split("/"),a=0;a<s.length;a++){var o=s[a];".."===o?r.pop():"."!==o&&r.push(o)}""!==r[0]&&r.unshift("");return r.join("/")}(e,n));for(var i=o(e),r=0;r<t.length;r++)if(o(t[r].regularPath)===i)return Object.assign({},t[r],{type:"page",path:p(t[r].path)});return console.error('[vuepress] No matching page found for sidebar item "'.concat(e,'"')),{}}function d(t,e,n,i){var r=n.pages,s=n.themeConfig,a=i&&s.locales&&s.locales[i]||s;if("auto"===(t.frontmatter.sidebar||a.sidebar||s.sidebar))return g(t);var o=a.sidebar||s.sidebar;if(o){var u=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(var n in e)if(0===(i=t,/(\.html|\/)$/.test(i)?i:i+"/").indexOf(encodeURI(n)))return{base:n,config:e[n]};var i;return{}}(e,o),c=u.base,l=u.config;return"auto"===l?g(t):l?l.map((function(t){return function t(e,n,i){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;if("string"==typeof e)return f(n,e,i);if(Array.isArray(e))return Object.assign(f(n,e[0],i),{title:e[1]});var s=e.children||[];return 0===s.length&&e.path?Object.assign(f(n,e.path,i),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,initialOpenGroupIndex:e.initialOpenGroupIndex,children:s.map((function(e){return t(e,n,i,r+1)})),collapsable:!1!==e.collapsable}}(t,r,c)})):[]}return[]}function g(t){var e=v(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map((function(e){return{type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}}))}]}function v(t){var e;return(t=t.map((function(t){return Object.assign({},t)}))).forEach((function(t){2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)})),t.filter((function(t){return 2===t.level}))}function m(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},365:function(t,e,n){"use strict";var i=n(12),r=n(133),s=n(9),a=n(71),o=n(16),u=n(29),c=n(49),l=n(134),p=n(135);r("match",(function(t,e,n){return[function(e){var n=u(this),r=null==e?void 0:c(e,t);return r?i(r,e,n):new RegExp(e)[t](o(n))},function(t){var i=s(this),r=o(t),u=n(e,i,r);if(u.done)return u.value;if(!i.global)return p(i,r);var c=i.unicode;i.lastIndex=0;for(var h,f=[],d=0;null!==(h=p(i,r));){var g=o(h[0]);f[d]=g,""===g&&(i.lastIndex=l(r,a(i.lastIndex),c)),d++}return 0===d?null:f}]}))},368:function(t,e,n){"use strict";var i=n(1),r=n(210).trim;i({target:"String",proto:!0,forced:n(399)("trim")},{trim:function(){return r(this)}})},369:function(t,e,n){var i=n(8),r=n(0),s=n(2),a=n(99),o=n(132),u=n(22),c=n(13).f,l=n(50).f,p=n(33),h=n(130),f=n(16),d=n(207),g=n(127),v=n(17),m=n(3),b=n(10),k=n(39).enforce,_=n(213),x=n(5),y=n(208),C=n(214),L=x("match"),w=r.RegExp,$=w.prototype,O=r.SyntaxError,S=s(d),I=s($.exec),E=s("".charAt),j=s("".replace),P=s("".indexOf),R=s("".slice),D=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,A=/a/g,T=/a/g,N=new w(A)!==A,U=g.MISSED_STICKY,G=g.UNSUPPORTED_Y,H=i&&(!N||U||y||C||m((function(){return T[L]=!1,w(A)!=A||w(T)==T||"/a/i"!=w(A,"i")})));if(a("RegExp",H)){for(var q=function(t,e){var n,i,r,s,a,c,l=p($,this),d=h(t),g=void 0===e,v=[],m=t;if(!l&&d&&g&&t.constructor===q)return t;if((d||p($,t))&&(t=t.source,g&&(e="flags"in m?m.flags:S(m))),t=void 0===t?"":f(t),e=void 0===e?"":f(e),m=t,y&&"dotAll"in A&&(i=!!e&&P(e,"s")>-1)&&(e=j(e,/s/g,"")),n=e,U&&"sticky"in A&&(r=!!e&&P(e,"y")>-1)&&G&&(e=j(e,/y/g,"")),C&&(t=(s=function(t){for(var e,n=t.length,i=0,r="",s=[],a={},o=!1,u=!1,c=0,l="";i<=n;i++){if("\\"===(e=E(t,i)))e+=E(t,++i);else if("]"===e)o=!1;else if(!o)switch(!0){case"["===e:o=!0;break;case"("===e:I(D,R(t,i+1))&&(i+=2,u=!0),r+=e,c++;continue;case">"===e&&u:if(""===l||b(a,l))throw new O("Invalid capture group name");a[l]=!0,s[s.length]=[l,c],u=!1,l="";continue}u?l+=e:r+=e}return[r,s]}(t))[0],v=s[1]),a=o(w(t,e),l?this:$,q),(i||r||v.length)&&(c=k(a),i&&(c.dotAll=!0,c.raw=q(function(t){for(var e,n=t.length,i=0,r="",s=!1;i<=n;i++)"\\"!==(e=E(t,i))?s||"."!==e?("["===e?s=!0:"]"===e&&(s=!1),r+=e):r+="[\\s\\S]":r+=e+E(t,++i);return r}(t),n)),r&&(c.sticky=!0),v.length&&(c.groups=v)),t!==m)try{u(a,"source",""===m?"(?:)":m)}catch(t){}return a},M=function(t){t in q||c(q,t,{configurable:!0,get:function(){return w[t]},set:function(e){w[t]=e}})},W=l(w),Y=0;W.length>Y;)M(W[Y++]);$.constructor=q,q.prototype=$,v(r,"RegExp",q)}_("RegExp")},370:function(t,e,n){var i=n(0),r=n(8),s=n(208),a=n(30),o=n(13).f,u=n(39).get,c=RegExp.prototype,l=i.TypeError;r&&s&&o(c,"dotAll",{configurable:!0,get:function(){if(this!==c){if("RegExp"===a(this))return!!u(this).dotAll;throw l("Incompatible receiver, RegExp required")}}})},371:function(t,e,n){var i=n(0),r=n(8),s=n(127).MISSED_STICKY,a=n(30),o=n(13).f,u=n(39).get,c=RegExp.prototype,l=i.TypeError;r&&s&&o(c,"sticky",{configurable:!0,get:function(){if(this!==c){if("RegExp"===a(this))return!!u(this).sticky;throw l("Incompatible receiver, RegExp required")}}})},372:function(t,e,n){"use strict";var i=n(2),r=n(98).PROPER,s=n(17),a=n(9),o=n(33),u=n(16),c=n(3),l=n(207),p=RegExp.prototype,h=p.toString,f=i(l),d=c((function(){return"/a/b"!=h.call({source:"a",flags:"b"})})),g=r&&"toString"!=h.name;(d||g)&&s(RegExp.prototype,"toString",(function(){var t=a(this),e=u(t.source),n=t.flags;return"/"+e+"/"+u(void 0===n&&o(p,t)&&!("flags"in p)?f(t):n)}),{unsafe:!0})},373:function(t,e,n){},374:function(t,e,n){},375:function(t,e,n){},376:function(t,e,n){},377:function(t,e,n){},379:function(t,e){t.exports=function(t){return null==t}},380:function(t,e,n){},381:function(t,e,n){},382:function(t,e,n){},383:function(t,e,n){},384:function(t,e,n){},385:function(t,e,n){},389:function(t,e,n){"use strict";n.r(e);n(125),n(6);var i=n(364),r={name:"SidebarGroup",components:{DropdownTransition:n(391).a},props:["item","open","collapsable","depth"],beforeCreate:function(){this.$options.components.SidebarLinks=n(389).default},methods:{isActive:i.e}},s=(n(411),n(11)),a=Object(s.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"sidebar-group",class:[{collapsable:t.collapsable,"is-sub-group":0!==t.depth},"depth-"+t.depth]},[t.item.path?n("RouterLink",{staticClass:"sidebar-heading clickable",class:{open:t.open,active:t.isActive(t.$route,t.item.path)},attrs:{to:t.item.path},nativeOn:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]):n("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),n("DropdownTransition",[t.open||!t.collapsable?n("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{items:t.item.children,"sidebar-depth":t.item.sidebarDepth,"initial-open-group-index":t.item.initialOpenGroupIndex,depth:t.depth+1}}):t._e()],1)],1)}),[],!1,null,null,null).exports;n(412),n(20),n(124),n(70);function o(t,e,n,i,r){var s={props:{to:e,activeClass:"",exactActiveClass:""},class:{active:i,"sidebar-link":!0}};return r>2&&(s.style={"padding-left":r+"rem"}),t("RouterLink",s,n)}function u(t,e,n,r,s){var a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;return!e||a>s?null:t("ul",{class:"sidebar-sub-headers"},e.map((function(e){var c=Object(i.e)(r,n+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[o(t,n+"#"+e.slug,e.title,c,e.level-1),u(t,e.children,n,r,s,a+1)])})))}var c={functional:!0,props:["item","sidebarDepth"],render:function(t,e){var n=e.parent,r=n.$page,s=(n.$site,n.$route),a=n.$themeConfig,c=n.$themeLocaleConfig,l=e.props,p=l.item,h=l.sidebarDepth,f=Object(i.e)(s,p.path),d="auto"===p.type?f||p.children.some((function(t){return Object(i.e)(s,p.basePath+"#"+t.slug)})):f,g="external"===p.type?function(t,e,n){return t("a",{attrs:{href:e,target:"_blank",rel:"noopener noreferrer"},class:{"sidebar-link":!0}},[n,t("OutboundLink")])}(t,p.path,p.title||p.path):o(t,p.path,p.title||p.path,d),v=[r.frontmatter.sidebarDepth,h,c.sidebarDepth,a.sidebarDepth,1].find((function(t){return void 0!==t})),m=c.displayAllHeaders||a.displayAllHeaders;return"auto"===p.type?[g,u(t,p.children,p.basePath,s,v)]:(d||m)&&p.headers&&!i.d.test(p.path)?[g,u(t,Object(i.c)(p.headers),p.path,s,v)]:g}};n(413);function l(t,e){if("group"===e.type){var n=e.path&&Object(i.e)(t,e.path),r=e.children.some((function(e){return"group"===e.type?l(t,e):"page"===e.type&&Object(i.e)(t,e.path)}));return n||r}return!1}var p={name:"SidebarLinks",components:{SidebarGroup:a,SidebarLink:Object(s.a)(c,void 0,void 0,!1,null,null,null).exports},props:["items","depth","sidebarDepth","initialOpenGroupIndex"],data:function(){return{openGroupIndex:this.initialOpenGroupIndex||0}},watch:{$route:function(){this.refreshIndex()}},created:function(){this.refreshIndex()},methods:{refreshIndex:function(){var t=function(t,e){for(var n=0;n<e.length;n++){var i=e[n];if(l(t,i))return n}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup:function(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive:function(t){return Object(i.e)(this.$route,t.regularPath)}}},h=Object(s.a)(p,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.items.length?n("ul",{staticClass:"sidebar-links"},t._l(t.items,(function(e,i){return n("li",{key:i},["group"===e.type?n("SidebarGroup",{attrs:{item:e,open:i===t.openGroupIndex,collapsable:e.collapsable||e.collapsible,depth:t.depth},on:{toggle:function(e){return t.toggleGroup(i)}}}):n("SidebarLink",{attrs:{"sidebar-depth":t.sidebarDepth,item:e}})],1)})),0):t._e()}),[],!1,null,null,null);e.default=h.exports},390:function(t,e,n){"use strict";var i=n(68),r=(n(126),n(70),n(20),n(38),n(125),n(6),n(100),n(124),n(365),n(369),n(370),n(371),n(372),n(366)),s=n(391),a=n(218),o=n.n(a),u={name:"DropdownLink",components:{NavLink:r.a,DropdownTransition:s.a},props:{item:{required:!0}},data:function(){return{open:!1}},computed:{dropdownAriaLabel:function(){return this.item.ariaLabel||this.item.text}},watch:{$route:function(){this.open=!1}},methods:{setOpen:function(t){this.open=t},isLastItemOfArray:function(t,e){return o()(e)===t},handleDropdown:function(){0===event.detail&&this.setOpen(!this.open)}}},c=(n(404),n(11)),l=Object(c.a)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[n("button",{staticClass:"dropdown-title",attrs:{type:"button","aria-label":t.dropdownAriaLabel},on:{click:t.handleDropdown}},[n("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),n("span",{staticClass:"arrow down"})]),t._v(" "),n("button",{staticClass:"mobile-dropdown-title",attrs:{type:"button","aria-label":t.dropdownAriaLabel},on:{click:function(e){return t.setOpen(!t.open)}}},[n("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),n("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),n("DropdownTransition",[n("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,(function(e,i){return n("li",{key:e.link||i,staticClass:"dropdown-item"},["links"===e.type?n("h4",[t._v("\n          "+t._s(e.text)+"\n        ")]):t._e(),t._v(" "),"links"===e.type?n("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(e.items,(function(i){return n("li",{key:i.link,staticClass:"dropdown-subitem"},[n("NavLink",{attrs:{item:i},on:{focusout:function(n){t.isLastItemOfArray(i,e.items)&&t.isLastItemOfArray(e,t.item.items)&&t.setOpen(!1)}}})],1)})),0):n("NavLink",{attrs:{item:e},on:{focusout:function(n){t.isLastItemOfArray(e,t.item.items)&&t.setOpen(!1)}}})],1)})),0)])],1)}),[],!1,null,null,null).exports,p=n(364),h={name:"NavLinks",components:{NavLink:r.a,DropdownLink:l},computed:{userNav:function(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav:function(){var t=this,e=this.$site.locales;if(e&&Object.keys(e).length>1){var n=this.$page.path,r=this.$router.options.routes,s=this.$site.themeConfig.locales||{},a={text:this.$themeLocaleConfig.selectText||"Languages",ariaLabel:this.$themeLocaleConfig.ariaLabel||"Select language",items:Object.keys(e).map((function(i){var a,o=e[i],u=s[i]&&s[i].label||o.lang;return o.lang===t.$lang?a=n:(a=n.replace(t.$localeConfig.path,i),r.some((function(t){return t.path===a}))||(a=i)),{text:u,link:a}}))};return[].concat(Object(i.a)(this.userNav),[a])}return this.userNav},userLinks:function(){return(this.nav||[]).map((function(t){return Object.assign(Object(p.j)(t),{items:(t.items||[]).map(p.j)})}))},repoLink:function(){var t=this.$site.themeConfig.repo;return t?/^https?:/.test(t)?t:"https://github.com/".concat(t):null},repoLabel:function(){if(this.repoLink){if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;for(var t=this.repoLink.match(/^https?:\/\/[^/]+/)[0],e=["GitHub","GitLab","Bitbucket"],n=0;n<e.length;n++){var i=e[n];if(new RegExp(i,"i").test(t))return i}return"Source"}}}},f=(n(405),Object(c.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.userLinks.length||t.repoLink?n("nav",{staticClass:"nav-links"},[t._l(t.userLinks,(function(t){return n("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?n("DropdownLink",{attrs:{item:t}}):n("NavLink",{attrs:{item:t}})],1)})),t._v(" "),t.repoLink?n("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),n("OutboundLink")],1):t._e()],2):t._e()}),[],!1,null,null,null));e.a=f.exports},391:function(t,e,n){"use strict";var i={name:"DropdownTransition",methods:{setHeight:function(t){t.style.height=t.scrollHeight+"px"},unsetHeight:function(t){t.style.height=""}}},r=(n(403),n(11)),s=Object(r.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)}),[],!1,null,null,null);e.a=s.exports},392:function(t,e,n){"use strict";var i=n(1),r=n(393);i({target:"String",proto:!0,forced:n(394)("link")},{link:function(t){return r(this,"a","href",t)}})},393:function(t,e,n){var i=n(2),r=n(29),s=n(16),a=/"/g,o=i("".replace);t.exports=function(t,e,n,i){var u=s(r(t)),c="<"+e;return""!==n&&(c+=" "+n+'="'+o(s(i),a,"&quot;")+'"'),c+">"+u+"</"+e+">"}},394:function(t,e,n){var i=n(3);t.exports=function(t){return i((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},396:function(t,e,n){var i=n(1),r=n(397);i({global:!0,forced:parseInt!=r},{parseInt:r})},397:function(t,e,n){var i=n(0),r=n(3),s=n(2),a=n(16),o=n(210).trim,u=n(211),c=i.parseInt,l=i.Symbol,p=l&&l.iterator,h=/^[+-]?0x/i,f=s(h.exec),d=8!==c(u+"08")||22!==c(u+"0x16")||p&&!r((function(){c(Object(p))}));t.exports=d?function(t,e){var n=o(a(t));return c(n,e>>>0||(f(h,n)?16:10))}:c},398:function(t,e,n){"use strict";e.a={}},399:function(t,e,n){var i=n(98).PROPER,r=n(3),s=n(211);t.exports=function(t){return r((function(){return!!s[t]()||"​᠎"!=="​᠎"[t]()||i&&s[t].name!==t}))}},400:function(t,e,n){"use strict";var i,r=n(1),s=n(2),a=n(34).f,o=n(71),u=n(16),c=n(129),l=n(29),p=n(131),h=n(21),f=s("".endsWith),d=s("".slice),g=Math.min,v=p("endsWith");r({target:"String",proto:!0,forced:!!(h||v||(i=a(String.prototype,"endsWith"),!i||i.writable))&&!v},{endsWith:function(t){var e=u(l(this));c(t);var n=arguments.length>1?arguments[1]:void 0,i=e.length,r=void 0===n?i:g(o(n),i),s=u(t);return f?f(e,s,r):d(e,r-s.length,r)===s}})},401:function(t,e,n){"use strict";n(373)},402:function(t,e,n){"use strict";n(374)},403:function(t,e,n){"use strict";n(375)},404:function(t,e,n){"use strict";n(376)},405:function(t,e,n){"use strict";n(377)},407:function(t,e,n){"use strict";n(380)},408:function(t,e,n){var i=n(51),r=n(23),s=n(41);t.exports=function(t){return"string"==typeof t||!r(t)&&s(t)&&"[object String]"==i(t)}},409:function(t,e,n){"use strict";n(381)},410:function(t,e,n){"use strict";n(382)},411:function(t,e,n){"use strict";n(383)},412:function(t,e,n){"use strict";var i=n(1),r=n(40).find,s=n(128),a=!0;"find"in[]&&Array(1).find((function(){a=!1})),i({target:"Array",proto:!0,forced:a},{find:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),s("find")},413:function(t,e,n){"use strict";n(384)},414:function(t,e,n){"use strict";n(385)},428:function(t,e,n){"use strict";n(368),n(47),n(73),n(37),n(6),n(20),n(365),n(215),n(216),n(209),n(38),n(369),n(370),n(371),n(372),n(70),n(212),n(124),n(400),n(125);var i=n(217),r=n.n(i),s=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=r()(e,"title","");return r()(e,"frontmatter.tags")&&(i+=" ".concat(e.frontmatter.tags.join(" "))),n&&(i+=" ".concat(n)),a(t,i)},a=function(t,e){var n=function(t){return t.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&")},i=new RegExp("[^\0-]"),r=t.split(/\s+/g).map((function(t){return t.trim()})).filter((function(t){return!!t}));if(i.test(t))return r.some((function(t){return e.toLowerCase().indexOf(t)>-1}));var s=t.endsWith(" ");return new RegExp(r.map((function(t,e){return r.length!==e+1||s?"(?=.*\\b".concat(n(t),"\\b)"):"(?=.*\\b".concat(n(t),")")})).join("")+".+","gi").test(e)},o={name:"SearchBox",data:function(){return{query:"",focused:!1,focusIndex:0,placeholder:void 0}},computed:{showSuggestions:function(){return this.focused&&this.suggestions&&this.suggestions.length},suggestions:function(){var t=this.query.trim().toLowerCase();if(t){for(var e=this.$site.pages,n=this.$site.themeConfig.searchMaxSuggestions||5,i=this.$localePath,r=[],a=0;a<e.length&&!(r.length>=n);a++){var o=e[a];if(this.getPageLocalePath(o)===i&&this.isSearchable(o))if(s(t,o))r.push(o);else if(o.headers)for(var u=0;u<o.headers.length&&!(r.length>=n);u++){var c=o.headers[u];c.title&&s(t,o,c.title)&&r.push(Object.assign({},o,{path:o.path+"#"+c.slug,header:c}))}}return r}},alignRight:function(){return(this.$site.themeConfig.nav||[]).length+(this.$site.repo?1:0)<=2}},mounted:function(){this.placeholder=this.$site.themeConfig.searchPlaceholder||"",document.addEventListener("keydown",this.onHotkey)},beforeDestroy:function(){document.removeEventListener("keydown",this.onHotkey)},methods:{getPageLocalePath:function(t){for(var e in this.$site.locales||{})if("/"!==e&&0===t.path.indexOf(e))return e;return"/"},isSearchable:function(t){var e=null;return null===e||(e=Array.isArray(e)?e:new Array(e)).filter((function(e){return t.path.match(e)})).length>0},onHotkey:function(t){t.srcElement===document.body&&["s","/"].includes(t.key)&&(this.$refs.input.focus(),t.preventDefault())},onUp:function(){this.showSuggestions&&(this.focusIndex>0?this.focusIndex--:this.focusIndex=this.suggestions.length-1)},onDown:function(){this.showSuggestions&&(this.focusIndex<this.suggestions.length-1?this.focusIndex++:this.focusIndex=0)},go:function(t){this.showSuggestions&&(this.$router.push(this.suggestions[t].path),this.query="",this.focusIndex=0)},focus:function(t){this.focusIndex=t},unfocus:function(){this.focusIndex=-1}}},u=(n(401),n(11)),c=Object(u.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-box"},[n("input",{ref:"input",class:{focused:t.focused},attrs:{"aria-label":"Search",placeholder:t.placeholder,autocomplete:"off",spellcheck:"false"},domProps:{value:t.query},on:{input:function(e){t.query=e.target.value},focus:function(e){t.focused=!0},blur:function(e){t.focused=!1},keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.go(t.focusIndex)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:t.onUp.apply(null,arguments)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.onDown.apply(null,arguments)}]}}),t._v(" "),t.showSuggestions?n("ul",{staticClass:"suggestions",class:{"align-right":t.alignRight},on:{mouseleave:t.unfocus}},t._l(t.suggestions,(function(e,i){return n("li",{key:i,staticClass:"suggestion",class:{focused:i===t.focusIndex},on:{mousedown:function(e){return t.go(i)},mouseenter:function(e){return t.focus(i)}}},[n("a",{attrs:{href:e.path},on:{click:function(t){t.preventDefault()}}},[n("span",{staticClass:"page-title"},[t._v(t._s(e.title||e.path))]),t._v(" "),e.header?n("span",{staticClass:"header"},[t._v("> "+t._s(e.header.title))]):t._e()])])})),0):t._e()])}),[],!1,null,null,null);e.a=c.exports},431:function(t,e,n){"use strict";n(402);var i=n(11),r=Object(i.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-button",on:{click:function(e){return t.$emit("toggle-sidebar")}}},[n("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[n("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])}),[],!1,null,null,null);e.a=r.exports},432:function(t,e,n){"use strict";n.r(e);var i=n(429),r=n(430),s=(n(20),n(124),n(38),n(379)),a=n.n(s),o=n(364),u={name:"PageEdit",computed:{lastUpdated:function(){return this.$page.lastUpdated},lastUpdatedText:function(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},editLink:function(){var t=a()(this.$page.frontmatter.editLink)?this.$site.themeConfig.editLinks:this.$page.frontmatter.editLink,e=this.$site.themeConfig,n=e.repo,i=e.docsDir,r=void 0===i?"":i,s=e.docsBranch,o=void 0===s?"master":s,u=e.docsRepo,c=void 0===u?n:u;return t&&c&&this.$page.relativePath?this.createEditLink(n,c,r,o,this.$page.relativePath):null},editLinkText:function(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink:function(t,e,n,i,r){if(/bitbucket.org/.test(e))return e.replace(o.a,"")+"/src"+"/".concat(i,"/")+(n?n.replace(o.a,"")+"/":"")+r+"?mode=edit&spa=0&at=".concat(i,"&fileviewer=file-view-default");return/gitlab.com/.test(e)?e.replace(o.a,"")+"/-/edit"+"/".concat(i,"/")+(n?n.replace(o.a,"")+"/":"")+r:(o.i.test(e)?e:"https://github.com/".concat(e)).replace(o.a,"")+"/edit"+"/".concat(i,"/")+(n?n.replace(o.a,"")+"/":"")+r}}},c=(n(407),n(11)),l=Object(c.a)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"page-edit"},[t.editLink?n("div",{staticClass:"edit-link"},[n("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),n("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?n("div",{staticClass:"last-updated"},[n("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+":")]),t._v(" "),n("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()])}),[],!1,null,null,null).exports,p=n(408),h=n.n(p),f={name:"PageNav",props:["sidebarItems"],computed:{prev:function(){return g(d.PREV,this)},next:function(){return g(d.NEXT,this)}}};var d={NEXT:{resolveLink:function(t,e){return v(t,e,1)},getThemeLinkConfig:function(t){return t.nextLinks},getPageLinkConfig:function(t){return t.frontmatter.next}},PREV:{resolveLink:function(t,e){return v(t,e,-1)},getThemeLinkConfig:function(t){return t.prevLinks},getPageLinkConfig:function(t){return t.frontmatter.prev}}};function g(t,e){var n=e.$themeConfig,i=e.$page,r=e.$route,s=e.$site,u=e.sidebarItems,c=t.resolveLink,l=t.getThemeLinkConfig,p=t.getPageLinkConfig,f=l(n),d=p(i),g=a()(d)?f:d;return!1===g?void 0:h()(g)?Object(o.k)(s.pages,g,r.path):c(i,u)}function v(t,e,n){var i=[];!function t(e,n){for(var i=0,r=e.length;i<r;i++)"group"===e[i].type?t(e[i].children||[],n):n.push(e[i])}(e,i);for(var r=0;r<i.length;r++){var s=i[r];if("page"===s.type&&s.path===decodeURIComponent(t.path))return i[r+n]}}var m=f,b=(n(409),{components:{PageEdit:l,PageNav:Object(c.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.prev||t.next?n("div",{staticClass:"page-nav"},[n("p",{staticClass:"inner"},[t.prev?n("span",{staticClass:"prev"},[t._v("\n      ←\n      "),"external"===t.prev.type?n("a",{staticClass:"prev",attrs:{href:t.prev.path,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n        "+t._s(t.prev.title||t.prev.path)+"\n\n        "),n("OutboundLink")],1):n("RouterLink",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v("\n        "+t._s(t.prev.title||t.prev.path)+"\n      ")])],1):t._e(),t._v(" "),t.next?n("span",{staticClass:"next"},["external"===t.next.type?n("a",{attrs:{href:t.next.path,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n        "+t._s(t.next.title||t.next.path)+"\n\n        "),n("OutboundLink")],1):n("RouterLink",{attrs:{to:t.next.path}},[t._v("\n        "+t._s(t.next.title||t.next.path)+"\n      ")]),t._v("\n      →\n    ")],1):t._e()])]):t._e()}),[],!1,null,null,null).exports},props:["sidebarItems"]}),k=(n(410),Object(c.a)(b,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"page"},[t._t("top"),t._v(" "),n("Content",{staticClass:"theme-default-content"}),t._v(" "),n("PageEdit"),t._v(" "),n("PageNav",t._b({},"PageNav",{sidebarItems:t.sidebarItems},!1)),t._v(" "),t._t("bottom")],2)}),[],!1,null,null,null).exports),_=n(389),x=n(390),y={name:"Sidebar",components:{SidebarLinks:_.default,NavLinks:x.a},props:["items"]},C=(n(414),Object(c.a)(y,(function(){var t=this.$createElement,e=this._self._c||t;return e("aside",{staticClass:"sidebar"},[e("NavLinks"),this._v(" "),this._t("top"),this._v(" "),e("SidebarLinks",{attrs:{depth:0,items:this.items}}),this._v(" "),this._t("bottom")],2)}),[],!1,null,null,null).exports),L={name:"Layout",components:{Home:i.a,Page:k,Sidebar:C,Navbar:r.a},data:function(){return{isSidebarOpen:!1}},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return Object(o.l)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted:function(){var t=this;this.$router.afterEach((function(){t.isSidebarOpen=!1}))},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen,this.$emit("toggle-sidebar",this.isSidebarOpen)},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,n=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(n)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}},w=Object(c.a)(L,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?n("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),n("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),n("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("sidebar-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("sidebar-bottom")]},proxy:!0}],null,!0)}),t._v(" "),t.$page.frontmatter.home?n("Home"):n("Page",{attrs:{"sidebar-items":t.sidebarItems},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("page-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("page-bottom")]},proxy:!0}],null,!0)})],1)}),[],!1,null,null,null);e.default=w.exports}}]);