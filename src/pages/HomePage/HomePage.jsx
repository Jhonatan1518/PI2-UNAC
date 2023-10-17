import { Box } from '@mui/material'
import React from 'react'
import Indio from '../../assets/indio.jpg'

import Rio from '../../assets/rio.jpg'


export const HomePage = () => {
    return (
        <>
            <Box
  sx={{
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 2,
    padding: "20px", 
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)", 
    borderRadius: "10px", 
  }}
>
  <Box sx={{ display: "flex", flexDirection: "column", textAlign: "center" }}>
    <h1
      style={{
        fontWeight: "bold",
        fontSize: "24px", 
        margin: 0, 
      }}
    >
      En Colombia el turismo es sostenible
    </h1>
    <h2
      style={{
        fontSize: "18px", 
        margin: 0, 
      }}
    >
      Aprende cómo turistear en Colombia de una manera sostenible y segura.
    </h2>
  </Box>
  <img
    src={Indio}
    style={{
      maxWidth: "100%", 
    }}
  />
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