import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';
import { Link } from 'react-router-dom';
import logo from './../../assets/img/logo.svg';
import chart from './../../assets/img/chart.png';
import profile from './../../assets/img/profile.png';

const Dashboard = (props) => (
  <div>
    <nav
      className="position-fixed top-0 h-100 start-0 border-end bg-white p-3"
      style={{ width: '250px' }}
    >
      <div className="logo d-flex align-middle pb-2">
        <div className="logo-image d-flex justify-content-center" style={{ minWidth: '45px' }}>
          <Link to="/dashboard" className="ps-0">
            <img src={logo} className="filter-blue" style={{ width: '0px' }} alt="logo" />
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
              <i className="uil uil-chart-pie-alt nav-icon d-flex align-items-center justify-content-center h-100 fs-5"></i>
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
      <section className="dash-content pt-5">
        <div className="dash-chart p-5">
          <img src={chart} height="100%" width="100%" alt="chart" />
        </div>
        <div className="overview">
          <div className="title">
            <span className="text px-5 fs-3 fw-bolder">Analytics Overview</span>
          </div>

          <div className="boxes p-5 d-flex align-items-center justify-content-between flex-wrap">
            <div className="box d-flex flex-column align-items-center rounded-4 shadow-sm p-4 bg-white">
              <i className="uil uil-user box-icon fs-2"></i>
              <span className="box-number fs-1">4.5k</span>
              <span className="box-text fs-5 fw-semibold">Total Customers</span>
            </div>
            <div className="box d-flex flex-column align-items-center rounded-4 shadow-sm p-4 bg-white">
              <i className="uil uil-bullseye box-icon fs-2"></i>
              <span className="box-number fs-1">3.5k</span>
              <span className="box-text fs-5 fw-semibold">Total Prospects</span>
            </div>
            <div className="box d-flex flex-column align-items-center rounded-4 shadow-sm p-4 bg-white">
              <i className="uil uil-users-alt box-icon fs-2"></i>
              <span className="box-number fs-1">38.20</span>
              <span className="box-text fs-5 fw-semibold">Total Lead</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
);

export default Dashboard;
