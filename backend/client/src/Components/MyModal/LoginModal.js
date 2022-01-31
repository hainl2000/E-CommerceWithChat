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

const LoginModal = ({open, closeHandle}) => {
    const classes = useStyles()
    const [visible, setVisible] = useState(false)

    const passwordVisibleHandle = () => {
        setVisible(visible => !visible)
    }
    
    return (
        <Modal
            open={open}
            onClose={closeHandle}
        >
            <Container className={classes.modalContainer}>
                <Typography className={classes.modalTitle} variant='h4'>
                    Đăng nhập
                </Typography>
                <FormControl className={classes.form}>
                    <TextField
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
                <Button className={classes.loginButton} variant='contained'>Đăng nhập</Button>
                <Typography className={classes.createAccountLink}>
                    Tạo tài khoản
                </Typography>
            </Container>
        </Modal>
    )
}

export default LoginModal