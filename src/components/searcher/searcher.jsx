import React from 'react';

const Search = ({ query, handleInputChange, noResults }) => {
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

export default Search;