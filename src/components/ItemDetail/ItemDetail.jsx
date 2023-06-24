import ItemCount from "../ItemCount/ItemCount";

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const ItemDetail = ({id, name, img, price, stock, category, description }) => {
  return (
    <Card sx={{ maxWidth: 600 }}>
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
          <Typography variant="body2" color="text.secondary">
          Categoria: {category}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Descripcion: {description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Precio: ${price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Stock disponible: ${stock}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <ItemCount emptyCart={0} stock={5} addToCart={(cantidad) => console.log("Productos agregados" , cantidad)}/>
      </CardActions>
    </Card>
  );
}

export default ItemDetail;