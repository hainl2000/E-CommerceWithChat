import {
    TableRow,
    TableCell,
    Box,
    IconButton,
    Typography
} from '@material-ui/core';
import AddBoxIcon from '@material-ui/icons/AddBox';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { useStyles } from './style';

const CartItem = ({item, index, updateHandle, removeHandle}) => {
    const classes = useStyles()

    return (
        <TableRow>
            <TableCell>
                <Box className={classes.productInfo}>
                    <img src={item.image} width={100} height={100} alt='phone' />
                    <Box>
                        <Typography>
                            {item.name}
                        </Typography>
                        <Typography>
                            {item.description}
                        </Typography>
                    </Box>
                </Box>
            </TableCell>
            <TableCell>
                <Box className={classes.quantityCell}>
                    <AddBoxIcon onClick={() => updateHandle(index, 1)}/>
                    <Typography>
                        {item.quantity}
                    </Typography>
                    <IndeterminateCheckBoxIcon onClick={() => updateHandle(index, -1)}/>
                </Box>
            </TableCell>
            <TableCell>
                {Intl.NumberFormat().format(item.price)} VND
            </TableCell>
            <TableCell>
                {Intl.NumberFormat().format(item.quantity * item.price)} VND
            </TableCell>
            <TableCell>
                <IconButton onClick={() => removeHandle(index)}>
                    <DeleteForeverIcon/>
                </IconButton>
            </TableCell>
        </TableRow>
    )
}

export default CartItem