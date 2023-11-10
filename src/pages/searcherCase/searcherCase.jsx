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
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-journal-medical" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v.634l.549-.317a.5.5 0 1 1 .5.866L9 6l.549.317a.5.5 0 1 1-.5.866L8.5 6.866V7.5a.5.5 0 0 1-1 0v-.634l-.549.317a.5.5 0 1 1-.5-.866L7 6l-.549-.317a.5.5 0 0 1 .5-.866l.549.317V4.5A.5.5 0 0 1 8 4zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
                    <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" />
                    <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />
                </svg>
            </button>
        );
    };
    const customData = [
        ["NNyA", "DNI", "Tipo de Caso", "Número del Caso","Estado del Caso", "Fecha de Alta", "Caso"],
        ["Guiin Flynn", "39024532","Individual", "420", "Con Seguimiento", "17/08/23", <ButtonArrow />],
        ["Lionel Andres Messi", "42124532","Grupal", "350", "Sin Seguimiento", "02/10/23", <ButtonArrow />],
        ["Cristiano Penaldo", "42124532","Grupal", "460", "Grave con Seguimiento", "02/10/23", <ButtonArrow />],
        ["Juan Roman Frizelme", "42124532","Individual", "110", "Grave sin Seguimiento", "02/10/23", <ButtonArrow />],
        ["Ariel Ortega", "42124532", "Individual", "230", "Derivado", "02/10/23", <ButtonArrow />],
        ["Cesar Aimar", "42124532", "Individual", "980", "Cerrado", "02/10/23", <ButtonArrow />],
        ["Guiin Flynn", "39024532", "Individual", "130", "Con Seguimiento", "17/08/23", <ButtonArrow />],
        ["Lionel Andres Messi", "42124532","Individual", "555", "Sin Seguimiento", "02/10/23", <ButtonArrow />],
        ["Cristiano Penaldo", "42124532", "Individual", "666", "Grave con Seguimiento", "02/10/23", <ButtonArrow />],
        ["Juan Roman Frizelme", "42124532", "Individual", "661", "Grave sin Seguimiento", "02/10/23", <ButtonArrow />],
        ["Ariel Ortega", "42124532", "Individual", "669", "Derivado", "02/10/23", <ButtonArrow />],
        ["Cesar Aimar", "42124532", "Individual", "700", "Cerrado", "02/10/23", <ButtonArrow />],
    ];

    const Header = [
        ["Tipo de Caso", "Estado del Caso", "Fecha de Alta"],
    ];

    const [query, setQuery] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const [isGraveWithoutFollowUp, setIsGraveWithoutFollowUp] = useState(false);
    const [isfollowUp, setIsfollowUp] = useState(false);
    const [isClose, setIsClose] = useState(false);
    const [isUntracked, setIsUntracked] = useState(false);
    const [isDerivate, setIsDerivate] = useState(false);
    const [isSingle, setIsSingle] = useState(false);
    const [isGrupal, setIsGrupal] = useState(false);

    const [data, setData] = useState(customData);

    const handleInputChange = (e) => {
        const inputValue = e.target.value.toLowerCase();
        setQuery(inputValue);

        const filteredData = customData.filter((row, rowIndex) => (
            rowIndex === 0 ||
            (!isChecked || row[3].toLowerCase().includes("grave")) &&
            (!isGraveWithoutFollowUp || row[3].toLowerCase().includes("grave sin seguimiento")) &&
            (!isfollowUp || row[3].toLowerCase().includes("Con Seguimiento")) &&
            (!isUntracked || row[3].toLowerCase().includes("sin seguimiento")) &&
            (!isClose || row[3].toLowerCase().includes("Cerrado")) &&
            (!isDerivate || row[3].toLowerCase().includes("Derivado")) &&
            (!isSingle || row[2].toLowerCase().includes("Individual")) &&
            (!isGrupal || row[2].toLowerCase().includes("Grupal")) &&
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
            rowIndex === 0 || !updatedIsChecked || row[4].toLowerCase().includes("grave con seguimiento")
        ));

        setIsChecked(updatedIsChecked);
        setData(filteredData);
    };

    const handleCheckboxWithoutFollowUpChange = () => {
        const updatedIsGraveWithoutFollowUp = !isGraveWithoutFollowUp;

        const filteredData = customData.filter((row, rowIndex) => (
            rowIndex === 0 || !updatedIsGraveWithoutFollowUp || row[4].toLowerCase().includes("grave sin seguimiento")
        ));

        setIsGraveWithoutFollowUp(updatedIsGraveWithoutFollowUp);
        setData(filteredData);
    };

    const handleCheckboxfollowUp = () => {
        const updatedIsfollowUp = !isfollowUp;
    
        const filteredData = customData.filter((row, rowIndex) => (
          rowIndex === 0 || !updatedIsfollowUp || row[4].toLowerCase().includes("con seguimiento")
        ));
    
        setIsfollowUp(updatedIsfollowUp);
        setData(filteredData);
      };

      const handleCheckboxUntracked = () => {
        const updatedIsUntracked = !isUntracked;
    
        const filteredData = customData.filter((row, rowIndex) => (
          rowIndex === 0 || !updatedIsUntracked || row[4].toLowerCase().includes("sin seguimiento")
        ));
    
        setIsUntracked(updatedIsUntracked);
        setData(filteredData);
      };
    
      const handleCheckboxClose = () => {
        const updatedIsClose = !isClose;
    
        const filteredData = customData.filter((row, rowIndex) => (
          rowIndex === 0 || !updatedIsClose || row[4].toLowerCase().includes("cerrado")
        ));
    
        setIsClose(updatedIsClose);
        setData(filteredData);
      };

      const handleCheckboxDerivate = () => {
        const updatedIsDerivate = !isDerivate;
    
        const filteredData = customData.filter((row, rowIndex) => (
          rowIndex === 0 || !updatedIsDerivate || row[4].toLowerCase().includes("derivado")
        ));
    
        setIsDerivate(updatedIsDerivate);
        setData(filteredData);
      };

      const handleCheckboxSingle = () => {
        const updatedIsSingle = !isSingle;
    
        const filteredData = customData.filter((row, rowIndex) => (
          rowIndex === 0 || !updatedIsSingle || row[2].toLowerCase().includes("individual")
        ));
    
        setIsSingle(updatedIsSingle);
        setData(filteredData);
      };

      const handleCheckboxGrupal = () => {
        const updatedIsGrupal = !isGrupal;
    
        const filteredData = customData.filter((row, rowIndex) => (
          rowIndex === 0 || !updatedIsGrupal || row[2].toLowerCase().includes("grupal")
        ));
    
        setIsGrupal(updatedIsGrupal);
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
                    <div className='py-3 d-flex justify-content-center'>
                        <AccordionComponent buttonText="Filtros" buttonClassName="py-2 fs-3 fw-bold align-items-center justify-content-center d-flex">
                            <DataTable data={Header} headerBackgroundColor="#F2A57F" />
                            <form action="">
                                <div className='row d-flex justify-content-between mx-3'>
                                    <div className='col-3'>
                                        <div className='container-fluid flex-column d-flex justify-content-evenly' >
                                            <div className='col-3 w-100 mb-3 py-3 ' style={{ backgroundColor: window.themeColors.footerColorText }}>
                                                <label htmlFor="Single" className="custom-checkbox">
                                                    Individual
                                                    <input type="checkbox" id="Single" checked={isSingle} onChange={handleCheckboxSingle} className="checkbox" name="filter" />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className='col-3 w-100  mb-3 py-3 ' style={{ backgroundColor: window.themeColors.footerColorText }}>
                                                <label htmlFor="Grupal" className="custom-checkbox">
                                                    Grupal
                                                    <input type="checkbox" id="Grupal" checked={isGrupal} onChange={handleCheckboxGrupal}  className="checkbox" name="filter" />
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
                                                <label htmlFor="followUp" checked={isfollowUp}  onChange={handleCheckboxfollowUp} className="custom-checkbox p-0">
                                                    Con Seguimiento
                                                    <input type="checkbox" id="followUp" className="checkbox" name="filter" />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className='col-3 w-100  mb-3 py-3 ' style={{ backgroundColor: window.themeColors.footerColorText }}>
                                                <label htmlFor="Untracked" className="custom-checkbox p-0">
                                                    Sin Seguimiento
                                                    <input type="checkbox" id="Untracked" checked={isUntracked} onChange={handleCheckboxUntracked} className="checkbox" name="filter" />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className='col-3 w-100  mb-3 py-3 ' style={{ backgroundColor: window.themeColors.footerColorText }}>
                                                <label htmlFor="Derivate" className="custom-checkbox p-0">
                                                    Derivado
                                                    <input type="checkbox" id="Derivate" checked={isDerivate} onChange={handleCheckboxDerivate} className="checkbox" name="filter" />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className='col-3 w-100  mb-3 py-3 ' style={{ backgroundColor: window.themeColors.footerColorText }}>
                                                <label htmlFor="Close" className="custom-checkbox p-0">
                                                    Cerrado
                                                    <input type="checkbox" id="Close" checked={isClose}  onChange={handleCheckboxClose} className="checkbox" name="filter" />
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
