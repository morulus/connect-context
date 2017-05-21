var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/* eslint no-param-reassign: 0 */
import invariant from 'invariant';

export default function acceptContext(contextTypes) {
  var typeOfContextTypes = typeof contextTypes;
  invariant(contextTypes !== 'object', 'acceptContext: first argument accepted as \'' + typeOfContextTypes + '\', expected an object, ');
  return function (Child) {
    Child.contextTypes = _extends({}, Child.contextTypes, contextTypes);
    return Child;
  };
}