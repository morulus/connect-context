import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { createStore } from 'redux';
import uuid4 from 'uuid4';
import PropTypes from 'prop-types';
import { provideContext, createProvider, connectContext, connect } from './src';

const INITIAL_STATE = {
  a: {
    b: {
      c: 124816,
    },
  },
};

function reducer(state = INITIAL_STATE) {
  return state;
}

function demoSelector(a) {
  return a.b.c;
}

function noContextTypes() {
  const Child = connectContext({
    message: PropTypes.string.isRequired,
  }, ({ message }) => ({
    contextMessage: message,
  }))(({ contextMessage, ownPropMessage }) => <div>{contextMessage},{ownPropMessage}</div>);
  const message = 'Hello, Child!';
  const ContextProvider = provideContext(() => ({
    message,
  }))(({ children }) => children);
  mount(<ContextProvider>
    <Child
      ownPropMessage="Hello, Provider!"
    />
  </ContextProvider>);
}

describe('connectContext, createProvider', () => {
  it('Provide & connect, mixin up with own prop', () => {
    const mock = {
      a: uuid4(),
      b: uuid4(),
    };
    const Child = jest.fn(({ contextMessage, ownPropMessage }) => {
      expect(contextMessage).toBe(mock.a);
      expect(ownPropMessage).toBe(mock.b);
      return <div>{contextMessage},{ownPropMessage}</div>;
    });
    const ConnectedChild = connectContext({
      message: PropTypes.string.isRequired,
    }, ({ message }) => ({
      contextMessage: message,
    }))(Child);
    const ContextProvider = createProvider({
      message: mock.a,
    });
    mount(<ContextProvider>
      <ConnectedChild
        ownPropMessage={mock.b}
      />
    </ContextProvider>);
    expect(Child).toHaveBeenCalled();
  });

  it('Type/args errors', () => {
    expect(noContextTypes).toThrowError('If contextProps is function, contextTypes required');
  });

  it('Proxy props', () => {
    const mock = {
      a: uuid4(),
      b: uuid4(),
      c: uuid4(),
    };
    const context = {
      a: mock.a,
    };
    const Child = jest.fn(({ a, b, children }) => {
      expect(a).toBe(mock.a);
      expect(b).toBe(mock.b);
      expect(children).toBe(mock.c);
      return <div />;
    });
    const ConnectedChild = connectContext({
      a: PropTypes.string.isRequired,
    })(Child);
    const ContextProvider = createProvider(context);
    mount(<ContextProvider>
      <ConnectedChild
        b={mock.b}
      >
        {mock.c}
      </ConnectedChild>
    </ContextProvider>);
    expect(Child).toHaveBeenCalled();
  });

  it('Pick up only typed context props', () => {
    const mock = {
      a: uuid4(),
      b: uuid4(),
      c: uuid4(),
    };
    const context = {
      a: mock.a,
      b: mock.b,
      c: mock.c,
    };
    const Child = jest.fn(({ a, b, c }) => {
      expect(a).toBe(mock.a);
      expect(b).toBe(mock.b);
      expect(c).toBe(undefined);
      return <div />;
    });
    const ConnectedChild = connectContext({
      a: PropTypes.string.isRequired,
      b: PropTypes.string,
    })(Child);
    const ContextProvider = createProvider(context);
    mount(<ContextProvider>
      <ConnectedChild />
    </ContextProvider>);
    expect(Child).toHaveBeenCalled();
  });

  it('getChildContext as a function with props', () => {
    const mock = {
      a: 1,
      b: 2,
      c: 3,
    };
    const context = ({ a, b, c }) => ({
      summ: a + b + c,
    });
    const Child = jest.fn(({ summ }) => {
      expect(summ).toBe(mock.a + mock.b + mock.c);
      return <div />;
    });
    const ConnectedChild = connectContext({
      summ: PropTypes.number,
    })(Child);
    const ContextProvider = createProvider(context, {
      summ: PropTypes.number,
    });
    mount(<ContextProvider
      a={mock.a}
      b={mock.b}
      c={mock.c}
    >
      <ConnectedChild />
    </ContextProvider>);
    expect(Child).toHaveBeenCalled();
  });
});

describe('connect', () => {
  let Child;
  beforeAll(() => {
    Child = jest.fn(({ data }) => {
      expect(data).toBe(demoSelector(INITIAL_STATE.a));
      return <div />;
    });
    const store = createStore(reducer);
    const ConnectedChild = connect({
      selector: PropTypes.func,
    }, ({ selector }, { a }) => ({
      data: selector(a),
    }))(Child);
    const ContextProvider = provideContext({
      selector: demoSelector,
    })(() => <Provider store={store}>
      <ConnectedChild />
    </Provider>);
    mount(<ContextProvider />);
  });


  it('Child is a function', () => {
    expect(typeof Child).toBe('function');
  });

  it('Child have been called', () => {
    expect(Child).toHaveBeenCalled();
  });
});
