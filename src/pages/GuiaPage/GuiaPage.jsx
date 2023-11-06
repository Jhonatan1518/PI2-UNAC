import { Box, TextField,Grid  } from "@mui/material";
import React, { useState, useEffect } from "react";
import axios from "axios";
import CardService from '../../components/Card/Card'
import Indio from "../../assets/indio.jpg";
import { Margin } from "@mui/icons-material";
import Rio from "../../assets/rio.jpg";
import carousel1 from "../../assets/carousel1.jpg";
import carousel2 from "../../assets/carousel2.jpg";
import carousel3 from "../../assets/carousel3.jpg";
import map from "../../assets/Map.jpg";

export const GuiaPage = () => {
 
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 2,
        }}
      >
         
      </Box>
    </>
  );
};

export default GuiaPage;
