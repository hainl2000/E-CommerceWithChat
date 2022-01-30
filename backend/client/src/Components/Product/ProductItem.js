import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    makeStyles,
    Typography
} from "@material-ui/core";
import { Rating } from '@material-ui/lab';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { useNavigate } from 'react-router';

const useStyles = makeStyles(() => ({
    cardItem: {
        marginRight: 45,
        cursor: 'pointer',
        width: 200,
        flex: 'none',
        marginBottom: 10,
        marginTop: 10,
    },
    media: {
        height: 200,
        width: 200
    },
    content: {
        display: 'flex',
        flexWrap: 'wrap',
        paddingBottom: 5,
        justifyContent: 'space-between'
    },
    actions: {
        display: 'flex',
        alignItems: 'center',
        paddingBottom: 15
    },
    rating: {
        paddingLeft: 5,
        marginRight: 20
    }
}))

const ProductItem = () => {
    const classes = useStyles()
    const navigate = useNavigate()

    return (
        <Card elevation={3} className={classes.cardItem}>
            <CardMedia
                className={classes.media}
                image="https://cdn.tgdd.vn/Products/Images/42/22230/iphone_3GS_b.jpg"
                title="product"
                onClick={() => navigate('/product/1')}
            />
            <CardContent className={classes.content} onClick={() => navigate('/product/1')}>
                <Typography variant='h6'>
                    Phone
                </Typography>
                <Typography variant='h6'>
                    60$
                </Typography>
            </CardContent>
            <CardActions className={classes.actions} disableSpacing>
                <Rating className={classes.rating} value={3} readOnly/>
                <AddShoppingCartIcon onClick={() => navigate(('/cart/1'))}/>
            </CardActions>
        </Card>
    )
}

export default ProductItem