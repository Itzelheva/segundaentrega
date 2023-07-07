import cartwidget from "./cartwidget.css";

import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom"
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  
  // Aqui estoy calculando la cantidad total de todos los productos en el carrito
  const cartItemCount = cart.reduce((total, product) => total + product.quantity, 0);

  return (
    <div className="cart-widget-container">
    <Link to="/cart">
      <Badge badgeContent={cartItemCount} color="secondary" className="cart-badge">
        <ShoppingCartIcon className="cart-icon" fontSize="large"/>
      </Badge>
    </Link>
    </div>
  );
}

export default CartWidget;

