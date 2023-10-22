import React, { useState } from 'react';

function FormularioNnya({ onAddNnyaClick }) {
    const [checkboxState, setCheckboxState] = useState({
        Fisic: false,
        Sexual: false,
        revincualation: false,
        Adop: false,
        Abandoned: false,
        Ausent: false,
        State: false,
    });
    const [currentState, setCurrentState] = useState('boton');
    const [inputValue, setInputValue] = useState('');
    const [motivos, setMotivos] = useState([]);

    const handleButtonClick = () => {
        setCurrentState('input');
    }

    const handleInputKeyPress = (e) => {
        if (e.key === 'Enter' && inputValue.trim() !== '') {
            setMotivos([...motivos, inputValue]);
            setInputValue('');
            setCurrentState('checkbox');
        }
    }

    const handleCheckboxChange = (e) => {
        const { id, checked } = e.target;
        setCheckboxState({
            ...checkboxState,
            [id]: checked,
        });
    };

    return (
        <>
            <div className='container-fluid mb-3 p-5' style={{ backgroundColor: window.themeColors.boxColorLightBeige }}>
                <div className='d-flex flex-row align-items-center mb-5  justify-content-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-exclamation-triangle" viewBox="0 0 16 16">
                        <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z" fill='red' />
                        <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z" fill='red' />
                    </svg>
                    <h6 className='p-0 m-0'>Dejar vacío los campos que no se tenga información</h6>
                </div>

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
                        <input className='form-control w-75 text-center py-3' type="text" name="" id="" placeholder='Otra Información del NNyA' />
                    </div>
                </div>
            </div>

            <div className='container mb-3 p-5' style={{ backgroundColor: window.themeColors.boxColorLightBeige }}>
                <div>
                    <div className='d-flex justify-content-center'>
                        <h1>Motivo Del Reclamo</h1>
                    </div>

                    <div className='row d-flex justify-content-evenly'>
                        <div className='col-3 mb-3 py-3' style={{ backgroundColor: window.themeColors.footerColorText }}>
                            <label className="custom-checkbox">
                                Violencia Fisica
                                <input
                                    type="checkbox"
                                    id="Fisic"
                                    className="checkbox"
                                    checked={checkboxState.Fisic}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </div>
                        <div className='col-3 mb-3 py-3' style={{ backgroundColor: window.themeColors.footerColorText }}>
                            <label className="custom-checkbox">
                                Abuso Sexual
                                <input
                                    type="checkbox"
                                    id="Sexual"
                                    className="checkbox"
                                    checked={checkboxState.Sexual}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </div>
                    </div>
                    <div className='row d-flex justify-content-evenly'>
                        <div className='col-3 mb-3 py-3' style={{ backgroundColor: window.themeColors.footerColorText }}>
                            <label className="custom-checkbox">
                                Revinculación
                                <input
                                    type="checkbox"
                                    id="revincualation"
                                    className="checkbox"
                                    checked={checkboxState.revincualation}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </div>
                        <div className='col-3 mb-3 py-3' style={{ backgroundColor: window.themeColors.footerColorText }}>
                            <label className="custom-checkbox">
                                Adoptibilidad
                                <input
                                    type="checkbox"
                                    id="Adop"
                                    className="checkbox"
                                    checked={checkboxState.Adop}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </div>
                    </div>
                    <div className='row d-flex justify-content-evenly'>
                        <div className='col-3 mb-3 py-3' style={{ backgroundColor: window.themeColors.footerColorText }}>
                            <label className="custom-checkbox">
                                Abandono
                                <input
                                    type="checkbox"
                                    id="Abandoned"
                                    className="checkbox"
                                    checked={checkboxState.Abandoned}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </div>
                        <div className='col-3 mb-3 py-3' style={{ backgroundColor: window.themeColors.footerColorText }}>
                            <label className="custom-checkbox">
                                Ausencia a la Escuela
                                <input
                                    type="checkbox"
                                    id="Ausent"
                                    className="checkbox"
                                    checked={checkboxState.Ausent}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </div>
                    </div>
                    <div className='row d-flex justify-content-evenly'>
                        <div className='col-3 mb-3 py-3' style={{ backgroundColor: window.themeColors.footerColorText }}>
                            <label className="custom-checkbox">
                                Estado de Salud
                                <input
                                    type="checkbox"
                                    id="State"
                                    className="checkbox"
                                    checked={checkboxState.State}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </div>

                        <div className='col-3 mb-3 p-0' style={{ backgroundColor: window.themeColors.footerColorText }}>

                            {currentState === 'boton' && (
                                <button
                                    className='btn d-flex flex-row justify-content-evenly py-3 w-100 bg-white'
                                    onClick={handleButtonClick}
                                >
                                    Agregar motivo
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" className="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0z" fill="green" />
                                        <path d="M7.5 4.5a.5.5 0 0 1 1 0v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 0-1z" fill="white" />
                                    </svg>
                                </button>
                            )}

                            {currentState === 'input' && (
                                <div>
                                    <input
                                        type="text"
                                        className="col-2 w-100 form-control md"
                                        placeholder="Nuevo motivo"
                                        value={inputValue}
                                        onChange={(e) => setInputValue(e.target.value)}
                                        onKeyPress={handleInputKeyPress}
                                    />
                                </div>
                            )}

                            {currentState === 'checkbox' && (
                                <div className='mt-3' style={{ backgroundColor: window.themeColors.footerColorText }}>
                                    {motivos.map((motivo, index) => (
                                        <label key={index} className="custom-checkbox mx-2">
                                            {motivo}
                                            <input
                                                type="checkbox"
                                                className="checkbox"
                                            />
                                            <span className="checkmark"></span>
                                        </label>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FormularioNnya;
