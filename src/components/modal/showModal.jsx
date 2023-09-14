import React from 'react';
import Modal from '../modal/modal.jsx'; // Asegúrate de que la ruta al archivo Modal.js sea correcta

function ShowModal() {
  const { openModal, modalComponent } = Modal();

  return (
    <div>

      {modalComponent}
    </div>
  );
}

export default ShowModal;
