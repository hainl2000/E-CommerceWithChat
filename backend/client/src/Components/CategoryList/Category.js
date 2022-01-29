import {
    Box,
    Typography,
    makeStyles,
    Divider
} from "@material-ui/core"
import ProductItem from "../Product/ProductItem"

const useStyles = makeStyles(() => ({
    category: {
        marginTop: 10,
        marginBottom: 30
    },
    title: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 25,
        paddingRight: 25,
        '& > p': {
            cursor: 'pointer'
        }
    },
    categoryItem: {
        display: 'flex',
        paddingLeft: 30,
        maxWidth: '100%',
        flexShrink: 0,
        flexFlow: 'row',
        paddingBottom: 10,
        overflowX: 'auto',
        marginTop: 10,
        '&::-webkit-scrollbar': {
            height: 8,
            backgroundColor: '#fafbfc'
        },
        '&::-webkit-scrollbar-thumb:hover': {
            background: 'rgb(145, 145, 145)'
        }
    }
}))

const Category = ({ category_name = 'Category' }) => {
    const classes = useStyles()

    return (
        <>
            <Box component='div' className={classes.category}>
                <Box component='div' className={classes.title}>
                    <Typography variant="h6">
                        {category_name}
                    </Typography>
                    <Typography>
                        Xem thêm
                    </Typography>
                </Box>
                <Box component='div' className={classes.categoryItem}>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => <ProductItem key={item}/>)}
                </Box>
            </Box>
            <Divider/>
        </>
    )
}

export default Category