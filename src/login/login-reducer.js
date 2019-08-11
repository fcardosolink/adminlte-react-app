import act from '../main/action-const'

const USER_KEY = '__user_key__'

const INITIAL_STATE = {
    usuario: {nome: 'Anonimo'}, ///JSON.parse(localStorage.getItem(USER_KEY)),
    token_valido: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case act.TOKEN_VALIDADO:
            if (action.payLoad) {
                return { ...state, token_valido: true}
            } else {
                localStorage.removeItem(USER_KEY)
                return { ...state, token_valido: false, usuario: null } 
            }
        case act.USUARIO_CARREGADO:
            localStorage.setItem(USER_KEY, JSON.stringify(action.payLoad))
            return { ...state, usuario: action.payLoad, token_valido: true }
        default:
            return state
    }
}


