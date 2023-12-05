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
              <h3 className={`text-link text-center ${textClass('/Dashboard')}`}>Dashboard</h3>
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
              <h3 className={`text-link  text-center ${textClass('/Lista_De_Usuarios')}`}>Listado de Usuarios</h3>
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
              <h3 className={`text-link  text-center ${textClass('/Envio_de_Formulario')}`}>Envio de Formulario</h3>
            </Link>
          </li>

          <AccordionComponent buttonText="Caso" buttonClassName="w-100 fs-3 fw-900 align-items-center justify-content-center d-flex">
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
                <h3 className={`text-link  text-center ${textClass('/Seguimiento_de_Caso')}`}>Seguimiento de Caso</h3>
              </Link>
            </li>
          </AccordionComponent>

          <AccordionComponent buttonText="Notas de Entrada" buttonClassName="w-100 fs-3 fw-900 align-items-center justify-content-center d-flex">
          <li
            className={`mb-3 text-center`}
            style={{
              ...backgroundStyle('Buscador_de_Notas_de_Entrada'),
              ':hover': {
                backgroundColor: window.themeColors.footerBackground.darkFooterBackground,
                color: 'white',
              },
            }}
          >
            <Link to="Buscador_de_Notas_de_Entrada" className={` ${location.pathname === 'Buscador_de_Notas_de_Entrada' ? 'active' : ''} ${textClass('Buscador_de_Notas_de_Entrada')}`}
              style={{
                display: 'block',
                width: '100%',
                height: '100%',
                padding: '1rem',
              }}
            >
              <h3 className={`text-link  text-center ${textClass('Buscador_de_Notas_de_Entrada')}`}>Buscador de Notas de Entrada</h3>
            </Link>
          </li>
          <li
            className={`mb-3 text-center`}
            style={{
              ...backgroundStyle('/Registro_de_Notas_de_Entrada'),
              ':hover': {
                backgroundColor: window.themeColors.footerBackground.darkFooterBackground,
                color: 'white',
              },
            }}
          >
            <Link to="/Registro_de_Notas_de_Entrada" className={` ${location.pathname === '/Registro_de_Notas_de_Entrada' ? 'active' : ''} ${textClass('/Registro_de_Notas_de_Entrada')}`}
              style={{
                display: 'block',
                width: '100%',
                height: '100%',
                padding: '1rem',
              }}
            >
              <h3 className={`text-link  text-center ${textClass('/Registro_de_Notas_de_Entrada')}`}>Registro de Notas de Entrada</h3>
            </Link>
          </li>
          <li
            className={`mb-3 text-center`}
            style={{
              ...backgroundStyle('/Seguimiento_de_Notas_de_Entrada'),
              ':hover': {
                backgroundColor: window.themeColors.footerBackground.darkFooterBackground,
                color: 'white',
              },
            }}
          >
            <Link to="/Seguimiento_de_Notas_de_Entrada" className={` ${location.pathname === '/Seguimiento_de_Notas_de_Entrada' ? 'active' : ''} ${textClass('/Seguimiento_de_Notas_de_Entrada')}`}
              style={{
                display: 'block',
                width: '100%',
                height: '100%',
                padding: '1rem',
              }}
            >
              <h3 className={`text-link  text-center ${textClass('/Seguimiento_de_Notas_de_Entrada')}`}>Seguimiento de Notas de Entrada</h3>
            </Link>
          </li>
          </AccordionComponent>

          <AccordionComponent buttonText="Notas de Salida" buttonClassName="w-100 fs-3 fw-900 align-items-center justify-content-center d-flex">
          <li
            className={`mb-3 text-center`}
            style={{
              ...backgroundStyle('/Buscador-de-Notas_de_Salida'),
              ':hover': {
                backgroundColor: window.themeColors.footerBackground.darkFooterBackground,
                color: 'white',
              },
            }}
          >
            <Link to="/Buscador-de-Notas_de_Salida" className={` ${location.pathname === '/Buscador-de-Notas_de_Salida' ? 'active' : ''} ${textClass('/Buscador-de-Notas_de_Salida')}`}
              style={{
                display: 'block',
                width: '100%',
                height: '100%',
                padding: '1rem',
              }}
            >
              <h3 className={`text-link  text-center ${textClass('/Buscador-de-Notas_de_Salida')}`}>Buscador de Notas de Salida</h3>
            </Link>
          </li>
          <li
            className={`mb-3 text-center`}
            style={{
              ...backgroundStyle('/Registro-de-Notas_de_Salida'),
              ':hover': {
                backgroundColor: window.themeColors.footerBackground.darkFooterBackground,
                color: 'white',
              },
            }}
          >
            <Link to="/Registro-de-Notas_de_Salida" className={` ${location.pathname === '/Registro-de-Notas_de_Salida' ? 'active' : ''} ${textClass('/Registro-de-Notas_de_Salida')}`}
              style={{
                display: 'block',
                width: '100%',
                height: '100%',
                padding: '1rem',
              }}
            >
              <h3 className={`text-link  text-center ${textClass('/Registro-de-Notas_de_Salida')}`}>Registro de Notas de Salida</h3>
            </Link>
          </li>
          <li
            className={`mb-3 text-center`}
            style={{
              ...backgroundStyle('/Seguimiento-de-Notas_de_Salida'),
              ':hover': {
                backgroundColor: window.themeColors.footerBackground.darkFooterBackground,
                color: 'white',
              },
            }}
          >
            <Link to="/Seguimiento-de-Notas_de_Salida" className={` ${location.pathname === '/Seguimiento-de-Notas_de_Salida' ? 'active' : ''} ${textClass('/Seguimiento-de-Notas_de_Salida')}`}
              style={{
                display: 'block',
                width: '100%',
                height: '100%',
                padding: '1rem',
              }}
            >
              <h3 className={`text-link  text-center ${textClass('/Seguimiento-de-Notas_de_Salida')}`}>Seguimiento de Notas de Salida</h3>
            </Link>
          </li>
          </AccordionComponent>
        </ul>
      </div>
    </>
  );
}

export default Menu;
