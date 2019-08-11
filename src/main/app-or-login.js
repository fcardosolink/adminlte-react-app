import React, { Component } from 'react'
import App from './app'
import LoginPage from '../login/login-page'

export default class LoginOrApp extends Component{
    
    componentWillUnmount() {
        document.body.classList.remove('login-page')
        document.body.classList.add('skin-blue')
        document.body.classList.add('sidebar-mini')
    }

    render() {
        if (false) {
            return <LoginPage />
        } else {
            return <App />
        }

    }
}