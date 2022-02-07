import { constance as ACTIONS } from '../constance'
import axios from 'axios'
import { socket } from '../socket'

export const fetchRooms = () => {
    return dispatch => {
        axios.get('/room/getRoomList', { withCredentials: true })
        .then(response => {
            dispatch({
                type: ACTIONS.ADMIN_FETCH_ROOMS,
                rooms: response.data.roomList
            })
            return response.data.roomList
        }).then(result => {
            dispatch({
                type: ACTIONS.ADMIN_SELECT_ROOM,
                currentRoom: result[0]
            })
        }).catch(() => {})
    }
}

export const selectRoom = (id) => {
    return dispatch => {
        axios.get('/room/getMessage', { withCredentials: true })
        .then(response => {
            dispatch({
                type: ACTIONS.ADMIN_SELECT_ROOM,
                currentRoom: response.data.room
            })
        })
    }
}

export const sentMessage = (text, roomId) => {
    socket.emit('sendNewMsg', { role: 0, msg: text, roomId })
}

export const createProduct = (product) => {
    axios.post('/admin/product/create', product, { withCredentials: true })
    .then(response => console.log(response))
}