import React from 'react';
import DFLogo from '../../assets/images/defensoria_logo.svg'
import intro from '../../assets/images/Cartel-Bienvenida-Fiesta-Floral-Otoño-Moderno-Ilustrado-Sencillo-Naranja-_1_-fotor-2023071792028_1.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import { colors } from '../../assets/styles/theme.js'
import '../../assets/styles/styles.css'
import '../../assets/styles/normalize.css'
import Footer from '../../components/partials/footer.jsx'
import Menu from '../../components/partials/Menu.jsx'
import Header from '../../components/partials/header.jsx'


window.themeColors = colors;

function home() {
  return (
    <>
      <div className='container-fluid ' style={{ backgroundColor: window.themeColors.footerBackground.bakgroundFColor }}>

        <div className='content p-5 d-flex flex-row align-items-center justify-content-between'>
          <Header>

          </Header>
        </div>

        <div className='row'>
          <div className='col-md-3'>
            <Menu />
          </div>

          <div className='d-flex justify-content-center col-md-6 '>
            <img src={intro} alt="imagen de bienvenida" className='w-50' />
          </div>
        </div>

       
      </div>
      <div className='container-fluid p-0 m-0'>
          <Footer />
        </div>
    </>
  )
}

export default home