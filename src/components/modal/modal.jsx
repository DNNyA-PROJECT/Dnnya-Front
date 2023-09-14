import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Modal as BootstrapModal, Button } from 'react-bootstrap';

const Modal = ({ title, content }) => {
  const [show, setShow] = useState(false);

  const openModal = () => {
    setShow(true);
  };

  const closeModal = () => {
    setShow(false);
  };

  const modal = (
    <BootstrapModal show={show} onHide={closeModal}>
      <BootstrapModal.Header closeButton>
        <BootstrapModal.Title>{title}</BootstrapModal.Title>
      </BootstrapModal.Header>
      <BootstrapModal.Body>{content}</BootstrapModal.Body>
      <BootstrapModal.Footer>
        <Button variant="secondary" onClick={closeModal}>
          Cerrar
        </Button>
        <Button variant="primary">Guardar Cambios</Button>
      </BootstrapModal.Footer>
    </BootstrapModal>
  );

  return {
    openModal,
    modalComponent: modal,
  };
};

export default Modal;