(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{298:function(t,e,n){__NEXT_REGISTER_PAGE("/preview",function(){return t.exports=n(299),{page:t.exports.default}})},299:function(t,e,n){"use strict";n.r(e);var o=n(17),r=n(0),i=n.n(r),c=n(3),u=n.n(c),a=n(6),s=n.n(a),p=n(13),l=n(12),f=n(5);function y(t){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function h(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function b(t,e){return!e||"object"!==y(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function m(t,e){return(m=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var w=function(t){function e(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(t=b(this,d(e).call(this))).state={post:null},t}var n,c,a;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&m(t,e)}(e,r["Component"]),n=e,(c=[{key:"componentDidMount",value:function(){var t=this,e=this.props.url.query,n=e.id,o=e.wpnonce;u()("".concat(f.a.apiUrl,"/wp-json/postlight/v1/post/preview?id=").concat(n,"&_wpnonce=").concat(o),{credentials:"include"}).then(function(t){return t.json()}).then(function(e){t.setState({post:e})})}},{key:"render",value:function(){return this.state.post&&this.state.post.code&&"rest_cookie_invalid_nonce"===this.state.post.code?i.a.createElement(s.a,{statusCode:404}):i.a.createElement(o.a,null,i.a.createElement(l.a,{menu:this.props.headerMenu}),i.a.createElement("h1",null,this.state.post?this.state.post.title.rendered:""),i.a.createElement("div",{dangerouslySetInnerHTML:{__html:this.state.post?this.state.post.content.rendered:""}}))}}])&&h(n.prototype,c),a&&h(n,a),e}();e.default=Object(p.a)(w)}},[[298,1,0]]]);