//
'use client'
import { useState, useEffect } from 'react';

export default function useCookie(key: string, defaultValue = {}) {
  const [value, setValue] = useState(() => {
    if (typeof document !== 'undefined') {
      const valueCookie = document.cookie;
      const findValue = valueCookie.split(";").find(e => e.startsWith(`${key}=`))

      if (!findValue) return {};

      const valueString = findValue.split(",")[0].split("=")[1];
      try {
        return JSON.parse(valueString);
      } catch {
        // Manejo de error
      }
    }

    return {};
  });

  function setCookie(key: string, value: object, maxAge = "3600") {
    if (typeof document !== 'undefined') {
      try {
        document.cookie = `${key}=${JSON.stringify(value)}; path=/; max-age=${maxAge}`;
        setValue(value);
      } catch {
        // Manejo de error
      }
    }
  }

  return [value, setCookie];
};

export function getCookie(key) {
  if (typeof document !== 'undefined') {
    const valueCookie = document.cookie;

    const findValue = valueCookie.split(";").find(e => e.startsWith(`${key}=`));

    if (findValue) {
      const valueString = findValue.split(",")[0].split("=")[1];
      try {
        return JSON.parse(valueString);
      } catch {
        return undefined;
      }
    }
  }
}