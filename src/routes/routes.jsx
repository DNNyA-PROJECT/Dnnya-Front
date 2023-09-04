import {Switch, Route,} from 'react-router-dom';
import Home from '../pages/home/home.jsx'
import Login from '../pages/login/login.jsx'
import Register from '../pages/register/register.jsx'
import select from '../pages/select/select.jsx'
import caseRecord from '../pages/caseRecord/caseRecord.jsx'
import leyII from '../pages/Leyes/leyII.jsx'
import leyIV from '../pages/Leyes/leyIV.jsx'

function Routes() {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/Iniciar_sesion' component={Login} />
                <Route exact path='/Registro' component={Register} />
                <Route exact path='/select' component={select} />
                <Route exact path='/leyII' component={leyII} />
                <Route exact path='/leyIV' component={leyIV} />
                <Route exact path='/Registro_De_Caso' component={caseRecord} />
            </Switch>
        </div>
    )
}
export default Routes