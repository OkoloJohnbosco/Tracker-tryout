import React, { Component } from "react";

function asyncComponent(WrappedComponent) {
  return class extends Component {
    state = {
      component: null,
    };

    componentDidMount() {
      WrappedComponent().then((cmp) =>
        this.setState({ component: cmp.default })
      );
    }
    render() {
      const C = this.state.component;
      return C ? <C {...this.props} /> : null;
    }
  };
}
export default asyncComponent;
