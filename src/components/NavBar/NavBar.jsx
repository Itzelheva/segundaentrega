import { AppBar,IconButton, Toolbar, Typography } from "@mui/material"
import logo from "../../assets/images/logobracoon.png"
import Cartwidget from "../CartWidget/CartWidget";
import styles from "./navbar.css";
import { Link} from "react-router-dom";



const NavBar = () => {

  return (

  <AppBar position="static">
    <Toolbar>

      <img src={logo} alt="Logo de Racoon Store" className="logo" />
      <Link to="/"> <Typography sx={{ flexGrow: 1 }} variant="h4">Racoon Store</Typography> </Link>
      <Link to={`/category/alimento`}> <Typography sx={{ flexGrow: 1 }} variant="h6">Alimento</Typography> </Link>
      <Link to={`/category/juguetes`}> <Typography sx={{ flexGrow: 1 }} variant="h6">Juguetes</Typography> </Link>
      <Link to={`/category/camas`}> <Typography sx={{ flexGrow: 1 }} variant="h6">Camas</Typography> </Link>
      <Link to={`/category/tazones`}> <Typography sx={{ flexGrow: 1 }} variant="h6">Tazones</Typography> </Link>
      <Link to={`/category/torres`}> <Typography sx={{ flexGrow: 1 }} variant="h6">Torres</Typography> </Link>
      <Link to={`/category/arena`}> <Typography sx={{ flexGrow: 1 }} variant="h6">Arena</Typography> </Link>

      <Cartwidget />

    </Toolbar>
  </AppBar> 
  )
}

export default NavBar