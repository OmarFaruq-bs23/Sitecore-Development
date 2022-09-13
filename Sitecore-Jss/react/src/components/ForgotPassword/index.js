import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';
import { Link } from 'react-router-dom';
import logo from './../../assets/img/logo.svg';

const ForgotPassword = (props) => (
  <div>
    <div className="authentication container-fluid ">
      <div className="row vh-100 align-items-center ">
        <div className="col-12 col-sm-12 col-md-9 col-lg-6 col-xl-5 mx-auto">
          <div className="login-signup rounded-5 py-5 px-3 px-sm-5 shadow-lg bg-white">
            <div className="logo d-flex">
              <Link to="/" className="ps-0">
                <img src={logo} className="filter-blue" alt="logo" />
              </Link>
              <h1 className="fs-1">CRM</h1>
            </div>
            <h2 className="fs-3 fw-bold">Forgot Password</h2>
            <h5 className="fs-6 fw-normal pb-4">Please enter your email below</h5>
            <form>
              <div className="form-floating">
                <input
                  type="email"
                  className="form-control shadow-none px-1 w-100 border-bottom rounded-0"
                  id="floatingInput"
                  placeholder="name@example.com"
                  autoFocus
                />
                <label className="pt-2 ps-0 fs-6 fw-bold pe-none" htmlFor="floatingInput">
                  Email address
                </label>
              </div>
              <Link to="/" className="ps-0">
                <button className="w-100 text-white rounded-2 my-3 py-2">Submit</button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ForgotPassword;
