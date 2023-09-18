import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { colors } from '../../assets/styles/theme.js'
import '../../assets/styles/styles.css'
import '../../assets/styles/normalize.css'
import Footer from '../../components/partials/footer.jsx'
import Menu from '../../components/partials/Menu.jsx'
import DataTable from '../../components/dataTable/dataTable.jsx';

window.themeColors = colors;

function ListOfUsers() {
    const customData = [
        ["Nombre y Apellido", "Información del Solicitante", "Fecha de Solicitud", "Dar de Alta / Baja"],
        
        ["Alejandro Bianchi", "Carpeta", "29/08/23", "boton"],
        ["Alejandro Bianchi", "Carpeta", "29/08/23", "boton"],
        ["Alejandro Bianchi", "Carpeta", "29/08/23", "boton"],
        ["Alejandro Bianchi", "Carpeta", "29/08/23", "boton"],
        ["Alejandro Bianchi", "Carpeta", "29/08/23", "boton"],
        ["Alejandro Bianchi", "Carpeta", "29/08/23", "boton"],
        ["Alejandro Bianchi", "Carpeta", "29/08/23", "boton"],
        ["Alejandro Bianchi", "Carpeta", "29/08/23", "boton"],
        ["Alejandro Bianchi", "Carpeta", "29/08/23", "boton"],
        ["Alejandro Bianchi", "Carpeta", "29/08/23", "boton"],
        ["Alejandro Bianchi", "Carpeta", "29/08/23", "boton"],
        ["Alejandro Bianchi", "Carpeta", "29/08/23", "boton"],
        ["Alejandro Bianchi", "Carpeta", "29/08/23", "boton"],
        ["Alejandro Bianchi", "Carpeta", "29/08/23", "boton"],
        ["Alejandro Bianchi", "Carpeta", "29/08/23", "boton"],
        ["Alejandro Bianchi", "Carpeta", "29/08/23", "boton"],
      ];

    return (
        <>
       <div className='box container-fluid row p-0 ' style={{ backgroundColor: window.themeColors.footerBackground.bakgroundFColor }}>
                <div className='col-md-3 container-fluid p-0 menubox' style={{ backgroundColor: window.themeColors.color }}>
                    <Menu />
                </div>
                <div className='container-fluid d-flex flex-column m-0 p-0 col-9'>
                    <div>
                       <h1 className='text-first d-flex justify-content-center'> Listado de Usuarios y Solicitantes </h1>
                    </div>
                    <div className='container-fluid table-container p-0 m-0' style={{ overflowX: 'auto', overflowY: 'auto', maxHeight: '30vw' }}>
                    <DataTable data={customData} headerBackgroundColor="#FFA500" />
                    </div>
                </div>
            </div>
            <div className='container-fluid p-0 m-0'>
                <Footer />
            </div>
        </>
    )
}

export default ListOfUsers;