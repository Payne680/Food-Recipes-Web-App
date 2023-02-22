import React from 'react';
import './NavBar.css';
import del from './Delicia2.png';

function NavBar() {
  return (
    <div>
      <div id="abc">
        <nav>
          <img className="del" src={del} alt="forks" />
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
        <h4>GET THE FRESHEST INGREDIENTS FROM DELICIA</h4>
      </div>
    </div>
  );
}

export default NavBar;
