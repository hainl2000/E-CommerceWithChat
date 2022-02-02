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

        case ACTIONS.RECEIVE_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, action.message]
            }

        case ACTIONS.FETCH_MESSAGES:
            return {
                ...state,
                messages: [...action.data]
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