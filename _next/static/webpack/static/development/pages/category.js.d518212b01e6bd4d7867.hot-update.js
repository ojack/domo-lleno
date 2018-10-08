webpackHotUpdate("static/development/pages/category.js",{

/***/ "./pages/category.js":
/*!***************************!*\
  !*** ./pages/category.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout.js */ "./components/Layout.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/error */ "./node_modules/next/error.js");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_PageWrapper_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/PageWrapper.js */ "./components/PageWrapper.js");
/* harmony import */ var _components_Menu_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Menu.js */ "./components/Menu.js");
/* harmony import */ var _components_CategoryTitle_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/CategoryTitle.js */ "./components/CategoryTitle.js");
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../config.js */ "./config.js");
/* harmony import */ var _style_config_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../style-config.js */ "./style-config.js");
/* harmony import */ var _components_ImageGrid_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/ImageGrid.js */ "./components/ImageGrid.js");
/* harmony import */ var _components_Festivales_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Festivales.js */ "./components/Festivales.js");
/* harmony import */ var _components_Programacion_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Programacion.js */ "./components/Programacion.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

 //import FullContainer from "../components/FullContainer.js";














var Category =
/*#__PURE__*/
function (_Component) {
  _inherits(Category, _Component);

  function Category() {
    _classCallCheck(this, Category);

    return _possibleConstructorReturn(this, _getPrototypeOf(Category).apply(this, arguments));
  }

  _createClass(Category, [{
    key: "render",
    value: function render() {
      if (this.props.categories.length == 0) return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_error__WEBPACK_IMPORTED_MODULE_5___default.a, {
        statusCode: 404
      }); // const posts = this.props.posts.map((post, index) => {
      //     return (
      //         <ul key={index}>
      //             <li>
      //                 <Link
      //                     as={`/post/${post.slug}`}
      //                     href={`/post?slug=${post.slug}&apiRoute=post`}
      //                 >
      //                     <a>{post.title.rendered}</a>
      //                 </Link>
      //             </li>
      //         </ul>
      //     );
      // });

      console.log("category props", this.props);
      var body;

      if (this.props.categories[0].slug === 'festivales') {
        body = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Festivales_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
          posts: this.props.posts
        });
      } else if (this.props.categories[0].slug === 'programacion') {
        body = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Programacion_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
          posts: this.props.posts
        });
      } else if (this.props.categories[0].slug === 'artistas') {
        body = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_ImageGrid_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
          posts: this.props.posts
        });
      } //<ImageGrid posts={this.props.posts} />
      //  <Festivales posts={this.props.posts} />


      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Layout_js__WEBPACK_IMPORTED_MODULE_1__["default"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Menu_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
        menu: this.props.headerMenu
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: _style_config_js__WEBPACK_IMPORTED_MODULE_10__["ContentWrapper"]
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_CategoryTitle_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
        title: this.props.categories[0].name
      }), body));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
        var slug, categoriesRes, categories, postsRes, posts;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log('getting props from category');
                slug = context.query.slug;
                _context.next = 4;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()("".concat(_config_js__WEBPACK_IMPORTED_MODULE_9__["Config"].apiUrl, "/wp-json/wp/v2/categories?slug=").concat(slug));

              case 4:
                categoriesRes = _context.sent;
                _context.next = 7;
                return categoriesRes.json();

              case 7:
                categories = _context.sent;

                if (!(categories.length > 0)) {
                  _context.next = 16;
                  break;
                }

                _context.next = 11;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()("".concat(_config_js__WEBPACK_IMPORTED_MODULE_9__["Config"].apiUrl, "/wp-json/wp/v2/posts?_embed&categories=").concat(categories[0].id));

              case 11:
                postsRes = _context.sent;
                _context.next = 14;
                return postsRes.json();

              case 14:
                posts = _context.sent;
                return _context.abrupt("return", {
                  categories: categories,
                  posts: posts,
                  domeState: 'open'
                });

              case 16:
                return _context.abrupt("return", {
                  categories: categories
                });

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return Category;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_components_PageWrapper_js__WEBPACK_IMPORTED_MODULE_6__["default"])(Category));
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/category")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=category.js.d518212b01e6bd4d7867.hot-update.js.map