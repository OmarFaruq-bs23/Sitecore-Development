import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';
import { Link } from 'react-router-dom';
import logo from './../../assets/img/logo.svg';
import profile from './../../assets/img/profile.png';

const Inbox = (props) => (
  <div>
    <div id="inbox-page">
      <nav
        className="position-fixed top-0 h-100 start-0 border-end bg-white p-3"
        style={{ width: '250px' }}
      >
        <div className="logo d-flex align-middle pb-2">
          <div className="logo-image d-flex justify-content-center" style={{ minWidth: '45px' }}>
            <Link to="/dashboard" className="ps-0">
              <img src={logo} className="filter-blue" style={{ width: '40px' }} alt="logo" />
            </Link>
          </div>
          <span className="logo_name display-6 fw-bolder ml-3">CRM</span>
        </div>
        <div className="nav-wrap mt-4 d-flex flex-column justify-content-between">
          <ul className="nav-items list-unstyled">
            <li className="nav-item">
              <Link
                to="/dashboard"
                className="nav-link d-flex align-items-center position-relative text-decoration-none"
                style={{ height: '50px' }}
              >
                <i className="uil uil-chart-pie-alt nav-icon d-flex align-items-center justify-content-center h-100 fs-5"></i>
                <span className="nav-text fs-5 fw-normal">Dahsboard</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/inbox"
                className="nav-link d-flex align-items-center position-relative text-decoration-none"
                style={{ height: '50px' }}
              >
                <i className="uil uil-envelope nav-icon d-flex align-items-center justify-content-center h-100 fs-5"></i>
                <span className="nav-text fs-5 fw-normal">Inbox</span>
              </Link>
            </li>
          </ul>
          <div className="nav-documentation rounded p-3 text-white">
            <i className="uil uil-question-circle fs-1"></i>
            <h5 className="h5 pt-2">Need Help?</h5>
            <p>Please check our docs</p>
            <button className="w-100 mt-2 rounded fs-6 border-0 fw-bold">Document</button>
          </div>
        </div>
      </nav>

      <main className="dashboard position-relative min-vh-100">
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
          <h5 className="dash-email-text fw-bold">Inbox</h5>
          <div id="email-container" className="d-flex">
            <div id="box-1" className="bg-white shadow-sm rounded w-25 h-100 p-4">
              <button className="compose-button text-white w-100 px-0 py-2 mb-3 rounded fs-6 border-0 fw-bold">
                Compose
              </button>
              <ul className="email-menu list-unstyled text-decoration-none">
                <li className="email-menu-item pt-2 pb-2">
                  <a href="#" className="email-menu-link text-decoration-none fs-5 fw-semibold">
                    <i className="uil uil-inbox me-2"></i>
                    <span>Inbox</span>
                  </a>
                </li>

                <li className="email-menu-item pt-2 pb-2">
                  <a href="#" className="email-menu-link text-decoration-none fs-5 fw-semibold">
                    <i className="uil uil-users-alt me-2"></i>
                    <span>Lead</span>
                  </a>
                </li>

                <li className="email-menu-item pt-2 pb-2">
                  <a href="#" className="email-menu-link text-decoration-none fs-5 fw-semibold">
                    <i className="uil uil-bullseye me-2"></i>
                    <span>Prospect</span>
                  </a>
                </li>

                <li className="email-menu-item pt-2 pb-2">
                  <a href="#" className="email-menu-link text-decoration-none fs-5 fw-semibold">
                    <i className="uil uil-user me-2"></i>
                    <span>Customer</span>
                  </a>
                </li>

                <li className="email-menu-item pt-2 pb-2">
                  <a href="#" className="email-menu-link text-decoration-none fs-5 fw-semibold">
                    <i className="uil uil-file me-2"></i>
                    <span>Spam</span>
                  </a>
                </li>

                <li className="email-menu-item pt-2 pb-2">
                  <a href="#" className="email-menu-link text-decoration-none fs-5 fw-semibold">
                    <i className="uil uil-times-circle me-2"></i>
                    <span>Closed</span>
                  </a>
                </li>
              </ul>
            </div>

            <div id="box-2" className="bg-white shadow-sm rounded w-75 mx-3 overflow-auto">
              <div className="container email-preview d-flex flex-column">
                <div className="email-box d-flex p-4 border-bottom">
                  <div className="email-checkbox col-1">
                    <i className="uil uil-square-shape"></i>
                    <i className="uil uil-star"></i>
                  </div>
                  <div className="email-name col-2">
                    <span>Peter,me (3)</span>
                  </div>
                  <div className="email-body col-8">
                    <span>Hello – Trip home from Colombo has been arranged, then...</span>
                  </div>
                  <div className="email-date col-1 text-right">
                    <span>Mar 6</span>
                  </div>
                </div>

                <div className="email-box d-flex p-4 border-bottom">
                  <div className="email-checkbox col-1">
                    <i className="uil uil-square-shape"></i>
                    <i className="uil uil-star"></i>
                  </div>
                  <div className="email-name col-2">
                    <span>Charukaw, me (7)</span>
                  </div>
                  <div className="email-body col-8">
                    <span>Since you asked... and i am inconceivably bored at the train...</span>
                  </div>
                  <div className="email-date col-1 text-right">
                    <span>Mar 4</span>
                  </div>
                </div>

                <div className="email-box d-flex p-4 border-bottom">
                  <div className="email-checkbox col-1">
                    <i className="uil uil-square-shape"></i>
                    <i className="uil uil-star"></i>
                  </div>
                  <div className="email-name col-2">
                    <span>Stack Exchange</span>
                  </div>
                  <div className="email-body col-8">
                    <span>1 new items in your Stackexchange inbox..</span>
                  </div>
                  <div className="email-date col-1 text-right">
                    <span>Mar 2</span>
                  </div>
                </div>

                <div className="email-box d-flex p-4 border-bottom">
                  <div className="email-checkbox col-1">
                    <i className="uil uil-square-shape"></i>
                    <i className="uil uil-star"></i>
                  </div>
                  <div className="email-name col-2">
                    <span>Google Drive Team</span>
                  </div>
                  <div className="email-body col-8">
                    <span>Trip home from Colombo has been arranged, then...</span>
                  </div>
                  <div className="email-date col-1 text-right">
                    <span>Mar 1</span>
                  </div>
                </div>

                <div className="email-box d-flex p-4 border-bottom">
                  <div className="email-checkbox col-1">
                    <i className="uil uil-square-shape"></i>
                    <i className="uil uil-star"></i>
                  </div>
                  <div className="email-name col-2">
                    <span>Peter, me (3)</span>
                  </div>
                  <div className="email-body col-8">
                    <span>Colombo has been arranged, then...</span>
                  </div>
                  <div className="email-date col-1 text-right">
                    <span>Feb 29</span>
                  </div>
                </div>

                <div className="email-box d-flex p-4 border-bottom">
                  <div className="email-checkbox col-1">
                    <i className="uil uil-square-shape"></i>
                    <i className="uil uil-star"></i>
                  </div>
                  <div className="email-name col-2">
                    <span>me, Susanna (11)</span>
                  </div>
                  <div className="email-body col-8">
                    <span>Hello – Trip home from Colombo has been arranged, then...</span>
                  </div>
                  <div className="email-date col-1 text-right">
                    <span>Feb 28</span>
                  </div>
                </div>

                <div className="email-box d-flex p-4 border-bottom">
                  <div className="email-checkbox col-1">
                    <i className="uil uil-square-shape"></i>
                    <i className="uil uil-star"></i>
                  </div>
                  <div className="email-name col-2">
                    <span>Tobias Berggren</span>
                  </div>
                  <div className="email-body col-8">
                    <span>Lets go fishing! – Hey, You wanna join me and Fred at the...</span>
                  </div>
                  <div className="email-date col-1 text-right">
                    <span>Feb 26</span>
                  </div>
                </div>

                <div className="email-box d-flex p-4 border-bottom">
                  <div className="email-checkbox col-1">
                    <i className="uil uil-square-shape"></i>
                    <i className="uil uil-star"></i>
                  </div>
                  <div className="email-name col-2">
                    <span>Erik, me (5)</span>
                  </div>
                  <div className="email-body col-8">
                    <span>Hello – Trip home from Colombo has been arranged, then...</span>
                  </div>
                  <div className="email-date col-1 text-right">
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
