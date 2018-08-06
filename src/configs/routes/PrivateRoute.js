import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LayoutRoute from './LayoutRoute';
import { UserService } from 'modules/user';

class PrivateRoute extends Component {
  static propTypes = {
    path: PropTypes.string,
    Component: PropTypes.func,
    Layout: PropTypes.func
  }

  render() {
    const { exact, path, Component, Layout } = this.props;

    if (UserService && UserService.isLogged) {
      return (
        <LayoutRoute
          path={path}
          Component={Component}
          Layout={Layout} />
      );
    }

    return UserService.logout();
  }
}

export default PrivateRoute;