import { Button } from "@mui/material"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



const CartWidget = () => {
  return (
    <>
    <Button variant="contained" startIcon={<ShoppingCartIcon />}>5 ITEMS</Button>
    </>
  )
}

export default CartWidget