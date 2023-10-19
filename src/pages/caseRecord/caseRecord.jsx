import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { colors } from '../../assets/styles/theme.js'
import '../../assets/styles/styles.css'
import '../../assets/styles/normalize.css'
import Footer from '../../components/partials/footer.jsx'
import Header from '../../components/partials/header.jsx'
import Menu from '../../components/partials/Menu.jsx'
import CustomModal from '../../components/modal/modal';
import DataTable from '../../components/dataTable/dataTable.jsx';
import Searcher from '../../components/searcher/searcher.jsx'
import FormularioNnya from '../../components/addnnya/FormualrioNnya.jsx'

window.themeColors = colors;


function CaseRecord() {
    const [modalShow, setModalShow] = useState(false);

    const [casoIndividualActive, setCasoIndividualActive] = useState(true);
    const [casoGrupalActive, setCasoGrupalActive] = useState(false);

    const handleClick = (button) => {
        if (button === 'casoIndividual') {
            setCasoIndividualActive(true);
            setCasoGrupalActive(false);
        } else if (button === 'casoGrupal') {
            setCasoIndividualActive(false);
            setCasoGrupalActive(true);
        }
    }

    const [formularios, setFormularios] = useState([]);

    const agregarFormulario = () => {
        setFormularios([...formularios, <FormularioNnya />]);
    };

    const anularFormulario = (index) => {
        const nuevosFormularios = [...formularios];
        nuevosFormularios.splice(index, 1);
        setFormularios(nuevosFormularios);
    };

    const handleShowModal = () => {
        setModalShow(true);
    }

    const handleCloseModal = () => {
        setModalShow(false);
    }

    const Checkbox = () => {
        return (
            <button className='folderButton' onClick={() => handleShowModal(2)}>
                <input type="radio" name="selec" id="selec" />
            </button>
        );
    };

    const customData = [
        ["Seleccionar", "Nombre y Apellido", "D.N.I"],
        [<Checkbox />, "Ramiro", "121312131"],
        [<Checkbox />, "Rogelio", "123131241"],
        [<Checkbox />, "Cris", "122314125"],
    ];

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
                            <div className='container py-5 px-3 mb-3 ' style={{ backgroundColor: window.themeColors.boxBorder }}>
                                <div className='container  mb-3 p-5 ' style={{ backgroundColor: window.themeColors.boxColorGreen }}>
                                    <div className='d-flex justify-content-center'>
                                        <h1>Registro De aserorías E intervenciones</h1>
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
                                        <h1>Tipo De Asesoramiento E Intervención</h1>
                                    </div>
                                    <div>
                                        <div className='row d-flex justify-content-evenly' >
                                            <div className='col-3 mb-3 py-3 ' style={{ backgroundColor: window.themeColors.footerColorText }}>
                                                <label htmlFor="TelAdvice" className="custom-checkbox">
                                                    Asesoría Telefónica
                                                    <input type="checkbox" id="TelAdvice" className="checkbox" name="Atencion" />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className='col-3 mb-3 py-3 ' style={{ backgroundColor: window.themeColors.footerColorText }}>
                                                <label htmlFor="Presence" className="custom-checkbox">
                                                    Asesoría Presencial
                                                    <input type="checkbox" id="Presence" className="checkbox" name="Atencion" />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </div>
                                        </div>

                                        <div className='row d-flex justify-content-evenly' >
                                            <div className='col-3 mb-3 py-3 ' style={{ backgroundColor: window.themeColors.footerColorText }}>
                                                <label htmlFor="Intervention" className="custom-checkbox">
                                                    Intervención
                                                    <input type="checkbox" id="Intervention" className="checkbox" name="Atencion" />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className='col-3 mb-3 py-3 ' style={{ backgroundColor: window.themeColors.footerColorText }}>
                                                <label htmlFor="Consent" className="custom-checkbox">
                                                    Consentimiento
                                                    <input type="checkbox" id="Consent" className="checkbox" name="Atencion" />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </div>
                                        </div>

                                        <div className='row d-flex justify-content-evenly' >
                                            <div className='col-3 mb-3 py-3 ' style={{ backgroundColor: window.themeColors.footerColorText }}>
                                                <label htmlFor="Monitoring" className="custom-checkbox">
                                                    Monitoreo
                                                    <input type="checkbox" id="Monitoring" className="checkbox" name="Atencion" />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className='col-3 mb-3 py-3 ' style={{ backgroundColor: window.themeColors.footerColorText }}>
                                                <label htmlFor="Interview" className="custom-checkbox">
                                                    Entrevista a Domicilio
                                                    <input type="checkbox" id="Interview" className="checkbox" name="Atencion" />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </div>
                                        </div>

                                        <div className='row d-flex justify-content-evenly' >
                                            <div className='col-3 mb-3 py-3 ' style={{ backgroundColor: window.themeColors.footerColorText }}>
                                                <label htmlFor="SocialNetwork" className="custom-checkbox">
                                                    Redes Sociales
                                                    <input type="checkbox" id="SocialNetwork" className="checkbox" name="Atencion" />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className='col-3 mb-3 px-0 py-0 mr-0 '>
                                                <button className='btn d-flex flex-row py-3 mr-0 px-5 bg-white'>Agregar Medio <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0z" fill="green" />
                                                    <path d="M7.5 4.5a.5.5 0 0 1 1 0v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 0-1z" fill="white" />
                                                </svg> </button>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='container mb-3 p-5' style={{ backgroundColor: window.themeColors.boxColorBluSky }}>
                                    <div className='d-flex justify-content-center'>
                                        <h1>Relación Del Adulto con NNyA</h1>
                                    </div>

                                    <div className='row d-flex justify-content-evenly' >
                                        <div className='col-3 mb-3 py-3 ' style={{ backgroundColor: window.themeColors.footerColorText }}>
                                            <label htmlFor="Anonimus" className="custom-checkbox">
                                                Anonimo ?
                                                <input type="checkbox" id="Anonimus" className="checkbox" name="Relation" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                        <div className='col-3 mb-3 py-3 ' style={{ backgroundColor: window.themeColors.footerColorText }}>
                                            <label htmlFor="GrandMother" className="custom-checkbox">
                                                Abuela
                                                <input type="checkbox" id="GrandMother" className="checkbox" name="Relation" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className='row d-flex justify-content-evenly' >
                                        <div className='col-3 mb-3 py-3 ' style={{ backgroundColor: window.themeColors.footerColorText }}>
                                            <label htmlFor="Father" className="custom-checkbox">
                                                Padre
                                                <input type="checkbox" id="Father" className="checkbox" name="Relation" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                        <div className='col-3 mb-3 py-3 ' style={{ backgroundColor: window.themeColors.footerColorText }}>
                                            <label htmlFor="GrandFather" className="custom-checkbox">
                                                Abuelo
                                                <input type="checkbox" id="GrandFather" className="checkbox" name="Relation" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className='row d-flex justify-content-evenly' >
                                        <div className='col-3 mb-3 py-3 ' style={{ backgroundColor: window.themeColors.footerColorText }}>
                                            <label htmlFor="Mother" className="custom-checkbox">
                                                Madre
                                                <input type="checkbox" id="Mother" className="checkbox" name="Relation" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                        <div className='col-3 mb-3 px-0 py-0 '>
                                            <button className='btn d-flex flex-row justify-content-between align-items-center px-4 bg-white' >Ingresar Relación con NNyA <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0z" fill="green" />
                                                <path d="M7.5 4.5a.5.5 0 0 1 1 0v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 0-1z" fill="white" />
                                            </svg> </button>
                                        </div>
                                    </div>
                                </div>

                                <div className='container mb-3 p-5' style={{ backgroundColor: window.themeColors.boxColorBluSky }}>
                                    <div className='d-flex justify-content-center'>
                                        <h1>Datos Del Adulto</h1>
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

                                <div className='container mb-3 p-5' style={{ backgroundColor: window.themeColors.boxColorLightBeige }}>
                                    <div className='d-flex justify-content-center' >
                                        <h1>Datos De la NNyA</h1>
                                    </div>

                                    <div className='d-flex justify-content-center'>
                                        <button className='btn w-75 container-fluid mb-3'
                                            style={{ backgroundColor: window.themeColors.buttonColor, color: window.themeColors.footerColorText }}
                                            type='button' onClick={handleShowModal}
                                        >
                                            <h6 className='m-0'>BUSCAR Y SELECCIONAR NNYA</h6>
                                        </button>
                                        <CustomModal
                                            title="Datos NNyA"
                                            show={modalShow}
                                            handleClose={handleCloseModal}
                                            body={
                                                <div className='d-flex justify-content-around flex-column flex-wrap'>
                                                    <div>
                                                        <Searcher datos={customData} />
                                                    </div>
                                                    <DataTable data={customData} headerBackgroundColor="#F2A57F" />
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


                                {formularios.length === 0 && (
                                    <div className='d-flex justify-content-center'>
                                        <button
                                            className='btn w-75 container-md mb-3'
                                            type='button'
                                            style={{ backgroundColor: window.themeColors.buttonColor, color: window.themeColors.footerColorText }}
                                            onClick={agregarFormulario}
                                        >
                                            AGREGAR NNYA
                                        </button>
                                    </div>
                                )}

                                <div>
                                    {formularios.map((formulario, index) => (
                                        <div key={index}>
                                            <div className='d-flex justify-content-center'>
                                                <button
                                                    className='btn w-75 container-md mb-3'
                                                    type='button'
                                                    style={{ backgroundColor: window.themeColors.buttonColor, color: window.themeColors.footerColorText }}
                                                    onClick={agregarFormulario}
                                                >
                                                    AGREGAR NNYA
                                                </button>
                                            </div>
                                            {formulario}
                                            <div className='d-flex justify-content-center'>
                                                <button
                                                    className='btn w-75 container-md mb-3'
                                                    type='button'
                                                    style={{ backgroundColor: window.themeColors.buttonColor, color: window.themeColors.footerColorText }}
                                                    onClick={() => anularFormulario(index)}
                                                >
                                                    ANULAR NNyA
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                    <div className='container mb-3 p-5' style={{ backgroundColor: window.themeColors.boxColorLightLavender }}>
                                        <div className='d-flex flex-column align-items-center'>
                                            <h1>Estado Del Caso </h1>
                                        </div>

                                        <div className='row d-flex  justify-content-evenly' >
                                            <div className='col-3 mb-3 py-3 ' style={{ backgroundColor: window.themeColors.footerColorText }}>
                                                <label htmlFor="Record with Follow-up" className="custom-checkbox px-0">
                                                    Grave con Seguimiento
                                                    <input type="checkbox" id="Record with Follow-up" className="checkbox" name="Case-with-Follow-up" />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className='col-3 mb-3 py-3 ' style={{ backgroundColor: window.themeColors.footerColorText }}>
                                                <label htmlFor="Follow-up" className="custom-checkbox px-0">
                                                    En Seguimiento
                                                    <input type="checkbox" id="Follow-up" className="checkbox" name="Case-with-Follow-up" />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className='row d-flex  justify-content-evenly' >
                                            <div className='col-3 mb-3 py-3 ' style={{ backgroundColor: window.themeColors.footerColorText }}>
                                                <label htmlFor="Record-without-Follow-up" className="custom-checkbox px-0">
                                                    Grave sin Seguimiento
                                                    <input type="checkbox" id="Record-without-Follow-up" className="checkbox" name="Untracked Case" />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className='col-3 mb-3 py-3 ' style={{ backgroundColor: window.themeColors.footerColorText }}>
                                                <label htmlFor="Untracked" className="custom-checkbox px-0">
                                                    Sin Seguimiento
                                                    <input type="checkbox" id="Untracked" className="checkbox" name="Untracked Case" />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='container' style={{ backgroundColor: window.themeColors.boxColorLightLavender }}>
                                        <div className='d-flex justify-content-center'>
                                            <h1>Tipo Del Caso</h1>
                                        </div>

                                        <div className='row d-flex justify-content-evenly'>
                                            <div
                                                className={`col-3 btn mb-3 caso-individual ${casoIndividualActive ? 'active' : ''}`}
                                                onClick={() => handleClick('casoIndividual')}
                                            >
                                                Caso Individual
                                            </div>
                                            <div
                                                className={`col-3 btn mb-3 caso-grupal ${casoGrupalActive ? 'active' : ''}`}
                                                onClick={() => handleClick('casoGrupal')}
                                            >
                                                Caso Grupal
                                            </div>
                                        </div>
                                    </div>

                                    <div className='d-flex align-items-center py-3 flex-column' >
                                        <input
                                            className='btn my-3 w-75 container-fluid mb-3'
                                            style={{ backgroundColor: window.themeColors.buttonColor, color: window.themeColors.footerColorText }}
                                            type="submit"
                                            value="REGISTRAR CASO"
                                            onClick={(event) => handleSubmit(event)}
                                        />
                                        <button className='btn mb-3 w-75 container-fluid'
                                            style={{ backgroundColor: window.themeColors.buttonColor, color: window.themeColors.footerColorText }} >
                                            <p className='p-0 mb-0'>CANCELAR REGISTRO</p>
                                        </button>
                                    </div>
                                </div>
                        </form>

                    </div>
                </div >
                <Footer />
            </div >

        </>
    )
}

export default CaseRecord