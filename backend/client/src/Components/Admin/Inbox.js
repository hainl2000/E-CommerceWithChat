import { Avatar, Box, Divider, FormControl, InputAdornment, TextField, Typography } from "@material-ui/core"
import { useStyles } from "./style"
import SendIcon from '@material-ui/icons/Send';
import { roomListSelector, currentRoomSelector } from '../../Selectors/adminSelector'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from "react";
import { sentMessage } from "../../Actions/adminActions";
import { socket } from '../../socket'

const Inbox = () => {
    const dispatch = useDispatch()
    const classes = useStyles()
    const rooms = useSelector(roomListSelector)
    const currentRoom = useSelector(currentRoomSelector)
    const [text, setText] = useState('')

    const selectRoomHandle = (id) => {

    }

    const sentMessageHandle = () => {
        sentMessage(text, currentRoom.roomId)
        setText('')
    }

    useEffect(() => {
        socket.on('msgSent', data => {
            console.log(data)
        })

        return () => {
            socket.off('msgSent')
        }
    }, [socket])

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
                    {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map(item =>
                        <Box className={classes.textBuble}>
                            <Typography>
                                abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc 
                            </Typography>
                        </Box>
                    )} */}
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