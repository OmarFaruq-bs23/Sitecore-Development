import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';
import { Link } from 'react-router-dom';
import logo from './../../assets/img/logo.svg';

const Registration = (props) => (
  <div>
    <div className="login-signup-page">
      <div className="login-signup">
        <div className="logo">
          <div className="logo-image">
            <Link to="/" className="ps-0">
              <img src={logo} className="filter-blue" alt="logo" />
            </Link>
          </div>
          <h1>CRM</h1>
        </div>
        <h2>Sign Up</h2>
        <h5>Sign up your account</h5>
        <form>
          <div className="form-floating">
            <input
              type="email"
              className="form-control shadow-none px-1"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label className="pt-2">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control shadow-none px-1"
              id="floatingPassword"
              placeholder="Password"
            />
            <label className="pt-2">Password</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control shadow-none px-1"
              id="floatingPassword"
              placeholder="Password"
            />
            <label className="pt-2">Confirm Password</label>
          </div>
          <Link to="/" className="ps-0">
            <button>Sign Up</button>
          </Link>
          <p>
            Already registered?{' '}
            <Link to="/" className="ps-0">
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  </div>
);

export default Registration;
