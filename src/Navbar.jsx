import React, { Component } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

export default class Navbar extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-md bg-dark navbar-dark">
            
            <a class="navbar-brand" href="#">K.Fathabadi</a>
          
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
              <span class="navbar-toggler-icon"></span>
            </button>
          
            <div class="collapse navbar-collapse" id="collapsibleNavbar">
              <ul class="navbar-nav">
                {/* <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
                </li> */}
              </ul>
            </div>
          </nav> 
        )
    }
}
