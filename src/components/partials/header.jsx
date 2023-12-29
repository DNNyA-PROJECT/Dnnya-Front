import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import DeFLogo from '../../assets/images/defensoria_logo.svg';

function Header() {
  const history = useHistory();
  const defaultUser = {
    username: 'Usuario',
  };

  const [selectedUser, setSelectedUser] = useState(defaultUser);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get('http://localhost:8080/Auth/userinfo', {
          withCredentials: true
        });

        const user = response.data;
        setSelectedUser((u) => ({ ...u, username: user.username }));

     
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUser();
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:8080/Auth/logout', {}, {
        withCredentials: true,
      });

    
      setSelectedUser(defaultUser);

     
      document.cookie = 'user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

   
      history.push('/Iniciar_sesion');
    } catch (error) {
      console.error('Error en el cierre de sesión:', error);
    }
  };

  return (
    <div className='content-fluid d-flex flex-column flex-md-row align-items-center justify-content-around'>
      <div className='text-center'>
        <img src={DeFLogo} className='d-md-none DeFLogo' alt="img" />
        <h5 className='text-first'>Sistema Informático de la Defensoria</h5>
        <h5 className='text-second'>de los Derechos de Niños, Niñas y Adolescentes</h5>
      </div>

      <div className='container-fluid m-0 d-flex align-items-center justify-content-between d-md-none '>
        {selectedUser.username && selectedUser.username !== defaultUser.username ? (
          // Si hay una sesión iniciada, muestra botón de cerrar sesión y perfil
          <ul className='p-0 m-0'>
            <li><Link to="/Perfil"><h3 className='text-link fs-3 m-0 h-100 py-3'>Perfil</h3></Link></li>
            <li><button onClick={handleLogout} className='text-link btn m-0 h-100'><h3>Cerrar Sesión</h3></button></li>
          </ul>
        ) : (
          // Si no hay una sesión iniciada, muestra botón de iniciar sesión
          <li><Link to="/Iniciar_sesion"><h3 className='text-link m-0 h-100 py-3'>Iniciar Sesión</h3></Link></li>
        )}
      </div>

      <div className='d-none d-md-block'>
        <div className="dropdown">
          <button className='user d-flex align-items-center dropdown-toggle' type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <div><h4>{selectedUser.username}</h4></div>
          </button>
          <ul className="dropdown-menu p-0 m-0" style={{ backgroundColor: window.themeColors.footerBackground.bakgroundFColor }}>
            {selectedUser.username && selectedUser.username !== defaultUser.username ? (
              // Si hay una sesión iniciada, muestra botón de cerrar sesión y perfil
              <ul className='p-0 m-0'>
                <li><Link to="/Perfil"><h3 className='text-link fs-3 m-0 h-100 py-3'>Perfil</h3></Link></li>
                <li><button onClick={handleLogout} className='text-link btn m-0 h-100'><h3>Cerrar Sesión</h3></button></li>
              </ul>
            ) : (
              // Si no hay una sesión iniciada, muestra botón de iniciar sesión
              <>
                <li><Link to="/Iniciar_sesion"><h3 className='text-link m-0 h-100 py-3'>Iniciar Sesión</h3></Link></li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
