import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Dashboard from '../dashboard/dashboard-estatico'
import DashboardDinamico from '../dashboard/dashboard-dinamico'
import TableSimple from '../common/template/table-simple'

export default props => (

    <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route exact path='/dashboard' component={Dashboard} />
        <Route exact path='/dashboard-dinamico' component={DashboardDinamico} />
        <Route exact path='/table-simple' component={TableSimple} />
        <Redirect from='*' to="/" />
    </Switch>

)