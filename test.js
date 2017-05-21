import React from 'react';
import { Provider } from 'react-redux';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { createStore } from 'redux';
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
  shallow(<ContextProvider>
    <Child
      ownPropMessage="Hello, Provider!"
    />
  </ContextProvider>);
}

describe('connectContext, createProvider', () => {
  it('Provide & connect, mixin up with own prop', () => {
    const Child = connectContext({
      message: PropTypes.string.isRequired,
    }, ({ message }) => ({
      contextMessage: message,
    }))(({ contextMessage, ownPropMessage }) => <div>{contextMessage},{ownPropMessage}</div>);
    const message = 'Hello, Child!';
    const ContextProvider = createProvider({
      message,
    });
    expect(toJson(mount(<ContextProvider>
      <Child
        ownPropMessage="Hello, Provider!"
      />
    </ContextProvider>))).toMatchSnapshot();
  });

  it('Type/args errors', () => {
    expect(noContextTypes).toThrowError('If contextProps is function, contextTypes required');
  });
});

describe('connect', () => {
  const store = createStore(reducer);
  const Child = connect({
    selector: PropTypes.func,
  }, ({ selector }, { a }) => ({
    data: selector(a),
  }))(({ data }) => (<div>Selected: {data}</div>));
  const ContextProvider = provideContext({
    selector: demoSelector,
  })(() => <Provider store={store}>
    <Child />
  </Provider>);

  it('Child is a function', () => {
    expect(typeof Child).toBe('function');
  });

  it('ContextProvider is a function', () => {
    expect(typeof ContextProvider).toBe('function');
  });

  it('Standalone Child rendered well', () => {
    expect(toJson(shallow(<Child />))).toMatchSnapshot();
  });

  it('Composition mount', () => {
    expect(toJson(mount(<ContextProvider />))).toMatchSnapshot();
  });
});

describe('No mapContextToProps', () => {
  it('Provide & connect, mixin up with own prop without mapContextToProps', () => {
    const Child = connectContext({
      message: PropTypes.string.isRequired,
    })(({ message, ownPropMessage }) => (<div>{message},{ownPropMessage}</div>));
    const message = 'Hello, Child!';
    const ContextProvider = createProvider({
      message,
    });
    expect(toJson(mount(<ContextProvider>
      <Child
        ownPropMessage="Hello, Provider!"
      />
    </ContextProvider>))).toMatchSnapshot();
  });

  it('Type/args errors', () => {
    expect(noContextTypes).toThrowError('If contextProps is function, contextTypes required');
  });
});
