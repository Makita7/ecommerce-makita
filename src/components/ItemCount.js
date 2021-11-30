import { useState, useEffect, useContext } from "react";
import { CartContext } from "./CartContext";
import addButton from '../img/addButton.png';

const ItemCount = ({ stock = 0, initial = 1,  onAdd }) => { 
    const [itemCount, setItemCount] = useState(0);
    const test = useContext(CartContext);
    console.log("Item Count:", test);

    
    useEffect(() => {
        setItemCount(initial);
    },[]);

        const increment = () => {
            if(itemCount < stock)
            setItemCount(itemCount + 1);
            }

            const decrement = () => {
                if(itemCount > initial)
                setItemCount(itemCount - 1);
            }

        return(

            <div className="productContainer text-center">
                <div className="card__buttons">
                    <p className="card__products">Productos: {itemCount} / {stock}</p>
                    <button onClick={decrement} className="btn btn__count">-</button>
                    <button onClick={increment} className="btn btn__count"><img className="buttonSize" alt="add button" src={addButton}/></button>
                </div>
                <button onClick={onAdd} className="btn btn__addToCar" >Add to Cart</button>
            </div>
    )
}


export default ItemCount;