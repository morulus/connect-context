import invariant from 'invariant';
import getLowerProxyComponent from './getLowerProxyComponent';
import getHigherProxyComponent from './getHigherProxyComponent';
import { PORT_CONTEXT_KEY } from './constants';

function defaultMapContextToProps(context) {
  return {
    ...context,
  };
}

export default function createContextConnector(connect) {
  return function connectContext(
    contextTypes,
    mapContextToProps = defaultMapContextToProps,
    ...others
  ) {
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
  };
}
