import { constance as ACTIONS } from "../constance"

const initialState = {
    productsTitle: '',
    viewType: 'products',
    modal: 'login',
    loginError: false,
}

export const uiReducer = (state = initialState, action) => {
    switch (action.type)
    {
        case ACTIONS.UPDATE_PRODUCT_TITLE:
            return {
                ...state,
                productsTitle: action.title
            }

        case ACTIONS.UPDATE_VIEW_TYPE:
            return {
                ...state,
                viewType: action.viewType
            }

        case ACTIONS.UPDATE_NAVBAR_MODAL:
            return {
                ...state,
                modal: action.modal
            }

        case ACTIONS.LOGIN_RESULT:
            return {
                ...state,
                loginError: action.error
            }

        default: return state
    }
}