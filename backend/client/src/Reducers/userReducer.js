import { constance as ACTIONS } from '../constance'

const initialState = {
    messages: [],
    login: false
}

export const userReducer = (state = initialState, action) => {
    switch (action.type)
    {
        case ACTIONS.LOGIN:
            return {
                ...state,
                login: true
            }

        case ACTIONS.SET_COOKIE:
            return {
                ...state,
                login: true
            }

        case ACTIONS.LOGOUT:
            return {
                ...state,
                login: false
            }
            
        default: return state
    }
}