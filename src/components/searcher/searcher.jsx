import React, { useState } from 'react';

const Buscador = ({ datos }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setQuery(inputValue);
  };

  const filtrarResultados = () => {
    const filtro = query.toLowerCase().trim();
    if (filtro === '') {
      return datos.slice(1); // Mostrar la tabla completa si no hay filtro
    }

    const resultados = datos.slice(1).filter((fila) =>
      fila.some((item) => {
        if (typeof item === 'string') {
          return item.toLowerCase().includes(filtro);
        }
        return false; // Tratar los componentes como no coincidentes
      })
    );

    return resultados;
  };

  const resultados = filtrarResultados();

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
          {resultados.length > 0 ? (
            resultados.map((fila, index) => (
              <tr key={index}>
                {fila.map((item, i) => (
                  <td key={i}>
                    {typeof item === 'string' ? (
                      <span>
                        {item.split(query).map((parte, j) => (
                          <span key={j}>
                            {j > 0 && <strong>{query}</strong>}
                            {parte}
                          </span>
                        ))}
                      </span>
                    ) : (
                      item
                    )}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={datos[0].length} className="text-center">
                No se encontraron coincidencias.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Buscador;
