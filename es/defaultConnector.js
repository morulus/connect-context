var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';

var SHALLOW_OBJECT = {};
Object.freeze(SHALLOW_OBJECT);

export default function defaultConnector(mapContextToProps, shouldUpdate) {
  return function connector(Child) {
    return function (_Component) {
      _inherits(ContextConnector, _Component);

      function ContextConnector() {
        var _temp, _this, _ret;

        _classCallCheck(this, ContextConnector);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
          provideProps: mapContextToProps(SHALLOW_OBJECT, _this.props)
        }, _temp), _possibleConstructorReturn(_this, _ret);
      }

      ContextConnector.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        this.setState({
          provideProps: mapContextToProps(SHALLOW_OBJECT, nextProps)
        });
      };

      ContextConnector.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
        return shouldUpdate ? shouldUpdate(nextState.provideProps, this.state.provideProps) : true;
      };

      ContextConnector.prototype.render = function render() {
        return React.createElement(Child, _extends({}, this.props, this.state.provideProps));
      };

      return ContextConnector;
    }(Component);
  };
}