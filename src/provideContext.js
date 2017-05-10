/* eslint no-param-reassign: 0 */
import React, { Component } from 'react';
import invariant from 'invariant';
import mapStaticContextToTypes from './mapStaticContextToTypes';

export default function provideContext(contextProps, contextTypes) {
  let getChildContext = contextProps;
  const contextPropsType = typeof contextProps;
  const contextTypesType = typeof contextTypes;
  invariant(
    !(contextPropsType === 'function' || typeof contextPropsType === 'object'),
    `provideContext: contextProps must be a function or object, '${contextPropsType}' given;`,
  );
  invariant(
    !(contextPropsType === 'function' && contextTypesType === 'object'),
    'provideContext: if contextProps is function, then it requires contextTypes',
  );
  if (contextPropsType === 'object') {
    getChildContext = () => contextProps;
    if (!contextTypes) {
      contextTypes = mapStaticContextToTypes(contextProps);
    }
  } else {
    getChildContext = contextProps;
  }
  return Child => (class ContextProvider extends Component {
    static childContextTypes = contextTypes;
    getChildContext = getChildContext;
    render() {
      return <Child {...this.props} />;
    }
  });
}
