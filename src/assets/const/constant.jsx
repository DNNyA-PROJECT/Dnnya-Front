// constantes.js
import { useState } from 'react';
import axios from 'axios';

// URL de la API
export const API_URL = 'http://localhost:8080/';

// Función que crea un initialState dinámico
export function createInitialState(fields) {
  const initialState = {};
  for (const field of fields) {
    initialState[field] = '';
  }
  return initialState;
}

export function useForm(initialState) {
  const [formData, setFormData] = useState(initialState);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await axios.post(API_URL, formData);

      if (response.status === 200) {
        console.log('funciona');
        setFormData(initialState);
      } else {
        console.log('Registration failed');
      }
    } catch (error) {
      console.error('Network error:', error);
    }
  }

  return { formData, handleChange, handleSubmit };
}