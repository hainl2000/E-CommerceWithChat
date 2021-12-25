import { FormControl, TextField, makeStyles, Button } from '@material-ui/core';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { CurrentRoleSelector } from '../Selector/CommonSelector';

const useStyles = makeStyles(theme => ({
    searchBar: {
        background: '#FFFFFF',
    },
    searchArea: {
        display: 'flex',
    }
}))

const SearchBar = ({placeholder, socket}) => {
    const currentRole = useSelector(CurrentRoleSelector)
    const classes = useStyles()
    const [message, setMessage] = useState('')

    const sendMessage = () => {
        socket.emit('sendNewMsg', {msg: message, role: currentRole})
    }

    return (
        <div className={classes.searchArea}>
            <FormControl fullWidth className={classes.searchBar}>
                <TextField className={classes.searchBar} variant="outlined" placeholder={placeholder} value={message} onChange={e => setMessage(e.target.value)} />
            </FormControl>
            <Button color="primary" variant="contained" onClick={() => sendMessage()}>Search</Button>
        </div>
    )
}

export default SearchBar