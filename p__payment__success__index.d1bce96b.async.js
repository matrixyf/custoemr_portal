(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[26],{"1wdF":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("nKUr"),o=i(n("TSYQ"));function i(e){return e&&e.__esModule?e:{default:e}}n("iBQd");var a=function(e){var t=e.level,n=e.children,i=e.className,a=e.wrapElement,c=void 0===a?"span":a,l=e.style,u=e.title,s=e.onClick,d="igloo-typography-",f={};return Array.isArray(t)?t.map((function(e){f[d+e]=!0})):f[d+t]=!0,"div"===c?(0,r.jsx)("div",Object.assign({className:(0,o.default)(f,i),style:l,title:u,onClick:s},{children:n}),void 0):(0,r.jsx)("span",Object.assign({className:(0,o.default)(f,i),style:l,title:u,onClick:s},{children:n}),void 0)},c=a;t.default=c},"59vm":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RedButton=t.YellowButton=t.GreenButton=t.default=void 0,n("+L6B");var r=p(n("2/Rp")),o=n("nKUr"),i=p(n("1wdF")),a=p(n("FzCo")),c=p(n("8S5J"));n("LwUo");var l=n("q1tI"),u=n("jzGH"),s=["className","children","onClick","icon","disabled"],d=["className","children"],f=["className","children"],v=["className","children"];function p(e){return e&&e.__esModule?e:{default:e}}function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e,t,n,r,o,i,a){try{var c=e[i](a),l=c.value}catch(u){return void n(u)}c.done?t(l):Promise.resolve(l).then(r,o)}function O(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){h(i,r,o,a,c,"next",e)}function c(e){h(i,r,o,a,c,"throw",e)}a(void 0)}))}}function j(e,t){if(null==e)return{};var n,r,o=g(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function g(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}function w(e,t){return k(e)||N(e,t)||_(e,t)||P()}function P(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _(e,t){if(e){if("string"===typeof e)return x(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?x(e,t):void 0}}function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function N(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done);a=!0)if(i.push(r.value),t&&i.length===t)break}catch(l){c=!0,o=l}finally{try{a||null==n["return"]||n["return"]()}finally{if(c)throw o}}return i}}function k(e){if(Array.isArray(e))return e}var E=function(e){var t=(0,l.useState)(!1),n=w(t,2),d=n[0],f=n[1],v=(0,l.useRef)(!0),p=e.className,y=void 0===p?"":p,b=e.children,m=e.onClick,h=e.icon,g=e.disabled,P=j(e,s);(0,l.useEffect)((function(){return function(){v.current=!1}}),[]);var _=function(){var e=O(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("function"===typeof m){e.next=2;break}return e.abrupt("return");case 2:v.current&&f(!0),n=m(t),n instanceof Promise?n.then((function(){return v.current&&f(!1)}),(function(){return v.current&&f(!1)})):v.current&&f(!1);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,o.jsx)(r.default,Object.assign({className:"".concat(y," igloo-button"),onClick:_},(0,a.default)(P,c.default),{icon:d?(0,o.jsx)(u.LoadingOutlined,{spinning:!0},void 0):h,disabled:d||g},{children:b&&(0,o.jsx)(i.default,Object.assign({level:"h4"},{children:b}),void 0)}),void 0)};E.defaultProps=b(b({},r.default.defaultProps),{},{type:"default"}),E.formItemPropsHandler=function(e){return{}};var I=E;t.default=I;var S=function(e){var t=e.className,n=void 0===t?"":t,a=e.children,c=j(e,d);return(0,o.jsx)(r.default,Object.assign({className:"".concat(n," green "),type:"primary"},c,{children:(0,o.jsx)(i.default,Object.assign({level:"h4"},{children:a}),void 0)}),void 0)};t.GreenButton=S;var C=function(e){var t=e.className,n=void 0===t?"":t,a=e.children,c=j(e,f);return(0,o.jsx)(r.default,Object.assign({className:"".concat(n," yellow "),type:"primary"},c,{children:(0,o.jsx)(i.default,Object.assign({level:"h4"},{children:a}),void 0)}),void 0)};t.YellowButton=C;var B=function(e){var t=e.className,n=void 0===t?"":t,a=e.children,c=j(e,v);return(0,o.jsx)(r.default,Object.assign({className:"".concat(n," red "),type:"primary"},c,{children:(0,o.jsx)(i.default,Object.assign({level:"h4"},{children:a}),void 0)}),void 0)};t.RedButton=B},"8S5J":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=["containerRef","setFieldError","setFieldValue","setShowStepButton","locales","getFormInstance","hideWhenPreview","validateField"];t.default=r},LwUo:function(e,t,n){},T6cW:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return v}));var r=n("q1tI"),o=n.n(r),i=n("mnnv"),a=n.n(i),c=n("ozsB"),l=n("Ty5D"),u=n("9kvl"),s=n("59vm"),d=n.n(s),f=n("qeWU");function v(){var e=Object(l["h"])(),t=e.query.id,n=Object(u["g"])(),r=n.formatMessage,i=Object(f["a"])()||"",s=Object(f["b"])(i);return o.a.createElement("div",{className:a.a.container},o.a.createElement(c["a"],null),o.a.createElement("div",{className:a.a.title},r({id:"Your policy has been paied successfully!"})),o.a.createElement("div",{className:a.a.policyId},"".concat(r({id:"Policy ID"}),": ").concat(t)),o.a.createElement("div",{className:a.a.desc},"".concat(r({id:"Now you can view and manage this policy in My Policy page on Igloo Customer Portal. Your Igloo account ID is"})," ").concat((null===s||void 0===s?void 0:s.email)||(null===s||void 0===s?void 0:s.phone_number))),o.a.createElement(d.a,{onClick:function(){return u["c"].push("/list/policy")},className:a.a.button},r({id:"Go to My Policy"})))}},iBQd:function(e,t,n){},mnnv:function(e,t,n){e.exports={container:"container___1-GPv",title:"title___1JUxK",policyId:"policyId___1TqiT",desc:"desc___3sDT1",button:"button___1N-U1"}},ozsB:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r,o,i=n("q1tI"),a=n.n(i);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,o=u(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function u(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}var s=function(e){var t=e.svgRef,n=e.title,i=l(e,["svgRef","title"]);return a.a.createElement("svg",c({width:65,height:64,viewBox:"0 0 65 64",fill:"none",ref:t},i),n?a.a.createElement("title",null,n):null,r||(r=a.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M32.5002 58.6667C47.2278 58.6667 59.1668 46.7276 59.1668 32C59.1668 17.2724 47.2278 5.33337 32.5002 5.33337C17.7726 5.33337 5.8335 17.2724 5.8335 32C5.8335 46.7276 17.7726 58.6667 32.5002 58.6667Z",fill:"#2ED573"})),o||(o=a.a.createElement("path",{d:"M20.2773 32.2706L28.2343 39.7778L44.7218 24.2223",stroke:"white",strokeWidth:5.33333,strokeLinecap:"round",strokeLinejoin:"round"})))},d=a.a.forwardRef((function(e,t){return a.a.createElement(s,c({svgRef:t},e))}));n.p}}]);