import React from 'react';
import { PORT_CONTEXT_KEY } from './constants';

export default (function (Child, contextTypes) {
  var ProxyComponent = function ContextProxyComponent(props, context) {
    var _nextProps;

    var nextProps = (_nextProps = {}, _nextProps[PORT_CONTEXT_KEY] = [context, props], _nextProps);
    return React.createElement(Child, nextProps, nextProps.children);
  };

  ProxyComponent.contextTypes = contextTypes;
  return ProxyComponent;
});