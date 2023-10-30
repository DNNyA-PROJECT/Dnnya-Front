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
    const customData = [
        ["NNyA", "DNI", "Número del Caso", "Estado del Caso", "Fecha de Alta", " "],
        ["Guiin Flynn", "39024532", "420", "Con Seguimiento", "17/08/23", " "],
        ["Soynara Frost", "42124532", "660", "Sin Seguimiento", "02/10/23", " "],
        ["Soynara Frost", "42124532", "660", "Sin Seguimiento", "02/10/23", " "],
        ["Soynara Frost", "42124532", "660", "Sin Seguimiento", "02/10/23", " "],
        ["Soynara Frost", "42124532", "660", "Sin Seguimiento", "02/10/23", " "],
        ["Soynara Frost", "42124532", "660", "Sin Seguimiento", "02/10/23", " "],
        ["Soynara Frost", "42124532", "660", "Sin Seguimiento", "02/10/23", " "],
        ["Soynara Frost", "42124532", "660", "Sin Seguimiento", "02/10/23", " "],
        ["Soynara Frost", "42124532", "660", "Sin Seguimiento", "02/10/23", " "],
        ["Soynara Frost", "42124532", "660", "Sin Seguimiento", "02/10/23", " "],
        ["Soynara Frost", "42124532", "660", "Sin Seguimiento", "02/10/23", " "],
        ["Soynara Frost", "42124532", "660", "Sin Seguimiento", "02/10/23", " "],
        ["Soynara Frost", "42124532", "660", "Sin Seguimiento", "02/10/23", " "],
    ];
    const Header = [
        ["Tipo de Caso", "Estado del Caso", "Fecha de Alta"],

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

                <div className='container-fluid d-flex flex-column col-lg-9 col-md-6 '>
                    <div className='py-3 d-flex justify-content-center fw-bold'>
                        Buscador
                    </div>
                    <div className='d-flex py-3 container-fluid' style={{ backgroundColor: window.themeColors.gris }}>
                        <div className='d-flex align-items-center'>
                            Busqueda
                        </div>
                        <Searcher query={query} className="br-0" handleInputChange={handleInputChange} />
                    </div>
                    <div className='py-3'>
                        <AccordionComponent buttonText="Filtros" buttonClassName="py-3 fw-bold">
                            <DataTable data={Header} headerBackgroundColor="#F2A57F" />
                            <div className='row d-flex justify-content-between mx-3'>
                                <div className='col-3'>
                                    <div className='container-fluid flex-column d-flex justify-content-evenly' >
                                        <div className='col-3 w-100 mb-3 py-3 ' style={{ backgroundColor: window.themeColors.footerColorText }}>
                                            <label htmlFor="Individual" className="custom-checkbox">
                                                Individual
                                                <input type="checkbox" id="Individual" className="checkbox" name="Case" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                        <div className='col-3 w-100  mb-3 py-3 ' style={{ backgroundColor: window.themeColors.footerColorText }}>
                                            <label htmlFor="GrandMother" className="custom-checkbox">
                                                Grupal
                                                <input type="checkbox" id="GrandMother" className="checkbox" name="Relation" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div className='col-3'>
                                    <div className='container-fluid flex-column d-flex justify-content-evenly' >
                                        <div className='col-3 w-100 mb-3 py-3 ' style={{ backgroundColor: window.themeColors.footerColorText }}>
                                            <label htmlFor="indi" className="custom-checkbox p-0">
                                                Grave con Seguimiento
                                                <input type="checkbox" id="Individual" className="checkbox" name="Case" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                        <div className='col-3 w-100  mb-3 py-3 ' style={{ backgroundColor: window.themeColors.footerColorText }}>
                                            <label htmlFor="GrandMother" className="custom-checkbox p-0">
                                                Grave sin Seguimiento
                                                <input type="checkbox" id="GrandMother" className="checkbox" name="Relation" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                        <div className='col-3 w-100  mb-3 py-3 ' style={{ backgroundColor: window.themeColors.footerColorText }}>
                                            <label htmlFor="GrandMother" className="custom-checkbox p-0">
                                                Grave sin Seguimiento
                                                <input type="checkbox" id="GrandMother" className="checkbox" name="Relation" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                        <div className='col-3 w-100  mb-3 py-3 ' style={{ backgroundColor: window.themeColors.footerColorText }}>
                                            <label htmlFor="GrandMother" className="custom-checkbox p-0">
                                                Grave sin Seguimiento
                                                <input type="checkbox" id="GrandMother" className="checkbox" name="Relation" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                        <div className='col-3 w-100  mb-3 py-3 ' style={{ backgroundColor: window.themeColors.footerColorText }}>
                                            <label htmlFor="GrandMother" className="custom-checkbox p-0">
                                                Grave sin Seguimiento
                                                <input type="checkbox" id="GrandMother" className="checkbox" name="Relation" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                        <div className='col-3 w-100  mb-3 py-3 ' style={{ backgroundColor: window.themeColors.footerColorText }}>
                                            <label htmlFor="GrandMother" className="custom-checkbox p-0">
                                                Grave sin Seguimiento
                                                <input type="checkbox" id="GrandMother" className="checkbox" name="Relation" />
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
