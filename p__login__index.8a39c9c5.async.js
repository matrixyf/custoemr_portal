(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[24],{A8du:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return L}));a("14J3");var n=a("BMrR"),c=(a("+L6B"),a("2/Rp")),i=(a("jCWc"),a("kPKH")),l=(a("5NDa"),a("5rEg")),o=(a("miYZ"),a("tsqr")),r=a("tJVT"),s=(a("tU7J"),a("wFql")),u=a("q1tI"),b=a.n(u),d=a("Dyq/"),m=a("9kvl"),f=a("Ty5D"),p=a("qeWU"),g=a("ITvK"),_=a.n(g),O=a("AQSq"),v=a("wd/R"),j=a.n(v),E=a("EVed"),T=a("jlBk"),h=a.n(T),y=a("mxmt"),w=a.n(y);function N(e){return b.a.createElement("div",{className:h.a.mobileLogin},b.a.createElement("div",{className:h.a.logo},b.a.createElement("img",{src:w.a})),e.children)}var k=a("TSYQ"),C=a.n(k),P=a("/qPu"),x=a("I4C8"),S=s["a"].Text,q=s["a"].Title,A=/^[a-zA-Z0-9._-]+[a-zA-Z0-9]@[a-zA-Z0-9._-]+[a-zA-Z0-9]$/;function L(){var e=Object(m["g"])(),t=e.formatMessage,a=Object(m["f"])(),s=x["loginTypes"]&&x["loginTypes"].includes(null===P["c"]||void 0===P["c"]?void 0:P["c"].email),g=Object(f["h"])(),v=g.query,T=Object(u["useState"])(""),h=Object(r["a"])(T,2),y=h[0],w=h[1],k=Object(u["useState"])(s?P["d"].emailOTP:P["d"].phoneOTP),L=Object(r["a"])(k,2),V=L[0],z=L[1],I=Object(u["useState"])(""),R=Object(r["a"])(I,2),B=R[0],J=R[1],Z=Object(u["useState"])(0),F=Object(r["a"])(Z,2),U=F[0],W=F[1],D=Object(u["useState"])(0),K=Object(r["a"])(D,2),M=K[0],Y=K[1],H=Object(E["a"])(),Q=H.xs,G=x["loginTypes"]&&x["loginTypes"].includes(null===P["c"]||void 0===P["c"]?void 0:P["c"].phoneNumber);Object(u["useEffect"])((function(){if(G){var e=window,t=e.firebase;t&&!t.apps.length&&x["FirebaseConfig"]&&t.initializeApp(x["FirebaseConfig"])}}),[]);var X=window,$=X.firebase,ee=function(){Object(O["b"])("click_login"),a({type:"login/verifyCode",payload:{account:y,code:B,type:V,callback:function(e){Object(O["b"])("login_success"),Object(O["c"])("login_flow",1e3*j()().unix()-M),Object(p["d"])(e),m["c"].push(v.redirectURL||"/")}}})},te=function(){V===P["d"].emailOTP?ae():(X.recaptchaVerifier=new $.auth.RecaptchaVerifier("sign-in-button",{size:"invisible",callback:ae,"expired-callback":function(){console.log(1)},"error-callback\t":function(){o["default"].error(t({id:"Network error, please try again."}))}}),X.recaptchaVerifier.verify())},ae=function(e){Object(O["b"])("send_OTP"),a({type:"login/sendOtp",payload:{account:y,type:V,recaptchaToken:e,callback:function(){Object(O["b"])("send_OTP_success"),W(59)}}}).then((function(e){e&&X.recaptchaVerifier&&(W(1),X.recaptchaVerifier.render().then((function(e){X.grecaptcha.reset(e)})))}))};Object(u["useEffect"])((function(){Y(1e3*j()().unix())}),[]),Object(u["useEffect"])((function(){if(!(U>=60||U<=0)){var e=setTimeout((function(){W(U-1)}),1e3);return function(){clearTimeout(e)}}}),[U]);var ne=Object(u["useMemo"])((function(){return Q?N:d["b"]}),[Q]),ce=function(e){var t=e.target.value;w(t);var a=V;A.test(t)&&s?a=P["d"].emailOTP:G&&(a=P["d"].phoneOTP),a!==V&&z(a)},ie=Object(x["useContent"])("termsAndConditions");return b.a.createElement(ne,null,b.a.createElement("div",{className:_.a.container},b.a.createElement(q,{className:_.a.title,level:3},t({id:"Welcome to Igloo"})),b.a.createElement(S,{className:_.a.label},G&&t({id:"Phone Number"}),G&&s&&"/",s&&t({id:"Email"})),b.a.createElement(l["a"],{className:_.a.input,value:y,onChange:ce,disabled:U>0}),b.a.createElement(n["a"],{justify:"space-between",className:_.a.label},b.a.createElement(i["a"],null,b.a.createElement(S,{className:_.a.label},t({id:"OTP"}))),b.a.createElement(i["a"],{onClick:y?te:function(){}},b.a.createElement(c["default"],{type:"text",className:_.a.send},U<=0?b.a.createElement("a",{id:"sign-in-button"},t({id:"Send OTP"})):b.a.createElement("div",{className:_.a.count},"".concat(U,"(S)"))))),b.a.createElement(l["a"],{className:_.a.input,value:B,onChange:function(e){J(e.target.value)}}),b.a.createElement(c["default"],{type:"primary",disabled:!y||!B,className:_.a.button,onClick:ee},t({id:"Log in"})),!!ie&&b.a.createElement("div",{className:C()(_.a.terms,{center:!Q})},ie)))}},ITvK:function(e,t,a){e.exports={container:"container___24lE3",title:"title___3F8Ha",label:"label___38Rsn",button:"button___3LXqW",count:"count___kwvLA",input:"input___3COIa",send:"send___1GwpN",terms:"terms___bgfnt"}},jlBk:function(e,t,a){e.exports={mobileLogin:"mobileLogin___Ugn4B",logo:"logo___Ysg0S"}},mxmt:function(e,t,a){e.exports=a.p+"static/logo.b6c5805b.svg"}}]);