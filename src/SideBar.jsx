import React, { Component } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MainMenu from './MainMenu';
import Dashboard from './Dashboard';
import SessionOne from './session1/SessionOne'
import CoursesForm from './session2/CoursesForm';

export default class SideBar extends Component {
  render() {
    return (
      <Router>
        <MainMenu />
        <Switch>
          <Route exact path="/"           component={Dashboard} />
          <Route exact path="/SessionOne" component={SessionOne} />
          <Route exact path="/SessionTwo" component={CoursesForm} />
        </Switch>
      </Router>
    )
  }
}
