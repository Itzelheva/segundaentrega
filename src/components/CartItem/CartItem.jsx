
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const CartItem = ({ id, name, quantity, price }) => {
  const {removeItem} = useContext(CartContext)

  const handleRemoveItem = () => {
    removeItem(id)
  }

  return (
    <div>
      <div>Nombre del producto: {name}</div>
      <div>Cantidad: {quantity}</div>
      <div>Precio por unidad: ${price}</div>
      <div>Total: ${quantity * price}</div>
      <button onClick={handleRemoveItem}>x</button>
    </div>
  )
}

export default CartItem;