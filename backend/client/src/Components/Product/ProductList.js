import {
    Box,
    Divider,
    Typography
} from "@material-ui/core"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchProductsByCategory } from "../../Actions/ProductActions"
import { selectCategory } from "../../Actions/CategoryAction"
import ProductItem from "./ProductItem"
import { useStyles } from './style'
import { useParams } from "react-router"
import { activeProductsByCategorySelector } from "../../Selectors/productSelector"
import { selectedCategorySelector } from "../../Selectors/categorySelector"

const ProductList = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const products = useSelector(activeProductsByCategorySelector)
    const category = useSelector(selectedCategorySelector)

    const { id } = useParams()

    useEffect(() => {
        dispatch(selectCategory(id))
        dispatch(fetchProductsByCategory(id))
    }, [])

    return (
        <Box className={classes.container}>
            <Typography variant="h6">{category?.nameCategory}</Typography>
            <Divider/>
            <Box className={classes.productList}>
                {products.map(product => <ProductItem key={product._id} product={product}/>)}
            </Box>
        </Box>
    )
}

export default ProductList