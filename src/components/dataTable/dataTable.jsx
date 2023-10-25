import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const DataTable = ({ data, headerBackgroundColor }) => {
  const [query, setQuery] = useState('');
  const [filteredData, setFilteredData] = useState(data.slice(1));

  useEffect(() => {
    const filtered = data.slice(1).filter((row) => {
      return row.some((cell) =>
        typeof cell === 'string' && cell.toLowerCase().includes(query.toLowerCase())
      );
    });
    setFilteredData(filtered);
  }, [data, query]);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setQuery(inputValue);
  };

  const noResults = (filteredData.length === 0 && query !== '') ? true : false;

  if (data === null || (Array.isArray(data) && data.length === 0)) {
    return <div>No hay datos para mostrar</div>;
  }

  const header = data[0];

  return (
    <div>
      <div className="search-bar">
        <input
          type="text"
          className="form-control"
          placeholder="Buscar..."
          value={query}
          onChange={handleInputChange}
        />
      </div>
      <table className="table m-0">
        <thead>
          <tr>
            {header.map((cell, index) => (
              <th key={index} style={{ backgroundColor: headerBackgroundColor }}>{cell}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row, rowIndex) => (
            <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'even-row' : 'odd-row'}>
              {row.map((cell, colIndex) => (
                <td key={colIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {noResults && (
        <table className="table m-0">
          <tbody>
            <tr>
              <td>No se encontraron coincidencias.</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default DataTable;