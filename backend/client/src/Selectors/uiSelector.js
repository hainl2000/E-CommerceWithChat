import { createSelector } from 'reselect'

const getProductTitle = state => state.uiReducer.productsTitle
const getViewType = state => state.uiReducer.viewType
const getModalType = state => state.uiReducer.modal
const getLoginError = state => state.uiReducer.loginError

export const productTitleSelector = createSelector(
    getProductTitle,
    title => title
)

export const viewTypeSelector = createSelector(
    getViewType,
    viewType => viewType
)

export const modalNavberSelector = createSelector(
    getModalType,
    type => type
)

export const loginErrorSelector = createSelector(
    getLoginError,
    error => error
)