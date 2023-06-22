import React, { useState } from 'react';
import { Country } from './interface/Interfce';

export const ApiHook = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({});

  const api = async (url: string, option = {}) => {
    try {
      setIsLoading(true);
      const response = await fetch(url, option);
      setIsLoading(false);
      return response;
    } catch (e) {
      setError({ e });
    }
  };

  return {
    api,
    error,
    isLoading,
  };
};
