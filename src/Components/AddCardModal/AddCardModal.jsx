/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import './AddCardModal.css';
import { useFoodContext } from '../../context/FoodContext';

function AddCardModal({
  visible,
  onClose,
  foodToEdit,
  setFoodToEdit,
  handleCardAdd,
}) {
  const customStyles = {
    background: 'rgb(58 58 58)',
    padding: '10px',
    width: '60%',
    height: 'fit-content',
    maxWidth: '30rem',
  };

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    url: '',
  });

  const { editFood } = useFoodContext();

  // const endForm = () => {
  //   setFormData({ title: '', description: '', url: '' });
  //   onclose();
  // };

  const handleSave = () => {
    if (foodToEdit) {
      editFood(foodToEdit.id, formData);
      setFoodToEdit(null);
    } else {
      const data = formData;
      handleCardAdd({ ...data });
    }

    onclose();
  };

  const handleChange = ({ target: { name, value } }) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    if (foodToEdit) setFormData({ ...foodToEdit });
  }, [foodToEdit]);

  return (
    <Rodal customStyles={customStyles} visible={visible} onClose={onClose}>
      <div className="container">
        <div>
          <span className="label">Card Title</span>
          <input
            type="text"
            className="input"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <span className="label">Image Url</span>
          <input
            type="text"
            className="input"
            name="url"
            value={formData.url}
            onChange={handleChange}
          />
        </div>

        <div>
          <span className="label">description</span>
          <textArea
            rows={10}
            className="input"
            value={formData.description}
            placeholder="food description"
            type="text"
            name="description"
            onChange={handleChange}
          />
        </div>

        <button
          type="button"
          disabled={
            formData.title.trim() === '' ||
            formData.description.trim() === '' ||
            formData.url.trim() === ''
          }
          className="saveButton"
          onClick={handleSave}
        >
          Add
        </button>
      </div>
    </Rodal>
  );
}

export default AddCardModal;
