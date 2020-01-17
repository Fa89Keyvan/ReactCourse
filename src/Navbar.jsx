import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
          <div className="container-fluid">
            <div className="navbar-wrapper">
              <a className="navbar-brand" href="#pablo">داشبورد</a>
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="sr-only"></span>
              <span className="navbar-toggler-icon icon-bar"></span>
              <span className="navbar-toggler-icon icon-bar"></span>
              <span className="navbar-toggler-icon icon-bar"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end">
              <div className="navbar-form">
                <form className="input-group no-border">
                  <input type="text" value="" className="form-control" placeholder="جستجو..." />
                  <button type="button" className="btn btn-white btn-round btn-just-icon">
                    <i className="fa fa-search"></i>
                    <div className="ripple-container"></div>
                  </button>
                </form>
              </div>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="#pablo">
                    <i className="fa fa-box"></i>
                    <p className="d-lg-none d-md-block">
                      آمارها
                  </p>
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fa fa-bell"></i>
                    <span className="notification">۵</span>
                    <p className="d-lg-none d-md-block">
                      اعلان‌ها
                  </p>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                    <a className="dropdown-item" href="#">محمدرضا به ایمیل شما پاسخ داد</a>
                    <a className="dropdown-item" href="#">شما ۵ وظیفه جدید دارید</a>
                    <a className="dropdown-item" href="#">از حالا شما با علیرضا دوست هستید</a>
                    <a className="dropdown-item" href="#">اعلان دیگر</a>
                    <a className="dropdown-item" href="#">اعلان دیگر</a>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#pablo">
                    <i className="fa fa-user"></i>
                    <p className="d-lg-none d-md-block">
                      حساب کاربری
                  </p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    )
  }
}
