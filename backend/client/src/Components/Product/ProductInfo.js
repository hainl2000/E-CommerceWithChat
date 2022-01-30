import {
    Box,
    Paper,
    makeStyles,
    Typography,
    Divider,
    Button
} from "@material-ui/core"
import {
    Rating
} from "@material-ui/lab"
import StarIcon from '@material-ui/icons/Star'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import { useNavigate } from 'react-router';

const useStyles = makeStyles(() => ({
    paper: {
        width: 1200,
        margin: 'auto',
        marginTop: 20,
        boxSizing: 'border-box',
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
        height: 'calc(100vh - 100px)',
        borderRadius: 15,
        display: 'flex'
    },
    rightPanel: {
        paddingLeft: 100
    },
    gallery: {
        maxWidth: 400,
        display: 'flex',
        overflow: 'auto',
        flexShrink: 0,
        flexFlow: 'row',
        '& img': {
            border: '1px solid #aaa',
            marginRight: 1,
            flex: 'none'
        },
        '&::-webkit-scrollbar': {
            height: 8,
            backgroundColor: '#fafbfc'
        },
        '&::-webkit-scrollbar-thumb:hover': {
            background: 'rgb(145, 145, 145)'
        }
    },
    rating: {
        display: 'flex',
        '& > .MuiRating-root': {
            marginLeft: 5
        },
        '& > p': {
            marginRight: 5
        }
    },
    startIcon: {
        color: '#ffb400'
    },
    price: {
        color: '#ff6f00',
        fontSize: 40,
        marginBottom: 20,
        marginTop: 20,
    },
    description: {
        fontSize: 20,
    },
    buttonText: {
        marginRight: 5
    },
    buttonContainer: {
        marginTop: 150,
        textAlign: 'center',
        '& > button': {
            width: 300,
            height: 50,
            borderRadius: 25,
            marginLeft: 5,
            marginRight: 5,
            marginTop: 20
        }
    }
}))

const ProductInfo = () => {
    const classes = useStyles()
    const navigate = useNavigate()

    return (
        <Box>
            <Paper elevation={10} className={classes.paper}>
                <Box>
                    <img src='https://cdn.tgdd.vn/Products/Images/42/22230/iphone_3GS_b.jpg' width={400} height={400} alt='product'/>
                    <Box className={classes.gallery}>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(item =>
                            <img key={item} src='https://cdn.tgdd.vn/Products/Images/42/22230/iphone_3GS_b.jpg' width={100} height={100} alt='product'/>)}
                    </Box>
                </Box>
                <Box className={classes.rightPanel}>
                    <Typography variant="h4">
                        iPhone
                    </Typography>
                    <Box className={classes.rating}>
                        <Typography>Đánh giá: </Typography>
                        <StarIcon className={classes.startIcon}/>
                        <Typography>4.5</Typography>
                        <Divider orientation="vertical" flexItem/>
                        <Rating/>
                    </Box>
                    <Box>
                        <Typography className={classes.price}>{Intl.NumberFormat().format(100000)} VND</Typography>
                        <Divider/>
                        <Typography className={classes.description}>Mô tả:</Typography>
                        <Typography className={classes.description}>
                            abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc
                        </Typography>
                    </Box>
                    <Box className={classes.buttonContainer}>
                        <Divider/>
                        <Button variant="contained" color="secondary">
                            <Typography className={classes.buttonText}>Thêm vào giỏ hàng</Typography>
                            <AddShoppingCartIcon/>
                        </Button>

                        <Button variant="contained" color="primary" onClick={() => navigate('/cart/1')}>
                            <Typography className={classes.buttonText}>Đặt hàng nhanh</Typography>
                        </Button>
                    </Box>
                </Box>
            </Paper>
        </Box>
    )
}

export default ProductInfo