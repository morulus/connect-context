connect-context
==

Connect/provide context to/from the stateless component

```js
import { createProvider, connectContext } from 'connect-context';

const Provider = createProvider({
  Layout: ({ children }) => (
    <div class="your-awesome-layout">
      {children}
    </div>
  ),
});

const contextTypes = {
  Layout: PropTypes.func.isRequired,
};

connectContext(contextTypes)
(({ Layout }) => (<Layout>
  Hello, React!
</Layout>));

// <div class="your-awesome-layout">Hello, React</div>
```

Docs
----

### provideContext(contextProps, [contextTypes]) : connector

Prepare context connector, which can be applied on an existing component.

_Params_:

- `contextProps` {object|function} Context object or getChildContext function;
  - If is a function, accepts `props`, `state` parameters.
- `contextTypes` {object} Context types (in case of contextProps is a function)

_Returns_: {function} connector

### createProvider(contextProps, [contextTypes]) : Component

Create React component, which provides specified context.

_Params_:

- `contextProps` {object|function} Context itselfs or getChildContext function;
  - If is a function, accepts `props`, `state` parameters.
- `contextTypes` {object} Context types (in case of contextProps is a function)

_Returns_: {function} Component

### connectContext(contextTypes, mapContextToProps): connector

Connect context (specified in contextTypes) to the component.

_Params_:

- `contextTypes` {object} Context types
- `mapContextToProps(context, props)` {function} Map context to the props (by the defaults maps the entire context to the props)

_Returns_: {function} connector

### connect(contextTypes, mapAllToProps): connector

Decorator for [react-redux](https://github.com/reactjs/react-redux) _connect_, which provides you with a possibility to map context to props and state to props in the same function.

_Params_:

- `contextTypes` {object} Context types
- `mapAllToProps(context, state, props)` {function} Map context, state, and own props

_Returns_: {function} connector

__*__ Function `connect` requires `react-redux` as optional dependence. It means that if your build envelopment has no react-redux, connect function will be unreachable.

Author
----

Vladimir Kalmykov <vladimirmorulus@gmail.com>

License
----

MIT, 2017
