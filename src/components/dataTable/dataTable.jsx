import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const DataTable = ({ data, headerBackgroundColor }) => {
  if (!data || data.length === 0 || data[0].length === 0) {
    return <div>No hay datos para mostrar</div>;
  }

  const header = data[0];
  const body = data.slice(1);

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            {header.map((cell, index) => (
              <th key={index} style={{ backgroundColor: headerBackgroundColor }}>{cell}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {body.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <td key={colIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;