import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';
import { Link } from 'react-router-dom';
import logo from './../../assets/img/logo.svg';

const Login = (props) => (
  <div>
    <div className="authentication bg-[#061d49] w-full h-screen flex items-center text-blue font-sans">
      <div className="mx-auto bg-white p-10 space-y-3 w-[95%] sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[38%] 2xl:w-[33%] rounded-lg">
        <div className="flex items-center gap-2">
          <Link to="/" className="ps-0">
            <img
              src={logo}
              className="filter-blue max-h-14 max-w-12 sm:max-h-12 sm:max-w-[3rem]"
              alt="logo"
            />
          </Link>
          <h1 className="text-5xl font-extrabold">CRM</h1>
        </div>
        <h2 className="text-3xl font-bold">Sign In</h2>
        <h5 className="text-base pb-6">Sign in to continue our application</h5>
        <form className="mt-12">
          <div className="relative">
            <input
              id="email"
              name="email"
              type="text"
              className="peer h-10 w-full border-b-[1px] border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-gray-600"
              placeholder="john@doe.com"
            />
            <label
              htmlFor="email"
              className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-blue peer-placeholder-shown:font-bold peer-placeholder-shown:-top-1 peer-focus:-top-5 peer-focus:text-blue/60 peer-focus:text-sm"
            >
              Email address
            </label>
          </div>
          <div className="mt-10 relative">
            <input
              id="password"
              name="password"
              type="password"
              className="peer h-10 w-full border-b-[1px] border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-gray-600"
              placeholder="john@doe.com"
            />
            <label
              htmlFor="password"
              className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-blue peer-placeholder-shown:font-bold peer-placeholder-shown:-top-1 peer-focus:-top-5 peer-focus:text-blue/60 peer-focus:text-sm"
            >
              Password
            </label>
          </div>
          <div className="flex justify-between items-center">
            <div className="my-10 text-sm sm:text-[1.05rem] flex items-center gap-2">
              <input
                className="checked:bg-blue h-4 w-4 rounded-full shadow "
                type="checkbox"
                id="flexCheckDefault"
              />
              <label className="" htmlFor="flexCheckDefault">
                Remember me
              </label>
            </div>
            <div className="my-10">
              <span>
                <Link to="/forgotpassword" className="opacity-70 text-sm sm:text-[1.05rem]">
                  Forgot password?
                </Link>
              </span>
            </div>
          </div>
          <Link to="/dashboard">
            <button className="px-4 py-3 rounded bg-blue duration-500 text-white font-semibold text-center block w-full">
              Sign In
            </button>
          </Link>

          <p className="mt-3 text-base">
            Dont have an account?
            <Link className="font-bold pl-2" to="/registration">
              Sign UP
            </Link>
          </p>
        </form>
      </div>
    </div>
  </div>
);

export default Login;
