import React, { useEffect, useState } from 'react';
import { Country } from '../interface/Interface';
import { ApiHook } from '../api/apihook';
import { apiUrl } from '../util/path';
import { Table } from './Table';
import { Loading } from './Loading';
import { error } from 'console';

function CountryList() {
  const [countryData, setCountryData] = useState<Array<Country>>([]);
  const { api, isLoading } = ApiHook();
  useEffect(() => {
    api(apiUrl, { method: 'GET' })
      .then((response) => {
        setCountryData(Response?.data);
      })
      .catch((error) => console.log(error));
  }, []);
  const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Region',
        accessor: 'region',
      },
      {
        Header: 'Area',
        accessor: 'area',
      },
    ],
    []
  );
  if (isLoading) {
    return <div className="container"></div>;
  }
  return (
    <div className="container">
      <Table columns={columns} data={countryData} />
    </div>
  );
}
export default CountryList;
