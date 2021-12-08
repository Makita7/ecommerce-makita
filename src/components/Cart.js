import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from './CartContext';
import { collection, doc, increment, serverTimestamp, setDoc, updateDoc } from '@firebase/firestore';
import db from '../utilities/firebaseConfig';
import Swal from "sweetalert2";  

const Cart = () => {
    const test = useContext(CartContext);

    const makeOrder = () => {
        let order = {
            buyer: {
                name: "Julieta",
                lastName: "Beamonte",
                email: "ju-b@gmail.com",
                phone: "2616459751"
                },
                products: test.calcItemsQty(),
                tax: test.calcTax(),
                total: test.calcTotal(),
                items: test.cartList.map(item => ({
                    id: item.idItem,
                    title: item.nameItem,
                    price: item.priceItem,
                    qty: item.qtyItem
                })),
                date: serverTimestamp()
            };

        const createOrder = async () => {
            const newOrder = doc(collection(db, "orders"));
            await setDoc(newOrder, order);
            return newOrder;
            }
            
            createOrder()
            .then(result => Swal.fire('Your order has been added. Please save the ID of your order' , ' Order ID: ' + result.id ))
            .catch(err => console.log(err));
        
            
            test.cartList.forEach(async(item) => {
                const itemRef = doc(db, "products", item.idItem);
                await updateDoc(itemRef, {
                    stock: increment(-item.qtyItem)
                });
            });

            //it goes after the stock check because otherwise it has nothing to check
            test.removeList();

        }
    
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
                                <button type="button" className="btn btn-dark m-4" onClick={makeOrder} >Go to Checkout</button>
                            </div>
                        </div>
                }
            </div>
        </>
    );
}

export default Cart;