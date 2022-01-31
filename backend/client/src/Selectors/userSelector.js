import { createSelector } from 'reselect'

const getMessages = state => state.userReducer.messages
const getLoginStatus = state => state.userReducer.login

export const messagesSelector = createSelector(
    getMessages,
    messages => messages
)

export const loginStatusSelector = createSelector(
    getLoginStatus,
    status => status
)