import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from "@mui/material";
//import Logo from '../../assets/logo.png'

export const NavBar = () => {
  
  return (
    <AppBar position="static" sx={{ backgroundColor: '#00b0ff ' }}>
    <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'white' }}>
      
        Turismo Sostenible
      </Typography>
      <Link to="/" style={{ textDecoration: 'none', color: 'white', marginRight: '10px', fontSize:'25px' }}>
        Inicio
      </Link>
      <Link to="/servicios" style={{ textDecoration: 'none', color: 'white', marginRight: '10px',fontSize:'25px' }}>
        Servicios
      </Link>
      <Link to="/guia" style={{ textDecoration: 'none', color: 'white', marginRight: '10px', fontSize:'25px' }}>
        Guia
      </Link>
      <Link to="/contacto" style={{ textDecoration: 'none', color: 'white', fontSize:'25px'}}>
        Contacto
      </Link>
    </Toolbar>
  </AppBar>
  );
}
export default NavBar;
