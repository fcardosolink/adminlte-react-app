import axios from 'axios'
import cfg from '../main/config-const'
import act from '../main/action-const'

export const obterVendas = () => {
    return dispatch => {
        axios.get(`${cfg.API_URL}/vendas`)
        .then(resp => {
            dispatch({ type: act.DASHBOARD_CARREGADO, payload: resp })
        })
    }
}

export const selecionarCidade = (cidade) => {
     return {
        type: act.DASHBOARD_SELECIONA_CIDADE,
        payload: cidade
    }
}


export const ordenarCidade = (ordem_coluna, ordem_asc) => {
    return {
        type: act.DASHBOARD_ORDENA_CIDADE,
        payload: { ordem_coluna, ordem_asc }
    }
}