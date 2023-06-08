import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography,Box } from '@mui/material'

import './Header.css'

import MenuIcon from '@mui/icons-material/Menu'


const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          <Typography  variant="h6">My Portfolio</Typography>
          <Box>
            <Link className="header-link" to="/" style={{ marginRight: '20px' }}>About</Link>
            <Link className="header-link" to="/projects" style={{ marginRight: '20px' }}>Projects</Link>
            <Link className="header-link" to="/skills" style={{ marginRight: '20px' }}>Skills</Link>
            <Link  className="header-link" to="/contact" style={{ marginRight: '20px' }}>Contact</Link>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};


export default Header
