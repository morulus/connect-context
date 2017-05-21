/* eslint import/no-mutable-exports: 0, global-require: 0, import/no-dynamic-require: 0 */
import createContextConnector from './createContextConnector';
import noReduxFound from './noReduxFound';

let connect;
try {
  const reduxConnect = require('react-redux').connect;
  connect = createContextConnector(reduxConnect);
} catch (e) {
  connect = noReduxFound;
}

export { connect };
export connectContext from './connectContext';
export provideContext from './provideContext';
export acceptContext from './acceptContext';
