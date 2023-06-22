import React, { useState,useEffect } from 'react';
import { Country } from './interface/Interfce';
import axios from 'axios'
import Table from './component/Table';
// export const ApiHook = () => {
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState({});

//   const api = async (url: string, option = {}) => {
//     try {
//       setIsLoading(true);
//       const response = await fetch(url, option);
//       setIsLoading(false);
//       return response;
//     } catch (e) {
//       setError({ e });
//     }
//   };

//   return {
//     api,
//     error,
//     isLoading,
//   };
// };


/**
 * This is a React functional component that fetches data from an API
 *  and renders it in a table using
 * the useState and useEffect hooks.
 */
function ApiHook() {
  const [data, setData] = useState<Country[]>([]);
  const api = async () => {
    const url = 'https://restcountries.com/v2/all?fields=name,region,area';
    const response = await axios.get<Country[]>(url);
    setData(response.data)

   };
  useEffect(() => {
    api();
  
  }, [])
  return (
    <>
      <Table data={data} />
      </>
  
  )
  
}

export default ApiHook;