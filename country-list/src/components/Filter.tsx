import React from 'react';
import { Row } from 'react-table';

export const SelectColumnFilter = ({
  column: { filterValue, setFilter, preFilteredRows, id },
}: {
  column: {
    filterValue: string;
    setFilter: (value: string) => void;
    preFilteredRows: any[];
    id: any;
  };
}) => {
  const options = React.useMemo(() => {
    const uniqueOptions = new Set();
    preFilteredRows.forEach((row) => {
      uniqueOptions.add(row.values[id]);
    });
    return Array.from(uniqueOptions);
  }, [id, preFilteredRows]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value);
  };

  return (
    <select
      value={filterValue || ''}
      className="form-control"
      onChange={handleChange}
    >
      <option value="">All</option>
      {(options as Array<string | number>).map(
        (option: string | number, index: number) => (
          <option key={index} value={option}>
            {option}
          </option>
        )
      )}
    </select>
  );
};

export const TextColumnFilter = ({
  column: { filterValue, setFilter, preFilteredRows, id },
}: {
  column: {
    filterValue: string | number | readonly string[] | undefined;
    setFilter: (value: string | number | readonly string[] | undefined) => void;
    preFilteredRows: any[];
    id: any;
  };
}) => {
  return (
    <input
      type="text"
      value={filterValue && !Number.isNaN(filterValue) ? filterValue : 0}
      className="form-control"
      onChange={(e) => {
        setFilter(parseInt(e.target.value, 10));
      }}
    ></input>
  );
};

export const lessThanFilter = (
  rows: Row[],
  id: number,
  filterValue: number[]
) => {
  return rows.filter((row) => {
    const rowValue = row.values[id];
    return rowValue <= filterValue;
  });
};

lessThanFilter.autoRemove = (val: any) => typeof val !== 'number';
