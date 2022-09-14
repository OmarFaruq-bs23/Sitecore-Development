import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';
import { Link } from 'react-router-dom';
import logo from './../../assets/img/logo.svg';
import profile from './../../assets/img/profile.png';

const Inbox = (props) => (
  <div>
    <div className="w-full flex justify-center text-blue bg-gray-100">
      <div className="w-[17%] border-r-2 border-gray-100 px-2 bg-white">
        <div className="flex pl-0 lg:pl-6 h-[13vh] border-b-2 border-gray-100 items-center justify-center lg:justify-start gap-1">
          <img
            src={logo}
            className="filter-blue h-12 xl:h-14"
            style={{ width: '40px' }}
            alt="logo"
          />
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

        <div className="px-4 md:px-10 ">
          <div className="w-full py-5">
            <p className="text-2xl font-bold text-blue">Inbox</p>
          </div>
          <div className="flex gap-4">
            <div className="h-[50%] w-[22%] bg-white p-5 space-y-4 rounded-md hidden lg:block">
              <button className="bg-blue text-white font-bold text-md w-full rounded-md py-2">
                Compose
              </button>
              <ul className="space-y-4">
                <li>
                  <div
                    className="text-blue font-semibold hover:text-gray-700 flex items-center justify-start gap-4 cursor-pointer"
                    title="Inbox"
                  >
                    <i className="text-xl uil uil-inbox"></i>
                    <h1 className="text-md hidden lg:block">Inbox</h1>
                  </div>
                </li>
                <li>
                  <div
                    className="text-blue font-semibold hover:text-gray-700 flex items-center justify-start gap-4 cursor-pointer"
                    title="Inbox"
                  >
                    <i className="text-xl uil uil-users-alt"></i>
                    <h1 className="text-md hidden lg:block">Lead</h1>
                  </div>
                </li>
                <li>
                  <div
                    className="text-blue font-semibold hover:text-gray-700 flex items-center justify-start gap-4 cursor-pointer"
                    title="Inbox"
                  >
                    <i className="text-xl uil uil-bullseye"></i>
                    <h1 className="text-md hidden lg:block">Prospect</h1>
                  </div>
                </li>
                <li>
                  <div
                    className="text-blue font-semibold hover:text-gray-700 flex items-center justify-start gap-4 cursor-pointer"
                    title="Inbox"
                  >
                    <i className="text-xluil uil-user"></i>
                    <h1 className="text-md hidden lg:block">Customer</h1>
                  </div>
                </li>
                <li>
                  <div
                    className="text-blue font-semibold hover:text-gray-700 flex items-center justify-start gap-4 cursor-pointer"
                    title="Inbox"
                  >
                    <i className="text-xl uil uil-inbox"></i>
                    <h1 className="text-md hidden lg:block">Spam</h1>
                  </div>
                </li>
                <li>
                  <div
                    className="text-blue font-semibold hover:text-gray-700 flex items-center justify-start gap-4 cursor-pointer"
                    title="Inbox"
                  >
                    <i className="text-xl uil uil-times-circle"></i>
                    <h1 className="text-md hidden lg:block">Closed</h1>
                  </div>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-[78%] bg-white p-2 md:p-4 lg:p-5 rounded-md flex flex-col">
              <div className="flex items-center justify-start gap-6 py-6 border-b-2 border-gray-100">
                <div className="hidden lg:flex gap-2 w-auto">
                  <i className="uil uil-square-shape"></i>
                  <i className="uil uil-star"></i>
                </div>
                <div className="w-[70%] md:w-[95%] flex flex-col md:flex-row justify-start items-start md:items-center gap-3">
                  <p className="text-[1.15rem] w-full md:w-[25%] font-semibold">Peter, me (3)</p>
                  <p className="text-sm md:text-[1.15rem] font-extralight md:font-normal mt-3 md:mt-0">
                    Hello – Trip home from Colombo has been arranged, then...
                  </p>
                </div>
                <p className="text-sm md:text-[1.1rem] w-[25%] md:w-[15%] text-end">Mar 6</p>
              </div>
              <div className="flex items-center justify-start gap-6 py-5 border-b-2 border-gray-100">
                <div className="hidden lg:flex gap-2 w-auto">
                  <i className="uil uil-square-shape"></i>
                  <i className="uil uil-star"></i>
                </div>
                <div className="w-[70%] md:w-[95%] flex flex-col md:flex-row justify-start items-start md:items-center gap-3">
                  <p className="text-[1.15rem] w-full md:w-[25%] font-semibold">Charukaw, me (7)</p>
                  <p className="text-sm md:text-[1.15rem] font-extralight md:font-normal mt-3 md:mt-0">
                    Since you asked... and i am inconceivably bored at the train...
                  </p>
                </div>
                <p className="text-sm md:text-[1.1rem] w-[25%] md:w-[15%] text-end">Mar 4</p>
              </div>
              <div className="flex items-center justify-start gap-6 py-5 border-b-2 border-gray-100">
                <div className="hidden lg:flex gap-2 w-auto">
                  <i className="uil uil-square-shape"></i>
                  <i className="uil uil-star"></i>
                </div>
                <div className="w-[70%] md:w-[95%] flex flex-col md:flex-row justify-start items-start md:items-center gap-3">
                  <p className="text-[1.15rem] w-full md:w-[25%] font-semibold">Stack Exchange</p>
                  <p className="text-sm md:text-[1.15rem] font-extralight md:font-normal mt-3 md:mt-0">
                    1 new items in your Stackexchange inbox..
                  </p>
                </div>
                <p className="text-sm md:text-[1.1rem] w-[25%] md:w-[15%] text-end">Mar 2</p>
              </div>
              <div className="flex items-center justify-start gap-6 py-5 border-b-2 border-gray-100">
                <div className="hidden lg:flex gap-2 w-auto">
                  <i className="uil uil-square-shape"></i>
                  <i className="uil uil-star"></i>
                </div>
                <div className="w-[70%] md:w-[95%] flex flex-col md:flex-row justify-start items-start md:items-center gap-3">
                  <p className="text-[1.15rem] w-full md:w-[25%] font-semibold">
                    Google Drive Team
                  </p>
                  <p className="text-sm md:text-[1.15rem] font-extralight md:font-normal mt-3 md:mt-0">
                    Trip home from Colombo has been arranged, then...
                  </p>
                </div>
                <p className="text-sm md:text-[1.1rem] w-[25%] md:w-[15%] text-end">Mar 1</p>
              </div>
              <div className="flex items-center justify-start gap-6 py-5 border-b-2 border-gray-100">
                <div className="hidden lg:flex gap-2 w-auto">
                  <i className="uil uil-square-shape"></i>
                  <i className="uil uil-star"></i>
                </div>
                <div className="w-[70%] md:w-[95%] flex flex-col md:flex-row justify-start items-start md:items-center gap-3">
                  <p className="text-[1.15rem] w-full md:w-[25%] font-semibold">Peter, me (3)</p>
                  <p className="text-sm md:text-[1.15rem] font-extralight md:font-normal mt-3 md:mt-0">
                    Colombo has been arranged, then...
                  </p>
                </div>
                <p className="text-sm md:text-[1.1rem] w-[25%] md:w-[15%] text-end">Feb 29</p>
              </div>
              <div className="flex items-center justify-start gap-6 py-5 border-b-2 border-gray-100">
                <div className="hidden lg:flex gap-2 w-auto">
                  <i className="uil uil-square-shape"></i>
                  <i className="uil uil-star"></i>
                </div>
                <div className="w-[70%] md:w-[95%] flex flex-col md:flex-row justify-start items-start md:items-center gap-3">
                  <p className="text-[1.15rem] w-full md:w-[25%] font-semibold">me, Susanna (11)</p>
                  <p className="text-sm md:text-[1.15rem] font-extralight md:font-normal mt-3 md:mt-0">
                    Hello – Trip home from Colombo has been arranged, then...
                  </p>
                </div>
                <p className="text-sm md:text-[1.1rem] w-[25%] md:w-[15%] text-end">Feb 28</p>
              </div>
              <div className="flex items-center justify-start gap-6 py-5 border-b-2 border-gray-100">
                <div className="hidden lg:flex gap-2 w-auto">
                  <i className="uil uil-square-shape"></i>
                  <i className="uil uil-star"></i>
                </div>
                <div className="w-[70%] md:w-[95%] flex flex-col md:flex-row justify-start items-start md:items-center gap-3">
                  <p className="text-[1.15rem] w-full md:w-[25%] font-semibold">Tobias Berggren</p>
                  <p className="text-sm md:text-[1.15rem] font-extralight md:font-normal mt-3 md:mt-0">
                    Lets go fishing! – Hey, You wanna join me and Fred at the...
                  </p>
                </div>
                <p className="text-sm md:text-[1.1rem] w-[25%] md:w-[15%] text-end">Feb 26</p>
              </div>
              <div className="flex items-center justify-start gap-6 py-5 border-b-2 border-gray-100">
                <div className="hidden lg:flex gap-2 w-auto">
                  <i className="uil uil-square-shape"></i>
                  <i className="uil uil-star"></i>
                </div>
                <div className="w-[70%] md:w-[95%] flex flex-col md:flex-row justify-start items-start md:items-center gap-3">
                  <p className="text-[1.15rem] w-full md:w-[25%] font-semibold">Erik, me (5)</p>
                  <p className="text-sm md:text-[1.15rem] font-extralight md:font-normal mt-3 md:mt-0">
                    Hello – Trip home from Colombo has been arranged, then...
                  </p>
                </div>
                <p className="text-sm md:text-[1.1rem] w-[25%] md:w-[15%] text-end">Feb 25</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Inbox;
