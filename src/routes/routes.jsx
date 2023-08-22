import {Switch, Route,} from 'react-router-dom';
import Home from '../pages/home/home.jsx'
import Login from '../pages/login/login.jsx'
import Register from '../pages/register/register.jsx'
import select from '../pages/select/select.jsx'
function Routes() {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/Login' component={Login} />
                <Route exact path='/Register' component={Register} />
                <Route exact path='/select' component={select} />
            </Switch>
        </div>
    )
}
export default Routes