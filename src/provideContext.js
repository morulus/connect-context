/* eslint no-param-reassign: 0 */
import React, { Component } from 'react';
import invariant from 'invariant';
import mapStaticContextToTypes from './mapStaticContextToTypes';

export default function provideContext(contextProps, contextTypes) {
  let getChildContext = contextProps;
  const contextPropsType = typeof contextProps;
  const contextTypesType = typeof contextTypes;
  invariant(
    contextPropsType === 'function' || contextPropsType === 'object',
    `contextProps must be a function or object, '${contextPropsType}' given;`,
  );
  invariant(
    contextPropsType !== 'function' || contextTypesType === 'object',
    'If contextProps is function, contextTypes required',
  );
  if (contextPropsType === 'object') {
    getChildContext = () => contextProps;
    if (!contextTypes) {
      contextTypes = mapStaticContextToTypes(contextProps);
    }
  } else {
    getChildContext = function getOriginChildContext() {
      return contextProps(this.props, this.state);
    };
  }
  return Child => (class ContextProvider extends Component {
    static childContextTypes = contextTypes;
    getChildContext = getChildContext;
    render() {
      return <Child {...this.props} />;
    }
  });
}
