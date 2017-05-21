import React from 'react';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import PropTypes from 'prop-types';
import provideContext from './es/provideContext';
import connectContext from './es/connectContext';

function noContextTypes() {
  const Child = connectContext({
    message: PropTypes.string.isRequired,
  }, ({ message }) => ({
    contextMessage: message,
  }))(({ contextMessage, ownPropMessage }) => <div>{contextMessage},{ownPropMessage}</div>);
  const message = 'Hello, Child!';
  const Provider = provideContext(() => ({
    message,
  }))(({ children }) => children);
  shallow(<Provider>
    <Child
      ownPropMessage="Hello, Provider!"
    />
  </Provider>);
}

describe('connectContext', () => {
  it('Provide & connect, mixin up with own prop', () => {
    const Child = connectContext({
      message: PropTypes.string.isRequired,
    }, ({ message }) => ({
      contextMessage: message,
    }))(({ contextMessage, ownPropMessage }) => <div>{contextMessage},{ownPropMessage}</div>);
    const message = 'Hello, Child!';
    const Provider = provideContext({
      message,
    })(({ children }) => children);
    expect(toJson(mount(<Provider>
      <Child
        ownPropMessage="Hello, Provider!"
      />
    </Provider>))).toMatchSnapshot();
  });

  it('Type/args errors', () => {
    expect(noContextTypes).toThrowError('If contextProps is function, contextTypes required');
  });
});
