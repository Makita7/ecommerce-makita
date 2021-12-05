import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import Logo from "../img/infuse-logo.png";
import img from "../img/log-in-icon.png";
import "../css/styles.css";
import splatOne from '../img/coffee-stain-one.png'

function Navbar() {
  return (
    <>
      <div className="Wrapper">
        <div className="Left">
          <img className="stain" src={splatOne} alt="coffee stain"/>
        </div>
        <div className="Center">
          <Link to="/">
            <img className="logo" src={Logo} alt="logo" />
          </Link>
        </div>
        <div className="Right">
          <ul>
            <Link to="/">
              <img src={img} className="btn imgHeader" alt="log in" />
            </Link>
            <Link to="/cart">
              <CartWidget />
            </Link>
          </ul>
        </div>
      </div>

      <div className="Wrapper">
        <div className="Center navbar">
          <Link to="/category/CoffeeCapsules" className="nav-link">
            Coffee Capsules
          </Link>
          <Link to="/category/CoffeeBeans" className="nav-link">
            Coffee Beans
          </Link>
          <Link to="/category/TeaStrands" className="nav-link">
            Tea Strands
          </Link>
          <Link to="/category/YerbaMate" className="nav-link">
            Yerba Mate
          </Link>
          <Link to="/category/Accessories" className="nav-link">
            Accessories
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
