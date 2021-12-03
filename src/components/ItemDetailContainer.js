import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ItemDetail from './ItemDetail';

//Custom Fetch & Local API
import CustomFetch from "../utilities/CustomFetch";
import products from '../utilities/products';

const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    const {idItem} = useParams();

    //Custom Fetch
    useEffect(() => {
        CustomFetch(1800, products.find(item => item.id === parseInt(idItem)))
        .then(result => setData(result))
        .catch(err => console.log(err))
    }, []);

    return(
        <>
            <ItemDetail item={data}/>
        </>
    );
}

export default ItemDetailContainer;