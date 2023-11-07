import React from "react";
import { Container, Grid, TextField, Button, Typography } from "@mui/material";

export const ContactPage = () => {
  return (
    <section style={{ color: "gray", fontFamily: "Arial" }}>
      <Container maxWidth="lg" style={{ padding: "4rem 0" }}>
        <Grid container spacing={3}>
          <Grid item lg={7} md={6}>
            <iframe
              width="100%"
              height="100%"
              title="map"
              frameBorder="0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63458.35966245839!2d-75.62241111984584!3d6.244287171743183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4428dfb80fad05%3A0x42137cfcc7b53b56!2sMedell%C3%ADn%2C%20Medellin%2C%20Antioquia%2C%20Colombia!5e0!3m2!1sen!2sus!4v1699326170652!5m2!1sen!2sus"
              
            ></iframe>
          </Grid>
          <Grid item lg={5} md={6}>
            <Typography
              variant="h6"
              style={{
                color: "gray",
                fontWeight: "bold",
                fontSize: "1.25rem",
                marginBottom: "1rem",
              }}
            >
              Contactanos
            </Typography>
            <Typography
              variant="body1"
              style={{ color: "gray", marginBottom: "1rem" }}
            >
              Escribenos para brindarte nuestros planes de turismo
            </Typography>
            <TextField
              id="name"
              label="Name"
              variant="outlined"
              style={{ marginBottom: "1rem" }}
            />
            <TextField
              
              id="email"
              label="Email"
              variant="outlined"
              style={{ marginBottom: "1rem" }}
            />
            <TextField
              fullWidth
              id="message"
              label="Message"
              variant="outlined"
              multiline
              rows={5}
              style={{ marginBottom: "1rem" }}
            />
            <Button
              variant="contained"
              color="primary"
              style={{
                textTransform: "none",
                backgroundColor: "#00b0ff",
                padding: "0.5rem 2rem",
                borderRadius: 0,
                fontWeight: "bold",
                color: "white",
              }}
            >
              Enviar
            </Button>
            <Typography
              variant="body2"
              style={{ color: "gray", marginTop: "1rem" }}
            ></Typography>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default ContactPage;
