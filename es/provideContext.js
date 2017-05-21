function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint no-param-reassign: 0 */
import React, { Component } from 'react';
import invariant from 'invariant';
import mapStaticContextToTypes from './mapStaticContextToTypes';

export default function provideContext(contextProps, contextTypes) {
  var getChildContext = contextProps;
  var contextPropsType = typeof contextProps;
  var contextTypesType = typeof contextTypes;
  invariant(contextPropsType === 'function' || contextPropsType === 'object', 'contextProps must be a function or object, \'' + contextPropsType + '\' given;');
  invariant(contextPropsType !== 'function' || contextTypesType === 'object', 'If contextProps is function, contextTypes required');
  if (contextPropsType === 'object') {
    getChildContext = function getChildContext() {
      return contextProps;
    };
    if (!contextTypes) {
      contextTypes = mapStaticContextToTypes(contextProps);
    }
  } else {
    getChildContext = contextProps;
  }
  return function (Child) {
    var _class, _temp2;

    return _temp2 = _class = function (_Component) {
      _inherits(ContextProvider, _Component);

      function ContextProvider() {
        var _temp, _this, _ret;

        _classCallCheck(this, ContextProvider);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.getChildContext = getChildContext, _temp), _possibleConstructorReturn(_this, _ret);
      }

      ContextProvider.prototype.render = function render() {
        return React.createElement(Child, this.props);
      };

      return ContextProvider;
    }(Component), _class.childContextTypes = contextTypes, _temp2;
  };
}