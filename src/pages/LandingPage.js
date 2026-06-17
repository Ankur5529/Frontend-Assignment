import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-wrapper">

      {/* big hero image area at the top */}
      <div className="hero-img-block" role="img" aria-label="PopX hero banner" />

      {/* text + buttons sit at the bottom */}
      <div className="landing-bottom">
        <h1 className="welcome-heading">Welcome to PopX</h1>

        <p className="welcome-sub">
          Lorem ipsum dolor sit amet,<br />
          consectetur adipiscing elit.
        </p>

        <button
          id="btn-create-account"
          className="btn primary-btn"
          onClick={() => navigate('/signup')}
        >
          Create Account
        </button>

        <button
          id="btn-login-existing"
          className="btn secondary-btn"
          onClick={() => navigate('/login')}
        >
          Already Registered? Login
        </button>
      </div>

    </div>
  );
};

export default LandingPage;
