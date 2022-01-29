import {
    Box,
    Divider,
    Typography,
    makeStyles
} from "@material-ui/core"
import ProductItem from "./ProductItem"

const useStyles = makeStyles(() => ({
    container: {
        paddingLeft: 25,
        paddingRight: 25,
        paddingTop: 20,
        '& > h5': {
            marginBottom: 10
        }
    },
    productList: {
        display: 'flex',
        flexWrap: 'wrap'
    }
}))

const ProductList = () => {
    const classes = useStyles()

    return (
        <Box className={classes.container}>
            <Typography variant="h5">Category</Typography>
            <Divider/>
            <Box className={classes.productList}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(item => <ProductItem key={item}/>)}
            </Box>
        </Box>
    )
}

export default ProductList