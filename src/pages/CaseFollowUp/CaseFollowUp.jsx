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
        ["Guiin Flynn", "39024532", "420", "Con Seguimiento", "17/08/23", "╚"],
        ["Soynara Frost", "42124532", "660", "Sin Seguimiento", "02/10/23", "‼"],
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
                    <div className='py-3 fw-bold'>
                        Buscador
                    </div>
                    <div>
                        <Searcher query={query} handleInputChange={handleInputChange} />
                    </div>
                    <div className='py-3'>
                        <AccordionComponent buttonText="Filtros" buttonClassName="fw-bold">
                            <div className='row'>
                                <input type="checkbox" className='col-3'  name="" id="" />
                                <input type="checkbox" name="" className='col-3' id="" />
                                <div className='col-3'> jajasja</div>
                            </div>
                            <div className='row'>
                                <input type="checkbox" className='col-3'  name="" id="" />
                                <input type="checkbox" name="" className='col-3' id="" />
                                <div className='col-3'> jajasja</div>
                            </div>
                            <div>
                                
                            </div>
                        </AccordionComponent>
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

export default CaseFollowUp;
