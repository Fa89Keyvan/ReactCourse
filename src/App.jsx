import React from 'react';
import './App.css';
import Navbar from './Navbar'
// import SessionOne from './session1/SessionOne'
import CoursesForm from "./session2/CoursesForm";

function App() {
  return (
    <>
    <Navbar/>
    <div className="container-fluid">
      {/* <SessionOne/> */}
      <CoursesForm/>
    </div>
    </>
  );
}

export default App;
