import { Box } from "@material-ui/core"
import { Home, Admin, Cart, Category, ProductInfo } from '../Pages'

const User = ({type = 'home'}) => {
    const getContent = () => {
        switch (type)
        {
            case 'home':
                return <Home/>

            case 'product':
                return <ProductInfo/>

            case 'admin':
                return <Admin/>

            case 'cart':
                return <Cart/>

            case 'category':
                return <Category/>

            default: return <Home/>
        }
    }

    return (
        <Box>
            {getContent()}
        </Box>
    )
}

export default User