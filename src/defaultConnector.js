import React, { Component } from 'react';

const SHALLOW_OBJECT = {};
Object.freeze(SHALLOW_OBJECT);

export default function defaultConnector(mapContextToProps, shouldUpdate) {
  return function connector(Child) {
    return (class ContextConnector extends Component {
      state = {
        provideProps: mapContextToProps(SHALLOW_OBJECT, this.props),
      };
      componentWillReceiveProps(nextProps) {
        this.setState({
          provideProps: mapContextToProps(SHALLOW_OBJECT, nextProps),
        });
      }
      shouldComponentUpdate(nextProps, nextState) {
        return shouldUpdate ? shouldUpdate(nextState.provideProps, this.state.provideProps) : true;
      }
      render() {
        return React.createElement(Child, {
          ...this.props,
          ...this.state.provideProps,
        });
      }
    });
  };
}
