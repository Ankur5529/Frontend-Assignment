import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  const navigate = useNavigate();

  const [fields, setFields] = useState({
    email: '',
    password: '',
  });

  // update whichever field changed
  const handleInput = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // skip real auth for now, just go to profile
    navigate('/profile');
  };

  return (
    <div className="login-page">
      <div className="login-inner">

        <h1 className="login-title">
          Signin to your<br />PopX account
        </h1>

        <p className="login-desc">
          Lorem ipsum dolor sit amet,<br />
          consectetur adipiscing elit.
        </p>

        <form onSubmit={handleSubmit} noValidate>

          <div className="field-group">
            <label htmlFor="login-email" className="field-label">
              Email Address
            </label>
            <input
              id="login-email"
              name="email"
              type="email"
              className="field-input"
              placeholder="Enter email address"
              value={fields.email}
              onChange={handleInput}
              autoComplete="email"
            />
          </div>

          <div className="field-group">
            <label htmlFor="login-password" className="field-label">
              Password
            </label>
            <input
              id="login-password"
              name="password"
              type="password"
              className="field-input"
              placeholder="Enter password"
              value={fields.password}
              onChange={handleInput}
              autoComplete="current-password"
            />
          </div>

          <button id="login-btn" type="submit" className="login-btn">
            Login
          </button>

        </form>
      </div>
    </div>
  );
};

export default LoginPage;
