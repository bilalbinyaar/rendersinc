(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[371],{3656:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/portfolio",function(){return n(3118)}])},8418:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,s=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(l){s=!0,i=l}finally{try{r||null==c.return||c.return()}finally{if(s)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.default=void 0;var s,i=(s=n(7294))&&s.__esModule?s:{default:s},a=n(6273),c=n(387),l=n(7190);var o={};function d(e,t,n,r){if(e&&a.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var s=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;o[t+"%"+n+(s?"%"+s:"")]=!0}}var u=function(e){var t,n=!1!==e.prefetch,s=c.useRouter(),u=i.default.useMemo((function(){var t=r(a.resolveHref(s,e.href,!0),2),n=t[0],i=t[1];return{href:n,as:e.as?a.resolveHref(s,e.as):i||n}}),[s,e.href,e.as]),f=u.href,h=u.as,m=e.children,v=e.replace,p=e.shallow,j=e.scroll,x=e.locale;"string"===typeof m&&(m=i.default.createElement("a",null,m));var g=(t=i.default.Children.only(m))&&"object"===typeof t&&t.ref,y=r(l.useIntersection({rootMargin:"200px"}),2),N=y[0],w=y[1],b=i.default.useCallback((function(e){N(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,N]);i.default.useEffect((function(){var e=w&&n&&a.isLocalURL(f),t="undefined"!==typeof x?x:s&&s.locale,r=o[f+"%"+h+(t?"%"+t:"")];e&&!r&&d(s,f,h,{locale:t})}),[h,f,w,x,n,s]);var M={ref:b,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,s,i,c,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(n))&&(e.preventDefault(),null==c&&r.indexOf("#")>=0&&(c=!1),t[s?"replace":"push"](n,r,{shallow:i,locale:l,scroll:c}))}(e,s,f,h,v,p,j,x)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),a.isLocalURL(f)&&d(s,f,h,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var k="undefined"!==typeof x?x:s&&s.locale,E=s&&s.isLocaleDomain&&a.getDomainLocale(h,k,s&&s.locales,s&&s.domainLocales);M.href=E||a.addBasePath(a.addLocale(h,k,s&&s.defaultLocale))}return i.default.cloneElement(t,M)};t.default=u},7190:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,s=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(l){s=!0,i=l}finally{try{r||null==c.return||c.return()}finally{if(s)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!a,l=s.useRef(),o=r(s.useState(!1),2),d=o[0],u=o[1],f=s.useCallback((function(e){l.current&&(l.current(),l.current=void 0),n||d||e&&e.tagName&&(l.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var r=new Map,s=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:s,elements:r}),n}(n),s=r.id,i=r.observer,a=r.elements;return a.set(e,t),i.observe(e),function(){a.delete(e),i.unobserve(e),0===a.size&&(i.disconnect(),c.delete(s))}}(e,(function(e){return e&&u(e)}),{rootMargin:t}))}),[n,t,d]);return s.useEffect((function(){if(!a&&!d){var e=i.requestIdleCallback((function(){return u(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[d]),[f,d]};var s=n(7294),i=n(9311),a="undefined"!==typeof IntersectionObserver;var c=new Map},8063:function(e,t){"use strict";t.Z=function(){var e,t=document.querySelectorAll(".gallery"),n=document.querySelector(".filtering"),r=document.querySelectorAll(".filtering");if(t.length>=1&&t.forEach((function(t){e=new Isotope(t,{itemSelector:".items"})})),n){n.addEventListener("click",(function(t){if(matchesSelector(t.target,"span")){var n=t.target.getAttribute("data-filter");n=n,e.arrange({filter:n})}}));for(var s=function(e){e.addEventListener("click",(function(t){matchesSelector(t.target,"span")&&(e.querySelector(".active").classList.remove("active"),t.target.classList.add("active"))}))},i=0,a=r.length;i<a;i++){s(r[i])}}}},7068:function(e,t,n){"use strict";var r=n(5893);n(7294);t.Z=function(e){var t=e.title,n=e.content,s=e.center;return(0,r.jsx)("header",{className:"work-header bg-img valign",style:{backgroundImage:"url(/assets/img/patern.png)"},children:(0,r.jsx)("div",{className:"container",children:(0,r.jsx)("div",{className:"row ".concat(s?"justify-content-center":""),children:(0,r.jsx)("div",{className:"col-lg-9",children:(0,r.jsxs)("div",{className:"cont ".concat(s?"text-center":""),children:[(0,r.jsx)("h2",{children:"object"==typeof t?(0,r.jsxs)(r.Fragment,{children:[t.first," ",(0,r.jsx)("br",{})," ",t.second]}):t}),(0,r.jsx)("p",{children:n})]})})})})})}},3118:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var r=n(5893),s=n(7294),i=n(7068),a=n(843),c=n(1664),l=n(8063),o=function(){return s.useEffect((function(){setTimeout((function(){window.Isotope&&(0,l.Z)()}),1e3)}),[]),(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("section",{className:"works filter-img section-padding",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"row gallery",children:[(0,r.jsx)("div",{className:"col-lg-6 items mt-0 interior theaters residential",children:(0,r.jsxs)("div",{className:"section-head mb-0",children:[(0,r.jsx)("h3",{children:"Portfolio"}),(0,r.jsx)("div",{className:"filtering mt-30",children:(0,r.jsxs)("div",{className:"filter",children:[(0,r.jsx)("span",{"data-filter":"*",className:"active",children:"All"}),(0,r.jsx)("span",{"data-filter":".interior",children:"Interior"}),(0,r.jsx)("span",{"data-filter":".theaters",children:"Theaters"}),(0,r.jsx)("span",{"data-filter":".residential",children:"Residential"})]})})]})}),(0,r.jsx)("div",{className:"col-lg-6 items theaters",children:(0,r.jsxs)("div",{className:"item",children:[(0,r.jsx)("div",{className:"img",children:(0,r.jsx)("img",{src:"/assets/img/works/2.jpg",alt:""})}),(0,r.jsxs)("div",{className:"cont vis",children:[(0,r.jsx)("h5",{children:(0,r.jsx)(c.default,{href:"#",children:"Modern Townhouse"})}),(0,r.jsx)("span",{children:"Architecture"}),(0,r.jsx)("span",{children:"Modern"})]})]})}),(0,r.jsx)("div",{className:"col-lg-6 items residential interior",children:(0,r.jsxs)("div",{className:"item",children:[(0,r.jsx)("div",{className:"img",children:(0,r.jsx)("img",{src:"/assets/img/works/1.jpg",alt:""})}),(0,r.jsxs)("div",{className:"cont vis",children:[(0,r.jsx)("h5",{children:(0,r.jsx)(c.default,{href:"#",children:"Modern Townhouse"})}),(0,r.jsx)("span",{children:"Architecture"}),(0,r.jsx)("span",{children:"Modern"})]})]})}),(0,r.jsx)("div",{className:"col-lg-6 items interior",children:(0,r.jsxs)("div",{className:"item",children:[(0,r.jsx)("div",{className:"img",children:(0,r.jsx)("img",{src:"/assets/img/works/5.jpg",alt:""})}),(0,r.jsxs)("div",{className:"cont vis",children:[(0,r.jsx)("h5",{children:(0,r.jsx)(c.default,{href:"#",children:"Modern Townhouse"})}),(0,r.jsx)("span",{children:"Architecture"}),(0,r.jsx)("span",{children:"Modern"})]})]})}),(0,r.jsx)("div",{className:"col-lg-6 items residential",children:(0,r.jsxs)("div",{className:"item",children:[(0,r.jsx)("div",{className:"img",children:(0,r.jsx)("img",{src:"/assets/img/works/3.jpg",alt:""})}),(0,r.jsxs)("div",{className:"cont vis",children:[(0,r.jsx)("h5",{children:(0,r.jsx)(c.default,{href:"#",children:"Modern Townhouse"})}),(0,r.jsx)("span",{children:"Architecture"}),(0,r.jsx)("span",{children:"Modern"})]})]})}),(0,r.jsx)("div",{className:"col-lg-6 items theaters",children:(0,r.jsxs)("div",{className:"item",children:[(0,r.jsx)("div",{className:"img",children:(0,r.jsx)("img",{src:"/assets/img/works/4.jpg",alt:""})}),(0,r.jsxs)("div",{className:"cont vis",children:[(0,r.jsx)("h5",{children:(0,r.jsx)(c.default,{href:"#",children:"Modern Townhouse"})}),(0,r.jsx)("span",{children:"Architecture"}),(0,r.jsx)("span",{children:"Modern"})]})]})})]})})})})},d=function(){return s.useEffect((function(){document.querySelector("body").classList.add("index3")}),[]),(0,r.jsxs)(a.Z,{children:[(0,r.jsx)(i.Z,{title:{first:"Architecture is a visual art,",second:"and the building speak for themeselves"},content:"Architecture bibendum pharetra eleifend. Suspendisse vel volutpat purus, sit amet bibendum nisl. Cras mollis turpis a ipsum ultes, nec condimentum ipsum consequat. Mauris vitae consequat nibh, vitae interdum mi."}),(0,r.jsx)(o,{})]})}},1664:function(e,t,n){e.exports=n(8418)}},function(e){e.O(0,[843,774,888,179],(function(){return t=3656,e(e.s=t);var t}));var t=e.O();_N_E=t}]);