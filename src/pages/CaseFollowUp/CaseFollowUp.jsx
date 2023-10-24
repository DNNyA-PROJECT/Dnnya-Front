import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { colors } from '../../assets/styles/theme.js';
import '../../assets/styles/styles.css';
import '../../assets/styles/normalize.css';
import Footer from '../../components/partials/footer.jsx';
import Menu from '../../components/partials/Menu.jsx';
import DataTable from '../../components/dataTable/dataTable.jsx';
import Searcher from '../../components/searcher/searcher.jsx'

window.themeColors = colors;

function CaseFollowUp() {
    const customData = [
        ["NNyA", "DNI", "Número del Caso", "Estado del Caso", "Fecha de Alta"],
        ["funes", "Ramiro", "121312131", "asda" , "asda"],
        ["funes", "Ramiro", "121312131", "asda" , "asda"],
        ["funes", "Ramiro", "121312131", "asda" , "asda"],
    ];
    
    return (
        <>
            <div className='box container-fluid row p-0 ' style={{ backgroundColor: window.themeColors.footerBackground.bakgroundFColor }}>

                <div className='col-md-2 m-0 container-fluid p-0 menubox d-none d-md-block' style={{ backgroundColor: window.themeColors.color }}>
                    <Menu />
                </div>

                <div className='container-fluid d-flex align-items-center flex-column col-lg-9 col-md-6 '>
                    <div>
                        Buscador
                    </div>
                    <div>
                        <Searcher className="order-1" datos={customData} />
                    </div>
                   <div className='order-2'>
                   filtros
                    </div> 
                    <DataTable data={customData} headerBackgroundColor="#F2A57F" />
                </div>
            </div>


            <div className='container-fluid p-0 m-0'>
                <Footer />
            </div>
        </>
    )
}

export default CaseFollowUp;



