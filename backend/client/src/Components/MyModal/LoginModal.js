import {
    Container,
    Modal,
    makeStyles,
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

const useStyles = makeStyles(() => ({
    modalContainer: {
        width: 300,
        height: 400,
        marginTop: 100,
        borderRadius: 5,
        background: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    modalTitle: {
        paddingTop: 60,
        paddingBottom: 30,
        fontFamily: 'Roboto'
    },
    form: {
        width: '90%',
        '& > .MuiFormControl-root': {
            marginBottom: 20
        }
    },
    loginButton: {
        background: '#802feb',
        color: '#fff',
        width: 150,
        borderRadius: 20,
        marginTop: 20,
        transition: 'background 500ms',
        '&:hover': {
            background: '#5619a6'
        }
    },
    createAccountLink: {
        fontWeight: 'bold',
        fontSize: 15,
        marginTop: 60,
        cursor: 'pointer',
        transition: 'color 250ms',
        '&:hover': {
            color: '#555'
        }
    },
    eyeIcon: {
        cursor: 'pointer'
    }
}))

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