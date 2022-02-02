import io from 'socket.io-client'

export const socket = io.connect('/')
console.log(socket.connected)