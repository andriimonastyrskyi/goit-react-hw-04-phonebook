import { useState, useEffect } from 'react';

export const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    // if (value !== null) {
    //   return JSON.parse(value);
    // }
    // return defaultValue;
    return JSON.parse(localStorage.getItem(key)) ?? defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};
