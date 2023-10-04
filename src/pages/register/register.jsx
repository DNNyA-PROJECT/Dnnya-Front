import React, { useState } from 'react';
import DFLogo from '../../assets/images/defensoria_logo.svg';
import '../../assets/styles/styles.css';
import '../../assets/styles/normalize.css';
import Footer from '../../components/partials/footer.jsx';
import CustomModal from '../../components/modal/modal';
import Avatar from '../../assets/images/Mesa_de_trabajo_50.png'
import axios from 'axios';

function RegistrationForm() {
  const [modalShow, setModalShow] = useState(false);

  const handleShowModal = () => {
    setModalShow(true);
  }
  const handleCloseModal = () => {
    setModalShow(false);
  }
  
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        username: '',
        password: '',
        correo: '',
      });
      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
      };
      const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          const response = await axios.post('http://localhost:8080/Auth/register', {
            name: formData.name,
            surname:formData.surname ,
            username: formData.username,
            password: formData.password,
            correo: formData.correo,
          });
    
          if (response.status === 200) {
            console.log('funciona');
            setFormData({
              name: '',
              surname: '',
              username: '',
              password: '',
              correo: '',
            });
          } else {
            console.log('Registration failed');
          }
        } catch (error) {
          console.error('Network error:', error);
        }
  }
  return (
    <>
      <div className='container-fluid d-flex flex-column m-0' style={{ backgroundColor: window.themeColors.footerBackground.bakgroundFColor }}>
        <div className='content d-flex flex-row align-items-center m-0 justify-content-between pb-3'>
          <div className='DFlogo'>
            <img src={DFLogo} alt="Defensoria Logo" className='DFLogo' />
          </div>
          <div className='m-0'>
            <h1 className='text-first d-flex justify-content-center'>Sistema Informático de</h1>
            <h1 className='text-second'>Defensoria de Niños, Niñas y Adolescentes</h1>
          </div>
        </div>

        <form className='pb-5' onSubmit={(event) => handleSubmit(event)}>
          <div className='use mb-3'>
            <input
              type="text"
              className='form-control md'
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder='Nombre'
            />
            <input
              type="text"
              className='form-control md'
              name="surname"
              value={formData.surname}
              onChange={handleChange}
              placeholder='Apellido'
            />
          </div>
          <div className='use mb-3'>
            <input
              type="text"
              className='form-control md'
              value={formData.username}
              onChange={handleChange}
              name="username"
              placeholder='Usuario'
            />
            <button className='button-select d-flex align-items-center justify-content-evenly' onClick={handleShowModal}>
              <h6>Foto de perfil</h6>
              <i className="bi bi-person-fill select"></i>
            </button>
            <CustomModal
              title="Por Favor Seleccione un Avatar"
              show={modalShow}
              handleClose={handleCloseModal}
              body={
                <div className='d-flex justify-content-around flex-wrap'>
                  <img src={Avatar} alt="Avatar" className='Avatar' />
                  <img src={Avatar} alt="Avatar" className='Avatar' />
                  <img src={Avatar} alt="Avatar" className='Avatar' />
                  <img src={Avatar} alt="Avatar" className='Avatar' />
                  <img src={Avatar} alt="Avatar" className='Avatar' />
                  <img src={Avatar} alt="Avatar" className='Avatar' />
                  <img src={Avatar} alt="Avatar" className='Avatar' />
                  <img src={Avatar} alt="Avatar" className='Avatar' />
                  <img src={Avatar} alt="Avatar" className='Avatar' />
                  <img src={Avatar} alt="Avatar" className='Avatar' />
                </div>
                
              }
            />

          </div>
          <div className='use mb-3'>
            <input
              type="email"
              className='form-control bg'
              name="correo"
              value={formData.correo}
              onChange={handleChange}
              placeholder='Correo Electrónico'
            />
          </div>
          <div className='use mb-3'>
            <input
              type="password"
              className='form-control md'
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder='Contraseña'
            />
            <input
              type="password"
              className='form-control md'
              name="repeatpassword"
              value={formData.repeatpassword}
              onChange={handleChange}
              placeholder='Confirmar Contraseña'
            />
          </div>
          <div className='use'>
            <button
              type="submit"
              className='btn register btn-lg'
              style={{ backgroundColor: window.themeColors.buttonColor, color: window.themeColors.footerColorText }}
            >
              Crear Cuenta
            </button>
            <button type="reset" className='btn btn-outline-danger reset'>Borrar</button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default RegistrationForm;