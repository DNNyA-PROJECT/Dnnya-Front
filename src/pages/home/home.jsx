import React from 'react';
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
      <div className='box container-fluid row p-0 ' style={{ backgroundColor: window.themeColors.footerBackground.bakgroundFColor }}>


      
          <div className='col-md-3 container-fluid p-0  menubox ' style={{ backgroundColor: window.themeColors.color}}>
            <Menu />
          </div>

          <div className='container-fluid d-flex align-items-center flex-column col-9 justify-content-between'>
            <div className=' homeHead '>
              <Header />
            </div>
            <div>
              <img src={intro} alt="bienvenida" className='img' />
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