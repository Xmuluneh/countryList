/* This code is defining a reusable table component using the `useTable`, `useSortBy`, and
`usePagination` hooks from the `react-table` library. The component takes in `columns`, `data`, and
`noDataMsg` as props and renders a table with sorting, pagination, and page size options. The
`useTable` hook is used to create the table instance and the returned properties and methods are
used to render the table. The `headerGroups` and `prepareRow` properties are used to render the
table header and body, respectively. The `canPreviousPage`, `canNextPage`, `gotoPage`, `nextPage`,
`previousPage`, `setPageSize`, `pageIndex`, and `pageSize` properties and methods are used to render
the pagination and page size options. */
import React from 'react';
import { useTable, useSortBy, usePagination } from 'react-table';
interface TableProps {
  columns: any;
  data: any;
  noDataMsg: any;
}

export const Table = ({ columns, data, noDataMsg }: TableProps) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    useSortBy,
    usePagination
  );

  return (
    <div className="table table-responsive pt-2">
      <table {...getTableProps()} className="table table-striped">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ''}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.length > 0 ? (
            page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    );
                  })}
                </tr>
              );
            })
          ) : (
            <tr className="table-row">
              <td key={'no-record'}>{noDataMsg}</td>
            </tr>
          )}
        </tbody>
      </table>

      <div className="pagination" style={{ padding: '0.5rem', float: 'right' }}>
        <span style={{ paddingRight: '20px' }}>
          <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
            {'<<'}
          </button>{' '}
          <button onClick={() => previousPage()} disabled={!canPreviousPage}>
            {'<'}
          </button>{' '}
          <button onClick={() => nextPage()} disabled={!canNextPage}>
            {'>'}
          </button>{' '}
          <button
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
            {'>>'}
          </button>{' '}
        </span>
        <span style={{ paddingRight: '20px' }}>
          Page{' '}
          <strong>
            {pageOptions.length === 0 ? 0 : pageIndex + 1} of{' '}
            {pageOptions.length}
          </strong>{' '}
        </span>
        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
