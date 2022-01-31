import {
    Box,
    FormControl,
    TextField,
    InputAdornment,
    Typography,
    Paper
} from '@material-ui/core'
import { useState, useRef, useEffect } from 'react'
import SendIcon from '@material-ui/icons/Send';
import { useStyles } from '../style';
import { useSelector } from "react-redux";
import { messagesSelector } from '../../../Selectors/userSelector';

const Inbox = () => {
    const classes = useStyles()
    const endText = useRef(null)
    const [endTextEl, setEndTextEl] = useState(null)
    const [text, setText] = useState('')
    const messages = useSelector(messagesSelector)
    const [textList, setTextList] = useState([
        {
            text: 'abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc '
        },
        {
            text: 'abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc '
        },
        {
            text: 'abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc '
        },
        {
            text: 'abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc '
        },
        {
            text: 'abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc '
        },
        {
            text: 'abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc '
        },
        {
            text: 'abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc '
        },
        {
            text: 'abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc '
        },
        {
            text: 'abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc '
        },
        {
            text: 'abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc '
        },
        {
            text: 'abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc '
        },
    ])
    

    useEffect(() => {
        endText.current?.scrollIntoView({ behavior: 'smooth' })
    }, [endTextEl, textList])

    const submitHandle = () => {
        setTextList(textList => [...textList, { text: text }])
        setText('')
    }

    return (
        <Box className={classes.drawer}>
            <Typography variant='h5'>Trợ giúp</Typography>
            <Paper elevation={5} className={classes.textContainer}>
                {messages.map((textItem, index) => {
                    return (
                        <Box key={index} className={index % 2 === 0 ? classes.textBubble_admin : classes.textBubble_customer}>
                            {textItem.text}
                        </Box>
                    )
                })}
                <div ref={el => {endText.current = el; setEndTextEl(el)}}/>
            </Paper>
            <FormControl className={classes.inboxForm}>
                <TextField
                    variant='outlined'
                    size='small'
                    value={text}
                    placeholder='...'
                    onChange={e => setText(e.target.value)}
                    onKeyUp={e => {
                        if (e.key === 'Enter')
                            submitHandle()
                    }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position='end'>
                                <SendIcon
                                    className={classes.sendIcon}
                                    color='primary'
                                    onClick={submitHandle}
                                />
                            </InputAdornment>
                        )
                    }}
                />
            </FormControl>
        </Box>
    )
}

export default Inbox