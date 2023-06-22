import React , { useEffect, useState } from 'react'
import './App.css'
import { ApiHook } from './api/apihook';
import { Country } from './interface/Interfce';

const path = 'https://restcountries.com/v2/all?fields=name,region,area';

function App() {

  const [countryData, setCountryData] = useState<Array<Country>>();

  
  const { api,error,isLoading} = ApiHook();

  const getCountryData = async () => {
    const response  = await api(path, {method: 'GET'})
    console.log(response)
    if(response?.status == 200) {
      const data = await response?.json();
      setCountryData(data);
      console.log(data);
    }
  }

  useEffect (() => {
    getCountryData();
  }, [])

  if(isLoading) {
    <p> Loading</p>
  }

  return (
    <>
    <Table column = {column} data = {countryData} />
    </>
  )
}

export default App
