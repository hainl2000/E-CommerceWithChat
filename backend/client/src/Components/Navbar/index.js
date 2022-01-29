import {
    useState,
    useRef,
    useEffect
} from 'react'
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Button,
    TextField,
    FormControl,
    Box,
    Badge,
    Avatar,
    withStyles,
    InputAdornment,
    Menu,
    MenuItem,
    Drawer
} from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';
import HelpIcon from '@material-ui/icons/Help';
import { LoginModal, SignUpModal } from '../MyModal';
import Inbox from './Inbox';
import { useStyles } from './style';

const StyledMenu = withStyles({
    paper: {

    }
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center'
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center'
        }}
        {...props}
    />
))

const NavBar = () => {
    const classes = useStyles()
    const [searchValue, setSearchValue] = useState('')
    const [anchorEl, setAnchorEl] = useState(null)
    const [openDrawer, setOpenDrawer] = useState(false)
    const [endTextEl, setEndTextEl] = useState(null)
    const [missTextCount, setMissTextCount] = useState(2)
    const endText = useRef(null)

    //test
    const [count, setCount] = useState(0)
    const login = true
    const [openModal, setOpenModal] = useState(false)

    const closeModalHandle = () => {
        setOpenModal(false)
    }
    //

    const searchClickHandle = () => {
        setSearchValue('')
        setCount(count => count + 1)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const avatarClickHandle = e => {
        setAnchorEl(e.currentTarget)
    }

    useEffect(() => {
        endText.current?.scrollIntoView()
    }, [endTextEl])

    return (
        <div className={classes.root}>
            <AppBar position='static'>
                <Toolbar>
                    <IconButton edge='start' className={classes.menuButton} color='inherit' aria-label='menu'>
                        <HomeIcon />
                    </IconButton>
                    <Typography variant='h6' className={classes.title}>
                        App
                    </Typography>
                    <Box className={classes.formContainer}>
                        <FormControl>
                            <TextField
                                variant='outlined'
                                size='small'
                                placeholder='Search...'
                                value={searchValue}
                                onChange={e => setSearchValue(e.target.value)}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position='end'>
                                            <SearchIcon
                                                className={classes.searchButton}
                                                onClick={searchClickHandle}
                                            />
                                        </InputAdornment>
                                    )
                                }}
                            />
                        </FormControl>
                    </Box>
                    <Box component="div" className={classes.buttonContainer}>
                        {login && 
                        <IconButton onClick={() => {
                            setOpenDrawer(true)
                            setMissTextCount(0)
                        }}>
                            <Badge badgeContent={missTextCount} color='secondary'>
                                <HelpIcon />
                            </Badge>
                        </IconButton>}
                        <IconButton>
                            <Badge badgeContent={count} color='secondary'>
                                <ShoppingCartIcon className={login ? classes.cartIcon : classes.cartIcon_extend}/>
                            </Badge>
                        </IconButton>
                        {login ? <Avatar className={classes.avatar} onClick={e => avatarClickHandle(e)}>N</Avatar> : <Button className={classes.button} onClick={() => setOpenModal(true)} color='inherit'>Đăng nhập</Button>}
                        <StyledMenu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem className={classes.menuItem} onClick={handleClose}>Đăng xuất</MenuItem>
                        </StyledMenu>
                    </Box>
                </Toolbar>
            </AppBar>
            <Drawer anchor='right' open={openDrawer} onClose={() => setOpenDrawer(false)}>
                <Inbox/>
            </Drawer>
            <LoginModal open={openModal} closeHandle={closeModalHandle}/>
            {/* <SignUpModal open={openModal} closeHandle={closeModalHandle}/> */}
        </div>
    )
}

export default NavBar