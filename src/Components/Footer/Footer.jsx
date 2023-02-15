import React from 'react';
import './Footer.css';
import visa from './visa.png';
import american from './american-express.png';
import master from './master-card.png';

function Footer() {
  return (
    <div>
      <div id="abb">
        <h1>Footer</h1>
      </div>
      <div className="info">
        <h3>© 2023 - Rebase Academy license!</h3>
        <div className="banks">
          <div className="bank-cards">
            <img src={visa} alt="visa" />
          </div>
          <div className="bank-cards">
            <img src={american} alt="american-express" />
          </div>
          <div className="bank-cards">
            <img src={master} alt="master-card" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
