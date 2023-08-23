import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { colors } from '../../assets/styles/theme.js'
import '../../assets/styles/styles.css'
import '../../assets/styles/normalize.css'
import Footer from '../../components/partials/footer.jsx'
import Header from '../../components/partials/header.jsx'


window.themeColors = colors;

function CaseRecord() {

    return (
        <>
            <div style={{ backgroundColor: window.themeColors.footerBackground.bakgroundFColor }}>
                <Header />

                <div className='d-flex flex-column align-items-center' >
                    <h1>REGISTRO DEL CASO</h1>
                    <h3>Detalles de Registro e Identificación del Caso</h3>
                </div>

                <form action="">
                    <div className='container pt-3 pb-3 mb-3 ' style={{ backgroundColor: window.themeColors.boxBorder }}>
                        <div className='container mb-3 p-5 ' style={{ backgroundColor: window.themeColors.boxColorGreen }}>
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
                                    <label htmlFor="TelAdvice" class="custom-checkbox">
                                            Asesoría Telefónica
                                            <input type="checkbox" id="TelAdvice" class="checkbox" name="Atencion" />
                                            <span class="checkmark"></span>
                                        </label>
                                    </div>
                                    <div className='col-3 ' style={{ backgroundColor: window.themeColors.footerColorText }}>
                                    <label htmlFor="Presence" class="custom-checkbox">
                                            Asesoría Presencial
                                            <input type="checkbox" id="Presence" class="checkbox" name="Atencion" />
                                            <span class="checkmark"></span>
                                        </label>
                                    </div>
                                </div>

                                <div className='row d-flex justify-content-evenly' >
                                    <div className='col-3' style={{ backgroundColor: window.themeColors.footerColorText }}>
                                    <label htmlFor="Intervention" class="custom-checkbox">
                                    Intervención
                                            <input type="checkbox" id="Intervention" class="checkbox" name="Atencion" />
                                            <span class="checkmark"></span>
                                        </label>
                                    </div>
                                    <div className='col-3' style={{ backgroundColor: window.themeColors.footerColorText }}>
                                    <label htmlFor="Consent" class="custom-checkbox">
                                    Consentimiento
                                            <input type="checkbox" id="Consent" class="checkbox" name="Atencion" />
                                            <span class="checkmark"></span>
                                        </label>
                                    </div>
                                </div>

                                <div className='row d-flex justify-content-evenly' >
                                    <div className='col-3' style={{ backgroundColor: window.themeColors.footerColorText }}>
                                    <label htmlFor="Monitoring" class="custom-checkbox">
                                    Monitoreo
                                            <input type="checkbox" id="Monitoring" class="checkbox" name="Atencion" />
                                            <span class="checkmark"></span>
                                        </label>
                                    </div>
                                    <div className='col-3' style={{ backgroundColor: window.themeColors.footerColorText }}>
                                    <label htmlFor="Interview" class="custom-checkbox">
                                    Entrevista a Domicilio
                                            <input type="checkbox" id="Interview" class="checkbox" name="Atencion" />
                                            <span class="checkmark"></span>
                                        </label>
                                    </div>
                                </div>

                                <div className='row d-flex justify-content-evenly' >
                                    <div className='col-3' style={{ backgroundColor: window.themeColors.footerColorText }}>
                                    <label htmlFor="SocialNetwork" class="custom-checkbox">
                                    Redes Sociales
                                            <input type="checkbox" id="SocialNetwork" class="checkbox" name="Atencion" />
                                            <span class="checkmark"></span>
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
                                <label htmlFor="Anonimus" class="custom-checkbox">
                                Anonimo ?
                                            <input type="checkbox" id="Anonimus" class="checkbox" name="Relation" />
                                            <span class="checkmark"></span>
                                        </label>
                                </div>
                                <div className='col-3' style={{ backgroundColor: window.themeColors.footerColorText }}>
                                <label htmlFor="GrandMother" class="custom-checkbox">
                                Abuela
                                            <input type="checkbox" id="GrandMother" class="checkbox" name="Relation" />
                                            <span class="checkmark"></span>
                                        </label>
                                </div>
                            </div>

                            <div className='row d-flex justify-content-evenly' >
                                <div className='col-3' style={{ backgroundColor: window.themeColors.footerColorText }}>
                                <label htmlFor="Father" class="custom-checkbox">
                                Padre
                                            <input type="checkbox" id="Father" class="checkbox" name="Relation" />
                                            <span class="checkmark"></span>
                                        </label>
                                </div>
                                <div className='col-3' style={{ backgroundColor: window.themeColors.footerColorText }}>
                                <label htmlFor="GrandFather" class="custom-checkbox">
                                Abuelo
                                            <input type="checkbox" id="GrandFather" class="checkbox" name="Relation" />
                                            <span class="checkmark"></span>
                                        </label>
                                </div>
                            </div>

                            <div className='row d-flex justify-content-evenly' >
                                <div className='col-3' style={{ backgroundColor: window.themeColors.footerColorText }}>
                                <label htmlFor="Mother" class="custom-checkbox">
                                Madre
                                            <input type="checkbox" id="Mother" class="checkbox" name="Relation" />
                                            <span class="checkmark"></span>
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
                            <div className='d-flex justify-content-center'>
                                <h1>Datos de la NNyA</h1>
                            </div>
                            <div className='d-flex justify-content-center'>
                                <button>seleccionar nnya</button>
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
                                    <label htmlFor="TelAdvice" class="custom-checkbox">
                                    Violencia Fisica
                                            <input type="checkbox" id="TelAdvice" class="checkbox" name="Relation" />
                                            <span class="checkmark"></span>
                                        </label>
                                    </div>
                                    <div className='col-3' style={{ backgroundColor: window.themeColors.footerColorText }}>
                                    <label htmlFor="TelAdvice" class="custom-checkbox">
                                    Abuso Sexual
                                            <input type="checkbox" id="TelAdvice" class="checkbox" name="Atencion" />
                                            <span class="checkmark"></span>
                                        </label>
                                    </div>
                                </div>
                                <div className='row d-flex justify-content-evenly' >
                                    <div className='col-3' style={{ backgroundColor: window.themeColors.footerColorText }}>
                                    <label htmlFor="TelAdvice" class="custom-checkbox">
                                    Revinculación
                                            <input type="checkbox" id="TelAdvice" class="checkbox" name="Atencion" />
                                            <span class="checkmark"></span>
                                        </label>
                                    </div>
                                    <div className='col-3' style={{ backgroundColor: window.themeColors.footerColorText }}>
                                    <label htmlFor="TelAdvice" class="custom-checkbox">
                                    Adoptibilidad
                                            <input type="checkbox" id="TelAdvice" class="checkbox" name="Atencion" />
                                            <span class="checkmark"></span>
                                        </label>
                                    </div>
                                </div>
                                <div className='row d-flex justify-content-evenly' >
                                    <div className='col-3' style={{ backgroundColor: window.themeColors.footerColorText }}>
                                    <label htmlFor="TelAdvice" class="custom-checkbox">
                                    Abandono
                                            <input type="checkbox" id="TelAdvice" class="checkbox" name="Atencion" />
                                            <span class="checkmark"></span>
                                        </label>
                                    </div>
                                    <div className='col-3' style={{ backgroundColor: window.themeColors.footerColorText }}>
                                    <label htmlFor="TelAdvice" class="custom-checkbox">
                                    Ausencia a la Escuela
                                            <input type="checkbox" id="TelAdvice" class="checkbox" name="Atencion" />
                                            <span class="checkmark"></span>
                                        </label>
                                    </div>
                                </div>
                                <div className='row d-flex justify-content-evenly' >
                                    <div className='col-3' style={{ backgroundColor: window.themeColors.footerColorText }}>
                                    <label htmlFor="TelAdvice" class="custom-checkbox">
                                    Estado de Salud
                                            <input type="checkbox" id="TelAdvice" class="checkbox" name="Atencion" />
                                            <span class="checkmark"></span>
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
                                <label htmlFor="TelAdvice" class="custom-checkbox">
                                Todos
                                            <input type="checkbox" id="TelAdvice" class="checkbox" name="Atencion" />
                                            <span class="checkmark"></span>
                                        </label>
                                </div>
                                <div className='col-3' style={{ backgroundColor: window.themeColors.footerColorText }}>
                                <label htmlFor="TelAdvice" class="custom-checkbox">
                                juridica
                                            <input type="checkbox" id="TelAdvice" class="checkbox" name="Atencion" />
                                            <span class="checkmark"></span>
                                        </label>
                                </div>
                                <div className='col-3' style={{ backgroundColor: window.themeColors.footerColorText }}>
                                <label htmlFor="TelAdvice" class="custom-checkbox">
                                Psicosocial
                                            <input type="checkbox" id="TelAdvice" class="checkbox" name="Atencion" />
                                            <span class="checkmark"></span>
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
                                <label htmlFor="TelAdvice" class="custom-checkbox">
                                Grave con Seguimiento
                                            <input type="checkbox" id="TelAdvice" class="checkbox" name="Atencion" />
                                            <span class="checkmark"></span>
                                        </label>
                                </div>
                                <div className='col-3' style={{ backgroundColor: window.themeColors.footerColorText }}>
                                <label htmlFor="TelAdvice" class="custom-checkbox">
                                En Seguimiento
                                            <input type="checkbox" id="TelAdvice" class="checkbox" name="Atencion" />
                                            <span class="checkmark"></span>
                                        </label>
                                </div>
                            </div>
                            <div className='d-flex justify-content-center'>
                                <p> caso sin seguimiento</p>
                            </div>


                            <div className='row d-flex  justify-content-evenly' >
                                <div className='col-3' style={{ backgroundColor: window.themeColors.footerColorText }}>
                                <label htmlFor="TelAdvice" class="custom-checkbox">
                                Grave sin Seguimiento
                                            <input type="checkbox" id="TelAdvice" class="checkbox" name="Atencion" />
                                            <span class="checkmark"></span>
                                        </label>
                                </div>
                                <div className='col-3' style={{ backgroundColor: window.themeColors.footerColorText }}>
                                <label htmlFor="TelAdvice" class="custom-checkbox">
                                Sin Seguimiento
                                            <input type="checkbox" id="TelAdvice" class="checkbox" name="Atencion" />
                                            <span class="checkmark"></span>
                                        </label>
                                </div>
                            </div>
                            <div className='d-flex justify-content-center'>
                                <p>otros seguimientos</p>
                            </div>

                            <div className='row d-flex  justify-content-evenly' >
                                <div className='col-3' style={{ backgroundColor: window.themeColors.footerColorText }}>
                                <label htmlFor="TelAdvice" class="custom-checkbox">
                                Cerrado
                                            <input type="checkbox" id="TelAdvice" class="checkbox" name="Atencion" />
                                            <span class="checkmark"></span>
                                        </label>
                                </div>
                                <div className='col-3' style={{ backgroundColor: window.themeColors.footerColorText }}>
                                <label htmlFor="TelAdvice" class="custom-checkbox">
                                Derivado
                                            <input type="checkbox" id="TelAdvice" class="checkbox" name="Atencion" />
                                            <span class="checkmark"></span>
                                        </label>
                                </div>
                            </div>
                        </div>

                        <div className='container' style={{ backgroundColor: window.themeColors.boxColorLightLavender }}>
                            <div className='d-flex justify-content-center'>
                                <h1>Tipo Del Caso</h1>
                            </div>

                            <div className='row d-flex  justify-content-evenly '>
                                <div className='col-2'><p>Caso Individual</p></div>
                                <div className='col-2'><p>Caso Grupal</p></div>
                            </div>
                        </div>
                    </div>
                </form>
                <Footer />
            </div>

        </>
    )
}

export default CaseRecord