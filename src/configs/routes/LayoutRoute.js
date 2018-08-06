import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

class LayoutRoute extends Component {
  static propTypes = {
    path: PropTypes.string,
    Component: PropTypes.func,
    Layout: PropTypes.func
  }

  render() {
    const { path, Component, Layout } = this.props;

    return <Route path={path} render={routerProps => {
        return (
          <Layout>
            <Component {...routerProps} />
          </Layout>
        );
      }}
    />;
  }
}

export default LayoutRoute;