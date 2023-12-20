import React, { useState, useEffect, useRef } from "react";
import Select from "react-select";

const CustomSelect = ({ options, defaultValue, onChange }) => {
  const [colourStyles, setColourStyles] = useState(getDefaultStyles());
  const menuPortalTargetRef = useRef(null);

  useEffect(() => {
    setColourStyles(getDefaultStyles());
  }, [options]);

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
          padding: "20px ",
          margin: 0,
          ":active": {
            ...styles[":active"],
            backgroundColor: !isDisabled ? isSelected ? data.color : activeColor : undefined,
          },
        };
      },
    };
  }

  return (
    <div ref={menuPortalTargetRef}>
      <Select
        defaultValue={defaultValue}
        options={options}
        styles={colourStyles}
        onChange={onChange}
        menuPortalTarget={menuPortalTargetRef.current}
      />
    </div>
  );
};


export default CustomSelect;
