import PropTypes from 'prop-types';

export const nativeTypeToPropType = {
  string: PropTypes.string,
  number: PropTypes.number,
  boolean: PropTypes.bool,
  symbol: PropTypes.symbol,
  function: PropTypes.func,
  undefined: PropTypes.any,
};
export const PORT_CONTEXT_KEY = '@@connectContext.CONNECTOR_CONTEXT_TEMPORARY_CONTEXT_PROP';
