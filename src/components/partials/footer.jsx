import React from 'react';
import smLogo from '../../assets/images/silicon_misiones_logo.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import { colors } from '../../assets/styles/theme.js'
import '../../assets/styles/styles.css'
import { Link } from 'react-router-dom';
window.themeColors = colors;

function Footer() {
  return (
    <>
      <div className='container-fluid p-0 m-0' style={{ backgroundColor: window.themeColors.footerBackground.bakgroundFColor }}>
        <div className='row black justify-content-center m-0 p-0' style={{ backgroundColor: window.themeColors.footerBackground.darkFooterBackground }}>
          <div className='col-sm-6 p-0 m-0 d-flex align-items-end flex-column justify-content-center'>
            <h2 style={{ color: window.themeColors.footerColorText }} className='size-font d-flex justify-content-end'>Sistema Informático de Defensoria <br /> de Niño, Niña y Adolescentes</h2>
            <div className='d-flex row w-50 align-items-end '>
            <Link to="#" className='col-4' > <h2 className='letter' style={{ color: window.themeColors.footerColorText }}>Ley II N° 16</h2> </Link>
            <Link to="#" className='col-4' >   <h2 className='letter' style={{ color: window.themeColors.footerColorText }}>Ley IV N° 52</h2> </Link>
            </div>
            <h5 className='fw-lighter text-copy d-flex justify-content-center' style={{ color: window.themeColors.footerColorText }}>Copyright © 2023 Todos los derechos reservados</h5>
          </div>
          <div className='col-sm-6 p-0 m-0'>
            <label htmlFor="img-fluid custom-width " style={{ color: window.themeColors.footerTextLogo }} className='d-flex flex-column-reverse align-items-center fs-5 fw-bold'>DIGITAL FACTORY
              <img src={smLogo} alt="logo" className="img-fluid custom-width" />
            </label>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer