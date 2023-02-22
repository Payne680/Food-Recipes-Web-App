import React from 'react';
import Card from './Card/Card';
import Footer from './Footer/Footer';
import './HomePage.css';
import NavBar from './NavBar/NavBar';

function HomePage() {
  return (
    <div>
      <NavBar />
      <h2>Below are some recipes</h2>
      <Card />
      <Footer />
    </div>
  );
}

export default HomePage;
