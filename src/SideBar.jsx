import React, { Component } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'

export default class Navbar extends Component {
    render() {
        return (
          <div className="sidebar" data-color="purple" data-background-color="white" data-image="../assets/img/sidebar-1.jpg">
          <div className="logo">
            <a href="http://www.creative-tim.com" className="simple-text logo-normal">
              تیم خلاق
            </a>
          </div>
          <div className="sidebar-wrapper">
            <ul className="nav">
              <li className="nav-item active">
                <a className="nav-link" href="./dashboard.html">
                  <i className="fa fa-box"></i>
                  <p>داشبورد</p>
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="./user.html">
                  <i className="fa fa-user"></i>
                  <p>پروفایل کاربر</p>
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="./tables.html">
                  <i className="fa fa-table"></i>
                  <p>جدول</p>
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="./map.html">
                  <i className="fa fa-map"></i>
                  <p>نقشه</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
        )
    }
}
