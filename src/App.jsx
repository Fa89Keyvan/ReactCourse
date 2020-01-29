import React from 'react';
import './App.css';
import SideBar from './SideBar';
import Navbar from './Navbar';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import Dashboard from './Dashboard'
import SessionOne from './session1/SessionOne'
import CoursesForm from './session2/CoursesForm'
import MainMenu from './MainMenu';

function App() {
  return (
    <div class="wrapper ">
      <Router>
        <MainMenu />
        <div className="main-panel">
          <Navbar />
          <div className="container-fluid pt-5">
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/SessionOne" component={SessionOne} />
              <Route exact path="/SessionTwo" component={CoursesForm} />
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
