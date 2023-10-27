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
import CustomInputButton from '../../components/custom/customInputButton.jsx';
import AccordionComponent from '../../components/AccordionComponent/AccordionComponent.jsx'

window.themeColors = colors;


function CaseRecord() {
    const [modalShow, setModalShow] = useState(false);
    const [formularios, setFormularios] = useState([]);


    const toggleFormulario = (index) => {
        if (formularios.includes(index)) {
            setFormularios(formularios.filter((item) => item !== index));
        } else {
            setFormularios([...formularios, index]);
        }
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

    const [data, setData] = useState(customData);
    const [query, setQuery] = useState('');

    const handleInputChange = (e) => {
        const inputValue = e.target.value;
        setQuery(inputValue);

        const filteredData = customData.filter((row, rowIndex) => {
            if (rowIndex === 0) {
                return true;
            }
            return row.some((cell) =>
                typeof cell === 'string' && cell.toLowerCase().includes(inputValue.toLowerCase())
            );
        });
        setData(filteredData);
    };



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
                                <AccordionComponent buttonText="Registro De aserorías E intervenciones" buttonClassName="fw-bold greenColor custom-btn w-100 py-4 fs-4 m-0">
                                    <div className='container  mb-3 p-5 ' style={{ backgroundColor: window.themeColors.boxColorGreen }}>
                                        <div className='d-flex justify-content-center'>
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
                                                    <CustomInputButton buttonText="Agregar Asistencia" inputPlaceholder="Nueva Asistencia" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </AccordionComponent>

                                <AccordionComponent buttonText="Relación Del Adulto con NNyA" buttonClassName="fw-bold lightblue  custom-btn mt-3 w-100 py-4 fs-4 m-0">
                                    <div className='container mb-3 p-5' style={{ backgroundColor: window.themeColors.boxColorBluSky }}>

                                        <div className='row d-flex justify-content-evenly' >
                                            <div className='col-3 mb-3 py-3 ' style={{ backgroundColor: window.themeColors.footerColorText }}>
                                                <label htmlFor="Anonimus" className="custom-checkbox">
                                                    Anónimo/a ?
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
                                            <div className='col-3 mb-3 py-3 d-flex  align-items-center ' style={{ backgroundColor: window.themeColors.footerColorText }}>
                                                <label htmlFor="Mother" className="custom-checkbox">
                                                    Madre
                                                    <input type="checkbox" id="Mother" className="checkbox" name="Relation" />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className='col-3 mb-3 p-0 '>
                                                <CustomInputButton buttonText="Ingresar Nueva Relacion NNya" inputPlaceholder="Nueva Relación" />
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
                                </AccordionComponent>


                                <AccordionComponent buttonText="Datos De la NNyA" buttonClassName="fw-bold LightBeige  custom-btn mt-3 w-100 py-4 fs-4 m-0">
                                    <div className='container mb-3 p-5' style={{ backgroundColor: window.themeColors.boxColorLightBeige }}>
                                        <div className='d-flex justify-content-center'>
                                            <button className='btn w-75 container-fluid mb-3'
                                                style={{ backgroundColor: window.themeColors.buttonColor, color: window.themeColors.footerColorText }}
                                                type='button' onClick={handleShowModal}
                                            >
                                                <h6 className='m-0 fw-bold py-2'>BUSCAR Y SELECCIONAR NNYA</h6>
                                            </button>
                                            <CustomModal
                                                title="Datos NNyA"
                                                show={modalShow}
                                                handleClose={handleCloseModal}
                                                body={
                                                    <div className='d-flex justify-content-around flex-column flex-wrap'>
                                                        <div>
                                                            <Searcher query={query} handleInputChange={handleInputChange} />
                                                        </div>
                                                        <DataTable data={data} headerBackgroundColor="#F2A57F" />
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
                                                    <CustomInputButton buttonText="Agregar Motivo" inputPlaceholder="Nuevo Motivo" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='d-flex justify-content-center'>
                                        <button className='btn w-75 container-fluid py-3 mb-3 fw-bold'
                                            style={{ backgroundColor: window.themeColors.buttonColor, color: window.themeColors.footerColorText }}
                                            type='button'
                                            onClick={() => {
                                                const newIndex = formularios.length;
                                                toggleFormulario(newIndex);
                                            }}
                                        >
                                            {formularios.includes(formularios.length) ? "Anular Formulario" : "Agregar Formulario"}
                                        </button>
                                    </div>

                                    {formularios.map((index) => (
                                        <div key={index}>
                                            <FormularioNnya />
                                            <div className='d-flex justify-content-center'>
                                                <button className='btn w-75 container-fluid py-3 fw-bold mb-3'
                                                    style={{ backgroundColor: window.themeColors.buttonColor, color: window.themeColors.footerColorText }}
                                                    onClick={() => toggleFormulario(index)}
                                                >
                                                    {formularios.includes(index) ? "Anular Formulario" : "Agregar Formulario"}
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </AccordionComponent>

                                <AccordionComponent buttonText="Estado Del Caso"  buttonClassName="fw-bold custom-btn LightLavender mt-3 w-100 py-4 fs-4 m-0">
                                    <div className='container mb-3 p-5' style={{ backgroundColor: window.themeColors.boxColorLightLavender }}>

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
                                                className={`col-3 mb-3 py-3 text-center caso-individual ${formularios.length === 0 ? 'active' : ''}`}
                                            >
                                                CASO INDIVIDUAL
                                            </div>
                                            <div
                                                className={`col-3 mb-3 py-3 text-center caso-grupal ${formularios.length > 0 ? 'active' : ''}`}
                                            >
                                                CASO GRUPAL
                                            </div>
                                        </div>
                                    </div>
                                </AccordionComponent>

                                <div className='container w-75 d-flex flex-column justify-content-evenly mt-3'>
                                    <input type="submit" value="REGISTRAR CASO" className='btn register btn-lg mb-3'
                                        style={{ backgroundColor: window.themeColors.buttonColor, color: window.themeColors.footerColorText }} />
                                    <button type='button' className='btn register btn-lg mb-3'
                                        style={{ backgroundColor: window.themeColors.buttonColorTransparent, color: window.themeColors.footerColorText }} >CANCELAR CASO</button>
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