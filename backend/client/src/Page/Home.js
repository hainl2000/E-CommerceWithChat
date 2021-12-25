import NavBar from '../Components/NavBar';
// import Filter from '../Components/Filter';
import ProductGallery from '../Components/ProductGallery';
import { ProductsSelector } from '../Selector/CommonSelector';
import { useSelector } from 'react-redux';

const Home = ({socket}) => {
    const products = useSelector(ProductsSelector)

    return (
        <div>
            <NavBar socket={socket}/>

            <ProductGallery items={products}/>
        </div>
    )
}

export default Home