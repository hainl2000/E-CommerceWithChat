import { Avatar, Box, Divider, FormControl, InputAdornment, TextField, Typography } from "@material-ui/core"
import { useStyles } from "./style"
import SendIcon from '@material-ui/icons/Send';
import { roomListSelector, currentRoomSelector } from '../../Selectors/adminSelector'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState, useRef } from "react";
import { receiveMessage, sentMessage } from "../../Actions/adminActions";
import { socket } from '../../socket'
import { messagesSelector } from "../../Selectors/adminSelector";
import { userIdSelector } from "../../Selectors/uiSelector";

const Inbox = () => {
    const dispatch = useDispatch()
    const bottom = useRef(null)
    const classes = useStyles()
    const rooms = useSelector(roomListSelector)
    const currentRoom = useSelector(currentRoomSelector)
    const messages = useSelector(messagesSelector)
    const id = useSelector(userIdSelector)
    const [text, setText] = useState('')

    const selectRoomHandle = (id) => {

    }

    const sentMessageHandle = () => {
        sentMessage(text, currentRoom.roomId)
        setText('')
    }

    useEffect(() => {
        socket.on('msgSent', data => {
            console.log(data.result)
            dispatch(receiveMessage(data.result))
        })

        socket.on('newMsgReceived', data => {
            dispatch(receiveMessage(data.result))
        })

        return () => {
            socket.off('msgSent')
            socket.off('newMsgReceived')
        }
    }, [socket])

    useEffect(() => {
        bottom.current.scrollIntoView({ behavior: 'smooth' })
    }, [messages])

    return (
        <Box className={classes.inboxContainer}>
            <Box className={classes.inboxList}>
                {rooms.map(room => (
                    <Box  key={room.roomId} className={classes.userCell} onClick={() => selectRoomHandle(room.roomId)}>
                        <Avatar>U</Avatar>
                        <Typography>
                            User
                        </Typography>
                    </Box>
                ))}
            </Box>
            <Box className={classes.inboxWindow}>
                <Box className={classes.textContainer}>
                    {messages.map((item, index) =>
                        <Box key={index} className={item.userSentID === id ? classes.textBubleAdmin : classes.textBubleCustomer}>
                            <Typography>
                                {item.msg}
                            </Typography>
                        </Box>
                    )}
                    <div ref={bottom}/>
                </Box>
                <FormControl className={classes.inboxForm}>
                    <TextField
                        variant='outlined'
                        size='small'
                        value={text}
                        placeholder='...'
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position='end'>
                                    <SendIcon onClick={sentMessageHandle}/>
                                </InputAdornment>
                            )
                        }}
                        onChange={e => setText(e.target.value)}
                        onKeyUp={e => {
                            if (e.key === 'Enter')
                                sentMessageHandle()
                        }}
                    />
                </FormControl>
            </Box>
            <Box className={classes.userInfo}>
                <Box className={classes.avatarContainer}>
                    <Avatar className={classes.avatar}>U</Avatar>
                    <Typography variant="h4">User 1</Typography>
                </Box>
                <Divider variant="middle"/>
            </Box>
        </Box>
    )
}

export default Inbox