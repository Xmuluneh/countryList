import { useState} from 'react';
import axios from 'axios';

/**
 * This is a React functional component that fetches data from an API
 *  and renders it in a table using
 * the useState and useEffect hooks.
 */
export const ApiHook = () => {
  const [isLoading, setIsLading] = useState(false);
  const [error, setError] = useState({});

  const api = async (url: string, option = {}) => {
    try {
      setIsLading(true);
      const response = await axios.get(url, option);
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
