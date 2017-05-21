/* eslint no-restricted-syntax: 0 */
import createContextConnector from './createContextConnector';
import defaultConnector from './defaultConnector';

export default createContextConnector(defaultConnector);