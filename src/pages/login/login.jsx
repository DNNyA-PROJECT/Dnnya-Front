import React, { useState } from 'react';
import axios from 'axios';
import DFLogo from '../../assets/images/defensoria_logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { colors } from '../../assets/styles/theme.js';
import '../../assets/styles/styles.css';
import '../../assets/styles/normalize.css';
import Footer from '../../components/partials/footer.jsx';
import { Alert } from 'react-bootstrap';
import Conections from '../../components/conections/conections.jsx'


window.themeColors = colors;

function Login() {
  const [showAlert, setshowAlert] = useState(false);
  const [messageAlert, setmessageAlert] = useState("");
  const [alertType, setalertType] = useState("success"); 
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleResponse = async () => {
    try {
      const response = await Conections.post("/Auth/Login", {
        username: formData.username,
        password: formData.password,
      });
  
      if (response.status === 200) {
        setshowAlert(true);
        setalertType("success");
        setmessageAlert( <div>
          <i className="bi bi-check-circle-fill text-success"></i>
            <n/>  Inicio de sesión exitoso
        </div>);
     //   window.location.href = 'http://localhost:5173';
        return "Éxito";
      }else {
        console.log("Login failed");
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setshowAlert(true);
        setalertType("danger");
        setmessageAlert(<div>
         <i class="bi bi-x-circle-fill"></i>
            <n/>  Credenciales inválidas. Por favor, verifique su email y contraseña.
        </div>);
      } else {
        console.error("Error de red:", error);
        setshowAlert(true);
        setalertType("danger");
        setmessageAlert(
          <div>
         <i class="bi bi-x-circle-fill"></i>
            <n/>  Hubo un error en nuestra parte. Inténtalo de nuevo más tarde.
        </div>);
      }
  
      throw "Error";
    }
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await handleResponse();
      // Realiza acciones adicionales después de que la promesa se resuelva
    } catch (error) {
      console.error("Error en la solicitud:", error);
      // Maneja el error si la promesa es rechazada
    }
  };


  return (
    <>
      <div className='container-fluid d-flex box flex-column justify-content-center align-items-center' style={{ backgroundColor: window.themeColors.footerBackground.bakgroundFColor }}>
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
          {showAlert && (
            <Alert variant={alertType} onClose={() => setshowAlert(false)} dismissible>
              {messageAlert}
            </Alert>
          )}
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Login;
