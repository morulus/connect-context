var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import invariant from 'invariant';
import getLowerProxyComponent from './getLowerProxyComponent';
import getHigherProxyComponent from './getHigherProxyComponent';
import { PORT_CONTEXT_KEY } from './constants';

function defaultMapContextToProps(context) {
  return _extends({}, context);
}

export default function createContextConnector(connect) {
  return function connectContext(contextTypes) {
    for (var _len = arguments.length, others = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      others[_key - 2] = arguments[_key];
    }

    var mapContextToProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultMapContextToProps;

    var typeOfContextTypes = typeof contextTypes;
    invariant(contextTypes !== 'object', 'connectContext: first argument accepted as \'' + typeOfContextTypes + '\', expected an object, ');
    return function (Child) {
      var ProxyLower = getLowerProxyComponent(Child);
      var ConnectedToRedux = connect.apply(undefined, [function (state, props) {
        return mapContextToProps(props[PORT_CONTEXT_KEY][0], state, props[PORT_CONTEXT_KEY][1]);
      }].concat(others))(ProxyLower);
      return getHigherProxyComponent(ConnectedToRedux, contextTypes);
    };
  };
}