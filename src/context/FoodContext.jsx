/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from 'react';

import Data from '../data/data.json';
import { LOCALSTORAGE } from '../service/useStorage';

const FoodContext = createContext();

export function FoodContextProvider({ children }) {
  const [foodData, setFoodData] = useState(null);

  const editFood = (id, formData) => {
    const updates = LOCALSTORAGE.get('foodData').map((food) => {
      if (food.id === id) return formData;

      return food;
    });

    LOCALSTORAGE.save('foodData', updates);
    setFoodData([...updates]);
  };

  useEffect(() => {
    if (!LOCALSTORAGE.get('foodData')) LOCALSTORAGE.save('foodData', Data);

    const data = LOCALSTORAGE.get('foodData');

    setFoodData(data);
  }, []);

  return (
    <FoodContext.Provider value={{ foodData, setFoodData, editFood }}>
      {children}
    </FoodContext.Provider>
  );
}

export const useFoodContext = () => useContext(FoodContext);
