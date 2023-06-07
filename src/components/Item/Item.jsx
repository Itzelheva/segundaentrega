import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import {  CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';


const Item = ({id,name,category,price,img,stock,description}) => {
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
            Precio: $ {price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={`/item/${id}`}>Ver detalle del producto</Link>
      </CardActions>
    </Card>
  );
}

export default Item;