import {react, useState } from 'react';
import Searcher from '../../components/searcher/searcher.jsx';
import DataTable from '../../components/dataTable/dataTable.jsx';
import Menu from '../../components/partials/Menu.jsx';
import Footer from '../../components/partials/footer.jsx';
import AccordionComponent from '../../components/AccordionComponent/AccordionComponent.jsx'

const entryNotesFinder = () => {

  const Header = [
    ["Fecha", "Responsable Registro"],
];

const customData = [
  ["Nota", "Número Único","Fecha", "Responsable Registro", "Dirgido A"],
  ["Nota", "Número Único","Fecha", "Responsable Registro", "Municipalidad de Garupa"],
  ["Nota", "Número Único","Fecha", "Responsable Registro", "Municipalidad de Posadas"],
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
      <div className=' container-fluid row p-0 m-0 ' style={{ backgroundColor: window.themeColors.footerBackground.bakgroundFColor }}>

          <div className='col-md-2 m-0 container-fluid p-0 menubox d-none d-md-block' style={{ backgroundColor: window.themeColors.color }}>
              <Menu />
          </div>

          <div className='container-fluid d-flex flex-column col-lg-10 m-0 p-0 col-md-6 '>
              <div className='py-3 d-flex fs-3 justify-content-center fw-bold'>
                  Buscador de Notas de Salida
              </div>
              <div className='d-flex py-3 container-fluid' style={{ backgroundColor: window.themeColors.gris }}>
                  <div className='d-flex align-items-center'>
                      Busqueda
                  </div>
                  <Searcher query={query} className="br-0" handleInputChange={handleInputChange} />
              </div>
              <div className='py-3 d-flex justify-content-center'>
                  <AccordionComponent buttonText="Filtros" buttonClassName="py-2 fs-3 fw-bold align-items-center justify-content-center d-flex">
                      <DataTable data={Header} headerBackgroundColor="#F2A57F" />
                      <form action="">
                          <div className='row d-flex justify-content-between mx-3'>
                          </div>
                      </form>
                  </AccordionComponent>
              </div>
              <div className='container-fluid table-container p-0 my-5 mx-0' style={{ overflowX: 'auto', overflowY: 'auto', maxHeight: '25vw' }}>
                  <DataTable data={data} headerBackgroundColor="#F2A57F" />
              </div>
          </div>
      </div>

      <div className='container-fluid p-0 m-0'>
          <Footer />
      </div>
  </div>
);
};

export default entryNotesFinder;



