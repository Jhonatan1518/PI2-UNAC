import { Box, Grid  } from '@mui/material'
import React, { useEffect, useState } from 'react';
import CardService from '../../components/Card/Card'
import axios from 'axios';

export const ServiciosPage = () => {

    const [park, setPark] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/park')
            .then((response) => {
                setPark(response.data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, [])


    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'row', marginLeft: 27, alignItems: 'center', marginTop: 2 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <h3 style={{ fontSize: '16px', fontWeight: 'lighter', margin: 0 }}>Paquetes turísticos</h3>
          <h2 style={{ fontSize: '28px', fontWeight: 'bold', margin: 12 }}>Los increíbles lugares de Colombia</h2>
        </Box>
      </Box>

      <Grid container spacing={5}>
        {park.map((park, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <CardService
              name={park.name}
              department={park.departament}
              city={park.city}
              ubication={park.ubication}
            />
          </Grid>
        ))}
      </Grid>

      <Box sx={{ display: 'flex', flexDirection: 'row', marginLeft: 27, alignItems: 'center', marginTop: 2 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <h1 style={{ fontSize: '24px', fontWeight: 'bold', margin: 0 }}>Los mejores precios para paquetes turísticos de Colombia.</h1>
        </Box>
      </Box>
        </>



    )
}

export default ServiciosPage