import {
    Container,
    Modal,
    Typography,
    FormControl,
    TextField,
    Button,
    InputAdornment
} from '@material-ui/core'
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { useState } from 'react';
import { useStyles } from './style';
import { useDispatch } from 'react-redux';
import { updateLoginError, updateNavbarModal } from '../../Actions/UiActions';

const SignUpModal = ({open, closeHandle}) => {
    const classes = useStyles()
    const [visible, setVisible] = useState(false)
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const passwordVisibleHandle = () => {
        setVisible(visible => !visible)
    }

    const switchModalHandle = () => {
        dispatch(updateNavbarModal('login'))
        dispatch(updateLoginError(false))
    }

    const closeModalHandle = () => {
        setEmail('')
        setPassword('')
        closeHandle()
    }

    const submitHandle = () => {
        closeHandle()
    }
    
    return (
        <Modal
            open={open}
            onClose={closeModalHandle}
        >
            <Container className={classes.modalContainer}>
                <Typography className={classes.modalTitle} variant='h4'>
                    Đăng ký
                </Typography>
                <FormControl className={classes.form}>
                    <TextField
                        placeholder='email'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position='start'>
                                    <PersonIcon />
                                </InputAdornment>
                            )
                        }}
                    />
                    <TextField
                        type={visible ? 'text' : 'password'}
                        placeholder='password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        onKeyUp={e => {
                            if (e.key === 'Enter')
                            submitHandle()
                        }}
                        InputProps={
                            {
                                startAdornment: (
                                    <InputAdornment position='start'>
                                        <LockIcon />
                                    </InputAdornment>
                                ),
                                endAdornment: (
                                    <InputAdornment position='end'>
                                        {visible ?
                                        <VisibilityIcon className={classes.eyeIcon} onClick={passwordVisibleHandle}/> :
                                        <VisibilityOffIcon className={classes.eyeIcon} onClick={passwordVisibleHandle}/>}
                                    </InputAdornment>
                                )
                            }
                        }
                    />
                </FormControl>
                <Button className={classes.loginButton} variant='contained' onClick={submitHandle}>Đăng ký</Button>
                <Typography className={classes.switchModalLink} onClick={switchModalHandle}>
                    Quay lại
                </Typography>
            </Container>
        </Modal>
    )
}

export default SignUpModal