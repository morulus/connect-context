import React from 'react';
import { PORT_CONTEXT_KEY } from './constants';

export default (Child, contextTypes) => {
  const ProxyComponent = function ContextProxyComponent(props, context) {
    const nextProps = {
      [PORT_CONTEXT_KEY]: [context, props],
    };
    return React.createElement(Child, nextProps);
  };

  ProxyComponent.contextTypes = contextTypes;
  return ProxyComponent;
};
