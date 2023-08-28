import { useState } from 'react';

type UseLocalStorageReturnType<T> = {
  value: T | null;
  setValue: (value: T) => void;
};

const useLocalStorage = <T>(key: string, initialValue: T): UseLocalStorageReturnType<T> => {
  const storedValue = localStorage.getItem(key);

  const initial = storedValue ? JSON.parse(storedValue) : initialValue;

  const [value, setValue] = useState<T | null>(initial);

  const updateValue = (newValue: T) => {
    localStorage.setItem(key, JSON.stringify(newValue));
    setValue(newValue);
  };

  return {
    value,
    setValue: updateValue,
  };
};

export { useLocalStorage };