import { Box } from '@mui/material'
import React from 'react'
import Indio from '../../assets/indio.jpg'
import { Margin } from '@mui/icons-material'
import Rio from '../../assets/rio.jpg'
import carousel1 from '../../assets/carousel1.jpg'
import carousel2 from '../../assets/carousel2.jpg'
import carousel3 from '../../assets/carousel3.jpg'
import map from '../../assets/Map.jpg'


export const GuiaPage = () => {
    return (
        <>
            <Box sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 2
            }}>
                <img src={map} />

                <Box sx={{
                    display: "flex",
                    flexDirection: "column",

                }}>
                    <h1>¿Como hacer turismo sostenible?</h1>
                    <h2>Aprende a como turistear en Colombia de una manera sostenible y segura</h2>

                </Box>


            </Box>


            <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",

                }}>
                    <h1>¿Que llevar para la caminada?</h1>
                    <h3>Recuerda llevar todos tus equipos para las caminatas ecologicas</h3>
                    </Box>
                
            <Box sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 2
            }}>


                <img src={carousel1} />
                <img src={carousel2} />
                <img src={carousel3} />

            </Box>

          




        </>



    )
}

export default GuiaPage