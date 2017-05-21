export default function noReduxFound() {
  throw new Error('connect-context requires react-redux, but not found');
}
