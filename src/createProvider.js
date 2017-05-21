import provideContext from './provideContext';
import createProxyComponent from './createProxyComponent';

export default function createProvider(contextProps, contextTypes) {
  return provideContext(contextProps, contextTypes)(createProxyComponent());
}
