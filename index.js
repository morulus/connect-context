(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("invariant"), require("react"), require("prop-types"), require("react-redux"));
	else if(typeof define === 'function' && define.amd)
		define(["invariant", "react", "prop-types", "react-redux"], factory);
	else if(typeof exports === 'object')
		exports["ConnectContext"] = factory(require("invariant"), require("react"), require("prop-types"), require("react-redux"));
	else
		root["ConnectContext"] = factory(root["invariant"], root["react"], root["prop-types"], root["react-redux"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_8__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /* eslint no-param-reassign: 0 */


exports.default = acceptContext;

var _invariant = __webpack_require__(0);

var _invariant2 = _interopRequireDefault(_invariant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function acceptContext(contextTypes) {
  var typeOfContextTypes = typeof contextTypes === 'undefined' ? 'undefined' : _typeof(contextTypes);
  (0, _invariant2.default)(contextTypes !== 'object', 'acceptContext: first argument accepted as \'' + typeOfContextTypes + '\', expected an object, ');
  return function (Child) {
    Child.contextTypes = _extends({}, Child.contextTypes, contextTypes);
    return Child;
  };
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = connectContext;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(8);

var _invariant = __webpack_require__(0);

var _invariant2 = _interopRequireDefault(_invariant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /* eslint no-restricted-syntax: 0 */


var PORT_CONTEXT_KEY = '@@connectContext.CONNECTOR_CONTEXT_TEMPORARY_CONTEXT_PROP';
var getHigherProxyComponent = function getHigherProxyComponent(Child, contextTypes) {
  var ProxyComponent = function ContextProxyComponent(props, context) {
    var nextProps = _defineProperty({}, PORT_CONTEXT_KEY, [context, props]);
    return _react2.default.createElement(Child, nextProps, nextProps.children);
  };

  ProxyComponent.contextTypes = contextTypes;
  return ProxyComponent;
};
/* eslint-disable react/prop-types */
var getLowerProxyComponent = function getLowerProxyComponent(Child) {
  return function ContextLowerProxyComponent(props) {
    var omittedProps = {};
    for (var prop in props) {
      if (Object.prototype.hasOwnProperty.call(props, prop)) {
        if (prop !== PORT_CONTEXT_KEY) {
          omittedProps[prop] = props[prop];
        } else {
          Object.assign(omittedProps, props[prop][1]);
        }
      }
    }
    return _react2.default.createElement(Child, omittedProps, props.children);
  };
};
/* eslint-enable */

function connectContext(contextTypes, mapContextToProps) {
  for (var _len = arguments.length, others = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    others[_key - 2] = arguments[_key];
  }

  var typeOfContextTypes = typeof contextTypes === 'undefined' ? 'undefined' : _typeof(contextTypes);
  (0, _invariant2.default)(contextTypes !== 'object', 'connectContext: first argument accepted as \'' + typeOfContextTypes + '\', expected an object, ');
  return function (Child) {
    var ProxyLower = getLowerProxyComponent(Child);
    var ConnectedToRedux = _reactRedux.connect.apply(undefined, [function (state, props) {
      return mapContextToProps(props[PORT_CONTEXT_KEY][0], state, props[PORT_CONTEXT_KEY][1]);
    }].concat(others))(ProxyLower);
    return getHigherProxyComponent(ConnectedToRedux, contextTypes);
  };
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /* eslint no-param-reassign: 0 */


exports.default = provideContext;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _invariant = __webpack_require__(0);

var _invariant2 = _interopRequireDefault(_invariant);

var _mapStaticContextToTypes = __webpack_require__(6);

var _mapStaticContextToTypes2 = _interopRequireDefault(_mapStaticContextToTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function provideContext(contextProps, contextTypes) {
  var getChildContext = contextProps;
  var contextPropsType = typeof contextProps === 'undefined' ? 'undefined' : _typeof(contextProps);
  var contextTypesType = typeof contextTypes === 'undefined' ? 'undefined' : _typeof(contextTypes);
  (0, _invariant2.default)(!(contextPropsType === 'function' || (typeof contextPropsType === 'undefined' ? 'undefined' : _typeof(contextPropsType)) === 'object'), 'provideContext: contextProps must be a function or object, \'' + contextPropsType + '\' given;');
  (0, _invariant2.default)(!(contextPropsType === 'function' && contextTypesType === 'object'), 'provideContext: if contextProps is function, then it requires contextTypes');
  if (contextPropsType === 'object') {
    getChildContext = function getChildContext() {
      return contextProps;
    };
    if (!contextTypes) {
      contextTypes = (0, _mapStaticContextToTypes2.default)(contextProps);
    }
  } else {
    getChildContext = contextProps;
  }
  return function (Child) {
    var _class, _temp2;

    return _temp2 = _class = function (_Component) {
      _inherits(ContextProvider, _Component);

      function ContextProvider() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, ContextProvider);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ContextProvider.__proto__ || Object.getPrototypeOf(ContextProvider)).call.apply(_ref, [this].concat(args))), _this), _this.getChildContext = getChildContext, _temp), _possibleConstructorReturn(_this, _ret);
      }

      _createClass(ContextProvider, [{
        key: 'render',
        value: function render() {
          return _react2.default.createElement(Child, this.props);
        }
      }]);

      return ContextProvider;
    }(_react.Component), _class.childContextTypes = contextTypes, _temp2;
  };
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connectContext = exports.acceptContext = exports.provideContext = undefined;

var _provideContext2 = __webpack_require__(4);

var _provideContext3 = _interopRequireDefault(_provideContext2);

var _acceptContext2 = __webpack_require__(2);

var _acceptContext3 = _interopRequireDefault(_acceptContext2);

var _connectContext2 = __webpack_require__(3);

var _connectContext3 = _interopRequireDefault(_connectContext2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.provideContext = _provideContext3.default;
exports.acceptContext = _acceptContext3.default;
exports.connectContext = _connectContext3.default;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /* eslint no-restricted-syntax: 0 */


exports.default = mapStaticContextToTypes;

var _propTypes = __webpack_require__(7);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var nativeTypeToPropType = {
  string: _propTypes2.default.string,
  number: _propTypes2.default.number,
  boolean: _propTypes2.default.bool,
  symbol: _propTypes2.default.symbol,
  function: _propTypes2.default.func,
  undefined: _propTypes2.default.any
};

function mapStaticContextToTypes(context) {
  var contextTypes = {};
  for (var prop in context) {
    if (Object.prototype.hasOwnProperty.call(context, prop)) {
      var nativeType = _typeof(context[prop]);
      switch (nativeType) {
        case 'object':
          if (context[prop] instanceof Array) {
            contextTypes[prop] = _propTypes2.default.array;
          } else {
            contextTypes[prop] = _propTypes2.default.object;
          }
          break;
        default:
          contextTypes[prop] = nativeTypeToPropType[nativeType] || _propTypes2.default.any;
      }
    }
  }
  return contextTypes;
}

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ })
/******/ ]);
});