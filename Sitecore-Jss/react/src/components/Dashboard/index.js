import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';
import { Link } from 'react-router-dom';
import logo from './../../assets/img/logo.svg';
import chart from './../../assets/img/chart.png';
import profile from './../../assets/img/profile.png';

const Dashboard = (props) => (
  <div className="h-screen w-full flex justify-center text-blue bg-gray-100">
    <div className="w-[17%] border-r-2 border-gray-100 px-2 bg-white">
      <div className="flex pl-0 lg:pl-6 h-[13vh] border-b-2 border-gray-100 items-center justify-center lg:justify-start gap-1">
        <Link to="/dashboard" className="ps-0">
          <img
            src={logo}
            className="filter-blue h-12 xl:h-14"
            style={{ width: '40px' }}
            alt="logo"
          />
        </Link>
        <h1 className="text-4xl xl:text-5xl font-extrabold hidden lg:block">CRM</h1>
      </div>
      <div className="flex flex-col justify-end h-[87vh]">
        <div className="h-1/2">
          <div
            className="py-8 pl-0 lg:pl-6 text-gray-500 hover:text-gray-700 flex items-center justify-center lg:justify-start gap-4"
            title="Dashboard"
          >
            <Link to="/dashboard">
              <h1 className="text-sm md:text-xl">Dashboard</h1>
            </Link>
          </div>

          <div
            className="pl-0 lg:pl-6 text-gray-500 hover:text-gray-700 flex items-center justify-center lg:justify-start gap-4"
            title="Inbox"
          >
            <Link
              to="/inbox"
              className="nav-link d-flex align-items-center position-relative text-decoration-none"
              style={{ height: '50px' }}
            >
              <h1 className="text-sm md:text-xl">Inbox</h1>
            </Link>
          </div>
        </div>
        <div className="flex flex-col h-1/2 justify-end pb-3">
          <div className="bg-blue hidden xl:flex flex-col p-5 text-white rounded-lg gap-3 mx-3 ">
            <i className="uil uil-question-circle text-4xl"></i>
            <h5 className="text-3xl font-semibold">Need Help?</h5>
            <p>Please check our docs</p>
            <button className="bg-white w-100 text-blue font-bold mt-4 py-2 rounded-md">
              Document
            </button>
          </div>
        </div>
      </div>
    </div>

    <div className="w-[83%]">
      <div className="logo flex h-[13vh] border-b-2 border-gray-100 items-center justify-end sm:justify-between gap-1 px-4 md:px-10 bg-white">
        <div className="space-x-4 hidden sm:block">
          <i className="text-2xl text-gray-500 uil uil-search"></i>
          <input type="text" placeholder="Search for a contact" className="focus:outline-none" />
        </div>
        <div className="flex items-center justify-between text-gray-500 gap-3 md:gap-4">
          <i className="text-2xl md:text-4xl first-letter:uil uil-bell profile-notification"></i>
          <div className="text-center">
            <p className="text-black font-bold text-sm md:text-md">Hello, Franklin</p>
            <p className="text-xs">Super Admin</p>
          </div>
          <img src={profile} alt="admin" className="rounded-full h-10" />
        </div>
      </div>

      <div className="h-[87vh]">
        <div className="px-4 md:px-10 pt-6 h-[60%]">
          <div className="w-full h-[90%] md:h-full bg-white">
            <img
              src={chart}
              height="100%"
              width="100%"
              alt="chart"
              className="w-full lg:w-[60%] h-full mx-auto"
            />
          </div>
        </div>

        <div className="px-4 md:px-10 bg-gray-100">
          <p className="text-2xl font-bold py-1 md:py-6">Analytics Overview</p>
          <div className="flex flex-col sm:flex-row justify-between ">
            <div className="flex flex-col items-center justify-center bg-white rounded-md w-full sm:w-[30%] py-6 gap-2">
              <i className="uil uil-user box-icon fs-2 text-2xl md:text-4xl"></i>
              <span className="box-number fs-1 text-2xl md:text-4xl">4.5k</span>
              <span className="box-text fs-5 fw-semibold text-md md:text-xl font-bold">
                Total Customers
              </span>
            </div>
            <div className="flex flex-col items-center justify-center bg-white rounded-md  w-full sm:w-[30%] py-6 gap-2">
              <i className="uil uil-bullseye box-icon fs-2 text-2xl md:text-4xl"></i>
              <span className="box-number fs-1 text-2xl md:text-4xl">3.5k</span>
              <span className="box-text fs-5 fw-semibold text-md md:text-xl font-bold">
                Total Prospects
              </span>
            </div>
            <div className="flex flex-col items-center justify-center bg-white rounded-md  w-full sm:w-[30%] py-6 gap-2">
              <i className="uil uil-users-alt box-icon fs-2 text-2xl md:text-4xl"></i>
              <span className="box-number fs-1 text-2xl md:text-4xl">38.20</span>
              <span className="box-text fs-5 fw-semibold text-md md:text-xl font-bold">
                Total Lead
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Dashboard;
