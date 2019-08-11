// import axios from 'axios'

import act from '../main/action-const'
import cfg from '../main/config-const'

export const login = (values) => {
    return obter_usuario(values, `${cfg.API_URL}/user`)
}

export const logout = () => {
    return { type: act.TOKEN_VALIDO, payload: false }
}

export const validarToken = (token) => {
    return dispatch => {
        dispatch({ type: act.TOKEN_VALIDO, payload: true })
        /*
        if (token) {
            axios.post(`${cfg.URL_API}/token`, { token })
                .then(resp => {
                    dispatch({ type: act.TOKEN_VALIDO, payload: resp.data.valido })
                })
                .catch(e => dispatch({ type: act.TOKEN_VALIDO, payload: false }))
        } else {
            dispatch({ type: act.TOKEN_VALIDO, payload: false})

        }
        */
    }
}

function obter_usuario(values, url) {
    return dispatch => (
        dispatch([
            { type: act.USUARIO_CARREGADO, payload: {nome: 'Anonimos'} }
        ])

        /*
        axios.get(url, values)
            .then(resp => {
                dispatch([
                    { type: act.USUARIO_CARREGADO, payload: resp.data }
                ])
            })
            .catch(e => {
                console.log('Erro: ', e)
                
                e.reponse.data.errors.forEach(
                    erro => console.log('Erro: ', erro)
                )
                
            })
        */
    )
}

