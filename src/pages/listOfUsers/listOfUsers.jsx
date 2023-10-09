import React, { useState } from 'react';
import '../../assets/styles/styles.css';
import '../../assets/styles/normalize.css';
import Footer from '../../components/partials/footer.jsx';
import Menu from '../../components/partials/Menu.jsx';
import DataTable from '../../components/dataTable/dataTable.jsx';
import CustomModal from '../../components/modal/modal';
import Button from 'react-bootstrap/Button';

function ListOfUsers() {
    const [modalShow, setModalShow] = useState(false);
    const [currentModal, setCurrentModal] = useState(1);

    const handleShowModal = (modalNumber) => {
        setModalShow(true);
        setCurrentModal(modalNumber);
    };

    const handleCloseModal = () => {
        setModalShow(false);
    };

    const ButtonWithModal = () => {
        return (
            <button className='folderButton' onClick={() => handleShowModal(2)}>
                <i className="bi bi-folder-fill"></i>
            </button>
        );
    };

    const ButtonClose = () => {
        return (
            <button className='Check'>
                <i class="bi bi-x-lg"></i>
            </button>
        );

    };
    const ButtonCheck = () => {
        return (
            <button className='Check'>
                <i class="bi bi-check-lg"></i>
            </button>
        );

    };

    const modalBody = currentModal === 1 ? (
        <div>
            <h5>.Informacion del contacto</h5>
            <p>Dirección Actual</p>
            <p>Número de Teléfono (fijo o celular)</p>
            <p>Dirección de correo Electrónico </p>
            <h5>.Información de Emergencia</h5>
            <p>vacio</p>
            <p>vacio</p>
            <h5>.Informacion del Historial Educativo</h5>
            <p>vacio</p>
            <div className="d-flex justify-content-between">
                <Button
                    variant="primary"
                    onClick={() => handleShowModal(2)}
                    className='btn register btn-lg'
                    style={{
                        backgroundColor: window.themeColors.buttonColor,
                        color: window.themeColors.footerColorText
                    }}
                >
                    <i className="bi bi-arrow-left-square-fill"></i>
                </Button>
                <Button
                    variant="primary"
                    onClick={handleCloseModal}
                    className='btn register btn-lg'
                    style={{
                        backgroundColor: window.themeColors.buttonColor,
                        color: window.themeColors.footerColorText
                    }}
                >
                    <i className="bi bi-arrow-right-square-fill"></i>
                </Button>
            </div>
        </div>
    ) : (
        <div>
            <div>
                <h5>.Informacion Personal</h5>
                <p>Nombre Completo: Alejandro Bianchi</p>
                <p>Email: alebianchi@gmail.com</p>
                <p>Usuario: tubebitofiufiu</p>
                <p>Foto de Perfil</p>
                <h5>.Rol</h5>
                No Asignado
                <h5>.Permisos</h5>
                No tiene
            </div>
            <div className="d-flex justify-content-between">
                <Button
                    variant="primary"
                    onClick={handleCloseModal}
                    className='btn register btn-lg'
                    style={{
                        backgroundColor: window.themeColors.buttonColor,
                        color: window.themeColors.footerColorText
                    }}
                >
                    <i className="bi bi-arrow-left-square-fill"></i>
                </Button>
                <Button
                    variant="primary"
                    onClick={() => handleShowModal(1)}
                    className='btn register btn-lg'
                    style={{
                        backgroundColor: window.themeColors.buttonColor,
                        color: window.themeColors.footerColorText
                    }}
                >
                    <i className="bi bi-arrow-right-square-fill"></i>
                </Button>
            </div>
        </div>
    );

    const customData = [
        ["Nombre y Apellido", "Información del Solicitante", "Fecha de Solicitud", "Dar de Alta / Baja"],
        ["Alejandro Bianchi", <ButtonWithModal />, "29/08/23", <ButtonCheck />],
        ["Alejandro Bianchi", <ButtonWithModal />, "29/08/23", <ButtonCheck />],
        ["Alejandro Bianchi", <ButtonWithModal />, "29/08/23", <ButtonCheck />],
        ["Alejandro Bianchi", <ButtonWithModal />, "29/08/23", <ButtonCheck />],
        ["Alejandro Bianchi", <ButtonWithModal />, "29/08/23", <ButtonCheck />],
        ["Alejandro Bianchi", <ButtonWithModal />, "29/08/23", <ButtonCheck />],
        ["Alejandro Bianchi", <ButtonWithModal />, "29/08/23", <ButtonCheck />],
        ["Alejandro Bianchi", <ButtonWithModal />, "29/08/23", <ButtonCheck />],
        ["Alejandro Bianchi", <ButtonWithModal />, "29/08/23", <ButtonCheck />],
    ];

    const modalTitle = currentModal === 1 ? "Informacion del Usuario" : "Informacion del Usuario";

    return (
        <>
            <div className='box container-fluid row p-0 ' style={{ backgroundColor: window.themeColors.footerBackground.bakgroundFColor }}>
                <div className='col-md-2 m-0 container-fluid p-0 menubox d-none d-md-block' style={{ backgroundColor: window.themeColors.color }}>
                    <Menu />
                </div>
                <div className='container-fluid d-flex flex-column m-0 p-0 col-9'>
                    <div>
                        <h1 className='text-first d-flex justify-content-center'> Listado de Usuarios y Solicitantes </h1>
                    </div>
                    <div className='container-fluid table-container p-0 m-0' style={{ overflowX: 'auto', overflowY: 'auto', maxHeight: '30vw' }}>
                        <DataTable data={customData} headerBackgroundColor="#F2A57F" />
                        <CustomModal
                            title={modalTitle}
                            show={modalShow}
                            handleClose={handleCloseModal}
                            body={modalBody}
                        />
                    </div>
                </div>
            </div>
            <div className='container-fluid p-0 m-0'>
                <Footer />
            </div>
        </>
    )
}

export default ListOfUsers;
