import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { colors } from '../../assets/styles/theme.js'
import '../../assets/styles/styles.css'
import '../../assets/styles/normalize.css'
import Footer from '../../components/partials/footer.jsx'
import Menu from '../../components/partials/Menu.jsx'

window.themeColors = colors;

function Dash() {
    return (
        <>
            <div className='box container-fluid row p-0 ' style={{ backgroundColor: window.themeColors.footerBackground.bakgroundFColor }}>



                <div className='col-md-3 container-fluid p-0  menubox ' style={{ backgroundColor: window.themeColors.color }}>
                    <Menu />
                </div>

                <div className='container-fluid d-flex align-items-center flex-column col-9 justify-content-between mt-5'>

                    <div className='box-recover' style={{ backgroundColor: window.themeColors.color }}>
                        <form action="" className=' d-flex flex-column align-items-center'>
                            <h1 className='text-first'>Cambiar Correo</h1>
                            imagen aqui
                            <div>
                                <input
                                    type="email"
                                    name=""
                                    id=""
                                    className='form-inputs form-control md'
                                    placeholder='Nuevo Correo Electronico'
                                />
                            </div>

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
            <Footer />
        </>
    )
}

export default Dash