import Menu from '../../components/partials/Menu.jsx';
import Header from '../../components/partials/header.jsx';
import Footer from '../../components/partials/footer.jsx';

function entryNotesRegister() {
  return (
    <>
      <div className=' container-fluid row p-0 m-0 ' style={{ backgroundColor: window.themeColors.footerBackground.bakgroundFColor }}>

        <div className='col-md-2 m-0 container-fluid p-0 menubox d-none d-md-block' style={{ backgroundColor: window.themeColors.color }}>
          <Menu />
        </div>

        <div className='container-fluid d-flex align-items-center flex-column col-12 col-md-9 justify-content-between'>
          <div className='homeHead py-5 px-5 container-fluid'>
            <Header />
          </div>
        </div>
      </div>


      <div className='container-fluid p-0 m-0'>
        <Footer />
      </div>
    </>
  )
}

export default entryNotesRegister;
