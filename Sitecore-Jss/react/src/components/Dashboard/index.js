import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';
import { Link } from 'react-router-dom';
import logo from './../../assets/img/logo.svg';
import chart from './../../assets/img/chart.png';
import profile from './../../assets/img/profile.png';

const Dashboard = (props) => (
  <div>
    <nav className="border-end">
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

        <img className="profile-img" src={profile} alt="" />
      </header>

      <section className="dash-content">
        <div className="dash-chart">
          <img src={chart} height="100%" width="100%" alt="" />
        </div>
        <div className="overview">
          <div className="title">
            <span className="text">Analytics Overview</span>
          </div>

          <div className="boxes">
            <div className="box box1">
              <i className="uil uil-user box-icon"></i>
              <span className="box-number">4.5k</span>
              <span className="box-text">Total Customers</span>
            </div>
            <div className="box box2">
              <i className="uil uil-bullseye box-icon"></i>
              <span className="box-number">3.5k</span>
              <span className="box-text">Total Prospects</span>
            </div>
            <div className="box box3">
              <i className="uil uil-users-alt box-icon"></i>
              <span className="box-number">38.20</span>
              <span className="box-text">Total Lead</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
);

export default Dashboard;
