import navbar from "./navbar.css"
import logo from "../../assets/images/logobracoon.png"

import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import CategoryButton from "../NavBar/CategoryButton";



const NavBar = () => {
  return (
    <div className="navbar-container">
      <div className="left-section">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo-image" />
        </Link>
        <Link to="/">
          <h1 className="navbar-title">Racoon Ecommerce</h1>
        </Link>
        <CategoryButton />
      </div>
      <CartWidget />
    </div>
  )
}
export default NavBar
