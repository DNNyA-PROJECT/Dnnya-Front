import React from 'react';

const DataTable = ({ data, headerBackgroundColor }) => {
  if (!data) {
    return null;
  }

  const tableStyle = {
    width: '100%', 
  };

  const thStyle = {
    backgroundColor: headerBackgroundColor,
  };

  const tdStyle = {
    textAlign: 'center', 
    verticalAlign: 'middle', 
  };

  return (
    <table className="table" style={tableStyle}>
      <thead>
        <tr>
          {data[0].map((header, index) => (
            <th className='py-3' key={index} style={thStyle}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.slice(1).map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, colIndex) => (
              <td className='py-3' key={colIndex} style={tdStyle}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;