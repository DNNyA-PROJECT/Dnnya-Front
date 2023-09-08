import React from 'react';
import DeFLogo from '../../assets/images/defensoria_logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { colors } from '../../assets/styles/theme.js';
import '../../assets/styles/styles.css';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

window.themeColors = colors;

function Menu() {
  const location = useLocation();

  // Aplica una clase de fondo condicional
  const backgroundClass = (path) => (location.pathname === path ? 'bg-brown' : '');

  // Aplica una clase de texto condicional
  const textClass = (path) => (location.pathname === path ? 'text-white' : 'text-black');

  return (
    <>
      <div className='container-fluid m-0 p-0 d-flex flex-column align-items-center'>
        <img src={DeFLogo} className='DeFLogo mt-2 ' alt="logo de defensoria" />
        <ul className='mt-3 p-0'>
          <li className={`mb-4 ${backgroundClass('/')}`}>
            <Link to="/" className={` ${backgroundClass('/')} ${textClass('/')}`}>
              <h3 className={`text-link ${textClass('/')}`}>Inicio</h3>
            </Link>
          </li>
          <li className={`mb-4 ${backgroundClass('/Dashboard')}`}>
            <Link to="/Dashboard" className={` ${backgroundClass('/Dashboard')} ${textClass('/Dashboard')}`}>
              <h3 className={`text-link ${textClass('/Dashboard')}`}>Dashboard</h3>
            </Link>
          </li>
          <li className={`mb-4 ${backgroundClass('/Listado_de_casos')}`}>
            <Link to="/Listado_de_casos" className={` ${backgroundClass('/Listado_de_casos')} ${textClass('/Listado_de_casos')}`}>
              <h3 className={`text-link ${textClass('/Listado_de_casos')}`}>Listado de casos</h3>
            </Link>
          </li>
          <li className={`mb-4 ${backgroundClass('/Listado_de_legajos')}`}>
            <Link to="/Listado_de_legajos" className={` ${backgroundClass('/Listado_de_legajos')} ${textClass('/Listado_de_legajos')}`}>
              <h3 className={`text-link ${textClass('/Listado_de_legajos')}`}>Listado de legajos</h3>
            </Link>
          </li>
          <li className={`mb-4 ${backgroundClass('/Registro_De_Caso')}`}>
            <Link to="/Registro_De_Caso" className={` ${backgroundClass('/Registro_De_Caso')} ${textClass('/Registro_De_Caso')}`}>
              <h3 className={`text-link ${textClass('/Registro_De_Caso')}`}>Registros de casos</h3>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Menu;


