//
"use client"
import { useState, useEffect } from 'react';

export default function useSessionStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      if (initialValue) {
        if (typeof window !== 'undefined') {
          const storedValue = window.sessionStorage.getItem(key);
          return storedValue ? JSON.parse(storedValue) : initialValue;
        }
      }
      return null;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
        if (typeof window !== 'undefined') {
      window.sessionStorage.setItem(key, JSON.stringify(value));
        }
    } catch (error) {
      console.error(error);
    }
  }, [key, value]);

  return [value, setValue];
};