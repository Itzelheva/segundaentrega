
import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import itemdetail from "./itemdetail.css";
import ItemCount from "../ItemCount/ItemCount"

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';


const ItemDetail = ({id, name, img, price, stock, category, description }) => {
  
  const { addItem } = useContext(CartContext)
  const [showCheckOutButton, setCheckOutButton] = useState(false)

  const handleOnAdd = (quantity) => {
    const item = {
      id,name,price
    }

    addItem(item,quantity)
    setCheckOutButton(true)
  }
 
  return (
    <div className="item-detail-container">
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="500"
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {name}
          </Typography>
          <Typography variant="h6" color="text.secondary">
          Categoria: {category}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
          Descripcion: {description}
          </Typography>
          <Typography variant="h6" color="text.secondary">
          Precio: ${price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Stock disponible: {stock}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {showCheckOutButton ? (
         <Link to="/cart">
          <button>Terminar compra</button>
         </Link> 
        ) : (
          <ItemCount initial={0} stock={stock} onAdd={handleOnAdd} />
        )}
      </CardActions>
    </Card>
    </div>
  );
}

export default ItemDetail;