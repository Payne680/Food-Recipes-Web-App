/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from 'react';

import Data from '../data/data.json';
import { getFromLocalStorage, saveToLocalStorage } from '../service/useStorage';

const FoodContext = createContext();

export function FoodContextProvider({ children }) {
  const [foodData, setFoodData] = useState(null);

  useEffect(() => {
    if (!getFromLocalStorage('foodData')) saveToLocalStorage('foodData', Data);

    const data = getFromLocalStorage('foodData');

    setFoodData(data);
  }, []);

  return (
    <FoodContext.Provider value={{ foodData, setFoodData }}>
      {children}
    </FoodContext.Provider>
  );
}

export const useFoodContext = () => useContext(FoodContext);
