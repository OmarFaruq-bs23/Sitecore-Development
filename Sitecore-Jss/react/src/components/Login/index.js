import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';
import { Link } from 'react-router-dom';
import logo from './../../assets/img/logo.svg';

const Login = (props) => (
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
            <h2 className="fs-3 fw-bold">Sign In</h2>
            <h5 className="fs-6 fw-normal pb-4">Sign in to continue our application</h5>
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
              <div className="form-floating">
                <input
                  type="password"
                  className="form-control shadow-none px-1 w-100 border-bottom rounded-0"
                  id="floatingPassword"
                  placeholder="Password"
                />
                <label className="pt-2 ps-0 fs-6 fw-bold pe-none" htmlFor="floatingPassword">
                  Password
                </label>
              </div>
              <div className="remember-container d-flex justify-content-between align-items-center">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    Remember me
                  </label>
                </div>
                <div>
                  <span>
                    <Link
                      to="/forgotpassword"
                      className="text-decoration-none ps-0 ps-sm-2 text-secondary"
                    >
                      Forgot password?
                    </Link>
                  </span>
                  <br />
                </div>
              </div>
              <Link to="/dashboard" className="ps-0">
                <button className="w-100 text-white rounded-2 my-3 py-2">Sign In</button>
              </Link>
              <p>
                Dont have an account?{' '}
                <Link className="text-decoration-none ps-2 fw-bold" to="/registration">
                  Sign UP
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Login;
