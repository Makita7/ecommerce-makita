import bagIcon from "../img/bag-icon.png";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import { useContext } from "react";

function CartWidget() {
  const test = useContext(CartContext);

  return (
    <>
      <div badgeContent={test.calcItemsQty()} >
        <Link to="/Cart">
          <img
            src={bagIcon}
            type="button"
            className="btn imgHeader headerIcons"
            alt="bag"
          />
        </Link>
      </div>
    </>
  );
}

export default CartWidget;
