(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1780:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return t(2021)}])},2021:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return h}});var n=t(5893),r=t(7294),o=t(4298),i=t(9008),c=function(){var e=document.querySelector("#preloader"),s=document.querySelector(".loading-text"),t=function(){e.classList.add("isdone"),s.classList.add("isdone")};Pace.on("start",(function(){e.classList.remove("isdone"),s.classList.remove("isdone")})),Pace.on("done",(function(){t()})),document.querySelector("body").classList.contains("pace-done")&&t(),document.addEventListener("load",(function(){t()}))},a=t(2806),l=function(){return r.useEffect((function(){var e=document.querySelector("body");a.QP?(c(),e.classList.contains("hideX")&&e.classList.remove("hideX")):e.classList.add("hideX")})),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"".concat(!0===a.QP?"showX":"hideX"),children:(0,n.jsx)("div",{id:"preloader",children:(0,n.jsx)("div",{className:"loading-text",children:"Loading"})})}),a.QP?(0,n.jsx)(o.default,{id:"pace",strategy:"beforeInteractive",src:"/assets/js/pace.min.js"}):""]})},u=(t(472),function(){!function(){var e=document.querySelector(".cursor-inner"),s=document.querySelector(".cursor-outer");window.onmousemove=function(t){s.style.transform="translate("+t.clientX+"px, "+t.clientY+"px)",e.style.transform="translate("+t.clientX+"px, "+t.clientY+"px)",t.clientY,t.clientX},document.querySelector(".cursor-pointer")&&(document.querySelector(".cursor-pointer").addEventListener("mouseenter",(function(){e.classList.add("cursor-hover"),s.classList.add("cursor-hover")})),document.querySelector(".cursor-pointer").addEventListener("mouseleave",(function(){e.classList.remove("cursor-hover"),s.classList.remove("cursor-hover")})),e.style.visibility="visible",s.style.visibility="visible"),document.querySelectorAll("a").forEach((function(t){t.addEventListener("mouseenter",(function(){e.classList.add("cursor-hover"),s.classList.add("cursor-hover")}))})),document.querySelectorAll("a").forEach((function(t){t.addEventListener("mouseleave",(function(){e.classList.remove("cursor-hover"),s.classList.remove("cursor-hover")}))})),e.style.visibility="visible",s.style.visibility="visible"}()}),d=function(){return r.useEffect((function(){u()}),[]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"mouse-cursor cursor-outer"}),(0,n.jsx)("div",{className:"mouse-cursor cursor-inner"})]})},f=function(){var e=document.querySelector(".progress-wrap"),s=document.querySelector(".progress-wrap path"),t=s.getTotalLength(),n=function(){var e=window.pageYOffset,n=document.documentElement.scrollHeight-window.innerHeight,r=t-e*t/n;s.style.strokeDashoffset=r};e&&(s.style.transition=s.style.WebkitTransition="none",s.style.strokeDasharray=t+" "+t,s.style.strokeDashoffset=t,s.getBoundingClientRect(),s.style.transition=s.style.WebkitTransition="stroke-dashoffset 10ms linear",n(),window.addEventListener("scroll",n),window.addEventListener("scroll",(function(){window.pageYOffset>150?e.classList.add("active-progress"):document.querySelector(".progress-wrap").classList.remove("active-progress")})),e.addEventListener("click",(function(e){return e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"}),!1})))},m=function(){return r.useEffect((function(){f()}),[]),(0,n.jsx)("div",{className:"progress-wrap cursor-pointer",children:(0,n.jsx)("svg",{className:"progress-circle svg-content",width:"100%",height:"100%",viewBox:"-1 -1 102 102",children:(0,n.jsx)("path",{d:"M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"})})})};function v(e,s,t){return s in e?Object.defineProperty(e,s,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[s]=t,e}function p(e){for(var s=1;s<arguments.length;s++){var t=null!=arguments[s]?arguments[s]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(s){v(e,s,t[s])}))}return e}var h=function(e){var s=e.Component,t=e.pageProps;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(i.default,{children:[(0,n.jsx)("title",{children:"Renders Inc"}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, maximum-scale=1"})]}),(0,n.jsx)(d,{}),(0,n.jsx)(l,{}),(0,n.jsx)(s,p({},t)),(0,n.jsx)(m,{}),(0,n.jsx)(o.default,{id:"wow",src:"/assets/js/wow.min.js"}),(0,n.jsx)(o.default,{id:"splitting",strategy:"beforeInteractive",src:"/assets/js/splitting.min.js"}),(0,n.jsx)(o.default,{id:"simpleParallax",src:"/assets/js/simpleParallax.min.js"}),(0,n.jsx)(o.default,{id:"isotope",src:"/assets/js/isotope.pkgd.min.js"}),(0,n.jsx)(o.default,{src:"/assets/js/main.js",id:"init",strategy:"lazyOnload"})]})}},472:function(){},9008:function(e,s,t){e.exports=t(5443)},4298:function(e,s,t){e.exports=t(699)},2806:function(e){"use strict";e.exports=JSON.parse('{"E8":"/assets/img/logo-light.svg","Q1":"/assets/img/logo-dark.png","xU":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462561.6574537445!2d55.22748795!3d25.076022449999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1717484912294!5m2!1sen!2s","QP":true}')}},function(e){var s=function(s){return e(e.s=s)};e.O(0,[774,179],(function(){return s(1780),s(387)}));var t=e.O();_N_E=t}]);