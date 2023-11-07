import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import Logo from '../../assets/logo.png';

const navLinks = [
  { to: '/', text: 'Inicio' },
  { to: '/servicios', text: 'Servicios' },
  { to: '/guia', text: 'Guía' },
  { to: '/contacto', text: 'Contacto' },
];

export const NavBar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#00b0ff', boxShadow: 0 }}>
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img
            src={Logo}
            style={{
              maxWidth: '100%',
              marginRight: '10px',
              height: '40px', 
            }}
            alt="Imagen1"
          />
          <Typography variant="h6" sx={{ color: 'white' }}>
            Turismo Sostenible
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: 'auto' }}>
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.to}
              style={{
                textDecoration: 'none',
                color: 'white',
                margin: '0 10px',
                fontSize: '20px', 
              }}
            >
              {link.text}
            </Link>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
