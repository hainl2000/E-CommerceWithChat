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
import { useDispatch, useSelector } from 'react-redux';
import { updateLoginError, updateNavbarModal } from '../../Actions/UiActions';
import { login } from '../../Actions/UserActions';
import { loginStatusSelector } from '../../Selectors/userSelector';
import { loginErrorSelector } from '../../Selectors/uiSelector';

const LoginModal = ({open, closeHandle}) => {
    const classes = useStyles()
    const [visible, setVisible] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

    const loginStatus = useSelector(loginStatusSelector)
    const errorLogin = useSelector(loginErrorSelector)

    const passwordVisibleHandle = () => {
        setVisible(visible => !visible)
    }

    const switchModalHandle = () => {
        dispatch(updateNavbarModal('singup'))
        dispatch(updateLoginError(false))
    }

    const loginHandle = () => {
        dispatch(login())
    }

    const closeModalHandle = () => {
        setEmail('')
        setPassword('')
        closeHandle()
    }
    
    return (
        <Modal
            open={open}
            onClose={closeModalHandle}
        >
            <Container className={classes.modalContainer}>
                <Typography className={classes.modalTitle} variant='h4'>
                    Đăng nhập
                </Typography>
                <FormControl className={classes.form}>
                    <TextField
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder='email'
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
                        value={password}
                        placeholder='password'
                        onChange={e => setPassword(e.target.value)}
                        onKeyUp={e => {
                            if (e.key === 'Enter')
                                loginHandle()
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
                <Button className={classes.loginButton} variant='contained' onClick={loginHandle}>Đăng nhập</Button>
                {!loginStatus && errorLogin && <Typography className={classes.errorMessage}>
                    Đăng nhập không thành công
                </Typography>}
                <Typography className={classes.switchModalLink} onClick={switchModalHandle}>
                    Tạo tài khoản
                </Typography>
            </Container>
        </Modal>
    )
}

export default LoginModal