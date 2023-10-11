import React from 'react';
import { Box, Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';
import Bar from '../../components/Bar';
import Image1 from '../../assets/image1.jpeg'; 
import Image2 from '../../assets/image2.jpeg'; 
import Image3 from '../../assets/image3.jpeg';
import Image4 from '../../assets/image4.jpeg'; 
import Image5 from '../../assets/image5.jpeg'; 
import Image6 from '../../assets/image6.jpeg';
import Image7 from '../../assets/image7.jpeg'; 
import Image8 from '../../assets/image8.jpeg'; 
import Image9 from '../../assets/image9.jpeg';
import Image10 from '../../assets/image10.jpeg'; 
import Image11 from '../../assets/image11.jpeg'; 
import Image12 from '../../assets/image12.jpeg'; 

const servicesData = [
    {
        name: 'Pueblo de Guatape',
        price: '$100',
        image: Image1,
    },
    {
        name: 'Guatape',
        price: '$150',
        image: Image2,
    },
    {
        name: 'Medellin metrocable',
        price: '$120',
        image: Image3,
    },
    {
        name: 'El Poblado',
        price: '$180',
        image: Image4,
    },
    {
        name: 'Plaza Botero',
        price: '$90',
        image: Image5,
    },
    {
        name: 'Pueblito Paisa',
        price: '$200',
        image: Image6,
    },
    {
        name: 'Parque explora',
        price: '$150',
        image: Image7,
    },
    {
        name: 'Parque Arvi',
        price: '$130',
        image: Image8,
    },
    {
        name: 'Museo de España',
        price: '$160',
        image: Image9,
    },
    {
        name: 'Museo del agua',
        price: '$110',
        image: Image10,
    },
    {
        name: 'Parque Norte',
        price: '$170',
        image: Image11,
    },
    {
        name: 'Salto del angel',
        price: '$140',
        image: Image12,
    },
];

const customStyles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "2rem",
        maxWidth: "800px",
        margin: "0 auto",
    },
    h1: {
        fontFamily: "Comic Sans MS, sans-serif", 
        fontSize: "40px", 
        marginBottom: "1rem", 
        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)", 
    },
    section: {
        padding: "2rem", 
        textAlign: "center",
    },
    card: {
        width: "350px", 
        margin: "1rem",
    },
    media: {
        height: "240px",
    },
};

export const ServiciosPage = () => {
    const firstRowServices = servicesData.slice(0, 3);
    const secondRowServices = servicesData.slice(3);

    return (
        <>
            <Bar />
            <section style={customStyles.section}>
                <div style={customStyles.container}>
                    <h1 style={customStyles.h1}>SERVICIOS DE TURISMO EN MEDELLÍN</h1>
                </div>
            </section>

            <section style={customStyles.section}>
                <Grid container spacing={3} justifyContent="center">
                    {firstRowServices.map((service, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card style={customStyles.card}>
                                <CardMedia
                                    component="img"
                                    alt={service.name}
                                    height="240" 
                                    image={service.image}
                                />
                                <CardContent>
                                    <Typography variant="h5" component="div">
                                        {service.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Precio: {service.price}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </section>

            <section style={customStyles.section}>
                <Grid container spacing={3} justifyContent="center">
                    {secondRowServices.map((service, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card style={customStyles.card}>
                                <CardMedia
                                    component="img"
                                    alt={service.name}
                                    height="240" 
                                    image={service.image}
                                />
                                <CardContent>
                                    <Typography variant="h5" component="div">
                                        {service.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Precio: {service.price}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </section>
        </>
    );
};

export default ServiciosPage;
