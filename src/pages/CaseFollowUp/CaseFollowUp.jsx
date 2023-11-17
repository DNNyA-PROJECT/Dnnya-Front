import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { colors } from '../../assets/styles/theme.js';
import '../../assets/styles/styles.css';
import '../../assets/styles/normalize.css';
import Menu from '../../components/partials/Menu.jsx';
import Footer from '../../components/partials/footer.jsx';
import AccordionComponent from '../../components/AccordionComponent/AccordionComponent.jsx';
import CustomModal from '../../components/modal/modal';
import DataTable from '../../components/dataTable/dataTable.jsx';
import ComponentComment from '../../components/componentComment/componentComment.jsx';

window.themeColors = colors;

const CaseFollowUp = () => {
    return (
        <div>
            <div className=' container-fluid row p-0 m-0 ' style={{ backgroundColor: window.themeColors.footerBackground.bakgroundFColor }}>

                <div className='col-md-2 m-0 container-fluid p-0 menubox d-none d-md-block' style={{ backgroundColor: window.themeColors.color }}>
                    <Menu />
                </div>

                <div className='container-fluid d-flex flex-column col-lg-10 m-0 p-0 col-md-6 '>
                    <div className='py-3 d-flex fs-3 justify-content-center fw-bold'>
                        Seguimiento del Caso Secciones y sub-secciones:
                    </div>
                    <div className='container px-5 py-3' style={{ backgroundColor: window.themeColors.boxBorder }}>
                        <AccordionComponent buttonText="Información Situación Actual del Caso" buttonClassName="w-100 fs-3 fw-bold align-items-center justify-content-center d-flex">
                            <div className='py-2 yellowbg' >
                                <div className='container-fluid d-flex justify-content-center fs-3 fw-ligth w-100' style={{ backgroundColor: window.themeColors.boxColorGreen }}>
                                    Registro de intervención
                                </div>

                                <div className='container-fluid'>
                                    <div className='row d-flex px-5'>
                                        <div className='col-5 py-3'>
                                            <input type="text" name="" id="" className='form-control md mb-3' />
                                            <input type="text" name="" id="" className='form-control md' />
                                        </div>

                                        <div className='col-5 py-3'>
                                            <input type="text" name="" id="" className='form-control md mb-3' />
                                            <input type="text" name="" id="" className='form-control md' />
                                        </div>
                                    </div>
                                </div>

                                <div className='container-fluid d-flex justify-content-center fs-3 fw-ligth w-100' style={{ backgroundColor: window.themeColors.boxColorGreen }}>
                                    Responsable del registro
                                </div>

                                <div className='row d-flex px-5'>
                                    <div className='col-5 py-3'>
                                        <input type="text" name="" id="" className='form-control md' />
                                    </div>

                                    <div className='col-5 py-3'>
                                        <input type="text" name="" id="" className='form-control md' />
                                    </div>
                                </div>

                                <div className='container-fluid d-flex justify-content-center fs-3 fw-ligth w-100' style={{ backgroundColor: window.themeColors.boxColorGreen }}>
                                    Tipo de Caso
                                </div>
                                <div className='row px-5'>
                                    <div className='col-3 py-3'>
                                        <div className='col-3 w-100 mb-3 py-3 text-center caso-individual'>
                                            CASO INDIVIDUAL
                                        </div>

                                    </div>
                                    <div className='col-3 py-3'>
                                        <div className='col-3 w-100 mb-3 py-3 text-center caso-grupal'>
                                            CASO GRUPAL
                                        </div>
                                    </div>
                                </div>

                                <div className='container-fluid d-flex justify-content-center fs-3 fw-ligth w-100' style={{ backgroundColor: window.themeColors.boxColorLightLavender }}>
                                    Responsable del Seguimiento
                                </div>

                                <div className='row d-flex px-5'>
                                    <div className='col-5 py-3'>
                                        <input type="text" name="" id="" className='form-control md' />
                                    </div>

                                    <div className='col-5 py-3'>
                                        <input type="text" name="" id="" className='form-control md' />
                                    </div>

                                    <div className='col-1 d-flex align-items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-square" viewBox="0 0 16 16">
                                            <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z" />
                                            <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clock-history" viewBox="0 0 16 16">
                                            <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z" />
                                            <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z" />
                                            <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className='container-fluid d-flex justify-content-center fs-3 fw-ligth w-100' style={{ backgroundColor: window.themeColors.boxColorLightLavender }}>
                                    Estado el Caso
                                </div>

                                <div className='row d-flex px-5 py-3'>
                                    <div className='col-5'>
                                        <input type="text" name="" id="" className='form-control md' />
                                    </div>

                                    <div className='col-5 d-flex align-items-center fs-5'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="16" fill="currentColor" className="bi bi-check2-square" viewBox="0 0 16 16">
                                            <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z" />
                                            <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="16" fill="currentColor" className="bi bi-clock-history" viewBox="0 0 16 16">
                                            <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z" />
                                            <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z" />
                                            <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z" />
                                        </svg>
                                    </div>
                                </div>

                                <div className='container-fluid d-flex justify-content-center fs-3 fw-ligth w-100' style={{ backgroundColor: window.themeColors.boxColorLightLavender }}>
                                    Plazo de Seguimiento
                                </div>
                                <div className='row d-flex px-5'>
                                    <div className='col-5 py-3'>
                                        desde
                                        <input type="date" name="" id="" className='form-control md' />
                                    </div>

                                    <div className='col-3 py-3'>
                                        hasta
                                        <input type="date" name="" id="" className='form-control md' />
                                    </div>
                                </div>
                                <ComponentComment titulo="Agregar Comentarios" placeholder="Escribe aquí tus comentarios" />
                            </div>
                        </AccordionComponent>
                        <AccordionComponent buttonText="Detalles de Registro e Identificación del Caso" buttonClassName="w-100 fs-3 fw-bold align-items-center justify-content-center d-flex">
                        </AccordionComponent>
                        <AccordionComponent buttonText="Seguimiento del Caso" buttonClassName="w-100 fs-3 fw-bold align-items-center justify-content-center d-flex">
                        </AccordionComponent>
                    </div>

                </div>
            </div>

            <div className='container-fluid p-0 m-0'>
                <Footer />
            </div>
        </div>
    );
};

export default CaseFollowUp;
