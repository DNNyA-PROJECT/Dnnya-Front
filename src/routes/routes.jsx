import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../pages/home/home.jsx';
import Login from '../pages/login/login.jsx';
import Register from '../pages/register/register.jsx';
import Select from '../pages/select/select.jsx';
import caseRecord from '../pages/caseRecord/caseRecord.jsx';
import LeyII from '../pages/Leyes/leyII.jsx';
import LeyIV from '../pages/Leyes/leyIV.jsx';
import formSubmission from '../pages/formSubmission/formSubmission.jsx';
import Dash from '../pages/dashBoard/dashBoard.jsx';

function Routes() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/Iniciar_sesion' component={Login} />
          <Route exact path='/Registro' component={Register} />
          <Route exact path='/select' component={Select} />
          <Route exact path='/leyII' component={LeyII} />
          <Route exact path='/leyIV' component={LeyIV} />
          <Route exact path='/Registro_De_Caso' component={caseRecord} />
          <Route exact path='/Envio_de_Formulario' component={formSubmission} />
          <Route exact path='/Dashboard' component={Dash} />
        </Switch>
      </div>
    </Router>
  );
}

export default Routes;