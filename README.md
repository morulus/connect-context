connect-context
==

Connect/provide context to/from the stateless component

```js
import { provideContext, connectContext } from 'connect-context';

const Provider = provideContext({
  message: 'Hello from context',
})(DIV);

const Child = connectContext({
  message: PropTypes.string.isRequired,
}, ({ message }) => ({
  contextMessage,
}))(() => (<div>{contextMessage}</div>));

// <div>Hello from context</div>
```

Docs
----

### provideContext()

_Params_:

- `contextProps` {object|function} Context itselfs or getChildContext function.
- `contextTypes` {object} Context types (in case of contextProps is a function)

_Returns_: {function} Connector

### connectContext()

_Params_:

- `contextTypes` {object} Context types
- `mapContextToProps` {function} Function, which accepts context and returns props

_Returns_: {function} Connector

Author
----

Vladimir Kalmykov <vladimirmorulus@gmail.com>

License
----

MIT, 2017
