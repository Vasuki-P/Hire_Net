import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="homepage" style={{ backgroundImage: `url('/home1.jpg')` }}>
      <div className="container">
        <h1>Welcome to HireNet</h1>
        <p>Your one-stop solution for job seekers and recruiters. Find your dream job or the perfect candidate with ease.</p>
        <div className="buttons">
          <Link to="/adminlogin">
            <button className="btn admin-btn">Admin</button>
          </Link>
          <Link to="/signup">
            <button className="btn user-btn">User</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
