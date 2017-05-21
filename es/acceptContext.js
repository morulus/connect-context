/* eslint no-param-reassign: 0 */
import invariant from 'invariant';

export default function acceptContext(contextTypes) {
  const typeOfContextTypes = typeof contextTypes;
  invariant(contextTypes !== 'object', `acceptContext: first argument accepted as '${typeOfContextTypes}', expected an object, `);
  return (Child) => {
    Child.contextTypes = {
      ...Child.contextTypes,
      ...contextTypes,
    };
    return Child;
  };
}
