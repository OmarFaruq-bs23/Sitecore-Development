import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';
import logo from './../../assets/img/logo.svg';

const ForgotPassword = (props) => (
  <div>
    <div id="login-signup-page">
      <div className="login-signup">
        <div className="logo">
          <div className="logo-image">
            <img src={logo} className="filter-blue" alt="logo" />
          </div>
          <h1>CRM</h1>
        </div>
        <h2>Forgot Password</h2>
        <h5>Please enter your email below</h5>
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
          <button>Submit</button>
        </form>
      </div>
    </div>
  </div>
);

export default ForgotPassword;
