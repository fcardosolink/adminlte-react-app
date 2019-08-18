import act from '../main/action-const'

const INITIAL_STATE = { vendas: [], cidade_atual: 'br-sp', ordem_coluna: 'loja', ordem_asc: true }

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {

        case act.DASHBOARD_CARREGADO:
            return { ...state, vendas: action.payload.data }

        case act.DASHBOARD_SELECIONA_CIDADE:
            return { ...state, cidade_atual: action.payload }

        case act.DASHBOARD_ORDENA_CIDADE:
            let ordem = action.payload
            let vendas = state.vendas
            for (let i in state.vendas) {

                if (state.vendas[i]['id'] === state.cidade_atual) {
                    state.vendas[i].lojas.sort( (a,b) => {
                        if (a[ordem.ordem_coluna] > b[ordem.ordem_coluna])
                            return ordem.ordem_asc ? -1 : 1
                        if (a[ordem.ordem_coluna] < b[ordem.ordem_coluna])
                            return ordem.ordem_asc ? 1 : -1
                        return 0
                    })
                    break
                }
            }

            return { ...state, ...action.payload, vendas:  vendas}

        default:
            return state
    }
}