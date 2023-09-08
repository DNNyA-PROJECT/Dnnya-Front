import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/styles.css';
import './assets/styles/normalize.css';
import Routes from './routes/routes.jsx';

function App() {
  return (
    <React.StrictMode>
      <Routes />
    </React.StrictMode>
  );
}

export default App;