import React from 'react';
import DeFLogo from '../../assets/images/defensoria_logo.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import { colors } from '../../assets/styles/theme.js'
import '../../assets/styles/styles.css'
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


window.themeColors = colors;

function menu() {
  const location = useLocation();
  return (
    <>
      <div className='container-fluid m-0 p-0 d-flex flex-column align-items-center'>
          <img src={DeFLogo} className='DeFLogo mt-2 ' alt="logo de defensoria" />
          <ul className='mt-3 p-0'>
            <li className='mb-4'>
            <Link className={`nav-link ${location.pathname === '/' ? 'text-warning' : ''}`} to="/">
      <h3 className='text-link'>Inicio</h3></Link>
            </li>
            <li className='mb-4'>
              <Link to="#"><h3 className='text-link'>Dashboard</h3> </Link>
            </li>
            <li className='mb-4'>
              <Link to="#"><h3 className='text-link'>Listado de casos</h3></Link>
            </li>
            <li className='mb-4'>
              <Link to="#"><h3 className='text-link'>Listado de legajos</h3></Link>
            </li>
            <li className='mb-4'>
              <Link to="/Registro_De_Caso"><h3 className='text-link'>Registros de casos</h3></Link>
            </li>
          </ul>
        </div>
    </>
  )
}

export default menu