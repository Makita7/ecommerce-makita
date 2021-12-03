import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from './CartContext';

const Cart = () => {
    const test = useContext(CartContext);
    
    return( 
        <>
            <div className="Wrapper">
                <div className="Center">
                    <button type="button" className="btn btn-dark" onClick={test.removeList} >Empty Cart</button>
                </div>
                <div className="Center">
                    <h3 className="text-center">Shopping Bag</h3>
                </div>
                <div className="Center">
                    <Link to='/'><div type="button" className="btn btn-dark">Continue Shopping</div></Link>
                </div>
            </div>
            <div className="">
                <div className="Wrapper Center">
                {
                    test.cartList.length > 0
                    
                    ? 
                    test.cartList.map(item => 
                    <div key={`key${item.idItem}`}>
                        <div className='card-body text-center'>
                            <div className="cartImg"><img src={item.imgItem} alt={item.nameItem} className="cartImg"/></div>
                            <p>Product: {item.nameItem}</p>
                            <p>{item.qtyItem} product(s)</p>
                            <p>$ {item.priceItem} each</p>
                            <button type="button" className="btn btn-dark" onClick={() => test.deleteItem(item.idItem)}>DELETE</button>
                        </div>
                    </div>
                    )

                    :
                    <div className="Center"><h5 className="text-center price">Empty (▱˘︹˘▱)</h5></div>
                    }
                </div>

                    <br/><br/>

                    {/*Bottom Cart*/}
                    {
                    test.cartList.length > 0 &&
                        <div>
                            <h3 className="text-center">ORDER SUMMARY</h3>
                            <table className="table text-center">
                                <thead>
                                    <tr>
                                    <th scope="col">Subtotal</th>
                                    <th scope="col">Quantity of Products</th>
                                    <th scope="col">Tax</th>
                                    <th scope="col">Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <th scope="row">{test.calcSubTotal()}</th>
                                    <td>{test.calcItemsQty()}</td>
                                    <td>{test.calcTax()}</td>
                                    <td>{test.calcTotal() + test.calcTax()}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <br/>
                            <div className="Center">
                                <button type="button" className="btn btn-dark m-4">Go to Checkout</button>
                            </div>
                        </div>
                }
            </div>
        </>
    );
}

export default Cart;