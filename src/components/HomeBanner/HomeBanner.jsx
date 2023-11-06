import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import Palmera from '../../assets/fondo.jpg'
export const HomeBanner = () => {
  return (
    <Box
      sx={{
        backgroundImage:`url(${Palmera})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        textAlign: 'center',
        padding: '40px 0',
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: 'bold', fontSize: '36px', marginBottom: '20px' }}>
        Bienvenido a Turismo Sostenible
      </Typography>
      <Typography variant="h6" sx={{ fontSize: '18px', marginBottom: '30px' }}>
        Descubre nuestros servicios y encuentra la aventura que estás buscando.
      </Typography>
      <Button variant="contained" color="primary" size="large">
        Ver Servicios
      </Button>
    </Box>
  );
};

export default HomeBanner;
