import React from 'react';
import './HomePage.css';

function HomePage() {
  return (
    <div>
      <div id="abc">
        <nav>
          <ul>
            <li>
              <a href="home">Home</a>
            </li>
            <li>
              <a href="menu">Menu</a>
            </li>
            <li>
              <a href="dis">Discover</a>
            </li>
            <li>
              <a href="about">About Us</a>
            </li>
            <li>
              <a href="con">Contact Us</a>
            </li>
          </ul>
        </nav>
        <h1>Welcome to Delicia</h1>
      </div>
      <h2>Below are some reciepes</h2>
      <div className="card">
        <h3>Google</h3>
        <p>Everything is here</p>
      </div>
      <div className="card">
        <h3>Google</h3>
        <p>Everything is here</p>
      </div>
      <div className="card">
        <h3>Google</h3>
        <p>Everything is here</p>
      </div>
      <div className="card">
        <h3>Google</h3>
        <p>Everything is here</p>
      </div>
      <div className="card">
        <h3>Google</h3>
        <p>Everything is here</p>
      </div>
      <div className="card">
        <h3>Google</h3>
        <p>Everything is here</p>
      </div>
    </div>
  );
}

export default HomePage;
