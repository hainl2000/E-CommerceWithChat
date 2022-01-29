import {
    IconButton,
    makeStyles
} from '@material-ui/core';
import './App.css';
import CategoryList from './Components/CategoryList';
import Footer from './Components/Footer';
import NavBar from './Components/Navbar';
import { useRef } from 'react';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import Cart from './Components/Cart';
import { ProductInfo, ProductList } from './Components/Product';
import Admin from './Components/Admin';

const useStyles = makeStyles(() => ({
    scrollToTopButton: {
        position: 'fixed',
        bottom: 50,
        right: 10,
        background: 'rgba(200,200,200,0.5)',
        transition: 'background 250ms',
        '&:hover': {
            background: 'rgba(250, 250, 250, 0.7)'
        }
    }
}))

function App() {
    const classes = useStyles()
    const top = useRef(null)

    return (
        <div className="App">
            <div ref={top}/>
            {/* <NavBar/> */}

            {/* <CategoryList/> */}
            {/* <Cart/> */}
            {/* <ProductInfo/> */}
            {/* <ProductList/> */}
            <Admin/>

            {/* <IconButton className={classes.scrollToTopButton} onClick={() => top.current.scrollIntoView()}>
                <ArrowUpwardIcon fontSize='large'/>
            </IconButton> */}
            {/* <Footer/> */}
        </div>
    );
}

export default App;
