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
        if (e.key === '0' && inputValue.trim() !== '') {
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
                        <div className='col-3 mb-3 p-0'>
                            <div>
                                {currentState === 'boton' && (
                                    <button
                                        className='btn d-flex flex-row justify-content-between py-3 px-5 bg-white'
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
                                            className="form-control"
                                            placeholder="Nuevo motivo"
                                            value={inputValue}
                                            onChange={(e) => setInputValue(e.target.value)}
                                            onKeyPress={handleInputKeyPress}
                                        />
                                    </div>
                                )}

                                {currentState === 'checkbox' && (
                                    <div>
                                        {motivos.map((motivo, index) => (
                                            <label key={index} className="custom-checkbox">
                                                <input
                                                    type="checkbox"
                                                    className="checkbox"
                                                />
                                                <span className="checkmark"></span>
                                                {motivo}
                                            </label>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FormularioNnya;
