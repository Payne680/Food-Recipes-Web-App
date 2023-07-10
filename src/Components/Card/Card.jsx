/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useState } from 'react';
import './Card.css';
import chicken from './chicken.jpg';
import asparagus from './asparagus.jpg';
import pancake from './pancake.jpg';
import tomatoe from './tomatoes.jpg';
import salad from './salad.jpg';
import springrollegg from './springrollegg.jpg';
import { useFoodContext } from '../../context/FoodContext';
import {
  getFromLocalStorage,
  saveToLocalStorage,
} from '../../service/useStorage';
import AddCardModal from '../AddCardModal/AddCardModal';

const arrImgs = [chicken, asparagus, pancake, tomatoe, salad, springrollegg];

function Card() {
  const { foodData, setFoodData } = useFoodContext();

  const deleteCard = (id) => {
    const prevData = getFromLocalStorage('foodData');

    const update = prevData.filter((food) => food.id !== id);
    saveToLocalStorage('foodData', update);
    setFoodData([...update]);
    //
  };

  const [modalOpened, setModalOpened] = useState(false);

  const handleCardAdd = (title, detail, url) => {
    const card = {
      id: '',
      title,
      description: detail,
      url,
    };

    const updatedCard = addCard(card);
    saveToLocalStorage(updatedCard);
    setModalOpened(false);
  };

  return (
    <div style={{ minHeight: 'max(500px, 60vh)' }}>
      <div className="add">
        <AddCardModal
          visible={modalOpened}
          handleCardAdd={handleCardAdd}
          onClose={() => setModalOpened(false)}
        />
        <button
          className="add-btn"
          type="button"
          onClick={() => setModalOpened(true)}
        >
          <i className="fa-solid fa-circle-plus" />
        </button>
        <h5>Add Recipe</h5>
      </div>

      {foodData?.map((food, index) => (
        <div className="card" key={food.id}>
          <button
            className="btn"
            type="button"
            onClick={() => deleteCard(food.id)}
          >
            X
          </button>
          <img
            className="img"
            src={arrImgs[index] || food.img}
            alt="springrollegg"
          />
          <h5>{food.name}</h5>
          <p>Click for more details</p>
          <button className="desc" type="button">
            More details
          </button>
        </div>
      ))}
    </div>
  );
}

export default Card;
