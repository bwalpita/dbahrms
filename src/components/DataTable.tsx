import React, { useState } from 'react';
import { SearchIcon, EditIcon, TrashIcon, ChevronUpIcon, ChevronDownIcon } from 'lucide-react';
interface Column {
  key: string;
  label: string;
  sortable?: boolean;
}
interface DataTableProps {
  columns: Column[];
  data: any[];
  onEdit?: (item: any) => void;
  onDelete?: (item: any) => void;
}
export function DataTable({
  columns,
  data,
  onEdit,
  onDelete
}: DataTableProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const handleSort = (columnKey: string) => {
    if (sortColumn === columnKey) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(columnKey);
      setSortDirection('asc');
    }
  };
  const filteredData = data.filter(item => Object.values(item).some(value => String(value).toLowerCase().includes(searchTerm.toLowerCase())));
  const sortedData = sortColumn ? [...filteredData].sort((a, b) => {
    const aVal = a[sortColumn];
    const bVal = b[sortColumn];
    if (sortDirection === 'asc') {
      return aVal > bVal ? 1 : -1;
    }
    return aVal < bVal ? 1 : -1;
  }) : filteredData;
  const totalPages = Math.ceil(sortedData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = sortedData.slice(startIndex, startIndex + itemsPerPage);
  return <div className="bg-white rounded-lg shadow">
      {/* Search Bar */}
      <div className="p-4 border-b border-gray-200">
        <div className="relative">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} placeholder="Search..." className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none" />
        </div>
      </div>
      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              {columns.map(column => <th key={column.key} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {column.sortable ? <button onClick={() => handleSort(column.key)} className="flex items-center gap-2 hover:text-gray-700">
                      {column.label}
                      {sortColumn === column.key && (sortDirection === 'asc' ? <ChevronUpIcon className="w-4 h-4" /> : <ChevronDownIcon className="w-4 h-4" />)}
                    </button> : column.label}
                </th>)}
              {(onEdit || onDelete) && <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th>}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {paginatedData.map((item, index) => <tr key={index} className="hover:bg-gray-50">
                {columns.map(column => <td key={column.key} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {item[column.key]}
                  </td>)}
                {(onEdit || onDelete) && <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <div className="flex gap-2">
                      {onEdit && <button onClick={() => onEdit(item)} className="text-blue-600 hover:text-blue-800">
                          <EditIcon className="w-4 h-4" />
                        </button>}
                      {onDelete && <button onClick={() => onDelete(item)} className="text-red-600 hover:text-red-800">
                          <TrashIcon className="w-4 h-4" />
                        </button>}
                    </div>
                  </td>}
              </tr>)}
          </tbody>
        </table>
      </div>
      {/* Pagination */}
      <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
        <div className="text-sm text-gray-700">
          Showing {startIndex + 1} to{' '}
          {Math.min(startIndex + itemsPerPage, sortedData.length)} of{' '}
          {sortedData.length} entries
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-700">Records per page</span>
            <select value={itemsPerPage} onChange={e => {
            setItemsPerPage(Number(e.target.value));
            setCurrentPage(1);
          }} className="border border-gray-300 rounded px-2 py-1 text-sm">
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
            </select>
          </div>
          <div className="flex gap-1">
            {Array.from({
            length: totalPages
          }, (_, i) => i + 1).map(page => <button key={page} onClick={() => setCurrentPage(page)} className={`px-3 py-1 rounded ${currentPage === page ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                {page}
              </button>)}
          </div>
        </div>
      </div>
    </div>;
}