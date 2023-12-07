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

    const ButtonCommentary = () => {
        const handleCommentary = () => {

        }
        return (
            <button className='folderButton' onClick={handleCommentary}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-dots-fill" viewBox="0 0 16 16">
                    <path d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                </svg>
            </button>
        );
    }

    const ButtonPDF = () => {
        const handlePDF = () => {

        }
        return (
            <button className='folderButton' onClick={handlePDF}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-filetype-pdf" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM1.6 11.85H0v3.999h.791v-1.342h.803c.287 0 .531-.057.732-.173.203-.117.358-.275.463-.474a1.42 1.42 0 0 0 .161-.677c0-.25-.053-.476-.158-.677a1.176 1.176 0 0 0-.46-.477c-.2-.12-.443-.179-.732-.179Zm.545 1.333a.795.795 0 0 1-.085.38.574.574 0 0 1-.238.241.794.794 0 0 1-.375.082H.788V12.48h.66c.218 0 .389.06.512.181.123.122.185.296.185.522Zm1.217-1.333v3.999h1.46c.401 0 .734-.08.998-.237a1.45 1.45 0 0 0 .595-.689c.13-.3.196-.662.196-1.084 0-.42-.065-.778-.196-1.075a1.426 1.426 0 0 0-.589-.68c-.264-.156-.599-.234-1.005-.234H3.362Zm.791.645h.563c.248 0 .45.05.609.152a.89.89 0 0 1 .354.454c.079.201.118.452.118.753a2.3 2.3 0 0 1-.068.592 1.14 1.14 0 0 1-.196.422.8.8 0 0 1-.334.252 1.298 1.298 0 0 1-.483.082h-.563v-2.707Zm3.743 1.763v1.591h-.79V11.85h2.548v.653H7.896v1.117h1.606v.638H7.896Z" />
                </svg>
            </button>
        );
    }

    const ButtonHistory = () => {
        const handleHistory = () => {

        }
        return (
            <button className='folderButton' onClick={handleHistory}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clock-history" viewBox="0 0 16 16">
                    <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z" />
                    <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z" />
                    <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z" />
                </svg>
            </button>
        );
    }

    const customData = [
        ["Comentario", "Responsable", "NNyA", "Fecha de alta", "Archivos", "Modificaciones", " "],
        [<ButtonCommentary />, "Fabricio Saucedo", "Soynara Frost", "17/08/23", <ButtonPDF />, <ButtonHistory />, " "],
        [<ButtonCommentary />, "Joel Ramos", "Soynara Frost", "17/07/23", <ButtonPDF />, <ButtonHistory />, " "]
    ]
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
                                <div className='container-fluid d-flex justify-content-center fs-3 fw-900 w-100' style={{ backgroundColor: window.themeColors.boxColorGreen }}>
                                    Registro de intervención
                                </div>

                                <div className='container-fluid'>
                                    <div className='row d-flex px-5'>
                                        <div className='col-5 py-3'>
                                            <input type="Text" name="" id="" placeholder='Nro. Identificador del Caso: 540' className='form-control md mb-3' />
                                            <input type="Text" name="" placeholder='Nro Del Expediente: 2540' id="" className='form-control md' />
                                        </div>

                                        <div className='col-5 py-3'>
                                            <input type="Date" name="" id="" className='form-control md mb-3' />
                                            <input type="Text" placeholder='Nro. Derivación: 5243'  name="" id="" className='form-control md' />
                                        </div>
                                    </div>
                                </div>

                                <div className='container-fluid d-flex justify-content-center fs-3 fw-900 w-100' style={{ backgroundColor: window.themeColors.boxColorGreen }}>
                                    Responsable del registro
                                </div>

                                <div className='row d-flex px-5'>
                                    <div className='col-5 py-3'>
                                        <input type="text" placeholder='Alejandro Bianchi' name="" id="" className='form-control md' />
                                    </div>

                                    <div className='col-5 py-3'>
                                        <input type="text" placeholder='Psicosocial' name="" id="" className='form-control md' />
                                    </div>
                                </div>

                                <div className='container-fluid d-flex justify-content-center fs-3 fw-900 w-100' style={{ backgroundColor: window.themeColors.boxColorGreen }}>
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

                                <div className='container-fluid d-flex justify-content-center fs-3 fw-900 w-100' style={{ backgroundColor: window.themeColors.boxColorLightLavender }}>
                                    Responsable del Seguimiento
                                </div>

                                <div className='row d-flex px-5'>
                                    <div className='col-5 py-3'>
                                        <input type="text" name="" placeholder='Profesional: Tomas Rack' id="" className='form-control md' />
                                    </div>

                                    <div className='col-5 py-3'>
                                        <input type="text" name="" placeholder='Área: Juridica' id="" className='form-control md' />
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
                                <div className='container-fluid d-flex justify-content-center fs-3 fw-900 w-100' style={{ backgroundColor: window.themeColors.boxColorLightLavender }}>
                                    Estado el Caso
                                </div>

                                <div className='row d-flex px-5 py-3'>
                                    <div className='col-5'>
                                        <input type="text" name="" placeholder='Grave Con Seguimiento' id="" className='form-control md' />
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

                                <div className='container-fluid d-flex justify-content-center fs-3 fw-900 w-100' style={{ backgroundColor: window.themeColors.boxColorLightLavender }}>
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
                                <div className='container-fluid d-flex justify-content-center fs-3 fw-900 w-100' style={{ backgroundColor: window.themeColors.boxnewColor }}>
                                    Últimos Seguimientos
                                </div>
                                <ComponentComment titulo="Últimos Comentarios" placeholder="Escribe aquí tus comentarios" />
                                <div className='container w-75 mt-5'>
                                    <DataTable data={customData} headerBackgroundColor="#F2A57F" />
                                </div>

                            </div>
                        </AccordionComponent>
                        <AccordionComponent buttonText="Detalles de Registro e Identificación del Caso" buttonClassName="w-100 fs-3 fw-bold align-items-center justify-content-center d-flex">
                        </AccordionComponent>
                        <AccordionComponent buttonText="Seguimiento del Caso" buttonClassName="w-100 fs-3 fw-bold align-items-center justify-content-center d-flex">
                            <div className='py-5 yellowbg' >
                                <div className='container-fluid d-flex justify-content-center fs-3 fw-bold w-100' style={{ backgroundColor: window.themeColors.footerBackground.bakgroundFColor }}>
                                    Área Jurídica
                                </div>
                                <div className='container  mb-3 py-4 px-5 w-75 mt-5  ' style={{ backgroundColor: window.themeColors.boxColorOrange }}>
                                    <div className='d-flex justify-content-center'>
                                        <div className='fs-3 mb-5'>
                                            Estado Jurídico
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-evenly mb-3  row' >
                                        <select name=""  className='col-5 form-control-md' id="">
                                            <option value="">Judicializado:</option>
                                            <option value="Si"> Si</option>
                                            <option value="No">No</option>
                                        </select>
                                        <input className='col-2  form-control md' type="number" name="" id="" placeholder='Nro exp. Judicial: 500' />
                                    </div>
                                    <div className='d-flex justify-content-evenly  row' >
                                        <input className='col-2 form-control md' type="text" name="" id="" placeholder='Juzgado: Garupa' />
                                        <input className='col-2 form-control md' type="text" name="" id="" placeholder='Caratula: a' />
                                    </div>
                                </div>
                                <ComponentComment titulo="Agregar Comentarios" placeholder="Escribe aquí tus comentarios" />
                                <div className='container w-75 mt-5'>
                                    <DataTable data={customData} headerBackgroundColor="#F2A57F" />
                                </div>
                                <div className='container-fluid d-flex justify-content-center fs-3 fw-bold w-100' style={{ backgroundColor: window.themeColors.footerBackground.bakgroundFColor }}>
                                    Área Psicosocial
                                </div>
                                <ComponentComment titulo="Agregar Comentarios" placeholder="Escribe aquí tus comentarios" />
                                <div className='container w-75 mt-5'>
                                    <DataTable data={customData} headerBackgroundColor="#F2A57F" />
                                </div>
                                <div className='container-fluid d-flex justify-content-center fs-3 fw-bold w-100' style={{ backgroundColor: window.themeColors.footerBackground.bakgroundFColor }}>
                                    Supervisor
                                </div>
                                <ComponentComment titulo="Agregar Comentarios" placeholder="Escribe aquí tus comentarios" />
                                <div className='container w-75 mt-5'>
                                    <DataTable data={customData} headerBackgroundColor="#F2A57F" />
                                </div>
                            </div>
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
