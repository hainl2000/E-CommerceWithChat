import { createSelector } from 'reselect'

const getRoomList = state => state.adminReducer.rooms
const getCurrentRoom = state => state.adminReducer.currentRoom

export const roomListSelector = createSelector(
    getRoomList,
    rooms => rooms
)

export const currentRoomSelector = createSelector(
    getCurrentRoom,
    room => room
)