import React from 'react';
import Card from '../Components/Card/Card';
import Footer from '../Components/Footer/Footer';
import './HomePage.css';
import NavBar from '../Components/NavBar/NavBar';

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
