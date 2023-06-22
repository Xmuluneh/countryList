import React,{useMemo} from "react"
import { useTable,useSortBy } from 'react-table'
//import  from './Datat.json'
import { COLUMNS } from './Columns'


const SortingTable = () => {
  const columns = useMemo(()=> COLUMNS,[])
  const data = useMemo(() => Data, []) 
  
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow
    
  }=useTable({
    columns,
    data
    
  },
  useSortBy)
  
  return (
    <table {...getTableProps}>
        <thead>
          {headerGroups.map((headerGroups) => (
            <tr {...headerGroups.getHeaderGroupProps()}>
              {
                headerGroups.headers.map((columns) => (
                  <th {...columns.getHeaderProps(columns.getSortByToggleProps())}>{columns.render('Header')}</th>
                  <span>
                      {columns.isSorted ? (columns.isSortedDesc ? '':) : ''}
                  </span>
                ))
              }
               </tr>

          ))}
   
      </thead>
      <tbody {...getTableBodyProps}>
        {rows.map(row => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {
                row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render('cell')}</td>
                  )
                })
              }

            </tr>
          )
        })}
      </tbody>
      <tfoot>
        {footerGroups.map((footerGroup)=>(
          <tr {...footerGroup.getFooterGroupProps()}>
            {footerGroup.headers.map((column) => (
              <td {...column.getFooterProps}>{column.render('Footer')}</td>
            ))}
        </tr>
       ))}
      </tfoot>
</table>
    
  )
};
export default SortingTable;