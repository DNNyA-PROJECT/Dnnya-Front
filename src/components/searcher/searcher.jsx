import React, { useState } from 'react';

const Buscador = ({ datos }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setQuery(inputValue);
  };

  const filtrarResultados = () => {
    const filtro = query.toLowerCase();
    return datos
      .slice(1)
      .filter(
        (fila) =>
          fila[1].toLowerCase().includes(filtro) || fila[2].includes(filtro)
      );
  };

  return (
    <div>
      <input
        type="text"
        className="form-control"
        placeholder="Buscar..."
        value={query}
        onChange={handleInputChange}
      />
      <table className="table mt-2">
        <tbody>
          {query !== '' ? (
            filtrarResultados().map((fila, index) => (
              <tr key={index}>
                <td>{fila[0]}</td>
                <td>{fila[1]}</td>
                <td>{fila[2]}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No se encontraron coincidencias.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Buscador;
