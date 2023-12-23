import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form } from 'react-bootstrap';
import Footer from '../../components/partials/footer.jsx'
import Menu from '../../components/partials/Menu.jsx'
import AccordionComponent from '../../components/AccordionComponent/AccordionComponent.jsx'
import FormularioNnya from '../../components/addnnya/FormualrioNnya.jsx'
import CustomModal from '../../components/modal/modal';
import DataTable from '../../components/dataTable/dataTable.jsx';
import Searcher from '../../components/searcher/searcher.jsx'
import ComponentComment from '../../components/componentComment/componentComment.jsx';

const CaseRecord = () => {
    /* useStates / variables */
    const [modalShow, setModalShow] = useState(false);
    const [checkboxValues, setCheckboxValues] = useState({});
    const [estadosDelCaso, setEstadosDelCaso] = useState([]);
    const [tiposAsesoramiento, setTiposAsesoramiento] = useState([]);
    const [motivos, setMotivos] = useState([]);
    const [relacionesConAdulto, setRelacionesConAdulto] = useState([]);
    const [fecha, setFecha] = useState(obtenerFechaActual);
    const [textareaVisibility, setTextareaVisibility] = useState({
        motivo: true,
    });
    const [formularios, setFormularios] = useState([]);
    const [esCasoGrupal, setEsCasoGrupal] = useState(false);


    //Fecha de el Caso
    function obtenerFechaActual() {
        const fechaActual = new Date();
        const day = fechaActual.getDate().toString().padStart(2, '0');
        const month = (fechaActual.getMonth() + 1).toString().padStart(2, '0');
        const year = fechaActual.getFullYear();
        return `${year}-${month}-${day}`;
    }

    //Edad del nnya
    const calcularFechaNacimiento = (edad) => {
        const hoy = new Date();
        const fechaNacimientoCalculada = new Date(
            hoy.getFullYear() - edad,
            hoy.getMonth(),
            hoy.getDate()
        );
        return fechaNacimientoCalculada.toISOString().split("T")[0];
    };

    useEffect(() => {
        setFecha(obtenerFechaActual());
        setFormData((prevData) => ({ ...prevData, fecha: obtenerFechaActual() }));
    }, []);

    const handleFechaChange = (e) => {
        setFecha(e.target.value);
    };

    /* Axios get datos de checkboxes */
    useEffect(() => {
        axios.get('http://localhost:8080/api/informacion')
            .then(response => {
                if (response.status === 200) {
                    console.log('Es correcto');
                    const sortedEstadosDelCaso = response.data.estadosDelCaso.sort((a, b) => a.id - b.id);
                    const sortedTiposAsesoramiento = response.data.tiposAsesoramiento.sort((a, b) => a.id - b.id);
                    const sortedMotivos = response.data.motivos.sort((a, b) => a.id - b.id);
                    const sortedRelacionesConAdulto = response.data.relacionesConAdulto.sort((a, b) => a.id - b.id);

                    setEstadosDelCaso(sortedEstadosDelCaso);
                    setTiposAsesoramiento(sortedTiposAsesoramiento);
                    setMotivos(sortedMotivos);
                    setRelacionesConAdulto(sortedRelacionesConAdulto);
                } else {
                    console.log('No se pudo obtener la respuesta esperada');
                }
            })
            .catch(error => {
                console.error('Error al realizar la solicitud:', error);
            });
    }, []);

    const toggleFormulario = (index) => {
        const isFormularioPresente = formularios.includes(index);

        if (isFormularioPresente) {
            const nuevosFormularios = formularios.filter((item) => item !== index);
            const formulariosAjustados = nuevosFormularios.map((_, i) => i + 1);

            setFormularios(formulariosAjustados);
        } else {
            setFormularios([...formularios, formularios.length + 1]);
        }

        console.log("Índice actual:", isFormularioPresente ? index - 1 : index);
    };
    useEffect(() => {
        setEsCasoGrupal(formularios.length !== 0);
    }, [formularios]);
    //modal
    const handleShowModal = () => {
        setModalShow(true);
    }

    const handleCloseModal = () => {
        setModalShow(false);
    }
    //tabla del modal
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

    const handleCheckboxChange = (type, id) => {
        setFormData((prevData) => {
            const newCheckboxValues = {
                ...prevData.checkboxValues,
                [type]: { ...prevData.checkboxValues[type] }
            };

            const isChecked = !newCheckboxValues[type][id];

            let key;

            if (type === 'relacionesConAdulto' && isChecked) {
                Object.keys(newCheckboxValues[type]).forEach((k) => {
                    key = k;
                    if (k !== id.toString()) {
                        newCheckboxValues[type][k] = false;
                    }

                    if (id === 1) {
                        setFormData((prevData) => ({ ...prevData, dniAdultoDisabled: true }));
                    } else {
                        setFormData((prevData) => ({ ...prevData, dniAdultoDisabled: false }));
                    }
                });
            }

            if (type === 'motivos') {

                newCheckboxValues[type][id] = isChecked;


                const todosMotivosFalse = Object.values(newCheckboxValues[type]).every(value => value === false);


                const algunMotivoTrue = Object.values(newCheckboxValues[type]).some(value => value === true);


                if (todosMotivosFalse) {
                    setTextareaVisibility({ motivo: true });
                } else if (algunMotivoTrue) {
                    setTextareaVisibility({ motivo: false });
                }
            }

            newCheckboxValues[type][id] = isChecked;

            setCheckboxValues(newCheckboxValues);

            return { ...prevData, checkboxValues: newCheckboxValues };
        });
    };

    const handleAdditionalInputChange = (e, field) => {
        const value = e.target.value;
        setFormData((prevData) => ({ ...prevData, [field]: value }));
        if (field === "birthdate") {
            const edadCalculada = calcularEdad(value);
            setFormData({
                ...formData,
                birthdate: value,
                age: edadCalculada.toString(),
            });
        } else if (field === "age") {
            const fechaNacimientoCalculada = calcularFechaNacimiento(value);
            setFormData({
                ...formData,
                age: value,
                birthdate: fechaNacimientoCalculada,
            });
        }
    };

    const calcularEdad = (fechaNacimiento) => {
        const fechaNacimientoDate = new Date(fechaNacimiento);
        const hoy = new Date();
        const edadCalculada = hoy.getFullYear() - fechaNacimientoDate.getFullYear();
        return edadCalculada;
    };

    const [formData, setFormData] = useState({
        fecha: obtenerFechaActual(),
        checkboxValues: {},
        dniAdulto: '',
        nameAdulto: '',
        telephone: '',
        addressAdulto: '',
        idNnya: '',
        nameNnya: '',
        dniNnya: '',
        address: '',
        age: '',
        school: '',
        birthdate: '',
        comentario: '',
    });


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Datos a enviar al backend:', formData);

        console.log("esCasoGrupal:", esCasoGrupal);
        
        const relacionesConAdultoArray = Array.isArray(formData.checkboxValues.relacionesConAdulto)
            ? formData.checkboxValues.relacionesConAdulto
            : Object.entries(formData.checkboxValues.relacionesConAdulto);

        console.log('Tipo de dato de relacionesConAdulto:', typeof relacionesConAdultoArray);


        const formDataToSend = {
            ...formData,
            esCasoGrupal: esCasoGrupal.toString(),
            checkboxValues: {
              ...formData.checkboxValues,
              relacionesConAdulto: Object.entries(
                formData.checkboxValues.relacionesConAdulto
              ).reduce((acc, [key, value]) => {
                acc[parseInt(key, 10)] = Boolean(value);
                return acc;
              }, {}),
            },
          };
        console.log('Datos a enviar al backend:', formDataToSend);



        axios.post('http://localhost:8080/api/guardarDatos', formDataToSend)
            .then(response => {

                if (response.status === 200) {
                    console.log('Datos enviados exitosamente al backend');
                } else {
                    console.error('Error al enviar los datos al backend');
                }
            })
            .catch(error => {
                console.error('Error al enviar los datos al backend:', error);
            });
    };

    return (
        <>
            <div className=' container-fluid row p-0 m-0 ' style={{ backgroundColor: window.themeColors.footerBackground.bakgroundFColor }}>
                <div className='col-md-2 m-0 container-fluid p-0 menubox d-none d-md-block' style={{ backgroundColor: window.themeColors.color }}>
                    <Menu />
                </div>

                <div className='container-fluid d-flex align-items-center flex-column col-12 col-md-9 justify-content-between'>

                    <div className='container-fluid'>
                        <div className='d-flex flex-column align-items-center' >
                            <h1>REGISTRO DEL CASO</h1>
                            <h3>Detalles de Registro e Identificación del Caso</h3>
                        </div>
                        <Form>
                            <div className='container py-5 px-3 mb-3 ' style={{ backgroundColor: window.themeColors.boxBorder }}>
                                <AccordionComponent buttonText="Registro De aserorías E intervenciones" buttonClassName="fw-bold greenColor custom-btn w-100 py-4 fs-4 m-0">
                                    <div className='container  mb-3 p-5 ' style={{ backgroundColor: window.themeColors.boxColorGreen }}>
                                        <div className='d-flex justify-content-center'>
                                        </div>
                                        <div className='d-flex justify-content-evenly mb-3  row' >
                                            <input className='col-2  form-control md' type="number" name="" id="" placeholder='Número' disabled />
                                            <input
                                                className='col-2 form-control md'
                                                type="date"
                                                id="fecha"
                                                value={fecha}
                                                onChange={handleFechaChange}
                                            />
                                        </div>
                                        <div className='d-flex justify-content-evenly  row' >
                                            <input className='col-2 form-control md' type="text" name="" id="" placeholder='Nombre' disabled />
                                            <input className='col-2 form-control md' type="text" name="" id="" placeholder='Registrador' disabled />
                                        </div>
                                    </div>

                                    <div className='container mb-3 p-5 ' style={{ backgroundColor: window.themeColors.boxColorGreen }}>
                                        <div className='d-flex justify-content-center'>
                                            <h1>Tipo De Asesoramiento E Intervención</h1>
                                        </div>
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                                            {tiposAsesoramiento.map((asesoramiento) => (
                                                <div
                                                    key={asesoramiento.id}
                                                    className="p-3"
                                                    style={{
                                                        backgroundColor: window.themeColors.footerColorText,
                                                        flex: '0 0 calc(50% - 10px)',
                                                    }}
                                                >
                                                    <label htmlFor={asesoramiento.nombre} className="custom-checkbox" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                        <span>{asesoramiento.nombre}</span>
                                                        <input
                                                            type="checkbox"
                                                            id={asesoramiento.nombre}
                                                            className="checkbox"
                                                            checked={checkboxValues['tiposAsesoramiento']?.[asesoramiento.id] || false}
                                                            onChange={() => handleCheckboxChange('tiposAsesoramiento', asesoramiento.id)}
                                                            style={{ marginLeft: '10px' }}
                                                        />
                                                        <span className="checkmark"></span>
                                                    </label>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </AccordionComponent>

                                <AccordionComponent buttonText="Relación Del Adulto con NNyA" buttonClassName="fw-bold lightblue  custom-btn mt-3 w-100 py-4 fs-4 m-0">
                                    <div className='container mb-3 p-5' style={{ backgroundColor: window.themeColors.boxColorBluSky }}>
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                                            {relacionesConAdulto.map((relacion) => (
                                                <div
                                                    key={relacion.id}
                                                    className={`p-3 ${checkboxValues['relacionesConAdulto']?.[relacion.id] ? 'active-checkbox' : ''}`}
                                                    style={{
                                                        backgroundColor: window.themeColors.footerColorText,
                                                        flex: '0 0 calc(50% - 10px)',
                                                    }}
                                                >
                                                    <label htmlFor={relacion.name} className="custom-checkbox">
                                                        {relacion.name}
                                                        <input
                                                            type="checkbox"
                                                            id={relacion.name}
                                                            className="checkbox"
                                                            checked={checkboxValues['relacionesConAdulto']?.[relacion.id] || false}
                                                            onChange={() => handleCheckboxChange('relacionesConAdulto', relacion.id)}
                                                            style={{ marginLeft: '10px' }}
                                                            disabled={
                                                                checkboxValues['relacionesConAdulto'] &&
                                                                Object.values(checkboxValues['relacionesConAdulto']).some((value) => value) &&
                                                                !checkboxValues['relacionesConAdulto'][relacion.id]
                                                            }
                                                        />
                                                        <span className="checkmark"></span>
                                                    </label>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className='container mb-3 p-5' style={{ backgroundColor: window.themeColors.boxColorBluSky }}>
                                        <div className='d-flex justify-content-center'>
                                            <h1>Datos Del Adulto</h1>
                                        </div>

                                        <div className='d-flex justify-content-evenly mb-3  row' >
                                            <input
                                                className='col-2 form-control md'
                                                type="number"
                                                placeholder='DNI Adulto'
                                                value={formData.dniAdulto}
                                                onChange={(e) => handleAdditionalInputChange(e, 'dniAdulto')}
                                                disabled={checkboxValues['relacionesConAdulto'] && checkboxValues['relacionesConAdulto']['1']}
                                            />

                                            <input
                                                className='col-2 form-control md'
                                                type="text"
                                                placeholder='Nombre Completo Adulto'
                                                value={formData.nameAdulto}
                                                onChange={(e) => handleAdditionalInputChange(e, 'nameAdulto')}
                                                disabled={checkboxValues['relacionesConAdulto'] && checkboxValues['relacionesConAdulto']['1']}
                                            />
                                        </div>
                                        <div className='d-flex justify-content-evenly  row' >
                                            <input
                                                className='col-2 form-control md'
                                                type="number"
                                                placeholder='Teléfono'
                                                value={formData.telephone}
                                                onChange={(e) => handleAdditionalInputChange(e, 'telephone')}
                                                disabled={checkboxValues['relacionesConAdulto'] && checkboxValues['relacionesConAdulto']['1']}
                                            />
                                            <input
                                                className='col-2 form-control md'
                                                type="text"
                                                placeholder='Domicilio Adulto'
                                                value={formData.addressAdulto}
                                                onChange={(e) => handleAdditionalInputChange(e, 'addressAdulto')}
                                                disabled={checkboxValues['relacionesConAdulto'] && checkboxValues['relacionesConAdulto']['1']}
                                            />
                                        </div>
                                    </div>
                                </AccordionComponent>


                                <AccordionComponent buttonText="Datos De la NNyA" buttonClassName="fw-bold LightBeige  custom-btn mt-3 w-100 py-4 fs-4 m-0">
                                    <div className='container mb-3 p-5' style={{ backgroundColor: window.themeColors.boxColorLightBeige }}>
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
                                                <input
                                                    className='col-2 form-control md'
                                                    type="text"
                                                    placeholder='Nombre Completo'
                                                    value={formData.nameNnya}
                                                    onChange={(e) => handleAdditionalInputChange(e, 'nameNnya')}
                                                />
                                                <input
                                                    className='col-2 form-control md'
                                                    type="number"
                                                    id=""
                                                    placeholder='DNI'
                                                    value={formData.dniNnya}
                                                    onChange={(e) => handleAdditionalInputChange(e, 'dniNnya')}
                                                />
                                            </div>
                                            <div className='d-flex justify-content-evenly mb-3  row' >
                                                <input
                                                    className='col-2 form-control md'
                                                    type="text"
                                                    id=""
                                                    placeholder='Domicilio'
                                                    value={formData.address}
                                                    onChange={(e) => handleAdditionalInputChange(e, 'address')}
                                                />
                                                <input
                                                    className='col-2 form-control md'
                                                    type="date"
                                                    id=""
                                                    value={formData.birthdate}
                                                    onChange={(e) => handleAdditionalInputChange(e, 'birthdate')}
                                                />
                                            </div>
                                            <div className='d-flex justify-content-evenly  row' >
                                                <input
                                                    className='col-2 form-control md'
                                                    type="number"
                                                    id=""
                                                    placeholder='Edad'
                                                    value={formData.age}
                                                    onChange={(e) => handleAdditionalInputChange(e, 'age')}
                                                />
                                                <input
                                                    className='col-2 form-control md'
                                                    type="text"
                                                    id=""
                                                    placeholder='Escuela'
                                                    value={formData.school}
                                                    onChange={(e) => handleAdditionalInputChange(e, 'school')}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className='container mb-3 p-5' style={{ backgroundColor: window.themeColors.boxColorLightBeige }}>
                                        <div className='d-flex justify-content-center'>
                                            <h1>Motivo Del Reclamo</h1>
                                        </div>

                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                                            {motivos.map((motivo) => (
                                                <div
                                                    key={motivo.id}
                                                    className="p-3"
                                                    style={{
                                                        backgroundColor: window.themeColors.footerColorText,
                                                        flex: '0 0 calc(50% - 10px)',
                                                    }}
                                                >
                                                    <label htmlFor={motivo.nombre} className="custom-checkbox">
                                                        {motivo.nombre}
                                                        <input
                                                            type="checkbox"
                                                            id={motivo.nombre}
                                                            className="checkbox"
                                                            checked={checkboxValues['motivos']?.[motivo.id] || false}
                                                            onChange={() => handleCheckboxChange('motivos', motivo.id)}
                                                            style={{ marginLeft: '10px' }}
                                                        />
                                                        <span className="checkmark"></span>
                                                    </label>
                                                </div>
                                            ))}
                                        </div>
                                        <div className='mt-1'>
                                            {!textareaVisibility.motivo && <ComponentComment titulo="Comentario y Observaciones"
                                                value={formData.comentario}
                                                onChange={(e) => handleAdditionalInputChange(e, 'comentario')}
                                                placeholder="Escribe Aquí tus Comentarios y Observaciones" />}
                                        </div>
                                    </div>

                                    <div className="d-flex justify-content-center">
                                        <button
                                            type='Button'
                                            style={{ backgroundColor: window.themeColors.buttonColor, color: window.themeColors.footerColorText }}
                                            className="btn w-75 container-fluid mb-3 py-3 fw-bold"
                                            onClick={() => {
                                                const newIndex = formularios.length + 1;
                                                toggleFormulario(newIndex);
                                            }}
                                        >
                                            Agregar Formulario
                                        </button>
                                    </div>

                                    {formularios.map((index) => (
                                        <div key={index}>
                                            <div className="d-flex justify-content-center">
                                                <button
                                                    type='Button'
                                                    style={{ backgroundColor: window.themeColors.buttonColor, color: window.themeColors.footerColorText }}
                                                    className="btn w-75 container-fluid py-3 fw-bold mb-3"
                                                    onClick={() => toggleFormulario(index)}
                                                >
                                                    {formularios.includes(index)
                                                        ? "Anular Formulario"
                                                        : "Agregar Formulario"}
                                                </button>
                                            </div>
                                        </div>
                                    ))}

                                </AccordionComponent>


                                <AccordionComponent buttonText="Estado Del Caso" buttonClassName="fw-bold custom-btn LightLavender mt-3 w-100 py-4 fs-4 m-0">
                                    <div className='container  p-5' style={{ backgroundColor: window.themeColors.boxColorLightLavender }}>
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                                            {estadosDelCaso.map((estado) => (
                                                <div
                                                    key={estado.id}
                                                    className="p-3"
                                                    style={{
                                                        backgroundColor: window.themeColors.footerColorText,
                                                        flex: '0 0 calc(50% - 10px)',
                                                    }}
                                                >
                                                    <label htmlFor={estado.name} className="custom-checkbox">
                                                        {estado.name}
                                                        <input
                                                            type="checkbox"
                                                            id={estado.name}
                                                            className="checkbox"
                                                            checked={checkboxValues['estadosDelCaso']?.[estado.id] || false}
                                                            onChange={() => handleCheckboxChange('estadosDelCaso', estado.id)}
                                                            style={{ marginLeft: '10px' }}
                                                        />
                                                        <span className="checkmark"></span>
                                                    </label>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className='container mt-3' style={{ backgroundColor: window.themeColors.boxColorLightLavender }}>
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
                                    <input type="submit" onClick={handleSubmit} value="REGISTRAR CASO" className='btn register btn-lg mb-3'
                                        style={{ backgroundColor: window.themeColors.buttonColor, color: window.themeColors.footerColorText }} />
                                    <button type='button' className='btn register btn-lg mb-3'
                                        style={{ backgroundColor: window.themeColors.buttonColorTransparent, color: window.themeColors.footerColorText }} >CANCELAR CASO</button>
                                </div>
                            </div>
                        </Form>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default CaseRecord;