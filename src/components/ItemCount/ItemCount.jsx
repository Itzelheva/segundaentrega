import { useState } from "react"


const ItemCount = ({emptyCart,stock,addToCart}) => {

  const [cantidad, setCantidad] = useState(emptyCart)

  const agregarUnProducto = () => {
    if(cantidad < stock & cantidad < 5) {
      setCantidad(cantidad + 1)
    }
  }

  const eliminarUnProducto = () => {
    if( cantidad > 1) {
      setCantidad(cantidad - 1)
    }
  }

  return (
    <>

    <h1>{cantidad}</h1>
    <button onClick={agregarUnProducto}> + </button>
    <button onClick={eliminarUnProducto}> - </button>
    <button onClick={()=> addToCart(cantidad)} disabled={!stock}> Agregar al carrito </button>
    
    </>
  )
}

export default ItemCount