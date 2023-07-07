import { useState } from "react"


const ItemCount = ({initial,stock,onAdd}) => {

  const [quantity, setQuantity] = useState(initial)

  const increment = () => {
    if(quantity < stock & quantity < 5) {
      setQuantity(quantity + 1)
    }
  }

  const decremenet = () => {
    if( quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  return (
    <>

    <h1>{quantity}</h1>
    <button onClick={increment}> + </button>
    <button onClick={decremenet}> - </button>
    <button onClick={()=> onAdd(quantity)} disabled={!stock}> Agregar al carrito </button>
    
    </>
  )
}

export default ItemCount