/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useState } from 'react';
import './Card.css';
import { v4 as uuid4 } from 'uuid';
import swal from 'sweetalert';
import chicken from './chicken.jpg';
import asparagus from './asparagus.jpg';
import pancake from './pancake.jpg';
import springrollegg from './springrollegg.jpg';
import salad from './salad.jpg';
import { useFoodContext } from '../../context/FoodContext';
import { LOCALSTORAGE } from '../../service/useStorage';
import AddCardModal from '../AddCardModal/AddCardModal';

const arrImgs = [chicken, asparagus, pancake, tomatoe, salad, springrollegg];

function Card() {
  const { foodData, setFoodData } = useFoodContext();

  const [foodToEdit, setFoodToEdit] = useState(null);

  const deleteCard = (id) => {
    const prevData = LOCALSTORAGE.get('foodData');

    const update = prevData.filter((food) => food.id !== id);
    LOCALSTORAGE.save('foodData', update);
    setFoodData([...update]);
    //
  };

  const [modalOpened, setModalOpened] = useState(false);

  const handleCardAdd = ({ title, description, url }) => {
    const card = {
      id: uuid4(),
      title,
      description,
      url,
    };

    const updatedCard = [...LOCALSTORAGE.get('foodData'), card];
    LOCALSTORAGE.save('foodData', updatedCard);
    setFoodData([...updatedCard]);
  };

  const showDetails = (food) => {
    swal(food.description);
    // setShowPopup({ show: true, data: food });
  };

  const handleEdit = (food) => {
    setFoodToEdit({ ...food });
    setModalOpened(true);
  };

  return (
    <div style={{ minHeight: 'max(500px, 60vh)' }}>
      <div className="add">
        {modalOpened && (
          <AddCardModal
            visible={modalOpened}
            handleCardAdd={handleCardAdd}
            foodToEdit={foodToEdit}
            setFoodToEdit={setFoodToEdit}
            onClose={() => setModalOpened(false)}
          />
        )}
        <button
          className="add-btn"
          type="button"
          onClick={() => setModalOpened(true)}
        >
          <i className="fa-solid fa-circle-plus" />
        </button>
        <h5>Add Recipe</h5>
      </div>

      {foodData?.map((food) => (
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
            src={food.url}
            alt={food.title || 'food image'}
          />
          <h5>{food.title}</h5>
          <p>Click for more details</p>
          <button
            className="desc"
            type="button"
            onClick={() => showDetails(food)}
          >
            More details
          </button>
          <button
            className="desc"
            type="button"
            onClick={() => handleEdit(food)}
          >
            Edit
          </button>
        </div>
      ))}
    </div>
  );
}

export default Card;
