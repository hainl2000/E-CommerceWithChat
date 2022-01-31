import { constance as ACTIONS } from "../constance";
import { socket } from "../socket";
import axios from 'axios'

// export const fetchMessages = () => {
//     return dispatch => {

//     }
// }

// export const sentMessage = (text) => {
//     socket.emit('sendNewMsg', {  })
// }

export const login = (email, password) => {
    return dispatch => {
        axios.post('http://localhost:8000/login', { email: email, password: password })
        .then(response => {
            console.log(response)
            return response
        }).then(() => {
            dispatch({
                type: ACTIONS.LOGIN_RESULT,
                error: false
            })
            dispatch({
                type: ACTIONS.LOGIN
            })
        }).catch(err => {
            dispatch({
                type: ACTIONS.LOGIN_RESULT,
                error: true
            })
        })
    }
}