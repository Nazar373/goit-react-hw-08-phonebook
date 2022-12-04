import { Box, Button } from '@mui/material';
import React from 'react';

import { NavLink } from 'react-router-dom';

export const AuthNav = () => {

  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
      <Button
        sx={{ my: 2, color: 'white', display: 'block' }}
      >
        <NavLink to="/login">Login</NavLink>
      </Button>
      <Button
        sx={{ my: 2, color: 'white', display: 'block' }}
      >
        <NavLink to="/register">Register</NavLink>
      </Button>
    </Box>
  );
};
