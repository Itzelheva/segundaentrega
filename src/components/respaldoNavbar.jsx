import { AppBar,IconButton, Toolbar, Typography } from "@mui/material"
import logo from "../../assets/images/logobracoon.png"
import Cartwidget from "../CartWidget/CartWidget";
import styles from "./navbar.css";
import { Link, NavLink } from "react-router-dom";


const NavBar = () => {

  return (

  <AppBar position="static">
    <Toolbar>

      <img src={logo} alt="Logo de Racoon Store" className="logo" />
      <Link to="/"> <Typography sx={{ flexGrow: 1 }} variant="h4">Racoon Store</Typography> </Link>
      <NavLink to={`/category/alimento`} className={({ isActive }) => isActive ? "ActiveOption" : "Option" }> <Typography sx={{ flexGrow: 1 }} variant="h6">Alimento</Typography> </NavLink>
      <NavLink to={`/category/juguetes`}> <Typography sx={{ flexGrow: 1 }} variant="h6">Juguetes</Typography> </NavLink>
      <Link> <Typography sx={{ flexGrow: 1 }} variant="h6">Camas</Typography> </Link>
      <Link> <Typography sx={{ flexGrow: 1 }} variant="h6">Tazones</Typography> </Link>
      <Link> <Typography sx={{ flexGrow: 1 }} variant="h6">Torres</Typography> </Link>
      <Link> <Typography sx={{ flexGrow: 1 }} variant="h6">Arena</Typography> </Link>

      <Cartwidget />

    </Toolbar>
  </AppBar> 
  )
}

export default NavBar