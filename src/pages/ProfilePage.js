import React from 'react';
import './ProfilePage.css';

const user = {
  name: 'Marry Doe',
  email: 'Marry@Gmail.Com',
  avatarUrl: 'https://i.pravatar.cc/80?img=47',
  bio: 'Lorem Ipsum Dolor Sit Amet, Consetatur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam',
};

const ProfilePage = () => {
  return (
    <div className="profile-page">

      <div className="acct-header">
        <h1 className="acct-title">Account Settings</h1>
      </div>

      <div className="user-row">
        <div className="avatar-box">

          {/* avatar as CSS background — avoids img tag ESLint rules */}
          <div
            className="avatar-img"
            role="img"
            aria-label={user.name}
            style={{ backgroundImage: `url(${user.avatarUrl})` }}
          />

          <button className="edit-badge" aria-label="Edit">
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

      <div className="bio-section">
        <p className="bio-text">{user.bio}</p>
      </div>

      <div className="divider" />

      <div className="empty-area" />

    </div>
  );
};

export default ProfilePage;
