import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from '../pages/home/home.jsx';
import Login from '../pages/login/login.jsx';
import Register from '../pages/register/register.jsx';
import caseRecord from '../pages/caseRecord/caseRecord.jsx';
import LeyII from '../pages/leyes/leyII.jsx';
import LeyIV from '../pages/leyes/leyIV.jsx';
import formSubmission from '../pages/formSubmission/formSubmission.jsx';
import Dash from '../pages/dashBoard/dashBoard.jsx';
import ListUsers from '../pages/listOfUsers/listOfUsers.jsx'
import recoverCredentials from '../pages/recoverCredentials/recoverCredentials.jsx'

function Routes() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/Iniciar_sesion' component={Login} />
          <Route exact path='/Registro' component={Register} />
          <Route exact path='/leyII' component={LeyII} />
          <Route exact path='/leyIV' component={LeyIV} />
          <Route exact path='/Registro_De_Caso' component={caseRecord} />
          <Route exact path='/Envio_de_Formulario' component={formSubmission} />
          <Route exact path='/Dashboard' component={Dash} />
          <Route exact path='/Lista_De_Usuarios' component={ListUsers} />
          <Route exact path='/Recuperacion_de_Credenciales' component={recoverCredentials} />
        </Switch>
      </div>
    </Router>
  );
}

export default Routes;