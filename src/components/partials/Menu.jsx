import React from 'react';
import DeFLogo from '../../assets/images/defensoria_logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { colors } from '../../assets/styles/theme.js';
import '../../assets/styles/styles.css';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AccordionComponent from '../../components/AccordionComponent/AccordionComponent.jsx';

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
              <h3 className={`text-link text-center ${textClass('/')}`}>Inicio</h3>
            </Link>
          </li>

          <AccordionComponent buttonText="Caso" buttonClassName="w-100 fs-2 fs-xl fw-bolder  align-items-center justify-content-center d-flex">
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
                <h3 className={`text-link  text-center ${textClass('/Registro_De_Caso')}`}>Registro de Casos</h3>
              </Link>
            </li>

            <li
              className={`mb-3 text-center`}
              style={{
                ...backgroundStyle('/Buscador_de_Casos'),
                ':hover': {
                  backgroundColor: window.themeColors.footerBackground.darkFooterBackground,
                  color: 'white',
                },
              }}
            >
              <Link to="/Buscador_de_Casos" className={` ${location.pathname === '/Buscador_de_Casos' ? 'active' : ''} ${textClass('/Buscador_de_Casos')}`}
                style={{
                  display: 'block',
                  width: '100%',
                  height: '100%',
                  padding: '1rem',
                }}
              >
                <h3 className={`text-link  text-center ${textClass('/Buscador_de_Casos')}`}>Buscador de Casos</h3>
              </Link>
            </li>

          </AccordionComponent>

       
        </ul>
      </div>
    </>
  );
}

export default Menu;
