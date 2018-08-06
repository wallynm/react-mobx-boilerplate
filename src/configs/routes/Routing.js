import React, { Component } from 'react';
import { Switch, BrowserRouter, Redirect, Router } from 'react-router-dom';
import PropTypes from 'prop-types';

import LayoutRoute from './LayoutRoute';
import PrivateRoute from './PrivateRoute';

import { Logged, External } from 'components/Layout';


console.info(Logged)

import Routes from 'modules/app/routes';

class Routing extends Component {
  render() {
    const routes = Routes.map((item, index) => {
      const Layout = (item.layout === 'logged') ? Logged : External

      if (item.private) {
        return <PrivateRoute exact path={item.path} key={item.path} Component={item.component} Layout={Layout} />
      } else {
        return <LayoutRoute exact path={item.path} key={item.path} Component={item.component} Layout={Layout} />        
      }
    });

    return (
      <Switch>
        {routes}
        <Redirect to={"/products"} />
      </Switch>
    );
  }
}

export default Routing;