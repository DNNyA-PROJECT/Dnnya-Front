import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const DataTable = ({ data, headerBackgroundColor }) => {
  const [query, setQuery] = useState('');
  const [filteredData, setFilteredData] = useState(data.slice(1));

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setQuery(inputValue);

    const filtered = data.slice(1).filter((row) => {
      return row.some((cell) =>
        typeof cell === 'string' && cell.toLowerCase().includes(inputValue.toLowerCase())
      );
    });

    setFilteredData(filtered);
  };

  if (!data || data.length === 0 || data[0].length === 0) {
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
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <td key={colIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {filteredData.length === 0 && (
        <div className="table m-0">
          <div className="table-row">
            <div className="table-cell">
              No se encontraron coincidencias.
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DataTable;




