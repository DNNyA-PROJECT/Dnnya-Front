import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form } from 'react-bootstrap';
import Footer from '../../components/partials/footer.jsx'
import Header from '../../components/partials/header.jsx'
import Menu from '../../components/partials/Menu.jsx'
import AccordionComponent from '../../components/AccordionComponent/AccordionComponent.jsx'
import CustomModal from '../../components/modal/modal';
import DataTable from '../../components/dataTable/dataTable.jsx';
import Searcher from '../../components/searcher/searcher.jsx'

const CaseRecord = () => {
    const [modalShow, setModalShow] = useState(false);
    const [checkboxValues, setCheckboxValues] = useState({});
    const [estadosDelCaso, setEstadosDelCaso] = useState([]);
    const [tiposAsesoramiento, setTiposAsesoramiento] = useState([]);
    const [motivos, setMotivos] = useState([]);
    const [relacionesConAdulto, setRelacionesConAdulto] = useState([]);

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

    const handleCheckboxChange = (type, id) => {
        setCheckboxValues((prevValues) => ({
            ...prevValues,
            [type]: { ...prevValues[type], [id]: !prevValues[type]?.[id] },
        }));


        console.log('Nuevo estado de checkboxValues:', checkboxValues);
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
                        <Form>
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
                                                    <label htmlFor={asesoramiento.nombre} className="custom-checkbox">
                                                        {asesoramiento.nombre}
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
                                                    className="p-2"
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
                                            <div className='d-flex justify-content-center'>
                                                <h1>Motivo Del Reclamo</h1>
                                            </div>

                                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                                                {motivos.map((motivo) => (
                                                    <div
                                                        key={motivo.id}
                                                        className="p-2"
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
                                        </div>
                                    </div>
                                </AccordionComponent>

                                <AccordionComponent buttonText="Estado Del Caso" buttonClassName="fw-bold custom-btn LightLavender mt-3 w-100 py-4 fs-4 m-0">
                                    <div className='container mb-3 p-5' style={{ backgroundColor: window.themeColors.boxColorLightLavender }}>
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                                            {estadosDelCaso.map((estado) => (
                                                <div
                                                    key={estado.id}
                                                    className="p-2"
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
                                </AccordionComponent>
                                <div className='container w-75 d-flex flex-column justify-content-evenly mt-3'>
                                    <input type="submit" value="REGISTRAR CASO" className='btn register btn-lg mb-3'
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
