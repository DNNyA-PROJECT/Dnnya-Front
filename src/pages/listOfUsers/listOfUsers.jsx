import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../assets/styles/styles.css';
import '../../assets/styles/normalize.css';
import Footer from '../../components/partials/footer.jsx';
import Menu from '../../components/partials/Menu.jsx';
import DataTable from '../../components/dataTable/dataTable.jsx';
import CustomModal from '../../components/modal/modal';
import Searcher from '../../components/searcher/searcher.jsx'

const ButtonFolder = () => {
  const handleFolderClick = () => {
    // Lógica para el botón Folder
  };

  return (
    <button className='folderButton' onClick={handleFolderClick}>
      <i className="bi bi-folder-fill"></i>
    </button>
  );
};

const ButtonCheck = () => {
  const handleCheckClick = () => {
    // Lógica para el botón Check
  };

  return (
    <button className='Check' onClick={handleCheckClick}>
      <i className="bi bi-check-lg"></i>
    </button>
  );
};

const ButtonClose = () => {
  const handleCloseClick = () => {
    // Lógica para el botón Close
  };

  return (
    <button className='Close' onClick={handleCloseClick}>
      <i className="bi bi-x-lg"></i>
    </button>
  );
};

function ListOfUsers() {
    const [showModal, setShowModal] = useState(false);
    const [currentModal, setCurrentModal] = useState(1);

    
    const handleCloseModal = () => {
        setShowModal(false);
    };


    const handleNavButtonClick = (direction) => {
        if (direction === 'previous') {
            setCurrentModal(1);
        } else if (direction === 'next') {
            setCurrentModal(2);
        }
    };

  const [filteredData, setFilteredData] = useState([]);
  const [data, setData] = useState([
    ["Nombre y Apellido", "Información del Usuario", "Fecha de Solicitud", "Fecha de Ingreso", "Dar de Alta /", "Dar Baja"]
  ]);

  const modalBody = currentModal === 1 ? (

    <div>
        <h5>Información Personal</h5>
        <p>Nombre Completo: Alejandro Bianchi</p>
        <p>Email: alebianchi@gmail.com</p>
        <p>Usuario: tubebitofiufiu</p>
        <p>Foto de Perfil</p>
        <h5>Rol</h5>
        <select name="role" id="role">
            <option value="Admin">Administrador</option>
            <option value="User">Usuario</option>
        </select>
        <h5>Permisos</h5>
        No tiene
    </div>

) : (
    <div>
        <h5>Información del contacto</h5>
        <p>Dirección Actual</p>
        <p>Número de Teléfono (fijo o celular)</p>
        <p>Dirección de correo Electrónico</p>
        <h5>Información de Emergencia</h5>
        <p>vacio</p>
        <p>vacio</p>
        <h5>Información del Historial Educativo</h5>
        <p>vacio</p>
    </div>
);

useEffect(() => {
    try {
      const token = localStorage.getItem('token');
      console.log('Token enviado en la solicitud:', token);
  
      axios.get('http://localhost:8080/Auth/usuariosActivos', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => {
        if (response.status === 200) {
          const userData = response.data; 
          const newData = [...data]; 
          userData.forEach(user => {
            const fullName = `${user.nombre} ${user.apellido}`;
            const buttons = [
              <ButtonFolder key="folder" />,
              <ButtonCheck key="check" />,
              <ButtonClose key="close" />,
            ];
            const userRequestDate = user.fechaSolicitud;
            const userEntryDate = user.fechaIngreso;
            newData.push([fullName, buttons, userRequestDate, userEntryDate, ...buttons]);
          });
          setData(newData);
          setFilteredData(newData);
        } else {
          console.error('Error en la solicitud de datos');
        }
      })
      .catch(error => {
        console.error('Error en la solicitud de datos:', error);
      });
    } catch (error) {
      console.error('Error en la solicitud de datos:', error);
    }
  }, []);
  

<<<<<<< HEAD
  const handleSearch = (query) => {
=======
            try {
                const token = localStorage.getItem('token');


                const response = await axios.get('http://localhost:8080/Auth/usuariosSolicitantes', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (response.status === 200) {



                    const userData = response.data; // Datos de usuarios
                    const newData = [...data]; // Copia del estado data


                    userData.forEach(user => {
                        const fullName = `${user.name} ${user.username}`;
                        const buttonsFolder = [
                            <ButtonFolder key="folder" />,
                            
                            
                        ];
                        const buttonsChecks = [
                            <ButtonCheck key="check" />,
                            <ButtonClose key="close" />,
                        ]

                        newData.push([fullName, buttonsFolder, ...buttonsChecks]);
                    });
                    setData(newData);
                    setFilteredData(newData);
                } else {
                    console.error('Error en la solicitud de datos');
                }

            } catch (error) {
                console.error('Error en la solicitud de datos:', error);
            }
        };
        fetchData();
}, []);


const handleSearch = (query) => {
>>>>>>> c4851bea4b087d67679f93a30249e08374525b53
    const filtro = query.toLowerCase().trim();
    if (filtro === '') {
      setFilteredData(data);
    } else {
      const resultados = data.filter((fila) =>
        fila.some((item) => {
          if (typeof item === 'string') {
            return item.toLowerCase().includes(filtro);
          }
          return false;
        })
      );
      setFilteredData(resultados);
    }
  };


  return (
    <>
      <div className='box container-fluid row p-0 ' style={{ backgroundColor: window.themeColors.footerBackground.bakgroundFColor }}>
        <div className='col-md-2 m-0 container-fluid p-0 menubox d-none d-md-block' style={{ backgroundColor: window.themeColors.color }}>
          <Menu />
        </div>
        <div className='container-fluid d-flex flex-column mx-5 p-0 col-md-7 col-lg-8 py-4'>
          <div>
            <h1 className='text-first d-flex justify-content-center'> Listado de Usuarios y Solicitantes </h1>
          </div>
          <div>
            <Searcher data={data} onSearch={handleSearch} />
          </div>
          <div className='container-fluid table-container p-0 m-0' style={{ overflowX: 'auto', overflowY: 'auto', maxHeight: '25vw' }}>
            <DataTable data={filteredData} headerBackgroundColor="#F2A57F" />
            <CustomModal
              title="Título del Modal"
              body={modalBody}
              show={showModal}
              handleClose={handleCloseModal}
              showNavButtons={true}
              onNavButtonClick={handleNavButtonClick}
            />
          </div>
        </div>
      </div>
      <div className='container-fluid p-0 m-0'>
        <Footer />
      </div>
    </>
  );
}

export default ListOfUsers;

