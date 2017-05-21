/* eslint no-restricted-syntax: 0 */
import PropTypes from 'prop-types';
import { nativeTypeToPropType } from './constants';

export default function mapStaticContextToTypes(context) {
  var contextTypes = {};
  for (var prop in context) {
    if (Object.prototype.hasOwnProperty.call(context, prop)) {
      var nativeType = typeof context[prop];
      switch (nativeType) {
        case 'object':
          if (context[prop] instanceof Array) {
            contextTypes[prop] = PropTypes.array;
          } else {
            contextTypes[prop] = PropTypes.object;
          }
          break;
        default:
          contextTypes[prop] = nativeTypeToPropType[nativeType] || PropTypes.any;
      }
    }
  }
  return contextTypes;
}