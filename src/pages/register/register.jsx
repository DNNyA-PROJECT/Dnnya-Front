import React, { useState } from 'react';
import DFLogo from '../../assets/images/defensoria_logo.svg';
import '../../assets/styles/styles.css';
import '../../assets/styles/normalize.css';
import Footer from '../../components/partials/footer.jsx';
import CustomModal from '../../components/modal/modal';
import Avatar from '../../assets/images/Mesa_de_trabajo_50.png';
import axios from 'axios';

function RegistrationForm() {
  const [modalShow, setModalShow] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);

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
    repeatpassword: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleRepeatPasswordVisibility = () => {
    setShowRepeatPassword(!showRepeatPassword);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (formData.password !== formData.repeatpassword) {
      console.error('Error: Las contraseñas no coinciden');
      return; // Evita enviar el formulario si las contraseñas no coinciden
    }

    try {
      const response = await axios.post('http://localhost:8080/Auth/register', {
        name: formData.name,
        surname: formData.surname,
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
          repeatpassword: '',
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
              autoComplete="username" 
            />

          </div>
          <div className='use mb-3'>
            <div className="password-input-container">
              <div className="password-input-wrapper">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  name='password'
                  onChange={(e) => handleChange(e)}
                  className='form-control md'
                  placeholder="Contraseña"
                  autoComplete="new-password"
                />
                <i
                  className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`}
                  onClick={togglePasswordVisibility}
                  style={{ cursor: 'pointer' }}
                ></i>
              </div>
            </div>
            <div className="password-input-container">
              <div className="password-input-wrapper">
                <input
                  type={showRepeatPassword ? 'text' : 'password'}
                  value={formData.repeatpassword}
                  name='repeatpassword'
                  onChange={(e) => handleChange(e)}
                  className='form-control md'
                  placeholder="Confirmar Contraseña"
                  autoComplete="new-password"
                />
                <i
                  className={`bi ${showRepeatPassword ? 'bi-eye-slash' : 'bi-eye'}`}
                  onClick={toggleRepeatPasswordVisibility}
                  style={{ cursor: 'pointer' }}
                ></i>
              </div>
            </div>
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
