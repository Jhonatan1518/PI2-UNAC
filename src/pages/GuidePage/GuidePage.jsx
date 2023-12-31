import React from 'react';
import { Box } from '@mui/material';
import Bar from '../../components/Bar';
import Map from '../../assets/Map.png'


import TuImagen from '../../assets/Map.png';

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
        textTransform: "uppercase",
        fontFamily: "Arial, sans-serif",
        fontSize: "28px",
        marginBottom: "0.5rem",
    },
    h2: {
        fontFamily: "Arial, sans-serif",
        fontSize: "18px",
        marginBottom: "1rem",
    },
    section: {
        padding: "1rem",
        marginBottom: "2rem",
        textAlign: "center",
    },
    img: {
        maxWidth: "100%",
        height: "auto",
    },
};

export const GuidePage = () => {
    return (
        <>
            <Bar />
            <section style={customStyles.section}>
                <div style={customStyles.container}>
                    <h1 style={customStyles.h1}>¿Cómo hacer turismo sostenible?</h1>
                    <h2 style={customStyles.h2}>Aprende a cómo turistear en Colombia de una manera sostenible y segura.</h2>
                </div>
            </section>
            
            
            <section style={customStyles.section}>
                <div style={customStyles.container}>
                    <img src={TuImagen} alt="Tu Imagen" style={customStyles.img} />
                </div>
            </section>
            
           
            <section style={customStyles.section}>
                <div style={customStyles.container}>
                    <h3>¿Qué llevar para la caminata?</h3>
                </div>
            </section>
        </>
    );
}



