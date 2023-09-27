import { Box } from '@mui/material'
import React from 'react'
import teque from '../../assets/tequendama.jpg'
import gachas from '../../assets/gachas.jpg'
import chorro from '../../assets/chorro.jpg'




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

                <img src={teque} />
                <img src={gachas} />
                <img src={chorro} />
               


            </Box>
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
                   
                    <h1>Los mejores precios para paquetes turisticos de Colombia.</h1>

                </Box>
                

            </Box>


        </>



    )
}

export default ServiciosPage