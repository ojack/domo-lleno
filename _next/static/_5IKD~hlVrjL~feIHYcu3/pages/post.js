(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{11:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r="max-w-4xl"},296:function(t,e,n){__NEXT_REGISTER_PAGE("/post",function(){return t.exports=n(297),{page:t.exports.default}})},297:function(t,e,n){"use strict";n.r(e);var r=n(4),o=n.n(r),a=n(17),u=n(0),i=n.n(u),c=n(3),s=n.n(c),p=n(6),f=n.n(p),l=n(13),y=n(12),h=n(5),b=n(11);function m(t){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function v(t,e,n,r,o,a,u){try{var i=t[a](u),c=i.value}catch(t){return void n(t)}i.done?e(c):Promise.resolve(c).then(r,o)}function d(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function w(t,e){return!e||"object"!==m(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function _(t){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function E(t,e){return(E=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var g=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),w(this,_(e).apply(this,arguments))}var n,r,c,p,l;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&E(t,e)}(e,u["Component"]),n=e,r=[{key:"render",value:function(){return console.log("post props",this.props.post),this.props.post.title?i.a.createElement(a.a,null,i.a.createElement(y.a,{menu:this.props.headerMenu}),i.a.createElement("div",{className:b.a},i.a.createElement("h1",{className:b.Title},this.props.post.title.rendered),i.a.createElement("div",{dangerouslySetInnerHTML:{__html:this.props.post.acf.descripcion}}))):i.a.createElement(f.a,{statusCode:404})}}],c=[{key:"getInitialProps",value:(p=o.a.mark(function t(e){var n,r,a,u,i;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.query,r=n.slug,a=n.apiRoute,t.next=3,s()("".concat(h.a.apiUrl,"/wp-json/postlight/v1/").concat(a,"?slug=").concat(r));case 3:return u=t.sent,t.next=6,u.json();case 6:return i=t.sent,t.abrupt("return",{post:i});case 8:case"end":return t.stop()}},t,this)}),l=function(){var t=this,e=arguments;return new Promise(function(n,r){var o=p.apply(t,e);function a(t){v(o,n,r,a,u,"next",t)}function u(t){v(o,n,r,a,u,"throw",t)}a(void 0)})},function(t){return l.apply(this,arguments)})}],r&&d(n.prototype,r),c&&d(n,c),e}();e.default=Object(l.a)(g)}},[[296,1,0]]]);