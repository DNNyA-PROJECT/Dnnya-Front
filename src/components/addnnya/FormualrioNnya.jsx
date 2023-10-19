import React from 'react';

function FormularioNnya({ onAddNnyaClick }) {
    return (
        <div>
            <div className='container-fluid mb-3 p-5' style={{ backgroundColor: window.themeColors.boxColorLightBeige }}>
                <div>
                    <div className='d-flex justify-content-evenly mb-3 mx-1 row' >
                        <input className='col-2 form-control md' type="text" placeholder='Nombre Completo' />
                        <input className='col-2 form-control md' type="number" name="" id="" placeholder='DNI' />
                    </div>
                    <div className='d-flex justify-content-evenly mb-3 mx-1  row' >
                        <input className='col-2 form-control md' type="text" name="" id="" placeholder='Domicilio' />
                        <input className='col-2 form-control md' type="date" name="" id="" />
                    </div>
                    <div className='d-flex justify-content-evenly mb-3 mx-1  row' >
                        <input className='col-2 form-control md' type="number" name="" id="" placeholder='Edad' />
                        <input className='col-2 form-control md' type="text" name="" id="" placeholder='Escuela' />
                    </div>
                    <div className='d-flex justify-content-evenly  row' >
                        <input className='form-control w-75 py-3' type="text" name="" id="" placeholder='Otra Información del NNyA' />
                    </div>
                </div>
            </div>

            <div className='container mb-3 p-5' style={{ backgroundColor: window.themeColors.boxColorLightBeige }}>
                <div>
                    <div className='d-flex justify-content-center'>
                        <h1>Motivo Del Reclamo</h1>
                    </div>

                    <div className='row d-flex justify-content-evenly' >
                        <div className='col-3 mb-3 py-3 ' style={{ backgroundColor: window.themeColors.footerColorText }}>
                            <label htmlFor="Fisic" className="custom-checkbox">
                                Violencia Fisica
                                <input type="checkbox" id="Fisic" className="checkbox" name="Reason" />
                                <span className="checkmark"></span>
                            </label>
                        </div>
                        <div className='col-3 mb-3 py-3 ' style={{ backgroundColor: window.themeColors.footerColorText }}>
                            <label htmlFor="Sexual" className="custom-checkbox">
                                Abuso Sexual
                                <input type="checkbox" id="Sexual" className="checkbox" name="Reason" />
                                <span className="checkmark"></span>
                            </label>
                        </div>
                    </div>
                    <div className='row d-flex justify-content-evenly' >
                        <div className='col-3 mb-3 py-3 ' style={{ backgroundColor: window.themeColors.footerColorText }}>
                            <label htmlFor="revincualation" className="custom-checkbox">
                                Revinculación
                                <input type="checkbox" id="revincualation" className="checkbox" name="Reason" />
                                <span className="checkmark"></span>
                            </label>
                        </div>
                        <div className='col-3 mb-3 py-3 ' style={{ backgroundColor: window.themeColors.footerColorText }}>
                            <label htmlFor="Adop" className="custom-checkbox">
                                Adoptibilidad
                                <input type="checkbox" id="Adop" className="checkbox" name="Reason" />
                                <span className="checkmark"></span>
                            </label>
                        </div>
                    </div>
                    <div className='row d-flex justify-content-evenly' >
                        <div className='col-3 mb-3 py-3 ' style={{ backgroundColor: window.themeColors.footerColorText }}>
                            <label htmlFor="Abandoned" className="custom-checkbox">
                                Abandono
                                <input type="checkbox" id="Abandoned" className="checkbox" name="Reason" />
                                <span className="checkmark"></span>
                            </label>
                        </div>
                        <div className='col-3 mb-3 py-3 ' style={{ backgroundColor: window.themeColors.footerColorText }}>
                            <label htmlFor="Ausent" className="custom-checkbox">
                                Ausencia a la Escuela
                                <input type="checkbox" id="Ausent" className="checkbox" name="Reason" />
                                <span className="checkmark"></span>
                            </label>
                        </div>
                    </div>
                    <div className='row d-flex justify-content-evenly' >
                        <div className='col-3 mb-3 py-3 ' style={{ backgroundColor: window.themeColors.footerColorText }}>
                            <label htmlFor="State" className="custom-checkbox">
                                Estado de Salud
                                <input type="checkbox" id="State" className="checkbox" name="Reason" />
                                <span className="checkmark"></span>
                            </label>
                        </div>
                        <div className='col-3 mb-3 p-0 '>
                            <button className='btn d-flex flex-row justify-content-between py-3 px-5 bg-white'>agregar motivo <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0z" fill="green" />
                                <path d="M7.5 4.5a.5.5 0 0 1 1 0v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 0-1z" fill="white" />
                            </svg>  </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default FormularioNnya;