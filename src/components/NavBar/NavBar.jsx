import { NavLink, Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import CategoryButton from "../NavBar/CategoryButton";



const NavBar = () => {
  return (
    <div>
      <Link to="/">
          <h1>Racoon Ecommerce</h1>
      </Link>
        <CategoryButton />
        <CartWidget />
    </div>
  )
}
export default NavBar
