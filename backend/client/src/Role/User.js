import { Box } from "@material-ui/core"
import { useEffect } from "react"
import { Home, Admin, Cart, Category, ProductInfo } from '../Pages'
import { socket } from '../socket'
import { useDispatch } from 'react-redux'
import { receiveMessagesData, fetchMessages } from "../Actions/userActions"

const User = ({type = 'home'}) => {
    const dispatch = useDispatch()

    useEffect(() => {
        socket.on('messagesLoaded', data => {
            console.log(data)
            // dispatch(receiveMessagesData(data))
        })

        return () => {
            socket.off('messagesLoaded')
        }
    }, [socket])

    useEffect(() => {
        fetchMessages()
    }, [])

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