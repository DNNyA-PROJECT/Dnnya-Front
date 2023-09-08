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

  const backgroundStyle = (path) => {
    if (location.pathname === path) {
      return { backgroundColor: window.themeColors.footerBackground.darkFooterBackground };
    }
    return {};
  };

  const textClass = (path) => (location.pathname === path ? 'text-white' : 'text-black');

  return (
    <>
      <div className='container-fluid m-0 p-0 d-flex flex-column align-items-center'>
        <img src={DeFLogo} className='DeFLogo mt-2 ' alt="logo de defensoria" />
        <ul className='mt-3 container-fluid p-0'>
          <li
            className={`mb-3 pt-3 pb-3 text-center`}
            style={{
              ...backgroundStyle('/'),
              ':hover': {
                backgroundColor: window.themeColors.footerBackground.darkFooterBackground,
                color: 'white',
              },
            }}
          >
            <Link
              to="/"
              className={` ${location.pathname === '/' ? 'active' : ''} ${textClass('/')}`}
            >
              <h3 className={`text-link ${textClass('/')}`}>Inicio</h3>
            </Link>
          </li>
          <li
            className={`mb-3 pt-3 pb-3 text-center`}
            style={{
              ...backgroundStyle('/Dashboard'),
              ':hover': {
                backgroundColor: window.themeColors.footerBackground.darkFooterBackground,
                color: 'white',
              },
            }}
          >
            <Link
              to="/Dashboard"
              className={` ${location.pathname === '/Dashboard' ? 'active' : ''} ${textClass('/Dashboard')}`}
            >
              <h3 className={`text-link ${textClass('/Dashboard')}`}>Dashboard</h3>
            </Link>
          </li>
          <li
            className={`mb-3 pt-3 pb-3 text-center`}
            style={{
              ...backgroundStyle('/Listado_de_casos'),
              ':hover': {
                backgroundColor: window.themeColors.footerBackground.darkFooterBackground,
                color: 'white',
              },
            }}
          >
            <Link
              to="/Listado_de_casos"
              className={` ${location.pathname === '/Listado_de_casos' ? 'active' : ''} ${textClass('/Listado_de_casos')}`}
            >
              <h3 className={`text-link ${textClass('/Listado_de_casos')}`}>Listado de Casos</h3>
            </Link>
          </li>
          <li
            className={`mb-3 pt-3 pb-3 text-center`}
            style={{
              ...backgroundStyle('/Listado_de_legajos'),
              ':hover': {
                backgroundColor: window.themeColors.footerBackground.darkFooterBackground,
                color: 'white',
              },
            }}
          >
            <Link
              to="/Listado_de_legajos"
              className={` ${location.pathname === '/Listado_de_legajos' ? 'active' : ''} ${textClass('/Listado_de_legajos')}`}
            >
              <h3 className={`text-link ${textClass('/Listado_de_legajos')}`}>Listado de Legajos</h3>
            </Link>
          </li>
          <li
            className={`mb-3 pt-3 pb-3 text-center`}
            style={{
              ...backgroundStyle('/Registro_De_Caso'),
              ':hover': {
                backgroundColor: window.themeColors.footerBackground.darkFooterBackground,
                color: 'white',
              },
            }}
          >
            <Link
              to="/Registro_De_Caso"
              className={` ${location.pathname === '/Registro_De_Caso' ? 'active' : ''} ${textClass('/Registro_De_Caso')}`}
            >
              <h3 className={`text-link ${textClass('/Registro_De_Caso')}`}>Registro De Caso</h3>
            </Link>
            
          </li>
        </ul>
      </div>
    </>
  );
}

export default Menu;
