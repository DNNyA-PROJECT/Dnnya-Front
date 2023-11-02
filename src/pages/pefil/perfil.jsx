import React from "react";
import Footer from "../../components/partials/footer";
import AccordionComponent from "../../components/AccordionComponent/AccordionComponent";

function perfil() {
    return (
        <>
            <div className=' container-fluid row p-0 m-0 ' style={{ backgroundColor: window.themeColors.footerBackground.bakgroundFColor }}>

                <div className='container-fluid d-flex flex-column py-3 m-0 p-0'>
                    <h3 className="fs-3 d-flex justify-content-center">Mi Perfil</h3>
                    <form action="">
                        <div className="container py-5" style={{ backgroundColor: window.themeColors.footerBackground.bakgroundFColor }}>
                            <div className="d-flex flex-wrap py-5  container-fluid justify-content-center" style={{ backgroundColor: window.themeColors.boxColorBluSky }}>
                                <div className="col-3">
                                    <input type="text" name="" className="form-control md mb-3" id="" placeholder="Nombre Completo" />
                                    <input type="text" name="" className="form-control md mb-3 " id="" placeholder="Género" />
                                </div>
                                <div className="col-3">
                                    <input type="text" name="" className="form-control md mb-3" id="" placeholder="Fecha de Nacimiento" />
                                    <input type="text" name="" className="form-control md mb-3" id="" placeholder="Estado Civil" />
                                </div>
                            </div>
                            <h3 className="d-flex py-3 justify-content-center">Infromación de Contacto</h3>
                            <div className="d-flex flex-column container-fluid py-5" style={{ backgroundColor: window.themeColors.boxColorBluSky }}>
                                <div className="flex-wrap  row d-flex justify-content-center">
                                    <div className="col-3">
                                        <input type="text" name="" id="" className="form-control md mb-3" placeholder="Direccion Actual" />
                                    </div>
                                    <div className="col-3">
                                        <input type="number" name="" id="" className="form-control md mb-3" placeholder="Número de Telefono" />
                                    </div>
                                </div>
                                <div className="col-6 w-50 d-flex container-fluid justify-content-center">
                                    <input type="email" name="" id="" className="form-control w-100 form-control md text-center" placeholder="Correo Electronico" />
                                </div>
                            </div>
                            <h3 className="d-flex py-3 justify-content-center">Contacto de Emergencia</h3>
                            <div className="d-flex flex-column container-fluid py-5" style={{ backgroundColor: window.themeColors.boxColorBluSky }}>
                                <div className="flex-wrap  row d-flex justify-content-center">
                                    <div className="col-3">
                                        <input type="text" name="" id="" className="form-control md mb-3" placeholder="Nombre Completo" />
                                    </div>
                                    <div className="col-3">
                                        <input type="number" name="" id="" className="form-control md mb-3" placeholder="Número de Telefono" />
                                    </div>
                                </div>
                                <div className="col-6 w-50 d-flex container-fluid justify-content-center">
                                    <input type="Text" name="" id="" className="form-control w-100 form-control md text-center" placeholder="Informacion medica" />
                                </div>
                            </div>
                            <h3 className="d-flex py-3 justify-content-center">Informacion Extra</h3>
                            <div>
                                <AccordionComponent buttonText={"Historial Educativo"} buttonClassName=" lightblue custom-btn mt-3 w-100 py-4 fs-4 m-0">
                                    <div className="pb-5 d-flex justify-content-center" style={{ backgroundColor: window.themeColors.boxColorBluSky }}>
                                        <input type="text" name="" id="" className="form-control md w-50" placeholder="Títulos academicos, Instituciones eductativas, Fechas de graduación" />
                                    </div>
                                </AccordionComponent>
                            </div>
                            <div className="py-3 container-fluid d-flex justify-content-end">
                            <button
                                type="submit"
                                className='btn register btn-lg'
                                style={{ backgroundColor: window.themeColors.buttonColor, color: window.themeColors.footerColorText }}
                            >
                              GUARDAR
                            </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>


            <div className='container-fluid p-0 m-0'>
                <Footer />
            </div>
        </>
    )
}

export default perfil