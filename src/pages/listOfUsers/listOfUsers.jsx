import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { colors } from '../../assets/styles/theme.js'
import '../../assets/styles/styles.css'
import '../../assets/styles/normalize.css'
import Footer from '../../components/partials/footer.jsx'
import Menu from '../../components/partials/Menu.jsx'

window.themeColors = colors;

function ListOfUsers() {
    return (
        <>
            <div className='box container-fluid row p-0 ' style={{ backgroundColor: window.themeColors.footerBackground.bakgroundFColor }}>



                <div className='col-md-3 container-fluid p-0  menubox ' style={{ backgroundColor: window.themeColors.color }}>
                    <Menu />
                </div>

                <div className='container-fluid d-flex align-items-center flex-column col-9 '>
                    <div>
                       <h1 className='text-first d-flex justify-content-center'> Listado de Usuarios y Solicitantes </h1>
                    </div>
                </div>
            </div>



            <div className='container-fluid p-0 m-0'>
                <Footer />
            </div>
        </>
    )
}

export default ListOfUsers