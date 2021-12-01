import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addToCart = (item, qty) => {
    let found = cartList.find((product) => product.idItem === item.id);
    if (found === undefined) {
      setCartList([
        ...cartList,
        {
          idItem: item.id,
          imgItem: item.img,
          nameItem: item.name,
          priceItem: item.price,
          qtyItem: qty,
        },
      ]);
    } else {
      //to raise the amount instead of showing duplicates
      found.qtyItem += qty;

    }
  };

  //to remove items inside of Cart
  const removeList = () => {
    setCartList([]);
  };

  const deleteItem = (id) => {
    let result = cartList.filter((item) => item.idItem !== id);
    setCartList(result);
  };

  //math 
  const calcTotalPerItem = (idItem) => {
    let index = cartList.map(item => item.idItem).indexOf(idItem);
    return cartList[index].priceItem * cartList[index].qtyItem;
}

  const calcSubTotal = () => {
    let totalPerItem = cartList.map(item => calcTotalPerItem(item.idItem));
    return totalPerItem.reduce((previousValue, currentValue) => previousValue + currentValue);
}

  const calcTax = () => {
    return calcSubTotal() * 0.5;
}

  const calcTotal = () => {
    return calcSubTotal();
}

  const calcItemsQty = () => {
    let quantities = cartList.map(item => item.qtyItem);
    return quantities.reduce(((previousValue, currentValue) => previousValue + currentValue), 0);
}

  return (
    <CartContext.Provider value={{
        cartList, 
        addToCart, 
        removeList, 
        deleteItem, 
        calcTotalPerItem, 
        calcSubTotal, 
        calcTax, 
        calcTotal,
        calcItemsQty
    }}>
        { children }
    </CartContext.Provider>
);
}

export default CartContextProvider;