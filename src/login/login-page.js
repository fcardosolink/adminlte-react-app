import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'


import { login } from './login-actions'
import cfg from '../main/config-const'

import { Row, Grid } from '../common/layout'
import { Input } from '../common/form'

class LoginPage extends Component{

    componentDidMount() {
        document.body.classList.remove('skin-blue')
         document.body.classList.remove('sidebar-mini')
        document.body.classList.add('login-page')
    }
    
    componentWillUnmount() {
        document.body.classList.remove('login-page')
        document.body.classList.add('skin-blue')
        document.body.classList.add('sidebar-mini')
    }

    onSubmit(values) {
        const { login } = this.props
        login(values)
    }

    render() {
        const { handleSubmit } = this.props

        return (
        <div className="login-box">
            <div className="login-logo">
                <Link to="/">{cfg.NOME_SISTEMA || 'Nome Sistema'}</Link>
            </div>
            <div className="login-box-body">
                <p className="login-box-msg">Informe usuário e senha</p>

                <form onSubmit={handleSubmit( v => this.onSubmit(v))}>
                    <div className="form-group has-feedback">
                        <Field component={Input} type="email" name="email" placeholder="Email" />
                        <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
                    </div>
                    <div className="form-group has-feedback">
                        <Field component={Input} type="password" name="password" placeholder="Senha" />
                        <span className="glyphicon glyphicon-lock form-control-feedback"></span>
                    </div>
                    <Row>
                        <Grid cols="8">
                            {/*
                            <div className="checkbox icheck">
                                <label>
                                    <input type="checkbox" /> Remember Me
                                </label>
                            </div>
                            */}
                        </Grid>
                        <Grid cols="4">
                            <button type="submit" className="btn btn-primary btn-block btn-flat">Entrar</button>
                        </Grid>
                    </Row>
                </form>

                {/*
                <div className="social-auth-links text-center">
                    <p>- OR -</p>
                    <a href="#" className="btn btn-block btn-social btn-facebook btn-flat"><i className="fa fa-facebook"></i> Sign in using
                        Facebook</a>
                    <a href="#" className="btn btn-block btn-social btn-google btn-flat"><i className="fa fa-google-plus"></i> Sign in using
                        Google+</a>
                </div>
                 /.social-auth-links */}

                <Link to="/">Esqueci minha senha</Link><br />
                {/* <a href="register.html" className="text-center">Register a new membership</a> */}

            </div>
            {/* /.login-box-body */}
        </div>
        )
    }
}

LoginPage = reduxForm({form: 'loginForm'})(LoginPage)
const mapDispatchToProps = (dispatch) => bindActionCreators({ login }, dispatch)
export default connect(null, mapDispatchToProps)(LoginPage)
