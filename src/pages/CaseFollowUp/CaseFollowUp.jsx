import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { colors } from '../../assets/styles/theme.js';
import '../../assets/styles/styles.css';
import '../../assets/styles/normalize.css';
import Searcher from '../../components/searcher/searcher.jsx';
import DataTable from '../../components/dataTable/dataTable.jsx';
import Menu from '../../components/partials/Menu.jsx';
import Footer from '../../components/partials/footer.jsx';

window.themeColors = colors;

const DataTableContainer = () => {
  const customData = [
    ["NNyA", "DNI", "Número del Caso", "Estado del Caso", "Fecha de Alta"],
    ["funes", "Ramiro", "121312131", "asda", "asda"],
    ["funesas", "Ramiro", "12131213231", "asda", "asda"],
    ["funes", "Ramirasdo", "121312131", "asda", "asda"],
  ];

  const [data, setData] = useState(customData);
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setQuery(inputValue);

    const filteredData = customData.filter((row, rowIndex) => {
      if (rowIndex === 0) {
        return true;
      }
      return row.some((cell) =>
        typeof cell === 'string' && cell.toLowerCase().includes(inputValue.toLowerCase())
      );
    });
    setData(filteredData);
  };

  return (
    <div>
      <div className='box container-fluid row p-0 ' style={{ backgroundColor: window.themeColors.footerBackground.bakgroundFColor }}>

        <div className='col-md-2 m-0 container-fluid p-0 menubox d-none d-md-block' style={{ backgroundColor: window.themeColors.color }}>
          <Menu />
        </div>

        <div className='container-fluid d-flex align-items-center flex-column col-lg-9 col-md-6 '>
          <div>
            Buscador
          </div>
          <div>
            <Searcher query={query} handleInputChange={handleInputChange} />
          </div>
          <div>
            filtros
          </div>
          <DataTable data={data} headerBackgroundColor="#F2A57F" />
        </div>
      </div>

      <div className='container-fluid p-0 m-0'>
        <Footer />
      </div>
    </div>
  );
};

export default DataTableContainer;
