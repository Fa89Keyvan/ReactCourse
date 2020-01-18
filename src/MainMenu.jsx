import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class MainMenu extends Component {
    render() {
        return (
            <div className="sidebar" data-color="purple" data-background-color="white" data-image="../assets/img/sidebar-1.jpg">
                <div className="logo">
                    <a href="http://www.creative-tim.com" className="simple-text logo-normal">
                       کیوان فتح آبادی
                    </a>
                </div>
                <div className="sidebar-wrapper">
                    <ul className="nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/dashboard" activeClassName="active">
                                <i className="fa fa-box"></i>
                                <p>داشبورد</p>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="./SessionOne" activeClassName="active">
                                <i className="fa fa-user"></i>
                                <p>جلسه اول</p>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link " to="./SessionTwo" activeClassName="active">
                                <i className="fa fa-table"></i>
                                <p>جلسه دوم</p>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
