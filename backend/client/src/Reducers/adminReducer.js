import { constance as ACTIONS } from '../constance'

const initialState = {
    rooms: [],
    currentRoom: null
}

export const adminReducer = (state = initialState, action) => {
    switch (action.type)
    {
        case ACTIONS.ADMIN_FETCH_ROOMS:
            return {
                ...state,
                rooms: action.rooms
            }

        case ACTIONS.ADMIN_SELECT_ROOM:
            return {
                ...state,
                currentRoom: action.currentRoom
            }

        default: return state
    }
}