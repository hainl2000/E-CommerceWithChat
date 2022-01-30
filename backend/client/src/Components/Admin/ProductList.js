import {
    Box,
    FormControl,
    TextField,
    InputAdornment,
    Typography
} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import AddBoxIcon from '@material-ui/icons/AddBox';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { product_data } from '../Cart/data';
import { useStyles } from './style';

const ProductList = () => {
    const classes = useStyles()
    return (
        <>
            <Box className={classes.tool}>
                <FormControl className={classes.form}>
                    <TextField
                        variant='outlined'
                        size='small'
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <SearchIcon className={classes.searchIcon}/>
                                </InputAdornment>
                            )
                        }}
                    />
                </FormControl>
                <AddBoxIcon fontSize="large" className={classes.icon}/>
            </Box>
            <Box className={classes.panels}>
                {product_data.map((product, index) => 
                    <Box key={index} className={classes.productCell}>
                        <img src={product.image} width={100} height={100} alt='product'/>
                        <Box className={classes.productInfo}>
                            <Typography variant='h6'>
                                {product.name}
                            </Typography>
                            <Typography>
                                {Intl.NumberFormat().format(product.price)} VND
                            </Typography>
                        </Box>
                        <VisibilityIcon className={classes.icon}/>
                        <EditIcon className={classes.icon}/>
                        <DeleteForeverIcon className={classes.icon}/>
                    </Box>
                )}
            </Box>
        </>
    )
}

export default ProductList