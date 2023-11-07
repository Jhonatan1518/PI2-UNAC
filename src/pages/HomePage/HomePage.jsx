import { Box, Typography } from "@mui/material";
import React from "react";
import Indio from "../../assets/indio.jpg";
import Mujer from "../../assets/mujer.jpg";
import HomeBanner from "../../components/HomeBanner/HomeBanner";

export const HomePage = () => {
  return (
    <>
      <HomeBanner />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
          borderRadius: "10px",
          background: "linear-gradient(to right, #53c4f7, #99dfff )",
          color: "white",
        }}
      >
        <Box
          sx={{ display: "flex", flexDirection: "column", textAlign: "center" }}
        >
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", fontSize: "24px", margin: 0 }}
          >
            En Colombia el turismo es sostenible
          </Typography>
          <Typography variant="h6" sx={{ fontSize: "18px", margin: 0 }}>
            Aprende cómo turistear en Colombia de una manera sostenible y
            segura.
          </Typography>
        </Box>
        <img
          src={Indio}
          style={{
            maxWidth: "100%",
          }}
          alt="Imagen1"
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(to right, #53c4f7, #99dfff   )",
          color: "white",
        }}
      >
        <img
          src={Mujer}
          style={{
            maxWidth: "50%",
            marginRight: "20px",
            
          }}
          alt="Imagen2"
        />
        <Box
          sx={{ display: "flex", flexDirection: "column", textAlign: "center" }}
        >
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", fontSize: "24px", margin: 0 }}
          >
            En Colombia el turismo es sostenible
          </Typography>
          <Typography variant="h6" sx={{ fontSize: "18px", margin: 0 }}>
            Aprende cómo turistear en Colombia de una manera sostenible y
            segura.
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default HomePage;
