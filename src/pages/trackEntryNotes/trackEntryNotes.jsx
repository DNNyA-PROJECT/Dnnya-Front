import Menu from '../../components/partials/Menu.jsx';
import Footer from '../../components/partials/footer.jsx';
import ComponentComment from '../../components/componentComment/componentComment.jsx';

function trackEntryNotes() {
  return (
    <>
      <div className=' container-fluid row p-0 m-0 ' style={{ backgroundColor: window.themeColors.footerBackground.bakgroundFColor }}>

        <div className='col-md-2 m-0 container-fluid p-0 menubox d-none d-md-block' style={{ backgroundColor: window.themeColors.color }}>
          <Menu />
        </div>

        <div className='container-fluid d-flex align-items-center flex-column col-12 col-md-9 justify-content-between'>
          <div className='container-fluid'>
            <h4 className='fs-3 fw-bolder mb-5 d-flex justify-content-center'>
              Seguimiento notas de entrada
            </h4>
            <form action="">
              <div className='row'>
                <div className='d-flex justify-content-center'>
                </div>
                <div className='d-flex justify-content-evenly mb-3  row' >
                  <input className='col-2  form-control md' type="number" name="" id="" placeholder='Número de la Nota de Entrada' />
                  <input
                    className='col-2 form-control md'
                    type="date"
                    id="fecha"
                  />
                </div>
                <div className='d-flex justify-content-evenly  row' >
                  <input className='col-2 form-control md' type="text" name="" id="" placeholder='Responsable del Registro' />
                  <input className='col-2 form-control md' type="text" name="" id="" placeholder='Responsable del Seguimiento' />
                </div>
              </div>

              <div className='my-5'>

                <div>
                  <ComponentComment titulo="Nota de Entrada" placeholder="Escribe aquí tu Nota de Entrada" />
                </div>
                <div>
                  <ComponentComment titulo="Comentarios" placeholder="Escribe aquí tus comentarios" />
                </div>

              </div>
              <div className='d-flex justify-content-center my-3'>
                <button className='btn fs-4 fw-bolder' type='submit' style={{ backgroundColor: window.themeColors.buttonColor, color: window.themeColors.footerColorText }}>ENVIAR</button>
              </div>
            </form>
          </div>
        </div>
      </div>


      <div className='container-fluid p-0 m-0'>
        <Footer />
      </div>
    </>
  )
}

export default trackEntryNotes;
