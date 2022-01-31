import {
    Box,
    Tab,
    Tabs,
} from "@material-ui/core"
import { useState } from "react"
import { useStyles } from "./style";
import ProductList from "./ProductList";
import AdminModal from "./AdminModal";

import SearchIcon from '@material-ui/icons/Search';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import AddBoxIcon from '@material-ui/icons/AddBox';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { product_data } from '../Cart/data';
import Inbox from "./Inbox";

const Admin = () => {
    const classes = useStyles()
    const [value, setValue] = useState(0)
    const [openModal, setOpenModal] = useState(false)
    const [modalType, setModalType] = useState('view')

    const changeHandle = (e, newValue) => setValue(newValue)

    return (
        <Box className={classes.root}>
            <Tabs
                className={classes.tabs}
                orientation="horizontal"
                value={value}
                onChange={changeHandle}
            >
                <Tab label='Product'/>
                <Tab label='Category'/>
                <Tab label='Chăm sóc khách hàng'/>
            </Tabs>
            <Box className={classes.panelContainer}>
                <Inbox/>
                {/* <ProductList/> */}
                {/* <Box className={classes.tool}>
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
                    <AddBoxIcon fontSize="large" className={classes.icon} onClick={() => {
                        setOpenModal(true)
                        setModalType('add')
                    }}/>
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
                            <VisibilityIcon className={classes.icon} onClick={() => {
                                setOpenModal(true)
                                setModalType('view')
                            }}/>
                            <EditIcon className={classes.icon} onClick={() => {
                                setOpenModal(true)
                                setModalType('edit')
                            }}/>
                            <DeleteForeverIcon className={classes.icon} onClick={() => setOpenModal(true)}/>
                        </Box>
                    )}
                </Box> */}
            </Box>
            {/* <AdminModal view={modalType === 'view'} edit={modalType === 'edit'} add={modalType === 'add'} open={openModal} setOpen={setOpenModal}/> */}
        </Box>
    )
}

export default Admin