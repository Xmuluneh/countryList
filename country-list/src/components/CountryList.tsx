import React, { useEffect, useState } from 'react';
import { Country } from '../interface/Interface';
import { ApiHook } from '../api/ApiHook';
import { apiUrl } from '../util/path';
import { Table } from './Table';
import { Loading } from './Loading';
import { SelectColumnFilter, TextColumnFilter, lessThanFilter } from './Filter';

export const CountryList = () => {
  const [countryData, setCountryData] = useState<Array<Country>>([]);

  const { api, isLoading } = ApiHook();
  useEffect(() => {
    api(apiUrl, { method: 'GET' })
      .then((response) => {
        if (response?.status === 200) {
          return response?.data;
        }
        throw new Error(response?.statusText);
      })
      .then((data) => {
        setCountryData(data);
      })
      .catch((error) => console.error(error));
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
        Filter: SelectColumnFilter,
        filter: 'includes',
      },
      {
        Header: 'Area',
        accessor: 'area',
        Filter: TextColumnFilter,
        filter: lessThanFilter,
      },
    ],
    []
  );

  if (isLoading) {
    return (
      <div className="container">
        <Loading />
      </div>
    );
  }

  return (
    <div className="container">
      <Table
        columns={columns}
        data={countryData}
        noDataMsg={'No Record Found'}
      />
    </div>
  );
};
