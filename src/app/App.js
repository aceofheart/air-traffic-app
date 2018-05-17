import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { StartPage } from "./start-page/StartPage";
import { FlightListPage } from "./flight-list/FlightListPage";

import './App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path="/flights" component={FlightListPage} />
          <Route exact path="/" component={StartPage} />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
