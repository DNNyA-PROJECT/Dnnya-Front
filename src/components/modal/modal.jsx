import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function CustomModal({ title, body, show, handleClose, showNavButtons, onNavButtonClick }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <div style={{ backgroundColor: window.themeColors.modalBackgroundColor }}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{body}</Modal.Body>
        <Modal.Footer>
          {showNavButtons && (
            <div className="navigation-buttons p-0 mb-3 container-fluid d-flex justify-content-between ">
              <Button
                variant="primary"
                onClick={() => onNavButtonClick('previous')}
                className='btn register btn-lg'
                style={{
                  backgroundColor: window.themeColors.buttonColor,
                  color: window.themeColors.footerColorText
                }}>
                <i className="bi bi-arrow-left-square-fill"></i>
              </Button>
              <Button
                variant="primary"
                onClick={() => onNavButtonClick('next')}
                className='btn register btn-lg'
                style={{
                  backgroundColor: window.themeColors.buttonColor,
                  color: window.themeColors.footerColorText
                }}>
                 <i className="bi bi-arrow-right-square-fill"></i>
              </Button>
            </div>
          )}

          <div className="save-close-buttons  p-0 container-fluid d-flex justify-content-between ">
            <Button variant="secondary" onClick={handleClose} className='btn register btn-lg'
              style={{
                backgroundColor: window.themeColors.buttonColor,
                color: window.themeColors.footerColorText
              }}>
              Cerrar
            </Button>
            <Button
              onClick={handleClose}
              className='btn register btn-lg'
              style={{
                backgroundColor: window.themeColors.buttonColor,
                color: window.themeColors.footerColorText
              }}>
              Guardar Cambios
            </Button>
          </div>
        </Modal.Footer>
      </div>
    </Modal>
  );
}

export default CustomModal;
