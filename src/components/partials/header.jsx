import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import DeFLogo from '../../assets/images/defensoria_logo.svg';

function Header() {
  const defaultUser = {
    username: 'Usuario',
  };


  const storedUser = localStorage.getItem('user');
  const [selectedUser, setSelectedUser] = useState(storedUser ? JSON.parse(storedUser) : defaultUser);

  const fetchUser = async () => {
    try {
      const response = await axios.get('http://localhost:8080/Auth/profile');
      const user = response.data;
      setSelectedUser({ username: user.username });
      
      localStorage.setItem('user', JSON.stringify({ username: user.username }));
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);


  return (
    <div className='content-fluid d-flex flex-column flex-md-row align-items-center justify-content-around'>
      <div className='text-center'>
        <img src={DeFLogo} className='d-md-none DeFLogo' alt="img" />
        <h5 className='text-first'>Sistema Informático de la Defensoria</h5>
        <h5 className='text-second'>de los Derechos de Niños, Niñas y Adolescentes</h5>
      </div>

      <div className='container-fluid m-0 d-flex align-items-center justify-content-between d-md-none '>
        <div className=' d-md-none'>
          <button className="btn" style={{ backgroundColor: window.themeColors.buttonColor, color: window.themeColors.footerColorText }}>
            <i className="bi bi-list"></i>
          </button>
        </div>
        <div className=' d-md-none'>
          <div className="dropdown">
            <button className='user d-flex align-items-center dropdown-toggle' type="button" data-bs-toggle="dropdown" aria-expanded="false">
               <i className="bi bi-person-fill"></i>
              <h4>{selectedUser.username}</h4>
            </button>
            <ul className="dropdown-menu" style={{ backgroundColor: window.themeColors.footerBackground.bakgroundFColor }}>
              <li><Link to="/Iniciar_sesion"><h3 className='text-link'>Iniciar Sesión</h3></Link></li>
              <li><Link to="/Registro"><h3 className='text-link'>Registrarse</h3></Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className='d-none d-md-block'>
        <div className="dropdown">
          <button className='user d-flex align-items-center dropdown-toggle' type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <div><h4>{selectedUser.username}</h4></div>
          </button>
          <ul className="dropdown-menu" style={{ backgroundColor: window.themeColors.footerBackground.bakgroundFColor }}>
            <li><Link to="/Iniciar_sesion"><h3 className='text-link'>Iniciar Sesión</h3></Link></li>
            <li><Link to="/Registro"><h3 className='text-link'>Registrarse</h3></Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;

