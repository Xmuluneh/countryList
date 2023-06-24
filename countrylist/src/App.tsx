import React, { useEffect, useState } from 'react';
import './App.css';
import { ApiHook } from './api/apihook';
import { Country } from '../Interfce';
import { CountryList } from './component/CountryList';

const path = 'https://restcountries.com/v2/all?fields=name,region,area';

function App() {
  return <CountryList />;
}

export default App;
