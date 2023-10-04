import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/styles/styles.css'
import '../../assets/styles/normalize.css'
import Footer from '../../components/partials/footer.jsx'
import Menu from '../../components/partials/Menu.jsx'

function formSubmission() {
    return (
        <>
            <div className='box container-fluid row p-0 ' style={{ backgroundColor: window.themeColors.footerBackground.bakgroundFColor }}>



                <div className='col-md-2 m-0 container-fluid p-0 menubox d-none d-md-block' style={{ backgroundColor: window.themeColors.color }}>
                    <Menu />
                </div>

                <div className='container-fluid d-flex align-items-center flex-column col-9 justify-content-between'>

                    <div className='box-submission' style={{ backgroundColor: window.themeColors.color }}>
                        <form action="" className=' d-flex flex-column align-items-center'>
                            <h1 className='text-first'>Envio de Formulario de Registro</h1>
                            <input
                                type="email"
                                name=""
                                id=""
                                className='form-inputs form-control md'
                                placeholder='Ingrese el Correo Electronico'
                            />
                            <input
                                type="submit"
                                value="ENVIAR"
                                className='btn register btn-lg mb-3'
                                style={{ backgroundColor: window.themeColors.buttonColor, color: window.themeColors.footerColorText }}
                            />
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

export default formSubmission