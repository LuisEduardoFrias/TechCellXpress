//
"use client"
import { useState } from "react";
export default function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      if (initialValue) {
        if (typeof window !== 'undefined') {
          const item = window.localStorage.getItem(key);
          return item ? JSON.parse(item) : initialValue;
        }
      }
      return null;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      if (typeof window !== 'undefined') {
        const valueToStore = value instanceof Function ? value(storedValue) : value;
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
        setStoredValue(valueToStore);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return [storedValue, setValue];
};