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

const ProductList = ({ setOpenModal, setModalType }) => {
    const classes = useStyles()

    const openViewHandle = () => {
        setModalType('view')
        setOpenModal(true)
    }
    const openEditHandle = () => {
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
                        <VisibilityIcon className={classes.icon} onClick={openViewHandle}/>
                        <EditIcon className={classes.icon} onClick={openEditHandle}/>
                        <DeleteForeverIcon className={classes.icon}/>
                    </Box>
                )}
            </Box>
        </>
    )
}

export default ProductList