import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';
import { Link } from 'react-router-dom';
import logo from './../../assets/img/logo.svg';
import profile from './../../assets/img/profile.png';

const Inbox = (props) => (
  <div>
    <div id="inbox-page">
      <nav>
        <div className="logo">
          <div className="logo-image">
            <Link to="/dashboard" className="ps-0">
              <img src={logo} className="filter-blue" alt="logo" />
            </Link>
          </div>

          <span className="logo_name">CRM</span>
        </div>

        <div className="nav-wrap">
          <ul className="nav-items list-unstyled">
            <li className="nav-item">
              <Link to="/dashboard" className="ps-0 nav-link">
                <i className="uil uil-chart-pie-alt nav-icon"></i>
                <span className="nav-text">Dahsboard</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/inbox" className="ps-0 nav-link">
                <i className="uil uil-chart-pie-alt nav-icon"></i>
                <span className="nav-text">Inbox</span>
              </Link>
            </li>
          </ul>
          <div className="nav-documentation">
            <i className="uil uil-question-circle"></i>
            <h6>Need Help?</h6>
            <p>Please check our docs</p>
            <button>Document</button>
          </div>
        </div>
      </nav>

      <main className="dashboard">
        <header className="header-container shadow-sm">
          <div className="search-box">
            <i className="uil uil-search"></i>
            <input type="text" placeholder="Search for a contact" />
          </div>

          <div className="profile-container">
            <i className="uil uil-bell profile-notification"></i>
            <div className="profile-info">
              <span className="profile-name">Hello,Franklin</span>
              <p className="profile-role">Super Admin</p>
            </div>
          </div>

          <img className="profile-img" src={profile} alt="profile" />
        </header>

        <div className="dash-email">
          <h5 className="dash-email-text">Inbox</h5>
          <div id="email-container">
            <div id="box-1">
              <button className="compose-button">Compose</button>
              <ul className="email-menu list-unstyled text-decoration-none">
                <li className="email-menu-item">
                  <a href="#" className="email-menu-link text-decoration-none">
                    <i className="uil uil-inbox"></i>
                    <span>Inbox</span>
                  </a>
                </li>

                <li className="email-menu-item">
                  <a href="#" className="email-menu-link text-decoration-none">
                    <i className="uil uil-users-alt"></i>
                    <span>Lead</span>
                  </a>
                </li>

                <li className="email-menu-item">
                  <a href="#" className="email-menu-link text-decoration-none">
                    <i className="uil uil-bullseye"></i>
                    <span>Prospect</span>
                  </a>
                </li>

                <li className="email-menu-item">
                  <a href="#" className="email-menu-link text-decoration-none">
                    <i className="uil uil-user"></i>
                    <span>Customer</span>
                  </a>
                </li>

                <li className="email-menu-item">
                  <a href="#" className="email-menu-link text-decoration-none">
                    <i className="uil uil-file"></i>
                    <span>Spam</span>
                  </a>
                </li>

                <li className="email-menu-item">
                  <a href="#" className="email-menu-link text-decoration-none">
                    <i className="uil uil-times-circle"></i>
                    <span>Closed</span>
                  </a>
                </li>
              </ul>
            </div>

            <div id="box-2">
              <div className="email-preview">
                <div className="email-box">
                  <div className="email-checkbox">
                    <i className="uil uil-square-shape"></i>
                    <i className="uil uil-star"></i>
                  </div>
                  <div className="email-name">
                    <span>Peter,me </span>
                  </div>
                  <div className="email-body">
                    <span>Hello Trip home from Colombo has been arranged, then...</span>
                  </div>
                  <div className="email-date">
                    <span>Mar 6</span>
                  </div>
                </div>

                <div className="email-box">
                  <div className="email-checkbox">
                    <i className="uil uil-square-shape"></i>
                    <i className="uil uil-star"></i>
                  </div>
                  <div className="email-name">
                    <span>Charukaw, me</span>
                  </div>
                  <div className="email-body">
                    <span>Since you asked... and I am inconceivably bored at the train...</span>
                  </div>
                  <div className="email-date">
                    <span>Mar 4</span>
                  </div>
                </div>

                <div className="email-box">
                  <div className="email-checkbox">
                    <i className="uil uil-square-shape"></i>
                    <i className="uil uil-star"></i>
                  </div>
                  <div className="email-name">
                    <span>Stack Exchange</span>
                  </div>
                  <div className="email-body">
                    <span>1 new items in your Stackexchange inbox..</span>
                  </div>
                  <div className="email-date">
                    <span>Mar 2</span>
                  </div>
                </div>

                <div className="email-box">
                  <div className="email-checkbox">
                    <i className="uil uil-square-shape"></i>
                    <i className="uil uil-star"></i>
                  </div>
                  <div className="email-name">
                    <span>Google Drive Team</span>
                  </div>
                  <div className="email-body">
                    <span>Trip home from Colombo has been arranged, then...</span>
                  </div>
                  <div className="email-date">
                    <span>Mar 1</span>
                  </div>
                </div>

                <div className="email-box">
                  <div className="email-checkbox">
                    <i className="uil uil-square-shape"></i>
                    <i className="uil uil-star"></i>
                  </div>
                  <div className="email-name">
                    <span>Peter, me</span>
                  </div>
                  <div className="email-body">
                    <span>Colombo has been arranged, then...</span>
                  </div>
                  <div className="email-date">
                    <span>Feb 29</span>
                  </div>
                </div>

                <div className="email-box">
                  <div className="email-checkbox">
                    <i className="uil uil-square-shape"></i>
                    <i className="uil uil-star"></i>
                  </div>
                  <div className="email-name">
                    <span>me, Susanna</span>
                  </div>
                  <div className="email-body">
                    <span>Hello Trip home from Colombo has been arranged, then...</span>
                  </div>
                  <div className="email-date">
                    <span>Feb 28</span>
                  </div>
                </div>

                <div className="email-box">
                  <div className="email-checkbox">
                    <i className="uil uil-square-shape"></i>
                    <i className="uil uil-star"></i>
                  </div>
                  <div className="email-name">
                    <span>Tobias Berggren</span>
                  </div>
                  <div className="email-body">
                    <span>Lets go fishing! Hey, You wanna join me and Fred at the...</span>
                  </div>
                  <div className="email-date">
                    <span>Feb 26</span>
                  </div>
                </div>

                <div className="email-box">
                  <div className="email-checkbox">
                    <i className="uil uil-square-shape"></i>
                    <i className="uil uil-star"></i>
                  </div>
                  <div className="email-name">
                    <span>Erik, me </span>
                  </div>
                  <div className="email-body">
                    <span>Hello Trip home from Colombo has been arranged, then...</span>
                  </div>
                  <div className="email-date">
                    <span>Feb 25</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
);

export default Inbox;
