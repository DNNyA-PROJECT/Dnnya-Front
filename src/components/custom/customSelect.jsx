import React, { useState, useEffect } from "react";
import Select from "react-select";

const CustomSelect = ({ options, defaultValue, onChange }) => {
  const [colourStyles, setColourStyles] = useState(getDefaultStyles());

  useEffect(() => {
    setColourStyles(getDefaultStyles());
  }, [options]); 

  // Colores personalizados
  const hoverColor = "rgba(250, 115, 48, 0.8)";
  const activeColor = "#362b27";

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
          color: isDisabled ? "#a29d9d" : "white",
          cursor: isDisabled ? "not-allowed" : "default",

          ":active": {
            ...styles[":active"],
            backgroundColor: !isDisabled ? isSelected ? data.color : activeColor : undefined,
          },
        };
      },
    };
  }

  return (
    <Select
      defaultValue={defaultValue}
      options={options}
      styles={colourStyles}
      onChange={onChange}
    />
  );
};

export default CustomSelect;
