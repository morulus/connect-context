/* eslint no-restricted-syntax: 0, react/prop-types: 0 */
import React from 'react';
import { PORT_CONTEXT_KEY } from './constants';

export default (function (Child) {
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
    return React.createElement(Child, omittedProps, props.children);
  };
});
/* eslint-enable */