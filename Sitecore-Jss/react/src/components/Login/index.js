import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';
import logo from './../../assets/img/logo.svg';

const Login = (props) => (
  <div>
    <div id="login-signup-page">
      <div className="login-signup">
        <div className="logo">
          <div className="logo-image">
            <img src={logo} className="filter-blue" alt="Logo" />
          </div>
          <h1>CRM</h1>
        </div>
        <h2>Sign In</h2>
        <h5>Sign in to continue our application</h5>
        <form>
          <div className="form-floating">
            <input
              type="email"
              className="form-control shadow-none px-1"
              id="floatingInput"
              placeholder="name@example.com"
              autoFocus
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
          <div className="remember-container">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="flexCheckDefault" />
              <label className="form-check-label">Remember me</label>
            </div>
            <div>
              <span>
                <a className="forgot-password" href="#">
                  Forgot password?
                </a>
              </span>
              <br />
            </div>
          </div>
          <button>Sign In</button>
          <p>
            Dont have an account? <a href="#">Sign Up</a>
          </p>
        </form>
      </div>
    </div>
  </div>
);

export default Login;
