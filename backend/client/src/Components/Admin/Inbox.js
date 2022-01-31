import { Avatar, Box, Divider, FormControl, InputAdornment, TextField, Typography } from "@material-ui/core"
import { useStyles } from "./style"
import SendIcon from '@material-ui/icons/Send';

const Inbox = () => {
    const classes = useStyles()

    return (
        <Box className={classes.inboxContainer}>
            <Box className={classes.inboxList}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(item => 
                    <Box key={item} className={classes.userCell}>
                        <Avatar>U</Avatar>
                        <Typography>User {item}</Typography>
                    </Box>
                )}
            </Box>
            <Box className={classes.inboxWindow}>
                <Box className={classes.textContainer}>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map(item =>
                        <Box className={classes.textBuble}>
                            <Typography>
                                abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc 
                            </Typography>
                        </Box>
                    )}
                </Box>
                <FormControl className={classes.inboxForm}>
                    <TextField
                        variant='outlined'
                        size='small'
                        placeholder='...'
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position='end'>
                                    <SendIcon/>
                                </InputAdornment>
                            )
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