import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import {  CardActionArea, CardActions } from '@mui/material';
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({id,name,category,price,img,stock,description}) => {
  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="500"
          image={img}
          alt={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {category}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Precio: ${price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Stock disponible: ${stock}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <ItemCount emptyCart={0} stock={20} addToCart={(cantidad) => console.log("Agregado al carrito", cantidad)} />
      </CardActions>
    </Card>
  );
}

export default ItemDetail;