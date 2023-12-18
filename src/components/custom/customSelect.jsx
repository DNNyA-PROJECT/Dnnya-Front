import React, { useState, useEffect } from "react";
import Select from "react-select";

const CustomSelect = ({ options, defaultValue, onChange }) => {
  const [colourStyles, setColourStyles] = useState(getDefaultStyles());

  useEffect(() => {
    setColourStyles(getDefaultStyles());
  }, [options]); // Actualizar estilos cuando cambian las opciones

  const dot = (color = "transparent") => ({
    alignItems: "center",
    display: "flex",
  });

  // Colores personalizados
  const hoverColor = "rgba(250, 115, 48, 0.8)";
  const activeColor = "rgba(74, 19, 237, 0.8)";

  // Función para obtener estilos por defecto
  function getDefaultStyles() {
    return {
      control: (styles) => ({ ...styles, backgroundColor: "white" }),
      option: (styles, { data, isDisabled, isFocused, isSelected }) => {
        return {
          ...styles,
          backgroundColor: isDisabled
            ? undefined
            : isSelected
            ? data.color
            : isFocused
            ? hoverColor
            : "#a29d9d",
          color: "#ffffff"
            ? "#ffffff"
            : isSelected
            ? isSelected
              ? "white"
              : "white"
            : data.color,
          cursor: isDisabled ? "not-allowed" : "default",
    
          ":active": {
            ...styles[":active"],
            backgroundColor: !isDisabled
              ? isSelected
                ? data.color
                : activeColor
              : undefined,
          },
        };
      },
      input: (styles) => ({ ...styles, ...dot() }),
      placeholder: (styles) => ({ ...styles, ...dot("#ccc") }),
      singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color) }),
    };
  }

  return (
    <Select
      defaultValue={defaultValue}
      options={options}
      styles={colourStyles}
      onChange={onChange} // Este es el evento onChange personalizado
    />
  );
};

export default CustomSelect;
