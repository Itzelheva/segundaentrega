
import { Link } from "react-router-dom";


import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const Item = ({id, name, img, price, stock }) => {
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
          Precio: ${price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Link to={`/item/${id}`} className="Option">
          Ver detalle del producto
        </Link>
      </CardActions>
    </Card>
  );
}

export default Item;