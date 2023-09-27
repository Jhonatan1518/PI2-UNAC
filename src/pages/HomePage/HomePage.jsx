import { Box } from '@mui/material'
import React from 'react'
import Indio from '../../assets/indio.jpg'

import Rio from '../../assets/rio.jpg'


export const HomePage = () => {
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

                <img src={Rio} />
                <h1>Nuestros planes de tour son los mejores para cumplir tus deseos de conocer Colombia.</h1>


            </Box>










        </>



    )
}

export default HomePage