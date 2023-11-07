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
        <img src={DeFLogo} className='DeFLogo my-3 ' alt="logo de defensoria" />
        <ul className='mt-3 container-fluid p-0'>
          <li
            className={`mb-3 text-center block`}
            style={{
              ...backgroundStyle('/'),
              ':hover': {
                backgroundColor: window.themeColors.footerBackground.darkFooterBackground,
                color: 'white',
              },
            }}
          >
            <Link to="/" className={` ${location.pathname === '/' ? 'active' : ''} ${textClass('/')}`}
              style={{
                display: 'block',
                width: '100%',
                height: '100%',
                padding: '1rem',
              }}
            >
              <h3 className={`text-link ${textClass('/')}`}>Inicio</h3>
            </Link>
          </li>
          <li
            className={`mb-3 text-center block`}
            style={{
              ...backgroundStyle('/Dashboard'),
              ':hover': {
                backgroundColor: window.themeColors.footerBackground.darkFooterBackground,
                color: 'white',
              },
            }}
          >
            <Link to="/Dashboard" className={` ${location.pathname === '/Dashboard' ? 'active' : ''} ${textClass('/Dashboard')}`}
              style={{
                display: 'block',
                width: '100%',
                height: '100%',
                padding: '1rem',
              }}
            >
              <h3 className={`text-link ${textClass('/Dashboard')}`}>Dashboard</h3>
            </Link>
          </li>

          <li
            className={`mb-3 text-center`}
            style={{
              ...backgroundStyle('/Lista_De_Usuarios'),
              ':hover': {
                backgroundColor: window.themeColors.footerBackground.darkFooterBackground,
                color: 'white',
              },
            }}
          >
            <Link to="/Lista_De_Usuarios" className={` ${location.pathname === '/Lista_De_Usuarios' ? 'active' : ''} ${textClass('/Lista_De_Usuarios')}`}
              style={{
                display: 'block',
                width: '100%',
                height: '100%',
                padding: '1rem',
              }}
            >
              <h3 className={`text-link ${textClass('/Lista_De_Usuarios')}`}>Listado de Usuarios</h3>
            </Link>
          </li>

          <li
            className={`mb-3 text-center`}
            style={{
              ...backgroundStyle('/Envio_de_Formulario'),
              ':hover': {
                backgroundColor: window.themeColors.footerBackground.darkFooterBackground,
                color: 'white',
              },
            }}
          >
            <Link to="/Envio_de_Formulario" className={` ${location.pathname === '/Envio_de_Formulario' ? 'active' : ''} ${textClass('/Envio_de_Formulario')}`}
              style={{
                display: 'block',
                width: '100%',
                height: '100%',
                padding: '1rem',
              }}
            >
              <h3 className={`text-link ${textClass('/Envio_de_Formulario')}`}>Envio de Formulario</h3>
            </Link>
          </li>


          <li
            className={`mb-3 text-center`}
            style={{
              ...backgroundStyle('/Registro_De_Caso'),
              ':hover': {
                backgroundColor: window.themeColors.footerBackground.darkFooterBackground,
                color: 'white',
              },
            }}
          >
            <Link to="/Registro_De_Caso" className={` ${location.pathname === '/Registro_De_Caso' ? 'active' : ''} ${textClass('/Registro_De_Caso')}`}
              style={{
                display: 'block',
                width: '100%',
                height: '100%',
                padding: '1rem',
              }}
            >
              <h3 className={`text-link ${textClass('/Registro_De_Caso')}`}>Registro de Casos</h3>
            </Link>
          </li>

          <li
            className={`mb-3 text-center`}
            style={{
              ...backgroundStyle('/Seguimiento_de_Caso'),
              ':hover': {
                backgroundColor: window.themeColors.footerBackground.darkFooterBackground,
                color: 'white',
              },
            }}
          >
            <Link to="/Seguimiento_de_Caso" className={` ${location.pathname === '/Seguimiento_de_Caso' ? 'active' : ''} ${textClass('/Seguimiento_de_Caso')}`}
              style={{
                display: 'block',
                width: '100%',
                height: '100%',
                padding: '1rem',
              }}
            >
              <h3 className={`text-link ${textClass('/Seguimiento_de_Caso')}`}>Seguimiento de Caso</h3>
            </Link>
          </li>

        </ul>
      </div>
    </>
  );
}

export default Menu;
