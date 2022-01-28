import {
    Box,
    Typography,
    Divider,
    TableContainer,
    TableHead,
    TableRow,
    Table,
    TableCell,
    TableBody,
    Select,
    MenuItem,
    FormControl,
    Button,
} from '@material-ui/core'
import { columns } from './columns';
import { useState } from 'react';
import { product_data, shipping } from './data';
import { useStyles } from './style';
import CartItem from './CartItem';

const Cart = () => {
    const classes = useStyles()
    const [shippingValue, setShippingValue] = useState(1)
    const [data, setData] = useState(product_data)

    const getTotal = () => {
        return data.reduce((current, next) => {
            return current + next.price * next.quantity
        }, 0)
    }

    const updateHandle = (index, change) => {
        if (data[index].quantity + change !== 0)
        {
            const newData = [...data]
            newData[index].quantity += change
            setData([...newData])
        }
    }

    const removeHandle = (index) => {
        const newData = [...data]
        newData.splice(index, 1)
        setData([...newData])
    }

    return (
        <Box component='div' className={classes.root}>
            <Box className={classes.cartItem}>
                <Box className={classes.cartHeader}>
                    <Typography variant='h5'>
                        Đơn hàng
                    </Typography>
                    <Typography variant='h5'>
                        {data.length} items
                    </Typography>
                </Box>
                <Divider/>
                <Box className={classes.dataContainer}>
                    <TableContainer className={classes.table}>
                        <Table stickyHeader>
                            <TableHead>
                                <TableRow>
                                    {columns.map(column => (
                                        <TableCell
                                            key={column.id}
                                        >
                                            {column.name.toUpperCase()}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.map((item, index) => {
                                    return (
                                        <CartItem key={index} item={item} index={index} updateHandle={updateHandle} removeHandle={removeHandle}/>
                                    )
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Box>
            <Box className={classes.payment}>
                <Box>
                    <Typography variant='h5' className={classes.cartHeader}>
                        Thanh toán
                    </Typography>
                </Box>
                <Divider/>
                <Box className={classes.totalPaymentInfo}>
                    <Typography>
                        Số sản phẩm: {data.length}
                    </Typography>
                    <Typography>
                        Tổng tiền: {Intl.NumberFormat().format(getTotal())} VND
                    </Typography>
                </Box>
                <Typography variant='h6'>Vận chuyển</Typography>
                <Box className={classes.shippingInfo}>
                    <FormControl variant='outlined' className={classes.formControl}>
                        <Select
                            value={shippingValue}
                            onChange={e => setShippingValue(e.target.value)}
                        >
                            {shipping.map(shippingMethod =>
                            <MenuItem key={shippingMethod.id} value={shippingMethod.id}>
                                {shippingMethod.name}
                            </MenuItem>)}
                        </Select>
                    </FormControl>
                    <Typography>
                        Phí vận chuyển: {Intl.NumberFormat().format(shipping[shippingValue - 1].price)} VND
                    </Typography>
                </Box>
                <Divider/>
                <Box className={classes.total}>
                    <Typography>Tổng tiền:</Typography>
                    <Typography>{Intl.NumberFormat().format(getTotal() + shipping[shippingValue -1].price)} VND</Typography>
                </Box>
                <Box className={classes.payButton}>
                    <Button variant='contained' color='secondary'>Thanh toán</Button>
                </Box>
            </Box>
        </Box>
    )
}

export default Cart