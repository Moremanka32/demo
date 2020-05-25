import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import {Home} from "./components/Home";
import {Form} from './components/Form';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path={'/form'} component={Form} />
      </Switch>
    );
  }
}
