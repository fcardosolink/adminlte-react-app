import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../home/home'
import Dashboard from '../dashboard/dashboard-estatico'
import DashboardDinamico from '../dashboard/dashboard-dinamico'
import Modais from '../modais/modais'
import TableSimple from '../common/template/table-simple'

export default props => (

    <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/dashboard' component={Dashboard} />
        <Route exact path='/dashboard-dinamico' component={DashboardDinamico} />
        <Route exact path='/modais' component={Modais} />
        <Route exact path='/table-simple' component={TableSimple} />
        <Redirect from='*' to="/" />
    </Switch>

)