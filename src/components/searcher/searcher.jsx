import React, { useState } from 'react';

const Buscador = ({ data, onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setQuery(inputValue);
    onSearch(inputValue);
  };
};

export default Buscador;

