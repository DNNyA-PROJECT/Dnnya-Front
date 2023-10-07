import React, { useState } from 'react';
import axios from 'axios';
import DFLogo from '../../assets/images/defensoria_logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { colors } from '../../assets/styles/theme.js';
import '../../assets/styles/styles.css';
import '../../assets/styles/normalize.css';
import Footer from '../../components/partials/footer.jsx';

window.themeColors = colors;

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/Auth/login', {
        username: formData.username,
        password: formData.password,
      });

      if (response.status === 200) {
        window.location.href = 'http://localhost:5173';
      } else {
        console.log('Login failed');
      }
    } catch (error) {
      console.error('Network error:', error);
    }
  };

  return (
    <>
      <div className='container-fluid d-flex flex-column justify-content-center align-items-center' style={{ backgroundColor: window.themeColors.footerBackground.bakgroundFColor }}>
        <div className='mb-3'>
          <h1 className='d-flex justify-content-center'>Sistema Informático de</h1>
          <h1>Defensoria de Niños, Niñas y Adolescentes</h1>
        </div>
        <div>
          <img src={DFLogo} alt="Defensoria Logo" className='DFLogo' />
        </div>
        <div className='fw-bolder'><h3>¡Bienvenidos!</h3></div>

        <form onSubmit={handleSubmit}>
          <div className='d-flex align-items-baseline'>
            <input
              type="text"
              className='form-inputs form-control md'
              name='username'
              placeholder='Usuario'
              value={formData.username}
              onChange={handleChange}
              autoComplete="username"
            />
            <div className="password-input-container">
              <div className="password-input-wrapper">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  name='password'
                  onChange={(e) => handleChange(e)}
                  className='form-control md'
                  placeholder="Contraseña"
                  autoComplete="current-password" 
                />
                <i
                  className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`}
                  onClick={togglePasswordVisibility}
                  style={{ cursor: 'pointer' }}
                ></i>
              </div>
            </div>
          </div>
          <div className='d-flex flex-column align-items-center'>
            <button
              type='submit'
              className='btn register btn-lg mb-3'
              style={{ backgroundColor: window.themeColors.buttonColor, color: window.themeColors.footerColorText }}
            >
              Iniciar Sesión
            </button>
            <a href="/Recuperacion_de_Credenciales" className='text-secondary  mb-3'><p>RECUPERAR CREDENCIALES</p></a>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Login;

