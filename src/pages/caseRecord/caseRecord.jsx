import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { colors } from '../../assets/styles/theme.js'
import '../../assets/styles/styles.css'
import '../../assets/styles/normalize.css'
import Footer from '../../components/partials/footer.jsx'
import Header from '../../components/partials/header.jsx'
import Menu from '../../components/partials/Menu.jsx'
import CustomModal from '../../components/modal/modal';

window.themeColors = colors;

function CaseRecord() {
    const [modalShow, setModalShow] = useState(false);

    const handleShowModal = () => {
        setModalShow(true);
    }
    const handleCloseModal = () => {
        setModalShow(false);
    }

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

                    <div className='container-fluid'>
                        <div className='d-flex flex-column align-items-center' >
                            <h1>REGISTRO DEL CASO</h1>
                            <h3>Detalles de Registro e Identificación del Caso</h3>
                        </div>

                        <form onSubmit={(event) => handleSubmit(event)}>
                            <div className='container pt-3 pb-3 mb-3 ' style={{ backgroundColor: window.themeColors.boxBorder }}>
                                <div className='container  mb-3 p-5 ' style={{ backgroundColor: window.themeColors.boxColorGreen }}>
                                    <div className='d-flex justify-content-center'>
                                        <h1>Registro de aserorías E intervenciones</h1>
                                    </div>
                                    <div className='d-flex justify-content-evenly mb-3  row' >
                                        <input className='col-2  form-control md' type="number" name="" id="" placeholder='Número' />
                                        <input className='col-2  form-control md' type="month" name="" id="" />
                                    </div>
                                    <div className='d-flex justify-content-evenly  row' >
                                        <input className='col-2 form-control md' type="text" name="" id="" placeholder='Nombre' />
                                        <input className='col-2 form-control md' type="text" name="" id="" placeholder='Registrador' />
                                    </div>
                                </div>

                                <div className='container mb-3 p-5 ' style={{ backgroundColor: window.themeColors.boxColorGreen }}>
                                    <div className='d-flex justify-content-center'>
                                        <h1>Tipo de Asesoramiento E Intervención</h1>
                                    </div>
                                    <div>

                                        <div className='row d-flex justify-content-evenly' >
                                            <div className='col-3 ' style={{ backgroundColor: window.themeColors.footerColorText }}>
                                                <label htmlFor="TelAdvice" className="custom-checkbox">
                                                    Asesoría Telefónica
                                                    <input type="checkbox" id="TelAdvice" className="checkbox" name="Atencion" />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className='col-3 ' style={{ backgroundColor: window.themeColors.footerColorText }}>
                                                <label htmlFor="Presence" className="custom-checkbox">
                                                    Asesoría Presencial
                                                    <input type="checkbox" id="Presence" className="checkbox" name="Atencion" />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </div>
                                        </div>

                                        <div className='row d-flex justify-content-evenly' >
                                            <div className='col-3' style={{ backgroundColor: window.themeColors.footerColorText }}>
                                                <label htmlFor="Intervention" className="custom-checkbox">
                                                    Intervención
                                                    <input type="checkbox" id="Intervention" className="checkbox" name="Atencion" />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className='col-3' style={{ backgroundColor: window.themeColors.footerColorText }}>
                                                <label htmlFor="Consent" className="custom-checkbox">
                                                    Consentimiento
                                                    <input type="checkbox" id="Consent" className="checkbox" name="Atencion" />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </div>
                                        </div>

                                        <div className='row d-flex justify-content-evenly' >
                                            <div className='col-3' style={{ backgroundColor: window.themeColors.footerColorText }}>
                                                <label htmlFor="Monitoring" className="custom-checkbox">
                                                    Monitoreo
                                                    <input type="checkbox" id="Monitoring" className="checkbox" name="Atencion" />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className='col-3' style={{ backgroundColor: window.themeColors.footerColorText }}>
                                                <label htmlFor="Interview" className="custom-checkbox">
                                                    Entrevista a Domicilio
                                                    <input type="checkbox" id="Interview" className="checkbox" name="Atencion" />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </div>
                                        </div>

                                        <div className='row d-flex justify-content-evenly' >
                                            <div className='col-3' style={{ backgroundColor: window.themeColors.footerColorText }}>
                                                <label htmlFor="SocialNetwork" className="custom-checkbox">
                                                    Redes Sociales
                                                    <input type="checkbox" id="SocialNetwork" className="checkbox" name="Atencion" />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className='col-3'>
                                                <button>agregar medio <i className="bi bi-plus-circle"></i> </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='container mb-3 p-5' style={{ backgroundColor: window.themeColors.boxColorBluSky }}>
                                    <div className='d-flex justify-content-center'>
                                        <h1>Relación del Adulto con NNyA</h1>
                                    </div>

                                    <div className='row d-flex justify-content-evenly' >
                                        <div className='col-3  ' style={{ backgroundColor: window.themeColors.footerColorText }}>
                                            <label htmlFor="Anonimus" className="custom-checkbox">
                                                Anonimo ?
                                                <input type="checkbox" id="Anonimus" className="checkbox" name="Relation" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                        <div className='col-3' style={{ backgroundColor: window.themeColors.footerColorText }}>
                                            <label htmlFor="GrandMother" className="custom-checkbox">
                                                Abuela
                                                <input type="checkbox" id="GrandMother" className="checkbox" name="Relation" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className='row d-flex justify-content-evenly' >
                                        <div className='col-3' style={{ backgroundColor: window.themeColors.footerColorText }}>
                                            <label htmlFor="Father" className="custom-checkbox">
                                                Padre
                                                <input type="checkbox" id="Father" className="checkbox" name="Relation" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                        <div className='col-3' style={{ backgroundColor: window.themeColors.footerColorText }}>
                                            <label htmlFor="GrandFather" className="custom-checkbox">
                                                Abuelo
                                                <input type="checkbox" id="GrandFather" className="checkbox" name="Relation" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className='row d-flex justify-content-evenly' >
                                        <div className='col-3' style={{ backgroundColor: window.themeColors.footerColorText }}>
                                            <label htmlFor="Mother" className="custom-checkbox">
                                                Madre
                                                <input type="checkbox" id="Mother" className="checkbox" name="Relation" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                        <div className='col-3'>
                                            <button>ingresar relacion con nnya <i className="bi bi-plus-circle"></i> </button>
                                        </div>
                                    </div>
                                </div>

                                <div className='container mb-3 p-5' style={{ backgroundColor: window.themeColors.boxColorBluSky }}>
                                    <div className='d-flex justify-content-center'>
                                        <h1>Datos del Adulto</h1>
                                    </div>

                                    <div className='d-flex justify-content-evenly mb-3  row' >
                                        <input className='col-2 form-control md' type="number" name="" id="" placeholder='DNI' />
                                        <input className='col-2 form-control md' type="text" name="" id="" placeholder='Nombre Completo' />
                                    </div>
                                    <div className='d-flex justify-content-evenly  row' >
                                        <input className='col-2 form-control md' type="number" name="" id="" placeholder='Telefono' />
                                        <input className='col-2 form-control md' type="text" name="" id="" placeholder='Domicilio' />
                                    </div>
                                </div>
                                <div className='d-flex justify-content-center'>
                                    <button>REDACTAR ACTA DE TESTIMONIO</button>
                                </div>


                                <div>

                                </div>

                                <div className='container mb-3 p-5' style={{ backgroundColor: window.themeColors.boxColorLightBeige }}>
                                    <div className='d-flex justify-content-center' >
                                        <h1>Datos de la NNyA</h1>
                                    </div>

                                    <div className='d-flex justify-content-center'>
                                        <button className='d-flex' onClick={handleShowModal}>
                                            <h6>Seleccionar NNyA</h6>
                                        </button>
                                        <CustomModal
                                            title="Datos NNyA"
                                            show={modalShow}
                                            handleClose={handleCloseModal}
                                            body={
                                                <div className='d-flex justify-content-around flex-wrap'>
                                                    <p>rogelio</p>
                                                    <p>ramiro</p>
                                                    <p>cris</p>
                                                </div>
                                            }
                                        />
                                    </div>

                                    <div className='d-flex justify-content-evenly mb-3  row' >
                                        <input className='col-2 form-control md' type="text" placeholder='Nombre Completo' />
                                        <input className='col-2 form-control md' type="number" name="" id="" placeholder='DNI' />
                                    </div>
                                    <div className='d-flex justify-content-evenly mb-3  row' >
                                        <input className='col-2 form-control md' type="number" name="" id="" placeholder='Domicilio' />
                                        <input className='col-2 form-control md' type="date" name="" id="" />
                                    </div>
                                    <div className='d-flex justify-content-evenly  row' >
                                        <input className='col-2 form-control md' type="number" name="" id="" placeholder='Edad' />
                                        <input className='col-2 form-control md' type="text" name="" id="" placeholder='Escuela' />
                                    </div>
                                </div>

                                <div className='container mb-3 p-5' style={{ backgroundColor: window.themeColors.boxColorLightBeige }}>
                                    <div>
                                        <div className='d-flex justify-content-center'>
                                            <h1>Motivo de Reclamo</h1>
                                        </div>

                                        <div className='row d-flex justify-content-evenly' >
                                            <div className='col-3' style={{ backgroundColor: window.themeColors.footerColorText }}>
                                                <label htmlFor="Fisic" className="custom-checkbox">
                                                    Violencia Fisica
                                                    <input type="checkbox" id="Fisic" className="checkbox" name="Reason" />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className='col-3' style={{ backgroundColor: window.themeColors.footerColorText }}>
                                                <label htmlFor="Sexual" className="custom-checkbox">
                                                    Abuso Sexual
                                                    <input type="checkbox" id="Sexual" className="checkbox" name="Reason" />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className='row d-flex justify-content-evenly' >
                                            <div className='col-3' style={{ backgroundColor: window.themeColors.footerColorText }}>
                                                <label htmlFor="revincualation" className="custom-checkbox">
                                                    Revinculación
                                                    <input type="checkbox" id="revincualation" className="checkbox" name="Reason" />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className='col-3' style={{ backgroundColor: window.themeColors.footerColorText }}>
                                                <label htmlFor="Adop" className="custom-checkbox">
                                                    Adoptibilidad
                                                    <input type="checkbox" id="Adop" className="checkbox" name="Reason" />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className='row d-flex justify-content-evenly' >
                                            <div className='col-3' style={{ backgroundColor: window.themeColors.footerColorText }}>
                                                <label htmlFor="Abandoned" className="custom-checkbox">
                                                    Abandono
                                                    <input type="checkbox" id="Abandoned" className="checkbox" name="Reason" />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className='col-3' style={{ backgroundColor: window.themeColors.footerColorText }}>
                                                <label htmlFor="Ausent" className="custom-checkbox">
                                                    Ausencia a la Escuela
                                                    <input type="checkbox" id="Ausent" className="checkbox" name="Reason" />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className='row d-flex justify-content-evenly' >
                                            <div className='col-3' style={{ backgroundColor: window.themeColors.footerColorText }}>
                                                <label htmlFor="State" className="custom-checkbox">
                                                    Estado de Salud
                                                    <input type="checkbox" id="State" className="checkbox" name="Reason" />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className='col-3'>
                                                <button>agregar motivo <i className="bi bi-plus-circle"></i>  </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-center'>
                                        <button>Agregar NNyA</button>
                                    </div>


                                    <div>
                                        <div className='d-flex justify-content-evenly mb-3  row' >
                                            <input className='col-2 form-control md' type="text" placeholder='Nombre Completo' />
                                            <input className='col-2 form-control md' type="number" name="" id="" placeholder='DNI' />
                                        </div>
                                        <div className='d-flex justify-content-evenly mb-3  row' >
                                            <input className='col-2 form-control md' type="text" name="" id="" placeholder='Domicilio' />
                                            <input className='col-2 form-control md' type="date" name="" id="" />
                                        </div>
                                        <div className='d-flex justify-content-evenly mb-3  row' >
                                            <input className='col-2 form-control md' type="number" name="" id="" placeholder='Edad' />
                                            <input className='col-2 form-control md' type="text" name="" id="" placeholder='Escuela' />
                                        </div>
                                        <div className='d-flex justify-content-evenly  row' >
                                            <input className='form-control' type="text" name="" id="" placeholder='Otra Información del NNyA' />
                                        </div>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-center'>
                                    <h1>Alta NNyA </h1>
                                </div>


                                <div className='container mb-3 p-5' style={{ backgroundColor: window.themeColors.boxColorLightLavender }}>
                                    <div className='d-flex flex-column align-items-center'>
                                        <h1>Informacion del Seguimiento</h1>
                                        <h3>Buscar un Profesional</h3>
                                    </div>

                                    <select name="" id="">
                                        <option value="area">Área</option>
                                    </select>

                                    <div className='row d-flex justify-content-evenly' >
                                        <div className='col-3' style={{ backgroundColor: window.themeColors.footerColorText }}>
                                            <label htmlFor="Everithing" className="custom-checkbox">
                                                Todos
                                                <input type="checkbox" id="Everithing" className="checkbox" name="Profession" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                        <div className='col-3' style={{ backgroundColor: window.themeColors.footerColorText }}>
                                            <label htmlFor="Jur" className="custom-checkbox">
                                                juridica
                                                <input type="checkbox" id="Jur" className="checkbox" name="Profession" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                        <div className='col-3' style={{ backgroundColor: window.themeColors.footerColorText }}>
                                            <label htmlFor="Pshyc" className="custom-checkbox">
                                                Psicosocial
                                                <input type="checkbox" id="Pshyc" className="checkbox" name="Profession" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                    </div>

                                    <div>
                                        <div id="editor"></div>
                                    </div>
                                </div>

                                <div className='container mb-3 p-5' style={{ backgroundColor: window.themeColors.boxColorLightLavender }}>
                                    <div className='d-flex flex-column align-items-center'>
                                        <h1>Estado del Caso </h1>
                                        <h3>Caso con Seguimiento</h3>
                                    </div>


                                    <div className='row d-flex  justify-content-evenly' >
                                        <div className='col-3' style={{ backgroundColor: window.themeColors.footerColorText }}>
                                            <label htmlFor="TelAdvice" className="custom-checkbox">
                                                Grave con Seguimiento
                                                <input type="checkbox" id="TelAdvice" className="checkbox" name="Atencion" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                        <div className='col-3' style={{ backgroundColor: window.themeColors.footerColorText }}>
                                            <label htmlFor="TelAdvice" className="custom-checkbox">
                                                En Seguimiento
                                                <input type="checkbox" id="TelAdvice" className="checkbox" name="Atencion" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-center'>
                                        <p> caso sin seguimiento</p>
                                    </div>


                                    <div className='row d-flex  justify-content-evenly' >
                                        <div className='col-3' style={{ backgroundColor: window.themeColors.footerColorText }}>
                                            <label htmlFor="TelAdvice" className="custom-checkbox">
                                                Grave sin Seguimiento
                                                <input type="checkbox" id="TelAdvice" className="checkbox" name="Atencion" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                        <div className='col-3' style={{ backgroundColor: window.themeColors.footerColorText }}>
                                            <label htmlFor="TelAdvice" className="custom-checkbox">
                                                Sin Seguimiento
                                                <input type="checkbox" id="TelAdvice" className="checkbox" name="Atencion" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-center'>
                                        <p>otros seguimientos</p>
                                    </div>

                                    <div className='row d-flex  justify-content-evenly' >
                                        <div className='col-3' style={{ backgroundColor: window.themeColors.footerColorText }}>
                                            <label htmlFor="TelAdvice" className="custom-checkbox">
                                                Cerrado
                                                <input type="checkbox" id="TelAdvice" className="checkbox" name="Atencion" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                        <div className='col-3' style={{ backgroundColor: window.themeColors.footerColorText }}>
                                            <label htmlFor="TelAdvice" className="custom-checkbox">
                                                Derivado
                                                <input type="checkbox" id="TelAdvice" className="checkbox" name="Atencion" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div className='container' style={{ backgroundColor: window.themeColors.boxColorLightLavender }}>
                                    <div className='d-flex justify-content-center'>
                                        <h1>Tipo Del Caso</h1>
                                    </div>

                                    <div className='row d-flex  justify-content-evenly '>
                                        <div className='col-6'><p>Caso Individual</p></div>
                                        <div className='col-6'><p>Caso Grupal</p></div>
                                    </div>
                                </div>
                            </div>
                            <input
                                className='btn'
                                type="submit"
                                value="enviar"
                            />
                        </form>

                    </div>
                </div>
                <Footer />
            </div>

        </>
    )
}

export default CaseRecord