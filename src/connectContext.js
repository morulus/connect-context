/* eslint no-restricted-syntax: 0 */
import React from 'react';
import { connect } from 'react-redux';
import invariant from 'invariant';

const PORT_CONTEXT_KEY = '@@connectContext.CONNECTOR_CONTEXT_TEMPORARY_CONTEXT_PROP';
const getHigherProxyComponent = (Child, contextTypes) => {
  const ProxyComponent = function ContextProxyComponent(props, context) {
    const nextProps = {
      [PORT_CONTEXT_KEY]: [context, props],
    };
    return React.createElement(Child, nextProps, nextProps.children);
  };

  ProxyComponent.contextTypes = contextTypes;
  return ProxyComponent;
};
/* eslint-disable react/prop-types */
const getLowerProxyComponent = Child => function ContextLowerProxyComponent(props) {
  const omittedProps = {};
  for (const prop in props) {
    if (
        Object.prototype.hasOwnProperty.call(props, prop)
      ) {
      if (prop !== PORT_CONTEXT_KEY) {
        omittedProps[prop] = props[prop];
      } else {
        Object.assign(omittedProps, props[prop][1]);
      }
    }
  }
  return React.createElement(Child, omittedProps, props.children);
};
/* eslint-enable */

export default function connectContext(contextTypes, mapContextToProps, ...others) {
  const typeOfContextTypes = typeof contextTypes;
  invariant(contextTypes !== 'object', `connectContext: first argument accepted as '${typeOfContextTypes}', expected an object, `);
  return (Child) => {
    const ProxyLower = getLowerProxyComponent(Child);
    const ConnectedToRedux = connect(
      (state, props) => mapContextToProps(
        props[PORT_CONTEXT_KEY][0],
        state,
        props[PORT_CONTEXT_KEY][1],
      ),
      ...others,
    )(ProxyLower);
    return getHigherProxyComponent(ConnectedToRedux, contextTypes);
  };
}
