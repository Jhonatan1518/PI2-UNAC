import { Box, Grid, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CardService from "../../components/Card/Card";
import axios from "axios";

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
    <Box sx={{ padding: 2, background: "linear-gradient(to right, #5EC465, #9ED48F)" }}>
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
    border: "2px solid #3A8057",
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
    </Box>
  );
};

export default ServiciosPage;
