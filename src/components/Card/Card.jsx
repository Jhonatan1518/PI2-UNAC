import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Rio from '../../assets/rio.jpg'

export const CardService = ({ name, department, city, ubication }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={Rio}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Department: {department}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            City: {city}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Ubication: {ubication}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );

}
export default CardService;