import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { colors } from '../../assets/styles/theme.js';
import '../../assets/styles/styles.css';
import '../../assets/styles/normalize.css';
import Searcher from '../../components/searcher/searcher.jsx';
import DataTable from '../../components/dataTable/dataTable.jsx';
import Menu from '../../components/partials/Menu.jsx';
import Footer from '../../components/partials/footer.jsx';
import AccordionComponent from '../../components/AccordionComponent/AccordionComponent.jsx'

window.themeColors = colors;

const CaseFollowUp = () => {

    const ButtonArrow = () => {
        const handleFolderClick = () => {

        }
        return (
            <button className='folderButton' onClick={handleFolderClick}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-archive-fill" viewBox="0 0 16 16">
                    <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15h9.286zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zM.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8H.8z" />
                </svg>
            </button>
        );
    };
    const customData = [
        ["NNyA", "DNI", "Número del Caso", "Estado del Caso", "Fecha de Alta", " "],
        ["Guiin Flynn", "39024532", "420", "Con Seguimiento", "17/08/23", <ButtonArrow />],
        ["Lionel Andres Messi", "42124532", "660", "Sin Seguimiento", "02/10/23", <ButtonArrow />],
        ["Cristiano Penaldo", "42124532", "660", "Grave con Seguimiento", "02/10/23", <ButtonArrow />],
        ["Juan Roman Frizelme", "42124532", "660", "Grave sin Seguimiento", "02/10/23", <ButtonArrow />],
        ["Ariel Ortega", "42124532", "660", "Derivado", "02/10/23", <ButtonArrow />],
        ["Cesar Aimar", "42124532", "660", "Cerrado", "02/10/23", <ButtonArrow />],
        ["Guiin Flynn", "39024532", "420", "Con Seguimiento", "17/08/23", <ButtonArrow />],
        ["Lionel Andres Messi", "42124532", "660", "Sin Seguimiento", "02/10/23", <ButtonArrow />],
        ["Cristiano Penaldo", "42124532", "660", "Grave con Seguimiento", "02/10/23", <ButtonArrow />],
        ["Juan Roman Frizelme", "42124532", "660", "Grave sin Seguimiento", "02/10/23", <ButtonArrow />],
        ["Ariel Ortega", "42124532", "660", "Derivado", "02/10/23", <ButtonArrow />],
        ["Cesar Aimar", "42124532", "660", "Cerrado", "02/10/23", <ButtonArrow />],
    ];

    const Header = [
        ["Tipo de Caso", "Estado del Caso", "Fecha de Alta"],

    ];

    const [query, setQuery] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const [isGraveWithoutFollowUp, setIsGraveWithoutFollowUp] = useState(false);

    const [data, setData] = useState(customData);

    const handleInputChange = (e) => {
        const inputValue = e.target.value.toLowerCase();
        setQuery(inputValue);
      
        const filteredData = customData.filter((row, rowIndex) => (
          rowIndex === 0 ||
          (!isChecked || row[3].toLowerCase().includes("grave")) &&
          (!isGraveWithoutFollowUp || row[3].toLowerCase().includes("grave sin seguimiento")) &&
          row.some((cell) => {
            if (typeof cell === 'string') {
              const cellValue = cell.toLowerCase();
              const searchWords = inputValue.split(' ').filter(word => word.trim() !== '');
      
              return searchWords.every(word => cellValue.includes(word));
            }
            return false;
          })
        ));
      
        setData(filteredData);
      };
      
      const handleCheckboxWithFollowUpChange = () => {
        const updatedIsChecked = !isChecked;
      
        const filteredData = customData.filter((row, rowIndex) => (
          rowIndex === 0 || !updatedIsChecked || row[3].toLowerCase().includes("grave con seguimiento")
        ));
      
        setIsChecked(updatedIsChecked);
        setData(filteredData);
      };
      
      const handleCheckboxWithoutFollowUpChange = () => {
        const updatedIsGraveWithoutFollowUp = !isGraveWithoutFollowUp;
      
        const filteredData = customData.filter((row, rowIndex) => (
          rowIndex === 0 || !updatedIsGraveWithoutFollowUp || row[3].toLowerCase().includes("grave sin seguimiento")
        ));
      
        setIsGraveWithoutFollowUp(updatedIsGraveWithoutFollowUp);
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
                        Buscador
                    </div>
                    <div className='d-flex py-3 container-fluid' style={{ backgroundColor: window.themeColors.gris }}>
                        <div className='d-flex align-items-center'>
                            Busqueda
                        </div>
                        <Searcher query={query} className="br-0" handleInputChange={handleInputChange} />
                    </div>
                    <div className='py-3'>
                        <AccordionComponent buttonText="Filtros" buttonClassName="py-3 fs-3 fw-bold">
                            <DataTable data={Header} headerBackgroundColor="#F2A57F" />
                            <form action="">
                                <div className='row d-flex justify-content-between mx-3'>
                                    <div className='col-3'>
                                        <div className='container-fluid flex-column d-flex justify-content-evenly' >
                                            <div className='col-3 w-100 mb-3 py-3 ' style={{ backgroundColor: window.themeColors.footerColorText }}>
                                                <label htmlFor="Individual" className="custom-checkbox">
                                                    Individual
                                                    <input type="checkbox" id="Individual" className="checkbox" name="filter" />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className='col-3 w-100  mb-3 py-3 ' style={{ backgroundColor: window.themeColors.footerColorText }}>
                                                <label htmlFor="GrandMother" className="custom-checkbox">
                                                    Grupal
                                                    <input type="checkbox" id="GrandMother" className="checkbox" name="filter" />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='col-3'>
                                        <div className='container-fluid flex-column d-flex justify-content-evenly' >
                                            <div className='col-3 w-100 mb-3 py-3 ' style={{ backgroundColor: window.themeColors.footerColorText }}>
                                                <label htmlFor="RecordWithFollowUp" className="custom-checkbox p-0">
                                                    Grave con Seguimiento
                                                    <input
                                                        type="checkbox"
                                                        checked={isChecked}
                                                        onChange={handleCheckboxWithFollowUpChange}
                                                        id="RecordWithFollowUp"
                                                        className="checkbox"
                                                        name="filter"
                                                    />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className='col-3 w-100  mb-3 py-3 ' style={{ backgroundColor: window.themeColors.footerColorText }}>
                                                <label htmlFor="Record-without-Follow-up" className="custom-checkbox p-0">
                                                    Grave sin Seguimiento
                                                    <input type="checkbox" checked={isGraveWithoutFollowUp}
                                                        onChange={handleCheckboxWithoutFollowUpChange} id="Record-without-Follow-up" className="checkbox" name="filter" />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className='col-3 w-100  mb-3 py-3 ' style={{ backgroundColor: window.themeColors.footerColorText }}>
                                                <label htmlFor="followup" className="custom-checkbox p-0">
                                                    con Seguimiento
                                                    <input type="checkbox" id="followup" className="checkbox" name="filter" />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className='col-3 w-100  mb-3 py-3 ' style={{ backgroundColor: window.themeColors.footerColorText }}>
                                                <label htmlFor="Untracked" className="custom-checkbox p-0">
                                                    sin Seguimiento
                                                    <input type="checkbox" id="Untracked" className="checkbox" name="filter" />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className='col-3 w-100  mb-3 py-3 ' style={{ backgroundColor: window.themeColors.footerColorText }}>
                                                <label htmlFor="Derivate" className="custom-checkbox p-0">
                                                    Derivado
                                                    <input type="checkbox" id="Derivate" className="checkbox" name="filter" />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className='col-3 w-100  mb-3 py-3 ' style={{ backgroundColor: window.themeColors.footerColorText }}>
                                                <label htmlFor="Close" className="custom-checkbox p-0">
                                                    Cerrado
                                                    <input type="checkbox" id="Close" className="checkbox" name="filter" />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <div>
                                        </div>
                                    </div>
                                    <div className='col-3'>
                                        <div className='container-fluid flex-column d-flex justify-content-evenly' >
                                            <input type="date" name="" className='py-3' id="" />
                                        </div>
                                    </div>
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

export default CaseFollowUp;
