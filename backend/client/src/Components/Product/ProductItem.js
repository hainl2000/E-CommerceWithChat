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

    return (
        <Card elevation={3} className={classes.cardItem}>
            <CardMedia
                className={classes.media}
                image="https://cdn.tgdd.vn/Products/Images/42/22230/iphone_3GS_b.jpg"
                title="product"
            />
            <CardContent className={classes.content}>
                <Typography variant='h6'>
                    Phone
                </Typography>
                <Typography variant='h6'>
                    60$
                </Typography>
            </CardContent>
            <CardActions className={classes.actions} disableSpacing>
                <Rating className={classes.rating} value={3} readOnly/>
                <AddShoppingCartIcon/>
            </CardActions>
        </Card>
    )
}

export default ProductItem