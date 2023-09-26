import { Box } from '@mui/material'
import React from 'react'
import Indio from '../../assets/indio.jpg'
import { Margin } from '@mui/icons-material'
import Rio from '../../assets/rio.jpg'






export const ServiciosPage = () => {
    return (
        <>
            <Box sx={{
                display: "flex",
                flexDirection: "row",
                marginLeft:27,
                alignItems: "center",
                marginTop: 2
            }}>


                <Box sx={{
                    display: "flex",
                    flexDirection: "column",

                }}>
                    <h3>Paquetes turisticos</h3>
                    <h2>Los increible lugares de Colombia</h2>

                </Box>
                

            </Box>

            <Box sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 2
            }}>

                <img src={Rio} />
                <h1>Nuestros planes de tour son los mejores para cumplir tus deseos de conocer Colombia.</h1>


            </Box>


        </>



    )
}

export default ServiciosPage