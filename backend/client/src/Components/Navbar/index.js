import {
    useState
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
    makeStyles,
    withStyles,
    InputAdornment,
    Menu,
    MenuItem
} from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';
import HelpIcon from '@material-ui/icons/Help';
import MyModal from '../MyModal';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexGrow: 1,
        '& > .MuiAppBar-colorPrimary': {
            color: '#000',
            backgroundColor: '#fff'
        }
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {

    },
    buttonContainer: {
        // flexGrow: 1,
        display: 'flex',
        justifyContent: 'end'
    },
    formContainer: {
        flexGrow: 2,
        '& > .MuiFormControl-root': {
            width: '70%'
        },
        display: 'flex',
        justifyContent: 'center'
    },
    searchButton: {
        cursor: 'pointer'
    },
    avatar: {
        marginLeft: 12,
        marginRight: 12,
        cursor: 'pointer'
    },
    menuItem: {
        border: '1px solid #d3d4d5'
    },
    cartIcon: {
        marginLeft: 0
    },
    cartIcon_extend: {
        marginLeft: 48
    }
}))

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

    //test
    const [count, setCount] = useState(0)
    const login = false
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
                        <IconButton>
                            <HelpIcon />
                        </IconButton>}
                        <IconButton>
                            <Badge badgeContent={count} color='secondary'>
                                <ShoppingCartIcon className={login ? classes.cartIcon : classes.cartIcon_extend}/>
                            </Badge>
                        </IconButton>
                        {login ? <Avatar className={classes.avatar} onClick={e => avatarClickHandle(e)}>N</Avatar> : <Button onClick={() => setOpenModal(true)} color='inherit'>Login</Button>}
                        <StyledMenu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem className={classes.menuItem} onClick={handleClose}>Log out</MenuItem>
                        </StyledMenu>
                    </Box>
                </Toolbar>
            </AppBar>
            <MyModal open={openModal} closeHandle={closeModalHandle}/>
        </div>
    )
}

export default NavBar