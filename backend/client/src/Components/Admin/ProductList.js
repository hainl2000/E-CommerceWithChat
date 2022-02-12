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
import { useStyles } from './style';
import { activeProductsSelector } from '../../Selectors/productSelector';
import { useDispatch, useSelector } from 'react-redux';
import { selectProduct } from '../../Actions/adminActions';

const ProductList = ({ setOpenModal, setModalType }) => {
    const classes = useStyles()
    const dispatch = useDispatch()

    const products = useSelector(activeProductsSelector)

    const openViewHandle = () => {
        setModalType('view')
        setOpenModal(true)
    }
    const openEditHandle = (product) => {
        dispatch(selectProduct(product))
        setModalType('edit')
        setOpenModal(true)
    }
    const openAddModal = () => {
        setModalType('add')
        setOpenModal(true)
    }

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
                <AddBoxIcon fontSize="large" className={classes.icon} onClick={openAddModal}/>
            </Box>
            <Box className={classes.panels}>
                {products.map((product, index) => 
                    <Box key={index} className={classes.productCell}>
                        <img src={product.imageURL} width={100} height={100} alt='product'/>
                        <Box className={classes.productInfo}>
                            <Typography variant='h6'>
                                {product.nameProduct}
                            </Typography>
                            <Box>
                                <Typography>
                                    {Intl.NumberFormat().format(product.price)} $
                                </Typography>
                                <Typography>
                                    {product.description}
                                </Typography>
                            </Box>
                        </Box>
                        <VisibilityIcon className={classes.icon} onClick={openViewHandle}/>
                        <EditIcon className={classes.icon} onClick={() => openEditHandle(product)}/>
                        <DeleteForeverIcon className={classes.icon}/>
                    </Box>
                )}
            </Box>
        </>
    )
}

export default ProductList