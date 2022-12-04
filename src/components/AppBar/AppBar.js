import React, { useState } from 'react';

import { AuthNav } from '../AuthNav/AuthNav';
import { UserMenu } from '../UserMenu/UserMenu';
import { useAuth } from '../../hooks/useAuth';

import {
  AppBar,
  Box,
  Typography,
  Container,
  Menu,
  MenuItem,
  Button,
} from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import { NavLink } from 'react-router-dom';

export const AppBarComponent = () => {
  const { isLoggedIn } = useAuth();
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <NavLink to="/" end>
                    Home
                  </NavLink>
                </Typography>
              </MenuItem>
              {isLoggedIn && (
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <NavLink to="/contacts">Contacts</NavLink>
                  </Typography>
                </MenuItem>
              )}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              <NavLink to="/" end>
                Home
              </NavLink>
            </Button>
            {isLoggedIn && (
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <NavLink to="/contacts">Contacts</NavLink>
              </Button>
            )}
          </Box>
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
