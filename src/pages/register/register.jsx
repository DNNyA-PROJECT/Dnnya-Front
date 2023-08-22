import React, { useState } from 'react';
import axios from 'axios';
import DFLogo from '../../assets/images/defensoria_logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { colors } from '../../assets/styles/theme.js';
import '../../assets/styles/styles.css';
import '../../assets/styles/normalize.css';
import Footer from '../../components/partials/footer.jsx';
import { Link } from 'react-router-dom';

window.themeColors = colors;

function Register() {
  const [formData, setFormData] = useState({
    Name: '',
    LastName: '',
    UserName: '',
    Password: '',
    RepeatPassword: '',
    Email: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('/register', formData);

      if (response.status === 200) {
        console.log('funciona');

        setFormData({
          Name: '',
          LastName: '',
          UserName: '',
          Password: '',
          RepeatPassword: '',
          Email: '',
        });
      } else {
        console.log('Registration failed');
      }
    } catch (error) {
      console.error('Network error:', error);
    }
  };

  return (
    <>
      <div className='container-fluid d-flex flex-column'
        style={{ backgroundColor: window.themeColors.footerBackground.bakgroundFColor }}>
        <div className='content p-5  d-flex flex-row align-items-center justify-content-between'>
          <div className='DFlogo'>
            <img src={DFLogo} alt="Defensoria Logo" className='DFLogo' />
          </div>
          <div>
            <h1 className='text-first d-flex justify-content-center'>Sistema Informático de</h1>
            <h1 className='text-second'>Defensoria de Niños, Niñas y Adolescentes</h1>
          </div>
          <div className="dropdown" >
            <button className='user d-flex align-items-center dropdown-toggle' type="button" data-bs-toggle="dropdown" aria-expanded="false">
              <i className="bi bi-person-fill user" ></i>
              <div><h4>Usuario</h4></div>
            </button>
            <ul className="dropdown-menu" style={{ backgroundColor: window.themeColors.footerBackground.bakgroundFColor }} >
              <li><Link to="/Login"><h3 className='text-link'>Iniciar Sesión</h3></Link></li>
              <li><Link to="/Register"><h3 className='text-link'>Registrarse</h3></Link></li>
            </ul>
          </div>
        </div>

        <form onSubmit={handleSubmit} className='d-flex flex-column'>
          <div className='box-Form'>
            <div className='use mb-3'>
              <input
                type="text"
                className='form-control md'
                name="Name"
                value={formData.Name}
                onChange={handleChange}
                placeholder='Nombre'
              />
              <input
                type="text"
                className='form-control md'
                name="LastName"
                value={formData.LastName}
                onChange={handleChange}
                placeholder='Apellido'
              />
            </div>
            <div className='use mb-3'>
              <input
                type="text"
                className='form-control md'
                value={formData.UserName}
                onChange={handleChange}
                name="UserName"
                placeholder='Usuario'
              />
              <button className='button-select d-flex align-items-center justify-content-evenly'>
                <h6 >Foto de perfil</h6>
                <i className="bi bi-person-fill select"></i>
              </button>
            </div>
            <div className='use mb-3'>
              <input
                type="email"
                className='form-control bg'
                name="Email"
                value={formData.Email}
                onChange={handleChange}
                placeholder='Correo Electrónico'
              />
            </div>
            <div className='use mb-3'>
              <div className='use mb-3'>
                <input
                  type="password"
                  className='form-control md'
                  name="Password"
                  value={formData.Password}
                  onChange={handleChange}
                  placeholder='Contraseña'
                />
              </div>
              <input
                type="password"
                className='form-control md'
                name="RepeatPassword"
                value={formData.RepeatPassword}
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
          </div>
        </form>
      </div>

      <Footer />
    </>
  )
}

export default Register;
