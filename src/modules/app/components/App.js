import React, { Component } from "react";
import ReactDOM from "react-dom";
import { withRouter } from "react-router-dom";
import { Provider } from 'mobx-react';
import Routes from 'modules/app/routes';
import { Switch, BrowserRouter, Redirect, Router } from 'react-router-dom';

import { Stores, Routing } from 'configs';
import History from 'configs/routes/History';

import 'components/Icon'
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider {...Stores}>
        <Router history={History}>
          <Routing/>
        </Router>
      </Provider>
    )
  }
};

export default App;