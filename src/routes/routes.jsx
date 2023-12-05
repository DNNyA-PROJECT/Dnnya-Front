import React from 'react';
import { BrowserRouter as Router, Switch, Route,} from 'react-router-dom';
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
import CaseFollowUp from '../pages/CaseFollowUp/CaseFollowUp.jsx'
import Perfil from '../pages/pefil/perfil.jsx'
import SearcherCase from '../pages/searcherCase/searcherCase.jsx'
import entryNotesFinder from '../pages/entryNoteFinder/entryNoteFinder.jsx';
import entryNotesRegister from '../pages/entryNotesRegister/entryNotesRegister.jsx'
import trackEntryNotes from '../pages/trackEntryNotes/trackEntryNotes.jsx'
import RegisterOutputNotes from '../pages/registerOutputNotes/registerOutputNotes.jsx'
import followUpOutputNotes from '../pages/followUpOutputNotes/followUpOutputNotes.jsx'
import searchOutputNotes from '../pages/searchOutputNotes/searchOutputNotes.jsx'

function Routes() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/Iniciar_sesion' component={Login} />
          <Route exact path='/' component={Home} />
          <Route exact path='/Registro' component={Register} />
          <Route exact path='/leyII' component={LeyII} />
          <Route exact path='/leyIV' component={LeyIV} />
          <Route exact path='/Registro_De_Caso' component={caseRecord} />
          <Route exact path='/Envio_de_Formulario' component={formSubmission} />
          <Route exact path='/Dashboard' component={Dash} />
          <Route exact path='/Lista_De_Usuarios' component={ListUsers} />
          <Route exact path='/Recuperacion_de_Credenciales' component={recoverCredentials} />
          <Route exact path='/Seguimiento_de_Caso' component={CaseFollowUp} />
          <Route exact path='/Perfil' component={Perfil} />
          <Route exact path='/Buscador_de_Casos' component={SearcherCase} />
          <Route exact path='/Buscador_de_Notas_de_Entrada' component={entryNotesFinder} />
          <Route exact path='/Registro_de_Notas_de_Entrada' component={entryNotesRegister} />
          <Route exact path='/Seguimiento_de_Notas_de_Entrada' component={trackEntryNotes} />
          <Route exact path='/Registro-de-Notas_de_Salida' component = {RegisterOutputNotes}/>
          <Route exact path='/Seguimiento-de-Notas_de_Salida' component = {followUpOutputNotes}/>
          <Route exact path='/Buscador-de-Notas_de_Salida' component = {searchOutputNotes}/>
        </Switch>
      </div>
    </Router>
  );
}

export default Routes;
