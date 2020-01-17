import React from 'react';
import './App.css';
import SideBar from './SideBar';
import Navbar from './Navbar';

function App() {
  return (
    <div class="wrapper ">
      <SideBar/>
      <div className="main-panel">
        <Navbar/>
        <div className="container-fluid pt-5">
          <div className="row">
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
