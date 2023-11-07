import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardHeader,
  Avatar,
} from '@mui/material';
import React, { useEffect, useState } from "react";
import CardService from "../../components/Card/Card";
import axios from "axios";
import { featuresData } from "./featureData";
import FeatureCard from "../../components/FeatureCard/FeatureCard";

export const ServiciosPage = () => {
  const [park, setPark] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const searchParks = async (term) => {
    try {
      const response = await axios.get(`http://localhost:3000/park/${term}`);
      setSearchResults(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSearchChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    searchParks(term);
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/park")
      .then((response) => {
        setPark(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <Box sx={{ padding: 2, background: "linear-gradient(to right, #53c4f7,  #99dfff)" }}>
      <Box>
      <Typography variant="h3" sx={{ fontWeight: "bold", color: "white", marginBottom: 4 }}>
        Descubre los Parques en Colombia
      </Typography>

      <input
  type="text"
  placeholder="Buscar parques por nombre"
  value={searchTerm}
  onChange={handleSearchChange}
  style={{
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "20px",
    border: "2px solid #99dfff",
    marginBottom: "16px",
  }}
/>

      {searchResults.length > 0 ? (
        <Grid container spacing={4}>
          {searchResults.map((park, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <CardService
                name={park.name}
                department={park.departament}
                city={park.city}
                ubication={park.ubication}
              />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Grid container spacing={4}>
          {park.map((park, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <CardService
                name={park.name}
                department={park.departament}
                city={park.city}
                ubication={park.ubication}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
    <Box sx={{ marginTop:'4rem' }}>
      <Container py={4}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            mb: 6,
            textAlign: 'center',
          }}
        >
          <Typography variant="h4" fontWeight="500" mt={2} color="#333">
            Nuestros servicios
          </Typography>
          <Typography variant="body1" color="#666" maxWidth="50ch" mt={2} mx="auto">
            Al hacer parte de nuestros servicios pueden tener los sigueintes beneficios
            </Typography>
        </Box>
        <Grid container spacing={4}>
          {featuresData.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </Grid>
      </Container>
    </Box>
    </Box>
  );
};

export default ServiciosPage;
