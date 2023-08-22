import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { colors } from '../../assets/styles/theme.js'
import '../../assets/styles/styles.css'
import '../../assets/styles/normalize.css'
import { Link } from 'react-router-dom';

window.themeColors = colors;

function header() {
  return (
    <>
      <div className='container-fluid d-flex flex-column '>
        <div className='content p-5  d-flex flex-row align-items-center justify-content-between'>
          <div>
            <h1 className='text-first d-flex justify-content-center'>Sistema Informático de</h1>
            <h1 className='text-second'>Defensoria de Niños, Niñas y Adolescentes</h1>
          </div>
          <div className="dropdown" >
            <button className='user d-flex align-items-center dropdown-toggle' type="button" data-bs-toggle="dropdown" aria-expanded="false">
              <i className="bi bi-person-fill user" ></i>
              <div><h4>Usuario</h4></div>
            </button>
            <ul className="dropdown-menu" style={{ backgroundColor: window.themeColors.footerBackground.bakgroundFColor }} >
              <li><Link to="/Login"><h3 className='text-link'>Iniciar Sesión</h3></Link></li>
              <li><Link to="/Register"><h3 className='text-link'>Registrarse</h3></Link></li>
            </ul>
          </div>
        </div>
      </div>

    </>
  )
}

export default header