/* eslint import/no-mutable-exports: 0, global-require: 0, import/no-dynamic-require: 0 */
import createContextConnector from './createContextConnector';
import noReduxFound from './noReduxFound';

var connect = void 0;
try {
  var reduxConnect = require('react-redux').connect;
  connect = createContextConnector(reduxConnect);
} catch (e) {
  connect = noReduxFound;
}

export { connect };
import _connectContext from './connectContext';
export { _connectContext as connectContext };
import _provideContext from './provideContext';
export { _provideContext as provideContext };
import _acceptContext from './acceptContext';
export { _acceptContext as acceptContext };
import _createProvider from './createProvider';
export { _createProvider as createProvider };