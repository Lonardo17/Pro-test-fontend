import { useState, useEffect } from 'react';

const useLocalStorage = (storageKey, fallbackState) => {
  const [state, setState] = useState(
    JSON.parse(localStorage.getItem(storageKey)) ?? fallbackState
  );

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(state));
  }, [state, storageKey]);

  return [state, setState];
};

export default useLocalStorage;
