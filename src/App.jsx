import React from 'react';
import './App.css';
import Navbar from './Navbar'
import SessionOne from './session1/SessionOne'

function App() {
  return (
    <>
    <Navbar/>
    <div className="container-fluid">
      <SessionOne/>
    </div>
    </>
  );
}

export default App;
