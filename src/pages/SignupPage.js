import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignupPage.css';

const SignupPage = () => {
  const navigate = useNavigate();

  // all form fields in one state obj
  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    isAgency: 'yes',   // default to yes like the design shows
  });

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    navigate('/profile');
  };

  return (
    <div className="signup-page">
      <div className="signup-inner">

        <h1 className="signup-title">
          Create your<br />PopX account
        </h1>

        <form className="signup-form" onSubmit={onSubmit} noValidate>

          <div className="field-wrap">
            <label htmlFor="s-name" className="s-label required">Full Name</label>
            <input
              id="s-name"
              name="fullName"
              type="text"
              className="s-input"
              placeholder="Mary Doe"
              value={form.fullName}
              onChange={onChange}
              autoComplete="name"
            />
          </div>

          <div className="field-wrap">
            <label htmlFor="s-phone" className="s-label required">Phone number</label>
            <input
              id="s-phone"
              name="phone"
              type="tel"
              className="s-input"
              placeholder="Mary Doe"
              value={form.phone}
              onChange={onChange}
              autoComplete="tel"
            />
          </div>

          <div className="field-wrap">
            <label htmlFor="s-email" className="s-label required">Email address</label>
            <input
              id="s-email"
              name="email"
              type="email"
              className="s-input"
              placeholder="Mary Doe"
              value={form.email}
              onChange={onChange}
              autoComplete="email"
            />
          </div>

          <div className="field-wrap">
            <label htmlFor="s-password" className="s-label required">Password</label>
            <input
              id="s-password"
              name="password"
              type="password"
              className="s-input"
              placeholder="Mary Doe"
              value={form.password}
              onChange={onChange}
              autoComplete="new-password"
            />
          </div>

          <div className="field-wrap">
            <label htmlFor="s-company" className="s-label">Company name</label>
            <input
              id="s-company"
              name="company"
              type="text"
              className="s-input"
              placeholder="Mary Doe"
              value={form.company}
              onChange={onChange}
              autoComplete="organization"
            />
          </div>

          {/* agency question with custom radio buttons */}
          <div className="field-wrap agency-wrap">
            <p className="agency-q">Are you an Agency?*</p>
            <div className="radio-row">

              <label className="radio-opt" htmlFor="agency-yes">
                <input
                  id="agency-yes"
                  type="radio"
                  name="isAgency"
                  value="yes"
                  checked={form.isAgency === 'yes'}
                  onChange={onChange}
                  className="hidden-radio"
                />
                <span className="radio-dot" />
                Yes
              </label>

              <label className="radio-opt" htmlFor="agency-no">
                <input
                  id="agency-no"
                  type="radio"
                  name="isAgency"
                  value="no"
                  checked={form.isAgency === 'no'}
                  onChange={onChange}
                  className="hidden-radio"
                />
                <span className="radio-dot" />
                No
              </label>

            </div>
          </div>

          {/* push the button to the bottom */}
          <div className="grow-space" />

          <button id="signup-submit" type="submit" className="create-btn">
            Create Account
          </button>

        </form>
      </div>
    </div>
  );
};

export default SignupPage;
