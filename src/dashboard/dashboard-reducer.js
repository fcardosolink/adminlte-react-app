import act from '../main/action-const'

const INITIAL_STATE = { vendas: [], cidade_atual: 'br-sp' }

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case act.DASHBOARD_CARREGADO:
            return { ...state, vendas: action.payload.data }
        case act.DASHBOARD_SELECIONA_CIDADE:
            return { ...state, cidade_atual: action.payload }
        default:
            return state
    }
}