import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { colors } from '../../assets/styles/theme.js'
import '../../assets/styles/styles.css'
import '../../assets/styles/normalize.css'
import Footer from '../../components/partials/footer.jsx'
import Menu from '../../components/partials/Menu.jsx'
import Header from '../../components/partials/header.jsx'


window.themeColors = colors;

function Dash() {
  return (
    <>
      <div className='box container-fluid row p-0 ' style={{ backgroundColor: window.themeColors.footerBackground.bakgroundFColor }}>



        <div className='col-md-2 m-0 container-fluid p-0 menubox d-none d-md-block' style={{ backgroundColor: window.themeColors.color }}>
          <Menu />
        </div>

        <div className='container-fluid d-flex align-items-center flex-column col-12 col-md-9 justify-content-between'>
          <div className='homeHead py-5 px-5 container-fluid'>
            <Header />
          </div>

          <div>
            aqui deberia estar el contenido del Dashboard que esta en proceso
          </div>
        </div>
      </div>



      <div className='container-fluid p-0 m-0'>
        <Footer />
      </div>
    </>
  )
}

export default Dash