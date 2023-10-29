import React, { useState, useEffect } from 'react';

function CustomInputButton({ buttonText, inputPlaceholder, selectedCheckboxes, onCustomCheckboxChange, inputValue, onInputValueChange }) {
  const [currentState, setCurrentState] = useState('boton');
  const [motivos, setMotivos] = useState([]);

  useEffect(() => {
    console.log('Selected checkboxes:', selectedCheckboxes);
  }, [selectedCheckboxes]);

  const handleCustomCheckboxChange = (checkboxName) => {
    onCustomCheckboxChange(checkboxName);
  };

  const handleButtonClick = () => {
    setCurrentState('input');
  }

  const handleInputKeyPress = (e) => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      setMotivos([...motivos, inputValue]);
      onInputValueChange(''); 
      setCurrentState('checkbox');
    }
  }

  return (
    <div className="h-100 d-flex align-items-center w-100" style={{ backgroundColor: window.themeColors.footerColorText }}>
      {currentState === 'boton' && (
        <button
          type='button'
          className='btn d-flex flex-row justify-content-evenly align-items-center w-100 py-3 bg-white'
          onClick={handleButtonClick}
        >
          {buttonText}
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" className="bi bi-plus-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0z" fill="green" />
            <path d="M7.5 4.5a.5.5 0 0 1 1 0v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 0-1z" fill="white" />
          </svg>
        </button>
      )}

      {currentState === 'input' && (
        <div>
          <input
            type="text"
            className="w-100 px-5 form-control md"
            placeholder={inputPlaceholder}
            value={inputValue}
            onChange={(e) => onInputValueChange(e.target.value)}
            onKeyPress={handleInputKeyPress}
          />
        </div>
      )}

      {currentState === 'checkbox' && (
        <div>
          {motivos.map((motivo, index) => (
            <label key={index} className="custom-checkbox mx-2">
              {motivo}
              <input
                type="checkbox"
                checked={selectedCheckboxes[motivo] || false}
                onChange={() => handleCustomCheckboxChange(motivo)}
              />
              <span className="checkmark"></span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
}

export default CustomInputButton;
