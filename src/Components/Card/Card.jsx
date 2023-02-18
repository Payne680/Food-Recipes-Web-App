import React from 'react';
import './Card.css';
import chicken from './chicken.jpg';
import asparagus from './asparagus.jpg';
import pancake from './pancake.jpg';
import tomatoe from './tomatoes.jpg';
import salad from './salad.jpg';
import springrollegg from './springrollegg.jpg';

function Card() {
  return (
    <div>
    <div className="add">
    <button className="add-btn" type="button">
      <i className="fa-solid fa-circle-plus" />
    </button>
  </div>
      <div className="card">
        <button className="btn" type="button">
          X
        </button>
        <img className="img" src={chicken} alt="Achu" />
        <h5>Chicken</h5>
        <p>Click for more details</p>
        <button className="desc" type="button">
          More details
        </button>
      </div>
      <div className="card">
        <button className="btn" type="button">
          X
        </button>
        <img className="img" src={asparagus} alt="asparagus" />
        <h5>Asparagus</h5>
        <p>Click for more details</p>
        <button className="desc" type="button">
          More details
        </button>
      </div>
      <div className="card">
        <button className="btn" type="button">
          X
        </button>
        <img className="img" src={pancake} alt="pancake" />
        <h5>Pancake</h5>
        <p>Click for more details</p>
        <button className="desc" type="button">
          More details
        </button>
      </div>
      <div className="card">
        <button className="btn" type="button">
          X
        </button>
        <img className="img" src={tomatoe} alt="tomatoe" />
        <h5>Tomatoe Salad</h5>
        <p>Click for more details</p>
        <button className="desc" type="button">
          More details
        </button>
      </div>
      <div className="card">
        <button className="btn" type="button">
          X
        </button>
        <img className="img" src={salad} alt="salad" />
        <h5>Vegetable Salad</h5>
        <p>Click for more details</p>
        <button className="desc" type="button">
          More details
        </button>
      </div>
      <div className="card">
        <button className="btn" type="button">
          X
        </button>
        <img className="img" src={springrollegg} alt="springrollegg" />
        <h5>Springrollegg</h5>
        <p>Click for more details</p>
        <button className="desc" type="button">
          More details
        </button>
      </div>
    </div>
  );
}

export default Card;
