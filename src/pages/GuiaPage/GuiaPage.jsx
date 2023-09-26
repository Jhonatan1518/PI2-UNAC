import { Box } from '@mui/material'
import React from 'react'
import Indio from '../../assets/indio.jpg'
import { Margin } from '@mui/icons-material'
import Rio from '../../assets/rio.jpg'
import carousel1 from '../../assets/carousel1.jpg'
import carousel2 from '../../assets/carousel2.jpg'
import carousel3 from '../../assets/carousel3.jpg'

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


                <Box sx={{
                    display: "flex",
                    flexDirection: "column",

                }}>
                    <h1>En Colombia el turismo es sostenible</h1>
                    <h2>Aprende a como turistear en Colombia de una manera sostenible y segura.</h2>

                </Box>
                <img src={Indio} />

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