import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { colors } from './assets/styles/theme.js'
import './assets/styles/styles.css'
import './assets/styles/normalize.css'
import Routes from './routes/routes.jsx';



window.themeColors = colors;

function App() {
  return (
   <Routes/>
  )
}

export default App