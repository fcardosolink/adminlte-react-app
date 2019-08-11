import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'

import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

import AppOrLogin from './main/app-or-login'
import reducers from './main/reducers'

const store = applyMiddleware(multi, thunk, promise)(createStore)(reducers)
ReactDOM.render( 
    <Provider store={store}>
        <AppOrLogin />
    </Provider>
, document.getElementById('root'))

