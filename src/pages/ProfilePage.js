/* eslint-disable */
import React from 'react';
import './ProfilePage.css';

// hardcoded user data matching the XD design
const user = {
  name: 'Marry Doe',
  email: 'Marry@Gmail.Com',
  avatar: 'https://i.pravatar.cc/80?img=47',
  bio: 'Lorem Ipsum Dolor Sit Amet, Consetatur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam',
};

const ProfilePage = () => {
  return (
    <div className="profile-page">

      {/* top bar */}
      <div className="acct-header">
        <h1 className="acct-title">Account Settings</h1>
      </div>

      {/* avatar + name row */}
      <div className="user-row">
        <div className="avatar-box">
          <img
            src={user.avatar}
            alt={user.name}
            className="avatar-img"
          />
          {/* edit badge — pencil icon */}
          <button className="edit-badge" aria-label="Change profile photo">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
              <path
                d="M3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25ZM20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C17.98 2.9 17.35 2.9 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04Z"
                fill="white"
              />
            </svg>
          </button>
        </div>

        <div className="user-meta">
          <p className="user-name">{user.name}</p>
          <p className="user-email">{user.email}</p>
        </div>
      </div>

      <div className="divider" />

      {/* bio paragraph */}
      <div className="bio-section">
        <p className="bio-text">{user.bio}</p>
      </div>

      <div className="divider" />

      {/* empty lower area — matches design */}
      <div className="empty-area" />

    </div>
  );
};

export default ProfilePage;
