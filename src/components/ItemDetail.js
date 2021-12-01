import ItemCount from './ItemCount';
import { useContext, useState } from 'react';
import {Link} from "react-router-dom";
import { CartContext } from './CartContext';
import '../css/styles.css';


const ItemDetail = ({ item, stock = 0 }) => {
    const [itemCount, setItemCount] = useState(0);
    const test = useContext(CartContext);

    const onAdd = (qty) => {
        console.log(item);
        console.log(qty);
        
        alert("You have selected " + qty + " items.");
        setItemCount(qty);
        test.addToCart(item, qty);
    }

    return (
        <>
            {
                item.length === 0 
                ? //if
                <p className="text-center">loading...</p> 
                : //else
                <div key={item.id} className="d-flex align-items-center text-center p-4 ">
                    <div className="prodCard">
                        <div className='card'>
                            <img src={item.img} className=" img-thumbnail" alt={item.name}/>
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text">{item.description}</p>
                                <p>Stock: {item.stock}</p>
                                <br/>
                            </div>
                        </div>
                    </div>
                    {/* To show or hide button once you have selected the products you want */}
                    {
                        itemCount === 0
                        ? <ItemCount stock={item.stock} initial={itemCount} id={item.id} onAdd={onAdd}/>
                        : <Link to='/Cart' className=" p-4"><button type="button" className="btn btn-dark">Go to Cart</button></Link>
                    }
                </div>
                
            }

        </>
    )

}

export default ItemDetail;