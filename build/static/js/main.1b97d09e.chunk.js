(this["webpackJsonpcreate-react-app"]=this["webpackJsonpcreate-react-app"]||[]).push([[0],{24:function(n,t,e){},44:function(n,t,e){},46:function(n,t,e){"use strict";e.r(t);var c=e(2),r=e(16),a=e.n(r),o=(e(24),e(17)),i=e(19),u=e(5),s=e.n(u),l=e(18),f=e.n(l),d=(e(44),e(1)),h=function(){var n=Object(c.useState)([]),t=Object(i.a)(n,2),e=t[0],r=t[1];Object(c.useEffect)((function(){a().then((function(n){r(n.data)})).catch((function(n){console.log(n)}))}),[]);var a=function(){var n=Object(o.a)(s.a.mark((function n(){return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",f.a.get("https://gist.githubusercontent.com/chancock09/6d2a5a4436dcd488b8287f3e3e4fc73d/raw/fa47d64c6d5fc860fabd3033a1a4e3c59336324e/employees.json").then((function(n){return n})).catch((function(n){console.log(n)})));case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(d.jsx)("div",{children:e.length?function(n){var t=n.filter((function(n){return null===n.manager_id})).sort((function(n,t){return n.name===t.name?0:n.name.split(" ")[1]<t.name.split(" ")[1]?-1:1})),e=function n(t,e){return t.filter((function(n){return n.manager_id===e.id})).sort((function(n,t){return n.name===t.name?0:n.name.split(" ")[1]<t.name.split(" ")[1]?-1:1})).map((function(e){return Object(d.jsx)("ul",{children:Object(d.jsxs)("li",{children:["".concat(e.title,": ").concat(e.name),n(t,e)]})},e.id)}))};return Object(d.jsx)("ul",{children:t.length&&t.map((function(t){return Object(d.jsxs)("li",{children:["".concat(t.title,": ").concat(t.name),e(n,t)]},t.id)}))})}(e):Object(d.jsx)("div",{children:"No data!"})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(Object(d.jsx)(h,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))}},[[46,1,2]]]);
//# sourceMappingURL=main.1b97d09e.chunk.js.map