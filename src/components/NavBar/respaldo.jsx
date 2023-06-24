import { NavLink, Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";



const NavBar = () => {
  return (
    <div>
      <Link to="/">
          <h1>Racoon Ecommerce</h1>
      </Link>
        <NavLink to={`/category/Alimento`} className="nav-link">Alimento</NavLink>
        <NavLink to={`/category/Arena`} className="nav-link">Arena</NavLink>
        <NavLink to={`/category/Juguetes`} className="nav-link">Juguetes</NavLink>
        <NavLink to={`/category/Tazones`} className="nav-link">Tazones</NavLink>
        <NavLink to={`/category/Camas`} className="nav-link">Camas</NavLink>
        <NavLink to={`/category/Torres`} className="nav-link">Torres</NavLink>
        <CartWidget />
    </div>
  )
}
export default NavBar