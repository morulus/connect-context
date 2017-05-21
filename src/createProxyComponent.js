export default function createProxyComponent() {
  return function ProxyComponent(props) {
    return props.children;
  };
}
