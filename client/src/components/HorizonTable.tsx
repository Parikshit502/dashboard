// src/components/HorizonTable.tsx

import React from 'react';
import { useTable } from 'react-table';

const HorizonTable: React.FC = () => {
  const data = React.useMemo(
    () => [
      { name: 'John Doe', email: 'john@example.com', status: 'Active', role: 'Admin' },
      { name: 'Jane Doe', email: 'jane@example.com', status: 'Inactive', role: 'User' },
      { name: 'Mike Smith', email: 'mike@example.com', status: 'Active', role: 'Editor' },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      { Header: 'Name', accessor: 'name' },
      { Header: 'Email', accessor: 'email' },
      { Header: 'Status', accessor: 'status' },
      { Header: 'Role', accessor: 'role' },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div className="overflow-x-auto bg-white shadow-md rounded-lg p-4">
      <table {...getTableProps()} className="min-w-full">
        <thead className="bg-gray-50">
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()} className="text-left">
              {headerGroup.headers.map(column => (
                <th
                  {...column.getHeaderProps()}
                  className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className="border-t border-gray-200">
                {row.cells.map(cell => (
                  <td
                    {...cell.getCellProps()}
                    className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                  >
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default HorizonTable;
