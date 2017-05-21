import PropTypes from 'prop-types';

export var nativeTypeToPropType = {
  string: PropTypes.string,
  number: PropTypes.number,
  boolean: PropTypes.bool,
  symbol: PropTypes.symbol,
  function: PropTypes.func,
  undefined: PropTypes.any
};
export var PORT_CONTEXT_KEY = '@@connectContext.CONNECTOR_CONTEXT_TEMPORARY_CONTEXT_PROP';