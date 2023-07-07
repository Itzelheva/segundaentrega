import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"
import CheckoutForm from "../Checkout/CheckoutForm"

const Cart = () => {
  const { cart, clearCart } = useContext(CartContext);

  const calculateTotal = () => {
    let total = 0;
    cart.forEach((product) => {
      total += product.price * product.quantity;
    });
    return total;
  };

  const handleClearCart = () => {
    clearCart();
  };

  if (cart.length === 0) {
    return (
      <div>
        <h1>No tienes productos agregados en el carrito de compras</h1>
        <Link to="/">Conoce todos nuestros productos</Link>
      </div>
    );
  }

  return (
    <div>
      {cart.map((product) => (
        <CartItem key={product.id} {...product} />
      ))}
      <h3>Total: ${calculateTotal()}</h3>
      <button onClick={handleClearCart}>Limpiar carrito</button>
      <Link to="/checkoutform">Finalizar compra</Link>
    </div>
  );
};

export default Cart;
