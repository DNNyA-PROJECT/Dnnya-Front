import React, { useState } from 'react';
import Menu from '../../components/partials/Menu.jsx';
import Header from '../../components/partials/header.jsx';
import Footer from '../../components/partials/footer.jsx';
import ComponentComment from '../../components/componentComment/componentComment.jsx';
import CustomSelect from '../../components/custom/customSelect.jsx';


function entryNotesRegister() {
  const [selectedOption, setSelectedOption] = useState('Pendiente');

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption.value);
  };

  const dynamicOptions = [
    { value: "Pendiente", label: "Pendiente", color: "#fa7330" },
    { value: "Aprobado", label: "Aprobado", color: "#fa7330" },
    { value: "Rechazado", label: "Rechazado", color: "#fa7330" },
    { value: "Cerrado", label: "Cerrado", color: "#fa7330" },
  ];
  return (
    <>
      <div className=' container-fluid row p-0 m-0 ' style={{ backgroundColor: window.themeColors.footerBackground.bakgroundFColor }}>
        <div className='col-md-2 m-0 container-fluid p-0 menubox d-none d-md-block' style={{ backgroundColor: window.themeColors.color }}>
          <Menu />
        </div>

        <div className='container-fluid d-flex align-items-center flex-column col-12 col-md-9'>
          <div className='container-fluid'>
            <h4 className='fs-3 fw-bolder mb-5 d-flex justify-content-center'>
              Registro Notas de Entrada
            </h4>
            <form action="">
              <div className='row'>
                <div className='d-flex justify-content-center'>
                </div>
                <div className='d-flex justify-content-evenly mb-3  row' >
                  <input className='col-2  form-control md' type="number" name="" id="" placeholder='Número de la Nota de Entrada' />
                  <input
                    className='col-2 form-control md'
                    type="date"
                    id="fecha"
                  />
                </div>
                <div className='d-flex justify-content-evenly  row' >
                  <input className='col-2 form-control md' type="text" name="" id="" placeholder='Responsable del Registro' />
                  <input className='col-2 form-control md' type="text" name="" id="" placeholder='Responsable del Seguimiento' />
                </div>
              </div>

              <div className='d-flex mx-5 my-3 justify-content-center'>
                <div className='col-10'>
                  <CustomSelect
                    options={dynamicOptions}
                    defaultValue={dynamicOptions.find((option) => option.value === selectedOption)}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <ComponentComment titulo="Nota de Entrada Comentario" placeholder="Escribe aquí tus comentarios" />
              <div className='d-flex justify-content-center my-3'>
                <button className='btn fs-4 fw-bolder' type='submit' style={{ backgroundColor: window.themeColors.buttonColor, color: window.themeColors.footerColorText }}>ENVIAR</button>
              </div>
            </form>
          </div>
        </div>
      </div>


      <div className='container-fluid p-0 m-0'>
        <Footer />
      </div>
    </>
  )
}

export default entryNotesRegister;
