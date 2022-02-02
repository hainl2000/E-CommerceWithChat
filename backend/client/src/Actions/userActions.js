import { constance as ACTIONS } from "../constance";
import { socket } from "../socket";
import axios from 'axios';
import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken';

export const fetchMessages = () => {
    socket.emit('loadMsg')
}

export const receiveMessagesData = (data) => {
    return {
        type: ACTIONS.FETCH_MESSAGES,
        data
    }
}

export const sentMessage = (text) => {
    socket.emit('sendNewMsg', { role: 1, msg: text })
}

export const receiveMessage = (text) => {
    return {
        type: ACTIONS.RECEIVE_MESSAGE,
        message: text
    }
}

export const login = (email, password) => {
    return dispatch => {
        axios.post('/login', { email: email, password: password }, {withCredentials: true})
        .then(response => {
            console.log(response)
        }).then(() => {
            dispatch({
                type: ACTIONS.LOGIN_RESULT,
                error: false
            })
            dispatch({
                type: ACTIONS.LOGIN
            })
            dispatch(getLoginStatus())
        }).catch(err => {
            dispatch({
                type: ACTIONS.LOGIN_RESULT,
                error: true
            })
        })
    }
}

export const signup = (username, email, password) => {
    return dispatch => {
        axios.post('/signup', { username: username, email: email, password: password }, { withCredentials: true })
        .then(response => {
            console.log(response)
        }).then(() => {
            dispatch({
                type: ACTIONS.LOGIN_RESULT,
                error: false
            })
            dispatch({
                type: ACTIONS.LOGIN
            })
            dispatch(getLoginStatus())
        }).catch(err => {
            dispatch({
                type: ACTIONS.LOGIN_RESULT,
                error: true
            })
        })
    }
}

export const signout = () => {
    return dispatch => {
        axios('user/signout', { withCredentials: true, method: 'POST' })
        .then(response => {
            dispatch({
                type: ACTIONS.LOGOUT
            })
        })
    }
}

export const getLoginStatus = () => {
    return dispatch => {
        const cookie = Cookies.get('userId')
        if(cookie)
        {
            axios.get('/user/getData', { withCredentials: true })
            .then(response => {
                if(response)
                {
                    const token = jwt.verify(response.data.dataUser, process.env.JWT_KEY || 'HAI1012')
                    console.log(token)
                    dispatch({ type: ACTIONS.SET_COOKIE, username: token.userInformation })
                    socket.emit('join')
                }
            })
        }
    }
}