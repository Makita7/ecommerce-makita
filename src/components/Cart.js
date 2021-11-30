import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from './CartContext';
import FormatNumber from "../utilities/FormatNumber";

const Cart = () => {
    const test = useContext(CartContext);
    console.log("Cart:", test);

    return( 
        <>
            <div className="Wrapper">
                <div className="Left">
                    <button type="button" className="btn btn-dark" onClick={test.removeList} >Empty Cart</button>
                </div>
                <div className="Center">
                    <h3 className="text-center">Hi I'm your Cart</h3>
                </div>
                <div className="Center">
                    <Link to='/'><button type="button" className="btn btn-dark">Continue Shopping</button></Link>
                </div>
            </div>
            <div>
                {
                    test.cartList.length > 0
                    
                    ? 
                    test.cartList.map(item => 
                    <div className="Wrapper">
                        <div>
                            <p>{item.idItem}</p>
                            <img src={item.imgItem} alt={item.name}/>
                            <p>Product: {item.nameItem}</p>
                            <p>{item.qtyItem} product(s)</p>
                            <p>$ {item.costItem} each</p>
                            <button type="button" className="btn btn-dark" onClick={() => test.deleteItem(item.idItem)}>DELETE</button>
                        </div>
                    </div>
                    )

                    :
                    <div><h5 className="text-center">Empty</h5></div>
                    }

                    <br/><br/>

                    {/*Bottom Cart*/}
                    {
                    test.cartList.length > 0 &&
                        <div>
                            <h3>ORDER SUMMARY</h3>
                            <table className="table">
                                <thead>
                                    <tr>
                                    <th scope="col">Subtotal</th>
                                    <th scope="col">Discount</th>
                                    <th scope="col">Discount Added</th>
                                    <th scope="col">Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <th scope="row">< FormatNumber number={test.calcSubTotal()}/></th>
                                    <td><FormatNumber number={test.calcSubTotal()} /></td>
                                    <td><FormatNumber number={-test.calcTaxes()} /></td>
                                    <td><FormatNumber number={test.calcTotal()} /></td>
                                    </tr>
                                </tbody>
                            </table>
                            <br/>
                            <button>Go to Checkout</button>
                        </div>
                }
            </div>
        </>
    );
}

export default Cart;