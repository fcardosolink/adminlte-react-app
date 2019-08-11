import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import LoginReducer from '../login/login-reducer'
import DashboardReducer from '../dashboard/dashboard-reducer'

const rootReducer = combineReducers({
    login: LoginReducer,
    form: formReducer,
    dashboard: DashboardReducer,
})

export default rootReducer