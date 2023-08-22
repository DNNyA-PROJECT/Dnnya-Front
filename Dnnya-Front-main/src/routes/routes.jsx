import {Switch, Route,} from 'react-router-dom';
import Home from '../pages/home/home.jsx'
import Login from '../pages/login/login.jsx'
import Register from '../pages/register/register.jsx'
import select from '../pages/select/select.jsx'
import caseRecord from '../pages/caseRecord/caseRecord.jsx'


function Routes() {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/Iniciar_sesion' component={Login} />
                <Route exact path='/Registro' component={Register} />
                <Route exact path='/select' component={select} />
                <Route exact path='/Registro_De_Caso' component={caseRecord} />
            </Switch>
        </div>
    )
}
export default Routes