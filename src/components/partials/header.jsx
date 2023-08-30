import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Header() {
  const defaultUser = {
    username: 'Usuario',
  /*   photo: 'photo' */
  };

  const [selectedUser, setSelectedUser] = useState(defaultUser);

  const fetchUser = async (userId) => {
    try {
      const response = await axios.get(`http://localhost:8080/Auth/profile${userId}`);
      const user = response.data;
      setSelectedUser({ username: user.name/* , photo: defaultUser.photo || user.photo */ });
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  };

  useEffect(() => {

  }, []);
  return (
    <>
      <div className='content-fluid d-flex flex-row align-items-center justify-content-between'>
        <div>
          <h1 className='text-first d-flex justify-content-center'>Sistema Informático de</h1>
          <h1 className='text-second'>Defensoria de Niños, Niñas y Adolescentes</h1>
        </div>
        <div className="dropdown">
          <button className='user d-flex align-items-center dropdown-toggle' type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <img src={selectedUser.photo} alt="Usuario" className="user-photo" />
            <div><h4>{selectedUser.name}</h4></div>
          </button>
          <ul className="dropdown-menu" style={{ backgroundColor: window.themeColors.footerBackground.bakgroundFColor }} >
            <li><Link to="/Iniciar_sesion"><h3 className='text-link'>Iniciar Sesión</h3></Link></li>
            <li><Link to="/Registro"><h3 className='text-link'>Registrarse</h3></Link></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Header;