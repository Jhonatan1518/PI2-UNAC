import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Rio from '../../assets/rio.jpg';

export const CardService = ({ name, department, city, ubication }) => {
  return (
    <Card sx={{ maxWidth: 345, background: '  #99dfff', color: '  #99dfff' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={Rio}
          alt="Park Image"
        />
        <CardContent sx={{ padding: '16px' }}>
          <Typography variant="h5" component="div" sx={{ color: "white" }}>
            {name}
          </Typography>
          <Typography variant="body1" color="textSecondary">
            <strong sx={{ color: '  #99dfff' }}>Department:</strong> {department}
          </Typography>
          <Typography variant="body1" color="textSecondary">
            <strong sx={{ color: '  #99dfff' }}>City:</strong> {city}
          </Typography>
          <Typography variant="body1" color="textSecondary">
            <strong sx={{ color: '  #99dfff' }}>Ubication:</strong> {ubication}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CardService;
