webpackHotUpdate("static/development/pages/category.js",{

/***/ "./components/CategoryTitle.js":
/*!*************************************!*\
  !*** ./components/CategoryTitle.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

 //import Title from './Title.js'

var TitleClass = 'font-menu mt-20 uppercase mb-12 text-3xl';

var CategoryTitle =
/*#__PURE__*/
function (_Component) {
  _inherits(CategoryTitle, _Component);

  function CategoryTitle() {
    _classCallCheck(this, CategoryTitle);

    return _possibleConstructorReturn(this, _getPrototypeOf(CategoryTitle).call(this));
  }

  _createClass(CategoryTitle, [{
    key: "render",
    value: function render() {
      var categoryText;
      console.log(this.props);

      if (this.props.texto) {
        categoryText = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "text-left max-w_sm m-4 lg:max-w-md lg:ml-128 font-hairline leading-loose lg:-mt-4"
        }, this.props.texto);
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "inline-block m-4 mb-12"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "inline-block"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: TitleClass,
        dangerouslySetInnerHTML: {
          __html: this.props.title
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "w-full h-2",
        style: {
          backgroundImage: "url(/static/images/underline.png)",
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100px'
        }
      })), categoryText);
    }
  }]);

  return CategoryTitle;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (CategoryTitle);

/***/ })

})
//# sourceMappingURL=category.js.b818c489fb4e545abd2d.hot-update.js.map